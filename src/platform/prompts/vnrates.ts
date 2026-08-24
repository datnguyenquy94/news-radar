/**
 * LLM prompt builder for the Vietnam interest-rate dashboard (`fin-vnrates`).
 *
 * The framework this encodes is deliberately not "list the rates". SBV policy
 * rates are a step function that has not moved since June 2023, so quoting them
 * alone says nothing. What carries information is the *gap* between the
 * announced corridor and where banks actually fund themselves, read against the
 * fed funds spread that constrains how far the SBV can ease. The prompt is
 * ordered to force that reading: the gap first, the external filter second, the
 * sector impacts only after both.
 *
 * Two blocks the framework asks for have no free source in this pipeline —
 * OMO/T-bill (tín phiếu) operations and the credit-growth quota. They are
 * called out explicitly so the model marks them ❔ rather than guessing, the
 * same convention `buildVnMacroPrompt` uses for VN-Index P/E and margin debt.
 */

import type {
  VnRatesData,
  VnInterbankBoard,
  VnPolicyBoard,
  VnRateSpreads,
  VnRatesFx,
  VnRatesHistoryPoint,
} from "../../feeds/finance/vnrates.ts";
import type { Lang } from "../../core/i18n/index.ts";
import { fmtPct } from "./shared.ts";

/** Sessions of the trend series handed to the model. */
const HISTORY_ROWS = 12;

// ---------------------------------------------------------------------------
// Formatting
// ---------------------------------------------------------------------------

/** A rate level, e.g. "3.01%". */
const fmtRate = (value: number | null | undefined, decimals = 2): string =>
  value == null ? "N/A" : `${value.toFixed(decimals)}%`;

/**
 * A signed percentage-point move, e.g. "-1.01pp". Rate moves are quoted in
 * points, not percent — "-25%" and "-1.01pp" describe the same overnight move
 * and only one of them is comparable with the policy corridor.
 */
const fmtPp = (value: number | null | undefined, decimals = 2): string =>
  value == null ? "N/A" : `${value > 0 ? "+" : ""}${value.toFixed(decimals)}pp`;

