/**
 * Report saver — LLM call + file save + optional GitHub issue.
 */

import { type Lang, VNRATES_REPORT, ISSUE_LABELS } from "../../../core/i18n/index.ts";
import { buildVnRatesPrompt } from "../../prompts/index.ts";
import { callLlm, LLM_TOKENS_VNMACRO } from "../../llm/client.ts";
import { saveFile } from "../files.ts";
import { tryCreateGitHubIssue } from "../../publish/github-issues.ts";
import type { VnRatesData } from "../../../feeds/finance/vnrates.ts";
import { createLogger } from "../../../core/logger.ts";

const log = createLogger("report:vnrates");

// ---------------------------------------------------------------------------
// Vietnam interest rate dashboard (SBV + FRED + Vietcombank)
// ---------------------------------------------------------------------------

export async function saveVnRatesReport(
  data: VnRatesData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "vi",
): Promise<void> {
  // The interbank board is the report's only live signal; the policy board on
  // its own is a constant that has not moved since June 2023.
  if (!data.fetchSuccess) {
    log.info({ lang }, "No SBV interbank data available, skipping report.");
    return;
  }

  log.info({ lang }, "Calling LLM for Vietnam interest rate dashboard...");
  try {
    const summary = await callLlm(buildVnRatesPrompt(data, dateStr, lang), LLM_TOKENS_VNMACRO);
    const fileName = lang === "en" ? "fin-vnrates-en.md" : "fin-vnrates.md";
    const sources =
      "[SBV](https://sbv.gov.vn/) + [FRED](https://fred.stlouisfed.org/) + " +
      "[Vietcombank](https://www.vietcombank.com.vn/)";
    const session = data.interbank?.asOf ?? "";
    const header =
      lang === "en"
        ? `# ${VNRATES_REPORT.title[lang]} ${dateStr}\n\n` +
          `> Sources: ${sources} | Interbank session: ${session || "n/a"} | ` +
          `${data.interbank?.sessions ?? 0} sessions retrieved | Generated: ${utcStr} UTC\n>\n` +
          `> ⚠️ ${VNRATES_REPORT.disclaimer[lang]}.\n\n---\n\n`
        : `# ${VNRATES_REPORT.title[lang]} ${dateStr}\n\n` +
          `> Nguồn dữ liệu: ${sources} | Phiên liên ngân hàng: ${session || "chưa có"} | ` +
          `Đã lấy ${data.interbank?.sessions ?? 0} phiên | Thời gian tạo: ${utcStr} UTC\n>\n` +
          `> ⚠️ ${VNRATES_REPORT.disclaimer[lang]}.\n\n---\n\n`;

    const content = header + summary + footer;

    log.info(`Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = VNRATES_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.vnrates[lang];
      const url = await tryCreateGitHubIssue(title, content, label);
      if (url) log.info(`Created Vietnam rates issue (${lang}): ${url}`);
    }
  } catch (err) {
    log.error({ lang }, `Report generation failed: ${err}`);
  }
}
