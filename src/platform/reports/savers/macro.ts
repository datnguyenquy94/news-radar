/**
 * Report saver — LLM call + file save + optional GitHub issue.
 * Extracted from index.ts for separation of concerns.
 */

import { type Lang, MACRO_REPORT, ISSUE_LABELS } from "../../../core/i18n/index.ts";
import { buildMacroPrompt } from "../../prompts/index.ts";
import { callLlm, LLM_TOKENS_LISTING } from "../../llm/client.ts";
import { saveFile } from "../files.ts";
import { tryCreateGitHubIssue } from "../../../domains/github/github.ts";
import type { FredData } from "../../../domains/finance/fred.ts";
import type { FinraData } from "../../../domains/finance/finra.ts";

// ---------------------------------------------------------------------------
// Macro market dashboard (FRED + FINRA)
// ---------------------------------------------------------------------------

export async function saveMacroReport(
  fredData: FredData,
  finraData: FinraData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "vi",
): Promise<void> {
  if (!fredData.fetchSuccess) {
    console.log(`  [macro/${lang}] No FRED data available, skipping report.`);
    return;
  }

  console.log(`  [macro/${lang}] Calling LLM for macro dashboard...`);
  try {
    const summary = await callLlm(buildMacroPrompt(fredData, finraData, dateStr, lang), LLM_TOKENS_LISTING);
    const fileName = lang === "en" ? "fin-macro-en.md" : "fin-macro.md";
    const metricCount = fredData.metrics.filter((m) => m.latest !== null).length;
    const header =
      lang === "en"
        ? `# ${MACRO_REPORT.title[lang]} ${dateStr}\n\n` +
          `> Sources: [FRED](https://fred.stlouisfed.org/) + [FINRA](https://www.finra.org/investors/learn-to-invest/advanced-investing/margin-statistics) | ` +
          `${metricCount} indicators | Generated: ${utcStr} UTC\n>\n> ⚠️ ${MACRO_REPORT.disclaimer[lang]}.\n\n` +
          `---\n\n`
        : `# ${MACRO_REPORT.title[lang]} ${dateStr}\n\n` +
          `> Nguồn dữ liệu: [FRED](https://fred.stlouisfed.org/) + [FINRA](https://www.finra.org/investors/learn-to-invest/advanced-investing/margin-statistics) | ` +
          `${metricCount} chỉ số | Thời gian tạo: ${utcStr} UTC\n>\n> ⚠️ ${MACRO_REPORT.disclaimer[lang]}.\n\n` +
          `---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = MACRO_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.macro[lang];
      const url = await tryCreateGitHubIssue(title, content, label);
      if (url) console.log(`  Created macro issue (${lang}): ${url}`);
    }
  } catch (err) {
    console.error(`  [macro/${lang}] Report generation failed: ${err}`);
  }
}
