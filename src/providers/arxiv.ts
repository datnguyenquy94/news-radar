/**
 * ArXiv Atom API.
 *
 * The feed is small and regular enough that a regex parse beats pulling in an
 * XML dependency; every extractor degrades to "" rather than throwing, so a
 * renamed field shows up as a blank column instead of a crash.
 */

import { HttpError, httpRequest } from "../core/http.ts";
import { sleep } from "../core/date.ts";
import { createLogger } from "../core/logger.ts";

const log = createLogger("arxiv");

export interface ArxivPaper {
  id: string;
  title: string;
  summary: string;
  authors: string[];
  published: string;
  updated: string;
  categories: string[];
  url: string;
  pdfUrl: string;
}

const API_URL = "https://export.arxiv.org/api/query";

/** ArXiv asks clients to wait this long between requests. */
export const REQUEST_DELAY_MS = 3000;

/** Categories worth scanning for AI work. */
export const AI_CATEGORIES = ["cs.AI", "cs.CL", "cs.LG"];

/**
 * Attempts per category. `export.arxiv.org` throttles datacenter IPs hard, and
 * the daily job runs from a GitHub Actions runner: a single unretried 503 used
 * to take out a category, and three categories fired `REQUEST_DELAY_MS` apart
 * land in the same throttle window, which silently skipped the whole report.
 */
export const MAX_ATTEMPTS = 3;

const RETRY_BASE_MS = 3_000;
const RETRY_MAX_MS = 60_000;

/** Throttling and gateway faults are worth another attempt; a 400 is our bug. */
const RETRYABLE_STATUS = new Set([408, 425, 429, 500, 502, 503, 504]);

/** Honour `Retry-After` when it asks for longer than our own backoff. */
function retryDelayMs(attempt: number, retryAfter: string | null): number {
  const seconds = retryAfter ? Number(retryAfter) : NaN;
  const requested = Number.isFinite(seconds) ? seconds * 1000 : 0;
  const backoff = RETRY_BASE_MS * 2 ** (attempt - 1);
  return Math.min(Math.max(backoff, requested), RETRY_MAX_MS);
}

/**
 * ArXiv reports a rejected query as a one-entry feed describing the problem,
 * which `parseFeed` would otherwise hand back as a paper titled "Error".
 *
 * The entry id is not a reliable marker — a bad `sortBy` points at
 * `/help/api/user-manual#sort` while the rest point at `/api/errors`. The
 * invariant across every error response is the `Error` title attributed to
 * the `arXiv api core` author, so match on that pair; requiring the author
 * keeps a genuine paper titled "Error" from tripping it.
 */
function feedError(xml: string): string | null {
  if (!xml.includes("<feed")) return "response is not an Atom feed";
  if (!xml.includes("<title>Error</title>") || !xml.includes("arXiv api core")) return null;
  const m = xml.match(/<summary[^>]*>([\s\S]*?)<\/summary>/);
  return `arXiv API error: ${m ? m[1]!.trim() : "unspecified"}`;
}

// ---------------------------------------------------------------------------
// XML helpers (lightweight, no dependency)
// ---------------------------------------------------------------------------

function extractTag(xml: string, tag: string): string {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`);
  const m = xml.match(re);
  return m ? m[1]!.trim() : "";
}

function extractAllTags(xml: string, tag: string): string[] {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "g");
  const results: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    results.push(m[1]!.trim());
  }
  return results;
}

function extractAttr(xml: string, tag: string, attr: string): string[] {
  const re = new RegExp(`<${tag}[^>]*${attr}="([^"]*)"[^>]*/?>`, "g");
  const results: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    results.push(m[1]!);
  }
  return results;
}

function extractLinkHref(xml: string, rel: string): string {
  const re = new RegExp(`<link[^>]*rel="${rel}"[^>]*href="([^"]*)"[^>]*/?>`, "g");
  const m = re.exec(xml);
  return m ? m[1]! : "";
}

// ---------------------------------------------------------------------------
// Parse
// ---------------------------------------------------------------------------

function parseEntry(entryXml: string): ArxivPaper | null {
  const id = extractTag(entryXml, "id");
  if (!id) return null;

  const title = extractTag(entryXml, "title").replace(/\s+/g, " ");
  const summary = extractTag(entryXml, "summary").replace(/\s+/g, " ");
  const authors = extractAllTags(entryXml, "name");
  const published = extractTag(entryXml, "published");
  const updated = extractTag(entryXml, "updated");
  const categories = extractAttr(entryXml, "category", "term");

  const url = id; // ArXiv id IS the URL (e.g. http://arxiv.org/abs/...)
  const pdfUrl = extractLinkHref(entryXml, "related") || id.replace("/abs/", "/pdf/");

  return { id, title, summary, authors, published, updated, categories, url, pdfUrl };
}

/** Parse an Atom feed into papers. Exported for offline probing and tests. */
export function parseFeed(xml: string): ArxivPaper[] {
  const papers: ArxivPaper[] = [];
  for (const block of xml.split("<entry>").slice(1)) {
    const paper = parseEntry("<entry>" + block);
    if (paper) papers.push(paper);
  }
  return papers;
}

/**
 * Newest papers in one category, retried through arXiv's throttling.
 *
 * Throws the last error after `MAX_ATTEMPTS` — an empty array always means
 * arXiv genuinely returned no entries, never that the fetch fell over.
 */
export async function fetchCategory(category: string, maxResults: number): Promise<ArxivPaper[]> {
  const params = {
    search_query: `cat:${category}`,
    sortBy: "submittedDate",
    sortOrder: "descending",
    max_results: String(maxResults),
  };

  let lastErr: Error = new Error(`arXiv ${category}: no attempt ran`);

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    let retryAfter: string | null = null;
    try {
      const resp = await httpRequest(API_URL, { params, throwOnError: false });
      if (!resp.ok) {
        retryAfter = resp.headers.get("retry-after");
        const body = (await resp.text().catch(() => "")).slice(0, 200);
        throw new HttpError(resp.status, `${API_URL}?${new URLSearchParams(params)}`, body);
      }
      const xml = await resp.text();
      const problem = feedError(xml);
      if (problem) throw new Error(problem);
      return parseFeed(xml);
    } catch (err) {
      lastErr = err instanceof Error ? err : new Error(String(err));
      // A status we cannot fix by waiting is worth surfacing immediately.
      if (err instanceof HttpError && !RETRYABLE_STATUS.has(err.status)) throw err;
      if (attempt === MAX_ATTEMPTS) break;
      const wait = retryDelayMs(attempt, retryAfter);
      log.warn(
        { category, attempt, maxAttempts: MAX_ATTEMPTS, waitMs: wait },
        `${category}: attempt ${attempt} failed (${lastErr.message}); retrying in ${Math.round(wait / 1000)}s`,
      );
      await sleep(wait);
    }
  }

  throw lastErr;
}
