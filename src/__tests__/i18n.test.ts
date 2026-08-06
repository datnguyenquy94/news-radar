import { describe, it, expect, afterEach } from "vitest";
import {
  MSG,
  CLI_REPORT,
  OPENCLAW_REPORT,
  WEB_REPORT,
  TRENDING_REPORT,
  HN_REPORT,
  WEEKLY_REPORT,
  MONTHLY_REPORT,
  ISSUE_LABELS,
  CLI_ISSUE_TITLE,
  OPENCLAW_ISSUE_TITLE,
  FOOTER,
  NOTIFY_LABELS,
  getLangs,
} from "../core/i18n/index.ts";

// ---------------------------------------------------------------------------
// Static bilingual strings
// ---------------------------------------------------------------------------

describe("bilingual string maps", () => {
  const maps = [
    { name: "MSG.noActivity", obj: MSG.noActivity },
    { name: "MSG.summaryFailed", obj: MSG.summaryFailed },
    { name: "MSG.skillsFailed", obj: MSG.skillsFailed },
    { name: "MSG.trendingNoData", obj: MSG.trendingNoData },
    { name: "MSG.trendingFailed", obj: MSG.trendingFailed },
    { name: "CLI_REPORT.title", obj: CLI_REPORT.title },
    { name: "CLI_REPORT.skillsHeading", obj: CLI_REPORT.skillsHeading },
    { name: "CLI_REPORT.comparison", obj: CLI_REPORT.comparison },
    { name: "CLI_REPORT.detail", obj: CLI_REPORT.detail },
    { name: "OPENCLAW_REPORT.title", obj: OPENCLAW_REPORT.title },
    { name: "OPENCLAW_REPORT.deepDive", obj: OPENCLAW_REPORT.deepDive },
    { name: "WEB_REPORT.title", obj: WEB_REPORT.title },
    { name: "WEB_REPORT.firstCrawl", obj: WEB_REPORT.firstCrawl },
    { name: "TRENDING_REPORT.title", obj: TRENDING_REPORT.title },
    { name: "HN_REPORT.title", obj: HN_REPORT.title },
    { name: "WEEKLY_REPORT.title", obj: WEEKLY_REPORT.title },
    { name: "MONTHLY_REPORT.title", obj: MONTHLY_REPORT.title },
    { name: "FOOTER.autoGen", obj: FOOTER.autoGen },
  ];

  for (const { name, obj } of maps) {
    it(`${name} has both vi and en`, () => {
      expect(obj).toHaveProperty("vi");
      expect(obj).toHaveProperty("en");
      expect(obj.vi).toBeTruthy();
      expect(obj.en).toBeTruthy();
      expect(obj.vi).not.toBe(obj.en);
    });
  }
});

// ---------------------------------------------------------------------------
// Dynamic title functions
// ---------------------------------------------------------------------------

describe("issue title functions", () => {
  it("CLI_ISSUE_TITLE produces vi and en titles", () => {
    expect(CLI_ISSUE_TITLE("2026-03-12", "vi")).toContain("AI CLI");
    expect(CLI_ISSUE_TITLE("2026-03-12", "vi")).toContain("2026-03-12");
    expect(CLI_ISSUE_TITLE("2026-03-12", "en")).toContain("AI CLI Tools Digest");
  });

  it("OPENCLAW_ISSUE_TITLE produces vi and en titles", () => {
    expect(OPENCLAW_ISSUE_TITLE("2026-03-12", "vi")).toContain("OpenClaw");
    expect(OPENCLAW_ISSUE_TITLE("2026-03-12", "en")).toContain("OpenClaw Ecosystem Digest");
  });

  it("WEB_REPORT.issueTitle includes first crawl flag", () => {
    expect(WEB_REPORT.issueTitle("2026-03-12", true, "vi")).toContain("Thu thập lần đầu");
    expect(WEB_REPORT.issueTitle("2026-03-12", false, "vi")).not.toContain("Thu thập lần đầu");
    expect(WEB_REPORT.issueTitle("2026-03-12", true, "en")).toContain("First Crawl");
  });

  it("TRENDING_REPORT.issueTitle produces vi and en", () => {
    expect(TRENDING_REPORT.issueTitle("2026-03-12", "vi")).toContain("mã nguồn mở");
    expect(TRENDING_REPORT.issueTitle("2026-03-12", "en")).toContain("Open Source Trends");
  });

  it("HN_REPORT.issueTitle produces vi and en", () => {
    expect(HN_REPORT.issueTitle("2026-03-12", "vi")).toContain("Hacker News");
    expect(HN_REPORT.issueTitle("2026-03-12", "en")).toContain("Hacker News");
  });

  it("WEEKLY_REPORT.issueTitle includes week string", () => {
    expect(WEEKLY_REPORT.issueTitle("2026-W11")).toContain("2026-W11");
  });

  it("MONTHLY_REPORT.issueTitle includes month string", () => {
    expect(MONTHLY_REPORT.issueTitle("2026-02")).toContain("2026-02");
  });
});

