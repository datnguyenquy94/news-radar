/**
 * LLM prompt builder for the Product Hunt report.
 */

import type { PhData } from "../../feeds/ai/ph.ts";
import type { Lang } from "../../core/i18n/index.ts";

export function buildPhPrompt(data: PhData, dateStr: string, lang: Lang = "vi"): string {
  const productsText = data.products
    .map((p, i) =>
      lang === "en"
        ? `${i + 1}. **${p.name}** — ${p.tagline}\n` +
          `   Product Hunt: ${p.url}\n` +
          `   Website: ${p.website}\n` +
          `   Votes: ${p.votesCount} | Comments: ${p.commentsCount} | Topics: ${p.topics.join(", ")}`
        : `${i + 1}. **${p.name}** — ${p.tagline}\n` +
          `   Product Hunt: ${p.url}\n` +
          `   Trang chủ: ${p.website}\n` +
          `   Bình chọn: ${p.votesCount} | Bình luận: ${p.commentsCount} | Chủ đề: ${p.topics.join(", ")}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are an AI product analyst. The following are AI-related products launched on Product Hunt in the past 24 hours as of ${dateStr} (sorted by votes, ${data.products.length} total):

---

${productsText}

---

Generate a structured Product Hunt AI Products Digest in English:

1. **Today's Highlights** — 3-5 sentences on the most notable AI product launches and trends on Product Hunt today

2. **Top Products** — Organized by category, render a **Markdown table** per category with exactly these columns:

   | Product | Votes | Comments | Summary |
   | :--- | ---: | ---: | :--- |

   - **Product**: product name as a Markdown link to its Product Hunt page, followed by " · [site](website-url)" when a website is available
   - **Votes / Comments**: copy the numbers from the input verbatim
   - **Summary**: 2 sentences — the tagline plus what problem it solves and what makes it stand out
   - Select the most representative products per category; omit a category's table if empty

   Categories:
   - 🤖 AI Agents & Assistants (chatbots, copilots, autonomous agents)
   - 🛠️ Developer Tools (APIs, SDKs, coding tools, dev infrastructure)
   - 📊 AI Applications (vertical products, SaaS tools powered by AI)
   - 🎨 Creative & Content (image/video/text generation, design tools)
   - 🔧 Infrastructure & Models (model serving, fine-tuning, MLOps)

3. **Market Signal** — 100-200 words analyzing today's Product Hunt AI launch patterns:
   - Which categories are most crowded?
   - Any innovative approaches or novel use cases?
   - Open-source vs closed-source trend among launches

4. **Worth Trying** — List 2-3 products most worth developers trying out, with brief reasoning

Style: English, concise and professional, preserve all original links.
`;
  }

  return `Bạn là một nhà phân tích sản phẩm AI. Dưới đây là các sản phẩm liên quan đến AI được ra mắt trên Product Hunt trong 24 giờ qua tính đến ${dateStr} (sắp xếp theo số bình chọn giảm dần, tổng ${data.products.length} sản phẩm):

---

${productsText}

---

Hãy tạo một "Bản tin sản phẩm AI trên Product Hunt" có cấu trúc rõ ràng, theo yêu cầu:

1. **Điểm nhanh hôm nay** — Tóm tắt trong 3-5 câu xu hướng chung và điểm nổi bật của các sản phẩm AI ra mắt trên Product Hunt hôm nay

2. **Sản phẩm nổi bật** — Sắp xếp theo các danh mục sau, mỗi danh mục trình bày bằng **bảng Markdown** với đúng các cột sau:

   | Sản phẩm | Bình chọn | Bình luận | Tóm tắt |
   | :--- | ---: | ---: | :--- |

   - **Sản phẩm**: tên sản phẩm tạo thành liên kết Markdown trỏ tới trang Product Hunt, kèm " · [trang chủ](liên-kết-trang-chủ)" nếu có
   - **Bình chọn / Bình luận**: chép nguyên số từ dữ liệu đầu vào, không tự tính lại
   - **Tóm tắt**: 2 câu — dựa trên tagline, nêu vấn đề nó giải quyết và điểm độc đáo
   - Chọn các sản phẩm tiêu biểu nhất mỗi danh mục; bỏ hẳn bảng nếu danh mục rỗng

   Danh mục:
   - 🤖 AI Agents và trợ lý (chatbot, copilot, agent tự chủ)
   - 🛠️ Công cụ cho nhà phát triển (API, SDK, công cụ lập trình, hạ tầng phát triển)
   - 📊 Ứng dụng AI (sản phẩm theo ngành dọc, công cụ SaaS chạy bằng AI)
   - 🎨 Sáng tạo và nội dung (sinh ảnh/video/văn bản, công cụ thiết kế)
   - 🔧 Hạ tầng và mô hình (phục vụ mô hình, fine-tune, MLOps)

3. **Tín hiệu thị trường** — 100-200 từ, phân tích xu hướng ra mắt sản phẩm AI trên Product Hunt hôm nay:
   - Danh mục nào đông đúc nhất?
   - Có cách tiếp cận sáng tạo hoặc tình huống sử dụng mới lạ nào không?
   - Xu hướng mã nguồn mở so với mã nguồn đóng trong các sản phẩm ra mắt

4. **Đáng thử** — Liệt kê 2-3 sản phẩm đáng để nhà phát triển thử nghiệm nhất, kèm lý do ngắn gọn

Yêu cầu: tiếng Việt, ngắn gọn, chuyên nghiệp, giữ nguyên tất cả liên kết gốc.
`;
}
