/**
 * Vietnam macro sources that publish documents rather than data.
 *
 * Three of the framework's load-bearing blocks have no free JSON feed at all —
 * SBV policy and interbank rates, government-bond yields and the corporate-bond
 * maturity wall, and monthly CPI/FDI/PMI. They are published as CMS articles
 * (NSO) and as a weekly PDF bulletin (VBMA), so this module fetches the
 * document and reduces it before it ever reaches the LLM:
 *
 *   NSO  → Readability article text → paragraphs that carry numbers
 *   VBMA → per-page PDF text        → the pages that score on macro keywords
 *
 * Each source resolves its own "latest" link from a listing page rather than
 * guessing a URL, because both publishers encode the reporting period in the
 * path. Any source that fails is dropped: the report is written from whatever
 * survived, and the prompt is told which blocks are missing.
 */

import {
  fetchArticle,
  fetchPdfPages,
  fetchWithTimeout,
  rankPages,
  relevantExcerpt,
  type PdfPage,
} from "./doc-extract.ts";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface VnDoc {
  id: string;
  source: string; // publisher, for attribution in the report
  title: string;
  url: string;
  kind: "html" | "pdf";
  /** Narrowed text: relevant paragraphs (HTML) or ranked pages (PDF). */
  excerpt: string;
  /** PDF only — which pages survived ranking, for provenance. */
  pages?: number[];
}

export interface VnDocsData {
  docs: VnDoc[];
  fetchSuccess: boolean;
}

// ---------------------------------------------------------------------------
// Source definitions
// ---------------------------------------------------------------------------

const NSO_CPI_LISTING = "https://www.nso.gov.vn/en/cpi/";
const NSO_MONTHLY_LISTING = "https://www.nso.gov.vn/en/monthly-report/";
const VBMA_WEEKLY_LISTING = "https://vbma.org.vn/en/reports/weekly";
const VBMA_ORIGIN = "https://vbma.org.vn";

/** NSO article permalinks; the listings render them newest-first. */
const NSO_ARTICLE_RE =
  /href="(https:\/\/www\.nso\.gov\.vn\/en\/(?:data-and-statistics|highlight)\/\d{4}\/\d{2}\/[^"]+)"/g;

/** VBMA stores its bulletins under /storage/reports/<Month><Year>/<file>.pdf */
const VBMA_PDF_RE = /href="(\/storage\/reports\/[^"]+\.pdf)"/gi;

const CPI_KEYWORDS = [
  "consumer price index",
  "cpi",
  "core inflation",
  "gold price index",
  "us dollar price index",
  "increased by",
  "decreased by",
];

const MONTHLY_KEYWORDS = [
  "foreign direct investment",
  "fdi",
  "disbursed",
  "registered capital",
  "index of industrial production",
  "purchasing managers",
  "pmi",
  "export",
  "import",
  "trade balance",
  "consumer price index",
  "credit",
  "state budget",
  "public investment",
];

const BOND_KEYWORDS = [
  "interbank",
  "overnight",
  "exchange rate",
  "central rate",
  "usd/vnd",
  "usd index",
  "government bond",
  "yield",
  "auction",
  "corporate bond",
  "maturity",
  "sbv",
  "bill",
  "repo",
  "outright",
];

/** Excerpt budgets, in characters — the whole doc block stays near ~3k tokens. */
const CPI_MAX_CHARS = 2500;
const MONTHLY_MAX_CHARS = 3500;
const PDF_PAGE_MAX_CHARS = 1400;
const PDF_MAX_PAGES = 4;

// ---------------------------------------------------------------------------
// Link resolution
// ---------------------------------------------------------------------------

/** First match of `re` (a /g regex with one capture group), in document order. */
function firstLink(html: string, re: RegExp): string | null {
  re.lastIndex = 0;
  const match = re.exec(html);
  return match?.[1] ?? null;
}

async function fetchListing(url: string): Promise<string> {
  const resp = await fetchWithTimeout(url);
  return resp.text();
}

