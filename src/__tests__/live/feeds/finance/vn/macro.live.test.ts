/** Live feed contract — `feeds/finance/vn/macro.ts` (macro half of `fin-vnmacro`). */

import { describe, expect, it } from "vitest";

import { fetchVnMacroData } from "../../../../../feeds/finance/vn/index.ts";
import { LIVE_OPTS, expectIsoDate, expectNonEmpty, expectPopulated } from "../../../contract.ts";
import { probe } from "../../../status.ts";

describe("live feed: vietnam macro (VCB + Yahoo + FRED + SJC + World Bank)", () => {
  it("returns USD/VND, global drivers, domestic gold and annual series", LIVE_OPTS, async () => {
    await probe("feeds/finance/vn/macro.ts", "fetchVnMacroData()", async () => {
      const data = await fetchVnMacroData();

      expect(data.fetchSuccess, "vnmacro reported fetchSuccess: false").toBe(true);

      // Vietcombank USD/VND — the framework's most load-bearing number.
      expect(data.fx, "vnmacro.fx is null — the VCB board could not be read").not.toBeNull();
      expectPopulated([data.fx!], { transfer: "number", sell: "number", asOf: "string" }, "vnmacro.fx");
      expect(data.fx!.sell, "vnmacro.fx.sell is not a plausible VND rate").toBeGreaterThan(10_000);
      expectIsoDate(data.fx!.asOf, "vnmacro.fx.asOf");

      // Yahoo + FRED drivers. Name any series that came back blank.
      expectNonEmpty(data.global, "vnmacro.global");
      const blank = data.global.filter((m) => m.latest === null).map((m) => m.symbol);
      expect(blank, `vnmacro.global: no value for ${blank.join(", ")}`).toEqual([]);
      expectPopulated(data.global, { id: "string", symbol: "string", latest: "number" }, "vnmacro.global");

      // The US 10Y must come from FRED, not the Yahoo fallback.
      const us10y = data.global.find((m) => m.id === "us-10y");
      expect(us10y, "vnmacro.global: us-10y missing").toBeDefined();
      expect(us10y!.symbol, "us-10y fell back to Yahoo — FRED DGS10 failed").toBe("DGS10");

      // SJC gold — needs the browser-TLS handshake to get past the WAF.
      expect(data.gold, "vnmacro.gold is null — SJC fetch or parse failed").not.toBeNull();
      const gold = data.gold!;
      expectPopulated(
        [gold],
        { buyVndPerTael: "number", sellVndPerTael: "number", asOf: "string" },
        "vnmacro.gold",
      );
      expect(gold.sellVndPerTael, "gold.sellVndPerTael is not a plausible VND/tael price").toBeGreaterThan(
        1_000_000,
      );
      // The premium needs FX and world gold too, so a null here means one of
      // the three legs broke even though gold itself parsed.
      expect(gold.premiumPct, "vnmacro.gold.premiumPct is null — FX or world gold missing").not.toBeNull();
      expect(gold.sellUsdPerOz!, "gold.sellUsdPerOz conversion looks wrong").toBeGreaterThan(100);

      // World Bank annual series.
      expectNonEmpty(data.annual, "vnmacro.annual");
      const missing = data.annual.filter((m) => m.latest === null).map((m) => m.indicator);
      expect(missing, `vnmacro.annual: no observation for ${missing.join(", ")}`).toEqual([]);
      expectPopulated(data.annual, { id: "string", latest: "number", year: "string" }, "vnmacro.annual");

      return `fx ${data.fx!.sell} · ${data.global.length} drivers · ${data.annual.length} annual series`;
    });
  });
});
