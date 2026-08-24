/**
 * Live source contract — `providers/github/trending-html.ts`.
 *
 * The most fragile GitHub surface in the pipeline: there is no API for the
 * trending page, and its markup is redesigned without notice.
 */

import { describe, expect, it } from "vitest";

import { fetchTrendingRepos } from "../../../../providers/github/trending-html.ts";
import { LIVE_OPTS, expectNonEmpty, expectPopulated } from "../../contract.ts";
import { probe } from "../../status.ts";

describe("live provider: github trending (HTML scrape)", () => {
  it("fetchTrendingRepos parses the trending page", LIVE_OPTS, async () => {
    await probe("providers/github/trending-html.ts", "fetchTrendingRepos()", async () => {
      const repos = await fetchTrendingRepos();

      expectNonEmpty(repos, "trending repos (HTML scrape)");
      expectPopulated(
        repos,
        { fullName: "string", todayStars: "number", totalStars: "number", forks: "number", url: "string" },
        "trending repos",
      );
      expect(repos[0]!.fullName, "trending repos[0].fullName should be owner/repo").toMatch(
        /^[\w.-]+\/[\w.-]+$/,
      );
      // Zero stars everywhere means the star element moved, not a quiet day.
      // `expectPopulated` only checks the type, and 0 is a number — so each
      // count needs its own guard. Star and fork totals sit after a nested
      // <svg><path>, which is exactly where a markup reshuffle silently zeroes
      // them while `todayStars` (matched from free text) keeps working.
      expect(
        repos.some((r) => r.todayStars > 0),
        "trending: every repo has 0 stars today — the star element likely moved",
      ).toBe(true);
      expect(
        repos.some((r) => r.totalStars > 0),
        "trending: every repo has 0 total stars — the stargazers count element likely moved",
      ).toBe(true);
      expect(
        repos.some((r) => r.forks > 0),
        "trending: every repo has 0 forks — the forks count element likely moved",
      ).toBe(true);

      return `${repos.length} repos · top ${repos[0]!.fullName} ${repos[0]!.totalStars}★ (+${repos[0]!.todayStars})`;
    });
  });
});
