/**
 * Report saver — LLM call + file save + optional GitHub issue.
 * Extracted from index.ts for separation of concerns.
 */

import { type Lang, PH_REPORT, ISSUE_LABELS } from "../../../core/i18n/index.ts";
import { buildPhPrompt } from "../../prompts/index.ts";
import { callLlm, LLM_TOKENS_LISTING } from "../../llm/client.ts";
import { saveFile } from "../files.ts";
import { tryCreateGitHubIssue } from "../../publish/github-issues.ts";
import type { PhData } from "../../../feeds/ai/ph.ts";
import { createLogger } from "../../../core/logger.ts";

const log = createLogger("report:ph");

// ---------------------------------------------------------------------------
// Product Hunt
// ---------------------------------------------------------------------------

export async function savePhReport(
  phData: PhData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "vi",
): Promise<void> {
  if (!phData.fetchSuccess) {
    log.info({ lang }, "No data available, skipping report.");
    return;
  }

  log.info({ lang }, "Calling LLM for Product Hunt report...");
  try {
    const phSummary = await callLlm(buildPhPrompt(phData, dateStr, lang), LLM_TOKENS_LISTING);
    const fileName = lang === "en" ? "ai-ph-en.md" : "ai-ph.md";
    const header =
      lang === "en"
        ? `# ${PH_REPORT.title[lang]} ${dateStr}\n\n` +
          "> Source: [Product Hunt](https://www.producthunt.com/) | " +
          `${phData.products.length} products | Generated: ${utcStr} UTC\n\n` +
          `---\n\n`
        : `# ${PH_REPORT.title[lang]} ${dateStr}\n\n` +
          "> Nguồn dữ liệu: [Product Hunt](https://www.producthunt.com/) | " +
          `${phData.products.length} sản phẩm | Thời gian tạo: ${utcStr} UTC\n\n` +
          `---\n\n`;

    const phContent = header + phSummary + footer;

    log.info(`Saved ${saveFile(phContent, dateStr, fileName)}`);

    if (digestRepo) {
      const phTitle = PH_REPORT.issueTitle(dateStr, lang);
      const phLabel = ISSUE_LABELS.ph[lang];
      const phUrl = await tryCreateGitHubIssue(phTitle, phContent, phLabel);
      if (phUrl) log.info(`Created PH issue (${lang}): ${phUrl}`);
    }
  } catch (err) {
    log.error({ lang }, `Report generation failed: ${err}`);
  }
}
