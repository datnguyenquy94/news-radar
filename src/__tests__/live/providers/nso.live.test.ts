/**
 * Live source contract — `providers/nso.ts` (listings + article extraction).
 *
 * Two failure modes, both silent: the listing page's link pattern moves (no
 * article URL), or the CMS markup moves and Readability scores the mega-menu
 * above the article body (a short, useless excerpt).
 */

import { describe, expect, it } from "vitest";

import { NSO_CPI_LISTING, fetchNsoArticle, findLatestArticleUrl } from "../../../providers/nso.ts";
import { LIVE_OPTS, expectUrl } from "../contract.ts";
import { probe } from "../status.ts";

describe("live provider: nso", () => {
  it("findLatestArticleUrl + fetchNsoArticle extract the CPI release", LIVE_OPTS, async () => {
    await probe("providers/nso.ts", "findLatestArticleUrl + fetchNsoArticle", async () => {
      const url = await findLatestArticleUrl(NSO_CPI_LISTING);

      expect(url, "nso: no article link on the CPI listing — the link pattern changed").not.toBeNull();
      expectUrl(url!, "nso article url");

      const article = await fetchNsoArticle(url!);
      expect(
        article.text.length,
        `nso article body is too short to be usable (${article.text.length} chars, fallback=${article.usedFallback})`,
      ).toBeGreaterThan(500);

      const via = article.usedFallback ? " (tag-strip fallback)" : "";
      return `${article.text.length} chars${via} · ${url!.slice(-48)}`;
    });
  });
});
