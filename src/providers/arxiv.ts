/**
 * ArXiv Atom API.
 *
 * The feed is small and regular enough that a regex parse beats pulling in an
 * XML dependency; every extractor degrades to "" rather than throwing, so a
 * renamed field shows up as a blank column instead of a crash.
 */

import { fetchText } from "../core/http.ts";

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

/** Newest papers in one category. Throws `HttpError` on failure. */
export async function fetchCategory(category: string, maxResults: number): Promise<ArxivPaper[]> {
  const params = new URLSearchParams({
    search_query: `cat:${category}`,
    sortBy: "submittedDate",
    sortOrder: "descending",
    max_results: String(maxResults),
  });
  return parseFeed(await fetchText(`${API_URL}?${params}`));
}
