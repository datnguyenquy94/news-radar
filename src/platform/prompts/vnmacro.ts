/**
 * LLM prompt builder for the Vietnam macro dashboard.
 */

import type {
  VnFeedData,
  VnMarketData,
  VnDocsData,
  VnFxRate,
  VnGlobalMetric,
  VnAnnualMetric,
  VnGold,
} from "../../feeds/finance/vn/index.ts";
import type { Lang } from "../../core/i18n/index.ts";
import { fmtPct } from "./shared.ts";

// ---------------------------------------------------------------------------
// Vietnam macro dashboard prompt (SSI + Entrade + VCB + Yahoo + NSO + VBMA)
// ---------------------------------------------------------------------------

/** VND billions with thousands separators — the unit VN market data is quoted in. */
function fmtVndBn(value: number | null | undefined): string {
  if (value == null) return "N/A";
  return `${value > 0 ? "+" : ""}${value.toLocaleString("en-US", { maximumFractionDigits: 0 })} bn VND`;
}

function vnFxLines(fx: VnFxRate | null, lang: Lang): string {
  if (!fx) {
    return lang === "en"
      ? "- USD/VND (Vietcombank): data unavailable this run"
      : "- USD/VND (bảng giá Vietcombank): lần chạy này không lấy được dữ liệu";
  }
  const sell = fx.sell.toLocaleString("en-US");
  const transfer = fx.transfer.toLocaleString("en-US");
  return lang === "en"
    ? `- USD/VND (Vietcombank board): sell ${sell} | transfer ${transfer} | 1M ${fmtPct(fx.changePct1m, 2)} | YTD ${fmtPct(fx.changePctYtd, 2)} | as of ${fx.asOf}`
    : `- USD/VND (bảng giá Vietcombank): bán ${sell} | chuyển khoản ${transfer} | 1 tháng ${fmtPct(fx.changePct1m, 2)} | từ đầu năm ${fmtPct(fx.changePctYtd, 2)} | tính đến ${fx.asOf}`;
}

function vnGlobalLine(m: VnGlobalMetric, lang: Lang): string {
  const latest =
    m.latest == null
      ? "N/A"
      : `${m.latest.toLocaleString("en-US", {
          minimumFractionDigits: m.decimals,
          maximumFractionDigits: m.decimals,
        })}${m.unit ? ` ${m.unit}` : ""}`;
  return lang === "en"
    ? `- ${m.label.en} (${m.symbol}): latest ${latest} | 1d ${fmtPct(m.changePct1d, 2)} | 20d ${fmtPct(m.changePct20d, 2)} | as of ${m.asOf || "n/a"}`
    : `- ${m.label.vi} (${m.symbol}): mới nhất ${latest} | 1 ngày ${fmtPct(m.changePct1d, 2)} | 20 ngày ${fmtPct(m.changePct20d, 2)} | tính đến ${m.asOf || "chưa có"}`;
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
      : "- Giá vàng trong nước SJC: lần chạy này không lấy được dữ liệu";
  }
  const sell = gold.sellVndPerTael.toLocaleString("en-US");
  const buy = gold.buyVndPerTael.toLocaleString("en-US");
  const implied = gold.sellUsdPerOz == null ? "N/A" : `$${gold.sellUsdPerOz.toLocaleString("en-US")}/oz`;
  const premium = gold.premiumPct == null ? "N/A" : fmtPct(gold.premiumPct, 1);
  return lang === "en"
    ? `- SJC domestic gold (1L bar): buy ${buy} / sell ${sell} VND per tael | implied ${implied} | premium over world gold ${premium} | as of ${gold.asOf || "n/a"}`
    : `- Giá vàng trong nước SJC (miếng 1L): mua ${buy} / bán ${sell} VND/lượng | quy đổi ${implied} | chênh lệch so với giá vàng thế giới ${premium} | tính đến ${gold.asOf || "chưa có"}`;
}

function vnAnnualLine(m: VnAnnualMetric, lang: Lang): string {
  const fmt = (v: number | null): string =>
    v == null
      ? "N/A"
      : `${v.toLocaleString("en-US", { maximumFractionDigits: 2 })}${m.unit === "%" ? "%" : ` ${m.unit}`}`;
  return lang === "en"
    ? `- ${m.label.en}: ${fmt(m.latest)} (${m.year || "n/a"}) | prior year ${fmt(m.prior)}`
    : `- ${m.label.vi}: ${fmt(m.latest)} (${m.year || "chưa có"}) | năm trước ${fmt(m.prior)}`;
}

