/**
 * Sitemap discovery and article-page extraction for publisher sites.
 *
 * Sitemaps are plain XML with a fixed shape, so they are matched rather than
 * DOM-parsed. Page extraction is deliberately crude — the text is only ever fed
 * to an LLM as context, never rendered — and prefers `<main>`/`<article>` to
 * avoid nav and footer boilerplate.
 */

import { fetchText } from "../core/http.ts";

/** Self-identifying UA: these are publisher sitemaps, not endpoints to blend into. */
const WEB_UA = "Mozilla/5.0 (compatible; agents-radar/1.0; +https://github.com/search?q=agents-radar)";

/** Per-request timeout (ms). */
const FETCH_TIMEOUT_MS = 10_000;

/** Characters of page text forwarded to the LLM per article. */
const MAX_CONTENT_LENGTH = 1_500;

export interface SitemapEntry {
  loc: string;
  lastmod?: string;
}

/** GET an XML sitemap or an HTML article. Throws `HttpError` on failure. */
export function httpGet(url: string): Promise<string> {
  return fetchText(url, {
    ua: WEB_UA,
    accept: "text/html,application/xml,text/xml,*/*",
    acceptLanguage: "en-US,en;q=0.9",
    timeoutMs: FETCH_TIMEOUT_MS,
  });
}

// ---------------------------------------------------------------------------
// Sitemap parsing (plain-text XML; no DOM needed)
// ---------------------------------------------------------------------------

export function parseSitemapUrls(xml: string): SitemapEntry[] {
  const results: SitemapEntry[] = [];
  for (const block of xml.match(/<url>[\s\S]*?<\/url>/g) ?? []) {
    const loc = block.match(/<loc>\s*(.*?)\s*<\/loc>/)?.[1];
    const lastmod = block.match(/<lastmod>\s*(.*?)\s*<\/lastmod>/)?.[1];
    if (loc) results.push({ loc, lastmod });
  }
  return results;
}

export function isSitemapIndex(xml: string): boolean {
  return /<sitemapindex[\s>]/.test(xml);
}

// ---------------------------------------------------------------------------
// HTML content extraction
// ---------------------------------------------------------------------------

export function extractTitle(html: string): string {
  return (
    // Prefer OpenGraph title for cleaner strings
    (
      html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']{1,200})["']/i)?.[1] ??
      html.match(/<meta[^>]+content=["']([^"']{1,200})["'][^>]+property=["']og:title["']/i)?.[1] ??
      html.match(/<title[^>]*>([^<]{1,200})<\/title>/i)?.[1] ??
      ""
    ).trim()
  );
}

export function extractText(html: string): string {
  // Prefer <main> or <article> to avoid nav/header/footer boilerplate
  const source =
    html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ??
    html.match(/<article[^>]*>([\s\S]*?)<\/article>/i)?.[1] ??
    html;

  return source
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, " ")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MAX_CONTENT_LENGTH);
}

export function urlCategory(url: string): string {
  try {
    return new URL(url).pathname.split("/").filter(Boolean)[0] ?? "article";
  } catch {
    return "article";
  }
}

/** Derive a human-readable title from the last URL path segment. */
export function titleFromUrl(url: string): string {
  try {
    const slug = new URL(url).pathname.split("/").filter(Boolean).pop() ?? "";
    return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  } catch {
    return url;
  }
}
