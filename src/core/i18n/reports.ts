/**
 * Report headers, titles, issue titles and issue labels.
 */

import { type Lang, t } from "./lang.ts";

// ---------------------------------------------------------------------------
// Report headers & labels (used in report-builders.ts, index.ts, rollup.ts)
// ---------------------------------------------------------------------------

export const CLI_REPORT = {
  title: t("AI CLI 工具社区动态日报", "AI CLI Tools Community Digest"),
  meta: (utcStr: string, count: number, lang: Lang) =>
    lang === "en"
      ? `> Generated: ${utcStr} UTC | Tools covered: ${count}\n\n`
      : `> 生成时间: ${utcStr} UTC | 覆盖工具: ${count} 个\n\n`,
  skillsHeading: t("Claude Code Skills 社区热点", "Claude Code Skills Highlights"),
  skillsSource: t("数据来源", "Source"),
  comparison: t("横向对比", "Cross-Tool Comparison"),
  detail: t("各工具详细报告", "Per-Tool Reports"),
} as const;

export const OPENCLAW_REPORT = {
  title: t("OpenClaw 生态日报", "OpenClaw Ecosystem Digest"),
  deepDive: t("OpenClaw 项目深度报告", "OpenClaw Deep Dive"),
  comparison: t("横向生态对比", "Cross-Ecosystem Comparison"),
  peers: t("同赛道项目详细报告", "Peer Project Reports"),
} as const;

export const WEB_REPORT = {
  title: t("AI 官方内容追踪报告", "Official AI Content Report"),
  firstCrawl: t("首次全量", "First full crawl"),
  todayUpdate: t("今日更新", "Today's update"),
  newContent: (count: number, lang: Lang) =>
    lang === "en" ? `New content: ${count} articles` : `新增内容: ${count} 篇`,
  generated: (utcStr: string, lang: Lang) =>
    lang === "en" ? `Generated: ${utcStr} UTC` : `生成时间: ${utcStr} UTC`,
  sourcesHeader: t("数据来源:", "Sources:"),
  issueTitle: (dateStr: string, isFirstRun: boolean, lang: Lang) =>
    lang === "en"
      ? `🌐 Official AI Content Report ${dateStr}${isFirstRun ? " (First Crawl)" : ""}`
      : `🌐 AI 官方内容追踪报告 ${dateStr}${isFirstRun ? "（首次全量）" : ""}`,
} as const;

export const TRENDING_REPORT = {
  title: t("AI 开源趋势日报", "AI Open Source Trends"),
  sources: t("数据来源: GitHub Trending + GitHub Search API", "Sources: GitHub Trending + GitHub Search API"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `📈 AI Open Source Trends ${dateStr}` : `📈 AI 开源趋势日报 ${dateStr}`,
} as const;

export const HN_REPORT = {
  title: t("Hacker News AI 社区动态日报", "Hacker News AI Community Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `📰 Hacker News AI Digest ${dateStr}` : `📰 Hacker News AI 社区动态日报 ${dateStr}`,
} as const;

export const PH_REPORT = {
  title: t("Product Hunt AI 产品日报", "Product Hunt AI Products Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `🚀 Product Hunt AI Digest ${dateStr}` : `🚀 Product Hunt AI 产品日报 ${dateStr}`,
} as const;

export const ARXIV_REPORT = {
  title: t("ArXiv AI 研究日报", "ArXiv AI Research Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `📚 ArXiv AI Research Digest ${dateStr}` : `📚 ArXiv AI 研究日报 ${dateStr}`,
} as const;

export const HF_REPORT = {
  title: t("Hugging Face 热门模型日报", "Hugging Face Trending Models Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `🤗 Hugging Face Trending Models ${dateStr}` : `🤗 Hugging Face 热门模型日报 ${dateStr}`,
} as const;

export const COMMUNITY_REPORT = {
  title: t("技术社区 AI 动态日报", "Tech Community AI Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `💬 Tech Community AI Digest ${dateStr}` : `💬 技术社区 AI 动态日报 ${dateStr}`,
} as const;

export const MACRO_REPORT = {
  title: t("宏观市场仪表盘", "Macro Market Dashboard"),
  sources: t("数据来源: FRED + FINRA", "Sources: FRED + FINRA"),
  disclaimer: t("仅供参考，非投资建议", "Informational only, not financial advice"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `📉 Macro Market Dashboard ${dateStr}` : `📉 宏观市场仪表盘 ${dateStr}`,
} as const;

export const VNMACRO_REPORT = {
  title: t("越南宏观市场仪表盘", "Vietnam Macro Market Dashboard"),
  sources: t(
    "数据来源: SSI + Entrade + Vietcombank + NSO + VBMA",
    "Sources: SSI + Entrade + Vietcombank + NSO + VBMA",
  ),
  disclaimer: t("仅供参考，非投资建议", "Informational only, not financial advice"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `🇻🇳 Vietnam Macro Market Dashboard ${dateStr}` : `🇻🇳 越南宏观市场仪表盘 ${dateStr}`,
} as const;

export const WEEKLY_REPORT = {
  title: t("AI 工具生态周报", "AI Tools Ecosystem Weekly Report"),
  coverage: t("覆盖日期", "Coverage"),
  issueTitle: (weekStr: string) => `📅 AI 工具生态周报 ${weekStr}`,
} as const;

export const MONTHLY_REPORT = {
  title: t("AI 工具生态月报", "AI Tools Ecosystem Monthly Report"),
  issueTitle: (monthStr: string) => `📆 AI 工具生态月报 ${monthStr}`,
} as const;

export const ISSUE_LABELS = {
  cli: t("digest", "digest-en"),
  openclaw: t("openclaw", "openclaw-en"),
  web: t("web", "web-en"),
  trending: t("trending", "trending-en"),
  hn: t("hn", "hn-en"),
  ph: t("ph", "ph-en"),
  arxiv: t("arxiv", "arxiv-en"),
  hf: t("hf", "hf-en"),
  community: t("community", "community-en"),
  macro: t("macro", "macro-en"),
  vnmacro: t("vnmacro", "vnmacro-en"),
} as const;

export const CLI_ISSUE_TITLE = (dateStr: string, lang: Lang) =>
  lang === "en" ? `📊 AI CLI Tools Digest ${dateStr}` : `📊 AI CLI 工具社区动态日报 ${dateStr}`;

export const OPENCLAW_ISSUE_TITLE = (dateStr: string, lang: Lang) =>
  lang === "en" ? `🦞 OpenClaw Ecosystem Digest ${dateStr}` : `🦞 OpenClaw 生态日报 ${dateStr}`;
