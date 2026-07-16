import { describe, it, expect } from "vitest";
import { buildCliReportContent, buildOpenclawReportContent } from "../report-builders.ts";
import type { RepoDigest } from "../prompts.ts";
import type { GitHubItem, GitHubRelease } from "../github.ts";
import type { ClosedToolRelease } from "../npm.ts";

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
  it("includes title, meta, and all sections (zh)", () => {
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
      [],
      "zh",
    );

    expect(result).toContain("# AI CLI 工具社区动态日报 2026-03-09");
    expect(result).toContain("覆盖工具: 2 个");
    expect(result).toContain("[Claude Code](https://github.com/anthropics/claude-code)");
    expect(result).toContain("[Claude Code Skills](https://github.com/anthropics/skills)");
    expect(result).toContain("横向对比");
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
      [],
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
      [],
      "zh",
    );

    // Skills should appear inside claude-code details
    const claudeIdx = result.indexOf("Claude Code");
    const skillsIdx = result.indexOf("SKILLS_CONTENT");
    expect(skillsIdx).toBeGreaterThan(claudeIdx);
    // Skills should not appear after codex section
    expect(result.split("SKILLS_CONTENT")).toHaveLength(2); // appears exactly once
  });

  it("renders closed-source tools as a table with new releases sorted first", () => {
    const closed: ClosedToolRelease[] = [
      {
        tool: {
          id: "amp",
          name: "Amp",
          vendor: { zh: "Sourcegraph", en: "Sourcegraph" },
          model: "Claude / GPT",
        },
        latestVersion: "0.1.0",
        latestPublishedAt: "2026-03-01T00:00:00.000Z",
        isNew: false, // latest is weeks old
        fetchSuccess: true,
      },
      {
        tool: {
          id: "codebuddy",
          name: "CodeBuddy",
          vendor: { zh: "腾讯", en: "Tencent" },
          model: "Hunyuan 混元",
        },
        latestVersion: "2.122.0",
        latestPublishedAt: "2026-03-09T14:00:00.000Z",
        isNew: true, // shipped in window
        fetchSuccess: true,
      },
    ];
    const result = buildCliReportContent(
      [makeDigest()],
      "Skills",
      "Comparison",
      "2026-03-09 00:00",
      "2026-03-09",
      "",
      "anthropics/skills",
      closed,
      "zh",
    );

    expect(result).toContain("闭源工具追踪");
    expect(result).toContain("| CodeBuddy | 腾讯 · Hunyuan 混元 | `2.122.0` | 2026-03-09 | 🆕 今日更新 |");
    expect(result).toContain("| Amp | Sourcegraph · Claude / GPT | `0.1.0` | 2026-03-01 | — |");
    // New release (CodeBuddy) sorts above the tool with no new release (Amp)
    expect(result.indexOf("CodeBuddy |")).toBeLessThan(result.indexOf("Amp |"));
  });

  it("omits the closed-source section when no tools are tracked", () => {
    const result = buildCliReportContent([makeDigest()], "", "", "", "", "", "anthropics/skills", [], "zh");
    expect(result).not.toContain("闭源工具追踪");
  });
});

// ---------------------------------------------------------------------------
// buildOpenclawReportContent
// ---------------------------------------------------------------------------

describe("buildOpenclawReportContent", () => {
  it("includes all sections (zh)", () => {
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
      "zh",
    );

    expect(result).toContain("# OpenClaw 生态日报 2026-03-09");
    expect(result).toContain("Issues: 1");
    expect(result).toContain("覆盖项目: 2 个");
    expect(result).toContain("[OpenClaw](https://github.com/openclaw/openclaw)");
    expect(result).toContain("[Peer1](https://github.com/org/peer1)");
    expect(result).toContain("OpenClaw 项目深度报告");
    expect(result).toContain("横向生态对比");
    expect(result).toContain("同赛道项目详细报告");
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
