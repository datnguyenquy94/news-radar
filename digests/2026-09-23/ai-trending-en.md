# AI Open Source Trends 2026-09-23

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-23 04:26 UTC

---

# AI Open Source Trends Report — 2026-09-23

---

## 1. Today's Highlights

Google's new **agentic orchestration runtime `ax`** exploded onto the scene with **+2,305 stars in a single day**, signaling intense industry interest in production-grade multi-agent infrastructure. Three brand-new agent substrates debuted simultaneously — **`agent-substrate/substrate`**, **`google/ax`**, and **`superdesigndev/treg`** — marking a clear shift from experimental frameworks to hardened runtime layers. Anthropic's **`financial-services`** SDK and **`browser-use/video-use`** demonstrate vertical specialization: finance and video editing are becoming first-class agent domains. Meanwhile, **`minimind`**'s ability to train a 64M-parameter LLM in two hours underscores the accelerating democratization of model training. Established pillars — **`ollama`**, **`firecrawl`**, **`langgraph`** — continue compounding growth, confirming the ecosystem's maturation beyond hype cycles.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 183,489 | 📈 +846 since 2026-09-21 | Web data API purpose-built for LLM consumption — search, scrape, and interact at scale. Its steady +846 stars in two days reflects sustained demand for reliable, structured web ingestion in RAG and agent pipelines. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 265,549 | 📈 +720 since 2026-09-22 | Agent harness optimizer adding skills, memory, security, and research-first tooling across Claude Code, Codex, Cursor, and Opencode. The massive star base and daily growth show it has become a de-facto performance layer for coding agents. |
| [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | Python | 31,191 (+64 today) | 🆕 new | CLI for configuring and monitoring Claude Code workflows. First appearance with 31k stars indicates strong latent demand for standardized, observable agent development environments. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 181,497 | 📈 +512 since 2026-09-15 | Local model runner supporting Kimi, GLM, MiniMax, DeepSeek, Qwen, Gemma, and gpt-oss. Consistent growth confirms its role as the default inference substrate for desktop and edge AI. |
| [superdesigndev/treg](https://github.com/superdesigndev/treg) | Python | 2,303 (+230 today) | 🆕 new | "OpenRouter for agent tools" — a unified registry and routing layer for agent capabilities. Rapid early traction (+230 today) highlights the emerging need for tool discovery and interoperability across agent frameworks. |
| [anthropics/financial-services](https://github.com/anthropics/financial-services) | Python | 36,478 (+438 today) | 📈 +1,020 since 2026-09-21 | Anthropic's official SDK for building financial-services agents with compliance, audit, and domain-specific tooling. The +1,020 surge in two days signals enterprise adoption of agentic AI in regulated sectors. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/ax](https://github.com/google/ax) | Go | 7,867 (+2,305 today) | 🆕 new | Google's open agentic orchestration runtime — built for production multi-agent workflows with state, streaming, and observability. The +2,305 single-day spike is the strongest launch signal in this report. |
| [agent-substrate/substrate](https://github.com/agent-substrate/substrate) | Go | 3,063 (+245 today) | 🆕 new | Core agent substrate providing runtime primitives (memory, tools, planning) for composable agents. Go implementation and immediate traction suggest a focus on performance and deployability. |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | Python | 42,156 | 📈 +665 since 2026-09-12 | Graph-based agent framework for resilient, stateful, multi-actor applications. Steady compounding growth over 11 days confirms its position as the leading structured agent orchestration layer. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 248,153 | 📈 +626 since 2026-09-21 | Self-evolving agent with long-term memory and skill acquisition. The quarter-million-star base and persistent momentum reflect community belief in persistent, personalized agent identities. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 115,975 | 📈 +598 since 2026-09-20 | Browser automation for agents — enabling web navigation, form filling, and extraction. Sustained growth confirms web interaction as a foundational agent capability. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 108,184 | 📈 +541 since 2026-09-20 | Multi-agent LLM framework for financial trading: research, analysis, risk, and execution agents. Consistent gains show strong niche adoption in algorithmic finance. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 15,668 (+255 today) | 🆕 new | Full office suite (spreadsheets, docs, slides, canvas, relational tables, PDF) as a single runtime for AI agents. First appearance with 15k stars signals a new category: "agent-native productivity canvas." |
| [browser-use/video-use](https://github.com/browser-use/video-use) | Python | 25,984 (+191 today) | 📈 +2,901 since 2026-09-02 | Code-driven video editing via agents — cut, composite, subtitle, and render programmatically. The +2,901 surge in three weeks marks video as the next major generative modality after text and image. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 125,209 | 📈 +597 since 2026-09-19 | One-click HD short video generation from topic/keyword using automated AI workflows. Sustained growth reflects creator-economy demand for end-to-end AI video pipelines. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 62,223 | 📈 +605 since 2026-09-19 | Train a 64M-parameter LLM from scratch in ~2 hours on consumer hardware. The consistent +600 gains over four days highlight surging interest in accessible, educational, and customizable model training. |

---

## 3. Trend Signal Analysis

**Agent runtimes are the new battleground.** The simultaneous launch of `google/ax`, `agent-substrate/substrate`, and `superdesigndev/treg` — all written in Go or Python with production hardening in mind — marks a decisive shift from "agent frameworks" (prompt chains, memory helpers) to **agent operating systems**: stateful, observable, tool-routing, multi-tenant runtimes. `ax`'s +2,305/day is unprecedented for a Google open-source AI project and suggests internal validation at scale.

**Vertical agent applications are graduating from demos to products.** `anthropics/financial-services` (compliance-aware finance agents), `dream-num/univer` (agent-native office suite), and `browser-use/video-use` (code-driven video editing) each target a high-value domain with domain-specific tooling. This mirrors the SaaS verticalization wave: generic horizontal platforms enable, but vertical integrations capture revenue.

**Training democratization is accelerating.** `minimind`'s 2-hour 64M training run on consumer GPUs, combined with `ollama`'s expanding model zoo (now including GLM, MiniMax, gpt-oss), shows the stack compressing: inference → fine-tuning → pre-training are all becoming local-first. The community is no longer waiting for frontier labs to open-weight models.

**First appearances vs. compounding re-appearances tell different stories.** The 🆕 cohort (`ax`, `substrate`, `treg`, `univer`, `claude-code-templates`) reveals **where capital and talent are placing new bets**: agent runtimes, tool registries, agent-native UIs, and developer experience. The 📈 cohort (`firecrawl`, `ECC`, `langgraph`, `hermes-agent`, `ollama`, `browser-use`, `TradingAgents`, `MoneyPrinterTurbo`, `minimind`) reveals **what has already achieved product-market fit and is now scaling**: web ingestion, agent optimization, graph orchestration, persistent agents, local inference, browser automation, finance agents, video generation, and micro-training. The absence of decline — only "nothing new to say" — confirms a healthy, expanding ecosystem rather than a zero-sum hype cycle.

---

## 4. Community Hot Spots

- **`google/ax`** — Highest single-day momentum (+2,305); Google's entry into open agent runtimes will set architectural patterns for years. Watch for integrations with ADK, Vertex, and Gemini.
- **`dream-num/univer`** — Only project unifying spreadsheets, docs, slides, and canvas in one agent-native runtime. If agents become knowledge workers, this is their desktop.
- **`agent-substrate/substrate`** + **`superdesigndev/treg`** — Together they represent the **runtime + registry** duo needed for composable agent ecosystems. Early contributors can shape interoperability standards.
- **`browser-use/video-use`** — Video editing via code agents is a greenfield category with immediate commercial demand (marketing, education, social). The +2,901/3weeks velocity is a leading indicator.
- **`jingyaogong/minimind`** — Lowest barrier to entry for custom LLM training. As data privacy and domain specialization drive on-prem adoption, "train your own 64M in 2h" becomes a strategic capability.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*