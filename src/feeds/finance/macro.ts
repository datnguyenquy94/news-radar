/**
 * Macro market dashboard — payload for the `fin-macro` report.
 *
 * Two publishers, one report: FRED carries the 16 headline series and FINRA the
 * monthly margin-debt figure. The two are *not* equal partners — FRED is the
 * spine and FINRA is supplementary, so `fetchSuccess` tracks FRED alone. A FINRA
 * outage drops one row; a FRED outage means there is no dashboard to write.
 *
 * The series catalog and its per-series transform live here rather than in the
 * provider: which indicators the dashboard tracks, and whether each is shown as
 * a level, a YoY percentage or a month-over-month change, is a property of the
 * report. Catalog mirrors .agent/specs/financial_data_sources.md.
 */

import { fetchObservations, type Observation } from "../../providers/fred.ts";
import { fetchMarginObservations, type MarginObservation } from "../../providers/finra.ts";
import type { Lang } from "../../core/i18n/index.ts";
import { createLogger } from "../../core/logger.ts";

const log = createLogger("macro");

export type { MarginObservation, Observation };

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type FredGroup = "liquidity" | "yields_credit" | "econ_inflation";

/** How to derive the headline number from a series' raw observations. */
type FredTransform = "level" | "yoy" | "mom_change";

interface FredSeriesSpec {
  id: string; // our slug (used as a stable key)
  series: string; // FRED series id
  group: FredGroup;
  label: Record<Lang, string>;
  unit: string; // display unit, appended after the number
  transform: FredTransform;
  decimals: number;
  scale?: number; // multiply raw value before display (e.g. millions -> trillions)
}

export interface FredMetric {
  id: string;
  series: string;
  group: FredGroup;
  label: Record<Lang, string>;
  unit: string;
  decimals: number; // display precision
  latest: number | null;
  prior: number | null;
  change: number | null; // latest - prior, in display units
  asOf: string; // ISO date of the latest observation, or "" if unavailable
}

export interface FredData {
  metrics: FredMetric[];
  fetchSuccess: boolean;
}

// ---------------------------------------------------------------------------
// Series catalog — mirrors .agent/specs/financial_data_sources.md
// ---------------------------------------------------------------------------

const FRED_SERIES: FredSeriesSpec[] = [
  // ── Central bank & liquidity ──
  {
    id: "fed-funds",
    series: "DFF",
    group: "liquidity",
    label: { vi: "Lãi suất Fed Funds", en: "Fed Funds Rate" },
    unit: "%",
    transform: "level",
    decimals: 2,
  },
  {
    id: "fed-balance-sheet",
    series: "WALCL",
    group: "liquidity",
    label: { vi: "Bảng cân đối kế toán Fed", en: "Fed Balance Sheet" },
    unit: "$T",
    transform: "level",
    decimals: 2,
    scale: 1e-6,
  },
  {
    id: "vix",
    series: "VIXCLS",
    group: "liquidity",
    label: { vi: "Chỉ số biến động VIX", en: "VIX Volatility Index" },
    unit: "",
    transform: "level",
    decimals: 2,
  },
  // ── Yields & credit ──
  {
    id: "treasury-10y",
    series: "DGS10",
    group: "yields_credit",
    label: { vi: "Lợi suất trái phiếu Mỹ 10 năm", en: "10Y Treasury Yield" },
    unit: "%",
    transform: "level",
    decimals: 2,
  },
  {
    id: "yield-spread-10y-2y",
    series: "T10Y2Y",
    group: "yields_credit",
    label: { vi: "Chênh lệch lợi suất 10Y-2Y", en: "10Y-2Y Spread" },
    unit: "%",
    transform: "level",
    decimals: 2,
  },
  {
    id: "hy-credit-spread",
    series: "BAMLH0A0HYM2",
    group: "yields_credit",
    label: { vi: "Chênh lệch tín dụng trái phiếu lợi suất cao (OAS)", en: "High-Yield Credit Spread (OAS)" },
    unit: "%",
    transform: "level",
    decimals: 2,
  },
  {
    id: "oil-wti",
    series: "DCOILWTICO",
    group: "yields_credit",
    label: { vi: "Dầu thô WTI", en: "WTI Crude Oil" },
    unit: "$/bbl",
    transform: "level",
    decimals: 2,
  },
  {
    id: "oil-brent",
    series: "DCOILBRENTEU",
    group: "yields_credit",
    label: { vi: "Dầu thô Brent", en: "Brent Crude Oil" },
    unit: "$/bbl",
    transform: "level",
    decimals: 2,
  },
  // ── Economic health & inflation ──
  {
    id: "unemployment",
    series: "UNRATE",
    group: "econ_inflation",
    label: { vi: "Tỷ lệ thất nghiệp", en: "Unemployment Rate" },
    unit: "%",
    transform: "level",
    decimals: 1,
  },
  {
    id: "jobless-claims",
    series: "ICSA",
    group: "econ_inflation",
    label: { vi: "Đơn xin trợ cấp thất nghiệp lần đầu", en: "Initial Jobless Claims" },
    unit: "",
    transform: "level",
    decimals: 0,
  },
  {
    id: "nonfarm-payrolls",
    series: "PAYEMS",
    group: "econ_inflation",
    label: {
      vi: "Bảng lương phi nông nghiệp (thay đổi so với tháng trước)",
      en: "Nonfarm Payrolls (MoM chg)",
    },
    unit: "K",
    transform: "mom_change",
    decimals: 0,
  },
  {
    id: "cpi",
    series: "CPIAUCSL",
    group: "econ_inflation",
    label: { vi: "CPI", en: "CPI" },
    unit: "% YoY",
    transform: "yoy",
    decimals: 1,
  },
  {
    id: "core-cpi",
    series: "CPILFESL",
    group: "econ_inflation",
    label: { vi: "CPI lõi", en: "Core CPI" },
    unit: "% YoY",
    transform: "yoy",
    decimals: 1,
  },
  {
    id: "core-pce",
    series: "PCEPILFE",
    group: "econ_inflation",
    label: { vi: "PCE lõi", en: "Core PCE" },
    unit: "% YoY",
    transform: "yoy",
    decimals: 1,
  },
  {
    id: "ppi",
    series: "PPIFIS",
    group: "econ_inflation",
    label: { vi: "PPI (nhu cầu cuối cùng)", en: "PPI (Final Demand)" },
    unit: "% YoY",
    transform: "yoy",
    decimals: 1,
  },
  {
    id: "consumer-sentiment",
    series: "UMCSENT",
    group: "econ_inflation",
    label: {
      vi: "Niềm tin người tiêu dùng Michigan (chỉ số đại diện)",
      en: "UMich Consumer Sentiment (proxy)",
    },
    unit: "",
    transform: "level",
    decimals: 1,
  },
];

