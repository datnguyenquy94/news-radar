/**
 * Report headers, titles, issue titles and issue labels.
 */

import { type Lang, t } from "./lang.ts";

// ---------------------------------------------------------------------------
// Report headers & labels (used in report-builders.ts, index.ts, rollup.ts)
// ---------------------------------------------------------------------------

export const CLI_REPORT = {
  title: t("Bản tin hàng ngày Cộng đồng công cụ AI CLI", "AI CLI Tools Community Digest"),
  meta: (utcStr: string, count: number, lang: Lang) =>
    lang === "en"
      ? `> Generated: ${utcStr} UTC | Tools covered: ${count}\n\n`
      : `> Thời gian tạo: ${utcStr} UTC | Số công cụ: ${count}\n\n`,
  skillsHeading: t("Điểm nổi bật cộng đồng Claude Code Skills", "Claude Code Skills Highlights"),
  skillsSource: t("Nguồn dữ liệu", "Source"),
  comparison: t("So sánh chéo", "Cross-Tool Comparison"),
  detail: t("Báo cáo chi tiết từng công cụ", "Per-Tool Reports"),
} as const;

export const OPENCLAW_REPORT = {
  title: t("Bản tin hàng ngày hệ sinh thái OpenClaw", "OpenClaw Ecosystem Digest"),
  deepDive: t("Báo cáo chuyên sâu dự án OpenClaw", "OpenClaw Deep Dive"),
  comparison: t("So sánh hệ sinh thái chéo", "Cross-Ecosystem Comparison"),
  peers: t("Báo cáo chi tiết các dự án cùng lĩnh vực", "Peer Project Reports"),
} as const;

export const WEB_REPORT = {
  title: t("Báo cáo theo dõi nội dung chính thức AI", "Official AI Content Report"),
  firstCrawl: t("Lần thu thập đầy đủ đầu tiên", "First full crawl"),
  todayUpdate: t("Cập nhật hôm nay", "Today's update"),
  newContent: (count: number, lang: Lang) =>
    lang === "en" ? `New content: ${count} articles` : `Nội dung mới: ${count} bài viết`,
  generated: (utcStr: string, lang: Lang) =>
    lang === "en" ? `Generated: ${utcStr} UTC` : `Thời gian tạo: ${utcStr} UTC`,
  sourcesHeader: t("Nguồn dữ liệu:", "Sources:"),
  issueTitle: (dateStr: string, isFirstRun: boolean, lang: Lang) =>
    lang === "en"
      ? `🌐 Official AI Content Report ${dateStr}${isFirstRun ? " (First Crawl)" : ""}`
      : `🌐 Báo cáo theo dõi nội dung chính thức AI ${dateStr}${isFirstRun ? " (Thu thập lần đầu)" : ""}`,
} as const;

export const TRENDING_REPORT = {
  title: t("Bản tin xu hướng mã nguồn mở AI", "AI Open Source Trends"),
  sources: t(
    "Nguồn dữ liệu: GitHub Trending + GitHub Search API",
    "Sources: GitHub Trending + GitHub Search API",
  ),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `📈 AI Open Source Trends ${dateStr}` : `📈 Bản tin xu hướng mã nguồn mở AI ${dateStr}`,
} as const;

export const HN_REPORT = {
  title: t("Bản tin cộng đồng Hacker News AI", "Hacker News AI Community Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `📰 Hacker News AI Digest ${dateStr}` : `📰 Bản tin cộng đồng Hacker News AI ${dateStr}`,
} as const;

export const PH_REPORT = {
  title: t("Bản tin sản phẩm AI trên Product Hunt", "Product Hunt AI Products Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en"
      ? `🚀 Product Hunt AI Digest ${dateStr}`
      : `🚀 Bản tin sản phẩm AI trên Product Hunt ${dateStr}`,
} as const;

export const ARXIV_REPORT = {
  title: t("Bản tin nghiên cứu AI trên ArXiv", "ArXiv AI Research Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en"
      ? `📚 ArXiv AI Research Digest ${dateStr}`
      : `📚 Bản tin nghiên cứu AI trên ArXiv ${dateStr}`,
} as const;

export const HF_REPORT = {
  title: t("Bản tin mô hình nổi bật trên Hugging Face", "Hugging Face Trending Models Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en"
      ? `🤗 Hugging Face Trending Models ${dateStr}`
      : `🤗 Bản tin mô hình nổi bật trên Hugging Face ${dateStr}`,
} as const;

export const COMMUNITY_REPORT = {
  title: t("Bản tin AI từ cộng đồng công nghệ", "Tech Community AI Digest"),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en"
      ? `💬 Tech Community AI Digest ${dateStr}`
      : `💬 Bản tin AI từ cộng đồng công nghệ ${dateStr}`,
} as const;

export const MACRO_REPORT = {
  title: t("Bảng theo dõi thị trường vĩ mô", "Macro Market Dashboard"),
  sources: t("Nguồn dữ liệu: FRED + FINRA", "Sources: FRED + FINRA"),
  disclaimer: t(
    "Chỉ mang tính tham khảo, không phải lời khuyên đầu tư",
    "Informational only, not financial advice",
  ),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `📉 Macro Market Dashboard ${dateStr}` : `📉 Bảng theo dõi thị trường vĩ mô ${dateStr}`,
} as const;

export const VNMACRO_REPORT = {
  title: t("Bảng theo dõi thị trường vĩ mô Việt Nam", "Vietnam Macro Market Dashboard"),
  sources: t(
    "Nguồn dữ liệu: SSI + Entrade + Vietcombank + NSO + VBMA",
    "Sources: SSI + Entrade + Vietcombank + NSO + VBMA",
  ),
  disclaimer: t(
    "Chỉ mang tính tham khảo, không phải lời khuyên đầu tư",
    "Informational only, not financial advice",
  ),
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en"
      ? `🇻🇳 Vietnam Macro Market Dashboard ${dateStr}`
      : `🇻🇳 Bảng theo dõi thị trường vĩ mô Việt Nam ${dateStr}`,
} as const;

export const WEEKLY_REPORT = {
  title: t("Báo cáo tuần hệ sinh thái công cụ AI", "AI Tools Ecosystem Weekly Report"),
  coverage: t("Phạm vi ngày", "Coverage"),
  issueTitle: (weekStr: string) => `📅 Báo cáo tuần hệ sinh thái công cụ AI ${weekStr}`,
} as const;

export const MONTHLY_REPORT = {
  title: t("Báo cáo tháng hệ sinh thái công cụ AI", "AI Tools Ecosystem Monthly Report"),
  issueTitle: (monthStr: string) => `📆 Báo cáo tháng hệ sinh thái công cụ AI ${monthStr}`,
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
  lang === "en"
    ? `📊 AI CLI Tools Digest ${dateStr}`
    : `📊 Bản tin hàng ngày Cộng đồng công cụ AI CLI ${dateStr}`;

export const OPENCLAW_ISSUE_TITLE = (dateStr: string, lang: Lang) =>
  lang === "en"
    ? `🦞 OpenClaw Ecosystem Digest ${dateStr}`
    : `🦞 Bản tin hàng ngày hệ sinh thái OpenClaw ${dateStr}`;
