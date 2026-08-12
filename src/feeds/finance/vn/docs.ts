/**
 * Vietnam official documents — the document half of the `fin-vnmacro` report.
 *
 * Three of the framework's load-bearing blocks have no free JSON feed at all:
 * SBV policy and interbank rates, government-bond yields and the corporate-bond
 * maturity wall, and monthly CPI/FDI/PMI. They are published as CMS articles
 * (NSO) and as a weekly PDF bulletin (VBMA), so each document is reduced here
 * before it ever reaches the LLM:
 *
 *   NSO  → Readability article text → paragraphs that carry numbers
 *   VBMA → per-page PDF text        → the pages that score on macro keywords
 *
 * Any source that fails is dropped: the report is written from whatever
 * survived, and the prompt is told which blocks are missing.
 */

import { rankPages, relevantExcerpt, type PdfPage } from "../../../core/doc-extract.ts";
import {
  NSO_CPI_LISTING,
  NSO_MONTHLY_LISTING,
  NSO_SOURCE_NAME,
  fetchNsoArticle,
  findLatestArticleUrl,
} from "../../../providers/nso.ts";
import { VBMA_SOURCE_NAME, fetchLatestBulletin } from "../../../providers/vbma.ts";

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
// Keyword sets — what makes a paragraph or page worth keeping
// ---------------------------------------------------------------------------

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

/** Below this an excerpt carries no numbers worth reporting. */
const MIN_EXCERPT_CHARS = 200;

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
    const articleUrl = await findLatestArticleUrl(listingUrl);
    if (!articleUrl) throw new Error("no article link on listing page");

    const article = await fetchNsoArticle(articleUrl);
    if (article.usedFallback) {
      console.log(`  [vndocs] ${id}: Readability fell back to tag-strip`);
    }
    const excerpt = relevantExcerpt(article.text, keywords, maxChars);
    if (excerpt.length < MIN_EXCERPT_CHARS) {
      throw new Error(`excerpt too short (${excerpt.length} chars)`);
    }

    console.log(`  [vndocs] ${id}: ${excerpt.length} chars from ${articleUrl}`);
    return {
      id,
      source: NSO_SOURCE_NAME,
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
    const bulletin = await fetchLatestBulletin();

    const ranked = rankPages(bulletin.pages, BOND_KEYWORDS, PDF_MAX_PAGES);
    if (ranked.length === 0) throw new Error(`no relevant pages among ${bulletin.pages.length}`);

    const excerpt = formatPdfExcerpt(ranked, PDF_PAGE_MAX_CHARS);
    console.log(
      `  [vndocs] ${id}: kept pages ${ranked.map((p) => p.page).join(",")} of ${bulletin.pages.length} (${excerpt.length} chars)`,
    );
    return {
      id,
      source: VBMA_SOURCE_NAME,
      title: bulletin.title,
      url: bulletin.url,
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
