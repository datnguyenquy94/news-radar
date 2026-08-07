# OpenClaw Ecosystem Digest 2026-08-07

> Issues: 160 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-07 03:09 UTC

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

# OpenClaw Project Digest — 2026-08-07

## 1. Today's Overview
OpenClaw shows **extremely high velocity** with 160 issues and 500 PRs updated in the last 24 hours (145 issues open, 400 PRs open). The project is in active beta development (2026.7.2-beta.7 current) with no stable release today. Work spans gateway performance, session/message reliability, Windows compatibility, memory indexing, channel integrations (Matrix, Telegram, Slack, voice), and security hardening. The volume suggests a pre-release stabilization push.

## 2. Releases
**No new releases today.** The latest beta is `2026.7.2-beta.7 (dabe191)`. A release preparation PR [#119942](https://github.com/openclaw/openclaw/pull/119942) for **extended-stable 2026.6.35** is open, applying 258 reliability/security fixes from `c780d8b..8fc4458` with historic omission review back to 6.11.

## 3. Project Progress (Merged/Closed Today)
~100 PRs merged/closed in 24h. Notable completions:
- **[#119966](https://github.com/openclaw/openclaw/pull/119966)** `fix: prevent duplicate outbound delivery during concurrent recovery` — fixes race between CLI `message send` and gateway delivery recovery sharing SQLite state (P1, 🐚 platinum hermit)
- **[#119942](https://github.com/openclaw/openclaw/pull/119942)** Release prep for extended-stable 2026.6.35 (open, awaiting merge)
- Dependency updates: **[#117712](https://github.com/openclaw/openclaw/pull/117712)** bumps GitHub Actions group (10 updates, security/automation risk)
- Several security/compatibility fixes merged: base64 decode guards ([#105323](https://github.com/openclaw/openclaw/pull/105323)), bounded file reads in grep/extension tools ([#110778](https://github.com/openclaw/openclaw/pull/110778), [#111005](https://github.com/openclaw/openclaw/pull/111005)), js-yaml omap resolution ([#120122](https://github.com/openclaw/openclaw/pull/120122))

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Core Need |
|------|----------|-----------|
| **[#119087](https://github.com/openclaw/openclaw/issues/119087)** Gateway cold start regressed ~2.5x (P1) | 9 | **Performance regression** — `openclaw gateway` takes 2.5x longer to reach "http server listening" on 1-vCPU containers; blocks scaling on small instances |
| **[#118785](https://github.com/openclaw/openclaw/issues/118785)** QA proof for containers & external app SDK (P2) | 9 | **Release readiness** — Tracking primary QA for 23 container IDs + 31 SDK IDs audited at `3fa9cc2`; taxonomy binding for `@openclaw/sdk` |
| **[#119796](https://github.com/openclaw/openclaw/issues/119796)** Windows vitest teardown EBUSY on agent SQLite (P2) | 8 | **Windows CI stability** — `openclaw-agent.sqlite` handle not released during `extensions/zalo` test teardown |
| **[#117609](https://github.com/openclaw/openclaw/issues/117609)** Transient LLM errors not retried at embedded-assistant stage (P2) | 7 | **Reliability gap** — Long multi-step turns die on transient errors while channels/one-shot jobs retry; causes whole-turn loss |
| **[#90944](https://github.com/openclaw/openclaw/issues/90944)** `sessions_yield` resume reply recorded but not delivered (P1) | 7 | **Message loss** — Parent session gets child raw summary instead of parent reply when subagent completes |
| **[#15032](https://github.com/openclaw/openclaw/issues/15032)** Per-spawn tool restrictions for sub-agents (P2) | 7 | **Security isolation** — DMZ web search pipeline needs tool restrictions to prevent prompt injection (open since Feb) |
| **[#119333](https://github.com/openclaw/openclaw/issues/119333)** Codex `request_user_input` exposed in Default but rejected (P1) | 6 | **Tool contract violation** — Model calls tool that's documented as Plan-mode only; runtime rejects it |
| **[#44289](https://github.com/openclaw/openclaw/issues/44289)** Generate secretref docs from registry metadata (P2) | 6 | **Docs drift** — Manual sync of `secretref-user-supplied-credentials-matrix.json` and `secretref-credential-surface.md` |
| **[#58139](https://github.com/openclaw/openclaw/issues/58139)** memory-lancedb fails with Windows Docker bind mount (P2) | 6 | **Windows + Docker** — FS sync delays break plugin init; blocks Windows host development |
| **[#119411](https://github.com/openclaw/openclaw/issues/119411)** Memory file watcher never reindexes; `Dirty: no` but index stale (P1) | 5 | **Silent data staleness** — Indexed count < on-disk count, no reindex trigger, misleading status |

**Underlying theme**: Session/message reliability (compaction, delivery, yield), Windows compatibility, and performance regressions dominate. Contributors are hitting **data loss** and **silent failures** in production-like scenarios.

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 Critical (P0 / Data Loss / Crash Loop)
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| **[#118772](https://github.com/openclaw/openclaw/issues/118772)** (P0, 🦞) | `sessionEntry.totalTokens` inflated by cumulative run usage → premature compaction at 4–8% of context window → **data loss** | [#119267](https://github.com/openclaw/openclaw/pull/119267) (trajectory observability, part 2) |
| **[#119578](https://github.com/openclaw/openclaw/issues/119578)** (P1, 🦞) | `chat.history` allocates ~12MB/request → Control UI 2/sec poll saturates V8 old-space → **recurring gateway OOM** | — |
| **[#118408](https://github.com/openclaw/openclaw/issues/118408)** (P1, 🦞) | Concurrent subagent completions race on session JSONL → `EmbeddedAttemptSessionTakeoverError` → delivery failures | — |

### 🟠 High (P1 / Regression / Message Loss / Crash)
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| **[#119087](https://github.com/openclaw/openclaw/issues/119087)** | Gateway cold start **2.5x regression** 2026.7.1→2026.7.2 on 1-vCPU | — |
| **[#119411](https://github.com/openclaw/openclaw/issues/119411)** | Memory file watcher never reindexes; `memory status` lies (`Dirty: no`) | — |
| **[#117358](https://github.com/openclaw/openclaw/issues/117358)** | Post-turn compaction ignores boundaries, delays completed replies | — |
| **[#119515](https://github.com/openclaw/openclaw/issues/119515)** | CLI `openclaw update` strands managed gateway (recovery only wired for gateway-initiated) | — |
| **[#119808](https://github.com/openclaw/openclaw/issues/119808)** | Hook `requestHeartbeat` untargeted → triggers heartbeats on unrelated agents | — |
| **[#119754](https://github.com/openclaw/openclaw/issues/119754)** | Transcript projection rejects requests during rebuild instead of queueing | — |
| **[#119070](https://github.com/openclaw/openclaw/issues/119070)** | `RealtimeAudioPacer` timer drift → Twilio underruns/choppy audio | — |
| **[#119648](https://github.com/openclaw/openclaw/issues/119648)** | `doctor` misidentifies stopped agent's service, recommends wrong restart | — |
| **[#89216](https://github.com/openclaw/openclaw/issues/89216)** | Matrix per-room agent bindings **silently ignored** → all messages route to `main` | — |
| **[#119971](https://github.com/openclaw/openclaw/issues/119971)** | Preflight compaction treats Codex "owns compaction" no-op as fatal → drops user turn | — |

### 🟡 Medium (P2 / Behavior / UX)
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| **[#119796](https://github.com/openclaw/openclaw/issues/119796)** | Windows vitest teardown EBUSY on `openclaw-agent.sqlite` handle | — |
| **[#117609](https://github.com/openclaw/openclaw/issues/117609)** | Transient LLM errors not retried at embedded-assistant stage | — |
| **[#119333](https://github.com/openclaw/openclaw/issues/119333)** | Codex `request_user_input` exposed in Default mode but rejected at runtime | — |
| **[#58139](https://github.com/openclaw/openclaw/issues/58139)** | memory-lancedb fails with Windows Docker bind mount (FS sync delay) | — |
| **[#118667](https://github.com/openclaw/openclaw/issues/118667)** | `ModelCompatSchema` strict but omits 6 compat keys → config validation rejects valid keys | — |
| **[#118503](https://github.com/openclaw/openclaw/issues/118503)** | Managed env keys in systemd env files don't sync when `.env` edited | — |
| **[#119233](https://github.com/openclaw/openclaw/issues/119233)** | `models auth order set --agent` drops inherited profile IDs silently | — |
| **[#119772](https://github.com/openclaw/openclaw/issues/119772)** | Logbook vision analysis fails: structured extraction has no fallback to generic model | — |
| **[#119601](https://github.com/openclaw/openclaw/issues/119601)** | User messages unanswered by mid-turn aborts re-answered as batch (no answered watermark) | — |
| **[#119893](https://github.com/openclaw/openclaw/issues/119893)** | `cron edit` blank `--model/--thinking` silently ignored

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-08-07)

---

## 1. Ecosystem Overview

The open-source personal AI agent ecosystem is **fragmented but vibrant**, with 12 tracked projects spanning from massive reference implementations (OpenClaw: 160 issues/500 PRs/day) to dormant repositories (NullClaw, Moltis, ZeptoClaw). Three distinct clusters emerge: **enterprise-grade platforms** (OpenClaw, IronClaw, Hermes Agent) investing in multi-channel reliability, observability, and security; **developer-focused tooling** (NanoBot, NanoClaw, ZeroClaw, CoPaw) prioritizing session integrity, model orchestration, and extensibility; and **lightweight/embedded agents** (PicoClaw, LobsterAI) targeting specific platform integrations. No project has reached a true "stable 1.0" with broad production adoption—most are in perpetual beta with weekly releases. The dominant theme across active projects is **hardening core loops** (session/message delivery, upgrade safety, tool reliability) over new feature development.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health Score* |
|---------|---------------------|-------------------|----------------|---------------|
| **OpenClaw** | 160 | 500 | Beta (2026.7.2-beta.7), extended-stable prep | 🟢 **High** |
| **IronClaw** | 41 | 50 | **v1.1.0 stable** (2026-08-06) | 🟢 **High** |
| **Hermes Agent** | 12 | 50 | No release, architectural refactor sprint | 🟡 **Medium-High** |
| **ZeroClaw** | 10 | 50 | Pre-release v0.8.x stabilization | 🟡 **Medium-High** |
| **CoPaw** | 11 | 50 | v2.0.1 stable, v2.1.0b1 beta | 🟡 **Medium-High** |
| **NanoClaw** | 2 | 14 | No release, accumulated fixes | 🟡 **Medium** |
| **NanoBot** | 10 | 18 | No release, rapid hardening | 🟡 **Medium** |
| **LobsterAI** | 6 | 4 | Latest 2026.8.5.0, stale PR backlog | 🟡 **Medium** |
| **PicoClaw** | 0 | 2 | No release, maintenance mode | 🟠 **Low** |
| **NullClaw** | 0 | 0 | No activity | 🔴 **Dormant** |
| **Moltis** | 0 | 0 | No activity | 🔴 **Dormant** |
| **ZeptoClaw** | 0 | 0 | No activity | 🔴 **Dormant** |

*Health Score: 🟢 High velocity + recent releases + critical bug fixes; 🟡 Active but no release or backlog risk; 🟠 Low activity; 🔴 No activity*

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Scale & Velocity**: 3–10× the daily PR/issue volume of any peer; reflects a large contributor base and CI/CD maturity.
- **Multi-Channel Breadth**: Native Matrix, Telegram, Slack, voice (Twilio), and gateway clustering—exceeds all peers in protocol coverage.
- **Reliability Investment**: Dedicated "extended-stable" branch with 258 cherry-picked fixes; systematic compaction/session recovery work (P0 data-loss issues tracked).
- **Windows + Docker Parity**: Active investment in Windows CI (EBUSY fixes, bind-mount sync) and container QA (23 container IDs audited).

### Technical Approach Differences
| Dimension | OpenClaw | Typical Peer (IronClaw, Hermes, ZeroClaw) |
|-----------|----------|-------------------------------------------|
| **Architecture** | Monolithic gateway + SQLite state + plugin channels | Modular WASM/plugin sandboxes (IronClaw, ZeroClaw) or Rust/Tauri desktop (Hermes, CoPaw) |
| **Session Model** | JSONL + SQLite, compaction-aware, subagent yield/resume | In-memory + persistence layers; varied compaction strategies |
| **Extension Point** | Channel plugins + tool registry + `secretref` credential surface | WASM tools (IronClaw), MCP stdio (Hermes), skill CLI (CoPaw), A2A (ZeroClaw) |
| **Release Cadence** | Daily betas + periodic extended-stable | Weekly/monthly (IronClaw v1.1.0), or continuous beta (CoPaw, ZeroClaw) |

### Community Size Comparison
- **OpenClaw**: Largest by contributor count (implied by 500 PRs/24h), structured QA process, dedicated security/contract triage.
- **IronClaw/Hermes/ZeroClaw/CoPaw**: 5–15 active core committers each; strong maintainer-driven direction.
- **NanoBot/NanoClaw/LobsterAI**: 2–5 core maintainers; community contributions via PRs but less structured governance.
- **PicoClaw/NullClaw/Moltis/ZeptoClaw**: 0–1 active maintainers.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Session/Message Reliability** | OpenClaw, NanoBot, Hermes, IronClaw, ZeroClaw, CoPaw, LobsterAI | Compaction without data loss, subagent yield/resume, message delivery acknowledgments, retention trimming safety |
| **Upgrade/Installation Safety** | OpenClaw, NanoClaw, IronClaw, ZeroClaw | Transactional upgrades (DB snapshots, config backup), rollback verification, container image validation |
| **Multi-Channel Message Delivery** | OpenClaw, Hermes, IronClaw, ZeroClaw, CoPaw, PicoClaw | Telegram media/reply handling, Matrix thread parity, Slack DM restoration, WebSocket lifecycle management |
| **Security Hardening** | **All active projects** | API-key leakage prevention (NanoBot, ZeroClaw), SSRF guards (ZeroClaw), emergency-stop enforcement (ZeroClaw), plugin sandboxing (IronClaw, CoPaw), credential isolation (NanoClaw) |
| **Observability & Debugging** | OpenClaw, Hermes, IronClaw, ZeroClaw, CoPaw | Inspector/debug APIs (IronClaw, Hermes), token-count persistence (OpenClaw, Hermes), OTel conversation correlation (ZeroClaw), batch tool tracing (CoPaw) |
| **Windows + Container Compatibility** | OpenClaw, NanoBot, Hermes, LobsterAI | SQLite handle release, bind-mount FS sync, PowerShell 7.x support, installer watchdog reliability |
| **Model Orchestration & Fallback** | OpenClaw, NanoBot, PicoClaw, LobsterAI, CoPaw | Per-session model switching, fallback chains, context-window-aware compaction, provider compatibility (slash-in-model-ID) |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Technical Architecture | Key Differentiator |
|---------|---------------|-------------|------------------------|-------------------|
| **OpenClaw** | Enterprise-grade multi-channel gateway | Platform operators, SaaS builders | TypeScript/Node gateway + SQLite + plugin channels | **Channel breadth + reliability engineering** at scale |
| **IronClaw** | Extensible agent platform with WASM sandbox | Developers building custom agents | Rust core + WASM tools + IronHub marketplace | **WASM tool sandbox + extension marketplace** |
| **Hermes Agent** | Desktop-first multi-protocol assistant | Power users, researchers | Python/Tauri desktop + MCP stdio + 5 chat protocols | **God-file decomposition + multi-device session continuity** |
| **ZeroClaw** | Protocol-first agent runtime (A2A, MCP) | Protocol implementers, interop-focused teams | Rust + A2A outbound + MCP resource materialization | **A2A outbound client + ratio-based context compaction** |
| **CoPaw** | Browser automation + memory-augmented agent | Web automation, financial API users | TypeScript + Playwright + ReMe embedding + AG-UI | **AG-UI protocol exposure + browser session management** |
| **NanoBot** | Lightweight self-hosted with rich WebUI | Individual developers, small teams | Python + WebUI + Matrix/Weixin/Telegram | **Security-first hardening + session isolation + WebUX polish** |
| **NanoClaw** | Skill-based automation with credential proxy | DevOps, CI/CD automation | Go + skill CLI + native credential proxy | **Transactional upgrades + skill capability seams** |
| **LobsterAI** | Desktop app wrapping OpenClaw/core | End-users wanting GUI | Electron + OpenClaw integration | **Desktop UX + per-model token config** |
| **PicoClaw** | QQ Channel bot framework | Chinese ecosystem bot builders | Go + QQ Channel SDK | **QQ Channel rich-media parity** |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration (Pre-Stable)** | OpenClaw, ZeroClaw, CoPaw, Hermes Agent | Daily merges, architectural refactors, beta-only releases, high P0/P1 bug throughput |
| **Stabilizing (Recent Stable Release)** | IronClaw (v1.1.0), NanoClaw (accumulated fixes) | Post-release bug bash, patch candidates queued, focus on reliability over features |
| **Maintenance / Feature-Complete** | NanoBot, LobsterAI, PicoClaw | Low issue velocity, PRs polish UX/security, stale PR backlogs (2–4 months) |
| **Dormant / Abandoned** | NullClaw, Moltis, ZeptoClaw | Zero activity >24h; likely archived or superseded |

**Key Insight**: Only **IronClaw** has shipped a semantically versioned stable release (v1.1.0) recently. The rest operate on date-based betas or rolling `main`, indicating the ecosystem has not yet converged on production-ready baselines.

---

## 7. Trend Signals for AI Agent Developers

1. **Reliability > Features**: Every active project is fixing message loss, upgrade corruption, or session staleness—**not adding new tools**. The market signals that "agents that lose context" are unacceptable.

2. **Protocol Convergence on MCP + A2A**: ZeroClaw (A2A outbound), Hermes (MCP stdio), IronClaw (hosted MCP), CoPaw (AG-UI) all invest in **standardized tool/inter-agent protocols**. Proprietary plugin systems are being replaced or wrapped.

3. **Security as a Blocker**: API-key leakage (NanoBot, ZeroClaw), SSRF (ZeroClaw), plugin sandbox escapes (IronClaw, CoPaw) are treated as **P0/P1**—not afterthoughts. Enterprise adoption requires these fixes.

4. **Observability Becoming Table Stakes**: Inspector UIs (IronClaw, Hermes), OTel correlation (ZeroClaw), token-count persistence (OpenClaw, Hermes) — **debuggability is now a core feature**, not a nice-to-have.

5. **Desktop + Mobile Parity Demand**: Hermes (multi-device WS), CoPaw (MalwareBytes false positive), LobsterAI (gateway restart UX) — users expect **seamless cross-device session continuity** and **trustworthy installers**.

6. **Windows Is a First-Class Target**: OpenClaw, NanoBot, Hermes, LobsterAI all have active Windows CI fixes. **WSL2 bind-mount sync, SQLite handle leaks, PowerShell 7.x** are real blockers for developer adoption.

7. **Upgrade Safety = Operational Maturity**: NanoClaw (transactional upgrades), OpenClaw (extended-stable cherry-picks), IronClaw (Containerfile validation) — **immutable, rollback-safe deployments** are the differentiator for production use.

---

## Recommendation for Technical Decision-Makers

| If You Need... | Best Fit Today | Watch For... |
|----------------|----------------|--------------|
| **Multi-channel production gateway** | OpenClaw (extended-stable branch) | Windows CI maturity, compaction data-loss fixes |
| **Extensible agent with sandboxed tools** | IronClaw v1.1.0+ | Inspector WebUI (v1.2.0), routine deletion, Slack DM fix |
| **Desktop assistant with multi-device sync** | Hermes Agent | God-file sharding completion, multi-device WS PR |
| **Inter-agent protocol (A2A) experimentation** | ZeroClaw | A2A outbound client merge, v0.9 release |
| **Browser automation + memory** | CoPaw v2.1.0b1+ | MCP stability, desktop signing, doom-loop fix |
| **Lightweight self-hosted with WebUI** | NanoBot | Model-switching UX, token observability, Matrix threading |
| **CI/CD automation with skill safety** | NanoClaw | Transactional upgrade merge, Tavily MCP skill |

**Bottom Line**: The ecosystem is **consolidating around reliability, protocol standards, and security**—but no single project offers a complete, stable, production-hardened stack yet. Teams should **adopt sub-systems** (e.g., IronClaw's WASM sandbox, OpenClaw's channel plugins, ZeroClaw's A2A client) rather than bet on a full platform.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-07

## 1. Today's Overview
NanoBot saw **high contributor velocity** on 2026-08-07 with **18 PR updates** (7 merged/closed) and **10 issue updates** (2 closed). No new release was cut. The day’s work clusters around **three pillars**: (1) **security hardening** — three P1/P2 PRs eliminating API-key leakage into subprocesses and process-global `os.environ`, plus a fix moving session history out of the agent workspace; (2) **session & history reliability** — fixes for proactive message loss during retention trimming, stale background-task overwrites, and missing media URLs on history reads; (3) **WebUI/UX polish** — temporary chat mode, inline model-preset editor, drag-and-drop sidebar sessions, shared project terminal, and cold-start payload reduction. Overall project health is **strong**: critical security bugs are being patched within hours, and the backlog of channel/protocol issues (Matrix, Weixin) continues to shrink.

---

## 2. Releases
**None** — no new version published today.

---

## 3. Project Progress (Merged / Closed PRs Today)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5272](https://github.com/HKUDS/nanobot/pull/5272) | **Bug fix (P2)** | Preserves `_channel_delivery` proactive messages (cron/job notifications) during session retention trimming. Closes [#5273](https://github.com/HKUDS/nanobot/issues/5273). | Prevents silent loss of background notifications that precede user replies. |
| [#5231](https://github.com/HKUDS/nanobot/pull/5231) | **Feature** | Archives idle sessions for “Dream” (long-term memory) by writing `history.jsonl` on idle timeout, not only on size-based rotation. | Unblocks Dream processing for short-lived sessions. |
| [#5261](https://github.com/HKUDS/nanobot/pull/5261) | **WebUI UX** | Drag-and-drop sidebar sessions into composer or reorder list; persists manual order. | Improves session discoverability & workflow. |
| [#5248](https://github.com/HKUDS/nanobot/pull/5248) | **Bug fix (P2)** | Sends non-empty POST body on Matrix room join for Continuwuity compatibility. Closes [#5247](https://github.com/HKUDS/nanobot/issues/5247). | Fixes auto-join regression on strict homeservers. |
| [#5267](https://github.com/HKUDS/nanobot/pull/5267) | **WebUI polish** | Tightens transitions (220 ms), anchors content during reasoning disclosure, respects `prefers-reduced-motion`. | Smoother perceived performance. |
| [#5259](https://github.com/HKUDS/nanobot/pull/5259) | **WebUI / feature** | Enforces memory-only temporary sessions (no disk writes). Stacks on [#5252](https://github.com/HKUDS/nanobot/pull/5252). | Guarantees ephemeral chats stay ephemeral. |
| [#5262](https://github.com/HKUDS/nanobot/pull/5262) | **Performance (P1)** | Pre-compressed gzip assets, drops shared React runtime from lazy chunks, adds build-time regression guard. | Reduces cold-start payload & improves TTI. |

---

## 4. Community Hot Topics (Most Active Items)

| Item | Activity | Core Need / Signal |
|------|----------|---------------------|
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) **Bug: Cannot change model in-session** | 3 comments, updated today | Users expect **per-session model switching** (like SaaS chat UIs) without full reconfig. Signals demand for richer model-routing UX. |
| [#5278](https://github.com/HKUDS/nanobot/issues/5278) **Security: Session history inside agent workspace** | 1 comment, created today | **Workspace isolation breach**: agents with FS tools can read/modify any session file. PR [#5279](https://github.com/HKUDS/nanobot/pull/5279) already open. |
| [#5276](https://github.com/HKUDS/nanobot/issues/5276) **Session-level temp-file isolation** | 1 comment, updated today | Shared `~/.nanobot/workspace` leaks state across concurrent sessions; needed for multi-tenant / parallel agent runs. |
| [#5266](https://github.com/HKUDS/nanobot/issues/5266) **Token-consumption logging** | 0 comments, created yesterday | “Millions of tokens in 2 h without activity” — users lack observability into *which* call burns tokens. |
| [#5275](https://github.com/HKUDS/nanobot/issues/5275) / [#5274](https://github.com/HKUDS/nanobot/issues/5274) **Matrix threading UX** | 0 comments each, created yesterday | Parity with Discord/Slack: **reply-in-thread → dedicated context**; **bot replies should use Matrix reply fallback**. |

---

## 5. Bugs & Stability (Reported / Updated Today)

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **P0 (Security)** | [#5270](https://github.com/HKUDS/nanobot/pull/5270) CLI apps inherit full `os.environ` → API keys leaked to untrusted subprocesses | **Open PR** | [#5270](https://github.com/HKUDS/nanobot/pull/5270) |
| **P1 (Security)** | [#5269](https://github.com/HKUDS/nanobot/pull/5269) Providers write API keys into process-global `os.environ` → cross-instance leakage/swapping | **Open PR** | [#5269](https://github.com/HKUDS/nanobot/pull/5269) |
| **P2 (Security)** | [#5278](https://github.com/HKUDS/nanobot/issues/5278) Session history readable/writable via agent FS tools when `restrict_to_workspace=true` | **Open PR** | [#5279](https://github.com/HKUDS/nanobot/pull/5279) |
| **P2 (Data loss)** | [#5273](https://github.com/HKUDS/nanobot/issues/5273) Retention trimming drops proactive `_channel_delivery` messages | **Closed** | [#5272](https://github.com/HKUDS/nanobot/pull/5272) ✅ |
| **P2 (Race)** | [#5271](https://github.com/HKUDS/nanobot/pull/5271) Stale background task (`maybe_generate_webui_title`) overwrites session after `/new` | **Open PR** | [#5271](https://github.com/HKUDS/nanobot/pull/5271) |
| **P2 (Channel)** | [#4290](https://github.com/HKUDS/nanobot/issues/4290) Cronjob ends early when subagent spawned; main agent misses subagent result | **Open** | — |
| **P2 (Media)** | [#5264](https://github.com/HKUDS/nanobot/issues/5264) History endpoint omits `media_urls` for files outside media root | **Open PR** | [#5268](https://github.com/HKUDS/nanobot/pull/5268) |
| **P2 (Tool)** | [#5265](https://github.com/HKUDS/nanobot/pull/5265) Tool parameters accept `NaN`/`Infinity` → downstream crashes | **Open PR** | [#5265](https://github.com/HKUDS/nanobot/pull/5265) |
| **P2 (Weixin)** | [#5263](https://github.com/HKUDS/nanobot/pull/5263) Protocol delivery, streaming, QR login hardening | **Open PR** | [#5263](https://github.com/HKUDS/nanobot/pull/5263) |

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Per-session model switching (UI + `/model` command)** | [#5198](https://github.com/HKUDS/nanobot/issues/5198) | High — UX parity with SaaS chat; PR likely soon. |
| **Temporary / ephemeral chat mode** | [#5252](https://github.com/HKUDS/nanobot/pull/5252) + [#5259](https://github.com/HKUDS/nanobot/pull/5259) | **Already merged** — will ship in next cut. |
| **Shared interactive project terminal (PTY/ConPTY)** | [#5253](https://github.com/HKUDS/nanobot/pull/5253) | Medium — conflicts flagged; needs rebase/review. |
| **Metasearch provider (MST / reciprocal-rank-fusion)** | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | Medium — new provider, tests added; depends on review bandwidth. |
| **Token-consumption observability (per-call logging)** | [#5266](https://github.com/HKUDS/nanobot/issues/5266) | High — strong user pain; low implementation cost. |
| **Matrix thread/reply parity (Discord/Slack style)** | [#5274](https://github.com/HKUDS/nanobot/issues/5274), [#5275](https://github.com/HKUDS/nanobot/issues/5275) | Medium — channel-specific; may batch with next Matrix PR. |
| **Session-level tmp isolation (per-session `~/.nanobot/workspace`)** | [#5276](https://github.com/HKUDS/nanobot/issues/5276) | Medium — architectural; security-adjacent. |

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **In-session model switching broken** | “Clicking model blip allows no change… `/model` seemingly does nothing” ([#5198](https://github.com/HKUDS/nanobot/issues/5198)) | 😡 Frustrated — core workflow blocked. |
| **Token burn mystery** | “Millions of tokens in 2 h without noticeable activity” ([#5266](https://github.com/HKUDS/nanobot/issues/5266)) | 😟 Anxious — cost unpredictability. |
| **Matrix UX gaps** | Bot ignores reply/thread semantics ([#5274](https://github.com/HKUDS/nanobot/issues/5274), [#5275](https://github.com/HKUDS/nanobot/issues/5275)) | 😐 Disappointed — parity expectation. |
| **Security scare: session files exposed** | “Agent can `read_file` / `list_dir` into `<workspace>/sessions/`” ([#5278](https://github.com/HKUDS/nanobot/issues/5278)) | 😨 Alarmed — quick PR response appreciated. |
| **Positive: ephemeral chat & drag-and-drop** | PRs [#5252](https://github.com/HKUDS/nanobot/pull/5252), [#5261](https://github.com/HKUDS/nanobot/pull/5261) show active UX investment | 👍 Satisfied — visible progress. |

---

## 8. Backlog Watch (Stale / High-Value Items Needing Maintainer Attention)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#4290](https://github.com/HKUDS/nanobot/issues/4290) **Cronjob + subagent race** | ~60 days | Core automation reliability; blocks multi-agent workflows. No PR yet. |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) **MST metasearch provider** | 4 days | New capability; test coverage present. Awaiting review/merge decision. |
| [#5253](https://github.com/HKUDS/nanobot/pull/5253) **Shared project terminal** | 2 days | High-value dev-tool feature; marked `conflict` — needs rebase + review. |
| [#5276](https://github.com/HKUDS/nanobot/issues/5276) **Session tmp isolation** | 1 day | Security/multi-tenancy; design discussion needed before implementation. |
| [#5266](https://github.com/HKUDS/nanobot/issues/5266) **Token logging** | 1 day | Low-hanging fruit for observability; no PR yet. |

---

**Bottom line:** NanoBot is in a **rapid hardening & polish phase** — security regressions are being patched within hours, session integrity bugs fixed, and WebUX gaps closed. The next release will likely ship temporary chats, model-switching UX, token observability, and the Matrix/Weixin protocol fixes. Maintainer bandwidth on the cronjob/subagent race ([#4290](https://github.com/HKUDS/nanobot/issues/4290)) and the shared terminal PR ([#5253](https://github.com/HKUDS/nanobot/pull/5253)) would unblock high-impact features.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-07

## 1. Today's Overview
Hermes Agent shows **high architectural churn** with 62 total items updated in 24 hours (12 issues, 50 PRs). The dominant theme is **god-file decomposition** — a repo-wide mandate to shard 20 monolithic files (>9K lines each) into clean modules, tracked via epic #78647 (53 comments). Simultaneously, the team is fixing **cross-platform messaging reliability** (WhatsApp, Feishu, Telegram, Discord, Slack), **MCP stdio bridge crashes**, and **desktop session/UX bugs**. No releases today; velocity suggests a stabilization sprint before next cut.

## 2. Releases
**No new releases** published today.

## 3. Project Progress — Merged/Closed PRs (12 items)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#80724](https://github.com/NousResearch/hermes-agent/pull/80724) | **Bug Fix** | Persist `token_count` per message from response usage (was NULL for 20,930 rows) | Enables accurate context-window costing & compaction decisions |
| [#80729](https://github.com/NousResearch/hermes-agent/pull/80729) | **Bug Fix** | Treat `null` MCP `args` as `[]` in stdio bridge (fixes #80652) | Stops `TypeError: Value after * must be iterable` crash loop |
| [#80725](https://github.com/NousResearch/hermes-agent/pull/80725) | **Chore** | Auto-fix JS lint/formatting via `npm run fix` | Code hygiene, CI gate |
| [#80719](https://github.com/NousResearch/hermes-agent/pull/80719) | **UI Fix** | Prevent elapsed timer overlapping status label in Desktop | Visual polish |
| [#75468](https://github.com/NousResearch/hermes-agent/issues/75468) | **Bug Fix** (Issue closed) | Desktop sidebar pin/unpin persistence — backend now accepts `pinned` field | Session pinning survives reload |

*Other closed PRs appear to be duplicates or superseded.*

## 4. Community Hot Topics (Most Active Discussions)
| Item | Comments | Core Need |
|------|----------|-----------|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) **Epic: Shard all 20 god files** | 53 | **Architectural consensus** on module boundaries, shared interfaces, and migration order — “all god files are sharded, never reverted” |
| [#78635](https://github.com/NousResearch/hermes-agent/issues/78635) **Shard `agent/auxiliary_client.py` (9,924 lines)** | 7 | Concrete decomposition plan for the largest god file; will unblock downstream refactors |
| [#80218](https://github.com/NousResearch/hermes-agent/pull/80218) **Preserve archived compaction history on `/retry`** | High (gateway + 5 platforms) | Prevents data loss when users retry failed messages — critical for trust in long-running sessions |
| [#80723](https://github.com/NousResearch/hermes-agent/issues/80723) **One live session = one device (WS event routing)** | 1 (new) | **Multi-device session continuity** — “close laptop, watch on phone” use case blocked by single transport slot |

*Underlying theme:* **Session fidelity across devices & retries** is the top user-visible gap; **god-file sharding** is the top developer-visible investment.

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **P1 (Crash/Loop)** | [#80652](https://github.com/NousResearch/hermes-agent/issues/80652) MCP stdio bridge `TypeError` on `args: null` → `connecting → parked` loop every 5 min | **Fixed** | [#80729](https://github.com/NousResearch/hermes-agent/pull/80729) (closed) |
| **P2 (Data Loss)** | [#80218](https://github.com/NousResearch/hermes-agent/pull/80218) `/retry` deletes archived compaction history via `replace_messages(active_only=False)` | **Fix Open** | PR #80218 (open, cross-platform) |
| **P2 (Message Delivery)** | [#73779](https://github.com/NousResearch/hermes-agent/issues/73779) Feishu multiplex mode: `lark_oapi` WebSocket `Future attached to different loop` → gateway stops receiving | Open | — |
| **P2 (Desktop UX)** | [#80733](https://github.com/NousResearch/hermes-agent/issues/80733) Mac Desktop: forced sign-out every few days + white login screen (remote agent) | Open (0 comments) | — |
| **P2 (Config)** | [#80660](https://github.com/NousResearch/hermes-agent/issues/80660) WhatsApp `group_allow_from` ignores `WHATSAPP_GROUP_ALLOWED_USERS` env var | **Fix Open** | [#80735](https://github.com/NousResearch/hermes-agent/pull/80735) |
| **P2 (Streaming)** | [#79859](https://github.com/NousResearch/hermes-agent/issues/79859) Desktop “Talk to Hermes” uses delayed whole-file MP3 with OpenAI TTS (no barge-in) | Open | — |
| **P3 (Session State)** | [#80726](https://github.com/NousResearch/hermes-agent/issues/80726) File browser doesn’t switch project scope when clicking cross-project sessions | Open (Chinese) | — |
| **P3 (Config)** | [#80681](https://github.com/NousResearch/hermes-agent/pull/80681) `hermes config set agent.system_prompt` emits false “unrecognized key” warning | **Fix Open** | PR #80681 |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Multi-device live session watching** (WS broadcast) | [#80723](https://github.com/NousResearch/hermes-agent/issues/80723) | High — “single thing standing between us and close laptop, continue on phone” |
| **Kanban attachment actions** (open, preview, Quick Look, reveal) | [#80720](https://github.com/NousResearch/hermes-agent/issues/80720) | Medium — leverages existing preview rail |
| **`hermes sessions optimize --retention-days --dry-run`** | [#80737](https://github.com/NousResearch/hermes-agent/pull/80737) | High — PR open, combines prune+optimize+VACUUM |
| **Plugin security scanning on install/update** | [#80728](https://github.com/NousResearch/hermes-agent/pull/80728) | High — inspired by Claude Cowork, blocks malicious plugins |
| **Dyad integration skill** (local AI app builder, 21k★) | [#80727](https://github.com/NousResearch/hermes-agent/pull/80727) | Medium — optional skill, new ecosystem hook |
| **Verify subsystem** (run-recipe detection, env manifest, `hermes verify` smoke runner) | [#80686](https://github.com/NousResearch/hermes-agent/pull/80686) | High — ported from grok-cli, fits AGENTS.md ladder |
| **Finish plugin-provider migration for `image_gen` & TTS** | [#53317](https://github.com/NousResearch/hermes-agent/issues/53317) | Medium — long-running (since Jun), matches `video_gen` pattern |

## 7. User Feedback Summary
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Session pinning lost on reload** | #75468 (fixed) | “Only works for current UI session” |
| **MCP servers crash-loop on null args** | #80652 | Server enters `connecting → parked` every 5 min — unusable |
| **WhatsApp env vars silently ignored** | #80660 | `WHATSAPP_GROUP_ALLOWED_USERS` in `.env` does nothing |
| **Feishu gateway goes silent in multiplex mode** | #73779 | “Gateway silently stops receiving messages” |
| **Desktop voice = delayed voice-note, not conversation** | #79859 | No barge-in, several-second latency with OpenAI TTS |
| **Mac Desktop forces sign-out + white screen** | #80733 | “Every few days… white box where login screen does not show up” |
| **File browser stuck on wrong project** | #80726 | Cross-project session click doesn’t update workspace view |
| **Config warnings for valid keys** | #80681 | `agent.system_prompt`, `agent.personalities` flagged as unrecognized |

*Positive signals:* Active PRs show rapid fixes for reported bugs (MCP, WhatsApp, token_count, config validation). Community engages on architecture (god-file epic) and multi-device UX.

## 8. Backlog Watch — Stale/High-Value Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#53317](https://github.com/NousResearch/hermes-agent/issues/53317) **Finish plugin-provider migration for `image_gen` & TTS** | 42 days | Inconsistent architecture: `video_gen`/`web_search`/`browser` use pure registry; `image_gen`/`TTS` still have hardcoded `if/elif` chains |
| [#73779](https://github.com/NousResearch/hermes-agent/issues/73779) **Feishu multiplex WebSocket loop crash** | 9 days | Silent message delivery failure in production multiplex mode |
| [#79859](https://github.com/NousResearch/hermes-agent/issues/79859) **Desktop OpenAI TTS streaming (low-latency, barge-in)** | 1 day (updated) | Core “Talk to Hermes” UX gap vs. modern streaming TTS expectations |
| [#77428](https://github.com/NousResearch/hermes-agent/pull/77428) **`hermes doctor` false-positive on env-installed entry points** | 4 days | Breaks `doctor` credibility for non-venv installs (pipx, system, etc.) |
| [#78542](https://github.com/NousResearch/hermes-agent/pull/78542) **README interrupt guidance + quick-starts** | 3 days | Docs still say `Ctrl+C` to interrupt — contradicts steer-focused release |
| [#79221](https://github.com/NousResearch/hermes-agent/pull/79221) **`tool_call_id` dedup scoped to current turn (DeepSeek)** | 2 days | Session-global dedup broke multi-turn tool calls for DeepSeek provider |

---

**Health Indicators**
- 🟢 **Fix velocity**: 12 PRs closed/merged in 24h, several directly addressing today’s bugs
- 🟡 **Architectural debt**: God-file sharding epic (20 files) is a multi-sprint commitment; no clear finish line
- 🟡 **Platform coverage**: 5 messaging platforms + Feishu multiplex + WhatsApp + Telegram/Discord/Slack — cross-platform fixes (#80218) are high-leverage
- 🔴 **Desktop stability**: Mac sign-out/white-screen (#80733) and voice latency (#79859) are user-facing regressions with no fix PR yet

**Next Watch**: Multi-device session PR (#80723), plugin security scan (#80728), and verify subsystem (#80686) — all open PRs with high strategic value.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-07

## 1. Today's Overview
PicoClaw shows low community activity in the past 24 hours with zero new issues and only two pull requests updated. One PR (#1349) was merged, delivering enhanced QQ Channel attachment handling, while another (#3200) remains open proposing a configurable model fallback chain for the web UI. No new releases were published. The project appears in a maintenance-and-incremental-feature phase with focus on platform integrations and UX improvements for model management.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | **Merged** | feat(qq): support parsing and replying to more attachment types | Adds full support for QQ Channel emoji structures, incoming voice/image/video/file messages, and outgoing local attachments with Markdown fallback. Expands bot capability on QQ Channel significantly. |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | **Open** | feat(models): add configurable default fallback chain | Introduces a persistent, reorderable default model fallback chain in the web UI and backend API, enabling resilient multi-model routing. |

## 4. Community Hot Topics
With zero issues and only two PRs updated (both with 0 comments and 0 reactions), there are no actively discussed community topics in the last 24 hours. The merged PR #1349 addresses a concrete platform gap (QQ Channel rich media), while the open PR #3200 targets a power-user need (model fallback orchestration). Both reflect maintainer/contributor-driven work rather than community demand signals.

## 5. Bugs & Stability
No bug reports, crashes, or regressions were filed or updated in the last 24 hours. The merged PR #1349 includes error handling (Markdown fallback) which suggests attention to graceful degradation, but no explicit bug fixes are documented.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|------------------------------|
| Configurable default model fallback chain with persistence | PR #3200 (open, author: lc6464) | **High** — PR is well-scoped, touches UI + API, and addresses a clear operational need for production deployments. |
| Extended QQ Channel rich media parity (emoji, voice, video, file) | PR #1349 (merged) | **Delivered** — Already merged; will appear in next release. |

## 7. User Feedback Summary
No direct user feedback (issues, comments, reactions) captured in the last 24 hours. The two PRs reflect contributor-identified gaps:  
- **QQ Channel builders** need full attachment parity to build competitive bots.  
- **Multi-model operators** need a UI-managed fallback chain to avoid single-model outages.  
Absence of issues may indicate either stable usage or low community visibility.

## 8. Backlog Watch
No long-unanswered issues exist in the current dataset (0 total issues). The only open item needing maintainer attention is **PR #3200** — it has been open since 2026-07-01 (37 days) with no review activity. Given its scope (UI + API + persistence), it would benefit from a maintainer triage to unblock merge or request changes.

---

*Data sourced from GitHub API for sipeed/picoclaw; covers activity updated 2026-08-06 through 2026-08-07.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-07

## 1. Today's Overview
NanoClaw shows **high maintenance velocity** with 14 PRs and 2 issues updated in the last 24 hours. The project is in a **stabilization and cleanup phase**: 8 PRs were merged/closed, addressing long-standing bugs in scheduling, Telegram message handling, and skill infrastructure. A critical upgrade-safety fix (#3195) and removal of abandoned Qodo skills (#3172) signal focus on reliability and reducing technical debt. No new releases were cut, but the merged changes collectively improve upgrade safety, multi-channel messaging, and scheduling robustness.

## 2. Releases
**No new releases** published today. The `main` branch has accumulated 8 merged fixes since the last release; a patch release incorporating the upgrade transactionality (#3195), scheduling fixes (#2678, #2679), and Telegram media-message support (#2213) would be high-value for operators.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) | Refactor (core-team) | **Removed stale `get-qodo-rules` and `qodo-pr-resolver` skills** + Google MCP skill; they depended on unconfigured SaaS integrations. | Eliminates broken bundled skills that intercepted coding requests (see Issue #3171). |
| [#2873](https://github.com/nanocoai/nanoclaw/pull/2873) | Fix (core-team) | **Split skill pre-flight from credentials** so `/update-skills` can refresh code without re-auth. | Unblocks seamless skill updates; resolves #2868. |
| [#2678](https://github.com/nanocoai/nanoclaw/pull/2678) | Fix | **Re-arm recurrence on permanent failure** (`getCompletedRecurring → getFinishedRecurring`). | Prevents scheduled tasks from stalling after a failed run. |
| [#2679](https://github.com/nanocoai/nanoclaw/pull/2679) | Fix | **Surface permanently-failed scheduled tasks** via `notifyFailedTasks` hook → user-visible notice. | Improves observability; failed tasks no longer vanish into logs. |
| [#2644](https://github.com/nanocoai/nanoclaw/pull/2644) | Fix | **Detect reply-to-bot in Telegram** `extractReplyContext`; sets `ReplyContext.isReplyToBot`. | Enables correct routing of direct replies to the bot. |
| [#2643](https://github.com/nanocoai/nanoclaw/pull/2643) | Fix | **Engage pattern/mention wirings on direct address** (@mention, DM, reply-to-bot). | Fixes bot silence when addressed directly without keyword match. |
| [#2213](https://github.com/nanocoai/nanoclaw/pull/2213) | Fix | **Accept media-only messages** (photo/video/file without caption) in Chat SDK bridge. | Stops silent drop of captionless media on Telegram & other channels. |
| [#2591](https://github.com/nanocoai/nanoclaw/pull/2591) | Fix | **Namespace user IDs by channel-type prefix** (not bare colon). | Prevents cross-channel ID collisions; improves multi-tenant isolation. |

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [Issue #3194](https://github.com/nanocoai/nanoclaw/issues/3194) — **`/update-nanoclaw` can stamp success without recoverable cutover** | Opened 2026-08-06, 0 comments, 0 👍 | **Upgrade safety**: current rollback protects Git but not SQLite, gitignored config, or external components. Four failure windows identified. |
| [PR #3195](https://github.com/nanocoai/nanoclaw/pull/3195) — **fix(update): make NanoClaw upgrades transactional** (core-team) | Opened 2026-08-06, updated 2026-08-06 | Direct fix for #3194; adds DB snapshots, config backup, and atomic cutover. Highest priority for next release. |
| [PR #3190](https://github.com/nanocoai/nanoclaw/pull/3190) — **feat: add Tavily MCP tool skill** | Opened 2026-08-05, updated 2026-08-06 | **Web search capability** via Tavily MCP; utility skill (no source changes). Signals demand for built-in search tools. |
| [PR #2705](https://github.com/nanocoai/nanoclaw/pull/2705) — **fix(use-native-credential-proxy): actually bypass OneCLI gateway** | Open since 2026-06-07, updated 2026-08-07 | **Credential isolation**: skill silently fell back to gateway; now truly opts out. Long-standing install-time bug. |

## 5. Bugs & Stability — Reported Today
| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **Critical** | [#3194](https://github.com/nanocoai/nanoclaw/issues/3194) | `/update-nanoclaw` mutates checkout before validation; rollback misses SQLite, gitignored config, external components. | **Fix PR open**: [#3195](https://github.com/nanocoai/nanoclaw/pull/3195) (core-team) adds transactional upgrade with DB snapshots & atomic cutover. |
| **High** | [#3171](https://github.com/nanocoai/nanoclaw/issues/3171) (closed) | Bundled Qodo skills intercept coding requests but require unconfigured `~/.qodo/config.json`. | **Fixed by removal**: [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) deletes the broken skills. |
| **Medium** | [#2705](https://github.com/nanocoai/nanoclaw/pull/2705) | `use-native-credential-proxy` skill fell back to OneCLI gateway instead of bypassing it. | **Fix PR open** (since Jun 7); updates `nativeCredentialsEnabled()` to read config file, not just env. |
| **Medium** | [#3193](https://github.com/nanocoai/nanoclaw/pull/3193) | Telegram Chat SDK outdated for rich messages (media, replies, etc.). | **Fix PR open**; updates SDK types & message parsing. |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Transactional upgrades** | Issue #3194 + PR #3195 (core-team) | **Very High** — blocker for production reliability. |
| **Tavily MCP search skill** | PR #3190 (utility skill, ready) | **High** — standalone, no source changes; adds web search. |
| **Host seams for skill-owned capabilities** | PR #3186 (refactor) | **Medium** — architectural; enables skills to declare capabilities (tools, prompts, resources) via host interfaces. |
| **`--rw` flag for `groups config add-mount`** | PR #3149 (CLI enhancement) | **Medium** — small UX improvement for volume mounts. |
| **Native credential proxy bypass** | PR #2705 (long-open fix) | **Medium** — affects launchd/systemd installs; should land soon. |

## 7. User Feedback Summary
- **Pain point**: Upgrade command (`/update-nanoclaw`) is **unsafe** — users risk corrupted state with no full rollback (#3194).  
- **Pain point**: **Bundled skills that don’t work out of the box** (Qodo) intercept requests and confuse users (#3171).  
- **Pain point**: **Media-only messages silently dropped** on Telegram — users send photos/files without caption and get no response (#2213, now fixed).  
- **Pain point**: **Scheduled tasks disappear on permanent failure** — no user notification, only logs (#2679, now fixed).  
- **Positive**: Core team actively removing dead code (#3172) and hardening infrastructure (#2873, #3195).  
- **Demand**: Built-in **web search** (Tavily MCP skill #3190) and **credential isolation** (#2705).

## 8. Backlog Watch — Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [PR #2705](https://github.com/nanocoai/nanoclaw/pull/2705) — `use-native-credential-proxy` bypass fix | **61 days** (opened 2026-06-07) | Affects real systemd/launchd installs; skill silently fails open. Ready for review. |
| [PR #3149](https://github.com/nanocoai/nanoclaw/pull/3149) — `--rw` flag for mount CLI | 9 days | Small but useful CLI ergonomics; follows guidelines, awaiting review. |
| [PR #3186](https://github.com/nanocoai/nanoclaw/pull/3186) — Host seams for skill capabilities | 3 days | Architectural refactor; enables extensible skill capability model. Needs design review. |
| [PR #3193](https://github.com/nanocoai/nanoclaw/pull/3193) — Telegram Chat SDK update | 1 day | Keeps Telegram integration current with rich-message types; low-risk dependency bump. |

---

**Project Health Indicators**  
- ✅ **High merge rate** (8/14 PRs closed today)  
- ✅ **Core-team engagement** on critical paths (upgrade safety, skill hygiene)  
- ⚠️ **One critical upgrade bug** with fix in review (#3195)  
- ⚠️ **Two medium-severity PRs** open >1 week (#2705, #3149)  
- 📦 **No release** despite accumulated fixes — consider patch cut.  

*Data sourced from GitHub API; links point to live items on `nanocoai/nanoclaw`.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-07

## 1. Today's Overview
IronClaw released **v1.1.0** yesterday (2026-08-06), marking the first stable release since v1.0.0. The project shows high velocity with **91 total items updated in 24 hours** (41 issues, 50 PRs), indicating an active post-release stabilization phase. The issue backlog is dominated by QA-identified bugs from recent bug bashes (labeled `bug_bash_P1-P3`, `qa-bug`), while PR activity centers on the new **Inspector/debugging infrastructure**, documentation hardening, and sandbox/profile improvements. The 18 closed issues and 17 merged/closed PRs suggest the team is actively clearing the release backlog.

## 2. Releases
### **ironclaw-v1.1.0** (2026-08-06)
- **Type**: Stable release (promoted from `1.1.0-rc.1` + fixes)
- **Headline Features**:
  - **Extension reach**: Register arbitrary hosted MCP servers
  - **IronHub deep links**: Install extensions directly from IronHub
  - **Durable file attachments**: Files persist across channels/conversations
  - **Slack improvements** (release notes truncated)
- **Migration Notes**: No breaking changes explicitly mentioned; this is a minor version bump from 1.0.0. Teams should verify MCP server registrations and Slack delivery targets work as expected post-upgrade.
- **Docker Image**: `docker.io/nearaidev/ironclaw:1.1.0` (see [PR #7303](#7303) for healthcheck fix)

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Scope | Impact |
|----|-------|-------|--------|
| [#7235](https://github.com/nearai/ironclaw/pull/7235) | feat(inspector): add operator inspection API and live updates | Core/Inspector | **Major** — Adds operator-only diagnostic endpoints, live diagnostics stream with cursor resume, deduplication, keepalive |
| [#7289](https://github.com/nearai/ironclaw/pull/7289) | fix(memory): sanitize FTS queries for natural-language recall on libSQL | Memory/Sandbox | **High** — Fixes production recall defect (#7275); enables natural-language search across conversations |
| [#7303](https://github.com/nearai/ironclaw/pull/7303) | fix(docker): install curl for orchestrator healthchecks | CI/Docker | **Critical for ops** — Resolves staged nodes stuck in `error` status despite healthy app |
| [#7259](https://github.com/nearai/ironclaw/pull/7259) | docs: enforce publication boundary, consolidate internal docs | Docs/CI | **Governance** — Fixes internal docs leaking to public Mintlify site; adds CI gate |
| [#7288](https://github.com/nearai/ironclaw/pull/7288) | fix(filesystem): make libSQL FTS safe for natural-language recall | Filesystem | Complements #7289; normalizes FTS5 terms, handles reserved words |
| [#7309](https://github.com/nearai/ironclaw/pull/7309) | fix(auth): omit OAuth scope parameter when ceiling empty | Auth | RFC 6749 compliance; fixes empty `scope=` emission |

**Key Advancement**: The **Inspector subsystem** (debugging/observability) landed its core API + live stream in #7235, with follow-up PRs (#7236, #7239, #7277) still open adding the WebUI shell, prompt inspection, and model-call statistics.

## 4. Community Hot Topics — Most Active Issues/PRs
### Top Issues (by comment count)
| Issue | Comments | Core Problem | Underlying Need |
|-------|----------|--------------|-----------------|
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | 4 | Approval notifications disappear from history | **Reliable human-in-the-loop UX** — users lose approval requests, blocking automations |
| [#5702](https://github.com/nearai/ironclaw/issues/5702) | 4 | GitHub issue search/create returns HTTP 403 | **Integration reliability** — configured GitHub capability non-functional |
| [#5522](https://github.com/nearai/ironclaw/issues/5522) | 3 | Reborn routine fails reading Slack DMs — missing capability + retry loop | **Capability discovery gaps** — agent doesn't gracefully handle missing Slack read capability |
| [#3533](https://github.com/nearai/ironclaw/issues/3533) | 3 | Telegram pairing doesn't auto-setup from UI (v0.28.1) | **Onboarding friction** — legacy but still reported; setup flow broken |
| [#5701](https://github.com/nearai/ironclaw/issues/5701) | 3 | Activity panel hides tool details, no real-time updates | **Observability during runs** — users can't debug in-progress executions |

### Top PRs (by engagement — all from core team)
- **[#7277](https://github.com/nearai/ironclaw/pull/7277)** — Inspector: model call statistics (tokens, latency, per-model breakdown)
- **[#7239](https://github.com/nearai/ironclaw/pull/7239)** — Inspector: prompt inspection + Prompt tab
- **[#7236](https://github.com/nearai/ironclaw/pull/7236)** — Inspector: debug panel shell + live diagnostics client (`?debug=true`)
- **[#7157](https://github.com/nearai/ironclaw/pull/7157)** — Explicit channel delivery tool (two-lane model: conversation lifecycle + notifications)
- **[#7184](https://github.com/nearai/ironclaw/pull/7184)** — Nostr host functions for WASM tools (signing, key management)

**Signal**: Heavy investment in **developer observability** (Inspector) and **delivery/notification architecture** — both critical for production agent reliability.

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)
| Severity | Issue | Status | Fix PR? | Description |
|----------|-------|--------|---------|-------------|
| **Critical** | [#5456](https://github.com/nearai/ironclaw/issues/5456) | Open | No | Runner lease expires (90s) before multi-tool routines complete — dominant failure 6/30 |
| **Critical** | [#5415](https://github.com/nearai/ironclaw/issues/5415) | Open | No | Multi-tool Google Sheets workflow fails with "protocol violation" at 18-25 tool calls |
| **High** | [#5508](https://github.com/nearai/ironclaw/issues/5508) | Open | No | Slack delivery target "not found" despite active connection — stale routines block new ones |
| **High** | [#5509](https://github.com/nearai/ironclaw/issues/5509) | Open | No | Chat creation latency scales with history size — frontend bottleneck before model request |
| **High** | [#5702](https://github.com/nearai/ironclaw/issues/5702) | Open | No | GitHub integration HTTP 403 on issue search/create |
| **High** | [#5553](https://github.com/nearai/ironclaw/issues/5553) | Open | No | Approval notifications vanish — breaks human-in-the-loop |
| **Medium** | [#5522](https://github.com/nearai/ironclaw/issues/5522) | Open | No | Reborn routine fails reading Slack DMs — capability_info retry loop |
| **Medium** | [#5504](https://github.com/nearai/ironclaw/issues/5504) | **Closed** | Likely in v1.1.0 | Routine creation hangs indefinitely |
| **Medium** | [#5552](https://github.com/nearai/ironclaw/issues/5552) | Open | No | Generic "invalid result" after multiple tool failures — no tool-level error visibility |
| **Medium** | [#5701](https://github.com/nearai/ironclaw/issues/5701) | Open | No | Activity panel collapses tool details, no real-time updates |
| **Low** | [#5557](https://github.com/nearai/ironclaw/issues/5557) | **Closed** | Likely in v1.1.0 | Logs deep link requires double-click to load conversation |
| **Low** | [#5704](https://github.com/nearai/ironclaw/issues/5704) | **Closed** | Likely in v1.1.0 | Image preview transparency during active run |
| **Low** | [#5705](https://github.com/nearai/ironclaw/issues/5705) | **Closed** | Likely in v1.1.0 | Terminal icon has no disable option |
| **Low** | [#5706](https://github.com/nearai/ironclaw/issues/5706) | **Closed** | Likely in v1.1.0 | Sidebar shows raw thread UUID under latency |

**Pattern**: Post-release bug bash surfacing **routine execution reliability** (leases, tool limits), **integration auth state drift** (Slack, GitHub), and **UI observability gaps**. Several P1/P2 bugs remain open without linked fix PRs.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Inspector/debugging UI** | 4 open PRs (#7236, #7239, #7277, #7235 merged) | **Very High** — Core team investment, near-complete |
| **Explicit channel delivery tool (two-lane)** | [#7157](https://github.com/nearai/ironclaw/pull/7157) (XL, open) | **High** — Approved design, implements conversation + notification separation |
| **Nostr host functions for WASM** | [#7184](https://github.com/nearai/ironclaw/pull/7184) (XL, open) | **Medium-High** — New capability surface for decentralized identity |
| **Docker + Railway sandbox profiles** | [#7214](https://github.com/nearai/ironclaw/pull/7214) (XL, open) | **Medium** — Explicit user sandboxing for multi-tenant |
| **Guidance unification (canonical docs + loader + CI gate)** | [#7306](https://github.com/nearai/ironclaw/pull/7306) (XL, open) | **Medium** — Internal DX, prevents doc rot |
| **Custom MCP registration privacy (definition-only)** | [#7253](https://github.com/nearai/ironclaw/pull/7253) (XL, open) | **Medium** — Security/privacy for hosted MCP |
| **Routine deletion mechanism** | [#5510](https://github.com/nearai/ironclaw/issues/5510) (bug_bash_P3) | **Medium** — User pain point, no working delete today |
| **Slack personal DM delivery restoration** | [#7300](https://github.com/nearai/ironclaw/pull/7300) (M, open) | **High** — Directly addresses #5508 |

**Prediction**: v1.2.0 will likely ship **Inspector WebUI**, **channel delivery tool**, and **sandbox profiles** — the three XL PRs with active development. Routine deletion and Slack DM fix are strong candidates for patch releases.

## 7. User Feedback Summary — Real Pain Points
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Routines silently fail or hang** | #5456 (lease expiry), #5504 (creation hangs), #5552 (generic errors) | Users can't trust automation; debugging blocked |
| **Integration auth state unreliable** | #5508 (Slack), #5702 (GitHub 403), #5416 (Google contradictory flow) | "Connected" ≠ working; users asked to reconnect working integrations |
| **No visibility into running agents** | #5701 (activity panel), #5552 (tool failures hidden), #5507 ("No thread attached") | Operators blind during execution; post-mortem difficult |
| **History accumulation degrades performance** | #5509 (chat creation latency ∝ history) | Power users penalized; workaround = delete history |
| **Approval flow broken** | #5553 (notifications vanish), #4342 (auth modal persists) | Human-in-the-loop — core safety feature — unreliable |
| **UI shows raw internals under load** | #5706 (raw UUIDs), #5707 (internal details in routine response) | Trust erosion; non-technical users confused |

**Satisfaction Signal**: Users are **actively testing and filing detailed bugs** (bug bash), indicating investment in the platform. But **core loops (routines, approvals, integrations) have reliability gaps** that block production use.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#5456](https://github.com/nearai/ironclaw/issues/5456) Runner lease expiry | 38 days | **P1, blocks multi-tool routines** — dominant failure pattern | Open, no fix PR |
| [#5415](https://github.com/nearai/ironclaw/issues/5415) Protocol violation at 18-25 tool calls | 39 days | **P1, hard limit on workflow complexity** | Open, no fix PR |
| [#5509](https://github.com/nearai/ironclaw/issues/5509) Chat latency ∝ history | 37 days | **P2, architectural frontend bottleneck** | Open, no fix PR |
| [#5510](https://github.com/nearai/ironclaw/issues/5510) Cannot delete old routines | 37 days | **P3, data hygiene + compounds Slack bug** | Open, no fix PR |
| [#4341](https://github.com/nearai/ironclaw/issues/4341) Agent CoT exposed + stuck thinking (Qwen) | 66 days | **P2, model-specific but user-visible** | Open, no fix PR |
| [#4343](https://github.com/nearai/ironclaw/issues/4343) MCP acknowledged but unusable (driver failure) | 66 days | **P2, integration surface broken** | Open, no fix PR |
| [#7184](https://github.com/nearai/ironclaw/pull/7184) Nostr WASM host functions | 3 days | **XL PR, new capability** — needs review/merge | Open, core author |
| [#7214](https://github.com/nearai/ironclaw/pull/7214) Docker/Railway sandbox profiles | 2 days | **XL PR, multi-tenant security** — needs review/merge | Open, core author |
| [#7306](https://github.com/nearai/ironclaw/pull/7306) Guidance unification | 1 day | **XL PR, doc governance** — prevents future leaks | Open, core author |

**Recommendation**: Prioritize **#5456** and **#5415** (routine execution ceiling) — they represent the hardest reliability ceiling. Assign owners for the three XL PRs (#7184, #7214, #7306) to avoid merge stalls.

---

**Project Health Score**: 🟡 **Cautionary** — Strong release cadence and core-team velocity, but **P1 reliability bugs in core loops (routines, approvals, integrations) remain unfixed** post-v1.1.0. The Inspector investment will pay off for debuggability, but user-facing stability needs immediate sprint focus.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-07

## 1. Today's Overview
LobsterAI shows **steady maintenance activity** with 6 issues and 4 PRs updated in the last 24 hours. No new release was published. Two PRs were merged/closed today, both addressing stability fixes (config handling and Windows installer watchdog). The issue tracker surfaces a mix of fresh bugs (execution silent failure, model ID slash handling) and long-standing UX pain points (forced system files, gateway restart opacity, input UX). Two stale PRs from April remain open, indicating a backlog of UI/feature work awaiting review or rebase.

## 2. Releases
**No new releases** in the last 24 hours. Latest published version remains **2026.8.5.0** (referenced in Issue #2443).

## 3. Project Progress — Merged/Closed PRs Today
| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2445](https://github.com/netease-youdao/LobsterAI/pull/2445) | `main`, `openclaw` | **fix(openclaw): strip plugin-index-managed keys from `config.set`** | Prevents config pollution / conflicts when OpenClaw manages plugin indexes. |
| [#2446](https://github.com/netease-youdao/LobsterAI/pull/2446) | `docs`, `platform: windows` | **fix(win-installer): rescue null watchdog exit code via extractor** | Improves Windows installer reliability by handling missing watchdog exit codes. |

Both PRs are **maintenance/stability fixes** merged by `fisherdaddy`. No feature PRs merged today.

## 4. Community Hot Topics — Most Active Items
| Item | Type | Comments | Reactions | Core Need |
|------|------|----------|-----------|-----------|
| [#2447](https://github.com/netease-youdao/LobsterAI/issues/2447) | Bug | 1 | 0 | **Silent execution failure** — no output, no error; blocks basic usage. |
| [#1196](https://github.com/netease-youdao/LobsterAI/issues/1196) | UX / Stale | 1 | 0 | **Forced system files in every workspace** — users want global/hidden config like Claude Code. |
| [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) | Bug / Stale | 1 | 0 | **Gateway restart UX broken** — progress bar vanishes, model shows unavailable despite browser open. |
| [#2444](https://github.com/netease-youdao/LobsterAI/issues/2444) | Feature | 0 | 0 | **Input box edit mode** — toggle for Enter= newline, Ctrl+Enter=send; larger compose area. |
| [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) | Bug | 0 | 0 | **Model IDs with `/` (e.g., SiliconFlow) unusable in UI** — blocking OpenAI-compatible providers. |
| [#1197](https://github.com/netease-youdao/LobsterAI/pull/1197) | PR (stale) | — | — | **Agent management UI overhaul** — delete from list, sidebar improvements. |
| [#1199](https://github.com/netease-youdao/LobsterAI/pull/1199) | PR (stale) | — | — | **Per-model context window & maxTokens** — persist, export, use in chat & Cowork/OpenClaw. |

**Underlying themes**:  
- **Reliability first** — silent failures (#2447) and gateway opacity (#1198) erode trust.  
- **Workspace hygiene** — forced files (#1196) create clutter; users expect global config.  
- **Provider compatibility** — slash-in-model-ID bug (#2443) blocks popular OpenAI-compatible APIs.  
- **Compose UX** — power users want a dedicated edit mode (#2444) for long prompts.

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#2447](https://github.com/netease-youdao/LobsterAI/issues/2447) | Execution produces **no output and no error** — core loop broken. | No |
| **High** | [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) | Model IDs containing `/` (SiliconFlow, etc.) **cannot be selected in UI** — blocks entire provider class. | No |
| **High** | [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) | Gateway restart **progress bar disappears**, model shows “unavailable” even with browser running. | No |
| **Medium** | [#2442](https://github.com/netease-youdao/LobsterAI/issues/2442) | Shell wrapper **stuck on PowerShell 5.1**; no user setting to upgrade to PS 7.x (pwsh). | No (design discussion) |

*No fix PRs linked to any of the above as of today.*

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|-----------------------------|-----------|
| **Per-model `contextWindow` / `maxTokens`** | [PR #1199](https://github.com/netease-youdao/LobsterAI/pull/1199) (stale) | **High** — PR already implements persistence, export, and propagation to Cowork/OpenClaw. Needs rebase/review. |
| **Agent management UI overhaul** | [PR #1197](https://github.com/netease-youdao/LobsterAI/pull/1197) (stale) | **Medium** — UX improvement with mockups; conflicts with main branch. |
| **Input box “Edit Mode” toggle** | [#2444](https://github.com/netease-youdao/LobsterAI/issues/2444) | **Medium** — Clear design proposal; low implementation risk. |
| **Global/hidden system files (AGENTS.md, USER.md…)** | [#1196](https://github.com/netease-youdao/LobsterAI/issues/1196) | **Medium** — Aligns with Claude Code pattern; reduces workspace clutter. |
| **User-selectable shell (PS 7.x / pwsh)** | [#2442](https://github.com/netease-youdao/LobsterAI/issues/2442) | **Low–Medium** — Requires config surface; compatibility testing needed. |

**Prediction**: The per-model token settings (PR #1199) and input edit mode (#2444) are the most “ready” candidates for the next minor release.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Silent execution failure** | #2447 (screenshot shows empty result pane) | Cannot complete any task; zero visibility. |
| **Workspace pollution** | #1196 — “6 forced files every workspace, delete → re-create” | Friction for multi-project users; clutter. |
| **Gateway restart black box** | #1198 — progress bar vanishes, false “model unavailable” | Uncertainty; users cannot diagnose. |
| **Provider lock-out** | #2443 — SiliconFlow `deepseek-ai/DeepSeek-V4-Flash` unusable | Blocks adoption of cost-effective OpenAI-compatible APIs. |
| **Compose ergonomics** | #2444 — Shift+Enter for newline, accidental sends | Slows prompt engineering; high cognitive load for long prompts. |
| **Shell version rigidity** | #2442 — hardcoded PS 5.1, no PS 7.x option | Limits modern PowerShell features for automation. |

**Positive signals**: Users file detailed bugs with screenshots and propose concrete UX solutions (#2444), indicating **invested, technical user base**.

## 8. Backlog Watch — Stale Items Needing Maintainer Attention
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [PR #1199](https://github.com/netease-youdao/LobsterAI/pull/1199) | ~4 months | Adds **per-model token/context config** — foundational for long-context & cost control. | Rebase, review, merge. |
| [PR #1197](https://github.com/netease-youdao/LobsterAI/pull/1197) | ~4 months | **Agent management UX** — delete from list, sidebar polish. | Resolve conflicts, design review. |
| [Issue #1196](https://github.com/netease-youdao/LobsterAI/issues/1196) | ~4 months | **Workspace hygiene** — global/hidden config files. | Design decision: global config vs hidden dir. |
| [Issue #1198](https://github.com/netease-youdao/LobsterAI/issues/1198) | ~4 months | **Gateway restart observability** — progress + status accuracy. | Add persistent status indicator, logging. |

---

**Health Indicator**: 🟡 **Moderate** — Active maintenance (2 merges today) but critical bugs (#2447, #2443) without fixes, and a 4-month backlog of high-value PRs. Prioritizing the silent-execution bug and the model-ID slash fix would restore confidence; merging PR #1199 would deliver a visible feature upgrade.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-07

## 1. Today's Overview
CoPaw shows **high development velocity** with 50 PRs updated (30 merged/closed) and 11 issues active in the last 24 hours. The project is in a **stabilization and feature-completion phase** for the 2.1.0 beta cycle, with significant work on memory/embedding infrastructure, AG-UI protocol exposure, file management APIs, and desktop stability. No new releases were published today. Critical bugs around MCP tool reliability, infinite agent loops, and desktop security alerts are receiving immediate attention.

## 2. Releases
**No new releases today.** The project remains on v2.0.1 stable with v2.1.0b1 in beta. The merged PRs today (especially #6759, #6605, #6337, #6525, #6651) represent substantial feature work likely targeting the next beta or stable release.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#6759](https://github.com/agentscope-ai/QwenPaw/pull/6759) | **Fix** | Preserve tool call extra content (Gemini thought signatures) across context lifecycle, session restoration, and compression | Critical for provider compatibility; fixes data loss in tool metadata |
| [#6605](https://github.com/agentscope-ai/QwenPaw/pull/6605) | **Fix** | Rehydrate tagged tool calls as typed `ToolCallBlock` objects with unique stream IDs | Fixes provider response parsing; enables thinking/content tag extraction |
| [#6337](https://github.com/agentscope-ai/QwenPaw/pull/6337) | **Feature** | Expose AG-UI protocol via `/protocol/agui/chat` endpoint (SSE streaming) | Major interoperability milestone; enables external AG-UI consumers |
| [#6525](https://github.com/agentscope-ai/QwenPaw/pull/6525) | **Feature** | User context transparent pass-through: Chat API → Agent → Tool → MCP → SKILL CLI | Security/architecture improvement; programmatic user identity flow without LLM exposure |
| [#6651](https://github.com/agentscope-ai/QwenPaw/pull/6651) | **Feature** | File/folder management REST API (CRUD, upload/download, listing) for `/files` route | Unblocks frontend Files page; replaces coarse workspace zip operations |
| [#6664](https://github.com/agentscope-ai/QwenPaw/pull/6664) | **Fix** | Graceful degradation when Codex CLI unavailable | Improves harness robustness in CI/environments without Codex |
| [#6741](https://github.com/agentscope-ai/QwenPaw/pull/6741) / [#6739](https://github.com/agentscope-ai/QwenPaw/pull/6739) | **Feature/Docs** | ReMe embedding config: unified factory, pre-save connectivity validation, runtime status UI | Major memory subsystem upgrade; addresses config fragility |
| [#6751](https://github.com/agentscope-ai/QwenPaw/pull/6751) | **Docs** | Scroll executable memory report blog post | Documentation/marketing |

## 4. Community Hot Topics

| Item | Activity | Core Need |
|------|----------|-----------|
| [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) **MCP工具规律性失效** | 3 comments, updated today | **Reliability**: MCP tools fail periodically (hours/overnight), require container restart. Suggests connection pooling, auth token expiry, or driver leak. High user impact. |
| [#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775) **Malware Bytes: Trojan in Desktop Windows** | 1 comment, created today | **Trust/Security**: False positive vs real threat. Blocks adoption; needs official response + code signing verification. |
| [#6773](https://github.com/agentscope-ai/QwenPaw/issues/6773) **Doom-loop/rubric gates disabled in `/goal` `/mission` on Linux** | 0 comments, updated today | **Safety**: Repetition protection silently broken due to config path bug (`workspace.agent_config` vs `workspace.config`). PR [#6774](https://github.com/agentscope-ai/QwenPaw/pull/6774) fixes. |
| [#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768) **Agent infinite loop after multi-step task** | 1 comment, updated today | **Stability**: Agent becomes unresponsive for hours; session blocked. Root cause: loop detection not triggering. |
| [#6756](https://github.com/agentscope-ai/QwenPaw/issues/6756) **`run_tool_batch` error: No toolkit available** | 2 comments, updated today | **Regression**: ContextVar injection failure in `AgentContextVarsSetupHook` at `POST_AGENT_BUILD` phase. Affects all batch tool usage. |

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775) Malware Bytes Trojan alert (Windows Desktop) | Open | — |
| **Critical** | [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) MCP tools fail periodically, require restart | Open | — |
| **High** | [#6773](https://github.com/agentscope-ai/QwenPaw/issues/6773) Doom-loop/rubric gates never activate (`in_loop_modes` no-op) | Open | [#6774](https://github.com/agentscope-ai/QwenPaw/pull/6774) |
| **High** | [#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768) Agent infinite loop, session blocked for hours | Open | — |
| **High** | [#6756](https://github.com/agentscope-ai/QwenPaw/issues/6756) `run_tool_batch`: "No toolkit available in current context" | Open | — |
| **Medium** | [#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) Large tool output freezes session load / context overflow | Closed | Likely addressed by memory/compression PRs |
| **Medium** | [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) `ToolCallBlock` missing `extra_content` crash | Closed | Fixed by [#6759](https://github.com/agentscope-ai/QwenPaw/pull/6759) |
| **Medium** | [#6762](https://github.com/agentscope-ai/QwenPaw/issues/6762) Long shell commands overflow in tool-call block (CodeMirror lineWrapping) | Closed | — |
| **Medium** | [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) `spawn_subagent` treats empty `batch` placeholder as batch mode | Closed | — |

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Configurable Chrome tab lifetime** across response cycles | [#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770) | High — architectural, low complexity |
| **EU language support (Hungarian)** | [#6765](https://github.com/agentscope-ai/QwenPaw/issues/6765) | Medium — i18n expansion ongoing |
| **Self-healing Playwright driver** connections | [#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776) | High — PR open, addresses browser backend robustness |
| **OneBot remote media handling** (voice/image via CDN URLs) | [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) | High — PR under review |
| **AG-UI protocol exposure** | [#6337](https://github.com/agentscope-ai/QwenPaw/pull/6337) | **Done** — merged today |
| **File management REST API** | [#6651](https://github.com/agentscope-ai/QwenPaw/pull/6651) | **Done** — merged today |
| **ReMe embedding validation & runtime status** | [#6741](https://github.com/agentscope-ai/QwenPaw/pull/6741) / [#6772](https://github.com/agentscope-ai/QwenPaw/pull/6772) | **Done/In Progress** — major memory subsystem upgrade |

**Prediction**: Next beta (2.1.0b2) will focus on: MCP stability, desktop security hardening, doom-loop fix, batch toolkit context, and browser driver self-healing. Memory/embedding improvements and AG-UI are already landing.

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **MCP unreliability** | [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) — "every night or few hours, tools stop working, restart fixes" | 😡 Frustrated; core workflow broken |
| **Desktop security trust** | [#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775) — "uninstalling until I hear back" | 😰 Alarm; blocks Windows adoption |
| **Session freeze on large output** | [#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) — "page unresponsive, context window overflow" | 😤 Annoyed; data loss risk |
| **Infinite agent loops** | [#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768) — "unresponsive for hours, messages never processed" | 😨 Critical; safety concern |
| **Batch tooling broken** | [#6756](https://github.com/agentscope-ai/QwenPaw/issues/6756) — "fails for every agent, simplest batch" | 😞 Disappointed; feature unusable |
| **Positive** | [#6765](https://github.com/agentscope-ai/QwenPaw/issues/6765) — "I love your work... thank you for all you do" | ❤️ Strong community affection |

**Key use cases**: Financial API automation ([#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768)), workspace file management ([#6651](https://github.com/agentscope-ai/QwenPaw/pull/6651)), OneBot/QQ integration ([#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715), [#6769](https://github.com/agentscope-ai/QwenPaw/pull/6769)), multi-language teams ([#6765](https://github.com/agentscope-ai/QwenPaw/issues/6765)).

## 8. Backlog Watch — Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) MCP periodic failure | 1 day (active) | **High user impact**; no diagnosis yet. Needs log analysis, connection lifecycle audit. |
| [#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775) Malware Bytes alert | 0 days | **Reputation risk**; requires official statement, binary verification, code signing audit. |
| [#6756](https://github.com/agentscope-ai/QwenPaw/issues/6756) `run_tool_batch` toolkit ContextVar | 1 day | **Regression in 2.1.0b1**; blocks batch workflows. Root cause identified (hook injection), fix straightforward. |
| [#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768) Infinite agent loop | 1 day | **Safety/correctness**; loop detection gates not firing. Related to [#6773](https://github.com/agentscope-ai/QwenPaw/issues/6773) config bug. |
| [#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770) Chrome tab lifetime config | 1 day | **Architectural**; verified on latest main. Low complexity, high utility for browser automation. |
| [#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) Memory: flush pending turns before compression | 8 days | **Data loss risk**; under review but stalled. Complements merged Scroll lifecycle fix. |
| [#6663](https://github.com/agentscope-ai/QwenPaw/pull/6663) Keep console channel enabled | 3 days | **DX improvement**; open but no review movement. |
| [#6767](https://github.com/agentscope-ai/QwenPaw/pull/6767) Harden agent persistence on shared FS | 1 day | **Reliability**; ready for review. Critical for containerized/shared-volume deployments. |

---

**Overall Health**:

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-07

## 1. Today's Overview
ZeroClaw shows **high development velocity** with 50 PRs and 10 issues updated in the last 24 hours, though no new releases were cut. The project is in an active pre-release stabilization phase for v0.8.x, with maintainers processing a mix of security hardening (emergency-stop enforcement, SSRF guards, API-key scrubbing), architectural RFCs (A2A outbound client), and operational fixes (TUI terminal state, daemon CPU leaks, Telegram command limits). Four issues remain open and active, including two critical bugs filed today (#9800, #9799), while six issues were closed — several with fixes already merged or in review. The PR backlog is substantial (42 open), with multiple high-risk, large-scope changes awaiting author action or maintainer review.

## 2. Releases
**No new releases today.** The latest tagged release remains **v0.8.4** (implied by issue #9800 referencing ZeroCode 0.8.4). No release candidates or pre-releases were published in the last 24h.

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Title | Area | Status | Notes |
|----|-------|------|--------|-------|
| #9741 | `ci(container): validate canonical all-features image` | CI, Container | **Closed** | Prevents MSRV lane drift from all-features `Containerfile` selection; resolves installer-drift check gap. |
| #9456 (issue) | `Validate Containerfile changes in PR CI` | CI | **Closed** | Adds `linux/amd64` no-push `Containerfile` source-build validation to PR workflow; path filter + build matrix updated. |
| #8720 | `Disable cachePoint for Bedrock Nova 2 Lite via config` | Provider:Bedrock, Config | **Closed** | Config option added to disable caching for `us.amazon.nova-2-lite-v1:0` model. |
| #7947 | `execute_pipeline bypasses per-agent tool gating` | Security, Sandbox | **Closed** | Confused-deputy fix: sub-tool steps now respect calling agent's `ToolAccessPolicy`. |
| #8950 | `Telegram setMyCommands rejected: BOT_COMMANDS_TOO_MUCH` | Channel:Telegram | **Closed** | Command-menu registration now splits/handles >100 commands (tools+skills+builtins). |
| #8615 | `compatible provider silently deletes content via unconditional \`thinking\` tag stripping` | Provider | **Closed** | Content-preserving parsing; unclosed tags no longer produce empty replies. |
| #9657 | `protected-literal checker mistakes generic "Signal" for channel name` | Docs | **Closed** | Matcher now distinguishes product literal from generic word. |

**Key advances:** Security hardening (pipeline gating, SSRF, API-key leak), provider reliability (Bedrock, compatible), CI/CD maturity (Containerfile validation), and channel robustness (Telegram, docs).

## 4. Community Hot Topics — Most Active Issues/PRs
| Item | Type | Comments | 👍 | Core Need / Signal |
|------|------|----------|----|---------------------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Issue (Tracker) | 11 | 0 | **Maintainer decision queue** for RFCs/design issues — central coordination point; 11 comments show active triage. |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | Issue (RFC) | 11 | 0 | **A2A outbound client (A2ATool)** — agents cannot proactively call external A2A agents; PR #9324 implements Phase 1. |
| [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) | PR (feat) | — | 0 | **A2A outbound client implementation** — 4 tools, shared v1.0 wire model, config block; addresses RFC review positions. |
| [#9440](https://github.com/zeroclaw-labs/zeroclaw/pull/9440) | PR (security) | — | 0 | **Enforce emergency stop before each tool call** — closes #9390; estop state now read at runtime. |
| [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) | PR (feat) | — | 0 | **Context compaction anchored to model window ratio** — opt-in `context_compact_ratio` replaces absolute budget. |
| [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) | PR (chore) | — | 0 | **Remove WATI channel** — full module/feature/CI/container/installer cleanup; high-risk due to surface area. |

**Analysis:** The community is coalescing around **inter-agent protocol (A2A)** and **runtime safety (estop, context compaction, channel hygiene)**. The two 11-comment threads (#8692, #9106) indicate maintainer bandwidth is focused on governance and protocol extensibility. PR comment counts are not surfaced in the data (`undefined`), so issue engagement is the primary signal.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)
| Severity | Issue | Component | Status | Fix PR / Notes |
|----------|-------|-----------|--------|----------------|
| **S0 — Security/Data loss** | [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) `execute_pipeline` bypasses per-agent tool gating | Security/Sandbox | **Closed** | Fixed: sub-tools now respect calling agent's `ToolAccessPolicy`. |
| **S0 — Security** | [#9435](https://github.com/zeroclaw-labs/zeroclaw/pull/9435) Gemini API key leaked in sanitized error text | Provider, Channel | **Open (needs-author-action)** | Scrub `?key=` from request URLs in error displays. |
| **S0 — Security** | [#9438](https://github.com/zeroclaw-labs/zeroclaw/pull/9438) Unauthenticated `/api/pair` lockout bypass | Gateway, Pairing | **Open (needs-author-action)** | Rate-limit identity derived from peer; trusted proxy headers opt-in. |
| **S0 — Security** | [#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) `image_gen` tool SSRF via server-supplied download URL | Tool: image_gen | **Open (needs-author-action)** | Gate download URL against SSRF; validate against allowlist. |
| **S1 — Crash/Regression** | [#9800](https://github.com/zeroclaw-labs/zeroclaw/issues/9800) SIGTERM leaves terminal raw/mouse-tracking modes | ZeroCode/TUI | **Open (new today)** | No fix PR; terminal state not restored on SIGTERM during full-screen TUI. |
| **S1 — Resource Exhaustion** | [#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799) Ephemeral daemon 140-177% CPU, repeated DB handles | Runtime/Daemon | **Open (new today)** | No fix PR; 17h run, many repeated handles, closed Telegram socket. |
| **S2 — Data Corruption** | [#8615](https://github.com/zeroclaw-labs/zeroclaw/issues/8615) Compatible provider silently deletes content via `thinking` tag stripping | Provider | **Closed** | Fixed: content-preserving parsing. |
| **S2 — Degraded Behavior** | [#8950](https://github.com/zeroclaw-labs/zeroclaw/issues/8950) Telegram command menu never registers (>100 commands) | Channel:Telegram | **Closed** | Fixed: command splitting/registration logic. |
| **S2 — Degraded Behavior** | [#9283](https://github.com/zeroclaw-labs/zeroclaw/pull/9283) `web_fetch` returns binary noise (gzip/brotli/deflate not decompressed) | Tool:web_fetch | **Open (needs-author-action)** | Add decompression; reqwest built without default features. |
| **S2 — Degraded Behavior** | [#9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748) Stale provider refreshes mutate replacement sessions | Runtime/Session | **Open (needs-author-action)** | Per-session generation counter added; fixes #9719. |

**Stability signal:** Two **new critical regressions** (#9800, #9799) filed today with no fix PRs yet. Security surface is being actively hardened across providers, gateway, and tools. Several high-severity fixes are in "needs-author-action" limbo.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version | Notes |
|--------|--------|-----------------------------|-------|
| **A2A Outbound Client (A2ATool)** | [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) (RFC) + [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) (PR) | **High** | Phase 1 PR open; 4 tools, wire model, config block. Maintainer positions from RFC review incorporated. |
| **Context Compaction by Model Window Ratio** | [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) | **High** | Opt-in `context_compact_ratio`; replaces absolute token budget. Principal contributor authored. |
| **Cross-Turn Conversation Correlation (OTel)** | [#9352](https://github.com/zeroclaw-labs/zeroclaw/pull/9352) | **Medium** | Implements RFC #8933; adds `conversation_id` propagation through turn lifecycle. |
| **Tool-Owned Invocation Triggers (`send_via` vocabulary)** | [#9766](https://github.com/zeroclaw-labs/zeroclaw/pull/9766) | **Medium** | First of two slices from #7431; adds `Tool::invocation_triggers()` contract. |
| **MCP Resource Blob Materialization with Budget Preflight** | [#9196](https://github.com/zeroclaw-labs/zeroclaw/pull/9196) | **Medium** | Builds on merged #9195; materializes `resource` blobs to workspace with aggregate budget. |
| **WATI Channel Removal** | [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) | **High** | Full removal PR; reduces attack/maintenance surface. High-risk due to XL scope. |
| **Config: Surface Unconfigured Model Context Window** | [#9351](https://github.com/zeroclaw-labs/zeroclaw/pull/9351) | **High** | Distinguishes hardcoded 32k fallback from explicit config; improves `zeroclaw doctor`. |

**Roadmap inference:** Next minor (v0.9?) will likely ship **A2A outbound**, **ratio-based context compaction**, **OTel conversation correlation**, and **WATI removal**. Security hardening (estop, SSRF, API-key scrub) is parallel-track for patch releases.

## 7. User Feedback Summary — Real Pain Points
| Pain Point | Source | User Impact |
|------------|--------|-------------|
| **Terminal corrupted after SIGTERM in TUI** | [#9800](https://github.com/zeroclaw-labs/zeroclaw/issues/9800) | ZeroCode 0.8.4 users on macOS/Linux: mouse prints raw SGR sequences; requires `reset` or terminal restart. |
| **Daemon CPU runaway (140-177%) over 17h** | [#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799) | Ephemeral daemon users: unbounded CPU, repeated DB handles, possible leak after Telegram socket close. |
| **Bedrock Nova 2 Lite caching errors** | [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) | Config workaround needed; user had to request `cachePoint` disable via config file. |
| **Telegram bot command menu never appears** | [#8950](https://github.com/zeroclaw-labs/zeroclaw/issues/8950) | Agents with >100 tools/skills/builtins: slash commands silently fail on every daemon start. |
| **Silent content loss from `thinking` tag stripping** | [#8615](https://github.com/zeroclaw-labs/zeroclaw/issues/8615) | Users invisibly lose response content; unclosed tags produce empty replies. |
| **`web_fetch` returns binary garbage on compressed responses** | [#9283](https://github.com/zeroclaw-labs/zeroclaw/pull/9283) | Yahoo Finance and other gzip/brotli sites return unreadable bytes; reqwest built without compression features. |
| **Emergency stop (`estop`) didn't actually stop tools** | [#9440](https://github.com/zeroclaw-labs/zeroclaw/pull/9440) | Operators thought kill switch worked; state file written but never read by runtime. |

**Satisfaction signal:** Users are hitting **operational rough edges** (TUI, daemon, Telegram limits) and **silent data loss** (provider parsing, estop). Config-driven workarounds are common but not discoverable. Security incidents (API key leak, SSRF) are being caught pre-exploit but indicate expanding attack surface.

## 8. Backlog Watch — Long-Unanswered / Stalled High-Value Items
| Item | Age | Type | Blocker / Need |
|------|-----|------|----------------|
| [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) `fix(tools/mcp): centralize deferred-MCP access policy` | 39 days | PR (Security) | **Principal contributor, needs-author-action** — fixes #8054 Surface 1(b); deferred MCP policy omission. High-risk, M size. |
| [#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) `fix(tools): gate image_gen download URL against SSRF` | 30 days | PR (Security) | **Principal contributor, needs-author-action** — server-supplied URL SSRF vector. High-risk, M size. |
| [#9166](https://github.com/zeroclaw-labs/zeroclaw/pull/9166) `ci(semgrep): diff-aware scan, SARIF upload, suppress FP surfaces` | 19 days | PR (CI/Security) | **Distinguished contributor, needs-author-action** — current Semgrep scans whole tree identically every PR (47 static findings). High-risk, S size. |
| [#9196](https://github.com/zeroclaw-labs/zeroclaw/pull/9196) `feat(mcp): materialize resource blob with aggregate budget preflight` | 18 days | PR (Feature) | **Experienced contributor, needs-author-action, follow-up** — builds on merged #9195; MCP resource handling. High-risk, L size. |
| [#9291](https://github.com/zeroclaw-labs/zeroclaw/pull/9291) `fix(cli): detect installed AppImage and use working desktop

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*