/**
 * CLI report content builder — extracted from index.ts for testability.
 */

import type { RepoDigest } from "../../prompts/repos.ts";
import { type Lang, CLI_REPORT } from "../../../core/i18n/index.ts";

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
  lang: Lang = "vi",
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
    footer
  );
}
