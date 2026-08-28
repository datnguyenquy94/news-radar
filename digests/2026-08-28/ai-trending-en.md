# AI Open Source Trends 2026-08-28

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-28 11:03 UTC

---

# AI Open Source Trends Report — 2026-08-28

---

## 1. Today's Highlights

The agent ecosystem dominates today’s momentum: seven of the top-10 gainers are agent-skills libraries, multi-agent frameworks, or agent memory tools, signaling a shift from model-centric to **workflow-centric** development. Video-generation tooling appears in force — OpenMontage (🆕 52.9k ⭐) and MoneyPrinterTurbo (+778 ⭐) — reflecting productization of Sora-class models. Three first-time entries (OpenMontage, ComposioHQ/awesome-claude-skills, JetBrains/go-modern-guidelines) debut above 10k stars, indicating strong latent demand for curated agent primitives and AI-native coding guidelines. RAG infrastructure continues to compound: Graphify (111k ⭐) and claude-mem (92k ⭐) both add 600+ stars in 24 h, proving persistent-context and code-graph retrieval are now table stakes for serious agent deployments.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [JetBrains/go-modern-guidelines](https://github.com/JetBrains/go-modern-guidelines) | Go | 2,410 (+300) | 🆕 new | Official guidelines for AI coding agents to write idiomatic modern Go; JetBrains endorsement makes this a de-facto standard for agent-generated Go code. |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Python | 34,835 (+292) | 📈 +730 since 2026-08-26 | Anthropic-managed registry of high-quality Claude Code plugins; central discovery layer for the fast-growing Claude Code ecosystem. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 173,419 | 📈 +505 since 2026-08-27 | Scalable context API for web search, scraping, and interaction; the go-to data ingestion layer for LLM apps needing live internet access. |

### 🤖 AI Agents / Workflows
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | JavaScript | 25,242 (+4,239) | 📈 +5,174 since 2026-08-27 | Agent skill that emits beautiful, verifiable architecture/sequence/data-flow diagrams as self-contained HTML; explosive growth shows demand for visual reasoning in agent loops. |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Python | 35,637 (+498) | 📈 +792 since 2026-08-27 | 163 validated skills + 100+ scientific databases turning any agent into an AI scientist; adopted by 175k+ researchers across Cursor, Claude Code, Codex. |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | JavaScript | 114,734 (+1,613) | 📈 +1,803 since 2026-08-27 | “Lazy senior dev” meta-skill that minimizes code written; 114k stars proves developer appetite for agent-driven code reduction vs. generation. |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | Python | 73,770 (+130) | 🆕 new | Curated directory of Claude Skills, resources, and tools; instant 73k stars reflects pent-up need for discoverability in the fragmented skills marketplace. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 101,520 (+229) | 📈 +1,232 since 2026-08-26 | Multi-agent LLM framework for financial trading; 100k+ stars signals serious experimentation with agent swarms in high-stakes domains. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 76,219 | 📈 +923 since 2026-08-26 | Unified CLI giving agents “eyes” across Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — zero API fees, maximal reach. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 237,538 | 📈 +527 since 2026-08-27 | “The agent that grows with you” — persistent, personalized agent framework from Nous Research; largest repo in today’s set, steady compounding. |

### 📦 AI Applications
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | JavaScript | 23,932 (+2,096) | 📈 +2,045 since 2026-08-27 | Industrial-grade prompt engine for GPT-Image-2: 530+ reverse-engineered cases, 20+ templates, extracted “Skills”; 2k daily stars shows prompt-engineering maturation. |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | Python | 52,861 (+1,292) | 🆕 new | World’s first open-source agentic video production studio: 12 pipelines, 100+ tools, 700+ skill files; turns any coding assistant into a full video pipeline. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 117,782 | 📈 +778 since 2026-08-27 | One-click HD short-video generation from topic/keyword via automated AI workflow; 117k stars confirms massive creator demand for text-to-video automation. |

### 🧠 LLMs / Training
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [AIDASLab/Awesome-Diffusion-LLM](https://github.com/AIDASLab/Awesome-Diffusion-LLM) |  | 98 | 🆕 new | Comprehensive paper list on Large-Language-Diffusion-Models; first appearance tracks emerging hybrid discrete-continuous architecture research. |

### 🔍 RAG / Knowledge
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 111,773 | 📈 +622 since 2026-08-27 | Deterministic AST-based codebase → knowledge graph; local, explainable, no vector store. 111k stars makes it the leading code-graph RAG primitive. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 92,451 (+143) | 📈 +724 since 2026-08-25 | Cross-session persistent memory for any agent (Claude Code, Codex, Gemini, Copilot…); compresses & injects relevant context automatically. |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Python | 14,257 (+634) | 📈 +702 since 2026-08-27 | Self-organizing AI second brain for Obsidian + Claude Code; builds a connected Markdown knowledge graph from arbitrary sources — open Notion alternative. |

---

## 3. Trend Signal Analysis

**Agent-skills marketplaces are the new package managers.** Three of the five largest gainers (archify, ponytail, scientific-agent-skills) are *skill libraries*, not frameworks — developers prefer composable, auditable primitives over monolithic agent runtimes. The 🆕 debut of ComposioHQ/awesome-claude-skills at 73k stars confirms a discovery vacuum that curated registries now fill.

**Video generation has crossed the “toy → tool” threshold.** OpenMontage (🆕 52.9k) and MoneyPrinterTurbo (+778) expose full production pipelines — not single-model demos — integrating scripting, asset fetching, editing, and rendering. This mirrors the Stable Diffusion → ControlNet → ComfyUI maturation arc, compressed into months.

**Persistent context is infrastructure, not feature.** Both claude-mem (+724) and Graphify (+622) compound steadily without hype spikes; they solve the “goldfish memory” problem for any agent stack. JetBrains’ go-modern-guidelines (🆕) extends this pattern to *coding conventions*: agents need shared style guides to produce merge-ready diffs.

**First appearances vs. re-appearances tell different stories.** 🆕 entries (OpenMontage, ComposioHQ, JetBrains, Awesome-Diffusion-LLM) reveal *new capability frontiers* — video studios, skills discovery, AI-native language guidelines, diffusion-LLM hybrids. 📈 re-appearances (archify, ponytail, scientific-agent-skills, TradingAgents, Graphify, claude-mem, hermes-agent) show *compounding adoption* of already-proven primitives. The absence of model-weight repos (llama.cpp, vLLM, etc.) from today’s delta doesn’t mean decline — it means they’ve graduated to baseline infrastructure.

---

## 4. Community Hot Spots

- **OpenMontage** — First open-source *agentic* video studio; 700+ skills + 12 pipelines make it a reference architecture for multimodal agent workflows. Watch for plugin ecosystem emergence.
- **archify / ponytail** — Dual explosion (4.2k & 1.6k daily stars) proves visual reasoning and “code minimization” are the highest-leverage agent skills right now. Integrate them into any coding agent loop.
- **Graphify + claude-mem** — Together they cover *code-graph RAG* and *cross-session episodic memory*; adopting both gives agents long-term, explainable context — the missing piece for autonomous refactoring.
- **scientific-agent-skills** — 175k scientist-users validate the “skills-as-apis” model for domain-specific agents. Blueprint for legal, medical, engineering verticals.
- **Awesome-Diffusion-LLM** — Tiny (98 ⭐) but strategic: tracks the discrete-diffusion + LLM hybrid architecture that may replace autoregressive decoding. Early signal for next-gen model researchers.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*