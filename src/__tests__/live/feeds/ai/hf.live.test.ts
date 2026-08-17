/** Live feed contract — `feeds/ai/hf.ts` (`ai-hf`). */

import { describe, expect, it } from "vitest";

import { fetchHfData } from "../../../../feeds/ai/hf.ts";
import { LIVE_OPTS, expectDateLike, expectNonEmpty, expectPopulated, expectUrl } from "../../contract.ts";
import { probe } from "../../status.ts";

describe("live feed: hugging face", () => {
  it("returns trending models with likes and downloads", LIVE_OPTS, async () => {
    await probe("feeds/ai/hf.ts", "fetchHfData()", async () => {
      const data = await fetchHfData();

      expect(data.fetchSuccess, "hf reported fetchSuccess: false").toBe(true);
      expectNonEmpty(data.models, "hf.models");
      expectPopulated(
        data.models,
        {
          id: "string",
          author: "string",
          likes: "number",
          downloads: "number",
          tags: "string[]",
          lastModified: "string",
          url: "string",
        },
        "hf.models",
      );

      expectUrl(data.models[0]!.url, "hf.models[0].url");
      expectDateLike(data.models[0]!.lastModified, "hf.models[0].lastModified");
      // The report sorts on this; all-zero likes means the sort field moved.
      expect(
        data.models.some((m) => m.likes > 0),
        "hf.models: every model has 0 likes — the likes field likely changed",
      ).toBe(true);

      return `${data.models.length} models · top ${data.models[0]!.id}`;
    });
  });
});
