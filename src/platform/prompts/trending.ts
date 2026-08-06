/**
 * LLM prompt builder for the GitHub Trending report.
 */

import type { TrendingData } from "../../domains/ai/trending.ts";
import type { Lang } from "../../core/i18n/index.ts";

export function buildTrendingPrompt(data: TrendingData, dateStr: string, lang: Lang = "vi"): string {
  const trendingSection =
    data.trendingFetchSuccess && data.trendingRepos.length > 0
      ? data.trendingRepos
          .map(
            (r) =>
              `- [${r.fullName}](${r.url})` +
              (r.language ? ` [${r.language}]` : "") +
              ` ⭐${r.totalStars.toLocaleString()}` +
              (r.todayStars > 0 ? ` (+${r.todayStars} today)` : "") +
              (r.forks > 0 ? ` 🍴${r.forks.toLocaleString()}` : "") +
              (r.description ? `\n  ${r.description}` : ""),
          )
          .join("\n")
      : lang === "en"
        ? "(Unable to fetch today's GitHub Trending list)"
        : "(Không thể thu thập bảng xếp hạng GitHub Trending hôm nay)";

  const searchSection =
    data.searchRepos.length > 0
      ? data.searchRepos
          .map(
            (r) =>
              `- [${r.fullName}](${r.url})` +
              (r.language ? ` [${r.language}]` : "") +
              ` ⭐${r.stargazersCount.toLocaleString()}` +
              ` [topic:${r.searchQuery}]` +
              (r.description ? `\n  ${r.description}` : ""),
          )
          .join("\n")
      : lang === "en"
        ? "(No search results)"
        : "(Không có kết quả tìm kiếm)";

  if (lang === "en") {
    return `You are a technical analyst focused on the AI open-source ecosystem. The following is ${dateStr} GitHub AI-related trending repository data. Please filter for AI relevance, categorize, and analyze trends.

## Data Sources
- **Trending List** (github.com/trending, today's stars most reliable): Real-time hot list with today's new stars
- **Topic Search** (GitHub Search API, topic tags): AI-related projects active in last 7 days, grouped by topic

---

## GitHub Today's Trending (${data.trendingRepos.length} repositories)
${trendingSection}

---

## AI Topic Search Results (${data.searchRepos.length} repositories, deduplicated)
${searchSection}

---

Generate a structured AI Open Source Trends Report in English:

**Step 1 (Filter)**: From the above data, select projects clearly related to AI/ML (exclude unrelated general tools, frontend frameworks, games, etc.). Skip non-AI trending repos.

**Step 2 (Categorize)**: Group filtered projects into these categories (a project can belong to multiple; pick the primary one):
- 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)
- 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems)
- 📦 AI Applications (specific apps, vertical solutions)
- 🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools)
- 🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)

**Step 3 (Output Report)** with these sections:

1. **Today's Highlights** — 3-5 sentences on the most noteworthy AI open-source developments today

2. **Top Projects by Category** — For each category, render a **Markdown table** with exactly these columns:

   | Project | Lang | Stars (total / today) | Summary |
   | :--- | :--- | ---: | :--- |

   - **Project**: repo name as a Markdown link to its GitHub URL
   - **Lang**: primary language (leave blank if unknown)
   - **Stars**: total stars, plus today's new stars in parentheses when available (e.g. "86,392 (+1,851)"); copy the numbers from the input verbatim, do not recompute
   - **Summary**: 2 sentences — what the project is and why it's worth attention today, including any standout data point or momentum signal
   - List 3-8 projects per category; omit a category's table entirely if no project falls under it

3. **Trend Signal Analysis** — 200-300 words, distill from today's hot list:
   - Which type of AI tool is getting explosive community attention?
   - Any new tech stacks or directions appearing for the first time?
   - Connection to recent LLM releases / industry events

4. **Community Hot Spots** — Bullet list of 3-5 specific projects or directions worth developer focus, with brief reasoning

Style: English, professional and concise, must include GitHub links for every project.
`;
  }

  return `Bạn là một nhà phân tích kỹ thuật chuyên về hệ sinh thái mã nguồn mở AI. Dưới đây là dữ liệu kho lưu trữ AI nổi bật trên GitHub ngày ${dateStr}, hãy lọc theo mức độ liên quan đến AI, phân loại và phân tích xu hướng.

## Giải thích dữ liệu
- **Bảng xếp hạng Trending** (github.com/trending, số stars hôm nay đáng tin cậy nhất): bảng nóng thời gian thực, gồm số stars mới hôm nay
- **Tìm kiếm theo chủ đề** (GitHub Search API, thẻ topic): các dự án liên quan AI hoạt động trong 7 ngày qua, phân theo chủ đề

---

## Bảng Trending GitHub hôm nay (tổng ${data.trendingRepos.length} kho)
${trendingSection}

---

## Kết quả tìm kiếm chủ đề AI (tổng ${data.searchRepos.length} kho, đã loại trùng)
${searchSection}

---

Hãy tạo một "Bản tin xu hướng mã nguồn mở AI" có cấu trúc rõ ràng, theo yêu cầu:

**Bước 1 (Lọc)**: Từ dữ liệu trên, chọn các dự án liên quan rõ ràng đến AI/ML (loại bỏ công cụ chung, framework frontend, game không liên quan). Bỏ qua các kho Trending không thuộc AI.

**Bước 2 (Phân loại)**: Nhóm các dự án đã lọc theo các danh mục sau (một dự án có thể thuộc nhiều nhóm, ưu tiên nhóm chính):
- 🔧 Hạ tầng AI (framework, SDK, engine suy luận, công cụ phát triển, CLI)
- 🤖 AI Agents/Workflow (framework agent, tự động hóa, hệ đa agent)
- 📦 Ứng dụng AI (ứng dụng cụ thể, giải pháp theo ngành dọc)
- 🧠 Mô hình lớn/Huấn luyện (trọng số mô hình, framework huấn luyện, công cụ fine-tune)
- 🔍 RAG/Tri thức (cơ sở dữ liệu vector, truy xuất tăng cường sinh, quản lý tri thức)

**Bước 3 (Xuất báo cáo)**, gồm các phần sau:

1. **Điểm nhanh hôm nay** — Tóm tắt trong 3-5 câu những động thái mã nguồn mở AI đáng chú ý nhất hôm nay

2. **Dự án nổi bật theo danh mục** — Mỗi danh mục trình bày bằng **bảng Markdown** với đúng các cột sau:

   | Dự án | Ngôn ngữ | Stars (tổng / hôm nay) | Tóm tắt |
   | :--- | :--- | ---: | :--- |

   - **Dự án**: tên kho, tạo thành liên kết Markdown trỏ tới URL GitHub
   - **Ngôn ngữ**: ngôn ngữ chính (bỏ trống nếu không rõ)
   - **Stars**: tổng số sao, kèm số sao mới hôm nay trong ngoặc nếu có (ví dụ "86,392 (+1,851)"); chép nguyên số từ dữ liệu đầu vào, không tự tính lại
   - **Tóm tắt**: 2 câu — dự án là gì, tại sao hôm nay đáng chú ý, nêu điểm dữ liệu nổi bật hoặc tín hiệu tăng trưởng
   - Liệt kê 3-8 dự án mỗi danh mục; bỏ hẳn bảng của danh mục nào không có dự án phù hợp

3. **Phân tích tín hiệu xu hướng** — 200-300 từ, rút ra từ bảng nóng hôm nay:
   - Loại công cụ AI nào đang nhận được sự chú ý bùng nổ từ cộng đồng?
   - Có công nghệ hoặc hướng đi mới nào lần đầu xuất hiện không?
   - Liên hệ với các phát hành mô hình lớn/sự kiện ngành gần đây

4. **Điểm nóng cộng đồng** — Liệt kê dạng bullet 3-5 dự án hoặc hướng đi cụ thể đáng để nhà phát triển chú ý, kèm lý do ngắn gọn

Yêu cầu: tiếng Việt, chuyên nghiệp, ngắn gọn, mỗi dự án phải kèm liên kết GitHub.
`;
}
