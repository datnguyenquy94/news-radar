# AI Open Source Trends 2026-09-12

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-12 04:14 UTC

---

# AI Open Source Trends Report — 2026-09-12

## 1. Today's Highlights

The AI open-source ecosystem is coalescing around **agentic infrastructure** and **vertical applications** rather than raw model releases. GitHub's own `spec-kit` debuted at 135k stars, signaling institutional backing for spec-driven development as the default workflow for AI-assisted coding. Three new agent frameworks (`superpowers`, `OpenResearch`, `ECC`) each surpassed 1k stars in 24 hours, while `i-have-adhd` (+3,463 today) and `gods-eye-view` (+3,680) demonstrate explosive demand for developer-experience tooling and real-world grounding. The first appearances of `DeskcommCRM` (AI sales OS), `CloddsBot` (autonomous trading), and `MathModelAgent` (paper-grade math modeling) mark a shift from generic agents to **domain-specialized, production-ready applications** with built-in compliance (LGPD, MCP) and multi-venue execution.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [github/spec-kit](https://github.com/github/spec-kit) | Python | 135,818 (+1,015) | 🆕 new | GitHub's official toolkit for spec-driven development; instantly became the highest-starred new entry, establishing specs-as-code as the emerging standard for AI-assisted software delivery. |
| [pascalorg/editor](https://github.com/pascalorg/editor) | TypeScript | 23,669 (+106) | 📈 +636 since 2026-09-10 | 3D architectural editor with local CLI and MCP tooling; bridges human-AI collaboration in spatial design workflows, a novel modality beyond code. |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | Python | 72,897 | 🆕 new | Open data platform for analysts, quants, and AI agents; positions financial data as a first-class primitive for agentic workflows. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 114,273 | 📈 +630 since 2026-09-09 | Browser automation framework purpose-built for agents; 114k stars confirm web interaction as critical infrastructure for autonomous systems. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 256,601 | 📈 +626 since 2026-09-11 | Agent harness optimization system (skills, memory, security) supporting Claude Code, Codex, Cursor, Opencode; 256k stars make it the most widely adopted agent runtime layer. |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | Python | 41,491 | 📈 +534 since 2026-09-03 | Resilient agent framework from LangChain; steady growth reflects its role as the de facto orchestration layer for multi-step agent pipelines. |

### 🤖 AI Agents / Workflows
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 285,434 (+729) | 📈 +627 since 2026-09-11 | Agentic skills framework and methodology; 285k stars and consistent daily growth signal it as the leading opinionated framework for agent development. |
| [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | Python | 42,154 (+3,463) | 📈 +3,337 since 2026-09-11 | Skill to prevent coding agents from burying answers; highest daily velocity (+3.4k) reveals acute pain point in agent output usability. |
| [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) | Rust | 1,349 (+120) | 🆕 new | Parallel research agents with any model; Rust implementation and model-agnostic design position it for high-throughput autonomous research. |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | JavaScript | 135,926 | 📈 +981 since 2026-09-11 | "Makes your AI agent think like the laziest senior dev"; 135k stars validate the meta-cognitive approach to agent reasoning optimization. |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | 137,261 | 📈 +700 since 2026-09-08 | Curated collection of 100+ agents, skills, and RAG apps; functions as the ecosystem's discovery layer and trend barometer. |

### 📦 AI Applications
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM) | TypeScript | 1,415 (+152) | 🆕 new | Self-hosted AI sales OS with native agents, WhatsApp (WAHA), MCP-ready, multi-tenant, LGPD-compliant; first production-grade vertical CRM built agent-first. |
| [alsk1992/CloddsBot](https://github.com/alsk1992/CloddsBot) | TypeScript | 2,204 (+626) | 📈 +445 since 2026-09-11 | Autonomous trading agent across 1,000+ markets (Polymarket, Binance, Hyperliquid, Solana DEXs, 5 EVM chains); agent commerce protocol for machine-to-machine payments. |
| [jihe520/MathModelAgent](https://github.com/jihe520/MathModelAgent) | Python | 4,897 (+129) | 🆕 new | Agent that automatically completes mathematical modeling and generates submission-ready papers; domain-specialized agent achieving expert-level output. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 122,558 | 📈 +524 since 2026-09-10 | One-click HD short video generation from topic/keyword via automated AI workflow; 122k stars confirm content automation as a killer consumer AI app. |

### 🔍 RAG / Knowledge
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [nashsu/llm_wiki](https://github.com/nashsu/llm_wiki) | TypeScript | 18,807 (+647) | 📈 +592 since 2026-09-11 | Cross-platform desktop app that incrementally builds a persistent, interlinked wiki from documents — moving beyond retrieve-and-answer to continuous knowledge synthesis. |
| [jordan-gibbs/hyperresearch](https://github.com/jordan-gibbs/hyperresearch) | Python | 2,698 (+153) | 🆕 new | Agent-driven research knowledge base; agents collect, search, and synthesize web research into a persistent, searchable wiki — automating the full research loop. |

---

## 3. Trend Signal Analysis

**Agentic infrastructure is the dominant investment theme.** Six of the top ten momentum projects (`superpowers`, `ECC`, `langgraph`, `browser-use`, `ponytail`, `spec-kit`) are frameworks or runtime layers that make agents reliable, observable, and composable — not end-user apps. The community is solving the "last mile" of agent deployment: memory (`ECC`), skills (`superpowers`), browser control (`browser-use`), and spec adherence (`spec-kit`).  

**Vertical specialization is accelerating.** Three first-appearance applications (`DeskcommCRM`, `CloddsBot`, `MathModelAgent`) each target a regulated or high-stakes domain (sales compliance, financial trading, academic publishing) with built-in standards (LGPD, MCP, multi-venue execution). This contrasts with earlier generic "chat with your PDF" tools — today's entrants ship with domain logic, compliance, and monetization primitives.  

**Rust and TypeScript are gaining ground in agent runtimes.** `OpenResearch` (Rust) and `DeskcommCRM`/`CloddsBot`/`llm_wiki` (TypeScript) signal a shift from Python-only prototypes to polyglot, production-grade stacks where performance (Rust) and full-stack type safety (TypeScript) matter.  

**First appearances vs. compounding re-appearances tell different stories.** The 🆕 cohort (`spec-kit`, `DeskcommCRM`, `OpenResearch`, `MathModelAgent`, `hyperresearch`, `OpenBB`, `iloader`, `Sonarr`) represents **new vectors**: spec-driven dev, vertical AI SaaS, parallel research, math automation, and financial data platforms. The 📈 cohort (`superpowers`, `i-have-adhd`, `ponytail`, `awesome-llm-apps`, `browser-use`, `ECC`, `langgraph`, `MoneyPrinterTurbo`, `pascalorg/editor`, `CloddsBot`, `llm_wiki`) shows **compounding conviction** — these projects have already crossed the adoption chasm and are now deepening moats. Notably, `spec-kit` achieved 135k stars on day one, a scale usually reserved for years-old projects, indicating GitHub's distribution power can instantly canonize a new paradigm.

---

## 4. Community Hot Spots

- **[github/spec-kit](https://github.com/github/spec-kit)** — Spec-driven development is becoming the *lingua franca* for human-AI coding collaboration. Adopt early; tooling ecosystem will standardize here.
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — 256k stars across Claude Code, Codex, Cursor, Opencode makes it the de facto agent runtime abstraction layer. Essential for portable agent skills.
- **[obra/superpowers](https://github.com/obra/superpowers)** — Highest-starred agent framework (285k) with methodology attached. Best reference implementation for structured agent development.
- **[melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM)** — Template for vertical AI SaaS: agent-native, self-hosted, compliant, MCP-integrated. Study its architecture for regulated-domain agents.
- **[nashsu/llm_wiki](https://github.com/nashsu/llm_wiki)** — Pioneers *incremental knowledge synthesis* over static RAG. The persistent wiki model solves hallucination drift in long-running research agents.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*