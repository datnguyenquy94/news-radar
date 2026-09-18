# AI Open Source Trends 2026-09-18

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-18 04:20 UTC

---

# AI Open Source Trends Report — 2026-09-18

---

## 1. Today's Highlights

The AI open-source ecosystem is accelerating toward **agent-centric infrastructure**. Today's trending list is dominated by tools that give AI agents real-world capabilities: browser control (Tencent/BrowserSkill), security auditing (Cloudflare/security-audit-skill), persistent memory (thedotmack/claude-mem, topoteretes/cognee), and knowledge graphs over codebases (Graphify-Labs/graphify). Chinese tech giants (Alibaba, Tencent, TencentCloud) are open-sourcing production-grade agent platforms at scale. Meanwhile, inference efficiency sees a breakthrough with **colibri** running frontier MoE models in pure C with zero dependencies — a signal that local, hardware-agnostic deployment is becoming a first-class concern.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 35,267 (+3,286) | 📈 +2,816 since 2026-09-17 | Hybrid deterministic-pipeline + LLM Agent code review tool battle-tested at Alibaba scale. Precise line-level comments with built-in multi-language rules (NPE, thread-safety, XSS, SQLi) and OpenAI/Anthropic compatibility. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 261,288 (+1,171) | 📈 +835 since 2026-09-17 | Agent harness optimization system adding skills, instincts, memory, and security to Claude Code, Codex, Opencode, Cursor. Massive star base indicates broad adoption across agent CLI ecosystems. |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | C | 35,825 (+873) | 📈 +677 since 2026-09-17 | Pure C, zero-dependency inference engine streaming MoE experts from disk. Runs frontier models on consumer hardware — a breakthrough for local, privacy-preserving deployment. |
| [coder/coder](https://github.com/coder/coder) | Go | 14,912 (+145) | 🆕 new | Secure, self-hosted development environments designed for both developers and their AI agents. First appearance on trending signals growing demand for agent-ready cloud dev infrastructure. |

---

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | JavaScript | 10,983 (+3,607) | 📈 +3,281 since 2026-09-17 | Coding-agent skill for multi-phase security audits with independently verified, machine-readable findings. Highest today-star velocity on the list (+3,607) shows explosive demand for agent-driven security automation. |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | TypeScript | 4,413 (+1,302) | 🆕 new | Lets AI agents control a real, logged-in browser via CLI + extension without interrupting the user. First appearance; enables agents to interact with any web UI — a critical step toward general-purpose computer use. |
| [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) | Rust | 5,057 (+939) | 📈 +517 since 2026-09-17 | Transforms coding agents into research agents. Rust implementation suggests performance focus for long-running, tool-heavy research workflows. |
| [n8n-io/n8n](https://github.com/n8n-io/n8n) | TypeScript | 205,079 (+281) | 🆕 new | Fair-code workflow automation with native AI capabilities, 400+ integrations, visual + code building. Largest repo on the list; first trending appearance highlights mainstream adoption of AI-native automation. |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 156,212 (+574) | 📈 +574 since 2026-09-14 | End-to-end platform for agentic workflows and RAG pipelines with rich model/tool support. Deploys on cloud, VPC, or self-hosted — bridging prototype to production without stack rebuild. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 82,868 (+739) | 📈 +739 since 2026-09-16 | Gives AI agents "eyes" across the internet: Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu via one CLI with zero API fees. Broad platform coverage makes it a universal web-access layer. |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | JavaScript | 141,458 (+918) | 📈 +918 since 2026-09-17 | Optimizes agent behavior to "think like the laziest senior dev" — minimizing code written. High stars + strong momentum reflect community appetite for agent efficiency/quality tuning. |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | Python | 3,582 (+367) | 🆕 new | Self-hosted, multi-user, multi-agent AI assistant. First appearance; Tencent's entry into the open agent platform space with enterprise-grade tenancy and agent orchestration. |

---

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | Go | 26,475 (+1,125) | 📈 +922 since 2026-09-17 | Open-source LLM knowledge platform: turns raw documents into queryable RAG, autonomous reasoning agent, and self-maintaining Wiki. Production-grade knowledge management with agentic reasoning built in. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 119,122 (+1,028) | 📈 +1,028 since 2026-09-16 | Converts codebases (code, docs, SQL, PDFs) into queryable knowledge graphs via deterministic AST parsing — no vector store. Every edge explained; skill for Claude Code, Cursor, Codex, Gemini CLI. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 94,145 (+560) | 📈 +560 since 2026-09-10 | Persistent cross-session context for any agent: captures session activity, compresses with AI, injects relevant context into future sessions. Works with 10+ agent CLIs — emerging standard for agent memory. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 30,794 (+531) | 📈 +531 since 2026-08-26 | Self-hosted AI memory platform with knowledge graph engine for persistent long-term agent memory. Focus on self-hosting and graph-based retrieval differentiates from vector-only approaches. |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | Python | 79,668 | 📈 +2,043 since 2026-09-08 | Tutorial/book "Building Agents from Zero" — principle and practice guide. Strong growth indicates surging developer onboarding into agent development. |

---

## 3. Trend Signal Analysis

**Agent tooling is the new infrastructure layer.** The dominant signal across both lists is the shift from "LLM wrappers" to **agent-native primitives**: browser control (BrowserSkill), security auditing (security-audit-skill), persistent memory (claude-mem, cognee), code-graph knowledge (graphify), and web reach (Agent-Reach). These are not chat apps — they are capabilities that agents compose. The explosive velocity of Cloudflare's security-audit-skill (+3,281 since yesterday) and Tencent's BrowserSkill (🆕 at +1,302 today) shows that **giving agents authenticated, real-world interfaces** is the current frontier.

**Local inference efficiency has gone mainstream.** colibri (pure C, zero deps, disk-streamed MoE) and coder (agent-ready dev environments) signal that developers want **frontier models on their own hardware** without Python/dependency hell. This aligns with recent MoE model releases (DeepSeek-V3, Qwen3-MoE) that are too large for naive loading but ideal for expert streaming.

**Chinese hyperscalers are open-sourcing production agent stacks.** Alibaba (code review), Tencent (WeKnora knowledge platform, BrowserSkill, Octop multi-agent assistant) are releasing tools proven at massive scale. This mirrors the 2023-24 LLM open-source wave but at the **agent-platform layer** — a structural shift.

**🆕 vs 📈 distinction:** First appearances (BrowserSkill, Octop, coder, n8n) represent **new capability categories** entering the mainstream: browser automation, multi-tenant agent platforms, agent dev environments, AI-native workflow automation. Re-appearances with strong 📈 (open-code-review, ECC, WeKnora, graphify, claude-mem) show **compounding adoption of proven tools** — the ecosystem is deepening, not just widening.

---

## 4. Community Hot Spots

- **Tencent/BrowserSkill** — First generic "agent uses your logged-in browser" primitive; unlocks web UI automation without APIs. Watch for skill ecosystem growth.
- **cloudflare/security-audit-skill** — Highest momentum (+3,607 today); security is the first high-stakes domain where agent autonomy is being productionized.
- **JustVugg/colibri** — Pure C MoE inference changes the hardware economics of local agents; could become the `llama.cpp` for MoE models.
- **Graphify-Labs/graphify** — Deterministic code-graph RAG (no vectors) solves hallucination in code agents; adopted as skill by 4 major agent CLIs.
- **thedotmack/claude-mem / topoteretes/cognee** — Dual convergence on **persistent, graph-based agent memory** across sessions. The standard for "agent that remembers" is being set now.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*