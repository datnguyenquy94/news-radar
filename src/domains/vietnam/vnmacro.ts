/**
 * Vietnam macro indicators: the currency, the global drivers behind it, and
 * the official annual series.
 *
 *   1. Vietcombank exchange-rate API — the USD/VND commercial board. VND
 *      stability is the binding constraint on SBV policy, so this is the single
 *      most load-bearing number in the framework.
 *   2. Yahoo Finance chart API — DXY, US 10Y, gold, Brent and the VanEck VNM
 *      ETF. These are the *drivers* of USD/VND pressure; without them the FX
 *      reading is purely backward-looking.
 *   3. World Bank — CPI, GDP growth, FDI and reserves for Viet Nam. Annual and
 *      lagged, so it serves as the level/sanity anchor, not the live feed.
 *
 * Note the XML feed at `vietcombank.com.vn/ExchangeRates/ExrateXML.aspx` that
 * older source catalogues recommend now 302s to a 404 page; the JSON by-date
 * endpoint used here is what still answers.
 */

import { BROWSER_UA } from "../../core/doc-extract.ts";
import type { Lang } from "../../core/i18n/index.ts";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface VnFxRate {
  transfer: number; // VCB transfer rate, VND per USD
  sell: number; // VCB sell rate
  asOf: string; // ISO date of the board actually used
  changePct1m: number | null; // sell rate vs ~1 month ago
  changePctYtd: number | null; // sell rate vs the first board of the year
}

/** A daily global series that drives, or prices, Vietnam risk. */
export interface VnGlobalMetric {
  id: string;
  symbol: string;
  label: Record<Lang, string>;
  unit: string;
  decimals: number;
  latest: number | null;
  changePct1d: number | null;
  changePct20d: number | null;
  asOf: string;
}

/** An annual World Bank series. */
export interface VnAnnualMetric {
  id: string;
  indicator: string;
  label: Record<Lang, string>;
  unit: string;
  latest: number | null;
  prior: number | null;
  year: string;
}

export interface VnMacroData {
  fx: VnFxRate | null;
  global: VnGlobalMetric[];
  annual: VnAnnualMetric[];
  fetchSuccess: boolean;
}

// ---------------------------------------------------------------------------
// Catalogs
// ---------------------------------------------------------------------------

const GLOBAL_SERIES: {
  id: string;
  symbol: string;
  label: Record<Lang, string>;
  unit: string;
  decimals: number;
}[] = [
  {
    id: "dxy",
    symbol: "DX-Y.NYB",
    label: { zh: "美元指数 (DXY)", en: "US Dollar Index (DXY)" },
    unit: "",
    decimals: 2,
  },
  {
    id: "us-10y",
    symbol: "^TNX",
    label: { zh: "美国 10 年期国债收益率", en: "US 10Y Treasury Yield" },
    unit: "%",
    decimals: 2,
  },
  {
    id: "gold",
    symbol: "GC=F",
    label: { zh: "国际金价", en: "Gold (COMEX)" },
    unit: "$/oz",
    decimals: 1,
  },
  {
    id: "brent",
    symbol: "BZ=F",
    label: { zh: "布伦特原油", en: "Brent Crude" },
    unit: "$/bbl",
    decimals: 2,
  },
  {
    id: "vnm-etf",
    symbol: "VNM",
    label: { zh: "VanEck 越南 ETF (VNM)", en: "VanEck Vietnam ETF (VNM)" },
    unit: "$",
    decimals: 2,
  },
  {
    id: "hrc-steel",
    symbol: "HRC=F",
    label: { zh: "热轧卷板期货 (HRC)", en: "Hot-Rolled Coil Futures" },
    unit: "$/t",
    decimals: 1,
  },
];

const ANNUAL_SERIES: { id: string; indicator: string; label: Record<Lang, string>; unit: string }[] = [
  {
    id: "cpi-annual",
    indicator: "FP.CPI.TOTL.ZG",
    label: { zh: "CPI 通胀 (年度)", en: "CPI Inflation (annual)" },
    unit: "%",
  },
  {
    id: "gdp-growth",
    indicator: "NY.GDP.MKTP.KD.ZG",
    label: { zh: "GDP 增速 (年度)", en: "GDP Growth (annual)" },
    unit: "%",
  },
  {
    id: "fdi",
    indicator: "BX.KLT.DINV.CD.WD",
    label: { zh: "FDI 净流入 (年度)", en: "FDI Net Inflows (annual)" },
    unit: "$B",
  },
  {
    id: "reserves",
    indicator: "FI.RES.TOTL.CD",
    label: { zh: "外汇储备 (年度)", en: "FX Reserves (annual)" },
    unit: "$B",
  },
];

