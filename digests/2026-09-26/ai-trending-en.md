# AI Open Source Trends 2026-09-26

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-26 04:38 UTC

---

# AI Open Source Trends Report — 2026-09-26

## 1. Today's Highlights

The open-source AI ecosystem is converging on **agent infrastructure** as the dominant theme: Google launched `ax`, a production-grade agentic orchestration runtime, while Anthropic doubled down on its skills/plugin ecosystem for Claude Code. Memory and context persistence for agents surged, with `hindsight` (agent memory that learns) and `claude-mem` (cross-session context) both posting strong momentum. Three brand-new entrants — `paperclip` (agent management UI), `oh-my-pi` (IDE-native coding agent), and `starnet` (local-first desktop agent harness) — signal a shift from experimental frameworks to polished, deployable agent runtimes. Meanwhile, vertical AI applications like AI-powered video generation (`MoneyPrinterTurbo`), presentation creation (`ppt-master`), and quant trading (`tick-stock-panel`) continue to attract outsized community attention.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/ax](https://github.com/google/ax) | Go | 11,590 (+1,379) | 📈 +948 since 2026-09-25 | Google's open-source agentic orchestration runtime designed for production workloads. Its rapid ascent (+1,379 stars today) signals strong enterprise interest in a Google-backed, type-safe agent framework. |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Python | 36,969 (+83) | 📈 +1,494 since 2026-08-30 | Official, Anthropic-curated directory of high-quality Claude Code plugins. Steady growth reflects the expanding Claude Code ecosystem and developer demand for vetted extensions. |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | JavaScript | 71,261 (+306) | 📈 +825 since 2026-09-24 | A design language and component system tailored for AI harnesses and agent UIs. Addresses the neglected UX layer of agent tooling, gaining traction as agents move toward production interfaces. |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 84,273 | 📈 +3,353 since 2026-09-02 | Open-source web crawler that converts any site into clean, LLM-ready Markdown. Leading the RAG data-ingestion category with 3.3k stars in three weeks, plus a managed cloud offering. |
| [ScrapeGraphAI/Scrapegraph-ai](https://github.com/ScrapeGraphAI/Scrapegraph-ai) | Python | 31,310 | 📈 +599 since 2026-09-08 | AI-powered scraper that uses LLMs to extract structured data from websites. Complements crawl4ai with a more flexible, prompt-driven extraction approach for RAG pipelines. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 267,571 | 📈 +558 since 2026-09-25 | Agent harness optimization system bundling skills, instincts, memory, and security for Claude Code, Codex, Cursor, and more. Massive star count reflects its position as a meta-layer for agent performance. |

### 🤖 AI Agents / Workflows
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | TypeScript | 85,242 (+2,109) | 🆕 new | Open-source app for managing AI agents at work — a control plane for agent fleets. Explosive debut (+2,109 stars today) reveals pent-up demand for operational tooling around deployed agents. |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | Python | 30,021 (+1,653) | 📈 +1,998 since 2026-09-25 | Agent memory system that learns from interactions and improves over time. Near-2k stars in one day underscores the critical bottleneck of persistent, adaptive memory in long-running agents. |
| [anthropics/skills](https://github.com/anthropics/skills) | Python | 178,381 (+189) | 📈 +3,766 since 2026-09-06 | Anthropic's official repository of reusable agent skills for Claude Code. The largest project in this category, serving as the standard library for the Claude agent ecosystem. |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 18,727 (+1,050) | 📈 +818 since 2026-09-25 | Full office suite (spreadsheets, docs, slides, canvas) built as a runtime for AI agents. Unique "office-as-an-API" approach enables agents to manipulate business documents natively. |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | TypeScript | 33,324 | 🆕 new | Coding agent with the IDE wired in, built by Stencil Labs. First appearance with 33k stars suggests a strong pre-launch community around IDE-native agent experiences. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 94,705 | 📈 +560 since 2026-09-18 | Persistent cross-session context for any agent (Claude Code, Codex, Gemini, Copilot, etc.). Captures, compresses, and re-injects relevant history — solving the "goldfish memory" problem. |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | Python | 80,846 | 📈 +507 since 2026-09-22 | Comprehensive tutorial "Building Intelligent Agents from Zero" — principle and practice. Sustained growth reflects the education wave as developers rush to learn agent engineering. |

### 📦 AI Applications
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 125,925 | 📈 +716 since 2026-09-23 | One-click HD short video generation from a topic/keyword using LLMs and automation workflows. Leading the AI content-creation vertical with 125k stars and steady compounding. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 56,408 | 📈 +590 since 2026-09-22 | Turns documents or topics into native PowerPoint decks with shapes, charts, animations, and speaker-note audio. High-quality output and template support make it a standout productivity tool. |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | 139,781 | 📈 +584 since 2026-09-21 | Curated collection of 100+ production-ready AI agents, skills, and RAG apps. Acts as the "app store" reference for the open-source agent ecosystem. |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 72,828 | 📈 +552 since 2026-09-21 | Local-first AI job search: scans portals, scores listings, tailors CVs, and tracks applications — all inside your coding CLI. Novel application of agents to career automation. |
| [shy3130/tick-stock-panel](https://github.com/shy3130/tick-stock-panel) | Python | 5,170 (+44) | 🆕 new | Self-hosted A-share quant workbench: stock screening, monitoring, backtesting driven by LLM-customized strategies. First appearance highlights the finance vertical's appetite for agent-driven analytics. |

### 🧠 LLMs / Training
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Python | 57,660 (+1,177) | 📈 +934 since 2026-09-25 | Hands-on curriculum: learn, build, and ship AI systems from first principles. Strong daily growth (+1,177 today) confirms the massive "learn by building" demand among engineers entering the field. |

### 🔍 RAG / Knowledge
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 121,473 | 📈 +504 since 2026-09-24 | Converts any codebase (docs, SQL, configs, PDFs) into a queryable knowledge graph via deterministic AST parsing — no vector store needed. Unique code-first approach to RAG with 121k stars. |

---

## 3. Trend Signal Analysis

**Agent infrastructure has graduated from experiment to product.** The simultaneous appearance of Google's `ax` (orchestration runtime), Anthropic's dual push on `claude-plugins-official` and `skills`, and three high-momentum newcomers (`paperclip`, `oh-my-pi`, `starnet`) marks a clear inflection: the community is building the *operating layer* for agents — memory (`hindsight`, `claude-mem`), skill packaging (`skills`, `ECC`), tooling (`crawl4ai`, `Scrapegraph-ai`), and UI (`impeccable`, `univer`). This is no longer about prompt engineering; it's about **agent DevOps**.

**Memory and context are the new scaling laws.** `hindsight` (+1,998 stars in one day) and `claude-mem` (+560 in a week) reveal that persistent, learnable memory is now recognized as the primary blocker for production agents. Projects solving "goldfish memory" with compression, retrieval, and cross-session injection are attracting disproportionate attention relative to their age.

**Vertical applications are outpacing horizontal platforms.** `MoneyPrinterTurbo` (125k), `ppt-master` (56k), and the brand-new `tick-stock-panel` demonstrate that domain-specific agent workflows — video, slides, quant — generate faster adoption than generic frameworks. Developers want *working solutions* they can fork, not abstract primitives.

**First appearances vs. compounding re-appearances tell different stories.** The 🆕 entries (`paperclip`, `oh-my-pi`, `starnet`, `tick-stock-panel`) are **new entrants capturing latent demand** — they launched into a ready market. The 📈 re-appearances (`hindsight`, `ax`, `crawl4ai`, `Graphify`) are **compounders deepening moats** — they've earned trust and are now accelerating. The former signal *market pull*; the latter signal *product-market fit*.

---

## 4. Community Hot Spots

- **🎯 Agent memory & context layer** — `hindsight` and `claude-mem` are the clear leaders. Any agent platform that doesn't solve cross-session, learnable memory will lose developers to those that do. Watch for consolidation around a standard memory protocol.

- **🎯 IDE-native coding agents** — `oh-my-pi` (33k stars on debut) and the broader "agent in the IDE" movement (`career-ops` runs in Claude Code/Codex) show the winning UX is **inside the editor**, not a separate chat window. Expect more plugins/extensions than standalone apps.

- **🎯 Office suite as agent runtime** — `univer` (spreadsheets/docs/slides as API) and `ppt-master` (native PPTX generation) reveal a massive, underserved niche: **agents that manipulate business documents natively**. This is the "Excel for agents" moment.

- **🎯 Local-first, BYOK agent harnesses** — `paperclip`, `starnet`, `career-ops`, `ECC` all emphasize local execution, bring-your-own-key, and CLI integration. Privacy, cost control, and developer workflow integration are non-negotiable for adoption.

- **🎯 Codebase knowledge graphs** — `Graphify` (121k stars, deterministic AST → graph) is redefining RAG for code. Vector search is being displaced by structured, explainable code graphs for agentic coding tasks. This direction will likely become the default for code-aware agents.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*