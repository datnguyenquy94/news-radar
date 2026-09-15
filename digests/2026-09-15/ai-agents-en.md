# OpenClaw Ecosystem Digest 2026-09-15

> Issues: 143 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-15 04:34 UTC

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

# OpenClaw Project Digest — 2026-09-15

## 1. Today's Overview
OpenClaw shows **exceptionally high development velocity** with 143 issues and 500 PRs updated in the last 24 hours (219 merged/closed). Zero new releases published. The project is in active stabilization mode: critical production bugs (memory leaks, message loss, zombie processes, event-loop blocking) dominate the open issue landscape, while maintainers are merging a large volume of targeted fixes, refactors, and infrastructure improvements. The ratio of closed-to-open issues (77:66) and merged-to-open PRs (219:281) suggests the backlog is being actively worked down, though several P1/P0 issues remain unresolved for months.

## 2. Releases
**No new releases today.** The last tagged release appears to be 2026.9.3 (referenced in issue #148614), which had an update failure (`runtime-verification-failed`). No changelog or migration notes available for today.

## 3. Project Progress (Merged/Closed PRs Today — 219)
Key merged/closed PRs (sample from top 30 by activity):

| PR | Area | Summary |
|----|------|---------|
| [#148664](https://github.com/openclaw/openclaw/pull/148664) | plugins/gateway | **Fix:** Load selected CLI backends when using built-in model APIs — resolves “Unknown CLI backend” regression (#148584). |
| [#140158](https://github.com/openclaw/openclaw/pull/140158) | agents | **Fix:** Reply authority falls back to direct preparation when captured reply operation is retired — closes regression #139847 (messages dropped during active reply run). |
| [#148772](https://github.com/openclaw/openclaw/pull/148772) | plugins/testing | **Chore:** Show config-read stages in inspection failures for better diagnosability. |
| [#148733](https://github.com/openclaw/openclaw/pull/148733) | scripts/testing | **Refactor:** Share ClawHub artifact assertions between plugin E2E commands. |
| [#148753](https://github.com/openclaw/openclaw/pull/148753) | memory-core | **Refactor:** Share recall-repair status details between CLI and dreaming reports. |
| [#147542](https://github.com/openclaw/openclaw/pull/147542) | logging/Windows | **Fix:** Orphaned `\\?\` path markers corrupting redacted Windows diagnostics (#147502). |
| [#137831](https://github.com/openclaw/openclaw/pull/137831) | gateway/Linux | **Fix:** Preserve literal paths in systemd service units (spaces/special chars) — compatibility risk flagged. |
| [#125027](https://github.com/openclaw/openclaw/pull/125027) | web-ui | **Fix:** Recover stale Control UI after gateway updates (protocol-mismatch refresh). |
| [#148290](https://github.com/openclaw/openclaw/pull/148290) | fleet/SQLite | **Perf:** Run registry operations in SQLite workers (off main thread). |
| [#148709](https://github.com/openclaw/openclaw/pull/148709) | scripts/gateway | **Refactor:** Move usage-pricing SQLite reads off Gateway thread. |
| [#148700](https://github.com/openclaw/openclaw/pull/148700) | gateway | **Improve:** Reduce message dedupe work as caches fill (Telegram/WhatsApp). |
| [#148774](https://github.com/openclaw/openclaw/pull/148774) | logging | **Refactor:** Reduce redaction capture overhead. |
| [#148754](https://github.com/openclaw/openclaw/pull/148754) | queue | **Fix:** Avoid repeated scans when cancelling backlogs (quadratic CPU). |
| [#148773](https://github.com/openclaw/openclaw/pull/148773) | sessions | **Improve:** Reuse compiled transcript metadata queries. |

**Theme:** Heavy focus on **gateway thread offloading**, **SQLite worker migration**, **message-path correctness**, **Windows/Linux compat**, and **test infrastructure hardening**. Many PRs are tagged `maintainer` + `ready for maintainer look`, indicating a structured review pipeline.

## 4. Community Hot Topics (Most-Commented Issues)
| Issue | Comments | 👍 | Core Problem | Underlying Need |
|-------|----------|----|--------------|-----------------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 40 | 1 | **Text between tool calls leaks to messaging channels** (Slack, iMessage, etc.) — internal narration/error text becomes visible user messages. | **Trust boundary enforcement**: users need strict separation between agent-internal output and user-facing channels. P1, open since Feb 2026. |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 30 | 1 | **Zombie process accumulation** from unreaped hook/tool children (`openclaw-hooks`, `bash`, `codex`) → runtime degradation. | **Resource hygiene**: long-running gateways must not leak OS resources. Regression, open since Jun 2026. |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 24 | 1 | **Gateway memory leak**: RSS 350 MB → 15.5 GB over 2–3 days → OOM kills → `launchd-handoff` restart loops. | **Production stability**: memory growth makes self-hosted gateways unreliable for multi-day uptime. Stale, P1, open since Jun 2026. |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 20 | 0 | **Synchronous persistence/transcript maintenance blocks Gateway event loop at scale**. | **Scalability**: event-loop latency spikes under load; needs async/offloaded persistence. Open since Aug 2026. |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | 19 | 1 | **Embedded prompt cache breaks** across room-event, policy, Responses boundaries — model sees changing tool inventory. | **Cache correctness**: prompt-cache invalidation logic misaligned with session boundaries. P2, open since Jul 2026. |
| [#139847](https://github.com/openclaw/openclaw/issues/139847) | 13 | 0 | **Regression (2026.9.2)**: message sent during active reply run dropped — “Reply operation has no active tool authority snapshot”. | **Message reliability**: concurrent inbound handling broken; fix PR [#140158](https://github.com/openclaw/openclaw/pull/140158) open. |
| [#80520](https://github.com/openclaw/openclaw/issues/80520) | 13 | 3 | **Telegram messages silently dropped** — no `sendMessage` logged, user never receives reply. | **Channel reliability**: Telegram integration has silent failure mode. Closed (stale), but 3 👍 suggests ongoing pain. |

**Pattern:** Top issues are **production-grade reliability bugs** (message loss, memory leaks, process leaks, event-loop blocking) affecting self-hosted operators. Several have been open 2–7 months with maintainer labels (`clawsweeper:needs-maintainer-review`) but no fix landed.

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? | Notes |
|----------|-------|--------|---------|-------|
| **P0 / Critical** | [#148614](https://github.com/openclaw/openclaw/issues/148614) Update failure: `runtime-verification-failed` (2026.9.3) | Closed | — | Release-blocking update failure on darwin/arm64; no details on root cause. |
| **P1 / Critical** | [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway memory leak → OOM crashes | Open (stale) | No | 15.5 GB RSS growth; kills gateway; triggers restart loops. **No fix PR after 3+ months.** |
| **P1 / Critical** | [#25592](https://github.com/openclaw/openclaw/issues/25592) Internal text leaks to user channels | Open | No | Security/UX boundary violation; affects Slack, iMessage, etc. **Open since Feb 2026.** |
| **P1 / Critical** | [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie process accumulation | Open | No | Unreaped children from hooks/tools; degrades runtime over time. |
| **P1 / Critical** | [#119720](https://github.com/openclaw/openclaw/issues/119720) Sync persistence blocks event loop | Open | No | Architectural; needs async rewrite. Partial fixes landed (#140231, #138984). |
| **P1 / Critical** | [#139847](https://github.com/openclaw/openclaw/issues/139847) Messages dropped during active reply run (regression 2026.9.2) | Open | **Yes**: [#140158](https://github.com/openclaw/openclaw/pull/140158) | Fix PR open, needs proof/review. High user impact. |
| **P1 / Security** | [#108395](https://github.com/openclaw/openclaw/issues/108395) Assistant generates fake “Human: [timestamp]” messages → self-authorization | Open | No | **Trust boundary violation**: model output re-enters context as user input, enabling unauthorized actions. |
| **P1 / Security** | [#92870](https://github.com/openclaw/openclaw/issues/92870) System event text leaked into user attribution during compaction | Closed (stale) | — | “Continue the OpenClaw runtime event.” injected as user message. |
| **P2 / High** | [#80520](https://github.com/openclaw/openclaw/issues/80520) Telegram silent message drop | Closed (stale) | — | 3 👍; may still affect users on older versions. |
| **P2 / High** | [#81567](https://github.com/openclaw/openclaw/issues/81567) GPT-4o agents exit after single text response (no tool loop) | Closed (stale) | — | Model-specific regression; may persist in some configs. |
| **P2 / High** | [#82070](https://github.com/openclaw/openclaw/issues/82070) CLI ~14s cold-start regression post-2026.5.12 | Closed (stale) | — | Pure CLI-side; gateway healthy. |
| **P2 / High** | [#133985](https://github.com/openclaw/openclaw/issues/133985) `deps.refreshOpenAICodexToken is not a function` — Codex auth refresh crash | Open | No | Breaks Codex inventory & openai-curated plugins (google-calendar, gmail). |
| **P2 / High** | [#104719](https://github.com/openclaw/openclaw/issues/104719) memory-wiki supplement ignores tool deadline | Open | No | Exhaustive fallback reparses all Markdown, ignores timeout. |

**Observation:** 4 of the top 7 P1 issues have **no fix PR** despite being open for months. The memory leak (#91588) and text-leak (#25592) are the most impactful unresolved bugs.

## 6. Feature Requests & Roadmap Signals
| Issue | Area | Signal | Likelihood for Next Version |
|-------|------|--------|-----------------------------|
| [#87584](https://github.com/openclaw/openclaw/issues/87584) | Group room-event steering config | Make steering configurable (currently hard-disabled for room events) | Medium — clear scope, `fix-shape-clear` + `queueable-fix` labels |
| [#78367](https://github.com/openclaw/openclaw/issues/78367) | Compaction rate-limit guardrail | Add `minIntervalSeconds` + `maxPerHour` to prevent compaction storms | High — 4 👍, concrete spec, stability impact |
| [#77447](https://github.com/openclaw/openclaw/issues/77447) | Memory hygiene doctor/sanitizer | Configurable sanitizer for unsafe persisted artifacts (paths, URLs, internal leakage) | Medium — long-term hygiene, not urgent |
| [#60602](https://github.com/openclaw/openclaw/issues/60602) | Per-agent Bedrock `requestMetadata` | Cost attribution for multi-agent Bedrock deployments | Low — niche, `off-meta tidepool` label |
| [#77567](https://github.com/openclaw/openclaw/issues/77567) | “Uncle Jim mode” for family agents | Isolated mode surfacing agenda/errors/uncertainty for non-technical users | Low — product exploration |
| [#80989](https://github.com/openclaw/openclaw/issues/80989) | `/progress` command toggle | Toggle tool-call progress in streaming preview (mobile UX) | Medium — UX polish, `P3` |
| [#81737](https://github.com/openclaw/openclaw/issues/81737) | `openclaw agent --json` stdout event stream | Real-time event stream for external integrators | Medium — CLI/integration ergonomics |
| [#81707](https://github.com/openclaw/openclaw/issues/81707) | Custom Control UI nav links | Add self-hosted service links to Control UI sidebar | Low — UI customization |
| [#7406](https://github.com/openclaw/openclaw/issues/7406) | Human-readable Telegram topic names | Show `Telegram : GroupName : TopicName` vs raw keys | Low — UX polish, old issue (Feb 2026) |

**Predictions:** Compaction rate-limiting (#78367) and group steering config (#87584) have

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source Personal AI Assistant / Agent Ecosystem (2026-09-15)

---

## 1. Ecosystem Overview

The open-source personal AI agent landscape is bifurcated into **high-velocity core platforms** (OpenClaw, ZeroClaw, CoPaw, NanoClaw, NanoBot, LobsterAI) shipping daily fixes and architectural improvements, and **specialized or early-stage projects** (PicoClaw, Hermes, NullClaw, IronClaw, ZeptoClaw, Moltis) operating at lower cadence with narrower focus. A clear pattern emerges: **production hardening dominates over new features** across the top tier — memory leaks, message loss, process hygiene, event-loop blocking, and secrets management are the shared battleground. Projects backed by identifiable organizations (NousResearch, NetEase, AgentScope, HKUDS) show more structured review pipelines; community-driven efforts (NullClaw, PicoClaw) rely on contributor goodwill and exhibit longer integration latencies. No project cut a release today, but several (Hermes v0.21.3, OpenClaw 2026.9.3) have recent tags, indicating **regular but unsynchronized release cadences**.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed (24h) | Latest Release | Health Score* |
|---------|---------------------|-------------------|------------------------|----------------|---------------|
| **OpenClaw** | 143 | 500 | 219 | 2026.9.3 (failed verification) | 🟡 High velocity, critical P1 backlog |
| **ZeroClaw** | 6 | 50 | 11 | Not in data | 🟢 Very high velocity, stacked PRs |
| **CoPaw (QwenPaw)** | 15 | 50 | 11 | v2.2.1 (prior) | 🟡 High velocity, critical execution bugs |
| **NanoClaw** | 6 | 50 | 38 | Not in data | 🟢 High velocity, operational hardening |
| **NanoBot** | 6 | 25 | 13 | Not in data | 🟢 High maintenance, provider resilience |
| **LobsterAI** | 1 | 27 | 12 | Not in data | 🟡 Major dep upgrades (React 19, Vite 8), stale IM bug |
| **Hermes Agent** | 1 | 50 | 0 | v0.21.3 (2026-09-14) | 🟡 Review bottleneck (50 open PRs, 0 merges) |
| **PicoClaw** | 1 | 3 | 2 | Nightly 0.3.1 | 🟢 Steady sprint execution, ARM64 QQ blocker |
| **NullClaw** | 4 | 0 | 0 | None | 🔴 Low code velocity, active ideation |
| **IronClaw** | 1 | 1 | 0 | None | 🔵 Observability/maintenance phase |
| **ZeptoClaw** | 1 (closed) | 1 | 1 | None | 🟢 Stable, CI-only fix |
| **Moltis** | 0 | 0 | 0 | None | 🔴 Dormant / internal-only |

*Health Score: 🟢 Healthy velocity & merge rate | 🟡 High velocity with blockers | 🔵 Low activity, focused | 🔴 Stalled or minimal code movement*

---

## 3. OpenClaw's Position

**Advantages vs Peers**
- **Scale of contribution**: 500 PRs/24h dwarfs all others (next: 50). Indicates largest active contributor base and/or automated bot activity.
- **Architectural scope**: Covers gateway, memory-core, fleet, plugins, sessions, queue — a full-stack agent runtime, not just a client or skill layer.
- **Production battle-testing**: Issues like 15 GB memory leaks, zombie processes, and message loss reflect real multi-day self-hosted deployments — problems smaller projects haven't hit yet.

**Technical Approach Differences**
- **Thread-offload + SQLite workers** as primary scalability lever (vs. NanoClaw's DB pragmas, Hermes' cron redesign, CoPaw's compaction visualizers).
- **Gateway-centric architecture**: Single process owns message routing, persistence, and channel adapters — contrasts with ZeroClaw's multi-model provider profiles, NanoClaw's host-health API, or Hermes' ACP/Matrix/kanban surface integrations.
- **Structured review pipeline**: `maintainer` + `ready for maintainer look` labels on many PRs suggest formalized triage absent in most peers.

**Community Size Comparison**
- **Issues/PRs volume** implies largest community, but **engagement depth** (comments/👍 on top issues: 13–40) is comparable to CoPaw (2–7 comments) and NanoBot (0–2). No project shows broad public discourse; most interaction is maintainer↔contributor.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Need |
|-------------|-------------------|---------------|
| **Event-loop / main-thread offloading** | OpenClaw (#119720, #148290, #148709), Hermes (#111484), NanoClaw (central DB `busy_timeout` #3811) | Move persistence, pricing, registry ops off gateway/event loop; add SQLite `busy_timeout` |
| **Message delivery reliability** | OpenClaw (#25592, #139847, #80520), NanoClaw (Session DB readonly #3660), CoPaw (#7709, #7775), LobsterAI (#1035) | Dedupe cache invalidation on reconnect, stop silent drops, surface scheduled-task output |
| **Process / resource hygiene** | OpenClaw (#97616 zombies), Hermes (#111464 background child reaping), NanoBot (cron timer re-arm #5686), CoPaw (#7760 shutdown grace) | Reap children, bound timers, grace periods on shutdown |
| **Secrets / credential safety** | OpenClaw (#108395 fake Human messages), Hermes (#111341 config mask, #111409 vault protection), LobsterAI (#2675 OpenClaw auth migration), ZeroClaw (#6613 pairing codes) | Mask CLI output, isolate vault/OAuth, strengthen pairing, migrate to canonical stores |
| **Provider resilience & failover** | NanoBot (#5674 NIM timeout, #5666 aimlapi), ZeroClaw (multi-model per provider #9809), NullClaw (#975 grok-cli, #993 Firecrawl config), CoPaw (#7772 newapi proxy) | Classify provider errors vs model output, auto-fallback, keyless CLI auth, self-hosted endpoints |
| **Mobile / PWA parity** | NanoBot (#5770–5773 iOS PWA bugs), CoPaw (Console focus #7759), LobsterAI (React 19/Vite 8 upgrade) | Cold-start, safe-area, touch targets, phantom tooltips |
| **Observability / health endpoints** | NanoClaw (#3482 host health), IronClaw (#8100 daily failure taxonomy), Hermes (#111448 multi-profile logs), ZeroClaw (#10236 daemon log bounding) | Single health call, structured logs, benchmark taxonomy, bounded logging |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | CoPaw | NanoClaw | NanoBot | Hermes | LobsterAI | PicoClaw | NullClaw | IronClaw |
|-----------|----------|----------|-------|----------|---------|--------|-----------|----------|----------|----------|
| **Primary artifact** | Agent runtime / gateway | Agent runtime + CLI + TUI | Desktop app + Hub (multi-tenant) | Host/daemon + setup + skills | Desktop/Web agent + provider mesh | Agent + ACP/Matrix/kanban | Desktop app (OpenClaw fork) | Embedded/ARM mesh (libp2p) | Minimalist CLI agent | Benchmark / eval harness |
| **Target user** | Self-hosted power users, devs | Developers, automation builders | Teams, enterprise (Hub), plugin authors | Fleet operators, skill authors | Desktop users, multi-provider | Researchers, multi-surface | Enterprise desktop (NetEase) | IoT/ARM hobbyists | Minimalists, Zig users | QA / model evaluators |
| **Architecture** | Monolithic gateway + plugins | Modular providers + skills + RPC | Electron + NimGateway + Hub | Host daemon + containers + skills | Tauri + provider subprocesses | Go + TypeScript, multi-protocol | Electron + React (OpenClaw core) | Rust + libp2p mesh | Zig, single binary | Rust, officeqa benchmark |
| **Key differentiator** | Full-stack runtime, fleet mgmt | Governance (RFC), shell policy, PKCE | Hub multi-tenancy, cron UX, skills | Provisioning, health, uninstall safety | Provider subprocess model, Dream memory | ACP native, kanban, cron, Matrix | OpenClaw auth migration, React 19 | Mesh observability, ARM64 QQ | Pluggable search/LLM, keyless | Automated failure taxonomy |
| **Extension model** | Plugins (gateway, testing, etc.) | Skills, providers, tools, RPC | Skills, Hub managed models | Skills, providers, templates | Providers, tools, Dream tasks | ACP tools, Matrix bots, kanban | OpenClaw plugins + custom | Tracks (sprint-based) | Providers, search adapters | Benchmark tasks |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapidly Iterating (Daily merges, >20 PRs/day)** | OpenClaw, ZeroClaw, CoPaw, NanoClaw, NanoBot, LobsterAI | High PR throughput, structured review (OpenClaw, ZeroClaw), or dependabot-driven modernization (LobsterAI). All have critical bugs open but active fix PRs. |
| **Stabilizing / Patch-Mode** | Hermes, PicoClaw | Hermes cut v0.21.3 roll-up; PicoClaw executing v0.10.0 sprint plan. Both merging fixes but slower review (Hermes 0/50 today). |
| **Focused Maintenance** | ZeptoClaw, IronClaw | Single-purpose fixes (CI, benchmark taxonomy). No feature work visible. |
| **Ideation / Early** | NullClaw, Moltis | NullClaw has design discussions but no PRs; Moltis only a test-flake PR. Low external engagement. |

**Maturity signals**: Projects with **governance artifacts** (ZeroClaw RFCs, OpenClaw maintainer labels, Hermes patch releases, PicoClaw sprint docs) correlate with higher merge rates. Projects lacking them (NullClaw, Moltis, IronClaw) show code stagnation despite open issues.

---

## 7. Trend Signals for AI Agent Developers

1. **Gateway/Host separation is converging** — NanoClaw's host health API (#3482), ZeroClaw's daemon log bounding (#10236), and OpenClaw's fleet SQLite workers all point to a **control-plane / data-plane split** for fleet management. *Action: Design agents with explicit host-agent RPC from day one.*

2. **Provider subprocess model > in-process SDKs** — NanoBot, ZeroClaw, NullClaw, and CoPaw all favor spawning CLI-authenticated binaries (`claude-cli`, `codex-cli`, `grok-cli`, `kimi-code`) over embedding SDKs. *Action: Build provider adapters around stdout/stdin contracts, not library APIs.*

3. **Memory / context as a service** — OpenClaw's memory-core, NanoBot's Dream, CoPaw's ReMe, ZeroClaw's skills all treat long-term memory as a **pluggable, versioned subsystem** with compaction, repair, and recall APIs. *Action: Abstract memory behind a stable interface; expect compaction rate-limits (#78367) and sanitizers (#77447) to become standard.*

4. **Security defaults shifting to "fail closed"** — Hermes masks `config get` by default (#111341), ZeroClaw hardens pairing codes (#6613), LobsterAI migrates to OpenClaw SQLite auth (#2675), NanoClaw scrubs `argv` secrets (#3484). *Action: Assume all config outputs are leaked; mask by default, require `--raw`.*

5. **Multi-tenancy via Hub/Control Plane** — CoPaw Hub (#7696 admin bootstrap, #7779 managed models), OpenClaw Control UI (#125027), NanoClaw host health (#3482) indicate **operator-facing dashboards** are becoming table stakes for self-hosted deployments. *Action: Invest in a read-only health/inspect API early; UI follows.*

6. **Benchmark-driven development** — IronClaw's daily `officeqa` taxonomy (#8100) and OpenClaw's `clawsweeper` labels show **automated regression taxonomies** replacing ad-hoc testing. *Action: Instrument every agent run with structured outcome tags (navigation_failure, tool_timeout, policy_block) for downstream analysis.*

7. **Keyless / subscription-based LLM access** — NullClaw's `grok-cli` (#975), NanoBot's provider mesh, CoPaw's ACP integrations reflect user preference for **local auth tokens over API keys**. *Action: Support CLI-auth providers as first-class citizens; design token-refresh into provider interface.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-15

## 1. Today's Overview
NanoBot shows **high maintenance velocity** with 25 PRs updated and 6 issues touched in the last 24 hours. The project is in active stabilization mode: 13 PRs were merged/closed today, primarily targeting bug fixes (memory recovery, cron edge-cases, provider timeouts, CLI streaming performance) and incremental WebUI polish. No new release was cut, but the volume of p2-priority fixes suggests a patch release is imminent. Community contributions remain strong — new provider integration (aimlapi.com) and Polish localization are in review.

## 2. Releases
**No new releases today.** The latest published version remains whatever was current before 2026-09-15.

## 3. Project Progress — Merged/Closed PRs (13)

| PR | Area | Summary |
|----|------|---------|
| [#5774](https://github.com/HKUDS/nanobot/pull/5774) | **Memory/Tools** | Recover archive tool calls before raw fallback; reuse `ProviderConversationStateController` for native continuation. |
| [#5728](https://github.com/HKUDS/nanobot/pull/5728) | **Performance/CLI** | Skip control-tag scanning when absent; reduce full Markdown re-render per chunk in classic CLI. |
| [#5761](https://github.com/HKUDS/nanobot/pull/5761) | **Tools (edit_file)** | Preserve newline after inline suffix; unify success summaries with `apply_patch`. |
| [#5686](https://github.com/HKUDS/nanobot/pull/5686) | **Cron** | Defer timer re-arm while jobs execute to avoid cancelling the running callback. |
| [#5751](https://github.com/HKUDS/nanobot/pull/5751) | **Cron** | Preserve pending runs when editing automation name/instructions (schedule unchanged). |
| [#5730](https://github.com/HKUDS/nanobot/pull/5730) | **Provider/Streaming** | Stream internal model calls (e.g., Dream) with idle timeouts to prevent 120s HTTP / 300s runner timeouts. |
| [#5734](https://github.com/HKUDS/nanobot/pull/5734) | **Memory/Dream** | Clarify write permissions: only Dream tasks edit profile & long-term memory files. |
| [#5684](https://github.com/HKUDS/nanobot/pull/5684) | **Docs/WebUI** | Refresh README with current WebUI feature gallery & visual tour. |
| *(5 others closed without detailed summaries in feed)* | | |

**Net effect:** Core agent loop (memory, tools, cron, provider resilience) hardened; CLI streaming CPU reduced; Dream memory writes unblocked.

## 4. Community Hot Topics

| Item | Type | Signals |
|------|------|---------|
| [#5666](https://github.com/HKUDS/nanobot/pull/5666) — **Add aimlapi.com provider** | PR (open, 11 days) | External vendor contributing full integration (1000+ models, 400k users); proposes 50/50 revenue share. High strategic value if maintainers accept third-party provider partnerships. |
| [#2804](https://github.com/HKUDS/nanobot/issues/2804) — **DuckDuckGo web_search hangs** | Issue (closed, 5 months old) | `asyncio.to_thread(ddgs.text)` blocks session indefinitely. Root cause: sync call in async context without timeout. Fix likely in provider layer; watch for regression. |
| [#5674](https://github.com/HKUDS/nanobot/issues/5674) — **Nvidia NIM timeout kills agent** | Issue (open, 10 days) | Provider returns `"timed out after 300s/600s"` as plain text; agent treats as model output. Paired with [#5769](https://github.com/HKUDS/nanobot/pull/5769) (classify by message text, enable fallback). |
| [#5773](https://github.com/HKUDS/nanobot/issues/5773) — **PWA cold-start blank screen** | Issue (new today) | iOS PWA standalone shows long white screen before first paint. Indicates missing pre-cache / service-worker warm-up or large initial bundle. |
| [#5772](https://github.com/HKUDS/nanobot/issues/5772) — **iOS PWA top viewport washed out** | Issue (new today) | Safe-area / backdrop-filter rendering bug in standalone mode. Pure CSS/fixed-header fix. |

**Underlying needs:**  
- **Provider resilience** — users run heterogeneous LLM backends (NIM, aimlapi, self-hosted) and expect automatic failover.  
- **Mobile PWA parity** — iOS standalone mode is a first-class target; current gaps (cold start, double-tap, phantom tooltip) degrade trust.  
- **Extensible provider registry** — vendors want in-tree integration; project needs a governance model (review criteria, maintenance burden).

## 5. Bugs & Stability — Today’s Reports (ranked)

| Severity | Issue | Fix PR? |
|----------|-------|---------|
| **High** | [#5674](https://github.com/HKUDS/nanobot/issues/5674) NIM timeout treated as model output → agent stalls | Yes: [#5769](https://github.com/HKUDS/nanobot/pull/5769) (open) |
| **High** | [#2804](https://github.com/HKUDS/nanobot/issues/2804) DuckDuckGo `ddgs.text` hangs indefinitely, blocks session | Closed but no linked fix PR; verify regression test exists |
| **Medium** | [#5771](https://github.com/HKUDS/nanobot/issues/5771) Mobile sidebar: two taps to open session | No PR yet |
| **Medium** | [#5770](https://github.com/HKUDS/nanobot/issues/5770) Sidebar opens → phantom “Search ⌘K” tooltip on touch | No PR yet |
| **Medium** | [#5772](https://github.com/HKUDS/nanobot/issues/5772) iOS PWA top bar washed out (backdrop-filter) | No PR yet |
| **Low** | [#5773](https://github.com/HKUDS/nanobot/issues/5773) PWA cold-start blank screen | No PR yet |

**Stability note:** 5/6 issues today are WebUI mobile/PWA regressions — suggests recent frontend changes introduced touch/rendering regressions on iOS.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **aimlapi.com as built-in provider** | [#5666](https://github.com/HKUDS/nanobot/pull/5666) (vendor PR) | High — code complete, tests added, commercial incentive |
| **Stable per-invocation tool context** | [#5750](https://github.com/HKUDS/nanobot/pull/5750) (fixes #5749) | High — merged-adjacent, unblocks tool authors |
| **Polish (pl) localization** | [#5767](https://github.com/HKUDS/nanobot/pull/5767) | Medium — 2k+ strings translated, low risk |
| **Custom Telegram Bot API base URL** | [#4919](https://github.com/HKUDS/nanobot/pull/4919) (2 months old) | Low — stalled, needs maintainer review |
| **Feishu/Lark QR onboarding fix** | [#5768](https://github.com/HKUDS/nanobot/pull/5768) | Medium — enterprise channel blocker |

**Prediction:** Next patch will bundle provider resilience (#5769), tool context (#5750), and Polish locale (#5767). aimlapi integration may wait for governance decision.

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Provider errors masquerade as model output** | #5674: NIM timeout string parsed as completion | Silent agent failure; no retry/fallback |
| **Mobile WebUI feels broken** | #5770–#5773: double-tap, phantom tooltip, washed header, cold-start lag | iOS PWA users (growing segment) get degraded UX |
| **Web search hangs session** | #2804 (closed but historically severe) | Complete session lock-up; requires restart |
| **Cron jobs silently skip after edit** | #5751, #5686, #5762, #5766 (4 PRs in week) | Automation reliability eroding trust |
| **Dream memory writes blocked by permissions** | #5734 | Core memory feature unusable for some users |

**Positive signals:**  
- Vendors investing in first-class support (aimlapi).  
- Community contributing localization (Polish) and channel fixes (Feishu, Telegram).  
- Rapid fix turnaround on cron regressions (4 PRs in 8 days).

## 8. Backlog Watch — Stale & Critical

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) **Telegram custom API base URL** | 62 days | Enterprise/self-hosted Telegram deployments blocked; PR ready, needs review. |
| [#2804](https://github.com/HKUDS/nanobot/issues/2804) **DuckDuckGo hang root cause** | 163 days | Closed without visible fix; regression risk high. Add integration test with timeout. |
| [#5601](https://github.com/HKUDS/nanobot/pull/5601) **WebUI rejected message rollback** | 17 days | Open, conflict state; prevents clean message rejection UX. |
| [#5666](https://github.com/HKUDS/nanobot/pull/5666) **aimlapi provider** | 11 days | Strategic partnership opportunity; maintainers must define provider acceptance policy. |

---

**Health Indicators**  
- 🟢 **Velocity:** 25 PR updates / day, 52% merge rate  
- 🟡 **Bug inflow:** 5 new WebUI mobile bugs in 24h — suggests recent regression window  
- 🟢 **Provider ecosystem:** Active vendor contributions, fallback/resilience fixes landing  
- 🔴 **Mobile PWA:** Cluster of iOS standalone bugs — allocate sprint capacity  
- 🟡 **Governance gap:** No clear process for third-party provider merges (aimlapi PR waiting)

*Data sourced from GitHub API snapshot 2026-09-15 00:00–23:59 UTC. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-15

---

## 1. Today's Overview

Hermes Agent is in **active maintenance mode** with a significant patch release (v0.21.3) cut yesterday that rolls up ~338 PRs since v0.21.2. Today shows **high PR velocity** (50 open PRs updated) but **zero merges** — all 50 PRs remain open, suggesting a review bottleneck or intentional staging. The single new issue (#111548) appears to be a UI/message rendering problem. The project is heavily focused on **stability, security hardening, and platform integrations** (Matrix, ACP, browser, cron, kanban) rather than new features.

---

## 2. Releases

### v2026.9.14 — Hermes Agent v0.21.3 (Patch)
**Released:** 2026-09-14 | [Release Notes](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.14)

- **Scope:** Patch release bundling ~338 PRs since v0.21.2 into a stable tag for Docker images, Hermes Cloud, and hosted deployments.
- **Primary driver:** Remote-gateway sign-in fixes (not detailed in excerpt).
- **Breaking changes:** None indicated (patch semantic versioning).
- **Migration notes:** Downstream consumers should re-pull Docker images / re-deploy to pick up the accumulated fixes.
- **Notable:** This is a **roll-up tag** — individual fixes are distributed across the 50 open PRs visible today.

---

## 3. Project Progress (Today's PR Activity)

**50 PRs updated today — all open, 0 merged/closed.**  
The work is overwhelmingly **bug fixes & security hardening** across core components:

| Area | PR Count | Representative PRs |
|------|----------|-------------------|
| **Gateway / Session / Message Delivery** | ~8 | #111416 (follow-up message drop), #111348 (leaked `<eos>` hides media), #111370 (`allow_all_users` ignored) |
| **Cron / Automation** | ~6 | #111484 (vanished user bus), #111504 (dedup-skipped slot logging), #111483 (approval hang in unattended runs) |
| **Security / Secrets** | ~4 | #111341 (`config get` masks keys by default), #111409 (write_file/patch protect vault & OAuth), #111480 (1Password/Bitwarden multi-origin fill) |
| **Platform Integrations** | ~5 | #111444 (ACP model picker), #111343 (Matrix reply author), #111405 (macOS loopback CDP proxy bypass) |
| **Tooling / Process / State** | ~7 | #111468 (kanban dependency wait), #111464 (background child reaping), #111351 (archived Bot Chat title), #111448 (multi-profile log routing) |
| **Features (older, still open)** | 2 | #91311 (LTX 2.5 / Kling O3 video gen), #91272 (`/context` file status listing) |

**No PRs merged today** — the backlog of 50 open PRs suggests maintainers are either batching reviews or waiting for CI/validation.

---

## 4. Community Hot Topics

| Item | Type | Comments | Reaction | Signal |
|------|------|----------|----------|--------|
| [#111548](https://github.com/NousResearch/hermes-agent/issues/111548) | Issue | 1 | 0 | **"No message below, indicating first message"** — UI rendering bug with screenshot; likely onboarding/first-run confusion. |
| [#111468](https://github.com/NousResearch/hermes-agent/pull/111468) | PR (bug) | – | 0 | Kanban: linking ready card under unfinished parent now records `dependency_wait` event instead of silent demotion. |
| [#111484](https://github.com/NousResearch/hermes-agent/pull/111484) | PR (bug) | – | 0 | Cron: restart-safe worker names vanished user bus & re-probes instead of failing every tick. |
| [#111416](https://github.com/NousResearch/hermes-agent/pull/111416) | PR (bug) | – | 0 | Gateway: follow-up arriving before admission no longer drops original message. |
| [#111341](https://github.com/NousResearch/hermes-agent/pull/111341) | PR (security) | – | 0 | `hermes config get` masks API keys/secrets by default; `--raw` opts out. |

**Analysis:** Low community engagement (near-zero comments/reactions) — this is an **internal/maintainer-driven** workflow. The hot topics are all **reliability & security fixes** rather than feature requests, indicating a project prioritizing production hardening.

---

## 5. Bugs & Stability (Reported/Fixed Today)

| Severity | Bug | Fix PR | Status |
|----------|-----|--------|--------|
| **P1** | Cron/unattended runs hang on approval cards after inheriting gateway presence env | [#111483](https://github.com/NousResearch/hermes-agent/pull/111483) | Open |
| **P2** | Gateway `allow_all_users: true` in config.yaml silently ignored | [#111370](https://github.com/NousResearch/hermes-agent/pull/111370) | Open |
| **P2** | Follow-up message arriving before admission drops original message | [#111416](https://github.com/NousResearch/hermes-agent/pull/111416) | Open |
| **P2** | Cron worker fails every tick with `exit 1` on vanished user D-Bus session | [#111484](https://github.com/NousResearch/hermes-agent/pull/111484) | Open |
| **P2** | Background child closing stdout early left as zombie (`<defunct>`) | [#111464](https://github.com/NousResearch/hermes-agent/pull/111464) | Open |
| **P2** | `browser_exec` broken on macOS with system proxy (Clash/V2Ray) | [#111405](https://github.com/NousResearch/hermes-agent/pull/111405) | Open |
| **P2** | 1Password/Bitwarden logins only fill first saved origin | [#111480](https://github.com/NousResearch/hermes-agent/pull/111480) | Open |
| **P2** | Leaked `<eos>` sentinel hides MEDIA attachment | [#111348](https://github.com/NousResearch/hermes-agent/pull/111348) | Open |
| **P3** | `write_file`/`patch` could overwrite vault, browser-profile, OAuth, Bitwarden cache | [#111409](https://github.com/NousResearch/hermes-agent/pull/111409) | Open |
| **P3** | Matrix reply to bot loses `reply_to_author` under `require_mention` | [#111343](https://github.com/NousResearch/hermes-agent/pull/111343) | Open |
| **P3** | Multi-profile dashboard process cross-contaminates log files | [#111448](https://github.com/NousResearch/hermes-agent/pull/111448) | Open |
| **P4** | ACP model picker sent raw-key IDs upstream causing 503/404 | [#111444](https://github.com/NousResearch/hermes-agent/pull/111444) | Open |

**All 12+ bugs have open fix PRs** — none merged yet. The P1 approval hang is the most critical (blocks unattended automation).

---

## 6. Feature Requests & Roadmap Signals

| PR / Issue | Feature | Likelihood for Next Version |
|------------|---------|----------------------------|
| [#91311](https://github.com/NousResearch/hermes-agent/pull/91311) | **Video gen:** LTX 2.5 + Kling O3 families; Happy Horse v1.1 | High — validated by agent-tools-scout cron, near-ready |
| [#91272](https://github.com/NousResearch/hermes-agent/pull/91272) | **`/context` CLI:** per-file load/truncated/shadowed status | High — UX improvement for power users, salvage of old PR |
| [#111547](https://github.com/NousResearch/hermes-agent/pull/111547) | **Plugin catalog:** rank by GitHub stars, daily probe | Medium — docs-only change, rate-limit design noted |
| [#111468](https://github.com/NousResearch/hermes-agent/pull/111468) | **Kanban:** `dependency_wait` event surfaced in API (UI pending) | Medium — API done, UI follow-up needed |

**Prediction:** Next minor (v0.22.0) will likely ship the **video generation upgrades** and **`/context` file listing** — both are feature PRs open since August with validation. The plugin catalog ranking is a docs enhancement that could land anytime.

---

## 7. User Feedback Summary

| Source | Pain Point / Use Case | Sentiment |
|--------|----------------------|-----------|
| [#111548](https://github.com/NousResearch/hermes-agent/issues/111548) | First message not rendering / "no message below" confusion | 😕 Frustrated — onboarding UX gap |
| [#111047](https://github.com/NousResearch/hermes-agent/issues/111047) (via #111416) | Follow-up messages silently dropping previous turn | 😤 Critical — message loss in gateway |
| [#110803](https://github.com/NousResearch/hermes-agent/issues/110803) (via #111484) | Cron jobs failing every tick after gateway restart | 😤 Critical — automation reliability |
| [#110758](https://github.com/NousResearch/hermes-agent/issues/110758) (via #111341) | `hermes config get` leaking API keys in cleartext | 😨 Security concern |
| [#110464](https://github.com/NousResearch/hermes-agent/issues/110464) (via #111409) | Tools overwriting secret stores (vault, OAuth, Bitwarden) | 😨 Security concern |
| [#110565](https://github.com/NousResearch/hermes-agent/issues/110565) (via #111405) | `browser_exec` broken on macOS with system proxy | 😕 Platform-specific breakage |
| [#110932](https://github.com/NousResearch/hermes-agent/issues/110932) (via #111483) | Unattended cron hangs waiting for approval nobody can answer | 😤 Automation blocker |

**Overall:** Users are hitting **reliability edges** (message delivery, cron, proxy, approvals) and **security footguns** (secret leakage). Satisfaction appears low for gateway/cron reliability; security fixes are welcomed but reactive.

---

## 8. Backlog Watch (Stale / High-Impact Items Needing Attention)

| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| [#91311](https://github.com/NousResearch/hermes-agent/pull/91311) | 25 days | Video generation feature — new model families, validated by scout cron | **Review & merge** — feature complete, low risk |
| [#91272](https://github.com/NousResearch/hermes-agent/pull/91272) | 25 days | `/context` file status listing — UX for instruction management | **Review & merge** — salvage of old work, high user value |
| [#111483](https://github.com/NousResearch/hermes-agent/pull/111483) | 0 days (P1) | Cron/approval hang blocks all unattended automation | **Urgent review** — P1 severity, fix ready |
| [#111370](https://github.com/NousResearch/hermes-agent/pull/111370) | 0 days (P2) | `allow_all_users` config silently dropped — auth bypass risk | **Review** — security boundary, fix ready |
| [#111416](https://github.com/NousResearch/hermes-agent/pull/111416) | 0 days (P2) | Message loss in gateway follow-up race | **Review** — data integrity, fix ready |
| [#111341](https://github.com/NousResearch/hermes-agent/pull/111341) | 0 days (Security) | Config CLI masks secrets by default — mitigates credential leak | **Review** — security hardening, low risk |

**Maintainer bottleneck:** 50 open PRs with 0 merges today suggests review capacity is saturated. Prioritize **P1 #111483**, **security PRs (#111341, #111409, #111370)**, and the **two August feature PRs (#91311, #91272)** to unblock value delivery.

---

## Project Health Indicators

| Metric | Status | Trend |
|--------|--------|-------|
| **Release cadence** | Patch v0.21.3 cut 2026-09-14 (roll-up) | 🟢 Regular |
| **PR throughput (merge rate)** | 0/50 today | 🔴 Stalled |
| **Bug fix coverage** | 12+ bugs with open fix PRs | 🟡 Good coverage, slow merge |
| **Security posture** | 3 security PRs open (secret masking, file safety, auth config) | 🟢 Proactive |
| **Community engagement** | Near-zero comments/reactions | 🔴 Low external participation |
| **Technical debt signals** | Many "salvage" PRs reviving old work | 🟡 Ongoing cleanup |

**Bottom line:** Hermes Agent is **maturing rapidly on reliability/security** but suffering from a **review bottleneck**. The v0.21.3 roll-up tag shows commitment to stable deliveries; the next challenge is clearing the 50-PR review queue to ship the accumulated fixes and the two ready features.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-15

---

## 1. Today's Overview
PicoClaw saw moderate maintenance activity today with **3 pull requests updated** (2 closed, 1 open) and **1 issue updated** in the last 24 hours. No new releases were published. The project appears to be in an active development sprint (v0.10.0), with merged work focusing on **mesh observability** and **sprint planning documentation**. The single active issue (#3365) highlights a blocking QQ channel authentication failure affecting users on ARM64 devices. Overall health: **steady feature velocity, one unresolved integration regression**.

---

## 2. Releases
**No new releases** published today. The latest version remains the nightly `0.3.1` build referenced in issue #3365.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Title | Type | Key Changes |
|----|-------|------|-------------|
| [#3380](https://github.com/sipeed/picoclaw/pull/3380) | `feat(mesh): observability — peer conns/score/bandwidth, activity feed, SSE events (Track 63)` | Feature | • `PeerStatus` enriched with `conns[]` (multiaddr, direction, transport, stream count, opened_at), `latency_ms` (EWMA), `score` (PeerScoreStore), `last_seen`<br>• `libp2p.BandwidthReporter` wired via `metrics.NewBandwidthCounter()`<br>• SSE event stream for real-time peer activity feed |
| [#3379](https://github.com/sipeed/picoclaw/pull/3379) | `docs: v0.10.0 sprint plan` | Documentation | Durable design doc at `docs/design/v0.10.0-sprint.md` covering Tracks 60–66. Execution order: **60 → 65 → 61 → 62 → 63 → 64 → 66**, one PR per track. |

**Summary**: Track 63 (mesh observability) is now complete. Sprint plan documentation finalized, setting the stage for remaining tracks.

---

## 4. Community Hot Topics

| Item | Type | Activity | Summary | Underlying Need |
|------|------|----------|---------|-----------------|
| [#3365](https://github.com/sipeed/picoclaw/issues/3365) | Issue | 👍 1, 2 comments, updated 2026-09-14 | QQ channel returns **401 "Authorization参数格式错误"** on Orange Pi 3B (RK3566, aarch64). Root cause traced to `botgo v0.2.1` + `resty >= v2.17`. | **Critical integration breakage** for Chinese IM users on ARM64. Need dependency pin or adapter fix. |
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | PR | 0 reactions, updated 2026-09-15 | Adds **Keenable** (`keenable.ai`) as a `web_search` provider. Zero-API-key public endpoint (`POST /v1/search/public` with `X-Keenable-Title` header). | Expand **tool ecosystem** with free, no-key web search. Community-contributed provider. |

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|----------|------|-------------|------------|
| **High** | [#3365](https://github.com/sipeed/picoclaw/issues/3365) | QQ bot authentication fails with 401 due to `resty v2.17+` changing header serialization, incompatible with `botgo v0.2.1`. Blocks all QQ channel functionality on ARM64. | **No fix PR yet**. Workaround: pin `resty < v2.17` or patch `botgo` auth header logic. |
| — | — | No new crashes, regressions, or data-loss bugs reported today. | — |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Keenable web search provider** | [PR #3370](https://github.com/sipeed/picoclaw/pull/3370) (open) | **High** — trivial addition, no API key, aligns with `tools.web` extensibility. |
| **Mesh observability (peer conns, score, bandwidth, SSE)** | [PR #3380](https://github.com/sipeed/picoclaw/pull/3380) (merged) | **Delivered** — part of v0.10.0 Track 63. |
| **v0.10.0 sprint tracks 60, 65, 61, 62, 64, 66** | [PR #3379](https://github.com/sipeed/picoclaw/pull/3379) (merged) | **Planned** — design doc finalized; expect 6 PRs over coming weeks. |
| **QQ botgo/resty compatibility fix** | [Issue #3365](https://github.com/sipeed/picoclaw/issues/3365) | **Urgent** — blocking for ARM64 QQ users; likely hotfix before v0.10.0. |

---

## 7. User Feedback Summary

- **Pain point**: QQ channel completely broken on ARM64 (Orange Pi 3B) due to transitive dependency conflict (`botgo` + `resty`). User reports "nightly build 0.3.1" affected.  
- **Use case**: Self-hosted AI assistant on embedded ARM boards connecting to Tencent QQ.  
- **Sentiment**: Frustration (👍 1 on issue), but clear root-cause analysis provided by reporter (`crazysarah`).  
- **Positive signal**: Community member (`ilya-bogin-keenable`) contributing a new search provider pro bono, indicating healthy external engagement.

---

## 8. Backlog Watch

| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| [#3365](https://github.com/sipeed/picoclaw/issues/3365) | 11 days (created 2026-09-04) | Open, stale | **High-impact regression** for a major IM platform on a supported architecture. No maintainer response yet. Fix is likely a 1-line dependency constraint or header patch. |
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | 8 days (created 2026-09-07) | Open, stale | Low-risk feature PR adding a free web search provider. Awaiting review/merge to unblock contributor and expand tooling. |

---

**Digest generated**: 2026-09-15 | **Data cutoff**: 2026-09-15 00:00 UTC | **Source**: GitHub API (sipeed/picoclaw)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-15

---

## 1. Today's Overview

NanoClaw shows **high maintenance velocity** with 50 PRs updated in the last 24 hours (38 merged/closed), indicating a focused stabilization and feature-integration sprint. Two critical bugs were resolved: a path-handling regression in `ncl groups config add-mount` (#3706) and a SQLite readonly database issue blocking all outbound messaging (#3660). Two new security/stability issues surfaced today: raw error text leaking to public channels (#3814) and missing `busy_timeout` on the central DB causing lock contention failures (#3811). The project is actively integrating OpenCode provider support across multiple PRs (#3733, #3747, #3746) and hardening operational tooling (uninstall, setup secrets, health exposure).

---

## 2. Releases

**No new releases published today.** The last release version is not specified in the data. The high volume of merged PRs (38) suggests a release cut may be imminent.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Type | Area | Summary |
|----|------|------|---------|
| [#3706](https://github.com/nanocoai/nanoclaw/issues/3706) | Bug Fix | CLI / Mounts | Fixed `add-mount` silently creating broken double-nested paths when `--container` is an absolute path. |
| [#3660](https://github.com/nanocoai/nanoclaw/issues/3660) | Bug Fix | Core / DB | Resolved Session DB readonly errors blocking all message delivery (Discord, other channels). |
| [#3090](https://github.com/nanocoai/nanoclaw/pull/3090) | Fix | Templates | Prepend all top-level context Markdown in templates. |
| [#3093](https://github.com/nanocoai/nanoclaw/pull/3093) | Fix | Chat | Keep typing indicator active during processing turns. |
| [#3094](https://github.com/nanocoai/nanoclaw/pull/3094) | Fix | Telegram | Retry transient bot identity lookup failures. |
| [#3396](https://github.com/nanocoai/nanoclaw/pull/3396) | Feature | Slack / Agents | Enable creating agents from templates via chat (previously CLI-only). |
| [#3428](https://github.com/nanocoai/nanoclaw/pull/3428) | Feature | Slack | Carry template reference through Slack agent creation flow. |
| [#3465](https://github.com/nanocoai/nanoclaw/pull/3465) | Fix/Upgrade | Channels | Chat SDK 4.29.0 → 4.32.0; fix Telegram URL entity parsing for OneCLI connect links. |
| [#3468](https://github.com/nanocoai/nanoclaw/pull/3468) | Fix | WhatsApp | Declare 25s typing-indicator lifetime; reduce redundant `setTyping` calls. |
| [#3470](https://github.com/nanocoai/nanoclaw/pull/3470) | Fix | pnpm | Enable `minimumReleaseAge` gate (3-day rule) at correct top-level in `pnpm-workspace.yaml`. |
| [#3471](https://github.com/nanocoai/nanoclaw/pull/3471) | Fix | pnpm | Same fix for providers workspace. |
| [#3482](https://github.com/nanocoai/nanoclaw/pull/3482) | Feature | Setup / Health | Expose structured host health via single read-only call (DB, process, groups, skills). |
| [#3483](https://github.com/nanocoai/nanoclaw/pull/3483) | Fix | Uninstall | Harden ownership checks and failure handling; re-validate targets at deletion time. |
| [#3484](https://github.com/nanocoai/nanoclaw/pull/3484) | Security | Setup | Prevent pasted auth secrets from appearing in `argv` (child process command lines). |
| [#3486](https://github.com/nanocoai/nanoclaw/pull/3486) | Feature | Setup | Expose build-time preseed catalog (`--catalog-preseeds`) for automated provisioning. |
| [#3487](https://github.com/nanocoai/nanoclaw/pull/3487) | Feature | Setup | Accept client timezone preseed (`--tz`) for non-interactive installs. |

**Net progress**: Strong focus on **operational hardening** (uninstall, secrets, health, pnpm gates), **channel reliability** (Telegram, WhatsApp, Slack), and **template-driven agent creation** — all foundational for production deployments.

---

## 4. Community Hot Topics

| Item | Type | Comments | Signal |
|------|------|----------|--------|
| [#3654](https://github.com/nanocoai/nanoclaw/pull/3654) | PR (Open) | High (undefined count shown) | **NO_PROXY for `host.docker.internal`** — Critical for MCP server reachability inside containers when OneCLI gateway is active. Blocking plain-HTTP MCP on host. |
| [#3747](https://github.com/nanocoai/nanoclaw/pull/3747) | PR (Open) | High | **OpenCode skill integration** — Setup-time optional skill, provider-owned auth/host assistance. Core-team tracked. |
| [#3733](https://github.com/nanocoai/nanoclaw/pull/3733) | PR (Open) | High | **OpenCode provider contracts** — Full implementation: native tools, MCP, cancellation, compaction, continuation recovery, memory, auth, model selection. |
| [#3813](https://github.com/nanocoai/nanoclaw/pull/3813) | PR (Open) | New today | **Durable handoff ledger + Mission Control** — Host-owned append-only events, fingerprinted contracts, structured Slack A2A delivery, bounded bot hops. |
| [#3719](https://github.com/nanocoai/nanoclaw/pull/3719) | PR (Open) | High | **A2A failure reporting to source** — System notes to sending agent + originating chat for blocks, approval waits, rejections, missing reply paths. |

**Underlying needs**: 
- **Container networking ergonomics** (host.docker.internal access) — developers hitting proxy walls.
- **Multi-provider extensibility** — OpenCode as first-class peer to Claude, not afterthought.
- **Operational observability & safety** — Durable handoffs, failure attribution, health endpoints for fleet management.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#3814](https://github.com/nanocoai/nanoclaw/issues/3814) | Raw process/turn error text delivered to **public channels** (not just owner). `deliverErrorResult` in `poll-loop.ts` posts SDK error verbatim without destination privacy check. | ❌ No PR yet |
| **High** | [#3811](https://github.com/nanoclaw/issues/3811) | Central DB (`compose.ts`) opened in WAL mode **without `busy_timeout`** — lock contention throws immediately as corruption instead of retrying. Affects task/schedule state, container_configs, agent_groups. | ❌ No PR yet |
| **High** | [#3706](https://github.com/nanoclaw/issues/3706) | `add-mount --container /abs/path` → broken double-nested path. **Fixed & closed** (fix likely in merged PR not listed individually). | ✅ Closed |
| **High** | [#3660](https://github.com/nanoclaw/issues/3660) | Session SQLite DBs becoming **read-only**, blocking all outbound messages. **Fixed & closed**. | ✅ Closed |

**Action needed**: #3814 (data leak) and #3811 (DB resilience) should be prioritized for immediate fix — both are single-line/configuration changes with high blast radius.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **OpenCode as first-class provider** | #3733, #3747, #3746 (core-team, multiple PRs) | ✅ **Very High** — 3 coordinated PRs, self-contained skill, provider contracts, auth, tools, cancellation. Near merge-ready. |
| **Durable agent-to-agent handoffs** | #3813 (new today, detailed design) | ✅ **High** — Host-owned ledger, fingerprinted contracts, Slack enforcement. Addresses multi-agent reliability gap. |
| **Structured host health API** | #3482 (merged) | ✅ **Done** — Single read-only call for install status, DB, process, groups, skills. |
| **Automated/provisioned setup** | #3486, #3487 (merged) | ✅ **Done** — Preseed catalog + timezone for CI/CD and fleet rollout. |
| **A2A failure visibility** | #3719 (open, core-team) | 🟡 **Medium-High** — Source notification for blocks, approvals, rejections. Complements #3813. |
| **MCP proxy transparency** | #3654 (open) | 🟡 **Medium** — NO_PROXY for host.docker.internal. Niche but blocking for local MCP dev. |

**Predicted next version theme**: **"Multi-Provider GA + Operational Hardening"** — OpenCode skill graduation, durable handoffs, health endpoint, setup automation, and the two critical bug fixes.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Secrets exposure in setup** | #3484 (fixed): OAuth tokens/API keys appeared in `argv` of child processes (`onecli secrets create --value <token>`). | Security — any local process could read secrets via `/proc`. |
| **Uninstall race conditions** | #3483 (fixed): Targets scanned at prompt time, deleted later without re-validation — unit files swapped, dirs recreated, `.env` changed. | Data loss / system corruption risk. |
| **No single health check** | #3482 (fixed): Tools had to open central DB, find host PID, scan group skill folders manually. | Operations — no fleet monitoring, no automated recovery. |
| **Template agents CLI-only** | #3396, #3428 (fixed): Slack users couldn't create templated sub-agents; got empty agents instead. | UX — power users blocked in primary interface (Slack). |
| **Telegram link parsing breaks OneCLI connects** | #3465 (fixed): Odd `_`/`*`/`~` counts in URLs (e.g., `agent_name=` with one underscore) → `can't parse entities`. | Onboarding — invite links silently failed. |
| **WhatsApp typing spam** | #3468 (fixed): 15 `setTyping`/min vs 3 needed (25s lifetime). | Cost / rate limits / UX noise. |
| **MCP servers unreachable in containers** | #3654 (open): OneCLI sets `HTTP_PROXY`/`HTTPS_PROXY`/`NODE_USE_ENV_PROXY=1`; Bun honors for plain HTTP → `host.docker.internal` blocked. | Developer productivity — local MCP dev broken. |

**Overall sentiment**: Users (internal/core-team) are **proactively fixing sharp edges** — secrets, uninstall, health, templates, channel quirks. The project is in a "production hardening" phase, not early exploration.

---

## 8. Backlog Watch — Needing Maintainer Attention

| Item | Status | Age | Why It Matters |
|------|--------|-----|----------------|
| [#3654](https://github.com/nanocoai/nanoclaw/pull/3654) | **Open PR** | 17 days (created 2026-08-29) | **NO_PROXY for host.docker.internal** — Blocks local MCP development. Simple fix (`NO_PROXY=host.docker.internal`), high developer friction. Core-team label but no merge. |
| [#3719](https://github.com/nanocoai/nanoclaw/pull/3719) | **Open PR** | 11 days (2026-09-04) | **A2A failure reporting to source** — Critical for debugging multi-agent flows. Core-team, well-scoped. |
| [#3733](https://github.com/nanocoai/nanoclaw/pull/3733) | **Open PR** | 8 days (2026-09-07) | **OpenCode provider contracts** — Largest feature in flight. Touches agent-runner, containers, core, providers, skills, tools. Needs review bandwidth. |
| [#3746](https://github.com/nanocoai/nanoclaw/pull/3746) | **Open PR** | 7 days (2026-09-08) | **Preserve cancellation/failure/skill files across provider ops** — Complements #3733. Core-team. |
| [#3747](https://github.com/nanocoai/nanoclaw/pull/3747) | **Open PR** | 7 days (2026-09-08) | **OpenCode setup integration** — User-facing entry point. Depends on #3733. |
| [#3811](https://github.com/nanocoai/nanoclaw/issues/3811) | **Open Issue** | 0 days (today) | **Central DB missing busy_timeout** — One-line fix (`PRAGMA busy_timeout = 5000`), prevents lock contention masquerading as corruption. |
| [#3814](https://github.com/nanocoai/nanoclaw/issues/3814) | **Open Issue** | 0 days (today) | **Error leak to public channels** — Privacy/security. Fix: add `isPrivateChannel` check in `deliverErrorResult`. |

**Recommendation**: Merge #3654 (trivial, high dev value), prioritize review of OpenCode trio (#3733, #3746, #3747), and assign #3811/#3814 for immediate fix — both are <1 hour patches with outsized stability impact.

---

*Digest generated from GitHub data as of 2026-09-15. Links point to nanocoai/nanoclaw repository.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-09-15

---

## 1. Today's Overview
NullClaw shows **low code-velocity but active community ideation** over the last 24 hours: four issues were updated (all feature/discussion threads), zero pull requests moved, and no new release shipped. The conversation centers on **extensibility of web-search providers** (Firecrawl, Brave, DuckDuckGo) and **new LLM provider integrations** (Grok CLI), signaling that contributors are pushing the project’s “tool-use” boundary rather than fixing regressions. Overall project health appears stable—no crash reports or security issues surfaced today.

---

## 2. Releases
**None** — no new tags or release notes published today.

---

## 3. Project Progress
**No merged or closed PRs in the last 24 h.**  
All four updated items are open issues; the codebase itself did not advance via PR merges today.

---

## 4. Community Hot Topics
| Issue | Activity | Core Need |
|-------|----------|-----------|
| **#993** [enhancement] *Make Firecrawl search endpoint configurable for self-hosted instances* | 2 comments, updated 2026-09-14 | Users running private Firecrawl deployments need to override the hard-coded `https://api.firecrawl.dev/v1/search` endpoint without forking. |
| **#975** *Add `grok-cli` provider (run Grok via local `grok` CLI login session)* | 2 comments, updated 2026-09-14 | Parity with existing `claude-cli`, `codex-cli`, `gemini-cli` providers—users want zero-API-key, subscription-based Grok access via the same subprocess pattern. |
| **#998** *Prepaid search hop when keyless DDG isn’t enough* | 0 comments, created 2026-09-14 | Author proposes a **prepaid MCP meter (apifare)** as a drop-in replacement for Brave/SearXNG keys when DuckDuckGo hits rate limits on weak devices. |
| **#997** *Prepaid Brave/Firecrawl vs. those keys for NullClaw web_search* | 0 comments, created 2026-09-14 | Same author pitches **apifare** as a governed proxy so hosts never store raw Brave/Firecrawl keys—single bearer token, metered usage. |

**Underlying theme:** Community wants **pluggable, keyless, and self-hostable search/LLM back-ends**—reducing secret sprawl and vendor lock-in.

---

## 5. Bugs & Stability
**No bug reports, crashes, or regressions filed or updated today.**  
The issue tracker shows only enhancement/discussion items.

---

## 6. Feature Requests & Roadmap Signals
| Request | Likelihood for Next Release | Rationale |
|---------|-----------------------------|-----------|
| Configurable Firecrawl endpoint (#993) | **High** — trivial 1-line config change, aligns with existing provider pattern. |
| `grok-cli` provider (#975) | **Medium-High** — follows established `*_cli` provider architecture; only requires `provider_probe.zig` entry + tests. |
| Prepaid MCP search proxy (#997, #998) | **Low-Medium** — introduces external SaaS dependency (apifare); maintainers may prefer generic “custom HTTP search provider” instead. |

Expect **#993 and #975** to land first; the prepaid-proxy ideas will likely spark a design discussion about a **generic “metered search adapter”** interface.

---

## 7. User Feedback Summary
- **Pain point:** Hard-coded SaaS endpoints force forks for self-hosted setups (#993).  
- **Use case:** Running LLMs via local CLI auth (no API keys) is preferred for cost control and privacy (#975).  
- **Frustration:** DuckDuckGo rate-limits on low-power devices push users toward Brave/SearXNG, but they dislike managing multiple API keys (#997, #998).  
- **Sentiment:** Constructive—contributors propose concrete implementations (Zig config knobs, new provider modules, external proxy) rather than vague complaints.

---

## 8. Backlog Watch
| Item | Age | Why It Needs Attention |
|------|-----|------------------------|
| **#975** *grok-cli provider* | Open since 2026-07-11 (66 days) | Well-scoped, matches existing patterns; stale despite 2 comments. Assign a contributor or label `help wanted`. |
| **#993** *Firecrawl endpoint config* | Open since 2026-08-24 (22 days) | Simple, high-impact for self-hosters; ready for a first-time PR. |

No PRs are pending review—maintainer bandwidth appears focused elsewhere. Triaging these two issues would unblock community contributors quickly.

---

*Data sourced from GitHub API (issues updated 2026-09-14 → 2026-09-15). Links point to `github.com/nullclaw/nullclaw/issues/<number>`.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-15

## 1. Today's Overview
IronClaw shows low but focused activity in the last 24 hours: one new benchmarking issue (#8100) documenting daily failure taxonomy for the `officeqa` suite, and one open pull request (#8077) addressing MCP egress diagnostics. No releases, merges, or closures occurred. The project appears to be in a maintenance/observability phase, with emphasis on classifying test failures and hardening MCP host-leak detection. Overall health signals are neutral — steady diagnostic work but no feature velocity.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress
No PRs were merged or closed today. The only active PR is:
- **#8077** `fix(mcp): classify response leak diagnostics` — Open since 2026-09-06, last updated 2026-09-14. Centralizes the `response_leak_blocked` sentinel in `ironclaw_host_api::http` and teaches the MCP lane to classify it distinctly, preserving host leak-blocking safety while exposing a dedicated MCP-visible reason. Closes #8009.  
  → [View PR #8077](https://github.com/nearai/ironclaw/pull/8077)

## 4. Community Hot Topics
Only one issue and one PR were updated today; neither has comments or reactions.  
- **Issue #8100** — “Daily ironclaw failure taxonomy — 2026-09-14” — Documents 43 non-pass tasks in the `officeqa` benchmark run, attributed almost entirely to model-quality errors (DeepSeek-V4-Flash navigation failures). No discussion yet.  
  → [View Issue #8100](https://github.com/nearai/ironclaw/issues/8100)  
- **PR #8077** — MCP response-leak classification (see above). No community feedback recorded.

Underlying need: automated, daily visibility into benchmark regressions and tighter MCP security boundaries.

## 5. Bugs & Stability
No new bug reports, crashes, or regressions filed today. The sole issue (#8100) is a **benchmark failure taxonomy**, not a code defect. It catalogues model-quality errors in `officeqa`; no fix PR is linked. Severity: **Informational / Observability**.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests today. Signals from current work:
- **MCP diagnostics hardening** (PR #8077) suggests near-term focus on host/MCP security boundaries.
- **Daily failure taxonomy** (Issue #8100) implies investment in automated benchmark triage — expect tooling for failure categorization and trend detection in upcoming iterations.

## 7. User Feedback Summary
No direct user feedback (comments, reactions, or discussion) captured in the last 24 hours. The two tracked items are internal engineering artifacts: a benchmark report and a security-oriented PR. Pain points and satisfaction signals are absent from today’s data.

## 8. Backlog Watch
- **PR #8077** (open since 2026-09-06, 9 days) — Awaits review/merge. Addresses MCP leak classification; security-adjacent, so maintainer attention is warranted.  
  → [View PR #8077](https://github.com/nearai/ironclaw/pull/8077)
- **Issue #8100** (created 2026-09-14) — Fresh benchmark taxonomy; may spawn follow-up issues if patterns persist. Monitor for conversion to actionable fixes.  
  → [View Issue #8100](https://github.com/nearai/ironclaw/issues/8100)

No other long-unanswered items surfaced in today’s dataset.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-15

## 1. Today's Overview
LobsterAI shows **high maintenance velocity** with 27 PRs updated in the last 24 hours (12 merged/closed, 15 open). The activity is dominated by **dependency management** (14 dependabot PRs for React, Vite, Electron, Mermaid, etc.) and **core infrastructure improvements** (3 merged PRs on OpenClaw auth migration and plan-mode safety). Only 1 issue was updated — a stale bug report (#1035) about message deduplication cache persistence across NimGateway reconnects. No new releases were published. The project appears to be in a **stabilization and modernization phase**, aggressively updating its toolchain while hardening authentication and agent execution logic.

## 2. Releases
**No new releases today.** The last release information is not provided in the current data snapshot.

## 3. Project Progress — Merged/Closed PRs Today (12 items)

| PR | Type | Area | Summary |
|----|------|------|---------|
| [#2675](https://github.com/netease-youdao/LobsterAI/pull/2675) | **Feature** | build, main, openclaw | **Migrate xAI auth credentials to canonical SQLite store** — Replaces hand-rolled `auth-profiles.json` + lock-file with OpenClaw's bundled auth-profiles SQLite store. Adds `openclawXaiAuthStore.ts` and shared `xaiAuthStore` contract. |
| [#2674](https://github.com/netease-youdao/LobsterAI/pull/2674) | **Fix** | main | **Resolve plan-mode safety recovery race conditions** — Tracks multiple aborted run IDs (`planModeSafetyRecoveryAbortedRunIds`) instead of single ID; scopes lifecycle error fallback to originating execution (`turnToken` + `requestRunId`). |
| [#2587](https://github.com/netease-youdao/LobsterAI/pull/2587) | **Chore** | deps | **Bump mermaid 10.9.8 → 12.0.0** (major) — Diagram rendering engine major upgrade. |
| [#2464](https://github.com/netease-youdao/LobsterAI/pull/2464) | **Chore** | deps | **Bump react-dom 18.3.1 → 19.2.8** (major) — React 19 adoption in progress. |
| [#2582](https://github.com/netease-youdao/LobsterAI/pull/2582) | **Chore** | deps-dev | **Bump @types/react-dom 18.3.7 → 19.2.5** — Type definitions for React 19. |
| [#2586](https://github.com/netease-youdao/LobsterAI/pull/2586) | **Chore** | deps-dev | **Bump vite 5.4.21 → 8.3.0** (major) — Build toolchain major upgrade. |
| [#2583](https://github.com/netease-youdao/LobsterAI/pull/2583) | **Chore** | build | **Bump trufflesecurity/trufflehog 3.88.30 → 3.97.1** — Secret scanning CI action update. |
| [#2578](https://github.com/netease-youdao/LobsterAI/pull/2578) | **Chore** | deps | **Bump better-sqlite3 12.11.1 → 13.0.3** (major) — Native SQLite binding major version. |

**Key takeaway:** The merged PRs reveal a **coordinated platform upgrade** — React 19, Vite 8, Mermaid 12, better-sqlite3 13 — alongside **architectural hardening** of OpenClaw authentication and agent plan-mode execution safety.

## 4. Community Hot Topics

### Most Active Issue
- **[#1035](https://github.com/netease-youdao/LobsterAI/issues/1035) [OPEN, stale]** — *NimGateway message deduplication cache not cleared on reconnect*  
  **Author:** MaoQianTu | **Created:** 2026-03-30 | **Updated:** 2026-09-14 | **Comments:** 1 | **👍:** 0  
  **Root cause:** Module-level global `processedMessages` Map shared across all `NimGateway` instances. On reconnect (`stop()` + `start()`), stale message IDs persist for 5-minute TTL, causing **silent message loss** for legitimate messages with same IDs.  
  **User impact:** Messages silently dropped post-reconnect with zero user feedback — critical for IM reliability.  
  **Status:** Stale, unassigned, no fix PR linked. **Needs maintainer triage.**

### Notable Feature PR (Open)
- **[#2673](https://github.com/netease-youdao/LobsterAI/pull/2673) [OPEN]** — *Align login introduction with portal showcase*  
  **Author:** btc69m979y-dotcom | **Area:** renderer, docs, cowork  
  **Summary:** New desktop installs show dismissible login intro matching official portal — 10 illustrated use cases (left), welcome copy + sign-in (right). X/Escape skips to existing operation guide. Chat sign-in prompt uses same visual design.  
  **Signal:** **Onboarding/UX polish** for first-time users; aligns desktop with web portal branding.

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **High** | [#1035](https://github.com/netease-youdao/LobsterAI/issues/1035) | NimGateway reconnect causes silent message loss due to global deduplication cache not reset | **No fix PR** — stale, unassigned |
| **Medium** | [#2674](https://github.com/netease-youdao/LobsterAI/pull/2674) | Plan-mode safety recovery race conditions: stale lifecycle events from aborted runs mishandled | **Fixed & merged** — tracks multiple aborted run IDs, scopes fallback to originating execution |
| **Low** | Dependency major bumps (React 19, Vite 8, Mermaid 12, better-sqlite3 13) | Potential breaking changes in UI rendering, build, diagrams, DB layer | **Merged/closed** — but open duplicate PRs exist (#2672, #2671, #2670, #2669) suggesting validation needed |

**Stability note:** The React 19 / Vite 8 / Mermaid 12 / better-sqlite3 13 upgrade stack represents **significant technical risk** — two open duplicate dependabot PRs per upgrade suggest CI validation may be failing or pending manual review.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **OpenClaw auth unification** | [#2675](https://github.com/netease-youdao/LobsterAI/pull/2675) (merged) | ✅ **Done** — xAI migrated to canonical SQLite store; expect other providers to follow |
| **Plan-mode agent safety** | [#2674](https://github.com/netease-youdao/LobsterAI/pull/2674) (merged) | ✅ **Done** — race condition hardening complete |
| **Desktop onboarding redesign** | [#2673](https://github.com/netease-youdao/LobsterAI/pull/2673) (open) | 🟡 **High** — UX alignment with portal, ready for review |
| **React 19 / Vite 8 migration** | Multiple merged dependabot PRs | 🟡 **In progress** — major version bumps merged, but duplicates open suggest stabilization ongoing |
| **NimGateway reliability fix** | [#1035](https://github.com/netease-youdao/LobsterAI/issues/1035) | 🔴 **Blocked** — stale, no assignee, critical IM bug |

**Prediction:** Next version will likely ship **React 19 + Vite 8 baseline**, **OpenClaw auth consolidation**, and **plan-mode hardening**. The NimGateway bug (#1035) is a release blocker if IM is a core feature.

## 7. User Feedback Summary
- **Pain point (implicit from #1035):** Users experience **silent message loss after network reconnect** — no error, no retry, no notification. This erodes trust in real-time features.
- **Desire (from #2673):** Smoother **first-run experience** with visual onboarding matching web portal — reduces friction for new desktop users.
- **No direct user complaints** in today's data — activity is maintainer/dependabot driven.

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| **[#1035](https://github.com/netease-youdao/LobsterAI/issues/1035)** NimGateway deduplication cache bug | **5.5 months** (since 2026-03-30) | **Critical** — silent data loss in IM | Assign owner; fix: move `processedMessages` to instance scope or clear on `start()` |
| **[#2461](https://github.com/netease-youdao/LobsterAI/pull/2461)** eslint-plugin-react-hooks 5.2.0 → 7.1.1 | 1.5 months | Medium — lint rules may break CI | Review React 19 compat; merge or close |
| **[#2460](https://github.com/netease-youdao/LobsterAI/pull/2460)** rimraf 5 → 6 (native fs/promises) | 1.5 months | Low — build script impact | Test build; merge |
| **[#2459](https://github.com/netease-youdao/LobsterAI/pull/2459)** @nodesecure/js-x-ray 14 → 16 | 1.5 months | Low — security scanning dep | Validate; merge |
| **[#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)** Electron 43 → 44 + electron-builder | **5.5 months** | **High** — Electron major affects app runtime, security, native modules | **Urgent** — test app startup, native deps, notarization; merge or rebase |

**Critical backlog alert:** Electron 44 upgrade (#1277) has been open since **April 2026** — 5+ months unmerged. Electron 43 is EOL; security patches and Chromium updates require this upgrade. The NimGateway bug (#1035) is equally old and user-impacting.

---

**Digest generated:** 2026-09-15 | **Data source:** GitHub API (issues, PRs, releases) | **Project:** netease-youdao/LobsterAI

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-15

---

## 1. Today's Overview
Moltis shows **very low activity** today with zero issue updates, zero merged/closed PRs, and no new releases. The only movement is a single open pull request (#1269) addressing a flaky OAuth test timing race. This suggests the project is in a maintenance or stabilization phase rather than active feature development. The absence of community discussions or bug reports indicates either a stable codebase or limited external engagement at this time.

---

## 2. Releases
**No new releases** published today. The latest version remains unchanged.

---

## 3. Project Progress
**No PRs merged or closed today.** The sole open PR (#1269) is a test infrastructure fix targeting a CI flake (`moltis-064r`) in PKCE authentication flows. It replaces fragile popup-close event detection with durable main-page authentication state waits. This improves test reliability but does not ship user-facing functionality.

---

## 4. Community Hot Topics
**No active issues or PRs with significant discussion.** The only updated item is PR #1269 with 0 comments and 0 reactions, indicating no community debate or external contributor involvement. The project appears to be maintained internally with minimal public discourse.

---

## 5. Bugs & Stability
**No new bugs, crashes, or regressions reported today.** The PR #1269 addresses a pre-existing **test flakiness** (CI failure in `moltis-064r`), not a production bug. Severity: **Low** (test infrastructure only). A fix PR exists and is open for review.

---

## 6. Feature Requests & Roadmap Signals
**No feature requests or roadmap signals detected today.** With zero new issues and no discussion on existing ones, there is no observable user-driven direction. The current focus appears to be on hardening test reliability (PR #1269), which may precede future OAuth-related work but signals no concrete feature pipeline.

---

## 7. User Feedback Summary
**No user feedback captured today.** No issues, discussions, or reactions exist to surface pain points, use cases, or satisfaction signals. The project lacks visible external user engagement in the last 24h.

---

## 8. Backlog Watch
**No long-unanswered issues or PRs identified in today’s data.** However, the broader backlog (not shown in 24h window) should be audited for stale items. PR #1269, while fresh, is the only active thread — maintainers should ensure it receives timely review to avoid becoming stale.

---

*Data sourced from GitHub API for moltis-org/moltis. Links: [PR #1269](https://github.com/moltis-org/moltis/pull/1269).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-15

## 1. Today's Overview
CoPaw shows **very high development velocity** with 50 PRs updated and 15 issues touched in the last 24 hours. The project is in active feature development (Hub multi-tenancy, cron improvements, console UX polish) while simultaneously addressing a cluster of user-facing bugs in task execution, scheduled jobs, and context management. No new release was cut today, but 11 PRs were merged/closed, indicating steady integration. The issue backlog reveals recurring pain points around **execution control reliability** (stop not stopping, max-iter silent failure) and **output visibility** (scheduled task results hidden/folded), suggesting the next patch should prioritize stability over new features.

## 2. Releases
**No new releases today.** The latest version remains **v2.2.1** (referenced in issues #7709, #7771, #7775). Several merged PRs (#7776, #7703, #7753, #7543) contain user-facing improvements that will likely roll into v2.2.2 or v2.3.

## 3. Project Progress — Merged/Closed PRs Today (11)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#7776](https://github.com/agentscope-ai/QwenPaw/pull/7776) | **Feature** | Cron task overhaul: plain-text/JSON input toggle, per-task model selection, preserved execution history, enhanced inbox results | Major UX upgrade for scheduled agents |
| [#7703](https://github.com/agentscope-ai/QwenPaw/pull/7703) | **Feature** | Visual compaction redesign: stable image batches, source-text recall, readable compression presets | Improves long-context readability |
| [#7753](https://github.com/agentscope-ai/QwenPaw/pull/7753) | **Fix** | `make-skill` v2.1: enforces stored plan before draft, fixes Windows path escaping, bumped `skill-maker` to 2.1.1 | Skill authoring robustness |
| [#7543](https://github.com/agentscope-ai/QwenPaw/pull/7543) | **Enhancement** | Background auto-update (no more foreground blocking) | Eliminates app downtime during updates |
| [#7696](https://github.com/agentscope-ai/QwenPaw/pull/7696) | **Feature** | Hub local admin bootstrap (`qwenpaw hub --init-admin`) | Enables headless Hub provisioning |
| [#7766](https://github.com/agentscope-ai/QwenPaw/pull/7766) | **Fix** | Hub: authenticate native file preview requests (token in query string) | Fixes 401 on browser file previews |
| [#7751](https://github.com/agentscope-ai/QwenPaw/pull/7751) | **Fix** | Docker: align app Python runtime with desktop (pinned 3.11 standalone) | Consistency, avoids OpenSSL 3.0 issues |
| [#7703](https://github.com/agentscope-ai/QwenPaw/pull/7703) | **Feature** | Context compaction visual improvements | Better history compression UX |
| [#7758](https://github.com/agentscope-ai/QwenPaw/pull/7758) | **Fix** | Console: align embedding timeout validation (0–300s, explicit feedback) | Prevents silent clamping |
| [#7759](https://github.com/agentscope-ai/QwenPaw/pull/7759) | **Fix** | Console: restore visible link focus indicators (`:focus-visible`) | Accessibility compliance |
| [#7760](https://github.com/agentscope-ai/QwenPaw/pull/7760) | **Fix** | CLI: allow memory jobs to drain on shutdown (12s grace, Ctrl+BREAK on Windows) | Prevents ReMe data loss on exit |

**Net momentum:** Strong. Core workflow fixes (cron, compaction, updates, shutdown) + Hub enterprise features (admin bootstrap, auth, file preview) + accessibility polish.

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Activity | Core Need |
|------|----------|-----------|
| [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | 7 comments, 👍0 | **Critical reliability**: "Stop" button shows stopped but task continues executing → 409 on new input. User loses control. |
| [#7709](https://github.com/agentscope-ai/QwenPaw/issues/7709) | 6 comments, 👍0 | **Scheduled task observability**: Results frequently missing, folded into steps/thinking, or placed in thinking block. |
| [#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193) | 3 comments, 👍0 | **Memory isolation bug**: Agent searches wrong session's memory (cross-session leakage). Closed as `invalid/need-info` but user insists. |
| [#7767](https://github.com/agentscope-ai/QwenPaw/issues/7767) | 2 comments, 👍0 | **Multi-bug report from plugin dev**: stale attachment blob, cron misfire, console tail-drop, `on_acting` never fires. |
| [#7775](https://github.com/agentscope-ai/QwenPaw/issues/7775) | 1 comment, 👍0 | **Silent max-iter failure**: Turn ends with no final answer, no warning emitted. User sees only mid-work text. |
| [#7778](https://github.com/agentscope-ai/QwenPaw/issues/7778) / [#7780](https://github.com/agentscope-ai/QwenPaw/issues/7780) / [#7777](https://github.com/agentscope-ai/QwenPaw/issues/7777) | 2+2+1 comments | **Duplicate feature request**: Explicit tool/MCP invocation via `//` fuzzy search (mirrors `/` for skills). Strong user demand. |

**Underlying theme:** Users are hitting **execution control gaps** (stop, max-iter, cron reliability) and **observability gaps** (where did my output go?). The duplicate `//` tool-invocation requests show power users want **deterministic tool routing** when multiple similar tools exist.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **🔴 Critical** | [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567): Stop button lies — task keeps running, causes 409 on next input | Open | No |
| **🔴 Critical** | [#7775](https://github.com/agentscope-ai/QwenPaw/issues/7775): Max-iter exhaustion ends turn silently, no final answer, no warning | Open | No |
| **🟠 High** | [#7709](https://github.com/agentscope-ai/QwenPaw/issues/7709): Scheduled task results missing/folded/hidden in thinking | Open | Partially addressed by [#7776](https://github.com/agentscope-ai/QwenPaw/pull/7776) (merged) |
| **🟠 High** | [#7767](https://github.com/agentscope-ai/QwenPaw/issues/7767): 4-bug cluster (stale attachment, cron misfire, tail-drop, missing `on_acting`) | Open | No |
| **🟡 Medium** | [#7771](https://github.com/agentscope-ai/QwenPaw/issues/7771): Context compaction creates blank "Compact Chat Session Title" tags | Open | No |
| **🟡 Medium** | [#7727](https://github.com/agentscope-ai/QwenPaw/issues/7727): Out-of-workspace write block bypassed by kimi-code ACP tool (path extraction fails) | Open | No |
| **🟡 Medium** | [#7726](https://github.com/agentscope-ai/QwenPaw/issues/7726): ACP `trusted: true` falls back to interactive prompts (optionId mismatch) | Open | No |
| **🟢 Low** | [#7772](https://github.com/agentscope-ai/QwenPaw/issues/7772): Cannot connect newapi-proxied model (v1.0.0-rc.26) | Open | No |

**Note:** #7776 (merged) directly addresses #7709's cron output/history issues. The other critical bugs have no linked fix PRs yet.

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Explicit tool/MCP invocation via `//`** | [#7778](https://github.com/agentscope-ai/QwenPaw/issues/7778), [#7780](https://github.com/agentscope-ai/QwenPaw/issues/7780), [#7777](https://github.com/agentscope-ai/QwenPaw/issues/7777) | **High** — 3 duplicate issues same day, mirrors existing `/` skill pattern, clear UX win |
| **Model failover configuration UI** | [#7749](https://github.com/agentscope-ai/QwenPaw/issues/7749) | **Medium** — User on v2.2.1 can't find documented feature; likely docs gap or missing UI |
| **Hub: managed models, invitations, token budgets** | [#7779](https://github.com/agentscope-ai/QwenPaw/pull/7779) (open PR) | **High** — Large PR from core maintainer (rayrayraykk), enterprise-ready feature set |
| **PawPort documentation & blog** | [#7781](https://github.com/agentscope-ai/QwenPaw/pull/7781) (open PR) | **High** — Docs-only PR, likely shipping soon |
| **Background auto-update** | [#7543](https://github.com/agentscope-ai/QwenPaw/issues/7543) → merged in [#7543](https://github.com/agentscope-ai/QwenPaw/pull/7543) | **Done** — Will be in next release |
| **Custom channel support for skills** | [#7782](https://github.com/agentscope-ai/QwenPaw/pull/7782) (open PR) | **Medium** — Fixes #7746, extends skill ecosystem |

**Predicted v2.2.2 / v2.3 scope:** Cron overhaul (#7776), background updates (#7543), Hub admin bootstrap (#7696), compaction UX (#7703), skill maker v2.1 (#7753), plus hotfixes for #7567/#7775 if prioritized.

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Loss of execution control** | #7567: "I clicked stop, UI says stopped, but it's still running" | User inputs correction → 409 error → refresh → original bad task still running |
| **Invisible scheduled outputs** | #7709: "Results often folded in steps/thinking or just gone" | Users can't verify cron jobs worked; trust erodes |
| **Silent failure at iteration limit** | #7775: "Turn ends with no final answer, no warning" | User sees truncated work, doesn't know why agent stopped |
| **Cross-session memory leak** | #7193: "Agent searched another session's memory, tried to do that task" | Data privacy / context corruption risk |
| **Plugin/ACP integration fragility** | #7767: 4 distinct bugs in guardrail-plugin build | Advanced users blocked on extensibility |
| **Model config discoverability** | #7749: "Failover setting documented but not in UI" | Feature exists but unusable |
| **Proxy compatibility** | #7772: newapi v1.0.0-rc.26 fails model test | Enterprise proxy users blocked |

**Positive signals:** Users appreciate `/` skill invocation (explicitly referenced in #7777), visual compaction improvements (#7703), and background updates (#7543).

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193) | 25 days | Cross-session memory leakage — closed as `invalid/need-info` but user provided screenshots; potential data isolation bug |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | 54 days | Reranker UI config for ReMeLightMemoryCard — long-open PR, blocks memory tuning UX |
| [#7727](https://github.com/agentscope-ai/QwenPaw/issues/7727) | 3 days | Workspace security bypass via kimi-code ACP — path extraction doesn't recognize kimi toolCall fields |
| [#7726](https://github.com/agentscope-ai/QwenPaw/issues/7726) | 3 days | ACP `trusted: true` broken — silent fallback to interactive prompts breaks automation |
| [#7767](https://github.com/agentscope-ai/QwenPaw/issues/7767) | 1 day | 4-bug cluster from plugin developer — indicates systemic issues in attachment handling, cron, console, middleware hooks |

**Maintainer action suggested:** Triage #7193 (reopen if reproducible), review #6399 (merge or close), assign security-relevant #7727/#7726, engage with plugin dev on #7767.

---

**Project Health Score: 🟡 Yellow** — High feature velocity and strong PR throughput, but **critical execution-control bugs (#7567, #7775) remain unfixed** and user trust issues (silent failures, invisible outputs) are accumulating. Recommend a **stability-focused patch (v2.2.2)** before advancing Hub enterprise features.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-09-15

## 1. Today's Overview
ZeptoClaw showed minimal but focused maintenance activity in the last 24 hours. One CI-related issue (#676) was closed and its corresponding fix PR (#677) was merged, both addressing a GitHub Actions permission gap that prevented the `rustsec/audit-check` action from publishing its results. No new releases, feature work, or community discussions occurred. The project remains in a stable maintenance phase with attention to CI reliability.

## 2. Releases
No new releases published today.

## 3. Project Progress
| PR | Title | Status | Summary |
|----|-------|--------|---------|
| [#677](https://github.com/qhkm/zeptoclaw/pull/677) | fix(ci): allow rustsec audit check reporting | **Merged** | Granted the `Security audit` job `contents: read` and `checks: write` permissions so `rustsec/audit-check` can create its check run. Resolves the "Resource not accessible by integration" failure on push events. |

**Net effect:** CI security audit reporting now functions correctly on push without broadening token scopes beyond the audit job.

## 4. Community Hot Topics
No active discussions, comments, or reactions in the last 24 hours. The only updated items (#676, #677) had zero comments and zero reactions.

## 5. Bugs & Stability
| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#676](https://github.com/qhkm/zeptoclaw/issues/676) — `rustsec/audit-check` fails to publish check run due to missing `checks: write` permission | **Low** (CI-only, no runtime impact) | **Closed** | [#677](https://github.com/qhkm/zeptoclaw/pull/677) (merged) |

No runtime bugs, crashes, or regressions reported.

## 6. Feature Requests & Roadmap Signals
No feature requests or roadmap signals in today’s activity. The merged PR is purely a CI configuration fix.

## 7. User Feedback Summary
No user feedback, pain points, or use-case reports surfaced in the last 24 hours.

## 8. Backlog Watch
No long-unanswered issues or PRs requiring maintainer attention were identified in today’s data. The single actionable item (#676) was resolved within ~4 days.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-15

## 1. Today's Overview
ZeroClaw shows **very high development velocity** with 50 pull requests updated in the last 24 hours (39 open, 11 merged/closed) and 6 issues updated (4 open, 2 closed). No new release was published today. The project is actively iterating across security, provider integrations, channel features (Telegram/Discord), runtime improvements, and governance processes. Several large, stacked PRs indicate ongoing architectural work (browser PKCE, shell permission policy, multi-model provider support).

## 2. Releases
**No new releases today.** The latest release information is not available in the provided data.

---

## 3. Project Progress (Merged/Closed in Last 24h)
*11 PRs merged/closed per summary; specific merged PRs not listed in the top-20 open set. The following issues were closed today:*

| Item | Type | Summary |
|------|------|---------|
| [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) | Enhancement (Security) | **Closed** — Allow stronger pairing codes (default 32-char alphanumeric) instead of 6-digit numeric. Author: sken130. |
| [#10588](https://github.com/zeroclaw-labs/zeroclaw/issues/10588) | Enhancement (Config) | **Closed** — Raise default `multimodal.max_image_size_mb` from 5 to 20 (ceiling) and document rationale. Author: JordanTheJet. |

*Closed PRs likely include routine fixes, dependency updates, and smaller enhancements merged alongside the two closed issues above.*

---

## 4. Community Hot Topics (Most Active Discussions)

| Item | Type | Comments | Key Signals |
|------|------|----------|-------------|
| [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) | RFC (Governance) | **11** | Simplify RFC voting: remove mandatory discussion windows, make `REVISE` stop current snapshot. Contributors want lighter process friction. |
| [#9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) | Enhancement (CI) | **6** | Recalculate `size:*`/`risk:*` labels on every PR diff change automatically, preserving maintainer overrides. High priority (P2), high risk. |
| [#10853](https://github.com/zeroclaw-labs/zeroclaw/issues/10853) | Bug/Task (Security) | **2** | Follow-ups from #10604: malformed `x-opencode-session` header suppresses fallback; header validation & affinity logic hardening. |
| [#10679](https://github.com/zeroclaw-labs/zeroclaw/pull/10679) | PR: Enhancement (Tools) | — | Add **Keenable** web search provider (first no-config alternative to DuckDuckGo). XL size, high risk, needs maintainer review. |
| [#10321](https://github.com/zeroclaw-labs/zeroclaw/pull/10321) | PR: Security (Architecture) | — | **Browser PKCE + cross-surface enrollment API** (stage 5 of #8289). Stacked on 10+ PRs; XL, high risk, distinguished contributor. |

**Underlying needs:** Contributors are pushing to **reduce process overhead** (RFC voting), **automate CI label accuracy**, and **harden security surfaces** (PKCE, session headers, image validation). Large stacked PRs suggest coordinated architectural landing.

---

## 5. Bugs & Stability (Reported/Active Today)

| Severity | Item | Component | Status | Fix PR |
|----------|------|-----------|--------|--------|
| **High** | [#10853](https://github.com/zeroclaw-labs/zeroclaw/issues/10853) | Provider (OpenAI/compatible) | Open, accepted | [#10864](https://github.com/zeroclaw-labs/zeroclaw/pull/10864) (open) |
| **High** | [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) | Multimodal (image validation) | Open, needs author action | PR itself (adds pixel-level decode validation) |
| **High** | [#10860](https://github.com/zeroclaw-labs/zeroclaw/pull/10860) | Providers (data-URI handling) | Open | PR itself (keeps non-image data-URIs as text) |
| **High** | [#10236](https://github.com/zeroclaw-labs/zeroclaw/pull/10236) | Desktop (daemon log bounding) | Open, needs maintainer review | PR itself (bounded logging, bootstrap ack) |
| **High** | [#9830](https://github.com/zeroclaw-labs/zeroclaw/pull/9830) | Browser (automation opt-in) | Open | PR itself (separate `browser` tool from `browser_open`) |
| **Medium** | [#10740](https://github.com/zeroclaw-labs/zeroclaw/issues/10740) | zerocode/TUI | Open, accepted | — |
| **Medium** | [#10862](https://github.com/zeroclaw-labs/zeroclaw/pull/10862) | Runtime (cached system prompt date) | Open | PR itself (remove `Local::now()` from cached prompt) |

**Top risks:** Provider request failures from corrupt images (#9819), session-affinity header bugs (#10853), unbounded daemon logs (#10236), and accidental full-browser automation exposure (#9830). Fix PRs exist for all high-severity items.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Expedited merge lane** (governance) | [#10677](https://github.com/zeroclaw-labs/zeroclaw/pull/10677) (docs only) | High — documentation merged, process change implied |
| **Automatic PR size/risk relabeling** | [#9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) (P2, in-progress) | High — active work, CI integration |
| **Keenable web search provider** | [#10679](https://github.com/zeroclaw-labs/zeroclaw/pull/10679) (XL, needs review) | Medium — first third-party no-config search; review bottleneck |
| **Passive Telegram group context** | [#10640](https://github.com/zeroclaw-labs/zeroclaw/pull/10640) (L, needs author action) | Medium — opt-in feature, reuses existing passive infra |
| **Multi-model per provider profile** | [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) (XL, needs author action) | Medium — significant config/runtime change |
| **Per-user Telegram group sessions** | [#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) (XL) | Low-Medium — complex scope toggle, security review needed |
| **Built-in `zeroclaw-docs` skill** | [#9579](https://github.com/zeroclaw-labs/zeroclaw/pull/9579) (L) | Medium — embeds live docs for agent self-service |
| **Shell V1 permission policy (RFC #7155)** | [#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) (XL, needs author action) | High — implements accepted RFC phases 0+1 |
| **ACA standalone default agent selection** | [#9638](https://github.com/zeroclaw-labs/zeroclaw/pull/9638) (S, needs maintainer review) | High — small, focused, unblocked |

**Prediction:** Next version will likely ship the **expedited merge lane**, **shell permission policy (phases 0+1)**, **automatic PR label recalculation**, and **Keenable search provider** (once reviewed). Multi-model providers and Telegram session scopes may slip.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point / Use Case | Evidence |
|------------------------|----------|
| **Pairing codes too weak** (6 digits) | [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) — users request arbitrary-length alphanumeric; now defaulted to 32 chars (closed). |
| **RFC process too slow/rigid** | [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) — mandatory discussion windows add friction without review gains. |
| **Image uploads fail silently on corrupt files** | [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) — header sniffing insufficient; need full decode validation. |
| **Session management inconsistent in TUI** | [#10740](https://github.com/zeroclaw-labs/zeroclaw/issues/10740) — `Ctrl+N` replaces session vs. sidebar `[+]` adds; users expect additive behavior. |
| **Telegram group collaboration broken** | [#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772), [#10640](https://github.com/zeroclaw-labs/zeroclaw/pull/10640) — hardcoded sender scope prevents multi-user context; passive context opt-in requested. |
| **Browser automation exposed by default** | [#9830](https://github.com/zeroclaw-labs/zeroclaw/pull/9830) — `browser` tool force-merged into auto-approve; users want opt-in. |
| **Daemon logs unbounded (disk risk)** | [#10236](https://github.com/zeroclaw-labs/zeroclaw/pull/10236) — desktop hidden daemon captures logs without bounds. |
| **Need live docs for agent self-help** | [#9579](https://github.com/zeroclaw-labs/zeroclaw/pull/9579) — agents hallucinate ZeroClaw ops; embed version-matched sources. |

**Sentiment:** Users are **technically sophisticated**, filing detailed security/architectural issues. They value **configurability** (pairing codes, Telegram scopes), **safety defaults** (browser opt-in, image validation), and **process efficiency** (RFC, CI labels). No overt dissatisfaction — high engagement suggests investment in project success.

---

## 8. Backlog Watch (Stale High-Value Items Needing Attention)

| Item | Age | Type | Why It Matters | Blockers |
|------|-----|------|----------------|----------|
| [#9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) | ~53 days | Enhancement (CI) | Auto-recalc PR labels on every push; reduces maintainer toil, improves routing. | High risk, needs safe execution of untrusted diff code. |
| [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) | ~39 days | Bug Fix (Multimodal) | Prevents provider crashes from corrupt images; pixel-level validation. | Needs author action (review feedback). |
| [#10321](https://github.com/zeroclaw-labs/zeroclaw/pull/10321) | ~22 days | Security (Architecture) | Browser PKCE + cross-surface enrollment — core auth modernization. | Stacked on 10+ PRs; XL scope, high risk. |
| [#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) | ~11 days | Security (Shell Policy) | Implements accepted RFC #7155 phases 0+1; unified tool permissions. | Needs author action; 5 commit slices. |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | ~39 days | Enhancement (Providers) | Multiple models per provider profile — reduces credential duplication. | Needs author action; XL config/runtime change. |
| [#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) | ~41 days | Enhancement (Telegram) | Per-user sessions in groups — enables real team collaboration. | High risk, security review, XL. |
| [#9638](https://github.com/zeroclaw-labs/zeroclaw/pull/9638) | ~45 days | Enhancement (ACP) | Standalone ACP default agent selection — small, unblocked. | Needs maintainer review only. |
| [#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259) | ~24 days | Security (RPC Auth) | Enforce authenticated principals on RPC (stage 3 of #8289). | Depends on #10255, #10248; XL. |
| [#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997) | ~32 days | Enhancement (Telegram) | Secure model picker inline keyboard — UX for model switching. | High risk, XL. |
| [#10677](https://github.com/zeroclaw-labs/zeroclaw/pull/10677) | ~8 days | Docs (Governance) | Expedited merge lane docs — process improvement. | Needs maintainer review; docs-only, low risk. |

**Recommendation:** Prioritize **#9638** (quick win), **#10677** (process unblock), **#9345** (CI automation), and **#10610** (security policy). The stacked auth series (#10321, #10259) needs coordinated review.

---

*Digest generated from GitHub API data as of 2026-09-15. All links point to `github.com/zeroclaw-labs/zeroclaw`.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*