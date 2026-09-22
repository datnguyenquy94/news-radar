# OpenClaw Ecosystem Digest 2026-09-22

> Issues: 270 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-22 04:30 UTC

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

# OpenClaw Project Digest — 2026-09-22

---

## 1. Today's Overview

OpenClaw shows **exceptionally high velocity** with 770 items (270 issues + 500 PRs) updated in the last 24 hours. The project is in active stabilization mode: a new **extended-stable (LTS) release v2026.7.35** shipped, while 200 open issues and 396 open PRs indicate a large backlog of critical bugs (session livelocks, memory unbounded growth, crash loops, message loss) and features awaiting review. The "diamond lobster" (🦞) and "platinum hermit" (🐚) issue ratings flag the highest-severity items—many are P0/P1 with session-state and crash-loop impact. Maintainer attention is the primary bottleneck; dozens of PRs sit in "ready for maintainer look" state.

---

## 2. Releases

### **v2026.7.35 — Extended-Stable (LTS) Gateway-Only Release**
- **Date:** 2026-09-22 (published)
- **Scope:** Gateway-only; current equivalent to LTS
- **Base:** OpenClaw from end of July 2026 + critical security updates, reliability & performance fixes, new model support
- **Note:** The current latest version is **2026.9.5** (newer than this LTS cut)
- **Migration:** No breaking changes reported; intended as a safe upgrade target for production gateways needing long-term support.

