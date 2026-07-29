/**
 * Report saver — LLM call + file save + optional GitHub issue.
 * Extracted from index.ts for separation of concerns.
 */

import { type Lang, ARXIV_REPORT, ISSUE_LABELS } from "../../../core/i18n/index.ts";
import { buildArxivPrompt } from "../../prompts/index.ts";
import { callLlm, LLM_TOKENS_LISTING } from "../../llm/client.ts";
import { saveFile } from "../files.ts";
import { tryCreateGitHubIssue } from "../../../domains/github/github.ts";
import type { ArxivData } from "../../../domains/ai/arxiv.ts";

// ---------------------------------------------------------------------------
// ArXiv report
// ---------------------------------------------------------------------------

export async function saveArxivReport(
  arxivData: ArxivData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!arxivData.fetchSuccess) {
    console.log(`  [arxiv/${lang}] No data available, skipping report.`);
    return;
  }

  console.log(`  [arxiv/${lang}] Calling LLM for ArXiv report...`);
  try {
    const summary = await callLlm(buildArxivPrompt(arxivData, dateStr, lang), LLM_TOKENS_LISTING);
    const fileName = lang === "en" ? "ai-arxiv-en.md" : "ai-arxiv.md";
    const header =
      lang === "en"
        ? `# ${ARXIV_REPORT.title[lang]} ${dateStr}\n\n` +
          `> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | ` +
          `${arxivData.papers.length} papers | Generated: ${utcStr} UTC\n\n` +
          `---\n\n`
        : `# ${ARXIV_REPORT.title[lang]} ${dateStr}\n\n` +
          `> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | ` +
          `共 ${arxivData.papers.length} 篇论文 | 生成时间: ${utcStr} UTC\n\n` +
          `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = ARXIV_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.arxiv[lang];
      const url = await tryCreateGitHubIssue(title, content, label);
      if (url) console.log(`  Created ArXiv issue (${lang}): ${url}`);
    }
  } catch (err) {
    console.error(`  [arxiv/${lang}] Report generation failed: ${err}`);
  }
}
