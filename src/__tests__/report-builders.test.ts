import { describe, it, expect } from "vitest";
import { buildCliReportContent } from "../platform/reports/builders/cli.ts";
import { buildOpenclawReportContent } from "../platform/reports/builders/openclaw.ts";
import type { RepoDigest } from "../platform/prompts/index.ts";
import type { GitHubItem, GitHubRelease } from "../providers/github/repos.ts";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

function makeDigest(overrides: Partial<RepoDigest> = {}): RepoDigest {
  return {
    config: { id: "test-tool", repo: "org/test-tool", name: "TestTool" },
    issues: [],
    prs: [],
    releases: [],
    summary: "Test summary content",
    ...overrides,
  };
}

// ---------------------------------------------------------------------------
// buildCliReportContent
// ---------------------------------------------------------------------------

describe("buildCliReportContent", () => {
  it("includes title, meta, and all sections (vi)", () => {
    const digests = [
      makeDigest({ config: { id: "claude-code", repo: "anthropics/claude-code", name: "Claude Code" } }),
      makeDigest({ config: { id: "codex", repo: "openai/codex", name: "OpenAI Codex" } }),
    ];
    const result = buildCliReportContent(
      digests,
      "Skills summary",
      "Comparison content",
      "2026-03-09 00:00",
      "2026-03-09",
      "\n---\nfooter",
      "anthropics/skills",
      "vi",
    );

    expect(result).toContain("# Bản tin hàng ngày Cộng đồng công cụ AI CLI 2026-03-09");
    expect(result).toContain("Số công cụ: 2");
    expect(result).toContain("[Claude Code](https://github.com/anthropics/claude-code)");
    expect(result).toContain("[Claude Code Skills](https://github.com/anthropics/skills)");
    expect(result).toContain("So sánh chéo");
    expect(result).toContain("Comparison content");
    expect(result).toContain("Skills summary");
    expect(result).toContain("footer");
  });

  it("includes title and meta in English", () => {
    const digests = [makeDigest()];
    const result = buildCliReportContent(
      digests,
      "Skills",
      "Comparison",
      "2026-03-09 00:00",
      "2026-03-09",
      "",
      "anthropics/skills",
      "en",
    );
    expect(result).toContain("# AI CLI Tools Community Digest 2026-03-09");
    expect(result).toContain("Cross-Tool Comparison");
  });

  it("nests skills section inside claude-code details only", () => {
    const digests = [
      makeDigest({ config: { id: "claude-code", repo: "anthropics/claude-code", name: "Claude Code" } }),
      makeDigest({ config: { id: "codex", repo: "openai/codex", name: "Codex" } }),
    ];
    const result = buildCliReportContent(
      digests,
      "SKILLS_CONTENT",
      "comparison",
      "",
      "",
      "",
      "anthropics/skills",
      "vi",
    );

    // Skills should appear inside claude-code details
    const claudeIdx = result.indexOf("Claude Code");
    const skillsIdx = result.indexOf("SKILLS_CONTENT");
    expect(skillsIdx).toBeGreaterThan(claudeIdx);
    // Skills should not appear after codex section
    expect(result.split("SKILLS_CONTENT")).toHaveLength(2); // appears exactly once
  });
});

// ---------------------------------------------------------------------------
// buildOpenclawReportContent
// ---------------------------------------------------------------------------

describe("buildOpenclawReportContent", () => {
  it("includes all sections (vi)", () => {
    const openclaw = { id: "openclaw", repo: "openclaw/openclaw", name: "OpenClaw" };
    const peers = [{ id: "peer1", repo: "org/peer1", name: "Peer1" }];
    const peerDigests = [makeDigest({ config: peers[0] })];
    const fetchedOpenclaw = {
      cfg: openclaw,
      issues: [{ number: 1 } as unknown as GitHubItem],
      prs: [] as GitHubItem[],
      releases: [] as GitHubRelease[],
    };

    const result = buildOpenclawReportContent(
      fetchedOpenclaw,
      peerDigests,
      "OpenClaw summary",
      "Peers comparison",
      "2026-03-09 00:00",
      "2026-03-09",
      "\nfooter",
      openclaw,
      peers,
      "vi",
    );

    expect(result).toContain("# Bản tin hàng ngày hệ sinh thái OpenClaw 2026-03-09");
    expect(result).toContain("Issues: 1");
    expect(result).toContain("Dự án được theo dõi: 2");
    expect(result).toContain("[OpenClaw](https://github.com/openclaw/openclaw)");
    expect(result).toContain("[Peer1](https://github.com/org/peer1)");
    expect(result).toContain("Báo cáo chuyên sâu dự án OpenClaw");
    expect(result).toContain("So sánh hệ sinh thái chéo");
    expect(result).toContain("Báo cáo chi tiết các dự án cùng lĩnh vực");
    expect(result).toContain("footer");
  });

  it("renders in English", () => {
    const openclaw = { id: "openclaw", repo: "openclaw/openclaw", name: "OpenClaw" };
    const result = buildOpenclawReportContent(
      { cfg: openclaw, issues: [], prs: [], releases: [] },
      [],
      "summary",
      "comparison",
      "",
      "2026-03-09",
      "",
      openclaw,
      [],
      "en",
    );
    expect(result).toContain("# OpenClaw Ecosystem Digest 2026-03-09");
    expect(result).toContain("OpenClaw Deep Dive");
    expect(result).toContain("Cross-Ecosystem Comparison");
  });
});
