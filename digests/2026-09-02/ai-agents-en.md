# OpenClaw Ecosystem Digest 2026-09-02

> Issues: 151 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-02 04:06 UTC

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

# OpenClaw Project Digest — 2026-09-02

## 1. Today's Overview

OpenClaw is in a **high-velocity maintenance and stabilization phase** with extraordinary activity: 500 PRs and 151 issues updated in 24 hours, alongside the release of **v2026.8.2**. The project shows a mature but complex codebase grappling with multi-agent session management, channel integrations (Telegram, Feishu, Matrix, WhatsApp, iMessage), and cross-platform desktop/mobile delivery. The ratio of closed-to-open items (90 closed issues, 160 merged/closed PRs) indicates active triage, though 61 issues and 340 PRs remain open — a substantial backlog. Several P0/P1 bugs involve message loss, crash loops, and security boundaries, suggesting the project is prioritizing reliability over new features this cycle.

## 2. Releases

### v2026.8.2 — "Your Home agent, beside your work"
**Released:** 2026-09-02 (implied by date)

**Highlights:**
- **Home dock panel**: Open Home in a right or bottom dock with `Cmd/Ctrl+Shift+H`, keeping the current page in view. Users can preview or remove work-context snapshots and attach selected text to messages. ([#133676](https://github.com/openclaw/openclaw/pull/133676), related [#133632](https://github.com/openclaw/openclaw/issues/133632))
- **Desktop companion improvements** (truncated in data)

**Migration notes:** No breaking changes documented in the excerpt. Users on v2026.8.1 should upgrade for the Home dock UX improvement and any included bug fixes.

---

## 3. Project Progress (Merged/Closed PRs Today)

**160 PRs merged/closed** in the last 24h. Key merged fixes and features (from the top 30 by comment activity):

| PR | Area | Summary | Status |
|----|------|---------|--------|
| [#120105](https://github.com/openclaw/openclaw/pull/120105) | scripts/test | Stabilize Vitest shard timing keys for consistent scheduling | ✅ Closed |
| [#123535](https://github.com/openclaw/openclaw/pull/123535) | web-ui | Avoid session catalog refresh storms on focus/presence changes | ✅ Closed |
| [#128995](https://github.com/openclaw/openclaw/pull/128995) | web-ui | Make full session actions (pin, mark unread, set icon, copy ID, move to group) available from chat header | ✅ Closed |
| [#130993](https://github.com/openclaw/openclaw/pull/130993) | gateway/agents | Fix Responses sessions compacting before reaching context limit (6 compaction pipeline fixes) | ✅ Closed |
| [#135710](https://github.com/openclaw/openclaw/pull/135710) | doctor CLI | Fix `doctor --lint --json` emitting terminal notes that break JSON parsing | ✅ Closed |
| [#135844](https://github.com/openclaw/openclaw/pull/135844) | agents | Report current failover counters in console logs (fixes stale counters) | ✅ Closed |

**Ready for maintainer review (high-impact):**
- [#126424](https://github.com/openclaw/openclaw/pull/126424) — Keep conversation delivery within agent bindings (multi-agent, message-delivery, security-boundary risks) — **XL, P1, 🐚 platinum hermit**
- [#135016](https://github.com/openclaw/openclaw/pull/135016) — Fix browser messages becoming interrupted during startup recovery — **XL, P1, 🐚 platinum hermit**
- [#130894](https://github.com/openclaw/openclaw/pull/130894) — Migrate renamed official plugins by legacy npm package name (QQ Bot) — **XL, P2, 🐚 platinum hermit**
- [#126257](https://github.com/openclaw/openclaw/pull/126257) — Localize macOS gateway setup alerts — **M, P3, 🦐 gold shrimp**

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | Priority | Core Need |
|------|------|----------|----------|-----------|
| [#53763](https://github.com/openclaw/openclaw/issues/53763) | Issue | 12 | P3 | **Built-in headless browser** — Bundle Chromium as a first-class tool for reliable web access without external Chrome/third-party APIs |
| [#114020](https://github.com/openclaw/openclaw/issues/114020) | Issue | 11 | P1 | **Feishu/Telegram dispatch failure** — `runChannelInboundEvent` requires `runDispatchLifecycle` after v2026.7.2-beta.4 upgrade |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Issue | 10 | P1 | **Zombie process leak** — Unreaped hook/tool child processes accumulate, causing runtime degradation |
| [#127229](https://github.com/openclaw/openclaw/issues/127229) | Issue | 10 | P1 | **Telegram durable update falsely tombstoned** — Watchdog releases before transport tracker settles |
| [#44309](https://github.com/openclaw/openclaw/issues/44309) | Issue | 9 | P2 | **One-way A2A dispatch mode** — Handoff without reply-back ping-pong for agent-to-agent workflows |
| [#107227](https://github.com/openclaw/openclaw/issues/107227) | Issue | 8 | P0 | **Startup-migration gate fatal** — `openclaw doctor` doesn't resolve conflict; gateway crash-loops with no remedy |
| [#134925](https://github.com/openclaw/openclaw/issues/134925) | Issue | 6 | P1 | **Gateway 100% CPU on ARM64/Pi** — Every agent turn spikes main thread on Raspberry Pi |

**Underlying themes:** 
- **Channel reliability** (Feishu, Telegram, Matrix, WhatsApp) dominates — message loss, dispatch failures, session recovery
- **Resource management** — zombie processes, CPU spikes on ARM, memory/index livelocks
- **Multi-agent architecture** — session routing, conversation delivery boundaries, agent ownership
- **Upgrade/migration pain** — startup gates, plugin version drift, broken repair paths

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 P0 — Critical (Security / Crash-loop / Data Loss)

| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#107227](https://github.com/openclaw/openclaw/issues/107227) | Startup-migration gate fatal; `openclaw doctor` doesn't resolve; gateway crash-loops | No fix PR visible |
| [#106379](https://github.com/openclaw/openclaw/issues/106379) | Crash-loop safe mode resolves SecretRefs before control-plane startup | No fix PR visible |
| [#125284](https://github.com/openclaw/openclaw/issues/125284) | **Security**: `ask-mode` approval prompt doesn't block `exec` — command runs before approval resolves in containerized gateway | ✅ [#126288](https://github.com/openclaw/openclaw/pull/126288) (open, needs proof) |

### 🟠 P1 — High (Message Loss / Session Corruption / Regression)

| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#114020](https://github.com/openclaw/openclaw/issues/114020) | Feishu/Telegram dispatch fails: `runChannelInboundEvent` requires `runDispatchLifecycle` | Closed (fixed in beta?) |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Zombie process leak from hook/tool execution | No fix PR visible |
| [#127229](https://github.com/openclaw/openclaw/issues/127229) | Telegram durable update falsely tombstoned before transport tracker settles | No fix PR visible |
| [#118386](https://github.com/openclaw/openclaw/issues/118386) | Stuck-session recovery aborts healthy runs at 6min when quiet window is `model_call` | No fix PR visible |
| [#126103](https://github.com/openclaw/openclaw/issues/126103) | Message-loss fix (#115228) is beta-only; npm `latest` 2026.7.1-2 still drops messages | No fix PR visible |
| [#135836](https://github.com/openclaw/openclaw/issues/135836) | Cron/subagent announce delivery abandons message on first attempt when channel adapter unavailable | No fix PR visible |
| [#135860](https://github.com/openclaw/openclaw/issues/135860) | Remote iMessage attachments dropped before agent execution (SCP staging race) | No fix PR visible |
| [#91804](https://github.com/openclaw/openclaw/issues/91804) | Internal reasoning leakage in 2026.6.5 — agent thinking exposed to users | No fix PR visible |
| [#134353](https://github.com/openclaw/openclaw/issues/134353) | Xiaomi provider left with empty install payload after upgrade; gateway refuses to start | Closed |
| [#89374](https://github.com/openclaw/openclaw/issues/89374) | Timeout compaction reports success but leaves Codex session unrecoverable | Closed (stale) |
| [#134925](https://github.com/openclaw/openclaw/issues/134925) | Gateway main thread ~100% CPU on every agent turn on ARM64/Pi | No fix PR visible |

### 🟡 P2 — Medium (UX / Performance / Config)

| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#88087](https://github.com/openclaw/openclaw/issues/88087) | Poor UX for long-running background tasks + silent cron wake failures | No fix PR visible |
| [#74848](https://github.com/openclaw/openclaw/issues/74848) | macOS App node repeatedly disconnects with "cancelled" while CLI works | No fix PR visible |
| [#126423](https://github.com/openclaw/openclaw/issues/126423) | Voice Mode deletes conversations & breaks layout (macOS App) | No fix PR visible |
| [#126459](https://github.com/openclaw/openclaw/issues/126459) | HTTP `/v1/chat/completions` sends 50k+ prompt_tokens despite minimal config | No fix PR visible |
| [#90288](https://github.com/openclaw/openclaw/issues/90288) | Non-Anthropic models output tool calls as plain text `[tool: exec]` instead of `tool_use` blocks | Closed (stale) |
| [#73480](https://github.com/openclaw/openclaw/issues/73480) | Matrix cannot be recovered using recovery key | No fix PR visible |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood for Next Version |
|-------|---------|----------------------------|
| [#53763](https://github.com/openclaw/openclaw/issues/53763) | **Built-in headless browser** (bundled Chromium) — 12 comments, P3, off-meta tidepool | Medium — high user demand, but architectural scope large |
| [#44309](https://github.com/openclaw/openclaw/issues/44309) | **One-way A2A dispatch/handoff mode** — 9 comments, P2 | Medium — fits multi-agent roadmap |
| [#63188](https://github.com/openclaw/openclaw/issues/63188) | **Configurable `stopReason="length"` catch-and-continue** for `mode:"run"` sessions | High — targeted, low-risk enhancement |
| [#14051](https://github.com/openclaw/openclaw/issues/14051) | **Activity-based heartbeat with idle timeout** — 3 comments, P3 | Medium — token cost optimization |
| [#46058](https://github.com/openclaw/openclaw/issues/46058) | **Chat-first Android surface** — discussion + possible upstreaming | Low — exploratory, not core |
| [#92981](https://github.com/openclaw/openclaw/issues/92981) | **Eval-backed option discovery** to avoid premature convergence in routing | Low — research/RFC stage |
| [#85688](https://github.com/openclaw/openclaw/issues/85688) | **Enrich usage/status JSON** with agent/cron/channel labels for dashboards | High — observability, low risk |

**Predicted next-version candidates:** JSON enrichment (#85688), stopReason continuation (#63188), and possibly the Android surface discussion (#46058) if a contributor drives it. The headless browser (#53763) is likely a multi-cycle effort.

---

## 7. User Feedback Summary

### Pain Points (from issue narratives)
- **Upgrade trauma**: Multiple users report v2026.7.1 → 2026.8.1 upgrades breaking gateways, plugin drift, empty install payloads, and `openclaw doctor` failing to repair ([#107227](https://github.com/openclaw/openclaw/issues/107227), [#134353](https://github.com/openclaw/openclaw/issues/134353), [#123136](https://github.com/openclaw/openclaw/issues/123136))
- **Message loss in production**: Silent drops on Feishu, Telegram, cron, subagents — users discovering missing messages days later ([#114020](https://github.com/openclaw/openclaw/issues/114020), [#126103](https://github.com/openclaw/openclaw/issues/126103), [#135836](https://github.com/openclaw/openclaw/issues/135836))
- **ARM64/Pi viability**: 100% CPU per agent turn makes Raspberry Pi deployments unusable ([#134925](https://github.com/openclaw/openclaw/issues/134925))
- **Containerized security gap**: `ask-mode` executes commands before approval — critical for Docker/K8s deployments ([#125284](https://github.com/openclaw/openclaw/issues/125284))
- **Reasoning leakage**: Internal chain-of-thought exposed to end users since 2026.6.5 ([#91804](https://github.com/openclaw/openclaw/issues/91804))
- **Voice Mode data loss**: Conversations deleted, layout broken on macOS ([#126423](https://github.com/openclaw/openclaw/issues/126423))

### Positive Signals
- Active community building Android fork, requesting upstream discussion ([#46058](https://github.com/openclaw/openclaw/issues/46058))
- Detailed repro reports with logs, configs, and environment specs
- Contributors submitting fixes for niche issues (Vitest sharding, Docker build speed, plugin migration)

### Use Cases Evident
- Multi-agent gateway with Feishu/Telegram/Matrix/WhatsApp/iMessage/Discord/Slack channels
- Self-hosted on DigitalOcean droplets, Raspberry Pi, macOS, Windows, Docker/OrbStack
- Codex, MiniMax, Vertex, Ollama, OpenAI-compatible providers
- Voice calls via Twilio + OpenAI Realtime
- Cron-driven automation, subagent delegation, skill workshops

---

## 8. Backlog Watch

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant OSS Ecosystem (2026-09-02)

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape shows a **mature but fragmented ecosystem** with 11 actively maintained projects spanning distinct architectural philosophies. High velocity across 7 projects (50–500 PRs/24h) signals strong community engagement, while convergence on multi-agent delegation, provider abstraction, and session event-sourcing indicates emerging architectural consensus. Projects cluster into **enterprise-grade gateways** (OpenClaw, ZeroClaw), **desktop-first assistants** (Hermes, CoPaw, LobsterAI), **lightweight/edge runtimes** (NanoBot, PicoClaw, ZeptoClaw), and **specialized platforms** (IronClaw/NEAR, NanoClaw/container-first, Moltis/Docker-local). No single project dominates mindshare; instead, a healthy plurality of approaches co-evolves.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Today | Latest Release | Health Score |
|---------|--------------|-----------|---------------|----------------|--------------|
| **OpenClaw** | 151 | 500 | ✅ v2026.8.2 | Today | 🟢 **Excellent** |
| **CoPaw (QwenPaw)** | 23 | 40 | ✅ v2.2.0-beta.6 | Today | 🟢 **Excellent** |
| **ZeroClaw** | 11 | 50 | — | v0.8.4 (pre-v0.8.5) | 🟢 **Excellent** |
| **IronClaw** | 13 | 19 | — | Pre-release | 🟢 **Excellent** |
| **NanoClaw** | 2 | 13 | — | Pre-release | 🟢 **Excellent** |
| **NanoBot** | 3 | 15 | — | Pre-release | 🟢 **Healthy** |
| **Hermes Agent** | 15 | 50 | — | v0.21.0 (Aug 31) | 🟡 **Good** (CI broken) |
| **PicoClaw** | 3 | 4 | — | Pre-release | 🟡 **Moderate** |
| **Moltis** | 2 resolved | 2 merged | — | 20260827.01 | 🟢 **Healthy** |
| **LobsterAI** | 12 | 9 | — | Unknown | 🟡 **Debt-heavy** |
| **ZeptoClaw** | 0 | 2 (Dependabot) | — | Unknown | 🟡 **Maintenance** |
| **NullClaw** | 0 | 0 | — | Unknown | 🔴 **Inactive** |

*Health Score criteria: velocity, issue hygiene, release cadence, critical bug response, CI health.*

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale**: 10× PR velocity of nearest peer (500 vs. 50), largest backlog (340 open PRs, 61 open issues)
- **Channel breadth**: Only project with production-grade Telegram, Feishu, Matrix, WhatsApp, iMessage, Discord, Slack integrations
- **Multi-agent maturity**: Gateway architecture with session routing, conversation delivery boundaries, agent ownership — peers are earlier in this journey
- **Cross-platform delivery**: Desktop (macOS/Windows/Linux) + mobile + web from single codebase

**Technical Approach Differences:**
- **Gateway-centric**: Centralized session management vs. peer-to-peer agent loops (NanoBot, Hermes, CoPaw)
- **Plugin ecosystem**: Official + community plugins with npm registry; peers use built-in providers or simpler extension points
- **Session compaction pipeline**: 6-stage Responses session compaction (unique sophistication)

**Community Size**: Largest by contributor count, issue volume, and documented production deployments (DigitalOcean, Raspberry Pi, Docker/OrbStack, enterprise IM).

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Multi-agent delegation & observability** | OpenClaw, ZeroClaw, CoPaw, Hermes, IronClaw | Sub-agent progress visibility (push not pull), delegate sandboxing, tool receipts, partial output streaming |
| **Provider abstraction & model routing** | NanoClaw (6-PR contract stack), Hermes (Bedrock/custom), IronClaw (model catalog), ZeroClaw (custom.* slots) | Unified provider interfaces, capability discovery, cost tracking, extended-thinking passthrough |
| **Session event sourcing & replay** | OpenClaw (compaction), ZeroClaw (append-only history RFC), Hermes (branching/compression) | Deterministic replay, derived agent streams, compression reliability, branch loading |
| **Security boundaries in containers** | OpenClaw (ask-mode exec bypass), ZeroClaw (delegate bypass), IronClaw (rootless Docker), NanoClaw (mount validation) | Command approval before exec, delegate risk profiles, workspace UID/GID mapping, allowlist enforcement |
| **Channel integration reliability** | OpenClaw (Feishu/Telegram/iMessage), NanoBot (Telegram), PicoClaw (Telegram/Feishu), CoPaw (channels), IronClaw (Slack) | Message loss prevention, dispatch lifecycle, reply threading, attachment staging, durable updates |
| **Cron/scheduled task robustness** | OpenClaw (cron/subagent announce), CoPaw (phantom/duplicate/stuck), LobsterAI (reentrancy/ghost events) | Misfire grace handling, session sharing safety, inbox notifications, idempotency |
| **Memory/long-term context systems** | CoPaw (ReMe/PowerContext), ZeroClaw (delegate memory), NanoBot (dream consolidation), OpenClaw (snapshots) | Pluggable backends, embedding dimension normalization, ephemeral context, token optimization |
| **Cross-platform desktop parity** | OpenClaw, Hermes, CoPaw, LobsterAI | WebSocket resilience, native notifications, installer reliability, CJK/locale support |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Architectural Signature |
|---------|---------------|--------------|-------------------------|
| **OpenClaw** | Enterprise multi-channel gateway | Teams, self-hosters, power users | Gateway + agent workers, plugin registry, session catalog |
| **ZeroClaw** | Security-first, event-sourced agents | Security-conscious, enterprise | Append-only history, capability-based delegates, canonical principals |
| **Hermes Agent** | Desktop-first persistent agents | Developers, researchers | Bot Mode (headless), session branching, WebSocket decoupling |
| **CoPaw (QwenPaw)** | Qwen-optimized, test-driven | Chinese devs, Qwen ecosystem | ReMe memory, MCP/ACP drivers, massive test coverage (2000+ new cases/week) |
| **IronClaw** | WebUI polish, NEAR AI integration | Web3 devs, NEAR ecosystem | Design-system unification, agent-loop modularization, model capability catalog |
| **NanoClaw** | Container-first provider standardization | Cloud-native deployments | Provider contract canon, runtime/host/setup separation, skill sandboxing |
| **NanoBot** | Lightweight multi-surface (TUI/Web/Telegram) | Individual devs, edge deployments | Dream consolidation, ephemeral context, phantom action detection |
| **PicoClaw** | Edge/distributed (PC + RISC-V/ARM workers) | IoT, multi-device households | Split-brain architecture, MCP resilience, ultra-light worker mode |
| **LobsterAI** | Chinese market, multimedia artifacts | Chinese enterprise/users | Video artifact sharing, onboarding analytics, DingTalk/Feishu native |
| **Moltis** | Docker-local auth, MCP validation | Local-first, privacy-focused | Loopback auth, doctor validation, reasoning-effort config |
| **ZeptoClaw** | Minimal Rust runtime | Embedded, minimalists | Single-binary, dependency-only maintenance |
| **NullClaw** | — | — | Inactive |

---

## 6. Community Momentum & Maturity

**Tier 1: Rapidly Iterating (High Velocity + Active Releases)**
- **OpenClaw**: Massive throughput, monthly dated releases, active triage
- **CoPaw**: Beta cadence (v2.2.0-beta.6 today), automated release gates, test coverage explosion
- **ZeroClaw**: Pre-release stabilization (v0.8.5), RFC-driven, security-focused
- **IronClaw**: Consolidation phase, XL PRs merging, design-approved features pending review
- **NanoClaw**: Provider contract overhaul (6 coordinated PRs), runtime bumps merged

**Tier 2: Stabilizing (Focused Fixes + Architectural Decisions)**
- **Hermes Agent**: Post-v0.21.0 regression blitz (WSL2, Bedrock, CJK), CI repair, Bot Mode continuity pending design
- **PicoClaw**: Critical MCP hang stale (44 days), edge-worker RFC, Telegram UX fixes in PR
- **Moltis**: Rapid regression fixes (Docker auth, MCP doctor), reasoning-effort + docs PRs open

**Tier 3: Debt-Heavy / Stalled**
- **LobsterAI**: Bulk stale closure masks backlog; 2 high-severity bugs with ready fixes unmerged 5+ months
- **ZeptoClaw**:

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-02

## 1. Today's Overview
NanoBot shows **high development velocity** with 15 PRs and 3 issues updated in the last 24 hours. The project is actively addressing core agent-loop stability (empty task-group cleanup), introducing new filesystem primitives (`copy_file`/`move_file`), and improving UX across WebUI, TUI, and Telegram channels. Six PRs were merged/closed today, indicating steady progress on both bug fixes and feature work. No new release was cut, suggesting changes are accumulating for a future version bump.

## 2. Releases
**No new releases today.** The latest published version remains unchanged; all merged PRs will roll into the next release cycle.

## 3. Project Progress — Merged / Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5622](https://github.com/HKUDS/nanobot/pull/5622) | Bug fix | **Dream consolidation duplicate context** — stopped sending `SOUL.md`, `USER.md`, `MEMORY.md` twice in one request (once via system context, once via `build_dream_prompt`). | Reduces token waste & prompt pollution in dream-mode runs. |
| [#5621](https://github.com/HKUDS/nanobot/pull/5621) | Bug fix | **TUI input preservation** — seals deferred submission before next keystroke; typed input after submit becomes next draft instead of being cleared. | Fixes frustrating UX where rapid typing lost characters. |
| [#5604](https://github.com/HKUDS/nanobot/pull/5604) | Docs | **`edit_file` mutual-exclusivity** — documents that `occurrence`, `line_hint`, `replace_all` cannot be combined. | Clarifies tool contract; prevents runtime rejections. |
| [#5430](https://github.com/HKUDS/nanobot/pull/5430) | Bug fix | **Release completed task groups** — removes `_active_tasks` entry when final dispatch task finishes. | Prevents memory leak in long-running gateways (fixes #5428). |
| [#5603](https://github.com/HKUDS/nanobot/pull/5603) | Feature/Detect | **Detect phantom action claims** — flags turns where agent announces action but issues zero tool calls (part of #1697). | Improves reliability monitoring; catches silent hallucinations. |
| [#5569](https://github.com/HKUDS/nanobot/pull/5569) | Refactor | **Extract tool execution boundary** — moves preparation, execution, batching, error handling out of `AgentRunner` into `nanobot.agent.tools.execution`. | Cleaner separation of concerns; easier testing & future executor swaps. |

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [Issue #2061](https://github.com/HKUDS/nanobot/issues/2061) — *Copy file inside workspace never completes* | 3 comments, open since Mar 2026 | **Missing filesystem primitives** — agent loops `list_dir`/`read_file` but never writes. Directly motivates PR #5626. |
| [Issue #5586](https://github.com/HKUDS/nanobot/issues/5586) — *Ephemeral runtime-context blocks* | 1 comment, opened Aug 28 | **Privacy / context hygiene** — allow runtime context that stays in-current-turn only, not persisted/replayed. PR #5627 implements this. |
| [PR #5625](https://github.com/HKUDS/nanobot/pull/5625) — *WebUI first-run AI setup guide* | Fresh PR, updated today | **Onboarding friction** — replace error state with guided “Choose your AI” flow; lowers barrier for new users. |
| [PR #5624](https://github.com/HKUDS/nanobot/pull/5624) — *Delete unpersisted pane sessions* | Fresh PR, updated today | **WebUI session hygiene** — allow deleting brand-new panes before first message persists; fixes orphaned UI state. |

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **High** | [#2061](https://github.com/HKUDS/nanobot/issues/2061) — File copy silently fails; agent never calls write tool. | Open | [#5626](https://github.com/HKUDS/nanobot/pull/5626) adds `copy_file`/`move_file` tools. |
| **High** | [#5428](https://github.com/HKUDS/nanobot/issues/5428) — Empty `_active_task` groups accumulate, leaking memory in long-running gateways. | Closed | Fixed by [#5430](https://github.com/HKUDS/nanobot/pull/5430) & [#5623](https://github.com/HKUDS/nanobot/pull/5623) (both merged). |
| **Medium** | [#5622](https://github.com/HKUDS/nanobot/pull/5622) — Dream prompt duplicates SOUL/USER/MEMORY (2× tokens). | Merged | Fixed. |
| **Medium** | [#5621](https://github.com/HKUDS/nanobot/pull/5621) — TUI loses keystrokes typed immediately after submit. | Merged | Fixed. |
| **Low** | [#5604](https://github.com/HKUDS/nanobot/pull/5604) — `edit_file` docs implied combinable selectors; runtime rejects. | Merged | Docs clarified. |

## 6. Feature Requests & Roadmap Signals
| Signal | Evidence | Likelihood for Next Version |
|--------|----------|----------------------------|
| **First-class copy/move file tools** | Issue #2061 + PR #5626 (open, active) | **High** — directly unblocks common workspace workflow. |
| **Ephemeral runtime context** | Issue #5586 + PR #5627 (open, implements `ephemeral` flag) | **High** — privacy & context-control demand; small, focused change. |
| **WebUI onboarding overhaul** | PR #5625 (open, “Choose your AI” flow) | **Medium-High** — UX polish for growth; may wait for design review. |
| **Telegram rich-message streaming** | PR #5614 (open, WIP, author notes “haven’t had time to review properly”) | **Medium** — valuable for channel parity but still in draft. |
| **Zalo integration refactor** | PR #2078 (open since Mar 2026, modular plugin arch) | **Low-Medium** — long-running; depends on channel plugin stability. |
| **Agent-loop background-task observability** | PR #5431 (open, conflict, logs task exceptions) | **Medium** — improves debuggability; blocked by merge conflicts. |

## 7. User Feedback Summary
- **Pain point:** *“Agent says it’s copying a file but nothing happens”* (#2061) — users expect basic filesystem ops to work out of the box.
- **Pain point:** *“Dream mode burns tokens re-sending the same context twice”* — power users running consolidation notice cost/latency.
- **Pain point:** *“Typing fast in TUI loses my next message”* — interactive users hit the submit-typing race condition.
- **Desire:** *“Don’t pollute history with one-off context (API keys, temp data)”* — drives ephemeral-block request (#5586).
- **Desire:** *“First-time WebUI setup shouldn’t look like an error”* — onboarding clarity (#5625).

## 8. Backlog Watch — Stale / Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [PR #2078](https://github.com/HKUDS/nanobot/pull/2078) — Zalo integration refactor | **6 months** | Modular plugin rewrite; avoids breaking existing configs. Long review cycle suggests architecture alignment needed. |
| [PR #5431](https://github.com/HKUDS/nanobot/pull/5431) — Report background task failures | **2 weeks** (conflict) | Critical for production observability; merge conflicts block landing. |
| [Issue #2061](https://github.com/HKUDS/nanobot/issues/2061) — Copy file bug | **6 months** | Fundamental filesystem gap; PR #5626 exists but not yet merged. |
| [PR #5568](https://github.com/HKUDS/nanobot/pull/5568) — Runner owns context compaction | **1 week** | Architectural shift; moves compaction logic into `AgentRunner`. Needs design sign-off. |

---

**Health Indicator:** 🟢 **Healthy** — High PR throughput, critical bugs fixed today, clear feature pipeline. Main risk: a few long-open PRs (#2078, #5431) accumulating merge debt.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-02

---

## 1. Today's Overview
Hermes Agent shows **high maintenance velocity** with 65 total updates (15 issues, 50 PRs) in the last 24 hours, but **no new release** since v0.21.0. The project is in a **stabilization phase** — multiple critical regressions from the recent v0.21.0 upgrade (session branching, SQLite I/O on WSL2, Bedrock streaming, Windows CJK locale) are being actively triaged and fixed. PR throughput is strong (12 merged/closed), though CI is currently broken (0-job runs since `24f5a60ed1`). The backlog skews toward **session-state reliability**, **provider compatibility (Bedrock/Anthropic)**, and **desktop/Windows polish**.

---

## 2. Releases
**No new releases today.** Latest remains **v0.21.0** (2026-08-31). Several open PRs target post-v0.21.0 hotfixes (e.g., #100883, #100882, #100875, #100879).

---

## 3. Project Progress — Merged/Closed PRs (12 items)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#100879](https://github.com/NousResearch/hermes-agent/pull/100879) | **Bug fix (P2)** | Branched session now loads on the backend that owns its parent — fixes "Couldn't load this session" after branching | Resolves desktop branch UX regression |
| [#97414](https://github.com/NousResearch/hermes-agent/issues/97414) | **Bug fix (P2)** | Branch re-fire loop stopped; duplicate child sessions no longer accumulate | Fixes macOS branch duplication |
| [#96513](https://github.com/NousResearch/hermes-agent/issues/96513) | **Bug fix (P2)** | Branch takeover now moves URL; pane no longer latches on loader | Windows desktop navigation fixed |
| [#93959](https://github.com/NousResearch/hermes-agent/issues/93959) | **Bug fix (P2)** | Branch creation no longer hangs infinitely on existing sessions | Core branching reliability |
| [#100436](https://github.com/NousResearch/hermes-agent/issues/100436) | **Bug fix (P2)** | Intermittent "Couldn't open bot's chat" (sqlite3 read-only FTS probe) mitigated | Bot Mode roster stability |
| [#95720](https://github.com/NousResearch/hermes-agent/pull/95720) | **Bug fix (P3)** | Kanban idempotency guard made status-blind (archived tasks no longer duplicate) | Cron/task reliability |
| [#100781](https://github.com/NousResearch/hermes-agent/pull/100781) | **Bug fix (P3)** | `create_task(initial_status="blocked")` no longer auto-promotes on next tick | Kanban blocked-state semantics |
| [#99865](https://github.com/NousResearch/hermes-agent/pull/99865) | **Bug fix (P3)** | Ignored nested repositories stay visible in Desktop file browser | Monorepo/worktree usability |
| [#100865](https://github.com/NousResearch/hermes-agent/pull/100865) | **Bug fix (P3)** | Persistent browser daemons now visible to orphan reaper | Browser tool cleanup |
| [#100857](https://github.com/NousResearch/hermes-agent/pull/100857) | **Bug fix (P2)** | Added `claude-opus-5` to official pricing — usage cost reporting now accurate | Billing/usage dashboard correctness |
| [#100872](https://github.com/NousResearch/hermes-agent/pull/100872) | **Bug fix (P2)** | Bare `/refine` bypasses `background_review.enabled: false` gate | Auxiliary review regression |
| [#100752](https://github.com/NousResearch/hermes-agent/pull/100752) | **CI fix (P1)** | Disabled broken `e2e-desktop` job causing 0-job CI runs | Restores CI pipeline |

> **Note:** Several high-impact fixes (#100883, #100882, #100875, #100884) are **open PRs** targeting today's critical bugs — not yet merged.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Activity | Core Need |
|------|----------|-----------|
| [#97948](https://github.com/NousResearch/hermes-agent/issues/97948) **Manual `/compress` 120s timeout vs background success** | 13 comments, P1 | **Session compression reliability** — UI reports failure while worker succeeds minutes later, silently rotating session ID. Users lose trust in compression UI. |
| [#100871](https://github.com/NousResearch/hermes-agent/issues/100871) **SQLITE_IOERR on WSL2 (ext4-on-vhdx) multi-process** | New, P2, 0 comments but **2 open fix PRs** (#100883, #100882) | **WSL2 deployment stability** — 30,000x read throughput collapse after v0.21.0 pooled reads. Blocking for multi-process gateway setups. |
| [#98468](https://github.com/NousResearch/hermes-agent/issues/98468) **Bedrock streaming reasoning shredded by `\n\n`** | 1 comment, P2, **fix PR #100875 open** | **Bedrock streaming fidelity** — reasoning deltas joined with block separator, corrupting output. Affects all Claude-on-Bedrock streaming. |
| [#100858](https://github.com/NousResearch/hermes-agent/issues/100858) **Aux vision `custom:<name>` + `base_url` sends `no-key-required` (401)** | 4 comments, P2 | **Custom provider auth** — vision auxiliary calls ignore configured API key, break custom OpenAI-compatible endpoints. |
| [#97846](https://github.com/NousResearch/hermes-agent/pull/97846) **Bot Mode: automatic Group Chat continuity** | Feature, P3, needs-decision | **Multi-bot persistence** — Group Chats survive desktop close, restore history, hand off between bots. Major UX investment. |

**Underlying theme:** Users are hitting **session-state edge cases** (branching, compression, recovery) and **provider integration gaps** (Bedrock, custom endpoints) hardest. The Bot Mode continuity PRs signal a strategic push toward **headless/persistent multi-agent workflows**.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **P1 (Critical)** | [#97948](https://github.com/NousResearch/hermes-agent/issues/97948) Manual `/compress` false timeout → silent session rotation | Open | — |
| **P1 (Critical)** | [#100752](https://github.com/NousResearch/hermes-agent/pull/100752) CI 0-job runs (e2e-desktop `if: false` parser error) | **Merged** | #100752 |
| **P2 (High)** | [#100871](https://github.com/NousResearch/hermes-agent/issues/100871) WSL2 SQLite `EIO` storm (30k× slowdown) multi-process | Open | [#100883](https://github.com/NousResearch/hermes-agent/pull/100883), [#100882](https://github.com/NousResearch/hermes-agent/pull/100882) |
| **P2 (High)** | [#98468](https://github.com/NousResearch/hermes-agent/issues/98468) Bedrock streaming reasoning corrupted by `\n\n` join | Open | [#100875](https://github.com/NousResearch/hermes-agent/pull/100875) |
| **P2 (High)** | [#100858](https://github.com/NousResearch/hermes-agent/issues/100858) Aux vision `custom:` provider sends wrong auth key (401) | Open | — |
| **P2 (High)** | [#58185](https://github.com/NousResearch/hermes-agent/issues/58185) Bedrock `/model` picker offers bare IDs that 400 on on-demand | Open (since Jul) | — |
| **P2 (High)** | [#39829](https://github.com/NousResearch/hermes-agent/issues/39829) Bedrock whitespace placeholder rejected by Converse API | Open (since Jun) | — |
| **P2 (High)** | [#100880](https://github.com/NousResearch/hermes-agent/issues/100880) `UnicodeDecodeError` from `tasklist` on CJK Windows | Open | [#100884](https://github.com/NousResearch/hermes-agent/pull/100884) |
| **P2 (High)** | [#100874](https://github.com/NousResearch/hermes-agent/issues/100874) Desktop app update fails (logs attached) | Open | — |
| **P3 (Medium)** | [#100864](https://github.com/NousResearch/hermes-agent/issues/100864) Desktop Bots use active profile TTS, not bot's own TTS config | Open | — |
| **P3 (Medium)** | [#100268](https://github.com/NousResearch/hermes-agent/issues/100268) `/proc/uptime` missing in container (host info script broken) | Open, needs-repro | — |

> **Stability signal:** 3 P2 bugs have **open fix PRs** today (#100871, #98468, #100880) — maintainers are responding fast to v0.21.0 regressions. Two long-standing Bedrock issues (#58185, #39829) remain unfixed since June/July.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Evidence | Likelihood for Next Version |
|--------|----------|----------------------------|
| **Bot Mode Group Chat continuity** | 3 large PRs ([#97846](https://github.com/NousResearch/hermes-agent/pull/97846), [#98307](https://github.com/NousResearch/hermes-agent/pull/98307), [#98073](https://github.com/NousResearch/hermes-agent/pull/98073)) with `needs-decision` | **High** — coordinated effort, but gated on design review |
| **Unified package manager (pm)** | [#95281](https://github.com/NousResearch/hermes-agent/pull/95281) — single dependency tree across desktop/cli/gateway/docker/nix | **Medium** — foundational, `ci-reviewed` but `needs-decision` |
| **TTS warm-up via UI toggles** | [#100881](https://github.com/NousResearch/hermes-agent/issues/100881) — read-aloud/voice-conversation toggles as preload signals | **High** — small, UX-focused, no blocking deps |
| **Lean tail budget recalibration** | [#93576](https://github.com/NousResearch/hermes-agent/pull/93576) — runtime `tail_token_budget` recalibration for compression | **Medium** — compression reliability, open since Aug |
| **Stream-only base URLs honored on retry** | [#92193](https://github.com/NousResearch/hermes-agent/pull/92193) — auxiliary retry paths drop stream wrapper | **Medium** — streaming consistency, open since Aug |

**Prediction:** Next patch (v0.21.1) will likely bundle **WSL2 SQLite fixes**, **Bedrock streaming fix**, **CJK Windows fix**, and **branch loading fix**. Bot Mode continuity may land in v0.22.0 pending design sign-off.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | User Voice (from issues) | Frequency |
|------------|--------------------------|-----------|
| **Session branching broken** | "Branch window opens but gets stuck", "duplicate child sessions accumulate", "URL never moves to branch" | 4 issues (#93959, #97414, #96513, #100879) |
| **Compression untrustworthy** | "UI says timeout but worker succeeds later", "session silently rotates to new ID" | 1 issue (#97948) but P1 severity |
| **WSL2 multi-process unusable** | "37 identical tracebacks", "read throughput collapsed ~30000x" | 1 issue (#100871) but blocks deployments |
| **Bedrock streaming broken** | "reasoning text not what model produced", "every delta joined with `\n\n`" | 2 issues (#98468, #39829) |
| **Windows CJK locale crashes CLI** | "every `hermes --version` prints two noise tracebacks" | 1 issue (#100880) |
| **Desktop update fails** | Full log sets attached, no workaround | 1 issue (#100874) |
| **Bot TTS ignores bot profile** | "All bots speak with same voice — active gateway profile's" | 1 issue (#100864) |

**Positive signals:** Users provide **detailed logs, repro steps, and environment info** (WSL2 ext4-on-vhdx, Windows CJK, Bedrock on-demand). Bot Mode continuity PRs show **power users investing in multi-agent workflows**.

---

## 8. Backlog Watch — Stale Important Items Needing Attention

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#58185](https://github.com/NousResearch/hermes-agent/issues/58185) Bedrock `/model` picker offers invokable bare IDs | **60 days** | On-demand Bedrock accounts broken; persists bad model to config | No fix PR; needs provider inventory filter |
| [#39829](https://github.com/NousResearch/hermes-agent/issues/39829) Bedrock whitespace placeholder rejected | **89 days** | Breaks assistant-first history resume on Claude/Bedrock | Simple fix (non-whitespace placeholder) but untouched |
| [#92193](https://github.com/NousResearch/hermes-agent/pull/92193) `stream_only_base_urls` dropped on retry | **11 days** | Auxiliary streaming fails on retry paths | Open PR, no review |
| [#93576](https://github.com/NousResearch/hermes-agent/pull/93576) Lean tail budget recalibration | **9 days** | Compression budget drift at runtime | Open PR, no review |
| [#95281](https://github.com/NousResearch/hermes-agent/pull/95281) Unified package manager | **7 days** | Foundational for reproducible builds across platforms | `needs-decision`, broad scope |

> **Recommendation:** Prioritize merging the **4 open fix PRs for today's P2 regressions** (#100883, #100882, #100875, #100884) and **triage the two ancient Bedrock bugs** (#58185, #39829) — they affect a major cloud provider integration and have simple fixes.

---

## Health Indicators
| Metric | Status |
|--------|--------|
| **Issue closure rate (24h)** | 4/15 = 27% |
| **PR merge rate (24h)** | 12/50 = 24% |
| **Critical regressions with fix PRs** | 3/4 (75%) |
| **CI health** | 🔴 Broken (0-job runs) — **fixed by #10075

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-02

## 1. Today's Overview
PicoClaw shows **moderate maintenance activity** with 4 PRs updated and 3 issues active in the last 24 hours. One PR (#3359) was merged, focusing on internal repository governance contracts. Three open PRs address Telegram messaging UX regressions (reply threading, implicit mentions, document re-attachment). The issue backlog includes a critical agent-loop hang on MCP failure (#3269, 8 comments), a forward-looking edge-worker proposal (#3345), and a fresh Feishu configuration bug (#3355). No new releases were published.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#3359](https://github.com/sipeed/picoclaw/pull/3359) | **Merged** | `feat(repository-reviews)`: enforces product/retention contracts, resource taxonomy, bounded API reference, lifecycle rules, deterministic acceptance gates. | Internal governance / CI quality; no user-facing change. |
| [#3358](https://github.com/sipeed/picoclaw/pull/3358) | Open | `fix(agent)`: ensures outbound responses carry `ReplyToMessageID` when the user's message wasn't a reply (e.g., plain @mention). | Improves conversation threading in group chats. |
| [#3357](https://github.com/sipeed/picoclaw/pull/3357) | Open | `fix(telegram)`: treats replies to the bot's own messages as implicit mentions when `mention_only: true`. | Restores natural follow-up flow in mention-gated groups. |
| [#3356](https://github.com/sipeed/picoclaw/pull/3356) | Open | `fix(telegram)`: re-attaches quoted documents (previously only voice/audio) when replying to a file message. | Fixes context loss for document-based Q&A. |

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) **MCP connection failure hangs agent loop** | 8 comments, 1 👍, stale tag | **Reliability**: Users need the agent to degrade gracefully (timeout, fallback, error message) instead of freezing the entire chat interface when an MCP server is unreachable. |
| [#3345](https://github.com/sipeed/picoclaw/issues/3345) **Lightweight worker mode for edge devices** | 1 comment | **Architecture**: Request to split PicoClaw into a heavy “brain” (PC) + ultra-light “worker” (RISC-V/ARM/MIPS, 10–20 MB RAM) communicating via a simple protocol. Signals growing interest in distributed agent topologies. |
| [#3355](https://github.com/sipeed/picoclaw/issues/3355) **Feishu config validation rejects `app_id`** | 0 comments (new) | **Onboarding**: Config schema appears out of sync with Feishu channel implementation; blocks new Feishu integrations. |

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) Agent loop hangs on MCP failure → chat stops replying | Open, stale | No |
| **High** | [#3355](https://github.com/sipeed/picoclaw/issues/3355) Feishu `config.json` validation error (`unknown field app_id`) | Open, new | No |
| **Medium** | [#3358](https://github.com/sipeed/picoclaw/pull/3358) Missing `ReplyToMessageID` on non-reply mentions | PR open | **Yes** (#3358) |
| **Medium** | [#3357](https://github.com/sipeed/picoclaw/pull/3357) Replies to bot ignored in `mention_only` groups | PR open | **Yes** (#3357) |
| **Medium** | [#3356](https://github.com/sipeed/picoclaw/pull/3356) Quoted documents dropped when replying to file messages | PR open | **Yes** (#3356) |

## 6. Feature Requests & Roadmap Signals
1. **Edge Worker Mode** ([#3345](https://github.com/sipeed/picoclaw/issues/3345)) – Explicit ask for a split-brain architecture (heavy coordinator + fleet of tiny workers). Aligns with PicoClaw’s existing multi-device support; likely candidate for next major version if maintainers accept the complexity.
2. **MCP Resilience** (implied by #3269) – Timeout/retry/circuit-breaker patterns for MCP connections would unblock production use.
3. **Config Schema Sync** – Feishu field rejection suggests automated schema generation or integration tests for channel configs are missing.

## 7. User Feedback Summary
- **Pain Points**:  
  - Agent becomes completely unresponsive when any MCP server fails (#3269).  
  - Telegram UX quirks: bot replies float unthreaded, follow-ups ignored, file context lost (#3356–#3358).  
  - Feishu integration blocked by config validation (#3355).  
- **Use Cases**:  
  - Multi-device households wanting to offload inference to a strong PC while keeping presence on low-end edge boards (#3345).  
  - Group-chat assistants where natural reply-to-bot behavior is expected.  
- **Sentiment**: Mixed — active PR fixes show maintainers respond to Telegram UX, but the stale critical bug (#3269) and new Feishu blocker indicate gaps in automated testing and MCP error handling.

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) MCP hang | 44 days (stale) | **Single point of failure** for any deployment using MCP; no workaround. Needs maintainer triage: assign, add timeout/retry, or mark “wontfix” with doc update. |
| [#3345](https://github.com/sipeed/picoclaw/issues/3345) Edge worker mode | 8 days (stale) | Strategic direction issue; requires architectural decision. Should be moved to discussions or labeled `rfc` for design review. |
| [#3355](https://github.com/sipeed/picoclaw/issues/3355) Feishu config | 1 day | Blocks new Feishu users; likely a one-line schema fix. Quick win if triaged promptly. |

---  
*Data sourced from GitHub API (issues/PRs updated 2026-09-01 → 2026-09-02). Links point to live GitHub entries.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-02

## 1. Today's Overview
NanoClaw shows **high development velocity** with 13 active PRs and 2 new issues in the past 24 hours. The project is in a heavy refactoring phase focused on **provider contract standardization** (6 related PRs from core team member zvi-fried), alongside runtime upgrades, scheduling enhancements, and a new MCP tool skill. No releases were cut today, indicating changes are still in review. The single merged PR (#3698) bumped Bun and Claude runtimes — a maintenance signal that the container foundation is being kept current.

## 2. Releases
**No new releases today.** The last version bump was the runtime update in PR #3698 (Bun 1.3.12 → 1.4.0, Claude Code 2.1.238 → 2.1.257, Claude Agent SDK 0.3.238 → 0.3.257), which has been merged but not yet released.

## 3. Project Progress — Merged / Closed Today
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#3698](https://github.com/nanocoai/nanoclaw/pull/3698) | **chore(container): bump Bun and Claude runtimes** | containers, agent-runner, skills | Runtime parity across CI, registry-skill validation, and release verification; prepares for newer Claude SDK features. No breaking changes noted. |

**Net movement:** 1 PR merged (runtime bump), 12 PRs remain open — the bulk are large refactors awaiting review.

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#3588](https://github.com/nanocoai/nanoclaw/pull/3588) | PR (Refactor) | Updated 2026-09-01, core-team label | **OpenCode provider contract** — part of a 6-PR series to formalize provider interfaces (runtime, host, setup, codex, opencode, instructions canon). |
| [#3680](https://github.com/nanocoai/nanoclaw/pull/3680) | PR (Fix/Security) | Updated 2026-09-02, area/security | **Mount bypass fix** — closes an allowlisted-extra mount validation hole in container specs. Security-relevant, likely high review priority. |
| [#3696](https://github.com/nanocoai/nanoclaw/pull/3696) | PR (Feature) | Created 2026-09-01, closes #2398 | **Per-task missed-run policy** — addresses a long-standing scheduling gap (issue from 2024) for recurring tasks. |
| [#3697](https://github.com/nanocoai/nanoclaw/pull/3697) | PR (Feature/Skill) | Created 2026-09-01 | **Keenable MCP tool skill** — adds web search/page fetch via `mcp-remote` bridge; expands agent tooling ecosystem. |
| [#3700](https://github.com/nanocoai/nanoclaw/issues/3700) | Issue (Bug) | Created 2026-09-01 | **Messaging-group recreation leaves stale destination local-names** — outbound sends report success against dead targets. Real-user production bug. |
| [#3427](https://github.com/nanocoai/nanoclaw/pull/3427) | PR (Fix) | Updated 2026-09-01, core-team | **send_card callback actions dropped silently** — agent-runner UX fix; bridge was stripping buttons without telling the agent. |

**Pattern:** Core team is driving a **provider abstraction overhaul** (6 PRs), while contributors address security, scheduling, and skill expansion. Two fresh user-reported bugs (#3700, #3699) highlight gaps in messaging-group lifecycle and CLI consistency.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Item | Summary | Fix Status |
|----------|------|---------|------------|
| **High** | [#3700](https://github.com/nanocoai/nanoclaw/issues/3700) | Destination local-names don't repoint when messaging-group is recreated; outbound sends falsely report success against dead target. | **No PR yet** — newly filed, needs triage. |
| **Medium** | [#3699](https://github.com/nanocoai/nanoclaw/issues/3699) | `ncl destinations create/remove` don't auto-fill `--agent-group-id` like other group-scoped commands (inconsistent CLI UX). | **No PR yet** — straightforward consistency fix. |
| **Medium** | [#3427](https://github.com/nanocoai/nanoclaw/pull/3427) | `send_card` promises callback actions but bridge drops them silently; agent misled. | **PR open** — fix defines display cards as text content, removes false promise. |
| **Medium** | [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) | Idle sweep kills slow local-model turns (hardcoded 30min timeout, heartbeat only on stream events). | **PR open** — makes timeout configurable, applies to both kill paths. |
| **Low** | [#3680](https://github.com/nanocoai/nanoclaw/pull/3680) | Allowlisted-extra mount bypass in `validateSpec` — container security hole. | **PR open** — security fix, awaiting review. |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Provider contract standardization** (runtime, host, setup, codex, opencode, instruction canon) | 6 core-team PRs ([#3581](https://github.com/nanocoai/nanoclaw/pull/3581), [#3585](https://github.com/nanocoai/nanoclaw/pull/3585), [#3586](https://github.com/nanocoai/nanoclaw/pull/3586), [#3584](https://github.com/nanoclaw/pull/3584), [#3588](https://github.com/nanocoai/nanoclaw/pull/3588), [#3591](https://github.com/nanocoai/nanoclaw/pull/3591)) | **Very High** — coordinated batch, core-team authored, touches agent-runner, containers, skills, config. |
| **Per-task missed-run policy for recurring tasks** | [#3696](https://github.com/nanocoai/nanoclaw/pull/3696) (closes #2398) | **High** — closes 2-year-old issue, clean implementation. |
| **Configurable idle timeout for agent sweep** | [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) | **High** — unblocks local-model users, low risk. |
| **Keenable MCP tool skill (web search/fetch)** | [#3697](https://github.com/nanocoai/nanoclaw/pull/3697) | **Medium** — new skill, external dependency (`mcp-remote`), needs security review. |
| **Core-owned speed inference property for groups** | [#3592](https://github.com/nanocoai/nanoclaw/pull/3592) | **Medium** — part of provider refactor, enables smarter routing. |

## 7. User Feedback Summary
| Pain Point | Evidence | Context |
|------------|----------|---------|
| **Messaging-group lifecycle broken** | [#3700](https://github.com/nanocoai/nanoclaw/issues/3700) — user fixed Discord platform-id by deleting/recreating group, but destinations still pointed to dead group; sends "succeeded" silently | Production deploy (2026-08-27 to 09-01), related to #3576 |
| **CLI inconsistency** | [#3699](https://github.com/nanocoai/nanoclaw/issues/3699) — `destinations create/remove` lack auto-fill `--agent-group-id` that every other group-scoped command has | Developer friction, easy fix |
| **Agent misled by tool contracts** | [#3427](https://github.com/nanocoai/nanoclaw/pull/3427) — `send_card` promised buttons, bridge dropped them, agent thought it worked | UX trust issue |
| **Local models killed mid-thought** | [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) — 30min hardcoded timeout doesn't account for slow inference | Growing local-model adoption |

**Overall sentiment:** Power users hitting edge cases in messaging, scheduling, and provider diversity. Core team responsive but refactor backlog is large.

## 8. Backlog Watch — Stale / Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3581](https://github.com/nanocoai/nanoclaw/pull/3581) — runtime provider contract | 6 days open | Foundation for all provider work; blocks downstream PRs. |
| [#3585](https://github.com/nanocoai/nanoclaw/pull/3585) — host provider contract | 6 days open | Same — core abstraction. |
| [#3586](https://github.com/nanocoai/nanoclaw/pull/3586) — setup provider contract + install verifier | 6 days open | Critical for reproducible environments. |
| [#3584](https://github.com/nanocoai/nanoclaw/pull/3584) — codex provider contract | 6 days open | Major provider integration. |
| [#3588](https://github.com/nanocoai/nanoclaw/pull/3588) — opencode provider contract | 6 days open | Major provider integration. |
| [#3591](https://github.com/nanocoai/nanoclaw/pull/3591) — render provider instructions from canon | 6 days open | UX consistency across providers. |
| [#3592](https://github.com/nanocoai/nanoclaw/pull/3592) — speed inference property | 5 days open | Routing optimization. |
| [#3427](https://github.com/nanocoai/nanoclaw/pull/3427) — send_card callback fix | 12 days open | Core-team labeled, UX bug, ready for merge. |
| [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) — configurable idle timeout | 4 days open | Unblocks local-model users. |

**Recommendation:** The 6-provider-contract PR stack is the **single highest-leverage review target** — merging it unlocks cleaner provider onboarding and reduces future fragmentation. Prioritize #3581 → #3585 → #3586 → #3584/#3588 → #3591 → #3592 as a sequence.

---

*Digest generated from GitHub data as of 2026-09-02 00:00 UTC. Links point to nanocoai/nanoclaw repository.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-02

---

## 1. Today's Overview
IronClaw shows **high velocity** with 32 total updates (13 issues, 19 PRs) in the last 24 hours. The project is in a **consolidation and polishing phase**: 8 PRs merged/closed today, heavily focused on WebUI component standardization, agent-loop refactoring, Slack integration fixes, and performance optimizations. No new releases, but multiple XL-sized PRs indicate substantial architectural work nearing completion. QA dogfooding cycles (#8026, #7843) are actively surfacing sandbox and integration bugs.

---

## 2. Releases
**No new releases today.**

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Scope | Impact |
|----|-------|-------|--------|
| [#8031](https://github.com/nearai/ironclaw/pull/8031) | **refactor(agent-loop): decompose capability stage mechanics** | Core agent loop | Reduced `executor/capabilities.rs` from 2,938 → 890 lines; extracted batch scheduling, dispatch/recovery, failure normalization into focused modules. |
| [#8028](https://github.com/nearai/ironclaw/pull/8028) | **refactor(agent-loop): align state and stage ownership** | Core agent loop | Split checkpoint state into compaction, recovery, reply-admission, stop-control modules; moved model-usage bookkeeping to `ModelStage`. |
| [#7997](https://github.com/nearai/ironclaw/pull/7997) | **feat(webui): show model capability icons across Inference** | WebUI / LLM | Displays Text/Image input/output capability icons with hover descriptions across all model selectors; supports legacy and catalog responses. |
| [#7998](https://github.com/nearai/ironclaw/pull/7998) | **feat(llm): preserve NEAR AI model capabilities through discovery** | LLM / Model discovery | Added provider-neutral model catalog with modalities; introduced `list_model_catalog()` while preserving `list_models()` API. |
| [#7996](https://github.com/nearai/ironclaw/pull/7996) | **perf(github): compact repository list responses** | Extensions / GitHub | Projects `github.list_repos` to model-useful fields (519 KB → ~50 KB); reuses projection for `search_repositories`; rebuilds WASM artifact. |
| [#8013](https://github.com/nearai/ironclaw/pull/8013) | **ci: parallelize affected crate tests with nextest** | CI / Infrastructure | Runs affected-package tests via nextest (4 parallel processes); derives conservative Cargo-only subset for custom targets. |
| [#8027](https://github.com/nearai/ironclaw/pull/8027) | **fix(live-qa): find Slack run by message identity, not envelope event_id** | Integrations / Slack | Fixes 33 consecutive canary failures (`qa_7d_slack_bug_message_trigger`) by matching on message identity instead of `event_id`. |
| [#8014](https://github.com/nearai/ironclaw/pull/8014) | **fix(slack): preserve explicit mentions across callback dedup** | Integrations / Slack | Preserves `@mentions` when Slack delivers same threaded post as both `message` and `app_mention` callbacks. |

**Net effect:** Agent-loop architecture significantly simplified; WebUI model-capability UX shipped; GitHub extension payload reduced ~10×; CI test throughput improved; Slack integration stabilized after persistent canary failures.

---

## 4. Community Hot Topics

| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#8006](https://github.com/nearai/ironclaw/pull/8006) | PR (XL) | Updated today, 0 comments | **Slack Agent UI**: Durable progressive replies + native Slack Agent UI via provider-neutral `ReplyDocument` and adapter seam. Blocked on review. |
| [#8010](https://github.com/nearai/ironclaw/pull/8010) | PR (XL) | Updated today, 0 comments | **Session-event transport unification**: Typed stream contracts, ticket-authenticated multiplexing WebSocket, run-completion notifications. Design-approved, awaiting merge. |
| [#7921](https://github.com/nearai/ironclaw/issues/7921) | Issue (P2) | Updated today, 0 comments | **OpenAI prompt-cache collapse**: Cache-hit rate drops 82%→29% past ~200 calls because OpenAI-family backends send no `prompt_cache_key`. Affects cost/latency at scale. |
| [#7986](https://github.com/nearai/ironclaw/issues/7986) | Issue (Closed) | 1 comment | **GitHub API bloat**: 81 raw fields/repo (519 KB for 98 repos). Fixed by #7996. |
| [#8025](https://github.com/nearai/ironclaw/issues/8025) | Issue (Bug) | 1 comment, created yesterday | **Special-char handling regression**: Input stripping/errors with special characters, possibly from recent encoding changes. |

**Signal:** Two massive integration PRs (#8006, #8010) are stalled at review despite design approval — reviewer bandwidth may be the bottleneck.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR | Notes |
|----------|-------|--------|--------|-------|
| **High** | [#8015](https://github.com/nearai/ironclaw/issues/8015) Rootless Docker sandbox workspace not writable (UID/GID mismatch) | Open | — | Blocks non-root users on rootless Docker; found in QA 2026-08-31. |
| **High** | [#7921](https://github.com/nearai/ironclaw/issues/7921) OpenAI-family backends: ~82%→29% cache-hit collapse past ~200 calls | Open | — | No `prompt_cache_key` sent; affects all OpenAI-compatible paths (Codex, Chat Completions). |
| **Medium** | [#8025](https://github.com/nearai/ironclaw/issues/8025) Special characters stripped/cause errors in input | Open | — | Regression suspected from encoding changes; 1 comment, created yesterday. |
| **Medium** | [#8016](https://github.com/nearai/ironclaw/issues/8016) CI: lock-free turn-state root test intermittently times out (5s budget) | Open | — | Flaky test in `tests/reborn_turn_state_lock_free_submit_parity.rs`. |
| **Low** | [#7984](https://github.com/nearai/ironclaw/pull/7984) `tool_search` reply sized to first-look envelope (16 KB → 857 B) | Open (PR) | #7984 | Reply shrinks correctly but may omit data; needs validation. |

**Critical path:** #8015 (sandbox) and #7921 (cache regression) have no fix PRs yet and affect production workloads.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Evidence | Likelihood for Next Version |
|---------|----------|----------------------------|
| **WebUI design-system unification** | 4 PRs today (#8024, #8023, #8022, #8021) migrating Workspace, Logs, Automations, Settings, Extension Configure to shared `SearchField`, `InlineNotice`, `Input`, `SelectMenu` | **Very High** — all open, same author, consistent pattern |
| **Slack Agent UI & durable replies** | #8006 (XL, design-approved) | **High** — pending review |
| **Session-event transport unification** | #8010 (XL, implements approved design) | **High** — pending review |
| **Model capability catalog (modalities)** | #7997, #7998 merged | **Done** — shipped today |
| **GitHub API response compaction** | #7996 merged | **Done** — shipped today |
| **Agent-loop modularization** | #8031, #8028 merged | **Done** — major refactor complete |
| **CI test parallelization** | #8013 merged | **Done** — infra improvement |

**Prediction:** Next release will be a **WebUI polish + Slack Agent UI** release once #8006 and #8010 land. Agent-loop refactors are complete.

---

## 7. User Feedback Summary

| Pain Point | Source | Context |
|------------|--------|---------|
| **Rootless Docker sandbox broken for non-root users** | [#8015](https://github.com/nearai/ironclaw/issues/8015) | QA dogfooding (2026-08-31); workspace ownership mismatch in persistent per-user sandbox. |
| **Special character input regression** | [#8025](https://github.com/nearai/ironclaw/issues/8025) | User `kapibarazoku0422-create` reports stripping/errors; suspects encoding changes. |
| **OpenAI prompt caching ineffective at scale** | [#7921](https://github.com/nearai/ironclaw/issues/7921) | Measured 82%→29% cache-hit collapse; costs/latency impact for high-volume users. |
| **GitHub `list_repos` returned 519 KB for 98 repos** | [#7986](https://github.com/nearai/ironclaw/issues/7986) | Fixed by #7996; user `henrypark133` caught via production trace. |
| **Slack canary failing 33× consecutively** | [#8027](https://github.com/nearai/ironclaw/pull/8027) | Event accepted but harness couldn't find run; fixed by message-identity lookup. |

**Satisfaction signal:** Active dogfooding epics (#8026, #7843) show internal team using product daily and filing bugs — healthy feedback loop.

---

## 8. Backlog Watch — Stalled / Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#7020](https://github.com/nearai/ironclaw/pull/7020) `chore(deps): bump tokio-tungstenite 0.29→0.30` | 31 days | Dependabot PR; tokio-ecosystem update; no review activity. Low risk but stale. |
| [#7921](https://github.com/nearai/ironclaw/issues/7921) OpenAI prompt_cache_key missing | 6 days | P2 perf regression; no fix PR; affects all OpenAI-compatible backends. |
| [#7984](https://github.com/nearai/ironclaw/pull/7984) `tool_search` reply sizing to first-look envelope | 5 days | XL PR, risk: low; changes reply semantics; needs validation before merge. |
| [#7988](https://github.com/nearai/ironclaw/pull/7988) Codebase knowledge graph refresh (bot) | 4 days | Nightly CI artifact; routine but unmerged. |
| [#8006](https://github.com/nearai/ironclaw/pull/8006) Slack Agent UI (XL) | 2 days | Major feature; design-approved; 0 review comments — **reviewer bandwidth needed**. |
| [#8010](https://github.com/nearai/ironclaw/pull/8010) Session-event transport unification (XL) | 2 days | Major infra; design-approved; 0 review comments — **reviewer bandwidth needed**. |

**Action items for maintainers:**
1. Assign reviewers to #8006 and #8010 (both XL, design-approved, blocked on review).
2. Triage #7921 (OpenAI cache) — assign owner or spike fix.
3. Merge or close stale Dependabot PR #7020.
4. Validate #7984 reply-sizing behavior with integration tests.

---

*Generated from GitHub data as of 2026-09-02. All links point to live GitHub items.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-02

---

## 1. Today's Overview

LobsterAI shows **moderate maintenance activity** with 21 total updates (12 issues, 9 PRs) in the last 24 hours, but **no new release**. The majority of closed items (9 issues, 6 PRs) are marked `[stale]` and date back to March–April 2026, indicating a **bulk cleanup of aged tickets** rather than active resolution. Only 3 issues and 3 PRs remain open/active. Recent merged PRs focus on **onboarding UX polish, analytics instrumentation, video artifact sharing, and Windows installer fixes** — suggesting a sprint targeting first-run experience and platform stability. The project appears in a **stabilization phase** with emphasis on UI/UX refinement and legacy debt reduction.

---

## 2. Releases

**No new releases** published today. The latest version remains unchanged.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2596](https://github.com/netease-youdao/LobsterAI/pull/2596) | `renderer`, `docs`, `cowork` | Track chat login CTA clicks in onboarding analytics; update usage analytics spec | Improves funnel visibility for user acquisition |
| [#2595](https://github.com/netease-youdao/LobsterAI/pull/2595) | `platform: windows` | Fix NSIS web staging drive preflight | Addresses Windows installer reliability |
| [#2594](https://github.com/netease-youdao/LobsterAI/pull/2594) | `renderer`, `cowork` | Polish onboarding guide transitions, CTAs, cursor size, popover speed, animation smoothing | Enhances first-run UX polish |
| [#2593](https://github.com/netease-youdao/LobsterAI/pull/2593) | `renderer`, `docs`, `main`, `artifacts` | **Video artifact sharing**: retain task ID/output index, enforce model-generated video only, add source query/asset polling/share creation, URL hash parsing for legacy sessions, reuse permissions, immutable content protection, preview/localization/tests/docs | Major feature: enables sharing of AI-generated videos with provenance |
| [#2592](https://github.com/netease-youdao/LobsterAI/pull/2592) | `renderer`, `cowork` | Fix user guide (details sparse) | Documentation improvement |
| [#2591](https://github.com/netease-youdao/LobsterAI/pull/2591) | `renderer`, `docs`, `cowork` | Add first-run analytics: onboarding funnel, login handoff, welcome task/stream lifecycle | Strengthens product analytics foundation |

**Key theme**: Onboarding experience, analytics instrumentation, and video artifact sharing — all user-facing quality improvements.

---

## 4. Community Hot Topics

| Item | Type | Comments | Reactions | Core Need |
|------|------|----------|-----------|-----------|
| [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) | Issue (closed, stale) | 3 | 0 | **Engine extensibility**: Request to add `hermes-agent` as optional AI engine (like OpenClaw) |
| [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) | Issue (closed, stale) | 3 | 0 | **Custom model support**: User unable to add custom model — test fails (screenshot attached) |
| [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627) | Issue (closed, stale) | 3 | 0 | **Stability under load**: Client crashes on moderately complex tasks (OpenClaw logs show WebSocket churn) |
| [#1632](https://github.com/netease-youdao/LobsterAI/issues/1632) | Issue (closed, stale) | 3 | 0 | **Skill portability**: Skills break when switching to local models; no clear reinstall path |
| [#1105](https://github.com/netease-youdao/LobsterAI/issues/1105) | Issue (open, stale) | 1 | 0 | **DingTalk scheduled task routing**: `conversationId` prefix (`direct:`/`group:`) not stripped before `primeConversationReplyRoute()` — delivery fails |
| [#1107](https://github.com/netease-youdao/LobsterAI/issues/1107) | Issue (open, stale) | 1 | 0 | **Cron job concurrency**: `pollOnce()` lacks reentrancy guard; `stopPolling()` leaves ghost events firing |

**Analysis**:  
- **Top pain points**: Engine/plugin extensibility (#1614), custom model integration (#1622), and stability under load (#1627) — all closed as stale but reflect **architectural gaps**.  
- **Active technical debt**: Two open stale PRs (#1106, #1108) directly address #1105 and #1107 — **fixes exist but remain unmerged** since March.  
- **Skill system fragility** (#1632) suggests local-model compatibility is a recurring friction point.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR? | Notes |
|----------|-------|--------|---------|-------|
| **Critical** | [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587) — App crashes on first launch after update (macOS, full log attached) | Closed (stale) | No | Blocking for new versions; no fix tracked |
| **High** | [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627) — Client crash on complex task (OpenClaw WebSocket churn) | Closed (stale) | No | Indicates concurrency/resource leak in agent runtime |
| **High** | [#1107](https://github.com/netease-youdao/LobsterAI/issues/1107) — `pollOnce()` reentrancy + ghost events after `stopPolling()` | **Open (stale)** | **[#1108](https://github.com/netease-youdao/LobsterAI/pull/1108)** (open, stale) | Fix adds `pollInFlight` flag + `pollGeneration` counter — **ready but unmerged since March** |
| **Medium** | [#1105](https://github.com/netease-youdao/LobsterAI/issues/1105) — DingTalk scheduled task delivery fails due to `conversationId` prefix | **Open (stale)** | **[#1106](https://github.com/netease-youdao/LobsterAI/pull/1106)** (open, stale) | One-line fix: pass stripped `delivery.to` to `primeConversationReplyRoute()` |
| **Medium** | [#1617](https://github.com/netease-youdao/LobsterAI/issues/1617) — Deleted skill remains in UI list; restart doesn't clear | Closed (stale) | No | Frontend state sync bug; backend deletes correctly |
| **Medium** | [#1589](https://github.com/netease-youdao/LobsterAI/issues/1589) — Session & scheduled task execution both fail (macOS, screenshots) | Closed (stale) | No | Broad execution failure; may relate to gateway/auth |
| **Low** | [#1112](https://github.com/netease-youdao/LobsterAI/issues/1112) — Table component has unexplained top/bottom whitespace | **Open (stale)** | No | Cosmetic UI bug; persists since March |

**Critical gap**: Two high-severity bugs with **ready fixes (#1106, #1108) stuck in stale limbo** for 5+ months.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|-----------------------------|-----------|
| **Hermes-agent as optional engine** | [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) | Low | Closed stale; no PR; engine plugin architecture may not support it yet |
| **Custom model addition (fix test failure)** | [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) | Medium | High user demand; blocked by validation logic — likely to be addressed if model abstraction improves |
| **System notifications for scheduled tasks** | [#1620](https://github.com/netease-youdao/LobsterAI/issues/1620) | **High** | Detailed spec (opt-in, permission prompt, test notification); aligns with recent onboarding/analytics push |
| **Video artifact sharing** | [#2593](https://github.com/netease-youdao/LobsterAI/pull/2593) | **Done** | Already merged — indicates **multimedia artifact support** is a priority |
| **First-run analytics funnel** | [#2591](https://github.com/netease-youdao/LobsterAI/pull/2591) | **Done** | Merged — product team investing in activation metrics |
| **Skill reinstall after local model switch** | [#1632](https://github.com/netease-youdao/LobsterAI/issues/1632) | Medium | Recurring theme; may require skill-model compatibility layer |

**Prediction**: Next version will likely include **scheduled task notifications (#1620)**, **custom model validation fixes**, and further **onboarding/analytics refinements**. Engine plugin architecture (#1614) remains speculative.

---

## 7. User Feedback Summary

| Pain Point | Frequency | User Quotes / Context |
|------------|-----------|------------------------|
| **Update instability** | High | "App crashes on first launch after update" ([#1587](https://github.com/netease-youdao/LobsterAI/issues/1587)) — full log provided |
| **Custom model integration broken** | High | "Add custom model → test fails" ([#1622](https://github.com/netease-youdao/LobsterAI/issues/1622)) — screenshot shows validation error |
| **Skill system breaks with local models** | Medium | "Switch to local model → all skills unusable; how to reinstall?" ([#1632](https://github.com/netease-youdao/LobsterAI/issues/1632)) |
| **Scheduled tasks & sessions fail silently** | Medium | "Both session and cron task execution fail" ([#1589](https://github.com/netease-youdao/LobsterAI/issues/1589)) — macOS, detailed screenshots |
| **UI state sync issues** | Medium | "Deleted skill still shows in list; restart doesn't help" ([#1617](https://github.com/netease-youdao/LobsterAI/issues/1617)) |
| **Localization gaps** | Low | "Switch to English → some strings remain Chinese" ([#1586](https://github.com/netease-youdao/LobsterAI/issues/1586)) |
| **DingTalk notification routing broken** | Low (but technical) | "`conversationId` prefix not stripped for reply route" ([#1105](https://github.com/netease-youdao/LobsterAI/issues/1105)) — developer-reported |

**Sentiment**: Frustration with **reliability after updates**, **model/skill flexibility**, and **background task execution**. Users provide logs/screenshots — engaged but blocked.

---

## 8. Backlog Watch — Stale Items Needing Maintainer Attention

| Item | Age | Type | Why It Matters |
|------|-----|------|----------------|
| [#1106](https://github.com/netease-youdao/LobsterAI/pull/1106) | 5 months | PR (open, stale) | **Fixes DingTalk scheduled task delivery** — one-line change, blocks enterprise IM integration |
| [#1108](https://github.com/netease-youdao/LobsterAI/pull/1108) | 5 months | PR (open, stale) | **Fixes cron job reentrancy + ghost events** — core scheduling reliability |
| [#1113](https://github.com/netease-youdao/LobsterAI/pull/1113) | 5 months | PR (open, stale) | **OpenClaw config sync flush on workload drain** — prevents config reload during active work |
| [#1105](https://github.com/netease-youdao/LobsterAI/issues/1105) | 5 months | Issue (open, stale) | Root cause for #1106; clear repro, fix ready |
| [#1107](https://github.com/netease-youdao/LobsterAI/issues/1107) | 5 months | Issue (open, stale) | Root cause for #1108; concurrency bug in task scheduler |
| [#1112](https://github.com/netease-youdao/LobsterAI/issues/1112) | 5 months | Issue (open, stale) | Table UI whitespace — low priority but visible polish gap |

**Action recommended**: **Review and merge #1106, #1108, #1113** — they are complete, targeted fixes for confirmed bugs with no apparent controversies. Their 5-month stagnation suggests **triage process gap**.

---

## Final Health Indicator

| Metric | Signal |
|--------|--------|
| **Release cadence** | ⚠️ None today; last release unknown |
| **Issue hygiene** | ⚠️ Bulk stale closure without resolution — masks true backlog |
| **PR throughput** | ✅ 6 merged today (mostly UX/analytics) |
| **Critical bug resolution** | ❌ 2 high-severity bugs with ready fixes unmerged for 5+ months |
| **Community responsiveness** | ⚠️ Stale items dominate; active issues low but unaddressed |
| **Feature velocity** | ✅ Video sharing, onboarding analytics, Windows fixes shipping |

**Verdict**: **Stabilizing but debt-heavy**. The project ships polish features while **core reliability fixes languish in stale limbo**. Immediate ROI: merge the three stale PRs (#1106, #1108, #1113) to unblock scheduling, IM, and config sync reliability.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-02

## 1. Today's Overview
Moltis showed focused maintenance activity over the last 24 hours with **2 issues resolved** and **2 PRs merged**, both addressing recently reported regressions in Docker networking and MCP server validation. No new releases were published. The project demonstrates healthy responsiveness: a critical Docker auth bypass bug (#1112, open since June) and a day-old `doctor` false-positive (#1250) were both diagnosed, fixed, and closed within hours. Two new PRs opened today signal ongoing work on reasoning-effort configuration and Docker deployment documentation.

## 2. Releases
**No new releases** in the last 24 hours. The latest published version remains `20260827.01` (referenced in #1250).

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Author | Status | Linked Issue | Impact |
|----|-------|--------|--------|--------------|--------|
| [#1249](https://github.com/moltis-org/moltis/pull/1249) | fix(auth): let Docker loopback-only deployments count as local | Saraswat123 | **Closed/Merged** | Fixes [#1112](https://github.com/moltis-org/moltis/issues/1112) | **Critical fix**: Restores `auth_disabled` functionality for Docker bridge-network deployments by treating Docker-internal source IPs as local. |
| [#1251](https://github.com/moltis-org/moltis/pull/1251) | Fix doctor validation for streamable HTTP MCP servers | penso | **Closed/Merged** | Fixes [#1250](https://github.com/moltis-org/moltis/issues/1250) | **Regression fix**: Updates `moltis doctor` to correctly validate `streamable-http` MCP transports (and aliases) instead of requiring a stdio command. |

**Net effect**: Two user-facing regressions—one blocking auth-less Docker use, the other breaking `doctor` for a supported MCP transport—are now resolved on main.

## 4. Community Hot Topics
No issues or PRs accumulated significant discussion (comments/reactions) in the last 24 hours. All four tracked items have **0 👍** and minimal comments. The two closed issues were resolved rapidly (same-day for #1250; ~3 months for #1112 after a fix was proposed), indicating maintainer attention but low community visibility.

## 5. Bugs & Stability — Reported Today

| Severity | Issue | Status | Fix PR | Notes |
|----------|-------|--------|--------|-------|
| **High** | [#1112](https://github.com/moltis-org/moltis/issues/1112) — `auth_disabled` ignored in Docker bridge networking | **Closed** | [#1249](https://github.com/moltis-org/moltis/pull/1249) | Root cause: `is_local_connection()` only matched raw loopback IP; Docker rewrites source to bridge IP. Fix expands locality check to Docker-internal subnets. |
| **Medium** | [#1250](https://github.com/moltis-org/moltis/issues/1250) — `doctor` flags valid `streamable-http` MCP server as missing command | **Closed** | [#1251](https://github.com/moltis-org/moltis/pull/1251) | Validation logic assumed stdio transport; now recognises canonical `streamable-http` + aliases and validates remote URLs. |

**No new bugs reported today.** Both regressions have merged fixes.

## 6. Feature Requests & Roadmap Signals

| PR / Issue | Signal | Likelihood for Next Release |
|------------|--------|------------------------------|
| [#1253](https://github.com/moltis-org/moltis/pull/1253) — `feat(reasoning): add max effort level` | Adds `max` to `ReasoningEffort` schema, `@reasoning-max` suffix, OpenAI Codex Responses API passthrough, and UI selector. | **High** — PR opened today, touches shared schema + multiple providers; likely targeted for next minor. |
| [#1252](https://github.com/moltis-org/moltis/pull/1252) — `docs(docker): document the bind-mount permission fix for fresh deploys` | Documents workaround for SQLite permission failure on fresh `docker compose up` (bind-mount UID/GID mismatch). Closes long-standing [#293](https://github.com/moltis-org/moltis/issues/293). | **High** — Pure docs fix for a known deployment pitfall; low risk, high user value. |

**Prediction**: Next release will likely include reasoning `max` effort level and the Docker permission docs. No breaking changes signaled.

## 7. User Feedback Summary
- **Docker deployers** hit two distinct pain points: auth bypass silently failing (#1112) and fresh deploy DB permission errors (#293, now documented in #1252). Both affect “zero-config” local usage.
- **MCP integrators** using `streamable-http` transport (e.g., remote MCP servers) were blocked by `doctor` false positives (#1250), now fixed.
- No positive/negative sentiment expressed in comments; resolution speed suggests maintainers prioritize Docker/UX regressions.

## 8. Backlog Watch — Items Needing Maintainer Attention
No stale items surfaced in today’s data. The two oldest tracked issues (#1112 from June, #293 referenced in #1252) now have merged fixes or docs. Monitor:
- **#1253** (reasoning `max` effort) — open < 24h; review for provider compatibility (clamping logic for non-OpenAI providers).
- **#1252** (Docker bind-mount docs) — open < 48h; verify documented fix matches actual compose file guidance.

---

*Data sourced from GitHub API (issues/PRs updated 2026-09-01 → 2026-09-02). All links point to moltis-org/moltis.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-02

## 1. Today's Overview
CoPaw (QwenPaw) shows **high velocity** with 23 issue updates and 40 PR updates in the last 24 hours. The project released **v2.2.0-beta.6** and is actively addressing a cluster of cron-scheduling bugs, ReMe memory initialization failures, and MCP/ACP integration issues. Test coverage expansion continues aggressively (+617 console unit tests, +314 integration tests merged today). The beta cycle remains tight with automated release-verification gates running per release.

## 2. Releases
### v2.2.0-beta.6 (2026-09-01)
**Changes:**
- **fix(desktop):** Bundle ReMe entry-point plugins ([#7458](https://github.com/agentscope-ai/QwenPaw/pull/7458))
- **test(console):** Expand console unit tests (+617 cases, +10.61pp statement coverage) ([#7452](https://github.com/agentscope-ai/QwenPaw/pull/7452))
- **test(integration):** Coverage sprint batch 6 — 314 cases across channels, CLI, mail, hub, renderer, harness adapter ([#7451](https://github.com/agentscope-ai/QwenPaw/pull/7451))

**Breaking Changes / Migration Notes:** None explicitly listed; this is a beta patch release focused on fixes and test hardening.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Type | Summary |
|----|------|---------|
| [#7465](https://github.com/agentscope-ai/QwenPaw/pull/7465) | **fix(memory)** | Normalize backend-specific embedding dimensions (DashScope config stale `use_dimensions` field) |
| [#7468](https://github.com/agentscope-ai/QwenPaw/pull/7468) | **fix(memory)** | Start ReMe *before* model configuration to avoid `ProviderError` on fresh installs |
| [#7432](https://github.com/agentscope-ai/QwenPaw/pull/7432) | **fix(config)** | Expand `~` in agent workspace dirs for trend aggregation |
| [#7329](https://github.com/agentscope-ai/QwenPaw/pull/7329) | **fix(mcp)** | Abort hung session RPCs on teardown; recover stale `list_tools` |
| [#7330](https://github.com/agentscope-ai/QwenPaw/pull/7330) | **feat(mcp)** | Add Streamable-HTTP dual-protocol client with legacy fallback |
| [#7472](https://github.com/agentscope-ai/QwenPaw/pull/7472) | **fix(governance)** | Prevent shell line-continuation bypasses in sensitive path checks |
| [#7452](https://github.com/agentscope-ai/QwenPaw/pull/7452) | **test(console)** | +617 vitest unit tests, +10.61pp statement coverage |
| [#7451](https://github.com/agentscope-ai/QwenPaw/pull/7451) | **test(integration)** | +314 integration cases (channels, CLI, mail, hub, renderer, harness) |
| [#7341](https://github.com/agentscope-ai/QwenPaw/pull/7341) | **test(integration)** | Coverage sprint batch 5 — 495 cases across endpoints, CLI, module internals |
| [#7260](https://github.com/agentscope-ai/QwenPaw/pull/7260) | **test(integration)** | Targeted expansion: workspace tree, MCP policy, plugin SDK (22 cases) |
| [#7246](https://github.com/agentscope-ai/QwenPaw/pull/7246) | **test(integration)** | 39 new test files, 238 cases + 2 flaky-case hardenings |

**Key Advancement:** Memory subsystem (ReMe) stabilization, MCP protocol modernization, and a massive test-coverage push are the dominant themes.

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) | Bug | 6 | 0 | **Sub-agent progress visibility**: Main agent only polls sub-agents when user explicitly asks “progress?” — users expect proactive status updates. |
| [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) | Bug | 4 | 0 | **Security**: Dangerous instructions evading guardrails (external reference to Zhihu article). |
| [#7483](https://github.com/agentscope-ai/QwenPaw/issues/7483) | Bug/Question | 2 | 0 | **Cron + shared session**: `share_session=true` reloads primary context each run → eventual failure; timed-out runs leave “running” state blocking later fires. |
| [#7480](https://github.com/agentscope-ai/QwenPaw/issues/7480) | Bug (cron) | 2 | 0 | **Post-upgrade phantom triggers** + cancelled tasks not writing inbox notifications + console auto-mark-read. |
| [#7476](https://github.com/agentscope-ai/QwenPaw/issues/7476) | Bug (cron) | 2 | 0 | **Duplicate scheduling** inside `misfire_grace` window → backup script runs twice. |
| [#7431](https://github.com/agentscope-ai/QwenPaw/issues/7431) | Bug (harness/codex) | 2 | 0 | **Non-streaming backends** (Volcano Ark + codex 0.144.x) return empty responses, usage=0. |
| [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) | Bug | 2 | 0 | **Custom provider load failure** after `max_tokens → max_output_length` migration (#7337). |

**Underlying Themes:**  
- **Cron reliability** is the top pain point (3 distinct issues today).  
- **Multi-agent observability** gap: users need push-based progress, not pull.  
- **Provider/model abstraction leaks** (custom providers, non-streaming harnesses).  

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) ReMe background job fails: `as_embedding:default` accessed before `start()` → silent memory indexing loss | Open | No (related: [#7468](https://github.com/agentscope-ai/QwenPaw/pull/7468) fixes startup order) |
| **High** | [#7481](https://github.com/agentscope-ai/QwenPaw/issues/7481) macOS StdIO MCP spawn re-enters `backend_guard` → kills active backend | Open | No |
| **High** | [#7476](https://github.com/agentscope-ai/QwenPaw/issues/7476) Cron duplicate trigger in `misfire_grace` → double backup execution | Open | No |
| **High** | [#7480](https://github.com/agentscope-ai/QwenPaw/issues/7480) Post-upgrade phantom cron runs + missing inbox notifications + auto-read | Open | No |
| **Medium** | [#7431](https://github.com/agentscope-ai/QwenPaw/issues/7431) Non-streaming codex harness → empty responses, usage=0 | Open | No |
| **Medium** | [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) Custom provider load fails after `max_tokens` migration | Open | No |
| **Medium** | [#7470](https://github.com/agentscope-ai/QwenPaw/issues/7470) MCP per-tool whitelist not enforced on agent runtime path | Open | No |
| **Medium** | [#7483](https://github.com/agentscope-ai/QwenPaw/issues/7483) Cron `share_session=true` reloads context each run → eventual timeout + stuck state | Open | No |
| **Low** | [#7471](https://github.com/agentscope-ai/QwenPaw/issues/7471) MCP clients page white container in dark mode | Open | Yes: [#7473](https://github.com/agentscope-ai/QwenPaw/pull/7473) |
| **Low** | [#7464](https://github.com/agentscope-ai/QwenPaw/issues/7464) DashScope Embedding index rebuild shows “unsaved” after save | Closed | Yes: [#7465](https://github.com/agentscope-ai/QwenPaw/pull/7465) |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **A2A protocol support** (alongside MCP/ACP) | [#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484) | Medium — architecture docs mention unified Driver; only MCP implemented so far |
| **Disable all built-in cloud providers** (Kilo Code, opencode currently non-disablable) | [#7455](https://github.com/agentscope-ai/QwenPaw/issues/7455) | High — simple UI parity fix, closed but indicates demand |
| **Discard misspelled channel commands** (e.g., `/mew` → `/new`) instead of forwarding to agent | [#7479](https://github.com/agentscope-ai/QwenPaw/issues/7479) | Medium — UX polish |
| **PowerContext long-term memory backend** (pluggable) | [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | High — PR open, under review, implements `BaseMemoryManager` |
| **Workspace-scoped skill preload** (opt-in for trusted/frequent skills) | [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | Medium — PR open, under review, follows Claude Code pattern |
| **Import flow from Codex/Qoder** (instructions, skills, plugins, projects) | [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | Medium — first-time contributor PR, open |

## 7. User Feedback Summary
**Pain Points:**
- **Cron unreliability** dominates: phantom post-upgrade runs, duplicate triggers, stuck states, missing notifications. Users on Windows + console channel with multiple cron jobs are most affected.
- **Multi-agent opacity**: Users must manually poll for sub-agent status; no push/proactive updates.
- **Provider friction**: Custom provider config breaks on migration; non-streaming third-party gateways return empty responses silently.
- **Memory initialization**: Fresh installs fail ReMe startup due to missing active model.

**Positive Signals:**
- Test coverage sprints are massive and consistent (1,400+ new cases in last few days).
- Release verification gates are automated and enforced per platform.
- Community contributes fixes quickly (dark-mode MCP fix [#7473](https://github.com/agentscope-ai/QwenPaw/pull/7473) filed same day as issue [#7471](https://github.com/agentscope-ai/QwenPaw/issues/7471)).

## 8. Backlog Watch (Stale/Important Items Needing Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003) | 20 days | **ViBo memory proposal** — external project offering 97.5% token reduction; maintainers haven’t engaged. Could inform ReMe roadmap. |
| [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | 16 days | **PowerContext memory backend** — full `BaseMemoryManager` impl, under review but no maintainer comment recently. |
| [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | 13 days | **Skill preload** — first-time contributor, under review, aligns with Claude Code patterns. |
| [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | 20 days | **Import from Codex/Qoder** — high user-value migration feature, first-time contributor. |
| [#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401) | 4 days | **Windows ACP agent stall** during bootstrap — blocks Windows ACP users; under review but no movement. |

---

**Health Indicators:** 🟢 **High velocity**, 🟢 **Automated release gates**, 🟢 **Test coverage surging**, 🟡 **Cron/memory bugs clustering**, 🟡 **Several contributor PRs awaiting review**.  
**Next Watch:** v2.2.0-beta.7 (PR [#7485](https://github.com/agentscope-ai/QwenPaw/pull/7485) opened today) — likely to include cron duplicate-trigger fix and ReMe startup ordering.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-09-02

## 1. Today's Overview
ZeptoClaw shows minimal human-driven activity in the last 24 hours, with zero new issues, zero releases, and only automated Dependabot pull requests for Rust Docker base-image updates. One dependency bump (to Rust 1.97) was merged, while a newer bump (to Rust 1.98) remains open awaiting CI validation. The project appears to be in a maintenance-only phase with no active feature development or community-reported bugs today.

## 2. Releases
**No new releases** published today or in the recent period covered by this data.

## 3. Project Progress
| PR | Status | Description | Link |
|----|--------|-------------|------|
| #649 | **Merged/Closed** | `chore(deps)`: Bump Rust Docker base image from `1.95-slim-trixie` to `1.97-slim-trixie`. Routine dependency maintenance. | [qhkm/zeptoclaw#649](https://github.com/qhkm/zeptoclaw/pull/649) |
| #658 | **Open** | `chore(deps)`: Bump Rust Docker base image from `1.95-slim-trixie` to `1.98-slim-trixie`. Awaiting CI pass; Dependabot notes missing publication date for cooldown logic. | [qhkm/zeptoclaw#658](https://github.com/qhkm/zeptoclaw/pull/658) |

*No feature PRs or bug-fix PRs were merged or advanced today.*

## 4. Community Hot Topics
**None.** Zero human-authored issues or PRs were created/updated in the last 24h. The only activity is the two automated Dependabot PRs above, which have 0 comments and 0 reactions.

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.** The issue tracker shows zero updates in the last 24h.

## 6. Feature Requests & Roadmap Signals
**No new feature requests** surfaced today. The absence of community issues makes it impossible to infer near-term roadmap direction from current signals.

## 7. User Feedback Summary
**No direct user feedback** (issues, discussions, PR reviews) captured in the last 24h. The project’s current interaction surface is limited to automated dependency management.

## 8. Backlog Watch
| Item | Type | Age | Concern | Link |
|------|------|-----|---------|------|
| *None identified in last 24h data* | — | — | No long-unanswered issues or stale PRs appear in today’s snapshot. Historical backlog analysis would require a wider time window. | — |

---

**Health Indicator**: 🟡 **Low Activity / Maintenance Mode**  
Automated dependency updates are being processed, but no human contributor or user engagement is visible today. Consider triaging the open Dependabot PR (#658) and monitoring for any CI failures on the Rust 1.98 upgrade.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-02

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 61 total items updated in the last 24 hours (11 issues, 50 PRs). The project is in an active pre-release stabilization phase for v0.8.5 (tracker #9459), with no new releases today. Activity is heavily weighted toward **runtime hardening, security policy fixes, and architectural RFCs** — notably append-only session history (#10526), delegate progress visibility (#10531), and Anthropic extended-thinking support (#10529, #10530). A critical security bug (#10165) where independent delegates bypass `block_high_risk_commands` remains open and in-progress. The maintainer decision queue (#8692) continues to track RFCs awaiting code-owner attention.

## 2. Releases

**No new releases today.** The v0.8.5 stabilization line (#9459) froze intake on August 4 and targets weekly cuts through August 30, 2026.

## 3. Project Progress

**1 PR merged/closed** in the last 24 hours (not detailed in the data). The 49 open PRs show concentrated effort on:

| Area | PRs | Key Work |
|------|-----|----------|
| **Security/Config** | #9678, #10248, #10482, #10521 | Harden Git shell policy; canonical principals & grant resolution; cost cache alignment; honor `ZEROCLAW_CONFIG_DIR` |
| **Runtime/Channels** | #9229, #9241, #9871, #9873, #10380, #10464, #10467, #10480 | Ctrl+C state machine; Teams channel; Matrix homeserver discovery; JSONL session validation; ACP transcript restore; PowerShell module path; WS transport gating; provider image quarantine |
| **CI/Infra** | #10094, #10441, #10514, #10516 | Required PostgreSQL memory tests; CodeQL routing to Blacksmith; reject unrelated PR history; CLI/hardware label alignment |
| **Config/Providers** | #9338, #10137, #9561 | Crusoe Managed Inference provider; restore star history chart; remove filename labels from personality prompt |

## 4. Community Hot Topics

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Issue (tracker) | 14 | **Maintainer decision queue** — centralized tracking for RFCs, design issues, release-policy questions needing code-owner rulings |
| [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) | Issue (feature) | 5 | **Gateway WebSocket decoupling** — run agent turns in background, survive client disconnect/reconnect (high priority, in-progress) |
| [#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) | Issue (security bug) | 5 | **Delegate bypasses `block_high_risk_commands`** — independent delegates ignore own risk profile (S0 severity) |
| [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | Issue (RFC) | 2 | **Append-only session event history** — deterministic replay, derived agent streams (needs maintainer review) |
| [#9241](https://github.com/zeroclaw-labs/zeroclaw/pull/9241) | PR (enhancement) | — | **Microsoft Teams channel** — Bot Framework integration (XL size, needs author action) |

**Underlying themes:** Operability (WebSocket resilience), security hardening (delegate sandbox), architectural modernization (event-sourced history), and enterprise channel expansion.

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **S0 — Security/Data Loss** | [#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165): Independent delegate bypasses `block_high_risk_commands` on its own risk profile | Open, in-progress | None linked |
| **S2 — Degraded Behavior** | [#10532](https://github.com/zeroclaw-labs/zeroclaw/issues/10532): Degraded-config remediation invokes different binary than running daemon | Open, new | None |
| **Runtime/Config** | [#10534](https://github.com/zeroclaw-labs/zeroclaw/issues/10534): Bounded delegates silently strip `delegate` tool, ignoring `delegation_policy/max_delegation_depth` | Open, new | None |
| **Runtime/Config** | [#10533](https://github.com/zeroclaw-labs/zeroclaw/issues/10533): `model_routing_config` rejects valid `custom.*` provider slots | Open, new | None |
| **Medium** | [#9871](https://github.com/zeroclaw-labs/zeroclaw/pull/9871): Matrix homeserver resolution by server name or URL | Open, needs author action | PR #9871 |
| **Medium** | [#9561](https://github.com/zeroclaw-labs/zeroclaw/pull/9561): Personality prompt renders redundant filename labels | Open, stale-candidate | PR #9561 |
| **Medium** | [#9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678): Harden Git shell policy arguments | Open, needs maintainer review | PR #9678 |
| **Medium** | [#10248](https://github.com/zeroclaw-labs/zeroclaw/pull/10248): Canonical principals & shared grant resolution | Open, needs author action | PR #10248 |
| **Medium** | [#10464](https://github.com/zeroclaw-labs/zeroclaw/pull/10464): Preserve PowerShell `PSModulePath` | Open, needs author action | PR #10464 |

**Note:** Three new bugs filed today (#10532, #10533, #10534) with no fix PRs yet. The S0 delegate bypass (#10165) is the highest-priority open security issue.

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Priority | Likelihood for v0.8.5+ |
|---------|-------|----------|------------------------|
| **Append-only session event history & deterministic replay** | [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | P2, RFC | High — architectural foundation, needs maintainer review |
| **Delegate sub-agent progress visibility (tool receipts, partial output)** | [#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531) | P2 | High — filed today by core contributor, clear UX gap |
| **Anthropic extended-thinking params via OpenAI-compatible gateways** | [#10530](https://github.com/zeroclaw-labs/zeroclaw/issues/10530) | P2 | High — deployment blocker for LiteLLM/TrueFoundry proxies |
| **Anthropic thinking.display progress updates (beta)** | [#10529](https://github.com/zeroclaw-labs/zeroclaw/issues/10529) | P2 | Medium — beta feature, improves long-turn UX |
| **Gateway WebSocket lifetime decoupled from agent turn** | [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) | P1, in-progress | High — active work, critical for web chat reliability |
| **Microsoft Teams (Bot Framework) channel** | [#9241](https://github.com/zeroclaw-labs/zeroclaw/pull/9241) | XL | Medium — large PR, needs author action |
| **Crusoe Managed Inference as first-class provider** | [#9338](https://github.com/zeroclaw-labs/zeroclaw/pull/9338) | S, blocked | Low — blocked, do-not-merge |

**Prediction:** The next version will likely include WebSocket decoupling (#7759), delegate progress visibility (#10531), and Anthropic extended-thinking passthrough (#10530). The append-only history RFC (#10526) is foundational but may land in a subsequent minor release.

## 7. User Feedback Summary

| Pain Point | Evidence |
|------------|----------|
| **WebSocket disconnects kill in-flight agent turns** | #7759 — "client disconnects should not cancel in-flight turns" |
| **No visibility into delegated sub-agent progress** | #10531 — "parent agent has no visibility until sub-agent finishes" |
| **Extended thinking unavailable via OpenAI-compatible gateways** | #10530 — "silently unavailable on LiteLLM/TrueFoundry/org proxies" |
| **Claude Fable 5.1 emits fewer user-facing updates** | #10529 — requires explicit progress-update prompting |
| **Delegate sandbox bypasses high-risk command blocks** | #10165 — S0 security risk, independent delegates ignore `block_high_risk_commands` |
| **Config migration suggests wrong binary** | #10532 — daemon launched from one exe, `zeroclaw` on PATH resolves to another |
| **Bounded delegates lose delegation capability unexpectedly** | #10534 — `delegate` tool stripped regardless of `max_delegation_depth` config |
| **Valid `custom.*` provider slots rejected by tooling** | #10533 — config schema supports it, `model_routing_config` tool does not |

**Satisfaction signals:** Active RFC process (#8692, #10526), rapid iteration on delegate UX (#10531), and enterprise channel investment (#9241) suggest engaged power users and enterprise adopters.

## 8. Backlog Watch — Needs Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Maintainer decision queue | 60 days | Central coordination point for all RFCs/design issues — 14 comments, still active |
| [#9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) Harden Git shell policy | 31 days | Security hardening, XL size, needs maintainer review |
| [#10248](https://github.com/zeroclaw-labs/zeroclaw/pull/10248) Canonical principals & grant resolution | 11 days | Auth RFC #7141 Rev 8 implementation, needs author action |
| [#10094](https://github.com/zeroclaw-labs/zeroclaw/pull/10094) Require PostgreSQL memory tests | 15 days | CI gate for feature-gated backend, needs maintainer review |
| [#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) Quarantine provider-rejected images | 3 days | High-risk fix for Anthropic/compatible image handling, needs author action |
| [#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) Delegate bypasses `block_high_risk_commands` | 13 days | **S0 security bug**, in-progress but no fix PR visible |
| [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) Append-only session history RFC | 1 day | Architectural direction, needs maintainer review, high risk |

---

**Project Health Indicator:** 🟢 **Healthy velocity, elevated security focus** — High PR throughput, active RFC process, and critical security bug tracking indicate a maturing project investing in reliability and enterprise readiness. The three new bugs filed today (#10532–#10534) suggest regression testing gaps in delegate/config tooling that should be addressed before v0.8.5 cut.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*