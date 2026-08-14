/**
 * Report saver — LLM call + file save + optional GitHub issue.
 * Extracted from index.ts for separation of concerns.
 */

import { type Lang, HN_REPORT, ISSUE_LABELS } from "../../../core/i18n/index.ts";
import { buildHnPrompt } from "../../prompts/index.ts";
import { callLlm, LLM_TOKENS_LISTING } from "../../llm/client.ts";
import { saveFile } from "../files.ts";
import { tryCreateGitHubIssue } from "../../publish/github-issues.ts";
import type { HnData } from "../../../feeds/ai/hn.ts";
import { createLogger } from "../../../core/logger.ts";

const log = createLogger("report:hn");

// ---------------------------------------------------------------------------
// Hacker News report
// ---------------------------------------------------------------------------

export async function saveHnReport(
  hnData: HnData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "vi",
): Promise<void> {
  if (!hnData.fetchSuccess) {
    log.info({ lang }, "No data available, skipping report.");
    return;
  }

  log.info({ lang }, "Calling LLM for HN report...");
  try {
    const hnSummary = await callLlm(buildHnPrompt(hnData, dateStr, lang), LLM_TOKENS_LISTING);
    const fileName = lang === "en" ? "ai-hn-en.md" : "ai-hn.md";
    const header =
      lang === "en"
        ? `# ${HN_REPORT.title[lang]} ${dateStr}\n\n` +
          "> Source: [Hacker News](https://news.ycombinator.com/) | " +
          `${hnData.stories.length} stories | Generated: ${utcStr} UTC\n\n` +
          `---\n\n`
        : `# ${HN_REPORT.title[lang]} ${dateStr}\n\n` +
          "> Nguồn dữ liệu: [Hacker News](https://news.ycombinator.com/) | " +
          `${hnData.stories.length} bài | Thời gian tạo: ${utcStr} UTC\n\n` +
          `---\n\n`;

    const hnContent = header + hnSummary + footer;

    log.info(`Saved ${saveFile(hnContent, dateStr, fileName)}`);

    if (digestRepo) {
      const hnTitle = HN_REPORT.issueTitle(dateStr, lang);
      const hnLabel = ISSUE_LABELS.hn[lang];
      const hnUrl = await tryCreateGitHubIssue(hnTitle, hnContent, hnLabel);
      if (hnUrl) log.info(`Created HN issue (${lang}): ${hnUrl}`);
    }
  } catch (err) {
    log.error({ lang }, `Report generation failed: ${err}`);
  }
}
