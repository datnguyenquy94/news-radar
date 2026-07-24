import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchFinraMargin, parseMarginTable } from "../finra.ts";

const SAMPLE_HTML = `
<html><body>
<h2>Margin Statistics</h2>
<table>
  <thead>
    <tr><th>Month/Year</th><th>Debit Balances in Customers' Securities Margin Accounts</th><th>Free Credit Balances</th></tr>
  </thead>
  <tbody>
    <tr><td>March 2025</td><td>$918,000</td><td>$200,000</td></tr>
    <tr><td>February 2025</td><td>$900,000</td><td>$210,000</td></tr>
    <tr><td>January 2025</td><td>$885,000</td><td>$205,000</td></tr>
  </tbody>
</table>
</body></html>`;

function htmlResponse(body: string, status = 200): Response {
  return new Response(body, { status, headers: { "Content-Type": "text/html" } });
}

describe("parseMarginTable", () => {
  it("extracts the debit-balances column and orders newest first", () => {
    const rows = parseMarginTable(SAMPLE_HTML);
    expect(rows).not.toBeNull();
    expect(rows!.slice(0, 2)).toEqual([
      { period: "March 2025", debitMillions: 918000 },
      { period: "February 2025", debitMillions: 900000 },
    ]);
  });

  it("returns null when no margin table is present", () => {
    expect(parseMarginTable("<html><body><p>nothing here</p></body></html>")).toBeNull();
  });
});

describe("fetchFinraMargin", () => {
  afterEach(() => vi.restoreAllMocks());

  it("computes month-over-month change from the two latest rows", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(htmlResponse(SAMPLE_HTML));

    const data = await fetchFinraMargin();
    expect(data.fetchSuccess).toBe(true);
    expect(data.latest).toEqual({ period: "March 2025", debitMillions: 918000 });
    expect(data.prior).toEqual({ period: "February 2025", debitMillions: 900000 });
    expect(data.changePct).toBe(2); // (918000-900000)/900000 = +2.0%
  });

  it("degrades to fetchSuccess:false on HTTP error", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(htmlResponse("error", 503));
    const data = await fetchFinraMargin();
    expect(data).toEqual({ latest: null, prior: null, changePct: null, fetchSuccess: false });
  });
});
