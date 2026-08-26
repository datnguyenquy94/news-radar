# OpenClaw Ecosystem Digest 2026-08-26

> Issues: 185 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-26 01:46 UTC

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

# OpenClaw Project Digest — 2026-08-26

## 1. Today's Overview

OpenClaw shows **extremely high development velocity** with 500 PRs and 185 issues updated in the past 24 hours. The 187 merged/closed PRs indicate rapid iteration, though the 313 open PRs suggest a growing review backlog. No new releases were published today. The issue landscape is dominated by **critical stability bugs** around subagent completion loss, session state corruption, memory system unbounded growth, and gateway restart loops — multiple tagged as `issue-rating: 🦞 diamond lobster` (highest severity). The project appears to be in a heavy stabilization phase ahead of a potential 2026.8.x release.

---

## 2. Releases

**No new releases today.** The latest beta appears to be `v2026.8.1-beta.3` (from issue #125626), currently undergoing release validation.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary |
|----|------|---------|
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | Web UI, Gateway, Auth | **Closed** — Fixed Claude CLI OAuth availability in Control UI after gateway restart; resolved contradictory auth profile state |
| [#128371](https://github.com/openclaw/openclaw/pull/128371) | Release, Scripts, Security | **Closed** — Authorized focused beta evidence for release validation; resolved beta.3 blocker |
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | Gateway, All Channels | **Closed** — Fixed conversation delivery staying within agent bindings across Discord, iMessage, Matrix, Mattermost, Slack, Telegram, Feishu |
| [#123975](https://github.com/openclaw/openclaw/pull/123975) | Scripts, CI | **Closed** — Cleaned up `tsgo` process trees on timeout/signal; added `OPENCLAW_TSGO_TIMEOUT_MS` watchdog |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | Security, Web UI, CLI | **Closed** — Added install policy warning acknowledgement flow in Control UI and CLI |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | Security, All Apps | **Closed** — Required acknowledgement for install policy warnings across macOS, gateway, CLI |
| [#129745](https://github.com/openclaw/openclaw/pull/129745) | CI, Scripts | **Closed** — Restored release-validation lint gate |
| [#129740](https://github.com/openclaw/openclaw/pull/129740) | Android, i18n | **Closed** — Refreshed native locales via automated workflow |

**Theme:** Security hardening (install policy), release pipeline stabilization, cross-channel conversation delivery fixes, and CI/tooling hygiene.

---

## 4. Community Hot Topics (Most Commented Issues/PRs)

### Top Issues by Discussion Volume

| Issue | Comments | 👍 | Core Problem |
|-------|----------|-----|--------------|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 26 | 2 | **Subagent completion silently lost** — no retry, notification, or auto-restart on timeout (P1, data/message loss) |
| [#125626](https://github.com/openclaw/openclaw/issues/125626) | 19 | 0 | **2026.8.1 beta feedback** — release validation tracking |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | 15 | 0 | **Subagent completion delivery lost** on direct-announce timeout, drain, or orphan prune (P1, message loss) |
| [#83959](https://github.com/openclaw/openclaw/issues/83959) | 11 | 1 | **Codex app-server startup retries exhaust** before replacement ready (P1, crash loop) |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 9 | 1 | **Unreaped child process leaks** → zombie accumulation & runtime degradation (P1, regression) |

**Underlying needs:** Users are experiencing **silent data loss** in multi-agent workflows, **process lifecycle leaks**, and **provider integration instability** — all blocking production fleet deployments (see #94686: 16-agent fleet stability crisis).

### Top PRs by Activity (All Open, Awaiting Review)

| PR | Area | Status |
|----|------|--------|
| [#129670](https://github.com/openclaw/openclaw/pull/129670) | Secrets, Security | `needs proof` — Agent-requested credentials the model never sees (XL, security-boundary) |
| [#128995](https://github.com/openclaw/openclaw/pull/128995) | Web UI | `waiting on author` — Full session actions from chat header (XL) |
| [#129092](https://github.com/openclaw/openclaw/pull/129092) | Audit, Gateway | `waiting on author` — Record admitted model routing decisions (XL, security-boundary) |
| [#123356](https://github.com/openclaw/openclaw/pull/123356) | Control UI | `waiting on author` — Stage slash command arguments in composer (XL, session-state) |
| [#112820](https://github.com/openclaw/openclaw/pull/112820) | Plugin SDK, Voice | `needs proof` — Gateway-managed realtime voice sessions (XL, compatibility/security) |

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 Critical (P0/P1, Data Loss, Crash Loops)

| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | P1, 🦞 diamond lobster | ❌ | Subagent completion **silently lost** — no retry, notification, auto-restart |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | P1, 🦞 diamond lobster | 🟡 [#129754](https://github.com/openclaw/openclaw/pull/129754) open | Completion delivery lost on timeout/drain/orphan prune |
| [#111372](https://github.com/openclaw/openclaw/issues/111372) | P1, 🦞 diamond lobster | ❌ | Gateway **infinite SIGTERM restart loop** on macOS after 2026.7.1 upgrade |
| [#87928](https://github.com/openclaw/openclaw/issues/87928) | P0, 🦞 diamond lobster | ❌ | macOS update leaves **manual-update loop + stale node host** → gateway restart storm |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) | P1, 🦞 diamond lobster | ❌ | 6.x state migration leaves **channel conversation-store SQLite empty (0 bytes)** — breaks proactive sends |
| [#112248](https://github.com/openclaw/openclaw/issues/112248) | P1, 🦐 gold shrimp | ❌ | `@openclaw/codex` plugin **fails to register** — all `/codex` commands silently no-op |
| [#120385](https://github.com/openclaw/openclaw/issues/120385) | P2, 🦞 diamond lobster | ❌ | Code Mode **incomplete tool catalog** for scheduled/cron turns — MCP tools missing |

### 🟠 High (P1/P2, Session State, Message Loss)

| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#83959](https://github.com/openclaw/openclaw/issues/83959) | P1, 🐚 platinum hermit | ❌ | Codex app-server startup retries exhaust before replacement ready |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | P1, 🦐 gold shrimp | ❌ | **Zombie process leak** from hook/tool execution → runtime degradation |
| [#110771](https://github.com/openclaw/openclaw/issues/110771) | P1, 🦞 diamond lobster | ❌ | WebChat persists internal records, loses durable turn status |
| [#119692](https://github.com/openclaw/openclaw/issues/119692) | P1, 🦞 diamond lobster | ❌ | OpenAI-compatible streaming drops token usage for MiniMax-M3 (all-zero transcripts) |
| [#121232](https://github.com/openclaw/openclaw/issues/121232) | P1, 🦞 diamond lobster | ❌ | Memory-core dreaming: ranker nominates candidates applier always rejects ("Ranked N, Promoted 0") |
| [#122739](https://github.com/openclaw/openclaw/issues/122739) | P1, 🦞 diamond lobster | ❌ | Matrix validator rejects modern room IDs, silently empties admission list |

### 🟡 Medium (P2, UX, Provider Issues)

| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#91941](https://github.com/openclaw/openclaw/issues/91941) | P1, 🦞 diamond lobster | ❌ | Feishu streaming card full-content updates cause **severe latency regression** |
| [#115034](https://github.com/openclaw/openclaw/issues/115034) | P2, 🦞 diamond lobster | ❌ | Cross-host `workdir` leaks to node → `spawn /bin/sh ENOENT` |
| [#119711](https://github.com/openclaw/openclaw/issues/119711) | P2, 🦞 diamond lobster | ❌ | Degraded primary model retried across turns despite cooldown state |
| [#96463](https://github.com/openclaw/openclaw/issues/96463) | P2, 🦞 diamond lobster | ❌ | Usage always 0 for custom OpenAI-compatible provider with `--local` |
| [#48709](https://github.com/openclaw/openclaw/issues/48709) | P2, 🦞 diamond lobster | ❌ | Gemini 2.5 Pro: textSignature bloat + think tags + mixed text/tool → session failures |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signals | Likelihood for Next Version |
|-------|----------|---------|----------------------------|
| [#60572](https://github.com/openclaw/openclaw/issues/60572) | P3 | **Multi-Slot Memory Architecture** — replace single memory slot with purpose-specific slots (7 👍) | Medium — architectural, needs design |
| [#56781](https://github.com/openclaw/openclaw/issues/56781) | P2 | **Fallback model chain** for compaction & LCM summaryModel (currently single-model, fails silently) | High — addresses critical gap |
| [#63930](https://github.com/openclaw/openclaw/issues/63930) | P2 | **Anthropic Advisor Tool** (beta server-side tool) support | Medium — beta upstream, generic server-side tool handling needed |
| [#105494](https://github.com/openclaw/openclaw/issues/105494) | P3 | **Interactive "memory therapy"** session to resolve open questions/contradictions | Low — novel UX, needs design |
| [#120244](https://github.com/openclaw/openclaw/issues/120244) | P3 | **Cron maintenance window** with role isolation (follow-up to #79192) | Medium — operational need, has prior art |
| [#56880](https://github.com/openclaw/openclaw/issues/56880) | P3 | **Concurrent message handling** per session (async agent turns) | Medium — UX bottleneck, architectural change |
| [#103764](https://github.com/openclaw/openclaw/issues/103764) | P3 | **Kotlin Multiplatform mobile logic sharing** (Android/iOS) | Low — long-term, native UI must stay platform-owned |

**Strongest signals:** Fallback model chains (#56781), server-side tool support (#63930), and cron maintenance windows (#120244) address immediate production pain points and have maintainer engagement.

---

## 7. User Feedback Summary

### Pain Points (from issues)
- **Silent data loss** in subagent workflows — completions vanish without notification (#44925, #67777)
- **Gateway instability** on macOS — restart loops after updates (#111372, #87928)
- **Memory system unbounded growth** — SQLite tables fill disk, no retention policy (#114612)
- **Provider integration fragility** — OAuth binds to deactivated workspaces (#56693), fallback chains disabled on manual model switch (#84865)
- **Channel-specific regressions** — Feishu latency (#91941), Matrix room ID validation (#122739), Mattermost ack reactions missing (#99277), Signal typing indicator not showing (#84120)
- **Zombie process accumulation** — degrades runtime over days (#97616)
- **Inference overhead** — ~10 sec/call vs ~1.3 sec direct (#88201)

### Use Cases Emerging
- **Large autonomous fleets** (16+ agents) — #94686 reveals fleet-scale stability requirements
- **Multi-provider routing** with fallback chains — critical for production reliability
- **Realtime voice plugins** — #112820 shows demand for voice session SDK
- **Mobile native apps** — Android/iOS sharing logic via KMP (#103764)

### Satisfaction Signals
- High engagement on beta feedback (#125626, 19 comments)
- Security features (install policy acknowledgement) well-received — multiple PRs merged
- Active community contributing repros and fixes (e.g., #129754 addressing #67777)

---

## 8. Backlog Watch (Long-Open, High-Impact, Needs Maintainer Attention)

| Issue | Age | Severity | Why It Matters |
|-------|-----|----------|----------------|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | ~5 months | P1, 🦞 | **Core subagent reliability** — silent completion loss breaks multi-agent trust |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | ~4 months | P1, 🦞 | Partial fix in [#129754](https://github.com/openclaw/openclaw/pull/129754) but needs review |
| [#60572](https://github.com/openclaw/openclaw/issues/60572) | ~5 months | P3 | **Memory architecture redesign** — blocker for advanced memory use cases |
| [#56781](https://github.com/openclaw/openclaw/issues/56781) | ~5 months | P2 | **Fallback model chain** — prevents session deadlock on provider outage |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | ~1 month | P2, 🦞 | **SQLite unbounded growth** — will cause disk exhaustion in production |
| [#94686](https://github.com/openclaw/openclaw/issues/94686) | ~2 months

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-08-26 | **Projects Analyzed:** 12 (11 active, 1 inactive)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem is in a **high-velocity stabilization phase** across most major projects. While release cadences vary—from LobsterAI's bi-weekly date-based releases to OpenClaw's gated beta validation and IronClaw's v1.4.0 milestone—nearly all projects show **heavy investment in reliability hardening** (security boundaries, process lifecycle, provider integration resilience) over net-new features. A clear architectural convergence is emerging around **multi-agent orchestration**, **edge/worker deployment models**, **strict schema compliance for LLM tool use**, and **multi-channel gateway patterns**. Community scale ranges from OpenClaw's 500 PRs/day to NullClaw's near-silence, but even smaller projects (Moltis, PicoClaw) are tackling production-grade concerns: sandbox isolation, cross-platform CI, and session durability.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Open PRs | Release Status | Health Score* |
|---------|--------------|-----------|-------------------|----------|----------------|---------------|
| **OpenClaw** | 185 | 500 | 187 | 313 | Beta validation (v2026.8.1-β.3) | 🟡 Stabilizing |
| **NanoBot** | 5 | 24 | 14 | ~10 | Accumulating for next patch | 🟢 Healthy |
| **Hermes Agent** | 13 | 50 | ~5 | ~45 | Continuous delivery on `main` | 🟡 Active but fragile |
| **PicoClaw** | 4 | 1 | 0 | 1 | Stable 0.3.1; nightly in use | 🟠 Maintenance stall |
| **NanoClaw** | 5 new | 50 | 16 | 34 | Release candidate imminent | 🟢 High velocity |
| **NullClaw** | 1 | 0 | 0 | 0 | None | ⚪ Low visibility |
| **IronClaw** | 28 | 24 | 10 | 14 | Accumulating for v1.4.0 | 🟡 Engineering-healthy, user-facing risks |
| **LobsterAI** | 1 | 11 (9 merged) | 9 | 2 | **2 releases in 5 days** (2026.8.21, 2026.8.25) | 🟢 Shipping fast |
| **Moltis** | 2 | 5 | 2 | 3 | None | 🟢 Steady |
| **CoPaw** | 17 | 50 | 29 | 21 | **v2.1.1-β.3 released** | 🟡 Stabilization sprint |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | None | ⚪ Inactive |
| **ZeroClaw** | 13 | 50 | 1 | 49 | None | 🟡 Stabilization + platform expansion |

*Health Score: 🟢 = High velocity + shipping + manageable backlog | 🟡 = High velocity but critical bugs/backlog growing | 🟠 = Stalled merges, open critical bugs | ⚪ = Inactive or opaque*

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale & Breadth:** Largest observed daily PR volume (500) and broadest channel matrix (Discord, iMessage, Matrix, Mattermost, Slack, Telegram, Feishu). Only project with explicit "fleet-scale" (16+ agent) production use cases documented (#94686).
- **Security Maturity:** Most advanced install-policy acknowledgement flow (merged across macOS, gateway, CLI, Web UI) and audit-logging PRs (#129092) for model routing decisions.
- **Memory Architecture Ambition:** Only project with active "Multi-Slot Memory Architecture" design (#60572) and "memory therapy" UX exploration (#105494).

**Technical Approach Differences:**
- **Gateway-Centric:** OpenClaw's architecture revolves around a central gateway managing multi-channel conversation delivery, subagent orchestration, and session state—whereas NanoClaw, ZeroClaw, and IronClaw lean toward **container/skill-based agent isolation** with lighter coordination layers.
- **Subagent-First Reliability Focus:** OpenClaw's P0 bugs center on subagent completion delivery guarantees (#44925, #67777)—a problem space most peers haven't yet encountered at scale.
- **State Migration Rigor:** 6.x→7.x SQLite migration bugs (#94939) indicate deep investment in backward compatibility that younger projects (PicoClaw, NullClaw) haven't needed.

**Community Size Comparison:**
- **OpenClaw:** ~500 PRs/day, 185 issues/day, 313 open PR backlog → **Largest active contributor base by far**
- **Next tier:** NanoClaw, ZeroClaw, CoPaw, Hermes (~50 PRs/day each)
- **Mid tier:** NanoBot, IronClaw, Moltis, LobsterAI (~10-25 PRs/day)
- **Small/quiet:** PicoClaw, NullClaw, ZeptoClaw

---

## 4. Shared Technical Focus Areas (Cross-Project Requirements)

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Provider Integration Resilience** | OpenClaw, Hermes, NanoBot, CoPaw, IronClaw, NanoClaw | Fallback model chains (OpenClaw #56781, NanoBot implicit), MCP stdio transport fixes (Hermes #95150, NanoBot #5535), xAI/Grok compatibility (Hermes #95003), OpenAI Responses API multi-turn (CoPaw #7296), Anthropic Advisor Tool support (OpenClaw #63930) |
| **Sandbox / Execution Isolation** | ZeroClaw, Moltis, Hermes, NanoClaw, PicoClaw | Kubernetes runtimeClassName (Moltis #1118), Coder remote workspaces (Moltis #1199), WASM/Docker adapters (NullClaw #994), symlink-race hardening (ZeroClaw #10367), fail-closed exec (NanoBot #5536), edge worker mode (PicoClaw #3345, NanoClaw #3538) |
| **Session & Memory Durability** | OpenClaw, CoPaw, NanoBot, Hermes, ZeroClaw | Subagent completion guarantees (OpenClaw), session focus persistence (NanoBot #3292), cron context preservation (Moltis #1243, NanoClaw), memory unbounded growth (OpenClaw #114612), SQLite migration safety (OpenClaw #94939) |
| **Strict Schema / Tool Compliance** | Moltis, ZeroClaw, Hermes, CoPaw | OpenAI `additionalProperties=false` (Moltis #1232), MCP OAuth scope registration (Moltis #1244, ZeroClaw), function name reservations (Hermes #95003), tool catalog completeness (OpenClaw #120385) |
| **Multi-Channel Gateway Parity** | OpenClaw, NanoClaw, CoPaw, Moltis, Hermes | Slack threading/approvals (NanoClaw #2431, #10358, CoPaw #7302), Telegram rich+streaming (NanoBot #5516), Matrix room ID validation (OpenClaw #122739), Discord voice latency (Hermes #94462), Feishu streaming regression (OpenClaw #91941) |
| **Onboarding & Operational Simplicity** | NanoClaw, LobsterAI, IronClaw, CoPaw, PicoClaw | Local web chat (NanoClaw #3298), setup driver protocol (NanoClaw #3485), community channel scaling (LobsterAI #2536), personality editor (IronClaw #7895), Windows example loader (CoPaw #7291) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoClaw / ZeroClaw | Hermes | CoPaw | LobsterAI | IronClaw | NanoBot / Moltis / PicoClaw |
|-----------|----------|---------------------|--------|-------|-----------|----------|----------------------------|
| **Primary Focus** | Fleet-scale multi-agent gateway | Skill/container-based agent platform | Desktop + P2P federation + webapp | Qwen/Alibaba ecosystem integration | Artifact/library UX + analytics | CI/CD + Design System + notifications | Specialized: TUI (NanoBot), sandbox (Moltis), edge (PicoClaw) |
| **Target User** | Enterprise/ops teams running agent fleets | Developers building custom agents via skills | Power users wanting local-first + federation | Chinese-dev ecosystem, Qwen model users | Content creators, knowledge workers | Near/NEAR ecosystem, Web3-adjacent | Hackers (NanoBot), enterprise sandbox (Moltis), edge deployers (PicoClaw) |
| **Architecture** | Central gateway + subagent pool | Daemon + per-skill containers + channels | Renderer + gateway + P2P overlay | Console + plugin engine + model router | Electron app + artifact pipeline | Rust core + WebUI + extension system | Single-binary (NanoBot), service-oriented (Moltis), minimal (PicoClaw) |
| **Differentiator** | Subagent completion guarantees, multi-channel maturity | Skill sandboxing, channel registry, Git channel | P2P federation, authority manifests, Claude SDK | Self-evolution skill, MiniMax M3 default, read_media | Thumbnail/artifact UX, 7-day attribution analytics | Nextest CI, preflight gates, Design System tokens | Voice SDK (NanoBot), K8s/Coder sandboxes (Moltis), worker mode (PicoClaw) |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (High Velocity + Shipping)** | **LobsterAI**, **NanoClaw**, **ZeroClaw**, **CoPaw** | LobsterAI: 2 releases/week; NanoClaw: 16 merges/day + RC imminent; ZeroClaw: 50 PRs/day security hardening; CoPaw: 29 merges/day + beta.3 |
| **Stabilizing (High Velocity + Critical Bugs)** | **OpenClaw**, **Hermes**, **IronClaw** | OpenClaw: 313 open PR backlog, 5+ diamond-lobster P0s; Hermes: 3 simultaneous provider regressions; IronClaw: 3 high-sev bugs with 0 fix PRs |
| **Steady / Feature-Complete** | **NanoBot**, **Moltis** | NanoBot: 14 merges/day, security fix shipped; Moltis: 2 merges, 3 feature PRs in review |
| **Maintenance Stall / Low Visibility** | **PicoClaw**, **NullClaw**, **ZeptoClaw** | PicoClaw: 0 merges, 2 critical bugs 35+ days old; NullClaw: 1 issue, 0 PRs; ZeptoClaw: inactive |

---

## 7. Trend Signals for AI Agent Developers

1. **Subagent/Worker Reliability is the New Baseline**  
   OpenClaw's "diamond lobster" issues (#44925, #67777) and Hermes' MCP stdio fix (#95150) reveal that **silent completion loss** and **process lifecycle leaks** are the top blockers for production agent fleets. Projects without explicit subagent retry/notification/auto-restart will hit this wall at scale.

2. **Strict Schema Compliance is Non-Negotiable**  
   Moltis (#1232), ZeroClaw, and Hermes (#95003) all hit OpenAI/API provider rejections due to schema mismatches. **Tool schema validation must be part of CI**—not a runtime surprise.

3. **Edge/Worker Deployment Models Are Converging**  
   PicoClaw (#3345), NullClaw (#994), NanoClaw (#3538), and ZeroClaw (ZeroRelay #10142) independently propose **lightweight agent workers on heterogeneous edge hardware** with signed receipts/attestation. This is the clearest cross-project architectural trend.

4. **Skill/Plugin Sandbox Security is Hardening Rapidly**  
   NanoBot (#5536 fail-

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-26

## 1. Today's Overview
NanoBot shows **high development velocity** with 24 PRs updated and 5 active issues in the last 24 hours. The project is in an active maintenance and feature-enhancement phase, with 14 PRs merged/closed today alone — indicating strong maintainer responsiveness. No new releases were cut, suggesting changes are accumulating for a future release. Activity spans provider stability, TUI/WebUI polish, Telegram integration, security hardening, and new search provider integrations.

## 2. Releases
**No new releases** published today. The 14 merged PRs since yesterday represent a substantial batch of fixes and enhancements likely targeting the next patch or minor version.

---

## 3. Project Progress — Merged/Closed PRs Today (14)

| PR | Type | Summary | Linked Issue |
|----|------|---------|--------------|
| [#5541](https://github.com/HKUDS/nanobot/pull/5541) | Bug fix (Telegram) | Prefix non-private Telegram messages with sender display name; fallback chain: first name → username → numeric ID. Adds regression tests. | Fixes [#1091](https://github.com/HKUDS/nanobot/issues/1091) |
| [#5540](https://github.com/HKUDS/nanobot/pull/5540) | Bug fix (Provider) | Stabilize Codex prompt cache routing by propagating stable session identity; omit `prompt_cache_key` when no session ID exists. | — |
| [#5538](https://github.com/HKUDS/nanobot/pull/5538) | Refactor (TUI) | Clarify active composer actions: `Enter` = send now, `Tab` = send next; update placeholder hint. | — |
| [#5534](https://github.com/HKUDS/nanobot/pull/5534) | Feature (TUI) | Add autocomplete for `$skill-name` references with filtered picker, arrow navigation, Enter/Tab insertion. | — |
| [#5533](https://github.com/HKUDS/nanobot/pull/5533) | Performance (Tools) | Make `find_files` scans responsive: run in worker, use budgeted `os.scandir`, bound retention, propagate cancellation. | — |
| [#5529](https://github.com/HKUDS/nanobot/pull/5529) | Bug fix (Agent) | Wait for background subagents only at turn exit; share 300s deadline; keep drains non-blocking. | — |
| [#5526](https://github.com/HKUDS/nanobot/pull/5526) | Bug fix (Agent/Exec) | Rename session tool to `exec_session`; add `until_exit` + `timeout_ms`; wait without polling. | — |
| [#5525](https://github.com/HKUDS/nanobot/pull/5525) | Feature (Tools) | Demand-driven document retrieval: `grep` returns bounded snippets with context; incremental search for PDF/DOCX/XLSX/PPTX. | — |
| [#5530](https://github.com/HKUDS/nanobot/pull/5530) | Enhancement (TUI) | Keep short transcripts/composer top-aligned; sticky scrolling on overflow; regression tests for resize. | — |
| [#5389](https://github.com/HKUDS/nanobot/pull/5389) | Feature (WebUI) | Drag-and-drop session organization: reorder, create groups, move sessions across groups. | — |
| [#5536](https://github.com/HKUDS/nanobot/pull/5536) | Security (Exec) | **Fail closed** when restricted shell lacks sandbox; fixes path-traversal via symlinks/expansion. | Fixes [#4072](https://github.com/HKUDS/nanobot/issues/4072) |
| [#5535](https://github.com/HKUDS/nanobot/pull/5535) | Bug fix (Gateway) | Retry MCP readiness before each turn; register recovered tools before policy snapshots. | Related: [NAN-43](https://linear.app/...) |
| [#5528](https://github.com/HKUDS/nanobot/pull/5528) | Bug fix (WebUI) | Project generated titles onto per-chat sessions under `unifiedSession: true`. | Fixes [#5527](https://github.com/HKUDS/nanobot/issues/5527) |
| [#5539](https://github.com/HKUDS/nanobot/pull/5539) | Bug fix (Tools) | Fix Loguru placeholder interpolation in `ToolLoader` logs; add regression test for plugin load failures. | — |

**Key themes:** Provider reliability (Codex, MCP), TUI/UX polish, exec security hardening, WebUI session management, background subagent coordination.

---

## 4. Community Hot Topics

| Item | Type | Comments | Summary | Underlying Need |
|------|------|----------|---------|-----------------|
| [#5505](https://github.com/HKUDS/nanobot/issues/5505) | Issue (Enhancement) | 3 | **AnySearch** team requests integration as a web search provider (API/MCP/Skill, key-optional, anonymous quota). | **Provider ecosystem expansion** — external teams want first-class integration; signals demand for pluggable search architecture. |
| [#5516](https://github.com/HKUDS/nanobot/issues/5516) | Issue (Bug) | 1 | Telegram `rich_messages` + `streaming` mutually exclusive; Bot API 10.1-10.3 drafts could fix. | **Rich UX parity** — users want markdown/rich rendering in streaming mode; blocker for Telegram power users. |
| [#5532](https://github.com/HKUDS/nanobot/issues/5532) | Issue (Bug, P2) | 1 | Missing import `mask_session_key` in `autocompact.py` causing runtime error on Chinese query. | **Regression in autocompact** — i18n path triggers missing import; needs quick patch. |
| [#5527](https://github.com/HKUDS/nanobot/issues/5527) | Issue (Bug) | 0 | WebUI sidebar titles stay "Untitled" when `unifiedSession: true` — title gen happens on shared session, UI reads per-chat session. | **Session-model mismatch** — unified session architecture leaks into UI; PR [#5528](https://github.com/HKUDS/nanobot/pull/5528) already fixes. |
| [#5524](https://github.com/HKUDS/nanobot/issues/5524) | Issue (Feature) | 0 | WebUI notification sound on agent turn completion (opt-in, configurable). | **Async workflow awareness** — users multitask during long agent runs; need passive completion signal. |

**Most active discussion:** [#5505](https://github.com/HKUDS/nanobot/issues/5505) (external provider integration proposal) and [#5516](https://github.com/HKUDS/nanobot/issues/5516) (Telegram rich+streaming conflict).

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR Status |
|----------|-------|-------------|---------------|
| **P1 (Security)** | [#4072](https://github.com/HKUDS/nanobot/issues/4072) (via [#5536](https://github.com/HKUDS/nanobot/pull/5536)) | Restricted shell path checks bypassable via symlinks/shell expansion; could escape workspace. | ✅ **Fixed & merged** — fail-closed when sandbox unavailable. |
| **P1 (Crash)** | [#5532](https://github.com/HKUDS/nanobot/issues/5532) | `NameError: mask_session_key` in `autocompact.py` on Chinese query processing. | ❌ **Open** — needs import fix; blocks autocompact for non-ASCII. |
| **P2 (Functionality)** | [#5516](https://github.com/HKUDS/nanobot/issues/5516) | Telegram rich messages never render with streaming enabled. | 🟡 **PR open** — [#5531](https://github.com/HKUDS/nanobot/pull/5531) upgrades preview to rich at stream end. |
| **P2 (UX)** | [#5527](https://github.com/HKUDS/nanobot/issues/5527) | WebUI sidebar titles "Untitled" under `unifiedSession`. | ✅ **PR open** — [#5528](https://github.com/HKUDS/nanobot/pull/5528) projects titles to per-chat sessions. |
| **P2 (Reliability)** | [NAN-43](https://linear.app/...) (via [#5535](https://github.com/HKUDS/nanobot/pull/5535)) | MCP tools not ready at turn start; gateway now retries `connect()` pre-turn. | ✅ **Fixed & merged**. |
| **P2 (Performance)** | [#5533](https://github.com/HKUDS/nanobot/pull/5533) | `find_files` blocking scans; now runs in worker with cancellation. | ✅ **Fixed & merged**. |

**Critical note:** The P1 security fix ([#5536](https://github.com/HKUDS/nanobot/pull/5536)) is merged — users on `restrict_to_workspace` should update immediately. The autocompact crash ([#5532](https://github.com/HKUDS/nanobot/issues/5532)) is the only unfixed P1/P2 regression reported today.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version | Rationale |
|--------|--------|----------------------------|-----------|
| **AnySearch provider integration** | [#5505](https://github.com/HKUDS/nanobot/issues/5505) (external team PR incoming) | **High** | Team preparing PR; fits pluggable search architecture; key-optional aligns with accessibility goals. |
| **MST (Meta-Search Tool) as metasearch provider** | [#5234](https://github.com/HKUDS/nanobot/pull/5234) (open since Aug 3, conflict) | **Medium** | Aggregates multiple engines via RRF; long-open PR with conflicts suggests architectural review needed. |
| **Telegram rich + streaming compatibility** | [#5516](https://github.com/HKUDS/nanobot/issues/5516) + [#5531](https://github.com/HKUDS/nanobot/pull/5531) | **High** | PR open fixing the core conflict; Bot API upgrades make this feasible now. |
| **WebUI notification sound (opt-in)** | [#5524](https://github.com/HKUDS/nanobot/issues/5524) | **Medium** | Clear UX need for async workflows; low implementation complexity; opt-in default minimizes risk. |
| **Skill autocomplete in TUI** | [#5534](https://github.com/HKUDS/nanobot/pull/5534) (merged) | **Done** | Already merged — signals investment in discoverability for skill ecosystem. |
| **Drag-and-drop session organization (WebUI)** | [#5389](https://github.com/HKUDS/nanobot/pull/5389) (merged) | **Done** | Merged today — major WebUI UX upgrade for multi-session workflows. |
| **Demand-driven document retrieval (grep)** | [#5525](https://github.com/HKUDS/nanobot/pull/5525) (merged) | **Done** | Merged — shifts `grep` from full-scan to snippet-based; supports large repos. |
| **Session focus persistence (`my` tool)** | [#5537](https://github.com/HKUDS/nanobot/pull/5537) (open) | **Medium** | Fixes [#3292](https://github.com/HKUDS/nanobot/issues/3292); durable continuity cue across restarts. |

**Predicted next-version highlights:** AnySearch provider, Telegram rich+streaming fix, WebUI notifications, session focus persistence, plus the merged batch (drag-drop, grep overhaul, skill autocomplete, exec security).

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Telegram rich rendering broken in streaming mode** | [#5516](https://github.com/HKUDS/nanobot/issues/5516) | Power users on Telegram forced to choose: streaming *or* rich messages. |
| **WebUI titles broken under unified sessions** | [#5527](https://github.com/HKUDS/nanobot/issues/5527) | Users on `unifiedSession: true` see generic "Untitled" — hurts session navigation. |
| **No passive completion signal for long agent runs** | [#5524](https://github.com/HKUDS/nanobot/issues/5524) | Users tab away during tool-heavy turns; miss completion; must poll UI. |
| **Autocompact crashes on non-ASCII queries** | [#5532](https://github.com/HKUDS/nanobot/issues/5532) | Chinese (likely other CJK) users hit runtime error during memory compaction. |
| **Exec workspace restriction bypassable** | [#4072](https://github.com/HKUDS/nanobot/issues/4072) (fixed) | Security-conscious users at risk via symlink/shell expansion; now mitigated. |
| **MCP tools flaky at turn start** | [#5535](https://github.com/HKUDS/nanobot/pull/5535) | Agents lose tool access intermittently; gateway retry logic now added. |

**Positive signals:** Rapid maintainer response (14 merges in 24h), external teams contributing providers (AnySearch), TUI/WebUX polish (autocomplete, drag-drop, composer alignment), security hardening (fail-closed exec).

---

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Type | Why It Matters | Status |
|------|-----|------|----------------|--------|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | 23 days | PR (Feature) | **MST metasearch provider** — aggregates DDG/Google/Brave/Bing via RRF; high-value for search quality. Blocked by conflicts; needs rebase/review. | Open, conflict |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | 29 days | PR (Fix) | **Subagent partial completion marking** — prevents model from inferring unfinished results; regression fix. Has conflicts. | Open, conflict |
| [#4072](https://github.com/HKUDS/nanobot/issues/4072) | ~6 months | Issue (Security) | **Exec sandbox bypass** — finally fixed via [#5536](https://github.com/HKUDS/nanobot/pull/5536) (merged today). Verify backport to stable. | ✅ Fixed |
| [#1091](https://github.com/HKUDS/nanobot/issues/1091) | ~1 year | Issue (Telegram) | **Group message attribution** — fixed via [#5541](https://github.com/HKUDS/nanobot/pull/5541) (merged today). | ✅ Fixed |
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) | ~4 months | Issue (Feature) | **Session focus persistence** — PR [#5537](https://github.com/HKUDS/nanobot/pull/5537) open; enables cross-turn continuity. | PR open |

**Action items for maintainers:**
1. **Triage [#5532](https://github.com/HKUDS/nanobot/issues/5532)** — P1 crash in autocompact; trivial import fix.
2. **Review [#5531](https://github.com/HKUDS/nanobot/pull/5531)** — Telegram rich+streaming fix; unblocks [#5516](https://github.com/HKUDS/nanobot/issues/5516).
3. **Resolve conflicts on [#52

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-26

## 1. Today's Overview
Hermes Agent shows **high development velocity** with 50 PRs and 13 issues updated in the last 24 hours. The project is in active feature development and bug-fix mode with **no new releases** today. Critical regressions in MCP stdio transport (#95150) and xAI provider compatibility (#95003) are blocking users, while multiple performance and security fixes are landing. The PR queue includes substantial architectural work (authority manifests, P2P federation, webapp renderer, Claude Agent SDK integration) indicating a major platform evolution underway.

## 2. Releases
**No new releases today.** The project appears to be on a continuous-delivery `main` branch with changes shipping directly to users via source installs.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#95144](https://github.com/NousResearch/hermes-agent/pull/95144) | `fix(mcp): correct inverted liveness check in _stdio_children_dead` | MCP stdio transport | **Critical fix** for P1 regression #94335 — every stdio MCP call was failing fast with false "process dead" |
| [#91679](https://github.com/NousResearch/hermes-agent/pull/91679) | `fix(desktop): self-heal a deleted profile, and ad-hoc sign the macOS bundle` | Desktop/Profiles | Fixes remote-profile deletion wedge; improves macOS distribution |
| [#95158](https://github.com/NousResearch/hermes-agent/pull/95158) | `fix(doctor): drop --json authenticated for gh CLI 2.98+ compatibility` | CLI/Doctor | Restores `hermes doctor` GitHub auth check on newer `gh` CLI |
| [#88422](https://github.com/NousResearch/hermes-agent/pull/88422) | `fix(update): unshallow shallow clones so fetch crosses the boundary` | Updater/Install | Fixes silent update failures on shallow clones (stale `origin/<branch>`) |

*5 additional PRs merged/closed not shown in top-20 list.*

## 4. Community Hot Topics — Most Active Discussions
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|-----|-----------|
| [#95003](https://github.com/NousResearch/hermes-agent/issues/95003) | Issue (Bug) | 10 | 8 | **xAI/Grok provider completely broken** — API rejects `tool_search` function name as reserved; blocks all Grok usage |
| [#16520](https://github.com/NousResearch/hermes-agent/issues/16520) | Issue (Bug) | 10 | 2 | **Terminal tools truncate long lines** with `...`, causing model to misread configs as corrupted (closed, fix implemented) |
| [#94462](https://github.com/NousResearch/hermes-agent/issues/94462) | Issue (Perf) | 2 | 0 | **Discord voice mode latency ~15s** — pipeline architecture vs. live-call expectations |
| [#93594](https://github.com/NousResearch/hermes-agent/issues/93594) | Issue (Bug) | 2 | 0 | **Desktop bot-relay opens/closes WebSocket every 4s** — log flood, resource waste (closed, sweeper:risk-message-delivery) |

**Underlying theme:** Users are hitting **provider integration fractures** (xAI, MCP stdio, Discord voice, Telegram polling) and **desktop/gateway reliability gaps** (WebSocket churn, config hot-reload, profile self-heal).

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P1** | [#95150](https://github.com/NousResearch/hermes-agent/issues/95150) | `stdio MCP servers unusable: _stdio_children_dead()` inverted return — every alive child reported dead, all calls fail fast | ✅ [#95144](https://github.com/NousResearch/hermes-agent/pull/95144) merged |
| **P2** | [#95003](https://github.com/NousResearch/hermes-agent/issues/95003) | xAI rejects requests: function name `tool_search` reserved for native server-side tool | ❌ Open |
| **P2** | [#94946](https://github.com/NousResearch/hermes-agent/issues/94946) | `browser.inactivity_timeout` and orphan reaper dead code under default Browser Use CLI backend — daemons never reaped | ❌ Open |
| **P2** | [#84106](https://github.com/NousResearch/hermes-agent/issues/84106) | **Security:** `hermes config get mcp_servers` exposes resolved MCP secrets even with `security.redact_secrets: true` | ❌ Open |
| **P2** | [#95137](https://github.com/NousResearch/hermes-agent/issues/95137) | Responses API: `previous_response_id` chaining duplicates entire history every turn (dict-== prefix check never matches) | ❌ Open |
| **P2** | [#95151](https://github.com/NousResearch/hermes-agent/issues/95151) | Desktop/TUI sessions ignore live compression config changes — retain stale thresholds | ✅ [#95164](https://github.com/NousResearch/hermes-agent/pull/95164) open |
| **P2** | [#16520](https://github.com/NousResearch/hermes-agent/issues/16520) | Terminal tools (`read_file`, `cat`) truncate long lines with `...` | ✅ Closed (sweeper:implemented-on-main) |
| **P3** | [#94462](https://github.com/NousResearch/hermes-agent/issues/94462) | Discord voice mode extreme latency / poor STT accuracy | ❌ Open |
| **P3** | [#95159](https://github.com/NousResearch/hermes-agent/issues/95159) | Telegram `getUpdates` can wedge permanently — sticky IP outlives health verifiers | ❌ Open |
| **P3** | [#95161](https://github.com/NousResearch/hermes-agent/issues/95161) | `read_file` spawns 4–5 shell processes per call; one compound command suffices | ✅ [#95160](https://github.com/NousResearch/hermes-agent/pull/95160) open |

## 6. Feature Requests & Roadmap Signals
| Issue/PR | Feature | Likelihood for Next Version |
|----------|---------|----------------------------|
| [#95163](https://github.com/NousResearch/hermes-agent/issues/95163) | **Opt-in backend-hosted group rooms** — gateway-side round driver + authoritative room log (moves bot orchestration off renderer) | High — addresses 3 pain points (renderer dependency, log authority, cross-device) |
| [#95154](https://github.com/NousResearch/hermes-agent/issues/95154) | **Recursive company → portfolio → product hierarchy in Kanban** | Medium — needs-decision, P3 |
| [#95152](https://github.com/NousResearch/hermes-agent/pull/95152) | **Kanban rework**: `done_is_terminal` gate, `reanimate` verb, `kanban_schedule(task, +N)` | High — PR open, builds on schema foundation |
| [#93508](https://github.com/NousResearch/hermes-agent/pull/93508) | **`hermes webapp`** — serve actual Desktop renderer in browsers (authenticated, not Dashboard) | High — large PR, active |
| [#76661](https://github.com/NousResearch/hermes-agent/pull/76661) | **P2P federation heartbeat** — multi-device task relay, offline consensus, SOS layer | Medium — open since Aug 2, sweeping reviews |
| [#65982](https://github.com/NousResearch/hermes-agent/pull/65982) | **`claude-agent-sdk` provider** — official Agent SDK as first-class runtime under subscription OAuth (fail-closed) | High — open since Jul 16, stacked on generic shim work |
| [#95101](https://github.com/NousResearch/hermes-agent/pull/95101) | **Authority manifest schema + compiler + conformance harness** (Phase 0.1–0.3) | High — foundational for policy enforcement |
| [#89061](https://github.com/NousResearch/hermes-agent/pull/89061) | **SSYCloud (胜算云) LLM provider** — 300+ model router | Medium — straightforward provider add |

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Provider fragmentation** | xAI broken (#95003), MCP stdio broken (#95150), Discord voice unusable (#94462), Telegram silent outage (#95159) | Cannot rely on key integrations; forces fallback to other tools |
| **Config not live** | Desktop/TUI ignores `compression.*` / `model.context_length` changes (#95151) | Requires restart for tuning; breaks iterative workflow |
| **File ops too slow** | `read_file` = 4–5 shell spawns (#95161) | Noticeable latency on every file read in agent loops |
| **Security leak** | `hermes config get mcp_servers` prints resolved secrets (#84106) | Credentials exposed to model context via terminal tool |
| **Bot mode architecture** | Renderer-driven relay, WebSocket churn (#93594, #95163) | Unreliable cross-device bot chats; log flood |
| **History bloat** | Responses API duplicates full history every turn (#95137) | Context window exhaustion, cost explosion |

**Positive signals:** Quick fixes for critical regressions (MCP stdio fixed same-day), active performance PRs (#95160), and desktop self-heal (#91679) show maintainer responsiveness.

## 8. Backlog Watch — Stale High-Value Items Needing Attention
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#65982](https://github.com/NousResearch/hermes-agent/pull/65982) | 41 days | **Claude Agent SDK as first-class runtime** — unlocks official Anthropic agent tools under subscription OAuth; stacked on generic MCP/state shim | Open, updated today |
| [#40839](https://github.com/NousResearch/hermes-agent/pull/40839) | 81 days | **Expose executable plugin commands via API** — enables remote plugin invocation, core for extensibility | Open, stacked on #38645 |
| [#76661](https://github.com/NousResearch/hermes-agent/pull/76661) | 24 days | **P2P federation** — multi-device task relay, heartbeat, consensus; operational layer (health + SOS) | Open, sweeping reviews |
| [#93508](https://github.com/NousResearch/hermes-agent/pull/93508) | 2 days | **`hermes webapp`** — browser-hosted Desktop renderer (not Dashboard) | Open, large scope |
| [#95101](https://github.com/NousResearch/hermes-agent/pull/95101) | 1 day | **Authority manifest schema + compiler + conformance** — policy enforcement foundation | Open, Phase 0.1–0.3 |
| [#84106](https://github.com/NousResearch/hermes-agent/issues/84106) | 15 days | **Security: MCP secrets exposed in config get** — P2, sweeper:risk-security-boundary | Open, no fix PR |

---

**Health Indicator:** 🟡 **Active but fragile** — High commit volume and rapid fixes for regressions, but multiple P1/P2 provider integrations broken simultaneously suggests test coverage gaps in provider matrix. The architectural PRs (authority, federation, webapp, Claude SDK) signal a platform pivot; stabilizing current integrations before landing these will reduce user churn.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-26

## 1. Today's Overview
PicoClaw shows moderate maintenance activity with **4 active issues** and **1 open PR** updated in the last 24 hours, but **no new releases**. The project is in a bug-fixing and community-proposal phase: three regressions (Web UI input lag, MCP connection hang, Slack media upload failure) and one architectural proposal for a lightweight edge-worker mode are under discussion. No PRs were merged today, indicating a pause in feature delivery while stability issues are triaged. The single open PR (#3340) directly addresses the Slack media bug, suggesting a fix is imminent.

## 2. Releases
**No new releases** published today. The latest stable version remains **0.3.1** (referenced in Issue #3281). Nightly builds (e.g., git `2cf030d2` in #3269) are in use by early adopters.

## 3. Project Progress
**Merged/Closed PRs today: 0**  
**Open PR with recent activity:**
- **#3340** `fix(slack): set FileSize on media upload params` — Author: octavioturra  
  Adds missing `FileSize` to `slack.UploadFileParameters` in `SendMedia`, resolving the `file size cannot be 0` error from slack-go SDK v0.23.1.  
  → **Status:** Open, awaiting review/merge. Directly fixes Issue #3338.

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Bug | 7 | 1 | **Web UI chat input becomes severely laggy with moderate history** — impacts daily usability for power users. |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | Bug | 7 | 1 | **MCP server connection failure hangs the agent loop** — blocks all chat interaction; critical for reliability. |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Bug | 2 | 0 | **Slack media uploads fail due to missing `FileSize`** — PR #3340 provides fix. |
| [#3345](https://github.com/sipeed/picoclaw/issues/3345) | Proposal | 0 | 0 | **Lightweight "worker mode" for edge devices (RISC-V/ARM/MIPS, 10–20 MB RAM)** — architectural shift for distributed agent fleets. |

**Analysis:** Top pain points are **UI performance** (#3281) and **agent-loop resilience** (#3269). The Slack bug (#3338) has a ready fix. The worker-mode proposal (#3345) signals growing interest in PicoClaw as an **edge-agent runtime**, not just a desktop assistant.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP connection failure → agent loop hangs → entire chat UI freezes. No recovery without restart. | ❌ No PR yet |
| **High** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI input latency grows with chat history length (even "a little bit long"). Degrades UX significantly. | ❌ No PR yet |
| **Medium** | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack `SendMedia` omits `FileSize` → SDK rejects upload pre-flight. | ✅ **#3340** (open) |

**Note:** Both critical/high bugs lack assigned fixes. #3269 is a **single point of failure** in the agent loop; #3281 suggests a frontend rendering/memory leak in history handling.

## 6. Feature Requests & Roadmap Signals
- **Worker/Edge Mode (#3345):** Explicit request to run PicoClaw as a **lightweight agent worker** on constrained devices (RISC-V, old phones, Pi Zero), coordinated by a stronger host. Aligns with "distributed agent" trends.  
  → **Likelihood for next version:** Medium — requires architectural refactor (separate worker binary, RPC/gRPC bridge, resource sandboxing). May land as experimental flag first.

- **Implicit needs from bugs:**  
  - Agent-loop **watchdog/timeouts** for external tool calls (MCP, Slack, etc.)  
  - Web UI **virtualized history rendering** or incremental DOM updates  
  - **Health-check endpoints** for orchestration (supports #3345)

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Unresponsive chat UI** | #3281: "very laggy when history has a little bit long" | Daily driver friction; may drive users to alternatives |
| **Silent agent freeze** | #3269: "stop replying to users" on MCP failure | Trust erosion; requires manual restart |
| **Broken Slack integration** | #3338: media uploads always fail | Blocks team-collab use cases |
| **Desire for edge deployment** | #3345: "devices most distributed-agent systems ignore" | Strategic expansion opportunity |

**Sentiment:** Frustration with stability (#3269, #3281) but **strong loyalty** — users file detailed reports and propose architecture-level ideas (#3345).

## 8. Backlog Watch
| Item | Age | Risk | Why It Needs Attention |
|------|-----|------|------------------------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | 37 days | **High** | Core reliability bug; no workaround; blocks production use with MCP. |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 36 days | **High** | UX regression; labeled `stale` but actively commented (7 comments in 5 weeks). |
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) | 9 days | **Low** | Ready fix for #3338; stale label may delay merge. |
| [#3345](https://github.com/sipeed/picoclaw/issues/3345) | 1 day | **Medium** | Strategic proposal; no maintainer response yet. Early engagement could shape roadmap. |

**Recommendation:** Prioritize #3269 (agent-loop guard) and #3281 (UI perf). Merge #3340 to unblock Slack users. Schedule design discussion for #3345.

---

*Data sourced from GitHub API (sipeed/picoclaw) for 2026-08-26. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-26

## 1. Today's Overview

NanoClaw shows **high development velocity** with 50 PRs updated in 24 hours (16 merged/closed, 34 open) and 5 new issues filed. The project is in active stabilization mode: core-team members are merging refactors for agent workspace handling (Codex, OpenCode), Slack handoff tooling, setup wizard hardening, and container adoption fixes. No release was cut today, but the volume of merged infrastructure PRs suggests a release candidate is being prepared. Community engagement remains technical — issues are detailed bug reports from contributors, not end-user tickets.

## 2. Releases

**No new releases today.** The latest release data shows none in the tracked period. Given 16 PRs merged/closed in 24h — including runner lease/incarnation logic, Slack room handoffs, compose inlining, and uninstall hardening — a patch or minor release is likely imminent.

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#3544](https://github.com/nanocoai/nanoclaw/pull/3544) | fix(slack): add explicit room handoffs | Slack adapter | Adds explicit handoff tool; validates mentions; stops auto-mention on room create |
| [#3540](https://github.com/nanocoai/nanoclaw/pull/3540) | fix(opencode): run agent session in agent workspace | OpenCode agent | Fixes project document resolution — OpenCode now runs in correct workspace directory |
| [#3539](https://github.com/nanocoai/nanoclaw/pull/3539) / [#3537](https://github.com/nanocoai/nanoclaw/pull/3537) | refactor(codex): keep spec, drop duplicated composer | Codex agent | Removes duplicate composer; fixes `cli_scope: disabled` groups receiving rejected commands |
| [#3536](https://github.com/nanocoai/nanoclaw/pull/3536) | fix(compose): inline every instruction source into one project document | Agent composer | Inlines all `@` imports into single document to satisfy Claude Code security gate |
| [#2656](https://github.com/nanocoai/nanoclaw/pull/2656) | fix(add-mnemon): run mnemon setup in index.ts main() | Mnemon skill | Moves setup from overridden entrypoint to `main()` so hooks actually register |
| [#3542](https://github.com/nanocoai/nanoclaw/pull/3542) | fix: clear container_status drift at startup adoption | Container lifecycle | Prevents stale container status on host restart/adoption |
| [#3483](https://github.com/nanocoai/nanoclaw/pull/3483) | fix: harden uninstall ownership and failure handling | Uninstall | Re-validates targets at deletion time; prevents TOCTOU on unit files/dirs |

**Key theme:** Agent workspace/composer fixes (4 PRs) + Slack hardening + lifecycle robustness.

## 4. Community Hot Topics

| Item | Type | Comments | Signal |
|------|------|----------|--------|
| [#3311](https://github.com/nanocoai/nanoclaw/pull/3311) | PR | *updated today, created 2026-08-18* | Long-running fix for scheduled-task error routing — touches core agent runner error handling |
| [#2431](https://github.com/nanocoai/nanoclaw/pull/2431) | PR | *updated today, created 2026-05-12* | **3.5-month-old PR** for conditional Slack threading (DM vs channel) — still open, core adapter gap |
| [#3538](https://github.com/nanocoai/nanoclaw/issues/3538) | Issue | 0 | **Architectural proposal**: isolated containers as opt-in household edge workers — multi-device compute pooling |
| [#3298](https://github.com/nanocoai/nanoclaw/pull/3298) | PR | *updated today, created 2026-08-17* | Local web chat channel — removes external account requirement for first message/demo |

**Underlying needs:** 
- **Operational simplicity** — local web chat (#3298), setup driver protocol (#3485), preseed catalog (#3486) all reduce onboarding friction
- **Multi-device topology** — #3538 signals users want to treat home devices as a cluster, not single-host containers
- **Adapter maturity** — Slack threading (#2431) stalled 3+ months suggests adapter interface stability is a bottleneck

## 5. Bugs & Stability (Issues Filed Today)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#3543](https://github.com/nanocoai/nanoclaw/issues/3543) | `add-dial`/`add-dial-tool`: `owner_email` substituted unquoted into `bash -c` — apostrophe emails break sign-in; shell metachars pass validation | No |
| **High** | [#3535](https://github.com/nanoclaw/issues/3535) | `add-vercel`: per-session skill copies block spawn-time symlink sync; groups pinned to stale skills | No |
| **Medium** | [#3532](https://github.com/nanocoai/nanoclaw/issues/3532) | `add-*-tool` per-agent scoping misses agents created later — new groups get tool by default | No |
| **Medium** | [#3529](https://github.com/nanocoai/nanoclaw/issues/3529) | `update-nanoclaw` skill refresh: local adapters fail validation or get overwritten, no opt-out | No |
| **Low** | [#3525](https://github.com/nanocoai/nanoclaw/pull/3525) | Blind agent-scope prompt in wizard — input not echoed (PR exists) | [#3525](https://github.com/nanocoai/nanoclaw/pull/3525) |

**Critical pattern:** Skill-authored shell code has **injection/quoting bugs** (#3543) and **staleness issues** (#3535, #3532). The update path (#3529) doesn't respect local modifications. No fix PRs yet for the four issues — all filed today by `glifocat` (likely core contributor auditing skills).

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Local web chat channel** | [#3298](https://github.com/nanocoai/nanoclaw/pull/3298) (PR open, core-team) | **High** — removes biggest onboarding barrier; demo-ready |
| **Setup driver protocol (`nanoclaw.driver.v1`)** | [#3485](https://github.com/nanocoai/nanoclaw/pull/3485) (core-team) | **High** — enables CI/programmatic installs; prerequisite for edge workers |
| **Preseed catalog & timezone preseed** | [#3486](https://github.com/nanocoai/nanoclaw/pull/3486), [#3487](https://github.com/nanocoai/nanoclaw/pull/3487) | **High** — small, merged-adjacent; completes setup automation story |
| **Structured host health endpoint** | [#3482](https://github.com/nanocoai/nanoclaw/pull/3482) (core-team) | **Medium** — observability for multi-host (#3538) |
| **Household edge workers (multi-device containers)** | [#3538](https://github.com/nanocoai/nanoclaw/issues/3538) (Issue) | **Low–Medium** — architectural; needs driver protocol + health endpoint first |
| **Conditional Slack threading** | [#2431](https://github.com/nanocoai/nanoclaw/pull/2431) | **Medium** — stalled 3.5mo; may need adapter interface decision |

## 7. User Feedback Summary

**Pain points (from issues/PRs):**
- **Skill shell safety** — Unquoted variable substitution in `add-dial`/`add-dial-tool` (#3543) is a classic injection vector; users with apostrophe emails cannot sign in
- **Skill freshness** — `add-vercel` rsyncs copies per-session, breaking symlink-based skill updates (#3535); tool scoping doesn't apply to future agents (#3532)
- **Update destroys local work** — `update-nanoclaw` treats all channel imports as skill-managed, overwriting/validating user adapters (#3529)
- **Onboarding friction** — Every channel requires external account (Slack bot, QR, etc.) — motivates local web chat (#3298)
- **Setup not automatable** — Wizard assumes TTY, no structured protocol (#3485), secrets leak via argv (#3484)

**Positive signals:** Core team is systematically addressing these — composer inlining (#3536), uninstall hardening (#3483), container status drift (#3542), setup driver protocol (#3485).

## 8. Backlog Watch (Stale & Critical)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2431](https://github.com/nanocoai/nanoclaw/pull/2431) | **106 days** | Conditional Slack threading (DM vs channel) — fundamental UX for Slack users; blocks clean adapter interface |
| [#3311](https://github.com/nanocoai/nanoclaw/pull/3311) | **8 days** | Scheduled-task error routing — core runner stability; touches error message delivery without routing fields |
| [#3529](https://github.com/nanocoai/nanoclaw/issues/3529) | **1 day** | Update skill breaks local adapters — **regression risk** for any user with custom channels; no opt-out |
| [#3543](https://github.com/nanocoai/nanoclaw/issues/3543) | **1 day** | Shell injection in sign-in flow — **security/availability** bug in shipped skill |

**Recommendation:** Maintainers should prioritize #3543 (security), #3529 (data loss risk), and #2431 (long-stalled adapter gap). The setup driver protocol (#3485) unblocks several roadmap items.

---

*Digest generated from GitHub data as of 2026-08-26. All links point to nanocoai/nanoclaw repository.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-26

## 1. Today's Overview
NullClaw saw minimal public activity in the past 24 hours: one new issue was opened and no pull requests or releases were published. The sole issue (#994) proposes a significant architectural expansion—building a household edge mesh atop existing RuntimeAdapter primitives—indicating community interest in scaling the runtime beyond single-node deployments. With zero merged PRs and no releases, the codebase remains in a steady state; maintainers have not yet triaged or acted on the new proposal. Overall project velocity appears low on the public tracker, though the depth of the new issue suggests under-the-radar design work may be ongoing.

## 2. Releases
No new releases published today.

## 3. Project Progress
No pull requests were merged or closed in the last 24 hours. No feature advancement or bug fixes are visible on the public tracker today.

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Link |
|------|------|----------|-----------|------|
| #994 | Issue | 0 | 0 | https://github.com/nullclaw/nullclaw/issues/994 |

**Analysis**: The only active discussion is the newly filed issue #994, which outlines a vision for a **household edge mesh** leveraging NullClaw’s existing RuntimeAdapter/Peripheral vtables, Docker/WASM adapters, hardware discovery, and tunneling primitives. The author (kvnloo) notes that many operators possess idle heterogeneous hardware (PCs, laptops, Android devices) and seeks a signed-receipt mechanism for verifiable workload placement. Zero comments/reactions so far indicate the community has not yet engaged; the maintainers’ response will signal whether this aligns with the near-term roadmap.

## 5. Bugs & Stability
No bug reports, crashes, or regressions were filed today.

## 6. Feature Requests & Roadmap Signals
**Issue #994** is the sole feature signal:
- **Core ask**: Formalize a multi-node “household edge mesh” using existing RuntimeAdapter workers, with **signed receipts** for auditability.
- **Implied requirements**:
  1. Cross-node scheduling & discovery (already partially present via hardware discovery & tunnels).
  2. Cryptographic receipts for workload provenance.
  3. Policy engine for heterogeneous resource constraints (size/memory goals).
- **Roadmap prediction**: If accepted, this would likely drive the next minor/major version (v0.x → v0.(x+1) or v1.0) and require:
  - New `MeshController` component.
  - Extension of `RuntimeAdapter` vtable for remote attestation.
  - CLI/API surface for mesh join/leave/receipt verification.

## 7. User Feedback Summary
No direct user feedback (support questions, pain points, or satisfaction signals) appeared in issues or PRs today. The single issue is a forward-looking architectural proposal rather than a complaint or usage report.

## 8. Backlog Watch
No long-unanswered issues or PRs are highlighted in the provided data set. The only open item is the brand-new #994 (created 2026-08-25), which has not yet received maintainer triage. **Recommendation**: Maintainers should acknowledge #994 within 1–2 business days to signal alignment (or divergence) with project direction and prevent contributor drift.

---

*Data source: GitHub API snapshot for nullclaw/nullclaw covering 2026-08-25 → 2026-08-26.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-26

## 1. Today's Overview
IronClaw shows **high velocity with 52 total updates** (28 issues, 24 PRs) in the last 24 hours, indicating an active development sprint. The project is in a **refinement and stabilization phase** with heavy investment in CI/CD modernization (nextest migration, preflight gates, PR/queue convergence), Design System Phase 3 rollout, and notification system hardening. No new releases were cut today. The ratio of closed PRs (10) to open PRs (14) suggests good throughput, while 24 open issues signal ongoing feature work and bug triage.

---

## 2. Releases
**No new releases published today.** The project appears to be accumulating changes for a future v1.4.0 milestone (referenced in Epic #7781 and #7687).

---

## 3. Project Progress — Merged/Closed PRs Today
| PR | Scope | Summary |
|----|-------|---------|
| [#7817](https://github.com/nearai/ironclaw/pull/7817) | CI (XL, medium) | **Merged** — Nextest test pipeline, full-failure signal, PR unthrottle (closes #7799). Cuts `Tests (Reborn)` wall-clock time; all failing test names now reported. |
| [#7809](https://github.com/nearai/ironclaw/pull/7809) | CI (XL, low) | **Merged** — Canonical preflight: single gate list (`scripts/preflight-gates.sh`), worktree-safe hooks, self-printing REPRO (Tasks 1-5). |
| [#7819](https://github.com/nearai/ironclaw/pull/7819) | CI (XL, medium) | **Merged** — PR/queue check convergence: planner drift guard, default-features clippy on PRs (closes #7800). |
| [#7846](https://github.com/nearai/ironclaw/pull/7846) | Notifications (XL, low) | **Merged** — Retires legacy approval fallback; durable Inbox becomes exclusive notification source (part of #7687 epic). |
| [#7861](https://github.com/nearai/ironclaw/pull/7861) | Extensions (XL, low) | **Merged** — Restores device-link guidance on install/activate paths (fixes Telegram setup regression). |
| [#7894](https://github.com/nearai/ironclaw/pull/7894) | CI (S, medium) | **Merged** — Reduces required scope checkout transfer via partial-clone filter and depth-1 checkout for Reborn tests. |
| [#7816](https://github.com/nearai/ironclaw/pull/7816) | WebUI (L, low) | **Merged** — Adds refresh/connect entries to OOBE suggestion drawer (frontend half of #7815). |
| [#7820](https://github.com/nearai/ironclaw/pull/7820) | CI (XL, medium) | **Closed** (draft probe) — Scope-isolation suite consolidation probe (T2 follow-up, stacked on #7817). |
| [#7799](https://github.com/nearai/ironclaw/issues/7799) | Issue | **Closed** — CI expedite T2 track completed via #7817. |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) | Issue | **Closed** — Design System Phase 1 Epic re-scoped; superseded by #7781/#7782. |
| [#7687](https://github.com/nearai/ironclaw/issues/7687) | Issue | **Closed** — Notification inbox epic completed via #7846 and related PRs. |
| [#7706](https://github.com/nearai/ironclaw/issues/7706) | Issue | **Closed** — Legacy notification approval fallback removal completed. |

**Net advancement**: CI pipeline modernization (T2/T3/T4 tasks), notification system durability, Telegram device-link UX fix, Design System governance progression.

---

## 4. Community Hot Topics
*No comments recorded on any PR/issue in the last 24h (all 👍: 0, Comments: 0-4). The "hottest" items by comment count are:*

| Item | Comments | Type | Why It Matters |
|------|----------|------|----------------|
| [#7799](https://github.com/nearai/ironclaw/issues/7799) | 4 | Issue (closed) | CI expedite tracking — team coordination on nextest migration. |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) | 3 | Issue (closed) | Design System Phase 1 Epic — 3 comments during re-scoping discussion. |
| [#7862](https://github.com/nearai/ironclaw/issues/7862) | 3 | **Bug (open)** | **Telegram device-link fails with generic error when API credentials unconfigured** — impacts onboarding. |
| [#7891](https://github.com/nearai/ironclaw/issues/7891) | 2 | **Perf bug (open)** | **Extension capability payloads unprojected + 24 KiB head-slice costs 14.3s inference** — critical perf regression. |
| [#7781](https://github.com/nearai/ironclaw/issues/7781) | 2 | Epic (open) | Design System Phases 2–3 — governance + theme reskin for v1.4.0. |
| [#7887](https://github.com/nearai/ironclaw/issues/7887) | 1 | Bug (open) | Extension lookup path improvises device-link setup instructions (Telegram surface). |

**Underlying needs**: Developers are prioritizing **CI reliability** and **Design System consistency**; users are hitting **onboarding friction** (Telegram linking) and **severe inference latency** from unoptimized tool results.

---

## 5. Bugs & Stability — Reported Today
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#7891](https://github.com/nearai/ironclaw/issues/7891) | `perf(extensions)`: Unprojected capability payloads + blind 24 KiB head-slice cost **19.2s model inference** on two emails (49 KB raw MIME headers). Zero lock contention — pure prompt bloat. | No PR yet |
| **High** | [#7892](https://github.com/nearai/ironclaw/issues/7892) | `bug(agent-loop)`: Deferred tool found **15x, never invoked** — 123s run with 4 distinct calls, no terminating guard. Model loops searching `google-calendar.list_events` 15 times. | No PR yet |
| **High** | [#7888](https://github.com/nearai/ironclaw/issues/7888) | **Getting logs hangs indefinitely** on multiple instances — confirmed by two users on separate deployments. | No PR yet |
| **Medium** | [#7862](https://github.com/nearai/ironclaw/issues/7862) | Device link fails with generic "Something went wrong" when `telegram_api_id/api_hash` unconfigured. Poor UX for onboarding. | Related: [#7861](https://github.com/nearai/ironclaw/pull/7861) (merged, fixes install/activate path only) |
| **Medium** | [#7887](https://github.com/nearai/ironclaw/issues/7887) | Extension lookup path improvises device-link setup instructions (Telegram surface). | No PR yet |
| **Low** | [#7870](https://github.com/nearai/ironclaw/issues/7870) | Missing i18n across exposed WebUI routes (13 `chat.oobe.*` strings, `common.back/continue`). | PR: [#7877](https://github.com/nearai/ironclaw/pull/7877) (open) |

**Stability signal**: Two **high-severity agent-loop/inference bugs** (#7891, #7892) reported today with no fix PRs — these affect core agent reliability. Log retrieval hang (#7888) is a separate operational blocker.

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Personality (agent.md) editor in Settings UI** | [#7895](https://github.com/nearai/ironclaw/issues/7895) (user-reported pain point) | **High** — Low complexity, direct UX win, labeled `enhancement`. |
| **Per-automation lessons file** (`ironclaw.memory.automation_lessons_set`) | [#7893](https://github.com/nearai/ironclaw/issues/7893) | **Medium** — Architectural (memory system), labeled `reborn`, `scope:tool`. |
| **Voice-to-text in WebUI composer** | [#7867](https://github.com/nearai/ironclaw/issues/7867) (epic, roadmap) | **Medium** — Requires audio pipeline; Slack/Telegram already support voice. |
| **Slack-to-console bridge + rich interactive Slack UX** | [#7871](https://github.com/nearai/ironclaw/issues/7871) (epic) | **Medium-High** — Strategic (Slack as control surface), builds on #4625. |
| **Remote edge workers for scheduler/orchestrator** | [#7889](https://github.com/nearai/ironclaw/issues/7889) (RFC) | **Low-Medium** — RFC stage; extends worker pool beyond single host. |
| **OpenSSF Scorecard workflow** | [#7885](https://github.com/nearai/ironclaw/issues/7885) / [#7886](https://github.com/nearai/ironclaw/pull/7886) | **High** — PR open, low risk, security hygiene. |
| **Design System Phases 2–5** (tokens, reskin, agentic components, IA) | [#7781](https://github.com/nearai/ironclaw/issues/7781), [#7782](https://github.com/nearai/ironclaw/issues/7782) | **High** — Active PR [#7831](https://github.com/nearai/ironclaw/pull/7831) (Chromatic lane + token axes). |

**Prediction**: v1.4.0 will ship Design System Phases 2–3 (tokens, theme reskin), notification inbox durability, and the personality editor. Voice-to-text and Slack bridge are v1.5+.

---

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Personality setup is difficult** | [#7895](https://github.com/nearai/ironclaw/issues/7895): *"me trying to set up personality with ironclaw... nice to have a section where I can do that"* | Onboarding friction; users can't find/configure `agent.md`. |
| **Telegram linking fails silently** | [#7862](https://github.com/nearai/ironclaw/issues/7862): Generic "Something went wrong" when API creds missing | Blocks channel onboarding; no actionable guidance. |
| **Agent loops burn minutes on repeated tool calls** | [#7892](https://github.com/nearai/ironclaw/issues/7892): 79s/86s/123s runs, 31 calls, 4 distinct pairs | Trust erosion; users perceive agent as "stuck" or "broken". |
| **Inference latency spikes from raw tool output** | [#7891](https://github.com/nearai/ironclaw/issues/7891): 19.2s inference on 49 KB MIME headers | Cost & latency surprise; not obvious to users why turns are slow. |
| **Logs unretrievable** | [#7888](https://github.com/nearai/ironclaw/issues/7888): Hangs indefinitely on multiple instances | Operational blindness; cannot debug failures. |
| **WebUI unlocalized strings** | [#7870](https://github.com/nearai/ironclaw/issues/7870): 13 OOBE strings + common actions in 10 locales | Non-English users see English fallback. |

**Satisfaction signals**: No positive feedback captured in this window. The volume of UX/onboarding bugs (#7895, #7862, #7870) suggests **early-adopter friction** is the dominant user sentiment.

---

## 8. Backlog Watch — Stale/Important Items Needing Attention
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#4625](https://github.com/nearai/ironclaw/issues/4625) | **78 days** (created 2026-06-09) | **Slack channel-routed personal/team agents** — Epic, roadmap, `suggested_P1`. Foundation for #7871. | Open, 1 comment, no PR |
| [#7891](https://github.com/nearai/ironclaw/issues/7891) | **1 day** | **Critical perf regression** — 19s inference from unprojected payloads. Blocks agent usability at scale. | Open, 2 comments, **no fix PR** |
| [#7892](https://github.com/nearai/ironclaw/issues/7892) | **1 day** | **Agent-loop termination guard missing** — 123s runs, 15x repeated tool search. Core reliability. | Open, 0 comments, **no fix PR** |
| [#7888](https://github.com/nearai/ironclaw/issues/7888) | **1 day** | **Log retrieval hangs** — Confirmed multi-instance. Operational blocker. | Open, 0 comments, **no fix PR** |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | **15 days** | **OMP core-tool contract + engines + benchmark** (XL, medium) — Major coding tool refactor (6 bare names). | Open, 0 comments, needs review |
| [#7831](https://github.com/nearai/ironclaw/pull/7831) | **3 days** | **Design System Phase 3a** — Chromatic lane + token axes. Blocks visual regression for reskin. | Open, 0 comments, needs review |
| [#7889](https://github.com/nearai/ironclaw/issues/7889) | **1 day** | **RFC: Remote edge workers** — Architectural expansion. Needs maintainer design input. | Open, 0 comments |

**Maintainer action recommended**: 
1. **Triage #7891, #7892, #7888 immediately** — high-severity bugs with no fixes.
2. **Assign review to #7491** — large, long-open PR touching core tooling.
3. **Drive decision on #7889 RFC** — strategic direction for scheduler.
4. **Schedule #4625** — 78-day-old P1 epic blocking Slack roadmap.

---

## Project Health Indicators
| Metric | Signal |
|--------|--------|
| **Velocity** | 🟢 High (52 updates/24h) |
| **CI/CD Health** | 🟢 Actively modernizing (nextest, preflight, convergence) |
| **Bug Backlog** | 🔴 **Concerning** — 3 high-sev bugs today with 0 fix PRs |
| **Design System** | 🟢 On track (Phase 3a PR open, Phases 2–5 epics structured) |
| **User Onboarding** | 🟡 Friction evident (personality, Telegram, i18n) |
| **Release Cadence** | ⚪ No recent release; changes accumulating for v1.4.0 |

**Bottom line**: IronClaw is **engineering-healthy but user-facing stability is degrading** — core agent loops and inference performance have regressed, and onboarding gaps persist. The team is investing correctly in infrastructure (

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-26

---

## 1. Today's Overview
LobsterAI shipped two releases in five days (2026.8.21 and 2026.8.25), indicating a high-velocity iteration cadence. In the last 24 hours the team merged **9 PRs** and opened **2 new PRs**, while only **1 new issue** was filed—suggesting the project is in a **feature-delivery and polish phase** rather than a bug-firefighting phase. The merged work spans library/artifact UX, settings/catalog UI, analytics instrumentation, and a handful of dependency bumps. Community interaction remains low (single-digit comments/reactions), so signal-to-noise is high but external feedback loops are thin.

---

## 2. Releases

| Version | Date | Key Changes | Breaking / Migration Notes |
|---------|------|-------------|----------------------------|
| **2026.8.25** | 2026-08-25 | • `feat: library` — cross-platform thumbnail & local artifact lifecycle enhancements ([#2513](https://github.com/netease-youdao/LobsterAI/pull/2513), [#2524](https://github.com/netease-youdao/LobsterAI/pull/2524))<br>• `feat(library): 优化本地产物预览与操作体验` ([#2524](https://github.com/netease-youdao/LobsterAI/pull/2524)) | No breaking changes noted. Artifact preview icons & copy updated—UI tests added. |
| **2026.8.21** | 2026-08-21 | • `feat(dsh): add usage analytics for enable toggle and workbench open` ([#2515](https://github.com/netease-youdao/LobsterAI/pull/2515))<br>• `feat: update dsh to 0.1.1-rc.1` ([#2516](https://github.com/netease-youdao/LobsterAI/pull/2516))<br>• `refactor(dsh): move usage analytics` | DSH (data-surface layer) bumped to RC; analytics events added. No migration doc yet. |

> **Note:** Both releases are date-based; no semantic-version tags. Watch for changelog consolidation if the project adopts semver.

---

## 3. Project Progress (Merged/Closed PRs — 2026-08-25)

| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2535](https://github.com/netease-youdao/LobsterAI/pull/2535) | renderer, settings | **feat(settings): add plan model catalog** — tabbed UI for pricing catalog (text/image/video models) with sticky category controls | User-facing: model selection now tier-aware |
| [#2534](https://github.com/netease-youdao/LobsterAI/pull/2534) | renderer, docs, main, cowork, im, artifacts | **Release/2026.8.20** — release branch cut | Process: release automation |
| [#2533](https://github.com/netease-youdao/LobsterAI/pull/2533) | renderer, docs, artifacts | **fix(artifacts): 区分网页与本地服务的预览展示** — distinct icons/labels for HTML page vs. local service; doc & test updates | UX clarity: eliminates preview ambiguity |
| [#2532](https://github.com/netease-youdao/LobsterAI/pull/2532) | renderer | **fix(sidebar): fade out login promo tip** — 5s auto-dismiss + timer cleanup on auth change | Polish: reduces UI noise |
| [#2531](https://github.com/netease-youdao/LobsterAI/pull/2531) | renderer, main | **fix(library): 修复本地产物后台刷新闪烁** — split load/refresh/append states; batched ID queries; in-place merge preserving scroll/filter | Stability: fixes flicker & scroll-jank during background sync |
| [#2530](https://github.com/netease-youdao/LobsterAI/pull/2530) | renderer, main | **feat(settings): add plan model catalog** (duplicate of #2535, likely re-targeted) | Same as #2535 |
| [#2529](https://github.com/netease-youdao/LobsterAI/pull/2529) | renderer, artifacts | **feat(analytics): 完善资料库埋点与发布转化归因** — library exposure/filter/search/preview/favorite/refresh events; 7-day last-touch attribution to paid conversion; retry & cleanup logic | Product analytics: enables funnel optimization |
| [#1275](https://github.com/netease-youdao/LobsterAI/pull/1275) | ci | **ci: bump actions/stale 9.1.0 → 10.2.0** | Maintenance |
| [#1276](https://github.com/netease-youdao/LobsterAI/pull/1276) | ci | **ci: bump actions/first-interaction** | Maintenance |

**Net progress:** Library/artifact UX stabilized, settings catalog shipped, analytics foundation laid, CI deps refreshed.

---

## 4. Community Hot Topics

| Item | Type | Activity | Link | Underlying Need |
|------|------|----------|------|-----------------|
| **#2536** | Issue | 1 comment, 0 👍, created & updated 2026-08-25 | [WeChat group is Full](https://github.com/netease-youdao/LobsterAI/issues/2536) | Users seek **community access**; current WeChat group at capacity. Indicates growing external interest but no scalable community channel (Discord, forum, etc.). |
| **#1159** | PR (open) | Stale since 2026-03-31, updated 2026-08-25 | [feat(cowork): add session fork](https://github.com/netease-youdao/LobsterAI/pull/1159) | Contributor **vdorchan** requests **session branching** for cowork—preserve original state while experimenting. High-value collab feature, but stalled 5 months. |
| **#1277** | PR (open) | Dependabot, updated 2026-08-25 | [chore(deps-dev): bump electron group](https://github.com/netease-youdao/LobsterAI/pull/1277) | Electron 40 → 43 (major). Blocked by test failures or breaking API changes; needs maintainer triage. |

> **Insight:** Only one *human* issue filed today; the real "hot" items are **stale contributor PRs** (#1159, #1277) that signal unmet roadmap needs (session fork, Electron upgrade).

---

## 5. Bugs & Stability

| Severity | Report / PR | Description | Fix Status |
|----------|-------------|-------------|------------|
| **Medium** | [#2531](https://github.com/netease-youdao/LobsterAI/pull/2531) | Library background refresh caused full-page skeleton flicker, losing scroll/filter state | **Fixed & merged** — state split, batched queries, in-place merge |
| **Low** | [#2533](https://github.com/netease-youdao/LobsterAI/pull/2533) | HTML page vs. local service preview used same icon/label, confusing users | **Fixed & merged** — distinct icons, copy, doc updates |
| **Low** | [#2532](https://github.com/netease-youdao/LobsterAI/pull/2532) | Login promo tip persisted indefinitely | **Fixed & merged** — 5s fade + auth-change cleanup |

**No crashes, data-loss, or regression reports** in the last 24 h. The fixed bugs are UI polish / state-management issues, not core stability.

---

## 6. Feature Requests & Roadmap Signals

| Source | Request | Likelihood for Next Release |
|--------|---------|-----------------------------|
| [#1159](https://github.com/netease-youdao/LobsterAI/pull/1159) (PR) | **Session Fork** — branch a cowork session from detail view | Medium — feature complete but stale; needs review & rebase |
| [#2536](https://github.com/netease-youdao/LobsterAI/issues/2536) (Issue) | **Additional community channel** (WeChat full) | High — low effort, high community value; expect Discord/Forum announcement soon |
| [#2529](https://github.com/netease-youdao/LobsterAI/pull/2529) (merged) | **Publish-to-paid attribution (7-day last-touch)** | Already shipped; next step: dashboard / funnel visualization |
| [#2530/#2535](https://github.com/netease-youdao/LobsterAI/pull/2530) (merged) | **Plan-model catalog UI** | Shipped; expect **model-usage quotas** & **per-model pricing** next |
| Electron 43 bump ([#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)) | **Electron 43 / V8 upgrade** | Blocked; once unblocked, will land in next major release |

---

## 7. User Feedback Summary

| Channel | Sentiment | Representative Quote | Pain Point / Use Case |
|---------|-----------|----------------------|------------------------|
| GitHub Issue #2536 | 😐 Neutral / Request | "WeChat group is Full. Anticipating for another wechat group! Thanks." | **Community access bottleneck** — users want real-time help/discussion but channel capped. |
| PR #1159 (contributor) | 😊 Positive (feature proposal) | "When experimenting with different follow-up directions… no way to preserve the original state." | **Cowork experimentation** — need branching to try alternatives without losing context. |
| No direct user bug reports today | — | — | Stability perceived as acceptable; focus is on UX polish & analytics. |

**Overall:** Users are **engaged but constrained by community infra**; contributors are pushing collaboration primitives (session fork) that align with "personal AI assistant" positioning.

---

## 8. Backlog Watch — Stale / Needs Maintainer Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#1159](https://github.com/netease-youdao/LobsterAI/pull/1159) **feat(cowork): add session fork** | 149 days | High-value collab feature; ready-to-merge code rotting | Assign reviewer, rebase, merge or close with feedback |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) **chore(deps-dev): bump electron group** | 146 days | Electron 40 → 43 brings security fixes, V8 12.4, Node 20; long overdue | Investigate test failures; split into smaller PRs if needed |
| [#2536](https://github.com/netease-youdao/LobsterAI/issues/2536) **WeChat group full** | 1 day | Community growth blocked | Create Discord / GitHub Discussions / Matrix room; pin in README |

---

### 📊 Health Indicators (2026-08-26)
| Metric | Value | Trend |
|--------|-------|-------|
| Releases / week | 2 | ⬆️ Accelerating |
| PRs merged / day | 9 | ⬆️ High throughput |
| Open issues (fresh) | 1 | ↔️ Low noise |
| Stale contributor PRs | 2 critical | ⚠️ Needs triage |
| Community channel capacity | **Full** | 🚨 Blocker |

**Bottom line:** LobsterAI is shipping fast on library UX, settings catalog, and analytics. The **top risks are process debt** (stale PRs, Electron upgrade) and **community scaling**. Addressing #1159, #1277, and #2536 this week would unblock both contributors and users.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-26

## 1. Today's Overview
Moltis shows steady development velocity with 5 PRs and 2 issues updated in the last 24 hours. The project is actively expanding its sandbox execution backends (Kubernetes, Coder) and hardening tool schema compatibility for OpenAI strict mode. Two PRs were merged today addressing Brave search parameter validation and cron job context preservation, while three significant feature PRs remain under review. No new releases were published. Community engagement appears moderate—issues have few comments/reactions—suggesting a focused contributor base rather than broad user-driven activity.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress
**Merged/Closed PRs today:**
- **#1245** `fix(tools): validate Brave search parameters` — Exposes Brave localization parameters only when Brave is the active search provider; normalizes country, language, and freshness values with fallback to `ALL` for unsupported markets. Improves tool schema correctness and provider-specific UX.
- **#1243** `fix(cron): preserve delivered channel context` — Fixes follow-up questions losing context of scheduled messages delivered to WhatsApp/other channels. Appends cron-delivered text as an assistant message to the destination conversation, resolving history by exact channel+thread.

**Open PRs advancing features:**
- **#1199** `Add Coder remote workspace sandbox support` — New `coder` sandbox backend creating ephemeral workspaces via REST API with PTY WebSocket command execution. Supports templates, presets, TTLs, environment aliases, and auto backend selection.
- **#1244** `Fix Fastmail MCP OAuth scope registration` — Prefers protected-resource scopes during MCP OAuth discovery; includes scopes in RFC 7591 dynamic client registration; adds Fastmail-shaped regression test.
- **#1232** `fix(tools): make object schemas OpenAI-safe` — Declares webhook patch fields and represents MCP env vars as fixed name/value entries to satisfy OpenAI strict schema (`additionalProperties=false`).

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#1118** | Feature Request | 2 comments, 1 👍 | [Kubernetes-native sandbox with runtimeClassName](https://github.com/moltis-org/moltis/issues/1118) |
| **#1199** | PR | 0 comments | [Coder remote workspace sandbox](https://github.com/moltis-org/moltis/pull/1199) |
| **#1232** | PR | 0 comments | [OpenAI-safe object schemas](https://github.com/moltis-org/moltis/pull/1232) |

**Analysis:** The Kubernetes sandbox issue (#1118) is the only item with community signals (comments + reaction), indicating demand for VM-level isolation (Kata, gVisor) for untrusted LLM-generated code execution. The Coder sandbox PR (#1199) and OpenAI schema fix (#1232) are technically significant but lack discussion—likely internal contributor work. Underlying need: **secure, multi-tenant agent execution environments** compatible with enterprise Kubernetes and strict LLM provider schemas.

## 5. Bugs & Stability
| Issue/PR | Severity | Status | Fix PR |
|----------|----------|--------|--------|
| **#1224** Tools stop working in shared Slack channels | Medium (regression in multi-tenant Slack) | **Closed** (no fix PR linked; may be duplicate or resolved externally) | — |
| **#1245** Brave search parameter validation | Low (incorrect tool schema for non-Brave providers) | **Fixed & Merged** | #1245 |
| **#1243** Cron follow-ups lose channel context | Medium (breaks conversation continuity) | **Fixed & Merged** | #1243 |
| **#1232** OpenAI strict schema rejects unspecified object fields | High (blocks tool use with OpenAI models) | **Open PR** | #1232 |
| **#1244** Fastmail MCP OAuth scope registration | Medium (auth failures for Fastmail users) | **Open PR** | #1244 |

**Note:** #1224 was closed without visible fix—verify if resolved in another PR or marked as non-reproducible.

## 6. Feature Requests & Roadmap Signals
1. **Kubernetes sandbox backend (#1118)** — Explicit request for `runtimeClassName` support (Kata, gVisor). Strong signal for next release given security focus.
2. **Coder sandbox backend (#1199)** — Near-complete PR with docs; likely to merge soon. Expands remote dev environment integration.
3. **OpenAI strict schema compliance (#1232)** — Critical for OpenAI Assistant/Responses API users. High merge probability.
4. **MCP OAuth hardening (#1244)** — Provider-specific fixes suggest ongoing MCP ecosystem maturation.

**Prediction:** Next minor release will include Coder sandbox, OpenAI schema fixes, and MCP OAuth improvements. Kubernetes sandbox may target a follow-up release due to complexity.

## 7. User Feedback Summary
- **Pain point (Slack):** Tools break in shared channels (#1224)—impacts teams using Slack Connect or multi-workspace setups.
- **Pain point (OpenAI):** Strict schema rejects valid tool calls (#1232)—blocks users on latest OpenAI APIs.
- **Pain point (Cron):** Scheduled messages lose thread context (#1243, now fixed)—affects automation workflows.
- **Use case demand:** VM-isolated agent execution (Kubernetes + runtimeClassName) for running untrusted code—enterprise/security-driven.
- **Positive signal:** Contributors actively adding sandbox backends (Coder, Kubernetes) and provider-specific fixes (Brave, Fastmail), indicating real-world deployment diversity.

## 8. Backlog Watch
| Item | Age | Concern | Link |
|------|-----|---------|------|
| **#1118** Kubernetes sandbox | 75 days (created 2026-06-12) | High-value security feature stalled; needs maintainer review/design sign-off | [Issue #1118](https://github.com/moltis-org/moltis/issues/1118) |
| **#1199** Coder sandbox PR | 11 days (created 2026-08-15) | Large feature PR (new backend) with no review activity; risks staleness | [PR #1199](https://github.com/moltis-org/moltis/pull/1199) |
| **#1232** OpenAI schema fix | 4 days (created 2026-08-22) | High-impact fix for OpenAI users; should be prioritized for merge | [PR #1232](https://github.com/moltis-org/moltis/pull/1232) |

**Recommendation:** Maintainers should triage #1118 (design decision needed) and accelerate review of #1199 and #1232 to unblock users on OpenAI and Coder integrations.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-26

---

## 1. Today's Overview

CoPaw (QwenPaw) shows **high velocity** with 50 PRs and 17 issues updated in the last 24 hours. The project released **v2.1.1-beta.3** (beta) and closed 29 PRs alongside 7 issues, indicating an active stabilization sprint ahead of a 2.1.1 GA. Open issues (10) and PRs (21) remain healthy but several critical bugs—runaway SSE loop, long-session browser jank, MCP credential regression, and OpenAI Responses multi-turn failure—signal **stability risks** that need resolution before GA. Community engagement is strong with first-time contributors and detailed performance reports.

---

## 2. Releases

### v2.1.1-beta.3 (Beta)
- **Release page**: https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.1-beta.3
- **Changes**:
  - `chore(console)`: pinned `@agentscope-ai/chat` to `1.1.72` ([#7257](https://github.com/agentscope-ai/QwenPaw/pull/7257))
  - `docs(loop-engineering)`: fixed `PluginAPI` → `PluginApi` casing ([#7269](https://github.com/agentscope-ai/QwenPaw/pull/7269))
  - `test(integration)`: expanded integration coverage (details truncated)
- **Breaking changes**: None noted in beta notes.
- **Migration notes**: Verify `@agentscope-ai/chat@1.1.72` compatibility if you override the chat package. Plugin authors should use `PluginApi` (camelCase) consistently.
- **Verification issue**: [#7295](https://github.com/agentscope-ai/QwenPaw/issues/7295) tracks installation verification checklist (deadline 2026-08-25 17:51 UTC).

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Type | Summary |
|----|------|---------|
| [#7276](https://github.com/agentscope-ai/QwenPaw/pull/7276) | chore(deps) | Bumped AgentScope to **2.0.7** |
| [#7277](https://github.com/agentscope-ai/QwenPaw/pull/7277) | fix(providers) | Refreshed **Aliyun & Kimi** model catalogs (removed retired, added new models) |
| [#7300](https://github.com/agentscope-ai/QwenPaw/pull/7300) | docs | Updated Scroll context manager blog |
| [#2773](https://github.com/agentscope-ai/QwenPaw/pull/2773) | feat(skills) | **Self-evolution skill** (self-improving agent engine) — long-running PR finally closed |
| [#5414](https://github.com/agentscope-ai/QwenPaw/pull/5414) | feat | Decoupled skill SOP (`SKILL.md`) from judgement rules (`rules.json`) |
| [#1228](https://github.com/agentscope-ai/QwenPaw/pull/1228) | feat(tools) | Added `read_media` tool (image/video/audio with compression & validation) |
| [#1525](https://github.com/agentscope-ai/QwenPaw/pull/1525) | fix(cron) | Isolated invalid persisted cron schedules on startup |
| [#4881](https://github.com/agentscope-ai/QwenPaw/pull/4881) | feat(providers) | Added **MiniMax M3** as default MiniMax model |
| [#2304](https://github.com/agentscope-ai/QwenPaw/pull/2304) | fix | Treat 404 from `/models` as successful connection check (Anthropic-compat providers) |
| [#1552](https://github.com/agentscope-ai/QwenPaw/pull/1552) | feat(providers) | Added `default_headers` support for custom providers |
| [#7292](https://github.com/agentscope-ai/QwenPaw/pull/7292) | test(coverage) | **+5.02 pp coverage** (19 new unit test files, 1,148 tests); fixed `/root` classification |

**Net effect**: Provider ecosystem upgrades, major skill-system refactor, media tooling, cron hardening, and a significant test-coverage jump—all landed today.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#7261](https://github.com/agentscope-ai/QwenPaw/issues/7261) | Bug (CLOSED) | 4 | **Runaway SSE serialization loop** after agent-to-agent run → 100% CPU, OOM, unresponsive server |
| [#7285](https://github.com/agentscope-ai/QwenPaw/issues/7285) | Bug (CLOSED) | 3 | **Severe long-conversation browser jank** (i5-12450H + 3060) — 2 s/frame, console still streaming |
| [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) | Enhancement (CLOSED) | 3 👍1 | Default **collapse reasoning/thinking** to reduce visual noise (Hermes-style) |
| [#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) | Enhancement (CLOSED) | 3 | Unified **tool panel / workbench**: file preview, diff, web preview, interactive terminal |
| [#6273](https://github.com/agentscope-ai/QwenPaw/issues/6273) | Bug (OPEN) | 4 | **Task-tracking & concurrency semantics** differ by entry point (serialize vs. attach silently) |

**Underlying theme**: Users are hitting **scale limits** (long sessions, agent-to-agent loops, heavy MCP payloads) and demand **observability/control** (collapsible thinking, unified workbench). The SSE loop (#7261) and browser jank (#7285, #7129) are the same root cause: unbounded DOM/message growth.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? | Notes |
|----------|-------|--------|---------|-------|
| **Critical** | [#7261](https://github.com/agentscope-ai/QwenPaw/issues/7261) SSE runaway loop → 100% CPU / OOM | CLOSED | Likely in beta.3 | Triggered by agent-to-agent run; blocks GA |
| **Critical** | [#7301](https://github.com/agentscope-ai/QwenPaw/issues/7301) MCP legacy migration → `CredentialNotFoundError` on every new session | **OPEN** | No | Blocks all new sessions post-migration |
| **High** | [#7296](https://github.com/agentscope-ai/QwenPaw/issues/7296) OpenAI Responses multi-turn 400 “reasoning item expired” on stateless upstreams | **OPEN** | No | Breaks Muse Spark / OpenCode Zen reasoning models |
| **High** | [#7288](https://github.com/agentscope-ai/QwenPaw/issues/7288) Large MCP results bypass scroll compaction → overflow model context | **OPEN** | No | Enterprise data-analysis workflows |
| **High** | [#7129](https://github.com/agentscope-ai/QwenPaw/issues/7129) Long-session + streaming → browser main-thread blocking (WPR trace) | CLOSED | Partial (#7163?) | Root cause: DOM/message accumulation |
| **Medium** | [#7302](https://github.com/agentscope-ai/QwenPaw/issues/7302) DingTalk sends empty message + unread when tool/thinking display disabled | **OPEN** | No | Channel-side filtering gap |
| **Medium** | [#7291](https://github.com/agentscope-ai/QwenPaw/issues/7291) qwenpaw-creator example pull fails on Windows 11 | **OPEN** | No | Path/permission issue in example loader |
| **Medium** | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) Desktop (Tauri) bundles Python 3.11/OpenSSL 3.0 → TLS reset on carrier networks | **OPEN** | No | Requires CI bump to Python 3.13 |

**Watch**: #7301 and #7296 are **regressions with no fix PR yet**—highest risk for 2.1.1 GA.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood for 2.1.x / 2.2 |
|---------|----------|----------------------------|
| **Session-level thinking modes** (Off/Low/Medium/High, persisted, cross-device) | [#7163](https://github.com/agentscope-ai/QwenPaw/pull/7163) (OPEN) | **High** — PR open, aligns with #7196 |
| **Unified tool panel / workbench** (file preview, diff, web preview, terminal) | [#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) (CLOSED) | **Medium** — design approved, implementation pending |
| **Collapsible reasoning default** (Hermes-style) | [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) (CLOSED) | **High** — trivial UI toggle, pairs with #7163 |
| **Zero-intrusion “skin gateway” for theming** | [#7287](https://github.com/agentscope-ai/QwenPaw/issues/7287) (OPEN) | **Low** — architectural proposal, needs RFC |
| **Task-completion toast / orange activity badge** | [#7263](https://github.com/agentscope-ai/QwenPaw/issues/7263) (CLOSED) | **High** — small UX win, likely in 2.1.1 |
| **Image resize by pixel limit (opt-in)** | [#7294](https://github.com/agentscope-ai/QwenPaw/pull/7294) (OPEN) | **High** — PR ready, env-gated |
| **Reranker UI config panel** | [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) (OPEN) | **Medium** — complements backend reranker |
| **Creator 1.1.1** (live website/desktop ops, video gen, APE bench) | [#7274](https://github.com/agentscope-ai/QwenPaw/pull/7274) (OPEN) | **High** — feature-complete, awaiting review |

**Prediction**: 2.1.1 GA will include thinking-mode toggle, task-completion badge, image-resize opt-in, and provider catalog refreshes. Workbench/skin-gateway slide to 2.2.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Browser becomes unusable in long sessions** | #7285 (i5/3060), #7129 (WPR trace), #7285 reporter: “must refresh to recover” | High — blocks daily drivers |
| **Silent payload drop on concurrent chat** | #6273: “some paths serialize, some attach while ignoring new payload” | High — data loss risk |
| **MCP migration breaks every new session** | #7301: `CredentialNotFoundError` on clean sessions | Critical — regression |
| **Reasoning models fail on turn 2** | #7296: 400 “reasoning item expired” on stateless upstreams | High — breaks OpenAI Responses / Muse Spark |
| **DingTalk noise when filters on** | #7302: empty message + unread badge | Medium — channel trust |
| **Windows example loader broken** | #7291: qwenpaw-creator cat-perspective fails | Low — onboarding friction |
| **Desktop TLS failures on carrier networks** | #7298: OpenSSL 3.0 middlebox RST | Medium — enterprise deployments |
| **QQ restart loses last memory** | #7297: “last memory lost after restart in QQ” | Low — channel-specific |

**Positive signals**: Detailed performance traces (#7129), constructive UX proposals (#7196, #7287), first-time contributors landing non-trivial PRs (#7299, #1228, #2304).

---

## 8. Backlog Watch (Stale but Important)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#6273](https://github.com/agentscope-ai/QwenPaw/issues/6273) Task-tracking concurrency semantics | 37 days | Core runtime contract; affects reliability of every multi-turn flow |
| [#2773](https://github.com/agentscope-ai/QwenPaw/pull/2773) Self-evolution skill | 147 days | **Just closed** — was the oldest open PR; now merged, validates long-review process |
| [#5414](https://github.com/agentscope-ai/QwenPaw/pull/5414) Decouple skill SOP/rules | 64 days | **Just closed** — enables rule-only edits, key for skill marketplace |
| [#1525](https://github.com/agentscope-ai/QwenPaw/pull/1525) Cron invalid-schedule isolation | 164 days | **Just closed** — hardening for production schedulers |
| [#1228](https://github.com/agentscope-ai/QwenPaw/pull/1228) `read_media` tool | 163 days | **Just closed** — unblocks multimodal agents |
| [#4881](https://github.com/agentscope-ai/QwenPaw/pull/4881) MiniMax M3 default | 86 days | **Just closed** — keeps provider catalog current |

**Action**: No genuinely stale *open* issues remain; the backlog was largely cleared today. Focus should stay on the **four open critical/high bugs** (#7301, #7296, #7288, #7298) before 2.1.1 GA.

---

## Bottom Line

CoPaw is in a **healthy stabilization phase**: beta.3 shipped, 29 PRs merged (including major provider/skill/tooling work), test coverage +5 pp. **Blocker bugs remain** (#7301 MCP creds, #7296 Responses reasoning, #7288 MCP overflow, #7298 desktop TLS) — these should be the **sole focus** for the next 48–72 hours to ship a clean 2.1.1 GA. UX polish (thinking modes, task badge, image resize) is queued and low-risk.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-26

---

## 1. Today's Overview

ZeroClaw shows **high velocity** with **13 issues** and **50 PRs** updated in the last 24 hours (12 issues open, 49 PRs open, 1 PR merged/closed). No new release was published. Activity centers on **security hardening** (credential caching, symlink races, HTTP egress bounding), **test reliability** (flaky test stabilization, cross-platform CI expansion), **architecture refactors** (crate dependency inversion, channel registration drift guards), and **multi-channel support** (Mattermost approvals, Git channel in artifacts). The project is in a **stabilization + platform-expansion phase** with multiple high-risk, high-size PRs awaiting maintainer review.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Project Progress

| PR / Issue | Status | Summary |
|------------|--------|---------|
| [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) | **Closed** | Fixed S0-severity bug: agent cron jobs intermittently resolved `workspace_dir` to `/` (data-loss/security risk). |
| *1 PR merged/closed* | Merged | One PR merged (not visible in top-20 list); details pending. |
| [#10368](https://github.com/zeroclaw-labs/zeroclaw/pull/10368) | Open | Stabilized flaky RPC local stale-cleanup serialization test (`concurrent_stale_start_is_serialized_before_cleanup`). |
| [#10362](https://github.com/zeroclaw-labs/zeroclaw/pull/10362) | Open | Made cron workspace assertion portable (fixes Git Bash vs. Windows path mismatch). |
| [#10364](https://github.com/zeroclaw-labs/zeroclaw/pull/10364) | Open | Preserves detailed tool output when a short error is also set (runtime UX fix). |
| [#10367](https://github.com/zeroclaw-labs/zeroclaw/pull/10367) | Open | Prevents symlink races during skill install (security hardening). |
| [#10369](https://github.com/zeroclaw-labs/zeroclaw/pull/10369) | Open | Bounds skill HTTP egress: argument encoding, destination validation, proxy/redirect disable, 1 MiB response cap. |
| [#10370](https://github.com/zeroclaw-labs/zeroclaw/pull/10370) | Open (do-not-merge) | Hardens Copilot credential cache: removes predictable fallback, admits only platform config cache, rejects symlinks. |
| [#10376](https://github.com/zeroclaw-labs/zeroclaw/pull/10376) | Open | Adds drift tests for channel production registration (derived from compile inventory). |
| [#10375](https://github.com/zeroclaw-labs/zeroclaw/pull/10375) | Open | Generates typed `StatusResponse` for `GET /api/status` and publishes OpenAPI contract. |
| [#10358](https://github.com/zeroclaw-labs/zeroclaw/pull/10358) | Open | Adds Mattermost approval prompts (previously inherited `Ok(None)` default denying all approvals). |
| [#10363](https://github.com/zeroclaw-labs/zeroclaw/pull/10363) | Open | Includes Git channel in official artifacts (container, Nix, AUR, Windows, Docker). |
| [#10350](https://github.com/zeroclaw-labs/zeroclaw/pull/10350) | Open | Adds advisory Windows test measurement on PRs (outside required gate). |
| [#10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142) | Open | **ZeroRelay**: mandatory mTLS with per-daemon CA, blind relay, CSR-only issuance (supersedes #9080). |

---

## 4. Community Hot Topics

| Item | Comments | Signals |
|------|----------|---------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) **Tracker: Maintainer decision queue for RFCs/design issues** | 14 | Central coordination bottleneck; maintainers need a visible queue for RFCs, design issues, release-policy questions. |
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) **Harden runtime-written executable test fixtures** | 9 | Parallel runtime gate exposing flakiness in test fixtures that write executables post-thread-spawn. |
| [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) **Agent cron resolves workspace_dir to /** (CLOSED) | 5 | S0 security bug — community relief at closure; highlights daemon/workspace isolation fragility. |
| [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) **Run test suite on Windows/macOS in CI** | 4 | Long-standing (since Jun 10) cross-platform CI gap; lint/build already multi-OS, test job lagging. |
| [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) **Bounded delegate resolves filesystem to delegator's workspace** | 4 | Security sandbox regression: delegated agent writes to delegator's workspace instead of own. |
| [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) **RFC: Clarify PR review evidence, freshness warnings, author-action boundaries** | 0 (new) | Governance clarity needed after organic policy growth; visual-evidence rule (#10056) authority unclear. |

**Underlying needs**: Maintainer bandwidth for RFC triage, test infrastructure maturity, cross-platform parity, and security-boundary enforcement in delegation/sandboxing.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Component | Fix PR | Status |
|----------|-------|-----------|--------|--------|
| **S0** (data loss/security) | [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) Cron `workspace_dir` → `/` | runtime/daemon | — | **Closed** |
| **S2** (degraded) | [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) Bounded delegate FS writes to delegator workspace | security/sandbox | — | Open |
| **S2** (degraded) | [#10329](https://github.com/zeroclaw-labs/zeroclaw/issues/10329) Resilient wrapper truncation shadows context-overflow recovery | provider (OpenAI-compatible) | — | Open |
| **S2** (degraded) | [#10373](https://github.com/zeroclaw-labs/zeroclaw/issues/10373) Agent-rename recovery not shared across CLI/gateway | config/onboarding | — | Open (new) |
| **Flaky Test** | [#10371](https://github.com/zeroclaw-labs/zeroclaw/issues/10371) `rpc::local concurrent_stale_start_is_serialized_before_cleanup` fails under parallel harness | rpc/local | [#10368](https://github.com/zeroclaw-labs/zeroclaw/pull/10368) | Open (fix PR exists) |
| **Flaky Test** | [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) Cron shell command test fails under parallel runtime gate | cron/runtime/tests | — | Open (in-progress) |
| **Cross-platform** | [#10362](https://github.com/zeroclaw-labs/zeroclaw/pull/10362) Cron workspace assertion non-portable (Git Bash vs Windows) | cron/tests | [#10362](https://github.com/zeroclaw-labs/zeroclaw/pull/10362) | Open (fix PR exists) |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Cross-platform CI (Windows/macOS test matrix)** | [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) (Jun 10, in-progress) | High — lint/build already multi-OS; test job expansion underway via [#10350](https://github.com/zeroclaw-labs/zeroclaw/pull/10350) (advisory Windows measurement). |
| **Git Channel in official artifacts** | [#10138](https://github.com/zeroclaw-labs/zeroclaw/issues/10138), [#10363](https://github.com/zeroclaw-labs/zeroclaw/pull/10363) | High — PR adds `channel-git` to `dist` feature registry; regenerates all artifact feature lists. |
| **Mattermost approval prompts** | [#1

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*