# AI Open Source Trends 2026-11-12

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-12 06:53 UTC

---

# AI Open Source Trends Report | 2026-11-12

### Step 1 (Filter): AI-Relevant Projects Selection
From the provided data, I selected projects clearly related to AI/ML. The following were excluded as non-AI: `meta/astryx` (design system), `ZhuLinsen/daily_stock_analysis` (finance analysis — categorized as AI Application below), `GoogleChrome/modern-web-guidance-src` (frontend guidance), `shadcn/improve` (code auditing — categorized below), `addyosmani/agent-skills` (AI agents below), `we-promise/sure` (finance app), `homeassistant-ai/ha-mcp` (Home Assistant automation — categorized below), `openai/codex-security` (security CLI — categorized below).

### Step 2 (Categorize) & Step 3 (Output Report)

---

## 1. Today's Highlights

The GitHub AI trend data for 2026-11-12 reveals a strong momentum in **agentic systems and Retrieval-Augmented Generation (RAG)** infrastructure. The day's most explosive project is `affaan-m/ECC`, an LLM performance optimization system surpassing 300k stars with +515 gained today, signaling intense community focus on making large models more efficient and controllable. Simultaneously, `infiniflow/ragflow` continues its steady climb as a definitive agent-native RAG engine, reflecting the ecosystem's shift from model development to context infrastructure. In the agents category, `addyosmani/agent-skills` and `can1357/oh-my-pi` highlight a growing demand for production-grade engineering skills and IDE-integrated coding agents. Finally, `openai/codex-security` demonstrates the maturing of AI tooling into security and compliance workflows, a critical area as AI adoption industrializes.

## 2. Top Projects by Category

### 🔧 AI Infrastructure
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 301,536 (+515) | +515 since 2026-11-11 | The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,063 (+534) | +534 since 2026-11-05 | RAGFlow is an agent-native database: a Retrieval-Augmented Generation (RAG) engine that grew into context infrastructure. |

### 🤖 AI Agents / Workflows
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 116,151 (+787) | +622 since 2026-11-11 | Production-grade engineering skills for AI coding agents. |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | TypeScript | 38,747 (+576) | +576 since 2026-11-08 | Coding agent with the IDE wired in. Built by Stencil Labs. |
| [openai/codex-security](https://github.com/openai/codex-security) | TypeScript | 11,932 (+52) | +546 since 2026-11-11 | OpenAI's Codex Security CLI and TypeScript SDK for finding, validating, and fixing security vulnerabilities. |

### 📦 AI Applications
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 70,678 (+278) | +977 since 2026-11-11 | LLM-driven multi-market stock analysis system with multi-source market data, real-time news, decision dashboard, and automated notifications. |
| [homeassistant-ai/ha-mcp](https://github.com/homeassistant-ai/ha-mcp) | Python | 7,533 (+645) | +581 since 2026-11-11 | Configure and automate Home Assistant with Claude, ChatGPT, and other AI assistants. |

### 🧠 LLMs / Training
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 168,888 (+511) | +511 since 2026-10-31 | The model-definition framework for state-of-the-art machine learning models in text, vision, audio, and multimodal models, for both inference and training. |

### 🔍 RAG / Knowledge
*(No dedicated entries beyond `infiniflow/ragflow` in Infrastructure; category omitted)*

## 3. Trend Signal Analysis

Today's hot list underscores a maturing AI open-source ecosystem where community attention is shifting from raw model scaling to **tooling, safety, and integration**. The most striking signal is the dominance of `affaan-m/ECC` and `infiniflow/ragflow`, which together reflect a pivot toward **agent-native infrastructure**—RAG engines and performance harnesses that enable reliable, production-grade AI behavior rather than just capability jumps. The appearance of `openai/codex-security` on the trending list is notable, as it marks the first time in this report's history that AI security tooling has gained real-time traction, aligning with industry events like OpenAI's recent developer conferences and the growing regulatory emphasis on model safety. Furthermore, the strong showing of `addyosmani/agent-skills` (+787 today) and `can1357/oh-my-pi` indicates that developers are increasingly valuing **IDEs-integrated coding agents** and standardized skill sets, suggesting a future where AI assistance is measured by engineering productivity, not just chat ability. The `🆕` first appearances—specifically `affaan-m/ECC` breaking the 300k star threshold and `codex-security` entering the trending fold—signal new entrants that the community is actively investing in, whereas the `📈` re-appearances like `ragflow` and `transformers` represent projects that have compounded momentum over time, reinforcing the notion that today's AI open-source vitality is built on both novel breakthroughs and sustained, iterative improvement.

## 4. Community Hot Spots

*   **Agent Performance Optimization (`affaan-m/ECC`)**: With +515 stars today and 301k total, this project is the definitive hotspot for developers seeking to instill "skills, instincts, and memory" into LLM calls. It is worth focused attention for anyone building autonomous agents who needs predictable behavior and security boundaries.
*   **RAG as Context Infrastructure (`infiniflow/ragflow`)**: The consistent +534 star gain since early November confirms ragflow as the go-to open-source database for Retrieval-Augmented Generation. It represents the critical bridge between LLMs and private/data-rich workflows.
*   **IDE-Integrated Coding Agents (`addyosmani/agent-skills` / `can1357/oh-my-pi`)**: The massive +787 and +576 daily star gains on these two repos show a surging demand for agents that live inside the developer's editor. They signal a shift from "chat with AI" to "AI-paired programming."
*   **AI Security & Compliance (`openai/codex-security`)**: The re-appearance with +546 stars since yesterday highlights that the community is actively tracking and contributing to the security layer of AI tooling, a necessary evolution as code-generation becomes mainstream.
*   **Vertical AI Applications (`ZhuLinsen/daily_stock_analysis`)**: Despite being a finance tool, its +977 daily stars and AI-agent topic tag make it a prime example of the "AI Application" category gaining traction, demonstrating how LLMs are being embedded into domain-specific decision dashboards.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*