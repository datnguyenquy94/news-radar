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

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  "#39": "'",
};

/**
 * Strip tags and decode the entities GitHub escapes descriptions with. Without
 * the decode, a description reaches the prompt as `Modern &amp; Opinionated`
 * and the model copies it into the report that way.
 */
function stripTags(raw: string | undefined): string {
  if (!raw) return "";
  return raw
    .replace(/<[^>]+>/g, "")
    .replace(/&(#\d+|#x[\da-f]+|[a-z]+);/gi, (match, name: string) => {
      const key = name.toLowerCase();
      if (ENTITIES[key] !== undefined) return ENTITIES[key];
      if (key.startsWith("#x")) return String.fromCodePoint(parseInt(key.slice(2), 16));
      if (key.startsWith("#")) return String.fromCodePoint(parseInt(key.slice(1), 10));
      return match;
    })
    .trim();
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
        // The count sits after the whole octicon <svg>, which nests a <path>.
        // Skipping to </svg> rather than over a single tag is what keeps this
        // working — matching one tag stops at the <path> and yields 0.
        totalStars: parseCount(block.match(/href="\/[^"]+\/stargazers"[\s\S]*?<\/svg>\s*([\d,]+)/)?.[1]),
        forks: parseCount(block.match(/href="\/[^"]+\/forks"[\s\S]*?<\/svg>\s*([\d,]+)/)?.[1]),
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