[Release Link](https://github.com/openclaw/openclaw/releases/tag/v2026.7.35)

---

## 3. Project Progress (Merged/Closed PRs Today)

**104 PRs merged/closed in 24h.** Highlights from the most recent merged work (inferred from "ready for maintainer look" PRs that likely just landed):

| PR | Area | Summary |
|----|------|---------|
| [#155378](https://github.com/openclaw/openclaw/pull/155378) | WebChat, Gateway | Retain failed-turn diagnostics (expand error capture beyond 512 chars) |
| [#155293](https://github.com/openclaw/openclaw/pull/155293) | Web UI, Plugins | Put "Enable" first for disabled plugins (UX affordance) |
| [#137483](https://github.com/openclaw/openclaw/pull/137483) | Recovery | Preserve restart-safe tool ownership across recovery handoffs |
| [#155424](https://github.com/openclaw/openclaw/pull/155424) | Codex | Avoid U+FFFD replacement chars in catalog thread metadata |
| [#155417](https://github.com/openclaw/openclaw/pull/155417) | CI, iOS | Reduce Xcode 27 iOS smoke overhead (unused Intel sim binaries) |
| [#155403](https://github.com/openclaw/openclaw/pull/155403) | CI | Reduce extension fanout, preserve fast artifact builds |
| [#154477](https://github.com/openclaw/openclaw/pull/154477) | GitHub Publication, Security | Bind queued GitHub publication to its requester (prevents permission loss after restart) |
| [#154534](https://github.com/openclaw/openclaw/pull/154534) | Exec, Security | Avoid approval prompts for read-only audit-suppression searches |
| [#155358](https://github.com/openclaw/openclaw/pull/155358) | Gateway, Codex, Sandbox | Honor sandbox requirements for native forks |
| [#151099](https://github.com/openclaw/openclaw/pull/151099) | Telegram | State current message body inside carrier block (fixes empty body on inline quotes) |
| [#155422](https://github.com/openclaw/openclaw/pull/155422) | Diagnostics | Filter stability events before cloning (CPU savings) |
| [#155423](https://github.com/openclaw/openclaw/pull/155423) | Memory-core | Isolate forget tests from automatic retention (fixes flaky CI) |
| [#155419](https://github.com/openclaw/openclaw/pull/155419) | Mentions, Web UI | Keep Inbox database work off Gateway thread |
| [#155409](https://github.com/openclaw/openclaw/pull/155409) | Xiaomi | Add MiMo V2.6 model support (pro, flash, ultra) |
| [#154893](https://github.com/openclaw/openclaw/pull/154893) | Auth, Security | Enforce operator role model policies across retries/tools |
| [#155204](https://github.com/openclaw/openclaw/pull/155204) | Auth | Keep healthy profiles after compaction |
| [#154839](https://github.com/openclaw/openclaw/pull/154839) | Model Pickers, Security | Respect role model restrictions in pickers (iOS, macOS, Web) |
| [#155428](https://github.com/openclaw/openclaw/pull/155428) | Snapshots | Allow maintenance of snapshots from a running gateway |
| [#155429](https://github.com/openclaw/openclaw/pull/155429) | Web UI | Show setup errors without hiding details (copyable diagnostics) |
| [#155377](https://github.com/openclaw/openclaw/pull/155377) | ACPX | Adopt lifecycle repairs without blocking session migration |
| [#155418](https://github.com/openclaw/openclaw/pull/155418) | UI Tests | Speed up router retention tests |
| [#154721](https://github.com/openclaw/openclaw/pull/154721) | Gateway, LMStudio, llama.cpp | Fix `/v1/embeddings` reporting zero token usage |
| [#155431](https://github.com/openclaw/openclaw/pull/155431) | CI, QA, MCP | Repair QA and MCP test contracts (unblocks 8 failing CI jobs) |
| [#152118](https://github.com/openclaw/openclaw/pull/152118) | Agents, Codex | Continue settled file-tool work after native quota exhaustion |
| [#123837](https://github.com/openclaw/openclaw/pull/123837) | Telegram, Discord, Slack, Feishu | Add copy-text presentation buttons (native Telegram, fallback elsewhere) |
| [#155357](https://github.com/openclaw/openclaw/pull/155357) | Gateway, Agents | Recover subagent completions across requester restarts |
| [#155425](https://github.com/openclaw/openclaw/pull/155425) | Video, Image, Audio | Share reference input limit checks (deduplication) |
| [#149880](https://github.com/openclaw/openclaw/pull/149880) | Gemini | Add `google-interactions` API backend (opt-in) |
| [#155349](https://github.com/openclaw/openclaw/pull/155349) | Sessions, Teams | Visible work sessions belong to the requester (ownership fix) |

**Pattern:** Heavy focus on **stability** (recovery, sandbox, session ownership), **security boundaries** (role policies, auth), **CI/test health**, and **multi-channel UX** (Telegram, WebChat, Feishu). New model support (Xiaomi MiMo V2.6, Gemini Interactions) continues rolling out.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Reactions | Core Issue |
|------|----------|-----------|------------|
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 23 | 0 | **Session transcript projection livelock** under sustained writes — blocks main thread, stalls all channel transports (P1, 🦞) |
| [#111897](https://github.com/openclaw/openclaw/issues/111897) | 19 | 1 | **Duplicate replies** from concurrent runs in same session lane under load (P1, 🦪) |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | 16 | 0 | **SQLite unbounded growth** — `memory_index_chunks` + `memory_embedding_cache` have no retention policy (P2, 🦞) |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 14 | 1 | **Multi-agent orchestration instability** — config overwrites, session-lock failures, detached child work (P2, 🦪) |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) | 13 | 0 | **SQLite snapshot restore lacks crash/identity guarantees** — can report success without durable parent dirs (P2, 🦞) |
| [#114211](https://github.com/openclaw/openclaw/issues/114211) | 10 | 0 | **Matrix room agents loop** on no-reply output, restart recovery, stale replay (P1, 🐚) |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | 9 | 0 | **Billing cooldown outlives outage** — 5hr fixed window, no probe-based recovery, no manual reset (P0, 🦞, UX release blocker) |
| [#114154](https://github.com/openclaw/openclaw/issues/114154) | 9 | 0 | **bundle-mcp tools invisible** to agent despite passing policy & health checks (P1, 🦪) |
| [#58514](https://github.com/openclaw/openclaw/issues/58514) | 9 | 1 | **Google Chat Space/Group messages silently ignored** (DMs work) — CLOSED stale |
| [#139578](https://github.com/openclaw/openclaw/issues/139578) | 9 | 0 | **llama.cpp EmbeddingGemma runs at server-default ubatch 512** — regression from #134389 (P1, stale) |

**Underlying needs:**  
- **Session reliability** is the #1 pain point (livelocks, duplicate turns, snapshot integrity, crash loops).  
- **Memory/storage hygiene** (unbounded SQLite growth, no retention) threatens long-running deployments.  
- **Multi-agent/session coordination** remains fragile (locking, ownership, handoffs).  
- **Provider resilience** (billing cooldowns, fallback chains) lacks operational tooling.  
- **Channel-specific regressions** (Matrix, Google Chat, Telegram, Feishu) indicate integration test gaps.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? | Key Symptoms |
|----------|-------|--------|---------|--------------|
| **P0** | [#115642](https://github.com/openclaw/openclaw/issues/115642) Billing cooldown outlives outage | Open | No | 5hr fixed `disabledUntil`; subscription users locked out after transient billing error; no probe recovery, no manual reset |
| **P1 🦞** | [#115908](https://github.com/openclaw/openclaw/issues/115908) Transcript projection livelock | Open | No | Main thread stalled tens of seconds; all channel transports blocked |
| **P1 🦞** | [#115546](https://github.com/openclaw/openclaw/issues/115546) CLI-budget compaction timeout far below deadline (4.9s–50s vs 180s) | Open | No | 100% failure on large sessions; wake death-spiral |
| **P1 🦞** | [#115424](https://github.com/openclaw/openclaw/issues/115424) Gateway V8 heap OOM → 7-core-dump loop via restart-recovery | Open | No | Hot-resume converts one crash into crash loop |
| **P1 🦞** | [#114234](https://github.com/openclaw/openclaw/issues/114234) Usage-cost refresh lock never releasable after PID reuse (containers) | Open | No | Cache permanently frozen |
| **P1 🦞** | [#112391](https://github.com/openclaw/openclaw/issues/112391) Docker `:latest` tag regressed to 2026.6.33, triggers downgrade guard | Open | No | Blocks startup |
| **P1 🦞** | [#114169](https://github.com/openclaw/openclaw/issues/114169) `BUSY_ACTIVITY_STALE_THRESHOLD_MS` hardcoded 25min — health monitor restarts channel mid-turn | Open | No | No config surface |
| **P1 🦞** | [#113318](https://github.com/openclaw/openclaw/issues/113318) `/v1/responses` client tools dropped by native Codex app-server harness | Open | Linked PR open | Required tools unavailable to model |
| **P1 🦞** | [#112160](https://github.com/openclaw/openclaw/issues/112160) SSH sandbox does not stage inbound media into existing remote workspace | Open | No | Media stuck on gateway-local FS |
| **P1 🦪** | [#111897](https://github.com/openclaw/openclaw/issues/111897) Concurrent runs deliver duplicate/redundant replies | Open | No | Message loss/duplication under load |
| **P1 🦪** | [#113701](https://github.com/openclaw/openclaw/issues/113701) Context overflow — large tool outputs exceed window, compaction can't recover | Open | No | Sessions enter failure loop |
| **P1 🦪** | [#114154](https://github.com/openclaw/openclaw/issues/114154) bundle-mcp tools never bundled despite passing policy/probe | Open | No | ToolSearch finds nothing, zero `tool_action` attempts |
| **P1 🐚** | [#114211](https://github.com/openclaw/openclaw/issues/114211) Matrix room agents loop on no-reply output, stale replay | Open | No | Self-sustaining loop |
| **P2 🦞** | [#114612](https://github.com/openclaw/openclaw/issues/114612) SQLite unbounded growth — no retention on memory tables | Open | No | Disk fill over time |
| **P2 🦞** | [#113306](https://github.com/openclaw/openclaw/issues/113306) Snapshot restore lacks crash/identity guarantees | Open | No | Success reported without durable parent dirs |
| **P2 🦞** | [#112638](https://github.com/openclaw/openclaw/issues/112638) `session.maintenance enforce` mode silently exceeds bounds (thread/channel entries exempt) | Open | No | MaxEntries/maxDiskBytes ignored |
| **P2 🦞** | [#115034](https://github.com/openclaw/openclaw/issues/115034

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-09-22)

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source landscape is **highly fragmented but technically convergent**. Twelve tracked projects show a bimodal distribution: 5 projects (OpenClaw, NanoBot, Hermes, LobsterAI, CoPaw, ZeroClaw) operate at **high velocity** (>20 PRs/day) with active stabilization or feature sprints, while 4 projects (PicoClaw, NanoClaw, Moltis, IronClaw) maintain **moderate/low velocity** focused on niche capabilities. Two projects (NullClaw, ZeptoClaw) show zero recent activity. The ecosystem is coalescing around **multi-channel gateway architectures**, **local-first model support**, **session reliability**, and **security hardening**—with OpenClaw serving as the de facto upstream reference for gateway/core patterns adopted by LobsterAI, Hermes, and NanoClaw.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Status | Health Score* |
|---------|-------------|-----------|-------------------|----------------|---------------|
| **OpenClaw** | 270 | 500 | 104 | **LTS v2026.7.35** (Gateway-only) | 🟢 **Critical Mass** |
| **NanoBot** | 3 | 31 | 4 | None today | 🟢 **High Velocity** |
| **Hermes Agent** | 10 | 50 | 3 | **v0.21.4** (yesterday) | 🟡 **Stabilizing** |
| **PicoClaw** | 3 | 3 | 0 | None (v0.3.1 current) | 🟡 **Moderate** |
| **NanoClaw** | 1 | 8 | 1 | None | 🟢 **Steady** |
| **NullClaw** | 0 | 0 | 0 | None | 🔴 **Inactive** |
| **IronClaw** | 1 (auto) | 0 | 0 | None | 🔴 **Maintenance Only** |
| **LobsterAI** | 2 | 15 | 13 | None | 🟢 **Stabilization Sprint** |
| **Moltis** | 2 | 2 | 0 | None | 🟡 **Niche Feature Focus** |
| **CoPaw** | 20 | 36 | 20 | **v2.2.2 imminent** | 🟢 **High Velocity** |
| **ZeptoClaw** | 0 | 0 | 0 | None | 🔴 **Inactive** |
| **ZeroClaw** | 5 | 50 | 2 | None | 🟢 **High Velocity** |

*Health Score: 🟢 Active development + releases/stabilization | 🟡 Active but narrow focus or pre-release | 🔴 No meaningful human activity in window

---

## 3. OpenClaw's Position

**Scale Advantage**: OpenClaw operates at **10–50× the raw activity volume** of peers (770 items vs. 3–50 for others), reflecting its role as the **core reference implementation** for gateway, session, and multi-channel infrastructure.

**Technical Approach Differences**:
- **Gateway-centric architecture**: OpenClaw isolates the gateway as a standalone LTS surface (v2026.7.35), while LobsterAI, Hermes, and NanoClaw embed or fork it.
- **Session-state rigor**: OpenClaw tracks P0/P1 livelocks, snapshot integrity, and crash-loop recovery as first-class concerns—downstream projects inherit these fixes rather than re-solving them.
- **Security boundary enforcement**: Role-based model policies, sandbox honors, and auth compaction are baked into OpenClaw's merge stream; peers adopt via rebase.

**Community Size**: OpenClaw's issue/PR count implies **orders of magnitude more contributors and production deployments**. Peers (LobsterAI, Hermes, ZeroClaw) show 10–50 active items/day—consistent with single-team or small-community velocity.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Session reliability & crash recovery** | OpenClaw, Hermes, LobsterAI, ZeroClaw, CoPaw | Livelock prevention (OpenClaw #115908), transcript sync (Hermes #70108), gateway restart latency (LobsterAI #2738), snapshot durability (OpenClaw #113306), DoomLoopGate (CoPaw #7919) |
| **Memory/storage hygiene** | OpenClaw, NanoBot, ZeroClaw | SQLite unbounded growth (OpenClaw #114612), auto-compaction deadlock (NanoBot #5849), log rotation (ZeroClaw #10214) |
| **Multi-channel/transport parity** | OpenClaw, Hermes, PicoClaw, NanoClaw, CoPaw | Telegram dedup (Hermes #92408), IRCv3 multiline (PicoClaw #3354), Signal DM consistency (NanoClaw #2689), Matrix loop (OpenClaw #114211), Feishu/Slack/Discord (OpenClaw #123837) |
| **Local/self-hosted model support** | NanoBot, PicoClaw, Moltis, ZeroClaw, CoPaw | OpenAI-compatible provider abstraction (PicoClaw #3366), VoxCPM TTS via vLLM-Omni (Moltis #1283), llama.cpp token estimation (ZeroClaw #9453), Cursor Agent SDK (NanoClaw #3356) |
| **Security hardening (SSRF, auth, supply chain)** | OpenClaw, ZeroClaw, Hermes, LobsterAI | Role policy enforcement (OpenClaw #154893), webhook DNS pinning (ZeroClaw #10678), OAuth scope fixes (PicoClaw #3378), RUSTSEC mitigation (ZeroClaw #11038), keychain access (LobsterAI #2736) |
| **Observability & latency tracing** | NanoBot, ZeroClaw, OpenClaw | BUILD-stage tracing (NanoBot #5846), context meter for local models (ZeroClaw #9453), CI/test contract repair (OpenClaw #155431) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architectural Note |
|---------|------------------------|-------------|-------------------|
| **OpenClaw** | **Reference gateway/platform** — LTS releases, multi-channel transport, session authority | Infrastructure teams, downstream forks | Gateway-as-a-service; plugin/channel ecosystem |
| **NanoBot** | **WebUI-first IDE-like UX** — commands panel, subtasks, Mermaid, usage analytics | Power users, developers wanting rich chat UI | Single-binary + WebUI; aggressive frontend investment |
| **Hermes Agent** | **Desktop-native multi-platform** — Discord/Telegram/Matrix/Slack with Kanban automation | Community managers, multi-comm operators | Electron + Rust; profile-capability composability (RFC #95916) |
| **PicoClaw** | **Lightweight + protocol breadth** — IRCv3, QQ, minimal deps | Embedded/edge, privacy self-hosters | Go-based; focuses on transport correctness over model features |
| **NanoClaw** | **IDE/provider integration** — Cursor Agent SDK, Signal/WhatsApp polish | Developers using Cursor, multi-channel operators | TypeScript; skill-based install wizard |
| **LobsterAI** | **OpenClaw distro with macOS/IM polish** — Feishu, Weixin, CJK fonts, keychain | Chinese enterprise/teams, macOS users | Fork of OpenClaw; rapid upstream rebase + local UX fixes |
| **Moltis** | **Voice persona platform** — local TTS (VoxCPM), provider-agnostic voice | Voice-first agents, privacy/offline deployments | Python; vLLM-Omni integration for speech |
| **CoPaw** | **AgentScope-powered coding agent** — DoomLoopGate, Responses API, Telegram tables | Developers, coding-agent users | Rust + WebUI; tight AgentScope upstream sync |
| **ZeroClaw** | **Governance + security-first runtime** — RFC process, agent delegation, portable bundles | Security-conscious orgs, multi-agent workflows | Rust; formal ADR/RFC governance, capability-based delegation |
| **IronClaw** | **Benchmark harness** — officeqa evaluation, model-quality taxonomy | Model evaluators, researchers | CI-only; no user-facing product |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration (High Velocity + Feature Sprint)** | NanoBot, CoPaw, ZeroClaw | 30–50 PRs/day; large feature PR clusters (WebUI, Cursor SDK, RFCs); pre-release or frequent patches |
| **Stabilization Sprint (High Velocity + Bug Crush)** | OpenClaw, LobsterAI, Hermes | 15–100+ PRs/day; focus on P0/P1 fixes, LTS cuts, upgrade reliability; release-oriented |
| **Steady Maintenance (Moderate Velocity + Targeted Fixes)** | NanoClaw, PicoClaw, Moltis | 2–8 PRs/day; niche features (IRC, Cursor, TTS), protocol compliance, long-standing bugs |
| **Low/No Activity** | IronClaw, NullClaw, ZeptoClaw | Automated CI only or zero updates; effectively archived or pre-launch |

**Key Insight**: The ecosystem splits between **platform plays** (OpenClaw, ZeroClaw, Hermes) investing in governance/runtime depth and **experience plays** (NanoBot, CoPaw, LobsterAI, Moltis) investing in UX/vertical features. NanoClaw and PicoClaw sit in the middle—extensible but scoped.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence Across Projects | Strategic Implication |
|-------|-------------------------|----------------------|
| **Gateway/transport layer commoditization** | OpenClaw LTS, LobsterAI rebase, Hermes/NanoClaw forks, PicoClaw protocol focus | **Don't rebuild gateway logic**—embed OpenClaw or adopt its patterns; differentiate at UX/skill layer |
| **Local-first model stack maturity** | VoxCPM (Moltis), llama.cpp token est. (ZeroClaw), Cursor SDK (NanoClaw), OpenAI-compat abstraction (PicoClaw) | **Self-hosted parity is table stakes**; invest in provider-agnostic tooling (token counting, streaming recovery) |
| **Session as a durability primitive** | Crash-loop fixes (OpenClaw), snapshot guarantees (OpenClaw), compaction deadlock (NanoBot), transcript sync (Hermes) | **Session state must survive process death**; design for checkpoint/restore from day one |
| **Multi-agent delegation & governance** | ZeroClaw RFC #11027 (agent-to-agent), Hermes profile capabilities RFC #95916, CoPaw batch-tool governance #7926 | **Capability boundaries & cost ceilings** are the next security frontier; expect formal delegation specs |
| **Observability as a product feature** | NanoBot usage analytics (#5851), ZeroClaw log rotation (#10214), OpenClaw CI contract repair (#155431) | **Operators demand cost/latency/usage dashboards**; build telemetry into core loops |
| **Security-by-default in tool execution** | SSRF hardening (ZeroClaw #10070), webhook pinning (ZeroClaw #10678), sandbox honors (OpenClaw #155358), OAuth scopes (PicoClaw #3378) | **Supply-chain and network-level exploits are real**; treat every tool call as untrusted input |

---

**Bottom Line for Decision-Makers**: The ecosystem is **consolidating around OpenClaw's gateway patterns** while diversifying at the **UX, voice, and governance layers**. Teams building agents should **fork/embed OpenClaw for transport/session**, **adopt NanoBot/CoPaw patterns for WebUI**, **track ZeroClaw for delegation security**, and **plan for local-model parity** as a baseline requirement.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-22

---

## 1. Today's Overview

NanoBot shows **high development velocity** with 31 PRs updated in the last 24 hours (27 open, 4 merged/closed) and 3 active issues. The project is in a **feature-heavy sprint** focused on WebUI enhancements (commands panel, subtask outputs, image artifacts, file reference actions, Mermaid rendering, usage analytics) and core stability fixes (auto-compaction deadlock, BUILD-stage latency tracing, memory consolidation locks). No new releases were cut today. The maintainer team (notably `Re-bin`, `KailBug`, `iuiu-py`, `Solaris-star`) is rapidly iterating on both UX polish and foundational reliability.

---

## 2. Releases

**No new releases** published today. The last release data is not provided in the current window.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Type | Summary | Link |
|----|------|---------|------|
| #5770 | **Bug Fix (WebUI)** | Closed: Mobile sidebar no longer auto-focuses search button or shows "Search ⌘K" tooltip on touch devices. | [#5770](https://github.com/HKUDS/nanobot/issues/5770) |
| *(3 other PRs merged/closed)* | — | Details not listed in the feed; likely minor fixes or dependency updates. | — |

**Key advances in open PRs (high-impact, ready for review):**
- **#5857** — Fixes the critical auto-compaction deadlock (#5849) by adding token-budget guards to `summarize_transcript`.
- **#5846** — Adds structured DEBUG timing for BUILD substages to diagnose the 10s–tens-of-seconds latency reported in #5843.
- **#5795 / #5796** — `edit_file` tool fixes: preserves indentation on fallback edits and separator whitespace on inline replacements (both include tests).
- **#4819** — Memory: replaces `WeakValueDictionary` with plain `dict` for consolidation locks to prevent GC-induced identity loss (open since Jul 6).
- **#4820** — Runtime: rejects non-string URLs in `web_fetch` to avoid cache-signature corruption (open since Jul 6).
- **WebUI suite (#5853–#5856, #5847–#5852, #5848, #5831)** — 10+ PRs delivering commands panel, subtask outputs, typed image artifacts, file-reference actions, Mermaid diagrams, session-scoped previews, link previews, usage analytics, and contextual message controls.

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| **#5849 Auto-compaction deadlock** | 0 comments, 0 👍, but **critical severity** — blocks long sessions permanently once history exceeds input budget. | Users need **reliable context management** for extended conversations; the automatic path lacked the budget guard that the manual path (`archive_session`) already had. |
| **#5843 BUILD-stage latency (10s–100s)** | 0 comments, 0 👍, but **high user pain** — every turn stalls before LLM call on long sessions. | Need **observability & optimization** of the prompt-building pipeline; #5846 adds tracing to pinpoint substage costs. |
| **#5858 Adam Network MCP integration example** | New today, 0 comments — signals **ecosystem expansion** interest. | Community wants **plug-and-play examples** for connecting NanoBot to decentralized agent networks (MCP). |
| **WebUI feature cluster (#5847–#5856)** | 10 PRs from `Re-bin` in one day — **massive UX investment**. | Users demand **rich, IDE-like chat interface**: commands, subtasks, image artifacts, file actions, diagrams, usage dashboards. |

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **Critical** | **#5849** Auto-compaction deadlock: `summarize_transcript` sends unbounded history → OOM / permanent stall. | Open | **#5857** (open, adds token-budget guard) |
| **High** | **#5843** BUILD-stage latency 10s–100s on long sessions; root cause unknown. | Open | **#5846** (open, adds substage tracing) |
| **Medium** | **#5795** `edit_file` loses indentation + adds blank line on fallback edits with trailing newline. | Open | **#5795** (open, with test) |
| **Medium** | **#5796** `edit_file` strips separator whitespace in inline replacements → token joining. | Open | **#5796** (open, with test) |
| **Medium** | **#4819** Consolidation locks lost to GC due to `WeakValueDictionary` → potential race conditions. | Open (since Jul 6) | **#4819** (open) |
| **Low** | **#4820** Non-string URLs coerced in `web_fetch` cache signature. | Open (since Jul 6) | **#4820** (open) |
| **Low** | **#5770** Mobile sidebar shows search tooltip on open (no hover on touch). | **Closed** | Fixed in #5770 |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Evidence | Likelihood for Next Version |
|--------|----------|-----------------------------|
| **First-class WebUI command system** | #5854 (scoped prompt commands + management UI), #5856 (inspect/stop session commands) | **Very High** — 2 PRs same day, comprehensive scope |
| **Subtask / background-agent observability** | #5855 (parent-scoped subtask panel, 32-task/12k-char bound) | **High** — addresses multi-agent debugging |
| **Typed image artifacts** | #5853 (direct image delivery, temporary-chat ownership) | **High** — removes extra `message` tool call |
| **Rich content rendering** | #5848 (Mermaid diagrams with zoom/pan), #5852 (link previews), #5850 (unified file actions) | **High** — UX parity with modern AI chat UIs |
| **Usage analytics dashboard** | #5851 (7/30/365-day ranges, activity calendar, model breakdowns) | **Medium-High** — self-hosted analytics demand |
| **MCP ecosystem examples** | #5858 (Adam Network integration example) | **Medium** — community-driven, example-only |
| **JEV reusable client** | #5825 (OpenRouter JEV client for heartbeat/policy/selection) | **Medium** — infrastructure for future provider features |

---

## 7. User Feedback Summary

| Pain Point | Source | Quote / Context |
|------------|--------|-----------------|
| **Session death on long conversations** | #5849 | "Compaction can never recover once history exceeds input budget" — automatic path lacks budget guard. |
| **Unacceptable latency on every turn** | #5843 | "Every user turn waits roughly 10 seconds — sometimes tens of seconds — in the BUILD stage before the LLM call starts." |
| **Mobile UX broken** | #5770 | "On a phone, opening the sidebar immediately renders a white pill labelled `Search ⌘K`… reads as a search box popping up by default." |
| **Edit tool corrupts code** | #5795, #5796 | Indentation loss & whitespace stripping in `edit_file` fallback/inline paths — breaks code semantics. |
| **Desire for IDE-like WebUI** | WebUI PR cluster | 10 PRs in one day adding commands, subtasks, images, files, diagrams, previews, analytics — users want **full control & visibility**. |

**Satisfaction signals:** Rapid PR throughput, comprehensive test coverage on fixes (`#5795`, `#5796`, `#5857`), and proactive observability (`#5846`) indicate maintainers are responsive. The closed mobile bug (#5770) shows touch-device issues are addressed.

---

## 8. Backlog Watch — Stale / High-Impact Items Needing Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| **#4819** Fix consolidation locks (`WeakValueDictionary` → `dict`) | **78 days** (since 2026-07-06) | Memory subsystem correctness; GC can drop locks → race conditions in session consolidation. | **Merge ASAP** — low risk, high stability value; tests included. |
| **#4820** Reject non-string `web_fetch` URLs | **78 days** | Cache-signature pollution; could cause subtle lookup failures. | **Merge ASAP** — trivial fix, prevents weird bugs. |
| **#5412** Flush background child output to logs | **36 days** (since 2026-08-17) | Python block-buffering hides startup logs; affects debuggability of background gateway processes. | **Review & merge** — marked `[conflict]`, may need rebase. |
| **#5849 / #5857** Auto-compaction deadlock fix | **1 day** | **Critical path** — without this, long sessions are unrecoverable. | **Prioritize review of #5857** — blocks production use for extended chats. |
| **#5843 / #5846** BUILD latency root cause | **1 day** | Performance regression on long sessions; tracing added but root cause not yet identified. | **Monitor #5846 logs**; may need deeper optimization (e.g., history truncation, prompt caching). |

---

## Summary Health Indicators

| Metric | Signal |
|--------|--------|
| **Velocity** | 🟢 Very High — 31 PR updates / day |
| **Bug Backlog** | 🟡 Moderate — 2 critical/high bugs with fixes in review; 2 stale medium bugs (78 days) |
| **Feature Momentum** | 🟢 Strong — WebUI overhaul, MCP examples, observability |
| **Release Cadence** | ⚪ Unknown — no release today; check changelog for last cut |
| **Community Engagement** | 🟡 Low visible discussion (0 comments on key issues) — may indicate private channels or early-stage adoption |

**Recommendation:** Fast-track `#5857` (compaction fix) and `#4819`/`#4820` (stale stability fixes) into next patch. The WebUI feature wave is impressive but should be gated behind the core reliability fixes.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-22

## 1. Today's Overview
Hermes Agent is in an active maintenance and stabilization phase. The project released **v0.21.4 (v2026.9.21)** yesterday—a patch tag rolling up ~1,800 PRs since v0.21.3—while today saw a surge of **10 new/updated issues** and **50 PR updates** (47 open, 3 closed). The majority of today's activity centers on **bug fixes for session rendering, authentication regressions, Telegram deduplication, and profile/Unicode handling**, indicating the team is rapidly addressing regressions introduced in the large merge window. No new features were merged today; the velocity is squarely on stabilization.

## 2. Releases
### v0.21.4 (v2026.9.21) — 2026-09-21
- **Type**: Patch release (stable tag for downstream consumers: Docker images, Hermes Cloud, hosted deployments)
- **Scope**: Rolls up ~1,800 PRs merged since v0.21.3
- **Notes**: Full curated release notes deferred; this is a "tag for stability" cut
- **Breaking changes**: None documented in the release summary
- **Migration**: Standard Docker image pull / `hermes upgrade` for hosted deployments
- **Link**: [Release v2026.9.21](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.21)

## 3. Project Progress (Merged/Closed Today)
| PR | Title | Area | Status |
|----|-------|------|--------|
| [#92408](https://github.com/NousResearch/hermes-agent/pull/92408) | feat(telegram): persistent update-ID dedup to drop re-delivered duplicates | Telegram platform adapter | **Closed** |
| [#68906](https://github.com/NousResearch/hermes-agent/pull/68906) | fix(telegram): dedup inbound updates by update_id | Telegram platform adapter | **Closed** |
| [#118238](https://github.com/NousResearch/hermes-agent/pull/118238) | fix(kanban): reclaim done-card worktrees (squash-merged branches were never eligible) | Kanban / CLI / Cron | **Closed** |

**Summary**: Three PRs closed—two long-standing Telegram deduplication fixes (one persistent, one in-memory) and a Kanban worktree reclamation bug. No feature PRs merged today.

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#70108](https://github.com/NousResearch/hermes-agent/issues/70108) | Bug | 8 | Desktop renders duplicate assistant bubbles despite single entry in `state.db` — streaming/transcript sync bug |
| [#52694](https://github.com/NousResearch/hermes-agent/issues/52694) | Bug | 7 | Background notifications misclassified as user messages; stale Discord DM anchors cause misrouted replies |
| [#95916](https://github.com/NousResearch/hermes-agent/issues/95916) | Feature (RFC) | 4 | Reusable capability assignments across profiles without config duplication — cross-profile skill/MCP/tool sharing |
| [#92855](https://github.com/NousResearch/hermes-agent/issues/92855) | Bug | 3 | Rename-session dialog: mouse selection bleeds into sidebar rows behind translucent modal (z-index/hit-test issue) |
| [#118693](https://github.com/NousResearch/hermes-agent/issues/118693) | Bug | 3 | Desktop transcript fails to render completed turn while background review runs on same session |

**Analysis**: The top issues are **rendering/state sync bugs in Desktop** (#70108, #118693, #92855) and **cross-platform message routing correctness** (#52694). The RFC (#95916) signals growing demand for **profile composability**—users want to define capabilities once and attach to multiple profiles.

## 5. Bugs & Stability (Reported Today, Ranked by Severity)
| Severity | Issue | Summary | Fix PR |
|----------|-------|---------|--------|
| **P2** | [#118532](https://github.com/NousResearch/hermes-agent/issues/118532) | OAuth session for Nous provider silently degrades to anonymous credential hourly; pooled credential vanishes from `auth list` | [#118770](https://github.com/NousResearch/hermes-agent/pull/118770) |
| **P2** | [#118760](https://github.com/NousResearch/hermes-agent/issues/118760) | Init-time fallback keeps primary's `api_mode` (e.g., `anthropic_messages` retained when falling back to OpenAI Codex) | [#118762](https://github.com/NousResearch/hermes-agent/pull/118762) |
| **P2** | [#118761](https://github.com/NousResearch/hermes-agent/issues/118761) | Gateway `/fast` checks default model instead of effective session route (breaks `/model` override) | [#118763](https://github.com/NousResearch/hermes-agent/pull/118763) |
| **P2** | [#118755](https://github.com/NousResearch/hermes-agent/issues/118755) | Desktop: reasoning-only turns (local Qwen/custom provider) stream in then vanish — `shouldHydrate` forces re-hydration on empty `finalText` | — |
| **P2** | [#118693](https://github.com/NousResearch/hermes-agent/issues/118693) | Desktop transcript fails to render completed turn while background review runs on same session | — |
| **P3** | [#118765](https://github.com/NousResearch/hermes-agent/issues/118765) | Desktop profile rail shows "?" for non-ASCII profile names (CJK, Cyrillic, emoji) | [#118766](https://github.com/NousResearch/hermes-agent/pull/118766) |
| **P3** | [#118767](https://github.com/NousResearch/hermes-agent/issues/118767) | Google Meet plugin: realtime client uses retired OpenAI Realtime beta wire shape | [#118767](https://github.com/NousResearch/hermes-agent/pull/118767) |
| **P3** | [#118768](https://github.com/NousResearch/hermes-agent/issues/118768) | Browser-use: `Target.createTarget` without `background: true` steals focus on Windows | [#118768](https://github.com/NousResearch/hermes-agent/pull/118768) |
| **P3** | [#118773](https://github.com/NousResearch/hermes-agent/pull/118773) | Gateway sticker cache write blocks event loop (`os.replace` unbounded) | [#118773](https://github.com/NousResearch/hermes-agent/pull/118773) |

**Pattern**: 8/10 issues filed today are **P2/P3 bugs**, 6 have fix PRs already open. Authentication regression (#118532) and fallback `api_mode` bug (#118760) are highest-impact (security boundary + provider compatibility).

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Reusable capability assignments across profiles** (skills, MCP, tools without config copy) | [#95916](https://github.com/NousResearch/hermes-agent/issues/95916) (RFC, needs-decision) | Medium — design discussion needed; may land as opt-in profile "extends" or capability packs |
| **Derived conversation indexing & semantic compaction** | [#118740](https://github.com/NousResearch/hermes-agent/pull/118740) (feat PR, needs-decision) | Medium-High — provider-neutral indexing architecture; Reliquary integration path |
| **Kanban: preserve provider failures, bounded retry, exclude retired profiles** | [#114143](https://github.com/NousResearch/hermes-agent/pull/114143), [#118771](https://github.com/NousResearch/hermes-agent/pull/118771) | High — active PRs, operational pain |
| **Telegram persistent update-ID dedup** | [#92408](https://github.com/NousResearch/hermes-agent/pull/92408) (closed) | Done — shipped in v0.21.4 |
| **Hopper plugin catalog addition** | [#118423](https://github.com/NousResearch/hermes-agent/pull/118423) | High — checklist complete, owner-submitted |

**Prediction**: Next patch (v0.21.5) will bundle today's P2 fixes + Kanban retry/retired-profile fixes. The profile capability RFC and derived indexing are candidates for v0.22.0.

## 7. User Feedback Summary (Pain Points & Use Cases)
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Desktop transcript instability** | #70108 (duplicate bubbles), #118693 (missing turns during background review), #118755 (reasoning turns vanish) | Core UX break — users lose trust in chat history |
| **Auth credential leakage/downgrade** | #118532 (Nous OAuth → anonymous hourly) | Security + workflow break — requires re-auth frequently |
| **Cross-platform message routing bugs** | #52694 (Discord stale anchors), #118764 (Telegram invalid reaction emoji) | Multi-platform users see misrouted/failed replies |
| **Profile/Unicode handling** | #118765 (profile rail "?"), #92855 (modal hit-test) | Non-Latin users blocked; UI polish gaps |
| **Kanban operational toil** | #114143 (unbounded retries), #118238 (worktree leak), #118771 (retired profiles in routing) | Power users / automation hit reliability ceiling |

**Positive signals**: Rapid PR response to today's bugs (most have fix PRs within hours); plugin ecosystem growing (Hopper catalog PR).

## 8. Backlog Watch (Long-Unanswered / Needs Maintainer Attention)
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#52694](https://github.com/NousResearch/hermes-agent/issues/52694) | 90 days | Background notification misrouting affects Discord/Telegram/gateway — cross-cutting architecture issue | Open, 7 comments, no fix PR |
| [#70108](https://github.com/NousResearch/hermes-agent/issues/70108) | 61 days | Desktop duplicate rendering — core transcript integrity | Open, 8 comments, no fix PR |
| [#95916](https://github.com/NousResearch/hermes-agent/issues/95916) | 27 days | RFC: reusable capabilities — architectural decision needed for profile system evolution | Open, needs-decision, 4 comments |
| [#114143](https://github.com/NousResearch/hermes-agent/pull/114143) | 5 days | Kanban retry/recovery overhaul — impacts billing & reliability | Open PR, needs review |
| [#118740](https://github.com/NousResearch/hermes-agent/pull/118740) | 0 days | Derived indexing + semantic compaction — large architectural PR, needs-decision | Open PR, needs review |

**Recommendation**: Prioritize review of #52694 (architectural), #70108 (UX-critical), and the two `needs-decision` PRs (#95916, #118740) to unblock roadmap.

---

**Overall Health**: 🟡 **Stabilizing** — High bug throughput post-large-merge, but fix velocity matches. Auth and Desktop rendering are current risk areas. Profile composability and conversation indexing are the next feature frontiers.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-22

## 1. Today's Overview
PicoClaw shows moderate maintenance activity with 6 total updates (3 issues, 3 PRs) in the last 24 hours. The project is actively addressing a high-impact Web UI performance regression (#3281), while advancing protocol support through an IRCv3 multiline PR (#3354) and an OAuth scope fix (#3378). One stale QQ integration issue was closed after root-cause identification in upstream dependencies. No new releases were published, indicating the project remains in a pre-release stabilization phase for v0.3.1.

## 2. Releases
**No new releases** in the last 24 hours. Current latest version remains **0.3.1** (nightly builds report this version). Users should track the [releases page](https://github.com/sipeed/picoclaw/releases) for the next stable cut.

## 3. Project Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#3378](https://github.com/sipeed/picoclaw/pull/3378) | Open | **fix(auth):** Use configured scopes instead of hardcoded default in `RefreshAccessToken` | Fixes OAuth token refresh for providers requiring custom scopes (e.g., self-hosted OIDC) |
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) | Open | **feat(irc):** Assemble IRCv3 multiline messages (`draft/multiline` CAP) | Improves IRC fidelity: long/multi-line messages delivered as single inbound events |
| [#3384](https://github.com/sipeed/picoclaw/pull/3384) | Closed | Misplaced PR filed by AI agent on wrong repo | No code impact; administrative cleanup |

**Net progress:** Two substantive PRs advancing authentication correctness and IRC protocol compliance; one noise PR closed.

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Issue (Bug) | **13 comments, 👍2** | **Web UI chat input becomes severely laggy as session history grows** — critical UX regression for power users |
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) | Issue (Feature) | **4 comments** | **OpenAI-compatible provider abstraction** — enable self-hosted routers (9Router, LiteLLM, etc.) without forking |
| [#3365](https://github.com/sipeed/picoclaw/issues/3365) | Issue (Bug) | **3 comments, 👍1** | QQ channel 401 auth failure traced to `botgo v0.2.1` + `resty >= v2.17` incompatibility — **closed as stale** after root-cause documented |

**Analysis:** The Web UI performance issue (#3281) dominates community attention (13 comments, 2 upvotes), signaling a pressing usability problem. The OpenAI-compatible provider request (#3366) reflects growing demand for LLM gateway flexibility.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? | Notes |
|----------|-------|--------|---------|-------|
| **High** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI input lag with history | Open | No | Regression in 0.3.1; blocks long-session usability; no PR yet |
| **Medium** | [#3365](https://github.com/sipeed/picoclaw/issues/3365) QQ 401 auth (botgo/resty) | Closed (stale) | No | Root cause identified in upstream deps; workaround: pin `resty < v2.17` or upgrade `botgo` when fixed |
| **Low** | [#3378](https://github.com/sipeed/picoclaw/pull/3378) Hardcoded OAuth scopes | Open (PR) | **Yes** (#3378) | Fixes token refresh for non-standard OIDC providers; ready for review |

**Stability note:** No crashes or data-loss reports. The QQ issue is environment-specific (Orange Pi 3B, aarch64).

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|-----------------------------|-----------|
| **OpenAI-compatible provider abstraction** | [#3366](https://github.com/sipeed/picoclaw/issues/3366) | **High** | Low implementation effort (copy/adapt OpenAI provider); aligns with multi-LLM trend; 4 comments show active interest |
| **IRCv3 multiline message support** | [#3354](https://github.com/sipeed/picoclaw/pull/3354) | **High** | PR already open with implementation; protocol compliance improvement |
| **Web UI virtualized history rendering** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | **Medium** | Requires frontend refactor; high user pain but no PR yet |

**Prediction:** The OAuth scope fix (#3378) and IRC multiline PR (#3354) are the strongest candidates for the next patch release. OpenAI-compatible provider support may arrive in v0.3.2 if a contributor picks it up.

## 7. User Feedback Summary
| Pain Point | Evidence | User Segment |
|------------|----------|--------------|
| **Web UI unusable for long conversations** | "very laggy when history has a little bit long" ([#3281](https://github.com/sipeed/picoclaw/issues/3281)) | Power users, daily drivers |
| **Cannot use self-hosted LLM routers** | "allow to add self-hosted routers e.g. 9Router" ([#3366](https://github.com/sipeed/picoclaw/issues/3366)) | Self-hosters, privacy-focused |
| **QQ bot broken on ARM64** | 401 error on Orange Pi 3B ([#3365](https://github.com/sipeed/picoclaw/issues/3365)) | Embedded/edge deployments |
| **OAuth refresh fails with custom scopes** | Hardcoded `"openid profile email"` ([#3378](https://github.com/sipeed/picoclaw/pull/3378)) | Enterprise SSO integrators |

**Sentiment:** Mixed — frustration on Web UI performance, but constructive engagement on protocol/provider extensibility.

## 8. Backlog Watch
| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI input lag | **63 days** (since 2026-07-21) | Open, 13 comments | **Highest community impact**; no maintainer response in 3+ weeks; blocks core UX |
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) IRCv3 multiline PR | **22 days** (since 2026-08-31) | Open, 0 comments | Complete implementation waiting review; improves protocol correctness |
| [#3378](https://github.com/sipeed/picoclaw/pull/3378) OAuth scope fix | **10 days** (since 2026-09-12) | Open, 0 comments | Small, targeted fix for auth correctness; low review burden |

**Recommendation:** Maintainers should prioritize triaging #3281 (performance regression) and reviewing #3354/#3378 (ready-to-merge improvements). The OpenAI-compatible provider issue (#3366) is a clear roadmap signal for v0.3.2.

---

*Digest generated from GitHub API data as of 2026-09-22 00:00 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-22

## 1. Today's Overview
NanoClaw shows **steady maintenance velocity** with 8 PRs updated in the last 24 hours (7 open, 1 closed) and 1 new issue filed. The project is in a **feature-expansion and platform-hardening phase**: multiple PRs target new provider integrations (Cursor Agent SDK), Signal/WhatsApp channel robustness, and setup/installation reliability. No releases were cut today, suggesting the team is batching changes for a future release. Overall project health appears **active and healthy** — core-team members are reviewing, and contributors are addressing both new features and long-standing bugs.

## 2. Releases
**No new releases** published today. The latest release information is not provided in the data; the team appears to be accumulating changes on `main` for a future version bump.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#2689](https://github.com/qwibitai/nanoclaw/pull/2689) | **fix(signal): DM platform ID consistency, isMention, and ask_question/approval delivery** | `channels`, `core` | **Critical fix** — Signal DMs were silently dropped because `isMention` wasn’t set, preventing `messaging_groups` row creation. Also normalizes DM platform IDs with `signal:` prefix and fixes approval/question delivery in DMs. Closed after review by `klingel`. |

*Only one PR closed/merged in the last 24h; the rest remain open under review.*

## 4. Community Hot Topics — Most Active Items
| Item | Type | Activity Signal | Underlying Need |
|------|------|-----------------|-----------------|
| [#3356](https://github.com/qwibitai/nanoclaw/pull/3356) | PR (Feature) | Updated today, **core-team** label, multi-area (`providers`, `agent-runner`, `repository-maintenance`) | **First-class Cursor Agent SDK support** — enables NanoClaw to run as a Cursor-backed provider with custom execution policy, MCP resolvers, and memory hooks. High strategic value for IDE integration. |
| [#3355](https://github.com/qwibitai/nanoclaw/pull/3355) | PR (Skill) | Updated today, **delivery/skill**, **core-team**, 13 area labels | **Install skill for Cursor provider** — wizard-friendly `/add-cursor` command that copies provider payload and registers it. Complements #3356 for end-user onboarding. |
| [#3837](https://github.com/qwibitai/nanoclaw/pull/3837) | PR (Fix) | Updated today, consolidates **two stale PRs** into one patch | **Signal adapter maturity** — unifies attachment handling (images, voice, files) via mounted inbox, fixes DM routing, and outbound queue reliability. Addresses long-standing Signal parity gaps. |
| [#3859](https://github.com/qwibitai/nanoclaw/pull/3859) | PR (Fix) | Created & updated today, `area/channels` | **WhatsApp group naming in registration cards** — implements `resolveChannelName` so unknown-channel approval cards show the actual group name instead of generic “a whatsapp channel”. UX polish for multi-channel ops. |

*No issue/PR has comments or reactions in the provided data, so “hotness” is inferred from label breadth, core-team involvement, and recency.*

## 5. Bugs & Stability — Reported Today
| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#3860](https://github.com/qwibitai/nanoclaw/issues/3860) **restart.sh: FORCE_COLOR makes the restart timestamp unparseable** | **Medium** — breaks automated restart parsing; affects any CI/CD or orchestration that reads the timestamp | **Open** (0 comments) | No PR yet. Root cause: `pnpm` injects `FORCE_COLOR=1`, causing Node to emit ANSI codes when `console.log()` receives a bare number. Fix: wrap timestamp in `JSON.stringify()` or disable color in that subprocess. |

*No crashes or regressions reported today beyond #3860. The closed PR #2689 resolved a **high-severity** Signal DM message-loss bug.*

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|------------------------------|
| **Cursor Agent SDK provider** | PRs [#3356](https://github.com/qwibitai/nanoclaw/pull/3356) + [#3355](https://github.com/qwibitai/nanoclaw/pull/3355) (both `core-team`, updated today) | **Very High** — provider contract + install skill are complete; only review/merge remains. |
| **Signal attachment & DM parity** | PR [#3837](https://github.com/qwibitai/nanoclaw/pull/3837) (consolidates stale work) | **High** — addresses multiple user pain points; already staged for review. |
| **WhatsApp registration-card UX** | PR [#3859](https://github.com/qwibitai/nanoclaw/pull/3859) (new today) | **Medium-High** — small, focused fix; likely to merge quickly. |
| **Cross-distro Node install** | PR [#3273](https://github.com/qwibitai/nanoclaw/pull/3273) (open since Aug, updated today) | **Medium** — fixes Fedora/RHEL/Arch/Alpine installs; blocks some self-hosters. |
| **Skip needless image rebuild** | PR [#3286](https://github.com/qwibitai/nanoclaw/pull/3286) (open since Aug) | **Medium** — quality-of-life for `ncl groups restart --rebuild`; low risk. |
| **Scheduled-task error routing** | PR [#3311](https://github.com/qwibitai/nanoclaw/pull/3311) (fixes #3223) | **Medium** — improves operator visibility; touches core runner. |

**Prediction**: Next release will likely ship **Cursor provider + install skill**, **Signal consolidation**, and **WhatsApp naming fix** as a “provider & channel stability” batch.

## 7. User Feedback Summary
| Pain Point / Use Case | Evidence |
|------------------------|----------|
| **Signal DMs silently fail** | PR #2689 describes first messages “silently dropped” — users likely experienced missing DMs without logs. |
| **Non-Debian Linux installs broken** | Issue #2462 (referenced in PR #3273) — Fedora/RHEL/Arch/Alpine users hit NodeSource script failure. |
| **Restart timestamp parsing breaks in CI** | Issue #3860 — `FORCE_COLOR=1` from pnpm corrupts machine-readable output. |
| **WhatsApp groups unnamed in approval flow** | PR #3859 — operators see generic “a whatsapp channel” instead of group name. |
| **Unnecessary Docker rebuilds on restart** | Issue #2701 (fixed by PR #3286) — wastes time when no extra packages configured. |
| **Scheduled-task errors invisible to operators** | Issue #3223 (fixed by PR #3311) — errors logged as malformed chat messages with no routing. |

*No direct user comments captured in the 24h window; feedback inferred from issue/PR descriptions.*

## 8. Backlog Watch — Stale Items Needing Attention
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#3273](https://github.com/qwibitai/nanoclaw/pull/3273) **fix(setup): detect package manager in install-node.sh** | 37 days (opened 2026-08-16) | Blocks installs on all non-Debian Linux; high impact for self-hosters. | Assign reviewer; CI test on Fedora/Alpine. |
| [#3286](https://github.com/qwibitai/nanoclaw/pull/3286) **Skip image rebuild in restart when no packages configured** | 36 days (opened 2026-08-17) | Low-risk perf win; referenced issue #2701. | Quick review — logic is straightforward. |
| [#3311](https://github.com/qwibitai/nanoclaw/pull/3311) **fix(agent-runner): route scheduled-task errors to the operator** | 35 days (opened 2026-08-18) | Improves observability for background tasks; fixes #3223. | Needs core-runner reviewer. |
| [#3356](https://github.com/qwibitai/nanoclaw/pull/3356) / [#3355](https://github.com/qwibitai/nanoclaw/pull/3355) **Cursor provider + skill** | 34 days (opened 2026-08-19) | Strategic feature; both PRs updated today — likely in final review. | Prioritize merge to unblock Cursor users. |
| [#3837](https://github.com/qwibitai/nanoclaw/pull/3837) **Signal consolidation** | 6 days (opened 2026-09-16) | Merges two stale PRs; large surface area — needs careful review. | Schedule dedicated review session. |

---

**Overall Health Indicator**: 🟢 **Green** — active development, core-team engagement, mix of features and fixes, no critical unaddressed regressions. The backlog contains several high-value PRs that have been open 30+ days; clearing them would improve contributor confidence and user experience.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-22

## 1. Today's Overview
IronClaw shows **minimal developer activity** in the last 24 hours: only one automated issue (#8106) was created, zero pull requests were opened or merged, and no new releases were published. The sole activity is a daily failure-taxonomy report generated by the CI system, indicating the project is currently in a **maintenance/monitoring phase** rather than active feature development. Repository health appears stable with no critical incidents reported today.

## 2. Releases
No new releases published today. The latest version remains unchanged from prior to this reporting window.

## 3. Project Progress
No merged or closed PRs in the last 24 hours. No feature advancements or bug fixes landed today.

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Summary |
|------|------|----------|-----------|---------|
| [#8106](https://github.com/nearai/ironclaw/issues/8106) | Issue | 0 | 0 👍 | **Daily ironclaw failure taxonomy — 2026-09-21** – Automated CI report cataloguing 47 non-passing tasks in the `officeqa` benchmark suite. The failures are attributed to “genuine model-quality errors” by DeepSeek-V4-Flash rather than infrastructure flakiness. |

*Analysis*: The only “hot” item is an automated diagnostic artifact. Zero human comments or reactions suggest the community is not actively discussing open problems today.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Informational** | [#8106](https://github.com/nearai/ironclaw/issues/8106) | 47 `officeqa` tasks failed due to model-quality issues (DeepSeek-V4-Flash navigation/reasoning errors). No infrastructure crashes or regressions detected. | None |

No crash reports, regressions, or high-severity bugs filed today.

## 6. Feature Requests & Roadmap Signals
No new feature requests or roadmap discussions appeared in the last 24 hours. The automated failure taxonomy (#8106) may indirectly signal a need for **better model evaluation tooling** or **benchmark hardening**, but no explicit requests were made.

## 7. User Feedback Summary
No direct user feedback (issues, discussions, or PR reviews) was recorded today. The sole artifact is an internal CI report; therefore, no real-user pain points, use-cases, or satisfaction signals can be extracted for this window.

## 8. Backlog Watch
No long-unanswered issues or stale PRs surfaced in today’s data slice. The repository’s backlog status is unchanged from prior to this reporting period. Maintainer attention is not urgently required based on current activity.

---
*Data source: GitHub REST API snapshots for `nearai/ironclaw` covering 2026-09-21 00:00 UTC → 2026-09-22 00:00 UTC.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-22

## 1. Today's Overview
LobsterAI shows **high maintenance velocity** with 15 PRs merged or closed in the last 24 hours and zero new releases. The project is in a stabilization phase: most merged PRs target OpenClaw gateway startup reliability, legacy migration cleanup, macOS path-resolution test fixes, and renderer theming. Only two issues were updated—one fresh feature request (#2738) and one stale Tavily MCP auth issue (#989)—indicating low new issue intake. Overall health is strong; the team is clearing technical debt and hardening the gateway/plugin layer ahead of a likely minor release.

## 2. Releases
**No new releases today.** The last published version remains unlisted in the provided data.

## 3. Project Progress — Merged/Closed PRs (13)
| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2741](https://github.com/netease-youdao/LobsterAI/pull/2741) | docs, main, openclaw | Fix nsp-clawguard startup after upgrade (manifest version mismatch, legacy npm dir) | **High** – unblocks gateway ready on macOS upgrades |
| [#2740](https://github.com/netease-youdao/LobsterAI/pull/2740) | renderer | Restore CJK body font-weight to 400 for bold distinguishability | **Medium** – improves readability for Chinese/Japanese/Korean users |
| [#2736](https://github.com/netease-youdao/LobsterAI/pull/2736) | renderer, main | Request OS secure storage access explicitly (opt-in IPC flow) | **High** – fixes macOS keychain prompts & credential persistence |
| [#2737](https://github.com/netease-youdao/LobsterAI/pull/2737) | docs, main, openclaw | Restore native scheduled tasks & Feishu delivery for IM reminders | **Medium** – re-enables “remind me in 2 min” via Feishu |
| [#2734](https://github.com/netease-youdao/LobsterAI/pull/2734) | renderer, main, openclaw, cowork | Migrate legacy weixin allowFrom files blocking gateway startup | **High** – removes startup blocker from old OpenClaw data |
| [#2735](https://github.com/netease-youdao/LobsterAI/pull/2735) | docs, openclaw | Avoid startup failure on legacy identity conflicts (SQLite vs JSON) | **High** – graceful migration, no user action needed |
| [#2719](https://github.com/netease-youdao/LobsterAI/pull/2719) | main, openclaw | Repair leftovers from older builds at startup instead of failing | **High** – fixes three distinct upgrade-failure paths |
| [#2732](https://github.com/netease-youdao/LobsterAI/pull/2732) | — | Follow-up to #2719 | **High** – ensures repair logic runs correctly |
| [#2704](https://github.com/netease-youdao/LobsterAI/pull/2704) | main, openclaw | Resolve macOS tmpdir symlinks in test path assertions | **Medium** – unblocks local macOS test runs |
| [#2733](https://github.com/netease-youdao/LobsterAI/pull/2733) | — | Companion fix for #2704 (wrap mkdtemp with realpath) | **Medium** – test stability |
| [#998](https://github.com/netease-youdao/LobsterAI/pull/998) | renderer | Floating toolbar for selected text (copy, cite, explain, translate, ask) | **Medium** – UX enhancement, marked stale |
| [#999](https://github.com/netease-youdao/LobsterAI/pull/999) | renderer | Cmd+K command palette with fuzzy search | **Medium** – power-user efficiency, marked stale |
| [#1067](https://github.com/netease-youdao/LobsterAI/pull/1067) | openclaw | Stop auto-creating `[OpenClaw]` cowork session on heartbeat | **Low** – removes noisy session clutter |

**Net advancement:** Gateway/plugin startup reliability ⬆️, macOS test parity ⬆️, CJK typography ⬆️, credential UX ⬆️, legacy data migration ⬆️.

## 4. Community Hot Topics
| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#2738](https://github.com/netease-youdao/LobsterAI/issues/2738) | Issue (Feature) | 1 comment, created 2026-09-21 | **Workspace switching without gateway restart** – users on limited hardware face 10 s+ gateway reboot on every workspace change; strong demand for hot-swap. |
| [#989](https://github.com/netease-youdao/LobsterAI/issues/989) | Issue (Bug, stale) | 1 comment, updated 2026-09-21 | **Tavily MCP 401 Unauthorized** despite valid API key – suggests auth flow or token refresh regression in MCP integration. |

No PR has comments or reactions in the last 24 h; discussion is concentrated on the two issues above.

## 5. Bugs & Stability — Today’s Signals
| Severity | Symptom | Related PR / Issue | Fix Status |
|----------|---------|-------------------|------------|
| **Critical** | Gateway fails to start after upgrade due to nsp-clawguard manifest mismatch & legacy npm dir | [#2741](https://github.com/netease-youdao/LobsterAI/pull/2741) | ✅ Merged |
| **Critical** | Legacy `allowFrom.json` files block gateway readiness; Quick Repair ineffective | [#2734](https://github.com/netease-youdao/LobsterAI/pull/2734) | ✅ Merged |
| **Critical** | SQLite vs legacy `device.json` identity conflict prevents startup | [#2735](https://github.com/netease-youdao/LobsterAI/pull/2735) | ✅ Merged |
| **High** | macOS keychain access prompts on every credential check; credentials not persisted | [#2736](https://github.com/netease-youdao/LobsterAI/pull/2736) | ✅ Merged |
| **High** | Three distinct leftover-data causes make every launch fail after upgrade/reinstall | [#2719](https://github.com/netease-youdao/LobsterAI/pull/2719) | ✅ Merged |
| **Medium** | CJK bold text indistinguishable from body (font-weight 445 vs 600) | [#2740](https://github.com/netease-youdao/LobsterAI/pull/2740) | ✅ Merged |
| **Medium** | Tavily MCP returns 401 despite configured API key | [#989](https://github.com/netease-youdao/LobsterAI/issues/989) | ❌ Open (stale) |
| **Low** | Tests fail locally on macOS due to `/var` → `/private/var` symlink | [#2704](https://github.com/netease-youdao/LobsterAI/pull/2704), [#2733](https://github.com/netease-youdao/LobsterAI/pull/2733) | ✅ Merged |

**No new crash reports or regressions** filed today; all critical startup blockers have fix PRs merged.

## 6. Feature Requests & Roadmap Signals
1. **Hot workspace switching** ([#2738](https://github.com/netease-youdao/LobsterAI/issues/2738)) – explicit user ask, high ROI for multi-project workflows. Likely candidate for next minor release (gateway architecture change required).
2. **Keyless Parallel web search** ([#2739](https://github.com/netease-youdao/LobsterAI/pull/2739), open PR) – adds anonymous, rate-limited Parallel engine to bundled web-search skill. Low friction, high utility; strong merge probability.
3. **Floating text toolbar & Cmd+K palette** ([#998](https://github.com/netease-youdao/LobsterAI/pull/998), [#999](https://github.com/netease-youdao/LobsterAI/pull/999)) – polished UX features marked stale; may be revived after stabilization sprint.
4. **Tavily MCP auth fix** ([#989](https://github.com/netease-youdao/LobsterAI/issues/989)) – blocking external search skill; needs investigation.

## 7. User Feedback Summary
- **Pain points**: Gateway restart latency (10 s+), upgrade-time startup failures, macOS keychain friction, Tavily MCP broken.
- **Use cases**: Multi-workspace developers, Feishu/WeChat power users, CJK-language readers, keyboard-centric workflow fans.
- **Sentiment**: Positive on recent fixes (startup reliability, migration automation); frustration on stale issues (Tavily, floating toolbar). No explicit satisfaction scores in data.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#989](https://github.com/netease-youdao/LobsterAI/issues/989) Tavily MCP 401 | 6 months | Blocks a bundled search skill; auth flow likely broken after upstream changes. |
| [#998](https://github.com/netease-youdao/LobsterAI/pull/998) Floating toolbar | 6 months | High-value UX, feature-complete but stale; review & merge would delight users. |
| [#999](https://github.com/netease-youdao/LobsterAI/pull/999) Cmd+K palette | 6 months | Complementary to toolbar; same status. |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Electron 43→44 bump | 5.5 months | Dependabot PR; Electron upgrades often surface native-module issues—should be tested & merged before major release. |
| [#2739](https://github.com/netease-youdao/LobsterAI/pull/2739) Keyless Parallel search | 1 day | New open PR; quick win for web-search skill, awaiting review. |

---

**Bottom line:** LobsterAI is executing a focused stabilization sprint—13 merges in 24 h eliminate the top startup/upgrade failure modes. The next visible milestone will likely be a **v2.5.x patch** bundling these fixes plus the keyless Parallel search PR. The highest-impact *new* work is the hot workspace switch (#2738), which requires gateway architecture changes and should be prioritized for the next minor version.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-22

---

## 1. Today's Overview
Moltis saw focused activity around voice capabilities and tooling stability on 2026-09-21. Two issues were filed (one closed as duplicate) requesting **VoxCPM** as a local TTS provider, and a corresponding PR (#1283) was opened implementing the feature via vLLM-Omni’s OpenAI-compatible speech API. Separately, PR #1280 addresses a tooling regression (#1277) where an explicitly empty `active_tools` array incorrectly overrode preset tool controls. No releases were published. Overall, the project shows **targeted feature expansion in local voice** and **defensive bug fixes**—healthy signals for a maturing agent platform.

---

## 2. Releases
**No new releases** in the last 24 hours.

---

## 3. Project Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#1283](https://github.com/moltis-org/moltis/pull/1283) | **Open** | Adds **VoxCPM** (OpenBMB/VoxCPM, Apache-2.0, 2B params, 30 languages, 48 kHz) as a local TTS provider, served through **vLLM-Omni**’s OpenAI-compatible speech API. Updates `docs/src/voice.md` provider table. | **Major feature** — first fully local, high-quality TTS option; expands offline/privacy-first voice persona support. |
| [#1280](https://github.com/moltis-org/moltis/pull/1280) | **Open** | Fixes #1277: treats an explicitly empty `active_tools` array as “no per-turn override,” preserving the preset’s tool allow/deny policy. Non-empty per-turn lists remain scoped by preset policy. | **Stability fix** — prevents accidental tool disablement when users pass `active_tools: []`; maintains backward compatibility. |

*No PRs were merged or closed today.*

---

## 4. Community Hot Topics
| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#1282](https://github.com/moltis-org/moltis/issues/1282) / [#1281](https://github.com/moltis-org/moltis/issues/1281) | Issue (Feature) | 2 issues filed same day (one closed as duplicate), 0 comments, 0 👍 | **Strong demand for local, high-fidelity TTS** — users want to run voice personas fully offline without external API dependencies. VoxCPM’s multilingual (30 langs) and 48 kHz quality make it a compelling candidate. |
| [#1283](https://github.com/moltis-org/moltis/pull/1283) | PR (Feature) | 0 comments, 0 👍 | Implementation of the above request; maintainers’ review velocity will signal priority. |
| [#1280](https://github.com/moltis-org/moltis/pull/1280) | PR (Bug Fix) | 0 comments, 0 👍 | Fixes a concrete regression (#1277) affecting tool control reliability—critical for agent developers relying on preset tool policies. |

*Low comment/reaction counts suggest these are fresh items; community discussion may ramp up once maintainers engage.*

---

## 5. Bugs & Stability
| Issue / PR | Severity | Description | Fix Status |
|------------|----------|-------------|------------|
| [#1277](https://github.com/moltis-org/moltis/issues/1277) (fixed by [#1280](https://github.com/moltis-org/moltis/pull/1280)) | **Medium** | Empty `active_tools: []` incorrectly cleared preset tool allow/deny lists, disabling all tools for that turn. | **Fix PR open** (#1280) — preserves preset policy when array is explicitly empty. |
| No new crash/regression reports today. | — | — | — |

*Only one known bug surfaced; fix is proposed and awaiting review.*

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **VoxCPM as local TTS provider** | [#1282](https://github.com/moltis-org/moltis/issues/1282), [#1283](https://github.com/moltis-org/moltis/pull/1283) | **High** — PR already opened, aligns with documented gap in `voice.md` (Provider Support table shows no local option), and uses existing vLLM-Omni integration path. |
| **Tool policy preservation for empty overrides** | [#1280](https://github.com/moltis-org/moltis/pull/1280) | **High** — targeted fix for a regression; low risk, high value for developer experience. |

*No other feature requests surfaced in the last 24h.*

---

## 7. User Feedback Summary
- **Pain point**: *“Voice personas have no local implementation”* — explicitly called out in `docs/src/voice.md`’s own provider table. Users cannot run TTS offline or avoid third-party API costs/latency.
- **Use case**: Multilingual (30 languages), high-sample-rate (48 kHz) local speech synthesis for privacy-sensitive or air-gapped deployments.
- **Sentiment**: Neutral-to-positive — request is constructive, PR is provided, but no community discussion yet. Maintainer response will shape satisfaction.

---

## 8. Backlog Watch
| Item | Status | Age | Why It Matters |
|------|--------|-----|----------------|
| [#1283](https://github.com/moltis-org/moltis/pull/1283) | Open | 1 day | First local TTS provider; needs architectural review (vLLM-Omni dependency, model licensing, docs). |
| [#1280](https://github.com/moltis-org/moltis/pull/1280) | Open | 1 day | Fixes a tooling regression; should be fast-tracked to avoid developer friction. |
| [#1277](https://github.com/moltis-org/moltis/issues/1277) | Closed (fixed by PR) | 1 day | Reference for the fix; verify closure after merge. |

*No stale/long-unanswered items in this window. The two open PRs are fresh and merit prompt maintainer attention to sustain momentum.*

---

**Digest generated:** 2026-09-22 00:00 UTC  
**Data window:** 2026-09-21 00:00 – 2026-09-22 00:00 UTC  
**Source:** GitHub API (moltis-org/moltis)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-22

## 1. Today's Overview
The CoPaw project shows **high maintenance velocity** with 36 PRs and 20 issues updated in the last 24 hours. The merge rate is strong (20 PRs merged/closed vs 16 open), indicating active triage and rapid iteration. No new release was cut today, but PR #7928 prepares release notes for v2.2.2, suggesting an imminent patch release. The issue mix reveals a project in active stabilization: UI/UX polish (table rendering, history layout), provider integrations (OpenCode, DeepSeek), desktop app startup reliability, and core loop governance fixes dominate current work.

## 2. Releases
**No new releases today.**  
PR [#7928](https://github.com/agentscope-ai/QwenPaw/pull/7928) — "chore: release notes for v2.2.2" — is open and aggregates changes for the next patch. Expect v2.2.2 to include: DoomLoopGate fix (#7919), Responses API strict-mode default (#7915), AgentScope 2.0.8 bump (#7913), console API loading improvements (#7917), and several provider/model-management unifications (#7899, #7920).

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Title | Type | Key Impact |
|----|-------|------|------------|
| [#7919](https://github.com/agentscope-ai/QwenPaw/pull/7919) | fix: require new tool-call evidence for doom loop escalation | Bug fix | Prevents false TERMINATE on text-only rounds; resolves #7905 |
| [#7915](https://github.com/agentscope-ai/QwenPaw/pull/7915) | fix(responses): default function tools to non-strict mode | Bug fix | Fixes optional parameter regression after schema sanitization; addresses #7907 |
| [#7913](https://github.com/agentscope-ai/QwenPaw/pull/7913) | chore(deps): bumping version of agentscope to 2.0.8 | Dependency | Brings upstream AgentScope fixes |
| [#7917](https://github.com/agentscope-ai/QwenPaw/pull/7917) | fix(console): improve API loading on slow networks | Perf/UX | Compresses ≥1 KB responses off event loop; partial fix for #6635 |
| [#7920](https://github.com/agentscope-ai/QwenPaw/pull/7920) | fix: resolve default thinking and streamline model onboarding | UX/Bug | Fixes hidden thinking indicator & blank model picker |
| [#7907](https://github.com/agentscope-ai/QwenPaw/issues/7907) | [Bug] Responses API tool schema cleaning removes nullable → strict issues | Issue closed | Fixed via #7915 |
| [#7905](https://github.com/agentscope-ai/QwenPaw/issues/7905) | [Bug] DoomLoopGate escalates on text-only round | Issue closed | Fixed via #7919 |
| [#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882) | [Bug] OpenCode "free" models return 403 FreeTierError | Issue closed | Likely provider-side; UI labeling may need update |
| [#7585](https://github.com/agentscope-ai/QwenPaw/issues/7585) | [Bug][Telegram] Markdown tables not rendering | Issue closed | Fixed via #7713 (merged earlier, updated today) |
| [#7739](https://github.com/agentscope-ai/QwenPaw/issues/7739) | [Enhancement] Move history to right sidebar | Issue closed | UI layout change implemented |
| [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) | [Bug] 409 error when sending message during task execution | Issue closed | Queueing behavior adjusted |
| [#7639](https://github.com/agentscope-ai/QwenPaw/pull/7639) | perf(scroll): avoid repeated history integrity scans | Perf | SQLite PRAGMA quick_check now once per process |
| [#7713](https://github.com/agentscope-ai/QwenPaw/pull/7713) | feat(telegram): use Rich Messages for Markdown tables | Feature | Native Telegram table rendering |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | feat: add reranker UI config panel to ReMeLightMemoryCard | Feature | Reranker configuration UI |

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Comments | Core Need |
|------|----------|-----------|
| [#7739](https://github.com/agentscope-ai/QwenPaw/issues/7739) (7) | **History sidebar layout** — Users on 14" laptops find left-only layout cramped; right-sidebar option merged. |
| [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) (6) | **Message queueing during task execution** — Expectation: new messages should queue, not 409. Fixed. |
| [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) (4) | **DeepSeek rejects tool-returned PDF** — OpenAI-style nested `file` part serialization incompatible; regression from #7597 fix. |
| [#5909](https://github.com/agentscope-ai/QwenPaw/issues/5909) (3) | **Configurable theme/skin module** — Long-running design proposal (P0 branding); still open, awaiting PR. |
| [#7924](https://github.com/agentscope-ai/QwenPaw/issues/7924) (1, new today) | **Markdown table overflow & bottom scrollbar** — Tables exceed chat width; horizontal scrollbar at bottom of long tables is unusable. |
| [#7925](https://github.com/agentscope-ai/QwenPaw/issues/7925) (1, new today) | **Benchmark request** — User asks for updated PawBench (2.x) and comparison vs OpenCode/Claude Code. |
| [#7721](https://github.com/agentscope-ai/QwenPaw/issues/7721) (2) | **Workspace file browser freezes server on large repos** — `watchfiles.awatch` blocks event loop during RustNotify sync init. |

**Underlying themes:**  
- **Desktop/Console UX polish** (layout, tables, startup, large-repo performance)  
- **Provider interoperability** (OpenCode headers, DeepSeek file parts, model discovery)  
- **Core loop correctness** (DoomLoopGate, governance bypass in batch tools)  
- **Extensibility demand** (themes, benchmarks, MCP examples)

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#7721](https://github.com/agentscope-ai/QwenPaw/issues/7721) Workspace file browser freezes **entire server** (event loop blocked by `watchfiles` on large repos) | Open | None yet |
| **High** | [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) DeepSeek 400 on tool-returned PDF (OpenAI-style `file` part) | Open | None yet |
| **High** | [#7841](https://github.com/agentscope-ai/QwenPaw/issues/7841) Desktop Console loads before backend ready → blank model/plugin panels | Open | None yet |
| **Medium** | [#7924](https://github.com/agentscope-ai/QwenPaw/issues/7924) Markdown tables overflow chat width; horizontal scrollbar at table bottom | Open (new) | None yet |
| **Medium** | [#7921](https://github.com/agentscope-ai/QwenPaw/issues/7921) `omp-roles` skill missing YAML frontmatter → silently unusable | Open | [#7922](https://github.com/agentscope-ai/QwenPaw/pull/7922) (open) |
| **Medium** | [#7926](https://github.com/agentscope-ai/QwenPaw/pull/7926) `run_tool_batch` bypasses governance checks (permissions, confirmation) | Open PR | PR #7926 addresses |
| **Low** | [#3419](https://github.com/agentscope-ai/QwenPaw/issues/3419) JD Cloud Coding Plan session interruption (old, 2026-04) | Open | None |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Right-sidebar history panel** | #7739 (merged) | ✅ Already in v2.2.2 |
| **Native Telegram Markdown tables** | #7585 / #7713 (merged) | ✅ In v2.2.2 |
| **Configurable theme/skin module** | #5909 (design proposal, P0) | ⏳ Design approved; implementation pending |
| **Per-session model overrides** | #5992 (PR open, under review) | 🟡 High — core multi-model UX |
| **Authenticated MCP web-research example (Baizhi)** | #7912 (Docs) | 🟡 Documentation-only; easy merge |
| **KaTeX LaTeX rendering in Console** | #5921 (design proposal) | ⏳ Design done; awaiting PR |
| **Benchmarks vs OpenCode/Claude Code** | #7925 (new) | 📊 Strategic; may spawn separate effort |
| **Multi-tab authenticated chat terminal** | #7861 (PR open) | 🟡 Major UX feature; needs review |
| **Tool-result block retention policy** | #7923 (PR open) | 🟡 Operational hygiene; likely in 2.2.2+ |
| **PawApp SDK & control plane redesign** | #7874 (PR open) | 🔴 Large refactor; post-2.2.x |

## 7. User Feedback Summary
| Pain Point | Frequency | Representative Voices |
|------------|-----------|----------------------|
| **Console/desktop startup race** — blank panels until manual refresh | 1 issue (#7841) + PR #7917 | "Console frequently renders incompletely on startup" |
| **Large-repo workspace browser freezes whole app** | 1 issue (#7721) | "WebUI stops responding, all channels stop processing messages" |
| **Markdown tables unusable in Console (overflow, bottom scrollbar)** | 1 new issue (#7924) | "Must scroll to table bottom to reach horizontal scrollbar" |
| **Provider "free" model labeling misleading (OpenCode 403)** | 1 issue (#7882) | "UI still marks as free but API returns 403 FreeTierError" |
| **DeepSeek incompatibility with tool-returned files** | 1 issue (#7883) | "file must have a file_id or file_data" — serialization mismatch |
| **Benchmark gap vs coding agents** | 1 new issue (#7925) | "PawBench is 1.x; need 2.x results + OpenCode/Claude Code comparison" |
| **Theme/skin customization demand** | 1 long-standing proposal (#5909) | "P0 branding enhancement; zero-intrusion skin gateway suggested (#7287)" |

**Satisfaction signals:** Quick fixes for DoomLoopGate, Telegram tables, history layout, and 409 queueing show responsive maintenance. Users file detailed repros (logs, commits, env) — indicates engaged technical user base.

## 8. Backlog Watch — Stale but Important
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3419](https://github.com/agentscope-ai/QwenPaw/issues/3419) JD Cloud Coding Plan session interruption | 5 months | Cloud IDE compatibility; may affect enterprise adoption |
| [#5909](https://github.com/agentscope-ai/QwenPaw/issues/5909) Configurable theme/skin module (P0) | 2.5 months | Branding/white-label blocker; design done, needs implementation |
| [#5921](https://github.com/agentscope-ai/QwenPaw/issues/5921) KaTeX LaTeX rendering in Console | 2.5 months | Math-heavy user segment (research, education) |
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) Per-session model overrides | 2 months | Core multi-model UX; "Under Review" for weeks |
| [#7721](https://github.com/agentscope-ai/QwenPaw/issues/7721) Workspace browser event-loop freeze | 10 days | **Critical stability** — affects all channels; no PR yet |
| [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) DeepSeek tool-file serialization | 3 days | Provider interoperability regression; blocks file-tool workflows |

---

**Overall Health:** 🟢 **Healthy, high-velocity maintenance phase**  
- Merge throughput > 20 PRs/day  
- Critical bugs get same-day fixes (DoomLoopGate, Responses API strict-mode)  
- One **critical stability issue** (#7721) lacks a fix PR — should be prioritized  
- v2.2.2 release imminent; v2.3 roadmap shaping around theming, multi-model UX, PawApp SDK, and benchmarks

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-22

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 50 pull requests updated in the last 24 hours (48 open, 2 closed/merged) and 5 active issues. The project is in active maintenance mode with no new releases today. Key focus areas include runtime stability (cron silent failures, WebSocket memory consolidation), security hardening (SSRF protection, webhook audit pinning, dependency vulnerability response), and architectural improvements around agent delegation, provider streaming, and governance processes. Two RFCs are under review addressing agent-to-agent messaging and expedited merge governance. A critical dependency vulnerability (RUSTSEC-2026-0292) triggered CI failures and has a mitigation PR open.

## 2. Releases

**No new releases today.** The project continues on the `master` branch with ongoing PR integration.

## 3. Project Progress — Merged / Closed Today

| PR / Issue | Type | Summary | Link |
|------------|------|---------|------|
| **#11038** | Security / Chore | **Merged/Closed**: Ignores RUSTSEC-2026-0292 (double free in `imbl-sized-chunks` 0.1.3) to unblock CI. The advisory scan failure (#11034) prompted this mitigation. | [PR #11038](https://github.com/zeroclaw-labs/zeroclaw/pull/11038) |
| **#10214** | Enhancement / Observability | **Closed**: Added entry-count rotation and multi-segment log queries (`log_persistence_max_entries_per_segment`). Supports larger-scale log retention needs. | [PR #10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214) |
| **#11034** | Security / CI | **Closed (Issue)**: Advisory scan failure for `imbl-sized-chunks` double-free vulnerability. Resolved via #11038. | [Issue #11034](https://github.com/zeroclaw-labs/zeroclaw/issues/11034) |

## 4. Community Hot Topics — Most Active Discussions

| Item | Activity | Core Need / Analysis |
|------|----------|----------------------|
| **#10246** `fix(rpc): expose Git channels to local sessions` | Open since 2026-08-22, updated today; **blocked on #10265** | **Critical integration gap**: ZeroCode RPC sessions cannot reach configured Git channels via channel-backed tools. Daemon can poll Git channels but `git_forge` tools fail in RPC sessions. Requires durable principal/session ownership from #10265 first. High user impact for ZeroCode workflows. | [PR #10246](https://github.com/zeroclaw-labs/zeroclaw/pull/10246) |
| **#10225** `[Bug]: ZeroCode RPC sessions cannot reach configured channels` | Open since 2026-08-21, updated today; **S1 severity** | Mirrors #10246 from issue side. Workflow-blocking for ZeroCode users. Root cause: channel-backed tools not wired into RPC session context. | [Issue #10225](https://github.com/zeroclaw-labs/zeroclaw/issues/10225) |
| **#11027** `RFC: Agent-to-agent session messaging with receiver discretion` | Opened 2026-09-21, 2 comments | **Architectural RFC**: Enables agents in separate sessions to exchange findings/coordination without merging histories or operator copy-paste. Addresses capability boundary for multi-agent workflows. High-risk, needs maintainer review. | [Issue #11027](https://github.com/zeroclaw-labs/zeroclaw/issues/11027) |
| **#11017** `RFC: Preserve applicable reviews and simplify expedited merge decisions` | Opened 2026-09-20, 2 comments | **Governance RFC**: Streamlines RFC voting by removing mandatory pre-vote timers once stable snapshot exists. Follows #10677 / FND-003 Rev. 18. Reduces process friction for contributors. | [Issue #11017](https://github.com/zeroclaw-labs/zeroclaw/issues/11017) |
| **#9453** `fix(runtime): estimate context usage when provider omits token counts` | Open since 2026-07-27, updated today | **Long-standing UX gap**: Context meter blank for local OpenAI-compatible providers (llama.cpp) that omit `usage` fields. Fix estimates usage heuristically. Affects all self-hosted model users. | [PR #9453](https://github.com/zeroclaw-labs/zeroclaw/pull/9453) |

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue / PR | Summary | Fix Status |
|----------|------------|---------|------------|
| **S1 — Workflow Blocked** | [#10225](https://github.com/zeroclaw-labs/zeroclaw/issues/10225) / [#10246](https://github.com/zeroclaw-labs/zeroclaw/pull/10246) | ZeroCode RPC sessions cannot use configured external channels (Git, etc.) through channel-backed tools. | **Fix PR open (#10246)**, blocked on #10265 (principal/session ownership) |
| **S2 — Degraded Behavior** | [#10594](https://github.com/zeroclaw-labs/zeroclaw/issues/10594) | Cron records nothing when a job doesn't run → silent non-execution invisible. No run history, `last_status` untouched. | **In progress** (status:in-progress), no linked PR yet |
| **High — Security** | [#11034](https://github.com/zeroclaw-labs/zeroclaw/issues/11034) | `imbl-sized-chunks` 0.1.3 double-free / use-after-free (RUSTSEC-2026-0292). Fails CI on all PRs. | **Mitigated via #11038** (allowlist advisory), upstream fix pending |
| **High — Security** | [#10678](https://github.com/zeroclaw-labs/zeroclaw/pull/10678) | Webhook audit destinations not pinned → DNS rebinding risk. Resolves host per-request, rejects private/local/metadata IPs. | **PR open**, needs maintainer review |
| **High — Security** | [#10070](https://github.com/zeroclaw-labs/zeroclaw/pull/10070) | `file_download` SSRF hardening with private-host opt-in, NAT64 support. Maintainer repair applied. | **PR open**, needs author action |
| **High — Runtime** | [#10637](https://github.com/zeroclaw-labs/zeroclaw/pull/10637) | WS memory consolidation used gateway default provider instead of turn's actual provider → wrong model/context on multi-provider installs. | **PR open**, needs maintainer review |
| **High — Runtime** | [#10803](https://github.com/zeroclaw-labs/zeroclaw/pull/10803) | Single-candidate stream recovery missing retry budget & overload classification (Anthropic/reliable providers). | **PR open**, rebased 2026-09-21 |
| **High — Runtime** | [#10935](https://github.com/zeroclaw-labs/zeroclaw/pull/10935) | `StreamTextGuard` drops entire streamed reply when prose quotes tool-result-shaped object in code span. | **PR open** |
| **High — Runtime** | [#10804](https://github.com/zeroclaw-labs/zeroclaw/pull/10804) | Delegated sub-loops lacked cost tracking scope → no per-agent ceiling enforcement for delegated LLM calls. | **PR open** |
| **Medium — Runtime** | [#9368](https://github.com/zeroclaw-labs/zeroclaw/pull/9368) | `max_history_messages` interpreted per-message not per-turn → tool calls/results consumed retention independently. Blocked. | **PR open**, status:blocked |
| **Medium — Runtime** | [#11033](https://github.com/zeroclaw-labs/zeroclaw/pull/11033) | Bootstrap-file truncation (6000 chars) silent to operator; surfaced to user now. | **PR open** |

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version | Notes |
|--------|--------|----------------------------|-------|
| **Agent-to-agent session messaging** | RFC #11027 | Medium (RFC phase) | New subsystem capability; requires security/provenance design (ADR-018 context). High-risk, needs broad review. |
| **Expedited merge governance simplification** | RFC #11017 / PR #10855 | High | PR #10855 implements FND-003 Rev. 19; process change near completion. |
| **Multi-model per provider profile** | PR #9809 | High | Large XL PR, principal contributor, allows one credential/endpoint to host multiple models. Reduces config duplication. |
| **Agent export to portable bundle** | PR #9986 | Medium-High | `zeroclaw agents export <alias> --out <dir>` for moving agents between installs. Needs author action. |
| **SSE streaming for webhook chat turns** | PR #10450 | Medium | Opt-in SSE on `POST /webhook` with `stream: true` + `Accept: text/event-stream`. Preserves JSON fallback. |
| **Any file upload via `/api/upload` with RPC parity** | PR #10583 | Medium | Extends web upload from images-only to any file using `[IMAGE:<path>]` / document markers. |
| **Context usage estimation for providers omitting token counts** | PR #9453 | High | Fixes blank context meter for llama.cpp / local OpenAI-compatible providers. Long-open (since July). |
| **Log entry-count rotation & multi-segment queries** | PR #10214 | Done (closed) | Already merged; improves observability at scale. |

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **ZeroCode RPC sessions cannot access Git channels** | #10225 (S1), #10246 blocked 1+ month | ZeroCode/TUI users relying on channel-backed tools in RPC sessions |
| **Silent cron job non-execution** | #10594 (S2, in-progress) | Operators relying on cron for scheduled agent tasks; no visibility when jobs skip |
| **Blank context meter for local models** | #9453 (open since July) | Self-hosted model users (llama.cpp, Ollama, etc.) — cannot monitor context usage |
| **WebSocket memory consolidation uses wrong provider** | #10637 | Multi-provider installations (e.g., Anthropic + local fallback) |
| **Streaming replies dropped when quoting tool-result objects** | #10935 | Users whose agents output code snippets containing tool-result-like JSON |
| **Delegated sub-loops bypass cost ceilings** | #10804 | Users using `delegate` tool with bounded children — runaway cost risk |
| **Bootstrap file truncation invisible to operators** | #11033 | Anyone using `compact_context` (default) with large workspace files |

**Positive signals**: Active contributor base (multiple "distinguished/principal contributor" PRs), governance evolution via RFCs, security-first mindset (multiple SSRF/audit/pinning PRs), and portable agent bundles for mobility.

## 8. Backlog Watch — Stalled / Needing Maintainer Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| **[#10246](https://github.com/zeroclaw-labs/zeroclaw/pull/10246)** `fix(rpc): expose Git channels to local sessions` | 31 days | **Blocked on #10265** | S1 bug for ZeroCode; #10265 (durable principal/session ownership) is a prerequisite. Unblocks channel-backed tools in RPC. |
| **[#9368](https://github.com/zeroclaw-labs/zeroclaw/pull/9368)** `fix(runtime): count and report retained history in whole turns` | 59 days | **Status: blocked** | Core history retention logic; affects context window management for all agents. Large XL PR. |
| **[#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986)** `feat(agents): export an agent to a portable bundle` | 40 days | **Needs author action** | High-value portability feature; principal contributor; "stale-candidate" tag suggests drift risk. |
| **[#10070](https://github.com/zeroclaw-labs/zeroclaw/pull/10070)** `feat(tools): gate file_download against SSRF` | 35 days | **Needs author action** | Security hardening; maintainer repair already applied. Critical for installations allowing file downloads. |
| **[#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809)** `feat(providers): support multiple models per provider profile` | 46 days | **Needs author action** | Major config UX improvement; reduces credential duplication. XL scope, quickstart/CLI/web touchpoints. |
| **[#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391)** `fix(delegate): bounded delegate filesystem tools respect target's workspace` | 27 days | **Needs author action** | Delegation security boundary; merged twice but needs reconciliation. Affects `tool:delegate`, `tool:sop`, `tool:cron`, `tool:mcp`. |
| **[#11027](https://github.com/zeroclaw-labs/zeroclaw/issues/11027)** RFC: Agent-to-agent messaging | 1 day | **Needs maintainer review** | New capability boundary; security/architecture implications (identity-access, agent-loop, zerocode). |
| **[#11017](https://github.com/zeroclaw-labs/zeroclaw/issues/11017)** RFC: Expedited merge simplification | 2 days | **Needs maintainer review** | Governance change; PR #10855 ready to implement once RFC accepted. |

---

**Project Health Indicators**
- 🟢 **High PR throughput** (50 updated/24h) with strong contributor diversity
- 🟡 **Several long-open XL PRs** stalled on author action or dependencies (#9368, #9809, #9986, #10246)
- 🟢 **Security responsiveness**: Critical CVE mitigated same-day (#11034 → #11038)
- 🟢 **Governance evolution**: Active RFC process reducing process friction
- 🔴 **ZeroCode/RPC channel gap** remains S1 unresolved for 30+ days — highest user-impact blocker

*Data sourced from GitHub API; links point to zeroclaw-labs/zeroclaw repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*