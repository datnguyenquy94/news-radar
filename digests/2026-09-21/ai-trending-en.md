# AI Open Source Trends 2026-09-21

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-21 04:34 UTC

---

# AI Open Source Trends Report — 2026-09-21

---

## 1. Today's Highlights

The AI open-source ecosystem continues its rapid shift from model-centric to **agent-centric infrastructure**. Today's trending list is dominated by tools that give coding agents (Claude Code, Codex, Cursor) richer skills, memory, and security capabilities — **affaan-m/ECC** (+876★ since yesterday) and **cloudflare/security-audit-skill** (+1,541★) exemplify this "agent harness" layer. Simultaneously, **computer-use automation** crosses a milestone with **trycua/cua** (+681★) open-sourcing cross-OS drivers and benchmarks for Computer Use 2.0. Two major first appearances — **BuilderIO/agent-native** (agentic app framework) and **vercel-labs/json-render** (generative UI) — signal a new wave of *native agent application frameworks* rather than wrappers. Educational resources like **anthropics/financial-services** and **bojieli/ai-agent-book** confirm enterprise and academic adoption are accelerating in lockstep.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 263,918 (+826) | 📈 +876 since 2026-09-20 | Universal agent harness adding skills, instincts, memory, and security to Claude Code, Codex, Opencode, and Cursor. The +876★ delta in 24h shows it becoming the de-facto performance layer for coding agents. |
| [trycua/cua](https://github.com/trycua/cua) | HTML | 25,270 (+1,018) | 📈 +681 since 2026-09-20 | Computer Use 2.0 infrastructure: open-source drivers, cross-OS fleets, and benchmarks for training/evaluating GUI agents. Momentum reflects surging demand for reliable desktop automation at scale. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 182,643 | 📈 +594 since 2026-09-19 | Scalable web data API (search, scrape, interact) purpose-built for LLM pipelines. Steady compounding growth confirms it as a default retrieval primitive for agent workflows. |
| [vercel-labs/json-render](https://github.com/vercel-labs/json-render) | TypeScript | 17,473 (+291) | 🆕 new | Generative UI framework that streams structured JSON to render reactive interfaces — a new primitive for agent-native frontends. First appearance with strong Vercel backing. |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | TypeScript | 147,221 (+419) | 📈 +859 since 2026-09-19 | Official terminal-native agentic coding tool; understands codebases, executes tasks, handles git. Sustained high velocity confirms it as the reference CLI for agentic development. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [BuilderIO/agent-native](https://github.com/BuilderIO/agent-native) | TypeScript | 5,353 (+98) | 🆕 new | Framework for building *agentic applications* (not just chatbots) — first-class support for planning, tool use, and multi-step workflows. Early traction suggests a new app architecture paradigm. |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | JavaScript | 18,215 (+2,428) | 📈 +1,541 since 2026-09-20 | Coding-agent skill for multi-phase security audits with machine-readable, independently verified findings. Explosive single-day growth (+2,428★) highlights enterprise appetite for automated sec-review agents. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 247,527 | 📈 +573 since 2026-09-19 | "The agent that grows with you" — persistent, self-improving personal agent. Massive total stars + steady delta indicate strong community mindshare for long-horizon agency. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | 48,431 | 📈 +526 since 2026-09-09 | Ultra-lightweight, self-hosted personal AI agent framework with WebUI, MCP, multi-agent workflows, and memory. Consistent growth reflects demand for *local-first, privacy-preserving* agent stacks. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 97,794 (+736) | 📈 +643 since 2026-09-20 | Curated production-grade engineering skills for AI coding agents (refactoring, testing, docs, etc.). Google-backed and rapidly compounding — becoming the standard library for agent capabilities. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 52,036 | 📈 +506 since 2026-09-07 | AI productivity studio unifying 300+ assistants, autonomous agents, and frontier LLM access. Steady growth positions it as a leading *consumer-grade* agent desktop app. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [anthropics/financial-services](https://github.com/anthropics/financial-services) | Python | 35,458 (+260) | 🆕 new | Anthropic's reference implementation for AI in financial services — compliance, risk, and analytics workflows. First appearance with instant 35k★ signals heavy enterprise evaluation. |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 72,276 | 📈 +525 since 2026-09-16 | Local-first AI job search: scrapes portals, scores listings, tailors CVs, tracks apps — runs inside your coding CLI. Unique "agent-in-the-loop" UX for a high-value vertical. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 52,036 | 📈 +506 since 2026-09-07 | (Also in Agents) Desktop productivity studio with 300+ assistants and autonomous agents. Cross-category traction shows consumer appetite for unified AI workspaces. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 105,311 | 📈 +517 since 2026-09-12 | Step-by-step PyTorch implementation of a ChatGPT-like LLM from scratch. Enduring popularity (+517★ in 9 days) confirms it as the canonical educational resource for LLM internals. |
| [microsoft/ML-For-Beginners](https://github.com/microsoft/ML-For-Beginners) | Jupyter Notebook | 90,782 | 📈 +503 since 2026-09-09 | 12-week, 26-lesson classic ML curriculum. Steady growth 5+ years post-launch shows sustained foundational demand alongside the LLM boom. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | 139,197 | 📈 +652 since 2026-09-17 | Curated collection of 100+ AI agents, agent skills, and RAG applications. Acts as a real-time index of the applied-LLM landscape; consistent growth tracks ecosystem breadth. |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | Python | 49,262 | 📈 +899 since 2026-09-18 | Open-source book 《深入理解 AI Agent：设计原理与工程实践》 with full text, PDF, and per-chapter code. Near-900★ in 3 days reveals intense Chinese-community demand for rigorous agent engineering knowledge. |

---

## 3. Trend Signal Analysis

**Agent infrastructure is the new battleground.** The highest-velocity projects today — ECC, security-audit-skill, agent-skills, claude-code — are not models or apps but *capability layers* that make coding agents reliable, secure, and extensible. This mirrors the "standard library" phase every platform undergoes: the community is converging on shared primitives (skills, memory, tool schemas) rather than building isolated agents.

**Computer Use 2.0 goes open.** `trycua/cua` crossing 25k★ with cross-OS drivers and benchmarks marks a phase change: desktop automation is moving from proprietary demos (Operator, Computer Use) to a commoditized, evaluatable stack. Expect rapid iteration on benchmarks and safety guardrails next.

**First appearances reveal strategic bets.** `BuilderIO/agent-native` and `vercel-labs/json-render` are not wrappers — they are *frameworks for agent-native applications* (structured planning, generative UI). Their arrival signals that the next 6–12 months will see a Cambrian explosion of vertical agent apps (finance, legal, devops) built on these primitives, not on raw LLM APIs. Meanwhile, `anthropics/financial-services` debuting at 35k★ shows enterprises are skipping PoCs and adopting reference architectures directly.

**Re-appearances confirm compounding trust.** Projects like `firecrawl`, `hermes-agent`, `nanobot`, and `awesome-llm-apps` keep adding hundreds of stars weekly *months after launch*. This is not hype decay — it's infrastructure hardening. Developers are voting with stars for tools that survive production contact.

**Geographic signal:** `bojieli/ai-agent-book`'s +899★ in three days underscores that China's developer community is investing heavily in *engineering rigor* around agents (not just prompting), a trend likely to feed back into global OSS via translated standards and tooling.

---

## 4. Community Hot Spots

- **affaan-m/ECC** — The emerging *universal runtime* for coding agents. If you build on Claude Code, Codex, or Cursor, this is the performance/security/memory layer to adopt or contribute to.
- **trycua/cua** — The only open, benchmarked Computer Use 2.0 stack. Critical for anyone automating desktop/web workflows at scale; contribute drivers or evals.
- **BuilderIO/agent-native** + **vercel-labs/json-render** — Pair these to prototype *agent-native SaaS* in days not months. Watch for plugin ecosystems forming around both.
- **cloudflare/security-audit-skill** — Highest single-day momentum (+2,428★). Security teams should evaluate this for automated code review pipelines; contributors can extend audit phases.
- **bojieli/ai-agent-book** + **rasbt/LLMs-from-scratch** — The twin pillars of *agent engineering education* (Chinese and English communities). Translate, annotate, or build courseware on top — talent pipeline depends on it.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*