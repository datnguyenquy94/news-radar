/**
 * LLM prompt builder for the US macro dashboard (FRED + FINRA).
 */

import type { FredData, FredMetric, FredGroup } from "../../domains/finance/fred.ts";
import type { FinraData } from "../../domains/finance/finra.ts";
import type { Lang } from "../../core/i18n/index.ts";
import { fmtNum } from "./shared.ts";

// ---------------------------------------------------------------------------
// Macro dashboard prompt (FRED + FINRA)
// ---------------------------------------------------------------------------

const MACRO_GROUP_LABEL: Record<FredGroup, Record<Lang, string>> = {
  liquidity: { zh: "央行与流动性", en: "Central Bank & Liquidity" },
  yields_credit: { zh: "利率与信用", en: "Yields & Credit" },
  econ_inflation: { zh: "经济与通胀", en: "Economy & Inflation" },
};

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
