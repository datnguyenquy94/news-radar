import { describe, expect, it } from "vitest";
import { parseVcbUsd } from "../domains/vietnam/vnmacro.ts";

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
