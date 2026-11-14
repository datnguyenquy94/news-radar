# AI Open Source Trends 2026-11-14

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-14 05:57 UTC

---

# AI Open Source Trends Report – 2026-11-14

## Step 1 (Filter) & Step 2 (Categorize)
From the provided data, I have identified **15 projects** clearly related to AI/ML. I grouped them into the specified categories. Projects like `open-code-review` (code review tool) and `block/buzz` (communication platform) were excluded as they are general infrastructure, not AI-specific. `uptime-kuma` (monitoring) and `tailcat` (network tool) were also excluded.

### Categorized Projects:

*   **🔧 AI Infrastructure:**
    *   `ollama/ollama` (Go) - Model runner.
    *   `open-webui/open-webui` (Svelte) - UI for models.
    *   `browser-use/browser-use` (Python) - AI browser agents.
    *   `headroomlabs-ai/headroom` (Python) - RAG compression.
    *   `jeecgboot/JeecgBoot` (Java) - Low-code AI platform.

*   **🤖 AI Agents / Workflows:**
    *   `paperclipai/paperclip` (TypeScript) - Agent management.
    *   `NousResearch/hermes-agent` (Python) - Growing agent.
    *   `Panniantong/Agent-Reach` (Python) - Agent "eyes" for the internet.
    *   `career-ops-hq/career-ops` (JavaScript) - AI job search agent.
    *   `paperclipai/paperclip` (also fits here).

*   **📦 AI Applications:**
    *   `ZhuLinsen/daily_stock_analysis` (Python) - Stock analysis LLM system.
    *   `tradermonty/claude-trading-skills` (Python) - Trading skills for Claude.
    *   `openai/codex-security` (TypeScript) - Security CLI.

*   **🧠 LLMs / Training:**
    *   `open-webui/open-webui` (also fits here).
    *   `ollama/ollama` (also fits here).

*   **🔍 RAG / Knowledge:**
    *   `headroomlabs-ai/headroom` (Python) - RAG compression.
    *   `volcengine/OpenViking` (Python) - Context database.
    *   `Graphify-Labs/graphify` (Python) - Knowledge graph.

---

## 1. Today's Highlights
The AI open-source ecosystem today is dominated by **agent tooling and infrastructure**. `ollama/ollama` and `open-webui/open-webui` continue their steady momentum as the go-to infrastructure for running and interacting with local models. A significant trend is the rise of "agent-centric" tools, with `paperclipai/paperclip` and `NousResearch/hermes-agent` seeing substantial star growth, indicating a community focus on managing and scaling AI workflows rather than just model weights. Additionally, `headroomlabs-ai/headroom` addresses a critical bottleneck in RAG systems by compressing context, reflecting the industry's move toward efficiency. In the application layer, `ZhuLinsen/daily_stock_analysis` showcases the growing capability of LLMs in vertical-specific analysis, particularly finance.

## 2. Top Projects by Category

### 🔧 AI Infrastructure
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 186,909 (+506) | +506 since 2026-11-09 | Provides an easy way to run large language models locally, supporting a wide range of models from Kimi to Qwen, making powerful AI accessible without complex setup. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 158,600 (+539) | +539 since 2026-11-08 | A user-friendly web interface for LLMs, supporting Ollama and OpenAI APIs, serving as the primary UI layer for local AI deployment. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 120,969 (+595) | +595 since 2026-11-09 | An open-source Python library enabling AI browser agents to interact with websites stealthily, bridging the gap between LLMs and web navigation. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 79,615 (+574) | +574 since 2026-11-07 | A compression tool that reduces token counts for RAG chunks and logs by up to 95%, directly improving the cost and efficiency of coding agents. |
| [jeecgboot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot) | Java | 48,469 (+505) | +505 since 2026-09-24 | A free AI low-code platform that acts as a base for building complex business systems, offering AI-powered generation of code, forms, and reports out-of-the-box. |

### 🤖 AI Agents / Workflows
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | TypeScript | 113,742 (+686) | +686 since 2026-11-11 | The de facto open-source application for managing AI agents at work, providing a unified inbox and toolset for agent automation. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 263,256 (+660) | +660 since 2026-11-11 | An agent framework designed to grow with the user, focusing on persistent memory and evolving capabilities over time. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 111,619 (+608) | +608 since 2026-11-11 | Grants AI agents the ability to "see" and search the entire internet, indexing Twitter, Reddit, YouTube, and more via a zero-fee CLI. |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 82,436 (+587) | +587 since 2026-11-11 | An AI-powered job search agent that scores jobs against a user's CV, tailors resumes, and handles application tracking locally. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 120,969 (+595) | +595 since 2026-11-09 | (Also categorized here) Essential for building autonomous web-navigating agents, providing the tools to extract and interact with web content. |

