/**
 * AI open-source momentum — payload for the `ai-trending` report.
 *
 * Two GitHub surfaces, one report: the scraped `/trending` page (no API exists
 * for it) and the Search API by topic. The scrape is the load-bearing half —
 * `trendingFetchSuccess` tracks it alone, because search results without today's
 * movers are just a popularity list.
 *
 * Both halves are then filtered against `digests/trending-state.json`, which
 * records every repo this report has already covered and its star count at that
 * moment. Unfiltered, the Search half is a standing popularity ranking: `pushed:>7d`
 * sorted by stars returns the same langchain / ollama / transformers giants every
 * day, so the report repeated itself. A repo now reaches the prompt only when it
 * is new to the report, or when it has gained enough stars since the last time it
 * appeared to be worth saying again — see `freshness`.
 *
 * The state is read here and never written: the recorded count means "as of the
 * run that last reported this repo", so persisting it belongs after the save
 * phase, in `platform/state/trending-state.ts` via `cli/daily.ts`.
 */

import { fetchTrendingRepos, type TrendingRepo } from "../../providers/github/trending-html.ts";
import { searchAiRepos, type SearchRepo } from "../../providers/github/search.ts";
import { createLogger } from "../../core/logger.ts";

const log = createLogger("trending");

export type { TrendingRepo, SearchRepo };

// ---------------------------------------------------------------------------
// State shape — persisted by platform/state/trending-state.ts
// ---------------------------------------------------------------------------

export interface TrendingStateEntry {
  /** Cumulative stars at the time the repo was last reported. */
  stars: number;
  /** Digest date (YYYY-MM-DD) of the run that last reported it. */
  lastReported: string;
}

export interface TrendingState {
  /** Keyed by `owner/repo`. */
  repos: Record<string, TrendingStateEntry>;
}

/** One repo to fold back into the state once the report is saved. */
export interface ReportedRepo {
  fullName: string;
  stars: number;
}

// ---------------------------------------------------------------------------
// Payload
// ---------------------------------------------------------------------------

/** Why a repo earned a place in today's report. */
export interface Freshness {
  /** Never reported before. */
  isNew: boolean;
  /** Stars gained since the last report; `null` when new or when unknown. */
  starsGained: number | null;
  /** Date of the last report that carried it; `null` when new. */
  lastReported: string | null;
}

export type TrendingRow = TrendingRepo & Freshness;
export type SearchRow = SearchRepo & Freshness;

export interface TrendingData {
  trendingRepos: TrendingRow[];
  searchRepos: SearchRow[];
  trendingFetchSuccess: boolean;
  /** Repos dropped as already-reported and flat since. Disclosed in the prompt. */
  suppressed: { trending: number; search: number };
  /** Search repos that passed the filter, before the `SEARCH_REPO_LIMIT` cap. */
  searchMatched: number;
  /** True when the state file was empty — every repo counts as new. */
  firstRun: boolean;
  /** Repos fed to the report, deduped across both halves. */
  reported: ReportedRepo[];
}

// ---------------------------------------------------------------------------
// Report-shaped configuration
// ---------------------------------------------------------------------------

const SEARCH_WINDOW_DAYS = 7;

/**
 * Re-report an already-covered repo once it has gained this many stars, in
 * absolute terms, since it last appeared. Tuned so a genuinely exploding repo
 * comes back the next day while a dormant giant — langchain adds a few hundred
 * a week — waits until it has actually moved.
 */
export const RESURFACE_MIN_STARS = 500;

/**
 * …or this much in relative terms. The absolute floor alone would never
 * resurface a small project that tripled, which is exactly the signal the
 * report exists to catch.
 */
export const RESURFACE_MIN_PCT = 20;

/**
 * Cap on search-result repos fed to the prompt. Left unbounded, the ~80
 * repos/day the search returns would blow the token budget once combined with
 * the trending list. It lives here rather than in the prompt builder because
 * the feed has to know exactly which repos were reported in order to record
 * them.
 */
