# OpenClaw Ecosystem Digest 2026-07-30

> Issues: 210 | PRs: 500 | Projects covered: 12 | Generated: 2026-07-30 02:54 UTC

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

# OpenClaw Project Digest — 2026-07-30

## 1. Today's Overview

OpenClaw shows **high velocity but concerning stability signals** on 2026-07-30. With 210 issues and 500 PRs updated in 24 hours, the project is extremely active—yet the issue backlog reveals deep systemic problems: crash loops in gateway startup, message loss across multiple channels (Discord, WhatsApp, Telegram, Feishu), memory search corruption, compaction failures, and regression clusters around the 2026.6.x release line. The 89 merged/closed PRs indicate maintainers are processing fixes, but the 411 open PRs and 188 open issues suggest a growing gap between incoming defects and resolution capacity. No new release today, but the volume of P1/P0 regressions (15+ in the top 50 issues alone) signals the next stable release will need significant regression clearance.

## 2. Releases

**No new releases published today.** The latest stable appears to be `2026.6.1` (referenced in multiple regression reports), with `2026.6.9` mentioned in a closed config-corruption issue (#95515). Several issues cite upgrades from 2026.5.26 → 2026.6.1 as regression inflection points.

## 3. Project Progress (Merged/Closed Today)

**89 PRs merged/closed in 24h** — key resolutions include:

| PR | Area | Summary |
|----|------|---------|
| [#116084](https://github.com/openclaw/openclaw/pull/116084) | i18n/native apps | Refreshed Android/iOS/macOS locales via automated workflow |
| [#115413](https://github.com/openclaw/openclaw/issues/115413) | Compaction | Fixed false "Compaction complete" when summarization failed (closed issue) |
| [#95515](https://github.com/openclaw/openclaw/issues/95515) | Config/Upgrade | Fixed 2026.6.8→2026.6.9 email config corruption with spurious `groupAllowFrom` (closed issue) |
| [#113515](https://github.com/openclaw/openclaw/pull/113515) | Memory-core | Kept QMD file hints after stale docid misses (#113041) |
| [#113625](https://github.com/openclaw/openclaw/pull/113625) | Auto-reply | Gated execution-phase typing in `typingMode: "message"` (#111547) |
| [#113620](https://github.com/openclaw/openclaw/pull/113620) | Feishu | Accept uppercase HTTPS custom domains (#111903) |
| [#80246](https://github.com/openclaw/openclaw/pull/80246) | Cron | Include run time in failure alerts (#77497) |
| [#97676](https://github.com/openclaw/openclaw/pull/97676) | Security | Avoid false-positive secret findings with env references (#62438) |

**Pattern**: Fixes are targeting specific, reproducible bugs (config corruption, typing indicators, i18n, memory search edge cases) rather than the broader architectural regressions (crash loops, message loss, compaction livelocks).

## 4. Community Hot Topics (Most Active Issues/PRs)

### Top Issues by Comment Count

| Issue | Comments | 👍 | Area | Core Problem |
|-------|----------|-----|------|--------------|
| [#115326](https://github.com/openclaw/openclaw/issues/115326) | 18 | 0 | Gateway/Crash-loop | Crash-loop breaker permanently suppresses Discord/WhatsApp; documented recovery (`channels.start`) fails with WebSocket 1006 |
| [#90354](https://github.com/openclaw/openclaw/issues/90354) | 11 | 1 | Memory/Compaction | Pre-compaction memory flush needs bounded/validated append semantics |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | 10 | 6 | Cron/Isolated | Isolated cron jobs consistently fail "LLM request failed" at `model-call-started`; requests never reach provider |
| [#86684](https://github.com/openclaw/openclaw/issues/86684) | 9 | 1 | Sessions/Compaction | `sessions_yield` subagent wake compacts parent branch at low context usage (65k/1.05M) |
| [#91455](https://github.com/openclaw/openclaw/issues/91455) | 8 | 1 | Docs/K8s | Kubernetes deployment docs awkward; requests Helm or better guidance |
| [#90684](https://github.com/openclaw/openclaw/issues/90684) | 7 | 1 | Security/Channels | `sanitizeAssistantVisibleText()` only applied to Discord; Feishu/others leak `<invoke>` tags |
| [#90711](https://github.com/openclaw/openclaw/issues/90711) | 7 | 1 | macOS/Launchd | `StandardErrorPath` hardcoded to `/dev/null` hides gateway stderr (5.28 regression) |
| [#90595](https://github.com/openclaw/openclaw/issues/90595) | 7 | 1 | Cron/Notifications | Cron "failed" notifications fire during hot reload/retries → alert fatigue |
| [#91144](https://github.com/openclaw/openclaw/issues/91144) | 7 | 1 | Windows/CLI | Native CLI gateway Scheduled Task doesn't stay running; foreground works |
| [#90974](https://github.com/openclaw/openclaw/issues/90974) | 4 | 2 | Meta/Feedback | **"Stop shipping features. Start shipping a product that works."** — user frustration with stability |

### Top PRs by Activity
Most open PRs show 0 comments (early stage). The highest-signal PRs are those marked **"ready for maintainer look"** with platinum/hermit ratings:
- [#112496](https://github.com/openclaw/openclaw/pull/112496): Fix `sessions_send` to unknown agents (P1, session-state risk)
- [#82572](https://github.com/openclaw/openclaw/pull/82572): Persist followup queues across gateway restarts (XL, multi-area risk)
- [#97135](https://github.com/openclaw/openclaw/pull/97135): Hide recovered failed tool progress in auto-reply (P2, message-delivery)

**Underlying needs**: Users are hitting **production-blocking regressions** in core loops (gateway startup, message delivery, cron, compaction) and asking for **stability over features**. The "stop shipping features" issue (#90974) with 2👍 crystallizes sentiment.

## 5. Bugs & Stability — Ranked by Severity

### 🔴 P0 / Critical (Production Outage)
| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#115326](https://github.com/openclaw/openclaw/issues/115326) | Crash-loop, channels dead | No | Gateway crash-loop breaker permanently kills Discord/WhatsApp; recovery path broken (WS 1006) |
| [#90588](https://github.com/openclaw/openclaw/issues/90588) | All QQ Bot agents unresponsive | No | `Cannot read properties of undefined (reading 'run')` on 2026.5.28→2026.6.1 |
| [#90980](https://github.com/openclaw/openclaw/issues/90980) | Gateway startup hang | No | Docker engine wedged → `docker exec` hangs → gateway blocks at startup, all agents offline |

### 🟠 P1 / High (Data Loss, Message Loss, Session Corruption)
| Issue | Area | Fix PR? | Summary |
|-------|------|---------|---------|
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | Transcript/Projection | No | Transcript projection reconcile livelocks under sustained writes, stalls main thread → all transports stall |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | Cron/Isolated | No | Isolated cron: "LLM request failed" at `model-call-started`; usage.input=0, never reaches provider |
| [#86684](https://github.com/openclaw/openclaw/issues/86684) | Sessions/Compaction | No | `sessions_yield` parent compacted at 65k/1.05M context during subagent completion |
| [#90944](https://github.com/openclaw/openclaw/issues/90944) | Message Delivery | No | `sessions_yield` resume reply recorded but not delivered; child raw summary delivered instead |
| [#91456](https://github.com/openclaw/openclaw/issues/91456) | Telegram | No | DM lane remains guarded after send timeout → delayed/dropped DMs |
| [#113701](https://github.com/openclaw/openclaw/issues/113701) | Context/Compaction | No | Large tool outputs exceed context window; compaction can't recover → failure loop |
| [#111857](https://github.com/openclaw/openclaw/issues/111857) | CLI/Budget | No | Budget reopens full compacted JSONL branch → repeated compaction of low-context parents |
| [#115413](https://github.com/openclaw/openclaw/issues/115413) | Compaction | **Closed** | Compaction reports success when summarization failed; fallback string returned as valid summary |
| [#90361](https://github.com/openclaw/openclaw/issues/90361) | Memory/Search | No | Intermittent `index metadata is missing` despite valid builtin index (race) |
| [#92633](https://github.com/openclaw/openclaw/issues/92633) | Memory/Search | No | `corpus="all"` times out 15s; individual corpora succeed |
| [#112196](https://github.com/openclaw/openclaw/issues/112196) | Memory/Search | No | Transient sync timeout masks as persistent "database not open" / provider failure |
| [#90508](https://github.com/openclaw/openclaw/issues/90508) | Memory/Reindex | No | Main reindex thrashes, leaks `main.sqlite.tmp`, leaves `memory_search` paused |
| [#90042](https://github.com/openclaw/openclaw/issues/90042) | Memory/Index | No | Gateway `memory_search` stuck `Dirty: yes`; `provider.model` empty at boot overwrites identity |

### 🟡 P2 / Medium (Degraded Functionality, Security, UX)
| Issue | Area | Fix PR? | Summary |
|-------|------|---------|---------|
| [#90684](https://github.com/openclaw/openclaw/issues/90684) | Security/Channels | No | Feishu/non-Discord channels skip `sanitizeAssistantVisibleText()` → `<invoke>` tags leak |
| [#90711](https://github.com/openclaw/openclaw/issues/90711) | macOS/Observability | No | `StandardErrorPath=/dev/null` hides all gateway stderr (5.28 regression) |
| [#91223](https://github.com/openclaw/openclaw/issues/91223) | Active Memory | No | Active memory injection breaks prompt cache hit rate 99.9% → 22% |
| [#90551](https://github.com/openclaw/openclaw/issues/90551) | Update/Config | No | `openclaw update` silently restores stale config via post-update doctor |
| [#90448](https://github.com/openclaw/openclaw/issues/90448) | Codex/Context | No | Codex context override lost after OpenAI route unification → falls back to 272k |
| [#90536](https://github.com/openclaw/openclaw/issues/90536) | OpenAI/OAuth | No | Missing `model.request` scope → GPT-5.5 falls back silently (401) |
| [#91434](https://github.com/openclaw/openclaw/issues/91434) | LM Studio | No | Sessions start without tools, no warning/fallback |
| [#90499](https://github.com/openclaw/openclaw/issues/90499) | Discord | No | `message.read` rejects allowlisted DM channel targets |
| [#115076](https://github.com/openclaw/openclaw/issues/115076) | Webchat | No | Text + inline image misclassified as `source_modality: image` |

**Fix PR coverage**: Only 1 of the top 20 bugs (#115413) has a closed fix. Several have "linked-pr-open" labels but no merged resolution yet.

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|----------------------------|
| [#90655](https://github.com/openclaw/openclaw/issues/90655) (5👍) | Rename sessions in Control UI | High — UX polish, low risk |
| [#90911](https://github.com/openclaw/openclaw/issues/90911) | Token usage on task_runs/subagent_runs (parity with cron) | Medium — observability need, clear spec |
| [#90981](https://github.com/openclaw/openclaw/issues/90981) | `sessions_history` pagination/offset/export | Medium — long-standing gap, ~80KB truncation |
| [#91259](https://github.com/openclaw/openclaw/issues/91259) | Drop redundant agent-id from QMD collection names | Low — schema migration risk |
| [#90388](https://github.com/openclaw/openclaw/issues/90388) | Skill Workshop UI stale "waiting" state | Medium — UX consistency |
| [#90732](https://github.com/openclaw/openclaw/issues/90732) | Rename "Steer now" to non-technical language | Low — i18n/UX, but low priority vs stability |
| [#90608](https://github.com/openclaw/openclaw/issues/90608) (2👍) | Config option for default UI locale | Low — niche, but simple |
| [#91455](https://github.com/openclaw/openclaw/issues/91455) | Kubernetes/Helm deployment docs | Medium — operator pain point |

**Prediction**: Next version will likely include session rename (Control UI), token accounting parity, and Kubernetes doc updates — **but only after P0/P1 regression clearance**. The "stop shipping features" sentiment suggests maintainers may gate features behind stability milestones.

## 7. User Feedback Summary

### Pain Points (Direct Quotes)
- **"Stop shipping features. Start shipping a product that works."** ([#90974](https://github.com/openclaw/openclaw/issues/90974)) — 2👍, captures broad frustration
- **"I don't care about Parallel search... I care that my agent responds to messages."** — same issue
- **"The translations will always feel awkward."** ([#90608](https://github.com/openclaw/openclaw/issues/90608)) — German user on forced localization
- **"Windows native CLI gateway Scheduled Task does not stay running; foreground window works."** ([#91144](https://github.com/openclaw/openclaw/issues/91144)) — platform parity gap
- **"Cron run 'failed' notifications fire during hot reload and during retries, causing alert fatigue."** ([#90595](https://github.com/openclaw/openclaw/issues/90595)) — ops burden

### Use Cases Revealed
- **Multi-channel production**: Discord,

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-07-30)

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is bifurcating into **two distinct tiers**: a handful of high-velocity, production-grade platforms (OpenClaw, IronClaw, ZeroClaw, CoPaw, Hermes, NanoBot, LobsterAI) shipping daily fixes and architectural hardening, and a long tail of niche or early-stage projects (PicoClaw, NullClaw, Moltis, NanoClaw) with focused but limited scope. **Stability is the dominant theme**—every active project reports critical regressions (crash loops, message loss, data corruption) and is prioritizing regression clearance over new features. The ecosystem is converging on **multi-channel gateway architectures**, **ACP/MCP interoperability**, **durable session/compaction semantics**, and **enterprise-grade observability** as baseline requirements. Community sentiment across projects uniformly demands "product that works" over feature velocity.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Status | Health Score* |
|---------|--------------|-----------|-------------------|----------------|---------------|
| **OpenClaw** | 188 open | 411 open | 89 | Stable 2026.6.1; no new release | 🟡 **Stressed** — high velocity but P0/P1 backlog growing |
| **IronClaw** | 11 updates | 50 updates | 10 | Release PR open (#5598), breaking changes pending | 🟢 **Hardening** — systematic P1 closure, pre-release quality gate |
| **ZeroClaw** | 12 updates | 50 updates | 7 | v0.8.4 target tomorrow; v0.8.5 weekly | 🟢 **High Velocity** — architectural breadth, fix PRs awaiting review |
| **CoPaw (QwenPaw)** | 15 updates | 48 updates | 13 | v2.0.1 stable; v2.0.2 imminent | 🟢 **Stabilizing** — critical fixes merged, CI blocker #6563 urgent |
| **Hermes Agent** | 5 updates | 50 updates | 6 | No release; features merged to main | 🟡 **Accumulating** — ARM64 Docker blocker, 33-day concurrency bug |
| **NanoBot** | 5 updates | 27 updates | 11 | No release; fixes accumulating | 🟢 **Healthy** — strict type safety achieved, conflict PRs piling |
| **LobsterAI** | 0 new | 14 updates | 14 | Release candidate merged yesterday | 🟢 **Polishing** — maintainer-driven, rapid UI/UX fix turnover |
| **Moltis** | 0 new | 5 updates | 2 | No release; all work on main | 🟢 **Focused** — core-team only, zero external noise |
| **NanoClaw** | 1 new | 9 updates | 6 | No release; maintenance phase | 🟢 **Steady** — backlog cleared, Telegram regression new |
| **NullClaw** | 1 active | 4 updates | 2 | No release; changes accumulating | 🟢 **Good** — contributor-driven, clear bug/feature pipeline |
| **PicoClaw** | 1 new | 1 stale | 0 | 0.3.1 (months old) | 🔴 **Dormant** — minimal triage capacity |
| **ZeptoClaw** | 0 | 0 | 0 | No activity | ⚫ **Inactive** |

*Health Score: 🟢 Healthy / 🟡 Stressed/Accumulating / 🔴 Dormant / ⚫ Inactive*

---

## 3. OpenClaw's Position

**Advantages vs Peers**
- **Largest scale & scope**: 500+ PRs/24h, multi-channel gateway (Discord, WhatsApp, Telegram, Feishu, Slack, Matrix), memory/compaction/subagent architecture — no peer matches breadth.
- **Production battle-testing**: Real-world multi-channel deployments surface regressions (message loss, crash loops) that smaller projects haven't encountered.
- **Ecosystem gravity**: Referenced as "core reference"; other projects (LobsterAI, NanoClaw) integrate or mirror its APIs.

**Technical Approach Differences**
- **Monolithic gateway + session/compaction core** vs. IronClaw/ZeroClaw's modular crate workspace (Reborn, SOP, A2A) or CoPaw's Tauri desktop + sandbox stack.
- **Aggressive release cadence** (2026.6.x line) created regression clusters; peers (IronClaw, ZeroClaw) use feature-freeze trains and weekly cadences.
- **Community-driven triage** with 188 open issues vs. maintainer-driven (LobsterAI, Moltis) or RFC-gated (ZeroClaw, IronClaw).

**Community Size Comparison**
- **Largest open issue/PR volume** by 5–10× vs. next tier (ZeroClaw, IronClaw, Hermes).
- **Highest frustration signal**: "Stop shipping features" issue (#90974) with 2👍 crystallizes sentiment absent in smaller communities.
- **Contributor breadth**: Dozens of external PR authors vs. core-team-only (Moltis, LobsterAI) or small contributor pools (NullClaw, PicoClaw).

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Multi-channel message delivery reliability** | OpenClaw, IronClaw, ZeroClaw, NanoClaw, Hermes, CoPaw | Discord/Telegram/Feishu/Slack message loss, typing indicators, sanitizeAssistantVisibleText parity, rich_message parsing (Telegram Bot API 10.1) |
| **Session/compaction durability** | OpenClaw, NanoBot, ZeroClaw, IronClaw, CoPaw | Compaction livelocks, transcript projection stalls, session yield/resume integrity, media path preservation, context window overflow recovery |
| **ACP / MCP / OpenAI-compatible interop** | ZeroClaw, Hermes, Moltis, IronClaw, CoPaw | ACP client generalization (Hermes #68222), A2A outbound client (ZeroClaw #9106), OpenAI chat completions endpoint (ZeroClaw #8550), MCP auto-reconnect (CoPaw #6524) |
| **Scheduler/cron reliability** | OpenClaw, NanoBot, ZeroClaw, IronClaw, NullClaw | Isolated cron LLM request failures, token persistence, completion state loss, alert fatigue from hot-reload noise |
| **Memory/search subsystem hardening** | OpenClaw, ZeroClaw, NanoBot, IronClaw | Index corruption races, corpus="all" timeouts, reindex thrashing, FTS5/LIKE recall configurability, embedding provider fallbacks |
| **Windows/ARM64 platform parity** | OpenClaw, Hermes, NanoBot, CoPaw, ZeroClaw | Launchd stderr capture, PowerShell 5.1 encoding, Windows sandbox/restricted tokens, ARM64 Docker wheels, Wayland/Edge CPU regressions |
| **Observability & cost tracking** | ZeroClaw, IronClaw, Moltis, Hermes, OpenClaw | Token usage per run/subagent, Langfuse/OTLP export, peer-agent cost context, budget enforcement, mutation/coverage gates |
| **Security hardening** | ZeroClaw, Hermes, NanoBot, IronClaw, CoPaw | KeySource abstraction (93 secret fields), prompt injection in AI reviewers, sandbox isolation, negative limit/offset SQLi, CDP opt-in |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | ZeroClaw | CoPaw | Hermes | NanoBot | LobsterAI | Moltis | NullClaw |
|-----------|----------|----------|----------|-------|--------|---------|-----------|--------|----------|
| **Primary Target** | Multi-channel gateway operators | Autonomous agent platform (Reborn) | Enterprise/operator control plane | Desktop power users (Tauri) | Coding agent + desktop UI | Long-horizon autonomous goals | Consumer chat + cowork UI | Slack/PWA-first teams | Lightweight self-hosted |
| **Architecture** | Monolithic gateway + session core | Modular crates (Reborn, skills, turns) | Workspace crates (SOP, A2A, gateway) | Tauri + sandbox + app center | CLI + desktop + gateway | Single binary + WebUI | Electron + React + OpenClaw fork | Go + PWA + ACP | Rust single binary |
| **Interop Focus** | Own protocol + adapters | ACP server, skill contracts | **OpenAI, A2A, MCP** (protocol-first) | MCP, computer_use tool | ACP client generalization | Skills marketplace | OpenClaw-compatible | **ACP agent mode** | CLI providers (codex, grok) |
| **Session Model** | Compaction + yield/resume | Durable turns + journal + ledger | SOP-controlled + goal turns | Checkpoint + fork tree | Kanban + turn-state store | Consolidation + auto-recall | IM sync + side-chat | LiveChatService + ACP | Basic + configurable recall |
| **Deployment** | Docker, systemd, launchd, Windows Task | Railway, Docker, binary | Docker, binary, K8s (planned) | Tauri desktop (Win/mac/Linux) | Docker, binary, ARM64 broken | Docker, binary, systemd | Electron desktop | Docker, PWA, binary | Binary, systemd |
| **Maturity Signal** | High velocity, high regression | Pre-1.0 hardening, quality gates | v0.8.x weekly, architectural breadth | v2.0.x patch, sandbox mature | Accumulating main, ARM64 blocker | Strict types, conflict PRs | Maintainer-driven polish | Core-team only, focused | Contributor-driven, small scope |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Tier 1: High-Velocity Hardening** | OpenClaw, IronClaw, ZeroClaw, CoPaw | 40–500 PRs/24h; systematic P1 closure; release trains or imminent patches; external contributor influx; CI/CD investment |
| **Tier 2: Steady Maintainer-Driven** | Hermes, NanoBot, LobsterAI, NanoClaw | 14–50 PRs/24h; core maintainers dominate; architectural refactors (strict types, test hygiene, composition); low community friction |
| **Tier 3: Focused/Niche** | Moltis, NullClaw | <10 PRs/24h; single/core-team authors; clear scope (ACP agent, CLI providers); healthy but small |
| **Tier 4: Dormant/At Risk** | PicoClaw, ZeptoClaw | Near-zero activity; no triage capacity; single maintainer or abandoned |

**Rapidly Iterating**: CoPaw (48 PRs, sandbox/app center/checkpoints), IronClaw (50 PRs, Reborn refactor + test epic), ZeroClaw (50 PRs, 5 architectural RFCs in flight).

**Stabilizing**: NanoBot (strict types done, conflict PRs), LobsterAI (14 merges/day, UI polish), Moltis (3 large PRs, zero noise).

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Protocol standardization over custom adapters** | ZeroClaw (OpenAI, A2A), Hermes (ACP client), Moltis (ACP agent), IronClaw (ACP server), CoPaw (MCP) | Build to **OpenAI-compatible / ACP / A2A** interfaces; custom gateway adapters are technical debt. |
| **Durable execution as baseline** | IronClaw (turns/journal/ledger), ZeroClaw (SOP/goal turns), OpenClaw (compaction/yield), NanoBot (consolidation/state-graph) | **Ephemeral chat loops are obsolete**; agents need checkpointing, resume, cost attribution, and audit trails. |
| **Multi-provider resilience is mandatory** | NanoClaw (Claude→Codex fallback), ZeroClaw (provider fallbacks ignored #9544), OpenClaw (LM Studio/OpenAI/OAuth gaps) | **Single-provider dependence = production risk**; implement quota-aware failover with context handoff. |
| **Observability → RLHF feedback loop** | Moltis (Langfuse v4 + user reactions), ZeroClaw (cost tracking peer-agent), IronClaw (mutation/coverage gates) | **Instrument every turn**; user feedback (👍/👎) + token accounting + reasoning traces = dataset for self-improvement. |
| **Security boundaries hardening** | ZeroClaw (KeySource trait, 93 secrets), Hermes (sandbox PID namespace), CoPaw (Windows restricted tokens), IronClaw (signing isolation) | **Credential isolation, prompt injection defense, sandboxed tool execution** are now table stakes for enterprise adoption. |
| **Desktop → Web/PWA convergence** | CoPaw (Tauri), LobsterAI (Electron), Hermes (Desktop), Moltis (PWA), OpenClaw (Control UI) | **Tauri/PWA/Electron** are the delivery vehicles; invest in offline-first, global hotkeys, native notifications. |
| **Community demands stability gates** | OpenClaw (#90974), IronClaw (bug-bash P1 closure), ZeroClaw (v0.8.4 freeze), CoPaw (CI blocker #6563) | **Feature flags, release trains, mutation testing, flaky quarantine** — velocity without quality gates destroys trust. |

---

**Bottom Line for Decision-Makers**: The ecosystem is consolidating around **protocol interoperability (ACP/A2A/OpenAI), durable execution, and security-hardened multi-provider resilience**. Projects that treat these as architectural primitives (ZeroClaw, IronClaw, Moltis) are pulling ahead; those bolting them onto monolithic gateways (OpenClaw) face regression tax. **Invest in ACP/A2A compliance, checkpointing, and cost-aware scheduling now** — they are the new baseline for 2027.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-30

## 1. Today's Overview
NanoBot shows **high development velocity** with 27 PRs updated and 5 issues touched in the last 24 hours. The project is in a **stabilization and hardening phase**: 11 PRs were merged/closed today, addressing regressions in session consolidation, WebUI polling, type safety (BasedPyright strict mode), cron job handling, and Windows PowerShell encoding. Three new issues were opened covering multi-agent architecture, cron state loss, and Pyright suppression cleanup. No new release was cut, indicating changes are accumulating for a future batch release.

## 2. Releases
**No new releases today.** The last release is not shown in the data; the current cycle appears to be collecting fixes and enhancements for an upcoming version.

## 3. Project Progress — Merged / Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5167](https://github.com/HKUDS/nanobot/pull/5167) | **fix, test, p1** | Preserve original session messages during idle auto-compaction; advance `last_consolidated` correctly. | Prevents history loss during background compaction — critical for long-running sessions. |
| [#5164](https://github.com/HKUDS/nanobot/pull/5164) | **regression, webui, fix, test, p2** | Treat hidden system-command completion as metadata-only; cancel superseded thread requests; fix token rotation. | Reduces WebUI flicker and redundant reloads; improves responsiveness. |
| [#5158](https://github.com/HKUDS/nanobot/pull/5158) | **CI/CD, refactor, test, p1** | Enforce BasedPyright `strict` across `nanobot/` (273 modules clean). | Major code-quality milestone; catches entire classes of bugs at static-analysis time. |
| [#5165](https://github.com/HKUDS/nanobot/pull/5165) | **regression, webui, fix, test, p2** | Fix false microphone silence errors by decoupling waveform visualization from transcription input. | Restores reliable voice input in WebUI. |
| [#5116](https://github.com/HKUDS/nanobot/pull/5116) | **webui, feature, test, p1** | Add skill marketplaces (skills.sh, SkillHub) with Discover view, trending lists, install confirmation, history sparklines. | **Major user-facing feature** — transforms WebUI into a skill distribution hub. |
| [#5146](https://github.com/HKUDS/nanobot/pull/5146) | **regression, webui, fix, test, p1** | Validate token-usage day keys; drop malformed keys to prevent `/api/settings` failures. | Hardens settings API against corrupted localStorage. |

## 4. Community Hot Topics
| Item | Link | Activity | Underlying Need |
|------|------|----------|-----------------|
| **#5000** Proposal: evolve subagent system → multi-agent collaboration | [Issue #5000](https://github.com/HKUDS/nanobot/issues/5000) | 6 comments, opened 2026-07-20, updated today | Users want **persistent, stateful agents** that can share context, delegate recursively, and recover from failure — moving beyond fire-and-forget subagents. |
| **#5118** Session consolidation drops media paths (CLOSED) | [Issue #5118](https://github.com/HKUDS/nanobot/issues/5118) | 2 comments, fixed by [#5139](https://github.com/HKUDS/nanobot/pull/5139) (open) | **Data integrity**: uploaded files must survive compaction/archive; currently paths kept only in `media[]` are lost. |
| **#5034** Durable state-graph planning & recovery for `/goal` | [PR #5034](https://github.com/HKUDS/nanobot/pull/5034) | Open since 2026-07-22, conflict label, p1 | **Long-horizon task reliability** — structured plans, dependency tracking, and resume after compaction/failure. |
| **#5156** Telegram polling silently stalls after network blip | [PR #5156](https://github.com/HKUDS/nanobot/pull/5156) | Open, conflict label | **Production resilience** — bot stops receiving messages with zero logs; needs auto-recovery + observability. |

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **Critical** | Session consolidation drops media paths ([#5118](https://github.com/HKUDS/nanobot/issues/5118)) | Closed | [#5139](https://github.com/HKUDS/nanobot/pull/5139) (open, p1) |
| **High** | Manual cron runs lose completion state ([#5163](https://github.com/HKUDS/nanobot/issues/5163)) | Open | — |
| **High** | Windows PowerShell 5.1 corrupts non-ASCII pipeline input ([#5159](https://github.com/HKUDS/nanobot/issues/5159)) | Closed | Likely fixed in [#5150](https://github.com/HKUDS/nanobot/pull/5150) (bounded exec output) or separate |
| **High** | Telegram polling silently stalls ([#5156](https://github.com/HKUDS/nanobot/pull/5156)) | Open PR | #5156 (conflict, needs review) |
| **Medium** | Malformed token-usage keys break settings API ([#5146](https://github.com/HKUDS/nanobot/pull/5146)) | Fixed (merged) | #5146 |
| **Medium** | False microphone silence in WebUI ([#5165](https://github.com/HKUDS/nanobot/pull/5165)) | Fixed (merged) | #5165 |
| **Medium** | Subagent partial completion not marked ([#5152](https://github.com/HKUDS/nanobot/pull/5152)) | Open PR | #5152 |
| **Medium** | Idle session locks never released ([#5151](https://github.com/HKUDS/nanobot/pull/5151)) | Open PR | #5151 |
| **Medium** | Unbounded exec output buffers ([#5150](https://github.com/HKUDS/nanobot/pull/5150)) | Open PR | #5150 |
| **Low** | CronJob.from_dict fails on dataclass instances ([#5168](https://github.com/HKUDS/nanobot/pull/5168)) | Open PR | #5168 |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Multi-agent collaboration** (persistent identities, shared state, recursive delegation) | [#5000](https://github.com/HKUDS/nanobot/issues/5000) | **High** — active discussion, aligns with `#5034` goal-graph work |
| **Durable goal planning & recovery** (state graph, dependencies, resume after compaction) | [#5034](https://github.com/HKUDS/nanobot/pull/5034) | **High** — p1, test-covered, conflicts suggest active integration |
| **Skill marketplace in WebUI** (Discover, install, trending, history) | [#5116](https://github.com/HKUDS/nanobot/pull/5116) | **Done** — merged today |
| **Custom Telegram Bot API base URL / headers** (self-hosted/enterprise) | [#4919](https://github.com/HKUDS/nanobot/pull/4919) | **Medium** — p2, conflict, community request since #4702 |
| **Stable resource path aliases** (`<config-dir>/resources/...`) | [#5131](https://github.com/HKUDS/nanobot/pull/5131) | **Medium** — foundational for multi-agent/skill isolation |
| **Canonical OpenRouter attribution** (`https://nanobot.wiki`) | [#5094](https://github.com/HKUDS/nanobot/pull/5094) | **Low-Medium** — housekeeping, conflict label |
| **Narrow Pyright suppressions** (file-level → line-level) | [#5161](https://github.com/HKUDS/nanobot/issues/5161) | **High** — follows strict-mode merge (#5158), easy win |

## 7. User Feedback Summary
- **Pain points**:  
  - *Data loss*: Media files disappearing after session archive (#5118) — **fixed but PR not merged**.  
  - *Silent failures*: Telegram bot stops receiving messages with no logs (#5156); cron jobs show "Failed" despite success (#5163).  
  - *Windows CLI*: PowerShell 5.1 mangles non-ASCII output (#5159).  
  - *WebUI flakiness*: False mic silence, redundant reloads, settings API crashes on bad keys.  
- **Use cases driving demand**:  
  - Long-running autonomous goals needing planning + recovery (#5034).  
  - Teams sharing/distributing skills via WebUI (#5116).  
  - Enterprise/self-hosted Telegram deployments (#4919).  
- **Satisfaction**: High engagement on architectural proposals (#5000, #5034) suggests users are **invested in the platform's direction**, not just filing bugs.

## 8. Backlog Watch — Stale / Blocked Items Needing Attention
| Item | Age | Why It Matters | Blocker |
|------|-----|----------------|---------|
| [#5034](https://github.com/HKUDS/nanobot/pull/5034) Durable goal state-graph | 8 days | Core to autonomous agent reliability | **Conflict label** — needs rebase/merge resolution |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) Custom Telegram API base | 16 days | Enterprise/self-host requirement | **Conflict label** — awaiting maintainer review |
| [#5131](https://github.com/HKUDS/nanobot/pull/5131) Stable resource path aliases | 2 days | Foundation for multi-agent/skill isolation | **Conflict label** — early but strategic |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) Telegram silent stall recovery | 1 day | Production-critical resilience | **Conflict label** — needs test + review |
| [#4812](https://github.com/HKUDS/nanobot/pull/4812) Memory KeyError on malformed role | 24 days | Defensive coding, easy fix | **Conflict label** — trivial but stale |
| [#5094](https://github.com/HKUDS/nanobot/pull/5094) OpenRouter canonical URL | 4 days | Attribution compliance | **Conflict label** — low risk |

---

**Health Indicator**: 🟢 **Healthy** — high merge rate (11/27 PRs closed today), strict type safety achieved, critical bugs have active fixes, and architectural work is progressing. Main risk: **conflict-labeled PRs piling up** (6 open) — suggests merge bottlenecks or review bandwidth limits.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-30

## 1. Today's Overview

Hermes Agent shows **high development velocity** with 50 pull requests and 5 issues updated in the last 24 hours, though no new releases were published. The project is actively addressing stability concerns (test flakiness, Windows portability, Docker ARM64 image defects) while advancing feature work across the desktop UI, memory plugins, ACP generalization, and gateway APIs. Two critical bugs remain open: a SQLite corruption issue under concurrent worker load (#53819) and a Docker ARM64 image shipping x86_64 wheels (#74554). The closed issues indicate several features were merged to main (config-driven routing, Kilo Auto Efficient exposure, desktop response display fix), suggesting the main branch is accumulating significant changes ahead of the next release.

## 2. Releases

**No new releases published today.** The project appears to be in a development/accumulation phase with multiple PRs merged to main but no version cut.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Type | Component | Summary |
|----|------|-----------|---------|
| [#74553](https://github.com/NousResearch/hermes-agent/pull/74553) | test | cli | **Test stability closeout**: fixes log-file leak at collection time, order-dependent CLI flake, hardens kanban write-guard (merged #74517) |
| [#71271](https://github.com/NousResearch/hermes-agent/pull/71271) | test | cli | **Stops test suite writing to operator's real Hermes logs** (`~/.hermes/logs/agent.log`, `errors.log`) by isolating logging setup |
| [#68872](https://github.com/NousResearch/hermes-agent/pull/68872) | test | cli | **Fixes order-dependent flake** in `test_resume_quiet_stderr` at the source (two independent test leaks) |
| [#68231](https://github.com/NousResearch/hermes-agent/issues/68231) | bug | agent/desktop | **Desktop hides substantive response after follow-up verification** — closed as `sweeper:implemented-on-main` (fix already on main) |
| [#68172](https://github.com/NousResearch/hermes-agent/issues/68172) | feature | gateway/config | **Config-driven channel/team-ID → profile routing** — closed as duplicate, implemented on main |
| [#68213](https://github.com/NousResearch/hermes-agent/issues/68213) | feature | cli/provider | **Expose Kilo Auto Efficient in model picker** — closed as `cannot-reproduce` (likely already available) |

**Key advances**: Test suite hygiene significantly improved (no more polluting user logs, flakes fixed); desktop response display bug resolved on main; gateway routing and Kilo provider features merged.

## 4. Community Hot Topics

| Item | Type | Comments | Analysis |
|------|------|----------|----------|
| [#53819](https://github.com/NousResearch/hermes-agent/issues/53819) | Bug | 8 | **Kanban DB corruption under high concurrent-worker load** — longest-running open issue (since 2026-06-27). Root cause: unserialized concurrent SQLite writes from multiple workers. Tagged `needs-decision` — requires architectural decision on serialization strategy (per-write locking, WAL mode tuning, or separate DB per worker). |
| [#74554](https://github.com/NousResearch/hermes-agent/issues/74554) | Bug | 0 (new today) | **Docker linux/arm64 image ships x86_64 wheels** — every `hermes` command fails on `ImportError`. Critical blocker for ARM64 users (Apple Silicon, Raspberry Pi, Graviton). No comments yet but high severity (P2). |
| [#74541](https://github.com/NousResearch/hermes-agent/pull/74541) | PR (bug) | — | **Reject negative limit/offset on session routes** — security/stability fix preventing SQLite `LIMIT -1` bypass of pagination clamps. Tagged `needs-decision`. |
| [#74540](https://github.com/NousResearch/hermes-agent/pull/74540) | PR (bug) | — | **Don't clear in-flight turn marker when canonical flush fails** — prevents runtime overstating success after SQLite write failure. Tagged `needs-decision`. |
| [#68222](https://github.com/NousResearch/hermes-agent/pull/68222) | PR (feature) | — | **Generalize ACP client to any ACP-compatible coding agent** — strategic refactor replacing per-agent Copilot ACP copies with a single `ACPClient` + agent registry. Tagged `needs-decision` (P4). |

**Underlying needs**: 
- **Concurrency safety** in SQLite-backed kanban (core reliability)
- **ARM64 Docker support** (platform coverage)
- **ACP ecosystem openness** (extensibility beyond Copilot)
- **Session API hardening** (security boundaries)

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue/PR | Component | Status | Fix PR? |
|----------|----------|-----------|--------|---------|
| **Critical (P1)** | [#74554](https://github.com/NousResearch/hermes-agent/issues/74554) | Docker/ARM64 | Open | No |
| **High (P2)** | [#53819](https://github.com/NousResearch/hermes-agent/issues/53819) | Kanban/Cron | Open (needs-decision) | No |
| **High (P2)** | [#74541](https://github.com/NousResearch/hermes-agent/pull/74541) | API/Session | Open (needs-decision) | **Yes (PR open)** |
| **High (P2)** | [#74540](https://github.com/NousResearch/hermes-agent/pull/74540) | Agent/State | Open (needs-decision) | **Yes (PR open)** |
| **High (P2)** | [#68194](https://github.com/NousResearch/hermes-agent/pull/68194) | Skills/Docker | Open | **Yes (PR open)** |
| **Medium (P3)** | [#68220](https://github.com/NousResearch/hermes-agent/pull/68220) | Browser/Tools | Open | **Yes (PR open)** |
| **Medium (P3)** | [#68221](https://github.com/NousResearch/hermes-agent/pull/68221) | Matrix/macOS | Open | **Yes (PR open)** |
| **Medium (P3)** | [#68234](https://github.com/NousResearch/hermes-agent/pull/68234) | Feishu/Plugins | Open (duplicate) | **Yes (PR open)** |
| **Medium (P3)** | [#68228](https://github.com/NousResearch/hermes-agent/pull/68228) | Memory/Config | Open | **Yes (PR open)** |
| **Medium (P3)** | [#68212](https://github.com/NousResearch/hermes-agent/pull/68212) | CLI/Quiet mode | Open | **Yes (PR open)** |

**Notes**: 
- The ARM64 Docker bug (#74554) is a **release blocker** for ARM users — no workaround in issue.
- Kanban corruption (#53819) has confirmed root cause but needs architectural decision; affects high-concurrency deployments.
- Most P2/P3 bugs have open fix PRs awaiting review/decision.

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for Next Version | Notes |
|---------|--------|----------------------------|-------|
| **ACP client generalization** | [#68222](https://github.com/NousResearch/hermes-agent/pull/68222) | High | Strategic refactor, `needs-decision` but aligns with #5257 direction; enables any ACP-compatible agent (Cursor, Zed, etc.) |
| **Hindsight invalidate tool (SDK + HTTP fallback)** | [#68206](https://github.com/NousResearch/hermes-agent/pull/68206), [#68207](https://github.com/NousResearch/hermes-agent/pull/68207) | High | Two PRs (SDK-first + HTTP-only) for soft-delete/restore memories; memory plugin maturation |
| **Revision-aware Kanban API** | [#68200](https://github.com/NousResearch/hermes-agent/pull/68200) | Medium | Server-to-server control plane API using existing `API_SERVER_KEY` auth; tagged `risk-security-boundary`, `risk-compatibility` |
| **Bounded inline images in runs** | [#68202](https://github.com/NousResearch/hermes-agent/pull/68202) | Medium | OpenAI-style `input_image` parts, max 4 images/5MiB; extends controllable `POST /v1/runs` |
| **Terminal jail `--sandbox` flag** | [#68216](https://github.com/NousResearch/hermes-agent/pull/68216) | Medium | PID namespace isolation for terminal commands; follows safe-mode pattern |
| **MCP tool annotations in Desktop** | [#74555](https://github.com/NousResearch/hermes-agent/pull/74555) | Medium | Exposes `ToolAnnotations` (titles, behavior hints) in Desktop discovery/UI |
| **Desktop assistant bubble color (opt-in)** | [#68225](https://github.com/NousResearch/hermes-agent/pull/68225) | Low-Medium | UI polish, closes #67290; already merged to main per sweeper label |

**Roadmap signals**: Strong push toward **multi-agent interoperability** (ACP generalization), **memory lifecycle management** (Hindsight invalidate), **gateway API maturity** (revision-aware Kanban, bounded images), and **security hardening** (sandbox, API validation). Desktop UX polish continues.

## 7. User Feedback Summary

| Pain Point / Use Case | Source | Sentiment |
|----------------------|--------|-----------|
| **ARM64 Docker completely broken** — `ImportError` on every command due to x86_64 wheels in `/opt/hermes/.venv` | [#74554](https://github.com/NousResearch/hermes-agent/issues/74554) | 🔴 **Critical dissatisfaction** — blocks all ARM64 users (Mac M-series, ARM servers) |
| **Kanban DB corruption under load** — wrong entry counts in `idx_events_task` after concurrent worker writes | [#53819](https://github.com/NousResearch/hermes-agent/issues/53819) | 🟠 **High frustration** — data integrity issue in production high-concurrency scenarios |
| **Desktop hides useful response** after follow-up verification message replaces it | [#68231](https://github.com/NousResearch/hermes-agent/issues/68231) | 🟡 **Moderate** — UX regression, but fix already on main |
| **Quiet mode (`-Q`) leaks reasoning** into stdout, corrupting machine-readable output | [#68212](https://github.com/NousResearch/hermes-agent/pull/68212) | 🟡 **Moderate** — automation/scripting breakage |
| **Feishu topic-thread delivery broken** after async delegation — loses message anchor | [#68234](https://github.com/NousResearch/hermes-agent/pull/68234) | 🟡 **Platform-specific** — affects Feishu/Lark users |
| **Memory providers (OpenViking, RetainDB) ignore Dashboard config** — can't enable via UI | [#68228](https://github.com/NousResearch/hermes-agent/pull/68228) | 🟡 **Config UX gap** — non-secret config not read from `config.yaml` |
| **Windows test failures** in Bitwarden secret-source tests due to Linux-only test assumptions | [#68226](https://github.com/NousResearch/hermes-agent/pull/68226) | 🟢 **Developer friction** — no user-facing bug, but CI noise |
| **macOS Sequoia build failure** — `python-olm` incompatible with Clang 21 + CMake 4 | [#68221](https://github.com/NousResearch/hermes-agent/pull/68221) | 🟢 **Platform support** — blocks `hermes update` on newest macOS |

**Overall**: Critical platform support gaps (ARM64 Docker, macOS Sequoia) and a data-integrity bug dominate negative feedback. Positive signals: fixes for desktop UX, quiet mode, and config UX are in flight.

## 8. Backlog Watch — Needing Maintainer Attention

| Item | Age | Type | Why It Matters |
|------|-----|------|----------------|
| [#53819](https://github.com/NousResearch/hermes-agent/issues/53819) | 33 days | Bug (P3) | **Oldest open bug** — Kanban DB corruption under concurrency. Confirmed root cause, tagged `needs-decision` for 33 days. Requires architectural call: per-write serialization, WAL tuning, or sharding. Blocks high-concurrency reliability. |
| [#74541](https://github.com/NousResearch/hermes-agent/pull/74541) | 0 days | PR (P2) | **Security/stability fix** — negative `limit/offset` bypasses pagination clamps via SQLite `LIMIT -1`. Tagged `needs-decision` — likely straightforward but needs review. |
| [#74540](https://github.com/NousResearch/hermes-agent/pull/74540) | 0 days | PR (P2) | **State consistency fix** — clears in-flight turn marker even on flush failure, losing evidence of failed persistence. Tagged `needs-decision`. |
| [#68222](https://github.com/NousResearch/hermes-agent/pull/68222) | 10 days | PR (P4) | **Strategic refactor** — generalizes ACP client to any ACP agent. Tagged `needs-decision`; architectural impact on plugin ecosystem. |
| [#68200](https://github.com/NousResearch/hermes-agent/pull/68200) | 10 days | PR (P3) | **Gateway API expansion** — revision-aware Kanban API for control planes. Tagged `risk-security-boundary`, `risk-compatibility` — needs security review. |
| [#68194](https://github.com/NousResearch/hermes-agent/pull/68194) | 10 days | PR (P2) | **Skill contract generation** — deterministic GBrain skill manifests with drift checks. Tagged `risk-compatibility`, `risk-automation` — affects Docker builds and skill loading. |
| [#68216](https://github.com/NousResearch/hermes-agent/pull/68216) | 10 days | PR (P3) | **Security sandbox** — `--sandbox` flag for PID namespace isolation. Tagged `risk-security-boundary`, `risk-compatibility` — needs security review. |

**Recommendation**: Prioritize #53819 (architectural decision), #74554 (ARM64 Docker blocker — consider emergency patch), and the two P2 API/state fix PRs (#74541, #74540). The ACP generalization (#68222) and gateway API (#68200) are strategic but need dedicated review cycles.

---

**Project Health Indicators**:
- ✅ High PR throughput (50/24h), active test hygiene investment
- ✅ Multiple features merged to main (routing, Kilo, desktop fix)
- ⚠️ Critical ARM64 Docker regression (new, no fix)
- ⚠️ Long-standing concurrency bug without decision (33 days)
- ⚠️ Several `needs-decision` PRs accumulating (6+)

**Next Release Prediction**: Likely to include test stability fixes, desktop UX polish, memory plugin improvements, and CLI quiet-mode fix. ARM64 Docker fix and Kanban concurrency fix are prerequisites for a healthy release but may slip if decisions stall.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-30

## 1. Today's Overview
PicoClaw saw minimal activity in the last 24 hours: one new bug report (#3301) and one stale pull request (#3283) received updates. No releases, merged PRs, or closed issues occurred. The project remains in a maintenance phase with low community engagement—zero reactions or comments on the new items. The sole active issue points to a regression in session management for dispatched chats, while the open PR has been pending since 2026-07-22 without review.

## 2. Releases
**No new releases** published in the last 24 hours. The latest version remains 0.3.1 (commit 2cf030d2).

## 3. Project Progress
**No merged or closed PRs today.** The only PR updated (#3283) is marked `[stale]` and adds DingTalk inbound image message support (token caching, graceful degradation, media download helpers). It awaits maintainer review. No feature completions or bug fixes landed.

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| #3301 | Issue | Created 2026-07-29, 0 comments, 0 👍 | [sipeed/picoclaw#3301](https://github.com/sipeed/picoclaw/issues/3301) |
| #3283 | PR | Updated 2026-07-29, stale since 2026-07-22, 0 👍 | [sipeed/picoclaw#3283](https://github.com/sipeed/picoclaw/pull/3283) |

**Analysis**: The bug report (#3301) highlights a gap in session lifecycle handling when dispatch rules route chats to non-default agents—core multi-agent routing functionality. The DingTalk PR (#3283) addresses a channel-specific media gap but has stalled without maintainer attention. Low interaction suggests limited community triage capacity.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Medium** | [#3301](https://github.com/sipeed/picoclaw/issues/3301) | `/clear` command and automatic session compression fail for chats routed via dispatch rules to non-default agents. Affects multi-agent deployments on Raspberry Pi (Discord, Telegram). | No |

No crashes or regressions reported beyond this session-management bug.

## 6. Feature Requests & Roadmap Signals
- **DingTalk image inbound support** (#3283) — explicit channel parity request; likely to land if reviewed.
- **Dispatch-rule session parity** (implied by #3301) — users expect full session controls (`/clear`, compression) regardless of routing target. This may drive a refactor of session scoping in the next minor version.

## 7. User Feedback Summary
- **Pain point**: Operators using dispatch rules for multi-agent routing lose basic session hygiene tools (`/clear`, auto-compression), forcing manual workarounds.
- **Use case**: Raspberry Pi deployments bridging Discord/Telegram to non-default agents via DeepSeek/OpenCode Go.
- **Sentiment**: Neutral/negative—issue filed without workaround, zero community discussion suggests users may be silently affected.

## 8. Backlog Watch
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#3283](https://github.com/sipeed/picoclaw/pull/3283) | 8 days (stale) | Open, unreviewed | Completes DingTalk media parity; token-caching pattern may be reusable for other channels. |
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) | 1 day | Open, untriaged | Blocks reliable multi-agent session management; no workaround documented. |

**Maintainer action needed**: Review #3283 (low-risk feature) and triage #3301 (routing-session bug) to prevent silent degradation for dispatch-rule users.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-30

---

## 1. Today's Overview

NanoClaw saw moderate maintenance activity today with **9 pull requests updated** (3 still open, 6 merged/closed) and **1 new critical issue** filed. No new releases were published. The project is in a steady "maintenance & hardening" phase: multiple long-running PRs were finally closed (some dating back to May), a docs linkage improvement landed, and a significant Telegram regression surfaced that silently drops formatted message content. Overall velocity appears healthy for a mature project—core contributors are clearing backlog while addressing a fresh platform API break.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3152](https://github.com/nanocoai/nanoclaw/pull/3152) | Docs | Links `docs/REQUIREMENTS.md` and `docs/SECURITY.md` from README Architecture section | Improves discoverability of key architecture docs |
| [#3150](https://github.com/nanocoai/nanoclaw/pull/3150) | Infra/Setup | Adds option to fetch prebuilt, hardened agent image from NanoClaw registry (built by Echo) instead of local build | Reduces CI time & supply-chain risk; opt-in, default unchanged |
| [#3014](https://github.com/nanocoai/nanoclaw/pull/3014) | Fix (agent-runner) | Binds `hasIdenticalSend` to the in-flight turn | Fixes a race/state leak in message deduplication |
| [#2476](https://github.com/nanocoai/nanoclaw/pull/2476) | Feature (operational) | "Restart no nanoclaw" — operational/container skill (closed after long review) | Adds restart orchestration capability |
| [#2440](https://github.com/nanocoai/nanoclaw/pull/2440) | Fix + Feat | Session routing fix (authoritative reply channel) + pre-compaction notification | Stabilizes poll-loop after container restart with pending inbound |
| [#2904](https://github.com/nanocoai/nanoclaw/pull/2904) | Fix (Slack) | Reloads thread history from platform on `@mention` for `engage_mode: 'mention'` wirings | Fixes invisible historical context in Slack mention-only threads |

**Takeaway:** A batch of long-lived PRs (several open since May) were finally merged, indicating a maintainer push to clear backlog. The fixes address real production pain points: Slack thread context loss, agent-runner deduplication bugs, and container restart message routing.

---

## 4. Community Hot Topics

| Item | Activity | Core Need |
|------|----------|-----------|
| [Issue #3151](https://github.com/nanocoai/nanoclaw/issues/3151) — **Telegram Bot API 10.1 `rich_message` inbound arrives empty** | Created 2026-07-29, 0 comments, 0 reactions (new) | **Critical platform regression**: Telegram's June 11 Bot API 10.1 changed `rich_message` payload structure; formatted content (web page pastes) now arrives with no text, no attachments, no error. Silently drops user content. |
| [PR #3057](https://github.com/nanocoai/nanoclaw/pull/3057) — **Dual-engine quota fallback (Claude→Codex)** | Open since 2026-07-15, updated 2026-07-29, battle-tested in prod since 2026-07-06 on WhatsApp | **High-demand resilience feature**: Automatic provider failover on quota exhaustion, handoff recaps, proactive quota warnings. Migration 017 adds `container_configs.fallback_provider`. |
| [PR #3145](https://github.com/nanocoai/nanoclaw/pull/3145) — **Backfill destinations for existing wirings** | Open 2026-07-28, updated 2026-07-30 | **Data integrity migration**: Adds migration 021 to provision missing channel destinations for existing messaging-group wirings, preserving custom names. |
| [PR #3149](https://github.com/nanocoai/nanoclaw/pull/3149) — **CLI: `--rw` flag for `groups config add-mount`** | Open 2026-07-29 | **Developer ergonomics**: Allows read-write mounts via CLI (previously read-only only). |

**Analysis:** The Telegram issue (#3151) is the most urgent—silent data loss on a major channel. The dual-engine fallback (#3057) signals strong community demand for multi-provider resilience, already validated in production. The backfill migration (#3145) suggests schema drift in wiring configs that needs automated correction.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **Critical** | [#3151](https://github.com/nanocoai/nanoclaw/issues/3151) | Telegram Bot API 10.1 `rich_message` inbound arrives empty — formatted content (web pastes) silently dropped, no text/attachments/error | **No fix PR yet** — requires urgent parser update for new payload structure |
| **High** | [#2904](https://github.com/nanocoai/nanoclaw/pull/2904) (merged) | Slack `engage_mode: 'mention'` wirings never subscribed thread; re-mention deep in thread only delivered single message, lost intermediate history | **Fixed & merged** — reloads thread history from platform on `@mention` |
| **High** | [#2440](https://github.com/nanocoai/nanoclaw/pull/2440) (merged) | Container restart with pending inbound: first message could be approval notification, not user message — poll-loop used wrong reply channel | **Fixed & merged** — session_routing now authoritative |
| **Medium** | [#3014](https://github.com/nanocoai/nanoclaw/pull/3014) (merged) | `hasIdenticalSend` not bound to in-flight turn — potential deduplication race | **Fixed & merged** |
| **Low** | [#3149](https://github.com/nanocoai/nanoclaw/pull/3149) (open) | CLI `groups config add-mount` missing `--rw` flag — read-write mounts not possible via CLI | **Fix PR open** — trivial addition |

**Stability signal:** 4/5 recent bugs have fixes merged. The lone critical regression (#3151) has no fix yet—should be prioritized for next patch.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Evidence | Likelihood for Next Version |
|---------|--------|----------|----------------------------|
| **Multi-provider quota fallback (Claude→Codex)** | [PR #3057](https://github.com/nanocoai/nanoclaw/pull/3057) | Full feature branch, production-tested since 2026-07-06 on WhatsApp, includes migration 017, handoff recaps, proactive warnings | **Very High** — mature, battle-tested, addresses top user pain (quota exhaustion) |
| **Prebuilt hardened agent images** | [PR #3150](https://github.com/nanocoai/nanoclaw/pull/3150) | Merged today; opt-in fetch from NanoClaw registry (built by Echo) | **High** — already merged, improves supply chain & CI speed |
| **Slack thread history reload on mention** | [PR #2904](https://github.com/nanocoai/nanoclaw/pull/2904) | Merged today; fixes major context loss in mention-only mode | **Delivered** |
| **CLI read-write mount flag** | [PR #3149](https://github.com/nanocoai/nanoclaw/pull/3149) | Open, trivial scope | **High** — low risk, high utility |
| **Wiring destination backfill migration** | [PR #3145](https://github.com/nanocoai/nanoclaw/pull/3145) | Open, migration 021, preserves existing data | **High** — data integrity fix |

**Roadmap prediction:** Next minor version will likely ship the dual-engine fallback (#3057), the prebuilt image fetch (#3150, already merged), and the CLI `--rw` flag (#3149). The Telegram fix (#3151) may force an expedited patch.

---

## 7. User Feedback Summary

| Channel | Pain Point / Use Case | Sentiment |
|---------|----------------------|-----------|
| **Telegram users** (via #3151) | Formatted content pasted from web pages arrives empty — "message content silently dropped" | 😡 **High frustration** — silent data loss, no error, affects all formatted pastes |
| **Slack power users** (via #2904) | Mention-only bots lost thread context; re-mentioning only showed latest message | 😞 **Resolved** — fix merged, restores full thread history |
| **Operators / DevOps** (via #3150, #3149) | Local agent image builds slow; need prebuilt hardened images; need RW mounts via CLI | 😊 **Positive** — features delivered or in progress |
| **Production WhatsApp deployment** (via #3057) | Quota exhaustion on Claude halted agents; need automatic Codex failover with context handoff | 😊 **Validated in prod** — feature branch running live since July 6 |

**Overall:** Users are vocal about platform API breaks (Telegram) and quota resilience. The project responds with production-hardened features. Silent data loss remains the top dissatisfaction driver.

---

## 8. Backlog Watch — Stale Items Needing Attention

| Item | Age | Why It Matters | Recommended Action |
|------|-----|----------------|-------------------|
| [PR #3057](https://github.com/nanocoai/nanoclaw/pull/3057) — Dual-engine quota fallback | Open since 2026-07-15 (15 days) | **Highest-impact open PR**; production-validated, includes migration, handoff UX, quota warnings. Blocking multi-provider resilience. | **Prioritize review/merge** — assign core reviewer, target next minor |
| [PR #3145](https://github.com/nanocoai/nanoclaw/pull/3145) — Backfill destinations migration | Open since 2026-07-28 (2 days) | Data integrity fix for existing wirings; prevents future routing failures. Low risk, high value. | **Quick review & merge** — migration-only, well-scoped |
| [PR #3149](https://github.com/nanocoai/nanoclaw/pull/3149) — CLI `--rw` flag | Open since 2026-07-29 (1 day) | Trivial ergonomic fix; unblocks RW mount workflows. | **Fast-track** — minimal surface area |
| [Issue #3151](https://github.com/nanocoai/nanoclaw/issues/3151) — Telegram rich_message regression | Filed 2026-07-29 (1 day) | **Critical regression** on major channel; silent content loss. No fix PR yet. | **Urgent: assign engineer** — create fix PR today, target patch release |

**Maintainer attention needed now:** #3151 (critical bug, no fix), #3057 (major feature ready to land). The rest are low-risk follow-ups.

---

*Digest generated from GitHub data as of 2026-07-30. Links point to live items on `github.com/nanocoai/nanoclaw`.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-30

## 1. Today's Overview
NullClaw shows steady maintenance activity with **4 PRs updated** in the last 24 hours (2 merged, 2 open) and **1 active issue** receiving recent comments. The project is in a healthy iterative phase: a new provider (Grok CLI) was merged, a long-standing scheduler authentication bug has a targeted fix PR, and memory subsystem configurability is being refined via a reopened PR. No new releases were cut, suggesting changes are accumulating for a future version bump. Community engagement remains modest but focused — issues and PRs are technical, specific, and actionable.

## 2. Releases
**No new releases** published today. The last release predates this reporting window. Changes from merged PRs (#981, #961) will likely ship in the next version.

## 3. Project Progress
### Merged / Closed PRs (2)
| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#981](https://github.com/nullclaw/nullclaw/pull/981) | `feat(provider): add grok-cli provider for xAI Grok CLI` | Feature | Adds a new CLI-based provider delegating to the local `grok` binary, following the `codex-cli` spawn-per-request pattern. Expands LLM provider ecosystem for xAI users. |
| [#961](https://github.com/nullclaw/nullclaw/pull/961) | `feat(memory): add configurable auto-recall, recall_limit, max_context_bytes` | Feature | **Superseded by #979** — same feature set, closed in favor of updated implementation. Introduces three memory config knobs: `auto_recall` (bool), `recall_limit` (u32), `max_context_bytes` (u64). |

### Open PRs Advancing (2)
| PR | Title | Status | Notes |
|----|-------|--------|-------|
| [#980](https://github.com/nullclaw/nullclaw/pull/980) | `fix(scheduler): persist paired token to disk during /pair` | **Open** | Fixes **#839** (scheduler auth failure). Writes paired token hash to `{config_dir}/paired_token` so cron/scheduler can authenticate gateway admin routes. Critical for scheduler reliability. |
| [#979](https://github.com/nullclaw/nullclaw/pull/979) | `feat(memory): add configurable auto-recall, recall_limit, max_context_bytes` | **Open** | Updated version of #961. Adds granular memory recall controls. Default: `auto_recall=true`, `recall_limit=5`. Enables users to disable FTS5/LIKE queries entirely for performance. |

## 4. Community Hot Topics
| Item | Activity | Analysis |
|------|----------|----------|
| **[Issue #915](https://github.com/nullclaw/nullclaw/issues/915)** `[bug] Problem with scheduler unauthorized` | **3 comments**, 1 👍, updated 2026-07-29 | **High-signal issue**. User runs NullClaw + Ollama (qwen3.6:27b/RTX 3090) on Ubuntu. Scheduler fails in Telegram & CLI despite working LLM/tool calling. Root cause: paired token not persisted → scheduler can't auth to gateway. **Directly addressed by PR #980**. User workaround: manual token file creation. |
| **[PR #980](https://github.com/nullclaw/nullclaw/pull/980)** `fix(scheduler): persist paired token to disk during /pair` | 0 comments, 0 👍 | **Silent but critical fix**. No discussion yet — likely author (valonmulolli) self-identified via #839. Maintainer review needed. |
| **[PR #979](https://github.com/nullclaw/nullclaw/pull/979)** `feat(memory): configurable recall` | 0 comments, 0 👍 | Replaces #961. No community feedback yet. Design question: should `max_context_bytes` default be documented? |

**Underlying needs**:  
- **Scheduler reliability** for automated/cron workflows (Telegram, headless)  
- **Memory cost control** — users want to disable or limit recall to reduce latency/token usage  
- **Provider diversity** — xAI Grok CLI support reflects demand for local/CLI-first LLM integrations  

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#915](https://github.com/nullclaw/nullclaw/issues/915) Scheduler unauthorized — token not persisted, breaks cron/Telegram scheduling | **Open** (3 comments) | **[#980](https://github.com/nullclaw/nullclaw/pull/980)** (open, fixes #839) |
| **Medium** | None new today | — | — |

**Assessment**: Only one active bug, but it breaks a core feature (scheduler) for multi-interface deployments. Fix exists in #980 — **merge priority: high**.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Memory recall configurability** (`auto_recall`, `recall_limit`, `max_context_bytes`) | PR #979 (replaces #961) | **Very High** — PR ready, replaces merged-but-closed #961 |
| **Grok CLI provider** | PR #981 (merged) | **Done** — will ship in next release |
| **Scheduler token persistence** | PR #980 (fixes #839, #915) | **High** — critical bug fix, small scope |
| **User-controlled memory performance** | Implied by #979 design | **Medium** — may inspire further knobs (e.g., `recall_threshold`, embedding model config) |

**Prediction**: Next release (v0.x+1) will include: Grok CLI provider, memory recall config, scheduler auth fix. No breaking changes evident.

## 7. User Feedback Summary
| Pain Point | Evidence | User Context |
|------------|----------|--------------|
| **Scheduler doesn't work out of the box** | #915: "scheduler is not working. not in telegram chat nor CLI" | Self-hosted, multi-interface (Telegram + CLI), Ollama + GPU |
| **Memory system too aggressive / opaque** | #979 adds `auto_recall=false` to skip FTS5/LIKE entirely | Implied: users hit latency/token limits from unbounded recall |
| **Provider gaps for emerging CLIs** | #981 adds `grok-cli` following `codex-cli` pattern | Early adopters of xAI/local CLI tools want parity |

**Satisfaction signals**:  
- User in #915 confirms "LLM working fine, tool calling mostly fine" — core loop solid  
- PR authors (valonmulolli) are active contributors fixing own pain points — healthy dogfooding  

## 8. Backlog Watch
| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| **[Issue #839](https://github.com/nullclaw/nullclaw/issues/839)** (referenced by #980) | ~2 months | **High** — root cause of #915, fix exists in #980 but unmerged | **Review & merge #980** — unblocks scheduler for all users |
| **[PR #979](https://github.com/nullclaw/nullclaw/pull/979)** memory config | 1 day | **Low** — clean feature, replaces #961 | **Review for config defaults & docs** — ensure `max_context_bytes` default is sensible |
| **[Issue #915](https://github.com/nullclaw/nullclaw/issues/915)** scheduler unauthorized | 76 days | **Medium** — user workaround exists, but poor UX | **Close after #980 merge** — add regression test for token persistence |

---

**Project Health**: 🟢 **Good** — Active maintenance, clear bug/feature pipeline, contributor-driven fixes.  
**Velocity**: Steady — 2 merges + 2 actionable PRs in 24h.  
**Risk**: Low — no regressions, no security issues, no stale critical bugs without fixes.  

*Data sourced from GitHub API (issues, PRs, releases) for nullclaw/nullclaw as of 2026-07-30 00:00 UTC.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-30

---

## 1. Today's Overview
IronClaw is in a **high-velocity stabilization and hardening phase**. Over the last 24 hours, the project saw **11 issue updates** (6 closed, 5 open) and **50 PR updates** (10 closed/merged, 40 open). No new release was cut. The activity centers on three pillars: **eliminating P1 bugs from the ongoing bug-bash** (Gmail OAuth auto-authorization, service unavailability, runaway tasks), **hardening the Reborn testing/CI foundation** (hermetic capability testing epic, mutation/coverage gates, flaky test quarantine), and **advancing the WebUI rewrite** (command palette, streaming fixes, SSO/multi-user E2E coverage). The volume of XL-sized PRs landing or in review signals a codebase preparing for a major capability/quality step-change rather than incremental feature work.

---

## 2. Releases
**No new releases today.**  
The open release PR **#5598** (opened 2026-07-03) proposes breaking changes in `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0) — still awaiting merge.

---

## 3. Project Progress — Merged / Closed PRs Today
| PR | Title | Scope | Outcome |
|----|-------|-------|---------|
| **#6776** | `test(webui): cover tool turns and gates` | WebUI, Reborn, E2E | **Merged** — Adds served Reborn WebUI v2 smoke coverage for tool dispatch, approval gates, auth-gate resume, and run cancellation via real `ironclaw serve`. |
| **#6691** | `Refactor composition assembly into focused builders` | Architecture, Reborn | **Merged** — Reduces `ironclaw_reborn_composition` by **9,421 lines**, splits monoliths into focused builders, moves workflow to contract owners. |
| **#6890** | `Fix Windows clippy for legacy skill backfill imports` | CI, Windows | **Merged** — Gates test-only Unix imports behind `cfg(all(test, unix))`; unblocks Windows CI. |
| **#6348** (issue) | Gmail extension auto-authorized without consent | Security, OAuth | **Closed** — Root cause addressed (likely via approval-gate hydration fixes in #5910/#6850). |
| **#6815** (issue) | Turn-state store latches degraded after flush failure | Reliability, libSQL | **Closed** — Instance recovered after restart; fix likely in write-behind path or health-check. |
| **#6805** (issue) | Instance intermittently returns service_unavailable | Reliability, Railway | **Closed** — ~30 min cycle mitigated; probable connection-pool or scheduler fix. |
| **#6720** (issue) | Task runs indefinitely, stop button fails | UX, Cancellation | **Closed** — Cancellation path hardened (see #6776 coverage). |
| **#4633** (issue) | Cover Reborn tool approval & auth gates end-to-end | Testing, Reborn | **Closed** — Coverage now complete via standalone server path. |
| **#6666** (issue) | Move process journal kernel into `ironclaw_processes` | Architecture | **Closed** — Durable kernel relocated; turns crate now consumes it. |

---

## 4. Community Hot Topics — Most Active Issues / PRs
| Item | Type | Comments | Signal |
|------|------|----------|--------|
| **#5910** `fix: hydrate approval gates on notification open` | PR | High (ongoing since 07-10) | **Core UX fix** — Ensures approval gates are visible immediately on WebUI load; blocks multiple downstream issues (#6348, #6850). |
| **#6745** `fix(reborn): make installed and agent-authored skills selectable, installable, and complete` | PR | High | **Skill system completeness** — Found via self-improvement benchmarks; unblocks agent-authored skill loops. |
| **#6889** `ci: enforce WS11 coverage and critical mutation gates` | PR | High | **Quality ratchet** — Locks in 85.11% aggregate Reborn coverage + 12 new crate floors; prevents regression. |
| **#6891** `feat(webui): role-filtered command palette (PR-2)` | PR | New (today) | **Command-train UX** — Slash commands with policy-gated visibility; part of spec-driven WebUI overhaul. |
| **#6876** `fix(webui): restore smooth streaming and preserve model phases` | PR | High | **Streaming reliability** — Single long-lived SSE subscription eliminates event loss; critical for perceived latency. |
| **#6524** `Epic: Hermetic capability and journey testing platform` | Issue | 4 | **Strategic testing gap** — Aims to mechanically verify every capability/journey has deterministic coverage. |
| **#6887** `ironclaw_reborn_composition test suite intermittently red under parallelism` | Issue | 0 (but high impact) | **Flaky test quarantine** — Timeout-only failures (0/3/5/13 across runs); needs timeout budget or test isolation. |

**Underlying need:** The team is **systematically closing the gap between "works in dev" and "provably correct in production"** — approval gates, skill lifecycle, streaming, test determinism, and CI gates are all being tightened simultaneously.

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR / Notes |
|----------|-------|--------|----------------|
| **P0 (Data loss / Security)** | **#6880** `provider_id="gemini_oauth" 400s on every tool call — tool schemas bypass shape_tool_schema` | **OPEN** | No fix PR yet. Root cause: Gemini OAuth provider skips schema shaping → malformed tool calls. Blocks Gemini CLI OAuth users entirely. |
| **P1 (Availability)** | **#6879** Automation runs hit-or-miss: unattended runs execute as plain interactive chat turns | **OPEN** | No fix PR. Structural pipeline bug: trigger fires map to interactive turns, losing automation context. Affects small models disproportionately. |
| **P1 (Reliability)** | **#6887** `ironclaw_reborn_composition` test suite intermittently red under parallelism (RunTimeout contention) | **OPEN** | No fix PR. Not a code defect — timeout budget too tight for parallel CI. Needs test isolation or timeout tuning. |
| **P1 (Resolved)** | **#6348** Gmail extension auto-authorized without consent | **CLOSED** | Fixed via approval-gate hydration (#5910, #6850). |
| **P1 (Resolved)** | **#6815** Turn-state store latches degraded forever after write-behind flush failure | **CLOSED** | Instance restart recovered; likely fixed in journal/flush path. |
| **P1 (Resolved)** | **#6805** Instance intermittently returns service_unavailable (~every 30 min) | **CLOSED** | Mitigated; probable pool/scheduler fix. |
| **P1 (Resolved)** | **#6720** Task runs indefinitely, stop button fails | **CLOSED** | Cancellation path covered in #6776. |

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Hermetic capability/journey testing platform** | Epic **#6524** | **High** — Active epic with 4 comments; foundational for release confidence. |
| **Dogfooding & QA bug-fix sprint (07/27–07/31)** | Epic **#6892** (created today) | **Immediate** — Week-long focus; will consume team capacity. |
| **Command palette with role-filtered slash commands** | PR **#6891** (PR-2 of command train) | **High** — Spec-driven, stacks on merged PR-1 (#6873). |
| **Multi-tenant signing isolation, trust enrollment, KMS ship-gate** | PR **#6813** (7/8) | **High** — Part of 8-PR signing series; near completion. |
| **Ledger clear-signing product (intent, ceremony, sidecar)** | PR **#6818** (8/8) | **High** — Final group of signing series; hardware-wallet UX. |
| **WebUI design system as `@ironclaw/ui` workspace package** | PR **#6836** | **High** — Supersedes prior attempts; clean re-derivation from main. |
| **Standalone SSO session & multi-user isolation E2E coverage** | PR **#6849** | **Medium** — Hermetic OAuth seam for debug builds only. |
| **Mutation testing & changed-line/branch coverage gates** | PR **#6889** | **High** — CI enforcement; will block merges that drop coverage. |

**Prediction:** The next version (likely `1.0.0-rc.2` or `1.0.0`) will ship with **hardened Reborn core (skills, approvals, streaming), signed intent/custody flows, command-palette UX, and CI-enforced coverage floors** — but **Gemini OAuth tool-calling (#6880) and automation-run context (#6879) may slip** unless hotfixed.

---

## 7. User Feedback Summary — Real Pain Points
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Gmail OAuth auto-authorization without consent** | Issue **#6348** (bug_bash_P1) | **Critical trust violation** — Users saw Gmail connected without prompt. Fixed, but erodes confidence in auth gates. |
| **Service unavailability every ~30 minutes** | Issue **#6805** (bug_bash_P1) | **Production unreliability** — All requests fail; requires manual restart. Closed, but root cause not publicly detailed. |
| **Runaway tasks that cannot be stopped** | Issue **#6720** (bug_bash_P1) | **UX failure** — 15+ min runs; stop button errors. Cancellation now covered in E2E. |
| **Gemini OAuth tool calls fail with 400 on every call** | Issue **#6880** | **Provider unusable** — Blocks Gemini CLI OAuth users; schema shaping bypassed. |
| **Automation runs randomly execute as chat** | Issue **#6879** | **Automation broken** — Same prompt works sometimes; structural pipeline flaw. |
| **Flaky composition tests waste CI time** | Issue **#6887** | **Developer friction** — 0–13 timeout failures per run; not code defects. |

**Overall sentiment:** Users (internal dogfooders + QA) are hitting **sharp edges in auth, reliability, and automation** — but the team is closing them rapidly via the bug-bash. The volume of P1 bugs in one week suggests a **pre-release hardening cycle** rather than chronic instability.

---

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| **#5910** `fix: hydrate approval gates on notification open` | 20 days | **Blocks multiple auth-gate bugs** (#6348, #6850); still open despite high impact. | **Prioritize review/merge** — unblocks WebUI trust. |
| **#5598** `chore: release` (breaking changes in common/skills) | 27 days | **Release blocked** — API breaking changes pending; no release since. | **Cut release** or document migration; unblocks dependents. |
| **#6880** `gemini_oauth` 400 on every tool call | 1 day | **Provider completely broken** — No workaround; affects all Gemini OAuth users. | **Assign owner immediately** — schema shaping bypass is a clear code path. |
| **#6879** Automation runs execute as interactive chat | 1 day | **Automation unreliable** — Structural; not model noise. | **Design review** — Trigger→run pipeline needs automation context propagation. |
| **#6887** Composition tests flaky under parallelism | 1 day | **CI noise** — Wastes compute; masks real failures. | **Quarantine or increase timeout budget**; add `#[serial]` where needed. |
| **#6524** Epic: Hermetic capability/journey testing | 8 days | **Strategic quality gap** — No mechanical answer to "is every journey covered?" | **Break into sized sub-tasks**; assign to testing infra owner. |
| **#6836** WebUI `@ironclaw/ui` workspace refactor | 2 days | **Large refactor** — Supersedes #5563/#6830; touches all WebUI surfaces. | **Ensure design-system review**; coordinate with #6891 (command palette). |

---

### Health Indicators
- **Velocity:** Very high (50 PR updates/24h) — but many XL PRs in flight.
- **Bug backlog:** P1 bugs being closed same-day via bug-bash; **two new P1s opened today (#6880, #6879)**.
- **Test health:** Coverage ratchet rising (#6889); **flakiness acknowledged (#6887)**.
- **Release readiness:** **Blocked by open release PR (#5598) and two P1 bugs (#6880, #6879)**.
- **Architectural clarity:** Strong — composition refactor (#

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-30

## 1. Today's Overview
LobsterAI showed **high maintainer velocity** today with **14 PRs merged/closed** in the last 24 hours, all from core contributors (primarily `liuzhq1986` and `fisherdaddy`). No new issues were filed, and no releases were cut. The merged work clusters around **cowork (collaborative chat) polish**, **auth/login hardening**, **Windows UI fixes**, and a **revert of a safety-gate feature** that blocked release. Two long-running PRs remain open: a Dependabot Electron bump (#1277) and a stale scheduled-task fix (#1232). Overall project health appears **strong—active maintenance, rapid iteration, low community friction**.

## 2. Releases
**No new releases today.** The last release PR (#2407 “Release/2026.7.24”) was merged yesterday; expect the next cut to include today’s batch of fixes.

## 3. Project Progress — Merged/Closed PRs (2026-07-30)

| PR | Area | Summary | Link |
|----|------|---------|------|
| **#2408** | renderer, docs, main | **New feature**: Server-driven native daily check-in in sidebar & account menu; signed-out users get login flow, authenticated users claim credits without token exposure. | [#2408](https://github.com/netease-youdao/LobsterAI/pull/2408) |
| **#2407** | renderer, build, docs, main, openclaw, skills, cowork, windows, artifacts | **Release candidate** for 2026.7.24 (no detailed changelog in PR). | [#2407](https://github.com/netease-youdao/LobsterAI/pull/2407) |
| **#2406** | renderer, docs, cowork | Fix side-chat input: accumulate selected text while panel open; remove product-level question length limit; keep context/transport safety checks. | [#2406](https://github.com/netease-youdao/LobsterAI/pull/2406) |
| **#2405** | renderer, docs, cowork | Show selected text as removable side-chat context tags; support direct send & follow-up edit; add state safeguards, diagnostics, tests. | [#2405](https://github.com/netease-youdao/LobsterAI/pull/2405) |
| **#2376** | renderer, cowork | Mount export modal via body portal to avoid z-index/stacking conflicts with sidebar. | [#2376](https://github.com/netease-youdao/LobsterAI/pull/2376) |
| **#2364** | renderer, main | Prevent scroll jumps on session refresh by scoping refresh events to session ID and preserving message history. | [#2364](https://github.com/netease-youdao/LobsterAI/pull/2364) |
| **#2363** | main | Fix periodic IM message flicker: compare matching history windows during reconciliation; preserve older messages when repairing gateway tail. | [#2363](https://github.com/netease-youdao/LobsterAI/pull/2363) |
| **#2360** | renderer, main | Preserve local OAuth callback server across login retries; reuse active callback for concurrent attempts; add diagnostics & regression tests. | [#2360](https://github.com/netease-youdao/LobsterAI/pull/2360) |
| **#2355** | renderer | Align Windows caption-button hover colors with sidebar controls using theme-aware surface colors. | [#2355](https://github.com/netease-youdao/LobsterAI/pull/2355) |
| **#2347** | renderer | Reduce auto-update check interval from 12 h → 2 h. | [#2347](https://github.com/netease-youdao/LobsterAI/pull/2347) |
| **#2346** | renderer, cowork | Open email diagnostics in a fresh chat to avoid stale history/IM session override. | [#2346](https://github.com/netease-youdao/LobsterAI/pull/2346) |
| **#2404** | renderer, docs, main, openclaw | Refactor Kimi K3 “auto-only” compatibility (details not in summary). | [#2404](https://github.com/netease-youdao/LobsterAI/pull/2404) |
| **#2403** | renderer, build, docs, main, openclaw | **Revert** PR #2400 “Run Safety Contract” gate (receipt identity keying, false-success follow-ups, compaction runId handling, byte-accounting mismatches blocked release). Restore prior behavior; update DeepSeek cache probe spec. | [#2403](https://github.com/netease-youdao/LobsterAI/pull/2403) |
| **#1322** | cowork | True LRU eviction for LLM memory judge cache (was insertion-order only); cache hits now move entries to MRU position. | [#1322](https://github.com/netease-youdao/LobsterAI/pull/1322) |

**Net takeaway**: The team shipped a **user-facing retention feature (daily check-in)**, hardened **cowork UX** (selection tags, scroll, flicker, export modal), fixed **auth reliability**, improved **Windows visual consistency**, and **reverted a pre-release blocker**—all in one day.

## 4. Community Hot Topics
| Item | Signal | Analysis |
|------|--------|----------|
| **#2408 Daily check-in** (0 comments, 0 👍) | New feature merged same-day | Internal priority—likely tied to credit-system engagement. No community discussion yet; watch for telemetry follow-up. |
| **#2403 Revert Run Safety** (0 comments) | Silent revert of a release blocker | Indicates rigorous pre-merge review caught critical flaws. Community unaware; transparency in release notes recommended. |
| **#1277 Electron 40→43 bump** (open, 0 comments) | Stale Dependabot PR (since Apr) | Major version jump (Electron 40→43) may need native-module rebuilds. Blocker for security/perf updates. |
| **#1232 Scheduled-task first-run UI push** (open, stale, 0 comments) | Core bug: first cron run silent | Affects automation reliability. Stale label suggests triage debt. |

**Underlying needs**: Faster dependency upgrades, automation reliability, and clearer communication on reverted features.

## 5. Bugs & Stability — Today’s Landscape
| Severity | Bug / Regression | Fix PR | Status |
|----------|------------------|--------|--------|
| **High** | First scheduled-task run doesn’t push `runUpdate` to UI | [#1232](https://github.com/netease-youdao/LobsterAI/pull/1232) | **Open (stale)** — needs review |
| **Medium** | Scroll jumps on cowork session refresh | [#2364](https://github.com/netease-youdao/LobsterAI/pull/2364) | ✅ Merged |
| **Medium** | Periodic IM message flicker | [#2363](https://github.com/netease-youdao/LobsterAI/pull/2363) | ✅ Merged |
| **Medium** | Login callback lost on retry/concurrent attempts | [#2360](https://github.com/netease-youdao/LobsterAI/pull/2360) | ✅ Merged |
| **Low** | Export modal z-index under sidebar | [#2376](https://github.com/netease-youdao/LobsterAI/pull/2376) | ✅ Merged |
| **Low** | Windows caption hover color mismatch | [#2355](https://github.com/netease-youdao/LobsterAI/pull/2355) | ✅ Merged |
| **Low** | Email diagnostics opens in stale chat | [#2346](https://github.com/netease-youdao/LobsterAI/pull/2346) | ✅ Merged |

**No new crash reports or regressions filed today.**

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| Daily check-in / credit rewards | [#2408](https://github.com/netease-youdao/LobsterAI/pull/2408) (merged) | ✅ **Shipped** |
| Selected-text context tags in side chat | [#2405](https://github.com/netease-youdao/LobsterAI/pull/2405) (merged) | ✅ **Shipped** |
| Electron 43 upgrade | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (open) | ⚠️ **Blocked on CI/native deps** |
| True LRU cache for LLM memory judge | [#1322](https://github.com/netease-youdao/LobsterAI/pull/1322) (merged) | ✅ **Shipped** |
| Kimi K3 auto-only compat | [#2404](https://github.com/netease-youdao/LobsterAI/pull/2404) (merged) | ✅ **Shipped** |

**Prediction**: Next version will be a **stability/quality drop** (v2026.7.30+) bundling today’s fixes. Electron 43 upgrade is the only major pending tech-debt item.

## 7. User Feedback Summary
- **No new issues/PR comments** in last 24 h → community quiet or using other channels.
- **Implicit pain points** (from fixed bugs):  
  - “My first scheduled task never shows up in UI” (#1232)  
  - “Sidebar flickers when IM refreshes” (#2363)  
  - “Login breaks if I retry too fast” (#2360)  
  - “Export modal hides behind sidebar” (#2376)  
- **Satisfaction signals**: Rapid fix turnaround (most bugs PR’d & merged within days) suggests responsive maintainers.

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| **[#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Electron 40→43** | 120 days | Security fixes, perf, Wayland improvements; blocks future upgrades | Assign owner; run full CI matrix; plan native-module rebuild |
| **[#1232](https://github.com/netease-youdao/LobsterAI/pull/1232) Scheduled-task first-run silent** | 120 days | Core automation broken for new tasks; stale label hides it | Remove stale label; review & merge (small, tested fix) |
| **[#2403](https://github.com/netease-youdao/LobsterAI/pull/2403) Run Safety revert** | 1 day | Feature reverted silently; users may expect it | Add release-note entry explaining removal & timeline for rework |

---

**Bottom line**: LobsterAI is in a **high-velocity polishing phase**—core maintainers are crushing UI/UX bugs, shipping a retention feature, and keeping the release train moving. The only drag is **two stale but important PRs** (Electron upgrade, scheduled-task fix) that deserve triage before they rot further.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-30

## 1. Today's Overview
Moltis shows **focused engineering velocity** with 5 pull requests updated in the last 24 hours, all authored by core maintainer `penso`. Two PRs were merged (#1169, #1173) delivering ACP agent exposure and hardened PWA push notifications, while three substantial open PRs (#1166, #1170, #1174) advance Slack acknowledgment lifecycle, privilege gating, and observability infrastructure. No new issues or releases appeared today, indicating a **maintenance-and-hardening phase** rather than exploratory feature work. The project remains healthy with consistent, high-quality contributions from the core team.

## 2. Releases
**No new releases published today.** The latest version remains unchanged; all current work is in-flight on `main` via the PRs below.

## 3. Project Progress — Merged / Closed PRs

| PR | Title | Summary | Impact |
|----|-------|---------|--------|
| [#1169](https://github.com/moltis-org/moltis/pull/1169) | **feat(acp): expose Moltis as an ACP agent over stdio** | Implements `moltis acp` command (enabled by default), routing prompts through the cancellable `LiveChatService` with session isolation, bounded resources, and deterministic final-text reconciliation. | **Major integration milestone** — Moltis can now be consumed as a standard ACP agent by any compatible client (e.g., Claude Code, custom orchestrators). |
| [#1173](https://github.com/moltis-org/moltis/pull/1173) | **feat(pwa): make push notifications reliable and non-disruptive** | Re-architected push delivery: de-duplication per chat, privacy-safe generic titles, rich-text stripping, cross-tab unread badge sync, ordered delivery. | **User-experience hardening** — Eliminates notification spam, privacy leaks, and missed-message scenarios on mobile/desktop PWAs. |

## 4. Community Hot Topics — Active PRs (All by `penso`)

| PR | Activity | Core Need / Signal |
|----|----------|-------------------|
| [#1166](https://github.com/moltis-org/moltis/pull/1166) | Updated 2026-07-30, 0 comments, 0 👍 | **Slack UX parity** — Since Slack lacks typing indicators, per-message reaction phases (received → thinking → tool use → done) with reconnect supervision and Block Kit rendering are critical for user trust in async agent runs. |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | Updated 2026-07-30, 0 comments, 0 👍 | **Security boundary hardening** — Separates *channel access* (allowlist) from *privilege* (operators list) for `/sh` and host tools, enforced across commands, callbacks, queue replay, and external triggers. Addresses privilege-escalation risk in multi-tenant deployments. |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | Updated 2026-07-30, 0 comments, 0 👍 | **Observability & feedback loop** — Backend-neutral instrumentation, Langfuse v4 export, OTLP backends, immutable turn/observation records, cache-aware token accounting, reasoning traces, and end-user reaction feedback. Foundational for production monitoring and RLHF-style improvement. |

> **Note:** All three open PRs are large, cross-cutting refactors with zero external discussion — typical for internal core-team work. No community issues or external PRs surfaced today.

## 5. Bugs & Stability
**No bug reports, crashes, or regressions filed in the last 24 hours.** The two merged PRs (#1169, #1173) explicitly address reliability gaps (ACP session bounds, notification ordering/duplication), suggesting proactive stability investment.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **ACP agent mode** | Merged #1169 | ✅ **Already landed** — will ship in next cut. |
| **Reliable PWA push** | Merged #1173 | ✅ **Already landed** — will ship in next cut. |
| **Slack reaction-phase lifecycle** | Open #1166 | 🔜 **High** — builds on recently merged #1165; near completion. |
| **Per-account operator privilege model** | Open #1170 | 🔜 **High** — security hardening, likely blocked only by review. |
| **Full instrumentation + Langfuse v4 + user feedback** | Open #1174 | 🔜 **Medium-High** — large scope; may land in parts or behind feature flag. |

**Prediction:** Next release will be a **“hardening & integrations”** drop: ACP, PWA push fixes, Slack reaction phases, operator gating. Instrumentation may follow in a subsequent minor.

## 7. User Feedback Summary
**No direct user feedback (issues, comments, reactions) captured in the last 24h.** All activity is internal. The merged PRs imply known pain points:
- **ACP absence** blocked adoption in ACP-centric workflows (Claude Code, etc.).
- **PWA push unreliability** caused missed messages, duplicate alerts, and privacy concerns.
- **Slack “black box” feel** during long agent runs eroded trust — reaction phases mitigate this.

## 8. Backlog Watch
| Item | Status | Age | Why It Matters |
|------|--------|-----|----------------|
| **No stale issues/PRs** in provided data | — | — | All 5 PRs updated today; no long-unanswered items visible. |

> **Recommendation:** The maintainer (`penso`) is moving fast on three large open PRs. Consider assigning a second reviewer or splitting #1174 (instrumentation) into smaller, independently mergable chunks to reduce integration risk and accelerate feedback.

---

*Data sourced from GitHub API for `moltis-org/moltis` on 2026-07-30. All links point to live PRs.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-07-30

## 1. Today's Overview

CoPaw shows **very high development velocity** with 48 PRs updated and 15 issues touched in the last 24 hours. The project is in active stabilization mode: 13 PRs were merged/closed today, addressing critical bugs in MCP tool naming, shell command execution, context compression, and CI pipeline failures. No new release was cut, but the volume of fixes suggests a patch release (v2.0.2) is imminent. Community engagement is strong—multiple first-time contributors landed fixes, and several UX-enhancement issues attracted detailed discussion.

---

## 2. Releases

**No new releases today.** Current stable remains **v2.0.1**. Given the density of merged fixes (see §3), expect a v2.0.2 patch within days.

---

## 3. Project Progress — Merged / Closed PRs Today

| PR | Title | Type | Linked Issue |
|----|-------|------|--------------|
| [#6535](https://github.com/agentscope-ai/QwenPaw/pull/6535) | `fix(cloudpaw): accept mission verification kwargs` | Bug fix | [#6533](https://github.com/agentscope-ai/QwenPaw/issues/6533) |
| [#6500](https://github.com/agentscope-ai/QwenPaw/pull/6500) | `fix(browser): make unauthenticated local CDP exposure opt-in` | Security hardening | — |
| [#6553](https://github.com/agentscope-ai/QwenPaw/pull/6553) | `feat: redesign app center` | Feature | — |
| [#6479](https://github.com/agentscope-ai/QwenPaw/pull/6479) | `fix(providers): sync MiniMax model baseline` | Maintenance | — |
| [#6298](https://github.com/agentscope-ai/QwenPaw/pull/6298) | `pref(sandbox): speed up windows sandbox cleanup` | Perf | — |
| [#5931](https://github.com/agentscope-ai/QwenPaw/pull/5931) | `feat(sandbox): add restricted token based windows sandbox` | Feature | — |
| [#5525](https://github.com/agentscope-ai/QwenPaw/pull/5525) | `feat(sandbox): implement windows native sandbox` | Feature | — |
| [#6269](https://github.com/agentscope-ai/QwenPaw/pull/6269) | `feat(checkpoints): add workspace checkpoint management` | Feature | — |

**Highlights**  
- **Sandbox stack matured**: Three Windows sandbox PRs (#5525, #5931, #6298) merged together, delivering restricted-token isolation, dedicated user accounts, and faster cleanup.  
- **App Center redesign** (#6553) splits into My Apps / Official / Market tabs with lazy loading.  
- **Mission-mode TypeError** fixed (#6535) by aligning monkey-patched signature with upstream.  
- **CDP security** hardened (#6500): unauthenticated DevTools port now opt-in only.

---

## 4. Community Hot Topics

| Item | Activity | Core Need |
|------|----------|-----------|
| [#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) **CI bug: `real-behavior-proof.yml` blocks all fork PRs** | 3 comments, updated today | **Critical infra**: Every external PR fails CI with `HttpError: Resource not accessible by integration`. Blocks all community contributions. |
| [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) **Edge + Wayland: single-tab high CPU on large sessions** | 4 comments, 👍0 | **Perf/UX**: Rendering/WebSocket push causes runaway CPU in Chromium on Wayland; affects remote ComfyUI workflow users. |
| [#6560](https://github.com/agentscope-ai/QwenPaw/issues/6560) **Chat session UX improvements (copy, undo, stop, mission, scroll, session ID, context transfer)** | 1 comment, updated today | **Core UX gap**: Missing copy, ESC-to-stop, undo, mission-mode in Code, scroll perf, session ID visibility, context handoff. |
| [#6558](https://github.com/agentscope-ai/QwenPaw/issues/6558) **Multiple chat session UI data integrity issues** | 1 comment, updated today | **Reliability**: Messages lost on mode/session switch, replies re-render from scratch, instructions drift. |
| [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) **Global hotkey floating input (Doubao/Raycast style)** | 1 comment, created today | **Discoverability**: Lightweight global-summon input box to lower friction for quick questions. |

**Pattern**: Contributors are hitting **daily-driver friction** (CI, CPU, copy/stop/undo, session integrity) and **missing power-user affordances** (global hotkey, mission mode, context transfer). The CI blocker (#6563) is the single highest-leverage fix for community health.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) CI blocks **all fork PRs** | Open | — |
| **High** | [#6541](https://github.com/agentscope-ai/QwenPaw/issues/6541) Scroll compression injects `[context compressed]` as `role=user` → DeepSeek 400 | Open | — |
| **High** | [#6557](https://github.com/agentscope-ai/QwenPaw/issues/6557) MCP tool names starting with `-` violate OpenAI spec → Kimi 400 | Open | [#6561](https://github.com/agentscope-ai/QwenPaw/pull/6561) (open) |
| **High** | [#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565) `execute_shell_command`: newlines→spaces breaks multi-line; PIPE hang on Linux bg procs | Open | [#6566](https://github.com/agentscope-ai/QwenPaw/pull/6566) (open) |
| **High** | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) MCP client doesn't auto-reconnect after server restart (stale session-id) | Open | — |
| **Medium** | [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) Edge/Wayland high CPU on large result sets | Open | — |
| **Medium** | [#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555) Dream/memory compression loses early-session events scrolled out before daily MD | Open | [#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) (open) |
| **Medium** | [#6558](https://github.com/agentscope-ai/QwenPaw/issues/6558) Session switch loses messages, re-renders replies, drifts instructions | Open | — |
| **Medium** | [#6533](https://github.com/agentscope-ai/QwenPaw/issues/6533) `/mission` TypeError: `verification_instructions` kwarg missing | **Closed** | [#6535](https://github.com/agentscope-ai/QwenPaw/pull/6535) ✅ merged |
| **Low** | [#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464) Model connection test fails, dropdown empty (Platform deploy) | **Closed** | — |

**Note**: 4 high-severity bugs have open fix PRs (#6561, #6566, #6564, plus #6535 already merged). The CI blocker (#6563) has no PR yet—**top priority for maintainers**.

---

## 6. Feature Requests & Roadmap Signals

| Request | Signals | Likelihood for Next Version |
|---------|---------|----------------------------|
| **Global hotkey floating input** ([#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568)) | Detailed spec, references Tauri `globalShortcut`, Doubao/Raycast UX | Medium — requires Tauri main-process work; may slip to v2.1 |
| **Session fork tree view & context handoff** ([#6559](https://github.com/agentscope-ai/QwenPaw/issues/6559)) | Strong pain: list flooded with auto-forks, no grouping, no context transfer | High — aligns with checkpoint work (#6269 merged) |
| **Copy / ESC-stop / Undo / Mission in Code / Scroll perf / Session ID / Context transfer** ([#6560](https://github.com/agentscope-ai/QwenPaw/issues/6560)) | 8 discrete UX gaps, all daily-driver | High — several are small frontend fixes |
| **Preserve original CJK filenames in upload hints** ([#6453](https://github.com/agentscope-ai/QwenPaw/issues/6453)) | Windows user, concrete example | **Very High** — [#6567](https://github.com/agentscope-ai/QwenPaw/pull/6567) & [#6492](https://github.com/agentscope-ai/QwenPaw/pull/6492) open |
| **Workspace checkpoint management** | Already merged (#6269) | **Done** — in next release |
| **Native desktop GUI automation (computer_use tool)** ([#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424)) | Large PR, Windows+macOS accessibility + Tauri control | Medium — under review, flagship feature |

**Prediction**: v2.0.2 will ship the merged sandbox/checkpoints/App Center work plus the CJK filename fix and MCP tool-name sanitizer. v2.1 will likely include session tree UI, global hotkey, and computer-use tool.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Affected Segment |
|------------|----------|------------------|
| **Cannot contribute** — CI fails on every fork PR | [#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) "blocks **all** contributors" | External contributors |
| **Unusable on Edge/Wayland** — tab CPU runaway | [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) "fan spins, only on QwenPaw pages" | Linux/Edge users with large sessions |
| **Basic editing missing** — no copy, no ESC-stop, no undo | [#6560](https://github.com/agentscope-ai/QwenPaw/issues/6560) "affects daily use efficiency" | All desktop/web users |
| **Session chaos** — auto-forks flood list, no tree, no context transfer | [#6559](https://github.com/agentscope-ai/QwenPaw/issues/6559) "drowned in meaningless forks" | Power users, multi-taskers |
| **Data loss on switch** — messages vanish, replies re-stream, instructions mutate | [#6558](https://github.com/agentscope-ai/QwenPaw/issues/6558) "last message lost, re-renders from zero" | Multi-session users |
| **MCP breaks on server restart** — stale session-id, manual `list mcp` needed | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) "session invalid, still reuses old id" | MCP/remote-tool users |
| **Chinese filenames garbled** in upload hint | [#6453](https://github.com/agentscope-ai/QwenPaw/issues/6453) "unrecognizable, too long" | Windows/CJK users |

**Sentiment**: Frustration with **paper-cut UX bugs** (copy, stop, undo, filenames) and **architectural leaks** (session integrity, MCP reconnect, CI). Users are knowledgeable (detailed repro steps, root-cause analysis) and willing to contribute—if CI unblocks them.

---

## 8. Backlog Watch — Stale / High-Impact Items Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) **CI blocks all fork PRs** | 1 day (created today) | **Zero-day for community**: every external PR red. Must fix workflow permissions or secrets access. |
| [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) **computer_use native automation** | 6 days (open, "ready-for-human-review") | Flagship differentiator; large PR needs maintainer review bandwidth. |
| [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) **MCP auto-reconnect after server restart** | 2 days | Remote MCP workflows brittle; no PR yet. |
| [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) **Edge/Wayland high CPU** | 5 days | Platform-specific perf regression; needs Chromium/Wayland expertise. |
| [#6558](https://github.com/agentscope-ai/QwenPaw/issues/6558) **Session data integrity (3 bugs)** | 1 day | Core reliability; may need state-management refactor. |
| [#6540](https://github.com/agentscope-ai/QwenPaw/pull/6540) **Tool-message sanitizer before every model call** | 1 day (open) | Prevents orphan `tool_result` leakage; defensive fix for compression edge cases. |
| [#6539](https://github.com/agentscope-ai/QwenPaw/pull/6539) **UnifiedQueue race condition** | 1 day (open) | Fixes #6372; queue-state recreation vs. stale consumer cleanup. |

---

**Bottom line**: CoPaw is shipping fast but accumulating **user-facing rough edges** faster than they're polished. The CI blocker (#6563) is the single most impactful fix to unblock community momentum. A v2.0.2 patch with the 8 merged PRs + the 4 open high-severity fix PRs would dramatically improve stability.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-30

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 62 total updates (12 issues, 50 PRs) in the last 24 hours. The project is actively progressing on multiple architectural fronts: security/credential abstraction (KeySource trait), inter-agent communication (A2A outbound client), gateway compatibility (OpenAI chat completions), and SOP (Standard Operating Procedure) control plane maturation. No new releases were cut today, but two release trackers (v0.8.4 maintenance train targeting July 31, and v0.8.5 weekly) indicate imminent patch releases. The 7 merged/closed PRs today include security hardening for AI PR reviews, SOP ingress centralization, and a critical Telegram long-poll fix — signaling a focus on stability and operational hardening alongside feature work.

---

## 2. Releases

**No new releases published today.**  
Two active release trackers signal near-term cuts:
- **v0.8.4 maintenance train** (#8357) — feature-frozen, target date **July 31, 2026** (tomorrow)
- **v0.8.5 weekly non-breaking release** (#9459) — weekly cadence, snapshot dated 2026-07-30

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#9542](https://github.com/zeroclaw-labs/zeroclaw/pull/9542) | `docs(security): document untrusted review input` | Security docs | Hardens AI PR-review skills against prompt injection from GitHub content (closes #9508) |
| [#9205](https://github.com/zeroclaw-labs/zeroclaw/pull/9205) | `feat(sop): centralize fan-in ingress adapters` | Architecture | Shared `SopIngress` adapter eliminates per-source conversion duplication, adds payload capping & diagnostics (closes #8581) |
| [#9314](https://github.com/zeroclaw-labs/zeroclaw/pull/9314) | `fix(telegram): advance long-poll offset only after delivery or permanent skip` | Bug fix (P1) | Prevents message loss on transient failures (voice/attachment download, transcription) in Telegram long-poll |
| [#9373](https://github.com/zeroclaw-labs/zeroclaw/issues/9373) | Peer-agent delivery missing cost-tracking context | Bug (P1, closed) | Cost tracking & budget enforcement now active for inter-agent turns |
| [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) | Telegram documentation wrong | Bug fix (docs) | Corrected Telegram channel examples |
| [#9508](https://github.com/zeroclaw-labs/zeroclaw/issues/9508) | Harden AI PR-review against prompt injection | Enhancement (closed) | Addressed via #9542 |
| [#8581](https://github.com/zeroclaw-labs/zeroclaw/issues/8581) | Centralize SOP ingress adapters | Enhancement (closed) | Addressed via #9205 |

**Key advances:** SOP control plane consolidation (toward 5/5 milestone #8288), security posture for AI-assisted workflows, and Telegram reliability.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Signals |
|------|----------|---------|
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) **RFC: Abstract `KeySource` trait** | 9 | **High-priority security architecture** — classifying master-key material by source/deployment form (File, KMS, HSM, etc.). 93 `#[secret]` fields, 59 credential classes. PR [#9194](https://github.com/zeroclaw-labs/zeroclaw/pull/9194) implements trait + `FileKeySource`. |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) **RFC: A2A outbound client (A2ATool)** | 6 | **Inter-agent collaboration unblocked** — agents can proactively call external A2A-compliant agents. Complements shipped A2AServer (v0.8.2). |
| [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) **OpenAI-compatible chat completions endpoint** | 5 | **Ecosystem compatibility** — enables Open WebUI, LobeChat, LangChain, Continue.dev, Aider to connect natively. PR [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) (XL, open). |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) **RFC: Separate authoritative memory storage from enrichment connectors** | 5 | **Memory architecture decoupling** — Lucid connector shouldn't be a full backend; enables pluggable enrichment without losing authoritative store. |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) **OpenAI chat completions endpoint (PR)** | (XL, open) | 12+ linked issues; gateway team actively reviewing. |

**Underlying needs:** Operators want **standard protocol interoperability** (OpenAI, A2A), **pluggable security backends** (KeySource), and **clean memory/connector separation** — all signals of production hardening and ecosystem integration.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue/PR | Status | Fix PR |
|----------|----------|--------|--------|
| **P1 / High** | [#9373](https://github.com/zeroclaw-labs/zeroclaw/issues/9373) Peer-agent delivery runs without cost-tracking context → budgets unenforced | **Closed** | Implicit in recent runtime merges |
| **P1 / High** | [#9314](https://github.com/zeroclaw-labs/zeroclaw/pull/9314) Telegram long-poll advances offset before delivery → message loss on transient failure | **Open (needs-author-action)** | #9314 (fix ready) |
| **P1 / High** | [#9208](https://github.com/zeroclaw-labs/zeroclaw/pull/9208) Per-iteration tool-schema deep clones in agent loop (perf regression) | **Open (needs-author-action)** | #9208 (fix ready, XL) |
| **P1 / High** | [#9423](https://github.com/zeroclaw-labs/zeroclaw/pull/9423) Unanswerable approval reported as user denial (all non-interactive channels) | **Open (needs-author-action)** | #9423 (fix ready, XL) |
| **P2 / High** | [#9497](https://github.com/zeroclaw-labs/zeroclaw/pull/9497) Windows verbatim prefix (`\\?\`) breaks external `grep` | **Open (needs-author-action)** | #9497 (fix ready, S) — CI validation in #9551 |
| **P2 / High** | [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) Bedrock Nova 2 fails with prompt caching (400: extraneous `cachePoint`) | **Open (needs-author-action)** | #8943 (fix ready, XS) |
| **P2 / High** | [#9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477) Tool-call parser fails on `<tools>` wrapper (Qwen2.5-Coder-32B) | **Open (needs-author-action)** | #9477 (fix ready, S) |
| **P2 / High** | [#9544](https://github.com/zeroclaw-labs/zeroclaw/pull/9544) Delegated targets ignore configured provider fallbacks | **Open (needs-author-action)** | #9544 (fix ready, S) |

**Stability note:** 8 high-severity bugs have fixes authored and awaiting review — maintainer bandwidth is the bottleneck.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for v0.8.4/v0.8.5 |
|---------|--------|------------------------------|
| **OpenAI Chat Completions endpoint** | #8550, #8486 | **High** — XL PR, multiple linked issues, gateway priority |
| **A2A Outbound Client (A2ATool)** | #9106 | **Medium** — RFC stage, depends on A2AServer foundation (shipped) |
| **KeySource Trait + FileKeySource** | #9127, #9194 | **High** — PR #9194 open, security-critical, 93 secret fields affected |
| **Memory/Enrichment Connector Separation** | #9103 | **Medium** — RFC, architectural refactor, not yet implemented |
| **Goal Controller & Verifier** | #8687, #8689 | **Medium** — XL PRs, channel `/goal` admission, runtime cost attribution |
| **SOP Daemon-Owned Control Plane (5/5)** | #8288, #9205, #9203 | **High** — tracker at 4/5?, #9205 merged, #9203 (auth HTTP fan-in) open |
| **Compact Skill Injection Default** | #8313 | **Medium** — deprecation path, reduces prompt bloat |
| **Operator UX Onboarding/Pairing/Self-Service** | #9009 | **Low-Medium** — tracker only, milestone coordination |

**Prediction:** v0.8.4 (July 31) will likely include KeySource trait, SOP ingress centralization, Telegram fix, and Windows grep fix. v0.8.5 will target OpenAI endpoint, A2ATool, and goal controller.

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence |
|------------------------|----------|
| **Cannot connect standard LLM clients (Open WebUI, LobeChat, Continue.dev)** | #8550: "Standard OpenAI-compatible clients cannot connect without building custom adapters" |
| **Inter-agent collaboration forced through chat** | #9106: "Today a ZeroClaw agent cannot proactively call an external A2A-compliant agent" |
| **Windows path handling breaks tooling** | #9497: `\\?\` prefix from `canonicalize()` misparsed by Git-for-Windows `grep.exe` |
| **Telegram message loss on transient failures** | #9314: offset advanced before voice download/transcription/enqueue |
| **AI PR reviewer vulnerable to prompt injection from GitHub content** | #9508: titles, bodies, comments, branch names treated as instructions |
| **SOP webhook auth missing** | #9203: authenticated `POST /sop/{*rest}` fan-in being wired |
| **Tool schema deep-clone perf hit in agent loop** | #9208: registry wrappers don't forward `spec()`, causing rebuild each iteration |
| **Approval gate misreports unanswerable as denial** | #9423: non-interactive runs deny on runtime authority, confusing operators |

**Satisfaction signals:** Active RFC engagement (9+ comments on KeySource), rapid fix turnaround (P1 bugs have PRs within days), and detailed tracker issues suggest **invested operator community** pushing for production readiness.

---

## 8. Backlog Watch (Needs Maintainer Attention)

| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) OpenAI Chat Completions endpoint | 31 days | High | XL PR, blocks ecosystem adoption, 12+ linked issues |
| [#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687) Goal controller & verifier | 26 days | High | XL PR, runtime cost attribution, trusted goal turns |
| [#8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689) Channel `/goal` admission | 26 days | High | XL PR, 8 channel types, control-plane admission |
| [#9194](https://github.com/zeroclaw-labs/zeroclaw/pull/9194) KeySource trait + FileKeySource | 10 days | High | Security foundation, 93 secrets, RFC #9127 (9 comments) |
| [#9208](https://github.com/zeroclaw-labs/zeroclaw/pull/9208) Stop per-iteration tool-schema deep clones | 10 days | High | Perf regression, affects all providers/tools, XL |
| [#9423](https://github.com/zeroclaw-labs/zeroclaw/pull/9423) Fix approval gate misreporting | 3 days | High | UX correctness for non-interactive runs, XL |
| [#9075](https://github.com/zeroclaw-labs/zeroclaw/pull/9075) Persist model catalog to cache on refresh | 16 days | Medium | `zeroclaw models refresh` fetches but doesn't persist — dead loop for operators |
| [#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313) Compact skill injection default | 35 days | Medium | Deprecation window, reduces prompt bloat, M-sized |

**Maintainer load:** 8 high-risk PRs ≥XL or security-critical awaiting review. The v0.8.4 freeze (tomorrow) will force triage decisions.

---

*Digest generated from GitHub API data for zeroclaw-labs/zeroclaw as of 2026-07-30. All links point to live GitHub items.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*