function vnMarketSection(market: VnMarketData, lang: Lang): string {
  const en = lang === "en";
  const lines: string[] = [];

  for (const q of market.indices) {
    lines.push(
      en
        ? `- ${q.label}: ${q.close.toLocaleString("en-US")} | 1d ${fmtPct(q.changePct1d, 2)} | 5d ${fmtPct(q.changePct5d, 2)} | 20d ${fmtPct(q.changePct20d, 2)} | as of ${q.asOf}`
        : `- ${q.label}: ${q.close.toLocaleString("en-US")} | 1 ngày ${fmtPct(q.changePct1d, 2)} | 5 ngày ${fmtPct(q.changePct5d, 2)} | 20 ngày ${fmtPct(q.changePct20d, 2)} | tính đến ${q.asOf}`,
    );
  }

  if (market.futuresBasis) {
    const b = market.futuresBasis;
    lines.push(
      en
        ? `- VN30F1M basis: futures ${b.futures} vs spot ${b.spot} → ${b.basis > 0 ? "+" : ""}${b.basis} pts (${fmtPct(b.basisPct, 2)})`
        : `- Chênh lệch cơ sở VN30F1M: hợp đồng tương lai ${b.futures} so với chỉ số cơ sở ${b.spot} → ${b.basis > 0 ? "+" : ""}${b.basis} điểm (${fmtPct(b.basisPct, 2)})`,
    );
  }

  if (market.turnoverVndBn != null) {
    lines.push(
      en
        ? `- Order-matched turnover (HOSE + HNX, excludes put-through/block deals): ${market.turnoverVndBn.toLocaleString("en-US")} bn VND`
        : `- Giá trị khớp lệnh (HOSE + HNX, không gồm giao dịch thỏa thuận/lô lớn): ${market.turnoverVndBn.toLocaleString("en-US")} tỷ VND`,
    );
  }

  if (market.breadth) {
    const b = market.breadth;
    lines.push(
      en
        ? `- Breadth: ${b.advancers} advancing / ${b.decliners} declining / ${b.unchanged} flat | ${b.ceiling} limit-up, ${b.floor} limit-down`
        : `- Độ rộng thị trường: tăng ${b.advancers} / giảm ${b.decliners} / đứng giá ${b.unchanged} | trần ${b.ceiling} mã, sàn ${b.floor} mã`,
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
                (t.roomVndBn == null ? "" : ` (room ${fmtVndBn(t.roomVndBn).replace("+", "")})`),
            )
            .join(", ");
    lines.push(
      en
        ? `- Foreign flow for this session only (includes put-through/block deals): bought ${f.buyVndBn.toLocaleString("en-US")} bn, sold ${f.sellVndBn.toLocaleString("en-US")} bn → net ${fmtVndBn(f.netVndBn)}`
        : `- Dòng vốn ngoại (chỉ phiên hôm nay, gồm giao dịch thỏa thuận/lô lớn): mua ${f.buyVndBn.toLocaleString("en-US")} tỷ, bán ${f.sellVndBn.toLocaleString("en-US")} tỷ → ròng ${fmtVndBn(f.netVndBn)}`,
      en
        ? `- Top foreign net buys: ${list(f.topBuys)}`
        : `- Mã ngoại mua ròng nhiều nhất: ${list(f.topBuys)}`,
      en
        ? `- Top foreign net sells: ${list(f.topSells)}`
        : `- Mã ngoại bán ròng nhiều nhất: ${list(f.topSells)}`,
      en
        ? `- Traded names with zero remaining foreign room: ${f.zeroRoomCount}`
        : `- Số mã đang giao dịch đã hết room ngoại: ${f.zeroRoomCount}`,
    );
  }

  if (lines.length === 0) {
    return en
      ? "- Market internals: data unavailable this run"
      : "- Chỉ số nội tại thị trường: lần chạy này không lấy được dữ liệu";
  }
  return lines.join("\n");
}

function vnDocsSection(docs: VnDocsData, lang: Lang): string {
  if (docs.docs.length === 0) {
    return lang === "en"
      ? "No official documents could be retrieved this run."
      : "Lần chạy này không lấy được văn bản chính thức nào.";
  }
  return docs.docs
    .map((d) => {
      const pages = d.pages?.length ? ` (pages ${d.pages.join(", ")})` : "";
      const head =
        lang === "en"
          ? `#### ${d.source} — ${d.title}${pages}\nSource: ${d.url}`
          : `#### ${d.source} — ${d.title}${pages}\nNguồn: ${d.url}`;
      return `${head}\n\n${d.excerpt}`;
    })
    .join("\n\n");
}

