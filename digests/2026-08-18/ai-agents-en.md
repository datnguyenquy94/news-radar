# OpenClaw Ecosystem Digest 2026-08-18

> Issues: 255 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-18 01:40 UTC

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

# OpenClaw Project Digest — 2026-08-18

## 1. Today's Overview

OpenClaw shows **very high development velocity** with 255 issues and 500 PRs updated in the last 24 hours, though no new releases were published. The project is in active maintenance mode with a significant backlog of **P1/P2 stability bugs** — particularly around session state management, Codex app-server integration, message delivery reliability, and gateway process health. The issue tracker reveals systemic architectural challenges: database-first runtime migration, tool-call parity between Codex-native and OpenClaw dynamic tools, and cross-channel message delivery consistency. PR throughput is strong (137 merged/closed), but many fixes remain in "waiting on author" or "needs maintainer review" states, suggesting review bandwidth may be a bottleneck.

---

## 2. Releases

**No new releases published today.** The latest version appears to be in the `2026.8.1-beta.x` series (per issue #124788), with multiple beta iterations addressing gateway event-loop blocking, schema migration, and plugin compatibility.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary | Status |
|----|------|---------|--------|
| [#125264](https://github.com/openclaw/openclaw/pull/125264) | Android | Retain pinned sessions in compact picker (24h cutoff fix) | **Closed** |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | Security/UI | Install policy warning acknowledgement flow (admin review) | **Closed** |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | Security | Require acknowledgement for install policy warnings | **Closed** |
| [#125493](https://github.com/openclaw/openclaw/pull/125493) | Plugins | Preserve newer schema errors during plugin install | **Closed** |
| [#125494](https://github.com/openclaw/openclaw/pull/125494) | Slack | Remove interrupted progress messages when agent decides not to reply | **Closed** |

**Key advances:** Security hardening (install policy acknowledgements), Android UX fix for pinned sessions, Slack message cleanup, and plugin schema error preservation. Several gateway/agent fixes are staged in open PRs awaiting review (see Backlog Watch).

---

## 4. Community Hot Topics (Most Active Issues/PRs)

### Top Issues by Comment Count

| Issue | Comments | 👍 | Priority | Core Problem |
|-------|----------|-----|----------|--------------|
| [#80319](https://github.com/openclaw/openclaw/issues/80319) QA tool-defaults conflation | 18 | 1 | P2 | Test harness misattributes Codex-native vs OpenClaw tool parity |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) Gemini 3.1 Pro auth crash | 14 | 3 | **P1** 🐚 | `"Cannot convert undefined or null to object"` regression in 2026.3.2 |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) SQLite transcript seams | 14 | 2 | P3 | Companion-friendly session/transcript access on DB-first runtime |
| [#84516](https://github.com/openclaw/openclaw/issues/84516) Codex reply truncation | 13 | 2 | **P1** 🦪 | Headless agent replies silently cut at ~1000–1100 chars (`stop=null`) |
| [#83959](https://github.com/openclaw/openclaw/issues/83959) App-server startup retry exhaustion | 11 | 1 | **P1** 🦞 | Cron agentTurn fails before LLM invoke; all fallbacks hit timeout |

### Underlying Needs Analysis
- **Reliability over features**: Top issues are P1 crashes, silent data loss, and session corruption — not feature requests
- **Codex integration fragility**: Multiple issues (#84516, #84662, #84110, #85532) point to app-server prompt/response handling as a systemic risk
- **Observability gaps**: Users cannot diagnose silent truncation, zombie processes, or schema migration failures without deep log diving
- **Multi-channel consistency**: Slack, Telegram, Feishu, Discord all show delivery regressions (#79824, #81484, #79950, #77249)

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 Critical (P1, Crash-Loop / Data-Loss / Session-State)

| Issue | Severity Tags | Fix PR? | Summary |
|-------|---------------|---------|---------|
| [#111857](https://github.com/openclaw/openclaw/issues/111857) | 🦞 P1, `clawsweeper-recovery-stuck`, `impact:data-loss` | No | CLI budget reopens full compacted JSONL branch → repeated compaction, prompt inflation |
| [#84516](https://github.com/openclaw/openclaw/issues/84516) | 🦞 P1, `impact:message-loss` | No | Codex app-server truncates replies at ~1k chars silently (`stop=null`) |
| [#83959](https://github.com/openclaw/openclaw/issues/83959) | 🦞 P1, `clawsweeper-recovery-stuck` | No | App-server startup retries exhaust before replacement ready → cron agentTurn fails |
| [#90361](https://github.com/openclaw/openclaw/issues/90361) | 🦞 P1, `clawsweeper-recovery-stuck` | No | `memory_search` "index metadata missing" race despite valid SQLite index |
| [#112196](https://github.com/openclaw/openclaw/issues/112196) | 🦞 P1, `impact:session-state` | No | `memory_search` transient sync timeout masks as persistent "database not open" |
| [#115421](https://github.com/openclaw/openclaw/issues/115421) | 🦞 P1, `maturity:stable` | No | Schema downgrade recovery wipes state DB → cron jobs lost |
| [#124788](https://github.com/openclaw/openclaw/issues/124788) | 🦞 P1, `maturity:stable` | No | Beta.2 gateway: event loop blocks ~100s every ~10.9 min (timer + fs scan) |
| [#113093](https://github.com/openclaw/openclaw/issues/113093) | 🦞 P1, `clawsweeper-recovery-stuck` | No | v2026.7.1-2 + llama.cpp MTP: 413/400 on tool payload with `tools.profile: full` |
| [#100941](https://github.com/openclaw/openclaw/issues/100941) | 🐚 P1, `maturity:stable` | No | Gateway drops concurrent tool-to-gateway WS (1006) under parallel fan-out (~48 calls) |
| [#85027](https://github.com/openclaw/openclaw/issues/85027) | 🦐 P1, `maturity:stable`, `clawsweeper-recovery-stuck` | No | macOS LaunchAgent unrecoverable after 2026.5.6→5.19 upgrade; Time Machine required |

### 🟠 High (P1/P2, Message-Loss / Auth / UX)

| Issue | Severity Tags | Fix PR? | Summary |
|-------|---------------|---------|---------|
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 🐚 P1, `impact:auth-provider` | No | Gemini 3.1 Pro: "Cannot convert undefined or null to object" on every message |
| [#84662](https://github.com/openclaw/openclaw/issues/84662) | 🐚 P1, `impact:session-state` | No | Codex app-server stores runtime context in native history → runaway input growth |
| [#84110](https://github.com/openclaw/openclaw/issues/84110) | 🦐 P2, `clawsweeper-recovery-stuck` | No | Codex rewrites prompt on tool-call continuation → prompt cache 93%→47% |
| [#84865](https://github.com/openclaw/openclaw/issues/84865) | 🦞 P2, `clawsweeper-recovery-stuck` | No | User-switched model disables fallback chain → session deadlock on provider outage |
| [#85133](https://github.com/openclaw/openclaw/issues/85133) | 🦞 P1, `maturity:stable` | No | macOS LaunchAgent unloaded during self-update, never re-bootstrapped |
| [#81484](https://github.com/openclaw/openclaw/issues/81484) | 🦐 P1, `maturity:stable` | No | Discord guild replies: malformed payloads, repeated outbound loops |
| [#79824](https://github.com/openclaw/openclaw/issues/79824) | 🦞 P1 | [#80396](https://github.com/openclaw/openclaw/pull/80396) | Feishu card V2 rejects deprecated `action` container (code 230099) |
| [#101445](https://github.com/openclaw/openclaw/issues/101445) | 🦐 P1 | No | Embedded Ollama: `payloads=0 tools=0` despite valid `tool_calls` in response |
| [#83416](https://github.com/openclaw/openclaw/issues/83416) | 🦞 P2, `no-stale`, `queueable-fix` | No | `openclaw_image` vision times out 60s on valid Talk JPEG |

### 🟡 Medium (P2/P3, Recovery-Stuck / UX)

| Issue | Severity Tags | Fix PR? | Summary |
|-------|---------------|---------|---------|
| [#82662](https://github.com/openclaw/openclaw/issues/82662) | 🦞 P2, `clawsweeper-recovery-stuck` | No | Cron `agentTurn`: "setup timed out before runner start" — all 6 fallbacks fail |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 🦐 P1, `regression` | No | Unreaped hook/tool child processes → zombie accumulation, runtime degradation |
| [#84242](https://github.com/openclaw/openclaw/issues/84242) | 🦐 P2 | No | `memory-lancedb` tools registered but not exposed to agent dynamic surface |
| [#81182](https://github.com/openclaw/openclaw/issues/81182) | 🦞 P1, `clawsweeper-recovery-stuck` | No | Overflow recovery waits full auto-compaction timeout (~900s) before truncation |
| [#85532](https://github.com/openclaw/openclaw/issues/85532) | 🐚 P1, `maturity:stable` | No | Diagnostic recovery aborts active embedded runs after terminal-looking progress |
| [#82250](https://github.com/openclaw/openclaw/issues/82250) | 🦞 P1, `maturity:stable` | No | LaunchAgent `KeepAlive=true` restarts after clean gateway exit (port conflict) |
| [#105528](https://github.com/openclaw/openclaw/issues/105528) | 🦐 P1, `regression`, `windows` | No | `exec`/`read` tools return empty output on Windows (v2026.6.x) |
| [#123792](https://github.com/openclaw/openclaw/issues/123792) | 🦞 P2, `maturity:stable` | No | Assistant turns render twice with CLI backends (live + aggregate) |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signal | Likelihood for Next Version |
|-------|----------|--------|----------------------------|
| [#79902](https://github.com/openclaw/openclaw/issues/79902) SQLite transcript/session seams | P3 🌊 | **High** — DB-first runtime foundation; enables companion tooling, replay, analytics | Medium (architectural, needs product decision) |
| [#80176](https://github.com/openclaw/openclaw/issues/80176) JSONL session-replay harness (Phase 5) | P3 🌊 | **High** — Testing infrastructure for Codex×Pi parity; depends on drift classifier (#80172) | Medium (tracking parent, multi-phase) |
| [#81061](https://github.com/openclaw/openclaw/issues/81061) `before_route_inbound_message` hook | P2 🌊 | **Medium** — Pre-routing interception for channel bridging/proxying; architectural gap | Medium (needs product decision) |
| [#85461](https://github.com/openclaw/openclaw/issues/85461) Image-gen provider usage metadata | P2 🌊 | **Medium** — Cost/usage observability for GPT Image 2, fal/Flux, LiteLLM | High (investigation tasks defined, scope clear) |
| [#73537](https://github.com/openclaw/openclaw/issues/73537) Production-readiness stability label | P2 🌊 | **High** — User demand for release quality signals; family/business production use | High (low effort, high trust value) |
| [#83442](https://github.com/openclaw/openclaw/issues/83442) Shell command block rendering | P3 🌊 | **Medium** — Operator UX for copying commands safely across channels | Medium (channel-aware, needs design) |
| [#81595](https://github.com/openclaw/openclaw/issues/81595) Per-MCP-server observability spans | P2 🌊 | **Medium** — Cold-start attribution for multi-MCP `bundle-tools` stage | Medium (instrumentation, low risk) |

**Prediction**: Near-term releases will prioritize **stability fixes** (P1 crash-loops, data-loss, session corruption) over features. The SQLite transcript seams (#79902) and production-readiness label (#73537) are the most likely feature-adjacent items to land, as they directly address user trust and the DB-first runtime vision.

---

## 7. User Feedback Summary

### Real Pain Points (from issue descriptions)
| Area | User Voice |
|------|------------|
| **Gateway stability** | "Event loop blocks ~100s every ~10 min — WebSocket connections die, HTTP `/ready` stops, cron stalls" ([#124788](https://github.com/openclaw/openclaw/issues/124788)) |
| **Upgrade trauma** | "2026.5.6 → 5.19 left Gateway unusable; only recovery was Time Machine restore" ([#85027](https://github.com/openclaw/openclaw/issues/85027)) |
| **Silent data loss** | "Replies silently truncated at ~1000 chars — model not aborted, `stop=null`, ends mid-sentence" ([#84516](https://github.com/openclaw/openclaw/issues/8

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-08-18)

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape shows **polarized maturity**: a top tier of 6 projects (OpenClaw, NanoClaw, ZeroClaw, IronClaw, Hermes Agent, CoPaw) operating at **very high velocity** (30–500 PRs/day) with structured release cycles, while a second tier (NanoBot, PicoClaw, LobsterAI, Moltis) maintains **steady feature velocity** (10–20 PRs/day) focused on UX polish and platform integration. A long tail (NullClaw, ZeptoClaw) exhibits minimal activity. Across the board, **stability hardening** (session state, provider fallback, upgrade safety) dominates over new features, reflecting a shift from "make it work" to "make it reliable for production." Multi-channel deployment (Slack, Discord, Telegram, Feishu, custom web) and **provider-agnostic tool calling** are table stakes; the next frontier is **agent portability**, **cross-session memory**, and **commercialization guardrails** (spend firewalls, audit logs).

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged PRs | Release Status | Health Score* |
|---------|--------------|-----------|------------|----------------|---------------|
| **OpenClaw** | 255 | 500 | 137 | None (beta series) | 🟡 High velocity, stability debt |
| **NanoClaw** | 4 | 42 | 25 | None (accumulating on `main`) | 🟢 Strong — infra milestone near |
| **ZeroClaw** | 11 | 50 | 8+ | None | 🟢 Strong — security hardening phase |
| **IronClaw** | 16 | 45 | 4 | **v1.3.0-rc.1** (blocker #7720) | 🟠 Active but upgrade-blocked |
| **Hermes Agent** | 10 | 50 | 4 | **v0.20.3** (patch) | 🟢 Strong — stabilization mode |
| **CoPaw (QwenPaw)** | 12 | 33 | 20 | None (v2.1.0 current) | 🟢 Strong — high merge rate |
| **NanoBot** | 2 | 15 | 5 | None | 🟢 Strong — critical fixes shipping |
| **LobsterAI** | 7 | 18+ | 18 | None | 🟢 Active — UX polish focus |
| **Moltis** | 3 | 9 | 6 | None | 🟢 Active — production hardening |
| **PicoClaw** | 3 | 4 | 3 | None | 🟢 Stable — focused triage |
| **NullClaw** | 0 | 1 (Dependabot) | 0 | None | ⚪ Quiet — maintenance only |
| **ZeptoClaw** | 0 | 0 | 0 | None | ⚪ Dormant |

*Health Score: 🟢 Strong (high merge rate, clear direction) • 🟡 High velocity with risks • 🟠 Blocker present • ⚪ Low activity*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Scale & Breadth**: Largest issue/PR volume (500 PRs/24h) — indicates biggest contributor base and widest deployment surface (Android, Slack, Telegram, Feishu, Discord, Codex, gateway, plugins).
- **Architectural Ambition**: Only project tackling **DB-first runtime migration** (SQLite transcript seams #79902), **Codex tool-call parity**, and **cross-channel message delivery consistency** as first-class architectural goals.
- **Production Surface**: Explicit "production-readiness" label demand (#73537) and real-world upgrade trauma reports (#85027) prove serious production adoption.

### Technical Approach Differences
| Dimension | OpenClaw | Peer Norm |
|-----------|----------|-----------|
| **Runtime** | Migrating to DB-first (SQLite) session/transcript store | File/JSONL or in-memory |
| **Codex Integration** | Deep app-server prompt/response handling, dynamic tool parity | Thin wrapper or CLI bridge |
| **Multi-Channel** | Unified gateway with per-channel delivery hooks | Adapter-per-channel, less centralized |
| **Plugin System** | Schema-migration-aware, versioned installs | Simpler skill/app loading |

### Community Size Comparison
- **OpenClaw**: 255 active issues + 500 PRs → **largest active community** by an order of magnitude.
- **Next closest**: ZeroClaw (11 issues, 50 PRs), IronClaw (16 issues, 45 PRs), Hermes (10 issues, 50 PRs).
- **Signal**: OpenClaw is the **de facto reference implementation**; others are specialized forks, lighter-weight alternatives, or niche integrations.

---

## 4. Shared Technical Focus Areas (Cross-Project Requirements)

| Requirement | Projects Affected | Specific Need |
|-------------|-------------------|---------------|
| **Session/Transcript Durability & Replay** | OpenClaw (#79902), NanoClaw (driver seam), ZeroClaw (agent export RFC), Hermes (context-engine security), CoPaw (compact accuracy) | Structured, queryable session storage; replay harness; migration safety |
| **Provider-Agnostic Tool Calling & Fallback** | OpenClaw (Codex parity), NanoBot (#5413), Hermes (#85624, #88830), ZeroClaw (delegate thinking), CoPaw (per-channel models) | Unified tool schema; graceful degradation; provider-specific param handling |
| **Upgrade Safety & Migration** | OpenClaw (#85027, #115421), IronClaw (#7720), ZeroClaw (SOP reload), PicoClaw (#271) | Schema downgrade recovery; config migration; zero-downtime deploy |
| **Multi-Channel Consistency** | OpenClaw (Slack/Telegram/Feishu/Discord), NanoClaw (Slack per-thread), CoPaw (Feishu/DingTalk/WeChat/Console), LobsterAI (IM/cowork) | Unified session model; channel-scoped config; delivery guarantees |
| **Observability & Debugging** | OpenClaw (silent truncation), NanoBot (Telegram watchdog), Moltis (RPC timeout), ZeroClaw (provider attempt accounting) | Structured logs; liveness checks; request tracing; cost attribution |
| **Security Hardening** | OpenClaw (install policy), NanoBot (Slack redirect, fallback), ZeroClaw (SSRF, API key headers, bounded reads), Hermes (context-engine validation), LobsterAI (log sanitization) | Supply chain; input validation; secret handling; audit trails |
| **Commercialization Guardrails** | NanoBot (#5409 spend firewall), ZeroClaw (action-budget atomicity), OpenClaw (budget reopen loops) | Hard spend caps; per-user/agent quotas; loop detection |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Technical Architecture |
|---------|---------------|-------------|------------------------|
| **OpenClaw** | **Reference platform** — multi-channel gateway, plugin ecosystem, Codex deep integration | Enterprise/prosumer deployments; developers building on top | Monorepo gateway + app-server + plugins; DB-first runtime migration |
| **ZeroClaw** | **Security-first, portable agents** — atomic budgets, SSRF hardening, agent export/import | Security-conscious operators; multi-deployment sync | Rust core; capability-based security; SOP workflow engine |
| **IronClaw** | **Durable execution & extensibility** — inbox, automations, WASM tools, Google Docs semantic editing | Product teams building AI coworkers | libSQL-backed; extension points (WASM, ACP, OMP); write-path optimization |
| **NanoClaw** | **Developer experience & channel infrastructure** — Slack-native, driver seam, hook seams | Devs embedding agents in Slack/workspaces | TypeScript; driver abstraction (Docker→K8s); per-thread session model |
| **Hermes Agent** | **Desktop-first, provider-agnostic UX** — TUI, design mode, pen.dev canvas, Termux | Power users on Linux/macOS/Windows/Android | Electron + Rust; provider-neutral output contracts; desktop integration |
| **CoPaw (QwenPaw)** | **Multi-agent desktop workspace** — PawApps (DataPaw), per-channel models, skill marketplace | Chinese enterprise / data-science teams; multi-channel ops | React/Electron; plugin runtime; skill pool; per-agent workspaces |
| **NanoBot** | **Lightweight gateway + Telegram/Slack bot** — spend firewall, Windows parity, native TUI | Self-hosters; cost-sensitive deployments | Go + TypeScript; minimal deps; hybrid spend controls |
| **LobsterAI** | **Polished desktop UX** — i18n, session grouping, copy affordances, MCP/Ollama fixes | End-users wanting "it just works" desktop app | Electron + Rust; heavy UI investment; provider registry |
| **Moltis** | **External agent orchestration** — ACP agents (MiniMax Code), browser automation, file library | Users composing specialized agents | Rust; ACP-first; managed files; container integration |
| **PicoClaw** | **Channel breadth (Weixin, IRC, Slack) + config hardening** | Chinese ecosystem deployments; IRC bridge users | Go; multi-instance channel support; env-over-config |
| **NullClaw / ZeptoClaw** | Minimal / dormant | N/A | N/A |

---

## 6. Community Momentum & Maturity Tiers

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Tier 1: High-Velocity Core** | OpenClaw, ZeroClaw, NanoClaw, IronClaw, Hermes Agent, CoPaw | 30–500 PRs/day; structured releases; dedicated maintainers; security audits; architectural RFCs; production blockers treated as P0 |
| **Tier 2: Steady Feature Velocity** | NanoBot, LobsterAI, Moltis, PicoClaw | 10–20 PRs/day; UX polish + platform fixes; community PRs accepted; releases less frequent but stable |
| **Tier 3: Maintenance / Dormant** | NullClaw, ZeptoClaw | <5 PRs/month; Dependabot only; no active feature work |

**Rapidly Iterating (last 30 days evidence)**: OpenClaw, ZeroClaw, NanoClaw, CoPaw, IronClaw — all shipping infra milestones (driver seams, agent export, WASM tools, per-channel models, DB-first runtime).

**Stabilizing**: Hermes Agent (patch releases, security EPIC), NanoBot (critical bug fixes merged), LobsterAI (UX debt paydown), Moltis (config bugs fixed).

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Agent Portability > Platform Lock-in** | ZeroClaw RFC #10069 (export/import bundles); OpenClaw SQLite seams (#79902); NanoClaw driver seam | Build **portable agent definitions** (config + tools + memory) — avoid gateway-specific coupling |
| **Structured Output Contracts as Standard** | Hermes (native structured output #7693); ZeroClaw (WASM typed responses #7711); IronClaw (immutable output contract) | Adopt **provider-neutral JSON Schema / WIT** for tool responses — enables multi-provider, WASM, delegation |
| **Session as First-Class Durable Object** | OpenClaw (DB-first); NanoClaw (session driver); ZeroClaw (agent export includes session); CoPaw (per-agent workspaces) | Design **session lifecycle APIs** (spawn, adopt, snapshot, export) — not ephemeral chat history |
| **Multi-Channel = Multi-Tenant Session Model** | NanoClaw (per-thread); CoPaw (per-channel models); OpenClaw (delivery hooks); IronClaw (inbox APIs) | Implement **channel-scoped config & session isolation** — single binary, many identities |
| **Observability as Product Feature** | NanoBot (Telegram watchdog); ZeroClaw (provider attempt accounting); Moltis (RPC timeout); OpenClaw (silent truncation pain) | Ship **structured traces, cost attribution, liveness** — operators demand it |
| **Security Hardening as Default** | ZeroClaw (SSRF, atomic budgets); NanoBot (redirect validation); Hermes (context-engine validation); LobsterAI (log sanitization) | Treat **supply chain, input validation, secret handling** as baseline — not afterthought |
| **Commercialization Guardrails Emerging** | NanoBot (spend firewall #5409); ZeroClaw (action-budget atomicity); OpenClaw (budget loops) | If targeting hosted/SaaS, **build quotas, loop detection, audit logs now** — retrofit is painful |

---

**Bottom Line**: The ecosystem is converging on **durable, portable, observable, multi-channel agents** with **provider-agnostic tool contracts**. OpenClaw leads on scale and architectural scope; ZeroClaw leads on security/portability; IronClaw/NanoClaw/Hermes/CoPaw each own a differentiated wedge (durable execution, Slack-native, desktop UX, multi-agent workspace). For new entrants: **adopt structured output contracts, session durability, and channel-scoped config from day one** — these are no longer differentiators, they are table stakes.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-18

---

## 1. Today's Overview
NanoBot shows **high development velocity** with 15 PRs updated in the last 24 hours (5 merged/closed, 10 open), spanning critical bug fixes, cross-platform stability, WebUI enhancements, and provider resilience. The project is actively hardening its Telegram gateway (silent polling stall recovery), Slack file download security, LLM provider fallback logic, and Windows process management. No new releases were cut, but several merged PRs (#5156, #5301, #5406, #5410, #5416) deliver production-grade fixes. Community engagement remains low on issues (0 comments/👍), suggesting either silent adoption or reporting via other channels.

---

## 2. Releases
**No new releases** in the last 24 hours. The merged PRs since the last release contain significant stability improvements (Telegram polling recovery, gateway process identity, CLI TUI, goal clarification loop fix) that will likely be bundled in the next version.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | fix(telegram): recover from silently stalled polling | **Critical Bug Fix** | Adds watchdog that detects and rebuilds stalled Telegram polling connection pools; fixes permanent message loss after transient network blips (closes #5171). |
| [#5301](https://github.com/HKUDS/nanobot/pull/5301) | fix(telegram): bridge stdlib logging and detect stalled polling | Observability | Bridges stdlib logging into loguru + lightweight liveness check (logs only, no teardown). Complements #5156. |
| [#5406](https://github.com/HKUDS/nanobot/pull/5406) | feat(cli): add native TypeScript terminal UI | **Major Feature** | Introduces native TS-based TUI (supersedes #4329); cross-terminal fixes included. |
| [#5410](https://github.com/HKUDS/nanobot/pull/5410) | fix(goal): stop repeating clarification replies | **Regression Fix** | Stops auto-re-injecting sustained-goal continuation after normal model responses; preserves continuation only at tool-call budget boundary. |
| [#5416](https://github.com/HKUDS/nanobot/pull/5416) | fix(gateway): stabilize process identities | **Stability** | Replaces locale-dependent `ps lstart` with native `proc_pidinfo` birth timestamps; uses shared process-identity contract for gateway client leases. |

---

## 4. Community Hot Topics
*No issues or PRs have comments or reactions in the last 24h.* The two updated issues (#5171 closed, #5409 open) and 15 PRs show **zero community discussion** (comments: undefined/0, 👍: 0). This may indicate:
- Contributors are internal/team members coordinating offline
- Users report via Discord/Slack rather than GitHub
- High-quality PRs with clear descriptions reduce need for discussion

**Most significant open items by scope:**
1. **[#5409](https://github.com/HKUDS/nanobot/issues/5409)** — *Prevent Margin Leaks & Surprise LLM Bills: Add a Hybrid Spend Firewall* (feature request for commercialization guardrails)
2. **[#5358](https://github.com/HKUDS/nanobot/pull/5358)** — *feat(webui): add session messaging via mentions* (multi-session WebUI UX)
3. **[#5364](https://github.com/HKUDS/nanobot/pull/5364)** — *feat(webui): add temporary side conversations* (tabbed side-chats in WebUI)

---

## 5. Bugs & Stability — Reported/Fixed Today

| Severity | Issue/PR | Status | Fix PR |
|----------|----------|--------|--------|
| **Critical** | [#5171](https://github.com/HKUDS/nanobot/issues/5171) Telegram polling stalls silently after transient network failures | **Closed** | [#5156](https://github.com/HKUDS/nanobot/pull/5156) (merged) + [#5301](https://github.com/HKUDS/nanobot/pull/5301) (merged) |
| **High** | [#5414](https://github.com/HKUDS/nanobot/pull/5414) Slack file downloads vulnerable to redirect attacks | Open (fix PR) | [#5414](https://github.com/HKUDS/nanobot/pull/5414) validates full redirect chain & DNS alignment |
| **High** | [#5413](https://github.com/HKUDS/nanobot/pull/5413) LLM provider exceptions escape fallback loop | Open (fix PR) | [#5413](https://github.com/HKUDS/nanobot/pull/5413) applies fallback policy to raised errors |
| **Medium** | [#5341](https://github.com/HKUDS/nanobot/pull/5341) Weather skill `curl` alias fails on Windows PowerShell | Open (fix PR) | [#5341](https://github.com/HKUDS/nanobot/pull/5341) makes workflow Windows-safe |
| **Medium** | [#5415](https://github.com/HKUDS/nanobot/pull/5415) Windows gateway venv child PID adoption broken | Open (fix PR) | [#5415](https://github.com/HKUDS/nanobot/pull/5415) adopts recorded PID of venv launcher |
| **Medium** | [#5412](https://github.com/HKUDS/nanobot/pull/5412) Background gateway child output block-buffered, missing from logs | Open (fix PR) | [#5412](https://github.com/HKUDS/nanobot/pull/5412) flushes output promptly |
| **Medium** | [#5407](https://github.com/HKUDS/nanobot/pull/5407) Cron heartbeat/dream jobs persist after disable → burn tokens | Open (fix PR) | [#5407](https://github.com/HKUDS/nanobot/pull/5407) retires persisted system jobs when disabled |
| **Low** | [#5410](https://github.com/HKUDS/nanobot/pull/5410) Goal clarification replies repeat unnecessarily | **Closed** | [#5410](https://github.com/HKUDS/nanobot/pull/5410) (merged) |

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Hybrid Spend Firewall** (budget caps, loop detection, per-user/agent quotas) | [#5409](https://github.com/HKUDS/nanobot/issues/5409) | **High** — explicit commercialization blocker; aligns with gateway hardening |
| **WebUI Session Messaging via Mentions** (`@session` addressing, `list_sessions`/`send_session_message` tools) | [#5358](https://github.com/HKUDS/nanobot/pull/5358) | **High** — PR open with tests, priority p2 |
| **WebUI Follow-up Suggestions** (DeerFlow-style ephemeral suggestions after turns) | [#5408](https://github.com/HKUDS/nanobot/pull/5408) | **Medium-High** — PR open, provider-neutral, priority p2 |
| **WebUI Temporary Side Conversations** (`/side` tabs, isolated drafts/streaming) | [#5364](https://github.com/HKUDS/nanobot/pull/5364) | **Medium** — PR open, more complex UX, priority p2 |
| **Native TypeScript TUI** (replaces Python TUI) | [#5406](https://github.com/HKUDS/nanobot/pull/5406) | **Delivered** — merged today |
| **CLI Runtime Isolation** (`agent_runtime` module, `--classic` escape hatch) | [#5411](https://github.com/HKUDS/nanobot/pull/5411) | **Medium** — refactor PR open, aligns with TUI work |

---

## 7. User Feedback Summary
*No direct user comments on GitHub in the last 24h.* Inferred pain points from issue/PR content:

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Silent Telegram message loss** after proxy/network blips | #5171 (production observation: messages pile up server-side, logs silent) | Bot operators on unstable networks/proxies |
| **Uncontrolled LLM spend** from power-user loops | #5409 ("bankrupting your LLM budget") | Commercial/hosted deployments |
| **Windows-specific breakage** (curl alias, venv PID, block-buffering) | #5341, #5415, #5412 | Windows developers/operators |
| **Slack file download hijacking** via malicious redirects | #5414 | Slack bot deployments |
| **Provider exceptions crashing fallback chain** | #5413 | Multi-provider setups |
| **Zombie cron jobs burning tokens** after disable | #5407 | Gateway operators using heartbeat/dream |
| **Repeated clarification spam** in sustained goals | #5410 (fixed) | Agent users with long-running goals |

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| **[#5409](https://github.com/HKUDS/nanobot/issues/5409) Hybrid Spend Firewall** | 1 day (new) | **Strategic blocker for commercialization**; no PR yet — needs design decision (hard limits vs. soft alerts, per-key vs. global, integration with gateway billing) |
| **[#5358](https://github.com/HKUDS/nanobot/pull/5358) WebUI Session Messaging** | 6 days | Multi-session UX foundation; enables agent-to-agent via mentions; has tests but no review activity |
| **[#5364](https://github.com/HKUDS/nanobot/pull/5364) WebUI Side Conversations** | 5 days | Complex transient state management; parallel composers; UX innovation — needs design sign-off |
| **[#5408](https://github.com/HKUDS/nanobot/pull/5408) WebUI Follow-up Suggestions** | 1 day | DeerFlow parity feature; provider-neutral protocol defined — quick win if reviewed |
| **[#5411](https://github.com/HKUDS/nanobot/pull/5411) CLI Runtime Isolation** | 1 day | Architectural cleanup for TUI/classic split; enables future headless/embedded modes |

---

## Project Health Indicators
| Metric | Signal |
|--------|--------|
| **PR throughput** | 15 PRs/24h — very high |
| **Merge rate** | 5/15 (33%) merged same day — healthy |
| **Critical bug fix latency** | #5171 reported 2026-07-30, fixed & merged 2026-08-17 (18 days) — acceptable for complex networking bug |
| **Cross-platform focus** | 4/15 PRs target Windows/macOS/Linux parity — strong |
| **Security posture** | Proactive redirect validation (#5414), fallback hardening (#5413) — good |
| **Community engagement** | 0 comments/👍 on all items — **concern**; may indicate siloed development |

---

*Digest generated from GitHub data as of 2026-08-18. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-18

---

## 1. Today's Overview

Hermes Agent shows **high development velocity** with 50 PRs updated and 10 issues active in the last 24 hours, alongside a fresh patch release (v0.20.3) rolling up ~125 PRs since v0.20.2. The project is in active stabilization mode: multiple security hardening PRs, provider compatibility fixes (Anthropic/Bedrock/DeepSeek auto-titling), and desktop/WSL update-loop regressions are being addressed in parallel. Community reports cluster around false-positive deprecation warnings (`TERMINAL_CWD`), session-title generation failures on non-OpenAI providers, and Windows+WSL desktop update loops — all of which have corresponding fix PRs open today.

---

## 2. Releases

### **v2026.8.16.2 / v0.20.3** (2026-08-16)
> **Patch release** — stable tag for downstream consumers (Docker images, hosted deployments, fresh installs) bundling ~125 PRs since v0.20.2.

**Highlights from release notes (truncated in source):**
- No breaking changes noted; patch-level stability roll-up.
- Downstream consumers should re-pull Docker images or re-run installers.

**Migration notes:** None indicated for patch release. Users on v0.20.2 can upgrade directly.

---

## 3. Project Progress (Merged/Closed in Last 24h)

| PR | Type | Summary |
|----|------|---------|
| [#85582](https://github.com/NousResearch/hermes-agent/pull/85582) | Bug fix | **Relay**: correctly unwrap lazy completed streams; avoids hanging on providers that return completed responses without streaming chunks. |
| [#87663](https://github.com/NousResearch/hermes-agent/issues/87663) | Bug fix (Issue closed) | **Termux install**: cryptography==50.0.0 build hang on Android — resolved via dependency adjustment or wheel availability. |
| *(2 other merged/closed PRs not individually detailed in feed)* | — | Included in the v0.20.3 roll-up. |

**Net velocity:** 46 open PRs updated today vs. 4 closed → heavy parallel work-in-progress; next patch/minor likely within 1–2 weeks.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Activity | Core Need / Signal |
|------|----------|-------------------|
| [#85695](https://github.com/NousResearch/hermes-agent/issues/85695) `TERMINAL_CWD` false-positive warning | 9 comments, P2, `comp/cli`, `comp/gateway`, `area/config` | Users see deprecation warning on **every gateway start** despite never setting `TERMINAL_CWD` in `.env` (only commented example exists). Config bridge incorrectly reads env var from shell/process instead of `.env` file. |
| [#88829](https://github.com/NousResearch/hermes-agent/issues/88829) Duplicate `TERMINAL_CWD` bug report | 1 comment, P2, duplicate | Same root cause — confirms widespread impact across environments (WSL, Linux, macOS). |
| [#85624](https://github.com/NousResearch/hermes-agent/issues/85624) Auto-title fails 100% on Bedrock/Anthropic | 1 comment, P3, `provider/anthropic`, `provider/bedrock` | `response_format` (OpenAI-only) leaked to Anthropic Messages API → `Extra inputs are not permitted`. Blocks session auto-titling for all Anthropic-wire providers. |
| [#88830](https://github.com/NousResearch/hermes-agent/issues/88830) Auto-title fails on DeepSeek (HTTP 400) | 0 comments, new today | DeepSeek rejects `json_schema` `response_format`; same code path as Anthropic issue. |
| [#84262](https://github.com/NousResearch/hermes-agent/issues/84262) Context-engine selection accepts arbitrary dicts (security) | 1 comment, P3, `SECURITY-CLASS-963645940f301b6e` | Part of security audit EPIC #82591. Malicious context engine could inject system messages. Fix PR [#88835](https://github.com/NousResearch/hermes-agent/pull/88835) open today. |
| [#88827](https://github.com/NousResearch/hermes-agent/issues/88827) Windows+WSL desktop update loop | 0 comments, P3, `platform/windows` | Desktop "update available" only triggers WSL backend update, never rebuilds desktop client → infinite loop. |

**Underlying theme:** Provider-agnostic code paths (titling, config validation, update logic) are leaking provider-specific assumptions, causing regressions on non-OpenAI backends and hybrid environments (WSL).

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High (Security)** | [#84262](https://github.com/NousResearch/hermes-agent/issues/84262) Context-engine message selection lacks tier/provenance validation → system message injection | Open | [#88835](https://github.com/NousResearch/hermes-agent/pull/88835) validation PR open today |
| **High (Security)** | [#84265](https://github.com/NousResearch/hermes-agent/issues/84265) Legacy body-only webhook HMAC replayable after deduplication expiry | Open | No fix PR yet |
| **High (Stability)** | [#85624](https://github.com/NousResearch/hermes-agent/issues/85624) Auto-title 100% failure on Anthropic/Bedrock (OpenAI `response_format` leak) | Open | [#88834](https://github.com/NousResearch/hermes-agent/pull/88834) retry without `response_format` |
| **High (Stability)** | [#88830](https://github.com/NousResearch/hermes-agent/issues/88830) Auto-title fails on DeepSeek (HTTP 400 `json_schema` unsupported) | Open | Same fix path as #85624 |
| **Medium** | [#85695](https://github.com/NousResearch/hermes-agent/issues/85695) / [#88829](https://github.com/NousResearch/hermes-agent/issues/88829) False-positive `TERMINAL_CWD` deprecation warning on every startup | Open | No fix PR yet (config bridge reads process env, not `.env`) |
| **Medium** | [#88827](https://github.com/NousResearch/hermes-agent/issues/88827) Windows+WSL desktop update loop (backend updates, frontend never rebuilds) | Open | No fix PR yet |
| **Medium** | [#88824](https://github.com/NousResearch/hermes-agent/issues/88824) Desktop Bot Mode misclassifies remote profiles as local → duplicate roster rows | Open | [#88828](https://github.com/NousResearch/hermes-agent/pull/88828) roster collapse by `install_id` |
| **Medium** | [#88821](https://github.com/NousResearch/hermes-agent/pull/88821) MCP write-capable tools risk duplicate side-effects on mid-flight session expiry | Open (PR) | Ported from cloudflare-os#168 — blocks auto-retry on session-expired errors |
| **Low** | [#87663](https://github.com/NousResearch/hermes-agent/issues/87663) Termux install hangs on `cryptography==50.0.0` build | **Closed** | Resolved (wheel now available or pin adjusted) |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood for Next Version |
|---------|----------|----------------------------|
| **Design Mode — element selection bridge** (click element in preview/browser → structured context to agent) | [#84177](https://github.com/NousResearch/hermes-agent/issues/84177) (2 👍, 2 comments) | Medium — desktop-focused, requires preview/browser pane integration (#48760); P3 but high user visibility |
| **Live pen.dev canvas co-design** (draw beside chat, agent designs via pen's API) | [#88647](https://github.com/NousResearch/hermes-agent/pull/88647) (PR open, video demo) | Medium-High — PR exists with assets; `needs-decision` label suggests maintainer review pending |
| **Gateway route context for plugins** (stable session key, source metadata through lifecycle/LLM/tool middleware) | [#88832](https://github.com/NousResearch/hermes-agent/pull/88832) (PR open) | High — infrastructure enabler for plugin ecosystem; low risk, high leverage |
| **Profile toolset capabilities honored at runtime** (persist `tools.enabled_toolsets` per profile) | [#88820](https://github.com/NousResearch/hermes-agent/pull/88820) (PR open) | High — completes contract from #85216/#86227; P2 bug fix + feature |
| **QQBot full group message observation fix** | [#80859](https://github.com/NousResearch/hermes-agent/pull/80859) (open since Aug 7) | Low-Medium — platform-specific, `needs-decision`, multiple risk sweepers |

**Prediction:** Next patch (v0.20.4) will bundle security fixes (#88835, #88833 nanoid bump), provider compat (#88834), desktop roster/WSL fixes (#88828, #88827), and MCP safety (#88821). Design Mode and pen.dev canvas likely target v0.21+.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Noisy false warnings on every launch** | [#85695](https://github.com/NousResearch/hermes-agent/issues/85695), [#88829](https://github.com/NousResearch/hermes-agent/issues/88829) — 2 independent reports, 9+ comments | High — erodes trust in CLI output; users mask warnings or downgrade |
| **Auto-titling silently broken on non-OpenAI providers** | [#85624](https://github.com/NousResearch/hermes-agent/issues/85624) (Bedrock/Anthropic), [#88830](https://github.com/NousResearch/hermes-agent/issues/88830) (DeepSeek) | High — core UX feature (session titles) fails 100% for growing provider ecosystem |
| **Windows+WSL desktop update loop** | [#88827](https://github.com/NousResearch/hermes-agent/issues/88827) | Medium — Windows power users stuck in "update available" → click → backend updates → still "update available" |
| **Bot Mode roster duplicates remote profiles as local** | [#88824](https://github.com/NousResearch/hermes-agent/issues/88824) | Medium — confusing UI for multi-machine/remote users |
| **Termux/Android install broken** | [#87663](https://github.com/NousResearch/hermes-agent/issues/87663) (now closed) | Was High for mobile users; resolved |

**Positive signals:** Active PR authors (15+ distinct contributors in today's feed) fixing reported issues within hours; security audit campaign (EPIC #82591) producing concrete hardening PRs.

---

## 8. Backlog Watch (Stale but Important)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#63671](https://github.com/NousResearch/hermes-agent/pull/63671) TUI: preserve foreground turns across background completion | Open since **2026-07-13** (36 days) | Core UX: background delegation completion steals focus / triggers surprise turns; `sweeper:blast-broad` flag indicates wide impact |
| [#64499](https://github.com/NousResearch/hermes-agent/pull/64499) Hindsight: bind retain work to enqueue-time session identity | Open since **2026-07-14** (35 days) | Memory/session integrity: session switches retargeting retain batches; `sweeper:blast-contained` |
| [#80832](https://github.com/NousResearch/hermes-agent/pull/80832) Agent: terminal activity stamp to prevent stuck `last_activity_at` | Open since **2026-08-07** (11 days) | Desktop UI message reloads break when timestamp stalls; user sees "output swallowed" |
| [#80859](https://github.com/NousResearch/hermes-agent/pull/80859) QQBot full group message observation fix | Open since **2026-08-07** (11 days) | Platform integration; `needs-decision` + 4 risk sweepers — maintainer bandwidth needed |
| [#84177](https://github.com/NousResearch/hermes-agent/issues/84177) Design Mode — element selection bridge | Open since **2026-08-12** (6 days) | High-visibility desktop feature; depends on #48760 (browser pane) — track dependency chain |

**Action recommended:** Maintainers should triage #63671 and #64499 (month-old PRs with broad risk sweepers) before they accumulate more conflicts. #80832 unblocks Desktop UI reliability.

---

## Links Index

- **Release:** [v2026.8.16.2 / v0.20.3](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.16.2)
- **Security EPIC:** [#82591](https://github.com/NousResearch/hermes-agent/issues/82591)
- **Key Issues:** [#85695](https://github.com/NousResearch/hermes-agent/issues/85695) · [#85624](https://github.com/NousResearch/hermes-agent/issues/85624) · [#84262](https://github.com/NousResearch/hermes-agent/issues/84262) · [#88827](https://github.com/NousResearch/hermes-agent/issues/88827) · [#88824](https://github.com/NousResearch/hermes-agent/issues/88824)
- **Key PRs:** [#88835](https://github.com/NousResearch/hermes-agent/pull/88835) · [#88834](https://github.com/NousResearch/hermes-agent/pull/88834) · [#88828](https://github.com/NousResearch/hermes-agent/pull/88828) · [#88821](https://github.com/NousResearch/hermes-agent/pull/88821) · [#88832](https://github.com/NousResearch/hermes-agent/pull/88832) · [#88647](https://github.com/NousResearch/hermes-agent/pull/88647) · [#63671](https://github.com/NousResearch/hermes-agent/pull/63671) · [#64499](https://github.com/NousResearch/hermes-agent/pull/64499)

---

*Digest generated 2026-08-18 from GitHub API data. All links point to NousResearch/hermes-agent repository.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-18

## 1. Today's Overview
PicoClaw shows moderate maintenance activity with **3 issues** and **4 PRs** updated in the last 24 hours. The project is actively addressing stability concerns around tool-execution loops and configuration edge cases, while also progressing on platform-specific integrations (Slack, Weixin, IRC). No new releases were published. The backlog includes one stale feature request (IRC long-message support) and a fresh critical bug report (Google Antigravity 429 errors). Overall health appears stable with focused triage on silent-failure modes and deployment hardening.

## 2. Releases
No new releases published today.

## 3. Project Progress
**Merged/Closed PRs (3):**
| PR | Title | Domain | Impact |
|----|-------|--------|--------|
| [#3312](https://github.com/sipeed/picoclaw/pull/3312) | `fix(agent): stop turn early on repeated identical tool failure` | Agent core | **Critical stability fix** — prevents silent spinning up to `max_tool_iterations` when a tool fails identically each call (e.g., `git` without creds). Closes [#3311](https://github.com/sipeed/picoclaw/issues/3311). |
| [#271](https://github.com/sipeed/picoclaw/pull/271) | `fix: env overrides when config.json is missing` | Config / Deployment | **Deployment hardening** — ensures `LoadConfig()` applies env overrides even when `config.json` absent (common in Fly.io secret-only deployments). Adds regression test. |
| [#2606](https://github.com/sipeed/picoclaw/pull/2606) | `feat: enhance Weixin channel support and configuration` | Channel / Weixin | **Multi-instance & validation improvements** — dynamic instance handling, stricter channel-name validation, stronger multi-instance flow stability across backend/frontend/docs. |

**Open PR (1):**
| PR | Title | Status |
|----|-------|--------|
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) | `fix(slack): set FileSize on media upload params` | Awaiting review — addresses Slack SDK v0.23.1 rejection due to missing `FileSize` in `files.upload.v2` flow. |

## 4. Community Hot Topics
| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Feature (stale) | 6 comments, updated 2026-08-17 | **IRC protocol compliance** — users need PicoClaw to reassemble split IRCv3 messages (>512 bytes) into single logical messages; current behavior treats fragments as separate messages, breaking context. |
| [#3311](https://github.com/sipeed/picoclaw/issues/3311) | Bug (closed) | 2 comments, closed via [#3312](https://github.com/sipeed/picoclaw/pull/3312) | **Silent agent hang** — production Telegram bot stopped responding for minutes when a tool repeatedly failed; users received no answer or error. |
| [#3339](https://github.com/sipeed/picoclaw/issues/3339) | Bug (new) | 0 comments, created 2026-08-17 | **Google Antigravity quota confusion** — valid OAuth scopes & model discovery succeed, but every generation returns generic 429 without `quota` field; blocks adoption of Google models. |

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | [#3339](https://github.com/sipeed/picoclaw/issues/3339) | Antigravity generation returns 429 `RESOURCE_EXHAUSTED` with no quota details despite valid auth; blocks Google model usage entirely. | None yet |
| **High** | [#3311](https://github.com/sipeed/picoclaw/issues/3311) | Agent loops silently on repeated identical tool failure (e.g., missing `git` creds) until `max_tool_iterations`; user gets no response. | Fixed in [#3312](https://github.com/sipeed/picoclaw/pull/3312) ✅ |
| **Medium** | [#3340](https://github.com/sipeed/picoclaw/pull/3340) | Slack media upload fails pre-flight due to missing `FileSize` param (Slack SDK v0.23.1 requirement). | Open PR [#3340](https://github.com/sipeed/picoclaw/pull/3340) |
| **Low** | [#271](https://github.com/sipeed/picoclaw/pull/271) | Config loader skipped env overrides when `config.json` missing, causing default-model fallback & credential errors. | Fixed in [#271](https://github.com/sipeed/picoclaw/pull/271) ✅ |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|------------------------------|
| **IRC long-message reassembly** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) (stale, 6 comments) | Medium — protocol-level gap affecting IRC power users; marked stale but has community discussion. |
| **Weixin multi-instance robustness** | [#2606](https://github.com/sipeed/picoclaw/pull/2606) (merged) | High — already merged; signals investment in Chinese ecosystem channels. |
| **Slack SDK v0.23+ compatibility** | [#3340](https://github.com/sipeed/picoclaw/pull/3340) (open) | High — blocking Slack media uploads; likely fast-tracked. |
| **Google Antigravity quota transparency** | [#3339](https://github.com/sipeed/picoclaw/issues/3339) | High — new, critical for Google model adopters; may need upstream API clarification. |

## 7. User Feedback Summary
- **Pain points:** Silent agent hangs ([#3311](https://github.com/sipeed/picoclaw/issues/3311)), opaque quota errors ([#3339](https://github.com/sipeed/picoclaw/issues/3339)), deployment config fragility ([#271](https://github.com/sipeed/picoclaw/pull/271)).
- **Use cases:** Production Telegram bots, Fly.io secret-only deployments, IRC bridge bots, Weixin multi-account management, Slack file-sharing workflows.
- **Satisfaction signals:** Quick fix turnaround for [#3311](https://github.com/sipeed/picoclaw/issues/3311) → [#3312](https://github.com/sipeed/picoclaw/pull/3312) (15 days); long-standing config bug [#271](https://github.com/sipeed/picoclaw/pull/271) finally resolved (6 months). Dissatisfaction: stale IRC feature [#3287](https://github.com/sipeed/picoclaw/issues/3287) untouched for ~1 month despite discussion.

## 8. Backlog Watch
| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) IRC long-message support | 27 days (stale) | Medium — protocol non-compliance for IRCv3; affects niche but vocal users. | Assign to channel maintainer or close with rationale. |
| [#3339](https://github.com/sipeed/picoclaw/issues/3339) Antigravity 429 | 1 day | High — blocks Google model path; no workaround. | Investigate if quota field missing from Google response or PicoClaw parsing bug; engage Google API support if needed. |
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) Slack FileSize fix | 1 day | Medium — breaks media uploads on Slack SDK ≥0.23.1. | Review & merge; add CI check for Slack SDK version compatibility. |

---
*Data source: GitHub API snapshot for sipeed/picoclaw (issues & PRs updated 2026-08-17 → 2026-08-18). Links point to live GitHub items.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-18

---

## 1. Today's Overview

NanoClaw shows **very high development velocity** with 42 PRs updated in the last 24 hours (25 merged/closed, 17 open) and 4 active issues. The project is in a heavy infrastructure refactoring phase — the majority of merged PRs are **core-team architectural changes** around session drivers, channel adapters (Slack, local web chat), router hooks, and MCP tool extensibility. No new release was cut today, suggesting these changes are accumulating on `main` for a future batch release. Bug-fix PRs exist for critical regressions (task logs lost in chat sessions, pending-message backlog unbounded, Codex provider type error), indicating the team is actively stabilizing recent "one-door" task delivery and provider changes.

---

## 2. Releases

**No new releases today.** The last release data is not provided in the 24h window. All 25 merged PRs are on `main` and will likely ship in the next version bump.

---

## 3. Project Progress — Merged/Closed PRs (Key Advances)

| PR | Area | Change Summary |
|----|------|----------------|
| [#3310](https://github.com/nanocoai/nanoclaw/pull/3310) | Skills/Slack | Restored `slack-formatting` container skill lost during upstream-main merge (silent directory drop). |
| [#3309](https://github.com/nanocoai/nanoclaw/pull/3309) | Channels/Slack | Landed Slack defaults factory, membership, onboarding, A2A guard — **per-thread session mode everywhere** (no DM/room split). |
| [#3305](https://github.com/nanocoai/nanoclaw/pull/3305) | Channels | Wave A: shared Slack Web API client + token-key convention (`slack-lib.ts`), canvas cluster registration. |
| [#3304](https://github.com/nanocoai/nanoclaw/pull/3304) | Channels | Adapter-declared `sessionMode` (`shared` \| `per-thread`) defaults; threads stamp derived automatically. |
| [#3292](https://github.com/nanocoai/nanoclaw/pull/3292) | Channels | Inbound-policy registration seam on Chat SDK bridge — avoids editing bridge source for bot-authored-message policies. |
| [#3297](https://github.com/nanocoai/nanoclaw/pull/3297) | Setup | Wizard extension points: per-channel pre-step (credential pre-binding) + companion-skill declarations. |
| [#3293](https://github.com/nanocoai/nanoclaw/pull/3293) | Router | `session-created` hook for brand-new engaged sessions — enables platform-specific bootstrap (thread naming, welcome). |
| [#3294](https://github.com/nanocoai/nanoclaw/pull/3294) | Delivery | `post-delivery` hook with `firstDelivery` flag — one-time follow-through (onboarding affordances). |
| [#3296](https://github.com/nanocoai/nanoclaw/pull/3296) | Agent Runner | `extendTool()` — additive MCP tool schema/description/passthrough extension without editing base tool source. |
| [#3295](https://github.com/nanocoai/nanoclaw/pull/3295) | Channels | Generic membership-event hook (`onMemberJoinedChannel`) on Chat SDK bridge — room-membership behavior owned by channel modules. |
| [#3306](https://github.com/nanocoai/nanoclaw/pull/3306) | Drivers | **New `src/drivers/` seam** — session-runtime driver abstraction with Docker as built-in; purely additive, all tests green. |
| [#3307](https://github.com/nanocoai/nanoclaw/pull/3307) | Host | Session lifecycle (spawn, adoption, supervision, stop, restart) routed through `SessionDriver` seam (dormant selection via `NANOCLAW_RUNTIME_DRIVER`). |
| [#3308](https://github.com/nanocoai/nanoclaw/pull/3308) | Groups | Refuse creating group over existing undisposed folder — prevents silent data adoption/loss. |
| [#3304](https://github.com/nanocoai/nanoclaw/pull/3304) | Channels | Threads stamp derived from adapter defaults — removes hardcoded session-mode logic at call sites. |

**Pattern:** A coordinated "channels wave" landing Slack + generic channel infrastructure, plus a foundational **driver seam** for session runtime pluggability. All core-team authored, stacked, and merged same-day.

---

## 4. Community Hot Topics

| Item | Type | Signals | Underlying Need |
|------|------|---------|-----------------|
| [#3203](https://github.com/nanocoai/nanoclaw/issues/3203) | Issue (1 💬) | Codex provider emits undeclared `file` event → `/add-codex` fails typecheck; generated images dropped silently. | **Provider event contract completeness** — new Codex CLI events not reflected in `ProviderEvent` union; image artifacts need consumption path. |
| [#3301](https://github.com/nanocoai/nanoclaw/issues/3301) | Issue (0 💬) | Tasks firing in chat sessions switch whole query to "task mode" — logs dropped, replies eaten, series unlisted (regression from #2988). | **Chat-session task execution fidelity** — "one-door" delivery broke chat-context task runs; needs log preservation + reply routing. |
| [#3289](https://github.com/nanocoai/nanoclaw/issues/3289) | Issue (0 💬) | `getPendingMessages()` loads *all* due rows into JS before `max` limit — unbounded memory on backlog. | **Backpressure/bounded polling** — pending-message queue can OOM; needs cursor/limit at DB level. |
| [#3298](https://github.com/nanocoai/nanoclaw/pull/3298) | PR (Feature) | Local Web Chat adapter + browser UI (loopback-only) — new channel skill. | **Zero-config local dev/debug channel** — developers want a built-in web UI without Slack/Discord setup. |
| [#3299](https://github.com/nanocoai/nanoclaw/pull/3299) | PR (Fix) | Bump `@openai/codex` 0.138.0 → 0.146.0 before GPT-5.4 retirement (2026-08-31). | **Urgent dependency maintenance** — pinned version will break in 13 days; model default change required. |

**Note:** Comment counts are low across the board (most PRs/issues have 0–1 comments), indicating **internal/core-team driven work** rather than external community debate.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Fix PR | Status |
|----------|-------|--------|--------|
| **Critical** | [#3203](https://github.com/nanocoai/nanoclaw/issues/3203) — Codex provider typecheck failure (`file` event undeclared); images dropped | None yet | **Open** — blocks `/add-codex` on `main` |
| **High** | [#3301](https://github.com/nanocoai/nanoclaw/issues/3301) — Task runs in chat sessions lose logs, replies, series listing (regression from #2988) | [#3303](https://github.com/nanocoai/nanoclaw/pull/3303) | **Open PR** — keeps `run logs` for task rows in chat |
| **High** | [#3289](https://github.com/nanocoai/nanoclaw/issues/3289) — Unbounded `getPendingMessages()` loads entire backlog into memory | [#3291](https://github.com/nanocoai/nanoclaw/pull/3291) | **Open PR** — bounds pending-message polling |
| **Medium** | [#3300](https://github.com/nanocoai/nanoclaw/pull/3300) — `formatAttachments` escapes all fields except `type` (XSS/injection risk in agent-facing XML) | [#3300](https://github.com/nanocoai/nanoclaw/pull/3300) | **Open PR** — escapes `type` field |
| **Medium** | [#3302](https://github.com/nanocoai/nanoclaw/pull/3302) — OneCLI gateway binds to wrong address (docker bridge vs. host) | [#3302](https://github.com/nanocoai/nanoclaw/pull/3302) | **Open PR** — fixes gateway `docker-compose` bind |
| **Low** | [#1143](https://github.com/nanocoai/nanoclaw/issues/1143) — Skills docs reference deleted `/data/env` path | — | **Closed** (doc fix needed) |

**Stability signal:** 4 of 5 high/critical bugs have open fix PRs — team is responsive. The Codex provider issue (#3203) is the only critical without a visible PR yet.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Local Web Chat channel** (loopback browser UI) | [#3298](https://github.com/nanocoai/nanoclaw/pull/3298) (Feature PR, core-team) | **High** — PR open, adds new channel skill; fits "channels wave" |
| **Session-runtime driver seam** (pluggable Docker → future K8s/podman) | [#3306](https://github.com/nanocoai/nanoclaw/pull/3306) + [#3307](https://github.com/nanocoai/nanoclaw/pull/3307) (merged) | **Done on `main`** — will ship in next release |
| **Per-thread session mode everywhere (Slack)** | [#3309](https://github.com/nanocoai/nanoclaw/pull/3309) (merged) | **Done** — no DM/room split; unified threading |
| **Adapter-declared session defaults** (shared/per-thread) | [#3304](https://github.com/nanocoai/nanoclaw/pull/3304) (merged) | **Done** — removes hardcoded session logic |
| **MCP tool additive extension (`extendTool`)** | [#3296](https://github.com/nanocoai/nanoclaw/pull/3296) (merged) | **Done** — modules can extend base tool schemas |
| **Setup wizard extensibility** (pre-steps, companion skills) | [#3297](https://github.com/nanocoai/nanoclaw/pull/3297) (merged) | **Done** — enables credential pre-binding, post-install skills |
| **Router/session/delivery hooks** (created, post-delivery, membership) | [#3293](https://github.com/nanocoai/nanoclaw/pull/3293), [#3294](https://github.com/nanocoai/nanoclaw/pull/3294), [#3295](https://github.com/nanocoai/nanoclaw/pull/3295) (all merged) | **Done** — platform modules get lifecycle seams |
| **Codex pin bump (urgent, 13-day deadline)** | [#3299](https://github.com/nanocoai/nanoclaw/pull/3299) | **Very High** — must land before 2026-08-31 |

**Roadmap read:** The "channels wave" + "driver seam" + "hook seams" are **complete on `main`**. Next release will be a **major infrastructure milestone**. Only urgent items left: Codex pin, task-in-chat fix, pending-message bound, attachment escape.

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|----------------------|----------|-----------|
| **Codex integration broken on `main`** — `/add-codex` fails typecheck, images silently dropped | [#3203](https://github.com/nanocoai/nanoclaw/issues/3203) | 😡 Frustrated — blocks Codex users |
| **Task runs in chat sessions broken** — logs lost, replies eaten, series unlisted since v2.1.48 | [#3301](https://github.com/nanocoai/nanoclaw/issues/3301) | 😟 Regression — power users affected |
| **Pending message backlog OOM risk** — unbounded load on restart/backlog | [#3289](https://github.com/nanocoai/nanoclaw/issues/3289) | 😰 Operational fear — large installs |
| **OneCLI gateway unreachable** — binds to docker bridge IP, not host | [#3302](https://github.com/nanocoai/nanoclaw/pull/3302) | 😐 Config pain — workaround exists |
| **Slack formatting skill missing** — silently dropped in merge | [#3310](https://github.com/nanocoai/nanoclaw/pull/3310) | 😕 Surprise — restored quickly |
| **Desire for local web UI** — no Slack/Discord needed for dev/test | [#3298](https://github.com/nanocoai/nanoclaw/pull/3298) | 😊 Positive — feature request implemented |

**Overall:** Users (mostly operators/devs running NanoClaw) are hitting **regressions from recent architectural changes** (one-door tasks, provider updates, merge mishaps). Core team is fixing rapidly. No external community complaints visible — issues appear from internal dogfooding.

---

## 8. Backlog Watch — Needs Maintainer Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#3203](https://github.com/nanocoai/nanoclaw/issues/3203) | 10 days (created 2026-08-08) | **Critical: Codex provider broken on `main`** — typecheck fails, images dropped. No fix PR yet. | **Urgent:** Add `file` to `ProviderEvent` union + consume image events. Pair with [#3299](https://github.com/nanocoai/nanoclaw/pull/3299) pin bump. |
| [#3301](https://github.com/nanocoai/nanoclaw/issues/3301) / [#3303](https://github.com/nanocoai/nanoclaw/pull/3303) | 1 day | High: Task-in-chat regression loses logs/replies. Fix PR open but unmerged. | Review/merge [#3303](https://github.com/nanocoai/nanoclaw/pull/3303) — restores `task_log` for chat-session tasks. |
| [#3289](https://github.com/nanocoai/nanoclaw/issues/3289) / [#3291](https://github.com/nanocoai/nanoclaw/pull/3291) | 1 day | High: Unbounded memory on pending-message backlog. Fix PR open. | Review/merge [#3291](https://github.com/nanocoai/nanoclaw/pull/3291) — add DB-level `LIMIT`/cursor. |
| [#3300](https://github.com/nanocoai/nanoclaw/pull/3300) | 1 day | Medium: XSS/injection via unescaped `attachment.type` in agent XML. | Quick review/merge — single-field escape fix. |
| [#3302](https://github.com/nanocoai/nanoclaw/pull/3302) | 1 day | Medium: OneCLI gateway binds wrong address (docker bridge). | Review/merge — fixes `docker-compose` gateway `api-host`. |
| [#3299](https://github.com/nanocoai/nanoclaw/pull/3299) | 1 day | **Deadline-driven:** Codex 0.138.0 model (GPT-5.4) retires **2026-08-31** (13 days). | **Must merge before 2026-08-31** — bump to 0.146.0 + verify model default. |

**Triage priority:** #3203 → #329

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-18

---

## 1. Today's Overview
NullClaw shows **minimal activity** over the past 24 hours. No issues were created, updated, or closed, and no pull requests were merged. The only movement is a single **Dependabot-generated PR (#956)** updating the Alpine Linux base image from 3.23 to 3.24 in the Docker images group. This indicates the project is currently in a **maintenance-only phase** with no active feature development, bug fixes, or community discussions occurring today. Project health appears stable but quiet.

---

## 2. Releases
**No new releases** published today or in the recent period covered by this data.

---

## 3. Project Progress
**No PRs merged or closed today.** The only open PR is an automated dependency update:

| PR | Title | Status | Author | Updated |
|----|-------|--------|--------|---------|
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | `ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group` | **OPEN** | dependabot[bot] | 2026-08-17 |

> This PR updates the base Alpine image used in Docker builds. It is a routine security/maintenance update with no functional changes to NullClaw itself. No test results or review activity are visible.

---

## 4. Community Hot Topics
**No active community discussions** in the last 24 hours. Zero issues, zero comments, zero reactions on any items. The sole PR (#956) has **0 comments and 0 reactions**, confirming no human engagement.

> **Analysis**: The absence of community interaction suggests either a mature/stable project with low friction, or limited active user base/maintainer bandwidth. No underlying needs can be inferred from today’s data.

---

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.** No issues were opened or updated. The only PR is a proactive dependency bump, not a bug fix.

| Severity | Count | Notes |
|----------|-------|-------|
| Critical | 0 | — |
| High | 0 | — |
| Medium | 0 | — |
| Low | 0 | — |

> **Stability signal**: Clean — no user-reported instability in this window.

---

## 6. Feature Requests & Roadmap Signals
**No feature requests** submitted or discussed today. No issues labeled `enhancement`, `feature`, or similar. The project shows **no visible roadmap signals** from user input in this period.

> **Prediction**: Given current velocity (near-zero), the next version will likely contain only dependency updates and maintenance unless maintainers initiate planned work.

---

## 7. User Feedback Summary
**No user feedback** captured today — no issues, discussions, support questions, or sentiment signals (👍/👎) on any items.

> **Pain points / Use cases / Satisfaction**: **No data available.** Unable to assess user experience from today’s activity.

---

## 8. Backlog Watch
**No long-unanswered issues or PRs** identified in today’s dataset. However, the **sole open PR (#956)** has been open since **2026-06-15 (64 days)** with no review, approval, or merge action.

| Item | Age | Risk | Recommendation |
|------|-----|------|----------------|
| [PR #956](https://github.com/nullclaw/nullclaw/pull/956) | 64 days | Low (automated dep update) | Maintainer should review/merge to keep base images current; configure Dependabot auto-merge for patch/minor updates if tests pass. |

> **Note**: No other stale items detected in this snapshot. Recommend periodic audit of older PRs/issues not shown in 24h window.

---

### 📌 Summary
NullClaw is **quiet but not broken**. Today’s only signal is a stale automated PR. No community, no bugs, no features — just maintenance debt accumulating on a base image bump. **Maintainer attention on PR #956** is the highest-leverage action.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-18

## 1. Today's Overview
IronClaw is in active pre-release stabilization for **v1.3.0-rc.1** (released 2026-08-17). The project shows high velocity with **45 PRs and 16 issues updated in 24 hours**, but a **critical upgrade regression** (#7720) blocks all 1.2.x → 1.3.0-rc.1 deployments. The team is simultaneously pursuing a major performance epic (#7591) to cut durable DB writes ~60%, hardening libSQL concurrency (#7714), and shipping user-facing features (durable inbox, automation run-now, Google Docs semantic tools, WASM typed responses). Closed PRs today include a large 1.2 forward-port (#7663) and design-system typing (#7637), signaling release-quality gates are being enforced.

## 2. Releases
### ironclaw-v1.3.0-rc.1 (2026-08-17)
- **Install**: `curl ... | sh` (shell) or PowerShell script
- **Release notes**: Not provided in feed; see [release page](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.3.0-rc.1)
- **Breaking change alert**: **Crash-loops on boot for any deployment upgraded from 1.2.x** — unknown field `activation_state` in v2 extension installation row ([#7720](https://github.com/nearai/ironclaw/issues/7720)). A fix PR [#7721](https://github.com/nearai/ironclaw/pull/7721) is open.
- **Migration note**: Do **not** upgrade production 1.2.x instances to this RC until #7721 is merged and a new RC is cut.

## 3. Project Progress (Merged/Closed in Last 24h)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#7663](https://github.com/nearai/ironclaw/pull/7663) | fix(release): forward-port 1.2 fixes and thread repair | Release engineering, Windows, thread index | **Merged** — brings validated 1.2 stability fixes (Windows FS, JSON output, curl healthchecks, 1.2.0 metadata) + one-time thread-index repair onto `main` |
| [#7637](https://github.com/nearai/ironclaw/pull/7637) | Type the design-system component boundary | Frontend, TypeScript | **Closed** — explicit prop types for shared design-system components; no strict-mode enablement |
| [#7647](https://github.com/nearai/ironclaw/pull/7647) | feat(automations): add deterministic no-delivery outcome | Automations, delivery layer | **Closed** — typed `[SILENT]` suppression contract for scheduled runs (part of #6879) |
| [#7703](https://github.com/nearai/ironclaw/pull/7703) | feat(wasm): typed WIT tool response + guest migration | WASM, extensions | **Closed** — superseded by [#7711](https://github.com/nearai/ironclaw/pull/7711) (folded in to avoid add-then-remove churn) |

**Net progress**: Core 1.2 stability forward-ported; automation delivery semantics typed; WASM tool contract modernization consolidated into single PR (#7711).

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#7275](https://github.com/nearai/ironclaw/issues/7275) | Issue (closed) | 4 | **Persistent memory recall verification** — user reports explicit cross-conversation memory not reliably recalled; team auditing production behavior |
| [#7591](https://github.com/nearai/ironclaw/issues/7591) | Issue (epic) | 3 | **DB write pressure reduction ~60%** — static audit found 22 rows/turn for typical workload; multi-worker safety must be preserved |
| [#7701](https://github.com/nearai/ironclaw/issues/7701) | Issue | 2 | Collapse resource-governor reserve+reconcile into one write (−11 rows/turn) |
| [#7603](https://github.com/nearai/ironclaw/issues/7603) | Issue | 2 | Batch BeforeModel checkpoints per-N iterations (−14 rows/turn) |
| [#7697](https://github.com/nearai/ironclaw/pull/7697) | PR (XL) | — | **Durable user inbox APIs** — typed, user-scoped notification inbox with ProductSurface/WebUI v2 endpoints |
| [#7718](https://github.com/nearai/ironclaw/pull/7718) | PR (XL) | — | **Google Docs semantic editing tools** — structured inspection, anchored batch edits, populated tables, deterministic verification |

**Underlying themes**: (1) **Production reliability** — memory recall, upgrade safety, libSQL starvation; (2) **Write-path optimization** — epic #7591 decomposes into 3+ Tier 2/3 issues targeting ~25 rows/turn savings; (3) **User-facing polish** — inbox, Google Docs, Slack onboarding, automation run-now.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **🔴 Critical (Blocker)** | [#7720](https://github.com/nearai/ironclaw/issues/7720) | **1.3.0-rc.1 crash-loops on boot after 1.2.x upgrade** — `unknown field 'activation_state'` in extension installation row; worker HTTP/SSH ports dead | [#7721](https://github.com/nearai/ironclaw/pull/7721) (open, `size: S`) |
| **🟠 High** | [#7714](https://github.com/nearai/ironclaw/issues/7714) | **libSQL single shared write connection starves resource-governor journal** under bench load → cascading authority invalidation, permanent reservation leaks, capability call failures | [#7717](https://github.com/nearai/ironclaw/pull/7717) (open, `size: XL`) |
| **🟡 Medium** | [#7716](https://github.com/nearai/ironclaw/issues/7716) | **Add MCP server flow missing bearer key auth & STDIO/HTTP transport options** (bug_bash_P2) | — |
| **🟡 Medium** | [#7715](https://github.com/nearai/ironclaw/issues/7715) | **Telegram connection flow lacks consent/selection between bot and personal account** (bug_bash_P2) | — |
| **🟡 Medium** | [#7681](https://github.com/nearai/ironclaw/issues/7681) | **Slack unlinked-user connect message is public in shared channels** + manual round-trip | [#7682](https://github.com/nearai/ironclaw/pull/7682) (open, `size: XL`) |
| **🟢 Low** | [#7705](https://github.com/nearai/ironclaw/issues/7705) | Unbounded shutdown flush + latching `pending_flush_error` in `CoalescingEventSink` (follow-up from #7631) | — |

**Stability signal**: Two critical/high regressions in RC1 with fix PRs already open; libSQL starvation is a known architectural bottleneck now being addressed.

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for v1.3.0 |
|---------|--------|----------------------|
| **Durable user inbox APIs** | [#7697](https://github.com/nearai/ironclaw/pull/7697) (PR XL) | High — core notification infrastructure, replaces legacy compat layer |
| **Automation `run-now` (manual fire)** | [#7708](https://github.com/nearai/ironclaw/pull/7708) (PR XL) | High — domain + WebUI + assistant service wired |
| **Google Docs semantic editing tools** | [#7718](https://github.com/nearai/ironclaw/pull/7718) (PR XL) | High — 4 new capabilities, preserves 11 legacy tools |
| **Native structured output finalization** | [#7693](https://github.com/nearai/ironclaw/pull/7693) (PR XL) | High — provider-neutral immutable output contract |
| **Durable backend suggestions** | [#7694](https://github.com/nearai/ironclaw/pull/7694) (PR XL) | Medium — product-surface-neutral, async generation |
| **WASM typed tool response + guest migration** | [#7711](https://github.com/nearai/ironclaw/pull/7711) (PR XL) | High — final PR in capability-response-normalization stack |
| **ACP serve command (stdio streaming + cancel)** | [#7513](https://github.com/nearai/ironclaw/pull/7513) (PR XL) | Medium — external tool integration (Copilot CLI, VS Code) |
| **OOBE automation-tasks prototype** | [#6994](https://github.com/nearai/ironclaw/pull/6994) (PR XL) | Low — gated behind `oobe_suggestions` flag, design-phase |

**Roadmap prediction**: v1.3.0 will likely ship the inbox, automation run-now, Google Docs tools, structured output, and WASM normalization — all have XL PRs open with core contributor authorship. ACP and OOBE appear targeted for 1.4+.

## 7. User Feedback Summary
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Cross-conversation memory not recalled** | [#7275](https://github.com/nearai/ironclaw/issues/7275) (user feedback from #7185) | Users lose explicitly established context; trust erosion |
| **Upgrade breaks production** | [#7720](https://github.com/nearai/ironclaw/issues/7720) | **All 1.2.x → 1.3.0-rc.1 upgrades crash-loop**; zero-downtime deployments impossible |
| **Slack onboarding leaks privacy** | [#7681](https://github.com/nearai/ironclaw/issues/7681) | Unlinked users get public "connect" nudge in shared channels; no one-click link |
| **MCP server auth incomplete** | [#7716](https://github.com/nearai/ironclaw/issues/7716) | Cannot add authenticated MCP servers (bearer token, STDIO/HTTP) |
| **Telegram connection ambiguous** | [#7715](https://github.com/nearai/ironclaw/issues/7715) | Users unaware if connecting bot or personal account |
| **Benchmark write-lane contention** | [#7704](https://github.com/nearai/ironclaw/issues/7704) | Largest fixable defect in clawbench: storage write-lane contention |

**Positive signals**: Active bug-bash program (P2 tags on #7715, #7716); detailed daily failure taxonomy (#7704) shows data-driven quality focus.

## 8. Backlog Watch (Needs Maintainer Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | 7 days (updated today) | **OMP core-tool contract + engines + benchmark arm** — XL PR, coding tool surface redesign; 4 slices, medium risk, blocked on CI/deps |
| [#7513](https://github.com/nearai/ironclaw/pull/7513) | 7 days (updated today) | **ACP serve command** — new contributor (Kampouse), XL, enables external IDE integration; streaming + cancel support |
| [#6994](https://github.com/nearai/ironclaw/pull/6994) | 17 days (updated today) | **OOBE automation prototype** — design + foundational impl, off-by-default flag; long-running design validation |
| [#7406](https://github.com/nearai/ironclaw/pull/7406) | 9 days (updated today) | **Dependabot: bump actions group (4 updates)** — CI maintenance, low risk but stale |
| [#7275](https://github.com/nearai/ironclaw/issues/7275) | 12 days (closed today) | **Persistent memory recall verification** — closed but root cause may need deeper audit; watch for reopen |

**Action items for maintainers**:
1. **Merge #7721 immediately** — unblocks all 1.2.x upgrades to RC1
2. **Review #7717 (libSQL fix)** — high-severity production stability
3. **Triage #7491 (OMP coding tools)** — large surface change, benchmark arm included
4. **Decide on #7513 (ACP)** — new contributor, strategic for ecosystem adoption

---

*Digest generated from GitHub data as of 2026-08-18. All links point to live GitHub items.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-18

## 1. Today's Overview
LobsterAI shows **high maintenance velocity** with 18 PRs merged/closed in the last 24 hours, primarily addressing UI/UX polish, i18n fixes, Electron upgrades, and new provider integrations. No new releases were cut. The issue backlog contains 7 active items — 6 stale issues from April 2026 (covering Ollama compatibility, MCP/SSE limitations, scheduled-task UX bugs, and multi-agent orchestration requests) and 1 fresh community proposal (#2500) for cross-platform agent communication via VOKO. The project is in active feature-refinement mode with strong contributor engagement.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs (2026-08-17)
| PR | Area | Summary | Type |
|----|------|---------|------|
| [#2506](https://github.com/netease-youdao/LobsterAI/pull/2506) | docs | Add DeepSeek Harness (dsh) runtime setup instructions | Docs |
| [#2505](https://github.com/netease-youdao/LobsterAI/pull/2505) | renderer, main | feat: dsh process launcher | Feature |
| [#2503](https://github.com/netease-youdao/LobsterAI/pull/2503) | main | fix(electron): add edit context menu for text inputs (Cut/Copy/Paste/Select All) | Bugfix/UX |
| [#2502](https://github.com/netease-youdao/LobsterAI/pull/2502) | renderer, build, main, macos | Feat: dsh engine integration | Feature |
| [#2501](https://github.com/netease-youdao/LobsterAI/pull/2501) | renderer | fix(skills): portal upgrade progress overlay rendering & logging | Bugfix/UX |
| [#1636](https://github.com/netease-youdao/LobsterAI/pull/1636) | renderer, cowork | feat(cowork): floating "scroll to bottom" button in chat window | Feature/UX |
| [#1637](https://github.com/netease-youdao/LobsterAI/pull/1637) | renderer, cowork | feat(cowork): "Regenerate" button on AI reply messages | Feature/UX |
| [#1639](https://github.com/netease-youdao/LobsterAI/pull/1639) | renderer, cowork, im | fix(i18n): replace hardcoded English tooltips with i18n keys | Bugfix/i18n |
| [#1640](https://github.com/netease-youdao/LobsterAI/pull/1640) | renderer, cowork | feat(tool-result): one-click copy buttons for tool outputs (Bash, Diff, etc.) | Feature/UX |
| [#1641](https://github.com/netease-youdao/LobsterAI/pull/1641) | renderer | feat(modal): unified Esc-key close support across all modals | Feature/UX |
| [#1642](https://github.com/netease-youdao/LobsterAI/pull/1642) | renderer, main | feat: Windows right-click context menu "Open with LobsterAI" | Feature |
| [#1661](https://github.com/netease-youdao/LobsterAI/pull/1661) | main, cowork | fix(log): sanitize exported logs (API keys, tokens, secrets) | Security/Bugfix |
| [#1663](https://github.com/netease-youdao/LobsterAI/pull/1663) | main, openclaw | feat(openclaw): upgrade OpenClaw to v2026.4.12 + plugin-sdk fix | Upgrade |
| [#1667](https://github.com/netease-youdao/LobsterAI/pull/1667) | renderer | fix(Settings): migrate Qwen console links from Lingji to Bailian | Maintenance |
| [#1668](https://github.com/netease-youdao/LobsterAI/pull/1668) | renderer, main, openclaw, cowork | feat(agent): per-agent working directory configuration | Feature |
| [#1669](https://github.com/netease-youdao/LobsterAI/pull/1669) | renderer | feat: fix Settings model provider UX (test-connection logic, custom provider name display) | Bugfix/UX |
| [#1675](https://github.com/netease-youdao/LobsterAI/pull/1675) | renderer, cowork | feat(cowork): group session list by time period (Today, Yesterday, 7d, 30d, Monthly) | Feature/UX |

**Open PRs of note:**
- [#2504](https://github.com/netease-youdao/LobsterAI/pull/2504) — OrcaRouter provider integration (first-class registry entry, OpenAI/Anthropic compatible)
- [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — dependabot: Electron 40.2.1 → 43.4.0 (open since April)
- [#1660](https://github.com/netease-youdao/LobsterAI/pull/1660) — Non-main agent welcome screen shows agent name/description (open since April)

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#2500](https://github.com/netease-youdao/LobsterAI/issues/2500) VOKO cross-platform agent comms proposal | 1 comment, created 2026-08-17 | **Interoperability**: External project (VOKO) seeks to bridge LobsterAI agents with other frameworks (OpenClaw, AstrBot) and IM channels via A2A standardization. Signals demand for **agent-to-agent protocol** and **multi-platform messaging**. |
| [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) MD-based workflow / multi-agent orchestration | 1 comment, stale since Apr | **Orchestration**: User wants main agent to discover and delegate to other user-created agents (not just spawned subagents). Reflects desire for **agent registry + dynamic delegation**. |
| [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) Ollama local models unusable | 1 comment, stale since Apr | **Local LLM support**: qwen3/gemma4 work in Cherry Studio but fail in LobsterAI. Indicates **provider adapter or parameter-passing bug** for Ollama. |
| [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) Non-SSE MCP engines broken | 1 comment, stale since Apr | **MCP completeness**: Only SSE transport works; stdio/other transports fail. Blocks **local tool/server integration**. |

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) Ollama models fail (work elsewhere) | Open, stale | No |
| **High** | [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) Non-SSE MCP engines unusable | Open, stale | No |
| **Medium** | [#1671](https://github.com/netease-youdao/LobsterAI/issues/1671) MD→Word conversion cuts off mid-task (SSE finish reason: full) | Open, stale | No |
| **Medium** | [#1643](https://github.com/netease-youdao/LobsterAI/issues/1643) Scheduled task save shows false "unsaved content" toast | Open, stale | No |
| **Low** | [#1653](https://github.com/netease-youdao/LobsterAI/issues/1653) groupPolicy overwritten to allowlist periodically | Open, stale | No |

**Note:** Security fix [#1661](https://github.com/netease-youdao/LobsterAI/pull/1661) (log sanitization) was merged today — mitigates credential leakage in exported logs.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Multi-agent orchestration / agent registry** | [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) | Medium — aligns with per-agent working dirs (#1668 merged) and non-main agent welcome (#1660 open) |
| **MD-based workflow definition** | [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) | Low — requires new DSL/execution engine |
| **VOKO / A2A cross-platform agent comms** | [#2500](https://github.com/netease-youdao/LobsterAI/issues/2500) | Low-Medium — external integration; may need core messaging abstraction |
| **Full MCP transport support (stdio, HTTP)** | [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) | High — SSE-only is a known gap; provider work ongoing (OrcaRouter #2504, dsh #2502/2505) |
| **Ollama provider parity** | [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) | High — local LLM trend; Cherry Studio compatibility proves feasibility |

**Strong signals from merged PRs:** Per-agent workspaces, session time-grouping, copy affordances, Esc-key modals, Windows context menu, log sanitization — all point to **polishing the multi-agent desktop UX** as near-term priority.

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Local model (Ollama) reliability** | #1635: "qwen3 to gemma4 all fail, but work in Cherry Studio" | Blocks local-first users; trust erosion |
| **MCP transport fragmentation** | #1662: "Only SSE works" | Limits tooling ecosystem adoption |
| **False UX warnings** | #1643: "Saved successfully but shows 'unsaved content'" | Annoyance; undermines confidence |
| **Task truncation during file conversion** | #1671: MD→Word stops mid-stream with "SSE response finish reason: full" | Data loss risk; streaming handling bug |
| **Agent isolation** | #1644: "Main agent cannot see other agents" | Prevents complex workflow composition |
| **Positive** | Rapid PR merge rate (18/21 closed), UI polish features delivered (scroll-to-bottom, regenerate, copy tool results, Esc modals, time-grouped sessions) | Shows responsive team; desktop UX improving fast |

## 8. Backlog Watch — Stale Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Electron 40→43 upgrade (dependabot) | 4.5 months | Security/perf updates blocked; CI may fail on newer Node |
| [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) Ollama models broken | 4 months | High user impact; local LLM is strategic |
| [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) Non-SSE MCP broken | 4 months | Ecosystem compatibility gap |
| [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) Multi-agent orchestration request | 4 months | Core architectural direction; relates to #1668 (merged) |
| [#1660](https://github.com/netease-youdao/LobsterAI/pull/1660) Non-main agent welcome screen | 4 months | UX polish ready but unmerged |
| [#1653](https://github.com/netease-youdao/LobsterAI/issues/1653) groupPolicy overwritten | 4 months | Config persistence bug |

---

**Health Indicator:** 🟢 **Active & Improving** — High PR throughput, security fixes shipping, UX debt being paid down. Primary risks: **stale local-LLM/MCP bugs** (4 months old) and **Electron upgrade backlog**. Recommend triaging #1635, #1662, #1277 before next release.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-18

## 1. Today's Overview
Moltis showed **high maintenance velocity** on 2026-08-17 with 9 PRs and 3 issues updated in a single day. The project is in active development with no new release but significant progress on bug fixes, feature completions, and dependency updates. Six PRs were merged/closed, covering external agent support (MiniMax Code ACP), configurable RPC timeouts, browser shadow DOM handling, and dependency bumps. Three PRs remain open addressing heartbeat logic, file management, and a Podman compatibility bug. Code quality gates are being enforced (file-size limits triggered on main branch).

## 2. Releases
**No new releases** published on 2026-08-18.

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Title | Type | Summary |
|----|-------|------|---------|
| [#1125](https://github.com/moltis-org/moltis/pull/1125) | Support model and effort selection for external agents | Feature | First-class model/effort selection for external-agent providers in `/model`; adds config, UI grouping under `external-agent/<kind>`, and metadata persistence |
| [#1204](https://github.com/moltis-org/moltis/pull/1204) | feat: add MiniMax Code ACP agent | Feature | New `acp-minimax-code` external-agent kind backed by `mcode acp`; added to default executable detection, agent registry, docs, and settings UI fixtures |
| [#1130](https://github.com/moltis-org/moltis/pull/1130) | feat: make webui rpc timeout configurable | Enhancement | Implements configurable RPC timeout for WebUI (closes [#1127](https://github.com/moltis-org/moltis/issues/1127)) |
| [#1103](https://github.com/moltis-org/moltis/pull/1103) | fix(browser): pierce shadow DOM lookups efficiently | Bug Fix | Efficient shadow DOM piercing for browser snapshot/ref-based lookups; supersedes [#1100](https://github.com/moltis-org/moltis/pull/1100) with review fixes |
| [#1087](https://github.com/moltis-org/moltis/pull/1087) | chore(deps): bump tar from 0.4.45 to 0.4.46 | Dependency | Cargo dependency update for `tar` crate |
| [#1207](https://github.com/moltis-org/moltis/pull/1207) | chore(deps): bump cargo group (wasmtime-wasi, cmov, quinn-proto, serde_with) | Dependency | Four Rust dependency updates via Dependabot |

**Key Advances**: External agent ecosystem expanded (MiniMax Code ACP + model/effort selection), WebUI reliability improved (configurable RPC timeout), browser automation hardened (shadow DOM), and dependencies refreshed.

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#1095](https://github.com/moltis-org/moltis/issues/1095) **Podman not working via Moltis** | 2 comments, open since 2026-06-03, updated 2026-08-17 | Long-standing container runtime compatibility issue; user reports Podman failures despite latest Moltis. Indicates container integration gaps — likely needs runtime detection or socket permission fixes. |
| [#1202](https://github.com/moltis-org/moltis/issues/1202) **Format CI gate red: two files >1500 lines** | 0 comments, created & closed 2026-08-16–17 | Automated code-quality enforcement caught oversized files (`store.rs` 1799 lines, `admin.rs` 1531 lines) from commit 9b47001a. Shows CI health but also growing module complexity needing refactor. |
| [#1209](https://github.com/moltis-org/moltis/pull/1209) **fix(gateway): treat heartbeat.update params as patch** | Open, created 2026-08-17 | Fixes [#1187](https://github.com/moltis-org/moltis/issues/1187): `heartbeat.update` was overwriting entire config with defaults for omitted fields. Critical for config integrity. |
| [#1208](https://github.com/moltis-org/moltis/pull/1208) **fix(cron): honor heartbeat active hours** | Open, created 2026-08-17 | Fixes [#1205](https://github.com/moltis-org/moltis/issues/1205): `active_hours` config was implemented but never hooked into scheduler. Feature parity gap. |
| [#1206](https://github.com/moltis-org/moltis/pull/1206) **Add managed Files library and Settings browser** | Open, created 2026-08-17 | Major feature: persistent file library with CRUD APIs, Finder-style browser, container mount integration. High user-value addition for data management. |

**Underlying Needs**: Container runtime reliability (Podman), config mutation safety (heartbeat patch semantics), scheduled-task reliability (active hours), and first-class file management — all pointing to **production hardening** and **UX completeness**.

## 5. Bugs & Stability

| Severity | Issue/PR | Status | Fix PR |
|----------|----------|--------|--------|
| **High** | [#1095](https://github.com/moltis-org/moltis/issues/1095) Podman not working | Open | None yet |
| **Medium** | [#1187](https://github.com/moltis-org/moltis/issues/1187) `heartbeat.update` overwrites config with defaults | Open | [#1209](https://github.com/moltis-org/moltis/pull/1209) (open) |
| **Medium** | [#1205](https://github.com/moltis-org/moltis/issues/1205) `heartbeat.active_hours` ignored by scheduler | Open | [#1208](https://github.com/moltis-org/moltis/pull/1208) (open) |
| **Low** | Shadow DOM lookup inefficiency | Fixed | [#1103](https://github.com/moltis-org/moltis/pull/1103) (merged) |
| **Low** | File-size CI failures on main | Fixed | Refactor needed for `store.rs` / `admin.rs` |

**Stability Note**: Two config-related bugs (#1187, #1205) have fixes in review; Podman issue remains unaddressed for ~2.5 months.

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| Configurable RPC timeout | [#1127](https://github.com/moltis-org/moltis/issues/1127) → [#1130](https://github.com/moltis-org/moltis/pull/1130) | ✅ **Done** (merged) |
| Model/effort selection for external agents | [#1125](https://github.com/moltis-org/moltis/pull/1125) | ✅ **Done** (merged) |
| MiniMax Code ACP agent | [#1204](https://github.com/moltis-org/moltis/pull/1204) | ✅ **Done** (merged) |
| Managed Files library + Settings browser | [#1206](https://github.com/moltis-org/moltis/pull/1206) | 🔶 **High** — large PR, active development |
| Podman support | [#1095](https://github.com/moltis-org/moltis/issues/1095) | 🔶 **Medium** — long open, no fix PR |
| Heartbeat config patch semantics | [#1187](https://github.com/moltis-org/moltis/issues/1187) → [#1209](https://github.com/moltis-org/moltis/pull/1209) | 🔶 **High** — fix in review |
| Heartbeat active hours enforcement | [#1205](https://github.com/moltis-org/moltis/issues/1205) → [#1208](https://github.com/moltis-org/moltis/pull/1208) | 🔶 **High** — fix in review |

**Roadmap Prediction**: Next release will likely include the Files library (#1206), heartbeat fixes (#1209, #1208), and possibly Podman support if prioritized. External agent ecosystem is maturing rapidly.

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|------------------------|----------|-----------|
| **Podman incompatibility** blocks container workflows | [#1095](https://github.com/moltis-org/moltis/issues/1095) — user on latest Moltis, provided session context | 😞 Frustrated (2.5 months open) |
| **Config overwrites on partial updates** | [#1187](https://github.com/moltis-org/moltis/issues/1187) → heartbeat.update replaces entire config | 😐 Technical friction |
| **Scheduled tasks run outside active hours** | [#1205](https://github.com/moltis-org/moltis/issues/1205) — `active_hours` config exists but ignored | 😐 Feature gap |
| **Need for file management in UI** | [#1206](https://github.com/moltis-org/moltis/pull/1206) — proactive feature adding Finder-style browser | 😊 Positive (proactive UX investment) |
| **External agent model selection** | [#1125](https://github.com/moltis-org/moltis/pull/1125) — community PR adding first-class model/effort UI | 😊 Positive (community-driven) |

**Overall**: Users encounter container runtime and config reliability issues, but project responds with UX enhancements (Files browser, model selection) and accepts community contributions.

## 8. Backlog Watch

| Item | Age | Why It Needs Attention |
|------|-----|------------------------|
| [#1095](https://github.com/moltis-org/moltis/issues/1095) **Podman not working** | ~77 days | High-impact container runtime bug; no fix PR; blocks Podman users; needs maintainer triage (runtime detection? socket permissions? rootless issues?) |
| [#1202](https://github.com/moltis-org/moltis/issues/1202) **Oversized files on main** | 1 day | CI red on main; two files exceed 1500-line limit (`store.rs`, `admin.rs`); signals architectural debt — needs refactor or limit adjustment |
| [#1209](https://github.com/moltis-org/moltis/pull/1209) **heartbeat.update patch semantics** | 1 day | Fix for config-destructive bug; should be reviewed/merged quickly to prevent config loss |
| [#1208](https://github.com/moltis-org/moltis/pull/1208) **heartbeat active hours** | 1 day | Completes implemented-but-unused feature; low risk, high value |
| [#1206](https://github.com/moltis-org/moltis/pull/1206) **Files library** | 1 day | Large feature PR; needs design review (API, security, container mounts, persistence) |

**Maintainer Action Items**: Prioritize Podman investigation (#1095), merge heartbeat fixes (#1209, #1208), review Files library PR (#1206), and address CI-breaking file size (#1202).

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-18

## 1. Today's Overview

CoPaw shows **very high development velocity** with 33 PRs and 12 issues updated in the last 24 hours. The project is in active feature development and bug-fixing mode: 20 PRs were merged/closed today, indicating strong maintainer throughput. No new release was cut, but multiple PRs target v2.1.x stability (console UX, provider unification, MCP/tooling fixes) and new capabilities (DataPaw app, AnySearch web search, PowerContext memory). Community engagement is healthy — several first-time contributor PRs are open and under review.

## 2. Releases

**No new releases today.** The latest published version remains **v2.1.0** (docker tag `2.0.0post3` referenced in issues). Several merged PRs (#7017, #7036, #6975, #6968, #6981, #5151) contain user-facing fixes that would typically ship in a v2.1.1 patch.

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#7017](https://github.com/agentscope-ai/QwenPaw/pull/7017) | **fix** | Newly installed PawApps activate immediately without manual reload; updates trigger page reload | ✅ UX: eliminates "refresh to see new app" friction |
| [#7036](https://github.com/agentscope-ai/QwenPaw/pull/7036) | **feat** | Unified media download controls (audio player bar, image download) | ✅ UX: consistent media handling in chat |
| [#6975](https://github.com/agentscope-ai/QwenPaw/pull/6975) | **fix** | Context-usage ring now updates after `/compact` command | ✅ Stability: accurate token accounting post-compaction |
| [#6968](https://github.com/agentscope-ai/QwenPaw/pull/6968) | **fix** | Stop counting image base64 as text tokens (was inflating usage ~700k tokens/2MB image) | 🔥 Critical: fixes false "context full" warnings |
| [#6981](https://github.com/agentscope-ai/QwenPaw/pull/6981) | **chore** | Remove `/approve` `/deny` hints from i18n placeholders (7 locales) | 🧹 Polish |
| [#5151](https://github.com/agentscope-ai/QwenPaw/pull/5151) | **fix** | GitPanel tabs styles broken due to `ant-` vs `qwenpaw` CSS prefix mismatch | 🐛 UI: Git panel tabs now render correctly |
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | **feat** | **DataPaw** native app runtime + durable analysis workspace (first-party data-science app) | 🚀 Major: new built-in PawApp for data workflows |
| [#7083](https://github.com/agentscope-ai/QwenPaw/pull/7083) | **feat** | Compact background task list, add scroll hint | 🎨 Console UX polish |

**Net progress**: 8 merged PRs spanning console UX, token accounting, media handling, Git UI, and a brand-new first-party app (DataPaw).

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) | Issue (Closed) | 7 | **MCP tool naming regression in v2.0** — tools renamed to `[mcp-key]__[tool_name]` but resolution fails; Docker v2.0.0post3 |
| [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | Issue (Open) | 6 | **Cross-session cancellation bug** — Console stop request cancels active Feishu session when session identities cross between UI sessions |
| [#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925) | Issue (Open) | 3 | **Agent collaboration in single chat window** — users expect multi-agent dialogue in one session, not new session per turn |
| [#7085](https://github.com/agentscope-ai/QwenPaw/issues/7085) | Issue (Open) | 3 | **Per-channel model configuration** — DingTalk=GPT-4o, WeChat=Qwen-Max, Console=local Llama; currently global/agent-level only |
| [#7087](https://github.com/agentscope-ai/QwenPaw/pull/7087) | PR (Open) | — | **Client-side media URL localization** — download remote URLs (web tool images) locally before sending to model to avoid 403/hotlink failures |

**Pattern**: Multi-channel deployments (Feishu, DingTalk, WeChat, Console) are driving demand for **channel-scoped configuration** (models, sessions, media handling) and **session isolation fixes**.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR | Notes |
|----------|-------|--------|--------|-------|
| 🔴 **Critical** | [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) Agent crashes on tool call (`async for` over coroutine) | Closed (invalid?) | — | `TypeError: 'async for' requires __aiter__` in `_execute_tool_call`; v2.1.0 |
| 🔴 **Critical** | [#7088](https://github.com/agentscope-ai/QwenPaw/issues/7088) OneBot QQ image URLs expire (2h `rkey`) → 400 + poisoned session history | Closed | — | Stale URLs in history break all subsequent replies; needs client-side download + re-upload |
| 🟠 **High** | [#7077](https://github.com/agentscope-ai/QwenPaw/issues/7077) Plugin runtime hooks lost after workspace reload (hot-install) | Closed | — | `register_runtime_hook`/`register_skill_provider` callbacks not re-attached on workspace replacement |
| 🟠 **High** | [#7082](https://github.com/agentscope-ai/QwenPaw/issues/7082) Pydantic `_StructuredOutputDynamicClass` not fully defined → MODEL_EXECUTION_ERROR | Open | — | Blocks console channel startup; suggests `model_rebuild()` needed |
| 🟡 **Medium** | [#7051](https://github.com/agentscope-ai/QwenPaw/issues/7051) Console images lost on session reload (backend serves data URL, frontend broken thumbnail) | Closed | — | Images render first send, then disappear after reopen |
| 🟡 **Medium** | [#7084](https://github.com/agentscope-ai/QwenPaw/issues/7084) Single history conversation unclickable in new chat until second message sent | Open | — | Edge-case UI regression |
| 🟢 **Low** | [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) MCP tool not found after v2.0 upgrade (naming scheme change) | Closed | — | 7 comments; likely config/docs gap |

**Observation**: 4/7 bugs closed today, but #7082 (Pydantic) and #7084 (history click) remain open with no linked fix PRs. The OneBot image expiry (#7088) and plugin hook loss (#7077) are architectural — expect follow-up PRs.

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|-----------------------------|-----------|
| **Per-channel model config** | [#7085](https://github.com/agentscope-ai/QwenPaw/issues/7085) | 🟢 High | Multi-channel deployments are core use case; aligns with provider unification PR [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) |
| **Single-window agent collaboration** | [#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925) | 🟡 Medium | UX gap for multi-agent workflows; may need session model changes |
| **PowerContext long-term memory backend** | [#7079](https://github.com/agentscope-ai/QwenPaw/issues/7079) / [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | 🟢 High | PR open, implements `BaseMemoryManager` extension point; first-time contributor |
| **AnySearch web search (MCP + SearchProvider)** | [#7081](https://github.com/agentscope-ai/QwenPaw/pull/7081) / [#6817](https://github.com/agentscope-ai/QwenPaw/pull/6817) | 🟢 High | Two PRs (one closed, one open) — vendor integration actively pursued |
| **Skill pool search/filter in CLI** | [#7090](https://github.com/agentscope-ai/QwenPaw/issues/7090) | 🟡 Medium | Hundreds of skills unsearchable; low-effort UX win |
| **Volcengine Agent Plan / Xiaomi MiMo V2.5 providers** | [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) | 🟢 High | PR open since July, adds two major Chinese cloud providers |
| **Session-scoped multi-project directories** | [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) | 🟢 High | PR open, enables ordered project list per chat — power-user feature |
| **Persistent workspace artifact cards** | [#6719](https://github.com/agentscope-ai/QwenPaw/pull/6719) | 🟡 Medium | WorkBuddy-style artifacts; large PR, may need review cycles |

**Top 3 predicted for v2.1.1/v2.2**: Per-channel models, PowerContext memory, AnySearch integration.

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **v2.0 upgrade broke MCP tools** | [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) (7 comments) | 😡 Frustrated — "always Tool notfound" |
| **Cross-channel session interference** | [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) (6 comments) | 😰 Anxious — "active Feishu conversation cancelled by Console stop" |
| **Agent collaboration UX** | [#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925) | 😕 Confused — "why new session per turn? must switch agents to see dialogue" |
| **Token accounting false alarms** | [#6968](https://github.com/agentscope-ai/QwenPaw/pull/6968) (merged) | 😤 Annoyed — "context ring full after 2 images" |
| **Image persistence in Console** | [#7051](https://github.com/agentscope-ai/QwenPaw/issues/7051) | 😞 Disappointed — "images disappear on reload" |
| **Plugin hooks vanish on hot-reload** | [#7077](https://github.com/agentscope-ai/QwenPaw/issues/7077) | 😠 Blocked — plugin developers affected |
| **Positive: DataPaw app excitement** | [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) (merged, screenshots) | 😍 Enthusiastic — "durable analysis workspace" |

**Overall**: Users are **pushing multi-channel, multi-agent, plugin-heavy workflows** and hitting v2.0/v2.1 growing pains. Core stability (tokens, images, sessions) is improving fast via merged PRs.

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) Provider unification & model routing | 28 days (opened 2026-07-21) | **Foundational** — enables per-channel models, capability routing, fallback; blocked on review | Assign maintainer review; this unblocks #7085 |
| [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) Volcengine + Xiaomi providers | 21 days (opened 2026-07-28) | Strategic for Chinese enterprise users; large diff | Review & merge for v2.1.1 |
| [#6719](https://github.com/agentscope-ai/QwenPaw/pull/6719) Workspace artifact cards | 13 days (opened 2026-08-05) | Major UX feature (WorkBuddy parity); 300+ lines | Needs design review + testing |
| [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) Session-scoped multi-project dirs | 5 days | Power-user workflow; changes `cwd` resolution semantics | Review for breaking changes |
| [#7082](https://github.com/agentscope-ai/QwenPaw/issues/7082) Pydantic `_StructuredOutputDynamicClass` error | 1 day (new) | **Blocks console startup** for some users | Urgent: reproduce & fix or workaround |
| [#7087](https://github.com/agentscope-ai/QwenPaw/pull/7087) Client-side media URL localization | 1 day | Fixes OneBot 403 + general hotlink protection | Review & merge — complements #7088 fix |

---

**Project Health Score: 🟢 Strong** — High merge rate (20/33 PRs), active community, clear roadmap signals. Main risks: Pydantic regression (#7082) and session-crossing bug (#7011) need quick fixes to maintain v2.1.x stability perception.

*Data as of 2026-08-18 00:00 UTC. Links point to agentscope-ai/QwenPaw repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-18

## 1. Today's Overview
ZeroClaw shows **high engineering velocity** with 50 PRs and 11 issues updated in 24 hours. The project is in a **stabilization & hardening phase**: multiple security fixes (SSRF, action-budget atomicity, API key leakage) are landing, CI infrastructure is being consolidated (shared Clippy runner, scheduled cross-platform tests), and a major RFC for **Agent Portability** (#10069) signals the next product direction. No releases today, but several merged PRs (#9996, #10039, #9547, #9973, #10000) close high-severity bugs and reduce attack surface.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Change |
|----|------|--------|
| [#9996](https://github.com/zeroclaw-labs/zeroclaw/pull/9996) | Security / Runtime | **Atomic action-budget accounting** — reserve before tool execution, commit after success; fixes parallel over-consumption (closes #9594, #9849). |
| [#10039](https://github.com/zeroclaw-labs/zeroclaw/pull/10039) | CI | **Shared Clippy runner** (`scripts/ci/run_clippy.sh`) across required/advisory workflows; eliminates drift (closes #7884). |
| [#9547](https://github.com/zeroclaw-labs/zeroclaw/pull/9547) | Dependencies | **CPAL 0.15 → 0.18** upgrade with Voice Wake migration; default 48 kHz input, normalized PCM formats (closes #9516). |
| [#9973](https://github.com/zeroclaw-labs/zeroclaw/pull/9973) | Security / Providers | **Gemini API keys moved from URLs to `x-goog-api-key` header**; marked sensitive in logs. |
| [#10000](https://github.com/zeroclaw-labs/zeroclaw/pull/10000) | Security / Channels | **Bounded HTTP readers** for QQ (10 MiB) & Mattermost (25 MiB) inbound downloads; prevents unbounded memory. |
| [#10043](https://github.com/zeroclaw-labs/zeroclaw/pull/10043) | CI | Removed duplicate architecture-test guards from Lint; ownership moved to required Test job. |
| [#10010](https://github.com/zeroclaw-labs/zeroclaw/pull/10010) | Test / Cron | Fixed ETXTBSY race in custom-shell cron test via symlink to PATH-resolved `sh`. |
| [#9993](https://github.com/zeroclaw-labs/zeroclaw/pull/9993) | Security / Email | Email attachments now built **only from `MediaAttachment.data`**; eliminates implicit local-file reads. |
| [#9612](https://github.com/zeroclaw-labs/zeroclaw/pull/9612) | Security / WhatsApp | Approval token registered **before** any side effects; two exit paths cleaned up to prevent orphan tokens. |
| [#9765](https://github.com/zeroclaw-labs/zeroclaw/pull/9765) | Runtime / SOP | SOP definitions now loaded from **shared workspace**, not `data_dir`; fixes definition reload mismatch. |
| [#9398](https://github.com/zeroclaw-labs/zeroclaw/pull/9398) | CI | Added **scheduled macOS/Windows nextest runs** (nightly 03:17 UTC + manual dispatch). |

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#10069](https://github.com/zeroclaw-labs/zeroclaw/issues/10069) | RFC | 0 comments, created today | **Agent Portability** — 3-phase plan: native export bundles → import CLI → cross-deployment sync. Linked to WIP [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) (`zeroclaw agents export`). |
| [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) | PR | Open since 2026-07-04, large (XL) | **SSRF hardening for `file_download`** — operator opt-in `allowed_private_hosts`; split into focused slice [#10070](https://github.com/zeroclaw-labs/zeroclaw/pull/10070) per maintainer feedback. |
| [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) | PR | Open since 2026-08-13, XL | **Agent export CLI** — manifest + config closure + workspace tree; first deliverable of RFC #10069. |
| [#10021](https://github.com/zeroclaw-labs/zeroclaw/pull/10021) | PR | Trusted contributor, p2 | **Delegate thinking policy** — apply target runtime profile to independent delegates; clears inherited state. |
| [#10003](https://github.com/zeroclaw-labs/zeroclaw/pull/10003) | PR | Trusted contributor, p2, XL | **Reliable provider attempt accounting** — exact rejected/accepted counts across retries, failover, timeout, cancellation. |

## 5. Bugs & Stability (Reported Today, Ranked by Severity)
| Severity | Issue | Summary | Fix PR |
|----------|-------|---------|--------|
| **S1 – Workflow Blocked** | [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) | SOP engine runs later steps **before** recording output-schema rejection; later steps execute despite validation failure. | — |
| **S2 – Degraded Behavior** | [#10067](https://github.com/zeroclaw-labs/zeroclaw/issues/10067) | Single oversized tool result **fails turn outright** instead of degrading (1 MB shell-output cap treated as memory bound, not context bound). | — |
| **S2** | [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | Interactive agent session **caps context at 32k tokens** ignoring `max_context_tokens = 131072`. | — |
| **S2** | [#10058](https://github.com/zeroclaw-labs/zeroclaw/issues/10058) | ZeroCode file explorer **search mode ignores Up/Down/Page keys**; first match stuck selected. | [#10065](https://github.com/zeroclaw-labs/zeroclaw/pull/10065) (open) |
| **S3 – Minor** | [#9714](https://github.com/zeroclaw-labs/zeroclaw/issues/9714) | Hardware timeout handlers **discard `Elapsed` error context**; converted to plain `anyhow` messages. | — (closed, fix implied in merged PRs) |

> **Note**: Two high-severity budget bugs (#9594, #9849) were **closed today** via atomic accounting fix [#9996](https://github.com/zeroclaw-labs/zeroclaw/pull/9996).

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Agent Portability (export/import bundles)** | RFC [#10069](https://github.com/zeroclaw-labs/zeroclaw/issues/10069) + PR [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) | **High** — PR is XL but active; first phase (native export) underway. |
| **Per-agent provider runtime option isolation** | PR [#10053](https://github.com/zeroclaw-labs/zeroclaw/pull/10053) (test) | **High** — cross-family regression test added; implies feature already implemented. |
| **Delegated agents respect provider fallbacks** | Issue [#9543](https://github.com/zeroclaw-labs/zeroclaw/issues/9543) (closed) + PR [#10021](https://github.com/zeroclaw-labs/zeroclaw/pull/10021) | **High** — fix in review; critical for multi-provider reliability. |
| **Scheduled cross-platform CI (macOS/Windows)** | PR [#9398](https://github.com/zeroclaw-labs/zeroclaw/pull/9398) (merged) | **Done** — nightly runs now configured. |
| **SSRF-hardened `file_download` with operator opt-in** | PR [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) → [#10070](https://github.com/zeroclaw-labs/zeroclaw/pull/10070) | **Medium** — large refactor split; focused slice under review. |

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Context window silently capped at 32k** | [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) — user configured 131k, sees `ctx: 15,538 / 32,000` | High — breaks long-session workflows; config ignored. |
| **SOP validation runs subsequent steps on failure** | [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) — “later steps really execute” | High — wastes compute, produces invalid state. |
| **Tool result > context = hard failure** | [#10067](https://github.com/zeroclaw-labs/zeroclaw/issues/10067) — no degradation path | Medium — single large output kills entire turn. |
| **ZeroCode file explorer search unusable** | [#10058](https://github.com/zeroclaw-labs/zeroclaw/issues/10058) — arrow keys dead in filter mode | Medium — “good first issue” labeled; UX regression. |
| **Security: API keys in URLs, unbounded downloads, SSRF** | Multiple closed PRs today (#9973, #10000, #9993, #8713) | High — operator-facing risks actively mitigated. |

## 8. Backlog Watch (Long-Open / Needs Maintainer Attention)
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) | 45 days | Open, XL, needs-author-action | **SSRF fix for `file_download`** — security critical; split into [#10070](https://github.com/zeroclaw-labs/zeroclaw/pull/10070) but original still open. |
| [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) | 5 days | Open, XL, needs-author-action | **Agent export CLI** — flagship feature for portability RFC; large scope, needs review cycles. |
| [#10003](https://github.com/zeroclaw-labs/zeroclaw/pull/10003) | 3 days | Open, XL, needs-maintainer-review | **Reliable provider attempt accounting** — intricate retry/failover logic; high risk if wrong. |
| [#10021](https://github.com/zeroclaw-labs/zeroclaw/pull/10021) | 2 days | Open, M, needs-maintainer-review | **Delegate thinking policy** — affects agent delegation correctness; trusted contributor. |
| [#9808](https://github.com/zeroclaw-labs/zeroclaw/pull/9808) | 11 days | Open, L, dependabot | **46 Rust dependency updates** (tokio, clap, etc.) — broad surface; needs CI green. |

---
**Health Indicators**: 🟢 **Strong** — security bugs fixed rapidly, CI hardened, RFC-to-implementation path visible.  
**Risk Areas**: S1/S2 bugs opened today (#10066, #10067, #10068) have no fix PRs yet; large PRs (#8713, #9986, #10003) need maintainer bandwidth to land.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*