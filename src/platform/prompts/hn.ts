/**
 * LLM prompt builder for the Hacker News report.
 */

import type { HnData } from "../../feeds/ai/hn.ts";
import type { Lang } from "../../core/i18n/index.ts";

export function buildHnPrompt(data: HnData, dateStr: string, lang: Lang = "vi"): string {
  const storiesText = data.stories
    .map((s, i) =>
      lang === "en"
        ? `${i + 1}. **${s.title}**\n` +
          `   Link: ${s.url}\n` +
          `   Discussion: ${s.hnUrl}\n` +
          `   HN Rank: ${s.hnRank ?? i + 1} | Score: ${s.points} | Comments: ${s.comments} | Author: ${s.author} | Time: ${s.createdAt.slice(0, 16)}`
        : `${i + 1}. **${s.title}**\n` +
          `   Liên kết: ${s.url}\n` +
          `   Thảo luận: ${s.hnUrl}\n` +
          `   Hạng HN: ${s.hnRank ?? i + 1} | Điểm: ${s.points} | Bình luận: ${s.comments} | Tác giả: ${s.author} | Thời gian: ${s.createdAt.slice(0, 16)}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are an AI industry news analyst. The following are AI-related posts from the current Hacker News topstories feed as of ${dateStr} (ordered by HN rank, ${data.stories.length} total):

---

${storiesText}

---

Generate a structured Hacker News AI Community Digest in English:

1. **Today's Highlights** — 3-5 sentences on the hottest AI discussion topics and community sentiment on HN today

2. **Top News & Discussions** — Organized by category, render a **Markdown table** per category with exactly these columns:

   | Title | Score | Comments | Summary |
   | :--- | ---: | ---: | :--- |

   - **Title**: title as a Markdown link to the original article, followed by a " · [HN](discussion-url)" link to the HN thread
   - **Score / Comments**: copy the numbers from the input verbatim
   - **Summary**: 2 sentences — why this matters and what the community's typical reaction is
   - Select the 2-5 most representative items per category; omit a category's table if empty

   Categories:
   - 🔬 Models & Research (new model releases, papers, benchmarks)
   - 🛠️ Tools & Engineering (open-source projects, frameworks, engineering practices)
   - 🏢 Industry News (company news, funding, product launches)
   - 💬 Opinions & Debates (notable Ask HN, Show HN, or hot discussion threads)

3. **Community Sentiment Signal** — 100-200 words analyzing today's HN AI discussion mood and focus:
   - Which topics are most active (high score + high comments)?
   - Any clear points of controversy or consensus?
   - Compared to last cycle, any notable shift in focus?

4. **Worth Deep Reading** — List 2-3 pieces most worth developers/researchers reading in depth, with brief reasoning

Style: English, concise and professional, preserve all original links.
`;
  }

  return `Bạn là một nhà phân tích tin tức ngành AI. Dưới đây là các bài đăng liên quan đến AI được thu thập từ topstories của Hacker News ngày ${dateStr} (sắp xếp theo thứ hạng HN, tổng ${data.stories.length} bài):

---

${storiesText}

---

Hãy tạo một "Bản tin cộng đồng Hacker News AI" có cấu trúc rõ ràng, theo yêu cầu:

1. **Điểm nhanh hôm nay** — Tóm tắt trong 3-5 câu hướng thảo luận và tâm lý sôi nổi nhất của cộng đồng HN về AI hôm nay

2. **Tin tức và thảo luận nổi bật** — Sắp xếp theo các danh mục sau, mỗi danh mục trình bày bằng **bảng Markdown** với đúng các cột sau:

   | Tiêu đề | Điểm | Bình luận | Tóm tắt |
   | :--- | ---: | ---: | :--- |

   - **Tiêu đề**: tạo thành liên kết Markdown trỏ tới bài viết gốc, kèm theo " · [HN](liên-kết-thảo-luận)" trỏ tới thảo luận HN
   - **Điểm / Bình luận**: chép nguyên số từ dữ liệu đầu vào, không tự tính lại
   - **Tóm tắt**: 2 câu — tại sao điều này đáng chú ý, cộng đồng phản ứng điển hình ra sao
   - Chọn 2-5 mục tiêu biểu nhất mỗi danh mục; bỏ hẳn bảng nếu danh mục rỗng

   Danh mục:
   - 🔬 Mô hình và nghiên cứu (phát hành mô hình mới, bài báo, benchmark)
   - 🛠️ Công cụ và kỹ thuật (dự án mã nguồn mở, framework, thực hành kỹ thuật)
   - 🏢 Động thái ngành (tin công ty, gọi vốn, ra mắt sản phẩm)
   - 💬 Quan điểm và tranh luận (Ask HN, Show HN đáng chú ý, hoặc thảo luận nóng)

3. **Tín hiệu tâm lý cộng đồng** — 100-200 từ, phân tích tâm trạng và trọng tâm thảo luận AI trên HN hôm nay:
   - Cộng đồng sôi nổi nhất với chủ đề nào (điểm cao + nhiều bình luận)?
   - Có điểm tranh cãi hoặc đồng thuận rõ rệt nào không?
   - So với chu kỳ trước, trọng tâm quan tâm có thay đổi đáng chú ý không?

4. **Đáng đọc sâu** — Liệt kê 2-3 bài đáng để nhà phát triển/nhà nghiên cứu đọc sâu nhất hôm nay, kèm lý do ngắn gọn

Yêu cầu: tiếng Việt, ngắn gọn, chuyên nghiệp, giữ nguyên tất cả liên kết gốc.
`;
}
