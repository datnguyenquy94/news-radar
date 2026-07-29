/**
 * LLM prompt builder for the GitHub Trending report.
 */

import type { TrendingData } from "../../domains/ai/trending.ts";
import type { Lang } from "../../core/i18n/index.ts";

export function buildTrendingPrompt(data: TrendingData, dateStr: string, lang: Lang = "zh"): string {
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
        : "（未能抓取今日 GitHub Trending 榜单）";

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
        : "（无搜索结果）";

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

  return `你是一位专注于 AI 开源生态的技术分析师。以下是 ${dateStr} 的 GitHub AI 相关热门仓库数据，请进行 AI 相关性筛选、分类和趋势分析。

## 数据说明
- **Trending 榜单**（github.com/trending，今日 stars 数最可信）：今日实时热榜，含今日新增 stars
- **主题搜索**（GitHub Search API，topic 标签）：7天内活跃的 AI 相关项目，按主题分类

---

## GitHub 今日 Trending 榜单（共 ${data.trendingRepos.length} 个仓库）
${trendingSection}

---

## AI 主题搜索结果（共 ${data.searchRepos.length} 个仓库，已去重）
${searchSection}

---

请生成一份结构清晰的《AI 开源趋势日报》，要求：

**第一步（过滤）**：从以上数据中筛选出与 AI/ML 明确相关的项目（排除与 AI 无关的通用工具、前端框架、游戏等），对于 Trending 榜单中的非 AI 项目直接略去。

**第二步（分类）**：将筛选后的项目按以下维度分类（一个项目可归入多类，优先归入最主要类别）：
- 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
- 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
- 📦 AI 应用（具体应用产品、垂直场景解决方案）
- 🧠 大模型/训练（模型权重、训练框架、微调工具）
- 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

**第三步（输出报告）**，包含以下部分：

1. **今日速览** — 3~5 句话概括今日 AI 开源领域最值得关注的动向

2. **各维度热门项目** — 每个维度用 **Markdown 表格**呈现，列固定为：

   | 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
   | :--- | :--- | ---: | :--- |

   - **项目**：仓库名，做成指向其 GitHub 链接的 Markdown 链接
   - **语言**：主要语言（未知则留空）
   - **Stars**：总 star 数，有今日新增则在括号中标注（如 "86,392（+1,851）"）；数字照抄输入，不要重算
   - **简要说明**：2 句话——项目是什么、今天为什么值得关注，点出关键数据或增长信号
   - 每个维度列 3~8 个项目；某维度下若无项目则整张表省略

3. **趋势信号分析** — 200~300 字，从今日热榜中提炼：
   - 哪类 AI 工具正在获得社区爆发性关注？
   - 有无新兴技术栈或方向首次登榜？
   - 与近期大模型发布/行业事件的关联

4. **社区关注热点** — 以 bullet 形式列出 3~5 个值得开发者重点关注的具体项目或方向，给出简短理由

语言要求：中文，专业简洁，每个项目必须附 GitHub 链接。
`;
}
