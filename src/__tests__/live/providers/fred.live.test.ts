/**
 * Live source contract — `providers/fred.ts`.
 *
 * `fetchFredSeries` reads `FRED_API_KEY` from the environment and falls back to
 * the keyless CSV endpoint, so this probe covers whichever path is configured —
 * the summary line names it.
 */

import { describe, expect, it } from "vitest";

import { fetchFredSeries } from "../../../providers/fred.ts";
import { LIVE_OPTS, expectIsoDate, expectNonEmpty, expectPopulated, hasEnv } from "../contract.ts";
import { probe } from "../status.ts";

describe("live provider: fred", () => {
  it("fetchFredSeries returns a descending observation window", LIVE_OPTS, async () => {
    await probe("providers/fred.ts", 'fetchFredSeries("DGS10")', async () => {
      // The series the Vietnam dashboard uses for the US 10Y.
      const obs = await fetchFredSeries("DGS10", 30);

      expectNonEmpty(obs, "fred observations");
      expectPopulated(obs, { date: "string", value: "number" }, "fred observations");
      expectIsoDate(obs[0]!.date, "fred observations[0].date");
      // The CSV path is ascending upstream and reversed by the provider; a
      // regression there would silently make "latest" the oldest point.
      expect(Date.parse(obs[0]!.date), "fred observations are not newest-first").toBeGreaterThanOrEqual(
        Date.parse(obs[1]!.date),
      );

      const mode = hasEnv("FRED_API_KEY") ? "json api" : "keyless csv";
      return `${obs.length} obs · ${mode} · latest ${obs[0]!.date} = ${obs[0]!.value}`;
    });
  });
});
