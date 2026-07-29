/**
 * LLM prompt builder for the Hugging Face report.
 */

import type { HfData } from "../../domains/ai/hf.ts";
import type { Lang } from "../../core/i18n/index.ts";

// ---------------------------------------------------------------------------
// Hugging Face prompt
// ---------------------------------------------------------------------------

export function buildHfPrompt(data: HfData, dateStr: string, lang: Lang = "zh"): string {
  const modelsText = data.models
    .map((m, i) =>
      lang === "en"
        ? `${i + 1}. **${m.id}**\n` +
          `   Link: ${m.url}\n` +
          `   Author: ${m.author} | Pipeline: ${m.pipelineTag || "N/A"}\n` +
          `   Likes: ${m.likes.toLocaleString()} | Downloads: ${m.downloads.toLocaleString()}\n` +
          `   Tags: ${m.tags.slice(0, 5).join(", ")}`
        : `${i + 1}. **${m.id}**\n` +
          `   链接: ${m.url}\n` +
          `   作者: ${m.author} | 任务: ${m.pipelineTag || "N/A"}\n` +
          `   点赞: ${m.likes.toLocaleString()} | 下载: ${m.downloads.toLocaleString()}\n` +
          `   标签: ${m.tags.slice(0, 5).join(", ")}`,
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

  return `你是 AI 模型生态分析师。以下是 ${dateStr} Hugging Face Hub 上的热门模型（共 ${data.models.length} 个，按周点赞数排序）：

---

${modelsText}

---

请生成一份结构清晰的《Hugging Face 热门模型日报》，要求：

1. **今日速览** — 3~5 句话，概括 Hugging Face 上最值得关注的模型发布和趋势

2. **热门模型** — 按以下分类整理。在每个分类标题下，用 **Markdown 表格**呈现，列固定为：

   | 模型 | 作者 | 点赞 | 下载 | 简要说明 |
   | :--- | :--- | ---: | ---: | :--- |

   - **模型**：模型名，做成指向其 HF 链接的 Markdown 链接
   - **点赞 / 下载**：数字直接照抄输入数据（保留千位分隔符，不要重新计算或四舍五入）
   - **简要说明**：2 句话——模型是什么、为什么上榜，点出关键能力或数据亮点
   - 某个分类下若没有模型，则整张表省略

   分类：
   - 🧠 语言模型（LLM、对话模型、指令微调）
   - 🎨 多模态与生成（图像、视频、音频、文本到X）
   - 🔧 专用模型（代码、数学、医疗、嵌入）
   - 📦 微调与量化（社区微调、GGUF、AWQ）

3. **生态信号** — 100~200 字，分析模型生态趋势：
   - 哪些模型家族势头正旺？
   - 开源权重 vs 闭源的趋势
   - 值得注意的量化或微调活动

4. **值得探索** — 2~3 个最值得尝试或研究的模型，简述理由

语言要求：中文，简洁专业，保留所有 HuggingFace 链接。
`;
}
