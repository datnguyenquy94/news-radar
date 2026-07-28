/**
 * LLM prompt builders for data-source reports (trending, web, HN)
 * and rollup reports (weekly, monthly).
 *
 * Separated from prompts.ts to keep each module focused.
 */

import type { WebFetchResult } from "./web.ts";
import type { TrendingData } from "./trending.ts";
import type { HnData } from "./hn.ts";
import type { PhData } from "./ph.ts";
import type { ArxivData } from "./arxiv.ts";
import type { HfData } from "./hf.ts";
import type { DevtoData } from "./devto.ts";
import type { LobstersData } from "./lobsters.ts";
import type { FredData, FredMetric, FredGroup } from "./fred.ts";
import type { FinraData } from "./finra.ts";
import type { VnMarketData } from "./vnmarket.ts";
import type { VnMacroData, VnFxRate, VnGlobalMetric, VnAnnualMetric } from "./vnmacro.ts";
import type { VnDocsData } from "./vndocs.ts";
import type { Lang } from "./i18n.ts";
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

export function buildWebReportPrompt(results: WebFetchResult[], dateStr: string, lang: Lang = "zh"): string {
  const isAnyFirstRun = results.some((r) => r.isFirstRun);

  const siteSections = results
    .map(({ siteName, isFirstRun, newItems, totalDiscovered }) => {
      const mode =
        lang === "en"
          ? isFirstRun
            ? `First full crawl (sitemap total ${totalDiscovered} URLs, showing latest ${newItems.length} articles)`
            : `Incremental update, ${newItems.length} new articles today`
          : isFirstRun
            ? `首次全量抓取（sitemap 共 ${totalDiscovered} 条 URL，以下为最新 ${newItems.length} 篇正文内容）`
            : `今日增量更新，共 ${newItems.length} 篇新内容`;

      if (newItems.length === 0) {
        const noContent =
          lang === "en" ? `(${mode}, no content to analyze.)` : `（${mode}，暂无可供分析的内容。）`;
        return `## ${siteName}\n\n${noContent}`;
      }

      const categoryLabel = lang === "en" ? "Category" : "分类";
      const dateLabel = lang === "en" ? "Published/Updated" : "发布/更新";
      const unknownDate = lang === "en" ? "unknown" : "未知";
      const excerptLabel = lang === "en" ? "Excerpt" : "内容节选";
      const metadataOnlyNote =
        lang === "en"
          ? "(metadata-only: title derived from URL slug, may be inaccurate; no article text available)"
          : "（仅元数据：标题由 URL 路径推断，可能不准确；无法获取正文内容）";
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

      const lp = lang === "en" ? "(" : "（";
      const rp = lang === "en" ? ")" : "）";
      return `## ${siteName}${lp}${mode}${rp}\n\n${itemsText}`;
    })
    .join("\n\n---\n\n");

  const firstRunNote =
    lang === "en"
      ? isAnyFirstRun
        ? "This is the first full crawl. Please focus on the overall content landscape, historical context, and core themes of each site, rather than individual articles."
        : "This is an incremental update. Please focus on today's new content and assess its strategic significance in context."
      : isAnyFirstRun
        ? "本次为首次全量抓取，请重点梳理各站点的内容格局、历史脉络与核心主题，而非仅关注单篇文章。"
        : "本次为增量更新，请聚焦今日新增内容，并结合上下文判断其战略意义。";

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

  return `你是一位专注于 AI 领域的深度内容分析师，擅长从官方公告、技术博客、研究论文和产品文档中提炼战略信号。

以下是 ${dateStr} 从 Anthropic（claude.com / anthropic.com）和 OpenAI（openai.com）官网抓取的内容，${firstRunNote}

${siteSections}

---

请生成一份详实的《AI 官方内容追踪报告》，包含以下部分：

1. **今日速览** — 3~5 句话概括最重要的新发布或动向，点出核心亮点

2. **Anthropic / Claude 内容精选** — 按分类（news / research / engineering / learn 等）逐条整理重要内容：
   - 每篇用 2~4 句话提炼核心观点、技术细节或业务意义
   - 标注发布日期和原文链接
   - 如首次全量，按时间线梳理重要里程碑

3. **OpenAI 内容精选** — 同上，按 research / release / company / safety 等分类整理
   - ⚠️ 注意：OpenAI 数据为仅元数据模式（标题由 URL 路径推断，无正文）。请仅基于 URL 和分类进行客观列举，不要对标题含义进行推测性解读或编造内容摘要。如果信息不足以分析，直接说明数据受限即可。

4. **战略信号解读** — 基于两家公司的发布节奏和内容重点，分析：
   - 各自近期的技术优先级（模型能力 / 安全 / 产品化 / 生态）
   - 竞争态势：谁在引领议题，谁在跟进
   - 对开发者和企业用户的潜在影响

5. **值得关注的细节** — 从标题、措辞、发布时机中提取隐含信号，例如：
   - 新兴词汇或话题的首次出现
   - 某类主题的密集发布（可能预示产品节点）
   - 政策、合规、安全方面的动向

${isAnyFirstRun ? "6. **内容格局总览** — 首次全量独有：汇总两家公司各内容类别的数量分布，并说明各自的内容运营风格（学术导向 vs 产品导向 vs 用户故事等）\n\n" : ""}语言要求：中文，专业深入，内容详实，适合 AI 领域研究者、产品经理和技术决策者阅读。每个条目必须附上 GitHub/官网链接。
`;
}

