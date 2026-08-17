/**
 * Live source contract — `providers/arxiv.ts`.
 *
 * One file per provider: a red run names the module that talks to the broken
 * host, and the status table printed at the end of the run reports every other
 * provider's state alongside it.
 */

import { describe, expect, it } from "vitest";

import { AI_CATEGORIES, fetchCategory } from "../../../providers/arxiv.ts";
import { LIVE_OPTS, expectDateLike, expectNonEmpty, expectPopulated, expectUrl } from "../contract.ts";
import { probe } from "../status.ts";

describe("live provider: arxiv", () => {
  it("fetchCategory returns Atom entries", LIVE_OPTS, async () => {
    await probe("providers/arxiv.ts", `fetchCategory("${AI_CATEGORIES[0]}")`, async () => {
      const papers = await fetchCategory(AI_CATEGORIES[0]!, 10);

      expectNonEmpty(papers, "arxiv papers");
      expectPopulated(
        papers,
        { id: "string", title: "string", summary: "string", published: "string", url: "string" },
        "arxiv papers",
      );
      expectUrl(papers[0]!.url, "arxiv papers[0].url");
      expectDateLike(papers[0]!.published, "arxiv papers[0].published");
      // Authors and categories come from repeated Atom elements — an empty
      // array means the element name changed, not that a paper has no author.
      expect(papers[0]!.authors.length, "arxiv papers[0].authors is empty").toBeGreaterThan(0);
      expect(papers[0]!.categories.length, "arxiv papers[0].categories is empty").toBeGreaterThan(0);

      return `${papers.length} papers · latest ${papers[0]!.published.slice(0, 10)}`;
    });
  });
});
