/**
 * LLM prompt builder for the GitHub Trending report.
 *
 * Both lists arrive already filtered and capped by `feeds/ai/trending.ts`
 * against the already-reported baseline, so this module renders what it is
 * given and never re-sorts or re-slices. Each row carries why it qualified —
 * first appearance, or stars gained since the report last covered it — and the
 * prompt states that the lists are a delta rather than a ranking, so the model
 * does not read a missing giant as a decline.
 */

import type { Freshness, TrendingData } from "../../feeds/ai/trending.ts";
import type { Lang } from "../../core/i18n/index.ts";
import { t } from "../../core/i18n/index.ts";
import { sampleNote } from "./shared.ts";

const SEARCH_SAMPLE_BY: Record<Lang, string> = t(
  "mức tăng sao mạnh nhất kể từ lần báo cáo trước",
  "by stars gained since last reported",
);

/** Why this repo is in today's report — rendered inline after the star counts. */
function freshnessBadge(row: Freshness, lang: Lang): string {
  if (row.isNew) return lang === "en" ? " 🆕 first appearance" : " 🆕 lần đầu xuất hiện";
  if (row.starsGained === null) return "";
  const gained = row.starsGained.toLocaleString();
  return lang === "en"
    ? ` 📈 +${gained} since ${row.lastReported}`
    : ` 📈 +${gained} kể từ ${row.lastReported}`;
}

/** One line describing what the already-reported filter held back. */
function filterNote(data: TrendingData, lang: Lang): string {
  const held = data.suppressed.trending + data.suppressed.search;
  if (data.firstRun) {
    return lang === "en"
      ? "First run — no baseline on disk yet, so every repo below counts as a first appearance."
      : "Lần chạy đầu tiên — chưa có dữ liệu nền, nên mọi kho bên dưới đều tính là lần đầu xuất hiện.";
  }
  if (held === 0) {
    return lang === "en"
      ? "Every repo below is either new to this report or has moved since it last appeared."
      : "Mọi kho bên dưới đều là mới với báo cáo này, hoặc đã biến động kể từ lần xuất hiện trước.";
  }
  return lang === "en"
    ? `${held} repos already covered by earlier reports were held back as unchanged ` +
        `(${data.suppressed.trending} trending, ${data.suppressed.search} search). Their absence means ` +
        `"nothing new to say", never a decline.`
    : `${held} kho đã được báo cáo trước đây bị lược bỏ vì không biến động ` +
        `(${data.suppressed.trending} từ trending, ${data.suppressed.search} từ tìm kiếm). Việc chúng vắng mặt ` +
        `nghĩa là "không có gì mới để nói", không phải là suy giảm.`;
}

