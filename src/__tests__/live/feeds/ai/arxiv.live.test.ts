/** Live feed contract — `feeds/ai/arxiv.ts` (`ai-arxiv`). */

import { describe, expect, it } from "vitest";

import { fetchArxivData } from "../../../../feeds/ai/arxiv.ts";
import { LIVE_OPTS, expectDateLike, expectNonEmpty, expectPopulated, expectUrl } from "../../contract.ts";
import { probe } from "../../status.ts";

describe("live feed: arxiv", () => {
  it("returns papers with titles, authors and links", LIVE_OPTS, async () => {
    await probe("feeds/ai/arxiv.ts", "fetchArxivData()", async () => {
      const data = await fetchArxivData();

      // NOTE: arXiv publishes every day, weekends included, so the 48 h window
      // is never legitimately empty — a red row here is always real. Check the
      // provider probe's row to tell a throttled runner from a parse regression.
      expect(data.fetchSuccess, "arxiv reported fetchSuccess: false").toBe(true);
      expectNonEmpty(data.papers, "arxiv.papers");
      expectPopulated(
        data.papers,
        {
          id: "string",
          title: "string",
          summary: "string",
          authors: "string[]",
          published: "string",
          url: "string",
          pdfUrl: "string",
        },
        "arxiv.papers",
      );

      const first = data.papers[0]!;
      expectUrl(first.url, "arxiv.papers[0].url");
      expectDateLike(first.published, "arxiv.papers[0].published");
      expect(first.authors.length, "arxiv.papers[0].authors is empty").toBeGreaterThan(0);
      expect(first.categories.length, "arxiv.papers[0].categories is empty").toBeGreaterThan(0);

      return `${data.papers.length} papers in the 48h window`;
    });
  });
});