/** VND billions, thousands-separated. */
const fmtBn = (value: number | null | undefined): string =>
  value == null ? "N/A" : `${value.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;

// ---------------------------------------------------------------------------
// Data sections
// ---------------------------------------------------------------------------

function policySection(policy: VnPolicyBoard | null, lang: Lang): string {
  const en = lang === "en";
  if (!policy || policy.rates.length === 0) {
    return en
      ? "- SBV policy board: data unavailable this run"
      : "- Các mức lãi suất do NHNN quy định: lần chạy này không lấy được dữ liệu";
  }
  const standing =
    policy.daysSinceEffective == null
      ? ""
      : en
        ? ` (unchanged for ${policy.daysSinceEffective} days)`
        : ` (giữ nguyên ${policy.daysSinceEffective} ngày)`;
  const head = en
    ? `- Effective from ${policy.effectiveDate || "n/a"}${standing}`
    : `- Áp dụng từ ${policy.effectiveDate || "chưa có"}${standing}`;
  const rows = policy.rates.map((r) =>
    en
      ? `- ${r.name}: ${r.raw || fmtRate(r.ratePct)} | decision ${r.decision || "n/a"}`
      : `- ${r.name}: ${r.raw || fmtRate(r.ratePct)} | văn bản ${r.decision || "chưa có"}`,
  );
  return [head, ...rows].join("\n");
}

function interbankSection(board: VnInterbankBoard | null, lang: Lang): string {
  const en = lang === "en";
  if (!board) {
    return en
      ? "- Interbank board: data unavailable this run"
      : "- Lãi suất thị trường liên ngân hàng: lần chạy này không lấy được dữ liệu";
  }

  const { d1, d20, d30 } = board.comparedWith;
  const head = en
    ? `- Session ${board.asOf}; changes measured against ${d1 || "n/a"} (1 session), ${d20 || "n/a"} (20 sessions) and ${d30 || "n/a"} (30 sessions). ${board.sessions} sessions retrieved.`
    : `- Phiên ${board.asOf}; mức thay đổi so với ${d1 || "chưa có"} (1 phiên), ${d20 || "chưa có"} (20 phiên) và ${d30 || "chưa có"} (30 phiên). Đã lấy ${board.sessions} phiên.`;

  const rows = board.tenors.map((t) =>
    en
      ? `- ${t.tenor}: rate ${fmtRate(t.ratePct)} | 1s ${fmtPp(t.changePp1d)} (${fmtPct(t.changePct1d, 2)}) | 20s ${fmtPp(t.changePp20d)} (${fmtPct(t.changePct20d, 2)}) | 30s ${fmtPp(t.changePp30d)} (${fmtPct(t.changePct30d, 2)}) | turnover ${fmtBn(t.volumeVndBn)} bn VND | turnover 1s ${fmtPct(t.volumeChangePct1d, 1)}, 20s ${fmtPct(t.volumeChangePct20d, 1)}, 30s ${fmtPct(t.volumeChangePct30d, 1)}`
      : `- ${t.tenor}: lãi suất ${fmtRate(t.ratePct)} | 1 phiên ${fmtPp(t.changePp1d)} (${fmtPct(t.changePct1d, 2)}) | 20 phiên ${fmtPp(t.changePp20d)} (${fmtPct(t.changePct20d, 2)}) | 30 phiên ${fmtPp(t.changePp30d)} (${fmtPct(t.changePct30d, 2)}) | doanh số ${fmtBn(t.volumeVndBn)} tỷ VND | doanh số 1 phiên ${fmtPct(t.volumeChangePct1d, 1)}, 20 phiên ${fmtPct(t.volumeChangePct20d, 1)}, 30 phiên ${fmtPct(t.volumeChangePct30d, 1)}`,
  );

  const totals = en
    ? `- Total turnover this session: ${fmtBn(board.totalVolumeVndBn)} bn VND | overnight + 1-week share: ${board.shortEndSharePct == null ? "N/A" : `${board.shortEndSharePct}%`}`
    : `- Tổng doanh số phiên này: ${fmtBn(board.totalVolumeVndBn)} tỷ VND | tỷ trọng qua đêm + 1 tuần: ${board.shortEndSharePct == null ? "N/A" : `${board.shortEndSharePct}%`}`;

  return [head, ...rows, totals].join("\n");
}

function spreadsSection(spreads: VnRateSpreads | null, lang: Lang): string {
  const en = lang === "en";
  if (!spreads) {
    return en ? "- Derived spreads: unavailable" : "- Các mức chênh lệch: không có";
  }
  return [
    en
      ? `- Policy gap, overnight vs refinancing rate: ${fmtPp(spreads.policyGapOvernightPp)} (${fmtRate(spreads.overnightPct)} vs ${fmtRate(spreads.refinancingPct)})`
      : `- Chênh lệch chính sách, qua đêm so với lãi suất tái cấp vốn: ${fmtPp(spreads.policyGapOvernightPp)} (${fmtRate(spreads.overnightPct)} so với ${fmtRate(spreads.refinancingPct)})`,
    en
      ? `- Policy gap, 1-week vs refinancing rate ("effectiveness score"): ${fmtPp(spreads.policyGapOneWeekPp)}`
      : `- Chênh lệch chính sách, 1 tuần so với lãi suất tái cấp vốn ("điểm hiệu lực"): ${fmtPp(spreads.policyGapOneWeekPp)}`,
    en
      ? `- Curve slope, 3-month minus overnight: ${fmtPp(spreads.curveSlopePp)}`
      : `- Độ dốc đường cong, 3 tháng trừ qua đêm: ${fmtPp(spreads.curveSlopePp)}`,
    en
      ? `- VND-USD overnight spread: ${fmtPp(spreads.vndUsdSpreadPp)} (VND overnight ${fmtRate(spreads.overnightPct)} vs effective fed funds ${fmtRate(spreads.fedFundsPct)} as of ${spreads.fedFundsAsOf || "n/a"})`
      : `- Chênh lệch lãi suất qua đêm VND-USD: ${fmtPp(spreads.vndUsdSpreadPp)} (qua đêm VND ${fmtRate(spreads.overnightPct)} so với lãi suất quỹ liên bang Mỹ hiệu lực ${fmtRate(spreads.fedFundsPct)} tính đến ${spreads.fedFundsAsOf || "chưa có"})`,
    en
      ? `- Discount rate (corridor floor): ${fmtRate(spreads.discountPct)}`
      : `- Lãi suất tái chiết khấu (sàn hành lang): ${fmtRate(spreads.discountPct)}`,
  ].join("\n");
}

function fxSection(fx: VnRatesFx | null, lang: Lang): string {
  const en = lang === "en";
  if (!fx) {
    return en
      ? "- USD/VND (Vietcombank): data unavailable this run"
      : "- USD/VND (Vietcombank): lần chạy này không lấy được dữ liệu";
  }
  // Spelled out because the sign is counter-intuitive and the instrument is
  // easy to mistake: this is a *spot* commercial board, and a fall in the sell
  // rate is the dong strengthening. A model left to infer it reads the minus as
  // a forward discount and reports depreciation.
  return en
    ? `- USD/VND spot (Vietcombank commercial board, not a forward): sell ${fx.sell.toLocaleString("en-US")} | transfer ${fx.transfer.toLocaleString("en-US")} | change in the spot sell rate over 1 month ${fmtPct(fx.changePct1m, 2)} (positive = VND weaker, negative = VND stronger) | as of ${fx.asOf}`
    : `- USD/VND giao ngay (bảng giá thương mại Vietcombank, không phải tỷ giá kỳ hạn): bán ${fx.sell.toLocaleString("en-US")} | chuyển khoản ${fx.transfer.toLocaleString("en-US")} | thay đổi của tỷ giá bán giao ngay trong 1 tháng ${fmtPct(fx.changePct1m, 2)} (dương = VND mất giá, âm = VND lên giá) | tính đến ${fx.asOf}`;
}

function historySection(history: VnRatesHistoryPoint[], lang: Lang): string {
  const en = lang === "en";
  if (history.length === 0) {
    return en ? "- No session history available." : "- Không có lịch sử phiên.";
  }
  return history
    .slice(0, HISTORY_ROWS)
    .map((p) =>
      en
        ? `- ${p.date}: overnight ${fmtRate(p.overnightPct)} | 1-week ${fmtRate(p.oneWeekPct)} | total turnover ${fmtBn(p.totalVolumeVndBn)} bn VND`
        : `- ${p.date}: qua đêm ${fmtRate(p.overnightPct)} | 1 tuần ${fmtRate(p.oneWeekPct)} | tổng doanh số ${fmtBn(p.totalVolumeVndBn)} tỷ VND`,
    )
    .join("\n");
}

// ---------------------------------------------------------------------------
// Prompt
// ---------------------------------------------------------------------------

export function buildVnRatesPrompt(data: VnRatesData, dateStr: string, lang: Lang = "vi"): string {
  const policy = policySection(data.policy, lang);
  const interbank = interbankSection(data.interbank, lang);
  const spreads = spreadsSection(data.spreads, lang);
  const fx = fxSection(data.fx, lang);
  const history = historySection(data.history, lang);

  if (lang === "en") {
    return `You are a senior macro strategist covering the Vietnamese financial market. Below are the latest interest-rate readings as of ${dateStr}. Policy rates and interbank rates come from the State Bank of Vietnam's own publications, the effective fed funds rate from FRED, and USD/VND from the Vietcombank board. Copy every number verbatim — never recompute, annualise or extrapolate.

