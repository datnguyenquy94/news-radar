/**
 * DNSE Entrade chart API — daily OHLCV for indices and index futures.
 *
 * Used for the VN-Index / VN30 levels and the VN30F1M basis. Bars arrive
 * oldest-first.
 */

import { fetchJsonAsBrowser } from "../core/http.ts";

const ENTRADE_CHART = "https://services.entrade.com.vn/chart-api/v2/ohlcs";

/** Daily bars going ~4 months back — enough for a 20-session change. */
export const BAR_WINDOW_SEC = 120 * 24 * 60 * 60;

export interface EntradeBars {
  t?: number[];
  c?: number[];
}

export type BarKind = "index" | "derivative" | "stock";

/**
 * Daily bars for one symbol. Throws `HttpError` on a transport failure and
 * `Error` when the series comes back empty — an empty series is indistinguishable
 * from a wrong symbol, and either way there is nothing to plot.
 */
export async function fetchBars(
  kind: BarKind,
  symbol: string,
  windowSec = BAR_WINDOW_SEC,
): Promise<EntradeBars> {
  const to = Math.floor(Date.now() / 1000);
  const from = to - windowSec;
  const json = await fetchJsonAsBrowser<EntradeBars>(
    `${ENTRADE_CHART}/${kind}?from=${from}&to=${to}&symbol=${symbol}&resolution=1D`,
  );
  if (!json.c?.length || !json.t?.length) throw new Error("empty series");
  return json;
}
