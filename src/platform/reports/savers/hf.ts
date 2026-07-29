/**
 * Report saver — LLM call + file save + optional GitHub issue.
 * Extracted from index.ts for separation of concerns.
 */

import { type Lang, HF_REPORT, ISSUE_LABELS } from "../../../core/i18n/index.ts";
import { buildHfPrompt } from "../../prompts/index.ts";
import { callLlm, LLM_TOKENS_LISTING } from "../../llm/client.ts";
import { saveFile } from "../files.ts";
import { tryCreateGitHubIssue } from "../../../domains/github/github.ts";
import type { HfData } from "../../../domains/ai/hf.ts";

// ---------------------------------------------------------------------------
// Hugging Face report
// ---------------------------------------------------------------------------

export async function saveHfReport(
  hfData: HfData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (!hfData.fetchSuccess) {
    console.log(`  [hf/${lang}] No data available, skipping report.`);
    return;
  }

  console.log(`  [hf/${lang}] Calling LLM for Hugging Face report...`);
  try {
    const summary = await callLlm(buildHfPrompt(hfData, dateStr, lang), LLM_TOKENS_LISTING);
    const fileName = lang === "en" ? "ai-hf-en.md" : "ai-hf.md";
    const header =
      lang === "en"
        ? `# ${HF_REPORT.title[lang]} ${dateStr}\n\n` +
          `> Source: [Hugging Face Hub](https://huggingface.co/) | ` +
          `${hfData.models.length} models | Generated: ${utcStr} UTC\n\n` +
          `---\n\n`
        : `# ${HF_REPORT.title[lang]} ${dateStr}\n\n` +
          `> 数据来源: [Hugging Face Hub](https://huggingface.co/) | ` +
          `共 ${hfData.models.length} 个模型 | 生成时间: ${utcStr} UTC\n\n` +
          `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = HF_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.hf[lang];
      const url = await tryCreateGitHubIssue(title, content, label);
      if (url) console.log(`  Created HF issue (${lang}): ${url}`);
    }
  } catch (err) {
    console.error(`  [hf/${lang}] Report generation failed: ${err}`);
  }
}
