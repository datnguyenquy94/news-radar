# OpenClaw Ecosystem Digest 2026-08-08

> Issues: 254 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-08 02:04 UTC

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

# OpenClaw Project Digest — 2026-08-08

## 1. Today's Overview
OpenClaw shows **very high velocity** with **754 items updated in 24 hours** (254 issues, 500 PRs). The project is in active maintenance mode with 93 PRs merged/closed today, but also carries a substantial open backlog (240 active issues, 407 open PRs). No new release was cut. Critical stability issues (memory leaks, crash loops, silent failures) dominate the highest-priority open issues, while the PR queue shows focused fixes for compaction, channel ingress, session management, and CI hardening. The ratio of open-to-closed items suggests the project is absorbing new work faster than it can resolve the existing critical bug surface.

## 2. Releases
**No new releases today.** The latest version appears to be `2026.7.2-beta.5` (referenced in issues #116022, #117445, #116277).

## 3. Project Progress — Key Merged/Closed PRs Today
| PR | Scope | Impact |
|----|-------|--------|
| [#120420](https://github.com/openclaw/openclaw/pull/120420) | `fix(queue): deliver queued steers in arrival order across turn boundaries` | Fixes message ordering regression where later messages could overtake earlier steers |
| [#120418](https://github.com/openclaw/openclaw/pull/120418) | `test(qa): derive UX producer aggregate status` | QA infrastructure hardening for UX matrix scenarios |
| [#120410](https://github.com/openclaw/openclaw/pull/120410) | `test(clickclack): cover native progress default` | Test coverage for ClickClack native progress flag |
| [#120395](https://github.com/openclaw/openclaw/pull/120395) | `fix(ci): honor env- and config-selected Windows targets` | CI reliability for Windows build targets |
| [#120381](https://github.com/openclaw/openclaw/pull/120381) | `fix(gateway): refresh attributed message avatars` | UI fix for stale sender avatars in chat |
| [#120372](https://github.com/openclaw/openclaw/pull/120372) | `fix(ui): hide connection form during initial auth` | UX polish for Control UI authentication flow |
| [#120362](https://github.com/openclaw/openclaw/pull/120362) | `test(qa): cover session and Workboard managed-worktree lifecycles` | QA coverage for worktree lifecycle management |
| [#120365](https://github.com/openclaw/openclaw/pull/120365) | `fix(ci): harden hydrated dead-export scans` | Fixes false positives in AWS-hydrated CI environments |
| [#117644](https://github.com/openclaw/openclaw/pull/117644) | `fix: Agent emits Unix commands in PowerShell on Windows` | Cross-platform compatibility for embedded agent commands |
| [#112864](https://github.com/openclaw/openclaw/pull/112864) | `fix: Gateway hangs on restart after config set` | Container crash-loop fix for hot-reload partial JSON reads |

**Theme:** Today's merges concentrate on **queue ordering, CI reliability, Windows compatibility, session/worktree lifecycle QA, and UI polish** — largely stabilization work rather than new features.

## 4. Community Hot Topics — Most Active Discussions
| Item | Comments | Core Need |
|------|----------|-----------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) **DeepSeek v4 Flash silent reply failure** (129 💬) | 129 | **Model reliability**: Silent fallback with "No reply generated" — users lose messages without observability. P1, diamond-lobster rating. |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) **Realtime voice unbounded provider/consult state** (59 💬) | 59 | **Resource bounds**: Voice sessions retain superseded consult work, large frames, pre-ready audio without hard ownership limits. P1, needs product decision. |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) **Memory Trust Tagging by Source** (29 💬) | 29 | **Security**: Prevent memory poisoning from untrusted sources (web scrapes, third-party skills). P2, needs security review. |
| [#77598](https://github.com/openclaw/openclaw/issues/77598) **Track live dev agent behavior** (23 💬) | 23 | **Observability**: 24-hour observational watch of a dev agent — community wants better agent behavior tooling. |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) **Gateway Memory Leak — RSS 350MB → 15.5GB** (22 💬) | 22 | **Critical stability**: OOM kills trigger `launchd-handoff` restart loops. P0, gold-shrimp, stable maturity. **No fix PR linked.** |
| [#116382](https://github.com/openclaw/openclaw/pull/116382) **Avoid false branch-switch errors** (PR, XL) | — | Fixes #115700 (9 💬) — stale `expectedLeafEntryId` causing "thread switched branches" rejections. Video proof attached. |

**Pattern:** Top discussions cluster around **silent failures (model/voice), unbounded resource growth, memory security, and observability gaps** — all high-impact user-trust issues.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P0** | [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway Memory Leak | RSS grows 350MB → 15.5GB over 2-3 days → OOM kills → restart loops | ❌ None linked |
| **P0** | [#119263](https://github.com/openclaw/openclaw/issues/119263) Agent DB v14→v15 migration fails | `no such column: entry_valid` — gateway refuses to start after upgrade | ❌ None linked |
| **P1** | [#116277](https://github.com/openclaw/openclaw/issues/116277) DeepSeek v4 Flash silent failure | No reply generated, generic fallback, message loss | ❌ Linked PR open |
| **P1** | [#116201](https://github.com/openclaw/openclaw/issues/116201) Realtime voice unbounded state | Retains superseded consult work, large frames under bursty conditions | ❌ Needs product decision |
| **P1** | [#116022](https://github.com/openclaw/openclaw/issues/116022) `/new` reuses stable session ID | Cannot recover retired Codex binding tombstone | ❌ Linked PR open |
| **P1** | [#115700](https://github.com/openclaw/openclaw/issues/115700) `chat.send` rejected "thread switched branches" | Stale `expectedLeafEntryId` not refreshed after model retry/fallback/compaction | ✅ [#116382](https://github.com/openclaw/openclaw/pull/116382) (open, needs proof) |
| **P1** | [#94939](https://github.com/openclaw/openclaw/issues/94939) 6.x state migration leaves SQLite empty | Channel conversation-store migration breaks proactive sends (MS Teams) | ❌ Linked PR open |
| **P1** | [#119009](https://github.com/openclaw/openclaw/issues/119009) Runaway retry loop bills $204 | 1,081 calls over 3h — each retry resets progress clock, never detected as stalled | ✅ Closed (fix implied) |
| **P1** | [#86050](https://github.com/openclaw/openclaw/issues/86050) Gateway buffers claude-cli stream events | Surfaces see only final assembled message, no streaming | ❌ Linked PR open |
| **P1** | [#119401](https://github.com/openclaw/openclaw/issues/119401) DM NO_REPLY suppression unconditional | Ignores `silentReply` policy — no way to force visible replies on small/local models | ❌ None |
| **P1** | [#117209](https://github.com/openclaw/openclaw/issues/117209) AuthProfileStoreUnreadable sticky | After runtime snapshot publication failure, WeCom/agent replies fail until gateway restart | ❌ Linked PR open |
| **P1** | [#119333](https://github.com/openclaw/openclaw/issues/119333) Codex `request_user_input` exposed in Default mode | Tool described as Plan-mode only but exposed in Default — runtime rejection | ❌ Needs maintainer review |

**Critical gap:** Two P0 issues (#91588 memory leak, #119263 DB migration) have **no fix PRs visible** and block production stability.

## 6. Feature Requests & Roadmap Signals
| Issue | Signals | Likelihood for Next Version |
|-------|---------|----------------------------|
| [#22438](https://github.com/openclaw/openclaw/issues/22438) Tiered bootstrap file loading (18 💬) | Progressive context control — users want to stop wasting 20-30% tokens on unreferenced files | **High** — compaction/session-state pain is acute; PR #119275 addresses related compaction bug |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) Session context bloat (11 💬, 2 👍) | Bootstrap files re-injected every turn, wasting 20-30% tokens | **High** — direct token-cost impact; related to #22438 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging (29 💬) | Security: tag memory by source to prevent poisoning | **Medium** — needs security review, P2, but high community interest |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) Channel-mediated approval for MCP tools (16 💬, 1 👍) | Extend `/approve` flow to MCP tool calls (email, vault writes) | **Medium** — security-sensitive, needs product decision |
| [#35203](https://github.com/openclaw/openclaw/issues/35203) Multi-Agent: Capability Profiling + Shared Blackboard (11 💬) | RFC for layered memory, token cost governance, task delegation | **Low** — architectural, "off-meta tidepool", needs multiple reviews |
| [#44395](https://github.com/openclaw/openclaw/issues/44395) Heading-aware chunking + entity extraction (7 💬, 2 👍) | Semantic memory chunking instead of fixed-size | **Medium** — improves retrieval quality, P2 |
| [#54373](https://github.com/openclaw/openclaw/issues/54373) Context Provenance metadata (7 💬, 1 👍) | Source/volatility metadata on injected context segments | **Medium** — enables agent reasoning about context freshness |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) Per-model usage logging (7 💬, 1 👍) | Native cost tracking and model-mix optimization | **High** — practical ops need, low complexity |
| [#95601](https://github.com/openclaw/openclaw/issues/95601) VoiceOver-friendly chat history (4 💬, 2 👍) | Accessibility: keyboard-reachable usage display appreciated, needs chat history | **Medium** — a11y follow-up, positive user feedback on recent usage display |

**Strongest signals:** Token efficiency (bootstrap/context bloat), cost observability, and memory security. The compaction fixes merging today (#119275) suggest the team is actively attacking the token-waste problem.

## 7. User Feedback Summary — Real Pain Points
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Silent message loss** | #116277 (DeepSeek), #119401 (DM NO_REPLY), #90789 (claude-cli "No response requested.") | Users receive no reply, no error, no observability — trust erosion |
| **Memory/index corruption** | #119263 (DB migration fails), #119411 (watcher never reindexes, `Dirty: no` lie), #94939 (SQLite empty after migration) | Upgrades break installations; memory silently freezes |
| **Runaway costs** | #119009 ($204 in retries undetected), #87136 (absolute compaction thresholds break on model switch) | Financial shock; no circuit breakers on retry loops |
| **Cross-platform breakage** | #117644 (Unix `head`/`~` in PowerShell), #51429 (hardcoded `/Users/wangtao` path shipped) | Windows users blocked; hardcoded paths indicate QA gaps |
| **Voice/realtime unreliability** | #116201 (unbounded state), #88079 (reasoning_content not streamed for Kimi/DeepSeek), #52186 (ElevenLabs audio plays OpenAI voice) | Voice features feel experimental; provider-specific bugs |
| **Session state fragility** | #116022 (tombstone recovery), #115700 (stale leaf ID), #117358 (compaction delays replies), #96477 (single-writer lock limits scaling) | Multi-user/production deployments hit locking and state-corruption walls |
| **Observability gaps** | #77598 (24h agent watch needed), #13219 (no per-model usage logs), #87362 (no task flow hooks for plugins) | Operators fly blind on agent behavior and costs |

**Sentiment:** Frustration with **silent failures** and **upgrade instability** dominates. Positive note on #95601: accessibility improvements in v2026.6.9 were genuinely appreciated.

## 8. Backlog Watch — Stalled High-Value Items Needing Maintainer Attention
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway Memory Leak | **~60 days** (2026-06-09) | P0, 22 💬, **no fix PR** | **Production blocker** — OOM kills every 2-3 days |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging | **~187 days** (2026-02-03) | P2,

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-08-08 | **Projects Analyzed:** 12 (9 active, 3 inactive)

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape is **fragmented but vibrant**, with 9 actively maintained projects showing distinct architectural philosophies. A clear bifurcation exists between **full-stack desktop/gateway platforms** (OpenClaw, LobsterAI, CoPaw, Hermes Agent) and **lightweight/embedded runtimes** (PicoClaw, NanoClaw, ZeroClaw, IronClaw, NanoBot). No single project dominates; instead, specialization is emerging around **channel integration breadth** (Telegram, WeChat, Slack, Mattermost, Discord), **model/provider abstraction**, and **session/memory durability**. Release cadences vary from daily (LobsterAI) to sporadic (ZeroClaw, IronClaw), with most projects in **active stabilization phases** ahead of major version cuts. Security hardening, cross-platform reliability, and token-cost observability are the three universal pain points driving current development.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged PRs | Release Status | Health Score |
|---------|--------------|-----------|------------|----------------|--------------|
| **OpenClaw** | 254 | 500 | 93 | `2026.7.2-beta.5` (stale) | 🟡 **High velocity, critical backlog** |
| **NanoBot** | 9 | 21 | 11 | None recent | 🟢 **Strong stabilization** |
| **Hermes Agent** | 7 | 50 | 5 | None (pre-release) | 🟡 **Active sprint, pre-release** |
| **PicoClaw** | 4 | 14 | 2 | None | 🟢 **Healthy maintenance** |
| **NanoClaw** | 1 | 10 | 2 | None | 🟢 **Focused iteration** |
| **IronClaw** | 16 | 50 | 6 | `1.1.0-rc.1` | 🟡 **High velocity, debt accumulation** |
| **LobsterAI** | 6 | 7 | 6 | **v2026.8.7 (yesterday)** | 🟢 **Release cadence leader** |
| **CoPaw** | 22 | 47 | 21 | **v2.1.0-beta.2** | 🟢 **Beta hardening** |
| **ZeroClaw** | 15 | 50 | 1 | None (stalled) | 🔴 **High churn, low merge rate** |
| NullClaw | 0 | 0 | 0 | — | ⚫ Inactive |
| Moltis | 0 | 0 | 0 | — | ⚫ Inactive |
| ZeptoClaw | 0 | 0 | 0 | — | ⚫ Inactive |

**Key Insight:** OpenClaw processes **10× more PR volume** than the next project (Hermes/IronClaw at 50), but its **open-to-closed ratio (407 open PRs / 93 merged)** signals absorption strain. LobsterAI and CoPaw demonstrate the healthiest **release-to-activity ratios**.

---

## 3. OpenClaw's Position

### Advantages vs Peers
| Dimension | OpenClaw Edge |
|-----------|---------------|
| **Scale & Ecosystem** | Largest contributor base; 754 items/24h dwarfs peers; reference implementation for "Claw" protocol |
| **Channel Breadth** | Native support for MS Teams, Slack, Discord, WeCom, Matrix, Email, SMS — most comprehensive |
| **Session/Worktree Model** | Advanced multi-tenant session management with managed worktrees (PR #120362) |
| **Compaction & Token Governance** | Deepest investment in context compaction, bootstrap tiering (#22438), and cost observability (#13219) |
| **Enterprise Features** | Gateway memory tagging (#7707), approval flows (#78308), audit trails |

### Technical Approach Differences
- **Monolithic Gateway + Agent Runtime** vs. PicoClaw/NanoClaw/ZeroClaw's **lightweight Go/Rust runtimes** with plugin architectures
- **SQLite-heavy state** (channel stores, session DBs) vs. IronClaw's **durable-state compatibility gates** and NanoBot's **Dream memory pipeline**
- **TypeScript/Node core** vs. Hermes Agent's **Python-first** and IronClaw/PicoClaw/ZeroClaw's **Go/Rust** cores

### Community Size
- **Issues/PRs:** 10× nearest competitor (Hermes Agent: 57 vs 754)
- **Discussion Depth:** 129 comments on #116277 (DeepSeek failure) — highest single-thread engagement in ecosystem
- **Risk:** Community trust eroding due to **silent failures** (P0 memory leak #91588 unfixed 60 days, P0 DB migration #119263 blocking upgrades)

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Token/Cost Observability** | OpenClaw (#13219, #119009), NanoBot (#5266), Hermes Agent (#80449), IronClaw (#7372), ZeroClaw (#9816) | Per-call logging, budget circuit-breakers, provider spend accuracy, compression budget enforcement |
| **Cross-Platform Reliability (Windows)** | OpenClaw (#117644), NanoBot (#5149), PicoClaw (#3319), CoPaw (#6810, #6807), LobsterAI (#2446) | Installer locking, path handling, shell command parity, ffmpeg/Whisper.cpp integration |
| **Session/Memory Durability** | OpenClaw (#116022, #115700), NanoBot (#5272, #5280), Hermes Agent (#57582), IronClaw (#7380), ZeroClaw (#9840) | Upgrade-safe migrations, fallback recovery, daemon socket stability, archival pipelines |
| **Channel Integration Parity** | OpenClaw (MS Teams, WeCom), NanoBot (WeChat, Matrix, Telegram), PicoClaw (WhatsApp, WeChat), NanoClaw (Mattermost, Dial), CoPaw (WeChat, Telegram), ZeroClaw (Telegram, XMPP) | Audio/media send/receive, session list/switch, approval flows, health-check accuracy |
| **Security Hardening** | OpenClaw (#7707), NanoBot (#5278, #5283), IronClaw (#7375-7379), ZeroClaw (#9815, #9433, #9839), Hermes Agent (#81407) | Memory trust tagging, session sandbox isolation, SSRF protection, policy enforcement, leak detector precision |
| **Model/Provider Abstraction** | All 9 active projects | Fallback chain resilience (Hermes #57582, ZeroClaw #9812), namespaced model IDs (LobsterAI #2443), provider refresh (PicoClaw #3271), tool-calling compatibility (ZeroClaw #9820) |

---

## 5. Differentiation Analysis

| Project | Target User | Architectural Focus | Unique Differentiator |
|---------|-------------|---------------------|----------------------|
| **OpenClaw** | Enterprise teams, power users | Full-stack gateway + desktop + agent runtime | **Reference implementation**; deepest session/worktree model; multi-channel enterprise connectors |
| **LobsterAI** | Chinese-market desktop users | Electron wrapper on OpenClaw core | **Daily releases**; Windows installer polish; IM bot analytics; cowork search UX |
| **CoPaw** | Chinese developers, Qwen ecosystem | Web-first (React) + desktop + ACP protocol | **ACP-native**; plugin/app markets; Volcengine/Xiaomi provider parity; mailbox assistant |
| **Hermes Agent** | Distributed teams, researchers | Python-first, cron/SOP automation, Tailscale remote | **Cron/SOP engine**; delegation model; composer bridge for desktop plugins |
| **IronClaw** | Platform builders, NEAR ecosystem | Rust core, durable-state contracts, doc-truth pipeline | **Doc-Truth verification**; progressive tool disclosure; sandbox profiles (Docker/Railway) |
| **NanoBot** | Self-hosters, multi-channel operators | Go runtime, Dream memory, channel adapters | **Dream autonomous memory**; WeChat/Matrix/Telegram parity; per-session sandbox |
| **PicoClaw** | Embedded/lightweight deployments | Go, minimal deps, prefix-caching optimization | **WhatsApp/WeChat native**; prefix-caching aware context; OAuth 2.1 MCP prep |
| **NanoClaw** | Channel-first integrators | v2 ChannelAdapter architecture, skill marketplace | **Setup wizard + first-agent templates**; Mattermost/Dial channel skills |
| **ZeroClaw** | Security-conscious, plugin authors | Rust, capability catalog RFC, policy enforcement | **Unified catalog contract**; Agent Plugins 1.0; leak detector; hardware abstraction |

**Architectural Spectrum:**  
`Monolithic Gateway (OpenClaw/LobsterAI)` → `Modular Runtime + Adapters (NanoBot/PicoClaw/NanoClaw/ZeroClaw/IronClaw)` → `Automation-First (Hermes Agent)` → `Web-First ACP (CoPaw)`

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Release Leaders** | LobsterAI, CoPaw | Regular cuts (daily/weekly); beta → stable pipeline; user-facing polish prioritized |
| **Stabilization Sprint** | NanoBot, PicoClaw, NanoClaw, Hermes Agent | High merge rates; bug-fix dominant; clearing backlog before version cut |
| **High Velocity, Structural Debt** | OpenClaw, IronClaw | Massive throughput but growing P0/P1 backlogs; architectural refactors in flight (Doc-Truth, compaction, catalog) |
| **Churn Without Release** | ZeroClaw | 50 PRs/24h but 1 merged; 10+ security PRs stalled on `needs-author-action`; RFCs blocking features |
| **Dormant** | NullClaw, Moltis, ZeptoClaw | No 24h activity; likely archived or pre-launch |

**Maturity Signal:** Only **LobsterAI** and **CoPaw** ship user-facing releases on a predictable cadence. Most projects are **pre-1.0 or beta** with breaking changes expected.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Token Governance as First-Class Feature** | 6/9 projects building budget circuits, compression budgets, per-call logging | **High** — Cost predictability becoming table stakes for production adoption |
| **Channel Parity > New Channels** | Every project fixing audio/media/session parity on *existing* channels (WhatsApp, Telegram, WeChat) | **High** — Users demand feature parity across interfaces, not breadth |
| **Upgrade Safety as Blocking Criterion** | OpenClaw DB migration, IronClaw durable-state gate, ZeroClaw daemon socket, Hermes fallback recovery | **Critical** — Silent upgrade failures (#119263, #9840) destroy trust faster than missing features |
| **Security Isolation by Default** | NanoBot session sandbox, ZeroClaw policy enforcement, IronClaw sandbox profiles, Hermes SSRF fixes | **Rising** — Multi-tenant/self-hosted deployments require provable isolation |
| **Model-Agnostic Tool Calling** | ZeroClaw Nemotron pseudo-syntax, Hermes custom endpoint crashes, PicoClaw exec tool schema, CoPaw StepFun 400 | **High** — Non-OpenAI models need first-class tool-calling support, not fallbacks |
| **Observability Gaps Drive Churn** | OpenClaw silent failures, NanoBot token burn, Hermes cron failures, ZeroClaw health-check lies | **Immediate** — "Silent failure" is the #1 trust killer; projects adding traces/logs win retention |
| **ACP / Plugin Standardization** | CoPaw ACP-native, ZeroClaw Agent Plugins 1.0 RFC, NanoClaw skills, IronClaw tool disclosure | **Emerging** — Ecosystem converging on portable skill/MCP packages; early adopters gain leverage |

---

## Summary for Decision-Makers

| If You Need... | Best Fit |
|----------------|----------|
| **Enterprise-ready, multi-channel gateway** | OpenClaw (but budget for P0 stability work) |
| **Daily-driver desktop with Chinese UX polish** | LobsterAI |
| **Web-first, plugin-extensible, ACP-native** | CoPaw |
| **Lightweight self-hosted multi-channel bot** | NanoBot or PicoClaw |
| **Automation/SOP/cron-heavy workflows** | Hermes Agent |
| **Rust durability, doc-contract enforcement** | IronClaw |
| **Security-first, capability catalog design** | ZeroClaw (once RFCs land) |
| **Channel-skill marketplace, easy onboarding** | NanoClaw |

**Ecosystem Verdict:** The field is **consolidating around three patterns** — **Gateway Monoliths** (OpenClaw/LobsterAI), **Adapter Runtimes** (NanoBot/PicoClaw/ZeroClaw/IronClaw), and **Protocol-Native Web Apps** (CoPaw). Cross-project convergence on **token governance, upgrade safety, and security isolation** indicates the next 6 months will define the production-grade baseline. Developers should invest in **adapter-pattern runtimes** for flexibility, but **monitor OpenClaw's compaction/session work** — it sets the reference for context management at scale.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-08

## 1. Today's Overview
NanoBot shows **high velocity** with 21 PRs updated and 9 issues active in the last 24 hours. The project is in a **stabilization and hardening phase**: 11 PRs were merged/closed today, addressing session integrity, WebUI routing, channel reliability (WeChat, Matrix, Telegram), memory management, and security isolation. No new release was cut, but the volume of merged fixes suggests a patch release is imminent. Community engagement is moderate — one token-consumption issue (#5266) has drawn 10 comments, indicating a widespread pain point.

## 2. Releases
**No new releases** published today. The last release metadata is not provided in the dataset.

## 3. Project Progress — Merged/Closed PRs Today (11)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#5287](https://github.com/HKUDS/nanobot/pull/5287) | fix(channels): preserve global progress defaults | Channels | Restores `sendProgress`/`sendToolHints` defaults for channels not opting into transport-specific overrides; adds Mattermost regression test. |
| [#5268](https://github.com/HKUDS/nanobot/pull/5268) | fix(webui): stage out-of-media-root attachments on history reads | WebUI / Media | Fixes missing `media_urls` for assistant attachments outside `<workspace>/media/` in `GET /api/sessions/{key}/messages`. |
| [#5263](https://github.com/HKUDS/nanobot/pull/5263) | fix(weixin): harden protocol delivery, streaming, and login | WeChat Channel | Aligns with `@tencent-weixin/openclaw-weixin` 2.4.6; fixes QR challenges, binding handling, retry logic, stale connections. |
| [#5285](https://github.com/HKUDS/nanobot/pull/5285) | fix(webui): preserve newly created topic route | WebUI | Prevents route loss between `createChat` response and optimistic session list update; adds regression test. |
| [#5284](https://github.com/HKUDS/nanobot/pull/5284) | refactor(webui): remove legacy session messages route | WebUI | Deletes undocumented `/api/sessions/{key}/messages` route and associated media-hydration code; simplifies surface. |
| [#5282](https://github.com/HKUDS/nanobot/pull/5282) | fix: modernize dependency recovery guidance | Docs / DX | Replaces stale direct-package install hints with `nanobot plugins enable …` commands for Langfuse, Olostep, WeChat, oauth-cli-kit. |
| [#5281](https://github.com/HKUDS/nanobot/pull/5281) | fix(webui): keep activity text crisp while fading edges | WebUI / UI | Replaces scrollport mask with pointer-transparent sibling gradients; 53 test files / 939 assertions pass. |
| [#5277](https://github.com/HKUDS/nanobot/pull/5277) | feat(webui): expand model preset editor inline | WebUI / UX | Inline expandable editor for model presets; collapses on re-click; responsive on wide/narrow layouts. |
| [#5280](https://github.com/HKUDS/nanobot/pull/5280) | fix(memory): archive short idle sessions for Dream | Memory / Dream | Ensures short sessions that never exceed retention suffix still produce `history.jsonl` entries for Dream processing. |
| [#5272](https://github.com/HKUDS/nanobot/pull/5272) | fix(session): preserve proactive channel delivery during retention trimming | Session / Channels | Fixes #5273 — retains `_channel_delivery` messages (cron, job notifications) when trimming history. |
| [#5231](https://github.com/HKUDS/nanobot/pull/5231) | feat(memory): archive idle sessions for Dream | Memory / Dream | Adds idle-session archival so Dream receives input from sessions that never hit message/file caps. |

**Net advancement**: Session durability, channel robustness (WeChat, Matrix, Telegram), WebUI routing/UX, memory/Dream pipeline, and security posture all improved in a single day.

## 4. Community Hot Topics
| Item | Comments | Signal |
|------|----------|--------|
| [#5266](https://github.com/HKUDS/nanobot/issues/5266) Logs about token consumption (enhancement) | **10** | **Top community pain point** — users see “millions of tokens burned in 2 hours without noticeable activity.” Demand: per-call token logging to audit/optimize spend. |
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) no audio? (bug) | **5** | WhatsApp audio **send** fails (receive works); ffmpeg warning in logs. Blocks voice-agent use cases. |
| [#5276](https://github.com/HKUDS/nanobot/issues/5276) Allow enforcing session-level temporary file isolation | **2** | Multi-tenant / shared-workspace users need per-session sandbox to prevent cross-session leakage. |
| [#5290](https://github.com/HKUDS/nanobot/issues/5290) Deduplicate atomic JSONL write idiom | **1** | Code-health: three copies of temp-file + fsync + replace pattern; maintainers invited to centralize. |

**Underlying needs**: Cost observability (token logging), media parity (WhatsApp audio), and multi-tenancy safety (session isolation) are the loudest user demands.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#5256](https://github.com/HKUDS/nanobot/issues/5256) `/goal` produces dozens of repeated replies while waiting for user answer | Runaway loop floods chat; ends only on user intervention or model self-cancel. | No PR yet |
| **High** | [#5149](https://github.com/HKUDS/nanobot/issues/5149) WhatsApp audio send broken | `send_audio` never delivers; ffmpeg warning suggests codec/pipe issue. | No PR yet |
| **Medium** | [#5264](https://github.com/HKUDS/nanobot/issues/5264) History endpoint omits `media_urls` for files outside media root | **Fixed** by [#5268](https://github.com/HKUDS/nanobot/pull/5268) (merged). |
| **Medium** | [#5273](https://github.com/HKUDS/nanobot/issues/5273) Microsoft 365 Copilot AI is a powerful tool that can help you with a variety of tasks, from writing and editing to data analysis and presentation creation. It uses advanced AI models to understand your requests and generate relevant content, making it a valuable asset for productivity and creativity. Whether you need help drafting an email, analyzing a dataset, or designing a presentation, Microsoft 365 Copilot can assist you every step of the way. | Session trimming drops proactive `_channel_delivery` messages before user reply. | **Fixed** by [#5272](https://github.com/HKUDS/nanobot/pull/5272) (merged). |
| **Medium** | [#5278](https://github.com/HKUDS/nanobot/issues/5278) Session history lives inside agent workspace (security) | Agent file tools can read/delete session files when `restrict_to_workspace=true`. | **Fix PR open**: [#5279](https://github.com/HKUDS/nanobot/pull/5279) moves history outside workspace. |
| **Low** | [#5290](https://github.com/HKUDS/nanobot/issues/5290) Triplicated atomic JSONL write code | Maintenance risk; no runtime bug yet. | No PR yet |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Per-call token consumption logging** | [#5266](https://github.com/HKUDS/nanobot/issues/5266) (10 comments) | **High** — widespread cost anxiety; low implementation risk (add log hooks in LLM client). |
| **WhatsApp audio send support** | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | **Medium** — requires ffmpeg/pipe debugging; may need neonize upstream fix. |
| **Per-session sandbox isolation (opt-in)** | [#5276](https://github.com/HKUDS/nanobot/issues/5276), [#5283](https://github.com/HKUDS/nanobot/pull/5283) | **High** — PR [#5283](https://github.com/HKUDS/nanobot/pull/5283) already open with implementation; aligns with security hardening trend. |
| **Telegram stickers & agent-initiated reactions** | [#5289](https://github.com/HKUDS/nanobot/issues/5289) | **Medium** — new feature, but Telegram channel is active; PR likely soon. |
| **Agent Plugins v1 integration with CLI Apps catalog** | [#5288](https://github.com/HKUDS/nanobot/pull/5288) | **High** — PR open; unifies plugin & catalog install paths. |
| **Temporary Chat mode in WebUI** | [#5252](https://github.com/HKUDS/nanobot/pull/5252) | **High** — PR open; ephemeral multi-turn chats without persistence. |

## 7. User Feedback Summary
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Unpredictable token burn** | “million tokens in 2 hours without noticeable activity” ([#5266](https://github.com/HKUDS/nanobot/issues/5266)) | Cost surprise; blocks production budgeting. |
| **WhatsApp voice broken** | “will not send audio message… does receive them” ([#5149](https://github.com/HKUDS/nanobot/issues/5149)) | Voice-agent workflows unusable on WhatsApp. |
| **Session history exposed to agent** | “agent can `read_file` / `list_dir` session files” ([#5278](https://github.com/HKUDS/nanobot/issues/5278)) | Security/compliance risk in shared workspaces. |
| **Proactive notifications lost** | Cron/job deliveries trimmed before user sees them ([#5273](https://github.com/HKUDS/nanobot/issues/5273)) | Missed alerts, broken automation trust. |
| **WebUI route flakiness** | New topic route lost on refresh ([#5285](https://github.com/HKUDS/nanobot/pull/5285)) | UX friction; users think chat disappeared. |

**Positive signals**: Rapid fix turnaround (multiple same-day merges), active WebUI polish (inline preset editor, temp chat), and Dream memory pipeline maturation.

## 8. Backlog Watch — Stale / Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#4276](https://github.com/HKUDS/nanobot/pull/4276) feat(tools): model-agnostic computer use (computer_use + browser tools) | Open since **2026-06-10** (~60 days) | Major feature: desktop/browser automation as native tools. Large PR, needs review bandwidth. |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) fix(telegram): recover from silently stalled polling | Open since **2026-07-29** (~10 days) | Fixes silent message loss after network blips; production-affecting. |
| [#5260](https://github.com/HKUDS/nanobot/pull/5260) fix(memory): ignore runtime files inside tracked workspace dirs | Open since **2026-08-05** | Prevents memory pollution from build artifacts; includes backfill for existing workspaces. |
| [#5283](https://github.com/HKUDS/nanobot/pull/5283) feat(workspace): per-session sandbox isolation for non-WebUI channels | Open **today** | Security-critical; implements opt-in isolation requested in [#5276](https://github.com/HKUDS/nanobot/issues/5276). |
| [#5279](https://github.com/HKUDS/nanobot/pull/5279) fix(session): store session history outside agent workspace | Open **today** | Direct fix for [#5278](https://github.com/HKUDS/nanobot/issues/5278); moves history to `~/.nanobot/sessions/` global. |

---

**Project Health**: 🟢 **Strong** — high merge throughput, security hardening, and active community dialogue. The main risks are **token-cost observability** (user trust) and **WhatsApp audio** (platform parity). Expect a patch release within days bundling today’s 11 merges.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-08

## 1. Today's Overview
Hermes Agent shows **high internal velocity** with 50 PRs updated in the last 24 hours (45 open, 5 closed), but **zero releases** and **no issues closed** — indicating a heavy development sprint focused on bug fixes, platform integrations, and infrastructure hardening rather than shipping. Seven active issues span critical areas: fallback provider recovery, compression budget overflows, Discord gateway UX, Kanban quota handling, and Tailscale/desktop stability. The PR mix leans heavily toward **risk mitigation** (session state, message delivery, compatibility, Windows paths, SSRF) and **developer experience** (timestamps, AGENTS.md chaining, composer bridges). Project health is **active but pre-release**; maintainers are clearing technical debt before a likely version cut.

## 2. Releases
**No new releases today.** The repository has not published a version tag or changelog entry in this window. Expect a batched release once the current PR wave (especially #81444, #81443, #81407, #80806) lands and stabilizes.

## 3. Project Progress — Merged / Closed PRs Today (5)
| PR | Type | Component | Summary |
|----|------|-----------|---------|
| [#81441](https://github.com/NousResearch/hermes-agent/pull/81441) | **Bug (Closed)** | `tool/file`, Windows | Fix `search_files` on Windows: pass native paths and raw patterns to ripgrep; resolves path `os error 3` and backslash-regex silent failures. |
| [#81436](https://github.com/NousResearch/hermes-agent/pull/81436) | **Bug (Closed, duplicate)** | `comp/agent` | Guard `vars(response)` in debug logging against non-class responses (dict/str) from custom OpenAI-compatible endpoints. |
| [#81445](https://github.com/NousResearch/hermes-agent/pull/81445) | **Feature (Closed)** | `sessions` | Add `archived_at` timestamp (schema v26) stamped on archive; enables recent-archived sort for Done/KPI views. |
| [#81444](https://github.com/NousResearch/hermes-agent/pull/81444) | **Bug (Closed)** | `comp/agent`, compression | **Fixes #80449** — split oversized in-progress turns at tool-group boundaries during compaction instead of blowing the token budget. |
| [#81401](https://github.com/NousResearch/hermes-agent/pull/81401) | **Bug (Closed)** | `comp/plugins`, `tool/memory` | Honcho: dispose sync/async HTTP pools on SDK client cache invalidation; prevents leaked connections on OAuth fallback or timeout rebuilds. |

**Net advancement:** Critical compression regression fixed, Windows search unblocked, session archiving instrumented, Honcho memory leaks plugged. All five closures are **defect fixes or small schema upgrades** — no major feature landings.

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Signal | Underlying Need |
|------|--------|-----------------|
| [Issue #57582](https://github.com/NousResearch/hermes-agent/issues/57582) (6 comments, P2) | **Fallback chain stale after primary recovery** — `_fallback_index` never resets, silently disabling failover for the rest of the session. | Operators need **resilient multi-provider sessions** that self-heal; current design assumes monotonic degradation only. |
| [Issue #54523](https://github.com/NousResearch/hermes-agent/issues/54523) (4 comments, P2) | **Tailscale + Electron async starvation** — 10–25s event-loop block on `list_profiles`/`/api/profiles/sessions` kills WS; Chromium LNA stalls. | Remote desktop users (likely distributed teams) need **non-blocking gateway APIs** and Electron network-stack tuning. |
| [PR #80794](https://github.com/NousResearch/hermes-agent/pull/80794) (MCP reload diff logic) | **MCP `/reload-mcp` diffs against live sockets, not config** — causes false removals on transient disconnects. | Plugin operators want **config-driven, idempotent MCP reloads** that survive network blips. |
| [PR #81443](https://github.com/NousResearch/hermes-agent/pull/81443) (Cron failure breaker) | **Cron outcomes undifferentiated** — no failure streak tracking, no breaker, silent delivery failures. | Automation owners need **observable, self-pausing cron** with alerting on repeated failure. |
| [PR #81407](https://github.com/NousResearch/hermes-agent/pull/81407) (Security, SSRF) | **Monitor-mode cron can fetch private services/redirects** — SSRF vector + concurrent edit race. | Security-conscious deployments require **egress control and source-byte identity** for scheduled jobs. |

**Pattern:** The hottest threads cluster around **session reliability** (fallback, compression, cron, gateway auth) and **platform hardening** (Windows, Tailscale, SSRF, Discord UX). Contributors are fixing *operational surprises* more than building new surfaces.

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)
| Severity | Issue | Component | Fix PR? | Notes |
|----------|-------|-----------|---------|-------|
| **High** | [#57582](https://github.com/NousResearch/hermes-agent/issues/57582) Fallback index never resets on primary recovery | `agent/chat_completion_helpers.py`, `run_agent.py` | ❌ No PR yet | Silent failover loss mid-session; affects all multi-provider deployments. |
| **High** | [#81440](https://github.com/NousResearch/hermes-agent/issues/81440) Discord bot shows ✅ on auth rejection | `comp/gateway`, `platform/discord` | ❌ No PR yet | UX deception: users think message succeeded; bot silently drops. |
| **High** | [#80449](https://github.com/NousResearch/hermes-agent/issues/80449) Compressor keeps oversized turn whole, blows budget | `comp/agent`, `area/compression` | ✅ **[#81444](https://github.com/NousResearch/hermes-agent/pull/81444)** (closed) | Fixed: turn splitting at tool-group boundary. |
| **Medium** | [#54523](https://github.com/NousResearch/hermes-agent/issues/54523) Tailscale async routes starve WS loop 10–25s | `comp/cli`, `comp/desktop`, `comp/dashboard` | ❌ No PR yet | Blocks remote desktop; needs API pagination/async offload + Electron tuning. |
| **Medium** | [#80507](https://github.com/NousResearch/hermes-agent/issues/80507) Delegated Kanban child exhausts parent turn budget via exit guard | `comp/agent`, `comp/cron`, `tool/delegate` | ❌ No PR yet | Delegation tax breaks budget accounting; parent loses entire turn. |
| **Medium** | [#81437](https://github.com/NousResearch/hermes-agent/issues/81437) Kanban workers can't signal quota wall → permanently blocked cards | `comp/cli`, `comp/cron` | ❌ No PR yet | Two defects: exit-code contract unreachable + guarded tasks can't escape. |
| **Low** | [#81436](https://github.com/NousResearch/hermes-agent/pull/81436) `vars(response)` crash on custom OpenAI endpoints | `comp/agent` | ✅ **Closed (duplicate)** | Debug logging only; non-blocking for production. |

**Stability takeaway:** Two **high-severity silent-failure bugs** (#57582, #81440) lack fix PRs. The compression budget bug (#80449) was resolved same-day — good signal on turnaround for well-scoped issues.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|-----------------------------|-----------|
| **Interruptible per-tool execution lease / watchdog** | [Issue #81438](https://github.com/NousResearch/hermes-agent/issues/81438) (P3, `needs-decision`) | **Medium** | Fits existing timeout hierarchy; adds heartbeat + absolute deadline + structured timeout results. Needs design sign-off. |
| **Configurable human-facing timestamps (CLI/TUI/Desktop)** | [PR #81439](https://github.com/NousResearch/hermes-agent/pull/81439) | **High** | Pure display-layer change, no backend mutation; already implemented and tested. |
| **AGENTS.md directory chain (git root → cwd) merged into system prompt** | [PR #80781](https://github.com/NousResearch/hermes-agent/pull/80781) | **High** | Port from grok-cli; solves monorepo context discovery. Low risk, high DX value. |
| **Composer render/edit bridge for desktop plugins** | [PR #81435](https://github.com/NousResearch/hermes-agent/pull/81435) | **High** | Extensibility primitive; enables rich plugin UIs in composer. Core infrastructure, not user-facing feature yet. |
| **Email gateway: opt-in session isolation by normalized subject** | [PR #81018](https://github.com/NousResearch/hermes-agent/pull/81018) | **Medium** | Niche but clean opt-in; unlocks threading for email-heavy workflows. |
| **OpenAI-compatible image generation provider plugin** | [PR #49157](https://github.com/NousResearch/hermes-agent/pull/49157) (stale, 2 months) | **Low** | Duplicate label; broad compatibility but superseded by provider-specific plugins? Needs maintainer triage. |
| **Docker configuration options for file tools (`docker_env`, `docker_extra_args`, `docker_persist`)** | [PR #80744](https://github.com/NousResearch/hermes-agent/pull/80744) | **Medium** | Sandbox customization requested by platform integrators; adds three knobs. |

**Roadmap prediction:** Next cut will likely include **display timestamps, AGENTS.md chaining, composer bridge, Docker file-tool config, and cron failure breaker** — all have PRs open and align with "operator ergonomics + platform hardening" theme. The tool watchdog (#81438) and email subject isolation (#81018) are strong candidates if reviews finish.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | Affected Persona |
|------------|----------|------------------|
| **"Failover silently dies after primary recovers"** | #57582: `_fallback_index` monotonic, no reset on `_restore_primary` | **Ops / SRE** running multi-provider HA |
| **"Discord bot lies — shows ✅ then ghosts"** | #81440: reaction swap on auth reject = false success | **Community managers / Discord bot operators** |
| **"Remote desktop over Tailscale freezes for 20s"** | #54523: async route starvation + Chromium LNA stalls | **Distributed teams / remote devs** using desktop app |
| **"One huge tool-call turn blows my context budget"** | #80449: compressor refuses to split active turn | **Power users / agents with heavy tool loops** |
| **"Delegation burns my parent turn budget via exit guard"** | #80507: Kanban child inherits parent's terminal guard | **Automation authors using `delegate_task`** |
| **"Cron jobs silently fail, no alert, no breaker"** | #81443: outcomes undifferentiated, no failure streak | **Scheduled-job operators** |
| **"Windows `search_files` broken — paths & regex"** | #81441: ripgrep gets `/c/Users/...`, backslash patterns fail | **Windows developers / CI runners** |
| **"MCP reload lies about removed servers on flaky net"** | #80794: diff vs live sockets, not config | **Plugin / MCP server maintainers** |

**Satisfaction signals:** No explicit praise in today's data. The **rapid fix for #80449** (issue → PR → close in 2 days) suggests maintainers are responsive to well-scoped bugs. The **stale #49157** (2 months, duplicate) hints at triage backlog for feature PRs.

## 8. Backlog Watch — Long-Unanswered / Stale Items Needing Attention
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [Issue #57582](https://github.com/NousResearch/hermes-agent/issues/57582) Fallback chain reset | **36 days** (created 2026-07-03) | Silent HA degradation; affects every multi-provider session. No fix PR despite 6 comments. | **Assign / prioritize** — design `_fallback_index` reset on `_restore_primary`; add test for primary recovery cycle. |
| [Issue #54523](https://github.com/NousResearch/hermes-agent/issues/54523) Tailscale async starvation | **40 days** (created 2026-06-29) | Blocks remote desktop entirely; stack of server + client issues. Server-side fix identified but no PR. | **Split**: (1) API pagination/async offload for `list_profiles`/`sessions` — quick win; (2) Electron/Chromium LNA tuning — track upstream. |
| [PR #49157](https://github.com/NousResearch/hermes-agent/pull/49157) OpenAI-compat image gen plugin | **50 days** (created 2026-06-19) | Broad compatibility request; labeled `duplicate` but no clear superseding PR. | **Triage**: confirm duplicate target or accept; unblocks generic image provider support. |
| [Issue #81438](https://github.com/NousResearch/hermes-agent/issues/81438) Tool execution watchdog | **

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-08

---

## 1. Today's Overview
PicoClaw shows **steady maintenance velocity** with 14 PRs and 4 issues updated in the last 24 hours. The majority of PR activity is automated dependency updates (Dependabot), but three **high-value contributor PRs landed today** (#3321, #3320, #3319) addressing prefix-caching optimization, a WhatsApp client-outdated blocker, and exec-tool timeout handling. Two dependency PRs were merged (#3291, #3289). No new release was cut. The issue backlog remains light; all four active issues are tagged `stale`, indicating low recent discussion but persistent community interest in multi-protocol gateways, OAuth 2.1 for MCP, concurrency stability, and Telegram session parity.

---

## 2. Releases
**None** — no new version published today.

---

## 3. Project Progress (Merged / Closed PRs)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3291](https://github.com/sipeed/picoclaw/pull/3291) | **deps** | Bump `github/copilot-sdk/go` 0.2.0 → 1.0.8 | Major SDK upgrade; likely brings new Copilot APIs & breaking changes — verify integration tests. |
| [#3289](https://github.com/sipeed/picoclaw/pull/3289) | **deps** | Bump `pion/rtp` 1.10.2 → 1.10.5 | Minor media-stack fixes; low risk. |

*No feature PRs merged today; progress is driven by dependency hygiene.*

---

## 4. Community Hot Topics (Most Engagement)

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#3093](https://github.com/sipeed/picoclaw/issues/3093) | Issue (closed) | 6 | 1 | **Multi-protocol gateway** — users want SimpleX / Tox / Wire bridges alongside existing channels. |
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) | Issue | 2 | 0 | **OAuth 2.1 for MCP servers** — alignment with emerging MCP auth standard (ref #2546). |
| [#3308](https://github.com/sipeed/picoclaw/issues/3308) | Issue | 1 | 0 | **Concurrency & memory bugs** in SeaHorse / Channel Manager / Hooks — detailed technical audit. |
| [#3307](https://github.com/sipeed/picoclaw/issues/3307) | Issue | 1 | 0 | **Telegram session parity** — list/switch/delete sessions from chat, matching Web UI. |

**Signal:** Community is pushing for **protocol breadth** (SimpleX/Tox), **standards compliance** (OAuth 2.1/MCP), **core stability** (goroutine leaks), and **UI/UX parity** across channels.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue / PR | Description | Fix PR? |
|----------|------------|-------------|---------|
| **High** | [#3320](https://github.com/sipeed/picoclaw/pull/3320) | WhatsApp channel dead — `whatsmeow` pinned version rejected by server (405 Client Outdated). | **Yes** — #3320 bumps `whatsmeow` to unblock. |
| **High** | [#3308](https://github.com/sipeed/picoclaw/issues/3308) | Concurrency hazards, goroutine leaks, memory/speed regressions in SeaHorse, Channel Manager, Hooks. | **No PR yet** — detailed audit provided; needs triage. |
| **Medium** | [#3279](https://github.com/sipeed/picoclaw/pull/3279) | Tool-call format leakage into LLM summaries via `partsToReadableContent`. | **Yes** — #3279 isolates & fixes. |
| **Medium** | [#3319](https://github.com/sipeed/picoclaw/pull/3319) | `exec` tool ignores per-run `timeout`, `background`, `pty` args (type/schema mismatch). | **Yes** — #3319 honors options & corrects schema. |
| **Low** | [#3321](https://github.com/sipeed/picoclaw/pull/3321) | Dynamic context block before history breaks prefix caching → higher latency/cost. | **Yes** — #3321 moves block after history. |

**Action:** Prioritize merging #3320 (WhatsApp outage) and #3319 (tool contract breach). Schedule deep review for #3308.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **SimpleX / Tox / Wire gateway** | [#3093](https://github.com/sipeed/picoclaw/issues/3093) | Medium — closed as stale but 6 comments show demand; may resurface. |
| **OAuth 2.1 for MCP servers** | [#3302](https://github.com/sipeed/picoclaw/issues/3302) | High — aligns with #2546 & industry trend; labelled "Nice-to-Have". |
| **Telegram session list/switch/delete** | [#3307](https://github.com/sipeed/picoclaw/issues/3307) | High — clear UX parity gap; low implementation complexity. |
| **DashScope TTS + WeChat audio send** | [#3270](https://github.com/sipeed/picoclaw/pull/3270) | High — PR open, feature-complete, awaiting review. |
| **Configurable default model fallback chain** | [#3200](https://github.com/sipeed/picoclaw/pull/3200) | High — PR open, UI + API done, strategic for multi-provider resilience. |
| **Provider model refresh (GPT-5.6, Claude 4, etc.)** | [#3271](https://github.com/sipeed/picoclaw/pull/3271) | High — routine maintenance; verified against vendor docs. |

**Prediction:** Next minor release will likely ship DashScope TTS, model fallback chain, provider model refresh, and the three bug-fix PRs opened today (#3320, #3319, #3321). OAuth 2.1 and Telegram session commands are strong candidates for the following sprint.

---

## 7. User Feedback Summary

| Pain Point | Channel | Evidence |
|------------|---------|----------|
| **WhatsApp silently down** | WhatsApp | #3320 — client version rejected, no auto-reconnect, “native WhatsApp channel stays dead”. |
| **Tool calls leaking into summaries** | All (SeaHorse) | #3279 — `partsToReadableContent` emits raw tool-call syntax to user. |
| **Exec tool ignores explicit timeouts** | CLI / Agents | #3319 — global timeout overrides per-run arg; boolean flags typed as strings. |
| **Prefix caching broken by dynamic context** | All (Agent) | #3321 — system-message churn invalidates cache on every turn. |
| **No session control from Telegram** | Telegram | #3307 — Web UI has full history dropdown; Telegram users stuck with single session. |
| **Desire for privacy-first protocols** | General | #3093 — SimpleX/Tox/Wire requested for metadata-resistant comms. |

**Sentiment:** Technical users appreciate PicoClaw’s lightweight Go footprint but expect **production-grade reliability** on core channels (WhatsApp, exec tool) and **feature parity** across interfaces.

---

## 8. Backlog Watch (Stale / Needs Maintainer Attention)

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#3093](https://github.com/sipeed/picoclaw/issues/3093) | 60 days | Multi-protocol gateway request; closed stale but 6 comments. | Re-open or label `wontfix` with rationale; community may fork. |
| [#3308](https://github.com/sipeed/picoclaw/issues/3308) | 9 days | Deep concurrency audit; no fix PR yet. | Assign owner; convert findings to tracked bugs. |
| [#3270](https://github.com/sipeed/picoclaw/pull/3270) | 19 days | DashScope TTS + WeChat audio — complete, unmerged. | Review & merge; expands TTS & WeChat parity. |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | 38 days | Configurable fallback chain — strategic for resilience. | Review; merges well with provider refresh (#3271). |
| [#3279](https://github.com/sipeed/picoclaw/pull/3279) | 18 days | Tool-call leakage fix — affects all SeaHorse summaries. | Merge after test validation. |
| [#3283](https://github.com/sipeed/picoclaw/pull/3283) | 17 days | DingTalk inbound image support — channel parity. | Review & merge. |

---

**Bottom Line:** PicoClaw is in **healthy maintenance mode** with active contributors fixing real production bugs today. The immediate priority is unblocking WhatsApp (#3320), hardening the exec tool (#3319), and restoring prefix caching (#3321). The backlog holds several high-value, review-ready features (DashScope TTS, model fallback chain, DingTalk images) that would ship a strong vNext. Concurrency audit (#3308) deserves a dedicated sprint to prevent latent instability.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-08

## 1. Today's Overview
NanoClaw shows **moderate but focused activity** with 10 PRs updated in the last 24 hours (8 open, 2 closed) and 1 new issue. The project is actively iterating on **channel integrations** (Mattermost, Dial), **setup wizard flows**, **skill infrastructure**, and **bug fixes** across formatting, database migrations, and progress reporting. No new releases were cut today. The closure of two long-standing PRs (#546 from Feb, #3197 from yesterday) indicates maintainers are clearing backlog while new feature work continues in parallel.

## 2. Releases
**No new releases today.** The project appears to be in active development between releases.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3197](https://github.com/nanocoai/nanoclaw/pull/3197) | **Fix (CLOSED)** | **Progress display: show specific failure reason** — Extracts first valid error from `resultSummary` to display as "Action failed: specific reason" instead of generic "system check failed". Adds reducer unit tests and Feishu card JSON cross-layer tests. 274 targeted tests pass; full build + 1427 tests pass. | **High** — Improves debuggability for agent-run failures; user-facing error clarity. |
| [#546](https://github.com/nanocoai/nanoclaw/pull/546) | **Skill (CLOSED, Blocked)** | **Add Mattermost channel skill (legacy)** — Superseded by #3199. Targeted pre-v2 `Channel`/`registry.ts` architecture no longer on `main`. | **Low** — Historical cleanup; replaced by v2 implementation. |

## 4. Community Hot Topics — Most Active Items

| Item | Activity | Analysis |
|------|----------|----------|
| [#3199](https://github.com/nanocoai/nanoclaw/pull/3199) — **Add Mattermost channel integration (v2 ChannelAdapter)** | Created 2026-08-07, 0 comments, 0 👍 | **Fresh v2 implementation** against current `ChannelAdapter`/`channel-registry.ts` contract. Supersedes blocked #546. Signals **active demand for Mattermost** as a first-class channel; author (wakqasahmed) is persistent. |
| [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) — **feat: add Tavily MCP tool skill** | Created 2026-08-05, updated 2026-08-07 | **Utility skill** for Tavily search via MCP. Follows contributing guide v1. Indicates **growing MCP ecosystem adoption** and desire for web search tooling. |
| [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) — **feat(setup): template setup flow in wizard + first-agent stamping** | Created 2026-07-02, updated 2026-08-07 | **Core-team PR**, part 2 of agent templates. Adds setup wizard flow ("How should we create your first agent?") and first-agent stamping. **Onboarding UX investment** — likely near merge. |
| [#3200](https://github.com/nanocoai/nanoclaw/issues/3200) — **Issue: "The Cartographer" cognitive architecture persona** | Created 2026-08-08, 1 comment, 0 👍 | **Philosophical/architectural issue** framed as a persona spec. May signal **exploration of agent memory/identity frameworks** or a design doc in issue form. Unusual but could indicate strategic direction. |

## 5. Bugs & Stability — Reported/Fixed Today

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **Medium** | Unknown slash commands categorized as `passthrough`, causing SDK to drop responses silently | **Open** (PR updated today) | [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) — Falls through to `category: 'none'`; open since May 2026 |
| **Medium** | Missing channel destinations for existing messaging-group wirings (DB migration needed) | **Open** (PR updated today) | [#3145](https://github.com/nanocoai/nanoclaw/pull/3145) — Migration 021 backfills destinations; open since Jul 2026 |
| **Low** | Mount readonly flag missing/incorrect | **Open** (PR created today) | [#3196](https://github.com/nanocoai/nanoclaw/pull/3196) — Fix/add mount readonly; fresh PR |

**Note:** #3197 (closed today) fixed a **user-facing progress reporting bug** — generic failure titles now show specific causes.

## 6. Feature Requests & Roadmap Signals

| Signal | Evidence | Likelihood for Next Version |
|--------|----------|----------------------------|
| **Mattermost v2 channel adapter** | #3199 (fresh PR, active author, supersedes old attempt) | **High** — Actively implemented, matches current architecture |
| **Tavily MCP search skill** | #3190 (utility skill, follows guidelines) | **High** — Standalone skill, no core changes needed |
| **Dial channel integration** | #3050 (feature skill + wizard/skills, runChannelSkill model) | **Medium-High** — Adds to channel picker & wizard |
| **AnyDoc document conversion skill** | #3198 (core-team, utility skill) | **High** — Core-team authored, standalone tool |
| **Setup wizard + first-agent templates** | #2909 (core-team, part 2 of template work) | **High** — Onboarding polish, near completion |
| **Cognitive architecture / persona framework** | #3200 (new issue, "Cartographer" spec) | **Low-Medium** — Exploratory; may inform longer-term agent memory work |

## 7. User Feedback Summary
- **Pain points**: Silent failures on unknown slash commands (#2346), generic error messages in agent runs (#3197), missing DB wiring for existing channels (#3145).
- **Use cases**: Multi-channel deployments (Mattermost, Dial), web search via MCP (Tavily), document conversion (AnyDoc), streamlined onboarding for new users.
- **Satisfaction signals**: Core-team driving wizard/templates (#2909), active contributor persistence on Mattermost (#546 → #3199), quick fix turnaround on progress reporting (#3197 opened & closed same day).
- **Dissatisfaction**: Long-open bugs (#2346 since May, #3145 since July) suggest **review bandwidth constraints** on non-critical fixes.

## 8. Backlog Watch — Stale Items Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) — `fix(formatter): treat unknown slash commands as normal chat` | **3 months** (opened 2026-05-08) | Silent message drop is a **data loss / UX bug**; fix is small and tested. Should be prioritized. |
| [#3145](https://github.com/nanocoai/nanoclaw/pull/3145) — `fix(db): backfill destinations for existing wirings` | **11 days** (opened 2026-07-28) | Migration prevents broken channel routing for existing users. Low risk, high value. |
| [#546](https://github.com/nanocoai/nanoclaw/pull/546) — Legacy Mattermost skill (CLOSED) | **5 months** | Now superseded; maintainers should ensure #3199 gets review to unblock the contributor. |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) — Dial channel picker + wizard | **25 days** (opened 2026-07-14) | Feature skill with wizard integration; completes channel coverage. |

---

**Health Assessment**: 🟢 **Healthy active development** — Core team merging fixes/features, contributors persistent, architecture evolving (v2 ChannelAdapter). **Main risk**: Review latency on older PRs (#2346, #3145). Recommend triaging stale bug-fix PRs this week.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-08

## 1. Today's Overview
IronClaw shows **high development velocity** with 50 PRs and 16 issues updated in the last 24 hours. The project is in a **major stabilization and documentation-truth phase**: six QA-critical bugs were closed today (Slack/Telegram encoding, pairing loops, message misrouting, runner lease expiration), while a coordinated "Doc-Truth" pipeline (5 PRs) addresses systemic documentation drift. Two epics are advancing: progressive tool disclosure (now default-on) and durable-state compatibility enforcement. No new releases cut today.

## 2. Releases
**None** — no new versions published in the last 24 hours.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Scope | Outcome |
|----|-------|---------|
| [#7372](https://github.com/nearai/ironclaw/pull/7372) | Tool disclosure benchmark | Pinned 50% schema-token reduction floor; added drift-visible test for 91-tool catalog |
| [#7157](https://github.com/nearai/ironclaw/pull/7157) | Channel delivery tool | Landed explicit two-lane delivery model (conversation vs notification), removed heuristic routing |
| [#7214](https://github.com/nearai/ironclaw/pull/7214) | Sandbox profiles | Added explicit Docker & Railway user-sandbox profiles; tenant+user scoped workspaces |
| [#7324](https://github.com/nearai/ironclaw/pull/7324) | Dependencies | Bumped 11 `everything-else` crates (base64, toml, rstest, etc.) |
| [#6476](https://github.com/nearai/ironclaw/issues/6476), [#6644](https://github.com/nearai/ironclaw/issues/6644), [#6643](https://github.com/nearai/ironclaw/issues/6643), [#6475](https://github.com/nearai/ironclaw/issues/6475), [#7367](https://github.com/nearai/ironclaw/issues/7367), [#7298](https://github.com/nearai/ironclaw/issues/7298) | QA bugs (Slack/Telegram/runner) | All six P1 bugs closed — encoding errors, pairing loops, message misrouting, docs drift, runner lease loss |

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#7317](https://github.com/nearai/ironclaw/issues/7317) **Doc-Truth Verification Pipeline** (3 comments) | Proposal + 5 stacked PRs ([#7375](https://github.com/nearai/ironclaw/pull/7375)–[#7379](https://github.com/nearai/ironclaw/pull/7379), [#7381](https://github.com/nearai/ironclaw/pull/7381)) | **Eliminate docs↔code drift**: mandatory contract tests, `docs-live` branch tied to stable tags, CI gate on path references |
| [#7380](https://github.com/nearai/ironclaw/issues/7380) **Epic: Enforce persisted-state compatibility** (0 comments, new today) | High-risk epic | **Prevent upgrade corruption**: require proof that next binary reads prior-release durable state (beyond SQL migrations) |
| [#6810](https://github.com/nearai/ironclaw/issues/6810) / [#7166](https://github.com/nearai/ironclaw/issues/7166) **Progressive tool disclosure** (1 comment each) | Follow-up epic + default-on PR [#7385](https://github.com/nearai/ironclaw/pull/7385) | **Bounded prompt budgets** for large tool catalogs without degrading small-surface performance |
| [#7360](https://github.com/nearai/ironclaw/issues/7360) / [#7382](https://github.com/nearai/ironclaw/pull/7382) **Stress coverage expansion** (2 comments) | New scripted tool-call workload | **Catch built-in/durable write regressions** in nightly capacity tests |

## 5. Bugs & Stability (Reported/Updated Today)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **P1 (QA)** | [#7298](https://github.com/nearai/ironclaw/issues/7298) Request fails / runner lease lost | Open | — |
| **P1 (QA)** | [#5456](https://github.com/nearai/ironclaw/issues/5456) Routine runs fail — 90s lease too short | Open | — |
| **P1 (QA)** | [#7074](https://github.com/nearai/ironclaw/issues/7074) Multi-tool meeting research fails after Calendar fetch | Open | — |
| **P1 (QA)** | [#6476](https://github.com/nearai/ironclaw/issues/6476) Slack `extension_activate` encoding error → model hallucination | **Closed** | Likely in [#7375](https://github.com/nearai/ironclaw/pull/7375) (doc fix) |
| **P1 (QA)** | [#6644](https://github.com/nearai/ironclaw/issues/6644) Telegram replies to wrong user message | **Closed** | — |
| **P1 (QA)** | [#6643](https://github.com/nearai/ironclaw/issues/6643) Telegram messages accepted but never processed | **Closed** | Root cause split to [#7368](https://github.com/nearai/ironclaw/issues/7368) (latency) |
| **P1 (QA)** | [#6475](https://github.com/nearai/ironclaw/issues/6475) Telegram `/pair` not recognized, pairing loop | **Closed** | — |
| **High** | [#7369](https://github.com/nearai/ironclaw/issues/7369) No trace capture on agent error (UI button missing) | Open | — |
| **High** | [#7368](https://github.com/nearai/ironclaw/issues/7368) Channel turns take minutes on DeepSeek-class models | Open | Latency fix shipped, monitoring |

## 6. Feature Requests & Roadmap Signals
| Signal | Likelihood for Next Version | Evidence |
|--------|----------------------------|----------|
| **Doc-Truth pipeline** (contract tests, `docs-live` branch) | **Very High** | 5 PRs open, design record [#7381](https://github.com/nearai/ironclaw/pull/7381), CI gate [#7376](https://github.com/nearai/ironclaw/pull/7376) |
| **Durable-state compatibility gate** | **High** | Epic [#7380](https://github.com/nearai/ironclaw/issues/7380) filed today, post-1.1.0 upgrade pain |
| **Progressive tool disclosure metrics** | **High** | PR [#7385](https://github.com/nearai/ironclaw/pull/7385) adds rollout telemetry |
| **Scripted tool-call stress workload** | **Medium** | PR [#7382](https://github.com/nearai/ironclaw/pull/7382) implements phase 1 of [#7360](https://github.com/nearai/ironclaw/issues/7360) |
| **Model-chosen skills (not keyword scorer)** | **Medium** | PR [#6938](https://github.com/nearai/ironclaw/pull/6938) stacked, part of epic [#6941](https://github.com/nearai/ironclaw/issues/6941) |
| **Compact Google extension capabilities** | **Low–Medium** | Experiment PR [#5503](https://github.com/nearai/ironclaw/pull/5503) open since July |

## 7. User Feedback Summary
| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Documentation lies** — published docs describe pre-release behavior, causing model refusals & user confusion | 3+ confirmed drift cases ([#7317](https://github.com/nearai/ironclaw/issues/7317), [#7367](https://github.com/nearai/ironclaw/issues/7367)) | High — blocks onboarding, triggers hallucinations |
| **Telegram/Slack channel fragility** — pairing loops, encoding errors, message misrouting, latency spikes | 5 P1 bugs closed today | High — channel integrations unreliable in QA |
| **Runner lease expiration** — 90s inactivity timeout too aggressive for multi-tool routines | 2 open issues ([#5456](https://github.com/nearai/ironclaw/issues/5456), [#7298](https://github.com/nearai/ironclaw/issues/7298)) | High — routine workflows fail consistently |
| **No error traces in UI** — trace capture button missing when agent errors | 1 new issue [#7369](https://github.com/nearai/ironclaw/issues/7369) | Medium — debugging blind spot |
| **Memory not persisting across conversations** | Fixed in PR [#7365](https://github.com/nearai/ironclaw/pull/7365) | Was high — now addressed |

## 8. Backlog Watch (Stale but Critical)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5456](https://github.com/nearai/ironclaw/issues/5456) Routine runner lease expiration | **39 days** (created 2026-06-30) | Core workflow reliability; dominates QA failures |
| [#5503](https://github.com/nearai/ironclaw/pull/5503) Compact Google extensions experiment | **38 days** | Large PR, context-efficient capabilities; needs review decision |
| [#6938](https://github.com/nearai/ironclaw/pull/6938) Model-chosen skills (XL, stacked) | **8 days** | Architectural shift in skill activation; blocked on epic [#6941](https://github.com/nearai/ironclaw/issues/6941) |
| [#7383](https://github.com/nearai/ironclaw/issues/7383) Decompose `tool_disclosure_port.rs` (4.4k lines) | **1 day** (new) | Architecture rule violation; PR [#7374](https://github.com/nearai/ironclaw/pull/7374) added 675 lines |
| [#7374](https://github.com/nearai/ironclaw/pull/7374) Bulk `tool_describe` (XL) | **1 day** | Performance critical for disclosure; needs review on 4.4k-line file |

---

**Health Indicators**  
✅ **Velocity**: 50 PRs/24h, 12 merged — strong throughput  
✅ **Bug kill rate**: 6 P1 QA bugs closed today  
⚠️ **Technical debt**: 4.4k-line file flagged, 39-day-old lease bug  
✅ **Process improvement**: Doc-Truth pipeline addresses systemic drift root cause  
🔴 **Release cadence**: No release today; last tag `1.1.0-rc.1` upgrade exposed state-compat gap  

*Data sourced from GitHub API (issues/PRs updated 2026-08-07 → 2026-08-08).*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-08

---

## 1. Today's Overview

LobsterAI shipped **v2026.8.7** yesterday, delivering cowork conversation search, LaTeX math rendering fixes, and a Windows installer watchdog fix. In the last 24 h the repo saw **6 issue updates (3 open, 3 stale-closed)** and **7 PR updates (1 open, 6 merged)** — a healthy release-day cadence. The open issues cluster around **skill installation persistence**, **slash-containing model IDs (SiliconFlow)**, and a **silent execution failure**, while the merged PRs directly address the latter two. Overall project velocity is high; the backlog contains several stale issues from April that were bulk-closed today, indicating active triage.

---

## 2. Releases

### **v2026.8.7** (2026-08-07)  
[Release Notes](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.7) | [PR #2451](https://github.com/netease-youdao/LobsterAI/pull/2451)

| Change | Type | Details |
|--------|------|---------|
| Cowork title-bar conversation search | Feature | Users can now search history directly from the cowork window title bar ([#2435](https://github.com/netease-youdao/LobsterAI/pull/2435)) |
| Markdown LaTeX math delimiters | Feature | Improved rendering of `\(…\)` / `\[…\]` delimiters ([#2449](https://github.com/netease-youdao/LobsterAI/pull/2449)) |
| Windows installer watchdog null exit code | Fix | Prevents installer crash when watchdog returns null ([#2446](https://github.com/netease-youdao/LobsterAI/pull/2446)) |

> **Breaking changes**: None reported.  
> **Migration notes**: No config migration required; auto-update via built-in updater.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary | Linked Issue |
|----|------|---------|--------------|
| [#2451](https://github.com/netease-youdao/LobsterAI/pull/2451) | release, main, renderer, openclaw, cowork, windows | Merge `release/2026.8.5` → `main`; bundles cowork search, math rendering, IM analytics, plugin install, Windows reliability | — |
| [#2450](https://github.com/netease-youdao/LobsterAI/pull/2450) | renderer, cowork, windows | Restore fullscreen code-toolbar clicks (overlay kept out of Electron drag region) | — |
| [#2449](https://github.com/netease-youdao/LobsterAI/pull/2449) | renderer, main, openclaw | Fix LaTeX math delimiter parsing | — |
| [#2448](https://github.com/netease-youdao/LobsterAI/pull/2448) | renderer, openclaw, cowork | Fix chat search regression | — |
| [#2445](https://github.com/netease-youdao/LobsterAI/pull/2445) | main, openclaw | Strip plugin-index-managed keys from `config.set` to avoid config pollution | — |
| [#2446](https://github.com/netease-youdao/LobsterAI/pull/2446) | docs, windows | Rescue null watchdog exit code in installer extractor | — |

**Net advancement**: Cowork UX (search, fullscreen), rendering correctness (LaTeX), installer robustness, and config hygiene.

---

## 4. Community Hot Topics

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) | Issue | 1 | 0 | **SiliconFlow / custom providers with `/` in model ID are unusable in UI** — blocks users of OpenAI-compatible APIs that use namespaced model IDs. |
| [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) | PR (open) | — | 0 | **Fix for #2443**: preserve provider prefix when model ID contains `/`. Awaiting review/merge. |
| [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) | Issue (stale) | 2 | 0 | **Custom skills installed to OpenClaw path disappear after restart** — skill panel empty despite success toast. |
| [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) | Issue (stale) | 2 | 0 | **sql.js WASM OOM / memory access out of bounds** during high-frequency writes (long cowork sessions); DB corruption risk on non-atomic saves. |

**Signal**: The slash-in-model-ID problem is the only *fresh* high-impact bug; a fix PR exists but is unmerged. The stale issues reveal deeper architectural pain points (skill persistence, WASM memory) that remain unresolved since April.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) — Slash in model ID breaks UI selection (SiliconFlow, et al.) | Open | [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) (open) |
| **High** | [#2447](https://github.com/netease-youdao/LobsterAI/issues/2447) — Execution silent failure (no output, no error) | Open | None yet |
| **Medium** | [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) — Custom skill not shown after restart (installed to OpenClaw dir) | Stale-open | None |
| **Critical (archival)** | [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) — sql.js WASM OOB crash + DB corruption risk | Stale-closed | None (architectural) |

> **Note**: #1263, #1265, #1273 were stale-closed today without fixes — maintainers likely deem them obsolete or non-actionable in current architecture.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood Next Version |
|---------|--------|-------------------------|
| **Per-agent IM bot & model binding** (multi-agent teams) | [#1265](https://github.com/netease-youdao/LobsterAI/issues/1265) | Low (stale-closed, but recurring multi-agent theme) |
| **Atomic, crash-safe DB writes** (replace `fs.writeFileSync`) | [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) | Medium (architectural, may need sql.js upgrade or fallback) |
| **Skill installation UX hardening** (verify panel registration) | [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) | Medium (user-facing, blocks custom skill workflow) |
| **Silent execution diagnostics** (telemetry / error surfacing) | [#2447](https://github.com/netease-youdao/LobsterAI/issues/2447) | High (fresh, blocks core usage) |

---

## 7. User Feedback Summary

- **Positive**: Cowork search and LaTeX fixes landed quickly; Windows installer reliability improved.  
- **Pain points**:  
  1. **Provider/model UX broken for namespaced models** (SiliconFlow, DeepSeek, etc.) — users cannot select models in Settings.  
  2. **Silent failures** — agent runs return empty results with no error toast or log pointer.  
  3. **Skill workflow trust issue** — “installed successfully” toast lies; skill vanishes after restart.  
  4. **Legacy stability fears** — WASM memory crashes during long sessions (though no recent duplicates).  
- **Sentiment**: Active daily releases build confidence, but stale bugs from April remain unresolved, suggesting a gap between release velocity and deep bug squashing.

---

## 8. Backlog Watch (Maintainer Attention Needed)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) | 4 months | Custom skill ecosystem broken; blocks extensibility. Needs root-cause: OpenClaw vs. LobsterAI skill registry sync. |
| [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) | 4 months | Data-loss risk; architectural (sql.js WASM). Requires either atomic write wrapper or storage engine migration. |
| [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) | 1 day | Fix for #2443 sitting open; trivial merge would unblock SiliconFlow/DeepSeek users immediately. |
| [#2447](https://github.com/netease-youdao/LobsterAI/issues/2447) | 1 day | Zero diagnostics on execution failure; needs logging/error-boundary PR. |

---

*Generated from GitHub data as of 2026-08-08. All links point to netease-youdao/LobsterAI.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-08

## 1. Today's Overview
CoPaw (QwenPaw) shows **high velocity** with 69 total items updated in 24h (22 issues, 47 PRs). A new beta release **v2.1.0-beta.2** shipped with two critical fixes. The issue tracker reflects a **stabilization push**: multiple regressions in v2.1.0-beta (text selection, profile toggles, Windows installer locking, Agent Kanban 405) are already addressed by open PRs. Community engagement is strong—first-time contributors drive ~40% of open PRs. The project is in active beta hardening ahead of a 2.1.0 stable.

## 2. Releases
### v2.1.0-beta.2 (2026-08-07)
| Change | Type | Link |
|--------|------|------|
| `fix(ci)`: fence-aware section extraction in real-behavior-proof (fixes #6626) | Bug fix | [#6653](https://github.com/agentscope-ai/QwenPaw/pull/6653) |
| `fix(checkpoints)`: restore auto snapshots in web workspace bootstrap | Bug fix | [#6](https://github.com/agentscope-ai/QwenPaw/pull/6) |

**No breaking changes** noted. Migration: in-place upgrade via desktop auto-updater or re-pull Docker image. Known regression in beta.1 (installer file-locking on Windows) persists—see **Bugs & Stability** below.

## 3. Project Progress (Merged/Closed PRs Today)
21 PRs merged/closed. Highlights:

| PR | Area | Impact |
|----|------|--------|
| [#6799](https://github.com/agentscope-ai/QwenPaw/pull/6799) | Shell/Windows | Stops 26 GB temp-file leak in `execute_shell_command`; caps captured output. |
| [#6750](https://github.com/agentscope-ai/QwenPaw/pull/6750) | Chat/Session | Fixes session identity deadlock, early save, oversized prompt collapse. |
| [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) | Console/Profile | Restores visibility of custom `.md` persona files in Files page (regression fix for #6785). |
| [#6801](https://github.com/agentscope-ai/QwenPaw/pull/6801) / [#6802](https://github.com/agentscope-ai/QwenPaw/pull/6802) | OS Desktop | Re-enables text selection & copy (Ctrl/Cmd+C) in `/os` route (fixes #6797). |
| [#6788](https://github.com/agentscope-ai/QwenPaw/pull/6788) | ACP/ACL | Uses shared root profile workspace for access-control store, fixing Telegram re-auth on new tasks. |
| [#6804](https://github.com/agentscope-ai/QwenPaw/pull/6804) | WeChat Channel | Accepts Chinese `允许`/`拒绝` for approval flows (#6728). |
| [#6688](https://github.com/agentscope-ai/QwenPaw/pull/6688) | Plugins | Isolates bare absolute imports per plugin namespace (unblocks `qwenpaw-creator` install). |
| [#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776) | Browser/Playwright | Self-heals dead driver connections—no more “die once, dead forever”. |
| [#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) | Memory | Flushes pending turns before Scroll compression (complements #6592). |
| [#6800](https://github.com/agentscope-ai/QwenPaw/pull/6800) | Mailbox (new) | Adds intelligent email management assistant with real-time monitoring & ACL. |

## 4. Community Hot Topics
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) | Bug | 8 | Docker v2.0.1: Plugin & App markets stuck in “maintenance” — blocks extensibility for container users. |
| [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) | Bug (closed/wontfix) | 8 | Doom-loop: agent repeats same tool call 6× before warning; wastes tokens/API. Marked wontfix—likely awaiting architectural fix in 2.1. |
| [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | Feature | 4 | Add **Volcengine Agent Plan** & **Xiaomi MiMo** as built-in providers (China-cloud parity). |
| [#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770) | Enhancement | 3 | Make Chrome tab lifetime configurable across response cycles (long-running browser tasks). |
| [#6785](https://github.com/agentscope-ai/QwenPaw/issues/6785) | Bug (regression) | 2 | Profile category hides custom `.md` files; toggles lost. **PR #6808 merged**. |
| [#6792](https://github.com/agentscope-ai/QwenPaw/issues/6792) | Bug | 2 | Built-in ACP runners reference deprecated npm packages (`@zed-industries/…`). |
| [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) | Bug (Windows) | 2 | Installer fails to terminate processes locking `python.exe`, DLLs, NM host — blocks updates. |

**Signal**: Windows/Docker install reliability and China-cloud provider parity are top community friction points.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical (Data loss / Install broken)** | [#6799](https://github.com/agentscope-ai/QwenPaw/issues/6799) — 26 GB temp-file leak on Windows `execute_shell_command` | **Fixed** | [#6799](https://github.com/agentscope-ai/QwenPaw/pull/6799) ✅ |
| **Critical (Install/Update)** | [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) — Windows installer cannot overwrite locked files (python.exe, DLLs, NM host) | Open | — |
| **High (Regression)** | [#6785](https://github.com/agentscope-ai/QwenPaw/issues/6785) — Custom persona `.md` files hidden in Console Files page | **Fixed** | [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) ✅ |
| **High (Regression)** | [#6797](https://github.com/agentscope-ai/QwenPaw/issues/6797) — Desktop mode: no text selection/copy in chat window | **Fixed** | [#6801](https://github.com/agentscope-ai/QwenPaw/pull/6801), [#6802](https://github.com/agentscope-ai/QwenPaw/pull/6802) ✅ |
| **High (Functional)** | [#6794](https://github.com/agentscope-ai/QwenPaw/issues/6794) — Agent Kanban `POST /issues` → 405; hot-reload 404 | Open | — |
| **High (Provider)** | [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) — Gemini provider sends `$schema` field rejected by Google API | Open | — |
| **High (Provider)** | [#6803](https://github.com/agentscope-ai/QwenPaw/issues/6803) — OpenAI-compat requests carry `input_text` + raw streaming fields; StepFun returns 400 | Open | [#6809](https://github.com/agentscope-ai/QwenPaw/pull/6809) (open) |
| **Medium** | [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) — OpenAI Responses continuation summary ignores `disable_thinking`, misreports 60s cancel | Open | — |
| **Medium** | [#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813) — `consume_model_response` KeyError `__aiter__` on agentscope 2.x ChatResponse; breaks auto-title | Open | — |
| **Medium (Plugin/Windows)** | [#6807](https://github.com/agentscope-ai/QwenPaw/issues/6807) — `qwenpaw-creator` video/image generation & asset publishing broken on Windows | Open | — |
| **Medium (Plugin/Windows)** | [#6806](https://github.com/agentscope-ai/QwenPaw/issues/6806) — `qwenpaw-creator` cannot save model config (500) on Windows | Open | — |
| **Low (Closed)** | [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) Doom-loop (wontfix) | Closed | — |
| **Low (Closed)** | [#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565) Multi-line shell command newline→space + Linux pipe hang | Closed | — |
| **Low (Closed)** | [#6773](https://github.com/agentscope-ai/QwenPaw/issues/6773) Linux doom-loop/rubric gates disabled in `/goal` | Closed | — |

## 6. Feature Requests & Roadmap Signals
| Request | Votes/Activity | Likelihood for 2.1.x |
|---------|----------------|----------------------|
| [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) Volcengine Agent Plan + Xiaomi MiMo built-in providers | 4 comments, clear spec | **High** — China-cloud parity, low complexity |
| [#6285](https://github.com/agentscope-ai/QwenPaw/issues/6285) Add `qwen3.8-max-preview` to Aliyun Token Plan model list | 3 comments, model already live on Bailian | **High** — simple model-list update |
| [#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770) Configurable Chrome tab lifetime across response cycles | 3 comments, power-user need | **Medium** — requires settings UI + backend plumbing |
| [#6792](https://github.com/agentscope-ai/QwenPaw/issues/6792) Update ACP runners to non-deprecated npm packages (`@zed-industries/…` → new names) | 2 comments, maintenance | **High** — blocking ACP reliability |
| [#6800](https://github.com/agentscope-ai/QwenPaw/pull/6800) Mailbox: intelligent email management assistant (PR open) | New feature PR | **Medium** — large scope, may target 2.2 |

## 7. User Feedback Summary
| Pain Point | Frequency | User Quotes / Context |
|------------|-----------|------------------------|
| **Windows installer/update failures** | High (multiple reports) | “NSIS pops 4+ ‘cannot open file for writing’ errors… python.exe, VCRUNTIME140.dll, NM host locked” ([#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810)) |
| **Docker plugin/app market unusable** | High | “v2.0.1 docker版本，插件市场、应用市场始终提示维护中” ([#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782)) |
| **Desktop mode text selection broken** | Medium (regression in beta) | “v2.1.0b2桌面模式在对话窗口中无法选中复制” ([#6797](https://github.com/agentscope-ai/QwenPaw/issues/6797)) — **fixed in PRs** |
| **Custom persona files hidden** | Medium (regression) | “Profile category hard-codes official persona files — custom .md files can no longer be toggled” ([#6785](https://github.com/agentscope-ai/QwenPaw/issues/6785)) — **fixed** |
| **Agent Kanban non-functional** | Medium | “创建 Issue 返回 405… 热重载期间 404” ([#6794](https://github.com/agentscope-ai/QwenPaw/issues/6794)) |
| **Idle freeze after ~30 min** | Low | “不使用时几十分钟后自己回卡死；只能关闭进程重新启动” ([#6780](https://github.com

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-08

## 1. Today's Overview
ZeroClaw shows **high churn with zero releases** — 15 issues and 50 PRs updated in 24h, but only 1 PR merged and 2 issues closed. The project is in active refactoring mode: security hardening, provider reliability, daemon stability, and channel/media pipeline repairs dominate. No version bump since the last release; maintainers are clearing a backlog of architectural debt (RFCs, policy fixes, provider bugs) before cutting the next release. Risk profile: **elevated** — multiple P1 security/stability bugs open with accepted status but no merged fixes yet.

## 2. Releases
**No new releases today.** The latest published version remains whatever was current before this reporting window.

## 3. Project Progress (Merged/Closed in Last 24h)
| Item | Type | Summary | Impact |
|------|------|---------|--------|
| [#9836](https://github.com/zeroclaw-labs/zeroclaw/pull/9836) | PR (closed) | **fix(transcription):** make `local_whisper` `bearer_token` optional — unblocks whisper.cpp server (no auth) | Removes hard failure on local transcription backend |
| [#9821](https://github.com/zeroclaw-labs/zeroclaw/issues/9821) | Issue (closed) | **cron tool:** agent never invokes it, falls back to shell `crontab` (blocked by policy) | Marked `r:support` — likely config/docs gap, not code defect |
| [#9813](https://github.com/zeroclaw-labs/zeroclaw/issues/9813) | Issue (closed) | **API key leaked in logs** on provider connection errors (DNS failure) | Duplicate — root cause tracked elsewhere |

> **Note:** Only 1 PR merged (#9836) and 2 issues closed — both low-impact. The bulk of P1/P2 work remains open.

## 4. Community Hot Topics (Most Discussed)
| Item | Comments | Signals |
|------|----------|---------|
| [#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) **RFC: Unified package/capability/config/runtime-state catalog contract** | 4 | **Architectural cornerstone** — aims to unify plugin, integration, built-in, and installable capability discovery across CLI, gateway, and runtime. Blocked on maintainer review (`needs-maintainer-review`). High risk, high leverage. |
| [#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825) **Leak detector redacts public blockchain addresses** | 2 | **False-positive security control** breaking payment flows. Design working as intended; needs allowlist/entropy-tuning for public identifiers. |
| [#9810](https://github.com/zeroclaw-labs/zeroclaw/issues/9810) **RFC: Load Agent Plugins 1.0 skill/MCP packages** | 2 | **Ecosystem interop push** — adopt vendor-neutral `plugin.json` + `skills/` + `mcp.json` standard. Requires runtime changes; `needs-maintainer-review`. |

**Underlying need:** Contributors are pushing **extensibility standardization** (catalog, plugin format) and **security-control precision** (leak detector, policy enforcement) — both prerequisites for a stable plugin ecosystem.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Item | Status | Fix PR? | Summary |
|----------|------|--------|---------|---------|
| **S1 (Workflow blocked)** | [#9840](https://github.com/zeroclaw-labs/zeroclaw/issues/9840) Daemon steals/unlinks `daemon.sock` on start/exit, stranding live daemon | Open, `accepted` | No | Two unguarded ops in `rpc/local.rs` break socket for all daemons. |
| **P1 Security** | [#9815](https://github.com/zeroclaw-labs/zeroclaw/issues/9815) `forbidden_paths` unreachable under `allowed_roots`/workspace | Open, `accepted` | No | Policy check returns early; forbidden paths never evaluated. |
| **P1 Security** | [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) Anthropic provider reports `$0.00` spend → budget caps never fire | Open, `accepted` | No | Usage records written with `cost_usd: 0.0`; breaks cost governance. |
| **P1 Reliability** | [#9812](https://github.com/zeroclaw-labs/zeroclaw/issues/9812) Provider fallback carries primary's model ID → fallback never fires, poisons cooldown | Open, `accepted` | No | Router passes wrong model to fallback; fallback enters cooldown incorrectly. |
| **P1 Reliability** | [#9834](https://github.com/zeroclaw-labs/zeroclaw/issues/9834) Intermittent `zeroclaw-runtime` test failures from shared global state | Open, `accepted` | No | Flaky tests (turn_streamed receipts + model_switch) — CI reliability risk. |
| **P1 Channel** | [#9811](https://github.com/zeroclaw-labs/zeroclaw/issues/9811) `/health` reports Telegram channel healthy despite never connecting (404s) | Open, `accepted` | No | Health check doesn't reflect actual connection state. |
| **P2 Bug** | [#9820](https://github.com/zeroclaw-labs/zeroclaw/issues/9820) Calculator tool: model emits literal `<TOOLCALL>` pseudo-syntax | Open, `accepted` | No | Model (Nemotron) not using native function calling; tool calling broken. |
| **P1 Build** | [#9832](https://github.com/zeroclaw-labs/zeroclaw/issues/9832) `zeroclaw-hardware` fails to compile: unresolved `aardvark_sys::AardvarkHandle` | Open, `accepted` | No | Hardware feature broken on aarch64; blocks embedded/RPi builds. |
| **P1 Security** | [#9433](https://github.com/zeroclaw-labs/zeroclaw/pull/9433) `ensure_no_escalation_beyond` never validated `allowed_tools`/`excluded_tools` | PR open, `needs-author-action` | **Yes (#9433)** | Policy escalation check incomplete — tools allowlist bypass possible. |
| **P1 Security** | [#9438](https://github.com/zeroclaw-labs/zeroclaw/pull/9438) Harden unauthenticated `/api/pair` against lockout bypass | PR open, `needs-author-action` | **Yes (#9438)** | Pairing endpoint rate-limit identity derivable from peer; proxy header trust issue. |
| **P1 Security** | [#9839](https://github.com/zeroclaw-labs/zeroclaw/pull/9839) Deny irreversible destructive commands in every posture | PR open | **Yes (#9839)** | `allowed_commands: "*"` + `block_high_risk_commands: false` short-circuits safety. |

> **Critical observation:** 9 P1 bugs open, 3 with fix PRs awaiting author action. Daemon socket bug (#9840) is S1 but has no PR yet.

## 6. Feature Requests & Roadmap Signals
| Item | Type | Likelihood for Next Release | Rationale |
|------|------|----------------------------|-----------|
| [#9824](https://github.com/zeroclaw-labs/zeroclaw/issues/9824) Simplify default web tools to `web_fetch` + `web_research` + `http_request` | Tracker, `in-progress` | **High** — Active work, reduces surface, improves security posture |
| [#9810](https://github.com/zeroclaw-labs/zeroclaw/issues/9810) Agent Plugins 1.0 support (MCP + skills) | RFC | **Medium** — Standard adoption aligns with ecosystem; needs runtime changes |
| [#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) Unified catalog contract | RFC | **Medium-High** — Foundational for plugin/integration management; blocker for #9810 |
| [#9814](https://github.com/zeroclaw-labs/zeroclaw/issues/9814) Native XMPP/Prosody channel | RFC | **Low** — Niche, no maintainer bandwidth signaled |
| [#9766](https://github.com/zeroclaw-labs/zeroclaw/pull/9766) Tool-owned invocation triggers (`send_via` vocabulary) | Enhancement | **Medium** — Part of accepted #7431; improves tool routing |
| [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) Declarative skill auto-activation with provider switch | Enhancement (stacked) | **Low** — Stacked on #9563, large, needs rebase |

**Predicted next version scope:** Web tool simplification (#9824), security policy fixes (#9433, #9438, #9839), provider reliability (#9812, #9816), and daemon socket fix (#9840). Plugin catalog (#9346) and Agent Plugins 1.0 (#9810) likely **post-next-release**.

## 7. User Feedback Summary (Pain Points & Use Cases)
| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Daemon instability on desktop/self-hosted** | #9840 (socket theft), #9811 (false health), #9821 (cron not invoked) | Self-hosters, Raspberry Pi / aarch64 users |
| **Provider cost tracking broken** | #9816 (Anthropic $0 spend), #9812 (fallback broken) | Anyone using budget caps / multi-provider routing |
| **Security policy gaps** | #9815 (forbidden_paths ignored), #9433 (tools allowlist unchecked), #9839 (destructive cmds allowed) | Security-conscious deployments, enterprise eval |
| **Leak detector over-redaction** | #9825 (blockchain addresses), #9813 (API keys in logs) | Crypto/payment workflows, anyone with secrets in URLs |
| **Hardware/compilation failures on ARM** | #9832 (aardvark_sys), #9291 (AppImage detection) | Raspberry Pi 5, embedded Linux users |
| **Model-tool calling compatibility** | #9820 (Nemotron emits pseudo-syntax), #9757 (Anthropic tool-result images) | Users on non-OpenAI models (NVIDIA NIM, Anthropic) |

**Satisfaction signal:** Users are filing **detailed, reproducible bugs with configs/logs** — indicates active usage but frustration with reliability. No positive feedback issues in this window.

## 8. Backlog Watch (Stale High-Value Items Needing Maintainer Attention)
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337) `feat(observability): herdr agent reporting integration` | 43 days | Observability integration for CLI UX; large (XL), `needs-author-action` | Stalled — author action needed |
| [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) `feat(skills): declarative auto-activation...` | 28 days | Core skill system upgrade; stacked on #9563, `needs-author-action` | Blocked on dependency |
| [#8964](https://github.com/zeroclaw-labs/zeroclaw/pull/8964) `fix(channels): sanitize streaming draft partials` | 28 days | Security: unsanitized drafts leak to channels | `needs-author-action` |
| [#9291](https://github.com/zeroclaw-labs/zeroclaw/pull/9291) `fix(cli): detect installed AppImage...` | 16 days | Desktop install detection broken | `needs-author-action` |
| [#9433](https://github.com/zeroclaw-labs/zeroclaw/pull/9433) `fix(config): enforce tool allowlists in ensure_no_escalation_beyond` | 12 days | **P1 Security** — tools allowlist bypass | `needs-author-action` |
| [#9438](https://github.com/zeroclaw-labs/zeroclaw/pull/9438) `fix(gateway): harden unauthenticated /api/pair` | 12 days | **P1 Security** — pairing lockout bypass | `needs-author-action` |
| [#9494](https://github.com/zeroclaw-labs/zeroclaw/pull/9494) `fix(sop): drive cron-started headless runs` | 11 days | Cron/SOP execution broken; has follow-up #9841 | `needs-author-action` |
| [#9563](https://github.com/zeroclaw-labs/zeroclaw/pull/9563) `fix(channels): populate typed media envelope from Telegram` | 9 days | Media pipeline repair; blocks #8965 | `needs-author-action` |
| [#9634](https://github.com/zeroclaw-labs/zeroclaw/pull/9634) `feat(channels/telegram): allowed_groups auth grant` | 7 days | Group auth for Telegram; `needs-author-action` | Review pending |
| [#9720](https://github.com/zeroclaw-labs/zeroclaw/pull/9720) `fix(runtime): enforce response cache request boundaries` | 4 days | Cache correctness; XL, `needs-author-action` | Review pending |

**Maintainer bandwidth alert:** 10+ PRs with `needs-author-action` or `needs-maintainer-review`, several P1 security. Triage backlog growing faster than merge rate.

---

**Project Health Score: 🟡 Caution**  

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*