/**
 * Macro-economic indicators from FRED (Federal Reserve Economic Data,
 * Federal Reserve Bank of St. Louis) — https://fred.stlouisfed.org.
 *
 * A single official, free source covers almost every macro metric we track
 * (policy rate, balance sheet, VIX, yields, credit spread, oil, jobs,
 * inflation, sentiment). Two access paths:
 *
 *   1. JSON API (preferred) — needs a free key in FRED_API_KEY.
 *   2. Keyless CSV fallback — https://fred.stlouisfed.org/graph/fredgraph.csv,
 *      used automatically when FRED_API_KEY is unset.
 *
 * Both paths are normalized to a descending array of { date, value } and share
 * the same per-series transform (level / YoY % / month-over-month change).
 */

import type { Lang } from "../../core/i18n/index.ts";

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
    label: { zh: "联邦基金利率", en: "Fed Funds Rate" },
    unit: "%",
    transform: "level",
    decimals: 2,
  },
  {
    id: "fed-balance-sheet",
    series: "WALCL",
    group: "liquidity",
    label: { zh: "美联储资产负债表", en: "Fed Balance Sheet" },
    unit: "$T",
    transform: "level",
    decimals: 2,
    scale: 1e-6,
  },
  {
    id: "vix",
    series: "VIXCLS",
    group: "liquidity",
    label: { zh: "VIX 波动率指数", en: "VIX Volatility Index" },
    unit: "",
    transform: "level",
    decimals: 2,
  },
  // ── Yields & credit ──
  {
    id: "treasury-10y",
    series: "DGS10",
    group: "yields_credit",
    label: { zh: "10 年期美债收益率", en: "10Y Treasury Yield" },
    unit: "%",
    transform: "level",
    decimals: 2,
  },
  {
    id: "yield-spread-10y-2y",
    series: "T10Y2Y",
    group: "yields_credit",
    label: { zh: "10Y-2Y 利差", en: "10Y-2Y Spread" },
    unit: "%",
    transform: "level",
    decimals: 2,
  },
  {
    id: "hy-credit-spread",
    series: "BAMLH0A0HYM2",
    group: "yields_credit",
    label: { zh: "高收益债信用利差 (OAS)", en: "High-Yield Credit Spread (OAS)" },
    unit: "%",
    transform: "level",
    decimals: 2,
  },
  {
    id: "oil-wti",
    series: "DCOILWTICO",
    group: "yields_credit",
    label: { zh: "WTI 原油", en: "WTI Crude Oil" },
    unit: "$/bbl",
    transform: "level",
    decimals: 2,
  },
  {
    id: "oil-brent",
    series: "DCOILBRENTEU",
    group: "yields_credit",
    label: { zh: "布伦特原油", en: "Brent Crude Oil" },
    unit: "$/bbl",
    transform: "level",
    decimals: 2,
  },
  // ── Economic health & inflation ──
  {
    id: "unemployment",
    series: "UNRATE",
    group: "econ_inflation",
    label: { zh: "失业率", en: "Unemployment Rate" },
    unit: "%",
    transform: "level",
    decimals: 1,
  },
  {
    id: "jobless-claims",
    series: "ICSA",
    group: "econ_inflation",
    label: { zh: "初请失业金人数", en: "Initial Jobless Claims" },
    unit: "",
    transform: "level",
    decimals: 0,
  },
  {
    id: "nonfarm-payrolls",
    series: "PAYEMS",
    group: "econ_inflation",
    label: { zh: "非农就业 (环比新增)", en: "Nonfarm Payrolls (MoM chg)" },
    unit: "K",
    transform: "mom_change",
    decimals: 0,
  },
  {
    id: "cpi",
    series: "CPIAUCSL",
    group: "econ_inflation",
    label: { zh: "CPI", en: "CPI" },
    unit: "% YoY",
    transform: "yoy",
    decimals: 1,
  },
  {
    id: "core-cpi",
    series: "CPILFESL",
    group: "econ_inflation",
    label: { zh: "核心 CPI", en: "Core CPI" },
    unit: "% YoY",
    transform: "yoy",
    decimals: 1,
  },
  {
    id: "core-pce",
    series: "PCEPILFE",
    group: "econ_inflation",
    label: { zh: "核心 PCE", en: "Core PCE" },
    unit: "% YoY",
    transform: "yoy",
    decimals: 1,
  },
  {
    id: "ppi",
    series: "PPIFIS",
    group: "econ_inflation",
    label: { zh: "PPI (最终需求)", en: "PPI (Final Demand)" },
    unit: "% YoY",
    transform: "yoy",
    decimals: 1,
  },
  {
    id: "consumer-sentiment",
    series: "UMCSENT",
    group: "econ_inflation",
    label: { zh: "密歇根消费者信心 (代理指标)", en: "UMich Consumer Sentiment (proxy)" },
    unit: "",
    transform: "level",
    decimals: 1,
  },
];

// ---------------------------------------------------------------------------
// Fetch helpers
// ---------------------------------------------------------------------------

interface Observation {
  date: string;
  value: number;
}

const UA = { "User-Agent": "agents-radar/1.0" };
const FRED_API = "https://api.stlouisfed.org/fred/series/observations";
const FRED_CSV = "https://fred.stlouisfed.org/graph/fredgraph.csv";

/** Descending window of observations (newest first), missing values dropped. */
async function fetchObservations(series: string, apiKey: string | undefined): Promise<Observation[]> {
  if (apiKey) {
    const url =
      `${FRED_API}?series_id=${series}&api_key=${apiKey}` + `&file_type=json&sort_order=desc&limit=14`;
    const resp = await fetch(url, { headers: UA });
    if (!resp.ok) throw new Error(`FRED ${series}: HTTP ${resp.status}`);
    const json = (await resp.json()) as { observations?: { date: string; value: string }[] };
    return (json.observations ?? [])
      .filter((o) => o.value !== "." && o.value !== "")
      .map((o) => ({ date: o.date, value: Number(o.value) }))
      .filter((o) => Number.isFinite(o.value));
  }

  // Keyless CSV fallback. Bound the window (~2.2 years back) so YoY has enough
  // monthly points without pulling decades of daily history.
  const cosd = new Date(Date.now() - 800 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const resp = await fetch(`${FRED_CSV}?id=${series}&cosd=${cosd}`, { headers: UA });
  if (!resp.ok) throw new Error(`FRED CSV ${series}: HTTP ${resp.status}`);
  const csv = await resp.text();
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
// Public API
// ---------------------------------------------------------------------------

export async function fetchFredData(): Promise<FredData> {
  const apiKey = process.env["FRED_API_KEY"];
  console.log(`  [fred] Fetching ${FRED_SERIES.length} series via ${apiKey ? "JSON API" : "keyless CSV"}...`);

  const metrics = await Promise.all(
    FRED_SERIES.map(async (spec) => {
      try {
        const obs = await fetchObservations(spec.series, apiKey);
        return computeMetric(spec, obs);
      } catch (err) {
        console.error(`  [fred] ${spec.series} failed: ${err}`);
        return computeMetric(spec, []);
      }
    }),
  );

  const withData = metrics.filter((m) => m.latest !== null).length;
  console.log(`  [fred] ${withData}/${FRED_SERIES.length} series returned data`);
  return { metrics, fetchSuccess: withData > 0 };
}
