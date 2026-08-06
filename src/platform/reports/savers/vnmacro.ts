/**
 * Report saver — LLM call + file save + optional GitHub issue.
 * Extracted from index.ts for separation of concerns.
 */

import { type Lang, VNMACRO_REPORT, ISSUE_LABELS } from "../../../core/i18n/index.ts";
import { buildVnMacroPrompt } from "../../prompts/index.ts";
import { callLlm, LLM_TOKENS_VNMACRO } from "../../llm/client.ts";
import { saveFile } from "../files.ts";
import { tryCreateGitHubIssue } from "../../../domains/github/github.ts";
import type { VnMarketData } from "../../../domains/vietnam/vnmarket.ts";
import type { VnMacroData } from "../../../domains/vietnam/vnmacro.ts";
import type { VnDocsData } from "../../../domains/vietnam/vndocs.ts";

// ---------------------------------------------------------------------------
// Vietnam macro market dashboard (SSI + Entrade + Vietcombank + NSO + VBMA)
// ---------------------------------------------------------------------------

export async function saveVnMacroReport(
  marketData: VnMarketData,
  macroData: VnMacroData,
  docsData: VnDocsData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "vi",
): Promise<void> {
  // Market internals are the spine of this report; the document excerpts alone
  // would produce a monthly-statistics recap with no market read in it.
  if (!marketData.fetchSuccess) {
    console.log(`  [vnmacro/${lang}] No Vietnam market data available, skipping report.`);
    return;
  }

  console.log(`  [vnmacro/${lang}] Calling LLM for Vietnam macro dashboard...`);
  try {
    const summary = await callLlm(
      buildVnMacroPrompt(marketData, macroData, docsData, dateStr, lang),
      LLM_TOKENS_VNMACRO,
    );
    const fileName = lang === "en" ? "fin-vnmacro-en.md" : "fin-vnmacro.md";
    const sources =
      "[SSI iBoard](https://iboard.ssi.com.vn/) + [Entrade](https://services.entrade.com.vn/) + " +
      "[Vietcombank](https://www.vietcombank.com.vn/) + [NSO](https://www.nso.gov.vn/en/) + " +
      "[VBMA](https://vbma.org.vn/en)";
    const docCount = docsData.docs.length;
    const header =
      lang === "en"
        ? `# ${VNMACRO_REPORT.title[lang]} ${dateStr}\n\n` +
          `> Sources: ${sources} | Trading date: ${marketData.tradingDate || "n/a"} | ` +
          `${docCount} official documents | Generated: ${utcStr} UTC\n>\n` +
          `> ⚠️ ${VNMACRO_REPORT.disclaimer[lang]}.\n\n---\n\n`
        : `# ${VNMACRO_REPORT.title[lang]} ${dateStr}\n\n` +
          `> Nguồn dữ liệu: ${sources} | Ngày giao dịch: ${marketData.tradingDate || "chưa có"} | ` +
          `${docCount} văn bản chính thức | Thời gian tạo: ${utcStr} UTC\n>\n` +
          `> ⚠️ ${VNMACRO_REPORT.disclaimer[lang]}.\n\n---\n\n`;

    const content = header + summary + footer;

    console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);

    if (digestRepo) {
      const title = VNMACRO_REPORT.issueTitle(dateStr, lang);
      const label = ISSUE_LABELS.vnmacro[lang];
      const url = await tryCreateGitHubIssue(title, content, label);
      if (url) console.log(`  Created Vietnam macro issue (${lang}): ${url}`);
    }
  } catch (err) {
    console.error(`  [vnmacro/${lang}] Report generation failed: ${err}`);
  }
}
