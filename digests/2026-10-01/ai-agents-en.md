# OpenClaw Ecosystem Digest 2026-10-01

> Issues: 165 | PRs: 500 | Projects covered: 12 | Generated: 2026-10-01 05:28 UTC

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

# OpenClaw Project Digest — 2026-10-01

## 1. Today's Overview

OpenClaw shows **exceptionally high velocity** with 165 issues and 500 PRs updated in the last 24 hours. The project has **46 active/open issues** and **336 open PRs**, with 119 issues and 164 PRs closed/merged — indicating a healthy throughput. No new releases were published today. The issue backlog is dominated by **P0/P1 stability bugs** around SQLite WAL growth, gateway crash-loops, session state corruption, and Windows-specific regressions introduced in the 2026.9.x series. PR activity leans heavily toward **performance optimization, test cleanup, and infrastructure refactoring** (e.g., lazy node loading, test consolidation, script deduplication), suggesting the team is stabilizing the 2026.9.x line while paying down technical debt.

---

## 2. Releases

**No new releases today.** The latest version remains **2026.9.7** (implied by issues #161746, #162031, #162047). The 2026.9.x series has seen multiple regression reports (#153257, #161746, #162031, #162047), so a patch release (2026.9.8) is likely imminent once P0 blockers are resolved.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#158000](https://github.com/openclaw/openclaw/pull/158000) | Models/Gateway | Apply downloaded model catalogs without Gateway restart | Eliminates restart requirement for catalog updates |
| [#162400](https://github.com/openclaw/openclaw/pull/162400) | Scripts/Docker | Deslop shared tooling, remove unused translation runner | Reduces script maintenance burden |
| [#136653](https://github.com/openclaw/openclaw/pull/136653) | Google Chat | Fix automatic replies discarding typing thread | Prevents message loss in Google Chat integration |
| [#82121](https://github.com/openclaw/openclaw/pull/82121) | Core/UI | Fix leaked truncation sentinels in assistant replies | Improves UX; removes `...(truncated)...` leakage |
| [#151792](https://github.com/openclaw/openclaw/pull/151792) | Feishu/Lark | Fix inbound files silently dropped in rich-text `post` | Restores file handling for multi-file/caption messages |
| [#159897](https://github.com/openclaw/openclaw/pull/159897) | Updates/Windows | Clear stale managed-update handoff lease from dead triage | Unblocks `openclaw update` on Windows |
| [#120616](https://github.com/openclaw/openclaw/pull/120616) | Cron/Gemini | Fix dotted cron update fields causing patch-required failures | Stops repeated retries consuming session context |
| [#108984](https://github.com/openclaw/openclaw/pull/108984) | Claude CLI | Fix byte-guard compaction wiping claude-cli sessions | Preserves native Claude Code session state |
| [#161654](https://github.com/openclaw/openclaw/pull/161654) | Windows/Cron | Fix DataCloneError from win32 process.env Proxy | Resolves cron/agent job failures on Windows |
| [#161610](https://github.com/openclaw/openclaw/pull/161610) | Codex/Chat | Fix diagnostic-log warnings replaying across chat turns | Stops spurious warning replay in later turns |

**Theme:** Today's merges focus on **message delivery reliability** (Feishu, Google Chat, truncation), **Windows/cron stability**, **update system robustness**, and **provider integration fixes** (OpenAI SIWC, Gemini, Codex).

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Priority | Core Need |
|------|----------|----------|-----------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) SQLite WAL unbounded growth (Windows) | 100 | P0 🦐 | **Critical data-layer bug**: WAL file grows to 2.8 GB, blocks gateway startup. `wal_autocheckpoint=1000` ineffective. Needs SQLite checkpointing fix or WAL truncation strategy. |
| [#153257](https://github.com/openclaw/openclaw/issues/153257) 2026.9.5 → 8-hour recovery | 40 | P0 🦪 | **Release regression**: Stable env broken by 9.5. Users demand rollback safety, better upgrade validation, and post-upgrade health checks. |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie child process leak | 17 | P1 🦪 | **Resource leak**: Unreaped hook/tool children accumulate as zombies, degrading runtime. Needs proper `waitpid`/reaping in hook executor. |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) Reply lost on turn displacement | 16 | P1 🐚 | **Session integrity**: Second run displaces in-flight turn → reply lost with "no active tool authority snapshot". Needs atomic turn handoff or reply persistence. |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) Billing cooldown outlives outage | 8 | P0 🦞 | **Auth resilience**: Fixed 5-hr cooldown on billing errors hurts subscription users. Needs probe-based recovery, shorter TTL, manual reset CLI. |
| [#158239](https://github.com/openclaw/openclaw/issues/158239) Gateway start failure on kernel < 5.6 | 7 | P0 🦞 | **Compatibility regression**: JS fs-safe fallback breaks on older kernels (Synology, etc.). Needs fallback hardening or kernel version gating. |
| [#162031](https://github.com/openclaw/openclaw/issues/162031) 2026.9.7 crash-loop on tool assembly | 4 | P0 🦪 | **New regression**: Gateway crash-loops with "Unhandled promise rejection: undefined" during runtime tool schema build. Blocks all agents. |
| [#162047](https://github.com/openclaw/openclaw/issues/162047) Windows Doctor 35-min hardlink validation | 4 | P0 🦞 | **Upgrade performance**: Doctor spends 39 min in hardlink namespace validation. Needs caching or parallelization. |

**Underlying needs:** Users are experiencing **release quality erosion** in 2026.9.x — crash-loops, data loss, upgrade pain, and platform regressions. The community is signaling a need for **stabilization sprints**, **better pre-release testing on Windows/older Linux**, and **rollback/restore tooling** (see #149684).

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? | Notes |
|----------|-------|--------|---------|-------|
| **P0 — Crash-loop/Startup Block** | [#143524](https://github.com/openclaw/openclaw/issues/143524) SQLite WAL grows to 2.8 GB (Windows) | Open | No | Blocks gateway startup; manual `wal_checkpoint(TRUNCATE)` only temporary |
| **P0 — Crash-loop/Startup Block** | [#162031](https://github.com/openclaw/openclaw/issues/162031) Gateway crash-loops on tool assembly (2026.9.7) | Open | No | "Unhandled promise rejection: undefined" — all agents down |
| **P0 — Crash-loop/Startup Block** | [#158239](https://github.com/openclaw/openclaw/issues/158239) Gateway fails on kernel < 5.6 (fs-safe fallback) | Open | No | Affects Synology, older Linux; JS fallback race condition |
| **P0 — Data Loss/Message Loss** | [#148707](https://github.com/openclaw/openclaw/issues/148707) Reply lost on turn displacement | Open | No | "Reply operation has no active tool authority snapshot" |
| **P0 — Auth/Availability** | [#115642](https://github.com/openclaw/openclaw/issues/115642) Billing cooldown 5 hr fixed, no probe recovery | Open | No | Subscription users locked out after transient billing error |
| **P0 — Upgrade/Recovery** | [#161746](https://github.com/openclaw/openclaw/issues/161746) "Shared-state database generation changed" retry loop post-9.7 | Closed | Likely | Fixed by #157733/#157696 but new loop emerged |
| **P1 — Resource Leak** | [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie child process accumulation | Open | No | Hook/tool children not reaped; degrades over time |
| **P1 — Session State** | [#147420](https://github.com/openclaw/openclaw/issues/147420) Computer execution never released (MCP tool) | Open | No | `COMPUTER_HOST_BUSY` permanent; no timeout |
| **P1 — Windows/Cron** | [#161654](https://github.com/openclaw/openclaw/issues/161654) DataCloneError from win32 process.env Proxy | Closed | Yes | Cron/agent jobs fail; fixed in PR |
| **P2 — Memory/Recall** | [#150635](https://github.com/openclaw/openclaw/issues/150635) Short-term recall evicts entries, dreaming never promotes | Open | No | 512-entry cap + nightly zero-recall ingestion breaks promotion |

**Observation:** 5 of the top 10 issues are **P0 release-blockers** introduced in 2026.9.x. Only 2 have fix PRs linked. The project is in a **stabilization crisis** for the current release line.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Votes | Signal | Likelihood for Next Version |
|-------|-------|--------|----------------------------|
| [#149684](https://github.com/openclaw/openclaw/issues/149684) Restore points for install rollback | 0 | High — direct response to upgrade pain | **High** — PR #162403/#162429 already improving rehearsal/backup logic |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) Probe-based auth cooldown recovery | 0 | High — subscription users blocked | **Medium** — needs security review; manual reset CLI is tractable |
| [#149454](https://github.com/openclaw/openclaw/issues/149454) `before_tool_call` onResolution refusal | 0 | Medium — plugin safety | **Low** — needs product decision; security-sensitive |


---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-10-01)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows a **bimodal distribution of maturity**: a few large, high-velocity projects (OpenClaw, ZeroClaw, CoPaw, Hermes Agent, NanoBot, NanoClaw, LobsterAI) are in active stabilization or pre-release phases with 10–500+ daily PR/issue updates, while half the landscape (NullClaw, IronClaw, Moltis, PicoClaw, ZeptoClaw) operates in quiet maintenance or low-velocity feature iteration. **No project shipped a stable release today**—most are between versions, addressing regression clusters from recent 2026.9.x series. The dominant theme across active projects is **hardening release quality**: fixing Windows/cron regressions, SQLite WAL growth, gateway crash-loops, provider integration fragility, and update/rollback reliability. Security boundaries (sandbox escapes, memory isolation, auth cooldowns) and multi-channel session unity are emerging as cross-cutting priorities.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Open Issues | Open PRs | Latest Release | Release Status | Health Score* |
|---------|---------------------|-------------------|-------------|----------|----------------|----------------|---------------|
| **OpenClaw** | 165 | 500 | 46 | 336 | 2026.9.7 | Stalled (P0 blockers) | 🟡 **Medium** — High throughput but stabilization crisis |
| **ZeroClaw** | 12 | 50 | 12+ | 50+ | — (target v0.9.0) | Pre-release refactor | 🟡 **Medium** — Massive velocity, zero merges, S0 bugs open |
| **CoPaw** | 18 | 34 | — | — | v2.2.2-beta.4 | Beta cycle active | 🟢 **High** — Regular betas, security fixes merging |
| **Hermes Agent** | 7 | 50 | — | — | v0.21.4 (2026-09-21) | Stable, patch pending | 🟢 **High** — Consistent velocity, P0 fixes in flight |
| **NanoBot** | 3 closed | 13 merged | — | 12 | — | Refactor phase | 🟢 **High** — Clean merges, no critical bugs |
| **NanoClaw** | 1 closed | 14 (2 merged) | — | 12 | v2.4.0 | Patch pending | 🟢 **High** — Core-team driven, update reliability focus |
| **LobsterAI** | 10 (9 stale) | 11 merged | 10 | — | 2026.9.23 | Stalled (6 weeks) | 🟠 **Low** — Backlog clearance but no release cadence |
| **PicoClaw** | 0 | 5 (3 merged) | 0 | 2 | — | Feature refinement | 🟡 **Medium** — Steady, low community noise |
| **NullClaw** | 0 | 1 open | 0 | 1 | — | Quiet maintenance | 🔴 **Low** — Near-dormant |
| **IronClaw** | 0 | 1 (bot) | 0 | 1 | — | Quiet maintenance | 🔴 **Low** — CI-only activity |
| **Moltis** | 0 | 0 | 0 | 0 | — | Inactive | 🔴 **Critical** — No activity |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | — | Inactive | 🔴 **Critical** — No activity |

*Health Score: 🟢 High = regular releases/merges, no critical blockers; 🟡 Medium = high activity but unresolved P0/S0 issues or release gaps; 🟠 Low = activity without release cadence or stale backlog; 🔴 Critical = minimal/no activity.*

---

## 3. OpenClaw's Position

**Advantages vs Peers**
- **Largest contributor base & throughput**: 500 PRs/24h dwarfs all others (next: ZeroClaw 50, Hermes 50).
- **Broadest integration surface**: 15+ channel adapters (Feishu, Google Chat, Discord, Telegram, QQ, WebUI), multi-provider gateway, Windows/macOS/Linux parity.
- **Enterprise-grade update/rollback infrastructure**: Managed updates, Doctor diagnostics, rehearsal/backup logic (PR #162403/#162429) — only CoPaw and NanoClaw show comparable investment.

**Technical Approach Differences**
- **Monolithic gateway + SQLite WAL** vs. ZeroClaw's **gateway-process split (RPC)** and NanoClaw's **containerized agent-runner**.
- **Session-state in SQLite** (with WAL corruption risks) vs. NanoBot's **SQLite session centralization (#5943)** and ZeroClaw's **memory-plane isolation**.
- **Provider-agnostic tool schema assembly** at gateway startup (crash-loop risk in 2026.9.7) vs. Hermes Agent's **per-model thinking replay** and CoPaw's **provider-specific content handling**.

**Community Size**
- **Largest open issue/PR backlog** (46/336) — indicates both scale and debt.
- **High comment engagement on P0 issues** (100+ on #143524) — active user base hitting production pain points.
- **No external fork ecosystem visible** — unlike NanoClaw (fork-friendly skills) or ZeroClaw (WASM plugin host).

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Windows/cron stability** | OpenClaw (#161654, #162047), CoPaw (#7672, #8002), Hermes Agent (#130032) | Hardlink validation perf, COM sandbox escapes, `process.env` Proxy `DataCloneError`, update wait preservation |
| **SQLite WAL / session corruption** | OpenClaw (#143524, #161746), NanoBot (#5943), ZeroClaw (#11198, #11239) | Checkpointing/truncation, centralized session authority, memory-plane isolation |
| **Provider integration fragility** | OpenClaw (OpenAI SIWC, Gemini, Codex), CoPaw (DeepSeek, Anthropic, custom gateways), NanoClaw (Copilot, Iron), Hermes Agent (Anthropic thinking replay) | Tool schema versioning, file/caching/token-counting parity, keyless local models |
| **Update/rollback reliability** | OpenClaw (#159897, #162403), NanoClaw (#3961, #3962, #3956), CoPaw (beta cycle), ZeroClaw (desktop self-upgrade policy) | Liveness-gated cutover, rollback of nohup hosts, rehearsal/backup, bundled kernel upgrade refusal |
| **Multi-channel session unity** | PicoClaw (#3413), CoPaw (Feishu/WeCom/QQ), NanoClaw (Telegram hardening), LobsterAI (IM-model decoupling) | Global session sidebar, sender identity retention, forum topic threading, per-channel model config |
| **Security boundaries** | CoPaw (Windows COM escape), ZeroClaw (delegated memory scope, daemon identity), OpenClaw (billing cooldown), LobsterAI (NIM P2P policy fail-open) | Sandbox enforcement, principal memory scope, OS account verification, auth probe-based recovery |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Architectural Signature |
|---------|---------------|--------------|-------------------------|
| **OpenClaw** | **Universal gateway** — multi-channel, multi-provider, enterprise ops | Teams, self-hosters, integrators | Monolithic gateway + SQLite WAL; heavy extension points (skills, hooks, cron) |
| **ZeroClaw** | **Security-first runtime** — process isolation, RPC contracts, WASM plugins | Security-conscious developers, plugin authors | Gateway split (`zeroclaw-gw`), OpenRPC, daemon identity verification, capability-based memory |
| **CoPaw** | **Desktop-first assistant** — IM-native (Feishu/WeCom/QQ), Advisor Mode dual-model | Chinese enterprise, power users, IM-heavy workflows | Electron + WebView2, background task manager, provider-agnostic content handling |
| **Hermes Agent** | **Developer desktop** — Kanban, review-pane, Quick Entry, branch workflows | Individual developers, code-centric workflows | React desktop, portal/agent architecture, session-router, compression/caching layer |
| **NanoBot** | **TUI/WebUI/IM hybrid** — session persistence, subagent primitives, streaming Markdown | Terminal users, long-running session operators | SQLite session authority, JEV provider infra, cancellation-scoped resources |
| **NanoClaw** | **Platform extensibility** — skill framework, provider-declared endpoints, credential gateway | Fork maintainers, multi-provider deployments | Containerized agent-runner, declarative gateway endpoints, skill/credential isolation |
| **LobsterAI** | **Collaborative multi-agent** — cowork, memory, IM integration, model routing | Teams, multi-persona deployments | Multi-agent isolation architecture (stale), NIM P2P, model-plan routing |
| **PicoClaw** | **Lightweight multi-channel bot** — QQ/Telegram/Discord, Web UI sidebar | Hobbyists, lightweight deployments | Modular channel adapters, Blackboard multi-agent (WIP), minimal core |
| **NullClaw / IronClaw** | **Minimal / internal** — provider ecosystem (NullClaw), knowledge-graph bootstrap (IronClaw) | Niche / internal | Low surface area, CI-driven maintenance |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapidly Iterating (Pre-Stabilization)** | **ZeroClaw**, **OpenClaw**, **CoPaw** | 50–500 PRs/day; architectural refactors in flight (gateway split, Advisor Mode, beta cycle); P0/S0 blockers active; no stable release >2 weeks |
| **Stabilizing / Polishing** | **Hermes Agent**, **NanoBot**, **NanoClaw** | 10–50 PRs/day; bug-fix heavy; session/provider correctness; regular merges; releases imminent or recent |
| **Backlog Clearing / Release Gap** | **LobsterAI**, **PicoClaw** | High merge velocity but stale issues (6+ months); no release cadence; security/UX debt surfacing |
| **Quiet Maintenance** | **NullClaw**, **IronClaw** | <5 PRs/week; automated or single-contributor; no community signals |
| **Dormant** | **Moltis**, **ZeptoClaw** | Zero activity >24h; likely archived or pre-launch |

**Key Insight**: The ecosystem is **consolidating around three architectural patterns** — monolithic gateway (OpenClaw), process-isolated runtime (ZeroClaw), and containerized skill platform (NanoClaw) — with desktop-first (Hermes, CoPaw) and TUI-first (NanoBot) UX layers atop them.

---

## 7. Trend Signals for AI Agent Developers

1. **Release Quality > Feature Velocity**  
   Every high-velocity project is paying down 2026.9.x regressions. **Invest in pre-release Windows/Linux matrix testing, SQLite WAL stress, and upgrade rehearsal tooling** — users punish silent data loss and crash-loops more than missing features.

2. **Provider-Abstraction Leakage is the #1 Stability Tax**  
   File handling (CoPaw #8022/#8064), cache tokens (CoPaw #8057), thinking replay (Hermes #129620), tool schema assembly (OpenClaw #162031) — **build provider compliance suites, not just adapters**.

3. **Session Persistence is Moving to SQLite + Explicit Cancellation Scopes**  
   NanoBot (#5943), ZeroClaw (RPC memory tools), OpenClaw (WAL crisis) — **design for atomic turn handoff, durable checkpoints, and scoped resource cleanup** from day one.

4. **Multi-Channel Unity is a Product Differentiator**  
   PicoClaw (#3413), CoPaw (Feishu/WeCom/QQ), NanoClaw (Telegram), LobsterAI (IM-model decoupling) — **users expect one session identity across Discord, Slack, Feishu, Web, Terminal**. Invest in canonical event logs and channel-agnostic routing.

5. **Security Boundaries Are Becoming Explicit Requirements**  
   CoPaw (Windows COM escape), ZeroClaw (delegated memory S0), LobsterAI (NIM P2P fail-open), OpenClaw (billing cooldown) — **sandbox verification, principal scoping, and auth probe recovery are now table stakes**.

6. **Fork/Plugin Sustainability Drives Platform Adoption**  
   NanoClaw (`/contribute-upstream` skill, provider-declared endpoints), ZeroClaw (WASM plugin host), OpenClaw (skill/hooks) — **provide structured upstreaming paths and capability-based extension points** to avoid fragmented forks.

7. **Observability Gaps Drive Churn**  
   ZeroClaw (OpenRouter cost tracking broken), OpenClaw (Doctor 35-min hardlink), Hermes (log `--since` multiline loss) — **invest in cost visibility, upgrade diagnostics, and log fidelity** — operators cannot debug what they cannot see.

---

**Bottom Line**: The ecosystem is **technically converging** on SQLite-backed sessions, RPC/process isolation, and provider compliance — but **operationally diverging** on release discipline. Projects that ship **reliable upgrades, honest configs, and cross-channel session unity** will capture the next wave of self-hosted and enterprise deployments.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-10-01

## 1. Today's Overview
NanoBot shows **high maintenance velocity** with 13 PRs merged/closed and 3 issues resolved in the last 24 hours, but **zero new releases**. The project is in a heavy refactoring and stabilization phase: major work centers on session persistence (SQLite migration), TUI robustness, provider correctness, and subagent/task-cancellation primitives. Open PR count (12) remains healthy, indicating sustained throughput. No critical outages reported; recent closures are mostly bug fixes and polish rather than new features.

## 2. Releases
**No new releases** published today. The latest version remains whatever was previously tagged; watch for a cut once the SQLite session refactor (#5943) and idle-compaction gating (#5885) land.

## 3. Project Progress — Merged/Closed PRs Today (13)

| PR | Area | Summary |
|----|------|---------|
| [#5993](https://github.com/HKUDS/nanobot/pull/5993) | agent, cancellation | Scope tool/subagent/shell resources to session cancellation; broadcast stop signals before unwinding root execution. |
| [#5989](https://github.com/HKUDS/nanobot/pull/5989) | webui, markdown | Stop repairing completed Markdown; fixes trailing `_` artifact from Remend emphasis handling (NAN-205). |
| [#5990](https://github.com/HKUDS/nanobot/pull/5990) | webui, streaming | Preserve TeX formula boundaries (`\[…\]`, `\(…\)`) during streaming Markdown rendering (NAN-204). |
| [#5981](https://github.com/HKUDS/nanobot/pull/5981) | tui, goal | Accept `/goal <task>` during active turns; hidden agent input, immediate send on Enter, Tab to wait. |
| [#5966](https://github.com/HKUDS/nanobot/pull/5966) | tui, picker | Keep overflow picker choices reachable; keyboard scroll, selection preservation, mouse support. |
| [#5958](https://github.com/HKUDS/nanobot/pull/5958) | tui, themes | Fallback to terminal-default foreground/background until OSC 10/11 theme known; fixes invisibility on light terminals. |
| [#5950](https://github.com/HKUDS/nanobot/pull/5950) | tui, sessions | Restore saved session history from canonical events after `/webui-thread` schema change (#5823). |
| [#5938](https://github.com/HKUDS/nanobot/pull/5938) | providers, responses | Preserve optional tool parameters (`strict` flag) in Responses API requests; prevents MCP filter coercion bugs. |
| [#5907](https://github.com/HKUDS/nanobot/pull/5907) | test, infra | Consolidate redundant test coverage across 34 files; −703 lines net, 46 Python groups parameterized, 171 assertions preserved. |
| [#5997](https://github.com/HKUDS/nanobot/pull/5997) | linear, security | Reject stale member-access updates after workspace reauthorization; prevents re-enabling explicitly denied members. |
| [#5996](https://github.com/HKUDS/nanobot/pull/5996) | docs, process | Streamline root `AGENTS.md`; move project specifics to `.agent/`, link task-specific guides. |
| [#5987](https://github.com/HKUDS/nanobot/issues/5987) | tui, debug | **Issue closed**: Numbers-only input now recognized in TUI debug-mode (was alphabet-only). |
| [#5903](https://github.com/HKUDS/nanobot/issues/5903) | feishu, compaction | **Issue closed**: Hidden session-checkpoint marker no longer delivered to Feishu users after idle compaction. |

**Key advancement**: Session lifecycle hardening (cancellation, history restore), TUI accessibility polish, provider schema fidelity, and test-suite lean-up.

## 4. Community Hot Topics
No open issues/PRs with significant comment activity today (all listed items show `Comments: undefined` or 0). The three closed issues had modest discussion (3–5 comments each), indicating **low external noise**—development is internally driven. Top technical threads by implied complexity:
- **#5943** (SQLite session centralization) — architectural, marked `conflict`, `priority: p1`
- **#5885** (idle-compaction token threshold) — memory/resume quality trade-off, `priority: p1`
- **#5825** (reusable JEV client) — provider infra for heartbeat/policy, `priority: p2`

Underlying need: **reliable long-running sessions with predictable resume behavior** across channels (Feishu, WebUI, TUI) and provider switches.

## 5. Bugs & Stability — Reported Today (3 closed)

| Severity | Issue | Fix Status |
|----------|-------|------------|
| **Medium** | [#5903](https://github.com/HKUDS/nanobot/issues/5903) Feishu: internal `"Continue the active task…"` marker leaked to user after idle compaction | ✅ Fixed (closed) |
| **Medium** | [#5956](https://github.com/HKUDS/nanobot/issues/5956) Feishu: compaction notices (`started`/`succeeded`) both sent to channel; no in-place edit to suppress | ✅ Fixed (closed) |
| **Low** | [#5987](https://github.com/HKUDS/nanobot/issues/5987) TUI debug-mode: numbers-only input unrecognized | ✅ Fixed (closed) |

**No open critical bugs** filed today. Regression risk areas: provider Responses tool conversion (#5938 fixed), Linear reauth race (#5997 open), agent failure-state staleness (#5995 open).

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Remote instance discovery in WebUI** (NAN-157) | [#5941](https://github.com/HKUDS/nanobot/pull/5941) `feat(webui): connect to existing remote nanobot` | High — open, active, explicit Linear ticket |
| **Subagent messaging & targeted cancellation** | [#5985](https://github.com/HKUDS/nanobot/pull/5985) `feat(subagent): session-owned task messaging` | High — builds on #5976, open with tests |
| **Idle compaction gating by token threshold** | [#5885](https://github.com/HKUDS/nanobot/pull/5885) | Medium — `priority: p1` but marked `conflict` |
| **SQLite-backed session authority** | [#5943](https://github.com/HKUDS/nanobot/pull/5943) | Medium — foundational, `conflict`, needs review |
| **Reusable JEV client for OpenRouter Decisions** | [#5825](https://github.com/HKUDS/nanobot/pull/5825) | Medium — infra enabler, `priority: p2` |
| **Sustained-goal continuation bounding** | [#5257](https://github.com/HKUDS/nanobot/pull/5257) | Low — old (Aug), still open, `conflict` |

## 7. User Feedback Summary
- **Feishu users**: Pain around noisy compaction notices (#5956) and leaked internal markers (#5903) — both resolved today. Indicates Feishu is a **production channel** with real-time UX expectations.
- **TUI users**: Debug-mode input regression (#5987) and theme invisibility (#5958) — fixed. Picker overflow (#5966) suggests **heavy keyboard-driven workflows**.
- **WebUI users**: Streaming Markdown artifacts (trailing `_`, broken TeX) — fixed in #5989/#5990. Shows **rich-output reliance** (math, code).
- **Developers**: Test-suite bloat (#5907) and stale docs (#5996) — internal quality focus.

Overall sentiment: **responsive maintenance**; users encounter polish issues, not core failures.

## 8. Backlog Watch — Stale / Needs Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) `fix(agent): bound sustained-goal continuation` | ~2 months | Prevents runaway auto-continue loops; `conflict` blocks merge. |
| [#5166](https://github.com/HKUDS/nanobot/pull/5166) `fix(agent): expire inherited goal permission` | ~2 months | ContextVar permission leak in async tasks; security-adjacent. |
| [#5943](https://github.com/HKUDS/nanobot/pull/5943) `refactor(session): centralize state in SQLite` | 4 days | **High-impact refactor**, `priority: p1`, `conflict` — needs maintainer arbitration. |
| [#5885](https://github.com/HKUDS/nanobot/pull/5885) `feat(memory): gate idle compaction on token threshold` | 8 days | Directly affects resume quality vs. token cost; `priority: p1`, `conflict`. |
| [#5825](https://github.com/HKUDS/nanobot/pull/5825) `feat: add reusable JEV client` | 11 days | Provider infra for future policies; `priority: p2`, no conflict shown. |

**Recommendation**: Prioritize unblocking #5943 and #5885 (both `p1`, `conflict`) to unlock session reliability and memory economics. Triaging #5257/#5166 would close long-standing agent correctness gaps.

---

*Data sourced from GitHub API snapshot 2026-10-01; all links point to live HKUDS/nanobot items.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-10-01

## 1. Today's Overview

Hermes Agent shows **high development velocity** with 50 PRs updated and 7 issues touched in the last 24 hours, though no new release was cut. The activity centers on **desktop stability, session-state correctness, and UX polish** — particularly around Quick Entry, review-pane diffs, branch handling, and log usability. A critical OOM regression in Kanban workers (4 GiB hard cap) and a P0 Anthropic thinking-replay bug are the highest-severity open items. The merged/closed PRs today include a doc-promised review-pane scope selector (duplicate), Korean i18n completion, and automated formatting — indicating maintainers are clearing housekeeping debt alongside feature work.

---

## 2. Releases

**No new releases published today.** The latest version remains **v0.21.4 (2026-09-21, upstream 4c61eaa)** per issue #130013.

---

## 3. Project Progress — Merged / Closed PRs Today

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#127200](https://github.com/NousResearch/hermes-agent/pull/127200) | fix(desktop): add the review-pane diff scope selector docs already promise | Bug fix (duplicate) | Implements the missing **Uncommitted / Branch / Last turn** scope picker for the Cmd/Ctrl+G review pane, closing a long-standing doc/UI mismatch (#84347). Marked duplicate — likely superseded by another PR. |
| [#130033](https://github.com/NousResearch/hermes-agent/pull/130033) | fmt(js): `npm run fix` auto-fix | Chore (bot) | Automated lint/formatting sweep; auto-merged after CI pass. |
| [#130034](https://github.com/NousResearch/hermes-agent/pull/130034) | i18n(ko): translate 83 missing dashboard keys | I18n | Brings Korean locale to 100% coverage (681 keys) across kanban, plugins catalog, profiles, gateway strip, theme fonts. |

*Other closed PRs not shown in the top-20 list account for the remaining 9 merged/closed items.*

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Signal | Underlying Need |
|------|--------|-----------------|
| [#123387](https://github.com/NousResearch/hermes-agent/issues/123387) — **2 comments, 1 👍** — *hermes update fails when github.com is blackholed* | Users in air-gapped / restricted networks cannot update; the update flow assumes direct GitHub access. | **Offline-first / air-gapped update path** — fallback to internal mirrors or bundled assets. |
| [#130031](https://github.com/NousResearch/hermes-agent/issues/130031) / [#130035](https://github.com/NousResearch/hermes-agent/pull/130035) — *Quick Entry stale-residue rejection* | 1 comment on issue + immediate fix PR from core contributor (JoaoMarcos44). | **Quick Entry reliability** — background submit to stored sessions must not false-positive on “stale” transcripts created by the same session. |
| [#130013](https://github.com/NousResearch/hermes-agent/issues/130013) — *Kanban/worker OOM at 4 GiB hard cap* | New P2 bug on 64 GB machine; worker scope OOM-killed mid-test-battery. | **Configurable worker memory limits** — the `min(half-RAM, 4 GiB)` constant is too low for heavy test workloads. |
| [#129620](https://github.com/NousResearch/hermes-agent/pull/129620) — *Anthropic preserved-thinking replay coherence* | P0, fixes #129476; touches caching & compression. | **Model-agnostic thinking handling** — Opus 4.5+/Sonnet 4.6+ retain historical thinking; Hermes must replay correctly per model version. |

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P0** | [#129620](https://github.com/NousResearch/hermes-agent/pull/129620) | Anthropic preserved-thinking replay broken for Opus 4.5+/Sonnet 4.6+ (historical thinking vs. latest-turn-only). | **Yes** — PR open, targets `comp/agent`, `provider/anthropic`, `comp/portal`, `area/compression`. |
| **P0** | [#128603](https://github.com/NousResearch/hermes-agent/pull/128603) | Queued-edit buffer lost when background teardown exits the edit (dirty composer state discarded). | **Yes** — PR open, `comp/desktop`, `area/sessions`. |
| **P2** | [#130013](https://github.com/NousResearch/hermes-agent/issues/130013) | Kanban/worker OOM: `MemoryMax` hard-capped at 4 GiB kills legitimate test batteries on large-RAM machines. | **No PR yet** — needs config knob or dynamic bound. |
| **P2** | [#123387](https://github.com/NousResearch/hermes-agent/issues/123387) | `hermes update` fails at desktop packaging when `github.com` is blackholed (`TypeError: fetch failed`). | **No PR yet** — network-resilience fix required in update pipeline. |
| **P2** | [#130019](https://github.com/NousResearch/hermes-agent/issues/130019) | `hermes logs --since` drops multiline error details (timestamp confusion) and ongoing update output. | **No PR yet** — log-filtering logic flaw. |
| **P2** | [#130031](https://github.com/NousResearch/hermes-agent/issues/130031) | Quick Entry refuses submit to same-session stale residue (false positive after #128450). | **Yes** — [#130035](https://github.com/NousResearch/hermes-agent/pull/130035) open. |
| **P2** | [#127241](https://github.com/NousResearch/hermes-agent/pull/127241) | TUI `/context` and `/refine` fall through to subprocess for local sessions (missing in-process handler). | **Yes** — PR open. |
| **P2** | [#128551](https://github.com/NousResearch/hermes-agent/pull/128551) | Slash `/branch` from a tile branches from foreground session, not the tile’s own session. | **Yes** — PR open. |
| **P2** | [#128547](https://github.com/NousResearch/hermes-agent/pull/128547) | Lost branch create not retried idempotently; backend restart mid-RPC loses branch or duplicates. | **Yes** — PR open. |
| **P2** | [#127231](https://github.com/NousResearch/hermes-agent/pull/127231) | Session-create guard released before router catches up → race on new session route. | **Yes** — PR open. |
| **P3** | [#102782](https://github.com/NousResearch/hermes-agent/issues/102782) | Markdown links to local paths with spaces render as `[blocked]` (regex fails on angle-bracket destinations). | **Closed** — fix likely merged earlier. |
| **P3** | [#84347](https://github.com/NousResearch/hermes-agent/issues/84347) | Review-pane diff scope picker documented but never exposed in UI (hardcoded `'uncommitted'`). | **Closed** — addressed by duplicate PR #127200. |
| **P3** | [#103903](https://github.com/NousResearch/hermes-agent/issues/103903) | Session rename updates desktop/WebUI but not Personal profile record → name drift. | **Closed** — fix merged earlier. |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Persistent cross-session Task Overview sidebar with drag-and-drop** | [#107961](https://github.com/NousResearch/hermes-agent/pull/107961) (P3, open since 2026-09-11) | Medium — large UI addition, needs design review; `needs-decision` label absent but scope is significant. |
| **Workflows: author/run agent graphs (opt-in plugin)** | [#94367](https://github.com/NousResearch/hermes-agent/pull/94367) (P3, stacked on Relay traces #53007) | Low–Medium — major feature, dependent on Relay trace recorder; still in early development. |
| **Review-pane diff scope selector (Uncommitted/Branch/Last turn)** | [#84347](https://github.com/NousResearch/hermes-agent/issues/84347) + [#127200](https://github.com/NousResearch/hermes-agent/pull/127200) | **High** — doc/UI parity fix; duplicate PR closed but functionality likely landing via another PR. |
| **LogsPane: selectable text + stick-to-bottom autoscroll** | [#130028](https://github.com/NousResearch/hermes-agent/pull/130028) | High — small UX fix, references #77794; ready for merge. |
| **Mermaid render caching/deferral for transcript performance** | [#128578](https://github.com/NousResearch/hermes-agent/pull/128578) | High — perf fix for diagram-heavy transcripts; low risk. |
| **Bounded history navigation: contiguous & occurrence-stable** | [#128577](https://github.com/NousResearch/hermes-agent/pull/128577) | High — fixes regression from #125766; core navigation UX. |
| **Windows gateway restart wait preservation during update** | [#130032](https://github.com/NousResearch/hermes-agent/pull/130032) | High — fixes #129947; Windows update reliability. |
| **Strict URL credential redaction (colon-bearing userinfo)** | [#130027](https://github.com/NousResearch/hermes-agent/pull/130027) | Medium — security hardening; niche but clean fix. |

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Air-gapped / restricted-network updates broken** | #123387 (AI-assisted bug report from user on blackholed github.com) | Enterprises / secure environments cannot update; workaround requires manual intervention. |
| **Worker OOM on large test suites** | #130013 (64 GB RAM machine, kernel OOM kill at 4 GiB cap) | Power users running heavy Kanban test batteries hit hard ceiling; no config override. |
| **Log filtering loses context** | #130019 (`--since` hides multiline errors, update output) | Debugging regressions becomes harder; developers lose error detail. |
| **Quick Entry unreliable for stored sessions** | #130031 + immediate fix PR | Background quick-submit to prior sessions falsely blocked; breaks workflow for multi-session users. |
| **Session rename not synced to profile** | #103903 (closed) | Name drift between UI and canonical record causes confusion in multi-profile setups. |
| **Review-pane diff scope missing** | #84347 (closed) + #127200 (duplicate) | Users expect Branch/Last-turn diffs per docs; only Uncommitted worked. |
| **Local file links with spaces blocked** | #102782 (closed) | Markdown links to spaced paths render as `[blocked]` — looks random, breaks file navigation. |
| **LogsPane text unselectable, no autoscroll** | #130028 (refs #77794) | Cannot copy log lines; pane doesn’t follow tail — basic usability gap. |

**Positive signals:** Korean i18n completed to 100% (#130034), automated formatting bot active (#130033), multiple session-state fixes in flight — indicates attention to polish and internationalization.

---

## 8. Backlog Watch — Stale / High-Value Items Needing Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#94367](https://github.com/NousResearch/her

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-10-01

## 1. Today's Overview
PicoClaw shows **moderate maintenance activity** with 5 pull requests updated in the last 24 hours (3 merged/closed, 2 open), but **zero issue activity** — no new issues, comments, or reactions. The merged PRs address a shell-command allow-list bug, a multi-agent collaboration framework (closed as WIP), and QQ-channel attachment support. Two open PRs continue work on a global multi-channel session sidebar (Web UI) and a deltachat cleanup. No releases were published today. Overall, the project is in a **steady feature-refinement phase** with focus on multi-agent infrastructure, channel integrations, and Web UX.

## 2. Releases
**None** — no new versions published today.

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3313](https://github.com/sipeed/picoclaw/pull/3313) | **Bug Fix** | Fixed `customAllowPatterns` not working: default deny patterns incorrectly took precedence in `guardCommand`, blocking commands like `git push` even when explicitly allowed. | **High** — restores expected shell-command allow-list behavior for agents. |
| [#423](https://github.com/sipeed/picoclaw/pull/423) | **Feature (WIP, Closed)** | Base multi-agent collaboration framework: shared context pool (Blackboard), agent handoff, discovery tools. Built on provider-protocol refactor (#213) and model-fallback/routing (#131). Closed as WIP — likely split into smaller PRs. | **Strategic** — lays groundwork for multi-agent workflows; closure suggests iterative delivery. |
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | **Feature** | QQ Channel: parse/reply to emoji, voice, image, video, file attachments; prefer Markdown replies with fallback. | **Medium** — expands QQ Channel bot richness; unblocks media-heavy use cases. |

## 4. Community Hot Topics
*No issues or PRs received comments or reactions in the last 24h.* The most recently updated PRs are:

1. **[#3413](https://github.com/sipeed/picoclaw/pull/3413)** (OPEN, 0 comments) — Global multi-channel session sidebar for Web UI. Part of #3406. Signals demand for **unified session management across channels** (Telegram, Discord, QQ, etc.) in the web dashboard.
2. **[#3222](https://github.com/sipeed/picoclaw/pull/3222)** (OPEN, 0 comments) — deltachat refactor (−200 LOC), drops legacy auth, uses official relay list. Indicates **maintenance burden reduction** and alignment with upstream Delta Chat practices.

*Underlying needs*: Users want a **single pane of glass** for all agent sessions regardless of channel, and maintainers are pruning technical debt in channel adapters.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | `customAllowPatterns` ignored — default deny patterns always win, blocking allowed commands (e.g., `git push`) | **Fixed & Merged** | [#3313](https://github.com/sipeed/picoclaw/pull/3313) |
| — | No new crashes, regressions, or bug reports filed today. | — | — |

*The shell-command guard bug was the only stability issue addressed today; it affected any agent relying on custom command allow-lists.*

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Global multi-channel session sidebar** (Web UI) | [#3413](https://github.com/sipeed/picoclaw/pull/3413) (OPEN) | **High** — active PR, part of tracked epic #3406 |
| **deltachat cleanup & modernization** | [#3222](https://github.com/sipeed/picoclaw/pull/3222) (OPEN) | **High** — reduces LOC, aligns with upstream |
| **Multi-agent collaboration primitives** (Blackboard, handoff) | [#423](https://github.com/sipeed/picoclaw/pull/423) (CLOSED WIP) | **Medium** — foundational work done; expect incremental PRs |
| **Richer QQ Channel media support** | [#1349](https://github.com/sipeed/picoclaw/pull/1349) (MERGED) | **Delivered** — now in codebase |

*Prediction*: Next release will likely include the Web UI session sidebar and deltachat refactor. Multi-agent features will arrive in smaller, reviewable chunks.

## 7. User Feedback Summary
*No direct user feedback (issues, comments, reactions) captured in the last 24h.* Inferred pain points from merged fixes:
- **Shell command allow-lists were broken** — users adding `git push` (or similar) to `customAllowPatterns` saw no effect; forced to workaround or avoid agent-driven git ops.
- **QQ Channel media handling was incomplete** — bots couldn’t process or reply with voice/video/files, limiting real-world deployment.
- **Web UI session management is channel-siloed** — motivating the global sidebar work.

## 8. Backlog Watch
| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | ~90 days (opened 2026-07-03) | OPEN, 0 comments | Large deltachat refactor (−200 LOC), drops password auth, updates relay list. Stale — needs review/merge to reduce maintenance surface. |
| [#3413](https://github.com/sipeed/picoclaw/pull/3413) | 1 day | OPEN, 0 comments | First part of epic #3406; unblocks unified Web UX. Should be prioritized for review. |
| [#423](https://github.com/sipeed/picoclaw/pull/423) | ~7.5 months | CLOSED (WIP) | Multi-agent framework closed as WIP — watch for follow-up PRs splitting the work. |

---
*Data source: GitHub API (sipeed/picoclaw) — issues, PRs, releases updated 2026-10-01. Links point to live GitHub items.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-10-01

## 1. Today's Overview
NanoClaw shows **high development velocity** with 14 pull requests updated in the last 24 hours (12 open, 2 merged) and 1 issue closed. The project is in active feature development across multiple fronts: provider integrations (GitHub Copilot, Iron keyless models), gateway routing improvements, Telegram channel hardening, and update/rollback reliability fixes. No new release was published. The closed issue (#3961) and two merged PRs (#3962, #3974) address update-process reliability and dependency hygiene, indicating a focus on operational stability alongside new capabilities.

## 2. Releases
**No new releases** published today. The latest tagged version remains v2.4.0 (referenced in issue #3961).

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3962](https://github.com/nanocoai/nanoclaw/pull/3962) | **fix(update)** | Refuses cutover when the service liveness probe itself fails; prevents `/update-nanoclaw` from reporting `complete` while the old host is still running. | **High** — fixes a silent update failure mode that could leave users on stale versions. |
| [#3974](https://github.com/nanocoai/nanoclaw/pull/3974) | **fix(container)** | Refreshes `container/agent-runner/bun.lock` to clear all `bun audit` findings (transitive advisories from `@modelcontextprotocol/sdk` 1.29.0). | **Medium** — improves supply-chain hygiene; no functional change. |

Both PRs were authored by **glifocat** (core team) and carry the `core-team` label, indicating maintainer-driven stability work.

## 4. Community Hot Topics
All tracked items show **0 comments and 0 reactions** in the last 24 hours, so “hot” is relative to update recency. The most recently updated/created PRs (all 2026-09-30) are:

| Item | Type | Area | Signal |
|------|------|------|--------|
| [#3976](https://github.com/nanocoai/nanoclaw/pull/3976) | feat | skills/providers | **New provider skill**: `/add-copilot` — GitHub Copilot SDK integration with credential-gateway token storage. |
| [#3975](https://github.com/nanocoai/nanoclaw/pull/3975) | feat | core/agent-runner | **Extension callbacks** for providers to hook into runner/host lifecycle (5 new inert callbacks). |
| [#3973](https://github.com/nanocoai/nanoclaw/pull/3973) • [#3972](https://github.com/nanocoai/nanoclaw/pull/3972) • [#3971](https://github.com/nanocoai/nanoclaw/pull/3971) | fix | channels/telegram | **Telegram adapter hardening**: plain-text fallback, drop service messages, forum topics → threads. |
| [#3970](https://github.com/nanocoai/nanoclaw/pull/3970) | fix | core/delivery | Strips agent-group suffix from reaction/edit target IDs to fix cross-platform routing. |

**Underlying need**: Contributors are expanding the **provider/skill ecosystem** (Copilot, Iron, gateway declarative endpoints) while hardening **channel adapters** (Telegram) and **core delivery primitives** — signals of a platform maturing toward multi-provider, multi-channel generality.

## 5. Bugs & Stability — Reported/Fixed Today
| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **High** | [#3961](https://github.com/nanocoai/nanoclaw/issues/3961) — `/update-nanoclaw` reports `phase: complete` without restarting host when `systemctl --user` cannot reach the bus (nohup installs). | **Closed** (2026-09-30) | Addressed by [#3962](https://github.com/nanocoai/nanoclaw/pull/3962) (merged) and [#3956](https://github.com/nanocoai/nanoclaw/pull/3956) (open, rollout/rollback hardening). |
| **Medium** | Telegram: messages rejected due to unparsable MarkdownV2 entities (e.g., private IP links) were dropped after retries. | Open | [#3973](https://github.com/nanocoai/nanoclaw/pull/3973) — resend as plain text. |
| **Medium** | Telegram: service messages (topic hide/unhide, pins, joins) forwarded as empty, causing agent “you said nothing” replies. | Open | [#3972](https://github.com/nanocoai/nanoclaw/pull/3972) — drop instead of forward. |
| **Medium** | Telegram: forum topics shared one session; replies misrouted. | Open | [#3971](https://github.com/nanocoai/nanoclaw/pull/3971) — route topics as threads. |
| **Low** | Reaction/edit target IDs included agent-group suffix, breaking platform API calls. | Open | [#3970](https://github.com/nanoclaw/pull/3970) — strip suffix. |
| **Low** | OpenCode/Iron setup saved model URLs that fail at prompt time under selected gateway. | Open | [#3965](https://github.com/nanoclaw/pull/3965) — validate URL against gateway at prompt. |
| **Low** | Agent-runner lockfile pinned old transitive versions with advisories. | **Fixed** | [#3974](https://github.com/nanoclaw/pull/3974) (merged). |

**Trend**: Update-process reliability (nohup + systemd) and Telegram edge cases dominate today’s bug surface.

## 6. Feature Requests & Roadmap Signals
| PR | Feature | Likelihood for Next Release |
|----|---------|-----------------------------|
| [#3966](https://github.com/nanoclaw/pull/3966) | **Iron keyless model over plain HTTP** (`http://host.docker.internal:<port>/v1`) — allows local keyless models without TLS. | **High** — core-team labeled, follows guidelines, small scope. |
| [#3964](https://github.com/nanoclaw/pull/3964) | **Gateway: provider-declared exact `host:port` endpoints** — auto-approved like `modelDomains`, eliminates per-call approval cards for non-default ports. | **High** — core-team labeled, unblocks local provider UX. |
| [#3976](https://github.com/nanoclaw/pull/3976) | **`/add-copilot` skill** — GitHub Copilot SDK provider with credential-gateway token storage (no env/container leakage). | **High** — upstream-ready, authored by barnuri (core contributor). |
| [#3928](https://github.com/nanoclaw/pull/3928) | **`/contribute-upstream` operational skill** — helps forks push local features back as seams/skills instead of long-lived edits. | **Medium** — meta-tooling for fork sustainability; may wait for skill-framework stabilization. |
| [#3975](https://github.com/nanoclaw/pull/3975) | **Generic runner/host extension callbacks** — 5 inert hooks for providers to attach at points skills cannot reach. | **Medium** — foundational; enables future provider capabilities without core changes. |
| [#3901](https://github.com/nanoclaw/pull/3901) | **HTTPS proxy support for host service** — allows outbound internet via corporate proxy. | **Medium** — enterprise-relevant, open since 2026-09-25. |

**Prediction**: The next patch/minor release will likely include the Iron keyless HTTP (#3966), gateway host:port declaration (#3964), and Copilot skill (#3976) — all are provider-facing, core-team reviewed, and unblock local/air-gapped deployments.

## 7. User Feedback Summary
No direct user comments appear in the 24-hour window (all issues/PRs show 0 comments). Pain points are inferred from **bug reports authored by contributors** (likely dogfooding):

- **Update reliability**: Silent “complete” reporting when systemd user bus is unreachable (nohup installs) — affects self-hosters on minimal Linux.
- **Telegram UX**: Forum topics unusable (shared session), service-message spam, MarkdownV2 entity failures on private links — affects chat-ops users.
- **Local provider friction**: Keyless models require TLS or hit approval cards on every call; OpenCode setup saves broken URLs.
- **Fork maintenance**: No structured way to upstream customizations — leads to divergent forks.

**Satisfaction signal**: Contributors are actively filing fixes *and* features, suggesting the codebase is approachable for extension. The absence of external user issues may indicate a small, technically adept user base or that friction points are being caught internally first.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3901](https://github.com/nanoclaw/pull/3901) — HTTPS proxy for host service | 5 days (created 2026-09-25) | Enterprise adoption blocker; no review activity visible. |
| [#3928](https://github.com/nanoclaw/pull/3928) — `/contribute-upstream` skill | 4 days (created 2026-09-26) | Strategic for fork ecosystem; may need design review on “seam” abstraction. |
| [#3956](https://github.com/nanoclaw/pull/3956) — Rollback stops live nohup host & drains agent containers | 2 days (created 2026-09-28) | Complements merged #3962; completes update/rollback hardening for nohup path. |
| [#3965](https://github.com/nanoclaw/pull/3965) — OpenCode/Iron gateway URL validation at prompt | 1 day | UX fix for local-model onboarding; low risk, high user visibility. |
| [#3975](https://github.com/nanoclaw/pull/3975) — Generic runner/host extension callbacks | 0 days | Architectural; requires core-team consensus on callback surface stability. |

**Recommendation**: Prioritize review of **#3956** (completes the update-reliability pair with #3962) and **#3901** (oldest open PR, enterprise-relevant). The Telegram trio (#3971–#3973) and delivery fix (#3970) are low-risk and can be batch-merged.

---

*Digest generated from GitHub data as of 2026-10-01 00:00 UTC. All links point to `github.com/nanocoai/nanoclaw`.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-10-01

## 1. Today's Overview
NullClaw saw minimal activity in the past 24 hours with only one open pull request (#1016) and zero issue updates or releases. The project appears to be in a quiet maintenance phase with no critical bugs, regressions, or community discussions surfacing today. The single PR proposes adding a new LLM gateway provider (Cheaper Inference) following an established pattern, suggesting incremental provider ecosystem expansion rather than core feature development. Overall project health appears stable but low-velocity.

## 2. Releases
No new releases published today.

## 3. Project Progress
**Merged/Closed PRs today:** None  
**Open PRs updated today:** 1  
- **#1016** — `feat(providers): add Cheaper Inference as an OpenAI-compatible gateway`  
  Author: `aiapienthusiast` | Created: 2026-09-30 | Updated: 2026-09-30  
  [View PR](https://github.com/nullclaw/nullclaw/pull/1016)  
  *Status: Open, awaiting review. Adds Cheaper Inference provider following the same pattern as Eden AI (#990). No test or documentation changes visible in summary.*

## 4. Community Hot Topics
No issues or PRs with significant comment/reaction activity in the last 24h. The sole PR (#1016) has 0 comments and 0 reactions, indicating no community discussion yet.

## 5. Bugs & Stability
No bug reports, crashes, or regressions reported today. No fix PRs associated with stability issues.

## 6. Feature Requests & Roadmap Signals
**Active signal:** Provider ecosystem expansion continues via community contributions.  
- **Cheaper Inference gateway** (#1016) — OpenAI-compatible multi-model gateway addition. Follows pattern from #990 (Eden AI).  
- **Prediction:** Next version likely includes this provider merge if CI passes and maintainers approve. No other feature requests visible today.

## 7. User Feedback Summary
No user feedback, pain points, or use-case reports surfaced in issues or PR discussions today. The project shows no direct user satisfaction/dissatisfaction signals in this window.

## 8. Backlog Watch
No long-unanswered issues or PRs identified in today's data snapshot. The only pending item is **#1016** (created 2026-09-30), which is less than 24h old and not yet stale. No historical backlog items resurfaced.

---

*Digest generated from GitHub API data for nullclaw/nullclaw covering 2026-09-30 to 2026-10-01. Links point to live GitHub resources.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-10-01

## 1. Today's Overview
IronClaw shows minimal human-driven activity over the last 24 hours. Zero issues were created, updated, or closed, and the only pull-request movement is a single automated PR (#7988) that refreshes the committed codebase-knowledge-graph snapshot. No new releases were published. The project appears to be in a quiet maintenance phase with CI-driven housekeeping as the sole visible action.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
**Merged/Closed PRs today:** *None*  
**Open PR updated today:**
- **#7988** `chore(agents): refresh codebase knowledge graph` — Nightly CI job that regenerates the bootstrap memory snapshot from the default branch. Low-risk infrastructure change; tests pass. Awaiting maintainer review/merge. [PR #7988](https://github.com/nearai/ironclaw/pull/7988)

## 4. Community Hot Topics
No issues or PRs received comments or reactions in the last 24 hours. The only active item is the automated PR #7988 (0 👍, 0 comments), indicating no current community discussion hotspots.

## 5. Bugs & Stability
**No bug reports, crashes, or regressions** filed or updated today. The repository shows zero open/active issues in the period.

## 6. Feature Requests & Roadmap Signals
No new feature requests or roadmap-related issues appeared today. The sole PR is an internal CI maintenance task, offering no signal about upcoming user-facing features.

## 7. User Feedback Summary
No user feedback (issues, discussions, or PR reviews) was recorded in the last 24 hours. Silence may indicate stable satisfaction—or simply low current engagement.

## 8. Backlog Watch
- **PR #7988** (open since 2026-08-29, updated 2026-10-01) — Automated knowledge-graph refresh awaiting merge. Long dwell time (33 days) suggests either low reviewer bandwidth or intentional batching of CI-generated PRs. Maintainers should triage to prevent stale bot PRs from accumulating. [PR #7988](https://github.com/nearai/ironclaw/pull/7988)

---
*Digest generated from GitHub data covering 2026-09-30 → 2026-10-01. Links point to live GitHub items.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-10-01

## 1. Today's Overview
LobsterAI shows **high maintenance velocity but zero release cadence** in the last 24 hours. Eleven PRs were merged/closed (mostly stale PRs from March 2026 finally landing), while ten issues remain open—most are stale issues from March resurfacing with updates, plus one **new critical security issue (#2784)** filed today regarding NIM P2P message policy failing open. No new releases have been cut since `2026.9.23`. The project appears to be in a **stabilization/bug-fix phase** with maintainers clearing backlog, but the lack of recent releases suggests deployment friction or release-process gaps.

## 2. Releases
**No new releases** in the last 24 hours. Latest tagged release remains `2026.9.23` (commit `7863db4`). Users on older versions report 403 errors after upgrading (#962), indicating potential release-quality or compatibility issues.

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2787](https://github.com/netease-youdao/LobsterAI/pull/2787) | renderer, main, openclaw, cowork | Fix custom model plan routing | Core routing logic for model plans |
| [#2786](https://github.com/netease-youdao/LobsterAI/pull/2786) | main, openclaw | Default LobsterAI server models to 32K output cap (was 8K) | Prevents premature truncation of reasoning-model outputs |
| [#944](https://github.com/netease-youdao/LobsterAI/pull/944) | mcp | Fix scrollbar overflowing modal rounded corners | UI polish for MCP server config modal |
| [#951](https://github.com/netease-youdao/LobsterAI/pull/951) | mcp | Prevent accidental data loss when closing MCP server form modal | Adds discard confirmation for unsaved form data |
| [#954](https://github.com/netease-youdao/LobsterAI/pull/954) | cowork | Fix duplicate error messages in `continueSession` | Removes double error dispatch on session continuation failure |
| [#956](https://github.com/netease-youdao/LobsterAI/pull/956) | im | Fix crash in `ImCoworkHandler.destroy()` via optional chaining | Prevents TypeError on app exit/gateway rebuild |
| [#957](https://github.com/netease-youdao/LobsterAI/pull/957) | cowork | Prevent session menu closing during streaming scroll | UX fix for active AI response interactions |
| [#959](https://github.com/netease-youdao/LobsterAI/pull/959) | memory | Show inline error when memory text < 2 chars | Validation feedback for too-short memory entries |
| [#965](https://github.com/netease-youdao/LobsterAI/pull/965) | codex | Add built-in `briefing-clip` skill (enabled by default) | New clipping/briefing generation capability |

**Net advancement**: 9 PRs merged—mostly **UI/UX polish, crash fixes, and one new skill**. The two PRs from `fisherdaddy` (#2786, #2787) address core model-serving limits and routing.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#2784](https://github.com/netease-youdao/LobsterAI/issues/2784) / [#2785](https://github.com/netease-youdao/LobsterAI/pull/2785) | **New today**, 1 comment, security-labeled | **NIM P2P direct-message policy fails open** — `disabled`/unset policies allow any sender. Critical auth bypass. Fix PR #2785 open, awaiting review. |
| [#953](https://github.com/netease-youdao/LobsterAI/issues/953) | 3 comments, 1 👍, stale since Mar | **Task stop/delete not actually stopping background execution** — browser searches continue, model calls fail with rate-limit errors, "task crosstalk" when switching models. Core reliability blocker. |
| [#964](https://github.com/netease-youdao/LobsterAI/issues/964) | 1 comment, stale since Mar | **Multi-agent / isolated scenario architecture** — users need multiple independent assistants (personas, knowledge bases, IM accounts) in one instance. High strategic value. |
| [#947](https://github.com/netease-youdao/LobsterAI/issues/947) / [#948](https://github.com/netease-youdao/LobsterAI/issues/948) / [#949](https://github.com/netease-youdao/LobsterAI/issues/949) | 1 comment each, stale since Mar | **IM-model decoupling & quota visibility** — separate chat-model vs IM-model, expose priority/quota/token limits per model for IM integrations. |

**Signal**: Security (#2784) and core task-control reliability (#953) are the loudest pain points. Multi-agent architecture (#964) is the top strategic ask.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical (Security)** | [#2784](https://github.com/netease-youdao/LobsterAI/issues/2784) NIM P2P policy fails open — unauthenticated senders allowed | Open | **Yes**: [#2785](https://github.com/netease-youdao/LobsterAI/pull/2785) open, unmerged |
| **High (Data Loss/Reliability)** | [#953](https://github.com/netease-youdao/LobsterAI/issues/953) Task stop/delete doesn't halt execution; background tasks cause API rate limits & model crosstalk | Open (stale) | No |
| **High (Crash)** | [#956](https://github.com/netease-youdao/LobsterAI/pull/956) `ImCoworkHandler.destroy()` TypeError on background accumulator | **Fixed & Merged** | Yes (#956) |
| **Medium (UX Regression)** | [#962](https://github.com/netease-youdao/LobsterAI/issues/962) 403 "Request blocked" after upgrade; downgrade works | Open (stale) | No |
| **Medium (UX)** | [#954](https://github.com/netease-youdao/LobsterAI/pull/954) Duplicate error messages on `continueSession` failure | **Fixed & Merged** | Yes (#954) |
| **Medium (UX)** | [#957](https://github.com/netease-youdao/LobsterAI/pull/957) Session menu closes during streaming | **Fixed & Merged** | Yes (#957) |
| **Low (Validation)** | [#959](https://github.com/netease-youdao/LobsterAI/pull/959) Silent discard of single-char memory entries | **Fixed & Merged** | Yes (#959) |
| **Low (UI)** | [#944](https://github.com/netease-youdao/LobsterAI/pull/944) Scrollbar breaks modal rounded corners | **Fixed & Merged** | Yes (#944) |
| **Low (UI)** | [#951](https://github.com/netease-youdao/LobsterAI/pull/951) Accidental MCP form data loss on modal close | **Fixed & Merged** | Yes (#951) |

**Note**: 7/9 bugs have fixes merged today. The two **unfixed critical/high issues (#2784, #953)** lack merged PRs—#2784 has an open fix PR awaiting review; #953 has no fix PR.

## 6. Feature Requests & Roadmap Signals
| Request | Issue | Likelihood for Next Version | Rationale |
|---------|-------|----------------------------|-----------|
| **Multi-agent isolated architecture** | [#964](https://github.com/netease-youdao/LobsterAI/issues/964) | Medium | High strategic value, detailed spec, but large scope; may need design phase |
| **IM-model decoupling + quota config** | [#947](https://github.com/netease-youdao/LobsterAI/issues/947), [#948](https://github.com/netease-youdao/LobsterAI/issues/948), [#949](https://github.com/netease-youdao/LobsterAI/issues/949) | High | Incremental, aligns with IM integration push; config-only changes |
| **Model call failure UX improvement** | [#950](https://github.com/netease-youdao/LobsterAI/issues/950) | High | Low effort, high user visibility; matches recent UI polish trend |
| **Default Qwen model first-use error** | [#960](https://github.com/netease-youdao/LobsterAI/issues/960) | High | Likely config/defaults fix; blocks new users |
| **Temporary/ephemeral chat sessions** | [#958](https://github.com/netease-youdao/LobsterAI/pull/958) | Medium | PR open but stale; privacy feature, needs DB migration (`is_temp` flag) |
| **Built-in briefing-clip skill** | [#965](https://github.com/netease-youdao/LobsterAI/pull/965) | **Shipped** | Merged today, enabled by default |

**Prediction**: Next patch will likely include #2785 (security), #950 (UX), #960 (onboarding), and possibly the IM-model decoupling trio. Multi-agent (#964) probably targets a minor version.

## 7. User Feedback Summary
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Tasks don't actually stop** | #953: "stop/delete → browser still searches, background tasks cause API rate limits, model crosstalk" | High — breaks trust in core control loop |
| **Upgrade breaks with 403** | #962: "latest version → 403 blocked; downgrade fixes it" | High — blocks upgrades, suggests release regression |
| **Default model fails on first use** | #960: screenshot shows Qwen error on initial call | Medium — bad first impression for new users |
| **MCP daemon won't start** | #961: non-technical user stuck, "MCP Daemon not started" | Medium — MCP toolchain unusable |
| **IM-model coupling causes failures** | #948: "debugging new model in chat → IM also uses it → IM fails" | Medium — forces workarounds |
| **No visibility into model quotas/limits** | #947, #949: "can't tell which model IM uses, no token/call limits shown" | Medium — ops blindness for IM bots |
| **Security: open P2P policy** | #2784: "`disabled` policy still allows any sender" | Critical — auth bypass, reported today |

**Satisfaction signals**: Users file detailed issues with screenshots, suggest concrete configs, and engage on stale tickets — indicates **invested user base**. Dissatisfaction centers on **reliability (task control, upgrades)** and **IM integration gaps**.

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| [#953](https://github.com/netease-youdao/LobsterAI/issues/953) Task stop/delete not working | 6 months (Mar 27) | Core reliability, causes cascade failures (rate limits, crosstalk) | **Assign investigation**; likely needs engine-level task cancellation fix |
| [#2784](https://github.com/netease-youdao/LobsterAI/issues/2784) NIM P2P policy fails open | **New today** | Security vulnerability in IM gateway | **Review & merge #2785 urgently**; consider backport to `2026.9.23` |
| [#964](https://github.com/netease-youdao/LobsterAI/issues/964) Multi-agent architecture | 6 months | Strategic differentiator; enables multi-tenant/business use | **Design review**; break into epics; assign owner |
| [#962](https://github.com/netease-youdao/LobsterAI/issues/962) 403 on upgrade | 6 months | Blocks upgrades; may be CDN/WAF/config issue | **Reproduce & bisect**; check release artifacts vs old version |
| [#958](https://github.com/netease-youdao/LobsterAI/pull/958) Temporary sessions PR | 6 months | Privacy feature, DB migration ready | **Review PR**; resolve "reappears after restart" bug; merge |
| [#947](https://github.com/netease-youdao/LobsterAI/issues/947) IM model quota config | 6 months | Unblocks IM bot ops; low complexity | **Implement config schema + UI**; link to #948/#949 |

---

**Health Indicators**
- ✅ **PR throughput**: 9 merged in 24h (backlog clearance)
- ✅ **Bug fix rate**: 7/9 recent bugs have merged fixes
- ⚠️ **Release cadence**: 0 releases since Sept 23; fixes not reaching users
- ⚠️ **Critical issue response**: #2784 fix PR open but unmerged for hours
- ❌ **Stale issue ratio**: 9/10 open issues are 6-month-old stale tickets

**Recommendation**: Cut a patch release (`2026.9.30` or `2026.10.1`) incorporating today's 9 merged PRs + #2785 security fix. Prioritize #953 investigation and #2785 merge.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-10-01

## 1. Today's Overview
CoPaw (QwenPaw) shows **high velocity** with 18 issues and 34 PRs updated in the last 24 hours. The project released **v2.2.2-beta.4**, continuing the beta cycle toward a stable 2.2.2. Activity is heavily skewed toward **bug fixes and stability hardening** — particularly around provider compatibility (DeepSeek, Anthropic, custom OpenAI-compatible gateways), memory/embedding pipeline robustness, Windows sandbox security, and background task lifecycle. Several long-standing PRs (Advisor Mode, macOS PATH resolution, Feishu sender identity) remain under review, indicating a backlog of substantial features awaiting integration.

## 2. Releases
### v2.2.2-beta.4 (2026-09-30)
| Change | Type | Details |
|--------|------|---------|
| Reranker UI config panel added to ReMeLightMemoryCard | Feature | PR #6399 by @lecheng2018 |
| Version bump to 2.2.2b4 | Chore | PR #7892 by @cuiyuebing |
| Console: split chat dependencies | Perf | Part of the same release |

**Breaking changes**: None documented in this beta.  
**Migration notes**: Beta releases are not recommended for production; verify installation via the [release verification issue](https://github.com/agentscope-ai/QwenPaw/issues/8053).

[🔗 Release page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2-beta.4)

## 3. Project Progress (Merged/Closed Today)
| PR / Issue | Title | Category | Impact |
|------------|-------|----------|--------|
| [#8049](https://github.com/agentscope-ai/QwenPaw/pull/8049) | Fix timezone resolution per timestamp (DST-safe) | Bug fix | Corrects transcript timestamp drift across DST boundaries |
| [#7604](https://github.com/agentscope-ai/QwenPaw/issues/7604) | LLM stream idle timeout hardcoded at 30s | Bug fix (closed) | Configuration now possible via env/WebUI |
| [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | Console stop cancels Feishu session cross-session | Bug fix (closed) | Prevents accidental cancellation of active IM sessions |

*Only 3 items closed/merged in the last 24h — the bulk of PRs remain open.*

## 4. Community Hot Topics
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) **Advisor Mode** | PR (XXXL) | — | **Dual-model loop**: strong advisor + cheap worker; opening plan, iterative refinement. High architectural impact. |
| [#6274](https://github.com/agentscope-ai/QwenPaw/issues/6274) **`ask_user_question` tool** | Issue (enhancement) | 3 👍1 | **Human-in-the-Loop**: structured multi-choice prompts with free-text fallback; spans backend + console. |
| [#5722](https://github.com/agentscope-ai/QwenPaw/pull/5722) **Feishu per-message sender** | PR | — | **Group chat context**: retain sender identity in shared sessions so model knows who said what. |
| [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) **`send_file_to_user` pollutes context** | Bug | 4 | **Provider-agnostic content handling**: empty assistant message + file blocks cause 400s on all models. |
| [#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040) **Embedding reindex silent batch drop** | Bug | 2 | **CJK token-limit safety**: single oversized chunk kills entire batch; needs per-item fallback. |

**Underlying theme**: Users are pushing CoPaw into **multi-modal, multi-provider, multi-user** scenarios (Feishu/WeCom/DeepSeek/Anthropic/custom gateways) and hitting edge cases the current architecture doesn't gracefully degrade.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Symptoms | Fix PR? |
|----------|-------|----------|---------|
| 🔴 **Critical** | [#7672](https://github.com/agentscope-ai/QwenPaw/issues/7672) Security sandbox bypass on Windows | Agent escapes sandbox, executes arbitrary COM commands (e.g., `PowerPoint.Application.Quit()`) | No |
| 🔴 **Critical** | [#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002) Windows auto mode + sandbox off → Office COM `Quit()` closes user's PowerPoint | Unauthorized app termination | No |
| 🟠 **High** | [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) `send_file_to_user` + empty assistant message → persistent 400 on all models | Session permanently broken until reset | No |
| 🟠 **High** | [#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064) DeepSeek provider: PDF from `send_file_to_user` breaks session forever | Every subsequent request → 400 `file must have file_id or file_data` | No |
| 🟠 **High** | [#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040) Embedding reindex: CJK chunk over token limit silently drops whole batch | `20 chunks failed` but logs show `processed=126/126` | [#8062](https://github.com/agentscope-ai/QwenPaw/pull/8062) (partial) |
| 🟡 **Medium** | [#8042](https://github.com/agentscope-ai/QwenPaw/issues/8042) Tool output files auto-fed to model → Internal error if unsupported | PDFs, etc. sent back as input | No |
| 🟡 **Medium** | [#8013](https://github.com/agentscope-ai/QwenPaw/issues/8013) Skill download timeout (30s) for large skills (80MB+) | UI aborts, backend continues, skill never lands | No |
| 🟡 **Medium** | [#8035](https://github.com/agentscope-ai/QwenPaw/issues/8035) Transcription settings can't update `transcription_model` | Switching providers silently breaks transcription | No |
| 🟡 **Medium** | [#8047](https://github.com/agentscope-ai/QwenPaw/issues/8047) DBX MCP 422 plain-text not treated as legacy → driver inactive, Console 503 | Streamable HTTP driver never activates | No |
| 🟡 **Medium** | [#8059](https://github.com/agentscope-ai/QwenPaw/issues/8059) Background task record lost (404) after completion; empty final response | Manager agent can't retrieve worker results | [#8063](https://github.com/agentscope-ai/QwenPaw/pull/8063) (wake parent) |
| 🟢 **Low** | [#8046](https://github.com/agentscope-ai/QwenPaw/issues/8046) `_process_local_tz()` freezes UTC offset → DST shift in transcripts | Timestamps off by DST delta | [#8049](https://github.com/agentscope-ai/QwenPaw/pull/8049) ✅ merged |
| 🟢 **Low** | [#8058](https://github.com/agentscope-ai/QwenPaw/issues/8058) `prompt_cache_key` rejected for custom OpenAI-compatible providers | `ValueError: Unsupported cache control` | [#8061](https://github.com/agentscope-ai/QwenPaw/pull/8061) |
| 🟢 **Low** | [#8057](https://github.com/agentscope-ai/QwenPaw/issues/8057) Context meter under-reports Anthropic cache tokens | Cache read/write tokens not counted | [#8060](https://github.com/agentscope-ai/QwenPaw/pull/8060) |

**Pattern**: Provider-specific content handling (files, caching, token counting) and Windows security boundaries are the two dominant instability surfaces.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|-----------------------------|-----------|
| **Advisor Mode** (dual-model loop) | [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) | 🟡 Medium | Large PR, under review since Sep 5; architectural scope suggests 2.3+ |
| **`ask_user_question` tool** (Human-in-the-Loop) | [#6274](https://github.com/agentscope-ai/QwenPaw/issues/6274) | 🟢 High | Clear spec, affects core + console, community 👍; fits 2.2.x scope |
| **Filter `@all` / `@everyone` mentions** | [#7945](https://github.com/agentscope-ai/QwenPaw/issues/7945) | 🟢 High | Simple IM hygiene, low implementation risk |
| **Built-in PRD CRUD tool + renderer** | [#4902](https://github.com/agentscope-ai/QwenPaw/pull/4902) | 🟡 Medium | Long-open (Jun), replaces plugin; frontend work done |
| **Extra system prompt per request** | [#4580](https://github.com/agentscope-ai/QwenPaw/pull/4580) | 🟡 Medium | OpenClaw parity, useful for API key injection |
| **Proxy support for subprocess commands** | [#2505](https://github.com/agentscope-ai/QwenPaw/pull/2505) | 🟢 High | WSL/enterprise/CN network need; env-var based, non-invasive |
| **Auto-install WebView2 on Windows** | [#3120](https://github.com/agentscope-ai/QwenPaw/pull/3120) | 🟢 High | Eliminates white-screen desktop failures |
| **QQ local file upload / self-healing send** | [#1619](https://github.com/agentscope-ai/QwenPaw/pull/1619), [#1560](https://github.com/agentscope-ai/QwenPaw/pull/1560) | 🟡 Medium | Platform-specific, niche but complete |

## 7. User Feedback Summary
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Provider content handling is brittle** | #8022, #8064, #8042, #8057, #8058 — files, cache, tokens all break sessions | 5+ issues in 24h |
| **Windows sandbox is not a boundary** | #7672, #8002 — COM escape, app termination | 2 critical security issues |
| **Background tasks are fire-and-forget** | #8059 — task records vanish, no notification | 1 issue + [#8063](https://github.com/agentscope-ai/QwenPaw/pull/8063) fix PR |
| **Large skill distribution fails** | #8013 — 30s timeout, 80MB skill never installs | 1 report, blocks power users |
| **IM integrations lose context** | #7011 (cross-session cancel), #5722 (sender identity), #7945 (@all spam) | 3 Feishu/WeCom issues |
| **Timezone/DST bugs in transcripts** | #8046 → fixed by #8049 | 1 confirmed, 1 merged fix |
| **Embedding pipeline silent data loss** | #8040 — batch drop on token limit | 1 report, partial fix in #8062 |

**Satisfaction signals**: Users file detailed, reproducible issues (often with AI-assisted reports) and contribute fixes — indicates **high engagement, high expectations**. Dissatisfaction centers on **silent failures** (data loss, session corruption) rather than missing features.

## 8. Backlog Watch (Stale / Needs Maintainer Attention)
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) Advisor Mode | 26 days | Under review | Flagship feature; needs architecture review |
| [#5861](https://github.com/agentscope-ai/QwenPaw/pull/5861) macOS login-shell PATH | 85 days | Under review | Blocks user-installed tools on desktop |
| [#5722](https://github.com/agentscope-ai/QwenPaw/pull/5722) Feishu sender identity | 91 days | Open | Group chat usability |
| [#5170](https://github.com/agentscope-ai/QwenPaw/pull/5170) Cache PROFILE.md reads | 110 days | Open | Perf: O(n) disk reads per `/agents` request |
| [#4902](https://github.com/agentscope-ai/QwenPaw/pull/4902)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-10-01

## 1. Today's Overview
ZeroClaw shows **exceptionally high development velocity** with 62 items (12 issues + 50 PRs) updated in the last 24 hours, all remaining open. The project is in a **heavy pre-release phase for v0.9.0**, characterized by a massive architectural refactor splitting the gateway into a separate process (`zeroclaw-gw`), implementing RPC parity for all HTTP routes, and hardening the security boundary around daemon identity verification and credential handling. No releases were cut today, and no PRs were merged — indicating the maintainers are batching a large, interdependent changeset. The contributor **JordanTheJet** (distinguished contributor) drives the majority of this work across 15+ stacked PRs.

## 2. Releases
**No new releases today.** The project is targeting **v0.9.0** (referenced in 15+ PRs and several issues), which appears to be a major architectural milestone involving:
- Gateway process split (`zeroclaw-gw` binary)
- RPC protocol stabilization (OpenRPC contract completion)
- Security hardening (OS account verification, credential binding)
- Desktop app lifecycle changes
- WASM plugin host shipping in release artifacts

## 3. Project Progress
**No PRs merged or closed today.** All 50 PRs remain open, many stacked on each other (e.g., #11186 → #11274 → #11277 → #11280 → #11331 → #11315 → #11351). Key advancement areas:

| Area | PRs | Status |
|------|-----|--------|
| **Gateway split & RPC parity** | #11132, #11169, #11172, #11277, #11280, #11331, #11315, #11351 | Open, stacked |
| **Daemon identity & security** | #11274, #11324, #11325, #11346 | Open, stacked |
| **Desktop app lifecycle** | #11278, #11281, #11345 | Open, pending maintainer decision |
| **WASM plugin host artifacts** | #11347 | Open, on test branch |
| **Config cleanup (schema v4)** | #11344 | Open, pending maintainer approval |
| **Architecture docs & contracts** | #11090, #11300, #11334, #11341 | Open |

## 4. Community Hot Topics
*No items have comments or reactions recorded in the data (all show `Comments: undefined` or `👍: 0` for PRs; issues have 1–4 comments but no reactions). The "hottest" topics by issue comment count and severity are:*

| Item | Type | Comments | Severity | Core Need |
|------|------|----------|----------|-----------|
| [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) | Bug | 4 | **S0 (data loss/security)** | Delegated agents lose principal memory scope — **critical security regression** |
| [#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) | Feature | 4 | P2 | llama.cpp model router for quick model switching |
| [#10781](https://github.com/zeroclaw-labs/zeroclaw/issues/10781) | Enhancement | 3 | P2 | Inert config keys (`context_compression.*`, `history_pruning.*`) mislead users |
| [#9394](https://github.com/zeroclaw-labs/zeroclaw/issues/9394) | Bug | 2 | **P1, High risk** | Pairing dashboard config accepted but unread; pairing codes never expire |
| [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | Bug | 2 | **P1, High risk** | OpenRouter cost tracking broken — all tokens classified as "free tok" |
| [#11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) | Bug | 2 | P1 | WhatsApp Web drops media captions |
| [#11239](https://github.com/zeroclaw-labs/zeroclaw/issues/11239) | Bug | 1 | **S0 (data loss/security)** | Owned sessions leak into shared memory via `spawn_subagent`/`execute_pipeline` |

**Underlying needs:** 
- **Security hardening** is the dominant theme (3 S0/P0 issues, 4 high-risk PRs)
- **Observability/cost tracking** broken for OpenRouter users
- **Config honesty** — users set options that silently do nothing
- **Channel fidelity** — WhatsApp metadata loss

## 5. Bugs & Stability
*Ranked by severity (S0 > P0 > P1 > P2 > P3), all reported/updated today:*

| Severity | Issue | Component | Fix PR? |
|----------|-------|-----------|---------|
| **S0** | [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) Delegated memory tools lose principal scope | `memory`, `tool:delegate` | No direct PR yet |
| **S0** | [#11239](https://github.com/zeroclaw-labs/zeroclaw/issues/11239) Owned sessions reach shared memory via `spawn_subagent`/`execute_pipeline` | `memory` | No direct PR yet |
| **P0** | [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) (also tagged `release:v0.9.0`) | — | — |
| **P1** | [#9394](https://github.com/zeroclaw-labs/zeroclaw/issues/9394) Pairing dashboard config inert; codes never expire | `config`, `gateway`, `security:pairing` | Related: [#11344](https://github.com/zeroclaw-labs/zeroclaw/pull/11344) removes unused settings |
| **P1** | [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) OpenRouter spend shows $0.00, all tokens "free tok" | `runtime`, `provider:openrouter` | No PR yet |
| **P1** | [#11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) WhatsApp Web drops media captions | `channel:whatsapp` | No PR yet |
| **P2** | [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) llama.cpp/custom provider uses wrong URI for model fetching | `provider` | Related to [#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) |
| **P2** | [#11333](https://github.com/zeroclaw-labs/zeroclaw/issues/11333) Skill review tools can't see skills from `skill_bundles` | `tools` | No PR yet |
| **P2** | [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) Skill learning loop skipped for channel/webhook/gateway turns | `runtime` | No PR yet |
| **P2** | [#10781](https://github.com/zeroclaw-labs/zeroclaw/issues/10781) Inert config keys (`context_compression.*`, etc.) | `config`, `docs` | [#11344](https://github.com/zeroclaw-labs/zeroclaw/pull/11344) removes pairing-dashboard keys |
| **P3** | [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) (also tagged S3) | — | — |

**Critical gap:** Two **S0 memory isolation bugs** (#11198, #11239) have no visible fix PRs despite being tagged `release:v0.9.0`. The security-focused PRs (#11274, #11277, #11324, #11325) address RPC/credential boundaries but not these specific memory-plane leaks.

## 6. Feature Requests & Roadmap Signals
*From issues updated today and PR direction:*

| Feature | Source | Likelihood for v0.9.0 |
|---------|--------|------------------------|
| **llama.cpp model router** (quick model switching) | [#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) (P2, accepted, quickstart, icebox) | Medium — accepted but iceboxed; related bug [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) active |
| **CLI daemon identity verification on Windows** (named-pipe) | [#11325](https://github.com/zeroclaw-labs/zeroclaw/issues/11325), [#11324](https://github.com/zeroclaw-labs/zeroclaw/issues/11324) | High — follow-ups to #10876/#11313; PRs [#11274](https://github.com/zeroclaw-labs/zeroclaw/pull/11274), [#11346](https://github.com/zeroclaw-labs/zeroclaw/pull/11346) in progress |
| **WASM plugin host in release artifacts** | [#11347](https://github.com/zeroclaw-labs/zeroclaw/pull/11347) | High — PR open on test branch |
| **Desktop: refuse in-app self-upgrade of bundled kernel** | [#11278](https://github.com/zeroclaw-labs/zeroclaw/pull/11278) | Pending maintainer decision |
| **Desktop: Quit stops only this instance's processes** | [#11281](https://github.com/zeroclaw-labs/zeroclaw/pull/11281) | Pending maintainer decision |
| **Gateway route coverage classification** (docs/tests) | [#11334](https://github.com/zeroclaw-labs/zeroclaw/pull/11334) | High — part of v0.9.0 gateway split |
| **OpenRPC contract: describe every method's result** | [#11341](https://github.com/zeroclaw-labs/zeroclaw/pull/11341) | High — stacked on RPC proto work |

**Strongest signals:** Gateway split, RPC parity, daemon identity verification, and WASM plugin shipping are actively being built. The llama.cpp router is accepted but deferred.

## 7. User Feedback Summary
*Pain points extracted from issue descriptions:*

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Silent config failures** | [#10781](https://github.com/zeroclaw-labs/zeroclaw/issues/10781): "Users reasonably set them expecting reduced context/token usage, and nothing happens" | Trust erosion; wasted optimization effort |
| **Broken cost visibility** | [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204): "After ~90 requests / ~2.1 M tokens… Dashboard → Cost reports `$0.000000`" | Cannot monitor spend; all tokens misclassified as free |
| **Security anxiety** | [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198): "lets the child agent read/write the parent's private memory" | S0 — data loss / security risk |
| **WhatsApp metadata loss** | [#11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257): "agent gets the placeholder (`[Image]`) and never sees the text the sender typed" | Degraded agent capability on a major channel |
| **Skill system gaps** | [#11333](https://github.com/zeroclaw-labs/zeroclaw/issues/11333), [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332): Skills work but review/learning loops don't see bundle skills or channel turns | Learning/automation features unreliable |
| **llama.cpp URI handling** | [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296), [#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539): Custom router URI ignored | Blocks local model routing workflows |

**Overall sentiment:** Power users (self-hosters, developers) are hitting **architectural rough edges** in memory isolation, cost tracking, config honesty, and channel fidelity. The v0.9.0 work directly addresses the RPC/security foundation but not all these user-facing bugs yet.

## 8. Backlog Watch
*Long-standing or high-impact items needing maintainer attention:*

| Item | Age / Status | Why It Matters |
|------|--------------|----------------|
| [#9394](https://github.com/zeroclaw-labs/zeroclaw/issues/9394) Pairing dashboard inert; codes never expire | Created **2026-07-26** (66 days), P1, High risk, `status:no-stale` | Security: pairing codes are effectively permanent; config section is dead code. PR [#11344](https://github.com/zeroclaw-labs/zeroclaw/pull/11344) removes it but **awaits maintainer approval**. |
| [#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) llama.cpp model router | Created **2026-06-12** (111 days), accepted, `quickstart`, `icebox` | Popular request (quickstart tag) but iceboxed; now blocked by URI bug [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296). |
| [#11090](https://github.com/zeroclaw-labs/zeroclaw/pull/11090) Runtime composition contract (docs) | Created **2026-09-24**, `status:blocked`, needs Core Team review on [#11092](https://github.com/zeroclaw-labs/zeroclaw/pull/11092) | Blocks public API stabilization for `zeroclaw-runtime`; ADR-016 exception required. |
| [#11278](https://github.com/zeroclaw-labs/zeroclaw/pull/11278) Desktop: refuse in-app self-upgrade | **Pending maintainer decision** | UX/safety policy for desktop bundles; not merging until decided. |
| [#11281](https://github.com/zeroclaw-labs/zeroclaw/pull/11281) Desktop: Quit policy | **Pending maintainer decision** | Process lifecycle policy; not merging until decided. |
| [#11344](https://github.com/zeroclaw-labs/zeroclaw/pull/11344) Remove unused pairing-dashboard settings (schema v4) | **Maintainer approval pending** | Depends on #11218 (schema v4); cleanup blocked on decision. |
| [#11186](https://github.com/zeroclaw-labs/zeroclaw/pull/11186) (referenced as base for 8+ PRs) | Branch on fork, blocking stacked PR merges | **Critical merge bottleneck** — 15+ PRs stack on this; cannot land until it merges. |

**Top action needed:** Resolve **#

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*