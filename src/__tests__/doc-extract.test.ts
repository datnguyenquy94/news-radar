import { describe, expect, it } from "vitest";
import { extractArticle, rankPages, relevantExcerpt, scoreText } from "../core/doc-extract.ts";

const BODY_TEXT =
  "The Consumer Price Index in June 2026 decreased by 0.39% month-on-month, driven by lower gasoline prices " +
  "in line with global fuel markets. Compared with December 2025 the index rose by 3.21% and gained 4.69% " +
  "year-on-year, keeping headline inflation inside the government's annual target band.";

/** A page whose real content sits beside a navigation menu large enough to outweigh it. */
function pageWithNav(body: string): string {
  const navItems = Array.from(
    { length: 60 },
    (_, i) => `<li><a href="/s/${i}">Statistics section ${i}</a></li>`,
  );
  return `<html><body>
    <nav><ul>${navItems.join("")}</ul></nav>
    <main><article><h1>Consumer Price Index in June 2026</h1><p>${body}</p></article></main>
    <footer><p>National Statistics Office of Vietnam</p></footer>
  </body></html>`;
}

describe("extractArticle", () => {
  it("returns the article body, not the navigation menu", () => {
    const result = extractArticle(pageWithNav(BODY_TEXT));

    expect(result.usedFallback).toBe(false);
    expect(result.text).toContain("decreased by 0.39% month-on-month");
    expect(result.text).not.toContain("Statistics section 42");
  });

  it("falls back to a tag-strip when the article is shorter than the threshold", () => {
    // Real content is a data table, which Readability discards wholesale.
    const html = `<html><body><main><table>
      <tr><th>Tenor</th><th>Rate</th></tr>
      <tr><td>Overnight</td><td>4.10</td></tr>
    </table></main></body></html>`;

    const result = extractArticle(html, "https://example.test/rates");
    expect(result.usedFallback).toBe(true);
    expect(result.text).toContain("Overnight");
    expect(result.text).toContain("4.10");
  });

  it("decodes entities and drops scripts in the fallback path", () => {
    const html = `<html><body><script>var x = "<b>not content</b>";</script><p>Rates &amp; yields</p></body></html>`;
    const result = extractArticle(html);
    expect(result.text).toContain("Rates & yields");
    expect(result.text).not.toContain("not content");
  });
});

describe("scoreText", () => {
  it("scores distinct keywords above repeats of one keyword", () => {
    const distinct = scoreText("interbank rate and government bond yield", ["interbank", "government bond"]);
    const repeated = scoreText("interbank interbank interbank interbank", ["interbank", "government bond"]);
    expect(distinct).toBeGreaterThan(repeated);
  });

  it("returns zero when no keyword matches", () => {
    expect(scoreText("spring rice harvest area", ["interbank", "yield"])).toBe(0);
  });
});

describe("rankPages", () => {
  const pages = [
    { page: 1, text: "Spring rice cultivation area reached 2,932.2 thousand hectares." },
    { page: 2, text: "Interbank overnight rate fell 41 bps; SBV bill issuance drained VND 37 trillion." },
    { page: 3, text: "Government bond yield curve flat across tenors; auction won VND 3,040 billion." },
    { page: 4, text: "List of abbreviations." },
  ];
  const keywords = ["interbank", "sbv", "government bond", "yield", "auction"];

  it("keeps only keyword-bearing pages, in document order", () => {
    const ranked = rankPages(pages, keywords, 3);
    expect(ranked.map((p) => p.page)).toEqual([2, 3]);
  });

  it("honours the page limit", () => {
    expect(rankPages(pages, keywords, 1)).toHaveLength(1);
  });
});

describe("relevantExcerpt", () => {
  const article = [
    "Spring rice cultivation reached 2,932.2 thousand hectares, a year-on-year decrease of 37.5 thousand hectares.",
    "Livestock: the total number of pigs nationwide showed a year-on-year rise of 2.8% while cattle fell 2.1%.",
    "Disbursed FDI in Viet Nam during the first five months of 2026 was estimated at 9.75 billion USD, up 9.6%.",
  ].join("\n");

  it("ranks by keyword relevance rather than document position", () => {
    // The FDI paragraph is last but is the only one that matters; a sequential
    // fill would spend the budget on the rice harvest before reaching it.
    const excerpt = relevantExcerpt(article, ["fdi", "disbursed"], 200);
    expect(excerpt).toContain("Disbursed FDI");
    expect(excerpt).not.toContain("Spring rice");
  });

  it("restores document order across multiple kept paragraphs", () => {
    const excerpt = relevantExcerpt(article, ["fdi", "livestock"], 500);
    expect(excerpt.indexOf("Livestock")).toBeLessThan(excerpt.indexOf("Disbursed FDI"));
  });

  it("falls back to the head of the text when nothing matches", () => {
    const excerpt = relevantExcerpt(article, ["interbank"], 60);
    expect(excerpt.length).toBeLessThanOrEqual(60);
    expect(excerpt).toContain("Spring rice");
  });
});
