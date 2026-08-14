/**
 * Report saver — LLM call + file save + optional GitHub issue.
 * Extracted from index.ts for separation of concerns.
 */

import { type Lang, COMMUNITY_REPORT, ISSUE_LABELS } from "../../../core/i18n/index.ts";
import { buildCommunityPrompt } from "../../prompts/index.ts";
import { callLlm, LLM_TOKENS_LISTING } from "../../llm/client.ts";
import { saveFile } from "../files.ts";
import { tryCreateGitHubIssue } from "../../publish/github-issues.ts";
import type { CommunityData } from "../../../feeds/ai/community.ts";
import { createLogger } from "../../../core/logger.ts";

const log = createLogger("report:community");

// ---------------------------------------------------------------------------
// Community report (Dev.to + Lobste.rs)
// ---------------------------------------------------------------------------

export async function saveCommunityReport(
  data: CommunityData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "vi",
): Promise<void> {
  if (!data.fetchSuccess) {
    log.info({ lang }, "No data available, skipping report.");
    return;
  }

  log.info({ lang }, "Calling LLM for community report...");
  try {
    const summary = await callLlm(buildCommunityPrompt(data, dateStr, lang), LLM_TOKENS_LISTING);
    const fileName = lang === "en" ? "ai-community-en.md" : "ai-community.md";
    const devtoCount = data.devto.articles.length;
    const lobstersCount = data.lobsters.stories.length;
    const header =
      lang === "en"
        ? `# ${COMMUNITY_REPORT.title[lang]} ${dateStr}\n\n` +
          `> Sources: [Dev.to](https://dev.to/) (${devtoCount} articles) + [Lobste.rs](https://lobste.rs/) (${lobstersCount} stories) | Generated: ${utcStr} UTC\n\n` +
          `---\n\n`
        : `# ${COMMUNITY_REPORT.title[lang]} ${dateStr}\n\n` +
          `> Nguồn dữ liệu: [Dev.to](https://dev.to/) (${devtoCount} bài) + [Lobste.rs](https://lobste.rs/) (${lobstersCount} mục) | Thời gian tạo: ${utcStr} UTC\n\n` +
          `---\n\n`;

    const content = header + summary + footer;

    log.info(`Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = COMMUNITY_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.community[lang];
      const url = await tryCreateGitHubIssue(title, content, label);
      if (url) log.info(`Created community issue (${lang}): ${url}`);
    }
  } catch (err) {
    log.error({ lang }, `Report generation failed: ${err}`);
  }
}
