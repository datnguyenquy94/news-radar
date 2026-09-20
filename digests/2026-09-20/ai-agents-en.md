# OpenClaw Ecosystem Digest 2026-09-20

> Issues: 341 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-20 04:36 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-09-20

## 1. Today's Overview

OpenClaw shows **very high velocity** with 841 total items (341 issues + 500 PRs) updated in the last 24 hours. The project is in active stabilization mode: 210 PRs merged/closed today against 290 still open, and 101 issues closed against 240 remaining open. A new Linux stable release **v2026.9.5** was published (AppImage + Debian). The issue landscape is dominated by **session-state/message-loss regressions** (P0/P1), **zombie process leaks**, **gateway crash-loops**, and **multi-channel delivery failures** — many tagged as release blockers or regression. PR activity focuses on config-stack safety, session recovery, update/repair reliability, and UI/accessibility polish.

---

## 2. Releases

### **linux-stable: OpenClaw Linux update channel — v2026.9.5**  
**Published:** 2026-09-20  
**Artifacts:**
- [AppImage](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.AppImage)
- [Debian package](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.deb)

**Notes:** This is a Linux companion update channel release. No changelog provided in the data; users on Linux should update via their preferred package method. Watch for migration issues around SQLite session schema (see Issue #152884).

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary |
|----|------|---------|
| [#153330](https://github.com/openclaw/openclaw/pull/153330) | cli, update | Fix misleading health-check timeout reports during `update repair` |
| [#153320](https://github.com/openclaw/openclaw/pull/153320) | agents, compaction | Stop rejecting preserved short status requests (e.g., “How about now?”) in quality-guard |
| [#153302](https://github.com/openclaw/openclaw/pull/153302) | gateway, agents | Settle task events before registry cleanup to fix flaky session-reset tests |
| [#153394](https://github.com/openclaw/openclaw/pull/153394) | tasks | Avoid scanning retained tasks for task-ID reads; use PK index |
| [#153429](https://github.com/openclaw/openclaw/pull/153429) | test, desktop | Prevent recursive desktop proof tap connections causing CI flakes |
| [#153427](https://github.com/openclaw/openclaw/pull/153427) | web-ui | Refresh Control UI locales (automated) |

**Theme:** Reliability hardening — update/repair reporting, compaction edge cases, test stability, and i18n sync. No major user-facing features landed today.

---

## 4. Community Hot Topics (Most-Commented Issues/PRs)

| Item | Comments | Signals |
|------|----------|---------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) **Zombie process leak** (P1, 🦪) | 30 | Hook/tool child processes unreaped → zombie accumulation → runtime degradation. Regression. |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) **Gemini 3.1-pro crash** (P0, 🦞) | 16 | `Cannot convert undefined or null to object` on every message after 2026.3.2 update. Release-blocker auth/UX. |
| [#68596](https://github.com/openclaw/openclaw/issues/68596) **Streaming watchdog timeout** (P2, 🌊) | 16 | Extended-reasoning models (kimi-k2.5, DeepSeek-R1) trigger 30s watchdog; need configurable threshold. |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) **SQLite transcript seams** (P3, 🌊) | 14 | Companion apps need first-class SQL access to sessions/transcripts instead of scraping blobs. |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) **Hardcoded `/Users/wangtao` path** (P2, 🦪) | 13 | Workspace path baked into shipped code — basic QA miss. |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) **Bootstrap re-injection** (P2, 🦪) | 11 | 20-30% context wasted re-injecting MEMORY.md, SOUL.md, etc. every turn. |
| [#107220](https://github.com/openclaw/openclaw/issues/107220) **Gateway crash-loop on legacy memory sidecar** (P0, 🦞) | 10 | `meta`/`chunks` conflicts fatal vs `files` auto-resolve; blocks 2026.7.1 upgrades. **Closed** but root cause may persist. |
| [#119401](https://github.com/openclaw/openclaw/issues/119401) **DM NO_REPLY suppression** (P1, 🦪) | 10 | `silentReply` policy ignored for DMs; no way to force visible replies on small/local models. |
| [#114211](https://github.com/openclaw/openclaw/issues/114211) **Matrix room agent loop** (P1, 🐚) | 9 | Visible no-reply output loops + stale session replay after restart. |
| [#86214](https://github.com/openclaw/openclaw/issues/86214) **Codex app-server mid-turn close** (P1, 🦪) | 9 | Large `logs_2.sqlite` causes client disconnect during image/tool requests. **Closed** but may need verification. |

**Underlying needs:**  
- **Stability over features** — multiple P0/P1 regressions block production upgrades.  
- **Observability & control** — configurable timeouts, SQL seams, per-turn send budgets.  
- **Multi-channel reliability** — Slack, WhatsApp, Telegram, Matrix, Feishu, Discord all show delivery/session bugs.  
- **Token efficiency** — bootstrap bloat and context-engine duplication are real cost drivers.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **P0 🦞** | [#38327](https://github.com/openclaw/openclaw/issues/38327) Gemini 3.1-pro `undefined/null` crash | Open | No |
| **P0 🦞** | [#107220](https://github.com/openclaw/openclaw/issues/107220) Gateway crash-loop legacy memory sidecar | Closed | Likely in 2026.7.x |
| **P0 🦞** | [#152884](https://github.com/openclaw/openclaw/issues/152884) Update deadlock / SQLite migration | Open (new) | No |
| **P1 🐚** | [#114211](https://github.com/openclaw/openclaw/issues/114211) Matrix room agent loop + stale replay | Open | No |
| **P1 🐚** | [#90944](https://github.com/openclaw/openclaw/issues/90944) `sessions_yield` reply recorded not delivered | Open | No |
| **P1 🦪** | [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie process leak (hooks/tools) | Open | No |
| **P1 🦪** | [#119401](https://github.com/openclaw/openclaw/issues/119401) DM NO_REPLY unconditional suppression | Open | No |
| **P1 🦪** | [#131150](https://github.com/openclaw/openclaw/issues/131150) Slack DMs silently dropped post-restart (19 accounts) | Open | No |
| **P1 🦪** | [#101814](https://github.com/openclaw/openclaw/issues/101814) All channels broken after 2026.6.11 — 1 msg then silence | Open | No |
| **P1 🦪** | [#112564](https://github.com/openclaw/openclaw/issues/112564) WhatsApp group sends fail (UNAVAILABLE) | Open | No |
| **P2 🦪** | [#69242](https://github.com/openclaw/openclaw/issues/69242) `exec` tool SIGKILL on broad find/grep (Linux) | Open | No |
| **P2 🦪** | [#78805](https://github.com/openclaw/openclaw/issues/78805) Event-loop blocking via `execSync`/`readFileSync` | Open | No |
| **P2 🦪** | [#119992](https://github.com/openclaw/openclaw/issues/119992) Per-turn send budget — duplicate answer storms | Open | [#153340](https://github.com/openclaw/openclaw/pull/153340) (plugin pre-filtering) |
| **P2 🦐** | [#153290](https://github.com/openclaw/openclaw/issues/153290) Plugin reload removes build gen while WhatsApp hook loads → ENOENT | Open (today) | No |

**Pattern:** Message-loss, session-state corruption, and cross-channel delivery failures dominate P0/P1. Several are regressions from 2026.6.x→2026.7.x→2026.8.x upgrades.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Votes | Signal | Likelihood for Next Version |
|-------|-------|--------|-----------------------------|
| [#68596](https://github.com/openclaw/openclaw/issues/68596) Configurable streaming watchdog timeout | 8 👍 | High — reasoning models need longer windows | **High** (simple config flag) |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) SQLite transcript/session seams | 2 👍 | Architectural — companion/ecosystem enablement | **Medium** (needs schema stability) |
| [#95724](https://github.com/openclaw/openclaw/issues/95724) Memory index by source dir (dedupe vector stores) | 1 👍 | Cost/perf — eliminates duplicate indexes | **Medium** (clear ROI) |
| [#110950](https://github.com/openclaw/openclaw/issues/110950) Everything-is-a-cron unification | 2 👍 | Architectural — heartbeat/watchers/scheduled | **Low** (major refactor) |
| [#105494](https://github.com/openclaw/openclaw/issues/105494) Interactive “memory therapy” session | 0 👍 | UX innovation — resolve contradictions interactively | **Low** (new paradigm) |
| [#116716](https://github.com/openclaw/openclaw/issues/116716) Strict failure policy for context engines | 0 👍 | Enterprise — fail fast on engine unavailability | **Medium** (config flag) |
| [#87362](https://github.com/openclaw/openclaw/issues/87362) Task flow lifecycle hook events | 1 👍 | Observability — plugin SDK exposure | **Medium** (internal system exists) |
| [#73537](https://github.com/openclaw/openclaw/issues/73537) Production-readiness stability label on releases | 2 👍 | Trust — users need signal for prod vs beta | **High** (process change) |

**Prediction:** Watchdog timeout config (#68596), stability labels (#73537), and memory dedupe (#95724) are most likely to land soon. The cron unification (#110950) and memory therapy (#105494) are longer-term.

---

## 7. User Feedback Summary

| Theme | Representative Voices |
|-------|----------------------|
| **Production blockers** | “All channels enter broken state after 2026.6.11 — one message then permanent silence” ([#101814](https://github.com/openclaw/openclaw/issues/101814)) |
| **Upgrade fear** | “Gateway crash-loops on startup refusing to report ready” on 2026.7.1 ([#107220](https://github.com/openclaw/openclaw/issues/107220)) |
| **Multi-account fragility** | “Slack DMs silently dropped for all 19 accounts after gateway restart” ([#131150](https://github.com/openclaw/openclaw/issues/131150)) |
| **Token waste** | “Bootstrap files re-injected every turn, wasting 20-30% tokens” ([#67419](https://github.com/openclaw/openclaw/issues/67419)) |
| **Accessibility** | “Blind user: need Linear Persistent Workspace Mode” ([#82450](https://github.com/openclaw/openclaw/issues/82450)) |
| **Model compatibility** | “Gemini 3.1-pro fails with null object error” ([#38327](https://github.com/openclaw/openclaw/issues/38327)) |
| **Observability gap** | “No way to observe task flow lifecycle for plugins” ([#87362](https://github.com/openclaw/openclaw/issues/87362)) |
| **Basic QA misses** | “Hardcoded `/Users/wangtao` path shipped to production” ([#51429](https://github.com/openclaw/openclaw/issues/51429)) |

**Sentiment:** Frustration with regression density and upgrade risk. Users value the product (family/business assistant, Home Assistant control, daily workflow) but need **release stability guarantees** and **multi-channel reliability**.

---

## 8. Backlog Watch (Stale High-Impact Items Needing Maintainer Attention)

| Item | Age | Severity | Why It Matters |
|------|-----|----------|----------------|
| [#38327](https://github.com/openclaw/openclaw/issues/38327) Gemini 3.1-pro crash | 198 days | P0 🦞 | Blocks major model provider; release-blocker tag |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) Hardcoded user path | 183 days | P2 🦪 | Embarrassing QA miss; still open |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) Bootstrap re-injection | 158 days | P2 🦪 | 20-30% token waste on every turn — compounding cost |
| [#78805](https://github.com/openclaw/openclaw/issues/78805) Sync I/O blocking event loop | 136 days | P1 🐚 | 4s main-thread blocks; affects all channels |
| [#96477](https://github.com/openclaw/openclaw/issues/96477) Single-writer session lock scaling | 88 days | P2 🦪 | Blocks multi-user production deployments |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie process leak | 83 days | P1 🦪 | Runtime degradation over time; needs process reaping |
| [#101814](https://github.com

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-09-20)

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source landscape is **highly fragmented but technically convergent**. Twelve projects exist under the "Claw" family and adjacent architectures, with **OpenClaw, ZeroClaw, Hermes Agent, NanoBot, and CoPaw** demonstrating sustained high-velocity development. A clear bifurcation has emerged: **core runtime projects** (OpenClaw, ZeroClaw, Hermes) prioritize session reliability, multi-channel delivery, and architectural hardening, while **UI/UX-focused forks** (CoPaw, LobsterAI, NanoBot) invest in console resilience, provider ecosystems, and monetization hooks. **No single project dominates**—each occupies a distinct niche (desktop agent, headless gateway, mobile PWA, embedded bot, enterprise relay). The ecosystem shows **consolidation around event-sourced session models, WASM plugin runtimes, and transport-agnostic channel adapters** as shared architectural north stars.

---

## 2. Activity Comparison (24h Window)

| Project | Issues Updated | PRs Updated | PRs Merged/Closed | Releases | Health Score* |
|---------|----------------|-------------|-------------------|----------|---------------|
| **OpenClaw** | 341 | 500 | 210 | ✅ v2026.9.5 (Linux) | **9.5/10** |
| **ZeroClaw** | 12 | 50 | 6 | ❌ | **8.5/10** |
| **Hermes Agent** | 23 | 50 | 15 | ❌ | **8.0/10** |
| **NanoBot** | 2 | 34 | 10 | ❌ | **7.5/10** |
| **CoPaw (QwenPaw)** | 16 | 23 | 3 | ✅ v2.2.2-beta.3 | **7.5/10** |
| **LobsterAI** | 1 | 7 | 7 | ❌ | **7.0/10** |
| **Moltis** | 4 | 1 | 0 | ❌ | **5.5/10** |
| **NanoClaw** | 0 | 4 | 0 | ❌ | **5.0/10** |
| **IronClaw** | 0 | 1 | 0 | ❌ | **4.5/10** |
| **PicoClaw** | 3 | 0 | 0 | ❌ | **3.0/10** |
| **NullClaw** | 0 | 0 | 0 | ❌ | **1.0/10** |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ | **1.0/10** |

*Health Score heuristic: velocity (40%) + merge throughput (30%) + release cadence (20%) + issue hygiene (10%). Scores reflect 24h snapshot only.

---

## 3. OpenClaw's Position

### Advantages vs Peers
| Dimension | OpenClaw | Nearest Peer (ZeroClaw) | Gap |
|-----------|----------|-------------------------|-----|
| **Scale** | 841 items/24h; 210 merges | 62 items/24h; 6 merges | **13× velocity** |
| **Release Discipline** | Weekly Linux stable channel (AppImage + .deb) | Accumulating RFCs, no recent cut | **Production-ready cadence** |
| **Multi-Channel Breadth** | Slack, WhatsApp, Telegram, Matrix, Feishu, Discord, Email | Telegram, WhatsApp, Signal, ACP | **Widest surface coverage** |
| **Session/State Reliability** | Active P0/P1 fixes for message-loss, zombie leaks, gateway crash-loops | Architectural RFCs accepted, implementation pending | **Operational hardening ahead** |

### Technical Approach Differences
- **OpenClaw**: Monolithic TypeScript/Go gateway + SQLite session store + per-channel hooks. Prioritizes **incremental stabilization** over architectural rewrites.
- **ZeroClaw**: Event-sourced, runtime-owned sessions + WASM plugin runtime + transport adapters (ACD). **Paradigm shift** from mutable messages to immutable event logs.
- **Hermes Agent**: Python-centric daemon + desktop wrapper + OpenRouter/Anthropic credential pooling. Focus on **Windows desktop reliability** and Python 3.14 compat.
- **NanoBot/CoPaw**: WebUI-first (React/TS), provider marketplace, mobile PWA. **Frontend extensibility** over backend rigor.

### Community Size Proxy
- **OpenClaw**: 341 issue updates/24h → largest active contributor/user base reporting regressions.
- **ZeroClaw**: 39 comments on RFC #9487 → deep architectural engagement, smaller operator base.
- **Hermes/NanoBot/CoPaw**: 10–23 issue updates/24h → healthy mid-sized communities.

---

## 4. Shared Technical Focus Areas (Cross-Project Requirements)

| Requirement | Projects Signaling Need | Specific Evidence |
|-------------|------------------------|-------------------|
| **Configurable streaming timeouts for reasoning models** | OpenClaw (#68596), ZeroClaw (#10634), NanoBot (implied by provider diversity) | 30s watchdog kills DeepSeek-R1/Kimi-k2.5 turns; need per-model/configurable thresholds |
| **SQL/first-class session transcript access** | OpenClaw (#79902), ZeroClaw (RFC #10526 append-only event history), LobsterAI (SQLite integrity fixes) | Companion apps need structured query, not blob scraping; event-sourced replay demanded |
| **Delegation/sub-agent safety (approval, cost, progress persistence)** | ZeroClaw (#10643 P1 approval bypass, #10197 ACP turn persistence, #10804 cost scoping), OpenClaw (task flow hooks #87362), Hermes (Kanban pre-dispatch hooks #116663) | Child loops inherit tools without approval; interrupted turns lose checkpointed state; cost tracking breaks in delegation |
| **Provider resilience (image rejection, frame limits, reasoning_effort passthrough)** | ZeroClaw (#10480, #10830, #10916), NanoBot (aimlapi, SenseNova PRs), CoPaw (OpenCode, kimi-code gaps) | 400 on image requests kills turns; Grok frame limits unenforced; reasoning params dropped |
| **Windows desktop stability (build, update, perf)** | Hermes (#116662 update abort, #116274 lag), LobsterAI (#1075 WSL build break), OpenClaw (hardcoded path #51429) | Git temp cleanup, WSL/Git Bash conflicts, anonymous GitHub 403 on update |
| **Token/context efficiency (bootstrap dedupe, compaction)** | OpenClaw (#67419 20-30% waste, #95724 memory dedupe), ZeroClaw (#9535 model-window-relative compaction), NanoBot (#5403 token undercount) | MEMORY.md re-injected every turn; fixed 32k budget vs model window; local tiktoken undercounts |
| **Security sandbox hardening (symlink bypass, mount validation, host launcher resolution)** | NanoBot (#4072 4-month symlink bypass), NanoClaw (#3680 mount bypass), ZeroClaw (#10381 host launcher resolution) | ExecTool workspace escape; container mount validation gaps; Firejail/Bubblewrap path traversal |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Technical Architecture | Key Differentiator |
|---------|---------------|-------------|------------------------|---------------------|
| **OpenClaw** | Multi-channel gateway + desktop agent | Power users, families, Home Assistant integrators | TS/Go gateway + SQLite + per-channel hooks | **Widest channel support**; production Linux releases |
| **ZeroClaw** | Event-sourced runtime + WASM plugins + relay | Enterprise/embedded agents, multi-surface deployments | Runtime-owned sessions + immutable event log + transport adapters | **Architectural purity**: event sourcing, composable WASM, self-serve relay |
| **Hermes Agent** | Python daemon + Windows desktop + credential pooling | Developers on Windows, OpenRouter/Anthropic users | Python daemon + Electron desktop + model-scoped creds | **Windows-first desktop**; credential pool granularity |
| **NanoBot** | WebUI + provider marketplace + mobile PWA | Web-first users, provider integrators, mobile | React/TS WebUI + provider abstraction + PWA | **Provider ecosystem velocity** (4 PRs open); mobile UX |
| **CoPaw (QwenPaw)** | Console resilience + plugin governance + Chinese LLM integration | Chinese devs, Qwen/OpenCode/kimi-code users, plugin authors | React console + plugin runtime + ACP runners | **Governance hooks**; Chinese model runner parity |
| **LobsterAI** | Data reliability + monetization + UI modularity | Commercial/enterprise deployments | Electron + SQLite (hardened) + subscription IPC | **SQLite integrity obsession**; ¥0.01 trial monetization |
| **Moltis** | Heartbeat/cron scheduling + provider diversity | Scheduled/background agent workloads | Cron payload + provider registry (Groq PR) | **Heartbeat subsystem** (but regressions: active_hours ignored) |
| **NanoClaw** | Container security + CLI ops + provider skills | Containerized deployments, local-model users | Rust/Go CLI + container mounts + skill providers | **Mount-spec validation**; `ncl health` read-only check |
| **IronClaw** | Headless identity (IdentyClaw Passport) | CI/CD, serverless, embedded practitioners | Host-mediated loopback shim + policy exemptions | **Identity without browser extensions** |
| **PicoClaw** | DingTalk/Feishu/QQ gateway bots | Chinese enterprise IM bots | Go channel adapters | **DingTalk Stream Mode** (but panic regression unfixed) |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating / High Velocity
- **OpenClaw**: 841 items/24h, weekly releases, 210 merges. **Stabilization sprint**—P0/P1 regressions blocking upgrades.
- **ZeroClaw**: 62 items/24h, 4 RFCs accepted in batch, 6 merges. **Architecture lock-in phase**—implementation of accepted RFCs next.
- **Hermes Agent**: 73 items/24h, 15 merges, 9 Python 3.14 compat PRs. **Runtime compat push**—Windows desktop fragility persists.

### Tier 2: Active Feature Development
- **NanoBot**: 34 PRs/24h, 10 merges. **Refactor-heavy** (WebUI projection unification, provider onboarding). Security debt (#4072) outstanding.
- **CoPaw**: 39 items/24h, 3 merges, beta release. **Console hardening**—lazy-load crashes, DOM mutation errors, plugin governance hooks.
- **LobsterAI**: 7 merges in batch (6-month-old PRs). **Stabilization sprint**—storage integrity, Windows build, per-session MCP, monetization.

### Tier 3: Low Velocity / Maintenance Mode
- **Moltis**: 5 items/24h, 0 merges. **Heartbeat subsystem regressions** (active_hours, tool_controls, sub-agent tools) untriaged.
- **NanoClaw**: 4 PRs open, 0 merges. **Pre-merge review phase**—security, health CLI, sweep timeout, Pi provider.
- **IronClaw**: 1 PR (40 days open). **Niche identity integration**—awaiting maintainer review.

### Tier 4: Stalled / At Risk
- **PicoClaw**: 3 issues, 0 PRs. **Homepage TLS expired 8 days**; DingTalk panic regression unfixed. No maintainer response.
- **NullClaw / ZeptoClaw**: Zero activity.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence Across Projects | Strategic Implication |
|-------|--------------------------|------------------------|
| **Event-sourced session models replacing mutable messages** | ZeroClaw RFC #10526 (accepted), OpenClaw SQLite seam request #79902, Hermes task flow hooks #87362 | **Build on immutable event logs**—enables replay, branching, derived agents, audit. SQLite/Postgres event stores becoming standard. |
| **Transport-agnostic channel adapters (ACD/ACP/WebSocket)** | ZeroClaw RFC #9487 (runtime-owned sessions + adapters), OpenClaw multi-channel hooks, IronClaw host-mediated Passport, CoPaw ACP runners | **Decouple agent core from delivery surface**. Implement once, deploy to Slack/Telegram/Matrix/Email/ACP via adapter. |
| **WASM as universal plugin runtime** | ZeroClaw RFC #10076 (accepted), OpenClaw plugin SDK hooks (#87362), NanoBot skill providers | **WASM wins for sandboxed extensibility**. TypeScript/Rust/Go plugins with typed extension points replace JS eval. |
| **Delegation safety as blocker for production** | ZeroClaw P1 approval bypass (#10643), OpenClaw task flow hooks, Hermes Kanban pre-dispatch hooks | **Child loops must inherit approval context, cost tracking, and checkpointed progress**. Not optional for enterprise. |
| **Provider abstraction layer consolidating** | NanoBot 4 provider PRs (aimlapi, SenseNova, Telegram, email), ZeroClaw reasoning_effort passthrough (#10916), CoPaw OpenCode/kimi-code | **Standardize on OpenAI-compatible + reasoning + tool schema**. Provider-specific quirks handled in adapter, not core. |
| **Desktop Windows as second-class citizen** | Hermes 3 PRs for Windows update/perf, LobsterAI WSL build break, OpenClaw hardcoded `/Users/wangtao` path | **Invest in Windows CI/CD parity**—Git Bash vs WSL, signed installers, authenticated update channels. |
| **Monetization hooks appearing in core** | LobsterAI ¥0.01 trial + low-balance upsell (PR #2720), NanoBot provider marketplace | **Sustainability mechanics moving upstream**—trial gates, quota enforcement, subscriber filtering in core IPC. |
| **Security debt accumulating in sandbox/exec layers** | NanoBot 4-month symlink bypass, NanoClaw mount validation, ZeroClaw host launcher resolution | **Path canonicalization before exec/spawn is

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-20

## 1. Today's Overview
NanoBot shows **high development velocity** with 34 PRs updated in the last 24 hours (10 merged/closed, 24 open), indicating an active sprint focused on WebUI refactoring, security hardening, and provider ecosystem expansion. The project is in a **refactoring-heavy phase** — multiple PRs unify live/replay event projection, remove legacy compatibility code, and consolidate memory management. No new releases were cut today, suggesting changes are accumulating for a future batch release. Two issues were updated: a critical WebUI follow-up recovery bug (now fixed) and a long-standing security bypass in `ExecTool` workspace restrictions.

---

## 2. Releases
**No new releases published today.** The last release data is not provided in the current snapshot. Merged PRs (#5809, #5814, #5816, #5818) contain bug fixes and UI polish that will likely roll into the next patch/minor version.

---

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5809](https://github.com/HKUDS/nanobot/pull/5809) | **Bug Fix (P2)** | Discards stopped follow-up recovery journal on explicit `/stop` — fixes WebUI follow-ups re-queued after gateway restart ([Issue #5808](https://github.com/HKUDS/nanobot/issues/5808)) | **High** — resolves data integrity/replay bug |
| [#5814](https://github.com/HKUDS/nanobot/pull/5814) | **Bug Fix (P2)** | Removes intermediate answer footer gap in WebUI — fixes timestamp/footer reservation on non-terminal assistant slices | **Medium** — UI polish, regression coverage added |
| [#5816](https://github.com/HKUDS/nanobot/pull/5816) | **Feature/UI** | Polishes provider setup, unifies settings controls, aligns logos across surfaces | **Medium** — UX consistency across provider pickers |
| [#5818](https://github.com/HKUDS/nanobot/pull/5818) | **Chore** | Removes repository-level `CLAUDE.md` | **Low** — documentation cleanup |

**Net progress:** WebUI replay correctness hardened; settings/provider UI unified; legacy docs removed.

---

## 4. Community Hot Topics — Most Active Items
| Item | Type | Activity Signal | Underlying Need |
|------|------|-----------------|-----------------|
| [#5819](https://github.com/HKUDS/nanobot/pull/5819) | PR (Open) | **Refactor + Feature + Test** — unifies live/replay event projection via single TypeScript reducer | **Architectural consolidation**: eliminate divergence between live WebSocket and persisted replay paths; enable opt-in projection debugging |
| [#5823](https://github.com/HKUDS/nanobot/pull/5823) | PR (Open) | Follow-up to #5819 — keeps oversized replay traces on event projection | **Observability**: ensure large tool/progress traces remain inspectable in replay |
| [#4072](https://github.com/HKUDS/nanobot/issues/4072) | Issue (Open, since May) | **Security** — `ExecTool` workspace bypass via relative symlinks | **Sandbox hardening**: path resolution must canonicalize symlinks before shell execution |
| [#5821](https://github.com/HKUDS/nanobot/pull/5821) | PR (Open) | Labeled `[security, priority: p2]` — "added malicious skill" (title suggests red-team test or exploit demo) | **Security validation**: likely a test case for the symlink bypass or similar vector |
| [#5776](https://github.com/HKUDS/nanobot/pull/5776) | PR (Open) | **Enhancement** — adds search/filter to shared `ProviderPicker` used by Models, Web Search, Transcription, Image Gen | **Scale UX**: provider list growing; users need discovery/filtering |

**Pattern:** Core team (chengyongru) driving systematic WebUI architecture refactor; security surface under active review; provider ecosystem expanding rapidly (aimlapi, SenseNova, custom Telegram API).

---

## 5. Bugs & Stability — Today's Reports & Fixes
| Severity | Item | Status | Fix PR | Notes |
|----------|------|--------|--------|-------|
| **High** | [#5808](https://github.com/HKUDS/nanobot/issues/5808) — WebUI follow-ups re-queued after gateway restart due to recovery journal not cleared on `/stop` | **Closed** | [#5809](https://github.com/HKUDS/nanobot/pull/5809) (merged) | Fixed by snapshotting follow-up IDs at cancellation start |
| **High** | [#4072](https://github.com/HKUDS/nanobot/issues/4072) — `ExecTool` workspace restriction bypass via relative symlinks | **Open** (4 months) | [#5821](https://github.com/HKUDS/nanobot/pull/5821) (open, likely test) | **Unpatched** — shell guard doesn't resolve symlinks; critical for multi-tenant/untrusted code execution |
| **Medium** | [#5747](https://github.com/HKUDS/nanobot/issues/5747) (implied) — Partial tool progress lost at batch boundaries on process exit | **Open** | [#5748](https://github.com/HKUDS/nanobot/pull/5748) (open) | Persists progress at batch boundaries; prevents completed work from looking "unfinished" after crash |
| **Medium** | [#5402](https://github.com/HKUDS/nanobot/issues/5402) (implied) — Local tiktoken undercounts prompt tokens → consolidation never triggers | **Open** | [#5403](https://github.com/HKUDS/nanobot/pull/5403) (open) | Uses API-reported tokens; affects context window management |
| **Medium** | [#4819](https://github.com/HKUDS/nanobot/pull/4819) — `WeakValueDictionary` allows consolidation locks to be GC'd mid-session | **Open** (conflict) | [#4819](https://github.com/HKUDS/nanobot/pull/4819) (open) | Replaces with plain `dict` for stable lock identity |

**Stability signal:** Active fixes for recovery correctness, memory consolidation accuracy, and crash durability. Security bypass (#4072) remains the oldest unpatched high-severity item.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version | Rationale |
|--------|--------|-----------------------------|-----------|
| **Provider picker search/filter** | [#5776](https://github.com/HKUDS/nanobot/pull/5776) | **High** | Shared component across 4 settings panels; PR open 5 days, test-covered |
| **Custom Telegram Bot API base URL** | [#4919](https://github.com/HKUDS/nanobot/pull/4919) | **High** | Implements #4702; enterprise/self-hosted demand; open 2+ months |
| **aimlapi.com as built-in provider** | [#5666](https://github.com/HKUDS/nanobot/pull/5666) | **Medium-High** | Partner-driven, 1000+ models, 400k users; commercial partnership signal |
| **SenseNova (商汤日日新) provider** | [#5453](https://github.com/HKUDS/nanobot/pull/5453) | **Medium** | Chinese market expansion; OpenAI-compatible; open 1 month |
| **Model provider removal controls** | [#5352](https://github.com/HKUDS/nanobot/pull/5352) | **Medium** | UX completeness — users can add but not remove providers; blocks cleanup |
| **Email channel recipient-alias filtering** | [#5606](https://github.com/HKUDS/nanobot/pull/5606) | **Medium** | Shared mailbox support; niche but well-scoped |
| **iOS PWA tap/status-bar fixes** | [#5641](https://github.com/HKUDS/nanobot/pull/5641) | **Medium** | Mobile UX polish; 3 concrete Safari behaviors addressed |

**Roadmap theme:** Provider ecosystem explosion (4 new provider PRs open), WebUI component library maturation, mobile/PWA hardening, enterprise deployment knobs (Telegram, email aliases).

---

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **WebUI replay inconsistency** | #5808, #5819, #5823 — follow-ups reappear after restart; live vs replay projection diverge | Users lose trust in session history; debugging replays unreliable |
| **Provider management friction** | #5352 (removal controls), #5776 (search needed) | Growing provider list unmanageable; no cleanup path |
| **Mobile WebUI usability** | #5641 — iOS PWA double-tap, status bar, hover issues | Mobile-first users blocked on basic navigation |
| **Sandbox escape risk** | #4072 — symlink bypass in `ExecTool` | Security-conscious users cannot safely run untrusted code |
| **Context window surprises** | #5403 — consolidation never triggers due to token undercount | Long conversations silently exceed context; truncation at inference time |
| **Telegram self-hosting** | #4919 — hardcoded `api.telegram.org` | Enterprise/air-gapped deployments blocked |

**Satisfaction signals:** Rapid PR turnaround on WebUI bugs (#5808→#5809 in 2 days), active provider onboarding, mobile fixes prioritized. **Dissatisfaction:** Security issue stale 4 months; provider management incomplete.

---

## 8. Backlog Watch — Stale High-Value Items Needing Attention
| Item | Age | Type | Why It Matters | Blocker |
|------|-----|------|----------------|---------|
| [#4072](https://github.com/HKUDS/nanobot/issues/4072) | **~4 months** | **Security Bug** | Workspace sandbox bypass — fundamental to agent safety | Requires path canonicalization in shell guard; [#5821](https://github.com/HKUDS/nanobot/pull/5821) may be test vector |
| [#4819](https://github.com/HKUDS/nanobot/pull/4819) | **~2.5 months** | **Bug (Conflict)** | Consolidation locks GC'd → race conditions in memory consolidation | Marked `conflict`; needs rebase/resolution |
| [#4820](https://github.com/HKUDS/nanobot/pull/4820) | **~2.5 months** | **Bug** | Non-string URLs coerced into cache keys → cache pollution | Simple validation; low review bandwidth? |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | **~2 months** | **Feature** | Telegram self-hosted Bot API support — enterprise unlock | Well-scoped, tested; awaiting maintainer merge |
| [#5403](https://github.com/HKUDS/nanobot/pull/5403) | **~1 month** | **Bug (P1)** | Token consolidation broken for modern models — silent context overflow | Uses API tokens; critical for long-context reliability |
| [#5352](https://github.com/HKUDS/nanobot/pull/5352) | **~1.5 months** | **Feature** | Provider removal UI — completes provider lifecycle | Blocked by "provider still referenced" checks; needs UX for forced removal |

**Maintainer action recommended:** Prioritize #4072 (security), #5403 (P1 correctness), and #4819 (stability). Provider PRs (#4919, #5666, #5453) represent ecosystem growth — batch review/merge would signal openness.

---

## Project Health Indicators
| Metric | Signal |
|--------|--------|
| **PR Throughput** | 34 PRs/24h → **Very High** |
| **Merge Rate** | 10/34 (29%) merged today → **Healthy** |
| **Issue:PR Ratio** | 2:34 → **PR-driven development** (refactor-heavy) |
| **Security Responsiveness** | **Low** — 4-month-old bypass unpatched |
| **Refactor Momentum** | **High** — WebUI projection unification in progress |
| **Ecosystem Growth** | **Accelerating** — 4 provider PRs, Telegram/email enhancements |
| **Mobile/UX Investment** | **Active** — iOS PWA, provider picker search, settings unification |

**Bottom line:** NanoBot is in a **high-velocity refactoring & expansion phase**. Core architecture (WebUI replay, memory consolidation, provider framework) is being systematically modernized. The main risk is **security debt** (#4072) and **review bandwidth** for the growing provider/feature backlog. Next release will likely be a substantial "spring cleanup" batch.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-20

## 1. Today's Overview
Hermes Agent shows **high maintenance velocity** with 73 total items updated (23 issues, 50 PRs) in the last 24 hours, though only 2 issues remain open. The project is in a **stabilization phase** — no new releases, but aggressive bug-fixing across desktop (Windows), gateway/session management, CLI clarify timeouts, and Python 3.14 compatibility. A notable pattern: multiple duplicate issues/PRs indicate fragmented triage, while the volume of Python 3.14 ThreadPoolExecutor fixes (9+ PRs) signals a critical runtime compatibility push.

## 2. Releases
**No new releases today.** Last release data not provided in snapshot.

## 3. Project Progress — Merged/Closed PRs (15 today)
| PR | Area | Summary |
|----|------|---------|
| [#116650](https://github.com/NousResearch/hermes-agent/pull/116650) | CLI/OpenRouter | Fix: accept live OpenRouter models omitted from picker catalog |
| [#116654](https://github.com/NousResearch/hermes-agent/pull/116654) | Gateway (P1) | Fix: startup-restore replay failure no longer wedges inbound gate |
| [#116655](https://github.com/NousResearch/hermes-agent/pull/116655) | CLI/Windows | Fix: stale git pack temps actually removed on Windows; skipped files logged at WARNING |
| [#116657](https://github.com/NousResearch/hermes-agent/pull/116657) | Gateway | Fix: leaked `<|eos|>` control tokens no longer sent as chat messages |
| [#116658](https://github.com/NousResearch/hermes-agent/pull/116658) | MCP/Auth (P2) | Fix: browser OAuth callback registered even when browser fetches favicon.ico |
| [#116662](https://github.com/NousResearch/hermes-agent/pull/116662) | Desktop/Windows | Fix: hold backend-start gate across Windows hand-off wrapper's dead marker (update abort) |
| [#116661](https://github.com/NousResearch/hermes-agent/pull/116661) | Context | Fix: re-read configured context ceiling on every live model/provider switch |
| [#116663](https://github.com/NousResearch/hermes-agent/pull/116663) | Kanban | Feat: pre-dispatch/pre-create plugin hooks whose directive is honoured |
| [#116664](https://github.com/NousResearch/hermes-agent/pull/116664) | Plugin Catalog | Bump aihubmix pin (docs-only) |
| [#47634](https://github.com/NousResearch/hermes-agent/pull/47634) | Tools/Python 3.14 | Fix: daemon async workers compat with Python 3.14 |
| [#69209](https://github.com/NousResearch/hermes-agent/pull/69209) | Tools/Python 3.14 | Fix: DaemonThreadPoolExecutor compat with CPython 3.14 internals |
| [#69311](https://github.com/NousResearch/hermes-agent/pull/69311) | Tools/Python 3.14 | Fix: DaemonThreadPoolExecutor compat with Python 3.14 |
| [#76817](https://github.com/NousResearch/hermes-agent/pull/76817) | Tools/Python 3.14 | Fix: support Python 3.14 ThreadPoolExecutor internals |
| [#81118](https://github.com/NousResearch/hermes-agent/pull/81118) | Tools/Python 3.14 | Fix: support Python 3.14 WorkerContext API |
| [#83227](https://github.com/NousResearch/hermes-agent/pull/83227) | Tools/Python 3.14 | Fix: adapt daemon_pool to Python 3.14 ThreadPoolExecutor internals |

**Key themes**: Python 3.14 runtime compatibility (9 PRs), Windows desktop update reliability, gateway message sanitization, and plugin hook extensibility.

## 4. Community Hot Topics
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#61451](https://github.com/NousResearch/hermes-agent/issues/61451) | Issue (Closed) | 5 | **Credential pool granularity**: Model-scoped 429 exhausts entire Anthropic credential, blocking other models with free quota |
| [#83058](https://github.com/NousResearch/hermes-agent/issues/83058) | Issue (Closed) | 4 | **Desktop UX**: Hard-coded 3-chat preview limit in project sidebar; no settings control |
| [#72688](https://github.com/NousResearch/hermes-agent/issues/72688) | Issue (Closed) | 3 | **CLI timeout regression**: Clarify timeout falls back to legacy 120s despite unified config |
| [#108804](https://github.com/NousResearch/hermes-agent/issues/108804) | Issue (Closed) | 3 | **Desktop update auth**: Anonymous GitHub API calls hit 403 rate limits for shared/datacenter IPs |
| [#116483](https://github.com/NousResearch/hermes-agent/issues/116483) | Issue (Open) | 2 | **Desktop clarify tool broken**: Question form never renders; user sees only spinner, answers return empty |

**Analysis**: Users are hitting **credential management blind spots** (Anthropic quota), **hard-coded UI limits** (sidebar preview), and **config regression** (timeout fallback). The desktop clarify tool regression (#116483) is the only high-severity open issue with user-facing impact.

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **P1** | [#116654](https://github.com/NousResearch/hermes-agent/pull/116654): Gateway startup-restore replay wedges inbound gate | Fixed (PR merged) | ✅ #116654 |
| **P2** | [#116483](https://github.com/NousResearch/hermes-agent/issues/116483): Desktop clarify tool form never renders | **Open** | ❌ None yet |
| **P2** | [#116658](https://github.com/NousResearch/hermes-agent/pull/116658): MCP OAuth callback fails on favicon.ico fetch | Fixed (PR open) | ✅ #116658 |
| **P2** | [#116662](https://github.com/NousResearch/hermes-agent/pull/116662): Windows update aborts — backend-start gate gap | Fixed (PR open) | ✅ #116662 |
| **P2** | [#116657](https://github.com/NousResearch/hermes-agent/pull/116657): Leaked `<|eos|>` tokens sent as chat messages | Fixed (PR open) | ✅ #116657 |
| **P2** | [#116655](https://github.com/NousResearch/hermes-agent/pull/116655): Stale git pack temps not removed on Windows | Fixed (PR open) | ✅ #116655 |
| **P2** | [#116661](https://github.com/NousResearch/hermes-agent/pull/116661): Context ceiling not re-read on model/provider switch | Fixed (PR open) | ✅ #116661 |
| **P3** | [#116274](https://github.com/NousResearch/hermes-agent/issues/116274): Desktop extremely slow/laggy on Windows 10 | Closed (needs-repro) | ❌ |
| **P3** | [#116194](https://github.com/NousResearch/hermes-agent/issues/116194): httpx2/httpcore2 pinned at 2.7.0 with 12 OSV advisories | Closed (duplicate) | ❌ |

**Critical gap**: Desktop clarify tool regression (#116483) has no fix PR despite being P2 and user-visible. Windows performance (#116274) closed as needs-repro without resolution.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Cross-process session ownership API** | [#116651](https://github.com/NousResearch/hermes-agent/issues/116651) (Open, P3) | Medium — architectural, needs design decision |
| **Kanban pre-dispatch/pre-create hooks** | [#116663](https://github.com/NousResearch/hermes-agent/pull/116663) (Open PR) | High — PR ready, extends plugin extensibility |
| **Unified package manager / bundles** | [#102765](https://github.com/NousResearch/hermes-agent/pull/102765) (Open, large scope) | Low-Medium — major refactor, needs decision |
| **Desktop sidebar chat preview setting** | [#83058](https://github.com/NousResearch/hermes-agent/issues/83058) (Closed duplicate) | High — user demand clear, simple config addition |
| **Credential pool per-model isolation** | [#61451](https://github.com/NousResearch/hermes-agent/issues/61451) (Closed) | Medium — requires credential_pool redesign |

**Prediction**: Kanban plugin hooks (#116663) and desktop sidebar config will likely land next; unified package manager (#102765) is a multi-cycle effort.

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Windows desktop instability** | #116274 (lag/freezes), #116662 (update aborts), #76965 (install path) | High — blocks adoption on Windows |
| **Silent config regressions** | #72688, #96208 (clarify timeout ignored); #116196 (setup --quick misdetects existing install) | Medium — erodes trust in config system |
| **Credential/auth opacity** | #61451 (Anthropic 429 kills all models), #116053 (Gemini key misrouted), #116174 (no access token) | High — users locked out without diagnostics |
| **Session/profile cross-contamination** | #59566 (sessions persist to wrong profile), #65133 (session_search returns wrong profile) | Medium — data integrity risk for multi-profile users |
| **Update mechanism fragility** | #108804 (anonymous GitHub 403), #116497 (post-update traceback), #116614 (fleet_restart_pending marker) | High — updates fail silently or noisily |

**Overall sentiment**: Users encounter **sharp edges in desktop Windows, config system, and credential handling** — core daily-driver paths. The volume of duplicate issues suggests triage bottlenecks.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#116483](https://github.com/NousResearch/hermes-agent/issues/116483) | 1 day (Open) | **P2 desktop clarify tool broken** — no fix PR, user-facing regression |
| [#116651](https://github.com/NousResearch/hermes-agent/issues/116651) | 0 days (Open) | **Session ownership API** — architectural, enables remote clients |
| [#102765](https://github.com/NousResearch/hermes-agent/pull/102765) | 16 days (Open) | **Unified package manager** — 50+ file change, needs architecture review |
| [#61451](https://github.com/NousResearch/hermes-agent/issues/61451) | 73 days (Closed) | **Credential pool design flaw** — closed but root cause unaddressed |
| [#116274](https://github.com/NousResearch/hermes-agent/issues/116274) | 1 day (Closed) | **Windows 10 perf** — closed as needs-repro; likely under-investigated |
| [#116194](https://github.com/NousResearch/hermes-agent/issues/116194) | 1 day (Closed) | **12 OSV advisories in pinned deps** — closed duplicate; security debt |

**Recommendation**: Prioritize #116483 (desktop clarify regression) and #116194 (security advisories) for immediate triage. The Python 3.14 compat PRs should be consolidated — 9 parallel fixes indicate coordination gap.

---
*Digest generated from GitHub data snapshot 2026-09-20. All links point to NousResearch/hermes-agent.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-20

## 1. Today's Overview
PicoClaw saw modest issue-tracking activity in the past 24 hours with three issues updated—two open and one closed—but **zero pull-request activity and no new releases**. The most pressing item is a **critical infrastructure outage**: the project’s primary domain (picoclaw.io) has been offline since 2026-09-10 due to an expired TLS certificate (#3377). Simultaneously, a **long-standing stability regression** in the DingTalk gateway (panic on stream-SDK reconnect) has resurfaced in v0.3.1 (#3382), confirming that the fix attempted in #973 was incomplete. Overall project velocity appears low; the backlog contains high-severity items with no visible PR mitigation in flight.

## 2. Releases
**No new releases** published today or in the recent window covered by the data.

## 3. Project Progress
- **Merged/Closed PRs today:** 0  
- **Closed Issues today:** #973 (marked closed 2026-03-02, last comment 2026-09-20) — historical DingTalk/QQ overnight panic; however, #3382 indicates the root cause persists in v0.3.1.  
- **No feature advancement or bug-fix PRs** observed in the last 24 h.

## 4. Community Hot Topics
| Issue | Status | Activity | Core Concern |
|-------|--------|----------|--------------|
| [#3377](https://github.com/sipeed/picoclaw/issues/3377) | OPEN | 👍 1, 1 comment | **CRITICAL**: Project homepage & documentation site completely inaccessible (TLS cert expired 2026-09-10). Blocks onboarding, credibility, and SEO. |
| [#3382](https://github.com/sipeed/picoclaw/issues/3382) | OPEN | 0 comments | **HIGH**: DingTalk Stream SDK reconnect still triggers `panic: send on closed channel` (client.go:161) in v0.3.1, same stack as #973. |
| [#973](https://github.com/sipeed/picoclaw/issues/973) | CLOSED | 3 comments | Historical reference for the DingTalk panic; user confirms regression in #3382. |

**Underlying needs:**  
- Immediate DevOps action to renew/automate TLS certs (Let’s Encrypt + cron or ACME).  
- Robust reconnection logic in the DingTalk adapter (channel lifecycle guards, context cancellation handling).  
- Maintainer acknowledgment and triage—both open issues have zero maintainer replies.

## 5. Bugs & Stability
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **Critical (infra)** | [#3377](https://github.com/sipeed/picoclaw/issues/3377) | picoclaw.io TLS cert expired 2026-09-10; site down for all browsers. | No |
| **High (runtime panic)** | [#3382](https://github.com/sipeed/picoclaw/issues/3382) | DingTalk Stream Mode panic on SDK reconnect (`send on closed channel` at client.go:161) in v0.3.1. | No |
| **Medium (historical)** | [#973](https://github.com/sipeed/picoclaw/issues/973) | Same panic class; closed but regression confirmed. | N/A (closed) |

## 6. Feature Requests & Roadmap Signals
No explicit feature requests in today’s update set. However, the recurrence of the DingTalk panic suggests an **implicit roadmap need**:
- **Resilient gateway framework**: generic reconnection/back-off, health-check endpoints, and graceful degradation for all channel adapters (DingTalk, Feishu, QQ, etc.).
- **Automated certificate management** (Certbot/ACME) to prevent future homepage outages.

## 7. User Feedback Summary
- **Pain points:**  
  1. Cannot access official docs/site (cert expiration).  
  2. Production bots crash overnight on DingTalk reconnect—unreliable for 24/7 workloads.  
- **Use cases:** Long-lived bot processes on DingTalk Stream Mode (enterprise internal tools).  
- **Sentiment:** Frustration over regressions (#3382 explicitly calls out “same panic reported in #973”) and silence on critical infra issue (#3377 has 1 👍 but no maintainer response after 8 days).

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3377](https://github.com/sipeed/picoclaw/issues/3377) | 8 days (created 2026-09-12) | **Project homepage dead**—hurts adoption, trust, SEO. Zero maintainer acknowledgment. |
| [#3382](https://github.com/sipeed/picoclaw/issues/3382) | 0 days (created today) | **Regression in latest release** (v0.3.1); blocks DingTalk production use. No triage, no fix PR. |
| [#973](https://github.com/sipeed/picoclaw/issues/973) | ~6.5 months | Closed but **root cause unfixed**; serves as regression anchor. |

---
*Digest generated from GitHub data as of 2026-09-20. Links point to live issues on github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-20

## 1. Today's Overview
NanoClaw shows **low issue activity** but **steady pull-request churn** over the last 24 hours. Four PRs were updated—all remain open—spanning a new provider integration, a configurable idle-timeout fix, a read-only CLI health check, and a container-mount security hardening. No releases, issue updates, or merged PRs occurred today, indicating the project is in a **pre-merge review/iteration phase** rather than a delivery sprint. Contributor engagement appears modest (zero comments/reactions on all four PRs), suggesting either asynchronous review cadence or limited reviewer bandwidth.

## 2. Releases
**None** — no new versions published today.

## 3. Project Progress
**No PRs merged or closed today.** All four updated PRs remain in open review:
- [#3857](https://github.com/nanocoai/nanoclaw/pull/3857) — Pi agent provider skill (feature)
- [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) — Configurable sweep idle timeout (bug fix)
- [#3856](https://github.com/nanocoai/nanoclaw/pull/3856) — `ncl health` read-only CLI command (feature)
- [#3680](https://github.com/nanocoai/nanoclaw/pull/3680) — Mount-spec validation bypass fix (security)

## 4. Community Hot Topics
No issues or PRs received comments or reactions in the last 24h. The four open PRs are the only active discussions; all have **0 comments / 0 👍**. This signals either:
- Reviewers have not yet engaged (typical for weekend/early-week cadence), or
- Contributors are self-reviewing before requesting formal review.

**Underlying needs visible in the PR set:**
- **Operational observability** (`ncl health` — works when host is down)
- **Runtime stability for slow local models** (configurable sweep timeout)
- **Supply-chain/container hardening** (mount validation bypass)
- **Provider ecosystem growth** (Pi agent integration)

## 5. Bugs & Stability
| PR | Severity | Summary | Fix Status |
|----|----------|---------|------------|
| [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) | **Medium** | Hardcoded 30-min sweep timeout kills slow local-model turns mid-generation; heartbeat only fires on provider stream events. | **Fix PR open** — makes timeout configurable & applies to both kill paths. |
| [#3680](https://github.com/nanocoai/nanoclaw/pull/3680) | **Medium-High** (security) | `allowlisted-extra` mount bypass in `validateSpec` could permit unintended host paths into containers. | **Fix PR open** — closes the validation gap. |

No new bug reports or regressions filed today.

## 6. Feature Requests & Roadmap Signals
| PR | Feature | Likelihood for Next Release |
|----|---------|------------------------------|
| [#3857](https://github.com/nanocoai/nanoclaw/pull/3857) | **Pi agent provider** (`/add-pi` skill) — expands provider marketplace | High — pure additive skill, follows existing provider pattern |
| [#3856](https://github.com/nanocoai/nanoclaw/pull/3856) | **`ncl health`** — zero-dependency, read-only health check (closes #2504) | High — addresses long-standing ops gap, no runtime deps |
| [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) | **Configurable sweep idle timeout** | Medium — bug fix with config surface; may wait for #3646 test verification |
| [#3680](https://github.com/nanocoai/nanoclaw/pull/3680) | **Mount-spec validation hardening** | High — security fix, low risk, likely fast-tracked |

**Predicted next-version cluster:** CLI health command + mount security fix + Pi provider (all low-risk, additive). Configurable sweep timeout may follow once soak-tested.

## 7. User Feedback Summary
No direct user feedback (issues, discussions, or PR comments) surfaced today. The PR authors are internal/regular contributors (`Z-Mackintosh`, `glifocat`, `prathish-ks`). Pain points inferred from PR descriptions:
- **Operators** need health checks that survive host downtime (`ncl health`).
- **Local-model users** suffer false-positive sweep kills on slow backends.
- **Security-conscious deployers** require airtight container mount validation.
- **Integrators** want more provider skills (Pi agent) without core changes.

## 8. Backlog Watch
| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) | 22 days | Medium | Stalls local-model workloads; fix ready but unmerged. |
| [#3680](https://github.com/nanocoai/nanoclaw/pull/3680) | 21 days | Medium-High | Security boundary bypass; should be prioritized for merge. |
| [#2504](https://github.com/nanocoai/nanoclaw/issues/2504) (closed by #3856) | — | — | Long-standing ops request; resolution in review via #3856. |

**Maintainer action suggested:** Assign reviewers to #3646 and #3680 this week; both are mature fixes with clear scope. Triaging #3857 and #3856 for quick merge would unblock provider/ops workstreams.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-20

## 1. Today's Overview
IronClaw shows **minimal activity** in the last 24 hours: zero issue updates, zero releases, and only **one open pull request** (#7499) receiving an update on 2026-09-19. The project appears to be in a quiet maintenance phase with no new bug reports, feature requests, or merged contributions today. The sole active PR introduces a practitioner-focused host kit for IdentyClaw Passport integration, suggesting ongoing work on identity/authentication extensibility. Overall project health signals low community velocity but steady, targeted development.

## 2. Releases
**No new releases** published today or in the recent window. The latest release information is not provided in the data feed.

## 3. Project Progress
**Merged/Closed PRs today:** 0  
**Open PRs updated today:** 1  

| PR | Title | Status | Scope | Notes |
|----|-------|--------|-------|-------|
| [#7499](https://github.com/nearai/ironclaw/pull/7499) | feat(identyclaw): host-mediated Passport for practitioners | Open (updated 2026-09-19) | docs, dependencies | Adds a thin host seam (`builtin.idcp` + policy grant/AskAlways exemption) enabling processless IronClaw agents to call IdentyClaw Passport without shell or installable extension. Includes a practitioner host kit under `deploy/identyclaw/` (Node CLI + optional loopback helper on `:3921`). Authored by new contributor `discernible-io`. Size: XL, Risk: low. |

No merges or closes recorded today; the PR remains under review.

## 4. Community Hot Topics
Only one active item in the last 24h:

- **PR #7499** — *host-mediated Passport for practitioners*  
  - **Comments:** undefined (data not available) | **Reactions:** 👍 0  
  - **Underlying need:** Practitioners want to invoke IdentyClaw Passport from headless/agent contexts without managing browser extensions or shell subprocesses. The host-mediated design addresses deployment friction in CI/CD, serverless, and embedded-agent scenarios.

No issues were updated, so no community-driven bug reports or feature discussions surfaced today.

## 5. Bugs & Stability
**No new bugs, crashes, or regressions reported** in the last 24 hours. Zero issues opened or updated. No fix PRs are visible in today's data.

## 6. Feature Requests & Roadmap Signals
The single active PR (#7499) is the strongest roadmap signal:

- **Host-mediated identity (IdentyClaw Passport)** — Enabling agent-to-identity-service calls via a local host shim (loopback on `:3921`) rather than browser extension or CLI.  
- **Practitioner host kit** — Packaging a Node-based CLI + helper for easy adoption (`deploy/identyclaw/`).  
- **Policy/AskAlways exemption** — Suggests fine-grained permission model for automated flows.

**Prediction:** If merged, this capability will likely ship in the next minor release (e.g., `v0.x+1`) and may be followed by:
- First-class support for other identity providers via the same host seam pattern.
- Expanded `deploy/` kits for other ecosystems (Python, Go, WASM).
- Documentation and examples for CI/CD integration (GitHub Actions, GitLab CI).

## 7. User Feedback Summary
**No direct user feedback** (issues, discussions, or reactions) captured in the last 24h. The sole PR originates from a new contributor (`discernible-io`), indicating **external practitioner interest** in headless identity workflows. Absence of issues suggests either:
- Stable current release with low friction, or
- Low community visibility / reporting barrier.

## 8. Backlog Watch
No long-unanswered issues or stale PRs are visible in today's dataset (total issues: 0, total PRs: 1). The only open PR (#7499) was created **2026-08-11** and updated **2026-09-19** — **40 days open** with no apparent maintainer response yet. Given its XL size and new-contributor status, it warrants **maintainer triage** to:
- Confirm architectural fit for `builtin.idcp` host seam.
- Review security implications of loopback helper + policy exemption.
- Guide contributor on test coverage and docs expectations.

---

**Data Source:** GitHub API snapshot for `nearai/ironclaw` (issues/PRs updated 2026-09-19 → 2026-09-20).  
**Next Digest:** 2026-09-21.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-20

---

## 1. Today's Overview
LobsterAI shows **high maintenance velocity** with **7 PRs merged/closed in the last 24 hours** despite zero new releases. The merged work spans critical storage-layer fixes, Windows build stabilization, a major UI refactor, per-session MCP control, subscription monetization features, and a scheduled-task migration bug fix. Only 1 issue remains open (#1014, a low-priority discoverability request), while a severe SQLite integrity issue (#1071) was resolved via PR #1072. The project is in active stabilization/refinement mode with strong focus on data reliability and cross-platform robustness.

---

## 2. Releases
**No new releases published today.**

---

## 3. Project Progress — Merged/Closed PRs (7)

| PR | Title | Area | Key Changes |
|----|-------|------|-------------|
| [#2720](https://github.com/netease-youdao/LobsterAI/pull/2720) | **feat(subscription): add one-cent trial and low-credit purchase offers** | renderer, docs, main, cowork | • ¥0.01 standard-tier trial via main-process IPC with privacy/auth/eligibility gating<br>• Frequency capping: weekly show, auto-hide after 3 dismissals<br>• Low-balance upsell in sidebar, session quota toast, model picker — supports countdown, token passthrough, subscription vs. top-up routing, subscriber filtering<br>• Full analytics: impression, dismiss, subscribe-click, recharge-click |
| [#1069](https://github.com/netease-youdao/LobsterAI/pull/1069) | **refactor: split CoworkSessionDetail (2100+ lines) for maintainability & render perf** | renderer | • Extracted `CoworkSessionDetail.types.ts`, `hooks/`, `components/` (MessageList, InputArea, Toolbar, etc.)<br>• Isolated pure logic for unit testing; reduced unnecessary re-renders during streaming |
| [#1070](https://github.com/netease-youdao/LobsterAI/pull/1070) | **feat(cowork): per-session MCP server toggles** | main, renderer, cowork | • Popover in session toolbar lists all MCP servers with toggles<br>• Persisted per-session in DB; enforced at `McpBridgeServer` request-interception layer |
| [#1072](https://github.com/netease-youdao/LobsterAI/pull/1072) | **fix: SQLite storage layer — 3 integrity/reliability defects** | main | • Enabled `PRAGMA foreign_keys = ON` in `sqliteStore.ts` so `ON DELETE CASCADE` works<br>• Added defensive explicit child-row deletion in `coworkStore.deleteSession(s)`<br>• Made `save()` atomic via temp-file + rename; fixed `storeInitPromise` timeout leaving store permanently broken |
| [#1075](https://github.com/netease-youdao/LobsterAI/pull/1075) | **fix: Windows build fails when WSL is installed** | scripts | • Forced Git Bash (MSYS2) over WSL bash in `run-build-openclaw-runtime.cjs` |
| [#1076](https://github.com/netease-youdao/LobsterAI/pull/1076) | **fix(scheduled-task): migration marks success despite JSONL write failure → data loss** | scheduled-task | • Added write-error counter; only marks migration complete if all writes succeed |
| [#1077](https://github.com/netease-youdao/LobsterAI/pull/1077) | **fix: auto-refresh task list after deleting current agent** | renderer | • Sidebar task list now reloads when active agent is deleted (previously showed stale deleted-agent tasks) |

> **Note:** PRs #1069–#1077 were authored 2026-03-30 and merged today (2026-09-19), indicating a batch stabilization push. PR #2720 is fresh (created & merged 2026-09-20).

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#1071](https://github.com/netease-youdao/LobsterAI/issues/1071) (CLOSED) | 2 comments, 0 👍 | **Critical data-integrity audit** — uncovered 3 SQLite defects causing orphan messages, DB corruption on crash, and permanent init failure. Resolved by PR #1072. High technical depth; signals maintainer commitment to storage reliability. |
| [#1014](https://github.com/netease-youdao/LobsterAI/issues/1014) (OPEN, stale) | 1 comment, 0 👍 | External bot (Dispatch) requesting description metadata for skill discoverability. Low community traction; likely low priority. |

**Underlying need:** Users/contributors prioritize **data safety** and **cross-platform stability** over discoverability. The stale label on #1014 suggests maintainers triage aggressively.

---

## 5. Bugs & Stability — Reported/Fixed Today

| Severity | Issue/PR | Summary | Fix Status |
|----------|----------|---------|------------|
| **Critical** | [#1071](https://github.com/netease-youdao/LobsterAI/issues/1071) / [#1072](https://github.com/netease-youdao/LobsterAI/pull/1072) | SQLite `ON DELETE CASCADE` inert → orphan messages; non-atomic `save()` → DB corruption on crash; init timeout → permanent store failure | ✅ **Fixed & merged** (PR #1072) |
| **High** | [#1076](https://github.com/netease-youdao/LobsterAI/pull/1076) | Scheduled-task migration marks complete even if JSONL write fails → irreversible data loss | ✅ **Fixed & merged** |
| **Medium** | [#1075](https://github.com/netease-youdao/LobsterAI/pull/1075) | Windows build breaks when WSL present (wrong bash path) | ✅ **Fixed & merged** |
| **Low** | [#1077](https://github.com/netease-youdao/LobsterAI/pull/1077) | Deleting active agent leaves stale task list in sidebar | ✅ **Fixed & merged** |

**No new bugs reported today.** All known critical/high issues have fix PRs merged.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Per-session MCP toggles** | PR #1070 (merged) | ✅ **Already landed** — granular tool control per conversation |
| **Monetization: micro-trial (¥0.01) & contextual low-balance upsell** | PR #2720 (merged today) | ✅ **Landed** — aggressive growth experiment; expect A/B iteration |
| **CoworkSessionDetail modularization** | PR #1069 (merged) | ✅ **Landed** — enables faster UI iteration, test coverage |
| **Dispatch skill metadata** | Issue #1014 (open, stale) | ❌ Low — external request, no maintainer engagement |
| **Windows/Wsl build hardening** | PR #1075 (merged) | ✅ **Landed** — suggests CI/CD matrix expansion |

**Prediction:** Next version (likely v0.x patch) will bundle the storage fixes, MCP per-session, subscription trial, and UI refactor. Roadmap leans toward **enterprise-grade reliability + monetization hooks**.

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|-----------------------|----------|-----------|
| **Data loss / corruption risk** | #1071 audit found 3 production-grade defects | 😟 **High anxiety** — resolved but highlights past fragility |
| **Windows dev environment friction** | #1075 WSL conflict breaks build | 😕 **Frustration** — fixed, but indicates onboarding gaps |
| **Agent-switching UX** | #1077 stale task list after agent deletion | 😐 **Minor annoyance** — fixed |
| **MCP rigidity** | #1070 global-only MCP config | 😊 **Satisfied** — per-session control delivered |
| **Discoverability** | #1014 Dispatch bot request | 🤷 **Neutral** — not a user-driven ask |

**Overall:** Users (or internal QA) are surfacing **foundational reliability issues**; maintainers responding decisively. Monetization features suggest commercial pressure.

---

## 8. Backlog Watch — Stale/Unanswered Items Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1014](https://github.com/netease-youdao/LobsterAI/issues/1014) *Add description for Dispatch discoverability* | 175 days (created 2026-03-29) | Low priority, but trivial to resolve (add `description` field to skill manifest). Closing or fixing would clean stale queue. |
| *No other stale issues/PRs with recent activity* — all March-authored PRs were merged today. |

**Recommendation:** Triager should close #1014 with "wontfix" or merge a 2-line doc update. Backlog is otherwise clean.

---

## Project Health Indicators
| Metric | Signal |
|--------|--------|
| **Merge velocity** | 🟢 Very high (7 PRs/24h) |
| **Critical bug resolution** | 🟢 Same-day fix for storage corruption |
| **Stale cleanup** | 🟢 Batch-merged 6 month-old PRs |
| **Release cadence** | 🟡 No release despite heavy merge activity — may need cut |
| **Community engagement** | 🟡 Low (0 👍, few comments) — primarily internal/maintainer driven |

**Bottom line:** LobsterAI is in a **high-quality stabilization sprint** with strong engineering discipline. Next step: cut a release to ship the accumulated fixes.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-20

## 1. Today's Overview
Moltis shows **moderate maintenance activity** with 4 issue updates and 1 PR in the last 24 hours, but **no merged work or releases**. The issue queue reveals a cluster of **heartbeat subsystem bugs** — active hours enforcement is documented but unimplemented, tool controls cannot be configured, and sub-agent tool handling has a logic regression. The sole open PR (#1276) is a substantial provider integration (Groq) with schema fixes, suggesting the project is expanding LLM provider support while core scheduling features have latent defects. No merges today indicates either review bottlenecks or maintainers focusing on triage.

## 2. Releases
**No new releases** in the last 24 hours. The latest tagged release remains `20260414.02` (referenced in #1278).

## 3. Project Progress
**No PRs merged or closed today.** The only active PR is:
- **#1276** — *Groq as a first-class provider, strict zero-parameter tool schemas, and mutation results that parse* ([PR #1276](https://github.com/moltis-org/moltis/pull/1276))  
  Adds Groq as a native OpenAI-compatible provider with model discovery, marks Groq Compound as non-tool-capable, enforces strict zero-parameter tool schemas, and fixes mutation result parsing. This is a **feature expansion** PR, not a bug fix.

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| **#1278** [CLOSED] *heartbeat.active_hours documented but never evaluated* ([#1278](https://github.com/moltis-org/moltis/issues/1278)) | 1 comment, closed same day | **Documentation–implementation drift**: config option exists in docs and code (`is_within_active_hours`) but has **zero callers**. Closed as duplicate of #1205. |
| **#1205** [OPEN] *Heartbeat ignores active hours, runs continuously* ([#1205](https://github.com/moltis-org/moltis/issues/1205)) | 1 comment, 34 days open | **Critical scheduling bug**: users expect heartbeats to respect `active_hours` window; instead they run 24/7. Root cause confirmed in #1278. |
| **#1279** [OPEN] *Cannot set tool_controls on heartbeat — hard-coded Default::default()* ([#1279](https://github.com/moltis-org/moltis/issues/1279)) | 0 comments, new | **Configuration gap**: `CronPayload::AgentTurn` supports `tool_controls` but registration path discards it, forcing defaults. |
| **#1277** [OPEN] *spawn_agent treats `active_tools: []` as empty whitelist — sub-agent gets zero tools* ([#1277](https://github.com/moltis-org/moltis/issues/1277)) | 0 comments, new | **Logic regression**: empty array should mean "inherit all" but is treated as explicit deny-list, breaking sub-agent tool access. |

**Pattern**: All 4 issues touch the **heartbeat/cron/sub-agent execution path** — suggesting this subsystem has insufficient test coverage for config-driven behavior.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | #1205 / #1278: Heartbeat ignores `active_hours` — runs continuously | Open (dup closed) | No |
| **High** | #1277: `spawn_agent` with `active_tools: []` grants zero tools (should inherit) | Open | No |
| **Medium** | #1279: `tool_controls` ignored on heartbeat registration — hard-coded defaults | Open | No |

**No fix PRs exist for any of these.** The heartbeat subsystem has **three concurrent regressions** affecting scheduling, tool policy, and sub-agent delegation.

## 6. Feature Requests & Roadmap Signals
- **Groq first-class support** (#1276) — actively in PR, likely next release candidate. Adds provider diversity and fixes tool schema strictness.
- **Implicit: heartbeat config completeness** — users expect `active_hours` and `tool_controls` to work per docs; fixing these will close the config–reality gap.
- **Sub-agent tool inheritance semantics** — #1277 suggests the current "empty array = no tools" design contradicts user mental model; a semantic change (empty = inherit) may be needed.

**Prediction**: Next version will likely ship Groq support (#1276) plus at least one heartbeat bug fix (#1205 or #1277) given their user-facing impact.

## 7. User Feedback Summary
- **Pain point**: "Configured active hours are ignored" (#1205) — users scheduling maintenance windows find heartbeats running outside them, wasting quota/API calls.
- **Pain point**: "Cannot restrict tools on scheduled heartbeats" (#1279) — limits security/least-privilege use cases for cron-triggered agents.
- **Pain point**: "Sub-agents lose all tools when I pass empty list" (#1277) — breaks compositional agent workflows; users expect `[]` to mean "use parent's tools."
- **Sentiment**: Frustration with **documentation–behavior mismatch** (two issues cite docs describing unimplemented behavior). No positive feedback signals in this window.

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| **#1205** Heartbeat ignores active hours | 34 days | High-user-impact scheduling bug; root cause identified (#1278) but no fix PR. Blocks reliable cron usage. |
| **#1276** Groq provider + schema fixes | 1 day | Large PR touching provider registry, tool schemas, mutation parsing — needs thorough review before merge. |
| **#1277** / **#1279** Sub-agent & heartbeat tool control bugs | 1 day | New but fundamental to agent delegation & scheduled execution; no maintainer triage visible yet. |

**Maintainer attention needed**: Triaging #1205 (oldest, highest impact) and reviewing #1276 (large surface area). The heartbeat subsystem appears to need a focused test/fix sprint.

---

*Data source: GitHub API (issues, PRs, releases) for moltis-org/moltis, 2026-09-19 00:00–23:59 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-09-20

---

## 1. Today's Overview

CoPaw (QwenPaw) shows **very high development velocity** with 16 issues and 23 PRs updated in the last 24 hours, alongside a new beta release (v2.2.2-beta.3). The issue spectrum is dominated by **console stability regressions** (lazy-page recovery, chat-stream death, DOM-mutation crashes), **provider integration gaps** (OpenCode, kimi-code, MCP OAuth), and **plugin/governance extensibility requests**. Three PRs were merged/closed today, including a version bump to 2.2.2b4 and CI stabilization for Windows. The project is in active beta hardening with multiple first-time contributors submitting fixes.

---

## 2. Releases

### v2.2.2-beta.3 (Beta) — [Release Page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2-beta.3)
**Changes:**
- `fix(console)`: Restore assistant response actions ([#7851](https://github.com/agentscope-ai/QwenPaw/pull/7851))
- `fix(e2e)`: Re-anchor console selectors broken by #7502 redesign; harden session-list assertions ([#7502](https://github.com/agentscope-ai/QwenPaw/pull/7502))

**Notes:** Beta verification issue [#7891](https://github.com/agentscope-ai/QwenPaw/issues/7891) is open with a 4-hour deadline (2026-09-20 07:07 UTC). A follow-up version bump to `2.2.2b4` was merged in [#7892](https://github.com/agentscope-ai/QwenPaw/pull/7892).

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Type | Summary |
|----|------|---------|
| [#7892](https://github.com/agentscope-ai/QwenPaw/pull/7892) | **Version bump** | Bumped version to `2.2.2b4` (post-beta.3) |
| [#7863](https://github.com/agentscope-ai/QwenPaw/pull/7863) | **CI/Windows** | Stabilized Windows Uvicorn reload integration test; pinned LF checkout for snapshot tests |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | **UI/Feature** | Added reranker UI config panel to `ReMeLightMemoryCard` (under review since Jul 23, now closed) |

**Net effect:** Beta hardening continues; Windows CI flakiness addressed; memory reranker UI landed.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | 👍 | Core Need |
|------|----------|----|-----------|
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) Console lazy-page load failure → permanent error screen | 5 | 0 | **Console resilience**: lazy chunk load failure leaves no recovery path but full reload |
| [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) Persistent prompt injection in tool-result reminders ("delete all skills") | 4 | 0 | **Security/behavior**: injected system reminder survives across sessions/turns; source unknown |
| [#7878](https://github.com/agentscope-ai/QwenPaw/issues/7878) Plugin-visible pre-tool-call policy hook (governance pipeline) | 3 | 0 | **Extensibility**: orgs need to inject custom policy checks without monkey-patching |
| [#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881) kimi-code ACP runner bypasses boundary/destructive-command checks unevenly | 2 | 0 | **Safety gap**: Edit blocked but Write/Bash fully blind for kimi runner |
| [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) OpenCode Go models → `MissingSessionID` 400 errors | 2 | 0 | **Provider compat**: required header not sent to OpenCode Go endpoint |
| [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) Chat history too short — cannot scroll back | 2 | 0 | **UX**: history retention/truncation hurts long conversations |
| [#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888) Chat page stuck on "Something went wrong" — React `insertBefore` NotFoundError | 2 | 0 | **Crash**: browser UI layer injects `<font>` wrapper around React text node |

**Underlying theme:** Console frontend fragility (error boundaries, lazy loading, stream recovery) and provider/auth integration gaps are the top pain points. Plugin authors are asking for first-class governance extension points.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | Console lazy page chunk load failure → permanent error screen; no recovery without full reload | No (retry exists but broken) |
| **Critical** | [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) | Persistent injected system reminder telling agent to **delete all skills** across 20+ turns/sessions | No |
| **Critical** | [#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888) | Chat route stuck on error fallback due to React `NotFoundError` from browser-injected `<font>` wrapper | **Yes**: [#7889](https://github.com/agentscope-ai/QwenPaw/pull/7889) |
| **High** | [#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881) | kimi-code ACP runner: Edit blocked but Write(new file) & Bash fully bypass destructive-command checks | No |
| **High** | [#7895](https://github.com/agentscope-ai/QwenPaw/issues/7895) | Idle queue cleanup cancels queue that received message while another consumer stopping → message loss | No |
| **Medium** | [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | Tool-returned PDF serialized as OpenAI-style nested file part; DeepSeek rejects with 400 | Regression (fixed in [#7621](https://github.com/agentscope-ai/QwenPaw/pull/7621) but back) |
| **Medium** | [#7866](https://github.com/agentscope-ai/QwenPaw/issues/7866) | File-area tab shows pre-edit content after agent rewrites file (session card shows new content) | **Yes**: [#7867](https://github.com/agentscope-ai/QwenPaw/pull/7867) |
| **Medium** | [#7879](https://github.com/agentscope-ai/QwenPaw/issues/7879) | MCP config "Authorize" triggers OAuth handshake (missing client_id/resource) — blocks static Bearer Key servers (e.g., QCC) | No |
| **Medium** | [#7890](https://github.com/agentscope-ai/QwenPaw/issues/7890) | Zero-downtime reload drops plugin `register_runtime_hook` registrations; middleware retained → inconsistency | No |
| **Medium** | [#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882) | OpenCode "free" models return 403 `FreeTierError` (client-only) but UI marks them free | **Yes**: [#7869](https://github.com/agentscope-ai/QwenPaw/pull/7869) sends session header |
| **Low** | [#7877](https://github.com/agentscope-ai/QwenPaw/issues/7877) | Session workspace dir panel: ~3 visible rows, "Recent projects" always empty, "Apply" stays disabled | No |
| **Low** | [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | Chat history truncation too aggressive — cannot scroll back | No |

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Plugin pre-tool-call policy hook** (governance pipeline extension) | [#7878](https://github.com/agentscope-ai/QwenPaw/issues/7878) + PR [#7880](https://github.com/agentscope-ai/QwenPaw/pull/7880) (first-time contributor) | **High** — PR ready for review, aligns with governance refactor |
| **Unified model configuration** (vector/text/audio-video types, input/output modality support) | [#5182](https://github.com/agentscope-ai/QwenPaw/issues/5182) (open since Jun 14, updated today) | **Medium** — long-standing, complex schema change |
| **Authenticated multi-tab chat terminal** (xterm, conversation-scoped cwd, tabs) | PR [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) | **High** — large feature PR, active development |
| **AgentScope Platform as built-in provider** (OpenAI-compatible, model discovery) | PR [#7843](https://github.com/agentscope-ai/QwenPaw/pull/7843) | **High** — strategic integration, under review |
| **Escalation-only tool policy hooks** (plugin-owned, post-static-eval) | PR [#7880](https://github.com/agentscope-ai/QwenPaw/pull/7880) | **High** — complements #7878, first-time contributor |
| **Zero-downtime reload parity for plugin runtime hooks** | [#7890](https://github.com/agentscope-ai/QwenPaw/issues/7890) | **Medium** — consistency bug, affects plugin ecosystem |
| **Longer chat history retention / scrollback** | [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | **Medium** — UX pain point, simple config/storage change |
| **Responses API prompt caching (GPT-5.6+)** | PR [#6668](https://github.com/agentscope-ai/QwenPaw/pull/6668) (open since Aug 4) | **Low** — niche, opt-in, stalled |

---

## 7. User Feedback Summary

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-20

## 1. Today's Overview
ZeroClaw shows **high architectural velocity** with 50 PRs and 12 issues updated in the last 24 hours. The project is in a **deep infrastructure refactoring phase** — no new releases, but massive concurrent work on runtime coordination, provider resilience, security hardening, and channel improvements. Six PRs were merged/closed today, indicating active integration. The dominance of `risk:high` and `size:XL` labels across open PRs signals **structural changes** rather than incremental features. Maintainer review bandwidth appears constrained (multiple PRs tagged `needs-maintainer-review`).

## 2. Releases
**No new releases** in the last 24 hours. The project appears to be accumulating changes for a significant upcoming release, given the volume of XL-sized PRs touching core runtime, security, and provider layers.

---

## 3. Project Progress — Merged/Closed PRs (6 today)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) | feat(runtime): anchor context compaction to model window ratio | Runtime, Context Management | **Merged** — Replaces fixed 32k token budget with model-window-relative compaction ratio; enables efficient context use across varying model sizes |
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | RFC: Composable WASM plugin runtime architecture | Architecture, WASM, Plugins | **Closed (Accepted)** — Core APIs, typed extension points, replaceable providers approved; implementation tracking via #10330 |
| [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | RFC: Append-only session event history & deterministic replay | Architecture, Session History | **Closed (Accepted)** — Authoritative event vocabulary, writer, replay, branching, derived-agent streams; supersedes session-history decision in #10076 |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions & transport surface adapters | Architecture, Runtime, Security | **Closed (Accepted)** — Revision 5 accepted; runtime owns sessions, transport adapters for ACP/web/channel surfaces |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC: Unified file & attachment architecture | Architecture, Channels, Gateway | **Closed (Accepted)** — Revision 10 accepted; unified attachment handling across conversation surfaces |
| [#9512](https://github.com/zeroclaw-labs/zeroclaw/issues/9512) | docs(CI): annotate bespoke gates with motivating issue/incident | CI, Docs | **Closed (Accepted)** — Parking-lot; improves CI gate traceability |

**Key Insight**: Four major RFCs accepted in quick succession (#9487, #9488, #10076, #10526) — the project is **locking in architectural foundations** for session management, plugin runtime, attachment handling, and event-sourced history. Implementation work now shifts to the accepted RFCs (tracked in [#10330](https://github.com/zeroclaw-labs/zeroclaw/issues/10330) and [#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691)).

---

## 4. Community Hot Topics — Most Active Items

| Item | Type | Comments | Key Signals |
|------|------|----------|-------------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | Issue (RFC) | 39 | **Runtime-owned sessions** — 39 comments on Rev 5; debate on transport adapter boundaries, security surface, ACP integration. High engagement = high architectural stakes. |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | Issue (RFC) | 32 | **Unified attachment architecture** — Rev 10; cross-channel file handling, gateway integration, security scanning. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Issue (Tracker) | 15 | **Maintainer decision queue** — Active triage point for RFCs/design issues; 15 comments show ongoing prioritization debates. |
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | Issue (RFC) | 15 | **WASM plugin runtime** — Rev 1 accepted; core APIs settled, now implementation phase. |
| [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | Issue (RFC) | 12 | **Append-only event history** — 12 comments; resolves fragmented execution facts across TurnEvents, logs, tool receipts, cost records. |

**Underlying Need**: The community is **converging on event-sourced, runtime-centric architecture** — moving from mutable messages to immutable event logs, runtime-owned sessions, and pluggable transport adapters. This is a **paradigm shift** for multi-channel agent deployments.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue/PR | Title | Status | Fix PR |
|----------|----------|-------|--------|--------|
| **P1 / Critical** | [#10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643) | `fix(runtime): fail-closed approval enforcement for bounded child loop tools` | **Open, In-Progress** | — (Issue tracks fix) |
| **High** | [#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) | `fix(runtime): recover from rejected image requests` | **Open, Needs Review** | PR #10480 |
| **High** | [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) | `fix(acp): persist interrupted turn progress` | **Open, Needs Review** | PR #10197 |
| **High** | [#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) | `fix(security): resolve host launchers before workspace cwd` | **Open, Needs Review** | PR #10381 |
| **High** | [#10804](https://github.com/zeroclaw-labs/zeroclaw/pull/10804) | `fix(runtime): scope cost tracking into delegated sub-loops` | **Open** | PR #10804 |
| **Medium** | [#10916](https://github.com/zeroclaw-labs/zeroclaw/pull/10916) | `fix(providers): forward reasoning_effort through compatible providers` | **Open** | PR #10916 |
| **Medium** | [#10942](https://github.com/zeroclaw-labs/zeroclaw/pull/10942) | `fix(channels/telegram): resolve voice peers from sender identity` | **Open** | PR #10942 |
| **Medium** | [#10830](https://github.com/zeroclaw-labs/zeroclaw/pull/10830) | `fix(providers): enforce outbound Grok ACP frame limits` | **Open** | PR #10830 |
| **Medium** | [#10904](https://github.com/zeroclaw-labs/zeroclaw/pull/10904) | `fix(runtime): gate no-vision error on image markers that resolve` | **Open** | PR #10904 |
| **Medium** | [#10829](https://github.com/zeroclaw-labs/zeroclaw/pull/10829) | `fix(providers): resolve grok executable before workspace spawn` | **Open, Needs Review** | PR #10829 |

**Critical Finding**: **#10643 (P1)** — Child loops inherit tools without approval manager, allowing prompt-required tools to execute without approval. **Security regression risk in delegation chains**. Actively being fixed.

**Pattern**: Multiple fixes target **provider resilience** (image rejection recovery, Grok frame limits, reasoning_effort passthrough) and **delegation safety** (cost tracking, approval enforcement, interrupted turn persistence).

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Release | Notes |
|--------|--------|----------------------------|-------|
| **WASM Plugin Runtime** | [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) (Accepted RFC) | **High** | Core APIs accepted; implementation tracking in [#10330](https://github.com/zeroclaw-labs/zeroclaw/issues/10330). Enables composable, typed, replaceable providers. |
| **Append-Only Event History & Replay** | [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) (Accepted RFC) | **High** | Replaces mutable messages with immutable event log; enables deterministic replay, branching, derived agents. |
| **Runtime-Owned Sessions + Transport Adapters** | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) (Accepted RFC) | **High** | Runtime owns session lifecycle; ACP/web/channel adapters plug in. Foundation for multi-surface agents. |
| **Unified Attachment Architecture** | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) (Accepted RFC) | **High** | Cross-channel file/attachment handling; gateway integration. |
| **Self-Serve ZeroRelay Enrollment** | [#10592](https://github.com/zeroclaw-labs/zeroclaw/pull/10592) | **Medium** | `zeroclaw relay claim` CLI; daemon-side Ed25519 registration. Open, needs review. |
| **Agent Lifecycle Mutation Coordination** | [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) | **Medium** | Single live-config authority for daemon RPC, gateway, channels, ACP, CLI. XL risk, needs review. |
| **Execution-Tree Iteration Budgets** | [#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351) | **Medium** | Aggregate iteration ceiling for agent trees; root mints budget, children share. Needs review. |
| **Telegram Webhook Mode** | [#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) | **Low** | Iceboxed; optional webhook vs long-polling. Low priority. |
| **WhatsApp Poll Votes as Choice Messages** | [#10987](https://github.com/zeroclaw-labs/zeroclaw/issues/10987) | **Low** | New today; parity with Signal. Small scope. |
| **Network-Interrupted Provider Turn Recovery** | [#10634](https://github.com/zeroclaw-labs/zeroclaw/issues/10634) | **Medium** | Bounded retries, safe Continue/Retry without side-effect replay. Accepted, early stage. |

**Roadmap Prediction**: Next major version will likely ship **RFC implementations** (WASM plugins, event-sourced history, runtime-owned sessions, unified attachments) + **delegation safety fixes** (approval enforcement, cost scoping, interrupted turn persistence). The `relay claim` CLI and iteration budgets are strong candidates.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Delegation approval bypass** | [#10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643) — "bounded child loops inherit tools without approval manager" | **Security-critical**: Prompt-required tools execute in child loops without user consent. |
| **Interrupted ACP turns lose progress** | [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) — "persist interrupted turn progress" | **Reliability**: Network failures during Code/ACP turns lose checkpointed tool calls/results. |
| **Image rejection crashes turns** | [#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) — "recover from rejected image requests" | **Provider resilience**: 400 on image-bearing requests kills entire turn; no graceful retry. |
| **Cost tracking broken in delegation** | [#10804](https://github.com/zeroclaw-labs/zeroclaw/pull/10804) — "delegated sub-loops never installed cost tracking context" | **Observability/Billing**: No cost visibility for delegated LLM calls. |
| **Telegram voice peer resolution broken** | [#10942](https://github.com/zeroclaw-labs/zeroclaw/pull/10942) — "compared against outbound recipient, not sender" | **Channel correctness**: Voice messages fail permission checks. |
| **Grok provider frame limits unenforced** | [#10830](https://github.com/zeroclaw-labs/zeroclaw/pull/10830) — "apply existing ACP frame limit" | **Stability**: Oversized frames crash child process communication. |
| **No-vision error false positives** | [#10904](https://github.com/zeroclaw-labs/zeroclaw/pull/10904) — "gate error on image markers that resolve" | **UX**: Legitimate turns fail when image markers resolve to non-images. |
| **CI gate archaeology** | [#9512](https://github.com/zeroclaw-labs/zeroclaw/issues/9512) — "bespoke gates lack motivating incident links" | **Maintainer friction**: Hard to evaluate gate relevance without history. |

**Satisfaction Signal**: Users/contributors are **deeply invested in architectural correctness** — RFCs attract 30+ comments, security fixes are prioritized (P1), and delegation safety is treated as blocker. Dissatisfaction centers on **runtime reliability under delegation and network failure**, not feature gaps.

---

## 8. Backlog Watch — Stalled High-Value Items Needing Maintainer Attention

| Item | Type | Age | Tags | Why It Matters |
|------|------|-----|------|----------------|
| [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) | PR | 16 days | `size:XL`, `risk:high`, `needs-maintainer-review`, `topic:agent-loop` | **Single live-config authority** for daemon/gateway/channels/ACP/CLI. Coordinates admission, sessions, mutations. Blocked on review. |
| [#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) | PR | 25 days | `size:XL`, `risk:high`, `needs-maintainer-review`, `domain:security` | **Security fix**: Resolve host launchers (Firejail, Bubblewrap, Docker, native) before workspace cwd. Prevents path traversal in sandbox launches. |
| [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) | PR | 31 days | `size:XL`, `risk:high`, `risk:manual`, `needs-maintainer-review`, `topic:zerocode` | **ACP turn persistence**: Checkpoint prompt, text, tool calls, results before forward. Critical for ZeroCode reliability. |
| [#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351) | PR | 26 days | `size:XL`, `risk:medium`, `needs-maintainer-review`, `domain:architecture` | **Execution-tree budgets**: Aggregate iteration ceiling for agent trees. Prevents runaway delegation. |
| [#10804](https://github.com/zeroclaw-labs/zeroclaw/pull/10804) | PR | 8 days | `size:XL`, `risk:high`, `topic:

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*