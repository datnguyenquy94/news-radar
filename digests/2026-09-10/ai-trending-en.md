# AI Open Source Trends 2026-09-10

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-10 04:16 UTC

---

# AI Open Source Trends Report — 2026-09-10

---

## 1. Today's Highlights

The agent infrastructure layer is consolidating rapidly: three new desktop/CLI entrants (Tencent's `teamai-cli`, `PI-Desktop`, and the agent-harness optimizer `ECC`) all debuted or surged today, signaling a shift from "agent frameworks" to **production-grade agent runtimes** with local-first architectures, plugin systems, and cross-editor compatibility. Simultaneously, **domain-specific agent skill libraries** — CAD/CAE/CAM (`text-to-cad`), financial trading (`TradingAgents`), diagram generation (`diagram-design`), and video/PPT automation (`MoneyPrinterTurbo`, `ppt-master`) — are attracting disproportionate stars, showing developers prefer composable, vertical skills over generic agent loops. Vector search and persistent context (`oramasearch/orama`, `claude-mem`) are becoming default prerequisites rather than optional add-ons.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Tencent/teamai-cli](https://github.com/Tencent/teamai-cli) | TypeScript | 3,182 (+556) | 🆕 new | Enterprise-grade CLI to make any team "AI-native"; first appearance with strong day-one traction suggests Tencent is pushing internal tooling into the open. |
| [pascalorg/editor](https://github.com/pascalorg/editor) | TypeScript | 23,033 (+107) | 📈 +620 since 2026-09-08 | 3D architectural editor with local CLI and MCP tools; bridges human-AI collaboration for spatial design workflows. |
| [vastsa/PI-Desktop](https://github.com/vastsa/PI-Desktop) | TypeScript | 1,793 (+417) | 🆕 new | Local-first AI coding agent desktop (Electron + Rust + pi Agent Harness); plugin architecture positions it as an extensible alternative to cloud IDEs. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 255,293 (+1,133) | 📈 +849 since 2026-09-09 | Agent harness optimizer adding skills, instincts, memory, and security across Claude Code, Codex, Opencode, Cursor; massive existing base still compounding. |
| [oramasearch/orama](https://github.com/oramasearch/orama) | TypeScript | 10,546 | 🆕 new | Sub-2kb full-text + vector + hybrid search engine running in browser, server, or edge; RAG pipeline in a single dependency. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 151,491 | 📈 +522 since 2026-09-05 | User-friendly multi-backend AI interface (Ollama, OpenAPI, etc.); steady growth reflects sustained demand for self-hosted chat UIs. |
| [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | Python | 35,175 (+4,650) | 📈 +4,053 since 2026-09-09 | "ADHD-friendly" output filter for coding agents; viral growth shows acute pain point around agent verbosity and focus. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 284,124 (+688) | 📈 +666 since 2026-09-09 | Agentic skills framework and dev methodology; largest repo in set, still growing — indicates broad adoption as a meta-framework. |
| [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | Python | 15,129 (+124) | 🆕 new | Agent skill library for CAD/CAE/CAM; first appearance highlights rising interest in engineering-domain agent tooling. |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | 36,816 (+2,249) | 📈 +1,631 since 2026-09-09 | 38 editorial diagram types for Claude Code, Codex, Pi; self-contained HTML/SVG — zero-dependency visual skill pack for agents. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 104,099 (+367) | 📈 +2,579 since 2026-08-28 | Multi-agent LLM financial trading framework; sustained multi-week momentum shows serious community building in fintech agents. |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | JavaScript | 133,634 | 📈 +1,234 since 2026-09-09 | "Lazy senior dev" agent optimizer; large base still accelerating — reflects obsession with token-efficient, high-leverage agent patterns. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 93,585 | 📈 +542 since 2026-09-03 | Persistent cross-session context for any agent (Claude Code, Codex, Gemini, etc.); compresses & injects relevant history automatically. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | JavaScript | 30,220 (+705) | 📈 +5,747 since 2026-08-29 | Industrial-grade GPT-Image-2 prompt engine with 530+ reverse-engineered cases and 20+ templates; "prompt as code" movement maturing. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 122,034 | 📈 +837 since 2026-09-07 | One-click HD short video generation from topic/keyword via automated AI workflow; massive traction in creator-economy automation. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 53,385 | 📈 +523 since 2026-09-08 | AI turns documents/topics into native PowerPoint (shapes, charts, animations, audio narration, custom templates); enterprise-ready output. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 61,460 | 📈 +532 since 2026-08-25 | YOLO26/11/v8 unified — detection, segmentation, pose, tracking, classification; steady growth reflects ongoing computer-vision production demand. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [oramasearch/orama](https://github.com/oramasearch/orama) | TypeScript | 10,546 | 🆕 new | Complete search engine + RAG pipeline in <2kb (browser/server/edge); hybrid search with zero heavy deps — edge-first architecture. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 93,585 | 📈 +542 since 2026-09-03 | Persistent context layer capturing, compressing, and re-injecting agent session history; works across 7+ agent runtimes. |

---

## 3. Trend Signal Analysis

**Explosive attention is concentrating on the *agent runtime layer*** — not raw model serving, but the harnesses, memory systems, and skill registries that make agents reliable in production. Three first-appearance desktop/CLI tools (`teamai-cli`, `PI-Desktop`, `ECC`) all optimize for **local-first, multi-editor, plugin-extensible** operation, a clear reaction to cloud-only coding agents. Simultaneously, **vertical skill packs** (`text-to-cad`, `diagram-design`, `TradingAgents`, `ppt-master`, `MoneyPrinterTurbo`) are outpacing generic frameworks, revealing a "skills-over-loops" paradigm: developers want drop-in, domain-specific capabilities they can compose, not another abstract agent loop.

**New tech stacks appearing for the first time:** Rust-hosted Electron shells (`PI-Desktop`), sub-2kb edge vector search (`oramasearch/orama`), and MCP-tool integration in 3D editors (`pascalorg/editor`) — all point to **local/edge inference + standardized tool protocols (MCP)** becoming the default deployment target. The `i-have-adhd` viral spike (+4.6k stars/day) also exposes a UX crisis: agents emit too much noise, and "output shaping" is now a product category.

**Connection to industry events:** The GPT-Image-2 prompt engineering repo (`awesome-gpt-image-2`, +5.7k since late August) tracks the recent OpenAI image model release; `TradingAgents` multi-week momentum aligns with quarterly quant-fund hiring cycles; `oramasearch/orama` debut coincides with Vercel/Cloudflare edge-function pushes.

**🆕 vs 📈 distinction:** First appearances (`teamai-cli`, `PI-Desktop`, `oramasearch/orama`, `text-to-cad`) are **new entrants testing product-market fit** — their day-one stars measure launch buzz. Re-appearances (`ECC`, `superpowers`, `TradingAgents`, `ponytail`, `claude-mem`) are **compounders** — they already cleared the adoption threshold and are now scaling via word-of-mouth and integration ecosystems. The compounders collectively hold >800k stars; the entrants <30k. Watch which entrants reappear next week — that signals graduation to compounder status.

---

## 4. Community Hot Spots

- **`oramasearch/orama`** — Edge-native vector + full-text search in <2kb; if it delivers on hybrid RAG without server infra, it becomes the default knowledge layer for local-first agents.  
- **`vastsa/PI-Desktop`** — Rust + Electron + plugin harness; the only repo explicitly building a **local agent OS** rather than a cloud wrapper. Early plugin ecosystem will determine stickiness.  
- **`earthtojake/text-to-cad`** — First high-traction **engineering-domain agent skill library**; CAD/CAE/CAM is a high-value, low-competition vertical. Watch for mechanical/electrical simulation skill additions.  
- **`cathrynlavery/diagram-design`** — Zero-dep visual skill pack for agents; the "no Mermaid slop" positioning resonates. If agents adopt SVG diagrams as a first-class output modality, this becomes critical infrastructure.  
- **`ayghri/i-have-adhd`** — Viral signal that **agent output UX is broken**; any project that standardizes "concise, structured, actionable" agent responses (across editors/terminals) captures a universal pain point.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*