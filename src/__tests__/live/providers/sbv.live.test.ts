/** Live source contract — `providers/sbv.ts` (SBV policy + interbank boards). */

import { describe, expect, it } from "vitest";

import { fetchInterbankDays, fetchPolicyBoard, parseVnNumber } from "../../../providers/sbv.ts";
import { LIVE_OPTS, expectIsoDate, expectNonEmpty, expectPopulated } from "../contract.ts";
import { probe } from "../status.ts";

describe("live provider: sbv", () => {
  it("fetchPolicyBoard returns the standing policy corridor", LIVE_OPTS, async () => {
    await probe("providers/sbv.ts", "fetchPolicyBoard()", async () => {
      const board = await fetchPolicyBoard();

      expect(
        board,
        "sbv policy board is null — the anti-bot handshake or the structure changed",
      ).not.toBeNull();
      expectIsoDate(board!.effectiveDate, "sbv policy effectiveDate");
      expectNonEmpty(board!.rates, "sbv policy rates");
      expectPopulated(board!.rates, { name: "string", raw: "string", ratePct: "number" }, "sbv policy rates");

      // The refinancing rate is the corridor ceiling every derived spread is
      // measured against; losing the row would silently null the whole report.
      const refinancing = board!.rates.find((r) => r.name.toLowerCase().includes("tái cấp vốn"));
      expect(refinancing, "sbv policy board has no refinancing-rate row").toBeDefined();
      // SBV quotes "4,500%" — a comma-as-decimal miss would read this as 4500.
      expect(refinancing!.ratePct!, "refinancing rate is not a plausible policy rate").toBeLessThan(25);
      expect(refinancing!.ratePct!, "refinancing rate is not a plausible policy rate").toBeGreaterThan(0);

      return `${board!.rates.length} rates effective ${board!.effectiveDate}, refinancing ${refinancing!.raw}`;
    });
  });

  it("fetchInterbankDays returns a deep, ordered session history", LIVE_OPTS, async () => {
    await probe("providers/sbv.ts", "fetchInterbankDays()", async () => {
      const days = await fetchInterbankDays();

      expectNonEmpty(days, "sbv interbank days");
      // The feed's longest lookback is 30 sessions, so anything under 31 makes
      // a column of the report null without any error surfacing.
      expect(
        days.length,
        "sbv returned fewer than 31 sessions — the 30-session lookback would be null",
      ).toBeGreaterThan(30);

      const latest = days[0]!;
      expectIsoDate(latest.date, "sbv interbank latest date");
      expect(
        days.map((d) => d.date),
        "sbv interbank sessions are not sorted newest first",
      ).toEqual([...days.map((d) => d.date)].sort().reverse());

      expectNonEmpty(latest.rows, "sbv interbank rows");
      expectPopulated(
        latest.rows,
        { tenor: "string", ratePct: "number", volumeVndBn: "number" },
        "sbv interbank rows",
      );

      const overnight = latest.rows.find((r) => r.tenor === "Qua đêm");
      expect(overnight, 'sbv interbank board has no "Qua đêm" row — SBV renamed a tenor').toBeDefined();
      expect(overnight!.ratePct!, "overnight rate is not a plausible interbank rate").toBeLessThan(50);

      return `${days.length} sessions, latest ${latest.date} with ${latest.rows.length} tenors, overnight ${overnight!.ratePct}%`;
    });
  });

  it("parseVnNumber reads SBV's comma-decimal quoting", LIVE_OPTS, async () => {
    await probe("providers/sbv.ts", "parseVnNumber()", async () => {
      // Offline and deterministic, but it guards the one mistake that would
      // misprice every rate in the report by three orders of magnitude.
      expect(parseVnNumber("3,000%")).toBe(3);
      expect(parseVnNumber("6,39")).toBe(6.39);
      expect(parseVnNumber("1.012.640")).toBe(1012640);
      expect(parseVnNumber("")).toBeNull();
      return "comma-decimal, dot-grouping and percent stripping all parse";
    });
  });
});
