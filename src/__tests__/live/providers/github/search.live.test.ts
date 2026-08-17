/** Live source contract — `providers/github/search.ts` (Search API by topic). */

import { describe, expect, it } from "vitest";

import { AI_TOPIC_QUERIES, searchAiRepos } from "../../../../providers/github/search.ts";
import { LIVE_OPTS, daysAgo, expectNonEmpty, expectPopulated, hasEnv, isoDate } from "../../contract.ts";
import { probe, recordSkip } from "../../status.ts";

describe("live provider: github search", () => {
  it("searchAiRepos returns topic-matched repos", LIVE_OPTS, async (ctx) => {
    if (!hasEnv("GH_TOKEN")) {
      recordSkip("providers/github/search.ts", "searchAiRepos()", "GH_TOKEN is unset");
      ctx.skip();
      return;
    }

    await probe("providers/github/search.ts", "searchAiRepos()", async () => {
      const repos = await searchAiRepos(isoDate(daysAgo(7)));

      expectNonEmpty(repos, "search repos");
      expectPopulated(
        repos,
        { fullName: "string", stargazersCount: "number", pushedAt: "string", url: "string" },
        "search repos",
      );
      expect(repos[0]!.fullName, "search repos[0].fullName should be owner/repo").toMatch(
        /^[\w.-]+\/[\w.-]+$/,
      );
      // Each query contributes its own rows. One surviving query means the
      // others 422'd on a query-syntax change — a silent partial outage.
      const queries = new Set(repos.map((r) => r.searchQuery));
      expect(
        queries.size,
        `search: only ${queries.size}/${AI_TOPIC_QUERIES.length} topic queries returned rows`,
      ).toBeGreaterThan(1);

      return `${repos.length} repos across ${queries.size}/${AI_TOPIC_QUERIES.length} queries`;
    });
  });
});
