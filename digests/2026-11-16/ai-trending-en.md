# AI Open Source Trends 2026-11-16

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-16 05:58 UTC

---

**GitHub AI Open Source Trends Report | 2026-11-16**

### Step 1 (Filter) & Step 2 (Categorize)
Based on the provided data, the following projects are clearly related to AI/ML. I have categorized them by primary function. Projects like `univer` (office SDK) and `ag-ui` (interaction protocol) were evaluated; while developer-facing, their primary description focuses on productivity and interaction patterns rather than core AI/ML infrastructure, so they are included where they strongly bridge agent capabilities, but excluded if purely tool-adjacent. The `ggml` and `txtai` entries are foundational infrastructure.

**Filtered Projects by Category:**

*   **🔧 AI Infrastructure:** `ggml`, `txtai`, `ECC`, `cognee`, `DeepTutor`
*   **🤖 AI Agents / Workflows:** `stitch-skills`, `LoopForge`, `Claude-BugHunter`, `SkillEvaluator`, `modern-web-guidance-src`, `open-code-review`
*   **📦 AI Applications:** `ChromeDevTools-mcp`, `backnotprop/plannotator`, `tradermonty/claude-trading-skills`, `daily_stock_analysis`
*   **🧠 LLMs / Training:** (None met the strict "model weights/training frameworks" criteria as primary focus from the delta list, though `ggml` serves as the engine)
*   **🔍 RAG / Knowledge:** `graphify`, `txtai` (also infrastructure)

---

### 1. Today's Highlights
Today's trending list is dominated by tools facilitating **Agent orchestration and integration**. Google's `stitch-skills` and Tencent's `LoopForge` lead the charge in providing standardized skill libraries and workflow orchestration for coding agents. Concurrently, there is significant momentum in **Code Intelligence**, with `backnotprop/plannotator` and `elementalsouls/Claude-BugHunter` offering specialized skill bundles for code review and red-teaming. In the infrastructure space, `ggml` makes a first appearance, signaling continued reliance on low-level tensor libraries for local AI execution.

### 2. Top Projects by Category

#### 🔧 AI Infrastructure
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ggml-org/ggml](https://github.com/ggml-org/ggml) | C++] | 15,989 (+43) | 🆕 first appearance | A tensor library fundamental for machine learning inference, particularly for local LLMs. Its first-time appearance on the trending list underscores the enduring demand for efficient, low-level inference engines. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 33,341 (+509) | +509 since 2026-10-28 | An open-source AI memory platform that gives agents persistent long-term memory using small models. It is a critical infrastructure piece for developers building stateful, long-horizon AI applications. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 303,960 (+675) | +675 since 2026-11-15 | The agent harness performance optimization system. It provides a unified skills and memory layer for top-tier AI coding tools like Claude Code and Cursor, acting as a performance backbone for the agentic workflow. |

#### 🤖 AI Agents / Workflows
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | --- | ---: | ---: | :--- |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 9,442 (+247) | 🆕 first appearance | A library of Agent Skills designed for the Stitch MCP server, compatible with major coding agents. Its first appearance highlights Google's push for standardized, interoperable agent tooling. |
| [Tencent/LoopForge](https://github.com/Tencent/LoopForge) | Go | 1,788 (+423) | +792 since 2026-11-15 | A self-hosted workflow orchestration platform for coding-agent delivery. It allows orchestration of multiple assistants (CodeBuddy, Claude Code) with human approval gates, representing a shift toward robust, production-grade agent deployment. |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 6,694 (+98) | 🆕 first appearance | A skill bundle for bug hunting and red-team work featuring 82 skills and 681 disclosed-report patterns. It is a specialized tool for security testing within the AI coding pipeline. |

#### 📦 AI Applications
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | --- | ---: | ---: | :--- |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | 57,171 (+717) | +733 since 2026-11-15 | Chrome DevTools adapted for coding agents, bridging the gap between web inspection and AI agent interaction. The high daily star gain (+717) reflects the community's appetite for agent-web interoperability. |
| [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | TypeScript | 12,026 (+866) | +711 since 2026-11-15 | A workspace for planning, annotating, and reviewing code to stay "in the loop" with agents. It functions as a collaborative layer between human developers and AI agents. |
| [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | Python | 5,763 (+706) | +800 since 2026-11-15 | Claude Code skills tailored for equity investors and traders, covering market analysis and strategy development. It exemplifies the verticalization of AI agents into specific professional domains like finance. |

#### 🔍 RAG / Knowledge
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | --- | ---: | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 148,554 (+656) | +656 since 2026-11-15 | Turns any codebase or documentation into a queryable knowledge graph. It offers a deterministic, local alternative to vector stores, making it highly relevant for RAG pipelines requiring precise edge explanation. |
| [neuml/txtai](https://github.com/neuml/txtai) | Python | 13,407 (+500) | +500 since 2026-08-26 | An all-in-one AI framework for semantic search and LLM orchestration. Its consistent growth over months solidifies it as a stable staple for knowledge management and retrieval. |

### 3. Trend Signal Analysis
The dominant trend for today is the **operationalization of AI agents**. The high velocity of projects like `LoopForge` and `stitch-skills` reveals that the community is moving beyond prototype demos toward infrastructure that supports **workflow orchestration, human-in-the-loop gates, and standardized skill sets**. The appearance of `ggml` on the trending list, despite being a mature library, signals that the "local AI" substrate remains a active area of community interest, likely fueled by ongoing needs for privacy and offline capability. Furthermore, the surge in specialized applications—specifically `Claude-BugHunter` for security and `claude-trading-skills` for finance—demonstrates a maturing ecosystem where agents are being tailored for specific verticals and red-team scenarios. The "first appearances" today (`stitch-skills`, `Claude-BugHunter`, `ggml`) introduce new capabilities or standardization efforts, whereas the "re-appearances" (`LoopForge`, `plannotator`) represent projects that have successfully compounded momentum and community trust over recent weeks.

### 4. Community Hot Spots
*   **Agent Orchestration:** Focus on **Tencent/LoopForge**. Its self-hosted model and approval gates address the critical need for production-grade control and safety when deploying multiple coding assistants.
*   **Standardized Skill Libraries:** Monitor **google-labs-code/stitch-skills**. As the first Google-backed entry in this report, it may indicate a shift toward MCP (Model Context Protocol) standardization, making agents more portable across different LLMs.
*   **Local Inference Stacks:** Track **ggml-org/ggml**. Its re-emergence on the trending list is a signal to watch the evolution of local LLM runtimes and their integration into developer tooling.
*   **Domain-Specific Agents:** Explore **tradermonty/claude-trading-skills**. The successful application of LLMs to trading strategy development suggests a broader trend of AI agents penetrating specialized white-collar professions.
*   **Knowledge Graph over Vectors:** Evaluate **Graphify-Labs/graphify**. For developers seeking deterministic RAG solutions that avoid the probabilistic pitfalls of vector stores, graph-based knowledge representation is a high-potential direction.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*