const VCB_API = "https://www.vietcombank.com.vn/api/exchangerates";
const YAHOO_CHART = "https://query1.finance.yahoo.com/v8/finance/chart";
const WORLD_BANK = "https://api.worldbank.org/v2/country/VNM/indicator";

const FETCH_TIMEOUT_MS = 25_000;
/** VCB publishes no board on weekends/holidays — walk back this many days. */
const VCB_MAX_LOOKBACK_DAYS = 6;

// ---------------------------------------------------------------------------
// Fetch helpers
// ---------------------------------------------------------------------------

async function getJson<T>(url: string, referer?: string): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const resp = await fetch(url, {
      headers: {
        "User-Agent": BROWSER_UA,
        Accept: "application/json, text/plain, */*",
        ...(referer ? { Referer: referer, Origin: new URL(referer).origin } : {}),
      },
      signal: controller.signal,
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    return (await resp.json()) as T;
  } finally {
    clearTimeout(timer);
  }
}

const isoDate = (d: Date): string => d.toISOString().slice(0, 10);
const daysAgo = (from: Date, n: number): Date => new Date(from.getTime() - n * 24 * 60 * 60 * 1000);
const round = (n: number, decimals: number): number => {
  const f = 10 ** decimals;
  return Math.round(n * f) / f;
};

// ---------------------------------------------------------------------------
// Vietcombank USD/VND
// ---------------------------------------------------------------------------

interface VcbResponse {
  Date?: string;
  Data?: { currencyCode?: string; cash?: string; transfer?: string; sell?: string }[];
}

interface VcbBoard {
  transfer: number;
  sell: number;
  asOf: string;
}

/** Pull the USD row out of a VCB board response. */
export function parseVcbUsd(json: VcbResponse): VcbBoard | null {
  const usd = (json.Data ?? []).find((r) => r.currencyCode?.toUpperCase() === "USD");
  if (!usd) return null;
  const transfer = Number((usd.transfer ?? "").replace(/,/g, ""));
  const sell = Number((usd.sell ?? "").replace(/,/g, ""));
  if (!Number.isFinite(sell) || sell <= 0) return null;
  return {
    // A missing `transfer` parses to 0, which is finite — guard on the value,
    // not just the type, or the board reports a zero transfer rate.
    transfer: Number.isFinite(transfer) && transfer > 0 ? transfer : sell,
    sell,
    asOf: (json.Date ?? "").slice(0, 10),
  };
}

/** Fetch the board for `date`, walking back over non-publishing days. */
async function fetchVcbBoard(date: Date, lookbackDays = VCB_MAX_LOOKBACK_DAYS): Promise<VcbBoard | null> {
  for (let back = 0; back <= lookbackDays; back++) {
    const day = isoDate(daysAgo(date, back));
    try {
      const board = parseVcbUsd(
        await getJson<VcbResponse>(`${VCB_API}?date=${day}`, "https://www.vietcombank.com.vn/"),
      );
      if (board) return { ...board, asOf: board.asOf || day };
    } catch (err) {
      // A single missing day is expected; only the exhausted loop is a failure.
      if (back === lookbackDays) console.error(`  [vnmacro] VCB ${day} failed: ${err}`);
    }
  }
  return null;
}

async function fetchFx(now: Date): Promise<VnFxRate | null> {
  const [latest, monthAgo, yearStart] = await Promise.all([
    fetchVcbBoard(now),
    fetchVcbBoard(daysAgo(now, 30)),
    // First business days of January are holiday-heavy; allow a wide walk-back
    // from mid-January rather than anchoring on the 1st.
    fetchVcbBoard(new Date(Date.UTC(now.getUTCFullYear(), 0, 15)), 14),
  ]);

  if (!latest) {
    console.error("  [vnmacro] no VCB board available");
    return null;
  }
  const pct = (then: VcbBoard | null): number | null =>
    then && then.sell !== 0 ? round(((latest.sell - then.sell) / then.sell) * 100, 2) : null;

  console.log(`  [vnmacro] USD/VND ${latest.sell} (as of ${latest.asOf})`);
  return {
    transfer: latest.transfer,
    sell: latest.sell,
    asOf: latest.asOf,
    changePct1m: pct(monthAgo),
    changePctYtd: pct(yearStart),
  };
}

