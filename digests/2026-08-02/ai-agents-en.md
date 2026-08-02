# OpenClaw Ecosystem Digest 2026-08-02

> Issues: 226 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-02 03:36 UTC

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

# OpenClaw Project Digest — 2026-08-02

## 1. Today's Overview

OpenClaw shows **exceptionally high velocity** with 226 issues and 500 PRs updated in 24 hours — a signal of both active development and accumulating technical debt. The project released **v2026.7.2-beta.6** focused on state safety/recovery (quarantine store, crash-recoverable SQLite, schema-upgrade guards). However, the open issue count (212) and P0/P1 bugs around session livelocks, message loss, and provider failures indicate **stability risks in core session/runtime paths**. The PR merge rate (108 merged/closed) is healthy but many open PRs carry `merge-risk: 🚨` labels (compatibility, session-state, security-boundary, message-delivery), suggesting careful review bottlenecks.

---

## 2. Releases

### v2026.7.2-beta.6 — *State Safety & Recovery*
**Released:** 2026-08-02 | [Release Notes](https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.6)

| Change | Impact |
|--------|--------|
| Quarantine store for persisted data (survives primary DB damage) | 🛡️ Data durability |
| Crash-recoverable SQLite snapshots | 🛡️ Crash recovery |
| Crash-durable filesystem publication | 🛡️ Write safety |
| Schema-upgrade data-loss rejection | 🛡️ Prevents silent corruption |
| Rollback-writer snapshot recovery | 🛡️ Automated rollback |

