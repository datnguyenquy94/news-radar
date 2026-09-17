# AI Open Source Trends 2026-09-17

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-17 04:35 UTC

---

# AI Open Source Trends Report — 2026-09-17

---

## 1. Today's Highlights

The ecosystem is consolidating around **agent orchestration layers** rather than raw model serving. Three of the top five fastest-growing repos today are agent harnesses (ECC, agent-skills, WeKnora) that add memory, skill marketplaces, and RAG onto existing coding agents. A new class of **token-optimization middleware** (caveman, headroom) is gaining traction by cutting 60–95% of context costs without quality loss. Frontier-model inference is going local and dependency-free: colibri streams MoE experts from disk in pure C, while voicebox brings studio-grade voice cloning to the browser. Security-skills for agents (Cloudflare, Claude-Red) signal that red-teaming is becoming a first-class agent capability.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | C | 35,148 (+1,546) | 📈 +1,087 since 2026-09-16 | Pure-C, zero-dependency MoE inference engine that streams experts from disk, enabling frontier models on commodity hardware. Today’s +1.5k stars confirm surging demand for local, lightweight serving. |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | TypeScript | 145,612 (+165) | 🆕 new | Official agentic coding CLI/SDK from Anthropic; lives in the terminal, understands codebases, and executes git workflows via natural language. First appearance with 145k stars signals immediate enterprise adoption. |
| [cline/cline](https://github.com/cline/cline) | TypeScript | 68,428 (+112) | 🆕 new | Autonomous coding agent packaged as SDK, IDE extension, and CLI. First appearance reflects community appetite for vendor-neutral, extensible agent runtimes. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 146,478 | 📈 +500 since 2026-09-09 | The established agent engineering platform; steady +500 stars shows it remains the default composition layer despite newer entrants. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 181,357 | 📈 +858 since 2026-09-15 | Web data API (search, scrape, interact) built for LLM consumption at scale. Consistent growth confirms live web access as critical agent infrastructure. |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Go | 106,092 | 📈 +682 since 2026-09-14 | Viral token-optimization proxy that cuts ~65% of tokens by forcing caveman-speak prompts. Novel approach to context-cost reduction gaining rapid mindshare. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 72,527 | 📈 +583 since 2026-09-14 | Compresses tool outputs, logs, and RAG chunks before LLM ingestion (20–95% token savings). Library, proxy, and MCP server form a complete compression stack. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 114,860 | 📈 +587 since 2026-09-12 | Framework for agents that drive real browsers; steady growth reflects the shift from API-only to GUI-capable agents. |

---

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 260,453 (+1,057) | 📈 +1,005 since 2026-09-16 | Agent harness adding skills, instincts, long-term memory, and security hardening for Claude Code, Codex, Cursor, etc. Largest repo in set; +1k stars/day shows compounding dominance. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 246,256 | 📈 +690 since 2026-09-15 | “Agent that grows with you” — persistent memory and self-improvement loops. Near-quarter-million stars indicate strong community belief in stateful, evolving agents. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 95,571 (+658) | 📈 +663 since 2026-09-16 | Production-grade engineering skill library for coding agents (refactoring, testing, docs). Google-backed, practical focus drives consistent adoption. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 107,084 | 📈 +803 since 2026-09-15 | Multi-agent LLM framework for financial trading (researcher, analyst, trader, risk). Niche vertical proving agents can coordinate complex workflows. |
| [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) | Rust | 4,540 (+1,017) | 📈 +1,021 since 2026-09-16 | Converts coding agents into research agents (literature search, hypothesis, experimentation). Highest daily growth rate (~22%) signals a new “agent-to-researcher” pipeline. |
| [SnailSploit/Claude-Red](https://github.com/SnailSploit/Claude-Red) | Python | 5,841 (+367) | 📈 +977 since 2026-09-15 | Curated offensive-security skills for Claude (SQLi, shellcode, EDR evasion). +977 stars in two days shows red-teaming as a first-class agent skill category. |
| [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Python | 24,341 (+110) | 🆕 new | Official plugin repo for Claude Cowork targeting knowledge workers (docs, slides, data). First appearance extends Anthropic’s agent ecosystem beyond code. |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | JavaScript | 7,702 (+927) | 🆕 new | Multi-phase security-audit skill with machine-readable findings. Cloudflare’s entry validates enterprise-grade agent skills as a product category. |
| [rlaope/oh-my-hermes](https://github.com/rlaope/oh-my-hermes) | Python | 2,602 (+80) | 📈 +440 since 2026-09-15 | All-in-one plugin pack for Hermes Agent (memory, workflows, model optimization). Steady growth reflects Hermes’ expanding plugin economy. |

---

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | TypeScript | 54,493 (+417) | 🆕 new | Open-source AI voice studio: clone, dictate, create. First appearance with 54k stars reveals pent-up demand for local, privacy-first voice tooling. |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | Go | 25,553 (+1,197) | 🆕 new | Turnkey LLM knowledge platform: RAG + autonomous reasoning agent + self-maintaining wiki. Tencent-backed, +1.2k stars day-one signals enterprise RAG appetite. |
| [multimodal-art-projection/YuE](https://github.com/multimodal-art-projection/YuE) | Python | 9,443 (+332) | 📈 +916 since 2026-09-15 | YuE2: frontier music generation with symbolic planning, zero-shot covers, agentic editing. +916 stars shows creative-agent verticals attracting dedicated communities. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 66,209 | 📈 +542 since 2026-09-06 | Local-first “own your intelligence” app: RAG, agents, multi-model chat in one desktop/web bundle. Sustained growth confirms all-in-one local AI UX demand. |

---

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 90,845 | 📈 +508 since 2026-09-09 | Leading open-source RAG engine fusing cutting-edge retrieval with agent capabilities for a superior context layer. Steady growth cements it as the default self-hosted RAG stack. |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | Go | 25,553 (+1,197) | 🆕 new | (Also in Applications) End-to-end knowledge platform: document ingestion → RAG → reasoning agent → auto-updating wiki. First appearance with massive day-one stars. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 72,527 | 📈 +583 since 2026-09-14 | (Also in Infrastructure) Token compression for RAG chunks (60–95% savings). Dual-category relevance shows retrieval efficiency is now inseparable from RAG quality. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 66,209 | 📈 +542 since 2026-09-06 | (Also in Applications) Built-in RAG + agent loop in a single local app. Growth reflects developers preferring integrated RAG over piecemeal pipelines. |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | 138,545 | 📈 +549 since 2026-09-14 | Curated collection of 100+ agents, skills, and RAG apps. Acts as a discovery engine; consistent stars indicate it’s the go-to catalog for practitioners. |

---

## 3. Trend Signal Analysis

**Agent orchestration is the new platform layer.** The three highest-momentum repos today — ECC (+1,057★), agent-skills (+658★), WeKnora (+1,197★) — are not model servers but *control planes* that bolt memory, skill registries, security policies, and RAG onto existing coding agents (Claude Code, Codex, Cursor). This mirrors the Kubernetes moment: the model is the container; the agent harness is the orchestrator.

**Token-efficiency middleware is a breakout category.** caveman (65% token cut via prompt rewriting) and headroom (20–95% via semantic compression) both entered the top-100 AI stars in the last week. Their growth reflects a hard economic constraint: as context windows expand, per-token cost and latency remain the primary blockers for multi-step agents. Expect more “compression-as-a-service” proxies and MCP servers.

**Security skills are becoming first-class agent primitives.** Cloudflare’s security-audit-skill (🆕 +927★) and Claude-Red (+977★ in 48h) show that enterprises now demand agents that can *attack* and *audit* codebases, not just write them. This aligns with the recent shift toward “agentic DevSecOps” in platform engineering teams.

**First appearances vs. compounding re-appearances.** The 🆕 cohort (claude-code, cline, voicebox, WeKnora, knowledge-work-plugins, security-audit-skill) represents *vendor-backed platform plays* — Anthropic, Tencent, Cloudflare launching official SDKs/apps. The 📈 cohort (ECC, hermes-agent, agent-skills, colibri, ragflow) are *community compounds* that have shipped iteratively for months. The former set the standards; the latter extend them. Absence of a repo from either list means “no new signal,” not decline.

**Local-first, dependency-free inference is maturing.** colibri (pure C, +1,546★ today) and voicebox (TypeScript, 🆕 54k★) prove that frontier capabilities (MoE, voice cloning) no longer require Python/PyTorch stacks or cloud GPUs. This unlocks edge/air-gapped/privacy-sensitive deployments — a strategic vector for regulated industries.

---

## 4. Community Hot Spots

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — The de-facto standard for hardening coding agents (memory, skills, security). 260k★ and +1k★/day makes it the highest-leverage contribution target; PRs for new skills or memory backends get immediate distribution.
- **[JustVugg/colibri](https://github.com/JustVugg/colibri)** — Only production-grade MoE-in-C engine. Contributions around expert-offloading heuristics, quantization kernels, or WASM ports will ride the local-inference wave.
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — Token compression is the highest-ROI optimization for any RAG/agent pipeline. The proxy/MCP architecture means a single PR benefits every downstream agent.
- **[Tencent/WeKnora](https://github.com/Tencent/WeKnora)** — Enterprise RAG platform with reasoning agent + auto-wiki. Early contributors shape the plugin API for document parsers, retrievers, and wiki exporters before it ossifies.
- **[alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch)** — Fastest-growing new vertical (coding agent → research agent). Rust codebase, clear extension points for literature connectors, hypothesis generators, and experiment runners.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*