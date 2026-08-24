/**
 * Persistence for the trending report's already-reported repo baseline.
 *
 * `digests/trending-state.json` is committed to git on every run and is the
 * source of truth for which repos the `ai-trending` report has already covered
 * and how many stars each had *at that moment*. `feeds/ai/trending.ts` reads it
 * to drop repos it has already reported and that have not moved since — without
 * it the Search half re-lists the same handful of giants every single day.
 *
 * Unlike `web-state.ts`, the feed does **not** mutate this state in place. The
 * recorded star count means "as of the run that last reported this repo", so
 * the write has to happen after the report is actually saved, not when the data
 * is fetched: `main()` in `cli/daily.ts` calls `recordTrendingReported` once the
 * save phase has run, and it is language-agnostic (every language reports the
 * same repos).
 */

import fs from "node:fs";
import path from "node:path";

import type { ReportedRepo, TrendingState } from "../../feeds/ai/trending.ts";

const STATE_FILE = path.join("digests", "trending-state.json");

export function emptyTrendingState(): TrendingState {
  return { repos: {} };
}

export function loadTrendingState(): TrendingState {
  try {
    const parsed = JSON.parse(fs.readFileSync(STATE_FILE, "utf-8")) as Partial<TrendingState>;
    return { repos: parsed.repos ?? {} };
  } catch {
    return emptyTrendingState();
  }
}

export function saveTrendingState(state: TrendingState): void {
  fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
  // Sorted by repo name so a diff of the committed file reads as "what changed
  // today" rather than a reshuffle of insertion order.
  const repos = Object.fromEntries(Object.entries(state.repos).sort(([a], [b]) => a.localeCompare(b)));
  fs.writeFileSync(STATE_FILE, JSON.stringify({ repos }, null, 2), "utf-8");
}

/**
 * Fold this run's reported repos into `state`, in place.
 *
 * A star count of 0 means the scrape failed to parse one, not that the repo has
 * no stars — writing it would reset the baseline and make the repo resurface
 * forever, so the previous count is kept and only the date advances.
 */
export function recordTrendingReported(
  state: TrendingState,
  reported: ReportedRepo[],
  dateStr: string,
): void {
  for (const { fullName, stars } of reported) {
    const prev = state.repos[fullName];
    state.repos[fullName] = {
      stars: stars > 0 ? stars : (prev?.stars ?? 0),
      lastReported: dateStr,
    };
  }
}