export const SEARCH_REPO_LIMIT = 40;

// ---------------------------------------------------------------------------
// Filter
// ---------------------------------------------------------------------------

/**
 * Decide whether `fullName` still has something to say, given the state.
 *
 * Returns the reason it qualifies, or `null` when it should be suppressed.
 * Exported for `pnpm inspect trending:filter`.
 *
 * `stars <= 0` means the count did not parse, not that the repo has none — the
 * trending scrape drops to 0 whenever GitHub reshuffles its markup. Judging
 * growth on that number would suppress a repo on a value we do not trust, so
 * the repo is kept with an unknown delta and the caller fails open.
 */
export function freshness(fullName: string, stars: number, state: TrendingState): Freshness | null {
  const prev = state.repos[fullName];
  if (!prev) return { isNew: true, starsGained: null, lastReported: null };
  if (stars <= 0) return { isNew: false, starsGained: null, lastReported: prev.lastReported };

  const gained = stars - prev.stars;
  const grewEnough =
    gained >= RESURFACE_MIN_STARS || (prev.stars > 0 && (gained / prev.stars) * 100 >= RESURFACE_MIN_PCT);

  if (!grewEnough) return null;
  return { isNew: false, starsGained: gained, lastReported: prev.lastReported };
}

/**
 * Rank by momentum rather than size: how many stars a repo gained since it was
 * last reported, falling back to its total for a repo appearing for the first
 * time — for which every star is new to this report. Sorting by raw star count
 * is what made the search half a fixed leaderboard.
 */
function momentum(row: Freshness & { stars: number }): number {
  return row.starsGained ?? row.stars;
}

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------

export async function fetchTrendingData(state: TrendingState): Promise<TrendingData> {
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

  const firstRun = Object.keys(state.repos).length === 0;
  if (firstRun) log.info("No trending state on disk — every repo counts as new");

  const trendingRows: TrendingRow[] = [];
  let trendingSuppressed = 0;
  for (const repo of trending.repos) {
    const fresh = freshness(repo.fullName, repo.totalStars, state);
    if (!fresh) {
      trendingSuppressed++;
      continue;
    }
    trendingRows.push({ ...repo, ...fresh });
  }

  const matchedSearch: SearchRow[] = [];
  let searchSuppressed = 0;
  for (const repo of searchRepos) {
    const fresh = freshness(repo.fullName, repo.stargazersCount, state);
    if (!fresh) {
      searchSuppressed++;
      continue;
    }
    matchedSearch.push({ ...repo, ...fresh });
  }

  const searchRows = [...matchedSearch]
    .sort(
      (a, b) => momentum({ ...b, stars: b.stargazersCount }) - momentum({ ...a, stars: a.stargazersCount }),
    )
    .slice(0, SEARCH_REPO_LIMIT);

  log.info(
    `Filtered: trending ${trendingRows.length}/${trending.repos.length}, ` +
      `search ${searchRows.length}/${searchRepos.length} ` +
      `(suppressed ${trendingSuppressed + searchSuppressed} already-reported)`,
  );

  // Deduped across both halves — a repo can be trending *and* match a topic
  // query, and the state carries one entry per repo. Keep the larger count:
  // the Search API's is authoritative, the scrape's can be an unparsed 0.
  const reportedStars = new Map<string, number>();
  for (const row of trendingRows) {
    reportedStars.set(row.fullName, Math.max(reportedStars.get(row.fullName) ?? 0, row.totalStars));
  }
  for (const row of searchRows) {
    reportedStars.set(row.fullName, Math.max(reportedStars.get(row.fullName) ?? 0, row.stargazersCount));
  }

  return {
    trendingRepos: trendingRows,
    searchRepos: searchRows,
    trendingFetchSuccess: trending.success,
    suppressed: { trending: trendingSuppressed, search: searchSuppressed },
    searchMatched: matchedSearch.length,
    firstRun,
    reported: [...reportedStars].map(([fullName, stars]) => ({ fullName, stars })),
  };
}