// ---------------------------------------------------------------------------
// Yahoo Finance global drivers
// ---------------------------------------------------------------------------

interface YahooChart {
  chart?: {
    result?: {
      meta?: { regularMarketPrice?: number };
      timestamp?: number[];
      indicators?: { quote?: { close?: (number | null)[] }[] };
    }[];
  };
}

async function fetchGlobalMetric(spec: (typeof GLOBAL_SERIES)[number]): Promise<VnGlobalMetric> {
  const base: VnGlobalMetric = {
    id: spec.id,
    symbol: spec.symbol,
    label: spec.label,
    unit: spec.unit,
    decimals: spec.decimals,
    latest: null,
    changePct1d: null,
    changePct20d: null,
    asOf: "",
  };

  try {
    const json = await getJson<YahooChart>(
      `${YAHOO_CHART}/${encodeURIComponent(spec.symbol)}?range=3mo&interval=1d`,
    );
    const result = json.chart?.result?.[0];
    const times = result?.timestamp ?? [];
    // Yahoo pads gaps with nulls; drop them so "20 sessions back" means 20 bars.
    const series: { t: number; c: number }[] = [];
    const closes = result?.indicators?.quote?.[0]?.close ?? [];
    for (let i = 0; i < closes.length; i++) {
      const c = closes[i];
      const t = times[i];
      if (typeof c === "number" && Number.isFinite(c) && typeof t === "number") series.push({ t, c });
    }
    const last = series[series.length - 1];
    if (!last) throw new Error("empty series");

    const back = (n: number): number | undefined => series[series.length - 1 - n]?.c;
    const pct = (then: number | undefined): number | null =>
      then === undefined || then === 0 ? null : round(((last.c - then) / then) * 100, 2);

    return {
      ...base,
      latest: round(last.c, spec.decimals),
      changePct1d: pct(back(1)),
      changePct20d: pct(back(20)),
      asOf: new Date(last.t * 1000).toISOString().slice(0, 10),
    };
  } catch (err) {
    console.error(`  [vnmacro] ${spec.symbol} failed: ${err}`);
    return base;
  }
}

// ---------------------------------------------------------------------------
// World Bank annual series
// ---------------------------------------------------------------------------

type WorldBankResponse = [unknown, { date?: string; value?: number | null }[] | null];

async function fetchAnnualMetric(spec: (typeof ANNUAL_SERIES)[number]): Promise<VnAnnualMetric> {
  const base: VnAnnualMetric = {
    id: spec.id,
    indicator: spec.indicator,
    label: spec.label,
    unit: spec.unit,
    latest: null,
    prior: null,
    year: "",
  };

  try {
    // The API rejects `mrnev`; an explicit recent date range is what works.
    const thisYear = new Date().getUTCFullYear();
    const json = await getJson<WorldBankResponse>(
      `${WORLD_BANK}/${spec.indicator}?format=json&per_page=12&date=${thisYear - 10}:${thisYear}`,
    );
    // Newest first, nulls dropped: the most recent year is often not yet filed.
    const observations = (json[1] ?? [])
      .filter((o): o is { date: string; value: number } => typeof o.value === "number" && !!o.date)
      .sort((a, b) => Number(b.date) - Number(a.date));

    const [latest, prior] = observations;
    if (!latest) throw new Error("no observations");
    // Dollar figures arrive in units; the framework quotes them in billions.
    const scale = spec.unit === "$B" ? 1e-9 : 1;
    return {
      ...base,
      latest: round(latest.value * scale, 2),
      prior: prior ? round(prior.value * scale, 2) : null,
      year: latest.date,
    };
  } catch (err) {
    console.error(`  [vnmacro] World Bank ${spec.indicator} failed: ${err}`);
    return base;
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export async function fetchVnMacroData(now = new Date()): Promise<VnMacroData> {
  console.log("  [vnmacro] Fetching VCB FX + global drivers + World Bank...");

  const [fx, global, annual] = await Promise.all([
    fetchFx(now).catch((err) => {
      console.error(`  [vnmacro] FX failed: ${err}`);
      return null;
    }),
    Promise.all(GLOBAL_SERIES.map(fetchGlobalMetric)),
    Promise.all(ANNUAL_SERIES.map(fetchAnnualMetric)),
  ]);

  const withData = global.filter((m) => m.latest !== null).length;
  console.log(`  [vnmacro] ${withData}/${GLOBAL_SERIES.length} global series, fx ${fx ? "ok" : "missing"}`);

  return { fx, global, annual, fetchSuccess: fx !== null || withData > 0 };
}
