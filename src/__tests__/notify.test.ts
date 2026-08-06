import { describe, it, expect, afterEach } from "vitest";
import { buildMessage, type Highlights } from "../platform/notify/telegram.ts";

const BASE_URL = "https://example.com/radar";

describe("buildMessage", () => {
  const origPagesUrl = process.env["PAGES_URL"];

  afterEach(() => {
    if (origPagesUrl !== undefined) {
      process.env["PAGES_URL"] = origPagesUrl;
    } else {
      delete process.env["PAGES_URL"];
    }
  });

  it("builds a daily message with vi + en reports", () => {
    const msg = buildMessage("2026-03-09", ["ai-cli", "ai-cli-en", "ai-agents", "ai-agents-en"], BASE_URL);
    expect(msg).toContain("agents-radar");
    expect(msg).toContain("2026-03-09");
    expect(msg).toContain("📡");
    // vi links
    expect(msg).toContain(`${BASE_URL}/#2026-03-09/ai-cli`);
    expect(msg).toContain("Công cụ AI CLI");
    // en links
    expect(msg).toContain(`${BASE_URL}/#2026-03-09/ai-cli-en`);
    expect(msg).toContain("AI CLI Tools");
  });

  it("shows weekly icon and suffix for weekly reports", () => {
    const msg = buildMessage("2026-03-09", ["ai-weekly", "ai-weekly-en"], BASE_URL);
    expect(msg).toContain("📅");
    expect(msg).toContain("báo cáo tuần");
  });

  it("shows monthly icon and suffix for monthly reports", () => {
    const msg = buildMessage("2026-03-09", ["ai-monthly", "ai-monthly-en"], BASE_URL);
    expect(msg).toContain("📆");
    expect(msg).toContain("báo cáo tháng");
  });

  it("monthly takes priority over weekly", () => {
    const msg = buildMessage("2026-03-09", ["ai-weekly", "ai-monthly"], BASE_URL);
    expect(msg).toContain("📆");
    expect(msg).toContain("báo cáo tháng");
  });

  it("renders vi-only reports without en link", () => {
    const msg = buildMessage("2026-03-09", ["ai-hn"], BASE_URL);
    expect(msg).toContain("Cộng đồng HN");
    expect(msg).not.toContain("HN Community");
  });

  it("renders en-only reports (DIGEST_LANGS=en) without a vi link", () => {
    const msg = buildMessage("2026-03-09", ["ai-cli-en", "ai-agents-en", "ai-hn-en"], BASE_URL);
    // en links present, labeled in English
    expect(msg).toContain(`${BASE_URL}/#2026-03-09/ai-cli-en`);
    expect(msg).toContain("AI CLI Tools");
    expect(msg).toContain("HN Community");
    // no vi labels — the base (vi) variant is absent
    expect(msg).not.toContain("Công cụ AI CLI");
    expect(msg).not.toContain("Cộng đồng HN");
    // no bare vi anchor (href ends at the report id + closing quote)
    expect(msg).not.toContain(`/#2026-03-09/ai-cli"`);
    // still shows the footer links
    expect(msg).toContain("🌐 Web UI");
  });

  it("shows weekly icon for an en-only weekly report", () => {
    const msg = buildMessage("2026-03-09", ["ai-weekly-en"], BASE_URL);
    expect(msg).toContain("📅");
    expect(msg).toContain(`${BASE_URL}/#2026-03-09/ai-weekly-en`);
  });

  it("includes Web UI and RSS links", () => {
    const msg = buildMessage("2026-03-09", ["ai-cli"], BASE_URL);
    expect(msg).toContain("🌐 Web UI");
    expect(msg).toContain("RSS");
    expect(msg).toContain(`${BASE_URL}/feed.xml`);
  });

  it("strips trailing slash from pagesUrl", () => {
    const msg = buildMessage("2026-03-09", ["ai-cli"], BASE_URL + "/");
    expect(msg).not.toContain("//feed.xml");
    expect(msg).toContain(`${BASE_URL}/feed.xml`);
  });

  it("includes highlights when provided", () => {
    const highlights: Highlights = {
      vi: {
        "ai-cli": ["Claude Code phát hành v1.2.0", "Gemini CLI sửa lỗi streaming"],
        "ai-agents": ["OpenClaw bổ sung hỗ trợ MCP"],
      },
      en: {
        "ai-cli": ["Claude Code releases v1.2.0"],
      },
    };
    const msg = buildMessage(
      "2026-03-09",
      ["ai-cli", "ai-cli-en", "ai-agents", "ai-agents-en"],
      BASE_URL,
      highlights,
    );
    expect(msg).toContain("◦ Claude Code phát hành v1.2.0");
    expect(msg).toContain("◦ Gemini CLI sửa lỗi streaming");
    expect(msg).toContain("◦ OpenClaw bổ sung hỗ trợ MCP");
  });

  it("falls back to en highlights when a report's vi is missing", () => {
    // Mirrors the 2026-07-13 incident: vi generation failed, leaving vi empty
    // while en was populated. The message must still render bullets.
    const highlights: Highlights = {
      vi: {},
      en: {
        "ai-cli": ["Claude Code releases v1.2.0"],
        "ai-agents": ["OpenClaw adds MCP support"],
      },
    };
    const msg = buildMessage(
      "2026-03-09",
      ["ai-cli", "ai-cli-en", "ai-agents", "ai-agents-en"],
      BASE_URL,
      highlights,
    );
    expect(msg).toContain("◦ Claude Code releases v1.2.0");
    expect(msg).toContain("◦ OpenClaw adds MCP support");
  });

  it("prefers vi highlights over en when both present", () => {
    const highlights: Highlights = {
      vi: { "ai-cli": ["Claude Code phát hành v1.2.0"] },
      en: { "ai-cli": ["Claude Code releases v1.2.0"] },
    };
    const msg = buildMessage("2026-03-09", ["ai-cli", "ai-cli-en"], BASE_URL, highlights);
    expect(msg).toContain("◦ Claude Code phát hành v1.2.0");
    expect(msg).not.toContain("◦ Claude Code releases v1.2.0");
  });

  it("works without highlights (null)", () => {
    const msg = buildMessage("2026-03-09", ["ai-cli", "ai-cli-en"], BASE_URL, null);
    expect(msg).toContain("Công cụ AI CLI");
    expect(msg).not.toContain("◦");
  });

  it("works without highlights (undefined)", () => {
    const msg = buildMessage("2026-03-09", ["ai-cli", "ai-cli-en"], BASE_URL);
    expect(msg).toContain("Công cụ AI CLI");
    expect(msg).not.toContain("◦");
  });
});
