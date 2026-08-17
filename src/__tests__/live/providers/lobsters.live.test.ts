/** Live source contract — `providers/lobsters.ts` (tag JSON endpoints). */

import { describe, it } from "vitest";

import { TAG_URLS, fetchTagStories } from "../../../providers/lobsters.ts";
import { LIVE_OPTS, expectDateLike, expectNonEmpty, expectPopulated } from "../contract.ts";
import { probe } from "../status.ts";

describe("live provider: lobste.rs", () => {
  it("fetchTagStories returns tagged stories with scores and an author", LIVE_OPTS, async () => {
    await probe("providers/lobsters.ts", `fetchTagStories("${TAG_URLS[0]}")`, async () => {
      const stories = await fetchTagStories(TAG_URLS[0]!);

      expectNonEmpty(stories, "lobsters stories");
      expectPopulated(
        stories,
        {
          id: "string",
          title: "string",
          commentsUrl: "string",
          score: "number",
          commentCount: "number",
          // Regression guard: `submitter_user` is a bare string in the current
          // API. Reading `.username` off it silently yielded undefined, so
          // every community report rendered "Author: undefined".
          author: "string",
          publishedAt: "string",
        },
        "lobsters stories",
      );
      expectDateLike(stories[0]!.publishedAt, "lobsters stories[0].publishedAt");

      return `${stories.length} stories · top score ${stories[0]!.score}`;
    });
  });
});