// ---------------------------------------------------------------------------
// NSO — CPI and the monthly socio-economic report
// ---------------------------------------------------------------------------

async function fetchNsoDoc(
  id: string,
  listingUrl: string,
  keywords: readonly string[],
  maxChars: number,
): Promise<VnDoc | null> {
  try {
    const articleUrl = firstLink(await fetchListing(listingUrl), NSO_ARTICLE_RE);
    if (!articleUrl) throw new Error("no article link on listing page");

    const article = await fetchArticle(articleUrl);
    if (article.usedFallback) {
      console.log(`  [vndocs] ${id}: Readability fell back to tag-strip`);
    }
    const excerpt = relevantExcerpt(article.text, keywords, maxChars);
    if (excerpt.length < 200) throw new Error(`excerpt too short (${excerpt.length} chars)`);

    console.log(`  [vndocs] ${id}: ${excerpt.length} chars from ${articleUrl}`);
    return {
      id,
      source: "National Statistics Office of Vietnam (NSO)",
      title: article.title || id,
      url: articleUrl,
      kind: "html",
      excerpt,
    };
  } catch (err) {
    console.error(`  [vndocs] ${id} failed: ${err}`);
    return null;
  }
}

// ---------------------------------------------------------------------------
// VBMA — weekly bond-market bulletin (PDF)
// ---------------------------------------------------------------------------

/** Join ranked pages into one excerpt, each page capped and labelled. */
export function formatPdfExcerpt(pages: PdfPage[], maxCharsPerPage: number): string {
  return pages
    .map((p) => `[p.${p.page}] ${p.text.slice(0, maxCharsPerPage).trim()}`)
    .join("\n\n")
    .trim();
}

async function fetchVbmaDoc(): Promise<VnDoc | null> {
  const id = "vbma-weekly";
  try {
    const listing = await fetchListing(VBMA_WEEKLY_LISTING);
    const href = firstLink(listing, VBMA_PDF_RE);
    if (!href) throw new Error("no PDF link on weekly report page");
    // Report filenames contain spaces; encode the path but keep the slashes.
    const pdfUrl = new URL(href, VBMA_ORIGIN).toString();

    // Titles sit in the <h4> immediately before each download link.
    const titleMatch = listing.match(/<h4[^>]*>\s*(Weekly Report[^<]*)<\/h4>/i);
    const title = (titleMatch?.[1] ?? "VBMA Weekly Bond Market Report").trim();

    const pages = await fetchPdfPages(pdfUrl);
    if (pages.length === 0) throw new Error("PDF had no extractable text");

    const ranked = rankPages(pages, BOND_KEYWORDS, PDF_MAX_PAGES);
    if (ranked.length === 0) throw new Error(`no relevant pages among ${pages.length}`);

    const excerpt = formatPdfExcerpt(ranked, PDF_PAGE_MAX_CHARS);
    console.log(
      `  [vndocs] ${id}: kept pages ${ranked.map((p) => p.page).join(",")} of ${pages.length} (${excerpt.length} chars)`,
    );
    return {
      id,
      source: "Vietnam Bond Market Association (VBMA)",
      title,
      url: pdfUrl,
      kind: "pdf",
      excerpt,
      pages: ranked.map((p) => p.page),
    };
  } catch (err) {
    console.error(`  [vndocs] ${id} failed: ${err}`);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export async function fetchVnDocsData(): Promise<VnDocsData> {
  console.log("  [vndocs] Fetching NSO articles + VBMA weekly PDF...");

  const results = await Promise.all([
    fetchNsoDoc("nso-cpi", NSO_CPI_LISTING, CPI_KEYWORDS, CPI_MAX_CHARS),
    fetchNsoDoc("nso-monthly", NSO_MONTHLY_LISTING, MONTHLY_KEYWORDS, MONTHLY_MAX_CHARS),
    fetchVbmaDoc(),
  ]);

  const docs = results.filter((d): d is VnDoc => d !== null);
  console.log(`  [vndocs] ${docs.length}/3 documents extracted`);
  return { docs, fetchSuccess: docs.length > 0 };
}
