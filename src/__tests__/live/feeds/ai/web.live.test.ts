/**
 * Live feed contract — `feeds/ai/web.ts` (`ai-web`).
 *
 * A fresh in-memory state keeps this read-only: nothing is persisted, and a
 * first run reports every URL it discovers.
 */

import { describe, expect, it } from "vitest";

import { fetchSiteContent } from "../../../../feeds/ai/web.ts";
import { emptyState } from "../../../../platform/state/web-state.ts";
import { LIVE_OPTS, expectNonEmpty, expectPopulated, expectUrl } from "../../contract.ts";
import { probe } from "../../status.ts";

describe("live feed: web (anthropic + openai sitemaps)", () => {
  it.each(["anthropic", "openai"] as const)("discovers %s sitemap URLs", LIVE_OPTS, async (site) => {
    await probe("feeds/ai/web.ts", `fetchSiteContent("${site}")`, async () => {
      const result = await fetchSiteContent(site, emptyState());

      expect(result.site, "web.site").toBe(site);
      expect(
        result.totalDiscovered,
        `web/${site}: sitemap yielded no URLs — the sitemap layout likely changed`,
      ).toBeGreaterThan(0);
      expectNonEmpty(result.newItems, `web/${site}.newItems (first run)`);
      expectPopulated(
        result.newItems,
        { url: "string", title: "string", category: "string" },
        `web/${site}.newItems`,
      );
      expectUrl(result.newItems[0]!.url, `web/${site}.newItems[0].url`);

      return `${result.totalDiscovered} discovered · ${result.newItems.length} items on a first run`;
    });
  });

  // Anthropic is the only site whose article pages we actually fetch. OpenAI is
  // configured `metadataOnly` because its pages return 403 from datacenter IPs,
  // so an empty `content` there is intended behaviour, not drift — asserting on
  // it would fail permanently and teach everyone to ignore this suite.
  it("still extracts anthropic page content, not just sitemap metadata", LIVE_OPTS, async () => {
    await probe("feeds/ai/web.ts", 'fetchSiteContent("anthropic") content', async () => {
      const result = await fetchSiteContent("anthropic", emptyState());

      expectNonEmpty(result.newItems, "web/anthropic.newItems");
      expectPopulated(result.newItems, { content: "string" }, "web/anthropic.newItems");
      // Real article bodies, not a WAF interstitial that happens to have text.
      const chars = result.newItems[0]!.content.length;
      expect(
        chars,
        "web/anthropic: page content is suspiciously short — fetches may be blocked",
      ).toBeGreaterThan(200);

      return `${result.newItems.length} items · first body ${chars} chars`;
    });
  });
});
