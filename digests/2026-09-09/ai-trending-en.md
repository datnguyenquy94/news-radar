# AI Open Source Trends 2026-09-09

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-09 04:19 UTC

---

# AI Open Source Trends Report — 2026-09-09

## 1. Today's Highlights

The AI agent ecosystem is experiencing a **skills/framework explosion** — 9 of today's 14 trending repos are agent skill packs, harnesses, or methodology frameworks (ECC, superpowers, openai/skills, marketingskills, andrej-karpathy-skills, etc.), signaling that developers are converging on *composable skill layers* as the primary abstraction for agent control. Simultaneously, **browser-native agents** (browser-use, camofox-browser, hyperframes) are gaining massive traction, with HeyGen's hyperframes adding video rendering to the "HTML-in, video-out" agent stack. On the model side, **minimind** demonstrates that from-scratch LLM training (64M params in 2 hours) is becoming accessible to individual developers. RAG infrastructure continues maturing: Graphify, headroom, and ragflow all show steady growth, with headroom's token-compression proxy (20–95% reduction) addressing a acute pain point for agent context windows.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | Python | 181,825 (+2,047) | 📈 +1,250 since 2026-09-08 | Universal document-to-Markdown converter (PDF, Office, HTML, audio) that has become the de-facto ingestion layer for RAG pipelines and agent knowledge bases; 2k+ stars today confirms its infrastructure status. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 178,080 | 📈 +754 since 2026-09-07 | Scalable web search/scrape/interact API purpose-built for LLM context; steady growth reflects demand for reliable, agent-grade web grounding without manual browser automation. |
| [jo-inc/camofox-browser](https://github.com/jo-inc/camofox-browser) | JavaScript | 10,614 (+871) | 📈 +738 since 2026-09-08 | Drop-in Puppeteer/Playwright replacement that bypasses Cloudflare and bot detection; 871 stars today shows acute need for stealth browsing in agent workflows. |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | TypeScript | 21,467 (+651) | 📈 +501 since 2026-09-08 | Context-window optimizer that sandboxes tool output (98% reduction), persists session memory, and routes across 17 platforms via MCP + hooks; addresses the #1 scaling bottleneck for coding agents. |
| [openai/plugins](https://github.com/openai/plugins) | JavaScript | 5,883 (+105) | 🆕 new | Official OpenAI plugin specification and registry; first appearance signals OpenAI formalizing the tool-calling ecosystem that agents depend on. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 254,444 (+1,427) | 📈 +1,415 since 2026-09-08 | Comprehensive agent harness: skills, instincts, memory, security, research-first dev; works across Claude Code, Codex, Opencode, Cursor. 1.4k stars/day = strongest momentum signal in the agent framework tier. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 283,458 (+452) | 📈 +2,040 since 2026-09-04 | Agentic skills framework + software development methodology; 283k stars makes it the most-starred agent project on GitHub, and it's still compounding at 2k/week. |
| [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) |  | 211,560 (+333) | 📈 +4,324 since 2026-08-26 | Single `CLAUDE.md` distilled from Karpathy's LLM coding observations; 4.3k growth in two weeks shows practitioners treat prompt-engineering-as-code as a shareable artifact. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 113,643 (+228) | 📈 +859 since 2026-09-07 | Mature "agents that use the browser" framework; consistent growth across both trending and topic lists confirms it as the default browser-automation primitive for agents. |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 155,106 | 📈 +555 since 2026-09-06 | Visual agentic workflow + RAG builder with self-host/cloud/VPC deployment; steady growth reflects enterprise demand for no-code-to-prod agent pipelines. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 243,506 | 📈 +867 since 2026-09-07 | "Agent that grows with you" — long-term memory, self-improvement loops, and local-first design; 243k stars with 867/week signals strong community conviction in persistent, personalized agents. |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | JavaScript | 132,400 | 📈 +1,217 since 2026-09-08 | "Makes your AI agent think like the laziest senior dev" — minimizes code changes via aggressive reuse; 1.2k stars in one day highlights appetite for token-efficient, pragmatic agent behavior. |
| [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | Python | 31,122 (+656) | 🆕 new | ADHD-friendly output filter for coding agents — strips verbosity, surfaces answers; 656 stars on day one reveals unmet UX need for neurodivergent-friendly agent interfaces. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | TypeScript | 47,919 (+2,627) | 📈 +1,543 since 2026-09-08 | "Write HTML, render video" — agent-native video generation stack; 2.6k stars today (highest single-day in this report) marks breakout moment for programmatic video-as-code. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 64,810 | 📈 +530 since 2026-08-30 | LLM-driven multi-market stock analysis: real-time data, news, dashboard, auto-push, zero-cost scheduling; demonstrates production-grade vertical agent with concrete ROI. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 60,019 | 📈 +794 since 2026-09-07 | Train a 64M-parameter LLM from scratch in 2 hours on consumer hardware; 794 stars/week proves "personal LLM training" is crossing the accessibility threshold. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 116,115 | 📈 +718 since 2026-09-07 | Deterministic AST parsing → queryable knowledge graph for any codebase (docs, SQL, configs, PDFs); no vector store, every edge explained. 718/week shows developers prefer explainable structure over opaque embeddings. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 90,337 | 📈 +561 since 2026-09-01 | Enterprise-grade RAG engine fusing cutting-edge retrieval with agent capabilities; Go implementation + steady growth positions it as the production RAG backbone. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 70,842 | 📈 +616 since 2026-09-08 | Token-compression proxy/library/MCP server: 20% fewer tokens for coding agents, 60–95% for JSON; directly solves the context-window tax that limits agent depth. |

---

## 3. Trend Signal Analysis

**Agent skills/frameworks are the dominant primitive.** Nine of fourteen trending repos are skill packs, harnesses, or methodology frameworks (ECC, superpowers, openai/skills, marketingskills, andrej-karpathy-skills, cathrynlavery/diagram-design, coreyhaines31/marketingskills, ponytail, ayghri/i-have-adhd). This is not a flash-in-the-pan: ECC (+1,415/day), superpowers (+2,040/week), and andrej-karpathy-skills (+4,324/2 weeks) show *compounding* momentum. The pattern is clear — developers have moved past "which agent framework?" to "which *skill layer* do I compose on top of my agent?" The skills are portable across Claude Code, Codex, Cursor, Opencode, and Gemini CLI, making them the new cross-platform standard library.

**Browser-native agents have graduated from experiment to infrastructure.** browser-use (113k stars, steady growth), camofox-browser (stealth, 871 stars *today*), and hyperframes (HTML→video, 2,627 stars *today*) form a stack: navigate → evade detection → render output. HeyGen's hyperframes is the breakout signal — it turns agent-generated HTML into video, unlocking marketing, education, and social-media automation at scale.

**Context-window economics are driving a compression arms race.** headroom (60–95% token reduction for JSON), context-mode (98% tool-output sandboxing), and Graphify (deterministic graphs vs. vector stores) all attack the same constraint: *how much useful context fits in the window*. headroom's proxy/MCP-server form factor means it can be dropped into any agent stack without code changes — a distribution advantage.

**From-scratch training is going mainstream.** minimind (64M params, 2 hours, 60k stars) proves that model training is no longer the exclusive domain of GPU clusters. This aligns with the rise of small, specialized models for agent tool-use, routing, and compression — exactly the workloads where 64M–1B params suffice.

**First appearances vs. re-appearances tell different stories.** The 🆕 entrants (i-have-adhd, openai/plugins, escrcpy, diagram-design) are *new interface layers*: ADHD-friendly output, official plugin spec, mobile control, diagram skills. They expand the *surface area* of what agents can do. The 📈 re-appearances (ECC, superpowers, hermes-agent, ragflow, langchain, dify) are *compounding infrastructure* — they were already big and kept growing. The ecosystem is simultaneously deepening (infrastructure) and widening (interfaces).

---

## 4. Community Hot Spots

- **affaan-m/ECC** — The fastest-growing agent harness (1.4k stars/day) with cross-platform skill/memory/security primitives. Watch for it becoming the de-facto "agent OS" layer.
- **heygen-com/hyperframes** — 2.6k stars in one day for HTML→video rendering. The "agents write code, output video" loop is the next content-automation wave.
- **headroomlabs-ai/headroom** — Token compression as a drop-in proxy/MCP server. Every coding agent hits the context ceiling; this is the most deployable fix.
- **jingyaogong/minimind** — 2-hour from-scratch training lowers the barrier for domain-specific tiny models (routing, classification, tool-use). Expect a flood of specialized micro-models.
- **Graphify-Labs/graphify** — Deterministic code-knowledge graphs without vector stores. As agents write more code, *explainable* codebase understanding beats opaque retrieval.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*