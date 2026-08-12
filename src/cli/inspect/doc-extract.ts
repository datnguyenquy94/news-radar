/**
 * Probes for `src/core/doc-extract.ts` — the HTML/PDF parsing that the Vietnam
 * document sources depend on.
 *
 * These are the highest-value probes in the set: the extraction quality is
 * invisible from the pipeline output, and both sources are CMS pages that
 * re-theme without warning. Each target takes a live URL or a saved file, so a
 * regression can be reproduced offline from the exact byte stream that broke.
 */

import fs from "node:fs";
import { Args, ProbeError, describeError, kv, oneLine, sample, type Target } from "./kit.ts";

/** Bytes of the source document, from `--file` or `--url`. */
async function loadBytes(args: Args): Promise<{ bytes: Uint8Array; origin: string }> {
  const file = args.str("file");
  const url = args.str("url");
  if (file && url) throw new ProbeError("pass either --file or --url, not both");

  if (file) {
    if (!fs.existsSync(file)) throw new ProbeError(`no such file: ${file}`);
    return { bytes: new Uint8Array(fs.readFileSync(file)), origin: file };
  }
  if (url) {
    const { fetchWithTimeout } = await import("../../core/http.ts");
    const timeoutMs = args.num("timeout-ms", 30_000);
    try {
      const resp = await fetchWithTimeout(url, { timeoutMs });
      return { bytes: new Uint8Array(await resp.arrayBuffer()), origin: url };
    } catch (err) {
      // Node's fetch rejects with a bare "fetch failed"; the DNS/connection
      // detail lives in `cause`, and a raw rethrow prints a stack instead.
      throw new ProbeError(`could not fetch ${url}: ${describeError(err)}`);
    }
  }
  throw new ProbeError("one of --url <url> or --file <path> is required");
}

// ---------------------------------------------------------------------------
// doc-extract:html
// ---------------------------------------------------------------------------

export const docExtractHtmlTarget: Target = {
  name: "doc-extract:html",
  summary: "extractArticle() on a live URL or a saved HTML file — title, chars, fallback flag, head",
  options: [
    { name: "url", arg: "url", desc: "fetch this page (browser UA + timeout)" },
    { name: "file", arg: "path", desc: "read HTML from disk instead of fetching" },
    { name: "chars", arg: "n", desc: "how many characters of the article to print (default 400)" },
    { name: "timeout-ms", arg: "ms", desc: "fetch timeout (default 30000)" },
  ],
  async run(args) {
    const { bytes, origin } = await loadBytes(args);
    const html = Buffer.from(bytes).toString("utf-8");
    const { extractArticle, MIN_ARTICLE_CHARS } = await import("../../core/doc-extract.ts");

    const headChars = args.num("chars", 400);
    const result = extractArticle(html, origin);
    const head = result.text.slice(0, headChars);

    return {
      json: { origin, htmlChars: html.length, minArticleChars: MIN_ARTICLE_CHARS, ...result, head },
      lines: [
        kv("origin", origin),
        kv("htmlChars", html.length),
        kv("title", result.title || "(none)"),
        kv("articleChars", result.text.length),
        kv("usedFallback", result.usedFallback),
        `head[${head.length}]:`,
        ...head.split("\n").map((l) => `  ${l}`),
      ],
      // An empty extraction means the parser produced nothing usable at all.
      ...(result.text.length === 0 ? { failure: "extraction produced no text" } : {}),
    };
  },
};

// ---------------------------------------------------------------------------
// doc-extract:pdf
// ---------------------------------------------------------------------------

