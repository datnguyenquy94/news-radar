/**
 * LLM prompt builder for the ArXiv report.
 */

import type { ArxivData } from "../../domains/ai/arxiv.ts";
import type { Lang } from "../../core/i18n/index.ts";

// ---------------------------------------------------------------------------
// ArXiv prompt
// ---------------------------------------------------------------------------

export function buildArxivPrompt(data: ArxivData, dateStr: string, lang: Lang = "vi"): string {
  const papersText = data.papers
    .map((p, i) => {
      const authors =
        p.authors.length > 3 ? p.authors.slice(0, 3).join(", ") + " et al." : p.authors.join(", ");
      const cats = p.categories.slice(0, 3).join(", ");
      return lang === "en"
        ? `${i + 1}. **${p.title}**\n` +
            `   Link: ${p.url}\n` +
            `   Authors: ${authors} | Categories: ${cats}\n` +
            `   Published: ${p.published.slice(0, 10)}\n` +
            `   Abstract: ${p.summary.slice(0, 300)}${p.summary.length > 300 ? "..." : ""}`
        : `${i + 1}. **${p.title}**\n` +
            `   Liên kết: ${p.url}\n` +
            `   Tác giả: ${authors} | Danh mục: ${cats}\n` +
            `   Ngày đăng: ${p.published.slice(0, 10)}\n` +
            `   Tóm tắt: ${p.summary.slice(0, 300)}${p.summary.length > 300 ? "..." : ""}`;
    })
    .join("\n\n");

  if (lang === "en") {
    return `You are an AI research analyst. The following are recent AI-related papers from ArXiv as of ${dateStr} (${data.papers.length} papers from cs.AI, cs.CL, cs.LG):

---

${papersText}

---

Generate a structured ArXiv AI Research Digest in English:

1. **Today's Highlights** — 3-5 sentences on the most significant research directions and breakthroughs

2. **Key Papers** — Select 8-15 most important papers, organized by theme. Under each theme header, render a **Markdown table** with exactly these columns:

   | Paper | Authors | Summary |
   | :--- | :--- | :--- |

   - **Paper**: title as a Markdown link to its ArXiv URL
   - **Authors**: abbreviated (first 3 + et al.)
   - **Summary**: 2 sentences — the key contribution and why it matters
   - Omit a theme's table if no paper falls under it

   Themes:
   - 🧠 Large Language Models (architecture, training, alignment, evaluation)
   - 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)
   - 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)
   - 📊 Applications (domain-specific, multimodal, code generation)

3. **Research Trend Signal** — 100-200 words on emerging research directions visible from today's submissions

4. **Worth Deep Reading** — 2-3 papers most worth reading in full, with reasoning

Style: English, concise and professional, preserve all ArXiv links.
`;
  }

  return `Bạn là một nhà phân tích nghiên cứu AI. Dưới đây là các bài báo liên quan đến AI mới nhất trên ArXiv tính đến ${dateStr} (tổng ${data.papers.length} bài, từ cs.AI, cs.CL, cs.LG):

---

${papersText}

---

Hãy tạo một "Bản tin nghiên cứu AI trên ArXiv" có cấu trúc rõ ràng, theo yêu cầu:

1. **Điểm nhanh hôm nay** — Tóm tắt trong 3-5 câu các hướng nghiên cứu và đột phá đáng chú ý nhất hôm nay

2. **Bài báo trọng điểm** — Chọn 8-15 bài quan trọng nhất, phân theo chủ đề. Dưới mỗi tiêu đề chủ đề, trình bày bằng **bảng Markdown** với đúng các cột sau:

   | Bài báo | Tác giả | Tóm tắt |
   | :--- | :--- | :--- |

   - **Bài báo**: tiêu đề tạo thành liên kết Markdown trỏ tới URL ArXiv
   - **Tác giả**: viết tắt (3 tác giả đầu + et al.)
   - **Tóm tắt**: 2 câu — đóng góp cốt lõi và tại sao đáng chú ý
   - Bỏ hẳn bảng của chủ đề nào không có bài báo phù hợp

   Chủ đề:
   - 🧠 Mô hình ngôn ngữ lớn (kiến trúc, huấn luyện, alignment, đánh giá)
   - 🤖 Agent và suy luận (lập kế hoạch, sử dụng công cụ, đa agent, chain-of-thought)
   - 🔧 Phương pháp và framework (kỹ thuật mới, benchmark, tối ưu hiệu năng)
   - 📊 Ứng dụng (theo lĩnh vực cụ thể, đa phương thức, sinh mã)

3. **Tín hiệu xu hướng nghiên cứu** — 100-200 từ, hướng nghiên cứu mới nổi quan sát được từ các bài đăng hôm nay

4. **Đáng đọc sâu** — 2-3 bài báo đáng đọc đầy đủ nhất, kèm lý do

Yêu cầu: tiếng Việt, ngắn gọn, chuyên nghiệp, giữ nguyên tất cả liên kết ArXiv.
`;
}