export function buildWeeklyPrompt(
  dailyDigests: Record<string, string>,
  weekStr: string,
  lang: Lang = "zh",
): string {
  const digestEntries = Object.entries(dailyDigests)
    .map(([date, content]) => `## ${date}\n\n${content}`)
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a technical analyst focused on the AI open-source ecosystem. The following are daily digest summaries from the past 7 days (${weekStr}) of AI tool community activity. Generate a comprehensive weekly recap.

${digestEntries}

---

Generate an AI Tools Ecosystem Weekly Report with these sections:

1. **Week's Top Stories** - 5-8 most important events, releases, and community developments this week, each with date
2. **CLI Tools Progress** - Overall activity and key changes for each AI CLI tool (Claude Code, Codex, Gemini CLI, etc.)
3. **AI Agent Ecosystem** - Key developments from OpenClaw and peer projects this week
4. **Open Source Trends** - Most notable technical directions from GitHub Trending and AI community this week
5. **HN Community Highlights** - Core AI discussion topics and community sentiment on Hacker News this week
6. **Official Announcements** - Important content published by Anthropic and OpenAI this week (if any)
7. **Next Week's Signals** - Based on this week's data, predict trends and upcoming events worth watching

Style: English, concise and professional, helping technical developers quickly grasp the week's developments.
`;
  }

  return `你是一位专注于 AI 开源生态的技术分析师。以下是过去 7 天（${weekStr}）的 AI 工具社区每日动态摘要，请生成本周综合回顾报告。

${digestEntries}

---

请生成《AI 工具生态周报》，包含以下部分：

1. **本周要闻** - 5-8 条本周最重要的事件、版本发布、社区动向，每条附日期
2. **CLI 工具进展** - 各 AI CLI 工具（Claude Code、Codex、Gemini CLI 等）本周整体动态与关键变化
3. **AI Agent 生态** - OpenClaw 及同赛道项目的本周重要进展
4. **开源趋势** - 本周 GitHub Trending 和 AI 社区最关注的技术方向
5. **HN 社区热议** - 本周 Hacker News AI 讨论的核心话题与社区情绪
6. **官方动态** - Anthropic 和 OpenAI 本周发布的重要内容（若有）
7. **下周信号** - 基于本周数据，预判值得关注的趋势或即将到来的事件

语言要求：中文，简洁专业，适合技术开发者快速掌握一周动态。
`;
}

export function buildMonthlyPrompt(
  sourceDigests: Record<string, string>,
  monthStr: string,
  lang: Lang = "zh",
): string {
  const digestEntries = Object.entries(sourceDigests)
    .map(([key, content]) => `## ${key}\n\n${content}`)
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a technical analyst focused on the AI open-source ecosystem. The following are ${monthStr} AI tool community digest summaries (${Object.keys(sourceDigests).length} reports total). Generate a comprehensive monthly review.

${digestEntries}

---

Generate an AI Tools Ecosystem Monthly Report with these sections:

1. **Month's Top Stories** - 5-10 most important events and milestones this month, in chronological order
2. **CLI Tools Monthly Progress** - Overall development trajectory, major releases, and community growth for each key AI CLI tool
3. **AI Agent Ecosystem Monthly Review** - Ecosystem landscape shifts, emerging projects, notable signals this month
4. **Technical Trend Summary** - Most significant technical directions and paradigm shifts in AI open-source this month
5. **Community Health Assessment** - Monthly activity comparison across major projects, developer engagement evaluation
6. **Official Announcements Review** - Strategic analysis of Anthropic and OpenAI content published this month
7. **Next Month's Outlook** - Based on this month's trends, predict key directions and potential events to watch

Style: English, in-depth analysis, data-driven, suited for monthly retrospectives and strategic decision-making.
`;
  }

  return `你是一位专注于 AI 开源生态的技术分析师。以下是 ${monthStr} 月的 AI 工具社区动态汇总（共 ${Object.keys(sourceDigests).length} 份报告），请生成本月综合回顾报告。

${digestEntries}

---

请生成《AI 工具生态月报》，包含以下部分：

1. **月度要闻** - 本月最重要的 5-10 条事件和里程碑，按时间排列
2. **CLI 工具月度进展** - 各主要 AI CLI 工具本月整体发展轨迹、重要版本、社区规模变化
3. **AI Agent 生态月报** - 本月生态格局变化、新兴项目、值得关注的信号
4. **技术趋势总结** - 本月 AI 开源领域最显著的技术方向与范式变化
5. **社区生态健康度** - 各主要项目月度活跃度对比、开发者参与度评估
6. **官方动态回顾** - Anthropic 和 OpenAI 本月发布内容的战略意义分析
7. **下月展望** - 基于本月趋势，预判值得重点关注的方向和潜在事件

语言要求：中文，深度分析，数据驱动，适合月度复盘和战略决策参考。
`;
}

// ---------------------------------------------------------------------------
// Macro dashboard prompt (FRED + FINRA)
// ---------------------------------------------------------------------------

const MACRO_GROUP_LABEL: Record<FredGroup, Record<Lang, string>> = {
  liquidity: { zh: "央行与流动性", en: "Central Bank & Liquidity" },
  yields_credit: { zh: "利率与信用", en: "Yields & Credit" },
  econ_inflation: { zh: "经济与通胀", en: "Economy & Inflation" },
};

/** Format a number with fixed decimals and thousands separators, or a dash. */
function fmtNum(value: number | null, decimals: number, unit: string): string {
  if (value === null) return "N/A";
  const sign = value > 0 && (unit === "K" || unit === "% YoY") ? "+" : "";
  const body = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return `${sign}${body}${unit ? ` ${unit}` : ""}`;
}

function macroMetricLine(m: FredMetric, lang: Lang): string {
  const latest = fmtNum(m.latest, m.decimals, m.unit);
  const prior = fmtNum(m.prior, m.decimals, m.unit);
  const change = fmtNum(m.change, m.decimals, m.unit);
  return lang === "en"
    ? `- ${m.label.en} (${m.series}): latest ${latest} | prior ${prior} | change ${change} | as of ${m.asOf || "n/a"}`
    : `- ${m.label.zh} (${m.series}): 最新 ${latest} | 前值 ${prior} | 变化 ${change} | 截至 ${m.asOf || "无"}`;
}

export function buildMacroPrompt(
  fred: FredData,
  finra: FinraData,
  dateStr: string,
  lang: Lang = "zh",
): string {
  const groups: FredGroup[] = ["liquidity", "yields_credit", "econ_inflation"];
  const dataSection = groups
    .map((g) => {
      const lines = fred.metrics.filter((m) => m.group === g).map((m) => macroMetricLine(m, lang));
      const header = `### ${MACRO_GROUP_LABEL[g][lang]}`;
      return `${header}\n${lines.join("\n")}`;
    })
    .join("\n\n");

  const finraLine = (() => {
    if (!finra.fetchSuccess || !finra.latest) {
      return lang === "en"
        ? "- FINRA Margin Debt: data unavailable this run"
        : "- FINRA 保证金债务: 本次未取到数据";
    }
    const b = (finra.latest.debitMillions / 1000).toLocaleString("en-US", { maximumFractionDigits: 1 });
    const pb = finra.prior
      ? (finra.prior.debitMillions / 1000).toLocaleString("en-US", { maximumFractionDigits: 1 })
      : "N/A";
    const chg = finra.changePct === null ? "N/A" : `${finra.changePct > 0 ? "+" : ""}${finra.changePct}%`;
    return lang === "en"
      ? `- FINRA Margin Debt (retail leverage): latest ${finra.latest.period} $${b}B | prior ${pb === "N/A" ? "N/A" : "$" + pb + "B"} | MoM ${chg}`
      : `- FINRA 保证金债务 (散户杠杆): 最新 ${finra.latest.period} $${b}B | 前值 ${pb === "N/A" ? "N/A" : "$" + pb + "B"} | 环比 ${chg}`;
  })();

  if (lang === "en") {
    return `You are a macro strategist. The following are the latest US macro indicators as of ${dateStr}, sourced from FRED (Federal Reserve Economic Data) and FINRA. All numbers are official releases — copy them verbatim, never recompute.

${dataSection}

### Retail Leverage
${finraLine}

---

Generate a structured **Macro Market Dashboard** in English:

1. **Macro Snapshot** — 3-5 sentences on the overall liquidity, rates, and inflation backdrop and what it implies for risk assets.

2. **Indicator Tables** — one **Markdown table** per group (Central Bank & Liquidity; Yields & Credit; Economy & Inflation) with exactly these columns:

   | Indicator | Latest | Prior | Change | Reading |
   | :--- | ---: | ---: | ---: | :--- |

   - **Latest / Prior / Change**: copy the numbers (with units) from the input verbatim
   - **Reading**: a 3-6 word interpretation using these thresholds:
     - Fed Funds / 10Y Yield: 10Y above 4.0% high, above 4.5% highly restrictive
     - VIX: >30 extreme fear (historic bottoms), 15-20 calm, <10 extreme optimism
     - 10Y-2Y Spread: <0 inverted (recession signal within 12-24m)
     - High-Yield Credit Spread: spiking toward 8-10%+ signals credit stress
     - Oil (WTI/Brent): >$100 pressures core inflation; $80 is a psychological safe line
     - Unemployment: ~4% full employment, <4% overheating, >5.5% weak
     - Initial Jobless Claims: 250k-350k normal, <250k tight, >350k weak
     - Nonfarm Payrolls (MoM): <50k weak, >250k strong
     - CPI / Core CPI / Core PCE / PPI: vs the Fed's 2.0% target
     - Consumer Sentiment: neutral 100, >120 strong, <100 weak
     - FINRA Margin Debt: a sustained decline = deleveraging (clears speculative froth)
   - Include the FINRA Margin Debt row in the Central Bank & Liquidity table. Omit any row whose Latest is N/A.

3. **Regime Read** — 150-250 words synthesizing the liquidity + credit + inflation picture into a single market-regime call (easing vs tightening, risk-on vs risk-off).

4. **Playbook Checkpoint** — Evaluate the 5-condition buy signal (VIX>30; Fed not on a hiking path; FINRA margin deleveraging; a clear high-growth thematic engine; leaders still beating on fundamentals) and the 3-condition sell signal (fundamentals plateauing; a hawkish Fed pivot; valuations far above historical bands). For each condition, mark ✅ met / ❌ not met / ❔ insufficient data, based ONLY on the numbers above (mark the fundamentals/thematic conditions ❔ — this dashboard has no company data). This is informational, not financial advice.

Style: English, professional and concise. Do not invent numbers not present in the input.
`;
  }

  return `你是一位宏观策略分析师。以下是截至 ${dateStr} 的美国宏观指标最新数据，来源为 FRED（美联储经济数据库）和 FINRA。所有数字均为官方发布，请照抄，不要重新计算。

${dataSection}

### 散户杠杆
${finraLine}

---

请生成一份结构清晰的**宏观市场仪表盘**，要求：

1. **宏观速览** — 3~5 句话，概括当前流动性、利率与通胀环境，及其对风险资产的含义。

2. **指标表格** — 每个分组（央行与流动性；利率与信用；经济与通胀）各用一张 **Markdown 表格**呈现，列固定为：

   | 指标 | 最新 | 前值 | 变化 | 解读 |
   | :--- | ---: | ---: | ---: | :--- |

   - **最新 / 前值 / 变化**：数字（含单位）照抄输入，不要重算
   - **解读**：3~6 个字的判读，参考以下阈值：
     - 联邦基金利率 / 10 年美债：10Y 高于 4.0% 偏高，高于 4.5% 极度紧缩
     - VIX：>30 极度恐慌（历史底部区），15~20 平静，<10 极度乐观
     - 10Y-2Y 利差：<0 倒挂（12~24 个月内衰退信号）
     - 高收益债信用利差：飙向 8~10%+ 预示信用紧张
     - 原油（WTI/布伦特）：>$100 推升核心通胀；$80 为心理安全线
     - 失业率：约 4% 充分就业，<4% 过热，>5.5% 疲弱
     - 初请失业金：25 万~35 万正常，<25 万偏紧，>35 万疲弱
     - 非农（环比）：<5 万疲弱，>25 万强劲
     - CPI / 核心 CPI / 核心 PCE / PPI：对照美联储 2.0% 目标
     - 消费者信心：中性 100，>120 强，<100 弱
     - FINRA 保证金债务：持续下降＝去杠杆（清洗投机泡沫）
   - 将 FINRA 保证金债务一行并入"央行与流动性"表。任何"最新"为 N/A 的行请省略。

3. **格局研判** — 150~250 字，将流动性 + 信用 + 通胀综合成一个市场格局判断（宽松 vs 紧缩，风险偏好 vs 规避）。

4. **策略检查点** — 评估 5 条买入信号（VIX>30；美联储非加息路径；FINRA 保证金去杠杆；存在明确的高增长主题引擎；龙头基本面仍超预期）与 3 条卖出信号（基本面见顶；美联储鹰派转向；估值远超历史区间）。对每个条件标注 ✅ 满足 / ❌ 不满足 / ❔ 数据不足，且**仅**依据上面的数字（基本面/主题类条件标 ❔——本仪表盘无个股数据）。仅供参考，非投资建议。

语言要求：中文，专业简洁。不要编造输入中没有的数字。
`;
}

