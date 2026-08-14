/**
 * Vietnam macro indicators — the macro half of the `fin-vnmacro` report.
 *
 *   1. Vietcombank — the USD/VND commercial board. VND stability is the binding
 *      constraint on SBV policy, so this is the single most load-bearing number.
 *   2. Yahoo Finance — DXY, world gold, Brent, HRC steel and the VanEck VNM ETF.
 *      These are the *drivers* of USD/VND pressure; without them the FX reading
 *      is purely backward-looking.
 *   3. FRED — the US 10-year yield. Yahoo carries `^TNX` too, but FRED is a
 *      documented product with an SLA where Yahoo is an undocumented endpoint,
 *      so FRED is primary and Yahoo is only the fallback.
 *   4. SJC — the domestic gold board, and the premium over the world price once
 *      converted at the VCB rate. Gold is the competing retail asset: money
 *      leaving bank deposits does not automatically arrive in equities, and a
 *      widening premium is a direct read on VND confidence.
 *   5. World Bank — CPI, GDP growth, FDI and reserves. Annual and lagged, so it
 *      anchors levels rather than tracking the market.
 */

import { fetchFredSeries, type Observation } from "../../../providers/fred.ts";
import { fetchDailySeries } from "../../../providers/yahoo.ts";
import { fetchIndicator } from "../../../providers/worldbank.ts";
import { VCB_MAX_LOOKBACK_DAYS, fetchUsdBoard, type VcbBoard } from "../../../providers/vietcombank.ts";
import { OZ_PER_TAEL, fetchGoldBoard } from "../../../providers/sjc.ts";
import type { Lang } from "../../../core/i18n/index.ts";
import { createLogger } from "../../../core/logger.ts";

const log = createLogger("vnmacro");

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

/**
 * The domestic gold board and what it implies about the dong.
 *
 * SJC quotes in VND per *lượng* (tael); the premium is only meaningful once
 * that is converted to USD per troy ounce at the same day's VCB rate and
 * compared with the world price.
 */
export interface VnGold {
  buyVndPerTael: number;
  sellVndPerTael: number;
  sellUsdPerOz: number | null; // converted at the VCB sell rate
  worldUsdPerOz: number | null; // COMEX GC=F
  premiumPct: number | null; // domestic over world
  asOf: string; // as reported by SJC
}

export interface VnMacroData {
  fx: VnFxRate | null;
  global: VnGlobalMetric[];
  annual: VnAnnualMetric[];
  gold: VnGold | null;
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
    label: { vi: "Chỉ số Đô la Mỹ (DXY)", en: "US Dollar Index (DXY)" },
    unit: "",
    decimals: 2,
  },
  {
    id: "gold",
    symbol: "GC=F",
    label: { vi: "Giá vàng thế giới", en: "Gold (COMEX)" },
    unit: "$/oz",
    decimals: 1,
  },
  {
    id: "brent",
    symbol: "BZ=F",
    label: { vi: "Dầu thô Brent", en: "Brent Crude" },
    unit: "$/bbl",
    decimals: 2,
  },
  {
    id: "vnm-etf",
    symbol: "VNM",
    label: { vi: "VanEck Vietnam ETF (VNM)", en: "VanEck Vietnam ETF (VNM)" },
    unit: "$",
    decimals: 2,
  },
  {
    id: "hrc-steel",
    symbol: "HRC=F",
    label: { vi: "Hợp đồng tương lai thép cuộn cán nóng (HRC)", en: "Hot-Rolled Coil Futures" },
    unit: "$/t",
    decimals: 1,
  },
];

const ANNUAL_SERIES: { id: string; indicator: string; label: Record<Lang, string>; unit: string }[] = [
  {
    id: "cpi-annual",
    indicator: "FP.CPI.TOTL.ZG",
    label: { vi: "Lạm phát CPI (hàng năm)", en: "CPI Inflation (annual)" },
    unit: "%",
  },
  {
    id: "gdp-growth",
    indicator: "NY.GDP.MKTP.KD.ZG",
    label: { vi: "Tăng trưởng GDP (hàng năm)", en: "GDP Growth (annual)" },
    unit: "%",
  },
  {
    id: "fdi",
    indicator: "BX.KLT.DINV.CD.WD",
    label: { vi: "Dòng vốn FDI ròng (hàng năm)", en: "FDI Net Inflows (annual)" },
    unit: "$B",
  },
  {
    id: "reserves",
    indicator: "FI.RES.TOTL.CD",
    label: { vi: "Dự trữ ngoại hối (hàng năm)", en: "FX Reserves (annual)" },
    unit: "$B",
  },
];

/**
 * The US 10-year, sourced from FRED rather than from Yahoo's `^TNX`. Yahoo is
 * kept as a fallback only — see the module header.
 */
