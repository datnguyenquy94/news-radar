/**
 * LLM prompt builders for the weekly and monthly rollup reports.
 */

import type { Lang } from "../../core/i18n/index.ts";

export function buildWeeklyPrompt(
  dailyDigests: Record<string, string>,
  weekStr: string,
  lang: Lang = "vi",
): string {
  const digestEntries = Object.entries(dailyDigests)
    .map(([date, content]) => `## ${date}\n\n${content}`)
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a technical analyst focused on the AI open-source ecosystem. The following are daily digest summaries from the past 7 days (${weekStr}) of AI tool community activity. Generate a comprehensive weekly recap.

${digestEntries}

---

Generate an AI Tools Ecosystem Weekly Report with these sections:

1. **Week's Top Stories** - 5-8 most important events, releases, and community developments this week, each with date
2. **CLI Tools Progress** - Overall activity and key changes for each AI CLI tool (Claude Code, Codex, Gemini CLI, etc.)
3. **AI Agent Ecosystem** - Key developments from OpenClaw and peer projects this week
4. **Open Source Trends** - Most notable technical directions from GitHub Trending and AI community this week
5. **HN Community Highlights** - Core AI discussion topics and community sentiment on Hacker News this week
6. **Official Announcements** - Important content published by Anthropic and OpenAI this week (if any)
7. **Next Week's Signals** - Based on this week's data, predict trends and upcoming events worth watching

Style: English, concise and professional, helping technical developers quickly grasp the week's developments.
`;
  }

  return `Bạn là một nhà phân tích kỹ thuật chuyên về hệ sinh thái mã nguồn mở AI. Dưới đây là tóm tắt bản tin hàng ngày của 7 ngày qua (${weekStr}) về hoạt động của cộng đồng công cụ AI, hãy tạo một báo cáo tổng hợp tuần toàn diện.

${digestEntries}

---

Hãy tạo "báo cáo tuần hệ sinh thái công cụ AI", gồm các phần sau:

1. **Sự kiện nổi bật trong tuần** - 5-8 sự kiện, phiên bản phát hành, động thái cộng đồng quan trọng nhất trong tuần, mỗi mục kèm ngày tháng
2. **Tiến độ công cụ CLI** - Diễn biến tổng thể và thay đổi then chốt trong tuần của từng công cụ AI CLI (Claude Code, Codex, Gemini CLI, v.v.)
3. **Hệ sinh thái AI Agent** - Tiến triển quan trọng của OpenClaw và các dự án cùng lĩnh vực trong tuần
4. **Xu hướng mã nguồn mở** - Hướng kỹ thuật được quan tâm nhất trên GitHub Trending và cộng đồng AI trong tuần
5. **Điểm nóng cộng đồng HN** - Chủ đề thảo luận AI cốt lõi và tâm lý cộng đồng trên Hacker News trong tuần
6. **Thông báo chính thức** - Nội dung quan trọng do Anthropic và OpenAI phát hành trong tuần (nếu có)
7. **Tín hiệu cho tuần tới** - Dựa trên dữ liệu tuần này, dự đoán xu hướng và sự kiện sắp tới đáng theo dõi

Yêu cầu: tiếng Việt, ngắn gọn, chuyên nghiệp, giúp nhà phát triển kỹ thuật nắm nhanh diễn biến trong tuần.
`;
}

export function buildMonthlyPrompt(
  sourceDigests: Record<string, string>,
  monthStr: string,
  lang: Lang = "vi",
): string {
  const digestEntries = Object.entries(sourceDigests)
    .map(([key, content]) => `## ${key}\n\n${content}`)
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a technical analyst focused on the AI open-source ecosystem. The following are ${monthStr} AI tool community digest summaries (${Object.keys(sourceDigests).length} reports total). Generate a comprehensive monthly review.

${digestEntries}

---

Generate an AI Tools Ecosystem Monthly Report with these sections:

1. **Month's Top Stories** - 5-10 most important events and milestones this month, in chronological order
2. **CLI Tools Monthly Progress** - Overall development trajectory, major releases, and community growth for each key AI CLI tool
3. **AI Agent Ecosystem Monthly Review** - Ecosystem landscape shifts, emerging projects, notable signals this month
4. **Technical Trend Summary** - Most significant technical directions and paradigm shifts in AI open-source this month
5. **Community Health Assessment** - Monthly activity comparison across major projects, developer engagement evaluation
6. **Official Announcements Review** - Strategic analysis of Anthropic and OpenAI content published this month
7. **Next Month's Outlook** - Based on this month's trends, predict key directions and potential events to watch

Style: English, in-depth analysis, data-driven, suited for monthly retrospectives and strategic decision-making.
`;
  }

  return `Bạn là một nhà phân tích kỹ thuật chuyên về hệ sinh thái mã nguồn mở AI. Dưới đây là tổng hợp diễn biến cộng đồng công cụ AI tháng ${monthStr} (tổng cộng ${Object.keys(sourceDigests).length} báo cáo), hãy tạo một báo cáo tổng hợp tháng toàn diện.

${digestEntries}

---

Hãy tạo "báo cáo tháng hệ sinh thái công cụ AI", gồm các phần sau:

1. **Sự kiện nổi bật trong tháng** - 5-10 sự kiện và cột mốc quan trọng nhất trong tháng, sắp xếp theo thời gian
2. **Tiến độ hàng tháng của công cụ CLI** - Quỹ đạo phát triển tổng thể, phiên bản quan trọng, thay đổi quy mô cộng đồng của từng công cụ AI CLI chính
3. **Tổng kết tháng hệ sinh thái AI Agent** - Thay đổi bức tranh hệ sinh thái, dự án mới nổi, tín hiệu đáng chú ý trong tháng
4. **Tổng kết xu hướng kỹ thuật** - Hướng kỹ thuật và thay đổi mô hình nổi bật nhất trong lĩnh vực mã nguồn mở AI tháng này
5. **Đánh giá sức khỏe cộng đồng** - So sánh mức độ hoạt động hàng tháng giữa các dự án chính, đánh giá mức độ tham gia của nhà phát triển
6. **Tổng kết thông báo chính thức** - Phân tích ý nghĩa chiến lược của nội dung do Anthropic và OpenAI phát hành trong tháng
7. **Triển vọng tháng tới** - Dựa trên xu hướng tháng này, dự đoán các hướng đi chính và sự kiện tiềm năng đáng theo dõi

Yêu cầu: tiếng Việt, phân tích chuyên sâu, dựa trên dữ liệu, phù hợp cho tổng kết hàng tháng và tham khảo ra quyết định chiến lược.
`;
}
