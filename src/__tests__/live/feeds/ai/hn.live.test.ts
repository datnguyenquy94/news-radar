/** Live feed contract — `feeds/ai/hn.ts` (`ai-hn`). */

import { describe, expect, it } from "vitest";

import { fetchHnData } from "../../../../feeds/ai/hn.ts";
import { LIVE_OPTS, expectDateLike, expectNonEmpty, expectPopulated, expectUrl } from "../../contract.ts";
import { probe } from "../../status.ts";

describe("live feed: hacker news", () => {
  it("returns AI stories with points, comments and an author", LIVE_OPTS, async () => {
    await probe("feeds/ai/hn.ts", "fetchHnData()", async () => {
      const data = await fetchHnData();

      expect(data.fetchSuccess, "hn reported fetchSuccess: false").toBe(true);
      // The feed walks topstories in batches and stops at 30 keyword matches;
      // an empty result means the walk or the filter broke, not a quiet day.
      expectNonEmpty(data.stories, "hn.stories");
      expectPopulated(
        data.stories,
        {
          id: "string",
          title: "string",
          url: "string",
          hnUrl: "string",
          points: "number",
          comments: "number",
          author: "string",
          createdAt: "string",
        },
        "hn.stories",
      );

      expectUrl(data.stories[0]!.hnUrl, "hn.stories[0].hnUrl");
      expectDateLike(data.stories[0]!.createdAt, "hn.stories[0].createdAt");

      return `${data.stories.length} AI stories · top ${data.stories[0]!.points} points`;
    });
  });
});