const US_10Y: { id: string; series: string; fallbackSymbol: string; label: Record<Lang, string> } = {
  id: "us-10y",
  series: "DGS10",
  fallbackSymbol: "^TNX",
  label: { vi: "Lợi suất trái phiếu Mỹ 10 năm", en: "US 10Y Treasury Yield" },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const isoDate = (d: Date): string => d.toISOString().slice(0, 10);
const daysAgo = (from: Date, n: number): Date => new Date(from.getTime() - n * 24 * 60 * 60 * 1000);
const round = (n: number, decimals: number): number => {
  const f = 10 ** decimals;
  return Math.round(n * f) / f;
};

// ---------------------------------------------------------------------------
// Vietcombank USD/VND
// ---------------------------------------------------------------------------

/** Fetch the board for `date`, walking back over non-publishing days. */
async function fetchVcbBoard(date: Date, lookbackDays = VCB_MAX_LOOKBACK_DAYS): Promise<VcbBoard | null> {
  for (let back = 0; back <= lookbackDays; back++) {
    const day = isoDate(daysAgo(date, back));
    try {
      const board = await fetchUsdBoard(day);
      if (board) return { ...board, asOf: board.asOf || day };
    } catch (err) {
      // A single missing day is expected; only the exhausted loop is a failure.
      if (back === lookbackDays) log.error(`VCB ${day} failed: ${err}`);
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
    log.error("no VCB board available");
    return null;
  }
  const pct = (then: VcbBoard | null): number | null =>
    then && then.sell !== 0 ? round(((latest.sell - then.sell) / then.sell) * 100, 2) : null;

  log.info(`USD/VND ${latest.sell} (as of ${latest.asOf})`);
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
    const series = await fetchDailySeries(spec.symbol);
    const last = series[series.length - 1]!;

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
    log.error(`${spec.symbol} failed: ${err}`);
    return base;
  }
}

// ---------------------------------------------------------------------------
// US 10-year yield — FRED primary, Yahoo fallback
// ---------------------------------------------------------------------------

/**
 * FRED publishes `DGS10` on business days only, so N observations back is N
 * trading sessions back — the same basis as the Yahoo-sourced series alongside
 * it. Falls back to `^TNX` so a FRED outage degrades the reading rather than
 * dropping the US-VN rate gap from the report entirely.
 */
async function fetchUs10y(): Promise<VnGlobalMetric> {
  const base: VnGlobalMetric = {
    id: US_10Y.id,
    symbol: US_10Y.series,
    label: US_10Y.label,
    unit: "%",
    decimals: 2,
    latest: null,
    changePct1d: null,
    changePct20d: null,
    asOf: "",
  };

  try {
    // Descending — index 0 is the latest observation.
    const obs = await fetchFredSeries(US_10Y.series, 30);
    const latest = obs[0];
    if (!latest) throw new Error("no observations");
    const pct = (then: Observation | undefined): number | null =>
      then === undefined || then.value === 0
        ? null
        : round(((latest.value - then.value) / then.value) * 100, 2);
    return {
      ...base,
      latest: round(latest.value, 2),
      changePct1d: pct(obs[1]),
      changePct20d: pct(obs[20]),
      asOf: latest.date,
    };
  } catch (err) {
    log.error(`FRED ${US_10Y.series} failed (${err}) — falling back to Yahoo`);
    return fetchGlobalMetric({
      id: US_10Y.id,
      symbol: US_10Y.fallbackSymbol,
      label: US_10Y.label,
      unit: "%",
      decimals: 2,
    });
  }
}

// ---------------------------------------------------------------------------
// SJC domestic gold + premium over the world price
// ---------------------------------------------------------------------------

async function fetchGold(fx: VnFxRate | null, worldGold: VnGlobalMetric | undefined): Promise<VnGold | null> {
  try {
    const board = await fetchGoldBoard();
    if (!board) throw new Error("no SJC bar row in response");

    // The premium is only comparable once the domestic tael price is expressed
    // in the world market's unit and currency.
    const sellUsdPerOz = fx && fx.sell > 0 ? round(board.sell / OZ_PER_TAEL / fx.sell, 2) : null;
    const world = worldGold?.latest ?? null;
    const premiumPct =
      sellUsdPerOz !== null && world !== null && world > 0
        ? round((sellUsdPerOz / world - 1) * 100, 1)
        : null;

    log.info(
      `SJC gold sell ${board.sell.toLocaleString("en-US")} VND/tael` +
        (premiumPct === null ? "" : ` → $${sellUsdPerOz}/oz, premium ${premiumPct}%`),
    );
    return {
      buyVndPerTael: board.buy,
      sellVndPerTael: board.sell,
      sellUsdPerOz,
      worldUsdPerOz: world,
      premiumPct,
      asOf: board.asOf,
    };
  } catch (err) {
    log.error(`SJC gold failed: ${err}`);
    return null;
  }
}

// ---------------------------------------------------------------------------
// World Bank annual series
// ---------------------------------------------------------------------------

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
    const [latest, prior] = await fetchIndicator("VNM", spec.indicator);
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
    log.error(`World Bank ${spec.indicator} failed: ${err}`);
    return base;
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export async function fetchVnMacroData(now = new Date()): Promise<VnMacroData> {
  log.info("Fetching VCB FX + global drivers + FRED + SJC gold + World Bank...");

  const [fx, yahooSeries, us10y, annual] = await Promise.all([
    fetchFx(now).catch((err) => {
      log.error(`FX failed: ${err}`);
      return null;
    }),
    Promise.all(GLOBAL_SERIES.map(fetchGlobalMetric)),
    fetchUs10y(),
    Promise.all(ANNUAL_SERIES.map(fetchAnnualMetric)),
  ]);

  // Keep the catalog's display order: DXY, then the US 10Y, then the rest.
  const global = [yahooSeries[0], us10y, ...yahooSeries.slice(1)].filter(
    (m): m is VnGlobalMetric => m !== undefined,
  );

  // The premium needs both the VCB rate and the world price, so gold resolves
  // after them rather than alongside.
  const gold = await fetchGold(
    fx,
    global.find((m) => m.id === "gold"),
  );

  const withData = global.filter((m) => m.latest !== null).length;
  log.info(
    `${withData}/${global.length} global series, fx ${fx ? "ok" : "missing"}, ` +
      `gold ${gold ? "ok" : "missing"}`,
  );

  return { fx, global, annual, gold, fetchSuccess: fx !== null || withData > 0 };
}
