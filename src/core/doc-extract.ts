/**
 * Document extraction for sources that publish prose instead of JSON.
 *
 * Vietnamese macro data lives in two awkward formats: CMS-rendered HTML pages
 * (NSO, SBV) and PDF bulletins (VBMA). Feeding either raw into an LLM burns
 * tokens on navigation chrome and chart axis labels, so both are reduced to
 * article text here, then narrowed to the passages that actually carry numbers.
 *
 *   HTML → linkedom DOM → Mozilla Readability → article text
 *   PDF  → pdfjs per-page text → keyword-ranked page selection
 *
 * linkedom rather than jsdom: Readability needs a DOM, and a batch job that
 * parses a handful of pages per run should not pay jsdom's startup cost.
 *
 * Readability fails silently on some themes — it can score a mega-menu higher
 * than the article body and return a wall of nav links. `extractArticle`
 * therefore strips known boilerplate containers *before* parsing, and falls
 * back to a plain tag-strip when the result is missing or implausibly short.
 */

import { Readability } from "@mozilla/readability";
import { parseHTML } from "linkedom";

import { fetchWithTimeout } from "./http.ts";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface HtmlExtraction {
  title: string;
  text: string;
  /** true when Readability returned nothing usable and the tag-strip was used. */
  usedFallback: boolean;
}

export interface PdfPage {
  page: number; // 1-indexed
  text: string;
}

