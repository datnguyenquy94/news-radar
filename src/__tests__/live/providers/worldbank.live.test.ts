/** Live source contract — `providers/worldbank.ts` (indicator API). */

import { describe, expect, it } from "vitest";

import { fetchIndicator } from "../../../providers/worldbank.ts";
import { LIVE_OPTS, expectNonEmpty, expectPopulated } from "../contract.ts";
import { probe } from "../status.ts";

describe("live provider: world bank", () => {
  it("fetchIndicator returns annual observations, newest first", LIVE_OPTS, async () => {
    await probe("providers/worldbank.ts", 'fetchIndicator("VNM", "FP.CPI.TOTL.ZG")', async () => {
      const obs = await fetchIndicator("VNM", "FP.CPI.TOTL.ZG");

      // The provider returns [] for an indicator with no data — same 200, no
      // rows — so emptiness is the drift signal here.
      expectNonEmpty(obs, "worldbank observations");
      expectPopulated(obs, { date: "string", value: "number" }, "worldbank observations");
      expect(Number(obs[0]!.date), "worldbank date is not a year").toBeGreaterThan(2000);
      expect(Number(obs[0]!.date), "worldbank observations are not newest-first").toBeGreaterThanOrEqual(
        Number(obs[1]!.date),
      );

      return `${obs.length} years · latest ${obs[0]!.date} = ${obs[0]!.value.toFixed(2)}`;
    });
  });
});
