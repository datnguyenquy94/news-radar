/**
 * LLM prompt builder for the Hugging Face report.
 */

import type { HfData } from "../../feeds/ai/hf.ts";
import type { Lang } from "../../core/i18n/index.ts";

// ---------------------------------------------------------------------------
// Hugging Face prompt
// ---------------------------------------------------------------------------

export function buildHfPrompt(data: HfData, dateStr: string, lang: Lang = "vi"): string {
  const modelsText = data.models
    .map((m, i) =>
      lang === "en"
        ? `${i + 1}. **${m.id}**\n` +
          `   Link: ${m.url}\n` +
          `   Author: ${m.author} | Pipeline: ${m.pipelineTag || "N/A"}\n` +
          `   Likes: ${m.likes.toLocaleString()} | Downloads: ${m.downloads.toLocaleString()}\n` +
          `   Tags: ${m.tags.slice(0, 5).join(", ")}`
        : `${i + 1}. **${m.id}**\n` +
          `   Liên kết: ${m.url}\n` +
          `   Tác giả: ${m.author} | Tác vụ: ${m.pipelineTag || "N/A"}\n` +
          `   Lượt thích: ${m.likes.toLocaleString()} | Lượt tải: ${m.downloads.toLocaleString()}\n` +
          `   Thẻ: ${m.tags.slice(0, 5).join(", ")}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are an AI model ecosystem analyst. The following are trending models on Hugging Face Hub as of ${dateStr} (${data.models.length} models, sorted by weekly likes):

---

${modelsText}

---

Generate a structured Hugging Face Trending Models Digest in English:

1. **Today's Highlights** — 3-5 sentences on the most notable model releases and trends on Hugging Face

2. **Trending Models** — Organized by category. Under each category header, render a **Markdown table** with exactly these columns:

   | Model | Author | Likes | Downloads | Summary |
   | :--- | :--- | ---: | ---: | :--- |

   - **Model**: model name as a Markdown link to its HF URL
   - **Likes / Downloads**: copy the numbers from the input verbatim (keep the thousands separators; do not recompute or round)
   - **Summary**: 2 sentences — what it is and why it's trending, including a standout capability or data point
   - Omit a category's table entirely if no model falls under it

   Categories:
   - 🧠 Language Models (LLMs, chat models, instruction-tuned)
   - 🎨 Multimodal & Generation (image, video, audio, text-to-X)
   - 🔧 Specialized Models (code, math, medical, embeddings)
   - 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

3. **Ecosystem Signal** — 100-200 words analyzing model ecosystem trends:
   - Which model families are gaining momentum?
   - Open-weight vs proprietary trends
   - Notable quantization or fine-tuning activity

4. **Worth Exploring** — 2-3 models most worth trying or studying, with reasoning

Style: English, concise and professional, preserve all HuggingFace links.
`;
  }

  return `Bạn là một nhà phân tích hệ sinh thái mô hình AI. Dưới đây là các mô hình nổi bật trên Hugging Face Hub tính đến ${dateStr} (tổng ${data.models.length} mô hình, sắp xếp theo lượt thích trong tuần):

---

${modelsText}

---

Hãy tạo một "Bản tin mô hình nổi bật trên Hugging Face" có cấu trúc rõ ràng, theo yêu cầu:

1. **Điểm nhanh hôm nay** — Tóm tắt trong 3-5 câu các mô hình mới và xu hướng đáng chú ý nhất trên Hugging Face

2. **Mô hình nổi bật** — Sắp xếp theo các danh mục sau. Dưới mỗi tiêu đề danh mục, trình bày bằng **bảng Markdown** với đúng các cột sau:

   | Mô hình | Tác giả | Lượt thích | Lượt tải | Tóm tắt |
   | :--- | :--- | ---: | ---: | :--- |

   - **Mô hình**: tên mô hình tạo thành liên kết Markdown trỏ tới URL HF
   - **Lượt thích / Lượt tải**: chép nguyên số từ dữ liệu đầu vào (giữ dấu phân cách hàng nghìn, không tự tính lại hoặc làm tròn)
   - **Tóm tắt**: 2 câu — mô hình là gì, tại sao đang nổi bật, nêu năng lực hoặc dữ liệu nổi bật
   - Bỏ hẳn bảng của danh mục nào không có mô hình phù hợp

   Danh mục:
   - 🧠 Mô hình ngôn ngữ (LLM, mô hình hội thoại, instruction-tuned)
   - 🎨 Đa phương thức và sinh nội dung (ảnh, video, âm thanh, text-to-X)
   - 🔧 Mô hình chuyên biệt (mã nguồn, toán học, y tế, embedding)
   - 📦 Fine-tune và lượng tử hóa (fine-tune từ cộng đồng, GGUF, AWQ)

3. **Tín hiệu hệ sinh thái** — 100-200 từ, phân tích xu hướng hệ sinh thái mô hình:
   - Dòng mô hình nào đang có đà tăng trưởng?
   - Xu hướng trọng số mở so với độc quyền
   - Hoạt động lượng tử hóa hoặc fine-tune đáng chú ý

4. **Đáng khám phá** — 2-3 mô hình đáng thử hoặc nghiên cứu nhất, kèm lý do

Yêu cầu: tiếng Việt, ngắn gọn, chuyên nghiệp, giữ nguyên tất cả liên kết HuggingFace.
`;
}
