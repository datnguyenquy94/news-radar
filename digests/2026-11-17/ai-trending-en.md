# AI Open Source Trends 2026-11-17

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-17 07:36 UTC

---

**GitHub AI Open Source Trends Report**
**Date:** 2026-11-17

### Step 1 (Filter): AI-Relevant Projects Selection

From the provided data, the following projects are clearly related to AI/ML. General frontend frameworks (Svelte), unrelated tools (Docker management, historical maps), and non-AI applications were excluded. The remaining projects fall within the specified AI categories.

### Step 2 (Categorize) & Step 3 (Output Report)

#### 1. Today's Highlights
The AI open-source ecosystem today is dominated by **agentic workflows and infrastructure**, with a significant surge in tools designed for code review, memory, and research automation. Notably, **ag-ui-protocol/ag-ui** and **NVIDIA/SkillEvaluator** exemplify the shift toward standardizing how AI agents interact with frontend applications and evaluate their own capabilities. Simultaneously, the explosive growth of **alibaba/open-code-review** highlights a continued enterprise focus on integrating deterministic LLM pipelines with security and code quality checks. The day's trending data reveals a dual momentum: the rise of "agent-centric" tooling and the reinforcement of established platforms with substantial daily star gains.

#### 2. Top Projects by Category

**🔧 AI Infrastructure**
*Projects: frameworks, SDKs, inference engines, dev tools, CLI*

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui) | TypeScript | 19,499 (+791 today) | +1,386 since 2026-11-16 | AG-UI is an open protocol designed to standardize the interaction between AI agents and frontend applications, aiming to "bring agents into the frontend." Its significant daily star gain (+791) and total surge since yesterday indicate rapidly growing community interest in agent UX standards. |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 53,204 (+951 today) | +859 since 2026-11-16 | A battle-tested, hybrid architecture code review tool combining deterministic pipelines with LLM agents. It supports precise line-level comments and multi-language rulesets, marking a major enterprise-grade infrastructure release for secure AI-assisted development. |
| [NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) | Python | 3,004 (+873 today) | +1,088 since 2026-11-16 | A multi-tier framework for evaluating AI agent skills and plugins, featuring quality gates and semantic overlap detection. The substantial daily growth (+873) underscores the increasing need for tooling that can measure and gate agent reliability in production. |

**🤖 AI Agents / Workflows**
*Projects: agent frameworks, automation, multi-agent systems*

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 28,426 (+1828 today) | +1,896 since 2026-11-16 | Positions itself as an "AI office" SDK, bringing editing, calculation, and collaboration features into products for both people and AI agents. The massive today's gain (+1828) suggests it is becoming a foundational layer for vertical AI applications. |
| [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | TypeScript | 12,790 (+696 today) | +764 since 2026-11-16 | A workspace designed to help users "stay in the loop" with agents, offering tools to shape, decide, plan, and annotate code. Its focus on team feedback loops addresses the coordination gap between human developers and autonomous agents. |
| [google-research/paper-orchestra](https://github.com/google-research/paper-orchestra) | Python | 1,853 (+313 today) | 🆕 first appearance | A multi-agent framework specifically automated for writing AI research papers. Its first appearance today highlights a growing trend toward AI-assisted scientific publishing and literature review automation. |

**📦 AI Applications**
*Projects: specific apps, vertical solutions*

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | Python | 6,568 (+837 today) | +805 since 2026-11-16 | Provides Claude Code skills tailored for equity investors and traders, covering market analysis, charting, and strategy development. The high today's gain (+837) reflects a niche but potent intersection of LLMs and fintech tooling. |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 7,779 (+1094 today) | +1,085 since 2026-11-16 | A skill bundle for bug hunting and red-teaming, containing 82 skills and 681 disclosed-report patterns across 24 vulnerability classes. The high velocity of stars (+1094) indicates strong demand for AI security testing tools. |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | 57,836 (+841 today) | +665 since 2026-11-16 | Brings Chrome DevTools capabilities to coding agents, effectively providing a standardized interface for agents to interact with the browser. Its inclusion in today's trending list underscores the integration of web debugging tools into the agent workflow. |

**🔍 RAG / Knowledge**
*Projects: vector databases, retrieval-augmented generation, knowledge management*

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,091 (+657 since 2026-11-05) | +657 since 2026-11-05 | Described as the "Memory Layer for AI Agents," providing drop-in memory infrastructure for context persistence. Its consistent growth since early November demonstrates a sustained focus on solving the long-term memory problem for agents. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 117,788 (+623 since 2026-11-15) | +623 since 2026-11-15 | Focuses on persistent context across sessions, compressing agent activity with AI and injecting relevant context into future sessions. The large total star count coupled with steady daily gains makes it a key player in agent continuity. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 149,194 (+640 since 2026-11-16) | +640 since 2026-11-16 | Turns codebases, docs, and schemas into queryable knowledge graphs. Its recent surge (+640) and status as a "/graphify skill" for major CLIs like Claude Code and Cursor highlight the shift toward structured knowledge retrieval. |

#### 3. Trend Signal Analysis
Today's data reveals that **AI infrastructure for agent coordination and evaluation** is the primary driver of community excitement. The most explosive category is AI Infrastructure, led by ag-ui and open-code-review, which together suggest a maturing ecosystem moving beyond simple API calls toward standardized protocols and secure, deterministic pipelines. A notable new tech stack direction is the rise of **TypeScript-based agent tooling** (ag-ui, plannotator, chrome-devtools-mcp), indicating that the frontier of AI development is increasingly moving into the browser and full-stack web environments. The "first appearances" today—most notably paper-orchestra and graphify—signal that the community is actively experimenting with novel applications like automated research writing and knowledge graph construction, whereas the "re-appearances" with large deltas (like univer and alibaba/open-code-review) demonstrate that established projects are compounding momentum through significant feature updates or enterprise adoption. The absence of decline in large, established repos suggests a healthy ecosystem where innovation is layered on top of robust foundations.

#### 4. Community Hot Spots
*   **Agent Protocols & UX:** Projects like **ag-ui-protocol/ag-ui** are worth focus as the industry moves toward standardizing how agents render UI and interact with users, moving beyond terminal-based outputs.
*   **Memory & Context Persistence:** **mem0ai/mem0** and **thedotmack/claude-mem** represent the critical infrastructure layer for long-horizon agent tasks; investing here solves the "forgetfulness" problem inherent in stateless LLM calls.
*   **Enterprise-Grade Code Review:** **alibaba/open-code-review** is a key direction for organizations looking to integrate LLMs into DevOps pipelines safely, offering a bridge between deterministic CI/CD and probabilistic AI outputs.
*   **Automated Research & Knowledge Bases:** **google-research/paper-orchestra** and **Graphify-Labs/graphify** are hot spots for developers building the "research engine" of the future, automating the synthesis of information from code and docs.
*   **AI-Powered Security Tooling:** **elementalsouls/Claude-BugHunter** highlights a growing need for red-team capabilities as AI coding assistants become more prevalent, making it a vital project for application safety.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*