/** Live source contract — `providers/vbma.ts` (weekly bond bulletin PDF). */

import { describe, expect, it } from "vitest";

import { fetchLatestBulletin } from "../../../providers/vbma.ts";
import { LIVE_OPTS, expectNonEmpty, expectSomePopulated, expectUrl } from "../contract.ts";
import { probe } from "../status.ts";

describe("live provider: vbma", () => {
  it("fetchLatestBulletin resolves and extracts the weekly PDF", LIVE_OPTS, async () => {
    await probe("providers/vbma.ts", "fetchLatestBulletin()", async () => {
      const bulletin = await fetchLatestBulletin();

      expectUrl(bulletin.url, "vbma bulletin url");
      expect(bulletin.title.trim().length, "vbma bulletin title is empty").toBeGreaterThan(0);
      expectNonEmpty(bulletin.pages, "vbma bulletin pages");
      // A PDF published as scanned images extracts as empty pages — same 200,
      // no text layer, and `rankPages` would have nothing to keep.
      expectSomePopulated(bulletin.pages, (p) => p.text.trim(), "vbma pages[].text");

      const chars = bulletin.pages.reduce((n, p) => n + p.text.length, 0);
      return `${bulletin.pages.length} pages · ${chars} chars · "${bulletin.title.slice(0, 40)}"`;
    });
  });
});