// ---------------------------------------------------------------------------
// Vietnam macro dashboard prompt (SSI + Entrade + VCB + Yahoo + NSO + VBMA)
// ---------------------------------------------------------------------------

/** Signed percentage, e.g. "+1.2%" / "-0.4%" / "N/A". */
function fmtPct(value: number | null, decimals = 1): string {
  if (value === null) return "N/A";
  return `${value > 0 ? "+" : ""}${value.toFixed(decimals)}%`;
}

/** VND billions with thousands separators — the unit VN market data is quoted in. */
function fmtVndBn(value: number | null): string {
  if (value === null) return "N/A";
  return `${value > 0 ? "+" : ""}${value.toLocaleString("en-US", { maximumFractionDigits: 0 })} bn VND`;
}

function vnFxLines(fx: VnFxRate | null, lang: Lang): string {
  if (!fx) {
    return lang === "en"
      ? "- USD/VND (Vietcombank): data unavailable this run"
      : "- USD/VND（越南外贸银行）: 本次未取到数据";
  }
  const sell = fx.sell.toLocaleString("en-US");
  const transfer = fx.transfer.toLocaleString("en-US");
  return lang === "en"
    ? `- USD/VND (Vietcombank board): sell ${sell} | transfer ${transfer} | 1M ${fmtPct(fx.changePct1m, 2)} | YTD ${fmtPct(fx.changePctYtd, 2)} | as of ${fx.asOf}`
    : `- USD/VND（越南外贸银行牌价）: 卖出 ${sell} | 转账 ${transfer} | 近 1 月 ${fmtPct(fx.changePct1m, 2)} | 年初至今 ${fmtPct(fx.changePctYtd, 2)} | 截至 ${fx.asOf}`;
}