// ---------------------------------------------------------------------------
// Dynamic content functions
// ---------------------------------------------------------------------------

describe("dynamic content helpers", () => {
  it("CLI_REPORT.meta produces vi and en metadata", () => {
    const vi = CLI_REPORT.meta("12:00", 5, "vi");
    expect(vi).toContain("12:00");
    expect(vi).toContain("5");

    const en = CLI_REPORT.meta("12:00", 5, "en");
    expect(en).toContain("12:00");
    expect(en).toContain("Tools covered: 5");
  });

  it("WEB_REPORT.newContent formats count", () => {
    expect(WEB_REPORT.newContent(10, "vi")).toContain("10 bài viết");
    expect(WEB_REPORT.newContent(10, "en")).toContain("10 articles");
  });

  it("WEB_REPORT.generated formats timestamp", () => {
    expect(WEB_REPORT.generated("12:00", "vi")).toContain("12:00 UTC");
    expect(WEB_REPORT.generated("12:00", "en")).toContain("12:00 UTC");
  });
});

// ---------------------------------------------------------------------------
// ISSUE_LABELS
// ---------------------------------------------------------------------------

describe("ISSUE_LABELS", () => {
  it("maps report types to label names", () => {
    expect(ISSUE_LABELS.cli.vi).toBe("digest");
    expect(ISSUE_LABELS.cli.en).toBe("digest-en");
    expect(ISSUE_LABELS.openclaw.vi).toBe("openclaw");
    expect(ISSUE_LABELS.trending.en).toBe("trending-en");
    expect(ISSUE_LABELS.hn.en).toBe("hn-en");
  });
});

// ---------------------------------------------------------------------------
// NOTIFY_LABELS
// ---------------------------------------------------------------------------

describe("NOTIFY_LABELS", () => {
  it("covers all report types", () => {
    const expected = ["ai-cli", "ai-agents", "ai-web", "ai-trending", "ai-hn", "ai-weekly", "ai-monthly"];
    for (const key of expected) {
      expect(NOTIFY_LABELS[key]).toBeDefined();
      expect(NOTIFY_LABELS[key]!.vi).toBeTruthy();
      expect(NOTIFY_LABELS[key]!.en).toBeTruthy();
    }
  });
});

// ---------------------------------------------------------------------------
// getLangs (DIGEST_LANGS env var)
// ---------------------------------------------------------------------------

describe("getLangs", () => {
  const original = process.env["DIGEST_LANGS"];
  afterEach(() => {
    if (original === undefined) delete process.env["DIGEST_LANGS"];
    else process.env["DIGEST_LANGS"] = original;
  });

  it("defaults to both languages when unset", () => {
    delete process.env["DIGEST_LANGS"];
    expect(getLangs()).toEqual(["vi", "en"]);
  });

  it("returns English only for DIGEST_LANGS=en", () => {
    process.env["DIGEST_LANGS"] = "en";
    expect(getLangs()).toEqual(["en"]);
  });

  it("returns Vietnamese only for DIGEST_LANGS=vi", () => {
    process.env["DIGEST_LANGS"] = "vi";
    expect(getLangs()).toEqual(["vi"]);
  });

  it("parses comma-separated values and trims/lowercases", () => {
    process.env["DIGEST_LANGS"] = " EN , VI ";
    expect(getLangs()).toEqual(["en", "vi"]);
  });

  it("de-duplicates repeated entries", () => {
    process.env["DIGEST_LANGS"] = "en,en,vi";
    expect(getLangs()).toEqual(["en", "vi"]);
  });

  it("ignores unrecognized entries", () => {
    process.env["DIGEST_LANGS"] = "en,fr,de";
    expect(getLangs()).toEqual(["en"]);
  });

  it("falls back to all languages when nothing valid remains", () => {
    process.env["DIGEST_LANGS"] = "fr,de";
    expect(getLangs()).toEqual(["vi", "en"]);
  });
});
