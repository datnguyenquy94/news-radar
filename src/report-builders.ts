/**
 * Report content builders — extracted from index.ts for testability.
 */

import type { RepoConfig, RepoFetch } from "./github.ts";
import type { RepoDigest } from "./prompts.ts";
import type { ClosedToolRelease } from "./npm.ts";
import { type Lang, CLI_REPORT, OPENCLAW_REPORT } from "./i18n.ts";

// ---------------------------------------------------------------------------
// Closed-source tools section — a version-only table (no LLM summary).
// New releases (published within the digest window) are sorted to the top.
// ---------------------------------------------------------------------------

function buildClosedSection(releases: ClosedToolRelease[], lang: Lang): string {
  if (releases.length === 0) return "";

  const c = CLI_REPORT.closed;
  const head =
    `| ${c.colTool[lang]} | ${c.colVendor[lang]} | ${c.colVersion[lang]} | ${c.colPublished[lang]} | ${c.colStatus[lang]} |\n` +
    `| --- | --- | --- | --- | --- |`;

  const rows = [...releases]
    .sort((a, b) => Number(b.isNew) - Number(a.isNew))
    .map((r) => {
      const vendorModel = `${r.tool.vendor[lang]} · ${r.tool.model}`;
      const version = r.latestVersion ? `\`${r.latestVersion}\`` : "—";
      const published = r.latestPublishedAt ? r.latestPublishedAt.slice(0, 10) : "—";
      const status = !r.fetchSuccess ? c.statusFail[lang] : r.isNew ? c.statusNew[lang] : "—";
      return `| ${r.tool.name} | ${vendorModel} | ${version} | ${published} | ${status} |`;
    })
    .join("\n");

  return `\n\n---\n\n## ${c.heading[lang]}\n\n> ${c.note[lang]}\n\n${head}\n${rows}\n`;
}

// ---------------------------------------------------------------------------
// CLI Report
// ---------------------------------------------------------------------------

export function buildCliReportContent(
  cliDigests: RepoDigest[],
  skillsSummary: string,
  comparison: string,
  utcStr: string,
  dateStr: string,
  footer: string,
  skillsRepo: string,
  closedReleases: ClosedToolRelease[] = [],
  lang: Lang = "zh",
): string {
  const repoLinks =
    cliDigests.map((d) => `- [${d.config.name}](https://github.com/${d.config.repo})`).join("\n") +
    `\n- [Claude Code Skills](https://github.com/${skillsRepo})`;

  const title = `# ${CLI_REPORT.title[lang]} ${dateStr}\n\n`;
  const meta = CLI_REPORT.meta(utcStr, cliDigests.length, lang);

  const skillsSection =
    `## ${CLI_REPORT.skillsHeading[lang]}\n\n` +
    `> ${CLI_REPORT.skillsSource[lang]}: [anthropics/skills](https://github.com/${skillsRepo})\n\n` +
    `${skillsSummary}\n\n---\n\n`;

  const toolSections = cliDigests
    .map((d) => {
      const skills = d.config.id === "claude-code" ? skillsSection : "";
      return [
        `<details>`,
        `<summary><strong>${d.config.name}</strong> — <a href="https://github.com/${d.config.repo}">${d.config.repo}</a></summary>`,
        ``,
        skills + d.summary,
        ``,
        `</details>`,
      ].join("\n");
    })
    .join("\n\n");

  return (
    title +
    meta +
    `${repoLinks}\n\n` +
    `---\n\n` +
    `## ${CLI_REPORT.comparison[lang]}\n\n` +
    comparison +
    `\n\n---\n\n` +
    `## ${CLI_REPORT.detail[lang]}\n\n` +
    toolSections +
    buildClosedSection(closedReleases, lang) +
    footer
  );
}

// ---------------------------------------------------------------------------
// OpenClaw Report
// ---------------------------------------------------------------------------

export function buildOpenclawReportContent(
  fetchedOpenclaw: RepoFetch,
  peerDigests: RepoDigest[],
  openclawSummary: string,
  peersComparison: string,
  utcStr: string,
  dateStr: string,
  footer: string,
  openclaw: RepoConfig,
  openclawPeers: RepoConfig[],
  lang: Lang = "zh",
): string {
  const { issues, prs } = fetchedOpenclaw;

  const peersRepoLinks =
    `- [OpenClaw](https://github.com/${openclaw.repo})\n` +
    openclawPeers.map((p) => `- [${p.name}](https://github.com/${p.repo})`).join("\n");

  const peerDetailSections = peerDigests
    .map((d) =>
      [
        `<details>`,
        `<summary><strong>${d.config.name}</strong> — <a href="https://github.com/${d.config.repo}">${d.config.repo}</a></summary>`,
        ``,
        d.summary,
        ``,
        `</details>`,
      ].join("\n"),
    )
    .join("\n\n");

  const title = `# ${OPENCLAW_REPORT.title[lang]} ${dateStr}\n\n`;
  const meta =
    lang === "en"
      ? `> Issues: ${issues.length} | PRs: ${prs.length} | Projects covered: ${1 + openclawPeers.length} | Generated: ${utcStr} UTC\n\n`
      : `> Issues: ${issues.length} | PRs: ${prs.length} | 覆盖项目: ${1 + openclawPeers.length} 个 | 生成时间: ${utcStr} UTC\n\n`;

  return (
    title +
    meta +
    `${peersRepoLinks}\n\n` +
    `---\n\n` +
    `## ${OPENCLAW_REPORT.deepDive[lang]}\n\n` +
    openclawSummary +
    `\n\n---\n\n` +
    `## ${OPENCLAW_REPORT.comparison[lang]}\n\n` +
    peersComparison +
    `\n\n---\n\n` +
    `## ${OPENCLAW_REPORT.peers[lang]}\n\n` +
    peerDetailSections +
    footer
  );
}