function vnGlobalLine(m: VnGlobalMetric, lang: Lang): string {
  const latest =
    m.latest === null
      ? "N/A"
      : `${m.latest.toLocaleString("en-US", {
          minimumFractionDigits: m.decimals,
          maximumFractionDigits: m.decimals,
        })}${m.unit ? ` ${m.unit}` : ""}`;
  return lang === "en"
    ? `- ${m.label.en} (${m.symbol}): latest ${latest} | 1d ${fmtPct(m.changePct1d, 2)} | 20d ${fmtPct(m.changePct20d, 2)} | as of ${m.asOf || "n/a"}`
    : `- ${m.label.zh}（${m.symbol}）: 最新 ${latest} | 日涨跌 ${fmtPct(m.changePct1d, 2)} | 20 日 ${fmtPct(m.changePct20d, 2)} | 截至 ${m.asOf || "无"}`;
}

function vnAnnualLine(m: VnAnnualMetric, lang: Lang): string {
  const fmt = (v: number | null): string =>
    v === null
      ? "N/A"
      : `${v.toLocaleString("en-US", { maximumFractionDigits: 2 })}${m.unit === "%" ? "%" : ` ${m.unit}`}`;
  return lang === "en"
    ? `- ${m.label.en}: ${fmt(m.latest)} (${m.year || "n/a"}) | prior year ${fmt(m.prior)}`
    : `- ${m.label.zh}: ${fmt(m.latest)}（${m.year || "无"}）| 上一年 ${fmt(m.prior)}`;
}

function vnMarketSection(market: VnMarketData, lang: Lang): string {
  const en = lang === "en";
  const lines: string[] = [];

  for (const q of market.indices) {
    lines.push(
      en
        ? `- ${q.label}: ${q.close.toLocaleString("en-US")} | 1d ${fmtPct(q.changePct1d, 2)} | 5d ${fmtPct(q.changePct5d, 2)} | 20d ${fmtPct(q.changePct20d, 2)} | as of ${q.asOf}`
        : `- ${q.label}: ${q.close.toLocaleString("en-US")} | 日 ${fmtPct(q.changePct1d, 2)} | 5 日 ${fmtPct(q.changePct5d, 2)} | 20 日 ${fmtPct(q.changePct20d, 2)} | 截至 ${q.asOf}`,
    );
  }

  if (market.futuresBasis) {
    const b = market.futuresBasis;
    lines.push(
      en
        ? `- VN30F1M basis: futures ${b.futures} vs spot ${b.spot} → ${b.basis > 0 ? "+" : ""}${b.basis} pts (${fmtPct(b.basisPct, 2)})`
        : `- VN30F1M 基差: 期货 ${b.futures} vs 现货 ${b.spot} → ${b.basis > 0 ? "+" : ""}${b.basis} 点（${fmtPct(b.basisPct, 2)}）`,
    );
  }

  if (market.turnoverVndBn !== null) {
    lines.push(
      en
        ? `- Order-matched turnover (HOSE + HNX, excludes put-through/block deals): ${market.turnoverVndBn.toLocaleString("en-US")} bn VND`
        : `- 撮合成交额（HOSE + HNX，不含大宗/协议交易）: ${market.turnoverVndBn.toLocaleString("en-US")} 十亿越南盾`,
    );
  }

  if (market.breadth) {
    const b = market.breadth;
    lines.push(
      en
        ? `- Breadth: ${b.advancers} advancing / ${b.decliners} declining / ${b.unchanged} flat | ${b.ceiling} limit-up, ${b.floor} limit-down`
        : `- 涨跌家数: 上涨 ${b.advancers} / 下跌 ${b.decliners} / 平盘 ${b.unchanged} | 涨停 ${b.ceiling} 家，跌停 ${b.floor} 家`,
    );
  }

  if (market.foreign) {
    const f = market.foreign;
    const list = (items: typeof f.topBuys): string =>
      items.length === 0 ? "N/A" : items.map((t) => `${t.symbol} ${fmtVndBn(t.netVndBn)}`).join(", ");
    lines.push(
      en
        ? `- Foreign flow for this session only (includes put-through/block deals): bought ${f.buyVndBn.toLocaleString("en-US")} bn, sold ${f.sellVndBn.toLocaleString("en-US")} bn → net ${fmtVndBn(f.netVndBn)}`
        : `- 外资流向（仅当日，含大宗/协议交易）: 买入 ${f.buyVndBn.toLocaleString("en-US")} 十亿，卖出 ${f.sellVndBn.toLocaleString("en-US")} 十亿 → 净额 ${fmtVndBn(f.netVndBn)}`,
      en ? `- Top foreign net buys: ${list(f.topBuys)}` : `- 外资净买入前列: ${list(f.topBuys)}`,
      en ? `- Top foreign net sells: ${list(f.topSells)}` : `- 外资净卖出前列: ${list(f.topSells)}`,
    );
  }

  if (lines.length === 0) {
    return en ? "- Market internals: data unavailable this run" : "- 市场内部指标: 本次未取到数据";
  }
  return lines.join("\n");
}