export function buildTrendingPrompt(data: TrendingData, dateStr: string, lang: Lang = "vi"): string {
  const sampledSearchRepos = data.searchRepos;
  const trendingSection =
    data.trendingFetchSuccess && data.trendingRepos.length > 0
      ? data.trendingRepos
          .map(
            (r) =>
              `- [${r.fullName}](${r.url})` +
              (r.language ? ` [${r.language}]` : "") +
              (r.totalStars > 0 ? ` ⭐${r.totalStars.toLocaleString()}` : "") +
              (r.todayStars > 0 ? ` (+${r.todayStars} today)` : "") +
              (r.forks > 0 ? ` 🍴${r.forks.toLocaleString()}` : "") +
              freshnessBadge(r, lang) +
              (r.description ? `\n  ${r.description}` : ""),
          )
          .join("\n")
      : lang === "en"
        ? "(Unable to fetch today's GitHub Trending list)"
        : "(Không thể thu thập bảng xếp hạng GitHub Trending hôm nay)";

  const searchSection =
    sampledSearchRepos.length > 0
      ? sampledSearchRepos
          .map(
            (r) =>
              `- [${r.fullName}](${r.url})` +
              (r.language ? ` [${r.language}]` : "") +
              ` ⭐${r.stargazersCount.toLocaleString()}` +
              ` [topic:${r.searchQuery}]` +
              freshnessBadge(r, lang) +
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

## How to read these lists
Both lists are an **incremental delta**, not a leaderboard. A repo appears only when it is
new to this report (🆕) or has gained a meaningful number of stars since the report last
covered it (📈 +N since DATE). ${filterNote(data, lang)}
Treat 📈 growth since the last report as the primary momentum signal — it is the one number
that is specific to this report's history rather than to the repo's lifetime size.

---

## GitHub Today's Trending (${data.trendingRepos.length} repositories)
${trendingSection}

---

## AI Topic Search Results (deduplicated) ${sampleNote(data.searchMatched, sampledSearchRepos.length, lang, SEARCH_SAMPLE_BY)}
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

   | Project | Lang | Stars (total / today) | Since last report | Summary |
   | :--- | :--- | ---: | ---: | :--- |

   - **Project**: repo name as a Markdown link to its GitHub URL
   - **Lang**: primary language (leave blank if unknown)
   - **Stars**: total stars, plus today's new stars in parentheses when available (e.g. "86,392 (+1,851)"); copy the numbers from the input verbatim, do not recompute. Leave the cell blank when the input carries no total — never substitute a guess or a 0
   - **Since last report**: \`🆕 new\` for a first appearance, otherwise the 📈 delta copied verbatim (e.g. "+1,204 since 2026-08-19"); blank when the input shows neither
   - **Summary**: 2 sentences — what the project is and why it's worth attention today, including any standout data point or momentum signal
   - List 3-8 projects per category; omit a category's table entirely if no project falls under it

3. **Trend Signal Analysis** — 200-300 words, distill from today's hot list:
   - Which type of AI tool is getting explosive community attention?
   - Any new tech stacks or directions appearing for the first time?
   - Connection to recent LLM releases / industry events
   - What the 🆕 first appearances say that the 📈 re-appearances do not — the first are new entrants, the second are projects that kept compounding. Do not comment on repos absent from the lists; absence means unchanged, not declining

4. **Community Hot Spots** — Bullet list of 3-5 specific projects or directions worth developer focus, with brief reasoning

Style: English, professional and concise, must include GitHub links for every project.
`;
  }

  return `Bạn là một nhà phân tích kỹ thuật chuyên về hệ sinh thái mã nguồn mở AI. Dưới đây là dữ liệu kho lưu trữ AI nổi bật trên GitHub ngày ${dateStr}, hãy lọc theo mức độ liên quan đến AI, phân loại và phân tích xu hướng.

## Giải thích dữ liệu
- **Bảng xếp hạng Trending** (github.com/trending, số stars hôm nay đáng tin cậy nhất): bảng nóng thời gian thực, gồm số stars mới hôm nay
- **Tìm kiếm theo chủ đề** (GitHub Search API, thẻ topic): các dự án liên quan AI hoạt động trong 7 ngày qua, phân theo chủ đề

## Cách đọc hai danh sách này
Cả hai danh sách là **phần biến động tăng thêm**, không phải bảng xếp hạng. Một kho chỉ xuất hiện
khi nó mới với báo cáo này (🆕) hoặc đã tăng đáng kể số sao kể từ lần báo cáo trước
(📈 +N kể từ NGÀY). ${filterNote(data, lang)}
Hãy coi mức tăng 📈 kể từ lần báo cáo trước là tín hiệu động lượng chính — đó là con số duy nhất
gắn với lịch sử của báo cáo này, thay vì gắn với quy mô tích lũy cả đời của kho.

---

## Bảng Trending GitHub hôm nay (tổng ${data.trendingRepos.length} kho)
${trendingSection}

---

## Kết quả tìm kiếm chủ đề AI (đã loại trùng) ${sampleNote(data.searchMatched, sampledSearchRepos.length, lang, SEARCH_SAMPLE_BY)}
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

   | Dự án | Ngôn ngữ | Stars (tổng / hôm nay) | Thay đổi từ lần trước | Tóm tắt |
   | :--- | :--- | ---: | ---: | :--- |

   - **Dự án**: tên kho, tạo thành liên kết Markdown trỏ tới URL GitHub
   - **Ngôn ngữ**: ngôn ngữ chính (bỏ trống nếu không rõ)
   - **Stars**: tổng số sao, kèm số sao mới hôm nay trong ngoặc nếu có (ví dụ "86,392 (+1,851)"); chép nguyên số từ dữ liệu đầu vào, không tự tính lại. Bỏ trống ô này nếu đầu vào không có tổng số sao — tuyệt đối không tự suy đoán hay điền 0
   - **Thay đổi từ lần trước**: ghi \`🆕 mới\` nếu là lần đầu xuất hiện, ngược lại chép nguyên mức tăng 📈 (ví dụ "+1,204 kể từ 2026-08-19"); bỏ trống nếu đầu vào không có cả hai
   - **Tóm tắt**: 2 câu — dự án là gì, tại sao hôm nay đáng chú ý, nêu điểm dữ liệu nổi bật hoặc tín hiệu tăng trưởng
   - Liệt kê 3-8 dự án mỗi danh mục; bỏ hẳn bảng của danh mục nào không có dự án phù hợp

3. **Phân tích tín hiệu xu hướng** — 200-300 từ, rút ra từ bảng nóng hôm nay:
   - Loại công cụ AI nào đang nhận được sự chú ý bùng nổ từ cộng đồng?
   - Có công nghệ hoặc hướng đi mới nào lần đầu xuất hiện không?
   - Liên hệ với các phát hành mô hình lớn/sự kiện ngành gần đây
   - Các kho 🆕 lần đầu xuất hiện nói lên điều gì khác so với các kho 📈 quay lại — nhóm đầu là người mới, nhóm sau là dự án tiếp tục tăng trưởng. Không bình luận về những kho không có trong danh sách; vắng mặt nghĩa là không biến động, không phải suy giảm

4. **Điểm nóng cộng đồng** — Liệt kê dạng bullet 3-5 dự án hoặc hướng đi cụ thể đáng để nhà phát triển chú ý, kèm lý do ngắn gọn

Yêu cầu: tiếng Việt, chuyên nghiệp, ngắn gọn, mỗi dự án phải kèm liên kết GitHub.
`;
}
