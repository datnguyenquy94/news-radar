/**
 * LLM prompt builder for the notification highlights.
 */

import type { Lang } from "../../core/i18n/index.ts";

// ---------------------------------------------------------------------------
// Highlights prompt — extracts structured highlights from finished reports
// for use in Telegram notifications.
// ---------------------------------------------------------------------------

export interface ReportHighlights {
  [reportId: string]: string[];
}

export function buildHighlightsPrompt(
  reportContents: Record<string, string>,
  lang: Lang = "vi",
  itemsPerReport: number = 6,
): string {
  const sections = Object.entries(reportContents)
    .map(([id, content]) => `## [${id}]\n\n${content.slice(0, 2000)}`)
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a concise news editor. The following are today's AI ecosystem report excerpts, each labeled with a report ID.

${sections}

---

For each report, extract ${itemsPerReport} of the most noteworthy highlights — the kind that would make a reader want to click through. Each highlight should be a single short sentence (under 60 characters).

Return ONLY valid JSON, no markdown fences, no explanation. Format:
{"ai-cli":["highlight 1","highlight 2",...],"ai-agents":["highlight 1","highlight 2",...],...}

Rules:
- Use the exact report IDs from the [brackets] above as keys
- Only include reports that have meaningful content (skip reports with failure messages or no activity)
- ${itemsPerReport} highlights per report, each under 60 characters
- Focus on: new releases, notable features, trending projects, key discussions
- Be specific: include project names, version numbers, star counts where relevant`;
  }

  return `Bạn là một biên tập viên tin tức súc tích. Dưới đây là các đoạn trích báo cáo hệ sinh thái AI hôm nay, mỗi báo cáo được gắn nhãn bằng một ID.

${sections}

---

Với mỗi báo cáo, hãy rút ra ${itemsPerReport} điểm nổi bật đáng chú ý nhất — loại khiến người đọc muốn nhấp vào xem thêm. Mỗi điểm nổi bật là một câu ngắn gọn (dưới 60 ký tự).

CHỈ trả về JSON hợp lệ, không dùng code fence markdown, không giải thích. Định dạng:
{"ai-cli":["điểm nổi bật 1","điểm nổi bật 2",...],"ai-agents":["điểm nổi bật 1","điểm nổi bật 2",...],...}

Quy tắc:
- Dùng chính xác các ID báo cáo trong [ngoặc vuông] ở trên làm key
- Chỉ bao gồm các báo cáo có nội dung ý nghĩa (bỏ qua báo cáo có thông báo lỗi hoặc không có hoạt động)
- ${itemsPerReport} điểm nổi bật mỗi báo cáo, mỗi điểm dưới 60 ký tự
- Tập trung vào: phiên bản mới phát hành, tính năng đáng chú ý, dự án nổi bật, thảo luận then chốt
- Cụ thể: bao gồm tên dự án, số phiên bản, số lượng star khi có liên quan
- Mỗi điểm nổi bật phải viết bằng tiếng Việt; ngay cả khi văn bản gốc (tiêu đề bài báo, tên mô hình, tiêu đề thảo luận, v.v.) là tiếng Anh, cũng phải dịch sang tiếng Việt, chỉ tên riêng như tên dự án, tên mô hình, tên sản phẩm mới được giữ nguyên tiếng Anh, không được chép nguyên cả câu tiếng Anh`;
}