function vnDocsSection(docs: VnDocsData, lang: Lang): string {
  if (docs.docs.length === 0) {
    return lang === "en" ? "No official documents could be retrieved this run." : "本次未取到任何官方文件。";
  }
  return docs.docs
    .map((d) => {
      const pages = d.pages?.length ? ` (pages ${d.pages.join(", ")})` : "";
      const head =
        lang === "en"
          ? `#### ${d.source} — ${d.title}${pages}\nSource: ${d.url}`
          : `#### ${d.source} — ${d.title}${pages}\n来源: ${d.url}`;
      return `${head}\n\n${d.excerpt}`;
    })
    .join("\n\n");
}

export function buildVnMacroPrompt(
  market: VnMarketData,
  macro: VnMacroData,
  docs: VnDocsData,
  dateStr: string,
  lang: Lang = "zh",
): string {
  const marketSection = vnMarketSection(market, lang);
  const fxSection = [vnFxLines(macro.fx, lang), ...macro.global.map((m) => vnGlobalLine(m, lang))].join("\n");
  const annualSection =
    macro.annual.length > 0
      ? macro.annual.map((m) => vnAnnualLine(m, lang)).join("\n")
      : lang === "en"
        ? "- World Bank annual series: unavailable this run"
        : "- 世界银行年度数据: 本次未取到";
  const docsSection = vnDocsSection(docs, lang);

  if (lang === "en") {
    return `You are an emerging-market strategist covering Vietnam. Below are the latest Vietnam market and macro readings as of ${dateStr}. Structured numbers come from the SSI iBoard price board, the DNSE Entrade chart API, the Vietcombank exchange-rate board, Yahoo Finance and the World Bank. The document excerpts are verbatim text extracted from official publications. Copy every number verbatim — never recompute or extrapolate.

### Market Internals (HOSE + HNX)
${marketSection}

### Currency & Global Drivers
${fxSection}

### Official Annual Series (World Bank, lagged)
${annualSection}

### Official Document Excerpts
${docsSection}

---

Generate a structured **Vietnam Macro Market Dashboard** in English:

1. **Market Snapshot** — 3-5 sentences on the index move, liquidity (turnover), foreign flow and currency backdrop, and what they imply for Vietnamese equities.

2. **Indicator Tables** — three **Markdown tables**, columns exactly as shown. Omit any row whose value is N/A.

   *Market Internals*

   | Indicator | Latest | Change | Reading |
   | :--- | ---: | ---: | :--- |

   *Currency & Global Drivers*

   | Indicator | Latest | Short-term change | Longer-term change | Reading |
   | :--- | ---: | ---: | ---: | :--- |

   The two change columns are 1-day and 20-day for the global series, and 1-month and year-to-date for USD/VND. Label each cell with its own window (e.g. "+0.51% YTD") so the periods are never read as the same thing.

   *Real Economy*

   | Indicator | Latest | Period | Reading |
   | :--- | ---: | :--- | :--- |

   Fill *Real Economy* from the document excerpts (CPI, core inflation, disbursed FDI, registered FDI, public investment disbursement, trade, PMI if present) plus the World Bank rows. Use the period stated in the source.

   **Reading** is a 3-6 word interpretation. Reference thresholds:
   - USD/VND: annual depreciation above 3-4% triggers foreign outflows and forces SBV tightening; stability is the precondition for easing
   - DXY / US 10Y: a rising dollar and rising US yields both widen pressure on the dong
   - Foreign net flow: sustained net buying anchors retail confidence; persistent net selling is the classic Vietnam drawdown backdrop. You are given **one session only** — describe that session, and never claim a multi-day streak or trend you cannot see
   - Turnover and foreign flow are measured differently: turnover is order-matched value, foreign flow includes put-through (block) deals. A single block can push one ticker's foreign flow above its matched turnover — do not present that as an anomaly or compare the two as like figures
   - VN30F1M basis: a deeply negative basis signals local hedging/fear and mean-reverts fast after capitulation
   - Breadth / limit-down count: a cluster of limit-down names is a forced-liquidation ("giải chấp") tell
   - Turnover: a sharp collapse alongside falling prices signals buyer withdrawal rather than distribution
   - CPI: the government's annual target is 4.0-4.5%; below it the SBV has room to stay accommodative
   - Disbursed FDI: above USD 20bn/year keeps USD inflows and industrial demand healthy
   - Interbank overnight rate: above 5-6% signals a tight banking system
   - Government bond yields: the domestic risk-free rate; falling yields are equity-supportive

3. **Money Market & Bond Watch** — 120-200 words drawn from the VBMA and NSO excerpts: interbank rates by tenor, the SBV central rate, government bond yields and auction results, and corporate-bond issuance/maturities. Name the publication you took each figure from. If an excerpt does not contain a figure, say so rather than estimating it.

4. **Regime Read** — 150-250 words synthesizing currency + liquidity + foreign flow + credit into a single regime call for Vietnamese equities.

5. **Playbook Checkpoint** — Evaluate the Vietnam 5-condition buy signal (VN-Index forward P/E near or below 11x; SBV easing or pausing with USD/VND stable; brokerage margin debt washed out; foreign net selling ceasing or reversing over 5-10 sessions; leading sectors holding structural support) and the 3-condition sell signal (SBV hawkish pivot or FX crisis; forward P/E above 16.5-17.5x with record margin usage; systemic credit stress in banks or real-estate bonds). Mark each ✅ met / ❌ not met / ❔ insufficient data.

   **Important:** this pipeline has no free source for aggregate VN-Index P/E or for market-wide brokerage margin debt (the usual endpoints are behind a Cloudflare challenge). Mark every condition that depends on them ❔ insufficient data and say so plainly — do not substitute a guess.

   This is informational, not financial advice.

Style: English, professional and concise. Do not invent numbers absent from the input.
`;
  }

  return `你是一位专注越南市场的新兴市场策略分析师。以下是截至 ${dateStr} 的越南市场与宏观数据。结构化数字来自 SSI iBoard 行情板、DNSE Entrade 行情接口、越南外贸银行（Vietcombank）牌价、Yahoo Finance 与世界银行；文件摘录为官方出版物的原文抽取。所有数字请照抄，不要重算或外推。

### 市场内部指标（HOSE + HNX）
${marketSection}

### 汇率与全球驱动因素
${fxSection}

### 官方年度数据（世界银行，滞后）
${annualSection}

### 官方文件摘录
${docsSection}

---

请生成一份结构清晰的**越南宏观市场仪表盘**，要求：

1. **市场速览** — 3~5 句话，概括指数涨跌、流动性（成交额）、外资流向与汇率环境，及其对越南股市的含义。

2. **指标表格** — 三张 **Markdown 表格**，列固定如下。任何数值为 N/A 的行请省略。

   *市场内部指标*

   | 指标 | 最新 | 变化 | 解读 |
   | :--- | ---: | ---: | :--- |

   *汇率与全球驱动*

   | 指标 | 最新 | 短期变化 | 中期变化 | 解读 |
   | :--- | ---: | ---: | ---: | :--- |

   两列变化：全球指标为 1 日与 20 日，USD/VND 为近 1 月与年初至今。每个单元格请标明各自的时间窗口（如"+0.51%（年初至今）"），避免被误读为同一口径。

   *实体经济*

   | 指标 | 最新 | 统计期 | 解读 |
   | :--- | ---: | :--- | :--- |

   *实体经济*表请依据文件摘录填写（CPI、核心通胀、FDI 实际到位、FDI 注册、公共投资拨付、进出口、如有则含 PMI），并补充世界银行各行，统计期以原文为准。

   **解读**为 3~6 个字的判读，参考阈值：
   - USD/VND：年贬值超过 3~4% 会触发外资流出并迫使 SBV 收紧；汇率稳定是宽松的前提
   - 美元指数 / 美国 10 年期国债：美元走强与美债收益率上行都会加大越南盾压力
   - 外资净流向：持续净买入为散户信心之锚；持续净卖出是越南典型下跌背景。输入**仅含单个交易日**，只描述当日情况，不得声称多日连续净卖出等无法证实的趋势
   - 成交额与外资流向口径不同：成交额为撮合成交，外资流向含大宗/协议交易。个股外资流向金额可能超过其撮合成交额，这属正常，不要作为异常提示，也不要将两者直接对比
   - VN30F1M 基差：深度负基差代表本地对冲/恐慌情绪，通常在恐慌见底后快速回归
   - 涨跌家数 / 跌停家数：跌停成群是强制平仓（giải chấp）的信号
   - 成交额：价跌量急剧萎缩代表买盘退场，而非派发
   - CPI：政府年度目标为 4.0%~4.5%，低于此线 SBV 才有维持宽松的空间
   - FDI 实际到位：年度超过 200 亿美元可维持美元流入与工业需求
   - 银行间隔夜利率：高于 5~6% 说明银行体系流动性偏紧
   - 政府债收益率：国内无风险利率，收益率下行利好权益

3. **货币市场与债市观察** — 120~200 字，取材于 VBMA 与 NSO 摘录：各期限银行间利率、SBV 中心汇率、政府债收益率与招标结果、企业债发行与到期。请注明每个数字取自哪份出版物；摘录中没有的数字，直接说明缺失，不要估算。

4. **格局研判** — 150~250 字，将汇率 + 流动性 + 外资流向 + 信用综合成对越南股市的单一格局判断。

5. **策略检查点** — 评估越南 5 条买入信号（VN-Index 预期市盈率接近或低于 11 倍；SBV 转向宽松或暂停紧缩且 USD/VND 稳定；券商融资余额完成洗盘；外资净卖出在 5~10 个交易日内停止或转为净买入；龙头板块守住结构性支撑）与 3 条卖出信号（SBV 鹰派转向或汇率危机；预期市盈率超过 16.5~17.5 倍且融资余额创新高；银行或地产债出现系统性信用压力）。逐条标注 ✅ 满足 / ❌ 不满足 / ❔ 数据不足。

   **重要：** 本流程没有可用的免费数据源获取 VN-Index 整体市盈率与全市场券商融资余额（常用接口被 Cloudflare 拦截）。凡依赖这两项的条件一律标注 ❔ 数据不足并明确说明，不要用猜测替代。

   仅供参考，非投资建议。

语言要求：中文，专业简洁。不要编造输入中没有的数字。
`;
}

