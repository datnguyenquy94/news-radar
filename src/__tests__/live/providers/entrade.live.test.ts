/** Live source contract — `providers/entrade.ts` (DNSE daily bars). */

import { describe, it, expect } from "vitest";

import { BAR_WINDOW_SEC, fetchBars } from "../../../providers/entrade.ts";
import { LIVE_OPTS, expectNonEmpty } from "../contract.ts";
import { probe } from "../status.ts";

describe("live provider: entrade", () => {
  it("fetchBars returns index and derivative series", LIVE_OPTS, async () => {
    await probe("providers/entrade.ts", 'fetchBars("index" / "derivative")', async () => {
      // A quarter of the pipeline's window: enough bars to prove the series is
      // alive without pulling 120 days twice.
      const window = Math.floor(BAR_WINDOW_SEC / 4);
      const [index, futures] = await Promise.all([
        fetchBars("index", "VNINDEX", window),
        fetchBars("derivative", "VN30F1M", window),
      ]);

      expectNonEmpty(index.c ?? [], "entrade VNINDEX closes");
      expectNonEmpty(index.t ?? [], "entrade VNINDEX timestamps");
      expect(index.c!.length, "entrade VNINDEX: closes and timestamps disagree").toBe(index.t!.length);

      const last = index.c![index.c!.length - 1]!;
      expect(last, "entrade VNINDEX close is not a plausible index level").toBeGreaterThan(100);

      // The derivative leg is a separate path; a renamed VN30F1M symbol shows
      // up as an empty series, which `fetchBars` turns into a throw.
      expectNonEmpty(futures.c ?? [], "entrade VN30F1M closes");

      return `VNINDEX ${index.c!.length} bars @ ${last} · VN30F1M ${futures.c!.length} bars`;
    });
  });
});
