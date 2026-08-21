# OpenClaw Ecosystem Digest 2026-08-21

> Issues: 226 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-21 01:46 UTC

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

# OpenClaw Project Digest — 2026-08-21

## 1. Today's Overview
OpenClaw exhibits **exceptionally high development velocity** with 226 issues and 500 PRs updated in the last 24 hours. The project maintains a massive open backlog (212 active issues, 374 open PRs) while steadily merging fixes (126 PRs closed/merged today). No new release was cut, but a release validation for `v2026.8.1-beta.2` is underway (#125626). The issue/PR volume suggests a mature, widely-deployed platform actively addressing stability regressions, session management bugs, and multi-channel integration edge cases across its gateway, agent runtime, and Control UI surfaces.

## 2. Releases
**No new releases published today.**  
Active release validation: **v2026.8.1-beta.2** ([#125626](https://github.com/openclaw/openclaw/issues/125626)) — community testers are upgrading real gateways and running validation worksheets. This beta follows `v2026.8.1-beta.1` (referenced in #123792) and appears focused on stabilizing the 2026.8.x line after multiple regression reports.

## 3. Project Progress — Merged/Closed PRs Today (126 total)
Key merged fixes from the top-30 list (all links to PRs):

| PR | Area | Fix Summary |
|----|------|-------------|
| [#126936](https://github.com/openclaw/openclaw/pull/126936) | CI | Accept extended-stable patch successors (e.g. `2026.6.35` on `extended-stable/2026.6.33`) |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | Auth/UI | Keep Claude CLI OAuth available in Control UI after gateway restart (closed) |
| [#126921](https://github.com/openclaw/openclaw/pull/126921) | CLI | Preserve recorded router/provider-model identity in `openclaw sessions --json` (closed) |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | Security/UI | Allow admins to review & acknowledge install-policy warnings in Control UI (closed) |
| [#126931](https://github.com/openclaw/openclaw/pull/126931) | Sessions | Stop persisting runtime-only skill catalogs (fixes session bloat with many agents) |
| [#126934](https://github.com/openclaw/openclaw/pull/126934) | Nostr | Fix configured SecretRef accounts disappearing on startup |
| [#126932](https://github.com/openclaw/openclaw/pull/126932) | Config | Stop auto-restoring hand-authored configs missing `meta` block (fixes #126806) |
| [#126618](https://github.com/openclaw/openclaw/pull/126618) | Tools | Wrap native `read`/`exec` in `tool_call` for Tool Search directory/tools modes |
| [#126537](https://github.com/openclaw/openclaw/pull/126537) | Agent Core | Preserve accepted handoff in tool settlement catches (fixes `sessions_yield` abort) |
| [#126473](https://github.com/openclaw/openclaw/pull/126473) | Anthropic | Keep context usage for providers that never write cache (fixes #126436) |

**Theme**: Session integrity, auth persistence, config fidelity, and tool-call correctness dominate today’s merges.

## 4. Community Hot Topics — Most Active Issues/PRs (by comment count)

| Issue | Comments | 👍 | Core Need |
|-------|----------|----|-----------|
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | 20 | 1 | **Centralized filename encoding utility** for multi-encoding `Content-Disposition` (Shift-JIS, EUC-KR, GB18030…) across all channel adapters — architectural fix beyond the Feishu UTF-8 patch |
| [#125626](https://github.com/openclaw/openclaw/issues/125626) | 18 | 0 | **Release validation** for `v2026.8.1-beta.2` — coordinated community testing of real gateway upgrades |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | 14 | 3 | **Gateway fails to start** on `2026.7.1` (systemd, ollama, manual) — regression blocking some deployments |
| [#88657](https://github.com/openclaw/openclaw/issues/88657) | 11 | 1 | **DeepSeek V4 Flash incomplete turns** via OpenRouter (`payloads=0, tools=2, stopReason=stop`) since `2026.5.27` |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) | 11 | 0 | **Memory management chaos** — inconsistent chunking/embedding/storage across users (SQLite vs. other backends) |
| [#119796](https://github.com/openclaw/openclaw/issues/119796) | 11 | 0 | **Windows vitest teardown EBUSY** — `openclaw-agent.sqlite` handle not released in Zalo extension tests |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 8 | 1 | **Unreaped hook/tool child processes** → zombie accumulation & runtime degradation |
| [#51441](https://github.com/openclaw/openclaw/issues/51441) | 8 | 1 | **Expose resolved backend model** in `session_status` / agent runtime when using LiteLLM/routing proxies |

**Underlying needs**:  
- **Cross-channel encoding robustness** (internationalization at the transport layer)  
- **Release confidence** via real-world beta validation  
- **Gateway startup reliability** after version upgrades  
- **Model provider observability** (what model actually ran)  
- **Resource hygiene** (DB handles, child processes, memory backends)

## 5. Bugs & Stability — Today’s Reports (ranked by severity labels)

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P0** `🦞 diamond lobster` `maturity:stable` | [#126821](https://github.com/openclaw/openclaw/issues/126821) | **SQLite corruption recurs on pristine rebuilt DBs within 15–24h** (WSL2, `2026.8.1-beta.2`) — 5 events in 5 days, including “paralyzed gateway” mode | ❌ |
| **P0** `impact:crash-loop` `🦞 diamond lobster` | [#108435](https://github.com/openclaw/openclaw/issues/108435) | Gateway fails to start on `2026.7.1` (systemd, ollama, manual) | ❌ |
| **P1** `impact:session-state` `🦞 diamond lobster` | [#126900](https://github.com/openclaw/openclaw/issues/126900) | `maxActiveTranscriptBytes` loops compaction forever when compacted transcript stays above threshold → channel wedges | ❌ |
| **P1** `🦞 diamond lobster` `impact:message-loss` | [#119475](https://github.com/openclaw/openclaw/issues/119475) | **WhatsApp: inbound DMs from LID-addressed chats silently dropped** — 79 unique senders lost in 24h | ❌ |
| **P1** `🦞 diamond lobster` `impact:session-state` `impact:security` | [#124991](https://github.com/openclaw/openclaw/issues/124991) | CLI session reseed inert on SQLite stores — reads legacy JSONL that never exists | ❌ |
| **P1** `impact:crash-loop` `🦞 diamond lobster` | [#86612](https://github.com/openclaw/openclaw/issues/86612) | Docker gateway restart loop when `OPENCLAW_SANDBOX=1` and `OPENCLAW_HOME=/mnt/c/...` | ❌ |
| **P1** `impact:session-state` `🦞 diamond lobster` | [#120154](https://github.com/openclaw/openclaw/issues/120154) | Config reload unconditionally rebuilds all prepared-model snapshots for every `agents.entries.*` | ❌ |
| **P1** `🐚 platinum hermit` `impact:message-loss` | [#118839](https://github.com/openclaw/openclaw/issues/118839) | Regression: ‘restart recovery claim changed before agent adoption’ reappears on `2026.7.2-beta.7` | ❌ |
| **P2** `impact:data-loss` `🦞 diamond lobster` | [#124393](https://github.com/openclaw/openclaw/issues/124393) | `replaceTranscriptEventsSync` deletes concurrently committed transcript rows and reports success | ❌ |
| **P2** `impact:crash-loop` `🦞 diamond lobster` | [#97616](https://github.com/openclaw/openclaw/issues/97616) | OpenClaw leaks unreaped hook/tool child processes → zombie accumulation | ❌ |
| **P2** `🦞 diamond lobster` | [#119796](https://github.com/openclaw/openclaw/issues/119796) | Windows: vitest teardown `EBUSY unlink` on `openclaw-agent.sqlite` handle not released | ❌ |
| **P2** `🦞 diamond lobster` | [#126016](https://github.com/openclaw/openclaw/issues/126016) | Compaction strict identifier extractor treats decimal fragments in tool results as exact IDs → `guard_blocked` | ❌ |
| **P2** `🦪 silver shellfish` `impact:message-loss` | [#88657](https://github.com/openclaw/openclaw/issues/88657) | DeepSeek V4 Flash incomplete turns via OpenRouter since `2026.5.27` | ❌ |
| **P2** `🦪 silver shellfish` `impact:session-state` | [#90361](https://github.com/openclaw/openclaw/issues/90361) | Intermittent `memory_search` “index metadata is missing” despite valid builtin index — search/reindex race | ❌ |
| **P2** `🦪 silver shellfish` | [#90787](https://github.com/openclaw/openclaw/issues/90787) | `memorySearch` provider silently resets to `openai` after upgrade to `2026.6.1` → permanent Dirty index | ❌ |

**Critical cluster**: SQLite corruption (#126821), gateway startup failure (#108435), transcript compaction loop (#126900), WhatsApp message loss (#119475), and CLI reseed breakage (#124991) are **P0/P1 with no linked fix PRs** — these should be prioritized for the next beta/rc.

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|----------------------------|
| [#51441](https://github.com/openclaw/openclaw/issues/51441) | **Expose resolved backend model** in session status/agent runtime (LiteLLM/proxy routing) — 8 comments, P2 | High — observability gap for routed models |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | **Centralized filename encoding utility** for multi-encoding `Content-Disposition` — 20 comments, P3 | High — architectural, multi-channel impact |
| [#50798](https://github.com/openclaw/openclaw/issues/50798) | **Visible agent-to-agent messaging for ACP thread-bound sessions** (proxy-only delivery) — 5 comments, P2 | Medium — niche but clean architecture ask |
| [#45501](https://github.com/openclaw/openclaw/issues/45501) | **`session.resetPrompt`** — configurable session startup message (replace hardcoded text) — 6 comments, P3 | Medium — low-risk UX improvement |
| [#45564](https://github.com/openclaw/openclaw/issues/45564) | **Confirmation step for `/new` and `/reset`** to prevent accidental session wipes — 6 comments, P2 | Medium — safety/UX, easy to implement |
| [#45415](https://github.com/openclaw/openclaw/issues/45415) | **MEMORY.md size warning/limit enforcement** (silent truncation at ~20K chars) — 4 comments, P3 | Low-Medium — affects power users |
| [#40644](https://github.com/openclaw/openclaw/issues/40644) | **Cron Jobs Calendar View** for Control UI — 4 comments, P3 | Low — UI-only, non-blocking |
| [#14747](https://github.com/openclaw/openclaw/issues/14747) | **Configurable lane wait diagnostic threshold** (hardcoded 2s warns on long cron jobs) — 5 comments, P2 | Medium — simple config addition |

**Roadmap prediction**: The next stable (`2026.8.x`) will likely land the encoding utility (#48788), resolved-model exposure (#51441), and session-wipe confirmation (#45564) — all have maintainer labels and clear scope. The ACP proxy messaging (#50798) may wait for ACP spec stabilization.

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence (Issues) | User Impact |
|------------|-------------------|-------------|
| **Gateway instability after upgrade** | #108435 (14 comments, 3👍), #107207 (managed install points to old Node) | Cannot start gateway; blocks deployment |
| **Silent message loss** | #119475 (WhatsApp LID DMs), #112259 (zero-payload dispatch), #51620 (restart drops queued messages) | Critical for production bots; no visibility |
| **Session/data corruption** | #126821 (SQLite corruption recurring), #124393 (transcript rewrite deletes rows), #94229 (plugin_state_entries corruption) | Data loss, gateway paralysis |
| **Memory system inconsistency** | #43747 (chaos across users), #90361 (index metadata missing), #90787 (provider reset) | Unreliable long-term context |
| **Model provider opacity** | #51441 (can’t see actual backend model), #886

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-08-21)

## 1. Ecosystem Overview
The personal AI agent ecosystem shows **bifurcated maturity**: a few large-scale platforms (OpenClaw, Hermes, IronClaw, ZeroClaw) operate at enterprise-grade velocity with 50-500 PRs/day, while mid-sized projects (NanoBot, CoPaw, NanoClaw) maintain steady 20-50 PR/day cadence. All active projects are in **stabilization or refactoring phases**—no major feature launches, but intense focus on session integrity, multi-channel reliability, container/security hardening, and provider observability. Release frequency varies: Moltis ships daily date-based patches; CoPaw and OpenClaw run beta validation cycles; others accumulate changes for batched releases. The ecosystem is consolidating around **multi-provider routing, persistent sandboxing, and standardized skill/plugin interfaces** as baseline expectations.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed (24h) | Open PRs | Active Issues | Release Status | Health Score* |
|---------|--------------|-----------|---------------------|----------|---------------|----------------|---------------|
| **OpenClaw** | 226 | 500 | 126 | 374 | 212 | Beta validation (v2026.8.1-beta.2) | 🟢 9/10 |
| **Hermes Agent** | 15 | 50 | 4 | 46 | ~15 | None (stabilization) | 🟡 7/10 |
| **IronClaw** | 19 | 35 | 14 | ~21 | 19 | None (epic-driven) | 🟢 8/10 |
| **ZeroClaw** | 3 | 50 | 2 | 48 | 3 | None (security hardening) | 🟡 7/10 |
| **NanoClaw** | 1 | 50 | 15 | 35 | 1 | None (skill audit sprint) | 🟡 7/10 |
| **CoPaw** | 17 | 50 | 28 | 22 | 17 | **v2.1.1-beta.1 released** | 🟢 8/10 |
| **NanoBot** | 5 | 29 | 12 | 17 | 5 | None (CI phase) | 🟢 8/10 |
| **Moltis** | 0 | 5 | 1 | 4 | 0 | **20260820.01 released** | 🟢 8/10 |
| **PicoClaw** | 3 | 9 | 4 | 5 | 3 | None (v0.3.1) | 🟡 6/10 |
| **LobsterAI** | 2 (stale) | 7 (stale) | 7 | 0 | 2 (stale) | None (stabilization) | 🟡 5/10 |
| **NullClaw** | 0 | 0 | 0 | 0 | 0 | No activity | ⚫ 0/10 |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | 0 | No activity | ⚫ 0/10 |

*Health Score: Composite of merge throughput, release cadence, bug severity backlog, and community engagement (0-10).

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale & Maturity**: 10x PR volume of nearest peers; 212 active issues indicate massive real-world deployment surface
- **Multi-Channel Depth**: Only project with production-grade WhatsApp/Slack/Matrix/Nostr/Feishu channel adapters and encoding utilities (#48788)
- **Session/State Rigor**: Unique focus on transcript compaction loops, SQLite corruption forensics, CLI reseed correctness
- **Release Discipline**: Structured beta validation with community worksheets (#125626) vs ad-hoc cuts

**Technical Approach Differences:**
- **Gateway-Centric Architecture**: Centralized gateway manages all channel adapters, session routing, and agent runtime—vs. Hermes/IronClaw's decentralized service mesh
- **SQLite-First Persistence**: Embedded DB for sessions/transcripts/memory vs. Postgres/MariaDB backends in ZeroClaw/IronClaw
- **Control UI as First-Class Surface**: Admin policy review (#120900), OAuth persistence (#125471) built into dashboard

**Community Size**: Largest by issue/PR volume; 20-comment issue (#48788) shows deep technical engagement. However, **high P0/P1 backlog without fixes** (#126821, #108435, #126900) indicates maintainer bandwidth saturation.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Provider Observability & Routing** | OpenClaw (#51441), NanoBot (#5459), CoPaw (#6436), ZeroClaw (#9809), PicoClaw (#3330) | Expose resolved backend model in session status; automatic model routing (local→vision→reasoning); multi-model per provider profile |
| **Container/Sandbox Persistence** | Hermes (#7732), IronClaw (#7732), NanoClaw (#2715), ZeroClaw (WASM plugins) | Persistent per-user sandboxes replacing ephemeral containers; host-mounted volumes for media (WhatsApp); egress policy for WASM plugins |
| **Session/Transcript Integrity** | OpenClaw (#126900, #124393), CoPaw (#7168), Hermes (#83208), ZeroClaw (#9715) | Compaction loops, history.db bloat (7.6GB), event-loop stalls, atomic JSONL migration, concurrent write safety |
| **Authentication & OAuth in Containers** | NanoBot (#5444), LobsterAI (#1556), CoPaw (#7185), Moltis (#1222) | Docker-compatible OAuth callbacks; remote MCP OAuth docs; admin-gated sandbox image validation |
| **Security Hardening** | ZeroClaw (#9584, #9678, #10072), IronClaw (#7783, #7776), Moltis (#1221, #1222), NanoClaw (#3403) | Plugin egress grants, SSRF gates, shell command allow/ask/deny, LLM timeout finalization, dependency pinning |
| **Windows/WSL Compatibility** | OpenClaw (#86612, #119796), Hermes (#22054, #91087), Moltis (#468), NanoBot (#5425) | PATH injection, SQLite handle leaks, npm/npx shims, cmd.exe shell hooks, socks:// proxy support |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | IronClaw | ZeroClaw | CoPaw | NanoBot | Moltis | NanoClaw |
|-----------|----------|--------------|----------|----------|-------|---------|--------|----------|
| **Target User** | Enterprise/self-hosted gateway operators | Desktop/remote voice-first users | Automation/platform builders | Security-first developers | Qwen/Chinese LLM ecosystem | Containerized devs | Lightweight bot deployers | Skill/plugin authors |
| **Architecture** | Monolithic gateway + agent runtime | Decentralized services (gateway, agent, webhook) | Actor-based capability mesh | WASM plugin sandbox + capability graph | Electron console + Rust core | TUI/WebUI + provider abstraction | Single-binary gateway | Skill-centric composition |
| **Key Differentiator** | Channel adapter breadth + session rigor | Voice/WebRTC + multi-profile gateway | Design system + automation triggers | Plugin egress policy + shell confirmation | Memory (Scroll/ReMe) + marketplace | MCP v2 migration + proxy support | Daily releases + WhatsApp fidelity | Skill lifecycle hygiene (REMOVE.md, config seams) |
| **Memory Approach** | SQLite + compaction | Honcho peer-card + compaction | Durable run projections + Inbox | SQLite/PostgreSQL/MariaDB (pluggable) | Scroll (ReMe) + history.db | Built-in + MCP memory | Not emphasized | Skill-scoped context |
| **Release Model** | Date-based beta validation | Feature-package batches | Epic-driven (v1.4.0) | Stacked PRs → batched | Beta tags (v2.1.1-beta.1) | Continuous integration | Daily date-based (20260820.01) | Accumulated on main |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **High Velocity / Scaling** | OpenClaw, IronClaw, ZeroClaw, CoPaw, NanoClaw | 50+ PRs/day; structured epics; dedicated core teams; enterprise adoption signals |
| **Steady Iteration** | NanoBot, Hermes, Moltis | 20-50 PRs/day; clear roadmap (MCP v2, Design System, WebRTC); active but not overwhelmed |
| **Maintenance Mode** | PicoClaw, LobsterAI | <10 PRs/day; bug fixes > features; stale issue backlogs; limited contributor growth |
| **Dormant** | NullClaw, ZeptoClaw | Zero activity >24h; no recent releases |

**Rapidly Iterating**: IronClaw (3 epics parallel), ZeroClaw (security stack), NanoClaw (skill audit sprint), CoPaw (memory + marketplace).  
**Stabilizing**: OpenClaw (beta validation), Moltis (daily patches), NanoBot (Docker OAuth blocker), Hermes (install/voice UX).

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence Across Projects | Strategic Value |
|-------|--------------------------|-----------------|
| **Standardized Skill/Plugin Interfaces** | NanoClaw (MCP config seams), ZeroClaw (ADR-014 egress), IronClaw (capability contracts), CoPaw (marketplace unification), Moltis (sandbox images) | **High** — Convergence on capability-based, sandboxed, config-driven extensions enables cross-platform skill portability. |
| **Persistent Identity & State** | Hermes (per-user sandbox), IronClaw (durable run projections), ZeroClaw (atomic cron/session), OpenClaw (session reseed), CoPaw (Scroll cross-session) | **High** — Moving beyond stateless request/response to durable agent identity with audit trails and recovery. |
| **Multi-Provider Routing as Default** | OpenClaw (LiteLLM exposure), CoPaw (auto-routing), ZeroClaw (multi-model/profile), NanoBot (Vertex AI), PicoClaw (dynamic override) | **High** — Abstracting model selection from agent logic; cost/latency optimization becoming table stakes. |
| **Security-First Plugin Execution** | ZeroClaw (egress grants), IronClaw (iron-proxy), Moltis (admin-gated builds), NanoClaw (container configs) | **Critical** — WASM/container plugins require host-controlled network/filesystem access; supply-chain scanning (Snyk pinning) standardizing. |
| **Remote/Headless Voice as Differentiator** | Hermes (WebRTC browser capture), OpenClaw (multi-channel voice), CoPaw (artifacts + streaming) | **Medium-High** — Voice moving from local TUI to remote dashboard capture; STT/TTS contract standardization (V6) emerging. |
| **Observability-Driven Development** | OpenClaw (resolved model exposure), IronClaw (daily failure taxonomy), CoPaw (token usage tracking), ZeroClaw (provider response classification) | **High** — "What model actually ran?" and "Why did it fail?" driving instrumentation investment. |

**Recommendation for Developers**: Invest in **MCP v2 compatibility**, **capability-based skill manifests**, and **provider-agnostic routing layers**—these are the converging substrate. Prioritize **container-native auth flows** and **persistent sandbox APIs** for deployment flexibility. Monitor **OpenClaw's encoding utility** and **ZeroClaw's shell confirmation tier** as emerging cross-project standards.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-21

## 1. Today's Overview
NanoBot shows **high development velocity** with 29 PRs updated and 5 issues active in the last 24 hours. The project is in active maintenance mode with no new releases, focusing on stability fixes, provider expansions, and infrastructure improvements. A healthy mix of bug fixes (OAuth, streaming retries, proxy handling), new provider integrations (SenseNova, Vertex AI request), and architectural work (MCP SDK v2 migration evaluation, webui observability) indicates sustained forward momentum. The 12 merged/closed PRs vs 17 open suggests good throughput with a manageable review queue.

---

## 2. Releases
**No new releases** in the last 24 hours. The project appears to be in a continuous integration phase accumulating changes for the next version bump.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#5452](https://github.com/HKUDS/nanobot/pull/5452) | feat(tui): print resume command on exit | Feature | UX improvement — users get a ready-to-run `nanobot agent --session websocket:<id>` command after TUI exit |
| [#5240](https://github.com/HKUDS/nanobot/pull/5240) | refactor(webui): unify floating controls | Refactor | Centralizes dropdown/menu/popover styling; standardizes selected/destructive states |
| [#5425](https://github.com/HKUDS/nanobot/pull/5425) | fix: support legacy `socks://` proxy URLs | Bug Fix | Resolves proxy configuration failures for custom OpenAI-compatible providers |
| [#5447](https://github.com/HKUDS/nanobot/pull/5447) | Paid security-scan MCP integration (closed) | Integration | External proposal (ScanPay x402) — closed, likely not pursued |

**Key advances:** TUX session resumption, webui component consolidation, proxy compatibility fix for enterprise/custom provider users.

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| **[#5444](https://github.com/HKUDS/nanobot/issues/5444)** [OPEN] Failed to login OpenAI via OAuth in Docker | 1 comment, created 2026-08-19 | **Containerized auth flow broken** — OAuth callback to `localhost` fails in Docker; blocks cloud/container deployments |
| **[#5459](https://github.com/HKUDS/nanobot/issues/5459)** [OPEN] Feature: Native Google Vertex AI provider for Claude | 0 comments, created 2026-08-20 | **Enterprise cloud parity** — Vertex AI is a major Anthropic Claude hosting platform; missing first-class support |
| **[#5420](https://github.com/HKUDS/nanobot/pull/5420)** [OPEN] feat(webui): add turn observability and safe recovery | Updated 2026-08-20 | **Debuggability & resilience** — Per-turn usage tracking, interrupted work recovery, cumulative context visibility |
| **[#5179](https://github.com/HKUDS/nanobot/pull/5179)** [OPEN] Migrate MCP integration to SDK v2 with legacy compatibility | Updated 2026-08-20 (created 2026-07-30) | **Platform alignment** — MCP v2 is the future; 3-week-old PR indicates complex migration needing maintainer bandwidth |

**Signal:** Docker/container auth and enterprise provider coverage are top user pain points. The MCP v2 migration is a strategic technical debt item stalled for weeks.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Fix PR? | Details |
|----------|-------|---------|---------|
| **High** | [#5444](https://github.com/HKUDS/nanobot/issues/5444) OAuth login fails in Docker | ❌ No PR yet | OAuth callback uses `localhost` — unreachable in container; blocks all containerized deployments using OpenAI OAuth |
| **High** | [#5454](https://github.com/HKUDS/nanobot/issues/5454) Streaming retry skips `server_error` after content starts | ✅ [#5455](https://github.com/HKUDS/nanobot/pull/5455) | Codex `response.failed` (`server_error`) not retried mid-stream; causes silent failures on transient provider errors |
| **Medium** | [#5425](https://github.com/HKUDS/nanobot/issues/5425) `socks://` proxy URLs unsupported | ✅ Fixed (closed) | Legacy proxy alias common in enterprise envs; request failed before reaching provider |
| **Medium** | [#5458](https://github.com/HKUDS/nanobot/pull/5458) Matrix error logs missing context | ✅ PR open | Loguru `{}` vs `%s` placeholder mismatch — filenames, room IDs, chat IDs not logged |
| **Medium** | [#5414](https://github.com/HKUDS/nanobot/pull/5414) Slack file downloads not validated across redirects | ✅ PR open | SSRF risk — crafted redirects could exfiltrate files to arbitrary destinations |
| **Low** | [#5456](https://github.com/HKUDS/nanobot/pull/5456) Unused `websocket-client` dep; missing `certifi` declaration | ✅ PR open | Hygiene — no runtime impact, but improves dependency accuracy |

**Critical gap:** #5444 (Docker OAuth) has no fix PR despite being 2 days old — high impact for cloud/container users.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|----------------------------|-----------|
| **Native Google Vertex AI provider for Claude** | [#5459](https://github.com/HKUDS/nanobot/issues/5459) | 🟡 Medium | Major enterprise gap; aligns with existing Bedrock/Azure/OpenAI provider pattern; no PR yet |
| **SenseNova (商汤日日新) provider** | [#5453](https://github.com/HKUDS/nanobot/pull/5453) | 🟢 High | PR open with implementation, tests, docs; OpenAI-compatible endpoint; Chinese LLM market coverage |
| **WebUI turn observability & safe recovery** | [#5420](https://github.com/HKUDS/nanobot/pull/5420) | 🟢 High | Large UX/refactor PR; per-turn usage, interrupted work recovery, cumulative context — high value |
| **MCP SDK v2 migration** | [#5179](https://github.com/HKUDS/nanobot/pull/5179), [#5180](https://github.com/HKUDS/nanobot/pull/5180) | 🟡 Medium | Two competing PRs (full vs minimal); 3 weeks old; strategic but complex — may wait for v2 stabilization |
| **Telegram reusable sticker replies** | [#5387](https://github.com/HKUDS/nanobot/pull/5387) | 🟢 High | Niche but complete PR; preserves existing reaction lifecycle; low risk merge |

**Prediction:** SenseNova provider (#5453) and Telegram stickers (#5387) are nearest to merge. Vertex AI (#5459) needs a champion/PR. MCP v2 will likely land but timing uncertain.

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|----------------------|----------|-----------|
| **Docker/container OAuth broken** | [#5444](https://github.com/HKUDS/nanobot/issues/5444) — "Failed to login OpenAI via OAuth in Docker" | 😡 Frustrated — blocks production container deployments |
| **Enterprise proxy compatibility** | [#5425](https://github.com/HKUDS/nanobot/issues/5425) — `socks://` alias fails for custom providers | 😐 Neutral → ✅ Resolved — legacy proxy support needed in corp environments |
| **Streaming reliability** | [#5454](https://github.com/HKUDS/nanobot/issues/5454) — mid-stream `server_error` not retried | 😟 Concerned — silent failures degrade trust in long-running coding tasks |
| **Session resumption UX** | [#5452](https://github.com/HKUDS/nanobot/pull/5452) — TUI prints resume command on exit | 👍 Positive — addresses "how do I get back to my session?" friction |
| **MCP as paid service integration** | [#5447](https://github.com/HKUDS/nanobot/issues/5447) — ScanPay x402 security scanner proposal | 🤔 Exploratory — shows commercial interest in NanoBot as MCP host |

**Overall:** Users are pushing NanoBot into **containerized, enterprise, and multi-provider production workflows** — revealing gaps in auth, proxy, and streaming resilience. The project responds quickly with fixes (socks proxy, streaming retry) but Docker OAuth remains unaddressed.

---

## 8. Backlog Watch — Stalled / Needing Maintainer Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| **[#5179](https://github.com/HKUDS/nanobot/pull/5179)** Migrate MCP to SDK v2 (full) | 22 days | Open, conflict | Strategic migration; two competing approaches (#5179 vs #5180); needs architectural decision |
| **[#5180](https://github.com/HKUDS/nanobot/pull/5180)** Evaluate minimal MCP SDK v2 migration | 22 days | Open, conflict | Paired with #5179 — maintainers must choose path or merge evaluation first |
| **[#1203](https://github.com/HKUDS/nanobot/pull/1203)** Workaround 'Event loop is closed' on Linux | 178 days | Closed (old) | Ancient PR finally closed — indicates historical event-loop cleanup debt; monitor for regressions |
| **[#5444](https://github.com/HKUDS/nanobot/issues/5444)** Docker OAuth login failure | 2 days | Open, no PR | **Highest user-impact bug without fix** — container deployments are standard; needs maintainer triage |
| **[#5420](https://github.com/HKUDS/nanobot/pull/5420)** WebUI turn observability | 3 days | Open, large | Significant UX refactor; needs design review and testing bandwidth |

**Recommendation:** Prioritize #5444 (Docker OAuth) for immediate fix — it's a deployment blocker. Schedule decision meeting on MCP v2 migration (#5179/#5180) to unblock long-stalled strategic work.

---

*Digest generated from GitHub data as of 2026-08-21. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-21

---

## 1. Today's Overview

Hermes Agent shows **high engineering velocity** with 50 PRs and 15 issues updated in the last 24 hours, but **zero releases** indicate the project is in a heavy stabilization/refactoring phase. The open PR count (46) dwarfs merged/closed (4), suggesting a backlog of in-flight work—many PRs are part of multi-commit "feature packages" (webhook Tasks 7/10, compression proofs, V6 STT/TTS contract) that require coordinated merges. Critical bugs cluster around **installation (Debian, Windows PATH), gateway multi-profile handoff, and voice/TTY duplication**, while new feature work targets **browser-side voice capture, A2A peer authorization, and desktop resource telemetry**. Overall health: **active but congested**—maintainer throughput on review/merge is the bottleneck.

---

## 2. Releases

**No new releases today.** The latest published version remains unchanged. All 50 PRs are in open/review state; the 4 closed PRs include one superseded historical branch (#85523 → #90236), one duplicate security fix (#91187), and two bug fixes not yet bundled into a release.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Type | Summary | Status |
|----|------|---------|--------|
| [#34597](https://github.com/NousResearch/hermes-agent/issues/34597) | Bug (Gateway, P1) | Windows gateway crash ~400ms after boot due to stale `.gateway-planned-stop.json` marker triggering false UNKNOWN exit | **Closed** (fix likely merged upstream) |
| [#27649](https://github.com/NousResearch/hermes-agent/issues/27649) | Bug (Agent, P2) | Multiprocess logging writes to rotated `agent.log.N` files after rotation | **Closed** |
| [#85523](https://github.com/NousResearch/hermes-agent/pull/85523) | Bug (Webhook, P2) | Historical Task 10 campaign branch — **superseded by #90236** | **Closed** (superseded) |
| [#91187](https://github.com/NousResearch/hermes-agent/pull/91187) | Security (Plugins/Memory, P3) | Sanitize imperative-shape/self-narration lines from Honcho peer-card data | **Closed** (duplicate) |

**Net advancement:** Two long-standing platform bugs (Windows gateway crash, log rotation) are resolved. Webhook Task 10 closure candidate (#90236) is now the single authoritative PR. Security hygiene improved via peer-card sanitization (though PR closed as duplicate, fix likely applied elsewhere).

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Activity | Core Need |
|------|----------|-----------|
| [#87093](https://github.com/NousResearch/hermes-agent/issues/87093) — **Debian install broken** (15 comments, 👍2) | Highest comment count | **Install reliability on Debian 13**: `uv.lock` + `npm install` fail in install script. Blocking new users on a major distro. |
| [#20765](https://github.com/NousResearch/hermes-agent/issues/20765) — **Voice mode in browser dashboard** (7 comments, 👍6) | Highest reactions | **Remote voice UX**: Users run Hermes on headless servers; need WebRTC `getUserMedia` capture in browser dashboard instead of server-side PortAudio. |
| [#22054](https://github.com/NousResearch/hermes-agent/issues/22054) — **PATH injection shadows system Python** (7 comments, 👍2) | Sustained discussion | **Venv PATH precedence** breaks system Python 3.11+ on Windows/macOS; venv uses hard-coded 3.11. |
| [#91216](https://github.com/NousResearch/hermes-agent/issues/91216) — **/handoff broken on multi-profile** (1 comment, filed today) | New, high-severity | **Multi-profile gateway routing**: `/handoff` uses wrong `state.db`, session key, and bot adapter. PR [#91217](https://github.com/NousResearch/hermes-agent/pull/91217) opened same day. |
| [#90200](https://github.com/NousResearch/hermes-agent/issues/90200) — **GitHub automation split authority** (1 comment) | Architectural | **Token scoping**: Metadata writes succeed but repository-object writes fail (403). Affects all automation. |

**Pattern:** Installation/onboarding friction (Debian, Windows PATH) and **remote/headless voice access** are the top user pain points. Multi-profile gateway bugs are emerging as a new class of regression.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | [#83208](https://github.com/NousResearch/hermes-agent/issues/83208) | 83.9s event-loop stall froze Intel N100 host (headless Linux); post-reboot wrapper failed readiness, gateway lacked linger | None yet |
| **Critical** | [#91216](https://github.com/NousResearch/hermes-agent/issues/91216) | `/handoff` completely broken on multi-profile gateways — wrong DB, wrong session key, wrong bot | [#91217](https://github.com/NousResearch/hermes-agent/pull/91217) (open) |
| **High** | [#87093](https://github.com/NousResearch/hermes-agent/issues/87093) | Debian 13.6 install script fails: `uv.lock` & `npm install` errors | None yet |
| **High** | [#91087](https://github.com/NousResearch/hermes-agent/issues/91087) | Windows ACP: `session/prompt` hangs indefinitely in `npx` probe when `agent-browser` not installed | [#91219](https://github.com/NousResearch/hermes-agent/pull/91219) (open, bounds Node probes) |
| **High** | [#90297](https://github.com/NousResearch/hermes-agent/issues/90297) | `auto_tts` plays audio twice on desktop — gateway `_send_voice_reply` + `useAutoSpeakReplies` both fire | None yet |
| **Medium** | [#47188](https://github.com/NousResearch/hermes-agent/issues/47188) | Telegram `proxy_targets` ignores custom `base_url` hostname, breaking `NO_PROXY` bypass | None yet |
| **Medium** | [#22054](https://github.com/NousResearch/hermes-agent/issues/22054) | Venv `bin/` prepended to PATH shadows system Python 3.11+ with outdated 3.11 | [#80500](https://github.com/NousResearch/hermes-agent/pull/80500) (Windows npm/npx shim fix) |
| **Medium** | [#91212](https://github.com/NousResearch/hermes-agent/issues/91212) | Root-owned `.gateway-planned-stop.json` under `~/.hermes/` on non-root Debian install | None yet |

**Observation:** 3 critical/high bugs have open fix PRs (#91217, #91219, #80500); the rest await triage. The event-loop stall (#83208) is the scariest—hard-reboot required, no fix in sight.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood for Next Version | Rationale |
|---------|----------|----------------------------|-----------|
| **Browser-side microphone capture (WebRTC)** | [#20765](https://github.com/NousResearch/hermes-agent/issues/20765), [#54352](https://github.com/NousResearch/hermes-agent/issues/54352), [#90051](https://github.com/NousResearch/hermes-agent/issues/90051) | **High** | 3 separate issues, 8 total 👍, clear architecture path (client capture → backend STT → client TTS). Desktop + remote gateway use case is growing. |
| **Approval workflow for memory/skill writes** | [#91202](https://github.com/NousResearch/hermes-agent/issues/91202) | **Medium** | Mirrors existing `approvals.mode` for shell commands; low complexity, high trust value. |
| **A2A named-peer authorization for local operator tasks** | [#91192](https://github.com/NousResearch/hermes-agent/pull/91192) | **Medium** | PR open, config-only, fail-closed design. Enables multi-agent delegation. |
| **Desktop account/resources control surface** | [#91204](https://github.com/NousResearch/hermes-agent/pull/91204) | **Medium** | Prototype RPCs for CPU/RAM/disk + provider quota telemetry. Fits desktop roadmap. |
| **Structured run provenance contracts (v1.0.0/v1.1.0)** | [#91194](https://github.com/NousResearch/hermes-agent/pull/91194) | **High** (docs) | Canonicalizing design docs; likely to land soon as documentation. |
| **MiniMax M3 direct-provider pricing** | [#91218](https://github.com/NousResearch/hermes-agent/pull/91218) | **High** | Small, targeted pricing fix; unblocks cost tracking for direct Minimax users. |

**Prediction:** Browser voice capture and MiniMax pricing will ship next. A2A peer auth and desktop telemetry depend on review bandwidth. Memory/skill approvals may slip to following cycle.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Theme | Evidence | Sentiment |
|-------|----------|-----------|
| **Install friction on Linux (Debian)** | #87093: "Basic Debian 13.6 installation... uv.lock & npm install failed" (15 comments) | 😡 Frustrated — blocks onboarding |
| **Windows PATH / Python version conflicts** | #22054: venv shadows system Python 3.11+ with hard-coded 3.11 (7 comments) | 😕 Annoyed — breaks system tooling |
| **Remote/headless voice impossible** | #20765, #54352, #90051: "TUI runs on remote server... microphone not available" (total 11 comments, 8 👍) | 😞 Disappointed — core feature unusable in common deployments |
| **Multi-profile gateway routing broken** | #91216: "/handoff never completes... wrong state.db, wrong bot" (filed today) | 😟 Concerned — regression in advanced config |
| **Windows ACP hangs on missing npm package** | #91087: "session/prompt hangs indefinitely... npx resolution" | 😡 Blocking — Windows developers hit this immediately |
| **TTS double-play on desktop** | #90297: "audio plays twice... two independent paths don't coordinate" | 😕 Annoyed — degrading UX |
| **Event-loop stall = host freeze** | #83208: "83.9s stall froze N100 host... hard-reboot required" | 😱 Alarmed — stability crisis on low-power hardware |

**Overall:** Users love the **vision** (remote gateway, voice, multi-profile) but hit **sharp edges** on install, Windows, and headless voice. The project is transitioning from "works on my machine" to "works on your server"—and the growing pains are visible.

---

## 8. Backlog Watch — Stalled High-Value Items Needing Maintainer Attention

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#78196](https://github.com/NousResearch/hermes-agent/pull/78196) — **STT/TTS reliability behind V6 contract** | 17 days open | Canonical V6 reliability slice; blocked on Discord V6 campaign (#90321). Real fixes inside but not mergeable yet. | Cross-PR dependency chain; needs campaign lead decision. |
| [#88551](https://github.com/NousResearch/hermes-agent/pull/88551) — **Compression: durable adoption proof-preserving** | 4 days open | Core session compression correctness; part of 3-PR proof-preserving set (#88740, #88758). | Complex review; must land as atomic set. |
| [#85002](https://github.com/NousResearch/hermes-agent/pull/85002) — **Webhook Task 7: preserve profile-correct config through compression** | 8 days open | Webhook feature package Task 7; semantic compression onto current main. | Depends on Task 10 (#90236) landing first. |
| [#90236](https://github.com/NousResearch/hermes-agent/pull/90236) — **Webhook Task 10 closure candidate** | 2 days open | **Single authoritative PR** for Task 10; rebuilt on exact upstream base. | Needs review/approval to unblock Webhook package. |
| [#86429](https://github.com/NousResearch/hermes-agent/pull/86429) — **Discord permission overwrites via discord_admin** | 7 days open | Discord Feature Package A2; wires permission overwrites. | Stack dependency on #86432; needs coordinated review. |
| [#80551](https://github.com/NousResearch/hermes-agent/pull/80551) — **Docs: All Gods Must Die doctrine canonization** | 15 days open | Architecture doctrine + production skill; high-value knowledge capture. | Low priority vs. bugs; but zero review activity. |
| [#64747](https://github.com/NousResearch/hermes-agent/pull/64747) — **Upstage: honor reasoning effort "none"** | 37 days open | Fixes silent inversion of `"none"` → Solar's highest reasoning. | Small, contained; inexplicably stale. |

**Recommendation:** Maintainers should prioritize **#90236 (Webhook Task 10)**, **#91217 (handoff fix)**, **#91219 (Windows ACP hang)**, and **#80500 (Windows npm shim)** — these unblock users directly. The V6/Compression/Webhook package clusters need a **dedicated review sprint** to untangle dependencies.

---

*Digest generated from GitHub API data for NousResearch/hermes-agent on 2026-08-21. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-21

## 1. Today's Overview
PicoClaw shows moderate maintenance activity with **9 PRs updated** (4 merged/closed, 5 open) and **3 active issues** in the last 24 hours. The merged PRs reflect meaningful feature completions: Anthropic native Messages API support, a multi-agent collaboration framework (closed as WIP), skills CLI refactoring, and a critical web frontend lockfile fix. However, all 3 open issues are marked `[stale]` despite recent updates, and 5 open PRs are dependabot dependency bumps awaiting review. No new releases were published.

## 2. Releases
**No new releases** in this period. The project remains on version **0.3.1** (per issue #3281).

## 3. Project Progress — Merged/Closed PRs
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#1158](https://github.com/sipeed/picoclaw/pull/1158) | **Feature** | Add `anthropic-messages` protocol for native Anthropic `/v1/messages` API format. Fixes #269. | Enables direct use of Anthropic-compatible proxies/services that only support native Messages API. |
| [#423](https://github.com/sipeed/picoclaw/pull/423) | **Feature (WIP)** | Base multi-agent collaboration framework: shared context pool (Blackboard), agent handoff, discovery tools. Closed as WIP. | Lays groundwork for multi-agent workflows; may be revisited in smaller increments. |
| [#714](https://github.com/sipeed/picoclaw/pull/714) | **Enhancement** | Skills CLI: install/reinstall commands, GitHub Trees API support, subpath installs, force overwrite. | Improves skill distribution and developer ergonomics for skill authors. |
| [#3318](https://github.com/sipeed/picoclaw/pull/3318) | **Bug Fix** | Repair duplicate `semver@7.8.5` key in `web/frontend/pnpm-lock.yaml` blocking installs. | Unblocks web frontend builds; critical for contributors/CI. |

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) **Web UI chat input lag with long history** | 6 comments, 1 👍, open since Jul 21 | **Performance regression**: Input latency grows with message history length in web UI. Users report unusable typing experience. |
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) **Support any model for `/audio/transcriptions`** | 1 comment, open Aug 13 | **Model flexibility**: Remove hardcoded `*-whisper-*` filter; allow arbitrary ASR models via config flag. |
| [#3330](https://github.com/sipeed/picoclaw/issues/3330) **Dynamic model override in delegate/spawn/subagent** | 1 comment, open Aug 13 | **Runtime model selection**: Allow per-call model override in agent delegation tools instead of static config. |

> **Analysis**: The web UI performance issue (#3281) is the most user-visible pain point. The two feature requests signal a push for **provider-agnostic audio transcription** and **dynamic model routing**—key for enterprise/multi-provider deployments.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#3281](https://github.com/sipeed/picoclaw/issues/3281): Web UI input lag with long chat history | Open, stale | None |
| **Medium** | [#3318](https://github.com/sipeed/picoclaw/pull/3318): Broken `pnpm-lock.yaml` (duplicate key) | **Closed/Merged** | Fixed in #3318 |
| **Low** | Dependabot PRs (#3332–#3336): 5 dependency updates pending | Open, stale | Awaiting review/merge |

> **Note**: The lockfile bug (#3318) is resolved. The web UI lag (#3281) remains unfixed despite 1 month of reports.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Anthropic Messages API native support** | [#1158](https://github.com/sipeed/picoclaw/pull/1158) (merged) | ✅ **Done** — already in main |
| **Multi-agent framework (Blackboard, handoff)** | [#423](https://github.com/sipeed/picoclaw/pull/423) (closed WIP) | 🔄 **Partial** — components may land incrementally |
| **Dynamic model override in agent tools** | [#3330](https://github.com/sipeed/picoclaw/issues/3330) | 🟡 **Medium** — aligns with multi-agent direction |
| **Generic ASR model support (non-whisper)** | [#3331](https://github.com/sipeed/picoclaw/issues/3331) | 🟡 **Medium** — small config change, high utility |
| **Skills CLI install/reinstall** | [#714](https://github.com/sipeed/picoclaw/pull/714) (closed) | ✅ **Done** — merged |

> **Prediction**: Next release will likely include Anthropic Messages API, skills CLI improvements, and possibly the ASR model flag (#3331). Multi-agent features will arrive in pieces.

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Web UI unusable with long conversations** | #3281: "very laggy" input, 6 comments discussing workarounds | 😡 **Frustrated** — core workflow blocked |
| **Rigid ASR model coupling** | #3331: "too old and slow" whisper-only filter | 😐 **Annoyed** — blocks modern STT models |
| **Static model assignment in agents** | #3330: "model always determined statically" | 😐 **Limited** — reduces delegation flexibility |
| **Positive: Anthropic native API now works** | #1158 merged, fixes #269 | 🙂 **Satisfied** — unblocks proxy users |
| **Positive: Skills workflow improved** | #714 merged with reinstall/force options | 🙂 **Satisfied** — better DX for skill devs |

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI input lag | 31 days | **High user impact**; web UI is primary interface for many. No fix PR yet. |
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) Generic ASR support | 8 days | Small config change (`whisper-transcription: true` flag); unblocks modern STT. |
| [#3330](https://github.com/sipeed/picoclaw/issues/3330) Dynamic model override | 8 days | Core to flexible multi-agent workflows; low implementation risk. |
| [#3332–#3336](https://github.com/sipeed/picoclaw/pulls?q=is%3Apr+is%3Aopen+author%3Adependabot%5Bbot%5D) 5 dependabot PRs | 8 days | Security/maintenance updates (AWS SDK, Anthropic SDK, Matrix lib). Blocked on CI/review. |
| [#423](https://github.com/sipeed/picoclaw/pull/423) Multi-agent framework | 6 months | Closed as WIP but contains valuable primitives (Blackboard, handoff). Consider extracting shippable pieces. |

---
**Health Indicator**: 🟡 **Caution** — Meaningful features landing, but a high-impact UI regression (#3281) remains unfixed for a month, and dependabot backlog is growing. Prioritize web UI performance and merge dependency updates to maintain velocity.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-21

## 1. Today's Overview
NanoClaw shows **intense maintenance and integration activity** with 50 PRs updated in the last 24 hours (35 open, 15 merged/closed) but only 1 active issue. The project is in a **heavy refactoring/skill-hardening phase** — a coordinated "core-team" stack of 12+ PRs (mostly from `gavrielc` and `zvi-fried`) is auditing and fixing every `add-*` skill for config mounting, container scoping, idempotent removal, and documentation completeness. No new releases; the codebase is absorbing a large batch of correctness fixes before the next cut.

## 2. Releases
**No new releases** in the last 24 hours. The project appears to be accumulating fixes on `main`/`channels` branches for a future version bump.

## 3. Project Progress — Merged/Closed PRs (15 items)
| PR | Type | Summary |
|----|------|---------|
| [#3421](https://github.com/nanocoai/nanoclaw/pull/3421) | **Docs/Announce** | One-click Slack agent setup announcement (banner + flow) — merged |
| [#1311](https://github.com/nanocoai/nanoclaw/pull/1311) | **Feature Skill** | Create new session skill — closed after long gestation (opened 2026-03-21) |
| *13 others* | **Fix/Refactor** | Bulk of the `gavrielc`/`zvi-fried` audit stack (add-dashboard, add-ollama-tool, add-atomic-chat-tool, add-clidash, add-tavily-tool, add-anydoc, add-macos-statusbar, fix(matrix) ESM patch, fix(codex) file delivery, fix(whatsapp-cloud) payload compat, fix(scheduling) cron retire, fix(add-slack) scope) — all merged/closed today |

**Key advances**:  
- **Skill lifecycle hygiene**: Every audited skill now ships `REMOVE.md`, pinned deps, per-group MCP config seams, and idempotent install/uninstall.  
- **Container config model**: Shift from `process.env` reads to per-group `container_configs` MCP seam (fixes ollama, atomic-chat, tavily, dashboard).  
- **Multi-install safety**: `ncl` invocations now install-scoped; DB reads/writes respect `installSlug`.  
- **UI performance**: `clidash` refresh fan-out capped (29→concurrent-safe), payload repaired.  
- **Provider expansion**: Cursor Agent SDK payload + `/add-cursor` skill landed.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#2715](https://github.com/nanocoai/nanoclaw/issues/2715) **Inbound WhatsApp media unreachable** | 1 comment, updated 2026-08-20 | **Critical integration gap**: WhatsApp attachments download to host `DATA_DIR/attachments` (not mounted into agent container); agent receives `/workspace/attachments/...` path that doesn’t exist. Blocks all media-rich WhatsApp use cases. |
| [#3247](https://github.com/nanocoai/nanoclaw/pull/3247) **Fix malformed cron retire** | Updated 2026-08-20 | **Scheduler resilience**: Bad cron strings (e.g., `0 21-5 * * *`) cause repeated parse errors every sweep tick; PR retires the row instead of re-erroring. |
| [#3423](https://github.com/nanocoai/nanoclaw/pull/3423) **Missing `app_mentions:read` scope in /add-slack** | Created/updated 2026-08-20 | **Setup correctness**: Slack `app_mention` event requires the scope; doc step 2 omitted it. |

*Note: All PRs show `Comments: undefined` and `👍: 0` — likely a data fetch quirk; actual discussion may exist on GitHub.*

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue/PR | Status | Fix PR? |
|----------|----------|--------|---------|
| **Critical** | [#2715](https://github.com/nanocoai/nanoclaw/issues/2715) WhatsApp media path mismatch (host vs container) | Open | No fix PR yet |
| **High** | [#3403](https://github.com/nanocoai/nanoclaw/pull/3403) Matrix adapter ESM imports fail on Node 22 | Open (core-team) | Yes — committed pnpm patch |
| **High** | [#3401](https://github.com/nanocoai/nanoclaw/pull/3401) WhatsApp Cloud skill payload incompatible with `main` branch | Open (core-team) | Yes — export registry helper |
| **Medium** | [#3247](https://github.com/nanocoai/nanoclaw/pull/3247) Malformed cron strings spam logs every sweep | Open | Yes — retire row on parse failure |
| **Medium** | [#3423](https://github.com/nanocoai/nanoclaw/pull/3423) Slack `app_mention` event missing required scope | Open | Yes — add `app_mentions:read` |
| **Medium** | [#3422](https://github.com/nanocoai/nanoclaw/pull/3422) Router mention-sticky subscribes on mention not session | Open | Yes — fix subscription target |
| **Low-Med** | Multiple `add-*` skills | Fixed in audit stack | 12+ PRs merged today |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Cursor Agent SDK provider** | [#3356](https://github.com/nanocoai/nanoclaw/pull/3356), [#3355](https://github.com/nanocoai/nanoclaw/pull/3355) | **High** — both PRs open, core-team, feature-skills |
| **`add-why` utility skill (explain message handling)** | [#3189](https://github.com/nanocoai/nanoclaw/pull/3189) | **Medium** — open since Aug 5, utility skill |
| **`ncl` token usage tracking** | [#3270](https://github.com/nanocoai/nanoclaw/pull/3270) | **Medium** — open since Aug 16, operational skill |
| **One-click Slack agent announcement** | [#3421](https://github.com/nanocoai/nanoclaw/pull/3421) | **Done** — merged today, docs live |
| **WhatsApp media mount fix** | [#2715](https://github.com/nanocoai/nanoclaw/issues/2715) | **High priority** — only open issue, blocks media |

## 7. User Feedback Summary
- **Pain point (WhatsApp)**: Users cannot process inbound images/docs/audio — files land on host filesystem outside container mount. No workaround documented.  
- **Pain point (Slack setup)**: `/add-slack` docs missing a required OAuth scope (`app_mentions:read`), causing silent event subscription failures.  
- **Pain point (Scheduler)**: Hand-written cron strings with wrap-around ranges (e.g., `21-5` for hour) crash the sweep loop repeatedly.  
- **Positive signal**: The "one-click Slack agent" announcement ([#3421](https://github.com/nanocoai/nanoclaw/pull/3421)) indicates a push toward **zero-config onboarding** — a strong UX direction.  
- **No explicit satisfaction/dissatisfaction comments** in the fetched data (reactions/comments all zero/undefined).

## 8. Backlog Watch — Stale & Important
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2715](https://github.com/nanocoai/nanoclaw/issues/2715) **WhatsApp media mount** | **74 days** (opened 2026-06-08) | **Only open issue**; breaks a core channel’s media handling. Needs maintainer decision: mount `DATA_DIR/attachments` into container *or* rewrite download path to session inbox. |
| [#1311](https://github.com/nanocoai/nanoclaw/pull/1311) **Create new session skill** | **153 days** (opened 2026-03-21) | Closed today after 5 months — may indicate feature scope creep or design churn. Worth a retro if similar PRs stall. |
| [#3189](https://github.com/nanocoai/nanoclaw/pull/3189) **`add-why` skill** | **16 days** | Utility skill for debugging agent behavior; low risk, high user value. Awaiting review. |
| [#3270](https://github.com/nanocoai/nanoclaw/pull/3270) **`ncl` token usage** | **5 days** | Operational observability; could unblock cost tracking for multi-tenant installs. |

---

**Bottom line**: NanoClaw is **deep in a "pay down technical debt" sprint** — 15 PRs merged today, almost all fixing skill installation/configuration correctness. The **single open issue (#2715) is a user-facing blocker** for WhatsApp media and should be prioritized. The next release will likely be a **stability/skill-quality drop** with Cursor provider as the headline feature.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-21

## 1. Today's Overview
IronClaw shows **very high velocity** with 54 total items updated in 24 hours (19 issues, 35 PRs). The project is executing on three major epics simultaneously: persistent per-user sandbox infrastructure (#7732), agent lifecycle hook points (#7770), and a five-phase WebUI design system overhaul (#7038/#7781/#7782). Fourteen PRs merged today, including critical CI unblocking for Rust 1.98, a consolidation of 7,000+ lines of subagent design docs, and the "run-now" manual automation trigger. No releases shipped today.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Scope | Summary |
|----|-------|---------|
| [#7786](https://github.com/nearai/ironclaw/pull/7786) | **Bug/CI** | Fixed OpenAI suggestion generation broken by `uniqueItems: true`; dropped dead allowlist IDs; gated cards on connected extensions |
| [#7777](https://github.com/nearai/ironclaw/pull/7777) | **CI** | Cleared clippy 1.98 lint cascade blocking merge queue (floating `stable` toolchain) |
| [#7778](https://github.com/nearai/ironclaw/pull/7778) | **CI** | Full workspace Rust 1.98 clippy migration — zero warnings under `-D warnings` |
| [#7763](https://github.com/nearai/ironclaw/pull/7763) | **Docs/Architecture** | Consolidated 7 subagent design docs (7,000+ lines) into one canonical README; net **−9,713 lines** |
| [#7729](https://github.com/nearai/ironclaw/pull/7729) | **Feature** | Added `run-now` manual fire across trigger domain, capability, assistant service, WebUI API, and UI (closes #7193) |
| [#7738](https://github.com/nearai/ironclaw/pull/7738) | **UX/Extensions** | Per-field help text on Slack deployment config card (uses `#7550` admin_configuration seam) |
| [#7304](https://github.com/nearai/ironclaw/pull/7304) | **UX/WebUI** | Flipped login card: OAuth provider buttons now render above gateway token form |
| [#7733](https://github.com/nearai/ironclaw/issues/7733) | **Process** | Deprecated epic superseded by #7781 (Design System Phases 2–3) |

## 4. Community Hot Topics — Most Active Discussions
| Item | Comments | Core Need |
|------|----------|-----------|
| [#7732](https://github.com/nearai/ironclaw/issues/7732) Epic: Persistent per-user sandbox | **8** | Replace ephemeral Docker containers with persistent `(tenant, user)` sandbox + `iron-proxy` egress; Step 2 PR [#7779](https://github.com/nearai/ironclaw/pull/7779) open |
| [#7770](https://github.com/nearai/ironclaw/issues/7770) Epic: Agent lifecycle hooks | **3** | Add `after-turn`, `before-turn`, `compaction`, `tool-result` seams so "when X, do Y" becomes hook registration not core edit; Phase 1 PR [#7765](https://github.com/nearai/ironclaw/pull/7765) open |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) Epic: Design System Phase 1 (Storybook) | **2** | Storybook integration + design-system catalog; PR [#7750](https://github.com/nearai/ironclaw/pull/7750) open (recreated off main) |
| [#7042](https://github.com/nearai/ironclaw/issues/7042) Design System Phase 2: DESIGN.md governance | **2** | Governance & guidelines for design tokens/themes; part of Epic #7781 (Phases 2–3) |
| [#7193](https://github.com/nearai/ironclaw/issues/7193) Automation run-now (closed) | **2** | Manual fire capability delivered via #7729 |

**Signal**: Sandbox persistence and agent extensibility are the two highest-engagement technical directions; design system work is progressing through structured phases with clear ownership.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)
| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#7783](https://github.com/nearai/ironclaw/issues/7783) LLM timeout: finalization can't measure TTFT; retry budget exceeds 75s deadline | **Critical** | Open | — |
| [#7776](https://github.com/nearai/ironclaw/issues/7776) `memory.write` full-document rewrite silently overwrites concurrent writes (CAS only prevents torn writes) | **High** | Open | — |
| [#7780](https://github.com/nearai/ironclaw/issues/7780) `AfterTurn` hook bypassed by scheduler failure-terminalization paths | **High** | Open | Follow-up to #7765 |
| [#7308](https://github.com/nearai/ironclaw/issues/7308) Hosted MCP OAuth for Attio fails with invalid scope (uncorrectable) | **Medium** | **Closed** | — |
| [#7777](https://github.com/nearai/ironclaw/pull/7777) / [#7778](https://github.com/nearai/ironclaw/pull/7778) CI red on all branches due to Rust 1.98 clippy lints | **Medium** | **Fixed** | Both merged |

**Note**: #7783 is a data-loss risk for structured-output finalization; #7776 is a silent corruption vector in memory subsystem.

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| Persistent per-user sandbox + iron-proxy | Epic [#7732](https://github.com/nearai/ironclaw/issues/7732) (v1.4.0) | **High** — Step 2 PR [#7779](https://github.com/nearai/ironclaw/pull/7779) open, labeled v1.4.0 |
| Agent lifecycle hooks (AfterTurn, BeforeTurn, Compaction, ToolResult) | Epic [#7770](https://github.com/nearai/ironclaw/issues/7770) | **High** — Phase 1 PR [#7765](https://github.com/nearai/ironclaw/pull/7765) open |
| Design System Phases 2–3: DESIGN.md governance + theme reskin | Epic [#7781](https://github.com/nearai/ironclaw/issues/7781) (v1.4.0) | **High** — Supersedes #7733, Phase 1 PR #7750 in review |
| Design System Phases 4–5: Agentic interactions, components, IA | Epic [#7782](https://github.com/nearai/ironclaw/issues/7782) | **Medium** — Final wave, depends on Phases 2–3 |
| Unbound runs: skip gating capability instead of aborting | [#7775](https://github.com/nearai/ironclaw/issues/7775) | **Medium** — Follow-up to #7765, "deliberately open decision" |
| Extension setup phase/blockers surfaced in Configure | [#7769](https://github.com/nearai/ironclaw/issues/7769) | **Medium** — UX gap, only Hosted MCP auth blocker handled today |
| WASM typed tool response + guest migration | PR [#7711](https://github.com/nearai/ironclaw/pull/7711) (XL) | **Medium** — Final PR of capability-response-normalization stack |

## 7. User Feedback Summary
- **Model quality dominates failures**: Daily taxonomy [#7771](https://github.com/nearai/ironclaw/issues/7771) shows 58 officeqa failures are "overwhelmingly genuine model-quality errors" (DeepSeek-V4-Flash navigation, tool selection).
- **Timezone fragility in tests**: Automation presenter tests assume UTC; fail in `Asia/Shanghai` [#7767](https://github.com/nearai/ironclaw/issues/7767).
- **OAuth documentation drift**: Slack docs missed widened scopes (`reactions:write`, `im:write`) after manifest changes [#7737](https://github.com/nearai/ironclaw/pull/7737).
- **Login UX improvement**: OAuth buttons moved above gateway token form per user expectation [#7304](https://github.com/nearai/ironclaw/pull/7304).
- **Manual automation trigger demand**: "No way to fire an automation on demand" — delivered via #7729.

## 8. Backlog Watch — Stale/Important Items Needing Attention
| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#6458](https://github.com/nearai/ironclaw/pull/6458) Docs: Reconcile Tier B self-repair with lease recovery | **30 days** | Medium | Stale design doc; references superseded behavior (#6284), blocks accurate operator mental model |
| [#7577](https://github.com/nearai/ironclaw/pull/7577) Docs: Web-app run notifications design | **8 days** | Low | Approved design sitting in PR; defines durable user-scoped completion projection + SW multi-tab ownership |
| [#7711](https://github.com/nearai/ironclaw/pull/7711) Feat: WASM typed tool response, guest migration, dispatch-error cleanup (XL) | **4 days** | High | Supersedes #7703; final piece of capability-response-normalization stack; large surface area |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) Feat: OMP core-tool contract + engines + benchmark (XL) | **10 days** | Medium | Six bare coding tools (`read`/`write`/`edit`/`glob`/`grep`/`bash`); removes old surface entirely |
| [#7699](https://github.com/nearai/ironclaw/pull/7699) Feat: Publish actionable run gates to Inbox (XL) | **4 days** | Medium | Durable notifications for approval/auth/blocked runs; stable IDs for retry convergence |
| [#7750](https://github.com/nearai/ironclaw/pull/7750) Chore: Storybook + design-system catalog (XL) | **2 days** | Medium | Phase 1 of design system epic; recreated off main to escape merge tangle |

---

**Health Indicators**: 🟢 **Strong** — High merge throughput (14/35 PRs), critical CI regressions fixed same-day, epics advancing with phased PRs, design docs actively consolidated. **Watch**: #7783 (LLM timeout) and #7776 (memory CAS) are open high-severity bugs without fix PRs yet.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-21

---

## 1. Today's Overview

LobsterAI shows **maintenance-focused activity** on 2026-08-20 (reflected in this 2026-08-21 digest), with **7 PRs closed/merged** and **2 stale issues updated** — but **zero new releases, new issues, or new PRs** in the last 24 hours. All 7 PRs and both issues were originally created in early April 2026 and carry a `[stale]` label, indicating a bulk triage or cleanup pass by maintainers rather than fresh development. The project appears in a **stabilization phase**: merged PRs address UI polish (settings search, engine startup timeout UX), bug fixes (agent skill sync, scheduled task notification reset, Agent sidebar navigation), and a macOS packaging failure. No critical regressions or security issues surfaced. Community engagement remains low (0 👍, few comments), suggesting limited external contributor momentum.

---

## 2. Releases

**No new releases** published in the last 24 hours. The last version remains unversioned in this dataset.

---

## 3. Project Progress — Merged / Closed PRs (2026-08-20)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#1545](https://github.com/netease-youdao/LobsterAI/pull/1545) | **Bug Fix** | Sync `activeSkillIds` immediately when updating current agent's skills (fixes #1502) | Eliminates need to switch agents to see skill badge updates |
| [#1546](https://github.com/netease-youdao/LobsterAI/pull/1546) | **UX Improvement** | Engine startup overlay shows **Cancel** & **View Logs** buttons after 30 s timeout | Prevents 5-min hard lock; gives escape hatch for stuck OpenClaw launches |
| [#1553](https://github.com/netease-youdao/LobsterAI/pull/1553) | **Feature** | **Write tool file card** + **draggable preview panel** (Markdown, HTML, SVG, images, code) — closes #1552 | Major UX upgrade for writer/agent workflows; inline preview without leaving chat |
| [#1555](https://github.com/netease-youdao/LobsterAI/pull/1555) | **Build Fix** | Fix `npm run dist:mac:x64` failure by using `shasum` fallback for `sha256sum` | Unblocks macOS x64 packaging on runners lacking GNU coreutils |
| [#1557](https://github.com/netease-youdao/LobsterAI/pull/1557) | **UX Improvement** | Settings sidebar adds **search/filter** (i18n-aware, AND matching, NFKC normalized) | Reduces friction navigating 9+ settings tabs |
| [#1560](https://github.com/netease-youdao/LobsterAI/pull/1560) | **Bug Fix** | Fix Agent list: clicking already-selected Agent after edit now returns to chat view | Restores expected navigation flow in "My Agents" |

**Net advancement**: 3 user-facing features (file preview, engine timeout UX, settings search) + 3 bug fixes (skill sync, notification reset, agent switch). All PRs authored by internal team members (`stone333`, `0xFLX`, `noransu`, `liulingfeng`, `kayo5994`, `flowell`).

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#1552](https://github.com/netease-youdao/LobsterAI/issues/1552) / [#1553](https://github.com/netease-youdao/LobsterAI/pull/1553) | 1 comment, 0 👍 — **Feature delivered** | **Inline file preview for agent-generated artifacts** (Markdown, HTML, code). Users currently forced to `Read` + paste or open externally. PR #1553 implements FileCard + split preview panel. High value for writing/coding agents. |
| [#1556](https://github.com/netease-youdao/LobsterAI/issues/1556) | 2 comments, 0 👍 — **Doc 404** | **Broken IM bot config guide** (lobsterai.youdao.com link returns 404). Indicates documentation drift; blocks onboarding for IM integration (Feishu, etc.). No fix PR yet. |

**Signal**: The only active discussion revolves around **documentation rot** and **agent-output visibility** — both core to developer onboarding and daily workflow.

---

## 5. Bugs & Stability

| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **Medium** | Agent skill badges not updating after save (#1502) | Fixed | [#1545](https://github.com/netease-youdao/LobsterAI/pull/1545) merged |
| **Medium** | Scheduled task notification channel cannot revert to "None" | Fixed | [#1547](https://github.com/netease-youdao/LobsterAI/pull/1547) **open** (author: `gongzhi-netease`) |
| **Medium** | Clicking edited Agent in sidebar doesn't return to chat | Fixed | [#1560](https://github.com/netease-youdao/LobsterAI/pull/1560) merged |
| **Low (Build)** | `dist:mac:x64` fails on missing `sha256sum` | Fixed | [#1555](https://github.com/netease-youdao/LobsterAI/pull/1555) merged |
| **Low (UX)** | Engine startup hangs 5 min with no cancel/log access | Fixed | [#1546](https://github.com/netease-youdao/LobsterAI/pull/1546) merged |

**No crashes, data loss, or security regressions reported.** The open PR #1547 is a minor form-state bug with a 2-line fix — low risk.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Write tool file card + preview panel** | #1552 / #1553 | **Delivered** (merged) |
| **Settings sidebar search** | #1557 | **Delivered** (merged) |
| **Engine startup timeout escape hatch** | #1546 | **Delivered** (merged) |
| **IM bot config guide repair** | #1556 | **High** — doc-only, blocks IM onboarding |
| **Read tool preview parity?** | Implied by #1553 (explicitly excluded) | **Medium** — may follow if users request |

**Prediction**: Next patch will likely include #1547 (notification revert fix) and a doc deploy for #1556. No major new features signaled beyond what’s already merged.

---

## 7. User Feedback Summary

- **Pain points**:  
  - 📄 **No inline preview** for agent-written files → forces context-switching or chat pollution (Read + paste).  
  - ⚙️ **Settings navigation** too deep (9+ tabs).  
  - 🤖 **Engine startup** opaque; no recourse when stuck.  
  - 🔗 **Docs outdated** (IM guide 404).  
  - 🔄 **Agent skill UI** out of sync after edit.  
  - 🔔 **Scheduled task form** doesn't reflect "No notification" selection.

- **Satisfaction signals**:  
  - Merged PRs directly address top UX friction points (preview, settings search, engine timeout).  
  - Internal team responsive: 6/7 PRs merged same day they were updated (2026-08-20).  
  - Zero community-reported crashes or data issues.

- **Dissatisfaction**: Low external engagement (0 👍, stale labels) may indicate **limited community visibility** or **high barrier to contribution**.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#1556](https://github.com/netease-youdao/LobsterAI/issues/1556) — IM config guide 404 | 135 days (created 2026-04-08) | **Onboarding blocker** for IM integrations | Deploy corrected doc or redirect; assign doc owner |
| [#1547](https://github.com/netease-youdao/LobsterAI/pull/1547) — Notification revert fix | 136 days (created 2026-04-07) | Low (2-line fix, open PR) | **Review & merge** — trivial but stale |
| [#1552](https://github.com/netease-youdao/LobsterAI/issues/1552) — File preview request | 135 days | **Resolved** via #1553 | Close issue (already done by PR) |
| Stale label hygiene | — | **Noise** | Consider auto-stale bot config review; 7/9 items here are stale |

**Priority**: Fix #1556 (doc) and merge #1547 (trivial PR) to clean backlog. All other stale items resolved or low impact.

---

## Links Index

- Issues: [#1556](https://github.com/netease-youdao/LobsterAI/issues/1556) · [#1552](https://github.com/netease-youdao/LobsterAI/issues/1552)  
- PRs: [#1545](https://github.com/netease-youdao/LobsterAI/pull/1545) · [#1546](https://github.com/netease-youdao/LobsterAI/pull/1546) · [#1547](https://github.com/netease-youdao/LobsterAI/pull/1547) · [#1553](https://github.com/netease-youdao/LobsterAI/pull/1553) · [#1555](https://github.com/netease-youdao/LobsterAI/pull/1555) · [#1557](https://github.com/netease-youdao/LobsterAI/pull/1557) · [#1560](https://github.com/netease-youdao/LobsterAI/pull/1560)

---

*Digest generated from GitHub data as of 2026-08-21 00:00 UTC. All timestamps in UTC.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-21

## 1. Today's Overview
Moltis showed focused maintenance activity over the past 24 hours with **5 pull requests updated** (4 opened, 1 merged) and **one new release (20260820.01)** published. No new issues were filed or updated, indicating a stable period without user-reported regressions. The open PRs center on security hardening (input validation, dependency pinning), cross-platform compatibility (Windows shell hooks), and WhatsApp UX improvements (Markdown rendering, push-name handling). Overall project health appears strong: maintainers are actively merging fixes, releasing frequently, and addressing both supply-chain risks and platform parity.

## 2. Releases
### `20260820.01` — 2026-08-20
- **Scope**: Incremental patch release (date-based versioning).  
- **Notable changes**: Likely bundles the merged PR #1218 (WhatsApp push-name fix) and possibly other recent merges not shown in the 24h window.  
- **Breaking changes**: None indicated.  
- **Migration notes**: No special steps required; standard `moltis update` or container pull suffices.  
- **Artifacts**: Docker images and binaries tagged `20260820.01` on GHCR/GitHub Releases.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#1218](https://github.com/moltis-org/moltis/pull/1218) | **fix(whatsapp): stop hardcoding the push name to "Moltis"** | WhatsApp gateway | Bots now display their configured name (e.g., "Ada") in group chats instead of the generic "Moltis" label. Removes misleading identity in multi-bot deployments. |

## 4. Community Hot Topics (Active PRs)
| PR | Activity | Core Need |
|----|----------|-----------|
| [#1222](https://github.com/moltis-org/moltis/pull/1222) *fix(web): validate sandbox image requests* | Opened 2026-08-20, 0 comments, 0 👍 | **Supply-chain security**: Restrict container image/package builds to operator admins; validate references before Dockerfile/container use. |
| [#1221](https://github.com/moltis-org/moltis/pull/1221) *fix(gateway): pin Snyk Agent Scan* | Opened 2026-08-20, 0 comments, 0 👍 | **Dependency hardening**: Pin security scanner to `v0.5.17` via `uvx`; drop fallback to prevent unverified scans. |
| [#1220](https://github.com/moltis-org/moltis/pull/1220) *fix(whatsapp): render Markdown in outbound messages* | Opened 2026-08-20, 0 comments, 0 👍 | **UX parity**: Convert model-generated Markdown → WhatsApp-native markup for text & captions while preserving raw Markdown in history/UI. |
| [#468](https://github.com/moltis-org/moltis/pull/468) *fix(plugins): use cmd.exe on Windows for shell hooks* | Opened 2026-03-23, updated 2026-08-20, 0 comments, 0 👍 | **Windows support**: Replace `sh -c` with `cmd.exe /C` for shell hooks; CI passes on Windows 10. Long-standing platform gap. |

**Pattern**: All open PRs are **maintainer-authored fixes** (tsauvajon, rubenssoto, jmikedupont2, vikng-dev) — no external community issues driving work. Security, cross-platform, and messaging fidelity dominate current investment.

## 5. Bugs & Stability
| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **Medium** | WhatsApp push name hardcoded to "Moltis" | ✅ Fixed in `20260820.01` | [#1218](https://github.com/moltis-org/moltis/pull/1218) (merged) |
| **Low** | Shell hooks fail on Windows (`sh -c` unavailable) | 🟡 Open, CI green | [#468](https://github.com/moltis-org/moltis/pull/468) (awaiting review/merge) |
| **Low** | Unvalidated sandbox image/package inputs in web UI | 🟡 Open, tests passing | [#1222](https://github.com/moltis-org/moltis/pull/1222) (awaiting review) |
| **Low** | Unpinned Snyk Agent Scan version (supply-chain risk) | 🟡 Open | [#1221](https://github.com/moltis-org/moltis/pull/1221) (awaiting test) |

No crashes, regressions, or user-reported bugs in the last 24h.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **WhatsApp Markdown → native markup conversion** | PR [#1220](https://github.com/moltis-org/moltis/pull/1220) | High — PR open, focused scope, improves bot messaging fidelity |
| **Windows shell-hook compatibility** | PR [#468](https://github.com/moltis-org/moltis/pull/468) | Medium — long-open (5 months), CI passes, needs maintainer bandwidth |
| **Admin-gated sandbox image builds** | PR [#1222](https://github.com/moltis-org/moltis/pull/1222) | High — security hardening, tests pass, aligns with zero-trust posture |
| **Pinned security scanner (Snyk Agent Scan)** | PR [#1221](https://github.com/moltis-org/moltis/pull/1221) | High — supply-chain mitigation, trivial change pending test |

**Prediction**: Next patch will likely include #1220, #1222, #1221; #468 may wait for a maintainer with Windows context.

## 7. User Feedback Summary
- **No direct user issues/comments** in the last 24h (0 issues, 0 comments on PRs).  
- **Implicit pain points** addressed by maintainers:  
  - Bot identity confusion in WhatsApp groups (fixed in #1218).  
  - Markdown rendering mismatch for end-users on WhatsApp (#1220).  
  - Windows developers blocked on shell hooks (#468).  
- **Satisfaction signal**: Frequent releases (daily cadence) and rapid merge of #1218 suggest responsive maintenance; absence of complaints may indicate stable core or low community visibility.

## 8. Backlog Watch
| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| [#468](https://github.com/moltis-org/moltis/pull/468) *Windows shell hooks* | **5 months** (opened 2026-03-23) | Blocks Windows-native plugin development; CI green, tested locally. | **Maintainer review/merge** — assign Windows-savvy reviewer or merge with “works on my machine” note. |
| [#1221](https://github.com/moltis-org/moltis/pull/1221) *Pin Snyk Agent Scan* | 1 day | Supply-chain hygiene; test pending (`cargo test -p moltis-gateway snyk_agent_scan`). | Run/test the missing check; merge once green. |
| [#1222](https://github.com/moltis-org/moltis/pull/1222) *Sandbox image validation* | 1 day | Prevents unauthorized container builds; tests pass. | Security review + merge. |
| [#1220](https://github.com/moltis-org/moltis/pull/1220) *WhatsApp Markdown rendering* | 1 day | User-facing messaging quality. | UX review + merge. |

---

**Bottom line**: Moltis is in a **healthy maintenance rhythm** — daily releases, security-first PRs, and steady closure of platform gaps. The 5-month-old Windows PR (#468) is the only stale item; everything else is fresh and moving.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-21

## 1. Today's Overview
CoPaw (QwenPaw) shows **high development velocity** with 50 PRs and 17 issues updated in the last 24 hours. The project released **v2.1.1-beta.1** addressing editor navigation and rate-limiter logging. A healthy merge ratio (28 closed/merged PRs vs 22 open) indicates active review cycles. Key focus areas: memory system stability (ReMe embedding timeouts, history.db bloat), streaming resilience (httpx.ReadError handling), and UX polish (agent switching, marketplace unification). Community engagement is strong with multiple first-time contributors and detailed bug reports from production users.

## 2. Releases
### v2.1.1-beta.1 (Beta) — [Release Page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.1-beta.1)
| Change | Type | Details |
|--------|------|---------|
| Editor tab overflow navigation | Feat (console) | Improved navigation when many tabs are open ([#6983](https://github.com/agentscope-ai/QwenPaw/pull/6983)) |
| Rate limiter init log level | Fix (providers) | Lowered verbosity to reduce noise ([#6988](https://github.com/agentscope-ai/QwenPaw/pull/6988)) |

**No breaking changes** documented. Beta release — installation verification tracked in [#7180](https://github.com/agentscope-ai/QwenPaw/issues/7180).

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Summary |
|----|------|---------|
| [#7186](https://github.com/agentscope-ai/QwenPaw/pull/7186) | DataPaw | PyPI runtime path, docker-compose demo, env inheritance fix — makes `qwenpaw[datapaw]` installable end-to-end |
| [#6947](https://github.com/agentscope-ai/QwenPaw/pull/6947) | Scroll (memory) | Drop orphaned tool messages at rebuild seam; fixes DeepSeek/OpenAI tool-call validation errors |
| [#7161](https://github.com/agentscope-ai/QwenPaw/pull/7161) | Console | Add artifacts to assistant response card |
| [#7174](https://github.com/agentscope-ai/QwenPaw/pull/7174) | Drivers | Initialize persistent drivers concurrently — reduces cold-start latency |
| [#6880](https://github.com/agentscope-ai/QwenPaw/pull/6880) | Marketplace | Unify apps, plugins, skills under `/market` with tabbed routes |
| [#6371](https://github.com/agentscope-ai/QwenPaw/pull/6371) | File handling | Fix downloader fallback chain to handle `TimeoutExpired` (wget → curl → urllib) |
| [#7176](https://github.com/agentscope-ai/QwenPaw/pull/7176) | Console perf | Keep long chat sessions responsive — avoid synchronous Markdown re-parse on every stream update |

**Net advancement**: Memory correctness (Scroll), marketplace UX unification, startup performance, and streaming artifact display.

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) Automatic Model Routing | 4 comments, 👍1 | **Route each request to optimal model** (local small for simple, vision for images, large for reasoning) — architectural shift from fixed-model agents |
| [#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932) Auto-recovery after network blip | 3 comments | **Resilient LLM client**: automatic reconnection after transient network loss without manual restart |
| [#7168](https://github.com/agentscope-ai/QwenPaw/issues/7168) history.db 7.6 GB bloat | 2 comments, **CLOSED** | **Memory storage explosion** — `ToolResultCapMiddleware` writes full tool output to `conversation_history` when exceeding token cap |
| [#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156) Embedding health check timeout | 2 comments | **Configurable timeout** for embedding warm-check (hardcoded 5s fails on warm Ollama at 10s) |
| [#7185](https://github.com/agentscope-ai/QwenPaw/issues/7185) OAuth docs for remote MCP | 1 comment, **new today** | **Documentation gap**: shipped OAuth 2.1 flow undocumented; users cannot discover save-then-authorize workflow |

**Pattern**: Production-scale users hitting memory/storage limits and resilience gaps; strong demand for intelligent model routing.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#7168](https://github.com/agentscope-ai/QwenPaw/issues/7168) history.db → 7.6 GB, duplicate writes | **Closed** (root cause identified) | No PR yet — middleware writes full tool output on cap exceed |
| **High** | [#7162](https://github.com/agentscope-ai/QwenPaw/issues/7162) `httpx.ReadError` mid-stream → `UNKNOWN_AGENT_ERROR`, no auto-retry | **Closed** | Fix pending — `_get_httpx_retryable()` misses `ReadError` |
| **High** | [#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156) Embedding health check timeout hardcoded 5s, fails on warm backend | **Open** | [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) (WIP) adds configurable timeout via ReMe 0.4.1.8 |
| **Medium** | [#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932) No auto-recovery after network interruption | **Open** | None yet — requires retry/backoff logic in LLM client layer |
| **Medium** | [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) Freeze >10 min on GLM 5.3 | **Closed** | Likely provider-specific; no PR linked |

**Stability signal**: Two critical data-integrity bugs (#7168, #7162) closed with root causes found but fixes not yet merged — monitor next patch.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Automatic Model Routing** | [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) (👍1) | Medium — architectural, requires provider abstraction layer |
| **Workspace-scoped Always-on Skills** | [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) + [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) (PR open) | **High** — PR already implementing opt-in preload |
| **Agent-level Scroll cross-session recall toggle** | [#7184](https://github.com/agentscope-ai/QwenPaw/issues/7184) | Medium — config-only change, low risk |
| **Qwen_Code as third-party harness** | [#7181](https://github.com/agentscope-ai/QwenPaw/issues/7181) | Low — niche, limited network access use case |
| **VPN-compatible desktop client** | [#6974](https://github.com/agentscope-ai/QwenPaw/issues/6974) (closed) | Deferred — marked closed, may need network stack review |
| **OAuth docs for MCP** | [#7185](https://github.com/agentscope-ai/QwenPaw/issues/7185) | **High** — documentation-only, quick win |

**Predicted next-release candidates**: Always-on Skills (#7183), Scroll recall toggle (#7184), OAuth docs (#7185), embedding timeout config (#7133).

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Memory bloat in long-running agents** | [#7168](https://github.com/agentscope-ai/QwenPaw/issues/7168): 7.6 GB `history.db`, duplicate paragraph writes | 😡 Frustrated — "blows up storage" |
| **Streaming failures mid-response** | [#7162](https://github.com/agentscope-ai/QwenPaw/issues/7162): `ReadError` → `UNKNOWN_AGENT_ERROR`, no retry | 😟 Annoyed — "intermittent, breaks flow" |
| **Network blip requires full restart** | [#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932): Two reproductions in one day | 😤 Blocked — "must restart service manually" |
| **Agent switching UX with many agents** | [#7179](https://github.com/agentscope-ai/QwenPaw/issues/7179): "scroll up/down inconvenient" | 😐 Minor UX friction |
| **Marketplace entry buried on mobile** | [#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177): "entry at bottom, hard to tap" | 😐 Mobile UX gap |
| **Positive: Free model listing fix** | [#7175](https://github.com/agentscope-ai/QwenPaw/pull/7175): Restored correct FREE/PRO tab classification | 👍 Appreciated |

**Overall**: Power users hitting scale limits (memory, streaming, network); casual users want polish (switching, mobile). Responsiveness to bugs is fast (multiple same-day closures).

## 8. Backlog Watch (Stale/Needs Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) Automatic Model Routing | 28 days (updated today) | **Strategic feature** — enables cost/latency optimization; no PR yet, needs design |
| [#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932) Network auto-recovery | 9 days | **Reliability blocker** for production; no PR, requires core client changes |
| [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) PowerContext memory backend | 4 days (updated today) | **Alternative LTM backend** — first-time contributor, under review, expands ecosystem |
| [#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112) QwenPaw Hub (self-hosted multi-user) | 3 days | **Major new product line** — opt-in control plane; needs security/arch review |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) Reranker UI config | 29 days | **Stalled UI** — complements backend reranker; needs maintainer merge decision |

**Action items**: Prioritize #6932 fix (reliability), review #7112 Hub (strategic), unblock #6399 (UI completeness).

---

**Health Indicators**  
✅ High merge throughput (28/50 PRs closed)  
✅ Active first-time contributors (3 PRs today)  
✅ Beta release cadence maintained  
⚠️ Two critical bugs root-caused but fixes not merged  
⚠️ Strategic features (model routing, Hub) in design/review limbo  

**Next Watch**: v2.1.1 stable release criteria, Scroll memory fix merge, Hub security review.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-21

---

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 50 pull requests updated in the last 24 hours (48 open, 2 merged/closed) and 3 active issues. The project is in a heavy **security hardening and architecture refinement phase** — multiple stacked PRs address plugin egress policies, SSRF gates, shell command hardening, and provider response classification. No new releases were published. The PR queue is dominated by P1/priority security work, configuration migrations, and provider/runtime stability fixes, with several stacked dependencies (#9584→#9582, #9999→#9447, #10177→#9948, #10072→#10070). Maintainer review bandwidth appears to be a bottleneck given the volume of `needs-maintainer-review` and `needs-author-action` tags.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Project Progress (Merged/Closed Today)

Two PRs were merged/closed (specific PR numbers not identified in the data). Based on the open PR landscape, recent merges likely relate to:
- Dependency review CI guards (#9637)
- Shell dialect test fixes (#10198)
- Or earlier stages of the plugin egress policy stack

*Recommendation: Check the merged PR list directly on GitHub for exact details.*

---

## 4. Community Hot Topics

| Item | Type | Comments | Key Signal |
|------|------|----------|------------|
| **[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)** | Issue (RFC) | 23 💬 | **Highest community engagement.** RFC for per-execution confirmation tier for high-risk shell commands (Claude Code-style allow/ask/deny). Accepted, P1, high risk. Revision 3 narrowed scope per maintainer review. |
| **[#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584)** / **[#9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582)** | PR Stack | — | **Plugin egress policy** (ADR-014). Stage 2 (policy enforcement) + Stage 3 (grant ceremony). P1, high risk, XL. Host-owned egress control for `wasi:http`. |
| **[#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809)** | PR | — | **Multiple models per provider profile** — major provider abstraction overhaul. P2, XL. Enables single credential/endpoint to serve multiple model aliases. |
| **[#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668)** | Issue | 2 💬 | **MariaDB memory backend** — long-standing (since Mar 2026). Users on self-hosted MariaDB lack production memory path. Accepted, P2. |

**Underlying needs:** Strong demand for **security guardrails** (shell, plugin egress, SSRF), **provider flexibility** (multi-model, new backends), and **operational maturity** (ADR audit, config migrations).

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | PR / Issue | Title | Status | Fix PR? |
|----------|------------|-------|--------|---------|
| **Critical/High** | [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) | Pixel-level image validation to prevent corrupt images failing provider requests | Open, P1, high risk | Yes (open) |
| **Critical/High** | [#10033](https://github.com/zeroclaw-labs/zeroclaw/pull/10033) | Source channel Rust defaults from serde defaults (Discord/Slack/Matrix/Signal/Lark `approval_timeout_secs`) | Open, P1, high risk | Yes (open) |
| **Critical/High** | [#10177](https://github.com/zeroclaw-labs/zeroclaw/pull/10177) | Make agent-scoped cron mutations atomic | Open, P1, high risk | Yes (open, stacked on #9948) |
| **Critical/High** | [#9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) | Harden Git shell policy arguments (normalize shell words at policy boundary) | Open, P1, high risk | Yes (open) |
| **Medium** | [#9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999) | Classify output-limited terminal responses (OpenAI-compatible `finish_reason: "length"`) | **Blocked**, P1, stacked on #9447 | Yes (open) |
| **Medium** | [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) | Classify incomplete Anthropic terminal responses as typed failures | In-progress, P1 | Yes (open) |
| **Medium** | [#9707](https://github.com/zeroclaw-labs/zeroclaw/pull/9707) | Migrate bare `vision_model_provider` to dotted alias ref | Open, P1, needs-author-action | Yes (open) |
| **Medium** | [#9715](https://github.com/zeroclaw-labs/zeroclaw/pull/9715) | Make JSONL session migration retry-safe (lock + transaction) | Open | Yes (open) |
| **Low** | [#10150](https://github.com/zeroclaw-labs/zeroclaw/pull/10150) | ZeroCode: accept paste during active turns | Open, P1? (marked P1 but risk:low) | Yes (open) |

**Pattern:** Provider response handling (Anthropic, OpenAI-compatible) and config default mismatches are recurring stability themes.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Priority | Likelihood for Next Version |
|---------|--------|----------|----------------------------|
| **Shell command confirmation tier (allow/ask/deny)** | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | P1, accepted | **High** — RFC accepted, Revision 3 scoped, security-critical |
| **Plugin egress grant ceremony** | [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) | P1 | **High** — Stage 3 of ADR-014, stacked on merged Stage 2 |
| **Multiple models per provider profile** | [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | P2 | **High** — Large but well-scoped, principal contributor |
| **Telegram per-user sessions in groups** | [#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) | P2 | **Medium** — Needs maintainer review, high risk (session semantics) |
| **Tool-owned invocation triggers (`send_via`)** | [#9766](https://github.com/zeroclaw-labs/zeroclaw/pull/9766) | P2 | **Medium** — 1 of 2 slices from #7431, security/arch impact |
| **Native Hailo-Ollama provider** | [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | — | **Medium** — Opt-in, hardware-specific, needs author action |
| **NAT64 prefix classification at SSRF gate** | [#10072](https://github.com/zeroclaw-labs/zeroclaw/pull/10072) | — | **Medium** — Stacked on #10070, network-security niche |
| **MariaDB memory backend** | [#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668) | P2 | **Low-Medium** — Long backlog, accepted but no PR visible |
| **ADR baseline restoration & audit** | [#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) | P2 | **Low** — Tracker issue, docs/architecture hygiene |

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence |
|------------------------|----------|
| **Shell command safety** — Users want Claude Code-style confirmation for risky commands (rm, git push, etc.) | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) (23 comments, accepted RFC) |
| **Plugin network isolation** — Operators need host-controlled egress for WASM plugins | [#9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582) (ADR-014, P1) |
| **Provider response reliability** — Incomplete/length-limited responses from Anthropic/OpenAI-compatible APIs cause silent failures | [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447), [#9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999) |
| **Config migration friction** — Bare config keys (e.g., `vision_model_provider`) don't resolve to new dotted alias system | [#9707](https://github.com/zeroclaw-labs/zeroclaw/pull/9707) |
| **Memory backend limitations** — SQLite insufficient for prod; PostgreSQL not always allowed; MariaDB unsupported | [#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668) |
| **ZeroCode UX** — Paste discarded during active turns; session history vs persistent memory confusion | [#10150](https://github.com/zeroclaw-labs/zeroclaw/pull/10150), [#9341](https://github.com/zeroclaw-labs/zeroclaw/pull/9341) |
| **Telegram group collaboration** — Hardcoded single-user session scope breaks multi-user group workflows | [#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) |

**Satisfaction signal:** High engagement on security/control RFCs suggests users are **invested in hardening**; config migration bugs indicate **upgrade friction** for existing deployments.

---

## 8. Backlog Watch (Stale / Needs Maintainer Attention)

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| **[#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668)** MariaDB memory support | ~5 months (created 2026-03-25) | Accepted, P2, no PR linked | Production blocker for MariaDB-standardized orgs; "accepted" but no implementation movement |
| **[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)** Shell confirmation RFC | ~2.5 months (created 2026-06-03) | Accepted, P1, high risk, 23 comments | **Highest community interest**; Revision 3 scoped but no implementation PR visible |
| **[#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691)** ADR baseline restoration | ~1.5 months (created 2026-07-04) | Tracker, P2 | Architecture governance debt; blocks decision-record audit for accepted RFCs |
| **[#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447)** Anthropic response classification | ~1 month (created 2026-07-27) | In-progress, P1, needs-author-action | Blocks [#9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999) (stacked); provider reliability |
| **[#9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582)** Plugin egress policy (Stage 2) | ~3 weeks (created 2026-07-31) | Open, P1, high risk, XL | **Foundation for [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584)**; ADR-014 proposed in #10169 |
| **[#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772)** Telegram per-user sessions | ~2 weeks (created 2026-08-05) | Needs maintainer review, high risk | Channel UX improvement; session semantics change needs design sign-off |
| **[#10033](https://github.com/zeroclaw-labs/zeroclaw/pull/10033)** Channel config serde defaults | ~5 days (created 2026-08-16) | Needs maintainer review, high risk | Affects 5 channel types (Discord, Slack, Matrix, Signal, Lark); default timeout mismatch |

---

## Project Health Indicators

| Metric | Signal |
|--------|--------|
| **PR throughput** | High (50 updates/24h) but **review bottleneck** — many `needs-maintainer-review`, `needs-author-action` |
| **Security posture** | **Proactive hardening** — SSRF,

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*