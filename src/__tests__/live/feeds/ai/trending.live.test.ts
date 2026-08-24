/**
 * Live feed contract — `feeds/ai/trending.ts` (`ai-trending`).
 *
 * Two independent halves: the trending-page scrape and the Search API topic
 * queries. `trendingFetchSuccess` tracks the scrape alone, because 0 parsed
 * repos means the markup moved — never "nothing trended today".
 */

import { describe, expect, it } from "vitest";

import { fetchTrendingData } from "../../../../feeds/ai/trending.ts";
import { emptyTrendingState } from "../../../../platform/state/trending-state.ts";
import { LIVE_OPTS, expectNonEmpty, expectPopulated } from "../../contract.ts";
import { probe } from "../../status.ts";

describe("live feed: github trending", () => {
  it("returns scraped trending repos and search-API repos", LIVE_OPTS, async () => {
    await probe("feeds/ai/trending.ts", "fetchTrendingData()", async () => {
      // An empty baseline on purpose: the filter is exercised offline by
      // `pnpm inspect trending:filter`, and passing the committed state would
      // make this contract's assertions depend on what yesterday's run reported.
      const data = await fetchTrendingData(emptyTrendingState());

      expect(data.firstRun, "trending.firstRun should be true for an empty state").toBe(true);

      expect(data.trendingFetchSuccess, "trending reported trendingFetchSuccess: false").toBe(true);
      expectNonEmpty(data.trendingRepos, "trending.trendingRepos (HTML scrape)");
      expectPopulated(
        data.trendingRepos,
        { fullName: "string", todayStars: "number", totalStars: "number", forks: "number", url: "string" },
        "trending.trendingRepos",
      );
      expect(
        data.trendingRepos[0]!.fullName,
        "trending.trendingRepos[0].fullName should be owner/repo",
      ).toMatch(/^[\w.-]+\/[\w.-]+$/);
      // The filter measures growth against these totals, so a silently-zeroed
      // scrape would make every trending row fail open forever.
      expect(
        data.trendingRepos.some((r) => r.totalStars > 0),
        "trending.trendingRepos: every totalStars is 0 — the filter has no star signal to work with",
      ).toBe(true);

      expectNonEmpty(data.searchRepos, "trending.searchRepos (Search API)");
      expectPopulated(
        data.searchRepos,
        { fullName: "string", stargazersCount: "number", pushedAt: "string", url: "string" },
        "trending.searchRepos",
      );

      // Every repo is new against an empty baseline, so nothing may be dropped.
      expect(
        data.suppressed.trending + data.suppressed.search,
        "trending suppressed rows against an empty baseline — the filter is dropping repos it cannot have seen",
      ).toBe(0);
      expectNonEmpty(data.reported, "trending.reported (state write-back)");

      return `${data.trendingRepos.length} scraped · ${data.searchRepos.length} from search`;
    });
  });
});