Two notes on units. Rate moves are given twice: in **percentage points** (pp) and as a relative percent. Use percentage points whenever you compare a rate with another rate or with the policy corridor; the relative percent is only for describing the size of the move itself. Lookbacks are in **published sessions**, not calendar days — SBV publishes on business days only.

### SBV Policy Rates (lãi suất điều hành)
${policy}

### Interbank Market (lãi suất thị trường liên ngân hàng)
${interbank}

### Derived Spreads
${spreads}

### Currency Backdrop
${fx}

### Recent Session History (newest first)
${history}

---

Generate a structured **Vietnam Interest Rate Macro Dashboard** in English:

1. **Executive Summary** — 3-5 sentences stating the **policy stance** (expansionary / tightening / neutral) and the **liquidity status** (highly liquid / balanced / strained), and the single most important tension between them.

2. **Policy Rate Table** — a **Markdown table**, columns exactly:

   | Policy rate | Level | Effective from | Standing for | Role |
   | :--- | ---: | :--- | ---: | :--- |

   *Role* names what the rate does in the corridor: the refinancing rate is the ceiling, the discount rate the floor.

3. **Interbank Table** — a **Markdown table**, one row per tenor, columns exactly:

   | Tenor | Rate | 1 session | 20 sessions | 30 sessions | Turnover (bn VND) | Turnover 1s | Reading |
   | :--- | ---: | ---: | ---: | ---: | ---: | ---: | :--- |

   Quote the three change columns in percentage points. Omit any row whose rate is N/A. *Reading* is a 3-6 word interpretation.

