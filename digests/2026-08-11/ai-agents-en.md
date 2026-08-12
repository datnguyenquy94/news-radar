# OpenClaw Ecosystem Digest 2026-08-11

> Issues: 215 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-11 02:11 UTC

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

# OpenClaw Project Digest — 2026-08-11

## 1. Today's Overview

OpenClaw shows **very high development velocity** with 500 PRs and 215 issues updated in the last 24 hours. The project is in active maintenance mode with no new releases, but significant bug-fix and refactoring work underway. The 167 merged/closed PRs indicate strong maintainer throughput, though the 333 open PRs suggest a growing review backlog. Critical reliability issues dominate the issue tracker — silent reply failures, session state corruption, message loss, and process leaks — signaling that stability hardening is the current priority over new features.

## 2. Releases

**No new releases** in the last 24 hours. The project appears to be between releases

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem (2026-08-11)

## 1. Ecosystem Overview

The personal AI assistant / agent open-source ecosystem shows **high fragmentation with convergent architectural patterns**. Twelve active projects span desktop agents (Hermes, LobsterAI, CoPaw), CLI-first frameworks (OpenClaw, NanoBot, PicoClaw, NanoClaw, ZeroClaw), server/bridge implementations (IronClaw, Moltis, NullClaw), and experimental runtimes (ZeptoClaw). All projects are converging on **multi-provider LLM gateways, MCP (Model Context Protocol) integration, plugin/skill extensibility, and durable session/state management** — but differ sharply on target deployment (desktop vs. server vs. embedded), primary interface (CLI, WebUI, Telegram, native app), and maturity. The ecosystem is in a **stabilization sprint** after rapid feature expansion: critical bugs around token loops, session corruption, provider interop, and silent data loss dominate backlogs across 8+ projects.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Latest Release | Health Score |
|---------|--------------|-----------|-------------------|----------------|--------------|
| **OpenClaw** | 215 | 500 | 167 | None (between releases) | 🟡 High velocity, growing review backlog |
| **NanoBot** | 4 | 24 | 10 | None (accumulating for batch) | 🟢 Healthy velocity, rising stability |
| **Hermes Agent** | 16 | 50 | 10 | None (v0.20.x patch likely) | 🟡 High velocity, P0 Windows blocker |
| **PicoClaw** | 4 | 9 | 7 | v0.3.1 (2cf030d2) | 🟢 Stable with active triage |
| **NanoClaw** | 3 | 20 | 10 | None (pre-release) | 🟢 High throughput, critical durability bugs |
| **NullClaw** | 1 | 1 | 0 | None (quiet maintenance) | 🔴 Low activity, dependency backlog |
| **IronClaw** | 28 | 50 | 17 | v1.1.1-rc.1 (2026-08-10) | 🟢 Stabilization sprint, architectural refactors |
| **LobsterAI** | ~3 | 34 | 20 | None (active dev phase) | 🟢 High velocity, stale-closure risk |
| **Moltis** | 3 | 2 | 0 | None (triage phase) | 🟡 Low delivery, Apple Container backend issues |
| **CoPaw** | 17 | 50 | 17 | v2.1.0 notes in PR #6875 | 🟢 High velocity, pre-release polish |
| **ZeptoClaw** | 0 | 0 | 0 | — | ⚪ No activity |
| **ZeroClaw** | 8 | 50 | 2 | v0.8.4 | 🟡 Very high velocity, S1 bugs, aging PR backlog |

**Note**: Health Score: 🟢 = Healthy velocity & stability focus; 🟡 = High velocity with significant blockers/backlog; 🔴 = Low maintenance; ⚪ = Inactive.

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Largest-scale development throughput** (500 PRs/24h, 167 merged) — indicates strongest maintainer bandwidth and contributor base
- **Core reference implementation** status — other projects (LobsterAI, PicoClaw, NanoClaw) visibly build on or integrate with OpenClaw gateway
- **Broadest issue surface coverage** — tracks silent reply failures, session state corruption, message loss, process leaks systematically

