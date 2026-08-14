/**
 * AI open-source momentum — payload for the `ai-trending` report.
 *
 * Two GitHub surfaces, one report: the scraped `/trending` page (no API exists
 * for it) and the Search API by topic. The scrape is the load-bearing half —
 * `trendingFetchSuccess` tracks it alone, because search results without today's
 * movers are just a popularity list.
 */

import { fetchTrendingRepos, type TrendingRepo } from "../../providers/github/trending-html.ts";
import { searchAiRepos, type SearchRepo } from "../../providers/github/search.ts";
import { createLogger } from "../../core/logger.ts";

const log = createLogger("trending");

export type { TrendingRepo, SearchRepo };

export interface TrendingData {
  trendingRepos: TrendingRepo[];
  searchRepos: SearchRepo[];
  trendingFetchSuccess: boolean;
}

const SEARCH_WINDOW_DAYS = 7;

export async function fetchTrendingData(): Promise<TrendingData> {
  const pushedSince = new Date(Date.now() - SEARCH_WINDOW_DAYS * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  const [trending, searchRepos] = await Promise.all([
    fetchTrendingRepos()
      .then((repos) => {
        // Zero parsed repos never means "nothing trended today" — it means the
        // markup moved. Report it as a failure rather than an empty day.
        if (repos.length === 0) {
          log.error("Parsed 0 repos — HTML structure may have changed");
          return { repos, success: false };
        }
        log.info(`Parsed ${repos.length} trending repos from HTML`);
        return { repos, success: true };
      })
      .catch((err) => {
        log.error(`Fetch failed: ${err}`);
        return { repos: [] as TrendingRepo[], success: false };
      }),
    searchAiRepos(pushedSince),
  ]);

  return {
    trendingRepos: trending.repos,
    searchRepos,
    trendingFetchSuccess: trending.success,
  };
}