4. **Policy vs Reality Gap** — 100-150 words. Compare the refinancing rate with the overnight and 1-week interbank rates.
   - Interbank **below** policy: liquidity is excessive — money is cheap and sitting idle in the banking system.
   - Interbank **above** policy: liquidity is tight — banks are short of short-term funding, or the SBV is actively draining.
   Then read the turnover: a large overnight + 1-week share at elevated rates is a liquidity crunch, while the same share at low rates is simply where the market always trades. Say which of the two this is.

5. **External & Structural Filter** — 100-150 words.
   - **VND-USD spread**: the difference between the VND overnight rate and effective fed funds. A negative or very narrow spread makes holding VND unattractive against a carry trade into USD, and is the binding constraint on how far the SBV can ease. Read it together with the USD/VND move.
   - **OMO / T-bill (tín phiếu) activity**: whether the SBV is injecting via reverse repo or draining via bill issuance. **This pipeline has no source for OMO or T-bill operations** — mark this ❔ insufficient data and say so plainly. You may note what the observed rate path would be *consistent* with, but must not assert an operation took place.
   - **Credit-growth quota and seasonality**: quarter-end and year-end tax payments and credit-quota races tighten liquidity. **This pipeline has no source for the credit-growth quota** — mark it ❔ insufficient data. Seasonality you may infer from the session date alone.

6. **Transmission & Sentiment** — 100-150 words.
   - *Effectiveness score*: the 1-week minus refinancing gap. Above +1.0pp the policy signal is blocked by friction in the system; within ±0.5pp the market is following the SBV's lead.
   - *Curve shape*: 3-month versus overnight. An upward slope is normal and prices steady-to-higher rates ahead; an inverted curve prices an imminent liquidity crunch.
   - *Trend*: use the session history to say whether the short end is rising, falling or flat, and over how many sessions.

7. **Macro Market Impact** — a **Markdown table**, columns exactly:

   | Channel | Direction | Mechanism |
   | :--- | :--- | :--- |

   One row each for **Equities (VN-Index)**, **Exchange rate**, **Banking system (NIM and deposit rates)**, **Real estate**, and **Household deposits**. *Direction* is supportive / pressuring / neutral. Reference thresholds:
   - Overnight above 5-6% signals a tight banking system and lifts margin-lending costs, which caps equity valuations
   - Overnight sustained below the fed funds rate is the classic setup for VND depreciation pressure
   - Interbank funding costs above deposit rates squeeze bank NIM, and stop banks cutting deposit rates further
   - Falling short-end rates lower the domestic risk-free rate and, with a stable currency, are the precondition for an equity re-rating
   - Policy transmission runs on a lag: equities react in days, bank liquidity in weeks, the real economy in 6-12 months

8. **Outlook & Risks** — 120-180 words: where the short end is likely to sit over the next 1-3 months given the spread constraint, and the specific risks to watch (Fed decisions, currency pressure, quarter-end seasonality, inflation).

   This is informational, not financial advice.

Style: English, professional, data-driven and concise. Bold key metrics. Do not invent numbers absent from the input, and never assert a policy action the data does not show.
`;
  }

  return `Bạn là một nhà chiến lược vĩ mô cấp cao chuyên về thị trường tài chính Việt Nam. Dưới đây là số liệu lãi suất mới nhất tính đến ${dateStr}. Lãi suất điều hành và lãi suất liên ngân hàng lấy từ chính các ấn phẩm của Ngân hàng Nhà nước (NHNN), lãi suất quỹ liên bang Mỹ hiệu lực lấy từ FRED, và tỷ giá USD/VND lấy từ bảng giá Vietcombank. Hãy chép nguyên mọi số liệu — không tự tính lại, quy đổi theo năm hay suy diễn.