**Technical Approach Differences:**
- **Gateway-centric architecture**: OpenClaw is the *integration hub* (LobsterAI's "openclaw" component, NanoBot's MCP gateway, IronClaw's channel adapters all mirror this pattern)
- **Multi-agent orchestration** via dispatch rules (PicoClaw #3301, NanoClaw's agent templates/plugins) — OpenClaw leads the routing/session model
- **Provider-agnostic model registry** with per-model config (PicoClaw #2132 merged today) — OpenClaw's config schema influences downstream

**Community Size Comparison:**
- **OpenClaw >> others** in raw PR/issue volume (5-10x nearest peer)
- **NanoBot, Hermes, CoPaw, IronClaw, ZeroClaw** form a second tier (20-50 PRs/day)
- **PicoClaw, NanoClaw, LobsterAI, Moltis, NullClaw** are smaller, focused teams

---

## 4. Shared Technical Focus Areas (Cross-Project Requirements)

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **MCP (Model Context Protocol) Stability & OAuth** | NanoBot (#5297, #5316, #5179), IronClaw (#6727), LobsterAI (gateway), ZeroClaw (gateway) | Remote MCP server auth (browser OAuth), SDK v2 migration, transport hardening (SSRF, DNS pinning), cancel-scope crash fixes |
| **Session/State Durability & Corruption Prevention** | OpenClaw (silent reply failures, session corruption), NanoBot (#5271, #5324), PicoClaw (#3301, #3311), NanoClaw (#3226, #3223), Hermes (#83312, #83580), ZeroClaw (#9901, #9896) | Atomic session ops, dispatch-aware session commands, idle-loop guards, background task race fixes, silent drop prevention |
| **Provider Interop & Model Identity Fidelity** | NanoBot (OrcaRouter, custom providers), PicoClaw (#3298 AI Router preset, #3294 /list models), LobsterAI (#2452 provider prefix loss), CoPaw (#6803 strict OpenAI-compat), ZeroClaw (#9809 multi-model/profile) | Named provider presets, model ID parsing with `/`, strict schema sanitization, per-session overrides |
| **Token/Cost Observability & Guardrails** | NanoBot (#5324 10M token burn, #5299 usage API), PicoClaw (#3311 silent loops), ZeroClaw (concurrency limits #9902), IronClaw (#7447 tool budget loops) | Per-turn usage records, loop iteration caps, configurable timeouts, pagination over redundant fetches |
| **Desktop/Windows Runtime Stability** | Hermes (P0 watchdog #83555, black windows #81290), LobsterAI (#2467 pip shims, #2466 IPC stall), CoPaw (#6885 IME crash), IronClaw (WebUI streaming) | Parent-process watchdog fixes, venv/trampoline compatibility, IME composition handling, renderer lifecycle diagnostics |
| **Security Hardening & Supply Chain** | PicoClaw (#3297 remote exec boundaries), NanoBot (#5317 WebSocket mutation, #5320 Docker caps), NullClaw (#956 Alpine 3.24), ZeroClaw (#9904 bitmaps RUSTSEC, #8713 SSRF gate) | Remote exec approval, WebSocket auth frames, base image updates, dependency vulnerability waivers, SSRF protection |
| **Plugin/Skill/Extension Ecosystem** | NanoBot (Agent Plugins v1 #5288), PicoClaw (dispatch rules), NanoClaw (Agent Plugins 1.0 #3220), IronClaw (Extensions vNext #7354), CoPaw (Creator plugin #6870, marketplace #6880), Hermes (skill curator #83580) | Versioned plugin formats, sandboxed execution, marketplace discovery, security scanning, multi-agent topologies (A2A) |

---

## 5. Differentiation Analysis

| Dimension | Clusters |
|-----------|----------|
| **Primary Deployment Target** | **Desktop Apps**: Hermes (Electron/Tauri), LobsterAI (Tauri/React), CoPaw (Tauri), IronClaw (WebUI + Reborn native)<br>**Server/Bridge**: OpenClaw, NanoBot, NanoClaw, ZeroClaw, Moltis, NullClaw<br>**CLI-First**: PicoClaw, OpenClaw (core), ZeroClaw |
| **Interface Paradigm** | **Multi-Channel Hub**: IronClaw (Web, Slack, Telegram, Matrix, Signal), NullClaw (A2A), Moltis (Apple Container)<br>**Single-Channel Deep**: CoPaw (Telegram-centric), Hermes (Telegram + Desktop), LobsterAI (Desktop + WebUI)<br>**CLI/REPL**: PicoClaw, OpenClaw, NanoBot, ZeroClaw |
| **Extensibility Model** | **Plugin/Script Marketplace**: CoPaw (Creator, marketplace), Hermes (skills), NanoBot (Agent Plugins), IronClaw (Extensions vNext)<br>**Configuration-Driven**: PicoClaw (dispatch rules, model config), NanoClaw (agent templates → plugins), ZeroClaw (SOP/zerocode)<br>**Protocol-Native**: NullClaw (A2A client), IronClaw (MCP servers) |
| **Target User** | **Power Users/Developers**: OpenClaw, ZeroClaw, PicoClaw, NanoClaw, NanoBot<br>**End-User Desktop**: Hermes, LobsterAI, CoPaw, IronClaw<br>**Platform Integrators**: NullClaw, Moltis, IronClaw (admin chat config #7046) |
| **Architectural Maturity** | **Stabilizing Core**: OpenClaw, IronClaw (v1.1.1-rc), NanoBot, CoPaw (v2.1.0)<br>**Active Refactor**: Hermes (Windows), ZeroClaw (provider refactor), NanoClaw (Agent Plugins 1.0)<br>**Early/Experimental**: Moltis, ZeptoClaw, NullClaw |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (High Velocity + Active Stabilization)** | OpenClaw, NanoBot, Hermes, CoPaw, IronClaw, ZeroClaw, LobsterAI | 20-500 PRs/day; critical bugs fixed same-day; pre-release patches; architectural refactors landing |
| **Steady Maintenance (Focused Scope, Regular Merges)** | PicoClaw, NanoClaw | 9-20 PRs/day; security/config/UX fixes merged; clear next-version targets |
| **Low Momentum / Transition** | NullClaw, Moltis | <5 PRs/day; dependency updates dominate; feature PRs stale >20 days |
| **Inactive** | ZeptoClaw | Zero activity |

**Key Insight**: The ecosystem is **bifurcating** — a top tier (6 projects) investing heavily in **production hardening** (session durability, MCP stability, provider interop, desktop reliability), while a second tier maintains **niche/specialized** implementations. The top tier converges on the same 5-6 technical requirements (see Section 4).

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **MCP is the de facto tool protocol** — but **remote auth & SDK v2 are the blocking frontier** | NanoBot (#5297, #5179, #5300), IronClaw (#6727), ZeroClaw (gateway), LobsterAI (gateway) | **Invest in MCP SDK v2 compatibility & browser OAuth flows now** — all major gateways are building this; early adopters gain provider ecosystem access |
| **Session durability > new features** — silent data loss is the #1 user trust killer | OpenClaw, NanoBot (#5324, #5271), PicoClaw (#3301, #3311), NanoClaw (#3226, #3223), Hermes (#83580), ZeroClaw (#9901) | **Design for atomic session ops, idempotent ingestion, and observable error paths** — users will abandon agents that lose context or silently drop messages |
| **Multi-provider model routing with identity preservation** is a hard requirement | PicoClaw (#3298, #3294), LobsterAI (#2452), CoPaw (#6803), ZeroClaw (#9809), NanoBot (OrcaRouter) | **Build model registry with provider prefix + model ID separation** — "custom_0/deepseek-ai/DeepSeek-V4" parsing breaks everywhere; named presets win |
| **Desktop agent reliability hinges on runtime/venv watchdog correctness** | Hermes (#83555, #81290), LobsterAI (#2467, #2466), CoPaw (#6885) | **Test parent-process detection in uv/pip/conda trampolines** — false-positive watchdog exits are the top desktop blocker |
| **Token/cost observability must be first-class, not afterthought** | NanoBot (#5324 10M burn, #5299), PicoClaw (#3311), ZeroClaw (#9902), IronClaw (#7447) | **Expose per-turn usage APIs + configurable loop guards** — enterprise/self-hosted users demand cost predictability |
| **Plugin/skill security scanning with usable allowlists** is a productivity gate | Hermes (#57954), PicoClaw (#3314), CoPaw (marketplace #6880), NanoBot (Agent Plugins) | **Implement allowlist-aware static analysis** — false positives block skill iteration; whitelist must be respected |
| **A2A (Agent-to-Agent) protocol adoption starting** | NullClaw (#700 a2a_call), IronClaw (Extensions vNext), Hermes (multi-account Telegram) | **Prepare for multi-agent topologies** — doorman/private agent patterns, delegated sessions, cross-agent tool calling |

---

**Bottom Line for Decision-Makers**: The ecosystem is **consolidating around a shared technical stack** (MCP, durable sessions, multi-provider gateways, plugin sandboxing) but **fragmented on deployment model**. Projects investing in **cross-cutting stability** (session durability, provider interop, token guardrails, desktop runtime) are pulling ahead. For new entrants: **build on OpenClaw/IronClaw/NanoBot gateway patterns** rather than reinventing — the integration surface is stabilizing rapidly.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-11

## 1. Today's Overview
NanoBot shows **high development velocity** with 24 PRs updated and 4 issues active in the last 24 hours. The project is in active stabilization and feature-expansion mode: 10 PRs were merged/closed today, addressing critical bugs (infinite-loop memory consolidation, workspace-boundary bypass, session-data races) and shipping WebUI/UX improvements (tabbed workbench, OAuth for remote MCP, WebSocket mutation hardening). No new release was cut, suggesting changes are accumulating for a near-term batch release. Community engagement is modest—issues carry few comments—but the maintainers are rapidly converting bug reports into fixes.

## 2. Releases
**No new releases today.** The latest published version remains prior to 2026-08-11. Expect a release soon given the volume of merged fixes and features.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Area | Summary |
|----|------|---------|
| [#5325](https://github.com/HKUDS/nanobot/pull/5325) | **Bug fix (P2)** | `edit_file` now rejects no-op edits (identical `old_text`/`new_text`), eliminating the infinite-loop trigger in Dream memory consolidation ([#5324](https://github.com/HKUDS/nanobot/issues/5324)). |
| [#5316](https://github.com/HKUDS/nanobot/pull/5316) | **Feature (P2)** | Browser-based OAuth for remote Streamable HTTP/SSE MCP servers; one-click presets for Xmind, Notion, Linear. Addresses [#5297](https://github.com/HKUDS/nanobot/issues/5297). |
| [#5321](https://github.com/HKUDS/nanobot/pull/5321) | **Refactor (P2)** | Gateway now owns WebUI settings services with atomic read-modify-write; OAuth flow state moved to gateway-scoped registry. |
| [#5317](https://github.com/HKUDS/nanobot/pull/5317) | **Security fix (P1)** | State-changing WebUI operations moved from GET/query-string to authenticated WebSocket request/reply frames. |
| [#5319](https://github.com/HKUDS/nanobot/pull/5319) | **Refactor (P2)** | Replaced reflective runtime state access in `MyTool` with explicit `RuntimeControl` protocol and detached snapshots. |
| [#5318](https://github.com/HKUDS/nanobot/pull/5318) | **Refactor (P2)** | Extracted deterministic event-projection helpers for `useNanobotStream`; added shared replay fixtures. |
| [#5315](https://github.com/HKUDS/nanobot/pull/5315) | **UX fix (P2)** | Improved workspace-creation failure recovery (preserves prompt/path, keyboard-focused retry) and simplified auth challenge UI. |
| [#5310](https://github.com/HKUDS/nanobot/pull/5310) | **Bug fix** | Weixin forced QR login now performs a fully fresh flow across CLI and WebUI. |
| [#5320](https://github.com/HKUDS/nanobot/pull/5320) | **Docker/CI (P1)** | Restored required capabilities (`CAP_DAC_OVERRIDE`, `CAP_FOWNER`, `CAP_SETGID`) for root bootstrap while keeping `cap_drop: ALL`; added CI entrypoint test. |
| [#5326](https://github.com/HKUDS/nanobot/pull/5326) | **WebUI polish (P2)** | Softened form-control focus rings to a consistent 2px inset indicator. |

## 4. Community Hot Topics
| Item | Type | Comments | Signal |
|------|------|----------|--------|
| [#5297](https://github.com/HKUDS/nanobot/issues/5297) | Issue (enhancement) | 3 | **Strong demand for MCP OAuth** — users need to connect to remote MCP servers (e.g., Xmind) that require browser OAuth; PR [#5316](https://github.com/HKUDS/nanobot/pull/5316) delivers this. |
| [#5324](https://github.com/HKUDS/nanobot/issues/5324) | Bug | 2 | **Critical token burn** — Dream memory consolidation entered 23-min infinite loop, consuming ~10M tokens (~half-month quota). Root cause: `edit_file` accepted no-op edits. Fixed by [#5325](https://github.com/HKUDS/nanobot/pull/5325). |
| [#5327](https://github.com/HKUDS/nanobot/issues/5327) | Bug | 1 | **Non-deterministic message repetition** during reasoning (“Good points, let me investigate…”). No fix PR yet; likely prompt/loop-control issue. |
| [#5322](https://github.com/HKUDS/nanobot/pull/5322) | PR (feature) | — | **Tabbed-pane workbench** — major WebUI redesign: topics become tabs with 1–4 panes, switchable layouts, persistent sidebar. High community interest expected once merged. |

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#5324](https://github.com/HKUDS/nanobot/issues/5324) Dream memory consolidation infinite loop → 10M+ token burn | **Fixed** | [#5325](https://github.com/HKUDS/nanobot/pull/5325) (merged) |
| **High** | [#5300](https://github.com/HKUDS/nanobot/issues/5300) MCP HTTP 530 → anyio cancel-scope cross-task crash → gateway hang/CPU spike | Open | No PR yet; needs MCP client hardening & task isolation |
| **High** | [#5327](https://github.com/HKUDS/nanobot/issues/5327) Nanobot repeats same reasoning message randomly | Open | No PR yet; investigate loop injection / prompt caching |
| **Medium** | [#5271](https://github.com/HKUDS/nanobot/pull/5271) Stale background task saves overwrite session after `/new` | Open (PR) | [#5271](https://github.com/HKUDS/nanobot/pull/5271) (open, conflict) |
| **Medium** | [#5320](https://github.com/HKUDS/nanobot/pull/5320) Docker entrypoint missing capabilities → privilege-drop failure | **Fixed** | [#5320](https://github.com/HKUDS/nanobot/pull/5320) (merged) |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **MCP OAuth (browser-based) for remote servers** | [#5297](https://github.com/HKUDS/nanobot/issues/5297), [#5316](https://github.com/HKUDS/nanobot/pull/5316) | ✅ **Merged** — will ship |
| **OrcaRouter as named gateway provider (150+ models)** | [#5328](https://github.com/HKUDS/nanobot/pull/5328) | 🟡 Open PR, P2 — likely next batch |
| **Agent Plugins v1 integration with CLI Apps** | [#5288](https://github.com/HKUDS/nanobot/pull/5288) | 🟡 Open PR, conflict — architectural, may slip |
| **Tabbed-pane workbench (multi-pane layouts, sidebar)** | [#5322](https://github.com/HKUDS/nanobot/pull/5322) | 🟡 Open PR — major UX, needs review |
| **Structured token-usage records API** | [#5299](https://github.com/HKUDS/nanobot/pull/5299) | 🟡 Open PR, conflict — observability demand |
| **MCP SDK v2 migration with legacy compat** | [#5179](https://github.com/HKUDS/nanobot/pull/5179) | 🔴 Long-running (since 2026-07-30), conflicts — blocker for MCP stability |

## 7. User Feedback Summary
- **Pain: MCP remote auth gap** — Users cannot connect to OAuth-gated MCP servers (Xmind, Notion, Linear) without browser flow. *Resolved by #5316.*
- **Pain: Runaway token consumption** — Dream task loop burned two weeks of quota in 23 minutes. *Fixed by #5325; users will want guardrails on all tool loops.*
- **Pain: Unstable MCP connections** — Cloudflare 530 errors crash gateway via anyio cancel-scope bug, leaving CPU pegged. *No fix yet; high urgency for self-hosters.*
- **Pain: Session corruption on `/new`** — Background title generation races with session clear. *PR #5271 open but conflicted.*
- **Delight: WebUI polish** — Focus-ring consistency, auth UX recovery, WebSocket mutation security show attention to craft.
- **Ask: Multi-pane workflow** — Tabbed workbench PR (#5322) signals power-user demand for parallel sessions.

## 8. Backlog Watch — Stale/Blocked High-Value Items
| Item | Age | Why It Matters | Blocker |
|------|-----|----------------|---------|
| [#5179](https://github.com/HKUDS/nanobot/pull/5179) MCP SDK v2 migration | 12 days | Foundation for all MCP stability; current v1 client triggers cancel-scope crashes (#5300) | Conflicts, complex transport preservation (SSRF, DNS pinning, proxy) |
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) Bound sustained-goal continuation | 6 days | Prevents unbounded injection cycles when model waits on user; token-saver | Conflict |
| [#5271](https://github.com/HKUDS/nanobot/pull/5271) Prevent stale background task overwrites | 5 days | Session data loss on rapid `/new` | Conflict |
| [#5299](https://github.com/HKUDS/nanobot/pull/5299) Structured token-usage records API | 3 days | Observability for cost control; users currently blind to per-turn usage | Conflict |
| [#5292](https://github.com/HKUDS/nanobot/pull/5292) Matrix reply-to-room-event | 3 days | Fixes broken reply threading in non-thread rooms | Low review bandwidth |

---
**Health Indicator**: 🟢 **Healthy velocity, rising stability** — Critical bugs fixed same-day, security hardening shipped, feature pipeline full. Main risk: **MCP SDK v2 migration (#5179) stalled** — unblocks #5300 and future MCP reliability. Recommend maintainer focus there next.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-11

## 1. Today's Overview
Hermes Agent saw **high velocity** on 2026-08-11 with 16 issue updates and 50 PR updates in 24 hours, but **no new release**. The dominant theme is **Windows Desktop stability**: multiple critical bugs (#83555, #83583, #83603, #83607, #81290) around the `hermes serve` backend self-exiting due to a parent-death watchdog false positive (ppid mismatch in uv venv trampolines), causing boot loops and onboarding reappearing after sleep. Parallel tracks include **skill curator archive restoration failures** (#83580, #83613), **DeepSeek session wedging** from empty `tool_calls: []` (#83312), **gateway port-retry storms** (#83582), and **cron job model-resolution bugs** (#83596). Ten PRs merged/closed today, mostly fixes for Windows renderer diagnostics, skill pinning, and compression logic.

## 2. Releases
**No new releases today.** The last release data is not included in the snapshot. The project appears to be in active development with fixes targeting a likely v0.20.x patch series.

## 3. Project Progress — Merged / Closed PRs Today
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#83609](https://github.com/NousResearch/hermes-agent/pull/83609) | `fmt(js): npm run fix` auto-fix | CI / formatting | Housekeeping |
| [#83597](https://github.com/NousResearch/hermes-agent/pull/83597) | `feat(skills): pin GitHub branch and PR installs to commits` | CLI / skills | **Security/stability**: installs now resolve to immutable SHAs, lock provenance, fail-closed fork handling |
| [#81533](https://github.com/NousResearch/hermes-agent/pull/81533) | `fix(desktop): attach renderer-lifecycle diagnostics to all BrowserWindow instances` | Desktop / Windows | Fixes #81290 — adds `render-process-gone`, `unresponsive`, `oom` logging + crash recovery for every window type |
| [#82676](https://github.com/NousResearch/hermes-agent/pull/82676) | `test(gateway): pin final-send suppression contract` | Gateway / testing | Locks invariant for message-delivery suppression matrix |
| [#83567](https://github.com/NousResearch/hermes-agent/pull/83567) | `fix(desktop): renderer-lifecycle diagnostics + crash recovery for every window` | Desktop / Windows | Broader crash-loop budget, prevents permanent black windows |
| [#67626](https://github.com/NousResearch/hermes-agent/pull/67626) | `fix(gateway): make turn-lease idle predicate waiter-aware` | Gateway / sessions | Hardens turn-lease against latent invariant gap from #67401 audit |
| [#83603](https://github.com/NousResearch/hermes-agent/issues/83603) | *Issue closed* — Desktop boot loop after update on Windows | Desktop / Windows | Duplicate of #83555/#83583; root cause confirmed as uv venv shim breaking watchdog |
| [#83479](https://github.com/NousResearch/hermes-agent/issues/83479) | *Issue closed* — No obvious way to start new session from Home | Desktop / UX | Likely addressed in recent sidebar/session refactor |
| [#81290](https://github.com/NousResearch/hermes-agent/issues/81290) | *Issue closed* — Secondary window stays black | Desktop / Windows | Fixed by #81533 / #83567 renderer diagnostics |
| [#83603](https://github.com/NousResearch/hermes-agent/issues/83603) | *Issue closed* (duplicate) | Desktop / Windows | See above |

**Net progress**: Windows desktop crash-loop and black-window regressions are being systematically fixed; skill installation hardening landed; gateway session-leasing invariant pinned.

## 4. Community Hot Topics — Most Active Issues/PRs
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#57954](https://github.com/NousResearch/hermes-agent/issues/57954) | Bug | 2 | **Skill security scan ignores `known-false-positives.json` whitelist** — forces manual rewrites or terminal bypass; blocks skill iteration |
| [#83555](https://github.com/NousResearch/hermes-agent/issues/83555) | Bug | 2 | **Windows: `hermes serve` exits 0 instantly** — parent-death watchdog false positive on uv trampoline venvs; blocks all Desktop users on Windows |
| [#83580](https://github.com/NousResearch/hermes-agent/issues/83580) | Bug | 1 | **Curator-archived skills unrecoverable** — 51/62 archived skills cannot be restored via documented CLI (`restore` rejects `mv` path, `list-archived` not round-trippable) |
| [#83583](https://github.com/NousResearch/hermes-agent/issues/83583) | Bug (dup) | 1 | Duplicate of #83555 — same Windows watchdog ppid mismatch |
| [#83312](https://github.com/NousResearch/hermes-agent/issues/83312) | Bug | 1 | **DeepSeek 400 on empty `tool_calls: []`** — permanently wedges session; affects all follow-up messages |
| [#67455](https://github.com/NousResearch/hermes-agent/pull/67455) | Feature PR | — | **Multi-account Telegram gateway** — one gateway, N bots, isolated sessions; large architectural PR (open since Jul 19) |
| [#77519](https://github.com/NousResearch/hermes-agent/pull/77519) | Security PR | — | **Profile-scoped allowlist env writes** — fixes pairing grants writing to root `.env` instead of profile-specific under multiplexing |

**Underlying signals**: Windows Desktop is **unusable for many** until watchdog fix lands; skill curator workflow is **broken for power users**; DeepSeek integration has a **protocol-level bug**; multi-profile security boundaries need tightening.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **P0 — Blocks Windows Desktop entirely** | [#83555](https://github.com/NousResearch/hermes-agent/issues/83555) / [#83583](https://github.com/NousResearch/hermes-agent/issues/83583) / [#83603](https://github.com/NousResearch/hermes-agent/issues/83603) | Open (dup cluster) | [#83611](https://github.com/NousResearch/hermes-agent/pull/83611), [#83604](https://github.com/NousResearch/hermes-agent/pull/83604) |
| **P1 — Data loss / workflow break** | [#83580](https://github.com/NousResearch/hermes-agent/issues/83580) Curator restore broken | Open | [#83613](https://github.com/NousResearch/hermes-agent/pull/83613) |
| **P1 — Session corruption** | [#83312](https://github.com/NousResearch/hermes-agent/issues/83312) DeepSeek empty `tool_calls` wedges session | Open | None yet |
| **P2 — Security boundary leak** | [#83612](https://github.com/NousResearch/hermes-agent/issues/83612) `model_aliases` custom endpoint drops `api_key`, sends default provider key | Open | None yet |
| **P2 — Credential leak risk** | [#77490](https://github.com/NousResearch/hermes-agent/issues/77490) (fixed by [#77519](https://github.com/NousResearch/hermes-agent/pull/77519)) Pairing grants write to root `.env` | Fix PR open | [#77519](https://github.com/NousResearch/hermes-agent/pull/77519) |
| **P2 — Cron job model resolution** | [#83596](https://github.com/NousResearch/hermes-agent/issues/83596) Literal `"auto"` sent to wire | Open | None yet |
| **P2 — Goal-mode review handoff** | [#83610](https://github.com/NousResearch/hermes-agent/issues/83610) Transient judge failure rejects instead of fail-open | Open | None yet |
| **P3 — Onboarding loop** | [#83607](https://github.com/NousResearch/hermes-agent/issues/83607) `[WinError 5] Access denied` on `auth.json` write after sleep | Open | None yet |
| **P3 — Skill security scan** | [#57954](https://github.com/NousResearch/hermes-agent/issues/57954) Whitelist ignored | Open | None yet |

**Note**: Two fix PRs (#83611, #83604) target the P0 Windows watchdog; #83613 targets curator restore. DeepSeek and credential-leak bugs have no fix PR yet.

## 6. Feature Requests & Roadmap Signals
| Request | Issue/PR | Likelihood for Next Version |
|---------|----------|-----------------------------|
| **Restore profile/agent-grouped session sidebar** | [#83601](https://github.com/NousResearch/hermes-agent/issues/83601) | High — recent sidebar change regressed multi-profile workflow |
| **Kanban review claimed notification** | [#83614](https://github.com/NousResearch/hermes-agent/issues/83614) | Medium — small UX improvement, low risk |
| **`hermes cron show <id>` with model/provider details** | [#83605](https://github.com/NousResearch/hermes-agent/issues/83605) | Medium — part of 7-item cron infra wishlist from drift incident |
| **Multi-account Telegram gateway** | [#67455](https://github.com/NousResearch/hermes-agent/pull/67455) | Low-Medium — large PR, needs decision, open since Jul 19 |
| **Slack channel-member initiation without DM access** | [#83504](https://github.com/NousResearch/hermes-agent/pull/83504) | Medium — focused, security-reviewed |
| **Mermaid diagram expand overlay fix** | [#83271](https://github.com/NousResearch/hermes-agent/pull/83271) | High — trivial visual fix, already in PR |
| **`hermes release-notes` interactive viewer** | [#66178](https://github.com/NousResearch/hermes-agent/pull/66178) | Low — nice-to-have, open since Jul 17 |

**Prediction**: Next patch (v0.20.x) will ship Windows watchdog fix, curator restore fix, mermaid fix, and possibly Slack channel auth. Multi-account Telegram and cron show command likely later.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Windows Desktop unusable post-update** | #83555, #83583, #83603, #83607 — boot loop, immediate exit, onboarding reappears after sleep | **High** — all Windows users blocked; “cannot start” after `hermes update` |
| **Archived skills effectively deleted** | #83580 — 51/62 skills unrecoverable via CLI | **High** — power users lose curated skills; workaround requires manual filesystem ops |
| **DeepSeek sessions permanently broken** | #83312 — single empty `tool_calls` array wedges entire session history | **High** — DeepSeek users must abandon session |
| **Credential leak to wrong host** | #83612 — custom endpoint sends default provider key | **Critical** — security exposure for BYO-model users |
| **No visible “New Session” in Home** | #83479 (closed) — UX regression in sidebar | **Medium** — discoverability loss for casual users |
| **Cron jobs send literal `model=auto`** | #83596 — API rejects, silent misconfiguration | **Medium** — automation breaks unexpectedly |
| **Skill security scan false positives** | #57954 — whitelist ignored, forces content rewrite | **Low-Medium** — friction for skill authors |

**Satisfaction signal**: Users are filing detailed, reproducible bugs with logs — indicates **engaged, technical user base** but **frustration with Windows stability and skill workflow regressions**.

## 8. Backlog Watch — Stale Important Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#67455](https://github.com/NousResearch/hermes-agent/pull/67455) Multi-account Telegram gateway | 23 days (since Jul 19) | Large feature PR, “closes gap from #10455 review”, needs architectural decision; blocks multi-bot deployments |
| [#66178](https://github.com/NousResearch/hermes-agent/pull/66178) `hermes release-notes` command | 25 days (since Jul 17) | Low-risk CLI addition, implements #64133; stalled on `needs-decision` |
| [#57954](https://github.com/NousResearch/hermes-agent/issues/57954) Skill security scan whitelist | 39 days (since Jul 3) | P3 but persistent friction for skill authors; simple fix (read JSON) |
| [#77519](https://github.com/NousResearch/hermes-agent/pull/77519) Profile-scoped allowlist env writes | 8 days (since Aug 3) | Security fix for multi-profile multiplexing; labeled `sweeper:risk-security-boundary` |
| [#78356](https://github.com/NousResearch/hermes-agent/pull/78356) memory-tencentdb v2.0.0 upgrade | 7 days (since Aug 4) | Plugin upgrade with breaking changes; needs review for compatibility |
| [#75063](https://github.com/NousResearch/hermes-agent/pull/75063) Kanban wake origin session on triage | 12 days (since Jul 30) | Fixes Telegram notification delivery gap; labeled `sweeper:blast-moderate` |

**Maintainer action suggested**: Prioritize review/decision on #67455 (architectural), #77519 (security), and #57954 (easy win). Windows P0 fixes (#83611, #83604) should be fast-tracked to unblock desktop users.

---

*Digest generated from GitHub data as of 2026-08-11. All links point to live items on github.com/NousResearch/hermes-agent.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-11

## 1. Today's Overview
PicoClaw shows moderate maintenance activity with **9 PRs updated** (7 merged/closed) and **4 issues updated** in the last 24 hours. The project is actively addressing security hardening, agent loop stability, Telegram UX improvements, and configuration fixes. No new release was cut today. A notable portion of activity carries the `[stale]` label, indicating maintainers are clearing backlog items. Overall project health appears **stable with active triage**, though open issue count remains low (2 active).

---

## 2. Releases
**No new releases** published today. Latest version remains **v0.3.1 (2cf030d2)**.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Domain | Status | Key Change |
|----|-------|--------|--------|------------|
| [#3327](https://github.com/sipeed/picoclaw/pull/3327) | `feat(telegram): render tables with native rich messages` | Telegram UX | **Merged** | GFM/HTML tables now sent as native Telegram rich messages instead of monospaced code blocks; supports send, reply, edit, and delete. |
| [#3326](https://github.com/sipeed/picoclaw/pull/3326) | `fix(web): remove duplicate pnpm lock entries` | Web/Build | **Merged** | Removes duplicate `semver@7.8.5` entries blocking `pnpm install --frozen-lockfile`. |
| [#3297](https://github.com/sipeed/picoclaw/pull/3297) | `fix(security): harden remote prompt and exec boundaries` | Security/Core | **Merged** | Normalizes remote sender/chat metadata into user-role envelope; defaults remote exec to disabled with per-call approval; enforces origin policy at execution time; migrates config to schema v4. |
| [#3296](https://github.com/sipeed/picoclaw/pull/3296) | `i18n: complete Czech code wrap labels` | i18n | **Merged** | Completes Czech localization for code fence labels. |
| [#3295](https://github.com/sipeed/picoclaw/pull/3295) | `fix(channels): prevent SplitMessage hang on oversized fence headers` | Channels/Stability | **Merged** | Fixes `SplitMessage` infinite loop when fence info string exceeds `maxLen`; adds fallback bounded raw split + regression test. |
| [#2132](https://github.com/sipeed/picoclaw/pull/2132) | `feat(config): support model-specific max_tokens and fix config key collision` | Config/Agent | **Merged** | Decouples lookup key from runtime model ID; enables per-model `max_tokens` overrides; fixes `GetModelConfig()` resolution. |
| [#1547](https://github.com/sipeed/picoclaw/pull/1547) | `fix: merge PR #1466 #1465` | Maintenance | **Merged** | Merges two older open PRs (from Mar 2026). |

**Net progress**: Security hardening (remote exec boundaries), Telegram table rendering, agent config robustness, and channel message splitting stability all advanced to merged state.

---

## 4. Community Hot Topics — Most Active Items

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) | Issue (BUG) | 3 | 0 | **Dispatch rule routing breaks `/clear` and session auto-compression** — users on non-default agents (Discord/Telegram) lose session management basics. |
| [#3298](https://github.com/sipeed/picoclaw/issues/3298) | Issue (Feature) | 2 | 0 | **AI Router as named OpenAI-compatible preset** — maintainer of AI Router requests first-class provider preset to avoid manual `api_base` config. |
| [#3294](https://github.com/sipeed/picoclaw/issues/3294) | Issue (BUG) | 2 | 0 | **`/list models` shows only current model** — users expect full configured model list per command name/description. |
| [#3311](https://github.com/sipeed/picoclaw/issues/3311) | Issue (BUG) | 1 | 0 | **Silent tool failure loops to `max_tool_iterations`** — agent spins minutes without user-facing answer when tool fails identically each retry (e.g., `git` without creds). |

**Pattern**: Multi-agent dispatch routing gaps, provider ergonomics, and agent-loop observability are top friction points.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#3311](https://github.com/sipeed/picoclaw/issues/3311) | Agent silently loops on repeated identical tool failure up to `max_tool_iterations`; user never receives reply. Observed in production (Telegram `git` command). | **Yes** — [#3312](https://github.com/sipeed/picoclaw/pull/3312) (open) stops turn early on repeated identical failure. |
| **High** | [#3301](https://github.com/sipeed/picoclaw/issues/3301) | `/clear` and auto-compression broken for chats routed to non-default agent via dispatch rules (Discord/Telegram). | No open PR yet. |
| **Medium** | [#3294](https://github.com/sipeed/picoclaw/issues/3294) | `/list models` returns only current model instead of all configured models — misleading UX. | No open PR yet. |
| **Medium** | [#3295](https://github.com/sipeed/picoclaw/pull/3295) | `SplitMessage` hangs on oversized fence headers — **fixed & merged**. | Merged. |
| **Low** | [#3314](https://github.com/sipeed/picoclaw/pull/3314) | `customAllowPatterns` for shell exec ignored; default deny patterns take precedence (e.g., `git push` blocked despite allowlist). | **Open PR** — fixes guardCommand precedence. |

**Stability note**: Two high-severity bugs affect core agent interaction (silent failure loops, broken session mgmt in routed chats). One has a fix PR open; the other awaits attention.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **AI Router named provider preset** | [#3298](https://github.com/sipeed/picoclaw/issues/3298) (external maintainer) | **High** — low-effort config addition; aligns with multi-provider strategy. |
| **Fix `/list models` to show all configured models** | [#3294](https://github.com/sipeed/picoclaw/issues/3294) | **High** — UX bug with clear expected behavior; simple enum fix. |
| **Dispatch-rule-aware session commands (`/clear`, compression)** | [#3301](https://github.com/sipeed/picoclaw/issues/3301) | **Medium** — requires routing-aware session lookup; architectural touch. |
| **Per-model `max_tokens` config** | [#2132](https://github.com/sipeed/picoclaw/pull/2132) | **Delivered** — merged today. |
| **Native Telegram table rendering** | [#3327](https://github.com/sipeed/picoclaw/pull/3327) | **Delivered** — merged today. |

**Predicted next version (v0.3.2)**: AI Router preset, `/list models` fix, `customAllowPatterns` fix, repeated-failure loop guard. Dispatch routing session fixes may slip to v0.4.

---

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Silent agent hangs** | [#3311](https://github.com/sipeed/picoclaw/issues/3311): "turn can spin silently for many minutes… user never receives an answer" | Production blocker; erodes trust in autonomy. |
| **Session mgmt broken in routed chats** | [#3301](https://github.com/sipeed/picoclaw/issues/3301): `/clear` and auto-compression don't work when dispatch rules route to non-default agent | Multi-agent setups (Discord/Telegram) lose basic session hygiene. |
| **Misleading `/list models`** | [#3294](https://github.com/sipeed/picoclaw/issues/3294): "expected it to list all configured models" | Configuration discoverability broken. |
| **Shell allowlist ignored** | [#3314](https://github.com/sipeed/picoclaw/pull/3314): "agent not able to execute 'git push' despite adding it to exec allow list" | Power users blocked from legitimate workflows. |
| **Provider ergonomics** | [#3298](https://github.com/sipeed/picoclaw/issues/3298): AI Router maintainer requests preset to avoid manual `api_base` | Reduces onboarding friction for popular routers. |

**Sentiment**: Users encounter **sharp edges in multi-agent routing, agent-loop observability, and provider onboarding** — core areas for a "personal AI assistant" product.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) | 13 days | **Open, stale** | High-severity session mgmt regression in dispatched chats; no fix PR. |
| [#3311](https://github.com/sipeed/picoclaw/issues/3311) | 9 days | **Open, stale** | Silent agent hangs in production; fix PR [#3312](https://github.com/sipeed/picoclaw/pull/3312) open but stale. |
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) | 8 days | **Open, stale** | Shell allowlist bypassed; security/usability hybrid. |
| [#3294](https://github.com/sipeed/picoclaw/issues/3294) | 17 days | **Closed, stale** | Closed without fix? (check if merged fix exists elsewhere) — `/list models` still broken per user report. |
| [#3312](https://github.com/sipeed/picoclaw/pull/3312) | 9 days | **Open, stale** | Critical fix for repeated tool failure loop; awaiting review/merge. |

**Action recommended**: Prioritize review/merge of **#3312** (stops silent hangs) and **#3314** (restores allowlist). Assign **#3301** for dispatch-aware session logic. Verify **#3294** closure reason — may need reopen.

---

*Digest generated from GitHub API data as of 2026-08-11. All links point to live GitHub items.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-11

## 1. Today's Overview
NanoClaw shows **high development velocity** with 20 PRs updated in the last 24 hours (10 merged, 10 open) and 3 active issues. The project is in a heavy refactoring and hardening phase: core-team members are landing architectural changes around agent templates/plugins, host file-access surfaces, module lifecycle hooks, and database migration registries. Simultaneously, three new issues reveal **message-durability regressions** (duplicate-key drops, silent log loss, unroutable scheduled-task errors) that have already spawned targeted fix PRs. No new release was cut today.

## 2. Releases
**No new releases** published in the last 24 hours. The latest tagged release remains prior to the current `main` HEAD (`5bfdf9af`).

## 3. Project Progress — Merged / Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3228](https://github.com/qwibitai/nanoclaw/pull/3228) | Fix | Deduplicate turn-scoped chat delivery | Eliminates duplicate message delivery in agent turns |
| [#3222](https://github.com/qwibitai/nanoclaw/pull/3222) | Feature | Opt-in privacy-safe DM logs (`privacySafeLogs` setting) | Reduces PII exposure in logs; default unchanged |
| [#3215](https://github.com/qwibitai/nanoclaw/pull/3215) | Fix | Redact DM resolution logs | Complements #3222 for immediate log hygiene |
| [#3216](https://github.com/qwibitai/nanoclaw/pull/3216) | Docs | Clarify `install_packages` covers apt/npm only | Prevents user confusion in hardened-image guide |
| [#3186](https://github.com/qwibitai/nanoclaw/pull/3186) | Refactor | Host seams for skill-owned capabilities | Foundation for skill extensibility |
| [#3213](https://github.com/qwibitai/nanoclaw/pull/3213) | Refactor | Register question renderers (channels) | Cleaner channel extensibility |
| [#3214](https://github.com/qwibitai/nanoclaw/pull/3214) | Refactor | Unify module lifecycle hooks | Simplifies module init/teardown |
| [#3212](https://github.com/qwibitai/nanoclaw/pull/3212) | Refactor | Module migration registry (DB) | Enables safe schema evolution |
| [#3211](https://github.com/qwibitai/nanoclaw/pull/3211) | Docs | Single-responsibility integration rule for skills | Governance for skill contributions |
| [#3219](https://github.com/qwibitai/nanoclaw/pull/3219) | Chore | Telegram & container env adjustments | Minor operational cleanup |

**Theme:** Privacy hardening, architectural decoupling (skills, modules, lifecycle), and developer-experience documentation.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3075](https://github.com/qwibitai/nanoclaw/issues/3075) (1 comment, 24-day-old) | Silent log loss + duplicate-insert errors after long uptime; missing systemd unit | **Operational reliability**: users need durable logging, idempotent ingestion, and production-grade service management. |
| [#3226](https://github.com/qwibitai/nanoclaw/issues/3226) (0 comments, filed today) | Inbound messages silently dropped on platform message-ID reuse | **Data integrity**: platforms that recycle IDs (e.g., Matrix, Telegram restarts) cause silent message loss. |
| [#3223](https://github.com/qwibitai/nanoclaw/issues/3223) (0 comments, filed today) | Scheduled-task errors become unroutable chat messages and are silently dropped | **Observability**: operators must learn when background tasks fail. |
| [#3092](https://github.com/qwibitai/nanoclaw/pull/3092) (open 23 days) | Remote Streamable HTTP MCP servers support | **Ecosystem integration**: first-class support for HTTP-based MCP servers (beyond stdio). |
| [#3220](https://github.com/qwibitai/nanoclaw/pull/3220) (opened today) | Agent templates → Agent Plugins 1.0.0 directories (format migration) | **Extensibility & distribution**: versioned, plugin-based agent packaging. |

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Fix PR Exists? | Notes |
|----------|-------|----------------|-------|
| **Critical** | [#3226](https://github.com/qwibitai/nanoclaw/issues/3226) — Silent inbound message drop on ID reuse | ✅ [#3224](https://github.com/qwibitai/nanoclaw/pull/3224) (open) | Primary-key collision drops messages before agent sees them. |
| **High** | [#3223](https://github.com/qwibitai/nanoclaw/issues/3223) — Scheduled-task errors unroutable & silently dropped | ❌ No PR yet | Error path copies routing from trigger message (which has none), then drops. |
| **High** | [#3075](https://github.com/qwibitai/nanoclaw/issues/3075) — Log loss + duplicate inserts after long uptime | ❌ No PR yet | Two symptoms: log rotation/loss and duplicate-key inserts; also missing systemd unit. |
| **Medium** | [#3229](https://github.com/qwibitai/nanoclaw/pull/3229) — Telegram pairing codes use `Math.random()` | ✅ PR open | Predictable codes; fix switches to `crypto.randomInt` + wider space. |
| **Medium** | [#3225](https://github.com/qwibitai/nanoclaw/pull/3225) — Telegram pairing dir/file permissions too permissive | ✅ PR open | Hardens filesystem modes + repairs existing installs. |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Agent Plugins 1.0.0 (template migration)** | [#3220](https://github.com/qwibitai/nanoclaw/pull/3220), [#2909](https://github.com/qwibitai/nanoclaw/pull/2909) | **Very High** — core-team, breaking format change, security hardening included |
| **Remote Streamable HTTP MCP servers** | [#3092](https://github.com/qwibitai/nanoclaw/pull/3092), [#3221](https://github.com/qwibitai/nanoclaw/pull/3221) | **High** — engine + Claude provider done; Codex/Opencode follow-up in #3221 |
| **Privacy-safe logging (opt-in)** | [#3222](https://github.com/qwibitai/nanoclaw/pull/3222) (merged) | **Delivered** — already in `main` |
| **CLI `--stdin-json` for structured input** | [#3218](https://github.com/qwibitai/nanoclaw/pull/3218) | **Medium** — open, generic enhancement |
| **Telegram rich-message SDK update** | [#3193](https://github.com/qwibitai/nanoclaw/pull/3193) | **Medium** — open, channel-specific |

## 7. User Feedback Summary
- **Pain points**: Silent data loss (messages, logs, task errors) erodes trust; operators “never learn the task failed” ([#3223](https://github.com/qwibitai/nanoclaw/issues/3223)).
- **Use cases**: Long-running deployments (WSL2/Docker, 24+ day uptime in [#3075](https://github.com/qwibitai/nanoclaw/issues/3075)); Matrix/Telegram bridges that recycle IDs.
- **Satisfaction**: Positive momentum on privacy controls (merged #3222, #3215) and architectural cleanup; frustration on durability bugs that have persisted weeks ([#3075](https://github.com/qwibitai/nanoclaw/issues/3075) open since 2026-07-17).

## 8. Backlog Watch — Stale / Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3075](https://github.com/qwibitai/nanoclaw/issues/3075) | 25 days | Combines log durability, duplicate-key crashes, and missing systemd unit — blocks production hardening. |
| [#3092](https://github.com/qwibitai/nanoclaw/pull/3092) | 23 days | Large feature (HTTP MCP servers) stalled; blocks #3221 (Codex/Opencode support). |
| [#2909](https://github.com/qwibitai/nanoclaw/pull/2909) | 40 days | Template wizard + first-agent stamping; foundational for Agent Plugins 1.0.0. |
| [#3193](https://github.com/qwibitai/nanoclaw/pull/3193) | 5 days | Telegram rich-message SDK update; channel maintainers should review. |

---

**Health Indicators**  
- ✅ High PR throughput (20/24h) with balanced merge rate (50%)  
- ✅ Core-team driving architectural refactors (skills, modules, lifecycle, migrations)  
- ⚠️ **Critical durability bugs** surfacing in rapid succession — suggest a focused “stability sprint” before next release  
- ⚠️ Three high-impact issues/PRs > 20 days old need triage or closure

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-11

---

## 1. Today's Overview
NullClaw shows **low maintenance activity** in the past 24 hours: one historical feature issue was closed (originally opened March 2026) and one automated Dependabot PR remains open. No new releases, merged PRs, or active community discussions occurred today. The project appears to be in a **quiet maintenance phase** with dependency updates being the primary recent signal.

---

## 2. Releases
**No new releases** published in the last 24 hours. The latest release information is not provided in the current data snapshot.

---

## 3. Project Progress
**Closed Issue (Feature Completion):**
- **#700** — *Add a2a_call client tool for calling remote agents*  
  [GitHub Issue #700](https://github.com/nullclaw/nullclaw/issues/700)  
  **Status:** Closed (2026-08-10) | **Author:** @georgeglarson  
  **Summary:** Implements an `a2a_call` client tool enabling NullClaw agents to send `message/send` JSON-RPC requests to remote A2A v0.3.0 agents. Use case: connecting a public-facing “doorman” agent with a private personal agent.  
  **Significance:** Completes client-side A2A protocol support, allowing multi-agent topologies. Closed with 1 comment and 1 👍, suggesting community validation.

**Open PR (Dependency Maintenance):**
- **#956** — *ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group*  
  [GitHub PR #956](https://github.com/nullclaw/nullclaw/pull/956)  
  **Status:** Open (created 2026-06-15, updated 2026-08-10) | **Author:** dependabot[bot]  
  **Summary:** Routine base-image update for Docker images. No breaking changes expected; Alpine 3.24 is a minor release.  
  **Note:** PR has been open for ~57 days — may indicate low CI/CD review bandwidth.

---

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#700** | Issue (Closed) | 1 comment, 1 👍 | [Issue #700](https://github.com/nullclaw/nullclaw/issues/700) |
| **#956** | PR (Open) | 0 comments, 0 👍 | [PR #956](https://github.com/nullclaw/nullclaw/pull/956) |

**Analysis:**  
- **#700** reflects a **clear architectural need**: users are building multi-agent systems (doorman + private agent) and require first-class A2A client tooling. The closure suggests the feature was merged or superseded — check recent commits for implementation details.  
- **#956** is purely automated; no human engagement signals maintainer capacity constraints.

---

## 5. Bugs & Stability
**No new bugs, crashes, or regressions reported in the last 24 hours.**  
The only closed issue (#700) was a feature request, not a bug. No open issues with `bug` label appear in the data.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **A2A client tooling (`a2a_call`)** | Issue #700 (closed) | **High** — already implemented/closed; likely in recent `main` |
| **Multi-agent deployment patterns** | Issue #700 use case | **Medium** — documentation/examples may follow |
| **Docker base image hygiene** | PR #956 | **Certain** — routine, will merge when reviewed |

**Prediction:** Next release will likely include the `a2a_call` tool and Alpine 3.24 images. Watch for A2A protocol version upgrades (v0.3.0 → v0.4+) as a future signal.

---

## 7. User Feedback Summary
**Single data point from @georgeglarson (Issue #700):**
- **Pain point:** NullClaw *serves* A2A but lacked a *client* to call remote agents.
- **Use case:** Hybrid deployment — public doorman agent + private personal agent.
- **Satisfaction:** Positive (1 👍, issue closed) → suggests solution met need.
- **Gap:** No feedback on usability, auth, error handling, or streaming support for `a2a_call`.

---

## 8. Backlog Watch
| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| **PR #956** (Alpine 3.24) | 57 days | **Low** — security/compliance drift if base image unpatched | Maintainer review & merge; enable auto-merge for Dependabot |
| **Issue #700** (Closed) | ~140 days | **None** — resolved | Verify implementation in `main`; add docs/example for multi-agent pattern |

**Maintainer Attention Required:**  
- PR #956 has lingered since June — indicates **review bandwidth bottleneck**. Consider:  
  - Enabling Dependabot auto-merge for patch/minor Docker updates  
  - Scheduling weekly 15-min dependency triage  
- No other stale critical items in current data.

---

*Digest generated from GitHub API data (issues, PRs, releases) for nullclaw/nullclaw on 2026-08-11. Links point to live GitHub objects.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-11

## 1. Today's Overview
IronClaw is in a high-velocity stabilization and feature-completion phase around the v1.1 release line. The project shipped **ironclaw-v1.1.1-rc.1** yesterday as an urgent patch candidate addressing channel delivery, MCP compatibility, WebUI streaming, and upgrade safety. In the last 24 hours, 28 issues and 50 PRs were updated (13 issues and 33 PRs remain open), signaling intense concurrent work across CI hygiene, core delivery correctness, Reborn storage architecture, and the v1.3/v1.4 roadmap. The team is simultaneously hardening the 1.1 line, landing foundational refactors (unified channel model, profile-agnostic durable state), and designing the next major extensions push.

## 2. Releases
### **ironclaw-v1.1.1-rc.1** (2026-08-10)
**Urgent patch candidate for the 1.1 line.** Focus areas:
- Channel delivery & pairing fixes
- IronHub / custom MCP server compatibility
- WebUI streaming stability
- Durable retrieval improvements
- Safe upgrades from both supported stable predecessors (1.0.0 and 1.1.0)

**Migration note:** Upgrading from 1.0.0 requires stopping all writers before migration. No other breaking changes documented in the release notes.

[Release Link](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.1.1-rc.1)

---

## 3. Project Progress (Merged/Closed in Last 24h)
Seventeen PRs were merged/closed. Key outcomes from visible closures:

| PR | Title | Impact |
|----|-------|--------|
| [#7381](https://github.com/nearai/ironclaw/pull/7381) | **doc-truth pipeline design record** | Formalizes the Doc-Truth Verification Pipeline (issue #7317) — deterministic guidance validation, `docs-live` deployment branch, no Mintlify versioning. |
| [#7336](https://github.com/nearai/ironclaw/pull/7336) | **dedup consumed steering replays** | Prevents duplicate assistant replies from delayed queue replays by preserving a bounded durable identity window for consumed steering messages. |
| [#7466](https://github.com/nearai/ironclaw/pull/7466) | **Trim live-QA shard artifacts** (bot) | Excludes regenerable Reborn live-QA artifacts (homes, workspace, server logs, Playwright traces) from upload, directly addressing #7137’s 5 GB/run artifact bloat. |

Other closed epics (issues) indicate completed workstreams: **Telegram Product Completeness** (#6483), **Canonical Messaging Operations** (#6484), **Custom MCP Server Support** (#6727), **Reliable Outbound Delivery** (#6801), **Persistent Per-User Sandbox** (#6468), and **Target Crate Architecture** (#3773) — all marked closed yesterday.

---

## 4. Community Hot Topics
### Most-Commented Issues
| Issue | Comments | Core Need |
|-------|----------|-----------|
| [#7137](https://github.com/nearai/ironclaw/issues/7137) | 12 | **CI artifact explosion** — live-canary shards upload 700 MB–1.5 GB each (5 GB+/run), burning GH Actions quota and slowing triage. PR #7466 partially mitigates. |
| [#7317](https://github.com/nearai/ironclaw/issues/7317) | 3 | **Doc-Truth drift** — breaking changes shipped without doc updates (e.g., `origin_gate_matrix`, deploy-target mismatches). Pipeline design now landed in #7381. |
| [#6257](https://github.com/nearai/ironclaw/issues/6257) | 3 | **PDF mime_type rejection** — `attachments.mime_type` invalid error blocks PDF send/generate; reported by external user (Slack feedback). |
| [#3762](https://github.com/nearai/ironclaw/issues/3762) | 2 | **AGENTS.md edits not reflected in system prompt** — WebUI saves succeed but default/new conversations don’t pick up changes (P1, customer, v1.3.0 target). |

### Most-Active PRs (by discussion signal)
- [#7477](https://github.com/nearai/ironclaw/pull/7477) — **Unified Channel Model** (XL): Single `ChannelAdapter` for inbound, replies, notifications across Web, Slack, Telegram. Implements design doc §12–13. Foundational for v1.2+ channel reliability.
- [#7474](https://github.com/nearai/ironclaw/pull/7474) — **Agent assertion fixes** (XL): Batch fix for three Railway-QA bugs where model asserted unverified state (automation status, extension auth, recalled memory).
- [#7456](https://github.com/nearai/ironclaw/pull/7456) — **Profile-agnostic durable storage** (XL): Roots Reborn profiles at `IRONCLAW_REBORN_HOME` with typed security envelope; enables zero-downtime profile transitions (#7467 epic).

---

## 5. Bugs & Stability (Reported/Active Today)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#7476](https://github.com/nearai/ironclaw/issues/7476) `classify_delivery_outcome` drops `vendor_message_refs` on `Failed`, hiding partial-send evidence from model | Open (new) | — |
| **High** | [#7473](https://github.com/nearai/ironclaw/issues/7473) Connect-nudge throttle releases on ref-less delivery → duplicate “please connect” notices | Open (new) | [#7475](https://github.com/nearai/ironclaw/pull/7475) (open) |
| **High** | [#7471](https://github.com/nearai/ironclaw/pull/7471) Lease expiry kills runs with `lease_expired` instead of recovering; heartbeat pool starvation | Open (PR) | #7471 (open) |
| **Medium** | [#6257](https://github.com/nearai/ironclaw/issues/6257) PDF `attachments.mime_type` invalid error | Open (since Jul) | — |
| **Medium** | [#6869](https://github.com/nearai/ironclaw/issues/6869) Generated DOCX files corrupted/unreadable by Word | Open (since Jul) | — |
| **Medium** | [#6868](https://github.com/nearai/ironclaw/issues/6868) Slack routine results not delivered despite successful connection | Open (since Jul) | — |
| **Medium** | [#7447](https://github.com/nearai/ironclaw/issues/7447) Agent burns tool budget in redundant fetch-retry loops instead of paginating | Open (new) | — |
| **Low** | [#7455](https://github.com/nearai/ironclaw/pull/7455) CLI mounts cwd overlapping skill roots → workspace confusion | Open (PR) | #7455 (open) |

---

## 6. Feature Requests & Roadmap Signals
### Active Epics Targeting Near-Term Releases
| Epic | Target | Scope |
|------|--------|-------|
| [#7467](https://github.com/nearai/ironclaw/issues/7467) **Profile-agnostic Reborn state & legacy migration** | v1.2+ | Root storage at `IRONCLAW_REBORN_HOME`; typed security envelope; migrate legacy profile roots. PR #7456 underway. |
| [#7354](https://github.com/nearai/ironclaw/issues/7354) **Extensions vNext** — Web Push, Rich Messaging, Telegram User Sessions, Signal | v1.3.0 (by 2026-08-14) | Proactive web notifications, canonical reactions/edits/deletes, delegated Telegram sessions, production Signal channel. |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) **Storybook + AI-first Design System** | v1.3.0 | Theming, assets, interactions, IA; backed by proposal PR #7257 and crate-architecture docs. |
| [#7046](https://github.com/nearai/ironclaw/issues/7046) **Admin chat configuration** | v1.4.0 | Configure tools, channels, extensions, delivery routing from AI chat as Admin. |
| [#7044](https://github.com/nearai/ironclaw/issues/7044) **Channel-first onboarding** | v1.4.0 | Guided first-run: connect channel → install skill → run automation. |
| [#7465](https://github.com/nearai/ironclaw/issues/7465) **Company Brain FDE** | — | New epic (details sparse); likely internal knowledge/agent memory system. |

### Recently Completed Epics (Closed Yesterday)
- **Telegram Product Completeness** (#6483) — pairing, inbound/outbound, attachments, manifest commands
- **Canonical Messaging Operations** (#6484) — unified outbound tool contracts
- **Custom MCP Server Support** (#6727) — user-supplied MCP servers via CLI/WebUI/extension import
- **Reliable Outbound Delivery** (#6801) — explicit channel-safe ops, automation result reporting
- **Persistent Per-User Sandbox** (#6468) — fat image, `/workspace` bind, tmux CLI, secret-lease proxy
- **Target Crate Architecture** (#3773) — 10 ownership families, CI enforcement, agent placement rules

---

## 7. User Feedback Summary
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **PDF generation broken** | “Invalid value (attachments.mime_type)” error; reported via Slack #x-ai-product-feedback | 1 report, persistent since Jul |
| **DOCX output corrupted** | Word cannot open generated .docx; ChatGPT/Claude handle this easily | 1 report (Davin Basi), 2 attempts failed |
| **Slack integration unreliable** | Setup flow fails (near.foundation account); routine results not delivered despite “connected” status | 2 independent reports |
| **AGENTS.md edits invisible to model** | WebUI save succeeds but system prompt unchanged for current/future conversations | 1 report, P1, customer-tagged |
| **Agent tool-loop inefficiency** | 4 near-duplicate GitHub query rounds with shrinking limits instead of `result_read` pagination | 1 observed case, burns tool budget |
| **Onboarding friction** | Blank WebUI slate; user must imagine use case, describe, configure manually | Epic #7044 captures this |

**Satisfaction signals:** Positive movement on Telegram completeness, custom MCP support, and sandbox persistence — all recently closed epics. Negative signals cluster on **file generation (PDF/DOCX)**, **Slack delivery reliability**, and **configuration UX**.

---

## 8. Backlog Watch — Stale / High-Leverage Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3762](https://github.com/nearai/ironclaw/issues/3762) AGENTS.md edits not updating system prompt | **86 days** (May 18) | P1, customer-tagged, v1.3.0 target; blocks WebUI-as-configuration-surface credibility. |
| [#6257](https://github.com/nearai/ironclaw/issues/6257) PDF mime_type error | **23 days** (Jul 19) | Blocks document workflow; external user report; no fix PR visible. |
| [#6869](https://github.com/nearai/ironclaw/issues/6869) DOCX corruption | **13 days** (Jul 29) | Same workflow as PDF; Word interop is baseline expectation. |
| [#6868](https://github.com/nearai/ironclaw/issues/6868) Slack routine delivery silent failure | **13 days** (Jul

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-11

## 1. Today's Overview
LobsterAI shows **high development velocity** with 34 PRs updated in the last 24 hours (20 merged/closed, 14 open). The activity is heavily concentrated on the **cowork/renderer layer** and **OpenClaw gateway stability**, driven primarily by contributor `fisherdaddy` (likely a core maintainer). No new releases were cut today. One stale bug (#1243) around `qwen-portal-auth` plugin causing gateway restart loops was closed, but the underlying issue may persist if not fixed at root cause. Dependency modernization is underway (Vite 8.x, React 19, Mermaid 11), signaling a platform upgrade cycle.

---

## 2. Releases
**No new releases today.** The project appears to be in an active development phase accumulating changes for a future version bump.

---

## 3. Project Progress — Merged/Closed PRs (20)

| PR | Area | Summary | Type |
|----|------|---------|------|
| [#2472](https://github.com/netease-youdao/LobsterAI/pull/2472) | renderer, cowork | Cowork activity group collapse UI | Feature |
| [#2471](https://github.com/netease-youdao/LobsterAI/pull/2471) | renderer, cowork | Render submitted file attachments as clickable cards (icons, name, type) | Feature/UX |
| [#2454](https://github.com/netease-youdao/LobsterAI/pull/2454) | main, openclaw | Fix tool-loop guard killing legitimate polling | Bugfix (Stability) |
| [#2467](https://github.com/netease-youdao/LobsterAI/pull/2467) | main, windows | Repair stale pip shims on Windows runtime upgrade | Bugfix (Windows) |
| [#2466](https://github.com/netease-youdao/LobsterAI/pull/2466) | renderer, build, main, openclaw | Fix renderer init IPC stall retry | Bugfix (Startup) |
| [#2470](https://github.com/netease-youdao/LobsterAI/pull/2470) | main | Surface provider runtime failures on late chat error (don't swallow real LLM failures) | Bugfix (Error handling) |
| [#2469](https://github.com/netease-youdao/LobsterAI/pull/2469) | renderer, cowork | Add collapse-agent-tasks shortcut + allow modifier shortcuts while typing | Feature/UX |
| [#2468](https://github.com/netease-youdao/LobsterAI/pull/2468) | renderer, cowork | Unify streaming loading indicators into single component | Refactor/UX |
| [#1766](https://github.com/netease-youdao/LobsterAI/pull/1766) | deps-dev | Bump Vite 5.4.21 → 8.0.13 (merged, older PR) | Dependency |
| [#1764](https://github.com/netease-youdao/LobsterAI/pull/1764) | deps | Bump react-dom 18.3.1 → 19.2.6 (merged, older PR) | Dependency |
| [#1763](https://github.com/netease-youdao/LobsterAI/pull/1763) | deps-dev | Bump @vitejs/plugin-react 4.7.0 → 6.0.1 (merged, older PR) | Dependency |

**Key Themes:**
- **Cowork UX polish**: File attachment cards, activity collapse, keyboard shortcuts, unified loading states
- **OpenClaw reliability**: Tool-loop guard, error surfacing, provider preservation (#2452 still open)
- **Windows runtime hygiene**: Pip shim repair, IPC stall retry
- **Major dependency upgrades** (Vite 8, React 19) now merged after months in review

---

## 4. Community Hot Topics

| Item | Activity | Signal |
|------|----------|--------|
| [#2473](https://github.com/netease-youdao/LobsterAI/pull/2473) — *Right-click context menu for local file links* | Open, created today, touches renderer/main/cowork/artifacts | **High**: Core UX gap — users expect native file actions (open with, save as, copy path, reveal in folder). Adds `dialog:saveFileCopy` IPC. |
| [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) — *Preserve provider for slashed model IDs* | Open since 2026-08-07, updated today | **High**: Model ID parsing bug affecting custom providers (e.g., `custom_0` + `deepseek-ai/DeepSeek-V4-Flash`). Blocks multi-provider workflows. |
| [#1243](https://github.com/netease-youdao/LobsterAI/issues/1243) — *qwen-portal-auth plugin config loop → gateway restarts* | Closed (stale), 2 comments, 0 👍 | **Medium**: User-reported instability (gateway restart every 5–20 min). Closed as stale but root cause unclear — may resurface. |

**Underlying Needs:**
1. **File-first UX**: Treat local files as first-class citizens (context menus, previews, attachments)
2. **Provider/model identity fidelity**: Don't lose provider prefix when model IDs contain `/`
3. **Gateway stability**: Plugin config loops must not trigger restarts — indicates missing config diffing/idempotency

---

## 5. Bugs & Stability

| Severity | Issue/PR | Status | Fix PR |
|----------|----------|--------|--------|
| **High** | Tool-loop guard kills legitimate polling ([#2454](https://github.com/netease-youdao/LobsterAI/pull/2454)) | ✅ Fixed | Merged |
| **High** | Late chat errors swallow real provider/LLM runtime failures ([#2470](https://github.com/netease-youdao/LobsterAI/pull/2470)) | ✅ Fixed | Merged |
| **High** | Stale pip shims survive Windows runtime upgrades ([#2467](https://github.com/netease-youdao/LobsterAI/pull/2467)) | ✅ Fixed | Merged |
| **Medium** | Renderer init IPC stall (startup hang) ([#2466](https://github.com/netease-youdao/LobsterAI/pull/2466)) | ✅ Fixed | Merged |
| **Medium** | `qwen-portal-auth` config loop → gateway restart ([#1243](https://github.com/netease-youdao/LobsterAI/issues/1243)) | ⚠️ Closed stale | **None** (root cause unaddressed) |
| **Medium** | Provider lost for slashed model IDs ([#2452](https://github.com/netease-youdao/LobsterAI/pull/2452)) | 🟡 Open | PR #2452 (open) |

**Note**: The stale closure of #1243 is concerning — a gateway restart loop every 5–20 minutes is a critical stability issue. If the plugin config writes are not idempotent, the fix belongs in the gateway/config layer, not the plugin.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Native file context menus** (open with, save as, copy path, reveal) | [#2473](https://github.com/netease-youdao/LobsterAI/pull/2473) (open, large scope) | **High** — Active PR, replaces inline "reveal in folder" across Markdown consumers |
| **File attachment cards for submitted non-image files** | [#2471](https://github.com/netease-youdao/LobsterAI/pull/2471) (merged) | **Done** — Ships in next build |
| **Collapsible agent task groups + keyboard shortcuts** | [#2469](https://github.com/netease-youdao/LobsterAI/pull/2469), [#2472](https://github.com/netease-youdao/LobsterAI/pull/2472) (both merged) | **Done** |
| **Unified streaming loading indicator** | [#2468](https://github.com/netease-youdao/LobsterAI/pull/2468) (merged) | **Done** |
| **Provider prefix preservation for custom models** | [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) (open) | **High** — Blocks multi-provider setups |
| **Vite 8 / React 19 / Mermaid 11 migration** | [#2465](https://github.com/netease-youdao/LobsterAI/pull/2465), [#2464](https://github.com/netease-youdao/LobsterAI/pull/2464), [#2462](https://github.com/netease-youdao/LobsterAI/pull/2462) (all open) | **Medium** — Dependabot PRs open; older equivalents merged (#1766, #1764) but new major versions need validation |

**Prediction**: Next release will be a **"Cowork UX + Stability"** drop with file-centric features, keyboard power-user shortcuts, and the OpenClaw error-handling fixes. The Vite 8/React 19 upgrade may ship separately or be held for a major version.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Gateway restarts disrupt workflow** | #1243: "每 5-20 分钟自动重启一次" (every 5–20 min), "AI 引擎正在启动网关..." popup | High — Makes app unusable for extended sessions |
| **File handling feels non-native** | #2473: No right-click actions on file links; #2471: Attachments collapse to raw paths after send | Medium — Daily friction for file-heavy users |
| **Custom model provider identity lost** | #2452: `custom_0` + `deepseek-ai/DeepSeek-V4-Flash` persisted as model-only | Medium — Breaks multi-provider routing |
| **Keyboard shortcuts blocked while typing** | #2469: "allow modifier shortcuts while typing" | Low–Medium — Power-user annoyance |
| **Stale dependency stack** | Multiple dependabot PRs for Vite 5→8, React 18→19, Mermaid 10→11 | Low (dev-facing) — But signals tech debt |

**Satisfaction Signal**: Users are vocal about **stability (gateway restarts)** and **file UX**. The maintainer response (rapid PRs for cowork/file features) shows alignment.

---

## 8. Backlog Watch — Needs Maintainer Attention

| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| [#1243](https://github.com/netease-youdao/LobsterAI/issues/1243) — qwen-portal-auth config loop | Since 2026-04-01 (4+ months) | Critical stability bug closed as "stale" without fix. Gateway restart loop is a **P0** for Windows users. | **Reopen & root-cause**: Add config write idempotency / diffing in OpenClaw gateway; audit plugin config persistence. |
| [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) — Provider preservation for slashed model IDs | Since 2026-08-07 | Blocks custom provider + HuggingFace-style model IDs. Simple fix, high leverage. | **Review & merge** — Small change, unblocks multi-provider workflows. |
| [#2473](https://github.com/netease-youdao/LobsterAI/pull/2473) — File context menu (large PR) | Created today | Touches renderer, main, cowork, artifacts; adds IPC (`dialog:saveFileCopy`). Needs design review. | **Architecture review**: Confirm IPC surface, security (file path exposure), cross-platform behavior. |
| [#2465](https://github.com/netease-youdao/LobsterAI/pull/2465), [#2464](https://github.com/netease-youdao/LobsterAI/pull/2464), [#2462](https://github.com/netease-youdao/LobsterAI/pull/2462) — Major dep upgrades | All opened today | Vite 8, React 19, Mermaid 11 — Breaking changes likely. Older equivalents merged but these are newer patch versions. | **Staged integration**: Test in `next` branch; coordinate with cowork refactors to avoid conflict. |

---

## Health Indicators

| Metric | Status | Trend |
|--------|--------|-------|
| **PR Throughput** | 🟢 Excellent (34/24h) | ↗️ Increasing |
| **Bug Fix Rate** | 🟢 High (7 critical fixes merged today) | ↗️ |
| **Stale Issue Hygiene** | 🔴 Poor (#1243 closed stale unfixed) | ⚠️ Risk |
| **Dependency Freshness** | 🟡 In Progress (major upgrades pending) | ➡️ |
| **Community Engagement** | 🟡 Low (0 👍, few comments) | ➡️ |

**Bottom Line**: LobsterAI is in a **high-velocity feature/stability sprint** with strong maintainer ownership (`fisherdaddy`). The cowork/file UX is advancing rapidly. The main risk is **stale-closure of critical bugs** (#1243) and **unvalidated major dependency upgrades**. Recommend: reopen #1243, merge #2452, and stage Vite/React upgrades behind a feature flag.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-11

---

## 1. Today's Overview

Moltis saw moderate maintenance activity over the last 24 hours with **3 active bug reports** and **2 open pull requests** receiving updates. No releases were published and no PRs were merged, indicating a focus on issue triage and ongoing feature development rather than delivery. The bug cluster centers on the **Apple Container backend** (sandbox lifecycle detection, resource limits, and a broken upstream dependency URL), suggesting this integration is a current stability hotspot. The two open PRs represent a long-running browser automation feature (PR #531, open since March) and a session-management fix (PR #1182) that unblocks deletion/archiving of the `main` session.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Project Progress

| PR | Status | Summary | Notes |
|----|--------|---------|-------|
| [#1182](https://github.com/moltis-org/moltis/pull/1182) | **Open** (updated 2026-08-11) | Allow deleting/archiving the `main` session (fixes #1132) | Removes hard-coded guards in gateway; preserves active-channel-session archive restriction. Ready for review. |
| [#531](https://github.com/moltis-org/moltis/pull/531) | **Open** (updated 2026-08-10) | Interactive browser viewing UI with CDP screencast | Major feature: live browser sessions, mouse/keyboard/scroll interaction, session history, per-agent cookie isolation. Long development cycle (opened 2026-03-31). |

**No PRs merged or closed today.**

---

## 4. Community Hot Topics

| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#1185](https://github.com/moltis-org/moltis/issues/1185) | Bug | 3 comments, updated 2026-08-10 | Apple Container 1.x sandbox reports “not running” despite being active — breaks sandbox-dependent workflows. |
| [#1189](https://github.com/moltis-org/moltis/issues/1189) | Bug | 0 comments, created 2026-08-10 | Sandbox build fails due to incorrect `gogcli` GitHub URL — blocks CI / local builds for Apple Container backend. |
| [#1188

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-11

## 1. Today's Overview
CoPaw (QwenPaw) shows **high velocity** with 67 total items updated in the last 24h (17 issues, 50 PRs). The project is in active pre-release mode for v2.1.0 (release notes PR #6875 open), with 17 PRs merged/closed today. No new releases shipped. Activity spans provider compatibility fixes, console/IME stability, memory system (ReMe Light) enhancements, Creator plugin orchestration, and marketplace unification — indicating a broadening platform scope beyond core chat.

## 2. Releases
**No new releases today.**  
Release notes for **v2.1.0** are being prepared in PR #6875 (open), targeting 2026-08-11. This will be the first stable release on the 2.1 line after v2.1.0b2.

## 3. Project Progress — Merged/Closed PRs Today (17)
| PR | Type | Summary | Linked Issue |
|----|------|---------|--------------|
| #6809 | **Fix** | Sanitize Chat Completions content for strict OpenAI-compatible providers (removes internal `delta`, `index`, `input_text` fields) | #6803 |
| #6878 | **Feature** | Add hidden-folders toggle to project directory picker in Console | — |
| #6615 | **Fix** | Handle corrupted agent config / invalid JSON in `load_agent_config()` gracefully | — |
| #6398 | **Feature** | Add reranker support for ReMe memory search (backend: over-fetch → rerank → cap) | — |
| #6871 | **Fix** | Frontend timestamp timezone shift (+8h) after view re-render | #6871 |
| #6876 | **Fix** | Background task panel UX: default collapse / move to separate area (closed as addressed) | #6876 |
| #6866 | **Q&A** | Workspace auto-generated `.py`/`.sh` files — guidance on temp dir usage | #6866 |

**Key advances**: Provider compatibility unblocked for StepFun et al.; ReMe reranker backend landed; config resilience improved; Console UX polished.

## 4. Community Hot Topics (Most Comments/Reactions)
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#6803](https://github.com/agentscope-ai/QwenPaw/issues/6803) | Bug | 6 | **Provider interop**: Requests rejected by strict OpenAI-compatible APIs (StepFun) due to leaked internal fields. **Fixed in #6809 (closed).** |
| [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) | Enhancement | 4 | **Runtime observability**: In-chat panel to see/kill/extend running shell commands — reuse approval pipeline. Long-standing (May). |
| [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) | Question | 4 | **MCP tool resolution broken in v2.0**: Tools renamed to `[mcp-key]__[tool_name]` but “not found” errors persist. Docker v2.0.0post3. |
| [#6876](https://github.com/agentscope-ai/QwenPaw/issues/6876) | Feature | 3 | **Background task panel UX**: Cards flood chat window; need default collapse, separate area, expandable logs. **Closed (addressed).** |
| [#6585](https://github.com/agentscope-ai/QwenPaw/issues/6585) | Enhancement | 3 | **Distracting live character counter** in chat input during skill/file load — requests off toggle. |

**Underlying theme**: Users hit **integration friction** (MCP, strict providers) and **UI density/distraction** issues as platform features multiply.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#6885](https://github.com/agentscope-ai/QwenPaw/issues/6885) Console UI crashes on Chinese IME `compositionEnd` during agent run — message queue unusable (v2.1.0b2) | Open | [#6889](https://github.com/agentscope-ai/QwenPaw/pull/6889) (open) |
| **High** | [#6867](https://github.com/agentscope-ai/QwenPaw/issues/6867) Gemini compaction error: “Function call missing thought_signature” | Open | — |
| **High** | [#6872](https://github.com/agentscope-ai/QwenPaw/issues/6872) Legacy sessions with local-path media sources fail to load (Internal error) | Open | — |
| **Medium** | [#6883](https://github.com/agentscope-ai/QwenPaw/issues/6883) Diary page: notes in subfolders grouped under wrong date | Open | — |
| **Medium** | [#6871](https://github.com/agentscope-ai/QwenPaw/issues/6871) Frontend timestamp shift +8h after re-render | **Closed** | Fixed in #6871 (merged) |
| **Low** | [#6803](https://github.com/agentscope-ai/QwenPaw/issues/6803) Strict provider rejection (StepFun 400) | **Closed** | Fixed in #6809 (merged) |

**Note**: IME crash (#6885) blocks Chinese-input users entirely in v2.1.0b2; fix PR #6889 opened same day — good responsiveness.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for v2.1.x / Next |
|---------|--------|------------------------------|
| **Per-session model overrides** | [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) (PR, first-time contributor) | High — PR open, opt-in, non-breaking |
| **Configurable MCP tool-call timeout** | [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724) | High — critical for reliability, no timeout today |
| **Auto-Dream resilience (retry + partial success)** | [#6841](https://github.com/agentscope-ai/QwenPaw/issues/6841) + [#6884](https://github.com/agentscope-ai/QwenPaw/pull/6884) (PR) | High — PR open, addresses nightly failure mode |
| **ReMe4 roadmap clarity (Auto-Link, tri-modal search, 4-category weights)** | [#6840](https://github.com/agentscope-ai/QwenPaw/issues/6840) | Medium — ReMe Light (0.4.1.4) shipped in 2.1.0b2; full ReMe4 timeline unclear |
| **Unified marketplace (apps/plugins/skills)** | [#6880](https://github.com/agentscope-ai/QwenPaw/pull/6880) (PR) | Medium — large PR, routes defined, under review |
| **Window size/position persistence** | [#4634](https://github.com/agentscope-ai/QwenPaw/issues/4634) (May) | Low — long-open, low complexity but not prioritized |
| **In-chat running-commands panel (kill/extend)** | [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) (May) | Low — UX complexity, needs design |

**Strongest signals**: MCP timeout, Auto-Dream tolerance, per-session models, ReMe reranker (backend done, UI in #6399).

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **MCP integration brittle** | #6405 “Tool notfound” after v2.0 rename; #6724 no timeout → hangs | 😠 Frustrated — core feature unreliable |
| **Strict provider rejection** | #6803 StepFun 400; fixed quickly | 😐→😊 Relief after fix |
| **UI noise/distraction** | #6585 live char counter “hurts eyes”; #6876 background task cards flood chat | 😠 Annoyed — density vs. visibility tradeoff |
| **IME crash blocks workflow** | #6885 Chinese input unusable in v2.1.0b2 | 😠 Critical for CJK users |
| **Legacy session data loss** | #6872 local-path media breaks old sessions | 😟 Worried — migration gap |
| **Memory/ReMe excitement** | #6840 asking for ReMe4 roadmap; #6772 embedding hot updates PR | 😃 Engaged — power users tracking memory evolution |
| **Creator plugin depth** | #6870 massive aggregate PR (settings, skills, mm-plugins, async media) | 😃 Excited — platform extensibility landing |

## 8. Backlog Watch — Long-Open / Stalled Items Needing Attention
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) In-chat running-commands panel | 3 months | High-value UX for long-running shell tasks; reuses approval pipeline | Assign designer + frontend owner; scope MVP (list + kill only) |
| [#4634](https://github.com/agentscope-ai/QwenPaw/issues/4634) Window size/position memory | 3 months | Trivial fix, daily papercut for desktop users | Good first issue — label `good-first-issue`, add to v2.1.1 |
| [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) MCP “Tool notfound” in v2.0 | 3 weeks | Blocks MCP adoption; Docker users affected | Reproduce in CI; check tool registry naming vs. call path |
| [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724) Configurable MCP timeout | 6 days | Safety/correctness gap — hung MCP stalls agent turn | Accept PR or implement; add to `MCPClientConfig` schema |
| [#6840](https://github.com/agentscope-ai/QwenPaw/issues/6840) ReMe4 roadmap transparency | 2 days | Community planning depends on memory backend direction | Publish lightweight roadmap doc (even tentative) in `/docs` |
| [#6885](https://github.com/agentscope-ai/QwenPaw/issues/6885) IME crash (v2.1.0b2) | 1 day | **Regression** — blocks CJK input entirely | Prioritize #6889 merge; backport to 2.1.0 release branch |

---

**Health Indicators**  


</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-11

## 1. Today's Overview
ZeroClaw shows **very high development velocity** with 50 PRs updated and 8 issues touched in the last 24 hours, though no new release was cut. The project is actively addressing **two S1-severity workflow-blocking bugs** (SOP cancellation missing, silent SOP validation failures) and a **security advisory** (RUSTSEC-2026-0247 for unmaintained `bitmaps` crate). A controversial RFC proposing a full Python rewrite was closed today. The backlog contains numerous large, long-open PRs (several >60 days) indicating integration bottlenecks.

## 2. Releases
**No new releases today.** Current version remains at v0.8.4 (per issue #9896).

## 3. Project Progress — Merged/Closed Today
| PR / Issue | Title | Type | Impact |
|------------|-------|------|--------|
| [#9904](https://github.com/zeroclaw-labs/zeroclaw/pull/9904) | `chore(security): ignore RUSTSEC-2026-0247 (bitmaps unmaintained)` | Security / CI | Unblocks CI; adds deny waiver for unmaintained `bitmaps` crate (via `imbl` → Matrix SDK dev-deps). No safe upgrade exists. |
| [#9874](https://github.com/zeroclaw-labs/zeroclaw/issues/9874) | `RFC: Rewrite ZeroClaw in Python and retire the Rust codebase` | RFC (closed) | Closed by maintainers; 1,076 Rust files / 776k lines remain the active codebase. |

*Note: Only 2 of 50 updated PRs were merged/closed; 48 remain open, many large and aging.*

## 4. Community Hot Topics
| Item | Comments | Signals |
|------|----------|---------|
| [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) **SOP cancellation missing** | 4 👍0 | **P1, High risk** — Web dashboard lists running SOP jobs but exposes no Stop/Cancel action; operators cannot interrupt in-flight workflows. In progress. |
| [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) **Daemon reload signal mismatch** | 2 👍0 | **P1, Medium risk** — `SIGUSR1` not hooked for reload; degraded-security docs instruct operators to send a signal that *kills* the daemon. Accepted, fix pending. |
| [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) **RUSTSEC-2026-0247 triage** | 1 👍0 | Security CI failing on unmaintained `bitmaps 3.2.1`; waiver added via #9904 but tracker remains for eventual dependency migration. |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) **Multiple models per provider profile** | — | **XL, High risk** — Major provider refactor allowing one credential/endpoint to serve multiple model aliases. Touches config, gateway, runtime, web. |

*PR comment counts not available in feed; issue comments used as proxy for community engagement.*

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)
| Severity | Issue | Component | Status | Fix PR? |
|----------|-------|-----------|--------|---------|
| **S1** | [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) Running SOP jobs have no operator cancellation path | Web / Gateway / Runtime | In progress | — |
| **S1** | [#9901](https://github.com/zeroclaw-labs/zeroclaw/issues/9901) Unknown SOP step bullets silently treated as prose; `validate` reports valid | Runtime / Daemon | Open | — |
| **S2** | [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) Daemon reload not on `SIGUSR1`; docs suggest signal that kills daemon | Runtime / Daemon | Accepted | — |
| **S2** | [#9902](https://github.com/zeroclaw-labs/zeroclaw/issues/9902) `sop.max_concurrent_total` silently overrides per-SOP limit, undocumented, refusal never names it | Runtime / Daemon | Open | — |
| **S2** | [#9896](https://github.com/zeroclaw-labs/zeroclaw/issues/9896) Status banner reports `Memory: none` when SQLite backend is active | Runtime / CLI | Open | — |

*All five bugs filed/updated today; zero have linked fix PRs yet.*

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **Provider-grouped, paginated Telegram `/model` picker** | [#9895](https://github.com/zeroclaw-labs/zeroclaw/issues/9895) | Medium — mobile UX pain point; builds on #793/#820 |
| **Multiple models per provider profile** | [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | High — XL PR, active updates, addresses credential reuse |
| **ProviderErrorKind classification** | [#9557](https://github.com/zeroclaw-labs/zeroclaw/pull/9557) | High — P2, structured error handling for OpenAI/Anthropic/etc. |
| **Langfuse observability backend** | [#9556](https://github.com/zeroclaw-labs/zeroclaw/pull/9556) | Medium — P2, OTel + Langfuse, behind feature flag |
| **DAG-based plan/execute tool** | [#9554](https://github.com/zeroclaw-labs/zeroclaw/pull/9554) | Medium — P2, new tool for sequential/parallel agent planning |
| **SOP pane read-only status view** | [#9694](https://github.com/zeroclaw-labs/zeroclaw/pull/9694) | High — depends on #9692, UI mostly wired |
| **OpenAI Chat Completions gateway endpoint** | [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | High — long-standing (60+ days), broad ecosystem demand |
| **JUnit XML eval reports** | [#9223](https://github.com/zeroclaw-labs/zeroclaw/pull/9223) | Medium — CI integration, hand-rolled XML |

*Roadmap theme: **operator control** (SOP cancellation, daemon signals), **provider flexibility** (multi-model, error taxonomy), **observability** (Langfuse, JUnit), and **ecosystem compatibility** (OpenAI gateway).*

## 7. User Feedback Summary
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Cannot stop running SOPs** | #9425 “workflow blocked — no Stop/Cancel action” | Critical (S1) |
| **Silent SOP validation failures** | #9901 “unrecognised step bullet discarded… validate reports valid” | Critical (S1) |
| **Daemon signal UX hazard** | #9768 “docs tell operators to send a signal that kills the daemon” | High (P1) |
| **Undocumented/opaque concurrency limits** | #9902 “`max_concurrent_total` nowhere in docs… refusal never names it” | High (S2) |
| **Misleading memory status** | #9896 “reports `Memory: none` when SQLite is active” | Medium (S2) |
| **Mobile model selection cumbersome** | #9895 “many routes configured… cumbersome on mobile” | Feature request |

*Users are hitting **control-plane gaps** (cancellation, signals, validation) and **observability gaps** (status accuracy, error classification). Mobile/Telegram UX is a recurring friction.*

## 8. Backlog Watch — Stale High-Impact PRs Needing Maintainer Attention
| PR | Age | Scope | Blockers |
|----|-----|-------|----------|
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) **OpenAI Chat Completions gateway** | 43 days | Gateway, runtime, config, web — XL, High risk | Needs author action; broad ecosystem demand |
| [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) **Matrix single-message progress drafts** | 44 days | Matrix channel, WASM runtime — XL, High risk | Trusted contributor; complex channel integration |
| [#8546](https://github.com/zeroclaw-labs/zeroclaw/pull/8546) **Localize status fragments (i18n)** | 42 days | CLI, gateway — M, High risk | Stale candidate; i18n polish |
| [#8576](https://github.com/zeroclaw-labs/zeroclaw/pull/8576) **Env-var fallback for OpenAI STT creds** | 41 days | Channels, config — L, High risk | Fixes #7899; needs author action |
| [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) **SSRF gate for `file_download`** | 38 days | Tools, security — XL, High risk | Principal contributor; critical security fix |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) **Keep agent turns alive after viewer disconnect** | 31 days | Gateway, web — M, High risk | Distinguished contributor; UX critical for dashboard |
| [#9013](https://github.com/zeroclaw-labs/zeroclaw/pull/9013) **Move TodoWrite display config to zerocode** | 30 days | Config, zerocode — XL, High risk | Architectural refactor; principal contributor |
| [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) **Cron job wall-clock timeout** | 19 days | Cron, runtime — XL, High risk | P1; prevents stuck locks; distinguished contributor |

*Eight PRs >19 days old, all marked **needs-author-action** or **stale-candidate**, several **P1/High risk**. Review bandwidth appears to be the primary bottleneck.*

---

**Health Indicators**
- 🔴 **Critical bugs open with no fix PRs** (2× S1, 3× S2 filed today)
- 🟡 **High PR WIP count** (48 open) with **large, aging PRs** (8 >19 days, 4 XL)
- 🟢 **Security advisory handled quickly** (waiver merged same day as tracker issue)
- 🟢 **Active feature development** across providers, observability, tooling, gateway
- 🟡 **RFC proposing full rewrite closed** — confirms Rust commitment but signals contributor friction

**Recommendation**: Prioritize review/merge of the 8 backlog PRs (especially #8486, #8713, #9002, #9320) to unblock security, ecosystem compatibility, and dashboard UX. Assign owners for today’s S1 bugs (#9425, #9901) to prevent workflow blockage.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*