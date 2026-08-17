/**
 * Live feed contract — `feeds/ai/community.ts` (`ai-community`).
 *
 * Two sources in one feed. Each half keeps its own `fetchSuccess` and the
 * feed's is true when either returned, so the halves are asserted separately —
 * otherwise one dead source hides behind the other.
 */

import { describe, expect, it } from "vitest";

import { fetchCommunityData } from "../../../../feeds/ai/community.ts";
import { LIVE_OPTS, expectDateLike, expectNonEmpty, expectPopulated, expectUrl } from "../../contract.ts";
import { probe } from "../../status.ts";

describe("live feed: community (dev.to + lobste.rs)", () => {
  it("returns both halves populated", LIVE_OPTS, async () => {
    await probe("feeds/ai/community.ts", "fetchCommunityData()", async () => {
      // One fetch, both halves — the endpoints are hit once per run.
      const { devto, lobsters } = await fetchCommunityData();

      expect(devto.fetchSuccess, "devto reported fetchSuccess: false").toBe(true);
      expectNonEmpty(devto.articles, "devto.articles");
      expectPopulated(
        devto.articles,
        {
          id: "number",
          title: "string",
          url: "string",
          publishedAt: "string",
          positiveReactionsCount: "number",
          commentsCount: "number",
          readingTimeMinutes: "number",
          tags: "string[]",
          user: "string",
        },
        "devto.articles",
      );
      expectUrl(devto.articles[0]!.url, "devto.articles[0].url");
      expectDateLike(devto.articles[0]!.publishedAt, "devto.articles[0].publishedAt");

      expect(lobsters.fetchSuccess, "lobsters reported fetchSuccess: false").toBe(true);
      expectNonEmpty(lobsters.stories, "lobsters.stories");
      expectPopulated(
        lobsters.stories,
        {
          title: "string",
          url: "string",
          commentsUrl: "string",
          score: "number",
          commentCount: "number",
          publishedAt: "string",
          tags: "string[]",
          // Regression guard: `submitter_user` is a bare string in the current
          // API. Reading `.username` off it silently yielded undefined, so
          // every community report rendered "Author: undefined".
          author: "string",
        },
        "lobsters.stories",
      );
      expectDateLike(lobsters.stories[0]!.publishedAt, "lobsters.stories[0].publishedAt");

      return `${devto.articles.length} devto articles · ${lobsters.stories.length} lobsters stories`;
    });
  });
});
