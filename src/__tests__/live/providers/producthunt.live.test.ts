/** Live source contract — `providers/producthunt.ts` (GraphQL API). */

import { describe, it } from "vitest";

import { fetchPosts } from "../../../providers/producthunt.ts";
import {
  LIVE_OPTS,
  daysAgo,
  expectNonEmpty,
  expectPopulated,
  expectSomePopulated,
  expectUrl,
} from "../contract.ts";
import { probe, recordSkip } from "../status.ts";

describe("live provider: product hunt", () => {
  it("fetchPosts returns yesterday's products", LIVE_OPTS, async (ctx) => {
    // The token is a parameter of `fetchPosts`, not a module-scope read, so a
    // missing credential is a skip rather than a crash — mirror that here.
    const token = process.env["PRODUCTHUNT_TOKEN"];
    if (!token) {
      recordSkip("providers/producthunt.ts", "fetchPosts()", "PRODUCTHUNT_TOKEN is unset");
      ctx.skip();
      return;
    }

    await probe("providers/producthunt.ts", "fetchPosts()", async () => {
      const { products, totalReturned } = await fetchPosts(token, daysAgo(2), new Date());

      expectNonEmpty(products, "ph products");
      expectPopulated(
        products,
        {
          id: "string",
          name: "string",
          tagline: "string",
          url: "string",
          votesCount: "number",
          commentsCount: "number",
          createdAt: "string",
        },
        "ph products",
      );
      expectUrl(products[0]!.url, "ph products[0].url");
      // The feed filters on topic slugs — all-empty means the topics edge
      // changed and the AI filter would silently match nothing.
      expectSomePopulated(products, (p) => p.topicSlugs.length || null, "ph products[].topicSlugs");

      return `${totalReturned} posts · top ${products[0]!.votesCount} votes`;
    });
  });
});
