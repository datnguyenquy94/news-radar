# OpenClaw Ecosystem Digest 2026-09-09

> Issues: 158 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-09 04:19 UTC

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

# OpenClaw Project Digest — 2026-09-09

## 1. Today's Overview

OpenClaw shows **exceptionally high velocity** with 500 PRs and 158 issues updated in the last 24 hours. The project released **v2026.9.3** focused on safer update mechanics (rehearsal in isolated candidate state, migration support, recovery of abandoned updates). The merge rate is strong (~53% of updated PRs merged/closed), indicating active maintainer throughput. However, the open issue count (72 active) and numerous P1/P0 regressions suggest ongoing stability challenges, particularly around authentication providers, session management, and multi-agent orchestration.

---

## 2. Releases

### v2026.9.3 — "Safer Updates"
**Released:** 2026-09-09  
**Highlights:**
- **Rehearsal-based updates**: Core and plugin changes now rehearse in an isolated candidate state before activation
- **Migration support**: Eligible 2026.9.2 migrations supported
- **Recovery mechanism**: Abandoned update records can be recovered without stopping a healthy matching Gateway
- **Related issues**: #136997, #138839, #141109, #141175, #1415...

**Migration Notes**: This release addresses update reliability for users who experienced stuck update runs (e.g., #141617 where 2026.9.2 npm update remained stuck at `requested/running`). No breaking changes noted.

---

## 3. Project Progress (Merged/Closed PRs Today)

**266 PRs merged/closed** in the last 24h. Key merges by theme:

| Area | PRs | Key Changes |
|------|-----|-------------|
| **Update/Release Infrastructure** | ~15 | #142811 (candidate version compatibility tests), #142791 (CI candidate ref isolation), #142322 (Node preflight remediation hints) |
| **UI/Chat Fixes** | ~12 | #142671 (file attachments above text), #142694 (avatar alignment), #142581 (chat name/avatar refresh after identity edits), #142822 (thinking controls tied to selected model) |
| **Gateway/Session Stability** | ~10 | #142236 (preserve unfinished output on timeout), #142349 (stuck-session recovery on late heartbeat hosts), #142768 (hold draining ingress claims) |
| **Plugin/Integration Fixes** | ~8 | #142595 (Slack ack reactions independent of status), #142626 (iMessage feedback after bridge recovery), #138537 (Workboard blocked status error handling) |
| **Codex/Provider Fixes** | ~5 | #142823 (prevent 502 on Responses Lite), #131968 (surface model auth refresh failures), #142803 (Codex harness docs split) |
| **Documentation** | ~8 | #135468 (memory-lancedb compatibility ranges), #141841 (session delete memory cleanup clarity) |

**Notable**: Many merges target regressions introduced in 2026.8.x–2026.9.2, confirming a stabilization sprint.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

### Top 5 Issues by Comment Count

| Issue | Comments | Type | Core Problem |
|-------|----------|------|--------------|
| **[#135111](https://github.com/openclaw/openclaw/issues/135111)** | 23 | 🐛 Regression (P1) | Intermittent "Provider completed tool call with malformed JSON arguments" on v2026.8.1 (Claude Sonnet 5) — not tied to specific file/tool |
| **[#97616](https://github.com/openclaw/openclaw/issues/97616)** | 15 | 🐛 Regression (P1) | **Zombie process leak**: Unreaped hook/tool child processes accumulate, causing runtime degradation |
| **[#43367](https://github.com/openclaw/openclaw/issues/43367)** | 14 | 🐛 P1 | **Multi-agent orchestration unstable**: Concurrent `agents add` overwrites config, session-lock failures, detached child work |
| **[#89278](https://github.com/openclaw/openclaw/issues/89278)** | 12 | 🐛 Regression (P0) | Codex OAuth refresh succeeds but cron/heartbeat fail with 10s auth refresh timeout |
| **[#91352](https://github.com/openclaw/openclaw/issues/91352)** | 11 | 🐛 P2 | Codex OAuth migration leaves stale default profile; `codexPlugins` app inventory can fail Codex harness |

**Underlying Needs**: 
- **Auth reliability** is the #1 pain point (4/5 top issues involve OAuth/Codex/Claude CLI auth)
- **Process hygiene** (zombie processes) affects long-running deployments
- **Concurrency safety** for multi-agent workflows is fundamentally broken
- Users need **observable, recoverable update mechanisms** (driving v2026.9.3)

### Top PRs by Activity
Most active open PRs are **maintainer-led infrastructure fixes** (#142791 CI security, #142811 test coverage, #142782 unified plugin discovery). Community PRs focus on UI polish (#142694, #142671, #142581).

---

## 5. Bugs & Stability — Ranked by Severity

### 🔴 Critical (P0 / Release Blockers)
| Issue | Status | Fix PR? | Description |
|-------|--------|---------|-------------|
| **[#89278](https://github.com/openclaw/openclaw/issues/89278)** | Open | No | Codex OAuth refresh timeout (10s) breaks cron/heartbeat — **P0, UX release blocker** |
| **[#141617](https://github.com/openclaw/openclaw/issues/141617)** | Open | No | 2026.9.2 npm update stuck at `requested/running` — **P0, UX release blocker** |

### 🟠 High (P1 — Regressions, Data Loss, Auth Failures)
| Issue | Status | Fix PR? | Description |
|-------|--------|---------|-------------|
| **[#135111](https://github.com/openclaw/openclaw/issues/135111)** | Closed | Unclear | Malformed JSON tool calls on Claude Sonnet 5 (v2026.8.1) — intermittent, hard to repro |
| **[#97616](https://github.com/openclaw/openclaw/issues/97616)** | Open | No | **Zombie process accumulation** from hook/tool execution — degrades runtime over time |
| **[#43367](https://github.com/openclaw/openclaw/issues/43367)** | Open | Linked PR open | Multi-agent config overwrites, session-lock failures, detached children |
| **[#94716](https://github.com/openclaw/openclaw/issues/94716)** | Open | No | Claude CLI provider sends stale user-agent (2.1.75) → bearer auth fails |
| **[#140971](https://github.com/openclaw/openclaw/issues/140971)** | Open | No | Feishu plugin tools silently dropped (host restriction blocks entire plugin) — regression 2026.7→2026.8 |
| **[#137264](https://github.com/openclaw/openclaw/issues/137264)** | Open | No | Tombstoned agent has no replacement path; `sessions delete --dry-run` lies |
| **[#120157](https://github.com/openclaw/openclaw/issues/120157)** | Closed | Linked PR open | Subagent `sessions_yield` + `runtime.subagent.run` follow-up never wakes parent |

### 🟡 Medium (P2 — UX, Message Loss, Session State)
| Issue | Status | Fix PR? | Description |
|-------|--------|---------|-------------|
| **[#142037](https://github.com/openclaw/openclaw/issues/142037)** | Open | No | Embedded runtime records `message` tool replies as "mute" → Slack thread mismatch |
| **[#142549](https://github.com/openclaw/openclaw/issues/142549)** | Open | No | Messages duplicated 3-4× in chat UI |
| **[#141556](https://github.com/openclaw/openclaw/issues/141556)** | Open | No | `NO_REPLY` on mentioned/thread turn retried as empty answer → "Agent couldn't generate" |
| **[#142268](https://github.com/openclaw/openclaw/issues/142268)** | Open | No | Queued follow-up drops implicit reply target |
| **[#141604](https://github.com/openclaw/openclaw/issues/141604)** | Open | No | Model fallback chain aborts silently on non-final hop |
| **[#138561](https://github.com/openclaw/openclaw/issues/138561)** | Open | No | Active-memory plugin stops recalling after 2026.8.2 upgrade, no logs |

### 🟢 Lower (P3 / Stale / Feature Gaps)
- [#62615](https://github.com/openclaw/openclaw/issues/62615): Gateway circuit breaker for unhealthy sessions (open, 4 comments)
- [#45503](https://github.com/openclaw/openclaw/issues/45503): Manual context clearing for tool results (open, 4 comments)
- [#39734](https://github.com/openclaw/openclaw/issues/39734): Custom `anthropic_beta` flags for Bedrock (open, 3 comments)
- [#46058](https://github.com/openclaw/openclaw/issues/46058): Chat-first Android surface discussion (open, 6 comments)

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signals | Likelihood for Next Version |
|---------|-------|---------|----------------------------|
| **Gateway circuit breaker** | [#62615](https://github.com/openclaw/openclaw/issues/62615) | 4 comments, P3, "off-meta" — but addresses crash-loop risk | Medium (infra hardening) |
| **Manual tool-result context clearing** | [#45503](https://github.com/openclaw/openclaw/issues/45503) | 4 comments, 2👍, clear UX win for token efficiency | Medium (active-memory adjacent) |
| **Custom Bedrock `anthropic_beta` flags** | [#39734](https://github.com/openclaw/openclaw/issues/39734) | 3 comments, enterprise Bedrock use case | Low (niche, requires config schema change) |
| **Chat-first Android surface** | [#46058](https://github.com/openclaw/openclaw/issues/46058) | 6 comments, 1👍, external fork exists | Low (discussion only, not upstreaming fork) |
| **Skill workshop `delete` action** | [#96817](https://github.com/openclaw/openclaw/issues/96817) | 4 comments, 1👍, applied proposals can't be removed | Medium (plugin completeness) |
| **Strict shell metachars knob** | [#96475](https://github.com/openclaw/openclaw/issues/96475) | 5 comments, security hardening | Medium (security boundary) |
| **Recipient-addressed outbound sends** | [#110872](https://github.com/openclaw/openclaw/issues/110872) | 5 comments, verified route registry | Medium (architectural, multi-channel) |

**Prediction**: Next patch (2026.9.4) will focus on **auth stability** (Codex/Claude CLI), **update reliability** (v2026.9.3 follow-up), and **message deduplication** (#142549). Multi-agent fixes (#43367) likely require a minor version.

---

## 7. User Feedback Summary

### Pain Points (from issue narratives)
- **"Update anxiety"**: Users fear `openclaw update` — stuck runs (#141617), failed plugin upgrades (#98484), version mismatches post-restore (#142817)
- **Auth fragility**: Codex OAuth timeouts (#89278, #99550), Claude CLI stale UA (#94716), false "subscription limit" errors (#96815)
- **Silent failures**: Feishu tools dropped without error (#140971), active-memory recall stops silently (#138561), model fallback aborts silently (#141604)
- **Message integrity**: Duplication (#142549), lost context on new WebChat session (#99925), reasoning leaks in Discord/Feishu (#96732, #96849)
- **Resource leaks**: Zombie processes (#97616), 120s Codex hangs (#107303, #95547)

### Positive Signals
- Active PR engagement on UI polish (avatars, attachments, thinking controls)
- Maintainers responding quickly to regressions (v2026.9.3 within days of 9.2 issues)
- Community building integrations (Android fork #46058, Feishu, Workboard)

### Dissatisfaction Themes
- **"Worked before, now fails"** appears in 40%+ of top issues — regression density is high
- Lack of observability: silent failures, no logs at info level (#138561), hidden auth refresh failures (#131968)
- Migration docs lag: Codex OAuth 5.28→6.x migration undocumented (#96197)

---

## 8. Backlog Watch — Stale High-Value Items Needing Attention

| Issue/PR | Age | Priority | Why It Matters | Status |
|----------|-----|----------|----------------|--------|
| **[#43367](https://github.com/openclaw/openclaw/issues/43367)** | 182 days | P1 | **Multi-agent orchestration fundamentally broken** — blocks parallel workflows | Open, linked PR, needs maintainer review |
| **[#97616](https://github.com/openclaw/openclaw/issues/97616)** | 72 days | P1 | **Zombie process leak** — degrades all long-running deployments | Open, needs repro/maintainer review |
| **[#89278](https://github.com/openclaw/openclaw/issues/89278)** | 99 days | P0 | **Codex OAuth timeout breaks cron/heartbeat** — release blocker | Open, needs security review |
| **[#99925](https://github.com/openclaw/openclaw/issues/99925)** | 67 days | P2 | **WebChat new session loses all context** — "AI blind on start" | Stale, needs security review |
| **[#108344](https://github.com/openclaw/openclaw/issues/108344)** | 56 days | P1 | **Session maintenance evicts in-flight cron sessions** — every cron fails | Closed but root cause? |
| **[#112375](https://github.com/openclaw/openclaw/pull/112375)** | 50 days | P2 | **Cron shell precheck gate** — skip LLM when no work (major cost saver) | Open, needs proof, XL size |
| **[#135468](https://github.com/openclaw/openclaw/pull/135468)** | 8 days | P2 | **Memory-lancedb compatibility ranges** — docs affect plugin ecosystem | Open, ready for maintainer look |
| **[#62615](https://github.com/openclaw/openclaw/issues/62615)** | 155 days | P3 | **Circuit breaker for unhealthy sessions** — prevents cascade failures | Open, blank template, needs product decision |

---

## Project Health Assessment

| Dimension | Signal | Assessment |
|-----------|--------|------------|
| **Velocity**

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-09-09)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **bimodal maturity**: a handful of high-velocity "platform" projects (OpenClaw, Hermes, CoPaw, ZeroClaw, IronClaw) operating at 50–500 PRs/day with dedicated maintainer teams, while smaller "specialist" projects (ZeptoClaw, PicoClaw, NanoClaw, NanoBot) iterate at 8–37 PRs/day with tighter scopes. **Zero projects released a stable version today**—most are in stabilization sprints (OpenClaw v2026.9.3, CoPaw v2.2.1-beta.1, LobsterAI post-upgrade fixes) or feature-integration phases (NanoClaw OpenCode, Hermes computer-use). **Authentication reliability, update safety, and conversation integrity** are the three cross-cutting stability themes. Community engagement is healthy on platform projects (detailed bug reports, first-time contributors) but thin on specialists.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | PRs Merged/Closed | Release Today | Health Score* |
|---------|----------------|-------------|-------------------|---------------|---------------|
| **OpenClaw** | 158 | 500 | 266 | ✅ v2026.9.3 | 🟡 High velocity, high regression density |
| **Hermes Agent** | 15 | 50 | 7 | ❌ | 🟢 Strong bug response, automation degraded |
| **CoPaw** | 17 | 47 | 26 | ✅ v2.2.1-beta.1 | 🟡 Critical conversation bugs unfixed |
| **ZeroClaw** | 9 | 50 | 0 | ❌ | 🟡 Review bottleneck, P1 cost bugs open |
| **IronClaw** | 2 | 11 | 5 | ❌ | 🟢 Critical multi-tenancy fix in progress |
| **NanoBot** | 2 | 37 | 12 | ❌ | 🟢 Excellent fix latency, Honcho stalled |
| **NanoClaw** | 2 | 10 | 2 | ❌ | 🟢 Healthy, single operational risk (#3735) |
| **PicoClaw** | 4 | 8 | 1 | ❌ | 🟡 Consolidation phase, data-race critical |
| **ZeptoClaw** | 2 | 2 | 1 | ❌ | 🟢 Security-focused, small community |
| **LobsterAI** | 0 | 11 | 11 | ❌ | 🟡 Post-upgrade stabilization, no community issues |
| **NullClaw** | 0 | 0 | 0 | ❌ | ⚪ Inactive |
| **Moltis** | 0 | 0 | 0 | ❌ | ⚪ Inactive |

*Health Score: 🟢 Healthy / 🟡 Caution / 🔴 Critical / ⚪ Inactive

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale & Throughput**: 10× PR volume of nearest peer (500 vs 50/day); merged 266 PRs today alone
- **Release Engineering**: Only project with **rehearsal-based updates** (v2026.9.3) — isolated candidate state, migration support, recovery mechanics
- **Ecosystem Gravity**: Downstream forks (LobsterAI, PicoClaw, NanoClaw) track OpenClaw releases; LobsterAI merged 11 upgrade-fix PRs today

**Technical Approach Differences:**
- **Gateway-centric architecture**: Session management, multi-channel routing, and plugin sandboxing centralized in Gateway — contrasts with Hermes' plugin/skill marketplace and ZeroClaw's ACP/event-driven runtime
- **Update-as-first-class-citizen**: Candidate rehearsal, migration eligibility, abandoned-update recovery — no peer has equivalent
- **Provider abstraction**: Supports Claude CLI, Codex, OpenAI, Bedrock, custom via plugin SDK — broader than NanoBot's provider catalog or ZeptoClaw's single-binary focus

**Community Size**: Largest by issue volume (72 active) and contributor breadth (maintainer-led infra + community UI polish). Downstream projects file integration bugs against OpenClaw (e.g., LobsterAI's 10 upgrade regressions).

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Auth/OAuth Reliability** | OpenClaw (#89278, #94716), Hermes (#89278), CoPaw (#7631), IronClaw (#8083), NanoBot (#5708) | Token refresh timeouts, stale user-agents, CLI auth in sandboxes, per-caller credential isolation |
| **Update/Upgrade Safety** | OpenClaw (v2026.9.3), LobsterAI (11 fix PRs), CoPaw (#7633), ZeptoClaw (#673), ZeroClaw (#10726) | Rehearsal/candidate state, config migration, image digest pinning, silent rollback prevention |
| **Conversation Integrity** | CoPaw (#7579), Hermes (#106260), ZeroClaw (#10697), OpenClaw (#142549), NanoClaw (#3738) | Message deduplication, context loss on stream failure, transcript fidelity, thread routing |
| **Multi-tenancy / Isolation** | IronClaw (#6778, #8083), Hermes (#41225), OpenClaw (#43367), ZeroClaw (#10455) | Per-user catalog isolation, background process survival, session-lock safety, config write invariants |
| **Long-running Stability** | NanoBot (#5663-5665), OpenClaw (#97616), Hermes (#66616), ZeroClaw (#10463) | Cache bounding, zombie process reaping, skills index freshness, audit-chain preservation |
| **Provider Economics** | ZeroClaw (#9816, #10663), OpenClaw (#135111), Hermes (#106186), NanoBot (#5709) | Cost tracking accuracy, cache pricing, model catalog freshness, vision token limits |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes | ZeroClaw | CoPaw | IronClaw | NanoBot | ZeptoClaw | PicoClaw | NanoClaw |
|-----------|----------|--------|----------|-------|----------|---------|-----------|----------|----------|
| **Target User** | Power users, self-hosters, downstream forks | Researchers, plugin builders | Enterprise/ops (cost observability) | Desktop/web users, multi-device | Multi-tenant hosted MCP operators | Developers, edge/IoT | Edge/embedded (6MB binary) | Channel integrators | Community-cell operators |
| **Architecture** | Gateway + plugin SDK | Skill marketplace + computer-use | ACP/event-driven + audit chain | Console/Desktop + Hub sandbox | Extension registry + hosted MCP | Monolithic + TUI/WebUI | Single-binary Rust | Channel-first + provider SDK | Skill-directive + provider contracts |
| **Key Differentiator** | **Update rehearsal & recovery** | **Collective Wisdom Agent + CUA** | **Cost-ledger + cache economics** | **Model routing + traffic light UX** | **Per-caller MCP catalog isolation** | **Honcho memory + Serply search** | **Minimal footprint + ticket auth** | **DeltaChat/Feishu/Telegram depth** | **OpenCode provider + community portal** |
| **Maturity Signal** | High regression density, rapid patches | Automation health degraded | Review bottleneck on XL PRs | Critical conversation bugs | Multi-tenancy fix in flight | Honcho stalled 6mo | Security-only patches | Data-race critical, channel bugs | Single operational risk (archives) |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (Platform)** | OpenClaw, Hermes, ZeroClaw, CoPaw, IronClaw | 50+ PRs/day, dedicated maintainer teams, beta/stable releases, downstream dependents |
| **Active Feature Expansion** | NanoBot, NanoClaw, PicoClaw | 8–37 PRs/day, provider/channel additions, UX parity work (TUI↔WebUI), first-time contributors |
| **Stabilization Sprint** | LobsterAI, ZeptoClaw | Zero new issues, all PRs are fixes, security/hardening focus, no feature work |
| **Dormant** | NullClaw, Moltis | No activity in 24h window |

**Velocity Leaders**: OpenClaw (500 PRs), Hermes (50), ZeroClaw (50), CoPaw (47) — all show **same-day bug-to-fix cycles** for medium-severity issues.  
**Maturity Gap**: Platform projects have **P0/P1 release blockers** (OpenClaw #89278, CoPaw #7579, ZeroClaw #9816) indicating scaling pain; specialists have fewer but sharper critical bugs (PicoClaw #3374, ZeptoClaw #652).

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Update/Deployment Safety is Product-Market Fit** | OpenClaw v2026.9.3 rehearsal mechanics; LobsterAI 11 upgrade fixes; CoPaw silent rollback (#7633); ZeptoClaw image pinning (#10726) | **Invest in candidate rehearsal, migration tooling, and rollback UX** — users fear `update` commands |
| **Conversation Integrity > Raw Model Access** | CoPaw #7579 (8 comments), ZeroClaw #10697, Hermes #106260, OpenClaw #142549 | **Session synchronization, transcript fidelity, and context recovery** are now table stakes |
| **Multi-tenancy & Isolation are Hard Requirements** | IronClaw #6778 (43 days), Hermes #41225 (94 days), ZeroClaw #10455, OpenClaw #43367 | **Per-principal data isolation, background process survival, and config write invariants** need architectural commitment |
| **Provider Economics Observability** | ZeroClaw #9816/$0.00 spend, #10699 cache underpricing; OpenClaw #135111 malformed JSON; Hermes #106186 vision limits | **Cost ledgers, cache pricing, and provider health telemetry** differentiate enterprise-ready agents |
| **Edge/Embedded Deployment Demand** | NanoBot #5693 (IoT/retail), ZeptoClaw #675 (OcaRouter, 6MB binary), PicoClaw #3344 (GBR/1 pairing) | **Single-binary, low-memory, containerless runtimes** with provider pluralism are a growing niche |
| **Plugin/Skill Marketplace Maturation** | Hermes #94266 (Wisdom Agent), CoPaw #7609 (skill versioning), IronClaw #8089 (bundled extensions), NanoClaw SKILL.md migration | **Declarative skill contracts, dependency validation, and bundled distribution** replace ad-hoc plugin loading |

---

**Bottom Line**: The ecosystem is converging on **three non-negotiables** for production agents: **safe updates**, **conversation integrity**, and **multi-tenant isolation**. OpenClaw leads on update safety; CoPaw and ZeroClaw expose the conversation integrity gap most acutely; IronClaw is solving isolation for hosted MCP. Developers building on these platforms should align their roadmaps to these hardening priorities — the next 6 months will see stabilization releases across all active projects.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-09

---

## 1. Today's Overview
NanoBot shows **high development velocity** with 37 PRs updated in the last 24 hours (12 merged/closed, 25 still open), indicating active iteration across UI, agent core, channels, and infrastructure. No new releases were cut today. Two issues were closed: a feature request for ultra-lightweight IoT/retail deployments (#5693) and a first-time contributor inquiry (#5696). The PR queue reflects a mix of bug fixes (WebUI rendering, UTF-8 streaming, cache bounds), feature work (TUI usage panel, settings overhaul, Honcho long-term memory), and provider/channel enhancements (Telegram, Mattermost, MCP, web search).

---

## 2. Releases
**No new releases today.** The latest published version remains the prior release (not included in today’s data).

---

## 3. Project Progress — Merged / Closed PRs (Last 24h)
| PR | Title | Area | Status |
|----|-------|------|--------|
| [#5713](https://github.com/HKUDS/nanobot/pull/5713) | fix(webui): prevent italic activity labels from clipping | WebUI / Rendering | **Closed** |
| [#5712](https://github.com/HKUDS/nanobot/pull/5712) | fix(webui): preserve less-than comparisons in streaming math | WebUI / Streaming / KaTeX | **Closed** |
| [#5709](https://github.com/HKUDS/nanobot/pull/5709) | fix(codex): refresh model catalog for Astra | Provider / Codex | **Closed** |
| [#5711](https://github.com/HKUDS/nanobot/pull/5711) | fix(command): rename hyphenated slash commands to Telegram-safe underscores | Channel / Telegram | **Closed** |
| (8 others) | Additional merges not individually listed in top-20 | Various | **Closed** |

**Key advances:**  
- **WebUI stability**: Fixed two streaming/rendering regressions (math truncation, label clipping).  
- **Telegram compliance**: Slash commands now use underscores so they are recognized, clickable, and autocomplete in Telegram.  
- **Codex model catalog**: Updated client version to surface GPT-6-Astra for eligible accounts.  

---

## 4. Community Hot Topics
| Item | Type | Comments | Summary |
|------|------|----------|---------|
| [#5693](https://github.com/HKUDS/nanobot/issues/5693) | Issue (Closed) | 3 | Request to support **ultra-lightweight, self-hosted deployments for unmanned retail / IoT edge devices**; asks for Chinese docs/examples. |
| [#5696](https://github.com/HKUDS/nanobot/issues/5696) | Issue (Closed) | 1 | First-time contributor (Python, LangChain, RAG) seeking **beginner-friendly issues** (bug fixes, docs, tests). |
| [#2183](https://github.com/HKUDS/nanobot/pull/2183) | PR (Open, long-running) | — | **Opt-in long-term memory via Honcho** — roadmap item #39; open since March, still in review/conflict. |
| [#5714](https://github.com/HKUDS/nanobot/pull/5714) | PR (Open) | — | WebUI: keep edit diffs outside reasoning folds (UX improvement for file-edit visibility). |
| [#5705](https://github.com/HKUDS/nanobot/pull/5705) | PR (Open) | — | TUI: add `/usage` context & token charts (parity with WebUI). |

**Underlying needs:**  
- **Edge/IoT deployment** — users want smaller footprints, Chinese localization, and scenario-specific packaging.  
- **Onboarding & contributor funnel** — explicit request for labeled starter tasks.  
- **Long-term memory** — high-value roadmap item stalled on integration complexity.  

---

## 5. Bugs & Stability — Reported / Fixed Today
| Severity | Issue / PR | Description | Fix Status |
|----------|------------|-------------|------------|
| **High** | [#5712](https://github.com/HKUDS/nanobot/pull/5712) | Streaming math truncated at `<` (e.g., `\prod_{j<i}`), causing KaTeX errors and loss of subsequent content. | **Fixed & Closed** |
| **High** | [#5708](https://github.com/HKUDS/nanobot/pull/5708) | UTF-8 characters split across 4 KiB exec-stream chunks replaced with replacement chars. | **Open (fix PR ready)** |
| **Medium** | [#5713](https://github.com/HKUDS/nanobot/pull/5713) | Italic activity labels clipped final character due to `fit-content` + hidden overflow. | **Fixed & Closed** |
| **Medium** | [#5664](https://github.com/HKUDS/nanobot/pull/5664) | Unbounded idle-session summary cache → memory growth on abandoned sessions. | **Open (fix PR ready)** |
| **Medium** | [#5665](https://github.com/HKUDS/nanobot/pull/5665) | Unbounded MCP browser OAuth flow registry → memory growth on rapid restarts. | **Open (fix PR ready)** |
| **Medium** | [#5663](https://github.com/HKUDS/nanobot/pull/5663) | Mattermost thread-context cache never cleared → indefinite memory growth. | **Open (fix PR ready)** |

**Pattern:** Multiple **cache-bounding** fixes (idle summaries, OAuth flows, Mattermost threads) land together, signaling a focused effort on long-running process stability.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **TUI `/usage` panel** (context meter, token charts) | [#5705](https://github.com/HKUDS/nanobot/pull/5705) | High — parity with WebUI, PR open with tests |
| **Settings overhaul** (41 config fields exposed, autosave, organized pages) | [#5704](https://github.com/HKUDS/nanobot/pull/5704) | High — broad UX improvement, validation endpoints added |
| **Telegram custom Bot API base URL / headers** | [#4919](https://github.com/HKUDS/nanobot/pull/4919) | Medium — addresses #4702, enterprise/self-hosted gateway support |
| **Serply (Google Search API) provider** | [#5437](https://github.com/HKUDS/nanobot/pull/5437) | Medium — follows Serper pattern, expands search options |
| **Meta-Search Tool (mst-python) as metasearch provider** | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | Medium — RRF aggregation, but marked conflict |
| **Honcho long-term memory (opt-in)** | [#2183](https://github.com/HKUDS/nanobot/pull/2183) | Low–Medium — open 6 months, conflict state, roadmap item |
| **Reusable Telegram sticker replies** | [#5387](https://github.com/HKUDS/nanobot/pull/5387) | Low — niche UX, conflict state |
| **Ultra-lightweight IoT/retail deployment** | [#5693](https://github.com/HKUDS/nanobot/issues/5693) | Low — issue closed, but signals demand for edge packaging |

---

## 7. User Feedback Summary
- **Positive / Constructive**: First-time contributor (#5696) explicitly praises the stack (Python, LangChain, RAG) and wants to help — indicates healthy onboarding perception.  
- **Pain Points**:  
  - **Streaming math breakage** (#5712) — critical for technical users; fixed quickly.  
  - **UTF-8 corruption in long exec streams** (#5708) — affects CLI/TUI users running non-ASCII output.  
  - **Settings fragmentation** — many options only editable in `config.json` (#5704 addresses this).  
  - **Telegram slash commands not recognized** (#5711) — blocked bot usability; fixed.  
- **Unmet Demand**: Edge/IoT packaging with Chinese docs (#5693) — issue closed but represents a real deployment scenario not yet supported.

---

## 8. Backlog Watch — Stale / High-Value Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2183](https://github.com/HKUDS/nanobot/pull/2183) | **~6 months** | **Long-term memory (Honcho)** — flagship roadmap feature (#39), opt-in, open-source integration. Stalled in conflict; unblocking would differentiate NanoBot. |
| [#5498](https://github.com/HKUDS/nanobot/pull/5498) | **~3 weeks** | **TUI onboarding unification** — aligns config UX, improves first-run experience; marked priority p2. |
| [#5590](https://github.com/HKUDS/nanobot/pull/5590) | **~2 weeks** | **Summarize persisted JSON tool results** — prevents loss of root-level outcome fields (`ok`, `error`, `artifact`) in large tool outputs. |
| [#5437](https://github.com/HKUDS/nanobot/pull/5437) | **~3 weeks** | **Serply search provider** — expands web-search ecosystem; follows established pattern. |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | **~5 weeks** | **Meta-Search Tool (MST) provider** — richer multi-engine results via RRF; conflict state needs resolution. |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | **~7 weeks** | **Telegram custom Bot API base** — enables self-hosted/enterprise gateways; addresses issued #4702. |

---

### Health Indicators (2026-09-09)
| Metric | Signal |
|--------|--------|
| **PR Throughput** | 37 PRs updated / 12 closed in 24h → **very high** |
| **Bug Fix Latency** | Critical streaming bugs fixed same-day → **excellent** |
| **Contributor Funnel** | Explicit first-time contributor request → **healthy** |
| **Technical Debt Paydown** | 4 cache-bounding PRs in flight → **proactive** |
| **Roadmap Execution** | Honcho memory stalled 6mo; TUI parity advancing → **mixed** |

**Bottom line:** NanoBot is in a **high-velocity stabilization & UX-polish phase** with strong bug-fix discipline and active feature work on settings, TUI parity, and provider expansion. The main strategic gap remains the long-term memory integration (#2183), which has been open since March and would unlock a major differentiator.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-09

## 1. Today's Overview
Hermes Agent shows **high development velocity** with 50 PRs and 15 issues updated in the last 24 hours. The project is actively addressing session-state bugs, desktop UI regressions, and plugin/skill infrastructure. No new releases were published today, but multiple bug-fix PRs target critical stability issues (browser_exec wedging, cron job logic, TTS paragraph pauses, memory plugin truncation). The backlog includes several long-standing automated alerts (e.g., stale skills index) and architectural work on computer-use providers and collective wisdom features.

---

## 2. Releases
**No new releases today.** The latest release data is not provided in the 24-hour window.

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Type | Summary |
|----|------|---------|
| [#104426](https://github.com/NousResearch/hermes-agent/pull/104426) | Feature (closed, superseded) | Delegation delivery injection — superseded by #104434 on merged foundations. |
| [#106239](https://github.com/NousResearch/hermes-agent/pull/106239) | Bug (closed) | Desktop window flicker/reload on fullscreen under Hyprland/Wayland. |
| [#106182](https://github.com/NousResearch/hermes-agent/pull/106182) | Bug (closed, duplicate) | TUI child exits when full config contains YAML timestamps (PyYAML datetime → JSON serialization). |
| *4 other PRs merged/closed* | — | Details not listed in top-20 comment list; likely minor fixes or chore updates. |

**Key advancement:** Desktop Wayland fullscreen regression fixed; TUI config serialization bug closed as duplicate; delegation feature work consolidated onto merged branch.

---

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Comments | Core Need |
|------|----------|-----------|
| [Issue #66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 182 | **Automated alert**: Skills index stale (29.8h old, limit 26h). CI workflow (`skills-index.yml` cron) not running or failing. Blocks docs/skills freshness. |
| [Issue #41225](https://github.com/NousResearch/hermes-agent/issues/41225) | 5 | **P1 session-state bug**: Background `terminal(background=true)` processes killed by SIGTERM on `release()` during session end/compression/error recovery. Breaks long-running CLI tools. |
| [PR #103653](https://github.com/NousResearch/hermes-agent/pull/103653) | — | **Feature**: Computer-use provider factory + remote desktop transport (CUA). Enables headless agent to control remote desktops. High architectural impact. |
| [PR #94266](https://github.com/NousResearch/hermes-agent/pull/94266) | — | **Feature**: Hermes Collective Wisdom Agent V1 — local contribution, publication, installation, updates, CLI, Dashboard. Major plugin/skill ecosystem expansion. |
| [PR #73026](https://github.com/NousResearch/hermes-agent/pull/73026) | — | **Security**: Redact secrets from LLM cron job responses before delivery. Prevents credential leaks in job outputs. |

**Underlying themes:**  
- **Reliability of automation** (skills index, cron, background processes)  
- **Remote/desktop control** as a first-class capability  
- **Plugin/skill marketplace** maturity (Wisdom Agent)  
- **Security hygiene** in automated workflows

---

## 5. Bugs & Stability (Reported Today, Ranked by Severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **P1** | [#41225](https://github.com/NousResearch/hermes-agent/issues/41225) | Background terminal processes SIGTERM-killed on agent `release()` — breaks session continuity. | — |
| **P2** | [#106244](https://github.com/NousResearch/hermes-agent/issues/106244) | Wedged `browser_exec` leaks tool-activity heartbeats → desktop sidebar pins old sessions at “now”. | [#106254](https://github.com/NousResearch/hermes-agent/pull/106254) (kill process group), [#106251](https://github.com/NousResearch/hermes-agent/pull/106251) (bound heartbeat) |
| **P2** | [#106096](https://github.com/NousResearch/hermes-agent/issues/106096) | `cron.update_job` keeps `repeat.times=1` when converting one-shot → recurring; job fires once then retires. | — |
| **P2** | [#106220](https://github.com/NousResearch/hermes-agent/issues/106220) | Explicit `--in` dir disagrees with inherited `TERMINAL_CWD` in Codex app-server → wrong working dir. | — |
| **P2** | [#106186](https://github.com/NousResearch/hermes-agent/issues/106186) | Vision: OpenAI patch-limit rejection (large images) not routed through resize/retry path. | [#106186](https://github.com/NousResearch/hermes-agent/pull/106186) |
| **P2** | [#106212](https://github.com/NousResearch/hermes-agent/issues/106212) | State DB reconciler fails on `NOT NULL` column without DEFAULT (legacy `sessions.source`). | [#106212](https://github.com/NousResearch/hermes-agent/pull/106212) |
| **P3** | [#103103](https://github.com/NousResearch/hermes-agent/issues/103103) | Piper TTS: paragraph breaks flattened → no pauses. | [#106252](https://github.com/NousResearch/hermes-agent/pull/106252) |
| **P3** | [#106235](https://github.com/NousResearch/hermes-agent/issues/106235) | mem0 plugin `sync_turn` sends untruncated turns → embedding 500 on 512-token models. | [#37427](https://github.com/NousResearch/hermes-agent/pull/37427) (truncate at source) |
| **P3** | [#106184](https://github.com/NousResearch/hermes-agent/issues/106184) | Desktop model provider list shows 5/10 providers (filter bug). | — |
| **P3** | [#106239](https://github.com/NousResearch/hermes-agent/issues/106239) | Desktop flicker/reload on fullscreen (Hyprland/Wayland). | **Closed** via [#106239](https://github.com/NousResearch/hermes-agent/pull/106239) |
| **P3** | [#106260](https://github.com/NousResearch/hermes-agent/issues/106260) | Stream-failure recovery stubs grow context monotonically; `protect_last_n` makes session unrecoverable. | — |

**Observation:** 6 of 11 bugs have open fix PRs today — strong same-day response. The `browser_exec` wedging (#106244) has two complementary PRs (process-group kill + heartbeat bound).

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Natural-language slash command resolution** — “switch to grok oauth” → `/model xai-oauth` | [#106258](https://github.com/NousResearch/hermes-agent/issues/106258) | High — low-risk UX improvement, fits CLI/gateway |
| **Fast toggle clarification** — Desktop “Fast” switch is actually a VIP/priority lane, not speed/quality | [#106253](https://github.com/NousResearch/hermes-agent/issues/106253) | High — UI copy/tooltip fix, user-facing confusion |
| **Cron `skip_missed_runs`** — opt out of post-downtime catch-up burst firing | [#106255](https://github.com/NousResearch/hermes-agent/pull/106255) (PR) | Medium — config addition, addresses ops pain |
| **Post-delivery observer hook** (`agent:post_delivery`) | [#106256](https://github.com/NousResearch/hermes-agent/pull/106256) (PR) | Medium — plugin observability, non-breaking |
| **Required plugin lifecycle hooks** (fail-closed) | [#106257](https://github.com/NousResearch/hermes-agent/pull/106257) (PR) | Medium — plugin contract hardening |
| **Authenticated saved side-runs** (gateway-owned, model-routes plugin) | [#106262](https://github.com/NousResearch/hermes-agent/pull/106262) (PR) | Medium — advanced plugin pattern, ABI draft |
| **Auto-load triggered skills in classic CLI** | [#106249](https://github.com/NousResearch/hermes-agent/pull/106249) (PR) | High — continues #55674, rebased onto main |
| **Computer-use provider factory + remote CUA** | [#103653](https://github.com/NousResearch/hermes-agent/pull/103653) | High — architectural, targets `main`, no dep on old seam |
| **Collective Wisdom Agent V1** | [#94266](https://github.com/NousResearch/hermes-agent/pull/94266) | Medium — large feature, needs-decision label |
| **Unified package manager (pm/)** — clean lineage, winrt, wheel, upstream | [#102765](https://github.com/NousResearch/hermes-agent/pull/102765) | Medium — infra, cross-platform, needs-decision |

**Prediction:** Next version will likely include: skills auto-load (#106249), TTS paragraph pauses (#106252), browser_exec fixes (#106254/#106251), cron `skip_missed_runs` (#106255), Fast toggle clarification (#106253), and possibly natural-language command resolution (#106258). Computer-use and Wisdom Agent are larger and may slip.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Background processes die unexpectedly** | #41225 (P1, 5 comments, 1 👍) — `terminal(background=true)` killed on session end/compression | Breaks long-running dev tools, CI-like workflows |
| **Desktop sidebar shows stale “now” for old sessions** | #106244 — wedged `browser_exec` leaks heartbeat | Misleading recency sort, requires backend restart |
| **Model provider list incomplete in Desktop** | #106184 — only 5/10 providers shown | Users can’t select configured providers |
| **TTS lacks paragraph pauses** | #103103 — Piper flattens whitespace | Poor listening experience for multi-paragraph output |
| **mem0 plugin drops long conversations silently** | #106235 — embedding 500 on 512-token models | Memory loss without error surface |
| **Fullscreen flicker on Wayland (Hyprland)** | #106239 — chat reloads mid-typing | Desktop unusable in fullscreen on Linux |
| **Cron jobs fire once after one-shot→recurring edit** | #106096 — `repeat.times=1` not updated | Scheduled automation fails silently |
| **Config YAML timestamps break TUI** | #106182 — PyYAML `datetime` → JSON serialize fail | Session restore crashes |
| **Session context ambiguity: “user’s browser” means backend’s browser** | #106261 — remote desktop architecture not documented | Operator confusion in client/backend split |
| **Stream failure recovery grows context until unrecoverable** | #106260 — stubs + `protect_last_n` = deadlock | Session corruption after partial stream failure |

**Positive signals:** Users actively file detailed repros (embedding model, OS, versions); PR authors reference issues and provide fixes same-day.

---

## 8. Backlog Watch (Long-Unanswered / Needs Maintainer Attention)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **Opened 2026-07-18 (53 days)** | Automated skills-index freshness probe **degraded** (29.8h > 26h limit). CI cron (`skills-index.yml`) likely failing or disabled. Blocks `/docs/skills` freshness. 182 comments — likely bot noise, but root cause unaddressed. |
| [#41225](https://github.com/NousResearch/hermes-agent/issues/41225) | **Opened 2026-06-07 (94 days)** | P1 session-state bug: background processes SIGTERM-killed on `release()`. Core to agent lifecycle reliability. No fix PR yet. |
| [#91614](https://github.com/NousResearch/hermes-agent/issues/91614) | **Opened 2026-08-21 (19 days)** | Kanban dispatcher: `active_pr` respawn guard permanently blocks rework after `changes_requested`. Unlike `recent_success`, no bypass on explicit re-queue. Affects PR-driven automation. |
| [#37427](https://github.com/NousResearch/hermes-agent/pull/37427) | **Opened 2026-06-02 (99 days)** | mem0 truncation fix — open 3+ months, still not merged. Critical for OSS embeddings (512-token). |
| [#73026](https://github.com/NousResearch/hermes-agent/pull/73026) | **Opened 2026-07-28 (43 days)** | Security: redact secrets from LLM cron job responses. Labeled `sweeper:risk-security-boundary`, `sweeper:blast-moderate`. No merge yet. |
| [#102765](https://github.com/NousResearch/hermes-agent/pull/102765) | **Opened 2026-09-04 (5 days)** | Unified package manager — large infra PR, `needs-decision`, cross-platform (Windows). May need architecture review. |
| [#94266](https://github.com/NousResearch/hermes-agent/pull/94266) | **Opened 2026-08-24 (16 days)** | Collective Wisdom Agent V1 — `needs-decision`, multi-component (CLI, Dashboard, plugins). Requires product/design sign-off. |

**Recommendation:** Prioritize #66616 (CI health), #41225 (P1 reliability), #37427 (memory plugin), and #73026 (security). Assign maintainers to `needs-decision` PRs (#94266, #102765) for go/no-go.

---

## Project Health Indicators
| Metric | Signal |
|--------|--------|
| **PR throughput** | 50 PRs updated / 7 merged in 24h → high velocity |
| **Bug fix latency** | 6/11 today’s bugs have fix PRs same day → strong |
| **Automation health** | Skills index stale 53 days → **degraded** |
| **Security hygiene** | Secret redaction PR open 43 days → **attention needed** |
| **Platform coverage** | Wayland/Hyprland, Windows (winrt), macOS ARM64 — active |
| **Plugin/skill maturity** | Wisdom Agent V1, mem0, computer-use — expanding ecosystem |

**Overall:** Healthy active development with strong same-day bug response, but **automation reliability (skills index, cron) and a few P1/P2 bugs are overdue**. The project is scaling toward remote desktop control and a plugin marketplace — architectural bets that will define the next major version.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-09

---

## 1. Today's Overview
PicoClaw shows **moderate maintenance activity** with 8 PRs and 4 issues updated in the last 24 hours. The project is actively addressing **stability regressions** (data race in config, Telegram animation loop, Feishu config validation) while advancing **provider extensibility** (new `opencode-go` provider) and **channel improvements** (DeltaChat refactor, Telegram reply handling). No new release was cut today; the merged PR #714 (skills CLI refactor) is a long-standing enhancement finally closed. Overall health appears stable with a focus on hardening core infrastructure over new user-facing features.

---

## 2. Releases
**No new releases published today.** The latest release remains prior to this reporting window. Watch for a potential patch release incorporating the critical data-race fix (#3375) and Telegram/Feishu bug fixes.

---

## 3. Project Progress — Merged / Closed Today
| PR / Issue | Title | Impact |
|------------|-------|--------|
| **#714** (merged) | `skills: install/reinstall CLI and refactor into skillsCmd` | Major CLI improvement: adds `reinstall`, GitHub Trees API support, repo@branch syntax, subpath installs. Reduces install friction for skill authors. |
| **#3265** (closed) | `[stale] Gateway startup fails with 'channel deltachat has unknown type deltachat'` | Closed as stale; root cause likely addressed by ongoing DeltaChat refactor (#3222). No fix merged today. |

> **Note:** Only 1 PR merged and 1 issue closed in the last 24h — most activity is in open PR review.

---

## 4. Community Hot Topics (Most Active Discussions)
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#3265](https://github.com/sipeed/picoclaw/issues/3265) | Issue | 3 | 1 | **DeltaChat config regression** — gateway crashes on missing config; users expect graceful degradation. |
| [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Issue | 3 | 0 | **Telegram animation runaway** — 228k+ edit attempts after failed turn; rate-limits bot. Need timeout/circuit-breaker. |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR | — | 0 | **DeltaChat cleanup** — 200 LOC drop, drops password auth, modernizes relay handling. High review interest. |
| [#3357](https://github.com/sipeed/picoclaw/pull/3357) | PR | — | 0 | **Telegram reply-as-mention** — UX fix: replying to bot should count as mention in `mention_only` groups. |

**Underlying theme:** Channel reliability (Telegram, DeltaChat, Feishu) and config validation are top pain points. Users expect "it just works" across platforms.

---

## 5. Bugs & Stability — Ranked by Severity
| Rank | Issue / PR | Severity | Status | Fix PR |
|------|------------|----------|--------|--------|
| **1** | [#3374](https://github.com/sipeed/picoclaw/issues/3374) — Data race in `Config.initSensitiveCache` → nil replacer → panic in `FilterSensitiveData` | **Critical** (crash, concurrency) | Open | **[#3375](https://github.com/sipeed/picoclaw/pull/3375)** (open, same author) |
| **2** | [#3343](https://github.com/sipeed/picoclaw/issues/3343) — Telegram feedback animation loops indefinitely (228k edits) | **High** (resource exhaustion, rate-limit) | Open | None yet |
| **3** | [#3355](https://github.com/sipeed/picoclaw/issues/3355) — Feishu config rejected: `unknown field channel_list.feishu.app_id` | **High** (blocks onboarding) | Open | None yet |
| **4** | [#3265](https://github.com/sipeed/picoclaw/issues/3265) — Gateway fails on missing DeltaChat config | **Medium** (startup failure) | Closed (stale) | Likely fixed by [#3222](https://github.com/sipeed/picoclaw/pull/3222) |

> **Action:** #3375 should be prioritized for merge — it guards a core config path used by all channels.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **`opencode-go` provider** with session header support | [#3371](https://github.com/sipeed/picoclaw/pull/3371) (new PR) | **High** — provider extensibility is active; minimal deps, clear routing logic. |
| **Build Remote Agent (GBR/1) phone pairing** | [#3344](https://github.com/sipeed/picoclaw/pull/3344) | **Medium** — niche but complete implementation; depends on external `gbr-agent`. |
| **Reaction tool configurability** | [#3372](https://github.com/sipeed/picoclaw/pull/3372) | **High** — trivial fix, closes config gap for existing tool. |
| **DeltaChat modernization** (drop password auth, use official relays) | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | **Medium** — large refactor, needs review; may wait for 0.x → 1.0. |
| **Telegram quoted-document re-attachment** | [#3356](https://github.com/sipeed/picoclaw/pull/3356) | **High** — UX fix, small scope, improves agent context. |

**Prediction:** Next patch will likely include #3375, #3372, #3356, #3357, and possibly #3371. #3344 and #3222 may target a minor release.

---

## 7. User Feedback Summary
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Config validation too strict / outdated** | #3355 (Feishu `app_id` rejected), #3265 (DeltaChat missing config crashes) | Blocks new channel setup; feels fragile. |
| **Telegram UX gaps** | #3343 (animation runaway), #3357 (reply ≠ mention), #3356 (quoted files lost) | Daily friction for Telegram-heavy users; bot feels "broken". |
| **Skill management CLI gaps** | #714 (merged) — users wanted `reinstall`, subpath, branch support | Developer productivity; now resolved. |
| **Concurrency safety in core config** | #3374 (data race panic) | Rare but catastrophic; erodes trust in stability. |

**Satisfaction signal:** Users file detailed bugs with repro steps — indicates investment in the project. Frustration centers on **channel config** and **Telegram polish**.

---

## 8. Backlog Watch — Stale / Needs Maintainer Attention
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | **68 days** (opened 2026-07-03) | DeltaChat refactor touches security (drops password auth), reduces 200 LOC, updates relay source. Blocked on review. | **Assign reviewer**; security-sensitive — needs crypto/config maintainer sign-off. |
| [#3344](https://github.com/sipeed/picoclaw/pull/3344) | **17 days** | New pairing protocol (GBR/1) for remote agent spectating. Complete but niche. | **Design review** — confirm protocol stability before merge. |
| [#3356](https://github.com/sipeed/picoclaw/pull/3356) / [#3357](https://github.com/sipeed/picoclaw/pull/3357) | **8 days** | Telegram UX fixes; small, high-value, low-risk. | **Fast-track review** — merge to next patch. |
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | **1 day** | New provider (`opencode-go`). Expands LLM ecosystem. | **Provider maintainer review** — check routing logic & header handling. |

---

## Bottom Line
PicoClaw is in a **consolidation phase**: fixing config/channel bugs, hardening concurrency, and incrementally expanding provider/channel support. The critical data-race fix (#3375) and Telegram UX PRs (#3356, #3357, #3372) are ready for merge and should ship soon. The DeltaChat refactor (#3222) remains the largest open technical debt item — resolving it will unblock multiple channel-related issues. Maintainer bandwidth appears focused on review throughput; triaging the 7 open PRs should be the immediate priority.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-09

## 1. Today's Overview
NanoClaw shows **high development velocity** with 10 PRs and 2 issues updated in the last 24 hours. The project is in an active feature-expansion phase, concentrating on **provider/runtime integration (OpenCode)**, **channel reliability (WhatsApp, Discord, etc.)**, **agent-runner threading fixes**, and **setup/installation robustness**. No new releases were cut today; the current version remains 2.1.53. Two PRs were merged/closed (#3729, #3441), indicating steady progress on community onboarding and setup reliability. The open issue #3735 flags a **long-term data-retention risk** (unbounded conversation archives) that has not yet attracted a fix PR.

---

## 2. Releases
**No new releases today.**  
Current stable: **v2.1.53** (per issue #3735).  
Watch for a near-term patch if #3735 or any of the open bug-fix PRs are fast-tracked.

---

## 3. Project Progress — Merged / Closed PRs Today
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#3729](https://github.com/nanocoai/nanoclaw/pull/3729) | `feat(setup): connect the host to its community cell and manage perks in the browser` | setup, channels, credentials | Moves Echo/Slack onboarding to a single browser visit; keeps running host linked to its account cell. Improves first-run UX and community integration. |
| [#3441](https://github.com/nanocoai/nanoclaw/pull/3441) | `fix(setup): preserve files when git show fails` | setup, installation | Atomic write via temp file prevents partial/corrupted installs when `git show` errors. Hardens the update controller. |

Both PRs are labeled `core-team` and `follows-guidelines`, indicating they passed review gates.

---

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#3735](https://github.com/nanocoai/nanoclaw/issues/3735) | Issue (OPEN) | 2 comments, created 2026-09-07 | **Unbounded disk growth** — `archiveTranscriptFile()` writes on every compaction with no retention/rotation. Fleet operators report directory bloat over agent lifetime. |
| [#3744](https://github.com/nanocoai/nanoclaw/issues/3744) | Issue (CLOSED) | 1 comment, created/closed 2026-09-08 | **v1→v2 channel migration gap** — `migrate-v2.sh` only knows legacy `setup/install-<channel>.sh` scripts; 5/6 channels (WhatsApp, iMessage, Resend, Discord, Slack) failed. Fixed by moving channels to `nc:`-directive `SKILL.md` pattern. |
| [#3733](https://github.com/nanocoai/nanoclaw/pull/3733) | PR (OPEN) | 0 comments, updated 2026-09-08 | **OpenCode provider integration** — Implements provider contracts, MCP, cancellation, compaction, resume for OpenCode as a self-contained skill. High strategic value for multi-provider roadmap. |
| [#3747](https://github.com/nanocoai/nanoclaw/pull/3747) | PR (OPEN) | 0 comments, created 2026-09-08 | **OpenCode setup/host assistance** — Surfaces OpenCode in provider picker during interactive setup; routes auth & host help through provider-owned adapters. Complements #3733. |

**Signal:** The OpenCode provider work (#3733, #3747) is the largest coordinated effort today, spanning runtime, setup, and skill delivery. The archive-retention issue (#3735) is the only user-reported operational pain point with fleet-scale impact.

---

## 5. Bugs & Stability — Reported / Fixed Today
| Severity | Item | Status | Fix PR? |
|----------|------|--------|---------|
| **High** (data growth) | [#3735](https://github.com/nanocoai/nanoclaw/issues/3735) — Conversation archives grow without bound, no retention/cap/rotation | **OPEN** | No fix PR yet |
| **Medium** (message routing) | [#3738](https://github.com/nanocoai/nanoclaw/pull/3738) — `send_message`/`send_file`/`<message to>` replies land in main channel instead of thread | **OPEN** (PR) | Yes — #3738 |
| **Medium** (thread processing) | [#3749](https://github.com/nanocoai/nanoclaw/pull/3749) — Replies dropped when trigger messages from different threads land in same processing window | **OPEN** (PR) | Yes — #3749 |
| **Medium** (provider reliability) | [#3746](https://github.com/nanoclaw/pull/3746) — Cancellation signal lost, failed-turn status not preserved, skill files clobbered across provider runtime | **OPEN** (PR) | Yes — #3746 |
| **Low** (WhatsApp edge case) | [#3751](https://github.com/nanoclaw/pull/3751) — Inbound `@newsletter` JIDs not ignored at boundary | **OPEN** (PR) | Yes — #3751 |
| **Low** (update controller) | [#3750](https://github.com/nanoclaw/pull/3750) — `git archive` omits `scripts/provider-contract-verifier.ts`, breaking `/update-nanoclaw` | **OPEN** (PR) | Yes — #3750 |

**Note:** All bugs except #3735 already have open fix PRs. #3735 is the only one without a mitigation in flight.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **OpenCode as first-class provider** (contracts, auth, setup, runner integration) | #3733, #3747 | **Very High** — Two coordinated PRs, `core-team` label, spans runner/setup/skills |
| **Community portal onboarding** (browser-based Echo/Slack connect, perks management) | #3729 (merged) | **Done** — Landed today |
| **Context-preview tool revival** (print exact agent context without container spawn) | #3745 | **High** — `core-team`, `follows-guidelines`, useful for maintainers & e2e |
| **WhatsApp newsletter JID filtering** | #3751 | **Medium** — Narrow fix, low risk |
| **Conversation archive retention/rotation** | #3735 | **Medium-High** — Operational pain, but no PR yet; may slip to next minor |
| **Per-thread agent invocation guarantee** | #3749 | **High** — Correctness fix for threading, already in PR |

**Prediction:** Next patch (2.1.54) will likely bundle #3738, #3746, #3749, #3750, #3751. Next minor (2.2.0) will center on OpenCode provider GA (#3733, #3747) + context-preview (#3745). Archive retention (#3735) needs a design decision (configurable TTL? size cap? compaction-aware rotation?) before a PR appears.

---

## 7. User Feedback Summary
| Pain Point / Use Case | Evidence | Sentiment |
|------------------------|----------|-----------|
| **Fleet disk pressure** from unbounded conversation archives | #3735 (“On our fleet this reaches…”) | 😟 Negative — operational blocker at scale |
| **v1→v2 migration friction** — channels not installing | #3744 (closed, but reveals migration gap) | 😐 Neutral → 😊 Resolved via skill migration |
| **Threaded reply reliability** — files landing in wrong channel | #3738, #3749 | 😐 Neutral — core correctness, not yet user-visible |
| **Desire for OpenCode native support** | #3733, #3747 (internal `core-team` drive) | 😊 Positive — strategic expansion |
| **Need for context inspection without container** | #3745 | 😊 Positive — developer experience |

No direct end-user complaints beyond #3735; most activity is internal/core-team driven.

---

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Stale Since | Why It Matters |
|------|-------------|----------------|
| [#3735](https://github.com/nanocoai/nanoclaw/issues/3735) | 2026-09-07 (2 days) | **Only open bug without a fix PR**; affects all long-running fleets. Needs design decision + implementation. |
| [#3745](https://github.com/nanoclaw/pull/3745) | 2026-09-08 (1 day) | Context-preview revival — high maintainer utility, but no review activity yet. |
| [#3733](https://github.com/nanoclaw/pull/3733) / [#3747](https://github.com/nanoclaw/pull/3747) | 2026-09-07–08 | OpenCode provider stack — large surface area, needs coordinated review to avoid merge conflicts. |
| [#3746](https://github.com/nanoclaw/pull/3746) | 2026-09-08 | Provider cancellation/failure preservation — cross-cutting runtime fix; should be reviewed before next patch. |

---

**Overall Health:** 🟢 **Healthy** — High PR throughput, core-team engagement, clear architectural direction (OpenCode, skills, provider contracts). **Single actionable risk:** #3735 archive retention. Recommend triaging it into the next sprint to prevent fleet incidents.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-09

## 1. Today's Overview
IronClaw shows **high development velocity** with 11 PRs updated in the last 24 hours (5 merged/closed, 6 open), indicating an active sprint focused on Hosted-MCP multi-tenancy fixes, extension packaging, and core runtime configurability. Two open issues highlight critical multi-user data isolation bugs in the Hosted-MCP discovery flow (#6778) and a CLI visibility gap for runtime-installed skills (#8086). No new releases were published today.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs (5)

| PR | Title | Summary | Impact |
|----|-------|---------|--------|
| [#8088](https://github.com/nearai/ironclaw/pull/8088) | **feat(common): distinguish a set-but-empty env var from an unset one** | Fixes `env_or_override` to treat `FOO=` (empty) differently from absent `FOO`, preventing silent default selection when an operator intends to override. | **Stability/Config** — Prevents deployment misconfiguration from typoed empty values. |
| [#8089](https://github.com/nearai/ironclaw/pull/8089) | **feat(extensions): bundle the agent-market hosted-MCP provider package** | Adds first-party bundled package for `agent.market` provider with manifest, per-tool schemas, and static tool declarations as pre-discovery fallback. | **Feature** — Enables out-of-the-box agent.market integration; supersedes #6760. |
| [#8083](https://github.com/nearai/ironclaw/pull/8083) | **fix(extensions): merge discovered hosted-MCP catalogs instead of replacing them** | Changes catalog publish to merge per-user discoveries rather than last-write-wins, preventing one user's `tools/list` from deleting another's tools. | **Critical Bug Fix** — Addresses multi-tenancy data loss in Hosted-MCP (partial fix for #6778). |
| [#6760](https://github.com/nearai/ironclaw/pull/6760) | **feat(extensions): bundle the agent-market marketplace extension** | Closed as superseded by #8089; original approach used env-configurable server URL but new bundled-extensions architecture changed shape. | **Architecture** — Superseded by newer bundled-package design. |
| [#6759](https://github.com/nearai/ironclaw/pull/6759) | **feat(mcp): SEP-414 _meta attribution on outbound hosted-MCP calls** | Closed; needs rebase onto current SEP-414 implementation in #8084. | **Standards** — Opt-in caller attribution for multi-tenant MCP servers. |

## 4. Community Hot Topics

### 🔴 **Highest Engagement: Hosted-MCP Multi-Tenancy Isolation (#6778)**
- **Issue**: [#6778](https://github.com/nearai/ironclaw/issues/6778) — *2 comments, updated 2026-09-08*
- **Core Problem**: Discovered tool catalogs published per `extension_id` (shared slot), causing cross-user tool overwrites on multi-principal servers. User A's discovery → registry holds A's tools; User B's discovery → B's tools overwrite A's.
- **Underlying Need**: True per-installation (per-user-per-extension) isolation in the active-extensions registry. Current fixes (#8083 merge, #8090 per-caller key) are incremental; full resolution requires registry key redesign.

### 🟡 **New CLI Observability Gap (#8086)**
- **Issue**: [#8086](https://github.com/nearai/ironclaw/issues/8086) — *0 comments, created 2026-09-08*
- **Core Problem**: `ironclaw skills list` only shows skills for the CLI-configured user, missing skills installed by agents at runtime or belonging to other users.
- **Underlying Need**: Admin/debugging visibility across all principals; current CLI is user-scoped, not system-scoped.

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|----------|------|-------------|------------|
| **Critical** | [#6778](https://github.com/nearai/ironclaw/issues/6778) / [#8090](https://github.com/nearai/ironclaw/pull/8090) | Hosted-MCP catalog keyed by extension_id only → cross-user tool overwrite on multi-principal servers. | **Partial fix merged** (#8083 merges catalogs); **Root fix open** (#8090 keys per caller). |
| **High** | [#8083](https://github.com/nearai/ironclaw/pull/8083) (merged) | Last-write-wins catalog publish deletes other users' tools until they re-discover. | **Merged** — merges instead of replaces. |
| **Medium** | [#8085](https://github.com/nearai/ironclaw/pull/8085) | Operator-installed packages fail validation due to constructor/validator disagreement on inline dynamic schemas. | **Open PR** — aligns operator packages with host-bundled treatment. |
| **Low** | [#8088](https://github.com/nearai/ironclaw/pull/8088) (merged) | Empty env var (`FOO=`) silently falls back to default, masking operator intent. | **Merged** — distinguishes empty-set from unset. |

## 6. Feature Requests & Roadmap Signals

| PR/Issue | Feature | Likelihood for Next Version | Rationale |
|----------|---------|----------------------------|-----------|
| [#8090](https://github.com/nearai/ironclaw/pull/8090) | **Per-caller Hosted-MCP catalog keys** | **High** — Direct fix for #6778; author is same as merged #8083. | Critical multi-tenancy blocker; minimal scope. |
| [#8084](https://github.com/nearai/ironclaw/pull/8084) | **SEP-414 caller attribution (opt-in)** | **High** — Replaces closed #6759; needed for provider per-conversation state. | Standards compliance; opt-in reduces risk. |
| [#8087](https://github.com/nearai/ironclaw/pull/8087) | **Configurable prompt-context token budget** | **High** — Single-constant → override; deployment-friendly. | Low risk, high value for larger-context models. |
| [#8082](https://github.com/nearai/ironclaw/pull/8082) | **Pointer mode for document attachments** | **Medium** — Reduces context burn; opt-in. | Cost/latency win; requires model/provider support. |
| [#8072](https://github.com/nearai/ironclaw/pull/8072) | **Telegram Bot API command menu registration** | **Medium** — UX polish; external contributor. | Nice-to-have; depends on review bandwidth. |
| [#8086](https://github.com/nearai/ironclaw/issues/8086) | **System-scoped `skills list` CLI** | **Low–Medium** — New issue; requires CLI architecture change. | Debugging pain point; may wait for vNext. |

## 7. User Feedback Summary
- **Pain Point 1 (Multi-tenancy)**: Operators running shared Hosted-MCP servers see tools vanish unpredictably when multiple users activate the same extension (#6778). This is a **trust/ correctness issue** for production deployments.
- **Pain Point 2 (Debugging opacity)**: Developers cannot inspect skills installed by agents at runtime via `ironclaw skills list` (#8086), leading to misdiagnosis of "agent can't see skill" as installation failure rather than CLI scope limitation.
- **Pain Point 3 (Context economics)**: Document attachments silently consume ~25k tokens each, exhausting budgets before model reasoning begins (#8082). Users want pointer/opt-in modes.
- **Positive Signal**: Active external contribution (#8072 from `thisisjoshford`) indicates healthy community engagement on Telegram integration.

## 8. Backlog Watch — Stale/Needs Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#6778](https://github.com/nearai/ironclaw/issues/6778) | **43 days** (created 2026-07-28) | Open, 2 comments | **Root cause of multi-user data corruption**; partial fix merged (#8083), but per-caller key redesign (#8090) still open. Highest production risk. |
| [#6759](https://github.com/nearai/ironclaw/pull/6759) | **43 days** | Closed (needs rebase) | SEP-414 attribution superseded by #8084; ensure #8084 incorporates all intent. |
| [#8086](https://github.com/nearai/ironclaw/issues/8086) | **1 day** | Open, 0 comments | New but high-impact for developer experience; no PR yet. Assign owner for CLI scope expansion. |
| [#8085](https://github.com/nearai/ironclaw/pull/8085) | **1 day** | Open | Operator package validation mismatch; blocks operator-managed extensions. Needs review. |

---

**Project Health Assessment**: 🟢 **Healthy velocity, critical multi-tenancy bug in active resolution**. The team is systematically addressing Hosted-MCP isolation (#8083 merged, #8090 open) and improving deployment ergonomics (env vars, context limits, pointer attachments). The 43-day-old #6778 remains the top risk — monitor #8090 merge for full resolution.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-09

## 1. Today's Overview
LobsterAI saw **zero new issues** and **zero new releases** in the last 24 hours, but maintainers merged **11 pull requests** — all focused on stabilizing the recent **OpenClaw v2026.8.1 runtime upgrade**. The PR batch addresses gateway startup failures, IM plugin compatibility (Discord, DingTalk, Lark, NIM, NetEase Bee), configuration migration, scheduled-task history regressions, and Windows gateway shutdown hygiene. A long-stale feature PR (#1159, Session Fork) was also closed. Overall, the project is in a **post-upgrade stabilization sprint** with no user-facing incidents reported today.

## 2. Releases
**No new releases** published today. The changes merged today are likely destined for the next patch/minor release following the OpenClaw v2026.8.1 integration.

## 3. Project Progress — Merged PRs (2026-09-08 to 2026-09-09)

| PR | Area | Summary | Link |
|----|------|---------|------|
| **#2633** | `docs`, `main`, `openclaw`, `im` | **Discord DM config migration** — outputs top-level `dmPolicy`/`allowFrom` so existing IM settings pass the new OpenClaw schema on next sync. Fixes gateway startup block caused by rejected legacy `dm.policy`/`dm.allowFrom`. | [#2633](https://github.com/netease-youdao/LobsterAI/pull/2633) |
| **#2632** | `docs`, `main`, `openclaw` | **Preserve non-model IM config on logout/unloaded model** — stops config sync from stripping Agent routing, IM accounts, and gateway auth. Adds IPC-based graceful shutdown for Windows gateway (replaces `SIGTERM` kill) to avoid dirty-exit suppression of auto-start. | [#2632](https://github.com/netease-youdao/LobsterAI/pull/2632) |
| **#2631** | `docs`, `main` | **Cron/scheduled-task history & failure-state fix** — deduplicates run imports from dual session aliases; persists error outcome for pre-receipt failures instead of leaving task in pre-run state. | [#2631](https://github.com/netease-youdao/LobsterAI/pull/2631) |
| **#2630** | `docs` | **DingTalk & Lark message dispatch restore** — upgrades DingTalk to 0.8.26 (SDK-compatible) and fixes Lark’s `runtime.config.loadConfig` call; inbound texts now reach agent dispatch. | [#2630](https://github.com/netease-youdao/LobsterAI/pull/2630) |
| **#2629** | `docs` | **NIM & NetEase Bee plugin loading** — removes dependency on deleted `openclaw/plugin-sdk` root export (`emptyPluginConfigSchema`) that caused `ERR_PACKAGE_PATH_NOT_EXPORTED`. | [#2629](https://github.com/netease-youdao/LobsterAI/pull/2629) |
| **#2628** | `docs` | **DingTalk & Lark plugin compatibility** — fixes DingTalk’s `import.meta` error in Windows Jiti loader and Lark’s missing SDK root entry after OpenClaw v2026.8.1 upgrade. | [#2628](https://github.com/netease-youdao/LobsterAI/pull/2628) |
| **#2627** | `renderer`, `main`, `cowork` | **Native `ask_user` protocol adaptation** — wires new `question.*` protocol to desktop dialog UI; removes leaked recommendation suffix from confirmation buttons. | [#2627](https://github.com/netease-youdao/LobsterAI/pull/2627) |
| **#2626** | `main`, `openclaw` | **Preinstall 8 external provider plugins** (Qwen, etc.) — avoids gateway stop on `requires capability consent` during startup by bundling providers that upstream now ships as external plugins. | [#2626](https://github.com/netease-youdao/LobsterAI/pull/2626) |
| **#2625** | `renderer`, `build`, `docs`, `main`, `openclaw`, `cowork`, `platform:windows` | **Upgrade migration & packaged gateway stabilization** — outputs `agents.entries` with explicit ownership (workspace, system functions, IM routing); compat with legacy enterprise roster; returns `CONFIG_VALIDATION_FAILED` with details; reduces Windows runtime distribution size. | [#2625](https://github.com/netease-youdao/LobsterAI/pull/2625) |
| **#2624** | `renderer`, `docs`, `main`, `artifacts` | **HTML thumbnail white-screen & Mermaid race fixes** — adds frame-generation validation, bounded CSS animation wait, independent cache version bump, isolated Mermaid render tasks/containers, improved error recovery & i18n messages, plus regression tests & design docs. | [#2624](https://github.com/netease-youdao/LobsterAI/pull/2624) |
| **#1159** | `cowork` | **Session Fork feature (stale)** — added “Create Branch Session” from detail view action menu; closed as stale after 5 months. | [#1159](https://github.com/netease-youdao/LobsterAI/pull/1159) |

## 4. Community Hot Topics
No issues or PRs received comments or reactions in the last 24h. All 11 merged PRs were authored by **btc69m979y-dotcom** (internal maintainer) and closed same-day — indicating **internal triage velocity** rather than community-driven discussion. The stale PR #1159 (Session Fork) had no recent engagement before closure.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Bug / Regression | Fix PR(s) | Status |
|----------|------------------|-----------|--------|
| **Critical** | Gateway fails to start after OpenClaw v2026.8.1 upgrade due to: (a) Discord DM schema rejection, (b) config sync stripping IM/Agent/gateway auth, (c) `CONFIG_VALIDATION_FAILED` without details, (d) Windows `SIGTERM` kill skipping cleanup. | #2633, #2632, #2625 | ✅ Fixed & merged |
| **High** | DingTalk & Lark inbound messages not processed (`DingTalk runtime not initialized`, `runtime.config.loadConfig is not a function`). | #2630, #2628 | ✅ Fixed & merged |
| **High** | NIM & NetEase Bee plugins fail to load (`ERR_PACKAGE_PATH_NOT_EXPORTED` from removed SDK export). | #2629 | ✅ Fixed & merged |
| **High** | Native `ask_user` requests hang without opening desktop dialog (protocol mismatch). | #2627 | ✅ Fixed & merged |
| **Medium** | Scheduled-task run history duplicates; pre-receipt failures leave task in incorrect state. | #2631 | ✅ Fixed & merged |
| **Medium** | Adding Qwen/other external providers triggers `requires capability consent` gateway stop on startup. | #2626 | ✅ Fixed & merged |
| **Low** | HTML artifact thumbnails white-screen; Mermaid preview render races; cache reuse of stale thumbnails. | #2624 | ✅ Fixed & merged |

**No unfixed regressions reported today.**

## 6. Feature Requests & Roadmap Signals
- **Session Fork (#1159)** — User-requested branching of cowork sessions for experimentation. Closed as stale; no active maintainer champion. Likely to be revisited if demand resurfaces.
- **Artifact rendering hardening (#2624)** — Investment in test coverage and design docs suggests **artifact reliability** is a near-term quality pillar.
- **OpenClaw plugin ecosystem alignment** — Preinstalling 8 external providers (#2626) signals intent to **reduce first-run friction** and **decouple from upstream plugin distribution timing**.

**Prediction**: Next release will be a **stabilization patch** (e.g., `vX.Y.Z+1`) bundling the 10 OpenClaw-migration fixes. Session Fork remains backlogged unless a new PR revives it.

## 7. User Feedback Summary
No direct user issues filed today. Indirect signals from PR descriptions:
- **Pain**: Upgrades breaking existing IM integrations (Discord, DingTalk, Lark, NIM, Bee) and gateway startup — users likely experienced “works yesterday, broken today” after auto-update.
- **Use case**: Windows packaged gateway users affected by dirty-shutdown suppression of auto-start (#2632).
- **Satisfaction**: Rapid same-day fixes for all reported breakages suggest **high maintainer responsiveness**; however, the volume of upgrade regressions indicates **insufficient pre-release integration testing** for major runtime bumps.

## 8. Backlog Watch
| Item | Age | Concern | Link |
|------|-----|---------|------|
| **Session Fork (#1159)** | 5 months | Feature with clear user value (branching conversations) closed as stale; no maintainer follow-up. Risk of feature rot. | [#1159](https://github.com/netease-youdao/LobsterAI/pull/1159) |
| **OpenClaw upgrade test matrix** | — | 10 fix PRs in 2 days imply gaps in CI for plugin compatibility, config migration, Windows shutdown, and artifact rendering. Consider adding upgrade simulation tests. | — |
| **External provider consent flow** | — | Preinstall workaround (#2626) masks UX issue: users still face consent prompts for *new* providers. Track upstream OpenClaw consent UX improvements. | [#2626](https://github.com/netease-youdao/LobsterAI/pull/2626) |

---

**Health Indicator**: 🟡 **Stabilizing** — High fix velocity on critical regressions, but upgrade introduced broad compatibility debt. Zero community issues today may reflect low visibility rather than absence of problems. Recommend: publish post-upgrade release notes, add upgrade CI gate, and triage Session Fork for roadmap inclusion.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-09-09

## 1. Today's Overview

CoPaw is in an **active stabilization and feature-expansion phase** with 64 total GitHub items updated in the last 24 hours (17 issues, 47 PRs). The project released **v2.2.1-beta.1**, focusing on agent model routing settings and website updates. Merge velocity is high (26 PRs closed/merged today), indicating strong maintainer throughput. Open issues (6 active) cluster around streaming reliability, Windows process handling, and plugin UX — suggesting the team is addressing both core stability and developer experience. Community engagement is healthy with multiple first-time contributors landing fixes.

---

## 2. Releases

### v2.2.1-beta.1 (Beta) — Released 2026-09-08
**Release page:** [v2.2.1-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.1-beta.1)

| Change | Type | PR | Author |
|--------|------|-----|--------|
| Add agent model routing settings | Feature | [#7501](https://github.com/agentscope-ai/QwenPaw/pull/7501) | @zhaozhuang521 |
| Update website for v2.2.0 | Documentation | [#7517](https://github.com/agentscope-ai/QwenPaw/pull/7517) | @cuiyuebing |
| Fix: sync resolved sessions during streaming | Bug Fix | (implied) | @zhaozh |

**Notes:** Beta release; installation verification issue auto-created ([#7635](https://github.com/agentscope-ai/QwenPaw/issues/7635)). No breaking changes noted. Model routing settings allow per-agent LLM selection — a precursor to per-session overrides ([#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)).

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#7577](https://github.com/agentscope-ai/QwenPaw/pull/7577) | fix(console): enqueue follow-up messages when chat task is running | Bug Fix | Resolves 409 errors when users send messages during active tasks; queues instead of rejecting |
| [#7610](https://github.com/agentscope-ai/QwenPaw/pull/7610) | fix(console): prevent chat submissions from bypassing the queue | Bug Fix | Hardens queue admission logic; prevents race conditions on session switch |
| [#7621](https://github.com/agentscope-ai/QwenPaw/pull/7621) | fix(agents): handle PDF blocks for text-only models | Bug Fix | Strips PDF `DataBlock`s for non-multimodal models; prevents 400 errors |
| [#7631](https://github.com/agentscope-ai/QwenPaw/pull/7631) | fix(hub): authenticate CLI requests to the current local runtime | Bug Fix | Fixes `qwenpaw agents list` 401 errors inside Hub sandboxes |
| [#7554](https://github.com/agentscope-ai/QwenPaw/pull/7554) | fix: Shell tool child processes inherit controlling console stdin on Windows | Bug Fix | Adds `CREATE_NEW_PROCESS_GROUP` + `stdin=DEVNULL`; prevents hangs on stdin-reading commands |
| [#7572](https://github.com/agentscope-ai/QwenPaw/pull/7572) | fix: tool dispatch layer swallows exception stacks | Bug Fix | Adds `logger.exception()` and re-raises; restores debuggability |
| [#7612](https://github.com/agentscope-ai/QwenPaw/pull/7612) | (closed as duplicate/fixed by #7631) | — | CLI auth in Hub sandboxes |
| [#7597](https://github.com/agentscope-ai/QwenPaw/pull/7597) | Tool-returned image/PDF binary sent as bare base64 | Bug Fix | Ensures file_id/file_data wrapping for tool-returned media |
| [#7559](https://github.com/agentscope-ai/QwenPaw/pull/7559) | 409 error when sending message during task execution | Bug Fix | Addressed by queueing logic in #7577/#7610 |
| [#7620](https://github.com/agentscope-ai/QwenPaw/pull/7620) | MCP streamable-http: non-conforming 401 blocks legacy fallback | Bug Fix | Improves MCP auth error handling; avoids misleading "requires OAuth" message |

**Other notable merges:** Provider additions (Requesty [#7638](https://github.com/agentscope-ai/QwenPaw/pull/7638)), memory plugin migration ([#7616](https://github.com/agentscope-ai/QwenPaw/pull/7616)), OpenViking backend ([#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613)), skill versioning/validation ([#7609](https://github.com/agentscope-ai/QwenPaw/pull/7609)).

---

## 4. Community Hot Topics

| Item | Activity | Core Need |
|------|----------|-----------|
| [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) **Model replies lost from context** — 8 comments, 0 👍 | **Critical UX bug**: Assistant responses persist but vanish from subsequent model context ("model can't see what it just said"). Affects console + Desktop 2.2.0. | **Conversation integrity** — users lose trust when agent "forgets" its own outputs. Root cause likely in session synchronization during streaming. |
| [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) **Sync calls freeze event loop (118–135s startup, ~126s/message)** — 5 comments | **Performance regression**: Synchronous I/O blocks async loop; timeouts ineffective. Windows Desktop 2.1.1b1. | **Responsiveness** — users experience multi-minute freezes. Architectural fix needed (async refactor or thread pooling). |
| [#7633](https://github.com/agentscope-ai/QwenPaw/issues/7633) **llama.cpp version parsing rolls back user upgrades silently** — 4 comments | **Auto-update hostility**: 5-digit build numbers (nightly) parsed as "older" than 4-digit pinned version; runtime reverted without notice. | **User control** — silent rollback violates principle of least surprise. Needs semantic versioning or opt-out. |
| [#7642](https://github.com/agentscope-ai/QwenPaw/issues/7642) **Console streaming renders nothing in Chrome until turn completes** — 1 comment (new today) | **Browser-specific regression**: Safari works; Chrome shows blank until generation ends. v2.2.0 console assets. | **Cross-browser parity** — likely SSE/streaming buffer flush issue in frontend. |
| [#7600](https://github.com/agentscope-ai/QwenPaw/issues/7600) **Feature: QwenPaw Traffic Light (status indicator)** — 2 comments | **UX enhancement**: Visual idle/busy indicator for long-running tasks so users know when to return. | **Visibility** — addresses "forgot I had a task running" workflow. Low-effort high-value. |

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) Model replies lost from context (conversation amnesia) | Open | None yet |
| **Critical** | [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) Sync calls freeze event loop + timeout ineffective | Open | None yet |
| **High** | [#7642](https://github.com/agentscope-ai/QwenPaw/issues/7642) Chrome console streaming broken (blank until done) | Open | None yet |
| **High** | [#7633](https://github.com/agentscope-ai/QwenPaw/issues/7633) llama.cpp silent rollback on version parse error | Open | None yet |
| **Medium** | [#7554](https://github.com/agentscope-ai/QwenPaw/issues/7554) Windows shell tool stdin hang (Ctrl+C ineffective) | **Closed** | Merged [#7554](https://github.com/agentscope-ai/QwenPaw/pull/7554) |
| **Medium** | [#7572](https://github.com/agentscope-ai/QwenPaw/issues/7572) Tool dispatch swallows exception stacks | **Closed** | Merged [#7572](https://github.com/agentscope-ai/QwenPaw/pull/7572) |
| **Medium** | [#7597](https://github.com/agentscope-ai/QwenPaw/issues/7597) Tool-returned media as bare base64 → 400 | **Closed** | Merged [#7597](https://github.com/agentscope-ai/QwenPaw/pull/7597) |
| **Medium** | [#7620](https://github.com/agentscope-ai/QwenPaw/issues/7620) MCP 401 body "-32601 Method not found" blocks fallback | **Closed** | Merged [#7620](https://github.com/agentscope-ai/QwenPaw/pull/7620) |
| **Low** | [#7634](https://github.com/agentscope-ai/QwenPaw/issues/7634) ClawHub skill install fails on duplicate names | Open | Fix PR [#7640](https://github.com/agentscope-ai/QwenPaw/pull/7640) open |
| **Low** | [#7618](https://github.com/agentscope-ai/QwenPaw/issues/7618) QQ channel group chat no response | **Closed** | Likely config/permissions; closed with 2 comments |

**Pattern:** Core conversation integrity (#7579, #7363) and streaming (#7642) remain unfixed — these should be prioritized for v2.2.1 stable.

---

## 6. Feature Requests & Roadmap Signals

| Request | Signals | Likelihood for Next Version |
|---------|---------|----------------------------|
| **Per-session model overrides** ([#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)) | PR open since Jul 12, updated today; aligns with v2.2.1 model routing | **High** — architectural foundation landing |
| **PawPort: import from Codex/Qoder** ([#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)) | Large PR (Aug 13), updated today; strategic differentiation | **Medium** — complex, may target v2.3 |
| **Memory backend plugin migration** ([#7616](https://github.com/agentscope-ai/QwenPaw/pull/7616)) | ADBPG + PowerContext → plugins; updated today | **High** — incremental, near-complete |
| **OpenViking long-term memory** ([#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613)) | First-time contributor; REST-based; under review | **Medium** — niche but extensible |
| **Skill versioning & dependency validation** ([#7609](https://github.com/agentscope-ai/QwenPaw/pull/7609)) | MCP/env/bin declarations; prerequisite checks | **High** — improves plugin ecosystem reliability |
| **Traffic Light status indicator** ([#7600](https://github.com/agentscope-ai/QwenPaw/issues/7600)) | Simple UI; 2 comments; low complexity | **High** — could land in v2.2.1 |
| **Chat scroll lock** ([#7356](https://github.com/agentscope-ai/QwenPaw/pull/7356)) | UX for long streams; open since Aug 27 | **Medium** — needs review bandwidth |
| **Tool call visibility toggle** ([#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357)) | Reduces noise; open since Aug 27 | **Medium** — pairs with scroll lock |
| **One-click plugin updates + notifications** ([#7582](https://github.com/agentscope-ai/QwenPaw/issues/7582)) | Pain point for multi-device maintainers | **Low** — UI overhaul needed |

**Roadmap prediction:** v2.2.1 stable will likely include per-session models, traffic light, skill versioning, and memory plugin migration. PawPort and OpenViking may slip to v2.3.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **"Model forgets its own replies"** | [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) — 8 comments, detailed env report | High (blocks trust) |
| **"App freezes for 2+ minutes on startup/message"** | [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) — 118–135s measured | High (Windows Desktop) |
| **"409 error when I send message during task — should queue"** | [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559), [#7577](https://github.com/agentscope-ai/QwenPaw/pull/7577) | Medium (fixed in beta) |
| **"Plugin store UX: too many clicks, no bulk update, no notifications"** | [#7582](https://github.com/agentscope-ai/QwenPaw/issues/7582) — multi-device maintainer | Medium (power users) |
| **"Can't hide thinking process in web panel"** | [#2972](https://github.com/agentscope-ai/QwenPaw/issues/2972) — open since Apr, still unresolved | Low (long-standing) |
| **"Chrome console streaming shows nothing until done"** | [#7642](https://github.com/agentscope-ai/QwenPaw/issues/7642) — new, Safari works | Emerging |
| **"Silent rollback of my llama.cpp upgrade"** | [#7633](https://github.com/agentscope-ai/QwenPaw/issues/7633) — user lost custom runtime | Emerging |

**Positive signals:** First-time contributors landing fixes (#7577, #7638, #7632, #7613); rapid bug-to-fix cycle for queueing (#7559 → #7577 in 2 days); provider ecosystem expanding (Requesty).

---

## 8. Backlog Watch — Stale & Critical Items Needing Attention

| Item | Age | Why It Matters | Recommended Action |
|------|-----|----------------|-------------------|
| [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) **Sync calls freeze event loop** | 13 days (Aug 27) | Core architecture flaw; affects every Windows Desktop user | Assign to runtime team; consider `run_in_executor` audit |
| [#2972](https://github.com/agentscope-ai/QwenPaw/issues/2972) **Panel thinking process toggle** | 5 months (Apr 5) | Simple config parity with WeChat channel; low effort | Add `filter_thinking` to console channel config |
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) **Per-session model overrides** | 59 days (Jul 12) | High-value feature; PR stalled in review | Prioritize review; unblocks model routing UX |
| [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) **PawPort import flow** | 27 days (Aug 13) | Strategic differentiator; large scope | Break into smaller PRs; assign reviewer |
| [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) **Model replies lost from context** | 3 days (Sep 6) | **New critical regression** in v2

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-09-09

## 1. Today's Overview
ZeptoClaw shows focused maintenance velocity with **2 security-hardening PRs** (one merged, one open) and **two new feature-tracking issues** opened in the last 24h. The project is actively closing known-vulnerability and secret-permission gaps (#651, #652 → PR #673 merged) while advancing a panel authentication redesign (PR #674). No release was cut today; the maintainer appears to be bundling fixes for a near-term patch. Community engagement remains low (zero reactions/comments on new items), suggesting a small, quiet user base.

## 2. Releases
**No new releases** in the last 24h. The latest published version remains the one prior to today’s security fixes.

## 3. Project Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#673](https://github.com/qhkm/zeptoclaw/pull/673) | **Merged** | `fix(security): harden secret storage and dependencies` — enforces `0600` on `config.toml`/`panel.token`, `0700` on ZeptoClaw directories, retroactively repairs perms, and updates 7 vulnerable crates (h2, quick-xml, lopdf, bcrypt, quinn-proto, crossbeam-epoch, etc.) to satisfy `cargo deny`. | **Critical security fix** — eliminates local credential leakage and unblocks CI (zero-tolerance advisory policy). |
| [#674](https://github.com/qhkm/zeptoclaw/pull/674) | **Open** | `fix(panel): replace websocket bearer URLs with tickets` — replaces long-lived token-in-URL with 30s single-use ticket via CSRF-protected endpoint. | **Auth hardening** — removes tokens from access logs/browser history; ready for review. |

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#666](https://github.com/qhkm/zeptoclaw/issues/666) `[area:memory, P2-high]` | 1 comment, opened 2026-09-05, updated 2026-09-08 | **Durable, transactional cross-session memory** — user wants reliable recall/writes without losing ZeptoClaw’s lean retrieval model (pinned + ≤5 query-matched memories, 2k-char budget). Signals demand for *agent-grade* memory durability. |
| [#675](https://github.com/qhkm/zeptoclaw/issues/675) | 0 comments, opened **today** | **OcaRouter provider support** — external contributor highlights ZeptoClaw’s unique “~6MB binary, 50ms start, runs where containers can’t” niche and requests first-class OcaRouter integration. Indicates interest in **provider pluralism** for edge/embedded deployments. |

*No reactions (👍) on any issue/PR in this window.*

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#652](https://github.com/qhkm/zeptoclaw/issues/652) — secret files (`config.toml`, `panel.token`) written with default umask, readable by other local users | **Closed** (fixed in [#673](https://github.com/qhkm/zeptoclaw/pull/673)) | ✅ Merged |
| **High** | [#651](https://github.com/qhkm/zeptoclaw/issues/651) — 7 RustSec advisories block CI under zero-tolerance policy | **Closed** (fixed in [#673](https://github.com/qhkm/zeptoclaw/pull/673)) | ✅ Merged |
| **Medium** | Panel WebSocket token exposure in URL query string | **Open** (addressed in [#674](https://github.com/qhkm/zeptoclaw/pull/674)) | 🟡 Under review |

*No new crashes or regressions reported today.*

## 6. Feature Requests & Roadmap Signals
1. **Transactional, cross-session memory** ([#666](https://github.com/qhkm/zeptoclaw/issues/666)) — explicit P2-high label; likely candidate for next minor version given memory subsystem focus (Exec #8 + §2).
2. **OcaRouter provider adapter** ([#675](https://github.com/qhkm/zeptoclaw/issues/675)) — aligns with “provider pluralism” theme; low effort if router exposes OpenAI-compatible API.
3. **Panel ticket-based auth** ([#674](https://github.com/qhkm/zeptoclaw/pull/674)) — already implemented, awaiting merge; will ship in next release.

*Prediction*: Next patch (v0.x.y+1) will bundle #673 + #674; memory durability (#666) targets next minor.

## 7. User Feedback Summary
- **Pain points**:  
  - Local credential leakage (config/token files world-readable) — now fixed.  
  - CI blocked by vulnerability policy — now unblocked.  
  - Panel auth tokens leaking into logs/history — fix in review.  
- **Use cases**:  
  - Edge/embedded deployments where container runtimes unavailable (issue #675).  
  - Long-running personal assistant needing reliable cross-session recall (issue #666).  
- **Sentiment**: Silent (no 👍/comments), but issues are *actionable* and *security-focused*, suggesting technically sophisticated users who file precise reports.

## 8. Backlog Watch
| Item | Age | Why It Needs Attention |
|------|-----|------------------------|
| [#666](https://github.com/qhkm/zeptoclaw/issues/666) | 4 days | P2-high, memory subsystem core; no assignee, no linked PR. Risk of stalling if maintainer bandwidth shifts to security-only patches. |
| [#674](https://github.com/qhkm/zeptoclaw/pull/674) | 1 day | Security-relevant panel change; needs review/merge to complete auth hardening started in #673. |
| [#675](https://github.com/qhkm/zeptoclaw/issues/675) | 0 days | External contributor proposal; low friction if maintainer accepts provider-extensibility PRs. |

---
*Digest generated from GitHub data as of 2026-09-09 00:00 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-09

## 1. Today's Overview
ZeroClaw shows **high development velocity** with 59 total items updated in the last 24 hours (9 issues, 50 PRs), though **no items were closed or merged** today — indicating active work-in-progress rather than delivery completion. The project is heavily focused on **provider economics (Anthropic cost tracking, cache pricing)**, **ZeroCode UX improvements** (transcript rendering, tool expansion), and **runtime reliability** (ACP event delivery, audit-chain preservation). Several high-priority bugs (P1) remain open, notably the Anthropic $0.00 spend reporting that disables budget caps entirely. The backlog includes multiple large, stacked PRs awaiting maintainer review, suggesting a review bottleneck.

## 2. Releases
**No new releases** published today. The last release data is not provided in this snapshot.

## 3. Project Progress
**No PRs merged or closed today.** All 50 updated PRs remain open. Key in-flight work includes:

| PR | Area | Status | Notes |
|----|------|--------|-------|
| [#10722](https://github.com/zeroclaw-labs/zeroclaw/pull/10722) | Runtime/ACP | Open | Fixes pre-tool narration & terminal fallback delivery to event consumers (ACP/RPC) — directly addresses ZeroCode transcript loss |
| [#10623](https://github.com/zeroclaw-labs/zeroclaw/pull/10623) | Providers | Open | **XL** — Anthropic prompt-cache passthrough for OpenAI-compatible providers; opt-in `cache_passthrough` flag |
| [#10295](https://github.com/zeroclaw-labs/zeroclaw/pull/10295) | ZeroCode | Open, **blocked** | Expandable tool transcript cards (compact → full); labeled **do-not-merge** |
| [#10455](https://github.com/zeroclaw-labs/zeroclaw/pull/10455) | Gateway/Security | Open | Preserves config write invariants: rejects masked/empty secret patches, re-parses migrated config |
| [#10463](https://github.com/zeroclaw-labs/zeroclaw/pull/10463) | Runtime/Security | Open | Audit-chain preservation through log rotation — recovers sequence/hash from retained logs |
| [#10726](https://github.com/zeroclaw-labs/zeroclaw/pull/10726) | CI/Docker | Open | **New today** — Pins zerorelay base images by digest (follows issue [#10277](https://github.com/zeroclaw-labs/zeroclaw/issues/10277)) |
| [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) | Skills/Channels | Open, **stacked** | Declarative auto-activation with provider switch & image-turn tool blocking; restacked post-#9563 |
| [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) | Agent/Provider | Open | Live provider identity on usage events; resolves context window from serving provider |

## 4. Community Hot Topics
*No comment counts are available in the data (all show `undefined` or 0).* Activity is inferred from **update recency** and **label severity**. Top candidates:

| Item | Type | Labels | Why It Matters |
|------|------|--------|----------------|
| [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) | Issue | `bug`, `priority:p1`, `risk:high`, `status:in-progress` | **Anthropic provider reports $0.00 spend** — budget caps never fire; 4 comments, updated today |
| [#10697](https://github.com/zeroclaw-labs/zeroclaw/issues/10697) | Issue | `bug`, `priority:p1`, `risk:high`, `zerocode`, `channel:acp` | **ACP transcript drops pre-tool assistant text** — only post-last-tool text renders; 1 comment, updated today |
| [#10623](https://github.com/zeroclaw-labs/zeroclaw/pull/10623) | PR | `enhancement`, `risk:high`, `size:XL`, `provider:anthropic` | Anthropic prompt-cache passthrough — enables 1-hour TTL cache writes for compatible providers |
| [#10295](https://github.com/zeroclaw-labs/zeroclaw/pull/10295) | PR | `enhancement`, `zerocode`, `size:L`, `status:blocked`, `do-not-merge` | ZeroCode expandable tool cards — core UX for debugging agent runs |
| [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) | PR | `feat`, `risk:high`, `size:XL`, `channel:acp`, `web`, `zerocode` | Live provider identity on usage events — fixes context-meter ceiling bug |

**Underlying needs:**  
- **Cost observability** is broken for Anthropic (two distinct issues: [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) zero spend, [#10699](https://github.com/zeroclaw-labs/zeroclaw/issues/10699) cache-write underpricing)  
- **ZeroCode transcript fidelity** is a recurring theme ([#10697](https://github.com/zeroclaw-labs/zeroclaw/issues/10697), [#8763](https://github.com/zeroclaw-labs/zeroclaw/issues/8763), [#10295](https://github.com/zeroclaw-labs/zeroclaw/pull/10295), [#10725](https://github.com/zeroclaw-labs/zeroclaw/issues/10725))  
- **Provider cache economics** need first-class support ([#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663), [#10623](https://github.com/zeroclaw-labs/zeroclaw/pull/10623))

## 5. Bugs & Stability
**Ranked by severity (label `risk` + `priority`):**

| Severity | Item | Summary | Fix PR? |
|----------|------|---------|---------|
| **Critical (P1, High)** | [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) | Anthropic provider logs $0.00 cost → budget caps disabled | No PR linked; `status:in-progress` |
| **Critical (P1, High)** | [#10697](https://github.com/zeroclaw-labs/zeroclaw/issues/10697) | ACP transcript drops assistant text before tool calls | **Yes:** [#10722](https://github.com/zeroclaw-labs/zeroclaw/pull/10722) (opened today) |
| **High (P2, High)** | [#10699](https://github.com/zeroclaw-labs/zeroclaw/issues/10699) | Cost ledger prices cache writes at plain input rate (misses write premium) | No PR yet |
| **High (P2, High)** | [#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663) | No configurable 1-hour TTL for Anthropic cache markers (default 5 min) | **Yes:** [#10623](https://github.com/zeroclaw-labs/zeroclaw/pull/10623) implements passthrough |
| **Medium (P2, Medium)** | [#10690](https://github.com/zeroclaw-labs/zeroclaw/issues/10690) | Integrations page "Configure" link uses slugified display name (Z.AI → 404) | No PR yet |
| **Medium (P2, Medium)** | [#10277](https://github.com/zeroclaw-labs/zeroclaw/issues/10277) | Published zerorelay image uses mutable base tags (not pinned by digest) | **Yes:** [#10726](https://github.com/zeroclaw-labs/zeroclaw/pull/10726) (opened today) |
| **Medium** | [#10548](https://github.com/zeroclaw-labs/zeroclaw/issues/10548) | Mermaid SVG in zoom dialog has `aria-hidden="true"` — accessibility regression | No PR yet |
| **High (Security)** | [#10417](https://github.com/zeroclaw-labs/zeroclaw/pull/10417) | Runtime: deliver terminal fallbacks live (malformed tool protocol) | PR open, `needs-author-action` |
| **High (Security)** | [#10446](https://github.com/zeroclaw-labs/zeroclaw/pull/10446) | Tool-call parser: salvage envelopes serialized into prose (gpt-5.6 via codex) | PR open, `needs-author-action` |
| **High (Security)** | [#10449](https://github.com/zeroclaw-labs/zeroclaw/pull/10449) | Edge TTS artifact created world-readable (umask defaults) | PR open, `needs-maintainer-review` |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Anthropic 1-hour prompt-cache TTL** (configurable) | [#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663) + [#10623](https://github.com/zeroclaw-labs/zeroclaw/pull/10623) | **High** — PR is XL but active, addresses direct cost savings |
| **ZeroCode expandable tool transcript cards** | [#8763](https://github.com/zeroclaw-labs/zeroclaw/issues/8763) + [#10295](https://github.com/zeroclaw-labs/zeroclaw/pull/10295) | **Medium** — PR blocked & labeled `do-not-merge`; may need rework |
| **Structured tool-input rendering in ZeroCode** | [#10725](https://github.com/zeroclaw-labs/zeroclaw/issues/10725) (created today) | **Medium** — New, small scope, UX polish |
| **Cache-write cost rate in ledger** | [#10699](https://github.com/zeroclaw-labs/zeroclaw/issues/10699) | **High** — Data model gap; blocks accurate Anthropic billing |
| **Live provider identity on usage events** | [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) | **Medium** — Large PR, touches context meter, provider resolution |
| **SSE streaming for webhook chat turns** | [#10450](https://github.com/zeroclaw-labs/zeroclaw/pull/10450) | **Medium** — Gateway enhancement, `needs-maintainer-review` |
| **Declarative skill auto-activation with provider switch** | [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) | **Low** — Stacked, `stale-candidate`, depends on merged #9563 |
| **Public maintainer dashboard (mdBook)** | [#10457](https://github.com/zeroclaw-labs/zeroclaw/pull/10457) | **Low** — Internal tooling, `distinguished contributor` but not user-facing |

## 7. User Feedback Summary
*No direct user comments (reactions/comments ≈ 0 across board).* Pain points inferred from issue titles and labels:

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Invisible spend on Anthropic** | [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) — "daily/monthly budget caps can never fire" | **Financial risk** — users cannot enforce budgets |
| **ZeroCode transcript loss** | [#10697](https://github.com/zeroclaw-labs/zeroclaw/issues/10697) — "only post-last-tool text renders" | **Debugging broken** — pre-tool reasoning invisible |
| **Subagent activity opaque** | [#8763](https://github.com/zeroclaw-labs/zeroclaw/issues/8763) — "no good way to inspect what spawned subagents" | **Observability gap** for complex agent runs |
| **Cache writes underpriced** | [#10699](https://github.com/zeroclaw-labs/zeroclaw/issues/10699) — "understating every cache miss by the write premium" | **Cost accuracy** — systematic undercount |
| **Default 5-min cache TTL** | [#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663) — "each cache marker has no TTL" | **Performance/cost** — cache evicted too fast |
| **Broken deep links in dashboard** | [#10690](https://github.com/zeroclaw-labs/zeroclaw/issues/10690) — Z.AI configure link 404s | **Usability** — minor but visible |
| **Accessibility regression in docs** | [#10548](https://github.com/zeroclaw-labs/zeroclaw/issues/10548) — `aria-hidden="true"` on Mermaid in dialog | **Compliance** — a11y failure |

## 8. Backlog Watch — Stale & High-Impact Items Needing Attention
| Item | Age | Labels | Why It’s Stuck |
|------|-----|--------|----------------|
| [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) | ~60 days | `enhancement`, `stacked`, `stale-candidate`, `risk:high`, `size:XL` | Restacked post-#9563; large skills/activation refactor; needs author action |
| [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) | ~60 days | `feat`, `risk:high`, `size:XL`, `needs-author-action` | Context-window fix + live provider identity; broad runtime/provider touch |
| [#8546](https://github.com/zeroclaw-labs/zeroclaw/pull/8546) | ~71 days | `bug`, `cli`, `needs-maintainer-review`, `risk:medium` | Localize status fragments; maintainer refreshed branch but still open |
| [#9427](https://github.com/zeroclaw-labs/zeroclaw/pull/9427) | ~44 days | `bug`, `channel:line`, `status:blocked`, `risk:high` | Depends on #9428; LINE auth gate; `ignore` still broken on master |
| [#10295](https://github.com/zeroclaw-labs/zeroclaw/pull/10295) | ~16 days | `enhancement`, `zerocode`, `status:blocked`, `do-not-merge` | Expandable tool cards; explicitly held — may await design consensus |
| [#10414](https://github.com/zeroclaw-labs/zeroclaw/pull/10414) | ~13 days | `bug`, `cron`, `needs-maintainer-review`, `risk:high` | Cron manual trigger/history guard; security-sensitive |
| [#10425](https://github.com/zeroclaw-labs/zeroclaw/pull/10425) | ~12 days | `enhancement`, `cron`, `size:XL`, `needs-maintainer-review` | RFC #6954 slice 1/3 — internal principal envelope; foundational |
| [#10442](https://github.com/zeroclaw-labs/zeroclaw/pull/10442) | ~11 days | `bug`, `provider

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*