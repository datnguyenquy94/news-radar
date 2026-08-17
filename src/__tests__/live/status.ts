/**
 * Status recording and the summary table printed by every live probe, provider
 * and feed alike.
 *
 * A red vitest run names the first broken assertion, not the state of every
 * source — and with ~20 upstream hosts, "which of them are up right now" is the
 * question actually being asked. `probe` wraps each call so the result is
 * recorded either way, and the table is printed once when the whole run
 * finishes. Both layers share it on purpose: a provider row that is green next
 * to a red feed row on the same host says the transport is fine and the feed's
 * composition or filtering is what broke.
 *
 * Results go through a JSONL file rather than a module-level array because
 * vitest runs each test file in its own worker: one module per file means one
 * module instance per source, so nothing shared in memory would survive. The
 * file is truncated in `globalSetup` and read back in `teardown`
 * (`global-status.ts`), which is the only point where every worker is done.
 *
 * The table goes to **stderr**: stdout is a data channel in this repo
 * (`pnpm inspect --json`), and vitest leaves direct stream writes alone while
 * it buffers and re-tags `console.*` output.
 */

import { appendFileSync, existsSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

export type ProbeStatus = "ok" | "fail" | "skip";

export interface ProbeResult {
  /** Source module under test, e.g. `providers/ssi.ts` or `feeds/ai/hn.ts`. */
  module: string;
  /** The exact call that was probed, e.g. `fetchExchangeBoard("hose")`. */
  target: string;
  status: ProbeStatus;
  /** One line describing what came back, or why it failed / was skipped. */
  detail: string;
  ms: number;
}

/** Overridable so a second concurrent run does not read the first one's rows. */
const STATUS_FILE = process.env["LIVE_STATUS_FILE"] ?? join(tmpdir(), "agents-radar-live-status.jsonl");

const oneLine = (value: unknown, max = 88): string => {
  const text = String(value instanceof Error ? value.message : value)
    .replace(/\s+/g, " ")
    .trim();
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
};

/**
 * Append one row. Workers write concurrently; each row is a single short line,
 * which `O_APPEND` keeps intact.
 */
function record(result: ProbeResult): void {
  appendFileSync(STATUS_FILE, `${JSON.stringify(result)}\n`);
}

/**
 * Run one provider probe, record its outcome, and re-throw on failure so the
 * test still goes red. `run` performs the call *and* its assertions, and
 * returns a one-line summary of what came back for the table.
 */
export async function probe(module: string, target: string, run: () => Promise<string>): Promise<void> {
  const started = Date.now();
  try {
    const detail = await run();
    record({ module, target, status: "ok", detail: oneLine(detail), ms: Date.now() - started });
  } catch (err) {
    record({ module, target, status: "fail", detail: oneLine(err), ms: Date.now() - started });
    throw err;
  }
}

/** Record a source the run could not reach — a missing credential, usually. */
export function recordSkip(module: string, target: string, reason: string): void {
  record({ module, target, status: "skip", detail: oneLine(reason), ms: 0 });
}

/** Drop rows from a previous run. Called from `globalSetup`. */
export function resetProviderStatus(): void {
  rmSync(STATUS_FILE, { force: true });
}

/**
 * Everything recorded this run, one row per module+target.
 *
 * A retried test (`LIVE_OPTS` retries twice) appends once per attempt, so the
 * last row for a key wins — a source that failed then succeeded reads as ok.
 */
export function probeResults(): ProbeResult[] {
  if (!existsSync(STATUS_FILE)) return [];
  const byKey = new Map<string, ProbeResult>();
  for (const line of readFileSync(STATUS_FILE, "utf8").split("\n")) {
    if (!line.trim()) continue;
    const row = JSON.parse(line) as ProbeResult;
    byKey.set(`${row.module} ${row.target}`, row);
  }
  // Workers finish in arrival order, which changes run to run; sort so the
  // table reads the same way every time — and so the `feeds/` rows land
  // together above the `providers/` ones.
  return [...byKey.values()].sort((a, b) => (a.module + a.target).localeCompare(b.module + b.target));
}

const MARK: Record<ProbeStatus, string> = { ok: "✔ OK  ", fail: "✘ FAIL", skip: "– SKIP" };

/** Print the status table. Called once from `teardown`, after every worker. */
export function printProviderStatus(title = "LIVE SOURCE STATUS"): void {
  const rows = probeResults();
  if (rows.length === 0) return;

  const width = (pick: (r: ProbeResult) => string): number =>
    rows.reduce((max, r) => Math.max(max, pick(r).length), 0);
  const moduleCol = width((r) => r.module);
  const targetCol = width((r) => r.target);

  const counts = rows.reduce<Record<ProbeStatus, number>>(
    (acc, r) => ({ ...acc, [r.status]: acc[r.status] + 1 }),
    { ok: 0, fail: 0, skip: 0 },
  );
  const header = `${title} — ${counts.ok} ok · ${counts.fail} failed · ${counts.skip} skipped`;

  const lines = rows.map((r) => {
    const took = r.status === "skip" ? "" : `${(r.ms / 1000).toFixed(1)}s`;
    return [
      MARK[r.status],
      r.module.padEnd(moduleCol),
      r.target.padEnd(targetCol),
      took.padStart(6),
      r.detail,
    ].join("  ");
  });

  const rule = "─".repeat(Math.max(header.length, ...lines.map((l) => l.length)));
  process.stderr.write(`\n${rule}\n${header}\n${rule}\n${lines.join("\n")}\n${rule}\n`);
}
