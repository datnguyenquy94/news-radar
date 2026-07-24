/**
 * FINRA margin statistics — retail leverage (debit balances in customers'
 * securities margin accounts), published monthly by FINRA (the broker-dealer
 * SRO) at:
 *   https://www.finra.org/investors/learn-to-invest/advanced-investing/margin-statistics
 *
 * FINRA offers no official JSON API for this table, so we scrape the HTML
 * defensively: any parsing miss returns { fetchSuccess: false } and the macro
 * report proceeds without the margin row (it is supplementary to FRED).
 *
 * Values are reported in millions of dollars; we expose both the raw millions
 * and a billions figure for display.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface MarginObservation {
  period: string; // e.g. "March 2025" — copied verbatim from the source
  debitMillions: number; // debit balances, in $ millions (as reported)
}

export interface FinraData {
  latest: MarginObservation | null;
  prior: MarginObservation | null;
  changePct: number | null; // month-over-month % change in debit balances
  fetchSuccess: boolean;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const FINRA_MARGIN_URL =
  "https://www.finra.org/investors/learn-to-invest/advanced-investing/margin-statistics";

const UA = { "User-Agent": "agents-radar/1.0" };

// A period label such as "March 2025", "Mar-25", "2025-03", or "3/2025".
const PERIOD_RE =
  /^(?:(?:january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[\s-]*\d{2,4}|\d{4}[-/]\d{1,2}|\d{1,2}[-/]\d{2,4})$/i;

// ---------------------------------------------------------------------------
// HTML parsing helpers (tag-stripping, no DOM library)
// ---------------------------------------------------------------------------

function stripTags(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function cellsOf(rowHtml: string): string[] {
  return [...rowHtml.matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)].map((m) => stripTags(m[1] ?? ""));
}

function parseMoney(cell: string): number | null {
  const cleaned = cell.replace(/[$,\s]/g, "");
  if (!/^\d+(?:\.\d+)?$/.test(cleaned)) return null;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

/**
 * Locate the margin table, find the "Debit Balances" column, and return the two
 * most recent { period, debitMillions } rows. Returns null on any structural
 * miss so the caller can degrade gracefully.
 */
export function parseMarginTable(html: string): MarginObservation[] | null {
  const tables = [...html.matchAll(/<table[\s\S]*?<\/table>/gi)].map((m) => m[0]);
  const table = tables.find((t) => /debit balances/i.test(t));
  if (!table) return null;

  const rows = [...table.matchAll(/<tr[\s\S]*?<\/tr>/gi)].map((m) => m[0]);
  if (rows.length === 0) return null;

  // Find the debit-balances column index from the first row that mentions it.
  const headerRow = rows.find((r) => /debit balances/i.test(r));
  let debitCol = -1;
  if (headerRow) {
    const headers = cellsOf(headerRow);
    debitCol = headers.findIndex((h) => /debit balances/i.test(h));
  }

  const observations: MarginObservation[] = [];
  for (const row of rows) {
    const cells = cellsOf(row);
    if (cells.length < 2) continue;
    const period = cells[0]?.trim() ?? "";
    if (!PERIOD_RE.test(period)) continue;

    // Prefer the identified debit column; otherwise take the first numeric cell.
    let debit: number | null = debitCol >= 0 ? parseMoney(cells[debitCol] ?? "") : null;
    if (debit === null) {
      for (let i = 1; i < cells.length; i++) {
        debit = parseMoney(cells[i] ?? "");
        if (debit !== null) break;
      }
    }
    // Margin debit balances are hundreds of thousands of $ millions; guard
    // against picking up small unrelated numbers.
    if (debit !== null && debit >= 100_000) observations.push({ period, debitMillions: debit });
  }

  return observations.length > 0 ? observations : null;
}

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------

export async function fetchFinraMargin(): Promise<FinraData> {
  const empty: FinraData = { latest: null, prior: null, changePct: null, fetchSuccess: false };
  try {
    const resp = await fetch(FINRA_MARGIN_URL, { headers: UA });
    if (!resp.ok) {
      console.error(`  [finra] HTTP ${resp.status}`);
      return empty;
    }
    const observations = parseMarginTable(await resp.text());
    if (!observations) {
      console.error("  [finra] could not locate margin table");
      return empty;
    }

    const latest = observations[0] ?? null;
    const prior = observations[1] ?? null;
    const changePct =
      latest && prior && prior.debitMillions !== 0
        ? Math.round(((latest.debitMillions - prior.debitMillions) / prior.debitMillions) * 1000) / 10
        : null;

    console.log(`  [finra] latest ${latest?.period}: $${latest?.debitMillions}M`);
    return { latest, prior, changePct, fetchSuccess: latest !== null };
  } catch (err) {
    console.error(`  [finra] fetch failed: ${err}`);
    return empty;
  }
}