/** Default keyword set: the VBMA bond-bulletin vocabulary from `vndocs.ts`. */
const DEFAULT_PDF_KEYWORDS = [
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

export const docExtractPdfTarget: Target = {
  name: "doc-extract:pdf",
  summary: "extractPdfPages() + rankPages() on a live URL or a saved PDF — per-page chars and scores",
  options: [
    { name: "url", arg: "url", desc: "fetch this PDF" },
    { name: "file", arg: "path", desc: "read the PDF from disk instead of fetching" },
    { name: "keywords", arg: "a,b,c", desc: "ranking keywords (default: the VBMA bond set)" },
    { name: "limit", arg: "n", desc: "how many pages rankPages() keeps (default 4)" },
    { name: "timeout-ms", arg: "ms", desc: "fetch timeout (default 60000)" },
  ],
  async run(args) {
    const { bytes, origin } = await loadBytes(args);
    const { extractPdfPages, rankPages, scoreText } = await import("../../core/doc-extract.ts");

    const keywords = args.list("keywords") ?? DEFAULT_PDF_KEYWORDS;
    const limit = args.num("limit", 4);

    // pdfjs detaches the buffer it is handed, so the size has to be read first.
    const pdfBytes = bytes.length;
    let pages;
    try {
      pages = await extractPdfPages(bytes);
    } catch (err) {
      // pdfjs throws its own exception classes, which print as a bare stack.
      throw new ProbeError(`${origin} is not a readable PDF: ${describeError(err)}`);
    }
    const scored = pages.map((p) => ({
      page: p.page,
      chars: p.text.length,
      score: scoreText(p.text, keywords),
    }));
    const kept = rankPages(pages, keywords, limit);
    const keptPages = kept.map((p) => p.page);

    return {
      json: {
        origin,
        pdfBytes,
        pageCount: pages.length,
        keywords,
        limit,
        pages: scored,
        kept: kept.map((p) => ({
          page: p.page,
          score: p.score,
          chars: p.text.length,
          head: oneLine(p.text, 160),
        })),
      },
      lines: [
        kv("origin", origin),
        kv("pdfBytes", pdfBytes),
        kv("pageCount", pages.length),
        kv("keywords", keywords.join(",")),
        kv("keptPages", keptPages.length ? keptPages.join(",") : "(none)"),
        "pages (page: chars, score):",
        ...scored.map(
          (p) =>
            `  p.${String(p.page).padStart(2)}: ${String(p.chars).padStart(5)} chars, score ${p.score}${keptPages.includes(p.page) ? "  <-- kept" : ""}`,
        ),
        "kept page heads:",
        ...sample(kept, limit, (p) => `p.${p.page} (score ${p.score}): ${oneLine(p.text, 140)}`),
      ],
      ...(pages.length === 0 ? { failure: "PDF had no extractable pages" } : {}),
    };
  },
};

// ---------------------------------------------------------------------------
// doc-extract:excerpt
// ---------------------------------------------------------------------------

export const docExtractExcerptTarget: Target = {
  name: "doc-extract:excerpt",
  summary: "relevantExcerpt() over a text/HTML file — the narrowed passages an LLM would actually see",
  options: [
    {
      name: "file",
      arg: "path",
      desc: "text or HTML file to narrow (HTML is run through extractArticle first)",
    },
    { name: "keywords", arg: "a,b,c", desc: "keywords to score paragraphs on (required)" },
    { name: "max-chars", arg: "n", desc: "excerpt budget in characters (default 2500)" },
    { name: "min-paragraph-chars", arg: "n", desc: "shorter paragraphs are dropped (default 40)" },
  ],
  async run(args) {
    const file = args.requireStr("file");
    if (!fs.existsSync(file)) throw new ProbeError(`no such file: ${file}`);
    const keywords = args.list("keywords");
    if (!keywords?.length) throw new ProbeError("--keywords a,b,c is required");

    const maxChars = args.num("max-chars", 2500);
    const minParagraphChars = args.num("min-paragraph-chars", 40);

    const raw = fs.readFileSync(file, "utf-8");
    const { extractArticle, relevantExcerpt } = await import("../../core/doc-extract.ts");

    // Accept either raw article text or a full page; the pipeline always
    // narrows extracted article text, so mirror that when given HTML.
    const looksHtml = /<html|<body|<div|<p[\s>]/i.test(raw.slice(0, 4000));
    const text = looksHtml ? extractArticle(raw, file).text : raw;
    const excerpt = relevantExcerpt(text, keywords, maxChars, minParagraphChars);

    return {
      json: {
        file,
        looksHtml,
        sourceChars: text.length,
        keywords,
        maxChars,
        minParagraphChars,
        excerptChars: excerpt.length,
        excerpt,
      },
      lines: [
        kv("file", file),
        kv("treatedAsHtml", looksHtml),
        kv("sourceChars", text.length),
        kv("keywords", keywords.join(",")),
        kv("maxChars", maxChars),
        kv("excerptChars", excerpt.length),
        kv("reduction", `${((1 - excerpt.length / Math.max(text.length, 1)) * 100).toFixed(1)}%`),
        "excerpt:",
        ...excerpt.split("\n").map((l) => `  ${l}`),
      ],
      ...(excerpt.length === 0 ? { failure: "excerpt is empty" } : {}),
    };
  },
};
