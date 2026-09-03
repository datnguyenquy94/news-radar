# OpenClaw Ecosystem Digest 2026-09-03

> Issues: 126 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-03 04:04 UTC

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

# OpenClaw Project Digest — 2026-09-03

## 1. Today's Overview
OpenClaw shows **exceptionally high velocity** with 126 issues and 500 PRs updated in the last 24 hours. The project maintains a large active backlog (98 open issues, 388 open PRs) with 28 issues and 112 PRs closed/merged today. No new release was published. Activity spans core gateway stability, multi-agent orchestration, mobile/web UI polish, plugin ecosystem, and CI/release automation — indicating a mature project in active feature development and bug-fix cycles across multiple fronts.

## 2. Releases
**No new releases today.** The latest stable remains `2026.7.1-2` with beta `2026.8.2` in progress. Several issues (#134896, #136786, #123073) report upgrade friction from 2026.7.x → 2026.8.x, suggesting the next release will need strong migration tooling.

## 3. Project Progress (Merged/Closed PRs Today)
112 PRs merged/closed. Notable completions from the top-30 list:

| PR | Area | Summary |
|----|------|---------|
| [#136811](https://github.com/openclaw/openclaw/pull/136811) | Web UI, Gateway | Hide disabled empty lanes from diagnostics (reduces noise in Debug/System busyness) |
| [#136016](https://github.com/openclaw/openclaw/pull/136016) | MS Teams | Refactor timestamp parsing to canonical SDK function |
| [#136838](https://github.com/openclaw/openclaw/pull/136838) | Twitch | Fix missing-token config path shown to users |
| [#136916](https://github.com/openclaw/openclaw/pull/136916) | Web UI | Keep Activity responsive with long session histories (perf fix) |
| [#136791](https://github.com/openclaw/openclaw/pull/136791) | Benchmarks | Fix LAN discovery left enabled on macOS in gateway benchmarks |

Other merged work (not in top-30) likely includes CI fixes, dependency updates, and smaller bug fixes given the volume.

## 4. Community Hot Topics (Most Commented Issues/PRs)

| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | 13 | Bug (P1) | **Cron agent stalls on DeepSeek** — `[cron:…]` prefix deprioritized by DeepSeek edge; needs provider-aware message formatting |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 10 | Bug (P1) | **Zombie process leak** from hook/tool children — runtime degradation over time; `openclaw-hooks`, `bash`, `codex` children unreaped |
| [#123073](https://github.com/openclaw/openclaw/issues/123073) | 9 | Bug (P1) | **`openclaw update` fails on dev channel** — npm vs pnpm `workspace:*` protocol mismatch; CLOSED but reveals packaging friction |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | 8 | Feature (P2) | **Self-hosted STT/TTS in webchat** — browser Web Speech API ignores `openclaw.json` TTS/STT config; need gateway-routed voice |
| [#50677](https://github.com/openclaw/openclaw/issues/50677) | 5 | Bug (P2) | **Skills silently truncated** — no user-visible warning when prompt budget cuts skills; agents lose capabilities invisibly |
| [#128971](https://github.com/openclaw/openclaw/issues/128971) | 5 | Bug (P1) | **Telegram final reply lost** on `delivery_ambiguous` — structured non-error terminal receipt not handled |
| [#134896](https://github.com/openclaw/openclaw/issues/134896) | 4 | Bug (P1) | **2026.8.1 update cascade** — 5 gateway restart blockers + `doctor --fix` self-referential failure; real-user upgrade pain |

**Pattern**: Provider integration quirks (DeepSeek, Telegram, SiliconFlow), process lifecycle leaks, and upgrade reliability dominate discussion. Users need **observable, recoverable failures** — not silent degradation.

## 5. Bugs & Stability (Ranked by Severity)

### P1 — Critical (Crash/Message Loss/Upgrade Blockers)
| Issue | Status | Fix PR? | Summary |
|-------|--------|---------|---------|
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | Open | No | Cron turns stall minutes on DeepSeek due to message prefix |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Open | No | Zombie accumulation → runtime degradation |
| [#128971](https://github.com/openclaw/openclaw/issues/128971) | Open | No | Telegram final reply silently lost on ambiguous delivery |
| [#134896](https://github.com/openclaw/openclaw/issues/134896) | Open | No | 2026.8.1 update: 5 restart blockers + broken `doctor --fix` |
| [#136951](https://github.com/openclaw/openclaw/issues/136951) | Open | No | No-op tool results end turn with `non_deliverable_terminal_turn` mid-task |
| [#123872](https://github.com/openclaw/openclaw/issues/123872) | Open | No | Restart drain 300s vs systemd 30s → SIGKILL on every stall |
| [#122911](https://github.com/openclaw/openclaw/issues/122911) | Open | No | Dead workboard worker permanently starves agent dispatch lane |
| [#136769](https://github.com/openclaw/openclaw/issues/136769) | Open | No | Browser `navigate` intermittently times out at 20s on healthy CDP |
| [#136513](https://github.com/openclaw/openclaw/issues/136513) | Open | No | Subagent completion replay credits in-flight handoff as delivered |
| [#121984](https://github.com/openclaw/openclaw/issues/121984) | Open | No | Plugin cleanup clears case-distinct Matrix/Signal sessions |

### P2 — High (UX Friction/Data Integrity)
| Issue | Status | Fix PR? | Summary |
|-------|--------|---------|---------|
| [#50677](https://github.com/openclaw/openclaw/issues/50677) | Open | No | Skills silently truncated, no user warning |
| [#96660](https://github.com/openclaw/openclaw/issues/96660) | Open | No | Workspace panel: root path drops dot, false "Missing" labels |
| [#122019](https://github.com/openclaw/openclaw/issues/122019) | Open | No | `update status` ignores configured-plugin compatibility |
| [#122357](https://github.com/openclaw/openclaw/issues/122357) | Open | No | Bundled memory-wiki missing `mdast-util-from-markdown` dep |
| [#129460](https://github.com/openclaw/openclaw/issues/129460) | Closed | — | Control UI "Plugins" menu missing after 2026.8.1-beta.3 |
| [#134502](https://github.com/openclaw/openclaw/issues/134502) | Open | No | Automations list hides caller-scoped filtering |
| [#136786](https://github.com/openclaw/openclaw/issues/136786) | Open | No | Archive symlink guard breaks working backups (no escape hatch) |
| [#136405](https://github.com/openclaw/openclaw/issues/136405) | Open | No | `memory_search` hangs 15s on remote embedding stall (no timeout config) |
| [#123089](https://github.com/openclaw/openclaw/issues/123089) | Open | No | Codex warm turns spend 19-21s before `prompt.submitted` |
| [#124843](https://github.com/openclaw/openclaw/issues/124843) | Open | No | ACP control sync hard-fails custom harness on derived `thinking` default |

### P3 — Medium (Niche/Edge)
| Issue | Status | Summary |
|-------|--------|---------|
| [#129750](https://github.com/openclaw/openclaw/issues/129750) | Open | OpenAI-compatible `embedBatch` exceeds DashScope 10-item limit |
| [#134396](https://github.com/openclaw/openclaw/issues/134396) | Open | Gateway logs "unknown command commitments" every 60s (2×/min) |
| [#136895](https://github.com/openclaw/openclaw/issues/136895) | Open | Resource execution: needs pressure watchdog + handle cancellation |

**Stability signal**: 10+ P1 bugs open with no fix PRs — backlog pressure on core reliability. Several regressions introduced in 2026.8.x line.

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signal | Likelihood for Next Version |
|-------|----------|--------|----------------------------|
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | P2 | **Self-hosted STT/TTS in webchat** — 8 comments, 2👍; gateway-routed voice for privacy/control | Medium — architectural (gateway + webchat), but high user demand |
| [#52803](https://github.com/openclaw/openclaw/issues/52803) | P2 | **Multi-agent Control UI** — hierarchy, bulk ops, scalability; 4 comments | High — aligns with active PRs [#136755](https://github.com/openclaw/openclaw/pull/136755) (cross-agent session access), [#136952](https://github.com/openclaw/openclaw/pull/136952) (agent session organization) |
| [#128082](https://github.com/openclaw/openclaw/issues/128082) | P3 | **Stable URLs for automations** — deep-linking into Control UI; 2 comments, CLOSED with PR | High

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Open-Source Ecosystem (2026-09-03)

---

## 1. Ecosystem Overview

The open-source AI agent landscape shows a **bifurcated maturity model**: a handful of large-scale platforms (OpenClaw, CoPaw/QwenPaw, Hermes Agent, ZeroClaw) operate at enterprise-grade velocity with 50–500+ daily PRs, while a long tail of specialized or earlier-stage projects (NanoBot, NanoClaw, IronClaw, Moltis, PicoClaw, LobsterAI) iterate rapidly on niche capabilities. No project released a major version today; the ecosystem is in a **consolidation and hardening phase**—security fixes, upgrade reliability, multi-agent orchestration, and provider abstraction dominate over new user-facing features. Community engagement correlates strongly with multi-channel gateway support (Matrix, Telegram, Slack, WebUI) and self-hosted deployment flexibility.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Merged/Closed PRs | New Release | Health Score* |
|---------|---------------|-------------|-------------------|-------------|---------------|
| **OpenClaw** | 126 | 500 | 112 | No | 🟡 High velocity, 10+ P1 bugs unaddressed |
| **CoPaw/QwenPaw** | 26 | 27 | 6 | **Yes (v2.2.0 stable + beta)** | 🟢 Major milestone shipped, critical bugs surfacing |
| **ZeroClaw** | 16 | 50 | 4 | No | 🟡 RFC-driven, security PRs stalled on review |
| **Hermes Agent** | 10 | 50 | 3 | No | 🟡 Desktop regressions post-v0.21.0 |
| **IronClaw** | 10 | 26 | 10 | No | 🟢 Heavy internal refactor (TS hygiene, CI), zero external engagement |
| **NanoBot** | 2 | 23 | 4 | No | 🟢 High velocity, security-first, active hardening |
| **NanoClaw** | 2 | 21 | 3 | No | 🟢 Strong throughput, provider-contract refactor progressing |
| **Moltis** | 2 | 3 | 0 | **Yes (3 patches 2026-09-02)** | 🟢 Rapid patch cadence, hook-system fixes coded |
| **PicoClaw** | 1 | 1 | 1 | No | 🔴 QQ Channel auth broken, single maintainer bottleneck |
| **LobsterAI** | 6 (stale closures) | 2 | 2 | No | 🔴 Maintenance mode, 5-month PR backlog |
| **NullClaw** | 0 | 0 | 0 | No | ⚫ No activity |
| **ZeptoClaw** | 0 | 0 | 0 | No | ⚫ No activity |

*Health Score: 🟢 Healthy / 🟡 Caution / 🔴 At Risk / ⚫ Dormant

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale & Breadth**: 5–10× the PR/issue volume of next-largest projects; covers gateway stability, multi-agent orchestration, mobile/web UI, plugin ecosystem, CI/release automation simultaneously.
- **Multi-Channel Maturity**: Native MS Teams, Twitch, Matrix, Signal, Telegram, WebUI integrations with active bug-fix cycles—most peers support 1–3 channels.
- **Upgrade Infrastructure**: `doctor --fix`, benchmark suites, and dedicated migration tooling issues (#134896, #123073) indicate investment in operational reliability absent in smaller projects.

**Technical Approach Differences:**
- **Monolithic Gateway Architecture**: Single gateway process manages all channels, agents, and plugins—contrast with ZeroClaw’s decoupled memory/storage/sandbox RFCs or NanoBot’s per-channel runner model.
- **Provider-Agnostic Core**: DeepSeek, SiliconFlow, Telegram, Matrix quirks handled in-core (#121953, #128971) vs. NanoClaw’s provider-contract formalization (#3584–#3588) or IronClaw’s wire-protocol-first provider RFC (#8396).
- **Plugin Ecosystem as First-Class**: Skills, automations, and plugin cleanup (#121984) are core runtime concerns, not afterthoughts.

**Community Size Comparison:**
- **OpenClaw**: ~100+ active contributors implied by 500 PRs/24h; enterprise users reporting upgrade cascades.
- **CoPaw/QwenPaw**: ~20–30 active (26 issues, 27 PRs), strong Chinese-language community, self-hosted hub focus.
- **ZeroClaw/Hermes/IronClaw/NanoBot**: ~10–15 core contributors each, RFC/design-heavy discourse.
- **Others**: ≤5 active contributors; PicoClaw/LobsterAI effectively single-maintainer.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Multi-Agent Orchestration & Isolation** | OpenClaw, CoPaw, ZeroClaw, Hermes, NanoBot | Cross-agent session access (#136755, #136952), sub-agent status polling (#7450), per-pane isolation (#9739), ephemeral context blocks (#5586) |
| **Provider Abstraction & Contract Stability** | OpenClaw, NanoClaw, IronClaw, ZeroClaw, NanoBot | Canonical SDK functions (#136016), provider contracts (#3584–#3588), wire-protocol-first RFC (#8396), Codex/OAuth token persistence (#5446, #5638) |
| **Upgrade/Migration Reliability** | OpenClaw, CoPaw, NanoClaw, Hermes | `doctor --fix` self-referential failure (#134896), `max_tokens`→`max_output_length` migration (#7474), skill-refresh breaking local adapters (#3529), Windows update watchdog (#101850) |
| **Security Hardening & Sandbox** | NanoBot, NanoClaw, IronClaw, ZeroClaw, CoPaw | macOS Seatbelt (#5628), path-traversal (#5633), mount validation (#3680), granular sandbox policy (#6996), governance sandbox breach (#7511) |
| **Observability & Debugging** | NanoBot, Moltis, CoPaw, OpenClaw | WebUI token/speed display (#5631), hook lifecycle dispatch (#1255), tool-call correlation (#1254), memory status endpoint (#7510) |
| **Desktop/WebUI Stability** | Hermes, CoPaw, IronClaw, OpenClaw | Sidebar session loss (#101843), input focus loss (#101853), browser tab isolation (#101856), dark-mode consistency (#7471, #7485) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | CoPaw/QwenPaw | ZeroClaw | Hermes Agent | NanoBot | IronClaw | NanoClaw | Moltis | PicoClaw | LobsterAI |
|-----------|----------|---------------|----------|--------------|---------|----------|----------|--------|----------|-----------|
| **Primary Focus** | Enterprise gateway, multi-channel ops | Self-hosted multi-user hub, Chinese market | Architectural purity, RFC-governed evolution | Desktop-first, realtime voice, bot orchestration | Lightweight gateway, macOS/Linux parity, security | WebUI v2 TypeScript hygiene, channel features | Provider contracts, fork-friendly credential model | Hook system, reasoning-effort tiers | QQ Channel multimedia bot | Local-first desktop, Docker sandbox |
| **Target User** | Ops teams, platform engineers | Power users, homelab, Chinese enterprises | Architects, security-conscious deployers | Desktop users, voice-first workflows | Developers, containerized deployments | Frontend-heavy teams, Near ecosystem | Fork maintainers, multi-group operators | Reasoning-model enthusiasts | QQ ecosystem bot builders | Chinese enterprise, local-first |
| **Architecture** | Monolithic gateway + plugin runtime | Hub + Data + Desktop, ACP/MCP/A2A | Decoupled memory/sandbox/provider layers | Desktop app + gateway, plugin runtime | AgentRunner + per-channel runners | Rust core + WebUI v2 (TS/React) | Skill-based, gateway-declared credentials | Event-sourced hooks + WASM plugins | Go gateway + QQ Channel SDK | Electron + OpenClaw fork |
| **Differentiator** | Operational scale & migration tooling | QwenPaw Hub governance, WeCom/WeChat parity | RFC process, per-agent ownership, WASM plugins | Realtime voice provider contract, bot persistence | Ephemeral context, Seatbelt sandbox, Tiktoken fix | Typed API boundary, mutant CI gate | Gateway credential lane, speed property | `tool_call_id` correlation, `max` reasoning | QQ rich-media parity | Docker readiness probe, full-text search |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (High Velocity + Active Hardening)** | OpenClaw, CoPaw/QwenPaw, ZeroClaw, Hermes Agent, IronClaw, NanoBot, NanoClaw | 20–500 PRs/day; security fixes merged same-day; RFCs or major refactors in flight; releases monthly or faster |
| **Stabilizing / Patch Cadence** | Moltis | 3 patches in 24h; hook-system fixes coded; feature PRs (reasoning `max`) ready |
| **Maintenance Mode / Backlog-Bound** | LobsterAI, PicoClaw | Stale PRs (5 months), auto-closed issues, single critical bug blocking core feature |
| **Dormant** | NullClaw, ZeptoClaw | Zero activity in 24h; no recent commits visible |

**Key Insight**: The top 7 projects by velocity all show **concurrent investment in security, provider contracts, and multi-agent isolation**—suggesting these are the table-stakes for 2026 H2 production deployments.

---

## 7. Trend Signals for AI Agent Developers

1. **Provider Contract Standardization is Non-Negotiable**  
   NanoClaw (#3584–#3588), IronClaw (#8396), ZeroClaw (#8396), and OpenClaw (canonical SDK functions) are converging on **formal provider interfaces** with versioned configs, capability negotiation, and install verifiers. Custom adapters breaking on upgrade (NanoClaw #3529, CoPaw #7474) will accelerate adoption.

2. **Multi-Agent Isolation > Multi-Agent Features**  
   Every active project reports cross-session contamination (Hermes #101856), sub-agent polling gaps (CoPaw #7450), or per-agent ownership holes (ZeroClaw #9745, #9746). **Per-pane/per-agent resource scoping** is the next security baseline.

3. **Upgrade Reliability Determines Adoption**  
   OpenClaw’s `doctor --fix` regression (#134896), CoPaw’s breaking `max_tokens` migration (#7474), and Hermes’ Windows update watchdog (#101850) show that **migration tooling is now a feature**, not an afterthought. Projects without automated rollback/verification will lose enterprise users.

4. **Self-Hosted Voice & Observability Are Differentiators**  
   OpenClaw (#45508), Hermes (realtime voice PR #101808), and NanoBot (WebUI token/speed #5631) signal demand for **gateway-routed STT/TTS** and **in-UI cost/latency transparency**—privacy and cost control drive self-hosting.

5. **RFC/Governance Maturity Correlates with Velocity Sustainability**  
   ZeroClaw’s accepted RFCs (#6850, #6996, #9330) and IronClaw’s mutant CI gate (#8050) show that **formal change processes enable high throughput without regression accumulation**. Ad-hoc projects (LobsterAI, PicoClaw) stall at ~5 PRs/week.

6. **Channel Parity Drives Community Growth**  
   CoPaw’s WeCom/WeChat/WhatsApp investment (#7516, #7507, #3113) and OpenClaw’s MS Teams/Twitch/Matrix breadth attract distinct user bases. **Missing channel = missing user segment**; expect consolidation around Matrix/Slack/Telegram + one regional channel (WeCom, QQ, Lark).

---

**Bottom Line for Decision-Makers**: The ecosystem is standardizing around **gateway-centric, multi-tenant, provider-agnostic architectures** with formal contracts for security, upgrades, and observability. Projects investing in these layers (OpenClaw, ZeroClaw, NanoClaw, CoPaw) will define the 2027 baseline; those treating them as optional (LobsterAI, PicoClaw) risk irrelevance. Developers should prioritize **provider contract compliance, per-agent isolation, and migration tooling** in their roadmaps.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-03

## 1. Today's Overview
NanoBot shows **high development velocity** with 23 pull requests updated in the last 24 hours (4 merged/closed, 19 open) and 2 active issues. The project is in active feature development and hardening phase: multiple security fixes (path-traversal, OAuth token persistence), provider improvements (Codex, Copilot, MiniMax), WebUI/Telegram/Matrix channel enhancements, and a new macOS Seatbelt sandbox backend. No new release was cut today; the main branch continues to accumulate incremental improvements across agent loop, memory, sandboxing, and multi-channel delivery.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5568](https://github.com/HKUDS/nanobot/pull/5568) | **Refactor** | `AgentRunner` now owns context compaction; runner checks request pressure before each provider call and invokes memory consolidator synchronously for active conversations. | Centralizes compaction logic, reduces duplication, improves reliability of context-window management. |
| [#5623](https://github.com/HKUDS/nanobot/pull/5623) | **Bug Fix (P2)** | Drops empty `AgentLoop._active_tasks` sets after tasks finish, preventing unbounded map growth in long-running gateways. | Fixes memory leak for one-shot/temporary sessions. |
| [#5625](https://github.com/HKUDS/nanobot/pull/5625) | **UX Feature** | Replaces “Model not configured” warning with neutral “Choose your AI” action; opens existing Models settings directly. | Improves first-run experience; reduces perceived breakage on fresh installs. |
| [#5628](https://github.com/HKUDS/nanobot/pull/5628) | **Feature (Security)** | Adds **macOS Seatbelt sandbox backend** (`tools.exec.sandbox: seatbelt`) mirroring `bwrap` policy: workspace RW, media RO, parent dir unreadable (protects `config.json`/API keys). | Provides process-level isolation for shell commands on macOS; parity with Linux `bwrap`. |

## 4. Community Hot Topics (Most Active Items)
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#5586](https://github.com/HKUDS/nanobot/issues/5586) | Issue (Enhancement) | 2 | **Ephemeral runtime-context blocks** — allow runtime-context blocks to opt out of history persistence so they are only available for the current model request. |
| [#5627](https://github.com/HKUDS/nanobot/pull/5627) | PR (Feature) | — | **Implementation of #5586** — adds `ephemeral` flag to `RuntimeContextBlock`, keeps context for current request, prevents persistence/replay. |
| [#5631](https://github.com/HKUDS/nanobot/issues/5631) | Issue (Enhancement) | 0 | **WebUI observability** — display context length, model speed (tokens/s) near input area or after response, similar to DeepSeek Harness. |
| [#5628](https://github.com/HKUDS/nanobot/pull/5628) | PR (Feature/Security) | — | **macOS Seatbelt sandbox** — strong interest in native macOS process isolation for `exec` tool. |

**Analysis:** The top community ask is **granular control over context persistence** (#5586/#5627), reflecting real-world pain where injected runtime context (e.g., file snippets, tool outputs) pollutes later turns. The WebUI observability request (#5631) signals growing need for **transparency on model performance/cost** in the UI.

## 5. Bugs & Stability — Reported/Fixed Today
| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **Critical (Security)** | [#5633](https://github.com/HKUDS/nanobot/pull/5633) — Session keys with path-traversal (`../../etc/passwd`) could write outside sessions dir. | **Open PR** (P1) | #5633 adds `JsonlSessionStore.validate_session_key()` at persistence chokepoint. |
| **High (Data Integrity)** | [#5403](https://github.com/HKUDS/nanobot/pull/5403) — Local `tiktoken` undercounts prompt tokens 30–50%, so consolidation never triggers. | **Open PR** (P1, conflict) | Uses API-reported prompt tokens to trigger consolidation. |
| **Medium (Persistence)** | [#5446](https://github.com/HKUDS/nanobot/pull/5446) — Codex OAuth tokens stored outside Nanobot data dir (non-persistent in containers). | **Open PR** (P2) | Persists tokens in Nanobot-managed data directory. |
| **Medium (Persistence)** | [#5638](https://github.com/HKUDS/nanobot/pull/5638) — Copilot OAuth tokens same issue. | **Open PR** (P2) | Stores Copilot credentials in Nanobot data directory. |
| **Medium (Reliability)** | [#5637](https://github.com/HKUDS/nanobot/pull/5637) — Matrix `send_delta()` suppressed stream failures, lost final buffers. | **Open PR** (P2) | Propagates failures, restores failed deltas for retry. |
| **Medium (SDK)** | [#5635](https://github.com/HKUDS/nanobot/pull/5635) — Closing full stream queue dropped oldest unread event. | **Open PR** (P2) | Waits for queue space before adding sentinel. |
| **Low (Memory)** | [#5634](https://github.com/HKUDS/nanobot/pull/5634) — Outbound reply fingerprint cache unbounded. | **Open PR** (P2) | Bounds cache size. |

**Note:** All listed bugs have **open fix PRs** awaiting review/merge. The path-traversal (#5633) and token-undercount (#5403) are highest severity.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Ephemeral runtime-context blocks** | #5586 (issue) + #5627 (PR) | **High** — PR ready, addresses core agent-loop design. |
| **macOS Seatbelt sandbox for `exec`** | #5628 (PR) | **High** — Feature-complete, mirrors existing `bwrap` backend. |
| **WebUI: show context length & model speed** | #5631 (issue) | **Medium** — UI-only, low risk; aligns with observability trend. |
| **Configurable cron delivery & batch archive** | #5620 (PR) | **Medium** — Adds explicit delivery targets, archive lifecycle, WebUI management. |
| **Langfuse tracing for Codex** | #5520 (PR) | **Medium** — Fills observability gap for Codex provider. |
| **Telegram rich-message streaming** | #5614 (PR) | **Medium** — Improves UX for TG channel; marked draft. |
| **Bound reasoning replay to latest assistant turn** | #5611 (PR) | **Medium** — Reduces token waste/prefill cost; closes #5584. |
| **Shared-session heartbeat (`isolatedSession: false`)** | #4551 (PR, old) | **Low** — Long-open, conflict; needs rebase/design alignment. |

## 7. User Feedback Summary
- **Pain Points:**  
  - Runtime context pollution across turns (#5586) — users want “one-shot” context injection.  
  - First-run “Model not configured” feels like an error (#5625).  
  - No visibility into token usage/speed in WebUI (#5631).  
  - OAuth tokens lost in container deployments (#5446, #5638).  
  - Memory leak from empty task-group maps (#5623).  
- **Use Cases Evident:**  
  - Multi-channel gateways (Matrix, Telegram, WebUI) running long-lived.  
  - Secure `exec` tool usage on macOS/Linux.  
  - Codex/Copilot as primary coding providers with tracing needs.  
  - Cron/scheduled jobs with configurable delivery.  
- **Satisfaction Signals:**  
  - Active PR authors (LuckTerence, Shizoqua, Re-bin, etc.) iterating rapidly.  
  - First-run UX fix (#5625) shows responsiveness to onboarding friction.  
  - Security fixes (#5633, #5628) indicate maintainer priority on hardening.

## 8. Backlog Watch — Stale/Important Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) — `heartbeat.isolatedSession` config | **~10 months** | Enables shared-session heartbeat for context continuity; conflicts block merge. Needs design decision or rebase. |
| [#5212](https://github.com/HKUDS/nanobot/pull/5212) — MiniMax music guidance | **~1 month** | Extends provider stack for music generation; test/docs updates pending. |
| [#5403](https://github.com/HKUDS/nanobot/pull/5403) — API-reported tokens for consolidation | **~3 weeks** | Critical for correct context-window management; marked conflict, needs resolution. |
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) — Langfuse tracing for Codex | **~2 weeks** | Observability parity for Codex; conflict label suggests rebase needed. |
| [#5611](https://github.com/HKUDS/nanobot/pull/5611) — Bound reasoning replay | **~4 days** | Reduces token cost/prefill; conflict label, needs review. |

---

**Project Health Indicator:** 🟢 **Healthy — High velocity, security-focused, active hardening.**  
**Next Milestone Candidates:** Ephemeral context blocks (#5627), macOS Seatbelt (#5628), WebUI observability (#5631), cron delivery/archive (#5620).

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-03

## 1. Today's Overview

Hermes Agent shows **high development velocity** with 60 total items updated in the last 24 hours (10 issues, 50 PRs). The project is in active maintenance mode with **no new releases** but significant bug-fixing and refactoring work. Three PRs were merged/closed, indicating steady integration. The issue backlog reveals a cluster of **Desktop-related regressions** post-v0.21.0 (sidebar session loss, browser tab isolation, input focus loss on Windows) alongside ongoing architectural work (god-file decomposition, realtime voice provider, agent runtime plugin API). Overall project health appears **strong but with urgent desktop stability concerns** needing immediate attention.

---

## 2. Releases

**No new releases** published today. The last tagged release appears to be v0.21.0 (referenced in issues #101843, #101854).

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Type | Summary |
|----|------|---------|
| [#101857](https://github.com/NousResearch/hermes-agent/pull/101857) | **Bug Fix (Auth)** | Sibling Hermes processes now adopt a peer's successful Nous 401 token refresh instead of each rotating the shared grant — eliminates stampede on expired bearer tokens. |
| [#99992](https://github.com/NousResearch/hermes-agent/pull/99992) | **Bug Fix (Desktop)** | Pre-save gateway sign-in sessions now write to the connection's own cookie jar (fixes draft remote gateway login before save). |
| [#101850](https://github.com/NousResearch/hermes-agent/pull/101850) | **Bug Fix (Update/Windows)** | Streams `update.log` and heartbeats past the Desktop idle watchdog — prevents `/update` dying with exit 124 while updater is healthy (Layer 2 fix for #97402). |

**Net progress:** Three critical desktop/Windows stability fixes merged — auth stampede, draft gateway login, and update watchdog timeout.

---

## 4. Community Hot Topics (Most Active Items)

| Item | Activity | Core Need |
|------|----------|-----------|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) — *Bot Group Chats persist after Desktop closes* | 23 comments | **Multi-device bot orchestration**: Users need bots placed from laptop/homelab/VPS to survive desktop shutdown. Gateway-owned authority + cross-gateway transport are on `main`; remaining work is connecting foundation to production. |
| [#78642](https://github.com/NousResearch/hermes-agent/issues/78642) — *Shard `tools/mcp_tool.py` (7,230 lines)* | 16 comments | **Architectural debt reduction**: God-file decomposition mandated by 2026-08 policy. Blocked on design decisions for clean module boundaries. |
| [#96731](https://github.com/NousResearch/hermes-agent/issues/96731) — *browser_exec 420s timeout on Windows Desktop with real profile* | 4 comments | **Desktop browser integration regression**: Same code path runs in ~7s standalone but hangs in desktop process. Root cause pinned to `subprocess.run` pipe handling (see fix PR #101852). |

**Pattern:** Desktop multi-session/browser isolation and Windows-specific integration issues dominate community attention.

---

## 5. Bugs & Stability (Reported Today, Ranked by Severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical (Regression)** | [#101843](https://github.com/NousResearch/hermes-agent/issues/101843) / [#101854](https://github.com/NousResearch/hermes-agent/issues/101854) | Desktop sidebar shows "No sessions" for **all projects** after v0.21.0 upgrade on Windows local backend. Chat works; sidebar broken. | — |
| **Critical (Regression)** | [#101853](https://github.com/NousResearch/hermes-agent/issues/101853) | Input box **loses focus automatically** after few seconds (Windows, all sessions including bots). Blocks text input. | — |
| **High** | [#101856](https://github.com/NousResearch/hermes-agent/issues/101856) | Browser preview tabs **not isolated per session/profile** — agent-driven browser opens reuse global active tab, causing cross-session contamination. | [#101802](https://github.com/NousResearch/hermes-agent/pull/101802) (open) |
| **High** | [#96731](https://github.com/NousResearch/hermes-agent/issues/96731) | `browser_exec` with `use_real_profile` **times out at 420s** on Windows Desktop (runs ~7s standalone). | [#101852](https://github.com/NousResearch/hermes-agent/pull/101852) (open) |
| **Medium** | [#101844](https://github.com/NousResearch/hermes-agent/issues/101844) | Stale FTS recovery **doesn't stamp tool prefix high-water** — causes prefix/form mismatch after delete/redaction post-recovery. | — |
| **Medium** | [#88519](https://github.com/NousResearch/hermes-agent/issues/88519) | Kanban auto-decompose **ignores configured timeout** (hardcoded 180s) — tasks stuck in triage on slow backends. | — |
| **Medium** | [#66350](https://github.com/NousResearch/hermes-agent/issues/66350) | Background review **writes unrelated content to skills** — no relevance gate before `skill_manage(patch/write_file)`. | — |

**Windows Desktop regressions post-v0.21.0 are the top stability risk** — three distinct critical bugs filed today alone.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Realtime voice provider contract + orchestrator + first built-in provider** | [#101808](https://github.com/NousResearch/hermes-agent/pull/101808) (PR, needs-decision) | High — provider-neutral contract designed, first implementation ready |
| **Provider-neutral AgentRuntime plugin API** | [#101052](https://github.com/NousResearch/hermes-agent/pull/101052) (PR, needs-decision) | High — extends plugin loader with profile-scoped runtime registration |
| **Optional IMAP IDLE receive mode for email platform** | [#92753](https://github.com/NousResearch/hermes-agent/pull/92753) (PR) | Medium — additive feature, polling remains default |
| **Bot Group Chat persistence across desktop lifecycle** | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Medium — foundation on `main`, production wiring in progress |
| **`message:pre_route` hook + multi-role router** | [#78326](https://github.com/NousResearch/hermes-agent/pull/78326) (PR, superseded by #74272) | Low — closed in favor of original authorship PR |

**Roadmap direction:** Voice/realtime capabilities, runtime extensibility, and multi-gateway bot orchestration are the clear next-frontier features.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Desktop sidebar session list broken after update** | #101843, #101854 — "No sessions" for every project post v0.21.0 | **High** — core navigation broken for Windows local-backend users |
| **Input focus loss makes typing impossible** | #101853 — cursor unfocuses automatically, requires re-click | **High** — basic usability regression on Windows |
| **Cross-session browser tab contamination** | #101856 — agent browser opens reuse global tab, replaces other sessions' pages | **High** — data integrity / session isolation failure |
| **Browser automation 60x slower in Desktop vs standalone** | #96731 — 420s timeout vs 7s standalone on same machine | **High** — blocks browser-use workflows on Windows Desktop |
| **God-file maintenance burden** | #78642 — 7,230-line `mcp_tool.py` violates 2026-08 decomposition policy | **Medium** — long-term velocity drag |

**Positive signals:** Active PR engagement on fixes, community contributing Windows-specific patches (#101849, #101852), and architectural investments (voice, runtime plugins) show healthy contributor ecosystem.

---

## 8. Backlog Watch (Stale Important Items Needing Maintainer Attention)

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#78642](https://github.com/NousResearch/hermes-agent/issues/78642) — Shard `mcp_tool.py` | 30 days | **7,230-line god file** blocks all tooling changes; repo-wide policy mandates decomposition | Open, needs design decision |
| [#66350](https://github.com/NousResearch/hermes-agent/issues/66350) — Background review writes unrelated skill content | 48 days | **Data corruption risk** — skills polluted with irrelevant content; no relevance gate | Open, 1 comment |
| [#88519](https://github.com/NousResearch/hermes-agent/issues/88519) — Kanban ignores configured timeout | 17 days | **Config contract violation** — hardcoded 180s shadows `auxiliary.kanban_decomposer.timeout` | Open, 1 comment |
| [#45269](https://github.com/NousResearch/hermes-agent/pull/45269) — Preserve instruction file rereads | 83 days | **Tool correctness** — `read_file` returns dedup stub for instruction files needing verbatim re-read | Open PR, stale |
| [#72229](https://github.com/NousResearch/hermes-agent/pull/72229) — Isolate search pagination from shell aliases | 39 days | **Reliability** — user `head` aliases break `search_files` pagination | Open PR, stale |

**Recommendation:** Prioritize #78642 (architectural blocker) and #66350 (silent data corruption). The Windows Desktop regression cluster (#101843, #101853, #101856, #96731) should trigger a **hotfix release** given user-facing severity.

---

*Digest generated from GitHub data as of 2026-09-03. All links point to NousResearch/hermes-agent repository.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-03

## 1. Today's Overview
PicoClaw showed modest but focused activity over the past 24 hours. One pull request was merged, delivering a meaningful enhancement to QQ Channel attachment handling, while one critical bug report remains open regarding QQ Channel authentication failures (HTTP 401 / error code 11241). No new releases were published. The project appears to be in active maintenance mode for its QQ Channel integration, with development effort concentrated on media-rich messaging support and gateway stability.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress
| PR | Status | Domain | Summary |
|----|--------|--------|---------|
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | **Merged** | `channel` / `go` | **QQ Channel: richer attachment support** — Adds parsing and replying for emoji, voice, image, video, and file messages. Implements upload-before-send for local attachments and prefers Markdown replies with graceful fallback. |

**Impact**: This PR significantly expands the bot’s expressiveness on QQ Channel, moving beyond plain-text to full multimedia interaction. It closes a long-standing gap in feature parity with other platforms.

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#3349](https://github.com/sipeed/picoclaw/issues/3349) | **Bug** | 2 comments, updated 2026-09-02 | **QQ Channel gateway authentication broken** — Users on both Docker and Linux x86 builds hit `401 Authorization parameter format error` (code 11241) when fetching WebSocket info. Blocks all QQ Channel functionality. |

**Analysis**: The sole active issue is a showstopper for QQ Channel users. The error points to a signature/token format mismatch in the gateway handshake — likely due to upstream API changes or a regression in the auth payload construction. With 2 comments already, community urgency is evident.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#3349](https://github.com/sipeed/picoclaw/issues/3349) | QQ Channel gateway returns `401` with `code: 11241` (“Authorization参数格式错误”) on WebSocket info request. Affects Docker and native Linux x86. Bot cannot connect. | **No linked PR yet** |

**Note**: This is a regression or compatibility break. No fix PR has been opened as of this digest. Maintainer triage is needed urgently.

## 6. Feature Requests & Roadmap Signals
No new feature requests were filed in the last 24 hours. However, the merged PR [#1349](https://github.com/sipeed/picoclaw/pull/1349) signals the roadmap priority: **full multimedia parity for QQ Channel**. Given the current bug blocking the channel entirely, the next logical steps are:
1. Fix gateway auth (unblocks all QQ features)
2. Extend attachment support to other channels (if not already present)
3. Add reaction/thread/reply metadata handling for QQ

## 7. User Feedback Summary
- **Pain point**: QQ Channel is completely unusable due to auth failure — affects both containerized and bare-metal deployments.
- **Use case**: Users expect reliable gateway connection to receive/send rich messages (voice, image, video, file, emoji) — exactly what PR #1349 enables *once connected*.
- **Sentiment**: Frustration implied by immediate reporting on two platforms; no positive feedback visible in this window.

## 8. Backlog Watch
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#3349](https://github.com/sipeed/picoclaw/issues/3349) | 4 days (created 2026-08-30) | **Open, unassigned** | **Critical path blocker** for QQ Channel. No maintainer response yet. Should be triaged and assigned immediately. |
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | ~6 months (created 2026-03-11) | **Merged 2026-09-02** | Long review cycle suggests either low reviewer bandwidth or complex integration. Now merged — validate in next release. |

---

**Bottom line**: PicoClaw’s QQ Channel support took a major step forward with multimedia handling, but is currently **non-functional for all users** due to a gateway authentication regression. The project’s near-term health hinges on resolving [#3349](https://github.com/sipeed/picoclaw/issues/3349) and cutting a patch release.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-03

## 1. Today's Overview
NanoClaw shows **high development velocity** with 21 PRs updated in the last 24 hours (3 merged/closed, 18 active). The project is in a heavy refactoring and stabilization phase: provider contracts (Codex, OpenCode, host, setup) are being formalized, delivery/channel bugs are being fixed, and security hardening continues. No new release was cut today. Two fresh issues highlight friction in the skill-refresh workflow and a gateway credential-model request from a heavy fork user.

## 2. Releases
**No new releases today.** The last published version remains prior to 2026-09-03.

## 3. Project Progress (Merged/Closed Today)
| PR | Type | Summary | Link |
|----|------|---------|------|
| **#2973** | Fix (supply-chain) | Hoists `minimumReleaseAge: 4320` out of the `pnpm:` key in `pnpm-workspace.yaml` so pnpm actually enforces the 3-day publish gate. | [#2973](https://github.com/nanocoai/nanoclaw/pull/2973) |
| **#3672** | Test (skill-directives) | Updates expectations for files copied by `add-slack` skill (slack-raw-text fixtures). | [#3672](https://github.com/nanocoai/nanoclaw/pull/3672) |
| **#3593** | Test (Codex) | Pins `speed: fast` → `service_tier = "fast"` rendering in Codex `config.toml`; verifies `standard`/unknown emit no tier line. | [#3593](https://github.com/nanocoai/nanoclaw/pull/3593) |

*Net effect*: Supply-chain gate now active; Codex provider contract test coverage improved; Slack skill test fixtures aligned.

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| **#3529** *update-nanoclaw skill refresh breaks local adapters* | 2 comments, updated 2026-09-02 | Users with custom adapters (no `.claude/skills/add-…` metadata) get overwritten or fail validation during `update-nanoclaw`; need opt-out or detection heuristic. | [#3529](https://github.com/nanocoai/nanoclaw/issues/3529) |
| **#3701** *Gateway-declared credential lane in `validateSpec`* | 0 comments, created 2026-09-02 | Fork running 24 agent groups with per-group credentials on gateway model wants a first-class `credentialLane` in spec validation to avoid placeholder-swap workarounds. | [#3701](https://github.com/nanocoai/nanoclaw/issues/3701) |
| **#3492** *Fix pnpm minimumReleaseAge gate (hoist + regression test)* | Updated 2026-09-03 (oldest open PR in set, created 2026-08-23) | Duplicate of merged #2973 but adds regression test; maintainers may want to merge test portion. | [#3492](https://github.com/nanocoai/nanoclaw/pull/3492) |

*Signal*: Contributors maintaining large forks (24+ groups) are pushing for gateway-native credential primitives; local-customization preservation during upgrades is a recurring pain point.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | PR / Issue | Title | Fix PR Exists? |
|----------|------------|-------|----------------|
| **High** | **#3680** | `validateSpec` allowlisted-extra mount bypass — security hole in container mount validation | ✅ [#3680](https://github.com/nanocoai/nanoclaw/pull/3680) (open) |
| **High** | **#3703** | Delivery retries 3× on disconnected adapters (ignores `isConnected()`) | ✅ [#3703](https://github.com/nanocoai/nanoclaw/pull/3703) (open) |
| **Medium** | **#3702** | `ncl tasks run` waits up to 60 s (next resync tick) before starting | ✅ [#3702](https://github.com/nanoclaw/pull/3702) (open) |
| **Medium** | **#3427** | `send_card` reports success while Chat SDK silently drops callback actions | ✅ [#3427](https://github.com/nanocoai/nanoclaw/pull/3427) (open) |
| **Medium** | **#3596** | Teams: colon-bearing user IDs not namespaced → card-click auth & sender resolution mismatch | ✅ [#3596](https://github.com/nanocoai/nanoclaw/pull/3596) (open) |
| **Medium** | **#3674** | Outbound files missing MIME type → Teams rejects them | ✅ [#3674](https://github.com/nanocoai/nanoclaw/pull/3674) (open) |
| **Medium** | **#3597** | Gateway proxy blocks `host.docker.internal` → HTTP MCP servers unreachable | ✅ [#3597](https://github.com/nanocoai/nanoclaw/pull/3597) (open) |
| **Low** | **#3113** | WhatsApp inbound media staged where container cannot read | ✅ [#3113](https://github.com/nanocoai/nanoclaw/pull/3113) (open, stale since Jul) |

*All high/medium bugs have open fix PRs; #3113 is the only stale bug (2+ months).*

## 6. Feature Requests & Roadmap Signals
| PR / Issue | Feature | Likelihood for Next Version |
|------------|---------|-----------------------------|
| **#3592** | Core-owned `speed` property per agent group (`fast`/`standard`); CLI `ncl groups config update --speed` | **High** — already has core-team label, provider contracts (#3584, #3588) depend on it |
| **#3573** | AIML API integration (new provider) | **Medium** — external contribution, follows skill template |
| **#3701** | Gateway-declared credential lane in `validateSpec` | **Medium-High** — from heavy fork user; aligns with provider-contract refactor |
| **#3584 / #3588 / #3585 / #3586** | Provider contract formalization (Codex, OpenCode, host, setup) + install verifier | **Very High** — multi-PR epic, core-team driven, near completion |

*Prediction*: Provider-contract refactor + `speed` property will land together; gateway credential lane may follow in same minor cycle.

## 7. User Feedback Summary
| Source | Pain Point / Use Case | Sentiment |
|--------|----------------------|-----------|
| **#3529** (glifocat) | `update-nanoclaw` assumes every channel import is a skill; custom adapters get overwritten or fail validation — no opt-out | 😡 Frustrated (blocks upgrades) |
| **#3701** (davekim917) | 24 agent groups × per-group credentials on gateway model; current `contributedEnv` placeholder-swap works but is awkward — wants native credential lane | 🤔 Constructive (power user, clear architecture ask) |
| **#3113** (CrAzyScreamx) | WhatsApp media staging path inaccessible to container — workaround needed for months | 😕 Patient but blocked |
| **#3597** (orgads) | Gateway proxy breaks `host.docker.internal` MCP servers — common local-dev pattern | 😕 Annoyed (dev-loop friction) |

*Overall*: Advanced users (fork maintainers, multi-group operators) are hitting edge cases in upgrade flow, credential model, and container networking. Core team is responsive with fix PRs, but some bugs (#3113) linger.

## 8. Backlog Watch (Stale / Needs Maintainer Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| **#3113** *WhatsApp media staging* | 44 days (opened 2026-07-21) | Blocks WhatsApp channel media handling; fix PR exists but unmerged |
| **#3492** *pnpm gate + regression test* | 11 days (opened 2026-08-23) | Duplicate of merged #2973 but adds test; test coverage for supply-chain gate is valuable |
| **#2973** *Original pnpm gate fix* | 58 days (opened 2026-07-07) | **Now merged** — but long cycle suggests review bottleneck |
| **#3529** *Skill refresh breaks local adapters* | 9 days (opened 2026-08-25) | Affects all custom-adapter users; needs design decision (opt-out flag? metadata heuristic?) |
| **#3584 / #3588 / #3585 / #3586** *Provider contract epic* | 7 days (opened 2026-08-27) | 4 interlocking PRs; merging order matters — maintainers should coordinate |

---

**Health Indicators**  
- ✅ **Velocity**: 21 PRs/24h, 3 merged — strong throughput  
- ✅ **Security**: Active hardening (#3680)  
- ⚠️ **Stale bugs**: #3113 (44 days), #2973 (58 days to merge)  
- ⚠️ **Upgrade UX**: #3529 unaddressed — affects customization preservation  
- 🟢 **Architecture**: Provider-contract refactor progressing cleanly  

*Next milestone likely*: Provider-contract merge + `speed` property + gateway credential lane → v0.x minor release.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-03

## 1. Today's Overview
IronClaw shows **high internal velocity** with 26 PRs and 10 issues updated in the last 24 hours, but **zero external releases**. The dominant theme is a coordinated **TypeScript hygiene campaign** across the WebUI v2 frontend: four linked issues (#8032–#8036) and four corresponding PRs (#8037–#8040) aim to eliminate ~170 `@ts-nocheck` directives and 1,354 type errors. Concurrently, the team merged fixes for progressive-reply duplication in Slack/Telegram (#8051), CLI smoke-test flakiness (#8045, #8042), and a memory-service error-classification bug (#7985). No user-facing features shipped today; the work is almost entirely **technical debt reduction and CI hardening**.

## 2. Releases
**No new releases** published today.

## 3. Project Progress — Merged / Closed PRs (10)

| PR | Title | Type | Key Change |
|----|-------|------|------------|
| [#8051](https://github.com/nearai/ironclaw/pull/8051) | fix(reply): answer = current model call only | **Bug fix** | Stops progressive-reply concatenation in Slack/Telegram; only the latest model stream is sent. |
| [#8045](https://github.com/nearai/ironclaw/pull/8045) | fix(ci): wait for CLI listener readiness | **CI stability** | Replaces banner-only waits with TCP connection probe; deduplicates retry logic. |
| [#8042](https://github.com/nearai/ironclaw/pull/8042) | fix(cli,ci): keep serve alive, bind before banner, judge named mutants | **CI stability** | Fixes two merge-queue flakes: serve harness killing server early, and mutant gate judging unnamed mutants. |
| [#8006](https://github.com/nearai/ironclaw/pull/8006) | feat(channels): durable progressive replies + native Slack Agent UI | **Feature** | Introduces `ReplyDocument` seam, durable notices, Slack Block Kit rendering, Telegram markdown fallback. |
| [#8050](https://github.com/nearai/ironclaw/pull/8050) | ci: stop cold-compiling every Reborn lane | **CI perf** | Hermetic Cargo home, push-only shared caches, stable toolchain, warm in-place mutation gate. |
| [#7985](https://github.com/nearai/ironclaw/pull/7985) | fix(memory): missing doc = domain failure, not malformed request | **Bug fix** | Changes `MemoryServiceError::input()` → domain failure so model retries correctly. |
| [#8018](https://github.com/nearai/ironclaw/pull/8018) | Replace native SettingsField controls with shared Input/SelectMenu | **Refactor** | Migrates text/number/float/select fields to design-system components. |
| [#8020](https://github.com/nearai/ironclaw/pull/8020) | Use shared SearchField for Workspace and Logs filters | **Refactor** | Adds compact `SearchField` size; migrates both toolbar filters. |
| [#8019](https://github.com/nearai/ironclaw/pull/8019) | Migrate Automations status banners to InlineNotice | **Refactor** | Replaces local banners with shared `InlineNotice` component. |
| [#8017](https://github.com/nearai/ironclaw/pull/8017) | Adopt shared form/feedback components in Extension Configure | **Refactor** | Migrates password input + status messages to `Input` + `InlineNotice`. |

**Net signal**: 4 UI consistency refactors, 3 CI/stability fixes, 1 core bug fix, 1 channel feature — all merged cleanly.

## 4. Community Hot Topics
No issues or PRs have comments or reactions (`Comments: undefined`, `👍: 0` across the board). Activity is **entirely internal**; no external community discussion surfaced in the last 24 h.

## 5. Bugs & Stability — Reported Today (Ranked)

| Severity | Issue / PR | Summary | Fix PR |
|----------|------------|---------|--------|
| **High** | [#8041](https://github.com/nearai/ironclaw/issues/8041) | Wrong `FailureKind` on tool failure sends model into unrecoverable state | — (open) |
| **High** | [#7985](https://github.com/nearai/ironclaw/pull/7985) | Missing document reported as `InputEncode` → model retries same args | **Merged #7985** |
| **Medium** | [#8044](https://github.com/nearai/ironclaw/pull/8044) | New Claude families (`claude-fable-*`, `claude-mythos-*`) fall off prompt-cache allowlist | **Open #8044** |
| **Medium** | [#8043](https://github.com/nearai/ironclaw/pull/8043) | O(N·k) re-sanitization of streamed text deltas in loop-host | **Open #8043** |
| **Low** | [#8048](https://github.com/nearai/ironclaw/pull/8048) | `fast-uri` 3.1.7 security warning in architecture-video docs | **Open #8048** |

**Note**: #8041 is the only *open* bug without a fix PR yet; it concerns the core tool-failure contract and could affect agent recovery loops.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| Subagent approval/auth gate → owner inbox | [#8046](https://github.com/nearai/ironclaw/pull/8046) (R3 slice 3a) | **High** — PR open, labeled `core`, part of approved design |
| Unified session-event transport + run-completion notifications | [#8010](https://github.com/nearai/ironclaw/pull/8010) | **High** — XL PR, implements approved design doc |
| Type-safe API boundary layer (shared types, runtime decoders) | [#8034](https://github.com/nearai/ironclaw/issues/8034) + [#8038](https://github.com/nearai/ironclaw/pull/8038) | **High** — PR open, foundational for WebUI v2 |
| Elimination of all `@ts-nocheck` in WebUI v2 | [#8032](https://github.com/nearai/ironclaw/issues/8032) + PRs #8037–#8040 | **Medium** — massive effort (170 files), but 4 PRs already open |

## 7. User Feedback Summary
**No direct user feedback** captured in the last 24 h (zero comments/reactions on issues/PRs). The only user-visible symptom mentioned is the Slack/Telegram progressive-reply bug fixed in #8051: users saw concatenated historical model output ("Let me find the conversation first…") instead of the final answer.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#8041](https://github.com/nearai/ironclaw/issues/8041) | 1 day | **High** | Core tool-failure contract broken; blocks agent self-correction |
| [#7835](https://github.com/nearai/ironclaw/pull/7835) | 11 days | Medium | Dependabot: 5 GitHub Actions updates (incl. `setup-node` 4→7) — may need compat check |
| [#8010](https://github.com/nearai/ironclaw/pull/8010) | 3 days | Medium | XL PR, touches session transport + notifications; needs thorough review |
| [#8032](https://github.com/nearai/ironclaw/issues/8032) | 1 day | Medium | 170 files / 61.8k lines under `@ts-nocheck` — strategic debt, not urgent |
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | 5 days | Low | Nightly codebase-graph refresh; routine but stale |

---

**Health Indicators**
- ✅ **Merge throughput**: 10 PRs merged/closed in 24 h
- ✅ **CI investment**: 2 major CI perf/stability PRs merged (#8050, #8045)
- ⚠️ **TypeScript debt**: 170 files still suppressed; 4 PRs in flight but not merged
- ⚠️ **Open high-sev bug**: #8041 unaddressed
- ❌ **External engagement**: Zero community interaction

**Bottom line**: IronClaw is in a **heavy internal refactoring sprint** (TypeScript hygiene, CI hardening, channel features). User-facing velocity is paused; the next release will likely bundle the channel features (#8006) + subagent gate (#8046) + typed API boundary (#8038) once the TS debt PRs land.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-03

## 1. Today's Overview

LobsterAI shows **low active development velocity** with no new releases and minimal fresh contributor activity. The past 24 hours were dominated by **stale-issue cleanup** (6 issues auto-closed from April 2026) and **two merged PRs** — a Windows guide fix and a revert of the in-app browser feature from the 2026.8.31 release line. Seven open PRs dating back to March 2026 remain unmerged, indicating a backlog of concurrency fixes, security hardening, and feature work awaiting review. Overall project health appears **maintenance-mode** with core architecture work (concurrency control, Docker sandbox readiness, MCP security) stuck in review limbo.

## 2. Releases

**No new releases** in the last 24 hours. The latest release line referenced is `release/2026.8.31`, from which the in-app browser feature was reverted (PR #2597).

## 3. Project Progress

### Merged / Closed PRs (2026-09-02)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#2598](https://github.com/netease-youdao/LobsterAI/pull/2598) | `Liuzhq/fix guide win` | renderer | Windows user-guide fix; minor doc/UI polish |
| [#2597](https://github.com/netease-youdao/LobsterAI/pull/2597) | `revert(browser): remove in-app browser from 2026.8.31 release` | renderer, main, openclaw, cowork, artifacts | **Reverts #2574** — in-app browser feature pulled from current release window; restores pre-#2574 behavior. Feature branch preserved for future re-apply. |

### Open PRs Awaiting Review (all from 2026-03-31, marked `[stale]`)
| PR | Title | Area | Status |
|----|-------|------|--------|
| [#1090](https://github.com/netease-youdao/LobsterAI/pull/1090) | `CoworkRunner` reentrancy protection & serialization | cowork | **Critical concurrency fix** — per-session promise queue to prevent stream corruption & duplicate messages |
| [#1100](https://github.com/netease-youdao/LobsterAI/pull/1100) | IM message concurrency: per-conversation async mutex | IM, cowork | **Critical race-condition fix** — serializes `processMessage()` per conversation to stop duplicate session creation & message loss |
| [#1101](https://github.com/netease-youdao/LobsterAI/pull/1101) | Cross-provider model switch race (gateway restart) | main, config | **High-severity bug fix** — awaits `configService.updateConfig()` to prevent requests hitting restarting gateway |
| [#1102](https://github.com/netease-youdao/LobsterAI/pull/1102) | Tooltip for scheduled-tasks toggle button | settings, i18n | UX polish — adds hover hint (zh/en) for enable/disable switch |
| [#1103](https://github.com/netease-youdao/LobsterAI/pull/1103) | Docker sandbox readiness probe & status UI | settings, openclaw | **Feature** — read-only `docker info` probe (12s timeout) to surface sandbox capability without changing execution mode |
| [#1125](https://github.com/netease-youdao/LobsterAI/pull/1125) | Full-text session search + keyword highlighting | cowork, UI | **Feature** — searches message bodies, shows contextual snippets (60 chars each side), highlights matches |
| [#2590](https://github.com/netease-youdao/LobsterAI/pull/2590) | MCP stdio command & external URL hardening | main, openclaw, security | **Security hardening** — validates shell metacharacters, command paths, and protocol allowlist for `shell.openExternal` |

## 4. Community Hot Topics

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | Issue (closed) | 6 | **App silent failure** — no response, no error UI after sending prompt (logs attached) |
| [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) | Issue (closed) | 3 | **File upload broken** — model unaware of attached files; regression vs. old `project/` directory approach |
| [#1566](https://github.com/netease-youdao/LobsterAI/issues/1566) | Issue (closed) | 3 | **Stuck response loop** — identical reply to every input (v2026.4.3) |
| [#1099](https://github.com/netease-youdao/LobsterAI/issues/1099) | Issue (open) | 1 | **IM concurrency race** — duplicate sessions & lost messages under rapid fire (PR #1100 addresses) |
| [#1096](https://github.com/netease-youdao/LobsterAI/issues/1096) | Issue (open) | 1 | **MD→PDF UX broken** — opens 3 browser tabs, injects paywall iframe |

**Pattern**: Users hit **silent failures** (no error surface), **regressions in file/context handling**, and **concurrency bugs** in multi-message scenarios. The stale closures suggest these were reported months ago without triage.

## 5. Bugs & Stability

| Severity | Issue / PR | Symptoms | Fix Status |
|----------|------------|----------|------------|
| **Critical** | [#1099](https://github.com/netease-youdao/LobsterAI/issues/1099) / [#1100](https://github.com/netease-youdao/LobsterAI/pull/1100) | Duplicate cowork sessions, message loss under concurrent IM messages | **PR open, stale** — per-conversation mutex implemented |
| **Critical** | [#1101](https://github.com/netease-youdao/LobsterAI/pull/1101) | 「模型服务调用失败」 on cross-provider switch + immediate prompt | **PR open, stale** — awaits config sync + gateway restart |
| **High** | [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | Zero UI feedback after prompt; no logs in UI | **Closed stale** — no fix PR linked |
| **High** | [#1566](https://github.com/netease-youdao/LobsterAI/issues/1566) | Deterministic identical response to all inputs | **Closed stale** — no fix PR linked |
| **High** | [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) | Uploaded files invisible to model | **Closed stale** — no fix PR linked |
| **Medium** | [#2590](https://github.com/netease-youdao/LobsterAI/pull/2590) | MCP stdio command injection risk; unrestricted `openExternal` | **PR open** — validation + allowlist added |
| **Medium** | [#1096](https://github.com/netease-youdao/LobsterAI/issues/1096) | MD→PDF spawns 3 tabs, shows paywall | **Open, stale** — no fix PR |

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Full-text session search with snippets & highlighting** | [PR #1125](https://github.com/netease-youdao/LobsterAI/pull/1125) | **High** — PR complete, UI-ready, addresses power-user history navigation |
| **Docker sandbox readiness probe (read-only)** | [PR #1103](https://github.com/netease-youdao/LobsterAI/pull/1103) | **High** — low-risk observability feature, no execution-mode change |
| **In-app browser** | Reverted in [#2597](https://github.com/netease-youdao/LobsterAI/pull/2597) | **Deferred** — explicitly moved to later release window |
| **IM/concurrency stability** | [PR #1090](https://github.com/netease-youdao/LobsterAI/pull/1090), [#1100](https://github.com/netease-youdao/LobsterAI/pull/1100) | **Blocker** — must land before any multi-user/IM features ship |
| **Cross-provider model switch reliability** | [PR #1101](https://github.com/netease-youdao/LobsterAI/pull/1101) | **Blocker** — core UX for multi-model workflows |

## 7. User Feedback Summary

- **Pain points**: Silent failures (no error toasts/logs), file-context loss, deterministic wrong answers, MD→PDF UX disaster (tabs + paywall).
- **Use cases**: Heavy IM/cowork usage (concurrency bugs surface here), multi-model switching, local sandbox (Docker) execution, deep history search.
- **Sentiment**: Frustration with regressions in core loops (chat, files, export) and lack of visible triage — issues from April closed as stale without resolution.

## 8. Backlog Watch

| Item | Age | Why It Matters |
|------|-----|----------------|
| [PR #1090](https://github.com/netease-youdao/LobsterAI/pull/1090) | 5 months | `CoworkRunner` serialization — prevents stream corruption; foundational for any cowork feature |
| [PR #1100](https://github.com/netease-youdao/LobsterAI/pull/1100) | 5 months | IM message mutex — fixes data loss & duplicate sessions in real-time collab |
| [PR #1101](https://github.com/netease-youdao/LobsterAI/pull/1101) | 5 months | Gateway restart race — breaks multi-provider workflow, a key differentiator |
| [PR #1103](https://github.com/netease-youdao/LobsterAI/pull/1103) | 5 months | Docker probe — unblocks sandbox adoption visibility |
| [PR #1125](https://github.com/netease-youdao/LobsterAI/pull/1125) | 5 months | Full-text search — high-value UX for knowledge workers |
| [PR #2590](https://github.com/netease-youdao/LobsterAI/pull/2590) | 2 days | **Newest PR** — MCP security hardening; should be fast-tracked given supply-chain risk |
| [Issue #1096](https://github.com/netease-youdao/LobsterAI/issues/1096) | 5 months | MD→PDF broken — user-facing export feature, poor impression |

---

**Bottom line**: LobsterAI has a **solid backlog of high-impact fixes and features** (concurrency, security, search, sandbox readiness) but **review bandwidth is the bottleneck**. The two merges today are minor; the seven stale PRs represent the real next version. Prioritizing #1090, #1100, #1101, and #2590 would unblock stability and security; #1125 and #1103 are shippable enhancements.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-03

## 1. Today's Overview
Moltis shows high development velocity with three patch releases cut yesterday (2026-09-02) and three active pull requests opened in the last 24 hours. Two new issues were filed—one critical bug around undispatched lifecycle hooks and one feature request for stable tool-call correlation—both authored by core contributor GTanger. A corresponding fix PR (#1257) already addresses both issues, indicating rapid turnaround. No PRs were merged today, so the current releases represent the latest stable state. The project appears healthy with active maintenance, automated dependency updates, and feature work on reasoning-effort levels proceeding in parallel.

## 2. Releases
All three releases are dated 2026-09-02 and appear to be incremental patches (`.01`, `.02`, `.03`). No changelogs or release notes are provided in the data; however, the versioning scheme suggests bugfixes or minor improvements rather than breaking changes. Users on `20260902.01` (the version referenced in the new issues) should upgrade to `.03` once verified. **Migration note:** Watch for hook-related changes if PR #1257 lands—it adds `tool_call_id` to hook payloads (backward-compatible) and begins dispatching previously-dead events (`AgentEnd`, `MessageSending`, `MessageSent`).

## 3. Project Progress
**No PRs were merged or closed today.** All three open PRs are work-in-progress:
- **#1257** – Core fix for hook lifecycle dispatch & tool-call correlation (author: GTanger) — *directly resolves #1255 and #1254*
- **#1256** – Dependabot: `browserslist` 4.28.2 → 4.28.8 in `/crates/web/ui` (low-risk dev dependency)
- **#1253** – Feature: `max` reasoning effort level + `@reasoning-max` model suffix (author: GTanger)

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#1257** | PR | 0 comments, 0 👍, updated today | [fix(hooks): complete lifecycle dispatch](https://github.com/moltis-org/moltis/pull/1257) |
| **#1255** | Issue | 0 comments, 0 👍, created yesterday | [Bug: AgentEnd, MessageSending, MessageSent hooks never dispatched](https://github.com/moltis-org/moltis/issues/1255) |
| **#1254** | Issue | 0 comments, 0 👍, created yesterday | [Feature: Stable tool call ID in hook payloads](https://github.com/moltis-org/moltis/issues/1254) |

**Analysis:** The hook system is the current focal point. Users (or internal developers) need reliable end-to-end correlation of tool invocations (`BeforeToolCall` → `AfterToolCall` → `ToolResultPersist`) and expect all declared lifecycle events to actually fire. PR #1257 is the convergence point—review priority should be high.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | #1255: `AgentEnd`, `MessageSending`, `MessageSent` hooks declared but never dispatched — breaks hook-based observability, logging, and integration workflows. | Open (filed 2026-09-02) | **#1257** (open, authored by same contributor) |

No crashes or regressions reported beyond the hook dispatch gap. The fix is already coded and awaits review/merge.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| Stable `tool_call_id` in `BeforeToolCall`/`AfterToolCall`/`ToolResultPersist` payloads | #1254 (GTanger) | **High** — implemented in #1257 |
| `max` reasoning effort level + `@reasoning-max` model suffix | #1253 (GTanger) | **High** — PR open, adds schema, API forwarding, UI selector, translations |
| Full dispatch of declared lifecycle hooks (`AgentEnd`, `MessageSending`, `MessageSent`) | #1255 (GTanger) | **High** — implemented in #1257 |

**Prediction:** The next release (likely `20260903.x`) will bundle the hook lifecycle fix, tool-call correlation, and the `max` reasoning tier.

## 7. User Feedback Summary
- **Pain point:** Hook consumers (shell scripts, logging, monitoring) cannot rely on `AgentEnd`, `MessageSending`, `MessageSent`—they exist in code but never fire. This undermines trust in the hook system.
- **Use case:** Correlating tool-call start/end/result across processes requires a stable `tool_call_id`; current payloads lack it.
- **Satisfaction signal:** Core contributor GTanger is both reporting and fixing—suggests internal dogfooding catches these gaps quickly. No external community complaints visible in this window.

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| **None older than 24h in this dataset** | — | All current issues/PRs are fresh. Historical backlog not provided. |

**Maintainer action items for today:**
1. Review & merge **#1257** (unblocks #1255, #1254, restores hook contract).
2. Green-light **#1253** (reasoning `max` level) if tests pass—feature-complete.
3. Merge **#1256** (browserslist bump) — routine, low risk.

---
*Data sourced from GitHub API (issues, PRs, releases updated 2026-09-02 → 2026-09-03). Links point to live GitHub objects.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-03

## 1. Today's Overview
The project released **v2.2.0 (stable)** and **v2.2.0-beta.7** today, marking a major milestone after an extended beta cycle. Activity is exceptionally high: **26 issues** and **27 PRs** updated in 24 hours, with a healthy merge rate (6 PRs closed/merged). The issue queue shows a mix of critical bugs (security sandbox breach, memory indexing failures, context loss), platform-specific regressions (macOS StdIO MCP, Windows ACP), and UX polish (dark mode, sidebar redesign). The community is actively stress-testing the new release, surfacing both installation verification tasks and real-world integration issues.

---

## 2. Releases

### v2.2.0 (Stable) — [Release Page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0)
**Major Features:**
- **QwenPaw Hub**: Self-hosted multi-user hub with local-process/Docker runtimes, workspace-level access controls, credential management, reverse-proxy support ([#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112))
- **QwenPaw Data**: (details truncated in source)

**Migration Notes:** 
- `ModelInfo.max_tokens` → `max_output_length` migration (breaking for custom providers, see [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474))
- New governance policy engine with CRITICAL-type rules ([#7496](https://github.com/agentscope-ai/QwenPaw/issues/7496))

### v2.2.0-beta.7 — [Release Page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.7)
**Fixes:**
- `fix(memory)`: Normalize backend-specific embedding dimensions ([#7465](https://github.com/agentscope-ai/QwenPaw/pull/7465))
- `fix(webui)`: Dark-mode overrides for memory components

**Verification Tracking:** 
- Stable release verification issue: [#7515](https://github.com/agentscope-ai/QwenPaw/issues/7515) (4-hour deadline)
- Beta verification issue: [#7503](https://github.com/agentscope-ai/QwenPaw/issues/7503)

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#7501](https://github.com/agentscope-ai/QwenPaw/pull/7501) | feat: add agent model routing settings | Feature | Adds sub-agent model config, fallback model toggles, free-model-only scope |
| [#7489](https://github.com/agentscope-ai/QwenPaw/pull/7489) | fix(desktop): preserve PyInstaller multiprocessing runtime hook | Bug Fix | Fixes macOS Desktop backend restart when StdIO MCP spawns multiprocessing helper |
| [#7348](https://github.com/agentscope-ai/QwenPaw/pull/7348) | chore: release notes for v2.2.0 | Docs | Release documentation |
| [#7508](https://github.com/agentscope-ai/QwenPaw/pull/7508) | feat(skill): Update make-skill to v2 (DO NOT MERGE) | Feature (WIP) | Approval-driven, script-based skill creation workflow |
| [#7471](https://github.com/agentscope-ai/QwenPaw/pull/7471) | fix: MCP clients page white background in dark mode | Bug Fix | Dark mode CSS fix for `.mcpSection` container |
| [#7483](https://github.com/agentscope-ai/QwenPaw/issues/7483) | agent cron with share_session=true fixes | Bug Fix | Session re-load & stuck "running" state resolution |

**Key Advancement:** Agent model routing UI now exposed (addresses [#7493](https://github.com/agentscope-ai/QwenPaw/issues/7493)), macOS packaging stability improved, dark mode consistency progressing.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) | 7 | Bug | **Main agent doesn't proactively poll sub-agent status** — users must ask "progress?" to trigger status checks; breaks autonomous multi-agent workflows |
| [#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417) | 6 | Bug | **Console stream duplication** — large identical chunks mid-stream, consolidated copy at end; affects both frontend & SSE replay path |
| [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) | 5 | Bug | **Security sandbox bypass** — dangerous instructions evade governance (external write-up linked) |
| [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) | 4 | Bug | **ReMe background embedding fails** — `as_embedding:default` accessed before `start()`; silent failure loses new memories |
| [#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464) | 4 | Bug | **Model connection test fails universally** — "API error when connecting to model 'xxx'" on v2.0.1; dropdowns empty |

**Underlying Themes:** 
1. **Multi-agent orchestration reliability** — proactive monitoring, not reactive querying
2. **Streaming integrity** — deduplication & ordering guarantees
3. **Governance enforcement** — sandbox escapes are critical regressions
4. **Memory pipeline robustness** — background jobs must not fail silently
5. **Model provider connectivity** — basic connection flow broken for some users

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR | Notes |
|----------|-------|--------|--------|-------|
| **Critical** | [#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511) Security sandbox breached | Open | — | External write-up demonstrates bypass; requires immediate triage |
| **Critical** | [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) ReMe embedding job fails silently | Open | — | Background memory indexing broken for OpenAI-compatible backends |
| **High** | [#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447) Early context completely lost in long sessions | Open | — | 160-page docs, manual compression; history before yesterday noon vanished |
| **High** | [#7431](https://github.com/agentscope-ai/QwenPaw/issues/7431) Codex 0.144.x + non-streaming gateway → empty responses | Open | — | Third-party agent returns "empty response", usage=0, no errors logged |
| **High** | [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) Main agent doesn't poll sub-agent status | Open | — | Breaks autonomous delegation; user must prompt for progress |
| **High** | [#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417) Console stream duplication | Open | — | Affects UX & log integrity; both frontend & SSE path |
| **Medium** | [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) Custom provider load fails (max_tokens migration) | Open | — | Breaking change for custom providers post-#7337 |
| **Medium** | [#7510](https://github.com/agentscope-ai/QwenPaw/issues/7510) `/memory/status` returns 500 on v2.2.0-beta.7 Desktop | Open | — | Diagnostics endpoint broken |
| **Medium** | [#7513](https://github.com/agentscope-ai/QwenPaw/issues/7513) deepseek-v4-pro tool call mixing | Open | — | Tool calls interleaved with conversation uniquely in QwenPaw |
| **Medium** | [#7481](https://github.com/agentscope-ai/QwenPaw/issues/7481) macOS StdIO MCP spawn kills active backend | **Fixed** | [#7489](https://github.com/agentscope-ai/QwenPaw/pull/7489) | PyInstaller multiprocessing hook preserved |
| **Medium** | [#7493](https://github.com/agentscope-ai/QwenPaw/issues/7493) Agent model routing panel not rendered | **Fixed** | [#7501](https://github.com/agentscope-ai/QwenPaw/pull/7501) | `showAdvancedModelControls` prop missing |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for Next Version | Rationale |
|---------|-------|----------------------------|-----------|
| **A2A Protocol Support** | [#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484) | Medium | Architecture docs promise unified Driver for MCP/A2A/ACP; only MCP implemented; user asks for timeline |
| **Faster Remote WebUI First Load** | [#7514](https://github.com/agentscope-ai/QwenPaw/issues/7514) | High | Mobile/remote UX pain point; shell loads fast, content lags; caching/prefetch opportunity |
| **WeCom Base64 Image Support** | [#7516](https://github.com/agentscope-ai/QwenPaw/issues/7516) | High | Channel parity gap; WeChat works, WeCom fails on data URLs |
| **WeCom Stream Throttle Reduction** | [#7507](https://github.com/agentscope-ai/QwenPaw/issues/7507) | High | 150ms throttle makes streaming feel sluggish vs WeChat |
| **Import Flow from Codex/Qoder** | [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | High | PR open since Aug 13; "first-time-contributor"; brings instructions, skills, plugins, projects |
| **Reranker UI for ReMe** | [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | Medium | PR open since Jul 23; complements backend reranker feature |
| **Sidebar & Settings Redesign** | [#7502](https://github.com/agentscope-ai/QwenPaw/pull/7502) | High | Active PR; configurable sidebar, keeps plugin registry slots |

**Prediction:** Next patch (v2.2.1) will focus on: critical security fix (#7511), ReMe embedding fix (#7469), context loss (#7447), custom provider migration (#7474), WeCom channel fixes (#7516, #7507), and WebUI load optimization (#7514). A2A support likely v2.3+.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Multi-agent autonomy broken** | Main agent waits for user prompt to check sub-agents ([#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450)) | High (7 comments) |
| **Context evaporates in long sessions** | 160-page docs, manual compression, history before yesterday gone ([#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447)) | High |
| **Streaming UX degraded** | Duplicated chunks ([#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417)), WeCom char-by-char slow ([#7507](https://github.com/agentscope-ai/QwenPaw/issues/7507)) | Medium |
| **Model connectivity fragile** | LAN LLM Studio disconnects → retries → timeout ([#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505)), universal connection test failure ([#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464)) | Medium |
| **Dark mode inconsistencies** | MCP clients white box ([#7471](https://github.com/agentscope-ai/QwenPaw/issues/7471)), memory components ([#7485](https://github.com/agentscope-ai/QwenPaw/pull/7485)) | Low (cosmetic but visible) |
| **Session switching blocked during generation** | Cannot switch tabs while agent thinking/outputting ([#7512](https://github.com/agentscope-ai/QwenPaw/issues/7512)) | Low |
| **Custom provider migration pain** | `max_tokens` → `max_output_length` breaks existing configs ([#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474)) | Low (but blocking for affected) |

**Positive Signals:** Active PR contributions (import flow, sidebar redesign, skill v2), quick fixes for macOS packaging (#7489) and dark mode (#7471), release verification automation.

---

## 8. Backlog Watch (Long-Unanswered / Needing Maintainer Attention)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) Import flow from Codex/Qoder | 21 days | First-time contributor; large feature; "DO NOT MERGE" on skill v2 PRs suggests review bandwidth constrained |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) Reranker UI config panel | 42 days | Complements merged backend feature; UI stuck in review |
| [#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401) Windows ACP agent stall during bootstrap | 5 days | "Under Review"; event loop frozen during plugin init; blocks Windows ACP users |
| [#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936) Coerce string-typed tool args emitted as JSON numbers | 22 days | "Under Review"; model output validation failure for string fields receiving numbers |
| [#7382](https://github.com/agentscope-ai/QwenPaw/pull/7382) Adapt AgentScopeRuntimeWebUI 1.2.0 APIs | 6 days | SDK upgrade; structured `beforeSubmit`, cancellation, response types |
| [#7486](https://github.com/agentscope-ai/QwenPaw/pull/7486) Creator app-plugin 1.1.2 (runtime notification bus, T2V/I2V/S2V, Docker) | 1 day | Large fork sync; media generation scheduling, Windows hardening, Docker deploy |
| [#7509](https://github.com/agentscope-ai/QwenPaw/pull/7509) Make-Skill v2 (approval-driven, script-based) | 1 day | "DO NOT MERGE"; major workflow change for skill creation |

**Maintainer Action Items:**
1. **Triage #7511 (sandbox breach) immediately** — security incident
2. **Assign reviewers to #6960, #6399, #7401** — stale PRs with user impact
3. **Decide on #7509/#7508 (Make-Skill v2)** — conflicting "DO NOT MERGE" labels
4. **Schedule A2A design discussion** (#7484) — roadmap commitment needed

---

**Overall Health:** 🟡 **Caution** — Major stable release shipped but critical bugs (security, memory, context loss) surfacing in first 24h. High community engagement is positive, but review throughput appears constrained (multiple stale PRs). Next 48h critical for v2.2.1 hotfix prioritization.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-03

## 1. Today's Overview
ZeroClaw shows **high architectural activity** with 16 issues and 50 PRs updated in the last 24 hours, but **no new releases**. The project is deep in RFC-driven design work: 11 of 16 active issues are RFCs covering memory architecture, sandbox policy, provider protocols, desktop computer-use, WASM plugins, and governance processes. PR velocity is strong (46 open, 4 closed), dominated by large security-hardening and multi-session UI work. The codebase is stabilizing toward a v0.8.5 line (tracker #9459) while simultaneously advancing foundational RFCs — a healthy but busy "design + hardening" phase.

## 2. Releases
**No new releases today.** The v0.8.5 stabilization tracker (#9459) froze intake on 2026-08-04 and targets weekly cuts through 2026-08-30; the project appears to be in a post-freeze stabilization window.

## 3. Project Progress — Merged / Closed PRs (Last 24h)
| PR | Type | Summary | Link |
|----|------|---------|------|
| #10568 | bug/docs | **Fix reader-scale snap**: corrected 0.85 minimum reader scale rounding bug introduced in #10515; scale now clamps to explicit step ladder. | [#10568](https://github.com/zeroclaw-labs/zeroclaw/pull/10568) |
| #10547 | bug/docs | **Preserve 85% docs reader scale after reload** — closed as fixed by #10568. | [#10547](https://github.com/zeroclaw-labs/zeroclaw/issues/10547) |
| (2 others) | — | Two additional PRs merged/closed (details not in top-20 comment list). | — |

**Net effect**: A docs UX regression fixed same-day; no feature merges in the last 24h — focus remains on open PR review.

## 4. Community Hot Topics — Most Active Issues & PRs
| Item | Type | Comments | Core Theme | Underlying Need |
|------|------|----------|------------|-----------------|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | RFC Issue | 25 | **Decouple memory lifecycle policy from storage backends** | Clear separation of durable storage vs. governance/consolidation logic; avoid re-implementation per gateway/channel. |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC Issue | 22 | **Granular sandbox policy (fs & network)** | Unify drifted app-layer and OS-layer sandbox policies; express per-agent risk profiles cleanly. |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | RFC Issue | 19 | **Separate authoritative memory storage from enrichment connectors** | Bounded connector decision review; preserve storage/enrichment boundary after Core REVISE vote. |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | RFC Issue | 19 | **Wire protocol as first-class in provider construction** | Standardize provider onboarding around wire protocol; reduce adapter fragmentation. |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | RFC Issue | 16 | **Desktop computer-use (screen/input control)** | Secure, approved desktop automation with bounded approval units and session arming. |
| [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) | Enhancement PR | — | **Multi-session panes + agent sidebar (ZeroCode)** | Independent transcripts, queues, approvals per pane; sidebar-launched quickstarts. |
| [#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745) | Bug/Security PR | — | **Per-agent attribution & scoping in knowledge graph** | Mandatory agent ownership on shared SQLite KG; directional read grants. |
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) | Bug/Security PR | — | **Per-agent ownership for session tools & Discord search** | Close check/use races; namespace-predicate scoping. |

**Pattern**: Security scoping (per-agent ownership, sandbox granularity) and memory architecture dominate — the project is hardening multi-tenant, multi-agent trust boundaries while redesigning core memory contracts.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)
| Issue | Severity | Component | Status | Fix PR? |
|-------|----------|-----------|--------|---------|
| [#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523) | **P1 / S2** (degraded behavior) | runtime/daemon — bootstrap file truncation at 6,000 chars invisible to operator | Open | No PR yet |
| #10547 | S3 (minor) | docs — reader scale reset on reload | **Closed** | Fixed by [#10568](https://github.com/zeroclaw-labs/zeroclaw/pull/10568) |

**Only one new functional bug** surfaced today (#10523) — a silent truncation of `AGENTS.md`/`SOUL.md`/etc. when `compact_context` is enabled. No fix PR linked; maintainers should prioritize visibility (warning log or config option).

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Memory lifecycle / storage separation** | #6850, #9103 (both `status:accepted`) | High — architectural prerequisites for v0.9+ |
| **Granular sandbox policy unification** | #6996 (`status:in-progress`, `needs-maintainer-review`) | High — security-critical, active work |
| **Wire-protocol-first provider onboarding** | #8396 (`needs-maintainer-review`) | Medium — reduces adapter debt |
| **Desktop computer-use (screen/input)** | #6909 (`status:accepted`, `desktop`) | Medium — security clarification done; implementation follows |
| **WASM plugin observer lifecycle** | #7822 (`status:accepted`) | Medium — extends plugin model |
| **Verbatim channel send via gateway** | #10050 (`status:accepted`) | Medium — gateway capability gap |
| **Web bundle/daemon compatibility contract** | #9975 (`status:accepted`) | Medium — web deployment hardening |
| **AI-assisted PR pre-review SOP** | #9330 (`status:accepted`) | High — process, not code; already in pilot |
| **PR review evidence / expedited merge lane** | #10366 (`status:accepted`) | High — CI/governance improvement |
| **Opt-in single-tool provider rounds** | #10222 (`status:accepted`) | Medium — interactive agent UX |

**Top candidates for v0.8.5 / v0.9**: sandbox policy (#6996), memory storage/enrichment split (#9103), and the governance/process RFCs (#9330, #10366) which are already accepted.

## 7. User Feedback Summary
| Pain Point / Use Case | Evidence |
|------------------------|----------|
| **Silent context loss** — bootstrap files truncated without notice | #10523: operators unaware `AGENTS.md`/`SOUL.md` cut at 6k chars |
| **Reader scale UX** — 85% setting not persisted across reloads | #10547 (fixed same-day) |
| **Multi-session isolation** — need independent transcripts/approvals per pane | #9739, #9353 (web), #9713 (token accounting on trim) |
| **Per-agent data ownership** — shared knowledge graph/tools leak across agents | #9745, #9746 (large security-scoping PRs) |
| **Approval flow gaps** — channel approvals not bound to originating chat/room | #9574 (Telegram/Slack/Lark/Matrix) |
| **Delegate tool safety** — bounded delegates inherited caller's tools unsafely | #10391, #10188 (independent approval policy) |
| **Provider alias loss** — `llm_task` dropped provider alias | #10519 |
| **Windows CLI env parity** — coding CLIs missing `APPDATA`/`LOCALAPPDATA` | #10403 |

**Sentiment**: Users (and contributors) are hitting **multi-agent isolation bugs** and **silent data loss** — both symptoms of the platform maturing toward multi-tenant use. Fixes are incoming but large; expect churn.

## 8. Backlog Watch — Stale / Needs Maintainer Attention
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 104 days | Foundational memory architecture RFC; 25 comments, `status:accepted`, `risk:high` — implementation blocked on design sign-off. | **Needs maintainer decision / implementation kickoff** |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | 98 days | Sandbox policy unification; `needs-maintainer-review`, `risk:high` — security surface. | **Awaiting maintainer review** |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | 68 days | Wire protocol first-class; `needs-maintainer-review` — affects all provider integrations. | **Awaiting maintainer review** |
| [#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745) | 30 days | XL security PR: per-agent KG ownership; `needs-author-action`, `risk:high` — author action required. | **Author action needed** |
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) | 30 days | XL security PR: per-agent tool scoping; `needs-author-action`, `risk:high`. | **Author action needed** |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | 8 days | Delegate filesystem tools respect target workspace; `needs-author-action`, `risk:high`. | **Author action needed** |
| [#10188](https://github.com/zeroclaw-labs/zeroclaw/pull/10188) | 14 days | Independent delegate approval policy; `needs-maintainer-review`, `risk:high`. | **Maintainer review needed** |
| [#10403](https://github.com/zeroclaw-labs/zeroclaw/pull/10403) | 8 days | Windows CLI env preservation; `needs-maintainer-review`, `risk:high`. | **Maintainer review needed** |
| [#9574](https://github.com/zeroclaw-labs/zeroclaw/pull/9574) | 34 days | Channel approval authorization; `needs-author-action`, `risk:high`. | **Author action needed** |
| [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) | 38 days | v0.8.5 stabilization tracker — intake frozen, weekly cuts. | **Track for release readiness** |

---

**Health Indicators**  
✅ **High RFC throughput** — architectural decisions moving through process  
✅ **Security-first PRs** — per-agent scoping, sandbox, delegate hardening  
✅ **Fast doc bug turnaround** — #10547 → #10568 same-day  
⚠️ **Several XL security PRs awaiting author action** — risk of stale reviews  
⚠️ **Three high-risk RFCs waiting on maintainer review** (#6996, #8396, #10188)  
⚠️ **No feature merges in 24h** — review bandwidth may be saturated  

**Recommendation**: Prioritize maintainer reviews on the three `needs-maintainer-review` RFCs/PRs and nudge authors on the four `needs-author-action` XL security PRs to unblock the v0.8.5 stabilization line.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*