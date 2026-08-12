/**
 * LLM prompt builder for the dev-community report (Dev.to + Lobste.rs).
 */

import type { CommunityData } from "../../feeds/ai/community.ts";
import type { Lang } from "../../core/i18n/index.ts";

// ---------------------------------------------------------------------------
// Community prompt (Dev.to + Lobste.rs combined)
// ---------------------------------------------------------------------------

export function buildCommunityPrompt(data: CommunityData, dateStr: string, lang: Lang = "vi"): string {
  const { devto, lobsters } = data;
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
                `   Liên kết: ${a.url}\n` +
                `   Tác giả: ${a.user} | Lượt thích: ${a.positiveReactionsCount} | Bình luận: ${a.commentsCount} | Thời gian đọc: ${a.readingTimeMinutes} phút\n` +
                `   Thẻ: ${a.tags.join(", ")}\n` +
                `   ${a.description}`,
          )
          .join("\n\n")
      : lang === "en"
        ? "(No Dev.to articles available)"
        : "(Không có bài viết Dev.to)";

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
                `   Liên kết: ${s.url}\n` +
                `   Thảo luận: ${s.commentsUrl}\n` +
                `   Điểm: ${s.score} | Bình luận: ${s.commentCount} | Tác giả: ${s.author} | Thẻ: ${s.tags.join(", ")}`,
          )
          .join("\n\n")
      : lang === "en"
        ? "(No Lobste.rs stories available)"
        : "(Không có nội dung Lobste.rs)";

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

  return `Bạn là một nhà phân tích cộng đồng công nghệ. Dưới đây là nội dung liên quan đến AI trên Dev.to và Lobste.rs tính đến ${dateStr}:

## Bài viết Dev.to (tổng ${devto.articles.length} bài)

${devtoText}

---

## Nội dung Lobste.rs (tổng ${lobsters.stories.length} mục)

${lobstersText}

---

Hãy tạo một "Bản tin AI từ cộng đồng công nghệ" có cấu trúc rõ ràng, theo yêu cầu:

1. **Điểm nhanh hôm nay** — Tóm tắt trong 3-5 câu hướng thảo luận AI sôi nổi nhất trong các cộng đồng công nghệ hôm nay

2. **Nổi bật trên Dev.to** — Chọn 5-10 bài viết giá trị nhất, trình bày bằng **bảng Markdown**:

   | Bài viết | Lượt thích | Bình luận | Tóm tắt |
   | :--- | ---: | ---: | :--- |

   - **Bài viết**: tiêu đề tạo thành liên kết Markdown
   - **Lượt thích / Bình luận**: chép nguyên số từ dữ liệu đầu vào, không tự tính lại
   - **Tóm tắt**: 2 câu — giá trị cốt lõi đối với nhà phát triển

3. **Nổi bật trên Lobste.rs** — Chọn 3-8 nội dung đáng chú ý nhất, trình bày bằng **bảng Markdown**:

   | Tiêu đề | Điểm | Bình luận | Tóm tắt |
   | :--- | ---: | ---: | :--- |

   - **Tiêu đề**: tạo thành liên kết Markdown, kèm theo " · [thảo luận](liên-kết-thảo-luận)"
   - **Điểm / Bình luận**: chép nguyên số từ dữ liệu đầu vào, không tự tính lại
   - **Tóm tắt**: 2 câu — tại sao đáng đọc

4. **Nhịp đập cộng đồng** — 100-200 từ, phân tích cộng đồng công nghệ đang bàn luận gì:
   - Chủ đề chung giữa hai nền tảng
   - Mối quan tâm thực tế của nhà phát triển về công cụ AI
   - Hướng dẫn, mô hình hoặc thực hành tốt nhất mới nổi

5. **Đáng đọc sâu** — 2-3 bài viết/nội dung đáng đọc kỹ nhất

Yêu cầu: tiếng Việt, ngắn gọn, thân thiện với nhà phát triển, giữ nguyên tất cả liên kết gốc.
`;
}
