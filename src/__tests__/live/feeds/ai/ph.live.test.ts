/** Live feed contract — `feeds/ai/ph.ts` (`ai-ph`). */

import { describe, expect, it } from "vitest";

import { fetchPhData } from "../../../../feeds/ai/ph.ts";
import { LIVE_OPTS, expectNonEmpty, expectPopulated, expectUrl, hasEnv } from "../../contract.ts";
import { probe, recordSkip } from "../../status.ts";

describe("live feed: product hunt", () => {
  it("returns yesterday's AI products with vote counts", LIVE_OPTS, async (ctx) => {
    if (!hasEnv("PRODUCTHUNT_TOKEN")) {
      recordSkip("feeds/ai/ph.ts", "fetchPhData()", "PRODUCTHUNT_TOKEN is unset");
      ctx.skip();
      return;
    }

    await probe("feeds/ai/ph.ts", "fetchPhData()", async () => {
      const data = await fetchPhData();

      expect(data.fetchSuccess, "ph reported fetchSuccess: false").toBe(true);
      // Empty here means the AI topic-slug filter matched nothing — the slugs
      // are the feed's own config, so this is our drift as much as theirs.
      expectNonEmpty(data.products, "ph.products");
      expectPopulated(
        data.products,
        {
          id: "string",
          name: "string",
          tagline: "string",
          url: "string",
          votesCount: "number",
          commentsCount: "number",
          createdAt: "string",
          topics: "string[]",
        },
        "ph.products",
      );

      expectUrl(data.products[0]!.url, "ph.products[0].url");

      return `${data.products.length} AI products · top ${data.products[0]!.votesCount} votes`;
    });
  });
});