### 📦 AI Applications
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | --- | ---: | ---: | :--- |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 71,833 (+256) | +1,155 since 2026-11-12 | A LLM-driven multi-market stock analysis system featuring real-time news, decision dashboards, and automated notifications, designed for cost-free scheduled runs. |
| [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | Python | 4,285 (+69) | 🆕 first appearance | Provides Claude Code skills for equity investors, offering market analysis, technical charting, and strategy development tools. |
| [openai/codex-security](https://github.com/openai/codex-security) | TypeScript | 13,246 (+751) | +620 since 2026-11-13 | OpenAI's CLI and SDK for finding, validating, and fixing security vulnerabilities in code, integrating directly into developer workflows. |

### 🧠 LLMs / Training
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | --- | ---: | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 186,909 (+506) | +506 since 2026-11-09 | (Also categorized here) The standard gateway for running diverse open-source models locally, currently supporting giants like DeepSeek and Gemma. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 158,600 (+539) | +539 since 2026-11-08 | (Also categorized here) The leading interface for LLM interaction, facilitating prompt management and model switching. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 147,369 (+512) | +512 since 2026-11-13 | Turns any codebase or documentation into a queryable knowledge graph, providing a deterministic skill for Claude Code and Cursor to navigate complex systems. |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | Python | 42,215 (+561) | +561 since 2026-11-06 | A self-evolving context database unifying agent memory, knowledge RAG, and skills, functioning as a long-term memory layer for AI systems. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 79,615 (+574) | +574 since 2026-11-07 | (Also categorized here) Focuses on the "Retrieval" side of RAG, compressing outputs to make context windows more efficient. |

### 🔍 RAG / Knowledge
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | --- | ---: | ---: | :--- |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 79,615 (+574) | +574 since 2026-11-07 | (Also categorized here) Specializes in compressing RAG chunks and logs, claiming 20% token savings for coding agents and 60-95% for JSON. |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | Python | 42,215 (+561) | +561 since 2026-11-06 | Positions itself as a self-evolving context database, unifying memory, RAG, and skills for AI agents. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 147,369 (+512) | +512 since 2026-11-13 | Transforms codebases and PDFs into structured knowledge graphs, enabling deterministic querying of technical documentation. |

---

## 3. Trend Signal Analysis
Today's data reveals a clear pivot toward **agent efficiency and infrastructure**. The most explosive attention is being directed at tools that reduce the "friction" of using LLMs, specifically `headroomlabs-ai/headroom` and `Graphify-Labs/graphify`, which address the context window limitations inherent in current agent designs. The appearance of `career-ops-hq/career-ops` and `Panniantong/Agent-Reach` signifies a maturation of AI agents from experimental prototypes into practical productivity tools for white-collar work and web research.

Furthermore, the continued dominance of `ollama/ollama` and `open-webui/open-webui` confirms that the "local-first" AI stack is the preferred deployment model for developers, prioritizing privacy and cost over cloud APIs. The "first appearance" entries, such as `tradermonty/claude-trading-skills`, suggest a niche but growing trend of domain-specific AI applications fine-tuned for finance and trading, leveraging the capabilities of models like Claude. Notably, the "re-appearances" with large deltas (e.g., `ZhuLinsen/daily_stock_analysis` +1,155) illustrate projects that have successfully compounded utility over time, whereas the "first appearances" represent novel entries that the community is currently validating.

## 4. Community Hot Spots
*   **Agent Management & Tooling:** Focus on `paperclipai/paperclip` and `NousResearch/hermes-agent` as the ecosystem standard for orchestrating multiple LLMs and maintaining state.
*   **Local Model Infrastructure:** Continued investment in `ollama/ollama` and `open-webui/open-webui` for private, cost-effective AI deployment.
*   **RAG Efficiency:** Close monitoring of `headroomlabs-ai/headroom` and `Graphify-Labs/graphify` to solve the context window bottleneck for long-horizon tasks.
*   **Vertical AI Applications:** The rise of specialized tools like `ZhuLinsen/daily_stock_analysis` indicates a shift toward AI-native vertical SaaS and analysis tools.
*   **Web-Automating Agents:** `browser-use/browser-use` remains a critical foundation for anyone building agents that interact with the internet.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*