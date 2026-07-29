/**
 * LLM prompt builder for the Hacker News report.
 */

import type { HnData } from "../../domains/ai/hn.ts";
import type { Lang } from "../../core/i18n/index.ts";

export function buildHnPrompt(data: HnData, dateStr: string, lang: Lang = "zh"): string {
  const storiesText = data.stories
    .map((s, i) =>
      lang === "en"
        ? `${i + 1}. **${s.title}**\n` +
          `   Link: ${s.url}\n` +
          `   Discussion: ${s.hnUrl}\n` +
          `   HN Rank: ${s.hnRank ?? i + 1} | Score: ${s.points} | Comments: ${s.comments} | Author: ${s.author} | Time: ${s.createdAt.slice(0, 16)}`
        : `${i + 1}. **${s.title}**\n` +
          `   链接: ${s.url}\n` +
          `   讨论: ${s.hnUrl}\n` +
          `   HN 排名: ${s.hnRank ?? i + 1} | 分数: ${s.points} | 评论: ${s.comments} | 作者: ${s.author} | 时间: ${s.createdAt.slice(0, 16)}`,
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

  return `你是 AI 行业资讯分析师。以下是 ${dateStr} 从 Hacker News topstories 抓取的 AI 相关热门帖子（按 HN 排名顺序，共 ${data.stories.length} 条）：

---

${storiesText}

---

请生成一份结构清晰的《Hacker News AI 社区动态日报》，要求：

1. **今日速览** — 3~5 句话，概括今日 HN 社区围绕 AI 最热门的讨论方向和情绪

2. **热门新闻与讨论** — 按以下分类整理，每个分类用 **Markdown 表格**呈现，列固定为：

   | 标题 | 分数 | 评论 | 简要说明 |
   | :--- | ---: | ---: | :--- |

   - **标题**：标题做成指向原文的 Markdown 链接，其后附 " · [HN](讨论链接)" 指向 HN 讨论
   - **分数 / 评论**：数字照抄输入，不要重算
   - **简要说明**：2 句话——这条为什么值得关注、社区有何典型反应
   - 每类选取最具代表性的 2~5 条；某分类为空则整张表省略

   分类：
   - 🔬 模型与研究（新模型发布、论文、基准测试）
   - 🛠️ 工具与工程（开源项目、框架、工程实践）
   - 🏢 产业动态（公司新闻、融资、产品发布）
   - 💬 观点与争议（值得关注的 Ask HN、Show HN 或热议帖子）

3. **社区情绪信号** — 100~200 字，分析今日 HN AI 讨论的整体情绪和关注重点：
   - 社区对哪类话题最活跃（高分 + 高评论）？
   - 有无明显的争议点或共识？
   - 与上周期相比，关注方向有无明显变化？

4. **值得深读** — 列出 2~3 条今日最值得开发者/研究者深入阅读的内容，简述理由

语言要求：中文，简洁专业，保留所有原文链接。
`;
}
