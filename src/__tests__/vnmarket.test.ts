import { describe, expect, it } from "vitest";
import { aggregateBoard, quoteFromBars } from "../feeds/finance/vn/index.ts";

/** A board row with sensible defaults; override only what a case cares about. */
function row(over: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    stockSymbol: "AAA",
    companyNameEn: "AAA Corp",
    stockType: "s",
    matchedPrice: 10_000,
    ceiling: 10_700,
    floor: 9_300,
    priceChangePercent: 1,
    nmTotalTradedValue: 1e9,
    buyForeignValue: 0,
    sellForeignValue: 0,
    tradingDate: "20260728",
    ...over,
  };
}

describe("aggregateBoard", () => {
  it("counts breadth only for rows that actually traded", () => {
    const { breadth, traded } = aggregateBoard([
      row({ priceChangePercent: 1.2 }),
      row({ priceChangePercent: -0.5 }),
      row({ priceChangePercent: 0 }),
      // Illiquid: never printed today, so it has no direction.
      row({ priceChangePercent: 0, nmTotalTradedValue: 0 }),
    ]);

    expect(traded).toBe(3);
    expect(breadth).toMatchObject({ advancers: 1, decliners: 1, unchanged: 1 });
  });

  it("counts limit-up and limit-down locks", () => {
    const { breadth } = aggregateBoard([
      row({ matchedPrice: 10_700, ceiling: 10_700, priceChangePercent: 7 }),
      row({ matchedPrice: 9_300, floor: 9_300, priceChangePercent: -7 }),
      row(),
    ]);

    expect(breadth.ceiling).toBe(1);
    expect(breadth.floor).toBe(1);
  });

  it("excludes non-share instruments such as covered warrants", () => {
    const { traded, turnoverVndBn } = aggregateBoard([
      row({ nmTotalTradedValue: 2e9 }),
      row({ stockSymbol: "CVCB2501", stockType: "w", nmTotalTradedValue: 5e9 }),
    ]);

    expect(traded).toBe(1);
    expect(turnoverVndBn).toBe(2);
  });

  it("sums foreign flow and ranks top net buyers and sellers", () => {
    const { foreign } = aggregateBoard([
      row({ stockSymbol: "HPG", buyForeignValue: 300e9, sellForeignValue: 50e9 }),
      row({ stockSymbol: "PNJ", buyForeignValue: 200e9, sellForeignValue: 20e9 }),
      row({ stockSymbol: "VHM", buyForeignValue: 60e9, sellForeignValue: 3_000e9 }),
      row({ stockSymbol: "SSI", buyForeignValue: 10e9, sellForeignValue: 110e9 }),
    ]);

    expect(foreign.buyVndBn).toBe(570);
    expect(foreign.sellVndBn).toBe(3180);
    expect(foreign.netVndBn).toBe(-2610);
    expect(foreign.topBuys.map((t) => t.symbol)).toEqual(["HPG", "PNJ"]);
    // Most-negative first.
    expect(foreign.topSells.map((t) => t.symbol)).toEqual(["VHM", "SSI"]);
  });

  it("values remaining foreign room at the matched price", () => {
    const { foreign } = aggregateBoard([
      row({ stockSymbol: "HPG", buyForeignValue: 300e9, remainForeignQtty: 1_000_000, matchedPrice: 25_000 }),
      // No room field on the board row -> null, not a fabricated zero.
      row({ stockSymbol: "PNJ", buyForeignValue: 200e9, remainForeignQtty: undefined }),
    ]);

    expect(foreign.topBuys.find((t) => t.symbol === "HPG")?.roomVndBn).toBe(25);
    expect(foreign.topBuys.find((t) => t.symbol === "PNJ")?.roomVndBn).toBeNull();
  });

  it("counts traded names that have exhausted their foreign room", () => {
    const { foreign } = aggregateBoard([
      row({ stockSymbol: "VCB", remainForeignQtty: 0 }),
      row({ stockSymbol: "TCB", remainForeignQtty: 0 }),
      row({ stockSymbol: "HPG", remainForeignQtty: 500_000 }),
      // Untraded rows have no room pressure to report.
      row({ stockSymbol: "XYZ", remainForeignQtty: 0, nmTotalTradedValue: 0 }),
    ]);

    expect(foreign.zeroRoomCount).toBe(2);
  });

  it("normalizes the trading date from the board's YYYYMMDD form", () => {
    expect(aggregateBoard([row()]).tradingDate).toBe("2026-07-28");
    expect(aggregateBoard([row({ tradingDate: "" })]).tradingDate).toBe("");
  });
});

describe("quoteFromBars", () => {
  // 25 ascending closes: 100, 101, ... 124.
  const closes = Array.from({ length: 25 }, (_, i) => 100 + i);
  const times = Array.from({ length: 25 }, (_, i) => 1_785_000_000 + i * 86_400);

  it("computes 1/5/20-session changes off the latest bar", () => {
    const quote = quoteFromBars("VNINDEX", "VN-Index", { t: times, c: closes })!;

    expect(quote.close).toBe(124);
    expect(quote.changePct1d).toBe(0.8); // 124 vs 123
    expect(quote.changePct5d).toBe(4.2); // 124 vs 119
    expect(quote.changePct20d).toBe(19.2); // 124 vs 104
    expect(quote.asOf).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it("leaves changes null when the history is too short", () => {
    const quote = quoteFromBars("VN30", "VN30", { t: times.slice(0, 3), c: closes.slice(0, 3) })!;

    expect(quote.changePct1d).not.toBeNull();
    expect(quote.changePct5d).toBeNull();
    expect(quote.changePct20d).toBeNull();
  });

  it("returns null for an empty series", () => {
    expect(quoteFromBars("VNINDEX", "VN-Index", { t: [], c: [] })).toBeNull();
  });
});
