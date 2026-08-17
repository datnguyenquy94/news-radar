/** Live source contract — `providers/huggingface.ts` (HF Hub API). */

import { describe, expect, it } from "vitest";

import { fetchTrendingModels } from "../../../providers/huggingface.ts";
import { LIVE_OPTS, expectDateLike, expectNonEmpty, expectPopulated, expectUrl } from "../contract.ts";
import { probe } from "../status.ts";

describe("live provider: hugging face", () => {
  it("fetchTrendingModels returns models with likes and downloads", LIVE_OPTS, async () => {
    await probe("providers/huggingface.ts", "fetchTrendingModels(10)", async () => {
      const models = await fetchTrendingModels(10);

      expectNonEmpty(models, "hf models");
      expectPopulated(
        models,
        {
          id: "string",
          author: "string",
          likes: "number",
          downloads: "number",
          lastModified: "string",
          url: "string",
        },
        "hf models",
      );
      expectUrl(models[0]!.url, "hf models[0].url");
      expectDateLike(models[0]!.lastModified, "hf models[0].lastModified");
      // The report sorts on this; all-zero likes means the sort field moved.
      expect(
        models.some((m) => m.likes > 0),
        "hf models: every model has 0 likes — the likes field likely changed",
      ).toBe(true);

      return `${models.length} models · top ${models[0]!.id}`;
    });
  });
});
