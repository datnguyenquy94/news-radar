/**
 * FINRA margin statistics — retail leverage (debit balances in customers'
 * securities margin accounts), published monthly at:
 *   https://www.finra.org/investors/learn-to-invest/advanced-investing/margin-statistics
 *
 * FINRA offers no official JSON API for this table, so the HTML is scraped
 * defensively: any structural miss returns `null` rather than a wrong number,
 * and the caller drops the margin row.
 *
 * Values are reported in millions of dollars.
 */

import { fetchText } from "../core/http.ts";

export interface MarginObservation {
  period: string; // e.g. "March 2025" — copied verbatim from the source
  debitMillions: number; // debit balances, in $ millions (as reported)
}

const FINRA_MARGIN_URL =
  "https://www.finra.org/investors/learn-to-invest/advanced-investing/margin-statistics";

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
 * Locate the margin table, find the "Debit Balances" column, and return the
 * `{ period, debitMillions }` rows newest first. Returns null on any structural
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

/** Throws `HttpError` on a fetch failure; returns null when the table moved. */
export async function fetchMarginObservations(): Promise<MarginObservation[] | null> {
  return parseMarginTable(await fetchText(FINRA_MARGIN_URL));
}
