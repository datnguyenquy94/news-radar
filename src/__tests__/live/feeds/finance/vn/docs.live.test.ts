/** Live feed contract — `feeds/finance/vn/docs.ts` (documents half of `fin-vnmacro`). */

import { describe, expect, it } from "vitest";

import { fetchVnDocsData } from "../../../../../feeds/finance/vn/index.ts";
import { LIVE_OPTS, expectPopulated, expectUrl } from "../../../contract.ts";
import { probe } from "../../../status.ts";

describe("live feed: vietnam documents (NSO HTML + VBMA PDF)", () => {
  it("extracts all three documents with usable excerpts", LIVE_OPTS, async () => {
    await probe("feeds/finance/vn/docs.ts", "fetchVnDocsData()", async () => {
      const data = await fetchVnDocsData();

      expect(data.fetchSuccess, "vndocs reported fetchSuccess: false").toBe(true);
      // All three matter: two NSO articles and the VBMA weekly bulletin.
      expect(
        data.docs.map((d) => d.id).sort(),
        "vndocs: a source dropped out — listing page or link pattern changed",
      ).toEqual(["nso-cpi", "nso-monthly", "vbma-weekly"]);

      expectPopulated(
        data.docs,
        { id: "string", source: "string", title: "string", url: "string", kind: "string", excerpt: "string" },
        "vndocs.docs",
        3,
      );

      for (const doc of data.docs) {
        expectUrl(doc.url, `vndocs ${doc.id} url`);
        // A short excerpt means Readability or the page-ranker found nothing —
        // the symptom of a CMS change, not of a quiet news week.
        expect(doc.excerpt.length, `vndocs ${doc.id}: excerpt is too short to be usable`).toBeGreaterThan(
          500,
        );
      }

      const pdf = data.docs.find((d) => d.kind === "pdf")!;
      expect(pdf.pages?.length, "vndocs vbma-weekly: no pages survived keyword ranking").toBeGreaterThan(0);

      const chars = data.docs.reduce((n, d) => n + d.excerpt.length, 0);
      return `${data.docs.length} docs · ${chars} excerpt chars · ${pdf.pages!.length} ranked pdf pages`;
    });
  });
});
