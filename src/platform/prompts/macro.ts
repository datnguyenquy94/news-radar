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
  liquidity: { vi: "Ngân hàng trung ương và thanh khoản", en: "Central Bank & Liquidity" },
  yields_credit: { vi: "Lợi suất và tín dụng", en: "Yields & Credit" },
  econ_inflation: { vi: "Kinh tế và lạm phát", en: "Economy & Inflation" },
};

function macroMetricLine(m: FredMetric, lang: Lang): string {
  const latest = fmtNum(m.latest, m.decimals, m.unit);
  const prior = fmtNum(m.prior, m.decimals, m.unit);
  const change = fmtNum(m.change, m.decimals, m.unit);
  return lang === "en"
    ? `- ${m.label.en} (${m.series}): latest ${latest} | prior ${prior} | change ${change} | as of ${m.asOf || "n/a"}`
    : `- ${m.label.vi} (${m.series}): mới nhất ${latest} | trước đó ${prior} | thay đổi ${change} | tính đến ${m.asOf || "chưa có"}`;
}

export function buildMacroPrompt(
  fred: FredData,
  finra: FinraData,
  dateStr: string,
  lang: Lang = "vi",
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
        : "- Nợ ký quỹ FINRA: lần chạy này không lấy được dữ liệu";
    }
    const b = (finra.latest.debitMillions / 1000).toLocaleString("en-US", { maximumFractionDigits: 1 });
    const pb = finra.prior
      ? (finra.prior.debitMillions / 1000).toLocaleString("en-US", { maximumFractionDigits: 1 })
      : "N/A";
    const chg = finra.changePct === null ? "N/A" : `${finra.changePct > 0 ? "+" : ""}${finra.changePct}%`;
    return lang === "en"
      ? `- FINRA Margin Debt (retail leverage): latest ${finra.latest.period} $${b}B | prior ${pb === "N/A" ? "N/A" : "$" + pb + "B"} | MoM ${chg}`
      : `- Nợ ký quỹ FINRA (đòn bẩy nhà đầu tư cá nhân): mới nhất ${finra.latest.period} $${b}B | trước đó ${pb === "N/A" ? "N/A" : "$" + pb + "B"} | so với tháng trước ${chg}`;
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

  return `Bạn là một nhà chiến lược vĩ mô. Dưới đây là dữ liệu mới nhất về các chỉ số vĩ mô của Mỹ tính đến ${dateStr}, nguồn từ FRED (Cơ sở dữ liệu kinh tế của Cục Dự trữ Liên bang) và FINRA. Tất cả các số liệu đều là công bố chính thức — hãy chép nguyên văn, không tự tính lại.

${dataSection}

### Đòn bẩy nhà đầu tư cá nhân
${finraLine}

---

Hãy tạo một **Bảng theo dõi thị trường vĩ mô** có cấu trúc rõ ràng, theo yêu cầu:

1. **Điểm nhanh vĩ mô** — Tóm tắt trong 3-5 câu bối cảnh thanh khoản, lãi suất và lạm phát hiện tại, và ý nghĩa của nó đối với tài sản rủi ro.

2. **Bảng chỉ số** — Mỗi nhóm (Ngân hàng trung ương và thanh khoản; Lợi suất và tín dụng; Kinh tế và lạm phát) trình bày bằng một **bảng Markdown** với đúng các cột sau:

   | Chỉ số | Mới nhất | Trước đó | Thay đổi | Nhận định |
   | :--- | ---: | ---: | ---: | :--- |

   - **Mới nhất / Trước đó / Thay đổi**: chép nguyên số (kèm đơn vị) từ dữ liệu đầu vào, không tự tính lại
   - **Nhận định**: nhận xét ngắn 3-6 từ, tham khảo các ngưỡng sau:
     - Lãi suất Fed / Lợi suất 10 năm: 10Y trên 4.0% là cao, trên 4.5% là rất thắt chặt
     - VIX: >30 sợ hãi cực độ (thường là đáy lịch sử), 15-20 bình lặng, <10 lạc quan cực độ
     - Chênh lệch 10Y-2Y: <0 đảo ngược (tín hiệu suy thoái trong 12-24 tháng)
     - Chênh lệch tín dụng trái phiếu lợi suất cao: tăng vọt lên 8-10%+ báo hiệu căng thẳng tín dụng
     - Dầu (WTI/Brent): >$100 gây áp lực lên lạm phát lõi; $80 là mức an toàn tâm lý
     - Tỷ lệ thất nghiệp: khoảng 4% là toàn dụng lao động, <4% là quá nóng, >5.5% là yếu
     - Đơn xin trợ cấp thất nghiệp lần đầu: 250-350 nghìn là bình thường, <250 nghìn là thắt chặt, >350 nghìn là yếu
     - Bảng lương phi nông nghiệp (so với tháng trước): <50 nghìn là yếu, >250 nghìn là mạnh
     - CPI / CPI lõi / PCE lõi / PPI: so với mục tiêu 2.0% của Fed
     - Niềm tin người tiêu dùng: trung tính 100, >120 mạnh, <100 yếu
     - Nợ ký quỹ FINRA: giảm liên tục = giảm đòn bẩy (dọn dẹp bong bóng đầu cơ)
   - Đưa dòng Nợ ký quỹ FINRA vào bảng Ngân hàng trung ương và thanh khoản. Bỏ qua bất kỳ dòng nào có giá trị Mới nhất là N/A.

3. **Nhận định chế độ thị trường** — 150-250 từ, tổng hợp bức tranh thanh khoản + tín dụng + lạm phát thành một nhận định chung về chế độ thị trường (nới lỏng vs thắt chặt, ưa rủi ro vs né rủi ro).

4. **Điểm kiểm tra chiến lược** — Đánh giá tín hiệu mua với 5 điều kiện (VIX>30; Fed không trong lộ trình tăng lãi suất; FINRA đang giảm đòn bẩy ký quỹ; có động cơ chủ đề tăng trưởng cao rõ ràng; các mã dẫn dắt vẫn vượt kỳ vọng về cơ bản) và tín hiệu bán với 3 điều kiện (cơ bản chững lại; Fed chuyển hướng diều hâu; định giá vượt xa vùng lịch sử). Với mỗi điều kiện, đánh dấu ✅ đạt / ❌ không đạt / ❔ không đủ dữ liệu, CHỈ dựa trên các số liệu ở trên (đánh dấu ❔ cho các điều kiện về cơ bản/chủ đề — bảng này không có dữ liệu công ty). Nội dung chỉ mang tính tham khảo, không phải lời khuyên đầu tư.

Yêu cầu: tiếng Việt, chuyên nghiệp, ngắn gọn. Không được bịa ra số liệu không có trong dữ liệu đầu vào.
`;
}