Hai lưu ý về đơn vị. Mức thay đổi của lãi suất được cung cấp theo hai cách: theo **điểm phần trăm** (pp) và theo phần trăm tương đối. Hãy dùng điểm phần trăm mỗi khi so sánh một mức lãi suất với một mức lãi suất khác hoặc với hành lang lãi suất điều hành; phần trăm tương đối chỉ dùng để mô tả độ lớn của chính biến động đó. Các mốc so sánh tính theo **phiên đã công bố**, không phải ngày dương lịch — NHNN chỉ công bố vào ngày làm việc.

### Các mức lãi suất do NHNN quy định (lãi suất điều hành)
${policy}

### Lãi suất thị trường liên ngân hàng
${interbank}

### Các mức chênh lệch suy ra
${spreads}

### Bối cảnh tỷ giá
${fx}

### Lịch sử các phiên gần đây (mới nhất trước)
${history}

---

Hãy tạo một **Bảng theo dõi lãi suất vĩ mô Việt Nam** có cấu trúc rõ ràng, theo yêu cầu:

1. **Tóm tắt điều hành** — 3-5 câu nêu rõ **định hướng chính sách** (nới lỏng / thắt chặt / trung lập) và **trạng thái thanh khoản** (dồi dào / cân bằng / eo hẹp), cùng mâu thuẫn quan trọng nhất giữa hai điều đó.

2. **Bảng lãi suất điều hành** — một **bảng Markdown**, cột cố định như sau:

   | Lãi suất điều hành | Mức | Áp dụng từ | Đã giữ | Vai trò |
   | :--- | ---: | :--- | ---: | :--- |

   *Vai trò* nêu rõ vị trí của lãi suất đó trong hành lang: lãi suất tái cấp vốn là trần, lãi suất tái chiết khấu là sàn.

3. **Bảng lãi suất liên ngân hàng** — một **bảng Markdown**, mỗi kỳ hạn một dòng, cột cố định như sau:

   | Kỳ hạn | Lãi suất | 1 phiên | 20 phiên | 30 phiên | Doanh số (tỷ VND) | Doanh số 1 phiên | Nhận định |
   | :--- | ---: | ---: | ---: | ---: | ---: | ---: | :--- |

   Ba cột thay đổi lãi suất ghi theo điểm phần trăm. Bỏ qua dòng nào có lãi suất N/A. *Nhận định* là nhận xét ngắn 3-6 từ.

4. **Khoảng cách giữa chính sách và thực tế** — 100-150 từ. So sánh lãi suất tái cấp vốn với lãi suất liên ngân hàng qua đêm và 1 tuần.
   - Liên ngân hàng **thấp hơn** lãi suất điều hành: thanh khoản dư thừa — tiền rẻ và đang ứ đọng trong hệ thống ngân hàng.
   - Liên ngân hàng **cao hơn** lãi suất điều hành: thanh khoản eo hẹp — các ngân hàng thiếu vốn ngắn hạn, hoặc NHNN đang chủ động hút tiền về.
   Sau đó đọc doanh số: tỷ trọng qua đêm + 1 tuần lớn đi kèm lãi suất cao là dấu hiệu căng thẳng thanh khoản, còn cùng tỷ trọng đó đi kèm lãi suất thấp chỉ đơn giản là nơi thị trường vẫn luôn giao dịch. Hãy nêu rõ đây là trường hợp nào.

