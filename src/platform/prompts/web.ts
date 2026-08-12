/**
 * LLM prompt builder for the official-web-content report.
 */

import type { WebFetchResult } from "../../feeds/ai/web.ts";
import type { Lang } from "../../core/i18n/index.ts";

export function buildWebReportPrompt(results: WebFetchResult[], dateStr: string, lang: Lang = "vi"): string {
  const isAnyFirstRun = results.some((r) => r.isFirstRun);

  const siteSections = results
    .map(({ siteName, isFirstRun, newItems, totalDiscovered }) => {
      const mode =
        lang === "en"
          ? isFirstRun
            ? `First full crawl (sitemap total ${totalDiscovered} URLs, showing latest ${newItems.length} articles)`
            : `Incremental update, ${newItems.length} new articles today`
          : isFirstRun
            ? `Lần thu thập đầy đủ đầu tiên (sitemap tổng ${totalDiscovered} URL, hiển thị ${newItems.length} bài viết mới nhất)`
            : `Cập nhật gia tăng hôm nay, ${newItems.length} bài viết mới`;

      if (newItems.length === 0) {
        const noContent =
          lang === "en" ? `(${mode}, no content to analyze.)` : `(${mode}, chưa có nội dung để phân tích.)`;
        return `## ${siteName}\n\n${noContent}`;
      }

      const categoryLabel = lang === "en" ? "Category" : "Danh mục";
      const dateLabel = lang === "en" ? "Published/Updated" : "Đăng/Cập nhật";
      const unknownDate = lang === "en" ? "unknown" : "chưa rõ";
      const excerptLabel = lang === "en" ? "Excerpt" : "Trích đoạn nội dung";
      const metadataOnlyNote =
        lang === "en"
          ? "(metadata-only: title derived from URL slug, may be inaccurate; no article text available)"
          : "(chỉ có metadata: tiêu đề suy ra từ đường dẫn URL, có thể không chính xác; không lấy được nội dung bài viết)";
      const itemsText = newItems
        .map((item) => {
          const lines = [
            `### [${item.title || item.url}](${item.url})`,
            `- ${categoryLabel}: ${item.category} | ${dateLabel}: ${item.lastmod.slice(0, 10) || unknownDate}`,
          ];
          if (item.content) {
            lines.push(`- ${excerptLabel}: ${item.content}`);
          } else {
            lines.push(`- ${metadataOnlyNote}`);
          }
          return lines.join("\n");
        })
        .join("\n\n");

      const lp = "(";
      const rp = ")";
      return `## ${siteName}${lp}${mode}${rp}\n\n${itemsText}`;
    })
    .join("\n\n---\n\n");

  const firstRunNote =
    lang === "en"
      ? isAnyFirstRun
        ? "This is the first full crawl. Please focus on the overall content landscape, historical context, and core themes of each site, rather than individual articles."
        : "This is an incremental update. Please focus on today's new content and assess its strategic significance in context."
      : isAnyFirstRun
        ? "Đây là lần thu thập đầy đủ đầu tiên, hãy tập trung hệ thống hóa bức tranh nội dung, mạch lịch sử và chủ đề cốt lõi của từng trang, thay vì chỉ chú ý từng bài viết riêng lẻ."
        : "Đây là cập nhật gia tăng, hãy tập trung vào nội dung mới hôm nay và đánh giá ý nghĩa chiến lược của chúng dựa trên bối cảnh.";

  if (lang === "en") {
    return `You are a deep content analyst focused on AI, skilled at extracting strategic signals from official announcements, technical blogs, research papers, and product documentation.

The following content was crawled on ${dateStr} from Anthropic (claude.com / anthropic.com) and OpenAI (openai.com). ${firstRunNote}

${siteSections}

---

Generate a detailed AI Official Content Tracking Report in English with these sections:

1. **Today's Highlights** — 3-5 sentences on the most important new releases or developments, calling out key highlights

2. **Anthropic / Claude Content Highlights** — Organize important content by category (news / research / engineering / learn, etc.):
   - For each piece, 2-4 sentences extracting core insights, technical details, or business significance
   - Note publication date and original link
   - If first full crawl, trace important milestones chronologically

3. **OpenAI Content Highlights** — Same structure, organized by research / release / company / safety categories
   - ⚠️ Note: OpenAI data is metadata-only (titles derived from URL slugs, no article text). Only list URLs and categories objectively. Do NOT speculate on title meanings or fabricate content summaries. If information is insufficient for analysis, state the data limitation clearly.

4. **Strategic Signal Analysis** — Based on both companies' release cadence and content focus, analyze:
   - Each company's recent technical priorities (model capabilities / safety / productization / ecosystem)
   - Competitive dynamics: who is setting the agenda, who is following
   - Potential impact on developers and enterprise users

5. **Notable Details** — Extract hidden signals from titles, phrasing, and timing, e.g.:
   - New terms or topics appearing for the first time
   - Dense releases in a category (may signal a product milestone)
   - Policy, compliance, and safety developments

${isAnyFirstRun ? "6. **Content Landscape Overview** — First full crawl only: summarize the content category distribution for both companies and describe their content strategy style (academic-oriented vs product-oriented vs user stories, etc.)\n\n" : ""}Style: English, professional and detailed, suited for AI researchers, product managers, and technical decision-makers. Every item must include official links.
`;
  }

  return `Bạn là một nhà phân tích nội dung chuyên sâu trong lĩnh vực AI, giỏi rút ra tín hiệu chiến lược từ các thông báo chính thức, blog kỹ thuật, bài nghiên cứu và tài liệu sản phẩm.

Dưới đây là nội dung được thu thập ngày ${dateStr} từ trang web chính thức của Anthropic (claude.com / anthropic.com) và OpenAI (openai.com). ${firstRunNote}

${siteSections}

---

Hãy tạo một "Báo cáo theo dõi nội dung chính thức AI" chi tiết, gồm các phần sau:

1. **Điểm nhanh hôm nay** — Tóm tắt trong 3-5 câu những phát hành hoặc động thái quan trọng nhất, nêu bật các điểm nổi bật cốt lõi

2. **Nội dung nổi bật của Anthropic / Claude** — Sắp xếp nội dung quan trọng theo danh mục (news / research / engineering / learn, v.v.):
   - Mỗi bài dùng 2-4 câu rút ra quan điểm cốt lõi, chi tiết kỹ thuật hoặc ý nghĩa kinh doanh
   - Ghi rõ ngày đăng và liên kết gốc
   - Nếu là lần thu thập đầy đủ đầu tiên, hãy hệ thống hóa các cột mốc quan trọng theo dòng thời gian

3. **Nội dung nổi bật của OpenAI** — Cấu trúc tương tự, sắp xếp theo danh mục research / release / company / safety
   - ⚠️ Lưu ý: dữ liệu OpenAI chỉ ở dạng metadata (tiêu đề suy ra từ đường dẫn URL, không có nội dung bài viết). Chỉ liệt kê khách quan theo URL và danh mục, không được suy đoán ý nghĩa tiêu đề hay bịa nội dung tóm tắt. Nếu thông tin không đủ để phân tích, hãy nêu rõ hạn chế của dữ liệu.

4. **Phân tích tín hiệu chiến lược** — Dựa trên nhịp độ phát hành và trọng tâm nội dung của hai công ty, phân tích:
   - Ưu tiên kỹ thuật gần đây của từng công ty (năng lực mô hình / an toàn / sản phẩm hóa / hệ sinh thái)
   - Động thái cạnh tranh: ai đang dẫn dắt chủ đề, ai đang theo sau
   - Tác động tiềm năng đến nhà phát triển và khách hàng doanh nghiệp

5. **Chi tiết đáng chú ý** — Rút ra tín hiệu ẩn từ tiêu đề, cách diễn đạt và thời điểm phát hành, ví dụ:
   - Thuật ngữ hoặc chủ đề mới xuất hiện lần đầu
   - Phát hành dày đặc trong một danh mục (có thể báo hiệu cột mốc sản phẩm)
   - Động thái về chính sách, tuân thủ và an toàn

${isAnyFirstRun ? "6. **Tổng quan bức tranh nội dung** — Chỉ dành cho lần thu thập đầy đủ đầu tiên: tổng hợp phân bổ số lượng theo từng danh mục nội dung của hai công ty, và mô tả phong cách vận hành nội dung của mỗi bên (định hướng học thuật vs định hướng sản phẩm vs câu chuyện người dùng, v.v.)\n\n" : ""}Yêu cầu: tiếng Việt, chuyên nghiệp, chi tiết, phù hợp với nhà nghiên cứu AI, quản lý sản phẩm và người ra quyết định kỹ thuật. Mỗi mục phải kèm theo liên kết chính thức.
`;
}
