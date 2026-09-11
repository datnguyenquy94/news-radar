# AI Open Source Trends 2026-09-11

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-11 04:15 UTC

---

# AI Open Source Trends Report — 2026-09-11

---

## 1. Today's Highlights

The AI open-source ecosystem is converging on **local-first, agent-centric infrastructure** with three clear signals today. First, universal AI gateways (OmniRoute, 64k★) and local inference engines (colibri, 27k★; llmfit, 35k★) are eliminating cloud lock-in by letting developers route to 350+ providers or run MoE models on consumer hardware. Second, agent frameworks are maturing from prototypes into production-grade harnesses — ECC (256k★), hermes-agent (244k★), and superpowers (285k★) all show sustained compounding growth. Third, a new wave of **token-efficiency tooling** (caveman -65% tokens, headroom 60-95% JSON compression, ECC's "instincts" system) signals that context-window economics are now a first-class engineering concern. Notably, 9 of 21 tracked AI projects are 🆕 first appearances, indicating rapid new-entrant velocity rather than just incumbent consolidation.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | TypeScript | 64,365 (+626) | 🆕 new | Universal AI gateway with 352 providers (150+ free) and 1,200+ models; quota-aware fallback, RTK+Caveman compression saves 15-95% tokens, works with every major coding agent. 550+ contributors signal strong community adoption. |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | C | 27,524 (+98) | 🆕 new | Pure-C, zero-dependency MoE inference engine that streams experts from disk — runs frontier models on consumer hardware. Tiny binary, immense model support; unique "stream-from-disk" architecture avoids RAM bottlenecks. |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | Rust | 35,812 (+258) | 🆕 new | Single command to discover which of hundreds of models/providers run on your local hardware. Rust performance, hardware-aware model selection — solves the "what fits my GPU" problem for local-first developers. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 178,884 | 📈 +804 since 2026-09-09 | Context API for web search, scrape, and interaction at scale. De facto standard for feeding live web data into LLM pipelines; 179k★ with steady daily growth confirms production reliance. |
| [vercel-labs/skills](https://github.com/vercel-labs/skills) | TypeScript | 31,234 (+122) | 🆕 new | Open agent skills tool (`npx skills`) — standardized, portable skill definitions for AI agents. Vercel backing and zero-config DX position it as a potential universal skill registry layer. |
| [Tencent/teamai-cli](https://github.com/Tencent/teamai-cli) | TypeScript | 3,910 (+841) | 📈 +728 since 2026-09-10 | "Make Every Team AI Native" CLI — enterprise-grade tooling for team-wide AI adoption. Rapid 2-day growth (+728) suggests strong internal-to-open-source momentum at Tencent. |
| [vastsa/PI-Desktop](https://github.com/vastsa/PI-Desktop) | TypeScript | 2,398 (+624) | 📈 +605 since 2026-09-10 | Local-first AI coding agent desktop: Electron + Rust host + pi Agent Harness + plugin system. 1-day +605 surge indicates developer appetite for self-hosted, extensible coding agents. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 116,786 | 📈 +671 since 2026-09-09 | Deterministic AST-based codebase → knowledge graph (no vector store). Every edge explained, works as skill for Claude Code/Cursor/Gemini CLI. 117k★ with consistent growth = trusted code-intelligence infrastructure. |

---

### 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems)

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 255,975 | 📈 +682 since 2026-09-10 | Agent harness optimization system: skills, instincts, memory, security, research-first dev for Claude Code, Codex, Opencode, Cursor. 256k★ + daily growth = de facto standard for agent performance hardening. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 244,268 | 📈 +762 since 2026-09-09 | "The agent that grows with you" — persistent, evolving agent from Nous Research. 244k★ and steady gains reflect strong community trust in Nous's agent architecture. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 284,807 (+732) | 📈 +683 since 2026-09-10 | Agentic skills framework & software development methodology. Highest-starred project in dataset (285k★); shell-based approach emphasizes portability and zero-dependency agent orchestration. |
| [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | TypeScript | 35,466 (+837) | 📈 +5,740 since 2026-09-02 | Open Multi-Agent Interactive Classroom — immersive multi-agent learning in one click. 9-day +5.7k surge shows explosive interest in educational multi-agent simulations. |
| [alsk1992/CloddsBot](https://github.com/alsk1992/CloddsBot) | TypeScript | 1,759 (+277) | 🆕 new | Autonomous AI trading agent across 1,000+ markets (Polymarket, Binance, Hyperliquid, Solana DEXs, 5 EVM chains). Self-hosted, built on Claude, implements agent commerce protocol for machine-to-machine payments. |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | JavaScript | 134,945 | 📈 +1,311 since 2026-09-10 | Makes AI agents "think like the laziest senior dev" — minimizes unnecessary code generation. 135k★ + highest daily delta (+1.3k) signals viral adoption of token-efficiency philosophy. |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Go | 104,773 | 📈 +590 since 2026-09-08 | Claude Code skill cutting 65% tokens via "caveman" communication. 105k★ proves extreme token compression is a high-value niche; Go implementation ensures speed. |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | TypeScript | 33,131 | 📈 +536 since 2026-09-05 | Universal Claude CLI alternative: "runs anywhere, uses anything." Steady growth positions it as the portable, vendor-neutral agent runtime. |

---

### 📦 AI Applications (specific apps, vertical solutions)

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | Python | 38,817 (+3,882) | 📈 +3,642 since 2026-09-10 | ADHD-friendly coding agent skill — stops agents from burying answers. Highest today's stars (+3,882) and 1-day +3.6k surge reveal massive unmet demand for neurodivergent-friendly AI UX. |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | 37,931 (+1,294) | 📈 +1,115 since 2026-09-10 | 38 editorial diagram types for Claude Code, Codex, Pi — self-contained HTML+SVG, no Mermaid. 38k★ + strong growth shows developers crave polished, copy-paste visual artifacts from agents. |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | JavaScript | 30,996 (+962) | 📈 +776 since 2026-09-10 | "Prompt as Code" library for GPT Image 2/2.5: 530+ cases, 20+ industrial templates, reusable skills, 2.5 comparison zone. 31k★ confirms prompt engineering is evolving into versioned, reusable code. |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 71,166 | 📈 +822 since 2026-09-07 | Open-source AI job search: scans portals, scores listings A-H, tailors CV, tracks apps — runs locally in your coding CLI (Claude Code, Codex, etc.). 71k★ = strong product-market fit for dev-centric job automation. |
| [zchoi/Awesome-Embodied-Robotics-and-Agent](https://github.com/zchoi/Awesome-Embodied-Robotics-and-Agent) | — | 1,875 | 🆕 new | Curated research list: "Embodied AI or robot with LLMs." First appearance signals rising academic/industry focus on physical-agent integration; watch-list for sim-to-real breakthroughs. |

---

### 🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools)

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 60,583 | 📈 +564 since 2026-09-09 | Train a 64M-parameter LLM from scratch in 2 hours. 60k★ + steady growth = go-to educational reference for minimal viable LLM training; demystifies pre-training for newcomers. |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | Python | 45,749 | 📈 +586 since 2026-09-08 | 《深入理解 AI Agent：设计原理与工程实践》open-source repo: full text, compiled PDF, chapter code. 46k★ for a Chinese-language technical book signals massive Chinese-dev engagement in agent engineering. |

---

### 🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 65,089 | 📈 +544 since 2026-09-02 | "The Memory Layer for AI Agents" — drop-in persistent memory infrastructure. 65k★ + 10-day steady growth confirms product-market fit for long-term agent context. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 71,405 | 📈 +563 since 2026-09-09 | Compresses tool outputs, logs, files, RAG chunks before LLM: 20% fewer tokens for coding agents, 60-95% for JSON. Library, proxy, MCP server. 71k★ = critical infrastructure for token budgets. |
| [nashsu/llm_wiki](https://github.com/nashsu/llm_wiki) | TypeScript | 18,215 (+142) | 🆕 new | Desktop app that incrementally builds persistent wiki from documents — replaces traditional RAG with maintained knowledge base. Cross-platform, auto-interlinks. Novel "wiki-not-RAG" paradigm gaining traction. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 116,786 | 📈 +671 since 2026-09-09 | Deterministic AST parsing → queryable knowledge graph (no vector store). Every edge explained. Works as skill for major coding agents. Highest-starred RAG-adjacent project (117k★). |

---

## 3. Trend Signal Analysis

**Explosive category: Local-first agent infrastructure.** The strongest signal is the convergence of three vectors — universal gateways (OmniRoute), local MoE inference (colibri), and hardware-aware model discovery (llmfit) — all 🆕 today. Developers are rejecting cloud lock-in and building **portable, self-hosted agent stacks** that route to any provider or run locally. This is accelerated by token-efficiency tooling: caveman (-65% tokens), headroom (60-95% JSON compression), ECC's "instincts" system, and ponytail's "lazy senior dev" philosophy all treat context-window economics as an engineering discipline, not an afterthought.

**New tech stacks appearing for first time:** Pure-C zero-dependency inference (colibri), Rust-based hardware probing (llmfit), and the "wiki-not-RAG" knowledge paradigm (llm_wiki) represent architectural shifts — moving from Python-heavy, vector-store-dependent stacks toward systems-language performance and deterministic knowledge structures. The agent-commerce protocol in CloddsBot (machine-to-machine payments on Solana/EVM) hints at **agent-to-agent economy primitives** emerging in open source.

**Connection to industry events:** The surge in GPT Image 2/2.5 prompt libraries (awesome-gpt-image-2, +776 in 9 days) and multi-agent classroom (OpenMAIC, +5.7k in 9 days) correlates with recent multimodal model releases and academic interest in agent societies. Tencent's teamai-cli (+728 in 2 days) reflects big-tech internal tooling going open source — a pattern seen previously with Meta, Google, Microsoft.

**🆕 vs 📈 distinction:** The 9 🆕 first appearances (OmniRoute, colibri, llmfit, CloddsBot, llmfit, skills, PI-Desktop, llm_wiki, Embodied Robotics list) are **new architectural bets** — local inference, universal routing, agent commerce, persistent wikis. The 📈 re-appearances (ECC, hermes-agent, superpowers, firecrawl, graphify, mem0, headroom, caveman, ponytail) are **compounding infrastructure** that crossed the adoption chasm and now grow daily. The former defines the next frontier; the latter defines the current production baseline. Absence of 67 previously-covered repos means stability, not decline — the ecosystem is deepening, not churning.

---

## 4. Community Hot Spots

- **OmniRoute + colibri + llmfit triad** — Together they form a complete local-first stack: discover what fits (llmfit), run it efficiently (colibri), or route to 350+ providers with compression (OmniRoute). Watch for integration PRs between them.
- **ECC / hermes-agent / superpowers** — The three highest-starred agent harnesses (256k/244k/285k★) all growing daily. Convergence on "skills + instincts + memory + security" as the production agent spec. Next 6 months will likely see a de facto standard emerge from their patterns.
- **Token-efficiency tooling (caveman, headroom, ponytail, ECC)** — 65-95% compression gains are no longer experimental; they're default expectations. Any agent framework ignoring context compression will face adoption friction.
- **Persistent knowledge over RAG (mem0, llm_wiki, graphify)** — Shift from "retrieve every time" to "maintain a living knowledge graph/wiki." mem0 (65k★) for agent memory, graphify (117k★) for code intelligence, llm_wiki (🆕) for documents — this paradigm solves the "context rot" problem.
- **Embodied AI / Agent-Commerce (CloddsBot, Embodied Robotics list)** — Autonomous trading across 1,000+ markets with on-chain settlement + curated embodied robotics research = early signals of **physical + economic agency** merging. High speculative value; track for sim-to-real demos.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*