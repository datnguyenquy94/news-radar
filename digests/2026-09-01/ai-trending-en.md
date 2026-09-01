# AI Open Source Trends 2026-09-01

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-01 04:45 UTC

---

# AI Open Source Trends Report — 2026-09-01

---

## 1. Today's Highlights

The open-source AI ecosystem is converging around **agent-centric infrastructure** and **local-first deployment**. Three distinct signals dominate today: (1) a surge in **agent skill libraries and harnesses** — K-Dense-AI’s 165 validated scientific skills, ECC’s cross-client harness, and archify’s diagramming skill — indicating a maturing “agent skill” interoperability layer; (2) **local AI server stacks** like ODS and minimind gaining traction, reflecting demand for data-sovereign inference and training; (3) **RAG engines evolving into agentic knowledge layers** (ragflow, Graphify, Quivr), blurring the line between retrieval and autonomous reasoning. First-time appearances (🆕) cluster in agent tooling and local deployment guides, while re-appearances (📈) show compounding momentum in established frameworks (Dify, Firecrawl, LangChain-adjacent tooling).

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Osmantic/ODS](https://github.com/Osmantic/ODS) | Python | 5,604 (+77) | 📈 +584 since 2026-08-30 | Turns any PC/Mac/Linux into a full-stack AI server with LLM inference, chat UI, voice, agents, RAG, and image generation. The +584 stars in two days signals strong appetite for zero-config local AI stacks. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 245,351 (+512) | 📈 +1,019 since 2026-08-30 | Agent harness optimizing skills, instincts, memory, and security across Claude Code, Codex, Cursor, Opencode. Quarter-million stars and steady growth confirm it as the de facto cross-client agent runtime. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 174,925 (+785) | 📈 +785 since 2026-08-30 | Context API for web search, scrape, and interaction at scale. The new PDF inspector (also trending today) extends its data-ingestion pipeline, reinforcing its role as the “eyes” of agent workflows. |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 154,046 (+652) | 📈 +652 since 2026-08-25 | Collaborative workspace for agentic workflows and RAG pipelines with rich model/tool support. Self-hostable, production-ready, and steadily compounding — the enterprise-grade choice for LLM app builders. |
| [streamlit/streamlit](https://github.com/streamlit/streamlit) | Python | 45,654 | 🆕 new | The standard for turning data scripts into shareable web apps. First appearance in AI-topic search underscores its renewed centrality as the UI layer for local LLMs and agent demos. |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 198,122 (+561) | 📈 +561 since 2026-08-25 | Foundational ML framework still accumulating stars decades in, reflecting continued production adoption alongside newer PyTorch-centric stacks. |
| [dg/ai-access](https://github.com/dg/ai-access) | PHP | 60 | 🆕 new | Unified PHP interface for OpenAI, Claude, Gemini, DeepSeek, Grok. Niche but notable: first PHP-first AI SDK to appear in trending, signaling PHP ecosystem’s belated entry into LLM integration. |
| [LancerLab/croqtile](https://github.com/LancerLab/croqtile) | C++ | 35 | 🆕 new | AI-native kernel programming DSL for productivity. Extremely early (35★) but conceptually novel — applying LLM-assisted codegen to kernel/DSL space. |

---

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Python | 40,910 (+1,980) | 📈 +2,839 since 2026-08-30 | 165 validated skills + 100+ scientific databases turning any agent into an AI scientist. Used by 190k+ scientists; compatible with Cursor, Claude Code, Codex, and open Agent Skills standard. Explosive 2-day growth marks it as the canonical skill library for research agents. |
| [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | TypeScript | 27,717 (+2,824) | 📈 +5,215 since 2026-08-30 | Open Multi-Agent Interactive Classroom — immersive multi-agent learning in one click. +5.2k stars since last report (3 days ago) shows viral adoption in AI education and multi-agent simulation. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 239,102 (+898) | 📈 +898 since 2026-08-30 | “The agent that grows with you” — persistent, self-improving agent from Nous Research. Near 240k stars and steady growth reflect cult following and credibility from Hermes model lineage. |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | TypeScript | 32,470 | 🆕 new | 24/7 cowork app for 20+ CLI agents (OpenClaw, Hermes, Claude Code, Codex, OpenCode). First appearance with 32k★ indicates pent-up demand for a unified multi-agent desktop client. |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | Python | 75,774 (+600) | 📈 +600 since 2026-08-25 | Nano “Claude Code-like” agent harness built from scratch in Bash. Pedagogical and practical — developers study it to understand agent loop internals. |
| [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | PowerShell | 33,332 (+1,401) | 🆕 new | AI-powered skill router for reverse engineering, pen-testing, security research. Auto-routes to specialized toolchains, self-evolving knowledge base. Supports Claude Code, Kiro, Cursor, Cline. 33k★ on debut shows security-agent niche exploding. |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | JavaScript | 39,508 (+3,991) | 📈 +7,904 since 2026-08-30 | Agent skill for beautiful, verifiable architecture/sequence/data-flow diagrams as self-contained HTML. +7.9k in two days — highest velocity on the list — proves diagramming is a killer agent skill. |
| [LiberCoders/FeatureBench](https://github.com/LiberCoders/FeatureBench) | Python | 90 | 🆕 new | ICLR 2026 benchmark for agentic coding on complex feature development. Tiny stars but high signal: academic rigor entering agent evaluation. |

---

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 119,110 (+546) | 📈 +546 since 2026-08-30 | One-click HD short video generation from topic/keyword via automated AI workflow. 119k★ and steady growth = proven product-market fit in AI content creation. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 50,816 (+577) | 📈 +577 since 2026-08-30 | AI turns documents/topics into native PowerPoint with shapes, transitions, charts, tables, audio narration, and custom templates. Solves a high-friction enterprise workflow natively. |
| [paperless-ngx/paperless-ngx](https://github.com/paperless-ngx/paperless-ngx) | Python | 44,763 | 🆕 new | Community supercharged document management: scan, index, archive with ML-powered OCR/classification. First AI-topic appearance highlights RAG-ready document pipelines as infrastructure. |
| [pollen-robotics/microduck_rl](https://github.com/pollen-robotics/microduck_rl) | Python | 1,223 (+385) | 🆕 new | RL training environments for Microduck robot. Niche but signals sim-to-real robotics + LLMs convergence; 385★ today on debut is strong for robotics. |

---

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 56,345 (+495) | 📈 +1,371 since 2026-08-25 | Train a 64M-parameter LLM from scratch in 2 hours. Democratizes LLM training education; appears in both trending and topic search with consistent momentum. |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | Python | 29,741 (+537) | 📈 +973 since 2026-08-30 | Fully automatic censorship removal for language models. Controversial but high-signal: reflects tension between open models and alignment guardrails; +973 in two days shows intense interest. |
| [LAMDA-CL/Prism](https://github.com/LAMDA-CL/Prism) | Python | 40 | 🆕 new | Plug-in reproducible infrastructure for scalable multimodal continual instruction tuning. Academic-grade (ICLR-adjacent); first appearance marks continual learning tooling entering open source. |
| [anseryuer/Local_LLM_Deployment_Guide_Chinese](https://github.com/anseryuer/Local_LLM_Deployment_Guide_Chinese) | — | 50 | 🆕 new | Chinese tutorial for local LLM deployment. Tiny stars but first appearance in topic search reflects regional developer demand for sovereign AI guides. |

---

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 89,776 (+607) | 📈 +607 since 2026-08-25 | Leading open-source RAG engine fusing cutting-edge RAG with agent capabilities. Go-based for performance; 90k★ and steady growth make it the production RAG benchmark. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 113,072 (+713) | 📈 +713 since 2026-08-30 | Turns codebases (docs, SQL, configs, PDFs) into queryable knowledge graphs via deterministic AST parsing — no vector store. /graphify skill for Claude Code, Cursor, Codex, Gemini CLI. 113k★ + deterministic approach = unique technical moat. |
| [The-Vibe-Company/Quivr](https://github.com/The-Vibe-Company/Quivr) | Python | 39,438 | 🆕 new | Opinionated RAG for integrating GenAI: any LLM, any vector store, any files. First appearance with 39k★ suggests strong community pull for “RAG as a library” over “RAG as a service.” |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | 135,444 (+806) | 📈 +806 since 2026-08-27 | Curated 100+ AI agents, agent skills, and RAG apps — free and open source. The definitive discovery hub; steady growth confirms its role as the ecosystem’s front page. |
| [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | Rust | 17,464 (+228) | 🆕 new | Fast Rust library for PDF inspection, classification, text extraction; detects scanned vs text-based PDFs for smart routing. First appearance extends Firecrawl’s data layer into document intelligence. |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | Python | 43,960 (+1,002) | 📈 +1,002 since 2026-08-28 | Open-source book “Deep Understanding of AI Agents” with full text, PDF, and per-chapter code. +1k in 3 days shows developers hungry for structured agent engineering knowledge. |

---

## 3. Trend Signal Analysis

**Agent skills are the new package manager.** The explosive growth of `archify` (+7.9k/2d), `scientific-agent-skills` (+2.8k/2d), and `reverse-skill` (33k★ debut) reveals a Cambrian explosion in *composable, interoperable agent capabilities*. The open Agent Skills standard (referenced by K-Dense-AI) is gaining traction as the “npm for agent skills,” with Cursor, Claude Code, Codex, and Cline all adopting it. This is the clearest signal that **agent-to-agent and human-to-agent collaboration is standardizing around skill protocols**, not monolithic frameworks.

**Local-first AI infrastructure is graduating from hobbyist to production.** `ODS` (+584/2d), `minimind` (+1.3k/week), and the Chinese deployment guide (🆕) form a cluster: developers want *full-stack, air-gapped AI* on consumer hardware. `minimind`’s “64M LLM in 2 hours” and `ODS`’s all-in-one server indicate the toolchain for sovereign AI — training, inference, RAG, voice, agents — is becoming accessible without cloud dependencies. This aligns with recent small-model releases (Gemma 2 2B, Phi-3.5, Llama 3.2 1B/3B) that finally make local inference viable.

**RAG is becoming agentic.** `ragflow`, `Graphify`, and `Quivr` all fuse retrieval with agent loops. `Graphify`’s deterministic AST-based knowledge graphs (no vector store) and `ragflow`’s agent-capable RAG engine show the category splitting: **high-precision code/graph RAG** vs **general-purpose agentic RAG**. The former targets developer tooling (hence Graphify’s 113k★); the latter targets enterprise knowledge bases.

**First appearances (🆕) vs re-appearances (📈) tell different stories.** The 🆕 cohort — `AionUi`, `reverse-skill`, `archify` (though it has 📈 too), `pdf-inspector`, `FeatureBench`, `Prism`, `croqtile`, `ai-access`, deployment guides — are **new entrants defining emerging niches**: multi-agent desktop clients, security agents, document intelligence, agent benchmarks, continual learning, kernel DSLs, PHP SDKs. The 📈 cohort — `ECC`, `Dify`, `Firecrawl`, `hermes-agent`, `ragflow`, `Graphify`, `minimind`, `MoneyPrinterTurbo` — are **compounding leaders** that have crossed the chasm and are now deepening moats. The absence of 55 previously covered repos means they’re in steady state, not decline.

**Connection to industry events:** The agent skill explosion coincides with Anthropic’s Claude Code general availability (late Aug 2026) and OpenAI’s Codex CLI updates — both platforms now explicitly support skill plugins. `minimind`’s momentum rides the wave of sub-1B model releases optimized for edge. `heretic` reflects ongoing discourse post-Llama 3.2/3.3 releases about open-weight model steering.

---

## 4. Community Hot Spots

- **🔥 Agent Skill Ecosystem (K-Dense-AI, archify, reverse-skill, ECC)** — Highest velocity category; skills are becoming the atomic unit of agent functionality. Build skills, not monolithic agents.
- **🔥 Local AI Stack Convergence (ODS + minimind + local deployment guides)** — Toolchain for sovereign AI is maturing fast. Expect consolidation into “distro-like” packages (ODS is already one).
- **🔥 Deterministic Code RAG (Graphify-Labs/graphify)** — AST-based knowledge graphs beat vector search for code. Adopt for developer-facing agents; the /graphify skill is plug-and-play for major CLI agents.
- **🔥 Agent Evaluation & Benchmarks (FeatureBench, learn-claude-code)** — As agents go production, rigorous eval (ICLR 2026 FeatureBench) and transparent harnesses (learn-claude-code) are becoming prerequisites for credibility.
- **🔥 Multimodal Continual Learning (Prism, LAMDA-CL)** — Early but strategic: instruction tuning that doesn’t catastrophically forget is the next frontier for adaptive agents. Watch for open-weight continual learning checkpoints.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*