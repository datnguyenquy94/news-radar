/**
 * Yahoo Finance chart API — daily closes for global symbols.
 *
 * Undocumented, so it is only used where no documented source carries the
 * series. Where one does, it is the fallback: the US 10Y comes from FRED
 * `DGS10`, with Yahoo's `^TNX` wired in behind it.
 *
 * Yahoo rate-limits when several symbols are requested at once, and pads
 * non-trading gaps with nulls — those are dropped here so "20 bars back" really
 * means 20 sessions back.
 */

import { fetchJsonAsBrowser } from "../core/http.ts";

const YAHOO_CHART = "https://query1.finance.yahoo.com/v8/finance/chart";

interface YahooChart {
  chart?: {
    result?: {
      meta?: { regularMarketPrice?: number };
      timestamp?: number[];
      indicators?: { quote?: { close?: (number | null)[] }[] };
    }[];
  };
}

/** One daily bar: epoch seconds and close. */
export interface DailyBar {
  t: number;
  c: number;
}

/**
 * Daily closes, oldest first, nulls dropped. Throws `HttpError` on a transport
 * failure and `Error` when the series comes back empty.
 */
export async function fetchDailySeries(symbol: string, range = "3mo"): Promise<DailyBar[]> {
  const json = await fetchJsonAsBrowser<YahooChart>(
    `${YAHOO_CHART}/${encodeURIComponent(symbol)}?range=${range}&interval=1d`,
  );
  const result = json.chart?.result?.[0];
  const times = result?.timestamp ?? [];
  const closes = result?.indicators?.quote?.[0]?.close ?? [];

  const series: DailyBar[] = [];
  for (let i = 0; i < closes.length; i++) {
    const c = closes[i];
    const t = times[i];
    if (typeof c === "number" && Number.isFinite(c) && typeof t === "number") series.push({ t, c });
  }
  if (series.length === 0) throw new Error("empty series");
  return series;
}
