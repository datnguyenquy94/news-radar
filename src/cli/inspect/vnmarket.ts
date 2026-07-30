/**
 * Probe for the pure part of `src/domains/vietnam/vnmarket.ts`.
 *
 * `aggregateBoard` is where breadth, turnover and foreign flow are actually
 * computed — the SSI fetch around it is trivial by comparison. Running it
 * against a saved board is the only way to check the fold without waiting for
 * an undocumented endpoint to answer, and the only way to re-check it against a
 * session whose numbers are already known.
 */

import fs from "node:fs";
import { ProbeError, kv, sample, type Target } from "./kit.ts";
import type { aggregateBoard } from "../../domains/vietnam/vnmarket.ts";

/** The row type `aggregateBoard` accepts — `SsiRow` is not exported. */
type BoardRow = Parameters<typeof aggregateBoard>[0][number];

/** A saved SSI response (`{ data: [...] }`) or a bare row array. */
function rowsFromPayload(payload: unknown, origin: string): BoardRow[] {
  if (Array.isArray(payload)) return payload as BoardRow[];
  const data = (payload as { data?: unknown } | null)?.data;
  if (Array.isArray(data)) return data as BoardRow[];
  throw new ProbeError(`${origin} is neither an array of rows nor an object with a "data" array`);
}

export const vnmarketAggregateTarget: Target = {
  name: "vnmarket:aggregate",
  summary: "aggregateBoard() over a saved SSI board — breadth / turnover / foreign flow, no network",
  options: [
    {
      name: "file",
      arg: "path",
      desc: "saved SSI board JSON ({data:[...]} or [...]); fixture: src/cli/inspect/fixtures/ssi-board.json",
    },
    { name: "top", arg: "n", desc: "how many foreign buy/sell rows to print (default 5)" },
  ],
  async run(args) {
    const file = args.requireStr("file");
    if (!fs.existsSync(file)) throw new ProbeError(`no such file: ${file}`);

    const payload: unknown = JSON.parse(fs.readFileSync(file, "utf-8"));
    const rows = rowsFromPayload(payload, file);
    if (rows.length === 0) throw new ProbeError(`${file} contains no board rows`);

    const { aggregateBoard: aggregate } = await import("../../domains/vietnam/vnmarket.ts");
    const agg = aggregate(rows);
    const top = args.num("top", 5);

    return {
      json: { file, rows: rows.length, ...agg },
      lines: [
        kv("file", file),
        kv("rows", rows.length),
        kv("tradingDate", agg.tradingDate || "(none)"),
        kv("traded", agg.traded),
        kv(
          "breadth",
          `${agg.breadth.advancers} up / ${agg.breadth.decliners} down / ${agg.breadth.unchanged} flat ` +
            `(ceiling ${agg.breadth.ceiling}, floor ${agg.breadth.floor})`,
        ),
        kv("turnoverVndBn", agg.turnoverVndBn),
        kv(
          "foreign",
          `buy ${agg.foreign.buyVndBn}bn / sell ${agg.foreign.sellVndBn}bn / net ${agg.foreign.netVndBn}bn`,
        ),
        "topBuys:",
        ...sample(agg.foreign.topBuys, top, (t) => `${t.symbol} +${t.netVndBn}bn (${t.name})`),
        "topSells:",
        ...sample(agg.foreign.topSells, top, (t) => `${t.symbol} ${t.netVndBn}bn (${t.name})`),
      ],
      // The pipeline drops the whole block when nothing traded; surface that
      // here as a failure rather than a table of zeroes.
      ...(agg.traded === 0 ? { failure: "no traded rows — board has reset or the fixture is pre-open" } : {}),
    };
  },
};
