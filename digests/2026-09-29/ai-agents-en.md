# OpenClaw Ecosystem Digest 2026-09-29

> Issues: 218 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-29 05:25 UTC

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

# OpenClaw Project Digest — 2026-09-29

---

## 1. Today's Overview

OpenClaw exhibits **very high velocity** with 718 total GitHub items updated in 24 hours (218 issues, 500 PRs), indicating an active stabilization and release-preparation phase. The project is between versions **2026.9.6** (current latest) and **2026.9.7** (tracked in #157531), with an **extended-stable LTS release v2026.8.33** published. Critical P0 issues dominate: SQLite WAL unbounded growth on Windows (#143524), gateway event-loop starvation at scale (#149538), update failures across platforms, and subagent settlement loops (#159612). The PR pipeline shows heavy "deslop" refactoring (code cleanup/consolidation) across gateway, agents, cron, ingress, and channel plugins, plus test hardening and Windows/macOS CI fixes.

---

## 2. Releases

### v2026.8.33 — Extended-Stable (LTS) Release
- **Type**: Gateway-only `extended-stable` release (LTS equivalent)
- **Base**: OpenClaw from end of August 2026
- **Contents**: Critical security updates, reliability & performance fixes, new model support
- **Note**: Current latest version is **2026.9.6** (eb377ac); 2026.9.7 preparation tracked in #157531 with 18/21 P1 candidates identified
- **Link**: [Release v2026.8.33](https://github.com/openclaw/openclaw/releases/tag/v2026.8.33)

---

## 3. Project Progress (Merged/Closed PRs — 175 in 24h)

| PR | Area | Summary |
|----|------|---------|
| [#150464](https://github.com/openclaw/openclaw/pull/150464) | Web UI | Wrap long model labels in picker dropdown (closes #150085) |
| [#160869](https://github.com/openclaw/openclaw/pull/160869) | Gateway/CLI | Clarify errors during gateway restarts/shutdowns — plain-language messages |
| [#160965](https://github.com/openclaw/openclaw/pull/160965) | Webhooks | Deslop route/limiter setup (deduplicate canonicalization, limiter construction) |
| [#159605](https://github.com/openclaw/openclaw/pull/159605) | (referenced) | Merged — related to fs-safe watcher consolidation (#159226) |
| [#156667](https://github.com/openclaw/openclaw/pull/156667) | Cron/Memory-core | Remove orphaned dreaming jobs left by unloaded memory-core sidecar (fixes #156666) |
| [#143647](https://github.com/openclaw/openclaw/pull/143647) | Models/Security | Purge plugin catalog credentials on logout (fixes #142421) — security-review required |
| [#143911](https://github.com/openclaw/openclaw/pull/143911) | Active Memory | Skip recall for inter-session deliveries (fixes #143821) |

**Pattern**: Merged PRs focus on **UI polish, error clarity, security hygiene (credential purge), and subsystem cleanup** (cron, memory-core, webhooks). Many "deslop" refactors are in review pipeline.

---

## 4. Community Hot Topics (Most Discussed Issues/PRs)

| Item | Comments | Priority | Core Issue |
|------|----------|----------|------------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | 87 | P0 🦪 | **SQLite WAL grows 1.4–2.8 GB in days on Windows** — `wal_autocheckpoint=1000` ignored; blocks gateway startup |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | 21 | P0 🦐 | **Gateway reaches ready but never serves** — event loop starved, RSS climbs until OOM (632-agent fleet) |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | 20 | P2 🦞 | Embedded prompt cache breaks across room-event/policy/Responses boundaries — model-visible tool inventory changes |
| [#139710](https://github.com/openclaw/openclaw/issues/139710) | 17 | P1 🦞 | Mid-turn plugin-generation supersede kills system-agent turn + planner fallback; misleading "unreachable inference" error |
| [#157531](https://github.com/openclaw/openclaw/issues/157531) | 15 | P0 🌊 | **2026.9.7 Fixes Tracker** — 18/21 P1 candidates identified (privacy, update reliability, etc.) |
| [#156571](https://github.com/openclaw/openclaw/issues/156571) | 14 | P0 🦪 | Model-catalog worker leaks `openclaw-plugin-build-*` source captures in tmp (1–3 GB/min, fills disk) |
| [#127148](https://github.com/openclaw/openclaw/issues/127148) | 12 | P1 🦞 | `sessions.compact` acquires second app-server → active-writer conflict on Codex sessions |
| [#146004](https://github.com/openclaw/openclaw/issues/146004) | 10 | P2 🦪 | Subagent completion triggers unwanted channel-less dashboard heartbeat turn (regression 2026.9.3) |

**Underlying needs**:  
- **Windows reliability** (WAL, scheduled-task boot, update failures)  
- **Scale stability** (event-loop starvation, memory leaks at 600+ agents)  
- **Update/upgrade pipeline** (multiple `finalize:doctor`, `runtime-verification-failed`, `plugin-target-unavailable` failures across platforms)  
- **Subagent/session correctness** (settlement loops, duplicate turns, compact conflicts)

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **P0 — Crash/Startup Block** | [#143524](https://github.com/openclaw/openclaw/issues/143524) SQLite WAL unbounded growth (Windows) | Open | No |
| **P0 — Availability** | [#149538](https://github.com/openclaw/openclaw/issues/149538) Gateway event-loop starvation at scale | Open | No |
| **P0 — Update Failure** | [#145192](https://github.com/openclaw/openclaw/issues/145192) 9.2→9.4 managed update fails at candidate-Doctor (v1 handoff lease) | Open | No |
| **P0 — Update Failure** | [#147160](https://github.com/openclaw/openclaw/issues/147160) / [#148681](https://github.com/openclaw/openclaw/issues/148681) Update failure: finalize:doctor (2026.9.4) — macOS & Linux | Open | No |
| **P0 — Data Loss Risk** | [#156571](https://github.com/openclaw/openclaw/issues/156571) Model-catalog worker tmp leak (1–3 GB/min) | Open | No |
| **P0 — Correctness** | [#159612](https://github.com/openclaw/openclaw/issues/159612) Subagent completion settlement retries forever ("owner changed before settlement") | Open | No |
| **P0 — Startup** | [#158239](https://github.com/openclaw/openclaw/issues/158239) Gateway fails to start on kernel < 5.6 (JS fs-safe fallback) | Open | No |
| **P0 — Setup** | [#157816](https://github.com/openclaw/openclaw/issues/157816) `openclaw` setup turn fails after update: "prepared model runtime plugin generation was superseded" | Open | No |
| **P1 — Correctness** | [#139710](https://github.com/openclaw/openclaw/issues/139710) Mid-turn plugin supersede kills system-agent + planner | Open | No |
| **P1 — Correctness** | [#127148](https://github.com/openclaw/openclaw/issues/127148) `sessions.compact` active-writer conflict (Codex) | Open | No |
| **P1 — Crash** | [#147264](https://github.com/openclaw/openclaw/issues/147264) System-expert nested inference deadlock at `maxConcurrent=1` | Open | No |
| **P1 — UX** | [#156925](https://github.com/openclaw/openclaw/issues/156925) Webchat renders assistant replies twice on tool-call turns | Open | No |
| **P1 — Data** | [#155396](https://github.com/openclaw/openclaw/issues/155396) Codex tool turns fail closed on `provenance_rejected` during final-answer recovery | Open | No |
| **P2 — Regression** | [#144922](https://github.com/openclaw/openclaw/issues/144922) Agent sessions aborted at ~82s by watchdog → duplicate side effects | Open | No |
| **P2 — Startup** | [#149942](https://github.com/openclaw/openclaw/issues/149942) Telegram provider blocks event loop on synchronous thread-binding reads | Open | No |
| **P2 — Perf** | [#160522](https://github.com/openclaw/openclaw/issues/160522) Prepared-model-catalog worker at 1.15 GB despite `maxOldGenerationSizeMb: 512` | Open | No |
| **P2 — Windows** | [#140161](https://github.com/openclaw/openclaw/issues/140161) Gateway cold boot in scheduled-task mode hangs 5–7 min or exits 0 | Open | [#123774](https://github.com/openclaw/openclaw/pull/123774) (open) |
| **P2 — Cron** | [#159339](https://github.com/openclaw/openclaw/issues/159339) `DataCloneError` blocks all 21 cron jobs after 9.6 upgrade | Open | No |
| **P2 — Resource** | [#157630](https://github.com/openclaw/openclaw/issues/157630) Explicit `--max-old-space-size` silently defeats worker `resourceLimits` | Open | No |

**Closed but notable**:  
- [#113323](https://github.com/openclaw/openclaw/issues/113323) LLM idle timeout aborts during reasoning-token streaming (local reasoning model) — **Closed**  
- [#90945](https://github.com/openclaw/openclaw/issues/90945) `channel_ingress_events` stale claims never recovered (Telegram DM deadlocks) — **Closed**  
- [#81089](https://github.com/openclaw/openclaw/issues/81089) `ENOTSUP` on session lock via `fs.link` (SMB/NFS/virtiofs) — **Closed**  
- [#64036](https://github.com/openclaw/openclaw/issues/64036) `chunkTextByBreakResolver` trailing whitespace — **Closed**  
- [#49708](https://github.com/openclaw/openclaw/issues/49708) Session paths resolve through symlinks → false doctor orphans — **Closed**

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for 2026.9.x |
|-------|--------|-------------------------|
| [#122403](https://github.com/openclaw/openclaw/issues/122403) Show local vs cloud provenance per model in Control UI picker | **High** — uses existing data, low complexity, P2 stale but 6 comments | Medium (UI-only, but needs product decision) |
| [#138245](https://github.com/openclaw/openclaw/issues/138245) Output guards: catch pseudo tool-calls + stream repetition/length guard | **High** — 3 real incidents, security-adjacent, P2 | Medium (guardrails align with stability focus) |
| [#124306](https://github.com/openclaw/openclaw/issues/124306) Exec approval card: annotate mount-point targets (not just syntactic risks) | **Medium** — safety UX, P2, data-loss tag | Low (needs product decision) |
| [#120474](https://github.com/openclaw/openclaw/issues/120474) Recover once from pre-execution tool argument validation failures | **Medium** — secret-safe retry contract, P3 | Low (needs design) |
| [#142617](https://github.com/openclaw/openclaw/issues/142617) macOS app: link-handling preference (sidebar vs system browser) | **Low** — UX polish, P3 | Low |
| [#158068](https://github.com/openclaw/openclaw/issues/158068) Adaptive test-time compute for Swarm populations | **Exploratory** — follow-up to #155442, P2 off-meta | Very Low (post-9.7) |
| [#41272](https://github.com/openclaw/openclaw/issues/41272) Cron UI: accept `timeoutSeconds: 0` (no-timeout mode) — **Closed** | Done | — |

**Prediction**: Next patch (9.7) will prioritize **update reliability, Windows stability, subagent correctness, and memory leaks**. Features like provenance badges (#122403) and output guards (#138245) are strong candidates for 9.8+.

---

## 7. User Feedback Summary (Real Pain Points)

| Theme | Representative Issues | User Impact |
|-------|----------------------|-------------|
| **Update/Upgrade Failures** | [#145192](https://github.com/openclaw/openclaw/issues/145192), [#147160](https://github.com/openclaw/openclaw/issues/147160), [#148681](https://github.com/openclaw/openclaw/issues/148681), [#148545](https://github.com/openclaw/openclaw/issues/148545), [#147919](https://github.com/openclaw/openclaw/issues/147919), [#146347](https://github.com/openclaw/openclaw/issues/146347), [#155113](https://github.com/openclaw/openclaw/issues/155113), [#159909](https://github.com/openclaw/openclaw/issues/159909) | **High** — Multiple platforms (Win/macOS/Linux), various phases (doctor, runtime-verification, plugin-target, verifying, reconcile). Users blocked on managed updates. |
| **Windows-Specific Instability** | [#143524](https://github.com/openclaw/openclaw/issues/143524) (WAL), [#140161](https://github.com/openclaw/openclaw/issues/140161) (scheduled-task boot), [#14595

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-09-29 | **Scope:** 12 projects from community digests

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **bifurcated maturity**: a top tier of high-velocity, production-hardening projects (OpenClaw, NanoBot, NanoClaw, ZeroClaw, LobsterAI, CoPaw) contrasted with a middle tier of steady maintenance (IronClaw, NullClaw, Hermes Agent, ZeptoClaw) and a concerning tail of **effectively unmaintained** projects (PicoClaw). Security posture is a growing differentiator—ZeroClaw disclosed three S0 vulnerabilities in 48 hours, while PicoClaw closed a critical audit without public resolution. The dominant technical narrative is **gateway/container lifecycle hardening**, **update/upgrade reliability**, and **session-state correctness** at scale, reflecting a shift from feature expansion to operational maturity.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged (24h) | Latest Release | Health Score* |
|---------|--------------|-----------|--------------|----------------|---------------|
| **OpenClaw** | 218 | 500 | 175 | v2026.8.33 (LTS), 2026.9.6 current | 🟢 **High** — massive velocity, structured release track |
| **ZeroClaw** | 13 | 50 | ~12 | Pre-v0.9.0 (stabilization) | 🟡 **High-Risk/High-Velocity** — 3 S0 bugs, major refactor |
| **NanoBot** | 7 | 28 | 11 | v0.3.5 | 🟢 **High** — 39% same-day merge, critical bugs tracked |
| **NanoClaw** | 4 | 31 | 18 | v2.4.0 (c313d061) | 🟢 **High** — same-day critical fixes, CI stable |
| **LobsterAI** | 5 (stale) | 12 | 12 | release/2026.9.24 branch | 🟢 **High** — 100% PR merge rate, gateway hardening |
| **CoPaw/QwenPaw** | 8 | 20 | 7 | 2.2.1 stable, 2.2.2b4 main | 🟢 **High** — diverse contributors, enterprise signals |
| **Hermes Agent** | 10 | 50 | 1 | v0.21.5+3839 | 🟡 **Medium** — high PR churn, low throughput (1 merge) |
| **IronClaw** | 1 | 5 | 1 | None recent | 🟢 **Medium-High** — steady, automated CI, new contributors |
| **NullClaw** | 2 | 2 | 2 | v20260929 RC | 🟢 **Medium** — focused, responsive, low volume |
| **ZeptoClaw** | 2 | 1 | 0 | None recent | 🟢 **Medium** — maintainer-led, steady |
| **PicoClaw** | 5 | 10 | 0 | v0.3.1 | 🔴 **Critical** — zero maintainer merges, fork announced |
| **Moltis** | 0 | 0 | 0 | — | ⚪ **Inactive** — no 24h activity |

*Health Score: 🟢 Healthy velocity & throughput | 🟡 High velocity but throughput/regression risk | 🔴 Stalled maintainer capacity | ⚪ No data*

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale of operation**: 718 items/24h dwarfs all peers; only ZeroClaw (50 PRs) approaches comparable engineering investment
- **Release discipline**: Only project with formal LTS (v2026.8.33) and structured P1 tracker for next patch (#157531)
- **Windows/enterprise focus**: Explicit P0 tracking for scheduled-task boot, WAL growth, update failures across platforms
- **Subagent/session correctness**: Deep investment in settlement loops, compact conflicts, active-writer conflicts

**Technical Approach Differences:**
- **Gateway-centric architecture**: Event-loop starvation at 600+ agents reveals scaling ceiling peers haven't hit
- **"Deslop" refactoring culture**: Systematic code consolidation across gateway, agents, cron, ingress, channels
- **Model-catalog as first-class subsystem**: Credential purge on logout, worker tmp leaks, prepared-model inventory

**Community Size Comparison:**
- **Contributor breadth**: 12+ distinct authors in NanoBot's daily PRs vs OpenClaw's concentrated core team
- **Issue engagement**: OpenClaw's top issue (#143524) has 87 comments—highest in ecosystem; CoPaw's #7931 (7 days) shows sustained design discussion
- **Enterprise signals**: CoPaw (#8015 air-gapped marketplace), NanoClaw (HTTPS proxy, arm64 Iron Proxy), LobsterAI (document editing) show stronger enterprise adoption pulls than OpenClaw's core issues

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Gateway/Container Lifecycle Hardening** | OpenClaw, NanoClaw, LobsterAI, Hermes Agent, ZeroClaw | Atomic cutover (#3948, #2775), liveness probes (#3962), process-group cleanup (#3957), plugin load retries (#126749) |
| **Update/Upgrade Reliability** | OpenClaw, NanoClaw, LobsterAI, PicoClaw | Doctor phase failures (#145192, #147160), asset selection (#3399), rollback completeness (#3956), systemd/user-bus gaps (#3961) |
| **Session-State Correctness** | OpenClaw, Hermes Agent, ZeroClaw, CoPaw, ZeptoClaw | Subagent settlement loops (#159612), duplicate rows after compaction (#126021), principal scope leakage (#11198), oversized image session kill (#8009), tool output spill (#708) |
| **Windows/Platform Parity** | OpenClaw, NanoBot, NanoClaw, LobsterAI, PicoClaw | WAL growth (#143524), scheduled-task boot (#140161), Node.js detection (#1037), sandbox ACL propagation (#8018), updater arch mismatch (#3399) |
| **Security Boundary Enforcement** | ZeroClaw, NullClaw, LobsterAI, NanoBot, CoPaw | Principal scope (S0 #11198), protocol-relative URL bypass (#974), shell:openExternal validation (#1034), QQ replay deduplication (#8006), truncation bypass (#7871) |
| **Channel/Platform Adapter Reliability** | OpenClaw, NanoBot, Hermes Agent, ZeroClaw, CoPaw, IronClaw | Feishu/Slack/Telegram compaction leaks (#5903, #5956), WeCom proactive media (#11212), Telegram markdown (#8012), gateway duplicate warnings (#127395) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoClaw/ZeroClaw | NanoBot/CoPaw | LobsterAI | IronClaw/NullClaw | Hermes Agent | PicoClaw/ZeptoClaw |
|-----------|----------|-------------------|---------------|-----------|-------------------|--------------|---------------------|
| **Primary Focus** | Gateway scale, update pipeline, LTS | Gateway split, config schema, OIDC auth | TUI/UX polish, channel resilience, enterprise deployment | OpenClaw integration, document artifacts, security | WebUI v2, CLI observability, automated docs | Managed runtime, plugin resilience, desktop | Embedded/lightweight, tool-output handling |
| **Target User** | Power users, fleet operators, enterprise | Platform builders, self-hosters, security-conscious | Developers, terminal users, air-gapped teams | Knowledge workers, Office suite integration | Web-first users, wiki/documentation teams | Automation/Kanban users, desktop integrators | Resource-constrained, autonomous workflow seekers |
| **Architecture** | Monolithic gateway + sidecars | Split gateway/RPC, Schema V4 config | Modular skills/plugins, AgentScope backend | Electron + OpenClaw gateway + custom renderer | WebUI v2 + gateway, CI-driven knowledge graph | Python embedding, plugin platform, desktop | Single-binary, session-file spill, minimal deps |
| **Differentiator** | Scale debugging (600+ agents), LTS track | Authority recheck, RPC parity, OIDC milestone | Durable chat history, custom marketplaces, font scaling | Progress cards, PPT/Word/Excel editing, triple-startup fix | Focus restoration, effective config profile, daily failure taxonomy | CLI module resolution, reasoning leak, captionless images | Goal mode request, spill-to-disk, community fork |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapidly Iterating / Pre-Release Stabilization** | **ZeroClaw**, **OpenClaw**, **LobsterAI**, **NanoClaw** | 50-500 PRs/day, stacked PR chains, security regressions caught pre-release, release blockers tracked explicitly |
| **Steady Maintenance / Feature Polish** | **NanoBot**, **CoPaw**, **IronClaw**, **NullClaw** | 20-30 PRs/day, 30-50% same-day merge, new contributors merging, UX/accessibility focus |
| **Velocity/Throughput Mismatch** | **Hermes Agent** | 50 PR updates but 1 merge/day — review bottleneck, managed-runtime packaging friction |
| **Stalled / At Risk** | **PicoClaw** | 10 contributor PRs, 0 maintainer merges, security audit unresolved, active fork declared |
| **Inactive** | **Moltis** | No 24h activity |

**Key Insight**: The ecosystem splits between **platform projects** (OpenClaw, ZeroClaw, NanoClaw) investing in architectural refactors and **product projects** (NanoBot, CoPaw, LobsterAI, IronClaw) shipping user-facing polish. Hermes Agent sits uncomfortably between both.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Gateway split & RPC parity is the new standard** | ZeroClaw (P4-P6 lanes), NanoClaw (gateway as container role), OpenClaw (event-loop starvation at scale) | **High** — Monolithic gateways don't scale; invest in RPC contracts early |
| **Update/upgrade is the #1 reliability blocker** | OpenClaw (8+ P0 update issues), NanoClaw (same-day fixes for #3961, #3906), PicoClaw (updater arch bug) | **Critical** — Design for atomic cutover, liveness verification, and rollback from day one |
| **Session-state correctness > new features** | OpenClaw (subagent settlement), Hermes (duplicate rows), ZeroClaw (principal scope S0), CoPaw (oversized image kill), ZeptoClaw (tool output spill) | **High** — Users lose trust silently; invest in recovery, replay, and scope isolation |
| **Enterprise deployment drives architecture** | CoPaw (air-gapped marketplace #8015), NanoClaw (HTTPS proxy #3901, arm64 #3953), LobsterAI (document editing #2776), NanoBot (concurrent file locking #4798) | **High** — Self-hosting, proxy support, ACL safety, and plugin distribution are table stakes |
| **Security boundary enforcement is maturing** | ZeroClaw (3 S0 in 48h), LobsterAI (protocol validation #974, #1034), NullClaw (Eden AI gateway), CoPaw (truncation bypass #7871) | **Rising** — Adversarial design reviews (#11205) and principal-scoped tools are emerging best practices |
| **Windows is a first-class platform, not an afterthought** | OpenClaw (WAL, scheduled-task), NanoBot (sudo loop), NanoClaw (arm64 Iron Proxy), LobsterAI (Node.js detection), PicoClaw (updater arch) | **Medium** — Cross-platform CI and native packaging are differentiators |
| **Observability & failure taxonomy investment** | IronClaw (daily failure taxonomy #8116), ZeroClaw (authority recheck), OpenClaw (P1 tracker #157531) | **Medium** — Systematic classification beats ad-hoc debugging; build it into CI |

---

**Bottom Line for Decision-Makers**: The ecosystem is **consolidating around gateway-split architectures, Schema-driven config, and security-first session models**. Projects that treat update reliability, Windows parity, and principal-scoped authorization as **architectural requirements** (not bugs) will capture enterprise adoption. PicoClaw's fork signals community intolerance for maintainer absence—**governance sustainability** is now a competitive factor.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-29

## 1. Today's Overview
NanoBot shows **high velocity** with 28 PRs and 7 issues updated in the last 24 hours. The project is in active maintenance mode: 11 PRs were merged/closed today, mostly focused on TUI polish, provider resilience, channel reliability, and tooling correctness. No new release was cut. Open issues cluster around **sudo/session loops**, **Feishu/Slack/Telegram channel quirks**, **concurrent file-write safety**, and **long-session latency** — all high-impact for production users.

---

## 2. Releases
**No new releases today.** The latest published version remains v0.3.5 (per issue #5898). Several merged PRs (#5959, #5958, #1355, #1443) contain user-facing fixes that will likely roll into the next patch.

---

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary |
|----|------|---------|
| [#5959](https://github.com/HKUDS/nanobot/pull/5959) | **bug fix (TUI)** | Fixed status animation freeze when terminal theme detection fails (OSC 10/11 unanswered). Uses terminal-default colors + moving bold band. |
| [#5958](https://github.com/HKUDS/nanobot/pull/5958) | **bug fix (TUI)** | Keeps unknown terminal themes readable by using default foreground/background until theme is known. Fixes near-invisible text on light terminals. |
| [#1355](https://github.com/HKUDS/nanobot/pull/1355) | **bug fix (images)** | Prevents bot from repeatedly mentioning images from prior messages. |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) | **refactor (heartbeat)** | Decouples heartbeat reasoning from notifications: reasoning now silent by default; new `sendReasoning` config opt-in. Updates HEARTBEAT.md. |
| [#5843](https://github.com/HKUDS/nanobot/issues/5843) | **issue closed** | Long-session BUILD-stage latency (10s–tens of seconds) — closed without fix; root cause unclear. |

**Net progress:** TUI stability improved significantly; heartbeat behavior made configurable; image-spam regression fixed. The long-session latency issue remains unresolved.

---

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| **[#5924](https://github.com/HKUDS/nanobot/issues/5924)** Agent stuck in sudo loop (P1) | 5 comments, updated 2026-09-28 | **Critical usability blocker**: sudo auth expires after one turn → agent loops requesting sudo → max iterations hit → agent obsesses over failed command. Blocks any privileged operation. |
| **[#5903](https://github.com/HKUDS/nanobot/issues/5903)** Feishu hidden checkpoint leaked to user | 4 comments, updated 2026-09-28 | **Channel polish**: Internal `Continue the active task...` marker delivered as visible chat message after idle compaction. Affects Feishu/Lark UX. |
| **[#5908](https://github.com/HKUDS/nanobot/issues/5908)** WebUI: live tokens/sec indicator (P2) | 4 comments, updated 2026-09-28 | **Observability**: Users want real-time generation speed feedback during streaming to detect stalls. |
| **[#5956](https://github.com/HKUDS/nanobot/issues/5956)** Feishu compaction notices unclosable (related #5784) | 2 comments, created 2026-09-28 | **Channel control**: Feishu lacks in-place edit → both `started`/`succeeded` compaction events post to channel. Users want opt-out. |
| **[#4798](https://github.com/HKUDS/nanobot/issues/4798)** Concurrent file writes corrupt workspace (Jul 2026) | 2 comments, updated 2026-09-28 | **Data integrity**: No file-level locking in `ReadFileTool`/`WriteFileTool`/`EditFileTool` → simultaneous writes from different sessions corrupt files. |

**Pattern:** Channel adapters (Feishu, Slack, Telegram) and session/runtime correctness (sudo, compaction, file locking) dominate user pain.

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **P0 / Critical** | [#5924](https://github.com/HKUDS/nanobot/issues/5924) Sudo loop renders agent unusable | Open | No |
| **P0 / Critical** | [#4798](https://github.com/HKUDS/nanobot/issues/4798) Concurrent file writes → workspace corruption | Open (since Jul) | **[#5953](https://github.com/HKUDS/nanobot/pull/5953)** open — atomic writes for file tools |
| **P1 / High** | [#5903](https://github.com/HKUDS/nanobot/issues/5903) Feishu internal marker leaked to user | Open | No |
| **P1 / High** | [#5956](https://github.com/HKUDS/nanobot/issues/5956) Feishu compaction notices unclosable | Open | No |
| **P1 / High** | [#5898](https://github.com/HKUDS/nanobot/issues/5898) GPT-6 models via GitHub Copilot unsupported | Open | No |
| **P2 / Medium** | [#5843](https://github.com/HKUDS/nanobot/issues/5843) Long-session BUILD latency 10s+ | Closed (no fix) | No |
| **P2 / Medium** | [#5908](https://github.com/HKUDS/nanobot/issues/5908) WebUI missing tokens/sec indicator | Open | No |

**Note:** #5953 (atomic file writes) directly addresses #4798 and is a **high-priority merge candidate**.

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Live tokens/sec in WebUI** | [#5908](https://github.com/HKUDS/nanobot/issues/5908) (P2) | High — small scoped UI enhancement, clear user demand |
| **Claude on Vertex AI provider** | [#5955](https://github.com/HKUDS/nanobot/pull/5955) (open PR) | High — PR ready, adds enterprise-grade provider |
| **Unbrowse backend for web_fetch** | [#5945](https://github.com/HKUDS/nanobot/pull/5945) (open PR) | Medium — optional backend, adds dependency |
| **Subagent result aggregation** | [#5954](https://github.com/HKUDS/nanobot/pull/5954) (open PR) | Medium — improves multi-agent UX, needs design review |
| **Heartbeat model_override config** | [#4549](https://github.com/HKUDS/nanobot/pull/4549) (open, Jun) | Low — stale, conflicts, but aligns with #1443 merged today |
| **Telegram topic rename from session title** | [#5902](https://github.com/HKUDS/nanobot/pull/5902) (open PR) | Medium — polish for Telegram power users |
| **Cron tool validation (non-positive intervals)** | [#5962](https://github.com/HKUDS/nanobot/pull/5962) (open PR) | High — trivial fix, prevents foot-guns |

**Predicted next patch (v0.3.6):** TUI fixes (#5959, #5958), atomic file writes (#5953), cron validation (#5962), Slack/Telegram message fixes (#5961, #5960), possibly Vertex AI provider (#5955).

---

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Sudo loop = agent brick** | #5924: "Agent gets stuck in a loop trying to get sudo... becomes unusable" | Blocks all privileged tasks; high frustration |
| **Channel noise (Feishu/Slack)** | #5903, #5956: internal markers/compaction notices spam chat | Degrades trust in channel integrations; enterprise blocker |
| **No visibility into generation health** | #5908: "no way to see how fast it is generating... stalling" | Users can't distinguish slow model from hang |
| **Workspace corruption fear** | #4798: "data corruption or interleaved writes" | Critical for multi-user/team environments |
| **Long-session latency mystery** | #5843: "waits 10s–tens of seconds in BUILD stage... unclear whether expected" | Erodes confidence; no workaround |

**Positive signals:** Rapid PR turnover, maintainers merging TUI/channel/provider fixes daily. Users file detailed bugs with repro steps — engaged community.

---

## 8. Backlog Watch — Stale & High-Impact Items Needing Attention
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| **[#4798](https://github.com/HKUDS/nanobot/issues/4798)** Concurrent file-write corruption | 85 days | Data loss risk in multi-session use; PR #5953 exists | **Review & merge #5953** (atomic writes) ASAP |
| **[#5924](https://github.com/HKUDS/nanobot/issues/5924)** Sudo loop (P1) | 3 days | Complete blocker for privileged ops; no workaround | **Assign owner**; likely needs sudo session persistence across turns |
| **[#5302](https://github.com/HKUDS/nanobot/pull/5302)** Dream consolidation uses unavailable tools | 51 days | Memory consolidation broken; prompt/tool mismatch | Resolve conflicts; merge or close with decision |
| **[#4549](https://github.com/HKUDS/nanobot/pull/4549)** Heartbeat model_override | 95 days | Cost optimization for heartbeat; conflicts with #1443 (now merged) | Rebase onto main; merge since #1443 landed |
| **[#5212](https://github.com/HKUDS/nanobot/pull/5212)** MiniMax music guidance | 58 days | Extends provider ecosystem; stalled | Review for relevance; MiniMax adoption? |
| **[#5539](https://github.com/HKUDS/nanobot/pull/5539)** ToolLoader log interpolation | 35 days | Log hygiene; prevents printf-style bugs | Low risk; merge to reduce tech debt |

---

## Health Indicators
| Metric | Signal |
|--------|--------|
| **PR merge rate** | 11/28 merged today → **39% same-day merge** (healthy) |
| **Issue resolution** | 1/7 closed today; several P0/P1 open > 3 days |
| **Conflict rate** | 8/17 open PRs marked `conflict` → **merge friction** |
| **Contributor breadth** | 12+ distinct authors in today’s PRs → **distributed ownership** |
| **Test discipline** | Most PRs include `bun test` passes; regression tests added |

**Bottom line:** NanoBot is **actively maintained with strong engineering hygiene**, but has **critical user-facing bugs (sudo, file locking, channel leaks)** that should gate the next release. The merged TUI/heartbeat fixes show maintainers are responsive to usability. Prioritize #5953 + #5924 for v0.3.6.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-29

## 1. Today's Overview
Hermes Agent shows **high development velocity** with 50 PRs updated and 10 issues touched in the last 24 hours, though only 1 PR was merged/closed — indicating active iteration but limited completion. The project is in a **bug-heavy stabilization phase**: most new issues are regressions or edge-case crashes (CLI module resolution, gateway duplicate warnings, session archive visibility, skill metadata loss). No releases were cut today. The PR queue spans Windows installer hand-off, plugin load retries, TUI config polling optimization, and a new optional skill (`reladraw`), suggesting parallel work on desktop reliability, plugin resilience, and extensibility.

---

## 2. Releases
**No new releases today.** The latest published version remains `v0.21.5+3839.g27062c3.dirty` (per issue #126021).

---

## 3. Project Progress (Merged/Closed PRs)
Only **1 PR merged/closed** in the last 24h (data shows 49 open, 1 merged/closed). The merged PR is not explicitly listed in the top-20 by comments; the majority of activity is on open PRs. Key *open* PRs advancing toward merge:

| PR | Area | Status |
|----|------|--------|
| [#127406](https://github.com/NousResearch/hermes-agent/pull/127406) | Desktop/Windows installer: hand off pending source completion | Open |
| [#127409](https://github.com/NousResearch/hermes-agent/pull/127409) | Gateway: silence false-positive duplicate-send warnings for no-delivery consumers | Open |
| [#127404](https://github.com/NousResearch/hermes-agent/pull/127404) | Gateway: skip duplicate-send warning when streamed nothing | Open |
| [#126749](https://github.com/NousResearch/hermes-agent/pull/126749) | Plugins: retry failed loads instead of stranding platforms (P1) | Open |
| [#123349](https://github.com/NousResearch/hermes-agent/pull/123349) | Provider registry: copy-on-write seam for late-registered providers | Open |

---

## 4. Community Hot Topics (Most Active Issues/PRs)
*Ranked by comment count (where available) and recency.*

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#125121](https://github.com/NousResearch/hermes-agent/issues/125121) | Bug | 7 | **CLI module resolution broken on managed-runtime installs** — `hermes_cli` not found when Kanban dispatcher spawns workers. Blocks automated task execution. |
| [#126021](https://github.com/NousResearch/hermes-agent/issues/126021) | Bug | 3 | **Duplicate assistant rows after compaction + async delegation** — identical microsecond timestamps, both `active=1`. Data integrity risk in session store. |
| [#127395](https://github.com/NousResearch/hermes-agent/issues/127395) | Bug | 1 | **Gateway "possible duplicate send" warning fires on every Feishu streaming reply** — false alarm due to missing ack semantics. Noise in logs. |
| [#126832](https://github.com/NousResearch/hermes-agent/issues/126832) | Bug | 1 | **Reasoning-only output promoted to final reply in group chats** — no recipient gate. Privacy/UX leak. |
| [#82847](https://github.com/NousResearch/hermes-agent/issues/82847) | Bug | 1 | **Captionless image uploads fabricate "What do you see in this image?"** — synthetic user instruction injected. Long-standing (Aug 10), 1 👍. |

**Underlying themes:**  
- **Managed runtime / packaging issues** (#125121, #127406) — Windows + Python embedding friction.  
- **Session-state consistency** (#126021, #127389) — compaction, archiving, search.  
- **Gateway delivery semantics** (#127395, #126832, #127404, #127409) — streaming, deduplication, platform quirks.

---

## 5. Bugs & Stability (Reported Today, Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P1 (Critical)** | [#126749](https://github.com/NousResearch/hermes-agent/pull/126749) (PR) | Plugin load timeout strands platforms (e.g., Telegram) after unclean reboot — **retry logic added**. | ✅ PR open |
| **P2 (High)** | [#125121](https://github.com/NousResearch/hermes-agent/issues/125121) | Kanban dispatcher workers crash: `ModuleNotFoundError: hermes_cli` on managed-runtime installs. | ❌ No PR yet |
| **P2** | [#126021](https://github.com/NousResearch/hermes-agent/issues/126021) | Duplicate assistant rows persisted after compaction + async delegation fan-out (identical µs timestamps). | ❌ No PR yet |
| **P2** | [#127395](https://github.com/NousResearch/hermes-agent/issues/127395) | Gateway logs duplicate-send WARNING on every Feishu streaming reply (no ack path). | ✅ [#127409](https://github.com/NousResearch/hermes-agent/pull/127409), [#127404](https://github.com/NousResearch/hermes-agent/pull/127404) |
| **P2** | [#126832](https://github.com/NousResearch/hermes-agent/issues/126832) | Reasoning-only output delivered as reply in group chats (no recipient gate). | ❌ No PR yet |
| **P3 (Medium)** | [#127412](https://github.com/NousResearch/hermes-agent/issues/127412) | `cli_stream_mixin._flush_stream` drops partial tag fragments mid-token. | ❌ No PR yet |
| **P3** | [#127398](https://github.com/NousResearch/hermes-agent/issues/127398) | Desktop Skills: author attribution & frontmatter metadata lost in detail pane. | ❌ No PR yet |
| **P3** | [#127389](https://github.com/NousResearch/hermes-agent/issues/127389) | Archived session stays invisible in sidebar while running; search shows "Archive" not "Unarchive". | ❌ No PR yet |
| **P3** | [#127405](https://github.com/NousResearch/hermes-agent/issues/127405) | `platform_toolsets` validation contradicts itself for dynamic plugin platforms. | ❌ No PR yet |
| **P3 (Legacy)** | [#82847](https://github.com/NousResearch/hermes-agent/issues/82847) | Captionless images fabricate user instruction ("What do you see?"). | ❌ No PR yet |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Reladraw skill** (text diagrams with stated placement → SVG) | [#127407](https://github.com/NousResearch/hermes-agent/pull/127407) (by `teknium1`) | High — `ci-reviewed`, upstream-maintained stub |
| **ElevenLabs v4 char limits** (10k chars) | [#126844](https://github.com/NousResearch/hermes-agent/pull/126844) | High — provider launch day fix |
| **Dynamic pricing fallback** (models.dev default) | [#71911](https://github.com/NousResearch/hermes-agent/pull/71911) | Medium — long-open, config-gated |
| **Exact-selection session prune** (frozen verified plan) | [#108582](https://github.com/NousResearch/hermes-agent/pull/108582) | Medium — complex, split from import-limit gate |
| **Provider registry copy-on-write seam** (late registration) | [#123349](https://github.com/NousResearch/hermes-agent/pull/123349) | Medium — foundational for plugin providers |
| **gws-oauth plugin v0.3.2** (remote OAuth, mobile Safari) | [#126101](https://github.com/NousResearch/hermes-agent/pull/126101) | High — catalog pin, profile-isolated |
| **TUI config refresh via gateway signals** (kill 5s polling) | [#127403](https://github.com/NousResearch/hermes-agent/pull/127403) | High — perf, part of #127374 |
| **Wake-word arming with lazy `audio-io` install** | [#127366](https://github.com/NousResearch/hermes-agent/pull/127366) | Medium — UX polish |

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Managed-runtime CLI broken** | #125121 — workers can't import `hermes_cli` | Blocks Kanban/automation on packaged installs |
| **Session archive UX broken** | #127389 — archived sessions invisible but runnable; search lies | Users lose track of active conversations |
| **Skill metadata loss** | #127398 — author & frontmatter gone in Desktop Capabilities | Ecosystem trust; skill discovery impaired |
| **False gateway warnings** | #127395, #127404, #127409 — log spam on Feishu/streaming | Operators ignore real alerts |
| **Reasoning leaked to groups** | #126832 — internal reasoning becomes public reply | Privacy / professionalism risk |
| **Synthetic user instructions** | #82847 — "What do you see?" injected on captionless images | User agency violated; 1 👍, 13 months open |
| **Plugin load fragility** | #126749 — transient boot failures strand platforms | Reliability on unclean reboots |

**Positive signals:** Active plugin catalog growth (`reladraw`, `gws-oauth`), provider registry modernization, Windows desktop installer fixes.

---

## 8. Backlog Watch (Long-Unanswered / Stalled)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#82847](https://github.com/NousResearch/hermes-agent/issues/82847) | **50 days** | Captionless image behavior violates user intent; simple fix (`base_text = text or ""`), but untouched. |
| [#68106](https://github.com/NousResearch/hermes-agent/pull/68106) | **71 days** | Anthropic usage normalization (billing display) — `needs-decision`, stale. |
| [#71911](https://github.com/NousResearch/hermes-agent/pull/71911) | **65 days** | Dynamic pricing fallback (models.dev) — foundational for cost visibility, `sweeper:blast-moderate`. |
| [#108582](https://github.com/NousResearch/hermes-agent/pull/108582) | **18 days** | Exact-selection session prune — complex but high-value for session hygiene. |
| [#123349](https://github.com/NousResearch/hermes-agent/pull/123349) | **3 days** | Provider registry copy-on-write — enables plugin providers without restarts; architectural. |
| [#120327](https://github.com/NousResearch/hermes-agent/pull/120327) | **6 days** | Azure Foundry GPT-6 routing to Responses API — provider-specific, unmerged. |

---

**Project Health Indicators**  
- 🟢 **Velocity**: High (50 PR updates/day)  
- 🟡 **Throughput**: Low (1 merge/day) — review bottleneck?  
- 🔴 **Bug inflow**: 10 new/updated issues, multiple P2 regressions  
- 🟢 **Extensibility**: Plugin catalog & provider registry actively evolving  
- 🟡 **Desktop/Windows**: Active fixes but packaging issues persist  

*Next watch: whether #125121 (CLI module) and #126021 (session duplicates) get fix PRs within 48h — they block automation and data integrity.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-29

## 1. Today's Overview
PicoClaw shows **high contributor activity but zero maintainer merges** in the last 24 hours: 10 open PRs updated (none merged), 5 active issues updated, and 1 closed. The project appears **effectively unmaintained upstream**—a community member has announced an active fork (afjcjsbx/picoclaw) citing abandonment. Contributors are submitting critical reliability fixes (agent loop, config persistence, updater asset selection, channel reload safety) and a web UI performance fix, but without maintainer review they remain stalled. Security posture is a concern: a critical audit from February was closed without public resolution, and private vulnerability reporting is disabled.

## 2. Releases
**No new releases** in the last 24 hours. Last tagged release remains v0.3.1.

## 3. Project Progress
**No PRs merged or closed today.** All 10 updated PRs remain open. Notable *proposed* advances:
- **Agent reliability**: #3403 (async tool results routed to correct session), #3402 (context managers resolve owning agent correctly)
- **Config persistence**: #3400 (fixes multi-key model `api_keys` and `enabled` flag loss on save)
- **Updater correctness**: #3399 (selects proper 32-bit ARM asset instead of arm64)
- **Channel manager safety**: #3401 (makes `Reload` synchronous and nil-safe, prevents panic on failed channel init)
- **Web UI performance**: #3347 (fixes input lag with long chat history)
- **Auth fix**: #3378 (uses configured OAuth scopes on token refresh)
- **IRCv3 support**: #3354 (multiline message assembly)
- **DeltaChat cleanup**: #3222 (removes legacy code, -200 LOC)
- **New search provider**: #3370 (Keenable web search, no API key required)

## 4. Community Hot Topics

| Item | Activity | Core Need |
|------|----------|-----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI chat input lag with history | 15 comments, 2 👍, stale since Jul | **Usability blocker** — users cannot type smoothly in sessions with moderate history; PR #3347 claims fix |
| [#3398](https://github.com/sipeed/picoclaw/issues/3398) Active fork announcement | 0 comments, new | **Governance signal** — community declares upstream unmaintained, launches maintained fork |
| [#3404](https://github.com/sipeed/picoclaw/issues/3404) Reliability fixes with reproducers (wave 1) | 0 comments, new | **Quality backlog** — multiple reproducible bugs in agent loop, channels, config, updater; previous fixes closed by stale bot |
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) OpenAI-compatible provider support | 5 comments | **Extensibility** — users want to plug self-hosted routers (e.g., 9Router) via generic OpenAI-compatible provider |
| [#3405](https://github.com/sipeed/picoclaw/issues/3405) Enable private vulnerability reporting | 0 comments, new | **Security process** — reporters cannot disclose privately; no `SECURITY.md` or contact |

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue / PR | Summary | Fix PR |
|----------|------------|---------|--------|
| **Critical** | [#258](https://github.com/sipeed/picoclaw/issues/258) Security Audit (Feb 2026) | **CRITICAL VULNERABILITIES DETECTED** in tool implementation; closed Sep 28 without public resolution details | None visible |
| **High** | [#3401](https://github.com/sipeed/picoclaw/pull/3401) Channel reload nil panic | Enabled channel failing readiness → `Stop`/`Start` on nil `Channel` → gateway exit (panic at `manager.go:1956`) | #3401 (open) |
| **High** | [#3403](https://github.com/sipeed/picoclaw/pull/3403) Async tool results misrouted | Results from different chats accumulate in default agent session, causing cross-user leakage | #3403 (open) |
| **High** | [#3399](https://github.com/sipeed/picoclaw/pull/3399) Updater installs wrong arch | `picoclaw update` on 32-bit ARM downloads arm64 asset (substring match bug) | #3399 (open) |
| **Medium** | [#3400](https://github.com/sipeed/picoclaw/pull/3400) Config loses multi-key `api_keys`/`enabled` | Every save (incl. auto-migration) drops `Enabled` and all but first key | #3400 (open) |
| **Medium** | [#3402](https://github.com/sipeed/picoclaw/pull/3402) Context manager uses default agent | Routed (non-default) agent sessions get wrong context assembled | #3402 (open) |
| **Medium** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI input lag | Typing becomes very laggy with moderate chat history | #3347 (open) |

## 6. Feature Requests & Roadmap Signals
1. **OpenAI-compatible provider** ([#3366](https://github.com/sipeed/picoclaw/issues/3366)) — 5 comments, clear implementation path (copy OpenAI provider). High likelihood for next version if maintainer merges.
2. **Keenable web search** ([#3370](https://github.com/sipeed/picoclaw/pull/3370)) — Ready PR, zero-config public endpoint. Low risk, high user value.
3. **IRCv3 multiline** ([#3354](https://github.com/sipeed/picoclaw/pull/3354)) — Niche but complete implementation.
4. **DeltaChat modernization** ([#3222](https://github.com/sipeed/picoclaw/pull/3222)) — Large cleanup (-200 LOC), removes password auth, updates relay list. Signals move toward jsonrpc-only secrets.

**Prediction**: If upstream merges resume, the next patch (v0.3.2) will likely include the reliability fixes (#3400–#3403, #3399, #3401), web UI lag fix (#3347), and auth fix (#3378). OpenAI-compatible provider and Keenable search are strong candidates for v0.4.

## 7. User Feedback Summary
- **Pain**: Web UI becomes unusable with chat history (#3281, 2 👍, 15 comments) — affects desktop & mobile.
- **Frustration**: Critical security audit closed silently (#258); no private disclosure channel (#3405).
- **Workarounds**: Users building/tested fixes locally (#3347 author: "I am no TS/node developer… analyzed and fixed by AI").
- **Demand for self-hosting**: OpenAI-compatible provider request (#3366) reflects desire to use local routers (9Router, etc.).
- **Governance anxiety**: Fork announcement (#3398) shows community preparing for upstream abandonment.

## 8. Backlog Watch — Needs Maintainer Attention

| Item | Stale Since | Why It Matters |
|------|-------------|----------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI lag | 2026-07-21 | High-visibility UX bug; fix PR #3347 exists but unreviewed |
| [#3378](https://github.com/sipeed/picoclaw/pull/3378) OAuth scope fix | 2026-09-12 | Auth correctness; simple, low-risk |
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) IRCv3 multiline | 2026-08-31 | Protocol compliance; complete implementation |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) DeltaChat cleanup | 2026-07-03 | Large refactor, removes tech debt; blocked 3 months |
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) OpenAI-compatible provider | 2026-09-04 | High user demand; clear spec |
| [#258](https://github.com/sipeed/picoclaw/issues/258) Security audit closure | 2026-02-16 | **Critical**: No public evidence vulnerabilities were fixed; repo lacks `SECURITY.md` |

---

**Health Indicator**: 🟡 **Degraded** — Active contributor fixes pile up with zero maintainer throughput; security process absent; community forking. Upstream merge capacity is the single biggest risk.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-29

## 1. Today's Overview
NanoClaw shows **high maintenance velocity** with 31 PRs updated and 4 issues touched in the last 24 hours. The project is in a **bug-fix and hardening phase** post-v2.4.0 release (c313d061), with 18 PRs merged/closed today alone. Core focus areas: `/update-nanoclaw` reliability, gateway/credential plumbing, container lifecycle, and CI stability. No new releases; the team is stabilizing main before the next cut.

## 2. Releases
**No new releases today.** The latest tagged version remains v2.4.0 (commit c313d061). All merged PRs since that tag are accumulating on `main` for the next release.

## 3. Project Progress — Merged/Closed PRs Today (18)
| PR | Type | Area | Summary |
|----|------|------|---------|
| [#3883](https://github.com/nanocoai/nanoclaw/pull/3883) | Fix | providers, setup, skills | **Iron Control DB cleanup on uninstall** — removes `data/control.env` so reinstall starts clean; core stays gateway-agnostic. |
| [#3920](https://github.com/nanocoai/nanoclaw/pull/3920) | Hardening/Skill | setup, skills | **Restrict failure-assist agents** — setup-time agents now use each CLI's safe permission baseline instead of allow-all. |
| [#3957](https://github.com/nanocoai/nanoclaw/pull/3957) | Fix | scheduling, agent-runner | **Kill whole process group on pre-task timeout** — prevents orphaned `bun flow.ts` children after bash timeout. |
| [#3960](https://github.com/nanocoai/nanoclaw/pull/3960) | Refactor/Skill | skills | **OneCLI adapter: name credential in errors** — improves debuggability behind provider-agnostic seam. |
| [#3959](https://github.com/nanocoai/nanoclaw/pull/3959) | Fix/Test | agent-runner, CI | **Async spawn for bun children** — unblocks CI hanging on Bun 1.4.0 `spawnSync` bug (oven-sh/bun#34069). |
| [#3949](https://github.com/nanocoai/nanoclaw/pull/3949) | Fix/Skill | channels, setup | **Mattermost: derive callback secret in verify-runtime** — fixes runtime verification when `.env` lacks `MATTERMOST_CALLBACK_SECRET`. |
| [#3948](https://github.com/nanocoai/nanoclaw/pull/3948) | Fix | containers, setup, skills | **Keep gateway-owned containers through update cutover** — `gateway` now an official container role; stops Iron Proxy container removal during `/update-nanoclaw`. |
| [#3946](https://github.com/nanocoai/nanoclaw/pull/3946) | Fix | skills | **Show failed step's actual error** — skill-apply now surfaces step's own error instead of generic "did not complete". |
| [#3950](https://github.com/nanocoai/nanoclaw/pull/3950) | Feature/Skill | providers, skills | **Iron: trust operator's name-constrained local CA** — enables `https://models.home.arpa/v1` behind Iron; previously only public CAs trusted. |

*Other merged PRs:* #3953 (arm64 Iron Proxy early stop), #3954 (gateway docs: credential rotation caveat), #3955 (OpenCode gateway notes moved to gateway skills), #3958 (log: never throw on non-JSON-serializable values), #3962 (update: refuse cutover when liveness probe fails), #3956 (rollback: stop live nohup host + drain containers), #3901 (host service HTTPS proxy support via `NODE_USE_ENV_PROXY`), #3963 (test: `unlinkSync` for data symlink on Node <24.13.1).

## 4. Community Hot Topics
| Item | Activity | Signal |
|------|----------|--------|
| [#3961](https://github.com/nanocoai/nanoclaw/issues/3961) **`/update-nanoclaw` reports complete without restart when `systemctl --user` unreachable** | Open, 0 comments, created 2026-09-28 | **Critical reliability gap**: update flow declares success while old host still running. Directly blocks production updates on systems without user bus. Fix PR [#3962](https://github.com/nanocoai/nanoclaw/pull/3962) merged same day. |
| [#3906](https://github.com/nanocoai/nanoclaw/issues/3906) **Controller archive misses `setup/`; stage-rooted commands run before deps exist** | Closed, 1 comment, 👍0 | **Installer regression** post-#3816. Archive layout broken; runtime commands execute before dependencies installed. Fixed via multiple PRs (#3948, #3956, #3962). |
| [#3907](https://github.com/nanocoai/nanoclaw/issues/3907) **Gateway detection fails on nested pnpm workspace warning to stdout** | Closed, 0 comments | **Parsing fragility**: CLI output pollution breaks gateway detection. Highlights need for structured machine-readable output from package managers. |
| [#3839](https://github.com/nanocoai/nanoclaw/issues/3839) **`registry-skills: add-opencode` reapply hangs in Bun test (6h timeout)** | Closed, 0 comments | **CI flake / Bun bug**: `spawnSync` hang (oven-sh/bun#34069). Mitigated by [#3959](https://github.com/nanocoai/nanoclaw/pull/3959) async spawn. |

**Underlying need:** Users hitting `/update-nanoclaw` in production environments (systemd, containers, proxies, arm64) are uncovering **cutover atomicity, service liveness verification, and gateway/container lifecycle** edge cases. The team is responding with same-day fixes.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **Critical** | [#3961](https://github.com/nanocoai/nanoclaw/issues/3961) Update reports `complete` without restart when `systemctl --user` unreachable | Open | [#3962](https://github.com/nanocoai/nanoclaw/pull/3962) merged |
| **Critical** | [#3906](https://github.com/nanocoai/nanoclaw/issues/3906) Controller archive missing `setup/`; commands run before deps | Closed | Fixed via #3948, #3956, #3962 |
| **High** | [#3948](https://github.com/nanocoai/nanoclaw/pull/3948) Update removes gateway (Iron Proxy) container → all agent spawns fail | Closed (merged) | Merged |
| **High** | [#3956](https://github.com/nanocoai/nanoclaw/pull/3956) Rollback doesn't stop live nohup host / drain containers | Open | Open |
| **High** | [#3839](https://github.com/nanocoai/nanoclaw/issues/3839) CI hangs 6h on `add-opencode` reapply (Bun `spawnSync` bug) | Closed | [#3959](https://github.com/nanocoai/nanoclaw/pull/3959) merged |
| **Medium** | [#3907](https://github.com/nanocoai/nanoclaw/issues/3907) Gateway detection broken by pnpm stdout warning | Closed | Fixed (parsing hardened) |
| **Medium** | [#3953](https://github.com/nanocoai/nanoclaw/pull/3953) Iron Proxy `exec format error` on arm64 engines without amd64 emulation | Open | Open (early stop with clear message) |
| **Medium** | [#3901](https://github.com/nanocoai/nanoclaw/pull/3901) Host service can't reach internet through HTTPS proxy (missing `NODE_USE_ENV_PROXY`) | Open | Open |
| **Low** | [#3946](https://github.com/nanocoai/nanoclaw/pull/3946) Skill step failure shows generic "did not complete" | Closed (merged) | Merged |
| **Low** | [#3958](https://github.com/nanocoai/nanoclaw/pull/3958) Log crashes host on non-JSON-serializable values (circular, BigInt) | Open | Open |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Operator-local CA trust for private model hosts** (e.g., `https://models.home.arpa/v1`) | [#3950](https://github.com/nanocoai/nanoclaw/pull/3950) merged | **High** — merged, extends Iron gateway capability |
| **Gateway as first-class container role** (survive updates) | [#3948](https://github.com/nanocoai/nanoclaw/pull/3948) merged | **High** — architectural, merged |
| **HTTPS proxy support for host service** (`NODE_USE_ENV_PROXY` at boot) | [#3901](https://github.com/nanocoai/nanoclaw/pull/3901) open | **Medium** — targeted fix, needs review |
| **Arm64-native Iron Proxy image / early detection** | [#3953](https://github.com/nanocoai/nanoclaw/pull/3953) open | **Medium** — stop-gap merged; proper fix needs multi-arch image |
| **Credential rotation detection (OneCLI/Iron adapters)** | [#3954](https://github.com/nanocoai/nanoclaw/pull/3954) open (docs+test) | **Low** — documented limitation, test pinned; fix would require atomic compare-and-swap in credential store |
| **Structured machine-readable CLI output** (to avoid stdout parsing) | Implied by [#3907](https://github.com/nanocoai/nanoclaw/issues/3907) | **Low** — no PR yet; would be breaking change |

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Update reliability on systemd/user-bus-less hosts** | [#3961](https://github.com/nanocoai/nanoclaw/issues/3961) | Production updates silently fail; host not restarted |
| **Gateway container killed during update** | [#3948](https://github.com/nanocoai/nanoclaw/pull/3948) | All agent spawns fail post-update until host restart |
| **Arm64 users blocked on Iron Proxy** | [#3953](https://github.com/nanocoai/nanoclaw/pull/3953) | `exec format error` after pull; no clear error message |
| **Corporate HTTPS proxy environments** | [#3901](https://github.com/nanocoai/nanoclaw/pull/3901) | Host service cannot reach internet; `NODE_USE_ENV_PROXY` must be set at process start |
| **CI flakiness on Bun 1.4.0** | [#3839](https://github.com/nanocoai/nanoclaw/issues/3839), [#3959](https://github.com/nanocoai/nanoclaw/pull/3959) | 5/8 main runs red; `spawnSync` hangs indefinitely |
| **Skill failure opacity** | [#3946](https://github.com/nanocoai/nanoclaw/pull/3946) | Generic "step did not complete" hides root cause |

**Positive signals:** Same-day fix turnaround for critical update bugs; gateway/credential architecture hardening; CI unblocked quickly.

## 8. Backlog Watch — Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3956](https://github.com/nanocoai/nanoclaw/pull/3956) **Rollback stops live nohup host + drains containers** | Open since 2026-09-28 | Complements #3962; ensures rollback path is as robust as forward update. No review yet. |
| [#3953](https://github.com/nanocoai/nanoclaw/pull/3953) **Arm64 Iron Proxy early stop** | Open since 2026-09-28 | Stop-gap merged; needs decision: publish arm64 `ironsh/iron-control` image or document emulation requirement. |
| [#3901](https://github.com/nanocoai/nanoclaw/pull/3901) **Host service HTTPS proxy support** | Open since 2026-09-25 | Affects corporate deployments; requires setting `NODE_USE_ENV_PROXY=1` at process boot (via systemd/env file). |
| [#3958](https://github.com/nanocoai/nanoclaw/pull/3958) **Log: never throw on non-JSON-serializable** | Open since 2026-09-28 | Defensive hardening; low risk but prevents host crashes on circular/BigInt log values. |
| [#3654](https://github.com/nanocoai/nanoclaw/pull/3654) **`NO_PROXY` for local hops (host.docker.internal MCP)** | Open since 2026-08-29 | Long-standing; enables plain-HTTP MCP servers behind credential gateway. Needs review. |
| [#3919](https://github.com/nanocoai/nanoclaw/pull/3919) **OpenCode: check model URL against gateway at prompt** | Open since 2026-09-25 | UX improvement for Iron gateway; validates keyless local model URL before proceeding. |

---

**Health Assessment:** 🟢 **Healthy, high-velocity maintenance window.** Critical update-path bugs found and fixed within 24h. Gateway/container lifecycle now formally modeled. CI stabilized. Next release will likely be v2.4.1 with 20+ fixes. Watch: rollback hardening (#3956), arm64 Iron Proxy strategy, and corporate proxy support (#3901) for inclusion.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-09-29

## 1. Today's Overview
NullClaw shows focused maintenance and provider expansion activity over the past 24 hours. Two pull requests were merged/closed: a version-bump release candidate (v20260929) and a new Eden AI gateway integration. Two long-standing issues were closed — one clarifying Web UI setup for headless servers, the other correcting a Zig version discrepancy in documentation. No new releases were published today, but PR #1014 indicates an imminent v20260929 tag. Overall project health appears steady with incremental improvements and documentation fixes.

## 2. Releases
**No new releases published today.**  
PR #1014 (`v20260929`) is a release-candidate PR that bumps the version and includes:
- Pinning web search to the configured provider (fixes Exa rejecting duplicate `Content-Type` headers)
- Stripping Markdown markers before official QQ replies
- Version bump to `v20260929`

The PR checklist notes the release workflow must build the tag and `nullclaw version` must report the release tag. Expect the tagged release once CI passes.

## 3. Project Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#1014](https://github.com/nullclaw/nullclaw/pull/1014) | Closed (merged) | Release candidate v20260929: web-search provider pin, QQ reply Markdown strip, version bump | Imminent patch release with stability fixes |
| [#990](https://github.com/nullclaw/nullclaw/pull/990) | Closed (merged) | Add Eden AI as OpenAI-compatible gateway provider (EU-based, multi-vendor routing) | Expands LLM provider options; follows existing gateway pattern (#922) |

Both PRs were merged on 2026-09-28. The Eden AI integration required no new provider code — it reuses `OpenAiCompatibleProvider`.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [Issue #861](https://github.com/nullclaw/nullclaw/issues/861) — *How to enable Web UI on headless VPS?* | 5 comments, closed 2026-09-28 | Users struggle with tunneling/relay setup for browser-based UI on headless infrastructure. Docs assumed technical familiarity; need plain-language, step-by-step guide. |
| [Issue #932](https://github.com/nullclaw/nullclaw/issues/932) — *Invalid Zig version in docs* | 1 comment, closed 2026-09-28 | Documentation listed Zig 0.15.2 but build requires 0.16.0+ (`std.Io.Dir`). Users hitting build failures; version pin in docs was stale. |

Both issues were resolved same-day, indicating responsive maintainer attention to onboarding friction.

## 5. Bugs & Stability
| Bug | Severity | Status | Fix PR |
|-----|----------|--------|--------|
| Exa web search rejects requests due to duplicate `Content-Type` headers | Medium (breaks web search for Exa users) | Fixed in [#1014](https://github.com/nullclaw/nullclaw/pull/1014) | Pin provider + header deduplication |
| Zig 0.15.2 build failure (missing `std.Io.Dir`) | High (blocks source builds) | Fixed via docs correction in [#932](https://github.com/nullclaw/nullclaw/issues/932) | Docs updated to require Zig ≥0.16.0 |
| QQ official replies include raw Markdown markers | Low (cosmetic) | Fixed in [#1014](https://github.com/nullclaw/nullclaw/pull/1014) | Strip Markdown before send |

No new crashes or regressions reported today. The two fixed bugs were addressed in the v20260929 release candidate.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| More OpenAI-compatible gateway providers (Eden AI added) | [PR #990](https://github.com/nullclaw/nullclaw/pull/990) | High — pattern established; expect more gateways (e.g., OpenRouter, Together) |
| Simplified Web UI / headless setup documentation | [Issue #861](https://github.com/nullclaw/nullclaw/issues/861) | Medium — issue closed but may spawn follow-up docs PR |
| Zig version matrix / CI testing across versions | [Issue #932](https://github.com/nullclaw/nullclaw/issues/932) | Low — docs fixed, but no CI matrix PR yet |

The gateway-provider pattern is the clearest roadmap signal: low-effort expansion of LLM backends via OpenAI-compatible APIs.

## 7. User Feedback Summary
- **Pain points**: 
  - Web UI tunneling on headless VPS is opaque to non-experts (Issue #861, 5 comments).
  - Stale build prerequisites in docs cause wasted time (Issue #932).
  - Exa search silently fails due to header duplication.
- **Use cases**: 
  - Deploying NullClaw agent on remote/headless servers with browser relay.
  - Building from source on modern Zig toolchains.
  - Multi-vendor LLM routing via EU-based gateway (Eden AI).
- **Satisfaction**: Quick closure of both issues (same-day) suggests maintainers are responsive. No negative reactions (👍: 0 on all items) but low engagement overall.

## 8. Backlog Watch
| Item | Age | Concern |
|------|-----|---------|
| No open issues/PRs updated today | — | Current backlog not visible in 24h window; recommend checking older open items for stale tickets. |
| Release workflow validation for v20260929 | 1 day | PR #1014 checklist includes “Release workflow builds the tag” — unchecked. Monitor CI for tag publication. |
| Eden AI provider testing in CI | 1 month (opened 2026-08-21) | Merged without explicit CI integration test; verify gateway works in automated tests. |

**Action for maintainers**: Ensure v20260929 tag publishes cleanly; consider adding gateway-provider integration tests to CI; publish a “Headless Web UI Setup” guide to prevent repeat Issue #861 queries.

---

*Data source: GitHub API (issues, PRs, releases) for `nullclaw/nullclaw` as of 2026-09-29 00:00 UTC. All links point to live GitHub items.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-29

## 1. Today's Overview
IronClaw shows steady maintenance activity with **5 PRs updated** in the last 24 hours (4 open, 1 closed) and **1 new issue** opened. The project is in a healthy maintenance phase with automated CI workflows running (codebase graph refresh, OpenWiki docs sync) and active community contributions from both core team members and new contributors. No releases were published today. The closed PR (#5132) addresses a webui-v2 routing bug, while open PRs focus on CLI config reporting, WebUI focus management, documentation sync, and automated knowledge graph updates.

## 2. Releases
**No new releases** published today.

## 3. Project Progress
| PR | Status | Size/Risk | Summary |
|----|--------|-----------|---------|
| [#5132](https://github.com/nearai/ironclaw/pull/5132) | **Closed** | L / low | **fix(webui-v2): redirect invalid chat thread routes** — Redirects reserved/invalid `/chat/:threadId` routes to `/chat`, waits for thread list to settle before deep-link validation, preserves locally created threads during refetch. Author: `flyagents` (new contributor). |
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | Open | XS / low | **chore(agents): refresh codebase knowledge graph** — Nightly automated update of committed codebase-memory bootstrap snapshot. Bot-generated (`ironclaw-ci[bot]`). |
| [#8118](https://github.com/nearai/ironclaw/pull/8118) | Open | M / low | **fix(cli): report effective config profile** — Makes `ironclaw config path`, `doctor`, `status` show effective boot profile from `config.toml` when `IRONCLAW_REBORN_PROFILE` unset; reuses existing precedence logic. Author: `changeroa` (new). |
| [#8117](https://github.com/nearai/ironclaw/pull/8117) | Open | M / low | **fix(webui): restore focus after closing command palette** — Remembers invoking element for Cmd/Ctrl+K palette and restores focus on dismiss if still connected. Author: `changeroa` (new). |
| [#6698](https://github.com/nearai/ironclaw/pull/6698) | Open | XL / low | **docs: update OpenWiki wiki** — Automated narrative-docs refresh from `openwiki/`; requires human approval per change-management policy. Bot-generated (`ironclaw-ci[bot]`). |

**Key advancement**: WebUI v2 routing stability improved (merged), CLI observability enhanced (open), and accessibility/focus management polished (open).

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [Issue #8116](https://github.com/nearai/ironclaw/issues/8116) — *Daily ironclaw failure taxonomy* | 0 comments, 0 👍, created & updated today | **Observability & quality tracking** — Automated daily analysis of benchmark failures (officeqa suite: 31 non-pass tasks, mostly model-quality errors on DeepSeek-V4-Flash). Signals investment in systematic failure classification to drive model/agent improvements. |
| [PR #6698](https://github.com/nearai/ironclaw/pull/6698) — *docs: update OpenWiki wiki* | Open since 2026-07-27, updated 2026-09-28 | **Documentation freshness** — Long-running automated docs sync awaiting human review; reflects policy of manual approval for narrative docs despite automation. |

*No high-comment/reaction threads today; activity is dominated by automated/maintenance PRs.*

## 5. Bugs & Stability
| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **Medium** | Invalid `/chat/:threadId` routes not redirected, causing broken deep links and thread-list race conditions | **Fixed (merged)** | [#5132](https://github.com/nearai/ironclaw/pull/5132) |
| **Low** | Command palette (Cmd/Ctrl+K) steals focus from inputs on dismiss | **Open, fix proposed** | [#8117](https://github.com/nearai/ironclaw/pull/8117) |
| **Low** | CLI commands don't report effective config profile when env var unset | **Open, fix proposed** | [#8118](https://github.com/nearai/ironclaw/pull/8118) |

*No crashes or regressions reported today. The merged PR resolves a user-facing routing bug; two open PRs address UX polish.*

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Effective config profile visibility in CLI** | PR [#8118](https://github.com/nearai/ironclaw/pull/8118) (new contributor) | High — small, low-risk, improves debuggability |
| **Focus restoration for keyboard-driven WebUI** | PR [#8117](https://github.com/nearai/ironclaw/pull/8117) (new contributor) | High — accessibility/UX polish, well-scoped |
| **Systematic failure taxonomy for benchmarks** | Issue [#8116](https://github.com/nearai/ironclaw/issues/8116) (core team) | Medium — ongoing investment, may spawn tooling PRs |
| **Automated knowledge graph & docs sync** | PRs [#7988](https://github.com/nearai/ironclaw/pull/7988), [#6698](https://github.com/nearai/ironclaw/pull/6698) | Continuous — infra maintenance, not user-facing features |

*Two new-contributor PRs suggest a welcoming contribution pipeline for CLI/WebUI polish.*

## 7. User Feedback Summary
- **Pain point**: Deep-linked chat threads break on invalid IDs or during list refetch (addressed in #5132).
- **Pain point**: Keyboard users lose input focus after dismissing command palette (addressed in #8117).
- **Pain point**: CLI diagnostic commands (`config path`, `doctor`, `status`) don't show which config profile is active (addressed in #8118).
- **Satisfaction signal**: Automated daily failure taxonomy (Issue #8116) indicates proactive quality monitoring; no user complaints surfaced today.
- **Use case**: Office QA benchmark runs (31 non-pass tasks) reveal model-quality gaps, not infra failures — suggesting users rely on IronClaw for model evaluation.

## 8. Backlog Watch
| Item | Age | Risk | Why It Needs Attention |
|------|-----|------|------------------------|
| [PR #6698](https://github.com/nearai/ironclaw/pull/6698) — *docs: update OpenWiki wiki* | **64 days** (opened 2026-07-27) | Low | Automated docs refresh stalled awaiting human review; narrative docs may drift from codebase. Policy requires manual approval — consider delegating or streamlining. |
| [PR #7988](https://github.com/nearai/ironclaw/pull/7988) — *chore(agents): refresh codebase knowledge graph* | **31 days** (opened 2026-08-29) | Low | Nightly CI artifact; safe to merge but lingering. Could be auto-merged with passing tests. |
| [Issue #8116](https://github.com/nearai/ironclaw/issues/8116) — *Daily ironclaw failure taxonomy* | **1 day** | Medium | New recurring issue; if this becomes a daily series, ensure triage process exists to convert findings into actionable tickets. |

---
*Digest generated from GitHub data as of 2026-09-29. All links point to `github.com/nearai/ironclaw`.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-29

## 1. Today's Overview
LobsterAI shows **high maintenance velocity** with **12 PRs merged/closed** in the last 24 hours, addressing a mix of new features (OpenClaw progress cards, document editing support), stability fixes (gateway startup, Windows Node.js detection, legacy session deadlocks), and security hardening (protocol validation, URL sanitization). Only **1 PR remains open** (Electron dependency bump), while **4 stale issues from March** resurfaced with updates—indicating triage activity rather than new user reports. No new releases were published. The project is in active stabilization mode, clearing technical debt ahead of a likely release.

## 2. Releases
**No new releases** in the last 24 hours. The `release/2026.9.24` branch (referenced in #2773) appears to be the current stabilization target.

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2778](https://github.com/netease-youdao/LobsterAI/pull/2778) | renderer, cowork | Show OpenClaw `progress_card` above composer — makes agent plans visible instead of raw tool calls | UX: major — exposes agent reasoning/planning to users |
| [#2777](https://github.com/netease-youdao/LobsterAI/pull/2777) | renderer, cowork | Collapse long-running turns to latest 5 steps — prevents UI flooding from silent tool loops (e.g., DeepSeek 7-min tasks) | Performance/UX: high — fixes conversation render bloat |
| [#2776](https://github.com/netease-youdao/LobsterAI/pull/2776) | main, openclaw, skills, artifacts | Add PPT/Word/Excel document editing support | Feature: major — expands artifact/skill ecosystem to Office formats |
| [#2775](https://github.com/netease-youdao/LobsterAI/pull/2775) | main, openclaw | Start OpenClaw gateway **once** on app launch (was 3×, ~80s delay) | Stability: critical — eliminates triple startup, race conditions, and unavailability windows |
| [#2774](https://github.com/netease-youdao/LobsterAI/pull/2774) | main, openclaw | Improve one-click repair: bounded wait with output-activity timeout (5–15 min), save exit diagnostics | Reliability: high — fixes false repair failures on slow CLI loads |
| [#2773](https://github.com/netease-youdao/LobsterAI/pull/2773) | main, openclaw | Add regression tests for legacy session discovery recovery | Quality: medium — validates #2772 fix |
| [#2772](https://github.com/netease-youdao/LobsterAI/pull/2772) | main, openclaw | Skip pure-CJK agent dirs when counting legacy session stores — fixes startup deadlock | Stability: critical — resolves infinite "remaining legacy stores" gate |
| [#969](https://github.com/netease-youdao/LobsterAI/pull/969) | agent | Fix `AgentCreateModal` overflow — header/footer now sticky, content scrolls | UX: medium — restores access to Create/Cancel buttons on tall skill lists |
| [#974](https://github.com/netease-youdao/LobsterAI/pull/974) | security | Reject protocol-relative URLs (`//evil.com`) in markdown links — closes whitelist bypass | Security: high — prevents URL scheme confusion attacks |
| [#975](https://github.com/netease-youdao/LobsterAI/pull/975) | im | Fix Xiaomifeng gateway unrecoverable after kick-offline — clears `v2Client` on disconnect | Stability: high — restores auto-reconnect after forced logout |
| [#1034](https://github.com/netease-youdao/LobsterAI/pull/1034) | security | Validate `shell:openExternal` IPC — allow only `http:`/`https:` protocols | Security: high — blocks `file://`, `ms-excel://`, custom scheme injection |
| [#1037](https://github.com/netease-youdao/LobsterAI/pull/1037) | openclaw | Fix Windows `node` not found when WSL + Git Bash coexist — robust PATH resolution | Build/Compat: medium — unblocks Windows OpenClaw runtime builds |

**Open PR:** [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Dependabot Electron bump (43.5.0 → 44.4.5), pending review.

## 4. Community Hot Topics
All 5 recently updated issues are **stale (created March 2026)**, reactivated by triage/comments on 2026-09-28. No new community reports in the last 24h.

| Issue | Status | Comments | Core Need |
|-------|--------|----------|-----------|
| [#1035](https://github.com/netease-youdao/LobsterAI/issues/1035) | **Closed** | 2 | **Fixed**: NimGateway message deduplication cache not cleared on reconnect → silent message loss |
| [#968](https://github.com/netease-youdao/LobsterAI/issues/968) | Open | 1 | Skill-creator weather query shows wrong location & browser doesn’t close — **tool execution/cleanup bug** |
| [#971](https://github.com/netease-youdao/LobsterAI/issues/971) | Open | 1 | Model outputs garbled/irrelevant content (novel cover request) — **output parsing or prompt contamination** |
| [#972](https://github.com/netease-youdao/LobsterAI/issues/972) | Open | 1 | QWEN model: gateway startup loop ("AI engine starting gateway") after model toggle — **gateway state machine bug** |
| [#973](https://github.com/netease-youdao/LobsterAI/issues/973) | Open | 1 | macOS shortcuts show `Ctrl` not `Cmd` — **platform convention violation** |

**Underlying pattern:** Gateway lifecycle (#972, #1035), tool execution hygiene (#968), and cross-platform polish (#973) are recurring pain points. The March vintage suggests these were deferred; recent PRs (#2775, #2772) address gateway startup but not the specific QWEN toggle loop (#972).

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **Critical** | [#2772](https://github.com/netease-youdao/LobsterAI/pull/2772) | Startup deadlock: legacy session counter includes skipped CJK dirs → gate never clears | ✅ Merged |
| **Critical** | [#2775](https://github.com/netease-youdao/LobsterAI/pull/2775) | Gateway spawned 3× on launch (IM sync + MCP bridge race) → 80s delay, 3 unavailability windows | ✅ Merged |
| **High** | [#1035](https://github.com/netease-youdao/LobsterAI/issues/1035) | NimGateway global `processedMessages` cache persists across reconnects → valid messages dropped silently | ✅ Fixed in #1035 (closed) |
| **High** | [#975](https://github.com/netease-youdao/LobsterAI/pull/975) | Xiaomifeng gateway unrecoverable after kick-offline (stale `v2Client` blocks restart) | ✅ Merged |
| **High** | [#1034](https://github.com/netease-youdao/LobsterAI/pull/1034) | `shell:openExternal` IPC accepts any protocol (`file://`, custom schemes) | ✅ Merged |
| **High** | [#974](https://github.com/netease-youdao/LobsterAI/pull/974) | Protocol-relative URLs bypass markdown link sanitizer | ✅ Merged |
| **Medium** | [#972](https://github.com/netease-youdao/LobsterAI/issues/972) | QWEN model toggle → gateway startup loop, UI stuck on "AI engine starting gateway" | ⚠️ **Open** — no linked fix PR |
| **Medium** | [#971](https://github.com/netease-youdao/LobsterAI/issues/971) | Model outputs irrelevant/garbled content (possible streaming/parse error) | ⚠️ **Open** |
| **Medium** | [#968](https://github.com/netease-youdao/LobsterAI/issues/968) | Skill-creator browser automation: wrong location data, browser not closed | ⚠️ **Open** |
| **Low** | [#973](https://github.com/netease-youdao/LobsterAI/issues/973) | macOS shortcuts display `Ctrl` instead of `Cmd` | ⚠️ **Open** — trivial fix, high polish value |

## 6. Feature Requests & Roadmap Signals
- **Document editing (PPT/Word/Excel)** — delivered in [#2776](https://github.com/netease-youdao/LobsterAI/pull/2776); signals expansion of artifact/skill system to Office suite.
- **OpenClaw progress visibility** — [#2778](https://github.com/netease-youdao/LobsterAI/pull/2778) surfaces agent plans; likely first step toward richer agent observability (step drill-down, plan editing).
- **Conversation density control** — [#2777](https://github.com/netease-youdao/LobsterAI/pull/2777) auto-collapses verbose turns; hints at future "summarize long turns" or "token budget" features.
- **Gateway reliability** — multiple fixes (#2775, #2772, #2774) indicate a push to harden OpenClaw integration before GA.
- **Cross-platform parity** — Windows Node.js fix (#1037), macOS shortcut fix (#973) show attention to platform conventions.

**Prediction:** Next release will bundle OpenClaw gateway stabilization, document editing, and progress-card UX. macOS shortcut fix (#973) is a quick win likely to slip in.

## 7. User Feedback Summary
- **Pain points:** Gateway startup loops (#972), silent message loss on reconnect (#1035), tool automation leaks (browser not closing #968), model output corruption (#971).
- **Use cases:** Custom agents with skill-creator (weather, browsing), novel cover generation, QWEN model switching, long-running DeepSeek tasks.
- **Satisfaction signals:** No new issues filed in 24h; stale issues reactivated by maintainers (triage), not users. High PR throughput suggests team is responsive but backlog of March issues indicates delayed follow-through.
- **Dissatisfaction:** "Stuck on gateway startup" (#972) and "browser not closing" (#968) are UX-breaking for non-technical users.

## 8. Backlog Watch — Needs Maintainer Attention

| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#972](https://github.com/netease-youdao/LobsterAI/issues/972) | 6 months | **High** | QWEN model toggle breaks gateway — blocks model switching workflow; no fix PR linked despite gateway fixes in #2775 |
| [#971](https://github.com/netease-youdao/LobsterAI/issues/971) | 6 months | **Medium** | Garbled output may indicate streaming/tokenizer bug; affects trust in model responses |
| [#968](https://github.com/netease-youdao/LobsterAI/issues/968) | 6 months | **Medium** | Skill-creator browser automation unreliable — core "agent uses tools" promise |
| [#973](https://github.com/netease-youdao/LobsterAI/issues/973) | 6 months | **Low** | macOS convention violation — easy fix, high polish signal |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 5 months | **Medium** | Electron 44 upgrade pending — may contain security/performance fixes; blocked on test pass |

**Recommendation:** Prioritize #972 (gateway state machine) and #968 (tool cleanup) for next sprint. Assign #973 to a contributor for quick win. Review #1277 for Electron 44 compatibility before next release branch cut.

---

*Digest generated from GitHub data as of 2026-09-29. Links point to netease-youdao/LobsterAI.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-29

## 1. Today's Overview
CoPaw shows **high velocity with strong contributor diversity**: 20 PRs updated and 8 issues touched in the last 24 hours, with 7 PRs merged/closed and 3 issues resolved. The merged work spans QQ gateway duplicate-message fixes, console font-scaling unification, modal transition stabilization, model-discovery warning improvements, and an AgentScope dependency bump. Open PRs reveal ongoing investment in durable chat history, TaskTracker correctness, Telegram markdown rendering, sandbox ACL safety on Windows, and CLI startup performance. No release was cut today, but the volume of “ready-for-review” and first-time-contributor PRs signals an imminent patch or beta.

## 2. Releases
**No new releases published today.** The latest stable remains `2.2.1` (PyPI); the main branch currently reports `2.2.2b4`.

## 3. Project Progress — Merged / Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#8006](https://github.com/agentscope-ai/QwenPaw/pull/8006) | Bug fix | Deduplicate QQ gateway replayed events by ID + sequence after session resume | Prevents double agent turns & duplicate tool confirmations |
| [#7983](https://github.com/agentscope-ai/QwenPaw/pull/7983) | Bug fix | Same QQ replay issue (alternate implementation) | Redundant fix merged alongside #8006 |
| [#8014](https://github.com/agentscope-ai/QwenPaw/pull/8014) | Enhancement | Enrich model-discovery fallback warnings with provider ID & sanitized error | Improves observability for multi-provider setups |
| [#8008](https://github.com/agentscope-ai/QwenPaw/pull/8008) | Chore | Bump AgentScope to `2.0.9` | Dependency alignment, likely brings upstream fixes |
| [#8005](https://github.com/agentscope-ai/QwenPaw/pull/8005) | Feature | Unified console font scaling (12–20 px) with persistence & semantic tokens | Addresses #7999; improves accessibility & high-DPI UX |
| [#8019](https://github.com/agentscope-ai/QwenPaw/pull/8019) | Bug fix | Restore chat icon sizing & truncate project labels | Visual regression fix from font-scaling work |
| [#8016](https://github.com/agentscope-ai/QwenPaw/pull/8016) | Bug fix | Stabilize modal / tool-config transitions (remove default overlay transition) | Eliminates flicker & layout shift in settings dialogs |

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) — *feat(chat): durable paginated transcript history* | 7 days open, large diff, no merge yet | **Persistent, searchable chat history** across restarts; critical for power users & audit trails |
| [#8015](https://github.com/agentscope-ai/QwenPaw/issues/8015) — *Custom Skill/Plugin marketplace sources* | Created today, 1 comment | **Air-gapped / intranet deployment** support; enterprise adoption blocker |
| [#8013](https://github.com/agentscope-ai/QwenPaw/issues/8013) — *Skill download 30 s timeout for large skills* | Created today, 1 comment | **Large-plugin distribution** (e.g., 80 MB, 13 k files) fails due to hard-coded frontend timeout |
| [#8009](https://github.com/agentscope-ai/QwenPaw/issues/8009) / [#8010](https://github.com/agentscope-ai/QwenPaw/pull/8010) — *Oversized image kills session permanently* | Issue + fix PR same day | **Session resilience** when provider rejects media; high severity for multimodal workflows |

## 5. Bugs & Stability — Ranked by Severity
| Rank | Issue / PR | Severity | Status | Notes |
|------|------------|----------|--------|-------|
| 1 | [#8009](https://github.com/agentscope-ai/QwenPaw/issues/8009) / [#8010](https://github.com/agentscope-ai/QwenPaw/pull/8010) | **Critical** — session permanently broken after single oversized image | Fix PR open (first-time contributor) | Replay of rejected media payload poisons all future turns |
| 2 | [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | **High** — TaskTracker zombie entries inflate running-task count | Open | Dashboard vs. API count mismatch; may confuse autoscaling / quotas |
| 3 | [#8013](https://github.com/agentscope-ai/QwenPaw/issues/8013) | **High** — Large skill install always fails at 30 s | Open | Frontend `AbortController` + backend still copying; skill never lands |
| 4 | [#8011](https://github.com/agentscope-ai/QwenPaw/issues/8011) / [#8012](https://github.com/agentscope-ai/QwenPaw/pull/8012) | **Medium** — Telegram HTML formatter breaks on `c++`, `~~~` fences, nested fences | Fix PR open | Affects code-rich channels; first-time contributor fix |
| 5 | [#7871](https://github.com/agentscope-ai/QwenPaw/pull/7871) | **Medium** — Tool output truncation bypass via literal `<<<TRUNCATED>>>` marker | Open (9 days) | Could leak oversized tool results into context |
| 6 | [#8018](https://github.com/agentscope-ai/QwenPaw/pull/8018) | **Medium** — Windows sandbox ACL written on volume root propagates to all children | Open | Security/reliability risk for Windows sandbox users |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Self-hosted / offline Skill & Plugin marketplace** | [#8015](https://github.com/agentscope-ai/QwenPaw/issues/8015) | High — explicit “needed for intranet/air-gapped deployments” |
| **Durable, paginated chat transcript storage** | [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) | High — large PR, near-complete, addresses long-standing gap |
| **Console font scaling (12–20 px)** | [#8005](https://github.com/agentscope-ai/QwenPaw/pull/8005) ✅ merged | **Already in main** — will ship in next cut |
| **Telegram markdown code-fence hardening** | [#8012](https://github.com/agentscope-ai/QwenPaw/pull/8012) | Medium — targeted fix, low risk |
| **Playwright default-arg exclusions** | [#7987](https://github.com/agentscope-ai/QwenPaw/pull/7987) | Medium — niche but clean first-time contribution |
| **Grep search skipping binary/internal files** | [#7988](https://github.com/agentscope-ai/QwenPaw/pull/7988) | Medium — improves tool hygiene |
| **CLI startup lazy-import (`init_cmd`)** | [#8004](https://github.com/agentscope-ai/QwenPaw/pull/8004) | Medium — ~5 s cold-start win, low risk |

## 7. User Feedback Summary
- **Accessibility / ergonomics**: Strong demand for configurable UI font size (#7999 → #8005 merged); Linux desktop zoom still broken (#6252 closed but may need verification).
- **Enterprise / air-gapped**: Explicit request for custom plugin marketplaces (#8015) — signals growing intranet adoption.
- **Reliability with large assets**: Two independent reports of large-file handling failures (skill download #8013, oversized image #8009).
- **Telegram power users**: Code-block rendering regressions with modern language tags (`c++`, `objective-c`) and fence styles (#8011).
- **Session integrity**: Users expect conversations to survive provider-level media rejections (#8009).

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) — Durable transcript history | 7 days | Large feature PR; merges will unblock history-dependent workflows |
| [#7871](https://github.com/agentscope-ai/QwenPaw/pull/7871) — Truncation bypass | 11 days | Security/reliability edge case; no review movement |
| [#8003](https://github.com/agentscope-ai/QwenPaw/pull/8003) — CI cross-platform path fixes | 1 day | Blocks Windows CI reliability; test updates included |
| [#8018](https://github.com/agentscope-ai/QwenPaw/pull/8018) — Windows sandbox ACL on volume root | 0 days | Potential permission leakage; Windows-specific but high impact |
| [#7987](https://github.com/agentscope-ai/QwenPaw/pull/7987) / [#7988](https://github.com/agentscope-ai/QwenPaw/pull/7988) / [#7989](https://github.com/agentscope-ai/QwenPaw/pull/7989) — First-time contributor browser/tool/console fixes | 4 days | Cluster of quality-of-life fixes from new contributor; good signal for community health |

---
*Data sourced from GitHub API (agentscope-ai/QwenPaw) for 2026-09-29. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-09-29

## 1. Today's Overview
ZeptoClaw shows focused development activity with **2 new issues** and **1 open pull request** in the last 24 hours, all authored or driven by the maintainer (qhkm) except one community question. No releases were published. The project is actively iterating on tool-output handling (spilling large outputs to disk) while a user inquires about a "goal mode" workflow. Overall health appears **steady**: maintainer-led improvements are moving forward, and community engagement is present but low-volume.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
**Merged/closed PRs today: 0**  
**Open PR advancing a feature:**
- **#708** — `feat(tools): spill oversized tool output instead of discarding it`  
  Implements writing tool output exceeding 2,000 lines / 50 KB to `~/.zeptoclaw/sessions/<key>/spill/<seq>-<tool>.txt` (0600 perms, 0700 dir) and replaces the truncated content in context with a preview, file path, and one-line summary. This directly addresses the data-loss problem described in **#707**.  
  [View PR #708](https://github.com/qhkm/zeptoclaw/pull/708)

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| **[#709](https://github.com/qhkm/zeptoclaw/issues/709)** | Issue | 0 comments, 0 👍 | User asks for a **“goal mode”** (like ohmypi/omp) where the agent autonomously iterates until a condition is met — signals demand for higher-level, outcome-driven automation. |
| **[#707](https://github.com/qhkm/zeptoclaw/issues/707)** | Issue | 0 comments, 0 👍 | **P2-high** feature request: stop discarding large tool output; make it recoverable. Maintainer has already opened **PR #708** implementing the spill-to-disk solution. |
| **[#708](https://github.com/qhkm/zeptoclaw/pull/708)** | PR | 0 comments, 0 👍 | Concrete implementation of the spill mechanism; ready for review/merge. |

*Underlying theme:* Users want **more autonomous, resilient agent loops** (goal mode) and **no silent data loss** when tools emit large results.

## 5. Bugs & Stability
**No bug reports, crashes, or regressions filed in the last 24 hours.**  
The only stability-adjacent item is **#707/PR #708**, which fixes a *design limitation* (silent truncation) rather than a runtime defect.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Goal/autonomous mode** (run until condition met) | #709 (community) | Medium — requires significant loop/orchestration changes; may be scoped for a future milestone. |
| **Spill oversized tool output to disk** | #707 (maintainer) + PR #708 | **High** — PR is open and complete; likely to merge soon. |
| **Recoverable tool-output access** (via spill files) | Implied by #707/PR #708 | High — part of the same PR. |

## 7. User Feedback Summary
- **Pain point:** *“Tool output larger than 2,000 lines / 50 KB is truncated and discarded — the model has no way to reach the missing bytes.”* (#707)
- **Use case requested:** *“A /goal mode where the agent continues working until a condition is met.”* (#709) — indicates desire for **declarative, outcome-oriented workflows** rather than step-by-step prompting.
- **Sentiment:** Neutral to constructive; no dissatisfaction expressed, but clear feature gaps identified.

## 8. Backlog Watch
No long-unanswered issues/PRs surfaced in today’s data. The two new items (#707, #709) are fresh (created 2026-09-28) and have **zero comments** — maintainer attention is needed to:
1. **Review/merge PR #708** (spill feature) — ready to land.
2. **Triage #709** (goal mode) — decide whether to scope, defer, or close with guidance.

---

*Digest generated from GitHub data as of 2026-09-29. All links point to the live ZeptoClaw repository (qhkm/zeptoclaw).*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-29

## 1. Today's Overview

ZeroClaw shows **high-velocity, security-focused development** with 50 PRs and 13 issues updated in the last 24 hours. The project is in a **major architectural transition**: completing the OIDC authentication milestone (#8289), executing a breaking Schema V4 config cut (#8310, #8754, #11218), and rolling out RPC parity for gateway-split (#11001) across cron, memory, skills, SOP, and core methods. Critically, **three S0-severity security bugs** were filed in the past 48 hours around principal scope leakage, session resume after admin revocation, and wildcard tool authorization bypass — all with active fix PRs. No new release was cut today; the codebase is clearly in a pre-release stabilization window.

## 2. Releases

**No new releases published today.** The latest activity indicates the project is preparing for a v0.9.0 milestone (gateway split, OIDC completion, Schema V4). Expect a release once the current security regressions (#11198, #11197, #11123) and RPC parity lanes (P4–P6) are merged and regression-tested.

## 3. Project Progress — Merged / Closed in Last 24h

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#11175](https://github.com/zeroclaw-labs/zeroclaw/pull/11175) | **feat(zerocode): add standard composer editing** (CLOSED) | ZeroCode UX | Delivers undo/redo, keyboard selection, select-all, cut/copy, word deletion in shared Chat/Code composer; resolves #10909. |
| [#11082](https://github.com/zeroclaw-labs/zeroclaw/pull/11082) | *Consolidated OIDC enrollment, gateway, private-memory, migration* (merged earlier, referenced in #8289) | Auth / Security | Core OIDC stack landed; tracker #8289 now in close-out. |
| [#11212](https://github.com/zeroclaw-labs/zeroclaw/pull/11212) | **feat(channels/wecom-ws): deliver outbound images and files** (OPEN, active) | Channels / WeCom | Implements proactive media send via `zeroclaw channel send`; addresses #7824 (icebox → active). |
| [#11191](https://github.com/zeroclaw-labs/zeroclaw/pull/11191) | **fix(config): remove retired `[security.nevis]` table on incremental saves** | Config / OIDC close-out | On-disk cleanup for deprecated Nevis config; part of #8289 stage 6. |
| [#11227](https://github.com/zeroclaw-labs/zeroclaw/pull/11227) | **fix(runtime): repair `logs_subscribe_carries_observer_frames_without_a_gateway` test** | Tests / Runtime | Fixes flaky test introduced in #11131; ensures CI stability. |

> **Note**: 12 PRs show "merged/closed" status in the 24h window; the above are the most visible. Many merges are part of stacked PR chains (e.g., #11176, #11182, #11169 for RPC parity; #11205 + #11223 for authority recheck).

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) | Issue (Tracker) | 4 | **OIDC milestone close-out** — canonical principals, inbound auth, migration. 5 sub-PRs merged; final config cleanup (#11191) underway. |
| [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) | Bug (S0) | 3 | **Delegated memory tools lose principal scope** — child agents can access parent's private memory plane. Fix PR: [#11225](https://github.com/zeroclaw-labs/zeroclaw/pull/11225) (stacked under #11230). |
| [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) | Bug (S0) | 3 | **Session resume restores forwarded env after admin revocation** — admission checks stale snapshot. |
| [#11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) | Bug (P1) | 2 | **Queued session ops retain revoked admin ownership** — #10412 is partial fix; other stale-grant paths remain. |
| [#10909](https://github.com/zeroclaw-labs/zeroclaw/issues/10909) | Enhancement | 3 | **ZeroCode standard text editing** — now delivered via #11175. |
| [#11205](https://github.com/zeroclaw-labs/zeroclaw/pull/11205) | PR (XL) | — | **Authority recheck foundation** — design reviewed adversarially (D1–D8); ratchet for revocation enforcement. Blocking #11223 (test ratchet). |
| [#11176](https://github.com/zeroclaw-labs/zeroclaw/pull/11176) | PR (XL) | — | **RPC parity: cron, memory, skills, personality, quickstart** — P4 of v0.9.0 gateway split. Closes cron pre-approval bypass. |
| [#11182](https://github.com/zeroclaw-labs/zeroclaw/pull/11182) | PR (XL) | — | **RPC core parity: workspace, catalog, canvas, pairing, channels, system** — P6 of gateway split. |

**Underlying theme**: The community (mainly core maintainers) is **simultaneously hardening security boundaries (principal scope, revocation, authorization)** and **completing the RPC/gateway split** — two high-risk, high-value tracks that must converge before v0.9.0.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Component | Status | Fix PR |
|----------|-------|-----------|--------|--------|
| **S0** | [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) Delegated memory tools lose principal scope | `memory`, `tool:delegate` | Open, accepted | [#11225](https://github.com/zeroclaw-labs/zeroclaw/pull/11225) (stacked → #11230) |
| **S0** | [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) Session resume restores forwarded env after admin revocation | `security/sandbox` | Open, accepted | — (design tracked in #11205 recheck) |
| **S0** | [#11123](https://github.com/zeroclaw-labs/zeroclaw/issues/11123) SOP execution accepts wildcard tool selectors without `tools:execute` | `security/sandbox`, `tool:sop` | Open, accepted | — |
| **P1** | [#11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) Queued session ops retain revoked admin ownership | `runtime`, `channel:acp` | Open | Partial: [#10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412) |
| **P2** | [#11009](https://github.com/zeroclaw-labs/zeroclaw/issues/11009) Agent alias rename does not cascade permission-profile selectors | `config`, `auth` | Open, follow-up | — |
| **S2** | [#11215](https://github.com/zeroclaw-labs/zeroclaw/issues/11215) Tool calling fails on OpenCode Go (`name` field on tool messages) | `provider` | Open | — |

> **Stability signal**: Three S0 bugs in 48h indicates **regression risk in recent auth/sandbox changes**. The authority recheck (#11205) and delegated-tool scoping (#11225/#11230) are the primary mitigation path. No crash/regression reports from end-users in this window — bugs are caught via internal review/adversarial design.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Schema V4 breaking cut** — remove dead/inert/SaaS/CLI-wrapper config | [#8310](https://github.com/zeroclaw-labs/zeroclaw/issues/8310), [#8754](https://github.com/zeroclaw-labs/zeroclaw/pull/8754), [#11218](https://github.com/zeroclaw-labs/zeroclaw/pull/11218), [#11217](https://github.com/zeroclaw-labs/zeroclaw/pull/11217) | **Very High** — multiple PRs active, migration logic landing |
| **RPC parity for all gateway HTTP routes** (cron, memory, skills, SOP, core, workspace, canvas, pairing) | [#11176](https://github.com/zeroclaw-labs/zeroclaw/pull/11176), [#11169](https://github.com/zeroclaw-labs/zeroclaw/pull/11169), [#11182](https://github.com/zeroclaw-labs/zeroclaw/pull/11182) | **High** — P4/P5/P6 lanes in review; gateway split (#11001) blocked on these |
| **ZeroCode agent deletion & bulk cleanup** | [#10244](https://github.com/zeroclaw-labs/zeroclaw/issues/10244) | **Medium** — in-progress, UX polish |
| **WeCom WS proactive messaging + media send** | [#7824](https://github.com/zeroclaw-labs/zeroclaw/issues/7824), [#11212](https://github.com/zeroclaw-labs/zeroclaw/pull/11212) | **Medium** — PR open, moves from icebox |
| **Self-serve relay enrollment (`relay claim`)** | [#10592](https://github.com/zeroclaw-labs/zeroclaw/pull/10592) | **Medium** — distinguished contributor, needs maintainer review |
| **Internal-principal envelope + separated cron outcomes** (RFC #6954) | [#10425](https://github.com/zeroclaw-labs/zeroclaw/pull/10425) | **Medium** — 1/3 slices, needs maintainer review |

**Prediction**: v0.9.0 will ship **Schema V4 + OIDC complete + RPC parity (P4–P6) + authority recheck**. ZeroCode composer fixes (#11175) and WeCom media (#11212) are likely inclusions. Agent deletion (#10244) and relay claim (#10592) may slip to 0.9.1.

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|------------------------|----------|-----------|
| **ZeroCode composer lacks basic editing** (undo, select-all, cut) | [#10909](https://github.com/zeroclaw-labs/zeroclaw/issues/10909) → fixed in [#11175](https://github.com/zeroclaw-labs/zeroclaw/pull/11175) | 😊 **Resolved** — "accidental edit to long prompt can be recovered" |
| **WeCom WS cannot send messages proactively or attach media** | [#7824](https://github.com/zeroclaw-labs/zeroclaw/issues/7824) (icebox → active) | 😐 **Waiting** — PR #11212 addresses; user `jokewithme110` created issue 3 months ago |
| **OpenCode Go rejects `name` field on tool messages** | [#11215](https://github.com/zeroclaw-labs/zeroclaw/issues/11215) (new, S2) | 😟 **Regression** — introduced in #7909; affects OpenAI-compatible providers |
| **Agent management in ZeroCode incomplete (no delete)** | [#10244](https://github.com/zeroclaw-labs/zeroclaw/issues/10244) | 😐 **In progress** — "quickstart, testing, CI all need cleanup" |
| **Config migration breaks hand-written V3 files without `schema_version`** | [#11217](https://github.com/zeroclaw-labs/zeroclaw/pull/11217) | 😟 **Hidden breakage** — detected during V4 work; fix prevents silent V1→V3 migration |

**Overall**: Users (mostly internal/contributor) experience **sharp edges in provider compatibility and config migration**, but core UX gaps (composer editing) are being closed rapidly. Security regressions are caught pre-release.

## 8. Backlog Watch — Stale / High-Value Items Needing Attention

| Item | Age | Why It Matters | Blocker |
|------|-----|----------------|---------|
| [#10425](https://github.com/zeroclaw-labs/zeroclaw/pull/10425) Internal-principal envelope (RFC #6954, 1/3) | 32 days | Foundation for cron/peer-agent identity; enables clean RPC auth | Needs maintainer review; `needs-maintainer-review` label |
| [#10592](https://github.com/zeroclaw-labs/zeroclaw/pull/10592) Self-serve relay enrollment | 26 days | Operator UX for daemon onboarding; distinguished contributor | Needs maintainer review |
| [#10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412) Atomic session-ownership claim | 33 days | Critical for fixing #11126 (revoked admin bypass); shared contract | Open, partial implementation noted in #11126 |
| [#8754](https://github.com/zeroclaw-labs/zeroclaw/pull/8754) Schema V4 full cut (skills, inert, SaaS) | 85 days | Massive breaking change; superseded by incremental PRs (#11218, #11217) but still open | Author action needed; `needs-author-action` |
| [#7824](https://github.com/zeroclaw-labs/zeroclaw/issues/7824) WeCom WS proactive messaging | 104 days | Long-standing channel gap; now has active PR (#11212) | Was icebox; PR needs review |
| [#8310](https://github.com/zeroclaw-labs/zeroclaw/issues/8310) Schema V4 tracker | 96 days | Umbrella for config breaking change; multiple PRs in flight | Tracking — close when #11218/#11217 merge |

---

### Project Health Indicators (2026-09-29)

| Metric | Signal |
|--------|--------|
| **Security posture** | ⚠️ **Elevated risk** — 3 S0 bugs active; authority recheck (#11205) is the linchpin |
| **Release readiness** | 🟡 **Pre-release churn** — no release today; stacked PRs, schema migration, RPC parity all in flight |
| **Contributor velocity** | 🟢 **Very high** — 50 PR updates, stacked work, multiple distinguished contributors |
| **Technical debt paydown** | 🟢 **Active** — Schema V4 cut, OIDC close-out, dead config removal |
| **Community breadth** | 🟡 **Core-heavy** — issues/PRs driven by ~5–6 maintainers; limited external issue reporters |

**Bottom line**: ZeroClaw is in a **controlled but intense refactoring

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*