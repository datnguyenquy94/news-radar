# OpenClaw Ecosystem Digest 2026-08-05

> Issues: 188 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-05 03:18 UTC

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

# OpenClaw Project Digest — 2026-08-05

## 1. Today's Overview
OpenClaw shows **extremely high velocity** with 188 issues and 500 PRs updated in the last 24 hours. The project is in a heavy stabilization phase: 111 PRs were merged/closed today, indicating active bug-fix throughput. No new release was cut, suggesting the team is still clearing critical regressions (multiple P0/P1 session-state and message-loss bugs) before shipping. The issue backlog is dominated by **session-state integrity**, **realtime voice reliability**, **gateway performance**, and **multi-agent fleet stability** — all marked with high-severity ratings (🦞 diamond lobster, 🦐 gold shrimp). Community engagement is strong: top issues have 50+ comments, and maintainers are actively triaging with `clawsweeper` automation labels.

## 2. Releases
**No new releases today.** The latest version remains `2026.7.2-beta.7` (per issue #118846). The team appears to be holding the release train to resolve a cluster of P0/P1 regressions around session compaction, token accounting, and gateway main-thread saturation before promoting to stable.

## 3. Project Progress (Merged/Closed PRs Today — 111 total)
Key merged/closed work (inferred from PR titles and linked issues):

| PR | Area | Impact |
|----|------|--------|
| [#118796](https://github.com/openclaw/openclaw/pull/118796) | Session / CLI | Fixes token inflation causing premature compaction at 4–8% of context window (P0 data-loss, #118772) |
| [#119130](https://github.com/openclaw/openclaw/pull/119130) | Tasks / Flows | Prefers newest live flow for owner-key lookup, avoiding terminal-flow misrouting |
| [#119169](https://github.com/openclaw/openclaw/pull/119169) | Channels / Delivery | Treats `adapter_returned_no_identity` as potentially visible, preventing silent message drops |
| [#119416](https://github.com/openclaw/openclaw/pull/119416) | Media / Refactor | Shares image/video geometry normalization across providers (LOC reduction campaign) |
| [#119421](https://github.com/openclaw/openclaw/pull/119421) | Config / Gateway | Preserves plugin metadata for missing config, fixing false validation failures on fresh installs |
| [#118467](https://github.com/openclaw/openclaw/pull/118467) | Agents / Perf | Stops full session history re-clone for hooks on every model iteration (CPU starvation fix) |
| [#117363](https://github.com/openclaw/openclaw/pull/117363) | Web UI / Gateway | Bounds stalled widget content fetches in sandbox host (availability) |
| [#118965](https://github.com/openclaw/openclaw/pull/118965) | QA / OTEL | Adds managed OTEL runtime path coverage (automation proof) |
| [#119211](https://github.com/openclaw/openclaw/pull/119211) | Talk / Gateway | Cancels realtime output without aborting the turn (session-state) |
| [#119127](https://github.com/openclaw/openclaw/pull/119127) | Media / Gateway | Keeps TTL sweep out of managed outgoing tree, preventing attachment loss (#119088) |
| [#118377](https://github.com/openclaw/openclaw/pull/118377) | Channels / Draft | Stops draft-stream seal from leaking queued updates (message-delivery) |
| [#119447](https://github.com/openclaw/openclaw/pull/119447) | Compaction | Stops large input reserve from inflating summary output cost |
| [#119295](https://github.com/openclaw/openclaw/pull/119295) | Web UI / WebRTC | Prevents oversized SDP answers from hanging Talk setup |
| [#116369](https://github.com/openclaw/openclaw/pull/116369) | Gateway / Control UI | Warns and retries raw close on media handle failures (availability) |
| [#118012](https://github.com/openclaw/openclaw/pull/118012) | QA / Codex | Replaces false Codex pin compatibility evidence in maturity reports |
| [#119415](https://github.com/openclaw/openclaw/pull/119415) | Signal / Refactor | Shares outbound and reaction transport (LOC reduction) |
| [#119377](https://github.com/openclaw/openclaw/pull/119377) | Gateway / Agents | Keeps post-ready context cache warming responsive (session-state) |
| [#119451](https://github.com/openclaw/openclaw/pull/119451) | Plugins / Refactor | Reuses canonical error coercion across 7 bundled plugins |
| [#119434](https://github.com/openclaw/openclaw/pull/119434) | CLI / Refactor | Consolidates repeated command registration (LOC reduction) |
| [#76806](https://github.com/openclaw/openclaw/pull/76806) | Agents / Compaction | **Closed** — adds circuit breaker for irreducible context overflow (DoS prevention) |

**Themes:** Session compaction correctness, gateway main-thread health, realtime voice (Talk) stability, message-delivery guarantees, and a maintainer-driven **production LOC reduction campaign** (shared media geometry, Signal transport, CLI commands, plugin error coercion).

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Core Need |
|------|----------|-----------|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) **Realtime voice: unbounded provider/consult state retention** | 58 | Hard resource bounds for realtime sessions; prevent memory/frame leaks under bursty/slow providers |
| [#118846](https://github.com/openclaw/openclaw/issues/118846) **Gateway main thread saturated by plugin-metadata snapshotting + fs statting** | 15 | Async/off-main-thread plugin metadata loading; accept-loop starvation kills local RPC (ws_upgrade 1006) |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) **Session transcript projection livelock under sustained writes** | 13 | Async/batched transcript projection to avoid main-thread stall blocking all channel transports |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) **Subagent completion delivery lost on timeout/drain/orphan prune** | 10 | Durable fallback queue for subagent announces; survive gateway restarts and requester run transitions |
| [#111498](https://github.com/openclaw/openclaw/issues/111498) **Main agent blocked by persistent workspace-state migration after Anthropic auth recovery** | 9 | Migration idempotency + cleanup; avoid blocking on legacy state after credential recovery |
| [#92433](https://github.com/openclaw/openclaw/issues/92433) **Subagent completion silently dropped when steered into ending requester run** | 9 | Ensure steered completions persist if requester run ends before processing |
| [#95610](https://github.com/openclaw/openclaw/issues/95610) **Prompt-cache prefix churn on OpenAI models (dynamic injections defeat caching)** | 8 | Stabilize cached prefix: move per-turn dynamic content (tool hints, volatile system sections) outside cacheable region |
| [#118785](https://github.com/openclaw/openclaw/issues/118785) **QA: primary proof for 23 containers + 31 external app SDK IDs** | 8 | Formal QA sign-off for newly audited container/SDK surface; taxonomy binding (`app-sdk` = `@openclaw/sdk`) |
| [#107873](https://github.com/openclaw/openclaw/issues/107873) **Embedded prompt-lock takeover aborts WebChat turns after tool failure** | 7 | Retry instead of abort on `EmbeddedAttemptSessionTakeoverError`; preserve user-visible turn |
| [#116116](https://github.com/openclaw/openclaw/issues/116116) **Model registry: anthropic catalog.json violates schema + unguarded cost deref crashes `openclaw models`** | 6 | Schema validation on generated catalogs; guard cost-field access in CLI commands |

**Underlying needs:**  
- **Session durability** — users lose work on compaction, migration, or subagent handoff.  
- **Gateway responsiveness** — main-thread saturation from sync I/O (fs, SQLite, metadata) is a systemic bottleneck.  
- **Realtime voice maturity** — Talk/relay/GPT-Live paths need bounded state, proper cancellation semantics, and auth routing fixes (see PRs #119209, #119210, #119212, #119321).  
- **OpenAI cache efficiency** — dynamic prompt injections defeat automatic prefix caching, raising cost/latency.  
- **QA velocity** — maintainers are formalizing proof requirements for container/SDK eligibility.

## 5. Bugs & Stability (Reported/Updated Today, Ranked by Severity)

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P0** | [#118772](https://github.com/openclaw/openclaw/issues/118772) | `sessionEntry.totalTokens` inflated by cumulative run usage → premature compaction at 4–8% context (data loss) | ✅ [#118796](https://github.com/openclaw/openclaw/pull/118796) (open, waiting on author) |
| **P0** | [#119445](https://github.com/openclaw/openclaw/issues/119445) | Image `tool_result` base64 payloads count toward CLI output limit but never read → aborts photo-heavy turns | ❌ (new today) |
| **P1** | [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime voice retains unbounded provider/consult state (session-state) | ❌ |
| **P1** | [#118846](https://github.com/openclaw/openclaw/issues/118846) | Gateway main thread 100% saturated by plugin-metadata snapshotting + fs statting → accept loop starved | ❌ |
| **P1** | [#115908](https://github.com/openclaw/openclaw/issues/115908) | Transcript projection livelock under sustained writes → stalls all channel transports | ❌ |
| **P1** | [#115904](https://github.com/openclaw/openclaw/issues/115904) | SQLite compaction re-counts/replays history before latest compaction boundary → repeated cycles | ❌ |
| **P1** | [#115700](https://github.com/openclaw/openclaw/issues/115700) | `chat.send` rejected with "thread switched branches" after model completes — stale `expectedLeafEntryId` | ❌ |
| **P1** | [#118185](https://github.com/openclaw/openclaw/issues/118185) | Single claude-cli turn written twice by two writers with different assembly rules | ❌ |
| **P1** | [#118706](https://github.com/openclaw/openclaw/issues/118706) | Workboard card lists stall gateway >2 min on large boards (N+1 SQLite loads) | ❌ |
| **P1** | [#116452](https://github.com/openclaw/openclaw/issues/116452) | Isolated cron sessions cannot execute shell commands (exec tool hangs) | ❌ |
| **P1** | [#116964](https://github.com/openclaw/openclaw/issues/116964) | Docker-sandboxed `apply_patch` fails on rw-mounted paths with empty failure payload | ❌ |
| **P1** | [#119333](https://github.com/openclaw/openclaw/issues/119333) | Codex `request_user_input` exposed in Default mode but rejected at runtime | ❌ |
| **P2** | [#95610](https://github.com/openclaw/openclaw/issues/95610) | OpenAI prompt-cache prefix churn from per-turn dynamic injections | ❌ |
| **P2** | [#95840](https://github.com/openclaw/openclaw/issues/95840) | `contextPruning mode: cache-ttl` never fires for OpenAI (provider excluded) | ❌ |
| **P2** | [#116512](https://github.com/openclaw/openclaw/issues/116512) | Telegram progress duplicates first commentary when snapshot IDs change | ❌ |
| **P2** | [#118560](https://github.com/openclaw/openclaw/issues/118560) | WebChat canvas hides earlier messages after main session reset | ❌ |
| **P2** | [#117609](https://github.com/openclaw/openclaw/issues/117609) | Transient LLM/socket errors retried for channels/jobs but not embedded-assistant stage | ❌ |
| **P2** | [#116691](https://github.com/openclaw/openclaw/issues/116691) | OpenAI-responses + 火山引擎: long conversations fail with missing `input.status` | ❌ |
| **P2** | [#116893](https://github.com/openclaw/openclaw/issues/116893) | Browser-click-created tabs not tracked/cleaned up (escape idle/cap sweeper) | ❌ |
| **P2** | [#117644](https://github.com/openclaw/openclaw/issues/117644) | Agent emits Unix commands (`head`, `~`) in PowerShell on Windows | ❌ |

**Critical cluster:** Session compaction/token accounting (#118772, #115904), gateway main-thread saturation (#118846, #118706), realtime voice unbounded state (#116201), and message-delivery races (#118185, #115700). Only **#118772 has an active fix PR** (#118796) — others lack linked PRs in the dataset.

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|----------------------------|
| [#46058](https://github.com/openclaw/openclaw/issues/46058) **Chat-first Android surface** | External fork validation; maintainer discussion on focused upstreaming | Medium — maintainers open to focused contributions, not full fork |
| [#14079](https://github.com/openclaw/openclaw/issues/14079) **Linux desktop notifications** | Long-standing gap (macOS has `osascript`); `notify-send`/D-Bus needed | High — low complexity, high user visibility |
| [#80752](https://github.com/openclaw/openclaw/issues/80752) **Optional model override in CommitmentsConfig** | Mirrors `active-memory`/`compaction` precedent; clear pattern | High — small, precedent-backed, maintainer-acknowledged |
| [#9409](https://github.com/openclaw/openclaw/issues/9409) **Improve context overflow error with specifics** | Add model limit, current usage, offending message IDs to error | High — UX friction reducer, straightforward |
| [#16555](https://github.com/openclaw/openclaw/issues/16555) **TTL/Expiry for delivery queue messages** | Prevent stale queue flooding on gateway restart |

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-08-05 | **Projects Analyzed:** 12 active repositories

---

## 1. Ecosystem Overview
The personal AI agent ecosystem is in a **consolidation and hardening phase**. Core platforms (OpenClaw, IronClaw, ZeroClaw, Hermes) are prioritizing session durability, gateway performance, and security boundaries over new features. A clear bifurcation exists: **enterprise-grade fleet platforms** (OpenClaw, IronClaw) investing in multi-agent orchestration and lossless migrations, versus **desktop-first assistants** (CoPaw, LobsterAI, Hermes) racing toward Cursor/Claude Desktop UX parity. Cross-project convergence is visible on WASM sandboxing, unified channel delivery, and autonomous execution controls. Community sizes vary by 100x (OpenClaw: 50+ comment threads vs. NullClaw: zero engagement), but all active projects show disciplined PR hygiene and test-driven stabilization.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Release Today | Health Score | Activity Tier |
|---------|--------------|-----------|---------------|---------------|--------------|---------------|
| **OpenClaw** | 188 | 500 | 111 | No | 7.0/10 | 🔥 Critical Mass |
| **IronClaw** | 8 (7 new) | 50 | 17 | No | 8.0/10 | 🔥 Pre-Release Sprint |
| **CoPaw (QwenPaw)** | 19 | 45 | 18 | No (beta.1 blocked) | 7.0/10 | 🔥 Beta Stabilization |
| **ZeroClaw** | 8 | 50 | 2 | No | 7.0/10 | 🔥 RFC-Driven Redesign |
| **NanoBot** | 4 new | 26 | 19 | No | 7.5/10 | ⚡ High Velocity |
| **Hermes Agent** | 11 (5 new) | 50 | 1 | No | 6.5/10 | ⚡ Growing Backlog |
| **LobsterAI** | 0 | 11 | 11 | No (v2026.8.3 yesterday) | 6.5/10 | ⚡ Maintenance Cadence |
| **NanoClaw** | 0 | 5 | 1 | No | 7.5/10 | 🟢 Steady Progress |
| **PicoClaw** | 3 | 4 | 0 | No | 5.0/10 | 🟡 Moderate / Stalled Bugs |
| **NullClaw** | 0 | 1 | 0 | No | 4.0/10 | 🟡 Low Activity |
| **Moltis** | 0 | 1 (dependabot) | 0 | No | 5.0/10 | 🔵 Quiet Maintenance |
| **ZeptoClaw** | 0 | 0 | 0 | No | 2.0/10 | ⚫ Inactive |

*Health Score factors: velocity, bug severity/unaddressed criticals, community engagement, release cadence, maintainer responsiveness.*

---

## 3. OpenClaw's Position
**Advantages vs. Peers:**
- **Scale & Automation:** 10x PR volume of nearest peer; `clawsweeper` automation for triage/labeling is unique.
- **Session-State Maturity:** Only project with dedicated compaction correctness campaign (token accounting, projection livelocks, SQLite replay bugs).
- **Realtime Voice Investment:** Deepest Talk/relay/GPT-Live stack with bounded-state, cancellation, and auth routing work.
- **LOC Reduction Campaign:** Systematic cross-cutting refactors (media geometry, Signal transport, CLI commands, plugin errors) reduce maintenance surface.

**Technical Approach Differences:**
- **Monolithic Gateway** vs. peers' modular/skill-based (NanoClaw, IronClaw) or desktop-first (CoPaw, LobsterAI) architectures.
- **Production-Hardening First:** Blocks release train for P0 data-loss bugs; peers ship betas with known regressions.
- **Multi-Agent Fleet Focus:** Native subagent completion durability, steering, and handoff — absent in most peers.

**Community Size:** Largest by an order of magnitude (top issues: 58, 15, 13 comments). Maintainers operate at platform-team scale; peers are single-maintainer or small collectives.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Session Durability & Context Management** | OpenClaw, Hermes, CoPaw, ZeroClaw, IronClaw | Compaction correctness (OpenClaw #118772), memory pools (Hermes #16833), scroll/compression hooks (CoPaw #6624), Goal Mode checkpointing (ZeroClaw #8303), lossless migration (IronClaw #7198) |
| **Gateway/Main-Thread Performance** | OpenClaw, Hermes, IronClaw | Plugin metadata snapshotting (OpenClaw #118846), transcript projection livelock (OpenClaw #115908), Windows smoke tests (IronClaw #7200), update hang (Hermes #79040) |
| **Channel/Transport Reliability** | OpenClaw, NanoBot, NanoClaw, IronClaw, CoPaw, ZeroClaw | Message-delivery races (OpenClaw #118185), Matrix retry/backoff (NanoBot #5247, CoPaw #6684), Discord approval parsing (NanoClaw #3185), two-lane delivery (IronClaw #7157), unified attachments (ZeroClaw #9488) |
| **Security Hardening** | NanoBot, Hermes, IronClaw, ZeroClaw, LobsterAI | API key isolation (NanoBot #4784), plugin severity tiers (Hermes #33186), webhook auth fail-closed (ZeroClaw #9565), browser sandbox escapes (ZeroClaw #9362), agent key leakage (LobsterAI #1202) |
| **Provider Abstraction & Registry** | NanoBot, PicoClaw, NullClaw, ZeroClaw, CoPaw | Metasearch provider (NanoBot #5234), Exa search (PicoClaw #3299), Grok CLI (NullClaw #981), endpoint registry unification (ZeroClaw #9595), DeepSeek/OpenRouter compat (CoPaw #6667, #6687) |
| **Desktop UX Parity** | LobsterAI, Hermes, CoPaw, IronClaw, PicoClaw | Artifact preview toggle (LobsterAI #2425), file drag-and-drop original path (CoPaw #6642), global rules/.agent files (CoPaw #6694), WebUI optimistic ordering (IronClaw #7192), input lag (PicoClaw #3281) |
| **Autonomous Execution Controls** | OpenClaw, Hermes, CoPaw, ZeroClaw, IronClaw | Auto-continue on tool limit (Hermes #16004), on-demand skill loading (CoPaw #6699), Goal Mode bounded execution (ZeroClaw #8303), manual automation trigger (IronClaw #7193) |
| **WASM Sandbox Adoption** | IronClaw, ZeroClaw | Nostr host functions (IronClaw #7184), Rust→Wasm UI migration (ZeroClaw #8132), diagnostics sanitization (IronClaw #7048) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | ZeroClaw | Hermes | CoPaw | NanoBot | LobsterAI | NanoClaw | PicoClaw |
|-----------|----------|----------|----------|--------|-------|---------|-----------|----------|----------|
| **Primary Target** | Enterprise fleets, multi-agent orchestration | Sovereign agents, WASM sandbox, Nostr integration | RFC-driven architecture, Goal Mode, A2A protocol | Federated agents, plugin security, memory isolation | Chinese-market desktop, WeChat/Matrix channels | Multi-channel gateway, WebUI polish | Consumer desktop (Electron), credit campaigns | Skill-based, telephony (Dial) channels | Lightweight, provider ecosystem |
| **Architecture** | Monolithic gateway, session-centric | Capability-based, WASM tools, layered governance | Virtual providers (MoA), unified attachments, Wasm UI | Distributed orchestrator, project-scoped memory | Tauri desktop, skill system, plugin namespace | Gateway + adapters, trusted-proxy auth | Electron + React, artifact preview | Skill-owned capabilities via host seams | Minimal core, provider delegation |
| **Differentiator** | Session compaction correctness, realtime voice maturity | Two-lane delivery, Nostr signing, architectural ratchets | Goal Mode, MoA, A2A client, shell confirmation tiers | Project memory pools, auto-continue, plugin audit | WeChat iLink, skill token optimization, OS integration | Matter

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-05

## 1. Today's Overview

NanoBot shows **high development velocity** with 26 PRs updated and 19 merged/closed in the last 24 hours, indicating an active maintenance and feature cycle. The project is currently in a **refinement and stabilization phase** — WebUI improvements, provider integrations, and channel bug fixes dominate. No new release was cut today. Four new issues were opened, three of which are security/stability bugs (API key leakage, MCP error handling, Matrix join regression), signaling attention to production reliability. The closed PRs show a pattern of small, targeted fixes with tests, suggesting disciplined engineering practices.

## 2. Releases

**No new releases today.** The latest published version remains prior to 2026-08-05.

## 3. Project Progress (Merged/Closed PRs — 2026-08-04 to 2026-08-05)

| PR | Area | Summary | Priority |
|----|------|---------|----------|
| [#5238](https://github.com/HKUDS/nanobot/pull/5238) | Session/Tools | Removed request-scoped access grants (`Tool.available()`), simplified to construction-time `Tool.enabled()`; deleted `SessionAccessScope` abstraction. | P1 |
| [#5233](https://github.com/HKUDS/nanobot/pull/5233) | Mattermost/WebUI | Added `groupPolicyInThread` config for separate mention policies in threads vs. channels; exposed in WebUI. | P2 |
| [#5223](https://github.com/HKUDS/nanobot/pull/5223) | WeCom | Fixed media download crash when filename sanitization yields empty string (fallback to generated name). | P2 |
| [#5222](https://github.com/HKUDS/nanobot/pull/5222) | Telegram | Fixed fenced code block rendering for languages with special chars (`c++`, `objective-c`, `html+django`). | P2 |
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) | WebUI/Security | Added opt-in trusted-proxy bootstrap auth for `/webui/bootstrap` (Cloudflare Tunnel/Access support). | P1 |
| [#5244](https://github.com/HKUDS/nanobot/pull/5244) | WebUI | Render Markdown in prompt-rail hover previews (assistant snippets only). | P2 |
| [#5245](https://github.com/HKUDS/nanobot/pull/5245) | WebUI | Unified timestamp tooltip styling; made timestamps keyboard-accessible. | P2 |
| [#5240](https://github.com/HKUDS/nanobot/pull/5240) | WebUI | Unified floating controls (Menu, Popover, Combobox) with shared styling and semantics. | — |
| [#5243](https://github.com/HKUDS/nanobot/pull/5243) | WebUI | Moved automation trigger marker to footer beside timestamp; added hover tooltip with automation name. | P2 |
| [#5242](https://github.com/HKUDS/nanobot/pull/5242) | Commands | Reject malformed slash commands with suggestion for closest match; persist as command-only history. | P2 |
| [#5239](https://github.com/HKUDS/nanobot/pull/5239) | WebUI/DevX | Added `nanobot webui --dev` for integrated Vite HMR dev mode with gateway readiness checks. | P1 |
| [#5241](https://github.com/HKUDS/nanobot/pull/5241) | WebUI | Refined inline token highlights (solid accent, semibold, removed glow). | P2 |
| [#5250](https://github.com/HKUDS/nanobot/pull/5250) | WebUI | Added direction-aware feathering to clipped activity panes; regression tests for scroll states. | P2 |
| [#1776](https://github.com/HKUDS/nanobot/pull/1776) | Telegram | Added missing `group_mode` field to `TelegramConfig` (was silently ignored). | — |

**Net advancement:** Session authorization simplified, Mattermost thread policy exposed, WeCom/Telegram hardening, WebUI polish (dev mode, tooltips, Markdown previews, floating controls, activity pane), command validation, and security bootstrap for proxied deployments.

## 4. Community Hot Topics

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) | Issue (Security) | 2 | **Provider API key isolation** — global `os.environ` mutation leaks keys across providers; critical for multi-tenant/gateway deployments. |
| [#5237](https://github.com/HKUDS/nanobot/issues/5237) | Issue (Bug) | 1 | **MCP error envelope handling** — `isError=false` with error payload treated as success; agent cannot retry or surface failure. |
| [#5247](https://github.com/HKUDS/nanobot/issues/5247) | Issue (Bug) | 0 | **Matrix auto-join regression** — `nio.Api.join()` sends empty body; Continuwuity rejects with `M_BAD_JSON`. PR [#5248](https://github.com/HKUDS/nanobot/pull/5248) fixes. |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | PR (Feature) | — | **Metasearch provider (mst-python)** — aggregate DuckDuckGo, Google, Brave, Bing via RRF; new web search capability. |
| [#5249](https://github.com/HKUDS/nanobot/pull/5249) | PR (Refactor) | — | **WebUI visual consistency** — elevation system, flattened layouts, timezone detection, animation removal. |

**Underlying themes:**  
- **Security hygiene** (key isolation, trusted-proxy auth) is a rising concern for production deployments.  
- **Provider/channel reliability** (MCP, Matrix, Telegram, WeCom) — users hit edge cases in real traffic.  
- **WebUI maturity** — dev experience, visual polish, and accessibility are receiving sustained investment.

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | [#4784](https://github.com/HKUDS/nanobot/issues/4784) | `OpenAICompatProvider._setup_env()` writes API keys to global `os.environ`, overwriting other providers' keys. Affects all gateway/non-gateway providers. | — (open) |
| **High** | [#5237](https://github.com/HKUDS/nanobot/issues/5237) | MCP tool returns error envelope with `isError=false`; agent treats as success, never learns failure, times out. | — (open) |
| **High** | [#5247](https://github.com/HKUDS/nanobot/issues/5247) | Matrix bot `_on_room_invite` fires but `join()` fails silently on Continuwuity (empty POST body). | [#5248](https://github.com/HKUDS/nanobot/pull/5248) (open) |
| **Medium** | [#5235](https://github.com/HKUDS/nanobot/issues/5235) | Anthropic Opus 5 temperature handling missing from `omit_temperature` list; API rejects requests. | — (closed, likely fixed in provider config) |
| **Medium** | [#5156](https://github.com/HKUDS/nanobot/pull/5156) | Telegram polling stalls silently after network blip; bot stops receiving messages. | [#5156](https://github.com/HKUDS/nanobot/pull/5156) (open) |

**Note:** Three of the top five bugs have open fix PRs (#5248, #5156, and #4784 needs one). The MCP error handling (#5237) has no PR yet — highest priority for triage.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Metasearch provider (mst-python)** | [#5234](https://github.com/HKUDS/nanobot/pull/5234) (open, P1) | **High** — PR is feature-complete with tests, labeled P1. |
| **Telegram custom Bot API base URL + headers** | [#4919](https://github.com/HKUDS/nanobot/pull/4919) (open, P2) | **High** — implements #4702, long-standing enterprise need. |
| **WebUI Quick Chat + Temporary Chat** | [#5184](https://github.com/HKUDS/nanobot/pull/5184) (open, conflict) | **Medium** — conflicted, needs rebase; UX improvement. |
| **Mattermost thread mention policy** | [#5233](https://github.com/HKUDS/nanobot/pull/5233) (merged) | **Done** — already in main. |
| **Memory/.gitignore tracking for cursor/history** | [#5246](https://github.com/HKUDS/nanobot/issues/5246) (open) | **Low-Medium** — housekeeping, easy fix. |
| **Trusted-proxy bootstrap auth** | [#5210](https://github.com/HKUDS/nanobot/pull/5210) (merged) | **Done** — security hardening for Cloudflare deployments. |

**Prediction:** Next minor release will likely include metasearch provider, Telegram custom API base, Matrix join fix, and WebUI dev mode. Security fix for #4784 may force a patch if not addressed in minor.

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **API key leakage across providers** | [#4784](https://github.com/HKUDS/nanobot/issues/4784) — "overwrites any previous value" | Breaks multi-provider setups; security risk. |
| **Silent Telegram polling death** | [#5156](https://github.com/HKUDS/nanobot/pull/5156) — "log stays completely silent" | Production reliability; hard to debug. |
| **MCP error envelopes invisible to agent** | [#5237](https://github.com/HKUDS/nanobot/issues/5237) — "LLM never learns the call failed" | Agent loops/waits; no retry or user feedback. |
| **Matrix join fails on Continuwuity** | [#5247](https://github.com/HKUDS/nanobot/issues/5247) — "M_BAD_JSON: deserialization failed" | Blocks onboarding for that homeserver. |
| **WeCom media download crashes on dot-only filenames** | [#5223](https://github.com/HKUDS/nanobot/pull/5223) — fixed | Edge case but hits real uploads. |
| **Telegram code blocks corrupted for `c++`, `html+django`** | [#5222](https://github.com/HKUDS/nanobot/pull/5222) — fixed | Developer UX; frequent languages affected. |
| **WebUI dev workflow friction** | [#5239](https://github.com/HKUDS/nanobot/pull/5239) — added `nanobot webui --dev` | Contributor onboarding improved. |

**Satisfaction signals:** Rapid closure of channel bugs (WeCom, Telegram, Mattermost) and WebUI polish PRs suggest users are actively deploying and reporting issues; maintainers respond quickly with tested fixes.

## 8. Backlog Watch (Stale/Important Items Needing Attention)

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) | **~30 days** (created 2026-07-06) | **Security: global env mutation leaks keys** — affects all provider users. No fix PR yet. | **URGENT** |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | **~7 days** (updated 2026-08-04) | Telegram polling stall recovery — production-critical for Telegram bots. | Open, needs review |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | **~22 days** (updated 2026-08-04) | Telegram custom Bot API base — enterprise/self-hosted gateway support. | Open, P2 |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | **~6 days** (updated 2026-08-04) | WebUI Quick/Temporary Chat — UX feature, conflicted. | Open, conflict |
| [#5237](https://github.com/HKUDS/nanobot/issues/5237) | **1 day** (created 2026-08-04) | MCP error handling — silent failures break agent loops. | New, no PR |
| [#5246](https://github.com/HKUDS/nanobot/issues/5246) | **1 day** | Memory/.gitignore gap — `.cursor` and `history.jsonl` untracked. | New, easy fix |

**Maintainer action recommended:** Prioritize #4784 (security), #5237 (data loss), and #5156 (reliability). #4919 and #5184 are feature debt; #5246 is trivial.

---

**Overall Health:** 🟢 **Healthy velocity, strong test discipline, active community reporting.**  
**Risk:** 🔴 **#4784 security issue unaddressed for 30 days** — should be escalated.  
**Next Release Candidate:** Likely includes metasearch, Telegram custom API, Matrix fix, WebUI dev mode, and accumulated channel/WebUI fixes.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-05

## 1. Today's Overview
Hermes Agent shows **high development velocity** with 50 PRs and 11 issues updated in the last 24 hours, though only 1 PR was merged/closed and 2 issues closed — indicating active iteration but a growing backlog of open work. Five new issues were filed today alone, spanning regression bugs (API server slowdown, macOS launchd eviction loop), platform-specific crashes (Windows winpty), and architectural RFCs (Distributed Orchestrator). The project is in a **feature-heavy, stabilization phase** with significant focus on gateway reliability, plugin security, memory consolidation, and cross-platform compatibility.

## 2. Releases
**No new releases** published today. Current latest version remains **v0.20.1** (per issue #79047 regression report).

## 3. Project Progress — Merged/Closed Today
| Item | Type | Summary |
|------|------|---------|
| [#73599](https://github.com/NousResearch/hermes-agent/issues/73599) | Issue (Closed) | Dashboard plugin install button silently failing on stale session token — root cause identified as silent reload on 401 |
| [#50747](https://github.com/NousResearch/hermes-agent/issues/50747) | Issue (Closed) | Feishu adapter "requirements not met" on container rebuild — fixed by docker restart; marked `sweeper:implemented-on-main` |
| *No merged PRs found in today's data* | | The single closed PR count may reflect a merge not captured in the PR list (all 50 PRs show as open) |

## 4. Community Hot Topics — Most Active Discussions
| Item | Activity | Core Need |
|------|----------|-----------|
| [#16004](https://github.com/NousResearch/hermes-agent/issues/16004) Configurable bounded auto-continue | 10 comments, 1 👍 | **Autonomy vs. control**: Users want agents to continue autonomous work after hitting tool-call limits without human intervention — critical for CI/CD and long-running gateway sessions |
| [#16833](https://github.com/NousResearch/hermes-agent/issues/16833) Project-scoped memory pools | 4 comments, 1 👍 | **Context isolation**: Multi-project users need memory separation (global + per-project) to avoid fact contamination across codebases |
| [#62254](https://github.com/NousResearch/hermes-agent/issues/62254) `api_key_env` silently ignored | 3 comments | **Config reliability**: Custom provider auth fails silently when using `api_key_env` vs `key_env` — violates principle of least surprise |
| [#33186](https://github.com/NousResearch/hermes-agent/pull/33186) Plugin security-guidance enhancement | High commentary (exact count undefined) | **Supply-chain security**: Adding severity tiers, audit tooling, and execution coverage to plugin vetting — reflects growing enterprise/adoption pressure |

## 5. Bugs & Stability — Today's Regressions & Crashes (Ranked by Severity)
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | [#79044](https://github.com/NousResearch/hermes-agent/issues/79044) | Slack channel directory discovery blocks inbound gateway startup indefinitely — messages queued, no response | — |
| **Critical** | [#79047](https://github.com/NousResearch/hermes-agent/issues/79047) | **Regression v0.15.1→0.20.1**: API server mode adds ~3.3s/req (bypasses `get_tool_definitions()` cache) | — |
| **High** | [#79048](https://github.com/NousResearch/hermes-agent/issues/79048) | macOS: dual gateways sharing Discord token enter mutual-eviction loop after `hermes update` regenerates plists with `--replace` | — |
| **High** | [#79040](https://github.com/NousResearch/hermes-agent/issues/79040) | `hermes update` hangs after "Web UI built" — breaks cron/auto-update on Linux systemd | — |
| **High** | [#55003](https://github.com/NousResearch/hermes-agent/pull/55003) | Windows Chinese locale: `winpty-rs` panic on `HRESULT(0x0)` (S_OK) — gateway crash on ConPTY creation | [#55003](https://github.com/NousResearch/hermes-agent/pull/55003) (open) |
| **Medium** | [#62254](https://github.com/NousResearch/hermes-agent/issues/62254) | Custom provider `api_key_env` silently ignored → 401 with no warning | — |
| **Medium** | [#79046](https://github.com/NousResearch/hermes-agent/pull/79046) | Gateway leaks `PYTHONPATH` to subprocesses (venv site-packages) — breaks cross-env terminal spawns | [#79046](https://github.com/NousResearch/hermes-agent/pull/79046) (open) |

## 6. Feature Requests & Roadmap Signals
| Request | Signal Strength | Likelihood for Next Version |
|---------|----------------|----------------------------|
| **Distributed Orchestrator (Remote Brain ↔ Local Nodes)** [#79042](https://github.com/NousResearch/hermes-agent/issues/79042) | RFC draft, architectural scope | Low (major redesign) — but signals strategic direction toward **federated agents** |
| **Project-scoped memory pools** [#16833](https://github.com/NousResearch/hermes-agent/issues/16833) | 4 comments, clear multi-project pain | **High** — aligns with memory consolidation PR [#79045](https://github.com/NousResearch/hermes-agent/pull/79045) |
| **Configurable auto-continue on tool-limit** [#16004](https://github.com/NousResearch/hermes-agent/issues/16004) | 10 comments, P2, needs-decision | **High** — unblocks autonomous workflows |
| **DeepSeek v4 Flash Responses API** [#79039](https://github.com/NousResearch/hermes-agent/issues/79039) | New provider request | Medium — provider additions are routine |
| **Cron `subject_template` with `{date}`** [#79049](https://github.com/NousResearch/hermes-agent/pull/79049) | PR open, small scope | **High** — quality-of-life, low risk |
| **Persist per-model rate-limit cooldowns** [#73380](https://github.com/NousResearch/hermes-agent/pull/73380) | Open since July, needs-decision | Medium — improves fallback UX |
| **Custom cron response wrappers** [#73332](https://github.com/NousResearch/hermes-agent/pull/73332) | Open since July, needs-decision | Medium — extensibility |

## 7. User Feedback Summary — Real Pain Points
| Theme | Evidence | Impact |
|-------|----------|--------|
| **Update/reliability friction** | [#79040](https://github.com/NousResearch/hermes-agent/issues/79040) hangs on update; [#79048](https://github.com/NousResearch/hermes-agent/issues/79048) macOS plist regeneration breaks multi-gateway setups | Breaks automation, forces manual intervention |
| **Performance regression** | [#79047](https://github.com/NousResearch/hermes-agent/issues/79047) 3.3s added latency in API server mode | Directly degrades production UX |
| **Silent failures** | [#62254](https://github.com/NousResearch/hermes-agent/issues/62254) `api_key_env` ignored; [#73599](https://github.com/NousResearch/hermes-agent/issues/73599) dashboard installs fail silently | Erodes trust, increases debug time |
| **Platform-specific crashes** | [#55003](https://github.com/NousResearch/hermes-agent/pull/55003) Chinese Windows winpty panic; [#79044](https://github.com/NousResearch/hermes-agent/issues/79044) Slack startup block | Limits adoption on affected platforms |
| **Memory/context management** | [#16833](https://github.com/NousResearch/hermes-agent/issues/16833) global memory pollutes projects; [#79045](https://github.com/NousResearch/hermes-agent/pull/79045) session-end consolidation needed | Core UX for multi-project developers |

## 8. Backlog Watch — Stale High-Value Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#16004](https://github.com/NousResearch/hermes-agent/issues/16004) Configurable auto-continue | Since 2026-04-26 (100+ days) | **P2, needs-decision** — 10 comments, unblocks autonomous agents; design decision pending |
| [#16833](https://github.com/NousResearch/hermes-agent/issues/16833) Project-scoped memory pools | Since 2026-04-28 | **P3** — foundational for multi-project use; PR [#79045](https://github.com/NousResearch/hermes-agent/pull/79045) partially addresses but needs config design |
| [#33186](https://github.com/NousResearch/hermes-agent/pull/33186) Plugin security-guidance enhancement | Since 2026-05-27 | **Security boundary** — severity tiers, audit tool, execution coverage; blocked on review |
| [#73380](https://github.com/NousResearch/hermes-agent/pull/73380) Persist rate-limit cooldowns | Since 2026-07-28 | **P3, needs-decision** — improves fallback reliability; opt-in cooldown persistence |
| [#73445](https://github.com/NousResearch/hermes-agent/pull/73445) Google Chat multiplex profile config scoping | Since 2026-07-28 | **P2, security** — env leakage across profiles in multiplex mode |
| [#73955](https://github.com/NousResearch/hermes-agent/pull/73955) Compression RPC timeout alignment | Since 2026-07-29 | **P2** — compute-host timeout mismatch causes compression failures |

---

**Health Indicators**:  
🟢 **Active development** (50 PRs/11 issues in 24h)  
🟡 **Growing open backlog** (49 open PRs, 9 open issues updated today)  
🔴 **Critical regressions** in v0.20.1 (API latency, gateway startup block, update hang)  
🟢 **Strong community engagement** on autonomy, memory, and security features  

**Recommended maintainer focus**: Prioritize regression fixes (#79044, #79047, #79040, #55003), then merge high-value PRs (#79046, #79049, #79045) and decide on stale RFCs (#16004, #79042).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-05

## 1. Today's Overview
PicoClaw shows moderate maintenance activity with **3 issues** and **4 PRs** updated in the last 24 hours. No new releases were published. The project is actively addressing authentication robustness, provider token accounting, and web search extensibility, while two critical bugs — Web UI input lag with long histories and MCP connection failures hanging the agent loop — remain open and unrepaired. Community engagement is modest (max 1 👍 per issue), suggesting a focused but not yet widely adopted contributor base.

## 2. Releases
**No new releases** in the last 24 hours. The latest version remains **0.3.1** (referenced in issue #3281).

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Title | Status | Impact |
|----|-------|--------|--------|
| [#3280](https://github.com/sipeed/picoclaw/pull/3280) | fix(auth): make browser OAuth login survive real-world callback conditions | **Closed (stale)** | Addresses OAuth login failures in headless/remote environments after user consent — four root causes fixed. Improves reliability for CLI auth flows. |
| [#3251](https://github.com/sipeed/picoclaw/pull/3251) | fix(providers): capture prompt cache token usage in Anthropic providers | **Closed (stale)** | Restores visibility into Anthropic prompt cache metrics (`cache_creation_input_tokens`, `cache_read_input_tokens`) previously discarded. Enables cost optimization and cache debugging. |

> Both PRs were marked `stale` and closed without merge — likely superseded or deferred. No merged PRs today.

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Bug | 3 | 1 | **Web UI responsiveness** — input lag grows with chat history length; blocks real-time interaction in long sessions. |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | Bug | 3 | 1 | **Agent loop resilience** — MCP server failure halts entire chat; no timeout/recovery. Critical for production agent workflows. |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Feature PR | 0 | 0 | **Web search extensibility** — Native Exa provider adds high-quality search with highlights/date filters; aligns with tool-use roadmap. |
| [#3317](https://github.com/sipeed/picoclaw/pull/3317) | Feature PR | 0 | 0 | **Observability** — Logs cache tokens (e.g., DeepSeek via Cloudflare) in debug output; enables provider-agnostic token accounting. |

**Underlying themes**:  
- **UI performance** at scale (history rendering/input handling)  
- **Fault tolerance** in multi-component agent loops (MCP, providers)  
- **Provider ecosystem growth** (Exa, cache metrics)  
- **Operational visibility** (token usage, auth reliability)

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP connection failure → agent loop hang → chat stops replying. No timeout, retry, or fallback. Blocks autonomous agent use. | ❌ No |
| **High** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI input lag with moderate history (PicoClaw 0.3.1, Go 1.25.11). Likely O(n) re-render or unvirtualized list. Degrades UX in long sessions. | ❌ No |
| **Medium** | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android: service won’t launch; path setting immutable. Full permissions granted. Closed as `stale` — may persist. | ❌ No (closed stale) |

> **No open fix PRs** for the two active critical/high bugs. Immediate maintainer triage needed.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Native Exa web search provider** | [#3299](https://github.com/sipeed/picoclaw/pull/3299) (PR open) | **High** — Complete implementation with config, auth, filters; aligns with `tools.web` abstraction. |
| **Prompt cache token logging (all providers)** | [#3317](https://github.com/sipeed/picoclaw/pull/3317) (PR open) | **High** — Small, focused, debug-only; extends existing observability. |
| **Anthropic cache metrics capture** | [#3251](https://github.com/sipeed/picoclaw/pull/3251) (closed stale) | **Medium** — Valuable but PR closed; may reappear if community pushes. |
| **Robust OAuth for headless/remote** | [#3280](https://github.com/sipeed/picoclaw/pull/3280) (closed stale) | **Medium** — Real pain point; fix exists but PR closed. Likely to be revisited. |

**Predicted next version focus**: Provider ecosystem (Exa), observability (cache tokens), and agent loop hardening (if #3269 addressed).

## 7. User Feedback Summary
| Pain Point | Evidence | User Context |
|------------|----------|--------------|
| **Web UI unusable in long chats** | “Input very laggy when history has a little bit long” — [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web users with extended sessions; likely developers/analysts using PicoClaw as daily driver. |
| **Agent stops on MCP failure** | “Agent loop will hang… stop replying to users” — [#3269](https://github.com/sipeed/picoclaw/issues/3269) | Users running autonomous agents with external tool servers (MCP); production workflows blocked. |
| **Android service broken** | “Can’t launch service… can’t change path” — [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Mobile/edge deployment attempt; closed stale but device logs suggest real issue. |
| **Auth fails after consent** | “Authorization code is burned… flow has to restart” — [#3280](https://github.com/sipeed/picoclaw/pull/3280) | Headless/remote CLI users (CI, servers, SSH); high friction for non-interactive setup. |

**Satisfaction signals**: Low — two high-impact bugs open, no fixes in flight. Users encountering core workflow blockers.

## 8. Backlog Watch (Needs Maintainer Attention)
| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | 16 days | **Critical** | Agent loop hang = complete chat failure. No timeout, no error surfacing. Must add circuit breaker / retry / fallback. |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 15 days | **High** | Web UI performance regression at scale. Virtualization or memoization needed for message list + input. |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 10 days | **Medium** | High-quality feature PR (Exa search) with tests/config — ready for review/merge. Expands tool ecosystem. |
| [#3317](https://github.com/sipeed/picoclaw/pull/3317) | 1 day | **Low** | Trivial debug logging improvement; easy win for observability. |
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) | 40 days | **Medium** | Android support gap. Closed stale but user had full perms + logs. May indicate platform regression. |

> **Top priority**: Triaging #3269 and #3281 — both block core user workflows. PR #3299 is merge-ready and should be reviewed.

---

**Project Health Indicator**: 🟡 **Caution**  
- ✅ Active PR submissions (provider extensions, observability)  
- ⚠️ Two critical bugs untriaged for 2+ weeks  
- ❌ No merged fixes today; stale closures on valuable PRs  
- 📉 Low community reaction volume — limited visibility/contributor base  

**Recommended Actions**:  
1. Assign #3269 and #3281 to owners immediately  
2. Review/merge #3299 (Exa provider) and #3317 (cache token logging)  
3. Re-evaluate stale-closed PRs #3280, #3251 for reopening  
4. Investigate Android issue (#3182) despite stale label — may affect edge deployment story

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-05

## 1. Today's Overview
NanoClaw saw moderate pull-request activity over the last 24 hours with **five PRs updated** (four still open, one merged). No new issues were filed or updated, and no releases were published. The open PRs cluster around **channel/skill expansion** (Dial SMS+voice adapter, channel-picker integration) and **core infrastructure refactors** (host seams for skill-owned capabilities), while the single merged PR addresses a **scheduled-task timestamp regression**. Overall velocity appears steady but focused on internal plumbing rather than user-facing features.

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Project Progress (Merged/Closed PRs)
| PR | Title | Type | Key Change |
|----|-------|------|------------|
| [#3154](https://github.com/nanocoai/nanoclaw/pull/3154) | `fix(agent-runner): give scheduled tasks current run time` | Bug fix / Core | Tasks now receive an accurate `current_time` (including weekday) derived from `process_after` at execution time, fixing drift for recurring/legacy scheduled tasks. |

**Impact:** Eliminates a class of timing bugs in cron-like skills and any downstream logic that depends on “now” during task execution.

## 4. Community Hot Topics (Most Active PRs)
| PR | Activity | Focus | Underlying Need |
|----|----------|-------|-----------------|
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) & [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | Updated 2026-08-04 (originally 2026-07-14) | **Dial channel adapter** (SMS + AI voice) + wizard integration | First-class telephony channel; users want to reach assistants via phone/SMS without leaving the NanoClaw skill framework. |
| [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) | Created & updated 2026-08-04 | **Host seams for skill-owned capabilities** | Architectural decoupling so skills can declare & own capabilities without core modifications—enables smoother third-party skill distribution. |
| [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) | Created & updated 2026-08-04 | **Discord webhook `custom_id` parsing bug** | Critical UX break: every approval button click registers as “Reject.” Blocks Discord-based human-in-the-loop workflows. |

*No issues or PRs have comments/reactions recorded in the snapshot, so “hotness” is inferred from recency and scope.*

## 5. Bugs & Stability
| Severity | PR / Issue | Summary | Fix Status |
|----------|------------|---------|------------|
| **High** | [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) | Discord approval buttons always resolve to “Reject” due to `\n` delimiter in `custom_id` parsing. | **Open PR** — ready for review. |
| **Medium** | [#3154](https://github.com/nanocoai/nanoclaw/pull/3154) | Scheduled tasks used stale creation timestamp instead of actual run time. | **Merged** — fix deployed to `main`. |

No crashes or regressions reported in issues today.

## 6. Feature Requests & Roadmap Signals
1. **Dial (SMS + AI Voice) as a first-class channel** — Two coordinated PRs ([#3041](https://github.com/nanocoai/nanoclaw/pull/3041), [#3050](https://github.com/nanocoai/nanoclaw/pull/3050)) adding adapter, skill, and wizard integration. Strong signal this will land in the next minor release.
2. **Skill capability ownership via host seams** ([#3186](https://github.com/nanocoai/nanoclaw/pull/3186)) — Refactor to let skills register capabilities without core changes. Prerequisite for a public skill marketplace / easier third-party contributions.
3. **Channel picker UX improvements** — Implied by wizard work in #3050; expect richer multi-channel onboarding soon.

## 7. User Feedback Summary
*No new issues or discussion threads in the last 24 hours, so direct user feedback is absent from this window.*  
Historical context (from PR descriptions):  
- Discord users currently **cannot trust approval flows** (every click = reject).  
- Skill authors want **less friction** to add capabilities without touching core.  
- Teams adopting telephony channels need **wizard-guided setup**, not manual config.

## 8. Backlog Watch (Stale / High-Value Items Needing Attention)
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) / [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | 22 days | Dial channel is a marquee feature; both PRs interdependent. | Assign reviewer, run integration tests, merge together. |
| [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) | 1 day | Architectural refactor; blocks future skill extensibility. | Prioritize design review—core-team label suggested. |
| [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) | 1 day | High-severity Discord bug affecting all approval workflows. | Fast-track review & merge; consider backport to latest patch branch. |

---

**Health Indicator:** 🟢 **Healthy** — Steady PR throughput, critical bug fix merged, high-value features in review. Primary risk is the 3-week stall on Dial channel; unblocking it would demonstrate sustained feature velocity.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-05

---

## 1. Today's Overview
NullClaw shows **low repository activity** in the last 24 hours: zero issue updates, one open pull request updated, and no new releases. The sole active PR (#981) introduces a new optional CLI provider for xAI’s `grok` command-line tool, mirroring the existing `codex-cli`, `gemini-cli`, and `claude-cli` patterns. With no merged PRs, closed issues, or releases today, the project is in a **maintenance/feature-proposal phase** rather than an active shipping cycle. Community engagement appears minimal (no comments or reactions recorded on the open PR).

---

## 2. Releases
**No new releases** published today. The latest release information is not available in the provided data.

---

## 3. Project Progress
**No PRs merged or closed today.** The only movement is on PR #981, which remains open and under review. This PR adds a **new provider** (`grok-cli`) that delegates to the local `grok` CLI (xAI Grok). It follows the established *spawn-per-request* pattern used by other CLI providers. The provider is **optional**—it requires the `grok` CLI to be installed and authenticated on the user’s machine. No bug fixes, refactors, or documentation updates were merged in the last 24h.

---

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#981** feat(provider): add grok-cli provider for xAI Grok CLI | PR | 0 comments, 0 👍, updated 2026-08-04 | [nullclaw/nullclaw#981](https://github.com/nullclaw/nullclaw/pull/981) |

**Analysis:** The sole community touchpoint is a feature proposal to support xAI’s Grok CLI. The lack of comments or reactions suggests either:
- The PR is new and hasn’t been reviewed yet
- The contributor community is small or inactive
- Reviewers are waiting for CI/checks or maintainer availability

Underlying need: **extending provider coverage** to emerging LLM CLIs (xAI Grok) to keep NullClaw compatible with the latest local-model tooling.

---

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.** No issues were created or updated in the last 24h, and no bug-fix PRs are present.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **xAI Grok CLI provider** (`grok-cli`) | PR #981 (open) | **High** — follows established provider pattern; only requires review/merge |
| **More CLI providers** (general trend) | Existing `codex-cli`, `gemini-cli`, `claude-cli` providers | **Medium** — project appears to be expanding CLI provider ecosystem incrementally |

**Prediction:** If PR #981 passes review, the next release will likely include the `grok-cli` provider. No other feature requests are visible in current data.

---

## 7. User Feedback Summary
**No user feedback captured today** — zero issues, zero comments on PRs, zero reactions. Cannot assess pain points, use cases, or satisfaction from the last 24h.

---

## 8. Backlog Watch
| Item | Status | Age | Concern |
|------|--------|-----|---------|
| **PR #981** — `grok-cli` provider | Open | Created 2026-07-29 (7 days ago) | **Needs maintainer review**; no activity since 2026-08-04. Risk of stalling if not triaged soon. |

**Recommendation:** Maintainers should prioritize reviewing PR #981 this week. It’s a low-risk, pattern-conforming addition that expands provider support. No other stale issues or PRs are visible in the provided dataset.

---

*Data source: GitHub API snapshot for `nullclaw/nullclaw` covering 2026-08-04 to 2026-08-05. Digest generated 2026-08-05.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-05

---

## 1. Today's Overview

IronClaw saw **high velocity** in the last 24 hours: 8 issue updates (7 new/active) and 50 PR updates (33 open, 17 closed/merged). No new releases were cut. Activity clusters around **four pillars**: (1) hardening the `v1.1.0-rc.1` migration path for lossless upgrades from `v1.0.0-rc.1`, (2) shipping the **two-lane channel delivery tool** (conversation vs. notification lanes), (3) expanding **WASM sandbox host functions** (Nostr signing, diagnostics sanitization), and (4) CI/CD reliability (Windows smoke tests, proxy handling, clippy fixes). The project is in a **pre-release stabilization sprint** — core contributors are merging stacked PRs to unblock the RC, while community contributors advance docs and tooling.

---

## 2. Releases

**No new releases** in the last 24h. The latest release activity is tracked in PR #5598 (bot-driven version bumps for `ironclaw_common`, `ironclaw_safety`, `ironclaw_skills`), but it remains open and unmerged. The team is focused on `v1.1.0-rc.1` readiness.

---

## 3. Project Progress — Merged / Closed PRs Today

| PR | Scope | Outcome | Key Change |
|----|-------|---------|------------|
| [#7200](https://github.com/nearai/ironclaw/pull/7200) | Windows / CLI | **Closed** | Stops `icacls` from writing to stdout on Windows — fourth blocker cleared for `v1.1.0-rc.1` smoke tests. |
| [#7197](https://github.com/nearai/ironclaw/pull/7197) | CI / Windows | **Closed** | Passes Windows identity vars (`USERNAME`, `USERDOMAIN`) to release smoke workflow; unblocks preflight runs. |
| [#7167](https://github.com/nearai/ironclaw/pull/7167) | CI / Linting | **Closed** | Fixes per-package clippy on bin-only crates (removes `--lib` flag); classifies `.gitignore` for cargo. |
| [#7156](https://github.com/nearai/ironclaw/pull/7156) | Architecture / Governance | **Closed** | Enforces same-layer edge inventory, LOC ceilings, vendor census, ratchet slack — sabotage-tested gates. |
| [#7168](https://github.com/nearai/ironclaw/issues/7168) | Skills / Discovery | **Closed (Issue)** | Agent-installed skills invisible: `skill_install` writes where discovery doesn't read — root cause identified, fix likely in flight. |

**Net signal**: The RC branch is clearing platform-specific blockers (Windows, CI) and architectural guardrails. The skills discovery bug (#7168) was reproduced and closed — expect a fix PR soon.

---

## 4. Community Hot Topics — Most Active Issues & PRs

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#7194](https://github.com/nearai/ironclaw/issues/7194) | Issue (enhancement) | 2 | **Admin-allowed shared Slack channels as outbound delivery targets** — agents can list/post to channels but cannot register them as delivery targets for run replies. |
| [#7193](https://github.com/nearai/ironclaw/issues/7193) | Issue (enhancement) | 2 | **Manual "run-now" for automations** — no on-demand trigger from model, WebUI, or product surface; only list/pause/resume/rename/delete exist. |
| [#7192](https://github.com/nearai/ironclaw/issues/7192) | Issue (bug) | 2 | **WebUI optimistic messages render below agent output** — user messages appear out-of-order until durable timeline replaces them. |
| [#7191](https://github.com/nearai/ironclaw/issues/7191) | Issue (bug) | 2 | **`builtin.time` lacks relative-offset arithmetic** — "24 hours ago" parsing fails; `input_error()` is opaque, needs typed issues. |
| [#7157](https://github.com/nearai/ironclaw/pull/7157) | PR (feat, XL) | — | **Explicit channel delivery tool (two lanes)** — implements approved spec: conversation lane (final reply) + notification lane (alerts), deletes heuristics. |
| [#7184](https://github.com/nearai/ironclaw/pull/7184) | PR (feat, XL) | — | **Nostr host functions for WASM tools** — `nostr-sign-event`, `nostr-verify-event`, `nostr-get-public-key`; private key never leaves host. |
| [#7198](https://github.com/nearai/ironclaw/pull/7198) | PR (fix, XL) | — | **Lossless migration `1.0.0-rc.1 → 1.1.0-rc.1`** — runs record migration before runtime writers; preserves threads, messages, channel roots, OAuth, extensions. |

**Underlying theme**: **Delivery & triggering completeness**. Users want agents to *act* on channels (not just read), fire automations manually, and see UI reflect reality in real time. The two-lane delivery PR (#7157) directly addresses #7194's scope.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue / PR | Status | Fix PR? |
|----------|------------|--------|---------|
| **High** | [#7194](https://github.com/nearai/ironclaw/issues/7194) — Outbound delivery targets missing for admin shared channels | Open | Likely addressed by [#7157](https://github.com/nearai/ironclaw/pull/7157) (two-lane delivery) |
| **Medium** | [#7191](https://github.com/nearai/ironclaw/issues/7191) — `builtin.time` relative offsets broken; opaque errors | Open | No fix PR yet |
| **Medium** | [#7178](https://github.com/nearai/ironclaw/issues/7178) — `v1.0.0-rc.1 → v1.1.0-rc.1` migration not lossless | Open | Fix in progress: [#7198](https://github.com/nearai/ironclaw/pull/7198) |
| **Low** | [#7192](https://github.com/nearai/ironclaw/issues/7192) — WebUI optimistic message ordering | Open | No fix PR yet |
| **Low** | [#7200](https://github.com/nearai/ironclaw/pull/7200) — `icacls` stdout pollution on Windows | **Closed** | Fixed & merged |
| **Low** | [#7167](https://github.com/nearai/ironclaw/pull/7167) — Clippy fails on bin-only crates | **Closed** | Fixed & merged |

**Stability note**: Windows and CI blockers are resolved. The remaining risks are **data-loss migration** (#7178/#7198) and **agent tool correctness** (#7191).

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for `v1.1.0` |
|---------|--------|--------------------------|
| **Admin shared channels as outbound targets** | [#7194](https://github.com/nearai/ironclaw/issues/7194) | **High** — PR #7157 (two-lane delivery) implements the design |
| **Manual automation trigger ("run-now")** | [#7193](https://github.com/nearai/ironclaw/issues/7193) | **Medium** — gaps across model, WebUI, product surface; no PR yet |
| **Relative time arithmetic in `builtin.time`** | [#7191](https://github.com/nearai/ironclaw/issues/7191) | **High** — production-blocking; typed errors align with current error-handling work |
| **Skills self-create/find/choose/use (Epic)** | [#6941](https://github.com/nearai/ironclaw/issues/6941) | **Low for v1.1** — multi-person, measured epic; subset of #6565 |
| **Nostr host functions for WASM** | [#7184](https://github.com/nearai/ironclaw/pull/7184) | **High** — PR open, core contributor, extends sandbox capabilities |
| **IronHub documentation** | [#6965](https://github.com/nearai/ironclaw/pull/6965), [#6970](https://github.com/nearai/ironclaw/pull/6970) | **Done** — docs merged/updating; "Reborn" terminology removed |

**Prediction**: `v1.1.0-rc.1` will ship with **lossless migration**, **two-lane delivery**, **Nostr WASM functions**, and **Windows/CI fixes**. Manual automation trigger and `builtin.time` fixes are strong candidates for `v1.1.0` final or `v1.1.1`.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **"Agent installs skill → skill invisible"** | [#7168](https://github.com/nearai/ironclaw/issues/7168) — reproduced on local-dev WebUI; `skill_install` returns `{"installed":true}` but Settings→Skills and model listing don't reflect it | **High** — breaks skill workflow end-to-end; user cannot activate installed skills |
| **"Can't prove skill selection pays off"** | [#7199](https://github.com/nearai/ironclaw/issues/7199) — user built FaceSeek; needed logging "candidate existed but not chosen" vs "chosen & changed answer" | **Medium** — observability gap for skill ROI; affects evaluation/debugging |
| **"Optimistic messages render out of order"** | [#7192](https://github.com/nearai/ironclaw/issues/7192) — user message appears below agent reply until durable row arrives | **Medium** — UX confusion in real-time chat |
| **"Automation cannot be fired manually"** | [#7193](https://github.com/nearai/ironclaw/issues/7193) — no model/WebUI/product trigger | **High** — limits automation utility to scheduled-only |

**Sentiment**: Users are **building real automations** (GitHub→Slack reports, FaceSeek) and hitting **integration gaps** — delivery targets, skill visibility, observability, manual triggers. The product is being *used*, not just evaluated.

---

## 8. Backlog Watch — Stale / High-Value Items Needing Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#6941](https://github.com/nearai/ironclaw/issues/6941) — Epic: Skills self-create/find/choose/use | 5 days (updated today) | Strategic epic; 21 ACs, 4 blocked by others; subset of #6565 | Assign owner, split into measurable sub-epics; prioritize descriptor index & drift lifecycle |
| [#7048](https://github.com/nearai/ironclaw/pull/7048) — WASM: sanitize guest diagnostics | 2 days (updated today) | Stacked on #7063; 20 commits; critical for tracing hygiene | Merge #7063 first, then rebase/merge #7048 |
| [#7029](https://github.com/nearai/ironclaw/pull/7029) — Restore durable delivery claim | 2 days (updated today) | Stacked on #7028; fixes delivery ownership via CAS | Merge #7028 → rebase #7029 |
| [#5101](https://github.com/nearai/ironclaw/pull/5101) — CI: reuse cargo-component installer | 46 days (updated today) | Long-open; reduces live-canary flakiness | Review & merge — low risk, high CI value |
| [#5598](https://github.com/nearai/ironclaw/pull/5598) — Chore: release (version bumps) | 33 days (updated today) | Blocks downstream consumers; breaking changes in `ironclaw_common` & `ironclaw_skills` | Cut release or document migration path |

**Maintainer attention needed**: The **stacked PR chains** (#7063→#7048, #7028→#7029) are critical path for WASM and delivery. The **release PR (#5598)** is stale with breaking changes — either ship or communicate migration. The **skills epic (#6941)** needs decomposition to avoid indefinite carry.

---

## Quick Links

- **Migration fix PR**: [#7198](https://github.com/nearai/ironclaw/pull/7198)
- **Two-lane delivery PR**: [#7157](https://github.com/nearai/ironclaw/pull/7157)
- **Nostr WASM PR**: [#7184](https://github.com/nearai/ironclaw/pull/7184)
- **Windows blocker fixes**: [#7200](https://github.com/nearai/ironclaw/pull/7200), [#7197](https://github.com/nearai/ironclaw/pull/7197)
- **Skills discovery bug**: [#7168](https://github.com/nearai/ironclaw/issues/7168)
- **Automation manual trigger**: [#7193](https://github.com/nearai/ironclaw/issues/7193)

---

*Digest generated from GitHub data as of 2026-08-05 00:00 UTC. All links point to `github.com/nearai/ironclaw`.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-05

## 1. Today's Overview
LobsterAI shows **high maintenance velocity** with 11 PRs merged/closed in the last 24 hours, primarily focused on renderer improvements, startup credit campaign polish, and Electron/dependency updates. No new release was cut today, but a release PR (#2430) for version 2026.8.3 was merged yesterday, indicating a recent stable shipment. One **critical security issue** (#1202) remains open and stale since April — agents can leak model API keys — with no fix PR linked. The project is actively developed (Electron 43, React 19 upgrades in progress) but carries a notable backlog of stale dependabot and feature PRs.

## 2. Releases
**No new release today.**  
The latest release candidate is **v2026.8.3** (merged via #2430 on 2026-08-04). Highlights from that release:
- Native credit-reward activities (startup credit campaign)
- Streamlined first-run login experience
- Artifact auto-preview toggle (user-controlled)
- Model-overload error classification (separate from rate-limit)
- Windows installer reliability improvements
- Electron/auth IPC contract extensions for login redirect URLs

No breaking changes or migration notes were documented in the PR summary.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Summary |
|----|------|---------|
| [#2433](https://github.com/netease-youdao/LobsterAI/pull/2433) | renderer | Polish startup credit campaign: crop poster asset, localized claim-failure messages, refresh campaign binding before retry |
| [#2432](https://github.com/netease-youdao/LobsterAI/pull/2432) | renderer | Disable auto-popup of World Cup final reward poster; keep manual claim & subscription reset |
| [#2430](https://github.com/netease-youdao/LobsterAI/pull/2430) | renderer, main, cowork, windows | **Release 2026.8.3** — merge `release/2026.8.3` into `main` (see Releases) |
| [#2429](https://github.com/netease-youdao/LobsterAI/pull/2429) | renderer, cowork | Optimize login page (details not expanded) |
| [#2428](https://github.com/netease-youdao/LobsterAI/pull/2428) | renderer, main | Complete startup credit campaign analytics: full login redirect URL, error messages for server/network/login failures, auth IPC contract update |
| [#2427](https://github.com/netease-youdao/LobsterAI/pull/2427) | renderer, cowork | Bundle startup credit campaign artwork locally; server controls availability/timing/state/reward |
| [#2426](https://github.com/netease-youdao/LobsterAI/pull/2426) | renderer, main | Classify model capacity overload separately from rate limit; add raw-error-preview override for OpenClaw |
| [#2425](https://github.com/netease-youdao/LobsterAI/pull/2425) | renderer, cowork | Add **Artifact auto-preview toggle** in Settings (user can disable automatic file preview) |
| [#1282](https://github.com/netease-youdao/LobsterAI/pull/1282) | deps | Bump `@headlessui/react` 1.7.19 → 2.2.9 (stale, closed) |
| [#1283](https://github.com/netease-youdao/LobsterAI/pull/1283) | deps | Bump `react` 18.3.1 → 19.2.4 (stale, closed) |
| [#1284](https://github.com/netease-youdao/LobsterAI/pull/1284) | deps | Bump `react-syntax-highlighter` 15.6.6 → 16.1.1 (stale, closed) |

**Net advance**: Campaign UX hardened, artifact preview made configurable, model-overload errors correctly surfaced, major deps upgraded (React 19, Headless UI 2).

## 4. Community Hot Topics
| Item | Type | Activity | Signal |
|------|------|----------|--------|
| [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) | Issue (OPEN, stale) | 1 comment, 0 👍, last update 2026-08-04 | **Security**: Agent leaks model key config (file paths, env vars) when asked. No fix PR. High risk for multi-tenant/enterprise use. |
| [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | PR (OPEN) | Updated 2026-08-04, 0 comments | **User control**: Permanent sidebar ad-banner hide toggle (Settings → General). Addresses #2342. Awaiting review. |
| [#2431](https://github.com/netease-youdao/LobsterAI/pull/2431) | PR (OPEN) | Created 2026-08-05, 0 comments | **Internal**: `fix rlog` across renderer, docs, main, cowork — likely logging refactor. No description yet. |

**Underlying needs**: Users want **data sovereignty** (no key leakage) and **UI autonomy** (ad-free sidebar). The security issue is the loudest silent risk.

## 5. Bugs & Stability
| Severity | Item | Status | Fix PR? |
|----------|------|--------|---------|
| **Critical** | [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) — Agent leaks model API key info (config paths, env vars) | Open, stale (since 2026-04-01) | **No** |
| Medium | Session rename fails silently (no toast, input closes) — [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) | Open, stale PR (2026-04-01) | **Yes** (#1205) — adds try/catch + toast + keeps input open |
| Low | Campaign poster white gutters, auto-popup annoyances | Fixed today | **Yes** (#2433, #2432) |
| Low | Model overload misclassified as rate limit | Fixed in v2026.8.3 | **Yes** (#2426) |

**Stability note**: The critical secret-leak bug has had **zero fix movement for 4 months**. The rename-failure UX bug (#1205) also sits stale with a ready PR.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| Permanent sidebar ad-banner hide toggle | [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) (PR open, addresses #2342) | **High** — PR ready, user-facing, low risk |
| Artifact auto-preview toggle | [#2425](https://github.com/netease-youdao/LobsterAI/pull/2425) (merged) | **Shipped** in 2026.8.3 |
| Model-overload error classification | [#2426](https://github.com/netease-youdao/LobsterAI/pull/2426) (merged) | **Shipped** in 2026.8.3 |
| Startup credit campaign (rewards/artwork/analytics) | #2427, #2428, #2432, #2433 (all merged) | **Shipped** in 2026.8.3 |
| Electron 43 / React 19 upgrade | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277), [#1283](https://github.com/netease-youdao/LobsterAI/pull/1283) (stale, closed) | **Medium** — deps upgraded but PRs closed stale; may reopen via dependabot |

**Prediction**: Next patch will likely merge #2374 (ad toggle) and resurface the Electron/React upgrades. The security fix (#1202) **should** be prioritized but shows no owner assignment.

## 7. User Feedback Summary
- **Pain**: Sidebar ads cannot be permanently dismissed (#2342 → #2374).  
- **Pain**: Session rename fails silently, leaving users confused (#1205).  
- **Pain**: Agent discloses internal key configuration when probed (#1202) — trust/security concern.  
- **Delight**: Campaign artwork now bundled locally (faster, offline-capable) and auto-popup disabled (#2427, #2432).  
- **Delight**: Artifact preview now user-controllable (#2425).  
- **Delight**: Model overload errors no longer masquerade as rate limits (#2426).

No explicit satisfaction metrics; activity suggests a **power-user / developer audience** who value configurability and transparency.

## 8. Backlog Watch — Stale & Unaddressed
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) — Key leak bug | 127 days | **Critical security**; blocks enterprise adoption; no fix PR |
| [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) — Rename failure toast | 127 days | UX polish; PR ready, tests likely pass |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Electron 40→43, electron-builder bump | 126 days | Major framework upgrade; closed stale but needed for security/perf |
| [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) — Permanent ad-banner hide | 15 days | User-requested; PR open, awaiting review |
| [#2431](https://github.com/netease-youdao/LobsterAI/pull/2431) — `fix rlog` (multi-area) | 0 days | New, no description; may be logging overhaul — needs triage |

**Maintainer action recommended**: Assign #1202 immediately, merge #1205/#2374, re-evaluate Electron/React upgrades (#1277/#1283) via fresh dependabot PRs.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-05

## 1. Today's Overview
Moltis shows minimal activity over the past 24 hours with zero issue updates and a single automated dependency PR opened by Dependabot. The project appears to be in a quiet maintenance phase with no active community discussions, bug reports, or feature development visible in the last day. The sole PR is a routine development dependency update for the website component, suggesting ongoing but low-intensity upkeep. No releases were published, and the backlog shows no urgent items requiring immediate maintainer attention based on recent activity.

## 2. Releases
No new releases published in the last 24 hours.

## 3. Project Progress
No PRs were merged or closed today. The only PR activity is:
- **#1184** [OPEN] `chore(deps-dev): bump undici from 7.28.0 to 7.29.0 in /website` — Dependabot-initiated update for the Node.js HTTP client in the website directory. [View PR](https://github.com/moltis-org/moltis/pull/1184)

## 4. Community Hot Topics
No issues or PRs with significant community engagement (comments/reactions) in the last 24 hours. The only open PR (#1184) has zero comments and zero reactions, indicating no active discussion.

## 5. Bugs & Stability
No bug reports, crashes, or regressions reported or updated in the last 24 hours. No fix PRs are present.

## 6. Feature Requests & Roadmap Signals
No new feature requests or roadmap-related discussions observed today. The absence of issue activity suggests no current user-driven feature signals.

## 7. User Feedback Summary
No user feedback, pain points, use cases, or satisfaction signals captured in the last 24 hours. The project shows no direct user interaction in issues or discussions today.

## 8. Backlog Watch
No long-unanswered high-priority issues or PRs identified from today’s data. The only open PR (#1184) is a fresh, low-risk dependency bump likely to be merged routinely. No stale items requiring urgent maintainer intervention are evident.

---

*Digest generated from GitHub data for 2026-08-05. Project appears healthy but in a low-activity maintenance window.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-05

---

## 1. Today's Overview

CoPaw (QwenPaw) shows **high velocity** with 45 PRs and 19 issues updated in the last 24 hours. The project is in active stabilization mode for the v2.1.0-beta.1 desktop release, with multiple critical regressions surfacing (Python subprocess crashes, browser SDK failures, channel startup races). Merge rate is healthy (18 PRs closed/merged vs 27 open), indicating maintainers are keeping pace. No new release cut today, but several hotfix PRs target the beta blockers. Community engagement is strong — multiple first-time contributors and active discussion on UX pain points (approval prompts on WeChat, file drag-and-drop, skill token bloat).

---

## 2. Releases

**No new releases published today.**  
Current latest: `v2.1.0-beta.1` (Tauri Desktop) — reported to have blocking regressions on Windows (PYTHONHOME injection, Playwright crashes). A stable v2.1.0 release will likely wait for the open critical bug fixes (#6697, #6698, #6696).

---

## 3. Project Progress — Merged / Closed PRs Today (2026-08-05)

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#6692](https://github.com/agentscope-ai/QwenPaw/pull/6692) | `fix: avoid logging conversation command arguments` | Security/Privacy | Stops raw `/compact` args (may contain secrets) from appearing in INFO logs; adds regression test |
| [#6678](https://github.com/agentscope-ai/QwenPaw/pull/6678) | `fix(ci): install Playwright Chromium for the integration suite` | CI | Unblocks nightly browser integration tests (7 failing cases) |
| [#6686](https://github.com/agentscope-ai/QwenPaw/pull/6686) | `test(integration): fix chrome contract mismatches and add missing p-tier markers` | CI/Testing | Fixes PR gate coverage hole; ensures integration tests carry priority tiers |
| [#6679](https://github.com/agentscope-ai/QwenPaw/pull/6679) | `test(integration): align import-local with #6487 and widen a flaky poll window` | CI/Testing | Fixes deterministic 403 failures in `/import-local` tests after source-guard change |
| [#6685](https://github.com/agentscope-ai/QwenPaw/pull/6685) | `fix(timestamp): improve timestamp handling in agentscope_msg_to_message` | Bug Fix | Resolves [#6301](https://github.com/agentscope-ai/QwenPaw/issues/6301) — naive UTC timestamps incorrectly treated as local time |
| [#6628](https://github.com/agentscope-ai/QwenPaw/pull/6628) | `fix(scroll): use SystemMsg for compressed memory placeholder` | Bug Fix | Fixes DeepSeek/OpenAI API 400 errors when context compression injects `[context compressed]` as `role=user` |
| [#6673](https://github.com/agentscope-ai/QwenPaw/pull/6673) | Frontend conversation window display issue | Bug Fix | UI regression in v2.1.0b1 console (screenshot attached) |
| [#6693](https://github.com/agentscope-ai/QwenPaw/pull/6693) | DELETE | Cleanup | Trivial cleanup |

**Net progress**: 8 PRs merged/closed today — primarily CI stabilization, security hardening, and two user-visible bug fixes (timestamp, scroll compression).

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) *DeepSeek thinking mode fails in multi-turn* | 5 | Bug | **Provider compatibility** — OpenAI formatter drops `ThinkingBlock`, breaking DeepSeek reasoning_content in multi-turn; workaround exists but fragile |
| [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) *Drag-and-drop files should read original path, not copy* | 5 | Enhancement | **UX parity** — Users expect desktop-agent behavior (Cursor, Claude): direct file read without media/ copy overhead |
| [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) *Add retry for Matrix channel startup* | 4 | Enhancement | **Reliability** — Self-hosted Matrix often slower than QwenPaw startup; no auto-retry forces manual channel re-save |
| [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) *WeChat iLink: context_token consumed by typing indicator* | 2 | Bug | **Channel correctness** — One-time token used twice (typing + reply) → replies rejected, "working" stuck |
| [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) *On-demand skill loading* | 1 | Feature | **Token efficiency** — 27+ skills consume 8-10k tokens (25-30% of system prompt) every request |
| [#6645](https://github.com/agentscope-ai/QwenPaw/pull/6645) *Feat/os enhancements* | — | Feature (PR) | **Desktop OS integration** — Full-screen, Dock, Mission Control, unified App Store/local/plugin registration, window management |

**Underlying themes**:  
- **Provider/model compatibility** is a recurring friction point (DeepSeek, OpenRouter, AgentScope message formats)  
- **Desktop UX parity** with Cursor/Claude is a strong user expectation (file handling, global rules, window management)  
- **Channel reliability** (Matrix, WeChat) needs hardened startup/retry logic  
- **Token budget pressure** from skill bloat is driving architectural requests (lazy loading)

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR | Notes |
|----------|-------|--------|--------|-------|
| **Critical (Release Blocker)** | [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) `v2.1.0b1 desktop injects PYTHONHOME → every python subprocess crashes (ModuleNotFoundError: encodings)` | Open | None | Windows Tauri + PyInstaller onedir; breaks **all** Python tooling (formatters, linters, user scripts) |
| **Critical (Release Blocker)** | [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) `v2.1.0b1 browser SDK: open() always fails with WireProtocolError (Target crashed)` | Open | None | Isolated Playwright session connects but crashes on every `open()`; Windows 11 |
| **High** | [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) `WeChat iLink: one-time context_token consumed by typing indicator → replies rejected (ret=-2)` | Open | None | Breaks WeChat channel entirely; "working" indicator stuck |
| **High** | [#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) `Huge tool output freezes history load / triggers context window overflow` | Open | None | MB-scale tool outputs saved verbatim → web console hangs, context OOM |
| **High** | [#6683](https://github.com/agentscope-ai/QwenPaw/issues/6683) `App Center install qwenpaw-creator fails: No module named 'utils.env' (plugin namespace conflict)` | Open | [#6688](https://github.com/agentscope-ai/QwenPaw/pull/6688) (open) | Bare absolute imports (`import utils.env`) leak across plugin namespaces |
| **Medium** | [#6687](https://github.com/agentscope-ai/QwenPaw/issues/6687) `OpenRouter multimodal probe overwrites documented capabilities with false` | Open | None | Model capability detection regresses for OpenRouter models |
| **Medium** | [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690) `cron pause/resume doesn't persist enabled state → lost on restart` | Open | [#6691](https://github.com/agentscope-ai/QwenPaw/pull/6691) (open) | Only updates APScheduler memory, not repo |
| **Medium** | [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) `Auto-compression (Scroll) doesn't trigger summarize_when_compact memory` | Open | [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) (open) | Manual `/compact` works; auto-eviction path missing memory hook |
| **Low** | [#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) `DeepSeek thinking mode: reasoning_content missing after OpenAI formatter skips ThinkingBlock` | Open | None | Workaround exists (retry injects placeholder) but fragile |

**Critical blockers for v2.1.0 stable**: #6697, #6698, #6696 — all desktop/channel regressions introduced in beta.1.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood for Next Version | Rationale |
|---------|----------|----------------------------|-----------|
| **On-demand skill loading** (lazy load skill descriptions) | [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) | High | Concrete token savings (8-10k), clear architecture change, strong user pain |
| **Global rules / system prompt pinning** (`.agent` / `.claude` style) | [#6694](https://github.com/agentscope-ai/QwenPaw/issues/6694) | High | Direct UX parity with Cursor/Claude; simple config addition |
| **Drag-and-drop file read from original path** (no copy to media/) | [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) | High | 5 comments, clear desktop-agent expectation, reduces disk churn |
| **Channel startup retry with backoff** (Matrix, others) | [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) + [#6689](https://github.com/agentscope-ai/QwenPaw/pull/6689) | High | PR #6689 already implements shared `ChannelStartupError` retry contract |
| **Kanban board for Playground multi-agents** | [#4947](https://github.com/agentscope-ai/QwenPaw/issues/4947) | Low | Old issue (Jun), closed today — likely deprioritized |
| **Desktop OS integration** (full-screen, Dock, Mission Control, window mgmt) | [#6645](https://github.com/agentscope-ai/QwenPaw/pull/6645) | Medium | Large PR, active development, but may target post-v2.1 |
| **Reranker support for ReMe memory search** | [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | Medium | Backend PR open since Jul 23, under review; adds quality knob |
| **LoongSuite tracing integration** | [#6627](https://github.com/agentscope-ai/QwenPaw/issues/6627) | Low | Niche observability ask; no PR yet |

**Predicted next-version scope (v2.1.0 stable)**: Critical bug fixes + channel retry (#6689) + cron persistence (#6691) + plugin namespace fix (#6688). Lazy skill loading and global rules are strong candidates for v2.2.

---

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Desktop beta breaks Python tooling** | [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) — "every python subprocess crashes" | **Complete blocker** for developers using formatters, linters, custom scripts on Windows |
| **Browser tool unusable in beta** | [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) — "every `open()` fails with Target crashed" | **Blocks web automation** — key differentiator for desktop agent |
| **WeChat channel broken** | [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) — typing indicator consumes one-time token | **Channel unusable**; approval prompts also unreachable on WeChat-only ([#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695)) |
| **History load freezes on large tool output** | [#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) — "page unresponsive, context window overflow" | **Data loss risk** — users cannot recover conversations with large outputs |
| **File drag-and-drop copies instead of reading** | [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) — "creates mess in media/, other tools read direct" | **Workflow friction** — extra step, disk waste, violates desktop-agent mental model |
| **Skill bloat eats 25-30% of system prompt** | [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) — 27 skills = 8-10k tokens | **Cost & latency** — every request pays for unused skills |
| **No global system prompt** | [#6694](https://github.com/agentscope-ai/QwenPaw/issues/6694) — "partial prompts fail without pinned global rule" | **Prompt engineering broken** — cannot enforce cross-conversation rules |
| **Matrix channel needs manual restart** | [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) — "server starts faster than Matrix, no retry" | **Ops burden** — manual re-save after every reboot |

**Satisfaction signals**: Users actively compare to Cursor/Claude Desktop — expect parity on file handling, global rules, window management. Beta regressions on Windows are generating frustration ("every python subprocess crashes").

---

## 8. Backlog Watch — Stale / Needing Maintainer Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#4267](https://github.com/agentscope-ai/QwenPaw/pull/4267) `feat(security): Mac OS file path white list + sandbox-exec` | **3 months** (opened May 13) | **Security hardening** for shell tools on macOS; "Under Review" but no movement since Aug 5 update | Open, stale review |
| [#6331](https://github.com/agentscope-ai/QwenPaw/pull/6331) `chore(console): specify Node.js version requirement` | **2 weeks** | **DX basics** — contributors can't discover required Node version (CI uses 20 but undocumented) | Open, first-time contributor |
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) `feat: add reranker support for ReMe memory search` | **2 weeks** | **Quality improvement** for memory retrieval; backend ready, under review | Open, under review |
| [#6504](https://github.com/agentscope-ai/QwenPaw/pull/6504) `feat: unify project directories and harden file workspace` | **1 week** | **Architectural cleanup** — decouples project dir from coding tools, adds controlled SessionContext | Open, large scope

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-05

## 1. Today's Overview

ZeroClaw shows **high architectural velocity** with 50 PRs updated and 8 issues active in the last 24 hours. The project is deep in **RFC-driven redesigns** (Goal Mode v1, shell confirmation tiers, unified attachments, MoA provider, Wasm UI migration) while simultaneously hardening **security-critical paths** (webhook authentication, tool-call parsing, browser sandbox escapes). No releases were cut today; the maintainer queue is saturated with large, cross-cutting PRs (A2A client, provider registry unification, eval regression suite) that require multi-round review. Overall health: **active but review-bound** — throughput is limited by maintainer bandwidth on high-risk, high-complexity changes.

---

## 2. Releases

**No new releases today.** The latest published version remains prior to 2026-08-05.

---

## 3. Project Progress (Merged/Closed in Last 24h)

| PR / Issue | Title | Type | Impact |
|------------|-------|------|--------|
| **#8568** | [Feature]: Mixture-of-Agents (MoA) virtual model provider | Issue **CLOSED** | RFC accepted → implementation likely tracked in follow-up PRs; enables multi-model aggregation without leaving standard model selection UI. |
| *(2 PRs merged/closed per data)* | Details not individually listed in feed | — | The two closed PRs are not enumerated in the provided data; check GitHub "Closed" filter for exact merges. |

**Key movement:** The MoA RFC (#8568) was closed as accepted — signaling the architecture is approved and implementation work can proceed. Most other high-priority PRs remain open awaiting review.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | 👍 | Core Need |
|------|----------|----|-----------|
| **[#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)** RFC: Goal mode v1 — bounded foreground Matrix work | 16 | 1 | **Durable multi-turn agent execution** — users need the agent to pursue a bounded objective across turns with checkpointing, handoff, and control-plane clarity. 16 comments indicate intense design debate. |
| **[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)** RFC: Per-execution confirmation tier for high-risk shell commands | 14 | 0 | **Operator safety for shell tools** — demand for Claude Code-style allow/ask/deny policy per command pattern; revised 3×, now narrowed to normative shell-policy contract. |
| **[#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)** RFC: Unified attachment architecture for web chat and channels | 13 | 0 | **Consistent file/image handling** across web UI, WhatsApp, Slack, Telegram, etc. — currently fragmented; blocker for rich-media workflows. |
| **[#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)** RFC: Replace React/Vite with Rust→Wasm framework | 4 | 1 | **Eliminate Node.js from build/runtime** — strategic shift to Dioxus/Leptos/Yew; splits from #7674. Long-term maintainability vs. migration cost. |
| **[#9595](https://github.com/zeroclaw-labs/zeroclaw/issues/9595)** Refactor: Derive endpoint metadata from one family registry | 1 | 0 | **Provider config deduplication** — eliminate parallel surfaces for endpoint defaults; accepted, follow-up PR expected. |

**Underlying theme:** The community is converging on **control-plane maturity** (goals, confirmations, attachments) and **architectural consolidation** (provider registry, Wasm UI, A2A protocol). Maintainer review capacity is the bottleneck.

---

## 5. Bugs & Stability (Reported/Updated Today, Ranked by Severity)

| Severity | Item | Status | Fix PR? |
|----------|------|--------|---------|
| **S0 — Data loss / Security** | **[#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565)** Gateway webhook handlers do not fail closed (WhatsApp Cloud, Linq, WATI) | OPEN, `in-progress` | No fix PR linked yet; source inspection confirms unauthenticated inbound dispatch. **Urgent.** |
| **High** | **[#9362](https://github.com/zeroclaw-labs/zeroclaw/pull/9362)** Browser tool: arbitrary file write via `screenshot` path parameter | OPEN PR | **PR open** — adds workspace policy validation (`is_path_allowed`, `resolve_tool_path`). |
| **High** | **[#9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477)** Tool-call parser: recover invocations wrapped in `<tools>` tag (Qwen2.5-Coder) | OPEN PR | **PR open** — handles overloaded `<tools>` tag (declaration vs. invocation). |
| **High** | **[#9715](https://github.com/zeroclaw-labs/zeroclaw/pull/9715)** JSONL session migration not retry-safe (race on SQLite) | OPEN PR | **PR open** — adds mutation lock + atomic transaction + no-clobber archive. |
| **High** | **[#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320)** Cron agent jobs: no wall-clock timeout → lock held indefinitely | OPEN PR | **PR open** — bounds `run_tool_call_loop` with timeout that releases `locked_at`. |
| **S3 — Minor** | **[#9756](https://github.com/zeroclaw-labs/zeroclaw/issues/9756)** Daemon prints multiple Telegram pairing codes, no way to tell which is live | OPEN | No PR yet; UX confusion on fresh channel setup. |

**Top action:** #9565 (S0 webhook auth) must land before any channel-facing release. #9362 and #9477 are high-value security fixes with PRs ready for review.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Goal Mode v1 (bounded multi-turn execution)** | #8303 (RFC, 16 comments, P2, high risk) | **High** — design converging; implementation PRs likely next. |
| **Shell command confirmation tier (allow/ask/deny)** | #7155 (RFC, 14 comments, P1, high risk) | **High** — normative scope narrowed; security-critical for CLI users. |
| **Unified attachment architecture** | #9488 (RFC, 13 comments, P2, high risk) | **Medium-High** — blocks rich-media parity across channels. |
| **A2A outbound client (Phase 1)** | #9324 (PR, XL, P2) | **High** — PR open, implements RFC #9106; 4 tools + wire model + config. |
| **Mixture-of-Agents virtual provider** | #8568 (Issue CLOSED accepted) | **Medium** — architecture approved; implementation follows. |
| **Rust→Wasm web UI (replace React/Vite)** | #8132 (RFC, P3) | **Low-Medium** — strategic but large; depends on framework choice (Dioxus/Leptos/Yew). |
| **Provider endpoint registry unification** | #9595 (Issue accepted, follow-up) | **High** — refactor, low user-facing risk, high maintainability gain. |
| **Eval regression suite + pass@k statistics** | #9225, #9224 (PRs, principal contributor) | **High** — CI hardening; seeds 18 replay cases + repeat-run stats. |

**Predicted next-version cluster:** Goal Mode, Shell Confirmation Tier, A2A Client, Provider Registry Unification, Eval Suite — all have active PRs or accepted RFCs.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Agent "goes silent" on context exhaustion** | #9504 — no terminal notice when turn ends due to context window | 1 PR fixing |
| **Multiple Telegram pairing codes confuse operators** | #9756 — fresh daemon prints several bind codes, no indicator of live one | 1 issue (new) |
| **Shell tool safety — no per-command confirm** | #7155 — users want Claude Code-style allow/ask/deny | 14-comment RFC |
| **Webhook handlers accept unauthenticated messages** | #9565 — WhatsApp/Linq/WATI inbound dispatch without verification | S0 severity |
| **Browser tool can write arbitrary files** | #9362 — screenshot `path` param bypasses workspace policy | High-sev PR |
| **Model-specific tool-call formats break parsing** | #9723 (DeepSeek DSML), #9477 (Qwen `<tools>`), #9757 (Anthropic image blocks) | 3 PRs in flight |
| **Cron jobs hang forever, lock DB** | #9320 — no wall-clock timeout on agent runs | 1 PR fixing |

**Satisfaction signals:** Principal contributors (IftekharUddin, Audacity88, NiuBlibing, Project516) are shipping large, well-scoped PRs with test coverage — indicating **high internal velocity**. External user friction centers on **channel onboarding (Telegram)**, **silent failures (context, cron)**, and **security defaults (shell, webhooks, browser)**.

---

## 8. Backlog Watch (Long-Unanswered / Stalled High-Value Items)

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| **[#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)** Goal Mode v1 RFC | Open since 2026-06-24 (42 days) | Core multi-turn UX; 16 comments, needs maintainer decision on scope | High risk, design churn; awaits final RFC disposition |
| **[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)** Shell Confirmation Tier RFC | Open since 2026-06-03 (63 days) | Security default for all CLI users; 3 revisions, now narrowed | Maintainer review on normative scope |
| **[#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)** Rust→Wasm UI RFC | Open since 2026-06-22 (44 days) | Strategic build/runtime simplification; `needs-author-action` | Framework choice (Dioxus/Leptos/Yew) unresolved |
| **[#6622](https://github.com/zeroclaw-labs/zeroclaw/pull/6622)** WhatsApp LID allowlist test | Open since 2026-05-13 (84 days) | Channel reliability; maintainer-refreshed branch | Low review priority vs. security PRs |
| **[#9224](https://github.com/zeroclaw-labs/zeroclaw/pull/9224)** Eval: repeated runs + pass@k | Open since 2026-07-21 (15 days) | CI quality gate; XL PR, principal contributor | Review bandwidth |
| **[#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324)** A2A outbound client Phase 1 | Open since 2026-07-24 (12 days) | Inter-agent protocol; implements RFC #9106 | Two review rounds done; needs final merge |

**Recommendation:** Prioritize review bandwidth for **#9565 (S0 webhook)**, **#9362/#9477 (tool security)**, **#7155 (shell policy)**, and **#8303 (Goal Mode)** — these unblock user-facing safety and the next major UX leap.

---

*Digest generated from GitHub API data as of 2026-08-05. Links point to live issues/PRs on `zeroclaw-labs/zeroclaw`.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*