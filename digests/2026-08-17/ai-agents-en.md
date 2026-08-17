# OpenClaw Ecosystem Digest 2026-08-17

> Issues: 134 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-17 01:45 UTC

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

# OpenClaw Project Digest — 2026-08-17

---

## 1. Today's Overview

OpenClaw shows **high velocity but significant technical debt pressure** on 2026-08-17. With 500 PRs and 134 issues updated in 24 hours, the project is extremely active, yet the open/merged ratio (383 open vs 117 closed PRs; 118 open vs 16 closed issues) signals a growing backlog. Critical P1 bugs dominate the issue landscape — particularly around **session/message loss**, **gateway restart loops**, **auto-update failures**, and **channel delivery regressions**. A single profiling release (`pr-124528-profiles`) was published, focused on gateway event-loop hotspot analysis. The maintainer queue appears saturated: many PRs sit in "waiting on author" or "ready for maintainer look" states, while high-severity issues carry `clawsweeper-recovery-stuck` and `clawsweeper:needs-maintainer-review` tags.

---

## 2. Releases

### `pr-124528-profiles` — Gateway CPU Profiles for PR #124528
- **Type**: Profiling artifact / evidence package
- **Contents**: Before/after CPU profiles from a bounded 3-node, 12-concurrent-turn gateway rig
- **Purpose**: Event-loop hotspot comparison for PR #124528 (not detailed in data)
- **Breaking changes**: None (diagnostic artifact only)
- **Migration notes**: N/A
- **Link**: [PR #124528](https://github.com/openclaw/openclaw/pull/124528)

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary | Status |
|----|------|---------|--------|
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | UI/Security | Control UI: review install-policy warnings with explicit acknowledgement | **Closed** (merged) |
| [#124913](https://github.com/openclaw/openclaw/pull/124913) | Agents/TTS | Add structured reply speech fields for `[[tts]]` directives | **Closed** |
| [#115152](https://github.com/openclaw/openclaw/pull/115152) | Config/Bug | Fix regression: `bootstrapMaxChars`/`bootstrapTotalMaxChars` deleted on restart | **Closed** |

**Net progress**: Only 3 PRs closed/merged today despite 117 total closed PRs in the window — most closures appear to be older items. Active development focuses on **session permission modes** (#124909), **gateway polling stalls** (#124891), **update duplicate prevention** (#124659), **memory-core supplement preservation** (#78035), and **agent provenance tracking** (#124963).

---

## 4. Community Hot Topics (Most Commented/Reacted)

| Item | Comments | 👍 | Core Issue | Underlying Need |
|------|----------|-----|------------|-----------------|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 31 | 2 | **Subagent completion silently lost** — no retry, notification, or auto-restart on timeout | **Reliable subagent orchestration**; operators lose work silently |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | 9 | 0 | **SQLite unbounded growth** — `memory_index_chunks` + `memory_embedding_cache` have no retention | **Operational sustainability**; disk fill risk in production |
| [#85844](https://github.com/openclaw/openclaw/issues/85844) | 8 | 1 | **Auto-update leaves stale hashed bundle imports** in running gateway | **Zero-downtime updates**; hot-reload reliability |
| [#123073](https://github.com/openclaw/openclaw/issues/123073) | 8 | 0 | **Dev-channel update fails** — updater uses npm, repo requires pnpm (`workspace:*` protocol) | **Developer experience**; channel parity |
| [#46786](https://github.com/openclaw/openclaw/issues/46786) | 8 | 1 | **`tools.elevated.enabled: true` breaks exec routing** — all exec calls route to gateway host | **Security boundary integrity**; sandbox bypass |
| [#124909](https://github.com/openclaw/openclaw/pull/124909) | — | — | **Session permission modes with worktree-scoped defaults** (XL PR) | **Granular agent permissions**; per-session security posture |

**Pattern**: Top issues cluster around **data/message loss**, **update/reliability**, and **security boundaries** — all P1/P0 with 🦞 "diamond lobster" severity rating.

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 P0 / Critical (Crash Loops, Data Loss)
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#87928](https://github.com/openclaw/openclaw/issues/87928) | macOS update → manual-update loop + stale node host → Gateway restart storm (~75s cycle) | No |
| [#111372](https://github.com/openclaw/openclaw/issues/111372) | Gateway infinite SIGTERM restart loop on macOS (3-6s cycle) after 2026.7.1-2 | No |
| [#99659](https://github.com/openclaw/openclaw/issues/99659) | OOM kill after companion app connects — memory spike unexplained | No |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost (multiple failure modes: timeout, announce fail, no retry) | No |

### 🟠 P1 / High (Message Loss, Session Corruption)
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#85844](https://github.com/openclaw/openclaw/issues/85844) | Auto-update leaves stale hashed bundle imports in running gateway | No |
| [#108865](https://github.com/openclaw/openclaw/issues/108865) | Feishu/other channels drop inbound messages when session archived — no auto-restore | No |
| [#101814](https://github.com/openclaw/openclaw/issues/101814) | All channels broken after 2026.6.11 — one message/session then permanent silence | No |
| [#124345](https://github.com/openclaw/openclaw/issues/124345) | Setup inference probe 32-token cap starves reasoning models → false "broken" reports | [#124947](https://github.com/openclaw/openclaw/pull/124947) |
| [#122615](https://github.com/openclaw/openclaw/issues/122615) | Subagent announce delivery drops failure reason for dropped vs none outcomes | No |
| [#124822](https://github.com/openclaw/openclaw/issues/124822) | Plugin `runtime.llm.complete` fails on multi-agent — `resolveModelWorkspaceDir` drops agentId | No |

### 🟡 P2 / Medium (UX Friction, Channel Bugs)
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | SQLite unbounded growth (memory tables no retention) | No |
| [#123073](https://github.com/openclaw/openclaw/issues/123073) | Dev-channel update fails (npm vs pnpm `workspace:*`) | No |
| [#46786](https://github.com/openclaw/openclaw/issues/46786) | `tools.elevated.enabled: true` routes ALL exec to gateway host | No |
| [#88079](https://github.com/openclaw/openclaw/issues/88079) | WebChat: reasoning_content not streamed for Kimi/DeepSeek (only MiniMax works) | No |
| [#96534](https://github.com/openclaw/openclaw/issues/96534) | `memory_search` latches fallback embedding model after outage — only full restart recovers | No |
| [#124296](https://github.com/openclaw/openclaw/issues/124296) | Node-routed browser tool always fails — browser-control relay never binds on gateway.port+2 | No |
| [#124527](https://github.com/openclaw/openclaw/issues/124527) | Telegram image understanding fails with xAI "Unknown model" | No |
| [#123354](https://github.com/openclaw/openclaw/issues/123354) | Matrix E2EE stops decrypting after Megolm rotation | No |

**Fix PR coverage**: Only 2 of 18+ critical/high bugs have active fix PRs (#124947 for inference probe, #124909 for permissions). Most carry `clawsweeper:no-new-fix-pr`.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signals | Likelihood for Next Version |
|---------|-------|---------|----------------------------|
| **Session permission modes** (worktree-scoped) | [#124909](https://github.com/openclaw/openclaw/pull/124909) | XL PR, maintainer-authored, security-boundary risk tagged | **High** — active PR, architectural priority |
| **Skill lifecycle management** (auto-optimize + retirement) | [#95516](https://github.com/openclaw/openclaw/issues/95516) | 5 comments, 2👍, P3 but strategic | Medium — needs design |
| **Main-session agent-wide visibility + groupScope routing** | [#124965](https://github.com/openclaw/openclaw/pull/124965) | XL PR from maintainer, addresses session model gaps | **High** — maintainer-driven |
| **Control UI: tokens/sec display** | [#115207](https://github.com/openclaw/openclaw/issues/115207) | 3 comments, internal data exists | Medium — low-effort UI win |
| **MEMORY.md size warning/limit enforcement** | [#45415](https://github.com/openclaw/openclaw/issues/45415) | 5 comments, 1👍, silent truncation at ~20K | Medium — user pain visible |
| **Per-alias agentRuntime override** (dual-route Anthropic CLI+API) | [#82314](https://github.com/openclaw/openclaw/issues/82314) | 3 comments, 1👍, billing consequences noted | Low — architectural complexity |
| **Opt-in agent-to-agent announce step** | [#105503](https://github.com/openclaw/openclaw/issues/105503) | 4 comments, subagent orchestration pain | Low — design unsettled |
| **Discord channel permission message actions** | [#124962](https://github.com/openclaw/openclaw/pull/124962) | AI-assisted PR, closes #124919 | **High** — ready, small scope |

**Roadmap inference**: Next version will likely ship **session permissions**, **main-session group routing**, and **Discord permission actions**. Skill lifecycle and MEMORY.md warnings are user-requested but lack PRs.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Silent data loss** | #44925 (31 comments), #108865, #101814, #122615 | **Critical** — subagent results, inbound messages, session history lost without notification |
| **Update/reliability hell** | #87928, #111372, #85844, #123073, #101814 | **Critical** — macOS restart loops, dev-channel broken, auto-update breaks running gateway |
| **Channel delivery regressions** | #123354 (Matrix E2EE), #123517 (Telegram tables), #112564 (WhatsApp groups), #124527 (Telegram images), #97435 (LINE delays) | **High** — multi-channel operators hit daily |
| **Security boundary leaks** | #46786 (elevated exec routing), #124822 (plugin multi-agent), #124926 (infer image gen) | **High** — sandbox bypass, agent isolation failures |
| **Observability gaps** | #114612 (SQLite growth), #115207 (tokens/sec), #45415 (MEMORY.md truncation), #124911 (compaction ignores context window) | **Medium** — operators fly blind on resources |
| **Model/provider config friction** | #124345 (32-token probe), #89114 (Minimax M3 thinking modes), #124689 (model picker), #74204 (embed timeout) | **Medium** — local/reasoning model users blocked |
| **Control UI mismatches** | #121401 (web search toggle), #123393 (DM shows "You"), #124873 (Buzz thread nesting), #100790 (login commands not copyable) | **Medium** — daily UX friction |

**Use cases revealed**: Multi-agent fleets, multi-channel deployments (Telegram/WhatsApp/Matrix/Feishu/LINE/Discord), local model inference (Ollama, llama.cpp, MiniMax), subagent orchestration, embedded Codex/Claude ACP agents, and production gateway operations with auto-updates.

---

## 8. Backlog Watch (Stale High-Value Items Needing Maintainer Attention)

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 5 months | **Top-commented issue** (31); subagent orchestration fundamentally unreliable | `clawsweeper:needs-maintainer-review`, `clawsweeper:needs-product-decision`, `clawsweeper-recovery-stuck` |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | 3 weeks | Production disk-fill risk; memory tables unbounded | `dedupe:parent`, needs retention policy design |
| [#85844](https://github.com/openclaw/openclaw/issues/85844) | 3 months | Auto-update breaks running gateway — core reliability | `maturity:stable`, P1, no fix PR |
| [#46786](https://github.com/openclaw/openclaw/issues/46786) | 5 months | Security boundary regression; `tools.elevated` routes all exec to host | `regression`, `needs-security-review`, no fix

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-08-17)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **high fragmentation with convergent technical challenges**. Twelve projects exhibit activity, but only 6 demonstrate sustained velocity. A clear split exists between **core gateway/framework projects** (OpenClaw, Hermes, ZeroClaw, NanoClaw) investing in multi-session orchestration, security boundaries, and channel abstraction, and **client/interface projects** (CoPaw, LobsterAI, PicoClaw, NanoBot) focused on UX, model integration, and platform-specific features. All active projects face **reliability debt**—session/message loss, update loops, and channel delivery regressions dominate critical bug lists. Security hardening (SSRF, credential boundaries, plugin sandboxing) is a cross-cutting investment. No project has achieved "stable + feature-complete" status; the ecosystem is in a **maturation sprint** where architectural decisions (RFCs in ZeroClaw, permission modes in OpenClaw, Bot Mode in Hermes) will define interoperability for the next 12–18 months.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Latest Release | Health Score* |
|---------|--------------|-----------|-------------------|----------------|---------------|
| **OpenClaw** | 134 | 500 | 117 | `pr-124528-profiles` (profiling artifact) | 🟡 **Caution** — High velocity, critical backlog, P0 bugs unfixed |
| **NanoBot** | 1 | 500 | 1 | None | 🟡 **Caution** — Massive PR churn, 6-month stale fixes, critical gateway bug |
| **Hermes Agent** | 34 | 50 | 7 | **v0.20.2 (v2026.8.16)** | 🟢 **Healthy** — Steady merges, feature graduation, same-day upstream response |
| **PicoClaw** | 3 | 5 | 1 (stale close) | None (0.3.x) | 🟡 **Caution** — Security PRs ready, critical Slack regression, no release |
| **NanoClaw** | 1 | 32 | 13 | None | 🟢 **Healthy** — Core-team driven, focused scope, clean merges |
| **NullClaw** | 0 | 0 | 0 | None | ⚫ **Dormant** |
| **IronClaw** | 1 | 9 | 2 | None | 🟢 **Healthy** — Dependency hygiene, targeted UX fix, stable |
| **LobsterAI** | 10 | 17 | 9 (all stale) | None | 🟡 **Caution** — Security wins, but critical bugs & stale PR backlog |
| **Moltis** | 2 | 5 | 5 | None | 🟢 **Healthy** — Flaky test fixed, vault/CalDAV bugs resolved, CI gate active |
| **CoPaw (QwenPaw)** | 12 | 11 | 2 | **v2.1.0** (regressions present) | 🟡 **Caution** — High community PRs, v2.1.0 broke core loops |
| **ZeptoClaw** | 0 | 0 | 0 | None | ⚫ **Dormant** |
| **ZeroClaw** | 16 | 50 | 4 | None | 🟡 **Caution** — RFC-heavy, CI flakes block merges, security investment strong |

*Health Score: 🟢 Healthy (steady merges, low critical bugs, clear direction) | 🟡 Caution (velocity/backlog mismatch, unfixed P0/P1, process bottlenecks) | ⚫ Dormant (no activity)

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Scale of orchestration**: Only project with documented 3-node/12-concurrent-turn gateway profiling (`pr-124528-profiles`) and explicit session-permission architecture (#124909).
- **Channel breadth**: Production integrations across Telegram, WhatsApp, Matrix, Feishu, LINE, Discord, Slack — most diverse in ecosystem.
- **Subagent orchestration depth**: Explicit subagent completion/retry/announce mechanics (#44925, #122615), though currently unreliable.
- **Community surface**: 500 PRs/24h signals largest contributor base; `clawsweeper` automation tags indicate structured triage.

### Technical Approach Differences
| Dimension | OpenClaw | Hermes | ZeroClaw | NanoClaw |
|-----------|----------|--------|----------|----------|
| **Session model** | Worktree-scoped permissions (#124909) | Ephemeral + gateway-bound | Provenance/binding RFC (#6954) | Cross-session context fan-out (#3257) |
| **Security** | `tools.elevated` regression (#46786) | Plugin approval ordering (#87420) | Universal ingress policy RFC (#6971) | Adapter capabilities + card interceptors |
| **Update strategy** | Auto-update + hashed bundles (broken #85844) | Windows ZIP fallback (destructive #87331) | Not yet defined | Mid-turn streaming as single door (#3284) |
| **Extensibility** | ACP agents, skills, plugins | Bot Mode bundled, ACP providers | MCP-first, lighter core RFC (#6165) | Channel adapter registry + hot-start |

### Community Size Comparison
- **OpenClaw**: Largest raw activity (500 PRs), but saturated maintainer queue (383 open PRs).
- **Hermes**: Smaller but higher merge efficiency (7/50 PRs merged, 14% vs OpenClaw's ~23% close rate with mostly stale items).
- **NanoClaw**: Smallest visible community (core-team only), highest merge rate (13/32 = 41%).
- **CoPaw**: Most first-time contributors (6/9 open PRs), indicating strong onboarding.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Multi-session / agent group orchestration** | OpenClaw (#124909, #124965), Hermes (Bot Mode #87886), ZeroClaw (#6954), NanoClaw (#3257), CoPaw (#7062) | Worktree-scoped permissions, cross-session context fan-out, provenance for agent-initiated turns, per-agent `reasoning_effort` |
| **Channel delivery reliability** | OpenClaw (#101814, #123354), PicoClaw (#3338), NanoClaw (#2752), Hermes (#88062), ZeroClaw (#9488) | Message loss on archive/restart, Slack media upload broken, Discord attachments missing, Telegram E2EE rotation, unified attachment model |
| **Security boundaries & plugin sandboxing** | OpenClaw (#46786), Hermes (#87420), ZeroClaw (#6971, #9582), NanoBot (#1149), PicoClaw (#3322–3324) | Elevated exec routing bypass, plugin approval ordering, universal ingress policy, prompt injection guard, SSRF via media downloads |
| **Auto-update / zero-downtime reliability** | OpenClaw (#87928, #111372, #85844), Hermes (#87331, #87304), NanoBot (none), LobsterAI (#1698) | macOS restart loops, stale bundle imports, Windows ZIP fallback data loss, gateway port conflict |
| **Observability & resource control** | OpenClaw (#114612, #45415), Hermes (#87468), NanoClaw (#3264), Moltis (#1093), ZeroClaw (#9621) | SQLite unbounded growth, MEMORY.md truncation, Langfuse flush timeout, delivery batch preview, opt-in telemetry |
| **Model/provider config friction** | OpenClaw (#124345, #89114), LobsterAI (#1813), CoPaw (#7076), Hermes (#88056), PicoClaw (#3299) | 32-token probe cap, DeepSeek V4 schema rejection, creator 404, Codex context raise, Exa search provider |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Architectural Signature |
|---------|---------------|--------------|-------------------------|
| **OpenClaw** | **Gateway/routing fabric** for multi-channel, multi-agent fleets | Platform operators, self-hosters running agent farms | Central gateway + session-scoped permissions + subagent orchestration |
| **Hermes Agent** | **Desktop-first agent** with bundled Bot Mode & cron/kanban | Power users, automation engineers, team deployments | Electron desktop + gateway + cron workers + plugin approval chain |
| **ZeroClaw** | **Security-first runtime** with MCP-native extensibility | Security-conscious orgs, edge/embedded deployments | Capability-based sandbox, deny-by-default egress, RFC-governed evolution |
| **NanoClaw** | **Delivery pipeline & channel adapter platform** | Bot builders, multi-platform messaging products | Registry-driven adapters, mid-turn streaming, cross-session context |
| **CoPaw (QwenPaw)** | **Web-based agent IDE** with scheduling & multimedia | Developers, game-devs, enterprise plugin authors | React frontend + cron + video/media tools + OAuth token management |
| **LobsterAI** | **Desktop client** for Chinese IM ecosystems (DingTalk, Lark, QQ) | Enterprise users in China, multi-IM aggregators | Electron + OpenClaw proxy, IM-native UX, model selector |
| **PicoClaw** | **Lightweight channel bridge** for Pico/embedded hardware | IoT/edge developers, hardware integrators | Go-based, SSRF-hardened, minimal deps, channel-specific media handling |
| **NanoBot** | **Terminal/Web UI** for agent interaction with multimodal | CLI enthusiasts, Discord/Telegram bot operators | TypeScript, OpenTUI native CLI, WebUI collaboration, voice/audio |
| **Moltis** | **CalDAV/calendar + vault + activity logging** | Privacy-focused schedulers, personal automation | Rust, vault unsealing, RFC 4791 CalDAV, granular activity logs |
| **IronClaw** | **Slack-centric automation** with knowledge graph | Slack-heavy teams, NEAR ecosystem | Rust, Slack-first, nightly knowledge graph refresh, automation suppression |

---

## 6. Community Momentum & Maturity

### **Rapidly Iterating (High Velocity + Active Merges)**
- **NanoClaw**: 41% merge rate, core-team velocity, no external noise — *shipping infrastructure fast*
- **Hermes**: 14% merge rate but 7 PRs/day, same-day upstream response (Codex context), feature graduation — *product velocity*
- **Moltis**: 100% merge rate (5/5), CI gate enforcement, flaky test elimination — *quality velocity*

### **High Activity, Process Bottlenecked**
- **OpenClaw**: 500 PRs but 383 open; maintainer queue saturated; `clawsweeper` tags show triage automation but not resolution
- **ZeroClaw**: 50 PRs but 4 merged; RFC decision queue (#8692) + CI flakes block throughput
- **NanoBot**: 500 PRs but 1 merged; 6-month conflict backlog; critical gateway bug unfixed
- **CoPaw**: 23 activities, 9 open PRs (6 first-time), but v2.1.0 regressions — *community > maintainer bandwidth*

### **Stabilizing / Maintenance Mode**
- **IronClaw**: Dependency hygiene + targeted UX fix; zero regressions; predictable
- **PicoClaw**: Security PR batch (4 SSRF fixes) + Exa provider; awaiting Slack hotfix
- **LobsterAI**: Security merges done; stale feature PRs (Apr) + critical bugs unfixed — *security > features*

### **Dormant**
- **NullClaw**, **ZeptoClaw**: No 24h activity

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Session/agent-group as first-class primitive** | 5 projects building cross-session context, permission scoping, provenance | Frameworks must model *collections* of agents/sessions, not single threads |
| **Channel abstraction hardening** | Unified attachment RFC (ZeroClaw), adapter capabilities (NanoClaw), SSRF fixes (PicoClaw), delivery preview hooks (NanoClaw) | "Write once, deliver everywhere" requires protocol-level normalization, not just API wrappers |
| **Security boundaries moving downstack** | Plugin approval ordering (Hermes), universal ingress policy (ZeroClaw), elevated exec regression (OpenClaw), prompt guard (NanoBot) | Sandbox enforcement shifting from application layer to runtime/gateway layer |
| **Update reliability = table stakes** | macOS restart loops (OpenClaw, Hermes), dev-channel pnpm/npm mismatch (OpenClaw), ZIP fallback data loss (Hermes) | Auto-update must be transactional, observable, and rollback-safe — no longer optional |
| **Observability as product requirement** | Telemetry RFC (ZeroClaw), activity logs (Moltis), delivery preview (NanoClaw), SQLite growth alerts (OpenClaw) | Operators demand *cost/usage/health* visibility; telemetry must be privacy-designed from start |
| **Model/provider config as UX differentiator** | Codex context raise (Hermes), DeepSeek V4 breakage (LobsterAI), per-agent reasoning_effort (CoPaw), Exa search (PicoClaw) | Abstracting model params per-agent/session is now a core feature, not advanced setting |
| **First-time contributor funnel health** | CoPaw (6/9 PRs), NanoClaw (core-only), OpenClaw (high volume, low merge) | Projects with clear contribution paths (good first issues, fast review) attract external fixes for stale bugs |

---

**Bottom Line for Decision-Makers**: The ecosystem is converging on **multi-session orchestration, channel-normalized delivery, and capability-based security** as the architectural baseline. Projects that resolve their **maintainer throughput bottlenecks** (OpenClaw, ZeroClaw, NanoBot) and **stabilize update/reliability paths** (OpenClaw, Hermes, CoPaw) will define the interoperability layer. For developers building on these platforms: **expect breaking changes in session models and channel APIs** over the next 2 quarters as RFCs land and permission systems mature.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-17

## 1. Today's Overview
NanoBot shows **high PR churn but low merge velocity**: 500 PRs updated in the last 24 hours, yet only 1 merged/closed. The vast majority (499) remain open, many tagged `[conflict]` and dating back to February 2026, indicating a backlog of stale or blocked contributions. Only 1 active issue was updated today (#4864), a critical bug causing an endless loop in the `complete_goal` tool. No new releases were published. The project appears to be in a **maintenance bottleneck**—high community contribution volume but limited integration capacity.

## 2. Releases
**No new releases** in the last 24 hours. The latest release data is not provided in this snapshot.

## 3. Project Progress
| PR | Status | Summary |
|----|--------|---------|
| [#4329](https://github.com/HKUDS/nanobot/pull/4329) | **Closed** (superseded) | Native TypeScript terminal UI (OpenTUI) — marked merged erroneously; changes not on `main`. Superseded by #5406. |
| [#5406](https://github.com/HKUDS/nanobot/pull/5406) | **Open** | Re-submission of #4329 with cross-terminal test fix; active development. |
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) | **Open** | WebUI session collaboration via `@mentions` — stable session identities, peer picker, `self` reference. |

**Net progress**: One major UI rewrite (CLI) is being re-landed; WebUI collaboration feature is under review. No bug-fix PRs merged today.

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) | Issue | 7 comments, 👍1, updated today | **Critical gateway bug**: `complete_goal` tool receives `recap` as bare string instead of JSON, causing endless loop. Blocks agent completion flow. |
| [#5406](https://github.com/HKUDS/nanobot/pull/5406) | PR | Created today, 0 comments | **Native TS terminal UI** — community desire for performant, cross-platform CLI (OpenTUI). |
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) | PR | 4 days old, 0 comments | **Multi-session WebUI collaboration** — users want to reference/hand off between concurrent agent sessions. |
| [#1306](https://github.com/HKUDS/nanobot/pull/1306) | PR | Open since Feb, `[conflict]` | **Voice/audio support** — Discord TTS replies + audio transcription. High demand for multimodal interaction. |
| [#1149](https://github.com/HKUDS/nanobot/pull/1149) | PR | Open since Feb, `[conflict]` | **Prompt injection defense** — `PromptGuard` safety module. Security-conscious deployments need this. |

**Signal**: Users want **richer interfaces (voice, native CLI, multi-session WebUI)** and **robust security**, but core gateway bugs (#4864) undermine trust.

## 5. Bugs & Stability
| Severity | Item | Description | Fix PR? |
|----------|------|-------------|---------|
| **Critical** | [#4864](https://github.com/HKUDS/nanobot/issues/4864) | `complete_goal` endless loop: gateway serializes `recap` param as string, not JSON. Agent cannot finish tasks. | **No** — gateway-side fix needed. |
| **High** | [#1072](https://github.com/HKUDS/nanobot/pull/1072) | `CancelledError` from MCP tool timeout crashes entire agent process (uncaught `BaseException`). | **Yes** — PR #1072 (open, `[conflict]` since Feb). |
| **High** | [#1026](https://github.com/HKUDS/nanobot/pull/1026) | Media files in `~/.nanobot/media/` never deleted → unbounded disk growth. | **Yes** — PR #1026 (open, `[conflict]` since Feb). |
| **Medium** | [#1073](https://github.com/HKUDS/nanobot/pull/1073) | `save_config()` drops unknown keys (e.g., custom providers like `openai-codex`). | **Yes** — PR #1073 (open, `[conflict]` since Feb). |
| **Medium** | [#1025](https://github.com/HKUDS/nanobot/pull/1025) | OAuth tokens not persisted; unknown config fields lost on save. | **Yes** — PR #1025 (open, `[conflict]` since Feb). |

**Pattern**: Multiple high-impact stability fixes have been **stuck since February** behind merge conflicts. The critical #4864 has no fix PR yet.

## 6. Feature Requests & Roadmap Signals
| Feature | Evidence | Likelihood for Next Version |
|---------|----------|-----------------------------|
| **Native TypeScript CLI (OpenTUI)** | #5406 (active), #4329 (closed but superseded) | **High** — actively re-worked, strategic direction. |
| **WebUI session collaboration / mentions** | #5358 (recent, detailed) | **High** — UX polish for multi-user workflows. |
| **Subagent control plane (list/kill/profiles)** | #1032, #1024, #1015 (all Feb, `[conflict]`) | **Medium** — design work done, blocked by conflicts. |
| **Voice/audio (Discord TTS + transcription)** | #1306 (Feb, `[conflict]`) | **Medium** — complete implementation, needs rebase. |
| **Prompt injection guard (PromptGuard)** | #1149 (Feb, `[conflict]`) | **Medium** — security priority, but no recent movement. |
| **KV cache optimization / batch prompt rollover** | #1205 (Feb, `[conflict]`) | **Low** — performance niche, no recent activity. |
| **Telegram forum threads / group sender attribution** | #1195, #1147 (Feb, `[conflict]`) | **Low** — platform-specific, stale. |

**Prediction**: Next version will likely ship **native TS CLI** and **WebUI mentions**. Subagent profiles and voice support are ready but need conflict resolution.

## 7. User Feedback Summary
- **Pain points**: 
  - Agent **cannot complete tasks** due to #4864 (gateways serializing JSON as string).
  - **Config loss** when using custom providers (#1073) or OAuth (#1025).
  - **Disk exhaustion** from uncleaned media files (#1026).
  - **Process crashes** on tool timeouts (#1072).
- **Use cases driving PRs**:
  - Teams wanting **multi-session WebUI collaboration** (#5358).
  - Developers needing **native, fast terminal UI** (#5406).
  - Discord/Telegram bot operators requiring **voice, threading, sender IDs** (#1306, #1195, #1147).
  - Security-focused deployments demanding **prompt injection detection** (#1149).
- **Sentiment**: Frustration with **stale PRs** (many `[conflict]` since Feb) and **critical bugs unaddressed**. Enthusiasm for UI/UX upgrades.

## 8. Backlog Watch — Stale High-Value Items Needing Maintainer Attention
| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#1072](https://github.com/HKUDS/nanobot/pull/1072) | ~6 months | Prevents agent crashes on tool cancellation. | Merge conflict; needs rebase + review. |
| [#1026](https://github.com/HKUDS/nanobot/pull/1026) | ~6 months | Stops unbounded disk growth from media files. | Merge conflict; needs rebase + review. |
| [#1025](https://github.com/HKUDS/nanobot/pull/1025) | ~6 months | Fixes OAuth token loss + config field dropping. | Merge conflict; needs rebase + review. |
| [#1073](https://github.com/HKUDS/nanobot/pull/1073) | ~6 months | Preserves custom provider configs on save. | Merge conflict; needs rebase + review. |
| [#1149](https://github.com/HKUDS/nanobot/pull/1149) | ~6 months | Adds PromptGuard for prompt injection defense. | Merge conflict; security feature. |
| [#1306](https://github.com/HKUDS/nanobot/pull/1306) | ~6 months | Full voice/audio pipeline for Discord. | Merge conflict; large surface area. |
| [#1032](https://github.com/HKUDS/nanobot/pull/1032) | ~6 months | Subagent control plane (list/kill) — foundation for parallel agents. | Merge conflict; depends on #1024/#1015. |
| [#1205](https://github.com/HKUDS/nanobot/pull/1205) | ~6 months | KV cache reuse optimization — cost/latency gains. | Merge conflict; experimental. |

**Recommendation**: Prioritize **#4864 (critical bug)** → then **#1072, #1026, #1025, #1073 (stability)** → then **#5406, #5358 (active features)**. The February backlog needs a **conflict-resolution sprint** or maintainer triage to unblock contributors.

---

**Project Health Indicator**: 🟡 **Caution** — High contributor interest, but integration throughput is low. Critical bug (#4864) and 6-month-old stability fixes are stalled. Immediate maintainer action on conflict resolution and gateway bug is needed to restore velocity.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-17

## 1. Today's Overview
Hermes Agent released **v0.20.2 (v2026.8.16)** yesterday, a patch release rolling up ~397 PRs since v0.20.1 into a stable tag for Docker images and fresh installs. The project shows **high velocity**: 34 issues and 50 PRs updated in the last 24 hours, with 7 PRs merged/closed. Activity spans desktop (Windows/macOS/Linux), gateway/messaging (Telegram, Slack, Feishu), cron/kanban automation, plugin architecture, and security boundaries. The issue backlog skews toward **P2/P3 bugs** in cross-process session state, message delivery, and platform-specific install/update paths — indicating a maturation phase where edge cases in distributed components are surfacing.

## 2. Releases
### v2026.8.16 — Hermes Agent v0.20.2 (2026-08-16)
- **Type**: Patch release (stable tag for downstream consumers)
- **Scope**: Rolls up ~397 PRs merged since v0.20.1
- **Target**: Docker images, hosted deployments, fresh installs
- **Breaking changes**: None noted in release notes
- **Migration notes**: No migration required; standard `hermes update` or container pull
- **Link**: [Release v2026.8.16](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.16)

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Title | Component | Impact |
|----|-------|-----------|--------|
| [#88056](https://github.com/NousResearch/hermes-agent/pull/88056) | feat: raise Codex OAuth context to 900K for gpt-5.6 family and gpt-5.4 | provider/openai | **Merged** — Enables 1M context window for subscription Codex accounts (was 350K) |
| [#87886](https://github.com/NousResearch/hermes-agent/pull/87886) | feat(desktop): bundle Bot Mode as built-in default-on plugin + core teammate protocol | comp/agent, comp/desktop | **Merged** — Bot Mode now ships bundled & ON by default; bot-to-bot protocol moves to core system prompt |
| [#88050](https://github.com/NousResearch/hermes-agent/pull/88050) | fix(cron): stop retry storms when gateway deliberately stopped (OOF-266) | comp/cron, comp/dashboard | **Open** — Stops 503 retry storms from NAS/QStash when gateway is down |
| [#88063](https://github.com/NousResearch/hermes-agent/pull/88063) | fix(state): stop abandoned sessions from exhausting file descriptors | comp/agent | **Open** — Idle accounting workers now retire, preventing FD leaks |
| [#88052](https://github.com/NousResearch/hermes-agent/pull/88052) | fix(terminal): avoid FileProvider reads in lifecycle guard | tool/terminal | **Open** — Prevents macOS iCloud symlink hangs in terminal preflight |
| [#88062](https://github.com/NousResearch/hermes-agent/pull/88062) | fix(telegram): rebind TypeHandler on lazy re-import | platform/telegram | **Open** — Fixes PTB import guard causing fallback `Any` bindings |
| [#87109](https://github.com/NousResearch/hermes-agent/pull/87109) | fix(desktop): add HUD layout reset | comp/desktop | **Open** — Adds discoverable "Reset HUD size and position" control |

**Key advances**: Bot Mode graduation to core, Codex context expansion, and multiple stability fixes for cron, terminal, and session management.

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Comments | Area | Underlying Need |
|------|----------|------|-----------------|
| [#87356](https://github.com/NousResearch/hermes-agent/issues/87356) cronjob update schema omits model/provider | 2 | comp/cron, area/billing | **Agent-tool parity**: Drift-guard remediation unreachable because agent-facing schema doesn't expose params the handler accepts |
| [#87420](https://github.com/NousResearch/hermes-agent/issues/87420) pre_tool_call directive aggregation is first-valid-wins | 1 | comp/plugins, area/auth | **Plugin security ordering**: A plugin's `approve` shadows a later plugin's `block` — registration order becomes a security boundary |
| [#88057](https://github.com/NousResearch/hermes-agent/issues/88057) Kanban workers can't return protected-instruction approval prompts | 1 | comp/gateway, comp/cron | **Cross-process approval flow**: Headless worker can't route approval prompts back to authenticated gateway session |
| [#87248](https://github.com/NousResearch/hermes-agent/issues/87248) Desktop billing error bubble persists after auto-failover succeeds | 1 | comp/desktop, area/billing | **UI state hygiene**: Error UI not cleared on successful failover — looks like recurring failure |
| [#87267](https://github.com/NousResearch/hermes-agent/issues/87267) feat(gateway): add MAX messenger platform plugin (Russian) | 1 | comp/gateway, comp/plugins | **Platform expansion**: Request for VK's MAX messenger support — no Russian platforms currently supported |

**Pattern**: Cross-process state synchronization (gateway ↔ workers ↔ desktop) and plugin security composition are recurring pain points.

## 5. Bugs & Stability (Ranked by Severity)

### P0 / Critical
- [#87368](https://github.com/NousResearch/hermes-agent/issues/87368) **Background review drops gateway ephemeral session context → breaks prompt-cache prefix parity**  
  *No fix PR yet* — Review fork loses `ephemeral_system_prompt` (contains Feishu session context), causing cache misses.

### P1 / High
- [#87331](https://github.com/NousResearch/hermes-agent/issues/87331) **Desktop auto-update can wipe desktop build on Windows** (venv lock ignored → ZIP fallback deletes win-unpacked)  
  *No fix PR yet* — Destructive update path on Windows; duplicate of [#87304](https://github.com/NousResearch/hermes-agent/issues/87304).
- [#87304](https://github.com/NousResearch/hermes-agent/issues/87304) **Windows: ZIP fallback fires on dependency failure, permanently deletes uncommitted/untracked files** (no dirty-tree guard)  
  *No fix PR yet* — Same root cause as #87331.

### P2 / Medium
- [#87248](https://github.com/NousResearch/hermes-agent/issues/87248) Desktop billing error bubble persists after successful auto-failover  
  *No fix PR yet* — UI re-grafts error from failed attempt.
- [#88050](https://github.com/NousResearch/hermes-agent/pull/88050) **Cron retry storms when gateway deliberately stopped** (OOF-266) — **Fix PR open**
- [#87383](https://github.com/NousResearch/hermes-agent/issues/87383) Trusted LAN HTTP writes blocked despite allowlist config  
  *No fix PR yet* — Terminal approval layer ignores `security.allow_private_network`.

### P3 / Low-Medium
- [#87419](https://github.com/NousResearch/hermes-agent/issues/87419) Windows destructive commands (`format C:`, `diskpart`, `Remove-Item -Recurse`) only "dangerous", not "hardline" — bypassable under `approvals.mode=off`  
  *No fix PR yet* — Security boundary gap on Windows.
- [#87468](https://github.com/NousResearch/hermes-agent/issues/87468) Langfuse plugin `client.flush()` has no timeout — can hang cron job past watchdog  
  *No fix PR yet* — Observability blocking automation.
- [#87457](https://github.com/NousResearch/hermes-agent/issues/87457) Playwright Chromium install fails on NixOS (EROFS on read-only `PLAYWRIGHT_BROWSERS_PATH`)  
  *No fix PR yet* — Install script lacks NixOS case.
- [#88053](https://github.com/NousResearch/hermes-agent/issues/88053) Background-review forks can't write skills: read-before-write guard rejects (ContextVar marks lost across worker-thread snapshots)  
  *No fix PR yet* — Skill persistence broken in review workers.

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood for Next Version |
|----------|--------|----------------------------|
| [#88061](https://github.com/NousResearch/hermes-agent/issues/88061) **Design: per-task multi-agent workflow — IM-style task trace + reliable execution** (ported from archived Hermes-Bot-Mode#108) | Core architectural shift: task-scoped multi-agent with traceability | High — Bot Mode now bundled (#87886 merged); this is the natural next step |
| [#88060](https://github.com/NousResearch/hermes-agent/issues/88060) **Composer `@` autocomplete should offer Bot Mode agents** (from Hermes-Bot-Mode#43) | UX integration for newly-bundled Bot Mode | High — Low-hanging fruit post-bundle |
| [#87267](https://github.com/NousResearch/hermes-agent/issues/87267) **Add MAX messenger (Russian VK platform)** | Internationalization / platform parity | Medium — Clear demand, plugin architecture supports it |
| [#88054](https://github.com/NousResearch/hermes-agent/issues/88054) **Deduplicate unresolved attention requests across gateway restarts** | Operational maturity for managed deployments | Medium — Addresses real incident pain |
| [#88055](https://github.com/NousResearch/hermes-agent/issues/88055) **Back off repeated cron-failure deliveries, notify once on recovery** | Noise reduction for cron operators | Medium — Follows same theme as #88054 |
| [#88027](https://github.com/NousResearch/hermes-agent/pull/88027) **Expose Devin ACP as first-class Hermes provider** | Provider ecosystem expansion | Low-Medium — Needs design decision, early PR |

**Strongest signals**: Bot Mode workflow maturation (IM-style traces, composer integration) and operational hardening for gateway/cron (deduplication, backoff).

## 7. User Feedback Summary

### Pain Points (from issues)
- **Windows update destruction**: Users report auto-update wiping builds (#87331, #87304) — "scary-looking failure" but false positive (#87359)
- **Cross-process approval breaks**: Gateway → worker approval prompts undeliverable (#88057) — blocks protected-instruction edits in Kanban
- **Session state leaks**: Abandoned sessions exhaust FDs (#88063), background review loses context (#87368)
- **Plugin security ordering**: First-plugin-wins allows `approve` to shadow `block` (#87420) — registration order = security boundary
- **NixOS install broken**: Playwright install fails on read-only store (#87457)
- **Skill persistence broken in workers**: Read-before-write guard false positives (#88053)

### Positive Signals
- Bot Mode graduation to core (#87886 merged) — "now part of the desktop app"
- Codex context raise to 900K (#88056 merged) — responds to upstream OpenAI rollout same-day
- Active community: 34 issues, 50 PRs in 24h with diverse contributors

### Use Cases Emerging
- **Managed cron/kanban** on NAS/QStash with gateway (retry storms, delivery deduplication)
- **Multi-bot Telegram gateways** with multiplexed profiles (#87239)
- **Russian-market deployment** needing MAX messenger (#87267)
- **Enterprise security**: Hardline blocks on Windows, plugin approval ordering

## 8. Backlog Watch (Long-Unanswered / Needs Maintainer Attention)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#6422](https://github.com/NousResearch/hermes-agent/pull/6422) **fix(feishu): use open_message_id for card action replies** | Open since 2026-04-09 (4+ months) | Feishu card actions broken (API error 99992354); blocks enterprise Feishu deployments |
| [#25208](https://github.com/NousResearch/hermes-agent/pull/25208) **feat(skills): add aegis-dq data quality skill** | Open since 2026-05-13 (3+ months) | Substantial skill addition (Apache 2.0 framework); stalled in review |
| [#84399](https://github.com/NousResearch/hermes-agent/pull/84399) **fix: plumb config.yaml model.temperature into agent API requests** | Open since 2026-08-12 (5 days) | User-configured temperature silently dropped — config not reaching wire |
| [#86391](https://github.com/NousResearch/hermes-agent/pull/86391) **fix(macos): detect stale TCC grants and guide one-time re-grant** | Open since 2026-08-14 (3 days) | macOS permission breaks on rebuild (cdhash change); affects all macOS desktop users |
| [#83710](https://github.com/NousResearch/hermes-agent/pull/83710) **feat: expose public gateway injection seam** | Open since 2026-08-11 (6 days) | Enables plugins (e.g. `hermes-atm`) to inject messages via public API; marked duplicate but still open |

---

**Project Health Assessment**: 🟢 **Healthy velocity, maturing architecture** — High merge rate (7 PRs/day), major feature graduation (Bot Mode), same-day response to upstream changes (Codex context). Primary risk cluster: **Windows update path** and **cross-process session/approval state** — both have multiple open P1/P2 issues without fix PRs yet. Recommend maintainer triage on #87331/#87304 (Windows data loss) and #87368/#88057 (gateway-worker context sync).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-17

## 1. Today's Overview
PicoClaw shows steady maintenance activity with **8 total updates** (3 issues, 5 PRs) in the last 24 hours but **no new releases**. The project is in a **security-hardening and feature-expansion phase**: four open PRs address SSRF vulnerabilities across Weixin, WeCom, and generic channel media downloads, while a fifth adds the Exa web-search provider. One PR (#3193, Simplex channel) was closed stale. Two feature requests (OAuth 2.1 for MCP, Telegram rich tables) and one critical Slack media-upload bug remain open, indicating community demand for broader protocol support and platform parity.

## 2. Releases
**No new releases** published today. The latest version remains `picoclaw 0.3.x` (per issue #3338).

## 3. Project Progress
| PR | Status | Description |
|----|--------|-------------|
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | **Closed (stale)** | Added Simplex channel type (new feature). Closed without merge after ~50 days. |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Open | **Add native Exa web search provider** — implements `tools.web`/`web_search` via Exa API (`POST /search`, `X-Api-Key` auth, date-range filters). |
| [#3322](https://github.com/sipeed/picoclaw/pull/3322) | Open | **SSRF hardening for inbound media downloads** — applies `utils.CreateSafeHTTPClient` + `BlockPrivateTargets` to QQ/Telegram/Discord/LINE/Slack channels. |
| [#3323](https://github.com/sipeed/picoclaw/pull/3323) | Open | **WeCom media-download SSRF fix** — replaces plain `http.Client` with `CreateSafeHTTPClient` + `ValidateSafeHTTPURL`. |
| [#3324](https://github.com/sipeed/picoclaw/pull/3324) | Open | **Weixin media-download SSRF fix** — same pattern as #3323 for Weixin CDN/remote media. |

**Net progress**: Security posture improved across 4 PRs (3 channel-specific, 1 generic); Exa search provider ready for review; Simplex channel contribution archived.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) — OAuth 2.1 for MCP servers | 3 comments, created 2026-07-30 | **Enterprise/integration readiness** — users need standard auth to connect MCP servers to PicoClaw without custom shims. |
| [#3325](https://github.com/sipeed/picoclaw/issues/3325) — Render Telegram tables with rich messages | 1 comment, created 2026-08-09 | **Platform-native UX** — Telegram Bot API 10.1 supports visual tables; current markdown fallback degrades readability. |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) — Slack does not attach image media content | 0 comments, created **today** | **Critical platform parity** — Slack media uploads completely broken (`file size cannot be 0`). Blocks Slack users entirely. |

**Signal**: Slack bug (#3338) is the highest-impact open issue (zero-workaround regression). OAuth 2.1 (#3302) reflects growing MCP ecosystem adoption.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack `SendMedia` omits `FileSize` in `slack.UploadFileParameters`; SDK rejects upload pre-flight. Affects all Slack media sending. | **No PR yet** — immediate maintainer attention needed. |
| **High (Security)** | SSRF via inbound media URLs (multiple channels) | QQ/Telegram/Discord/LINE/Slack/WeCom/Weixin downloads followed redirects to loopback/private IPs. | **Yes** — #3322 (generic), #3323 (WeCom), #3324 (Weixin) open for review. |
| **Medium** | WeCom/Weixin media clients used unsafe `http.Client` | Same SSRF vector on outbound media fetch. | **Yes** — covered by #3323/#3324. |

**No crashes or regressions** reported today beyond the Slack media regression.

## 6. Feature Requests & Roadmap Signals
| Request | Likelihood for Next Version | Rationale |
|---------|----------------------------|-----------|
| **OAuth 2.1 for MCP servers** ([#3302](https://github.com/sipeed/picoclaw/issues/3302)) | **High** | Labeled “Nice-to-Have” but aligns with MCP standardization; PR template exists (#2546). |
| **Telegram native table rendering** ([#3325](https://github.com/sipeed/picoclaw/issues/3325)) | **Medium** | Requires Bot API 10.1+ adoption; low implementation risk (switch to `sendMessage` with `parse_mode=HTML` + `<table>`). |
| **Exa web search provider** ([#3299](https://github.com/sipeed/picoclaw/pull/3299)) | **High** | PR ready, adds popular search API; extends `tools.web` abstraction. |
| **Simplex channel** ([#3193](https://github.com/sipeed/picoclaw/pull/3193)) | **Low** | Closed stale; would need re-submission with maintainer engagement. |

**Prediction**: Next patch (`0.3.x+1`) will likely merge the three SSRF PRs + Exa provider; Slack fix may ship as hotfix.

## 7. User Feedback Summary
- **Pain points**:  
  - Slack users **cannot send images at all** (#3338).  
  - Telegram power users lose structured data presentation (#3325).  
  - MCP integrators blocked by missing OAuth 2.1 (#3302).  
- **Positive signals**:  
  - Community actively hardening SSRF surface (4 security PRs from same author in one day).  
  - Exa search PR shows external contributor extending tool ecosystem.  
- **Satisfaction**: Mixed — core messaging works, but platform-specific media/rich-formatting gaps erode trust for Slack/Telegram-heavy teams.

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) — OAuth 2.1 for MCP | 18 days | Core integration path for AI-agent workflows; no PR yet. |
| [#3325](https://github.com/sipeed/picoclaw/issues/3325) — Telegram rich tables | 8 days | Low-effort UX win; Telegram 10.1+ widely deployed. |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) — Exa search provider | 22 days | Feature-complete PR awaiting review; expands search options. |
| [#3322/3323/3324](https://github.com/sipeed/picoclaw/pull/3322) — SSRF fixes | 8 days | Security-critical; same author, consistent pattern — batch review recommended. |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) — Slack media upload broken | **0 days (today)** | **Highest priority** — complete platform blocker; needs immediate triage/fix. |

---

**Health Indicator**: 🟡 **Caution** — Active security improvements and feature work, but a critical Slack regression and several stale feature requests suggest review bandwidth is constrained. Prioritize #3338 + batch-merge SSRF PRs to restore confidence.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-17

## 1. Today's Overview
NanoClaw shows **high core-team velocity** with 32 PRs updated in 24 hours (13 merged/closed, 19 open), driven almost entirely by internal contributors (`gavrielc`, `Koshkoshinsk`, `amit-shafnir`, etc.). No new releases were cut. Activity centers on **cross-session context**, **delivery pipeline hardening**, **channel-adapter capabilities**, and **permission/registration seams** — all foundational work for multi-session agent groups and platform integrations. The single issue (#3271) was a misfiled ticket closed immediately. Project health appears strong: focused, incremental, and well-scoped PRs with clear migration paths.

## 2. Releases
**No new releases today.** The latest published version remains whatever was shipped prior to 2026-08-16. All merged PRs are accumulating on `main` for the next cut.

## 3. Project Progress — Merged/Closed PRs (13 items)

| PR | Area | Summary | Link |
|----|------|---------|------|
| #3283 | Chat SDK / formatting | Preserve structured hyperlink targets when platform display text is shortened; append hidden deduplicated URLs from `links[]`. | [#3283](https://github.com/nanocoai/nanoclaw/pull/3283) |
| #3284 | Container / streaming | Mid-turn streaming becomes the **single delivery door** for providers with `emitsMidTurnText`; cross-segment assembly, DB-backed echo suppression, no result-door sends. | [#3284](https://github.com/nanocoai/nanoclaw/pull/3284) |
| #3262 | Channels / Chat SDK | DM-thread normalization, app-context capture (thread-started/context-changed), `dm-opened` hook for platforms with thread-based DM surfaces. | [#3262](https://github.com/nanocoai/nanoclaw/pull/3262) |
| #3259 | Tooling / skills | `skill-apply` heading-ordinal strip; headless browser URL surfacing; inherit-script extraction. | [#3259](https://github.com/nanocoai/nanoclaw/pull/3259) |
| #3260 | Permissions | New `decline_notify` unknown-sender policy: polite DM decline + one-line owner FYI (no approval card). | [#3260](https://github.com/nanocoai/nanoclaw/pull/3260) |
| #3261 | Channels / adapters | Optional adapter capabilities: `setTyping` with status/statusKind, `setThreadTitle`, `setSuggestedPrompts` + registry passthroughs. | [#3261](https://github.com/nanocoai/nanoclaw/pull/3261) |
| #3263 | Channel registry | `startChannelAdapter(key)` for hot-starting a registered adapter after boot (replays factory→setup→activation). | [#3263](https://github.com/nanocoai/nanoclaw/pull/3263) |
| #3264 | Delivery | `registerDeliveryBatchPreview` hook: modules peek at full undelivered batch before per-row delivery (prefetch expensive assets). | [#3264](https://github.com/nanocoai/nanoclaw/pull/3264) |
| #3265 | Agent-to-agent | `CreateAgentOptions.suppressCreatedNotify` — suppress only success notification, keep error notifies. | [#3265](https://github.com/nanocoai/nanoclaw/pull/3265) |
| #3266 | Permissions / registration | `registerChannelCardInterceptor` seam before registration cards; interceptor can auto-wire/decline/ignore. | [#3266](https://github.com/nanocoai/nanoclaw/pull/3266) |
| #3278 | MCP tools / memory | `save_document` MCP tool: persist Word/PDF attachments to `memory/documents/files/<slug>` (Story 1.1 of Document Memory epic). | [#3278](https://github.com/nanocoai/nanoclaw/pull/3278) |
| #1251 | Skills / channels | `/add-openmail` skill — email via OpenMail (channel, tool+notify, tool-only modes). Long-open PR finally merged. | [#1251](https://github.com/nanocoai/nanoclaw/pull/1251) |
| #3282 | Channels / Telegram | Accept Telegram pairing codes pasted with spaces (collapse internal whitespace in `extractCode`). | [#3282](https://github.com/nanocoai/nanoclaw/pull/3282) |

**Theme:** Platform-agnostic delivery hardening, multi-session context propagation, and extensibility seams for adapters/permissions.

## 4. Community Hot Topics
**No high-comment/reaction threads today.** All PRs show `Comments: undefined` and `👍: 0` — activity is internal/core-team driven. The most structurally significant open PRs (by scope) are:

1. **#3257** — Cross-session context: fan-out, DM backfill, echo pruning, `ncl sessions history` — *foundational for agent groups with concurrent sessions*  
   → [PR #3257](https://github.com/nanocoai/nanoclaw/pull/3257)
2. **#3256** — `messaging_groups.detached_at` migration (022) + delivery refuses sends into detached conversations — *clean lifecycle for platform conversation removal/rejoin*  
   → [PR #3256](https://github.com/nanocoai/nanoclaw/pull/3256)
3. **#3255** — Outbound delivery resolves sender's own channel row (not arbitrary sibling) — *fixes multi-identity-in-same-room delivery*  
   → [PR #3255](https://github.com/nanocoai/nanoclaw/pull/3255)
4. **#3254** — Two-phase inbound batch selection: context rows never crowd out trigger rows — *prevents task starvation under context backlog*  
   → [PR #3254](https://github.com/nanocoai/nanoclaw/pull/3254)

**Underlying need:** Robust multi-session, multi-identity, multi-platform agent groups with deterministic delivery and context isolation.

## 5. Bugs & Stability — Reported/Fixed Today

| Severity | Issue | Fix PR | Status |
|----------|-------|--------|--------|
| **High** | Inbound Discord attachments (text/images) never reach agent — bare `[file: …]` placeholder | [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) | **Open** (created 2026-06-12, updated today) |
| **High** | Agent-scoped `ncl tasks` blind to pre-2.1.54 legacy sessions (only matches `messaging_group_id IS NULL AND thread_id LIKE 'sys_%'`) | [#3281](https://github.com/nanocoai/nanoclaw/pull/3281) | **Open** (fixes #3233) |
| **Medium** | `ncl groups config update` cannot clear nullable scalar — `--model ""` stores empty string not `NULL` | [#3280](https://github.com/nanocoai/nanoclaw/pull/3280) | **Open** |
| **Medium** | Telegram pairing code pasted with spaces rejected | [#3282](https://github.com/nanoclaw/nanoclaw/pull/3282) | **Open** (trivial fix) |
| **Low** | Cross-session context: context rows could push trigger rows out of capped batch (wake fires but work never reaches agent) | [#3254](https://github.com/nanocoai/nanoclaw/pull/3254) | **Open** (architectural fix) |
| **Low** | Outbound delivery picked arbitrary channel row when multiple adapters share `(channel_type, platform_id)` | [#3255](https://github.com/nanocoai/nanoclaw/pull/3255) | **Open** |

**Note:** Discord attachment bug (#2752) is the oldest open regression (2+ months). Legacy session blind spot (#3281) affects CLI tooling for older deployments.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Cross-session context fan-out / DM backfill / echo pruning** | #3257 (core-team, open) | **High** — core multi-session work |
| **Detached conversation lifecycle (`detached_at`)** | #3256 (core-team, open) | **High** — migration 022 ready |
| **Document memory: `save_document` MCP tool (Word/PDF)** | #3278 (merged) | **Done** — Story 1.1 complete; expect fill-in editing next |
| **OpenMail email channel skill** | #1251 (merged) | **Done** — new channel type available |
| **Adapter hot-start after registration** | #3263 (merged) | **Done** — enables dynamic adapter loads |
| **Delivery batch preview hook (prefetch)** | #3264 (merged) | **Done** — extensibility for expensive assets |
| **Unknown-sender `decline_notify` policy** | #3260 (merged) | **Done** — quieter admin experience |
| **Channel card interceptor seam** | #3266 (merged) | **Done** — programmatic registration control |
| **Agent creation suppress notify** | #3265 (merged) | **Done** — wrapper-friendly provisioning |

**Prediction:** Next release will bundle the cross-session context suite (#3257, #3256, #3255, #3254) + document memory Story 1.1 (#3278) + OpenMail skill (#1251). The Discord attachment fix (#2752) and legacy session fix (#3281) are strong candidates for inclusion.

## 7. User Feedback Summary
**No direct user issues/PRs with commentary today.** All visible activity is core-team. Indirect signals from PR scope:
- **Pain point:** Multi-identity bots in same room → arbitrary delivery target (#3255)
- **Pain point:** Context backlog starves agent turns (#3254)
- **Pain point:** No way to clear group config scalars via CLI (#3280)
- **Pain point:** Telegram pairing code UX friction (#3282)
- **Use case:** Email-as-channel via OpenMail (#1251 merged)
- **Use case:** Document memory for RAG/fill-in editing (#3278 merged)
- **Use case:** Quieter unknown-sender handling for DM surfaces (#3260 merged)

Satisfaction signal: Long-standing PRs (#1251, #2752) finally moving suggests maintainer responsiveness to community contributions.

## 8. Backlog Watch — Stale/Needing Attention

| Item | Age | Concern | Link |
|------|-----|---------|------|
| **#2752** Discord inbound attachments broken | 66 days | High-impact regression for Discord users; no merged fix yet | [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) |
| **#3233** (referenced by #3281) Agent-scoped tasks miss legacy sessions | ~30 days (est.) | CLI tooling gap for pre-2.1.54 deployments | [#3281](https://github.com/nanocoai/nanoclaw/pull/3281) |
| **#3254** Two-phase inbound selection (context crowd-out) | 2 days | Architectural fix open; core to scheduling fairness | [#3254](https://github.com/nanocoai/nanoclaw/pull/3254) |
| **#3256** `detached_at` migration (022) | 2 days | Schema change; needs review for backfill strategy | [#3256](https://github.com/nanocoai/nanoclaw/pull/3256) |
| **#3257** Cross-session context fan-out/backfill | 2 days | Largest open feature; touches sessions, delivery, CLI | [#3257](https://github.com/nanocoai/nanoclaw/pull/3257) |

**Recommendation:** Prioritize #2752 (user-facing regression) and #3281 (CLI correctness). The cross-session suite (#3254–#3257) should be reviewed as a batch for consistency.

---

*Digest generated from GitHub data as of 2026-08-17. All links point to `nanocoai/nanoclaw` repository.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-17

## 1. Today's Overview
IronClaw saw moderate maintenance activity over the last 24 hours with **9 PR updates** (2 closed, 7 open) and **1 new issue**. The majority of PR activity is automated dependency maintenance via Dependabot (6 PRs), while the core team delivered a targeted UX fix for Slack onboarding (#7682) and cleaned up retired IronLoop network settings (#7683). No new releases were published. The project remains in steady maintenance mode with a focus on dependency hygiene and incremental UX improvements.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
### Merged / Closed PRs (2)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#7632](https://github.com/nearai/ironclaw/pull/7632) | `chore(deps)` | Bumped 4 `everything-else` dependencies (`base64`, `toml`, `rstest`, `jsonschema`) | Routine dependency maintenance; low risk |
| [#7683](https://github.com/nearai/ironclaw/pull/7683) | `chore` | Removed retired IronLoop `network_access` fields from trusted repo config | Codebase cleanup; no functional change, aligns config with IronLoop v1 schema |

### Noteworthy Open PRs Advancing Features
| PR | Type | Summary | Status |
|----|------|---------|--------|
| [#7682](https://github.com/nearai/ironclaw/pull/7682) | `fix(slack)` | **Delivers unlinked-user connect nudge privately with a one-click connect link** (addresses #7681) | Open — ready for review |
| [#7651](https://github.com/nearai/ironclaw/pull/7651) | `feat(automations)` | Adds deterministic no-result suppression for automations; requires `trigger_create` to declare `result_delivery` intent | Open — large scope (XL), low risk |
| [#7680](https://github.com/nearai/ironclaw/pull/7680) | `chore(agents)` | Nightly refresh of codebase knowledge graph bootstrap snapshot | Open — CI/infrastructure |

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [Issue #7681](https://github.com/nearai/ironclaw/issues/7681) | **New enhancement** (0 comments, 0 👍) | **Slack onboarding privacy & friction**: Unlinked users receive a public “connect your account” reply in shared channels, leaking presence and forcing a manual multi-step flow. Users need a **private, one-click connect experience**. |
| [PR #7682](https://github.com/nearai/ironclaw/pull/7682) | **Opened today**, linked to #7681 | Direct fix for the above — implements private ephemeral message + deep link to IronClaw web app with pre-filled context. |
| [PR #7651](https://github.com/nearai/ironclaw/pull/7651) | **Updated today**, XL scope | **Automation noise control**: Teams want automations to stay silent unless a meaningful result exists (match/change/result), reducing notification fatigue. |

## 5. Bugs & Stability
**No new bug reports, crashes, or regressions** filed in the last 24 hours. The only issue (#7681) is a UX enhancement, not a defect. All dependency PRs are labeled `risk: low` and target non-critical crates.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Private, one-click Slack account linking** | Issue #7681 + PR #7682 | **High** — PR already open, small scope, direct user pain point |
| **Deterministic automation result suppression** | PR #7651 | **Medium** — XL scope but low risk; addresses notification fatigue for power users |
| **IronLoop config modernization** | PR #7683 (merged) | **Done** — cleanup complete, no further action needed |
| **Dependency modernization (base64, toml, tokio-tungstenite, WASM tooling, GitHub Actions)** | 6 Dependabot PRs | **Ongoing** — routine, will land incrementally as CI passes |

## 7. User Feedback Summary
- **Pain point**: Slack users in shared channels see “connect your account” messages not meant for them, and the subsequent linking flow is manual and context-less (#7681).
- **Desired outcome**: Private ephemeral reply + a single-click deep link that carries context into the IronClaw web app.
- **No dissatisfaction signals** beyond this specific onboarding flow; no stability complaints.

## 8. Backlog Watch
| Item | Age | Why It Needs Attention |
|------|-----|------------------------|
| [PR #7020](https://github.com/nearai/ironclaw/pull/7020) `chore(deps): bump tokio-tungstenite 0.29→0.30` | **15 days** (opened 2026-08-02) | Core WebSocket dependency; may carry breaking API changes. Still open despite low risk label — verify CI and merge. |
| [PR #7406](https://github.com/nearai/ironclaw/pull/7406) `chore(deps): bump actions group` | **8 days** (opened 2026-08-09) | Updates `claude-code-action`, `setup-node`, `rust-cache`, `docker/login-action` — CI infrastructure drift risk if left stale. |
| [PR #7262](https://github.com/nearai/ironclaw/pull/7262) `chore(deps): bump wasm group` | **12 days** (opened 2026-08-05) | WASM toolchain updates (`wit-component`, `wit-parser`); relevant if WASM targets are used in production. |
| [PR #7651](https://github.com/nearai/ironclaw/pull/7651) `feat(automations): deterministic no-result suppression` | **3 days** (opened 2026-08-14) | XL scope, touches automation delivery logic — needs design review and test validation before merge. |

---

**Health Indicators**  
- 🟢 **Dependency hygiene**: Active (6 Dependabot PRs in flight)  
- 🟢 **UX iteration**: Targeted fix for top onboarding friction (#7682)  
- 🟢 **Codebase hygiene**: Dead config removed (#7683)  
- 🟡 **PR throughput**: 7 open PRs aging >3 days — consider triage to prevent backlog buildup  
- 🟢 **Stability**: Zero regression reports

*Generated from GitHub data as of 2026-08-17. All links point to live GitHub items.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-17

## 1. Today's Overview
LobsterAI shows **moderate maintenance activity** with 27 total updates (10 issues, 17 PRs) in the last 24 hours, though nearly all items are **stale April 2026 entries** simply refreshed on 2026-08-16. No new releases were published. The project is in a **security hardening phase**—three critical security PRs (#1831, #1832, #1833) were merged, addressing token leakage, IPC privilege escalation, and `shell.openExternal` scheme validation. Meanwhile, core cowork/agent features (TTS, agent import/export, image avatars) remain in open PR limbo since April. Community-reported bugs (DeepSeek V4 schema rejection, write tool failures, diff breakage) are accumulating without fixes.

## 2. Releases
**No new releases** in the last 24 hours. The last version remains unversioned in this dataset.

## 3. Project Progress — Merged / Closed PRs (9)
| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#1831](https://github.com/netease-youdao/LobsterAI/pull/1831) | main, im | **Security**: sanitize sensitive logs (Bearer tokens, API keys, auth codes) in main process & IM modules | 🔒 Critical — prevents credential leakage to user disk |
| [#1832](https://github.com/netease-youdao/LobsterAI/pull/1832) | main | **Security**: add key-level ACL to `store:*` IPC; narrow generic `ipcRenderer` bridge | 🔒 Critical — blocks XSS/model-injection token theft & overwrite |
| [#1833](https://github.com/netease-youdao/LobsterAI/pull/1833) | main | **Security**: enforce scheme allow-list on `shell.openExternal` (block `file:`, `javascript:`, `data:`) | 🔒 High — mitigates local file enumeration / code execution via malicious markdown |
| [#1835](https://github.com/netease-youdao/LobsterAI/pull/1835) | renderer | **Bugfix**: remove duplicate system error message on `continueSession` failure | 🐛 UX — eliminates double error toast |
| [#1690](https://github.com/netease-youdao/LobsterAI/pull/1690) | renderer, im | **UX**: add confirmation modal before deleting IM instances (DingTalk, Lark, QQ) | ✨ UX — prevents accidental config loss |
| [#1691](https://github.com/netease-youdao/LobsterAI/pull/1691) | renderer | **Feature**: agent template import/export (JSON) with UI | ✨ Feature — enables agent sharing across devices/users |
| [#1693](https://github.com/netease-youdao/LobsterAI/pull/1693) | renderer, cowork | **UX/Feature**: improve model-setup entry in ModelSelector; preserve draft input on send | ✨ UX — reduces new-user friction & content loss |
| [#1715](https://github.com/netease-youdao/LobsterAI/pull/1715) | main, openclaw | **Bugfix**: inject `session_id` into OpenClaw proxy requests to LobsterAI server | 🐛 Core — fixes multi-session request attribution |
| [#1760](https://github.com/netease-youdao/LobsterAI/pull/1760) | renderer, main, openclaw | **Feature**: support image avatars for custom agents (alongside emoji) | ✨ Feature — richer agent personalization |

**Net velocity**: 9 PRs closed/merged (all stale April work), 0 new feature PRs opened in August except #2452.

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) | Issue | 8 | 0 | **DeepSeek V4 model schema rejection** — provider rejects request payload; blocks users on latest model |
| [#1796](https://github.com/netease-youdao/LobsterAI/issues/1796) | Issue | 3 | 0 | **Write/Edit tool failure** — persistent across updates; core agent capability broken |
| [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) | Issue | 3 | 0 | **Port/process conflict** with “智企帝王蟹” (enterprise crab) — gateway auth failure when both apps run |
| [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) | Issue | 2 | 0 | **Diff rendering broken** — `extractDiffFromToolInput` bug in `app.asar`; edit diffs not shown |
| [#1797](https://github.com/netease-youdao/LobsterAI/issues/1797) | Issue | 2 | 1 | **Bulk conversation deletion** — users want to prune context for token efficiency |

**Pattern**: Users are hitting **model compatibility**, **core tool reliability**, and **multi-app coexistence** issues. The DeepSeek V4 failure (#1813) and write-tool regression (#1796) are the most visible blockers.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| 🔴 **Critical** | [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) DeepSeek V4 request schema rejected | Open (stale) | ❌ No |
| 🔴 **Critical** | [#1796](https://github.com/netease-youdao/LobsterAI/issues/1796) Write/Edit tools always fail | Closed (stale) | ❌ No (closed without fix) |
| 🟠 **High** | [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) Diff extraction bug in `extractDiffFromToolInput` | Open (stale) | ❌ No |
| 🟠 **High** | [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) Gateway port conflict with companion app | Open (stale) | ❌ No |
| 🟡 **Medium** | [#1714](https://github.com/netease-youdao/LobsterAI/issues/1714) Win11 installer shows blank/invalid icons | Open (stale) | ❌ No |
| 🟡 **Medium** | [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) Outlook/OAuth2 email auth unsupported | Open (stale) | ❌ No |

**Observation**: Three critical/high bugs have **no associated fix PRs**. #1796 was closed stale without resolution—likely a process gap.

## 6. Feature Requests & Roadmap Signals
| Request | Issue/PR | Signals |
|---------|----------|---------|
| **Conversation bulk delete** | [#1797](https://github.com/netease-youdao/LobsterAI/issues/1797) (2 👍) | High user value for context management; low implementation cost |
| **Dynamic temperature control per chat** | [#1688](https://github.com/netease-youdao/LobsterAI/issues/1688) | Power-user ask; aligns with “model parameter presets” trend |
| **TTS read-aloud for AI replies** | [#1682](https://github.com/netease-youdao/LobsterAI/pull/1682) (open since Apr) | PR ready, uses Web Speech API (zero dep); likely next UI polish |
| **Skeleton loading & empty states** | [#1769](https://github.com/netease-youdao/LobsterAI/pull/1769), [#1770](https://github.com/netease-youdao/LobsterAI/pull/1770) | UX consistency PRs stalled; easy wins for perceived performance |
| **Agent image avatars** | [#1760](https://github.com/netease-youdao/LobsterAI/pull/1760) (merged) | ✅ Done — signals move toward richer agent personas |
| **Scheduled task notification copy fix** | [#1751](https://github.com/netease-youdao/LobsterAI/issues/1751) | Minor localization bug; quick fix |

**Prediction**: Next version will likely ship **TTS (#1682)**, **skeleton/empty-state polish (#1769/#1770)**, and **conversation delete (#1797)** — all low-risk, high-visibility. DeepSeek V4 fix requires provider-side coordination.

## 7. User Feedback Summary
- **Pain points**:  
  - Core tools (write/edit/diff) unreliable → erodes trust in agent autonomy.  
  - Model updates break compatibility without clear migration path (DeepSeek V4).  
  - Multi-app environment (LobsterAI + 智企帝王蟹) not supported — port/process isolation missing.  
  - Windows install UX flawed (blank icons).  
  - Enterprise auth (OAuth2/Outlook) unsupported — blocks corporate adoption.
- **Positive signals**:  
  - Security hardening acknowledged (no public complaints on merged PRs).  
  - Agent import/export (#1691) and image avatars (#1760) welcomed for team sharing.  
  - ModelSelector UX fix (#1693) reduces new-user drop-off.
- **Sentiment**: **Cautious** — users report showstoppers but see security/UX investment; frustration over stale bug closure (#1796).

## 8. Backlog Watch — Stale Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) | 10 days | **Only August PR** — fixes provider persistence for slashed model IDs (e.g., `deepseek-ai/DeepSeek-V4-Flash`); directly relates to #1813. **Review urgently.** |
| [#1682](https://github.com/netease-youdao/LobsterAI/pull/1682) | 4 months | TTS feature complete, zero deps; improves accessibility. Merge or close with reason. |
| [#1765](https://github.com/netease-youdao/LobsterAI/pull/1765) | 4 months | Dependabot bump `@headlessui/react` 1.7 → 2.2; may contain breaking changes. Test & merge or pin. |
| [#1769](https://github.com/netease-youdao/LobsterAI/pull/1769), [#1770](https://github.com/netease-youdao/LobsterAI/pull/1770) | 4 months | Skeleton/empty-state polish — low risk, high UX ROI. |
| [#1773](https://github.com/netease-youdao/LobsterAI/pull/1773) | 4 months | Trivial i18n fix (missing “edit” key). **Merge immediately.** |
| [#1683](https://github.com/netease-youdao/LobsterAI/pull/1683) | 4 months | URL validation before remote skill import — prevents confusing error. |
| [#1707](https://github.com/netease-youdao/LobsterAI/pull/1707) | 4 months | Clears home draft on agent switch — UX bug fix. |

**Recommendation**: Triage the **August PR (#2452)** first (model compatibility), then batch-merge the **four trivial/complete UI PRs (#1773, #1769, #1770, #1707)** to clear backlog and ship visible polish. Schedule DeepSeek V4 investigation and write-tool root-cause analysis.

---

*Digest generated from GitHub data as of 2026-08-16 23:59 UTC. Links point to netease-youdao/LobsterAI.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-17

## 1. Today's Overview
Moltis showed focused maintenance velocity over the last 24 hours: five PRs were merged or closed, addressing a flaky integration test, a compilation regression, a vault unsealing consistency bug, a long-standing CalDAV time-range issue, and a channel activity-log visibility feature. Two new issues surfaced—a heartbeat scheduler bug that ignores active-hours configuration and a CI format gate failure caused by two files exceeding the 1,500-line limit. One feature PR adding MiniMax Code as an ACP agent remains open. No releases were cut. The project appears healthy: CI breakage was caught and fixed quickly, test flakiness was resolved with a deterministic clock, and the backlog of older PRs (#1093, #1147) is being cleared.

## 2. Releases
No new releases published today.

## 3. Project Progress (Merged/Closed PRs)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#1201](https://github.com/moltis-org/moltis/pull/1201) | **fix** | Thread `start_background_tasks` into the memory runtime builder to resolve a compilation error on `main` (E0425). | Unblocks CI and local builds; required for #1203 to run. |
| [#1203](https://github.com/moltis-org/moltis/pull/1203) | **test** | Run the push fanout test on a paused clock (tokio `time::pause`) to eliminate flakiness reported in #1193. | Stabilizes full-suite test runs on macOS and CI. |
| [#1186](https://github.com/moltis-org/moltis/pull/1186) | **fix** | Normalize recovery phrase (strip dashes, uppercase) before hashing so stored hashes match the derivation logic used during unsealing. | Fixes vault unsealing for phrases entered with dashes or lowercase. |
| [#1093](https://github.com/moltis-org/moltis/pull/1093) | **feat** | Add per-account/channel/user `activity_log` visibility settings (`all`, `errors_only`, `off`) with priority overrides. | Gives admins granular control over channel reply logging noise. |
| [#1147](https://github.com/moltis-org/moltis/pull/1147) | **fix** | Honor `list_events` time ranges via RFC 4791 `calendar-query` REPORT instead of fetching all resources; normalize bounds to UTC. | Reduces CalDAV sync payload and fixes recurring-event filtering. |

## 4. Community Hot Topics
No issues or PRs have comments or reactions in the last 24 h (all show `Comments: 0` / `👍: 0`). The most consequential items by engineering impact are:
- **#1205** (heartbeat bug) — runtime correctness issue affecting scheduling.
- **#1202** (CI format gate) — blocks merge queue until two files are refactored.
- **#1204** (MiniMax Code ACP agent) — new provider integration, likely to attract external attention once merged.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#1205](https://github.com/moltis-org/moltis/issues/1205) Heartbeat ignores configured active hours and runs continuously | Open | None yet |
| **Medium** | [#1193](https://github.com/moltis-org/moltis/issues/1193) Flaky push fanout timeout test under full-suite load | **Closed** | Fixed by [#1203](https://github.com/moltis-org/moltis/pull/1203) (paused clock) |
| **Low** | [#1202](https://github.com/moltis-org/moltis/issues/1202) Format CI gate red: two files >1500 lines | Open | None yet (requires refactor of `store.rs` and `admin.rs`) |

## 6. Feature Requests & Roadmap Signals
- **MiniMax Code ACP agent** ([#1204](https://github.com/moltis-org/moltis/pull/1204)) — adds `acp-minimax-code` external-agent kind, executable detection, registry entry, and settings UI fixtures. Signals continued expansion of the ACP provider ecosystem; likely to ship in next minor release.
- **Channel activity-log visibility** ([#1093](https://github.com/moltis-org/moltis/pull/1093), now merged) — multi-level override hierarchy (`user > channel > account`) indicates demand for fine-grained observability controls in multi-tenant deployments.

## 7. User Feedback Summary
No direct user comments in the last 24 h. Implicit feedback from issues:
- **#1205** suggests users rely on active-hours scheduling for heartbeat-driven workflows (e.g., cost control, noise reduction) and expect strict adherence.
- **#1202** reflects contributor friction with the 1,500-line lint; large generated or monolithic modules (`store.rs`, `admin.rs`) are pushing the limit.

## 8. Backlog Watch
| Item | Age | Concern |
|------|-----|---------|
| [#1205](https://github.com/moltis-org/moltis/issues/1205) Heartbeat active-hours bug | 1 day | Runtime correctness; no fix PR yet. |
| [#1202](https://github.com/moltis-org/moltis/issues/1202) CI format gate failure | 1 day | Blocks `main` merges; needs refactor of two large files. |
| [#1204](https://github.com/moltis-org/moltis/pull/1204) MiniMax Code ACP agent | 1 day | Open feature PR; requires review for new provider integration. |
| [#1193](https://github.com/moltis-org/moltis/issues/1193) (closed) | 4 days | Flaky test fixed, but monitor for regressions in push fanout logic. |

---
*Digest generated from GitHub data as of 2026-08-17 00:00 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-17

## 1. Today's Overview
CoPaw shows high development velocity with **23 total GitHub activities** (12 issues, 11 PRs) in the last 24 hours. The project is in active maintenance mode with v2.1.0 recently released, but several critical regressions have surfaced: a **tool-call crash affecting all agents** (#7063), **chat history truncation** after ~7 turns (#7065), and **cron job update failures** (#7048). Two PRs were merged/closed today addressing the cron bug, while 9 PRs remain open — many from first-time contributors — indicating healthy community engagement. No new release was cut today.

## 2. Releases
**No new releases** in the last 24 hours. Current stable version: **v2.1.0**.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Title | Impact |
|----|-------|--------|
| [#7064](https://github.com/agentscope-ai/QwenPaw/pull/7064) | `fix(cli): sync top-level text on cron update --text for agent jobs` | **Merged** — Fixes #7048: cron `update --text` now persists the prompt for agent-type jobs (top-level `text` field synced with `request.input[0].content[0].text`). |
| [#7055](https://github.com/agentscope-ai/QwenPaw/pull/7055) | `fix(cli): sync top-level text on agent cron --text update` | **Closed** (duplicate/alternative fix for #7048). |

**Net progress**: The cron update regression is resolved. Other open PRs target video rendering, OAuth token persistence, session history images, and background task APIs.

## 4. Community Hot Topics (Most Active Items)
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) | Bug (CLOSED) | 3 | **Critical crash**: `async for` on coroutine in `_execute_tool_call` — blocks all agent tool use. Fixed in v2.1.0? (Issue closed same day). |
| [#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003) | Proposal (CLOSED) | 3 | External vendor (ViBo) pitching encrypted memory layer — signals demand for **persistent, cost-efficient agent memory**. |
| [#7048](https://github.com/agentscope-ai/QwenPaw/issues/7048) | Bug (CLOSED) | 2 | Cron `update --text` silently fails for agent jobs — **CLI/API consistency** for automation workflows. |
| [#6471](https://github.com/agentscope-ai/QwenPaw/issues/6471) | Bug (CLOSED) | 2 | APScheduler misfires after event-loop idle — **reliability of scheduled agents** in long-running deployments. |
| [#7062](https://github.com/agentscope-ai/QwenPaw/issues/7062) | Feature | 1 | **Per-agent/session `reasoning_effort`** — users need granular control over thinking depth per role, not just per model. |

**Underlying theme**: Users are pushing CoPaw into production automation (cron, multi-agent, long sessions) and hitting reliability gaps in scheduling, state persistence, and model control granularity.

## 5. Bugs & Stability (Reported Today, Ranked by Severity)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **🔴 Critical** | [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063): Agent crashes on *every* tool call (`TypeError: async for on coroutine`) | **Closed** (likely hotfixed in v2.1.0) | — |
| **🔴 Critical** | [#7065](https://github.com/agentscope-ai/QwenPaw/issues/7065): Chat history truncates to last 3–4 turns after ~7 rounds; scrollback broken | **Open** | None yet |
| **🟠 High** | [#7076](https://github.com/agentscope-ai/QwenPaw/issues/7076): `qwenpaw-creator` LLM config 404 on v2.1.0 | **Open** | None yet |
| **🟠 High** | [#7074](https://github.com/agentscope-ai/QwenPaw/issues/7074): Frequent crashes requiring page refresh to recover | **Open** | None yet |
| **🟡 Medium** | [#7048](https://github.com/agentscope-ai/QwenPaw/issues/7048): Cron `update --text` returns success but prompt unchanged (agent jobs) | **Closed** | [#7064](https://github.com/agentscope-ai/QwenPaw/pull/7064) ✅ |
| **🟡 Medium** | [#7069](https://github.com/agentscope-ai/QwenPaw/pull/7069): Historical `data:` URL images don't render on session reload | **Open (PR)** | [#7069](https://github.com/agentscope-ai/QwenPaw/pull/7069) |
| **🟡 Medium** | [#7070](https://github.com/agentscope-ai/QwenPaw/pull/7070): `view_video` silent failure on OpenAI Responses API path | **Open (PR)** | [#7070](https://github.com/agentscope-ai/QwenPaw/pull/7070) |
| **🟡 Medium** | [#7071](https://github.com/agentscope-ai/QwenPaw/pull/7071): Hardcoded 2MB inline cap breaks `view_video` for 2–50MB videos | **Open (PR)** | [#7071](https://github.com/agentscope-ai/QwenPaw/pull/7071) |
| **🟡 Medium** | [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066): Rotated OAuth2 refresh tokens not persisted (breaks long-lived MCP servers) | **Open (PR)** | [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) |

## 6. Feature Requests & Roadmap Signals
| Request | Issue/PR | Likelihood for Next Version | Rationale |
|---------|----------|----------------------------|-----------|
| **Per-agent/session `reasoning_effort`** | [#7062](https://github.com/agentscope-ai/QwenPaw/issues/7062) | 🟢 High | Aligns with PR #6302 (unified model routing/controls); strong multi-agent use case. |
| **Detailed cron job run logs** (start/duration/end/result) | [#7075](https://github.com/agentscope-ai/QwenPaw/issues/7075) | 🟢 High | Operational visibility for production schedules; low complexity. |
| **Skill name deduplication** (workspace vs built-in) | [#7073](https://github.com/agentscope-ai/QwenPaw/issues/7073) | 🟢 High | Prevents duplicate loading; clean architecture fix. |
| **C# / shader language support in file viewer** | [#7068](https://github.com/agentscope-ai/QwenPaw/issues/7068) | 🟡 Medium | Game-dev niche; easy syntax-highlighting addition. |
| **Plugin API: `system_prompt` permission** (hide corporate prompts) | [#7052](https://github.com/agentscope-ai/QwenPaw/issues/7052) | 🟡 Medium | Enterprise need; requires API surface change. |
| **Background chat task list API** | [#7072](https://github.com/agentscope-ai/QwenPaw/pull/7072) | 🟢 High | PR open; enables multi-agent coordination UX. |
| **Native DataPaw app runtime** | [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | 🔵 Low (major) | Large PR, separate infra repo; likely v2.2+ milestone. |

## 7. User Feedback Summary
| Pain Point | Frequency | Example Voice |
|------------|-----------|---------------|
| **Tool-call crashes block all agent work** | 1 critical issue | "Agent 执行工具调用时必现崩溃" — every tool call fails (#7063) |
| **Chat history loss after few turns** | 1 high-severity | "After 7 rounds, only see last 3–4; scrollback broken" (#7065) |
| **UI instability requiring refresh** | 1 high-severity | "频次高发~ 需要刷新页面才能重启" (#7074) |
| **Creator/designer tooling broken** | 1 high-severity | "llm模型配置报错404" on v2.1.0 (#7076) |
| **Cron reliability & visibility gaps** | 2 issues + 1 PR | "长时间空闲后 misfire" (#6471), "运行细节不可见" (#7075) |
| **Video/media handling broken** | 2 PRs | 2MB cap, silent failures on Responses API (#7070, #7071) |
| **OAuth token rotation breaks long-lived MCP** | 1 PR | "rotated refresh_token never persisted" (#7066) |

**Satisfaction signal**: Users are building real workflows (cron, multi-agent, game-dev, enterprise plugins) but hit **v2.1.0 regressions** in core loops (tool calls, history, scheduling). First-time contributor PRs show community willingness to fix — if maintainers review promptly.

## 8. Backlog Watch (Stale/Important Items Needing Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 27 days | **Massive unification PR**: provider discovery, model metadata, routing, agent controls. Blocked on review; enables #7062 and future model flexibility. |
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | 5 days | **DataPaw native runtime** — strategic expansion; needs architectural review. |
| [#6975](https://github.com/agentscope-ai/QwenPaw/pull/6975) | 4 days | **Context-usage ring update after `/compact`** — UX fix for token-aware users. |
| [#6471](https://github.com/agentscope-ai/QwenPaw/issues/6471) | 22 days | **APScheduler misfire root cause** — closed but no fix PR linked; may recur. |
| [#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003) | 4 days | **Memory layer proposal** — closed as external pitch, but signals unmet need for persistent agent memory. |

---

**Health Indicator**: 🟡 **Caution** — High velocity but v2.1.0 introduced critical regressions (tool calls, history, creator). 9 open PRs (6 first-time) show community momentum; **maintainer review bandwidth is the bottleneck**. Prioritize merging #7064, #7069–#7071, #7066, #7072 and triaging #7065, #7076, #7074 for hotfix release.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-17

## 1. Today's Overview
ZeroClaw shows **high architectural activity** with 16 issues and 50 PRs updated in the last 24 hours, though only 4 PRs were merged/closed — indicating a project in deep design/validation phase rather than rapid shipping. The issue queue is dominated by **RFCs (Request for Comments)** covering critical architecture: Chat Completions API compatibility, unified attachments, security posture, telemetry, and provenance for agent turns. Several high-severity bugs (S1/S2) affect CI stability, provider configuration, and SOP validation. No new release was cut.

## 2. Releases
**None** — No new versions published in this period.

---

## 3. Project Progress (Merged/Closed in Last 24h)

| PR / Issue | Title | Type | Summary |
|------------|-------|------|---------|
| [#9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580) | fix(security): harden built-in HTTP egress on the shared network guard | Security / Bug | **Closed**. Hardens built-in HTTP egress boundary; moves network-classification primitives to `zeroclaw-infra::net_guard` for reuse by plugin egress work. Rejects non-global IPv4/IPv6 addresses. Foundation for plugin egress policy (ADR-013). |
| [#9953](https://github.com/zeroclaw-labs/zeroclaw/issues/9953) | [Bug]: SOP step schema validation rejects double-encoded output | Bug | **Closed**. SOP step validation now unwraps double-encoded JSON output objects instead of rejecting them. |
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | [Task]: runtime-written executable test fixtures hit ETXTBSY | Test / Bug | **Open but tracked**. Parallel runtime gate flakiness from test fixtures writing executables post-thread-spawn. |
| [#10006](https://github.com/zeroclaw-labs/zeroclaw/issues/10006) | [Task]: endpoint_lock_is_held_through_guard_cleanup flakes | Test / Bug | **In progress**. Race in `rpc::local::tests::endpoint_lock_is_held_through_guard_cleanup` under parallel gate. |

> **Net signal**: Security hardening (#9580) landed; two CI flakiness tasks (#9965, #10006) are actively worked; SOP bug (#9953) fixed.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Area | Core Need |
|------|----------|------|-----------|
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) **RFC: ZeroClaw Chat Completions profile** | 22 | Gateway / Runtime / Architecture | **OpenAI-compatible Chat Completions API** so ZeroClaw agents work with Open WebUI, LobeChat, Continue.dev, Aider, LangChain, OpenAI SDK. High risk, high priority (P2). |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) **RFC: Unified attachment architecture** | 17 | Channel / Gateway / Security / Web | Single attachment model across web chat and channels (Matrix, Telegram, etc.). Drafted with Codex; needs maintainer sponsor. |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) **RFC: Provenance & conversation binding for internal agent turns** | 14 | Cron / Runtime | Define identity, binding, and reply contract for agent-initiated turns (not user-triggered). Revision 2 after ratification correction. |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) **RFC: Security posture, credential boundaries, universal ingress policy** | 14 | Config / Runtime / Security | Consolidate credential handling, runtime isolation, ingress trust, sandboxing, tool approval, channel auth into inspectable, maintainable policy. |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) **RFC: Lighter core via external integrations** | 14 | Skills / Tool / MCP | Move long-tail integrations out of core to reduce config, security, compatibility surface. MCP as extension point. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) **Tracker: Maintainer decision queue for RFCs** | 13 | Process | Active decision queue for RFCs/design issues needing maintainer attention before accept/reject/defer. |
| [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) **RFC: Staged opt-in product telemetry** | 6 | Observability / Security / Architecture | Privacy-preserving telemetry with operator-reviewed reports to inform feature investment/removal decisions. |

> **Pattern**: The project is **design-heavy** — 7 of top 8 active items are RFCs. Contributors are aligning on **interop (OpenAI API), security foundations, and extensibility** before shipping user-facing features.

---

## 5. Bugs & Stability (Reported/Updated Today, Ranked by Severity)

| Severity | Item | Component | Status | Fix PR? |
|----------|------|-----------|--------|---------|
| **S1 — Workflow Blocked** | [#10042](https://github.com/zeroclaw-labs/zeroclaw/issues/10042) `bug(ci): MSRV system dependency installation can consume job timeout` | CI / Tooling | Open | No |
| **S2 — Degraded Behavior** | [#9850](https://github.com/zeroclaw-labs/zeroclaw/issues/9850) `llm_task builds provider via legacy factory, losing alias-specific config (Azure/OAuth/requires_openai_auth)` | Tools / Provider / Runtime | Accepted | No |
| **S2** | [#10045](https://github.com/zeroclaw-labs/zeroclaw/issues/10045) `Persisted image markers retain temporary source paths and repeatedly warn` | Runtime / Daemon | Open | No |
| **S2** | [#9953](https://github.com/zeroclaw-labs/zeroclaw/issues/9953) `SOP step schema validation rejects double-encoded output` | Runtime / Daemon / SOP | **Closed** | Fixed in follow-up |
| **Medium / Flaky** | [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) `ETXTBSY on executable test fixtures under parallel gate` | Tests / Cron / Runtime | In Progress | Tracking |
| **Medium / Flaky** | [#10006](https://github.com/zeroclaw-labs/zeroclaw/issues/10006) `endpoint_lock_is_held_through_guard_cleanup flakes under parallel gate` | Tests / Runtime | In Progress | Tracking |

> **CI health risk**: #10042 (MSRV job timeout) blocks merges; two parallel-gate flakes (#9965, #10006) cause red required checks on unrelated PRs.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **OpenAI Chat Completions API** | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) (22 comments, P2, high risk) | **High** — broad ecosystem demand; multiple clients named |
| **Unified attachment architecture** | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) (17 comments, P2) | **High** — crosses web + channels; security-sensitive |
| **Plugin egress policy (deny-by-default + grant ceremony)** | [#9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582), [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584), [#9137](https://github.com/zeroclaw-labs/zeroclaw/pull/9137) | **Very High** — 3 stacked PRs, security-critical, ADR-013 backed |
| **SOP daemon-owned control plane (5/5)** | [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) (Tracker) | **High** — 13 capabilities tracked; multi-PR rollout |
| **Native Hailo-Ollama provider** | [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | **Medium** — niche hardware; opt-in provider |
| **Telemetry with operator review** | [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) | **Medium** — depends on privacy/legal consensus |
| **Per-user Telegram group sessions** | [#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) | **Medium** — channel-specific UX improvement |

> **Next-version predictors**: Plugin egress policy (already in stacked PRs), Chat Completions RFC (high external demand), SOP milestone (tracked epic). Attachments RFC needs more design convergence.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point / Use Case | Evidence |
|------------------------|----------|
| **Cannot use ZeroClaw agents with Open WebUI, LobeChat, Continue.dev, Aider, LangChain** | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603): "Clients that speak OpenAI Chat Completions protocol… currently unsupported" |
| **Attachment handling inconsistent across web chat vs. Matrix/Telegram/other channels** | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488): "Unified attachment architecture for web chat and channels" |
| **No visibility into feature usage — maintainers decide blind** | [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621): "make support, removal, and investment decisions without knowing whether released features are used" |
| **SOP output validation too strict (double-encoded JSON rejected)** | [#9953](https://github.com/zeroclaw-labs/zeroclaw/issues/9953): fixed but shows real-world agent output quirks |
| **Azure/OAuth/OpenAI-auth config lost in `llm_task` tool** | [#9850](https://github.com/zeroclaw-labs/zeroclaw/issues/9850): legacy factory drops alias-specific settings |
| **CI flakes block unrelated PRs** | [#10006](https://github.com/zeroclaw-labs/zeroclaw/issues/10006): "red required check does not appear on unrelated PRs" |
| **TodoWrite tracker in ZeroCode has no visible close button** | [#9529](https://github.com/zeroclaw-labs/zeroclaw/issues/9529): UX gap for keyboard-only users |
| **Queued ZeroCode messages hard to recover** | [#10044](https://github.com/zeroclaw-labs/zeroclaw/issues/10044): "promote, copy, recover without moving back through composer" |

> **Voice of user**: Strong demand for **standard API interop**, **cross-channel consistency**, and **debuggability/observability**. Internal UX (ZeroCode, SOP) has rough edges affecting power users.

---

## 8. Backlog Watch (Long-Unanswered / Stalled High-Value Items)

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) **RFC: Lighter core via external integrations** | ~4 months (Apr 27) | Reduces core bloat; MCP as extension point; 14 comments but no decision | Needs maintainer architectural call on "what stays in core" |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) **RFC: Provenance & conversation binding for internal turns** | ~3 months (May 26) | Foundational for agent autonomy; revised Aug 5 | Awaits maintainer review on identity/binding model |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) **RFC: Security posture & universal ingress policy** | ~3 months (May 27) | Consolidates 10+ security controls into inspectable policy | Broad scope; needs security-owner champion |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) **RFC: Chat Completions profile** | ~1.5 months (Jul 2) | Highest external demand; 22 comments | High risk (P2); needs gateway/runtime alignment |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) **RFC: Unified attachment architecture** | ~3 weeks (Jul 28) | Cross-cutting UX + security; Codex-drafted | Needs human sponsor per RFC process |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) **Tracker: Maintainer decision queue** | ~1.5 months (Jul 4) | **Meta-blocker** — 13 comments but queue not draining | Maintainer bandwidth; no clear triage cadence |

> **Critical observation**: The **maintainer decision queue (#8692) is the bottleneck**. Six RFCs ≥3 weeks old await rulings. Without a triage rhythm, design work piles up while CI flakes (#10042, #9965, #10006) erode merge velocity.

---

## Health Indicators Summary

| Dimension | Signal | Assessment |
|-----------|--------|------------|
| **Release Cadence** | 0 releases this period | ⚠️ Stalled — design-heavy phase |
| **Merge Velocity** | 4/50 PRs merged (8%) | ⚠️ Low — RFCs + CI flakes blocking |
| **CI Reliability** | 3 active flake tasks + MSRV timeout | 🔴 Critical — blocks all PRs |
| **Security Posture** | Active hardening (#9580, #9582, #9606, #8713) | ✅ Strong investment |
| **Community Engagement** | High comment counts on RFCs (14–22) | ✅ Deep technical discourse |
| **Backlog Age** | 6 RFCs >3 weeks in decision queue | 🔴 Process bottleneck |
| **Bug Severity** | 1 S1 (CI), 3 S2 (provider, images, SOP) | 🟡 Manageable if triaged |

**Bottom line**: ZeroClaw is **architecturally ambitious but process-constrained**. The project invests correctly in security foundations and interop design, but **maintainer decision throughput** and **CI stability** are the limiting factors for delivery. Next milestone likely hinges on clearing the RFC queue (#8692) and stabilizing the parallel test gate.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*