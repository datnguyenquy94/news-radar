# OpenClaw Ecosystem Digest 2026-08-15

> Issues: 303 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-15 01:40 UTC

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

# OpenClaw Project Digest — 2026-08-15

---

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 303 issues and 500 PRs updated in the last 24 hours — a signal of active development across multiple fronts. No new release shipped today, but the volume of merged/closed PRs (101) indicates steady integration. The issue backlog is dominated by **P1/P0 bugs** affecting message delivery, session state, provider integrations (DeepSeek, Feishu, WhatsApp, LINE, Matrix), and context compaction. UI/UX work is concentrated in the Control UI (sidebar, chat header, session management), while gateway-level fixes target cron reliability, memory compaction, and authentication edge cases. Project health appears **active but strained** — many high-severity bugs remain open with linked PRs awaiting maintainer review.

---

## 2. Releases

**No new releases today.** Latest stable appears to be `2026.7.x` series with beta `2026.7.2-beta.x` in testing. Several issues reference `2026.5.12`, `2026.6.1`, `2026.3.13` as affected versions.

---

## 3. Project Progress — Merged/Closed PRs (101 today)

Key merged/closed PRs advancing features or fixes:

| PR | Area | Summary |
|----|------|---------|
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | Security/Install | **Closed** — Requires acknowledgement for install policy warnings (`warn` verdict); interactive CLI + Control UI review flow |
| [#123330](https://github.com/opencaw/openclaw/pull/123330) | Gateway/Control UI | **Closed** — Fixes explicit-owner Control UI discovery (model-catalog reads scoped per agent) |
| [#123914](https://github.com/openclaw/openclaw/pull/123914) | Cron/Gateway | **Closed** — Keeps agent-less cron schedules running after adding a second agent |
| [#123901](https://github.com/openclaw/openclaw/pull/123901) | Workers/Cache | **Closed** — Bounds Gateway bundle cache growth (content-addressed tarballs under `state/cache/worker-bundles`) |
| [#123916](https://github.com/openclaw/openclaw/pull/123916) | Web UI | **Closed** — Removes disconnected build mismatch projection (dead code) |

**Pattern:** Security hardening (install policy), multi-agent/cron reliability, cache hygiene, and UI cleanup are shipping. Many fixes are small, targeted, and close specific regressions.

---

## 4. Community Hot Topics — Most Active Issues/PRs

### Top Issues by Comment Count

| Issue | Comments | Priority | Core Problem |
|-------|----------|----------|--------------|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | 94 | — | **Silent reply failures** recurring after #116277 closed; monitoring cron still logs occurrences (no queued reply payload) |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 51 | P2 | **Memory Trust Tagging by Source** — feature to tag memory entries by origin (user, web, skills) to prevent poisoning |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 25 | P2 | **Per-agent cost budgets** at gateway level (daily/monthly caps before dispatch) |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | 20 | P1 | **Cron agents stall on DeepSeek** — `[cron:...]` prefix deprioritized by DeepSeek API edge |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | 20 | P1 | **Codex PreToolUse hook spawns CPU-bound processes** — `openclaw-hooks` relay consumes 100%+ CPU, stalls gateway RPC |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | 19 | P1 | **Steer mode doesn't inject mid-turn** — messages queued until turn completes (regression from `KeyedAsyncQueue`) |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) | 14 | P3 | **`${XDG_CONFIG_HOME}` not expanded** when installing skills via ClawHub (Docker) |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | 11 | P0 | **Live Docs ahead of release** — `Heartbeat IsolatedSessions` documented but missing in `2026.3.13` |

### Top PRs by Activity (Open, awaiting review/proof)

| PR | Area | Status | Notes |
|----|------|--------|-------|
| [#123666](https://github.com/openclaw/openclaw/pull/123666) | Web UI (sidebar) | ⏳ waiting on author | Transactional sidebar customization (TRX-01–04) |
| [#123682](https://github.com/openclaw/openclaw/pull/123682) | Web UI (sidebar) | ⏳ waiting on author | Consolidate sidebar issues into quiet panel (Bell + panel) |
| [#123874](https://github.com/openclaw/openclaw/pull/123874) | Web UI (chat rails) | ⏳ waiting on author | Unify chat side rails into tabbed panel (closes #123286) |
| [#123276](https://github.com/openclaw/openclaw/pull/123276) | Multi-app (session defaults) | ⏳ waiting on author | Folder group defaults for new sessions (Local/Worktree mode) |
| [#120491](https://github.com/openclaw/openclaw/pull/120491) | Tools (message budget) | 📣 needs proof | Per-turn per-target send budget guard for `message`/`conversations_send` tools |

**Underlying needs:** Operators want **reliable message delivery** (silent failures, provider quirks), **session predictability** (compaction, steering, cron), **cost control**, and **UI coherence** (sidebar, chat header, session identity). The DeepSeek cron stall and Codex hook CPU spike reveal **provider-specific integration fragility**.

---

## 5. Bugs & Stability — Reported/Updated Today (Ranked by Severity)

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P0** | [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live Docs document `Heartbeat IsolatedSessions` not in `2026.3.13` (release blocker) | — |
| **P1** | [#121953](https://github.com/openclaw/openclaw/issues/121953) | Cron agents stall on DeepSeek due to `[cron:]` prefix deprioritization | — |
| **P1** | [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex `PreToolUse` hook spawns runaway `openclaw-hooks` processes (100% CPU, RPC stall) | — |
| **P1** | [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer mode (`messages.queue.mode: "steer"`) doesn't inject mid-turn for main sessions | [#48003 linked PR](https://github.com/openclaw/openclaw/issues/48003) (clawsweeper:linked-pr-open) |
| **P1** | [#120563](https://github.com/openclaw/openclaw/issues/120563) | Custom/Ollama provider: conversation history not sent — fixed-size context every turn | — |
| **P1** | [#47975](https://github.com/openclaw/openclaw/issues/47975) | Subagent sessions persist after completion; main session becomes unresponsive | — |
| **P1** | [#113181](https://github.com/openclaw/openclaw/issues/113181) | Cron `delivery.mode="none"` + isolated agent → silent no-op (`status=ok`, `delivered=false`) | — |
| **P1** | [#86012](https://github.com/openclaw/openclaw/issues/86012) | LINE channel: messages silently lost (reply token expiry + no push fallback) | [#86012 linked PR](https://github.com/openclaw/openclaw/issues/86012) |
| **P1** | [#86050](https://github.com/openclaw/openclaw/issues/86050) | Gateway buffers `claude-cli` stream events; surfaces see only final message | [#86050 linked PR](https://github.com/openclaw/openclaw/issues/86050) |
| **P1** | [#109881](https://github.com/openclaw/openclaw/issues/109881) | Bedrock `bedrock-converse-stream`: no thinking-signature replay protection — bricks Claude 4+ sessions | — |
| **P1** | [#123557](https://github.com/openclaw/openclaw/issues/123557) | ACP `session/new` `cwd` not propagated to Gateway `chat.send`; agent runs in default workspace | — |
| **P1** | [#123273](https://github.com/openclaw/openclaw/issues/123273) | Image attachments fail for named (non-default) agents — "failed to hydrate structured image attachment" | — |
| **P1** | [#91941](https://github.com/openclaw/openclaw/issues/91941) | Feishu streaming card full-content updates cause severe latency on long replies | [#91941 linked PR](https://github.com/openclaw/openclaw/issues/91941) |
| **P1** | [#122618](https://github.com/openclaw/openclaw/issues/122618) | Compaction safeguard: oversized suffix evicts structured summary body (headings lost) | — |
| **P2** | [#121058](https://github.com/openclaw/openclaw/issues/121058) | Silent reply failures recurring post-#116277 (94 comments — monitoring still firing) | — |
| **P2** | [#53540](https://github.com/openclaw/openclaw/issues/53540) | Embedded runner "Network connection lost" on large tool-call params (generation > timeout) | [#53540 linked PR](https://github.com/openclaw/openclaw/issues/53540) |
| **P2** | [#88079](https://github.com/openclaw/openclaw/issues/88079) | WebChat: `reasoning_content` not streamed for Kimi Code & DeepSeek Reasoner (only MiniMax works) | [#88079 linked PR](https://github.com/openclaw/openclaw/issues/88079) |
| **P2** | [#50611](https://github.com/openclaw/openclaw/issues/50611) | Memory flush never triggers when `reserveTokensFloor == contextWindow` (threshold negative) | — |
| **P2** | [#82020](https://github.com/openclaw/openclaw/issues/82020) | Custom provider sharing `baseUrl` with built-in still broken (regression from 4.29) | — |
| **P2** | [#78082](https://github.com/openclaw/openclaw/issues/78082) | Discord per-account `commands.native=false` leaves stale specialist commands hijacking `/side` | — |
| **P2** | [#123073](https://github.com/openclaw/openclaw/issues/123073) | `openclaw update` fails on `dev` channel: `EUNSUPPORTEDPROTOCOL` on `workspace:*` (npm vs pnpm) | — |
| **P2** | [#122625](https://github.com/openclaw/openclaw/issues/122625) | Matrix room targets cannot resolve session route without explicit `--session-key` | — |

**Stability themes:** Message loss/delivery failures across 6+ channels (LINE, Matrix, Feishu, WebChat, Telegram, Cron), provider-specific regressions (DeepSeek, Bedrock, Ollama, Codex), compaction/session-state corruption, and dev-toolchain mismatches (pnpm/npm).

---

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signal | Likelihood for Next Version |
|-------|----------|--------|----------------------------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | P2 | **Memory Trust Tagging** — 51 comments, security-focused, tagged `impact:security`, `impact:session-state` | High — security posture, active discussion |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | P2 | **Per-agent cost budgets at gateway** — linked PR open, operator demand for spend control | High — linked PR, clear ROI |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) | P2 | **Agent-triggered context compaction (self-compact tool)** — agent-filed RFC | Medium — needs UX design |
| [#54373](https://github.com/openclaw/openclaw/issues/54373) | P3 | **Context Provenance metadata** — source/volatility tags for injected context | Medium — RFC stage, plugin observability |
| [#50900](https://github.com/openclaw/openclaw/issues/50900) | P3 | **Per-pattern session retention rules** — replace uniform `pruneAfter` | Low — niche, no PR |
| [#65438](https://github.com/openclaw/openclaw/issues/65438) | P2 | **Configurable bootstrap injection order** for prompt cache optimization | Medium — Anthropic cache optimization |
| [#54128](https://github.com/openclaw/openclaw/issues/54128) | P3 | **`maxThreads` for local embedding (node-llama-cpp)** — CPU underutilization | Low — performance tuning |
| [#87295](https://github.com/openclaw/openclaw/issues/87295) | P3 | **LTS version request** — 4 👍, production stability ask | Low — process/policy decision |
| [#87362](https://github.com/openclaw/openclaw/issues/87362) | P3 | **Task flow lifecycle hook events** for plugin observability | Medium — plugin ecosystem investment |

**Roadmap read:** Security hardening (memory tagging, install policy), operator guardrails (cost budgets, session retention), and **provider/channel reliability** are the strongest signals. UI consolidation (sidebar, chat rails) is shipping now.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence (Issues) | User Impact |
|------------|-------------------|-------------|
| **Silent message loss** | #121058 (94 comments), #86012 (LINE), #113181 (cron), #95566 (WebChat dup/order) | Production unreliable; no visibility into failures |
|

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-08-15)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **bimodal maturity**: a tier of high-velocity, production-grade platforms (OpenClaw, IronClaw, ZeroClaw, CoPaw, Hermes Agent) shipping daily fixes and architectural upgrades, and a second tier of specialized or earlier-stage projects (NanoBot, PicoClaw, NanoClaw, LobsterAI, Moltis) iterating on UX polish, provider integrations, and niche channel support. **No project released a new version today**, but LobsterAI shipped 2026.8.14 yesterday and multiple projects (ZeroClaw v0.8.5, OpenClaw 2026.7.x, IronClaw post-1.2.0) are in active stabilization windows. Cross-cutting themes include **multi-channel message reliability**, **provider-specific integration hardening**, **session-state durability**, **cost/quota guardrails**, and **Windows/edge-hardware compatibility** — signaling a shift from core agent loops to production operational concerns.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed PRs | Release Status | Health Score* |
|---------|---------------------|-------------------|-------------------|----------------|---------------|
| **OpenClaw** | 303 | 500 | 101 | Stable 2026.7.x, beta 2026.7.2-beta.x | 🟡 Active but strained |
| **IronClaw** | 11 | 47 | 23 | 1.2.0 merged to main; post-release stabilization | 🟢 High velocity, stabilizing |
| **ZeroClaw** | 7 | 50 | 3 | v0.8.5 targeting Aug 30; intake frozen Aug 4 | 🟢 Active & Focused |
| **CoPaw** | 36 | 41 | 15 | v2.1.0 current; no new release | 🟢 Very high velocity, review strained |
| **Hermes Agent** | 17 | 50 | 25 | No release; v0.19.1 patch imminent | 🟢 Intense stabilization sprint |
| **NanoBot** | 3 resolved | 22 | ~6 | No release; patch imminent (Anthropic fix) | 🟢 Strong maintenance |
| **LobsterAI** | 2 active | 27 (22 merged) | 22 | **Released 2026.8.14 yesterday** | 🟢 Healthy velocity & cadence |
| **PicoClaw** | 3 touched | 9 | 5 | No release | 🟡 Steady maintenance |
| **NanoClaw** | 2 | 11 | 3 (CI/CD tests) | No release | 🟢 Stable, bug-fix sprint |
| **Moltis** | 0 | 2 | 0 | No release | 🟡 Development-phase |
| **NullClaw** | 0 | 1 | 1 | No release | 🔴 Minimal activity |
| **ZeptoClaw** | 0 | 0 | 0 | No activity | ⚫ Dormant |

*Health Score: 🟢 Healthy/High velocity | 🟡 Active with concerns | 🔴 Low velocity | ⚫ Inactive

---

## 3. OpenClaw's Position

**Scale Advantage**: OpenClaw operates at **an order of magnitude higher raw activity** (800+ issues/PRs daily vs. 50–100 for peers), reflecting its role as the **core reference implementation** with the broadest provider/channel matrix (DeepSeek, Feishu, WhatsApp, LINE, Matrix, Bedrock, Ollama, Codex, etc.) and most complex session-state machinery (compaction, steer mode, cron isolation, ACP gateway).

**Technical Approach Differences**:
- **Gateway-centric architecture**: Centralized `chat.send`, cron, compaction, and provider routing in a single gateway — unlike NanoBot/IronClaw/ZeroClaw's more modular plugin/provider crates.
- **Multi-tenant session isolation**: First-class `Heartbeat IsolatedSessions`, folder-group defaults, and ACP `session/new` routing — ahead of peers still building per-session model overrides (CoPaw #5992) or pluggable memory (IronClaw #7661).
- **Security-first install policy**: Interactive CLI + Control UI review flow for `warn` verdicts (#116489) — more advanced than NullClaw's configurable DB path or NanoClaw's signature approver.

**Community Size**: Largest by issue/PR volume and comment engagement (94 comments on #121058 silent failures). However, **maintainer review bandwidth is a bottleneck** — 101 merged PRs but many P1/P0 bugs with linked PRs awaiting review, indicating **contributor velocity > maintainer capacity**.

---

## 4. Shared Technical Focus Areas (Cross-Project Requirements)

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Message Delivery Reliability** | OpenClaw (#121058, #86012 LINE, #113181 cron), Hermes (#83878 Telegram), NanoClaw (Discord #2752), CoPaw (#7011 cross-session), ZeroClaw (#9574 channel approvals) | Silent failure detection, reply-token fallback, idempotent delivery, cross-channel session isolation |
| **Provider Integration Hardening** | OpenClaw (DeepSeek cron stall, Bedrock thinking-sig, Ollama history), NanoBot (Anthropic stream timeout), CoPaw (MiniMax 404, Azure OpenAI Responses 400), ZeroClaw (incomplete responses #9421), LobsterAI (Gemini /v1 URL) | Per-provider quirk handling, streaming contracts, auth diagnostics, capability-aware routing |
| **Session State Durability** | OpenClaw (compaction safeguard #122618, subagent persistence #47975), Hermes (FTS5 self-repair #86183, history truncation #86573), CoPaw (scroll compression #6951), NanoBot (file-cap archive #5378, stale saves #5271) | Compaction without loss, crash recovery, cross-device sync, approval UI state sync |
| **Cost/Quota Guardrails** | OpenClaw (#42475 per-agent budgets), IronClaw (#7651 automation suppression), ZeroClaw (#9996 action budget atomicity), LobsterAI (Team Edition quotas) | Gateway-level daily/monthly caps, per-turn send budgets, automated suppression on empty results |
| **Windows / Edge Hardware Compatibility** | Hermes (6/13 bugs Windows: cron PYTHONPATH, kanban worker, TUI mouse, LSP), NanoClaw (AVX2 SIGILL #3245, Node version #3248), CoPaw (cmd flash #4832, taskbar icon #2846), PicoClaw (Go concurrency audit #3308) | Non-AVX2 images, native Windows launchers, POSIX shim elimination, daemon/background modes |
| **UI/UX Consolidation** | OpenClaw (sidebar TRX, chat rails tabs), NanoBot (conversation groups, sidebar polish), LobsterAI (sidebar check-in, banner carousel), CoPaw (Skills Hub #2418, desktop auto-update), IronClaw (SearchField, i18n) | Tabbed panels, persistent session controls, in-app skill marketplaces, auto-update, i18n coverage |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Technical Architecture |
|---------|---------------|--------------|------------------------|
| **OpenClaw** | **Universal gateway** — max provider/channel coverage, enterprise multi-tenancy | Platform operators, multi-channel deployments | Monolithic gateway + Control UI; TypeScript/Go; ACP-native |
| **IronClaw** | **Extensible platform** — pluggable memory (MCP), unbound turns, operator WebUI | NEAR ecosystem, developers building agent products | Rust core; crate-based plugins (memory_mcp, extensions); ACP harness |
| **ZeroClaw** | **Security-hardened runtime** — egress policies, action budgets, agent portability | Security-conscious deployments, regulated environments | Rust; capability-based security; Blacksmith CI; ADR-governed |
| **CoPaw** | **Desktop-first UX** — skill marketplace, daemon mode, multi-session concurrency | Power users, desktop automation, Chinese-market (Feishu, QQ) | Python/TypeScript; AgentScope framework; OneBot/Channel plugins |
| **Hermes Agent** | **Local-first autonomy** — TUI/Desktop, session durability, skills explosion | Individual developers, local-model enthusiasts | Python; prompt_toolkit TUI; god-file sharding; skill registry CI |
| **NanoBot** | **Type-safe Python agent** — Pyright strict, MCP v2, WebUI collaboration | Python-centric teams, collaborative workflows | Python gateway + TS WebUI; strict typing; session collaboration |
| **LobsterAI** | **Productized SaaS UX** — Team Edition, Skills/Connectors marketplace, cowork rendering | Enterprise teams, Chinese-market (Youdao), browser-based | TypeScript/React; OpenClaw-derived; rapid release cadence (date-based) |
| **PicoClaw** | **Lightweight Go multi-channel** — DingTalk, WeChat, DeltaChat, DashScope TTS | Chinese-market channel integrations, edge deployment | Go; SeaHorse engine; minimal deps; channel adapters |
| **NanoClaw** | **Hardened container image** — cosign verification, non-AVX2, cron/cleanup reliability | Edge/embedded deployments, supply-chain security | Bun/TypeScript; prebuilt hardened images; signature approver |
| **Moltis** | **Integration-native agents** — Slack live cards, CalDAV/Gmail connectors | Teams living in Slack/Calendar/Email workflows | Rust; connector framework; privacy-preserving tool cards |
| **NullClaw** | **Configurable memory backend** — SQLite path externalization | Read-only/containerized deployments | Minimal; single-PR velocity; early stage |
| **ZeptoClaw** | *Dormant* | — | — |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (High Velocity + Active Stabilization)** | OpenClaw, IronClaw, ZeroClaw, CoPaw, Hermes Agent | Daily merged PRs >20; architectural epics completing (god-file sharding, unbound turns, pluggable memory); release candidates imminent |
| **Steady Feature Delivery (Regular Releases + UX Polish)** | LobsterAI, NanoBot | Date-based releases (LobsterAI), patch-ready PRs (NanoBot); UI/UX investment high; provider bugs fixed same-day |
| **Focused Bug-Fix Sprints (Stable Core + Targeted Fixes)** | NanoClaw, PicoClaw | Low issue counts; PRs fix specific regressions (AVX2, Node version, MCP hang); CI/CD hardening |
| **Early / Specialized Development** | Moltis, NullClaw | <5 PRs/day; feature PRs open but unmerged; no release cadence; single-contributor dominant |
| **Dormant** | ZeptoClaw | Zero activity |

**Key Insight**: The top 5 projects represent **~90% of total ecosystem PR volume** and are converging on **production hardening** (security, reliability, cost control) rather than core agent capabilities — suggesting the "agent loop" is largely solved and the market is now competing on **operational maturity**.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Message delivery is the new "hello world"** | 6+ projects fixing silent losses across LINE, Matrix, Telegram, Discord, Feishu, Cron | **Invest in idempotent delivery, observability, and provider-specific fallbacks** — not optional for production |
| **Provider quirks require dedicated shims** | DeepSeek cron prefix, Bedrock thinking-sig, Anthropic stream timeout, MiniMax 404, Azure Responses 400, Ollama history | **Build provider adapters as first-class plugins** with contract tests; don't assume OpenAI compatibility |
| **Session state = durability + UX** | Compaction safeguards, FTS5 self-repair, scroll compression, approval UI sync, cross-device session routing | **Design session as a persistent, migratable object** — not transient context |
| **Cost control moves to gateway layer** | Per-agent budgets (OpenClaw), action budgets (ZeroClaw), automation suppression (IronClaw), Team quotas (LobsterAI) | **Implement token/action accounting at dispatch**, not post-hoc; expose to operators via UI |
| **Windows/edge is a first-class target** | 6 Hermes Windows bugs, NanoClaw AVX2/SIGILL, CoPaw daemon/taskbar, PicoClaw Go concurrency | **Test on non-AVX2, ARM, Windows from CI**; provide native launchers; support background/daemon modes |
| **Skill/Extension marketplaces becoming standard** | OpenClaw ClawHub, CoPaw Skills Hub, LobsterAI Connectors, Hermes 106 social skills, IronClaw

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-15

## 1. Today's Overview
NanoBot shows **high development velocity** with 22 PRs updated and 3 issues resolved in the last 24 hours. The project is actively refactoring type-safety (Pyright strict mode), fixing streaming timeout regressions in the Anthropic provider, and polishing WebUI collaboration features. No new release was cut today, but multiple merge-ready PRs suggest an imminent patch or minor version. Overall health: **strong — active maintenance, rapid bug turnaround, and feature work proceeding in parallel**.

---

## 2. Releases
**No new releases today.** The latest published version remains whatever was current before 2026-08-15. Watch for a patch release incorporating the Anthropic streaming fix (#5392) and session-save retry (#5382).

---

## 3. Project Progress — Merged / Closed PRs (Last 24h)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5392](https://github.com/HKUDS/nanobot/pull/5392) | **Bug fix (p2)** | Fixes #5391: `NANOBOT_STREAM_IDLE_TIMEOUT_S` was incorrectly applied as a *total* timeout on Anthropic’s no-callback streaming path, killing long but active generations. Now treated as inactivity-only. | **High** — restores reliability for long Anthropic completions. |
| [#5395](https://github.com/HKUDS/nanobot/pull/5395) | **WebUI feature** | Refines conversation groups: consistent terminology, full localization, drag-to-group, simplified delete confirmation, shared shape scale. | **Medium** — UX polish for sidebar organization. |
| [#5393](https://github.com/HKUDS/nanobot/pull/5393) | **WebUI feature** | Polishes sidebar & session transitions: clearer hierarchy, flatter tabs, folder presentation, disclosure indicators. Split from #5358 for clean merge. | **Medium** — incremental UI improvement. |
| [#5390](https://github.com/HKUDS/nanobot/pull/5390) | **Chore / feature** | “Agent/knowledge graph” — minimal description; likely internal refactor or prototype. | **Low/Unknown** — needs code review to assess. |
| [#4689](https://github.com/HKUDS/nanobot/pull/4689) | **Provider feature (closed invalid)** | OAuth status/expiry warnings across CLI, WebUI, runtime. Closed as invalid/conflict — may be superseded. | **Low** — abandoned or reworked. |
| [#5018](https://github.com/HKUDS/nanobot/pull/5018) | **Skills feature (closed conflict)** | Explicit context loading for skills via `skill_names` input. Closed due to conflict — may rebase. | **Medium** — skill-system enhancement deferred. |
| [#5378](https://github.com/HKUDS/nanobot/issues/5378) (Issue closed) | **Bug fix** | Session file-cap archive mutating session before persistence; overflow lost if callback fails. Fix likely in a related PR (not listed as merged today). | **High** — data-loss risk. |
| [#5391](https://github.com/HKUDS/nanobot/issues/5391) (Issue closed) | **Bug fix** | Same as #5392 — Anthropic stream idle timeout misapplied. | **High** — resolved by #5392. |

**Net progress:** Two critical bugs fixed (#5391, #5378), WebUI grouping polished, OAuth/skills work deferred.

---

## 4. Community Hot Topics — Most Active Items

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#5396](https://github.com/HKUDS/nanobot/pull/5396) — Narrow file-level Pyright suppressions | 14 files touched, linked to open issue #5161 | **Type-safety maturity**: team is systematically removing blanket `pyright: ignore` directives to enable strict checking. Signals commitment to maintainability. |
| [#5309](https://github.com/HKUDS/nanobot/pull/5309) — Marketplace skills shadow builtins | Open since 2026-08-09, updated today | **Extensibility parity**: users expect workspace skills to override bundled ones; current loader marks both as “installed,” breaking install UX. |
| [#5179](https://github.com/HKUDS/nanobot/pull/5179) — Migrate MCP integration to SDK v2 | Open since 2026-07-30, updated today | **Protocol modernization**: MCP v2 migration with legacy SSE/stdio compatibility. Critical for tool-calling ecosystem alignment. |
| [#4329](https://github.com/HKUDS/nanobot/pull/4329) — Native TypeScript terminal UI | Open since 2026-06-13, updated today | **Frontend rewrite**: replacing Python TUI with TypeScript/OpenTUI while keeping Python gateway. Long-running, high-impact. |
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) — Session collaboration via mentions | Open since 2026-08-12, conflict label | **Multi-user workflows**: stable `@name` identity, mention picker for peer sessions. Foundation for real-time collaboration. |

**Pattern:** Type-safety, provider modernization, and WebUI collaboration dominate contributor attention.

---

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)

| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **Critical** | [#5378](https://github.com/HKUDS/nanobot/issues/5378) — Session file-cap archive mutates live session before persistence; overflow lost on callback failure | Closed (fix implied) | Likely in a session-manager PR not shown as merged today |
| **High** | [#5391](https://github.com/HKUDS/nanobot/issues/5391) — Anthropic `NANOBOT_STREAM_IDLE_TIMEOUT_S` acts as total timeout, killing long streams | Closed | **Fixed by [#5392](https://github.com/HKUDS/nanobot/pull/5392)** (merged) |
| **High** | [#5382](https://github.com/HKUDS/nanobot/pull/5382) — `os.replace()` transient `PermissionError` on Windows crashes gateway during heartbeat save | Open (p2) | **PR #5382** adds retry logic — ready for review |
| **Medium** | [#5271](https://github.com/HKUDS/nanobot/pull/5271) — Stale background task saves overwriting session after `/new` | Open (p0) | **PR #5271** serializes `/new` with compaction, rejects invalidated saves |
| **Medium** | [#5371](https://github.com/HKUDS/nanobot/pull/5371) — WebUI shows assistant copy/fork actions before `turn_end` | Open (p2) | **PR #5371** hides actions until authoritative turn end |

**Stability signal:** Two production-affecting bugs fixed today; two more (Windows save crash, session race) have review-ready patches.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Evidence | Likelihood for Next Release |
|---------|----------|-----------------------------|
| **WebUI session collaboration (mentions, groups, drag-drop)** | #5358, #5389, #5393, #5395 all active today | **High** — multiple PRs merging incrementally |
| **MCP SDK v2 migration** | #5179 (p1, open since July) | **High** — provider-critical, legacy compat preserved |
| **TypeScript native terminal** | #4329 (open since June, still updating) | **Medium** — large rewrite, may ship behind flag first |
| **Explicit skill context loading** | #5018 (closed conflict), #5309 (marketplace shadowing) | **Medium** — skill system UX improvements queued |
| **OAuth status/expiry warnings** | #4689 (closed invalid) | **Low** — may return in revised form |
| **Particle hero background** | #5340 (cosmetic) | **Low** — nice-to-have, not blocking |

**Prediction:** Next patch (vX.Y.Z+1) will include Anthropic timeout fix, Windows save retry, and WebUI grouping polish. Next minor (vX.Y+1) likely ships MCP v2 + collaboration features.

---

## 7. User Feedback Summary
*No direct user comments in today’s data (all 👍: 0, comment counts undefined). Inferred pain points from issues/PRs:*

| Pain Point | Source |
|------------|--------|
| **Long Anthropic generations silently killed** | #5391 — “killing long but active generations” |
| **Session data loss on archive failure** | #5378 — “overflow discarded… later successful save cannot recover” |
| **Windows gateway crashes on session save** | #5382 — “crashed the whole gateway… confirmed twice in one log” |
| **Marketplace skill install broken for workspace overrides** | #5309 — “disabled the install button… both install backends returned without installing” |
| **Assistant actions visible mid-turn (confusing)** | #5371 — “hide assistant copy and fork actions until turn_end” |

**Satisfaction signal:** Rapid fixes for reported regressions (#5391 → #5392 same day) suggest responsive maintainers; however, recurring session-persistence bugs (#5378, #5271, #5382) indicate a fragile area needing deeper redesign.

---

## 8. Backlog Watch — Stale / High-Value Items Needing Attention

| Item | Age | Why It Matters | Recommended Action |
|------|-----|----------------|---------------------|
| [#4329](https://github.com/HKUDS/nanobot/pull/4329) — Native TypeScript terminal UI | **64 days** | Major frontend rewrite; blocks modern TUI features, cross-platform parity | Assign reviewer, break into mergeable chunks, or ship as opt-in beta |
| [#5179](https://github.com/HKUDS/nanobot/pull/5179) — MCP SDK v2 migration | **16 days** | Protocol-level change; ecosystem alignment; legacy compat complex | Prioritize review — p1 label, provider-critical |
| [#5161](https://github.com/HKUDS/nanobot/issues/5161) / [#5396](https://github.com/HKUDS/nanobot/pull/5396) — Pyright strict suppressions | **17 days** | 31 file-level directives to narrow; enables strict CI, catches regressions | Merge #5396 (touches 14 files), then iterate on remainder |
| [#5271](https://github.com/HKUDS/nanobot/pull/5271) — Stale background saves overwriting sessions | **9 days** | p0 label, data-corruption risk on `/new` | Review & merge — session integrity is foundational |
| [#5309](https://github.com/HKUDS/nanobot/pull/5309) — Marketplace skills shadow builtins | **6 days** | Breaks skill installation UX for workspace overrides | Unblock — likely small fix, high user impact |

---

### Quick Links
- **All issues updated today:** [#5161](https://github.com/HKUDS/nanobot/issues/5161) · [#5391](https://github.com/HKUDS/nanobot/issues/5391) · [#5378](https://github.com/HKUDS/nanobot/issues/5378)
- **All PRs updated today:** [GitHub PR list filtered to 2026-08-14](https://github.com/HKUDS/nanobot/pulls?q=updated%3A2026-08-14)

---

*Digest generated from GitHub API data as of 2026-08-15 00:00 UTC. Next digest: 2026-08-16.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-15

## 1. Today's Overview

Hermes Agent showed **intense maintenance and stabilization activity** on 2026-08-15 with 67 total items updated (17 issues, 50 PRs). The project completed a major architectural epic (#78647: "All Gods Must Die" — 20/20 god files sharded) while simultaneously addressing a wave of **Windows-specific regressions**, **session-state bugs**, **security hardening**, and **Desktop/TUI UX polish**. No new release was cut, but 25 PRs were merged/closed — indicating a "stabilization sprint" ahead of a likely v0.19.x patch. Windows platform issues dominate new bug reports (6/13 open issues), suggesting cross-platform reliability remains the top technical risk.

## 2. Releases

**No new releases today.** The last release predates this reporting window. With 25 merged PRs including critical fixes for Telegram message durability (#83878), cron delivery regression (#85129), and FTS5 index corruption (#86183), a patch release (likely v0.19.1) is imminent. Breaking changes are minimal — most merges are fixes; the only user-facing change is the completed god-file sharding (internal refactor).

## 3. Project Progress

| Area | Merged/Closed PRs | Key Advances |
|------|-------------------|--------------|
| **Core Architecture** | #78647 (issue) | Epic complete: all 20 god files sharded into clean modules; standing policy now "all god files are sharded, never reverted" |
| **Messaging Reliability** | #83878, #86399, #85129, #86378 | Telegram inbound messages now held across disconnect (not destroyed); cron delivery & react/unreact pass-through restored for unresolved targets |
| **Session State** | #86183 | FTS5 indexes self-verify and self-repair on SQLite engine upgrade — fixes silent corruption on v0.18.2 → v0.19+ upgrades |
| **Security** | #70375 (open, updated) | Desktop local backend log ring now redacts secrets (tokens, `?token=` URLs) — aligns with SSH path |
| **Provider Support** | #86433 (open) | GLM-5.3 added to Z.ai provider (rides GLM-5.2 wiring, 1M context, `reasoning_effort` supported) |
| **Skills Ecosystem** | #86557, #86562 (dup), #86575 | Major skill infra: 6 new categories, SKILL.md template, registry CI, 106 social-media skills, new secret-scanner skill |
| **Windows/Platform** | #63896 (open, updated) | LSP native Windows npm launcher repair (prefers `.exe`/`.cmd` over POSIX shims) |

## 4. Community Hot Topics

| Item | Type | Comments | Signal |
|------|------|----------|--------|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | Issue (closed) | 78 | **Completed epic** — 78 comments tracking 20-file sharding; shows deep contributor engagement on architecture |
| [#4064](https://github.com/NousResearch/hermes-agent/issues/4064) | Issue (open) | 13 | **Long-standing UX ask** (since Mar 2026): mouse support in TUI (cursor, scroll, select) with config toggle — blocked on `prompt_toolkit` `mouse_support=False` |
| [#83878](https://github.com/NousResearch/hermes-agent/pull/83878) | PR (closed) | — | **Critical messaging fix** — Telegram messages held across disconnect; duplicate PR #86399 filed same fix, indicating urgency |
| [#86557](https://github.com/NousResearch/hermes-agent/pull/86557) | PR (open) | — | **Skills explosion** — 106 social-media skills + infra; largest single feature PR in dataset; needs maintainer review (`needs-decision`) |

**Underlying needs:** Contributors are pushing hard on **cross-platform parity (Windows)**, **session durability** (no silent history truncation, no stuck approval UI), and **extensibility** (skills, A2A headers, Matrix routing). The duplicate PRs (#86399 vs #83878, #86378 vs #85129, #86562 vs #86557) signal high urgency on messaging/session fixes and possible triage overload.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P1 (Critical)** | [#86573](https://github.com/NousResearch/hermes-agent/issues/86573) | Desktop retry of failed turn silently truncates history via ordinal-only path — row-id guard (#83785) doesn't cover retry path | ❌ Open |
| **P1** | [#86579](https://github.com/NousResearch/hermes-agent/issues/86579) | Windows: kanban dispatcher-spawned worker crashes ~60s after spawn (PID dies) — trivial tasks fail, manual launch works | ❌ Open |
| **P2 (High)** | [#86567](https://github.com/NousResearch/hermes-agent/issues/86567) | Windows cron uses base Python + `PYTHONPATH`, ignores `.pth` from editable installs — breaks `uv` venv jobs | ❌ Open |
| **P2** | [#86569](https://github.com/NousResearch/hermes-agent/issues/86569) | Gateway detachment diagnostics on Windows: `stdin_is_tty` misleading, breakaway fallback silent | ❌ Open |
| **P2** | [#86566](https://github.com/NousResearch/hermes-agent/pull/86566) | Terminal tool classifies timeout as retriable (retries 3×) — wrong; timeout = hit wall-clock, not flaky | ✅ PR open |
| **P2** | [#86570](https://github.com/NousResearch/hermes-agent/issues/86570) | Local model server connection errors → generic unhelpful chat reply (no dedicated error mapping) | ❌ Open |
| **P3 (Medium)** | [#83845](https://github.com/NousResearch/hermes-agent/issues/83845) | **Closed** — Dashboard `slash_worker` PATH omits Hermes venv/`~/.local/bin` → `browser_exec` CLI discovery fails | ✅ Fixed (closed) |
| **P3** | [#86576](https://github.com/NousResearch/hermes-agent/issues/86576) | **Closed** — Encrypted reasoning tokens leak across provider switch/delegation (opaque blobs only original provider decrypts) | ✅ Fixed (closed) |
| **P3** | [#86568](https://github.com/NousResearch/hermes-agent/issues/86568) | **Security**: `approvals.deny` glob bypass via repeated whitespace/tabs — deobfuscation pipeline doesn't collapse them | ❌ Open |
| **P3** | [#86571](https://github.com/NousResearch/hermes-agent/issues/86571) | Windows TUI mouse wheel/selection fail under Windows Terminal/ConPTY (config `mouse_tracking: buttons`) | ❌ Open |
| **P3** | [#86565](https://github.com/NousResearch/hermes-agent/issues/86565) | Desktop session dot stays blue (running) while blocked on approval — turns amber only after opening session | ❌ Open |
| **P3** | [#86577](https://github.com/NousResearch/hermes-agent/issues/86577) | Desktop "↓ needs approval" floating bar reappears stale after turn finished | ❌ Open |
| **P3** | [#86564](https://github.com/NousResearch/hermes-agent/issues/86564) | Desktop Markdown links indistinguishable from prose until hover (dark theme, no underline) | ❌ Open |
| **P3** | [#86574](https://github.com/NousResearch/hermes-agent/issues/86574) | Kanban worktrees start from stale local HEAD instead of fetched `origin/main` | ❌ Open |
| **P3** | [#85128](https://github.com/NousResearch/hermes-agent/issues/85128) | **Closed** — Cron delivery silently dropped for unresolvable targets; react opaque-id passthrough lost | ✅ Fixed via #85129/#86378 |

**Windows accounts for 6/13 open bugs** — platform-specific test coverage gap.

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Mouse support in TUI** (cursor, scroll, select, config toggle) | [#4064](https://github.com/NousResearch/hermes-agent/issues/4064) (Mar 2026, 13 comments) | Medium — long-standing, simple toggle, but `prompt_toolkit` integration needed |
| **file:// links → `#media:` in Desktop chat** | [#85159](https://github.com/NousResearch/hermes-agent/issues/85159) | High — Windows Desktop user pain point, clear UX fix |
| **Secret-scanner security skill** (detect-secrets/trufflehog) | [#86575](https://github.com/NousResearch/hermes-agent/pull/86575) | High — PR open, fits new `security` skill category |
| **A2A custom per-peer headers + User-Agent** | [#86322](https://github.com/NousResearch/hermes-agent/pull/86322) | High — PR open, enables header-authenticated A2A peers |
| **Matrix project session routing** (`!project <key>`) | [#86355](https://github.com/NousResearch/hermes-agent/pull/86355) | Medium — niche but clean implementation |
| **GLM-5.3 support (Z.ai)** | [#86433](https://github.com/NousResearch/hermes-agent/pull/86433) | High — PR open, minimal diff (rides 5.2 wiring) |
| **Skills ecosystem Phase 0+1** (6 categories, 106 skills, registry CI) | [#86557](https://github.com/NousResearch/hermes-agent/pull/86557) | Medium — large PR, `needs-decision`, likely staged |

**Predicted next version (v0.19.1):** Patch with Windows fixes (#86567, #86569, #86571), session-state fixes (#86573, #86565, #86577), security fix (#86568), plus merged messaging/state fixes. Skills mega-PR (#86557) likely lands in v0.20.

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Windows as second-class platform** | 6 new Windows bugs today (cron, kanban worker, TUI mouse, gateway diagnostics, LSP launchers, PYTHONPATH) | High — blocks Windows adopters; manual workarounds exist but brittle |
| **Session state opacity** | 3 Desktop bugs: status dot wrong (#86565), stale approval bar (#86577), silent history truncation on retry (#86573) | High — erodes trust in background/long-running sessions |
| **Approval UX inconsistency** | Floating bar reappears stale; dot color doesn't update until session opened | Medium — confusing for approval-heavy workflows |
| **Link rendering in Desktop** | `file://` links blocked (#85159); Markdown links invisible until hover (#86564) | Medium — hurts readability & local file workflow |
| **Messaging reliability** | Telegram messages destroyed on disconnect (fixed); cron delivery silently dropped (fixed) | High — fixed but indicates regression risk in message pipeline |
| **Skill discovery** | Docs cite non-existent `hermes-agent-dev` skill (#85989) | Low — documentation debt |

**Satisfaction signals:** Contributors actively filing detailed bugs with repro steps (e.g., #86579 PID evidence, #86571 ConPTY config). The duplicate PRs suggest community urgency > maintainer bandwidth.

## 8. Backlog Watch

| Item | Stale Since | Why It Matters |
|------|-------------|----------------|
| [#4064](https://github.com/NousResearch/hermes-agent/issues/4064) | 2026-03-30 (138 days) | **Oldest open issue** —

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-15

---

## 1. Today's Overview
PicoClaw shows steady maintenance velocity with **9 PRs updated** and **3 issues touched** in the last 24 hours. The most significant activity centers on a **critical agent-loop hang bug (#3269)** when MCP servers fail—now addressed by an open fix PR (#3337). Five PRs were merged/closed, mostly stale-tagged clean-ups: DingTalk image support, Seahorse summary leakage, provider model refresh, DashScope TTS + WeChat audio, and a dependabot bump. Four PRs remain open, including a DeltaChat refactor (-200 LOC), tool timeout enforcement, configurable model fallback chains, and the MCP hang fix. No new releases were published.

---

## 2. Releases
**None** in the last 24 hours.

---

## 3. Project Progress — Merged / Closed PRs Today
| PR | Type | Summary |
|----|------|---------|
| [#3283](https://github.com/sipeed/picoclaw/pull/3283) | **fix** | DingTalk channel: inbound picture/image message support with token caching and graceful degradation. |
| [#3279](https://github.com/sipeed/picoclaw/pull/3279) | **fix** | Seahorse: prevent tool-call format leakage into LLM summaries (`partsToReadableContent`). |
| [#3271](https://github.com/sipeed/picoclaw/pull/3271) | **chore** | Refresh default model IDs across 9 providers (OpenAI gpt-5.6 variants, Anthropic, etc.) per July 2026 docs. |
| [#3270](https://github.com/sipeed/picoclaw/pull/3270) | **feat** | Add **DashScope (Bailian) TTS provider** + WeChat audio file sending. |
| [#3303](https://github.com/sipeed/picoclaw/pull/3303) | **deps** | Dependabot: bump `actions/stale` 10 → 11. |

> **Net effect**: multi-channel hardening (DingTalk, WeChat), summary hygiene, up-to-date model catalog, new TTS backend.

---

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| **[#3269](https://github.com/sipeed/picoclaw/issues/3269)** – *MCP failure hangs agent loop* | 5 comments, 1 👍, **open** | **Reliability blocker**: users on flaky/unreachable MCP servers lose chat entirely until restart. Fix PR [#3337](https://github.com/sipeed/picoclaw/pull/3337) opened same day. |
| **[#3308](https://github.com/sipeed/picoclaw/issues/3308)** – *Concurrency hazards, goroutine leaks, perf* | 2 comments, **closed (stale)** | Deep code-review audit of SeaHorse/Channel Manager/Hooks; author calls out systemic Go concurrency risks. Closed as stale but signals architectural debt. |
| **[#3307](https://github.com/sipeed/picoclaw/issues/3307)** – *Telegram session list/switch* | 2 comments, **closed (stale)** | Feature parity: Web UI has full session management; Telegram (and other channels) lack list/switch/delete. |

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue / PR | Status | Notes |
|----------|------------|--------|-------|
| **Critical** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) – MCP hang | **Open** (fix PR [#3337](https://github.com/sipeed/picoclaw/pull/3337) open) | Agent loop exits on `ensureMCPInitialized` error → chat stops replying. |
| **High** | [#3319](https://github.com/sipeed/picoclaw/pull/3319) – `exec` tool ignores per-run `timeout`, `background`, `pty` | **Open (stale)** | Schema declares boolean options as strings; global timeout always used. |
| **Medium** | [#3279](https://github.com/sipeed/picoclaw/pull/3279) – Tool-call leakage in summaries | **Merged** | Fixed in Seahorse `partsToReadableContent`. |
| **Low** | [#3308](https://github.com/sipeed/picoclaw/issues/3308) – Concurrency/leak audit | **Closed (stale)** | No immediate crash reports; architectural hygiene. |

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **Configurable default model fallback chain** (Web UI + API) | [#3200](https://github.com/sipeed/picoclaw/pull/3200) (open, stale) | Medium — UI/back-end work mostly done, needs review. |
| **Telegram session management (list/switch/delete)** | [#3307](https://github.com/sipeed/picoclaw/issues/3307) | Low — closed stale, but clear parity gap. |
| **DeltaChat cleanup & modernisation** | [#3222](https://github.com/sipeed/picoclaw/pull/3222) (open) | Medium — -200 LOC, drops legacy auth, adds relay list reference. |
| **DashScope TTS + WeChat audio** | [#3270](https://github.com/sipeed/picoclaw/pull/3270) | **Done** — merged today. |

---

## 7. User Feedback Summary
- **Pain point**: MCP instability **breaks the entire chat** until process restart (#3269, 5 comments).  
- **Parity demand**: Telegram users want **session controls** matching Web UI (#3307).  
- **Quality signal**: External contributor audit (#3308) highlights **goroutine leaks & concurrency hazards**—no user-facing crash yet, but maintainers should triage.  
- **Satisfaction**: Merged PRs show **active multi-channel investment** (DingTalk images, WeChat audio, DashScope TTS) — positive for non-Web users.

---

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| **[#3222](https://github.com/sipeed/picoclaw/pull/3222)** DeltaChat refactor | 43 days | Large cleanup (-200 LOC), removes password auth, updates relay list — reduces attack surface. |
| **[#3200](https://github.com/sipeed/picoclaw/pull/3200)** Configurable model fallback chain | 45 days | UX-critical for multi-model resilience; UI + API ready, awaiting review. |
| **[#3319](https://github.com/sipeed/picoclaw/pull/3319)** `exec` tool timeout/boolean fixes | 8 days (stale) | Security/stability: per-run timeout ignored, schema mismatch. |
| **[#3308](https://github.com/sipeed/picoclaw/issues/3308)** Concurrency/leak audit | 16 days (closed stale) | Architectural debt; consider reopening or filing targeted sub-issues. |

---

*Data sourced from GitHub API (issues/PRs updated 2026-08-14 → 2026-08-15). All links point to live GitHub items.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-15

## 1. Today's Overview
NanoClaw shows **high maintenance velocity** with 13 total items updated in the last 24 hours (2 issues, 11 PRs). The project is actively addressing **setup/installation reliability** (Node version detection, CPU architecture compatibility) and **runtime stability** (cron parsing, Windows container cleanup). No new releases were cut today. The closed PRs (#3242, #3243, #3244) indicate ongoing CI/CD pipeline hardening for the signature approver workflow. Overall health: **active, stable, with focused bug-fix sprints**.

## 2. Releases
**No new releases today.** The latest published version remains unchanged.

## 3. Project Progress — Merged/Closed PRs (2026-08-14)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3243](https://github.com/nanocoai/nanoclaw/pull/3243) | CI/CD fix | `verify-agent-image`: decouple “enable auto-merge” step from job verdict; add `continue-on-error` so transient API failures / draft-PR state don’t falsely fail verification. | **High** — unblocks automated image promotion pipeline. |
| [#3242](https://github.com/nanocoai/nanoclaw/pull/3242) | CI/CD test | Live-fire test of signature approver (draft PR, pinned to previous hardened build). | **Medium** — validates end-to-end cosign verify → approving review flow. |
| [#3244](https://github.com/nanocoai/nanoclaw/pull/3244) | CI/CD test | Second live-fire test with #3243 merged; verifies independent re-verify + approving review. | **Medium** — confirms fix in #3243 works in practice. |

*All three are core-team drafts closed unmerged after validation; no user-facing code changes.*

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#3248](https://github.com/nanocoai/nanoclaw/issues/3248) | Bug (setup) | Created 2026-08-14, 0 comments | **Install reliability**: `setup.sh` treats “Node missing” and “Node too old” identically, but `install-node.sh` exits early if *any* Node binary exists, leaving too-old Node un-upgraded. |
| [#3245](https://github.com/nanocoai/nanoclaw/issues/3245) | Bug (image) | Created 2026-08-14, 0 comments | **Hardware compatibility**: Prebuilt hardened agent image bundles Bun compiled for AVX2; crashes (SIGILL) on non-AVX2 CPUs (e.g., Intel Tremont/Elkhart Lake Atoms). Blocks deployment on low-power/edge hardware. |
| [#3249](https://github.com/nanocoai/nanoclaw/pull/3249) | Fix PR | Opened 2026-08-14, 0 comments | Direct fix for #3248 — makes `install-node.sh` replace too-old Node instead of short-circuiting. |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) / [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) | Feature (channels) | Updated 2026-08-14, long-running | **New channel integration**: Dial (SMS + AI voice calls) — wizard, skill, and channel adapter. High community interest (channel expansion). |

*No item has >0 reactions/comments yet; the two fresh issues (#3248, #3245) are the most actionable “hot” items.*

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue / PR | Symptom | Fix Status |
|----------|------------|---------|------------|
| **Critical** | [#3245](https://github.com/nanocoai/nanoclaw/issues/3245) | SIGILL on CPUs without AVX2 (prebuilt image) | **No fix PR yet** — requires rebuilding Bun for baseline x64 or providing alternative image. |
| **High** | [#3248](https://github.com/nanocoai/nanoclaw/issues/3248) | `setup.sh` fails to upgrade too-old Node; `install-node.sh` short-circuits | **Fix PR open**: [#3249](https://github.com/nanocoai/nanoclaw/pull/3249) |
| **Medium** | [#3247](https://github.com/nanocoai/nanoclaw/pull/3247) | Malformed cron string (e.g., `21-5` hour wrap) causes repeated parse errors every sweep tick | **Fix PR open** — retires bad cron row instead of re-erroring. |
| **Medium** | [#3246](https://github.com/nanocoai/nanoclaw/pull/3246) | `cleanupOrphans()` no-ops on Windows due to POSIX single-quote handling in `execSync` | **Fix PR open** — uses OS-appropriate quoting. |
| **Low** | [#3230](https://github.com/nanocoai/nanoclaw/pull/3230) | Skill removal docs point to retired data/env mirror | **Fix PR open** — documentation-only. |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Dial channel (SMS + AI voice)** | [#3041](https://github.com/nanocoai/nanoclaw/pull/3041), [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | **High** — PRs are feature-complete, follow guidelines, awaiting review/merge. |
| **Baseline-x64 (non-AVX2) agent image** | [#3245](https://github.com/nanocoai/nanoclaw/issues/3245) | **Medium-High** — blocks edge/low-power deployments; explicit user pain. |
| **Robust Node version management in setup** | [#3248](https://github.com/nanocoai/nanoclaw/issues/3248), [#3249](https://github.com/nanocoai/nanoclaw/pull/3249) | **High** — fix PR ready; improves first-run success rate. |
| **Discord inbound attachment handling** | [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) | **Medium** — long-open (since June), stages URL-only attachments; improves Discord UX. |

## 7. User Feedback Summary
- **Pain point 1 (setup)**: “Node too old” path broken — users on older Node (e.g., 18.x) hit silent failure. *Directly reported in #3248.*
- **Pain point 2 (hardware)**: Prebuilt image unusable on common embedded/edge CPUs (Celeron J6413, N5105, N100). *Reported in #3245; zero workarounds documented.*
- **Pain point 3 (Discord)**: Inbound attachments (images, auto-converted text files) appear as bare `[file: …]` / `[image: …]` placeholders — no content reaches agent. *Tracked in #2752 since June.*
- **Positive signal**: Active PR authors (glifocat, jsboige, OmriBenShoham, teran13) are contributing fixes/features rapidly; core-team CI/CD hardening shows release-engineering maturity.

## 8. Backlog Watch — Stale / Needs Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) | ~2 months | Discord attachment fix — improves a major channel; ready for review. |
| [#2427](https://github.com/nanocoai/nanoclaw/pull/2427) | ~3 months | “attachment issues” (generic); may overlap with #2752. Needs triage. |
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) / [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | ~1 month | Dial channel — significant new integration; review bandwidth needed. |
| [#3245](https://github.com/nanocoai/nanoclaw/issues/3245) | 1 day | **No fix PR yet** — requires build/infra decision (baseline-x64 Bun image or multi-arch manifest). |

---

**Bottom line**: NanoClaw is in a **healthy bug-fix + CI hardening sprint**. The two fresh critical bugs (#3245, #3248) have clear owners/fixes except the AVX2 image issue, which needs a build-pipeline decision. Dial channel integration is the most visible feature nearing merge.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-15

## 1. Today's Overview
NullClaw showed minimal activity in the last 24 hours. Zero issues were created or updated, and only one pull request was merged. The merged PR (#986) introduces a configuration option for the SQLite memory database path, improving deployment flexibility for read-only workspace scenarios. Overall project velocity appears low today, with no new releases, bug reports, or community discussions recorded.

## 2. Releases
**No new releases published today.**

## 3. Project Progress
**Merged Pull Request:**
- **#986** `GEN-548: make SQLite memory database path configurable`  
  Author: [gently-whitesnow](https://github.com/gently-whitesnow) | Merged: 2026-08-14  
  **Changes:** Adds `memory.database_path` setting for SQLite-backed primary memory engines. Preserves default `<workspace>/memory.db` when unset, resolves relative paths from workspace root, and supports absolute paths for read-only workspace deployments. Includes documentation updates.  
  **Impact:** Enhances deployment flexibility, particularly for containerized or immutable infrastructure where database location must be externalized.  
  **Link:** [nullclaw/nullclaw#986](https://github.com/nullclaw/nullclaw/pull/986)

## 4. Community Hot Topics
**No active issues or pull requests with comments or reactions in the last 24 hours.**  
Community discussion appears dormant today. No GitHub items meet the threshold for "hot topic" status (comments, 👍, or sustained engagement).

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported or updated today.**  
Zero issue activity means no new stability signals. The merged PR is a feature/configuration enhancement, not a bug fix.

## 6. Feature Requests & Roadmap Signals
**Signal from merged work:**  
The acceptance of PR #986 indicates active interest in **configuration externalization** and **deployment hardening** — specifically enabling NullClaw to operate in restricted filesystems (read-only workspaces, ephemeral containers). This aligns with a likely roadmap focus on **production readiness** and **infrastructure compatibility**.

**Predicted next steps:**  
- Further configuration options for storage backends (e.g., PostgreSQL, Redis)  
- Environment-variable-based config overrides  
- Health checks or readiness probes for orchestrated deployments

## 7. User Feedback Summary
**No direct user feedback captured today.**  
No issue comments, PR reviews, or discussions exist in the dataset. The sole merged PR was author-driven (likely internal or contributor-initiated), with no visible external user input.

## 8. Backlog Watch
**No data provided on long-unanswered issues or stale PRs.**  
The daily snapshot does not include historical backlog metrics (e.g., issues open >30 days, PRs awaiting review >14 days). Maintainers should independently audit:
- Issues with no maintainer response >14 days  
- PRs passing CI but unmerged >7 days  
- High-👍 feature requests without triage labels  

*Recommendation: Schedule weekly backlog grooming to surface stagnant items.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-15

---

## 1. Today's Overview

IronClaw shows **high development velocity** with 47 PRs and 11 issues updated in the last 24 hours. The project is in an active **post-release stabilization phase** following the 1.2.0 release (merged via #7657), with teams simultaneously advancing three major workstreams: the **unbound-turns architecture switchover** (#7562/#7634), **pluggable memory over MCP** (#7661/#7664), and **integration quality fixes** for Telegram/Slack/Extensions. Core contributors (BenKurrek, serrrfirat, henrypark133) are driving large, cross-cutting PRs while QA-identified bugs (#7660, #7662, #7659) are being addressed rapidly. No new releases today, but the release branch has been merged back to main.

---

## 2. Releases

**No new releases today.** The 1.2.0 release line was merged back into `main` via [#7657](https://github.com/nearai/ironclaw/pull/7657) (closed), forward-porting startup migrations, Windows filesystem fixes, and runtime healthcheck improvements. A forward-port PR [#7663](https://github.com/nearai/ironclaw/pull/7663) (open) carries additional 1.2 fixes without legacy migration logic.

---

## 3. Project Progress — Merged/Closed PRs Today (23 total)

| PR | Title | Scope | Status |
|----|-------|-------|--------|
| [#7668](https://github.com/nearai/ironclaw/pull/7668) | fix(extensions): surface provider auth diagnostics | Extensions, Auth | **Closed** |
| [#7665](https://github.com/nearai/ironclaw/pull/7665) | fix(auth): support origin-scoped hosted MCP OAuth | Auth, MCP | **Closed** |
| [#7652](https://github.com/nearai/ironclaw/pull/7652) | perf(stress): measure production DB write workloads | Performance, DB | **Closed** |
| [#7666](https://github.com/nearai/ironclaw/pull/7666) | fix(extensions): truth on cards & install results (QA #7660) | Extensions, UI | **Closed** |
| [#7655](https://github.com/nearai/ironclaw/pull/7655) | fix(ci): re-pin slack/telegram integration coverage floors | CI, Integrations | **Closed** |
| [#7658](https://github.com/nearai/ironclaw/pull/7658) | fix(telegram): recognize 2FA gate on migrated DCs | Telegram, Auth | **Closed** |
| [#7657](https://github.com/nearai/ironclaw/pull/7657) | chore: merge 1.2.0 release line back into main | Release, Migrations | **Closed** |
| [#7569](https://github.com/nearai/ironclaw/pull/7569) | Introduce shared SearchField for common list filtering | WebUI, Components | **Closed** |
| [#7592](https://github.com/nearai/ironclaw/pull/7592) | Per-turn DB write measurement harness (pg_stat_statements) | DB, Observability | **Closed** |
| [#7565](https://github.com/nearai/ironclaw/pull/7565) | Fix missing i18n coverage across exposed WebUI routes | WebUI, i18n | **Closed** |

**Key advances:**
- **Unbound-turns architecture**: Phase 1 design + implementation merged ([#7562](https://github.com/nearai/ironclaw/pull/7562) closed); completion PR [#7634](https://github.com/nearai/ironclaw/pull/7634) open with 71-clause conformance audit.
- **Pluggable memory**: Provider crate `ironclaw_memory_mcp` landed ([#7661](https://github.com/nearai/ironclaw/pull/7661) open), tracking issue [#7664](https://github.com/nearai/ironclaw/issues/7664) open.
- **Integration fixes**: Telegram 2FA/QR login (#7658), Slack UI false "Reconnect" (#7666), Extension auth diagnostics (#7668), MCP OAuth origin-scoping (#7665).
- **Observability**: DB write measurement harness (#7592) and production stress measurement (#7652) merged — foundation for write-pressure epic #7591.
- **WebUI polish**: Shared `SearchField` component (#7569), i18n coverage fixes (#7565).

---

## 4. Community Hot Topics — Most Active PRs/Issues

| Item | Type | Comments | Signal |
|------|------|----------|--------|
| [#7516](https://github.com/nearai/ironclaw/pull/7516) | PR (open) | High (undefined shown) | **Operator WebUI for IronHub agent link** — new contributor (neo-sky) adding missing WebUI surface for agent registration; spans secrets, docs, channel/web. |
| [#7634](https://github.com/nearai/ironclaw/pull/7634) | PR (open) | High | **Unbound-turns switchover completion** — 71-clause audit, stacked on #7562; core architectural shift. |
| [#7562](https://github.com/nearai/ironclaw/pull/7562) | PR (closed) | High | **Base PR for unbound-turns train** — design docs + phase 1 implementation; now closed, work continues in #7634. |
| [#7661](https://github.com/nearai/ironclaw/pull/7661) | PR (open) | — | **MCP-backed memory provider** — first half of pluggable memory; enables config-bound backends (Mnesis first consumer). |
| [#7255](https://github.com/nearai/ironclaw/pull/7255) | PR (open) | — | **APDD Kit governance evaluation** — docs-only proposal for phased integration of Agent Product Design & Development framework. |

**Underlying needs:** Operators need full WebUI parity with CLI (#7516); architecture team is finalizing a major execution model rewrite (#7634); platform team is externalizing memory to support pluggable backends (#7661/#7664); governance exploration suggests process maturation (#7255).

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#7662](https://github.com/nearai/ironclaw/issues/7662) | MP4 attachment fails with `invalid_value (attachments.mime_type)` in Telegram despite correct `video/mp4` detection | — |
| **High** | [#7659](https://github.com/nearai/ironclaw/issues/7659) | Extensions installed by other users visible on Registry page — **multi-tenant data leak** | — |
| **Medium** | [#7660](https://github.com/nearai/ironclaw/issues/7660) | Slack shows "Reconnect"/"Finish Setup" despite active connection — **UI state mismatch** | Fixed in [#7666](https://github.com/nearai/ironclaw/pull/7666) (closed) |
| **Medium** | [#7667](https://github.com/nearai/ironclaw/issues/7667) | Telegram phone-mode login code hint doesn't reflect `sentCode.type_` (raw-TL path) — **user confusion during auth** | Related: [#7658](https://github.com/nearai/ironclaw/pull/7658) (closed, partial) |
| **Low** | [#7669](https://github.com/nearai/ironclaw/issues/7669) | Prepared-marker backfill runs per-scope sweep on first list request — **latency spike on cold scopes** | Follow-up from [#7634](https://github.com/nearai/ironclaw/pull/7634) review |

**Note:** Two high-severity bugs (#7662, #7659) have no fix PR yet. The multi-tenant extension leak (#7659) is particularly concerning for hosted deployments.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Pluggable memory over MCP** (Mnesis as first backend) | [#7664](https://github.com/nearai/ironclaw/issues/7664), [#7661](https://github.com/nearai/ironclaw/pull/7661) | **Very High** — provider crate landed, tracking issue active |
| **Structured Ask User cards in WebUI** (OMP-inspired `ask` tool) | [#7653](https://github.com/nearai/ironclaw/issues/7653) | **High** — uses existing `LoopCompletionKind::AskUserReply`, deliberate non-resumable design |
| **Deterministic no-result suppression for Automations** | [#7651](https://github.com/nearai/ironclaw/pull/7651) | **High** — PR open, explicit `deliver`/`suppress_when_nothing_to_report` contract |
| **ACP harness executor** (experimental) | [#7648](https://github.com/nearai/ironclaw/pull/7648) | **Medium** — experimental, profile-routable executor for ACP-only runs |
| **Operator IronHub link surface in WebUI** | [#7516](https://github.com/nearai/ironclaw/pull/7516) | **Medium** — new contributor PR, extends Extensions page |
| **APDD governance kit integration** | [#7255](https://github.com/nearai/ironclaw/pull/7255) | **Low** — docs-only evaluation, phased proposal |

**Prediction:** Pluggable memory + Ask User cards + Automation suppression are the strongest candidates for the next minor release. Unbound-turns completion (#7634) may ship as a major architectural milestone.

---

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Source | Impact |
|------------|--------|--------|
| **"Slack shows Reconnect/Finish Setup but works fine"** | [#7660](https://github.com/nearai/ironclaw/issues/7660) (QA) | Operator confusion, false alerts; **fixed in #7666** |
| **"Telegram MP4 upload fails with mime_type error"** | [#7662](https://github.com/nearai/ironclaw/issues/7662) (QA) | Blocks video sharing in Telegram; **no fix yet** |
| **"See other users' installed extensions"** | [#7659](https://github.com/nearai/ironclaw/issues/7659) (QA) | **Data isolation breach** in multi-user deployments; **no fix yet** |
| **"Phone login code hint wrong after DC migration"** | [#7667](https://github.com/nearai/ironclaw/issues/7667) (QA) | User waits for code in wrong place; partial fix in #7658 |
| **"2FA accounts hit QR scan gate unexpectedly"** | [#7658](https://github.com/nearai/ironclaw/pull/7658) | Login friction for 2FA-enabled Telegram accounts; **fixed** |
| **"WebUI routes untranslated in non-English locales"** | [#7565](https://github.com/nearai/ironclaw/issues/7565) | i18n gaps on Admin/Config pages; **fixed** |

**Sentiment:** QA team is actively stress-testing integrations (Slack, Telegram, Extensions) and surfacing real multi-tenant and media-handling bugs. Fixes are shipping fast for UI-state issues (#7660, #7658), but data-leak and media-upload bugs remain open.

---

## 8. Backlog Watch — Long-Unanswered / Needs Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#7255](https://github.com/nearai/ironclaw/pull/7255) | 10 days (created 2026-08-05) | **Governance framework evaluation** — APDD Kit proposal for phased integration; docs-only but sets project process direction. Awaiting core team review. |
| [#7379](https://github.com/nearai/ironclaw/pull/7379) | 8 days (created 2026-08-07) | **Docs↔release skew fix** — deploys public docs from `docs-live` branch tied to stable releases; critical for user-facing documentation accuracy. |
| [#7378](https://github.com/nearai/ironclaw/pull/7378) | 8 days (created 2026-08-07) | **Doc-fact contract tests** — deterministic tests for CLI/manifest/Responses claims; prevents doc drift. Part of doc-truth series (3/5). |
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | 5 days (created 2026-08-10) | **Reborn durable storage profile-agnostic** — large refactor (XL, medium risk) for profile-agnostic paths, security envelope, tenancy isolation. |
| [#7516](https://github.com/nearai/ironclaw/pull/7516) | 3 days (created 2026-08-12) | **Operator IronHub link in WebUI** — new contributor PR, unblocks WebUI-only deployments for agent linking. Needs review/merge. |

**Recommendation:** Prioritize review of #7255 (governance), #7379/#7378 (doc truth), and #7516 (operator UX). The Reborn storage refactor (#7456) needs architecture sign-off due to tenancy implications.

---

*Generated from GitHub data as of 2026-08-15. All links point to nearai/ironclaw repository.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-15

---

## 1. Today's Overview
LobsterAI shipped **release 2026.8.14** yesterday, merging a 67-commit, 264-file release branch (`release/2026.7.30`) into `main` that introduces Team Edition account/quota flows, refreshed Skills & Connectors UX, and multiple sidebar enhancements (check-in, banner carousel, multi-agent task filter). The project shows **high velocity**: 22 PRs closed/merged and 5 still open in the last 24 h, alongside 2 active issues. Most closed PRs are small UI/UX polishes, dependency bumps, and bug fixes merged alongside the release. No critical regressions were reported today; the backlog contains several stale PRs/issues from March–April that remain unaddressed.

---

## 2. Releases
### **2026.8.14** (published 2026-08-14)  
**Key changes** (from merged PR #2498 and release notes):
- **Team Edition** – account provisioning, quota enforcement, billing integration.  
- **Skills & Connectors refresh** – new discovery UI, installation flows, and management screens.  
- **Sidebar upgrades** – check-in flow, banner carousel (#2411), multi-agent task activity filter (#2418).  
- **OpenClaw skill-key fix** – entries now keyed by front-matter `name` instead of directory name (#2491, #2483), resolving silent toggle failures.  
- **Cowork UX** – browser-annotation screenshots rendered as numbered attachment cards in artifact panel (#2490); turn processes stay expanded until an answer chunk arrives (#2499); badge popovers constrained to viewport (#2496).  
- **Typography** – default UI/code font sizes increased with one-time migration (#2495).  
- **Account UI** – credits icon redesigned and color-aligned (#2494, #2492).  
- **i18n polish** – cowork goal/steer copy wording improved (#2497).  

**Breaking changes / migration notes**:  
- Font-size migration runs once on first launch; users may notice larger text.  
- Skill toggles keyed by `name` – any custom skills with mismatched directory/front-matter names will now work correctly (no user action required).  
- Team Edition introduces new quota APIs; self-hosted instances must update backend config.

**Links**: [Release PR #2498](https://github.com/netease-youdao/LobsterAI/pull/2498) · [Release tag 2026.8.14](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.14)

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Summary |
|----|------|---------|
| [#2498](https://github.com/netease-youdao/LobsterAI/pull/2498) | all | **Release merge** – 67 commits, 264 files, Team Edition + Skills/Connectors refresh |
| [#2499](https://github.com/netease-youdao/LobsterAI/pull/2499) | cowork/renderer | Keep turn expanded until first answer chunk (fixes premature collapse mid-wait) |
| [#2497](https://github.com/netease-youdao/LobsterAI/pull/2497) | renderer/i18n | Improve cowork goal/steer copy wording |
| [#2496](https://github.com/netease-youdao/LobsterAI/pull/2496) | cowork/renderer | Constrain badge popovers to viewport & above later messages |
| [#2495](https://github.com/netease-youdao/LobsterAI/pull/2495) | renderer/typography | Bump default UI/code font sizes + one-time migration |
| [#2494](https://github.com/netease-youdao/LobsterAI/pull/2494) | renderer/account | Replace credits icon with stacked-points SVG, theme-aware colors |
| [#2493](https://github.com/netease-youdao/LobsterAI/pull/2493) | renderer/cowork/artifacts | Fix session export image & card toggle UI |
| [#2492](https://github.com/netease-youdao/LobsterAI/pull/2492) | renderer/account | Align credits icon color with adjacent menu icons |
| [#2491](https://github.com/netease-youdao/LobsterAI/pull/2491) | main/openclaw | Key `skills.entries` by front-matter `name` (fixes UI toggle mismatch) |
| [#2490](https://github.com/netease-youdao/LobsterAI/pull/2490) | cowork/renderer/artifacts | Preview browser-annotation screenshots as numbered cards in artifact panel |
| [#2483](https://github.com/netease-youdao/LobsterAI/pull/2483) | main/openclaw | Duplicate fix for skill-entry keying (merged before #2491) |
| [#1228](https://github.com/netease-youdao/LobsterAI/pull/1228) | cowork/renderer | Add “Mark as unread” for sessions (menu + context menu, Redux action, i18n) |
| [#1231](https://github.com/netease-youdao/LobsterAI/pull/1231) | renderer/agent | AgentCreateModal: Escape key closes; form resets on reopen |
| [#2422](https://github.com/netease-youdao/LobsterAI/pull/2422) / [#2423](https://github.com/netease-youdao/LobsterAI/pull/2423) | all | Fix btw tools → reverted same day |

**Dependency bumps (open)**:  
- [#2460](https://github.com/netease-youdao/LobsterAI/pull/2460) – rimraf 5.0.10 → 6.1.3  
- [#2465](https://github.com/netease-youdao/LobsterAI/pull/2465) – Vite 5.4.21 → 8.2.1 (major, includes plugin-legacy 8.x)

---

## 4. Community Hot Topics
| Item | Type | Activity | Signal |
|------|------|----------|--------|
| [#2489](https://github.com/netease-youdao/LobsterAI/issues/2489) | Issue | Created & updated today, 1 comment | **User demand for v4pro release** – short, urgent request (“快更新v4pro！”) indicates strong anticipation for next major version. |
| [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | PR (open) | Open since 2026-07-21, updated today | **Permanent sidebar ad-banner hide toggle** – addresses #2342; users want persistent control over promotional banners. |
| [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153) | PR (stale) | Open since 2026-03-31, updated today | **Gemini `/v1` URL concatenation bug** – `slice(0, -3)` drops a `/`, breaking Gemini endpoints. Core integration fix, still unmerged. |
| [#1155](https://github.com/netease-youdao/LobsterAI/pull/1155) | PR (stale) | Open since 2026-03-31, updated today | **In-session Ctrl+F search** – TreeWalker + CSS Highlight API implementation; high-value UX feature awaiting review. |

**Underlying needs**: Users want **faster major-version cadence** (v4pro), **granular UI control** (ad banners), and **reliable multi-provider model routing** (Gemini fix). The stale PRs suggest review bandwidth is a bottleneck.

---

## 5. Bugs & Stability
| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **High** | Gemini baseURL ending in `/v1` produces malformed chat-completions URL (missing `/`) | Open (stale) | [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153) |
| **Medium** | Turn process collapses prematurely during `sessions_yield` wait, showing empty duration line | **Fixed & merged** | [#2499](https://github.com/netease-youdao/LobsterAI/pull/2499) |
| **Medium** | Badge popovers overflow viewport / render behind later messages | **Fixed & merged** | [#2496](https://github.com/netease-youdao/LobsterAI/pull/2496) |
| **Low** | Skill UI toggles silently ineffective when directory ≠ front-matter `name` | **Fixed & merged** (double fix) | [#2491](https://github.com/netease-youdao/LobsterAI/pull/2491), [#2483](https://github.com/netease-youdao/LobsterAI/pull/2483) |
| **Low** | Credits icon misaligned with account menu icons (color) | **Fixed & merged** | [#2492](https://github.com/netease-youdao/LobsterAI/pull/2492) |

No new crashes or regressions reported in the last 24 h.

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|------------------------------|
| **v4pro release** | Issue [#2489](https://github.com/netease-youdao/LobsterAI/issues/2489) | High – explicit user demand; current release is 2026.8.x, v4pro likely next major |
| **Permanent sidebar ad-banner hide** | PR [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) (addresses #2342) | High – PR ready, UX improvement, low risk |
| **In-session Ctrl+F search** | PR [#1155](https://github.com/netease-youdao/LobsterAI/pull/1155) | Medium – feature-complete but stale; needs review bandwidth |
| **Gemini `/v1` URL fix** | PR [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153) | High – core provider bug, blocks Gemini users |
| **Unit tests for `commandSafety` & `coworkMemoryJudge`** | Issue [#1154](https://github.com/netease-youdao/LobsterAI/issues/1154) | Medium – security/quality critical, but labeled stale; may be deferred |

---

## 7. User Feedback Summary
- **Pain points**:  
  - Sidebar ad banners cannot be permanently dismissed (only per-banner temporary close).  
  - Gemini model integration broken for `/v1` endpoints.  
  - Long wait for v4pro major release.  
- **Positive signals**:  
  - Team Edition and Skills/Connectors refresh delivered in today’s release.  
  - Rapid UI polish cycle (font sizes, icons, popovers, i18n) shows attention to detail.  
  - “Mark as unread” and Escape-key modal close address long-standing UX gaps.  
- **Sentiment**: Mixed – power users appreciate velocity but frustrate over stale core fixes (Gemini, tests) and lack of major-version communication.

---

## 8. Backlog Watch (Stale / Needs Maintainer Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153) – Gemini URL fix | 4.5 months | Blocks a major provider; simple one-line fix (`slice(0, -3)` → `slice(0, -1)` or proper join). |
| [#1155](https://github.com/netease-youdao/LobsterAI/pull/1155) – In-session Ctrl+F | 4.5 months | High-value productivity feature; implementation appears complete. |
| [#1154](https://github.com/netease-youdao/LobsterAI/issues/1154) – Unit tests for safety/memory modules | 4.5 months | `commandSafety` guards destructive commands; `coworkMemoryJudge` gates memory writes. Zero coverage = latent risk. |
| [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) – Permanent ad-banner hide | 25 days | Ready to merge; addresses frequent user complaint. |
| [#2465](https://github.com/netease-youdao/LobsterAI/pull/2465) – Vite 8 major upgrade | 5 days | Major dep bump; needs CI validation before merge. |

---

**Overall health**: 🟢 **Healthy velocity & release cadence**, but **review backlog growing** on critical provider fixes and security-adjacent tests. Recommended: prioritize merging #1153, #1155, and #2374; schedule test coverage sprint for #1154.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-15

## 1. Today's Overview
Moltis shows focused engineering activity with **two open pull requests** updated in the last 24 hours and **no issue traffic or releases**. Both PRs are authored by core contributor `penso` and target substantial platform extensions: Slack-native live task cards (#1195) and durable calendar/channel/email connectors (#1190). The absence of merged PRs, closed issues, or new releases indicates a **development-phase day**—work is in progress but not yet landing. Project health appears stable with active feature development on integration and connector surfaces.

## 2. Releases
**No new releases** published today. The latest release data is not provided in the current snapshot.

## 3. Project Progress
**No PRs merged or closed today.** Both active PRs remain open:
- **#1195** (created & updated today): Adds Slack-native live task cards with channel-neutral tool lifecycle updates, opaque per-run IDs for privacy, and native streaming rendering in the existing response stream.
- **#1190** (created 2026-08-11, updated 2026-08-14): Introduces durable, provider-neutral connectors for CalDAV, Gmail, Himalaya v2, and channel history—including persistence, atomic snapshots, scheduling, projections, and bounded local full-text search.

These represent **two parallel feature tracks**: real-time Slack UX enhancements and foundational connector infrastructure.

## 4. Community Hot Topics
With **zero issues** and **only two PRs** (both by the same author, zero comments/reactions), there is **no community-driven discussion** visible in the last 24 hours. The “hot topics” are effectively the two open PRs themselves:

| PR | Title | Link | Signals |
|----|-------|------|---------|
| #1195 | Add Slack native live task cards | [moltis-org/moltis#1195](https://github.com/moltis-org/moltis/pull/1195) | Real-time Slack UX, privacy-preserving tool cards, streaming integration |
| #1190 | Add durable calendar, channel, and email connectors | [moltis-org/moltis#1190](https://github.com/moltis-org/moltis/pull/1190) | Provider-neutral connectors, CalDAV/Gmail/Himalaya, snapshots, search |

**Underlying need**: Expanding Moltis’s **external integration surface**—both interactive (Slack) and data-oriented (calendar/email)—suggests a push toward **agent-driven workflows that live inside users’ existing communication & scheduling tools**.

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today** (zero issues opened/updated). No fix PRs are visible.

## 6. Feature Requests & Roadmap Signals
The two open PRs **are** the strongest roadmap signals:

1. **Slack-native live task cards** (#1195) → Next version will likely ship **real-time, card-based task rendering in Slack** with privacy guards.
2. **Durable multi-provider connectors** (#1190) → Next version will likely add **CalDAV, Gmail, Himalaya v2, and channel-history connectors** with snapshotting, scheduling, and local search.

**Prediction**: The next release will bundle these as “**Integration Pack v1**”—Slack UX + connector framework—enabling agents to create/update tasks in Slack and read/write calendar/email data durably.

## 7. User Feedback Summary
**No direct user feedback** (issues, comments, reactions) captured in the last 24 hours. The only “feedback” is implicit in the PR scopes:  
- Desire for **native Slack experiences** (not plain-text bot messages).  
- Need for **reliable, provider-agnostic calendar/email access** without credential leakage.

## 8. Backlog Watch
**No long-unanswered issues or stale PRs** appear in today’s data (total issues = 0, both PRs < 5 days old). Nothing requires maintainer triage based on this snapshot.

---

*Data source: GitHub API snapshot for moltis-org/moltis (2026-08-15). Links point to live GitHub items.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-15

## 1. Today's Overview
CoPaw shows **very high development velocity** with 77 total items (36 issues, 41 PRs) updated in the last 24 hours. The project is in active feature development phase with no new releases today. The ratio of open PRs (26) to merged/closed (15) suggests a growing review backlog. Community engagement is strong — multiple issues have 5-7 comments, indicating active discussion around desktop UX, skill system, and multi-session concurrency bugs.

---

## 2. Releases
**No new releases today.** The latest version appears to be v2.1.0 (referenced in issues #7011, #7016, #6958).

---

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Type | Key Changes |
|----|-------|------|-------------|
| [#7031](https://github.com/agentscope-ai/QwenPaw/pull/7031) | feat(skill-system): dynamic skill loading + auto-unload + frontmatter fix | Feature | **Closed duplicate** of #7033 — adds `load_skill`/`unload_skill`/`check_skill_status` tools, `AutoUnloadHook` (unloads idle skills every 5 turns), frontmatter description fixes, lazy-skill path resolution |
| [#7030](https://github.com/agentscope-ai/QwenPaw/pull/7030) | feat(auto-title-sync): auto-memory linked chat title refresh + observability | Feature | **Closed duplicate** of #7032 — auto-updates chat titles when auto-memory generates new entries |
| [#6943](https://github.com/agentscope-ai/QwenPaw/pull/6943) | feat(channels): support interactive configurators for plugin channels | Feature | Restores `get_configurator()` support for plugin channels in interactive CLI config flow; loads channel plugins before building menu |
| [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) | feat(onebot): localize inbound media before agent processing | Feature | Aligns OneBot media handling with AgentScope 2.0 `DataBlock` pipeline — downloads images/audio/video/files to managed local storage before agent processing |
| [#2105](https://github.com/agentscope-ai/QwenPaw/pull/2105) | docs: add whisper installation instructions | Docs | Adds `--extras whisper` installation docs to README (EN/ZH) for local speech-to-text |

> **Note:** Several PRs appear as "CLOSED" but are likely duplicates or superseded by newer PRs (e.g., #7031→#7033, #7030→#7032). The actual merged work is reflected in the open PRs under review.

---

## 4. Community Hot Topics (Most Commented Issues/PRs)

| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#2418](https://github.com/agentscope-ai/QwenPaw/issues/2418) | 7 | Question | **Skills Hub UI** — users want a discoverable, in-app marketplace to browse/download popular skills without leaving the app |
| [#2846](https://github.com/agentscope-ai/QwenPaw/issues/2846) | 6 | Enhancement | **Desktop auto-update + taskbar icon** — Windows users frustrated by manual uninstall/reinstall cycle and wrong taskbar icon (shows Python instead of CoPaw) |
| [#2303](https://github.com/agentscope-ai/QwenPaw/issues/2303) | 6 | Bug | **MiniMax provider compatibility** — `check_connection()` calls unsupported `/models` endpoint (404); needs Anthropic-compatible fallback |
| [#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010) | 6 | Question | **True daemon/background mode** — `qwenpaw app` blocks SSH/script startup; no `--daemon` or `nohup`-friendly mode |
| [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | 5 | Bug | **Cross-session stop-request leakage** — Console stop request cancels active Feishu session due to session identity collision in multi-UI setup |
| [#3002](https://github.com/agentscope-ai/QwenPaw/issues/3002) | 5 | Bug | **OpenAI Responses API incompatibility** — Azure OpenAI GPT-5.3 requests return 400; provider doesn't support new Responses format |

**Underlying themes:**  
- **Desktop polish** (auto-update, icons, daemon mode) is a top user pain point  
- **Provider ecosystem** needs broader compatibility (MiniMax, Azure OpenAI Responses, DashScope audio)  
- **Multi-session concurrency** bugs emerge as Feishu/Console/Channels run simultaneously  
- **Skill discoverability** — users want an in-app hub, not manual file management  

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | Console stop request cancels active Feishu session — session identity crosses between UI sessions | No |
| **High** | [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) | Tool call offload endpoint returns 404 during streaming (`/api/tool-calls/{id}/{tool_call_id}/offload`) | No |
| **Medium** | [#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951) | Scroll compression loses pre-compaction history on re-entry — only shows eviction index, not original messages | No |
| **Medium** | [#6958](https://github.com/agentscope-ai/QwenPaw/issues/6958) | FastMCP tool results written twice (unstructured + structuredContent) → duplicate data in tool result file | **Yes: [#6969](https://github.com/agentscope-ai/QwenPaw/pull/6969)** |
| **Medium** | [#7046](https://github.com/agentscope-ai/QwenPaw/issues/7046) | `execute_shell_command` mangles heredoc/multi-line commands — first line of heredoc treated as file arg | No |
| **Medium** | [#7045](https://github.com/agentscope-ai/QwenPaw/issues/7045) | Approval timeout on shell command leaves no retry path — operator cannot re-authorize after timeout | No |
| **Low** | [#7040](https://github.com/agentscope-ai/QwenPaw/issues/7040) | Typos in UI ("Stopp Running") | No |
| **Low** | [#4832](https://github.com/agentscope-ai/QwenPaw/issues/4832) | Windows shell command flashes `cmd.exe` window — missing `CREATE_NO_WINDOW` flag | No |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for Next Version | Rationale |
|---------|-------|----------------------------|-----------|
| **Desktop auto-updater** | [#2846](https://github.com/agentscope-ai/QwenPaw/issues/2846), [#3464](https://github.com/agentscope-ai/QwenPaw/issues/3464) | ★★★★☆ | Multiple duplicate requests; critical for Windows UX |
| **Skills Hub / Marketplace UI** | [#2418](https://github.com/agentscope-ai/QwenPaw/issues/2418) | ★★★★☆ | High community interest; aligns with dynamic skill loading PRs (#7033) |
| **Daemon/background mode** | [#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010) | ★★★☆☆ | Server/SSH deployment blocker; architectural change needed |
| **Per-session model overrides** | [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | ★★★★★ | **PR under review** — opt-in per-session LLM selection without changing defaults |
| **Unified provider discovery & routing** | [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | ★★★★★ | **Large PR open** — catalog-driven provider model, capability-aware routing, fallback |
| **Session splitting (move messages to new chat)** | [#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436) | ★★★☆☆ | Console-focused; helps manage token costs in long conversations |
| **Computer use / window observation** | [#5551](https://github.com/agentscope-ai/QwenPaw/issues/5551), [#7037](https://github.com/agentscope-ai/QwenPaw/pull/7037) | ★★★☆☆ | **PR open** — observes related window surfaces (menus, dialogs) for computer-use agents |
| **Sandboxing / workspace isolation** | [#2666](https://github.com/agentscope-ai/QwenPaw/issues/2666), [#3814](https://github.com/agentscope-ai/QwenPaw/issues/3814) | ★★☆☆☆ | Referenced OpenClaw; security-focused; no active PR |
| **Local GGUF model runner (llama.cpp bundled)** | [#6433](https://github.com/agentscope-ai/QwenPaw/issues/6433) | ★★☆☆☆ | Closed but conceptually aligned with "zero-setup local models" vision |

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Manual desktop updates** | #2846, #3464 — "uninstall then reinstall too troublesome" | High — Windows daily drivers |
| **Wrong taskbar icon** | #2846 — shows Python icon, not CoPaw | Medium — polish/branding |
| **No true background mode** | #7010 — blocks SSH/scripts, no daemon flag | High — server/headless deployments |
| **Provider compatibility gaps** | #2303 (MiniMax 404), #3002 (Azure OpenAI Responses 400), #7024 (DashScope audio) | High — blocks enterprise/model adoption |
| **Session history loss after compaction** | #6951 — pre-compaction messages invisible on re-entry | Medium — trust in conversation continuity |
| **Cross-channel interference** | #7011 — Console stop kills Feishu session | High — multi-channel production use |
| **Skill management friction** | #2418, #7025 (Creator plugin breaks other plugins) | Medium — power users, plugin authors |
| **Shell command UX** | #4832 (cmd flash), #7046 (heredoc mangling), #7045 (approval timeout no retry) | Medium — developers using tool execution |

**Positive signals:** Active PR reviews, first-time contributors welcomed (#6940, #5992, #2105), rapid iteration on skill system and memory features.

---

## 8. Backlog Watch — Stale but Important Items Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#2846](https://github.com/agentscope-ai/QwenPaw/issues/2846) | ~4.5 months | Desktop auto-update + icon — top Windows UX request | Open, no PR |
| [#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010) | 1 day (but fundamental) | Daemon mode — blocks server/container deployment | Open, no PR |
| [#2303](https://github.com/agentscope-ai/QwenPaw/issues/2303) | ~5 months | MiniMax provider broken — `check_connection()` 404 | Closed but **no fix PR linked** |
| [#3002](https://github.com/agentscope-ai/QwenPaw/issues/3002) | ~4 months | OpenAI Responses API / Azure GPT-5.3 incompatibility | Closed but **no fix PR linked** |
| [#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436) | ~3 months | Session splitting — high-value for long-context management | Open, no PR |
| [#2666](https://github.com/agentscope-ai/QwenPaw/issues/2666) | ~4.5 months | Sandboxing — security/isolation for enterprise | Open, no PR |
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | ~1 month | Per-session model overrides — **under review**, needs decision | Open PR |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | ~3 weeks | Unified provider system — **large refactor**, needs architectural review | Open PR |
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | ~3 days | DataPaw app runtime — **first-time contributor**, needs review | Open PR |

---

## Project Health Assessment
- **Velocity:** 🟢 Very high (77 items/24h)
- **Review Capacity:** 🟡 Strained (26 open PRs, many large)
- **Bug Backlog:** 🟡 Moderate — several high-severity multi-session/provider bugs open
- **Community Engagement:** 🟢 Strong — detailed reports, feature discussions, first-time contributors
- **Release Cadence:** 🔴 No release today; v2.1.0 appears current but desktop/daemon gaps remain

**Recommendation:** Prioritize merging #5992 (per-session models), #6302 (provider unification), #6969 (MCP duplicate fix), and #7033 (dynamic skills) to unblock downstream work. Address #7011 (cross-session bug) and #7016 (tool call 404) as hotfixes. Schedule desktop auto-update (#2846) and daemon mode (#7010) for next minor release.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-15

## 1. Today's Overview
ZeroClaw shows **high development velocity** with 50 PRs and 7 issues updated in the last 24 hours. The project is in an active stabilization phase for v0.8.5 (targeting August 30), with maintainers processing a decision queue for RFCs and architecture decisions. Three PRs were merged/closed today, indicating steady integration flow. No new releases were published. Activity centers on security hardening, provider reliability, channel integrations (Matrix, Slack, Telegram, Lark), and CI infrastructure migration to Blacksmith runners.

## 2. Releases
**No new releases** in the last 24 hours. The v0.8.5 stabilization line (tracked in [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)) froze intake on August 4 and aims for weekly cuts through August 30.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Title | Area | Status |
|----|-------|------|--------|
| [#9991](https://github.com/zeroclaw-labs/zeroclaw/issues/9991) | `ci: npm audit failed — 2026-08-14` (high severity `nanoid` vulnerability) | Security / Dependencies | **Closed** (automated) |
| [#9982](https://github.com/zeroclaw-labs/zeroclaw/issues/9982) | Hosted memory proposal (ViBo Cloud API) | Enhancement / Memory | **Closed** (wontfix) |
| *No merged feature PRs visible in the 24h window* | | | |

The closed items are an automated security alert and an external vendor proposal (declined). Feature PRs remain in review.

## 4. Community Hot Topics
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Issue (Tracker) | 13 | **Maintainer decision queue** for RFCs, design issues, release-policy questions — clearing architectural backlog before v0.8.5. |
| [#9574](https://github.com/zeroclaw-labs/zeroclaw/pull/9574) | PR | High (undefined shown) | **Channel approval authorization** — bind Telegram/Slack/Lark/Matrix tool approvals to originating chat/room; prevent unauthorized responders. |
| [#9137](https://github.com/zeroclaw-labs/zeroclaw/pull/9137) | PR | High | **Shared egress policy foundation** for plugins — typed, validated network-egress controls (depends on #9580). |
| [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) | PR | High | **Matrix single-message progress drafts** — editable progress message per turn, then distinct final message. |
| [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) | Issue (Bug, S1) | 3 | **Incomplete terminal responses reported as successful** — provider ends turn without trustworthy final answer; runtime/delegation shows success. |

**Underlying themes**: Multi-channel approval security, plugin/network-egress hardening, Matrix UX polish, and provider response reliability — all blocking or risk-high for v0.8.5.

## 5. Bugs & Stability
| Severity | Item | Summary | Fix PR? |
|----------|------|---------|---------|
| **S1 (workflow blocked)** | [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) | Incomplete terminal responses reported as successful (provider:reliable, provider:anthropic, tool:delegate) | [#9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999) — classifies `finish_reason: "length"` as output-token-limit failure; rejects incomplete non-streaming responses |
| **High** | [#9574](https://github.com/zeroclaw-labs/zeroclaw/pull/9574) | Channel approval responders not authorized — any identity could approve | PR open, needs author action |
| **High** | [#9996](https://github.com/zeroclaw-labs/zeroclaw/pull/9996) | Action budget accounting not atomic — parallel calls can exceed `max_actions_per_hour` | PR open (Audacity88) |
| **High** | [#9839](https://github.com/zeroclaw-labs/zeroclaw/pull/9839) | Allowlist short-circuits on `*` + `block_high_risk_commands: false`, bypassing subshell/expansion guard | PR open (JordanTheJet) |
| **Medium** | [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | Cron custom-shell test hits `ETXTBSY` under parallel runtime gate, failing unrelated PRs | Task filed, no fix PR yet |
| **High (supply chain)** | [#9991](https://github.com/zeroclaw-labs/zeroclaw/issues/9991) | `npm audit`: high severity `nanoid` vulnerability (transitive) | Closed (automated); mitigation pending in dependencies |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for v0.8.5 / Next |
|--------|--------|------------------------------|
| **Agent export/import bundles** | [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) — `zeroclaw agents export <alias> --out <dir>` | High (PR open, p2, XL) — portable agent migration |
| **Shared egress policy for plugins** | [#9137](https://github.com/zeroclaw-labs/zeroclaw/pull/9137) + [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) (typed config validation) | High (depends on #9580 merge; distinguished contributor) |
| **Matrix single-message progress drafts** | [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) | Medium (long-open, trusted contributor, needs author action) |
| **Cron/heartbeat delivery contract** | [#9842](https://github.com/zeroclaw-labs/zeroclaw/pull/9842) — explicit framing for autonomous turns | Medium (p1, distinguished contributor) |
| **ZeroCode transcript copy context menu** | [#9994](https://github.com/zeroclaw-labs/zeroclaw/pull/9994) | Low (zerocode, p2, L) — UX polish |
| **Google Workspace camelCase validation** | [#10002](https://github.com/zeroclaw-labs/zeroclaw/pull/10002) | High (small fix, unblocks real API identifiers) |

**Predicted next-version scope**: Security hardening (egress, action budget, command blocking), agent portability, provider response reliability, and CI runner migration (Blacksmith) — aligned with v0.8.5 stabilization tracker [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459).

## 7. User Feedback Summary
- **Pain**: Incomplete provider responses silently treated as success ([#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421)) — breaks trust in delegation/tool flows.
- **Pain**: Cron test flakiness (`ETXTBSY`) blocks unrelated PRs ([#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)) — CI reliability.
- **Pain**: Channel approvals lack identity binding ([#9574](https://github.com/zeroclaw-labs/zeroclaw/pull/9574)) — security gap in multi-user Slack/Telegram/Lark/Matrix.
- **Need**: Portable agent bundles for moving agents between installs ([#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986)).
- **Need**: Explicit cron/heartbeat contract so autonomous turns disclose reply handling ([#9842](https://github.com/zeroclaw-labs/zeroclaw/pull/9842)).
- **Rejected**: External hosted memory proposal (ViBo Cloud) — closed as `wontfix` ([#9982](https://github.com/zeroclaw-labs/zeroclaw/issues/9982)), suggesting preference for self-hosted/first-party memory.

## 8. Backlog Watch (Long-Unanswered / Needs Maintainer Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 42 days | **Maintainer decision queue** — 13 comments, tracks RFC/design acceptance; clearing this unblocks architectural direction. |
| [#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) | 42 days | **ADR baseline restore & audit** — docs debt; accepted RFCs missing decision records. |
| [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) | 48 days | Matrix progress drafts — trusted contributor, XL, needs author action; UX for core channel. |
| [#9137](https://github.com/zeroclaw-labs/zeroclaw/pull/9137) / [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) | 28 days | Plugin egress foundation + typed config validation — distinguished contributor, XL, blocked on #9580. |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | 35 days | Gateway: keep agent turns alive after viewer disconnect — distinguished contributor, needs maintainer review, high risk. |
| [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) | 23 days | Config: roll back auto-created map aliases on `config set` failure — distinguished contributor, needs maintainer review. |
| [#9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580) | 15 days | Harden built-in HTTP egress on shared network guard — security, p1, blocks #9137. |

---

**Health Indicator**: 🟢 **Active & Focused** — High PR throughput, clear stabilization target (v0.8.5), security-first fixes, and maintainer-driven decision queue. Primary risks: S1 provider reliability bug (#9421) and CI flakiness (#9965) blocking unrelated work.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*