**Migration Notes:**  
- Schema v6→v7 upgrades now reject on data-loss risk (see [#115421](https://github.com/openclaw/openclaw/issues/115421) — cron jobs lost during downgrade recovery)  
- Operators on `extended-stable` (2026.6.x) should test beta in staging before upgrading  
- No breaking config changes reported, but `state/` directory structure gains `.bak-schema*` and `.moved-schema*` artifacts during recovery

---

## 3. Project Progress (Merged/Closed PRs Today)

**108 PRs merged/closed** — key deliveries:

| PR | Area | Summary | Risk Tags |
|----|------|---------|-----------|
| [#117768](https://github.com/openclaw/openclaw/pull/117768) | agents | Reuse prepared runtime facts for configured turns — **3× latency regression fix** | `merge-risk: 🚨 availability` |
| [#117773](https://github.com/openclaw/openclaw/pull/117773) | tui/gateway | Reject oversized Gateway history requests before startup | `P2` |
| [#117771](https://github.com/openclaw/openclaw/pull/117771) | media | Reuse guarded remote media downloads (deduplicate downloader) | `merge-risk: 🚨 compatibility/security-boundary` |
| [#117697](https://github.com/openclaw/openclaw/pull/117697) | whatsapp | Preserve source direction for automatic reactions (bot-linked) | `clawsweeper:autofix` |
| [#117769](https://github.com/openclaw/openclaw/pull/117769) | scripts | Share gateway benchmark runtime (-209 LOC net) | `P3` |
| [#117641](https://github.com/openclaw/openclaw/pull/117641) | gateway | Active turns wait on SIGTERM (graceful shutdown) | `merge-risk: 🚨 compatibility/message-delivery/availability` |

**Pattern:** Heavy focus on **channel-specific attachment fixes** (msteams, feishu, imessage, whatsapp, matrix, line) and **gateway/runtime stability** (SIGTERM, config hot-reload, compaction timeouts).

---

## 4. Community Hot Topics (Most Active Issues)

| Issue | Comments | Core Problem | Underlying Need |
|-------|----------|--------------|-----------------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | 73 | DeepSeek v4 Flash silent reply failure — "No reply generated" fallback | **Provider reliability observability**; silent failures erode trust |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 38 | Realtime voice retains unbounded provider/consult state | **Resource ownership bounds** for streaming workloads |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 12 | Session transcript projection livelock under sustained writes | **Async/backpressure architecture** for transcript pipeline |
| [#109490](https://github.com/openclaw/openclaw/issues/109490) | 10 | Codex turn interrupted after `message` tool with `terminate:true` | **Tool-split runner semantics** vs. agent continuation expectations |
| [#50291](https://github.com/openclaw/openclaw/issues/50291) | 9 | Plugin Hooks missing trace context (messageId, runId, parentSpanId) | **Distributed tracing** for multi-agent/plugin observability |

**Analysis:** Top issues cluster around **provider failure modes** (silent failures, auth, fallback), **session/runtime resource bounds** (voice, transcript, compaction), and **observability gaps** — all pointing to a need for *hardened async boundaries* and *structured error taxonomy*.

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 P0 / Critical (Data Loss / Crash Loop / Security)
| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#115421](https://github.com/openclaw/openclaw/issues/115421) | Schema downgrade wipes state DB — cron jobs lost | Open | No |
| [#109193](https://github.com/openclaw/openclaw/issues/109193) | TTS audio cross-talk between concurrent sessions | Open | No |
| [#117633](https://github.com/openclaw/openclaw/issues/117633) | Duplicate skill slugs block Control UI install | Open | No |
| [#115546](https://github.com/openclaw/openclaw/issues/115546) | CLI-budget compaction timeout fires at 4.9s (vs 180s deadline) — 100% failure on large sessions | Open | [#115968](https://github.com/openclaw/openclaw/pull/115968) (per-candidate timeout) |

### 🟠 P1 / High (Message Loss / Session State / Provider Failures)
| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash silent reply failure | Open | No |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | Transcript projection livelock stalls event loop | Open | No |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime voice unbounded state retention | Open | No |
| [#114084](https://github.com/openclaw/openclaw/issues/114084) | "no such table: session_entries" after migration | Open | No |
| [#115476](https://github.com/openclaw/openclaw/issues/115476) | Context refresh replays old Telegram message_id | Open | No |
| [#117762](https://github.com/openclaw/openclaw/issues/117762) | Model stops answering — session frozen | Open (new) | No |

### 🟡 P2 / Medium (UX / Config / Platform)
| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#112906](https://github.com/openclaw/openclaw/issues/112906) | `` renders broken (rich messages regression) | Open | No |
| [#114154](https://github.com/openclaw/openclaw/issues/114154) | bundle-mcp: tool passes policy but never bundled | Open | No |
| [#117644](https://github.com/openclaw/openclaw/issues/117644) | Agent emits Unix commands in PowerShell (Windows) | Open | No |
| [#115478](https://github.com/openclaw/openclaw/issues/115478) | WeChat plugin fails to load (missing export) | Open | No |
| [#96534](https://github.com/openclaw/openclaw/issues/96534) | memory_search latches fallback embedding after outage | Open | No |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Votes | Signal | Likelihood for Next Version |
|-------|-------|--------|----------------------------|
| [#93422](https://github.com/openclaw/openclaw/issues/93422) | 👍 2 | `/label` slash command & `/new <name>` for session naming | Medium — UX polish, low risk |
| [#114146](https://github.com/openclaw/openclaw/issues/114146) | 👍 1 | `talk.realtime.providers.<id>.baseUrl` for OpenAI Realtime-compatible | High — direct provider enablement, security-review needed |
| [#115924](https://github.com/openclaw/openclaw/issues/115924) | — | "Idea Shower" — parallel thought collector during agent work | Low — novel UX, needs design |
| [#96553](https://github.com/openclaw/openclaw/issues/96553) | 👍 1 | Surface CLI session resets (`reason=system-prompt`) in conversation | Medium — visibility improvement |
| [#117763](https://github.com/openclaw/openclaw/issues/117763) | — | Reef: notify-only messages acknowledged but only in ephemeral buffer | Medium — protocol correctness |

**Prediction:** `baseUrl` for realtime providers ([#114146](https://github.com/openclaw/openclaw/issues/114146)) and session naming ([#93422](https://github.com/openclaw/openclaw/issues/93422)) are most likely to land — both have clear scope and active maintainer engagement (`clawsweeper:needs-product-decision`).

---

## 7. User Feedback Summary

### Pain Points (from issue narratives)
| Theme | Representative Quotes |
|-------|----------------------|
| **Silent provider failures** | "DeepSeek v4 Flash silently failed... OpenClaw posted a fallback message: *'No reply was generated for this message'*" ([#116277](https://github.com/openclaw/openclaw/issues/116277)) |
| **Session unrecoverability** | "Normal `/new` recovery does not fix the session. It records `reason:"new"` reset events while retaining the tombstone" ([#116022](https://github.com/openclaw/openclaw/issues/116022)) |
| **Windows second-class** | "Agent emits Unix commands (head, tilde expansion) in PowerShell... head is interpreted as a device name" ([#117644](https://github.com/openclaw/openclaw/issues/117644)) |
| **Config footguns** | "Missing google provider config silently routes Gemini requests to OpenAI" ([#85042](https://github.com/openclaw/openclaw/issues/85042)) |
| **Observability blind spots** | "Plugin Hooks event/context data is **insufficient for building accurate distributed traces**" ([#50291](https://github.com/openclaw/openclaw/issues/50291)) |

### Use Cases Emerging
- **Multi-agent orchestration** via `sessions_send`/`sessions_yield` gatekeeper patterns ([#115400](https://github.com/openclaw/openclaw/issues/115400))
- **Realtime voice** with custom OpenAI-compatible endpoints ([#114146](https://github.com/openclaw/openclaw/issues/114146))
- **Enterprise channels** (Feishu, Teams, Matrix, WeChat) with attachment/workspace approval flows
- **Cron-heavy agents** accumulating session store debris ([#117074](https://github.com/openclaw/openclaw/pull/117074))

### Satisfaction Signals
- 👍 reactions on issues requesting **session naming** ([#93422](https://github.com/openclaw/openclaw/issues/93422)), **fallback embedding recovery** ([#96534](https://github.com/openclaw/openclaw/issues/96534)), **model fallback for auth errors** ([#93272](https://github.com/openclaw/openclaw/issues/93272))
- Active PR author engagement on channel fixes (msteams, feishu, imessage, matrix, line, whatsapp all in last 24h)

---

## 8. Backlog Watch (Stale Important Items)

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#50291](https://github.com/openclaw/openclaw/issues/50291) | 136 days | **Distributed tracing foundation** — blocks observability for plugins/multi-agent | `clawsweeper:needs-product-decision`, `clawsweeper:source-repro` |
| [#93081](https://github.com/openclaw/openclaw/issues/93081) | 49 days | **Windows Ctrl+C broken** — basic UX for native installs | `clawsweeper:needs-live-repro` |
| [#96534](https://github.com/openclaw/openclaw/issues/96534) | 39 days | **memory_search fallback latch** — requires full restart to recover | `clawsweeper:fix-shape-clear`, `clawsweeper:queueable-fix` |
| [#109353](https://github.com/openclaw/openclaw/issues/109353) | 17 days | **Global pre-routing interception**

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-08-02)

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape shows **high fragmentation with convergent technical pressures**. Twelve active projects span from framework-level runtimes (OpenClaw, IronClaw, ZeroClaw) to desktop-first assistants (Hermes, NanoClaw, CoPaw) and specialized variants (PicoClaw, Moltis, NanoBot, LobsterAI). **No dominant standard has emerged** — each project maintains distinct architecture, channel integrations, and provider abstractions. However, **shared pain points are crystallizing**: session state durability, provider failure observability, multi-agent security isolation, and OpenAI-compatible interoperability. Velocity is high across the top tier (OpenClaw, Hermes, IronClaw, ZeroClaw, CoPaw), but release cadence lags behind merge activity, indicating **accumulating integration debt**. The ecosystem is in a **consolidation phase** where architectural refactors (IronClaw's "Reborn", ZeroClaw's ScopedToolRegistry, OpenClaw's state safety) compete with feature parity demands from users migrating from hosted SaaS.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Release Status | Health Score* |
|---------|--------------|-----------|---------------|----------------|---------------|
| **OpenClaw** | 226 | 500 | 108 | **v2026.7.2-beta.6** (today) | 🟡 High velocity, stability debt |
| **Hermes Agent** | 11 | 50 | 9 | None (main branch) | 🟡 Active, Windows/Desktop risk |
| **IronClaw** | 12 | 22 | 7 | None (Wave refactor) | 🟡 Architectural churn, perf regressions |
| **ZeroClaw** | 8 | 50 | 0 | None (v0.8.5 tracker) | 🟠 Review bottleneck, S0 security gaps |
| **CoPaw/QwenPaw** | 9 | 11 | 1 | None (v2.0.1) | 🟢 Strong bug-fix throughput |
| **NanoClaw** | 2 | 12 | 5 | **v2.1.54** (today, breaking) | 🟢 High velocity, quick regressions fix |
| **NanoBot** | 5 | 25 | 13 | Patch imminent | 🟢 Healthy maintenance |
| **Moltis** | 0 | 3 | 2 | None | 🟢 Focused infrastructure work |
| **PicoClaw** | 1 | 2 | 0 | None (v0.2.9) | 🟠 Critical Matrix bug stale 31d |
| **LobsterAI** | 6 (auto-closed) | 0 | 0 | None | 🔴 Stalled, critical bugs unaddressed |
| **NullClaw** | 0 | 0 | 0 | None | ⚫ Inactive |
| **ZeptoClaw** | 0 | 0 | 0 | None | ⚫ Inactive |

*Health Score: 🟢 Healthy / 🟡 Active with risks / 🟠 Concerning / 🔴 Stalled / ⚫ Inactive

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Scale of investment**: 500 PRs/24h dwarfs all others; 108 merges/day shows review capacity others lack
- **State safety leadership**: v2026.7.2-beta.6 ships crash-recoverable SQLite, quarantine store, schema-upgrade guards — **only project with production-grade durability primitives**
- **Channel breadth**: 8+ channel fixes in 24h (Teams, Feishu, iMessage, WhatsApp, Matrix, Line) — widest enterprise messaging coverage
- **Observability foundation**: Distributed tracing hooks (#50291) and provider failure taxonomy work underway

### Technical Approach Differences
| Dimension | OpenClaw | Peers |
|-----------|----------|-------|
| **Session model** | Centralized runtime with compaction, transcript projection, quarantine | Most use file-based or simple SQLite; IronClaw/ZeroClaw moving to crate-separated stores |
| **Provider abstraction** | Unified gateway with fallback chains, budget compaction | NanoBot/NanoClaw: per-provider skills; ZeroClaw: OpenAI compat adapter RFC |
| **Security boundary** | Process-level isolation emerging | ZeroClaw: per-agent ScopedToolRegistry (S0); Hermes: approval glob hardening |
| **Extensibility** | Plugin hooks (trace context gaps) | IronClaw: 4 contract hooks (#74645); ZeroClaw: skill/compact injection |

### Community Size Comparison
- **OpenClaw**: Largest visible contributor base (500 PRs/24h implies 50+ active committers)
- **Hermes/IronClaw/ZeroClaw**: 10-20 core contributors each (evident from PR author diversity)
- **NanoClaw/NanoBot/CoPaw**: 5-10 core + first-time contributor influx
- **PicoClaw/Moltis/LobsterAI**: 1-3 maintainers, limited community PRs

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Session state durability & recovery** | OpenClaw (quarantine store), IronClaw (libSQL/Postgres perf), ZeroClaw (S0 session scoping), Hermes (Windows update loss), NanoClaw (migrate-v2 import fix) | Crash-recoverable storage, schema migration guards, per-agent session isolation, compaction reliability |
| **Provider failure observability** | OpenClaw (#116277 silent DeepSeek failure), NanoBot (tool-call leakage), CoPaw (empty response silent failure), LobsterAI (false token limit), Hermes (bare exceptions in chat) | Structured error taxonomy, fallback telemetry, user-visible failure modes, provider health endpoints |
| **Multi-agent security isolation** | ZeroClaw (S0: sessions, knowledge graph, tools), IronClaw (extension host contract inversion), Hermes (plugin hooks), OpenClaw (security-boundary merge-risk) | Per-agent tool registry, knowledge attribution, channel ownership, capability-based access |
| **OpenAI-compatible interoperability** | ZeroClaw (RFC #8603, 13 comments), PicoClaw (OrcaRouter PR), NanoClaw (Photon hosted iMessage), CoPaw (OrcaRouter PR), IronClaw (OrcaRouter issue) | Chat Completions adapter, vendor/model routing, proxy auth, streaming parity |
| **Windows/Desktop reliability** | Hermes (update pipeline 7 causes, gateway loop), OpenClaw (PowerShell Unix commands), CoPaw (nohup hang), NanoClaw (rootless Docker), ZeroClaw (PowerShell native shell) | Native signal handling, installer robustness, shell abstraction, GPU/acceleration parity |
| **Channel registration & lifecycle** | NanoClaw (iMessage unification), Hermes (Discord token reset, Telegram topics), PicoClaw (Matrix sync death), ZeroClaw (WhatsApp/Telegram allow_groups), Moltis (operator gating) | Idempotent registration, reconnection logic, privilege separation, health monitoring |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architectural Signature |
|---------|---------------|-------------|-------------------------|
| **OpenClaw** | Enterprise-grade runtime, multi-channel gateway | Platform builders, self-hosted enterprises | Monolithic Go runtime, centralized session/store, plugin hooks |
| **IronClaw** | Modular crate architecture, contract-driven boundaries | Advanced developers, infrastructure teams | Rust workspace, Wave refactors, inventory-driven CI gates, product_contracts crate |
| **ZeroClaw** | Security-first multi-agent, OpenAI ecosystem compat | Security-conscious orgs, toolchain integrators | ScopedToolRegistry, per-agent boundaries, evaluation framework, relay transport |
| **Hermes Agent** | Desktop-native UX, Windows/Telegram/Discord power users | Desktop users, community managers | Tauri/TypeScript, Kanban dispatcher, gateway-centric, plugin hooks |
| **NanoClaw** | Skill-based onboarding, multi-provider parity, iMessage | Mac/iOS users, multi-LLM workflows | Skill-install UX (`/add-*`), vault credentials, Photon hosted channels |
| **CoPaw/QwenPaw** | Memory management, ACP protocol, Chinese LLM ecosystem | Chinese developers, Qwen/Alibaba Cloud users | Agentscope framework, Scroll memory, ACP delegation, floating input UX |
| **NanoBot** | Local-first, multi-provider, ChatGPT-like WebUI | Privacy-focused users, multi-model experimenters | Python/uv, session consolidation, cron/dream modes, rate limiting |
| **PicoClaw** | Lightweight, Matrix-centric, provider extensibility | Embedded/IoT, Matrix-native communities | Minimal core, provider plugins, Exa/OrcaRouter search |
| **Moltis** | Observability, channel privilege separation, session lifecycle | Operators needing audit trails | Langfuse/OTLP instrumentation, operator lists, main session parity |
| **LobsterAI** | Chinese-market polish, OpenClaw engine frontend | Chinese enterprise users | React/WebUI layer on OpenClaw, i18n gaps, media handling limits |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (High Velocity + Active Releases)
- **OpenClaw**: Beta releases weekly, 500 PRs/24h, but stability debt rising (P0 livelocks, schema downgrade data loss)
- **NanoClaw**: Monthly major rollups (v2.1.54 today), breaking changes managed via skills, quick regression turnaround
- **CoPaw**: v2.0.x maintenance, 7 critical/high bug PRs in 24h, first-time contributor surge

### Tier 2: Architectural Refactor Mode (Velocity in PRs, No Releases)
- **IronClaw**: 22 PRs/24h in Wave 2 contract inversions, CI-gate overhaul complete, but Postgres/libSQL p95 regressions block release
- **ZeroClaw**: 50 PRs open, zero merges — review bottleneck on ScopedToolRegistry (linchpin for S0 fixes) and OpenAI compat RFC
- **Hermes**: 50 PRs/24h security/Windows fixes, but Windows update pipeline and gateway loops unresolved for weeks

### Tier 3: Steady Maintenance (Low Volume, High Signal)
- **NanoBot**: 13 merges, patch release imminent, provider hardening, WebUI polish
- **Moltis**: 2 merged PRs (instrumentation, operator gating), focused infrastructure

### Tier 4: Stalled / At Risk
- **PicoClaw**: Critical Matrix sync bug 31 days stale, provider PRs waiting review
- **LobsterAI**: 6 critical bugs auto-closed stale, 2 PRs unmerged since April, no maintainer response
- **NullClaw/ZeptoClaw**: No activity

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence Across Projects | Strategic Value |
|-------|--------------------------|-----------------|
| **Durability > Features** | OpenClaw quarantine store, IronClaw libSQL stress, ZeroClaw S0 session scoping, Hermes Windows update loss | **Invest in crash-recoverable state first**; users abandon agents that lose context silently |
| **OpenAI Compat as Table Stakes** | ZeroClaw RFC (13 comments), PicoClaw OrcaRouter, CoPaw OrcaRouter, NanoClaw Photon, IronClaw OrcaRouter issue | **Build Chat Completions adapter early**; it's the universal integration point for WebUI, Continue, LangChain, Open WebUI |
| **Per-Agent Security Isolation** | ZeroClaw ScopedToolRegistry (S0), IronClaw extension host contracts, Hermes approval glob fix, Moltis operator lists | **Multi-agent deployments require capability boundaries**; shared stores/tools are exploited surfaces |
| **Provider Failure as UX Crisis** | OpenClaw silent DeepSeek, NanoBot tool-call leakage, CoPaw empty responses, LobsterAI false token limits, Hermes bare exceptions | **Structured error taxonomy + user-visible fallbacks** differentiate production agents from demos |
| **Windows/Desktop as Differentiator** | Hermes 7-cause update failure, OpenClaw PowerShell Unix cmds, CoPaw nohup hang, NanoClaw rootless Docker, ZeroClaw PowerShell native | **Native shell handling, installer robustness, GPU parity** unlock enterprise desktop adoption |
| **Channel Registration Idempotency** | NanoClaw iMessage unification, Hermes Discord token reset, PicoClaw Matrix sync death, ZeroClaw WhatsApp/Telegram groups | **Self-healing channel reconnection + privilege separation** reduces operator burden |
| **Observability as Product Feature** | OpenClaw trace hooks, Moltis Langfuse/OTLP/user feedback, ZeroClaw evaluation framework, IronClaw pi-harness | **Built-in observability (traces, evals, feedback loops)** becomes a retention driver |

### Recommendation for Technical Decision-Makers
1. **For enterprise self-hosting**: OpenClaw (maturity) or IronClaw (modularity) — but budget for stability sprints
2. **For desktop-first teams**: NanoClaw (Mac/iMessage) or Hermes (Windows/Telegram/Discord) — evaluate Windows update risk

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-02

## 1. Today's Overview
NanoBot shows **high velocity** with 25 PR updates and 5 issue updates in the last 24 hours. The project is in active maintenance mode: 13 PRs were merged/closed, addressing a mix of regressions, WebUI polish, provider hardening, and session-memory stability. No new release was cut today, but the volume of merged fixes suggests a patch release is imminent. The sole remaining open issue (#5198) highlights a UX gap in model switching that aligns with a newly opened feature PR (#5202).

## 2. Releases
**No new releases today.** The last published version remains the current baseline. Given the 13 merged PRs (several tagged `priority: p1`), expect a patch release within days.

## 3. Project Progress — Merged/Closed PRs (13)
| PR | Area | Summary | Priority |
|----|------|---------|----------|
| [#5209](https://github.com/HKUDS/nanobot/pull/5209) | WebUI | Reuse sidebar selection highlight component; remove flicker-causing nested surface | — |
| [#5208](https://github.com/HKUDS/nanobot/pull/5208) | Dream/Cron | Advance cursor on durable changes even when stop reason ≠ clean completion | **P1** |
| [#5183](https://github.com/HKUDS/nanobot/pull/5183) | Cron | Preserve manual-run completion state; protect live store during concurrent reads | **P1** |
| [#5200](https://github.com/HKUDS/nanobot/pull/5200) | Exec | Preserve `wait_for` targets across response truncation | **P1** |
| [#5201](https://github.com/HKUDS/nanobot/pull/5201) | Session | Tolerate malformed persisted `_last_summary` metadata | **P1** |
| [#5172](https://github.com/HKUDS/nanobot/pull/5172) | Provider | Preserve Responses reasoning state & compact context (OpenAI ARC-AGI-3 capabilities) | — |
| [#5153](https://github.com/HKUDS/nanobot/pull/5153) | Memory | Handle non-string/None timestamps & missing `role` in raw_archive | **P1** |
| [#5108](https://github.com/HKUDS/nanobot/pull/5108) | Channels | Add per-sender message rate limiting across all channel adapters | **P1** |
| [#5199](https://github.com/HKUDS/nanobot/pull/5199) | CLI | Narrow Pyright suppressions to line-level | — |
| [#3732](https://github.com/HKUDS/nanobot/pull/3732) | Providers | Require `api_base` before local provider wins on keyword match | — |
| [#5194](https://github.com/HKUDS/nanobot/pull/5194) | WebUI | Accelerate JSONL session list & thread loading via caching | **P2** |
| [#5186](https://github.com/HKUDS/nanobot/pull/5186) | WebUI | Support well-known `skills.sh` sources (e.g., `uizze.com`) | **P2** |
| [#5139](https://github.com/HKUDS/nanobot/pull/5139) | Session | Preserve media paths during session consolidation (fixes #5118, #5135) | **P1** |

**Key advances**: Cron/manual-run race conditions resolved; session consolidation no longer drops media; provider routing hardened; WebUI session loading optimized; rate limiting added to all channels.

## 4. Community Hot Topics
| Item | Type | Comments | Signal |
|------|------|----------|--------|
| [#5185](https://github.com/HKUDS/nanobot/issues/5185) | Issue | 4 | **Tool-call leakage in responses** — users see raw tool-call JSON in chat output; marked `invalid`/`provider` but 4 comments indicate real confusion. |
| [#5205](https://github.com/HKUDS/nanobot/issues/5205) | Issue | 2 | **Plugin enable fails on Debian** — `ensurepip` missing in uv-managed Python; blocks Feishu channel setup. |
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) | PR (open) | — | **Cross-session search & `@` mentions** — highly requested power-user feature; adds read-only search tools + WebUI mention palette. |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | PR (open) | — | **Quick Chat & Temporary Chat** — first-class ephemeral/persistent chat UX; separates quick queries from topic threads. |

**Underlying need**: Users want **ChatGPT-like UX** (model switching, ephemeral chats, cross-chat context) without losing NanoBot’s local-first, multi-provider architecture.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue/PR | Status | Fix PR |
|----------|----------|--------|--------|
| **Critical** | [#5205](https://github.com/HKUDS/nanobot/issues/5205) — `ensurepip` missing, blocks plugin installs | Closed (invalid?) | None yet — may need uv/Python packaging fix |
| **High** | [#4801](https://github.com/HKUDS/nanobot/issues/4801) — `KeyError` on missing `role` in session history | Closed | [#5153](https://github.com/HKUDS/nanobot/pull/5153) ✅ merged |
| **High** | [#5163](https://github.com/HKUDS/nanobot/issues/5163) — Manual cron runs lose completion state | Closed | [#5183](https://github.com/HKUDS/nanobot/pull/5183) ✅ merged |
| **High** | [#5139](https://github.com/HKUDS/nanobot/pull/5139) — Media paths dropped during consolidation | Open (conflict) | [#5139](https://github.com/HKUDS/nanobot/pull/5139) — needs rebase |
| **Medium** | [#5185](https://github.com/HKUDS/nanobot/issues/5185) — Tool calls rendered in response | Closed (invalid) | Provider-side? |
| **Medium** | [#5198](https://github.com/HKUDS/nanobot/issues/5198) — Cannot change model in-session | **Open** | [#5202](https://github.com/HKUDS/nanobot/pull/5202) (UI discoverability) |
| **Medium** | [#5206](https://github.com/HKUDS/nanobot/pull/5206) — Duplicate streamed-response logging | Open | [#5206](https://github.com/HKUDS/nanobot/pull/5206) |
| **Low** | [#3869](https://github.com/HKUDS/nanobot/pull/3869) — DeepSeek null/empty content sanitization | Open (conflict) | [#3869](https://github.com/HKUDS/nanobot/pull/3869) — 3 months stale |

## 6. Feature Requests & Roadmap Signals
| Feature | Evidence | Likelihood for Next Release |
|---------|----------|----------------------------|
| **In-session model/preset switching** | #5198 (issue) + #5202 (PR: clickable preset menu) + #5207 (PR: preset for subagents) | **High** — 3 PRs converge; #5202 is `P2` UI fix |
| **Cross-session search & mentions** | #5211 (PR: `@` mention palette, search tools) | **Medium** — open, needs review; power-user feature |
| **Quick Chat / Temporary Chat** | #5184 (PR: persistent Quick Chat + in-memory Temporary Chat) | **Medium** — UX polish, no backend changes |
| **Trusted-proxy bootstrap auth** | #5210 (PR: Cloudflare Tunnel/Access support) | **Medium** — `P1` security/doc; deployment enabler |
| **Per-sender rate limiting** | #5108 (merged) | **Done** — shipped today |
| **Responses API reasoning preservation** | #5172 (merged) | **Done** — advanced provider feature |

**Prediction**: Next patch will include model-switching UI (#5202), trusted-proxy auth (#5210), and the remaining `P1` fixes. Cross-session search (#5211) and Quick Chat (#5184) may target a minor release.

## 7. User Feedback Summary
| Pain Point | Source | Frequency |
|------------|--------|-----------|
| **Model switching not discoverable/working** | #5198, #5202 | 2 items today |
| **Plugin installation fails on non-standard Python** | #5205 | 1 (but blocks Feishu) |
| **Tool-call JSON leaking into chat** | #5185 | 4 comments — high visibility |
| **Cron job state flapping in WebUI** | #5163, #5183 | 2 (fixed) |
| **Media files lost after session archive** | #5139, #5118, #5135 | 3 linked issues |
| **DeepSeek API rejects null/empty content** | #3869 | Long-standing, 3 months |

**Positive signals**: Quick Chat (#5184), cross-session mentions (#5211), and rate limiting (#5108) show users pushing for **production-grade multi-tenant UX**.

## 8. Backlog Watch — Stale High-Value Items
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3732](https://github.com/HKUDS/nanobot/pull/3732) | **83 days** | Provider routing bug: local provider hijacks cloud models without `api_base` check. Merged today! ✅ |
| [#3869](https://github.com/HKUDS/nanobot/pull/3869) | **78 days** | DeepSeek message sanitization — blocks a major provider. Still open with conflicts. |
| [#5139](https://github.com/HKUDS/nanobot/pull/5139) | **5 days** | Media-path preservation in consolidation — has conflicts, blocks #5118/#5135. |
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) | **2 days** | In-session model switch — only open bug today; UX gap vs. SaaS competitors. |

**Maintainer action needed**: Resolve #3869 (DeepSeek) and #5139 (media paths) before next release; both are `P1`-adjacent and affect data integrity/provider compatibility.

---

**Overall Health**: 🟢 **Healthy** — High merge rate, critical bugs fixed, feature momentum toward parity with hosted AI UIs. Watchlist: DeepSeek support, media-path regression, and the model-switching UX gap.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-02

---

## 1. Today's Overview

Hermes Agent shows **high development velocity** with 61 total items updated in the last 24 hours (11 issues, 50 PRs). The project is in active maintenance mode with no new releases, focusing on bug fixes, stability improvements, and plugin/extension infrastructure. A notable cluster of issues targets Windows Desktop update failures, gateway reconnect loops, and session state consistency across platforms. Nine PRs were merged/closed today, primarily addressing security hardening, linting, and targeted bug fixes. The backlog reflects a maturing codebase tackling cross-platform reliability, session branching, and plugin extensibility.

---

## 2. Releases

**No new releases published today.** The project continues on the `main` branch with continuous integration. Users on Windows Desktop should note that update mechanism fixes are in progress (see Issues #63717, #76435).

---

## 3. Project Progress — Merged/Closed PRs Today (9)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#76547](https://github.com/NousResearch/hermes-agent/pull/76547) | `fmt(js)` | Auto-fix lint/formatting via CI bot | Code hygiene; auto-merged |
| [#76263](https://github.com/NousResearch/hermes-agent/pull/76263) | `security` | Scrub signed delivery URLs from `result.samples` (vision tools) | Prevents credential leakage in model context |
| [#76260](https://github.com/NousResearch/hermes-agent/pull/76260) | `security` | Redact secrets in `interrupt_debug.log` writes | Stops raw tokens/pasted creds from hitting disk |
| [#76551](https://github.com/NousResearch/hermes-agent/pull/76551) | `security` | Fix `approvals.deny` glob matching to cover command segments | Closes bypass via `cd repo && git push --force` |
| [#76549](https://github.com/NousResearch/hermes-agent/pull/76549) | `deps` | Downgrade `@whiskeysockets/baileys` to v6.7.8 (WhatsApp) | Stabilizes WhatsApp gateway; v7 RC unstable |
| [#76550](https://github.com/NousResearch/hermes-agent/pull/76550) | `bug/skills` | Fix watermark eviction: drop oldest IDs, not random subset | Stops silent re-reporting of old watcher items |
| [#76555](https://github.com/NousResearch/hermes-agent/pull/76555) | `bug/gateway` | Stop bare exception strings reaching chat as assistant prose | Prevents `TypeError: ...` from appearing as bot reply |
| [#76472](https://github.com/NousResearch/hermes-agent/pull/76472) | `bug/desktop` | Answer visible clarify card, not first-mounted one | Fixes background-tab clarify hijacking foreground input |
| [#76554](https://github.com/NousResearch/hermes-agent/pull/76554) | `bug/cli` | Install model-provider plugins under `model-providers/` subdir | Makes CLI-installed providers visible to `hermes model` |

**Themes:** Security hardening (3 PRs), Windows/WhatsApp gateway stability, session/UI correctness, plugin discovery fix.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Signals |
|------|----------|---------|
| [#67249](https://github.com/NousResearch/hermes-agent/issues/67249) `active_pr` respawn guard blocks on non-PR comment content | 5 | **Kanban/dispatcher reliability** — operators need override; false positives from stray URLs in comments stall workers. |
| [#63717](https://github.com/NousResearch/hermes-agent/issues/63717) Windows Desktop update failures — 7 correlated root causes | 4 | **Windows update pipeline** — comprehensive diagnostic; users blocked for weeks. High urgency for Desktop users. |
| [#76435](https://github.com/NousResearch/hermes-agent/issues/76435) Gateway reconnect loop + unusable Desktop updater | 3 | **Discord gateway token reset** (1000+ reconnects) + updater opens terminal showing "managed outside". Dual platform pain. |
| [#58512](https://github.com/NousResearch/hermes-agent/pull/58512) Rebind context engine before compaction | — | **Session state integrity** — stale-bound engines cause compression regressions; broad blast radius. |
| [#74645](https://github.com/NousResearch/hermes-agent/pull/74645) Four plugin extension hooks for core behavior override | — | **Extensibility** — enables fixes without patching core; addresses multiple blocked PRs. |

**Underlying needs:** Operators want control over automation guards; Windows users need reliable updates; plugin authors need sanctioned extension points; session state must survive compaction/delegation.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Component | Fix PR? |
|----------|-------|-----------|---------|
| **Critical** | [#76435](https://github.com/NousResearch/hermes-agent/issues/76435) Discord gateway reconnect loop → token reset; Desktop updater broken | `gateway`, `desktop`, `platform/windows` | No |
| **High** | [#63717](https://github.com/NousResearch/hermes-agent/issues/63717) Windows `hermes update` fails — 7 correlated causes | `desktop`, `platform/windows`, `install-update` | No |
| **High** | [#76548](https://github.com/NousResearch/hermes-agent/issues/76548) `cron.mirror_delivery` never opens fresh thread for Telegram topic jobs | `gateway`, `cron`, `platform/telegram` | No |
| **High** | [#76531](https://github.com/NousResearch/hermes-agent/issues/76531) Async Git enrichment overwrites newer session cwd across probe generations | `tui`, `desktop`, `sessions` | No |
| **Medium** | [#76553](https://github.com/NousResearch/hermes-agent/issues/76553) Mid-turn send accepted but user bubble invisible; hover shows stale timestamp | `desktop`, `chat` | No |
| **Medium** | [#76544](https://github.com/NousResearch/hermes-agent/issues/76544) `_parse_env_value` keeps inline comments in `.env` values → broken base URLs | `cli`, `config`, `auth` | No |
| **Medium** | [#76535](https://github.com/NousResearch/hermes-agent/issues/76535) Desktop focused-session cwd authority incomplete for cold secondary tiles | `desktop`, `sessions` | No |
| **Medium** | [#67249](https://github.com/NousResearch/hermes-agent/issues/67249) `active_pr` respawn guard has no operator override; tripped by non-PR URLs | `cli`, `cron`, `config` | No |
| **Low** | [#76542](https://github.com/NousResearch/hermes-agent/issues/76542) Watchers skill watermark evicts random subset at `max_seen` → re-reports old items | `cron`, `skills` | **Yes** [#76550](https://github.com/NousResearch/hermes-agent/pull/76550) |
| **Low** | [#76553](https://github.com/NousResearch/hermes-agent/issues/76553) Mid-turn send bubble invisible (duplicate entry) | `desktop` | No |

**Note:** Only the watchers watermark bug (#76542) has a fix PR opened today. Windows update, gateway loops, and session cwd races remain without patches.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Description | Likelihood for Next Version |
|----------|-------------|----------------------------|
| [#40950](https://github.com/NousResearch/hermes-agent/issues/40950) Desktop fork-from-message → use Hermes-native session branching | Align Desktop branching with CLI/TUI lineage model; long-standing (Jun 7) | **High** — core session model exists; UI work |
| [#76534](https://github.com/NousResearch/hermes-agent/issues/76534) Shared session across WebSocket + Telegram gateways | Single `AIAgent` instance serving multiple transports; context sync | **Medium** — architectural; needs multi-transport session manager |
| [#74645](https://github.com/NousResearch/hermes-agent/pull/74645) Four plugin hooks for core behavior override | `on_agent_init`, `on_model_switch`, `on_tool_call`, `on_session_fork` | **High** — unblocks several stalled PRs; fail-open design |
| [#69086](https://github.com/NousResearch/hermes-agent/pull/69086) Compute provider capability POC (Modal + computer-use) | Leased sandbox abstraction with capability-driven tool attachment | **Low** — POC stage; needs design review |
| [#76522](https://github.com/NousResearch/hermes-agent/pull/76522) Buzz: durable ambient observer mode | Fail-closed cursor/lifecycle for observer agents across restarts | **Medium** — niche but well-scoped; plugin-adjacent |
| [#76552](https://github.com/NousResearch/hermes-agent/pull/76552) Task-scoped disabled-skill grants | Allow explicitly requested disabled skills via CLI `--skills` / Kanban `required_skills` | **Medium** — clarifies skill permission model |

**Prediction:** Plugin hooks (#74645) and Desktop native branching (#40950) are closest to landing. Multi-gateway shared session (#76534) is a larger refactor.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Windows update completely broken** | "3-week period of repeated failures", "7 correlated root causes" (#63717) | All Windows Desktop users |
| **Discord gateway token reset by platform** | ">1,000 connection attempts", token revoked (#76435) | Discord gateway operators |
| **Updater UX regression** | "Update now opens terminal dialog showing 'managed outside'" (#76435) | Desktop users on Windows |
| **Telegram topic cron threads not isolating** | "Documented as fresh thread per run; doesn't work on topics" (#76548) | Telegram cron users |
| **Mid-turn UX broken** | "Message accepted but bubble invisible; hover shows ~2066Xd ago" (#76553) | Desktop chat users |
| **Env parsing breaks base URLs** | "Inline comment parsed as part of value → 404" (#76544) | Anyone using `.env` with comments |
| **Session cwd flakiness** | "Cold secondary tiles lack authoritative cwd; async Git race overwrites newer cwd" (#76535, #76531) | Multi-session Desktop users |
| **Operator guard no override** | "Respawn guard trips on non-PR URLs; no manual bypass" (#67249) | Kanban/dispatcher operators |

**Satisfaction signals:** No positive reactions (👍) on any issue today. Users are filing detailed diagnostics (#63717) and workarounds, indicating investment but frustration with stability.

---

## 8. Backlog Watch — Long-Unanswered / High-Impact Items Needing Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#63717](https://github.com/NousResearch/hermes-agent/issues/63717) Windows update failures (7 causes) | 20 days | Blocks all Windows users; comprehensive diagnostic provided | Assign owner; split into 7 sub-issues; prioritize fix PRs |
| [#67249](https://github.com/NousResearch/hermes-agent/issues/67249) `active_pr` respawn guard no override | 14 days | Stalls Kanban workers on false positives; needs-decision label | Design operator override (CLI flag / env / admin command) |
| [#40950](https://github.com/NousResearch/hermes-agent/issues/40950) Desktop native session branching | 56 days | Long-standing feature parity gap; UX inconsistency | Review implementation plan; link to plugin hooks (#74645) |
| [#76435](https://github.com/NousResearch/hermes-agent/issues/76435) Gateway reconnect loop + updater | 1 day (new) | Dual critical: Discord token reset + updater UX | Investigate Discord backoff logic; fix updater terminal spawn |
| [#76548](https://github.com/NousResearch/hermes-agent/issues/76548) Cron mirror_delivery + Telegram topics | 1 day (new) | Documented behavior not implemented; affects recurring briefs | Verify `attach_to_session` logic for topic threads |
| [#74645](https://github.com/NousResearch/hermes-agent/pull/74645) Plugin extension hooks | 3 days | Unblocks multiple community fixes; fail-open safety | Review hook signatures; merge to unblock downstream PRs |
| [#58512](https://github.com/NousResearch/hermes-agent/pull/58512) Rebind context engine before compaction | 29 days | Broad blast radius; session state corruption risk | Prioritize review; add to next release branch |

---

**Overall Health Assessment:** 🟡 **Active but stability-debt heavy**. High PR throughput (50/24h) and security hygiene are positives. Critical Windows/Desktop and gateway reliability gaps affect production users. Plugin extensibility (#74645) is the key architectural lever to unblock community fixes. Recommended: triage Windows update cluster, merge plugin hooks, and establish operator override for respawn guard.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-02

## 1. Today's Overview
PicoClaw shows modest but focused activity over the last 24 hours: one long-standing critical bug resurfaced in discussion, one localization PR was closed as stale, and two new provider integrations (Exa web search and OrcaRouter) were proposed. No releases were cut. The project’s health signals a community actively expanding provider coverage while a core reliability gap in Matrix sync remains unaddressed since early July.

## 2. Releases
No new releases in the last 24 hours. Current latest remains **v0.2.9** (per Issue #3203 environment).

## 3. Project Progress
| PR | Status | Summary |
|----|--------|---------|
| [#3261](https://github.com/sipeed/picoclaw/pull/3261) | **Closed (stale)** | Added zh-TW locale and Traditional Chinese translations across WebUI and docs. Closed due to inactivity; may be reopened if author updates. |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | **Open** | Adds **Exa** as a native `tools.web` / `web_search` provider. Uses Exa’s `POST /search` API with `type: "auto"`, `contents.highlights`, `X-Api-Key` auth, and supports existing date-range filters (`d/w/m/y`) via `startPublishedDate`. |
| [#3309](https://github.com/sipeed/picoclaw/pull/3309) | **Open** | Adds **OrcaRouter** as a first-class OpenAI-compatible provider (`orcarouter`). Targets `https://api.orcarouter.ai/v1`, accepts `vendor/model` IDs, and aligns with existing multi-vendor router pattern. |

**Net progress**: Two provider expansions under review; one localization effort archived as stale.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) — **Matrix sync loop has no reconnection logic** | 7 comments, 2 👍, updated 2026-08-01 (stale label) | **Critical reliability gap**: Matrix `/sync` long-poll dies permanently on any network disruption or homeserver restart. Main process survives → systemd `Restart=on-failure` ineffective. Users experience silent message loss until manual restart. |
| [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) — Exa web search provider | 0 comments, 0 👍, updated 2026-08-01 | **Diversify search providers**: Community wants alternatives to existing search APIs; Exa’s “highlights” and auto-type features are attractive for RAG pipelines. |
| [PR #3309](https://github.com/sipeed/picoclaw/pull/3309) — OrcaRouter provider | 0 comments, 0 👍, created/updated 2026-08-01 | **Multi-vendor model routing**: Users seek a single endpoint that abstracts multiple upstream providers (OpenAI, Anthropic, etc.) via `vendor/model` IDs. |

**Analysis**: The Matrix sync bug (#3203) is the only item with sustained community engagement (7 comments over a month), indicating real production pain. The two provider PRs are fresh and await review.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) Matrix sync loop dies permanently on network/server disruption; no auto-reconnect; systemd restart ineffective | Open, stale-labeled | **No** — no linked PR; issue open since 2026-07-02 |

**Notes**: This is a **single-point-of-failure** for any deployment relying on Matrix channels. Silent death means operators have no alert until they notice missed messages. A fix should implement exponential backoff reconnection in the sync loop and/or expose a health endpoint for external watchdogs.

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Exa web search provider** | [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) | High — clean implementation, follows existing provider pattern, adds unique `highlights` capability. |
| **OrcaRouter (OpenAI-compatible multi-vendor router)** | [PR #3309](https://github.com/sipeed/picoclaw/pull/3309) | High — aligns with existing `openrouter`/`ollama` patterns; single-line config addition. |
| **Traditional Chinese (zh-TW) localization** | [PR #3261](https://github.com/sipeed/picoclaw/pull/3261) (closed stale) | Medium — if author resubmits or maintainer picks up; UI strings already externalized. |
| **Matrix sync auto-reconnect** | [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) | **Should be highest priority** — but no PR yet; may slip if maintainer bandwidth low. |

**Prediction**: Next patch (v0.2.10) will likely include the two provider PRs. Matrix reconnection fix is urgent but unassigned.

## 7. User Feedback Summary
- **Pain point**: Matrix integration is **unreliable in production** — network blips or homeserver restarts cause permanent sync death with no visibility. Operators must manually restart PicoClaw. (Issue #3203, 7 comments)
- **Use case**: Users want **pluggable search providers** for RAG/agent workflows — Exa’s “highlights” and date filters are explicitly requested. (PR #3299)
- **Use case**: **Multi-vendor model routing** via a single OpenAI-compatible endpoint (OrcaRouter) reduces config sprawl. (PR #3309)
- **Localization**: Taiwanese users seek consistent zh-TW terminology across WebUI and docs. (PR #3261, stalled)
- **Sentiment**: Frustration on Matrix stability; enthusiasm for provider extensibility.

## 8. Backlog Watch
| Item | Age | Why It Matters | Maintainer Action Needed |
|------|-----|----------------|--------------------------|
| [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) Matrix sync no reconnection | **31 days** (since 2026-07-02) | Core reliability; affects all Matrix-backed deployments; silent failure mode | **Assign / triage / implement reconnection logic**; remove stale label if still valid |
| [PR #3261](https://github.com/sipeed/picoclaw/pull/3261) zh-TW locale | 17 days stale | Complete localization for Taiwanese users; low risk | Review and merge if translations pass QA, or ping author for updates |
| [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) Exa provider | 7 days | New search capability; ready for review | Code review, test against Exa API, merge |
| [PR #3309](https://github.com/sipeed/picoclaw/pull/3309) OrcaRouter provider | 1 day | Expands model router options; follows established pattern | Quick review, merge |

---

**Bottom line**: PicoClaw’s provider ecosystem is growing (Exa, OrcaRouter), but a **critical Matrix reliability bug remains unfixed for a month**. The project would benefit from triaging #3203 as a blocker for the next patch release.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-02

---

## 1. Today's Overview

NanoClaw shipped a major rollup release **v2.1.54** today, consolidating 37 versions since v2.1.17 with a **breaking change** that unifies iMessage into a single `imessage` channel supporting both Local (Chat SDK) and Hosted (Photon) backends via `/add-imessage`. The project shows high velocity: 12 PRs updated and 2 issues touched in the last 24 hours. Five PRs were merged/closed today, including the iMessage unification, a post-merge safety fix, credential expiry alerts, and a migration bug fix. Two new issues surfaced—one a setup UX regression for non-Claude providers, the other flagging two bundled Qodo skills that depend on an unconfigured SaaS integration. Overall health is strong: active core-team merges, quick turnaround on regressions, and a clear push to harden multi-provider onboarding and channel reliability.

---

## 2. Releases

### **v2.1.54** — Rollup (v2.1.18 → v2.1.54)
- **Breaking Change**: iMessage unified into **one `imessage` channel** with two pluggable backends, installed via single skill `/add-imessage`:
  - **Local** — Chat SDK bridge over this Mac’s `chat.db`
  - **Hosted** — Native [Photon](https://photon.codes) via `spectru` (registration flow now working per #3164)
- **Migration**: Existing iMessage channel configs must be re-added via `/add-imessage`; old separate channel entries are deprecated.
- **Scope**: Aggregates all merges since v2.1.17 tag (37 incremental versions). See [Release v2.1.54](https://github.com/qwibitai/nanoclaw/releases/tag/v2.1.54).

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#2999](https://github.com/qwibitai/nanoclaw/pull/2999) | **Feature Skill** | Unify iMessage into single `imessage` channel (Local + Hosted backends) | **Breaking** — new `/add-imessage` skill replaces prior split channels |
| [#3164](https://github.com/qwibitai/nanoclaw/pull/3164) | **Feature Skill** | Hosted iMessage (Photon): working registration flow, supersedes #2999 | Completes hosted backend; required for v2.1.54 release |
| [#3168](https://github.com/qwibitai/nanoclaw/pull/3168) | **Fix** | Close post-merge safety gaps in release automation | Hardens CI/CD; prevents silent merge failures |
| [#3167](https://github.com/qwibitai/nanoclaw/pull/3167) | **Feature** | Alert when provider credential expires (Codex/ChatGPT vault) | Improves observability; addresses silent `Read-only file system` errors |
| [#3170](https://github.com/qwibitai/nanoclaw/pull/3170) | **Fix** | Dispatch setup failure assist to the **picked provider** (not always Claude) | Fixes UX regression for non-Claude installs (resolves #3169) |

**Net**: Core-channel architecture consolidated, release pipeline hardened, multi-provider onboarding corrected, credential visibility added.

---

## 4. Community Hot Topics

| Item | Activity | Signal |
|------|----------|--------|
| [#3171](https://github.com/qwibitai/nanoclaw/issues/3171) — *Two Qodo skills depend on unconfigured SaaS integration* | **New issue, 0 comments** — but immediately actioned by [#3172](https://github.com/qwibitai/nanoclaw/pull/3172) (PR to remove both skills) | **Maintainer responsiveness**: glifocat opened issue + removal PR same day. Indicates bundled skills audit underway. |
| [#3169](https://github.com/qwibitai/nanoclaw/issues/3169) — *Setup failures on non-Claude installs offer Claude CLI* | **Closed same day** via [#3170](https://github.com/qwibitai/nanoclaw/pull/3170) | **Multi-provider parity** is a live priority; UX regressions fixed within hours. |
| [#2999](https://github.com/qwibitai/nanoclaw/pull/2999) / [#3164](https://github.com/qwibitai/nanoclaw/pull/3164) — *iMessage unification* | Long-running (opened 2026-07-10), merged today | **Channel consolidation** theme; reduces operator confusion, enables hosted backend. |

**Underlying need**: Operators want **provider-agnostic setup**, **reliable channel registration**, and **no dead bundled integrations**.

---

## 5. Bugs & Stability (Reported/Fixed Today)

| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **High** | [#3166](https://github.com/qwibitai/nanoclaw/pull/3166) — `migrate-v2` calls removed `insertTask` (static ESM import → `SyntaxError`) | **Open PR** (petrolette) | #3166 itself (rename to `insertTaskRow`) |
| **High** | [#3174](https://github.com/qwibitai/nanoclaw/pull/3174) — Agent containers fail on **rootless Docker** (two silent failures when host user not in `docker` group) | **Open PR** (Denver901) | #3174 (rootless support) |
| **Medium** | [#2956](https://github.com/qwibitai/nanoclaw/pull/2956) — Duplicate message delivery when agent uses `send_message` tool + repeats in final output | **Open PR** (stumpjumper, 2026-07-05) | #2956 (dedupe in `dispatchResultText`) |
| **Medium** | [#3121](https://github.com/qwibitai/nanoclaw/pull/3121) — Reaction delivery not best-effort (can block) | **Open PR** (zivisaiah, 2026-07-23) | #3121 (make best-effort) |
| **Fixed** | [#3169](https://github.com/qwibitai/nanoclaw/issues/3169) — Non-Claude setup failure prompts for Claude CLI | **Closed** | [#3170](https://github.com/qwibitai/nanoclaw/pull/3170) merged |
| **Fixed** | Credential expiry silent failure (Codex vault) | **Fixed** | [#3167](https://github.com/qwibitai/nanoclaw/pull/3167) merged |

**Watchlist**: Rootless Docker (#3174) and migrate-v2 (#3166) are **blockers for affected environments**; both have fix PRs open. Duplicate delivery (#2956) is long-open (28 days) — candidate for next sprint.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Rootless Docker support** | [#3174](https://github.com/qwibitai/nanoclaw/pull/3174) (PR open, detailed repro) | **High** — security-relevant, clean fix |
| **Migrate-v2 import fix** | [#3166](https://github.com/qwibitai/nanoclaw/pull/3166) (trivial rename) | **High** — blocks fresh installs on v2 |
| **Dedupe agent output** | [#2956](https://github.com/qwibitai/nanoclaw/pull/2956) (long-open, UX polish) | **Medium** — needs review bandwidth |
| **Best-effort reactions** | [#3121](https://github.com/qwibitai/nanoclaw/pull/3121) | **Medium** — low-risk hardening |
| **Remove dead bundled skills** | [#3172](https://github.com/qwibitai/nanoclaw/pull/3172) (Qodo skills) | **High** — PR opened same day as issue |
| **Credential expiry alerts** | [#3167](https://github.com/qwibitai/nanoclaw/pull/3167) — **already merged** | **Done** — in v2.1.54 |

**Prediction**: Next patch (v2.1.55+) will likely include #3166, #3174, #3172, and possibly #2956/#3121 if review capacity allows.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Non-Claude setup broken** | #3169: “Pick codex… setup asks ‘Claude CLI is needed… Install it now?’” | 😡 Frustration — fixed same day |
| **Silent credential expiry** | #3167: “Error: Reconnecting… Read-only file system… nothing else surfaced” | 😟 Anxiety — now alerted via #3167 |
| **Rootless Docker unsupported** | #3174: “Agent containers unusable… two independent failures” | 😕 Blocker for secure deployments |
| **Dead bundled skills** | #3171: “Two qodo skills depend on integration nothing sets up” | 😐 Confusion — removal PR open |
| **iMessage channel fragmentation** | #2999/#3164: Unified channel requested | 👍 Positive — delivered in v2.1.54 |

**Overall**: Users hit **onboarding rough edges** (provider detection, dead skills) and **deployment constraints** (rootless Docker), but fixes land fast. Credential visibility and iMessage unification are **wins**.

---

## 8. Backlog Watch (Long-Unanswered / Needs Maintainer Attention)

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#2956](https://github.com/qwibitai/nanoclaw/pull/2956) — Duplicate delivery dedupe | **28 days** (2026-07-05) | UX polish; affects every agent using `send_message` tool | Open PR, no review |
| [#3121](https://github.com/qwibitai/nanoclaw/pull/3121) — Best-effort reactions | **10 days** (2026-07-23) | Prevents reaction delivery from blocking main loop | Open PR, no review |
| [#3090](https://github.com/qwibitai/nanoclaw/pull/3090) — Prepend top-level context Markdown | **14 days** (2026-07-19) | Template/context rendering fix | Open PR, no review |
| [#3174](https://github.com/qwibitai/nanoclaw/pull/3174) — Rootless Docker | **1 day** (2026-08-01) | Security/compliance blocker; detailed repro provided | **New, needs review** |
| [#3166](https://github.com/qwibitai/nanoclaw/pull/3166) — Migrate-v2 import | **1 day** (2026-08-01) | Blocks fresh v2 installs; trivial fix | **New, needs merge** |

**Action Items for Maintainers**:
1. **Merge #3166** (trivial, blocks installs)
2. **Review #3174** (rootless Docker — growing deployment pattern)
3. **Triage #2956 / #3121 / #3090** (stale PRs with clear fixes)
4. **Merge #3172** (remove dead Qodo skills — already approved by author)

---

*Digest generated from GitHub data as of 2026-08-02. Links point to live issues/PRs on `qwibitai/nanoclaw`.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-02

## 1. Today's Overview
IronClaw is in the midst of a large-scale **"Reborn" architecture refactoring** organized into sequential Waves (WS1–WS5). Over the last 24 hours, **12 issues** and **22 PRs** were updated (7 merged/closed), with zero new releases. Activity centers on: closing out Wave 1 CI-gate debt, advancing Wave 2 contract inversions and crate splits, fixing a Postgres/libSQL performance regression, and prototyping a new OOBE onboarding flow. The project shows high core-contributor velocity but carries several open performance and correctness risks (p95 latency regressions, CI flakiness, coverage gaps) that are explicitly tracked in new issues.

## 2. Releases
**No new releases** in the last 24 hours. The most recent release PR (#5598) remains open and lists breaking changes for `ironclaw_common` 0.5.0 and `ironclaw_skills` 0.4.0.

## 3. Project Progress — Merged / Closed PRs Today
| PR | Title | Scope | Significance |
|----|-------|-------|--------------|
| [#6996](https://github.com/nearai/ironclaw/pull/6996) | **ci(gates): close #6963 — inventory-driven discovery + fail-closed across remaining path-keyed gates** | CI, docs | Completes the Wave 1 CI-gate overhaul: replaces eight fragile flat-tree gates with inventory-driven, fail-closed discovery. Closes tracking issue #6963. |
| [#6998](https://github.com/nearai/ironclaw/pull/6998) | **refactor(contracts): invert extension_host's product-facing ports onto product_contracts (WS2.1)** | deps, docs | Wave 2 slot 1: moves `ironclaw_extension_host` to depend on `ironclaw_product_contracts` instead of `ironclaw_product`. Behavior-free definition move. |
| [#7002](https://github.com/nearai/ironclaw/pull/7002) | **refactor(contracts): invert webui + openai_compat onto product_contracts (WS5)** | deps, docs | Wave 2 slot 3: inverts WebUI and OpenAI-compat ports onto `product_contracts`; merges `ProductSurfaceFailure` linchpin from #7000. |
| [#6995](https://github.com/nearai/ironclaw/pull/6995) | **docs(target-architecture): Wave 1 truth audit — reconcile decision record with shipped reality** | docs | Audits `docs/reborn/target-architecture/` against merged `main` at `a50ad06`; closes seven Wave 1 PRs. |
| [#6761](https://github.com/nearai/ironclaw/pull/6761) | **test: cover generic outbound registration** | test | Adds regression test for generic channel outbound-target provider registration. |

> **Note:** #7000 (ProductSurfaceFailure linchpin) shows as OPEN but is described as “already merged down into” #7002; treat as effectively landed.

## 4. Community Hot Topics — Most Active Issues / PRs
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#6963](https://github.com/nearai/ironclaw/issues/6963) | Issue | 7 | **Tracking CI-gate debt**: Eight path-keyed gates missed by WS10 (#6946); now resolved by #6996. |
| [#6973](https://github.com/nearai/ironclaw/pull/6973) | PR | — | **Postgres capacity recovery**: p95 latency regressed 3.74s → 12.0s after row-native process journal (#6696). Fix includes batching, connection-pool tuning, and async journal drain. |
| [#6974](https://github.com/nearai/ironclaw/issues/6974) | Issue | 2 | **libSQL tool-heavy stress pathology**: p95 37–135 s after #6696; nightly suite now completes but far exceeds 2.5 s SLO. |
| [#6997](https://github.com/nearai/ironclaw/pull/6997) | PR | — | **Anthropic cache_control breakpoints**: Explicit cache breakpoints on both transports to stop prompt-prefix churn (P0 of pi-harness adoption). |
| [#7001](https://github.com/nearai/ironclaw/pull/7001) | PR | — | **Byte-stable system prefix**: Keeps cached system prompt byte-identical across model calls (companion to #6997). |

**Underlying pattern**: The team is systematically eliminating **cache-churn**, **CI fragility**, and **architecture-layer violations** introduced by prior large migrations. Performance regressions in hosted Postgres and libSQL are the highest-severity operational risks.

## 5. Bugs & Stability — Regressions & Crashes Reported Today
| Severity | Issue | Description | Fix PR / Status |
|----------|-------|-------------|-----------------|
| **Critical** | [#6974](https://github.com/nearai/ironclaw/issues/6974) | libSQL `thread_store_writes` p95 37–135 s in tool-heavy stress (ops 20 / c4 / u50). Blocks nightly CI from passing within 20 min timeout. | No fix PR yet; split out of #6973. |
| **High** | [#6973](https://github.com/nearai/ironclaw/pull/6973) | Hosted Postgres API p95 3.74 s → 12.0 s (send_message 275 ms → 4.78 s) after #6696. Mock-LLM latency flat. | PR #6973 open (batching, pool tuning, async drain). |
| **High** | [#6978](https://github.com/nearai/ironclaw/issues/6978) | `reborn-tests.yml` `workflow_dispatch` runs fail roll-up because `critical-mutation` job is skipped but disallowed. Structural CI flaw. | No fix PR; requires workflow `if:` condition change. |
| **Medium** | [#7006](https://github.com/nearai/ironclaw/issues/7006) | Changed-coverage gate fails on ~180 lines of steering-queue error paths (fault-injection, FS, serialization) that integration harness cannot execute. | No fix PR; may require gate exclusion or harness extension. |
| **Medium** | [#7011](https://github.com/nearai/ironclaw/issues/7011) | Five pre-existing defects in `extension_manager` split (WS2.4): false `WriteFilesystem` effect, untested lock predicate, missing dispatch tests, dropped error causes. | No fix PR; all in byte-for-byte moved code. |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **OrcaRouter as built-in LLM provider** | [#7009](https://github.com/nearai/ironclaw/issues/7009) | High — providers.json already includes 9 multi-provider gateways; OrcaRouter is a missing peer. |
| **Time-aware append-only rollover context** | [#7012](https://github.com/nearai/ironclaw/issues/7012) | High — follow-up to #7001/#6997; part of pi-harness adoption (P0). |
| **OOBE automation-tasks backend wiring** | [#6993](https://github.com/nearai/ironclaw/issues/6993) | Medium — UI prototype (#6994) landed; backend contract exists. |
| **IronHub deep-link register/install + private manifest** | [#6780](https://github.com/nearai/ironclaw/pull/6780) | Medium — re-port of #5409; design approved, stacked on current extension-host layout. |
| **Budget approval-as-blocked-gate + usage settings** | [#5982](https://github.com/nearai/ironclaw/pull/5982) | Low–Medium — split 2/2, stacked on queue-steering PR #5981 (still open since Jul 11). |

## 7. User Feedback Summary
- **Pain points**: CI flakiness on `workflow_dispatch` (#6978), opaque coverage-gate failures on error paths (#7006), multi-minute libSQL latencies under tool load (#6974).
- **Use cases driving work**:  
  - **Prompt-cache stability** for Anthropic (pi-harness adoption) → #6997, #7001, #7012.  
  - **Multi-provider LLM routing** → #7009 (OrcaRouter).  
  - **First-user onboarding** → #6993/#6994 (OOBE automation tasks).  
- **Satisfaction signals**: Wave 1 audit (#6995) and CI-gate closure (#6996) show progress on architectural debt; contributors explicitly note “behavior-free” moves and “clean isolate” test runs.

## 8. Backlog Watch — Stale / Unanswered Important Items
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5981](https://github.com/nearai/ironclaw/pull/5981) | 22 days (opened 2026-07-11) | **Queued-message steering** (XL, medium risk) — blocks budget-approval PR #5982; turn-boundary races fixed but still awaiting review/merge. |
| [#5982](https://github.com/nearai/ironclaw/pull/5982) | 22 days | **Budget approval gate + usage settings** — depends on #5981. |
| [#6780](https://github.com/nearai/ironclaw/pull/6780) | 5 days | **IronHub register/install gateway** — re-port with approved design; no recent reviewer activity. |
| [#6917](https://github.com/nearai/ironclaw/pull/6917) | 3 days | **WebUI workspace file links in authenticated previews** — UX/security fix; no comments. |
| [#6999](https://github.com/nearai/ironclaw/issues/6999) | 1 day | **reborn_dependency_boundaries gap** — server-lifecycle rule doesn’t cover WebChat v2 route surface; architecture call needed before gate repoint. |

---
*Digest generated from GitHub API data for nearai/ironclaw on 2026-08-02. All links point to live GitHub items.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-02

---

## 1. Today's Overview
LobsterAI showed **maintenance-oriented activity** in the last 24 hours with **zero new releases, zero merged PRs, and six stale issues auto-closed**. The only active issue (#1223) and two open PRs (#1224, #2358) all carry the `[stale]` label, indicating prolonged inactivity. The project appears to be in a **low-velocity maintenance phase** with community-reported bugs accumulating but not being actively resolved. The two open PRs address i18n/UX fixes and session rename feedback — both quality-of-life improvements rather than core feature work.

---

## 2. Releases
**No new releases** published in the last 24 hours. The project’s latest version remains unchanged.

---

## 3. Project Progress
**No PRs merged or closed today.** The two open PRs remain in review limbo:

| PR | Title | Status | Target Issue | Last Update |
|----|-------|--------|--------------|-------------|
| [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) | `fix(agent): 修复 i18n 硬编码、Agent 弹窗 Escape 键支持及删除防重复点击` | Open (stale) | Closes [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) | 2026-08-01 |
| [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | `fix(cowork): show feedback when session rename fails` | Open (stale) | Fixes [#670](https://github.com/netease-youdao/LobsterAI/issues/670) | 2026-08-01 |

**No feature advancements or bug fixes landed today.** Both PRs have been open since April and July respectively without maintainer action.

---

## 4. Community Hot Topics
The most engaging items (by comments/reactions) are all **stale issues auto-closed today**, reflecting historical pain points rather than current discussion:

| Item | Type | Comments | Reactions | Core Need |
|------|------|----------|-----------|-----------|
| [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | Issue | 2 | 1 👍 | **MCP custom HTTP support** — Users need non-SSE MCP servers to work in OpenClaw engine |
| [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | Issue | 2 | 0 | **Large image upload (3MB+)** — Parsing fails catastrophically, breaking entire session |
| [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | Issue | 2 | 0 | **False token limit error** — Two-character input flagged as "exceeds model limit" |
| [#1302](https://github.com/netease-youdao/LobsterAI/issues/1302) | Issue | 2 | 0 | **Code block line numbers** — Dev productivity feature for reading/debugging long code |
| [#1305](https://github.com/netease-youdao/LobsterAI/issues/1305) | Issue | 2 | 0 | **Scheduled task history UI** — Deleted task titles display incorrectly in history |
| [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) | Issue | 2 | 0 | **Model provider config UX** — Edit panel locks after closing, preventing further edits |

**Underlying theme:** Users are hitting **integration gaps (MCP), media handling limits, i18n/UX polish issues, and state-management bugs** — all signs of a product scaling beyond its current validation coverage.

---

## 5. Bugs & Stability
Six bugs were reported (all in April) and auto-closed as stale today. Ranked by **user impact severity**:

| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| **Critical** | [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | 3MB image upload crashes session irreversibly; "new task still errors, whole app unusable" | ❌ No |
| **High** | [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | Custom HTTP MCP servers non-functional in OpenClaw; only SSE works | ❌ No |
| **High** | [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | False "input too long" error on 2-char input — blocks all usage | ❌ No |
| **Medium** | [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) | Model provider config panel becomes read-only after first edit-close cycle | ❌ No |
| **Low** | [#1305](https://github.com/netease-youdao/LobsterAI/issues/1305) | Deleted scheduled task shows wrong title in history tab | ❌ No |
| **Low** | [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) | Hardcoded Chinese in prompt sent to AI; missing Escape key close & double-click protection | ✅ **PR [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) open** |

**Zero active bug-fix PRs** for the five highest-severity issues. Only the i18n/UX bug (#1223) has a pending fix.

---

## 6. Feature Requests & Roadmap Signals
One explicit feature request surfaced in the stale batch:

| Request | Issue | Likelihood for Next Version |
|---------|-------|-----------------------------|
| **Code block line number toggle** (per-language & plain code) | [#1302](https://github.com/netease-youdao/LobsterAI/issues/1302) | 🟡 **Medium** — Well-scoped, uses existing `react-syntax-highlighter` prop; low risk, high dev-value |
| **MCP custom HTTP transport support** | [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | 🔴 **Low** — Architectural (OpenClaw engine), no PR, stale |
| **Session rename failure feedback** | [#670](https://github.com/netease-youdao/LobsterAI/issues/670) (via PR [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358)) | 🟢 **High** — PR exists, localized, non-breaking; only needs review/merge |

**Prediction:** Only the session rename feedback (PR #2358) and possibly the line-number toggle (if a PR emerges) are actionable for a near-term patch. Core MCP/image/token bugs require engineering investment not currently visible.

---

## 7. User Feedback Summary
**Pain points from closed issues (real user reports):**

| Area | User Voice | Impact |
|------|------------|--------|
| **Media handling** | "Upload 3M long image → page errors → new task still errors → whole app unusable" ([#1296](https://github.com/netease-youdao/LobsterAI/issues/1296)) | **App-breaking**; blocks vision workflows |
| **Integration** | "Custom MCP HTTP not working in OpenClaw, only SSE works" ([#1293](https://github.com/netease-youdao/LobsterAI/issues/1293)) | **Blocks custom tooling**; forces SSE-only infra |
| **Token accounting** | "Model test passes, but 2-char question → 'input too long, exceeds model limit'" ([#1298](https://github.com/netease-youdao/LobsterAI/issues/1298)) | **False positive**; renders chat unusable |
| **i18n** | "Hardcoded '输入文件' leaks into English prompts" ([#1223](https://github.com/netease-youdao/LobsterAI/issues/1223)) | **Trust/quality issue** for non-CN users |
| **UX polish** | "Escape key doesn't close Agent modal; delete button lacks double-click guard" ([#1223](https://github.com/netease-youdao/LobsterAI/issues/1223)) | **Frustration**; poor keyboard/accessibility support |
| **State management** | "After closing model provider edit panel, can't edit another — inputs grayed out" ([#1307](https://github.com/netease-youdao/LobsterAI/issues/1307)) | **Workflow break**; requires app restart? |

**Sentiment:** **Frustrated but detailed** — users provide screenshots, steps, and code references. They expect a polished, multilingual, media-capable agent platform. The stale closures without resolution risk eroding trust.

---

## 8. Backlog Watch — Maintainer Attention Needed
**High-priority items languishing without response:**

| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | 4 months | **Crash on 3MB image** — core media pipeline failure | **Triage immediately**; assign to media/upload owner |
| [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | 4 months | **MCP HTTP transport gap** — limits extensibility | **Design review** for OpenClaw MCP registry |
| [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | 4 months | **Token counting bug** — false limit errors | **Debug token estimator**; likely off-by-one or config mismatch |
| [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) | 4 months | **Settings panel state corruption** — blocks config changes | **Frontend state audit** for provider forms |
| [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) | 4 months | **i18n + UX fix ready** — low risk, high polish value | **Review & merge** — unblocks English users |
| [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | 2 weeks | **Session rename feedback** — completes UX loop | **Review & merge** — closes #670 |

**Recommendation:** The project needs a **triage sprint** to separate "stale but critical" from "stale and wontfix." Auto-closing user-reported crashes (#1296, #1298) without comment damages credibility. Prioritize merging the two ready PRs (#1224, #2358) to signal responsiveness.

---

*Digest generated from GitHub data as of 2026-08-02. All links point to live items on github.com/netease-youdao/LobsterAI.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-02

## 1. Today's Overview
Moltis saw moderate maintenance activity over the past 24 hours with **3 pull requests updated** (1 open, 2 merged/closed) and **no issue activity**. The merged PRs deliver significant backend infrastructure (instrumentation/feedback collection) and a security hardening for channel operators, while the open PR addresses a long-standing UX limitation around the `main` session. No new releases were published. The project appears focused on hardening core session/channel semantics and adding observability foundations.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
### Merged / Closed PRs (2026-08-01)
| PR | Title | Author | Summary |
|----|-------|--------|---------|
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | **Add instrumentation and feedback collection infrastructure** | penso | Adds backend-neutral agent instrumentation, Langfuse v4 export, OTLP backends, and end-user reaction feedback. Records immutable completion-only turns/observations with streaming/non-streaming parity, provider failover attribution, cache-aware token usage, reasoning, and tool-call metadata. |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | **fix(channels): gate `/sh` and privileged tools behind a per-account operators list** | penso | Separates channel *access* from *privilege* by introducing an explicit per-account `operators` list. Enforces the boundary across commands, callbacks, queue replay, chat execution, and external integrations. Closes a privilege-escalation vector where any allowlisted sender could reach host tools. |

### Open PR (updated 2026-08-01)
| PR | Title | Author | Summary |
|----|-------|--------|---------|
| [#1182](https://github.com/moltis-org/moltis/pull/1182) | **fix(sessions): allow deleting and archiving the main session** | shixi-li | Removes the `main` session guard in `delete_impl` and `is_archivable_entry` (gateway). The current-active-channel-session archive restriction remains; `sessions.clear_all` still preserves `main`/channel-bound sessions. Fixes #1132. |

## 4. Community Hot Topics
**No issues or PRs with comments/reactions recorded in the last 24 hours.** The three PRs above have zero comments and zero reactions at the time of this snapshot, indicating either early review stage or low community engagement on these specific changes.

## 5. Bugs & Stability
**No new bug reports, crashes, or regressions filed in the last 24 hours.**  
The two merged PRs (#1174, #1170) are feature/infrastructure work and a security fix respectively—not bug fixes for reported crashes. The open PR #1182 addresses a UX limitation (inability to delete/archive `main` session) rather than a stability defect.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Session lifecycle parity** – allow `main` session to be deleted/archived like others | PR #1182 (open, fixes #1132) | High – small, targeted fix; likely to land soon |
| **Full observability stack** – Langfuse v4, OTLP, user feedback | PR #1174 (merged) | Already merged; will ship in next cut |
| **Privilege separation for channels** – explicit operator list | PR #1170 (merged) | Already merged; will ship in next cut |

No new feature requests appeared in issues today.

## 7. User Feedback Summary
**No direct user feedback (issues, discussions, or PR comments) captured in the last 24 hours.**  
The merged instrumentation PR (#1174) *enables* future feedback collection (end-user reactions), but no actual user pain points or use-case reports surfaced today.

## 8. Backlog Watch
**No long-unanswered issues or stale PRs highlighted in the provided data.**  
All three PRs were created within the last week (2026-07-26 to 2026-08-01) and have recent activity. If the project maintains a separate backlog of older issues, they are not visible in today’s 24-hour window.

---

*Digest generated from GitHub data covering 2026-08-01 00:00 → 2026-08-02 00:00 UTC. Links point to the live GitHub records.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-02

---

## 1. Today's Overview

CoPaw shows **high development velocity** with 20 total activities (9 issues, 11 PRs) in the last 24 hours and **no new releases**. The project is in active maintenance mode for v2.0.x, with contributors addressing a cluster of regression bugs in memory management, ACP protocol handling, and provider integrations. One PR (#6598) was merged fixing skill tag persistence, while 10 new PRs — many from first-time contributors — target critical crashes and UX gaps. Community engagement remains issue-driven with low reaction counts, suggesting a technical user base reporting regressions rather than feature voting.

---

## 2. Releases

**No new releases** in the last 24 hours. The project remains on v2.0.1 (desktop) with agentscope 2.0.4.post1 as the referenced dependency.

---

## 3. Project Progress

### Merged / Closed Today
| PR | Title | Impact |
|----|-------|--------|
| [#6598](https://github.com/agentscope-ai/QwenPaw/pull/6598) | **fix(skills): preserve plugin-sourced skill tags across reconcile cycles** | Fixes #6537 — skill tags from plugins no longer disappear on restart. Manifest reconciliation now respects `plugin:` source entries. |

### Notable Open PRs Advancing Core Features
| PR | Status | Target Issue | Key Change |
|----|--------|--------------|------------|
| [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) | Open | [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) | **Memory**: Auto-compression (Scroll) now triggers `summarize_when_compact` flow — fixes regression where only manual `/compact` worked. |
| [#6628](https://github.com/agentscope-ai/QwenPaw/pull/6628) | Open | [#6541](https://github.com/agentscope-ai/QwenPaw/issues/6541) | **Scroll**: Compressed context placeholder now uses `SystemMsg` (not `role=user`), resolving OpenAI-compatible API 400 errors. |
| [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) | Open | [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) | **ACP**: Prevents text loss when `session/update` notification races `session/prompt` response in same TCP segment. |
| [#6620](https://github.com/agentscope-ai/QwenPaw/pull/6620) | Open | [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) | **Providers**: Fixes crash on Gemini `thought_signature` by not mutating strict `ToolCallBlock` model. |
| [#6630](https://github.com/agentscope-ai/QwenPaw/pull/6630) | Open | [#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) | **Agents**: Empty model responses now reported to user instead of silent failure. |
| [#6631](https://github.com/agentscope-ai/QwenPaw/pull/6631) | Open | [#6551](https://github.com/agentscope-ai/QwenPaw/issues/6551) | **Providers**: Aliyun coding plan models aligned with official site (adds `qwen3.7-plus`, removes unsupported `glm-5.x`). |
| [#6622](https://github.com/agentscope-ai/QwenPaw/pull/6622) | Open | — | **Feature**: Adds **OrcaRouter** as built-in OpenAI-compatible provider (first-time contributor). |
| [#6632](https://github.com/agentscope-ai/QwenPaw/pull/6632) | Open | [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) | **Skills**: Duplicate fix for plugin-sourced skill tag persistence (follows merged #6598). |

---

## 4. Community Hot Topics

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) | Enhancement | 2 | **Unified cleanup UI** — users demand global storage management (auto-memory, backups, workspace dirs, inbox) instead of per-agent manual cleanup. |
| [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) | Enhancement | 2 | **Global hotkey + floating input** (Doubao/Raycast style) — reduce friction for quick questions; main window too heavy for "ask one thing". |
| [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) | Question/Feedback | 1 | **Multi-agent onboarding gap** — Default Agent doesn't auto-delegate to created agents without explicit `PROFILE.md` instructions; docs don't highlight this. |
| [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) | Question | 2 | **`nohup`/`&` shell commands hang agent** — process detachment breaks tool return; blocks background task workflows. |

**Analysis**: Top requests center on **storage hygiene** (#6593), **lightweight access** (#6568), and **discoverability of multi-agent power** (#6621). The `nohup` issue (#6480) reveals a shell execution limitation affecting automation-heavy users.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | PR Fix | Description |
|----------|-------|--------|-------------|
| **Critical (Crash)** | [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) | [#6620](https://github.com/agentscope-ai/QwenPaw/pull/6620) | `ToolCallBlock` lacks `extra_content` field — crashes **every** Gemini streaming request with thought signatures. |
| **Critical (Data Loss)** | [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) | [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) | ACP `delegate_external_agent` returns "completed without text output" when notification races response — **silent text loss**. |
| **High (Regression)** | [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) | [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) | Auto-compression (Scroll) **does not trigger** `summarize_when_compact` memory flow; manual `/compact` works. |
| **High (API Break)** | [#6541](https://github.com/agentscope-ai/QwenPaw/issues/6541) | [#6628](https://github.com/agentscope-ai/QwenPaw/pull/6628) | Compressed context injected as `role=user` → **HTTP 400** on DeepSeek/OpenAI-compatible APIs. |
| **Medium (UX Regression)** | [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) | [#6598](https://github.com/agentscope-ai/QwenPaw/pull/6598) (merged), [#6632](https://github.com/agentscope-ai/QwenPaw/pull/6632) | Plugin-sourced skill tags **disappear on restart** — manifest reconciliation deletes non-disk entries. |
| **Medium (Silent Failure)** | [#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) | [#6630](https://github.com/agentscope-ai/QwenPaw/pull/6630) | Empty model responses **silently swallowed** — no user feedback, especially problematic near context limits. |
| **Low (CI Gate)** | [#6626](https://github.com/agentscope-ai/QwenPaw/issues/6626) | — | "Real behavior proof" CI gate strips fenced evidence blocks → false PR rejections. |

**All critical/high bugs have open fix PRs** — strong signal of responsive triage.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for Next Version | Rationale |
|---------|-------|-----------------------------|-----------|
| **Global cleanup dashboard** | [#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) | 🟡 Medium | High user pain (storage bloat), but requires UI + backend coordination; no PR yet. |
| **Global hotkey + floating input** | [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) | 🟢 High | Codebase-ready (`console/src-tauri` checked), strong UX precedent (Doubao/Raycast), low complexity. |
| **OrcaRouter built-in provider** | [#6622](https://github.com/agentscope-ai/QwenPaw/pull/6622) | 🟢 High | PR open, first-time contributor, trivial integration (OpenAI-compatible). |
| **Multi-agent onboarding fix** | [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) | 🟡 Medium | Docs + default config change; no code PR yet but clear actionable. |
| **LoongSuite tracing integration** | [#6627](https://github.com/agentscope-ai/QwenPaw/issues/6627) | 🔴 Low | Niche observability ask; no PR, requires SDK wiring. |

**Prediction**: v2.0.2 will likely ship the **crash fixes** (#6620, #6623, #6629, #6628), **OrcaRouter** (#6622), and **empty response reporting** (#6630). Floating input (#6568) is a strong candidate for v2.1.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Storage bloat & no cleanup UI** | #6593: "long-term use → chaotic, huge space; manual cleanup risky" | High — affects all long-running users; workspace dirs undeletable. |
| **Multi-agent not self-activating** | #6621: "50+ convos before discovering Default Agent needs explicit PROFILE.md" | High — wasted hours, feature appears broken. |
| **Shell background commands hang** | #6480: `nohup`/`&` never returns to idle | Medium — blocks automation/devops workflows. |
| **Silent failures erode trust** | #6601, #6625: empty responses & lost ACP text with no notice | High — users unaware of model/API failures. |
| **Gemini crashes on thought signatures** | #6619: every streaming request crashes | Critical for Gemini users. |

**Satisfaction signals**: Users file detailed bugs with reproduction steps (e.g., #6619, #6624, #6625) — indicates **investment in the product** but frustration with v2.0 regressions.

---

## 8. Backlog Watch (Stale but Important)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5490](https://github.com/agentscope-ai/QwenPaw/pull/5490) | Open since 2026-06-24 (39 days) | **Tool-card image gallery** — major console UX upgrade (inline images, navigation); stalled despite clear value. |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | Open since 2026-07-21 (12 days) | **Unified provider/model/routing architecture** — foundational refactor for #6167; large scope, needs maintainer review. |
| [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) | Open since 2026-07-26 (7 days) | **`nohup` shell hang** — no PR, blocks background execution; may need Tauri-side process handling fix. |
| [#6626](https://github.com/agentscope-ai/QwenPaw/issues/6626) | Open since 2026-08-01 | **CI gate false positives** — blocks legitimate PRs with fenced evidence; process debt. |

**Recommendation**: Prioritize review of #5490 (UX) and #6302 (architecture) before they diverge further. Assign #6480 to Tauri/shell expert.

---

## Health Indicators

| Metric | Status |
|--------|--------|
| **Bug fix velocity** | 🟢 High — 7 critical/high bugs with PRs in 24h |
| **First-time contributor influx** | 🟢 3/11 PRs today from new contributors |
| **Release cadence** | 🟡 Stalled — no release since v2.0.1; fixes accumulating |
| **Community responsiveness** | 🟡 Low reactions/comments — technical users, not broad community |
| **Technical debt** | 🟡 Rising — CI gate (#6626), stale mega-PRs (#5490, #6302) |

**Overall**: **Active, healthy maintenance phase** with strong bug-fix throughput. Next release should consolidate v2.0 stability before major features.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-02

## 1. Today's Overview
ZeroClaw shows **high development velocity** with 50 active PRs and 8 updated issues in the last 24 hours, but **zero merges or releases** — indicating a heavy review/integration backlog. The project is deep in architectural work: sealing the tool registry, adding OpenAI Chat Completions compatibility, hardening per-agent security boundaries (sessions, knowledge graph, WhatsApp/Telegram auth), and building out an evaluation framework. No v0.8.5 release has shipped yet (tracker #9459), though a v0.8.4 version bump PR (#9648) opened today. Overall health: **active but bottlenecked on review capacity**; several S0-security issues need urgent attention.

---

## 2. Releases
**No new releases today.**  
- Latest release tracker: **#9459** — v0.8.5 weekly non-breaking release (updated 2026-08-01, 0 comments).  
- Version bump to **v0.8.4** proposed in **PR #9648** (opened today, 2026-08-02) — regenerates installer, container, package, desktop, and docs surfaces.

---

## 3. Project Progress (Merged/Closed Today)
**No PRs merged or closed in the last 24h.** All 50 updated PRs remain open. Key in-flight workstreams:
- **Security hardening**: ScopedToolRegistry seal (**PR #9319**), per-agent session/channel ownership fixes (**#9646**, **#9647**), WhatsApp `allowed_groups` default change (**#9397**), Telegram `allow_groups` config (**PR #9634**).
- **OpenAI compat**: RFC **#8603** (13 comments) + implementation work tracked.
- **Evaluation framework**: 6 stacked PRs (**#9220–#9248**) adding run receipts, baselines, JUnit XML, LLM-judge grader, memory seeding.
- **Platform support**: PowerShell native shell on Windows (**PR #9182**), computer-use drivers for macOS/Linux/Windows (**PR #9091**), secure relay transport (**PR #9080**).
- **Channel cleanup**: WATI channel removal (**PR #9571**).
- **Anthropic OAuth**: Stored profile support (**PR #9420**).
- **Slack UX**: Agent lifecycle progress states (**PR #8985**).
- **Skills**: Compact injection default (**PR #8313**).
- **CI**: Blacksmith runners for compile-heavy jobs (**PR #9115**).

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| **[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** RFC: OpenAI Chat Completions compatibility adapter | Issue | 13 👍0 | **Interop**: Enable ZeroClaw agents to work with Open WebUI, LobeChat, Continue.dev, Aider, LangChain, OpenAI SDK — critical for ecosystem adoption. |
| **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** Tracker: Maintainer decision queue for RFCs/design issues | Issue | 7 👍0 | **Governance**: Clear decision pipeline for RFCs; signals maintainer bandwidth constraints. |
| **[#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)** RFC: Treat empty WhatsApp `allowed_groups` as permit-none | Issue | 5 👍0 | **Security default flip**: Change dangerous default (empty = all groups) to deny-by-default; high-risk, needs maintainer review. |
| **[#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646)** Bug: Session/channel tools lack per-agent ownership scoping | Issue | 1 👍0 | **S0 security**: Agents can access other agents' sessions/channels via model-supplied IDs — active exploit surface. |
| **[#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647)** Bug: Knowledge graph has no per-agent attribution | Issue | 0 👍0 | **S0 security**: Global shared knowledge graph — any agent reads/mutates another's memory. |
| **[PR #9319](https://github.com/zeroclaw-labs/zeroclaw/pull/9319)** Refactor: Seal engine tool registry as ScopedToolRegistry | PR | — | **Architecture**: Foundational change to enforce per-agent tool scoping; blocks/closes several security issues. |

**Underlying theme**: **Security isolation between agents** (sessions, knowledge, tools, channels) and **OpenAI ecosystem compatibility** are the two dominant community pressures.

---

## 5. Bugs & Stability (Reported/Updated Today, Ranked by Severity)

| Severity | Issue | Component | Status | Fix PR? |
|----------|-------|-----------|--------|---------|
| **S0 — Data loss / Security risk** | **[#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646)** Session/channel read+write tools lack per-agent ownership scoping (`sessions_list`, `history`, `send`, `discord_search`) | tools | Open, 1 comment | No direct PR yet; blocked on **#9319** (ScopedToolRegistry) |
| **S0 — Data loss / Security risk** | **[#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647)** Knowledge graph globally shared, no per-agent attribution | memory | Open, 0 comments | No PR yet |
| **High / Security** | **[#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)** WhatsApp `allowed_groups` empty = permit all groups (should be permit-none) | channel:whatsapp | Open, 5 comments, needs maintainer review | No PR yet; RFC stage |
| **High** | **[#9037](https://github.com/zeroclaw-labs/zeroclaw/pull/9037)** Provider terminal marker `<eom>` leaks into transcript/history (OpenRouter → ai21/jamba) | runtime | PR open, needs author action | **PR #9037** (fix: strip trailing markers) |
| **High** | **[#8546](https://github.com/zeroclaw-labs/zeroclaw/pull/8546)** CLI status fragments not localized | cli | PR open, stale-candidate | **PR #8546** |
| **High** | **[#8576](https://github.com/zeroclaw-labs/zeroclaw/pull/8576)** OpenAI STT env-var credentials ignored | channels | PR open, stale-candidate | **PR #8576** |

**Note**: The two S0 issues (#9646, #9647) are **fresh (created 2026-08-01)** and have no fix PRs — they depend on the ScopedToolRegistry work in **PR #9319** (open since 2026-07-23).

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for v0.8.5/v0.9 |
|--------|--------|----------------------------|
| **OpenAI Chat Completions adapter** | RFC **#8603** (13 comments, high risk, p2) | **High** — ecosystem demand, active design |
| **Per-agent security boundaries** (sessions, knowledge, tools) | S0 issues **#9646**, **#9647** + **PR #9319** | **Critical** — security regressions block releases |
| **Evaluation framework** (receipts, baselines, JUnit, LLM-judge, memory seeds) | 6 stacked PRs **#9220–#9248** | **High** — principal contributor, diagnostic-first, near-ready |
| **Computer-use tool** (native macOS/Linux/Windows drivers) | **PR #9091** (XL, high risk) | **Medium** — feature-gated, needs security review |
| **Secure relay transport + browser enrollment** | **PR #9080** (XL, high risk) | **Medium** — foundational for remote/desktop |
| **PowerShell native shell on Windows** | **PR #9182** (XL) | **High** — Windows UX parity |
| **Anthropic stored OAuth profiles** | **PR #9420** (XL) | **High** — auth UX improvement |
| **Slack agent lifecycle progress states** | **PR #8985** (XL) | **High** — visible UX for long runs |
| **Telegram `allow_groups` config + mention_only fix** | **PR #9634** (S) | **High** — small, security-relevant |
| **WATI channel removal** | **PR #9571** (XL) | **Done** — cleanup, reduces surface |
| **Skills compact injection default** | **PR #8313** (XL) | **Medium** — deprecation window open |
| **Blog RSS/Atom feed** | **#9628** (docs, low risk) | **Trivial** — easy win |

**Prediction**: v0.8.5 will likely include ScopedToolRegistry (**#9319**), OpenAI compat RFC resolution, evaluation framework slices, PowerShell, Anthropic OAuth, Slack lifecycle, Telegram fix, and WATI removal. Computer-use and relay transport may slip to v0.9.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **No OpenAI-compatible API** | RFC **#8603**: "Clients that speak OpenAI Chat Completions — Open WebUI, LobeChat, Continue.dev, Aider, LangChain, OpenAI SDK — cannot use ZeroClaw" | Blocks adoption in existing AI toolchains |
| **Agent isolation broken** | **#9646**, **#9647**: "Any agent can reach another agent's sessions/history/knowledge" — S0 severity | Multi-agent deployments unsafe |
| **Dangerous WhatsApp default** | **#9397**: Empty `allowed_groups` = all groups; users unaware | Data leakage risk |
| **Provider artifacts in UI** | **#9037**: `<eom>` marker visible in Code tab & history | Degrades UX, pollutes context |
| **No blog RSS** | **#9628**: "Missing rss feed - please add to make it easier to follow" | Low-friction community ask |
| **Windows shell friction** | **PR #9182**: Historical `cmd.exe /C` default, no PowerShell native support | Windows dev friction |
| **Anthropic OAuth not persisted** | **PR #9420**: Only inline tokens supported, no stored profiles | Re-auth friction |

**Satisfaction signals**: Active RFC engagement (13 comments on #8603), principal contributor driving eval framework, community PRs for Windows/Telegram/Slack — indicates **invested user base** but **security/isolation gaps erode trust**.

---

## 8. Backlog Watch (Long-Open, High-Value, Needs Maintainer Attention)

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| **[PR #9319](https://github.com/zeroclaw-labs/zeroclaw/pull/9319)** Refactor: Seal engine tool registry as ScopedToolRegistry | 10 days (2026-07-23) | **Linchpin for S0 fixes** (#9646, #9647), per-agent tool scoping, security model | XL refactor, needs author action, high risk |
| **[RFC #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** OpenAI Chat Completions compatibility adapter | 31 days (2026-07-02) | Ecosystem interop, top community ask | Design complexity, high risk, needs maintainer decision |
| **[PR #9080](https://github.com/zeroclaw-labs/zeroclaw/pull/9080)** feat(relay): secure transport + browser enrollment | 18 days (2026-07-15) | Remote/desktop foundation, mutual TLS, CA, revocation | XL, security-sensitive, needs author action |
| **[PR #9091](https://github.com/zeroclaw-labs/zeroclaw/pull/9091)** feat(computer-use): native macOS/Linux/Windows drivers | 18 days (2026-07-15) | Desktop automation, high user demand | XL, feature-gated, security review needed |
| **[PR #8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313)** feat(skills): default to compact injection | 38 days (2026-06-25) | Prompt efficiency, deprecation path | XL, long deprecation window |
| **[PR #9115](https://github.com/zeroclaw-labs/zeroclaw/pull/9115)** ci(runners): Blacksmith for compile-heavy jobs | 16 days (2026-07-17) | CI speed, contributor experience | XS, needs author action |
| **[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** Tracker: Maintainer decision queue | 29 days (2026-07-04) | Governance bottleneck visible | Process, not code |

**Critical path**: **PR #9319** unblocks two S0 security issues. **RFC #8603** unblocks ecosystem adoption. Both need maintainer bandwidth.

---

## Quick Links
- **All 8 updated issues**: [GitHub Issues](https://github.com/zeroclaw-labs/zeroclaw/issues?q=updated%3A%3E2026-08-01)
- **All 50 updated PRs**: [GitHub PRs](https://github.com/zeroclaw-labs/zeroclaw/pulls?q=updated%3A%3E2026-08-01)
- **v0.8.5 tracker**: [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)
- **Security S0 issues**: [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646), [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647)
- **OpenAI compat RFC**: [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)

---

*Digest generated 2026-08-02 from GitHub data. ZeroClaw is an open-source AI agent runtime (zeroclaw-labs/zeroclaw).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*