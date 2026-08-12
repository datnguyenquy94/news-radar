/**
 * World Bank indicator API — annual national series.
 *
 * Annual and lagged, so it anchors levels rather than tracking the market. The
 * API rejects `mrnev` (most-recent-non-empty-value); an explicit recent date
 * range is what works, and the newest year is often not yet filed.
 */

import { fetchJsonAsBrowser } from "../core/http.ts";

const WORLD_BANK = "https://api.worldbank.org/v2/country";

type WorldBankResponse = [unknown, { date?: string; value?: number | null }[] | null];

export interface AnnualObservation {
  date: string; // year, e.g. "2024"
  value: number;
}

/** How far back to ask for, so a few unfiled recent years still leave data. */
const LOOKBACK_YEARS = 10;

/**
 * Observations for one indicator, newest first, nulls dropped.
 * Throws `HttpError` on failure; returns `[]` when the indicator has no data.
 */
export async function fetchIndicator(
  countryCode: string,
  indicator: string,
  now = new Date(),
): Promise<AnnualObservation[]> {
  const thisYear = now.getUTCFullYear();
  const json = await fetchJsonAsBrowser<WorldBankResponse>(
    `${WORLD_BANK}/${countryCode}/indicator/${indicator}` +
      `?format=json&per_page=12&date=${thisYear - LOOKBACK_YEARS}:${thisYear}`,
  );
  return (json[1] ?? [])
    .filter((o): o is AnnualObservation => typeof o.value === "number" && !!o.date)
    .sort((a, b) => Number(b.date) - Number(a.date));
}
