# OpenClaw Ecosystem Digest 2026-08-12

> Issues: 203 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-12 02:30 UTC

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

# OpenClaw Project Digest — 2026-08-12

## 1. Today's Overview
OpenClaw shows **extremely high velocity** with 203 issues and 500 PRs updated in the last 24 hours (159 open issues, 280 open PRs, 220 merged/closed PRs). The project is in active maintenance mode with heavy focus on session-state reliability, message delivery guarantees, and gateway/plugin compatibility. No new releases were cut today, but the merge rate suggests a release candidate may be imminent. Critical P1 bugs around silent reply failures, subagent persistence, and provider auth drift dominate maintainer attention.

## 2. Releases
**No new releases today.** The latest stable channel remains 2026.7.1-2 (per issue #114154). With 220 PRs merged/closed in 24h, a patch release (likely 2026.8.x) is probable within days.

## 3. Project Progress — Key Merged/Closed PRs Today
| PR | Scope | Impact |
|----|-------|--------|
| [#119528](https://github.com/openclaw/openclaw/pull/119528) | `fix(agents): timestamp recovered Claude CLI history` | **Merged (automerge)** — Fixes #94679; preserves timestamps when Claude CLI session receives bounded OpenClaw history after native session invalidation. |
| [#117321](https://github.com/openclaw/openclaw/pull/117321) | `fix(agents): reject malformed base64 MCP App resource blobs` | **Closed** — Validates MCP App `blob` payloads as base64 before decode, preventing corrupted HTML retention. |
| [#122380](https://github.com/openclaw/openclaw/pull/122380) | `fix: simplify and harden session companion grounding` | **Closed** — Restores canonical reset-only transcript visibility; fails closed on malformed reset state. |
| [#122382](https://github.com/openclaw/openclaw/pull/122382) | `chore(ui): refresh control ui locales` | **Merged (bot)** — Keeps Control UI locales synchronized via protected-branch workflow. |
| [#119525](https://github.com/openclaw/openclaw/pull/119525) | `fix(memory): allow retry after search timeout` | **Automerge armed** — Fixes 60s provider cooldown blocking retries after 15s `memory_search` timeout (related #93199). |

> **Pattern:** Today’s merges cluster around **session recovery**, **MCP/blob validation**, **memory-core resilience**, and **UI localization** — all stability hardening rather than new features.

## 4. Community Hot Topics — Most Discussed Issues/PRs

| Item | Comments | Core Need |
|------|----------|-----------|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) **Silent reply failures recurring after #116277 closed** | 69 | **Regression**: Monitoring cron still logs silent-reply failures (latest 2026-08-09). Users see no queued reply payload — message loss in production. |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) **Realtime voice retains unbounded provider/consult state** | 64 | **Resource leak**: Voice sessions accumulate superseded consult work, large provider frames, pre-ready audio under bursty/stall conditions. P1, needs product decision. |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) **Text between tool calls leaks to messaging channels** | 46 | **UX/Security**: Internal processing output (errors, narration) routes to Slack/iMessage as visible messages. Open since Feb 2026 — needs routing isolation. |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) **Memory Trust Tagging by Source** | 43 | **Security**: Tag memory entries by trust level (user cmd, web scrape, 3rd-party skill) to prevent memory poisoning. Long-standing enhancement. |
| [#92201](https://github.com/openclaw/openclaw/issues/92201) **Embedded runner: Anthropic thinking signatures invalid on replay** | 23 | **Closed but discussed**: Recovery wrapper never fires because error text is genericized. Points to error-surface design gap. |

**PR Hotspots** (by maintainer tags):
- [#120559](https://github.com/openclaw/openclaw/pull/120559) `fix(skills): cancel experience review on stop` — XL, P1, **needs proof**, session-state merge-risk
- [#120768](https://github.com/openclaw/openclaw/pull/120768) `feat(pairing): one-paste device pairing via oc-pair setup links` — XL, P1, **showcase feature**, ready for maintainer look
- [#82572](https://github.com/openclaw/openclaw/pull/82572) `feat(queue): persist followup queues across gateway restarts` — XL, P1, **waiting on author**, message-delivery merge-risk

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **P1 – Message Loss** | [#121058](https://github.com/openclaw/openclaw/issues/121058) Silent reply failures recurring | Open | ❌ (regression of #116277) |
| **P1 – Session State** | [#116201](https://github.com/openclaw/openclaw/issues/116201) Voice unbounded state retention | Open | ❌ (needs product decision) |
| **P1 – Message Loss** | [#47975](https://github.com/openclaw/openclaw/issues/47975) Subagent sessions persist, main unresponsive | Open | ❌ |
| **P1 – Message Loss** | [#97983](https://github.com/openclaw/openclaw/issues/97983) iOS/WebChat messages append but don’t trigger replies | Open | ❌ |
| **P1 – Message Loss** | [#114020](https://github.com/openclaw/openclaw/issues/114020) Feishu/Telegram dispatch fails: `runDispatchLifecycle` missing | Open | ❌ |
| **P1 – Auth/Provider** | [#74986](https://github.com/openclaw/openclaw/issues/74986) `openclaw infer` hangs 100% CPU, zero network I/O | Open | ❌ |
| **P1 – Session State** | [#112668](https://github.com/openclaw/openclaw/issues/112668) `sessions_yield` abort-settle drops subagent announce | Open | ❌ |
| **P2 – UX/Message** | [#25592](https://github.com/openclaw/openclaw/issues/25592) Tool-call interstitial text leaks to channels | Open | ❌ (linked PR open) |
| **P2 – Session State** | [#90781](https://github.com/openclaw/openclaw/issues/90781) `memory-core` narrative gen produces no text, writes fallback diaries | Open | ❌ |
| **P2 – Auth/Perf** | [#80131](https://github.com/openclaw/openclaw/issues/80131) Per-request auth (5.5s) + tool bundling (8.9s) dominate TTFT | Open | ❌ |

> **Fix PRs exist for:** [#97295](https://github.com/openclaw/openclaw/pull/97295) (Feishu token retry), [#119525](https://github.com/openclaw/openclaw/pull/119525) (memory search retry), [#122383](https://github.com/openclaw/openclaw/pull/122383) (Feishu silent replies after rejected cards), [#122384](https://github.com/openclaw/openclaw/pull/122384) (retry inbound on debounced dispatch fail).

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|-----------------------------|
| [#57425](https://github.com/openclaw/openclaw/issues/57425) **Graceful Gateway Restart with Session Recovery** | 4 👍, P2, active discussion | **High** — #82572 (persist followup queues) already merged; this is the logical next step. |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) **Reduce tool schema token overhead (~3,500 tok/session)** | 9 comments, P2, diamond lobster | **Medium** — Architectural; requires schema lazy-loading or per-session tool filtering. |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) **Per-agent cost budget enforcement at gateway** | 21 comments, P2, linked PR open | **Medium** — Cost governance is a stated priority; gateway-level enforcement fits. |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) **Memory Trust Tagging by Source** | 43 comments, security-focused | **Low-Medium** — Needs schema migration; may wait for memory-core v2. |
| [#39343](https://github.com/openclaw/openclaw/issues/39343) **Image batching / media group buffering at gateway** | 5 comments, P2 | **Medium** — UX pain point for Telegram/LINE albums; gateway layer is correct place. |
| [#72741](https://github.com/openclaw/openclaw/issues/72741) **Standard Interface for External Security/Guardrail Checks** | 10 comments, security label | **Medium** — Enterprise adoption driver; aligns with #107158 (AI safety taxonomy). |
| [#120768](https://github.com/openclaw/openclaw/pull/120768) **One-paste device pairing (oc-pair setup links)** | Showcase feature, ready for maintainer | **Very High** — PR is XL, P1, milestone 3 deliverable; likely in next minor. |

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Silent message loss** | #121058 (69 comments), #97983 (9 comments, 2 👍), #112668 | Users send messages; agent replies never arrive. No error, no retry. Production blocker. |
| **Subagent zombies** | #47975, #112668, #106704 | Subagents complete but don’t die; main session freezes. Requires manual kill. |
| **Interstitial text pollution** | #25592 (46 comments, 1 👍) | Internal “thinking”/error text appears in Slack/iMessage/Feishu as user-visible messages. |
| **Gateway restart = work loss** | #57425, #82572 (PR), #98435 (MCP loopback not reconnecting) | Any config change or crash kills in-flight sessions; no recovery. |
| **Auth drift silently breaks channels** | #83337, #91126 (closed but discussed) | Core upgrade → plugin version mismatch → channel disabled with no warning. |
| **Tool schema token tax** | #14785 (9 comments) | Every session pays 3,500 tokens for tools it may never use. |
| **Voice resource leaks** | #116201 (64 comments) | Long voice sessions OOM or stall due to unbounded frame/state retention. |
| **iOS/WebChat delivery broken** | #97983, #105342 (exec outputs as images) | Mobile users get degraded experience vs CLI/desktop. |

**Sentiment:** Frustration with **reliability regressions** (silent failures, message loss) outweighs feature requests. Users want **hardened foundations** before new capabilities.

## 8. Backlog Watch — Stale High-Value Items Needing Maintainer Attention

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) Text between tool calls leaks to channels | **6 months** (Feb 24) | UX + security; affects all messaging channels. | Needs routing redesign; `clawsweeper:linked-pr-open` but stalled. |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source | **6 months** (Feb 3) | Critical for memory poisoning prevention; enterprise requirement. | `needs-security-review`, `needs-product-decision` — no movement. |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) Reduce tool schema token overhead | **6 months** (Feb 12) | 3,500 tokens/session fixed cost; major cost/latency lever. | `needs-product-decision` — architectural scope. |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) Subagent sessions persist, main unresponsive | **5 months** (Mar 16) | Core multi-agent reliability; blocks complex workflows. | No fix PR; needs session lifecycle audit. |
| [#57425](https://github.com/openclaw/openclaw/issues/57425) Graceful Gateway Restart with Session Recovery | **4.5 months** (Mar 30) | Foundation for HA deployments; #82572 is partial fix. | Requires coordinated gateway/plugin/session changes. |
| [#39811](https://github.com/openclaw/openclaw/issues/39811) Model config accepts unvalidated names | **5 months** (Mar 8) | Silent misconfiguration → runtime failures. | `linked-pr-open` but not merged; validation UX debate. |
| [#98435](https://github.com/openclaw/openclaw/issues/98435) MCP loopback no auto-reconnect after gateway restart | **1.5 months** (Jul 1) | Breaks CLI↔gateway after any restart; `recovered=1` is misleading. | Transport-layer handshake missing; needs gateway+CLI changes. |

---

**Health Assessment:** 🟡 **Elevated Risk** — Velocity is high but concentrated on **stability firefighting** (P1 message/session bugs). Feature work is gated by unresolved architectural decisions (tool schema, memory trust, gateway restart). The 220 merged PRs/day shows throughput, but the **open P1 count (15+) with no fix PRs** indicates a growing reliability debt. Next release should be a **stability patch** (2026.8.x) before new features.

*Data sourced from GitHub API snapshot 2026-08-12; all links point to openclaw/openclaw.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-08-12)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **bimodal maturity**: a cluster of 4–5 projects in **active stabilization or pre-release consolidation** (OpenClaw, NanoBot, CoPaw, IronClaw, ZeroClaw) with daily merge rates of 20–220 PRs, and a longer tail of smaller or younger projects (PicoClaw, NanoClaw, Moltis, LobsterAI) operating at lower velocity but shipping targeted fixes. **No project cut a stable release today**, though CoPaw and LobsterAI published patch/beta releases yesterday. The dominant theme across the ecosystem is **reliability hardening**—message delivery guarantees, session-state recovery, gateway/plugin compatibility, and security sandboxing—rather than new capability launches. Community friction centers on **silent data loss** (message drops, session corruption), **configuration trust** (silent config dead-zones, auth drift), and **cross-platform stability** (Windows/macOS gateway/plugin issues).

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed PRs | Open PRs | Latest Release | Health Score* |
|---------|---------------------|-------------------|-------------------|----------|----------------|---------------|
| **OpenClaw** | 203 | 500 | 220 | 280 | 2026.7.1-2 (stable) | 🟡 Elevated Risk |
| **NanoBot** | 2 | 119 | 119 | 22 | Pre-release | 🟡 Stabilizing |
| **Hermes Agent** | 13 | 50 | 7 | ~43 | Pre-v0.17.x | 🟡 Technical Debt |
| **PicoClaw** | 3 | 6 | 0 | 6 | v0.3.1 | 🟢 Stable / Review-Bound |
| **NanoClaw** | 1 | 7 | 3 | 4 | None recent | 🟡 Caution |
| **NullClaw** | 0 | 0 | 0 | 0 | — | ⚪ Dormant |
| **IronClaw** | 11 | 50 | 25 | 25 | None recent | 🟢 Active Multi-Front |
| **LobsterAI** | 4 | 11 | 7 | 4 | **v2026.8.11** (patch) | 🟢 Responsive |
| **Moltis** | 0 | 0 | 0 | 1 | None recent | 🟡 Heads-Down |
| **CoPaw (QwenPaw)** | 16 | 49 | 26 | 23 | **v2.1.0-beta.3** | 🟢 High-Velocity Beta |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | — | ⚪ Dormant |
| **ZeroClaw** | 3 | 50 | 1 | 49 | None recent | 🟡 Consolidation |

*Health Score: 🟢 Healthy velocity & merging | 🟡 Active but bottlenecked (review, P1 backlog, or process) | ⚪ No recent activity*

---

## 3. OpenClaw's Position

**Advantages vs. Peers**
- **Scale & Throughput**: 500 PR updates/24h dwarfs all others (next: ZeroClaw/IronClaw at 50). 220 merges/day indicates a **mature, high-capacity maintainer team**.
- **Ecosystem Centrality**: Referenced as upstream by NanoClaw, PicoClaw, LobsterAI, and ZeroClaw (cherry-picks). Acts as **de facto reference implementation** for gateway/plugin architecture.
- **Production Battle-Testing**: 15+ open P1 bugs with detailed production impact reports (message loss, subagent zombies, auth drift) reflect **real-world deployment at scale**.

**Technical Approach Differences**
- **Gateway-Centric Architecture**: Explicit gateway process managing multi-channel dispatch, session recovery, and plugin lifecycle—unlike NanoBot/CoPaw’s more monolithic desktop/app model.
- **Session-State as First-Class Citizen**: Heavy investment in durable session identity, companion grounding, and subagent lifecycle (PRs #119528, #122380, #120559).
- **Multi-Provider Abstraction**: `openclaw infer` CLI, provider auth drift detection, and MCP server integration as core primitives.

**Community Size**
- **Largest contributor base** implied by PR volume and automerge usage. Issue discussions show 69 comments on silent-reply regression (#121058), 64 on voice resource leaks (#116201)—indicating **active production users**, not just hobbyists.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Message Delivery Guarantees** | OpenClaw (#121058, #97983, #114020), NanoClaw (#3226), CoPaw (#6918), IronClaw (#7477 unified channel) | Deduplication, dead-letter queues, inbound retry, cross-restart persistence |
| **Session/State Recovery** | OpenClaw (#119528, #57425), Hermes (#84109), IronClaw (#7470, #7503), ZeroClaw (#9748) | Gateway restart survival, lineage tracking, context compaction ratios |
| **Security Sandbox & Secrets** | NanoBot (#4784, #4783, #5306), ZeroClaw (#8713 SSRF, #9194 KeySource), IronClaw (#7509 redaction), CoPaw (#6916 plugin cron injection) | Provider key isolation, subprocess env sanitization, tool allow-lists, secret rotation |
| **Plugin/Channel Lifecycle** | OpenClaw (#114020 Feishu/Telegram, #98435 MCP reconnect), IronClaw (#7477 unified, #7464 Telegram linked-device), CoPaw (#6907 custom gateways), PicoClaw (#3328 LINE webhook) | Hot-reload, auth drift detection, graceful degradation, standard adapter interface |
| **Resource/Token Efficiency** | OpenClaw (#14785 tool schema 3.5k tokens), Hermes (#67440 blast-radius review), ZeroClaw (#9535 context compaction ratio), LobsterAI (#2475 per-model thinking) | Lazy tool loading, per-session budgets, ratio-based compaction, thinking-level persistence |
| **Windows/macOS Desktop Reliability** | LobsterAI (#1183 gateway loop), NanoBot (#5341 PowerShell, #5346 orphan processes), CoPaw (#6697 PYTHONHOME, #6877 geometry), PicoClaw (#3314 shell allow-patterns) | Gateway startup, symlink/junction handling, process tree cleanup, env isolation |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | IronClaw | CoPaw | LobsterAI | ZeroClaw |
|-----------|----------|---------|--------------|----------|-------|-----------|----------|
| **Primary Form Factor** | Headless gateway + CLI | Desktop app (Tauri) + Web UI | CLI + Kanban + Plugins | Web-first + Multi-channel | Desktop (Tauri) + Mobile | Desktop (Electron) + Cowork | Headless runtime + PWA |
| **Target User** | Platform builders, self-hosters | Power users, developers | Researchers, multi-agent orchestrators | Product teams, NEAR ecosystem | Chinese dev community, IM bot operators | Chinese enterprise, cowork scenarios | Security-first deployers, fork maintainers |
| **Architecture** | Gateway-centric, plugin SDK | Monolithic app, built-in providers | Modular: core + plugins + skills | Profile-agnostic Reborn storage, unified channels | Session-centric, marketplace apps | OpenClaw-based, cowork UI layer | Hardened fork, security primitives |
| **Multi-Agent** | Subagent spawning, session yield | Single agent + skills | Kanban + skill orchestration | Automation runs (unattended) | Inter-agent messaging (buggy) | Cowork: multi-agent UI | SOP-driven, daemon-managed |
| **Channel Strategy** | 10+ via gateway plugins | Limited (Web, CLI) | WeChat, Feishu, Telegram, Email | Unified ChannelAdapter (Web/Slack/Telegram) | 5 IM + custom gateways | OpenClaw gateway + IM | WhatsApp Web, ACP, custom |
| **Extensibility** | MCP servers, skills, plugins | Skills, providers, Web UI apps | Skills, MCP, guardrails | Agent Plugins 1.0, ACP server | Marketplace (apps/plugins/skills) | OpenClaw skills + custom UI | FileDownload SSRF gate, KeySource |
| **Governance** | BDFL + automerge, high velocity | HKUDS lab, fast merges | NousResearch, RFC-lite | NEAR AI, design docs + XL PRs | AgentScope, beta cadence | NetEase Youdao, patch releases | RFC process reform underway |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Tier 1: High-Velocity Stabilization** | OpenClaw, NanoBot, CoPaw | 50–500 PR updates/day; daily/weekly releases; P1 bug backlogs being actively triaged; production users filing detailed regressions. |
| **Tier 2: Active Multi-Front Development** | IronClaw, ZeroClaw, Hermes Agent | 50 PR updates/day across large architectural PRs (Reborn storage, unified channels, RFC governance); merge rate lower (14–50%) due to XL PR review complexity. |
| **Tier 3: Responsive Maintenance** | LobsterAI, NanoClaw | 7–11 PR updates/day; regular patch releases; stale triage active; review bandwidth is visible bottleneck (PicoClaw, NanoClaw). |
| **Tier 4: Heads-Down / Pre-Release** | Moltis, PicoClaw | Single large PR in review; zero merges; awaiting architectural milestone (CalDAV, Agent Plugins 1.0). |
| **Tier 5: Dormant** | NullClaw, ZeptoClaw | No 24h activity. |

**Rapidly Iterating**: CoPaw (daily betas), NanoBot (119 merges/day), OpenClaw (220 merges/day).  
**Stabilizing**: LobsterAI (patch shipped), NanoClaw (remote MCP complete), IronClaw (process/thread fixes landed).

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence Across Projects | Strategic Value |
|-------|--------------------------|-----------------|
| **Gateway/Channel Abstraction Standardization** | IronClaw `ChannelAdapter`, OpenClaw gateway plugins, CoPaw custom endpoints, NanoClaw Agent Plugins 1.0 | **High**: Build once, deploy to Slack/Telegram/Feishu/Web/ACP. Invest in adapter SDKs. |
| **Session Durability > New Features** | 7/12 projects have P1 session-recovery bugs; OpenClaw #57425, Hermes #84109, IronClaw #7470, ZeroClaw #9748 | **Critical**: Users treat session loss as data loss. Design for graceful restart from day one. |
| **Security as Default, Not Afterthought** | NanoBot env leaks fixed, ZeroClaw SSRF/KeySource, IronClaw redaction, CoPaw plugin cron injection | **High**: Sandbox by default, capability-based tool allow-lists, secret rotation primitives are table stakes. |
| **Local-First / Offline-Capable Data** | Moltis CalDAV connectors, ZeroClaw SOP daemon, OpenClaw memory trust tagging, Hermes FTS5 corruption | **Medium**: Users want calendar/files/notes sync without cloud dependency. Local vector/FT search + durable snapshots. |
| **Ratio-Based Context Management** | ZeroClaw `context_compact_ratio`, OpenClaw tool schema tax, Hermes blast-radius review | **Emerging**: Absolute token budgets break across models. Ratio/percentage budgets + priority tagging win. |
| **Desktop ⇄ Headless Convergence** | LobsterAI/OpenClaw shared core, CoPaw/NanoBot Tauri apps, IronClaw WebUI + PWA | **High**: Same agent core, multiple frontends. Invest in headless core + thin clients. |
| **MCP as Universal Tool Protocol** | OpenClaw, NanoBot, NanoClaw, CoPaw, PicoClaw, ZeroClaw all integrating MCP servers | **Standardized**: MCP over HTTP (NanoClaw #3092) enables hosted toolchains. Build MCP-first skills. |

---

## Summary for Decision-Makers

- **OpenClaw** remains the **ecosystem anchor**—highest velocity, broadest production exposure, and upstream for 4+ forks. Bet on its gateway/plugin patterns.
- **CoPaw & NanoBot** demonstrate **desktop-app velocity** with daily betas and 100+ merges/day—reference for Tauri/Electron agent UX.
- **IronClaw & ZeroClaw** are **architectural innovators** (Reborn storage, unified channels, RFC governance, security primitives)—watch for patterns that graduate to mainstream.
- **Reliability gaps are convergent**: Message deduplication, session recovery, secret isolation, and cross-platform gateway stability are **universal unsolved problems**—opportunity for shared libraries or standards.
- **Release cadence favors patch/beta streams** over major versions. Plan for **continuous delivery**, not waterfall releases.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-12

## 1. Today's Overview
NanoBot showed exceptionally high merge activity today with **119 PRs closed/merged** in the last 24 hours, suggesting a major integration push or branch synchronization event. Only 22 PRs remain open alongside 2 active issues. The project is in a heavy maintenance and stabilization phase—multiple security fixes, Web UI overhauls, and provider integrations are landing simultaneously. No new release was cut today, but the volume of merged work indicates a release candidate may be imminent.

## 2. Releases
**No new releases published today.** The latest merged PRs include substantial changes (Web UI workbench, provider management, MCP OAuth fixes, exec cleanup) that would typically warrant a minor or patch version bump.

## 3. Project Progress — Key Merged/Closed PRs Today
| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#5331](https://github.com/HKUDS/nanobot/pull/5331) | fix(webui): surface MCP runtime connection failures | Web UI / MCP | Improves visibility into MCP gateway connection state; adds OAuth/recovery flows |
| [#5346](https://github.com/HKUDS/nanobot/pull/5346) | fix(exec): terminate one-shot process trees on cleanup | Exec Tool / Stability | Prevents orphaned child processes after timeout/cancellation—critical for resource hygiene |
| [#5338](https://github.com/HKUDS/nanobot/pull/5338) | fix(mcp): preserve credentials when OAuth store read fails | MCP / Security | Fixes credential overwrite bug on storage read failure |
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) / [#4783](https://github.com/HKUDS/nanobot/issues/4783) | Security: API key leaks via `os.environ` mutation & subprocess inheritance | Security | **Critical fixes merged**—provider keys no longer leak across providers or into CLI app subprocesses |
| [#5344](https://github.com/HKUDS/nanobot/pull/5344) | fix(agent): warn on repeated identical tool calls | Agent Loop | Adds loop detection to prevent silent iteration burn |
| [#5347](https://github.com/HKUDS/nanobot/pull/5347) | feat(webui): improve provider and model preset management | Web UI | Deletable custom providers, preset selector, reference guarding |
| [#5342](https://github.com/HKUDS/nanobot/pull/5342) | feat(webui): redesign apps discovery | Web UI | Curated registry, featured batches, offline fallback, logo handling |
| [#5322](https://github.com/HKUDS/nanobot/pull/5322) | feat(webui): add tabbed pane workbench | Web UI | Major layout overhaul—multi-pane, grid, monocle layouts |
| [#2181](https://github.com/HKUDS/nanobot/pull/2181) | feat(providers): add Xiaomi MiMo provider support | Providers | New OpenAI-compatible provider (closed with conflicts) |
| [#5328](https://github.com/HKUDS/nanobot/pull/5328) | feat(providers): add OrcaRouter as named gateway provider | Providers | 150+ models via single endpoint with gateway-level security |

**Pattern:** The merged set is heavily weighted toward **Web UI modernization**, **security hardening**, **provider ecosystem expansion**, and **agent-loop robustness**. Many older PRs (from Feb–Mar 2026) were closed today with "conflict" labels, indicating a large-scale rebase/merge window.

## 4. Community Hot Topics
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#5327](https://github.com/HKUDS/nanobot/issues/5327) | Bug | 10 | **Agent reasoning loop repetition**—model repeats "Good points, let me investigate" randomly; suggests prompt/loop control issue |
| [#5256](https://github.com/HKUDS/nanobot/issues/5256) | Bug | 2 | **`/goal` command spam**—dozens of identical replies while waiting for user input; loop detection gap |
| [#5306](https://github.com/HKUDS/nanobot/issues/5306) | Security | 1 | **`exec.allowPatterns` bypass**—shell-chain allows unintended command execution; config-level sandbox escape |
| [#5333](https://github.com/HKUDS/nanobot/issues/5333) | Enhancement | 0 | **OpenRouter server tools**—Web Search, Web Fetch, Fusion support via `tools` field |

**Analysis:** The two highest-engagement items (#5327, #5256) are **agent-loop control bugs** causing repetitive output—directly addressed by merged PR #5344 (loop detection). The security advisory #5306 remains open and unpatched; it describes a config bypass that could allow command execution outside `allowPatterns`.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#5306](https://github.com/HKUDS/nanobot/issues/5306) `exec.allowPatterns` shell-chain bypass | **Open** | None yet |
| **Critical** | [#4784](https://github.com/HKUDS/nanobot/issues/4784) API keys leaked via global `os.environ` mutation | **Closed** | Merged (implied by issue closure) |
| **Critical** | [#4783](https://github.com/HKUDS/nanobot/issues/4783) CLI apps inherit full `os.environ` with API keys | **Closed** | Merged (implied by issue closure) |
| **High** | [#5327](https://github.com/HKUDS/nanobot/issues/5327) Agent repeats messages during reasoning | **Closed** | Likely addressed by #5344 |
| **High** | [#5256](https://github.com/HKUDS/nanobot/issues/5256) `/goal` produces dozens of repeated replies | **Open** | Addressed by #5344 (loop detection) |
| **Medium** | [#5341](https://github.com/HKUDS/nanobot/pull/5341) Weather skill `curl` alias issue on Windows PowerShell | **Open PR** | #5341 (Windows-safe fix) |
| **Medium** | [#5346](https://github.com/HKUDS/nanobot/pull/5346) Orphaned child processes after exec timeout/cancel | **Open PR** | #5346 (process tree termination) |

**Note:** The two critical security issues (#4784, #4783) were closed today—likely fixed in the merge wave. The remaining critical item (#5306) needs immediate maintainer attention.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|----------------------------|
| **OpenRouter server tools** (Web Search, Fetch, Fusion) | [#5333](https://github.com/HKUDS/nanobot/issues/5333) | High—single-issue, clear API pattern |
| **Tabbed multi-pane Web UI workbench** | [#5322](https://github.com/HKUDS/nanobot/pull/5322) | **Already merged**—will be in next release |
| **Provider/model preset management overhaul** | [#5347](https://github.com/HKUDS/nanobot/pull/5347) | **Already merged** |
| **Apps discovery redesign with curated registry** | [#5342](https://github.com/HKUDS/nanobot/pull/5342) | **Already merged** |
| **OrcaRouter gateway provider (150+ models)** | [#5328](https://github.com/HKUDS/nanobot/pull/5328) | High—Open PR, conflict flag but active |
| **Per-session sandbox isolation (non-WebUI)** | [#5283](https://github.com/HKUDS/nanobot/pull/5283) | Medium—opt-in, complex, open PR |
| **Fallback model support for transient LLM failures** | [#1199](https://github.com/HKUDS/nanobot/pull/1199) | **Closed with conflicts**—may re-land |

**Prediction:** Next release will be **Web UI-heavy** (workbench, presets, apps discovery) + **security patches** + **OrcaRouter provider**. Agent-loop fixes (#5344) and exec cleanup (#5346) are likely included.

## 7. User Feedback Summary
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Agent gets stuck in repetitive loops** | #5327 (10 comments), #5256 | High—multiple users, different triggers |
| **Security anxiety around API key handling** | #4784, #4783 (both security-labeled) | High—critical severity |
| **Exec tool sandbox escapes** | #5306 (security advisory) | Medium—config bypass |
| **Windows compatibility gaps** | #5341 (PowerShell `curl` alias) | Low—single skill, but systemic risk |
| **Desire for richer provider ecosystem** | #5333 (OpenRouter tools), #5328 (OrcaRouter), #2181 (Xiaomi MiMo) | Medium—steady provider requests |
| **Web UX limitations (single pane, poor app discovery)** | #5322, #5342, #5347 | High—addressed by merged PRs |

**Satisfaction signal:** Users are vocal about **agent reliability** (loops) and **security**—both seeing fixes today. Web UI complaints are being addressed in bulk.

## 8. Backlog Watch — Stale but Important
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5306](https://github.com/HKUDS/nanobot/issues/5306) `exec.allowPatterns` bypass | 3 days open | **Critical security advisory**—no fix PR yet; shell-chain bypass allows command execution outside allowlist |
| [#5256](https://github.com/HKUDS/nanobot/issues/5256) `/goal` reply spam | 7 days open | High-impact UX bug; loop detection (#5344) may fix but issue not closed |
| [#5283](https://github.com/HKUDS/nanobot/pull/5283) Per-session sandbox isolation | 5 days open | Architectural security feature for multi-tenant/non-WebUI; complex, needs review |
| [#5328](https://github.com/HKUDS/nanobot/pull/5328) OrcaRouter provider | 2 days open | High-value gateway provider; marked "conflict" but active |
| [#5346](https://github.com/HKUDS/nanobot/pull/5346) Exec process tree cleanup | 0 days open | Stability fix; should be fast-tracked to prevent resource leaks |

**Maintainer action needed:** Prioritize #5306 (security), verify #5344 closes #5256/#5327, review #5283 and #5328 for merge.

---

**Project Health Assessment:** 🟡 **Active stabilization phase** — Exceptional merge velocity (119 PRs/24h) indicates a major integration window. Critical security issues resolved. Agent-loop bugs being fixed. Web UI undergoing generational upgrade. **Blocker:** Open security advisory #5306 needs immediate patch. Next release will be substantial.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-12

## 1. Today's Overview
Hermes Agent shows **high development velocity** with 50 PRs updated and 13 issues active in the last 24 hours, but **zero releases** and **zero issues closed** — indicating a heavy focus on in-flight fixes and feature work rather than stabilization. The PR merge rate (7/50 ≈ 14%) suggests maintainers are selectively merging while triaging a large incoming queue. Critical regressions in session management, gateway lifecycle, and plugin loading dominate today's bug reports, while multiple PRs target race conditions and platform-specific edge cases (macOS launchd, Windows gateway cold-start). Project health: **active but accumulating technical debt**; next release will likely be a bug-fix heavy patch.

## 2. Releases
**No new releases today.** The latest tagged release remains prior to 2026-08-12. Expect a patch release (v0.17.x) once the current P1/P2 regressions are resolved.

## 3. Project Progress — Merged/Closed PRs (7)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#78149](https://github.com/NousResearch/hermes-agent/pull/78149) | fix(cli): recognize prefixed MCP toolsets | CLI / MCP / Config | Restores compatibility for namespaced MCP toolset names without widening allowlist |
| [#78172](https://github.com/NousResearch/hermes-agent/pull/78172) | fix(cron): enforce profile cap for review dispatch | Cron | Prevents review-task over-spawn beyond per-profile concurrency limit |
| [#78143](https://github.com/NousResearch/hermes-agent/pull/78143) | fix(kanban): count dry-run spawns toward global cap | Cron / Kanban | Fixes concurrency accounting bug where dry-runs bypassed global cap |
| *4 others* | (titles not fully visible in feed) | — | Additional bug fixes merged today |

**Net progress:** Three confirmed fixes for cron/kanban concurrency bugs and one MCP config fix — all **P3 stability improvements**. No major features landed today.

## 4. Community Hot Topics — Most Active Issues/PRs
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#69672](https://github.com/NousResearch/hermes-agent/issues/69672) | Bug (P2) | 4 | **FTS5 index corruption** from NUL-prefixed JSON sentinel (`\x00json:`) causing SQLite-version-dependent "malformed inverted index" errors and DB bloat. Affects session state integrity. |
| [#47954](https://github.com/NousResearch/hermes-agent/issues/47954) | Bug (P3) | 4 | **Race condition** on plugin provider load: Honcho memory provider logs "loaded but no instance found" on every session start. PR [#84219](https://github.com/NousResearch/hermes-agent/pull/84219) serializes module loads. |
| [#84109](https://github.com/NousResearch/hermes-agent/issues/84109) | Bug (P1) | 3 | **Gateway sessions invisible after reset** — regression from d2a4d373eb (durable session identity). New sessions carry `parent_session_id` but `_LISTABLE_CHILD_SQL` doesn't surface them. Blocks chat continuity. |
| [#84200](https://github.com/NousResearch/hermes-agent/issues/84200) | Bug (P1) | 1 | **macOS Desktop kills launchd gateway** on every backend startup via `_reap_unsupervised_gateway_orphans()`. Breaks WeChat/Feishu/Email integrations. |

**Underlying theme:** Session/gateway lifecycle robustness and plugin concurrency safety are the top pain points. Users experience silent failures (invisible sessions, mute agent, duplicate memory uploads) rather than crashes.

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P1** | [#84109](https://github.com/NousResearch/hermes-agent/issues/84109) | Gateway sessions post-reset missing from all lists (lineage vs listable SQL mismatch) | ❌ |
| **P1** | [#84200](https://github.com/NousResearch/hermes-agent/issues/84200) | macOS Desktop SIGTERMs launchd-managed gateway on every startup | ❌ |
| **P2** | [#69672](https://github.com/NousResearch/hermes-agent/issues/69672) | FTS5 trigram index corrupted by `\x00json:` sentinel → SQLite integrity errors + bloat | ❌ |
| **P2** | [#52179](https://github.com/NousResearch/hermes-agent/issues/52179) | Bedrock Guardrails configured but **never enforced** on any path (API + CLI) | ❌ |
| **P2** | [#84206](https://github.com/NousResearch/hermes-agent/issues/84206) | `@file:` expansion assumes UTF-8 → `UnicodeDecodeError` on locale-encoded CSV/TXT | ✅ [#84208](https://github.com/NousResearch/hermes-agent/pull/84208) |
| **P2** | [#84207](https://github.com/NousResearch/hermes-agent/issues/84207) | Interrupted tool call (exit 130) kills entire turn silently → agent mute until re-ping | ❌ |
| **P3** | [#47954](https://github.com/NousResearch/hermes-agent/issues/47954) | Honcho memory provider race on startup (warning + re-load) | ✅ [#84219](https://github.com/NousResearch/hermes-agent/pull/84219) |
| **P3** | [#83448](https://github.com/NousResearch/hermes-agent/issues/83448) | `hermes kanban show` text-mode queries closed DB connection | ❌ |
| **P3** | [#84210](https://github.com/NousResearch/hermes-agent/issues/84210) | Telegram media downloads fail on first try (timeout), succeed on retry | ✅ [#84210](https://github.com/NousResearch/hermes-agent/pull/84210) |
| **P3** | [#84214](https://github.com/NousResearch/hermes-agent/issues/84214) | Honcho local-memory migration runs every conversation → near-duplicate docs | ✅ [#84214](https://github.com/NousResearch/hermes-agent/pull/84214) |

**Critical cluster:** Session state (FTS, gateway lineage), gateway process management (macOS/Windows), and plugin provider races. **4/10 P1-P2 bugs have open fix PRs**; 6 remain unaddressed.

## 6. Feature Requests & Roadmap Signals
| Issue | Signal | Likelihood for Next Version |
|-------|--------|----------------------------|
| [#67440](https://github.com/NousResearch/hermes-agent/issues/67440) | **Blast-radius review mode** with proof-backed safety facts for skill changes | Medium — infrastructure exists in `pstack/skills`; needs design sign-off |
| [#72658](https://github.com/NousResearch/hermes-agent/issues/72658) | **Pre-completion vault verification gate** for kanban tasks (multi-agent orchestration) | Low — tagged `needs-decision`; requires architect review |
| [#84211](https://github.com/NousResearch/hermes-agent/issues/84211) | **Skill deduplication/merge** to reduce token cost and launch overhead | Low — early idea, no design |
| [#84216](https://github.com/NousResearch/hermes-agent/pull/84216) | **MCP server publishing & markdown reporting skills** (4 new skills) | High — PR open, practical utility for plugin authors |
| [#84209](https://github.com/NousResearch/hermes-agent/pull/84209) | **`host.attachFileToComposer` SDK door** for plugins to stage files | High — small, focused API addition |
| [#84192](https://github.com/NousResearch/hermes-agent/pull/84192) | **Rich OS notifications with deeplink activation** for plugins | Medium — extends merged `#78685`; UX polish |

**Roadmap read:** Near-term energy is on **plugin/SDK extensibility** (MCP, skills, notifications) and **multi-agent workflow gates**. Core session/gateway stability must land first.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Session continuity broken** | #84109 (invisible post-reset sessions), #84207 (mute agent after interrupt) | Users lose chat context; must restart or re-ping |
| **Gateway instability on Desktop** | #84200 (macOS launchd killed), #84212 (Windows cold-start unverified) | Integrations (WeChat, Feishu, Telegram) drop daily |
| **Silent data corruption** | #69672 (FTS index malformed), #84214 (memory duplicates) | Trust erosion; hard to diagnose |
| **Locale/encoding blindness** | #84206 (UTF-8 assumption on `@file:`) | Non-English users blocked on CSV/TXT context |
| **Guardrails theater** | #52179 (Bedrock Guardrails configured but not enforced) | Compliance/security false sense of safety |
| **Skill write approval broken** | #84213 (staged writes skip validator) | Invalid skills silently staged |

**Positive signals:** Users actively file detailed regressions with SQL triggers, commit SHAs, and stack traces — indicating **expert user base** investing in the project. PR authors often self-assign fixes within hours.

## 8. Backlog Watch — Stale High-Value Items Needing Attention
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#69672](https://github.com/NousResearch/hermes-agent/issues/69672) | 21 days | **Core data integrity**: FTS corruption affects every session; SQLite-version-dependent = silent time bomb | Open, 4 comments, no fix PR |
| [#52179](https://github.com/NousResearch/hermes-agent/issues/52179) | 49 days | **Security/compliance**: Bedrock Guardrails entirely non-functional in v0.17.0 | Open, 2 comments, no fix PR |
| [#47954](https://github.com/NousResearch/hermes-agent/issues/47954) | 56 days | **Plugin architecture flaw**: Race on every session start; fix PR [#84219](https://github.com/NousResearch/hermes-agent/pull/84219) **opened today** — needs review | Fix PR open |
| [#84109](https://github.com/NousResearch/hermes-agent/issues/84109) | 1 day | **P1 regression** from Aug 9 commit; breaks core gateway UX | Open, 3 comments, no fix PR |
| [#84200](https://github.com/NousResearch/hermes-agent/issues/84200) | 0 days | **macOS Desktop blocker**; kills managed gateway process | Open, 1 comment, no fix PR |

**Maintainer action items:** Prioritize review of [#84219](https://github.com/NousResearch/hermes-agent/pull/84219) (plugin race fix), triage [#84109](https://github.com/NousResearch/hermes-agent/issues/84109) and [#84200](https://github.com/NousResearch/hermes-agent/issues/84200) for immediate patch, and assign owners for the 3-week-old FTS corruption (#69672) and 7-week-old Guardrails gap (#52179).

---

*Digest generated from GitHub API data for NousResearch/hermes-agent as of 2026-08-12. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-12

---

## 1. Today's Overview
PicoClaw shows **moderate maintenance activity** with 9 total updates (3 issues, 6 PRs) in the last 24 hours, but **zero merges or releases** — indicating a backlog of pending work. Two new bugs surfaced: a critical context-management regression for routed agents (#3301) and an unused config surface for LINE webhooks (#3328). Six open PRs address these and other gaps (Telegram topics, shell-command allow-lists, Exa search, prompt-cache logging), but none have been reviewed/merged yet. Project health appears stable but **review throughput is the bottleneck**.

---

## 2. Releases
**No new releases** published today. Latest tag remains `v0.3.1` (commit `2cf030d2`).

---

## 3. Project Progress
**No PRs merged or closed today.** All 6 active PRs remain open and marked `[stale]` (except #3314, #3329). Key work-in-progress:
- **#3316** – Fixes context history, summarization, compression, and seahorse bootstrap for agents routed via dispatch rules (directly targets #3301).
- **#3314** – Repairs `customAllowPatterns` for shell commands (default deny patterns were overriding allow-list).
- **#3315** – Adds Telegram topic support in private bot chats (forum-topic mode).
- **#3317** – Logs provider-reported prompt-cache tokens in gateway debug output.
- **#3299** – Introduces native Exa web-search provider (`tools.web` / `web_search`).
- **#3329** – Adds runtime warning for inert `line.settings.webhook_host|port` (fixes #3328).

---

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| **[#3301](https://github.com/sipeed/picoclaw/issues/3301)** (Issue) | 3 comments, 👍0 | **Routed agents lose conversation memory & auto-compression** — blocks multi-agent deployments on Discord/Telegram. |
| **[#3316](https://github.com/sipeed/picoclaw/pull/3316)** (PR) | Linked to #3301 | Fix for the above; awaits review. |
| **[#3294](https://github.com/sipeed/picoclaw/issues/3294)** (Issue, closed) | 3 comments, 👍0 | `/list models` only shows current model — UX mismatch; closed as `stale` but reflects discoverability pain. |
| **[#3328](https://github.com/sipeed/picoclaw/issues/3328)** (Issue) | 0 comments, 👍0 | **Silent config dead-zone**: LINE webhook host/port accepted but ignored — wastes operator time. |

**Signal**: Users deploying multi-agent, multi-channel setups hit **configuration trust issues** (settings silently ignored) and **context isolation bugs**.

---

## 5. Bugs & Stability
| Severity | Issue | Fix PR | Status |
|----------|-------|--------|--------|
| **High** | [#3301](https://github.com/sipeed/picoclaw/issues/3301) — Routed agents: no history, no summarization, no compression | [#3316](https://github.com/sipeed/picoclaw/pull/3316) | Open, stale |
| **Medium** | [#3314](https://github.com/sipeed/picoclaw/pull/3314) — `customAllowPatterns` overridden by default deny patterns | #3314 (self-contained) | Open |
| **Low** | [#3328](https://github.com/sipeed/picoclaw/issues/3328) — `line.settings.webhook_host/port` never read | [#3329](https://github.com/sipeed/picoclaw/pull/3329) | Open (warning added) |
| **Low** | [#3294](https://github.com/sipeed/picoclaw/issues/3294) — `/list models` shows only current model | None | Closed (stale) |

**No crashes or regressions reported today.** The high-severity bug (#3301) has a ready fix (#3316) awaiting merge.

---

## 6. Feature Requests & Roadmap Signals
| Request | PR/Issue | Likelihood for Next Release |
|---------|----------|-----------------------------|
| **Native Exa web search provider** | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | High — complete implementation, only review needed |
| **Telegram forum topics in private bot chats** | [#3315](https://github.com/sipeed/picoclaw/pull/3315) | High — narrow, well-scoped fix |
| **Prompt-cache token observability** | [#3317](https://github.com/sipeed/picoclaw/pull/3317) | Medium — debug-only, low risk |
| **Fix `/list models` to show all configured models** | [#3294](https://github.com/sipeed/picoclaw/issues/3294) | Low — closed stale, but UX gap remains |

**Predicted next version (v0.3.2)**: Exa provider, Telegram topic fix, routed-agent context fix, shell allow-list fix, LINE config warning.

---

## 7. User Feedback Summary
- **Pain points**:  
  - *Silent config failures* (LINE webhook settings, `/list models` mismatch) erode trust.  
  - *Routed agents are stateless* — breaks multi-tenant bot architectures.  
  - *Shell allow-lists don’t work* — blocks legitimate automation (e.g., `git push`).
- **Use cases**:  
  - Discord/Telegram bots with dispatch rules routing to specialized agents.  
  - Private Telegram bots using forum-topic mode.  
  - Cost-sensitive deployments tracking prompt-cache tokens (DeepSeek/Cloudflare).
- **Sentiment**: Frustration with **stale PRs** and **unreviewed fixes**; appreciation for detailed bug reports and PRs from community (j-v, genuss, kesku, ex-takashima).

---

## 8. Backlog Watch
| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| **[#3316](https://github.com/sipeed/picoclaw/pull/3316)** — Routed-agent context fix | 9 days | **High** — blocks production multi-agent use | **Merge priority**; resolves #3301 |
| **[#3299](https://github.com/sipeed/picoclaw/pull/3299)** — Exa provider | 17 days | Medium — feature complete | Review & merge |
| **[#3314](https://github.com/sipeed/picoclaw/pull/3314)** — Shell allow-list fix | 9 days | Medium — security-adjacent | Review & merge |
| **[#3315](https://github.com/sipeed/picoclaw/pull/3315)** — Telegram private-chat topics | 9 days | Low — niche but complete | Review & merge |
| **[#3317](https://github.com/sipeed/picoclaw/pull/3317)** — Cache-token logging | 8 days | Low — observability | Review & merge |
| **[#3329](https://github.com/sipeed/picoclaw/pull/3329)** — LINE config warning | 1 day | Low — prevents misconfig | Quick merge |

**Maintainer attention needed**: 6 open PRs, 0 merges in 24h. **Review capacity is the single limiting factor** for shipping fixes users have already written.

---

*Generated from GitHub data as of 2026-08-12. All links point to sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-12

## 1. Today's Overview
NanoClaw shows **moderate but focused activity** over the last 24 hours: 1 new issue opened and 7 PRs updated (3 merged/closed, 4 still open). The merged work centers on **remote Streamable HTTP MCP server support** (engine + Codex/Opencode providers) and a **new Tavily MCP tool skill**, while open PRs advance the **Agent Plugins 1.0 migration**, **transactional upgrades**, and a **database backfill migration**. No release was cut today. The single new issue (#3226) flags a silent message-drop bug when platforms reuse message IDs — a potential reliability regression for multi-platform deployments.

## 2. Releases
**No new releases published today.**

## 3. Project Progress (Merged/Closed PRs)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) | Feature (Utility Skill) | Adds **Tavily MCP tool skill** — standalone tool under `.claude/skills/` (no core changes). | Extends agent tooling with web search via Tavily; zero-config for users. |
| [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) | Feature (Core) | **Remote Streamable HTTP MCP servers** support in engine & Claude provider (`{ type: 'http', url }` in `mcpServers`). | Enables hosted/remote MCP servers (vs. stdio-only), unlocking cloud-hosted toolchains. |
| [#3221](https://github.com/nanocoai/nanoclaw/pull/3221) | Feature (Providers) | Extends HTTP MCP support to **Codex & Opencode providers** (fixes config-write throw on http entries). | Completes cross-provider parity for remote MCP; unblocks non-Claude agents. |

**Net advancement:** Remote MCP over HTTP is now fully supported across all three built-in providers (Claude, Codex, Opencode), and a new utility skill (Tavily) is available out-of-the-box.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3226](https://github.com/nanocoai/nanoclaw/issues/3226) — *Inbound messages silently dropped when a platform reuses a message id* | 1 comment, 0 👍, updated 2026-08-11 | **Reliability & observability**: Users experience "agent ignored me" with no logs/errors. Platforms recycling message IDs (e.g., Slack, Discord retries) cause silent loss. Need: dedup logic + user-visible warning or dead-letter queue. |
| [#3220](https://github.com/nanocoai/nanoclaw/pull/3220) — *Agent templates → Agent Plugins 1.0.0 directories* | Open, updated 2026-08-11, core-team | **Ecosystem migration**: Breaking format change for agent templates. Need: clear migration path, docs, and tooling to convert existing templates. Security hardening (symlink/caps/secret) bundled in. |
| [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) — *Template setup wizard & first-agent stamping* | Open since 2026-07-02, updated 2026-08-11, core-team | **Onboarding UX**: Guided "first agent" creation flow. Long-running (40+ days) — signals design iteration or dependency on #3220 migration. |

## 5. Bugs & Stability
| Severity | Issue / PR | Status | Fix PR? |
|----------|------------|--------|---------|
| **High** | [#3226](https://github.com/nanocoai/nanoclaw/issues/3226) — Silent message drop on ID reuse | Open (1 day old) | **No fix PR yet** — root cause likely in message ingest dedup layer; needs investigation. |
| **Medium** | [#3145](https://github.com/nanocoai/nanoclaw/pull/3145) — Missing channel destinations in existing wirings | Open (migration 021) | **PR open** — backfills destinations, preserves custom names. Affects upgrades from pre-migration installs. |
| **Medium** | [#3195](https://github.com/nanocoai/nanoclaw/pull/3195) — Non-transactional upgrades | Open | **PR open** — makes upgrades atomic (rollback on failure). Critical for self-hosted reliability. |

**Watchlist:** #3226 is the only *unaddressed* high-severity bug; no fix branch visible. #3145 and #3195 have active fix PRs but remain unmerged.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Agent Plugins 1.0 (template format migration)** | [#3220](https://github.com/nanocoai/nanoclaw/pull/3220) (core-team, breaking) | **Very High** — core-team driven, security+feature bundled, blocks #2909 wizard. |
| **Transactional upgrades** | [#3195](https://github.com/nanocoai/nanoclaw/pull/3195) (core-team, follows-guidelines) | **High** — operational hardening, reduces support burden. |
| **Setup wizard / first-agent stamping** | [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) (core-team, 40 days open) | **Medium-High** — depends on #3220 landing; UX priority for new users. |
| **More MCP utility skills (like Tavily)** | [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) (community contribution) | **Ongoing** — low-barrier contributions; expect steady stream. |

**Prediction:** Next release will likely ship **Agent Plugins 1.0 migration + transactional upgrades**, possibly with the setup wizard if #3220 merges soon.

## 7. User Feedback Summary
- **Pain point (critical):** "Agent ignored me" = silent message loss when platforms reuse IDs (#3226). No logs, no retry, no user signal. Impacts trust in multi-platform deployments.
- **Pain point (operational):** Upgrade failures leave installs in broken state (#3195) — users want atomic, rollback-safe updates.
- **Positive signal:** Community contributed Tavily skill (#3190) merged quickly — utility skill pathway works.
- **Unspoken need:** Template/plugin ecosystem maturity — long-open #2909/#3220 suggest friction in "first agent" experience for newcomers.

## 8. Backlog Watch (Stale / Needs Maintainer Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) — Template setup wizard | **41 days** (opened 2026-07-02) | Blocks polished onboarding; depends on #3220. Core-team owned — needs decision: merge as-is or wait for plugin migration? |
| [#3145](https://github.com/nanocoai/nanoclaw/pull/3145) — DB backfill migration | **15 days** (opened 2026-07-28) | Upgrade-blocker for existing installs with wirings. Low complexity — should be fast-tracked. |
| [#3195](https://github.com/nanocoai/nanoclaw/pull/3195) — Transactional upgrades | **6 days** (opened 2026-08-06) | High-value reliability fix; core-team tagged. Merge before next release. |
| [#3226](https://github.com/nanocoai/nanoclaw/issues/3226) — Silent message drop | **2 days** (opened 2026-08-10) | **No fix PR, no assignee** — assign owner immediately; regression risk for all platforms. |

---

**Health Indicator:** 🟡 **Caution** — Active core-team delivery on MCP/skills, but a **high-severity silent data-loss bug (#3226) has no fix in flight**, and two key DX PRs (#2909, #3145) have lingered >2 weeks. Prioritize #3226 investigation and clear the migration/upgrade backlog before next release.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-12

## 1. Today's Overview

IronClaw showed **high velocity** on 2026-08-12 with **50 PRs updated** (25 merged/closed, 25 open) and **11 issues updated** (5 closed, 6 open). The project is in active development across multiple fronts: memory system fixes, channel unification (Slack/Telegram/Web), Reborn storage architecture migration, automation suggestions backend, and WebUI/UX improvements. No new releases were published. The merged PRs indicate steady progress on both infrastructure (storage, process leases, context management) and user-facing features (conversation titles, suggestion cards, operator surfaces).

## 2. Releases

**No new releases** published on 2026-08-12.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Area | Status |
|----|-------|------|--------|
| [#7471](https://github.com/nearai/ironclaw/pull/7471) | fix(processes): lease expiry recovers safe runs; isolate journal heartbeat pool | Process supervision / reliability | **Closed** |
| [#7470](https://github.com/nearai/ironclaw/pull/7470) | fix(threads): restore listability for unprojected thread index rows | Thread indexing / WebUI sidebar | **Closed** |
| [#7503](https://github.com/nearai/ironclaw/pull/7503) | fix(loop): retain accepted task across context eviction | Context window / run continuity | **Closed** |
| [#6997](https://github.com/nearai/ironclaw/pull/6997) | feat(llm): explicit Anthropic cache_control breakpoints on both transports | LLM cost/performance (P0) | **Closed** |
| [#7480](https://github.com/nearai/ironclaw/pull/7480) | fix(webui): reveal long conversation titles on hover | WebUI UX | **Closed** |
| [#7514](https://github.com/nearai/ironclaw/pull/7514) | fix: enable Railway shell for hosted volume profile | Deployment / Railway | **Closed** |
| [#7483](https://github.com/nearai/ironclaw/pull/7483) | Fix default NEAR AI connection and model probes to use authenticated session | Provider integration / auth | **Closed** |
| [#7487](https://github.com/nearai/ironclaw/pull/7487) | fix(disclosure): tool_search marks tools disclosed without returning schemas | Tool disclosure / safety | **Closed** |
| [#7488](https://github.com/nearai/ironclaw/pull/7488) | fix(disclosure): bridge tools hardcoded Exclusive serialize discovery batches | Tool disclosure / concurrency | **Closed** |
| [#7511](https://github.com/nearai/ironclaw/pull/7511) | [Ignore] | — | **Closed** |

**Key advances:**
- **Process reliability**: Lease expiry now recovers runs at replay-safe checkpoints; heartbeat pool isolated from data-plane PG traffic ([#7471](https://github.com/nearai/ironclaw/pull/7471)).
- **Thread indexing fixed**: Unprojected `thread_index` rows are now listable in sidebar ([#7470](https://github.com/nearai/ironclaw/pull/7470)).
- **Context eviction safety**: Accepted user task pinned across 128-message tail cut; budget enforcement added ([#7503](https://github.com/nearai/ironclaw/pull/7503)).
- **Anthropic caching**: Explicit `cache_control` breakpoints on both rig adapter and OAuth transports ([#6997](https://github.com/nearai/ironclaw/pull/6997)).
- **WebUI polish**: Marquee hover for truncated conversation titles ([#7480](https://github.com/nearai/ironclaw/pull/7480)).
- **Tool disclosure fixes**: `tool_search` no longer disarms describe-first; bridge tools use appropriate concurrency hints ([#7487](https://github.com/nearai/ironclaw/pull/7487), [#7488](https://github.com/nearai/ironclaw/pull/7488)).

---

## 4. Community Hot Topics — Most Active Items

| Item | Type | Comments | Summary |
|------|------|----------|---------|
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | PR (XL) | *undefined* | **Reborn storage profile-agnostic migration** — root every profile at `IRONCLAW_REBORN_HOME` with namespaced state/system/workspaces/runtime; typed security envelope for tenancy isolation. Core architectural change. |
| [#7477](https://github.com/nearai/ironclaw/pull/7477) | PR (XL) | *undefined* | **Unified channel model** — single `ChannelAdapter` per channel (web/Slack/Telegram) for inbound, replies, notifications. Implements design doc end-to-end. |
| [#7498](https://github.com/nearai/ironclaw/pull/7498) | PR (XL) | *undefined* | **Automation suggestion cards V1 backend** — suggestion generation loop exposed via `GET/POST /api/webchat/v2/suggestions*`. Part of Epic [#7038](https://github.com/nearai/ironclaw/issues/7038). |
| [#7464](https://github.com/nearai/ironclaw/pull/7464) | PR (XL) | *undefined* | **Telegram linked-device auth** — MTProto linked device, session custody, standard-op tools. Branched from design PR [#7443](https://github.com/nearai/ironclaw/pull/7443). |
| [#7515](https://github.com/nearai/ironclaw/pull/7515) | PR (XL) | *undefined* | **Slack: bind remaining 8 core messaging ops** (edit, delete, reactions, open_dm, resolve_user, etc.) — fast-follow to framework PR. |
| [#7365](https://github.com/nearai/ironclaw/pull/7365) | PR (XL) | *undefined* | **Memory-save guidance + always-on MEMORY.md prompt lane** — fixes cross-conversation recall ([#7185](https://github.com/nearai/ironclaw/issues/7185)). |
| [#7509](https://github.com/nearai/ironclaw/pull/7509) | PR (XL) | *undefined* | **Safety: redact model-bound secrets without rejecting turns** — deterministic redaction replaces credential rejection. |
| [#7512](https://github.com/nearai/ironclaw/pull/7512) | PR (XL) | *undefined* | **Memory: resolve target aliases in domain contract layer** — fixes mem0 storing `target: "memory"` verbatim ([#7505](https://github.com/nearai/ironclaw/issues/7505)). |
| [#7516](https://github.com/nearai/ironclaw/pull/7516) | PR (XL) | *undefined* | **WebUI: operator surface for IronHub agent link** — register URL + hub-minted shared key in Extensions page. |
| [#7513](https://github.com/nearai/ironclaw/pull/7513) | PR (L) | *undefined* | **CLI: ACP serve command** — stdio transport, streaming + cancel, enables GitHub Copilot CLI / VS Code integration. |

**Underlying needs:**
- **Multi-tenant / profile-agnostic storage** is a blocker for deployments that switch profiles ([#7456](https://github.com/nearai/ironclaw/pull/7456), [#7467](https://github.com/nearai/ironclaw/issues/7467)).
- **Channel unification** reduces duplication across Web/Slack/Telegram and enables consistent notification/reply handling ([#7477](https://github.com/nearai/ironclaw/pull/7477)).
- **Automation suggestion cards** are a user-facing feature to surface proactive agent actions on home screen ([#7498](https://github.com/nearai/ironclaw/pull/7498)).
- **Memory system reliability** — cross-conversation recall and target-alias resolution — is a known pain point ([#7365](https://github.com/nearai/ironclaw/pull/7365), [#7512](https://github.com/nearai/ironclaw/pull/7512)).
- **Operator/integration surfaces** (IronHub link, ACP server) are being added to support external tooling and deployment workflows ([#7516](https://github.com/nearai/ironclaw/pull/7516), [#7513](https://github.com/nearai/ironclaw/pull/7513)).

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#7505](https://github.com/nearai/ironclaw/issues/7505) | Memory target-alias resolution in provider layer only; mem0 stores `target: "memory"` verbatim, breaking canonical `MEMORY.md` reads | [#7512](https://github.com/nearai/ironclaw/pull/7512) (open) |
| **High** | [#7487](https://github.com/nearai/ironclaw/issues/7487) | `tool_search` marks tools disclosed without returning schemas, disarming describe-first safety net; `oneOf` required collapses to empty | Fixed in [#7487](https://github.com/nearai/ironclaw/pull/7487) |
| **High** | [#7488](https://github.com/nearai/ironclaw/issues/7488) | Disclosure bridge tools hardcoded `Exclusive` concurrency; `tool_search`/`tool_describe` are side-effect-free metadata lookups | Fixed in [#7488](https://github.com/nearai/ironclaw/pull/7488) |
| **Medium** | [#7508](https://github.com/nearai/ironclaw/issues/7508) | GitHub MCP extension startup gives confusing endpoint verification prompt instead of connecting (Railway instance) | — |
| **Medium** | [#7483](https://github.com/nearai/ironclaw/issues/7483) | Default NEAR AI connection & model probes fail when API key blank (uses unauthenticated session) | Fixed in [#7483](https://github.com/nearai/ironclaw/pull/7483) |
| **Low** | [#7481](https://github.com/nearai/ironclaw/issues/7481) | Long conversation titles truncated in left nav; no hover reveal | Fixed in [#7480](https://github.com/nearai/ironclaw/pull/7480) |

**Stability notes:** The tool disclosure bugs ([#7487](https://github.com/nearai/ironclaw/issues/7487), [#7488](https://github.com/nearai/ironclaw/issues/7488)) could cause blind-call spirals and unnecessary serialization — both fixed and closed. Memory alias resolution ([#7505](https://github.com/nearai/ironclaw/issues/7505)) is a data-integrity issue with a fix PR open. MCP extension issue ([#7508](https://github.com/nearai/ironclaw/issues/7508)) appears environment-specific (Railway).

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Automation suggestion cards V1** (backend) | [#7498](https://github.com/nearai/ironclaw/pull/7498), Epic [#7038](https://github.com/nearai/ironclaw/issues/7038) | **High** — PR open, backend complete; frontend likely next |
| **Reborn profile-agnostic storage** | [#7456](https://github.com/nearai/ironclaw/pull/7456), Epic [#7467](https://github.com/nearai/ironclaw/issues/7467) | **High** — Core architectural migration, XL PR under review |
| **Unified channel model** (Web/Slack/Telegram) | [#7477](https://github.com/nearai/ironclaw/pull/7477) | **High** — XL PR implementing design doc end-to-end |
| **Telegram linked-device auth** | [#7464](https://github.com/nearai/ironclaw/pull/7464) | **Medium-High** — XL PR, depends on unified channel model |
| **Slack remaining 8 core ops** | [#7515](https://github.com/nearai/ironclaw/pull/7515) | **Medium** — Fast-follow, PR open |
| **IronHub agent link operator surface** | [#7516](https://github.com/nearai/ironclaw/pull/7516) | **Medium** — WebUI integration for deployment workflow |
| **ACP serve command (CLI)** | [#7513](https://github.com/nearai/ironclaw/pull/7513) | **Medium** — Enables Copilot/VS Code integration |
| **Storybook + AI-first Design System** | Epic [#7038](https://github.com/nearai/ironclaw/issues/7038) | **Medium-Long** — Large UX/theming initiative, proposal in [#7257](https://github.com/nearai/ironclaw/pull/7257) |
| **Cloud.near.ai: staking path for Google/GitHub sign-ins** | [#7517](https://github.com/nearai/ironclaw/issues/7517) | **Medium** — User-reported gap in credit/staking flow |
| **Automation runs reliability** (unattended runs as plain chat) | Epic [#6879](https://github.com/nearai/ironclaw/issues/6879) | **High priority** — Structural issue, v1.3.0 target |

**Predicted next-version candidates:** Automation suggestion cards, Reborn storage migration, Unified channel model, and the automation runs epic ([#6879](https://github.com/nearai/ironclaw/issues/6879)) are the strongest signals for v1.3.0.

---

## 7. User Feedback Summary

| Feedback | Source | Sentiment |
|----------|--------|-----------|
| **Cross-conversation memory recall broken** — facts stated in conversation A not recalled in B | [#7185](https://github.com/nearai/ironclaw/issues/7185) (via [#7365](https://github.com/nearai/ironclaw/pull/7365)) | 😞 Pain point |
| **Automation runs hit-or-miss** — same prompt sometimes succeeds, sometimes produces nothing, especially on small models | [#6879](https://github.com/nearai/ironclaw/issues/6879) | 😞 Structural issue |
| **Cloud.near.ai: no staking path for Google/GitHub sign-ins** — credits only via Stripe, "Sign in with NEAR" not attachable to existing account | [#7517](https://github.com/nearai/ironclaw/issues/7517) | 😞 Gap in onboarding |
| **GitHub MCP extension confusing endpoint verification prompt** on Railway | [#7508](https://github.com/nearai/ironclaw/issues/7508) | 😞 Deployment friction |
| **Long conversation titles truncated in sidebar** — no way to read full title | [#7481](https://github.com/nearai/ironclaw/issues/7481) | 😐 UX annoyance (fixed) |
| **Default NEAR AI provider dialog fails** when API key left blank | [#7483](https://github.com/nearai/ironclaw/issues/7483) | 😐 Config friction (fixed) |

**Overall:** Users experience friction in **memory persistence across conversations**, **automation reliability**, and **Cloud onboarding/payments**. The fixes for memory guidance ([#7365](https://github.com/nearai/ironclaw/pull/7365)) and target aliases ([#7512](https://github

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-12

---

## 1. Today's Overview
LobsterAI shows **high maintenance velocity** with 11 PRs updated and 4 issues touched in the last 24 hours. A new patch release **2026.8.11** shipped yesterday, delivering cowork UX improvements (shortcuts, scheduled-task markers). The team closed 7 PRs and 3 stale issues, while 4 PRs and 1 issue remain open. Activity centers on Windows plugin stability, per-model thinking-level persistence, settings dirty-check UX, and a recurring gateway-startup loop on Windows. Overall project health appears **active and responsive**, with stale triage clearing legacy tickets.

---

## 2. Releases
### **v2026.8.11** (2026-08-11) — Patch
| Change | PR | Author |
|--------|-----|--------|
| Add `collapse-agent-tasks` shortcut + allow modifier shortcuts while typing | [#2469](https://github.com/netease-youdao/LobsterAI/pull/2469) | @fisherdaddy |
| Mark scheduled-task sessions in sidebar | [#2477](https://github.com/netease-youdao/LobsterAI/pull/2477) | @liuzhq1986 |

**Breaking changes**: None noted.  
**Migration notes**: No schema migrations; settings and session data forward-compatible.

---

## 3. Project Progress — Merged / Closed PRs (Last 24h)
| PR | Area | Summary | Status |
|----|------|---------|--------|
| [#2477](https://github.com/netease-youdao/LobsterAI/pull/2477) | release, main, renderer, cowork, openclaw, im, windows, artifacts | **Release 2026.8.10 → main** — configurable thinking levels, cowork progress visibility, scheduled-task tags, local-file workflows, startup/runtime reliability, settings interactions | **Merged** |
| [#2475](https://github.com/netease-youdao/LobsterAI/pull/2475) | renderer | **Per-model thinking level** — each model now remembers its own `thinking_level`; fixes cross-model clobbering | **Merged** |
| [#2457](https://github.com/netease-youdao/LobsterAI/pull/2457) | renderer, main, openclaw, cowork, docs | **Server-driven thinking-level options** — defaults for package models, OpenClaw alias `max` → `xhigh`, persisted per-session/agent | **Merged** |
| [#2476](https://github.com/netease-youdao/LobsterAI/pull/2476) | renderer, im | **Escape dismisses topmost overlay** — layer-aware modal stack; only newest layer reacts; IME composition guarded | **Merged** |
| [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) | settings | **Dirty-check on Settings close** — confirms unsaved API Key/provider changes (closes [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237)) | **Merged** |
| [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239) | main | **Task-completion attention** — Windows taskbar flash / macOS Dock bounce when AI task finishes/errors in background | **Merged** |
| [#2474](https://github.com/netease-youdao/LobsterAI/pull/2474) | renderer | **Sidebar icon stroke-weight alignment** — visual polish | **Merged** |

---

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#1183](https://github.com/netease-youdao/LobsterAI/issues/1183) | Issue | 1 | 0 | **Gateway startup loop on Windows** — after toggling a model off/on, “openClaw gateway failed to start in time” modal recurs indefinitely. Blocks usage until manual config restore. |
| [#2479](https://github.com/netease-youdao/LobsterAI/pull/2479) | PR | — | 0 | **Windows plugin install preserves junctions** — stages installs on same volume, atomic rename to avoid `EPERM` symlink failures. Critical for plugin reliability on NTFS. |
| [#2478](https://github.com/netease-youdao/LobsterAI/pull/2478) | PR | — | 0 | **Cross-platform file-icon size fix** — Electron `large` size unsupported on macOS/Windows; now resolves `normal` there, `large` only on Linux. |
| [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) | Issue (closed) | 2 | 0 | **Silent settings loss** — users lost API keys when closing Settings without Save. Fixed by [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241). |

**Signal**: Windows gateway/plugin stability and settings-data safety are the loudest pain points.

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue / PR | Description | Fix Status |
|----------|------------|-------------|------------|
| **High** | [#1183](https://github.com/netease-youdao/LobsterAI/issues/1183) | Gateway startup mask loops forever on Windows after model toggle; requires `openclaw.json` rollback. | **Open** — no fix PR yet |
| **High** | [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062) (closed stale) | 24h tasks auto-stopped with “exceeded max duration”; unclear if background continues. | **Closed stale** — root cause unconfirmed |
| **Medium** | [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) (closed stale) | One provider rate-limited → *all* models/show all sessions as limited; app won’t restart until config rollback. | **Closed stale** — isolation logic missing |
| **Medium** | [#2479](https://github.com/netease-youdao/LobsterAI/pull/2479) | Windows `EPERM` on plugin symlinks during install/update. | **Open PR** — staged atomic rename |
| **Low** | [#2478](https://github.com/netease-youdao/LobsterAI/pull/2478) | `app.getFileIcon('large')` throws on macOS/Windows. | **Open PR** — size resolver added |

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Per-model thinking-level persistence** | [#2475](https://github.com/netease-youdao/LobsterAI/pull/2475), [#2457](https://github.com/netease-youdao/LobsterAI/pull/2457) | ✅ **Shipped in 2026.8.10/11** |
| **Settings dirty-check confirmation** | [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) → [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) | ✅ **Shipped** |
| **Task-completion OS notification (flash/bounce)** | [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239) | ✅ **Shipped** |
| **Escape dismisses only topmost modal** | [#2476](https://github.com/netease-youdao/LobsterAI/pull/2476) | ✅ **Shipped** |
| **Provider-level rate-limit isolation** | [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) | 🟡 **High priority** — architectural, not yet scheduled |
| **Gateway startup reliability (Windows)** | [#1183](https://github.com/netease-youdao/LobsterAI/issues/1183) | 🟡 **High priority** — blocking, needs root-cause |

---

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Silent data loss in Settings** | [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) — 2 comments, users lost API keys | 😠 Frustrated → **Fixed** |
| **Cascading rate-limit paralysis** | [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) — one provider down kills all sessions; app unstartable | 😠 Critical → **Triaged stale, no fix** |
| **Unkillable gateway modal loop** | [#1183](https://github.com/netease-youdao/LobsterAI/issues/1183) — Windows users stuck, must restore JSON | 😠 Blocking → **Open** |
| **Task timeout opacity** | [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062) — unclear if 24h tasks actually stop or continue | 😕 Confused → **Stale-closed** |
| **Positive: per-model thinking UX** | [#2475](https://github.com/netease-youdao/LobsterAI/pull/2475) — dev dogfooding caught cross-model clobber | 👍 Delivered |

---

## 8. Backlog Watch — Stale / Unanswered Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1183](https://github.com/netease-youdao/LobsterAI/issues/1183) | 133 days | **Gateway startup loop on Windows** — reproducible, blocks users, no PR. Needs debugging session or regression bisect. |
| [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) | 133 days | **Provider isolation** — architectural gap; one bad key disables entire app. Should schedule design review. |
| [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | 133 days | **Hide OpenClaw main-agent session from Cowork list** — UI noise, simple `hidden` column. Ready for review/merge. |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 132 days | **Electron 40 → 43 bump** — dependabot PR, unmerged. May unblock Windows plugin symlink fixes ([#2479](https://github.com/netease-youdao/LobsterAI/pull/2479)). |

---

*Digest generated from GitHub data as of 2026-08-12. All links point to netease-youdao/LobsterAI.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-12

## 1. Today's Overview
Moltis shows **very low public activity** in the last 24 hours: zero issue updates, zero merged/closed PRs, and no new releases. The sole movement is **PR #1190** (opened 2026-08-11), a substantial feature branch adding durable local CalDAV connectors, provider-neutral persistence, atomic snapshots, scheduling, projections, bounded full-text search, and a read-only `connectors` agent tool. The project appears to be in a **heads-down development phase** with a single large PR under review rather than a steady stream of incremental changes.

## 2. Releases
**No new releases** published today. The latest available release remains whatever was shipped prior to this period.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours. The only in-flight work is:

| PR | Title | Status | Author | Updated |
|----|-------|--------|--------|---------|
| [#1190](https://github.com/moltis-org/moltis/pull/1190) | Add durable local CalDAV connectors | **Open** | [penso](https://github.com/penso) | 2026-08-11 |

**Scope of #1190** (per summary):  
- Provider-neutral connector persistence & atomic CalDAV snapshots  
- Scheduling, projections, bounded local full-text search  
- Prompt-compiled dataset plans + trusted read-only `connectors` agent tool  
- Settings > Connectors UI for account/dataset/plan management  

This PR likely represents a **major milestone** (CalDAV integration + local dataset layer) and will require thorough review before merge.

## 4. Community Hot Topics
Only one active item exists, so it is by definition the “hottest”:

| Item | Type | Comments | Reactions | Link |
|------|------|----------|-----------|------|
| **Add durable local CalDAV connectors** | PR | *undefined* | 👍 0 | [#1190](https://github.com/moltis-org/moltis/pull/1190) |

**Underlying need**: Users (or the product roadmap) require **reliable, local-first calendar synchronization** with offline durability, search, and agent-accessible datasets—suggesting a push toward **personal knowledge/calendar assistants** that can operate on user-owned data without cloud dependency.

## 5. Bugs & Stability
**No bug reports, crashes, or regressions** were filed or updated today. Stability signals are absent; watch for regression reports once #1190 lands in a pre-release or nightly build.

## 6. Feature Requests & Roadmap Signals
The single open PR **is** the strongest roadmap signal:

| Feature Area | Evidence | Likelihood for Next Version |
|--------------|----------|-----------------------------|
| **CalDAV connector framework** | PR #1190 implements persistence, snapshots, scheduling, projections, FTS | **High** – already coded, awaiting review |
| **Agent-readable local datasets** | `connectors` read-only tool + prompt-compiled plans | **High** – part of same PR |
| **Connector management UI** | Settings > Connectors account/dataset/plan flows | **Medium-High** – UI work often follows backend merge |

No other feature requests surfaced in the last 24 h.

## 7. User Feedback Summary
**No direct user feedback** (issues, discussions, reactions) appeared today. The absence of 👍/comments on #1190 may indicate:
- Reviewers haven’t engaged yet, or  
- The PR is still in draft/WIP state (not marked as such in data)  
- Community interaction happens elsewhere (Discord, Matrix, etc.)

## 8. Backlog Watch
With zero stale issues/PRs reported in the data slice, there’s **nothing to flag** from the last 24 h. However, maintainers should:
1. **Prioritize review of #1190**—its size and scope make it a bottleneck.  
2. **Monitor for follow-up issues** once the CalDAV connector lands (migration, auth edge-cases, sync conflicts).  
3. **Consider splitting future connector work** into smaller, reviewable PRs to avoid single-PR stalls.

---

*Data source: GitHub REST API (issues, PRs, releases) for `moltis-org/moltis` as of 2026-08-12 00:00 UTC. All links point to live GitHub items.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-12

## 1. Today's Overview
CoPaw (QwenPaw) is in **high-velocity beta iteration** with v2.1.0-beta.3 released today and v2.1.0-beta.4 version bump already merged. In the last 24 hours the project saw **16 issue updates** (9 closed) and **49 PR updates** (26 merged/closed), indicating a focused stabilization push before the v2.1.0 stable release. The release cadence is roughly daily betas, with maintainers actively addressing regressions from the v2.1.0-beta series (desktop env leakage, MCP tool timeouts, session/media loading). Community engagement is strong: multiple first-time contributors have PRs under review, and users are reporting both critical crashes and UX gaps (LaTeX rendering, font scaling, inbox delivery). Overall project health is **good but busy** — the backlog of open PRs (23) and unresolved bugs suggests the team is triaging heavily.

---

## 2. Releases
### v2.1.0-beta.3 (2026-08-11)
| Change | Author | Link |
|---|---|---|
| **Feat**: Files workspace blog | @zhaozhuang521 | [#6783](https://github.com/agentscope-ai/QwenPaw/pull/6783) |
| **Fix(provider)**: Expire stale capability cache entries and clear on model switch | @ningblue | [#6723](https://github.com/agentscope-ai/QwenPaw/pull/6723) |
| **Chore**: Version bump to 2.1.0-beta.3 | — | Release notes |

**Breaking changes / migration notes**: None documented in this beta. The provider cache fix may affect long-running sessions that relied on stale capability data — expect automatic refresh on next model switch.

**Next beta**: v2.1.0-beta.4 version bump merged in [#6920](https://github.com/agentscope-ai/QwenPaw/pull/6920) (2026-08-12), likely to be published today.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Type | Summary | Impact |
|---|---|---|---|
| [#6907](https://github.com/agentscope-ai/QwenPaw/pull/6907) | Feat | Allow custom gateway endpoints for 5 IM channels (Feishu, QQ, WeCom, XiaoYi, Yuanbao) | Enables private/on-prem gateways; unblocks enterprise deployments |
| [#6898](https://github.com/agentscope-ai/QwenPaw/pull/6898) | Fix | Correct `read_file` tool description (text-only, encoding param) | Reduces model misuse of tool for binary files |
| [#6915](https://github.com/agentscope-ai/QwenPaw/pull/6915) | Fix | Repair file previews (Unicode PDF, SVG) + dark-mode styling | Restores workspace file UX |
| [#6911](https://github.com/agentscope-ai/QwenPaw/pull/6911) | Feat | Unify code-block rendering: syntax highlight, copy, download; LaTeX/Mermaid get Preview/Source tabs | Major console UX upgrade for technical users |
| [#6909](https://github.com/agentscope-ai/QwenPaw/pull/6909) | Feat | Warn when a bot identity is already used by another running agent | Prevents channel conflict at config save |
| [#6875](https://github.com/agentscope-ai/QwenPaw/pull/6875) | Chore | v2.1.0 release notes (EN/CN), README sync | Documentation readiness for stable |
| [#6920](https://github.com/agentscope-ai/QwenPaw/pull/6920) | Chore | Version bump to 2.1.0-beta.4 | Next beta prep |

**Net velocity**: 26 PRs closed/merged in 24h — strong throughput. Most merges are bug fixes, UI polish, and release prep; few new features.

---

## 4. Community Hot Topics (Most Comments/Reactions)
| Item | Type | Comments | Core Need |
|---|---|---|---|
| [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | Bug (closed) | 10 | **MCP tools stop working after hours**; requires container restart. Root cause likely capability cache staleness (addressed in #6723). |
| [#6893](https://github.com/agentscope-ai/QwenPaw/issues/6893) | Feature (closed) | 7 | **LaTeX formula rendering broken**; session grouping; active session background highlight. Formula rendering is a recurring pain point (see #5453, #4756). |
| [#6918](https://github.com/agentscope-ai/QwenPaw/issues/6918) | Bug (open) | 2 | **Inter-agent messages spawn shadow sessions** — duplicate DB writes, memory leaks. Architectural concern for multi-agent workflows. |
| [#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916) | Security (open) | 1 | **Plugins silently create cron jobs & inject messages** without user approval. Permission model gap in Apps marketplace. |
| [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) | Bug (closed) | 2 | **Desktop v2.1.0b1 injects PYTHONHOME** → every Python subprocess crashes. Critical regression for desktop users. |

**Underlying themes**:  
- **Reliability of long-running processes** (MCP, desktop env, inter-agent)  
- **Rich-text/math rendering parity** with Cherry Studio, VS Code  
- **Security boundaries** for third-party plugins  
- **Session/conversation management** at scale (grouping, inbox, history)

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR / Notes |
|---|---|---|---|
| **Critical** | [#6919](https://github.com/agentscope-ai/QwenPaw/issues/6919) — Frequent crashes in v2.0.1 (console channel `process/reply` traceback) | Open | No fix PR yet; stack trace points to channel handler. Blocking for pip/virtualenv users. |
| **Critical** | [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) — Desktop injects `PYTHONHOME` → `ModuleNotFoundError: encodings` | Closed | Likely fixed in subsequent beta (no explicit PR linked); verify in beta.3/beta.4. |
| **High** | [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) — MCP tools periodically fail, need restart | Closed | Addressed by provider cache expiry fix [#6723](https://github.com/agentscope-ai/QwenPaw/pull/6723) (merged in beta.3). |
| **High** | [#6918](https://github.com/agentscope-ai/QwenPaw/issues/6918) — Inter-agent messages spawn new agent session per message | Open | No fix PR; architectural — needs session routing consolidation. |
| **Medium** | [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) — MCP tool call timeout (default 120s) | Open PR | Adds configurable timeout; closes #6724, related #3997. Under review. |
| **Medium** | [#6873](https://github.com/agentscope-ai/QwenPaw/pull/6873) — Legacy local-path media sources break session load | Open PR | Normalizes `file://` paths; first-time contributor. Under review. |
| **Low** | [#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453), [#4756](https://github.com/agentscope-ai/QwenPaw/issues/4756) — LaTeX/KaTeX rendering poor | Closed (duplicate?) | Partially addressed by [#6911](https://github.com/agentscope-ai/QwenPaw/pull/6911) (unified code blocks with LaTeX preview tabs). |

**Stability signal**: Two critical crash bugs open (#6919, #6918) with no fix PRs — should be prioritized for beta.4 or hotfix.

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for v2.1.0 / Next |
|---|---|---|
| **Per-session model overrides** | [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) (PR, under review) | **High** — large PR, opt-in, preserves defaults; aligns with "Agent controls" unification. |
| **Unified marketplace (apps/plugins/skills)** | [#6880](https://github.com/agentscope-ai/QwenPaw/pull/6880) (PR, under review) | **High** — UI consolidation, routes defined; ready for merge. |
| **Agent → Inbox delivery (structured, non-chat)** | [#6917](https://github.com/agentscope-ai/QwenPaw/issues/6917) | **Medium** — core backend change; may slip to v2.2. |
| **Configurable MCP tool timeout** | [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | **High** — PR open, closes known issue, trivial config addition. |
| **Desktop window geometry persistence** | [#6877](https://github.com/agentscope-ai/QwenPaw/pull/6877) | **High** — small Tauri plugin integration, UX polish. |
| **AnySearch web search (replace Tavily)** | [#6817](https://github.com/agentscope-ai/QwenPaw/pull/6817) | **Medium** — external dependency, MCP env-ref fixes included; under review. |
| **Font size / DPI scaling (Desktop)** | [#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154) | **Low** — old issue, no PR; may need webview zoom API. |
| **Session grouping / active session highlight** | [#6893](https://github.com/agentscope-ai/QwenPaw/issues/6893) | **Medium** — UI work; closed as "will address" but no PR yet. |
| **CopilotKit integration example** | [#6882](https://github.com/agentscope-ai/QwenPaw/issues/6882) | **Low** — docs/example request; not core roadmap. |

**Prediction**: v2.1.0 stable will likely include per-session models, unified marketplace, MCP timeout, desktop geometry, and the code-block/LaTeX render overhaul. Inbox delivery and session grouping are v2.2 candidates.

---

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|---|---|---|
| **MCP reliability** | #6732 (10 comments), #6724 (timeout PR) | 😡 Frustrated — "every few hours tools die, must restart container" |
| **Math rendering** | #6893, #5453, #4756, #6911 (fix) | 😞 Disappointed — "Cherry Studio does it, why not QwenPaw?" |
| **Desktop crashes / env leakage** | #6697, #6919 | 😡 Blocking — "every python subprocess crashes" / "frequent crashes in v2.0.1" |
| **Session management at scale** | #6893 (grouping), #6917 (inbox), #6918 (shadow sessions) | 😐 Needs improvement — power users want Inbox, grouping, no leaks |
| **Plugin security** | #6916 | 😟 Concerned — "plugins can inject messages & create cron jobs silently" |
| **Positive** | #6911 (code blocks), #6915 (file previews), #6907 (custom gateways) | 😊 Appreciated — "unified code blocks look great", "finally custom gateway support" |

**Net satisfaction**: Mixed. Core developers / early adopters are vocal about regressions in v2.1.0 betas, but acknowledge rapid fixes. LaTeX and font scaling are long-standing UX debts.

---

## 8. Backlog Watch — Stale / High-Value Items Needing Attention
| Item | Age | Why It Matters | Suggested Action |
|---|---|---|---|
| [#6919](https://github.com/agentscope-ai/QwenPaw/issues/6919) — Console channel crash traceback | 1 day (new but critical) | Blocks pip/virtualenv users; no fix PR | Assign maintainer to triage stack trace; consider hotfix. |
| [#6918](https://github.com/agentscope-ai/QwenPaw/issues/6918) — Inter-agent shadow sessions | 1 day | Architectural bug in multi-agent; data integrity risk | Link to context/memory refactor [#6779](https://github.com/agentscope-ai/QwenPaw/pull/6779) or [#6830](https://github.com/agentscope-ai/QwenPaw/pull/6830). |
| [#6916](https://github.com/agentscope-ai/Q

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-12

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 50 PRs updated in the last 24 hours (49 open, 1 closed), though only 3 issues were updated. The single merged PR (#9936) is a security/correctness sync cherry-picking 9 upstream fixes — indicating active maintenance of downstream forks. No new releases were cut. The open PR backlog is substantial (49 active), with many tagged `needs-author-action` and `risk:high`, suggesting review bandwidth may be a bottleneck. Three new issues surfaced today/tomorrow covering RFC process reform, a flaky macOS/BSD test, and a WhatsApp Business mode bug — all labeled `priority:p1` or `severity:S2`.

---

## 2. Releases

**No new releases** published today.

---

## 3. Project Progress (Merged/Closed PRs)

| PR | Type | Summary |
|----|------|---------|
| [#9936](https://github.com/zeroclaw-labs/zeroclaw/pull/9936) | **Security/Correctness Sync** (CLOSED) | Cherry-picked 9 upstream security and correctness fixes from `zeroclaw-labs/zeroclaw` master (merge-base f3023663, 2026-07-26). Two additional planned fixes (#9452, #8936) were already present via Wave C2 intake (#45). |

*Only 1 PR merged today — a maintenance sync. Feature work remains in open PRs.*

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) — **RFC: Streamline RFC scope, discussion, voting, and assignment** | 8 comments, `priority:p1`, `risk:high`, `status:accepted` | Contributors find the RFC process too slow (7-day minimum discussion, broad unanimity, manual vote coordination). Need lighter-weight governance for architectural/security decisions. |
| [#9645](https://github.com/zeroclaw-labs/zeroclaw/pull/9645) — **feat(providers): ZeroRouter preset and device-flow login** | Updated today, `priority:p1`, `risk:high`, `size:L`, `distinguished contributor` | First-class support for ZeroClaw's own metered LLM gateway (ZeroRouter) with device-flow auth — strategic provider integration. |
| [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) — **fix(tools): add allowed_private_hosts opt-in to file_download SSRF gate** | Open since 2026-07-04, `risk:high`, `size:XL`, `principal contributor` | Critical SSRF hardening for `file_download` tool; allows operator-configured private-host allowlist. Long review cycle suggests complexity. |
| [#9385](https://github.com/zeroclaw-labs/zeroclaw/pull/9385) — **feat(channels): implement request_approval for WhatsApp Web** | `priority:p2`, `risk:high`, `size:XL`, many labels | Enables human-in-the-loop approval for tools in `always_ask` via WhatsApp Web — key for enterprise/compliance workflows. |
| [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) — **feat(runtime): anchor context compaction to model window ratio** | `priority:p1`, `risk:high`, `size:XL`, `principal contributor` | Replaces absolute token budgets with ratio-based context compaction (`context_compact_ratio`) — improves cross-model portability. |

**Pattern:** High-risk, high-priority PRs from distinguished/principal contributors dominate attention. Governance (RFC), provider ecosystem (ZeroRouter), security (SSRF), and channel UX (WhatsApp approval) are the four active fronts.

---

## 5. Bugs & Stability (Reported Today)

| Issue | Severity | Component | Fix PR? |
|-------|----------|-----------|---------|
| [#9934](https://github.com/zeroclaw-labs/zeroclaw/issues/9934) — **test(tools): chunked_response test servers never drain the request — flaky on macOS/BSD** | Flaky test (CI reliability) | `tools` / test infra | No PR yet (created today) |
| [#9933](https://github.com/zeroclaw-labs/zeroclaw/issues/9933) — **WhatsApp Web business mode reacts to own-account outbound messages** | **S2 - degraded** | `channel:whatsapp` | No PR yet (created yesterday) |
| [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) (referenced in [#9885](https://github.com/zeroclaw-labs/zeroclaw/pull/9885)) — **SOP `sops_dir` default not honored in daemon** | Config regression | `core` / `runtime` | **Yes** — [#9885](https://github.com/zeroclaw-labs/zeroclaw/pull/9885) (`priority:p1`, `risk:high`) |
| [#9719](https://github.com/zeroclaw-labs/zeroclaw/issues/9719) (referenced in [#9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748)) — **Stale provider refreshes mutate replacement sessions** | Session corruption risk | `runtime` | **Yes** — [#9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748) (`priority:p2`, `risk:high`) |

**Top concern:** WhatsApp Business mode bug (#9933) is the only user-facing S2 regression reported today. The flaky test (#9934) blocks CI reliability on macOS/BSD. Two older regressions (#9779, #9719) have fix PRs awaiting review.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **ZeroRouter as first-class provider** (device-flow auth, metered gateway) | [#9645](https://github.com/zeroclaw-labs/zeroclaw/pull/9645) | **High** — `priority:p1`, distinguished contributor, strategic |
| **Ratio-based context compaction** (`context_compact_ratio`) | [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) | **High** — `priority:p1`, principal contributor, runtime core |
| **WhatsApp Web `request_approval`** (human-in-the-loop) | [#9385](https://github.com/zeroclaw-labs/zeroclaw/pull/9385) | **Medium-High** — `priority:p2`, large scope, compliance driver |
| **SSRF gate for `file_download` with private-host allowlist** | [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) | **Medium** — security-critical but stalled 40+ days |
| **KeySource trait + FileKeySource backend** (secrets abstraction) | [#9194](https://github.com/zeroclaw-labs/zeroclaw/pull/9194) | **Medium** — foundational, `priority:p2`, `size:XL` |
| **PWA manifest / installable dashboard icons** | [#9926](https://github.com/zeroclaw-labs/zeroclaw/pull/9926) | **Low-Medium** — polish, merged quickly if reviewed |
| **RFC process overhaul** (lighter governance) | [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) | **Process** — not code, but may unblock future PR velocity |

**Prediction:** ZeroRouter provider + context compaction ratio are the strongest candidates for the next minor release. WhatsApp approval and SSRF fix are high-value but may need more review cycles.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **RFC process too slow** | [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496): "7-day minimum discussion, broad unanimity, manual vote coordination" | Slows architectural decisions; contributors frustrated |
| **WhatsApp Business mode broken for own-message filtering** | [#9933](https://github.com/zeroclaw-labs/zeroclaw/issues/9933): `fromMe` guard only in personal branch | Business users see duplicate/self-replies — S2 degradation |
| **Flaky tests on macOS/BSD** | [#9934](https://github.com/zeroclaw-labs/zeroclaw/issues/9934): chunked_response servers drop unread socket data | CI failures on Apple/BSD; blocks contributor workflows |
| **SOP config default ignored** | [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) → [#9885](https://github.com/zeroclaw-labs/zeroclaw/pull/9885): documented `<workspace>/sops` not used | Users expect SOPs to load from workspace; silent misconfiguration |
| **Session corruption from stale provider refresh** | [#9719](https://github.com/zeroclaw-labs/zeroclaw/issues/9719) → [#9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748) | Race condition on session replacement — potential data loss |

**No direct end-user feedback** (e.g., Discord, forums) in this dataset — all signals are from contributors/maintainers via Issues/PRs.

---

## 8. Backlog Watch (Long-Open High-Value Items Needing Attention)

| Item | Age | Labels | Why It Matters |
|------|-----|--------|----------------|
| [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) — **SSRF gate for `file_download`** | **40 days** (2026-07-04) | `bug`, `security`, `risk:high`, `size:XL`, `principal contributor`, `needs-author-action` | Critical security fix; allows private-host allowlist. Stalled despite principal contributor. |
| [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) — **SandboxPolicyConfig schema & risk field** | **56 days** (2026-06-17) | `enhancement`, `security`, `risk:high`, `size:XL`, `needs-author-action`, `stale-candidate` | Foundational sandbox config model; refs #6996. Marked `stale-candidate` — may need champion. |
| [#9194](https://github.com/zeroclaw-labs/zeroclaw/pull/9194) — **KeySource trait + FileKeySource** | **23 days** (2026-07-20) | `enhancement`, `security:secrets`, `risk:high`, `size:XL`, `needs-author-action` | Secrets abstraction for master key provisioning; enables HSM/KMS backends. |
| [#8902](https://github.com/zeroclaw-labs/zeroclaw/pull/8902) — **Route bidirectional JSON-RPC responses** | **34 days** (2026-07-09) | `bug`, `runtime`, `risk:high`, `channel:acp`, `needs-author-action` | Unblocks ZeroCode ask-user/poll interactions; ACP protocol completeness. |
| [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) — **Rotate live credentials after rate limits** | **17 days** (2026-07-26) | `bug`, `provider`, `risk:high`, `size:XL`, `distinguished contributor`, `needs-author-action` | Provider reliability — per-credential cooldown on 429. High-value for production. |

**Maintainer action needed:** Review bandwidth appears constrained. The 5 items above are all `risk:high` + `needs-author-action` with principal/distinguished contributors — clearing even 2–3 would significantly reduce security/stability risk.

---

## Project Health Indicators

| Metric | Status |
|--------|--------|
| **Release cadence** | ❌ No release today; last release date unknown from data |
| **PR throughput** | ⚠️ 50 updated / 1 merged — high churn, low merge rate |
| **Review backlog** | ⚠️ 49 open PRs, many `needs-author-action` + `risk:high` |
| **Security posture** | ✅ Active (SSRF, sandbox, secrets, credential rotation in flight) |
| **CI reliability** | ⚠️ Flaky test on macOS/BSD reported today (#9934) |
| **Governance** | 🔄 RFC reform proposed (#9496) — may improve velocity long-term |

**Bottom line:** ZeroClaw is in a **high-activity, pre-release consolidation phase** — lots of foundational work (providers, runtime, security, channels) in review, but merge throughput is low. The RFC overhaul (#9496) signals awareness of process drag. Prioritizing review of the 5 backlog-watch PRs would unblock significant value.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*