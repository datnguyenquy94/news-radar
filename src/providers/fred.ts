/**
 * FRED — Federal Reserve Economic Data, St. Louis Fed (https://fred.stlouisfed.org).
 *
 * Two access paths, both normalized to a descending `{ date, value }` array:
 *
 *   1. JSON API (preferred) — needs a free key in `FRED_API_KEY`.
 *   2. Keyless CSV fallback — `fredgraph.csv`, used automatically when unset.
 *
 * FRED is a documented public product with an SLA, so it is preferred over an
 * undocumented quote endpoint wherever both carry a series — the Vietnam
 * dashboard sources the US 10Y through here rather than from Yahoo.
 */

import { fetchJson, fetchText } from "../core/http.ts";

export interface Observation {
  date: string;
  value: number;
}

const FRED_API = "https://api.stlouisfed.org/fred/series/observations";
const FRED_CSV = "https://fred.stlouisfed.org/graph/fredgraph.csv";

/** Default observation window — enough for a YoY transform on a monthly series. */
const DEFAULT_LIMIT = 14;

/** ~2.2 years back: enough monthly points for YoY without decades of daily history. */
const CSV_LOOKBACK_DAYS = 800;

/**
 * Descending window of observations (newest first), missing values dropped.
 * Throws `HttpError` on failure.
 */
export async function fetchObservations(
  series: string,
  apiKey: string | undefined,
  limit = DEFAULT_LIMIT,
): Promise<Observation[]> {
  if (apiKey) {
    const url =
      `${FRED_API}?series_id=${series}&api_key=${apiKey}` + `&file_type=json&sort_order=desc&limit=${limit}`;
    const json = await fetchJson<{ observations?: { date: string; value: string }[] }>(url);
    return (json.observations ?? [])
      .filter((o) => o.value !== "." && o.value !== "")
      .map((o) => ({ date: o.date, value: Number(o.value) }))
      .filter((o) => Number.isFinite(o.value));
  }

  const cosd = new Date(Date.now() - CSV_LOOKBACK_DAYS * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const csv = await fetchText(`${FRED_CSV}?id=${series}&cosd=${cosd}`);
  const rows = csv.trim().split("\n").slice(1); // drop header
  const parsed: Observation[] = [];
  for (const row of rows) {
    const [date, raw] = row.split(",");
    if (!date || raw === undefined || raw === "." || raw.trim() === "") continue;
    const value = Number(raw);
    if (Number.isFinite(value)) parsed.push({ date, value });
  }
  return parsed.reverse(); // CSV is ascending; normalize to descending
}

/** One series, newest first, reading `FRED_API_KEY` from the environment. */
export function fetchFredSeries(series: string, limit = 30): Promise<Observation[]> {
  return fetchObservations(series, process.env["FRED_API_KEY"], limit);
}
