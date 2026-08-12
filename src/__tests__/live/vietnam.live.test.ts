/**
 * Live source contracts — Vietnam market, macro and document sources.
 *
 * These are the most fragile sources in the pipeline: undocumented broker
 * endpoints, a bank API, a WAF-fronted gold board and two publishers whose
 * output has to be parsed out of HTML and PDF. They are also the ones with the
 * least reason to tell anyone before they change.
 */

import { describe, expect, it } from "vitest";

import { fetchVnDocsData } from "../../feeds/finance/vn/index.ts";
import { fetchVnMacroData } from "../../feeds/finance/vn/index.ts";
import { fetchVnMarketData } from "../../feeds/finance/vn/index.ts";
import {
  LIVE_OPTS,
  expectIsoDate,
  expectNonEmpty,
  expectPopulated,
  expectSomePopulated,
  expectUrl,
} from "./contract.ts";

describe("live: vietnam market (SSI board + Entrade bars)", () => {
  it("returns index levels, breadth, turnover and foreign flow", LIVE_OPTS, async () => {
    const data = await fetchVnMarketData();

    expect(data.fetchSuccess, "vnmarket reported fetchSuccess: false").toBe(true);
    expectIsoDate(data.tradingDate, "vnmarket.tradingDate");

    // Entrade — index bars
    expectNonEmpty(data.indices, "vnmarket.indices");
    expectPopulated(data.indices, { symbol: "string", close: "number", asOf: "string" }, "vnmarket.indices");
    const vnindex = data.indices.find((q) => q.symbol === "VNINDEX");
    expect(vnindex, "vnmarket: VNINDEX missing from indices").toBeDefined();
    expect(vnindex!.close, "VNINDEX close is not a plausible index level").toBeGreaterThan(100);
    expectSomePopulated(data.indices, (q) => q.changePct1d, "vnmarket.indices[].changePct1d");

    // Entrade — derivative leg. Null here means the VN30F1M symbol changed.
    expect(data.futuresBasis, "vnmarket.futuresBasis is null — VN30F1M lookup failed").not.toBeNull();
    expectPopulated(
      [data.futuresBasis!],
      { futures: "number", spot: "number", basis: "number", basisPct: "number" },
      "vnmarket.futuresBasis",
    );

    // SSI board. NOTE: between ~08:45 and the 09:00 ICT open the board can be
    // reset for the new session, in which case fetchBoard drops these blocks
    // by design. A failure here outside that window is real drift.
    expect(data.breadth, "vnmarket.breadth is null — SSI board returned no traded rows").not.toBeNull();
    const breadth = data.breadth!;
    expect(
      breadth.advancers + breadth.decliners + breadth.unchanged,
      "vnmarket.breadth: no traded names counted",
    ).toBeGreaterThan(0);

    expect(data.turnoverVndBn, "vnmarket.turnoverVndBn is null").not.toBeNull();
    expect(data.turnoverVndBn!, "vnmarket.turnoverVndBn is zero").toBeGreaterThan(0);

    expect(data.foreign, "vnmarket.foreign is null").not.toBeNull();
    const foreign = data.foreign!;
    expectPopulated(
      [foreign],
      { buyVndBn: "number", sellVndBn: "number", netVndBn: "number", zeroRoomCount: "number" },
      "vnmarket.foreign",
    );
    expectNonEmpty(foreign.topBuys, "vnmarket.foreign.topBuys");
    expectPopulated(foreign.topBuys, { symbol: "string", name: "string", netVndBn: "number" }, "topBuys");
    // roomVndBn is null per row when `remainForeignQtty` is absent; all-null
    // across a live board means SSI renamed the field.
    expectSomePopulated(
      [...foreign.topBuys, ...foreign.topSells],
      (t) => t.roomVndBn,
      "vnmarket.foreign topBuys/topSells roomVndBn",
    );
  });
});

