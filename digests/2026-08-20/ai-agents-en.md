# OpenClaw Ecosystem Digest 2026-08-20

> Issues: 244 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-20 01:40 UTC

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

# OpenClaw Project Digest — 2026-08-20

## 1. Today's Overview
OpenClaw exhibits **exceptionally high velocity** with 244 issues and 500 PRs updated in the last 24 hours — a volume consistent with a large, multi-team open-source project in active development. The 81 merged/closed PRs indicate strong throughput, while 232 open/active issues and 419 open PRs signal a substantial backlog. No new release shipped today; the latest validation issue (#125626) targets `v2026.8.1-beta.2`. Recurring themes across issues: **session-state corruption**, **message loss**, **gateway startup failures**, **auth-provider regressions**, and **memory/search regressions** — several tagged as release blockers (P0/P1, 🦞 diamond lobster).

## 2. Releases
**No new releases today.**  
Active validation underway for **v2026.8.1-beta.2** (Issue #125626) — testers are upgrading real gateways and running worksheets. Previous stable appears to be **2026.7.1**; Docker `:latest` tag regression noted in #112391 (tag reverted from 2026.7.1 to 2026.6.33).

## 3. Project Progress (Merged/Closed PRs — 81 total)
Key merged fixes today (from top-30 by comment activity):

| PR | Area | Summary |
|----|------|---------|
| [#125740](https://github.com/openclaw/openclaw/pull/125740) | **Skills** | Preserves live skill `description` on Workshop updates — fixes silent routing breakage (#125570). |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | **Security/UI** | Control UI now lets admins acknowledge install-policy warnings (`acknowledgeInstallPolicyWarning: true`). |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | **Security/CLI** | External `security.installPolicy` can return `warn`; interactive CLI requires explicit confirmation. |
| [#126498](https://github.com/openclaw/openclaw/pull/126498) | **llama.cpp** | Makes endpoint auth transitions reproducible; unifies managed/existing server providers. |
| [#126434](https://github.com/openclaw/openclaw/pull/126434) | **llama.cpp** | Single provider for managed + existing llama.cpp servers (reduces duplication). |
| [#119975](https://github.com/openclaw/openclaw/pull/119975) | **Gateway/CLI** | Fixes unmanaged SIGUSR1 restart health reporting (was false 60s timeout). |
| [#123975](https://github.com/openclaw/openclaw/pull/123975) | **Scripts/CI** | Prevents `tsgo` wedges from hanging typecheck indefinitely (adds managed runner + deadline). |
| [#121378](https://github.com/openclaw/openclaw/pull/121378) | **Gateway** | Persists `sessions.patch toolOverrides.webSearch: true` (was dropped during normalize). |

> Many merged PRs carry `status: 👀 ready for maintainer look` or `status: 🚀 automerge armed` — review pipeline is flowing.

## 4. Community Hot Topics (Most-Commented Issues/PRs)

| Item | Comments | 👍 | Core Pain Point |
|------|----------|----|-----------------|
| [#77598](https://github.com/openclaw/openclaw/issues/77598) | 22 | 1 | **Observational 24h watch** of a dev agent — maintainer tracking agent behavior/trajectory (no steering). |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 14 | 3 | **Regression 2026.3.2**: `google-vertex/gemini-3.1-pro-preview` → `"Cannot convert undefined or null to object"` on every message. |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | 14 | 3 | **Gateway won’t start** (systemd, ollama, manual) — `Error: gateway did not start on 127.0...` since 2026.7.1. |
| [#125626](https://github.com/openclaw/openclaw/issues/125626) | 13 | 0 | **Release validation** for `v2026.8.1-beta.2` — coordinated tester worksheet. |
| [#88657](https://github.com/openclaw/openclaw/issues/88657) | 11 | 1 | **DeepSeek V4 Flash** incomplete turns (`payloads=0, tools=2, stopReason=stop`) in 2026.5.27/28; worked in .26. |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 9 | 1 | **Zombie child processes** from hook/tool execution accumulate → runtime degradation. |
| [#120563](https://github.com/openclaw/openclaw/issues/120563) | 9 | 0 | **Ollama/custom provider**: conversation history not sent — fixed-size context every turn. *(Closed: not repro on main)* |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | 8 | 1 | **Persistent provider cooldown** after 402 billing error blocks user for hours even after credit top-up. |
| [#99586](https://github.com/openclaw/openclaw/issues/99586) | 8 | 2 | **Tool surface returns blank** after gateway-touching ops; container restart only briefly clears. |
| [#92633](https://github.com/openclaw/openclaw/issues/92633) | 8 | 1 | **`memory_search corpus="all"` times out** (15s) while individual corpora succeed. |

**Underlying needs**: Users hit **release-blocking regressions** (gateway startup, auth, memory search) and **silent data loss** (message loss, skill routing, conversation history). Multi-agent/channel operators need **observability** (agent registry, debug commands) and **recovery guarantees** (no zombie processes, durable deliveries).

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P0 🦞** | [#108435](https://github.com/openclaw/openclaw/issues/108435) | Gateway fails to start (systemd/ollama/manual) — release blocker | — |
| **P0 🦞** | [#119270](https://github.com/openclaw/openclaw/issues/119270) | File tools strip leading `@` from destination → silent wrong-file write/delete | — |
| **P0 🦞** | [#117742](https://github.com/openclaw/openclaw/issues/117742) | Multi-file `apply_patch` commits earlier deletions even if later hunk fails | — |
| **P0 🦞** | [#123327](https://github.com/openclaw/openclaw/issues/123327) | Shared-state WAL checkpoint copies index page over SQLite page 1 → DB corruption (RPi5/ext4) | — |
| **P0 🦞** | [#94229](https://github.com/openclaw/openclaw/issues/94229) | `plugin_state_entries` SQLite corruption — "session file changed while embedded prompt lock released" | — |
| **P1 🦞** | [#94939](https://github.com/openclaw/openclaw/issues/94939) | 6.x migration leaves channel conversation-store SQLite empty (0 bytes) — breaks proactive sends (MS Teams) | — |
| **P1 🦞** | [#123273](https://github.com/openclaw/openclaw/issues/123273) | Image attachments fail for **named agents** — "failed to hydrate structured image attachment(s)" | [#126482](https://github.com/openclaw/openclaw/pull/126482) (open) |
| **P1 🦞** | [#113093](https://github.com/openclaw/openclaw/issues/113093) | `tools.profile: full` + llama.cpp MTP → 413/400 on tool payload (v2026.7.1-2) | — |
| **P1 🦞** | [#121034](https://github.com/openclaw/openclaw/issues/121034) | ACP/Claude Code Bedrock leaks internal `provider/model` into `ANTHROPIC_MODEL` → breaks Bedrock | — |
| **P1 🦞** | [#126246](https://github.com/openclaw/openclaw/issues/126246) | Telegram durable outbound stuck in `send_attempt_started` → lost on restart | — |
| **P1 🦞** | [#84983](https://github.com/openclaw/openclaw/issues/84983) | Native cron `agentTurn` saturates event loop → chat transports unresponsive for minutes | — |
| **P1 🦐** | [#125570](https://github.com/openclaw/openclaw/issues/125570) | Skill Workshop `update` overwrites live skill `description` → breaks routing | **[#125740](https://github.com/openclaw/openclaw/pull/125740) merged** |
| **P1 🦞** | [#123360](https://github.com/openclaw/openclaw/issues/123360) | Memory-core dreaming: first-finisher cleanup races siblings; completed narratives discarded | — |
| **P1 🦞** | [#115041](https://github.com/openclaw/openclaw/issues/115041) | Direct turn drops to silence on terminal `NO_REPLY` — good assistant text discarded | — |
| **P1 🦞** | [#119313](https://github.com/openclaw/openclaw/issues/119313) | Embedded run loop never returns when mid-turn precheck has nothing to truncate → infinite billed calls | — |
| **P1 🦞** | [#118839](https://github.com/openclaw/openclaw/issues/118839) | Regression: "restart recovery claim changed before agent adoption" reappears on 2026.7.2-beta.7 | — |

> **Pattern**: SQLite corruption (WAL, migration, integrity checks), gateway startup, auth-provider state, and **silent message/data loss** dominate P0/P1. Several have open fix PRs (e.g., #125740 merged, #126482 open).

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood for Next Version |
|----------|--------|-----------------------------|
| [#116470](https://github.com/openclaw/openclaw/issues/116470) | Runtime agent registry from config file + debug CLI (`agents list --bindings` extension) | High — `size: M`, `P3`, maintainer-labeled |
| [#119083](https://github.com/openclaw/openclaw/issues/119083) | Cron scheduler: admit newly due jobs while earlier batch runs (currently blocked by `state.running`) | High — `P1`, `linked-pr-open` |
| [#116268](https://github.com/openclaw/openclaw/issues/116268) | Add jitter to Worker reconnect backoff (prevent thundering herd on gateway restart) | High — `P2`, `linked-pr-open` |
| [#126255](https://github.com/openclaw/openclaw/pull/126255) | **Browser Harness** as preferred model action engine (replaces snapshot loop) | Medium — `XL`, `waiting on author`, related #19289 |
| [#85651](https://github.com/openclaw/openclaw/pull/85651) | Context-pressure-aware continuation (`continue_work`, `continue_delegate`, `request_compaction`) | Medium — `XL`, `needs proof`, design doc exists |
| [#105494](https://github.com/openclaw/openclaw/issues/105494) | Interactive "memory therapy" session to resolve open questions/contradictions with user | Low — `P3`, `off-meta tidepool`, no PR yet |
| [#20837](https://github.com/openclaw/openclaw/issues/20837) | Make agent aware of communication channel (Telegram vs dashboard vs etc.) | Low — `P3`, `off-meta tidepool`, open since Feb |
| [#42276](https://github.com/openclaw/openclaw/issues/42276) | Reasoning stream (overwrite lines like OpenAI/Grok to show thinking) | Low — `P3`, `source-repro`, no PR |

**Prediction**: Cron scheduler fix (#119083), worker jitter (#116268), and agent registry (#116470) are **small, high-impact** and likely in next beta. Browser Harness (#126255) is a **major refactor** — may slip to following release. Continuation tools (#85651) need behavioral proof.

## 7. User Feedback Summary

| Theme | Representative Voices | Sentiment |
|-------|----------------------|-----------|
| **Gateway startup unreliability** | #108435 (systemd/ollama/manual all fail), #86612 (Docker restart loop on Windows), #112391 (Docker `:latest` tag regression) | 😠 Frustrated — blocks deployment |
| **Silent message/data loss** | #126246 (Telegram outbound stuck/lost), #117770 (ingress identity ignores `lane_key` → drops acked messages), #117763 (notify-only messages acked but only in ephemeral buffer) | 😱 Alarmed — trust erosion |
| **Session/state corruption** | #123327 (SQLite page 1 overwritten), #94229 (plugin_state_entries corruption), #94939 (migration leaves 0-byte SQLite), #121617 (compaction guard misclassifies) | 😰 Anxious — data integrity fears |
| **Auth-provider fragility** | #38327 (Gemini 3.1 pro preview regression), #70903 (persistent cooldown after 402), #83598 (Claude CLI OAuth refresh dead-ends), #121034 (Bed

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent / Assistant Open-Source Ecosystem (2026-08-20)

## 1. Ecosystem Overview
The personal AI agent ecosystem shows **bimodal maturity**: a cluster of 5–6 projects (OpenClaw, IronClaw, ZeroClaw, Hermes, NanoClaw, CoPaw) operating at **high velocity** (30–500 PRs/day) with multi-team governance, while a second tier (NanoBot, Moltis, PicoClaw, LobsterAI) maintains **steady, focused maintenance** (5–25 PRs/day). Two projects (NullClaw, ZeptoClaw) are effectively dormant. The landscape is converging on **multi-channel gateway architectures**, **durable session/state management**, **security hardening** (path policies, auth boundaries, WASM sandboxes), and **operator-grade observability** — reflecting a shift from "chatbot" to "agent platform" requirements. Community engagement remains largely maintainer-driven; external contributor influx is visible but uneven.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Release Status | Health Score (1–10) |
|---------|--------------|-----------|---------------|----------------|---------------------|
| **OpenClaw** | 244 | 500 | 81 | v2026.8.1-beta.2 validation | 7 |
| **IronClaw** | 14 | 38 | 18 | **v1.3.0 stable released** (2026-08-19) | 9 |
| **ZeroClaw** | 8 | 50 | 1 | v0.8.5 stabilization (target Aug 30) | 7 |
| **Hermes Agent** | 6 | 50 | 7 | v0.20.4 current; v0.20.5 pending | 7 |
| **NanoClaw** | 3 | ~32* | 23 | Accumulating for next minor/major | 8 |
| **CoPaw** | 32 | 46 | 16 | Desktop 2.1.0 current | 7 |
| **NanoBot** | 4 | 22 | 8 | Pre-release accumulation | 8 |
| **Moltis** | 4 | 9 | 6 | **20260818.10** released (2026-08-18) | 9 |
| **LobsterAI** | 6 (all stale) | 8 | 8 | v2026.4.3 current; critical bugs open | 5 |
| **PicoClaw** | 1 | 5 | 2 | No recent release | 6 |
| **NullClaw** | 0 | 1 | 0 | No recent release | 3 |
| **ZeptoClaw** | 0 | 0 | 0 | No activity | 1 |

*NanoClaw PR count inferred from 23 merged + 9 open = ~32 updated.*

**Key**: IronClaw and Moltis lead in **release discipline + low bug backlog**. OpenClaw dominates **raw throughput** but carries heavy P0/P1 debt. ZeroClaw and Hermes show **high PR volume but low merge rates** — indicating review bottlenecks or architectural refactor phases.

---

## 3. OpenClaw's Position

**Advantages vs. Peers**
- **Scale & Breadth**: 5–10× the PR/issue volume of nearest peers; supports widest matrix of providers (Vertex, Bedrock, Ollama, llama.cpp, OpenAI-compatible), channels (Slack, Telegram, Teams, Discord, Matrix, SMS/Voice via Dial), and runtime modes (gateway, CLI, Desktop, headless).
- **Ecosystem Gravity**: De facto reference implementation — other projects (NanoClaw, PicoClaw, IronClaw) explicitly integrate or mirror its protocols (ACP, skill manifests, session schemas).
- **Multi-Tenant Operator Tooling**: Built-in provisioning, credential management, audit trails, and channel onboarding flows (e.g., Telegram group picker, Slack agent-flow split) exceed peer capabilities.

**Technical Approach Differences**
| Dimension | OpenClaw | Typical Peer (IronClaw, ZeroClaw, Hermes) |
|-----------|----------|-------------------------------------------|
| **Architecture** | Monolithic gateway + plugin hooks | Modular daemons + WASM/plugin sandboxing |
| **State** | SQLite WAL + shared-state checkpoints | Per-user containers (IronClaw), JSONL + SQLite (ZeroClaw), local-first (Hermes) |
| **Security** | Install-policy warnings, path ACLs | Capability-based (IronClaw), path-policy enforcement (ZeroClaw), anti-slop Rust policy |
| **Extensibility** | Skills, MCP, ACP, custom providers | WASM plugins (ZeroClaw, Moltis), MCP-first (IronClaw), skill manifests (NanoBot) |

**Community Size**: Largest by contributor count (implied by 500 PRs/24h), but **signal-to-noise ratio is lower** — many P0 bugs lack fix PRs, and triage backlog (419 open PRs) suggests maintainer bandwidth saturation.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Gateway/Container Startup Reliability** | OpenClaw (#108435), Hermes (freeze #90404), NanoBot (Docker OAuth #5444), IronClaw (v1.2→v1.3 upgrade crash), PicoClaw (LINE config) | Deterministic health reporting, auth persistence in containers, graceful degradation |
| **Session/State Durability & Corruption Prevention** | OpenClaw (SQLite WAL #123327, plugin_state #94229), ZeroClaw (JSONL migration #9715), IronClaw (checkpoint batching #7603), NanoBot (Dream cursor #5441), CoPaw (compaction #6624) | Atomic checkpoints, retry-safe migrations, WAL integrity, compaction triggers |
| **Multi-Channel Message Delivery Guarantees** | OpenClaw (Telegram #126246, ingress #117770), NanoClaw (Dial SMS #3353), IronClaw (Slack unlinked-user #7681), Moltis (WhatsApp mention #1217), Hermes (multiplexer history #90410) | Durable outbound queues, ack semantics, identity-aware routing, no duplicate/lost messages |
| **Provider Auth & Modality Handling** | OpenClaw (Gemini #38327, Bedrock #121034, 402 cooldown #70903), ZeroClaw (modalities parser #9743, Anthropic #9447), Hermes (MiniMax reasoning #89647, xAI auth), NanoBot (OAuth Docker #5444) | Standardized modality parsing, token refresh resilience, billing-error recovery, reasoning-stream extraction |
| **Security Hardening & Supply Chain** | ZeroClaw (path policy #9937, WASM deadline #9403, anti-slop #10118), IronClaw (10 guards #88435), Moltis (vault auth CWE-306 #1216), NanoClaw (sign-in verification #3339), OpenClaw (install-policy #120900) | Capability-based tool scoping, bounded WASM execution, dependency hygiene, config fail-closed |
| **Observability & Debuggability** | OpenClaw (agent registry #116470, debug CLI), ZeroClaw (SOP pane #9694, JSONL streaming #90411), IronClaw (OOBE #6994), Hermes (connection mode #82140), CoPaw (integration tests #7103) | Runtime agent introspection, CI-friendly structured logs, onboarding telemetry |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architectural Signature |
|---------|---------------|-------------|-------------------------|
| **OpenClaw** | **Universal gateway/platform** — maximum provider/channel coverage, multi-tenant ops | Power users, homelab operators, small teams | Monolithic TypeScript gateway; SQLite state; skill/MCP/ACP plugin points |
| **IronClaw** | **User-owned compute** — persistent per-user sandboxes, coding agents, onboarding | Developers, technical teams adopting "AI as teammate" | Go/Rust daemon + Docker Exec sandboxes; capability-based security; OOBE-first |
| **ZeroClaw** | **Correctness-first runtime** — session ownership, anti-slop, formal RFC governance | Platform builders, security-conscious integrators | Rust core; runtime-owned sessions; WASM plugins; staged stabilization windows |
| **Hermes Agent** | **Desktop-native UX** — local-first, reasoning models, CJK support, plugin extensibility | Desktop power users, Nous/portal subscribers | Tauri/TypeScript desktop; provider-specific reasoning handling; WebUI + local gateway |
| **NanoClaw** | **Channel & provider extensibility** — Slack multi-agent, Telegram groups, Cursor SDK, Dial voice | Teams embedding agents in comms tools | Node.js; async central DB; feature-flagged Slack agent flow; provider SDK adherence |
| **CoPaw** | **Desktop + Hub multi-user** — email agent, browser_use, Chinese LLM ecosystem, self-hosted Hub | Chinese dev community, teams needing self-hosted control plane | Electron/TypeScript; ReMeLight memory; Volcengine/DashScope/Minimax providers; Hub RPC |
| **NanoBot** | **Lightweight local agent** — memory compaction, Dream automation, WebUI/TUI parity | Individual developers, privacy-focused users | Go + WebUI/TUI; local-first; OAuth CLI; skill manifests; Dream cron |
| **Moltis** | **Apple Container + WhatsApp + cron reliability** — niche backend integrations | Mac-centric ops, WhatsApp-heavy teams | Go; Apple Container backend; WhatsApp Baileys; typed model routing tests |
| **LobsterAI** | **Windows installer + IM integrations** — NOS payload delivery, slash commands, thumbnail UX | Chinese Windows users, IM-centric workflows | C#/Electron; NOS web installer; multi-IM slash commands; scheduled tasks |
| **PicoClaw** | **Lightweight routing gateway** — Telegram/DISCORD/Line channel rules, routed agents | Hobbyists, small bots, channel-router use cases | Go; rule-based agent dispatch; minimal deps |
| **NullClaw** | *Unclear — minimal activity* | — | — |
| **ZeptoClaw** | *Inactive* | — | — |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Tier 1: Platform-Scale, High Throughput** | OpenClaw, IronClaw, ZeroClaw | >30 PRs/day; multi-maintainer; formal release trains (beta/RC/stable); architectural RFCs; significant P0 backlog |
| **Tier 2: Product-Focused, Steady Delivery** | NanoClaw, Hermes, CoPaw, NanoBot | 20–50 PRs/day; clear feature themes (Slack agents, desktop UX, Hub, memory); regular merges; some review bottlenecks |
| **Tier 3: Maintenance/Stabilization** | Moltis, LobsterAI, PicoClaw | 5–10 PRs/day; bug-fix dominated; patch releases; low new-feature velocity; stale backlog risk |
| **Tier 4: Dormant/Experimental** | NullClaw, ZeptoClaw | Near-zero activity; no recent releases |

**Rapidly Iterating**: OpenClaw, NanoClaw, IronClaw (just shipped v1.3.0), ZeroClaw (stabilization sprint), CoPaw (Hub PR #7112).
**Stabilizing**: Moltis (all bugs fixed, patch ready), Hermes (v0.20.5 assembling), NanoBot (Dream/OAuth fixes queued).
**At Risk**: LobsterAI (3 critical April bugs unresolved), PicoClaw (2 stale PRs >2 weeks), NullClaw/ZeptoClaw (inactive).

---

## 7. Trend Signals for AI Agent Developers

1. **Gateway → Platform Convergence**: Projects are adding **provisioning, audit, multi-tenancy, and onboarding flows** (OpenClaw, NanoClaw, IronClaw, CoPaw Hub) — signaling demand for **deployable, manageable agent fleets**, not just chat interfaces.

2. **Durable Execution as Baseline**: **Retry-safe migrations** (ZeroClaw #9715), **checkpoint batching** (IronClaw #7603), **WAL integrity** (OpenClaw #123327), **WASM deadlines** (ZeroClaw #9403) — state loss is no longer tolerated; "agent memory" must survive crashes, upgrades, and network flaps.

3. **Security Shifts Left**: **Path-policy enforcement** (ZeroClaw, IronC

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-20

## 1. Today's Overview
NanoBot shows **high development velocity** with 22 PRs updated and 4 new issues in the last 24 hours. The project is in active maintenance mode with **8 PRs merged/closed today**, indicating steady progress on bug fixes, Docker/OAuth improvements, memory management, and WebUI enhancements. No new releases were published, suggesting the team is accumulating changes for a future release. Critical areas receiving attention include OAuth persistence in Docker, memory consolidation accuracy, Dream cursor advancement, and proxy URL handling.

## 2. Releases
**No new releases** in the last 24 hours. The project appears to be in a pre-release accumulation phase with multiple merged PRs queued for the next version.

## 3. Project Progress — Merged/Closed PRs Today (8)

| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#5443](https://github.com/HKUDS/nanobot/pull/5443) | `fix(tui): expose /exit in command menu` | UX/CLI | Improves discoverability of exit command in TUI |
| [#5440](https://github.com/HKUDS/nanobot/pull/5440) | `perf(memory): reuse conversation prefix for local compaction` | Performance/Memory | Reduces token overhead during consolidation by reusing prefix |
| [#5438](https://github.com/HKUDS/nanobot/pull/5438) | `fix(webui): return promptly after Ctrl-C` | WebUI/Stability | Fixes graceful shutdown handling in WebUI |
| [#5341](https://github.com/HKUDS/nanobot/pull/5341) | `fix(skills): make weather workflow Windows-safe` | Compatibility | Resolves `curl` alias conflict on Windows PowerShell |
| [#4527](https://github.com/HKUDS/nanobot/pull/4527) | `Add ask_clarification tool` | Feature/Tooling | Adds built-in clarification tool for ambiguous requests |
| [#4282](https://github.com/HKUDS/nanobot/pull/4282) | `feat: add file management features to settings view` | WebUI/Feature | Enables file browsing/download in WebUI settings |
| *Two additional closed PRs not fully detailed in data* | | | |

**Key Advances:** Memory compaction performance, Docker OAuth persistence groundwork, WebUI stability, Windows compatibility, and new agent tooling (`ask_clarification`).

## 4. Community Hot Topics

| Item | Type | Engagement | Core Need |
|------|------|------------|-----------|
| [#5425](https://github.com/HKUDS/nanobot/issues/5425) | Bug | 1 comment, 0 👍 | **Legacy `socks://` proxy support** — Users need backward compatibility for common proxy URL alias used in OpenAI-compatible provider configs |
| [#5447](https://github.com/HKUDS/nanobot/issues/5447) | Feature | 0 comments | **Paid MCP/x402 security scanning integration** — External vendor proposing commercial security scanner as paid MCP service |
| [#5444](https://github.com/HKUDS/nanobot/issues/5444) | Bug | 0 comments | **OAuth login failure in Docker** — Blocking issue for containerized deployments using OpenAI Codex OAuth |
| [#5441](https://github.com/HKUDS/nanobot/issues/5441) | Bug | 0 comments | **Dream cursor stuck on recovered tool errors** — Memory cursor not advancing when transient tool failures are later corrected |

**Analysis:** The OAuth-in-Docker issue (#5444) and proxy URL issue (#5425) are **infrastructure blockers** for production/containerized deployments. The Dream cursor bug (#5441) affects a core automation feature. The paid MCP proposal (#5447) signals growing ecosystem interest in monetizable tool integrations.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#5444](https://github.com/HKUDS/nanobot/issues/5444) OAuth login fails in Docker (PermissionError on `/home/.../.oauth-cli-kit`) | Open | [#5446](https://github.com/HKUDS/nanobot/pull/5446), [#5445](https://github.com/HKUDS/nanobot/pull/5445) — *active fix PRs routing OAuth storage to nanobot data dir* |
| **High** | [#5425](https://github.com/HKUDS/nanobot/issues/5425) Legacy `socks://` proxy URLs break custom OpenAI-compatible providers | Open | [#5439](https://github.com/HKUDS/nanobot/pull/5439) — *explicitly rejects `socks://` alias; may need separate normalization PR* |
| **Medium** | [#5441](https://github.com/HKUDS/nanobot/issues/5441) Dream cursor permanently blocked by recovered tool errors | Open | [#5442](https://github.com/HKUDS/nanobot/pull/5442) — *advances cursor when errors were recovered; adds completion reporting* |
| **Medium** | [#5402](https://github.com/HKUDS/nanobot/issues/5402) (referenced in #5403) Token consolidation never triggers due to tiktoken undercounting | Open | [#5403](https://github.com/HKUDS/nanobot/pull/5403) — *uses API-reported prompt tokens instead of local estimation* |
| **Low** | TUI `/exit` not discoverable in command menu | Fixed | [#5443](https://github.com/HKUDS/nanobot/pull/5443) — *merged* |
| **Low** | WebUI doesn't return promptly after Ctrl-C | Fixed | [#5438](https://github.com/HKUDS/nanobot/pull/5438) — *merged* |

**Critical Path:** Docker OAuth fixes (#5446, #5445) are **highest priority** — they unblock containerized deployments. The proxy URL issue needs a decision: normalize `socks://` → `socks5://` (user-friendly) or enforce standard only (current #5439 approach).

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Release |
|--------|--------|----------------------------|
| **Manual-only skill invocation** (`disable-model-invocation: true`) | [#5405](https://github.com/HKUDS/nanobot/pull/5405) | **High** — PR open with tests, addresses safety for deployment/publishing skills |
| **WebUI follow-up suggestions** (DeerFlow-style) | [#5408](https://github.com/HKUDS/nanobot/pull/5408) | **High** — PR open, enhances WebUX interactivity |
| **WebUI turn observability & safe recovery** | [#5420](https://github.com/HKUDS/nanobot/pull/5420) | **Medium** — Large PR, adds answer surfaces, usage tracking, interrupted work display |
| **nano_timer core tool** (time, timezone, calendar) | [#4853](https://github.com/HKUDS/nanobot/pull/4853) | **Medium** — Long-open (since Jul 8), dependency-free, useful for scheduling agents |
| **Sustained-goal continuation bounds** | [#5257](https://github.com/HKUDS/nanobot/pull/5257) | **Medium** — Prevents runaway "forever" goals; open since Aug 5 |
| **File management in WebUI settings** | [#4282](https://github.com/HKUDS/nanobot/pull/4282) | **Low** — Closed but shows demand; may reappear as refined PR |
| **Paid MCP/x402 security scanner integration** | [#5447](https://github.com/HKUDS/nanobot/issues/5447) | **Low** — External proposal, commercial, needs security/legal review |

**Predicted Next Version:** Manual-only skills, WebUI follow-ups, OAuth Docker fixes, Dream cursor fix, token consolidation fix, and `ask_clarification` tool.

## 7. User Feedback Summary

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Docker OAuth broken** | #5444: "PermissionError: [Errno 13] Permission denied: '/home/.../.oauth-cli-kit'" | Blocks containerized dev/prod use of OpenAI Codex provider |
| **Proxy config friction** | #5425: "common `socks://` alias" fails before reaching provider | Forces users to rewrite proxy URLs; breaks existing configs |
| **Dream automation unreliable** | #5441: "same history batch reprocessed... duplicating edits" | Cron-driven Dream runs produce duplicate work, waste tokens |
| **Token consolidation silent failure** | #5403: "30-50% lower than API's actual count... never triggers" | Context window exceeded without consolidation, likely truncation errors |
| **Windows skill compatibility** | #5341: bare `curl` resolves to `Invoke-WebRequest` alias | First weather command fails, requires agent retry loop |
| **TUI command discoverability** | #5443: `/exit` not in slash-command menu | Users unaware of proper exit method |

**Positive Signals:** Active PR engagement on fixes, WebUI improvements well-received (multiple PRs), new tooling (`ask_clarification`, `nano_timer`) addressing real agent needs.

## 8. Backlog Watch — Stale but Important

| Item | Age | Why It Matters | Blocker |
|------|-----|----------------|---------|
| [#4853](https://github.com/HKUDS/nanobot/pull/4853) `feat(tools): add nano_timer core tool` | **43 days** (opened 2026-07-08) | Fundamental time/calendar tool for scheduling agents; dependency-free, well-scoped | Marked `conflict` — needs rebase/review |
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) `fix(agent): bound sustained-goal continuation` | **15 days** (opened 2026-08-05) | Prevents runaway "forever" goals consuming resources | Marked `conflict` — needs rebase |
| [#5405](https://github.com/HKUDS/nanobot/pull/5405) `feat(skills): support manual-only invocation` | **4 days** | Safety-critical for deployment/publishing skills | Marked `conflict` — needs rebase |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) `fix(memory): preserve full consolidation input` | **7 days** | Data-loss risk during consolidation failure | Marked `conflict` — needs rebase |
| [#5271](https://github.com/HKUDS/nanobot/pull/5271) `fix(session): prevent stale background task saves` | **14 days** | Session corruption risk after `/new` | Marked `conflict` — priority **p0**, needs urgent attention |

**Maintainer Action Needed:** The **5 conflict-marked PRs** (especially p0 #5271 and p1 #4853) are stalled on merge conflicts. A rebase pass or conflict resolution sprint would unblock significant stability and feature work.

---

**Overall Health:** 🟢 **Healthy velocity, targeted fixes** — The project is actively addressing deployment blockers (Docker OAuth), core reliability (memory, Dream, sessions), and WebUX. The conflict backlog is the main risk; resolving those would accelerate the next release substantially.

*Data source: GitHub API snapshot for HKUDS/nanobot, 2026-08-20 00:00 UTC*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-20

## 1. Today's Overview
Hermes Agent shows **high development velocity** with 50 PRs and 6 issues updated in the last 24 hours, though no new release was published. The project is in active stabilization mode: multiple security hardening PRs, desktop regression fixes (freezes, window opacity, bot-mode session handling), and provider-specific patches (MiniMax reasoning, xAI auth, Nous Portal thinking toggle) are converging. Open PR count (43) significantly exceeds merged/closed (7), suggesting a backlog of review work. Community engagement remains modest (near-zero 👍/comments on most items), indicating primarily internal/maintainer-driven activity.

## 2. Releases
**No new releases today.** Current latest remains v0.20.4 (per issue #90404). Several merged PRs (e.g., #90064 title-generation fix, #90417 reasoning recovery) contain fixes likely destined for v0.20.5.

## 3. Project Progress — Merged/Closed PRs (7)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#90064](https://github.com/NousResearch/hermes-agent/pull/90064) | Bug | Title generation now honors `reasoning_effort` to disable thinking on DeepSeek-family models | Fixes empty titles from reasoning models |
| [#89617](https://github.com/NousResearch/hermes-agent/issues/89617) | Bug (Closed) | Bot Mode session-history timeout on Windows | User-reported blocker; retry workaround exists |
| [#82140](https://github.com/NousResearch/hermes-agent/issues/82140) | Feature (Closed) | Expose resolved Desktop connection mode (`local`/`remote`) to skills, MCP, plugins | Enables context-aware extensions |
| *4 others* | — | (Closed via sweep/auto-merge; details not in feed) | Likely minor fixes/docs |

**Key advancement:** Desktop extension surface now has authoritative connection-mode access (#82140), unblocking plugin/MCP developers.

## 4. Community Hot Topics
*Most commented/reacted items (all have 0 👍 and ≤4 comments — low external engagement):*

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#82140](https://github.com/NousResearch/hermes-agent/issues/82140) | Feature | 4 | **Plugin/MCP authors** need `window.hermesDesktop.getConnection()` to adapt behavior to local vs. remote gateway |
| [#89647](https://github.com/NousResearch/hermes-agent/issues/89647) | Bug | 1 | **MiniMax-M3 users** lose reasoning pane — reasoning streams inline in `content`, not `reasoning_content` |
| [#90410](https://github.com/NousResearch/hermes-agent/issues/90410) | Bug | 1 | **Multiplexed gateway users** lose conversation history on every turn when routed via `profile_routes` |
| [#90415](https://github.com/NousResearch/hermes-agent/issues/90415) | Docs | 0 | Clarify that `multiplex_profiles` isolates execution but **not** `GET /v1/runs/{id}` — expected per security model |

**Underlying theme:** Multi-profile/multi-connection Desktop users hit session-state and streaming-edge cases that single-profile users never see.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical (Regression)** | [#90404](https://github.com/NousResearch/hermes-agent/issues/90404) — Periodic 1–2s full-app freeze in Desktop v0.20.4 (vs. v0.20.0) | Open, needs repro | None yet |
| **High** | [#90410](https://github.com/NousResearch/hermes-agent/issues/90410) — Multiplexed gateway loses history every turn (`history=0`) | Open | None |
| **High** | [#89647](https://github.com/NousResearch/hermes-agent/issues/89647) — MiniMax-M3 reasoning pane dead (inline reasoning not extracted) | Open | [#90417](https://github.com/NousResearch/hermes-agent/pull/90417) (open) |
| **Medium** | [#89617](https://github.com/NousResearch/hermes-agent/issues/89617) — Bot Mode session-history timeout on Windows | **Closed** | Implicit in recent bot-mode PRs |
| **Medium** | [#87016](https://github.com/NousResearch/hermes-agent/pull/87016) — CJK config field descriptions hidden by ASCII-only normalize | Open PR | [#87016](https://github.com/NousResearch/hermes-agent/pull/87016) |
| **Medium** | [#90339](https://github.com/NousResearch/hermes-agent/pull/90339) — Win11 chat windows incorrectly transparent (breaks Snap/FancyZones) | Open PR | [#90339](https://github.com/NousResearch/hermes-agent/pull/90339) |

**Note:** Security hardening PR [#88435](https://github.com/NousResearch/hermes-agent/pull/88435) (10 guards: credential ACLs, MCP trust, cron lane, etc.) is open and high-priority but not a regression.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **ClinePass provider** (13 curated open models, $9.99/mo) | [#90416](https://github.com/NousResearch/hermes-agent/pull/90416) (PR) | High — PR open, adds first-class provider |
| **CI-ready JSONL streaming output** (`hermes chat --format stream-json`) | [#90411](https://github.com/NousResearch/hermes-agent/pull/90411) (PR) | High — Salvages old #12278, CI/CD demand |
| **Plugin per-session Composer draft API** (`host.composer.appendToSession`) | [#89672](https://github.com/NousResearch/hermes-agent/pull/89672) (PR) | Medium — Chinese-authored, solves Browser Annotator pain |
| **Expose connection mode to extensions** | [#82140](https://github.com/NousResearch/hermes-agent/issues/82140) (Closed) | **Done** — merged in this cycle |
| **Nous Portal “thinking off” honored** | [#90412](https://github.com/NousResearch/hermes-agent/pull/90412) (PR) | High — User-facing toggle was no-op |

**Prediction:** v0.20.5 will bundle MiniMax reasoning fix, ClinePass provider, JSONL streaming, and Nous thinking toggle. Windows freeze (#90404) may slip if repro elusive.

## 7. User Feedback Summary
| Pain Point | Evidence | Affected Segment |
|------------|----------|------------------|
| **Desktop freezes every few seconds** | #90404 “entire app stops responding 1–2s” | All Desktop v0.20.4 users |
| **Bot Mode unusable on Windows** | #89617 “timeout loading session history, retry works” | Windows Bot Mode users |
| **Reasoning pane empty for MiniMax** | #89647 “reasoning inline in content, never extracted” | MiniMax-M3 Plus subscribers |
| **Multiplexed gateway = no memory** | #90410 “history=0 every turn” | Multi-contact gateway deployments |
| **CJK config fields invisible** | #87016 “descriptions normalize to empty string” | Chinese/Japanese/Korean locales |
| **Installer crashes cryptically in ConstrainedLanguage** | #90128 “.NET error instead of reason” | Windows locked-down envs |

**Sentiment:** Frustration with v0.20.4 regressions (freeze, bot-mode, multiplexer) tempered by rapid fix PRs appearing same-day.

## 8. Backlog Watch — Stale/High-Value Items Needing Attention
| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#17938](https://github.com/NousResearch/hermes-agent/pull/17938) — Workspace binding guard for gateway file/terminal tools | **113 days** (opened 2026-04-30) | Security boundary: prevents repo mutation outside workspace via `cwd` tricks, `git -C`, nested shells | Broad compatibility risk (Windows, containers); needs maintainer review |
| [#71228](https://github.com/NousResearch/hermes-agent/pull/71228) — Nix: read manifests from repo root, not filtered source | **26 days** | Fixes read-only Nix eval broken by #65237 | Nix-specific; low reviewer bandwidth |
| [#85424](https://github.com/NousResearch/hermes-agent/pull/85424) — Title generation for reasoning models / strict local providers | **7 days** | `max_tokens=64` starves thinking models; hardcoded assumptions break Qwen3, DeepSeek-R1, GLM-5 | Requires provider-agnostic reasoning detection |
| [#88435](https://github.com/NousResearch/hermes-agent/pull/88435) — 10 security hardening guards (F1–F10) | **3 days** | Red-Blue verified; credential ACLs, MCP trust, cron script lane, media delivery, config fail-closed | Large surface; needs thorough review before merge |

**Maintainer action recommended:** Prioritize #17938 (security) and #90404 (user-visible regression). Consider fast-tracking #90417 (MiniMax reasoning) and #90416 (ClinePass) for v0.20.5.

---

*Digest generated from GitHub API data for NousResearch/hermes-agent on 2026-08-20. All links point to live GitHub items.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-20

## 1. Today's Overview
PicoClaw shows moderate maintenance activity with **5 PRs updated** and **1 issue closed** in the last 24 hours. No new releases were published. The project is actively addressing Telegram UX improvements, LINE channel configuration warnings, and routed-agent context management bugs. Two PRs were merged/closed (#3341, #3200), both tagged `[stale]`, indicating maintainers are clearing older contributions. Three open PRs remain under review, two of which are also marked `[stale]`, suggesting a backlog of pending reviews.

## 2. Releases
**No new releases** in the last 24 hours. The latest version remains unspecified in the provided data.

## 3. Project Progress
**Merged/Closed PRs (2):**

| PR | Title | Author | Status | Summary |
|----|-------|--------|--------|---------|
| [#3341](https://github.com/sipeed/picoclaw/pull/3341) | feat(telegram): add interactive command UX and formatted ephemeral fallback | As-tsaqib | **CLOSED** (2026-08-19) | Improves Telegram `/memory` command with interactive subcommand selection, reduces `/help` verbosity, and adds formatted ephemeral fallback for structured content. |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | feat(models): add configurable default fallback chain | lc6464 | **CLOSED** (2026-08-19) | Adds UI and backend support for configurable model fallback chains (default model + ordered fallbacks), persisted via API. |

**Open PRs under review (3):**

| PR | Title | Author | Created | Status |
|----|-------|--------|---------|--------|
| [#3329](https://github.com/sipeed/picoclaw/pull/3329) | fix(line): warn on inert webhook_host / webhook_port instead of seeding them | ex-takashima | 2026-08-11 | **OPEN** — Fixes unused config values in LINE channel; replaces silent seeding with warnings. |
| [#3316](https://github.com/sipeed/picoclaw/pull/3316) | fix: routed-agent context management not respecting history, summarization, compression, and seahorse bootstrap | j-v | 2026-08-03 | **OPEN [stale]** — Critical bug: routed agents lose conversation history, auto-compaction fails. |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | Support topics in private bot chats | genuss | 2026-08-03 | **OPEN [stale]** — Extends Telegram topic support to private bot chats with forum mode enabled. |

## 4. Community Hot Topics
| Item | Type | Activity | Link | Underlying Need |
|------|------|----------|------|-----------------|
| **#3316** | PR | 16 days open, `[stale]` | [#3316](https://github.com/sipeed/picoclaw/pull/3316) | **Reliability of routed agents**: Users expect persistent context, summarization, and token-aware compaction when agents are dispatched via rules (e.g., to Discord channels). Current behavior breaks core agent memory. |
| **#3315** | PR | 17 days open, `[stale]` | [#3315](https://github.com/sipeed/picoclaw/pull/3315) | **Telegram forum parity**: Private bot chats with topics enabled are a growing use case; PicoClaw currently only supports topics in supergroups. |
| **#1305** | Issue | Closed 2026-08-19 | [#1305](https://github.com/sipeed/picoclaw/issues/1305) | **CLI completion integrity**: Banner output to STDOUT breaks shell completion scripts — a developer experience regression introduced by PR #1008. |

> **Note**: No comments/reactions (`undefined`) are reported on PRs, limiting community signal quantification. The `[stale]` label on 3/5 PRs suggests maintainer bandwidth constraints.

## 5. Bugs & Stability
| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **High** | [#3316](https://github.com/sipeed/picoclaw/pull/3316) | Routed agents **lose all conversation history**; auto-compaction (summarization/compression) **never triggers**; seahorse bootstrap ignored. Affects multi-channel deployments using dispatch rules. | **PR open, stale** — Fix authored, awaiting review/merge. |
| **Medium** | [#1305](https://github.com/sipeed/picoclaw/issues/1305) | New banner prints to **STDOUT**, breaking `picoclaw completion zsh > _picoclaw` output parsing. Regression from PR #1008. | **Closed** — Root cause identified; fix likely in banner output routing (stderr vs stdout). |
| **Low** | [#3329](https://github.com/sipeed/picoclaw/pull/3329) | LINE channel accepts `webhook_host`/`webhook_port` config but **ignores them** (shared gateway handles webhooks). Silent misconfiguration risk. | **PR open** — Changes to emit warnings instead of seeding inert values. |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Configurable model fallback chains** | [#3200](https://github.com/sipeed/picoclaw/pull/3200) (merged) | ✅ **Already merged** — Will be in next release. |
| **Interactive Telegram command UX** | [#3341](https://github.com/sipeed/picoclaw/pull/3341) (merged) | ✅ **Already merged** — Ephemeral fallback, subcommand menus, cleaner `/help`. |
| **Telegram topic support in private chats** | [#3315](https://github.com/sipeed/picoclaw/pull/3315) | 🟡 **High** — PR ready, addresses real Telegram API behavior gap; marked stale but functional. |
| **LINE channel config validation** | [#3329](https://github.com/sipeed/picoclaw/pull/3329) | 🟡 **Medium** — Low-risk warning addition; improves operator clarity. |
| **Routed-agent context integrity** | [#3316](https://github.com/sipeed/picoclaw/pull/3316) | 🔴 **Critical but blocked** — Fix exists but stale; core reliability issue. |

## 7. User Feedback Summary
- **Pain point**: **Routed agents are "amnesiac"** — users configure dispatch rules (e.g., agent per Discord channel) but lose history, summarization, and compaction. This undermines the core value proposition of persistent agents. ([#3316](https://github.com/sipeed/picoclaw/pull/3316))
- **Pain point**: **Shell completion broken** by STDOUT banner — developers cannot generate reliable completion scripts. ([#1305](https://github.com/sipeed/picoclaw/issues/1305))
- **Positive signal**: Telegram UX improvements merged (#3341) show responsiveness to **interactive CLI-style friction**.
- **Unmet need**: Private Telegram bot topics — users adopting Telegram's forum-like features in 1:1 bot chats are unsupported. ([#3315](https://github.com/sipeed/picoclaw/pull/3315))
- **Config confusion**: LINE channel exposes unused webhook config — operators may waste time tuning inert settings. ([#3329](https://github.com/sipeed/picoclaw/pull/3329))

## 8. Backlog Watch
| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| **[#3316](https://github.com/sipeed/picoclaw/pull/3316)** | 17 days | **High** — Core agent memory broken for routed deployments | **Urgent review/merge**; consider hotfix branch if next release delayed. |
| **[#3315](https://github.com/sipeed/picoclaw/pull/3315)** | 17 days | **Medium** — Feature gap for Telegram power users | Review and merge; low complexity, high user visibility. |
| **[#3329](https://github.com/sipeed/picoclaw/pull/3329)** | 9 days | **Low** — Config hygiene | Quick review; warning-only change, minimal risk. |

> **Maintainer attention needed**: Two `[stale]` PRs (#3316, #3315) have been open >2 weeks with fixes for user-visible bugs/features. The `#3316` fix is especially critical for production deployments using agent routing.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-20

## 1. Today's Overview
NanoClaw saw **high merge velocity** on 2026-08-19 with **23 PRs closed/merged** and **9 PRs still open**, while **3 new issues** were filed. No new release was cut. The merged work clusters around three themes: **Slack agent-flow split and provisioning hardening**, **Node 22+ runtime support** (including a `better-sqlite3` upgrade), and **new provider/skill integrations** (Cursor Agent SDK, Telegram group picker, agent mailbox seam). Open issues flag setup friction on fresh macOS/Node 26 and a Dial SMS delivery-state bug. Overall, the project is in a **feature-expansion + platform-hardening sprint** with active core-team involvement.

---

## 2. Releases
**No new releases today.** The last published version remains prior to 2026-08-19. The merged PRs (#3360, #3357, #3358, #3351, etc.) collectively represent a **significant batch of changes** that will likely ship in the next minor/major release.

---

## 3. Project Progress — Merged/Closed PRs (2026-08-19)

| PR | Type | Summary | Link |
|----|------|---------|------|
| **#3360** | Core fix | Upgrade `better-sqlite3` 11.10.0 → 13.0.3; raise host Node minimum 20 → 22; fix `uvx nodeenv` fallback; update CI/docs/changelog. | [#3360](https://github.com/qwibitai/nanoclaw/pull/3360) |
| **#3357** | Feature | `--slack-agents` flag now installs full Slack agents feature (child bots, a2a rooms, canvases, DM onboarding). | [#3357](https://github.com/qwibitai/nanoclaw/pull/3357) |
| **#3358** | Refactor | Split Slack payload: `/add-slack` = base adapter only; `/slack-agent-flow` = agents feature; adapt to async central DB. | [#3358](https://github.com/qwibitai/nanoclaw/pull/3358) |
| **#3351** | Feature | Telegram: owner/global-admin `/connect_group` DM command with native group picker; approved-group onboarding flow. | [#3351](https://github.com/qwibitai/nanoclaw/pull/3351) |
| **#3352** | Docs | Document approved Telegram group connection flow; add test validation to `/add-telegram`. | [#3352](https://github.com/qwibitai/nanoclaw/pull/3352) |
| **#3340** | Fix | `pending_approvals` gains `instance` column so OneCLI credential cards are posted/edited by the owning bot identity. | [#3340](https://github.com/qwibitai/nanoclaw/pull/3340) |
| **#3342** | Feature | Decline owner-absent Slack **channel** invites instead of escalating to approve/reject card. | [#3342](https://github.com/qwibitai/nanoclaw/pull/3342) |
| **#3345** | Feature | Forward optional `client_version` / `client_metadata` on Slack service requests. | [#3345](https://github.com/qwibitai/nanoclaw/pull/3345) |
| **#3344** | Feature | Add optional request-origin metadata (requestor, creator, client) to provisioning app creation. | [#3344](https://github.com/qwibitai/nanoclaw/pull/3344) |
| **#3341** | Fix | Derive Slack service from credential issuer; pair install token (account service) with Slack service config. | [#3341](https://github.com/qwibitai/nanoclaw/pull/3341) |
| **#3339** | Fix | Fail closed when stored sign-in cannot be verified (was treated as passed). | [#3339](https://github.com/qwibitai/nanoclaw/pull/3339) |
| **#3249** | Fix (open) | Handle existing Node outside supported range — still open, related to #3359. | [#3249](https://github.com/qwibitai/nanoclaw/pull/3249) |

**Other closed PRs** include approvals recording, provisioning metadata, and several setup/Slack hardening fixes.

---

## 4. Community Hot Topics (Most Active Items)

| Item | Type | Comments/Reactions | Underlying Need |
|------|------|-------------------|-----------------|
| **#3025** | PR (closed) | Undefined comments | Raise agent SDK output-token cap from 32k to model max — indicates users hitting token limits in long-running agent tasks. |
| **#3050** / **#3041** | PRs (open) | Undefined comments | **Dial channel adapter** (SMS + AI voice calls) + wizard integration — strong demand for telephony channel. |
| **#3357** / **#3358** | PRs (closed) | — | **Slack agent-flow split** — core team investing in multi-agent Slack experience; signals upcoming first-class agent marketplace. |
| **#3355** / **#3356** | PRs (open) | — | **Cursor Agent SDK provider** — direct integration with Cursor IDE; reflects push to embed NanoClaw in developer workflows. |
| **#3349** | PR (open) | — | **Agent mailbox seam/registry** — foundational infra for agent-to-agent messaging; enables future multi-agent topologies. |

> **Note:** GitHub comment counts were not provided (`undefined` in data). Activity inferred from PR volume, core-team labels, and issue recency.

---

## 5. Bugs & Stability — Today’s Reports

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | **#3359** | Node 26 (Homebrew default on macOS arm64) passes `check_node` but `better-sqlite3 11.10.0` fails to compile → bootstrap aborts. | **Yes** — #3360 upgrades `better-sqlite3` to 13.0.3 and raises Node floor to 22. |
| **Medium** | **#3354** | Two setup bugs in non-login/headless SSH: (1) 0-byte channel files left on failed `git show`; (2) `onecli` check runs before PATH fix. | **No PR yet** — setup assumes interactive shell. |
| **Medium** | **#3353** | Dial adapter records SMS as `delivered` when accepted; carrier rejection later doesn’t update status, retry budget, or notify agent/owner. | **No PR yet** — needs webhook/callback handling for carrier status updates. |
| **Low** | **#3249** (PR) | Existing Node outside supported range not handled gracefully — still open, overlaps #3359. | **Partial** — #3360 addresses Node 22+ but not explicit version-gating UX. |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Evidence | Likelihood for Next Release |
|--------|----------|----------------------------|
| **Slack multi-agent (agents feature)** | #3357, #3358 merged; `--slack-agents` flag now full install | **Very high** — already merged, behind flag |
| **Telegram group onboarding** | #3351, #3352 merged | **High** — merged, needs release |
| **Cursor Agent SDK provider** | #3355, #3356 open, core-team labeled | **High** — active PRs, follows skill guidelines |
| **Agent mailbox seam/registry** | #3349 open, core-team labeled | **Medium-High** — foundational, may wait for stabilization |
| **Dial (SMS/Voice) channel** | #3041, #3050 open since July | **Medium** — large feature, needs review cycles |
| **Node 22+ as baseline** | #3360 merged | **Certain** — merged, will be in next release |
| **Provisioning metadata / audit trail** | #3344, #3345 merged | **High** — merged, ops-focused |

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Source | Context |
|------------|--------|---------|
| **Fresh macOS install breaks on Node 26** | #3359 | Homebrew ships Node 26; `better-sqlite3` 11.x incompatible. Blocks zero-to-running. |
| **Headless/SSH install fails silently** | #3354 | Non-login shells miss PATH setup; leaves 0-byte files; `onecli` check runs too early. Affects CI, servers, remote VMs. |
| **SMS delivery false positives** | #3353 | Carrier rejection invisible; no retry, no alert. Critical for reliability-sensitive comms. |
| **Token cap too low for agent workloads** | #3025 | 32k output cap truncates long agent responses; users want model-native limits. |
| **Slack channel invite noise** | #3342 | Any member can add bot to channel → owner spammed with approve cards. Now auto-declined. |

**Positive signals**: Core team rapidly merging multi-agent Slack, Telegram group picker, and provider extensibility — indicates roadmap alignment with “NanoClaw as agent platform” vision.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Status | Age | Why It Matters |
|------|--------|-----|----------------|
| **#3354** | Open issue | 1 day | Headless install broken — blocks CI, servers, automated provisioning. No PR yet. |
| **#3353** | Open issue | 1 day | Dial SMS reliability gap — carrier rejection silent. No PR yet. |
| **#3249** | Open PR | 6 days | Node version gating UX; overlaps #3359/#3360. Needs review/merge or close. |
| **#3041** / **#3050** | Open PRs | 37 days | Dial channel adapter + wizard — large, long-open feature. Needs core-team review bandwidth. |
| **#3349** | Open PR | 1 day | Agent mailbox seam — foundational for multi-agent. Early, but core-team labeled. |
| **#3355** / **#3356** | Open PRs | 1 day | Cursor Agent SDK — new provider, follows guidelines. Quick win if reviewed. |

---

## Links Reference
- Issues: [#3359](https://github.com/qwibitai/nanoclaw/issues/3359) · [#3354](https://github.com/qwibitai/nanoclaw/issues/3354) · [#3353](https://github.com/qwibitai/nanoclaw/issues/3353)
- Key PRs: [#3360](https://github.com/qwibitai/nanoclaw/pull/3360) · [#3357](https://github.com/qwibitai/nanoclaw/pull/3357) · [#3358](https://github.com/qwibitai/nanoclaw/pull/3358) · [#3351](https://github.com/qwibitai/nanoclaw/pull/3351) · [#3352](https://github.com/qwibitai/nanoclaw/pull/3352) · [#3340](https://github.com/qwibitai/nanoclaw/pull/3340) · [#3342](https://github.com/qwibitai/nanoclaw/pull/3342) · [#3345](https://github.com/qwibitai/nanoclaw/pull/3345) · [#3344](https://github.com/qwibitai/nanoclaw/pull/3344) · [#3341](https://github.com/qwibitai/nanoclaw/pull/3341) · [#3339](https://github.com/qwibitai/nanoclaw/pull/3339) · [#3249](https://github.com/qwibitai/nanoclaw/pull/3249) · [#3050](https://github.com/qwibitai/nanoclaw/pull/3050) · [#3041](https://github.com/qwibitai/nanoclaw/pull/3041) · [#3355](https://github.com/qwibitai/nanoclaw/pull/3355) · [#3356](https://github.com/qwibitai/nanoclaw/pull/3356) · [#3349](https://github.com/qwibitai/nanoclaw/pull/3349) · [#3025](https://github.com/qwibitai/nanoclaw/pull/3025)

---

*Digest generated 2026-08-20 from GitHub data (issues/PRs updated 2026-08-19). No release data for today.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-20

## 1. Today's Overview
NullClaw showed minimal activity over the past 24 hours with zero issue updates, zero merged/closed PRs, and only one open PR (#989) addressing a documentation visualization issue. The project appears to be in a low-activity maintenance phase with no new releases or feature development visible in the current window. Community engagement metrics (comments, reactions) are absent from the single active PR, suggesting limited immediate contributor interaction.

## 2. Releases
No new releases published today.

## 3. Project Progress
No PRs were merged or closed today. The sole active PR remains open:
- **PR #989** – *fix: restore broken star history chart*  
  Author: FaintFlower | Status: Open  
  [View PR](https://github.com/nullclaw/nullclaw/pull/989)  
  **Summary:** Replaces the README’s star-history chart source from the restricted GitHub Stargazer API to the token-free `star-history.dera.page` endpoint, restoring chart rendering. The change is isolated to documentation assets and carries no code/runtime impact.

## 4. Community Hot Topics
Only one item qualifies:
- **PR #989** – 0 comments, 0 reactions.  
  **Underlying need:** Maintain accurate project visibility metrics on the landing page without relying on rate-limited or authenticated GitHub endpoints. This reflects a broader maintenance concern: keeping showcase elements functional as third-party APIs evolve.

## 5. Bugs & Stability
No bug reports, crashes, or regressions were filed or updated today. PR #989 addresses a *display* bug (broken chart) but is not a functional defect in the agent/assistant runtime.

## 6. Feature Requests & Roadmap Signals
No new feature requests or roadmap discussions surfaced in the last 24 hours. The absence of issue activity suggests either stable feature completeness or community engagement occurring outside the issue tracker (e.g., Discord, discussions tab).

## 7. User Feedback Summary
No direct user feedback (issues, comments, reactions) captured today. The single PR author’s fix implies a maintainer/contributor noticed the broken chart proactively rather than via user complaint.

## 8. Backlog Watch
No long-unanswered issues or PRs are highlighted in the provided data set. With zero open issues and only one open PR (created yesterday), the backlog appears clear. Maintainer attention should next focus on reviewing/merging PR #989 to close the documentation gap.

---

*Data source: GitHub REST API snapshots for nullclaw/nullclaw (issues, PRs, releases) covering 2026-08-19 → 2026-08-20.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-20

## 1. Today's Overview

IronClaw shipped **v1.3.0 stable** yesterday (promoted from RC2), capping a release cycle focused on upgrade reliability and container fixes. The repository shows **high velocity**: 38 PRs and 14 issues updated in 24 hours, with 18 PRs merged/closed — a healthy merge rate (~47%). Core workstreams converging this week include: **persistent per-user sandboxes** (Epic #7732, Step 1 landed in #7751), **notification inbox infrastructure** (#7697 merged, #7698 in review), **subagent/turn vocabulary foundations** (#7752 merged), **CI stability hardening** (#7756 merged), and **MCP local transport unblocking** (#7757 open). Several QA-filed bugs from a bug bash (#7745, #7744) and a user-reported "confused and stopped working" incident (#7748) signal ongoing polish needs ahead of v1.4.0.

---

## 2. Releases

### **ironclaw-v1.3.0** (2026-08-19) — [Release Notes](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.3.0)
- **Promotion**: Stable release of `1.3.0-rc.2` (commit `8483596bf`).
- **Key Fix**: Upgrades from v1.2 now **accept and preserve the released extension `activation_state` field** instead of crash-looping during startup.
- **Scope**: Includes all RC1 fixes (container upgrades, extension handling) validated in RC2.
- **Migration**: No breaking changes reported; in-place upgrade supported.
- **PR**: [#7754](https://github.com/nearai/ironclaw/pull/7754) — version bump only, no behavior change.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Title | Scope | Status |
|----|-------|-------|--------|
| [#7754](https://github.com/nearai/ironclaw/pull/7754) | chore(release): promote 1.3.0-rc.2 → 1.3.0 | Release | ✅ Merged |
| [#7752](https://github.com/nearai/ironclaw/pull/7752) | feat(turns): subagent activation provenance, `activate()` primitive, autonomous-wake cap (slice 1) | Agent/Loop | ✅ Merged |
| [#7756](https://github.com/nearai/ironclaw/pull/7756) | fix(ci): bound every unbounded CI operation — apt hangs, uncapped jobs, external downloads | CI/Infra | ✅ Merged |
| [#7697](https://github.com/nearai/ironclaw/pull/7697) | feat(notifications): durable user inbox, product APIs, pagination, unread counts | Notifications/Backend | ✅ Merged |
| [#7686](https://github.com/nearai/ironclaw/pull/7686) | refactor(runtime): centralize capability outcome processing (PR 1 of #7627) | Runtime/Core | ✅ Merged |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | feat(coding): omp core-tool contract + engines + benchmark arm (slices 1–4) | Coding Tools | ✅ Merged |
| [#6994](https://github.com/nearai/ironclaw/pull/6994) | feat(webui): OOBE automation-tasks prototype — carousel, inline cards, agent-mode pill | WebUI/Onboarding | ✅ Merged |
| [#7603](https://github.com/nearai/ironclaw/pull/7603) | Batch BeforeModel checkpoints per-N iterations (Tier 3) | Loop/Performance | ✅ Merged |
| [#7602](https://github.com/nearai/ironclaw/pull/7602) | Cache lease-fence token instead of journal read per transcript write (Tier 2) | Loop/Performance | ✅ Merged |
| [#7681](https://github.com/nearai/ironclaw/pull/7681) | Slack: unlinked-user connect message made private, removes manual round-trip | Channel/Slack | ✅ Merged |
| [#6993](https://github.com/nearai/ironclaw/pull/6993) | Backend wiring for OOBE automation-tasks prototype | WebUI/Backend | ✅ Merged |
| [#7688](https://github.com/nearai/ironclaw/pull/7688) | Add durable notification inbox contracts, storage, ProductSurface APIs | Notifications | ✅ Merged |

**Summary**: Major merges this week delivered **v1.3.0**, **subagent activation primitives**, **notification inbox backend**, **CI reliability fixes**, **coding tool consolidation**, and **OOBE onboarding backend** — all aligned with the v1.4.0 epic roadmap.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#7732](https://github.com/nearai/ironclaw/issues/7732) | Issue (Epic) | 7 | **Persistent per-user sandbox** — replace create-container-per-command with reusable Docker Exec containers per `(tenant, user)`. Step 1 PR [#7751](https://github.com/nearai/ironclaw/pull/7751) open. |
| [#7692](https://github.com/nearai/ironclaw/pull/7692) | PR (XL) | — | **Normalize provider failures & auth diagnostics** for model context — PR 2 of capability-response-normalization (#7627). Stacked on #7686 (merged). |
| [#7698](https://github.com/nearai/ironclaw/pull/7698) | PR (XL) | — | **Generalize notification center** — WebUI consumer for the inbox APIs merged in #7697. Replaces automation-only model with generic approval/auth/failed/completed notifications. |
| [#7752](https://github.com/nearai/ironclaw/pull/7752) | PR (XL) | — | **Subagent activation provenance** — adds `ActivationProvenance` (Human/ParentAgent/System), `activate()` primitive, derived autonomous-wake cap. **No production behavior change**; `builtin.spawn_subagent` stays deny-filtered. |
| [#7751](https://github.com/nearai/ironclaw/pull/7751) | PR (XL) | — | **Persistent per-user container with Docker Exec** — Step 1 of #7732. Reuses `RebornSandboxUserKey`, ~40ms exec vs container create. |
| [#7757](https://github.com/nearai/ironclaw/pull/7757) | PR (M) | — | **Allow hosted MCP on loopback IP** — unblocks local MCP servers (addresses #5998). Rejects `deny_private_ip_ranges` for literal `127.0.0.1`. |
| [#5998](https://github.com/nearai/ironclaw/issues/5998) | Issue | 1 | **No transport for local MCP server** — stdio rejected, loopback HTTP denied. PR #7757 targets this. |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) | Issue (Epic) | 0 | **Storybook + AI-first Design System** — Phase 1 PR [#7750](https://github.com/nearai/ironclaw/pull/7750) open (Storybook integration, design-system catalog). |

**Analysis**: The top discussions revolve around **three v1.4.0 pillars**: (1) **Persistent user compute** (sandbox epic #7732), (2) **Notification/approval UX** (inbox + center), and (3) **Agent autonomy foundations** (subagent provenance, turn vocabulary). CI stability (#7756) and local MCP (#7757) are high-impact unblockers.

---

## 5. Bugs & Stability

| Issue | Severity | Description | Fix PR |
|-------|----------|-------------|--------|
| [#7748](https://github.com/nearai/ironclaw/issues/7748) | **High** (user-reported) | "IronClaw got confused and stopped working" — reported via Slack feedback channel. No repro steps yet. | — |
| [#7745](https://github.com/nearai/ironclaw/issues/7745) | **Medium** (QA P2) | Copilot MCP extension install fails: `auth_required`, duplicate catalog entries (`mcp-gh-copilot-mcp` + `copilot-mcp`), unclear token type. | — |
| [#7744](https://github.com/nearai/ironclaw/issues/7744) | **Medium** (QA P3) | Cron job UI missing **edit** and **test/trigger** buttons — view-only management. | — |
| [#7603](https://github.com/nearai/ironclaw/issues/7603) | **Medium** (Perf) | BeforeModel checkpoint written every LLM call (11→~4 checkpoints/turn target). | [#7603](https://github.com/nearai/ironclaw/pull/7603) ✅ Merged |
| [#7602](https://github.com/nearai/ironclaw/issues/7602) | **Medium** (Perf) | Lease-fence token re-read per transcript write (2-connection journal pool). | [#7602](https://github.com/nearai/ironclaw/pull/7602) ✅ Merged |
| [#7753](https://github.com/nearai/ironclaw/pull/7753) | **Low** (Fix) | Terminal dispatch records lost on capability failure — `discard_pending` escape hatch removed. | [#7753](https://github.com/nearai/ironclaw/pull/7753) 🟢 Open |

**Stability Note**: v1.3.0 resolved the critical v1.2→v1.3 upgrade crash. The two performance tickets (#7602, #7603) are merged. The user-reported "confused" issue (#7748) lacks diagnostics — may need logging/telemetry investment.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for v1.4.0 |
|--------|--------|----------------------|
| **Persistent per-user sandbox (Docker Exec)** | Epic #7732, PR #7751 | 🟢 **High** — Step 1 open, core to "user computer" vision |
| **Durable notification inbox + WebUI center** | #7688, #7697✅, #7698 | 🟢 **High** — Backend merged, frontend in review |
| **Subagent activation provenance & `activate()` primitive** | #7752✅ | 🟢 **High** — Foundation merged, production gated |
| **OOBE / onboarding automation-tasks** | Epic #7044, #6994✅, #6993✅ | 🟢 **High** — Prototype merged behind flag |
| **Storybook + Design System** | Epic #7038, PR #7750 | 🟡 **Medium** — Phase 1 (Storybook) open, full system multi-phase |
| **Local MCP server transport (stdio/loopback)** | #5998, PR #7757 | 🟢 **High** — Targeted fix open, unblocks developers |
| **Automation creation preflight (bounded ready/needs_setup)** | #7742, PR #7743 | 🟡 **Medium** — Part of #6879, PR open |
| **Coding tool consolidation (omp contract)** | #7491✅ | ✅ **Done** — Six bare tools: `read, write, edit, glob, grep, bash` |
| **CI bounding (apt, jobs, downloads)** | #7756✅ | ✅ **Done** — Merge queue stability restored |

**Prediction**: v1.4.0 will likely ship **persistent sandbox**, **notification inbox UX**, **OOBE onboarding**, and **subagent primitives** as headline features. Design system and automation preflight may land as incremental phases.

---

## 7. User Feedback Summary

| Channel | Feedback | Sentiment |
|---------|----------|-----------|
| **Slack #x-ai-product-feedback** (via #7748) | "It just got confused and stopped working" — abrupt failure, no error context. | 😟 **Negative** — reliability gap |
| **QA Bug Bash** (#7745, #7744) | Copilot MCP install broken (auth, duplicates, token confusion); Cron UI read-only (no

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-20

## 1. Today's Overview
LobsterAI shows **active maintenance with a focus on stabilization and UX polish** rather than new feature development. In the last 24 hours, 8 PRs were merged/closed — all addressing bugs, installer improvements, and UI enhancements — while 6 issues remain open (all tagged `[stale]`, originally filed in April 2026). No new release was published. The project appears to be in a **maintenance/bug-fix cycle**, clearing a backlog of older issues and refining the Windows installer and IM integrations.

## 2. Releases
**No new releases in the last 24 hours.** The latest version remains **2026.4.3** (referenced in issue #1566). Users experiencing regressions in this version (e.g., repeated identical responses, file upload failures) should monitor the merged fixes in PRs #1576, #1580, #1582 for potential inclusion in the next patch.

## 3. Project Progress — Merged/Closed PRs (2026-08-19)

| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2512](https://github.com/netease-youdao/LobsterAI/pull/2512) | Installer, Windows, Docs | Hide silent-install banner for `dictbind` channel only; preserve banner for other silent paths; update design spec & contract coverage. | Improves Windows distribution UX for specific channel; no functional change for most users. |
| [#2511](https://github.com/netease-youdao/LobsterAI/pull/2511) | Build, Installer, Windows, Docs | Adds upload-first two-pass web installer for NOS-hosted payloads; enforces SHA-256 invariant between stub and payload. | Hardens Windows web-install reliability; reduces risk of corrupted/stale payloads. |
| [#1570](https://github.com/netease-youdao/LobsterAI/pull/1570) | Scheduled Tasks | Fix: editing a disabled task no longer re-enables it (edited task retains original `enabled` state). | Restores expected user control over scheduled tasks. |
| [#1573](https://github.com/netease-youdao/LobsterAI/pull/1573) | IM Channels | Adds slash-command support (`/help`, `/status`, `/new`, `/compact`, `/stop`, `/clear`) for Telegram, DingTalk, Feishu, Discord, QQ, WeChat. | **Major UX upgrade** for IM users — enables lightweight session control without desktop app. |
| [#1576](https://github.com/netease-youdao/LobsterAI/pull/1576) | API, Streaming | Fixes race condition where old request's async `abort` callback removed new request's SSE listeners, causing silent stream loss. | **Critical stability fix** for rapid stop-then-send workflows; prevents lost responses. |
| [#1578](https://github.com/netease-youdao/LobsterAI/pull/1578) | Permission Modal | Adds Bash syntax highlighting to command preview in approval dialog (keywords, flags, pipes, dangerous patterns). | Improves security review speed; reduces accidental approval of destructive commands. |
| [#1580](https://github.com/netease-youdao/LobsterAI/pull/1580) | Prompt Input | Replaces image-attachment icon+filename with 64×64 thumbnail preview (uses existing `dataUrl`). | **Visible UX improvement** — users can visually confirm uploaded images instantly. |
| [#1582](https://github.com/netease-youdao/LobsterAI/pull/1582) | Setup, Python, Windows | Detects & overwrites stale `pip.__main__.py` from pre-#475 installs, fixing recursive-call errors on `pip install`. | Resolves lingering install-corruption issue for upgraders from early 2026 builds. |

**Net progress**: 8 fixes/improvements merged — 3 Windows installer, 2 core stability (streaming, pip), 2 UI/UX (thumbnails, syntax highlight), 1 IM feature, 1 scheduled-task bug.

## 4. Community Hot Topics (Most Active Issues)

| Issue | Comments | Reactions | Core Need |
|-------|----------|-----------|-----------|
| [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | 5 | 0 | **App fails to respond after query** — no output, no error; user stuck. Logs attached. |
| [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) | 2 | 0 | **Uploaded files invisible to model** — regression: files no longer placed in `project/` dir where model expects them. |
| [#1566](https://github.com/netease-youdao/LobsterAI/issues/1566) | 2 | 0 | **Model replies identically to every input** (v2026.4.3) — logs show repeated same output. |
| [#1551](https://github.com/netease-youdao/LobsterAI/issues/1551) | 1 | 0 | **Gateway restarts loop on network change** — recovers only when network reverts. |
| [#1563](https://github.com/netease-youdao/LobsterAI/issues/1563) | 1 | 0 | **Typo in Traffic Package Terms of Service page** — copy error on public site. |
| [#1567](https://github.com/netease-youdao/LobsterAI/issues/1567) | 1 | 0 | **Request: quick-action buttons in input bar** — stop topic, compact context, help command for recovery. |

**Analysis**: Top pain points are **core chat failures** (#1569, #1566) and **file-context regression** (#1561) — both block basic usage. #1567's request for recovery UI aligns with merged PR #1580 (thumbnails) and #1573 (slash commands), suggesting the team is addressing "stuck state" UX incrementally.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Related Fix PR |
|----------|-------|--------|----------------|
| **Critical** | [#1566](https://github.com/netease-youdao/LobsterAI/issues/1566) — Model returns identical response to all inputs (v2026.4.3) | Open, stale | None yet |
| **Critical** | [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) — No response, no error after query | Open, stale | None yet |
| **High** | [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) — Uploaded files not passed to model (regression) | Open, stale | None yet |
| **High** | [#1551](https://github.com/netease-youdao/LobsterAI/issues/1551) — Gateway restart loop on network change | Open, stale | None yet |
| **Medium** | SSE listener race condition (silent stream loss) | **Fixed** | [#1576](https://github.com/netease-youdao/LobsterAI/pull/1576) ✅ |
| **Medium** | Pip corruption on upgrade from pre-#475 builds | **Fixed** | [#1582](https://github.com/netease-youdao/LobsterAI/pull/1582) ✅ |
| **Low** | Editing disabled scheduled task re-enables it | **Fixed** | [#1570](https://github.com/netease-youdao/LobsterAI/pull/1570) ✅ |
| **Low** | ToS page typo | Open, stale | None (content fix) |

**Note**: Three critical/high bugs from April remain open with no fix PRs linked. The merged PRs address *different* stability issues (streaming race, pip, task edit).

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Quick-action buttons in input bar** (stop, compact, help) | [#1567](https://github.com/netease-youdao/LobsterAI/issues/1567) | **High** — aligns with merged slash-commands (#1573) and thumbnail preview (#1580); recovery UX is a theme. |
| **Slash commands for IM channels** | [#1573](https://github.com/netease-youdao/LobsterAI/pull/1573) | **Delivered** — merged; will ship in next release. |
| **Image attachment thumbnails** | [#1580](https://github.com/netease-youdao/LobsterAI/pull/1580) | **Delivered** — merged. |
| **Bash syntax highlight in approval dialog** | [#1578](https://github.com/netease-youdao/LobsterAI/pull/1578) | **Delivered** — merged. |
| **File upload path restoration (project/ dir)** | [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) | **Medium** — regression; likely prioritized once root cause identified. |
| **Gateway resilience to network flaps** | [#1551](https://github.com/netease-youdao/LobsterAI/issues/1551) | **Medium** — infrastructure-level; may require deeper architecture work. |

**Prediction**: Next patch (likely **2026.4.4** or **2026.5.x**) will bundle the 8 merged PRs + fixes for #1566/#1569/#1561 if reproducible. Quick-action bar (#1567) is a strong candidate for the following minor release.

## 7. User Feedback Summary

| Pain Point | Frequency | User Impact | Example Quote |
|------------|-----------|-------------|---------------|
| **Complete non-response** | 1 issue, 5 comments | Blocks all usage | "提问后不运行，也不显示任何信息" — no output, no error, no logs visible to user. |
| **Identical responses** | 1 issue, 2 comments | Renders chat useless | "无论输入什么都回复相同内容" — same reply to every prompt. |
| **File upload broken** | 1 issue, 2 comments | Breaks RAG/workflow | "模型不知道我有上传文件...以前是传文件之后，文件会放到project目录下" — regression from prior working behavior. |
| **Gateway instability** | 1 issue, 1 comment | Intermittent downtime | "网络环境发生变化可能会导致网关反复重启" — requires network revert to recover. |
| **Desire for recovery controls** | 1 issue, 1 comment | No escape hatch | "需要有快速恢复手段...提供快捷按钮或者强制阶段按钮" — users feel trapped when context/state breaks. |

**Sentiment**: **Frustrated but engaged** — users provide logs, screenshots, and clear repro steps. The `[stale]` label on all open issues suggests triage backlog; users may feel unheard despite detailed reports.

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#1566](https://github.com/netease-youdao/LobsterAI/issues/1566) | 134 days | **Core chat broken** — identical replies = unusable. Logs attached. | **Urgent**: Assign for reproduction; check if #1576 (SSE race) is related. |
| [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | 134 days | **Silent failure** — no error, no output. User provided screenshot. | **Urgent**: Add client-side error boundary / toast for "no response after X sec". |
| [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) | 134 days | **File context regression** — breaks document QA workflow. | **High**: Trace file-handling path; restore `project/` dir injection or update model context. |
| [#1551](https://github.com/netease-youdao/LobsterAI/issues/1551) | 134 days | **Gateway flapping** — infrastructure reliability. | **Medium**: Add exponential backoff + circuit breaker; log network-change events. |
| [#1563](https://github.com/netease-youdao/LobsterAI/issues/1563) | 134 days | **Public-facing typo** — legal/compliance risk. | **Low effort**: Fix copy on `dataPackageServe.html`; deploy hotfix. |
| [#1567](https://github.com/netease-youdao/LobsterAI/issues/1567) | 134 days | **UX gap** — no recovery UI when stuck. | **Planned**: Design quick-action bar; leverage slash-command infra from #1573. |

**Maintainer signal**: The 8 merged PRs show capacity for rapid fixes. Prioritizing the three critical open bugs (#1566, #1569, #1561) would dramatically improve perceived stability. Consider removing `[stale]` label once triaged to signal active investigation.

---

**Links Reference**
- Repository: https://github.com/netease-youdao/LobsterAI
- Issues: https://github.com/netease-youdao/LobsterAI/issues
- Pull Requests: https://github.com/netease-youdao/LobsterAI/pulls
- Releases: https://github.com/netease-youdao/LobsterAI/releases

*Digest generated from GitHub data as of 2026-08-19 23:59 UTC. Next digest: 2026-08-21.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-20

## 1. Today's Overview
Moltis shows **high maintenance velocity** with 9 PRs updated in 24 hours (6 merged/closed, 3 open) and 4 issues resolved. The team closed all active bug reports from the past two weeks, covering Apple Container compatibility, vault authentication security (CWE-306), GPT-5.6 Luna model routing, and cron heartbeat scheduling. A new patch release **20260818.10** shipped two days ago. Current open PRs focus on WhatsApp UX polish, channel tool-policy configurability, and cron active-hours enforcement — all incremental improvements rather than new features.

## 2. Releases
**20260818.10** (2026-08-18)  
No changelog provided in the data. Given the PR merge timeline, this release likely includes the Apple Container status parsing fix (#1214), vault auth hardening (#1216), and GPT-5.6 Luna routing (#1213) — all merged on 2026-08-19, suggesting a rapid follow-up patch may be imminent.

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Area | Summary |
|----|------|---------|
| [#1216](https://github.com/moltis-org/moltis/pull/1216) | **Security** | Added `AuthSession` extractor to `POST /api/auth/vault/unlock` and `/recovery`; fixes CWE-306 (missing auth) reported in #1177. |
| [#1214](https://github.com/moltis-org/moltis/pull/1214) | **Apple Container** | Replaced fragile JSON substring matching with typed status decoder supporting both pre-1.x scalar `status` and 1.x nested `status.state`; fixes #1185. |
| [#1215](https://github.com/moltis-org/moltis/pull/1215) | **Apple Container** | Pass `--memory`, `--cpus`, and `--ulimit nproc=` to `apple-container` CLI; reject fractional CPU quotas explicitly; fixes #1188. |
| [#1213](https://github.com/moltis-org/moltis/pull/1213) | **Models / Routing** | Added deterministic routing test coverage for GPT-5.6 Sol/Terra/Luna; synced live model-health list; added credentialed Luna streaming regression test; fixes #1181. |
| [#1212](https://github.com/moltis-org/moltis/pull/1212) | **Models / Routing** | Classify built-in OpenAI endpoint by normalized URL; preserve Responses API routing for reasoning+tools when official OpenAI URL is used. |
| [#1217](https://github.com/moltis-org/moltis/pull/1217) | **WhatsApp** | Treat replies to the bot as addressing it in `mention_mode = "mention"` groups (handles `ContextInfo.stanza_id` alongside `mentioned_jid`). |

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#1177](https://github.com/moltis-org/moltis/issues/1177) Vault auth bypass (CWE-306) | **Security-critical**; 0 comments but fixed within 24h of report via #1216 | Unauthenticated vault unlock/recovery endpoints exposed brute-force risk — users expect auth gates on all sensitive APIs. |
| [#1219](https://github.com/moltis-org/moltis/pull/1219) Channel tool-policy ceiling configurable | Open PR, 0 comments | Operators want granular control over tool policies for non-operator turns in shared channels; current hardcoded deny-all is too restrictive. |
| [#1208](https://github.com/moltis-org/moltis/pull/1208) Cron heartbeat active hours | Open PR, 0 comments | `heartbeat.active_hours` config existed but was never wired — users expect scheduled heartbeats to respect quiet hours. |

*No issues/PRs have significant comment threads or reactions; activity is maintainer-driven.*

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical (Security)** | [#1177](https://github.com/moltis-org/moltis/issues/1177): Vault unlock/recovery endpoints missing auth (CWE-306) | ✅ Closed | [#1216](https://github.com/moltis-org/moltis/pull/1216) merged |
| **High** | [#1185](https://github.com/moltis-org/moltis/issues/1185): Apple Container 1.x sandbox misdetected as stopped | ✅ Closed | [#1214](https://github.com/moltis-org/moltis/pull/1214) merged |
| **High** | [#1188](https://github.com/moltis-org/moltis/issues/1188): Resource limits (memory/CPU/pids) not applied to apple-container backend | ✅ Closed | [#1215](https://github.com/moltis-org/moltis/pull/1215) merged |
| **Medium** | [#1181](https://github.com/moltis-org/moltis/issues/1181): GPT-5.6 Luna routing issue | ✅ Closed | [#1213](https://github.com/moltis-org/moltis/pull/1213) merged |
| **Medium** | [#1205](https://github.com/moltis-org/moltis/issues/1205): Cron `heartbeat.active_hours` ignored | ✅ Closed | [#1208](https://github.com/moltis-org/moltis/pull/1208) open (fix ready) |

*All reported bugs from the past two weeks have fixes merged or ready to merge.*

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Configurable tool-policy ceiling for untrusted channel turns** | [#1219](https://github.com/moltis-org/moltis/pull/1219) (open) | High — PR is open, addresses over-restriction from #1170 |
| **Custom WhatsApp push name (not hardcoded "Moltis")** | [#1218](https://github.com/moltis-org/moltis/pull/1218) (open) | High — trivial UX fix, PR ready |
| **Cron heartbeat respects `active_hours`** | [#1208](https://github.com/moltis-org/moltis/pull/1208) (open) | High — completes documented but unimplemented feature |
| **Model routing test matrix expansion** | [#1213](https://github.com/moltis-org/moltis/pull/1213) merged | Ongoing — each new GPT variant adds test coverage |

*No major new feature requests in issues; roadmap signals are polish/completion of existing capabilities.*

## 7. User Feedback Summary
- **Apple Container users** hit two blocking bugs simultaneously (status detection + resource limits) — both fixed in same-day PRs, indicating responsive maintainer attention to this backend.
- **Security-conscious deployers** benefit from rapid CWE-306 remediation (<24h from report to merge).
- **WhatsApp group admins** will see bot name reflect configured identity (not "Moltis") and replies treated as mentions once #1217/#1218 land.
- **Cron users** finally get working `active_hours` — a documented feature that was silently no-op.
- **No dissatisfaction signals** in issues; all reporters used preflight checklist and provided context.

## 8. Backlog Watch
| Item | Age | Concern |
|------|-----|---------|
| [#1219](https://github.com/moltis-org/moltis/pull/1219) Channel tool-policy configurability | 1 day | Open PR with no review yet; affects shared-channel security model — needs maintainer decision on policy layer design. |
| [#1218](https://github.com/moltis-org/moltis/pull/1218) WhatsApp push name | 1 day | Simple fix, but touches builder hook semantics — verify no side effects on presence stanzas. |
| [#1208](https://github.com/moltis-org/moltis/pull/1208) Cron active hours | 3 days | Ready to merge; closes long-standing gap between docs and behavior. |

*No stale issues — all bugs from July/August resolved. The three open PRs are the only items needing maintainer action.*

---

**Health Indicator**: 🟢 **Healthy** — High merge rate, zero open bugs, security issues fixed rapidly, incremental polish PRs in queue. Next release likely a patch (20260819.x or 20260820.x) bundling the three open PRs.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-20

## 1. Today's Overview
CoPaw shows **high maintenance velocity** with 78 total items (32 issues, 46 PRs) updated in the last 24 hours, though most issues are historical items being closed/cleaned rather than newly reported. Only **3 issues remain open**, while 29 were closed yesterday—indicating a focused triage/cleanup sprint. PR activity is strong: 30 open PRs under review and 16 merged/closed, covering provider expansions, stability fixes, UI polish, and a major new **self-hosted multi-user Hub** feature. No new release was cut today.

## 2. Releases
**No new releases published today.** The latest version in the data is Desktop 2.1.0 (referenced in issues #7102, #7076).

## 3. Project Progress — Merged / Closed PRs (Last 24h)
| PR | Title | Area | Status |
|----|-------|------|--------|
| [#7151](https://github.com/agentscope-ai/QwenPaw/pull/7151) | feat(console): add folder creation to directory browser | Console / Files UI | **CLOSED** (merged) |
| [#7137](https://github.com/agentscope-ai/QwenPaw/pull/7137) | fix(console): polish model selector styles | Console / UI | **CLOSED** (merged) |
| [#6986](https://github.com/agentscope-ai/QwenPaw/pull/6986) | fix(sandbox): fix antivirus software blocking issues | Sandbox / Security | **CLOSED** (merged) |
| [#7103](https://github.com/agentscope-ai/QwenPaw/pull/7103) | test(integration): expand integration test coverage (routing, channels, tools, MCP, coding-project) | Testing / CI | **CLOSED** (merged) |
| [#6800](https://github.com/agentscope-ai/QwenPaw/pull/6800) | feat(mailbox): intelligent email management assistant with real-time monitoring | New Feature / Email Agent | **CLOSED** (merged, first-time contributor) |

**Notable advances:**  
- Antivirus false-positive mitigation for sandbox execution (#6986) — directly addresses user reports of CoPaw being killed by AV.  
- Integration test suite significantly broadened (#7103), improving confidence for routing, channel adapters, MCP, and coding-project flows.  
- Email agent (mailbox) feature landed (#6800), adding autonomous mail triage/response across providers.  
- Console UX improvements: folder creation in file browser, model selector polish.

## 4. Community Hot Topics — Most Active Issues / PRs
| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#2884](https://github.com/agentscope-ai/QwenPaw/issues/2884) | 27 | 🐛 Critical / Data Loss | **User's home directory almost wiped** after CoPaw install on Ubuntu 22.04; suspicion of bug or compromise. Highest anxiety signal. |
| [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) | 9 | 🐛 Hang / Regression | **Freeze >10 min** on Desktop 2.1.0 with GLM 5.3; thinking loop stalls, no tokens emitted. |
| [#2723](https://github.com/agentscope-ai/QwenPaw/issues/2723) | 9 | 🐛 UX / State Loss | Task context **disappears after switching channels**; history not restored. |
| [#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112) | — | ✨ Major Feature | **Self-hosted multi-user Hub** (opt-in control plane for isolated app instances). Strategic direction for team/enterprise use. |
| [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) | — | ✨ Providers | Volcengine Agent Plan & MiMo V2.5 providers + refreshed model catalogs. Expands Chinese LLM ecosystem support. |

**Underlying themes:**  
- **Trust & safety** (#2884) — catastrophic data loss report, even if isolated, damages credibility.  
- **Reliability of long-running agent loops** (#7102, #6624) — stalls, memory compaction failures.  
- **Multi-user / team deployment** (#7112, #2493) — growing demand for shared, server-hosted CoPaw.  
- **Provider breadth** (#6515, #2705, #2503) — users want seamless access to domestic Chinese models (DashScope, Volcengine, MiniMax).

## 5. Bugs & Stability — Reported Today (Ranked by Severity)
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **Critical** | [#2884](https://github.com/agentscope-ai/QwenPaw/issues/2884) | Home directory nearly wiped on Ubuntu after CoPaw install; software also deleted. | ❌ No fix PR linked |
| **High** | [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) | Desktop 2.1.0 freezes >10 min with GLM 5.3; thinking/token stream stalls. | ✅ **#7150** (stall detection & recovery) |
| **High** | [#7023](https://github.com/agentscope-ai/QwenPaw/issues/7023) | Desktop startup blocks ~60 s on mandatory Playwright Chromium install; no skip/lazy option. | ❌ No fix PR yet |
| **Medium** | [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) | CoPaw processes killed by antivirus; WorkBuddy not affected. | ✅ **#6986** (sandbox AV mitigation) merged |
| **Medium** | [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) | Auto-compaction (Scroll) doesn't trigger `summarize_when_compact`; manual `/compact` works. | ❌ No fix PR |
| **Medium** | [#7076](https://github.com/agentscope-ai/QwenPaw/issues/7076) | qwenpaw-creator: LLM model config 404 error on v2.1.0. | ❌ No fix PR |
| **Low** | [#2877](https://github.com/agentscope-ai/QwenPaw/issues/2877) | Chat session selector invisible at normal browser width (only visible when narrowed to mobile). | ❌ No fix PR |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Self-hosted multi-user Hub** | [#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112) (PR open) | **High** — PR is large, strategic, under active review. |
| **Unified Tool Panel / Web Preview / Interactive Terminal in Chat** | [#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) | **High** — detailed spec, touches core+console, strong dev-experience value. |
| **Volcengine Agent Plan & MiMo V2.5 providers** | [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) | **High** — PR under review, catalog refresh already done. |
| **Session-scoped multi-project directories** | [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) | **Medium-High** — PR open, enables multi-repo agent workflows. |
| **Reranker UI config for ReMeLight memory** | [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | **Medium** — UI for existing backend feature. |
| **Harness Agents / DeerFlow orchestration / ACP (OpenCode, Codex) support** | [#3260](https://github.com/agentscope-ai/QwenPaw/issues/3260) | **Low-Medium** — architectural, needs design; community interest visible. |
| **Custom config storage paths (skills, core files, agents)** | [#3018](https://github.com/agentscope-ai/QwenPaw/issues/3018) | **Medium** — closed but recurring ask; may resurface. |
| **ARM-native Chromium for browser_use on Apple Silicon** | [#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) | **Medium** — performance/correctness for Mac users. |

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Catastrophic data loss fear** | #2884 (27 comments) — "home directory almost emptied" | 🔴 **Extreme dissatisfaction / panic** |
| **Antivirus kills CoPaw processes** | #6847, #2715 — AV blocks sandbox/agent execution | 🟠 **Frustration**; WorkBuddy cited as working alternative |
| **Startup latency (Playwright install)** | #7023 — 60 s blocking on every boot | 🟠 **Annoyance**; want lazy/optional install |
| **LLM stream stalls / freezes** | #7102 (9 comments) — 10+ min hang, no tokens | 🟠 **Reliability blocker** for daily use |
| **State loss on channel switch** | #2723 — task context vanishes | 🟡 **Workflow disruption** |
| **Mobile web UI broken** | #2856 — input invisible on phone browser | 🟡 **Accessibility gap** |
| **Settings not persisted (language/theme)** | #2663 — reverts to EN/light on restart | 🟡 **Papercut** |
| **Skill toggle resets to disabled** | #2557 — custom skills revert after refresh | 🟡 **Config persistence bug** |
| **Memory/compaction not working automatically** | #6624, #3082 — auto-summarize fails, agent "forgets" memory.md | 🟡 **Core agent loop gap** |

**Positive signals:**  
- Email agent (#6800) landed from community contributor.  
- Integration test expansion (#7103) shows commitment to stability.  
- Provider catalog updates (#6515) keep Chinese model ecosystem current.

## 8. Backlog Watch — Stale / Unanswered Important Items
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2884](https://github.com/agentscope-ai/QwenPaw/issues/2884) | 140 days (created 2026-04-03) | **Critical safety incident**; root cause unknown. Needs post-mortem or at least acknowledgment. |
| [#2493](https://github.com/agentscope-ai/QwenPaw/issues/2493) | 144 days | Multi-client / cloud ↔ desktop sync — strategic for team use; no maintainer response. |
| [#3260](https://github.com/agentscope-ai/QwenPaw/issues/3260) | 131 days | Harness/ACP/DeerFlow orchestration — architectural direction; community pulling for it. |
| [#3082](https://github.com/agentscope-ai/QwenPaw/issues/3082) | 134 days | "Agent doesn't consult memory.md when stuck" — core memory UX gap. |
| [#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) | 142 days | ARM Chromium for browser_use — affects all Apple Silicon users; performance hit. |
| [#2201](https://github.com/agentscope-ai/QwenPaw/issues/2201) | 149 days | Tool layer design: tools swallowing errors & burning tokens — architectural debt. |

---

**Overall Health Assessment:**  
🟢 **Active development** (46 PRs/24h, major features merging).  
🟡 **Stability debt** — several high-severity bugs (freeze, AV, startup lag) with fixes in progress but not all landed.  
🔴 **Trust incident** (#2884) unresolved for months; should be prioritized for transparency.  
🟢 **Community contributions** arriving (email agent, provider catalogs, UI polish).  
🟡 **Roadmap clarity** — Hub PR (#7112) signals multi-tenant direction; orchestration/ACP still open questions.

*Data as of 2026-08-20 00:00 UTC; sourced from GitHub issues/PRs updated 2026-08-19.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-20

---

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 50 PRs and 8 issues updated in the last 24 hours, though only 1 PR was merged/closed — indicating a pipeline heavy with in-progress work rather than completed deliveries. The project is deep in a **v0.8.5 stabilization window** (frozen intake since Aug 4, targeting Aug 30) while simultaneously driving major architectural RFCs around runtime-owned conversation sessions, lighter core via external integrations, and Rust anti-slop policy remediation. Security and correctness dominate current PR activity: path-policy enforcement, WASM export deadlines, agent workspace preservation, and provider modality parsing. No new releases today; the codebase is in a **pre-release hardening phase** with multiple XL-sized refactors blocked on author action or maintainer review.

---

## 2. Releases

**No new releases** published today. The active stabilization tracker **#9459** targets v0.8.5 by August 30, 2026, with weekly cuts shipping ready work. Intake froze on August 4; the milestone page remains the source of truth for included items.

---

## 3. Project Progress

Only **1 PR merged/closed** in the last 24h (data shows 49 open, 1 merged/closed). The merged PR is not explicitly listed in the top-20 by comment count, suggesting it may be a smaller or routine change. Key **in-flight advances** (all open, actively updated today):

| PR | Area | Summary | Status |
|----|------|---------|--------|
| [#9853](https://github.com/zeroclaw-labs/zeroclaw/pull/9853) | Workspace/Deps | Remove `aardvark-sys` and `zeroclaw-robot-kit` (zero reverse deps) | Open, needs author action |
| [#9937](https://github.com/zeroclaw-labs/zeroclaw/pull/9937) | Security/Config | Enforce `forbidden_paths` under allowed roots/workspace | Open |
| [#9715](https://github.com/zeroclaw-labs/zeroclaw/pull/9715) | Runtime/Infra | Make JSONL session migration retry-safe (lock + SQLite tx) | Open |
| [#9726](https://github.com/zeroclaw-labs/zeroclaw/pull/9726) | Runtime/Daemon | `TaskRecord` as single background lifecycle owner | Open, follow-up |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | Gateway | Add OpenAI Chat Completions endpoint | **Blocked** |
| [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) | Zerocode/UI | Multi-session panes, agent sidebar, quickstart | Open |
| [#9744](https://github.com/zeroclaw-labs/zeroclaw/pull/9744) | Gateway/Security | Require authenticated webhook ingress before agent dispatch | Open |
| [#9743](https://github.com/zeroclaw-labs/zeroclaw/pull/9743) | Providers | Wire modalities parser into `capabilities_for_model` | Open, needs author action |
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) | Tools/Security | Per-agent ownership scoping for session tools & `discord_search` | Open |
| [#9403](https://github.com/zeroclaw-labs/zeroclaw/pull/9403) | Plugins/WASM | Bound WASM exports by wall-clock deadline (30s default) | Open, priority P1 |
| [#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745) | Memory/Security | Per-agent attribution & scoping in knowledge graph | Open |
| [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) | Providers/Anthropic | Classify incomplete terminal responses (require `message_stop`) | **In progress**, priority P1 |

---

## 4. Community Hot Topics

| Item | Type | Comments | Core Theme |
|------|------|----------|------------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | Issue (RFC) | 20 | **Runtime-owned conversation sessions & transport surface adapters** — architectural boundary ratification between #9487/#9488/#9600; introduces `InboundAction`, durable admission, ambiguous-outcome semantics. High risk, needs maintainer review. |
| [#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) | Issue (Tracker) | 16 | **Rust anti-slop policy debt remediation** — 307 candidates across 1,078 files (202 production panics, 47 `unwrap`/`expect` in hot paths, etc.). Staged cleanup tracker. |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | Issue (RFC) | 16 | **Lighter core via external integrations** — offload long-tail integrations to reduce config, security, compatibility burden. High risk, needs maintainer review. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Issue (Tracker) | 13 | **Maintainer decision queue** — active queue for RFCs, design issues, release-policy questions needing code-owner attention. Accepted, no-stale. |

**Underlying needs**: The community is pushing for **architectural clarity** (session ownership, core boundaries), **code quality discipline** (anti-slop), and **decision throughput** (maintainer queue). All high-comment items are process/architecture trackers — not feature requests — signaling a project maturing its governance.

---

## 5. Bugs & Stability

**Newly reported today (2026-08-20):**

| Issue | Severity | Area | Fix PR? |
|-------|----------|------|---------|
| [#10149](https://github.com/zeroclaw-labs/zeroclaw/issues/10149) | **High (risk:high)** | Config/Runtime | No PR yet |
| [#10147](https://github.com/zeroclaw-labs/zeroclaw/issues/10147) | **S2 — Degraded** | Config/Onboarding | No PR yet |

**Active high-severity bug fixes (open PRs, updated today):**

| PR | Severity | Area | Summary |
|----|----------|------|---------|
| [#9937](https://github.com/zeroclaw-labs/zeroclaw/pull/9937) | High | Security/Config | `forbidden_paths` not enforced under allowed roots |
| [#9715](https://github.com/zeroclaw-labs/zeroclaw/pull/9715) | High | Runtime/Infra | JSONL session migration not retry-safe |
| [#9938](https://github.com/zeroclaw-labs/zeroclaw/pull/9938) | High | Agent/Runtime | Provider ref truncated → multi-alias pricing breaks |
| [#9726](https://github.com/zeroclaw-labs/zeroclaw/pull/9726) | High | Runtime/Daemon | Background lifecycle split between task record & worker |
| [#9743](https://github.com/zeroclaw-labs/zeroclaw/pull/9743) | High | Providers | Modalities parser not wired → capability detection fails |
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) | High | Tools/Security | Session tools lack per-agent ownership scoping |
| [#9403](https://github.com/zeroclaw-labs/zeroclaw/pull/9403) | **P1** | Plugins/WASM | Unbounded WASM exports (no deadline) |
| [#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745) | High | Memory/Security | Knowledge graph lacks agent ownership |
| [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) | **P1** | Providers/Anthropic | Incomplete terminal responses misclassified as complete |
| [#10064](https://github.com/zeroclaw-labs/zeroclaw/pull/10064) | High | Telegram/Gemini | Approval cards don't self-destruct after tap |
| [#9724](https://github.com/zeroclaw-labs/zeroclaw/pull/9724) | High | Approval/Runtime | `always_ask` dropped in Full autonomy mode |
| [#9723](https://github.com/zeroclaw-labs/zeroclaw/pull/9723) | High | Tool-call parser | DeepSeek DSML/`<|tool_call|>` envelopes not parsed |

**Assessment**: **12 high/P1 bug-fix PRs active simultaneously** — a heavy correctness backlog being tackled in the stabilization window. Two new config/runtime bugs filed today have no fix PRs yet.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for v0.8.5 / Next |
|--------|--------|------------------------------|
| **OpenAI Chat Completions gateway endpoint** | [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) (blocked) | Low for v0.8.5 (blocked), high for v0.9 |
| **Runtime-owned conversation sessions / transport adapters** | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) (RFC) | Architectural — post-v0.8.5 |
| **Lighter core via external integrations** | [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) (RFC) | Strategic — multi-release effort |
| **Multi-session panes, agent sidebar, quickstart (Zerocode)** | [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) | High — active XL PR, UI polish |
| **Authenticated webhook ingress for gateway channels** | [#9744](https://github.com/zeroclaw-labs/zeroclaw/pull/9744) | High — security hardening, in stabilization |
| **Per-agent knowledge graph ownership** | [#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745) | High — security fix + feature |
| **Telegram media group batching** | [#8955](https://github.com/zeroclaw-labs/zeroclaw/pull/8955) | Medium — channel-specific, needs author action |
| **SOP pane as read-only status view** | [#9694](https://github.com/zeroclaw-labs/zeroclaw/pull/9694) | Medium — UX improvement, low risk |

**Prediction**: v0.8.5 will ship **security/correctness fixes** (path policy, WASM deadlines, agent scoping, Anthropic classification, migration safety) plus **Zerocode UI polish** (multi-session, SOP view). Gateway OpenAI endpoint and runtime-owned sessions are **post-v0.8.5**.

---

## 7. User Feedback Summary

**Pain points surfaced in issues/PRs:**

| Pain Point | Evidence |
|------------|----------|
| **Custom agent workspace paths lost on delete retry** | [#10149](https://github.com/zeroclaw-labs/zeroclaw/issues/10149) — config entry removed before archival; retry can't recover custom path |
| **Explicit config init sections cannot be completed across CLI processes** | [#10147](https://github.com/zeroclaw-labs/zeroclaw/issues/10147) — partial section persists, later CLI can't finish required leaves |
| **Telegram approval cards persist after operator action** | [#10064](https://github.com/zeroclaw-labs/zeroclaw/pull/10064) — UX friction, no self-destruct |
| **DeepSeek tool calls rendered as raw envelope text** | [#9723](https://github.com/zeroclaw-labs/zeroclaw/pull/9723) — DSML/`<|tool_call|>` not parsed |
| **Anthropic incomplete responses shown as complete** | [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) — misleading UX |
| **`always_ask` silently ignored in Full autonomy** | [#9724](https://github.com/zeroclaw-labs/zeroclaw/pull/9724) — operator intent dropped |
| **WASM plugins can hang indefinitely** | [#9403](https://github.com/zeroclaw-labs/zeroclaw/pull/9403) — no call timeout |

**Positive signals**: Active contributor base (multiple "distinguished contributor" PRs), detailed RFC process, weekly stabilization cadence, and security-first fixes (path policy, auth ingress, knowledge graph scoping) show a project responding to **operator/integrator needs for reliability and multi-tenant safety**.

---

## 8. Backlog Watch

**Long-standing / stale-candidate items needing maintainer attention:**

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | **~4 months** (Apr 27) | Open RFC, needs maintainer review | Core architectural direction — "lighter core" decision blocks integration strategy |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | **~3 weeks** (Jul 28) | Open RFC, high risk, needs maintainer review | Runtime session ownership — foundational for channels/gateway/ACP |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | **~7 weeks** (Jun 29) | **Blocked**, XL, high risk | OpenAI Chat Completions endpoint — high external demand (LangChain, Continue.dev, Aider) |
| [#9403](https://github.com/zeroclaw-labs/zeroclaw/pull/9403) | **~3.5 weeks** (Jul 26) | Open, **P1**, needs maintainer review | WASM export deadline — security/stability critical for plugin ecosystem |
| [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) | **~3.5 weeks** (Jul 27) | **In progress**, P1, needs author action | Anthropic terminal response classification — correctness for major provider |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | **~6 weeks** (Jul 4) | Accepted tracker | Maintainer decision queue — if stale, RFC/design throughput stalls |

**Risk**: Three **P1/high-risk PRs** (#9403, #9447, #8486) and two **foundational RFCs** (#6165, #9487) have gone **3+ weeks without resolution**. The maintainer decision queue (#8692) exists but shows only 13 comments in 6 weeks — decision velocity may be a bottleneck for the v0.8.5 freeze and post-release roadmap.

---

*Digest generated from GitHub data as of 2026-08-20. All links point to zeroclaw-labs/zeroclaw.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*