# OpenClaw Ecosystem Digest 2026-09-17

> Issues: 208 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-17 04:35 UTC

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

# OpenClaw Project Digest — 2026-09-17

## 1. Today's Overview
OpenClaw shows **very high development velocity** with 500 PRs updated (173 merged/closed) and 208 issues touched in the last 24 hours. The project is in active maintenance mode with a strong focus on stability fixes, performance regressions, and gateway scalability. No new release was cut today, but the volume of merged PRs suggests a release candidate may be imminent. The issue backlog contains several P1/P0 regressions affecting message delivery, session recovery, and gateway startup times — particularly on large fleets.

## 2. Releases
**No new releases today.** The latest version in the data is 2026.9.4 (referenced in multiple regression reports). Several merged PRs today target 2026.9.x stability.

## 3. Project Progress — Key Merged/Closed PRs Today
| PR | Area | Summary |
|----|------|---------|
| [#150425](https://github.com/openclaw/openclaw/pull/150425) | `doctor` | **CLOSED** — Quarantine changed audit archives and continue repairs; fixes Doctor stopping on malformed legacy archives (P1, 🐚 platinum hermit) |
| [#148078](https://github.com/openclaw/openclaw/pull/148078) | `plugins` | **OPEN (ready for maintainer)** — Reduce plugin activation planning overhead by avoiding diagnostic explanation allocation when only plugin IDs needed |
| [#150364](https://github.com/openclaw/openclaw/pull/150364) | `mcp` | **OPEN (ready for maintainer)** — Stop unused MCP servers from accumulating across sessions (fixes #142965) |
| [#150564](https://github.com/openclaw/openclaw/pull/150564) | `process` | **OPEN (needs proof)** — Avoid Linux Gateway stalls when spawning commands by forking a small helper instead of blocking on page-table copy (P1, 🦐 gold shrimp) |
| [#150562](https://github.com/openclaw/openclaw/pull/150562) | `recovery` | **OPEN (needs proof)** — Yield between store recovery iterations to fix 63.6s event-loop freeze on main-session restart with 237 agents on slow storage (fixes #149935) |
| [#150079](https://github.com/openclaw/openclaw/pull/150079) | `gateway` | **OPEN (ready for maintainer)** — Keep Gateway responsive during health/status fleet scans by yielding outside SQLite transactions |
| [#149864](https://github.com/openclaw/openclaw/pull/149864) | `codex` | **OPEN (ready for maintainer)** — Preserve native subagent results through recovery; prevents overwrite/lost work on yield/restart |
| [#115808](https://github.com/openclaw/openclaw/pull/115808) | `agents` | **OPEN (waiting on author)** — Recovered sessions report and route the primary model correctly (fixes #92776) |
| [#138537](https://github.com/openclaw/openclaw/pull/138537) | `workboard` | **OPEN (needs proof)** — Nest card in details to prevent false `isError` on blocked status mutations |
| [#150588](https://github.com/openclaw/openclaw/pull/150588) | `google-meet` | **OPEN** — Gateway restart no longer drops active Meet captures; transcripts finalize durably (fixes #150143) |

**Theme:** Today's merged work heavily targets **gateway responsiveness under load**, **session recovery correctness**, **MCP/plugin lifecycle leaks**, and **Linux spawn performance** — all operational pain points for multi-agent fleets.

## 4. Community Hot Topics — Most Discussed Issues
| Issue | Comments | 👍 | Core Problem |
|-------|----------|-----|--------------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 30 | 1 | **Zombie process leak** from hook/tool child processes (bash, codex, etc.) accumulating under main `openclaw` process — runtime degradation over time (P1, 🦪 silver shellfish) |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 23 | 1 | **Per-agent cost budgets** at gateway level — operators want daily/monthly caps enforced before dispatching model calls (P2, stale, needs product decision) |
| [#149361](https://github.com/openclaw/openclaw/issues/149361) | 14 | 0 | **WebUI performance/stability study** — continuous work on startup, navigation, rendering, scrolling; no corrections accepted until coordinated batch |
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | 13 | 1 | **MCP loopback transport** doesn't auto-reconnect after gateway restart; `recovered=1` misleading (P2, stale) |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) | 13 | 1 | **WhatsApp backfill** — missed messages during reconnection silently lost (P1, 🐚 platinum hermit) |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | 9 | 0 | **Reply lost** — "Reply operation has no active tool authority snapshot" when second run displaces in-flight turn (2026.9.4 regression, P1) |
| [#148529](https://github.com/openclaw/openclaw/issues/148529) | 7 | 0 | **Gateway startup 12 min → 2s regression** on 632-agent fleet (2026.9.4 vs 2026.7.1-2) with per-phase breakdown (P1, 🐚 platinum hermit) |
| [#149935](https://github.com/openclaw/openclaw/issues/149935) | 5 | 0 | **Main-session restart recovery** synchronous store reads freeze event loop 63.6s on USB storage with 237 agents (P2, 🦞 diamond lobster) — **PR #150562 open** |
| [#138272](https://github.com/openclaw/openclaw/issues/138272) | 8 | 0 | **Android Talk drops** with "no live response owner" on task-requiring turns across 3 versions (P1, 🐚 platinum hermit) |
| [#98976](https://github.com/openclaw/openclaw/issues/98976) | 7 | 1 | **Provider refusals** (Anthropic/OpenAI) never trigger model fallback chain — turn dies with generic error (P2, 🦞 diamond lobster) |

**Underlying needs:** Operators running **large fleets (200+ agents)** are hitting **startup/recovery scalability walls**, **message durability gaps** during failover, and **silent data loss** on mobile channels. The "stale" label on many high-comment issues suggests maintainer bandwidth is the bottleneck.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? | Impact |
|----------|-------|--------|---------|--------|
| **P0** | [#125284](https://github.com/openclaw/openclaw/issues/125284) — `ask-mode` approval prompt doesn't block `exec` in containerized gateway (command runs before approval resolves) | Open | No | **Security** — unauthorized command execution |
| **P1** | [#148707](https://github.com/openclaw/openclaw/issues/148707) — Reply lost on turn displacement (2026.9.4 regression) | Open | No | **Message loss** — interactive sessions |
| **P1** | [#148529](https://github.com/openclaw/openclaw/issues/148529) — Gateway startup 12 min on 632-agent fleet (was 2s) | Open | No | **Availability** — fleet ops blocked |
| **P1** | [#138272](https://github.com/openclaw/openclaw/issues/138272) — Android Talk drops on tool-using turns | Open | No | **Crash-loop** — voice channel unusable |
| **P1** | [#50093](https://github.com/openclaw/openclaw/issues/50093) — WhatsApp backfill misses messages after reconnect | Open | No | **Message loss** — mobile channel |
| **P1** | [#108379](https://github.com/openclaw/openclaw/issues/108379) — Duplicate assistant generation for Xiaomi MiMo (openai-completions) | Open | No | **Message loss** — repeated narrative |
| **P1** | [#97616](https://github.com/openclaw/openclaw/issues/97616) — Zombie child process accumulation (hooks, bash, codex) | Open | No | **Crash-loop** — runtime degradation |
| **P2** | [#98435](https://github.com/openclaw/openclaw/issues/98435) — MCP loopback no auto-reconnect after gateway restart | Open | No | **Session state** — tool calls fail post-restart |
| **P2** | [#98976](https://github.com/openclaw/openclaw/issues/98976) — Provider refusals don't trigger fallback chain | Open | No | **Auth/availability** — hard turn failure |
| **P2** | [#149935](https://github.com/openclaw/openclaw/issues/149935) — Main-session recovery sync I/O freezes event loop 63s | Open | **Yes** ([#150562](https://github.com/openclaw/openclaw/pull/150562)) | **Startup** — gateway unresponsive |
| **P2** | [#77750](https://github.com/openclaw/openclaw/issues/77750) — `spawn EBADF` at high FD count (14k+ from plugins) | Closed | — | **Crash-loop** — exec tool fails |
| **P2** | [#77720](https://github.com/openclaw/openclaw/issues/77720) — Subagent children receive no termination signal when parent dies | Closed | — | **Session state** — stale-running children |

**Pattern:** P1 issues cluster around **message durability**, **gateway scalability**, and **mobile/voice channel reliability**. Several P1s are **2026.9.4 regressions**.

## 6. Feature Requests & Roadmap Signals
| Request | Issue/PR | Signal Strength | Likelihood for Next Version |
|---------|----------|-----------------|----------------------------|
| **Per-agent cost budgets** at gateway | [#42475](https://github.com/openclaw/openclaw/issues/42475) (23 comments, stale) | High — operator pain point | Medium (needs product decision) |
| **Per-agent dreaming config** (disable per agent, schedule stagger) | [#67413](https://github.com/openclaw/openclaw/issues/67413) (9 comments, 5 👍) | Medium — OOM prevention | High (operational need) |
| **Configurable bootstrap file injection order** for prompt cache | [#65438](https://github.com/openclaw/openclaw/issues/65438) (5 comments, 2 👍) | Medium — Anthropic cache optimization | Medium |
| **Agent-scoped secret audiences & enforcement** | [#150271](https://github.com/openclaw/openclaw/pull/150271) (XL PR, ready) | High — multi-tenant security | **High** (PR ready, maintainer review) |
| **Contextual plugin help in Ask OpenClaw** | [#149330](https://github.com/openclaw/openclaw/pull/149330) (XL PR, ready) | Medium — UX polish | High (PR ready) |
| **Human-readable Telegram topic names** in session dropdown | [#7406](https://github.com/openclaw/openclaw/issues/7406) (4 comments) | Low — UX only | Low |
| **Reasoning-field outputs** for native reasoning models | [#74021](https://github.com/openclaw/openclaw/issues/74021) (closed) | Medium — model compatibility | Medium (closed but may reopen) |

**Strongest signals:** **Multi-tenant secret scoping** (PR #150271 ready), **per-agent dreaming controls** (OOM prevention), and **cost budgets** (operator demand). The WebUI performance study (#149361) suggests a coordinated UX release batch is being prepared.

## 7. User Feedback Summary
| Source | Pain Point | Sentiment |
|--------|------------|-----------|
| [#88087](https://github.com/openclaw/openclaw/issues/88087) | Operator tearing down droplet: "Costs aren't worth it for the experience" — long-running task UX, silent cron wake failures | **Negative** — churn risk |
| [#95601](https://github.com/openclaw/openclaw/issues/95601) | VoiceOver user: appreciates accessible usage display; requests VoiceOver-friendly chat history | **Positive + constructive** |
| [#74848](https://github.com/openclaw/openclaw/issues/74848) | macOS App node repeatedly disconnects "cancelled" while CLI works (regression) | **Negative** — platform parity broken |
| [#121188](https://github.com/openclaw/openclaw/issues/121188) | Windows Companion sandbox hardcodes `ui.disable=true`, killing all `user32.dll` programs (whoami, tasklist, powershell) | **Negative** — Windows Companion broken |
| [#148529](https://github.com/openclaw/openclaw/issues/148529) | 632-agent fleet: 12-min startup vs 2s previously — "per-phase breakdown" provided | **Technical, detailed** — high-value reporter |
| [#149935](https://github.com/openclaw/openclaw/issues/149935) | USB storage + 237 agents → 63.6s freeze on recovery; watchdog logs included | **Technical, reproducible** |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) | WhatsApp messages silently lost during outage — "particularly impacts compliance" | **Negative** — data loss concern |

**Themes:** **Large-fleet operators** provide high-quality repros but hit **scalability regressions**. **Mobile/voice channels** (WhatsApp, Android Talk, macOS App) have **reliability gaps**. **Accessibility** is acknowledged but incomplete. **Windows Companion** appears fundamentally broken for system commands.

## 8. Backlog Watch — Stale High-Impact Items Needing Maintainer Attention
| Item | Age | Labels | Why It Matters |
|------|-----|--------|----------------|
|

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-09-17 | **Projects Analyzed:** 12

---

## 1. Ecosystem Overview

The open-source personal AI agent ecosystem shows **bimodal maturity**: a cluster of 5–6 actively maintained, production-grade frameworks (OpenClaw, Hermes Agent, NanoBot, ZeroClaw, CoPaw, LobsterAI) pushing hard on **operational reliability at scale** (gateway concurrency, session recovery, multi-provider orchestration), while a second tier (PicoClaw, Moltis, NanoClaw, NullClaw) focuses on **niche UX, platform integration, or architectural experiments**. Two projects (IronClaw, ZeptoClaw) show no recent activity. The dominant theme across active projects is **hardening the "last mile" of agent deployment** — sandbox security, streaming correctness, credential management, and fleet-scale startup/recovery — rather than core LLM reasoning. Community engagement correlates with **operator pain** (large-fleet startups, message loss, CI flakiness) rather than feature requests, signaling a shift from exploration to productionization.

---

## 2. Activity Comparison

| Project | Issues Touched (24h) | PRs Updated (24h) | PRs Merged/Closed | Release Today | Health Score* |
|---------|---------------------|-------------------|-------------------|---------------|---------------|
| **OpenClaw** | 208 | 500 | 173 | No | 🟡 **High velocity, P0/P1 regressions** |
| **ZeroClaw** | 27 | 50 | 1 | No | 🟡 **Exceptional velocity, high bug density** |
| **CoPaw (QwenPaw)** | 12 | 46 | 17 | No | 🟡 **High velocity, critical memory leaks** |
| **Hermes Agent** | 9 | 50 | 11 | No | 🟢 **Strong fixes, security/data-loss gaps** |
| **LobsterAI** | 9 (closed) | 19 (closed) | 28 total | No | 🟢 **Stabilization sprint, low community heat** |
| **NanoBot** | 3 | 19 | 3 | No | 🟢 **Healthy provider ecosystem, P1 session bug** |
| **Moltis** | ~2 | ~3 | 1 merged | No | 🟡 **Steady, critical MCP reliability gap** |
| **NanoClaw** | 0 (public) | 34 | 9 | No | 🟡 **CI instability (Bun 1.4.0), Iron Proxy GA near** |
| **PicoClaw** | 1 | 3 | 2 | No | 🟢 **Focused Telegram fixes, stale remote-agent PR** |
| **NullClaw** | 1 | 0 | 0 | No | ⚪ **Planning/exploration phase** |
| **IronClaw** | 0 | 0 | 0 | No | 🔴 **Inactive** |
| **ZeptoClaw** | 0 | 0 | 0 | No | 🔴 **Inactive** |

*Health Score: 🟢 Stable/improving | 🟡 High velocity with critical open issues | 🟠 Stalled/backlog forming | 🔴 Inactive | ⚪ Pre-development

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale-proven architecture**: Only project with documented 600+ agent fleet telemetry (startup 12 min → 2s regression tracking, 237-agent recovery freeze profiling)
- **Gateway-centric design**: Centralized control plane for session routing, provider failover, plugin lifecycle — peers (NanoBot, Hermes, ZeroClaw) distribute this logic across client/gateway boundaries
- **Multi-channel maturity**: Simultaneous WebUI, CLI, Android, Telegram, WhatsApp, Google Meet, Slack support with channel-specific regression tracking
- **Observability depth**: Per-phase startup breakdowns, watchdog logs, event-loop freeze quantification — exceeds peer diagnostic granularity

**Technical Approach Differences:**
- **Monorepo + single gateway** vs. NanoBot/Hermes/ZeroClaw's **modular runtime + plugin/gateway separation**
- **SQLite-backed session store** with Doctor repair tooling vs. LobsterAI's schema-migration-before-repair, Moltis's sandbox-isolated state
- **Provider-agnostic plugin system** (MCP, Codex, custom) vs. NanoBot's provider-adapter pattern, CoPaw's Creator plugin ecosystem

**Community Size Indicators:**
- Highest absolute issue/PR volume (500 PRs/24h)
- **Operator-driven feedback**: Detailed repros from 632-agent fleet, USB storage, compliance-critical WhatsApp — suggests enterprise/production adoption
- **Stale high-impact backlog** (per-agent cost budgets #42475, 23 comments) indicates maintainer bandwidth bottleneck, not community disinterest

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Gateway/Fleet Scalability** | OpenClaw, ZeroClaw, Hermes Agent, LobsterAI | Startup <5s at 200+ agents; yielding event loop during health scans; per-agent cost budgets |
| **Session Recovery Correctness** | OpenClaw, Hermes Agent, LobsterAI, Moltis, ZeroClaw | Async store iteration (OpenClaw #150562); snapshot rollback (LobsterAI #2690); MCP session resilience (Moltis #1271, ZeroClaw #10903) |
| **Streaming & SSE Reliability** | NanoBot, Hermes Agent, CoPaw, ZeroClaw, LobsterAI | Null-frame handling (CoPaw #7813); line-buffering (LobsterAI #1130); reasoning token rendering (Hermes #113743) |
| **Sandbox/Security Hardening** | ZeroClaw, Moltis, NanoClaw, Hermes Agent, OpenClaw | Seatbelt/macOS roots (ZeroClaw #10556); per-agent mounts/run_as (Moltis #1272); credential gateway unification (NanoClaw #3815); Tirith circuit breaker (Hermes #113744) |
| **Multi-Provider Orchestration** | NanoBot, ZeroClaw, CoPaw, NanoClaw, LobsterAI | Fallback chains (NanoBot #5764, OpenClaw #98976); reasoning-effort passthrough (ZeroClaw #10916); provider parity (OpenRouter images, AnySearch) |
| **CI/Build Stability** | NanoClaw, ZeroClaw, Moltis, CoPaw | Bun 1.4.0 spawnSync hangs (NanoClaw #3839); Cranelift/Windows timeouts (ZeroClaw #10558); BuildKit caching (Moltis #1270); pytest-timeout (CoPaw #7803) |
| **Credential/Secret Management** | NanoClaw, OpenClaw, Hermes Agent, LobsterAI | Gateway-scoped secrets (OpenClaw #150271); proxy cooldown bypass (LobsterAI #2688); OAuth refresh on live MCP (CoPaw #7821) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | NanoBot | ZeroClaw | CoPaw | LobsterAI | Moltis | NanoClaw |
|-----------|----------|--------------|---------|----------|-------|-----------|--------|----------|
| **Primary Target** | Fleet operators, enterprise | Desktop power-users, multi-bot devs | CLI/TUI developers, multi-provider users | Security-first, multimodal agents | Chinese-market enterprise, Tauri desktop | OpenClaw downstream, Feishu/Lark enterprise | Graph-based agents, sandbox isolation | Skill/gateway marketplace, Iron Proxy |
| **Architecture** | Monorepo, central gateway | Modular runtime + Desktop + Gateway | TUI-first, provider-adapter plugins | Capability-based security, channel serialization | Tauri + Python backend, Creator plugin ecosystem | Electron + OpenClaw gateway + cowork layer | Rust core, BuildKit, per-agent sandbox | Skill registry, Iron Proxy gateway, Bun runtime |
| **Key Differentiator** | Operational telemetry at scale | Windows Computer Use + a11y + HUD | Provider parity + observability (Langfuse) | RFC-driven permission policy (Shell V1) | Hub model gateway + governance + i18n | Repair snapshot + schema migration + proxy auth | Slash-command UX + aux model routing | Credential gateway + delivery-mode config |
| **Maturity Signal** | P0 security bug (#125284), fleet regressions | Security circuit-breaker bug, session ownership | P1 cross-session leak, tool precision | Image-marker cluster, CI flakiness | Memory leaks (3 paths), packaging regressions | Stalled installer/PDF bugs, stabilization focus | MCP brittleness, 5-month PR review latency | Bun CI wedges, Iron Proxy near-GA |

**Architectural Spectrum:**
- **Centralized Gateway**: OpenClaw, LobsterAI, NanoClaw (Iron Proxy)
- **Distributed Runtime + Control Plane**: Hermes Agent, ZeroClaw, Moltis
- **Client-Centric + Plugin Mesh**: NanoBot, CoPaw, PicoClaw

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration (High Velocity + High Bug Density)** | OpenClaw, ZeroClaw, CoPaw, NanoClaw | 30–500 PRs/24h; multiple P0/P1 open; CI instability; security backlog; release candidates imminent but blocked |
| **Active Stabilization (Fix-Focused, Lower Volume)** | Hermes Agent, NanoBot, LobsterAI, Moltis, PicoClaw | 5–50 PRs/24h; batch bug fixes; feature PRs ready for review; clear next-release scope; maintainer review bandwidth visible |
| **Planning / Niche / Low Activity** | NullClaw | Architectural research (UniFFI mobile), no code movement |
| **Inactive** | IronClaw, ZeptoClaw | No 24h activity |

**Maturity Markers:**
- **Production Hardening**: OpenClaw (fleet telemetry), LobsterAI (repair snapshots), Hermes Agent (Windows perf), NanoBot (provider tracing)
- **Pre-1.0 Experimentation**: Moltis (graph agents), NullClaw (mobile), PicoClaw (remote pairing)
- **Ecosystem Plays**: NanoClaw (skill marketplace), CoPaw (Hub gateway), ZeroClaw (RFC security model)

---

## 7. Trend Signals for AI Agent Developers

1. **Gateway as Control Plane** → 6/12 projects invest in centralized gateway for fleet ops, cost control, credential rotation, and provider failover. *Implication: Agent frameworks without gateway story will hit scale walls.*

2. **Session Recovery = Table Stakes** → Every active project has open issues/PRs on recovery correctness (async I/O, snapshot rollback, MCP reconnect). *Implication: Durable execution is now a baseline requirement, not a differentiator.*

3. **Security Moving Downstack** → Seatbelt (macOS), Firejail/Bubblewrap (Linux), capability-based policies (ZeroClaw RFC 7155), per-agent sandbox knobs (Moltis). *Implication: "Sandbox optional" architectures are being retrofitted; design for isolation from day one.*

4. **Provider Abstraction Converging** → NanoBot (OpenRouter, AnySearch, Parallel), ZeroClaw (reasoning_effort passthrough), CoPaw (custom provider dialog), NanoClaw (Iron Proxy). *Implication: Multi-provider routing with fallback, tracing, and cost attribution is the new standard.*

5. **CI/Build Reliability as Blocker** → Bun 1.4.0 regressions (NanoClaw), Cranelift/Windows timeouts (ZeroClaw), flaky Telegram tests (ZeroClaw, Hermes). *Implication: Test infrastructure investment now exceeds feature velocity in several projects.*

6. **Operator-Driven Roadmaps** → Per-agent cost budgets (OpenClaw), dreaming config (OpenClaw), Hub governance (CoPaw), proxy auth (LobsterAI). *Implication: Enterprise/compliance requirements (audit, cost, data residency) drive backlog more than user-facing features.*

7. **Memory/Streaming Bugs Dominate Critical Path** → CoPaw (3 leak paths), Hermes (compression livelock), ZeroClaw (streaming timeouts), NanoBot (cross-session leak). *Implication: Long-running agent processes expose resource management debt; streaming correctness is harder than request/response.*

---

**Bottom Line:** The ecosystem is **consolidating around production-grade operational concerns** — gateway scalability, session durability, sandbox security, and multi-provider orchestration. Projects that solve these *systematically* (not just patch-wise) will define the next generation of agent infrastructure. OpenClaw leads on telemetry and scale evidence; ZeroClaw on security architecture; Hermes on desktop/platform depth; NanoBot on provider ecosystem; CoPaw on enterprise governance. The next 6 months will likely see **gateway/API standardization** and **recovery/sandbox patterns** emerge as de facto interfaces.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-17

## 1. Today's Overview

NanoBot shows **high maintenance velocity** with 19 PRs updated and 3 issues touched in the last 24 hours. The project is in active bug-fix and stabilization mode: 16 open PRs carry `fix`/`bug`/`regression` labels, most marked `priority: p2` with one `p1` (cross-session message serialization). Three PRs were merged/closed today, all addressing TUI responsiveness, security test hermeticity, and a minor refactor. No new release was cut. The contributor base includes both core maintainers and external providers (Parallel, AnySearch, OpenRouter), indicating healthy ecosystem engagement.

## 2. Releases

**No new releases** in the last 24 hours. The latest version remains whatever was published prior to this window.

## 3. Project Progress — Merged / Closed PRs Today

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5791](https://github.com/HKUDS/nanobot/pull/5791) | **bug, fix, performance, p2** | **TUI input responsiveness**: Drains gateway output in bounded FIFO batches so input callbacks aren't starved during agent activity; pauses draining during IME-delayed submit. | Directly improves interactive CLI usability under heavy agent output. |
| [#5756](https://github.com/HKUDS/nanobot/pull/5756) | **fix, test, security, p2** | **Proxy-clearing test fixtures**: Makes SSRF/proxy tests hermetic on hosts with OS-level proxies (Windows registry, macOS SystemConfiguration) by also clearing `urllib.request.getproxies()` cache. | Hardens security test reliability in CI and developer environments. |
| [#2595](https://github.com/HKUDS/nanobot/pull/2595) | **refactor** | **Variable rename**: `thought` → `display_text` in tool-progress path with clarifying comment. | Code clarity; long-open PR (since Mar 2026) finally closed. |

## 4. Community Hot Topics — Most Active Issues / PRs

| Item | Activity | Core Need / Signal |
|------|----------|-------------------|
| [#4419](https://github.com/HKUDS/nanobot/issues/4419) **Issue** — *Automatic reasoning effort escalation* | 5 comments, created Jun 20, updated Sep 16 | **Multi-provider reasoning control**: Users want nanobot to auto-escalate `reasoningEffort` (low→medium→high) when initial attempts fail, rather than manual config. Signals growing reliance on reasoning models (o1, Claude 3.7, Gemini 2.5) across providers. |
| [#5731](https://github.com/HKUDS/nanobot/issues/5731) **Issue** — *AnySearch extract as web_fetch backend* | 1 comment, created Sep 11 | **Zero-key web search integration**: AnySearch team proposes anonymous-quota backend for `web_fetch`. Reflects demand for **privacy-preserving, no-API-key search** in agent workflows. |
| [#5718](https://github.com/HKUDS/nanobot/pull/5718) **PR** — *OpenRouter native image generation* | Updated Sep 16, `feature`, `provider` | **Provider parity**: OpenRouter now has native Images API; nanobot must adopt it to stay current with upstream capabilities. |
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) **PR** — *Langfuse tracing for Codex* | Updated Sep 16, `feature`, `provider` | **Observability gap**: Codex provider lacked Langfuse tracing (unlike OpenAI-compatible path). Adds native SDK tracing per HTTP request. |

**Underlying theme**: Contributors are pushing **provider parity** (OpenRouter, AnySearch, Parallel, Codex) and **observability** (Langfuse) — nanobot is becoming a multi-provider orchestration layer, not just an OpenAI wrapper.

## 5. Bugs & Stability — Reported / Fixed Today (Ranked by Severity)

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **P1 (Critical)** | [#5792](https://github.com/HKUDS/nanobot/pull/5792) — *Cross-session response delivery bug*: Session A's response appears in Session B when user switches quickly. | **Open** (fix PR submitted) | [#5792](https://github.com/HKUDS/nanobot/pull/5792) — Serializes per-session messages via authoritative FIFO inbox, single worker per session. |
| **P2 (High)** | [#5794](https://github.com/HKUDS/nanobot/pull/5794) — *Cross-session response delivery in agent loop* (duplicate/similar to #5792). | **Open** | [#5794](https://github.com/HKUDS/nanobot/pull/5794) — Fixes `_dispatch` re-publication race. |
| **P2** | [#5796](https://github.com/HKUDS/nanobot/pull/5796) — *`edit_file` strips separator whitespace* in inline replacements, joining tokens. | **Open** | [#5796](https://github.com/HKUDS/nanobot/pull/5796) |
| **P2** | [#5795](https://github.com/HKUDS/nanobot/pull/5795) — *`edit_file` loses indentation & inserts extra blank line* on fallback edits with trailing newline. | **Open** | [#5795](https://github.com/HKUDS/nanobot/pull/5795) |
| **P2** | [#5793](https://github.com/HKUDS/nanobot/pull/5793) — *Recursive `list_dir` hides contents* when path contains ignored dir name (e.g., `/tmp/build/project`). | **Open** | [#5793](https://github.com/HKUDS/nanobot/pull/5793) — Scopes ignores to listed root only. |
| **P2** | [#5765](https://github.com/HKUDS/nanobot/pull/5765) — *API accepts truthy `stream` string* (`"false"` → SSE), violating OpenAI compat. | **Open** | [#5765](https://github.com/HKUDS/nanobot/pull/5765) — Requires boolean. |
| **P2** | [#5766](https://github.com/HKUDS/nanobot/pull/5766) — *Cron tool silently picks first schedule field* when multiple supplied. | **Open** | [#5766](https://github.com/HKUDS/nanobot/pull/5766) — Now rejects conflicting fields. |
| **P2** | [#5762](https://github.com/HKUDS/nanobot/pull/5762) — *Cron accepts past `at` values*, creates never-firing job. | **Open** | [#5762](https://github.com/HKUDS/nanobot/pull/5762) — Rejects past one-time schedules. |
| **P2** | [#5769](https://github.com/HKUDS/nanobot/pull/5769) — *NIM-style timeout errors not classified* for fallback (wrapped in `RuntimeError`). | **Open** | [#5769](https://github.com/HKUDS/nanobot/pull/5769) — Classifies by message text. |
| **P2** | [#5764](https://github.com/HKUDS/nanobot/pull/5764) — *FallbackProvider half-open probes race*: concurrent requests all hit recovering primary. | **Open** | [#5764](https://github.com/HKUDS/nanobot/pull/5764) — Serializes probes. |
| **P2** | [#5379](https://github.com/HKUDS/nanobot/pull/5379) — *Memory consolidation loses raw-fallback chars* across bounded `history.jsonl`. | **Open** (since Aug 13) | [#5379](https://github.com/HKUDS/nanobot/pull/5379) — Preserves full input. |
| **P2** | [#5152](https://github.com/HKUDS/nanobot/pull/5152) — *Subagent partial completion not marked*, parent turn stays open incorrectly. | **Open** (since Jul 28) | [#5152](https://github.com/HKUDS/nanobot/pull/5152) — Adds `subagent_remaining_count` metadata. |

**Stability takeaway**: Today's batch is **tooling/API correctness** (edit_file, cron, stream parsing) + **concurrency safety** (session isolation, fallback probes). The P1 session-crossing bug is the highest user-visible risk; two fix PRs exist (#5792, #5794) — maintainers should prioritize review/merge.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Auto reasoning-effort escalation** | [#4419](https://github.com/HKUDS/nanobot/issues/4419) (5 comments, 3 months old) | **High** — Multi-provider reasoning is now standard; config-only approach is limiting. |
| **AnySearch zero-key web_fetch backend** | [#5731](https://github.com/HKUDS/nanobot/issues/5731) (AnySearch team) | **Medium-High** — Low-friction search aligns with "anonymous quota" trend; PR likely forthcoming. |
| **Parallel Search User-Agent identification** | [#5797](https://github.com/HKUDS/nanobot/pull/5797) (Parallel employee) | **High** — Trivial change, provider-driven, already merged precedent (#5047). |
| **OpenRouter native image generation** | [#5718](https://github.com/HKUDS/nanobot/pull/5718) | **High** — Provider parity, active PR with tests. |
| **Langfuse tracing for Codex** | [#5520](https://github.com/HKUDS/nanobot/pull/5520) | **Medium** — Observability feature; depends on Langfuse SDK adoption. |
| **Signed direct-delivery webhook (gateway)** | [#5652](https://github.com/HKUDS/nanobot/pull/5652) | **Medium** — Enables CI/monitoring/billing notifications; security-sensitive, needs review. |

**Prediction**: Next patch/minor will likely ship: Parallel UA (#5797), OpenRouter images (#5718), cron/edit_file fixes (#5762, #5765, #5766, #5795, #5796), and the P1 session fix (#5792). Reasoning escalation (#4419) and AnySearch (#5731) are strong candidates for the following minor.

## 7. User Feedback Summary — Pain Points & Use Cases

| Feedback | Source | Sentiment |
|----------|--------|-----------|
| **"Session A response leaks into Session B"** | [#5792](https://github.com/HKUDS/nanobot/pull/5792), [#5794](https://github.com/HKUDS/nanobot/pull/5794) | 🔴 **Critical** — Multi-session users (TUI, web, API) hit data corruption. |
| **"edit_file mangles whitespace/indentation"** | [#5795](https://github.com/HKUDS/nanobot/pull/5795), [#5796](https://github.com/HKUDS/nanobot/pull/5796) | 🟠 **High** — Core coding agent tool unreliable for precise edits. |
| **"Cron tool accepts invalid configs silently"** | [#5762](https://github.com/HKUDS/nanobot/pull/5762), [#5766](https://github.com/HKUDS/nanobot/pull/5766) | 🟠 **High** — Scheduled tasks fail silently; devs waste debug time. |
| **"Need auto reasoning escalation"** | [#4419](https://github.com/HKUDS/nanobot/issues/4419) | 🟡 **Medium** — Power users manually tune `reasoningEffort`; want adaptive behavior. |
| **"Want search without API keys"** | [#5731](https://github.com/HKUDS/nanobot/issues/5731) | 🟡 **Medium** — Privacy-conscious / low-friction adoption. |
| **"TUI input freezes during agent output"** | [#5791](https://github.com/HKUDS/nanobot/pull/5791) (now fixed) | ✅ **Resolved** — Interactive users blocked; fix merged. |

**Overall**: Users are **pushing nanobot as a production-grade multi-session coding agent** — they hit concurrency bugs, tool precision issues, and want smarter reasoning defaults. The fixed TUI responsiveness shows maintainers respond to interactive UX pain.

## 8. Backlog Watch — Stale / Needing Maintainer Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) — *Memory: preserve full consolidation input* | 35 days (since Aug 13) | Memory loss in long conversations; affects agent coherence. | **Review/merge** — fix is rebased, tests included, p2. |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) — *Subagent: mark partial completion* | 51 days (since Jul 28) | Subagent orchestration correctness; parent turns hang. | **Review/merge** — adds metadata, p2, test included. |
| [#4419](https://github.com/HKUDS/nanobot/issues/4419) — *Auto reasoning escalation* | 89 days (since Jun 20) | High community interest (5 comments), strategic feature. | **Triage** — assign owner, design escalation policy (max retries, cost guardrails). |
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) — *Langfuse tracing for Codex* | 24 days (since Aug 24) | Observability parity; Codex users blind without it. | **Review** — provider-specific tracing, native SDK approach. |
| [#5652](https://github.com/HKUDS/nanobot/pull/5652) — *Signed webhook for gateway* | 13 days (since Sep 4) | Security-sensitive; enables trusted automation. | **Security review** — verify HMAC design, rate limiting, replay protection. |

---

**Project Health Indicators**  
- ✅ **Velocity**: 19 PRs/24h, 3 merges — strong throughput  
- ✅ **Provider ecosystem**: 4+ external contributors (Parallel, AnySearch, OpenRouter, Langfuse)  
- ⚠️ **P1 bug open**: Session cross-talk (#5792) — should be merge priority #1  
- ⚠️ **Stale PRs**: 2 p2 PRs >30 days (#5379, #5152) — review backlog forming  
- 📈 **Trend**: Hardening tool correctness + provider parity + multi-session reliability  

*Data as of 2026-09-17 00:00 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-17

## 1. Today's Overview
Hermes Agent shows **high development velocity** with 50 PRs and 9 issues updated in the last 24 hours. The project is in active maintenance mode with a strong focus on bug fixes (11 PRs closed/merged today), desktop stability, and platform-specific improvements (Windows, Telegram, Slack). No new releases were cut, suggesting the team is accumulating changes for a future version bump. The PR-to-issue ratio (~5.5:1) indicates healthy contributor engagement and rapid triage.

## 2. Releases
**No new releases today.** The latest activity consists of 11 merged/closed PRs and 39 open PRs, with changes spanning desktop UX, computer-use on Windows, MCP tooling, skills system, and session/profile management. Expect a v0.21.4 or v0.22.0 once current fixes stabilize.

## 3. Project Progress — Merged/Closed PRs Today (11)
| PR | Type | Summary | Link |
|----|------|---------|------|
| #112461 | fix(desktop) | Added Cancel button to guarded model-switch confirm dialog; preserves original selection on decline | [#112461](https://github.com/NousResearch/hermes-agent/pull/112461) |
| #113736 | fix(skills) | Preserves author-written `Sources` sections in skills; only treats header as generated when followed by source entries | [#113736](https://github.com/NousResearch/hermes-agent/pull/113736) |
| #113735 | fix(cron) | Defers tick dispatch while live update holds lock; prevents half-replaced code execution | [#113735](https://github.com/NousResearch/hermes-agent/pull/113735) |
| #112485 | fix | Prevents compression livelock where early-return advanced attempt generation without running summary work | [#112485](https://github.com/NousResearch/hermes-agent/pull/112485) |
| #113733 | docs(skills) | Removed evasion advice for computer-use type guard; now directs to reassess or use safer tool | [#113733](https://github.com/NousResearch/hermes-agent/pull/113733) |
| #112583 | fix(stt) | Preserves subprocess error details in STT helper; tolerates missing stderr/stdout, adds UTF-8 replacement decoding | [#112583](https://github.com/NousResearch/hermes-agent/pull/112583) |
| #112490 | fix(agent) | Scopes Kanban guidance to worker tasks only; requires non-empty `kanban_worker_task` to add execution protocol | [#112490](https://github.com/NousResearch/hermes-agent/pull/112490) |
| #112509 | fix(skills) | Falls back to `skills.sh` on index misses; bounded query within existing search budget | [#112509](https://github.com/NousResearch/hermes-agent/pull/112509) |
| #111002 | perf(desktop) | Reduces Windows startup I/O and blocking cuts; ETL request-to-interaction down from 122ms (ARM64) | [#111002](https://github.com/NousResearch/hermes-agent/pull/111002) |
| #113766 | fmt(js) | Auto-generated `npm run fix` formatting; auto-merges on CI pass | [#113766](https://github.com/NousResearch/hermes-agent/pull/113766) |
| #60548 | invalid | Closed as incoherent: Ayla Active Memory Telegram review callbacks on mini-PC | [#60548](https://github.com/NousResearch/hermes-agent/issues/60548) |

**Key advances:** Desktop UX polish (model switch, startup perf), skills system robustness, cron/update safety, STT error fidelity, and Windows-specific optimization.

## 4. Community Hot Topics — Most Active Issues/PRs
| Item | Type | Comments | Reaction | Why It Matters |
|------|------|----------|----------|----------------|
| [#113673](https://github.com/NousResearch/hermes-agent/issues/113673) | Bug (P3, memory) | 2 | 0 | Disk-cleanup deletes PostgreSQL maintenance dirs (`.pg0`), breaking Hindsight checkpoints and pg0 startup — data-loss risk |
| [#113743](https://github.com/NousResearch/hermes-agent/issues/113743) | Bug (P2, duplicate) | 2 | 0 | Thinking/reasoning tab broken post-update; shows raw `< \| DSML \| function_calls>` instead of structured output — UX regression |
| [#113753](https://github.com/NousResearch/hermes-agent/issues/113753) | Bug (P2, sessions) | 1 | 0 | Cross-connection bot-to-bot messaging fails with `SESSION_NOT_OWNED` when destination Bot Chat open in Desktop — session ownership conflict |
| [#113761](https://github.com/NousResearch/hermes-agent/issues/113761) | Bug (Slack) | 1 | 0 | Slack `rich_blocks` renders `<url\|label>` as literal text in lists; markdown `[label](url)` works — formatter regression |
| [#110980](https://github.com/NousResearch/hermes-agent/pull/110980) | Feature (MCP) | — | 0 | Gateway MCP reload via control socket — ops demand for zero-downtime tool updates |
| [#111622](https://github.com/NousResearch/hermes-agent/pull/111622) | Feature (Windows) | — | 0 | Direct Win32 named pipe transport, a11y strategy, in-app HUD — major Windows Computer Use overhaul |

**Underlying needs:** Users are hitting session-state edge cases (Desktop + gateway + bots), platform-specific rendering regressions (Slack, thinking UI), and data-safety gaps (PostgreSQL dirs). Operators want runtime MCP reload without chat messages.

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)
| Severity | Issue | Component | Fix PR? | Notes |
|----------|-------|-----------|---------|-------|
| **High (Data Loss)** | [#113673](https://github.com/NousResearch/hermes-agent/issues/113673) | `plugins/disk-cleanup` / PostgreSQL | ❌ | Empty-dir sweep deletes `.pg0` maintenance dirs → breaks Hindsight checkpoints, pg0 won't start. `.pg0` not in `_EMPTY_DIR_PROTECTED_TOP_LEVEL`. |
| **High (Session Break)** | [#113753](https://github.com/NousResearch/hermes-agent/issues/113753) | Gateway / Desktop / Sessions | ❌ | `SESSION_NOT_OWNED` on cross-connection bot msg when target Bot Chat open. Works if closed. Affects multi-bot deployments. |
| **High (Security)** | [#113744](https://github.com/NousResearch/hermes-agent/issues/113744) | `tools/tirith_security.py` | ❌ | Circuit breaker never closes: 3 transient failures → permanently disables command security (`tirith disabled`). No auto-recovery. |
| **Medium (UX Regression)** | [#113743](https://github.com/NousResearch/hermes-agent/issues/113743) | Agent / TUI | ❌ | Thinking tab shows raw DSML/function_calls tokens instead of rendered reasoning. Blocks visibility into agent decisions. |
| **Medium (Platform)** | [#113761](https://github.com/NousResearch/hermes-agent/issues/113761) | Slack / `rich_blocks` | ❌ | `<url\|label>` autolinks render literally inside markdown lists; works outside lists. Markdown links unaffected. |
| **Medium (Legacy Data)** | [#113757](https://github.com/NousResearch/hermes-agent/issues/113757) | CLI / Gateway / Telegram | ✅ [#113765](https://github.com/NousResearch/hermes-agent/pull/113765) | Profile purge/rename fails on legacy Telegram topic schemas (v1/v2). PR migrates before purge/rekey. |
| **Low (UI)** | [#113759](https://github.com/NousResearch/hermes-agent/issues/113759) | TUI / Model Picker | ❌ | Long model IDs (~54 chars) strand `❯` cursor and drop indent in `/model` submenu. Visual glitch on LAN/MLX providers. |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **MCP reload via control socket** | [#110980](https://github.com/NousResearch/hermes-agent/pull/110980) (open, 3d old) | **High** — Ops-critical, review progressing, no blockers noted |
| **Win32 named pipe transport + a11y + HUD for Computer Use** | [#111622](https://github.com/NousResearch/hermes-agent/pull/111622) (open, 2d old) | **High** — Addresses all review blockers; Windows strategic priority |
| **OAuth `auth_server_metadata_url` for split-origin MCP auth servers** | [#113019](https://github.com/NousResearch/hermes-agent/pull/113019) (open, 1d old) | **Medium** — Standards-compliance, niche but well-scoped |
| **Probabilistic decision providers for plugins** | [#113020](https://github.com/NousResearch/hermes-agent/pull/113020) (open, 1d old) | **Medium** — Plugin extensibility; provider-neutral runtime added |
| **Honcho SDK 2.4.0 upgrade (memory scope client)** | [#113021](https://github.com/NousResearch/hermes-agent/pull/113021) (open, 1d old) | **Medium** — Dependency alignment; no runtime behavior change yet |
| **TTS normalization for dotted identifiers, flags, shell operators** | [#113025](https://github.com/NousResearch/hermes-agent/pull/113025) (open, 1d old) | **Medium** — Quality-of-life for voice/CLI users |
| **emem to optional-mcps catalog** | [#113754](https://github.com/NousResearch/hermes-agent/issues/113754) (issue, today) | **Low-Medium** — Follow-up to #79583; gating concerns addressed |
| **OpenRouter provider pins in `/model` confirmations** | [#110789](https://github.com/NousResearch/hermes-agent/pull/110789) (open, 3d old) | **Low-Medium** — UX polish for provider transparency |

**Prediction:** Next release will likely include Windows Computer Use overhaul (#111622), MCP control-socket reload (#110980), and the batch of today's bug fixes. Honcho upgrade and probabilistic decisions may follow in a subsequent minor.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Session ownership conflicts in Desktop** | [#113753](https://github.com/NousResearch/hermes-agent/issues/113753): "Cross-connection bot-to-bot messaging fails when destination Bot Chat is open" | Blocks multi-bot workflows; users must close tabs to send messages |
| **Thinking/reasoning visibility lost** | [#113743](https://github.com/NousResearch/hermes-agent/issues/113743): "Plain text (`< \| DSML \| function_calls`) showing instead of thinking section" | Users cannot audit agent decisions; trust/debugging impaired |
| **Data loss from aggressive cleanup** | [#113673](https://github.com/NousResearch/hermes-agent/issues/113673): Disk-cleanup deletes required PostgreSQL dirs | Hindsight checkpoints broken; pg0 fails to start — requires manual recovery |
| **Security guard permanently disabled** | [#113744](https://github.com/NousResearch/hermes-agent/issues/113744): "Circuit breaker never closes — three transient failures disable command security for rest of process" | Silent security degradation; no alerting or auto-recovery |
| **Slack link rendering broken in lists** | [#113761](https://github.com/NousResearch/hermes-agent/issues/113761): `<url\|label>` renders literally in bullet lists | Communication friction for Slack-integrated teams |
| **Legacy Telegram schema blocks profile ops** | [#113757](https://github.com/NousResearch/hermes-agent/issues/113757): Purge/rename fails on v1/v2 topic schemas | Migration friction for long-time users; PR #113765 addresses |
| **TUI model picker unusable with long IDs** | [#113759](https://github.com/NousResearch/hermes-agent/issues/113759): Cursor stranded, indent dropped on 54-char model IDs | Affects LAN/MLX/local model users; visual corruption |

**Positive signals:** Rapid fix turnaround (multiple same-day PRs for today's bugs), Windows startup perf improved 2x (#111002), skills system hardening, and active MCP ecosystem investment.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#60548](https://github.com/NousResearch/hermes-agent/issues/60548) | 72 days | Closed (invalid) | Originally "Ayla Active Memory: live Telegram review callbacks on mini-PC" — closed as incoherent but may indicate unresolved edge case in Telegram + memory integration |
| [#110980](https://github.com/NousResearch/hermes-agent/pull/110980) | 3 days | Open | MCP reload via control socket — ops-critical feature awaiting review; enables zero-downtime tool updates |
| [#111622](https://github.com/NousResearch/hermes-agent/pull/111622) | 2 days | Open | Windows Computer Use overhaul — large PR (4 architectural changes), all review blockers addressed; strategic for Windows adoption |
| [#113744](https://github.com/NousResearch/hermes-agent/issues/113744) | Today | Open, no PR | **Critical security bug**: Tirith circuit breaker never closes. No fix PR yet. Should be triaged immediately. |
| [#113673](https://github.com/NousResearch/hermes-agent/issues/113673) | Today | Open, no PR | **Data-loss bug**: Disk-cleanup deletes PostgreSQL dirs. No fix PR yet. High user impact. |
| [#113753](https://github.com/NousResearch/hermes-agent/issues/113753) | Today | Open, no PR | Session ownership conflict in Desktop — affects multi-bot power users. Needs gateway/desktop coordination. |

**Recommendation:** Prioritize fixes for #113744 (security) and #113673 (data loss) today. Assign reviewers to #110980 and #111622 to unblock high-value features. Monitor #113753 for session-state architecture review.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-17

## 1. Today's Overview
PicoClaw saw modest maintenance activity in the last 24 hours with **one bug-fix issue closed** and **three pull requests updated** (two merged/closed, one open). All items carry the `[stale]` label and were last touched on 2026-09-16, indicating a cleanup of older work rather than new feature velocity. No new releases were published. The project remains in a steady maintenance phase, focusing on Telegram adapter stability and a long-running remote-agent pairing PR.

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Project Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#3357](https://github.com/sipeed/picoclaw/pull/3357) | **Closed** (merged) | **Telegram:** Treat replies to the bot’s own messages as implicit mentions when `mention_only: true`. | Restores natural conversation flow in groups; users no longer need to `@mention` when replying directly to the bot. |
| [#3356](https://github.com/sipeed/picoclaw/pull/3356) | **Closed** (merged) | **Telegram:** Re-attach quoted documents when replying to a file message. | Fixes loss of document context in quoted replies; agents now receive the actual file instead of a `[file]` placeholder. |
| [#3344](https://github.com/sipeed/picoclaw/pull/3344) | **Open** | **Build Remote Agent (gbr/1):** Add phone-pairing adapter so a mobile device can spectate the desktop agent. | Enables new “spectator” UX; still in review, no merge yet. |

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Issue (closed) | 4 | 0 | **Telegram rate-limit storm** – a stuck tool-feedback animation hammered `editMessageText` 228k+ times over days, triggering server-side `retry_after` limits. Users need guardrails against runaway UI loops. |
| [#3344](https://github.com/sipeed/picoclaw/pull/3344) | PR (open) | — | 0 | **Remote-agent pairing** – demand for phone-based spectating of desktop agents via `gbr/1` protocol. Indicates interest in cross-device collaboration. |

*Underlying theme:* **Telegram adapter robustness** (two merged fixes + one high-impact bug) and **multi-device agent interaction** (open PR).

## 5. Bugs & Stability
| Severity | Issue / PR | Description | Fix Status |
|----------|------------|-------------|------------|
| **High** | [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Tool feedback animation looped `editMessageText` every 3 s for days → 228k calls → Telegram rate limit (`retry_after`). | **Closed** (root cause addressed; animation loop terminated on turn failure). |
| **Medium** | [#3357](https://github.com/sipeed/picoclaw/pull/3357) | Replies to bot’s own messages ignored in `mention_only: true` groups unless explicit `@mention` present. | **Fixed & merged**. |
| **Medium** | [#3356](https://github.com/sipeed/picoclaw/pull/3356) | Quoted document messages lost attachment; only `[file]` placeholder passed to agent. | **Fixed & merged**. |

*No open critical bugs remain from today’s batch.*

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Build Remote Agent phone pairing (gbr/1)** | [PR #3344](https://github.com/sipeed/picoclaw/pull/3344) | **Medium** – PR open since 2026-08-23, labeled `[stale]`; needs review/test. If merged, enables mobile spectator mode. |
| **Hardening Telegram edit-loop guards** | [Issue #3343](https://github.com/sipeed/picoclaw/issues/3343) | **High** – implicit in the bug fix; expect defensive timeouts/backoff in animation logic. |

## 7. User Feedback Summary
- **Pain point:** Telegram bot becomes unresponsive or rate-limited when a tool-turn stalls, due to unchecked UI animation loops ([#3343](https://github.com/sipeed/picoclaw/issues/3343)).
- **Workflow friction:** Group users expect “reply to bot” to work without `@mention`; current `mention_only` mode broke this ([#3357](https://github.com/sipeed/picoclaw/pull/3357)).
- **Context loss:** Quoting a file message stripped the document, forcing users to re-upload ([#3356](https://github.com/sipeed/picoclaw/pull/3356)).
- **Desire for mobility:** Interest in pairing a phone to “watch” a desktop agent session ([#3344](https://github.com/sipeed/picoclaw/pull/3344)).

Overall sentiment: **appreciative of quick fixes**, but **wary of stale PRs** lingering without maintainer bandwidth.

## 8. Backlog Watch
| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| [#3344](https://github.com/sipeed/picoclaw/pull/3344) | 25 days | First-class mobile spectator support; expands agent UX beyond desktop. | **Maintainer review & test** – verify `gbr-agent` v0.6.0+ pairing flow, CI integration. |
| [#3343](https://github.com/sipeed/picoclaw/issues/3343) | 26 days | Root cause fixed, but **post-mortem doc / regression test** missing to prevent recurrence. | Add test case for “animation stops on turn failure”; consider global edit-rate limiter. |

---

*Data sourced from GitHub API (issues/PRs updated 2026-09-16). All links point to live GitHub objects.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-17

## 1. Today's Overview
NanoClaw shows **high development velocity** with 34 PRs updated in the last 24 hours (9 merged/closed), but **zero new releases** — indicating active iteration on `main` without a cut. Two critical CI-stability issues (#3839, #3842) around Bun 1.4.0's `spawnSync` hang are open and block reliable test runs. The PR stream is dominated by **credential-gateway centralization** (#3815, #3817, #3818, #3824, #3825), **Iron Proxy gateway introduction** (#3817, #3843), **agent-runner delivery-mode hardening** (#3713, #3781, #3156), and **setup/installation robustness** (#3844, #2681). No community comments/reactions are visible on any item, suggesting either private review channels or low public engagement.

---

## 2. Releases
**None** — No new versions published today. The project remains on continuous `main` development.

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3836](https://github.com/nanocoai/nanoclaw/pull/3836) | CI Hardening | Bounded registry-skills test jobs at 20 min to prevent 6-h runner hangs | **High** — Stops CI resource waste from Bun `spawnSync` wedges |
| [#3843](https://github.com/nanocoai/nanoclaw/pull/3843) | Bug Fix (Skill) | Fixed Iron Proxy WebSocket handshake & upstream framing in tunnel | **High** — Unblocks Codex provider via Iron Proxy end-to-end |
| [#3824](https://github.com/nanocoai/nanoclaw/pull/3824) | Refactor | Added shared credential-connection interface for providers | **Medium** — Foundation for gateway-agnostic auth (#3815, #3825) |
| [#101](https://github.com/nanocoai/nanoclaw/pull/101) | Skill (Closed) | GitHub integration skill (stale since Feb 2026) | **Low** — Closed without merge; superseded by #2301 polling mode |

**Net advancement**: CI reliability hardened; Iron Proxy gateway made functional; credential abstraction layer landed. WhatsApp channel fixes (#3751, #3752) and mount-readonly (#3196) remain open.

---

## 4. Community Hot Topics
*No items have comments or reactions (👍=0 across all).* The hottest **technical** threads by update recency and cross-PR linkage:

1. **Bun `spawnSync` CI hang** — Spans [#3839](https://github.com/nanocoai/nanoclaw/issues/3839) (issue), [#3841](https://github.com/nanocoai/nanoclaw/pull/3841) (fix: async spawn for opencode memory hook), [#3842](https://github.com/nanocoai/nanoclaw/issues/3842) (hardening: upload-trace curl), [#3836](https://github.com/nanocoai/nanoclaw/pull/3836) (CI timeout bound). *Underlying need: make Bun 1.4.0 viable for test runners without 6-h deadlocks.*
2. **Credential Gateway Unification** — [#3815](https://github.com/nanocoai/nanoclaw/pull/3815) (central contract), [#3817](https://github.com/nanocoai/nanoclaw/pull/3817) (Iron Proxy gateway skill), [#3818](https://github.com/nanocoai/nanoclaw/pull/3818) (gateway selection in setup), [#3824](https://github.com/nanocoai/nanoclaw/pull/3824) (credential connections), [#3825](https://github.com/nanocoai/nanoclaw/pull/3825) (opencode via Iron). *Underlying need: decouple providers from OneCLI, enable multi-gateway ops.*
3. **Agent-Runner Delivery Mode** — [#3713](https://github.com/nanocoai/nanoclaw/pull/3713) (per-group config), [#3781](https://github.com/nanocoai/nanoclaw/pull/3781) (tools-only enforcement), [#3156](https://github.com/nanocoai/nanoclaw/pull/3156) (structured attachments). *Underlying need: reliable streaming for providers that can't honor final-text envelope.*

---

## 5. Bugs & Stability (Reported Today)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#3839](https://github.com/nanocoai/nanoclaw/issues/3839) `bun test --isolate` hangs 6 h in CI (Bun 1.4.0 `spawnSync` loses child exit) | Open | [#3841](https://github.com/nanocoai/nanoclaw/pull/3841) (async spawn for opencode hook), [#3836](https://github.com/nanocoai/nanoclaw/pull/3836) (20-min job timeout) |
| **Critical** | [#3842](https://github.com/nanocoai/nanoclaw/issues/3842) `upload-trace` uses `spawnSync` for curl → same wedge risk | Open | None yet |
| **High** | [#3844](https://github.com/nanocoai/nanoclaw/pull/3844) `setup.sh` pnpm fallback fails on distro-packaged Node (EACCES) | Open (PR) | PR #3844 replaces sudo retry with user-owned npm prefix |
| **Medium** | [#3803](https://github.com/nanocoai/nanoclaw/pull/3803) Webhook port recovery test flakes on `EADDRINUSE` | Open (PR) | PR #3803 retries fixture-owned port |
| **Medium** | [#2681](https://github.com/nanocoai/nanoclaw/pull/2681) `loginctl enable-linger` fails on per-home-encrypted systems | Open (PR) | PR #2681 skips linger in that case |

**Pattern**: Bun 1.4.0 `spawnSync` regression is the single biggest stability blocker; two distinct code paths affected (opencode hook, upload-trace).

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Cut |
|--------|--------|-------------------------|
| **Iron Proxy as installable gateway** (with Iron Control optional) | [#3817](https://github.com/nanocoai/nanoclaw/pull/3817), [#3843](https://github.com/nanocoai/nanoclaw/pull/3843) | **Very High** — Core refactor merged, WebSocket fixes folded in |
| **Per-agent-group delivery mode (`tools-only` vs `final-text`)** | [#3713](https://github.com/nanocoai/nanoclaw/pull/3713), [#3781](https://github.com/nanocoai/nanoclaw/pull/3781) | **High** — Migration 26 added, enforcement PR active |
| **Gateway selection in setup without re-login** | [#3818](https://github.com/nanocoai/nanoclaw/pull/3818) | **High** — UX polish for multi-gateway |
| **GitHub polling mode (no inbound port)** | [#2301](https://github.com/nanocoai/nanoclaw/pull/2301) | **Medium** — Long-open (May), embedded adapter, NAT-friendly |
| **Paws4Claws AWS credential proxy skill** | [#2634](https://github.com/nanocoai/nanoclaw/pull/2634) | **Low-Medium** — Niche, mount-from-outside pattern |
| **WhatsApp newsletter JID ignore / pending-question guard** | [#3751](https://github.com/nanocoai/nanoclaw/pull/3751), [#3752](https://github.com/nanocoai/nanoclaw/pull/3752) | **Medium** — Channel hardening, ready for review |

**Prediction**: Next release will center on **Iron Proxy GA + delivery-mode config + Bun CI stability**. GitHub polling mode (#2301) may slip unless prioritized.

---

## 7. User Feedback Summary
*No direct user comments in public issues/PRs.* Inferred pain points from code changes:

- **CI operators**: 6-hour runner hangs waste budget & block merges → drove #3836, #3841.
- **Linux distro users** (Fedora, Debian/Ubuntu): `setup.sh` breaks on system Node → #3844.
- **Providers behind NAT/firewall**: Need GitHub without webhook → #2301 polling mode.
- **Multi-gateway operators**: Want to switch gateway without re-authenticating providers → #3818.
- **Agent-runner integrators**: Providers dropping final-text envelopes break tools-only groups → #3781.

Satisfaction signal: **Low visibility** — no 👍/comments suggests either internal team usage or friction in public contribution.

---

## 8. Backlog Watch (Stale & Important)
| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#2301](https://github.com/nanocoai/nanoclaw/pull/2301) `feat(add-github): polling mode` | 4.5 months | Enables GitHub for air-gapped/NAT environments; embedded adapter = zero infra | Large scope, needs review bandwidth |
| [#2634](https://github.com/nanocoai/nanoclaw/pull/2634) `feat: add-paws4claws skill` | 3.5 months | AWS credential proxy for agents; demonstrates mount-from-outside pattern | Niche, low reviewer interest |
| [#3196](https://github.com/nanocoai/nanoclaw/pull/3196) `Fix/add mount readonly` | 1.5 months | Security hardening for container mounts | Cross-area (containers, CLI, security, skills) |
| [#2681](https://github.com/nanoclaw/nanoclaw/pull/2681) `fix(service): skip linger on per-home-encrypted` | 3.5 months | Unblocks systemd user services on encrypted homedirs | Platform-specific, needs testing |
| [#3156](https://github.com/nanocoai/nanoclaw/pull/3156) `fix(agent-runner): carry channel attachments as structured parts` | 1.5 months | Correctness for multimodal providers | Requires provider coordination |

**Maintainer action needed**: Triage #2301 (high user value) and #3196 (security). Consider labeling "help wanted" for #2634, #2681.

---

*Digest generated from GitHub data as of 2026-09-17. All links point to nanocoai/nanoclaw repository.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-09-17

## 1. Today's Overview
NullClaw showed minimal public activity in the last 24 hours: one issue was closed (#999) and no pull requests or releases were recorded. The closed issue explored a strategic architectural direction—investigating whether to fork *litter*’s cross-platform mobile GUI (Swift/Kotlin over a shared Rust UniFFI core) into the `human-guard-rail` Android app to serve as a NullClaw client. With zero open issues, PRs, or releases today, the project appears to be in a quiet maintenance or planning phase rather than active feature development.

## 2. Releases
No new releases published today.

## 3. Project Progress
No pull requests were merged or closed today. The sole closed issue (#999) was a research spike, not a code change, so no features or fixes advanced in the repository itself.

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Summary |
|------|------|----------|-----------|---------|
| [#999](https://github.com/nullclaw/nullclaw/issues/999) | Issue (CLOSED) | 1 | 0 | **Explore forking litter’s mobile GUI into human-guard-rail as a NullClaw client** — Author proposes adopting *litter*’s UniFFI-based Rust core + thin native UI pattern for `human-guard-rail` (currently plain Android/Gradle) to create a mobile NullClaw client talking to Codex/Local Studio servers. Closed after initial discussion; no decision recorded. |

**Underlying need:** The team is evaluating a proven mobile agentic-coding client architecture to accelerate NullClaw’s mobile presence, signaling intent to expand beyond desktop/web.

## 5. Bugs & Stability
No bugs, crashes, or regressions reported today.

## 6. Feature Requests & Roadmap Signals
- **Mobile client via UniFFI architecture** (from #999): Strongest signal. If pursued, the next version could introduce a Rust core shared across iOS/Android with native Swift/Kotlin UIs, enabling NullClaw on mobile with Codex/Local Studio connectivity.  
- **No other feature requests surfaced today.**

## 7. User Feedback Summary
No direct user feedback (pain points, use cases, satisfaction) captured in today’s activity. The single closed issue reflects internal architectural exploration, not external user input.

## 8. Backlog Watch
No long-unanswered issues or PRs requiring maintainer attention are visible in today’s data set. The only recent item (#999) was closed same-day.

---

*Data source: GitHub API for nullclaw/nullclaw (issues, PRs, releases) — 2026-09-16 to 2026-09-17.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-17

## 1. Today's Overview
LobsterAI shows **high maintenance velocity** with **28 items closed in the last 24 hours** (9 issues + 19 PRs), indicating a focused cleanup sprint. All 9 issues were marked `[stale]` and closed on 2026-09-16, suggesting automated stale-bot enforcement or a deliberate backlog grooming pass. Four fresh PRs (#2688–#2691) landed on 2026-09-16/17 addressing OpenClaw plugin loading, repair snapshots, schema migration, and auth proxy cooldowns — signaling active work on the OpenClaw integration layer. No new releases published; the project appears in a **stabilization & technical-debt reduction phase** between versions.

---

## 2. Releases
**No new releases in the last 24 hours.** The latest version remains unpublished in this window.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Area | Summary | Link |
|----|------|---------|------|
| **#2691** | `docs`, `openclaw` | **Fix Feishu/Lark native plugin loading** — resolves `ReferenceError: exports is not defined` in ES module scope caused by mixed CJS/ESM artifacts in `@larksuite/openclaw-lark@2026.7.16`. Fixes channel registration failure on macOS native load path. | [#2691](https://github.com/netease-youdao/LobsterAI/pull/2691) |
| **#2690** | `renderer`, `main`, `openclaw`, `cowork` | **Repair snapshot rollback & agent media migration** — adds stage-tracked repair (preparation/snapshot/doctor/config/gateway), pre-repair snapshot restore, shared error-resolution service, and dedicated UI state for failed Quick Repair. | [#2690](https://github.com/netease-youdao/LobsterAI/pull/2690) |
| **#2689** | `main`, `openclaw` | **Migrate shared state schema before startup repair** — introduces prepare-startup compatibility mode that backs up & migrates OpenClaw SQLite schema ahead of Doctor/config repair, removing dependency on readable legacy config. | [#2689](https://github.com/netease-youdao/LobsterAI/pull/2689) |
| **#2688** | `renderer`, `docs`, `main`, `auth` | **Bypass LobsterAI proxy credential cooldowns** — exempts managed provider from 5-hour OpenClaw credential cooldown triggered by upstream auth/billing failures; distinguishes service failures from user-config errors. | [#2688](https://github.com/netease-youdao/LobsterAI/pull/2688) |
| **#1130** | `api` | **Fix Anthropic SSE streaming parser** — adds line-buffering (`sseBuffer`) to prevent JSON parse failures when `data:` lines split across chunks; matches OpenAI path behavior. | [#1130](https://github.com/netease-youdao/LobsterAI/pull/1130) |
| **#1125** | `cowork` | **Full-text session search with keyword highlighting** — extends search beyond titles to message content; shows contextual snippets (±60 chars), multi-keyword highlighting with longest-match priority. | [#1125](https://github.com/netease-youdao/LobsterAI/pull/1125) |
| **#1122** | `renderer` | **Remove spurious Table top/bottom margins** — strips Tailwind `margin-top/bottom` on table elements; fixes unexplained whitespace. | [#1122](https://github.com/netease-youdao/LobsterAI/pull/1122) |
| **#1121** | `cowork` | **Retry button on error sessions** — adds error banner with “Retry” that re-sends last user message via `continueSession`; hidden during streaming or when no user message exists. | [#1121](https://github.com/netease-youdao/LobsterAI/pull/1121) |
| **#1119** | `cowork` | **Keyboard shortcuts for permission modal** — `Enter` = Approve (disabled for `destructive` danger level or incomplete inputs), `Escape` = Deny; ignores key events inside text inputs. | [#1119](https://github.com/netease-youdao/LobsterAI/pull/1119) |
| **#1113** | `openclaw` | **Flush deferred config sync when gateway workloads drain** — immediately syncs OpenClaw config after cowork turns/cron jobs finish, avoiding file-watcher reload mid-work. | [#1113](https://github.com/netease-youdao/LobsterAI/pull/1113) |
| **#1108** | `scheduledTask` | **Reentrancy guard & ghost-event fix for `pollOnce()`** — adds `pollInFlight` flag to skip concurrent polls; `pollGeneration` counter invalidates stale intervals after `stopPolling()`. | [#1108](https://github.com/netease-youdao/LobsterAI/pull/1108) |
| **#1106** | `scheduledTask` | **Fix DingTalk scheduled-task notification routing** — passes prefix-stripped `delivery.to` to `primeConversationReplyRoute()` (was passing raw `direct:`/`group:` prefixed ID). | [#1106](https://github.com/netease-youdao/LobsterAI/pull/1106) |
| **#1103** | `settings` | **Docker sandbox readiness probe & status UI** — read-only `docker info` probe (12s timeout) surfaces daemon availability for sandbox tool runs without changing execution mode. | [#1103](https://github.com/netease-youdao/LobsterAI/pull/1103) |
| **#1101** | `cowork` | **Fix cross-provider model-switch race** — awaits `syncOpenClawConfig()` (which restarts gateway on API key change) before allowing new messages; eliminates “model service call failed” on immediate send. | [#1101](https://github.com/netease-youdao/LobsterAI/pull/1101) |
| **#1100** | `cowork` | **Per-conversation async mutex for IM messages** — serializes `processMessage()` per IM conversation via `withConversationLock()`; prevents duplicate session creation & message loss. | [#1100](https://github.com/netease-youdao/LobsterAI/pull/1100) |
| **#1090** | `cowork` | **CoworkRunner reentrancy guard** — per-session `sessionRunPromise` map serializes `startSession`/`continueSession`; prevents stream corruption & duplicate messages under concurrent calls. | [#1090](https://github.com/netease-youdao/LobsterAI/pull/1090) |
| **#1127** | `mcp` | **Cancel force-close timer in MCP `stop()`** — stores `setTimeout` ID and clears on clean shutdown; prevents stale timer from closing a newly started server. | [#1127](https://github.com/netease-youdao/LobsterAI/pull/1127) |
| **#1138** | `cowork` | **Tool error highlighting + jump-to-latest button** — failed tool calls (`metadata.isError`) render with red background/border; “Jump to latest” scrolls to newest message. | [#1138](https://github.com/netease-youdao/LobsterAI/pull/1138) |
| **#1102** | `scheduledTask` | **Tooltip on enable/disable toggle** — adds `title` with i18n keys (“click to enable/disable”) for status-switch affordance. | [#1102](https://github.com/netease-youdao/LobsterAI/pull/1102) |

**Theme:** Concurrency hardening (IM, CoworkRunner, cron), OpenClaw lifecycle robustness (repair, schema, config sync, plugin load), and UX polish (search, retry, keyboard, error visibility).

---

## 4. Community Hot Topics
All 9 issues closed today were `[stale]` with **0 reactions and only 2–3 comments each** — no organic community heat. The most discussed (3 comments each):

| Issue | Topic | Comments | Link |
|-------|-------|----------|------|
| **#1112** | Table component mysterious top/bottom whitespace | 3 | [#1112](https://github.com/netease-youdao/LobsterAI/issues/1112) |
| **#1096** | MD→PDF uses external service, opens 3 tabs, injects paywall | 2 | [#1096](https://github.com/netease-youdao/LobsterAI/issues/1096) |
| **#1099** | IM concurrent message race → duplicate sessions & lost replies | 2 | [#1099](https://github.com/netease-youdao/LobsterAI/issues/1099) |

**Analysis:** Low comment counts + `[stale]` label suggest these were **aged reports auto-closed**, not active community debates. The real “hot” work is in the **fresh PRs (#2688–#2691)** — maintainers driving OpenClaw stability.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue / PR | Description | Fix Status |
|----------|------------|-------------|------------|
| **Critical** | [#1099](https://github.com/netease-youdao/LobsterAI/issues/1099) / [#1100](https://github.com/netease-youdao/LobsterAI/pull/1100) | IM message concurrency → duplicate cowork sessions + message loss | ✅ Fixed (per-conversation mutex) |
| **Critical** | [#1089](https://github.com/netease-youdao/LobsterAI/pull/1090) (ref) / [#1090](https://github.com/netease-youdao/LobsterAI/pull/1090) | `CoworkRunner` reentrancy corrupts streams & duplicates messages | ✅ Fixed (per-session promise queue) |
| **High** | [#1107](https://github.com/netease-youdao/LobsterAI/issues/1107) / [#1108](https://github.com/netease-youdao/LobsterAI/pull/1108) | `pollOnce()` reentrancy + ghost events after `stopPolling()` | ✅ Fixed (`pollInFlight` + `pollGeneration`) |
| **High** | [#1105](https://github.com/netease-youdao/LobsterAI/issues/1105) / [#1106](https://github.com/netease-youdao/LobsterAI/pull/1106) | DingTalk scheduled-task notifications never delivered (prefixed `conversationId`) | ✅ Fixed (strip prefix before routing) |
| **High** | [#1101](https://github.com/netease-youdao/LobsterAI/pull/1101) | Cross-provider model switch → immediate send fails (gateway restart race) | ✅ Fixed (await config sync) |
| **Medium** | [#1124](https://github.com/netease-youdao/LobsterAI/issues/1124) | “Lobster AI cannot close” popup on fresh install after clean exit | ❌ **No fix PR linked** (stalled) |
| **Medium** | [#1139](https://github.com/netease-youdao/LobsterAI/issues/1139) | New same-name agent doesn’t load task records until switch-away/back | ❌ **No fix PR linked** (stalled) |
| **Medium** | [#922](https://github.com/netease-youdao/LobsterAI/pull/1130) (ref) / [#1130](https://github.com/netease-youdao/LobsterAI/pull/1130) | Anthropic SSE parser loses chunks on line splits | ✅ Fixed (line buffering) |
| **Low** | [#1112](https://github.com/netease-youdao/LobsterAI/issues/1112) / [#1122](https://github.com/netease-youdao/LobsterAI/pull/1122) | Table spurious vertical margins | ✅ Fixed (Tailwind config) |
| **Low** | [#1096](https://github.com/netease-youdao/LobsterAI/issues/1096) | MD→PDF via external service: 3 tabs, paywall UI | ❌ **No fix PR linked** (stalled) |

**Stalled bugs needing attention:** #1124 (installer false alarm), #1139 (agent switch state sync), #1096 (PDF export UX).

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue / PR | Status | Likelihood for Next Version |
|---------|------------|--------|-----------------------------|
| **Full-text session search + keyword highlights** | [#1125](https://github.com/netease-youdao/LobsterAI/pull/1125) | ✅ Merged | **High** — already in main |
| **Retry button on errored sessions** | [#1120](https://github.com/netease-youdao/LobsterAI/issues/1120) / [#1121](https://github.com/netease-youdao/LobsterAI/pull/1121) | ✅ Merged | **High** — already in main |
| **Keyboard shortcuts (Enter/Esc) for permission modal** | [#1117](https://github.com/netease-youdao/LobsterAI/issues/1117) / [#1119](https://github.com/netease-youdao/LobsterAI/pull/1119) | ✅ Merged | **High** — already in main |
| **Docker sandbox readiness probe** | [#1103](https://github.com/netease-youdao/LobsterAI/pull/1103) | ✅ Merged | **High** — already in main |
| **Repair snapshot rollback & stage tracking** | [#2690](https://github.com/netease-youdao/LobsterAI/pull/2690) | ✅ Merged | **High** — already in main |
| **Pre-startup schema migration** | [#2689](https://github.com/netease-youdao/LobsterAI/pull/2689) | ✅ Merged | **High** — already in main |
| **Proxy credential cooldown bypass** | [#2688](https://github.com/netease-youdao/LobsterAI/pull/2688) | ✅ Merged | **High** — already in main |
| **Tool error highlighting + jump-to-latest** | [#1138](https://github.com/netease-youdao/LobsterAI/pull/1138) | ✅ Merged | **High** — already in main |

**Prediction:** Next release will be a **stability/UX polish drop** — all major merged features are merged; remaining gaps are the 3 stalled bugs above.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Installer false positive** — “Lobster AI cannot close” on clean machine | [

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-17

## 1. Today's Overview
Moltis shows steady maintenance activity with **5 total updates** across issues and PRs in the last 24 hours. The project closed one long-standing bug (#1246, open since August) and merged a major feature PR (#926) that sat in review for nearly 5 months. Two new feature PRs (#1270, #1272) and one critical bug report (#1271) were opened yesterday, indicating active development on sandbox hardening, build performance, and MCP resilience. No new release was cut.

## 2. Releases
**No new releases** published in the last 24 hours. The latest version remains **20260913.02** (referenced in issue #1271).

## 3. Project Progress
| PR | Status | Description | Impact |
|----|--------|-------------|--------|
| [#926](https://github.com/moltis-org/moltis/pull/926) | **Merged/Closed** | Adds five slash commands (`/btw`, `/fast`, `/insights`, `/steer`, `/queue`) + auxiliary model config scaffolding. Inspired by Hermes Agent feature analysis. | **High** — Expands interactive UX significantly; introduces ephemeral side-questions, fast-mode, insights, steering, and queue inspection. |
| [#1246](https://github.com/moltis-org/moltis/issues/1246) | **Closed** (bug) | "Can't run on sandbox after a node is added" — fixed via related changes (likely in sandbox/node logic). | **Medium** — Removes a regression blocking sandbox use after graph mutations. |
| [#1270](https://github.com/moltis-org/moltis/pull/1270) | **Open** | BuildKit cache mounts for Cargo target dir & registry; adds image-build script. Cold builds now incremental. | **High (dev velocity)** — Cuts CI/local rebuild times dramatically. |
| [#1272](https://github.com/moltis-org/moltis/pull/1272) | **Open** | Per-agent sandbox knobs: `mounts`, `run_as` (uid:gid), `force` (mandatory sandbox). Threaded through agent presets. | **High (security/ops)** — Enables fine-grained isolation per agent; supports compliance & least-privilege deployments. |

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#1271](https://github.com/moltis-org/moltis/issues/1271) — *MCP server startup failure = permanent stop; lost session kills all future calls* | 0 comments, 0 👍, but **critical severity** (data loss / unrecoverable state) | **Resilient MCP lifecycle**: Users need automatic retry/backoff on startup failure and session recovery (reconnect, re-auth) so transient network/container glitches don’t brick the integration. |
| [#926](https://github.com/moltis-org/moltis/pull/926) — *5 new slash commands + aux model config* | Long review cycle (Apr → Sep), now merged | **Richer chat UX & model routing**: Community wants quick, tool-free side-queries (`/btw`), speed modes (`/fast`), observability (`/insights`, `/queue`), and steering (`/steer`) — plus a pluggable auxiliary model for low-cost tasks. |
| [#1272](https://github.com/moltis-org/moltis/pull/1272) — *Per-agent sandbox mounts / run_as / force* | Fresh PR, 0 comments | **Multi-tenant / compliance sandboxing**: Operators need to bind host dirs, drop privileges, and enforce sandbox per agent without global config. |

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical** | [#1271](https://github.com/moltis-org/moltis/issues/1271) — Remote MCP server fails at startup → never retried; lost session terminates all subsequent calls | **Open** (filed 2026-09-16) | No fix PR yet. Health monitor (`mcp_health.rs`) only restarts on state *change*, not on initial failure. Session loss is fatal. |
| **Medium** | [#1246](https://github.com/moltis-org/moltis/issues/1246) — Sandbox broken after node added | **Closed** (2026-09-16) | Likely fixed as side-effect of sandbox/node refactors; no dedicated fix PR linked. |

> **Note**: #1271 is a **regression risk for any production MCP deployment** — a single container crash or network blip permanently disables that server until manual restart.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Per-agent sandbox isolation** (`mounts`, `run_as`, `force`) | [PR #1272](https://github.com/moltis-org/moltis/pull/1272) | **High** — PR is complete, addresses security/compliance, minimal surface area. |
| **Build caching / faster image builds** | [PR #1270](https://github.com/moltis-org/moltis/pull/1270) | **High** — Pure DevEx win; already scripted & tested. |
| **MCP resilience (retry, session recovery)** | [Issue #1271](https://github.com/moltis-org/moltis/issues/1271) | **Medium-High** — Critical bug; likely to spawn a fix PR quickly. |
| **Auxiliary model config & slash-command framework** | [PR #926](https://github.com/moltis-org/moltis/pull/926) (merged) | **Done** — Foundation landed; expect follow-ups for more commands / model routing. |

## 7. User Feedback Summary
- **Pain point**: MCP integration is **brittle** — startup failure = permanent outage; session loss = total failure (#1271). Users cannot rely on remote MCP servers in production without manual babysitting.
- **Pain point**: Sandbox **breaks after graph changes** (#1246) — now fixed, but indicates fragile sandbox/node lifecycle coupling.
- **Desire**: **Finer sandbox control per agent** (#1272) — multi-user/hosted environments need per-agent UID/GID, bind mounts, and mandatory sandbox enforcement.
- **Desire**: **Faster iteration** — 5-month PR cycle (#926) suggests review bandwidth constraints; build caching (#1270) directly addresses developer friction.
- **Positive**: Merged slash-command suite (#926) shows appetite for **richer, lower-latency chat interactions** (ephemeral questions, fast mode, queue inspection).

## 8. Backlog Watch
| Item | Stale Since | Why It Matters |
|------|-------------|----------------|
| [#926](https://github.com/moltis-org/moltis/pull/926) (now merged) | 2026-04-29 | **5-month review latency** — signals maintainer bandwidth bottleneck. Future large PRs may stall similarly. |
| [#1271](https://github.com/moltis-org/moltis/issues/1271) | 2026-09-16 (new) | **Critical MCP bug with no fix PR** — should be triaged immediately; blocks production MCP use. |
| [#1270](https://github.com/moltis-org/moltis/pull/1270) | 2026-09-15 | Build-speed PR — low risk, high value; should merge quickly to unblock CI. |
| [#1272](https://github.com/moltis-org/moltis/pull/1272) | 2026-09-16 | Security/compliance feature — needs security review but design is clean. |

---

**Health Indicator**: 🟡 **Caution** — Active development on high-value features (sandbox, build, UX), but **critical MCP reliability gap** (#1271) and **review latency** (#926) suggest maintainer capacity is stretched. Next release should prioritize #1271 fix + merge #1270/#1272 to restore confidence.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-17

---

## 1. Today's Overview

CoPaw shows **high velocity** with 58 total updates (12 issues, 46 PRs) in the last 24 hours. The project is in active stabilization mode: 17 PRs were merged/closed today, addressing critical memory leaks, SSE streaming failures, OAuth token refresh bugs, and packaging regressions. No new release was cut, but multiple fixes target v2.2.x pain points. Community engagement is healthy — several first-time contributors landed fixes, and a major "Hub" feature (model gateway + governance) is under review.

---

## 2. Releases

**No new releases today.** The latest published version remains v2.2.1. Several merged PRs (#7816, #7100, #7351, #7803, #7057) contain fixes that would typically ship in a patch release (v2.2.2).

---

## 3. Project Progress — Merged / Closed PRs Today

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#7816](https://github.com/agentscope-ai/QwenPaw/pull/7816) | **Bug fix** | Force-include console channel in PyInstaller bundle — fixes Tauri desktop app failing to start | **Critical**: unblocks packaged desktop builds |
| [#7100](https://github.com/agentscope-ai/QwenPaw/pull/7100) | **Bug fix** | Repair TUI session start in packaged builds (argv construction) | **Critical**: restores `qwenpaw tui` in desktop bundle |
| [#7351](https://github.com/agentscope-ai/QwenPaw/pull/7351) | **Bug fix** | Route Agent source uploads correctly; isolate Profile files | **High**: fixes Files workspace navigation & upload routing |
| [#7803](https://github.com/agentscope-ai/QwenPaw/pull/7803) | **CI** | Enable pytest-timeout; raise e2e shard timeout to 60 min | **Medium**: stabilizes flaky e2e pipeline |
| [#7057](https://github.com/agentscope-ai/QwenPaw/pull/7057) | **Bug fix** | Add user-local bin dirs to subprocess PATH (systemd/Docker) | **Medium**: restores `gh`, `cmake`, `lark-cli` etc. in daemon mode |
| [#7742](https://github.com/agentscope-ai/QwenPaw/pull/7742) | **Feature** | Creator plugin 1.3.0: OpenCode Zen/Go endpoints, parallel asset understanding, style-anchor versioning, multi-episode hardening | **High**: major plugin upgrade (already squashed upstream) |

> **Note**: #7823 appears to be a duplicate/re-submission of #7742 (both "Creator 1.3.0").

---

## 4. Community Hot Topics — Most Active Issues & PRs

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318) | Issue (enhancement) | 7 | **Per-conversation model override** — users want agent default model but per-chat override. PR [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) (open since Jul) implements this; still in review. |
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | Issue (bug) | 5 | **Memory exhaustion** — three compounding leak paths (~1 MB/s growth → OOM). No fix PR yet; blocker for production deployments. |
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | Issue (bug) | 4 | **Console lazy-load recovery** — failed chunk load leaves UI stuck on error screen; retry mechanism broken. |
| [#7814](https://github.com/agentscope-ai/QwenPaw/issues/7814) + [#7813](https://github.com/agentscope-ai/QwenPaw/issues/7813) | Issues (bug) | 3 / 2 | **SSE null-payload freeze** — backend emits bare `null` frame; frontend generator crashes silently. Fix PR [#7820](https://github.com/agentscope-ai/QwenPaw/pull/7820) open. |
| [#7779](https://github.com/agentscope-ai/QwenPaw/pull/7779) | PR (feat) | — | **Hub: Model Gateway + Governance** — org-level model publishing, vaulted credentials, usage dashboard. Large architectural addition; likely next minor version centerpiece. |

**Underlying theme**: Users are hitting **scale & reliability walls** (memory, streaming, packaging) while asking for **multi-tenant / org features** (per-chat models, Hub gateway, i18n).

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) Memory exhaustion (3 leak paths, ~1 MB/s) | Open, no fix PR | — |
| **Critical** | [#7818](https://github.com/agentscope-ai/QwenPaw/issues/7818) UI freezes, very high memory (user report + screenshot) | Open, no fix PR | — |
| **High** | [#7813](https://github.com/agentscope-ai/QwenPaw/issues/7813) / [#7814](https://github.com/agentscope-ai/QwenPaw/issues/7814) Console stream freeze on bare `null` SSE frame | Open | [#7820](https://github.com/agentscope-ai/QwenPaw/pull/7820) (backend half) |
| **High** | [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) Console lazy-page load failure → permanent error screen | Open | — |
| **High** | [#7821](https://github.com/agentscope-ai/QwenPaw/issues/7821) MCP driver discards refreshed OAuth `access_token` | Open | [#7822](https://github.com/agentscope-ai/QwenPaw/pull/7822) |
| **Medium** | [#7812](https://github.com/agentscope-ai/QwenPaw/issues/7812) Slash commands post-startup target fallback session (empty memory) | Open | — |
| **Medium** | [#7817](https://github.com/agentscope-ai/QwenPaw/issues/7817) Feishu/Lark p2p 230101 error + missing file events | Open | — |
| **Medium** | [#6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) Duplicate tool result when MCP returns `structuredContent` | Open (Under Review) | #6969 itself |

> **Observation**: Memory/streaming bugs dominate. The project has **three concurrent critical memory issues** (#7722, #7818, plus historic #7222 referenced in #7722) suggesting systemic resource management debt.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Per-session model override** | [#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318) + PR [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | **High** — PR exists, first-time contributor, under review since Jul; aligns with Hub model gateway |
| **Hub: Model Gateway + Member Governance + Usage Dashboard** | PR [#7779](https://github.com/agentscope-ai/QwenPaw/pull/7779) | **High** — large, active PR; org/enterprise focus |
| **Custom provider configuration in single dialog** | PR [#7826](https://github.com/agentscope-ai/QwenPaw/pull/7826) | **High** — UX polish, ready today |
| **i18n for tool approval cards / notifications** | [#7809](https://github.com/agentscope-ai/QwenPaw/issues/7809) | **Medium** — clear scope, no PR yet |
| **Context ring shows real measured context size** | PR [#7811](https://github.com/agentscope-ai/QwenPaw/pull/7811) | **Medium** — first-time contributor, addresses [#7810](https://github.com/agentscope-ai/QwenPaw/issues/7810) confusion |
| **Clean plugin unload / rollback-safe hot reload** | PR [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | **Medium** — architectural, open since Sep 4 |
| **Sidebar redesign for small screens (13–14")** | PR [#7788](https://github.com/agentscope-ai/QwenPaw/pull/7788) | **Medium** — UX, related to #7739 |

**Prediction**: v2.3 will likely ship **Hub gateway**, **per-session models**, **custom provider UX**, and the **Creator 1.3** plugin. Memory fixes must land first.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Memory leaks make long-running agents unusable** | [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) (1 MB/s), [#7818](https://github.com/agentscope-ai/QwenPaw/issues/7818) (screenshot) | Production blockers; containers OOM |
| **Console streaming is fragile** | [#7813](https://github.com/agentscope-ai/QwenPaw/issues/7813), [#7814](https://github.com/agentscope-ai/QwenPaw/issues/7814), [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | Chat freezes, requires full reload; erodes trust |
| **Context window management is opaque/broken** | [#7810](https://github.com/agentscope-ai/QwenPaw/issues/7810) — user sets 131k, sees 271k sent; compression not triggering | Users cannot predict costs or avoid truncation |
| **Desktop/Tauri packaging has regressions** | [#7816](https://github.com/agentscope-ai/QwenPaw/pull/7816), [#7100](https://github.com/agentscope-ai/QwenPaw/pull/7100) | Packaged app won't start / TUI broken |
| **OAuth tokens not refreshed on live MCP connections** | [#7821](https://github.com/agentscope-ai/QwenPaw/issues/7821) | Long-running MCP tools fail silently after token expiry |
| **Feishu/Lark integration has protocol gaps** | [#7817](https://github.com/agentscope-ai/QwenPaw/issues/7817) | Enterprise channel blocked (p2p 230101, missing file events) |
| **English-only approval UI** | [#7809](https://github.com/agentscope-ai/QwenPaw/issues/7809) | Non-English teams see raw English for high-risk tool prompts |

**Positive signals**: First-time contributors landing fixes (#7816, #7811, #7211, #5992); active triage by maintainers (multiple PRs merged same day).

---

## 8. Backlog Watch — Stale / High-Value Items Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) **Add per-session model overrides** | Open since **2026-07-12** (67 days) | Directly implements top-voted feature [#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318); first-time contributor; blocked on review |
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) **Prevent injected context from persisting** | Open since **2026-08-21** (27 days) | Data hygiene: injected context leaks into user-visible history; marked `ready-for-human-review` |
| [#6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) **Avoid duplicate tool result with MCP structuredContent** | Open since **2026-08-13** (35 days) | MCP interop

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-17

## 1. Today's Overview

ZeroClaw shows **exceptionally high development velocity** with 27 issues and 50 pull requests updated in the last 24 hours. The project is in active feature development and bug-fix mode with no releases today. Work is concentrated on **provider reliability (Anthropic/OpenAI-compatible), channel message serialization, security sandboxing, and ZeroCode UX**. A notable cluster of P1 bugs involves image-marker handling, streaming timeouts, and concurrent turn execution — all actively being addressed in open PRs. The backlog contains several long-running "in-progress" items (some since July) that remain unresolved, suggesting complex architectural work.

## 2. Releases

**No new releases today.** The project appears to be on a continuous-development cycle with changes landing directly on `master` via PRs.

## 3. Project Progress (Merged/Closed PRs Today)

Only **1 PR merged/closed** in the last 24h (from 50 updated). The merged PR is not explicitly listed in the data, but the high volume of open PRs indicates most work remains in review. Key PRs advancing toward merge:

| PR | Area | Status | Summary |
|----|------|--------|---------|
| [#10411](https://github.com/zeroclaw-labs/zeroclaw/pull/10411) | Channels (core) | Open, needs-author-action | **Serializes same-session messages** — new messages wait for in-flight turn to complete instead of starting parallel runs (addresses #10408) |
| [#10556](https://github.com/zeroclaw-labs/zeroclaw/pull/10556) | Runtime/Security | Open, needs-maintainer-review | **Honors allowed roots in macOS Seatbelt** — passes read/write root tiers, resolves symlinks |
| [#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) | Security/Launcher | Open, needs-maintainer-review | **Resolves host launchers before workspace cwd** — affects native, Docker, Firejail, Bubblewrap |
| [#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) | Security/Shell | Open, needs-author-action | **Implements RFC #7155 Phase 0+1** — unified tool permission policy & tiered approval (5 commits) |
| [#10894](https://github.com/zeroclaw-labs/zeroclaw/pull/10894) | Runtime/Anthropic | Open | **Normalizes image markers on `run_model_query` seam** — fixes bypass reported in #9882 |
| [#10860](https://github.com/zeroclaw-labs/zeroclaw/pull/10860) | Providers/Multimodal | Open | **Keeps non-image data-URI markers as text** — prevents false image promotion from tool results |
| [#10903](https://github.com/zeroclaw-labs/zeroclaw/pull/10903) | Multimodal/Anthropic | Open | **Keeps tool-result images live for current user turn** — fixes early normalization dropout |
| [#10916](https://github.com/zeroclaw-labs/zeroclaw/pull/10916) | Providers/Compatible | Open | **Forwards `reasoning_effort` through compatible providers** — opt-in passthrough for non-OpenAI reasoning models |

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) | Issue | 4 | **Document `nix run` / `cargo binstall` installation path** — UX gap for new users (open since Apr 2026) |
| [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) | Issue | 4 | **Parallel runs on same session** — duplicate work/replies when user sends message mid-turn (P1, in-progress via #10411) |
| [#9708](https://github.com/zeroclaw-labs/zeroclaw/issues/9708) | Issue | 4 | **Unbounded daemon stdout/stderr logs** — fixed files without rotation (in-progress since Aug) |
| [#9332](https://github.com/zeroclaw-labs/zeroclaw/issues/9332) | Issue | 4 | **Image-aware context budgeting** — context meter understates image-heavy requests then spikes >100% (in-progress since Jul) |
| [#10883](https://github.com/zeroclaw-labs/zeroclaw/issues/10883) | Issue | 3 | **Telegram media-group test flakiness** — times out under parallel CI job (P1, accepted) |
| [#10875](https://github.com/zeroclaw-labs/zeroclaw/issues/10875) | Issue | 2 | **Flaky Telegram tests block CI** — fails on unrelated PRs since Sep 11 (P1, in-progress) |

**Pattern:** Top issues are **runtime correctness bugs** (concurrency, image handling, log bounds) and **CI flakiness** — both blocking reliable releases. The 5-month-old install-doc issue (#5269) signals onboarding friction.

## 5. Bugs & Stability (Reported/Updated Today, Ranked by Severity)

| Severity | Issue | Component | Status | Fix PR |
|----------|-------|-----------|--------|--------|
| **S1 – Workflow Blocked** | [#10854](https://github.com/zeroclaw-labs/zeroclaw/issues/10854) | Provider (Anthropic) | In-progress | [#10860](https://github.com/zeroclaw-labs/zeroclaw/pull/10860), [#10903](https://github.com/zeroclaw-labs/zeroclaw/pull/10903) |
| **S1 – Workflow Blocked** | [#10875](https://github.com/zeroclaw-labs/zeroclaw/issues/10875) | Channel (Telegram/CI) | In-progress | — |
| **S2 – Degraded** | [#10908](https://github.com/zeroclaw-labs/zeroclaw/issues/10908) | Provider (image markers) | Blocked | — |
| **S2 – Degraded** | [#10884](https://github.com/zeroclaw-labs/zeroclaw/issues/10884) | Provider (streaming timeout) | In-progress | — |
| **S2 – Degraded** | [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) | Channel (core) | In-progress | [#10411](https://github.com/zeroclaw-labs/zeroclaw/pull/10411) |
| **S2 – Degraded** | [#10887](https://github.com/zeroclaw-labs/zeroclaw/issues/10887) | Agent/Vision gate | In-progress | — |
| **S2 – Degraded** | [#10912](https://github.com/zeroclaw-labs/zeroclaw/issues/10912) | Agent (streaming guard) | Open | — |
| **S2 – Degraded** | [#10923](https://github.com/zeroclaw-labs/zeroclaw/issues/10923) | Security/Sandbox | Blocked | — |
| **S2 – Degraded** | [#10924](https://github.com/zeroclaw-labs/zeroclaw/issues/10924) | Channel (voice routing) | Open | — |
| **S2 – Degraded** | [#10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926) | Tools (Matrix send) | Open | — |
| **S2 – Degraded** | [#10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922) | Channel (WhatsApp TTS) | Open | — |
| **S3 – Minor** | [#10805](https://github.com/zeroclaw-labs/zeroclaw/issues/10805) | CI (Windows liveness) | In-progress | — |
| **S3 – Minor** | [#10558](https://github.com/zeroclaw-labs/zeroclaw/issues/10558) | CI (Cranelift timeout) | In-progress | — |

**Critical cluster:** Image-marker handling across providers/tools/runtime (#10854, #10908, #10887, #10894, #10860, #10903, #10890) — 7 issues + 5 PRs in 48h. This is the **highest-risk area** for data corruption and silent failures.

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood for Next Version |
|----------|--------|----------------------------|
| [#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) | **Proactive token-budget context compaction** — currently only message-count trim; token-based trim inert (P1, parking-lot) | Medium — high architectural impact, marked parking-lot |
| [#10171](https://github.com/zeroclaw-labs/zeroclaw/issues/10171) | **Preserve provider profile semantics** — stop reducing `<family>.<alias>` to bare family (P2, parking-lot) | Medium — affects catalog, gateway, runtime |
| [#10878](https://github.com/zeroclaw-labs/zeroclaw/issues/10878) | **Unified ZeroCode dock** — combine Sessions/Queue/Plan into resizable dock (P2, in-progress) | High — UI polish, active work |
| [#10925](https://github.com/zeroclaw-labs/zeroclaw/issues/10925) | **Matrix `mirror` voice replies** — input-driven spoken replies (new, enhancement) | Low — niche channel feature |
| [#8766](https://github.com/zeroclaw-labs/zeroclaw/issues/8766) | **First-run E2E coverage** — quickstart, onboarding, doctor (P1, in-progress since Jul) | High — test infrastructure, near completion |
| [#9370](https://github.com/zeroclaw-labs/zeroclaw/issues/9370) | **ACP near-live JSON-RPC smoke test** — `deliver_file` through real runtime (P2, in-progress since Jul) | Medium — protocol compliance |

**Roadmap read:** Next version will likely ship **channel serialization (#10411)**, **Seatbelt fixes (#10556)**, **image-marker normalization suite**, and **ZeroCode dock unification**. Provider-profile semantics and token-budget compaction are deferred.

## 7. User Feedback Summary

**Pain points from issues:**
- **Installation UX**: "`cargo binstall zeroclaw` path undocumented" (#5269, 5 months open)
- **Concurrency surprise**: "Second message starts parallel run → duplicate reply" (#10408)
- **Image handling chaos**: Literal `[IMAGE:...]` in tool output promoted to malformed provider images (#10854, #10908)
- **Streaming timeouts**: "300s hard-coded idle timeout kills slow-first-token turns" (#10884)
- **CI unreliability**: Flaky Telegram tests block unrelated PRs (#10875, #10883)
- **Voice routing leaks**: `/stop` replies, WhatsApp TTS, Matrix send_via ignore `suppress_voice` (#10924, #10922, #10926)

**No explicit positive feedback** in recent issues — channel is bug-report heavy. The "good first issue" label on #5269 suggests maintainers want community help on docs.

## 8. Backlog Watch (Long-Unanswered / Stalled Important Items)

| Item | Age | Why It Matters | Blocked By |
|------|-----|----------------|------------|
| [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) | **5.5 months** | Install docs gap for primary distribution methods | Low priority (P2), good-first-issue — needs contributor |
| [#9332](https://github.com/zeroclaw-labs/zeroclaw/issues/9332) | **~2 months** | Image context budgeting — core cost/accuracy for multimodal | In-progress, complex accounting |
| [#9708](https://github.com/zeroclaw-labs/zeroclaw/issues/9708) | **~1.5 months** | Unbounded daemon logs → disk exhaustion risk | In-progress, log rotation design |
| [#8766](https://github.com/zeroclaw-labs/zeroclaw/issues/8766) | **~2.5 months** | First-run E2E coverage — prevents regressions in onboarding | In-progress, test infra |
| [#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) | **~1 week** | Token-budget compaction — critical for long contexts | Parking-lot, needs design decision |
| [#10171](https://github.com/zeroclaw-labs/zeroclaw/issues/10171) | **~1 month** | Provider profile identity loss — breaks multi-profile setups | Parking-lot, architectural |
| [#10265](https://github.com/zeroclaw-labs/zeroclaw/pull/10265) | **~3.5 weeks** | Principal-owned sessions (RFC 7141 stage 4) — security foundation | Stacked on 4 PRs, needs maintainer review |
| [#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) | **~2 weeks** | Shell V1 permission policy (RFC 7155) — major security feature | Needs author action, 5 commits |

**Maintainer attention needed:** The stacked security PRs (#10265, #10610, #10381, #10556) represent **foundational security work** that has been in review for 2–4 weeks. The image-marker normalization cluster needs a **coordinated merge strategy** to avoid partial fixes.

---

**Health Indicator:** 🟡 **High velocity, high bug density, security backlog** — The project is moving fast but accumulating critical-path bugs faster than they're resolved. The image-marker/provider cluster and CI flakiness are release blockers. Security RFC implementations are stalled in review. Recommend: prioritize merging #10411, #10556, #10860, #10903, #10894 as a batch; dedicate a sprint to CI stability (#10875, #10883, #10558); unblock security stack with focused reviews.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*