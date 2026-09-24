# AI Open Source Trends 2026-09-24

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-24 04:23 UTC

---

# AI Open Source Trends Report — 2026-09-24

## 1. Today's Highlights

The agent infrastructure layer is exploding: four new SDKs and runtimes (Strands Harness, CLI-Anything, treg, impeccable) debuted simultaneously, each targeting production-grade agent orchestration, tool routing, or design-token alignment. Google’s **ax** runtime surged +1,425 stars overnight, signaling strong community pull for a vendor-neutral agentic orchestration layer. Financial-domain agents dominate the application tier — Anthropic’s financial-services template, HKUDS’ Vibe-Trading, TNT-Likely’s PanWatch, and OpenBB’s data platform all charted, reflecting a verticalization wave. On the knowledge side, **Graphify-Labs/graphify** (120k★) and **DeusData/codebase-memory-mcp** (44k★, new) prove that deterministic code-graph indexing is outpacing vector-only RAG. Finally, **AttnRL** (ICLR 2026) surfaced as the first open implementation of process-supervised RL for reasoning models, hinting at the next training paradigm shift.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/ax](https://github.com/google/ax) | Go | 9,292 (+1,543) | 📈 +1,425 since 2026-09-23 | Google’s open agentic orchestration runtime; the largest single-day jump in the list shows developers rallying around a vendor-neutral control plane for multi-agent workflows. |
| [strands-agents/harness-sdk](https://github.com/strands-agents/harness-sdk) | Python | 7,927 (+115) | 🆕 new | End-to-end SDK for production AI agents (Python & TypeScript), model- and cloud-agnostic; first appearance signals a new contender in the agentops stack. |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | 50,009 (+57) | 🆕 new | “Making ALL Software Agent-Native” — a hub that wraps arbitrary CLIs as agent skills; 50k★ at launch indicates massive latent demand for agentifying existing toolchains. |
| [superdesigndev/treg](https://github.com/superdesigndev/treg) | Python | 2,792 (+506) | 📈 +489 since 2026-09-23 | “OpenRouter for agent tools” — a registry and routing layer that lets agents discover and invoke tools dynamically; rapid re-appearance growth shows active adoption. |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | JavaScript | 70,436 (+304) | 🆕 new | Design-language system that makes AI harnesses better at UI/UX decisions; 70k★ debut reflects hunger for design-aware agent outputs. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 266,262 | 📈 +713 since 2026-09-23 | Agent harness performance optimizer (skills, instincts, memory, security) compatible with Claude Code, Cursor, Codex; sustained growth on a massive base. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 73,661 | 📈 +532 since 2026-09-20 | Compresses tool outputs, logs, and RAG chunks before LLM ingestion — 20–95% token reduction with same answers; library, proxy, and MCP server modes. |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | C | 44,650 (+190) | 🆕 new | High-perf code-intelligence MCP server: persistent knowledge graph, 158 languages, sub-ms queries, 99% fewer tokens; single static binary, zero deps. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [BuilderIO/agent-native](https://github.com/BuilderIO/agent-native) | TypeScript | 6,618 (+87) | 📈 +575 since 2026-09-22 | Framework for building agentic applications; steady growth shows it’s becoming a go-to structure for TypeScript-first agent teams. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 290,781 (+474) | 📈 +5,347 since 2026-09-12 | Agentic skills framework and development methodology; the highest-starred repo in the dataset, still compounding at 5k+/week. |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | Python | 50,557 | 📈 +756 since 2026-09-22 | Open-source book “Deep Understanding of AI Agents” with full text, PDF, and chapter code; serves as a de-facto curriculum for agent engineering. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [anthropics/financial-services](https://github.com/anthropics/financial-services) | Python | 37,036 (+664) | 📈 +558 since 2026-09-23 | Anthropic’s reference implementation for AI-driven financial services; rapid daily growth shows enterprise template demand. |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 16,462 (+1,142) | 📈 +794 since 2026-09-23 | “Office Harness for AI Agents” — unified spreadsheet, doc, slide, canvas, and PDF runtime; +1.1k today stars mark it as the leading agent-native productivity suite. |
| [browser-use/video-use](https://github.com/browser-use/video-use) | Python | 26,584 (+746) | 📈 +600 since 2026-09-23 | Edit videos with coding agents; unique vertical application turning video editing into a programmable agent task. |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 33,911 | 📈 +527 since 2026-09-14 | Personal trading agent with multi-agent decision pipeline; consistent growth reflects retail quant/agent crossover interest. |
| [TNT-Likely/PanWatch](https://github.com/TNT-Likely/PanWatch) | Python | 1,602 (+95) | 🆕 new | Self-hosted AI watchlist assistant integrating TradingAgents multi-agent analysis for A/H/US stocks; first appearance with real-time monitoring and multi-channel alerts. |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | Python | 73,420 | 📈 +523 since 2026-09-12 | Open data platform for analysts, quants, and AI agents; broad financial tooling backbone seeing steady compounding. |
| [jeecgboot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot) | Java | 47,964 | 📈 +507 since 2026-08-25 | Enterprise AI low-code platform: one-sentence → full system generation, AI skills for flows/forms/reports/dashboards, built-in AI app platform (chat, KB, MCP). |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | TypeScript | 46,488 | 📈 +507 since 2026-08-26 | Privacy-first, self-hosted knowledge workspace where humans and AI agents collaborate; dual focus on note-taking and agent tooling. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [harry7557558/spirula-studio](https://github.com/harry7557558/spirula-studio) | C++ | 781 (+69) | 🆕 new | Cross-vendor 3D Gaussian Splatting trainer (video → splat → mesh) with Vulkan/CUDA backends; new entry for 3D generative pipeline tooling. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 61,965 | 📈 +505 since 2026-09-10 | YOLO27/26/11/v8 — object detection, segmentation, pose, tracking; the standard for real-time vision models, still growing steadily. |
| [RyanLiu112/AttnRL](https://github.com/RyanLiu112/AttnRL) | Python | 14 | 🆕 new | ICLR 2026 official code: “Attention as a Compass” — process-supervised RL for efficient exploration in reasoning models; first open implementation of this paradigm. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 120,969 | 📈 +713 since 2026-09-22 | Turns any codebase (code, docs, SQL, configs, PDFs) into a queryable knowledge graph via deterministic AST parsing; no vector store, every edge explained. |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 35,833 | 📈 +509 since 2026-08-26 | Document index for vectorless, reasoning-based RAG; shifts retrieval from embedding similarity to structured page-level reasoning. |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | C | 44,650 (+190) | 🆕 new | Code-intelligence MCP server building persistent knowledge graphs; 158 languages, sub-ms queries, 99% token reduction, single static binary. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 73,661 | 📈 +532 since 2026-09-20 | Token compressor for RAG chunks, tool outputs, and logs — 20% fewer tokens for coding agents, 60–95% for JSON; library, proxy, MCP server. |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | TypeScript | 46,488 | 📈 +507 since 2026-08-26 | Self-hosted knowledge workspace with built-in AI agent collaboration; combines note-taking, graph view, and agent tooling in one privacy-first app. |

---

## 3. Trend Signal Analysis

The dominant signal today is **production hardening of the agent stack**. Four brand-new infrastructure projects (Strands Harness, CLI-Anything, treg, impeccable) entered the trending list simultaneously, each addressing a different operational gap: harness lifecycle, CLI-to-skill bridging, tool routing, and design-token alignment. Their 🆕 status — not 📈 re-appearances — means the community is actively sampling *new* entrants rather than just deepening investment in incumbents. Google’s **ax** leading the daily star delta (+1,425) confirms that a vendor-neutral orchestration runtime has reached critical mindshare.

A second vector is **vertical agent applications in finance**. Five distinct projects (Anthropic’s template, Vibe-Trading, PanWatch, OpenBB, and the financial-services repo itself) cluster around trading, market data, and regulatory workflows. This isn’t generic chat — it’s multi-agent decision pipelines with real-time feeds, compliance guardrails, and self-hosted deployment, signaling that finance is the first vertical where agent products are shipping at scale.

On the knowledge layer, **deterministic code graphs are beating vector RAG**. Graphify (120k★) and DeusData’s new MCP server (44k★) both eschew embeddings for AST-derived graphs with explainable edges. Headroom’s token compression (73k★) compounds this by making any retrieval cheaper. The pattern: developers want *precision* and *cost control* over semantic fuzziness.

Finally, **AttnRL**’s appearance (ICLR 2026, 14★) is a leading indicator: process-supervised RL for reasoning models is moving from paper to runnable code. Though tiny today, it marks the start of the post-PPO training toolchain that will underpin the next generation of reasoning LLMs.

---

## 4. Community Hot Spots

- **google/ax** — The orchestration runtime to watch; +1.4k stars in 24h suggests it may become the “Kubernetes for agents” baseline.
- **DeusData/codebase-memory-mcp** — Zero-dep, single-binary code graph server; solves the “context too large” problem for agentic coding at scale.
- **dream-num/univer** — Only agent-native office suite with canvas + relational tables; +1.1k today stars shows product-market fit for AI-first knowledge work.
- **Graphify-Labs/graphify** — 120k★ and still growing; the reference implementation for deterministic code-knowledge graphs, now a skill for every major coding agent.
- **AttnRL** — First open code for process-supervised RL on reasoning models; early contributors will shape the training stack for o1-class systems.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*