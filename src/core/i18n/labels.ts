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
  "ai-cli": "Bản tin hàng ngày Cộng đồng công cụ AI CLI",
  "ai-cli-en": "AI CLI Tools Digest",
  "ai-agents": "Bản tin hàng ngày hệ sinh thái AI Agents",
  "ai-agents-en": "AI Agents Ecosystem Digest",
  "ai-web": "Báo cáo theo dõi nội dung chính thức AI",
  "ai-web-en": "Official AI Content Report",
  "ai-trending": "Bản tin xu hướng mã nguồn mở AI",
  "ai-trending-en": "AI Open Source Trends",
  "ai-hn": "Bản tin cộng đồng Hacker News AI",
  "ai-hn-en": "Hacker News AI Community Digest",
  "ai-ph": "Bản tin sản phẩm AI trên Product Hunt",
  "ai-ph-en": "Product Hunt AI Products Digest",
  "ai-arxiv": "Bản tin nghiên cứu AI trên ArXiv",
  "ai-arxiv-en": "ArXiv AI Research Digest",
  "ai-hf": "Bản tin mô hình nổi bật trên Hugging Face",
  "ai-hf-en": "Hugging Face Trending Models Digest",
  "ai-community": "Bản tin AI từ cộng đồng công nghệ",
  "ai-community-en": "Tech Community AI Digest",
  "fin-macro": "Bảng theo dõi thị trường vĩ mô",
  "fin-macro-en": "Macro Market Dashboard",
  "fin-vnmacro": "Bảng theo dõi thị trường vĩ mô Việt Nam",
  "fin-vnmacro-en": "Vietnam Macro Market Dashboard",
  "fin-vnrates": "Bảng theo dõi lãi suất vĩ mô Việt Nam",
  "fin-vnrates-en": "Vietnam Interest Rate Macro Dashboard",
  "ai-weekly": "Báo cáo tuần hệ sinh thái công cụ AI",
  "ai-weekly-en": "AI Tools Weekly Digest",
  "ai-monthly": "Báo cáo tháng hệ sinh thái công cụ AI",
  "ai-monthly-en": "AI Tools Monthly Digest",
};

export const NOTIFY_LABELS: Record<string, Record<Lang, string>> = {
  "ai-cli": t("Công cụ AI CLI", "AI CLI Tools"),
  "ai-agents": t("Hệ sinh thái AI Agents", "AI Agents Ecosystem"),
  "ai-web": t("Cập nhật chính thức", "Official Updates"),
  "ai-trending": t("Xu hướng GitHub", "GitHub Trends"),
  "ai-hn": t("Cộng đồng HN", "HN Community"),
  "ai-ph": t("Product Hunt", "Product Hunt"),
  "ai-arxiv": t("Nghiên cứu ArXiv", "ArXiv Research"),
  "ai-hf": t("Mô hình HF", "HF Models"),
  "ai-community": t("Cộng đồng công nghệ", "Tech Community"),
  "fin-macro": t("Bảng vĩ mô", "Macro Dashboard"),
  "fin-vnmacro": t("Bảng vĩ mô Việt Nam", "Vietnam Macro"),
  "fin-vnrates": t("Lãi suất Việt Nam", "Vietnam Rates"),
  "ai-weekly": t("Báo cáo tuần hệ sinh thái công cụ AI", "AI Tools Weekly"),
  "ai-monthly": t("Báo cáo tháng hệ sinh thái công cụ AI", "AI Tools Monthly"),
};
