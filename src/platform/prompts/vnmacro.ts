/**
 * LLM prompt builder for the Vietnam macro dashboard.
 */

import type { VnMarketData } from "../../domains/vietnam/vnmarket.ts";
import type {
  VnMacroData,
  VnFxRate,
  VnGlobalMetric,
  VnAnnualMetric,
  VnGold,
} from "../../domains/vietnam/vnmacro.ts";
import type { VnDocsData } from "../../domains/vietnam/vndocs.ts";
import type { Lang } from "../../core/i18n/index.ts";
import { fmtPct } from "./shared.ts";

// ---------------------------------------------------------------------------
// Vietnam macro dashboard prompt (SSI + Entrade + VCB + Yahoo + NSO + VBMA)
// ---------------------------------------------------------------------------

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

/**
 * The domestic gold board plus its premium over the world price. In Vietnam
 * gold competes with bank deposits for the same retail savings, so a widening
 * premium is both a VND-confidence signal and a claim on money that would
 * otherwise be available to equities.
 */
function vnGoldLine(gold: VnGold | null, lang: Lang): string {
  if (!gold) {
    return lang === "en"
      ? "- SJC domestic gold: data unavailable this run"
      : "- SJC 国内金价: 本次未取到数据";
  }
  const sell = gold.sellVndPerTael.toLocaleString("en-US");
  const buy = gold.buyVndPerTael.toLocaleString("en-US");
  const implied = gold.sellUsdPerOz === null ? "N/A" : `$${gold.sellUsdPerOz.toLocaleString("en-US")}/oz`;
  const premium = gold.premiumPct === null ? "N/A" : fmtPct(gold.premiumPct, 1);
  return lang === "en"
    ? `- SJC domestic gold (1L bar): buy ${buy} / sell ${sell} VND per tael | implied ${implied} | premium over world gold ${premium} | as of ${gold.asOf || "n/a"}`
    : `- SJC 国内金价（1L 金条）: 买入 ${buy} / 卖出 ${sell} 越南盾/两 | 折合 ${implied} | 较国际金价溢价 ${premium} | 截至 ${gold.asOf || "无"}`;
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
    // Room is appended per ticker: foreign appetite only matters on names that
    // still have headroom under the foreign-ownership limit.
    const list = (items: typeof f.topBuys): string =>
      items.length === 0
        ? "N/A"
        : items
            .map(
              (t) =>
                `${t.symbol} ${fmtVndBn(t.netVndBn)}` +
                (t.roomVndBn === null ? "" : ` (room ${fmtVndBn(t.roomVndBn).replace("+", "")})`),
            )
            .join(", ");
    lines.push(
      en
        ? `- Foreign flow for this session only (includes put-through/block deals): bought ${f.buyVndBn.toLocaleString("en-US")} bn, sold ${f.sellVndBn.toLocaleString("en-US")} bn → net ${fmtVndBn(f.netVndBn)}`
        : `- 外资流向（仅当日，含大宗/协议交易）: 买入 ${f.buyVndBn.toLocaleString("en-US")} 十亿，卖出 ${f.sellVndBn.toLocaleString("en-US")} 十亿 → 净额 ${fmtVndBn(f.netVndBn)}`,
      en ? `- Top foreign net buys: ${list(f.topBuys)}` : `- 外资净买入前列: ${list(f.topBuys)}`,
      en ? `- Top foreign net sells: ${list(f.topSells)}` : `- 外资净卖出前列: ${list(f.topSells)}`,
      en
        ? `- Traded names with zero remaining foreign room: ${f.zeroRoomCount}`
        : `- 外资额度已用尽的活跃个股数: ${f.zeroRoomCount}`,
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
  const fxSection = [
    vnFxLines(macro.fx, lang),
    ...macro.global.map((m) => vnGlobalLine(m, lang)),
    vnGoldLine(macro.gold, lang),
  ].join("\n");
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
   - Foreign ownership room: a name pinned at its foreign-ownership limit cannot absorb inflow however strong the appetite, so read "foreign buying resumes" only on names that still show room
   - Turnover and foreign flow are measured differently: turnover is order-matched value, foreign flow includes put-through (block) deals. A single block can push one ticker's foreign flow above its matched turnover — do not present that as an anomaly or compare the two as like figures
   - VN30F1M basis: a deeply negative basis signals local hedging/fear and mean-reverts fast after capitulation
   - Breadth / limit-down count: a cluster of limit-down names is a forced-liquidation ("giải chấp") tell
   - Turnover: a sharp collapse alongside falling prices signals buyer withdrawal rather than distribution
   - CPI: the government's annual target is 4.0-4.5%; below it the SBV has room to stay accommodative
   - Disbursed FDI: above USD 20bn/year keeps USD inflows and industrial demand healthy
   - SJC gold premium over world gold: a widening premium is a direct read on weakening VND confidence, and gold competes with bank deposits for the same retail savings — money leaving deposits does not automatically arrive in equities
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
   - 外资持股额度（room ngoại）：已触及外资持股上限的个股无论外资意愿多强都无法承接买盘，因此"外资回流"信号只在仍有额度的个股上成立
   - 成交额与外资流向口径不同：成交额为撮合成交，外资流向含大宗/协议交易。个股外资流向金额可能超过其撮合成交额，这属正常，不要作为异常提示，也不要将两者直接对比
   - VN30F1M 基差：深度负基差代表本地对冲/恐慌情绪，通常在恐慌见底后快速回归
   - 涨跌家数 / 跌停家数：跌停成群是强制平仓（giải chấp）的信号
   - 成交额：价跌量急剧萎缩代表买盘退场，而非派发
   - CPI：政府年度目标为 4.0%~4.5%，低于此线 SBV 才有维持宽松的空间
   - FDI 实际到位：年度超过 200 亿美元可维持美元流入与工业需求
   - SJC 国内金价较国际金价溢价：溢价走阔直接反映对越南盾信心减弱；且黄金与银行存款争夺同一笔居民储蓄，存款流出的资金未必流入股市
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
