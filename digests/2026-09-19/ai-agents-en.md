# OpenClaw Ecosystem Digest 2026-09-19

> Issues: 214 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-19 04:17 UTC

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

# OpenClaw Project Digest — 2026-09-19

## 1. Today's Overview

OpenClaw continues its high-velocity development cadence with **500 PRs and 214 issues updated in the last 24 hours**, indicating a mature project with active daily maintenance. The project released **v2026.9.5** (64 direct commits, 4,179 PRs, 503 contributors), suggesting a stable release pipeline. Despite heavy activity, the open issue count (140 active) and PR backlog (342 open) show sustained throughput. Key themes today: **gateway performance optimization**, **session reliability fixes**, **UI/UX polish**, and **plugin/extension hardening**. The "stale" label on many older issues suggests systematic triage, while P0/P1 bugs around SQLite corruption, zombie processes, and message loss remain critical focus areas.

---

## 2. Releases

### v2026.9.5 — openclaw 2026.9.5
- **Released:** 2026-09-19 (today)
- **Scope:** 64 direct commits · 4,179 PRs · 503 contributors
- **Changelog:** [Release notes](https://docs.openclaw.ai/rele...) (truncated in data)
- **Migration notes:** Not provided in data; check docs for breaking changes
- **Significance:** Regular cadence release; likely includes cumulative fixes from the 4,000+ PRs since last version

---

## 3. Project Progress (Merged/Closed PRs Today: 158)

| Area | Key Merged/Closed Work | Impact |
|------|------------------------|--------|
| **Gateway Performance** | #152468 (reuse session list predicates), #152447 (reduce pauses during worker cleanup), #152462 (avoid redundant rebuilds after credential refresh) | Lower CPU, faster session listing on busy gateways |
| **Session Reliability** | #152361 (prevent plugin-state failures during DB maintenance), #152372 (keep queued progress updates in source thread), #152426 (retry model selection after credential refresh) | Fixes message loss, progress misrouting, auth races |
| **UI/UX** | #152255 (keep Review panel readable during long tool runs), #152316 (show workspace type badges), #152370 (start background sessions from command palette), #152295 (host/thread CPU in status tile) | Improved observability, multitasking, operator ergonomics |
| **Release Engineering** | #152432 (reclaim orphaned ClawHub publication children), #152470 (check publication gates before dispatch), #152458 (frozen package validation fixes) | More reliable releases, fewer blocked publishes |
| **Security/Hardening** | #119702 (guard patternProperties with compileSafeRegex), #141309 (Git-readable null path for Windows isolated GIT_CONFIG) | SSRF/regex DoS prevention, Windows Git compat |
| **Memory/Indexing** | #152441 (index extra paths created after startup), #152180 (prevent empty task pages when metadata unavailable) | Fixes stale recall, empty cron previews |
| **Codex/Sandbox** | #151764 (settle sandbox processes and readiness probes) | Stops zombie processes, improves Ctrl-C handling |

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Reactions | Core Need |
|------|----------|-----------|-----------|
| **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — Zombie process leak from hook/tool children | 30 | 👍1 | **P1 regression**: Unreaped children accumulate as zombies, degrading runtime; blocks long-running gateways |
| **[#40786](https://github.com/openclaw/openclaw/issues/40786)** — `.gitignore`-like exclude patterns for backup CLI | 13 | 👍1 | **P2 feature**: Users need to exclude `node_modules`, `.env`, `__pycache__` from backups; stale, needs product decision |
| **[#83959](https://github.com/openclaw/openclaw/issues/83959)** — Codex app-server startup retries exhaust before replacement ready | 11 | 👍1 | **P2 reliability**: Background agent turns fail during Codex server startup; needs live repro |
| **[#129314](https://github.com/openclaw/openclaw/issues/129314)** — Hidden runtime context message occasionally rendered as visible turn | 8 | — | **P1 UX**: Internal scaffolding leaks to user; session-state impact |
| **[#77886](https://github.com/openclaw/openclaw/issues/77886)** — Owner-approved flow for protected config changes | 8 | 👍2 | **P2 security**: Agents can't silently escalate, but current UX blocks legitimate admin changes; needs approval workflow |
| **[#126821](https://github.com/openclaw/openclaw/issues/126821)** — SQLite corruption on pristine DBs within 15–24h (WSL2) | 8 | — | **P0 data-loss**: Freelist miscount → "paralyzed gateway" mode; 5 events in 5 days; **critical blocker** |
| **[#56217](https://github.com/openclaw/openclaw/issues/56217)** — 1Password secret provider crash-loop exhausts rate limits | 7 | 👍1 | **P0 crash-loop**: Failed `op read` → launchd KeepAlive spiral; rate-limits 1Password service account |
| **[#152060](https://github.com/openclaw/openclaw/pull/152060)** — Run cloud desktops on macOS/Windows (PR) | — | — | **XL feature**: Enable computer use, desktop observation, Browser/Terminal on native Windows/macOS via Crabbox; **compat/security risk flags** |

**Underlying signals:** Operators run **multi-agent gateways at scale** (Discord, Telegram, WhatsApp, Matrix, Signal) and hit **reliability ceilings** — zombie processes, SQLite corruption, message loss, auth races. There's strong demand for **operational tooling** (backup excludes, log timezone, memory limits) and **admin safety rails** (owner-approved config changes, SSRF overrides).

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? | Notes |
|----------|-------|--------|---------|-------|
| **P0 — Data Loss / Crash Loop** | [#126821](https://github.com/openclaw/openclaw/issues/126821) SQLite corruption on pristine DBs (WSL2) | Open | No | 5 events in 5 days; "paralyzed gateway" refuses service but never exits; **beta-blocker candidate** |
| **P0 — Crash Loop** | [#56217](https://github.com/openclaw/openclaw/issues/56217) 1Password secret provider crash-loop exhausts rate limits | Open | No | launchd `KeepAlive` + failed `op read` → infinite restart spiral |
| **P1 — Message Loss / Degradation** | [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie process leak from hook/tool children | Open | No | Accumulates `openclaw-hooks`, `bash`, `codex` zombies; runtime degradation over time |
| **P1 — Session State** | [#129314](https://github.com/openclaw/openclaw/issues/129314) Internal runtime context leaks as visible message | Open | No | Intermittent; `<<<BEGIN_OPENCLAW_INTERNAL_CONTEXT>>>` rendered to user |
| **P1 — Session State** | [#130955](https://github.com/openclaw/openclaw/issues/130955) Memory index stalls after exactly 2 files/chunks | Open | No | Both `extraPaths` and base memory dir affected; `--force`/restart don't help |
| **P1 — Security / Config** | [#126529](https://github.com/openclaw/openclaw/issues/126529) Custom model entries silently route to wrong provider | Open | No | Missing `api`/`baseUrl` masked by "no restart needed" message |
| **P1 — Reliability** | [#84983](https://github.com/openclaw/openclaw/issues/84983) Native cron agent-turn saturates gateway event loop | Open | No | Chat transports unresponsive for minutes; single job takes down gateway |
| **P1 — Delivery** | [#87544](https://github.com/openclaw/openclaw/issues/87544) Transcript-to-client delivery drift in channel-scoped sessions | Open | No | Discord: assistant replies in transcript/Control UI but missing in channel |
| **P1 — Regression** | [#108738](https://github.com/openclaw/openclaw/issues/108738) Tool-only turn produces empty final text (7.1 regression) | Closed | Likely | Outbound payload dropped; Control UI hides turn |
| **P2 — Crash/Regression** | [#123136](https://github.com/openclaw/openclaw/issues/123136) Beta blocker: Plugin version drift & upgrade recovery (2026.7.2-beta.6→7) | Open | No | Gateway/WhatsApp setup failing; plugin version mismatch |

**Fix PRs visible today:** #151764 (Codex sandbox zombie fix), #152361 (plugin-state/DB maintenance), #152372 (progress update threading), #152426 (auth retry), #152441 (memory extra paths). Most P0/P1 bugs **lack fix PRs** — backlog pressure.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Priority | Likelihood for Next Version |
|---------|-------|----------|----------------------------|
| **Backup CLI exclude patterns** (`.gitignore`-like) | [#40786](https://github.com/openclaw/openclaw/issues/40786) | P2 | Medium — stale, needs product decision; linked PR open |
| **Owner-approved flow for protected config changes** | [#77886](https://github.com/openclaw/openclaw/issues/77886) | P2 | Medium — needs security/product review; 👍2 |
| **Fallback model chain for compaction/LCM** | [#56781](https://github.com/openclaw/openclaw/issues/56781) | P2 | High — compaction fails silently on rate limits; agent chat already has fallback |
| **Stream repetition safeguard (halt & confirm)** | [#44965](https://github.com/openclaw/openclaw/issues/44965) | P2 | Medium — infinite loop protection; 👍1 |
| **Anthropic advisor tool (server-side tool) support** | [#63930](https://github.com/openclaw/openclaw/issues/63930) | P2 | High — beta server-side tool; adds generic `server_tool_use` handling |
| **Cron tool schema: model/timeout/contextTokens/maxSpendUsd** | [#64721](https://github.com/openclaw/openclaw/issues/64721) | P2 | High — cron jobs lack critical control fields |
| **LLM intercept input/output modifying hooks** | [#115988](https://github.com/openclaw/openclaw/issues/115988) | P2 | Medium — compliance/filtering/redaction; prior PRs attempted |
| **Agent-requested compaction (topic-shift aware)** | [#138083](https://github.com/openclaw/openclaw/issues/138083) | P3 | Low — novel UX; needs design |
| **Quick Chat → universal context/action HUD** | [#138323](https://github.com/openclaw/openclaw/issues/138323) | P2 | Medium — strategic UX evolution; cross-app context sharing |
| **Per-agent `web_fetch` SSRF overrides** | [#67421](https://github.com/openclaw/openclaw/pull/67421) (PR) | P2 | Medium — open PR; compat/security-risk flags |

**Roadmap prediction:** Next version (v2026.10.x) will likely land **fallback model chains**, **cron tool schema expansion**, **Anthropic advisor tool support**, and **backup excludes** — all high-impact, partially implemented, or have open PRs. **SSRF overrides** and **LLM intercept hooks** are security-sensitive, may need more review. **Zombie process fix** (#151764 merged) and **SQLite corruption** (#126821) are must-fix before next stable.

---

## 7. User Feedback Summary (Real Pain Points)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Gateway becomes unresponsive** | [#84983](https://github.com/openclaw/openclaw/issues/84983): cron job saturates event loop for minutes; [#128067](https://github.com/openclaw/openclaw/issues/128067): 6 reliability defect classes in beta.7 | High (multi-agent prod deployments) |
| **Message loss / delivery drift** | [#87544](https://github.com/openclaw/openclaw/issues/87544) Discord drift; [#72176](https://github.com/openclaw/openclaw/issues/72176) duplicate delivery; [#126842](https://github.com/openclaw/openclaw/issues/126842) false "claim stalled" warnings | High (all channels affected) |
| **SQLite corruption on WSL2** | [#126821](https://github.com/openclaw/openclaw/issues/126821): 5 events in 5 days on pristine DBs; "paralyzed gateway" mode | Critical (WSL2 users) |
| **Zombie process accumulation** | [#97616](https://github.com/openclaw/openclaw/issues/97616): hooks, bash, codex children leak; degrades over time | High (long-running gateways) |
| **1Password rate-limit crash loops** | [#56217](https://github.com/openclaw/openclaw/issues/56217): launchd KeepAlive + failed `op read` → service account exhaustion | High (1Password users) |
| **Memory indexing broken** | [#130955](https://github.com/openclaw/openclaw/issues/130955): stalls at 2 files; [#152441](https://github.com/openclaw/openclaw/pull/152441) fix merged today for extra paths | Medium |
| **TUI regression (2026.7.1+)** | [#129716](https://github.com/openclaw/openclaw/issues/129716): output batches all at once, viewport jumps to top | Medium (TUI users) |
| **Log timezone confusion** | [#46748](https://github.com/openclaw/openclaw/issues/46748): `openclaw logs` shows UTC only; local time in file but not CLI | Low (closed, but persistent request) |
| **WhatsApp image re-read fails** | [#88362](https://github.com/openclaw/openclaw/issues/88362): UUID mismatch from double-save | Medium (WhatsApp users) |
| **iOS App Store lag** | [#137127](https://github.com/openclaw/openclaw/issues/137127): Skill Workshop fix in source but not in App Store binary | Low (iOS users) |

**Satisfaction signals:** Users invest heavily in **production deployments** (multi-channel, cron, memory, plugins) and file detailed field reports (#128067: 3 weeks evidence). Frustration centers on **silent failures** (corruption, drift, zombies) and **operational gaps** (backup, logs, memory limits). The project's **Claude/Codex integration depth** is a key differentiator users rely on.

---

## 8. Backlog Watch (Long-Unanswered Important Items)

| Item | Age | Priority | Why It Matters | Status |


---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Open-Source Ecosystem (2026-09-19)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows a **bimodal distribution**: a few high-velocity "platform" projects (OpenClaw, ZeroClaw, Hermes Agent, CoPaw) processing 50–500 PRs/day with dedicated teams, while most others operate in **low-velocity maintenance or stabilization modes**. All active projects are converging on **multi-channel gateway architectures** (Discord, Telegram, Matrix, Slack, custom web UIs), **provider-agnostic LLM routing**, and **session persistence with compaction**. Critical reliability gaps persist across the board: **unbounded resource growth** (transcripts, memory indexes), **sandbox/container isolation failures**, and **credential/secret management crashes**. No project has solved "set-and-forget" fleet operations at scale.

---

## 2. Activity Comparison (2026-09-19)

| Project | Issues Updated | PRs Updated | PRs Merged/Closed | Release Today | Health Score* |
|---------|----------------|-------------|-------------------|---------------|---------------|
| **OpenClaw** | 214 | 500 | 158 | ✅ v2026.9.5 | 🟢 **9/10** |
| **ZeroClaw** | 9 | 50 | 11 (8 PRs + 3 issues) | ❌ | 🟢 **8/10** |
| **Hermes Agent** | 13 | 50 | 19 | ❌ | 🟢 **8/10** |
| **CoPaw (QwenPaw)** | 16 | 40 | 16 (12 PRs + 4 issues) | ❌ | 🟢 **8/10** |
| **LobsterAI** | ~5 | 21 | 7 | ❌ (branch merged) | 🟡 **7/10** |
| **NanoBot** | 5 | 13 | 4 | ❌ | 🟡 **6/10** |
| **NanoClaw** | 7 | 4 | 0 | ❌ | 🟠 **4/10** |
| **PicoClaw** | 1 | 4 | 1 | ❌ | 🟡 **6/10** |
| **ZeptoClaw** | 0 | 1 | 1 | ❌ | 🟡 **5/10** |
| **IronClaw** | 0 | 2 | 0 | ❌ | 🟠 **4/10** |
| **Moltis** | 0 | 1 | 0 | ❌ | 🟠 **3/10** |
| **NullClaw** | 0 | 0 | 0 | ❌ | ⚫ **1/10** |

*Health Score: composite of velocity, closure rate, release cadence, critical bug backlog, and community responsiveness (1–10).

---

## 3. OpenClaw's Position

### Advantages vs Peers
| Dimension | OpenClaw | Nearest Peers |
|-----------|----------|---------------|
| **Contributor base** | 503 contributors (all-time) | ZeroClaw (~12 distinct authors/day), Hermes (~10), CoPaw (~7 new/day) |
| **Release engineering** | Automated, 4,179 PRs in v2026.9.5; frozen package validation | Most peers manual or ad-hoc |
| **Gateway scale** | Multi-agent, multi-channel (Discord/Telegram/WhatsApp/Matrix/Signal) at production scale | Hermes (fleet), ZeroClaw (delegation), LobsterAI (IM-focused) |
| **Reliability investment** | Dedicated P0/P1 triage: SQLite corruption, zombie processes, message loss | Reactive fixes only in peers |

### Technical Approach Differences
- **Session model**: OpenClaw uses **channel-scoped sessions with transcript delivery guarantees**; peers use simpler per-user or per-channel maps.
- **Plugin/extension system**: **ClawHub publication pipeline** with orphan reclamation and gate checks — more mature than ZeroClaw's skills indexes or Hermes' plugin catalog.
- **Memory/indexing**: **Background memory indexing with extra-path watching** (#152441 merged today); peers report stalls (NanoClaw, CoPaw) or lack persistence (Moltis).
- **Sandbox/Codex**: **Crabbox integration** for desktop observation (PR #152060) — unique native macOS/Windows computer-use capability.

### Community Size Comparison
- **OpenClaw**: 503 contributors, 140 active issues, 342 open PRs — **largest by 5–10×**
- **ZeroClaw/CoPaw/Hermes**: 10–15 active contributors/day, 20–60 open issues
- **Others**: <5 active contributors, mostly single-maintainer or internal-team driven

---

## 4. Shared Technical Focus Areas (Cross-Project Requirements)

| Requirement | Projects Affected | Specific Need |
|-------------|-------------------|---------------|
| **Transcript/History Retention & Rotation** | **NanoClaw** (#3716, #3735), **CoPaw** (#7853), **OpenClaw** (#152441), **ZeroClaw** (delegate history) | Configurable TTL, size caps, compression; prevent OOM/disk exhaustion |
| **Credential/Secret Management Hardening** | **OpenClaw** (#56217 1Password crash-loop), **Hermes** (#109198, #113023 token cross-contamination), **ZeroClaw** (WhatsApp passkey #10084), **LobsterAI** (Feishu secret routing #2701) | Isolated secret stores, rate-limit backoff, multi-account isolation |
| **Sandbox/Container Escape Prevention** | **ZeroClaw** (#10966 Git `--attr-source` S0), **OpenClaw** (#119702 regex DoS, #141309 Windows Git config), **NanoClaw** (env propagation #3714) | Capability-based allowlists, argument-level inspection, Windows parity |
| **Provider Transport Reliability** | **Hermes** (Codex/OpenAI auth), **ZeroClaw** (Anthropic cache TTL #10663, stream recovery #10803), **ZeptoClaw** (#703 reasoning content), **PicoClaw** (#3371 opencode-go) | Retry budgets, overload classification, streaming parity, model-header handling |
| **Session State Consistency** | **OpenClaw** (#129314 internal context leak, #87544 delivery drift), **CoPaw** (#7836 scroll eviction loses user turn), **Hermes** (#111868 desktop freeze loses session), **NanoBot** (#5798 cross-talk) | Atomic checkpoints, delivery acknowledgments, cross-session isolation |
| **Fleet/Update Orchestration** | **Hermes** (#109573, #115311, #115638 fleet restart markers), **OpenClaw** (ClawHub publication gates), **ZeroClaw** (skills install from pinned indexes #10944) | Self-healing rolling updates, marker discharge guarantees, version pinning |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architectural Signature |
|---------|---------------|-------------|-------------------------|
| **OpenClaw** | **Production gateway platform** — multi-tenant, multi-channel, operator-grade | Teams running agent fleets on Discord/Telegram/WhatsApp/Matrix/Signal | Channel-scoped sessions, ClawHub plugin marketplace, Crabbox desktop integration, SQLite-backed durability |
| **ZeroClaw** | **Agent delegation & security** — sub-agent observability, sandbox hardening, provider caching | Developers building complex multi-agent workflows | Delegate progress streaming, SOP failure reasons, signed reasoning preservation, Anthropic cache TTL control |
| **Hermes Agent** | **Autonomous fleet operations** — self-healing updates, desktop session resilience, Bot Screen takeover | Orgs running 10k-commit/day autonomous agent fleets | Fleet restart markers, per-bot Xfce streaming, MoA aggregator, Tirith static analysis integration |
| **CoPaw (QwenPaw)** | **Personal/team assistant with Hub pivot** — context management, media handling, multi-tenant v2.2.0 | Power users + teams (Hub); strong Chinese IM integration (Feishu, Weixin, QQ) | ToolResultPruner, scroll eviction with model labeling, Feishu streaming cards, QwenPaw Hub (SSO, audit logs) |
| **LobsterAI** | **Enterprise IM integration** — NetEase/Youdao ecosystem, OpenClaw gateway wrapper, skills marketplace | NetEase employees + external devs (blocked by internal npm) | Cowork workspace (Codex-style), scheduled-task delivery receipts, Weixin/QQ/Feishu channels |
| **NanoBot** | **Lightweight multi-channel bot** — Discord/Telegram/Linear/WebUI parity | Small teams, hobbyists | Channel-native replies, WebUI-only deployments, Linear agent channel, Jev shell safeguard |
| **PicoClaw** | **Chinese IM channel breadth** — QQ, Feishu, DeltaChat, WebUI performance | Chinese-community bot operators | Media-rich QQ Channel, opencode-go provider, DeltaChat refactor, web UI virtualization |
| **NanoClaw** | **Group/team fleet management** — status bar, Slack skills, Codex transport | macOS/Slack-heavy teams | Swift status-bar, Slack token rotation, Codex HTTP/SSE/WebSocket fallback |
| **IronClaw** | **Extension reliability & storage architecture** — Gmail/Calendar OAuth, profile-agnostic Reborn storage | Enterprise deployments needing Google Workspace + multi-tenancy | Web UI OAuth activation, security envelopes for profile isolation |
| **ZeptoClaw** | **Reasoning-model interoperability** — OpenAI-compatible endpoint fidelity | Local/private model orchestrators | `reasoning_content` parsing, null-content handling |
| **Moltis** | **Provider coverage breadth** — Groq, OpenAI-compatible roster | Model-agnostic experimenters | Strict-schema hardening, GenAI adapter fallback |
| **NullClaw** | *Inactive / no signal* | — | — |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Tier 1: High-Velocity Platforms** | OpenClaw, ZeroClaw, Hermes Agent, CoPaw | 40–500 PRs/day; 10+ active contributors; regular releases; P0 triage; security labeling; RFC processes |
| **Tier 2: Active Stabilization** | LobsterAI, NanoBot, PicoClaw | 4–21 PRs/day; release imminent or recent; critical bugs have open fix PRs; internal-team driven |
| **Tier 3: Maintenance/Refinement** | ZeptoClaw, IronClaw | <5 PRs/day; no releases; focused on specific fixes (OAuth, provider, storage); low community discussion |
| **Tier 4: Stalled/At Risk** | NanoClaw, Moltis, NullClaw | **NanoClaw**: high issue velocity (7) but **zero closure** — critical OOM bugs open 15+ days; **Moltis**: single PR, no maintainer response; **NullClaw**: no activity |

**Rapidly Iterating**: OpenClaw, ZeroClaw, Hermes, CoPaw, LobsterAI  
**Stabilizing**: NanoBot (v0.3.6 pending), PicoClaw (UI/provider polish)  
**Needing Intervention**: NanoClaw (closure velocity = 0), Moltis (PR #1276 unreviewed)

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence Across Projects | Strategic Value |
|-------|--------------------------|-----------------|
| **Session durability > raw model access** | OpenClaw (SQLite corruption P0), CoPaw (scroll eviction data loss), Hermes (desktop freeze loses session), NanoBot (cross-talk) | Invest in **checkpointed, auditable session state** — users treat agents as persistent collaborators, not stateless APIs |
| **Multi-channel is table stakes** | OpenClaw (5+ channels), LobsterAI (Weixin/QQ/Feishu), PicoClaw (QQ/Feishu/DeltaChat), NanoBot (Discord/Telegram/Linear/WebUI), NanoClaw (Slack) | Build **channel-agnostic gateway core**; channel adapters are commodities |
| **Operator tooling gaps block production** | OpenClaw (backup excludes #40786, log timezone #46748), NanoClaw (env propagation #3714, CLI validation #3855), ZeroClaw (Windows log bounds #10931) | **Operational maturity** (backup, logs, config validation, fleet updates) differentiates hobby vs. production projects |
| **Security boundaries hardening rapidly** | ZeroClaw (S0 Git bypass, signed reasoning), OpenClaw

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-19

## 1. Today's Overview
NanoBot shows high maintenance velocity with **13 PRs updated** and **5 issues active** in the last 24 hours. The project is in a **stabilization phase**—no new release, but four PRs were merged/closed today addressing WebUI recovery, Discord parity, channel listing, and agent recovery continuations. Open PRs (9) focus on bug fixes (Telegram formatting, Discord reaction cleanup, WebUI mobile UX, follow-up journal handling) and architectural refactors (subagent execution via private sessions, optional Jev shell safeguard). Issue #5798 (session cross-talk regression in v0.3.5) is the most user-visible regression.

## 2. Releases
**No new releases** in the last 24 hours. Current latest remains **v0.3.5** (per issue #5798). Users on v0.3.5 should be aware of the session cross-talk bug (#5798) and mobile WebUI double-tap issue (#5771).

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5812](https://github.com/HKUDS/nanobot/pull/5812) | **Bug fix (agent/WebUI)** | Run explicit recovery continuations through `AgentLoop`; distinguishes sustained-goal vs. WebUI recovery continuations. Adds regression test for recovery action → `AgentLoop` dispatch. | Fixes WebUI follow-ups not resuming correctly after gateway restart. |
| [#5810](https://github.com/HKUDS/nanobot/pull/5810) | **Bug fix (WebUI)** | Channels settings page now shows all configurable channels when only WebUI is enabled (excludes `always_enabled` channels from initial filter). | Improves discoverability of Discord/Telegram/Linear setup in WebUI-only deployments. |
| [#5800](https://github.com/HKUDS/nanobot/pull/5800) | **Feature (Discord)** | Adds `channels.discord.replyToMessage` (opt-in, default `false`) parity with Telegram; replies to triggering message for regular/attachment/streaming responses. Closes #1663. | Brings Discord native-reply UX to parity with Telegram; configurable per deployment. |
| [#5495](https://github.com/HKUDS/nanobot/pull/5495) | **Feature (Channel/Linear)** | **Closed** (likely superseded or merged elsewhere). Added native Linear Agent channel with OAuth/PKCE, webhook queue, WebUI panel. | Linear integration work completed/archived; watch for re-opened PR. |

## 4. Community Hot Topics
| Item | Activity | Signal |
|------|----------|--------|
| **[#5798](https://github.com/HKUDS/nanobot/issues/5798)** — Session cross-talk (replies leak into unrelated sessions) | 1 comment, created 2026-09-17, updated 2026-09-18 | **Critical regression in v0.3.5** (worked in v0.3.0). Blocks multi-session Windows users. No fix PR yet. |
| **[#5771](https://github.com/HKUDS/nanobot/issues/5771)** — Mobile WebUI double-tap to open session | 1 comment, created 2026-09-15, updated 2026-09-18 | UX regression on iOS; PR [#5805](https://github.com/HKUDS/nanobot/pull/5805) open with fix (pointer-events gating). |
| **[#5808](https://github.com/HKUDS/nanobot/issues/5808)** — Follow-ups canceled by `/stop` replay after gateway restart | 0 comments, created 2026-09-18 | Data-loss risk: durable recovery journal re-queues canceled follow-ups. PR [#5809](https://github.com/HKUDS/nanobot/pull/5809) open with fix (snapshot follow-up IDs at cancel). |

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **🔴 Critical** | [#5798](https://github.com/HKUDS/nanobot/issues/5798) | Replies cross sessions on Windows v0.3.5; breaks multi-user isolation. | *None yet* |
| **🟠 High** | [#5808](https://github.com/HKUDS/nanobot/issues/5808) | `/stop`’d follow-ups reappear after gateway restart (durable journal not cleared). | [#5809](https://github.com/HKUDS/nanobot/pull/5809) (open) |
| **🟠 High** | [#5806](https://github.com/HKUDS/nanobot/issues/5806) | Discord runtime leaves `_working_emoji_tasks` / `_pending_reactions` alive after stop → resource leak. | [#5807](https://github.com/HKUDS/nanobot/pull/5807) (open) |
| **🟡 Medium** | [#5771](https://github.com/HKUDS/nanobot/issues/5771) | Mobile WebUI session list requires two taps (hidden action trigger intercepts first tap). | [#5805](https://github.com/HKUDS/nanobot/pull/5805) (open) |
| **🟡 Medium** | [#5780](https://github.com/HKUDS/nanobot/pull/5780) | Background context compaction sends user-visible notifications (noisy). | [#5780](https://github.com/HKUDS/nanobot/pull/5780) (open, makes autocompaction invisible) |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Discord `replyToMessage` parity** | [#1663](https://github.com/HKUDS/nanobot/issues/1663) → [#5800](https://github.com/HKUDS/nanobot/pull/5800) **merged** | ✅ **Done** — shipped in today’s merges. |
| **Native Linear Agent channel** | [#5495](https://github.com/HKUDS/nanobot/pull/5495) (closed) | ⚠️ PR closed; may reappear as refined PR. Watch for Linear webhook + WebUI panel. |
| **Optional Jev shell safeguard (OpenRouter Decisions API)** | [#5815](https://github.com/HKUDS/nanobot/pull/5815) (open) | 🟡 **Likely** — opt-in, reuses OpenRouter config; adds security layer for `exec` tool. |
| **Subagent execution via private sessions** | [#5811](https://github.com/HKUDS/nanobot/pull/5811) (open) | 🟡 **Likely** — architectural cleanup; removes separate subagent runner, unifies compaction path. |
| **Config to disable compaction notifications** | [#5780](https://github.com/HKUDS/nanobot/pull/5780) (open) | 🟢 **Possible** — author suggests config option if invisibility isn’t desired. |

## 7. User Feedback Summary
- **Pain points**: 
  - **Session isolation broken** (#5798) — “replies appear in wrong session” on Windows v0.3.5; worked in v0.3.0.
  - **Mobile WebUI feels broken** (#5771) — first tap does nothing; users perceive unresponsiveness.
  - **Noisy background notifications** (#5780) — autocompaction alerts spam channels; users want opt-out.
  - **Discord resource leak** (#5806) — reaction tasks persist after stop; affects long-running bots.
- **Positive signals**: 
  - Discord native replies finally added ([#5800](https://github.com/HKUDS/nanobot/pull/5800) merged) — multi-year parity request resolved.
  - WebUI channel listing fixed for WebUI-only deployments ([#5810](https://github.com/HKUDS/nanobot/pull/5810) merged).
  - Active maintainer response: 4 PRs merged today, 9 open PRs with tests — rapid iteration on regressions.

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Stale Since | Why It Matters |
|------|-------------|----------------|
| **[#5798](https://github.com/HKUDS/nanobot/issues/5798)** — Session cross-talk | 2026-09-17 (2 days) | **Critical regression, no fix PR**. Blocks Windows multi-session users. Should be triaged as P0. |
| **[#5495](https://github.com/HKUDS/nanobot/pull/5495)** — Linear Agent channel (closed) | 2026-08-23 (27 days) | Large feature PR closed without merge; may indicate scope/design issues. If Linear integration is on roadmap, needs re-evaluation. |
| **[#5780](https://github.com/HKUDS/nanobot/pull/5780)** — Compaction notifications | 2026-09-15 (4 days) | Open PR with design question: make invisible vs. add config. Needs maintainer decision to unblock. |
| **[#5811](https://github.com/HKUDS/nanobot/pull/5811)** — Subagent refactor | 2026-09-18 (1 day) | Architectural change touching `AgentLoop`, `SubagentManager`, compaction. Requires careful review; tests pass (9/9). |

---

**Project Health**: 🟢 **Active stabilization** — high PR throughput, regressions acknowledged and being fixed, but one critical session-isolation bug (#5798) lacks a fix PR. Next patch (v0.3.6) will likely bundle the four merged fixes + open PRs #5805, #5807, #5809, #5780, #5813, #5814.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-19

## 1. Today's Overview

Hermes Agent shows **high development velocity** with 63 total updates (13 issues, 50 PRs) in the last 24 hours. The project is actively addressing a cluster of **fleet update/restart bugs** affecting the `hermes update` flow, particularly around the `fleet_restart_pending` marker mechanism. Multiple security-boundary fixes for Codex/OpenAI authentication are in progress, alongside desktop session stability improvements. No new release was cut today, but several merged PRs suggest a maintenance release is imminent. The community is also discussing forward-looking architecture (RFC #115639) for autonomous 24/7 agent fleets at scale.

---

## 2. Releases

**No new releases today.** The latest version remains **v0.21.3** (referenced in issues #112358, #113023). Given 19 PRs merged/closed today, a patch release (likely v0.21.4) incorporating the fleet restart fixes, auth isolation, and desktop session fixes is probable within days.

---

## 3. Project Progress — Merged/Closed PRs Today (19 items)

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#115633](https://github.com/NousResearch/hermes-agent/pull/115633) | Bot Screen: human login no longer loses shared browser to janitor | Desktop/Browser | Fixes session loss during Bot Screen takeover (#110064, #110040, #110065) |
| [#115625](https://github.com/NousResearch/hermes-agent/pull/115625) | fix(tirith): allow safe brace evidence captures | Security/Static Analysis | Resolves false positives in Tirith 0.4.2 for brace-group evidence |
| [#115624](https://github.com/NousResearch/hermes-agent/pull/115624) | fmt(js): `npm run fix` auto-fix | Code Quality | Automated lint/formatting cleanup |
| [#112358](https://github.com/NousResearch/hermes-agent/issues/112358) | MoA aggregator: prompt cache hits pinned to system prompt (~$147/49min) | Agent/Caching | **Closed** — root cause identified; fix likely in #111786 |
| [#111868](https://github.com/NousResearch/hermes-agent/issues/111868) | Desktop freeze loses session; stale localStorage 404-loop | Desktop/Session | **Closed** — session persistence & pointer cleanup fixed |
| [#109198](https://github.com/NousResearch/hermes-agent/issues/109198) | Codex manual credential adopts another account's singleton tokens | Auth/Security | **Closed** — fixed by #87826 / #109200 |
| [#113023](https://github.com/NousResearch/hermes-agent/issues/113023) | Hermes silently adopts Codex CLI / Claude Code logins | Auth/Security | **Closed** — refresh-token family isolation enforced |
| [#106705](https://github.com/NousResearch/hermes-agent/issues/106705) | Codex-Pool-Recovery replays old singleton refresh | Auth | **Closed** — rotation logic hardened |

**Key advances:** Desktop session resilience, Bot Screen UX, authentication security boundaries for multi-account Codex/Claude usage, and static analysis false-positive reduction.

---

## 4. Community Hot Topics

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#109573](https://github.com/NousResearch/hermes-agent/issues/109573) | Bug | 9 | `fleet_restart_pending` marker not discharged even after verified restart — blocks `hermes update` |
| [#115311](https://github.com/NousResearch/hermes-agent/issues/115311) | Bug | 4 | `hermes update` exits 1 with "Fleet restart incomplete" on Windows desktop (no gateway services) — recovery command fails |
| [#115639](https://github.com/NousResearch/hermes-agent/issues/115639) | RFC | 0 (new) | **Autonomous Self-Healing Updates** for 10k commits/day fleets — architectural discussion |
| [#115638](https://github.com/NousResearch/hermes-agent/issues/115638) | Bug | 0 (new) | Marker written without `inventory=` line if `hermes update` crashes mid-cleanup — undischargeable |
| [#108914](https://github.com/NousResearch/hermes-agent/pull/108914) | Feature | — | **Bot Screen**: per-bot Xfce desktop streamed into Hermes Desktop, take-over/hand-back for 2FA/login |

**Analysis:** The fleet restart marker issues (#109573, #115311, #115638) are the **highest-impact user-facing regression** — they break the basic update flow on Windows desktop installs. The RFC (#115639) signals the project is planning for **fully autonomous, high-throughput agent fleets**, implying upcoming work on self-healing, rolling updates, and fleet-level observability.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **P0 (Critical)** | [#112358](https://github.com/NousResearch/hermes-agent/issues/112358) MoA aggregator cache billing ~$147/49min | Closed | [#111786](https://github.com/NousResearch/hermes-agent/pull/111786) (open) |
| **P2 (High)** | [#109573](https://github.com/NousResearch/hermes-agent/issues/109573) `fleet_restart_pending` marker never discharged | Open | — |
| **P2 (High)** | [#115311](https://github.com/NousResearch/hermes-agent/issues/115311) `hermes update` fails on Windows desktop (no gateway) | Open | — |
| **P2 (High)** | [#115638](https://github.com/NousResearch/hermes-agent/issues/115638) Marker undischargeable if update crashes mid-cleanup | Open | — |
| **P2 (High)** | [#115635](https://github.com/NousResearch/hermes-agent/issues/115635) `agent.reconnect_attention_after` frozen at import | Open | [#115636](https://github.com/NousResearch/hermes-agent/pull/115636) |
| **P2 (High)** | [#115637](https://github.com/NousResearch/hermes-agent/issues/115637) Context-window probe falls back to 256k, compression never fires | Open | — |
| **P3 (Medium)** | [#115366](https://github.com/NousResearch/hermes-agent/issues/115366) Skills index stale (49.5h vs 26h limit) | Open | — |
| **P3 (Medium)** | [#100973](https://github.com/NousResearch/hermes-agent/issues/100973) Coding posture contradicts AGENTS.md on checkpoint commits | Open | — |
| **P3 (Medium)** | [#10438](https://github.com/NousResearch/hermes-agent/pull/10438) MCP stdio `cwd/workdir` config not honored | Open (old) | #10438 (open since Apr) |

**Note:** The fleet restart cluster (#109573, #115311, #115638) affects **all Windows desktop users** updating Hermes. The context-window probe bug (#115637) silently disables compression for smaller endpoints — a correctness issue.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Autonomous Self-Healing Updates** (RFC) | [#115639](https://github.com/NousResearch/hermes-agent/issues/115639) | Low (architectural, long-term) |
| **Bot Screen: per-bot Xfce desktop streamed to Desktop** | [#108914](https://github.com/NousResearch/hermes-agent/pull/108914) | High (active PR, related to #92524) |
| **Slack slash-command namespace prefix** | [#66163](https://github.com/NousResearch/hermes-agent/pull/66163) | Medium (old PR, needs decision) |
| **F# LSP (fsautocomplete) support** | [#97247](https://github.com/NousResearch/hermes-agent/pull/97247) | Medium (feature complete, awaiting review) |
| **Plugin Catalog: `hermes-peer` same-machine peer messaging** | [#115601](https://github.com/NousResearch/hermes-agent/pull/115601) | High (new, security scan passed) |
| **Configurable compression `max_tail_message_floor`** | [#60662](https://github.com/NousResearch/hermes-agent/pull/60662) | Medium (old, niche but low-risk) |
| **Webhook completion scripts** | [#80533](https://github.com/NousResearch/hermes-agent/pull/80533) | Medium (gateway extensibility) |

**Prediction:** Next patch (v0.21.4) will ship fleet restart fixes + auth isolation + desktop session fixes. Next minor (v0.22) will likely include Bot Screen, plugin catalog expansion, and Slack namespace fix.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Update flow broken on Windows** | #115311, #109573, #115638 | Cannot update without manual intervention; recovery command fails |
| **Auth token cross-contamination** | #109198, #113023, #106705 | Multi-account Codex/Claude users see wrong credentials adopted silently |
| **Desktop session data loss** | #111868 | Freeze during first turn loses entire session; stale pointers cause 404 loops |
| **MoA aggregator cost explosion** | #112358 | $147 in 49 min due to prompt cache misconfiguration |
| **Bot Screen takeover loses browser** | #110064 (fixed in #115633) | Human 2FA login caused bot to lose browser session |
| **Skills index degradation** | #115366 (bot-reported) | Docs/skills search 49h stale — automation failure |

**Positive signals:** Bot Screen fix (#115633) and auth isolation PRs (#87826, #109200) show maintainers responsive to security/session issues. The RFC (#115639) indicates ambitious long-term vision aligned with power users.

---

## 8. Backlog Watch — Stale Important Items

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#10438](https://github.com/NousResearch/hermes-agent/pull/10438) MCP stdio `cwd/workdir` | 5 months | MCP servers fail if working dir not honored; affects all stdio-based tools | Needs maintainer review/decision |
| [#66163](https://github.com/NousResearch/hermes-agent/pull/66163) Slack namespace prefix | 2 months | Critical for multi-app Slack workspaces; collision risk | Marked `needs-decision` |
| [#60662](https://github.com/NousResearch/hermes-agent/pull/60662) Configurable compression floor | 2.5 months | Power users with large contexts need tail control | Low priority, but simple |
| [#75312](https://github.com/NousResearch/hermes-agent/pull/75312) Slack mention detection (mrkdwn/attachments) | 1.5 months | Bots miss @mentions in non-Block-Kit messages | Security/moderation risk |
| [#97247](https://github.com/NousResearch/hermes-agent/pull/97247) F# LSP support | 3 weeks | Language support gap for F# developers | Ready, awaiting merge |
| [#80533](https://github.com/NousResearch/hermes-agent/pull/80533) Webhook completion scripts | 1.5 months | Gateway extensibility for async callbacks | Platform feature, needs review |

**Recommendation:** Prioritize #10438 (MCP regression) and #66163 (Slack collision) — both are integration blockers for users. The fleet restart cluster should be treated as a **release-blocking** bug group for v0.21.4.

---

*Digest generated from GitHub data as of 2026-09-19. All links point to NousResearch/hermes-agent.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-19

## 1. Today's Overview
PicoClaw shows steady maintenance activity with **4 pull requests updated** and **1 issue updated** in the last 24 hours, though no new releases were published. One significant PR (#1349) was merged, delivering expanded QQ Channel media support after six months in review. Three active PRs target UI performance, a new AI provider (opencode-go), and a major DeltaChat refactor. A single bug report (#3355) regarding Feishu configuration validation remains open and marked stale, indicating a possible documentation or schema gap. Overall, the project is in a healthy refinement phase—polishing existing channels, improving frontend responsiveness, and expanding provider compatibility.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | **Merged/Closed** | **QQ Channel: richer attachment support** – parsing/replying with emoji, voice, image, video, file; Markdown-first replies with fallback. | ✅ Enhances QQ Channel parity with other adapters; unblocks media-heavy workflows. |
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | Open (updated today) | **Fix laggy web UI** – optimizes chat-area rendering for large message volumes; tested on desktop & mobile Brave. | 🚀 Critical UX fix for power users / long-running sessions. |
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | Open (updated today) | **New provider: opencode-go** – adds `https://opencode.ai/zen/go/v1` with automatic model routing & `x-opencode-session` header. | 🔌 Expands LLM provider ecosystem; supports session-aware conversations. |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | Open (updated today) | **DeltaChat refactor** – −200 LOC, drops legacy features/password config, aligns with official relay list, renames invite fields. | 🧹 Reduces maintenance surface; modernizes DeltaChat integration. |

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [PR #1349](https://github.com/sipeed/picoclaw/pull/1349) | 6-month review cycle, now merged | **Media-rich QQ Channel bot** – users need full attachment parity (voice/video/file) for production bots. |
| [PR #3347](https://github.com/sipeed/picoclaw/pull/3347) | Recent update, author self-tested | **Responsive web UI** – lag with large histories is a top friction point for daily operators. |
| [Issue #3355](https://github.com/sipeed/picoclaw/issues/3355) | 2 comments, stale label | **Feishu config validation** – `app_id` rejected as unknown field; suggests schema/docs drift. |
| [PR #3371](https://github.com/sipeed/picoclaw/pull/3371) | New provider request | **Provider diversity** – community wants first-class opencode-go support without forks. |

## 5. Bugs & Stability
| Severity | Item | Description | Fix Status |
|----------|------|-------------|------------|
| **Medium** | [#3355](https://github.com/sipeed/picoclaw/issues/3355) | Feishu channel fails validation: `config.json contains unknown field(s): channel_list.feishu.app_id` despite correct config. | ❌ No fix PR yet; likely schema definition or config-example mismatch. |
| **Low** | [#3347](https://github.com/sipeed/picoclaw/pull/3347) | Web UI becomes unresponsive with large chat histories (client-side rendering bottleneck). | ✅ PR open with tested fix; awaits review/merge. |

*No crashes or regressions reported today.*

## 6. Feature Requests & Roadmap Signals
1. **Provider expansion** – PR #3371 (opencode-go) signals demand for pluggable, session-aware LLM backends beyond OpenAI/Anthropic.  
2. **Channel media parity** – Merged QQ work (#1349) sets precedent; expect similar requests for Feishu, Telegram, Discord.  
3. **Frontend performance** – PR #3347 indicates growing usage of built-in web UI for long sessions; virtualization / pagination likely next.  
4. **Config hygiene** – DeltaChat refactor (#3222) and Feishu bug (#3355) point toward a broader config-schema cleanup & validation pass.

**Prediction**: Next release will likely include the UI lag fix, opencode-go provider, and DeltaChat cleanup; Feishu schema fix may slip unless a contributor submits a quick patch.

## 7. User Feedback Summary
- **Pain points**:  
  - Feishu setup broken by config validation (blocks onboarding).  
  - Web UI unusable after ~hundreds of messages (forces external clients).  
  - QQ Channel previously couldn’t handle voice/video/files natively.  
- **Positive signals**:  
  - Contributor `iMilnb` built & tested launcher binary for PR #3347 – shows dogfooding.  
  - QQ PR merged after thorough review – maintainers responsive to high-quality channel work.  
- **Use cases**: Multi-channel bots (QQ + Feishu + DeltaChat), self-hosted web UI for team chat, LLM provider switching.

## 8. Backlog Watch
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) | 79 days | Large DeltaChat refactor (−200 LOC, security & config improvements); stalled despite recent update. | Request review from channel maintainers; split if too broad. |
| [Issue #3355](https://github.com/sipeed/picoclaw/issues/3355) | 18 days | Blocks Feishu users; simple schema fix but no maintainer triage. | Triage: update JSON schema / config example; label `good first issue`. |
| [PR #3371](https://github.com/sipeed/picoclaw/pull/3371) | 11 days | New provider; low risk, high value for opencode-go users. | Accelerate review – additive change, well-scoped. |
| [PR #3347](https://github.com/sipeed/picoclaw/pull/3347) | 23 days | High-impact UX fix; author is non-TS dev, may need guidance on test integration. | Pair with frontend contributor; add e2e test for long chat history. |

---

*Data sourced from GitHub API (issues/PRs updated 2026-09-18 → 2026-09-19). Links point to live GitHub items.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-19

## 1. Today's Overview
NanoClaw shows **high maintenance activity with zero closure velocity** — 7 issues and 4 PRs were updated in the last 24 hours, yet **no issues were closed and no PRs merged**. The backlog is dominated by **operational stability concerns**: unbounded transcript growth causing OOM crashes (#3716, #3735), container env propagation failures (#3714), and a watchdog that kills legitimate work (#3455). Three fresh bugs filed today (#3853–#3855) reveal gaps in CLI validation, generated-file handling, and documentation drift. The four open PRs address macOS status-bar labeling, Slack token rotation, and Codex transport configurability — all infrastructure hardening rather than new features. Project health signal: **active triage, but remediation lagging**.

## 2. Releases
**No new releases** published today. Latest tagged version remains **2.3.0** (per issue #3855). No changelog or migration notes to report.

## 3. Project Progress
**Zero merged/closed PRs in the last 24h.** All four updated PRs remain open:
- **#3420** — macOS status-bar: Swift/plist labels made slug-aware (stacked on #3408)  
- **#3852** — Slack skill: rotates manager token before direct-mode provisioning (fixes 12h expiry)  
- **#3851** — Codex provider: makes Responses transport configurable (WebSocket → HTTP/SSE fallback)  
- **#3850** — Codex HTTP/SSE transport fix (related to #3851, #3338, #2672)  

Progress is **infrastructure-only**: no user-facing features advanced today.

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Core Signal |
|------|------|----------|----|-------------|
| [#3735](https://github.com/nanocoai/nanoclaw/issues/3735) | Issue | 3 | 0 | **Transcript archives grow without bound** — no retention/rotation/cap; fleet impact reported |
| [#3716](https://github.com/nanocoai/nanoclaw/issues/3716) | Issue | 3 | 0 | **PreCompact writes full-history file every firing** — identified as **production OOM crash loop root cause** |
| [#3714](https://github.com/nanocoai/nanoclaw/issues/3714) | Issue | 1 | 0 | **Operator env overrides never reach session container** — documented vars (`CLAUDE_CODE_AUTO_COMPACT_*`, transcript rotation) silently ignored |
| [#3455](https://github.com/nanocoai/nanoclaw/issues/3455) | Issue | 1 | 0 | **Heartbeat not touched between claim and first SDK event** — watchdog kills busy turns, no self-recovery |

**Underlying need**: Operators running fleets at scale are hitting **resource exhaustion** (disk + memory) and **configuration paralysis** — core lifecycle hooks lack guardrails, and documented knobs are non-functional.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **Critical** | [#3716](https://github.com/nanocoai/nanoclaw/issues/3716) | PreCompact full-history rewrite → **OOM crash loop** in production | No |
| **Critical** | [#3735](https://github.com/nanocoai/nanoclaw/issues/3735) | `archiveTranscriptFile()` writes unbounded markdown archives — **disk exhaustion** over agent lifetime | No |
| **High** | [#3455](https://github.com/nanocoai/nanoclaw/issues/3455) | Claim-stuck watchdog kills **legitimately busy turns** — permanent reply block, no recovery | No |
| **High** | [#3714](https://github.com/nanocoai/nanoclaw/issues/3714) | Operator env overrides (auto-compact, rotation) **never forwarded to container** — config ineffective | No |
| **Medium** | [#3855](https://github.com/nanocoai/nanoclaw/issues/3855) | `groups config update --model` accepts **any string, no validation**, no discovery of valid models | No |
| **Medium** | [#3854](https://github.com/nanocoai/nanoclaw/issues/3854) | Edits to `groups/<folder>/CLAUDE.md` **silently discarded at spawn**; `groups restart` gives no warning | No |
| **Low** | [#3853](https://github.com/nanocoai/nanoclaw/issues/3853) | `CLAUDE.md` admin CLI table **missing 3 commands** (`policies`, `messaging-groups send`, `sessions history`) | No |

**No fix PRs linked** for any of the above. Critical memory/disk bugs (#3716, #3735) have been open since **early September** without remediation.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests today. Implicit signals from bugs:
- **Transcript lifecycle management** (retention, rotation, cap) — required to stop OOM/disk exhaustion
- **Container env passthrough** for all documented operator overrides — parity with documentation
- **CLI validation & discoverability** for model names and other config knobs
- **Generated-file protection** (warn/block edits to `CLAUDE.md`, or make it editable with merge strategy)

**Predicted next-version candidates**: Transcript rotation + retention flags; container env passthrough; `--model` validation with `ncl models list` or similar.

## 7. User Feedback Summary
**Pain points from active issues**:
| User | Pain Point | Impact |
|------|------------|--------|
| TO-maschenborn (#3735) | Fleet-wide **disk growth** from unbounded conversation archives | Operational cost, eventual failure |
| DawoudIO (#3716, #3455) | **OOM crash loops** from PreCompact; **watchdog false positives** blocking replies | Production downtime, no self-healing |
| nilsborg (#3714) | **Documented config knobs don’t work** — must patch source to set auto-compact/rotation | Wasted effort, trust erosion |
| bmultini (#3854, #3855) | **Silent data loss** editing `CLAUDE.md`; **typos in model name accepted silently** | Confusion, misconfiguration |
| javexed (#3853) | **Docs drift** — CLI reference missing 3 shipped commands | Onboarding friction |

**Sentiment**: Frustration with **silent failures** (discarded edits, ignored env, accepted invalid config) and **unbounded resource growth** in long-running fleets. No positive feedback captured in today’s data.

## 8. Backlog Watch — Stale High-Impact Items Needing Maintainer Attention
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#3716](https://github.com/nanocoai/nanoclaw/issues/3716) | 15 days | **Production OOM root cause** — full-history rewrite on every PreCompact | Open, 3 comments, no fix PR |
| [#3735](https://github.com/nanocoai/nanoclaw/issues/3735) | 12 days | **Unbounded disk growth** — fleet blocker, no retention policy | Open, 3 comments, no fix PR |
| [#3455](https://github.com/nanocoai/nanoclaw/issues/3455) | 27 days | **Watchdog kills valid work** — permanent reply loss, no recovery | Open, 1 comment, no fix PR |
| [#3714](https://github.com/nanocoai/nanoclaw/issues/3714) | 15 days | **Config surface area broken** — documented env vars non-functional | Open, 1 comment, no fix PR |
| [#3420](https://github.com/nanocoai/nanoclaw/pull/3420) | 30 days | macOS status-bar broken on current installs (label mismatch) | Open, stacked on #3408 |
| [#3852](https://github.com/nanocoai/nanoclaw/pull/3852) | 1 day | Slack token rotation — **unblocks skill for long-lived deployments** | Open, ready for review |

**Recommendation**: Prioritize #3716 and #3735 (critical stability), then #3455 and #3714 (reliability + config trust). The three fresh bugs (#3853–#3855) are low-effort fixes that would improve UX immediately.

---

*Data sourced from GitHub API (issues/PRs updated 2026-09-18 → 2026-09-19). All links point to nanocoai/nanoclaw repository.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-19

## 1. Today's Overview
IronClaw shows **low visible activity** in the last 24 hours: zero issues updated, zero PRs merged, and zero new releases. Two open PRs received updates—#8102 (created yesterday) addressing a Google OAuth activation regression for administrator-configured clients, and #7456 (open since August) tackling a large-scale refactor to make Reborn durable storage profile-agnostic. The project appears to be in a **maintenance/refinement phase** with focus on hardening extension integrations and foundational storage architecture.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress
**No PRs merged or closed today.** The two active PRs represent ongoing work:
- **#8102** – Fixes a critical path where Gmail/Google Calendar extensions failed to activate when the Google OAuth client was configured via the Web UI (administrator configuration) instead of environment variables. OAuth flow completed but activation failed with a provider-instance readiness error.  
- **#7456** (XL, medium risk) – Re-architects Reborn durable storage to be profile-agnostic: all profiles now root at `IRONCLAW_REBORN_HOME` with shared `state/`, `system/`, `workspaces/`, `runtime/`, `logs/`, `cache/`, `tmp/` namespaces, and a typed security envelope to preserve tenancy/workspace isolation across profile transitions.

## 4. Community Hot Topics
**No community discussion activity** in the last 24 hours (0 comments, 0 reactions on all items). The two updated PRs have no recorded discussion yet.  
- **#8102** – Likely to attract attention from operators deploying IronClaw with Web UI–configured Google OAuth; the bug blocks a common admin workflow.  
- **#7456** – Long-running (since August), multi-scope refactor; may draw review from core contributors concerned with storage migration safety and CI impact.

## 5. Bugs & Stability
| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **High** | Gmail/Google Calendar extension activation fails when Google OAuth client is configured via Web UI (administrator config) | Open, unmerged | **#8102** (open, created 2026-09-18) |
| **Medium** | Reborn durable storage tied to profile paths, risking isolation breaks on profile transition | Open, long-running | **#7456** (open, created 2026-08-10) |

No new bug reports or regressions filed today.

## 6. Feature Requests & Roadmap Signals
No new feature requests or issues opened today. The two active PRs signal near-term roadmap priorities:
1. **Extension reliability** – Ensuring administrator-configured OAuth providers work seamlessly (PR #8102).  
2. **Storage architecture modernization** – Profile-agnostic durable storage with security envelopes, enabling safer profile switching and multi-tenancy (PR #7456).  

Given the XL scope of #7456, the next release may include this foundational change once CI and migration paths are validated.

## 7. User Feedback Summary
**No direct user feedback** (issues, comments, reactions) captured in the last 24 hours. The absence of reports on #8102 suggests the Google OAuth activation bug may affect a subset of deployments (those using Web UI admin config) and has not yet surfaced widely. Operators using env-var–only OAuth config are unaffected.

## 8. Backlog Watch
| Item | Age | Concern | Link |
|------|-----|---------|------|
| **#7456** – `fix(reborn): make durable storage profile-agnostic` | 40 days (opened 2026-08-10) | Large, multi-scope refactor (storage, CI, docs, deps, sandbox) with medium risk; no recent merges, may need maintainer review push to avoid stalling. | [PR #7456](https://github.com/nearai/ironclaw/pull/7456) |
| **#8102** – `fix(extensions): resolve provider-instance readiness live, administrator configuration first` | 1 day (opened 2026-09-18) | High-impact bug for Google Workspace integrations; early stage, needs review and test coverage. | [PR #8102](https://github.com/nearai/ironclaw/pull/8102) |

---

**Health Indicator**: 🟡 **Moderate** — Low daily churn but two meaningful fixes in progress; #7456’s age warrants attention to prevent technical debt accumulation.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-19

## 1. Today's Overview
LobsterAI shows **high development velocity** with 21 pull requests updated in the last 24 hours (7 merged/closed, 14 open), indicating an active release cycle. The project is currently in a **stabilization and feature-refinement phase**—most PRs target the OpenClaw gateway, Cowork workspace, skills marketplace, and installer robustness. No new releases were published today, but a release branch `release/2026.9.18` was merged (#2715). Community issues remain dominated by **stale internal-network and login problems** from March 2026, while a fresh bug (#2654) highlights a data-persistence regression in user plugin hooks.

---

## 2. Releases
**No new releases published today.**  
The latest release activity is the merge of **PR #2715 (Release/2026.9.18)**, suggesting a 2026.9.18 build is imminent or already deployed internally.

---

## 3. Project Progress — Merged / Closed PRs (2026-09-18)

| PR | Area | Summary |
|----|------|---------|
| [#2715](https://github.com/netease-youdao/LobsterAI/pull/2715) | `renderer, docs, main, openclaw, cowork, artifacts` | **Release/2026.9.18** — version bump and changelog prep. |
| [#2718](https://github.com/netease-youdao/LobsterAI/pull/2718) | `renderer, docs, main, openclaw, im` | Fix Weixin/QQ QR-login channel routing. |
| [#2717](https://github.com/netease-youdao/LobsterAI/pull/2717) | `renderer, main, openclaw` | Scheduled-task Weixin delivery receipt. |
| [#2703](https://github.com/netease-youdao/LobsterAI/pull/2703) | `renderer, docs, main, cowork, artifacts` | Sub-agent session visibility improvements. |
| [#2702](https://github.com/netease-youdao/LobsterAI/pull/2702) | `renderer, docs, main, openclaw, im` | OpenClaw workspace setup recovery. |
| [#2701](https://github.com/netease-youdao/LobsterAI/pull/2701) | `docs, main, openclaw` | Harden startup recovery & Feishu secret routing (targets `release/2026.9.18`). |
| [#2696](https://github.com/netease-youdao/LobsterAI/pull/2696) | `renderer, main, cowork, artifacts` | Codex-style workspace: review, inline question dock, Tasks panel. |

**Key takeaway:** The merged PRs cluster around **OpenClaw gateway stability**, **Cowork workspace UX**, and **IM login flows**—all critical for the upcoming 2026.9.18 release.

---

## 4. Community Hot Topics

| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#2654](https://github.com/netease-youdao/LobsterAI/issues/2654) | Issue | 2 comments, updated 2026-09-18 | **Data loss**: `hooks` field in user plugins not persisted across gateway restarts. |
| [#2719](https://github.com/netease-youdao/LobsterAI/pull/2719) | PR | Open, 0 comments | **Upgrade resilience**: Repair leftover config from older builds instead of failing every launch. |
| [#2716](https://github.com/netease-youdao/LobsterAI/pull/2716) | PR | Open, 0 comments | **Model routing**: Add “Auto” (per-turn) and “Max” (strongest model) modes to Cowork. |
| [#2710](https://github.com/netease-youdao/LobsterAI/pull/2710) | PR | Open, 0 comments | **MCP granularity**: Pass per-server `toolFilter` & `parallelToolCalls` to OpenClaw. |
| [#1025](https://github.com/netease-youdao/LobsterAI/issues/1025) | Issue (stale) | 1 comment, updated 2026-09-18 | **Build blocker**: External devs stuck 5 min on unreachable internal npm registry (`npm.nie.netease.com`). |

**Analysis:** The only *fresh* community pain point is **#2654 (plugin hooks persistence)**. The remaining hot items are **internal/stale** (internal registry, employee login, Xunfei token limit, main.ts refactor)—suggesting external contributors face onboarding friction but core team focus is on the 9.18 release.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue / PR | Description | Fix Status |
|----------|------------|-------------|------------|
| **High** | [#2654](https://github.com/netease-youdao/LobsterAI/issues/2654) | `hooks` config lost on gateway restart (data loss). | **Open** — fix requires DB schema + sync changes. |
| **High** | [#2719](https://github.com/netease-youdao/LobsterAI/pull/2719) | Startup fails on *every* launch after upgrade/uninstall-reinstall (Windows `%APPDATA%` leftovers). | **Open PR** — repairs three root causes automatically. |
| **Medium** | [#2709](https://github.com/netease-youdao/LobsterAI/pull/2709) | Windows private SQLite staging dirs fail under security software / Constrained Language Mode. | **Open PR** — fallback path added. |
| **Medium** | [#2707](https://github.com/netease-youdao/LobsterAI/pull/2707) | Gateway restart budget reset too early → infinite crash-loop. | **Open PR** — budget refill only after stability window. |
| **Medium** | [#2705](https://github.com/netease-youdao/LobsterAI/pull/2705) | Data-migration backup/restore hits `EBUSY` on Chromium `Partitions` dir. | **Open PR** — skip partitions in backup. |
| **Low** | [#2706](https://github.com/netease-youdao/LobsterAI/pull/2706) | Windows installer Skills backup fails on PowerShell 5.1 (PSCustomObject). | **Open PR** — build records as PSCustomObject. |
| **Low** | [#2711](https://github.com/netease-youdao/LobsterAI/pull/2711) | Invalid YAML in `SKILL.md` frontmatter drops `version` → marketplace shows false update. | **Open PR** — keep version on parse failure. |
| **Low** | [#2714](https://github.com/netease-youdao/LobsterAI/pull/2714) | Paid media generation triggered without explicit user intent. | **Open PR** — check user intent before generation. |

**Note:** All high/medium bugs have **open fix PRs** authored by `alison-xx`, indicating rapid internal triage.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Auto / Max model modes in Cowork** | [#2716](https://github.com/netease-youdao/LobsterAI/pull/2716) (PR) | **High** — PR open, aligned with Codex-style UX push. |
| **Per-server MCP toolFilter & parallel calls** | [#2710](https://github.com/netease-youdao/LobsterAI/pull/2710) (PR) | **High** — extends existing OpenClaw capability to LobsterAI config. |
| **Marketplace tag pill result counts** | [#2713](https://github.com/netease-youdao/LobsterAI/pull/2713) (PR) | **Medium** — UI polish, low risk. |
| **Confirm before replacing installed skill on re-import** | [#2712](https://github.com/netease-youdao/LobsterAI/pull/2712) (PR) | **Medium** — prevents duplicate skills, UX improvement. |
| **main.ts refactor (modular architecture)** | [#1024](https://github.com/netease-youdao/LobsterAI/issues/1024) (stale issue) | **Low** — large refactor, not urgent for 9.18. |
| **Xunfei engine token-limit customization** | [#1023](https://github.com/netease-youdao/LobsterAI/issues/1023) (stale issue) | **Low** — vendor-specific, needs API support. |

**Prediction:** The next release (post-2026.9.18) will likely ship **Cowork model routing (#2716)**, **MCP tool filtering (#2710)**, and the **skills marketplace UX fixes (#2712, #2713)**.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Internal npm registry blocks external builds** | [#1015](https://github.com/netease-youdao/LobsterAI/issues/1015), [#1025](https://github.com/netease-youdao/LobsterAI/issues/1025) | External contributors cannot build; 5-min timeout with no feedback. |
| **Employee login (c.youdao.com) fails to return auth token to client** | [#1016](https://github.com/netease-youdao/LobsterAI/issues/1016) | NetEase staff cannot use the app; deep-link callback broken. |
| **Plugin hooks lost on restart** | [#2654](https://github.com/netease-youdao/LobsterAI/issues/2654) | Power users lose custom hook configs every session. |
| **Upgrade/reinstall breaks startup on Windows** | [#2719](https://github.com/netease-youdao/LobsterAI/pull/2719) | App unusable until manual data cleanup. |
| **Xunfei API token limit (97k) exceeds engine cap (90k)** | [#1023](https://github.com/netease-youdao/LobsterAI/issues/1023) | LLM requests fail for large contexts. |

**Satisfaction signal:** No positive feedback (👍) on any issue/PR in the last 24h—community engagement is low, but internal team is shipping fixes rapidly.

---

## 8. Backlog Watch — Stale / Needs Maintainer Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#1015](https://github.com/netease-youdao/LobsterAI/issues/1015) | 6 months | Blocks **all external contributors**; `optional: true` not honored by install script. | Make `ensure-openclaw-plugins.cjs` skip unreachable registry or provide public mirror. |
| [#1016](https://github.com/netease-youdao/LobsterAI/issues/1016) | 6 months | **Employee onboarding broken**—core user segment cannot log in. | Fix deep-link token handoff (`lobsterai://` callback). |
| [#1024](https://github.com/netease-youdao/LobsterAI/issues/1024) | 6 months | `main.ts` monolith hampers maintainability; contributor proposes modular structure. | Schedule incremental refactor; accept PRs for `core/`, `services/`, `ipc/` split. |
| [#1023](https://github.com/netease-youdao/LobsterAI/issues/1023) | 6 months | Xunfei (iFlytek) integration unusable for large contexts. | Expose `max_tokens` / engine params in model config UI. |
| [#2654](https://github.com/netease-youdao/LobsterAI/issues/2654) | 8 days | **Active data-loss bug**—hooks not persisted. | Prioritize schema migration + `getUserPlugins`/`syncToDisk` fix. |

---

## Bottom Line
LobsterAI is **shipping fast** (21 PRs/day) with a clear focus on **OpenClaw gateway hardening**, **Cowork workspace parity with Codex**, and **skills marketplace polish** for the 2026.9.18 release. The **external contributor experience remains poor** due to stale internal-network dependencies (#1015, #1025) and a broken employee login flow (#1016). The most urgent user-facing bug is **plugin hooks persistence loss (#2654)**—a fix should land before the next public build.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-09-19

## 1. Today's Overview
Moltis saw minimal public activity in the last 24 hours: zero issue updates, zero merged/closed PRs, and no new releases. The sole movement is **PR #1276**, an open contribution from **Kaboka22** that registers Groq as a first-class OpenAI-compatible provider and addresses strict-schema handling for empty-required fields. With no merged work or community discussion threads today, the project is in a quiet maintenance phase; the open PR represents the only near-term signal of forward progress.

## 2. Releases
**No new releases** published today. The latest tagged version remains whatever was shipped prior to 2026-09-19.

## 3. Project Progress
| PR | Status | Summary |
|----|--------|---------|
| [#1276](https://github.com/moltis-org/moltis/pull/1276) | **OPEN** | Adds Groq to `OPENAI_COMPAT_PROVIDERS` so Groq chat models route through the OpenAI-compatible path instead of falling back to the generic GenAI adapter (which only registers a single model, drops tool schemas, and mangles model-id routing). Also fixes strict-schema validation when `required: []` is empty. |

*No PRs were merged or closed today.*

## 4. Community Hot Topics
Only one item received updates today:

| Item | Type | Author | Updated | Reactions | Comments |
|------|------|--------|---------|-----------|----------|
| [#1276](https://github.com/moltis-org/moltis/pull/1276) | PR | Kaboka22 | 2026-09-19 | 👍 0 | 0 |

**Analysis:** The PR targets a concrete interoperability gap—Groq users currently lose tool-calling and multi-model support. Zero comments/reactions so far suggest either low visibility or that the change is seen as a straightforward, non-controversial fix. Maintainer review will determine whether this becomes the next merged improvement.

## 5. Bugs & Stability
**No new bug reports, crash logs, or regression issues** were filed or updated in the last 24 hours. The fix embedded in PR #1276 (empty-required strict schemas) addresses a latent schema-validation edge case, but it has not yet been merged or released.

## 6. Feature Requests & Roadmap Signals
The sole active PR signals two implicit roadmap items:
1. **Broader provider coverage** – Treating Groq as a first-class OpenAI-compatible provider suggests the project aims to expand its “OpenAI-compatible” roster beyond the current list.
2. **Schema robustness** – The strict-schema fix hints at ongoing work to harden function/tool calling against edge-case OpenAPI/JSON Schema inputs.

If PR #1276 merges cleanly, expect the next release to include Groq support and the schema fix. No other feature requests surfaced today.

## 7. User Feedback Summary
No user-facing issues, discussions, or support threads were updated today. The absence of feedback channels activity (issues, discussions, PR comments) makes it impossible to gauge current satisfaction or pain points from the last 24 hours.

## 8. Backlog Watch
With **zero issues updated** and only **one open PR**, there are no stale or long-unanswered items visible in today’s snapshot. The backlog watch is effectively empty for this period. Maintainers should prioritize reviewing **PR #1276** to unblock the Groq integration and schema fix.

---

*Data source: GitHub REST API snapshots for moltis-org/moltis covering 2026-09-18T00:00:00Z → 2026-09-19T23:59:59Z.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-19

---

## 1. Today's Overview

CoPaw (QwenPaw) shows **high development velocity** with 40 PRs and 16 issues updated in the last 24 hours. The project is in active stabilization around v2.2.x, with no new release today but significant bug-fix momentum: 12 PRs merged/closed and 4 issues closed. Critical bugs are being addressed rapidly — including context eviction data loss, tool-output truncation bypasses, prompt-injection vulnerabilities, and provider integration regressions. The community is actively discussing the upcoming **QwenPaw Hub (multi-tenant edition)** slated for v2.2.0, signaling a strategic shift from personal assistant to team/organization deployment.

---

## 2. Releases

**No new releases published today.**  
Current released version: **v2.2.1** (desktop/Tauri build, backend rebuilt from tag `v2.2.1`).  
Next milestone: **v2.2.0** with QwenPaw Hub (multi-tenant) — under active community discussion (#7318).

---

## 3. Project Progress — Merged/Closed PRs & Issues Today

| PR / Issue | Type | Summary | Link |
|------------|------|---------|------|
| #7838 | Issue (Closed) | `recall_history_python` silently not registered when sandbox unavailable (kernel < 5.13, no Landlock) | [#7838](https://github.com/agentscope-ai/QwenPaw/issues/7838) |
| #7837 | Issue (Closed) | User rows in `history.db` carry no headline — scroll eviction index must call model to label user-only span | [#7837](https://github.com/agentscope-ai/QwenPaw/issues/7837) |
| #7812 | Issue (Closed) | Slash commands after desktop startup act on fallback session (`/compact` reports empty memory) | [#7812](https://github.com/agentscope-ai/QwenPaw/issues/7812) |
| #7570 | Issue (Closed) | Feishu streaming card: auto-collapse thinking process after output completes | [#7570](https://github.com/agentscope-ai/QwenPaw/issues/7570) |
| #7223 | PR (Closed) | Refresh DeepSeek catalog per vendor retirement (remove retired models, add v4 family) | [#7223](https://github.com/agentscope-ai/QwenPaw/pull/7223) |

**Other merged/closed PRs (12 total):** Several first-time contributor fixes for Windows test stability, channel lazy-loading, tool-result emission deduplication, console stream recovery, and driver reload concurrency — see PR list for full details.

---

## 4. Community Hot Topics — Most Active Discussions

| Item | Type | Comments | 👍 | Summary | Link |
|------|------|----------|-----|---------|------|
| **#7318** | Issue | 30 | 4 | **QwenPaw Hub (multi-tenant) coming in 2.2.0 — community input on priorities** (multi-user access, admin-managed skills, team workspaces, SSO, audit logs) | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) |
| **#7853** | Issue | 4 | 0 | **Critical: `ToolResultPruner` skips `type="data"` blocks → `view_image` base64 accumulates unbounded, blows model context** | [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) |
| **#7859** | Issue | 4 | 0 | **Security: Persistent prompt injection in tool-result system-reminders instructing agent to delete ALL skills** | [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) |
| **#7836** | Issue | 2 | 1 | **Scroll eviction drops user turn inside tool-heavy span — live window loses request while history.db keeps it** | [#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836) |
| **#7733** | Issue | 2 | 0 | **Feature: Agent-autonomous context management — smooth handover across context eviction (warning, agent say in when compaction happens)** | [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) |

**Underlying needs:**  
- **Team/organization readiness** (Hub) is the top strategic ask.  
- **Context-window reliability** is the top technical pain point — users hit hard limits from unbounded media accumulation and aggressive eviction losing user intent.  
- **Security hardening** against prompt injection is now a recognized requirement (skill deletion injection).

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | `ToolResultPruner` skips `type="data"` → `view_image` base64 never pruned → unbounded context growth → every request exceeds model window | ❌ No PR yet |
| **Critical** | [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) | Prompt injection in system-reminders persists across 20+ turns/sessions, instructs agent to **delete all skills** | ✅ [#7864](https://github.com/agentscope-ai/QwenPaw/pull/7864) (open) |
| **High** | [#7876](https://github.com/agentscope-ai/QwenPaw/issues/7876) | DeepSeek rejects OpenAI `input_audio` (422), audio-fallback classifier never fires — one `send_file_to_user` WAV kills conversation permanently | ❌ No PR yet |
| **High** | [#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836) | Scroll eviction drops **user turn** bracketing tool-heavy span — live context loses request, only history.db retains it | ✅ [#7872](https://github.com/agentscope-ai/QwenPaw/pull/7872) (open) |
| **High** | [#7866](https://github.com/agentscope-ai/QwenPaw/issues/7866) | File-area tab shows pre-edit content after agent rewrites file (session card shows new content) — UI/data desync | ✅ [#7867](https://github.com/agentscope-ai/QwenPaw/pull/7867) (open) |
| **Medium** | [#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856) | `qwenpaw-pet 0.1.1` breaks tool approvals by dropping `actor` argument (plugin compat regression) | ❌ No PR yet |
| **Medium** | [#7877](https://github.com/agentscope-ai/QwenPaw/issues/7877) | Session working-dir panel: browse viewport ~3 lines, "Recent Projects" always empty/no write entry, "Apply" stays disabled after selection | ❌ No PR yet |
| **Medium** | [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) | OpenCode Go models return `MissingSessionID` (400) — provider integration broken | ✅ [#7869](https://github.com/agentscope-ai/QwenPaw/pull/7869) (open) |
| **Low** | [#7857](https://github.com/agentscope-ai/QwenPaw/issues/7857) | ACP shutdown fallback skips session cleanup, leaks event loop | ❌ No PR yet |
| **Low** | [#7858](https://github.com/agentscope-ai/QwenPaw/issues/7858) | Test unawaited coroutine warnings from mock scheduling — obscures real async defects | ❌ No PR yet |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **QwenPaw Hub (multi-tenant)**: multi-user access, admin-managed skills, team workspaces, SSO, audit logs | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) (30 comments, community-driven) | **High** — explicitly targeted for v2.2.0 |
| **Agent-autonomous context management**: agent gets warning/say in compaction timing | [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | **Medium** — design discussion, no impl PR yet |
| **Creator `create-video` control plane**: high-level "make a video" action without exposing internal project/element IDs | [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874), [#7875](https://github.com/agentscope-ai/QwenPaw/pull/7875) | **High** — PRs open with spec + impl |
| **Advanced recall sandbox limitation notice**: model-facing explanation when `recall_history_python` unavailable | [#7873](https://github.com/agentscope-ai/QwenPaw/pull/7873) | **High** — PR open, addresses #7838 |
| **Prompt caching for OpenAI Responses (GPT-5.6+)** | [#6668](https://github.com/agentscope-ai/QwenPaw/pull/6668) | **Medium** — long-open PR, opt-in feature |
| **Feishu thinking-process auto-collapse** | [#7570](https://github.com/agentscope-ai/QwenPaw/issues/7570) (closed) | **Done** — implemented & verified locally |

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Context window exhaustion from images** | #7853: "`view_image` base64 never pruned — accumulates until every request exceeds model window" | Blocks long-running visual tasks; silent failure |
| **Prompt injection deleting skills** | #7859: "Injected instruction persists 20+ turns across sessions — tells agent to permanently delete ALL skills" | **Security/correctness** — agent self-sabotage |
| **User intent lost during compaction** | #7836: "Scroll eviction drops user turn inside tool-heavy span — live window loses request" | User asks follow-up, agent has no context of original ask |
| **Provider integration broken (OpenCode Go)** | #7599: "`MissingSessionID` 400 on all OpenCode Go models" | Entire provider unusable |
| **Audio breaks DeepSeek conversations** | #7876: "One `send_file_to_user` WAV kills conversation permanently — 422 on re-read" | Media handling regression |
| **UI desync: file tabs show stale content** | #7866: "File-area tab shows pre-edit content; session card shows new content" | Confusion, trust loss in UI |
| **Working-dir panel unusable** | #7877: "Browse viewport ~3 lines, Recent Projects empty, Apply disabled" | Core workflow (project setup) broken |
| **Desktop slash commands hit wrong session on startup** | #7812 (closed): "Right after start, slash command acts on fallback session" | Fixed but indicates session-init race |

**Positive signals:**  
- Feishu streaming cards working well (#7570), thinking-collapse implemented.  
- First-time contributors actively landing fixes (7+ PRs from new contributors in last 24h).  
- Community engaged on Hub roadmap (#7318).

---

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#6668](https://github.com/agentscope-ai/QwenPaw/pull/6668) | 46 days | **Prompt caching for GPT-5.6+ Responses API** — cost/latency optimization for heavy users; PR open, needs review | Open, stale |
| [#6381](https://github.com/agentscope-ai/QwenPaw/pull/6381) | 58 days | **Driver capability caching** — avoids blocking on stale MCP caps; perf win for all users | Open, stale |
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) | 29 days | **Prevent injected context from persisting as user history** — security/hygiene; marked `ready-for-human-review` | Open, awaiting review |
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 24 days | **Hub roadmap** — 30 comments, strategic direction; needs maintainer synthesis into spec/milestones | Open, active discussion |
| [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | 1 day | **Unbounded image context growth** — critical regression, no PR yet; should be P0 | Open, no fix |
| [#7876](https://github.com/agentscope-ai/QwenPaw/issues/7876) | 0 days | **Audio breaks DeepSeek permanently** — data-loss severity, no PR yet | Open, no fix |

---

## Health Indicators

| Metric | Signal |
|--------|--------|
| **Issue throughput** | 4 closed / 12 open today — net backlog growing slightly |
| **PR throughput** | 12 merged/closed / 28 open — healthy merge rate, but review queue building |
| **First-time contributors** | 7+ PRs from new contributors in 24h — **strong community onboarding** |
| **Critical bug response** | 2/3 critical bugs have open fix PRs within hours — **fast triage** |
| **Release cadence** | No release today; v2.2.1 current; v2.2.0 (Hub) in discussion — **pre-release stabilization phase** |

---

**Bottom line:** CoPaw is in a **high-velocity stabilization sprint** for v2.2.x, simultaneously hardening context/media handling, fixing security regressions, and laying groundwork for the multi-tenant Hub pivot. The next 1–2 weeks will determine whether critical context-window bugs (#7853, #7836, #7876) are resolved before Hub work accelerates. Maintainer review bandwidth on stale PRs (#6668, #6381, #7211) is the current bottleneck.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-09-19

## 1. Today's Overview
ZeptoClaw saw minimal activity in the last 24 hours: zero issue updates, no new releases, and a single merged pull request. The repository remains in a quiet maintenance phase with no community-reported regressions or feature debates surfacing today. The sole merged PR (#703) addresses a niche but important compatibility gap for reasoning models on OpenAI-compatible endpoints, suggesting the project is incrementally improving provider interoperability. Overall project health appears stable but low-velocity; no blockers or urgent stability signals are present.

## 2. Releases
**None** — No new versions published today.

## 3. Project Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#703](https://github.com/qhkm/zeptoclaw/pull/703) | **Merged** | **feat(providers): read reasoning-model replies on OpenAI-compatible endpoints** — Fixes parsing of `reasoning_content` when `content` is `null` (common when token budget expires before final answer). Previously `unwrap_or_default()` produced empty strings, dropping the reasoning trace. | Improves fidelity for reasoning-capable models (e.g., DeepSeek-R1, Qwen-QwQ) served via OpenAI-compatible APIs. No breaking changes; additive parsing logic. |

**Net advancement**: Provider layer now correctly surfaces chain-of-thought output from reasoning models on third-party OpenAI-compatible endpoints, closing a data-loss edge case.

## 4. Community Hot Topics
**No active discussions today.**  
- 0 issues updated, 0 comments recorded, 0 reactions on any item.  
- The merged PR received no review comments or 👍 reactions, indicating either trivial review scope or low community engagement at this moment.

*Underlying need*: The PR targets a specific interoperability pain point — users running reasoning models behind OpenAI-compatible proxies (Ollama, vLLM, LocalAI, etc.) were losing the `reasoning_content` field. This suggests a subset of power users depend on ZeptoClaw for local/private model orchestration.

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.**  
- Zero new issues filed.  
- Zero regression labels on merged PR.  
- PR #703 is a correctness fix, not a regression introduction.

*Stability outlook*: Clean.

## 6. Feature Requests & Roadmap Signals
**No new feature requests today.**  
The merged PR (#703) originated as a maintenance fix rather than a user-facing feature request. However, it signals an implicit roadmap direction: **deepening support for reasoning-model ecosystems** (exposing `reasoning_content`, handling `null` `content` gracefully). If this pattern continues, expect future work on:
- Streaming `reasoning_content` chunks
- Token-usage accounting for reasoning vs. answer tokens
- Provider-specific reasoning toggles (e.g., `reasoning_effort`)

## 7. User Feedback Summary
**No direct user feedback captured in the last 24h.**  
- No issue comments, PR reviews, or discussion threads.  
- The silent merge of #703 implies either: (a) the change was uncontroversial and tested by maintainers, or (b) the affected user base is small/quiet.  
- *Pain point inferred from code*: Developers integrating reasoning models via OpenAI-compatible endpoints lose visibility into model thinking when `content` is null — a silent data loss.

## 8. Backlog Watch
**No stale high-priority items surfaced today.**  
Given zero issue activity, there are no long-unanswered issues or PRs requiring maintainer triage in this window. For broader backlog health, maintainers should periodically audit:
- Open PRs > 30 days old (none visible in today's slice)
- Issues tagged `help wanted` or `good first issue` with no response > 14 days

---

*Digest generated from GitHub API data for 2026-09-19. Links point to live GitHub objects.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-19

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 50 PRs and 9 issues updated in the last 24 hours. The project is actively addressing **provider transport reliability** (Anthropic cache TTL, stream recovery), **security hardening** (shell command classification, SOP failure reasons, WhatsApp passkey), and **agent-loop observability** (delegate sub-agent progress, session identity forwarding). Three critical bugs were closed today (#10853, #10759, #10667), while two P1/P2 security issues (#10966, #10952) have active fix PRs. No new release was cut, suggesting changes are accumulating for a future batch.

---

## 2. Releases

**No new releases today.** The `master` branch continues to accumulate fixes and features across providers, runtime, channels, and security domains.

---

## 3. Project Progress — Merged/Closed Today (8 PRs, 3 Issues)

| Item | Type | Summary | Domain |
|------|------|---------|--------|
| [#10853](https://github.com/zeroclaw-labs/zeroclaw/issues/10853) | Issue (Closed) | OpenCode session header follow-ups from #10604 — malformed operator-pinned header handling, fallback suppression | Security, Provider |
| [#10759](https://github.com/zeroclaw-labs/zeroclaw/issues/10759) | Issue (Closed) | SOP RPC: include retained `failure_reason` in run detail response | Security, Runtime |
| [#10667](https://github.com/zeroclaw-labs/zeroclaw/issues/10667) | Issue (Closed) | ZeroCode duplicate streamed response when prompt completion precedes `TurnComplete` | ZeroCode, ACP |
| *8 PRs merged/closed* | PRs | Includes dependency updates, test fixes, and smaller runtime/provider corrections (details in PR list) | Various |

**Signal:** Security follow-ups and ZeroCode stability fixes are being closed rapidly. The SOP failure-reason fix (#10759) closes a gap from #9930.

---

## 4. Community Hot Topics — Most Active Discussions

| Item | Comments | Core Need |
|------|----------|-----------|
| [#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531) | 4 | **Delegate observability** — Parents need real-time visibility into sub-agent progress (tool receipts, partial output), not just final text. Blocking for complex agent workflows. |
| [#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663) | 3 | **Anthropic cache TTL control** — Default 5-min TTL makes caching useless for coarse cadence; users need configurable 1-hour TTL or disable. |
| [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) | 1 (new today) | **Git `--attr-source` bypass** — S0 severity: a read-like flag value can hide a mutating subcommand from sandbox approval. Active exploitation risk. |
| [#10952](https://github.com/zeroclaw-labs/zeroclaw/issues/10952) | 2 | **Signed reasoning corruption** — Seam sanitizers rewrite assistant tool-call envelopes, breaking Anthropic's signed thinking replay. Fix PR [#10953](https://github.com/zeroclaw-labs/zeroclaw/pull/10953) open. |
| [#10963](https://github.com/zeroclaw-labs/zeroclaw/issues/10963) | 1 | **Session identity forwarding** — Delegate sub-agents lose parent session context (auth, prefs, policy), breaking multi-agent continuity. |

**Underlying theme:** Multi-agent delegation, provider caching economics, and sandbox security are the top architectural pain points.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **S0 (Security/Data Loss)** | [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966): Git `--attr-source` hides mutating subcommand | Open, **Accepted**, needs fix | None yet |
| **High** | [#10952](https://github.com/zeroclaw-labs/zeroclaw/issues/10952): Seam sanitizers corrupt signed reasoning (Anthropic rejects replay) | **In Progress** | [#10953](https://github.com/zeroclaw-labs/zeroclaw/pull/10953) |
| **High** | [#10803](https://github.com/zeroclaw-labs/zeroclaw/pull/10803): Single-candidate stream recovery lacks retry budget & overload classification | Open PR, stacked on #8966 | PR open |
| **High** | [#10931](https://github.com/zeroclaw-labs/zeroclaw/pull/10931): Windows scheduled task stdout/stderr unbounded (log growth) | Open PR | PR open |
| **High** | [#10084](https://github.com/zeroclaw-labs/zeroclaw/pull/10084): WhatsApp WebAuthn passkey gate blocks device linking | Open PR (since Aug 18) | PR open |
| **Medium** | [#10667](https://github.com/zeroclaw-labs/zeroclaw/issues/10667): ZeroCode duplicate render on stream completion | **Closed** | Fixed |
| **Medium** | [#10958](https://github.com/zeroclaw-labs/zeroclaw/pull/10958): Interruption scope key boundary collisions | Open PR | PR open |
| **Medium** | [#10965](https://github.com/zeroclaw-labs/zeroclaw/pull/10965): Heap-pin regression overflows test stack | Open PR | PR open |

**Note:** Two S0/High security bugs (#10966, #10952) have no merged fix yet — maintainer review urgency is warranted.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for Next Release |
|---------|--------|----------------------------|
| **Configurable Anthropic prompt-cache TTL** (1-hr, disable) | [#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663), [#10724](https://github.com/zeroclaw-labs/zeroclaw/pull/10724), [#10960](https://github.com/zeroclaw-labs/zeroclaw/pull/10960) | **Very High** — 3 PRs, env var `ZEROCLAW_CACHE_TTL` already implemented in #10960 |
| **Delegate sub-agent progress streaming** (tool receipts, partial output) | [#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531) | **High** — Core agent-loop gap, 4 comments, P2 |
| **Forward session identity to delegates** | [#10963](https://github.com/zeroclaw-labs/zeroclaw/issues/10963) | **High** — Security/architecture, needs maintainer review |
| **Gateway `/ws/chat` tool result payloads** | [#10962](https://github.com/zeroclaw-labs/zeroclaw/issues/10962) | **Medium** — Client observability need, needs repro |
| **Skills install from pinned well-known indexes** | [#10944](https://github.com/zeroclaw-labs/zeroclaw/pull/10944) | **High** — XL PR, distinguished contributor, security review |
| **Shell encoding detection (UTF-8, chardetng fallback)** | [#10955](https://github.com/zeroclaw-labs/zeroclaw/pull/10955), [#10956](https://github.com/zeroclaw-labs/zeroclaw/pull/10956), [#10954](https://github.com/zeroclaw-labs/zeroclaw/pull/10954) | **High** — 3 related PRs from same author, cross-platform |
| **Telegram `multi_message` streaming mode** | [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) | **Low** — Stalled since Jun 30, needs author action |

**Prediction:** Anthropic cache TTL, shell encoding fixes, and delegate observability are the strongest candidates for the next minor release.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **No visibility into delegated work** | #10531: "parent agent has no visibility until sub-agent finishes" | Blocks complex multi-agent workflows; forces polling or blind delegation |
| **Anthropic cache economics broken** | #10663: "5-min TTL makes caching useless for coarse cadence; 1.25x write premium wasted" | Direct cost impact for users with >5-min request intervals |
| **Signed reasoning broken after tool calls** | #10952: "Anthropic rejects replayed thinking" | Breaks thinking-mode workflows; regression from #10894 |
| **Git sandbox bypass via `--attr-source`** | #10966: "S0 - data loss / security risk" | Critical sandbox escape vector; affects all Git tool users |
| **Windows service logs unbounded** | #10931: "bound Windows task stdout and stderr logs" | Operational risk for long-running Windows daemons |
| **ZeroCode transcript duplication** | #10667: "renders completed response twice" | UX degradation; closed but indicates stream-handling fragility |
| **Shell encoding chaos cross-platform** | #10955, #10956, #10954: 3 PRs for detection/defaults/UTF-8 | Frequent corruption of non-UTF8 output; Windows PowerShell especially |

**Satisfaction signals:** Users are filing detailed, reproducible bugs with code pointers — indicates deep engagement. Security issues get immediate "Accepted" labels.

---

## 8. Backlog Watch — Stale Items Needing Maintainer Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) | **81 days** | Telegram multi-message streaming parity with Discord/Matrix; **needs-author-action** but author inactive | Open, XL |
| [#10084](https://github.com/zeroclaw-labs/zeroclaw/pull/10084) | **32 days** | WhatsApp WebAuthn passkey — blocks device linking for rollout accounts; **high security**, XL | Open |
| [#10724](https://github.com/zeroclaw-labs/zeroclaw/pull/10724) | **10 days** | Configurable Anthropic `cache_ttl` — **distinguished contributor**, high risk, L size; supersedes #10960? | Open, needs review |
| [#10801](https://github.com/zeroclaw-labs/zeroclaw/pull/10801) | **7 days** | ZeroCode notification-lag reload cancels running turns — **high risk, XL**, needs maintainer review | Open |
| [#10944](https://github.com/zeroclaw-labs/zeroclaw/pull/10944) | **2 days** | Skills install from pinned well-known indexes — **XL, security, distinguished contributor** | Open, needs review |
| [#10938](https://github.com/zeroclaw-labs/zeroclaw/pull/10938) | **2 days** | Explicit tool attachments vs. scanning — **XL, touches all providers/tools**, stacked on #10903 | Open |

**Action needed:** #10084 (WhatsApp) and #10724 (cache TTL) are the oldest high-impact PRs awaiting review. #8561 may need a new champion.

---

## Health Indicators

| Metric | Signal |
|--------|--------|
| **Issue/PR velocity** | 🟢 Very high (59 updates/24h) |
| **Security responsiveness** | 🟢 S0 issue labeled "Accepted" same day |
| **Review throughput** | 🟡 8 PRs merged but 42 open; several XL PRs pending >1 week |
| **Regression rate** | 🟡 2 medium regressions today (#10952, #10965) from recent changes |
| **Contributor diversity** | 🟢 12+ distinct authors in last 24h (core + dependabot + community) |

**Overall:** **Healthy, high-velocity project** with strong security posture but a growing review backlog on large, cross-cutting PRs.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*