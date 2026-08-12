/**
 * github.com/trending — scraped, because GitHub publishes no API for it.
 *
 * The page is plain server-rendered HTML, so the parse is regex-based rather
 * than DOM-based; a single unparseable block is skipped rather than failing the
 * page. An empty result means the markup changed and is reported as such: the
 * caller cannot tell "no trending repos today" (which never happens) from "our
 * selectors broke" any other way.
 */

import { fetchText } from "../../core/http.ts";

const TRENDING_URL = "https://github.com/trending?since=daily&spoken_language_code=";

/** Self-identifying UA — this is a public page, not an endpoint to blend into. */
const TRENDING_UA = "Mozilla/5.0 (compatible; agents-radar/1.0)";

export interface TrendingRepo {
  fullName: string;
  description: string;
  language: string;
  todayStars: number;
  totalStars: number;
  forks: number;
  url: string;
}

function parseCount(raw: string | undefined): number {
  return raw ? parseInt(raw.replace(/,/g, ""), 10) : 0;
}

function stripTags(raw: string | undefined): string {
  return raw ? raw.replace(/<[^>]+>/g, "").trim() : "";
}

/** Parse the trending page's HTML. Exported for offline probing and tests. */
export function parseTrendingHtml(html: string): TrendingRepo[] {
  const repos: TrendingRepo[] = [];

  const articlePattern =
    /<article[^>]*class="[^"]*Box-row[^"]*"[\s\S]*?(?=<article[^>]*class="[^"]*Box-row[^"]*"|$)/g;

  for (const block of html.match(articlePattern) ?? []) {
    try {
      // fullName from <h2> > <a href="/owner/repo">
      const nameMatch = block.match(/<h2[^>]*>[\s\S]*?<a[^>]+href="\/([^/"]+\/[^/"]+)"/);
      if (!nameMatch?.[1]) continue;
      const fullName = nameMatch[1].trim();

      repos.push({
        fullName,
        description: stripTags(block.match(/<p[^>]*class="[^"]*col-9[^"]*"[^>]*>([\s\S]*?)<\/p>/)?.[1]),
        language: stripTags(
          block.match(/<span[^>]+itemprop="programmingLanguage"[^>]*>([\s\S]*?)<\/span>/)?.[1],
        ),
        todayStars: parseCount(block.match(/([\d,]+)\s+stars?\s+today/i)?.[1]),
        totalStars: parseCount(block.match(/href="\/[^"]+\/stargazers"[^>]*>\s*<[^>]+>\s*([\d,]+)/)?.[1]),
        forks: parseCount(block.match(/href="\/[^"]+\/forks"[^>]*>\s*<[^>]+>\s*([\d,]+)/)?.[1]),
        url: `https://github.com/${fullName}`,
      });
    } catch {
      // single block parse failure is non-fatal
    }
  }

  return repos;
}

/** Throws `HttpError` on a fetch failure; returns `[]` when the markup changed. */
export async function fetchTrendingRepos(): Promise<TrendingRepo[]> {
  const html = await fetchText(TRENDING_URL, { ua: TRENDING_UA, accept: "text/html" });
  return parseTrendingHtml(html);
}
