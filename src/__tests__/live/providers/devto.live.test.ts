/** Live source contract — `providers/devto.ts` (Forem API). */

import { describe, it } from "vitest";

import { AI_TAGS, fetchTagArticles } from "../../../providers/devto.ts";
import { LIVE_OPTS, expectDateLike, expectNonEmpty, expectPopulated, expectUrl } from "../contract.ts";
import { probe } from "../status.ts";

describe("live provider: dev.to", () => {
  it("fetchTagArticles returns articles with engagement counts", LIVE_OPTS, async () => {
    await probe("providers/devto.ts", `fetchTagArticles("${AI_TAGS[0]}")`, async () => {
      const articles = await fetchTagArticles(AI_TAGS[0]!);

      expectNonEmpty(articles, "devto articles");
      expectPopulated(
        articles,
        {
          id: "number",
          title: "string",
          url: "string",
          publishedAt: "string",
          positiveReactionsCount: "number",
          commentsCount: "number",
          user: "string",
        },
        "devto articles",
      );
      expectUrl(articles[0]!.url, "devto articles[0].url");
      expectDateLike(articles[0]!.publishedAt, "devto articles[0].publishedAt");

      return `${articles.length} articles · top ${articles[0]!.positiveReactionsCount} reactions`;
    });
  });
});
