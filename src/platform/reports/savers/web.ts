/**
 * Report saver — LLM call + file save + optional GitHub issue.
 * Extracted from index.ts for separation of concerns.
 */

import { type Lang, WEB_REPORT, ISSUE_LABELS } from "../../../core/i18n/index.ts";
import { buildWebReportPrompt } from "../../prompts/index.ts";
import { callLlm, LLM_TOKENS_WEB } from "../../llm/client.ts";
import { saveFile } from "../files.ts";
import { tryCreateGitHubIssue } from "../../publish/github-issues.ts";
import { type WebFetchResult } from "../../../feeds/ai/web.ts";
import { createLogger } from "../../../core/logger.ts";

const log = createLogger("report:web");

// ---------------------------------------------------------------------------
// Web report
// ---------------------------------------------------------------------------

export async function saveWebReport(
  webResults: WebFetchResult[],
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "vi",
): Promise<void> {
  const hasNewContent = webResults.some((r) => r.newItems.length > 0);

  if (hasNewContent) {
    log.info({ lang }, "Calling LLM for web content report...");
    try {
      const webSummary = await callLlm(buildWebReportPrompt(webResults, dateStr, lang), LLM_TOKENS_WEB);
      const isFirstRun = webResults.some((r) => r.isFirstRun);
      const totalNew = webResults.reduce((sum, r) => sum + r.newItems.length, 0);

      const anthropicNew = webResults.find((r) => r.site === "anthropic")?.newItems.length ?? 0;
      const anthropicTotal = webResults.find((r) => r.site === "anthropic")?.totalDiscovered ?? 0;
      const openaiNew = webResults.find((r) => r.site === "openai")?.newItems.length ?? 0;
      const openaiTotal = webResults.find((r) => r.site === "openai")?.totalDiscovered ?? 0;

      const fileName = lang === "en" ? "ai-web-en.md" : "ai-web.md";
      const mode = isFirstRun ? WEB_REPORT.firstCrawl[lang] : WEB_REPORT.todayUpdate[lang];

      const webTitle = `# ${WEB_REPORT.title[lang]} ${dateStr}\n\n`;
      const webMeta = `> ${mode} | ${WEB_REPORT.newContent(totalNew, lang)} | ${WEB_REPORT.generated(utcStr, lang)}\n\n`;
      const webSources =
        lang === "en"
          ? `${WEB_REPORT.sourcesHeader[lang]}\n` +
            `- Anthropic: [anthropic.com](https://www.anthropic.com) — ${anthropicNew} new articles (sitemap total: ${anthropicTotal})\n` +
            `- OpenAI: [openai.com](https://openai.com) — ${openaiNew} new articles (sitemap total: ${openaiTotal})\n\n`
          : `${WEB_REPORT.sourcesHeader[lang]}\n` +
            `- Anthropic: [anthropic.com](https://www.anthropic.com) — ${anthropicNew} bài mới (sitemap tổng: ${anthropicTotal})\n` +
            `- OpenAI: [openai.com](https://openai.com) — ${openaiNew} bài mới (sitemap tổng: ${openaiTotal})\n\n`;

      const webContent = webTitle + webMeta + webSources + `---\n\n` + webSummary + footer;

      log.info(`Saved ${saveFile(webContent, dateStr, fileName)}`);

      if (digestRepo) {
        const issueTitle = WEB_REPORT.issueTitle(dateStr, isFirstRun, lang);
        const webLabel = ISSUE_LABELS.web[lang];
        const webUrl = await tryCreateGitHubIssue(issueTitle, webContent, webLabel);
        if (webUrl) log.info(`Created web issue (${lang}): ${webUrl}`);
      }
    } catch (err) {
      log.error({ lang }, `Report generation failed: ${err}`);
    }
  } else {
    log.info({ lang }, "No new content detected, skipping report.");
  }
}
