/**
 * National Statistics Office of Vietnam — CPI and the monthly socio-economic
 * report, published as CMS articles rather than as data.
 *
 * The latest article is resolved from the listing page rather than guessed,
 * because NSO encodes the reporting period in the permalink.
 */

import { fetchArticle, type HtmlExtraction } from "../core/doc-extract.ts";
import { fetchWithTimeout } from "../core/http.ts";

export const NSO_CPI_LISTING = "https://www.nso.gov.vn/en/cpi/";
export const NSO_MONTHLY_LISTING = "https://www.nso.gov.vn/en/monthly-report/";

export const NSO_SOURCE_NAME = "National Statistics Office of Vietnam (NSO)";

/** NSO article permalinks; the listings render them newest-first. */
const NSO_ARTICLE_RE =
  /href="(https:\/\/www\.nso\.gov\.vn\/en\/(?:data-and-statistics|highlight)\/\d{4}\/\d{2}\/[^"]+)"/g;

/** First match of `re` (a /g regex with one capture group), in document order. */
export function firstLink(html: string, re: RegExp): string | null {
  re.lastIndex = 0;
  const match = re.exec(html);
  return match?.[1] ?? null;
}

export async function fetchListing(url: string): Promise<string> {
  const resp = await fetchWithTimeout(url);
  return resp.text();
}

/** Newest article URL from a listing page, or null when the markup changed. */
export async function findLatestArticleUrl(listingUrl: string): Promise<string | null> {
  return firstLink(await fetchListing(listingUrl), NSO_ARTICLE_RE);
}

/** Fetch and extract one NSO article. Throws on transport or extraction failure. */
export function fetchNsoArticle(articleUrl: string): Promise<HtmlExtraction> {
  return fetchArticle(articleUrl);
}