describe("live: vietnam macro (VCB + Yahoo + FRED + SJC + World Bank)", () => {
  it("returns USD/VND, global drivers, domestic gold and annual series", LIVE_OPTS, async () => {
    const data = await fetchVnMacroData();

    expect(data.fetchSuccess, "vnmacro reported fetchSuccess: false").toBe(true);

    // Vietcombank USD/VND — the framework's most load-bearing number.
    expect(data.fx, "vnmacro.fx is null — the VCB board could not be read").not.toBeNull();
    expectPopulated([data.fx!], { transfer: "number", sell: "number", asOf: "string" }, "vnmacro.fx");
    expect(data.fx!.sell, "vnmacro.fx.sell is not a plausible VND rate").toBeGreaterThan(10_000);
    expectIsoDate(data.fx!.asOf, "vnmacro.fx.asOf");

    // Yahoo + FRED drivers. Name any series that came back blank.
    expectNonEmpty(data.global, "vnmacro.global");
    const blank = data.global.filter((m) => m.latest === null).map((m) => m.symbol);
    expect(blank, `vnmacro.global: no value for ${blank.join(", ")}`).toEqual([]);
    expectPopulated(data.global, { id: "string", symbol: "string", latest: "number" }, "vnmacro.global");

    // The US 10Y must come from FRED, not the Yahoo fallback.
    const us10y = data.global.find((m) => m.id === "us-10y");
    expect(us10y, "vnmacro.global: us-10y missing").toBeDefined();
    expect(us10y!.symbol, "us-10y fell back to Yahoo — FRED DGS10 failed").toBe("DGS10");

    // SJC gold — needs the browser-TLS handshake to get past the WAF.
    expect(data.gold, "vnmacro.gold is null — SJC fetch or parse failed").not.toBeNull();
    const gold = data.gold!;
    expectPopulated(
      [gold],
      { buyVndPerTael: "number", sellVndPerTael: "number", asOf: "string" },
      "vnmacro.gold",
    );
    expect(gold.sellVndPerTael, "gold.sellVndPerTael is not a plausible VND/tael price").toBeGreaterThan(
      1_000_000,
    );
    // The premium needs FX and world gold too, so a null here means one of
    // the three legs broke even though gold itself parsed.
    expect(gold.premiumPct, "vnmacro.gold.premiumPct is null — FX or world gold missing").not.toBeNull();
    expect(gold.sellUsdPerOz!, "gold.sellUsdPerOz conversion looks wrong").toBeGreaterThan(100);

    // World Bank annual series.
    expectNonEmpty(data.annual, "vnmacro.annual");
    const missing = data.annual.filter((m) => m.latest === null).map((m) => m.indicator);
    expect(missing, `vnmacro.annual: no observation for ${missing.join(", ")}`).toEqual([]);
    expectPopulated(data.annual, { id: "string", latest: "number", year: "string" }, "vnmacro.annual");
  });
});

describe("live: vietnam documents (NSO HTML + VBMA PDF)", () => {
  it("extracts all three documents with usable excerpts", LIVE_OPTS, async () => {
    const data = await fetchVnDocsData();

    expect(data.fetchSuccess, "vndocs reported fetchSuccess: false").toBe(true);
    // All three matter: two NSO articles and the VBMA weekly bulletin.
    expect(
      data.docs.map((d) => d.id).sort(),
      "vndocs: a source dropped out — listing page or link pattern changed",
    ).toEqual(["nso-cpi", "nso-monthly", "vbma-weekly"]);

    expectPopulated(
      data.docs,
      { id: "string", source: "string", title: "string", url: "string", kind: "string", excerpt: "string" },
      "vndocs.docs",
      3,
    );

    for (const doc of data.docs) {
      expectUrl(doc.url, `vndocs ${doc.id} url`);
      // A short excerpt means Readability or the page-ranker found nothing —
      // the symptom of a CMS change, not of a quiet news week.
      expect(doc.excerpt.length, `vndocs ${doc.id}: excerpt is too short to be usable`).toBeGreaterThan(500);
    }

    const pdf = data.docs.find((d) => d.kind === "pdf")!;
    expect(pdf.pages?.length, "vndocs vbma-weekly: no pages survived keyword ranking").toBeGreaterThan(0);
  });
});
