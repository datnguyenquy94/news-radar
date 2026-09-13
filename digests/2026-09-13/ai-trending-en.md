# AI Open Source Trends 2026-09-13

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-13 04:27 UTC

---

# AI Open Source Trends Report — 2026-09-13

## 1. Today's Highlights

The AI open-source ecosystem shows a pronounced shift toward **autonomous agent systems** and **developer-facing infrastructure** for agent workflows. Three fully autonomous penetration-testing agents (`pentagi`, `Claude-Red`, `hermes-agent`) debuted simultaneously, signaling maturing interest in offensive-security automation. Meanwhile, `worktrunk` and `ECC` address the emerging "parallel agent" developer experience — managing git worktrees and optimizing agent harnesses respectively. On the application layer, `YuE` pushes frontier music generation with symbolic planning and agentic editing, while `ppt-master` demonstrates production-grade document-to-PowerPoint pipelines. The massive `system_prompts_leaks` repository (65k★) reflects intense community demand for prompt-engineering transparency across all major LLM providers.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) | Rust | 7,294 (+54) | 🆕 new | CLI that manages Git worktrees for parallel AI agent workflows; solves the "multiple agents editing same repo" collision problem with isolated workspaces. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 179,627 | 📈 +743 since 2026-09-11 | Scalable web search/scrape API built for LLM context retrieval; powers RAG pipelines with clean markdown extraction and JS rendering at scale. |
| [f/prompts.chat](https://github.com/f/prompts.chat) | HTML | 170,165 | 📈 +564 since 2026-09-08 | Community prompt library (formerly Awesome ChatGPT Prompts) with self-hosted deployment for org privacy; 170k★ signals persistent prompt-engineering demand. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 257,191 | 📈 +590 since 2026-09-12 | Agent harness optimizer adding skills, memory, instincts, and security hardening for Claude Code, Codex, Cursor, Opencode — the "operating system" layer for coding agents. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi) | Go | 23,524 (+189) | 🆕 new | Fully autonomous multi-agent system that plans and executes complex penetration tests end-to-end; 23k★ debut shows explosive appetite for offensive-security agents. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 244,933 | 📈 +665 since 2026-09-11 | Self-evolving agent framework that "grows with you" via continuous learning; largest starred agent project, indicating sustained community compounding. |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | JavaScript | 136,731 | 📈 +805 since 2026-09-12 | Meta-agent that optimizes other agents to write minimal code ("laziest senior dev" philosophy); 805★ in 24h highlights efficiency-focused agent tuning. |
| [SnailSploit/Claude-Red](https://github.com/SnailSploit/Claude-Red) | Python | 3,671 (+113) | 🆕 new | Curated offensive-security skill library for Claude's skill system — structured SKILL.md files covering SQLi, shellcode, EDR evasion, exploit dev. |
| [melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM) | TypeScript | 1,863 (+504) | 📈 +448 since 2026-09-12 | Self-hosted AI sales OS with native agents + WhatsApp integration; MCP-ready, multi-tenant, LGPD-compliant — open alternative to Kommo/Intercom. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [multimodal-art-projection/YuE](https://github.com/multimodal-art-projection/YuE) | Python | 7,358 (+210) | 🆕 new | Frontier music generation (YuE2) with symbolic planning, zero-shot covers, and agentic editing — pushes beyond pure diffusion into compositional control. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 53,926 | 📈 +541 since 2026-09-10 | Generates native .pptx decks (shapes, transitions, charts, narration) from docs/topics; supports custom templates — production-grade doc-to-slides pipeline. |
| [Event-AHU/Medical_Image_Analysis](https://github.com/Event-AHU/Medical_Image_Analysis) | Python | 240 | 🆕 new | Foundation-model-based medical imaging analysis; early-stage but signals vertical specialization of multimodal models into clinical workflows. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | JavaScript | 65,514 (+217) | 🆕 new | Aggregated system prompts from Claude (Fable 5.1, Opus 5, Code), ChatGPT (GPT-6-Astra, Codex), Gemini (3.8 Flash, 3.1 Pro, Antigravity), Grok, Cursor, Kimi — essential reference for prompt engineers and red-teamers. |

---

## 3. Trend Signal Analysis

**Autonomous agents have crossed a viability threshold for high-stakes domains.** The simultaneous debut of `pentagi` (23k★), `Claude-Red`, and continued growth of `hermes-agent` (245k★) marks penetration testing as the first vertical where fully autonomous multi-agent systems are shipping open-source, not just demoed. This mirrors the "computer use" capability wave from late 2025 — agents now chain tools, maintain long context, and recover from errors reliably enough for offensive security.

**Developer tooling for agent fleets is the new infrastructure layer.** `worktrunk` (git worktrees for parallel agents) and `ECC` (agent harness hardening) solve the *meta-problem*: how to run dozens of agents concurrently without conflicts, memory leaks, or security gaps. `ponytail`'s 805★/day surge confirms developers are optimizing *agent efficiency* (token spend, latency, code quality) as aggressively as model performance.

**Prompt transparency has become a community infrastructure project.** `system_prompts_leaks` (65k★ in days) reveals a new norm: treating vendor system prompts as public knowledge to be reverse-engineered, versioned, and diffed. This enables portable prompt engineering across Claude, GPT, Gemini, Grok — a de facto standardization pressure on providers.

**Vertical applications are adopting "agentic" architectures.** `YuE` (music) and `ppt-master` (slides) both emphasize *planning + editing loops* rather than single-pass generation. The pattern: symbolic/planning module → generation → critique/refine → output. This mirrors the agentic coding workflow (spec → code → test → fix) moving into creative and document domains.

**First appearances (🆕) signal new entrants; re-appearances (📈) signal compounding trust.** The six 🆕 projects today are all *specialized* (pentesting, music, slides, medical, git tooling, prompt leaks) — the ecosystem is fragmenting into verticals. The 📈 projects (`hermes-agent`, `firecrawl`, `prompts.chat`, `ponytail`, `ECC`) are horizontal platforms accruing stars steadily — they are becoming default infrastructure.

---

## 4. Community Hot Spots

- **`vxcontrol/pentagi`** — Autonomous pentesting agents are the clearest product-market fit for multi-agent systems today; watch for CVE integration and report-generation plugins.
- **`max-sixty/worktrunk`** — Git worktree orchestration is the missing primitive for "swarm coding"; expect IDE integrations (Cursor, Zed, VS Code) within weeks.
- **`multimodal-art-projection/YuE`** — Symbolic planning + agentic editing in music generation may generalize to video, 3D, and code — the architecture is the transferable asset.
- **`affaan-m/ECC`** — With 257k★ and daily growth, it's becoming the de facto "agent OS" for coding assistants; plugin ecosystem and enterprise features are next.
- **`asgeirtj/system_prompts_leaks`** — Treat this as a living spec for cross-model prompt portability; contributors adding new model prompts (e.g., Qwen, DeepSeek, Llama 4) will drive its utility.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*