# OpenClaw Ecosystem Digest 2026-08-19

> Issues: 225 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-19 01:42 UTC

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

# OpenClaw Project Digest — 2026-08-19

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 500 PRs and 225 issues updated in the last 24 hours, though only 100 PRs and 10 issues were actually closed/merged — indicating a large volume of in-flight work rather than completion. The project is in a **heavy bug-fix and stabilization phase** with multiple P1/P0 issues around session state corruption, memory leaks, gateway OOM crashes, and authentication failures. No new release was published today. The "clawsweeper" automation labels (needs-maintainer-review, needs-product-decision, source-repro) appear on most critical issues, suggesting a structured triage process but also a backlog of items awaiting maintainer bandwidth.

---

## 2. Releases

**No new releases today.** The latest version appears to be `2026.7.1-2` (referenced in multiple issues). Several PRs are tagged `automerge armed` but none have merged into a release branch yet.

---

## 3. Project Progress — Merged/Closed PRs Today (100 total)

Key merged/closed PRs (from top 30 by activity):

| PR | Title | Area | Status |
|----|-------|------|--------|
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | feat(security): require acknowledgement for install policy warnings | Security, CLI, Gateway | **CLOSED** — Ready for maintainer look |
| [#121906](https://github.com/openclaw/openclaw/pull/121906) | feat(ui): show domain favicons on chat links | Web UI, Gateway | **CLOSED** — Ready for maintainer look |
| [#126109](https://github.com/openclaw/openclaw/pull/126109) | feat(ui): enable link favicons by default | Web UI, Gateway | **CLOSED** — Waiting on author |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | feat(ui): review install policy warnings | Web UI, Security | **CLOSED** — Ready for maintainer look |
| [#124015](https://github.com/openclaw/openclaw/pull/124015) | fix(signal): report managed daemon port collisions before startup | Signal channel | **OPEN** — Automerged armed |
| [#126056](https://github.com/openclaw/openclaw/pull/126056) | fix(ui): start new chat worktrees from fresh defaults | Web UI, Gateway | **OPEN** — Automerged armed |
| [#126074](https://github.com/openclaw/openclaw/pull/126074) | feat(sessions): expose sidebar category controls | Agents, Sessions | **CLOSED** — Ready for maintainer look |
| [#123975](https://github.com/openclaw/openclaw/pull/123975) | fix(scripts): typecheck hangs forever when tsgo wedges | Scripts, CI | **OPEN** — Ready for maintainer look |
| [#124014](https://github.com/openclaw/openclaw/pull/124014) | fix(auth): reset only the profile replaced by a successful login | Auth, Multiple providers | **OPEN** — Automerged armed |
| [#116019](https://github.com/openclaw/openclaw/pull/116019) | fix(net): settle unread response bodies before releasing SSRF guard | Network, Security | **OPEN** — Waiting on author |

**Theme:** Security hardening (install policy acknowledgements, SSRF guard), auth flow fixes, UI stability (favicons, session recovery), and CI reliability.

---

## 4. Community Hot Topics — Most Active Issues/PRs

### Top Issues by Comment Count

| Issue | Comments | Priority | Core Problem |
|-------|----------|----------|--------------|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 60 | P1 🦞 | **Realtime voice retains unbounded provider/consult state** — resource limits are soft (item counts/cancellation) not hard bounds, causing memory bloat under bursty conditions |
| [#77598](https://github.com/openclaw/openclaw/issues/77598) | 23 | P2 | **24-hour dev agent behavior watch** — observational tracking of agent trajectory, stuck recovery patterns |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | 16 | P1 🦞 | **Large SQLite transcript cleanup blocks gateway event loop** — full materialization/compression/I/O on main thread during session cleanup |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 15 | P1 🦞 | **Transcript projection reconcile livelocks under sustained writes** — synchronous rebuild cycles stall event loop for tens of seconds |
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | 15 | P0 🦪 | **CLI startup preflight corrupts live state DB** — `openclaw.sqlite` corrupted 4x in 5 days on macOS while gateway running (CLOSED but recent activity) |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 14 | P1 🐚 | **"Cannot convert undefined or null to object" with google-vertex/gemini-3.1-pro-preview** — regression in 2026.3.2 |

### Top PRs by Activity
Most active PRs are **security/UI fixes awaiting maintainer review** (#116489, #121906, #120900) and **automerge-armed** operational fixes (#124015, #126056, #124014).

**Underlying needs:** 
- **Session stability** — multiple P1 issues around event-loop blocking, transcript handling, SQLite corruption
- **Auth reliability** — OAuth refresh failures, provider fallback chains broken
- **Resource bounds** — unbounded memory growth in voice, memory-core tables, transcript projections
- **Maintainer throughput** — "needs-maintainer-review" on 40+ critical issues suggests bottleneck

---

## 5. Bugs & Stability — Ranked by Severity

### 🔴 P0 / Critical (🦞 Diamond Lobster / 🐚 Platinum Hermit)

| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | P1 🦞 | No | Realtime voice: unbounded provider/consult state retention → memory leak |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | P1 🦞 | No | SQLite transcript cleanup blocks gateway event loop (sync I/O on main thread) |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | P1 🦞 | No | Transcript projection livelock under sustained writes → main thread stall |
| [#115424](https://github.com/openclaw/openclaw/issues/115424) | P1 🐚 | No | **Gateway V8 heap OOM** → restart-recovery converts 1 crash into 7-core-dump loop |
| [#123360](https://github.com/openclaw/openclaw/issues/123360) | P1 🦞 | No | Memory-core dreaming: first-finisher cleanup races sibling phases → narratives discarded |
| [#125570](https://github.com/openclaw/openclaw/issues/125570) | P1 🦞 | No | Skill Workshop update overwrites live skill description → breaks skill routing |
| [#115546](https://github.com/openclaw/openclaw/issues/115546) | P1 🦞 | No | CLI-budget compaction timeout fires far below deadline (4.9s–50s) → 100% failure on large sessions |

### 🟠 P1 / High (🦞 Diamond Lobster)

| Issue | Fix PR? | Summary |
|-------|---------|---------|
| [#114211](https://github.com/openclaw/openclaw/issues/114211) | No | Matrix room agents loop on no-reply output, replay stale state after restart |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | No | Usage-cost refresh lock never releasable after container restart (PID reuse) |
| [#115041](https://github.com/openclaw/openclaw/issues/115041) | No | Direct turn drops to silence on bare NO_REPLY after completed draft — text discarded |
| [#92186](https://github.com/openclaw/openclaw/issues/92186) | No | Foreground reply fence cancels delivery of completed replies to earlier concurrent messages |
| [#114154](https://github.com/openclaw/openclaw/issues/114154) | No | bundle-mcp: tool passes policy/probe but never bundled — ToolSearch finds nothing |

### 🟡 P2 / Medium (🦪 Silver Shellfish / 🦐 Gold Shrimp)

| Issue | Fix PR? | Summary |
|-------|---------|---------|
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | No | Memory-core SQLite tables (`memory_index_chunks`, `memory_embedding_cache`) unbounded growth — no retention policy |
| [#75782](https://github.com/openclaw/openclaw/issues/75782) | No | Embedded-run "auth" stage takes 10–15s synchronously regardless of auth state |
| [#88657](https://github.com/openclaw/openclaw/issues/88657) | No | DeepSeek V4 Flash incomplete turns (payloads=0, tools=2) in 2026.5.27/28 |
| [#90595](https://github.com/openclaw/openclaw/issues/90595) | No | Cron "failed" notifications fire during hot reload/retries → alert fatigue |
| [#98753](https://github.com/openclaw/openclaw/issues/98753) | No | CLI health/cron list close gateway WebSocket with 1006 after doctor fix |
| [#115478](https://github.com/openclaw/openclaw/issues/115478) | No | WeChat plugin fails to load: missing `openclaw/plugin-sdk/channel-runtime` export |
| [#115256](https://github.com/openclaw/openclaw/issues/115256) | No | Desktop app boot-loops gateway; `doctor` recommends fix app immediately reverts |
| [#114913](https://github.com/openclaw/openclaw/issues/114913) | No | Memory search: bound primary embeddings before outer tool deadline, fall back to FTS |

**Note:** Only 2 of the top 20 bugs have linked fix PRs (#114234, #114154 show `clawsweeper:linked-pr-open`). Most critical bugs lack active fixes.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|----------------------------|
| [#115437](https://github.com/openclaw/openclaw/issues/115437) | **Support fast mode on claude-cli runtime** (like Codex has) — Anthropic fast mode 2.5× throughput | High — PR-ready, clear user value |
| [#77467](https://github.com/openclaw/openclaw/issues/77467) | **MiniMax Portal OAuth token auto-refresh** — `refreshOAuth` not implemented | High — Auth gap, 2hr token expiry |
| [#93120](https://github.com/openclaw/openclaw/issues/93120) | **Gemini TPM/RPM rate limits fail to retry** — regex misclassification, needs configurable max retries | Medium — Regex fix + config |
| [#8724](https://github.com/openclaw/openclaw/issues/8724) | **Per-model generation timeout config** — Gemini Flash infinite thinking loops | Medium — Long-standing (Feb), P3 |
| [#97341](https://github.com/openclaw/openclaw/issues/97341) | **Slack per-thread context customization/isolation** — threads are independent conversations | Medium — Architectural, needs session routing changes |
| [#116348](https://github.com/openclaw/openclaw/issues/116348) | **Suppress/rate-limit "No reply was generated" fallback spam** in mention-gated groups | High — UX pain, simple config flag |
| [#116315](https://github.com/openclaw/openclaw/issues/116315) | **server_is_overloaded on ChatGPT OAuth: fallback fails when fallback model missing** + session overrides bypass fallback chain | High — Production incident pattern |
| [#20837](https://github.com/openclaw/openclaw/issues/20837) | **Make agent aware of communication channel** (Telegram vs dashboard vs Slack) | Low — Long-standing (Feb), architectural |

**Predicted next-version candidates:** Fast mode for claude-cli, MiniMax OAuth refresh, "No reply" fallback rate-limiting, Gemini retry fix — all have clear scope and user impact.

---

## 7. User Feedback Summary — Real Pain Points

### From Issues (User Voice)

| Pain Point | Frequency | Example Quotes |
|------------|-----------|----------------|
| **Session instability / data loss** | 15+ issues | "narrative text silently discarded" (#87182), "completed narratives discarded for fallback diary entries" (#123360), "good assistant text is discarded" (#115041) |
| **Gateway crashes / OOM loops** | 8+ issues | "converts one crash into a 7-core-dump loop" (#115424), "restart loop visible in Docker Desktop" (#86612) |
| **Auth silently fails / misleading errors** | 6+ issues | "silent OAuth refresh miss misreported as 'No API key found'" (#113169), "fallback fails when fallback model missing" (#116315) |
| **CLI commands break gateway** | 4+ issues | "health/cron list close gateway WebSocket with 1006" (#98753), "CLI startup preflight corrupts live state DB" (#101290) |
| **Message loss in group chats** | 4+ issues | "only reply to LATEST message delivered to WhatsApp" (#92186), "Matrix agents loop on no-reply output" (#114211) |
| **Unbounded resource growth** | 4+ issues | "memory_index_chunks + memory_embedding_cache tables have no retention policy" (#114612), "realtime voice retains unbounded provider state" (#116201) |
| **Plugin/channel breakage on upgrade** | 3+ issues | "WeChat plugin fails to load: missing channel-runtime export" (#115478), "Desktop app boot-loops gateway" (#115256) |

### Satisfaction Signals
- **Frustration with "silent" failures** — auth, message delivery, skill routing all fail without clear errors
- **Recovery mechanisms making things worse** — restart-recovery loops, doctor fixes reverted by app, fallback chains bypassed
- **Need for observability** — 24-hour agent watch (#77598), "make compaction timing auditable" (#126107)
- **Appreciation for automerge/automation** — multiple PRs with `clawsweeper:automerge` armed

---

## 8. Backlog Watch — Stalled Critical Items Needing Maintainer Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 5+ months |

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-08-19)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **intense, fragmented innovation** across 10 actively maintained projects. All active projects are in **high-velocity development phases** (10–500 PRs/day), but only **Moltis and IronClaw** demonstrate consistent release discipline with recent tagged versions. A clear bifurcation exists: **core runtime projects** (OpenClaw, Hermes, NanoClaw, ZeroClaw, IronClaw) prioritize stability, session integrity, and infrastructure hardening, while **frontend/client projects** (LobsterAI, PicoClaw, CoPaw, NanoBot, Moltis) focus on UX polish, multi-channel support, and engine pluralism. **No project has achieved "stable 1.0" semantics**—all operate on date-based or rapid patch versioning, reflecting the field's immaturity. Maintainer review bandwidth is the universal bottleneck, with 5+ projects explicitly flagging "needs-maintainer-review" backlogs.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed | Latest Release | Health Score* |
|---------|---------------------|-------------------|-------------------|----------------|---------------|
| **OpenClaw** | 225 | 500 | 100 / 10 | None (last: 2026.7.1-2) | 🟡 High velocity, critical bug backlog |
| **Hermes Agent** | 13 | 50 | ~12 | **v0.20.4 (2026-08-18)** | 🟡 High velocity, post-release regressions |
| **IronClaw** | 16 | 40 | 15 | **v1.3.0-rc.2 (2026-08-18)** | 🟢 Active stabilization |
| **NanoClaw** | 3 | 41 | 18 | None | 🟢 Strong core-team throughput |
| **ZeroClaw** | 6 | 50 | 2 | None | 🟡 Active but review-bottlenecked |
| **CoPaw/QwenPaw** | 15 | 50 | 18 | None (last: v2.1.0) | 🟡 High velocity, 5 critical unfixed bugs |
| **NanoBot** | 10 | 28 | 6 | None | 🟡 Regressions accumulating |
| **LobsterAI** | 9 (stale) | 16 | 16 | **2026.8.18 (2026-08-18)** | 🟡 Features advancing, debt accumulating |
| **Moltis** | 0 (resolved) | 6 | 5 | **20260818.08 (2026-08-18)** | 🟢 Excellent — zero open bugs |
| **PicoClaw** | 6 | 4 | 2 | None (last: 0.3.1) | 🟡 Caution — high-impact bugs unfixed |
| **NullClaw** | 0 | 0 | 0 | None | ⚫ Inactive |
| **ZeptoClaw** | 0 | 0 | 0 | None | ⚫ Inactive |

*Health Score: 🟢 Stable/healthy • 🟡 Caution • 🟠 Degraded • 🔴 Critical • ⚫ Inactive

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale of investment**: 500 PRs/24h dwarfs all peers (next: Hermes/ZeroClaw/CoPaw at ~50). This reflects serious organizational backing (likely enterprise-funded).
- **Structured triage**: "clawsweeper" automation labels (needs-maintainer-review, needs-product-decision, source-repro) indicate mature process tooling absent in most peers.
- **Architectural scope**: Only project tackling **gateway-level concerns** (SSRF guards, session-state corruption, transcript projection livelocks, V8 heap OOM) — the "kernel" layer others build upon.
- **Security hardening**: Install policy acknowledgements, SSRF fixes, auth flow repairs show production-grade threat modeling.

**Technical Approach Differences:**
- **Gateway-centric architecture**: OpenClaw separates a persistent gateway process from CLI/TUI/WebUI clients — unique among peers (most are monolithic Electron/Tauri apps).
- **Session durability as first-class**: Transcript projection, SQLite compaction, memory-core dreaming are explicit subsystems; others treat sessions as ephemeral chat history.
- **Multi-provider abstraction**: Native support for Anthropic, OpenAI, Google, MiniMax, DeepSeek with fallback chains — broader than NanoBot/IronClaw's LiteLLM-centric approach.

**Community Size Comparison:**
- **Issues/PRs volume** suggests largest active contributor base (500 PRs/day implies 50+ regular contributors).
- **External contributor signals**: Fewer "first-time contributor" mentions vs. CoPaw (20% first-timer rate) or NanoBot — suggests more insular, core-team-driven development.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Session/state durability & recovery** | OpenClaw, Hermes, NanoClaw, ZeroClaw, LobsterAI, CoPaw | SQLite compaction without event-loop blocking (OpenClaw #112423), ordinal/row_id mismatches (Hermes #89244), autosave filters (ZeroClaw #10009), gateway crash recovery (LobsterAI #1626) |
| **Memory/resource bounds** | OpenClaw, NanoBot, ZeroClaw, PicoClaw | Unbounded voice/provider state (OpenClaw #116201), shell subprocess ulimits (NanoBot #4797), MCP schema cloning RSS growth (ZeroClaw #8642), memory_index_chunks growth (OpenClaw #114612) |
| **Auth reliability & token rotation** | OpenClaw, NanoBot, CoPaw, ZeroClaw, IronClaw, PicoClaw | OAuth refresh persistence (CoPaw #7053), MiniMax 2hr token expiry (OpenClaw #77467), Google STT keys in URLs (ZeroClaw #10107), Anthropic OAuth profiles (ZeroClaw #9420) |
| **Multi-channel/connector reliability** | Hermes, CoPaw, IronClaw, PicoClaw, NanoBot, ZeroClaw | Matrix/Slack/WhatsApp/Telegram/Signal health checks & retries (CoPaw #6684, Hermes #89586, PicoClaw #3287, ZeroClaw #8627, IronClaw #7681) |
| **Plugin/skill ecosystem security** | CoPaw, IronClaw, NanoClaw, LobsterAI, Moltis | Plugin encryption (CoPaw #7117), hidden system_prompt injection (CoPaw #7052), Webex REST polling (NanoClaw #3343), skill deletion sync (LobsterAI #1617), connector sandboxing (Moltis #1106) |
| **Observability & debugging** | OpenClaw, NanoBot, IronClaw, Moltis, LobsterAI, ZeroClaw | LangSmith restoration (NanoBot #2493), artifact timing evidence (IronClaw #7735), log path discoverability (ZeroClaw #8650), DSH integration logs (LobsterAI), 24h agent watch (OpenClaw #77598) |
| **Windows/macOS Intel compatibility** | Hermes, CoPaw, NanoBot, LobsterAI | BSOD from taskkill (Hermes #89614), renderer CPU burn on Intel Mac (Hermes #88275), gateway PID handoff (NanoBot #5417), crash on macOS update (LobsterAI #1587) |

---

## 5. Differentiation Analysis

| Dimension | Core Runtime Cluster | Client/Frontend Cluster | Specialized/Niche |
|-----------|---------------------|------------------------|-------------------|
| **Projects** | OpenClaw, Hermes, NanoClaw, ZeroClaw, IronClaw | LobsterAI, PicoClaw, CoPaw, NanoBot, Moltis | — |
| **Primary Focus** | Gateway stability, session kernel, provider abstraction, security hardening | UX polish, multi-engine support, desktop/mobile UX, onboarding | Moltis: IoT/vehicle connectors; NanoBot: search providers |
| **Target User** | Power users, self-hosters, platform builders | General users, non-technical, enterprise teams | Moltis: Tesla/vehicle data enthusiasts |
| **Architecture** | Persistent gateway + thin clients (OpenClaw), or monolithic daemon (others) | Electron/Tauri apps with embedded runtimes | Moltis: Connector microservices |
| **Engine Pluralism** | Low (OpenClaw: own runtime; Hermes: own; IronClaw: Reborn) | **High** — LobsterAI (OpenClaw + DSH + wants Hermes), NanoBot (LiteLLM + custom), PicoClaw (multi-protocol) | — |
| **Release Cadence** | Irregular, stabilization-focused | Date-based patches (LobsterAI, Moltis) | Moltis: daily patches |
| **Enterprise Features** | SSRF guards, install policies (OpenClaw), OMP tool contract (IronClaw) | Plugin encryption (CoPaw), hidden system prompts (CoPaw), Webex polling (NanoClaw) | — |

**Key Architectural Split**: 
- **Gateway model** (OpenClaw): Separate long-running gateway process manages sessions, providers, security — clients are stateless. Enables multi-client, crash isolation, but adds operational complexity.
- **Embedded model** (Hermes, IronClaw, NanoClaw, ZeroClaw, all clients): Single process owns everything. Simpler deployment, but session corruption = total crash.

---

## 6. Community Momentum & Maturity

### Tier 1: **Rapid Iteration with Release Discipline** 🟢
- **Moltis**: 2 patches same day, 5/6 PRs merged, zero open bugs, date-based versioning. Small scope (connector framework) enables speed.
- **IronClaw**: RC2 shipped, 15 PRs merged, structured epics (v1.4.0 roadmap), benchmark-driven quality gates.

### Tier 2: **High Velocity, Stabilization Phase** 🟡
- **OpenClaw**: Massive throughput but 40+ "needs-maintainer-review" critical issues; no release since 2026.7.
- **NanoClaw**: 18 PRs merged, 1,672 tests green on major refactors; breaking DB migration pending review.
- **Hermes**: Just released v0.20.4 but immediate critical regressions (Windows BSOD, installer 429, macOS CPU burn) — expect v0.20.5 within 72h.

### Tier 3: **Feature Expansion, Debt Accumulating** 🟠
- **CoPaw/QwenPaw**: 50 PRs/day, 20% first-time contributors, but 5 critical bugs without fix PRs (freeze, data loss, session poison).
- **LobsterAI**: Shipped DSH engine integration, but 9 stale issues from April (custom models, crashes, i18n) untouched.
- **NanoBot**: 28 PRs/day but 7 open PRs with merge conflicts, 3 high-severity bugs unfixed (#4797, #5149, #2493).
- **ZeroClaw**: 50 PRs updated but 48 open; 9 PRs tagged `needs-maintainer-review`/`do-not-merge` — review queue is bottleneck.

### Tier 4: **Maintenance Mode / Niche** 🟡
- **PicoClaw**: Moderate activity, strong external contributions (protocol + observability), but flagship WebUI (#806) stale 6 months.

### Inactive: **NullClaw, ZeptoClaw** — no 24h activity.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Engine pluralism is winning** | LobsterAI integrating DSH + OpenClaw + requesting Hermes; NanoBot/LiteLLM/PicoClaw multi-protocol; ZeroClaw adding Hailo/Grok/Anthropic OAuth | **Build provider-agnostic abstraction layers** — users demand BYOM (bring your own model) and fallback chains. Single-runtime lock-in is a competitive disadvantage. |
| **Session durability > raw speed** | OpenClaw transcript livelocks, Hermes 4030 ordinal bugs, NanoClaw async DB refactor, ZeroClaw autosave filters, LobsterAI scheduled-task history | **Invest in durable, observable session kernels** — compaction, projection, recovery are differentiation points. "It works until it loses my context" is the #1 churn driver. |
| **Security hardening moving upstack** | OpenClaw SSRF/install policies, IronClaw secrets abstraction (KeySource), ZeroClaw Google STT header fix, CoPaw shell-evasion defaults, Moltis Podman escape hatches | **Default-deny, audit-by-default** is becoming table stakes for self-hosted agents. Plugin/channel sandboxing (Moltis, NanoClaw, CoPaw) is the new perimeter. |
| **Observability as product feature** | IronClaw artifact timing evidence, NanoBot background task logging, ZeroClaw log path discoverability, OpenClaw 24h agent watch, LobsterAI scheduled-task notifications | **Struct

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-19

## 1. Today's Overview
NanoBot shows **high development velocity** with 38 total items updated in the last 24 hours (10 issues, 28 PRs). The project is in active feature expansion phase—adding new search providers (Serply, MST), WebUI enhancements (turn observability, follow-up suggestions), and security hardening—while simultaneously addressing regressions (LangSmith, audio, proxy handling) and core stability issues (AgentLoop task management, resource limits). No new release was cut today; the 6 merged PRs are primarily test fixes and Windows-specific gateway/TUI repairs. The backlog contains several long-standing architectural issues (resource limits, memory persistence) that remain open.

## 2. Releases
**No new releases today.** The latest published version remains prior to 2026-08-19.

## 3. Project Progress — Merged / Closed PRs (6)
| PR | Type | Summary |
|----|------|---------|
| [#5433](https://github.com/HKUDS/nanobot/pull/5433) | test | Deterministic wait for truncation output in exec tests (fixes flaky Windows CI) |
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) | feature | Lightweight cross-session messaging: stable `@handle` per session, `list_sessions`, `send_session_message`, `read_session` |
| [#5432](https://github.com/HKUDS/nanobot/pull/5432) | bugfix | TUI: auto-refresh expired API credentials on HTTP 401 with deduplication & retry |
| [#5417](https://github.com/HKUDS/nanobot/pull/5417) | bugfix | Windows WebUI: gateway now adopts venv child PID, preventing false competing-gateway rejection |
| [#5409](https://github.com/HKUDS/nanobot/pull/5409) | — | Closed (design proposal for spend firewall — not implemented) |
| [#5372](https://github.com/HKUDS/nanobot/pull/5372) | — | Closed (external ViBo memory integration proposal — not adopted) |

**Net advancement:** Cross-session messaging lands; Windows gateway/TUI reliability improved; test flakiness reduced.

## 4. Community Hot Topics (Most Engagement)
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#2493](https://github.com/HKUDS/nanobot/issues/2493) | Issue | 7 | 1 | **LangSmith integration broken** after `litellm_provider.py` removal — users need observability restored |
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) | Issue | 6 | 0 | **WhatsApp audio send fails** (receive works) — blocks voice-enabled agents |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | PR | — | 0 | **WebUI turn observability & safe recovery** — projects one turn → one answer surface, survives gateway restart |
| [#5408](https://github.com/HKUDS/nanobot/pull/5408) | PR | — | 0 | **Follow-up suggestions** in WebUI (DeerFlow-style) — improves conversational UX |
| [#4880](https://github.com/HKUDS/nanobot/pull/4880) | PR | — | 0 | **Security default flip**: `restrict_to_workspace=true` — long-open (since Jul), conflicts, high priority |

**Signal:** Users feel regressions in integrations (LangSmith, audio) and want richer WebUI interaction; maintainers are pushing security defaults but face merge conflicts.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Fix PR? | Notes |
|----------|-------|---------|-------|
| **High** | [#4797](https://github.com/HKUDS/nanobot/issues/4797) No resource limits on shell subprocesses (fork-bomb risk) | ❌ | OS-level ulimit/cgroups missing; only timeout exists |
| **High** | [#2493](https://github.com/HKUDS/nanobot/issues/2493) LangSmith broken after provider removal | ✅ [#5436](https://github.com/HKUDS/nanobot/pull/5436) | PR open, touches `docs/release-archive.md` only — may be incomplete |
| **Medium** | [#5149](https://github.com/HKUDS/nanobot/issues/5149) WhatsApp audio send fails | ❌ | `neonize.utils.ffmpeg` warning in logs; receive works |
| **Medium** | [#5429](https://github.com/HKUDS/nanobot/issues/5429) AgentLoop swallows background task exceptions | ✅ [#5431](https://github.com/HKUDS/nanobot/pull/5431) | PR replaces `set.discard` with exception-logging handler |
| **Medium** | [#5428](https://github.com/HKUDS/nanobot/issues/5428) AgentLoop leaks empty task groups | ✅ [#5430](https://github.com/HKUDS/nanobot/pull/5430) | PR removes group when last task completes |
| **Low** | [#5425](https://github.com/HKUDS/nanobot/issues/5425) `socks://` proxy alias unsupported for custom OpenAI providers | ✅ [#5435](https://github.com/HKUDS/nanobot/pull/5435) | Adds legacy alias support in `openai_compat_provider.py` |
| **Low** | [#5434](https://github.com/HKUDS/nanobot/pull/5434) Mattermost processes system posts as user messages | ✅ (PR open) | Filters `post_type != 'system'` |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Serply (Google SERP) search provider** | [#5437](https://github.com/HKUDS/nanobot/pull/5437) (new PR today) | High — follows Serper pattern, tests pass |
| **MST-python meta-search provider** (multi-engine + RRF) | [#5234](https://github.com/HKUDS/nanobot/pull/5234) (open since Aug 3) | High — P1, test coverage, richer results |
| **WebUI turn observability & recovery** | [#5420](https://github.com/HKUDS/nanobot/pull/5420) | Medium — conflicts, but core UX upgrade |
| **Follow-up suggestions (DeerFlow style)** | [#5408](https://github.com/HKUDS/nanobot/pull/5408) | Medium — provider-neutral, chat-scoped |
| **MiniMax music generation guidance** | [#5212](https://github.com/HKUDS/nanobot/pull/5212) | Low — niche, conflicts, documentation-only |
| **MCP schema byte budget (opt-in)** | [#5388](https://github.com/HKUDS/nanobot/pull/5388) | Low — advanced, opt-in, disabled by default |
| **Sustained-goal continuation bounding** | [#5257](https://github.com/HKUDS/nanobot/pull/5257) | Medium — fixes idle-run-away goals, conflicts |
| **Cross-session messaging** | [#5358](https://github.com/HKUDS/nanobot/pull/5358) **MERGED** | ✅ Already in main |

**Predicted next release theme:** "Search & WebUI Polish" — Serply + MST providers, follow-up suggestions, turn observability, plus Windows gateway/TUI fixes.

## 7. User Feedback Summary
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Integration regressions** | LangSmith broken (#2493, 7 comments), audio send broken (#5149, 6 comments) | High — two distinct integrations |
| **Windows friction** | Gateway PID handoff (#5417), TUI credential refresh (#5432), weather skill `curl` alias (#5341), test flakiness (#5433) | Medium — multiple Windows-specific fixes in flight |
| **Resource safety** | No ulimit/cgroups on shell exec (#4797) — security concern for hosted deployments | Low comments but high severity |
| **Observability gaps** | Background task exceptions lost (#5429), empty task groups leak (#5428) | Newly surfaced, 0 comments but core runtime |
| **Desire for richer WebUI** | Follow-up suggestions (#5408), turn observability (#5420), cross-session messaging (#5358 merged) | Active PRs show demand |

**Satisfaction note:** Users engage deeply on regressions (comments > 0); new feature PRs have 0 comments — likely maintainer-driven.

## 8. Backlog Watch — Stale / Needing Maintainer Attention
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#4797](https://github.com/HKUDS/nanobot/issues/4797) No resource limits on subprocesses | 44 days | Open, 1 comment | **Security/correctness** — fork-bomb vector; no PR yet |
| [#4880](https://github.com/HKUDS/nanobot/pull/4880) `restrict_to_workspace=true` default | 39 days | Open, conflicts, P1 | **Security default flip** — blocks unsafe tool use by default; merge conflicts stall it |
| [#2493](https://github.com/HKUDS/nanobot/issues/2493) LangSmith broken | 147 days | Open, 7 comments | **Observability regression** — PR [#5436](https://github.com/HKUDS/nanobot/pull/5436) only updates docs; may need provider re-add |
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) WhatsApp audio send | 22 days | Open, 6 comments | **User-facing feature gap** — no fix PR |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) MST-python meta-search | 16 days | Open, P1, conflicts | **High-value provider** — multi-engine search; needs conflict resolution |
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) Sustained-goal bounding | 14 days | Open, conflicts | **Prevents runaway idle goals** — core agent logic |

---

**Overall Health:** 🟡 **Active but accumulating regressions & conflicts**  
Velocity is strong (28 PR updates/day), but merge conflicts on 7 open PRs and 3 high-severity bugs without fixes (#4797, #5149, #2493 incomplete) suggest integration burden. Prioritize: (1) resolve conflicts on security default (#4880) and MST provider (#5234), (2) ship LangSmith fix beyond docs, (3) address subprocess resource limits before hosted deployments scale.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-19

---

## 1. Today's Overview
Hermes Agent shipped **v0.20.4 (v2026.8.18)** today, rolling up ~74 PRs since v0.20.3 into a stable tagged release for Docker images and fresh installs. The repository remains **highly active**: 13 issues and 50 PRs moved in the last 24 hours, with a heavy concentration on **desktop stability** (profile switching, session restore, Windows crashes), **session-state integrity** (4030 ordinal mismatches, duplicate turns), and **security hardening** (browser URL revalidation, plugin scanner scope). Several critical regressions surfaced today — notably a Windows BSOD triggered by stale-PID `taskkill` and a macOS Intel renderer CPU burn — indicating the v0.20.4 release may need a rapid patch follow-up.

---

## 2. Releases
### v2026.8.18 — Hermes Agent v0.20.4 (2026-08-18)
**Type:** Patch release (stable tag for downstream consumers)  
**Scope:** Aggregates ~74 merged PRs since v0.20.3 (v2026.8.1). No standalone changelog provided in the release notes; changes are the cumulative diff of merged PRs.  
**Breaking Changes:** None explicitly called out.  
**Migration Notes:** Downstream deployments (Docker, hosted, fresh installs) should re-pull images / re-run installers to pick up the tag.  
**GitHub:** [Release v2026.8.18](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.18)

---

## 3. Project Progress (Merged/Closed Today)
| PR | Area | Summary |
|----|------|---------|
| [#89467](https://github.com/NousResearch/hermes-agent/pull/89467) | `comp/agent`, `comp/cli`, `comp/tui`, `comp/desktop` | **feat(clarify):** Added optional `questions` parameter to `clarify` tool — agent can now ask 2–5 independent questions in one call (closes [#18450](https://github.com/NousResearch/hermes-agent/issues/18450)). |
| [#70129](https://github.com/NousResearch/hermes-agent/pull/70129) | `comp/agent`, `comp/tools`, `comp/tui` | **feat(clarify_form):** New `clarify_form` tool for multi-question clarify (alternative approach to #89467). |
| [#89619](https://github.com/NousResearch/hermes-agent/pull/89619) | `comp/tui`, `comp/desktop` | **fmt(js):** Automated `npm run fix` lint/formatting auto-fix (bot PR). |
| [#86961](https://github.com/NousResearch/hermes-agent/pull/86961) | `comp/plugins`, `tool/memory`, `comp/desktop` | **fix(desktop):** Disabled native window shadow on Quick Entry (macOS border ring). |
| [#83147](https://github.com/NousResearch/hermes-agent/issues/83147) | `comp/tui`, `comp/desktop` | **Closed:** Desktop/WebSocket reconnect must recover persisted turns without duplicates — addressed via related session-state PRs. |

*12 PRs merged/closed total; the above are the most user-visible.*

---

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Comments | Signals |
|------|----------|---------|
| [#88275](https://github.com/NousResearch/hermes-agent/issues/88275) — **Renderer CPU burn 40–70% at idle (macOS Intel)** | 9 | Users report thermal throttling on 2019 MBP; GPU disable partially mitigates. High urgency for Intel Mac users. |
| [#88897](https://github.com/NousResearch/hermes-agent/issues/88897) — **Dashboard `--isolated` ignores profile home DB** | 6 | Profile isolation broken in desktop; sessions write to default `state.db` instead of per-profile DB. Blocks multi-user setups. |
| [#89244](https://github.com/NousResearch/hermes-agent/issues/89244) — **Desktop restore refused with 4030 (ordinal ≠ row_id)** | 4 | In-place compaction breaks restore/edit; ordinal/durable-ID mismatch. Core session-state bug. |
| [#88596](https://github.com/NousResearch/hermes-agent/pull/88596) — **TUI focus regain flash** | (superseded by [#89623](https://github.com/NousResearch/hermes-agent/pull/89623)) | Visible flicker on tab/pane switch; `forceRedraw()` clears screen. UX polish but high visibility. |

**Underlying need:** Desktop app stability on macOS/Windows, session-state consistency across compaction/restore, and profile isolation correctness — all blockers for daily-driver usage.

---

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#89614](https://github.com/NousResearch/hermes-agent/issues/89614) — Windows: `taskkill /F /PID` kills `svchost.exe` → repeated 0xEF BSOD | Open, 0 comments | None yet |
| **Critical** | [#89624](https://github.com/NousResearch/hermes-agent/issues/89624) — Fresh `install.sh` aborts: git clone HTTP 429 (packfile throttled) | Open, 0 comments | None yet |
| **High** | [#88275](https://github.com/NousResearch/hermes-agent/issues/88275) — macOS Intel renderer 40–70% CPU at idle | Open, 9 comments | None yet |
| **High** | [#89586](https://github.com/NousResearch/hermes-agent/issues/89586) — Windows: profile switching hangs silently (no WS dial, no error) | Open, 2 comments | [#89616](https://github.com/NousResearch/hermes-agent/pull/89616) (scopes session lookup to active profile) |
| **High** | [#89622](https://github.com/NousResearch/hermes-agent/issues/89622) — Profile switching broken ("waking up" but no switch) | Open, 0 comments | Likely same root as #89586 |
| **High** | [#89244](https://github.com/NousResearch/hermes-agent/issues/89244) — Restore after in-place compaction refused with 4030 | Open, 4 comments | [#88092](https://github.com/NousResearch/hermes-agent/pull/88092) (aim truncations by durable ID alone) |
| **Medium** | [#88897](https://github.com/NousResearch/hermes-agent/issues/88897) — Dashboard `--isolated` uses wrong DB | Open, 6 comments | None yet |
| **Medium** | [#89556](https://github.com/NousResearch/hermes-agent/issues/89556) — Re-opening focused session from Bots panel hangs forever | Open, 1 comment | None yet |
| **Medium** | [#89617](https://github.com/NousResearch/hermes-agent/issues/89617) — Bot Mode times out loading session history | Open, 0 comments | None yet |
| **Medium** | [#89615](https://github.com/NousResearch/hermes-agent/issues/89615) — Telegram typing indicator reappears during idle | Open, 0 comments | None yet |
| **Low** | [#89610](https://github.com/NousResearch/hermes-agent/issues/89610) — `plugin_guard` scans `tests/`, blocks plugins with adversarial fixtures | Open, 0 comments | [#89613](https://github.com/NousResearch/hermes-agent/pull/89613) (excludes `tests/`) |

---

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Live guided UI tours** (`tour` tool) | [#89620](https://github.com/NousResearch/hermes-agent/pull/89620) (PR, `needs-decision`) | Medium — innovative, but requires design review; no tour content in codebase yet. |
| **Persistent agents per Desktop Project** | [#89567](https://github.com/NousResearch/hermes-agent/pull/89567) (PR) | High — practical, preserves project context & prompt-cache prefix; aligns with "durable session" theme. |
| **HERMES HARNESS tool-result economy** | [#89582](https://github.com/NousResearch/hermes-agent/pull/89582) (PR, `needs-decision`) | Low–Medium — research provenance (DeepSeek Harness), native implementation; may stay experimental. |
| **Multi-question `clarify` / `clarify_form`** | [#89467](https://github.com/NousResearch/hermes-agent/pull/89467) (merged), [#70129](https://github.com/NousResearch/hermes-agent/pull/70129) (closed) | **Already landed** in v0.20.4 — reduces round-trips for agent↔user clarification. |
| **Archived sessions pagination** | [#88504](https://github.com/NousResearch/hermes-agent/pull/88504) (PR) | High — fixes 200-row cap; shared helper for Settings + sidebar. |
| **Signal adapter v0.99 REST/WS support** | [#53696](https://github.com/NousResearch/hermes-agent/pull/53696) (open since Jun) | Medium — long-standing, fixes 404/decryption; blocked on CI/health-check updates. |

---

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Desktop unusable on Windows** | BSOD (#89614), profile switch hang (#89586, #89622), session hang (#89556), Bot timeout (#89617) | High — multiple users blocked; Windows CI build implicated. |
| **macOS Intel thermal issues** | Renderer 40–70% CPU idle (#88275, 9 comments) | High — affects 2019 MBP users; GPU disable only partial fix. |
| **Installer broken** | `git clone` 429 on fresh macOS (#89624) | Critical — blocks new user onboarding. |
| **Profile isolation broken** | Dashboard `--isolated` writes to wrong DB (#88897) | Medium — breaks multi-profile workflows. |
| **Session restore/edit fails** | 4030 error after compaction (#89244) | High — data integrity fear; users afraid to compact. |
| **Plugin security scanner false positives** | Blocks plugins with security test fixtures (#89610) | Low — niche but frustrates plugin authors. |

**Positive signals:** Multi-question clarify landed; TUI flicker fix in review; god-file decomposition (#89611) shows architectural investment.

---

## 8. Backlog Watch (Stale but Important)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#53696](https://github.com/NousResearch/hermes-agent/pull/53696) — Signal adapter v0.99 | Open since 2026-06-27 (53 days) | Fixes broken Signal messaging; moderate blast radius; needs maintainer review. |
| [#84999](https://github.com/NousResearch/hermes-agent/pull/84999) — Browser_exec URL recheck after execution | Open since 2026-08-13 (6 days) | Security hardening: validates landed URL post-navigation; prevents redirect bypasses. |
| [#88092](https://github.com/NousResearch/hermes-agent/pull/88092) — Fix truncation by durable ID (4030) | Open since 2026-08-17 (2 days) | Directly addresses #89244; core session-state correctness. |
| [#89611](https://github.com/NousResearch/hermes-agent/pull/89611) — Decompose desktop god files (2,241 → 116 lines) | Open today | Major refactor; reduces cognitive load & bug surface; no behavior change — good candidate for quick merge. |
| [#89621](https://github.com/NousResearch/hermes-agent/pull/89621) — Surface profile-switch failures | Open today | Turns silent failures into visible errors; pairs with #89586/#89622. |

---

## Health Assessment
- **Velocity:** Very high (50 PRs/24h, 1 release) but **quality signals are mixed** — critical regressions (BSOD, installer, CPU burn) appeared *after* v0.20.4 tag.
- **Stability:** Desktop (especially Windows) is in a fragile state; session-state bugs (4030, duplicate turns) persist across multiple issues.
- **Architecture:** Active investment in modularization (#89611), durable sessions (#89567), and tool economy (#89582) — good long-term trajectory.
- **Recommendation:** Expect a **v0.20.5 patch within 48–72h** addressing Windows BSOD, installer 429, and macOS CPU burn. Hold off on upgrading production Windows/macOS Intel deployments until patch lands.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-19

## 1. Today's Overview
PicoClaw shows **moderate maintenance activity** with 6 issues and 4 PRs updated in the last 24 hours. The project is actively addressing both long-standing architectural gaps (unused config fields, protocol support) and user-reported bugs (dispatch rule interactions, shell command execution, IRC message handling). Two PRs were merged today, closing protocol support for Anthropic native APIs and adding prompt-cache token logging — both provider-facing improvements. The WebUI initiative (#806) remains the highest-profile roadmap item with strong community interest (8 👍, 9 comments), though it remains in "refactoring" state. No new release was cut today.

## 2. Releases
**No new releases published today.** The latest version remains 0.3.1 (per issue #3301 environment data).

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#1158](https://github.com/sipeed/picoclaw/pull/1158) | `feat: add anthropic-messages protocol for native Anthropic API format` | Feature | **Closes #269**. Enables PicoClaw to talk to Anthropic-compatible proxies/services that only expose the native `/v1/messages` endpoint (not OpenAI-compatible). Adds `anthropic-messages` protocol prefix. |
| [#3317](https://github.com/sipeed/picoclaw/pull/3317) | `feat(providers): log prompt cache tokens in LLM response debug output` | Observability | Gateway debug logs now surface `cache_read_tokens` / `cache_write_tokens` from provider `usage` objects (e.g., DeepSeek via Cloudflare AI Gateway), improving cost/latency debugging. |

Both PRs were authored by external contributors and merged without apparent maintainer blockage — a healthy signal for community-driven development.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#806](https://github.com/sipeed/picoclaw/issues/806) **WebUI Support** | 9 comments, 8 👍, *high priority / roadmap* | **Lower barrier to entry for non-technical users**. TUI is powerful but niche; a browser-based UI is seen as essential for broader adoption. Still "refactoring now" — likely blocked on frontend stack decisions or backend API stabilization. |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) **IRC Long Message Support** | 6 comments | **Protocol compliance for IRCv3**. Current splitting at 512 bytes breaks message semantics. Users need PicoClaw to reassemble split messages transparently — critical for IRC bridge reliability. |
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) **Dispatch Rules Break `/clear` & Auto-Compression** | 4 comments | **Session management consistency across routed chats**. When dispatch rules send a chat to a non-default agent, core session commands fail. Indicates session state is not properly propagated/scoped in the dispatch path. |

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | [#3301](https://github.com/sipeed/picoclaw/issues/3301) `/clear` and auto-compression fail under dispatch rules | Open | No |
| **High** | [#3339](https://github.com/sipeed/picoclaw/issues/3339) Antigravity (Google) returns generic 429 despite valid auth/quota | Open | No |
| **Medium** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) IRC long messages split incorrectly | Open | No |
| **Medium** | [#3314](https://github.com/sipeed/picoclaw/pull/3314) `customAllowPatterns` ignored — default deny patterns take precedence | Open (PR) | **Yes** — [#3314](https://github.com/sipeed/picoclaw/pull/3314) |
| **Low** | [#3328](https://github.com/sipeed/picoclaw/issues/3328) `webhook_host`/`webhook_port` config inert (never read) | Open | **Yes** — [#3329](https://github.com/sipeed/picoclaw/pull/3329) (warns instead of silencing) |
| **Resolved** | [#3292](https://github.com/sipeed/picoclaw/issues/3292) High CPU on input focus (Web) | **Closed** | Likely fixed in recent commit (no PR linked) |

**Critical gap**: #3339 (Antigravity 429) and #3301 (dispatch + session) have no fix PRs yet — both affect production usability for specific providers/workflows.

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **WebUI** | [#806](https://github.com/sipeed/picoclaw/issues/806) (roadmap, high priority) | **High** — explicit roadmap label, strong community pull, but "refactoring" suggests architectural work still underway |
| **IRCv3 Message Reassembly** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | **Medium** — clear spec-driven fix, but IRC is a niche channel; may wait for channel refactor |
| **Dispatch-Aware Session Ops** | [#3301](https://github.com/sipeed/picoclaw/issues/3301) | **High** — bug in core routing logic; likely to be patched before next minor |
| **Anthropic Native Messages API** | [#1158](https://github.com/sipeed/picoclaw/pull/1158) (merged) | **Done** — already in `main` |
| **Prompt Cache Token Visibility** | [#3317](https://github.com/sipeed/picoclaw/pull/3317) (merged) | **Done** |
| **Config Validation for Inert Fields** | [#3329](https://github.com/sipeed/picoclaw/pull/3329) (open) | **High** — trivial fix, improves DX, ready to merge |

**Prediction**: Next patch (0.3.2) will likely include #3314, #3329, and a fix for #3301. WebUI remains a 0.4+ milestone.

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Non-tech users blocked by TUI-only interface** | #806 (8 👍, "most intuitive path for non-tech users") | 🔴 **High frustration** — recurring theme |
| **Dispatch rules break basic session hygiene** | #3301 (`/clear`, auto-compression fail silently) | 🟡 **Workaround fatigue** — users expect routing to be transparent |
| **Provider-specific quirks not handled** | #3339 (Antigravity 429 with no quota info), #3287 (IRC split) | 🟡 **Trust erosion** — "it works until it doesn't" |
| **Config options that do nothing** | #3328 (webhook_host/port documented, defaulted, ignored) | 🟢 **Mild annoyance** — but signals config hygiene debt |
| **Shell allow-list bypassed by default denies** | #3314 (`git push` blocked despite allow-list) | 🟡 **Security/usability conflict** — users expect allow-list to win |

**Positive signals**: External contributors landing protocol + observability fixes; maintainers merging promptly.

## 8. Backlog Watch — Stale/Unanswered Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#806](https://github.com/sipeed/picoclaw/issues/806) **WebUI** | ~6 months (created 2026-02-26) | **Flagship roadmap item** — no visible progress in issues/PRs; needs maintainer clarification on scope, stack, or blockers. Community expects movement. |
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) **Dispatch + Session Bug** | ~3 weeks | **Core routing regression** — affects multi-agent setups. No maintainer comment, no fix PR. Should be triaged as P0. |
| [#3339](https://github.com/sipeed/picoclaw/issues/3339) **Antigravity 429** | 2 days | **New provider regression** — Google Antigravity is a key cloud provider. No response yet; may need upstream API debugging. |
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) **Shell Allow-List Fix** | ~2 weeks | **Ready-to-merge fix** for a security/usability bug. Stale label but no review — maintainer bandwidth? |
| [#3329](https://github.com/sipeed/picoclaw/pull/3329) **Inert Config Warning** | ~1 week | **Trivial DX fix** — warns instead of silently ignoring. Low risk, high clarity value. |

---

**Overall Health**: 🟡 **Caution** — Active community contributions and merged PRs show momentum, but **three high-impact bugs (#3301, #3339, #3287) lack fix PRs or maintainer engagement**, and the flagship WebUI roadmap item has gone quiet. Recommend maintainer triage on #3301 and #3339 this week, and a public status note on #806 to manage expectations.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-19

## 1. Today's Overview
NanoClaw shows **high core-team velocity** with 41 PRs updated in 24 hours (18 merged/closed, 23 open), zero new releases, and only 3 issue updates. The merge activity is dominated by a **large-scale database refactor** (async central DB, portable driver seam) and a **session-runtime driver abstraction** (Docker as built-in realization), both purely additive with full test coverage (128 files / 1,672 tests green). Two long-standing operational bugs (`/update-skills` silent skip, `/update-nanoclaw` unsafe cutover) were closed today. One new user-facing issue (#3338) surfaced: Codex WebSocket stalls can leave Telegram requests silent for 10 minutes.

## 2. Releases
**No new releases** published today. The `main` branch is accumulating breaking database changes (see PR #3334 marked `[BREAKING]`) and driver-seam work that will likely ship in the next minor/major cut.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary |
|----|------|---------|
| [#3330](https://github.com/qwibitai/nanoclaw/pull/3330) | test | Central DB integration tests migrated to `DbDriver` API; remote backends can reset/migrate via existing hook |
| [#3324](https://github.com/qwibitai/nanoclaw/pull/3324) | refactor | Async central database seam (duplicate of #3333, closed) |
| [#3323](https://github.com/qwibitai/nanoclaw/pull/3323) | refactor | Central SQL made portable across backends |
| [#3077](https://github.com/qwibitai/nanoclaw/pull/3077) | fix | `rate_limit_event` handling: only abort on rejected events; split rate-limit vs quota |
| [#2949](https://github.com/qwibitai/nanoclaw/pull/2949) | feat(skill) | `/add-litellm` — minimal model router (local servers + optional cloud fallback) |
| [#2868](https://github.com/qwibitai/nanoclaw/issues/2868) | bug fix (via PR) | `/update-skills` now refreshes adapter code & pinned deps for already-installed channels |
| [#3194](https://github.com/qwibitai/nanoclaw/issues/3194) | bug fix (via PR) | `/update-nanoclaw` validates before mutating running checkout; rollback now covers SQLite, gitignored config, external components |

**Net progress**: Database layer is being decoupled from SQLite to support portable drivers; session lifecycle is moving behind a `SessionDriver` seam (Docker first, others later); Slack/Webex channel hardening; two critical update-path bugs resolved.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3306](https://github.com/qwibitai/nanoclaw/pull/3306) / [#3307](https://github.com/qwibitai/nanoclaw/pull/3307) | Core-team stacked PRs, 128 files/1,672 tests | **Pluggable session runtimes** — enable non-Docker backends (Podman, K8s, local process) without host changes |
| [#3334](https://github.com/qwibitai/nanoclaw/pull/3334) + [#3332](https://github.com/qwibitai/nanoclaw/pull/3332) + [#3333](https://github.com/qwibitai/nanoclaw/pull/3333) + [#3335](https://github.com/qwibitai/nanoclaw/pull/3335) | 4 linked PRs from `moshe-nanoco` marked `[BREAKING]`/`core-team` | **Async, portable central DB** — prerequisite for multi-backend, horizontal scaling, and safer migrations |
| [#3343](https://github.com/qwibitai/nanoclaw/pull/3343) | New skill PR, `follows-guidelines` | **Enterprise Webex support without webhooks** — REST polling adapter for environments blocking inbound traffic |
| [#3338](https://github.com/qwibitai/nanoclaw/issues/3338) | 2 comments, 0 👍, created yesterday | **Observability of Codex WebSocket health** — users hit 10-min silent failures; need proactive retry surfacing |

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#3338](https://github.com/qwibitai/nanoclaw/issues/3338) Codex WebSocket idle retry hidden → 10-min silent stall | Open | None yet |
| **High (resolved)** | [#3194](https://github.com/qwibitai/nanoclaw/issues/3194) `/update-nanoclaw` stamps success before validation; rollback incomplete | Closed | Implied fix merged |
| **Medium (resolved)** | [#2868](https://github.com/qwibitai/nanoclaw/issues/2868) `/update-skills` silent no-op for installed channels | Closed | Implied fix merged |
| **Medium** | [#3077](https://github.com/qwibitai/nanoclaw/pull/3077) Rate-limit telemetry misclassified as quota error → health aborts | Merged | [#3077](https://github.com/qwibitai/nanoclaw/pull/3077) |
| **Low** | [#3339](https://github.com/qwibitai/nanoclaw/pull/3339) Stored sign-in unverifiable → treated as success (fail-open) | Open PR | [#3339](https://github.com/qwibitai/nanoclaw/pull/3339) |
| **Low** | [#3340](https://github.com/qwibitai/nanoclaw/pull/3340) `pending_approvals` missing `instance` column → wrong bot posts credential cards | Open PR | [#3340](https://github.com/qwibitai/nanoclaw/pull/3340) |
| **Low** | [#3341](https://github.com/qwibitai/nanoclaw/pull/3341) Slack install token & managed service configured independently → mismatch | Open PR | [#3341](https://github.com/qwibitai/nanoclaw/pull/3341) |

## 6. Feature Requests & Roadmap Signals
| Signal | Evidence | Likelihood for Next Version |
|--------|----------|----------------------------|
| **Pluggable session drivers** (Podman, K8s, local) | [#3306](https://github.com/qwibitai/nanoclaw/pull/3306) driver seam + Docker realization; “purely additive” | **High** — seam landed, Docker built-in; other drivers follow |
| **Async/portable central database** | 4 PRs (#3332–3335, #3334 `[BREAKING]`) + test migration #3330 | **High** — breaking change flagged, tests passing |
| **Webex REST polling channel** | [#3343](https://github.com/qwibitai/nanoclaw/pull/3343) `webex-poll` skill | **Medium** — follows guidelines, enterprise demand |
| **You.com MCP tools skill** | [#3322](https://github.com/qwibitai/nanoclaw/pull/3322) `/add-youdotcom-tool` | **Medium** — utility skill, no core changes |
| **LiteLLM model router** | [#2949](https://github.com/qwibitai/nanoclaw/pull/2949) merged today | **Done** — shipped in today’s merges |
| **Slack owner-absent invite auto-decline** | [#3342](https://github.com/qwibitai/nanoclaw/pull/3342) | **High** — UX/security fix, core-team |

## 7. User Feedback Summary
- **Pain**: Codex WebSocket stalls cause **10-minute silent hangs** on Telegram (and likely other channels) — no retry visibility, no timeout control ([#3338](https://github.com/qwibitai/nanoclaw/issues/3338)).
- **Pain**: `/update-skills` **did nothing** for existing channels, forcing manual re-add ([#2868](https://github.com/qwibitai/nanoclaw/issues/2868)) — now fixed.
- **Pain**: `/update-nanoclaw` **reported success** while leaving DB/config in broken state ([#3194](https://github.com/qwibitai/nanoclaw/issues/3194)) — now fixed.
- **Delight**: LiteLLM skill (`/add-litellm`) enables **local model routing** with optional cloud fallback — merged today ([#2949](https://github.com/qwibitai/nanoclaw/pull/2949)).
- **Enterprise ask**: Webex **without webhooks** (REST polling) — PR opened ([#3343](https://github.com/qwibitai/nanoclaw/pull/3343)).

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3338](https://github.com/qwibitai/nanoclaw/issues/3338) Codex WebSocket idle retry hidden | 1 day | User-visible 10-min silence; affects all Codex-backed channels; no PR yet |
| [#3334](https://github.com/qwibitai/nanoclaw/pull/3334) `[BREAKING]` async central DB adopt | 1 day | Breaking migration; needs review/merge before other driver work lands |
| [#3339](https://github.com/qwibitai/nanoclaw/pull/3339) Fail-closed on unverifiable sign-in | 1 day | Security: fail-open on credential probe failure |
| [#3340](https://github.com/qwibitai/nanoclaw/pull/3340) `pending_approvals.instance` column | 1 day | Data integrity: wrong bot posts credential cards |
| [#3341](https://github.com/qwibitai/nanoclaw/pull/3341) Slack credential/service issuer mismatch | 1 day | Provisioning bug: install token & managed service unpaired |
| [#3306](https://github.com/qwibitai/nanoclaw/pull/3306) / [#3307](https://github.com/qwibitai/nanoclaw/pull/3307) Session driver seam | 2 days | Foundational refactor; large surface, needs core-team sign-off |

---

**Health Indicators**  
✅ Test suite green (1,672 tests) on major refactors  
✅ Two high-impact update-path bugs resolved same day  
⚠️ One new user-facing reliability gap (#3338) without fix PR  
⚠️ Breaking DB migration (#3334) pending review  
📈 Velocity: 41 PR updates/24h — strong core-team throughput

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-19

## 1. Today's Overview

IronClaw shows **high development velocity** with 40 PRs and 16 issues updated in the last 24 hours, plus a new release candidate (v1.3.0-rc.2) shipped yesterday. The project is actively addressing critical stability fixes (libSQL connection starvation, extension activation_state migration crash), advancing the v1.4.0 roadmap (durable notifications, artifact timing evidence, WASM tool response normalization), and investing heavily in UX polish (Slack private connect nudge, voice-to-text in WebUI, design system governance). The 15 merged/closed PRs vs 25 open indicates healthy throughput with substantial work in progress.

## 2. Releases

### ironclaw-v1.3.0-rc.2 (2026-08-18)
**Release Notes:**
- **Fixed**: Upgrades from v1.2 now accept and preserve the released extension `activation_state` field instead of crash-looping during startup.
- **Fixed**: The canonical Reborn runtime image again supports opt-in, public-key-only worker SSH on port 2222 while running IronClaw.

**Migration Notes**: Users upgrading from v1.2 should no longer experience startup crashes related to extension state migration. The SSH fix restores a capability that was inadvertently regressed.

[Release Link](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.3.0-rc.2)

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#7734](https://github.com/nearai/ironclaw/pull/7734) | refactor(loop): finish two abandoned test-module extractions (317 tests, 0 production lines) | Code Quality | **Merged** — Completes long-stalled test refactoring, relocating 317 tests from inline to dedicated modules |
| [#7713](https://github.com/nearai/ironclaw/pull/7713) | test: exercise /benchmark on qa-automation-preview | CI/Testing | **Closed** (test PR) — First run of enterprise-type benchmark suite through `/benchmark` path |
| [#7465](https://github.com/nearai/ironclaw/pull/7465) | Company Brain FDE | Epic | **Closed** — Epic completed/archived |
| [#7165](https://github.com/nearai/ironclaw/pull/7165) | Customer Feedback Remediation | Epic | **Closed** — v1.2.0/v1.3.0 feedback remediation completed |
| [#7714](https://github.com/nearai/ironclaw/pull/7714) | libSQL: single shared write connection starvation | Bug Fix | **Closed** — Critical cascading authority invalidation bug fixed (see Bugs section) |

**Key Advances**: Test infrastructure cleanup (317 tests relocated), benchmark pipeline validated on new automation suite, critical libSQL connection starvation bug resolved, customer feedback remediation cycle closed.

## 4. Community Hot Topics

### Most Active Issues (by discussion signals)

| Issue | Type | Comments | Core Need |
|-------|------|----------|-----------|
| [#7185](https://github.com/nearai/ironclaw/issues/7185) | Bug | 2 👍0 | **Memory not reliably recalled across conversations** — Multiple testers report context loss between sessions; critical for agent continuity |
| [#6879](https://github.com/nearai/ironclaw/issues/6879) | Epic | 1 👍0 | **Automation runs hit-or-miss** — Structural issue: triggers execute as plain chat turns instead of unattended runs; affects small models disproportionately |
| [#7736](https://github.com/nearai/ironclaw/issues/7736) | Daily Report | 0 👍0 | **Daily failure taxonomy** — Qwen3.8-27B struggling with multi-step tasks; weak model performance dominating enterprise suite failures |

### Most Active PRs (by scope/complexity)

| PR | Size | Risk | Focus |
|----|------|------|-------|
| [#7697](https://github.com/nearai/ironclaw/pull/7697) | XL | Medium | **Durable user inbox & product APIs** — New notification domain with pagination, unread counts, read/archive lifecycle |
| [#7735](https://github.com/nearai/ironclaw/pull/7735) | XL | Medium | **Run timing evidence in artifacts** — Per-iteration inference/tool durations, tool-call counts for debugging "it felt slow" |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | XL | Medium | **OMP core-tool contract** — Replaces all coding tools with 6 bare names (read, write, edit, glob, grep, bash) per oh-my-pi spec |
| [#7650](https://github.com/nearai/ironclaw/pull/7650) | XL | Low | **Automation run outcomes from runtime evidence** — Deterministic, evidence-backed assessment replacing semantic judging |
| [#7711](https://github.com/nearai/ironclaw/pull/7711) | XL | Low | **WASM typed tool response & dispatch-error cleanup** — Final PR of capability-response-normalization stack |

**Underlying Themes**: 
- **Observability gap**: Teams need timing evidence in artifacts (#7735) and info-level growth logging (#6837)
- **Automation reliability**: Structural pipeline issues (#6879) and outcome derivation (#7650) are top priorities
- **Tool surface standardization**: Converging on OMP contract (#7491, #7392) and WASM normalization (#7711)

## 5. Bugs & Stability

### Critical (Production-Impacting)

| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#7714](https://github.com/nearai/ironclaw/issues/7714) | **Critical** | **Closed** | Fixed in related PR |
| **libSQL single shared write connection starves resource-governor journal** under bench load → cascading authority invalidation, permanent reservation leaks, durable-state reload every ~40s | PinchBench (147 tasks) revealed systemic starvation | Resolved |

### High

| Issue | Severity | Status | Notes |
|-------|----------|--------|-------|
| [#7185](https://github.com/nearai/ironclaw/issues/7185) | **High** | **Closed** | Memory not reliably recalled across conversations — multiple independent tester reports |
| [#7447](https://github.com/nearai/ironclaw/issues/7447) | **High** | Open | Agent fails after calling too many tools — redundant fetch-retry loops burn tool-call budget |

### Medium

| Issue | Severity | Status | Notes |
|-------|----------|--------|-------|
| [#7681](https://github.com/nearai/ironclaw/issues/7681) | **Medium** | Open | Slack unlinked-user connect message is public (not private) and requires manual round-trip |
| **Fix PR**: [#7682](https://github.com/nearai/ironclaw/pull/7682) — Delivers nudge privately with one-click connect link |

### Regression Fixed in RC2
- **Extension activation_state crash-loop on v1.2→v1.3 upgrade** — Fixed in v1.3.0-rc.2 release

## 6. Feature Requests & Roadmap Signals

### v1.4.0 Epics in Progress (Strongest Signals)

| Epic | Issue | PRs | Likelihood for v1.4.0 |
|------|-------|-----|----------------------|
| **Reborn durable state profile-agnostic migration** | [#7467](https://github.com/nearai/ironclaw/issues/7467) | — | High — architectural blocker for profile switching |
| **DESIGN.md governance & theme reskin (phases 2–3)** | [#7733](https://github.com/nearai/ironclaw/issues/7733) | [#7043](https://github.com/nearai/ironclaw/pull/7043), [#7257](https://github.com/nearai/ironclaw/pull/7257) | High — design system foundation work underway |
| **Storybook + AI-first Design System** | [#7038](https://github.com/nearai/ironclaw/issues/7038) | [#7257](https://github.com/nearai/ironclaw/pull/7257), [#6994](https://github.com/nearai/ironclaw/pull/6994) | High — OOBE prototype gated behind flag |
| **Extensions vNext: Unified Channels, Rich Messaging, Signal** | [#7354](https://github.com/nearai/ironclaw/issues/7354) | — | Medium — Web push/Telegram split into separate programs |
| **Minimal info-level logging for growth/usage stats** | [#6837](https://github.com/nearai/ironclaw/issues/6837) | — | Medium — zero `info!` calls in business logic currently |
| **Sandboxing Solution with CLIs** | [#7732](https://github.com/nearai/ironclaw/issues/7732) | — | Medium — new epic, e2e sandboxing focus |
| **Mnesis Spike (memory provider integration)** | [#7731](https://github.com/nearai/ironclaw/issues/7731) | — | Low-Medium — spike phase |

### v1.3.0 Targeted
| Feature | Issue | PR | Status |
|---------|-------|-----|--------|
| **OMP core-tool contract replacement** | [#7392](https://github.com/nearai/ironclaw/issues/7392) | [#7491](https://github.com/nearai/ironclaw/pull/7491) | **In PR** — 6 bare tools replacing legacy surface |
| **Automation run outcomes from runtime evidence** | [#6879](https://github.com/nearai/ironclaw/issues/6879) | [#7650](https://github.com/nearai/ironclaw/pull/7650) | **In PR** — deterministic assessment |
| **Google Docs semantic editing tools** | — | [#7728](https://github.com/nearai/ironclaw/pull/7728) | **In PR** — 4 new semantic capabilities appended |

### Predictions for Next Version (v1.3.0 stable → v1.4.0)
1. **OMP tool contract** will land in v1.3.0 (PR #7491 is XL but actively updated)
2. **Durable notifications/inbox** (#7697) and **artifact timing evidence** (#7735) likely v1.3.x or early v1.4.0
3. **Profile-agnostic Reborn state** (#7467) is architectural prerequisite for v1.4.0
4. **Design system governance** (#7733) will enable consistent WebUI evolution

## 7. User Feedback Summary

### Pain Points (from issues & PR context)

| Pain Point | Source | Frequency |
|------------|--------|-----------|
| **Context/memory loss between conversations** | [#7185](https://github.com/nearai/ironclaw/issues/7185) | Multiple testers, legal team relay |
| **Automation unreliability — "hit-or-miss" runs** | [#6879](https://github.com/nearai/ironclaw/issues/6879) | Structural, not model noise; worse on small models |
| **Slack connect flow leaks privacy & requires manual steps** | [#7681](https://github.com/nearai/ironclaw/issues/7681) | Public nudge in shared channels; dead-end UX |
| **Agent burns tool budget on redundant fetch-retry loops** | [#7447](https://github.com/nearai/ironclaw/issues/7447) | Pagination not used; shrinking size limits instead |
| **No visibility into run timing — "it felt slow"** | [#7735](https://github.com/nearai/ironclaw/pull/7735) | PR adds timing evidence to artifacts |
| **Zero info-level logging for usage analytics** | [#6837](https://github.com/nearai/ironclaw/issues/6837) | 52 `info!` calls, all infrastructure; none business |

### Positive Signals
- **Voice-to-text in WebUI composer** ([#7724](https://github.com/nearai/ironclaw/pull/7724)) — NEAR AI Whisper integration, host-side transcription, never auto-sent
- **OOBE automation-tasks prototype** ([#6994](https://github.com/nearai/ironclaw/pull/6994)) — Carousel, inline cards, agent-mode pill behind flag
- **Slack config per-field help text** ([#7738](https://github.com/nearai/ironclaw/pull/7738)) — Operator-facing documentation in admin UI
- **OAuth sign-in above gateway token form** ([#7304](https://github.com/nearai/ironclaw/pull/7304)) — Improved login UX

## 8. Backlog Watch (Needs Maintainer Attention)

### Long-Open / Stalled High-Value Items

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#3676](https://github.com/nearai/ironclaw/pull/3676) | **~3 months** (created 2026-05-15) | **Open** | Security docs rework — secrets, sandboxing, leak detection; rebuilt from current main; `skip-regression-check` label suggests complexity |
| [#6994](https://github.com/nearai/ironclaw/pull/6994) | ~18 days | Open | OOBE/onboarding prototype — foundational v1 implementation gated behind flag; design + integration plan included |
| [#7257](https://github.com/nearai/ironclaw/pull/7257) | ~14 days | Open | Design system proposal package — north-star docs for Storybook + catalog; frames APDD governance kit |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) | ~16 days | Open | Epic: Storybook + AI-first Design System — backed by full proposal package |
| [#6837](https://github.com/nearai/ironclaw/issues/6837) | ~21 days | Open | Zero info-level logging for growth/usage — 52 `info!` calls audited, all plumbing |
| [#7467](https://github.com/nearai/ironclaw/issues/7467) | ~9 days | Open | Reborn profile-agnostic state — architectural, blocks profile switching without data stranding |

### PRs with Review Bottleneck Risk
- **[#7697](https://github.com/nearai/ironclaw/pull/7697)** (XL, Medium risk) — Durable notification inbox; new domain `ironclaw_notifications`; needs architecture review
- **[#7491](https://github.com/nearai/ironclaw/pull/7491)** (XL, Medium risk) — OMP tool contract replacement; removes legacy tools entirely; benchmark arm included
- **[#7711](https://github.com/nearai/ironclaw/pull/7711)** (XL, Low risk) — WASM typed tool response; final PR of normalization stack; supersedes #7703

---

## Project Health Indicators

| Metric | Signal | Assessment |
|--------|--------|------------|
| **Release Cadence** | RC2 shipped day before digest | ✅ Active stabilization |
| **PR Throughput** | 15 merged/closed, 25 open in 24h | ✅ Healthy velocity |
| **Critical Bug Resolution** | libSQL starvation fixed same day | ✅ Responsive |
| **Technical Debt Paydown** | 317 tests relocated (#7734), WASM normalization stack completing | ✅ Investing in foundations |
| **Design System Investment** | 3 PRs + 2 epics + proposal package | ✅ Strategic UX focus |
| **Observability Gap** | Zero business `info!` logs (#6837), timing evidence just added (#7735) | ⚠️ Improving but behind |
| **Automation Reliability** | Structural pipeline issue

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-19

## 1. Today's Overview
LobsterAI shipped **version 2026.8.18** yesterday, delivering the DeepSeek Harness (DSH) engine integration, DSH process launcher, and an update to DSH rc.7 — marking a significant expansion of its AI engine ecosystem. The project shows **high merge velocity**: 16 PRs were closed/merged in the last 24 hours, covering renderer polish, scheduled-task stability, authentication resilience, MCP quick-add templates, avatar settings, and SQLite foreign-key enforcement. However, **9 issues remain open and stale** (all last updated 2026-08-18), indicating a backlog of unresolved user-reported bugs (custom model failures, client crashes, i18n gaps, skill deletion sync) that have persisted since April 2026. Overall health: **active development on new features, but technical debt and user-facing bugs are accumulating**.

---

## 2. Releases
### **LobsterAI 2026.8.18** (published 2026-08-18)
| Change | PR | Author |
|--------|-----|--------|
| **feat: DSH engine integration** | [#2502](https://github.com/netease-youdao/LobsterAI/pull/2502) | @fisherdaddy |
| **feat: update DSH to rc.7** | [#2509](https://github.com/netease-youdao/LobsterAI/pull/2509) | @fisherdaddy |
| **feat: DSH process launcher** | (included in #2502/#2509) | @fisherdaddy |

**Breaking changes / migration notes**: None explicitly documented. The DSH integration is opt-in experimental (per PR #2510). Users on custom model configurations should verify compatibility — several stale issues (#1622, #1627) report custom model failures and client crashes that may intersect with engine changes.

---

## 3. Project Progress (Merged/Closed PRs — 2026-08-18)
| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2510](https://github.com/netease-youdao/LobsterAI/pull/2510) | renderer, build, docs, main, cowork, macos | **Release 2026.8.17 → main**: 23 commits, 57 files; opt-in DSH integration, model loading & scheduled-task history improvements | **Major** — version cut |
| [#2509](https://github.com/netease-youdao/LobsterAI/pull/2509) | — | **Update DSH to rc.7** | **High** — engine runtime |
| [#2508](https://github.com/netease-youdao/LobsterAI/pull/2508) | renderer | **Fix auth: retry server model load after transient failures**; avoid clearing model list on same-account reload | **High** — resilience for cloud model sync |
| [#2507](https://github.com/netease-youdao/LobsterAI/pull/2507) | renderer, main | **Fix scheduled-task: cap cron run history page size**; add pagination & diagnostics | **Medium** — prevents gateway overload |
| [#2481](https://github.com/netease-youdao/LobsterAI/pull/2481) | renderer, cowork | **Sidebar: move task search to header actions**; unify macOS/Windows layout | **Medium** — UX consistency |
| [#2425](https://github.com/netease-youdao/LobsterAI/pull/2425) | renderer, cowork | **Settings: add artifact auto-preview toggle** | **Medium** — user control |
| [#2418](https://github.com/netease-youdao/LobsterAI/pull/2418) | renderer, docs, cowork | **Sidebar: multi-agent task activity filter** (Codex-inspired) | **Medium** — discoverability |
| [#2410](https://github.com/netease-youdao/LobsterAI/pull/2410) | renderer | **Style sites: align page layout with management views** | **Low** — visual consistency |
| [#2417](https://github.com/netease-youdao/LobsterAI/pull/2417) | renderer | **Fix sites: add copy success feedback** | **Low** — polish |
| [#1583](https://github.com/netease-youdao/LobsterAI/pull/1583) | renderer, main | **Feat skills: recently used tab with usage count tracking** (fixes auto-routing detection) | **High** — addresses long-standing visibility gap |
| [#1597](https://github.com/netease-youdao/LobsterAI/pull/1597) | main | **Fix SQLite: enable foreign keys** — cascade delete for messages & memory sources | **High** — data integrity |
| [#1615](https://github.com/netease-youdao/LobsterAI/pull/1615) | renderer, cowork | **Feat cowork: improve session export** (i18n roles, metadata, timestamps, copy-to-clipboard) | **Medium** — export quality |
| [#1621](https://github.com/netease-youdao/LobsterAI/pull/1621) | renderer, main | **Feat scheduledTask: OS native notifications on completion** (closes #1620) | **Medium** — user-requested |
| [#1626](https://github.com/netease-youdao/LobsterAI/pull/1626) | main, openclaw | **Fix OpenClaw gateway startup crash** (removed removed `skipMissedJobs` field) — **P0 blocker** | **Critical** — unblocks all users |
| [#1629](https://github.com/netease-youdao/LobsterAI/pull/1629) | renderer | **Feat avatar: user avatar settings** (presets + upload) | **Low** — personalization |
| [#1631](https://github.com/netease-youdao/LobsterAI/pull/1631) | renderer | **Feat MCP: quick-add templates** (FileSystem, SQLite, Brave Search) | **Medium** — onboarding ease |

**Open PRs (3)**:
- [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Dependabot: bump Electron 40.2.1 → 43.4.0 (stale since April)
- [#1628](https://github.com/netease-youdao/LobsterAI/pull/1628) — Feat UI: model selector redesign, unified toolbar (awaiting review)
- [#1634](https://github.com/netease-youdao/LobsterAI/pull/1634) — Fix cowork: global search scope bug + UX overhaul (awaiting review)

---

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) | Issue | 2 | 0 | **Custom model addition fails** — user cannot add custom models; test fails with error screenshot |
| [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627) | Issue | 2 | 0 | **Client crash on complex tasks** — OpenClaw gateway logs show websocket ticks then crash |
| [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) | Issue | 2 | 0 | **Request: add Hermes-agent as AI engine** — alongside OpenClaw |
| [#1632](https://github.com/netease-youdao/LobsterAI/issues/1632) | Issue | 2 | 0 | **Skills unusable after switching to local model** — how to install skills in local-model mode? |
| [#1620](https://github.com/netease-youdao/LobsterAI/issues/1620) → [#1621](https://github.com/netease-youdao/LobsterAI/pull/1621) | Issue+PR | 1 | 0 | **Scheduled-task OS notifications** — **implemented & merged** |
| [#1617](https://github.com/netease-youdao/LobsterAI/issues/1617) | Issue | 1 | 0 | **Skill deletion UI not syncing** — backend deletes, frontend shows stale entry; restart doesn’t fix |
| [#1586](https://github.com/netease-youdao/LobsterAI/issues/1586) | Issue | 1 | 0 | **Partial i18n** — "Terms" & "Tool Style" remain Chinese after switching to English |
| [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587) | Issue | 1 | 0 | **Crash on first launch after update** — macOS, log attached |
| [#1589](https://github.com/netease-youdao/LobsterAI/issues/1589) | Issue | 1 | 0 | **Session & scheduled-task execution broken** — macOS Intel, v2026.04.08 |

**Analysis**: Users are hitting **fundamental reliability issues** (crashes, custom model failure, skill system breakage) that block core workflows. The Hermes-agent request (#1614) signals demand for **engine pluralism** — DSH integration (#2502) partially addresses this, but Hermes remains unaddressed. The skill/local-model confusion (#1632) suggests **documentation/product clarity gaps**.

---

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Status | Fix PR? | Notes |
|----------|-------|--------|---------|-------|
| **Critical** | [#1626](https://github.com/netease-youdao/LobsterAI/pull/1626) — OpenClaw gateway fails to start (invalid config field `skipMissedJobs`); modal flicker | **Fixed & merged** | Yes (#1626) | P0 blocker; 100% repro; root cause: removed config field in new OpenClaw |
| **Critical** | [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587) — Crash on first launch after update (macOS) | **Open** | No | Log attached; may relate to migration or DSH integration |
| **High** | [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) — Custom model add fails (test error) | **Open** | No | Blocks BYOM (bring your own model) workflow |
| **High** | [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627) — Client crash on complex task (OpenClaw stdout logs) | **Open** | No | Gateway websocket activity then crash; may be resource exhaustion |
| **High** | [#1632](https://github.com/netease-youdao/LobsterAI/issues/1632) — Skills unusable after switching to local model | **Open** | No | Product gap: no skill installation path for local-model mode |
| **Medium** | [#1617](https://github.com/netease-youdao/LobsterAI/issues/1617) — Skill deletion UI not syncing; restart ineffective | **Open** | No | Frontend state stale; backend OK; persistence issue |
| **Medium** | [#1589](https://github.com/netease-youdao/LobsterAI/issues/1589) — Session & scheduled-task execution broken (macOS Intel) | **Open** | No | Core functionality broken on specific arch |
| **Low** | [#1586](https://github.com/netease-youdao/LobsterAI/issues/1586) — Partial i18n (Terms, Tool Style) | **Open** | No | Incomplete localization |

**Note**: The critical OpenClaw gateway crash (#1626) was fixed and merged today. The remaining critical/high bugs have **no associated fix PRs** and have been open since April 2026.

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Signals | Likelihood for Next Version |
|---------|--------|---------|----------------------------|
| **Hermes-agent as AI engine** | [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) | DSH integration just landed; architecture supports pluggable engines | **Medium** — engine abstraction exists; Hermes would be 3rd engine |
| **Scheduled-task OS notifications** | [#1620](https://github.com/netease-youdao/LobsterAI/issues/1620) | **Implemented & merged** (#1621) | **Done** |
| **Skill installation for local models** | [#1632](https://github.com/netease-youdao/LobsterAI/issues/1632) | No current path; skill system assumes cloud/routing | **Medium** — UX gap; may need local skill registry |
| **Global search across all agents** | [#1634](https://github.com/netease-youdao/LobsterAI/pull/1634) | PR open; fixes implicit agentId filter | **High** — PR ready, addresses core UX bug |
| **Model selector redesign (vendor icons, truncation, portal)** | [#1628](https://github.com/netease-youdao/LobsterAI/pull/1628) | PR open; comprehensive UI overhaul | **High** — polish for DSH/custom model parity |
| **Electron 43 upgrade** | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Dependabot PR; stale since April | **Low** — blocked by testing; Electron 43 is major version |

**Prediction**: Next patch (2026.8.x) will likely merge #1628, #1634, and possibly #1277. Hermes-agent (#1614) and local-model skills (#1632) are larger product decisions for 2026.9+.

---

## 7. User Feedback Summary
**Pain Points (from issues)**:
- **Reliability**: Crashes on update (#1587), complex tasks (#1627), gateway startup (#1626-fixed)
- **Custom Models**: Cannot add/test custom models (#1622) — core "BYOM" promise broken
- **Skill System**: Skills vanish/unusable after model switch (#1632); deletion UI broken (#1617)
- **i18n**: Incomplete English localization (#1586)
- **Visibility**: No insight into which skills AI actually uses (addressed by #1583 — merged today)

**Use Cases**:
- Multi-agent task management (sidebar filter #2418, global search #1634)
- Scheduled automation with notifications (#1621)
- Session export for documentation/sharing (#1615)
- MCP server quick-start (FileSystem, SQLite, Brave #1631)

**Sentiment**: Frustration on **blocking bugs** (custom models, crashes) but appreciation for **rapid feature delivery** (DSH, notifications, export, avatars, MCP templates). The April→August gap on critical issues suggests **triage bandwidth constraints**.

---

## 8. Backlog Watch (Stale, High-Impact, No Maintainer Action)
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) | 131 days | **Custom model add fails** — breaks extensibility promise | Assign; reproduce with user’s screenshot; likely model config validation bug |
| [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627) | 131 days | **Client crash on complex tasks** — core instability | Attach debug build; check OpenClaw gateway resource limits; correlate with DSH changes |
| [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587) | 132 days | **Crash on first launch after update** — blocks upgrades | Test migration path; check DSH launcher init sequence |
| [#1632](https://github.com/netease-youdao/LobsterAI/issues/1

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-19

## 1. Today's Overview

Moltis shows **high velocity with strong maintenance focus** over the past 24 hours. Two patch releases (20260818.06 and 20260818.08) were published, five PRs were merged, and two long-standing bugs were resolved. The merged work spans critical infrastructure (Podman sandbox support, heartbeat config patch semantics), a significant new feature (managed Files library with Settings browser), and developer experience fixes (README star chart). One new feature PR (Tesla Fleet API connector) remains open for review. The project demonstrates healthy throughput with quick turnaround on reported regressions.

## 2. Releases

| Version | Date | Notes |
|---------|------|-------|
| **20260818.08** | 2026-08-18 | Latest patch release; likely includes PRs #1209, #1211, #1206 merged on 2026-08-18 |
| **20260818.06** | 2026-08-18 | Earlier patch same day; likely includes PRs #1198, #1106 |

**Migration notes**: No breaking changes indicated in merged PRs. PR #1209 changes `heartbeat.update` to PATCH semantics (was full replace) — clients sending partial configs will now work correctly. PR #1106 adds explicit Podman escape-hatch flags; existing sandboxes may recreate on config change. PR #1206 introduces `MOLTIS_FILES_DIR` env var and new mount points — opt-in via settings.

## 3. Project Progress

| PR | Status | Category | Summary |
|----|--------|----------|---------|
| [#1198](https://github.com/moltis-org/moltis/pull/1198) | Merged | **LLM Provider** | Routes OpenAI `reasoning_effort` + function tool calls through Responses API; preserves Chat Completions path otherwise. Unifies request construction for streaming/non-streaming. |
| [#1209](https://github.com/moltis-org/moltis/pull/1209) | Merged | **Bug Fix / API** | Fixes `heartbeat.update` to treat params as **PATCH** (merge) not full replace. Resolves silent field reset bug (#1187). |
| [#1211](https://github.com/moltis-org/moltis/pull/1211) | Merged | **Docs / DX** | Restores README star history chart using token-free alternative data source. |
| [#1106](https://github.com/moltis-org/moltis/pull/1106) | Merged | **Sandbox / Podman** | Adds explicit, mutually exclusive Podman escape hatches: validated host-socket passthrough & privileged nested Podman. Improves rootless diagnostics, fails closed on unavailable sockets. Fixes #1095. |
| [#1206](https://github.com/moltis-org/moltis/pull/1206) | Merged | **Feature / Files** | **Major feature**: Persistent Files library (authenticated streamed list/upload/download/create/move/delete) + Finder-style Settings browser + `MOLTIS_FILES_DIR` discovery + read-only-by-default container mounts (Docker, Podman, Apple Container). |
| [#1210](https://github.com/moltis-org/moltis/pull/1210) | **Open** | **Connector / Tesla** | New `moltis-connector-tesla`: read-only vehicle data sync to shared connector snapshot store. No commands, no wake-on-sleep. Two dataset shapes; retires unobserved items. |

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#1095](https://github.com/moltis-org/moltis/issues/1095) — *Podman not working* | 2 comments, 76 days open | **Resolved by #1106**. User need: reliable Podman sandboxing on Linux. Root cause was missing escape-hatch configuration for host socket access / nested Podman. Fix provides explicit, validated modes. |
| [#1187](https://github.com/moltis-org/moltis/issues/1187) — *Heartbeat UI resets fields* | 0 comments, 9 days open | **Resolved by #1209**. Silent data loss when partial config sent. Underlying need: **PATCH semantics** for config APIs — critical for UIs that only edit subset of fields. |
| [#1210](https://github.com/moltis-org/moltis/pull/1210) — *Tesla Fleet API connector* | New, 0 comments | First automotive connector. Signals **expansion into IoT/vehicle data** as a connector category. Read-only design addresses safety/privacy concerns upfront. |

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#1095](https://github.com/moltis-org/moltis/issues/1095) Podman sandbox non-functional | ✅ Closed | [#1106](https://github.com/moltis-org/moltis/pull/1106) |
| **Medium** | [#1187](https://github.com/moltis-org/moltis/issues/1187) Heartbeat config silent field reset | ✅ Closed | [#1209](https://github.com/moltis-org/moltis/pull/1209) |
| **Low** | [#1211](https://github.com/moltis-org/moltis/pull/1211) README star chart broken | ✅ Fixed | [#1211](https://github.com/moltis-org/moltis/pull/1211) |

**No new regressions reported today.** Both fixed bugs had clear root causes in config merge logic and sandbox capability detection.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Release |
|--------|--------|----------------------------|
| **Managed Files library & Settings browser** | [#1206](https://github.com/moltis-org/moltis/pull/1206) (merged) | ✅ **Shipped in 20260818.08** |
| **Tesla Fleet API connector (read-only)** | [#1210](https://github.com/moltis-org/moltis/pull/1210) (open) | 🟡 **High** — complete implementation, needs review |
| **OpenAI Responses API for reasoning+tools** | [#1198](https://github.com/moltis-org/moltis/pull/1198) (merged) | ✅ **Shipped** |
| **Podman escape hatches (host socket / nested)** | [#1106](https://github.com/moltis-org/moltis/pull/1106) (merged) | ✅ **Shipped** |

**Prediction**: Tesla connector (#1210) will likely merge soon — it's a self-contained connector with safety-first design. Next cycle may see more connector types (other vehicle APIs, home automation) following this pattern.

## 7. User Feedback Summary

| Pain Point | Evidence | Resolution Status |
|------------|----------|-------------------|
| **Podman sandbox broken on Linux** | #1095 (76 days open) | ✅ Fixed via explicit escape hatches |
| **Settings UI loses config fields on save** | #1187 (9 days open) | ✅ Fixed via PATCH semantics |
| **README star chart broken** | #1211 (community visible) | ✅ Fixed via alternative provider |
| **Need persistent file management in sandbox** | Implicit in #1206 scope | ✅ Delivered: Files library + browser + mounts |

**Satisfaction signal**: Quick fixes for both reported bugs (9-day and 76-day turnaround) suggest responsive maintainers. The Files library (#1206) addresses a likely frequent request for "bring your own data" workflows.

## 8. Backlog Watch

| Item | Age | Risk | Notes |
|------|-----|------|-------|
| [#1210](https://github.com/moltis-org/moltis/pull/1210) Tesla connector | 1 day | Low | Ready for review; no open issues. First automotive connector — may need maintainer sign-off on connector pattern precedent. |
| *No stale critical issues* | — | — | Both active bugs resolved. No PRs >30 days without updates. |

---

**Health Indicators**: 🟢 **Excellent** — High merge rate (5/6 PRs), zero open bugs, major feature shipped, new connector in review. Date-based versioning enables rapid iteration.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-19

---

## 1. Today's Overview
The project shows **high velocity** with 50 PRs updated and 15 issues touched in the last 24 hours. No new release was cut, but the merge rate is healthy (18 PRs merged/closed vs 32 still open). Activity spans core stability fixes (OAuth2 token rotation, sandbox path expansion, Pydantic model rebuild), security hardening (shell-evasion checks enabled by default), UX polish (marketplace unification, background task list API), and new contributor onboarding (10+ first-time contributor PRs). The backlog contains several user-facing regressions (channel retry logic, image download failures, session freezes) that are actively being triaged.

---

## 2. Releases
**No new releases published today.** The latest version remains v2.1.0 (referenced in multiple issues).

---

## 3. Project Progress — Merged / Closed PRs Today (18 total)

| PR | Type | Summary | Link |
|----|------|---------|------|
| #7122 | Feature | First-time contributor: "Feature/biz kb" (details not fully specified) | [#7122](https://github.com/agentscope-ai/QwenPaw/pull/7122) |
| #7072 | Feature | Console: add background chat task list API (`GET /console/chat/tasks`) for multi-agent coordination | [#7072](https://github.com/agentscope-ai/QwenPaw/pull/7072) |
| #7064 | Bugfix | CLI: sync top-level `text` field on `cron update --text` for agent jobs | [#7064](https://github.com/agentscope-ai/QwenPaw/pull/7064) |
| #7069 | Bugfix | Console: render data-URL images in historical messages on session reload | [#7069](https://github.com/agentscope-ai/QwenPaw/pull/7069) |
| #7009 | Bugfix (Closed) | Pod termination false positive — Cloudflare Tunnel + monitor plugin misclassified | [#7009](https://github.com/agentscope-ai/QwenPaw/pull/7009) |
| #6945 | Question (Closed) | Smart-mode sandbox write restrictions clarified | [#6945](https://github.com/agentscope-ai/QwenPaw/issues/6945) |
| #7063 | Bug (Closed, Invalid) | Agent tool-call crash — turned out to be user error / non-reproducible | [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) |

*Other merged PRs include routine dependency updates, test flakiness fixes, and documentation tweaks.*

---

## 4. Community Hot Topics — Most Active Discussions

| Item | Type | Comments | Core Need / Signal |
|------|------|----------|-------------------|
| **#6880** | PR (Open, Under Review) | High (undefined count shown) | **Marketplace unification** — merge Apps, Plugins, Skills under `/market` with tabbed navigation. Major UX refactor, preserve existing logic. |
| **#6684** | Issue (Open) | 10 | **Channel retry / health-check** — self-hosted Matrix channels fail on startup because QwenPaw connects before Matrix is ready; no automatic retry or health probe. |
| **#7102** | Issue (Open) | 7 | **Long freezes (10+ min)** on GLM 5.3 — no tokens, no thinking output. Possible provider/streaming deadlock. |
| **#6470** | Issue (Open) | 5 | **MCP transport config ignored** — hardcoded `sse_client` breaks `streamable_http` servers. Root cause in `mcp_stateful_client.py:_setup_transport`. |
| **#7052** | Issue (Open) | 4 | **Plugin API: system_prompt permission** — enterprise plugins need to inject hidden system prompts not visible in chat UI. |
| **#7053** | Issue (Open) | 2 (+ PR #7066) | **OAuth2 refresh_token rotation not persisted** — remote MCP (e.g., XMind) degrades to manual re-auth. Fix PR #7066 open. |
| **#7110** | Issue (Open) | 3 | **Unreachable image URL breaks entire session** — single bad link in history makes session unusable until `/clear`. |
| **#7118** | Issue (Open) | 1 | **Corrupt `envs.json` silently loses all env vars** — parse error swallowed, then empty object written back. |
| **#7117** | Issue (Open) | 1 | **Plugin encryption** — enterprise request to obfuscate plugin source after load (copy protection). |
| **#7121** | Issue (Open) | 1 | **Flaky nightly test** on macOS: `test_sibling_sessions_run_without_serializing` timing assertion. |

**Underlying themes:**  
- **Enterprise readiness** (plugin encryption, hidden system prompts, OAuth2 robustness)  
- **Resilience** (retries, health checks, graceful degradation on bad media)  
- **Multi-channel / multi-agent UX** (marketplace, background tasks, session recovery)

---

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | #7102 | Complete freeze >10 min on GLM 5.3 — no tokens, no thinking. Blocks usage. | ❌ |
| **Critical** | #7118 | Silent data loss: corrupt `envs.json` → all env vars gone on next write. | ❌ (easy fix: validate before write + backup) |
| **High** | #7110 | Single unreachable image URL poisons entire session history; only `/clear` recovers. | ❌ |
| **High** | #6470 | MCP `streamable_http` transport broken — hardcoded SSE client. | ❌ (root cause identified) |
| **High** | #7082 | Pydantic `_StructuredOutputDynamicClass` not fully defined — agent/toolkit init fails. | ❌ |
| **Medium** | #6684 | Channel connection retry missing — manual re-save required after server restart. | ❌ |
| **Medium** | #7005 | Sandbox blocks `uv run` writing `~/.cache/uv`; `Write(~/.cache/uv/**)` in policy.yaml ineffective (path not expanded). | ✅ PR #7116 |
| **Medium** | #7053 | OAuth2 rotating refresh_token not persisted → permanent re-auth needed. | ✅ PR #7066 |
| **Medium** | #7074 | Frequent crashes requiring page refresh — high frequency reported. | ❌ |
| **Low** | #7121 | Flaky macOS nightly test (timing assertion). | ❌ (test infra) |

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|-----------------------------|-----------|
| **Marketplace unification (Apps/Plugins/Skills)** | PR #6880 (Under Review) | **High** | Large UX refactor already in review; aligns with console polish. |
| **Channel retry & health-check** | #6684 (10 comments) | **High** | Clear user pain, architectural fit (backend channels). |
| **Plugin `system_prompt` injection (hidden)** | #7052 | **Medium** | Enterprise need; requires API surface change. |
| **Plugin encryption / obfuscation** | #7117 | **Low–Medium** | Niche enterprise ask; conflicts with open-source ethos; may need design discussion. |
| **Background task list API** | PR #7072 (merged) | **Done** | Already landed; enables multi-agent coordination UI. |
| **Configurable `view_video` inline cap** | PR #7071 (Under Review) | **High** | Removes hardcoded 2 MB limit; small, low-risk. |
| **Remote Chrome bridge endpoint (LAN)** | PR #7054 (Under Review) | **Medium** | Enables remote browser control; security review needed. |
| **Shell-evasion checks enabled by default** | PR #7120 (Open) | **High** | Security hardening; already implemented, needs merge. |
| **Local QwenPaw Pro control plane** | PR #7112 (Draft) | **Low (long-term)** | Major architectural addition; opt-in, multi-tenant; early draft. |

---

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Frequency | User Quotes / Context |
|------------|-----------|----------------------|
| **Channel instability on startup** | Multiple (Matrix, DingTalk, Feishu, etc.) | "qwenpaw自动快于Matrix服务，导致失败…每次服务器启动后都需要手动重新保存一次频道" (#6684) |
| **Session corruption from bad media URLs** | 1 report, high impact | "不管是这个链接是模型幻觉生成的还是国内网络限制原因访问不了，总之就是，消息记录里出现一个没法访问的，这个会话下面就彻底挂掉了" (#7110) |
| **Long freezes with specific models (GLM 5.3)** | 1 report, severe | "freeze more than 10 minutes long… didnt receive any token text words or anything else" (#7102) |
| **Sandbox blocking legitimate tooling (uv, gh, cmake)** | 2 reports | "Enabling Shabox causes UV can't to write ~/.cache/uv Folder" (#7005); "User-installed CLIs — gh, cmake, lark… not on PATH" (PR #7057) |
| **OAuth2 re-auth friction for remote MCP** | 1 report + fix PR | "refresh_token rotation not persisted… permanently degrades to manual re-auth" (#7053) |
| **Frequent crashes requiring refresh** | 1 report, "high frequency" | "正常运行奔溃，需要刷新页面才能重启，频次高发~" (#7074) |
| **Enterprise plugin IP protection** | 1 request | "公司就是想做特色插件，希望加载插件后，不能被复制查看" (#7117) |

**Satisfaction signals:**  
- First-time contributors successfully landing fixes (10+ PRs) → good onboarding.  
- Quick turnaround on clear regressions (e.g., #7064, #7069 merged same day).  
- Active triage: maintainers labeling, asking for info, linking fix PRs.

**Dissatisfaction signals:**  
- Core resilience gaps (retries, media handling, session recovery) affect daily workflows.  
- macOS test flakiness indicates CI fragility.  
- Security defaults (shell-evasion) were off by default until now.

---

## 8. Backlog Watch — Stale / Needing Maintainer Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| **#6470** MCP transport hardcoded SSE | 24 days | Open, 5 comments, root cause known | Blocks `streamable_http` MCP servers; core integration. |
| **#6684** Channel retry / health-check | 15 days | Open, 10 comments | High user impact; architectural (channels subsystem). |
| **#7082** Pydantic `_StructuredOutputDynamicClass` not defined | 2 days | Open, 3 comments | Blocks agent/toolkit init on console channel; regression in v2.1.0. |
| **#7118** `envs.json` silent corruption → data loss | 1 day | Open, 1 comment | Silent data loss is severe; fix is trivial (validate + backup). |
| **#7102** GLM 5.3 freeze (10+ min) | 1 day | Open, 7 comments | Model-specific but severe; may indicate streaming deadlock. |
| **#7074** Frequent crashes requiring refresh | 3 days | Open, 3 comments | "高发" (high frequency) — needs reproduction + stack trace. |
| **#7121** Flaky macOS nightly test | 1 day | Open, 1 comment | CI reliability; blocks confident merges. |
| **PR #6880** Marketplace unification | 9 days | Under Review, high comment volume | Large UX change; needs final review/merge decision. |
| **PR #7120** Shell-evasion checks default-on | 1 day | Open | Security posture; should be fast-tracked. |
| **PR #7116** Sandbox `~` expansion in policy mounts | 1 day | Open | Unblocks #7005; small, high-value fix. |

---

## Quick Health Indicators
| Metric | Signal |
|--------|--------|
| **PR merge rate** | 18/50 (36%) in 24h — healthy |
| **First-time contributor ratio** | ≥10/50 (20%) — strong onboarding |
| **Critical bugs without fix PR** | 5 (freeze, data loss, session poison, MCP transport, Pydantic) — needs triage |
| **Enterprise feature requests** | 3 (plugin encryption, hidden system_prompt, Pro control plane) — growing |
| **CI flakiness** | 1 macOS nightly — monitor |

---

*Generated from GitHub data (issues/PRs updated 2026-08-18 → 2026-08-19). All links point to `agentscope-ai/QwenPaw` repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-19

## 1. Today's Overview
ZeroClaw shows **high development velocity** with 50 PRs updated in the last 24 hours (48 open, 2 closed) and 6 active issues. The project is in active maintenance mode with no new releases, focusing on bug fixes, provider integrations, security hardening, and observability improvements. Several high-priority bugs (P1) around memory growth, WhatsApp linking, and credential handling are being actively addressed. The PR queue is large with many "do-not-merge" and "needs-maintainer-review" labels, indicating a backlog awaiting review bandwidth.

## 2. Releases
**No new releases** in the last 24 hours. The project appears to be on a continuous integration cycle with changes accumulating on `master`.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#10009](https://github.com/zeroclaw-labs/zeroclaw/pull/10009) | `fix(memory): key conversation autosave suppression on turn origin` | agent/memory/runtime | **P1 fix** — Prevents heartbeat worker from defeating conversation autosave filter; reduces spurious writes |
| [#10097](https://github.com/zeroclaw-labs/zeroclaw/issues/10097) | `ci: Advisory scan failed — 2026-08-18` | security/CI | **Closed** — Advisory scan failure addressed (likely dependency update or deny.toml adjustment) |

## 4. Community Hot Topics — Most Active Issues/PRs
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | Issue (Bug) | 4 | **Unbounded RSS growth** from MCP/tool-schema cloning in agent loop — high-risk memory leak |
| [#8650](https://github.com/zeroclaw-labs/zeroclaw/issues/8650) | Issue (Feature) | 2 | **Log path discoverability** in ZeroCode/Doctor diagnostics for debugging persisted events |
| [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) | Issue (Bug) | 1 | **WhatsApp Web device linking broken** by new passkey/SHORTCAKE gate — S1 workflow blocker |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | PR (Feature) | — | **Native Hailo-Ollama support** — large XL PR adding typed provider integration |
| [#9743](https://github.com/zeroclaw-labs/zeroclaw/pull/9743) | PR (Bug) | — | **Wire modalities parser** into capabilities_for_model — high-risk provider/runtime fix |

**Underlying needs**: Users are hitting memory pressure in long-running agent loops (especially WSL2), need better observability for diagnostics, and require urgent fixes for broken third-party integrations (WhatsApp). The maintainer review bottleneck is evident from 10+ PRs tagged `needs-maintainer-review` or `do-not-merge`.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **P1 / High** | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) MCP/tool-schema cloning → unbounded RSS growth | Open (accepted) | None yet |
| **P1 / High** | [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) WhatsApp Web device linking broken by passkey gate | Open (in-progress) | None yet |
| **P1 / High** | [#10107](https://github.com/zeroclaw-labs/zeroclaw/pull/10107) Google STT API keys exposed in URLs | Open (PR) | **PR #10107** — moves keys to header |
| **P1 / High** | [#10009](https://github.com/zeroclaw-labs/zeroclaw/pull/10009) Conversation autosave filter defeated by heartbeat | **Merged** | — |
| **P2 / Medium** | [#10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) Exact proxy selectors reject transcription services | Open | None yet |
| **P2 / Medium** | [#9291](https://github.com/zeroclaw-labs/zeroclaw/pull/9291) CLI fails to detect AppImage / broken download URL | Open | **PR #9291** |
| **High** | [#9402](https://github.com/zeroclaw-labs/zeroclaw/pull/9402) Nested Docker sandbox inside Docker runtime | Open (PR) | **PR #9402** |
| **High** | [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) Credential rotation after rate limits | Open (PR) | **PR #9419** |

**Note**: Several high-risk bugs have open fix PRs awaiting review (`needs-maintainer-review`).

## 6. Feature Requests & Roadmap Signals
| Feature | Signal Strength | Likely Next Version |
|---------|----------------|---------------------|
| **Native Hailo-Ollama provider** ([#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)) | High — XL PR, typed integration | ✅ Likely |
| **Secure Telegram model picker** ([#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997)) | High — security/architecture, p2 | ✅ Likely |
| **KeySource trait + FileKeySource backend** ([#9194](https://github.com/zeroclaw-labs/zeroclaw/pull/9194)) | High — secrets abstraction, p2 | ✅ Likely |
| **Anthropic OAuth profile support** ([#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420)) | High — trusted contributor, p2 | ✅ Likely |
| **ZeroCode: session-history vs persistent-memory isolation** ([#9341](https://github.com/zeroclaw-labs/zeroclaw/pull/9341)) | Medium — UX clarity, p2 | 🟡 Possible |
| **Grok Build ACP provider** ([#9104](https://github.com/zeroclaw-labs/zeroclaw/pull/9104)) | Medium — new provider family | 🟡 Possible |
| **Show resolved log path in ZeroCode diagnostics** ([#8650](https://github.com/zeroclaw-labs/zeroclaw/issues/8650)) | Low — p3 enhancement | ⏳ Later |
| **Harden plugin egress pattern containment** ([#10105](https://github.com/zeroclaw-labs/zeroclaw/issues/10105)) | Low — follow-up hardening | ⏳ Later |

**Roadmap prediction**: Next release will likely ship provider expansions (Hailo-Ollama, Grok, Anthropic OAuth), security hardening (KeySource, Telegram picker, Google STT header fix), and the memory/autosave fixes already merged.

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Memory leaks in agent loops** | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) — "unbounded RSS growth", split from OOM tracker #5542 | High — blocks long-running agents, especially WSL2 |
| **WhatsApp integration broken** | [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) — "device linking never completes" after WhatsApp passkey change | Critical — S1 workflow blocked |
| **Log/debugging opacity** | [#8650](https://github.com/zeroclaw-labs/zeroclaw/issues/8650) — "UI does not make backing log location discoverable" | Medium — slows incident response |
| **Proxy config too strict** | [#10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) — "reject supported transcription services" | Medium — breaks valid setups |
| **CLI AppImage detection broken** | [#9291](https://github.com/zeroclaw-labs/zeroclaw/pull/9291) — "menu-registered AppImage reported as not installed" | Low-Medium — install verification fails |

**Positive signals**: Active contributor engagement on provider integrations (Hailo, Grok, Anthropic), security hardening (secrets abstraction, credential rotation), and observability cleanup (DORA telemetry retirement in [#9451](https://github.com/zeroclaw-labs/zeroclaw/pull/9451)).

## 8. Backlog Watch — Stalled High-Value Items
| Item | Age | Why It Matters | Blocker |
|------|-----|----------------|---------|
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) Hailo-Ollama provider | 33 days | New hardware acceleration path | `needs-author-action` — author must respond |
| [#9743](https://github.com/zeroclaw-labs/zeroclaw/pull/9743) Modalities parser wiring | 15 days | Fixes provider capability detection | `needs-author-action` |
| [#9013](https://github.com/zeroclaw-labs/zeroclaw/pull/9013) Move TodoWrite config to ZeroCode | 38 days | Architectural cleanup (display vs daemon) | `needs-maintainer-review`, `do-not-merge` |
| [#9104](https://github.com/zeroclaw-labs/zeroclaw/pull/9104) Grok Build ACP provider | 34 days | New model provider family | `needs-maintainer-review`, `do-not-merge` |
| [#9194](https://github.com/zeroclaw-labs/zeroclaw/pull/9194) KeySource trait extraction | 30 days | Secrets abstraction foundation | `needs-maintainer-review`, `do-not-merge` |
| [#9203](https://github.com/zeroclaw-labs/zeroclaw/pull/9203) SOP authenticated HTTP fan-in | 30 days | Gateway security/completeness | `needs-maintainer-review`, `do-not-merge` |
| [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) Anthropic OAuth profiles | 24 days | Modern auth for major provider | `needs-maintainer-review`, `do-not-merge` |
| [#9451](https://github.com/zeroclaw-labs/zeroclaw/pull/9451) Retire DORA telemetry | 23 days | Observability debt reduction | `needs-maintainer-review`, `do-not-merge` |
| [#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997) Telegram secure model picker | 5 days | Channel UX + security | `needs-maintainer-review` |

**Maintainer attention needed**: 9 PRs tagged `needs-maintainer-review` (7 also `do-not-merge`), plus 2 `needs-author-action`. The review queue is the primary bottleneck — consider triage session or delegated reviewers.

---

**Project Health Indicator**: 🟡 **Active but bottlenecked** — High commit velocity and important fixes in flight, but maintainer review capacity appears insufficient for PR throughput. Critical bugs have fixes ready but unmerged. Recommend prioritizing review of P1/P2 fix PRs (#10107, #9402, #9419, #9291) and clearing the `do-not-merge` backlog.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*