// ---------------------------------------------------------------------------
// Highlights prompt — extracts structured highlights from finished reports
// for use in Telegram notifications.
// ---------------------------------------------------------------------------

export interface ReportHighlights {
  [reportId: string]: string[];
}

export function buildHighlightsPrompt(
  reportContents: Record<string, string>,
  lang: Lang = "zh",
  itemsPerReport: number = 6,
): string {
  const sections = Object.entries(reportContents)
    .map(([id, content]) => `## [${id}]\n\n${content.slice(0, 2000)}`)
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a concise news editor. The following are today's AI ecosystem report excerpts, each labeled with a report ID.

${sections}

---

For each report, extract ${itemsPerReport} of the most noteworthy highlights — the kind that would make a reader want to click through. Each highlight should be a single short sentence (under 60 characters).

Return ONLY valid JSON, no markdown fences, no explanation. Format:
{"ai-cli":["highlight 1","highlight 2",...],"ai-agents":["highlight 1","highlight 2",...],...}

Rules:
- Use the exact report IDs from the [brackets] above as keys
- Only include reports that have meaningful content (skip reports with failure messages or no activity)
- ${itemsPerReport} highlights per report, each under 60 characters
- Focus on: new releases, notable features, trending projects, key discussions
- Be specific: include project names, version numbers, star counts where relevant`;
  }

  return `你是一位简洁的新闻编辑。以下是今日 AI 生态各报告的摘要，每个报告用 ID 标注。

${sections}

---

为每份报告提取 ${itemsPerReport} 条最值得关注的亮点——能让读者产生点击欲望的那种。每条亮点用一句简短的话（不超过 30 个字）。

只返回合法的 JSON，不要 markdown 代码块，不要解释。格式：
{"ai-cli":["亮点1","亮点2",...],"ai-agents":["亮点1","亮点2",...],...}

规则：
- 用上面方括号中的报告 ID 作为 key
- 只包含有实际内容的报告（跳过失败或无活动的报告）
- 每个报告 ${itemsPerReport} 条亮点，每条不超过 30 个字
- 重点关注：新版本发布、重要特性、热门项目、关键讨论
- 要具体：包含项目名、版本号、star 数等关键信息
- 每条亮点必须用中文表述；即使原文（论文标题、模型名、讨论标题等）是英文，也要翻译成中文，仅项目名、模型名、产品名等专有名词可保留英文，不要直接照抄整句英文`;
}

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

export function buildPhPrompt(data: PhData, dateStr: string, lang: Lang = "zh"): string {
  const productsText = data.products
    .map((p, i) =>
      lang === "en"
        ? `${i + 1}. **${p.name}** — ${p.tagline}\n` +
          `   Product Hunt: ${p.url}\n` +
          `   Website: ${p.website}\n` +
          `   Votes: ${p.votesCount} | Comments: ${p.commentsCount} | Topics: ${p.topics.join(", ")}`
        : `${i + 1}. **${p.name}** — ${p.tagline}\n` +
          `   Product Hunt: ${p.url}\n` +
          `   官网: ${p.website}\n` +
          `   投票: ${p.votesCount} | 评论: ${p.commentsCount} | 话题: ${p.topics.join(", ")}`,
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

  return `你是 AI 产品分析师。以下是 ${dateStr} 从 Product Hunt 抓取的过去 24 小时内 AI 相关产品发布（按投票数降序，共 ${data.products.length} 个）：

---

${productsText}

---

请生成一份结构清晰的《Product Hunt AI 产品日报》，要求：

1. **今日速览** — 3~5 句话，概括今日 Product Hunt 上 AI 产品发布的整体趋势和亮点

2. **热门产品** — 按以下分类整理，每个分类用 **Markdown 表格**呈现，列固定为：

   | 产品 | 投票 | 评论 | 简要说明 |
   | :--- | ---: | ---: | :--- |

   - **产品**：产品名做成指向 Product Hunt 页面的 Markdown 链接，有官网则其后附 " · [官网](官网链接)"
   - **投票 / 评论**：数字照抄输入，不要重算
   - **简要说明**：2 句话——结合简介，说明它解决什么问题、有何独特之处
   - 每类选取最具代表性的产品；某分类为空则整张表省略

   分类：
   - 🤖 AI 智能体与助手（聊天机器人、Copilot、自主 Agent）
   - 🛠️ 开发者工具（API、SDK、编程工具、开发基础设施）
   - 📊 AI 应用（垂直场景产品、AI 驱动的 SaaS 工具）
   - 🎨 创意与内容（图像/视频/文本生成、设计工具）
   - 🔧 基础设施与模型（模型服务、微调、MLOps）

3. **市场信号** — 100~200 字，分析今日 Product Hunt AI 产品的发布规律：
   - 哪些类别最密集？
   - 有无创新性的思路或新颖的应用场景？
   - 开源 vs 闭源的趋势

4. **值得试用** — 列出 2~3 个最值得开发者试用的产品，简述理由

语言要求：中文，简洁专业，保留所有原文链接。
`;
}

// ---------------------------------------------------------------------------
// ArXiv prompt
// ---------------------------------------------------------------------------

export function buildArxivPrompt(data: ArxivData, dateStr: string, lang: Lang = "zh"): string {
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
            `   链接: ${p.url}\n` +
            `   作者: ${authors} | 分类: ${cats}\n` +
            `   发布: ${p.published.slice(0, 10)}\n` +
            `   摘要: ${p.summary.slice(0, 300)}${p.summary.length > 300 ? "..." : ""}`;
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

  return `你是 AI 研究分析师。以下是 ${dateStr} ArXiv 上最新的 AI 相关论文（共 ${data.papers.length} 篇，来自 cs.AI、cs.CL、cs.LG）：

---

${papersText}

---

请生成一份结构清晰的《ArXiv AI 研究日报》，要求：

1. **今日速览** — 3~5 句话，概括今日最值得关注的研究方向和突破

2. **重点论文** — 选出 8~15 篇最重要的论文，按主题分类。在每个主题标题下用 **Markdown 表格**呈现，列固定为：

   | 论文 | 作者 | 简要说明 |
   | :--- | :--- | :--- |

   - **论文**：标题做成指向其 ArXiv 链接的 Markdown 链接
   - **作者**：缩写（前 3 位 + et al.）
   - **简要说明**：2 句话——核心贡献及为什么值得关注
   - 某主题下若无论文则整张表省略

   主题：
   - 🧠 大语言模型（架构、训练、对齐、评估）
   - 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
   - 🔧 方法与框架（新技术、基准测试、效率优化）
   - 📊 应用（垂直领域、多模态、代码生成）

3. **研究趋势信号** — 100~200 字，从今日投稿中观察到的新兴研究方向

4. **值得精读** — 2~3 篇最值得完整阅读的论文，简述理由

语言要求：中文，简洁专业，保留所有 ArXiv 链接。
`;
}

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

// ---------------------------------------------------------------------------
// Community prompt (Dev.to + Lobste.rs combined)
// ---------------------------------------------------------------------------

export function buildCommunityPrompt(
  devto: DevtoData,
  lobsters: LobstersData,
  dateStr: string,
  lang: Lang = "zh",
): string {
  const devtoText =
    devto.articles.length > 0
      ? devto.articles
          .map((a, i) =>
            lang === "en"
              ? `${i + 1}. **${a.title}**\n` +
                `   Link: ${a.url}\n` +
                `   Author: ${a.user} | Reactions: ${a.positiveReactionsCount} | Comments: ${a.commentsCount} | Reading: ${a.readingTimeMinutes} min\n` +
                `   Tags: ${a.tags.join(", ")}\n` +
                `   ${a.description}`
              : `${i + 1}. **${a.title}**\n` +
                `   链接: ${a.url}\n` +
                `   作者: ${a.user} | 点赞: ${a.positiveReactionsCount} | 评论: ${a.commentsCount} | 阅读: ${a.readingTimeMinutes} 分钟\n` +
                `   标签: ${a.tags.join(", ")}\n` +
                `   ${a.description}`,
          )
          .join("\n\n")
      : lang === "en"
        ? "(No Dev.to articles available)"
        : "（无 Dev.to 文章）";

  const lobstersText =
    lobsters.stories.length > 0
      ? lobsters.stories
          .map((s, i) =>
            lang === "en"
              ? `${i + 1}. **${s.title}**\n` +
                `   Link: ${s.url}\n` +
                `   Discussion: ${s.commentsUrl}\n` +
                `   Score: ${s.score} | Comments: ${s.commentCount} | Author: ${s.author} | Tags: ${s.tags.join(", ")}`
              : `${i + 1}. **${s.title}**\n` +
                `   链接: ${s.url}\n` +
                `   讨论: ${s.commentsUrl}\n` +
                `   分数: ${s.score} | 评论: ${s.commentCount} | 作者: ${s.author} | 标签: ${s.tags.join(", ")}`,
          )
          .join("\n\n")
      : lang === "en"
        ? "(No Lobste.rs stories available)"
        : "（无 Lobste.rs 内容）";

  if (lang === "en") {
    return `You are a tech community analyst. The following are AI-related content from Dev.to and Lobste.rs as of ${dateStr}:

## Dev.to Articles (${devto.articles.length} articles)

${devtoText}

---

## Lobste.rs Stories (${lobsters.stories.length} stories)

${lobstersText}

---

Generate a structured Tech Community AI Digest in English:

1. **Today's Highlights** — 3-5 sentences on the most discussed AI topics across these communities today

2. **Dev.to Highlights** — Select 5-10 most valuable articles as a **Markdown table**:

   | Article | Reactions | Comments | Summary |
   | :--- | ---: | ---: | :--- |

   - **Article**: title as a Markdown link
   - **Reactions / Comments**: copy the numbers from the input verbatim
   - **Summary**: 2 sentences — the key takeaway for developers

3. **Lobste.rs Highlights** — Select 3-8 most notable stories as a **Markdown table**:

   | Story | Score | Comments | Summary |
   | :--- | ---: | ---: | :--- |

   - **Story**: title as a Markdown link, followed by " · [discuss](discussion-url)"
   - **Score / Comments**: copy the numbers from the input verbatim
   - **Summary**: 2 sentences — why it's worth reading

4. **Community Pulse** — 100-200 words on what these communities are talking about:
   - Common themes across both platforms
   - Practical concerns developers have about AI tools
   - Emerging tutorials, patterns, or best practices

5. **Worth Reading** — 2-3 articles/stories most worth reading in depth

Style: English, concise and developer-friendly, preserve all original links.
`;
  }

  return `你是技术社区分析师。以下是 ${dateStr} Dev.to 和 Lobste.rs 上的 AI 相关内容：

## Dev.to 文章（共 ${devto.articles.length} 篇）

${devtoText}

---

## Lobste.rs 内容（共 ${lobsters.stories.length} 条）

${lobstersText}

---

请生成一份结构清晰的《技术社区 AI 动态日报》，要求：

1. **今日速览** — 3~5 句话，概括今日技术社区围绕 AI 最热门的讨论方向

2. **Dev.to 精选** — 选出 5~10 篇最有价值的文章，用 **Markdown 表格**呈现：

   | 文章 | 点赞 | 评论 | 简要说明 |
   | :--- | ---: | ---: | :--- |

   - **文章**：标题做成 Markdown 链接
   - **点赞 / 评论**：数字照抄输入，不要重算
   - **简要说明**：2 句话——对开发者的核心价值

3. **Lobste.rs 精选** — 选出 3~8 条最值得关注的内容，用 **Markdown 表格**呈现：

   | 标题 | 分数 | 评论 | 简要说明 |
   | :--- | ---: | ---: | :--- |

   - **标题**：标题做成 Markdown 链接，其后附 " · [讨论](讨论链接)"
   - **分数 / 评论**：数字照抄输入，不要重算
   - **简要说明**：2 句话——为什么值得阅读

4. **社区脉搏** — 100~200 字，分析技术社区在聊什么：
   - 两个平台共同关注的主题
   - 开发者对 AI 工具的实际关切
   - 新兴的教程、模式或最佳实践

5. **值得精读** — 2~3 篇最值得深入阅读的内容

语言要求：中文，简洁专业，保留所有原文链接。
`;
}
