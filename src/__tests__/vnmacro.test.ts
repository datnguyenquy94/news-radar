import { describe, expect, it } from "vitest";
import { parseVcbUsd } from "../providers/vietcombank.ts";
import { parseSjcGold } from "../providers/sjc.ts";

describe("parseVcbUsd", () => {
  const board = {
    Date: "2026-07-28T00:00:00",
    Data: [
      { currencyCode: "EUR", currencyName: "EURO", transfer: "29,477.87", sell: "30,721.59" },
      {
        currencyCode: "USD",
        currencyName: "US DOLLAR",
        cash: "26,100.00",
        transfer: "26,130.00",
        sell: "26,510.00",
      },
    ],
  };

  it("picks the USD row and strips thousands separators", () => {
    expect(parseVcbUsd(board)).toEqual({ transfer: 26_130, sell: 26_510, asOf: "2026-07-28" });
  });

  it("returns null when the board carries no USD row", () => {
    expect(parseVcbUsd({ Date: "2026-07-28T00:00:00", Data: [board.Data[0]!] })).toBeNull();
  });

  it("returns null on an empty or unparseable board", () => {
    expect(parseVcbUsd({})).toBeNull();
    expect(parseVcbUsd({ Data: [{ currencyCode: "USD", sell: "" }] })).toBeNull();
  });

  it("falls back to the sell rate when transfer is missing", () => {
    const result = parseVcbUsd({
      Date: "2026-07-28T00:00:00",
      Data: [{ currencyCode: "usd", sell: "26,510" }],
    });
    expect(result).toEqual({ transfer: 26_510, sell: 26_510, asOf: "2026-07-28" });
  });
});

describe("parseSjcGold", () => {
  const board = {
    success: true,
    latestDate: "14:26 29/07/2026",
    data: [
      {
        Id: 1,
        TypeName: "Vàng SJC 1L, 10L, 1KG",
        BranchName: "Hồ Chí Minh",
        BuyValue: 137_500_000,
        SellValue: 141_500_000,
      },
      {
        Id: 17,
        TypeName: "Vàng SJC 5 chỉ",
        BranchName: "Hồ Chí Minh",
        BuyValue: 137_500_000,
        SellValue: 141_700_000,
      },
    ],
  };

  it("picks the benchmark 1L bar, not a smaller denomination", () => {
    expect(parseSjcGold(board)).toEqual({
      buy: 137_500_000,
      sell: 141_500_000,
      asOf: "14:26 29/07/2026",
    });
  });

  it("falls back to any SJC row when the 1L bar is absent", () => {
    const result = parseSjcGold({
      latestDate: "09:00 29/07/2026",
      data: [{ TypeName: "Vàng SJC 5 chỉ", BuyValue: 1, SellValue: 141_700_000 }],
    });
    expect(result?.sell).toBe(141_700_000);
  });

  it("returns null on an empty or unpriced board", () => {
    expect(parseSjcGold({})).toBeNull();
    expect(parseSjcGold({ data: [{ TypeName: "Vàng SJC 1L", SellValue: 0 }] })).toBeNull();
  });
});