5. **Bộ lọc bên ngoài và cấu trúc** — 100-150 từ.
   - **Chênh lệch VND-USD**: hiệu giữa lãi suất qua đêm VND và lãi suất quỹ liên bang Mỹ hiệu lực. Chênh lệch âm hoặc quá hẹp khiến việc nắm giữ VND kém hấp dẫn so với giao dịch chênh lệch lãi suất sang USD, và đây chính là ràng buộc quyết định NHNN còn dư địa nới lỏng đến đâu. Hãy đọc cùng với biến động USD/VND.
   - **Hoạt động OMO / tín phiếu**: NHNN đang bơm tiền qua mua kỳ hạn hay hút tiền qua phát hành tín phiếu. **Quy trình này không có nguồn dữ liệu về OMO hay tín phiếu** — hãy đánh dấu ❔ không đủ dữ liệu và nêu rõ điều đó. Bạn có thể nhận xét diễn biến lãi suất quan sát được *phù hợp* với kịch bản nào, nhưng không được khẳng định một nghiệp vụ đã diễn ra.
   - **Chỉ tiêu tăng trưởng tín dụng và yếu tố mùa vụ**: nộp thuế và cuộc đua chỉ tiêu tín dụng cuối quý, cuối năm thường làm thanh khoản căng lên. **Quy trình này không có nguồn dữ liệu về chỉ tiêu tăng trưởng tín dụng** — đánh dấu ❔ không đủ dữ liệu. Yếu tố mùa vụ có thể suy ra từ chính ngày của phiên giao dịch.

6. **Truyền dẫn chính sách và tâm lý thị trường** — 100-150 từ.
   - *Điểm hiệu lực*: chênh lệch giữa lãi suất 1 tuần và lãi suất tái cấp vốn. Trên +1.0pp nghĩa là tín hiệu chính sách bị nghẽn do ma sát trong hệ thống; trong khoảng ±0.5pp nghĩa là thị trường đang đi theo định hướng của NHNN.
   - *Hình dạng đường cong*: 3 tháng so với qua đêm. Dốc lên là bình thường và phản ánh kỳ vọng lãi suất đi ngang hoặc tăng; đường cong đảo ngược phản ánh kỳ vọng một đợt căng thanh khoản sắp xảy ra.
   - *Xu hướng*: dùng lịch sử các phiên để nêu rõ đầu ngắn của đường cong đang tăng, giảm hay đi ngang, và trong bao nhiêu phiên.

7. **Tác động đến thị trường vĩ mô** — một **bảng Markdown**, cột cố định như sau:

   | Kênh tác động | Chiều hướng | Cơ chế |
   | :--- | :--- | :--- |

   Mỗi dòng cho một kênh: **Cổ phiếu (VN-Index)**, **Tỷ giá**, **Hệ thống ngân hàng (NIM và lãi suất huy động)**, **Bất động sản**, **Tiền gửi dân cư**. *Chiều hướng* là hỗ trợ / gây áp lực / trung lập. Tham khảo các ngưỡng sau:
   - Lãi suất qua đêm trên 5-6% cho thấy hệ thống ngân hàng eo hẹp thanh khoản và đẩy chi phí cho vay ký quỹ lên, qua đó giới hạn mức định giá cổ phiếu
   - Lãi suất qua đêm duy trì dưới lãi suất quỹ liên bang Mỹ là bối cảnh điển hình tạo áp lực mất giá lên VND
   - Chi phí vốn liên ngân hàng cao hơn lãi suất huy động sẽ bào mòn NIM ngân hàng và khiến họ không thể giảm thêm lãi suất huy động
   - Lãi suất đầu ngắn giảm sẽ kéo lãi suất phi rủi ro trong nước xuống và, nếu tỷ giá ổn định, là điều kiện tiên quyết để định giá lại cổ phiếu
   - Truyền dẫn chính sách có độ trễ: cổ phiếu phản ứng trong vài ngày, thanh khoản ngân hàng trong vài tuần, kinh tế thực trong 6-12 tháng

8. **Triển vọng và rủi ro** — 120-180 từ: đầu ngắn của đường cong nhiều khả năng sẽ ở đâu trong 1-3 tháng tới với ràng buộc chênh lệch lãi suất hiện tại, và các rủi ro cụ thể cần theo dõi (quyết định của Fed, áp lực tỷ giá, yếu tố mùa vụ cuối quý, lạm phát).

   Nội dung chỉ mang tính tham khảo, không phải lời khuyên đầu tư.

Yêu cầu: tiếng Việt, chuyên nghiệp, bám sát số liệu và ngắn gọn. In đậm các số liệu quan trọng. Không được bịa ra số liệu không có trong dữ liệu đầu vào, và không được khẳng định một hành động chính sách mà dữ liệu không thể hiện.
`;
}
