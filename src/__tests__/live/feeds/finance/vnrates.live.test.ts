/** Live feed contract — `feeds/finance/vnrates.ts` (the `fin-vnrates` payload). */

import { describe, expect, it } from "vitest";

import { fetchVnRatesData } from "../../../../feeds/finance/vnrates.ts";
import { LIVE_OPTS, expectIsoDate, expectNonEmpty, expectPopulated } from "../../contract.ts";
import { probe } from "../../status.ts";

describe("live feed: vietnam rates (SBV + FRED + Vietcombank)", () => {
  it("returns the policy corridor, the interbank curve and its derived spreads", LIVE_OPTS, async () => {
    await probe("feeds/finance/vnrates.ts", "fetchVnRatesData()", async () => {
      const data = await fetchVnRatesData();

      expect(data.fetchSuccess, "vnrates reported fetchSuccess: false").toBe(true);

      // Policy corridor — the anchor every spread is measured against.
      expect(data.policy, "vnrates.policy is null — the SBV policy board could not be read").not.toBeNull();
      expectNonEmpty(data.policy!.rates, "vnrates.policy.rates");
      expectIsoDate(data.policy!.effectiveDate, "vnrates.policy.effectiveDate");

      // Interbank board.
      expect(data.interbank, "vnrates.interbank is null").not.toBeNull();
      const ib = data.interbank!;
      expectIsoDate(ib.asOf, "vnrates.interbank.asOf");
      expectNonEmpty(ib.tenors, "vnrates.interbank.tenors");
      expectPopulated(ib.tenors, { tenor: "string", ratePct: "number" }, "vnrates.interbank.tenors");

      // The 30-session lookback is a report column; a short history nulls it
      // silently, so assert the window rather than the values inside it.
      expect(
        ib.sessions,
        "vnrates: fewer than 31 sessions — the 30-session column would be null",
      ).toBeGreaterThan(30);
      for (const key of ["d1", "d20", "d30"] as const) {
        expectIsoDate(ib.comparedWith[key], `vnrates.interbank.comparedWith.${key}`);
      }

      const overnight = ib.tenors.find((t) => t.tenor === "Qua đêm");
      expect(overnight, 'vnrates: no "Qua đêm" tenor').toBeDefined();
      expectPopulated(
        [overnight!],
        { changePp1d: "number", changePp20d: "number", changePp30d: "number", volumeVndBn: "number" },
        "vnrates overnight",
      );
      expect(ib.totalVolumeVndBn, "vnrates.interbank.totalVolumeVndBn is null").not.toBeNull();
      expect(ib.shortEndSharePct, "vnrates.interbank.shortEndSharePct is null").not.toBeNull();

      // Derived spreads. A null here means one leg vanished, not a zero spread.
      expect(data.spreads, "vnrates.spreads is null").not.toBeNull();
      expectPopulated(
        [data.spreads!],
        {
          refinancingPct: "number",
          overnightPct: "number",
          policyGapOvernightPp: "number",
          policyGapOneWeekPp: "number",
          curveSlopePp: "number",
          fedFundsPct: "number",
          vndUsdSpreadPp: "number",
        },
        "vnrates.spreads",
      );

      // USD/VND — the constraint the whole rate read is judged against.
      expect(data.fx, "vnrates.fx is null — the VCB board could not be read").not.toBeNull();
      expect(data.fx!.sell, "vnrates.fx.sell is not a plausible VND rate").toBeGreaterThan(10_000);

      expectNonEmpty(data.history, "vnrates.history");

      return (
        `${ib.tenors.length} tenors over ${ib.sessions} sessions · overnight ${data.spreads!.overnightPct}% ` +
        `vs refinancing ${data.spreads!.refinancingPct}% (gap ${data.spreads!.policyGapOvernightPp}pp)`
      );
    });
  });
});
