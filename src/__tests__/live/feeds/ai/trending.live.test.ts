/**
 * Live feed contract — `feeds/ai/trending.ts` (`ai-trending`).
 *
 * Two independent halves: the trending-page scrape and the Search API topic
 * queries. `trendingFetchSuccess` tracks the scrape alone, because 0 parsed
 * repos means the markup moved — never "nothing trended today".
 */

import { describe, expect, it } from "vitest";

import { fetchTrendingData } from "../../../../feeds/ai/trending.ts";
import { LIVE_OPTS, expectNonEmpty, expectPopulated } from "../../contract.ts";
import { probe } from "../../status.ts";

describe("live feed: github trending", () => {
  it("returns scraped trending repos and search-API repos", LIVE_OPTS, async () => {
    await probe("feeds/ai/trending.ts", "fetchTrendingData()", async () => {
      const data = await fetchTrendingData();

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

      expectNonEmpty(data.searchRepos, "trending.searchRepos (Search API)");
      expectPopulated(
        data.searchRepos,
        { fullName: "string", stargazersCount: "number", pushedAt: "string", url: "string" },
        "trending.searchRepos",
      );

      return `${data.trendingRepos.length} scraped · ${data.searchRepos.length} from search`;
    });
  });
});
