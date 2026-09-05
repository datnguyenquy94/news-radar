# OpenClaw Ecosystem Digest 2026-09-05

> Issues: 213 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-05 04:04 UTC

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

# OpenClaw Project Digest — 2026-09-05

## 1. Today's Overview
OpenClaw shows **exceptionally high velocity** with 213 issues and 500 PRs updated in the last 24 hours (151 merged/closed). The project is in a heavy stabilization phase: no new release today, but the volume of P0/P1 bug fixes, session-state regressions, and transport-level regressions (Codex, Slack, Matrix, Discord, iMessage) indicates a concerted push to resolve release-blocking regressions across the gateway, agent runtimes, and channel plugins. The backlog contains several "platinum hermit" (🐚) and "diamond lobster" (🦞) rated issues — the project's highest severity tiers — signaling that core reliability (session continuity, message delivery, provider auth) remains the top priority over new features.

## 2. Releases
**No new releases published today.** The latest stable remains `2026.8.1`; beta `2026.8.1-beta.2` is also referenced in open issues. Several open beta-blocker issues (e.g., #124133, #104721) suggest a patch or beta release is imminent once critical regressions land.

## 3. Project Progress (Merged/Closed PRs — 151 today)
Key merged/closed PRs advancing stability and developer experience:

| PR | Area | Summary |
|----|------|---------|
| [#138184](https://github.com/openclaw/openclaw/pull/138184) | Codex / Sessions | **Closed.** Preserves native Codex thread across compacted session rotation (fixes #137914). Addresses session continuity for Codex users. |
| [#138820](https://github.com/openclaw/openclaw/pull/138820) | Codex / Gateway | **Closed.** Rejects stale control commands after session rollover; supersedes part of #138184. |
| [#138828](https://github.com/openclaw/openclaw/pull/138828) | OpenAI Responses | **Closed.** Normalizes tiny output budgets (1–15 tokens) to avoid HTTP 400. |
| [#138841](https://github.com/openclaw/openclaw/pull/138841) | CI / Labeler | **Closed.** Fixes labeler failure when PR already has 100 labels (GitHub max). |
| [#137756](https://github.com/openclaw/openclaw/pull/137756) | Browser / Security | **Open (ready).** Stops sending credentialed CDP `wsUrl` to the model — mitigates credential leakage in browser automation. |
| [#135366](https://github.com/openclaw/openclaw/pull/135366) | Firecrawl | **Open.** Reports unresolvable self-hosted `baseUrl` as DNS failure instead of private-network violation. |
| [#138830](https://github.com/openclaw/openclaw/pull/138830) | Transcripts | **Open.** Preserves capture identity across startup retries; prevents permanent transcript auto-start stall. |
| [#138827](https://github.com/openclaw/openclaw/pull/138827) | Memory / Embeddings | **Open.** Shares typed embedding-cache UPSERT between incremental and full rebuild paths. |
| [#138832](https://github.com/openclaw/openclaw/pull/138832) | Plugins / Perf | **Open.** Avoids repeated installed-record scans in plugin inventory (quadratic → linear). |
| [#138838](https://github.com/openclaw/openclaw/pull/138838) | Models / Plugins | **Open.** Keeps active plugins alive during provider sign-in; prevents "workboard store closed" errors. |

**Theme:** Session continuity (Codex, transcripts), provider hardening (OpenAI, Anthropic), plugin lifecycle safety, and CI/ops robustness.

## 4. Community Hot Topics (Top Issues by Comment Count)
| Issue | Comments | 👍 | Severity | Core Problem |
|-------|----------|----|----------|--------------|
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | 21 | 2 | 🐚 P0 | Codex `PreToolUse` hook spawns CPU-bound `openclaw-hooks` processes (~100% CPU each), stalling gateway RPC. |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | 20 | 4 | 🦞 P1 | Steer mode doesn't inject messages mid-turn; messages queued until turn completes (regression from `KeyedAsyncQueue`). |
| [#104721](https://github.com/openclaw/openclaw/issues/104721) | 17 | 1 | 🐚 P0 | **Closed.** All tool results return literal `"(see attached image)"` instead of actual output — data loss regression. |
| [#87307](https://github.com/openclaw/openclaw/issues/87307) | 15 | 1 | 🦞 P1 | **Closed.** Matrix thread replies sent as normal replies; `/status` and `/model` silent after 2026.5.22 upgrade. |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 15 | 0 | 🦞 P1 | Session transcript projection reconcile livelocks under sustained writes, blocking main thread & all transports. |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) | 14 | 1 | 🦪 P2 | `${XDG_CONFIG_HOME}` not expanded when installing a skill via ClawHub (Docker). |
| [#53763](https://github.com/openclaw/openclaw/issues/53763) | 12 | 0 | 🌊 P3 | **Feature:** Bundle headless Chromium as first-class tool for reliable web access. |
| [#86215](https://github.com/openclaw/openclaw/issues/86215) | 12 | 1 | 🦞 P1 | **Closed.** Codex OAuth refresh failures wedge agent for hours without alerting or aggressive profile rotation. |
| [#107449](https://github.com/openclaw/openclaw/issues/107449) | 10 | 4 | 🦞 P1 | **Closed.** Cron tool JSON Schema uses `pattern: "\\S"` incompatible with llama.cpp parser. |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | 8 | 1 | 🦞 P0 | Persistent file-based provider cooldown blocks user for hours after billing recovery (402 → `disabledUntil` persists across restarts). |

**Underlying needs:**  
- **Session/turn integrity** — users cannot tolerate message loss, duplicate deliveries, or stalled event loops.  
- **Provider resilience** — OAuth refresh, billing recovery, and model compatibility must be self-healing.  
- **Transport parity** — Matrix, Slack, Discord, iMessage, Telegram all show regressions in thread handling, reaction delivery, and envelope formatting.  
- **Operator ergonomics** — config variable expansion, confirmation guards for destructive commands, session labeling.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Status | Fix PR? | Impact |
|----------|-------|--------|---------|--------|
| 🐚 **P0** | [#91009](https://github.com/openclaw/openclaw/issues/91009) Codex hook CPU spin / gateway stall | Open | No | Gateway RPC stalls; CPU exhaustion |
| 🐚 **P0** | [#104721](https://github.com/openclaw/openclaw/issues/104721) Tool results → `"(see attached image)"` | **Closed** | Likely in recent merges | Total data loss for tool outputs |
| 🐚 **P0** | [#70903](https://github.com/openclaw/openclaw/issues/70903) Provider cooldown persists post-billing-recovery | Open | No | User locked out for hours after fixing billing |
| 🐚 **P0** | [#124133](https://github.com/openclaw/openclaw/issues/124133) `openclaw-snowluma` `formatInboundEnvelope` missing (beta blocker) | Open | No | QQ channel plugin completely broken |
| 🦞 **P1** | [#48003](https://github.com/openclaw/openclaw/issues/48003) Steer mode mid-turn injection broken | Open | No | UX friction; messages delayed |
| 🦞 **P1** | [#115908](https://github.com/openclaw/openclaw/issues/115908) Transcript projection livelock | Open | No | Main thread stall → all transports stall |
| 🦞 **P1** | [#87307](https://github.com/openclaw/openclaw/issues/87307) Matrix thread replies & silent commands | **Closed** | Likely in 2026.5.23+ | Matrix UX broken |
| 🦞 **P1** | [#107449](https://github.com/openclaw/openclaw/issues/107449) Cron tool schema incompatible with llama.cpp | **Closed** | Yes (#107449 linked) | Tool calling fails on llama.cpp |
| 🦞 **P1** | [#90944](https://github.com/openclaw/openclaw/issues/90944) `sessions_yield` reply not delivered; mirror delivered instead | Open | No | User sees child summary, not parent reply |
| 🦞 **P1** | [#84662](https://github.com/openclaw/openclaw/issues/84662) Codex app-server context bloats `response.create` input | Open | No | Runaway token growth |
| 🦞 **P1** | [#134579](https://github.com/openclaw/openclaw/issues/134579) Active Memory `before_prompt_build` never dispatched (since 2026.8.1-beta.3) | Open | No | Automatic recall broken |
| 🦐 **P1** | [#138342](https://github.com/openclaw/openclaw/issues/138342) Official Discord plugin rejected by `openKeyedStore` trust check | Open | No | Discord plugin fails to start |
| 🦐 **P1** | [#131150](https://github.com/openclaw/openclaw/issues/131150) Slack DMs silently dropped after gateway restart (19 accounts) | Open | No | Multi-account Slack DM loss |
| 🦪 **P2** | [#53628](https://github.com/openclaw/openclaw/issues/53628) `XDG_CONFIG_HOME` not expanded on skill install | Open | No | Skill install fails in Docker |
| 🦪 **P2** | [#91860](https://github.com/openclaw/openclaw/issues/91860) Discord `maxLinesPerMessage` ignored; splits at 17 lines | Open | No | Message fragmentation |
| 🦪 **P2** | [#126529](https://github.com/openclaw/openclaw/issues/126529) Custom model entries silently route to wrong provider | Open | No | Misrouting; misleading "no restart needed" msg |

**Observation:** 4 🐚 (platinum hermit) P0 issues remain open — all are gateway/transport critical path. The closed 🐚 P0 (#104721) suggests a fix has landed but verification may be pending.

## 6. Feature Requests & Roadmap Signals
| Issue | Priority | Signal | Likelihood for Next Release |
|-------|----------|--------|----------------------------|
| [#53763](https://github.com/openclaw/openclaw/issues/53763) Built-in headless Chromium | P3 (🌊) | High community interest (12 comments); reduces external deps | Medium — architectural, needs security review |
| [#48918](https://github.com/openclaw/openclaw/issues/48918) User-level skill preferences/conventions | P3 (🌊) | Solves skill customization without forking | Medium — low-risk config addition |
| [#55249](https://github.com/openclaw/openclaw/issues/55249) Session labels/nicknames | P3 (🌊) | UX pain point for multi-session operators | High — small scope, high value |
| [#45564](https://github.com/openclaw/openclaw/issues/45564) Confirmation step for `/new` & `/reset` | P2 (🦞) | Prevents accidental history wipe | High — simple CLI guard |
| [#77798](https://github.com/openclaw/openclaw/issues/77798) Collaborative markdown editor (Canvas) | P2 (🌊) | ChatGPT Canvas parity; 2-way editing | Low — large UI/backend effort |
| [#87362](https://github.com/openclaw/openclaw/issues/87362) Task flow lifecycle hook events | P3 (🌊) | Plugin observability gap | Medium — extends existing hook system |
| [#119135](https://github.com/openclaw/openclaw/pull/119135) Smart model tiering (cost optimization) | P2 (PR) | Route simple requests to cheaper models | Medium — PR open, needs proof |
| [#112375](https://github.com/openclaw/openclaw/pull/112375) Cron shell precheck gate (skip LLM when no work) | P2 (PR) | Model-free admission for scheduled jobs | High — PR open, sufficient proof |

**Prediction:** Session labeling (#55249), `/new` confirmation (#45564), and cron precheck (#112375) are most likely to land soon. Headless Chromium (#53763) and Canvas editor (#77798) are longer-horizon.

## 7. User Feedback Summary
**Pain points (from issue narratives):**
- **Session reliability:** "Messages lost," "duplicate replies," "child summary instead of parent reply," "turn stalls for tens of seconds" (#115908, #110368, #90944).
- **Provider opacity:** "Wedge for hours without clear alerting" (#86215), "blocked for hours after billing recovery" (#70903), "OAuth inherited but rejected" (#98702).
- **Transport regressions:** Matrix threads broken (#87307), Slack reactions never delivered (#56653), Discord splits at hardcoded 17 lines (#91860), iMessage reflections bypass echo cache (#135704), Telegram group reply context lost (#82002).
- **Config friction:** `XDG_CONFIG_HOME` not expanded (#53628), custom models silently misrouted (#126529), Google Vertex rename not reflected (#101188).
- **Mobile/desktop UX:** iOS "New Chat" disappears on lock (#108233), macOS legacy identity migration conflicts (#138360).

**Positive signals:**  
- Active maintainer engagement on P0/P1 (labels like `clawsweeper:linked-pr-open`, `clawsweeper:fix-shape-clear`, `status: 👀 ready for maintainer look`).  
- Community contributes fixes (e.g., #137756 browser credential leak, #135366 Firecrawl DNS).  
- Detailed repro steps and version metadata in most issues — users invested in project success.

## 8. Backlog Watch (Long-Unanswered / Stalled High-Impact Items)
| Issue | Age | Severity | Why It Matters |

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-09-05)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **bimodal velocity**: 8 of 12 projects exhibit high daily activity (18–500 PRs updated), while 4 remain quiet. A clear **stabilization wave** is underway—most active projects are merging batches of bug fixes, hardening provider/channel integrations, and preparing near-term releases rather than launching major features. **Session continuity, provider resilience, and multi-channel parity** dominate engineering focus across the board. Release cadences vary: LobsterAI ships daily patches; OpenClaw, NanoBot, and ZeroClaw operate on weekly/biweekly stabilization cycles; others merge to main continuously without tagging. The ecosystem is maturing toward **production-grade reliability** over capability expansion.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed PRs | Latest Release | Release Date | Health Score* |
|---------|---------------------|-------------------|-------------------|----------------|--------------|---------------|
| **OpenClaw** | 213 | 500 | 151 | 2026.8.1 (stable) / 2026.8.1-beta.2 | Pre-2026-09-05 | 🟢 **High** – massive throughput, but 4 open P0s |
| **NanoBot** | 5 | 28 | 7 | 0.3.0 | Pre-2026-09-05 | 🟢 **High** – systematic fixes, deadline-driven P1 |
| **Hermes Agent** | 9 | 50 | 3 | Unlisted | Pre-2026-09-05 | 🟡 **Medium-High** – refactor landed, review bottleneck |
| **PicoClaw** | 3 | 22 | 20 | Unlisted | Pre-2026-09-05 | 🟢 **High** – polish batch, 90% merge rate |
| **NanoClaw** | ~5 (2 critical new) | 18 | 3 (older PRs) | None | — | 🟡 **Medium** – critical prod bugs without fixes |
| **NullClaw** | 1 | 0 | 0 | None | — | 🔴 **Low** – stagnant |
| **IronClaw** | 3 (resolved) | 12 | 3 | None (continuous) | — | 🟢 **High** – focused Telegram/TUI fixes |
| **LobsterAI** | 1 (critical, stale) | 28 | 28 | 2026.9.4 / 2026.9.3 | 2026-09-04 / 03 | 🟢 **Very High** – daily releases, high throughput |
| **CoPaw (QwenPaw)** | 22 | 26 | ~6 | 2.2.0-beta.7 | Pre-2026-09-05 | 🟢 **High** – beta stabilization, Hub scope locked |
| **ZeptoClaw** | 0 | 0 | 0 | None | — | 🔴 **Inactive** |
| **ZeroClaw** | 3 | 50 | 6 | v0.8.5 (in progress) | — | 🟢 **High** – stabilization sprint, security focus |
| **Moltis** | 1 (new) | 1 (new) | 0 | None | — | 🟡 **Low-Medium** – ideation only |

*Health Score: 🟢 High (sustained velocity + fixes landing), 🟡 Medium (velocity but bottlenecks/risks), 🔴 Low/Inactive.*

---

## 3. OpenClaw's Position

**Advantages vs. Peers**
- **Scale of operations**: 500 PRs/24h dwarfs all others (next: ZeroClaw/Hermes at 50). Indicates largest contributor base and CI/CD maturity.
- **Transport breadth**: Only project with simultaneous regressions/fixes across **Codex, Slack, Matrix, Discord, iMessage, Telegram, QQ** – a de facto multi-channel compatibility testbed.
- **Severity taxonomy** (🐚/🦞/🦐/🦪/🌊) and tooling (`clawsweeper` bot) show advanced triage automation absent elsewhere.
- **Session/turn integrity** fixes (Codex thread preservation, transcript projection, steer-mode injection) address core UX pain points that plague smaller projects.

**Technical Approach Differences**
- **Gateway-centric architecture**: Centralized session router handling all channel plugins, vs. peer projects where channels are more loosely coupled (IronClaw, PicoClaw) or single-transport (NanoBot, LobsterAI).
- **Provider-agnostic runtime**: Abstracts OpenAI, Anthropic, Bedrock, Ollama, Codex, OpenCode behind unified interfaces; others tend to specialize (e.g., ZeroClaw’s provider proliferation, NanoBot’s OpenCode focus).
- **Security-first defaults**: Browser CDP credential leakage fix (#137756), plugin trust checks (#138342) – proactive hardening vs. reactive patching seen elsewhere.

**Community Size Comparison**
- **Issues/PRs volume** suggests 5–10× larger active contributor pool than nearest peers (ZeroClaw, Hermes).
- **Comment depth** on P0 issues (21 comments on #91009) indicates highly engaged power-user base filing detailed repros.
- **No peer matches the “platinum hermit” (🐚) severity tier** – implies OpenClaw operates at a scale where corner-case reliability becomes a distinct priority class.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Affected | Specific Needs |
|------------|-------------------|----------------|
| **Session/turn continuity & state integrity** | OpenClaw, Hermes Agent, ZeroClaw, CoPaw, NanoBot | Prevent message loss, duplicate deliveries, stalled event loops; fix transcript projection livelocks (OpenClaw #115908), resume one-shot sessions (Hermes #103369), persistent session attachments (ZeroClaw #10407), loop-mode persistence (CoPaw #7560). |
| **Provider resilience & compatibility** | OpenClaw, NanoBot, ZeroClaw, PicoClaw, NanoClaw, Hermes Agent | OAuth refresh self-healing (OpenClaw #86215), billing-recovery unblocking (OpenClaw #70903), OpenCode header deadline (NanoBot #5661), Anthropic response classification (ZeroClaw #9447), OpenAI-compat strict-mode stripping (PicoClaw #1683), provider contract unification (NanoClaw #3586). |
| **Multi-channel parity & thread handling** | OpenClaw, IronClaw, PicoClaw, CoPaw | Matrix thread replies (OpenClaw #87307), Telegram pairing/duplicate/routing fixes (IronClaw #8054, PicoClaw #2090, #2092), Feishu single-stream card (CoPaw #7318 / NanoBot #5567), Slack DM loss (OpenClaw #131150). |
| **Memory/cache bounding & leak prevention** | NanoBot, Hermes Agent, ZeroClaw, NanoClaw | LRU eviction for OAuth flows, summary caches, thread-context caches (NanoBot #5663–5665), SQLite WAL corruption under concurrency (Hermes #103339), unbounded PreCompact serialization (NanoClaw #3716). |
| **Security hardening (supply chain & runtime)** | ZeroClaw, PicoClaw, NanoClaw, OpenClaw | Git operation sandboxing (ZeroClaw #10337), plugin HTTPS trust store (ZeroClaw #10491), exec preflight fail-closed (PicoClaw #2298), mount validation bypass (NanoClaw #3680), browser CDP credential leak (OpenClaw #137756). |
| **TUI/WebUI responsiveness & UX polish** | ZeroClaw, Hermes Agent, IronClaw, PicoClaw, LobsterAI, CoPaw | Multi-session panes (ZeroClaw #9739), command-result card dismissal (IronClaw #8068–8071), input lag with history (PicoClaw #3281), browser tab-strip (LobsterAI #2617), loop-mode UI sync (CoPaw #7555). |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | Hermes Agent | NanoBot | PicoClaw | LobsterAI | CoPaw | IronClaw | NanoClaw | Moltis/NullClaw |
|-----------|----------|----------|--------------|---------|----------|-----------|-------|----------|----------|-----------------|
| **Primary Transport** | Multi-channel gateway (8+ channels) | TUI + Web dashboard | Desktop + Web (multi-profile) | WebUI + TUI + Feishu/Slack | WebUI + Telegram/Slack/Feishu/IRC | Desktop app (Electron/Tauri) | Desktop + Hub (multi-tenant) | Telegram Bot API + MTProto | Channel-agnostic core | CLI + external agents |
| **Target User** | Power users, operators, multi-community managers | Developers, terminal-first users | Researchers, multi-profile experimenters | Enterprise Feishu users, local-model enthusiasts | Self-hosters, channel diversity seekers | End-users, subscription product | Teams, enterprises (Hub) | Telegram-centric users | Provider/platform integrators | External-agent integrators |
| **Architecture** | Monorepo gateway + plugin channels | Rust workspace (23 crates), actor-based | Python monorepo, heavy refactor (−34% LOC) | TypeScript, OpenCode-centric provider layer | Go, channel-first plugin system | TypeScript/Electron, skill marketplace | TypeScript/Electron, workspace-scoped skills | Rust, Telegram-native | TypeScript, provider contract layer | Python, streaming transport focus |
| **Release Model** | Versioned betas + stable (CalVer) | Weekly stabilization sprints (v0.8.x) | Infrequent, post-refactor batch | Versioned (0.3.x), patch-heavy | Unversioned main, batch merges | **Daily** CalVer patches | Beta cycle (2.2.0-beta.x) | Continuous main, no tags | None visible | None visible |
| **Key Differentiator** | **Channel breadth + session integrity at scale** | **Rust performance + provider proliferation** | **Radical simplification + multi-profile scale** | **OpenCode/Feishu enterprise integration** | **Channel reliability + provider compat layer** | **Product polish + subscription ops** | **Multi-tenant Hub + skill preload** | **Telegram UX + subagent orchestration** | **Provider contract standardization** | **AGY streaming + reasoning persistence** |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration / Pre-Release Stabilization** | OpenClaw, ZeroClaw, CoPaw, NanoClaw, Hermes Agent | High PR volume, multiple P0/P1 bugs open, merging fixes in batches, targeting imminent releases (OpenClaw beta, ZeroClaw v0.8.5, CoPaw 2.2.0). |
| **Continuous Delivery / High Polish** | LobsterAI, PicoClaw, IronClaw, NanoBot | Daily/weekly merges, user-facing UX fixes, fewer critical bugs, steady feature increments (LobsterAI daily releases, PicoClaw 20 merged PRs, IronClaw Telegram fixes). |
| **Architectural Refactor Phase** | Hermes Agent | −34% LOC merged, review bottleneck, post-refactor integration risk, stability fixes gated on refactor landing. |
| **Niche / Early Stage** | Moltis, NullClaw | <2 items updated, ideation-focused, no release cadence. |
| **Inactive** | ZeptoClaw | Zero activity. |

**Maturity Signals**
- **LobsterAI** most mature product: daily releases, subscription analytics, onboarding funnels, CI hardening.
- **OpenClaw** most mature platform: severity taxonomy, triage automation, multi-channel regression suite.
- **ZeroClaw/PicoClaw/IronClaw** show strong **engineering discipline**: bounded caches, security fail-closed, spec compliance (VI tags), regression tests.
- **CoPaw** uniquely investing in **multi-tenant SaaS primitives** (workspaces, admin skills, SSO) – only project with explicit Hub product vision.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence Across Projects | Strategic Value |
|-------|--------------------------|-----------------|
| **Session/turn integrity > new features** | 7/12 projects fixing message loss, duplication, stall, or resume logic |

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-05

## 1. Today's Overview

NanoBot shows **high development velocity** with 28 PRs and 5 issues updated in the last 24 hours. The project is in active maintenance mode with a strong focus on **stability fixes** (bounded caches, memory leaks), **provider integrations** (OpenCode session affinity, aimlapi), and **WebUI enhancements** (model speed display, session titles). No new release was cut today, but 7 PRs were merged/closed, indicating steady progress toward the next version. The ratio of open PRs (21) to merged (7) suggests a healthy review pipeline, though several PRs have been open for weeks (e.g., #4551 since June).

---

## 2. Releases

**No new releases** published in the last 24 hours. The latest version remains **0.3.0** (referenced in issue #5645). Users on 0.3.0 should note the regression in runtime context blocks (see Bugs section).

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#5639](https://github.com/HKUDS/nanobot/pull/5639) | Stabilize session labels, TUI streaming, pairing prompts | Bug fix / UX | Fixes TUI streaming visibility (OpenTUI 0.5.10), centers session handles, improves Markdown rendering |
| [#5660](https://github.com/HKUDS/nanobot/pull/5660) | Show model generation speed in context usage popover | Feature (WebUI) | Implements #5631 — adds tokens/sec display beside generation time in composer popover |
| [#5657](https://github.com/HKUDS/nanobot/pull/5657) | Extract outbound wire encoding (WebUI) | Refactor | Decouples WebSocket payload encoding, adds shared `send_payload` primitive, improves testability |
| [#5645](https://github.com/HKUDS/nanobot/issues/5645) | Current Time runtime context absent in 0.3.0 | Bug (closed) | Regression acknowledged; fix likely in progress via #5659 (ephemeral runtime-context opt-out) |
| [#5644](https://github.com/HKUDS/nanobot/issues/5644) | Channel locale registry drops locale on concurrent load | Bug (closed) | Race condition in `loadChannelLocale()` fixed |
| [#5631](https://github.com/HKUDS/nanobot/issues/5631) | Show context/model speed in WebUI | Enhancement (closed) | Addressed by #5660 |
| [#5647](https://github.com/HKUDS/nanobot/issues/5647) | WebUI session title not generated | Bug (closed) | Fixed by #5648 / #5658 |

**Key advancement**: WebUI now surfaces real-time model performance metrics (tokens/sec), closing a parity gap with competitors like DeepSeek Harness.

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#5567](https://github.com/HKUDS/nanobot/issues/5567) **Feishu: merge multi-reply into single streaming card** | 4 comments, open since Aug 27 | **Enterprise UX**: Feishu (Lark) users expect "1 user msg → 1 bot card" paradigm. Current split messages (tool hints, progress, final) break threading and readability. High priority for Chinese enterprise adopters. |
| [#5661](https://github.com/HKUDS/nanobot/issues/5661) / [#5662](https://github.com/HKUDS/nanobot/pull/5662) **OpenCode `x-opencode-session` header (deadline: 2026-09-06)** | 0 comments, created Sep 4 | **Urgent provider compliance**: OpenCode Zen/Go will reject requests without this header after Sep 6. PR #5662 (P1) adds header to `OpenAICompatProvider`. Critical for OpenCode users. |
| [#5666](https://github.com/HKUDS/nanobot/pull/5666) **Add aimlapi.com as built-in OpenAI-compatible provider** | New, vendor-submitted | **Ecosystem expansion**: aimlapi (400k+ users, 1000+ models) seeks native integration. Partnership offer (50/50 rev share). Signals NanoBot's growing appeal as a provider-agnostic gateway. |

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **Critical (Deadline-driven)** | [#5661](https://github.com/HKUDS/nanobot/issues/5661) OpenCode requests fail without `x-opencode-session` after 2026-09-06 | Open | [#5662](https://github.com/HKUDS/nanobot/pull/5662) (P1, open) |
| **High (Memory Leak)** | [#5665](https://github.com/HKUDS/nanobot/pull/5665) Unbounded MCP browser OAuth flows in `McpOAuthManager` | Open (PR) | #5665 (bounds cache, adds capacity limit) |
| **High (Memory Leak)** | [#5664](https://github.com/HKUDS/nanobot/pull/5664) Unbounded idle summary cache in `AutoCompact._summaries` | Open (PR) | #5664 (adds LRU eviction) |
| **High (Memory Leak)** | [#5663](https://github.com/HKUDS/nanobot/pull/5663) Mattermost thread context cache grows indefinitely | Open (PR) | #5663 (bounds set with eviction) |
| **Medium (Regression)** | [#5645](https://github.com/HKUDS/nanobot/issues/5645) `Current Time` runtime context missing in 0.3.0 | Closed | Likely addressed by [#5659](https://github.com/HKUDS/nanobot/pull/5659) (ephemeral flag) |
| **Medium (Race Condition)** | [#5644](https://github.com/HKUDS/nanobot/issues/5644) Locale registry drops locale on concurrent startup load | Closed | Fixed in recent commit |
| **Medium (UX Regression)** | [#5647](https://github.com/HKUDS/nanobot/issues/5647) WebUI session titles not generated | Closed | Fixed by [#5648](https://github.com/HKUDS/nanobot/pull/5648) / [#5658](https://github.com/HKUDS/nanobot/pull/5658) |

**Pattern**: 3 memory-leak fixes opened today (#5663–#5665) by same author (Shizoqua) — systematic bounding of unbounded caches across channels/agent.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **Feishu single-stream card** | [#5567](https://github.com/HKUDS/nanobot/issues/5567) (4 comments, 8 days open) | High — enterprise blocker, clear spec |
| **Context compaction visibility in channels** | [#5656](https://github.com/HKUDS/nanobot/pull/5656) (PR open) | High — adds `/compact` command + lifecycle events (`context_compaction`), already implemented |
| **Langfuse tracing for Codex** | [#5520](https://github.com/HKUDS/nanobot/pull/5520) (open since Aug 24) | Medium — observability gap for Codex provider |
| **Copy/move file tools** | [#5626](https://github.com/HKUDS/nanobot/pull/5626) (open since Sep 1) | Medium — completes filesystem toolset |
| **Heartbeat isolated session / model override** | [#4551](https://github.com/HKUDS/nanobot/pull/4551), [#4549](https://github.com/HKUDS/nanobot/pull/4549) (open since Jun 26) | Low — stale, no recent movement |
| **aimlapi native provider** | [#5666](https://github.com/HKUDS/nanobot/pull/5666) (vendor PR) | Medium — commercial partnership, but new provider |

**Signal**: Near-term roadmap leans toward **operational hardening** (compaction visibility, memory bounds, provider compliance) over new capabilities.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Feishu message fragmentation** | #5567: "用户体验较差" (poor UX), 4 comments discussing CardKit streaming | 😟 Frustrated — enterprise users blocked |
| **Missing runtime context in 0.3.0** | #5645: "difference is reproducible", regression from 0.2.2 | 😟 Regression anger |
| **WebUI lacks model speed visibility** | #5631: "类似 deepseek harness" (like DeepSeek Harness) | 😐 Feature parity request |
| **Session titles not generating** | #5647 / #5658: silent failure when envelope lacks `webui: true` | 😐 Silent bug |
| **OpenCode deadline pressure** | #5661: "may error starting 2026-09-06" | 😰 Urgent anxiety |

**Positive**: Quick turnaround on WebUI speed display (#5631 → #5660 in 2 days) and locale race fix (#5644 closed next day).

---

## 8. Backlog Watch — Stale Items Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) Heartbeat `isolated_session` config | 71 days | Enables shared session context for heartbeats; design settled, needs review |
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) Heartbeat `model_override` for cheaper model | 71 days | Cost optimization for background heartbeats; paired with #4551 |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) Preserve full consolidation input (memory) | 23 days | Data-loss risk in memory consolidation; safety-critical |
| [#5431](https://github.com/HKUDS/nanobot/pull/5431) Report background task failures | 18 days | Observability gap — silent task crashes |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) Surface model retry status (NAN-34) | 12 days | UX for retry visibility in TUI/WebUI; partially done |
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) Langfuse tracing for Codex | 12 days | Only OpenAI-compat provider has tracing; Codex is blind |

**Recommendation**: Maintainers should prioritize reviewing the 3 memory-leak PRs (#5663–#5665) and the OpenCode deadline PR (#5662) today, then triage the 70-day-old heartbeat PRs.

---

## Links Reference
- **Repo**: https://github.com/HKUDS/nanobot
- **Issues**: https://github.com/HKUDS/nanobot/issues
- **Pull Requests**: https://github.com/HKUDS/nanobot/pulls

*Digest generated from GitHub data as of 2026-09-05 00:00 UTC. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-05

## 1. Today's Overview

Hermes Agent shows **high velocity with zero releases** — 50 PRs and 9 issues updated in 24 hours, but only 3 PRs merged/closed. The project is in a heavy refactoring and stabilization phase: a massive whole-codebase simplification (−34% LOC, PR #102117) is under review alongside urgent fixes for Windows terminal hangs, SQLite WAL corruption under concurrent writers, profile-switching timeouts, and spurious context compression on edit-resend. No new version shipped; the pipeline appears focused on landing the refactor and critical stability patches before the next release.

---

## 2. Releases

**No new releases today.** The latest version remains unlisted in the data. The team is clearly in a pre-release consolidation window — merging the −34% LOC refactor (#102117) and a cluster of P1/P2 bug fixes before cutting a new tag.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#102117](https://github.com/NousResearch/hermes-agent/pull/102117) | **Refactor (CLOSED)** | Whole-codebase simplification: 1,063,826 → 698,363 source LOC (−34.4%), every file >5k LOC decomposed (37→6), `gateway/run.py` 34,847→5,512 lines, functions >300 lines 192→2, worst cyclomatic complexity 1,075→84. Three integration rounds completed. | **Foundational** — enables faster reviews, safer changes, lower cognitive load. Zero behavior change claimed. |
| [#103369](https://github.com/NousResearch/hermes-agent/pull/103369) | **Bug fix (merged/closed)** | `fix(cli): resume one-shot sessions` — preserves `--resume` when `-z/--oneshot` dispatches into oneshot mode; loads resumed SessionDB transcript before the oneshot turn. | Restores session continuity for ephemeral CLI runs. |
| [#103396](https://github.com/NousResearch/hermes-agent/pull/103396) | **Bug fix (merged/closed)** | `fix: exclude ephemeral nodes from full backups` — skips symlinks, sockets, FIFOs, devices, backup-owned SQLite staging files, destination archive, atomic partials, rebuildable skills prompt snapshot. | Prevents backup bloat and false “incomplete” warnings. |

> **Note:** Only 3 of 50 updated PRs are merged/closed; the remaining 47 are open — indicating a review bottleneck or deliberate batching for the next release.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Reactions | Core Need |
|------|----------|-----------|-----------|
| [Issue #49664](https://github.com/NousResearch/hermes-agent/issues/49664) | 6 | 👍 1 | **Desktop settings disconnect** — `display.show_reasoning` toggle writes to config but rendering never reads it. Users expect UI toggles to work. |
| [Issue #103339](https://github.com/NousResearch/hermes-agent/issues/103339) | 5 | 0 | **SQLite WAL corruption epidemic** — 7 `state.db` corruptions in 4 days on multi-profile hosts; second writer opens live WAL for writing. Root cause: upstream guards are fail-open. |
| [PR #103193](https://github.com/NousResearch/hermes-agent/pull/103193) | undefined | 0 | **Privacy-safe telemetry** — Langfuse hooks with HMAC-pseudonymous IDs, content-free sampling, fail-closed export masking, Discord reaction hooks. Signals productization push for observability without PII risk. |
| [Issue #103375](https://github.com/NousResearch/hermes-agent/issues/103375) | 1 | 0 | **Bot tile reconnect storm** — 20-profile setups starve backend pool; hidden tiles still spawn backends every 10s. |
| [Issue #103398](https://github.com/NousResearch/hermes-agent/issues/103398) | 1 | 0 | **Windows terminal tool hang** — bash startup probe deadlocks; probe child survives `subprocess.run` kill. Blocks ACP mode entirely. |

**Underlying theme:** Multi-profile / multi-gateway deployments are exposing concurrency bugs (WAL, backend pool, profile switching) that single-profile users never hit. The project is hitting scale limits in its session/state layer.

---

## 5. Bugs & Stability (Reported Today, Ranked by Severity)

| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| **P1 — Data Corruption** | [#103339](https://github.com/NousResearch/hermes-agent/issues/103339) | 7 `state.db` WAL corruptions in 4 days on multi-profile gateways. Second writer corrupts live DB; guards are fail-open. | ✅ [#103362](https://github.com/NousResearch/hermes-agent/pull/103362) — `flock` single-writer gate |
| **P1 — Config Ignored** | [#49664](https://github.com/NousResearch/hermes-agent/issues/49664) | `display.show_reasoning` toggle writes to `config.yaml` but rendering code never reads it. Reasoning blocks always shown. | ❌ No PR yet |
| **P2 — Pool Starvation** | [#103375](https://github.com/NousResearch/hermes-agent/issues/103375) | Bot tiles auto-reconnect loop spawns backends for *all* 20+ profiles (including hidden), exhausting pool slots. | ✅ [#103399](https://github.com/NousResearch/hermes-agent/pull/103399) — prevent background reconcile from spawning for hidden tiles |
| **P2 — Profile Switch Timeout** | [#103401](https://github.com/NousResearch/hermes-agent/issues/103401) | Switching to 4th+ profile fails: “Local backend start timed out waiting for free slot.” | ❌ No PR yet (likely same pool exhaustion as #103375) |
| **P2 — Windows Terminal Hang** | [#103398](https://github.com/NousResearch/hermes-agent/issues/103398) | `terminal` tool hangs for full executor timeout on trivial commands; bash probe deadlocks, orphan survives kill. | ✅ [#103402](https://github.com/NousResearch/hermes-agent/pull/103402) — prevent probe hang & kill orphans |
| **P2 — Spurious Compression** | [#103391](https://github.com/NousResearch/hermes-agent/issues/103391) | Edit-resend triggers compression at 201k/524k tokens; anchor invalidated by truncation, defer baseline recorded on mismatched scale. | ✅ [#103397](https://github.com/NousResearch/hermes-agent/pull/103397) — record pre-override rough estimate as defer baseline |
| **P3 — Backup Noise** | [#103396](https://github.com/NousResearch/hermes-agent/pull/103396) | Full backups include ephemeral nodes (symlinks, sockets, staging files). | ✅ Merged |

> **Pattern:** All P1/P2 bugs today are **concurrency/scale issues** in multi-profile, multi-gateway, or Windows environments. The codebase hasn’t been stress-tested at this profile count before.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Per-profile Kanban create/link deny** | [#100944](https://github.com/NousResearch/hermes-agent/issues/100944) | Medium — needs design decision (`needs-decision` label); low code churn, high policy clarity needed |
| **Privacy-safe Langfuse telemetry + Discord feedback hooks** | [#103193](https://github.com/NousResearch/hermes-agent/pull/103193) | High — PR open, telemetry contract versioned, fail-closed; aligns with enterprise/observability push |
| **`file_readonly` toolset (read + search only)** | [#85996](https://github.com/NousResearch/hermes-agent/pull/85996) | Medium — open since Aug 14, least-privilege demand clear, but toolset granularity may conflict with refactor |
| **`doctor --quick` mode (skip npm/provider checks)** | [#103395](https://github.com/NousResearch/hermes-agent/pull/103395) | High — trivial, merged-adjacent, CI/boot-hook demand |
| **`pre_tool_call` “serve” directive (supply result without executing)** | [#103404](https://github.com/NousResearch/hermes-agent/pull/103404) | Medium — plugin extensibility, but new core hook semantics need review |
| **Group Chat continuity & control from messaging (Slack/Discord/phone)** | [#98307](https://github.com/NousResearch/hermes-agent/pull/98307), [#98073](https://github.com/NousResearch/hermes-agent/pull/98073) | Medium-High — large feature set, open since Aug 29/30, `needs-decision`, ties to bot-mode product vision |

**Prediction:** Next release will likely be **v0.22.0** (or v0.21.1 if hotfix) shipping: the −34% refactor, the 3 merged fixes, the Windows terminal fix, the WAL flock gate, the bot-tile pool fix, the spurious-compression fix, `doctor --quick`, and possibly the telemetry hooks. Group Chat and `file_readonly` may slip to v0.23.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Settings UI lies** | #49664: toggle writes config but rendering ignores it | Trust erosion; users can’t control reasoning visibility |
| **Multi-profile = broken** | #103339 (7 corruptions/4 days), #103375 (pool starvation), #103401 (switch timeout) | Power users with 5–20 profiles hit showstoppers; single-profile users unaffected |
| **Windows is second-class** | #103398 (terminal hang), #103400 (QuickEdit blocks updates) | Windows developers blocked in ACP mode and updates |
| **Edit-resend breaks compression logic** | #103391: spurious compression at 38% capacity | Token budget wasted; unexpected context loss |
| **Bot tiles run wild** | #103375: hidden tiles still spawn backends every 10s | Resource waste, UI unresponsive |
| **Backups polluted** | #103396: symlinks, sockets, staging files archived | Wasted disk, noisy “incomplete” warnings |

**Positive signals:** Users are filing detailed, reproducible bugs with logs (e.g., #103339’s “7 corruptions in 4 days”, #103391’s token counts). The community is technical and invested in stability.

---

## 8. Backlog Watch (Stale but Important)

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#85996](https://github.com/NousResearch/hermes-agent/pull/85996) `file_readonly` toolset | 22 days | Least-privilege profiles blocked; security boundary | Open, no review activity |
| [#85398](https://github.com/NousResearch/hermes-agent/pull/85398) Telegram fenced-code regex anchor | 23 days | Inline ` ``` ` mangled in Telegram; formatting breakage | Open, no review activity |
| [#91965](https://github.com/NousResearch/hermes-agent/pull/91965) OpenCode GLM-5.3 reasoning_effort | 14 days | Model version mismatch drops reasoning param silently | Open, no review activity |
| [#78495](https://github.com/NousResearch/hermes-agent/pull/78495) Discord native rename_thread | 32 days | Auto-thread rename silently broken since v0.19.1 | Open, no review activity |
| [#98307](https://github.com/NousResearch/hermes-agent/pull/98307) Group Chat continuity (complete) | 6 days | Large feature, `needs-decision`, blocked on design | Open, awaiting maintainer call |
| [#98073](https://github.com/NousResearch/hermes-agent/pull/98073) Group Chat control from messaging | 7 days | Companion to #98307; same blocker | Open, awaiting maintainer call |
| [#102117](https://github.com/NousResearch/hermes-agent/pull/102117) Whole-codebase refactor (−34% LOC) | 2 days | **Merged/Closed** but massive — watch for follow-up regressions | **Closed** (merged) |

> **Maintainer attention needed:** The four plugin/platform PRs (#85996, #85398, #91965, #78495) have sat 2–4 weeks with zero review comments. The refactor (#102117) just landed — expect a wave of integration issues in the next 48h. Group Chat PRs (#98307, #98073) need a product decision.

---

## Health Indicators

| Metric | Signal |
|--------|--------|
| **PR merge rate** | 3/50 (6%) — low; review bandwidth saturated by refactor |
| **Issue closure rate** | 0/9 (0%) — no issues closed today |
| **P1 bug count** | 2 active (WAL corruption, config ignored) — high for a single day |
| **Windows coverage** | 3 Windows-specific bugs/PRs today — platform getting attention |
| **Refactor risk** | −34% LOC just merged; zero behavior change claimed but integration surface is huge |
| **Multi-profile maturity** | First wave of scale bugs surfacing — architecture stress test in progress |

**Bottom line:** Hermes Agent is **consolidating hard** — landing a historic refactor while firefighting scale-induced stability bugs. The next 1–2 weeks will determine whether v0.22 ships clean or regresses.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-05

## 1. Today's Overview
PicoClaw shows **high maintenance velocity** with 22 PRs updated in the last 24 hours (20 merged/closed), indicating a major batch integration or release stabilization effort. Despite zero new releases today, the volume of merged fixes — spanning provider compatibility, channel integrations (Telegram, Slack, Feishu), agent loop stability, and security hardening — suggests the project is in a **polish-and-stabilize phase** ahead of a likely near-term release. Community engagement remains modest: only 3 open issues updated, with the highest-traction issue (#3281, Web UI input lag) garnering just 2 reactions. No critical outages or regressions were reported today.

---

## 2. Releases
**No new releases** published today. The last release version is not visible in the provided data, but the merged PRs contain changes that typically accumulate for a minor or patch release (e.g., v0.3.2 or v0.4.0).

---

## 3. Project Progress — Merged/Closed PRs (20 items)

| PR | Title | Domain | Key Change |
|----|-------|--------|------------|
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | Fix MCP failure hangs agent loop | Agent/MCP | Prevents agent loop exit on MCP server connection failure; chat stays responsive |
| [#1541](https://github.com/sipeed/picoclaw/pull/1541) | Merge media tempdir, channel DoS hardening, DeepWiki badge | Media/Security/Docs | Centralized temp dir; hardened channel defaults; added badge |
| [#1683](https://github.com/sipeed/picoclaw/pull/1683) | OpenAI-compat strict mode compatibility | Provider | Auto-strips `strict: true` for non-native OpenAI providers (Ollama, vLLM, Groq, etc.) |
| [#1855](https://github.com/sipeed/picoclaw/pull/1855) | Support negative integers in isNumeric (Telegram group IDs) | Channel/Telegram | Fixes misidentification of negative Telegram group/channel IDs |
| [#1854](https://github.com/sipeed/picoclaw/pull/1854) | Occurrence-aware tool call ID sanitization | Agent/Provider | Eliminates duplicate `tool_call_id` errors with strict providers (Anthropic, Cerebras) |
| [#1858](https://github.com/sipeed/picoclaw/pull/1858) | Thinking/reasoning fallback for OpenAI-compat (Ollama) | Provider | Preserves reasoning output from models like DeepSeek-R1 when `content` is empty |
| [#1860](https://github.com/sipeed/picoclaw/pull/1860) | Azure AI Foundry host recognition | Provider | Enables prompt caching & native search for `*.services.ai.azure.com` |
| [#2088](https://github.com/sipeed/picoclaw/pull/2088) | Security audit for open-by-default bots | Channel/Security | Warns/hardens bots with empty `allow_from` accepting messages from anyone |
| [#2016](https://github.com/sipeed/picoclaw/pull/2016) | Improve context overflow detection/classification | Agent/Provider | Catches `context_window_exceeded` variants (underscored) from Anthropic, ZhipuAI, GLM |
| [#2014](https://github.com/sipeed/picoclaw/pull/2014) | Include SystemParts in token estimation + reasoning guards | Agent | Fixes underestimated token counts causing context overflows |
| [#2090](https://github.com/sipeed/picoclaw/pull/2090) | Fix Telegram streaming redundant drafts & routing | Channel/Telegram | Removes lingering partial drafts; fixes Forum/Topic routing |
| [#2089](https://github.com/sipeed/picoclaw/pull/2089) | Fix Slack mention race condition & unify chatID | Channel/Slack | Prevents double-processing of `message` + `app_mention` events |
| [#2091](https://github.com/sipeed/picoclaw/pull/2091) | Fix Feishu group mention detection | Channel/Feishu | Probes bot display name at startup for reliable @mention detection |
| [#2092](https://github.com/sipeed/picoclaw/pull/2092) | Avoid Telegram duplicate messages on edit timeouts | Channel/Telegram | Prevents redundant second message when placeholder edit times out |
| [#2240](https://github.com/sipeed/picoclaw/pull/2240) | GitHub Copilot stdio transport support | Provider | Adds lazy stdio startup, preserves close semantics, adds regression tests |
| [#2260](https://github.com/sipeed/picoclaw/pull/2260) | xAI compat provider support | Provider | Adds xAI via OpenAI-compat path with aliases, config, docs, tests |
| [#2298](https://github.com/sipeed/picoclaw/pull/2298) | Exec script preflight: fail closed on ambiguity | Tool/Exec | Hardens ambiguous interpreter commands (piped/shell-wrapped) to fail closed |
| [#2522](https://github.com/sipeed/picoclaw/pull/2522) | OpenAI-compat: request stream usage | Provider | Opts into `stream_options.include_usage` for native OpenAI/Azure only |
| [#1858](https://github.com/sipeed/picoclaw/pull/1858) | (duplicate entry in data) | — | — |
| [#3367](https://github.com/sipeed/picoclaw/pull/3367) | Docs: add Pilot MCP setup example | Docs | Adds Pilot Protocol MCP CLI quick-start, health-check, no-API-key note |

**Themes**: Heavy focus on **provider robustness** (OpenAI-compat, Azure, xAI, Copilot), **channel reliability** (Telegram, Slack, Feishu), **agent loop resilience** (MCP hangs, context overflow, tool ID collisions), and **security hardening** (open-by-default bots, exec preflight).

---

## 4. Community Hot Topics

| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Issue | 9 comments, 👍2 | **Web UI input lag with long chat history** — users hit severe typing latency as session history grows (v0.3.1, Go 1.25.11). Likely DOM/rendering bottleneck. |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Issue | 10 comments, 👍0 | **IRC long-message handling** — IRCv3 splits >512 byte messages; PicoClaw treats fragments as separate messages, breaking coherence. Needs reassembly logic. |
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) | Issue | 0 comments, 👍0 | **OpenAI-compatible provider support** — Request for generic "OpenAI Compatible" provider to plug in self-hosted routers (e.g., 9Router). Aligns with recent provider extensibility work. |
| [#3368](https://github.com/sipeed/picoclaw/pull/3368) | PR | New today | **Docs: Parallel Search MCP setup** — Adds copy-paste CLI guide for Parallel Search MCP (web search + extraction, no account/key). |
| [#3367](https://github.com/sipeed/picoclaw/pull/3367) | PR | 1 day old | **Docs: Pilot MCP setup example** — Adds Pilot Protocol MCP quick-start with health-check. |

**Analysis**: The two highest-engagement issues are **UX regressions** (Web UI lag, IRC message fragmentation) rather than feature requests. The new OpenAI-compat issue (#3366) mirrors the direction of recently merged provider work (#1683, #1858, #1860, #2260, #2522) — suggesting the maintainers are already building this capability.

---

## 5. Bugs & Stability — Reported Today (via Issues)

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI input lag with history | Open | No PR linked |
| **Medium** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) IRC long-message fragmentation | Open (stale) | No PR linked |

**Note**: Today's merged PRs resolved **17+ bugs** (see Section 3), including critical agent hangs (#3337), provider 400 errors (#1854), Telegram duplicates (#2092), Slack race conditions (#2089), and context overflow misclassification (#2016). The two open bugs above are **UI/channel-layer** issues not yet addressed.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Generic OpenAI-compatible provider** | [#3366](https://github.com/sipeed/picoclaw/issues/3366) | **High** — 5+ recent PRs extend OpenAI-compat path (strict mode, thinking fallback, Azure, xAI, stream usage); a unified "custom compatible" provider is the logical next abstraction. |
| **IRCv3 message reassembly** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | **Medium** — Niche channel (IRC), but 10 comments show active users; may wait for channel refactor. |
| **Web UI virtualized history rendering** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | **High** — Directly impacts daily usability; likely to be prioritized if maintainers dogfood Web UI. |
| **Parallel Search MCP / Pilot MCP docs** | [#3368](https://github.com/sipeed/picoclaw/pull/3368), [#3367](https://github.com/sipeed/picoclaw/pull/3367) | **Done (docs only)** — MCP ecosystem integration accelerating; expect more provider-specific MCP guides. |

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Web UI becomes unusable with long sessions** | #3281: "very laggy" input, 9 comments, 2 👍 | 😡 Frustrated — core workflow blocked |
| **IRC messages split incoherently** | #3287: 10 comments, stale tag but recent activity | 😐 Annoyed — power users affected |
| **Provider compatibility gaps** | #3366: request for generic OpenAI-compat; recent PRs show active work | 🤔 Hopeful — ecosystem expanding |
| **MCP server failures kill agent** | Fixed in #3337 (merged today) | ✅ Relieved — critical stability fix landed |
| **Telegram/Slack/Feishu glitches** | 5 merged PRs today fixing duplicates, races, mentions | ✅ Satisfied — channel reliability improving |

**Overall**: Users are **vocal about frontend/channel UX** but **quiet about backend/provider work** — which is where most engineering effort went today. The project is fixing deep infra bugs faster than surfacing UX polish.

---

## 8. Backlog Watch — Stale/Unanswered Items Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) IRC long-message support | **46 days** (created 2026-07-22, stale-tagged) | 10 comments indicate real usage; "stale" tag may hide active need. IRCv3 fragmentation breaks message coherence for bots. |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI input lag | **46 days** | High user impact (👍2, 9 comments); no PR assigned. Likely requires virtualized list or history pagination in frontend. |
| [#1683](https://github.com/sipeed/picoclaw/pull/1683) OpenAI-compat strict mode | **172 days** (created 2026-03-17, stale-tagged) | **Closed today** — was stale but finally merged. Good sign maintainers are clearing backlog. |
| [#2240](https://github.com/sipeed/picoclaw/pull/2240) GitHub Copilot stdio | **156 days** (stale-tagged) | **Closed today** — another stale PR resolved. Copilot stdio support unblocks enterprise users. |

**Action Items for Maintainers**:
1. **Triage #3281** — assign frontend owner or label `good first issue` for virtualized rendering.
2. **Decide on #3287** — either implement IRC reassembly or close with "won't fix" (IRC declining).
3. **Cut a release** — 20 merged PRs since March represent a substantial changelog; users need packaged fixes.

---

*Digest generated from GitHub API data for sipeed/picoclaw on 2026-09-05. All links point to live GitHub items.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-05

## 1. Today's Overview
NanoClaw shows **high development velocity** with 18 PRs updated in the last 24 hours (15 open, 3 closed), though no new releases were published. The project is in an active refactoring phase focused on **provider contract standardization**, **skill system hardening**, and **agent-to-agent (A2A) communication fixes**. Two critical production issues were filed yesterday: an **OOM crash loop** caused by unbounded conversation archiving (#3716) and **operator environment variables not reaching session containers** (#3714). The closed PRs are older contributions (May 2026) that were finally merged, suggesting maintainers are clearing backlog alongside active development.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#2403](https://github.com/nanocoai/nanoclaw/pull/2403) | ci: replace bump-version with explicit Release workflow + concurrency guard | CI/CD | **Merged** — Modernizes release automation; prevents concurrent release runs |
| [#2232](https://github.com/nanocoai/nanoclaw/pull/2232) | fix(chat-sdk-bridge): fall back to URL fetch for adapters without fetchData | Fix | **Merged** — Improves compatibility with adapters lacking `fetchData` |
| [#2231](https://github.com/nanocoai/nanoclaw/pull/2231) | feat(chat-sdk-bridge): add sendAsRaw flag to bypass adapter Markdown round-trip | Feature | **Merged** — Adds raw message passthrough option for chat SDK bridge |

> **Note**: All three merged PRs were created in **May 2026** and closed today, indicating batch processing of older contributions.

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#3716](https://github.com/nanocoai/nanoclaw/issues/3716) — PreCompact OOM crash loop | **2 comments**, opened 2026-09-04 | **Production stability**: Unbounded full-history serialization on every `PreCompact` hook fills disk/memory with no rotation. Operators need immediate mitigation (cleanup job, rotation, or streaming archive). |
| [#3586](https://github.com/nanocoai/nanoclaw/pull/3586) — Provider setup contract & install verifier | Open since 2026-08-27, updated 2026-09-04 | **Architectural consistency**: Declarative provider contracts to replace ad-hoc setup logic across Codex, OpenCode, Cursor providers. |
| [#3591](https://github.com/nanocoai/nanoclaw/pull/3591) — Render provider instructions from core-owned canon | Open since 2026-08-27, updated 2026-09-04 | **Single source of truth**: Move instruction prose into core; providers supply typed facts only. Reduces drift and duplication. |

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical** | [#3716](https://github.com/nanocoai/nanoclaw/issues/3716) — PreCompact writes unbounded full-rewrite file per firing → production OOM crash loop | **Open** (2026-09-04) | No fix PR yet |
| **High** | [#3714](https://github.com/nanocoai/nanoclaw/issues/3714) — Operator env overrides (auto-compact window, transcript rotation) never reach session container | **Open** (2026-09-04) | No fix PR yet |
| **Medium** | [#3680](https://github.com/nanocoai/nanoclaw/pull/3680) — allowlisted-extra mount bypass in validateSpec | **Open PR** (2026-08-30) | **Yes** — PR #3680 closes the bypass |
| **Medium** | [#3717](https://github.com/nanoclaw/pull/3717) — Embedded payloads can escape composed prompt blocks | **Open PR** (2026-09-04) | **Yes** — PR #3717 adds escaping |
| **Low** | [#3718](https://github.com/nanocoai/nanoclaw/pull/3718) / [#3719](https://github.com/nanocoai/nanoclaw/pull/3719) — A2A sender identity loss & silent delivery failures | **Open PRs** (2026-09-04) | **Yes** — Both PRs address the gaps |

## 6. Feature Requests & Roadmap Signals
| Signal | Evidence | Likelihood for Next Version |
|--------|----------|----------------------------|
| **Provider contract unification** | 5+ PRs (#3584, #3586, #3588, #3591, #3722) standardizing Codex, OpenCode, Cursor providers | **Very High** — Core architectural work, multiple PRs in review |
| **Skill system hardening & operator control** | PRs #3720 (guarded source install), #3721 (explicit install + policy), #3715 (Zapier MCP skill) | **High** — Security/ops focus, multiple merged/ready PRs |
| **Agent group speed inference property** | [#3592](https://github.com/nanocoai/nanoclaw/pull/3592) — `speed` tier per group (fast/balanced/thorough) | **Medium** — CLI + provider vocabulary work in progress |
| **A2A communication reliability** | #3718 (sender identity), #3719 (failure reporting) | **Medium** — Two focused PRs from same author, likely to land together |
| **Cursor Agent SDK provider** | [#3356](https://github.com/nanocoai/nanoclaw/pull/3356) + install skill [#3355](https://github.com/nanocoai/nanoclaw/pull/3355) | **Medium** — Payload + skill pair, depends on contract framework |

## 7. User Feedback Summary
| Pain Point | Source | Context |
|------------|--------|---------|
| **OOM crashes in production** | [#3716](https://github.com/nanocoai/nanoclaw/issues/3716) (DawoudIO) | `PreCompact` hook serializes entire conversation history to a new file on every firing with **no rotation/cleanup** — causes crash loops in long-running agents. |
| **Operator config ignored** | [#3714](https://github.com/nanocoai/nanoclaw/issues/3714) (nilsborg) | Three documented env vars (`CLAUDE_CODE_AUTO_COMPACT_WINDOW`, transcript rotation settings) **never forwarded to session container** — operators cannot tune behavior without patching. |
| **Security bypass in mount validation** | [#3680](https://github.com/nanocoai/nanoclaw/pull/3680) (prathish-ks) | `allowlisted-extra` mount validation can be bypassed — container escape risk. |
| **Prompt injection via embedded payloads** | [#3717](https://github.com/nanocoai/nanoclaw/pull/3717) (petrolette) | Unescaped payloads in composed prompt blocks can forge structure — agent manipulation vector. |
| **A2A messages lose sender identity** | [#3718](https://github.com/nanocoai/nanoclaw/pull/3718) (Koshkoshinsk) | Legitimate agent-to-agent requests refused because sender unknown. |

> **Overall sentiment**: Operators running production workloads are hitting **resource exhaustion** and **configuration opacity**. Core team is responding with architectural fixes (provider contracts, skill guards) but critical bugs (#3716, #3714) lack immediate fix PRs.

## 8. Backlog Watch — Stale Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3586](https://github.com/nanocoai/nanoclaw/pull/3586) — Provider setup contract & install verifier | **9 days** (opened 2026-08-27) | **Blocker for provider unification** — 4 other provider PRs depend on this contract. |
| [#3591](https://github.com/nanocoai/nanoclaw/pull/3591) — Render provider instructions from core canon | **9 days** | **Reduces instruction drift** across providers; foundational for consistent agent behavior. |
| [#3355](https://github.com/nanocoai/nanoclaw/pull/3355) / [#3356](https://github.com/nanocoai/nanoclaw/pull/3356) — Cursor Agent SDK provider + install skill | **17 days** | **New provider integration** ready but waiting on contract framework (#3586). |
| [#3680](https://github.com/nanocoai/nanoclaw/pull/3680) — Mount security bypass fix | **6 days** | **Security fix** — allowlisted-extra bypass in container validation. |
| [#2403](https://github.com/nanocoai/nanoclaw/pull/2403) — Release workflow overhaul | **4 months** (merged today) | **Finally merged** — but shows CI/CD backlog; future releases should be faster. |

---

**Project Health Indicators**
- 🟢 **Velocity**: High (18 PR updates/24h)
- 🟡 **Stability Risk**: Elevated — 2 critical production issues without fixes
- 🟢 **Architectural Direction**: Clear — provider contracts, skill hardening, A2A reliability
- 🟡 **Release Cadence**: Stalled — no releases despite merged CI/CD work
- 🔴 **Critical Bug Response**: Gap — #3716 (OOM) and #3714 (config bypass) need immediate triage/fix PRs

**Recommendation**: Prioritize fix PRs for #3716 and #3714 this sprint; unblock #3586 to cascade-provide provider contract work.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-09-05

## 1. Today's Overview
NullClaw shows minimal activity in the past 24 hours with **1 open issue updated** and **zero pull requests or releases**. The sole active item is a feature request (#993) to make the Firecrawl search endpoint configurable, enabling self-hosted Firecrawl instances. No bug fixes, merges, or version bumps occurred. Project velocity appears low; the backlog is not being actively processed today.

## 2. Releases
**No new releases** published today. The latest release data is not provided in the current snapshot.

## 3. Project Progress
**No merged or closed PRs** in the last 24 hours. No features advanced, bugs fixed, or refactors landed.

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#993** | Enhancement | 1 comment, 0 reactions, updated 2026-09-04 | [nullclaw/nullclaw#993](https://github.com/nullclaw/nullclaw/issues/993) |

**Analysis**: The only discussion centers on **self-hosting flexibility**. The reporter (Crymfox) notes the Firecrawl provider hardcodes `https://api.firecrawl.dev/v1/search`, blocking users who run their own Firecrawl instance. The single comment suggests maintainers have not yet triaged or responded. This signals a latent need for **provider extensibility**—likely a prerequisite for enterprise or air-gapped deployments.

## 5. Bugs & Stability
**No new bug reports, crashes, or regressions** recorded today. No fix PRs exist.

## 6. Feature Requests & Roadmap Signals
| Request | Likelihood for Next Version | Rationale |
|---------|-----------------------------|-----------|
| **Configurable Firecrawl endpoint** (#993) | **Medium** | Single-issue, low discussion, but aligns with “self-hosted friendly” trend; trivial code change (env var / config flag). |
| **Generic provider abstraction** (implied) | **Low–Medium** | If maintainers generalize beyond Firecrawl, they may introduce a pluggable search-provider interface. No evidence yet. |

**Prediction**: The Firecrawl config change is the only concrete signal; expect it in a minor patch if triaged.

## 7. User Feedback Summary
- **Pain point**: Inability to use self-hosted Firecrawl with the native `search_provider: "firecrawl"` setting.
- **Use case**: Teams running Firecrawl on-prem for data privacy, cost control, or air-gapped environments.
- **Sentiment**: Neutral—no upvotes or extended discussion; likely a niche but valid requirement.

## 8. Backlog Watch
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| **#993** | 12 days (opened 2026-08-24) | Open, unassigned, 1 comment | Blocks self-hosted Firecrawl adoption; simple fix but stalled. Needs maintainer triage or “good first issue” label. |

*No stale PRs to surface.*

---

**Health Indicator**: 🟡 **Low throughput** — only one enhancement touched in 24h, zero merges. Recommend maintainers triage #993 and consider labeling it for community contribution to unblock self-hosted users.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-05

## 1. Today's Overview
IronClaw shows high development velocity with 12 PRs updated and 3 issues resolved in the last 24 hours. The project is actively addressing Telegram integration bugs, subagent orchestration reliability, and WebUI polish. Three PRs were merged/closed today, fixing critical Telegram pairing flows, LLM cache key propagation, and device-linking error messaging. Nine PRs remain open, indicating a healthy pipeline of features (Telegram Bot API command registration, subagent background delivery sweeps) and UI refinements (command menu accessibility, result card dismissal). No new releases were cut, suggesting changes are accumulating for a future batch release.

## 2. Releases
**No new releases** published today. The project appears to be in a continuous integration phase with changes merging to main but not yet tagged.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#8054](https://github.com/nearai/ironclaw/pull/8054) | `fix(assistant): check pairing before command admission so first contact gets the connect notice` | Bug Fix (M, low risk) | **Critical UX fix**: Unpaired Telegram users now receive the pairing/connect notice on first `/start` instead of the command inventory. Resolves [Issue #7956](https://github.com/nearai/ironclaw/issues/7956). |
| [#8073](https://github.com/nearai/ironclaw/pull/8073) | `fix(device-link): say "not configured by administrator" instead of blaming the user's account` | Bug Fix (M, low risk) | **Error messaging improvement**: When admin hasn't configured `telegram_api_id`/`telegram_api_hash`, users see a clear admin-actionable message instead of a generic "Something went wrong". Resolves [Issue #7955](https://github.com/nearai/ironclaw/issues/7955). |
| [#8062](https://github.com/nearai/ironclaw/pull/8062) | `fix(llm): send conversation cache keys on OpenAI request paths` | Bug Fix (XL, low risk) | **Performance/ correctness**: Stable, domain-separated pseudonymous prompt-cache keys now sent on all OpenAI Responses/Chat Completions requests (OpenAI, Cerebras, Groq, Together, etc.), enabling proper conversation caching across turns and tool loops. |

## 4. Community Hot Topics
*No issues or PRs with significant comment threads or reactions (👍) in the last 24h.* All items show 0 comments and 0 reactions. Activity is driven by core contributors (`thisisjoshford`, `henrypark133`, `italic-jinxin`) and CI bots. The lack of external community discussion suggests either a small user base or that current work is internal/refinement-focused.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#8074](https://github.com/nearai/ironclaw/issues/8074) Paired user in disconnected shared channel receives wrong "connect your account" notice instead of "channel not connected" message | **OPEN** | None yet |
| **Medium** | [#7956](https://github.com/nearai/ironclaw/issues/7956) Unpaired user's first `/start` shows command inventory, not pairing notice | **CLOSED** | [#8054](https://github.com/nearai/ironclaw/pull/8054) ✅ Merged |
| **Medium** | [#7955](https://github.com/nearai/ironclaw/issues/7955) Generic "Something went wrong" when admin hasn't configured Telegram MTProto credentials | **CLOSED** | [#8073](https://github.com/nearai/ironclaw/pull/8073) ✅ Merged |
| **Low** | [#8059](https://github.com/nearai/ironclaw/pull/8059) `POST /responses/{id}/cancel` returns 400 in all states; wrong cancel reason sent | **OPEN (PR)** | [#8059](https://github.com/nearai/ironclaw/pull/8059) — fixes reason parsing |

**Stability Note**: Two user-facing Telegram onboarding bugs fixed today. The remaining open bug (#8074) is an edge case for paired users in misconfigured shared channels — lower blast radius but still a confusing error message.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Telegram Bot API command menu registration** (`setMyCommands`/`deleteMyCommands` at activation/deactivation) | [PR #8072](https://github.com/nearai/ironclaw/pull/8072) (L, low risk) | **High** — Ready for review, improves discoverability in Telegram clients |
| **Subagent background delivery boot/periodic sweep** (revival of stranded deliveries, counters, e2e) | [PR #8067](https://github.com/nearai/ironclaw/pull/8067) (XL, low risk) | **High** — Addresses a known gap (R4) where parent thread never runs again |
| **Concurrent children cap + child-gate card replay verification** | [PR #8061](https://github.com/nearai/ironclaw/pull/8061) (M, low risk) | **Medium** — Part of R2/R3 debt paydown; verification complete, cap enforcement pending |
| **WebUI: command result card dismissal, height preservation, slash-command menu alignment, active command scroll-into-view** | [PRs #8068–#8071](https://github.com/nearai/ironclaw/pull/8068) | **High** — Cohesive UI polish batch from `italic-jinxin`; all have regression tests |

**Prediction**: Next release will likely bundle the Telegram Bot API command menu, subagent delivery sweep, and the WebUI command-result UX improvements — all are open, low-risk, and have test coverage.

## 7. User Feedback Summary
*No direct user feedback (comments, reactions, or external issue reports) captured in the last 24h.* Pain points inferred from fixed bugs:
- **Telegram onboarding friction**: First-time users saw command list instead of pairing guidance — now fixed.
- **Misleading error messages**: Admin misconfiguration blamed the user — now fixed with actionable copy.
- **WebUI command-result clutter**: Cards could shrink, lacked dismissal, menu alignment was inconsistent — PRs open to address.

Use cases visible: Telegram personal-account linking, shared-channel agent invocation, subagent background task orchestration, LLM conversation caching across providers.

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#8074](https://github.com/nearai/ironclaw/issues/8074) Paired user in disconnected channel gets wrong notice | 1 day (created 2026-09-04) | **Only open bug**; affects paired users in a specific but valid config state. Low complexity fix (copy routing). |
| [#8067](https://github.com/nearai/ironclaw/pull/8067) Subagent boot/periodic sweep (R4) | 1 day | **Large scope (XL)**; completes a designed-but-unbuilt healing path for stranded background deliveries. Needs review for correctness. |
| [#8072](https://github.com/nearai/ironclaw/pull/8072) Telegram Bot API command menu registration | 1 day | **User-facing feature**; improves Telegram UX significantly. Low risk, but touches activation/deactivation lifecycle. |
| [#8059](https://github.com/nearai/ironclaw/pull/8059) Responses API cancel reason fix | 2 days | **API correctness**; cancel endpoint currently broken (always 400). Small fix but unblocks API compliance. |
| [#7988](https://github.com/nearai/ironclaw/pull/7988) Codebase knowledge graph refresh (CI bot) | 7 days | **Stale CI artifact**; auto-generated, likely needs merge to keep graph current for agent tooling. |

---
*Data sourced from GitHub API for `nearai/ironclaw` on 2026-09-05. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest – 2026-09-05

## 1. Today's Overview
LobsterAI shipped two releases in as many days (2026.9.4 and 2026.9.3), closed 28 pull requests, and updated one long-standing critical issue. The project shows **high velocity** with daily releases, a heavy focus on browser/cowork integration polish, and active CI hardening. The single open issue (#1071) flags three SQLite storage-layer integrity defects that remain unresolved since March, representing the most significant stability risk.

## 2. Releases
### **2026.9.4** (2026-09-04)  
[Release notes](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.9.4) | [PR #2618](https://github.com/netease-youdao/LobsterAI/pull/2618)
| Change | Type | Details |
|--------|------|---------|
| Restore interactive in-app browser | `feat(browser)` | Re-enables the in-app browser with improved session handling ([#2602](https://github.com/netease-youdao/LobsterAI/pull/2602)) |
| Confirm before install/quit | `feat(update)` | Adds a confirmation dialog when the app is about to install an update and quit ([#2609](https://github.com/netease-youdao/LobsterAI/pull/2609)) |
| Publishing enhancements | `feat(publishing)` | Subscription recovery flow, resource state sync, analytics instrumentation ([#2613](https://github.com/netease-youdao/LobsterAI/pull/2613)) |

**Breaking changes / migration notes**: None explicitly mentioned. The update confirmation may affect automated update workflows; test unattended installs.

### **2026.9.3** (2026-09-03)  
[Release notes](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.9.3) | [PR #2573](https://github.com/netease-youdao/LobsterAI/pull/2573), [#2574](https://github.com/netease-youdao/LobsterAI/pull/2574)
| Change | Type | Details |
|--------|------|---------|
| Login prompt before unauthenticated chat | `feat(cowork)` | Shows a welcome modal when an unauthenticated user without custom models tries to chat ([#2573](https://github.com/netease-youdao/LobsterAI/pull/2573)) |
| Interactive in-app browser (initial) | `feat(browser)` | First landing of the in-app browser feature ([#2574](https://github.com/netease-youdao/LobsterAI/pull/2574)) |
| Onboarding improvements | `feat(onboarding)` | Ongoing onboarding refinements (details in PR) |

## 3. Project Progress (Merged/Closed PRs – 2026-09-04)
| Area | Key PRs | Summary |
|------|---------|---------|
| **Browser / In-app** | [#2617](https://github.com/netease-youdao/LobsterAI/pull/2617) (open), [#2615](https://github.com/netease-youdao/LobsterAI/pull/2615), [#2602](https://github.com/netease-youdao/LobsterAI/pull/2602), [#2574](https://github.com/netease-youdao/LobsterAI/pull/2574) | Tab-strip UI, Unicode Windows path support, login feedback, credential settings persistence |
| **Cowork / Auth** | [#2612](https://github.com/netease-youdao/LobsterAI/pull/2612), [#2573](https://github.com/netease-youdao/LobsterAI/pull/2573), [#2596](https://github.com/netease-youdao/LobsterAI/pull/2596), [#2532](https://github.com/netease-youdao/LobsterAI/pull/2532) | Preserve model display during login refresh, login CTA analytics, promo tip fade-out |
| **Publishing / Subscription** | [#2613](https://github.com/netease-youdao/LobsterAI/pull/2613) | Subscription recovery entry points, auto vs. manual recovery distinction, analytics attribution |
| **CI / Build** | [#2616](https://github.com/netease-youdao/LobsterAI/pull/2616) | Bounded npm audit duration (90s/skill), non-blocking, stderr preserved |
| **Renderer / UX** | [#2503](https://github.com/netease-youdao/LobsterAI/pull/2503), [#2501](https://github.com/netease-youdao/LobsterAI/pull/2501), [#2599](https://github.com/netease-youdao/LobsterAI/pull/2599), [#2520](https://github.com/netease-youdao/LobsterAI/pull/2520), [#2603](https://github.com/netease-youdao/LobsterAI/pull/2603) | Edit context menu for text inputs, skill upgrade progress overlay, bot card layout, scrollable plugin install modal, i18n copy refinement |
| **Config / Misc** | [#2614](https://github.com/netease-youdao/LobsterAI/pull/2614), [#2521](https://github.com/netease-youdao/LobsterAI/pull/2521), [#2523](https://github.com/netease-youdao/LobsterAI/pull/2523), [#2571](https://github.com/netease-youdao/LobsterAI/pull/2571), [#2567](https://github.com/netease-youdao/LobsterAI/pull/2567), [#2598](https://github.com/netease-youdao/LobsterAI/pull/2598) | Test-mode API endpoint fix, message selection preservation, IM icons, phone nickname, guide window fixes |

**Velocity signal**: 28 PRs closed in 24h, spanning 10+ component areas – indicates a well-parallelized team and mature review process.

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Analysis |
|------|------|----------|-----------|----------|
| [#1071](https://github.com/netease-youdao/LobsterAI/issues/1071) | Issue | 1 | 0 | **Critical data-integrity defects** in SQLite storage (CASCADE failure, non-atomic writes, init-promise timeout). Open since March, tagged `stale`. No fix PR linked. Highest technical debt. |
| [#2617](https://github.com/netease-youdao/LobsterAI/pull/2617) | PR (open) | – | – | Browser tab-strip & login UX – active development, likely to land in next patch. |
| [#2613](https://github.com/netease-youdao/LobsterAI/pull/2613) | PR (closed) | – | – | Subscription recovery & analytics – touches monetization & retention, high business visibility. |

*Note: All PRs show `Comments: undefined` (likely 0). The sole issue comment on #1071 suggests low community discussion volume; the project appears driven by internal roadmap.*

## 5. Bugs & Stability
| Severity | Issue / PR | Description | Fix Status |
|----------|------------|-------------|------------|
| **Critical** | [#1071](https://github.com/netease-youdao/LobsterAI/issues/1071) | SQLite `ON DELETE CASCADE` ineffective → orphan messages; `save()` non-atomic → crash corruption; `storeInitPromise` timeout → permanent failure. | **No fix PR**; issue open since 2026-03-30. |
| **High** | [#2615](https://github.com/netease-youdao/LobsterAI/pull/2615) | Unicode Windows install paths broke in-app browser launcher. | **Fixed & merged** (2026-09-04). |
| **Medium** | [#2520](https://github.com/netease-youdao/LobsterAI/pull/2520) | Plugin install modal unusable with long errors (buttons hidden). | **Fixed & merged** (2026-09-04). |
| **Medium** | [#2616](https://github.com/netease-youdao/LobsterAI/pull/2616) | CI `npm audit` unbounded, causing pipeline stalls. | **Fixed & merged** (2026-09-04). |
| **Low** | [#2603](https://github.com/netease-youdao/LobsterAI/pull/2603) | Voice quota exhausted copy outdated. | **Fixed & merged** (2026-09-04). |

**Stability outlook**: Good patching cadence for surface bugs, but the core storage-layer issue (#1071) remains a **latent crash/data-loss risk** for production users.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **In-app browser tab management** (scrollable tab strip, adjacent-tab close) | [#2617](https://github.com/netease-youdao/LobsterAI/pull/2617) (open) | **High** – active PR, follows 2026.9.3/4 browser work. |
| **Subscription recovery & re-deployment flows** | [#2613](https://github.com/netease-youdao/LobsterAI/pull/2613) (merged) | **High** – just shipped, but analytics & edge cases will iterate. |
| **Login / onboarding friction reduction** | [#2573](https://github.com/netease-youdao/LobsterAI/pull/2573), [#2532](https://github.com/netease-youdao/LobsterAI/pull/2532), [#2596](https://github.com/netease-youdao/LobsterAI/pull/2596) | **High** – multiple merged PRs, clear conversion focus. |
| **Skill upgrade UX (progress overlay, security review)** | [#2501](https://github.com/netease-youdao/LobsterAI/pull/2501) | **Medium** – merged, but follow-up for error states likely. |
| **SQLite storage hardening** | [#1071](https://github.com/netease-youdao/LobsterAI/issues/1071) | **Uncertain** – no PR activity; may require dedicated sprint. |

## 7. User Feedback Summary
| Pain Point / Use Case | Evidence | Sentiment |
|------------------------|----------|-----------|
| **Data loss / corruption fear** | Issue #1071 describes production-grade SQLite defects. | 😟 High anxiety – no fix yet. |
| **Browser usability** | Rapid iteration on in-app browser (tab strip, login persistence, Unicode paths). | 😐 Mixed – feature exists but rough edges remain. |
| **Login / auth friction** | Welcome modal, promo tip fade-out, login CTA analytics. | 🙂 Improving – team actively smoothing onboarding. |
| **Plugin install errors** | Modal scrolling fix indicates users hit long error logs. | 😐 Functional but UX needed polish. |
| **Subscription management** | Recovery entry points, auto vs. manual distinction, analytics. | 🙂 Positive – investment in retention flows. |

## 8. Backlog Watch
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#1071](https://github.com/netease-youdao/LobsterAI/issues/1071) | **160 days** (opened 2026-03-30) | Open, `stale` | **Three coupled SQLite integrity bugs** – can cause silent data loss, orphan records, and permanent startup failure. Blocks trust in local-first storage. No assignee, no linked PR. **Top priority for maintainer triage.** |
| [#2617](https://github.com/netease-youdao/LobsterAI/pull/2617) | 1 day | Open | Browser tab-strip UX – likely next user-facing improvement. Needs review/merge. |
| [#2614](https://github.com/netease-youdao/LobsterAI/pull/2614) | 1 day | Closed | Test-mode API endpoint fix – ensure CI validates against correct environment. |

---

**Overall Health**: 🟢 **Active / Healthy** – daily releases, high PR throughput, broad component coverage.  
**Top Risk**: 🔴 **Storage-layer integrity** (#1071) – unaddressed for 5+ months.  
**Next Watch**: 2026.9.5 patch (browser tabs, login polish) and whether #1071 gets a fix branch.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-05

## 1. Today's Overview
Moltis shows minimal activity in the last 24 hours with **one new feature request** and **one open pull request**, both created within the past two days. No releases, merged PRs, or closed issues were recorded. The project appears to be in a quiet development phase, with the community focused on proposing enhancements rather than shipping changes. Overall project health signals low immediate velocity but active ideation around reasoning configuration and external agent integration.

## 2. Releases
No new releases published today.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours. The sole open PR ([#1258](https://github.com/moltis-org/moltis/pull/1258)) introduces a **first-class streaming transport for the `agy` CLI**, enabling direct reuse of Google OAuth sessions and translation of AGY’s `stream-json` output into Moltis-native event types (text, reasoning, tool calls, sub-agents, usage, resumable sessions). This work advances the **external agents** subsystem but remains under review.

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **Configurable default reasoning/thinking level (persist across sessions)** | Issue | 0 comments, 0 👍 | [#1259](https://github.com/moltis-org/moltis/issues/1259) |
| **feat(external-agents): add direct AGY streaming** | PR | 0 comments, 0 👍 | [#1258](https://github.com/moltis-org/moltis/pull/1258) |

**Analysis**: Both items are brand new with zero community engagement so far. The issue reflects a **user experience pain point**—users want persistent reasoning depth settings across sessions, suggesting frequent context-switching or multi-session workflows. The PR addresses **developer ergonomics for AI agent interoperability**, specifically lowering friction for `agy` (Google’s agent CLI) users. Neither has attracted discussion yet; maintainer triage will determine momentum.

## 5. Bugs & Stability
No bug reports, crashes, or regressions were filed or updated today. The issue tracker shows no open bug labels in the latest activity.

## 6. Feature Requests & Roadmap Signals
| Request | Signal Strength | Likelihood for Next Version |
|---------|----------------|-----------------------------|
| **Persistent, configurable default reasoning level** ([#1259](https://github.com/moltis-org/moltis/issues/1259)) | Medium — explicit enhancement request with preflight checklist completed | **High** — low scope, high UX value, aligns with session personalization trends |
| **Direct AGY streaming transport** ([#1258](https://github.com/moltis-org/moltis/pull/1258)) | Medium — PR exists but unmerged, targets external agent ecosystem | **Medium-High** — strategic for Google Cloud / Vertex AI integration; depends on review bandwidth |

**Prediction**: The reasoning-level persistence feature is a strong candidate for the next minor release due to its simplicity and clear user demand. The AGY streaming PR may land if maintainers prioritize external-agent polish.

## 7. User Feedback Summary
- **Pain point**: Users must manually re-set reasoning/thinking level at the start of every session, indicating repetitive manual configuration in multi-session workflows (e.g., coding assistants, research loops).  
- **Use case**: Desire for “set once, apply everywhere” behavior suggests Moltis is used in **long-running, context-heavy interactions** where cognitive load reduction matters.  
- **Sentiment**: Neutral — no complaints, but the enhancement request implies friction in current UX. No dissatisfaction signals detected.

## 8. Backlog Watch
No long-unanswered issues or PRs surfaced in today’s data. However, the following items **require maintainer attention** to prevent stagnation:
- **PR #1258** (AGY streaming) — Open since 2026-09-04, zero review activity. Strategic for ecosystem growth; assign reviewer.
- **Issue #1259** (reasoning persistence) — New but well-structured; triage and label for `good first issue` or `vNext` milestone to signal intent.

---

*Digest generated from GitHub data as of 2026-09-05. Links point to live items on github.com/moltis-org/moltis.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-05

---

## 1. Today's Overview
CoPaw shows **high development velocity** with 22 issues and 26 PRs updated in the last 24 hours. The project is in active stabilization for the **2.2.0 release cycle** (currently at beta.7), with maintainers closing 8 issues and merging ~6 PRs today. Core themes: **multi-tenant Hub preparation**, **Windows/Desktop reliability fixes**, **MCP security enforcement**, and **plugin/runtime architecture hardening**. No new release shipped today.

---

## 2. Releases
**No new releases** in the last 24h. Current latest: `2.2.0-beta.7` (Desktop/Windows installer). The community discussion [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) confirms **QwenPaw Hub (multi-tenant edition) targeting 2.2.0**.

---

## 3. Project Progress — Merged/Closed Today
| PR / Issue | Title | Type | Impact |
|------------|-------|------|--------|
| [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | `feat(skills): add workspace-scoped preload configuration` | Feature | Skills can now be preloaded per-workspace, avoiding first-turn tool-call latency |
| [#7504](https://github.com/agentscope-ai/QwenPaw/pull/7504) | `fix(mcp): enforce per-tool whitelist on the agent runtime path` | Security Fix | **Critical**: Disabled MCP tools were still callable; now enforced at runtime |
| [#7560](https://github.com/agentscope-ai/QwenPaw/pull/7560) | `fix(console): preserve selected loop mode query` | Bug Fix | Loop mode (Goal/Mission) now persists through navigation |
| [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | Stop button shows stopped but task continues executing | Bug Fix | Race condition in task cancellation |
| [#7552](https://github.com/agentscope-ai/QwenPaw/issues/7552) | Loop mode from composer menu never reaches backend | Bug Fix | `/goal` prefix was stripped; default loop used instead |
| [#7023](https://github.com/agentscope-ai/QwenPaw/issues/7023) | Desktop startup blocks 60s on Playwright Chromium install | Perf Fix | Startup critical path unblocked; lazy/skip option added |
| [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) | Workspace-scoped Skill preload policy | Feature | Accepted & implemented via #7183 |
| [#7510](https://github.com/agentscope-ai/QwenPaw/issues/7510) | `/memory/status` returns 500 on Desktop beta.7 | Bug Fix | Diagnostics endpoint restored |
| [#7470](https://github.com/agentscope-ai/QwenPaw/issues/7470) | MCP per-tool whitelist not enforced | Security Fix | Duplicate of #7504 root cause |
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | Task stops after planning messages (“Now 2.1, 3.1…”) | Bug Fix | Agent loop termination logic fixed |

---

## 4. Community Hot Topics
| Item | Comments | Reactions | Core Need |
|------|----------|-----------|-----------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) **QwenPaw Hub multi-tenant discussion** | 22 | 3 👍 | **Product direction**: Community wants team workspaces, admin-managed skills, shared memory, SSO, billing — shaping 2.2.0 Hub scope |
| [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) **LAN LLM server frequent disconnect/timeout** | 12 | 0 | **Reliability**: `client disconnect` → retries → timeout on LM Studio; blocks local model usage |
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) **Agent stops silently after planning output** | 12 | 0 | **Core UX**: Model outputs planning text but doesn’t execute; requires manual “continue” |
| [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) **409 error when sending message mid-task** | 4 | 0 | **Concurrency**: Users expect queueing; backend rejects with “A task is already running” |
| [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) **Feishu session consumer stuck silently** | 3 | 0 | **Integration stability**: High-priority card processing deadlocks consumer; new messages ignored |
| [#7550](https://github.com/agentscope-ai/QwenPaw/issues/7550) **Docker image updates lose codex cli/config** | 3 | 0 | **DX**: Persistent tooling in container images or one-click install needed |

**Signal**: Strong demand for **team/multi-tenant features** (#7318) and **local/LAN model reliability** (#7505). Silent agent stalls (#6921, #7534) erode trust.

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **Critical** | [#7470](https://github.com/agentscope-ai/QwenPaw/issues/7470) / [#7504](https://github.com/agentscope-ai/QwenPaw/pull/7504) | MCP per-tool whitelist bypassed — disabled tools remain callable | ✅ **Fixed** (#7504 merged) |
| **Critical** | [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | Stop button UI says stopped, but task continues executing | ✅ **Closed** (fix implied) |
| **High** | [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) | LAN LLM (LM Studio) client disconnect → retry → timeout | 🔴 Open, no fix PR |
| **High** | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | Agent outputs plan then halts; no auto-continue | ✅ **Closed** |
| **High** | [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) | Feishu consumer deadlock on high-priority card; session goes silent | 🔴 Open, no fix PR |
| **Medium** | [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) | 409 on new message during task — should queue instead | 🔴 Open |
| **Medium** | [#7552](https://github.com/agentscope-ai/QwenPaw/issues/7552) | Loop mode selection (Goal/Mission) not sent to backend | ✅ **Fixed** (#7560) |
| **Medium** | [#7555](https://github.com/agentscope-ai/QwenPaw/issues/7555) | Loop mode resets to “Default” on page switch | 🔴 Open |
| **Medium** | [#7023](https://github.com/agentscope-ai/QwenPaw/issues/7023) | 60s startup block on Playwright Chromium install | ✅ **Closed** |
| **Medium** | [#7549](https://github.com/agentscope-ai/QwenPaw/issues/7549) | Volcengine Ark rejects requests ending with assistant turn | 🔴 Open |
| **Medium** | [#7367](https://github.com/agentscope-ai/QwenPaw/issues/7367) | 30-45s startup importing all 18 channels (lark_oapi 18.5s) | 🔴 Open |
| **Medium** | [#7554](https://github.com/agentscope-ai/QwenPaw/issues/7554) | Shell tool child inherits stdin on Windows → hangs console | 🔴 Open |
| **Medium** | [#7548](https://github.com/agentscope-ai/QwenPaw/issues/7548) | Navigation history lost on conversation switch/restart | 🔴 Open |

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **QwenPaw Hub (multi-tenant)** — workspaces, admin skills, shared memory, SSO | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) (22 comments) | **Very High** — explicitly “coming in 2.2.0” |
| **Off-peak task scheduling** (Batch API, night discounts) | [#7568](https://github.com/agentscope-ai/QwenPaw/issues/7568) | Medium — cost optimization trend |
| **Pre-install codex cli / one-click in Docker** | [#7550](https://github.com/agentscope-ai/QwenPaw/issues/7550) | High — frequent Docker pain point |
| **Pluggable relational storage (PostgreSQL/MySQL)** for HA | [#7558](https://github.com/agentscope-ai/QwenP

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-05

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 50 pull requests updated in the last 24 hours (44 open, 6 closed/merged) and 3 issues updated. The project is in an active stabilization phase for **v0.8.5**, with a version bump PR (#10632) already open. Work spans provider reliability (Anthropic, Bedrock, Ollama), runtime robustness (context exhaustion, gateway disconnects, session persistence), security hardening (git operations, plugin HTTPS, credential rotation), and TUI/UX improvements (multi-session panes, chat navigation). No new releases were published today.

## 2. Releases

**No new releases today.** The v0.8.5 release is in progress — see PR #10632 (version bump to v0.8.5) and tracker issue #9459. The milestone froze intake on August 4 and targets weekly stabilization cuts through August 30.

## 3. Project Progress — Merged/Closed PRs Today (6)

| PR | Title | Area | Status |
|----|-------|------|--------|
| [#10158](https://github.com/zeroclaw-labs/zeroclaw/pull/10158) | feat(release): publish the workspace to crates.io | CI, release, 23-crate workspace | **Closed** |
| [#10153](https://github.com/zeroclaw-labs/zeroclaw/pull/10153) | feat(whatsapp-web): port to whatsapp-rust 0.7.0 | Dependencies, channels (WhatsApp) | **Closed** |
| [#10587](https://github.com/zeroclaw-labs/zeroclaw/pull/10587) | chore(deps): bump rust-all group (49 updates) | Dependencies | **Closed** |
| [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) | [Support]: Disable cachePoint for Bedrock Nova 2 Lite | Config, provider:bedrock | **Closed** (issue) |
| [#10390](https://github.com/zeroclaw-labs/zeroclaw/issues/10390) | [Bug]: Inactive Chat pane blocks ZeroCode navigation | zerocode/tui | **Closed** (issue) |
| [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) | [Tracker]: v0.8.5 finite weekly stabilization line | Release tracker | **Open** (tracker) |

**Key advances:** Crates.io publishing pipeline ready; WhatsApp Web dependency modernized; large dependency batch merged; two user-facing bugs resolved (Bedrock caching config, TUI chat navigation block).

## 4. Community Hot Topics — Most Active Items

| Item | Type | Comments | Summary |
|------|------|----------|---------|
| [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) | PR | High activity | **fix(anthropic): classify incomplete terminal responses** — reclassifies Anthropic `message_stop`-less responses as typed failures; touches 8+ providers. Critical for provider reliability. |
| [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) | PR | High activity | **feat(zerocode): multi-session panes with agent sidebar** — major TUI overhaul: bounded reconnect, multi-session lifecycle, sidebar-launched quickstart. |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | PR | High activity | **feat(providers): add native Hailo-Ollama support** — opt-in typed provider for Hailo-Ollama 0.5.1; marked `do-not-merge` pending review. |
| [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) | PR | High activity | **feat(sessions): persistent session prompt attachments** — SQLite-backed, up to 4 attachments/session, explicit approval for mutations. |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | PR | High activity | **fix(gateway): keep agent turns alive after viewer disconnect** — detaches dashboard WS without cancelling turn execution; injective gateway IDs. |

**Underlying needs:** Provider response classification correctness (avoid silent failures), TUI multi-session parity with modern IDEs, hardware-accelerated local inference (Hailo), durable session context, and resilient gateway/turn lifecycle for web/dashboard users.

## 5. Bugs & Stability — Reported/Fixed Today

| Severity | Item | Description | Fix PR |
|----------|------|-------------|--------|
| **S2 (Degraded)** | [#10390](https://github.com/zeroclaw-labs/zeroclaw/issues/10390) | Entering inactive Chat pane blocks ZeroCode navigation (sync wait on retryable init) | **Closed** — fix likely in recent TUI work |
| **Medium** | [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) | Bedrock Nova 2 Lite random caching error; need config to disable `cachePoint` | **Closed** — config option added/merged |
| **High** | [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) | Anthropic incomplete terminal responses misclassified as success | **Open** — in review, needs author action |
| **High** | [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | Gateway cancels agent turns on viewer WS disconnect | **Open** — needs author action |
| **High** | [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) | Credential rotation after rate limits incomplete (route/alias/fallback resolution) | **Open** — needs maintainer review |
| **Medium** | [#9504](https://github.com/zeroclaw-labs/zeroclaw/pull/9504) | Silent turn end on context exhaustion; no terminal notice | **Open** — adds `turn-context-exhausted` notice |
| **High** | [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) | Git operations escape allowed roots (security) | **Open** — constrains discovery to authorized roots |

**Stability signal:** Multiple high-severity provider/runtime bugs in active review; security hardening (git roots, plugin HTTPS, credential rotation) is a clear theme.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for v0.8.5+ |
|--------|--------|------------------------|
| **Multi-session TUI with sidebar/quickstart** | [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) | **High** — maintainer already merged master into branch; bounded reconnect done |
| **Persistent session prompt attachments (SQLite)** | [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) | **High** — experienced contributor, explicit approval design, security policy tagged |
| **Native Hailo-Ollama provider** | [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | **Medium** — `do-not-merge`, opt-in, hardware-specific; may slip to 0.9 |
| **Parallel Search MCP configuration example** | [#10631](https://github.com/zeroclaw-labs/zeroclaw/pull/10631) | **High** — docs-only, merged same day |
| **VI constraint tag alignment with spec** | [#10613](https://github.com/zeroclaw-labs/zeroclaw/pull/10613) | **High** — trusted contributor, spec compliance, 7/8 tags fixed |
| **Degraded config remediation bound to running executable** | [#10630](https://github.com/zeroclaw-labs/zeroclaw/pull/10630) | **High** — fixes #10532, small targeted fix |

**Predicted next version (v0.8.5):** TUI multi-session, session prompt attachments, config remediation fix, Parallel Search docs, VI spec alignment. Hailo-Ollama likely post-0.8.5.

## 7. User Feedback Summary

| Pain Point / Use Case | Source | Sentiment |
|------------------------|--------|-----------|
| **Bedrock Nova 2 Lite caching errors** — need config toggle to disable `cachePoint` | [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) | 😐 Neutral → ✅ Resolved (config added) |
| **Chat pane blocks navigation when inactive** — sync wait on retryable init | [#10390](https://github.com/zeroclaw-labs/zeroclaw/issues/10390) | 😠 Frustrated (S2) → ✅ Resolved |
| **Anthropic responses silently fail** without `message_stop` | [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) | 😠 Critical for reliability |
| **Dashboard disconnect kills agent turn** | [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | 😠 High impact for web users |
| **Context exhaustion ends turn silently** | [#9504](https://github.com/zeroclaw-labs/zeroclaw/pull/9504) | 😐 Degraded UX → fix in review |
| **Git ops escape sandbox** (allowed roots ignored) | [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) | 😨 Security concern |
| **Plugin HTTPS doesn't use system trust store** | [#10491](https://github.com/zeroclaw-labs/zeroclaw/pull/10491) | 😨 Security/enterprise blocker |

**Overall:** Users hit sharp edges in provider reliability (Bedrock, Anthropic), TUI responsiveness, and gateway resilience. Security hardening (git, plugins, credentials) is actively demanded. Satisfaction improving as fixes land.

## 8. Backlog Watch — Stalled / Needs Maintainer Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | 50 days | Hailo-Ollama native provider; hardware acceleration path | `do-not-merge`, needs review |
| [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) | 41 days | Credential rotation after rate limits — security/reliability | `needs-maintainer-review`, `do-not-merge` |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | 56 days | Gateway turn survival on viewer disconnect — core runtime | `needs-author-action` |
| [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) | 40 days | Anthropic response classification — provider correctness | `needs-author-action` |
| [#10241](https://github.com/zeroclaw-labs/zeroclaw/pull/10241) | 14 days | Channel supervised shell approval routing — multi-channel ops | `status:blocked`, `risk:high` |
| [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) | 33 days | Token accounting on history-trim — observability/cost control | `status:blocked` |
| [#10491](https://github.com/zeroclaw-labs/zeroclaw/pull/10491) | 6 days | Plugin HTTPS trust store — enterprise readiness | `needs-author-action`, `do-not-merge` |

**Action needed:** Maintainer bandwidth is the bottleneck. High-value, high-risk PRs (#9002, #9419, #9447, #10241) sit in `needs-author-action` or `blocked` for weeks. The v0.8.5 tracker (#9459) should prioritize unblocking these or explicitly deferring.

---

**Project Health:** 🟢 **Active / Stabilizing** — High PR throughput, release imminent, security/runtime quality focus. Main risk: maintainer review capacity for complex, high-risk PRs.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*