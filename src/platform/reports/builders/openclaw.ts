/**
 * OpenClaw report content builder — extracted from index.ts for testability.
 */

import type { RepoConfig } from "../../../core/config.ts";
import type { RepoFetch } from "../../../feeds/ai/repo-activity.ts";
import type { RepoDigest } from "../../prompts/repos.ts";
import { type Lang, OPENCLAW_REPORT } from "../../../core/i18n/index.ts";

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
  lang: Lang = "vi",
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
      : `> Issues: ${issues.length} | PRs: ${prs.length} | Dự án được theo dõi: ${1 + openclawPeers.length} | Thời gian tạo: ${utcStr} UTC\n\n`;

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
