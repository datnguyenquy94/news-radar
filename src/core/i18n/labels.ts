/**
 * Report labels for the manifest/RSS feed and for notification messages.
 */

import { type Lang, t } from "./lang.ts";

// ---------------------------------------------------------------------------
// Telegram notification labels (used in notify.ts)
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Report labels for manifest/RSS (used in generate-manifest.ts)
// ---------------------------------------------------------------------------

export const REPORT_LABELS: Record<string, string> = {
  "ai-cli": "AI CLI 工具社区动态日报",
  "ai-cli-en": "AI CLI Tools Digest",
  "ai-agents": "AI Agents 生态日报",
  "ai-agents-en": "AI Agents Ecosystem Digest",
  "ai-web": "AI 官方内容追踪报告",
  "ai-web-en": "Official AI Content Report",
  "ai-trending": "AI 开源趋势日报",
  "ai-trending-en": "AI Open Source Trends",
  "ai-hn": "Hacker News AI 社区动态日报",
  "ai-hn-en": "Hacker News AI Community Digest",
  "ai-ph": "Product Hunt AI 产品日报",
  "ai-ph-en": "Product Hunt AI Products Digest",
  "ai-arxiv": "ArXiv AI 研究日报",
  "ai-arxiv-en": "ArXiv AI Research Digest",
  "ai-hf": "Hugging Face 热门模型日报",
  "ai-hf-en": "Hugging Face Trending Models Digest",
  "ai-community": "技术社区 AI 动态日报",
  "ai-community-en": "Tech Community AI Digest",
  "fin-macro": "宏观市场仪表盘",
  "fin-macro-en": "Macro Market Dashboard",
  "fin-vnmacro": "越南宏观市场仪表盘",
  "fin-vnmacro-en": "Vietnam Macro Market Dashboard",
  "ai-weekly": "AI 工具生态周报",
  "ai-weekly-en": "AI Tools Weekly Digest",
  "ai-monthly": "AI 工具生态月报",
  "ai-monthly-en": "AI Tools Monthly Digest",
};

export const NOTIFY_LABELS: Record<string, Record<Lang, string>> = {
  "ai-cli": t("AI CLI 工具", "AI CLI Tools"),
  "ai-agents": t("AI Agents 生态", "AI Agents Ecosystem"),
  "ai-web": t("官网动态", "Official Updates"),
  "ai-trending": t("GitHub 趋势", "GitHub Trends"),
  "ai-hn": t("HN 社区动态", "HN Community"),
  "ai-ph": t("Product Hunt", "Product Hunt"),
  "ai-arxiv": t("ArXiv 研究", "ArXiv Research"),
  "ai-hf": t("HF 模型", "HF Models"),
  "ai-community": t("技术社区", "Tech Community"),
  "fin-macro": t("宏观仪表盘", "Macro Dashboard"),
  "fin-vnmacro": t("越南宏观仪表盘", "Vietnam Macro"),
  "ai-weekly": t("AI 工具生态周报", "AI Tools Weekly"),
  "ai-monthly": t("AI 工具生态月报", "AI Tools Monthly"),
};
