# OpenClaw Ecosystem Digest 2026-09-14

> Issues: 162 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-14 04:33 UTC

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

# OpenClaw Project Digest — 2026-09-14

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 662 total updates (162 issues + 500 PRs) in the last 24 hours, though no new release was cut. The 200 merged/closed PRs indicate strong merge throughput, while 300 open PRs suggest a substantial review backlog. Critical stability work dominates: session persistence blocking the Gateway event loop (#119720), text leakage between tool calls into messaging channels (#25592), and zombie process accumulation (#97616) are all P1/P0 issues actively discussed. A Windows update handoff regression (#146860) and runtime verification failures on 2026.9.3→2026.9.4 (#145510) block reliable upgrades. The project is in a **stabilization sprint** ahead of the 2026.9.3/2026.9.4 reliability push tracked in #145252.

---

## 2. Releases

**No new releases published today.** The latest coordination issue (#145252) tracks update/upgrade/Doctor/migration/rollback reliability for the 2026.9.3 / 2026.9.4 cycle, suggesting a release candidate or patch series is imminent once blocker issues resolve.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary |
|----|------|---------|
| [#147673](https://github.com/openclaw/openclaw/pull/147673) | CI/Windows | Capture Windows Git owner exit observations to diagnose checkout fixture failures |
| [#147744](https://github.com/openclaw/openclaw/pull/147744) | Web UI | Capture history prepend anchor phases for E2E diagnostic coverage |
| [#147830](https://github.com/openclaw/openclaw/pull/147830) | Agents/Image | Preserve captured model choices and resize limits during image analysis |
| [#147565](https://github.com/openclaw/openclaw/pull/147565) | Web UI | Keep chat images in place while loading (prevent layout shift) |

**Key advances:** CI diagnostics hardening, Web UI polish (image loading stability, history anchor tracking), and a fix for image analysis model selection regressions. Most merged PRs are focused on test observability and UI polish rather than core runtime fixes.

---

## 4. Community Hot Topics (Most Commented Issues/PRs)

| Item | Comments | Core Issue |
|------|----------|------------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 40 | **Text between tool calls leaks to messaging channels** — Internal agent narration/error handling appears as visible messages in Slack/iMessage. UX-breaking, security-adjacent (P1, 🦞 diamond lobster). Linked PR open. |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 30 | **Zombie process accumulation from hook/tool children** — Unreaped `openclaw-hooks`, `bash`, `codex` processes degrade runtime over time. Regression, P1 (🦐 gold shrimp). |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | 22 | **Codex app-server turn-completion stall** — Regression from 2026.5.27; "Codex stopped before confirming turn complete." Closed but high engagement suggests lingering impact. |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 20 | **Synchronous persistence blocks Gateway event loop at scale** — Session/transcript writes block main thread. Partial fixes landed (#140231, #138984) but root cause remains. P1 (🦞 diamond lobster). |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | 20 | **Centralized filename encoding utility** — Multi-encoding Content-Disposition handling (Shift-JIS, EUC-KR, GB18030) across channel adapters. Stale P3 but architectural. |

**Underlying needs:** Users are hitting **message pollution** (internal output in channels), **resource leaks** (zombies, event loop stalls), and **upgrade unreliability** — all eroding trust in production deployments. The community is demanding architectural fixes, not band-aids.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **P0 — Release Blocker** | [#146860](https://github.com/openclaw/openclaw/issues/146860) Windows managed update handoff stalls with `LogonType: InteractiveToken` | Open | [#147720](https://github.com/openclaw/openclaw/pull/147720) (Doctor self-conflict fix) |
| **P0 — Release Blocker** | [#145510](https://github.com/openclaw/openclaw/issues/145510) Update failure: `runtime-verification-failed` on 2026.9.3→2026.9.4 (win32) | Open | None yet |
| **P1 — UX/Security** | [#25592](https://github.com/openclaw/openclaw/issues/25592) Text between tool calls leaks to messaging channels | Open | Linked PR open (unlinked) |
| **P1 — Stability** | [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie process accumulation from hook/tool children | Open | None |
| **P1 — Scalability** | [#119720](https://github.com/openclaw/openclaw/issues/119720) Sync persistence blocks Gateway event loop at scale | Open | Partial: #140231, #138984 |
| **P1 — Regression** | [#102175](https://github.com/openclaw/openclaw/issues/102175) Embedded prompt cache breaks across room-event/policy/Responses boundaries | Open | None |
| **P1 — Security** | [#77292](https://github.com/openclaw/openclaw/issues/77292) Subagent/parent delivery context leaks across Telegram DM users (regression of #62306) | Closed | Fix claimed but user reports persistence |
| **P1 — Crash** | [#77443](https://github.com/openclaw/openclaw/issues/77443) WhatsApp event loop blocked (12s delay) on first inbound message | Closed | Patch in 2026.5.3-1? |
| **P2 — Data Loss** | [#144876](https://github.com/openclaw/openclaw/issues/144876) Tool-backed dashboard sessions end silently after length finalization failure | Open | None |
| **P2 — Regression** | [#106786](https://github.com/openclaw/openclaw/issues/106786) `gpt-5.6-*` advertised on ChatGPT-OAuth then silently falls back | Open | None |

**Pattern:** Windows upgrade path, event-loop-blocking I/O, and cross-channel message leakage are the three dominant failure modes. Several "closed" issues show user reports of recurrence.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signals |
|---------|-------|---------|
| **Persistent task-status surface for long-running turns** | [#52640](https://github.com/openclaw/openclaw/issues/52640) (8 comments, P2) | Discord-first, generic abstraction later. Addresses "heartbeat noise displaces real conversations." |
| **Slash command for preview streaming mode** | [#74077](https://github.com/openclaw/openclaw/issues/74077) (8 comments, P3) | `/stream off|final|partial|progress|reset` — runtime toggle without gateway restart. |
| **Skill Graph: on-demand dependency loading** | [#74100](https://github.com/openclaw/openclaw/issues/74100) (6 comments, P3) | Reduce token consumption by loading skill deps lazily. Chinese community request. |
| **Centralized filename encoding utility** | [#48788](https://github.com/openclaw/openclaw/issues/48788) (20 comments, P3) | Multi-encoding (Shift-JIS, EUC-KR, GB18030) for Feishu/channel adapters. Architectural. |
| **Default outbound topic/thread binding for Telegram** | [#53890](https://github.com/openclaw/openclaw/issues/53890) (5 comments, P2) | Agents lack config-level default topic for proactive sends. |
| **Jina Embeddings v5 task parameter support** | [#74419](https://github.com/openclaw/openclaw/issues/74419) (5 comments, P2) | Task-specific LoRA adapters for embeddings. |
| **Per-session envelope for `sessions.create/patch`** | [#74632](https://github.com/openclaw/openclaw/issues/74632) (5 comments, P2) | Runtime-policy fields for external clients. |

**Prediction:** The task-status surface (#52640) and slash streaming command (#74077) have high UX value and low complexity — likely next minor release. Skill Graph (#74100) and filename encoding (#48788) are architectural investments for 2026.Q4.

---

## 7. User Feedback Summary

**Pain Points (from issue narratives):**
- **Message pollution:** "Internal processing output, failed exec acknowledgments, narration leak to Slack/iMessage as visible messages" (#25592)
- **Upgrade anxiety:** "Windows managed update handoff stalls… settles abandoned" (#146860); "runtime-verification-failed on 2026.9.3→2026.9.4" (#145510)
- **Silent failures:** "Tool-backed dashboard sessions end silently after length finalization failure" (#144876); "gpt-5.6-* silently falls back" (#106786)
- **Resource leaks:** "312 MCP child processes consuming ~10GB RSS in under 4 hours" (#68527); zombie accumulation degrades runtime (#97616)
- **Context loss:** "Session context silently lost between turns with z.ai provider" (#76665); "Context compaction ineffective — agent loses context and loops" (#76938)

**Use Cases Evident:**
- Multi-agent Feishu deployments (7 agents, #76584)
- Telegram bots serving multiple users in DMs (#77292)
- Codex ACP via OAuth on Windows/Docker/Unraid (#77178, #73910)
- Mattermost streaming on Windows (#71699)
- macOS SMB-mounted volumes + Tailscale Funnel (#75767, #77414)

**Sentiment:** Frustration with **recurring regressions** (multiple "regression of #XXXXX" tags) and **silent degradation** (zombies, context loss, fallback models). Users want **observability** (task status, streaming control) and **upgrade confidence**.

---

## 8. Backlog Watch (Stale/High-Value Items Needing Maintainer Attention)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) Text leakage to channels | 202 days | P1, security-adjacent, UX-breaking, 40 comments, linked PR open but unmerged |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) Sync persistence blocks event loop | 40 days | P1, scalability blocker, partial fixes landed but root cause open |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie process accumulation | 77 days | P1, resource leak, degrades production runtimes, no fix PR |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) Centralized filename encoding | 181 days | Architectural, multi-channel impact, 20 comments, stale P3 but high leverage |
| [#52640](https://github.com/openclaw/openclaw/issues/52640) Persistent task-status surface | 175 days | High UX value, Discord-first, generic abstraction design ready |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) Prompt cache breaks across boundaries | 68 days | P2, security/session-state, affects long-lived embedded sessions |
| [#73910](https://github.com/openclaw/openclaw/issues/73910) Codex ACP isolated home without auth bridge | 138 days | P2, security (🦞), blocks managed Codex path, source repro available |
| [#68527](https://github.com/openclaw/openclaw/issues/68527) MCP retry storm exhausts VM | 149 days | P1, security/crash-loop, needs backoff/circuit breaker/systemd guards |

**Maintainer action recommended:** Prioritize #25592 (security/UX), #119720 (scalability), and #146860/#145510 (release blockers). The stale architectural issues (#48788, #52640) should be triaged for 2026.Q4 planning.

---

*Digest generated from GitHub API data as of 2026-09-14. All links point to github.com/openclaw/openclaw.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Ecosystem
**Date:** 2026-09-14 | **Projects Analyzed:** 12

---

## 1. Ecosystem Overview

The open-source AI agent ecosystem shows a **bimodal distribution**: a cluster of high-velocity projects (OpenClaw, Hermes Agent, NanoClaw, CoPaw, ZeroClaw, Moltis) actively stabilizing core runtimes, and a long tail of maintenance-only or stalled projects (IronClaw, NullClaw, ZeptoClaw, LobsterAI). **No project released a new version today**—the entire ecosystem is in a stabilization or review-bottleneck phase. Critical themes across active projects: **resource-leak remediation** (memory, processes, file handles), **upgrade/reliability hardening** (Windows, runtime verification), **provider/session affinity fixes**, and **security boundary enforcement** (SSRF, allowed-roots, credential masking). Community feedback converges on **trust erosion from silent failures** (context loss, model fallback, data deletion) and **demand for observability** (task status, streaming control, telemetry).

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Status | Health Score |
|---------|--------------|-----------|-------------------|----------------|--------------|
| **OpenClaw** | 162 | 500 | 200 | No release (stabilization sprint) | 🟡 **Caution** — High velocity but P0 blockers, review backlog |
| **NanoBot** | 0 | 7 | 3 | No release | 🟢 **Healthy** — Rapid UI polish, cron bugs have fix PRs |
| **Hermes Agent** | 5 | 50 | 19 | No release (v0.21.2 latest) | 🟡 **Stabilizing** — Leak sweep ongoing, 3 critical bugs opened today |
| **PicoClaw** | 5 | 3 | 3 (stale/docs) | No release (v0.3.1) | 🔴 **At Risk** — Critical bugs, mis-closed issues, no fix PRs |
| **NanoClaw** | 5 | 19 | 2 | No release | 🟢 **High Velocity** — Regression turnaround <24h, voice/Mattermost push |
| **NullClaw** | 0 | 0 | 0 | N/A | ⚫ **Inactive** — Zero activity |
| **IronClaw** | 0 | 5 (Dependabot) | 1 | No release | 🟡 **Maintenance-Only** — Automated deps only, 4 open Dependabot PRs |
| **LobsterAI** | 4 | 4 | 0 | No release | 🔴 **Stagnant** — P0 security PRs stale 168 days, no merges |
| **Moltis** | 2 | 5 | 5 | **Released 20260913.02** | 🟢 **Healthy** — Daily cadence, rapid bug fix, community engagement |
| **CoPaw** | 22 | 26 | 3 (docs) | No release (2.2.1 latest) | 🟡 **Caution** — Critical memory/session bugs, strong community PRs |
| **ZeptoClaw** | 1 | 0 | 0 | No release | 🟡 **Quiet** — Strategic architectural issue, no maintainer response |
| **ZeroClaw** | 4 | 50 | 0 | No release | 🟡 **Bottlenecked** — 9 high-risk PRs >14d, review capacity saturated |

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale of investment**: 662 updates/24h dwarfs all others (next: Hermes 50, ZeroClaw 50, CoPaw 48)
- **Multi-channel maturity**: Production deployments across Slack, iMessage, Telegram, Feishu, Mattermost, Discord, WhatsApp — broader than any peer
- **Enterprise-grade concerns**: Session persistence at scale, upgrade/rollback reliability, centralized encoding utilities — signals production hardening focus

**Technical Approach Differences:**
- **Gateway-centric architecture** with explicit event-loop management (vs. CoPaw's SSE watcher, Hermes' cron/ESTOP, Moltis' hook lifecycle)
- **Managed update/Doctor/migration/rollback pipeline** as first-class concern (#145252) — unique in ecosystem
- **Channel-adapter abstraction** handling multi-encoding (Shift-JIS, EUC-KR, GB18030) — only project with explicit i18n filename strategy

**Community Size Indicators:**
- 40-comment issue (#25592 text leakage) shows deep user engagement
- Multiple "regression of #XXXXX" tags indicate long-term user base tracking regressions across versions
- Use cases span 7-agent Feishu deployments, Codex ACP via OAuth, macOS SMB+Tailscale — broader deployment diversity than peers

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Resource-leak remediation** | OpenClaw (zombies #97616, event-loop block #119720), Hermes Agent (10+ PRs closing HTTP/files/pipes), CoPaw (memory exhaustion #7722, SSE watcher freeze #7721), NanoBot (cron claim persistence #3245) | Process reaping, async I/O off event loop, stream reader cancellation, connection pooling |
| **Upgrade/reliability hardening** | OpenClaw (Windows handoff #146860, runtime verification #145510), NanoClaw (setup reliability #3779/#3788/#3790), CoPaw (Docker CLI tools #3429), Moltis (daily releases) | Atomic rollback, pre-flight validation, Doctor diagnostics, migration idempotency |
| **Provider session affinity** | OpenClaw (prompt cache breaks #102175), ZeroClaw (OpenCode `x-opencode-session` #10603), NanoClaw (Codex CLI bootstrap #3792), Hermes Agent (Gemini video #98357) | Header propagation, cache warming, auth bridging, capability negotiation |
| **Security boundary enforcement** | ZeroClaw (host launcher #10381, git allowed-roots #10337, image validation #9819), LobsterAI (SSRF/file-read #1041), Hermes Agent (secret masking #92586), NanoClaw (Mattermost settings persistence) | Supply-chain verification, workspace confinement, credential redaction, trait-default audits |
| **Observability & control surfaces** | OpenClaw (task-status #52640, slash streaming #74077), NanoClaw (OpenTelemetry #3796), Moltis (hook lifecycle #1267), CoPaw (scheduled task output #7709, file cards #7744) | Turn-level metrics, streaming toggles, hook events, cost/token breakdowns |
| **Mobile/embedded performance** | PicoClaw (input lag #3281/#3350), NanoBot (mobile composer #5755), CoPaw (Android newline #7707) | Virtualized rendering, memoized state, responsive layouts |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | NanoClaw | CoPaw | Moltis | ZeroClaw | PicoClaw | NanoBot | LobsterAI | IronClaw | ZeptoClaw |
|-----------|----------|--------------|----------|-------|--------|----------|----------|---------|-----------|----------|-----------|
| **Primary Focus** | Multi-channel gateway, enterprise reliability | Local-first runtime, cron/voice, WASM plugins | Voice-first, Mattermost parity, setup UX | Plugin ecosystem, Hub multi-tenant, memory | Reasoning control, Telegram/Slack parity, hooks | Security boundaries, provider integrity, plugin/WASM | Embedded/Web UI perf, IRC, OpenCode Go | WebUI polish, cron, installer | Security-hardened desktop, memory extensibility | WASM toolchain, dependency hygiene | Local-first Rust binary, memory architecture |
| **Target Users** | Teams/prod deployments across channels | Developers, self-hosters, cron automation | Voice agents, Mattermost ops, self-hosters | Plugin authors, multi-tenant hubs, mobile users | Power users, shared-channel bots, integrators | Security-conscious operators, plugin developers | Edge/embedded, IRC communities, OpenCode Go | WebUI desktop/mobile, automation users | Local-first desktop, enterprise evaluators | Platform builders, WASM integrators | Personal assistant minimalists |
| **Architecture** | Gateway + channel adapters + session persistence | Rust core + Python agents + Honcho memory + WASM | TypeScript + skill system + provider abstraction | TypeScript + Creator plugin + ReMeLight memory | TypeScript + reasoning schema + hook bus | Rust + capability-based security + plugin runtime | TypeScript + JSONL store + Web UI | TypeScript + WebUI + cron engine | Electron + React + IPC + plugin system | Rust + Tokio + WASM runtime | Rust + local-first + minimal deps |
| **Key Differentiator** | Upgrade/Doctor/migration pipeline | ESTOP/cron contracts, secret masking | Voice WebRTC + Mattermost thread parity | Bot-manager plugin, Creator multi-episode | Reasoning effort levels (`max`, persistent default) | ADR-driven security provenance, exact WASM admission | Destructive compression bug (unique anti-pattern) | Mobile-first WebUI, cron claim persistence | SSRF/file-read vulns (unfixed 5mo), memory RFC | Dependabot-only velocity, WASM focus | Single strategic issue: memory vs local-first |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration (Daily merges, active triage)** | Moltis, NanoClaw | Moltis: daily releases, <24h bug fix; NanoClaw: regression turnaround <24h, 4 setup PRs merged |
| **High Velocity Stabilization** | OpenClaw, Hermes Agent, CoPaw, ZeroClaw | All >40 PRs/24h but merge bottlenecks: OpenClaw (300 open PRs), ZeroClaw (9 high-risk PRs >14d), CoPaw (critical bugs, 23 open PRs), Hermes (3 critical bugs opened today) |
| **Maintenance / Polish** | NanoBot, IronClaw | NanoBot: UI polish, cron fixes; IronClaw: Dependabot only |
| **Stalled / At Risk** | PicoClaw, LobsterAI, NullClaw, ZeptoClaw | PicoClaw: mis-closed critical bugs; LobsterAI: P0 security stale 168d; NullClaw: zero activity; ZeptoClaw: single architectural issue unanswered |

**Maturity Signals:**
- **Moltis** demonstrates highest release discipline (daily builds, changelog implied)
- **OpenClaw** shows deepest production hardening investment (Doctor/migration/rollback)
- **ZeroClaw** leads in security architecture formalization (ADR-016/017, capability-based model)
- **CoPaw** has strongest plugin/community contribution velocity (multiple first-time PRs)

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Voice as default interaction** | NanoClaw (GPT-Live-1 WebRTC #3772/#3764), Hermes Agent (browser daemon #110553), OpenClaw (WhatsApp event loop #77443) | Real-time duplex audio becoming table stakes; WebRTC + managed STT/TTS stacks converging |
| **Memory as pluggable service** | ZeptoClaw (#678), LobsterAI (#2660 MemCode proposal), Moltis (#1268 MemCode ask), CoPaw (ReMeLight #7719), Hermes Agent (Honcho hybrid #33485) | **Emerging standard**: SPI for memory providers — projects exposing this will win integrations |
| **Observability as product requirement** | NanoClaw (OpenTelemetry #3796), Moltis (hook lifecycle #1267), OpenClaw (task-status #52640), CoPaw (scheduled output #7709) | Turn-level traces, cost breakdowns, streaming controls now expected — not optional |
| **Security boundaries formalized** | ZeroClaw (ADR-016/017, launcher resolution), Hermes Agent (secret masking), LobsterAI (SSRF unfixed = cautionary tale) | Capability-based sandboxing, supply-chain verification, credential redaction moving from "nice-to-have" to "release blocker" |
| **Upgrade reliability = trust** | OpenClaw (Doctor/migration #145252), NanoClaw (setup verification #3779/#3798), Moltis (daily releases) | Users punish silent failures (context loss, model fallback, data deletion); atomic rollback + pre-flight checks becoming competitive differentiator |
| **Multi-channel parity as moat** | OpenClaw (7+ channels), NanoClaw (Mattermost parity push), Moltis (Telegram shared-channel #1265), Hermes Agent (Telegram single-message #110564) | Consistent UX across Slack/Telegram/Mattermost/Discord/IRC/Voice — projects solving this once win deployments |

---

## Summary for Decision-Makers

**If evaluating for production deployment:** **Moltis** (release discipline, rapid fixes), **NanoClaw** (regression velocity, voice/Mattermost), **OpenClaw** (deepest multi-channel hardening) lead — but verify OpenClaw's P0 blockers resolve.

**If building extensible agent platform:** **ZeroClaw** (security architecture, plugin/WASM admission), **Hermes Agent** (WASM plugins, cron/ESTOP), **CoPaw** (Creator plugin, bot-manager) offer strongest foundations.

**If contributing/extending:** **NanoBot** (mobile WebUI, clear cron fixes), **Moltis** (hook SPI, memory provider RFC), **ZeptoClaw** (architectural memory discussion) have lowest friction.

**Watch list:** **LobsterAI** (security debt), **PicoClaw** (data-loss bug, maintainer responsiveness), **IronClaw** (human activity absent), **NullClaw** (inactive).

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-14

---

## 1. Today's Overview
NanoBot saw **zero issue activity** but **7 PR updates** in the last 24 hours, indicating a maintenance-focused day with no new user-reported problems. Three PRs were merged/closed (all WebUI/UI polish), while four remain open—covering a cron persistence bug, session history search regression, automation edit regression, and a security test hardening. No new releases were cut. The project appears healthy: active triage, rapid PR turnover, and fixes targeting both user-facing UI and backend reliability.

---

## 2. Releases
**No new releases today.**

---

## 3. Project Progress — Merged / Closed PRs (2026-09-14)

| PR | Title | Area | Summary |
|----|-------|------|---------|
| [#5758](https://github.com/HKUDS/nanobot/pull/5758) | **fix(webui): streamline the connection screen** | WebUI | Replaced verbose setup instructions with a compact centered layout, inline connection arrow, language switcher, and collapsible password help. Validation feedback now appears inline in the password field. |
| [#5755](https://github.com/HKUDS/nanobot/pull/5755) | **fix(webui): improve mobile composer and settings navigation** | WebUI (Mobile) | Responsive composer controls (attachment/model left, send right), scrollable context-usage panel, and bottom-sheet settings drawer—no backend changes. |
| [#5754](https://github.com/HKUDS/nanobot/pull/5754) | **fix(webui): unify app logos and brand mentions** | WebUI | Consistent rounded full-canvas logos in Apps catalog; metadata-driven brand names (Linear, iTerm2, Draw.io, Google Drive) in messages/composer with unified sizing & alignment. |

**Net effect:** Three UI/UX polish PRs shipped—mobile usability, onboarding clarity, and brand consistency—all backward-compatible.

---

## 4. Community Hot Topics
*No issues were created or updated today; all community signal comes from PR discussions.*  
The four open PRs (see §5 & §6) are the only active threads. Each carries a `priority: p2` label, suggesting maintainers have triaged them for near-term attention. No PR has accumulated comments or reactions yet—typical for same-day submissions.

---

## 5. Bugs & Stability — Today’s Reports & Fixes

| Severity | PR / Issue | Title | Status | Fix PR? |
|----------|------------|-------|--------|---------|
| **High** | [#5757](https://github.com/HKUDS/nanobot/pull/5757) | `search_sessions` / filtered `read_session` miss older messages in long WebUI conversations | **Open** | Yes (PR #5757) |
| **High** | [#5751](https://github.com/HKUDS/nanobot/pull/5751) | Editing automation name/instructions incorrectly recomputes `next_run_at_ms` (skips due runs, breaks one-time tasks) | **Open** | Yes (PR #5751) |
| **Medium** | [#3245](https://github.com/HKUDS/nanobot/pull/3245) | Cron claim not persisted before `await`—risk of duplicate execution on crash/restart | **Open** (since Apr 2026) | Yes (PR #3245) |
| **Low** | [#5756](https://github.com/HKUDS/nanobot/pull/5756) | Proxy-clearing test fixtures not hermetic on hosts with OS-level proxies (Windows registry, macOS SystemConfiguration) | **Open** | Yes (PR #5756) |

**Note:** All four bugs have dedicated fix PRs authored by core contributors (`beemines`, `linziyanleo`, `fszcd`). The two high-severity regressions (#5757, #5751) were filed today and already have test-backed fixes.

---

## 6. Feature Requests & Roadmap Signals
*No explicit feature-request issues today.*  
Implicit signals from merged PRs:
- **Mobile-first WebUI** continues to be a theme (#5755).
- **Brand/custom-app extensibility** (#5754) suggests upcoming support for richer app metadata in the catalog.
- **Cron reliability** (#3245, #5751) hints at a push to harden automation scheduling before a potential v1.0 or major release.

**Prediction:** Next patch/minor will likely bundle the four open PRs plus any follow-up mobile/WebUI refinements.

---

## 7. User Feedback Summary
*No direct user feedback (issues, discussions, support threads) captured in the last 24 h.*  
The merged PRs address pain points that typically surface from real usage:
- Lengthy/confusing connection screen → streamlined onboarding.
- Cramped mobile composer → adaptive layout.
- Inconsistent app branding → unified visual language.  
These imply users are actively onboarding, using mobile, and integrating third-party apps.

---

## 8. Backlog Watch — Stale / Needs-Maintainer Items

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3245](https://github.com/HKUDS/nanobot/pull/3245) **fix(cron): persist claim before await** | **5 months** (opened 2026-04-17) | Core reliability fix for scheduled jobs; includes regression test. Still open despite clear correctness impact. |
| *No other issues/PRs > 30 days with recent activity in today’s dataset.* | | |

**Action suggested:** Prioritize review/merge of #3245 to eliminate a long-standing cron race condition.

---

*Data source: GitHub REST API (issues, pulls, releases) for `HKUDS/nanobot` on 2026-09-14. All links point to live GitHub objects.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-14

## 1. Today's Overview
Hermes Agent shows **high maintenance velocity** with 50 PRs updated in 24 hours (19 merged/closed), though no new release was cut. The merged work is heavily weighted toward **resource-leak remediation** (closing HTTP responses, file handles, pipes across eval scripts, gateway, MCP, browser, and auth helpers) and **cancellation/propagation fixes** for delegation and cron ESTOP contracts. Five new issues were opened today, including a **critical Windows orphan-process leak** (~22 GB RAM) and a browser-harness wedge that burns 12+ minutes per cron run. Two older bugs (Honcho memory shutdown abort, Telegram link-entity loss) were closed. Overall, the project is in a **stabilization sprint**—plugging leaks and hardening shutdown paths—while incremental features (Gemini video, webhook-triggered cron) continue landing.

## 2. Releases
**No new releases today.** The latest published version remains the one referenced in issues (v0.21.2 / 2026.9.11, commit `dd497c3d`).

## 3. Project Progress — Merged / Closed PRs Today
| PR | Type | Component | Summary |
|----|------|-----------|---------|
| [#110514](https://github.com/NousResearch/hermes-agent/pull/110514) | Bug fix | `tool/delegate` | Parent stop now reaches delegate children whose background admission was rejected (salvages #104758). |
| [#104758](https://github.com/NousResearch/hermes-agent/pull/104758) | Bug fix | `tool/delegate` | Restores parent cancellation for rejected async units that fell back to inline execution. |
| [#95273](https://github.com/NousResearch/hermes-agent/pull/95273) | Test fix | `comp/gateway` | Eliminates flaky relay test failures caused by adapter-guard cache race under parallel CI. |
| [#92586](https://github.com/NousResearch/hermes-agent/pull/92586) | Security | `comp/agent`, `area/auth` | Masks opaque credential values in Python `dict` `repr` output (tracebacks, pytest introspection). |
| [#71370](https://github.com/NousResearch/hermes-agent/pull/71370) | Security | `comp/agent`, `area/auth` | Original secret-masking PR for mapping `repr` (salvaged by #92586). |
| [#95262](https://github.com/NousResearch/hermes-agent/pull/95262) | Feature | `comp/cli`, `comp/gateway`, `comp/cron`, `platform/webhook` | Webhook route can fire an existing cron job on external event (event-triggered tasks). |

**Theme:** Cancellation propagation, test stability, secret hygiene, and event-driven cron.

## 4. Community Hot Topics
| Item | Link | Activity | Underlying Need |
|------|------|----------|-----------------|
| **#110561** Windows llama-server orphan (22 GB RAM) | [Issue #110561](https://github.com/NousResearch/hermes-agent/issues/110561) | 1 comment, opened today | **Critical resource leak on Windows** — managed subprocess not terminated on app exit; blocks GPU memory, requires manual kill. |
| **#110553** Browser harness daemon wedge | [Issue #110553](https://github.com/NousResearch/hermes-agent/issues/110553) | 0 comments, opened today | **Cron reliability** — shared browser daemon hangs, every `browser_exec` times out (120–420 s), burning CI minutes. |
| **#110562 / #110563** Cron ESTOP contract violation | [Issue #110562](https://github.com/NousResearch/hermes-agent/issues/110562) • [PR #110563](https://github.com/NousResearch/hermes-agent/pull/110563) | 0 comments, PR opened today | **Operational safety** — `hermes pause` sentinel ignored by 2 of 3 cron execution paths (NAS fire webhook, misfire backstop). |
| **#110564** Telegram single evolving message | [Issue #110564](https://github.com/NousResearch/hermes-agent/issues/110564) | 0 comments, opened today | **UX polish** — user wants one edited message per turn instead of fragmented bubbles across tool calls. |
| **#110552** Session reset lineage misclassification | [Issue #110552](https://github.com/NousResearch/hermes-agent/issues/110552) | 1 comment, opened today | **Data integrity** — `_reset_from` field overloaded (creation-time vs. backfill), corrupting session-graph analytics. |

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? | Notes |
|----------|-------|--------|---------|-------|
| **Critical** | [#110561](https://github.com/NousResearch/hermes-agent/issues/110561) Windows managed `llama-server` orphan (~22 GB RAM) | Open | No | Affects all Windows users running managed runtime; OOM risk, GPU starvation. |
| **High** | [#110553](https://github.com/NousResearch/hermes-agent/issues/110553) Browser harness daemon wedge → 12+ min cron timeouts | Open | No | Blocks browser-dependent cron jobs; no workaround. |
| **High** | [#110562](https://github.com/NousResearch/hermes-agent/issues/110562) ESTOP ignored by NAS fire webhook & misfire backstop | Open | **Yes** [#110563](https://github.com/NousResearch/hermes-agent/pull/110563) | Safety contract broken; pause/resume unreliable for cron. |
| **Medium** | [#110552](https://github.com/NousResearch/hermes-agent/issues/110552) Reset lineage provenance misclassified after `reopen_session()` | Open | No | Corrupts session-graph analytics; affects sweeper risk detection. |
| **Medium** | [#33485](https://github.com/NousResearch/hermes-agent/issues/33485) Honcho hybrid memory leaves daemon dialectic threads alive (CPython abort on shutdown) | **Closed** | Implied fixed | Intermittent SIGABRT during CLI teardown; memory plugin. |
| **Medium** | [#31071](https://github.com/NousResearch/hermes-agent/issues/31071) Telegram rich-text link URLs not exposed to agent | **Closed** | Implied fixed | `text_link` entity dropped; agent sees only visible text. |

## 6. Feature Requests & Roadmap Signals
| Request | Link | Likelihood for Next Release | Rationale |
|---------|------|-----------------------------|-----------|
| **Gemini Omni Flash 1.1 text-to-video (FAL)** | [PR #98357](https://github.com/NousResearch/hermes-agent/pull/98357) | **High** — PR open since 2026-08-30, adds 360p–4k resolution enum | Provider upgrade, backward-compatible, expands video gen surface. |
| **Webhook-triggered cron jobs** | [PR #95262](https://github.com/NousResearch/hermes-agent/pull/95262) | **High** — merged today | Turns scheduled jobs into event-driven tasks; already landed. |
| **Telegram single evolving message per turn** | [Issue #110564](https://github.com/NousResearch/hermes-agent/issues/110564) | **Medium** — new, no PR yet | UX improvement; requires gateway message-edit logic across tool boundaries. |
| **Resource-leak hardening (HTTP, files, pipes)** | 10+ PRs by KhanCold today | **Certain** — ongoing sweep | Systematic cleanup; reduces fd/socket exhaustion in long-running processes. |

## 7. User Feedback Summary
- **Windows users** report **unmanaged 22 GB RAM leaks** on exit — blocker for production desktop use (#110561).  
- **Cron operators** experience **silent ESTOP violations** — pause/resume unreliable, safety concern (#110562).  
- **Browser-automation users** hit **daemon wedge** that cascades into 12-minute timeouts — kills scheduled job reliability (#110553).  
- **Telegram power users** want **streaming UX** (single edited message) instead of fragmented replies (#110564).  
- **Session-analytics consumers** see **corrupted lineage** after legacy session reopen — impacts debugging & sweeper (#110552).  
- **Security-conscious deployers** benefit from **secret masking in tracebacks** (now merged in #92586).

## 8. Backlog Watch — Stale / High-Impact Items Needing Maintainer Attention
| Item | Link | Age | Why It Matters |
|------|------|-----|----------------|
| **Windows llama-server orphan** | [#110561](https://github.com/NousResearch/hermes-agent/issues/110561) | 0 days (new) | Critical resource leak; no workaround; affects all Windows managed-runtime users. |
| **Browser harness wedge** | [#110553](https://github.com/NousResearch/hermes-agent/issues/110553) | 0 days (new) | Cascading cron failures; needs daemon health-check / restart logic. |
| **Session reset lineage fix** | [#110552](https://github.com/NousResearch/hermes-agent/issues/110552) | 0 days (new) | Data-model bug; requires schema/migration decision for `_reset_from`. |
| **Gemini Omni Flash 1.1 video PR** | [#98357](https://github.com/NousResearch/hermes-agent/pull/98357) | 15 days | Feature-complete, awaiting review; expands video-gen capability. |
| **Delegation cancellation salvage** | [#104758](https://github.com/NousResearch/hermes-agent/pull/104758) | 7 days | Closed today but root cause (async pool rejection → inline fallback) may need broader audit. |

---

**Health Indicator:** 🟡 **Stabilizing** — High PR throughput on leaks/cancellation, but three **critical/high-severity bugs opened today** (Windows orphan, browser wedge, ESTOP gap) with no fixes yet. Next 48 h should prioritize #110561, #110553, and merging #110563.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-14

---

## 1. Today's Overview

PicoClaw shows moderate maintenance activity with **5 issues** and **3 pull requests** updated in the last 24 hours, though no new releases were published. The project is actively addressing two high-impact usability bugs: severe input lag in the Web UI on both desktop and embedded devices, and a data-loss concern where session compression physically deletes original chat history. Two feature requests (IRC long-message support, OpenCode Go session headers) remain open with community interest. The merged PRs are largely stale cleanup (i18n, ancient merge, README fixes), indicating maintainers are clearing backlog rather than shipping new functionality today.

---

## 2. Releases

**No new releases** published today. Current latest version remains **v0.3.1** (per issue #3281).

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Type | Status | Notes |
|----|-------|------|--------|-------|
| [#3348](https://github.com/sipeed/picoclaw/pull/3348) | i18n: complete Czech code wrap labels | Localization | **Closed (stale)** | Minor translation completion; no functional impact. |
| [#1545](https://github.com/sipeed/picoclaw/pull/1545) | fix: merge PR #1500 #1490 #1488 #1487 #1485 | Maintenance | **Closed** | Bulk merge of 5 ancient PRs from March 2026; likely code hygiene/backport. |
| [#20](https://github.com/sipeed/picoclaw/pull/20) | Fix typos and update API keys in README | Documentation | **Closed** | Corrects OpenRouter `api_base` URL, snake_case keys, step numbering. |

**Takeaway:** Today’s merged work is exclusively **maintenance and documentation** — no user-facing features or bug fixes landed.

---

## 4. Community Hot Topics — Most Active Issues

| Issue | Type | Comments | 👍 | Last Update | Core Need |
|-------|------|----------|----|-------------|-----------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Feature: IRC long-message support | 12 | 0 | 2026-09-13 | Treat multi-part IRCv3 messages (>512 bytes) as single cohesive messages; current split breaks context. |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | **Bug**: Web UI input lag with history | 11 | 2 | 2026-09-13 | Input box becomes unusably slow after ~moderate chat history; CPU spikes on keystroke. |
| [#3369](https://github.com/sipeed/picoclaw/issues/3369) | Feature: OpenCode Go session header | 1 | 2 | 2026-09-13 | Need `x-opencode-session` header mapping for OpenCode Go provider (not standard OpenCode Zen). |
| [#3351](https://github.com/sipeed/picoclaw/issues/3351) | **Bug**: Compression deletes raw history | 2 | 0 | 2026-09-13 | `SetHistory` → `rewriteJSONL` physically overwrites `.jsonl`, losing original messages permanently. |
| [#3350](https://github.com/sipeed/picoclaw/issues/3350) | **Bug**: Embedded device input lag | 2 | 0 | 2026-09-13 | Same lag as #3281 but exacerbated on low-power hardware (RV1106, RISC-V); blocks embedded use cases. |

**Underlying themes:**
- **Performance at scale** — Web UI rendering/input handling degrades quadratically with history length (issues #3281, #3350).
- **Data integrity** — Session compression is destructive, not append-only (#3351), violating user expectations of persistent history.
- **Protocol completeness** — Missing IRCv3 message stitching (#3287) and OpenCode Go header support (#3369) limit integration fidelity.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#3351](https://github.com/sipeed/picoclaw/issues/3351) | **Data loss**: `JSONLStore.rewriteJSONL` physically deletes original messages during compression. No recovery possible. User confirmed file shrinkage. | ❌ No fix PR |
| **High** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI input lag makes app unusable after moderate history; affects all desktop users. | ❌ No fix PR |
| **High** | [#3350](https://github.com/sipeed/picoclaw/issues/3350) | Same lag as #3281 but **blocks embedded/edge deployment** (RV1106, RISC-V); CPU spikes per keystroke. | ❌ No fix PR |
| **Medium** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | IRC messages >512 bytes split incorrectly; breaks context for long LLM responses over IRC. | ❌ No fix PR |

**Stability signal:** Two critical/high-severity bugs with **zero associated fix PRs** — maintainers have not yet triaged or assigned work.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Community Signal | Likelihood for Next Version |
|---------|-------|------------------|-----------------------------|
| IRCv3 long-message stitching | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | 12 comments, detailed spec | **High** — clear protocol gap, active discussion |
| OpenCode Go `x-opencode-session` header | [#3369](https://github.com/sipeed/picoclaw/issues/3369) | 2 👍, specific provider need | **Medium** — niche but well-scoped |
| Non-destructive session compression | [#3351](https://github.com/sipeed/picoclaw/issues/3351) | Implicit (bug report) | **High** — data-loss bug demands fix |
| Virtualized/virtual-list Web UI rendering | [#3281](https://github.com/sipeed/picoclaw/issues/3281), [#3350](https://github.com/sipeed/picoclaw/issues/3350) | 2 👍, 11+ comments | **High** — architectural fix needed for perf |

**Prediction:** Next patch (v0.3.2) will likely include: (1) JSONLStore append-only fix, (2) Web UI virtualization for history rendering, (3) IRC message reassembly. OpenCode Go header may wait for v0.4.

---

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Source | User Impact |
|------------|--------|-------------|
| **"Input box unusable after some chat history"** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Desktop users hit hard limit on session length; forces frequent history clearing. |
| **"Embedded device typing has 1–2s delay per character"** | [#3350](https://github.com/sipeed/picoclaw/issues/3350) | Blocks PicoClaw on RV1106/RISC-V edge devices — core target hardware for Sipeed. |
| **"Compression deleted my history permanently"** | [#3351](https://github.com/sipeed/picoclaw/issues/3351) | Trust violation; users expect `.jsonl` to be immutable log, not mutable state. |
| **"IRC bot splits long LLM replies into fragments"** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Breaks readability for IRC-based workflows (common in dev/ops communities). |
| **"OpenCode Go fails without session header"** | [#3369](https://github.com/sipeed/picoclaw/issues/3369) | Prevents adoption of OpenCode Go provider despite PicoClaw tracking session IDs. |

**Sentiment:** Frustration on **performance** and **data integrity**; enthusiasm for **protocol completeness**. No positive feedback captured in this window.

---

## 8. Backlog Watch — Stale & Unanswered Items Needing Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | **55 days** | Open, 11 comments | High-impact UX regression; no maintainer response in 2 weeks. |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | **54 days** | Open, 12 comments | Detailed feature spec ready; awaits triage/assignment. |
| [#3351](https://github.com/sipeed/picoclaw/issues/3351) | **15 days** | **Closed (stale)** | **Incorrectly closed** — data-loss bug marked stale without fix. Needs reopen. |
| [#3350](https://github.com/sipeed/picoclaw/issues/3350) | **15 days** | **Closed (stale)** | **Incorrectly closed** — embedded perf blocker marked stale. Needs reopen. |
| [#3369](https://github.com/sipeed/picoclaw/issues/3369) | **8 days** | Open (stale), 1 comment | Clear scope, 2 👍; low-effort provider fix. |

**Urgent maintainer actions:**
1. **Reopen #3351 and #3350** — both closed as "stale" despite being valid, unfixed bugs.
2. **Assign #3281/#3350 to performance sprint** — virtualized list or memoized rendering required.
3. **Triage #3287** — ready for implementation; IRCv3 spec referenced in comments.
4. **Review #3369** — trivial header mapping; good "good first issue" candidate.

---

## Project Health Snapshot

| Metric | Status |
|--------|--------|
| **Release cadence** | Stalled (no release since v0.3.1) |
| **Bug backlog** | Growing — 3 high-severity open, 2 incorrectly closed |
| **Community engagement** | High on pain points (11–12 comments), low on PR contributions |
| **Maintainer responsiveness** | Low — stale closures on critical bugs, no fix PRs in 24h |
| **Technical debt** | Rising — Web UI perf, destructive storage, protocol gaps |

**Recommendation:** Prioritize a **v0.3.2 "stability & perf" patch** addressing #3351, #3281, #3350 before new features. Reopen mis-closed issues immediately.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-14

## 1. Today's Overview
NanoClaw shows **high velocity** with 24 items (5 issues + 19 PRs) updated in the last 24 hours. The project is in active development across multiple fronts: voice channel integration (OpenAI GPT-Live-1), Mattermost adapter hardening, setup/installation reliability fixes, and agent delivery-mode configuration. Three items closed today — two PRs restoring the provider picker for fresh installs and one fixing Codex CLI bootstrap — indicating rapid response to recent regressions. No new release was cut; the main branch continues to accumulate features and fixes.

## 2. Releases
**No new releases published today.** The latest activity is all on `main`/`providers` branches.

## 3. Project Progress — Merged/Closed Today
| Item | Type | Summary | Impact |
|------|------|---------|--------|
| [#3790](https://github.com/nanocoai/nanoclaw/pull/3790) | PR (closed) | Restores the agent-provider picker during fresh interactive setup; a regression from #3729 caused `DEFAULT_AGENT_PROVIDER=claude` to skip the picker entirely. | **Critical UX fix** — first-time users can now choose Codex or other providers again. |
| [#3792](https://github.com/nanocoai/nanoclaw/pull/3792) | PR (closed) | Bootstraps a pinned Codex CLI for authentication so fresh Codex setup works without a globally installed `codex` binary. | **Unblocks Codex provider** for users without npm global install permissions. |
| [#3787](https://github.com/nanocoai/nanoclaw/issues/3787) | Issue (closed) | Fresh `bash nanoclaw.sh` install silently selected Claude, skipping the provider picker. | Duplicate of the regression fixed by #3790/#3788; now resolved. |

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3772](https://github.com/nanocoai/nanoclaw/pull/3772) / [#3764](https://github.com/nanocoai/nanoclaw/pull/3764) | 2 PRs, updated today | **Voice-first interaction** — full-duplex browser calls via OpenAI GPT-Live-1; adds `/add-voice` skill and WebRTC adapter. Signals strong push toward real-time voice agents. |
| [#3780](https://github.com/nanocoai/nanoclaw/pull/3780) / [#3797](https://github.com/nanocoai/nanoclaw/pull/3797) / [#3778](https://github.com/nanocoai/nanoclaw/pull/3778) / [#3777](https://github.com/nanocoai/nanoclaw/pull/3777) | 4 PRs, all updated today | **Mattermost parity with Slack** — thread engagement, setup verification, settings persistence, and removing bundled server provisioning. Operators want reliable, production-grade Mattermost integration. |
| [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) | High-priority bug, updated today | **Local-model turn truncation** — hardcoded 30-min absolute ceiling kills long-running local model turns; no config seam. Critical for self-hosted LLM users. |
| [#3796](https://github.com/nanocoai/nanoclaw/pull/3796) | New PR today | **Observability** — `/add-telemetry` skill exporting OpenTelemetry traces (turns, model calls, tools, costs). Addresses ops demand for production visibility. |

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)
| Severity | Item | Description | Fix PR Exists? |
|----------|------|-------------|----------------|
| **High** | [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) | Hardcoded `ABSOLUTE_CEILING_MS=1800000` kills long local-model turns mid-stream; no configuration escape hatch. | No |
| **Medium** | [#3801](https://github.com/nanocoai/nanoclaw/issues/3801) | `update-nanoclaw validate` refresh overwrites files modified by local patch skills, losing customizations. | No |
| **Medium** | [#3800](https://github.com/nanocoai/nanoclaw/issues/3800) | Controller extraction docs omit 3 imported scripts (`scripts/update-skills.ts`, `scripts/skill-apply.ts`, `scripts/skill-directives.ts`), causing load failures. | No |
| **Medium** | [#3791](https://github.com/nanocoai/nanoclaw/issues/3791) | Fresh Codex setup requires globally installed host CLI (regression separate from #3792). | No (but #3792 fixes related auth bootstrap) |
| **Low** | [#3803](https://github.com/nanocoai/nanoclaw/pull/3803) | Webhook port recovery test flakiness due to random port collision. | Yes (PR #3803) |

## 6. Feature Requests & Roadmap Signals
| Signal | Evidence | Likelihood for Next Version |
|--------|----------|----------------------------|
| **Voice channel GA** | Two coordinated PRs (#3772 adapter, #3764 `/add-voice` skill) with `core-team` label | **High** — near-complete, browser WebRTC + agent integration |
| **Delivery-mode per agent group** | PR #3713 (config) + #3781 (enforcement) for `tools-only` vs `final-text` delivery | **High** — addresses provider contract mismatches |
| **OpenTelemetry tracing** | PR #3796 adds `/add-telemetry` skill with cost/token breakdown spans | **Medium-High** — opt-in, ops-focused, well-scoped |
| **Mattermost thread parity** | 4 PRs aligning behavior with Slack’s mention-sticky threads | **High** — incremental fixes, production hardening |
| **Setup reliability** | 4 PRs (#3779, #3788, #3790, #3798) fixing restart verification, picker, linger check | **High** — critical for onboarding success |

## 7. User Feedback Summary
- **Pain points**: Fresh install UX broken (provider picker skipped, Codex CLI missing), long local-model turns killed silently, skill updates clobber local patches, Mattermost setup unreliable.
- **Use cases driving work**: Voice agents (browser calls), self-hosted local models (no ceiling), production Mattermost/Slack deployments, observability for cost tracking.
- **Sentiment**: Active contributors (`glifocat`, `foxsky`, `gbmerrall`, `jhisse`) are rapidly fixing regressions; community PRs (`wakqasahmed`, `amit-shafnir`) show external investment. No negative reactions (👍: 0 across board) but low comment volume suggests issues are technical, not controversial.

## 8. Backlog Watch — Stale / Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3463](https://github.com/nanocoai/nanoclaw/pull/3463) | 23 days | OpenCode provider fallback for `message.part.delta` text; fixes race condition losing final assistant text. Labeled `follows-guidelines`, `core-team` but still open. |
| [#3489](https://github.com/nanocoai/nanoclaw/pull/3489) | 22 days | Structured Codex authentication (browser/device-code) for terminal setup and `nanoclaw.driver.v1`. Foundational for Codex provider UX. |
| [#3713](https://github.com/nanocoai/nanoclaw/pull/3713) | 11 days | Per-agent-group `delivery_mode` config + migration; enables `tools-only` for providers that can’t hold final-text envelope. Blocks #3781 enforcement. |
| [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) | 17 days | **High-priority bug** with no fix PR; affects all local-model users. Needs config seam or ceiling removal. |

---

**Health Indicators**: 🟢 High merge velocity (2 closed PRs today), 🟢 Regression turnaround <24h, 🟡 4 open bugs with no fix PRs, 🟡 Several core PRs >2 weeks old.  
**Recommendation**: Prioritize #3643 (local-model ceiling) and merge the stalled OpenCode/Codex provider PRs (#3463, #3489) to unblock provider diversity.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-14

## 1. Today's Overview
IronClaw shows **low human-driven activity** over the past 24 hours: zero issues created or updated, and all five PR updates are automated Dependabot dependency bumps. One Rust dependency PR (#8097) was merged, while four remain open awaiting review. No new releases were published. The project appears to be in a **maintenance-only phase**, with maintainers focusing on keeping the dependency graph current rather than shipping new features or addressing user-reported problems.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
| PR | Status | Scope | Key Changes |
|----|--------|-------|-------------|
| [#8097](https://github.com/nearai/ironclaw/pull/8097) | **Merged** | Rust deps (24 updates) | `uuid 1.24.0→1.26.0`, `base64 0.22.1→0.23.1`, `rust_decimal` bump, plus 21 other crates |
| [#8099](https://github.com/nearai/ironclaw/pull/8099) | Open | Rust deps (25 updates) | `uuid 1.24.0→1.26.1`, `base64 0.22.1→0.23.1`, `rust_decimal` bump, plus 22 other crates |
| [#8079](https://github.com/nearai/ironclaw/pull/8079) | Open | GitHub Actions (6 updates) | `actions/setup-node 4.0.2→7.0.0`, `anthropics/claude-code-action 1.0.183→1.0.221`, etc. |
| [#8078](https://github.com/nearai/ironclaw/pull/8078) | Open | Tokio ecosystem (2 updates) | `tower-http 0.7.0→0.7.1`, `tokio-tungstenite` bump |
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | Open | WASM toolchain (4 updates) | `wasmtime`, `wasmtime-wasi`, `wit-component`, `wit-parser` |

**Net effect**: One batch of Rust dependency updates landed; four more batches (Rust, Actions, Tokio, WASM) are queued for review.

## 4. Community Hot Topics
**No human-driven issues or discussions** in the last 24 hours. All PR comments are absent (Dependabot PRs typically have zero comments until a maintainer engages). The sole "hot" signal is the **backlog of four open Dependabot PRs**—indicating maintainer bandwidth may be constrained.

## 5. Bugs & Stability
**Zero bugs, crashes, or regressions reported** today. No user-filed issues exist in the dataset.

## 6. Feature Requests & Roadmap Signals
**No feature requests** from users or contributors in the last 24 hours. The only roadmap-adjacent signal is the **WASM toolchain update PR (#7834, open since 2026-08-23)**, which suggests ongoing investment in WebAssembly runtime compatibility—potentially hinting at future WASM-heavy features or platform targets.

## 7. User Feedback Summary
**No direct user feedback** (issues, discussions, or PR reviews from non-bot accounts) captured in this window. The project’s public signal is purely automated maintenance.

## 8. Backlog Watch
| Item | Age | Risk | Why It Needs Attention |
|------|-----|------|------------------------|
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | 22 days | Medium | WASM toolchain upgrades (`wasmtime`, `wit-*`) can introduce breaking API changes; labeled `size: L, risk: medium`. Longest-open Dependabot PR. |
| [#8079](https://github.com/nearai/ironclaw/pull/8079) | 8 days | Low | `actions/setup-node` major bump (v4→v7) may require workflow syntax updates. |
| [#8078](https://github.com/nearai/ironclaw/pull/8078) | 8 days | Low | Tokio ecosystem updates; `tower-http 0.7.1` is a patch but worth verifying. |
| [#8099](https://github.com/nearai/ironclaw/pull/8099) | 1 day | Low | Fresh Rust dependency batch; supersedes merged #8097 with one additional `uuid` patch (1.26.1). |

**Recommendation**: Prioritize review of **#7834** (WASM) and **#8079** (Actions major version) to unblock CI and prevent drift. Consider batching the two Rust PRs (#8097 merged, #8099 open) to avoid redundant CI runs.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-14

## 1. Today's Overview
LobsterAI saw **moderate maintenance activity** over the past 24 hours with **4 issues and 4 pull requests updated**, but **no merges, closures, or new releases**. Three of the four issues and all four PRs are long-standing items (created 2026-03-30) marked `[stale]` that received updates yesterday—likely a batch triage or rebase pass. The only genuinely new contribution is **Issue #2660**, a proposal from an external founder (MemCode) for durable user/workspace memory. Overall velocity remains low: the backlog of critical security and usability fixes continues to sit open without maintainer merge action.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
**Zero PRs merged or closed today.** All four open PRs remain in review limbo:
| PR | Title | Status | Age |
|----|-------|--------|-----|
| [#1038](https://github.com/netease-youdao/LobsterAI/pull/1038) | fix(proxy): ensure stream ReadableStream reader releases on error | Open, stale | 168 days |
| [#1042](https://github.com/netease-youdao/LobsterAI/pull/1042) | fix(security): SSRF via `api:fetch/stream` + arbitrary file read via `readFileAsDataUrl` | Open, stale | 168 days |
| [#1044](https://github.com/netease-youdao/LobsterAI/pull/1044) | fix(installer): normalize root-drive install path on Windows | Open, stale | 168 days |
| [#1045](https://github.com/netease-youdao/LobsterAI/pull/1045) | feat(renderer): unsaved-changes prompt when switching Agent panels | Open, stale | 168 days |

The two most impactful PRs—**#1042 (P0 security)** and **#1038 (stream resource leak)**—have not advanced despite clear severity.

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Signal |
|------|------|----------|-----------|--------|
| [#2660](https://github.com/netease-youdao/LobsterAI/issues/2660) | Issue | 1 | 0 | **New strategic ask**: durable cross-session memory for preferences, workspaces, sources, decisions. External founder proposing integration/partnership angle. |
| [#1041](https://github.com/netease-youdao/LobsterAI/issues/1041) | Issue | 1 | 0 | **P0 Security**: SSRF + arbitrary local file read in main-process IPC handlers. Directly addressed by PR #1042. |
| [#1046](https://github.com/netease-youdao/LobsterAI/issues/1046) | Issue | 1 | 0 | **Config transparency**: Hard-coded 200K context window vs. model’s 1M; users want docs or runtime override. |
| [#1047](https://github.com/netease-youdao/LobsterAI/issues/1047) | Issue | 1 | 0 | **UX regression**: Cleared skills reappear after Agent switch—state not persisted correctly. |

**Underlying needs**:  
- **Trust & safety** (SSRF/file-read) — blockers for enterprise/local deployment.  
- **Model fidelity** (context window) — power users hitting hard limits.  
- **State reliability** (skills, memory) — core workflow friction.  
- **Extensibility** (durable memory) — strategic direction for multi-session agents.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical (P0)** | [#1041](https://github.com/netease-youdao/LobsterAI/issues/1041) | `api:fetch`/`api:stream` IPC handlers accept arbitrary URLs → SSRF against localhost, internal metadata endpoints; `dialog:readFileAsDataUrl` reads any local file (e.g., `/etc/passwd`, `~/.ssh`). | [#1042](https://github.com/netease-youdao/LobsterAI/pull/1042) (open, stale) |
| **High** | [#1038](https://github.com/netease-youdao/LobsterAI/pull/1038) | Stream `ReadableStream` readers never cancelled on network error, server close, or user “stop” → TCP/connection leaks, eventual OOM. | PR #1038 (open, stale) |
| **Medium** | [#1047](https://github.com/netease-youdao/LobsterAI/issues/1047) | Skills cleared from an Agent persist visually but reappear after switching away/back — state sync bug. | No PR yet |
| **Medium** | [#1046](https://github.com/netease-youdao/LobsterAI/issues/1046) | Context window capped at 200K despite model supporting 1M; no documented override. | No PR yet |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Durable user/workspace memory** (preferences, sources, unfinished tasks across sessions) | [#2660](https://github.com/netease-youdao/LobsterAI/issues/2660) (external founder) | Medium — strategic, but requires architecture work; may spawn design doc first. |
| **Configurable context window** (raise 200K → 1M for Qwen3.5-Plus) | [#1046](https://github.com/netease-youdao/LobsterAI/issues/1046) | High — simple config flag; low risk, high user value. |
| **Unsaved-changes guard when switching Agents** | [#1045](https://github.com/netease-youdao/LobsterAI/pull/1045) | High — PR already written, UX polish only. |
| **Windows installer root-drive path normalization** | [#1044](https://github.com/netease-youdao/LobsterAI/pull/1044) | High — trivial fix, installer-only. |

## 7. User Feedback Summary
- **Security anxiety**: Researchers and local-first users flag SSRF/file-read as showstoppers for air-gapped or enterprise use.  
- **Model capacity frustration**: Developers using Qwen3.5-Plus hit 200K ceiling; no docs or knobs to unlock 1M.  
- **Workflow breakage**: Agent skill management feels “buggy”—cleared skills ghost back, eroding trust in customization.  
- **Strategic pull**: External founder (MemCode) sees LobsterAI as a platform for persistent agent memory—potential partnership or upstream contribution vector.  
- **Overall sentiment**: **Cautious dissatisfaction**—core bugs linger 5+ months; community expects faster triage on P0s.

## 8. Backlog Watch — Maintainer Attention Needed
| Item | Days Open | Why It Matters |
|------|-----------|----------------|
| [#1041](https://github.com/netease-youdao/LobsterAI/issues/1041) / [#1042](https://github.com/netease-youdao/LobsterAI/pull/1042) | 168 | **P0 security** — remote code execution / credential theft surface. Fix written, unreviewed. |
| [#1038](https://github.com/netease-youdao/LobsterAI/pull/1038) | 168 | Stream leak → resource exhaustion under load. Fix written, unreviewed. |
| [#1046](https://github.com/netease-youdao/LobsterAI/issues/1046) | 168 | Hard-coded model limit; blocks power users. Simple config change. |
| [#1047](https://github.com/netease-youdao/LobsterAI/issues/1047) | 168 | Core Agent UX regression; no PR yet. |
| [#1044](https://github.com/netease-youdao/LobsterAI/pull/1044) | 168 | Windows installer edge case; low effort, high polish. |
| [#1045](https://github.com/netease-youdao/LobsterAI/pull/1045) | 168 | UX guardrail; PR ready, needs review. |
| [#2660](https://github.com/netease-youdao/LobsterAI/issues/2660) | 1 | New strategic proposal; assign PM/architect for feasibility. |

---

**Bottom line**: LobsterAI’s **security and stability backlog is stagnant** despite ready fixes. The project would benefit from a **triage sprint** to merge #1042, #1038, #1044, #1045 and address #1046/#1047. The new memory proposal (#2660) signals growing external interest—worth a formal RFC process.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-14

## 1. Today's Overview
Moltis shows **high velocity** with 5 PRs closed/merged and 2 issues resolved in the last 24 hours, plus a new daily release (`20260913.02`). The team shipped three user-facing improvements: persistent default reasoning level, a new `max` reasoning tier, and Telegram shared-channel tool policy controls. One open PR (#1267) refines lifecycle event dispatch for hooks, and a new feature request (#1268) from MemCode’s CEO signals growing interest in extensible memory backends. Overall project health is strong—rapid iteration, quick bug turnaround, and active community engagement.

## 2. Releases
**Version `20260913.02`** (released 2026-09-13)  
No changelog provided in the data; this appears to be a routine daily build bundling the merged PRs below. Users on the `main` branch or nightly channel should upgrade to receive:
- Configurable default reasoning effort (`chat.reasoning_default`) persisted across sessions (#1266)
- New `max` reasoning effort level (#1253)
- Telegram shared-channel tool policy settings (`untrusted_audience`, `untrusted_tools`) (#1265)

*No breaking changes or migration notes reported.*

## 3. Project Progress
| PR | Status | Summary | Linked Issue |
|----|--------|---------|--------------|
| [#1266](https://github.com/moltis-org/moltis/pull/1266) | **Merged** | Add `chat.reasoning_default` config (levels: `minimal`…`max`, alias `extra-high`→`xhigh`) for new/model-less chats. | Closes [#1259](https://github.com/moltis-org/moltis/issues/1259) |
| [#1253](https://github.com/moltis-org/moltis/pull/1253) | **Merged** | Introduce `max` reasoning effort in shared schema, model suffix `@reasoning-max`, OpenAI Codex pass-through, UI selector, translations, browser-extension entry. | — |
| [#1265](https://github.com/moltis-org/moltis/pull/1265) | **Merged** | Expose `untrusted_audience` / `untrusted_tools` for Telegram (config, runtime, storage, redacted API) — parity with Slack. | Fixes [#1264](https://github.com/moltis-org/moltis/issues/1264) |
| [#1263](https://github.com/moltis-org/moltis/pull/1263) | **Merged** | Dependabot: bump `@babel/core` (web/ui) + `astro`, `js-yaml`, `remark-gfm` (docs). | — |
| [#1267](https://github.com/moltis-org/moltis/pull/1267) | **Open** | Dispatch `AgentEnd` (final text, iteration/tool totals) and `MessageSending` (pre-publication, honors rewrites/blocks) for hook consumers. | Fixes [#1255](https://github.com/moltis-org/moltis/issues/1255) |

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#1268](https://github.com/moltis-org/moltis/issues/1268) **Could Moltis expose an optional advanced memory provider?** | 0 comments, 0 👍, created 2026-09-13 | **Extensibility**: MemCode (external vendor) wants to plug a custom memory backend into Moltis’ built-in memory system—signals demand for a provider interface / SPI. |
| [#1267](https://github.com/moltis-org/moltis/pull/1267) **fix(hooks): dispatch agent and outbound message lifecycle events** | Open, 0 comments | **Observability/Integration**: Hook consumers need reliable `AgentEnd` / `MessageSending` events for logging, analytics, or downstream workflows. |

*No other items have comments or reactions in the last 24 h.*

## 5. Bugs & Stability
| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#1264](https://github.com/moltis-org/moltis/issues/1264) **Tools stop working in shared Telegram channels** | **High** (core functionality broken in multi-user Telegram) | **Closed** (2026-09-13) | [#1265](https://github.com/moltis-org/moltis/pull/1265) merged same day |

*No new crashes, regressions, or unfixed bugs reported today.*

## 6. Feature Requests & Roadmap Signals
1. **Pluggable memory providers** ([#1268](https://github.com/moltis-org/moltis/issues/1268)) — High strategic value; likely to spawn a design discussion and SPI PR in the next cycle.
2. **Hook lifecycle events** ([#1267](https://github.com/moltis-org/moltis/pull/1267)) — Near-term; PR is open and addresses #1255, expect merge within days.
3. **Reasoning UX polish** — Recent additions (`max` level, persistent default, aliases) suggest ongoing investment in reasoning-control granularity; further UI/UX tweaks probable.

## 7. User Feedback Summary
- **Positive**: Rapid fixes (Telegram bug resolved in <24 h), reasoning configurability delivered as requested (#1259).
- **Pain points**: 
  - Shared Telegram channels lacked tool policy controls (now fixed).
  - External integrators (MemCode) cannot replace the built-in memory layer—architectural limitation.
- **Use cases emerging**: Multi-tenant/shared-channel bots, third-party memory services, hook-driven observability pipelines.

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1268](https://github.com/moltis-org/moltis/issues/1268) **Advanced memory provider SPI** | 1 day | Strategic extensibility request from a commercial actor; needs maintainer triage to avoid stall. |
| [#1267](https://github.com/moltis-org/moltis/pull/1267) **Hook lifecycle events** | 1 day | Open PR with no review yet; blocks #1255 and downstream hook consumers. |
| [#1255](https://github.com/moltis-org/moltis/issues/1255) *(referenced by #1267)* | Unknown | Root issue for hook events; verify closure once #1267 merges. |

*No other stale high-priority items visible in the 24 h window.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-14

## 1. Today's Overview

CoPaw shows **high maintenance velocity** with 48 total items updated in 24 hours (22 issues, 26 PRs), indicating an active development cycle. The project is in a **bug-fix heavy phase** — 17 of 21 open issues are bugs/regressions, many touching core stability (memory leaks, session loss, MCP connectivity, workspace freezing). Three PRs were merged/closed today, all documentation or minor fixes. No new release was cut, suggesting the team is stabilizing the 2.2.x branch before a 2.2.2 or 2.3.0. Community engagement is strong: multiple first-time contributors submitted PRs, and power users (e.g., `xiaohushi512`) file detailed, reproducible reports.

## 2. Releases

**No new releases today.** The latest version remains **2.2.1** (desktop) / **2.2.0** (Docker). Several open PRs target 2.2.x regressions (#7725, #7729, #7735, #7636), implying a patch release is imminent.

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#7675](https://github.com/agentscope-ai/QwenPaw/pull/7675) | docs | Fixed wrong `agent.json` field name (`tools.builtins` → `tools.builtin_tools`) in Chinese MCP docs | Prevents user config errors |
| [#7706](https://github.com/agentscope-ai/QwenPaw/pull/7706) | docs | Removed non-existent `qwenpaw providers` CLI command from multi-agent docs | Aligns docs with actual CLI (`qwenpaw models`) |
| [#3429](https://github.com/agentscope-ai/QwenPaw/pull/3429) | enhancement | Pre-installs `himalaya` and common CLI tools in Docker image (closed after 5 months) | Improves out-of-box DX for container users |

**Net progress**: Documentation hygiene + one long-standing Docker DX improvement. No functional code merged today — all 23 open PRs are under review.

## 4. Community Hot Topics (Most Active Items)

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) | Question | 5 | **Agent memory/persistence reliability** — User reports agent repeatedly forgets workspace rules (TODO file location, dev vs. deploy paths) across sessions. Suggests context/state management is fragile. |
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | Bug | 4 | **Sub-agent spawning broken** — All sub-agent tasks timeout/fail regardless of timeout setting. Blocks multi-agent workflows. |
| [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) | Bug | 4 | **Model config loss** — Configured LLMs disappear during normal use, requiring re-selection. Recurring (see #7724). |
| [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | Bug | 4 | **Session + model loss** — After plugin redeploy/shutdown, 9 AM session vanishes from history; model config also lost. |
| [#7745](https://github.com/agentscope-ai/QwenPaw/issues/7745) | Bug | 2 | **Agent switch deletes last session** — Switching agents clears `lastChatIdByAgent`, making history unclickable. UX regression in 2.2.1-beta.2. |

**Underlying theme**: **State persistence** (model config, session history, agent instructions) is unreliable across restarts, switches, and plugin operations. Users lose trust in the agent's "memory."

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | **Memory exhaustion (3 paths)**: unbounded stream buffers + keep-alive stacking + doom-loop gate evasion → ~1 MB/s leak → OOM/hang. Controlled repro provided. | No |
| **Critical** | [#7721](https://github.com/agentscope-ai/QwenPaw/issues/7721) | **Workspace SSE watcher freezes entire server** — `watchfiles.awatch` synchronous baseline scan blocks event loop on large repos. All channels (WebUI, Feishu, QQ) stop. | **Yes: [#7725](https://github.com/agentscope-ai/QwenPaw/pull/7725)** (threaded polling replacement) |
| **High** | [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | **Sub-agent spawn always fails/times out** — blocks multi-agent delegation entirely. | No |
| **High** | [#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716) | **MCP connect/register broken since 2.2.x** — 2.1.1b3 worked; 2.2.0/2.2.1 fail. | **Yes: [#7735](https://github.com/agentscope-ai/QwenPaw/pull/7735)** (preserve HTTP error responses) |
| **High** | [#7728](https://github.com/agentscope-ai/QwenPaw/issues/7728) | **Java MCP SDK servers return HTTP 500 + `jsonRpcError` envelope** — not recognized as legacy protocol, driver build fails. | **Yes: [#7729](https://github.com/agentscope-ai/QwenPaw/pull/7729)** |
| **High** | [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) / [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | **Model config + session loss** — recurring, data-loss impact. | No |
| **Medium** | [#7727](https://github.com/agentscope-ai/QwenPaw/issues/7727) | **Out-of-workspace write block bypassed** — kimi-code's Write tool uses unrecognized path fields, allowing writes outside workspace. | No |
| **Medium** | [#7726](https://github.com/agentscope-ai/QwenPaw/issues/7726) | **ACP `trusted: true` falls back to interactive prompts** — `_pick_allow_option` only matches `allow_*` IDs, misses `approve_once`. | **Yes: [#7732](https://github.com/agentscope-ai/QwenPaw/pull/7732)** |
| **Medium** | [#7743](https://github.com/agentscope-ai/QwenPaw/issues/7743) | **Hub mode file preview 401** — token passed in query param but auth fails. | No |
| **Medium** | [#7709](https://github.com/agentscope-ai/QwenPaw/issues/7709) | **Scheduled task output missing/folded** — results hidden in thinking/steps, confusing users. | No |
| **Low** | [#7745](https://github.com/agentscope-ai/QwenPaw/issues/7745) | **Agent switch deletes `lastChatIdByAgent`** — history unclickable. | No |
| **Low** | [#7636](https://github.com/agentscope-ai/QwenPaw/pull/7636) | **PDF blocks sent to OpenAI-compatible APIs even when multimodal supported** — causes 400 errors. | **Yes: #7636** (open) |

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood for Next Version |
|---------|----------|----------------------------|
| **History panel on right side** (better 14" laptop UX) | [#7739](https://github.com/agentscope-ai/QwenPaw/issues/7739) | Medium — pure UI, low risk |
| **File cards in assistant reply** (not folded in tool steps) | [#7744](https://github.com/agentscope-ai/QwenPaw/issues/7744) | High — UX polish, PR likely soon |
| **Admin password reset in Hub mode** | [#7740](https://github.com/agentscope-ai/QwenPaw/issues/7740) | High — basic ops feature, security-relevant |
| **Android: newline in input vs. submit** | [#7707](https://github.com/agentscope-ai/QwenPaw/issues/7707) | Medium — mobile UX gap |
| **Agent-autonomous context management** (smooth handover at eviction) | [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | Low — architectural, needs design |
| **Bot-manager plugin** (unified multi-channel bot config) | [#7702](https://github.com/agentscope-ai/QwenPaw/pull/7702) | High — first-time contributor PR, solves fragmentation |
| **Customizable console themes** | [#7741](https://github.com/agentscope-ai/QwenPaw/pull/7741) | High — PR open, closes #7406 |
| **Separate model for ReMeLight memory writing** | [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) | Medium — cost optimization, PR open |
| **DeepSeek V4 Flash capabilities** | [#7736](https://github.com/agentscope-ai/QwenPaw/pull/7736) | High — provider catalog update, low risk |
| **Creator 1.3.0** (OpenCode Zen/Go, parallel assets, multi-episode) | [#7742](https://github.com/agentscope-ai/QwenPaw/pull/7742) | High — major plugin update, already in fork |

**Prediction**: Next release (2.2.2 or 2.3.0) will bundle: critical stability fixes (#7725, #7729, #7732, #7735, #7636), Hub admin reset, file UX improvements, bot-manager plugin, and Creator 1.3.0.

## 7. User Feedback Summary

**Pain Points** (from issues):
- **Trust erosion**: "Agent forgets instructions I gave days ago" (#7571), "Sessions vanish without trace" (#7724), "Model config disappears mid-work" (#7708).
- **Multi-agent broken**: Sub-agents never complete (#7678) — power users blocked.
- **MCP ecosystem fracture**: Java SDK servers incompatible since 2.2.x (#7728, #7716).
- **Workspace scale limits**: File browser freezes server on large repos (#7721).
- **Mobile UX gap**: Can't input multiline on Android (#7707).
- **Opacity**: Scheduled task output hidden (#7709), file previews require expanding folded steps (#7744).

**Positive Signals**:
- First-time contributors submitting fixes (#7734, #7738, #7723, #7735, #7718, #7632).
- Detailed repros with logs/screenshots from advanced users (`xiaohushi512`, `remotepan-design`, `Nobodyanonymou-s`).
- Creator plugin evolving rapidly (1.2.0 → 1.3.0 in fork, now upstreaming via #7742).

**Use Cases Evident**:
- Plugin development with complex path mapping (A→B→C deployments).
- Multi-agent delegation (sub-agents for parallel tasks).
- Hub-mode multi-tenant deployments (admin ops, file sharing).
- Scheduled/automated workflows (cron-like tasks).
- Mobile/web console daily driving.

## 8. Backlog Watch (Stale/High-Impact Items Needing Attention)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) | 9 days | **Core memory/state reliability** — user reports systemic forgetting across sessions. No maintainer reply yet. |
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | 3 days | **Sub-agent subsystem broken** — 4 comments, no triage. Blocks multi-agent feature. |
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | 2 days | **Memory leak with controlled repro** — three independent paths, OOM in prod. Needs urgent engineering. |
| [#7721](https://github.com/agentscope-ai/QwenPaw/issues/7721) | 2 days | **Server freeze on file browse** — PR #7725 ready but unmerged. High user impact. |
| [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) | 3 days | **Recurring model config loss** — multiple users, data loss. Root cause unknown. |
| [#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716) | 2 days | **MCP regression since 2.2.x** — PR #7735 addresses part; need full verification. |
| [#3429](https://github.com/agentscope-ai/QwenPaw/issues/3429) | 5 months | **Docker CLI tools** — finally closed via PR, but shows backlog latency. |

---

**Health Score**: 🟡 **Caution** — High velocity but critical stability bugs (memory, sessions, sub-agents, MCP) cluster in 2.2.x. Strong community contribution offsets risk if maintainers prioritize merges for #7725, #7729, #7732, #7735, #7636 this week. Next release should be a stability-focused patch.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-09-14

## 1. Today's Overview
ZeptoClaw shows **very low daily activity** with only **1 new issue opened** and **zero pull requests or releases** in the last 24 hours. The single issue (#678) is a thoughtful architectural question from an external founder (Vivek Gupta, MemCode) probing the tension between durable memory and the project’s strict local-first boundary. No merges, closes, or CI activity occurred. The project appears to be in a **quiet maintenance or design-discussion phase** rather than active feature development.

## 2. Releases
**No new releases** published today. The latest release information is not provided in the data snapshot.

## 3. Project Progress
**No merged or closed PRs today.** Zero pull requests were opened, updated, or merged. No feature work or bug fixes advanced via PR in the last 24 hours.

## 4. Community Hot Topics
| Issue | Title | Author | Activity | Link |
|-------|-------|--------|----------|------|
| **#678** | *Could ZeptoClaw offer durable memory without weakening its local-first boundary?* | memcodeoff (Vivek Gupta, MemCode) | Created 2026-09-13, 0 comments, 0 👍 | [qhkm/zeptoclaw#678](https://github.com/qhkm/zeptoclaw/issues/678) |

**Analysis:** This is the **sole community signal** today. The author frames the question at the architectural level—asking whether ZeptoClaw can persist high-quality, long-running memory (critical for a personal assistant) while preserving its “small local-first Rust binary” ethos. The lack of comments or reactions suggests the issue is **fresh and not yet debated**; it may attract maintainer or community design input over the coming days.

## 5. Bugs & Stability
**No bug reports, crashes, or regressions filed today.** The issue tracker shows zero new defect entries in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|------------------------------|
| **Durable, high-quality memory with local-first guarantee** | Issue #678 (external founder) | **Medium–High** — aligns with core “personal assistant” value prop; architectural discussion needed before implementation. |

No other feature requests surfaced today.

## 7. User Feedback Summary
- **Single data point:** Vivek Gupta (MemCode CEO) expresses **interest in ZeptoClaw as a long-running personal-assistant substrate** but highlights a **potential tension**: durable memory vs. strict local-first boundary.  
- No satisfaction/dissatisfaction metrics, usage reports, or pain-point lists beyond this architectural inquiry.

## 8. Backlog Watch
| Item | Status | Age | Notes |
|------|--------|-----|-------|
| **#678 – Durable memory vs. local-first boundary** | Open, unanswered | 1 day | **High-priority design question**; no maintainer response yet. Should be triaged soon to signal project direction to external stakeholders. |

*No long-unanswered PRs exist (zero PRs in data window).*

---

**Health Indicator:** 🟡 **Low velocity, high signal-to-noise ratio.** The project is quiet but received a **well-framed, strategic issue** that could shape its next architectural cycle. Maintainer engagement on #678 will be the key near-term indicator of project momentum.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-14

---

## 1. Today's Overview

ZeroClaw shows **high development velocity** with **50 active PRs** and **4 active issues** updated in the last 24 hours, though **no PRs were merged or closed** today. The project is in a heavy **review/iteration phase** — many large, security-sensitive PRs (size XL, risk:high) have been open for weeks and are being actively updated. Key focus areas include: provider security (OpenCode session headers, Grok executable resolution), runtime security (host launcher resolution, git allowed-roots), plugin/WASM admission, and CI/test stability (log sink race). No release was cut today.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Project Progress

**No PRs merged or closed today.** All 50 PRs remain open. Notable PRs with recent updates (2026-09-14) indicate active review cycles:

| PR | Title | Status | Key Focus |
|----|-------|--------|-----------|
| [#10845](https://github.com/zeroclaw-labs/zeroclaw/pull/10845) | fix(tools): render one summary line per tool in deferred MCP index | Open (new) | MCP tooling UX |
| [#10834](https://github.com/zeroclaw-labs/zeroclaw/pull/10834) | docs(adr): record runtime security provenance boundaries | Open | Security architecture docs (ADR-017) |
| [#10831](https://github.com/zeroclaw-labs/zeroclaw/pull/10831) | docs(adr): record inbound authentication principal authority | Open | Auth architecture docs (ADR-016) |
| [#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) | fix(security): resolve host launchers before workspace cwd | Open (19 days) | Critical runtime security (size XL, risk:high) |
| [#10829](https://github.com/zeroclaw-labs/zeroclaw/pull/10829) | fix(providers): resolve grok executable before workspace spawn | Open | Provider supply-chain security |
| [#10604](https://github.com/zeroclaw-labs/zeroclaw/pull/10604) | fix(providers): send x-opencode-session on OpenCode requests | Open (11 days) | Provider session affinity (linked to #10603) |
| [#10841](https://github.com/zeroclaw-labs/zeroclaw/pull/10841) | test(log): assert sink tests only on their own bridged records | Open | CI flakiness fix for #10585 |

> **Pattern:** Long-running, high-risk PRs (#10381, #9134, #9819, #9724, #9753, #8965, #9143, #9109, #9535) continue to receive updates, suggesting they are in deep review or require rebase/conflict resolution.

---

## 4. Community Hot Topics

### Most Engaged Issues (by 👍/comments)

| Issue | Title | 👍 | Comments | Signal |
|-------|-------|-----|----------|--------|
| [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) | OpenCode providers never send `x-opencode-session`, breaking Go models and risking account flags | **3** | 3 | **Critical provider bug** — session affinity broken, upstream cache cold, account risk. Fix PR [#10604](https://github.com/zeroclaw-labs/zeroclaw/pull/10604) open 11 days. |
| [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) | RFC: Clarify PR review evidence, freshness warnings, and author-action boundaries | 0 | 8 | **Governance RFC** — defines review standards, expedited merge lane. High process impact. |
| [#10585](https://github.com/zeroclaw-labs/zeroclaw/issues/10585) | New log sink regression races migration tests under parallel runner | 0 | 3 | **CI flakiness** — global tracing hook contention. Fix PR [#10841](https://github.com/zeroclaw-labs/zeroclaw/pull/10841) opened yesterday. |
| [#10842](https://github.com/zeroclaw-labs/zeroclaw/issues/10842) | Telegram reaction tool silently no-ops (missing trait override) | 0 | 1 | **Silent failure** — tool reports success but no API call. Classic trait default trap. |

**Underlying needs:**  
- **Provider reliability** (session management, executable resolution) is a recurring pain point.  
- **CI stability** is actively degrading (parallel test races).  
- **Governance clarity** is being codified via RFC (#10366) — team scaling.

---

## 5. Bugs & Stability

### Active Bugs (ranked by severity)

| Severity | Issue | Component | Fix PR | Status |
|----------|-------|-----------|--------|--------|
| **S1 — Workflow Blocked** | [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603): OpenCode missing `x-opencode-session` header | `provider:openai`, `provider:compatible` | [#10604](https://github.com/zeroclaw-labs/zeroclaw/pull/10604) | Open 11d, needs-author-action |
| **S2 — Security/Supply Chain** | [#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) context: host launcher resolution before cwd | `runtime`, `security:bubblewrap`, `security:docker` | #10381 (PR) | Open 19d, needs-maintainer-review, risk:high |
| **S2 — Security/Supply Chain** | [#10829](https://github.com/zeroclaw-labs/zeroclaw/pull/10829): Grok executable not resolved before spawn | `provider`, `dependencies` | #10829 (PR) | Open 1d |
| **S2 — Security/Allowed Roots** | [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337): Git operations bypass allowed roots | `tool`, `security:policy` | #10337 (PR) | Open 20d, needs-author-action, risk:high |
| **S3 — CI Flakiness** | [#10585](https://github.com/zeroclaw-labs/zeroclaw/issues/10585): Log sink race in parallel tests | `ci`, `observability:log` | [#10841](https://github.com/zeroclaw-labs/zeroclaw/pull/10841) | Open 11d, fix PR 1d |
| **S3 — Silent Failure** | [#10842](https://github.com/zeroclaw-labs/zeroclaw/issues/10842): Telegram reaction no-op | `channel:telegram`, `tool` | None yet | Open 1d |

> **Note:** Multiple high-risk security PRs (#10381, #10337, #9819, #9724, #9753) have been open **20–40 days** with `needs-maintainer-review` or `needs-author-action` — review bottleneck.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Release |
|--------|--------|----------------------------|
| **Declarative skill auto-activation with provider switch & image-turn blocking** | [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) (feat(skills), size XL, restacked) | Medium — stacked, depends on merged #9563/#9837 |
| **Matrix voice replies (MSC3245)** | [#10489](https://github.com/zeroclaw-labs/zeroclaw/pull/10489) (feat(channels/matrix), blocked) | Low — `do-not-merge`, `status:blocked` |
| **SSE streaming for webhook chat turns** | [#10450](https://github.com/zeroclaw-labs/zeroclaw/pull/10450) (feat(gateway), size XL) | Medium — needs-maintainer-review |
| **Context compaction anchored to model window ratio** | [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) (feat(runtime), size XL) | Medium — follow-up, needs-author-action |
| **Native Hailo-Ollama provider** | [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) (feat(providers), blocked) | Low — `do-not-merge`, `status:blocked` |
| **Plugin event routing through shared runtime** | [#9143](https://github.com/zeroclaw-labs/zeroclaw/pull/9143) (feat(channels), size XL) | Medium — foundational, needs-author-action |
| **Exact component payload bytes for plugin admission** | [#9134](https://github.com/zeroclaw-labs/zeroclaw/pull/9134) (fix(plugins), blocked) | Low — `do-not-merge`, `status:blocked` |

**Roadmap inference:** Next version will likely land **provider/security fixes** (#10604, #10829, #10381, #10337) and **CI stabilization** (#10841). Large features (skills, gateway SSE, plugin runtime) remain in long review.

---

## 7. User Feedback Summary

**Pain points from issues/PRs:**
- **OpenCode users:** Session headers missing → broken prompt caching, potential account flags ([#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603)).
- **Telegram users:** Reaction tool lies — says success, does nothing ([#10842](https://github.com/zeroclaw-labs/zeroclaw/issues/10842)).
- **Developers:** CI flakiness from log sink race slows iteration ([#10585](https://github.com/zeroclaw-labs/zeroclaw/issues/10585)).
- **Security-conscious operators:** Host launcher resolution, git allowed-roots, image validation — all bypassable in current state (multiple XL PRs).

**No direct end-user praise/satisfaction signals** in this data slice — activity is internal/contributor-driven.

---

## 8. Backlog Watch — Stalled High-Impact Items

| Item | Age | Risk | Blocker | Why It Matters |
|------|-----|------|---------|----------------|
| [#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) fix(security): resolve host launchers before workspace cwd | 19d | **High** | `needs-maintainer-review` | Prevents path traversal via relative launcher paths in sandboxed runtimes |
| [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) fix(tools): honor allowed roots for git operations | 20d | **High** | `needs-author-action` | Git ops escape workspace confinement |
| [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) fix(multimodal): pixel-level image validation | 38d | **High** | `needs-author-action` | Corrupt images crash provider requests |
| [#9724](https://github.com/zeroclaw-labs/zeroclaw/pull/9724) fix(approval): always_ask survives Full autonomy | 41d | **High** | `needs-maintainer-review` | Autonomy policy bypass |
| [#9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753) fix(config): distinguish absent vs empty risk-profile allowed_tools | 41d | **High** | `needs-maintainer-review` | Config misinterpretation → over-permission |
| [#9134](https://github.com/zeroclaw-labs/zeroclaw/pull/9134) fix(plugins): admit exact component payload bytes | 58d | **High** | `status:blocked`, `do-not-merge` | WASM supply-chain integrity |
| [#9143](https://github.com/zeroclaw-labs/zeroclaw/pull/9143) feat(channels): route plugin events through shared runtime | 58d | **High** | `needs-author-action` | Plugin architecture foundation |
| [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) feat(skills): declarative auto-activation | 65d | **Medium** | `needs-author-action`, `stacked` | Core UX for agent skills |
| [#10604](https://github.com/zeroclaw-labs/zeroclaw/pull/10604) fix(providers): send x-opencode-session | 11d | **High** | `needs-author-action` | Breaks OpenCode provider for Go models |

> **Maintainer attention needed:** 9 PRs with `risk:high` + `needs-maintainer-review` or `needs-author-action` older than 10 days. Review capacity appears saturated.

---

## Project Health Indicators

| Metric | Signal |
|--------|--------|
| **PR merge rate (24h)** | 0/50 — **stalled** |
| **High-risk PRs >14d open** | 9 — **review bottleneck** |
| **Critical bugs with fix PRs** | 4/6 — **good coverage, slow landing** |
| **Security PRs in flight** | 12+ — **high priority focus** |
| **CI regressions** | 1 active (log sink) — **being fixed** |
| **Governance activity** | 1 RFC in progress (#10366) — **maturing process** |

**Bottom line:** ZeroClaw is **actively developing** but **not delivering** — merge throughput is near zero while high-stakes security/reliability work piles up in review. The next release will likely be a **stabilization/security drop** once maintainer bandwidth clears the backlog.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*