/** A page kept by `rankPages`, with the score that earned it a slot. */
export interface RankedPage extends PdfPage {
  score: number;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Below this, a Readability result is treated as a failure. */
export const MIN_ARTICLE_CHARS = 200;

/**
 * Containers Readability sometimes mistakes for the article body. Removing
 * them first is what makes NSO's Avada/WordPress pages extract their report
 * text instead of their sitemap-sized navigation menu.
 */
const BOILERPLATE_SELECTOR =
  "script, style, noscript, iframe, svg, nav, header, footer, aside, form, button, select, .menu, .navigation, .breadcrumb";

// ---------------------------------------------------------------------------
// HTML
// ---------------------------------------------------------------------------

function normalizeWhitespace(text: string): string {
  return text
    .replace(/\r/g, "")
    .replace(/[ \t\u00a0]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/** Last-resort extraction: drop tags, unescape the handful of entities we see. */
function stripTags(html: string): string {
  return normalizeWhitespace(
    html
      .replace(/<(script|style|noscript)[\s\S]*?<\/\1>/gi, " ")
      .replace(/<\/(p|div|tr|li|h[1-6]|section|article)>/gi, "\n")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/gi, " ")
      .replace(/&amp;/gi, "&")
      .replace(/&lt;/gi, "<")
      .replace(/&gt;/gi, ">")
      .replace(/&quot;/gi, '"')
      .replace(/&#(\d+);/g, (_m, code: string) => String.fromCodePoint(Number(code))),
  );
}

/**
 * Extract the readable article from an HTML document.
 *
 * Falls back to a tag-strip when Readability returns nothing or returns less
 * than `MIN_ARTICLE_CHARS` — the case the fallback exists for is a page whose
 * real content is a data table, which Readability discards wholesale.
 */
export function extractArticle(html: string, url?: string): HtmlExtraction {
  const fallback = (): HtmlExtraction => ({ title: "", text: stripTags(html), usedFallback: true });

  let document: Document;
  try {
    ({ document } = parseHTML(html) as unknown as { document: Document });
  } catch {
    return fallback();
  }

  for (const el of Array.from(document.querySelectorAll(BOILERPLATE_SELECTOR))) el.remove();

  let article: { title?: string | null; textContent?: string | null } | null = null;
  try {
    // Readability mutates the document it is given; we already own this copy.
    article = new Readability(document, { charThreshold: MIN_ARTICLE_CHARS }).parse();
  } catch {
    article = null;
  }

  if (!article || !article.textContent || article.textContent.length < MIN_ARTICLE_CHARS) {
    const stripped = fallback();
    // Keep Readability's title even when its body was unusable.
    if (article?.title) stripped.title = article.title;
    else if (url) stripped.title = url;
    return stripped;
  }

  return {
    title: (article.title ?? "").trim(),
    text: normalizeWhitespace(article.textContent),
    usedFallback: false,
  };
}

// ---------------------------------------------------------------------------
// PDF
// ---------------------------------------------------------------------------

/**
 * Extract text from a PDF, one string per page.
 *
 * Page granularity is deliberate: financial bulletins put one topic per page
 * (money market, FX, primary auctions, corporate bonds), so scoring pages
 * individually is what lets `rankPages` drop the 9 pages we don't need.
 */
export async function extractPdfPages(data: Uint8Array): Promise<PdfPage[]> {
  // Loaded lazily and via the legacy build: the modern build assumes browser
  // globals, and neither should be pulled in on runs that fetch no PDF.
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const task = pdfjs.getDocument({
    data,
    // No rendering happens here, so system fonts are pure overhead, and font
    // diagnostics are noise for a text-only extraction.
    useSystemFonts: false,
    verbosity: 0,
  });

  const pages: PdfPage[] = [];
  try {
    const doc = await task.promise;
    for (let i = 1; i <= doc.numPages; i++) {
      const page = await doc.getPage(i);
      try {
        const content = await page.getTextContent();
        const text = content.items
          .map((item) => ("str" in item ? item.str : ""))
          .join(" ")
          .replace(/\s+/g, " ")
          .trim();
        pages.push({ page: i, text });
      } finally {
        page.cleanup();
      }
    }
  } finally {
    // Tears down the worker; without it the process keeps a handle open.
    await task.destroy();
  }
  return pages;
}

// ---------------------------------------------------------------------------
// Relevance narrowing — the part that actually saves tokens
// ---------------------------------------------------------------------------

/**
 * Weighted keyword score. Distinct keywords count for more than repeats, so a
 * page covering several topics outranks one that says "yield" ten times.
 * Zero means no keyword matched — the gate every caller filters on.
 */
export function scoreText(text: string, keywords: readonly string[]): number {
  const lower = text.toLowerCase();
  let score = 0;
  for (const kw of keywords) {
    const needle = kw.toLowerCase();
    let from = 0;
    let hits = 0;
    for (;;) {
      const at = lower.indexOf(needle, from);
      if (at === -1) break;
      hits++;
      from = at + needle.length;
    }
    // Matching a keyword at all is worth more than any number of repeats, so
    // breadth of coverage always outranks one term said over and over.
    if (hits > 0) score += 5 + Math.min(hits - 1, 3);
  }
  return score;
}

/** Digit density, capped — a tiebreak toward data pages over narrative ones. */
function numericBonus(text: string): number {
  return Math.min((text.match(/\d/g) ?? []).length / 100, 5);
}

/**
 * Keep the `limit` highest-scoring pages, restored to document order.
 * Pages with no keyword signal at all are dropped even if `limit` allows them.
 */
export function rankPages(pages: PdfPage[], keywords: readonly string[], limit: number): RankedPage[] {
  return pages
    .map((p) => ({ ...p, score: scoreText(p.text, keywords) }))
    .filter((p) => p.score > 0 && p.text.length > 0)
    .sort((a, b) => b.score + numericBonus(b.text) - (a.score + numericBonus(a.text)))
    .slice(0, limit)
    .sort((a, b) => a.page - b.page);
}

/**
 * Reduce article text to the passages worth sending to an LLM: the paragraphs
 * that score highest on `keywords`, restored to document order and capped at
 * `maxChars`. Returns the head of the text when nothing matches, so a source
 * that rewords itself degrades to "less relevant" rather than to nothing.
 *
 * Paragraphs are ranked rather than taken in order, because these reports lead
 * with sections we don't want — NSO's monthly bulletin opens with several
 * thousand characters on the rice harvest before it reaches FDI and trade, and
 * a sequential fill would spend the whole budget there.
 */
export function relevantExcerpt(
  text: string,
  keywords: readonly string[],
  maxChars: number,
  minParagraphChars = 40,
): string {
  const paragraphs = text
    .split(/\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length >= minParagraphChars);

  const scored = paragraphs
    .map((text, order) => ({ text, order, score: scoreText(text, keywords) }))
    .filter((p) => p.score > 0);

  const kept: typeof scored = [];
  let used = 0;
  for (const p of [...scored].sort((a, b) => b.score - a.score)) {
    if (used + p.text.length > maxChars) continue;
    kept.push(p);
    used += p.text.length;
  }

  if (kept.length === 0) return text.slice(0, maxChars).trim();
  return kept
    .sort((a, b) => a.order - b.order)
    .map((p) => p.text)
    .join("\n");
}

// ---------------------------------------------------------------------------
// Fetch helpers
// ---------------------------------------------------------------------------

/** Fetch an HTML page and return its extracted article. */
export async function fetchArticle(url: string, timeoutMs?: number): Promise<HtmlExtraction> {
  const resp = await fetchWithTimeout(url, { timeoutMs: timeoutMs ?? 30_000 });
  return extractArticle(await resp.text(), url);
}

/** Fetch a PDF and return its per-page text. */
export async function fetchPdfPages(url: string, timeoutMs = 60_000): Promise<PdfPage[]> {
  const resp = await fetchWithTimeout(url, { timeoutMs });
  return extractPdfPages(new Uint8Array(await resp.arrayBuffer()));
}