// ---------------------------------------------------------------------------
// Transforms
// ---------------------------------------------------------------------------

function round(n: number, decimals: number): number {
  const f = 10 ** decimals;
  return Math.round(n * f) / f;
}

/** Reduce a descending observation window to a headline metric. */
function computeMetric(spec: FredSeriesSpec, obs: Observation[]): FredMetric {
  const base: FredMetric = {
    id: spec.id,
    series: spec.series,
    group: spec.group,
    label: spec.label,
    unit: spec.unit,
    decimals: spec.decimals,
    latest: null,
    prior: null,
    change: null,
    asOf: "",
  };
  if (obs.length === 0) return base;

  const scale = spec.scale ?? 1;
  const asOf = obs[0]!.date;

  if (spec.transform === "level") {
    const latest = round(obs[0]!.value * scale, spec.decimals);
    const prior = obs[1] ? round(obs[1].value * scale, spec.decimals) : null;
    return {
      ...base,
      latest,
      prior,
      change: prior === null ? null : round(latest - prior, spec.decimals),
      asOf,
    };
  }

  if (spec.transform === "mom_change") {
    if (obs.length < 2) return { ...base, asOf };
    const latest = round((obs[0]!.value - obs[1]!.value) * scale, spec.decimals);
    const prior = obs[2] ? round((obs[1]!.value - obs[2].value) * scale, spec.decimals) : null;
    return {
      ...base,
      latest,
      prior,
      change: prior === null ? null : round(latest - prior, spec.decimals),
      asOf,
    };
  }

  // yoy — compare against the observation ~12 periods back (monthly series)
  const yoy = (nowIdx: number): number | null => {
    const now = obs[nowIdx];
    const yearAgo = obs[nowIdx + 12];
    if (!now || !yearAgo || yearAgo.value === 0) return null;
    return round(((now.value - yearAgo.value) / yearAgo.value) * 100, spec.decimals);
  };
  const latest = yoy(0);
  const prior = yoy(1);
  return {
    ...base,
    latest,
    prior,
    change: latest === null || prior === null ? null : round(latest - prior, spec.decimals),
    asOf,
  };
}

// ---------------------------------------------------------------------------
// FINRA margin statistics
// ---------------------------------------------------------------------------

export interface FinraData {
  latest: MarginObservation | null;
  prior: MarginObservation | null;
  changePct: number | null; // month-over-month % change in debit balances
  fetchSuccess: boolean;
}

export async function fetchFinraMargin(): Promise<FinraData> {
  const empty: FinraData = { latest: null, prior: null, changePct: null, fetchSuccess: false };
  try {
    const observations = await fetchMarginObservations();
    if (!observations) {
      log.error("[finra] could not locate margin table");
      return empty;
    }

    const latest = observations[0] ?? null;
    const prior = observations[1] ?? null;
    const changePct =
      latest && prior && prior.debitMillions !== 0
        ? Math.round(((latest.debitMillions - prior.debitMillions) / prior.debitMillions) * 1000) / 10
        : null;

    log.info(`[finra] latest ${latest?.period}: $${latest?.debitMillions}M`);
    return { latest, prior, changePct, fetchSuccess: latest !== null };
  } catch (err) {
    log.error(`[finra] fetch failed: ${err}`);
    return empty;
  }
}

// ---------------------------------------------------------------------------
// FRED series
// ---------------------------------------------------------------------------

export async function fetchFredData(): Promise<FredData> {
  const apiKey = process.env["FRED_API_KEY"];
  log.info(`[fred] Fetching ${FRED_SERIES.length} series via ${apiKey ? "JSON API" : "keyless CSV"}...`);

  const metrics = await Promise.all(
    FRED_SERIES.map(async (spec) => {
      try {
        return computeMetric(spec, await fetchObservations(spec.series, apiKey));
      } catch (err) {
        // One dead series is a blank row, not a dead dashboard.
        log.error(`[fred] ${spec.series} failed: ${err}`);
        return computeMetric(spec, []);
      }
    }),
  );

  const withData = metrics.filter((m) => m.latest !== null).length;
  log.info(`[fred] ${withData}/${FRED_SERIES.length} series returned data`);
  return { metrics, fetchSuccess: withData > 0 };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export interface MacroData {
  fred: FredData;
  finra: FinraData;
  /** Mirrors FRED alone: FINRA is supplementary and never gates the report. */
  fetchSuccess: boolean;
}

export async function fetchMacroData(): Promise<MacroData> {
  const [fred, finra] = await Promise.all([fetchFredData(), fetchFinraMargin()]);
  return { fred, finra, fetchSuccess: fred.fetchSuccess };
}