export function buildVnMacroPrompt(data: VnFeedData, dateStr: string, lang: Lang = "vi"): string {
  const { market, macro, docs } = data;
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
        : "- Dữ liệu năm của World Bank: lần chạy này không lấy được";
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

  return `Bạn là một nhà chiến lược thị trường mới nổi chuyên về Việt Nam. Dưới đây là dữ liệu thị trường và vĩ mô mới nhất của Việt Nam tính đến ${dateStr}. Các số liệu có cấu trúc đến từ bảng giá SSI iBoard, API biểu đồ DNSE Entrade, bảng tỷ giá Vietcombank, Yahoo Finance và World Bank; các đoạn trích tài liệu là nguyên văn được lấy từ các ấn phẩm chính thức. Hãy chép nguyên mọi số liệu — không tự tính lại hoặc suy diễn.

### Chỉ số nội tại thị trường (HOSE + HNX)
${marketSection}

### Tỷ giá và các động lực toàn cầu
${fxSection}

### Dữ liệu năm chính thức (World Bank, có độ trễ)
${annualSection}

### Trích đoạn văn bản chính thức
${docsSection}

---

Hãy tạo một **Bảng theo dõi thị trường vĩ mô Việt Nam** có cấu trúc rõ ràng, theo yêu cầu:

1. **Điểm nhanh thị trường** — Tóm tắt trong 3-5 câu biến động chỉ số, thanh khoản (giá trị giao dịch), dòng vốn ngoại và bối cảnh tỷ giá, cùng ý nghĩa của chúng đối với cổ phiếu Việt Nam.

2. **Bảng chỉ số** — Ba **bảng Markdown**, cột cố định như sau. Bỏ qua bất kỳ dòng nào có giá trị N/A.

   *Chỉ số nội tại thị trường*

   | Chỉ số | Mới nhất | Thay đổi | Nhận định |
   | :--- | ---: | ---: | :--- |

   *Tỷ giá và động lực toàn cầu*

   | Chỉ số | Mới nhất | Thay đổi ngắn hạn | Thay đổi dài hạn hơn | Nhận định |
   | :--- | ---: | ---: | ---: | :--- |

   Hai cột thay đổi: đối với các chỉ số toàn cầu là 1 ngày và 20 ngày, đối với USD/VND là 1 tháng và từ đầu năm. Hãy ghi rõ khung thời gian ở từng ô (ví dụ "+0.51% từ đầu năm") để tránh bị hiểu nhầm là cùng một mốc thời gian.

   *Kinh tế thực*

   | Chỉ số | Mới nhất | Kỳ thống kê | Nhận định |
   | :--- | ---: | :--- | :--- |

   Điền bảng *Kinh tế thực* dựa trên các đoạn trích tài liệu (CPI, lạm phát lõi, FDI thực hiện, FDI đăng ký, giải ngân đầu tư công, xuất nhập khẩu, PMI nếu có) cộng với các dòng từ World Bank. Sử dụng kỳ thống kê theo nguồn gốc.

   **Nhận định** là nhận xét ngắn 3-6 từ, tham khảo các ngưỡng sau:
   - USD/VND: mất giá hàng năm trên 3-4% sẽ kích hoạt dòng vốn ngoại rút ra và buộc SBV thắt chặt; sự ổn định là điều kiện tiên quyết để nới lỏng
   - Chỉ số Đô la Mỹ / Lợi suất trái phiếu Mỹ 10 năm: đồng đô la tăng và lợi suất trái phiếu Mỹ tăng đều gia tăng áp lực lên đồng Việt Nam
   - Dòng vốn ngoại ròng: mua ròng bền vững củng cố niềm tin nhà đầu tư cá nhân; bán ròng kéo dài là bối cảnh sụt giảm điển hình của Việt Nam. Dữ liệu đầu vào **chỉ gồm một phiên duy nhất** — chỉ mô tả phiên đó, không được khẳng định một chuỗi hoặc xu hướng nhiều ngày mà không có căn cứ
   - Room ngoại: một mã đã chạm giới hạn sở hữu nước ngoài không thể hấp thụ thêm dòng vốn dù nhu cầu mạnh đến đâu, do đó tín hiệu "khối ngoại quay lại mua" chỉ đúng với các mã còn room
   - Giá trị giao dịch và dòng vốn ngoại được đo khác nhau: giá trị giao dịch là khớp lệnh, dòng vốn ngoại gồm cả giao dịch thỏa thuận (lô lớn). Một giao dịch lô lớn có thể khiến dòng vốn ngoại của một mã vượt giá trị khớp lệnh của chính mã đó — đây là điều bình thường, không nên coi là bất thường hay so sánh trực tiếp hai con số này
   - Chênh lệch cơ sở VN30F1M: cơ sở âm sâu báo hiệu tâm lý phòng thủ/hoảng loạn trong nước và thường đảo chiều nhanh sau khi tâm lý hoảng loạn chạm đáy
   - Độ rộng thị trường / số mã giảm sàn: số mã giảm sàn tập trung là dấu hiệu bị buộc bán giải chấp ("giải chấp")
   - Giá trị giao dịch: sụt giảm mạnh cùng lúc giá giảm báo hiệu bên mua rút lui chứ không phải phân phối
   - CPI: mục tiêu hàng năm của chính phủ là 4.0-4.5%; dưới ngưỡng này SBV còn dư địa duy trì nới lỏng
   - FDI thực hiện: trên 20 tỷ USD/năm giúp duy trì dòng vốn USD và nhu cầu công nghiệp lành mạnh
   - Chênh lệch giá vàng SJC so với giá vàng thế giới: mức chênh lệch nới rộng phản ánh trực tiếp niềm tin vào VND suy yếu; đồng thời vàng cạnh tranh với tiền gửi ngân hàng cùng một nguồn tiết kiệm dân cư — tiền rút khỏi tiền gửi không nhất thiết chảy vào cổ phiếu
   - Lãi suất liên ngân hàng qua đêm: trên 5-6% cho thấy hệ thống ngân hàng đang eo hẹp thanh khoản
   - Lợi suất trái phiếu chính phủ: lãi suất phi rủi ro trong nước; lợi suất giảm hỗ trợ cổ phiếu

3. **Theo dõi thị trường tiền tệ và trái phiếu** — 120-200 từ, lấy từ các đoạn trích VBMA và NSO: lãi suất liên ngân hàng theo kỳ hạn, tỷ giá trung tâm SBV, lợi suất trái phiếu chính phủ và kết quả đấu thầu, phát hành/đáo hạn trái phiếu doanh nghiệp. Ghi rõ mỗi số liệu lấy từ ấn phẩm nào; nếu đoạn trích không có số liệu, hãy nêu rõ là thiếu thay vì ước tính.

4. **Nhận định chế độ thị trường** — 150-250 từ, tổng hợp tỷ giá + thanh khoản + dòng vốn ngoại + tín dụng thành một nhận định chung duy nhất cho cổ phiếu Việt Nam.

5. **Điểm kiểm tra chiến lược** — Đánh giá tín hiệu mua với 5 điều kiện của Việt Nam (P/E dự phóng VN-Index gần hoặc dưới 11 lần; SBV nới lỏng hoặc tạm dừng thắt chặt với USD/VND ổn định; dư nợ ký quỹ công ty chứng khoán đã được xả sạch; khối ngoại ngừng bán ròng hoặc đảo chiều trong 5-10 phiên; các nhóm ngành dẫn dắt giữ được hỗ trợ cấu trúc) và tín hiệu bán với 3 điều kiện (SBV chuyển hướng diều hâu hoặc khủng hoảng tỷ giá; P/E dự phóng trên 16.5-17.5 lần cùng dư nợ ký quỹ lập kỷ lục; căng thẳng tín dụng mang tính hệ thống ở ngân hàng hoặc trái phiếu bất động sản). Đánh dấu từng điều kiện ✅ đạt / ❌ không đạt / ❔ không đủ dữ liệu.

   **Lưu ý quan trọng:** quy trình này không có nguồn miễn phí cho P/E tổng thể của VN-Index hoặc dư nợ ký quỹ toàn thị trường (các endpoint thường dùng bị chặn bởi Cloudflare). Đánh dấu ❔ không đủ dữ liệu cho mọi điều kiện phụ thuộc vào hai chỉ số này và nêu rõ điều đó — không thay thế bằng phỏng đoán.

   Nội dung chỉ mang tính tham khảo, không phải lời khuyên đầu tư.

Yêu cầu: tiếng Việt, chuyên nghiệp, ngắn gọn. Không được bịa ra số liệu không có trong dữ liệu đầu vào.
`;
}
