# OpenClaw Ecosystem Digest 2026-08-23

> Issues: 254 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-23 01:49 UTC

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

# OpenClaw Project Digest — 2026-08-23

---

## 1. Today's Overview

OpenClaw shows **very high velocity** with 754 total updates (254 issues + 500 PRs) in the last 24 hours. The project is in active maintenance mode with **no new releases** but substantial PR activity (65 merged/closed). The issue backlog is dominated by **P1/P2 reliability bugs** around session state, message loss, crash loops, and SQLite corruption — several marked as release blockers. PR pipeline is healthy with 435 open PRs, many targeting critical stability fixes. Community engagement is strong (issues with 10–15 comments), indicating operators are actively debugging production deployments.

---

## 2. Releases

**No new releases published today.**  
Latest version appears to be `2026.8.1-beta.2` (referenced in #126821, #124788, #125333). Multiple beta-blocker issues remain open.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Area | Summary | Status |
|----|------|---------|--------|
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | Security, CLI, macOS, Gateway | `feat(security): require acknowledgement for install policy warnings` — interactive CLI installs now show bounded reason/findings and require exact target name confirmation | **Closed** |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | Web UI, Security | `feat(ui): review install policy warnings` — authenticated admins can review install-policy warnings in Control UI and deliberately continue plugin installs | **Closed** |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | Web UI, Models, Auth | `fix(models): keep Claude CLI OAuth available in Control UI` — fixes refresh ownership loss after gateway restart when legacy auth profile exists | **Closed** |
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | Gateway, Multi-channel | `fix(gateway): keep conversation delivery within agent bindings` — prevents multi-agent operators from discovering cross-binding conversation leaks | **Closed** |
| [#127870](https://github.com/openclaw/openclaw/pull/127870) | Web UI | `fix(ui): sidebar collapse keeps pointer tooltips quiet` — eliminates unsolicited "Expand sidebar" tooltip after collapse | **Closed** |

**Key themes:** Security hardening (install policy acknowledgements), auth persistence (Claude CLI OAuth), multi-agent conversation isolation, and UI polish.

---

## 4. Community Hot Topics — Most Active Issues/PRs

### Top Issues by Comment Count

| Issue | Comments | 👍 | Core Problem | Underlying Need |
|-------|----------|----|--------------|-----------------|
| [#68596](https://github.com/openclaw/openclaw/issues/68596) | 15 | 8 | Streaming watchdog timeout too aggressive for reasoning models (kimi-k2.5, DeepSeek-R1) | **Configurable timeouts** for extended-thinking models |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | 14 | 1 | WhatsApp 1:1 inbound image wedges main lane ~3min before processing (multimodal run strands) | **Multimodal pipeline latency** — images block lane |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | 12 | 0 | Hardcoded `/Users/wangtao` workspace path shipped in release | **Build/release hygiene** — developer paths leaking to prod |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | 11 | 0 | Subagent completion delivery lost on direct-announce timeout/drain/orphan prune | **Reliable subagent result propagation** |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) | 10 | 2 | `active-memory` plugin blocks replies & overloads gateway on boot | **Plugin isolation** — memory plugin must not block critical path |
| [#117609](https://github.com/openclaw/openclaw/issues/117609) | 9 | 0 | Transient LLM/socket errors retried for channels/one-shots but **not** at embedded-assistant stage (long turns die whole) | **Uniform retry policy** across all execution stages |
| [#50291](https://github.com/openclaw/openclaw/issues/50291) | 9 | 0 | Plugin hooks missing trace context (messageId, runId, parentSpanId) for distributed tracing | **Observability completeness** — need full trace context in hooks |
| [#45224](https://github.com/openclaw/openclaw/issues/45224) | 8 | 1 | Unhandled Playwright assertion error in `CRSession._onMessage` crashes Gateway | **Error boundary** — CDP errors must not kill process |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 8 | 1 | Unreaped hook/tool child processes accumulate as zombies, degrading runtime | **Process lifecycle management** — reap children reliably |
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | 7 | 0 | **P0** SQLite corruption recurs on pristine DBs within 15–24h (WSL2) — "paralyzed gateway" mode | **Storage integrity** — critical blocker for beta |

### Top PRs by Activity (All Open, Awaiting Review)

| PR | Area | Risk Tags | Status |
|----|------|-----------|--------|
| [#127881](https://github.com/openclaw/openclaw/pull/127881) | Web UI | 🚨 compatibility, 🚨 security-boundary | ⏳ waiting on author |
| [#120794](https://github.com/openclaw/openclaw/pull/120794) | Prompt/Context | 🚨 compatibility | 📣 needs proof |
| [#126818](https://github.com/openclaw/openclaw/pull/126818) | Channels (Line, Mattermost, etc.) | 🚨 compatibility, 🚨 message-delivery | 👀 ready for maintainer look |
| [#123189](https://github.com/openclaw/openclaw/pull/123189) | Gateway, Codex, Copilot | 🚨 session-state | 📣 needs proof |
| [#128060](https://github.com/openclaw/openclaw/pull/128060) | Gateway, Agents | 🚨 availability | ⏳ waiting on author |

**Pattern:** PRs targeting **session-state**, **message-delivery**, **compatibility**, and **security-boundary** risks dominate the review queue.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Title | Fix PR? |
|----------|-------|-------|---------|
| **P0 / Critical** | [#126821](https://github.com/openclaw/openclaw/issues/126821) | SQLite corruption on pristine DBs within 15–24h (WSL2) — paralyzed gateway | No |
| **P0 / Critical** | [#125333](https://github.com/openclaw/openclaw/issues/125333) | totalTokens inflation on 2026.8.1-beta.2 — memory-flush path unguarded | No (refs #123065 partial fix) |
| **P0 / Critical** | [#124788](https://github.com/openclaw/openclaw/issues/124788) | Event loop blocks ~100s every ~10 min (anchored timer; string building + fs scan) | No |
| **P1 / High** | [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp image wedges lane ~3min — multimodal run strands | No |
| **P1 / High** | [#67777](https://github.com/openclaw/openclaw/issues/67777) | Subagent completion delivery lost on timeout/drain/orphan | No |
| **P1 / High** | [#72015](https://github.com/openclaw/openclaw/issues/72015) | active-memory blocks replies & overloads gateway on boot | No |
| **P1 / High** | [#45224](https://github.com/openclaw/openclaw/issues/45224) | Unhandled Playwright assertion crashes Gateway | No |
| **P1 / High** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | Zombie child process leak from hooks/tools | No |
| **P1 / High** | [#117609](https://github.com/openclaw/openclaw/issues/117609) | Transient errors not retried at embedded-assistant stage | No |
| **P1 / High** | [#128060](https://github.com/openclaw/openclaw/pull/128060) | Subagent completion announces lost for OpenAI-compat HTTP sessions | **PR Open** |
| **P1 / High** | [#126906](https://github.com/openclaw/openclaw/issues/126906) | Denying write tool silently disables memory persistence, agent reports success | No |
| **P1 / High** | [#108215](https://github.com/openclaw/openclaw/issues/108215) | Context usage drops 57%→13% without compaction after large tool output | No |
| **P1 / High** | [#49381](https://github.com/openclaw/openclaw/issues/49381) | Feishu duplicate final replies after model failover from rate limit | No |
| **P1 / High** | [#78805](https://github.com/openclaw/openclaw/issues/78805) | Severe event loop blocking from synchronous I/O (execSync, readFileSync) | No |
| **P2 / Medium** | [#68596](https://github.com/openclaw/openclaw/issues/68596) | Configurable streaming watchdog timeout for reasoning models | No |
| **P2 / Medium** | [#51429](https://github.com/openclaw/openclaw/issues/51429) | Hardcoded developer workspace path in release | No |
| **P2 / Medium** | [#126423](https://github.com/openclaw/openclaw/issues/126423) | Voice Mode deletes conversations & breaks layout (macOS) | No |
| **P2 / Medium** | [#105528](https://github.com/openclaw/openclaw/issues/105528) | exec/read tools silently return empty output on Windows (v2026.6.x regression) | No |
| **P2 / Medium** | [#89257](https://github.com/openclaw/openclaw/issues/89257) | `backup create --verify` exits 13, leaves corrupt .tmp archive | No |

**Observation:** 15+ P0/P1 issues with **no fix PRs** — backlog pressure on maintainers. Several are regressions in recent betas (2026.8.x).

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood for Next Version |
|-------|---------|----------------------------|
| [#68596](https://github.com/openclaw/openclaw/issues/68596) | Configurable streaming watchdog timeout threshold | **High** — 8👍, 15 comments, P2, clear config addition |
| [#57425](https://github.com/openclaw/openclaw/issues/57425) | Graceful Gateway Restart with Session Recovery | **Medium** — 5 comments, fundamental reliability need |
| [#55792](https://github.com/openclaw/openclaw/issues/55792) | Catch up on missed inbound messages after gateway restart | **Medium** — channel history backfill, 4 comments |
| [#45503](https://github.com/openclaw/openclaw/issues/45503) | Manual context clearing for tool results | **Medium** — 4 comments, 2👍, operator efficiency |
| [#83442](https://github.com/openclaw/openclaw/issues/83442) | Operator-friendly rendering for shell/bash command blocks | **Medium** — 4 comments, 1👍, UX polish |
| [#78038](https://github.com/openclaw/openclaw/issues/78038) | Improve zh-CN translation accuracy/completeness | **High** — straightforward localization fix |
| [#75947](https://github.com/openclaw/openclaw/issues/75947) | UI quality update based on UX scoring (accessibility/ergonomics) | **Low** — large redesign, 7 comments but "off-meta" |
| [#54157](https://github.com/openclaw/openclaw/issues/54157) | Doubao/BytePlus model catalog: add cacheRead/cacheWrite pricing | **High** — trivial config fix, 4 comments |

**Strongest signals:** Configurable timeouts for reasoning models, graceful restart/recovery, and model catalog completeness.

---

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence (Issues) | User Impact |
|------------|-------------------|-------------|
| **Session/message loss on restart** | #57425, #55792, #126821, #125333 | Operators lose in-flight work, context, and history; "silent killing" of sessions |
| **Multimodal (image) processing broken/slow** | #96834, #83416, #127876 | WhatsApp/Discord images wedge lanes for minutes or time out |
| **Subagent results disappearing** | #67777, #128060, #95759 | Automation pipelines silently fail; no completion notifications |
| **Gateway instability (crashes, freezes, corruption)** | #126821, #124788, #45224, #78805, #97616 | Production gateways require babysitting; OOM kills, event loop stalls |
| **Auth/session persistence broken** | #80178, #112246, #125471 | CLI sessions invalidated on credential source flip; Codex sessions bricked |
| **Windows tool regression** | #105528 | `exec`/`read` return empty — blocks Windows developers |
| **Backup/verify unreliable** | #89257 | Disaster recovery untrusted; corrupt archives left behind |
| **Observability gaps** | #50291, #108215 | Cannot trace distributed flows; context usage metrics misleading |
| **Hardcoded paths / release hygiene** | #51429 | Loss of trust; developer machine paths in production builds |

**Overall sentiment:** Frustration with **reliability regressions in recent betas** (2026.8.x). Users report "paralyzed gateway," silent data loss, and broken core flows (multimodal, subagents, backup). Positive notes: security PRs (#116489, #120900) and auth fixes (#125471) show maintainers responding to critical issues.

---

## 8. Backlog Watch — Long-Unanswered Important Items

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | 155 days | Hardcoded `/Users/wangtao` shipped — release process failure | Open, 12 comments, **no PR** |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | 129 days | Subagent completion loss

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Open-Source Ecosystem (2026-08-23)

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source landscape shows **intense foundational engineering activity** across 10 active projects, with **zero new releases** in the last 24 hours — indicating a collective "hardening before shipping" phase. Projects cluster into three tiers: **reference-scale** (OpenClaw, ZeroClaw), **specialized agents** (NanoBot, Hermes, IronClaw, NanoClaw), and **lightweight/embedded** (PicoClaw, LobsterAI, Moltis, CoPaw). The dominant theme is **reliability over features**: critical bugs in session persistence, multimodal processing, SQLite corruption, and provider integration block beta releases. Security hardening (SSRF, credential mediation, install policies) and observability (token accounting, distributed tracing) are cross-cutting investments. Two projects (NullClaw, ZeptoClaw) show zero recent activity, suggesting consolidation risk.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Today | Health Score (1-10) | Tier |
|---------|--------------|-----------|-------------------|---------------|---------------------|------|
| **OpenClaw** | 254 | 500 | 65 | ❌ | 7.5 | Reference |
| **ZeroClaw** | 13 | 50 | 7 | ❌ | 8.0 | Reference |
| **Hermes Agent** | 4 | 50 | 4 | ❌ | 7.0 | Specialized |
| **IronClaw** | 9 | 21 | 5 | ❌ | 7.5 | Specialized |
| **NanoClaw** | 1 | 26 | 8 | ❌ | 7.5 | Specialized |
| **NanoBot** | 0 | 19 | 5 | ❌ | 8.0 | Specialized |
| **PicoClaw** | 2 | 6 | 4 | ❌ | 6.5 | Lightweight |
| **LobsterAI** | 2 | 6 | 5 | ❌ | 7.0 | Lightweight |
| **Moltis** | 1 | 3 | 1 | ❌ | 7.0 | Lightweight |
| **CoPaw** | 7 | 4 | 0 | ❌ | 5.5 | Lightweight |
| **NullClaw** | 0 | 0 | 0 | ❌ | 1.0 | Dormant |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ | 1.0 | Dormant |

**Health Score Factors**: Velocity (30%), bug severity/distribution (25%), release cadence (15%), community engagement (15%), architectural coherence (15%).  
*Notes*: OpenClaw's high issue count reflects production-scale debugging; ZeroClaw's RFC-driven PRs score high on coherence; CoPaw's zero merged PRs despite 7 new bugs indicates review bottleneck.

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Production battle-testing**: 754 updates/24h from real deployments (15-comment issues = operators debugging live)
- **Multi-channel maturity**: WhatsApp, Discord, Telegram, Slack, Feishu, Line — broadest channel coverage
- **Security-first governance**: Install policy acknowledgements (#116489, #120900) exceed peer practices
- **Session isolation architecture**: Multi-agent conversation binding fixes (#126424) address a class of bugs others haven't encountered

### Technical Approach Differences
| Dimension | OpenClaw | Peer Norm |
|-----------|----------|-----------|
| **Session ownership** | Gateway-centric, SQLite-backed | Runtime-owned (ZeroClaw RFC #9487) or channel-scoped (NanoClaw) |
| **Plugin model** | Dynamic, hot-reloadable | WASM compile-time (ZeroClaw #8850) or skill-based (PicoClaw) |
| **Multimodal pipeline** | Strand-based, lane-isolated | Often bolted onto text pipeline (NanoBot, CoPaw) |
| **Observability** | Trace context in hooks (#50291) — explicit gap | Ad-hoc logging; NanoBot standardizing via LLMUsage contract |

### Community Size Comparison
- **OpenClaw**: 10-15 comments on top issues → **~50-100 active operators** filing production bugs
- **ZeroClaw**: 24 comments on RFC #9487 → **~20-30 core contributors** designing architecture
- **NanoBot/IronClaw**: 0-2 comments/PR → **<15 active contributors**, mostly internal team
- **Lightweight projects**: 0-1 comments → **<10 contributors**, community-driven but thin

**Verdict**: OpenClaw is the **de facto reference implementation** — largest production surface, most diverse integrations, hardest reliability challenges. Peers are solving subsets of OpenClaw's problems (ZeroClaw: architecture; NanoBot: WebUI fidelity; IronClaw: context cost).

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Need |
|-------------|-------------------|---------------|
| **Session/Context Persistence & Recovery** | OpenClaw (#126821, #57425), ZeroClaw (RFC #9487), Hermes (#91980), NanoClaw (#3453), IronClaw (#7824) | Survive restarts without message loss; compaction without token bloat (IronClaw: 4× cost regression) |
| **Multimodal Pipeline Reliability** | OpenClaw (#96834), PicoClaw (#3343), CoPaw (#7212), NanoClaw (Telegram channel posts) | Image/audio processing must not wedge lanes; graceful degradation over crashes |
| **Provider Integration Standardization** | NanoBot (#5480), LobsterAI (#2452), IronClaw (#7491), ZeroClaw (#9645), OpenClaw (#125471) | Typed usage contracts, OAuth resilience, model catalog completeness |
| **Security Boundary Hardening** | OpenClaw (#116489), Hermes (#70352, #70351), ZeroClaw (#9743, #10265), Moltis (#1230) | SSRF protection, credential mediation, fail-closed hooks, install policy gates |
| **Observability & Token Accounting** | OpenClaw (#50291, #108215), NanoBot (#5490, #5469), IronClaw (#7824), NanoClaw (#3453) | Per-turn token breakdown, distributed trace context, cost attribution |
| **Windows/Container Portability** | PicoClaw (#105528), NanoClaw (#3318), Hermes (#92617, #51142), CoPaw (#7043) | AVX2-free binaries, UTF-8 defaults, path handling, venv quarantine |
| **Graceful Degradation over Hard Failure** | OpenClaw (#3337), Moltis (#1231), ZeroClaw (#9447), Hermes (#91980) | MCP/channel/tool failures must not kill agent loop or lose approvals |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architectural Signature |
|---------|---------------|-------------|-------------------------|
| **OpenClaw** | Multi-channel gateway operator | Teams running production bots across 5+ channels | Gateway-centric, SQLite state, strand-based concurrency |
| **ZeroClaw** | Runtime architecture research | Platform builders, advanced self-hosters | RFC-driven, capability-based security, WASM plugin runtime |
| **NanoBot** | WebUI turn fidelity & provider telemetry | Developers building custom agent UIs | Turn-observability-first, provider-neutral usage contracts |
| **Hermes Agent** | Desktop + gateway hybrid | Power users wanting local-first desktop + multi-channel | Electron/Vite HMR, ACP protocol, profile portability |
| **IronClaw** | Context efficiency & CI/CD maturity | Cost-sensitive teams, automation-heavy workflows | Process Journal notifications, context projection, unified tool contract |
| **NanoClaw** | Multi-bot Telegram/Slack orchestration | Community managers, multi-workspace operators | Adapter resilience, setup wizard UX, circuit-breaker scoping |
| **PicoClaw** | Embedded/edge agent | IoT, robotics, resource-constrained deployments | Go-based, minimal deps, cron/skills/exec tooling focus |
| **LobsterAI** | Multi-provider chat client | Knowledge workers switching models daily | Session export, retry UX, custom provider scaling (20+) |
| **Moltis** | Policy enforcement layer | Security-conscious integrators | Fail-closed hooks, OpenAI-strict schemas, Browserless v2 |
| **CoPaw** | Qwen-ecosystem desktop assistant | Chinese-language developers, Qwen model users | Reasoning trace UX, media caps, Chrome LAN bridge |

**Key Divergence**: OpenClaw/ZeroClaw/Hermes build **platforms**; NanoBot/IronClaw/Moltis build **components**; PicoClaw/LobsterAI/CoPaw build **opinionated applications**.

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (High Risk/High Reward)** | ZeroClaw, OpenClaw, IronClaw | >30 updates/day; RFC stacks; P0 bugs block releases; architectural pivots in flight |
| **Stabilizing (Feature Complete, Hardening)** | NanoBot, NanoClaw, Hermes | 15-25 PRs/day; focused on regressions, UX polish, test reliability; near-term patch likely |
| **Steady Maintenance (Niche Mastery)** | PicoClaw, LobsterAI, Moltis | 3-6 PRs/day; clear domain (edge, chat client, policy layer); low bug inflow, high fix quality |
| **Review-Bound (Contributor Pipeline > Maintainer Capacity)** | CoPaw | 7 new bugs, 4 stale PRs (8-16 days), zero merges — needs triage bandwidth |
| **Dormant / At Risk** | NullClaw, ZeptoClaw | Zero activity >24h; no recent releases; likely archived or absorbed |

**Velocity ≠ Maturity**: ZeroClaw has highest velocity but is pre-1.0 architectural churn. NanoBot has lower velocity but shipped turn observability (#5486) and provider contracts (#5480) — higher *delivery* maturity.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Context Cost Crisis** | IronClaw: 4× token bloat (227M vs 55M tokens, $10.31 vs $2.52); OpenClaw: context drops 57%→13% without compaction (#108215) | **Pi-style compaction + structured summaries** becoming table stakes — not optional optimization |
| **Provider Abstraction Fatigue** | NanoBot (4 providers), LobsterAI (20 custom), ZeroClaw (ZeroRouter), IronClaw (unified 6-tool contract) | **Standardized usage telemetry (LLMUsage)** and **model capability negotiation** emerging as cross-project protocols |
| **Session Ownership Shift** | ZeroClaw RFC #9487 (runtime-owned), OpenClaw (gateway-owned), Hermes (profile-owned) | **No consensus** — but all moving toward *explicit ownership boundaries* with predicated storage deletes (ZeroClaw #10265) |
| **Security as Default, Not Feature** | OpenClaw install policies, Hermes SSRF/env scrub, Moltis fail-closed hooks, ZeroClaw authenticated webhooks | **Supply-chain & runtime security** now baseline; plugin WASM sandboxing (ZeroClaw #8850) is the next frontier |
| **Observability Standardization** | NanoBot LLMUsage contract, OpenClaw trace context in hooks, IronClaw Process Journal | **Per-turn token/cost/latency** with distributed trace IDs becoming required for production agents |
| **Windows/Container Parity as Blocker** | PicoClaw exec regression, NanoClaw AVX2, Hermes venv quarantine, CoPaw chcp 65001 | **Cross-platform CI** (Node 25+, baseline Bun, Fluent locales) is a shared infrastructure tax — consider shared test images |
| **Graceful Degradation > High Availability** | OpenClaw MCP resilience (#3337), Moltis stale client recovery (#1231), ZeroClaw Anthropic truncation guard (#9447) | **Partial failure modes** (degraded MCP, read-only SOP, degraded voice) preferred over restarts — design for *degraded operation* |

---

## Summary for Decision-Makers

1. **Build on OpenClaw** if you need multi-channel production gateway today — but budget for P0 bug workarounds (SQLite, multimodal, session loss).
2. **Track ZeroClaw** for next-gen architecture — runtime-owned sessions, WASM plugins, capability security — but expect 6-12 months to stabilization.
3. **Adopt NanoBot patterns** for WebUI turn fidelity and provider telemetry — most transferable to custom agent UIs.
4. **IronClaw's context projection** (#7824) is the highest-leverage open problem — solving it benefits all LLM-heavy agents.
5. **Lightweight projects** (PicoClaw, LobsterAI, Moltis) are production-ready for their niches — lower integration risk than reference platforms.
6. **CoPaw needs maintainer investment** — critical bugs accumulating without fixes signals sustainability risk.
7. **Cross-project convergence** on: typed provider contracts, fail-closed security, per-turn observability, graceful degradation — invest in these abstractions now.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-23

## 1. Today's Overview
NanoBot shows **high development velocity** with 19 pull requests updated in the last 24 hours, though no new issues were filed. The project is in an active **refinement and stabilization phase** — 14 PRs remain open (mostly WebUI/UX polish, provider contract refactors, and token-usage telemetry), while 5 were merged or closed (documentation updates, long-standing feature PRs finally resolved). No releases cut today; the team appears to be batching fixes for a near-term patch. Overall health: **strong** — consistent contributor flow, low issue backlog, and a focus on observability and regression fixes.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress — Merged / Closed PRs (5)

| PR | Title | Type | Key Outcome |
|----|-------|------|-------------|
| [#5486](https://github.com/HKUDS/nanobot/pull/5486) | feat(webui): unify turn observability | Feature | Single answer surface per user turn; preserves ordered reasoning/tool/file-edit segments; live activity auto-collapses on completion; trustworthy per-turn token reporting. |
| [#5488](https://github.com/HKUDS/nanobot/pull/5488) | docs: refresh team and contributor credits | Docs | Maintainers (Xubin Ren, Yongru Chen) highlighted with profiles; contrib.rocks replaced with native clickable avatar wall; bots excluded. |
| [#4430](https://github.com/HKUDS/nanobot/pull/4430) | feat(web): configure web_fetch provider | Feature (closed) | Configurable `web_fetch` with `auto`, `tavily`, `jina`, `readability` modes; replaces `useJinaReader` toggle. |
| [#3869](https://github.com/HKUDS/nanobot/pull/3869) | fix(providers): DeepSeek message hardening | Bug fix (closed) | Preserves content, sanitizes null/empty; fixes DeepSeek 400 errors and "(empty)" placeholder leakage. |
| [#3294](https://github.com/HKUDS/nanobot/pull/3294) | feat(dream): optional kill switch + custom template paths | Feature (closed) | `DreamConfig.enabled` kill switch; custom `phase1_template`/`phase2_template` paths; opt-in, backward-compatible. |

**Signal**: WebUI turn observability (#5486) and provider usage contract (#5480, #5481) are the current architectural focus. Older feature PRs (#4430, #3294, #3869) were finally resolved after months — suggests a “clear the decks” push before a release.

## 4. Community Hot Topics — Most Active PRs
*No issues updated today; all activity is PR-based. The following open PRs have the broadest scope and likely reviewer contention:*

| PR | Author | Scope | Why It Matters |
|----|--------|-------|----------------|
| [#5487](https://github.com/HKUDS/nanobot/pull/5487) | yuanyi1415 | **WebUI file preview + subagent activity/lifecycle replay** | Touches file preview rendering, path resolution, *and* agent lifecycle replay — high merge-conflict risk (marked `[conflict]`). |
| [#5480](https://github.com/HKUDS/nanobot/pull/5480) | chengyongru | **Typed LLMUsage contract across 4 providers** | Foundational refactor; normalizes token/cache semantics at wire boundaries. Blocks #5481 (trajectory backend). |
| [#5408](https://github.com/HKUDS/nanobot/pull/5408) | ZhouJ-sh | **Follow-up suggestions (DeerFlow-style)** | User-facing UX feature; provider-neutral, strict line protocol. Marked `[conflict]` — likely overlaps with #5486 observability work. |
| [#5367](https://github.com/HKUDS/nanobot/pull/5367) | ZhouJ-sh | **Localize agent activity labels (10 locales)** | i18n completeness; live language-switch updates; preserves raw tool values. Long-open (since Aug 13). |

**Underlying need**: Contributors are converging on **WebUI turn fidelity** (what the user sees per turn) and **provider telemetry standardization** — both prerequisites for reliable multi-turn agents and cost observability.

## 5. Bugs & Stability — Regressions & Fixes (Ranked by Severity)

| Severity | PR | Issue | Fix Status |
|----------|----|-------|------------|
| **High** | [#5485](https://github.com/HKUDS/nanobot/pull/5485) | LangSmith tracing broken after native SDK migration (Fixes #2493) | **Open** — restores `langsmith.wrappers` for OpenAI/Anthropic/Bedrock clients. |
| **High** | [#5484](https://github.com/HKUDS/nanobot/pull/5484) | MCP servers return error payloads with `isError=false` → agent treats as success | **Open** — adds detection for error envelopes in tool result content. |
| **High** | [#5483](https://github.com/HKUDS/nanobot/pull/5483) | Deleted sessions recreated by delayed cross-session messages | **Open** — marks cross-session messages as requiring existing session; checks metadata without creating. |
| **Medium** | [#5491](https://github.com/HKUDS/nanobot/pull/5491) | WebUI: answer text leaked inside reasoning shell across answer→tool→answer turns | **Open** — preserves slices, merges final message, keeps media-only answers. |
| **Medium** | [#5490](https://github.com/HKUDS/nanobot/pull/5490) | Aggregate turn token usage unclear (model call count, context capacity) | **Open** — adds call count, request context, capacity to tooltip; regression test. |
| **Medium** | [#5469](https://github.com/HKUDS/nanobot/pull/5469) | TUI footer shows cumulative tokens, not measured request context | **Open** — shows prompt context/window, cache ratio, output tokens, gen rate. |
| **Low** | [#5471](https://github.com/HKUDS/nanobot/pull/5471) | `ephemeral=True` SDK runs mutated session state (contrary to docs) | **Open** — ensures no turn persistence or history compaction. |

**Pattern**: Multiple **regression fixes** from recent refactors (native SDK migration, WebUI turn aggregation, session handling). No crashes reported today — stability work is proactive.

## 6. Feature Requests & Roadmap Signals

| Signal | PR / Source | Likelihood for Next Version |
|--------|-------------|-----------------------------|
| **Follow-up suggestions (DeerFlow-style)** | [#5408](https://github.com/HKUDS/nanobot/pull/5408) | High — UX parity with competitors; provider-neutral design reduces risk. |
| **Subagent activity & lifecycle replay** | [#5487](https://github.com/HKUDS/nanobot/pull/5487) | High — core to “agentic” positioning; file preview fixes are prerequisites. |
| **Unified provider usage backend (trajectory)** | [#5481](https://github.com/HKUDS/nanobot/pull/5481) | High — depends on #5480 (merged contract); enables cost/latency dashboards. |
| **User-controlled turn recovery (Continue/Dismiss)** | [#5420](https://github.com/HKUDS/nanobot/pull/5420) | Medium — safety-critical for WebSocket interruptions; explicit opt-in. |
| **IMAP poll optimization (headers-first, UID SEARCH)** | [#5489](https://github.com/HKUDS/nanobot/pull/5489) | Medium — perf win for email channel; low user visibility. |
| **WebUI i18n for agent activity (10 locales)** | [#5367](https://github.com/HKUDS/nanobot/pull/5367) | Medium — polish; long-open, may ship with next minor. |

**Prediction**: Next patch will bundle **WebUI turn observability (#5486) + provider usage contract (#5480) + follow-up suggestions (#5408)**. Subagent replay (#5487) may slip if conflicts persist.

## 7. User Feedback Summary
*No new issues or discussions in the last 24 hours — direct user feedback is absent from this snapshot.*  
Inferred pain points from PR activity:
- **Token usage opacity**: Users can’t distinguish cumulative vs. per-request context (#5490, #5469).
- **Turn fragmentation**: Answer slices split across reasoning/tool cycles confuse history (#5491).
- **Session zombie risk**: Deleted sessions resurrecting from delayed messages (#5483).
- **MCP error silence**: Tool failures masked as successes (#5484).
- **Tracing gap**: LangSmith users lost observability after SDK migration (#5485).

Satisfaction signals: Long-stalled features finally closing (#4430, #3294, #3869) suggests maintainers are responsive to **older, high-value requests**.

## 8. Backlog Watch — Stale / High-Impact Items Needing Attention

| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#5367](https://github.com/HKUDS/nanobot/pull/5367) — Localize agent activity | 10 days | Medium | 10-locale i18n complete but unmerged; blocks consistent UX for non-EN users. |
| [#5408](https://github.com/HKUDS/nanobot/pull/5408) — Follow-up suggestions | 6 days | Medium | UX differentiator; marked `[conflict]` with #5486 — needs maintainer arbitration. |
| [#5487](https://github.com/HKUDS/nanobot/pull/5487) — Subagent replay + file preview | 1 day | High | `[conflict]` label; touches preview panel, path resolution, *and* lifecycle — likely needs rebase/split. |
| [#5480](https://github.com/HKUDS/nanobot/pull/5480) — Typed LLMUsage contract | 2 days | Critical | **Blocker** for #5481 (trajectory backend); 4-provider wire normalization must be correct. |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) — Turn recovery (Continue/Dismiss) | 5 days | Medium | Safety feature; no auto-resume — design review needed for WebSocket edge cases. |

**Recommendation**: Prioritize review of **#5480** (unblocks trajectory) and **#5487** (high conflict risk). Assign a maintainer to arbitrate **#5408 vs #5486** overlap.

---

*Data source: GitHub API — HKUDS/nanobot, 2026-08-23 00:00–23:59 UTC. All links point to live PRs.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-23

## 1. Today's Overview
Hermes Agent shows **high development velocity** with 50 pull requests updated in the last 24 hours (46 open, 4 merged/closed) and 4 active issues. The project is in a heavy refactoring and hardening phase, with concentrated work across **security hardening (SSRF, env scrubbing, OAuth)**, **desktop/platform stability (Windows venv, HMR, icon resolution)**, **gateway reliability (Discord/Telegram reconnect logic)**, and **architectural improvements (role-aware routing, plugin capabilities)**. No new releases were published today. The ratio of open PRs to merged suggests a review bottleneck or ongoing CI validation for sensitive changes.

## 2. Releases
**No new releases published today.** The latest version remains v2026.8.3 (referenced in Issue #92087).

## 3. Project Progress
**Merged/Closed PRs (4 total):** The top 20 PRs by comment count are all `OPEN`; the 4 merged/closed PRs are not visible in the provided list. This indicates either:
- Recent merges are smaller, low-discussion fixes (e.g., dependency bumps, typo fixes)
- Maintainers are batching merges after CI passes on the current security/desktop PR wave

**Key Advances in Open PRs:**
- **Security**: SSRF checks for WhatsApp media URLs (#70352), env scrub enforcement in TUI supervisor (#70351), blocked metadata URLs for Supermemory/RetainDB (#70355, #70354)
- **Desktop/Windows**: Platform-aware app icon resolver (#73367), Windows venv update quarantine fix (#92617), HMR gateway survivor stash (#70379), broken pipe guards (#61894)
- **Gateway/Reliability**: Flapping-platform reconnect attention clock (#92247, #92381), live Discord health exposure (#92616), in-flight JsonRpc connect await (#70378)
- **Architecture**: Role-aware routing + reversible tool-output compression (#92615), Anthropic OAuth token rotation fix (#92619)
- **Profiles/Docker**: Symlink-preserving profile archive import (#62194), Docker workspace mount fix (#51142)

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Core Need |
|------|------|----------|-----------|-----------|
| [#66484](https://github.com/NousResearch/hermes-agent/issues/66484) | Issue (Feature) | 3 | 0 | **Desktop plugin authors need `host.startWorkspaceDraft()`** to initiate native workspace creation from plugins — currently blocked by missing host capability |
| [#92087](https://github.com/NousResearch/hermes-agent/issues/92087) | Issue (Feature) | 1 | 0 | **Observability gap**: Discord adapter shows "connected" in persisted state while actually idle/unhealthy — need live health separate from persisted state |
| [#91980](https://github.com/NousResearch/hermes-agent/issues/91980) | Issue (Bug, P2) | 1 | 0 | **Critical UX regression**: Approval prompts sent over dead WebSocket time out silently — no retry, no fallback, no birth log |
| [#92618](https://github.com/NousResearch/hermes-agent/issues/92618) | Issue (Feature) | 0 | 0 | **Org-wide security program request**: Measurable assurance baseline, threat modeling, supply-chain integrity, pen-test evidence, release gates |

**Analysis**: The top discussion (#66484, 37 days open) reveals a **plugin ecosystem bottleneck** — desktop plugins can *read* state but not *initiate* workspace actions. The Discord health issue (#92087) and approval timeout bug (#91980) both point to **state vs. reality divergence** in gateway/client communication. The security program request (#92618) signals maturity pressure from users/adopters.

## 5. Bugs & Stability
| Severity | Issue/PR | Component | Status | Fix PR |
|----------|----------|-----------|--------|--------|
| **P2 (High)** | [#91980](https://github.com/NousResearch/hermes-agent/issues/91980) | TUI / Approvals | Open | None yet |
| **P2** | [#92247](https://github.com/NousResearch/hermes-agent/pull/92247) | Gateway / Telegram | Open (PR) | #92247 (stacked on #92381) |
| **P2** | [#92090](https://github.com/NousResearch/hermes-agent/pull/92090) | CLI / Desktop Entry | Open (PR) | #92090 |
| **P2** | [#62194](https://github.com/NousResearch/hermes-agent/pull/62194) | Profiles / Import | Open (PR) | #62194 |
| **P2** | [#51142](https://github.com/NousResearch/hermes-agent/pull/51142) | Docker / Windows | Open (PR) | #51142 |
| **P3** | [#70352](https://github.com/NousResearch/hermes-agent/pull/70352) | Gateway / WhatsApp (SSRF) | Open (PR) | #70352 |
| **P3** | [#70351](https://github.com/NousResearch/hermes-agent/pull/70351) | TUI / Env Scrub | Open (PR) | #70351 |
| **P3** | [#70355](https://github.com/NousResearch/hermes-agent/pull/70355) | Plugins / Supermemory | Open (PR) | #70355 |
| **P3** | [#70354](https://github.com/NousResearch/hermes-agent/pull/70354) | Plugins / RetainDB | Open (PR) | #70354 |
| **P3** | [#61894](https://github.com/NousResearch/hermes-agent/pull/61894) | Desktop / Std Pipes | Open (PR) | #61894 |
| **P3** | [#62066](https://github.com/NousResearch/hermes-agent/pull/62066) | File Sync / Windows | Open (PR) | #62066 |
| **P3** | [#55505](https://github.com/NousResearch/hermes-agent/pull/55505) | ACP / Tool Calls | Open (PR) | #55505 |

**Notable**: 12 bug-fix PRs open simultaneously, 5 rated P2. The approval prompt timeout (#91980) has **no fix PR yet** — highest user-impact risk. Windows venv update failure (#92617) and desktop entry symlink bug (#92090) affect install reliability.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Desktop plugin `startWorkspaceDraft()`** | [#66484](https://github.com/NousResearch/hermes-agent/issues/66484) (37d old, `needs-decision`) | Medium — blocked on design decision; plugin ecosystem pressure growing |
| **Live Discord adapter health in gateway state** | [#92087](https://github.com/NousResearch/hermes-agent/issues/92087) → [#92616](https://github.com/NousResearch/hermes-agent/pull/92616) (PR open same day) | **High** — PR already implements `live_health` sub-object; closes issue |
| **Role-aware routing + reversible tool-output compression** | [#92615](https://github.com/NousResearch/hermes-agent/pull/92615) (new PR, `needs-decision`) | Medium — architectural scope; authority overlay suggests v2026.9+ |
| **Repository-wide security assurance baseline** | [#92618](https://github.com/NousResearch/hermes-agent/issues/92618) (new, `sweeper:risk-automation`) | Low for next version — programmatic, multi-sprint effort |
| **Anthropic OAuth token rotation resilience** | [#92619](https://github.com/NousResearch/hermes-agent/pull/92619) (new PR) | High — single-purpose auth fix, low blast radius |

**Prediction**: Next release (v2026.9?) will likely include **Discord live health (#92616)**, **Anthropic OAuth fix (#92619)**, and a batch of the P2/P3 bug fixes. Plugin workspace draft and role-aware routing need design sign-off.

## 7. User Feedback Summary
**Pain Points (from issues):**
- **Plugin developers** cannot trigger native workspace creation — forced to work around with commands/UI hacks (#66484)
- **Discord bot operators** cannot distinguish "connected but idle" from "healthy active" — misleading dashboard state (#92087)
- **Desktop/TUI users** lose approval prompts silently during context compression/disconnect — dangerous commands execute without confirmation or prompt vanishes (#91980)
- **Security-conscious adopters** lack a published assurance baseline — blocker for enterprise/compliance use (#92618)

**Use Cases Evident:**
- Multi-platform gateway management (Discord, Telegram, WhatsApp)
- Desktop app with Electron/Vite HMR development loop
- Profile portability across machines (symlink-preserving archives)
- Docker-based isolated workspaces (Windows host path boundary fixes)
- ACP (Agent Client Protocol) tool call handling for malformed LLM output

**Sentiment**: Technical users are filing precise, high-signal issues. Frustration surfaces in long-open items (#66484, #51142 61 days). Security fixes are welcomed but volume suggests accumulated debt.

## 8. Backlog Watch
| Item | Age | Type | Why It Needs Attention |
|------|-----|------|------------------------|
| [#66484](https://github.com/NousResearch/hermes-agent/issues/66484) | 37 days | Feature (P3, `needs-decision`) | **Plugin ecosystem enabler** — unblocks desktop plugin authors; tagged `comp/desktop`, `comp/plugins`; 3 comments show active interest |
| [#51142](https://github.com/NousResearch/hermes-agent/pull/51142) | 61 days | Bug (P2, `codex`) | **Docker Windows path fix** — avoids mounting host home; critical for Windows Docker users; still open despite clear fix |
| [#70352](https://github.com/NousResearch/hermes-agent/pull/70352) | 31 days | Security (P3, `needs-repro`) | **WhatsApp SSRF fix** — requires reproduction; security boundary issue; stalled on `needs-repro` |
| [#70351](https://github.com/NousResearch/hermes-agent/pull/70351) | 31 days | Security (P3) | **TUI env scrub regression** — tokens/keys re-injected into child processes; has regression test; ready for review |
| [#70378](https://github.com/NousResearch/hermes-agent/pull/70378) | 31 days | Bug (P2, `sweeper:blast-broad`) | **JsonRpc in-flight connect** — broad blast radius; prevents duplicate handshakes; core gateway stability |
| [#91980](https://github.com/NousResearch/hermes-agent/issues/91980) | 1 day | Bug (P2) | **Approval prompt silent timeout** — **no fix PR yet**; high user safety impact; needs immediate triage |

**Maintainer Action Items:**
1. **Triage #91980** — assign fix owner today (P2, no PR)
2. **Decide on #66484** — unblock plugin ecosystem (37 days, `needs-decision`)
3. **Review security PR batch** (#70351, #70352, #70354, #70355) — all 31 days old, tests included
4. **Merge Windows/Docker fixes** (#51142, #92617, #92090, #62066) — reduce install friction
5. **Resolve stacked gateway PRs** (#92247 → #92381) — flapping platform stability

---
*Digest generated from GitHub data as of 2026-08-23. Links point to NousResearch/hermes-agent repository.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-23

---

## 1. Today's Overview

PicoClaw shows **moderate maintenance activity** with 6 PRs updated and 2 issues updated in the last 24 hours. The project is actively addressing **critical stability bugs** — notably an MCP server connection failure that hangs the agent loop (#3269, #3337) and a Telegram message-editing runaway (#3343). Four older PRs were closed/merged today, including long-standing fixes for cron job scheduling (#1083), exec tool timeout handling (#3319), skills CLI installation (#714), and a batch merge of 5 prior fixes (#1545). No new release was published. The backlog contains two stale open PRs (#3222 DeltaChat refactor, #3337 MCP fix) awaiting review.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Title | Domain | Status | Key Change |
|----|-------|--------|--------|------------|
| [#3319](https://github.com/sipeed/picoclaw/pull/3319) | `fix(tools): honor exec timeout and boolean run options` | tools/exec | **Closed** | Exec tool now respects per-run `timeout` argument; `background` and `pty` schema corrected from string to boolean. |
| [#714](https://github.com/sipeed/picoclaw/pull/714) | `skills: install/reinstall CLI and refactor into skillsCmd` | skills/cli | **Closed** | Adds `reinstall` subcommand, GitHub Trees API for full-directory installs, repo@branch + subpath support. |
| [#1083](https://github.com/sipeed/picoclaw/pull/1083) | `fix(cron): preserve recurring job schedule after execution` | cron | **Closed** | Recurring jobs (every_seconds / cron_expr) no longer degrade to one-time "at" tasks after first run. |
| [#1545](https://github.com/sipeed/picoclaw/pull/1545) | `fix: merge PR #1500 #1490 #1488 #1487 #1485` | misc | **Closed** | Batch-merge of 5 prior bug-fix PRs (details in linked PRs). |

**Net effect**: Core tooling (exec, cron, skills) stabilized; DeltaChat and MCP fixes remain in review.

---

## 4. Community Hot Topics

| Item | Type | Comments | 👍 | Summary |
|------|------|----------|----|---------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | Issue (BUG) | 6 | 1 | **MCP server connection failure hangs entire agent loop** — chat interface stops replying. User on nightly (git 2cf030d2), Go 1.25.11, Qwen3. |
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | PR (fix) | — | 0 | **Fix for #3269**: `ensureMCPInitialized` error no longer propagates to `AgentLoop.Run`; loop continues with degraded MCP instead of halting. |
| [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Issue (BUG) | 0 | 0 | **Telegram tool feedback animation runs indefinitely** — 228k+ `editMessageText` calls over days, triggering server-side rate limit (`retry_after`). |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR (refactor) | — | 0 | **DeltaChat cleanup** — -200 LOC, drops legacy features/password config, renames fields, adds full config section. Stale since 2026-07-03. |

**Underlying needs**:  
- **Resilience**: Agent loop must survive upstream service failures (MCP, Telegram) without full hang.  
- **Observability**: Runaway API calls (#3343) suggest missing timeouts/circuit-breakers on external integrations.  
- **Maintenance burden**: Stale PRs (#3222, #3337) indicate review capacity constraints.

---

## 5. Bugs & Stability (Ranked by Severity)

| Rank | Issue/PR | Severity | Description | Fix PR Exists? |
|------|----------|----------|-------------|----------------|
| 1 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) / [#3337](https://github.com/sipeed/picoclaw/pull/3337) | **Critical** | MCP connection failure → agent loop exits → **chat interface completely unresponsive** until restart. | ✅ [#3337](https://github.com/sipeed/picoclaw/pull/3337) (open, stale) |
| 2 | [#3343](https://github.com/sipeed/picoclaw/issues/3343) | **High** | Telegram feedback animation edits message every 3s **indefinitely** after failed turn → 228k+ calls → rate limit (`retry_after`). No timeout/cancel logic. | ❌ No fix PR yet |
| 3 | [#3319](https://github.com/sipeed/picoclaw/pull/3319) | Medium | Exec tool ignored per-run `timeout`; `background`/`pty` schema type mismatch (string vs bool). | ✅ Fixed in [#3319](https://github.com/sipeed/picoclaw/pull/3319) (closed) |
| 4 | [#1083](https://github.com/sipeed/picoclaw/pull/1083) | Medium | Recurring cron jobs silently became one-time after first execution. | ✅ Fixed in [#1083](https://github.com/sipeed/picoclaw/pull/1083) (closed) |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **MCP resilience** (graceful degradation, not hard fail) | #3269, #3337 | **High** — fix PR exists, critical user-facing bug |
| **Telegram integration hardening** (animation timeouts, circuit breaker) | #3343 | **High** — severe API abuse risk, no PR yet |
| **DeltaChat modernization** (config cleanup, relay list from official source) | #3222 | **Medium** — stale PR, -200 LOC suggests maintainer interest |
| **Skills CLI UX** (reinstall, subpath, branch install) | #714 | **Done** — merged today |
| **Cron reliability** (recurring jobs persist) | #1083 | **Done** — merged today |

**Prediction**: Next patch will likely include MCP fix (#3337) and possibly a Telegram animation guard. DeltaChat refactor may wait for review bandwidth.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Agent loop hangs on MCP failure** | #3269 (6 comments, 1👍) — “chat interface stops replying to users entirely” | **High** — blocks all interaction until restart |
| **Telegram spam from stuck animation** | #3343 — 228k+ edit attempts, triggered server rate limit | **High** — risks account restrictions, wasted API quota |
| **Exec tool timeout ignored** | #3319 — per-run timeout “silently ignored” | **Medium** — unpredictable long-running commands |
| **Cron jobs stop repeating** | #1083 — recurring jobs “silently becoming one-time” | **Medium** — silent scheduler failure |
| **DeltaChat config friction** | #3222 — password config, hardcoded relay list, legacy code | **Low** — maintenance/UX improvement |

**Satisfaction signals**: Users actively report bugs with env details (Go version, model, git commit); PR authors provide focused fixes. No feature praise or dissatisfaction comments visible in this window.

---

## 8. Backlog Watch (Needs Maintainer Attention)

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 51 days | Open, stale | DeltaChat refactor (-200 LOC, security: drops password config). Large cleanup blocked on review. |
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | 9 days | Open, stale | **Critical bug fix** for #3269. Ready but unmerged — agent loop hang persists on nightly. |
| [#3343](https://github.com/sipeed/picoclaw/issues/3343) | 1 day | Open, no PR | **New high-severity bug** — Telegram API abuse. Needs triage + fix (timeout/cancel on animation). |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | 34 days | Open, stale | Root cause of agent hang. Fix PR (#3337) exists but stalled. |

**Recommendation**: Prioritize review/merge of **#3337** (unblocks users on nightly), then triage **#3343** for a quick patch. Assign reviewer for **#3222** or close with feedback if scope changed.

---

*Digest generated from GitHub data as of 2026-08-23. Links point to live GitHub items.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-23

## 1. Today's Overview
NanoClaw shows **high velocity with 26 PRs updated in 24 hours** (18 open, 8 closed/merged) and 1 new issue. The project is in active maintenance mode with a strong focus on **multi-channel adapter stability** (Telegram, Slack), **setup wizard UX improvements**, and **container/runtime hardening**. No new releases were cut today, but the volume of merged fixes suggests a release candidate may be imminent. Test infrastructure health is a current concern due to a Node 25+ compatibility regression.

## 2. Releases
**No new releases today.** The last release data is not provided in this snapshot.

## 3. Project Progress — Merged/Closed PRs (8 items)

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#3394](https://github.com/qwibitai/nanoclaw/pull/3394) | fix(slack): working manual-install fallback, delivered to requester | **Bug Fix / UX** | Restores Slack app installation recovery when managed install is blocked by workspace policy; fixes `redirect_uri` validation and agent-driven provisioning dead-end. |
| [#3390](https://github.com/qwibitai/nanoclaw/pull/3390) | fix(setup): skip Slack auto-provisioning when bot already saved | **Bug Fix** | Prevents duplicate Slack app provisioning on setup re-run after cancellation; detects existing `SLACK_BOT_TOKEN`. |
| [#3443](https://github.com/qwibitai/nanoclaw/pull/3443) | build: drop better-sqlite3 from onlyBuiltDependencies — use bundled prebuilds | **Build / Perf** | Removes `node-gyp` rebuild step for `better-sqlite3` v13+ which ships prebuilt binaries; speeds installs and avoids native build failures. |
| [#3445](https://github.com/qwibitai/nanoclaw/pull/3445) | Closing: wrong repository | **Housekeeping** | Misdirected PR closed by author. |
| *4 additional closed PRs* | (not detailed in top-20 list) | — | Likely include minor fixes/docs given the 8 total closed. |

**Net progress:** Core Slack onboarding flows are now resilient to policy blocks and re-runs; SQLite dependency friction removed; CI/build times should improve.

## 4. Community Hot Topics — Most Active Open PRs/Issues

| Item | Activity Signals | Underlying Need |
|------|------------------|-----------------|
| [#3318](https://github.com/qwibitai/nanoclaw/pull/3318) *fix: force baseline (non-AVX2) Bun binary in agent image* | Updated today (2026-08-23), created 2026-08-18 — **longest-running open PR in set** | **Portable container images**: CI build hosts have AVX2 but target runners may not; need baseline (SSE4.2) Bun to avoid `Illegal instruction` crashes on older CPUs. |
| [#3453](https://github.com/qwibitai/nanoclaw/issues/3453) *stdin-json tests fail on Node 25+: tsx loader deprecation pollutes asserted stderr* | **Only open issue today**, 0 comments but high signal | **Test suite reliability on Node 25+**: `tsx` loader emits deprecation warnings to stderr, breaking strict stderr assertions in CLI tests. Blocks CI on newest Node. |
| [#3450](https://github.com/qwibitai/nanoclaw/pull/3450) *Telegram: trust channel's own identity in sender_scope gate* | Fixes #2991 (long-standing) | **Telegram broadcast-channel support**: Anonymous channel posts (`sender_chat` without `from`) were rejected by unknown-sender gate; need to recognize channel identity as valid author. |
| [#3449](https://github.com/qwibitai/nanoclaw/pull/3449) *fix(telegram): pin explicit allowedUpdates to stop channel-post blackholing* | Related to #3450 | **Telegram update reliability**: Server-side persisted `allowed_updates` caused channel posts to be silently dropped; explicit pinning required. |
| [#3438](https://github.com/qwibitai/nanoclaw/pull/3438) *feat(setup): wizard offers "add another Telegram bot" when one configured* | Part of a 4-PR series (#3435, #3437, #3434, #3431) | **Multi-bot Telegram UX**: Users need to connect multiple bots to one agent instance; wizard must carry adapter instance through pairing/init. |

**Pattern:** Telegram and Slack adapter hardening dominate — both are production-critical channels with real-world deployment edge cases (policy blocks, anonymous channels, multi-bot setups).

## 5. Bugs & Stability — Ranked by Severity

| Severity | Item | Description | Fix Status |
|----------|------|-------------|------------|
| **High** | [#3453](https://github.com/qwibitai/nanoclaw/issues/3453) | **CI regression on Node 25+**: `stdin-json` tests fail because `tsx` loader deprecation warning writes to stderr, violating strict assertions. Blocks Node 25+ compatibility. | **No fix PR yet** — issue opened today. Likely needs test adjustment (allow deprecation stderr) or `tsx` config change. |
| **High** | [#3447](https://github.com/qwibitai/nanoclaw/pull/3447) | **Circuit breaker cross-contamination**: Crash counter keyed only by `data/circuit-breaker.json` file existence — shared volume mounts cause unrelated instances to inherit each other's crash history. | **Fix PR open** (#3447) — scopes strikes to owning instance. |
| **Medium** | [#3449](https://github.com/qwibitai/nanoclaw/pull/3449) | **Telegram channel-post blackholing**: Omitting `allowedUpdates` on `getUpdates` reuses server-side setting, causing channel posts to be dropped after initial config. | **Fix PR open** — pins explicit `allowedUpdates`. |
| **Medium** | [#3450](https://github.com/qwibitai/nanoclaw/pull/3450) | **Telegram unknown-sender gate blocks channel posts**: Anonymous broadcast posts (`sender_chat` only) mapped to `chat:<id>` identity, never in `agent_members`, triggering approval card sender can't click. | **Fix PR open** — trusts channel identity in `sender_scope` gate. |
| **Low** | [#3318](https://github.com/qwibitai/nanoclaw/pull/3318) | **Container AVX2 mismatch**: Bun install script probes *build host* CPU, not target; AVX2 binary fails on baseline-only runners. | **Fix PR open** — forces `-baseline` build. |

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Multi-bot Telegram support** | 4-PR series: [#3438](https://github.com/qwibitai/nanoclaw/pull/3438), [#3437](https://github.com/qwibitai/nanoclaw/pull/3437), [#3435](https://github.com/qwibitai/nanoclaw/pull/3435), [#3434](https://github.com/qwibitai/nanoclaw/pull/3434), [#3431](https://github.com/qwibitai/nanoclaw/pull/3431) | **Very High** — coordinated core-team effort, includes docs (#3437) and CLI welcome integration. |
| **Cursor Agent provider skill** | [#3355](https://github.com/qwibitai/nanoclaw/pull/3355), [#3356](https://github.com/qwibitai/nanoclaw/pull/3356) | **High** — labeled `Feature skill`, `follows-guidelines`, `core-team`; adds `/add-cursor` provider + SDK payload. |
| **Slack MPDM-aware approval cards** | [#3385](https://github.com/qwibitai/nanoclaw/pull/3385) | **High** — fixes confusing `mpdm-…` slugs in group DM approvals; uses `resolveConversation` seam. |
| **Auto-drop automated senders from approval gate** | [#3446](https://github.com/qwibitai/nanoclaw/pull/3446) (fixes #3235) | **Medium-High** — bots/webhooks (Discord `bot`/`webhook_id`, Slack `bot_id`, Telegram `is_bot`) were stuck in non-persistent deny loop. |
| **Group-scope auto-fill arg override warning** | [#3448](https://github.com/qwibitai/nanoclaw/pull/3448) (fixes #2464) | **Medium** — UX guard: warns when explicit args conflict with context-derived auto-fill values. |

## 7. User Feedback Summary
*No direct user comments captured in today's data (all PRs/issues show 0 comments).* However, the **nature of fixes reveals pain points**:

| Pain Point | Inferred From | User Impact |
|------------|---------------|-------------|
| **Slack app install blocked by workspace policy** | #3394, #3390 | Admins hit dead ends; manual fallback URL broken; re-running setup created duplicate apps. |
| **Telegram channel posts silently ignored** | #3449, #3450, #2991 | Broadcast channels (common for announcements) produced no agent reaction — "blackholed." |
| **Container crashes on non-AVX2 hosts** | #3318 | Deployments to older CPUs / some cloud instances failed with `Illegal instruction`. |
| **Setup wizard can't add 2nd Telegram bot** | #3438 series | Users managing multiple bots forced to manual config; wizard assumed single-bot. |
| **Approval cards show cryptic `mpdm-…` names** | #3385 | Slack group DM mentions produced unreadable approval prompts. |

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age / Status | Why It Matters |
|------|--------------|----------------|
| [#3318](https://github.com/qwibitai/nanoclaw/pull/3318) *force baseline Bun binary* | **5 days open**, updated today | Blocks reliable container deployments; simple fix (`--baseline` flag) but unmerged. |
| [#3453](https://github.com/qwibitai/nanoclaw/issues/3453) *Node 25+ test regression* | **Opened today**, 0 comments | **Zero-day CI blocker** for Node 25; needs triage before next Node LTS/current lands in CI. |
| [#3447](https://github.com/qwibitai/nanoclaw/pull/3447) *circuit-breaker instance scoping* | Opened today | Correctness fix for shared-volume deployments; low risk, high correctness value. |
| [#3385](https://github.com/qwibitai/nanoclaw/pull/3385) *MPDM-aware approval cards* | 3 days open, core-team | UX polish for Slack group DMs; improves clarity for admin approvers. |
| [#3446](https://github.com/qwibitai/nanoclaw/pull/3446) *auto-drop automated senders* | Opened today, fixes #3235 | Eliminates infinite approval-deny loop for bots/webhooks across 3 platforms. |

---

**Health Indicators**
- ✅ **High merge rate** (8/26 PRs closed today)
- ✅ **Core-team engagement** on multi-PR features (Telegram multi-bot, Cursor provider)
- ✅ **Build hygiene** (better-sqlite3 prebuilds adopted)
- ⚠️ **Test infrastructure debt** (Node 25+ regression, 0-day)
- ⚠️ **Long-running container fix** (#3318, 5 days) — may indicate review bottleneck

**Recommended Maintainer Actions**
1. **Triage #3453 immediately** — add Node 25 to CI matrix or patch test assertions.
2. **Merge #3318** — unblocks container portability; low complexity.
3. **Review #3447** — circuit breaker fix prevents silent multi-tenant corruption.
4. **Batch-merge Telegram series** (#3438, #3435, #3434, #3431, #3437) — cohesive feature, all core-team.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-23

## 1. Today's Overview

IronClaw shows **high development velocity** with 30 total updates (9 issues + 21 PRs) in the last 24 hours. The project is in active feature development mode with **5 PRs merged/closed** and **4 issues closed**, indicating steady delivery. Key themes include: **context optimization** (major token/cost reduction initiative), **CI/CD pipeline modernization** (4 parallel expedite tracks), **sandbox credential mediation** (generic egress auth), **onboarding UX polish**, and **WebUI design system groundwork**. No releases were published today.

## 2. Releases

**No new releases** published today.

---

## 3. Project Progress — Merged/Closed Today

| PR / Issue | Title | Type | Key Changes |
|------------|-------|------|-------------|
| [#7773](https://github.com/nearai/ironclaw/pull/7773) | refactor(webui): remove duplicate Settings and Extensions tabs | **Merged PR** | Removed unused tab components, duplicate `SETTINGS_TABS`/`EXTENSIONS_TABS` inventories, and obsolete Settings tab test; preserved route metadata |
| [#7774](https://github.com/nearai/ironclaw/pull/7774) | test(webui): make automation presenter date assertions timezone-robust | **Merged PR** | Replaced UTC-dependent assertions with browser-local formatter expectations; added explicit UTC and Asia/Shanghai format coverage |
| [#7772](https://github.com/nearai/ironclaw/pull/7772) | fix(webui): surface extension setup phase and blockers in Configure | **Merged PR** | Passes authoritative `phase`, `blockers`, and config-field presence through `useExtensionSetup`; displays localized explanations for all lifecycle blocker kinds |
| [#7700](https://github.com/nearai/ironclaw/pull/7700) | feat(notifications): publish authoritative run outcomes | **Merged PR** | Materializes completion/failure notifications from Process Journal transitions; publishes only after finalized assistant reply is durable; excludes foreground/child/ownerless runs |
| [#7076](https://github.com/nearai/ironclaw/pull/7076) | Install the packages the catalog already publishes | **Merged PR** | Rebased 3-month-stale branch; fixed `MixedManifestFixture` (`prompt_url`), Basic-manifest fixture composition |
| [#7768](https://github.com/nearai/ironclaw/issues/7768) | Remove unused Settings and Extensions tabs and duplicate route metadata | **Closed Issue** | Addressed by #7773 |
| [#7767](https://github.com/nearai/ironclaw/issues/7767) | Make Automation presenter date tests timezone-robust | **Closed Issue** | Addressed by #7774 |
| [#7769](https://github.com/nearai/ironclaw/issues/7769) | Surface extension setup phase and blockers in Configure | **Closed Issue** | Addressed by #7772 |
| [#7691](https://github.com/nearai/ironclaw/issues/7691) | Publish run outcome notifications and harden notification lifecycle | **Closed Issue** | Addressed by #7700 |

**Summary**: 5 PRs merged delivering WebUI cleanup (tabs, timezone robustness, extension setup UX), notification system hardening, and dependency alignment. All 4 closed issues were resolved by corresponding PRs.

---

## 4. Community Hot Topics — Most Active Items

| Item | Activity | Core Need |
|------|----------|-----------|
| [#7824](https://github.com/nearai/ironclaw/issues/7824) Context projection: Pi-style compaction barrier, structured summaries, overflow recovery | **2 comments**, 0 👍 | **Critical performance/cost issue**: Full thread history replay causes 4× token bloat (227.7M vs 55.1M tokens, $10.31 vs $2.52 on PinchBench). Needs structured compaction, summaries, and overflow recovery. |
| [#7815](https://github.com/nearai/ironclaw/issues/7815) Onboarding suggestions: cumulative net-new work to close the connect → suggest → thread flow | **1 comment**, 0 👍 | **Onboarding UX completion**: End-to-end suggestions flow now works on `main` (#7693, #7694, #6994); this issue tracks remaining gaps (refresh, connect CTA in OOBE drawer). |
| [#7825](https://github.com/nearai/ironclaw/issues/7825) Sandbox egress auth: native iron-proxy recipes with host credential broker | **0 comments**, 0 👍 | **Security architecture**: Retire GitHub-specific carve-out; generic credential bindings for sandbox egress via iron-proxy sidecar. |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) feat(coding): omp core-tool contract + engines + benchmark arm | **XL, medium risk**, 0 comments | **Core tooling overhaul**: Unified 6-tool surface (`read`, `write`, `edit`, `glob`, `grep`, `bash`); removes legacy file tools and `builtin__*` spellings. |
| [#7810](https://github.com/nearai/ironclaw/pull/7810) feat(sandbox): mediate GitHub CLI through generic credential bindings | **XL, low risk**, 0 comments | **Sandbox credential mediation**: Per-user persistent sandbox with managed egress; provider-neutral `authorized` staging ports replacing GitHub-named ones. |
| **CI Expedite Tracks** ([#7821](https://github.com/nearai/ironclaw/pull/7821), [#7817](https://github.com/nearai/ironclaw/pull/7817), [#7819](https://github.com/nearai/ironclaw/pull/7819), [#7820](https://github.com/nearai/ironclaw/pull/7820), [#7809](https://github.com/nearai/ironclaw/pull/7809)) | **4 parallel XL PRs** | **CI/CD reliability**: Single setup-rust composite (T1), nextest pipeline + full-failure signal (T2), PR/queue convergence (T3), canonical preflight gates (T4). Addresses "green locally, red in CI" drift. |

**Analysis**: The highest-impact open item is **#7824** (context projection) — a measured 4× cost/token regression that blocks efficient model usage. The CI expedite tracks (5 PRs) represent a coordinated platform stability push. Onboarding (#7815) and sandbox auth (#7825/#7810) are active product/engineering priorities.

---

## 5. Bugs & Stability

| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#7823](https://github.com/nearai/ironclaw/issues/7823) Notion install fails in IronClaw | **Medium** (integration-install) | Open, 0 comments | None yet |
| [#7822](https://github.com/nearai/ironclaw/issues/7822) Unable to set up Slack in IronClaw | **Medium** (integration-install) | Open, 0 comments | None yet |
| [#7767](https://github.com/nearai/ironclaw/issues/7767) Automation presenter date tests fail in non-UTC timezones | **Low** (test flakiness) | **Closed** | [#7774](https://github.com/nearai/ironclaw/pull/7774) ✅ Merged |
| [#7769](https://github.com/nearai/ironclaw/issues/7769) Extension setup blockers discarded in Configure modal | **Low** (UX regression) | **Closed** | [#7772](https://github.com/nearai/ironclaw/pull/7772) ✅ Merged |

**Assessment**: Two **new medium-severity integration install bugs** (Notion, Slack) reported from user feedback channel (#x-ai-product-feedback). Both are fresh (created today, sourced from July 28 Slack reports). No fix PRs yet. Two test/UX bugs from Aug 20 were resolved today.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Context projection / Pi-style compaction** | [#7824](https://github.com/nearai/ironclaw/issues/7824) (core team) | **Very High** — Measured 4× cost regression; explicit benchmark data; labeled as "measured, not hypothetical" |
| **Onboarding suggestions: refresh + connect CTA in OOBE** | [#7815](https://github.com/nearai/ironclaw/issues/7815) + [#7816](https://github.com/nearai/ironclaw/pull/7816) | **High** — Frontend half (#7816) already open; behind existing `oobe_suggestions` flag |
| **Generic sandbox egress auth (retire GitHub carve-out)** | [#7825](https://github.com/nearai/ironclaw/issues/7825) + [#7810](https://github.com/nearai/ironclaw/pull/7810) | **High** — PR #7810 open (XL, low risk); completes per-user persistent sandbox runtime |
| **Unified coding tool contract (6 bare tools)** | [#7491](https://github.com/nearai/ironclaw/pull/7491) | **Medium-High** — XL risk:medium; removes legacy surface; benchmark arm included |
| **AfterTurn lifecycle hook + memory curation** | [#7765](https://github.com/nearai/ironclaw/pull/7765) (phase 1 of #7770) | **Medium** — Core hooks infrastructure; privileged-only; first consumer is memory curation |
| **Background subagents: receipt spawns, per-child delivery, healing** | [#7818](https://github.com/nearai/ironclaw/pull/7818) (slices 2b+2c) | **Medium** — Producer half for background mode; deployment-gated |
| **WebUI Design System (Storybook + catalog)** | [#7257](https://github.com/nearai/ironclaw/pull/7257) (docs-only) | **Low-Medium** — Long-running epic; docs proposal only; 3 tracking epics |

**Prediction**: Next version will likely include **context compaction (#7824)**, **onboarding refresh/connect (#7816)**, and **generic sandbox auth (#7810)**. The unified coding tools (#7491) and AfterTurn hooks (#7765) are strong candidates but carry more risk.

---

## 7. User Feedback Summary

| Feedback | Source | Pain Point | Satisfaction Signal |
|----------|--------|------------|---------------------|
| **Notion tool won't install** | Slack #x-ai-product-feedback (alejo.escriva, 2026-07-28) → [#7823](https://github.com/nearai/ironclaw/issues/7823) | Integration install broken | 😞 Dissatisfied — core integration fails |
| **Unable to set up Slack** | Same channel/reporter → [#7822](https://github.com/nearai/ironclaw/issues/7822) | Integration setup broken; possibly related to Notion issue | 😞 Dissatisfied — multiple integrations affected |
| **Context cost explosion (4× tokens, 4× cost)** | Internal benchmark (PinchBench, DeepSeek-V4-Flash) → [#7824](https://github.com/nearai/ironclaw/issues/7824) | Full history replay per request unsustainable | ⚠️ Critical — measured regression, not hypothetical |
| **Onboarding flow gaps (no refresh, no connect CTA)** | Product team tracking → [#7815](https://github.com/nearai/ironclaw/issues/7815) | Users stuck with stale suggestions; can't connect from OOBE | 🔧 In progress — backend complete, frontend gaps remain |

**Overall**: **Mixed**. Critical infrastructure regression (context cost) and user-facing integration installs broken. Onboarding UX actively being polished. No positive feedback signals in today's data.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#7824](https://github.com/nearai/ironclaw/issues/7824) Context projection: Pi-style compaction barrier | 1 day (new) | **Highest leverage**: 4× token/cost reduction; affects every model call | Requires design for structured summaries + overflow recovery; no PR yet |
| [#7823](https://github.com/nearai/ironclaw/issues/7823) Notion install fails | 1 day (new, from July report) | **User-blocking**: Core integration unusable | Needs triage; possibly related to Slack issue (#7822) |
| [#7822](https://github.com/nearai/ironclaw/issues/7822) Slack setup fails | 1 day (new, from July report) | **User-blocking**: Core integration unusable | Same reporter as Notion; may share root cause |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) Unified coding tool contract | 12 days | **Foundational**: Removes legacy tool surface; benchmark validated | XL, risk:medium; needs review bandwidth |
| [#7257](https://github.com/nearai/ironclaw/pull/7257) WebUI Design System proposal | 18 days | **Strategic**: North-star for UI consistency; 3 epics depend on it | Docs-only; no code yet; may need champion |
| [#7255](https://github.com/nearai/ironclaw/pull/7255) APDD governance kit evaluation | 18 days | **Process**: Governance framework adoption decision | Private repo dependency; evaluation phase |
| [#7650](https://github.com/nearai/ironclaw/pull/7650) Derive run outcomes from runtime evidence | 9 days | **Observability**: Evidence-backed run assessment vs semantic judging | XL, low risk; core automation quality |

**Priority Order for Maintainers**:
1. **Triage #7823 + #7822** (user-blocking integrations, possibly related)
2. **Design kickoff for #7824** (highest ROI — 4× cost reduction)
3. **Review #7810 + #7816** (near-complete features: sandbox auth, onboarding UX)
4. **Advance #7491** (foundational tooling cleanup)
5. **Decide on #7257/#7255** (strategic docs — assign or close)

---

## Project Health Indicators

| Metric | Signal |
|--------|--------|
| **Velocity** | 🟢 High (30 updates/24h, 5 PRs merged) |
| **Release Cadence** | 🟡 None today; last release unknown |
| **Bug Inflow** | 🟠 2 new medium-severity user-facing bugs |
| **Technical Debt Paydown** | 🟢 Active (tabs cleanup, timezone tests, notification hardening) |
| **Strategic Initiatives** | 🟢 5 parallel CI tracks, context optimization, sandbox auth, onboarding |
| **Community Engagement** | 🟡 Low comments/reactions on issues; mostly internal tracking |

**Bottom Line**: IronClaw is **engineering-heavy, user-feedback-light** today. The team is executing well on infrastructure (CI, notifications, tooling) but has **two fresh user-blocking integration bugs** and a **critical cost regression** that need immediate product/engineering attention. The context projection work (#7824) is the single highest-impact item in the pipeline.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-23

---

## 1. Today's Overview

LobsterAI saw moderate maintenance activity in the last 24 hours with **6 PRs updated** (5 merged/closed, 1 open) and **2 Issues closed** as stale. No new releases were published. The merged PRs address a mix of bug fixes (session rename error handling, Chrome flag collision, custom provider limit), a UX improvement (manual retry for transient errors), and a user-requested feature (Markdown export for sessions). The single open PR (#2452) targets a provider-persistence edge case for OpenClaw models with slashed IDs. Overall, the project is in a **steady maintenance phase** — clearing backlog, hardening edge cases, and incrementally expanding customization capacity.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Project Progress — Merged / Closed PRs (2026-08-22)

| PR | Title | Type | Key Change |
|----|-------|------|------------|
| [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) | `fix(cowork): show error toast when session rename fails` | Bug fix | Wraps `renameSession` IPC in try/catch; shows localized toast on failure and keeps rename input open for retry. |
| [#1208](https://github.com/netease-youdao/LobsterAI/pull/1208) | `feat(cowork): 新增手动重试按钮，支持频繁请求等瞬时错误快速重试` | Feature | Adds inline **Retry** button on error bubbles for 429/network/5xx errors; introduces `RETRYABLE_ERROR_KEYS` classification. |
| [#1209](https://github.com/netease-youdao/LobsterAI/pull/1209) | `fix(web-search): web-search-block-unsupported-chrome-flags` | Bug fix | Removes `--disable-blink-features=AutomationControlled` flag injection that broke Chrome 130+; traces root cause to external user-data-dir pollution. |
| [#1212](https://github.com/netease-youdao/LobsterAI/pull/1212) | `fix(model): allow up to 20 custom providers` | Enhancement | Lifts hard-coded cap from 10 (`custom_0`–`custom_9`) to 20 (`custom_0`–`custom_19`) by moving key list to shared config. |
| [#1214](https://github.com/netease-youdao/LobsterAI/pull/1214) | `【功能缺失】会话详情新增导出为 Markdown 文件功能` | Feature | Implements "Export as Markdown" in session detail menu; reuses `buildDisplayItems`/`buildConversationTurns`; truncates long tool results at 300 chars; includes session metadata header. Closes #1345 (note: related to #1213). |

**Net effect:** Session management more resilient (rename, retry), web-search stabilized on newer Chrome, custom provider capacity doubled, and a high-value export feature delivered.

---

## 4. Community Hot Topics

| Item | Activity | Signal |
|------|----------|--------|
| [Issue #1213](https://github.com/netease-youdao/LobsterAI/issues/1213) — *Export session as Markdown* | 2 comments, 0 👍, closed stale | User pain point: image-only export forces manual copy/paste; Markdown enables search, version control, and LLM post-processing. **Addressed by PR #1214** (merged). |
| [Issue #1206](https://github.com/netease-youdao/LobsterAI/issues/1206) — *kimi2.5 repeats progress during doc analysis* | 2 comments, 0 👍, closed stale | Model-specific streaming bug (duplicate action toasts); workaround: switch model. No fix PR linked — may need provider-side investigation. |
| [PR #2452](https://github.com/netease-youdao/LobsterAI/pull/2452) — *Preserve provider for slashed model IDs* | 0 comments, open, updated 2026-08-22 | Active technical debt: `custom_0` + `deepseek-ai/DeepSeek-V4-Flash` persisted as bare model ID, breaking renderer resolution. **Needs review**. |

**Underlying needs:** Users want **portable, editable conversation artifacts** (Markdown) and **reliable streaming UX** across diverse model providers. The retry button (#1208) and provider limit increase (#1212) also reflect demand for **production-grade robustness** in multi-provider workflows.

---

## 5. Bugs & Stability

| Severity | Issue / PR | Status | Notes |
|----------|------------|--------|-------|
| **Medium** | [#1206](https://github.com/netease-youdao/LobsterAI/issues/1206) — kimi2.5 duplicate progress toasts | Closed (stale), **no fix PR** | Reproducible on v2026.3.30; model-specific. Root cause likely in streaming chunk deduplication or provider adapter. |
| **Medium** | [#1209](https://github.com/netease-youdao/LobsterAI/pull/1209) — Chrome 130+ flag collision | **Fixed & merged** | External flag injection (`--disable-blink-features=AutomationControlled`) broke web-search; fix strips unsupported flag at launch. |
| **Low** | [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) — Silent session rename failure | **Fixed & merged** | UX bug: no feedback, input closed. Fix adds toast + keeps input open. |
| **Low** | [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) — OpenClaw provider lost on slashed model ID | **Open** | Data-loss risk: provider prefix dropped during session patch persistence. Affects custom provider routing. |

**Stability takeaway:** Two user-visible bugs resolved (#1205, #1209), one provider-persistence bug pending (#2452), one model-specific streaming bug unaddressed (#1206).

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Markdown export for sessions** | [#1213](https://github.com/netease-youdao/LobsterAI/issues/1213) + [#1214](https://github.com/netease-youdao/LobsterAI/pull/1214) | **Delivered** (merged) |
| **Manual retry for transient errors** | [#1208](https://github.com/netease-youdao/LobsterAI/pull/1208) | **Delivered** (merged) |
| **Increase custom provider limit** | [#1212](https://github.com/netease-youdao/LobsterAI/pull/1212) | **Delivered** (merged) — 10 → 20 |
| **Fix provider persistence for slashed model IDs** | [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) | **High** — open PR, clear fix, affects multi-provider users |
| **kimi2.5 streaming deduplication** | [#1206](https://github.com/netease-youdao/LobsterAI/issues/1206) | **Medium** — stale-closed, but reproducible; may resurface |

**Roadmap signal:** The project is **expanding multi-provider ergonomics** (limit increase, provider preservation) and **hardening session UX** (retry, export, rename feedback). Expect continued work on provider-agnostic session fidelity.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Conversation portability** | #1213: "Only image export; manual copy/paste tedious; images not editable/searchable" | 😞 Frustrated → 😊 Resolved by #1214 |
| **Silent failures** | #1205: Rename fails with no toast, input closes | 😞 Annoyed → 😊 Fixed |
| **Transient error recovery** | #1208: Must re-type message after 429/network error | 😞 Tedious → 😊 Retry button added |
| **Model-specific streaming glitches** | #1206: kimi2.5 repeats action toasts; workaround = switch model | 😕 Workaround-only, no fix |
| **Custom provider scaling** | #1212: 10-provider cap blocks workflow | 😕 Constrained → 😊 Limit doubled |

**Overall:** Users are pushing LobsterAI into **daily-driver, multi-provider, knowledge-work workflows** — they need reliability (retries, error toasts), data ownership (Markdown export), and scale (20+ providers). The team is responding well to these signals.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [PR #2452](https://github.com/netease-youdao/LobsterAI/pull/2452) — *Preserve provider for slashed model IDs* | Open since 2026-08-07 (16 days) | **Data integrity bug**: provider prefix lost on session restore for models like `deepseek-ai/DeepSeek-V4-Flash`. Breaks custom provider routing. Clear fix, zero comments — **needs review/merge**. |
| [Issue #1206](https://github.com/netease-youdao/LobsterAI/issues/1206) — *kimi2.5 duplicate progress* | Created 2026-04-01, closed stale 2026-08-22 | **Reproducible streaming bug** on a popular model. Stale-closed without fix; will likely be reopened. Assign to provider-adapter owner. |
| [Issue #1213](https://github.com/netease-youdao/LobsterAI/issues/1213) — *Markdown export* | Created 2026-04-01, closed stale 2026-08-22 | **Resolved by #1214**, but issue closed as stale instead of "closed by PR". Hygiene: re-link or re-close properly. |

**Recommendation:** Prioritize **#2452 review** (blocks correct provider resolution), then triage **#1206** for a proper fix or upstream report to Moonshot/kimi.

---

*Digest generated from GitHub data as of 2026-08-23 00:00 UTC. All links point to netease-youdao/LobsterAI.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-23

## 1. Today's Overview
Moltis showed focused maintenance activity over the last 24 hours with **1 issue closed** and **3 open PRs** addressing integration stability, schema compliance, and browser automation compatibility. No new releases were published. The closed issue (#1230) introduces a security-hardening feature for hook error handling, while the open PRs target OpenAI tool-schema conformance, MCP client lifecycle resilience, and Browserless v2 support. Overall, the project is in a **steady maintenance and integration-hardening phase** with no critical regressions reported today.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
| PR | Status | Area | Summary |
|----|--------|------|---------|
| [#1230](https://github.com/moltis-org/moltis/issues/1230) | **Closed** | Security / Hooks | Added an **opt-in fail-closed error policy** for modifying security hooks (`BeforeToolCall`, etc.). Previously, runtime hook failures (timeouts, crashes) degraded to *continue* execution; now integrators can enforce *block-on-failure* for security boundaries. |
| [#1232](https://github.com/moltis-org/moltis/pull/1232) | Open | Tools / OpenAI Compatibility | Makes object schemas **OpenAI-strict compliant** by adding `additionalProperties: false` and explicit field declarations for cron/webhook patches and MCP env-vars. Prevents Codex from sending `null`/empty values. |
| [#1231](https://github.com/moltis-org/moltis/pull/1231) | Open | MCP / Stability | Fixes **stale MCP client references** after server restart. Tool bridges now resolve the current client per-turn instead of capturing it at registry sync, eliminating dispatches through closed connections. |
| [#1229](https://github.com/moltis-org/moltis/pull/1229) | Open | Browser / Browserless | Adds **Browserless v2 container-protocol support** (Base64 `launch` query, `TIMEOUT`/`CONCURRENT` env) while keeping v1 as default. No breaking changes to public APIs. |

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#1230](https://github.com/moltis-org/moltis/issues/1230) (1 comment, 0 👍) | **Closed after discussion** | **Security boundary hardening** — users running Moltis as a policy enforcement layer need *fail-closed* semantics so that hook infrastructure failures (OOM, network partition, timeout) cannot silently bypass `Block` decisions. The opt-in design balances safety with backward compatibility. |

*No other items accumulated comments or reactions in the last 24 h.*

## 5. Bugs & Stability
| Severity | Item | Description | Fix PR |
|----------|------|-------------|--------|
| **Medium** | [#1231](https://github.com/moltis-org/moltis/pull/1231) | MCP tool bridges held stale client references after server restart, causing dispatches to closed connections until next registry rebuild. | **PR open** — resolves client per-turn. |
| **Low** | [#1232](https://github.com/moltis-org/moltis/pull/1232) | OpenAI strict schema validation rejected tool calls with unspecified `additionalProperties`, forcing Codex to send `null`/empty payloads. | **PR open** — declares explicit schemas + `additionalProperties: false`. |
| **Low** | [#1229](https://github.com/moltis-org/moltis/pull/1229) | Browserless v2 containers not supported; users pinned to v1 images. | **PR open** — adds v2 protocol support, v1 remains default. |

*No crashes, data-loss, or regression reports filed today.*

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Fail-closed hook policy** (opt-in) | [#1230](https://github.com/moltis-org/moltis/issues/1230) ✅ *Implemented & closed* | **High** — already merged; will appear in next release. |
| **OpenAI strict schema compliance** | [#1232](https://github.com/moltis-org/moltis/pull/1232) | **High** — blocked Codex integration; small, focused fix. |
| **MCP client resilience on restart** | [#1231](https://github.com/moltis-org/moltis/pull/1231) | **High** — affects multi-turn stability; straightforward fix. |
| **Browserless v2 parity** | [#1229](https://github.com/moltis-org/moltis/pull/1229) | **Medium** — backward-compatible enhancement; may wait for v2 adoption. |

## 7. User Feedback Summary
- **Security-conscious integrators** (issue #1230) explicitly requested *fail-closed* hook semantics to meet compliance requirements where *any* hook failure must deny the action. The maintainers delivered an **opt-in** flag, preserving existing *fail-open* default for non-security workloads.
- **Codex/OpenAI users** (PR #1232) encountered silent schema rejections resulting in empty tool arguments — a **developer-experience friction** rather than a hard failure.
- **MCP-heavy workflows** (PR #1231) experienced **intermittent tool failures** after server restarts, only resolved by starting a new chat turn.
- **Browser automation users** (PR #1229) are **blocked from Browserless v2 features** (resource limits, new launch flags) but not from core functionality.

Overall sentiment: **constructive, integration-focused** — users are hardening production deployments rather than reporting core usability gaps.

## 8. Backlog Watch
| Item | Age | Why It Needs Attention |
|------|-----|------------------------|
| *(No items > 24 h in this dataset)* | — | The three open PRs (#1232, #1231, #1229) are **fresh (created 2026-08-22)**, have **zero review comments**, and address **clear, scoped fixes**. They should be reviewed/merged promptly to avoid staleness. |
| *Historical note* | — | If older PRs/issues exist beyond this 24 h window, they are **not captured in today’s data** and should be reviewed separately. |

---
*Generated from GitHub data (issues/PRs updated 2026-08-22 → 2026-08-23). Links point to live GitHub items.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-23

## 1. Today's Overview
CoPaw (QwenPaw) shows **moderate community activity** with 7 issues and 4 pull requests updated in the last 24 hours. No releases were published. The issue queue is dominated by **bug reports** (4/7) covering encoding, rendering, media handling, and tool-name corruption — signaling stability pain points in the 2.1.x line. All four open PRs are from first-time contributors and remain under review, indicating a **healthy but backlogged contribution pipeline**. The closed issue (#7043) addresses a long-standing Windows UTF-8 encoding request, now resolved.

## 2. Releases
**No new releases** in the last 24 hours. The latest stable version remains **2.1.0** (referenced in #7212, #7213).

## 3. Project Progress
**No PRs merged or closed today.** All 4 active PRs are in review:
- [#7214](https://github.com/agentscope-ai/QwenPaw/pull/7214) — Docs: add Access Policy as 5th security layer in README (first-time contributor)
- [#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054) — Feat: Chrome remote bridge endpoint for LAN browsers (under review, 8 days old)
- [#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050) — Feat: per-cron-job model override picker (8 days old)
- [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) — Fix: show custom profile markdown files (16 days old, oldest open PR)

**Maintainer attention needed** on the three feature PRs (#7054, #7050, #6808) which have been open 8–16 days without merge.

## 4. Community Hot Topics
| Issue/PR | Type | Activity | Core Need |
|----------|------|----------|-----------|
| [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) | Enhancement | 2 comments, 1 👍 | **Default collapse for reasoning traces** — users want Hermés-style toggle to reduce visual noise during routine monitoring |
| [#7216](https://github.com/agentscope-ai/QwenPaw/issues/7216) | Bug | 1 comment | **Tool name corruption** (`execute_shell_command` → `exe|ute_shell_command`) causing `ToolNotFoundError` — intermittent LLM output corruption |
| [#7215](https://github.com/agentscope-ai/QwenPaw/issues/7215) | Bug | 1 comment | **OpenRouter/OpenCode models not rendering in GUI** — backend integration works but frontend model list incomplete |
| [#7212](https://github.com/agentscope-ai/QwenPaw/issues/7212) | Bug | 1 comment | **Image dimension limit crashes** instead of graceful degradation — 2MB cap respected but pixel limits unchecked |

**Pattern:** Users are hitting **frontend/backend sync gaps** (model display, media validation) and **output quality issues** (reasoning verbosity, empty lines, tool corruption).

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#7216](https://github.com/agentscope-ai/QwenPaw/issues/7216) | Tool name character corruption (`l`→`|`) breaks tool calling — silent data corruption in LLM→tool pipeline | No |
| **High** | [#7212](https://github.com/agentscope-ai/QwenPaw/issues/7212) | Oversized-image pixel dimensions crash request with `MODEL_EXECUTION_ERROR` — no fallback/resize | No |
| **Medium** | [#7213](https://github.com/agentscope-ai/QwenPaw/issues/7213) | Persistent meaningless blank lines in session output — degrades readability | No |
| **Medium** | [#7215](https://github.com/agentscope-ai/QwenPaw/issues/7215) | OpenRouter/OpenCode models missing from GUI model selector | No |
| **Low** | [#7043](https://github.com/agentscope-ai/QwenPaw/issues/7043) | **CLOSED** — Windows UTF-8 (`chcp 65001`) launch option request | Implied fixed |

**Critical gap:** Zero bug-fix PRs open today. All 4 bugs reported in last 24h lack associated fixes.

## 6. Feature Requests & Roadmap Signals
| Request | Issue | Likelihood for Next Version |
|---------|-------|----------------------------|
| **Collapsible reasoning traces** (default off) | [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) | High — UX polish, low complexity, 1 👍 |
| **Per-provider media caps** (image/video/audio separate) | [#7201](https://github.com/agentscope-ai/QwenPaw/issues/7201) | Medium — backend config change, UI exposure needed |
| **Per-cron-job model override** | [#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050) | High — PR exists, backend contract ready, UI only |
| **Chrome LAN bridge support** | [#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054) | Medium — PR exists, expands deployment topology |
| **Custom profile markdown files** | [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) | High — PR exists, removes hardcoded filter |

**Prediction:** Next patch (2.1.1) will likely include #7050, #6808, and #7196. #7201 and #7054 may slip to 2.2.0.

## 7. User Feedback Summary
**Pain points (from issues):**
- **Visual overload:** Reasoning traces always expanded (#7196), blank lines clutter history (#7213)
- **Silent failures:** Tool name corruption (#7216), image dimension crashes (#7212) — no warnings, hard to debug
- **Incomplete integrations:** OpenRouter/OpenCode models work in backend but invisible in UI (#7215)
- **Windows encoding friction:** Resolved in #7043 but highlights platform-specific gaps

**Use cases revealed:**
- Production monitoring (need clean UI, #7196)
- Multi-provider media workflows (need granular caps, #7201)
- Scheduled agents with model specialization (cron model override, #7050)
- Remote browser automation (LAN Chrome bridge, #7054)

**Sentiment:** Frustrated on stability (#7216, #7212), constructive on UX (#7196, #7201). No praise/compliments in recent issues.

## 8. Backlog Watch
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054) | 8 days | Open, under review | Enables multi-machine Chrome automation — key for team/enterprise use |
| [#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050) | 8 days | Open | Unblocks per-cron model selection — high-value for scheduled agents |
| [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) | 16 days | Open | Fixes persona customization — simple fix, long wait |
| [#7201](https://github.com/agentscope-ai/QwenPaw/issues/7201) | 2 days | Open, no PR | Media cap granularity — architectural, needs design decision |
| [#7216](https://github.com/agentscope-ai/QwenPaw/issues/7216) | 1 day | Open, no PR | **Tool corruption bug** — highest severity, no fix in sight |

**Recommendation:** Maintainers should prioritize merging the three stale feature PRs (#6808, #7050, #7054) and triage the two critical bugs (#7216, #7212) for immediate fixes in a 2.1.1 patch.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-23

## 1. Today's Overview
ZeroClaw shows **high architectural churn** with 13 issues and 50 PRs updated in 24 hours. The project is deep in a **multi-RFC refactoring cycle** targeting runtime-owned conversation sessions, memory/storage boundaries, plugin architecture (compile-time → runtime WASM), and realtime voice channels. No releases today; velocity is directed at foundational rewrites rather than user-facing features. 7 PRs merged/closed — mostly bug fixes and one SOP status-view MVP — while 43 PRs remain open, many stacked in dependency chains. Risk labels are predominantly `high`, signaling core-surface changes.

---

## 2. Releases
**No new releases today.** The project remains on the `master` branch with continuous integration; version tags are not part of today's activity.

---

## 3. Project Progress — Merged / Closed PRs (7)

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#9291](https://github.com/zeroclaw-labs/zeroclaw/pull/9291) | `fix(cli): detect installed AppImage and use a working desktop download URL` | CLI, Desktop | Fixes `zeroclaw desktop` false-negative on Linux AppImage installs; updates dead download URL. Closes #9202. |
| [#9694](https://github.com/zeroclaw-labs/zeroclaw/pull/9694) | `feat(zerocode): expose the SOP pane as a read-only status view` | Zerocode, SOP | MVP for #9682: read-only SOP list with live run-status icons (no controls). |
| [#9960](https://github.com/zeroclaw-labs/zeroclaw/pull/9960) | `fix(quickstart): reject duplicate enabled webhook ports` | Quickstart, Config | Prevents multiple webhook aliases binding to default port 8090. Closes #9759. |
| [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) | `fix(config): roll back auto-created map aliases when config set fails` | Config, Runtime | Transactional rollback of phantom map aliases on failed writes. Closes #9237. |
| [#6685](https://github.com/zeroclaw-labs/zeroclaw/pull/6685) | SOP HTTP fan-in documented but not wired | Gateway, SOP, Docs | Closed — documentation caught up or feature deferred; no code PR linked. |
| [#9759](https://github.com/zeroclaw-labs/zeroclaw/issues/9759) | Quickstart duplicate webhook port bug | Config, Quickstart | Closed via #9960. |
| [#9237](https://github.com/zeroclaw-labs/zeroclaw/issues/9237) | Phantom map aliases on failed config updates | Config, Runtime | Closed via #9281. |

**Net progress**: Three user-visible bugs fixed (desktop detection, webhook port collision, config rollback) + SOP read-only status pane shipped. Core RFC work remains in open PR stacks.

---

## 4. Community Hot Topics — Most Active Issues (by comments)

| Issue | Comments | Core Tension |
|-------|----------|--------------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) **RFC: Runtime-owned conversation sessions & transport surface adapters** | 24 | Ownership boundary between runtime, gateway, and channels; `InboundAction` admission semantics; high-risk architectural pivot. |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) **RFC: Decouple memory lifecycle policy from storage backends** | 16 | Separating `Memory` trait (storage ops) from consolidation/governance policy; affects every gateway/channel/backend. |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) **RFC: Realtime speech-to-speech channel for Gemini Live** | 16 | Broker-contract rewrite (v2); feature-gated voice channel; first realtime model integration. |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) **RFC: Verbatim channel send over gateway without agent turn** | 4 | Gateway has 47 `/api/*` paths but no raw passthrough; security & architecture review needed. |
| [#9682](https://github.com/zeroclaw-labs/zeroclaw/issues/9682) **Tracker: zerocode SOP pane MVP (status visibility)** | 4 | Rescoped to read-only; controls deferred to #9686/#9685. Closed via #9694. |

**Underlying needs**: Contributors are aligning on **who owns what** — sessions, memory, transport, and tool/channel loading. The RFC cluster (#9487, #6850, #8780, #10050) represents a coordinated re-architecture of the runtime/gateway/channel triangle.

---

## 5. Bugs & Stability — Reported / Fixed Today

| Severity | Issue / PR | Status | Notes |
|----------|------------|--------|-------|
| **High** | [#9476](https://github.com/zeroclaw-labs/zeroclaw/pull/9476) `feat(sop): authenticated operator cancellation for running SOP jobs` | Open (needs-author-action) | Adds `POST /api/sops/{name}/runs/{run_id}/cancel` + dashboard Stop; `CancelRequested` durable state. |
| **High** | [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) `fix(anthropic): classify incomplete terminal responses` | Open (needs-author-action) | Prevents silent truncation; requires `message_stop` + valid content-block lifecycle. |
| **High** | [#9744](https://github.com/zeroclaw-labs/zeroclaw/pull/9744) `refactor(gateway): require authenticated webhook ingress before agent dispatch` | Open | WhatsApp/Linq/Nextcloud Talk webhooks now fail closed on missing credentials. |
| **Medium** | [#9959](https://github.com/zeroclaw-labs/zeroclaw/pull/9959) `fix(memory): reject Qdrant in builder-only factory without storage config` | Open | Builder factory misrouted Qdrant → Markdown handle silently. |
| **Medium** | [#9938](https://github.com/zeroclaw-labs/zeroclaw/pull/9938) `fix(cost): preserve full provider ref so multi-alias pricing resolves` | Open | `<type>.<alias>` preserved instead of bare provider type. |
| **Medium** | [#9957](https://github.com/zeroclaw-labs/zeroclaw/pull/9957) `fix(sop): record why a failed run failed` | Open | `SopRun::failure_reason` now persisted. |
| **Medium** | [#10038](https://github.com/zeroclaw-labs/zeroclaw/pull/10038) `fix(gateway/cron): reject invalid session_target` | Open | Typos like `shared`/`mian` previously accepted silently. |
| **Low** | [#10264](https://github.com/zeroclaw-labs/zeroclaw/issues/10264) Quickstart CLI validation tests locale-dependent | Open (new today) | Tests fail under non-English Fluent locales. |

**Fixed today (merged)**: AppImage detection (#9291), webhook port collision (#9960), config alias rollback (#9281), SOP read-only pane (#9694).

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Runtime-owned sessions + transport adapters** | RFC #9487 (24 comments, stacked PRs #10265→#10263→…) | **High** — multi-PR stack in review; supersedes prior session work. |
| **Memory lifecycle / storage backend decoupling** | RFC #6850 (16 comments, open since May) | **Medium** — foundational but no PR stack visible yet. |
| **Realtime Gemini Live voice channel** | RFC #8780 (16 comments, v2 broker contract) | **High** — feature-gated, first realtime integration; pairs with #7943. |
| **Backend-agnostic `voicehost` WS client** | #7943 (in-progress, CrispASR/Wyoming) | **High** — complementary to #8780; keeps ZeroClaw as brain. |
| **Runtime WASM plugins for channels/tools** | #8850 (accepted, in-progress) | **High** — shrinks binary; enables plugin marketplace (`zeroclaw-plugins`). |
| **Verbatim gateway passthrough** | RFC #10050 (new, 4 comments) | **Low-Medium** — security review gate; may wait for #9487 boundary. |
| **ZeroRouter preset + device-flow login** | PR #9645 (XL, needs-author-action) | **Medium** — first-class compat provider; large diff. |
| **SOP control plane → 5/5 capabilities** | Tracker #8288 (13 capabilities) | **Medium** — MVP status view done (#9694); cancellation (#9476) in review. |
| **Principal-owned sessions + predicated storage deletes** | PR #10265 (stacked on #10263, stage 4 of #8289) | **High** — security-critical; deep in review stack. |

**Prediction**: Next version will likely ship **runtime-owned sessions**, **WASM plugin loading**, **Gemini Live voice channel**, and **authenticated webhook ingress** — all high-risk, high-value core changes.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **`zeroclaw desktop` broken on Linux** | #9202: "AppImage not detected; dead download URL" | 😡 Frustrated — basic install verification fails. |
| **Quickstart allows invalid config (duplicate webhook ports)** | #9759: "one listener could fail only after daemon restart" | 😟 Degraded onboarding. |
| **Config writes leave phantom aliases on failure** | #9237: "never rolls back when subsequent `set_prop` fails" | 😟 Silent corruption risk. |
| **SOP visibility without controls** | #9682: "MVP is status visibility only… controls deferred" | 😐 Accepted but incomplete. |
| **Anthropic responses silently truncated** | #9447: "incomplete terminal responses classified as successful" | 😡 Data-loss risk. |
| **Locale-dependent test failures** | #10264 (filed today): "tests fail merely because a valid non-English locale is active" | 😐 CI flakiness for non-US contributors. |

**Overall**: Users hit **install/onboarding friction** (desktop, quickstart) and **silent correctness bugs** (config, Anthropic, webhook ports). The SOP MVP delivers visibility but defers control — a deliberate trade-off.

---

## 8. Backlog Watch — Stalled / Needs Maintainer Attention

| Item | Age | Blockers | Why It Matters |
|------|-----|----------|----------------|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) RFC: Memory lifecycle / storage decoupling | 93 days | No PR stack; needs architectural sign-off | Blocks clean plugin/storage boundaries; affects all gateways. |
| [#9013](https://github.com/zeroclaw-labs/zeroclaw/pull/9013) `refactor(config)!: move TodoWrite display config into zerocode` | 42 days | Needs-author-action; XL diff | Daemon schema cleanup; separates display from control plane. |
| [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) `fix(security): default command audit logging to disabled` | 28 days | Needs-maintainer-review; security-honesty direction | Ships insecure default if merged wrong; production audit wiring deferred. |
| [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) `feat(cli): egress grant ceremony for plugin install` | 23 days | Needs-maintainer-review; XL; stacked on #9582 | Plugin security UX gate; part of WASM plugin rollout. |
| [#9645](https://github.com/zeroclaw-labs/zeroclaw/pull/9645) `feat(providers): ZeroRouter preset + device-flow login` | 22 days | Needs-author-action; XL | First self-hosted LLM gateway as compat provider; large surface. |
| [#9743](https://github.com/zeroclaw-labs/zeroclaw/pull/9743) `fix(providers): wire modalities parser into capabilities_for_model` | 19 days | Needs-author-action; XL | Model capability negotiation; affects all provider routers. |
| [#10265](https://github.com/zeroclaw-labs/zeroclaw/pull/10265) `feat(security): principal-owned sessions with predicated storage deletes` | 0 days (today) | Stacked on #10263→#10259→#10255→#10248; 6 commits in scope | Core of RFC #7141 storage boundary; deep dependency chain. |

**Maintainer bandwidth alert**: 7 items tagged `needs-maintainer-review` or `needs-author-action` with `size:XL` or `risk:high`. The stacked PR chains (#10265, #9584, #9645) require sequential review — risk of bottleneck.

---

## Health Indicators

| Metric | Signal |
|--------|--------|
| **Issue/PR velocity** | 63 updates/24h — very high |
| **RFC-to-PR conversion** | 4 major RFCs → multiple stacked PRs each — strong follow-through |
| **Bug fix latency** | 3/5 critical bugs fixed same-day (desktop, webhook, config) — good |
| **Test reliability** | New locale-dependent flake (#10264) — needs guardrails |
| **Architectural debt paydown** | Active: sessions, memory, plugins, voice, security — strategic |
| **Release cadence** | No tags recently; continuous `master` — may need stabilization window |

---

*Generated from GitHub API data for zeroclaw-labs/zeroclaw on 2026-08-23. All links point to live GitHub items.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*