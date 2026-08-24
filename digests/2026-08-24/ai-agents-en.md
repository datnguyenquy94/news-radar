# OpenClaw Ecosystem Digest 2026-08-24

> Issues: 242 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-24 01:46 UTC

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

# OpenClaw Project Digest — 2026-08-24

## 1. Today's Overview

OpenClaw shows **exceptionally high velocity** with 742 total GitHub items updated in the last 24 hours (242 issues, 500 PRs). The project is in active beta maintenance with **no new releases** but heavy triage and fix activity. Critical reliability defects dominate the issue landscape — message loss, session state corruption, zombie processes, and delivery failures across Telegram, Discord, WhatsApp, and Slack. The PR pipeline reflects maintainers aggressively targeting P1/P0 bugs with 96 merged/closed PRs today, though 404 remain open indicating substantial backlog pressure.

## 2. Releases

**No new releases published today.** The latest version appears to be in the `2026.7.x` beta train (referenced in issues as `beta.7`, `2026.7.1-2`, `2026.7.2-beta.3`). No release notes or migration guides available for today.

## 3. Project Progress — Merged/Closed PRs Today (96 items)

Key merged fixes addressing critical reliability issues:

| PR | Scope | Impact |
|----|-------|--------|
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | Gateway: keep conversation delivery within agent bindings | Fixes multi-agent conversation tool cross-contamination (P1, message-delivery, security-boundary) |
| [#123975](https://github.com/openclaw/openclaw/pull/123975) | Scripts: clean up tsgo process trees on timeout/signal | Prevents wedged compiler processes (P2, automation) |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | Models: keep Claude CLI OAuth available in Control UI | Restores OAuth persistence across gateway restarts (P2, auth-provider) |
| [#128371](https://github.com/openclaw/openclaw/pull/128371) | Release: authorize focused beta evidence | Unblocks beta.3 release gate (P1, automation) |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | UI: review install policy warnings | Admin acknowledgement flow for security warnings (P2, security-boundary) |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | Security: require acknowledgement for install policy warnings | Interactive CLI confirmations for suspicious installs (P2, security-boundary) |

**Pattern**: Merged PRs cluster around **delivery reliability**, **auth persistence**, **process hygiene**, and **security guardrails** — all aligned with the top-reported bug classes.

## 4. Community Hot Topics — Most Active Issues/PRs

### Top Issues by Comment Count
| Issue | Comments | Core Problem | Link |
|-------|----------|--------------|------|
| [#119796](https://github.com/openclaw/openclaw/issues/119796) | 15 | **Windows vitest teardown EBUSY** — SQLite handle not released on agent state DB | [Closed] |
| [#109490](https://github.com/openclaw/openclaw/issues/109490) | 12 | **Codex app-server turn interrupted** after client-delegated tool result (terminate:true) — promised work never executes | [Closed, duplicate] |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 9 | **Zombie process leak** — unreaped hook/tool children accumulate, degrading runtime | [Open, P1] |
| [#111857](https://github.com/openclaw/openclaw/issues/111857) | 8 | **CLI budget reopens compacted JSONL** — inflates prompt estimates, triggers repeated compaction | [Open, P1] |
| [#108215](https://github.com/openclaw/openclaw/issues/108215) | 7 | **Context usage drops 57%→13% without compaction** after large tool output | [Closed, P1] |

### Top PRs by Engagement (Ready for Review)
| PR | Status | Risk Tags | Link |
|----|--------|-----------|------|
| [#112932](https://github.com/openclaw/openclaw/pull/112932) | Ready for maintainer look | 🚨 compatibility, 🚨 auth-provider, 🚨 session-state | Re-seed tombstoned OAuth from fresh Codex login |
| [#127353](https://github.com/openclaw/openclaw/pull/127353) | Ready for maintainer look | 🚨 message-delivery | Stop retry storms after definitive channel rejections |
| [#128357](https://github.com/openclaw/openclaw/pull/128357) | Needs proof | 🚨 message-delivery, 🚨 security-boundary | Discord: revalidate delivery authority per send |
| [#123356](https://github.com/openclaw/openclaw/pull/123356) | Waiting on author | 🚨 compatibility, 🚨 session-state | Control UI: stage slash command arguments in composer |

**Underlying needs**: Operators are hitting **message loss in production** (Telegram, Discord, WhatsApp), **session state corruption** across restarts, **auth drift** after migrations, and **resource leaks** that degrade long-running gateways. The community is demanding **delivery guarantees** and **observable recovery**.

## 5. Bugs & Stability — Ranked by Severity

### P0 / Critical (Release Blockers)
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#108520](https://github.com/openclaw/openclaw/issues/108520) | 🚨 **iOS app update breaks Talk Mode & chat** — gateway connects but no functionality (P0, ux-release-blocker) | No PR linked |
| [#128067](https://github.com/openclaw/openclaw/issues/128067) | **Beta.7 field report: 6 reliability defect classes** — persistence, delivery, restart-recovery + 3 minor (multi-agent, 3 weeks evidence) | No PR linked |

### P1 — Data Loss / Message Loss / Session Corruption
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | **Zombie process accumulation** — unreaped hook/tool children strangle runtime | No PR linked |
| [#111857](https://github.com/openclaw/openclaw/issues/111857) | **CLI budget reopens compacted JSONL** — inflates prompts, repeated compaction | No PR linked |
| [#126246](https://github.com/openclaw/openclaw/issues/126246) | **Telegram durable outbound stuck in `send_attempt_started`** — lost on restart | No PR linked |
| [#127948](https://github.com/openclaw/openclaw/issues/127948) | **WhatsApp group replies render BLANK** when quote cache expired | No PR linked |
| [#112668](https://github.com/openclaw/openclaw/issues/112668) | **Subagent announce dropped** by `sessions_yield` abort-settle timeout + Discord reconnect | No PR linked |
| [#86592](https://github.com/openclaw/openclaw/issues/86592) | **Inbound user messages not persisted** to JSONL when agent attempt throws | No PR linked |
| [#125344](https://github.com/openclaw/openclaw/issues/125344) | **Memory-core embedding workers & Codex app-servers leak** — no idle TTL, strangle cgroup | No PR linked |
| [#126900](https://github.com/openclaw/openclaw/issues/126900) | **`maxActiveTranscriptBytes` loops compaction forever** when compacted transcript stays above threshold | No PR linked |
| [#126906](https://github.com/openclaw/openclaw/issues/126906) | **Denying write tool silently disables memory persistence** — agent reports success anyway | No PR linked |

### P1 — Platform/Integration Bugs
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#127176](https://github.com/openclaw/openclaw/issues/127176) | **CLI & Node Host alternate device metadata approvals on Windows** | PR #127059 (preserve legacy workspace) related |
| [#126631](https://github.com/openclaw/openclaw/issues/126631) | **Sandbox skills bind-mount creates root-owned `/workspace/.openclaw`** — locks out uid 1000 | No PR linked |
| [#119772](https://github.com/openclaw/openclaw/issues/119772) | **Logbook vision analysis fails** — structured extraction has no fallback to generic model runtime | No PR linked |
| [#125838](https://github.com/openclaw/openclaw/issues/125838) | **QQBot slash commands (/think, /status) no reply** — WebChat works | No PR linked |
| [#128172](https://github.com/openclaw/openclaw/issues/128172) | **macOS App Health stays pending** despite healthy channel | No PR linked |

### P2 — UX Friction / Config / Docs
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#116062](https://github.com/openclaw/openclaw/issues/116062) | **Anthropic provider group missing** from model settings panel after restart | No PR linked |
| [#110153](https://github.com/openclaw/openclaw/issues/110153) | **Tool-error warnings on benign non-zero exits** (grep no-match, retries) | No PR linked |
| [#78537](https://github.com/openclaw/openclaw/issues/78537) | **`allowInsecurePath` Linux uid-check undocumented** — blocks system binaries | No PR linked |
| [#103879](https://github.com/openclaw/openclaw/issues/103879) | **Migration leaves stale `plugins.entries` config** causing auth failures | No PR linked |
| [#126694](https://github.com/openclaw/openclaw/issues/126694) | **Docs `/install` page missing direct download link** | No PR linked |

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood for Next Version |
|-------|---------|----------------------------|
| [#105710](https://github.com/openclaw/openclaw/issues/105710) | **First-class RCS channel plugin** with Twilio adapter (P3) | Medium — maintainer decision needed on ownership tier |
| [#52046](https://github.com/openclaw/openclaw/issues/52046) | **Non-blocking heartbeat execution** to prevent 5-10s message delays (P2) | High — architectural, aligns with reliability push |
| [#124305](https://github.com/openclaw/openclaw/pull/124305) | **WhatsApp configurable `replyRate`** for probabilistic inbound (P3, PR open) | High — small scope, PR exists |
| [#128435](https://github.com/openclaw/openclaw/pull/128435) | **Custom emoji discovery** via `emoji-list` across Discord, Slack, Telegram (P2, PR open) | High — PR ready for review |
| [#128447](https://github.com/openclaw/openclaw/pull/128447) | **Opt-in container isolation** for node-hosted worker sessions (P2, PR open) | Medium — milestone-6 work per `docs/plan/runners.md` |
| [#128131](https://github.com/openclaw/openclaw/pull/128131) | **Replace handwritten Claude sessions with Anthropic Agent SDK** (P2, PR open) | High — strategic dependency alignment |

**Predicted next version focus**: Delivery reliability hardening (Telegram/WhatsApp/Discord), auth persistence fixes, zombie process cleanup, and Control UX polish (emoji, slash commands, install policy UI). The RCS plugin and container isolation are likely post-beta.

## 7. User Feedback Summary — Real Pain Points

| Channel | Pain Point | Evidence |
|---------|------------|----------|
| **Telegram** | Messages stuck in `send_attempt_started`, lost on restart; commentary not delivered as progress drafts | [#126246](https://github.com/openclaw/openclaw/issues/126246), [#111944](https://github.com/openclaw/openclaw/issues/111944) |
| **WhatsApp** | Group replies render as **blank bubbles** when quote cache expires | [#127948](https://github.com/openclaw/openclaw/issues/127948) |
| **Discord** | Subagent announces dropped during WS reconnect + yield timeout | [#112668](https://github.com/openclaw/openclaw/issues/112668) |
| **Slack** | Button interactions dispatch heartbeat wake instead of reply turn | [#102380](https://github.com/openclaw/openclaw/issues/102380) |
| **iOS App** | **Complete breakdown** after auto-update — Talk Mode & chat non-functional | [#108520](https://github.com/openclaw/openclaw/issues/108520) |
| **Windows** | Device metadata approval flapping between CLI/TUI and Node Host | [#127176](https://github.com/openclaw/openclaw/issues/127176) |
| **Sandbox** | Skills bind-mount creates root-owned dir, locks out sandbox user | [#126631](https://github.com/openclaw/openclaw/issues/126631) |
| **Long-running gateways** | Zombie process accumulation degrades performance over time | [#97616](https://github.com/openclaw/openclaw/issues/97616), [#125344](https://github.com/openclaw/openclaw/issues/125344) |
| **Session recovery** | Compacted sessions re-read entirely, context usage drops mysteriously | [#111857](https://github.com/openclaw/openclaw/issues/111857), [#108215](https://github.com/openclaw/openclaw/issues/108215) |
| **Auth migration** | Stale plugin config breaks provider auth after catalog→plugin migration | [#103879](https://github.com/openclaw/openclaw/issues/103879) |

**Satisfaction signal**: Heavy operator frustration on **delivery reliability** and **silent data loss**. Positive notes on Control UI improvements (install policy review, slash command staging) but core gateway stability remains the blocker.

## 8. Backlog Watch — Long-Unanswered High-Impact Items

| Item | Age | Severity | Why It Needs Attention |
|------|-----|----------|------------------------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 56 days | P1 | **Zombie process leak** — fundamental runtime degradation, no fix PR, affects all long-running deployments |
| [#86214](https://github.com/openclaw/openclaw/issues/86214) | 92 days | P1 | **Codex app-server client closes mid-turn** with large `logs_2.sqlite` — blocks image/tool requests, no repro on main but field reports persist |
| [#86592](https://github.com/openclaw/openclaw/issues/86592) | 91 days | P1 | **Inbound messages not persisted on agent error** — architectural gap in durability guarantee |
| [#78537](https://github.com/openclaw/openclaw/issues/78537) | 110 days | P2 | **`allowInsecurePath` Linux behavior undocumented** —

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-08-24)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **bifurcated maturity**: a top tier of 5 projects (OpenClaw, NanoBot, IronClaw, NanoClaw, ZeroClaw) operating at **high velocity with architectural ambition**, a middle tier of 4 projects (Hermes Agent, Moltis, CoPaw, PicoClaw) in **active stabilization**, and a trailing tier (LobsterAI, NullClaw, ZeptoClaw) in **maintenance or dormancy**. Across the board, **reliability hardening** (delivery guarantees, session persistence, auth resilience) has overtaken feature expansion as the dominant theme. Projects are converging on **runtime plugin architectures**, **unified attachment/session contracts**, and **security-by-default** (SSRF protection, credential isolation) — signaling an industry shift from "make it work" to "make it production-safe."

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Status | Health Score* |
|---------|--------------|-----------|-------------------|----------------|---------------|
| **OpenClaw** | 242 | 500 | 96 | Beta (2026.7.x), no new release | 🟢 **9/10** |
| **NanoBot** | 2 | 19 | 5 | Main branch only | 🟢 **8/10** |
| **Hermes Agent** | 19 closed | 11 merged | 11 | v0.20.0, patch imminent | 🟢 **8/10** |
| **IronClaw** | 12 | 24 | 5 | Pre-v1.4.0 epic | 🟢 **8/10** |
| **NanoClaw** | 4 | 50 | ~20 | v2.3.0 PR merged, release imminent | 🟢 **8/10** |
| **ZeroClaw** | 2 new | 50 | 6 | Pre-release, stacked PR chains | 🟢 **8/10** |
| **Moltis** | 1 new | 9 merged | 9 | Accumulating fixes | 🟢 **7/10** |
| **CoPaw** | 6 active | 15 | 8 | v2.1.0, fixes batching for v2.1.1 | 🟢 **7/10** |
| **PicoClaw** | 2 closed | 7 | 5 merged | No release, stale closures | 🟡 **6/10** |
| **LobsterAI** | 4 closed (stale) | 3 merged (stale) | 3 | Dormant, no release | 🔴 **3/10** |
| **NullClaw** | 1 new | 0 | 0 | 2026.8.22, quiet | 🟡 **4/10** |
| **ZeptoClaw** | 0 | 0 | 0 | No activity | ⚫ **1/10** |

*Health Score: 1-10 composite of velocity, fix throughput, release cadence, community engagement, and architectural clarity.

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale of operation**: 742 GitHub items/24h dwarfs all others (next: NanoClaw/ZeroClaw at ~50 PRs). Reflects largest deployment base and contributor pool.
- **Multi-channel breadth**: Native Telegram, Discord, WhatsApp, Slack, iOS, Windows, sandbox — most projects cover 2-4 channels.
- **Security boundary investment**: Install policy acknowledgements, gateway delivery isolation, auth persistence — ahead of peer guardrails.
- **Observability push**: Process naming, structured logging, delivery state machines — operational maturity leads ecosystem.

**Technical Approach Differences:**
- **Gateway-centric architecture**: Centralized message routing, session state, and channel adapters vs. NanoBot/IronClaw's more decentralized runtime models.
- **Beta train with evidence gates**: `2026.7.x` beta requires "focused beta evidence" PRs (#128371) — unique release discipline.
- **Control UI as first-class surface**: Admin-facing install policy, slash command staging, emoji discovery — peers treat UI as secondary.

**Community Size**: Largest by issue/PR volume (242 issues, 500 PRs/24h). Comment density on top issues (15 on #119796) indicates deep operator engagement. No peer matches this scale.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|------------|----------|----------------|
| **Message Delivery Reliability** | OpenClaw, NanoClaw, Moltis, PicoClaw, ZeroClaw | Deduplication (OpenClaw #126246, NanoClaw #2404), retry storm prevention (OpenClaw #127353), transit acknowledgment (Moltis #1226), authoritative revalidation (ZeroClaw RFC #9487) |
| **Session Persistence & Recovery** | OpenClaw, Hermes Agent, NanoClaw, ZeroClaw, CoPaw | Compacted transcript re-read bugs (OpenClaw #111857, #108215), transcript restore after trim (ZeroClaw #10286), session reconnect robustness (Hermes #93430), runtime-owned sessions (ZeroClaw RFC #9487) |
| **Auth Resilience & Migration** | OpenClaw, NanoBot, NanoClaw, CoPaw, ZeroClaw | OAuth persistence across restarts (OpenClaw #125471), Docker OAuth path fixes (NanoBot #5445), rotating refresh tokens (CoPaw #7066), credential pool self-heal (Hermes #93425), provider classification fixes (ZeroClaw #9447) |
| **Runtime Plugin / WASM Architecture** | IronClaw, ZeroClaw, NanoBot, Moltis | Persistent per-user sandboxes with proxy (IronClaw #7732), runtime WASM plugin activation (ZeroClaw #10146), MCP schema budgeting (NanoBot #5388), skill sidecar materialization (Moltis #1234) |
| **Security Hardening (SSRF, Credential Isolation)** | PicoClaw, OpenClaw, ZeroClaw, IronClaw | Multi-channel SSRF blocks (PicoClaw #3322-3324), install policy acknowledgements (OpenClaw #116489), workspace-relative forbidden paths (ZeroClaw RFC #8424), sandbox egress auth manifest (IronClaw #7810) |
| **Observability & Process Hygiene** | OpenClaw, NanoBot, Hermes Agent, CoPaw | Process naming (NanoBot #5492), zombie process reaping (OpenClaw #97616), lifecycle guard NUL-byte hardening (Hermes #83010), Windows process probe timeouts (CoPaw #6203) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | IronClaw | ZeroClaw | Hermes Agent | Moltis | CoPaw | PicoClaw |
|-----------|----------|---------|----------|----------|--------------|--------|-------|----------|
| **Primary Target** | Multi-channel gateway operators | Developer-centric local agent | Enterprise/team sandbox platform | Architectural purity, protocol design | Terminal-tool reliability | Connector/runtime stability | Chinese-market agent UX | Embedded/edge channel bot |
| **Architecture** | Centralized gateway + channel adapters | Modular runtime + provider contracts | Persistent sandbox + iron-proxy | Runtime-owned sessions + transport adapters | Terminal tool + lifecycle guard | Cron/browser/MCP connectors | Dynamic skill system + auto-memory | Lightweight channel adapters |
| **Channel Breadth** | 7+ (TG, Discord, WA, Slack, iOS, QQ, Web) | 5+ (Linear, Matrix, WebUI, TUI, MCP) | 4+ (Slack, Gmail, Notion, Telegram) | ACP-first, channel-agnostic | Local terminal only | 6+ (WhatsApp, Slack, Browser, MCP, Cron) | WebUI/TUI, MCP, skills | 6+ (WA, TG, Discord, QQ, WeCom, Weixin) |
| **Differentiator** | Delivery guarantees at scale | Provider contract normalization | Credential-mediated sandboxes | RFC-driven contract ratification | Guard crash elimination | Obscura stealth + Browserless v2 | Session-scoped auto-titles + skills | SSRF-first channel security |
| **Release Cadence** | Beta trains with evidence gates | Main-branch continuous | Pre-v1.4.0 epic milestones | Stacked PR chains, no fixed cadence | Patch imminent (v0.20.1) | Accumulating fixes | Batching for v2.1.1 | Ad-hoc, dependency-driven |

**Key Insight**: Projects cluster around **three architectural philosophies**:
1. **Gateway-centric** (OpenClaw, NanoClaw, PicoClaw) — central message router, channel adapters as plugins
2. **Runtime-centric** (NanoBot, IronClaw, ZeroClaw, Hermes) — agent runtime owns sessions, channels as transports
3. **Connector-centric** (Moltis, CoPaw) — cron/browser/MCP/skills as first-class connectors

---

## 6. Community Momentum & Maturity

### **Tier 1: Rapid Iteration + Architectural Ambition** (High velocity, high design discourse)
- **ZeroClaw**: 10+ concurrent RFCs (session ownership, attachments, memory policy, realtime voice), stacked PR chains, maintainer-driven design review. *Pre-v1.0 but highest architectural signal.*
- **IronClaw**: 5 XL PRs on CI alone, v1.4.0 epic with persistent sandbox + proxy, 6 integration bugs filed today showing real adoption.
- **NanoClaw**: v2.3.0 release PR merged, Cursor/Codex providers in review, Chat SDK 4.32 lockstep — shipping features while hardening.

### **Tier 2: Stabilization Sprint** (High fix throughput, clearing critical backlogs)
- **OpenClaw**: 96 PRs merged today targeting P1/P0 bugs; 404 open PRs show backlog pressure but systematic triage.
- **Hermes Agent**: 19 issues closed, 11 PRs merged — guard component crisis resolved, pivoting to auth resilience.
- **Moltis**: 9 PRs merged in 24h across cron, i18n, browser, WhatsApp, MCP, skills, memory — broad surface stabilization.
- **NanoBot**: 5 merged PRs (OAuth fix, turn recovery, dead code, WebUI reasoning, process naming) — rapid response to deployment blockers.

### **Tier 3: Feature Completion & UX Polish** (Merging long-running series)
- **CoPaw**: 8 merged PRs completing skill system dynamism, auto-title sync, token usage fixes, Windows/CLI fixes — v2.1.1 shaping up.
- **PicoClaw**: 5 security/fix PRs merged (WhatsApp restore, 5-channel SSRF, prefix cache) — but stale closures on features signal bandwidth limits.

### **Tier 4: Maintenance / Dormant**
- **LobsterAI**: Stale closures only, security issue improperly closed, no release in 5 months.
- **NullClaw**: Single critical hang issue, no PR activity.
- **ZeptoClaw**: Zero activity.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Delivery guarantees > raw throughput** | OpenClaw (retry storms, definitive rejections), NanoClaw (MCP+XML dedup), Moltis (cron delivery to origin chat), ZeroClaw (durable admission semantics) | Build **idempotent, observable message pipelines** with explicit acknowledgment; assume partial failure. |
| **Session ownership moving to runtime** | ZeroClaw RFC #9487 (runtime-owned sessions), Hermes (session reconnect), NanoClaw (transcript restore), CoPaw (plugin persistence across reload) | **Runtime must own session lifecycle**; gateways/channels become transport adapters. Design for session migration. |
| **Credential isolation as default** | IronClaw (iron-proxy manifest), NanoBot (Docker OAuth fix), ZeroClaw (workspace-relative forbidden paths), PicoClaw (multi-channel SSRF) | **Never pass raw credentials to tools/LLMs**; use mediated proxies, scoped tokens, and filesystem guards. |
| **Plugin architectures shifting to WASM/runtime** | IronClaw (persistent sandbox), ZeroClaw (#10146 plugin activation), NanoBot (MCP schema budgeting), Moltis (skill sidecar materialization) | **Compile-time feature flags are dead**; invest in dynamic plugin loading, capability advertisement, and sandboxing. |
| **Observability as product requirement** | NanoBot (process naming), OpenClaw (delivery state machines), CoPaw (token usage charts), Hermes (guard crash diagnostics) | **Structured logs, metrics, and traces are non-optional**; users debug production via observability, not logs. |
| **Multi-channel attachment unification** | ZeroClaw RFC #9488, Moltis (WhatsApp file persistence), PicoClaw (SSRF-safe media), NanoClaw (Signal mount fix) | **Single attachment model across web, channels, MCP** — normalize early to avoid duplicate handling. |
| **Auth resilience = availability** | Hermes (credential pool poisoning), OpenClaw (OAuth persistence), CoPaw (rotating refresh tokens), NanoBot (Docker OAuth) | **Transient 401 must not poison keys**; implement self-heal, rotation, and fallback flows. |

---

## Summary for Decision-Makers

- **If building a production gateway**: Study **OpenClaw's delivery state machine** and **ZeroClaw's session ownership RFC** — they represent the most mature thinking on reliability.
- **If embedding agents in apps**: **IronClaw's sandbox+proxy model** and **NanoBot's provider contracts** offer the cleanest integration boundaries.
- **If extending channels/tools**: **ZeroClaw's WASM plugin activation** and **Moltis's connector pattern** show where the ecosystem is converging.
- **Avoid**: Projects in Tier 4 (LobsterAI, NullClaw, ZeptoClaw) for new dependencies — insufficient maintenance signal.

The ecosystem is **consolidating around runtime-owned sessions, mediated credentials, and plugin-based extensibility** — the next 6 months will likely see these patterns codified into de-facto standards.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-24

## 1. Today's Overview
NanoBot shows **high development velocity** with 19 PRs updated in the last 24 hours (14 open, 5 merged/closed) and 2 issues updated. The project is in an active refactoring and stabilization phase, with significant work on provider contracts, TUI/WebUI improvements, configuration system unification, and channel integrations. No new releases were published today. The closed PRs indicate progress on Docker OAuth persistence, dead code removal, process identity exposure, and WebUI reasoning/answer separation.

## 2. Releases
**No new releases today.** The project continues development on the main branch with frequent PR merges.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#5445](https://github.com/HKUDS/nanobot/pull/5445) | fix(docker): persist OAuth client data | **Bug Fix** | Fixes OAuth credential persistence in Docker by directing XDG data to mounted instance directory; ensures credentials survive container replacement |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | feat(runtime): add user-controlled turn recovery | **Feature** | Adds explicit Continue/Dismiss recovery for interrupted WebSocket turns; persists sidecar checkpoints without rewriting transcripts |
| [#5475](https://github.com/HKUDS/nanobot/pull/5475) | refactor: remove remaining dead code | **Refactor** | Removes zero-consumer runtime/settings/channel helpers, unused `websocket-client` dependency; narrows exports to real consumers |
| [#5491](https://github.com/HKUDS/nanobot/pull/5491) | fix(webui): keep answer text outside reasoning shell | **Bug Fix** | Preserves assistant answer slices across turns; merges answer slices into single final message while keeping reasoning/tool activity separate |
| [#5492](https://github.com/HKUDS/nanobot/pull/5492) | feat(cli): expose nanobot process identities | **Enhancement** | Names CLI processes by role (`nanobot-agent`, `nanobot-webui`, `nanobot-gateway`, `nanobot-tui`) for better observability |

## 4. Community Hot Topics

### Most Active Issues
| Issue | Activity | Summary |
|-------|----------|---------|
| [#5444](https://github.com/HKUDS/nanobot/issues/5444) | 2 comments, 👍0 | **[CLOSED]** OAuth login failure in Docker — fixed by [#5445](https://github.com/HKUDS/nanobot/pull/5445) |
| [#5493](https://github.com/HKUDS/nanobot/issues/5493) | 0 comments, 👍0 | **[OPEN]** Request for native HTML/.txt/.md preview via iframe `srcdoc` in channels (WeChat, Feishu, Telegram) |

### Most Active PRs (by scope/complexity)
| PR | Labels | Area |
|----|--------|------|
| [#5480](https://github.com/HKUDS/nanobot/pull/5480) | provider, webui, refactor, test, priority: p2, conflict | **Provider contract refactor** — typed LLMUsage contract, normalize token/cache semantics across OpenAI/Anthropic/Bedrock |
| [#5498](https://github.com/HKUDS/nanobot/pull/5498) | documentation, enhancement, webui, feature, test, priority: p2 | **Config onboarding unification** — schema-driven `/config` surface in Agent TUI with optimistic revisions |
| [#5495](https://github.com/HKUDS/nanobot/pull/5495) | documentation, channel, webui, feature, test, priority: p2 | **Linear agent channel** — OAuth + PKCE, signed webhooks via SQLite queue, WebUI setup flow |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) | feat(agent): budget model-visible MCP schemas | **MCP schema budgeting** — opt-in byte budget for model-visible tool schemas, deterministic subset selection |

**Analysis**: The community is pushing on **multi-channel support** (Linear, Matrix) and **configuration UX unification** across TUI/WebUI. The OAuth Docker fix (#5444→#5445) shows rapid response to deployment blockers.

## 5. Bugs & Stability — Reported/Fixed Today

| Severity | Issue/PR | Status | Description |
|----------|----------|--------|-------------|
| **High** | [#5444](https://github.com/HKUDS/nanobot/issues/5444) / [#5445](https://github.com/HKUDS/nanobot/pull/5445) | **Fixed** | OAuth credentials lost in Docker due to XDG path / non-root user permissions |
| **High** | [#5500](https://github.com/HKUDS/nanobot/pull/5500) | Open (PR) | Codex provider: 10s TLS context construction stall per request; fix caches verified/fallback TLS contexts |
| **Medium** | [#5496](https://github.com/HKUDS/nanobot/pull/5496) | Open (PR) | AgentRunner wall-clock timeout didn't cover no-tools requests (recovery, finalization), causing session stalls |
| **Medium** | [#5491](https://github.com/HKUDS/nanobot/pull/5491) | **Fixed** | WebUI: answer text incorrectly nested inside reasoning shell across tool turns |
| **Medium** | [#5467](https://github.com/HKUDS/nanobot/pull/5467) | Open (PR) | TUI resume commands lost `--config`/`--workspace` context; fixed with POSIX/PowerShell quoting |
| **Low** | [#5499](https://github.com/HKUDS/nanobot/pull/5499) | Open (PR) | TUI: empty sessions persisted when opening in new folder; fix makes workspace metadata transient until first message |
| **Low** | [#5490](https://github.com/HKUDS/nanobot/pull/5490) | Open (PR) | WebUI: aggregate turn token usage tooltip unclear; adds model call count, request context, capacity |

**Stability Signal**: 3 high/medium bugs fixed today (#5445, #5491, #5420 recovery), 4 more in review. The TLS caching fix (#5500) addresses a measurable performance regression.

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Linear native agent channel** | [#5495](https://github.com/HKUDS/nanobot/pull/5495) (PR) | **High** — PR open with WebUI setup, OAuth PKCE, SQLite webhook queue |
| **Unified config onboarding (TUI + WebUI)** | [#5498](https://github.com/HKUDS/nanobot/pull/5498), [#5497](https://github.com/HKUDS/nanobot/pull/5497) | **High** — Two coordinated PRs: shared editor contract + TUI surface |
| **HTML/MD/TXT preview in channels** | [#5493](https://github.com/HKUDS/nanobot/issues/5493) | **Medium** — Clear proposal (iframe `srcdoc`), no PR yet |
| **MCP schema byte budget** | [#5388](https://github.com/HKUDS/nanobot/pull/5388) | **Medium** — Opt-in, disabled by default; reduces context pressure |
| **Matrix Element SAS verification flow** | [#5385](https://github.com/HKUDS/nanobot/pull/5385) | **Medium** — Completes modern Element verification support |
| **MCP Apps result metadata preservation** | [#5386](https://github.com/HKUDS/nanobot/pull/5386) | **Medium** — Structured app results through tool progress events |
| **Subagent partial completion metadata** | [#5152](https://github.com/HKUDS/nanobot/pull/5152) | **Low-Medium** — Open since July 28; marks remaining sibling tasks |

**Roadmap Theme**: **Channel ecosystem expansion** (Linear, Matrix), **configuration UX unification**, and **MCP/tool governance** (budgeting, metadata).

## 7. User Feedback Summary

| Pain Point | Evidence | Resolution Status |
|------------|----------|-------------------|
| **Docker OAuth broken** | [#5444](https://github.com/HKUDS/nanobot/issues/5444) — "Failed to login OpenAI via OAuth in Docker" | **Resolved** via [#5445](https://github.com/HKUDS/nanobot/pull/5445) (merged) |
| **TUI session pollution** | [#5499](https://github.com/HKUDS/nanobot/pull/5499) — "Opening TUI in new folder synchronizes workspace metadata" | **Fix in review** |
| **WebUI reasoning/answer confusion** | [#5491](https://github.com/HKUDS/nanobot/pull/5491) — Answer slices split across reasoning shell | **Resolved** (merged) |
| **No document preview in channels** | [#5493](https://github.com/HKUDS/nanobot/issues/5493) — Request for HTML/.md/.txt preview | **Open** (no PR) |
| **Process observability** | [#5492](https://github.com/HKUDS/nanobot/pull/5492) — Generic `bun` process name | **Resolved** (merged) |

**Sentiment**: Users encounter deployment friction (Docker OAuth) and UX rough edges (TUI sessions, WebUI rendering), but fixes land quickly. Feature requests focus on **channel richness** (Linear, document preview) and **configuration ergonomics**.

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Reason for Attention |
|------|-----|---------------------|
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | **28 days** (opened 2026-07-28) | Subagent partial completion metadata; affects multi-agent correctness; has tests but no merge |
| [#5385](https://github.com/HKUDS/nanobot/pull/5385) | **11 days** | Matrix Element SAS flow — security-relevant verification; modern Element compatibility |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) | **11 days** | MCP schema budgeting — architectural, opt-in; could reduce token costs significantly |
| [#5386](https://github.com/HKUDS/nanobot/pull/5386) | **11 days** | MCP Apps metadata preservation — enables rich tool results without context bloat |
| [#5430](https://github.com/HKUDS/nanobot/pull/5430) | **6 days** | Agent task group cleanup — memory leak fix for long-running AgentLoop; has lifecycle tests |
| [#5480](https://github.com/HKUDS/nanobot/pull/5480) | **3 days** | **Conflict** — Provider contract refactor touches OpenAI/Anthropic/Bedrock boundaries; high risk, needs review |

**Maintainer Action Items**:
1. **Review #5480** (provider contract) — conflict flag, cross-provider impact
2. **Triage #5152** — oldest open PR, subagent correctness
3. **Merge #5385/#5386/#5388** — Matrix + MCP trio, 11 days stale
4. **Engage #5493** — document preview feature request, clear implementation path (iframe `srcdoc`)

---

**Project Health**: 🟢 **Healthy** — High PR throughput, rapid bug fix turnaround (Docker OAuth fixed in 4 days), active refactoring with test coverage. Risk concentrated in large refactors (#5480, #5498) and stale MCP/Matrix PRs.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-24

## 1. Today's Overview
Hermes Agent shows **high bug-fix velocity** with 19 issues closed and 11 PRs merged/closed in the last 24 hours, but **zero new releases**. The project is in a stabilization sprint: nearly all recent activity centers on the `cron/lifecycle_guard.py` component, which has been crashing the terminal tool with `ValueError: embedded null byte` across dozens of duplicate reports. A single new security-adjacent issue (#93425) opened today reveals a credential-pool poisoning bug where one transient 401 permanently disables a valid API key. Overall health: **active triage, but a systemic guard-component defect has consumed disproportionate engineering bandwidth**.

## 2. Releases
**No new releases** published today. The latest tagged version remains v0.20.0 (Docker `nousresearch/hermes-agent:v2026.8.3`). All fixes are accumulating on `main`; a patch release (v0.20.1) is likely imminent given the volume of merged guard fixes.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Component | Summary | Impact |
|----|-----------|---------|--------|
| [#93411](https://github.com/NousResearch/hermes-agent/pull/93411) | `cron/lifecycle_guard` | Closes two bypass vectors: POSIX `. script.sh` (dot operator) and NUL-padded script paths | **Critical** — eliminates guard evasion |
| [#83010](https://github.com/NousResearch/hermes-agent/pull/83010) | `tools/terminal`, `cron/lifecycle_guard` | Normalizes NUL-bearing script reads; fixes UTF-8 decode crash on binary files | **Critical** — root cause for 15+ duplicate issues |
| [#76540](https://github.com/NousResearch/hermes-agent/pull/76540) | `cron/lifecycle_guard` | Adds `.` (dot) to sourced-script detection alongside `source` | **High** — closes long-standing bypass |
| [#78108](https://github.com/NousResearch/hermes-agent/pull/78108) | `cron/lifecycle_guard` | Skips non-script files (binaries, logs) during referenced-script walk | **High** — stops false positives on `/usr/bin/python3` etc. |
| [#76773](https://github.com/NousResearch/hermes-agent/pull/76773) | `tools/terminal` | Prevents crash on absolute-path executables in lifecycle guard | **High** — unblocks terminal tool for venv/bin/python |
| [#87417](https://github.com/NousResearch/hermes-agent/pull/87417) | `cron` (test) | Regression test for bash arithmetic division (`$(( x / y ))`) not blocked | **Medium** — prevents future regressions |

**Net effect**: The terminal tool’s pre-execution guard is now hardened against NUL bytes, binary executables, dot-sourced scripts, and path-literal false positives — the primary crash surface for gateway users.

## 4. Community Hot Topics
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#78980](https://github.com/NousResearch/hermes-agent/issues/78980) | Bug | 4 | **False-positive blocking** on `~/...` path literals in Python scripts — users need legitimate `--no-agent` cron jobs to work |
| [#78974](https://github.com/NousResearch/hermes-agent/issues/78974) | Bug | 3 | **Total terminal tool outage** when `$HOME` unresolvable — guard crashes before any command runs |
| [#90155](https://github.com/NousResearch/hermes-agent/issues/90155) | Bug | 3 | **Spaces in paths** (macOS iCloud) misdetected as script references — breaks prompt-only cron jobs |
| [#93425](https://github.com/NousResearch/hermes-agent/issues/93425) | Bug (new) | 0 | **Credential pool poisoning** — single 401 permanently disables valid key, no self-heal (security boundary risk) |

**Pattern**: Users are blocked by **over-aggressive safety guards** that crash instead of denying, turning security checks into availability incidents. The new #93425 shifts focus to **auth resilience** — a single flaky 401 should not permanently poison a key.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | `lifecycle_guard` crashes on `ValueError: embedded null byte` for any command referencing absolute paths (venv/bin/python, binary executables, scripts with spaces) | **Fixed** (merged #83010, #78108, #76773, #93411) | ✅ |
| **Critical** | Guard false-positives on `~/...` tilde paths, binary executables, dot-sourced scripts, bash arithmetic `/` | **Fixed** (merged #76540, #78108, #93411, #87417) | ✅ |
| **High** | `lifecycle_guard` crashes when `$HOME` unresolvable — takes down entire terminal tool | **Closed** (#78974) — fix likely in #83010 normalization | ✅ |
| **High** | Credential pool: single transient 401 permanently poisons key (no self-heal) | **Open** (#93425) | PR [#93426](https://github.com/NousResearch/hermes-agent/pull/93426) open |
| **Medium** | Desktop mislabels Anthropic Opus 5 quota exhaustion as “Gateway needs setup” | **Closed** (#93198) — needs UI fix | ❌ |
| **Medium** | Gateway restart loops: clock-rollback chain adjacency unbounded | **Open** PR [#93427](https://github.com/NousResearch/hermes-agent/pull/93427) | ✅ PR ready |

**Stability signal**: The guard component caused **cascading failures** (terminal tool → SSE stream deadlock → session loss). Merged PRs address the crash surface; remaining risk is auth resilience (#93425).

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|------------------------------|
| **Credential pool self-heal / transient 401 tolerance** | #93425, PR #93426 | **Very High** — security boundary, PR already open |
| **Session reconnect robustness** (stranded rows, socket rebind, FTS rebuild race) | PR #93430, #93428, #93216 | **High** — multiple merged/ready PRs |
| **MCP server reconnect on credential rotation** | PR #92596 | **High** — addresses silent config drift |
| **Real reasoning_content streaming for thinking models** | PR #75562 | **Medium** — long-open, complex gateway/streaming changes |
| **Responses-API truncation continuation parity** | PR #91779, #91742 | **Medium** — provider compatibility |
| **Kanban/worker isolation from foreground composer** | PR #93021, #93216 | **Medium** — workspace identity gating |

**Prediction**: v0.20.1 will bundle guard fixes + credential self-heal + session reconnect fixes. Reasoning streaming and Responses-API parity likely slip to v0.21.

## 7. User Feedback Summary
- **Pain**: “Terminal tool completely broken for any absolute path” — 15+ duplicate reports in 3 weeks. Users on Docker, Linux, macOS all hit the same NUL-byte crash.
- **Frustration**: Guard crashes *instead of denying* — opaque `RuntimeError`/`ValueError` with no recovery path.
- **Workarounds**: Users avoid absolute paths, use `PATH` lookups, or disable cron — reducing agent utility.
- **New fear**: #93425 suggests **auth fragility** — one network blip permanently disables a key, silently.
- **Positive**: Rapid closure rate (19/20 issues closed) shows maintainer responsiveness once root cause isolated.

## 8. Backlog Watch — Stale/Needs Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#75562](https://github.com/NousResearch/hermes-agent/pull/75562) | 25 days | **Real reasoning streaming** — critical for thinking-model UX; blocked on gateway/streaming coupling |
| [#91742](https://github.com/NousResearch/hermes-agent/pull/91742) / [#91779](https://github.com/NousResearch/hermes-agent/pull/91779) | 3 days | **Responses-API parity** — OpenAI/Codex compatibility; needs review |
| [#93021](https://github.com/NousResearch/hermes-agent/pull/93021) | 1 day | **Kanban reliability hardening** — marked invalid but touches sensitive execution boundaries; needs maintainer verdict |
| [#93425](https://github.com/NousResearch/hermes-agent/issues/93425) | 0 days | **Credential pool poisoning** — security boundary, PR #93426 ready but unmerged |
| [#93427](https://github.com/NousResearch/hermes-agent/pull/93427) | 0 days | **Gateway restart-loop guard** — clock-rollback adjacency unbounded; low-risk fix, should merge |

---

**Bottom line**: Hermes Agent is **stabilizing after a guard-component crisis**. The terminal tool is now usable for absolute-path commands; the next release should ship the credential self-heal and session-reconnect fixes. Watch for v0.20.1 within days.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-24

## 1. Today's Overview
PicoClaw shows **moderate maintenance activity** with 7 PRs updated and 2 issues closed in the last 24 hours. No new releases were published. The project is primarily addressing **security hardening** (SSRF protection across multiple channels), a **critical WhatsApp compatibility break**, and **agent context optimization** for prefix caching. Two feature requests (OAuth 2.1 for MCP, Telegram rich tables) were closed as stale, indicating backlog grooming. Two PRs remain open: a new remote-agent pairing feature and a DeltaChat refactor.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress (Merged/Closed PRs)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3320](https://github.com/sipeed/picoclaw/pull/3320) | **Critical Fix** | Bump `whatsmeow` to resolve WhatsApp "client outdated (405)" — native WhatsApp channel was completely non-functional. | Restores WhatsApp connectivity; high user impact. |
| [#3322](https://github.com/sipeed/picoclaw/pull/3322) | **Security Hardening** | Enforce `BlockPrivateTargets` on inbound media downloads for QQ, Telegram, Discord, LINE, Slack — mitigates SSRF via crafted media URLs. | Closes SSRF vector across 5 channels. |
| [#3323](https://github.com/sipeed/picoclaw/pull/3323) | **Security Hardening** | WeCom: use `CreateSafeHTTPClient` + `ValidateSafeHTTPURL` for media download/upload. | Prevents loopback/private-host redirects in WeCom media flow. |
| [#3324](https://github.com/sipeed/picoclaw/pull/3324) | **Security Hardening** | Weixin (WeChat): same safe HTTP client for media downloads. | Consistent SSRF protection for Weixin channel. |
| [#3321](https://github.com/sipeed/picoclaw/pull/3321) | **Performance** | Move dynamic context (time, runtime, session, sender) after conversation history to preserve prefix caching. | Reduces token recompute; lowers latency/cost for LLM calls. |

> **Note**: All five PRs above are labeled `[stale]` — they may have been closed due to inactivity rather than merged. Verify merge status before assuming deployment.

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) | Issue (closed/stale) | 4 | 0 | **OAuth 2.1 support for MCP servers** — aligns with #2546; needed for modern auth flows in MCP integrations. |
| [#3325](https://github.com/sipeed/picoclaw/issues/3325) | Issue (closed/stale) | 2 | 0 | **Telegram native table rendering** — Bot API 10.1 supports visual tables; current Markdown fallback degrades UX. |
| [#3344](https://github.com/sipeed/picoclaw/pull/3344) | PR (open) | — | 0 | **Build Remote Agent phone pairing (gbr/1)** — enables phone spectating of desktop agent via QR/8-char code. |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR (open, 52 days) | — | 0 | **DeltaChat refactor** — -200 LOC, drops legacy/password auth, uses official relay list, adds invite-link controls. |

**Analysis**: The two closed feature requests reveal demand for **modern auth (OAuth 2.1)** and **rich messaging parity** with platform capabilities. The open PRs signal investment in **remote agent UX** and **DeltaChat modernization**.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | WhatsApp channel dead — `Client outdated (405)` on connect | Fixed in [#3320](https://github.com/sipeed/picoclaw/pull/3320) (whatsmeow bump) | #3320 |
| **High (Security)** | SSRF via inbound media URLs on QQ/Telegram/Discord/LINE/Slack | Fixed in [#3322](https://github.com/sipeed/picoclaw/pull/3322) | #3322 |
| **High (Security)** | WeCom media download/upload follows redirects to private hosts | Fixed in [#3323](https://github.com/sipeed/picoclaw/pull/3323) | #3323 |
| **High (Security)** | Weixin media downloads vulnerable to SSRF | Fixed in [#3324](https://github.com/sipeed/picoclaw/pull/3324) | #3324 |
| **Medium (Perf)** | Dynamic context invalidates prefix cache on every request | Fixed in [#3321](https://github.com/sipeed/picoclaw/pull/3321) | #3321 |

**No new bugs reported today** — all tracked issues are fixes for pre-existing problems.

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| OAuth 2.1 for MCP servers | [#3302](https://github.com/sipeed/picoclaw/issues/3302) (closed stale) | Low — closed as stale; may resurface if MCP adoption grows |
| Telegram native table rendering | [#3325](https://github.com/sipeed/picoclaw/issues/3325) (closed stale) | Medium — platform capability exists; low effort if prioritized |
| Build Remote Agent pairing (gbr/1) | [#3344](https://github.com/sipeed/picoclaw/pull/3344) (open) | **High** — active PR, new protocol, enables mobile UX |
| DeltaChat cleanup & modern auth | [#3222](https://github.com/sipeed/picoclaw/pull/3222) (open, 52d) | Medium — large refactor, needs review; removes password auth (breaking) |

**Prediction**: The **gbr/1 remote-agent pairing** (#3344) is most likely to land next — it’s a new capability with active development. DeltaChat refactor (#3222) may follow if maintainers accept the breaking changes.

## 7. User Feedback Summary
- **Pain points**: 
  - WhatsApp channel completely broken for ~6 months (fixed today via dependency bump).
  - No OAuth 2.1 for MCP — blocks enterprise/secure integrations.
  - Telegram tables render as plain text/code blocks — poor readability.
- **Use cases emerging**:
  - Phone-as-spectator for desktop agents (remote debugging, demos).
  - DeltaChat as a privacy-focused channel with modern auth (JSON-RPC secrets, invite links).
- **Sentiment**: Silent on fixes (no 👍/comments on security PRs), vocal on features (4 comments on OAuth). Suggests users **expect security patches** but **actively request UX/auth improvements**.

## 8. Backlog Watch
| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) DeltaChat refactor | 52 days | **High** — breaking changes (drops password auth, renames config), -200 LOC, no recent review | **Maintainer review required** — decide on breaking changes, merge or close with rationale. |
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) OAuth 2.1 for MCP | 25 days (closed stale) | Medium — recurring request (#2546) | Re-open if MCP roadmap active; otherwise document “won’t fix”. |
| [#3325](https://github.com/sipeed/picoclaw/issues/3325) Telegram tables | 15 days (closed stale) | Low | Consider as “good first issue” if Bot API 10.1 table support is trivial to add. |

---

**Project Health**: 🟡 **Fair** — Critical WhatsApp fix and multi-channel SSRF patches show responsive security posture, but stale-closure of feature requests and a 52-day-open refactor PR suggest **maintainer bandwidth constraints**. Prioritize reviewing #3222 and #3344 to unblock new capabilities.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-24

## 1. Today's Overview
NanoClaw shows **high velocity** with 50 PRs and 4 issues updated in the last 24 hours. The merge rate is healthy (~40% of updated PRs closed/merged), indicating active review and integration. No new release was cut today, but a release PR for **v2.3.0** (#3495) was prepared and merged, suggesting a version bump is imminent. The project is in a **stabilization phase** — multiple PRs address dependency pins, release gates, and platform-specific segfaults (macOS), while new feature work continues on provider/channel integrations (Cursor, Codex, WhatsApp, Build Remote Agent).

## 2. Releases
**No new releases published today.**  
Release PR **#3495** (`chore(release): v2.3.0`) was merged — it bumps `package.json` to `2.3.0`, finalizes changelog entries under `## [2.3.0] - 2026-08-24`, and preserves all `[BREAKING]` migration paths inline. Expect the tagged release and container images shortly.

## 3. Project Progress — Merged / Closed PRs Today
| PR | Type | Summary |
|----|------|---------|
| [#3495](https://github.com/nanocoai/nanoclaw/pull/3495) | Release | **v2.3.0** release PR merged — version bump + changelog finalization. |
| [#3496](https://github.com/nanocoai/nanoclaw/pull/3496) | Ops/Stopgap | Repins to `hardened-2026-08-23` image; unblocks operators after setup breakage since 2026-08-21 (label SHA mismatch in `container/pull.sh`). |
| [#3469](https://github.com/nanocoai/nanoclaw/pull/3469) | Fix (core) | Enables `minimumReleaseAge` gate (hoisted out of `pnpm:` key) + adds regression test. |
| [#3467](https://github.com/nanocoai/nanoclaw/pull/3467) | Feat (core) | Lets channel adapters declare their typing-indicator lifetime (engine half). |
| [#3466](https://github.com/nanocoai/nanoclaw/pull/3466) | Fix (deps) | Bumps Chat Core to 4.32.0 and pins every Chat SDK channel skill to it. |
| [#3456](https://github.com/nanocoai/nanoclaw/issues/3456) | Bug Fix (closed issue) | Fixed Discord approval `custom_id` corruption caused by redundant `value` param on buttons in `chat-sdk-bridge`. |

**Net advancement:** Release readiness, dependency hygiene, platform stability (macOS segfault workarounds), and Discord UX restoration.

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#2404](https://github.com/nanocoai/nanoclaw/issues/2404) — Double delivery via `send_message` MCP tool + `<message>` blocks | 4 comments, open since May | **Deduplication at transport layer** — operators hit duplicate messages when agents use both MCP tool and XML blocks in same turn. Root cause: MCP server runs as separate subprocess. |
| [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) — Signal attachment path not mounted | Long-running (Jul 27 → Aug 23), 0 comments but critical path | **Container volume mounting** — Signal adapter writes to `/workspace/extra/signal-attachments/` which isn’t mounted into agent container; breaks all non-image/audio attachments. |
| [#3494](https://github.com/nanocoai/nanoclaw/pull/3494) — Build Remote Agent phone pairing (gbr/1) | New, 0 comments | **Mobile spectator mode** — adds `gbr-agent` pairing (QR + 8-char code) so phones can watch desktop agent via `http://127.0.0.1:8788` or stdio. |
| [#3493](https://github.com/nanocoai/nanoclaw/pull/3493) — MindsHub provider guide & setup skill | New, doc-only | **Onboarding for new provider** — adds operational skill + docs for MindsHub integration. |

**Underlying theme:** Operators need **reliable multi-channel delivery** (no duplicates, working attachments) and **easier mobile/remote access**.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical** | [#3497](https://github.com/nanocoai/nanoclaw/issues/3497) — `better-sqlite3@13` segfaults on `new Database()` on macOS with Node < 22.14.0 | Open | No PR yet; requires Node floor bump to `>=22.14.0` or dependency downgrade |
| **High** | [#3498](https://github.com/nanoclaw/nanoclaw/issues/3498) — `update-nanoclaw` controller exits 0 silently on macOS; symlinked `/var` tmpdir defeats `path.resolve()` guards | Open | No PR yet; needs `fs.realpathSync()` in two path comparisons |
| **High** | [#3456](https://github.com/nanocoai/nanoclaw/issues/3456) — Discord approval buttons resolve to wrong option (redundant `value` param) | **Closed** | Fixed in `chat-sdk-bridge.ts` (PR not linked but issue closed same day) |
| **Medium** | [#2404](https://github.com/nanocoai/nanoclaw/issues/2404) — Double message delivery (MCP + XML) | Open | No PR; architectural — requires dedup at MCP transport or agent output layer |
| **Medium** | [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) — Signal attachments unreadable (dead path) | Open PR | **PR open** since Jul 27; mounts inbox path instead of dead `/workspace/extra/...` |

**Top action items:** macOS Node version floor (#3497) and symlink-safe tmpdir resolution (#3498) block installs/tests on Mac; both need PRs today.

## 6. Feature Requests & Roadmap Signals
| Signal | Likelihood for Next Version |
|--------|----------------------------|
| **Cursor Agent SDK provider** ([#3355](https://github.com/nanocoai/nanoclaw/pull/3355), [#3356](https://github.com/nanocoai/nanoclaw/pull/3356)) — full skill + provider payload | **High** — both PRs open 5 days, core-team tagged, follow guidelines |
| **Codex structured auth setup-driver** ([#3489](https://github.com/nanocoai/nanoclaw/pull/3489)) | **High** — core-team, feature skill, auth UX improvement |
| **Build Remote Agent (gbr/1) phone pairing** ([#3494](https://github.com/nanocoai/nanoclaw/pull/3494)) | **Medium** — new protocol, external `gbr-agent` dependency; may wait for v2.4 |
| **Per-channel typing-indicator lifetime** ([#3491](https://github.com/nanoclaw/nanoclaw/pull/3491), [#3468](https://github.com/nanoclaw/nanoclaw/pull/3468)) | **High** — stacked on main (#3490→#3491→#3492), WhatsApp declares 25s |
| **Chat SDK 4.32.0 lockstep bump** ([#3490](https://github.com/nanoclaw/nanoclaw/pull/3490), [#3465](https://github.com/nanoclaw/nanoclaw/pull/3465)) | **Certain** — stacked chain on main, pins all channel skills |

**Predicted v2.3.0/v2.4.0 scope:** Cursor + Codex providers, Chat SDK 4.32, typing cadence API, Discord fix. Build Remote Agent likely v2.4+.

## 7. User Feedback Summary
- **Pain:** macOS developers blocked by `better-sqlite3` segfault (#3497) and silent update failure (#3498) — “install passes checks but DB layer dead.”
- **Pain:** Discord approval flows unusable (#3456) — “every click resolves to wrong option” — fixed same day, good responsiveness.
- **Pain:** Signal users can’t receive PDFs/docs (#3142) — attachment path never mounted; PR stalled 4 weeks.
- **Delight:** Release PR (#3495) shows curated changelog with inline migration paths — operators appreciate clear `[BREAKING]` docs.
- **Ask:** Mobile spectator mode (#3494) — teams want phone pairing without port forwarding.

## 8. Backlog Watch — Stalled / Needs Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) — Signal attachment mount fix | 28 days | Blocks all non-media Signal attachments; PR ready but no review merge |
| [#2301](https://github.com/nanocoai/nanoclaw/pull/2301) — GitHub polling mode + secret merge | 110 days | Large feature (embedded adapter, polling, OneCLI secrets); long review cycle |
| [#2537](https://github.com/nanocoai/nanoclaw/pull/2537) — Pre-commit hooks (prettier, eslint, typecheck, vitest) | 98 days | DX/tooling; reduces review friction but stalled |
| [#2404](https://github.com/nanocoai/nanoclaw/issues/2404) — Double MCP+XML delivery | 106 days | Architectural bug; needs design decision (transport dedup vs agent output guard) |

**Recommendation:** Prioritize #3142 (user-facing breakage), #3497/#3498 (macOS blocker), and #2404 (architectural). Consider labeling #2301/#2537 as “needs champion” to unblock.

---

**Project Health Indicators**  
- 🟢 **Velocity:** High (50 PRs/24h, 40% merge rate)  
- 🟡 **Stability:** macOS install broken, Signal attachments broken, Discord fixed  
- 🟢 **Release readiness:** v2.3.0 PR merged, changelog complete  
- 🟡 **Review throughput:** Several long-stalled PRs (>30 days) need triage  

*Data sourced from GitHub API; links point to live items on github.com/nanocoai/nanoclaw.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-24

## 1. Today's Overview
NullClaw saw minimal repository activity in the last 24 hours: one new issue opened and zero pull requests or releases. The sole issue (#991) describes a **critical hang** in `nullclaw agent` when an MCP stdio server is already owned by the long-lived gateway under Proxmox. With no merged fixes or version bumps, the project is in a **quiet maintenance window** punctuated by a single high-severity stability report.

## 2. Releases
No new releases published today. The latest tagged version remains **2026.8.22** (per issue context).

## 3. Project Progress
No pull requests were opened, merged, or closed in the last 24 h. No features or fixes advanced today.

## 4. Community Hot Topics
| Issue | Title | Activity | Link |
|-------|-------|----------|------|
| **#991** | MCP stdio calls can hang indefinitely behind the Proxmox launcher lock | 2 comments, 0 👍, created & updated 2026-08-23 | [nullclaw/nullclaw#991](https://github.com/nullclaw/nullclaw/issues/991) |

**Analysis**: The issue is the only community signal today. Two comments suggest early triage discussion (likely reproduction details or workaround probing). The hang blocks standalone agent invocations when the gateway holds the stdio MCP server—a **deadlock/livelock** scenario affecting Proxmox-based deployments.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#991](https://github.com/nullclaw/nullclaw/issues/991) | `nullclaw agent` hangs indefinitely when stdio MCP server is locked by `nullclaw-gateway.service` on Proxmox CT. Blocks all agent CLI usage in gateway-active environments. | No |

**Note**: No crash logs or stack traces attached yet; root cause likely in launcher lock acquisition/ordering around stdio MCP bridge.

## 6. Feature Requests & Roadmap Signals
No new feature requests today. The sole issue is a stability bug, not a feature ask. Roadmap inference: **locking/concurrency hardening for MCP stdio bridges** (especially Proxmox) will likely be prioritized in the next patch cycle.

## 7. User Feedback Summary
- **Pain point**: Inability to run ad-hoc `nullclaw agent` commands while the gateway service is active on Proxmox.  
- **Use case**: Read-only Proxmox MCP bridge (148 tools) in a container (CT 151); user expects concurrent gateway + CLI agent operation.  
- **Sentiment**: Neutral/technical; no frustration expressed yet, but the hang is a hard blocker for workflows requiring both services.

## 8. Backlog Watch
| Item | Status | Age | Why It Matters |
|------|--------|-----|----------------|
| [#991](https://github.com/nullclaw/nullclaw/issues/991) | Open, unassigned | < 1 day | Critical hang affecting Proxmox deployments; no fix PR yet. Needs maintainer triage for lock-ordering or non-blocking stdio acquisition. |

*No stale PRs or long-unanswered issues surfaced in today’s dataset.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-24

## 1. Today's Overview
IronClaw showed **high development velocity** over the past 24 hours with 36 total updates (12 issues, 24 PRs) and **5 PRs merged/closed**. No new release was published. Activity centers on **three major tracks**: (a) persistent per-user sandbox infrastructure with `iron-proxy` credential mediation, (b) CI pipeline modernization via `cargo nextest` migration, and (c) hardening onboarding flows (tool permissions, Slack/Gmail/Notion integrations). The project is in a **pre-v1.4.0 stabilization phase** with heavy investment in test reliability and sandbox security primitives.

---

## 2. Releases
**No new releases** in the last 24 hours. The current focus remains on v1.4.0 epic work (#7732) and CI expedite tracks.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Scope | Status |
|----|-------|-------|--------|
| [#7730](https://github.com/nearai/ironclaw/pull/7730) | `chore(deps): bump everything-else group (6 updates)` | dependencies | **Closed** |
| [#7406](https://github.com/nearai/ironclaw/pull/7406) | `chore(deps): bump actions group (4 updates)` | ci, dependencies | **Closed** |
| [#7262](https://github.com/nearai/ironclaw/pull/7262) | `chore(deps): bump wasm group (2 updates)` | dependencies | **Closed** |
| *Two additional PRs merged/closed* (not listed in detail) | — | — | **Merged/Closed** |

**Net effect**: Routine dependency hygiene completed; no user-facing features shipped today. The **5 closures** are all dependabot/maintenance PRs — core feature work remains in open PRs.

---

## 4. Community Hot Topics — Most Active Items

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#7732](https://github.com/nearai/ironclaw/issues/7732) | Issue (Epic) | **9** | **Persistent per-user sandbox** with `iron-proxy`; defer loop executors — v1.4.0 flagship |
| [#7812](https://github.com/nearai/ironclaw/issues/7812) | Issue | 3 | Onboarding suggestions must respect user-level tool permissions & use read-only access |
| [#7833](https://github.com/nearai/ironclaw/pull/7833) | PR | — | Implements #7812: suggestion generation over user’s no-approval, read-only tools |
| [#7810](https://github.com/nearai/ironclaw/pull/7810) | PR | — | Sandbox egress auth: manifest-declared credential bindings behind managed proxy (retires GitHub-specific carve-out) |
| [#7817](https://github.com/nearai/ironclaw/pull/7817) | PR | — | CI: `nextest` pipeline, full-failure signal, PR unthrottle (T2) — critical for dev velocity |

**Analysis**: The epic (#7732) and its downstream PRs (#7810, #7825) reveal a **strategic shift from ephemeral Docker-per-command to persistent, credential-aware user sandboxes**. The CI cluster (#7817, #7820, #7838, #7839) signals **test-infrastructure debt paydown** blocking faster iteration. Onboarding issues (#7812, #7833) show **product focus on "grounded" AI suggestions** using real user data under strict permissions.

---

## 5. Bugs & Stability — Reported Today (2026-08-24)

| Issue | Severity | Area | Fix PR? |
|-------|----------|------|---------|
| [#7842](https://github.com/nearai/ironclaw/issues/7842) | **High** — Generic `invalid result` error halts requests | Request execution / telemetry | No |
| [#7841](https://github.com/nearai/ironclaw/issues/7841) | **Medium** — Telegram setup dead-ends with “admin must configure” | Telegram integration / onboarding | No |
| [#7840](https://github.com/nearai/ironclaw/issues/7840) | **Medium** — Slack connect guidance gap (UI/UX) | Slack integration / onboarding | No |
| [#7830](https://github.com/nearai/ironclaw/issues/7830) | **Medium** — Notion extension fails to install | Extension registry / Notion | No |
| [#7829](https://github.com/nearai/ironclaw/issues/7829) | **Medium** — Gmail auth popup disappears in 1s | Gmail OAuth / WebUI | No |
| [#7828](https://github.com/nearai/ironclaw/issues/7828) | **Medium** — Slack setup blocked for NEAR Foundation account | Slack / SSO / tenant config | No |

**Pattern**: **4 of 6 bugs** are **integration onboarding failures** (Slack, Gmail, Notion, Telegram) — suggesting the **extension/auth flow is a systemic pain point**. The generic execution error (#7842) may indicate a deeper runtime telemetry gap. **No fix PRs linked yet** for today’s bugs.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for v1.4.0 |
|--------|--------|------------------------|
| **Persistent per-user sandbox with `iron-proxy`** | Epic #7732, PRs #7810, #7825 | **Very High** — active XL PRs, core to v1.4.0 |
| **Tool advertisement filtered by availability (installed + activated + credential-ready + authorized)** | #7836 | **High** — reduces model hallucination of unavailable tools |
| **Suggestion generation over user’s read-only, no-approval tools** | #7812 → PR #7833 | **High** — PR open, directly addresses onboarding quality |
| **Design System Phase 3a (Chromatic lane, token axes)** | PR #7831 | **Medium** — non-blocking, visual regression prep |
| **IronHub agent link operator surface in WebUI** | PR #7516 | **Medium** — unblocks WebUI deployment linking |
| **APDD Kit governance evaluation** | PR #7255 | **Low** — exploratory, private repo dependency |

**Prediction**: v1.4.0 will ship **persistent sandbox + credential proxy + filtered tool surface**. Onboarding hardening (Slack/Gmail/Notion) will likely be **patch releases** post-v1.4.0.

---

## 7. User Feedback Summary (from #x-ai-product-feedback Slack triage)

| Pain Point | Frequency | User Impact |
|------------|-----------|-------------|
| **Slack setup fails / unclear guidance** | 3 reports (#7828, #7840, #7832) | Blocks team adoption; NEAR Foundation account affected |
| **Gmail OAuth popup vanishes instantly** | 1 report (#7829) | Prevents email integration — high-value use case |
| **Notion extension won’t install** | 1 report (#7829) | Blocks knowledge-base access |
| **Telegram “admin must configure” dead-end** | 1 report (#7841) | Blocks messaging integration |
| **Generic “invalid result” errors** | 1 report (#7842) | Eroding trust in agent reliability |
| **Suggestions not grounded in user data** | 1 report (#7812) | AI feels “generic,” not personal |

**Sentiment**: **Frustration with integration onboarding** dominates. Users expect **seamless OAuth/extension installs** and **context-aware suggestions**. The “admin must configure” and popup failures point to **enterprise SSO/tenant config gaps**.

---

## 8. Backlog Watch — Stale / High-Leverage Items Needing Attention

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#7732](https://github.com/nearai/ironclaw/issues/7732) | 6 days | **v1.4.0 epic** — persistent sandbox, proxy, executor deferral | Requires #7810, #7825, loop-executor redesign |
| [#7817](https://github.com/nearai/ironclaw/pull/7817) | 2 days | **CI `nextest` migration (T2)** — unblocks faster PR validation | Skips Rust lanes in own CI; throwaway probes #7838/#7839 running |
| [#7809](https://github.com/nearai/ironclaw/pull/7809) | 3 days | **Canonical preflight gates (T4)** — single source of truth for checks | Tasks 1-5 only; follow-ups needed |
| [#7819](https://github.com/nearai/ironclaw/pull/7819) | 2 days | **PR/queue convergence (T3)** — kills queue-only failures | Depends on T1 (#7821) merged |
| [#7255](https://github.com/nearai/ironclaw/pull/7255) | 19 days | **APDD governance eval** — long-term process health | Private repo access limits reviewers |
| [#7020](https://github.com/nearai/ironclaw/pull/7020) | 22 days | **tokio-tungstenite 0.30 upgrade** — websocket dependency | May need compat testing; low risk but stale |

**Maintainer Action Items**:
1. **Land #7810** (sandbox proxy) to unblock epic #7732
2. **Resolve #7817 CI Rust-lane gap** — throwaway PRs #7838/#7839 are diagnostic; real fix needed
3. **Triage today’s 6 integration bugs** — assign owners for Slack/Gmail/Notion/Telegram
4. **Review #7833** (onboarding suggestions) — high user-impact, near-ready

---

## Project Health Indicators

| Metric | Signal |
|--------|--------|
| **Issue:PR ratio** | 12:24 (healthy — PRs driving resolution) |
| **Bug influx vs. fix rate** | 6 new bugs, 0 fix PRs today → **debt accumulating** |
| **Epic progress** | #7732 has 9 comments, 2 XL PRs open → **active but not done** |
| **CI investment** | 5 XL PRs on CI alone → **paying down infra debt** |
| **Dependency hygiene** | 5 dependabot PRs closed → **current** |

**Verdict**: **Strong engineering velocity on infrastructure**, but **user-facing integration reliability lags**. Next 1–2 weeks should determine if v1.4.0 ships with sandbox+proxy or slips for onboarding fixes.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-24

---

## 1. Today's Overview
LobsterAI shows **no active development signal** in the last 24 hours. All 4 issues and 3 PRs updated yesterday were **stale items closed en masse** (created 2026-04-01, closed 2026-08-23). Zero open issues/PRs were updated, zero new releases, and zero new contributions. The repository appears to be in a **maintenance-only or dormant phase** with maintainers performing housekeeping on 5-month-old tickets rather than shipping features or fixing live bugs.

---

## 2. Releases
**No new releases** in the last 24 hours. Latest release data not provided in feed.

---

## 3. Project Progress (Merged/Closed PRs)

| PR | Title | Type | Key Changes |
|----|-------|------|-------------|
| [#1197](https://github.com/netease-youdao/LobsterAI/pull/1197) | Feature/Agent 管理页面交互优化 | UI/UX | Flattened Agent delete flow (removed detail-panel step); sidebar interaction improvements. Originally PR #1176, rebased to resolve conflicts. |
| [#1199](https://github.com/netease-youdao/LobsterAI/pull/1199) | feat(model): add context window and token settings | Feature | Added per-model `contextWindow` and `maxTokens` in Settings; persisted/exported; wired into direct chat requests and Cowork/OpenClaw config propagation. |
| [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) | [Bug] NIM 超大群消息中 teamTypeNum 硬编码错误 | Bugfix | Fixed hardcoded `teamTypeNum` mismatch in `nimGateway.ts:917` (superTeam=2, team=1) per V2NIM SDK enum; restores correct group-name resolution for @-mentions in super-large/normal groups. |

**Net progress**: Three long-pending PRs (all opened 2026-04-01) finally merged — two UX polish, one model-config feature, one SDK-compatibility bugfix.

---

## 4. Community Hot Topics
All four issues closed yesterday were **stale-labeled, zero-reaction, 2-comment threads** from April. No genuine "hot" discussion exists today. The closest to user pain:

| Issue | Core Complaint | Comments | 👍 |
|-------|----------------|----------|----|
| [#1196](https://github.com/netease-youdao/LobsterAI/issues/1196) | Forced creation of 6 system files (`AGENTS.md`, `USER.md`, …) in every workspace — clutter, no global config, auto-recreate on delete | 2 | 0 |
| [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) | Gateway restart UI loses progress indicator; subsequent chats show "model unavailable" despite browser running | 2 | 0 |
| [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) | NIM super-large group `teamTypeNum` enum mismatch → wrong group names on @-mention | 2 | 0 |
| [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) | Agent leaks model API key / env var info when prompted — security risk | 2 | 0 |

**Underlying needs**: Workspace hygiene (global config, hidden files), resilient gateway UX, correct SDK integration, and **secret leakage prevention** — the last being a security concern.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High (Security)** | [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) Agent discloses model key/env details on prompt | Closed (stale) | **No fix PR linked** — only closed as stale |
| Medium | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) NIM `teamTypeNum` hardcoded wrong → broken group names | Closed (stale) | Fixed in [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) (merged) |
| Medium | [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) Gateway restart UI loses state; "model unavailable" false positive | Closed (stale) | **No fix PR** |
| Low | [#1196](https://github.com/netease-youdao/LobsterAI/issues/1196) Forced 6-file workspace pollution | Closed (stale) | **No fix PR** |

**Critical gap**: The security leakage (#1198) was **closed without a fix** — maintainers should reopen or track separately.

---

## 6. Feature Requests & Roadmap Signals
From closed issues/PRs, users want:

1. **Global/shared system prompts** (like Claude Code) instead of per-workspace file spam — #1196
2. **Per-model token/window config** — delivered in #1199 (merged)
3. **Safer agent behavior** — redact/block key exposure — #1202 (unfixed)
4. **Robust gateway restart UX** — progress persistence, health checks — #1198

**Prediction**: Next version (if any) will likely include the merged model-token settings (#1199) and NIM enum fix (#1201). Workspace file cleanup and secret guarding remain **unaddressed** and are strong candidates for next cycle — *if* development resumes.

---

## 7. User Feedback Summary
- **Pain**: "Every workspace polluted with 6 mandatory files; deleting them triggers re-creation" (#1196)
- **Pain**: "Gateway restart shows no progress, then claims model unavailable despite healthy browser" (#1198)
- **Pain**: "Bot shows raw group IDs instead of names in super-large groups" (#1200)
- **Fear**: "Agent handed me my API key location and env var names — this is a leak" (#1202)
- **Satisfaction**: None visible in last 24h; all feedback is negative or neutral bug reports.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Why It Matters | Age | Action Suggested |
|------|----------------|-----|------------------|
| [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) Agent key leakage | **Security vulnerability**; closed as stale without fix | 5 months | **Reopen immediately**; assign security audit; add secret redaction in agent system prompt |
| [#1196](https://github.com/netease-youdao/LobsterAI/issues/1196) Forced workspace files | Daily UX friction for all users; no global config alternative | 5 months | Implement global `~/.lobsterai/agents.md` + opt-out flag |
| [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) Gateway restart UX | Causes "model unavailable" false alarms; erodes trust | 5 months | Persist restart state; add health-check endpoint before declaring unavailable |
| [#1199](https://github.com/netease-youdao/LobsterAI/pull/1199) Model token settings | Merged but **no release cut** — users can't use it yet | 5 months | Tag a release (v0.x.x) to ship merged features |

---

**Bottom line**: Repository is **cleaning house, not building**. The three merged PRs are valuable but unreleased. The security issue (#1202) was improperly closed. If LobsterAI intends to ship, the next steps are: **reopen #1198, cut a release, and address the four stale-but-real user pains**.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-24

## 1. Today's Overview
Moltis showed **high maintenance velocity** in the last 24 hours with **9 PRs merged/closed** and only 1 new PR opened. No new releases were published. The merged PRs span a wide surface area — cron delivery, i18n, browser/Obscura stealth mode, WhatsApp file persistence, Browserless v2 support, MCP client resilience, skill sidecar materialization, memory backend config normalization, and embedding batch bounds — indicating a focused stabilization sprint across connectors, tooling, and runtime internals. Two issues remain open: a long-standing TLS/ALPN WebSocket regression (#245, open since Feb) and a fresh report of Slack tool failures in shared channels (#1224).

## 2. Releases
**No new releases** in the last 24 hours. The project appears to be accumulating fixes toward a future patch or minor release.

## 3. Project Progress — Merged/Closed PRs (9)

| PR | Area | Summary |
|----|------|---------|
| [#1226](https://github.com/moltis-org/moltis/pull/1226) | **Cron / Messaging** | Scheduled job output now delivers to the originating chat via a transient `payload.deliver_to_current_chat` shortcut, preserving thread/topic routing. |
| [#1225](https://github.com/moltis-org/moltis/pull/1225) | **i18n (zh-TW)** | Major rewrite/expansion of Traditional Chinese translations, especially `connectors.ts`; terminology and style corrections across modules. |
| [#1227](https://github.com/moltis-org/moltis/pull/1227) | **Browser / Obscura** | Obscura sidecar now launches with `--stealth` by default; new config `tools.browser.obscura_stealth` (default `true`) allows opt-out. |
| [#1228](https://github.com/moltis-org/moltis/pull/1228) | **WhatsApp** | Inbound documents/photos are downloaded (≤20 MB, sanitized filenames) and persisted via session media interface so local tools receive a stable `local_path`. |
| [#1229](https://github.com/moltis-org/moltis/pull/1229) | **Browser / Browserless** | Full Browserless v2 container protocol support added (Base64 `launch` WS query, `TIMEOUT`/`CONCURRENT` env) while keeping v1 as default. |
| [#1231](https://github.com/moltis-org/moltis/pull/1231) | **MCP** | Server restarts no longer leave stale client handles; each server connection now tracks its own live client, preventing dispatch to closed instances. |
| [#1234](https://github.com/moltis-org/moltis/pull/1234) | **Skills / Bundling** | Recursive bundled sidecars (e.g., `scripts/quick_validate.py` for `skill-creator`) are now materialized correctly in pre-built releases/Docker images. |
| [#1235](https://github.com/moltis-org/moltis/pull/1235) | **Memory / Config** | Built-in memory backend name normalized from `sqlite` → `builtin` in config; unified serialization helper and regression test added. |
| [#1236](https://github.com/moltis-org/moltis/pull/1236) | **Memory / Embeddings** | Local GGUF embedding batches bounded to `n_ctx=512`; fixes OOM/crash when tokenized input exceeds context window. |

**Open PR:** [#1233](https://github.com/moltis-org/moltis/pull/1233) — Opt-in WhatsApp document ingestion (per-account `download_inbound_documents` flag).

## 4. Community Hot Topics
| Item | Activity | Signal |
|------|----------|--------|
| [#245](https://github.com/moltis-org/moltis/issues/245) — TLS: `h2` in ALPN breaks WebSocket | 2 comments, open since **2026-02-26** (6 months) | Long-standing regression affecting **fresh browser connections** (page refresh/new tab) when TLS advertises `h2` first. Existing tabs survive via h1.1 session reuse. No fix PR yet. |
| [#1224](https://github.com/moltis-org/moltis/issues/1224) — Tools stop working in shared Slack channels | 0 comments, created **2026-08-21** | Fresh bug report; user on latest version. Impacts **shared-channel** workflows — likely a permission/scope or channel-type detection issue in the Slack connector. |

**Analysis:** #245 is a **high-impact, stale regression** that silently breaks WebSocket for new sessions — a candidate for prioritization. #1224 is new but touches a core collaboration surface (Slack shared channels); worth triaging quickly.

## 5. Bugs & Stability — Ranked by Severity

| Rank | Issue/PR | Severity | Status | Fix PR? |
|------|----------|----------|--------|---------|
| 1 | [#245](https://github.com/moltis-org/moltis/issues/245) — TLS `h2` ALPN breaks WebSocket | **Critical** (silent WS failure on fresh connections) | Open (6 mo) | ❌ No |
| 2 | [#1224](https://github.com/moltis-org/moltis/issues/1224) — Slack tools fail in shared channels | **High** (core connector broken in common topology) | Open (3 days) | ❌ No |
| 3 | [#1236](https://github.com/moltis-org/moltis/pull/1236) — Embedding batch OOM crash | **High** (process termination on >512 tokens) | **Merged** | ✅ Fixed |
| 4 | [#1231](https://github.com/moltis-org/moltis/pull/1231) — MCP stale client after server restart | **Medium** (tool dispatch to closed client) | **Merged** | ✅ Fixed |
| 5 | [#1234](https://github.com/moltis-org/moltis/pull/1234) — Bundled skill sidecars not found | **Medium** (pre-built/Docker releases broken) | **Merged** | ✅ Fixed |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Opt-in WhatsApp document download** | [PR #1233](https://github.com/moltis-org/moltis/pull/1233) (open) | **High** — natural follow-up to #1228 (inbound file persistence); per-account flag minimizes risk. |
| **Browserless v2 as default** | [PR #1229](https://github.com/moltis-org/moltis/pull/1229) (merged) | **Medium** — v2 support added but v1 remains default; migration likely after validation. |
| **Obscura stealth-by-default** | [PR #1227](https://github.com/moltis-org/moltis/pull/1227) (merged) | **Done** — shipped behind config flag; may become hard default later. |
| **Cron delivery to originating chat** | [PR #1226](https://github.com/moltis-org/moltis/pull/1226) (merged) | **Done** — improves scheduled-job UX; may inspire similar patterns for other async flows. |

## 7. User Feedback Summary
- **Pain point (TLS/WebSocket):** Users hitting silent 405 on WS upgrade after browser negotiates `h2` — only on **fresh connections** (refresh/new tab). Workaround: reuse existing tab. Affects any TLS-deployed instance. ([#245](https://github.com/moltis-org/moltis/issues/245))
- **Pain point (Slack shared channels):** Tools completely stop functioning in shared-channel context. User verified latest version; no workaround mentioned. ([#1224](https://github.com/moltis-org/moltis/issues/1224))
- **Positive signal:** Rapid fix turnaround on WhatsApp file handling (#1228 → #1233), MCP resilience, and embedding stability — users running local GGUF embeddings or MCP servers should see immediate stability gains.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#245](https://github.com/moltis-org/moltis/issues/245) — TLS `h2` ALPN breaks WebSocket | **6 months** | Silent regression affecting **all TLS deployments**; no workaround for new users. Root cause: ALPN order (`h2` first) causes browser to negotiate HTTP/2, then WS upgrade fails with 405. Fix likely requires ALPN reordering or h2 disable for WS endpoints. |
| [#1224](https://github.com/moltis-org/moltis/issues/1224) — Slack tools in shared channels | **3 days** | Blocks teams using Slack Connect/shared channels. Needs triage: is it a `channel_type` check, bot scope, or event subscription gap? |
| [PR #1233](https://github.com/moltis-org/moltis/pull/1233) — Opt-in WhatsApp document ingestion | **1 day** | Open PR extending #1228; adds per-account config. Should be reviewed/merged to complete the inbound file story. |

---

**Health Indicator:** 🟢 **Strong maintenance velocity** (9 fixes in 24h), but **two open regressions** — one critical/stale (#245), one fresh/high-impact (#1224) — warrant prioritization before next release.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-24

## 1. Today's Overview
CoPaw shows **high maintenance velocity** with 15 PRs updated (8 merged/closed) and 6 active issues in the last 24 hours. The project is in a **stabilization and feature-completion phase**: multiple long-running PR series around the skill system, auto-title synchronization, and token usage fixes have landed. No new release was cut, but the merged work addresses critical bugs (token usage persistence, Windows process probing, CLI task execution) and delivers the dynamic skill lifecycle infrastructure. Community engagement is healthy — issues span performance, UX, integration, and core runtime bugs, with maintainers actively triaging.

## 2. Releases
**No new releases today.** The last release remains v2.1.0. The merged PRs (#7027, #7030, #7032, #7033, #6220, #6203, #6616) represent a substantial batch of fixes and features likely destined for v2.1.1 or v2.2.0.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#7027](https://github.com/agentscope-ai/QwenPaw/pull/7027) | Feat + Chore | Auto-title sync (chat titles update from auto-memory) + skill-system dynamic load/unload + frontmatter fix + cleanup of backup files | **Major UX + architecture**: solves static titles, enables runtime skill lifecycle |
| [#7030](https://github.com/agentscope-ai/QwenPaw/pull/7030) / [#7032](https://github.com/agentscope-ai/QwenPaw/pull/7032) | Feat | Auto-title sync: chat titles refresh from auto-memory entries + observability | **UX**: titles now reflect evolving conversation topic |
| [#7031](https://github.com/agentscope-ai/QwenPaw/pull/7031) / [#7033](https://github.com/agentscope-ai/QwenPaw/pull/7033) | Feat | Dynamic skill loading, auto-unload of idle skills, frontmatter/lazy-skill path fixes | **Core infra**: skills no longer static after startup; memory/CPU savings |
| [#6220](https://github.com/agentscope-ai/QwenPaw/pull/6220) | Fix | TokenUsageBuffer: don't persist unseeded cache on shutdown | **Data integrity**: prevents corrupt/empty token usage cache writes |
| [#6203](https://github.com/agentscope-ai/QwenPaw/pull/6203) | Fix | Windows `tasklist` liveness probe: add timeout, hide window, bound output | **Stability**: fixes hangs on Windows process checks |
| [#6616](https://github.com/agentscope-ai/QwenPaw/pull/6616) | Fix | `qwenpaw task` CLI: build valid `Msg` for headless command (content type fix) | **CLI usability**: headless task execution now works |

**Net progress**: The skill system now supports dynamic loading/unloading (critical for extensibility), chat titles are live-linked to memory, token usage persistence is hardened, Windows reliability improved, and headless CLI unblocked.

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Activity | Core Need |
|------|----------|-----------|
| [#7198](https://github.com/agentscope-ai/QwenPaw/issues/7198) | 2 comments, updated today | **Approval UX overhaul**: Users want *zero approvals* for any operation on files created *during* the current session (temp/intermediate artifacts). Current "auto" mode still prompts excessively, breaking unattended/overnight runs. |
| [#7221](https://github.com/agentscope-ai/QwenPaw/issues/7221) | 3 comments | **Plugin/runtime hook persistence**: `reload_agent()` (triggered by any config change) drops workspace-scoped plugin registrations (hooks, modes, slash commands). Breaks zero-downtime reload for plugin authors. |
| [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) | 2 comments | **Runtime memory leak**: Backend grows to 20 GB+ after 2 days of heavy file ops. Distinct from startup leak (#9). Critical for long-running/daemon use. |
| [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | First-time contributor, open | **Always-on skills**: Opt-in workspace-scoped skills that preload full instructions before first model decision — for specialized agent personas. |

**Signal**: Users are pushing for **unattended/autonomous operation** (approvals, memory stability, plugin persistence) and **specialized agent personas** (always-on skills).

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical** | [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) — Backend memory grows unbounded to 20 GB+ over 2 days (runtime accumulation) | Open, 2 comments | No |
| **High** | [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218) — "peer closed connection without sending complete message body" on long responses; possible timeout mismatch (user reports 130-140s vs 180s upstream) | Open, 1 comment | No |
| **High** | [#7217](https://github.com/agentscope-ai/QwenPaw/issues/7217) — After mid-task stop, next conversation repeats previous turn (including reasoning) regardless of input | Open, 1 comment | No |
| **Medium** | [#7221](https://github.com/agentscope-ai/QwenPaw/issues/7221) — `reload_agent()` drops plugin workspace-scoped registrations (hooks, modes, slash commands) | Open, 3 comments | No |
| **Medium** | [#7212](https://github.com/agentscope-ai/QwenPaw/issues/7212) (implied by [#7220](https://github.com/agentscope-ai/QwenPaw/pull/7220)) — Oversized image dimensions (within 2 MiB) freeze UI; fix PR open | Open PR [#7220](https://github.com/agentscope-ai/QwenPaw/pull/7220) | **Yes** |

**Note**: The memory leak (#7222) and connection truncation (#7218) are production-blocking for long-running and long-context workloads respectively.

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Zero-approval mode for session-generated files** | [#7198](https://github.com/agentscope-ai/QwenPaw/issues/7198) | High — strong user pain, aligns with "unattended" vision |
| **Aider CLI as embedded agent** | [#7224](https://github.com/agentscope-ai/QwenPaw/issues/7224) | Medium — integration request, may need protocol adapter |
| **Always-on workspace skills** | [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | High — PR open, builds on just-merged dynamic skill system |
| **All-agent LLM & tool-call trend chart in Token Usage** | [#7219](https://github.com/agentscope-ai/QwenPaw/pull/7219) | High — PR open, observability push |
| **Session-scoped multi-project directories** | [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) | Medium — open since Aug 13, complex but high value |
| **DeepSeek model catalog refresh (v4 family only)** | [#7223](https://github.com/agentscope-ai/QwenPaw/pull/7223) | High — vendor-mandated, simple fix |
| **OAuth2 rotating refresh token persistence** | [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) | High — fixes auth breakage for XMind et al. |

**Predicted next version (v2.1.1/v2.2.0) theme**: "Autonomy & Observability" — unattended approvals, memory stability, skill dynamism, cross-agent analytics, provider updates.

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Context |
|------------|----------|--------------|
| **Unattended/overnight runs broken by approval spam** | [#7198](https://github.com/agentscope-ai/QwenPaw/issues/7198): "impossible to watch approvals all night… morning shows pending dialog" | Developers running agents as background workers |
| **Memory leak makes daemon mode impractical** | [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222): 20 GB after 2 days, "slows entire machine" | Heavy file-operation workloads, long sessions |
| **Long responses silently truncated** | [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218): "incomplete chunked read" on long reasoning; timeout mismatch suspected | Custom models, long reasoning traces |
| **State bleed after interrupt** | [#7217](https://github.com/agentscope-ai/QwenPaw/issues/7217): next chat repeats previous turn's reasoning | Interactive users who Ctrl-C / stop mid-task |
| **Plugin ecosystem fragility on config change** | [#7221](https://github.com/agentscope-ai/QwenPaw/issues/7221): runtime hooks/modes/commands lost on reload | Plugin authors, power users extending QwenPaw |
| **Image handling crashes on high-res (within size limit)** | [#7220](https://github.com/agentscope-ai/QwenPaw/pull/7220) fixes #7212 | Users pasting screenshots/diagrams |

**Satisfaction signals**: Users are investing in deep integrations (Aider, custom models, plugins) and reporting architectural issues — indicates **production adoption**, not just experimentation.

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) — Session-scoped multi-project directories | Open since 2026-08-13 (11 days) | **High-impact UX**: enables mono-repo / multi-root workflows; blocked on review |
| [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) — OAuth2 rotating refresh token persistence | Open since 2026-08-16 (8 days), under review | **Auth breakage** for remote MCP servers (XMind et al.); security + reliability |
| [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) — Always-on workspace skills | Open since 2026-08-20 (4 days), first-time contributor | **Extensibility keystone**: enables specialized agent personas; builds on merged skill-system |
| [#7221](https://github.com/agentscope-ai/QwenPaw/issues/7221) — Plugin registrations lost on reload | Filed 2026-08-23 | **Plugin ecosystem blocker**: zero-downtime config reload breaks extensions |
| [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) — 20 GB memory leak | Filed 2026-08-23 | **Production blocker** for any long-running deployment; needs root-cause analysis |

---

**Overall Health**: 🟢 **Good velocity, growing pains visible**. Core architecture (skills, memory, tokens) is hardening rapidly. Top risks are the **runtime memory leak (#7222)** and **connection truncation (#7218)** — both lack fix PRs and affect production viability. The approval UX (#7198) is the loudest user-facing friction. Maintainers should prioritize triage on #7222, #7218, and #7198 while merging the ready observability/skill/provider PRs.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-24

## 1. Today's Overview

ZeroClaw is in a **high-velocity architectural refinement phase** with no new releases but intense RFC activity (10+ open architecture RFCs) and a deep stacked-PR pipeline for security hardening. The project shows **strong maintainer engagement** — 50 PRs updated in 24h, 6 merged/closed — with focus on SSRF protection for `file_download`, plugin runtime activation, provider compatibility fixes, and session persistence contracts. Risk profile is elevated: multiple `risk:high` RFCs and XL-sized PRs indicate cross-cutting changes to auth, transport, and memory layers. Community discourse centers on **runtime-owned sessions**, **unified attachments**, **realtime voice (Gemini Live)**, and **decoupling memory policy from storage** — all foundational for the next major version.

## 2. Releases

**No new releases** in the last 24 hours. The project appears to be in a pre-release stabilization window with multiple stacked PR chains (#10070 → #10072 → #10075 for SSRF; #9447 → #9999 for Anthropic/compatible provider classification; #8850 → #10146 for plugin activation) that must land before a cut.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#10146](https://github.com/zeroclaw-labs/zeroclaw/pull/10146) | `feat(plugins): activate logical channel instances` | plugins, runtime:wasm, channel:core | **Merged** — Core milestone for #8850: moves optional channels/tools from compile-time features to runtime WASM plugins. Enables stock binary to gain channels/tools without recompile. |
| [#9666](https://github.com/zeroclaw-labs/zeroclaw/pull/9666) | `fix(channels): make the filesystem listener cancellation-aware` | channel, bug | **Closed** — Fixes idle blocking receive preventing supervisor shutdown/reload. Critical for daemon reliability. |
| [#10287](https://github.com/zeroclaw-labs/zeroclaw/pull/10287) | `[Invalid]: SOP run was terminated by loop detector before sop_advance` | runtime, bug | **Closed (invalid)** — Original diagnosis incorrect; SOP run reached terminal failed state correctly. |
| [#10284](https://github.com/zeroclaw-labs/zeroclaw/pull/10284) | `chore(ci): remove dead labeler paths and correct moved-file labels` | ci | **Merged** — Cleans up 40 stale paths in labeler config after crate restructuring. |
| [#10288](https://github.com/zeroclaw-labs/zeroclaw/pull/10288) | `docs(governance): define deferred RFC vote cycles` | governance, docs | **Open (updated today)** — FND-003 Rev. 16 defines behavior when RFC vote deadlines arrive without quorum/threshold. Process hardening. |
| [#10289](https://github.com/zeroclaw-labs/zeroclaw/pull/10289) | `feat(runtime)!: retire unused legacy node transport` | runtime, breaking | **Open (created today)** — Removes unused HMAC node transport, config surface. Breaking for any configs still referencing `[node_transport]` (startup preserved with warning). |

**Key advancement**: Plugin activation (#10146) unblocks the runtime-plugin roadmap. SSRF hardening chain (#10070/72/75) is in active review. Provider compatibility fixes (#9447, #9999, #9743) are progressing but stacked and blocked on each other.

## 4. Community Hot Topics — Most Active Discussions

| Item | Comments | Labels | Core Need |
|------|----------|--------|-----------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) RFC: Runtime-owned conversation sessions & transport surface adapters | 25 | `enhancement`, `agent`, `channel`, `gateway`, `runtime`, `security`, `domain:architecture`, `priority:p2`, `type:rfc`, `risk:high`, `channel:acp` | **Ownership boundary** for session persistence across runtime, gateway, channels. Ratifies #9487/#9488/#9600 boundary; mandates `InboundAction` submission at every entry point; adds durable admission + ambiguous-outcome semantics. |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) RFC: Unified attachment architecture for web chat and channels | 19 | `enhancement`, `channel`, `gateway`, `runtime`, `security`, `tool`, `domain:architecture`, `priority:p2`, `type:rfc`, `risk:high` | **Single attachment model** across web UI, ACP, and channel transports. Eliminates duplicate handling, enables consistent policy (size, type, quarantine). |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) RFC: Realtime speech-to-speech channel for Gemini Live | 18 | `enhancement`, `channel`, `gateway`, `runtime`, `security`, `provider:gemini`, `domain:architecture`, `priority:p2`, `type:rfc`, `risk:high` | **Broker contract** for realtime voice (Gemini Live first). Feature-gated, optional channel where model acts as conversation broker. Rewrite v2 (2026-08-16) shifts to broker model. |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) RFC: Decouple memory lifecycle policy from storage backends | 17 | `enhancement`, `gateway`, `memory`, `runtime`, `priority:p2`, `type:rfc`, `risk:high` | **Clear boundary** between `Memory` trait (storage ops) and lifecycle policy (consolidation, governance). Prevents reimplementation per gateway/channel/backend. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) [Tracker]: Maintainer decision queue for RFCs and design issues | 13 | `enhancement`, `domain:architecture`, `priority:p2`, `status:accepted`, `status:no-stale`, `risk:medium`, `type:tracker` | **Decision queue** for RFCs/design issues needing maintainer/code-owner attention. Active triage hub. |
| [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) [Tracker]: Session-persistence contract ownership & layer ordering | 8 | `enhancement`, `runtime`, `domain:architecture`, `priority:p2`, `status:no-stale`, `risk:high`, `type:tracker` | **Ownership & ordering** for session persistence across 4 concurrent workstreams touching same contract. Prevents conflicts. |

**Underlying theme**: The project is **re-architecting core contracts** (sessions, attachments, memory, transport, voice) simultaneously. Contributors are demanding **explicit ownership boundaries** and **layer ordering** to avoid merge conflicts and semantic drift. High comment counts on RFCs reflect design review depth, not contention.

## 5. Bugs & Stability — Reported Today

| Issue | Severity | Area | Status | Fix PR |
|-------|----------|------|--------|--------|
| [#10286](https://github.com/zeroclaw-labs/zeroclaw/issues/10286) Restored ZeroCode transcripts omit persisted turns after history trimming | S2 (degraded) | zerocode/tui, runtime | Open | None yet |
| [#10272](https://github.com/zeroclaw-labs/zeroclaw/issues/10272) Correlate Hailo log assertions under parallel tests | S3 (flaky test) | providers, test | Open | None yet |
| [#9666](https://github.com/zeroclaw-labs/zeroclaw/issues/9666) Filesystem listener not cancellation-aware | S1 (blocks shutdown) | channel | **Closed** | [#9666](https://github.com/zeroclaw-labs/zeroclaw/pull/9666) ✅ |
| [#10287](https://github.com/zeroclaw-labs/zeroclaw/issues/10287) SOP run terminated by loop detector | Invalid | runtime | **Closed (invalid)** | N/A |

**Stability signal**: Only 2 new bugs in 24h, one invalid. The S2 ZeroCode transcript bug (#10286) affects session restore UX but not data integrity. Flaky Hailo test (#10272) is a parallel-test isolation issue. Critical shutdown bug (#9666) already fixed.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Runtime-owned sessions + transport adapters** | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) (RFC, 25 comments) | **High** — Ratified ownership boundary; stacked PRs likely |
| **Unified attachment architecture** | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) (RFC, 19 comments) | **High** — Prerequisite for consistent web/channel UX |
| **Realtime voice (Gemini Live) broker channel** | [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) (RFC v2, 18 comments) | **Medium** — Feature-gated, optional; v2 redesign reduces scope |
| **Memory lifecycle policy decoupling** | [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) (RFC, 17 comments) | **High** — Cross-cutting, enables multi-backend governance |
| **Workspace-relative forbidden paths + `.zeroclawignore`** | [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) (RFC, 12 comments) | **High** — Security hardening, user-requested |
| **Wire protocol first-class in provider construction** | [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) (RFC, 10 comments) | **Medium** — Provider onboarding UX improvement |
| **Session-scoped persistent prompt attachments** | [#9998](https://github.com/zeroclaw-labs/zeroclaw/issues/9998) (RFC, 5 comments) | **Medium** — Addresses history-trim objective loss |
| **Verbatim channel send via gateway (no agent turn)** | [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) (RFC, 5 comments) | **Low** — Niche gateway route, follow-up to session work |
| **Agent Plugins 1.0 (skill + MCP packages)** | [#9810](https://github.com/zeroclaw-labs/zeroclaw/issues/9810) (RFC, 4 comments) | **High** — Vendor-neutral standard, aligns with plugin runtime |
| **Web bundle/daemon compatibility contract** | [#9975](https://github.com/zeroclaw-labs/zeroclaw/issues/9975) (RFC, 4 comments) | **Medium** — Web dashboard deployment hardening |
| **Publish-safe exceptions for public blockchain IDs** | [#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825) (RFC, 6 comments) | **Medium** — Leak detector false positive fix |
| **Move channels/tools to runtime WASM plugins** | [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) (Tracker, 4 comments) | **High** — #10146 merged; activation path proven |

**Top 3 predicted next-version features**: (1) Runtime-owned session contract (#9487), (2) Unified attachments (#9488), (3) Memory policy decoupling (#6850) — all `risk:high`, `priority:p2`, with maintainer engagement.

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|----------------------|----------|-----------|
| **Session loss after history trim / restart** | [#9998](https://github.com/zeroclaw-labs/zeroclaw/issues/9998): "Any agent session can lose the objective or constraints established early... Parallel sessions make the failure especially visible" | 😡 Frustrated — Core UX gap |
| **ZeroCode transcript restore omits trimmed turns** | [#10286](https://github.com/zeroclaw-labs/zeroclaw/issues/10286): "Restored ZeroCode transcripts omit persisted turns after history trimming" | 😕 Degraded — Trust in persistence |
| **Cannot rename sessions in ZeroCode** | [#10285](https://github.com/zeroclaw-labs/zeroclaw/issues/10285): "Users cannot assign a meaningful name to a session from the TUI" | 😐 Annoyance — Multi-session mgmt |
| **Leak detector redacts public blockchain addresses** | [#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825): "Makes payment-request URLs undeliverable... false positive" | 😕 False positive — Security vs usability |
| **No verbatim channel send without agent turn** | [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050): "None of 47 gateway paths delivers caller-supplied message verbatim" | 😐 Missing capability — Integration need |
| **Forbidden paths don't protect workspace-internal files** | [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424): "`forbidden_paths` only blocks paths outside workspace" | 😡 Security gap — Credentials at risk |
| **Compile-time feature flags bloat binary** | [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850): "Move optional channels/tools off compile-time Cargo features onto runtime WASM plugins" | 😐 Architectural — Binary size/distribution |
| **Realtime voice for Gemini Live** | [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780): "Optional feature-gated realtime voice channel... Gemini Live first" | 😃 Anticipation — High-value feature |

**Overall**: Users are **technically sophisticated** (filing RFCs, not just bugs), pushing for **architectural coherence** (session ownership, attachment unity, memory policy), and **security-by-default** (SSRF, forbidden paths, leak detector tuning). Dissatisfaction centers on **persistence UX gaps** (trim loss, no rename) and **security false positives**.

## 8. Backlog Watch — Long-Unanswered Important Items

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) RFC: Decouple memory lifecycle policy from storage backends | 94 days (since 2026-05-22) | Open, `needs-author-action` | **Foundational** — Blocks multi-backend governance, affects all gateways/channels. 17 comments, no resolution. |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) RFC: Make wire protocol first-class in provider construction | 58 days (since 2026-06-27) | Open, `needs-maintainer-review` | **Provider UX** — Simplifies onboarding, reduces config drift. 10 comments, stalled on review. |
| [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) RFC: Workspace-relative forbidden paths + `.zeroclawignore` | 57 days (since 2026-06-28) | Open, `needs-author-action` | **Security** — Protects `.env`, `config.yaml`, credentials inside

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*