/**
 * Report saver — LLM call + file save + optional GitHub issue.
 * Extracted from index.ts for separation of concerns.
 */

import { type Lang, TRENDING_REPORT, ISSUE_LABELS } from "../../../core/i18n/index.ts";
import { saveFile } from "../files.ts";
import { tryCreateGitHubIssue } from "../../../domains/github/github.ts";
import type { TrendingData } from "../../../domains/ai/trending.ts";

// ---------------------------------------------------------------------------
// Trending report
// ---------------------------------------------------------------------------

export async function saveTrendingReport(
  trendingData: TrendingData,
  trendingSummary: string,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "vi",
): Promise<void> {
  const hasData = trendingData.trendingRepos.length > 0 || trendingData.searchRepos.length > 0;
  if (!hasData) {
    console.log(`  [trending/${lang}] No data available, skipping report.`);
    return;
  }

  const fileName = lang === "en" ? "ai-trending-en.md" : "ai-trending.md";
  const header =
    `# ${TRENDING_REPORT.title[lang]} ${dateStr}\n\n` +
    `> ${TRENDING_REPORT.sources[lang]} | ${lang === "en" ? "Generated" : "Thời gian tạo"}: ${utcStr} UTC\n\n---\n\n`;

  const trendingContent = header + trendingSummary + footer;

  console.log(`  Saved ${saveFile(trendingContent, dateStr, fileName)}`);

  if (digestRepo) {
    const trendingTitle = TRENDING_REPORT.issueTitle(dateStr, lang);
    const trendingLabel = ISSUE_LABELS.trending[lang];
    const trendingUrl = await tryCreateGitHubIssue(trendingTitle, trendingContent, trendingLabel);
    if (trendingUrl) console.log(`  Created trending issue (${lang}): ${trendingUrl}`);
  }
}
