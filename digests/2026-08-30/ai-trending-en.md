# AI Open Source Trends 2026-08-30

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-30 05:01 UTC

---

# AI Open Source Trends Report — 2026-08-30

## 1. Today's Highlights

The open-source AI ecosystem is converging on **agent skill standardization** and **local-first AI infrastructure**. Three major skill libraries—`scientific-agent-skills` (38K★), `agent-skills` (90K★), and `hermes-agent` (238K★)—all gained significant momentum today, signaling a maturing protocol for portable agent capabilities. Simultaneously, `OpenMontage` (54K★) and `MoneyPrinterTurbo` (118K★) demonstrate that **agentic video production** has become a flagship vertical application. New entrants `OpenMAIC` (22K★) and `ODS` (5K★) reveal growing demand for **one-click multi-agent environments** and **self-hosted AI servers** respectively. The `workweave/router` launch (2.8K★, new) highlights cost-optimization pressure: routing prompts to the right model in <50ms for 40–70% savings.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Osmantic/ODS](https://github.com/Osmantic/ODS) | Python | 5,020 (+35) | 🆕 new | Turns any PC/Mac/Linux into a full AI server with LLM inference, chat UI, voice, agents, workflows, RAG, and image generation. First appearance signals rising demand for truly local, all-in-one AI stacks. |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Python | 35,475 (+358) | 📈 +640 since 2026-08-28 | Official Anthropic-managed directory of high-quality Claude Code plugins. Steady growth reflects Claude Code's expanding ecosystem and the need for curated, trusted extensions. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 174,140 (+721) | 📈 +721 since 2026-08-28 | Context API to search, scrape, and interact with the web at scale. Sustained high velocity confirms it as the default web-access layer for agentic workflows. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 150,365 (+556) | 📈 +556 since 2026-08-25 | User-friendly AI interface supporting Ollama, OpenAI API, and more. Consistent growth cements its position as the leading self-hosted ChatGPT alternative. |
| [workweave/router](https://github.com/workweave/router) | Go | 2,835 (+284) | 🆕 new | Model router for agentic systems: routes every prompt to the right model in <50ms, cutting costs 40–70% with an endpoint change. First appearance highlights acute focus on inference economics. |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Go | 101,780 (+527) | 📈 +527 since 2026-08-27 | Claude Code skill that cuts 65% of tokens by "talking like a caveman." Strong momentum shows developers aggressively optimizing context-window costs. |
| [JetBrains/go-modern-guidelines](https://github.com/JetBrains/go-modern-guidelines) | Go | 2,907 (+303) | 📈 +497 since 2026-08-28 | Guidelines to help AI coding agents write modern Go. Reappearance indicates JetBrains' investment in steering agent-generated code quality. |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | Python | 28,768 (+150) | 🆕 new | Fully automatic censorship removal for language models. First appearance surfaces the persistent tension between model alignment and developer control. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 238,204 (+666) | 📈 +666 since 2026-08-28 | "The agent that grows with you." Massive star count and daily growth mark it as the current mindshare leader for persistent, evolving personal agents. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 90,781 (+196) | 🆕 new | Production-grade engineering skills for AI coding agents. First appearance from a Google Chrome DevRel lead signals industry backing for skill standardization. |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Python | 38,071 (+1,587) | 📈 +1,122 since 2026-08-29 | Turns any AI agent into an AI Scientist with 165 validated skills and 100+ scientific databases. Today's +1.6K stars show explosive adoption in research communities. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 244,332 (+759) | 📈 +759 since 2026-08-27 | Agent harness performance optimization: skills, instincts, memory, security, research-first dev. Highest-starred repo in the set; steady growth across Claude Code, Codex, Cursor, Opencode. |
| [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | TypeScript | 22,502 (+907) | 🆕 new | Open Multi-Agent Interactive Classroom: immersive multi-agent learning in one click. First appearance reveals education as a new frontier for multi-agent UX. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 111,682 (+520) | 📈 +520 since 2026-08-27 | Makes websites accessible for AI agents; automates tasks online. Sustained growth confirms browser automation as a core agent primitive. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 118,564 (+782) | 📈 +782 since 2026-08-28 | One-click HD short video generation from topic/keyword using LLM + automated workflow. Consistent high velocity makes it the reference implementation for agentic video. |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | Python | 54,197 (+806) | 📈 +716 since 2026-08-29 | World's first open-source agentic video production system: 12 pipelines, 100+ tools, 700+ skill files. Turns AI coding assistant into a full video studio. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 50,239 (+556) | 📈 +556 since 2026-08-27 | AI turns documents/topics into native PowerPoint decks with shapes, animations, charts, audio narration, and custom templates. Strong growth shows demand for polished document automation. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 64,280 (+500) | 📈 +500 since 2026-08-25 | LLM-powered multi-market stock analysis: multi-source data, real-time news, decision dashboard, automated notifications, zero-cost scheduled runs. Finance vertical gaining traction. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 69,303 (+589) | 📈 +589 since 2026-08-27 | Open-source AI job search: scans portals, evaluates listings A–H, tailors CV, tracks applications—runs locally in AI coding CLI. Steady growth reflects practical agentic productivity tools. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 112,359 (+586) | 📈 +586 since 2026-08-28 | Turns any codebase (docs, SQL, configs, PDFs) into a queryable knowledge graph. Local deterministic AST parsing, every edge explained, no vector store. Sustained growth validates graph-based RAG over pure vector approaches. |

---

## 3. Trend Signal Analysis

**Agent skill standardization is the dominant theme.** Three skill libraries—`hermes-agent` (238K★), `ECC` (244K★), `agent-skills` (90K★)—plus the science-focused `scientific-agent-skills` (38K★, +1.6K today) all surged simultaneously. This is not coincidence: the ecosystem is converging on portable, composable skill definitions that work across Cursor, Claude Code, Codex, Opencode, and Gemini CLI. The `OpenMAIC` launch (22K★, new) extends this to **multi-agent orchestration as a one-click experience**, targeting education first but signaling a broader UX shift.

**Local-first, all-in-one AI infrastructure** is the second wave. `ODS` (new, 5K★) packages inference, voice, agents, RAG, and image gen into a single self-hosted server. `OpenMontage` (54K★, +806) and `MoneyPrinterTurbo` (118K★, +782) prove that **agentic video production** has graduated from demo to production vertical—12 pipelines, 700+ skills, and one-click HD output. `ppt-master` (50K★) and `career-ops` (69K★) show the same pattern in documents and job search.

**Inference economics are under acute pressure.** `workweave/router` (new) promises 40–70% cost cuts via <50ms model routing; `caveman` (101K★, +527) cuts 65% of tokens via a prompt-compression skill. Both appeared or surged today, reflecting that as agents chain dozens of calls, token and model-selection costs have become a primary bottleneck.

**First appearances vs. re-appearances:** The six 🆕 entries (`ODS`, `agent-skills`, `OpenMAIC`, `heretic`, `workweave/router`, `p-e-w/heretic`) are **new entrants** defining emerging categories—local AI server, skill standard, multi-agent classroom, censorship removal, model router. The 📈 re-appearances (`hermes-agent`, `ECC`, `scientific-agent-skills`, `MoneyPrinterTurbo`, `OpenMontage`, `firecrawl`, `graphify`, `open-webui`, `caveman`, `browser-use`, `ppt-master`, `career-ops`, `daily_stock_analysis`, `claude-plugins-official`) are **compounders**—projects that already found product-market fit and are now deepening their moats. The absence of 71 previously covered repos means they are stable, not declining.

---

## 4. Community Hot Spots

- **Agent skill protocol wars** — `hermes-agent`, `ECC`, `agent-skills`, `scientific-agent-skills` are all vying to become the de facto standard. Watch for interop layers or a unifying spec (Agent Skills Standard mentioned in `scientific-agent-skills`).
- **Self-hosted AI server stacks** — `ODS` (new) and `open-webui` (150K★) compete on ease of deploying a full local AI stack. Expect plugin ecosystems to differentiate them.
- **Agentic video production** — `OpenMontage` (700+ skills, 12 pipelines) and `MoneyPrinterTurbo` (one-click HD shorts) are the two reference implementations. Contributors should watch for skill-sharing between them.
- **Model routing & token optimization** — `workweave/router` (model selection) + `caveman` (prompt compression) address the same cost problem from different angles. Integration between routing and compression is a natural next step.
- **Graph-based RAG for code** — `Graphify-Labs/graphify` (112K★, deterministic AST parsing, no vector store) is gaining traction as the precision alternative to embedding-only retrieval. Expect IDE integrations to accelerate.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*