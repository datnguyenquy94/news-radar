import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchFredData } from "../domains/finance/fred.ts";

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

/** Build a descending observation list: [newest, ...older]. */
function obs(values: number[], startMonth = 1): { date: string; value: string }[] {
  return values.map((v, i) => {
    const m = String(((startMonth - 1 - i + 1200) % 12) + 1).padStart(2, "0");
    return { date: `2025-${m}-01`, value: String(v) };
  });
}

describe("fetchFredData (JSON API path)", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
  });

  it("computes level, mom_change, and yoy transforms", async () => {
    vi.stubEnv("FRED_API_KEY", "test-key");

    vi.spyOn(globalThis, "fetch").mockImplementation(async (input) => {
      const url = String(input);
      const series = url.match(/series_id=([^&]+)/)?.[1] ?? "";

      // level: latest 4.50, prior 4.33
      if (series === "DFF") return jsonResponse({ observations: obs([4.5, 4.33]) });
      // mom_change: 159300 - 159150 = 150 (this month), prior 159150-159000 = 150
      if (series === "PAYEMS") return jsonResponse({ observations: obs([159300, 159150, 159000]) });
      // yoy: need 13+ points. now index0=310, 12-ago=300 -> +3.33%
      if (series === "CPIAUCSL") {
        const vals = [310, 309, 308, 307, 306, 305, 304, 303, 302, 301, 300.5, 300.2, 300, 299];
        return jsonResponse({ observations: obs(vals) });
      }
      // everything else: two-point level so it still returns data
      return jsonResponse({ observations: obs([1, 1]) });
    });

    const data = await fetchFredData();
    expect(data.fetchSuccess).toBe(true);

    const dff = data.metrics.find((m) => m.series === "DFF")!;
    expect(dff.latest).toBe(4.5);
    expect(dff.prior).toBe(4.33);
    expect(dff.change).toBe(0.17);

    const payems = data.metrics.find((m) => m.series === "PAYEMS")!;
    expect(payems.latest).toBe(150); // this month's job additions (thousands)

    const cpi = data.metrics.find((m) => m.series === "CPIAUCSL")!;
    expect(cpi.unit).toBe("% YoY");
    expect(cpi.latest).toBe(3.3); // (310-300)/300 * 100, rounded to 1 dp
  });

  it("drops missing '.' observations and marks a series null without data", async () => {
    vi.stubEnv("FRED_API_KEY", "test-key");
    vi.spyOn(globalThis, "fetch").mockImplementation(async (input) => {
      const series = String(input).match(/series_id=([^&]+)/)?.[1] ?? "";
      if (series === "VIXCLS") return jsonResponse({ observations: [{ date: "2025-07-01", value: "." }] });
      return jsonResponse({ observations: obs([2, 2]) });
    });

    const data = await fetchFredData();
    const vix = data.metrics.find((m) => m.series === "VIXCLS")!;
    expect(vix.latest).toBeNull();
    // other series still have data → overall success
    expect(data.fetchSuccess).toBe(true);
  });
});
