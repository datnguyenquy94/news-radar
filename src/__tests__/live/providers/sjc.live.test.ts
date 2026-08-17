/**
 * Live source contract — `providers/sjc.ts` (domestic gold board).
 *
 * SJC's WAF fingerprints the TLS ClientHello, not the headers: Node's plain
 * `fetch` gets 403 with any headers while curl gets 200, which is why this goes
 * through `fetchJsonBrowserTls`. A null here means the WAF caught us or the
 * payload changed — the provider never throws on a structural miss.
 */

import { describe, expect, it } from "vitest";

import { fetchGoldBoard } from "../../../providers/sjc.ts";
import { LIVE_OPTS, expectPopulated } from "../contract.ts";
import { probe } from "../status.ts";

describe("live provider: sjc", () => {
  it("fetchGoldBoard gets past the TLS-fingerprinting WAF", LIVE_OPTS, async () => {
    await probe("providers/sjc.ts", "fetchGoldBoard()", async () => {
      const board = await fetchGoldBoard();

      expect(board, "sjc returned null — WAF block or payload change").not.toBeNull();
      expectPopulated([board!], { buy: "number", sell: "number", asOf: "string" }, "sjc board");
      expect(board!.sell, "sjc sell is not a plausible VND/tael price").toBeGreaterThan(1_000_000);
      expect(board!.sell, "sjc sell/buy are inverted").toBeGreaterThanOrEqual(board!.buy);

      return `${board!.sell} VND/tael sell · asOf ${board!.asOf}`;
    });
  });
});
