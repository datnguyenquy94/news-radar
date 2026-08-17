/** Live source contract — `providers/hackernews.ts` (Firebase API). */

import { describe, expect, it } from "vitest";

import { fetchItems, fetchTopStoryIds, toHnStory } from "../../../providers/hackernews.ts";
import {
  LIVE_OPTS,
  expectDateLike,
  expectNonEmpty,
  expectPopulated,
  expectSomePopulated,
  expectUrl,
} from "../contract.ts";
import { probe } from "../status.ts";

describe("live provider: hacker news", () => {
  it("fetchTopStoryIds + fetchItems + toHnStory round-trip", LIVE_OPTS, async () => {
    await probe("providers/hackernews.ts", "fetchTopStoryIds + fetchItems", async () => {
      const ids = await fetchTopStoryIds();
      expectNonEmpty(ids, "hn topstory ids");
      expect(typeof ids[0], "hn topstory ids are not numbers").toBe("number");

      const items = await fetchItems(ids.slice(0, 5));
      // A per-item miss degrades to null by design; five nulls is not a miss.
      expectSomePopulated(items, (i) => i, "hn fetchItems");

      const story = toHnStory(items.find((i) => i !== null)!, 1);
      expectPopulated(
        [story],
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
        "hn story",
      );
      expectUrl(story.hnUrl, "hn story.hnUrl");
      expectDateLike(story.createdAt, "hn story.createdAt");

      return `${ids.length} ids · sample "${story.title.slice(0, 40)}"`;
    });
  });
});
