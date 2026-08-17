/**
 * Live source contract — `providers/sitemap.ts`.
 *
 * The one provider named for a protocol rather than a host: anthropic.com and
 * openai.com differ only by config, so both are probed here.
 */

import { describe, expect, it } from "vitest";

import {
  extractText,
  extractTitle,
  httpGet,
  isSitemapIndex,
  parseSitemapUrls,
  urlCategory,
} from "../../../providers/sitemap.ts";
import { LIVE_OPTS, expectNonEmpty, expectPopulated, expectUrl } from "../contract.ts";
import { probe } from "../status.ts";

describe("live provider: sitemap", () => {
  it("reads the anthropic sitemap and extracts an article", LIVE_OPTS, async () => {
    await probe("providers/sitemap.ts", "httpGet + parse (anthropic)", async () => {
      const xml = await httpGet("https://www.anthropic.com/sitemap.xml");
      const entries = parseSitemapUrls(xml);

      expectNonEmpty(entries, "anthropic sitemap entries");
      expectPopulated(entries, { loc: "string" }, "anthropic sitemap entries");
      expectUrl(entries[0]!.loc, "anthropic sitemap entries[0].loc");

      // Page extraction is the other half of this module, and anthropic.com is
      // the only site whose pages the feed actually fetches — openai.com is
      // configured metadataOnly because its articles 403 from datacenter IPs.
      const article = entries.find((e) => urlCategory(e.loc) === "news") ?? entries[0]!;
      const html = await httpGet(article.loc);
      const title = extractTitle(html);
      const text = extractText(html);

      expect(title.trim().length, `sitemap extractTitle empty for ${article.loc}`).toBeGreaterThan(0);
      expect(
        text.length,
        `sitemap extractText returned ${text.length} chars for ${article.loc} — fetches may be blocked`,
      ).toBeGreaterThan(200);

      return `${entries.length} urls · extracted "${title.slice(0, 40)}"`;
    });
  });

  it("reads the openai sitemap index and one sub-sitemap", LIVE_OPTS, async () => {
    await probe("providers/sitemap.ts", "httpGet + parse (openai)", async () => {
      const index = await httpGet("https://openai.com/sitemap.xml");
      // The feed branches on this: an index means fetch the named sub-sitemaps.
      expect(isSitemapIndex(index), "openai sitemap is no longer an index").toBe(true);

      // `research` is one of the sub-sitemaps the feed asks for by name.
      const sub = await httpGet("https://openai.com/sitemap.xml/research/");
      const entries = parseSitemapUrls(sub);

      expectNonEmpty(entries, "openai research sub-sitemap entries");
      expectUrl(entries[0]!.loc, "openai sub-sitemap entries[0].loc");

      return `index ok · ${entries.length} urls in research/`;
    });
  });
});
