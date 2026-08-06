# OpenClaw Ecosystem Digest 2026-08-04

> Issues: 164 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-04 03:22 UTC

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

# OpenClaw Project Digest — 2026-08-04

## 1. Today's Overview

OpenClaw shows **exceptionally high velocity** with 164 issues and 500 PRs updated in the last 24 hours — a volume suggesting either a major release cycle, sprint boundary, or coordinated triage push. Two patch releases (`v2026.7.1-1` and `v2026.7.1-2`) shipped in quick succession, addressing critical regressions in Codex progress handling and npm plugin metadata parsing. The issue backlog is dominated by **session-state bugs** (message loss, stuck sessions, subagent lifecycle flaws) and **multi-provider integration gaps** (Slack threads, Feishu mentions, WhatsApp media, Telegram albums). PR activity is heavily weighted toward **fixes with security/compatibility risk tags**, indicating a stabilization phase rather than new feature development. Maintainer review bandwidth appears strained — many high-severity issues carry `clawsweeper:needs-maintainer-review` and `clawsweeper-recovery-stuck` labels.

## 2. Releases

### v2026.7.1-2 — `openclaw 2026.7.1-2`
**Fixes:**
- **npm plugin updates**: Accept singleton-array metadata from newer npm clients so tracked official plugins can install and update to correction releases. ([#108336](https://github.com/openclaw/openclaw/issues/108336))

### v2026.7.1-1 — `openclaw 2026.7.1-1`
**Fixes:**
- **Codex progress replies**: Keep app-server turns running after delivered progress messages so GPT/Codex reaches its authoritative terminal response instead of stopping mid-turn. ([#106961](https://github.com/openclaw/openclaw/issues/106961), [#108487](https://github.com/openclaw/openclaw/issues/108487)) — Thanks @joshavant
- **Memory Core startup repair**: Recover derived legacy-index and ca (truncated in source)

> **Migration notes**: Both are patch releases on the `2026.7.1` line. No breaking changes documented. Users on `v2026.7.1` should upgrade to `v2026.7.1-2` for the npm plugin fix if using official plugins.

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Scope | Impact |
|----|-------|--------|
| [#92307](https://github.com/openclaw/openclaw/pull/92307) | docs/gateway/agents | Warn when host approvals clamp exec security at startup — improves operator visibility into effective policy |
| [#118409](https://github.com/openclaw/openclaw/pull/118409) | gateway/security | Keep sandboxed gateway locks out of live state dirs ([#118371](https://github.com/openclaw/openclaw/issues/118371)) — fixes state isolation breach |
| [#117719](https://github.com/openclaw/openclaw/pull/117719) | whatsapp-web | Retry transient inbound media download failures through ingress drain — prevents permanent `[whatsapp attachment unavailable]` |
| [#114678](https://github.com/openclaw/openclaw/pull/114678) | doctor/commands/agents | Stop advisory state-dir skips from wedging gateway startup ([#112395](https://github.com/openclaw/openclaw/issues/112395)) — fixes boot loop with legacy `~/.clawdbot` |
| [#118616](https://github.com/openclaw/openclaw/pull/118616) | agents/diagnostic | Stop aborting healthy agent turns waiting on background subagent ([#118386](https://github.com/openclaw/openclaw/issues/118386)) — fixes 6-min kill of long Slack turns |
| [#110569](https://github.com/openclaw/openclaw/pull/110569) | scripts/docs | Bound docs glossary git lookups with 1-min timeout — prevents CI hangs |

**Theme**: Startup reliability, session lifecycle correctness, and media/attachment resilience across channels.

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Type | Core Pain Point |
|------|----------|------|-----------------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | 101 | Bug (P1, 🦞) | **DeepSeek v4 Flash silent reply failure** — model returns no reply, generic fallback shown; message loss in Telegram groups |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 53 | Bug (P1) | **Realtime voice unbounded state retention** — provider frames, pre-ready audio, playback buffers accumulate without hard bounds |
| [#117956](https://github.com/openclaw/openclaw/issues/117956) | 10 | Bug (P1, 🦐) | **claude-cli backend billed 13.7M Anthropic tokens despite `CLAUDE_CLI_CLEAR_ENV`** — env scrubbing failed, security + cost impact |
| [#112906](https://github.com/openclaw/openclaw/issues/112906) | 8 | Bug (P2) | **`<details>` rendering broken in v2026.7.1** — rich messages regression, collapsible sections leak flat |
| [#118785](https://github.com/openclaw/openclaw/issues/118785) | 8 | QA (P2) | **Primary proof for 23 container IDs + 31 external app SDK IDs** — audit tracking for new integration surface |
| [#111010](https://github.com/openclaw/openclaw/issues/111010) | 7 | Bug (P1) | **Detached Codex subagents lose hook relay when parent turn releases** — native tools become unavailable mid-session |
| [#91144](https://github.com/openclaw/openclaw/issues/91144) | 7 | Bug (P2) | **Windows Scheduled Task gateway doesn't stay running** — foreground works, background dies |
| [#40982](https://github.com/openclaw/openclaw/issues/40982) | 6 | Feat (P1) | **Raise/remove 3-min no-output watchdog cap** — hardcoded 180s kills long CLI requests despite higher session timeout |

**Underlying needs**: 
- **Model reliability** — silent failures (DeepSeek, Codex) erode trust
- **Resource bounding** — voice, subagent, and session state leak without hard limits
- **Security/cost guardrails** — env scrubbing and billing backoffs failing in production
- **Windows parity** — scheduled task gateway instability blocks enterprise adoption

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 Critical (P1, 🦞 Diamond Lobster / 🦐 Gold Shrimp)
| Issue | Title | Fix PR? | Status |
|-------|-------|---------|--------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash silent reply failure — no reply generated | No | **CLOSED** (but root cause unclear) |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime voice unbounded provider/consult state retention | No | OPEN — needs product decision |
| [#117956](https://github.com/openclaw/openclaw/issues/117956) | claude-cli billed 13.7M tokens despite `CLAUDE_CLI_CLEAR_ENV` | No | OPEN — needs security review |
| [#111010](https://github.com/openclaw/openclaw/issues/111010) | Detached Codex subagents lose hook relay on parent release | No | OPEN — needs product decision |
| [#40982](https://github.com/openclaw/openclaw/issues/40982) | 3-min watchdog cap kills long CLI requests | No | OPEN — linked PR open |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | Usage-cost refresh lock never releasable after container restart (PID reuse) | No | OPEN — linked PR open |
| [#116010](https://github.com/openclaw/openclaw/issues/116010) | All persistent sessions capped at 128k context regardless of model | No | OPEN — linked PR open |
| [#89095](https://github.com/openclaw/openclaw/issues/89095) | Sub-agent timeout doesn't notify parent — completion event dropped | No | OPEN — recovery stuck |
| [#115228](https://github.com/openclaw/openclaw/issues/115228) | Orphaned task-notification from killed background agent consumes next user message | **Yes** ([#119073](https://github.com/openclaw/openclaw/pull/119073)) | OPEN — fix PR by @joshavant |
| [#118018](https://github.com/openclaw/openclaw/issues/118018) | Stale subagent completion delivered into replaced requester lifecycle | No | OPEN — linked PR open |
| [#106704](https://github.com/openclaw/openclaw/issues/106704) | `sessions_yield` on subagent first turn finalizes run as ok with empty result | No | OPEN — linked PR open |
| [#118846](https://github.com/openclaw/openclaw/issues/118846) | Gateway main thread saturated at boot by plugin-metadata snapshotting + fs statting | No | OPEN — fix shape clear |

### 🟠 High (P2, 🦪 Silver Shellfish / 🐚 Platinum Hermit)
| Issue | Title | Fix PR? |
|-------|-------|---------|
| [#52249](https://github.com/openclaw/openclaw/issues/52249) | ACP parent session stuck until refresh when yielded waiting for child | No |
| [#43549](https://github.com/openclaw/openclaw/issues/43549) | Telegram channel wedged by bad persisted session JSON; no recovery guidance | No |
| [#112906](https://github.com/openclaw/openclaw/issues/112906) | `<details>` rendering broken in v2026.7.1 (rich messages regression) | No |
| [#112475](https://github.com/openclaw/openclaw/issues/112475) | Device pairing recovery fails after removal (Gateway 2026.7.1) | No |
| [#48785](https://github.com/openclaw/openclaw/issues/48785) | Granular session visibility — split `tools.sessions.visibility` into per-capability knobs | No |
| [#40768](https://github.com/openclaw/openclaw/issues/40768) | Feishu @mention not recognized with multiple bots in group (open_id mismatch) | No |
| [#87447](https://github.com/openclaw/openclaw/issues/87447) | Dreaming diary (DREAMS.md) grows without bound — no rotation/size cap | No |
| [#51347](https://github.com/openclaw/openclaw/issues/51347) | Feishu `--media` ignores `mediaLocalRoots` config, returns success on failure | No |
| [#114184](https://github.com/openclaw/openclaw/issues/114184) | Slack: two threads in same channel serialize — ingress lane key omits `thread_ts` | No |
| [#112248](https://github.com/openclaw/openclaw/issues/112248) | `@openclaw/codex` plugin fails to register on boot — all `/codex` commands no-op | No |
| [#117471](https://github.com/openclaw/openclaw/issues/117471) | `openclaw cron remove` reports "id not found" despite successful removal | No |
| [#118885](https://github.com/openclaw/openclaw/issues/118885) | Large SQLite DBs run redundant full integrity checks at startup | No |

### 🟡 Regressions (Recent Version)
- [#112906](https://github.com/openclaw/openclaw/issues/112906) — `<details>` broken since v2026.7.1
- [#45765](https://github.com/openclaw/openclaw/issues/45765) — `OPENCLAW_HOME=~/.openclaw` creates nested `~/.openclaw/.openclaw` (CLOSED)
- [#39807](https://github.com/openclaw/openclaw/issues/39807) — Billing error 402 causes infinite retry death spiral (CLOSED)

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|----------------------------|
| [#48785](https://github.com/openclaw/openclaw/issues/48785) | Granular session visibility (split visibility into per-capability flags) | Medium — architectural, needs product decision |
| [#87714](https://github.com/openclaw/openclaw/issues/87714) | Source-aware instruction tracking for indirect prompt injection mitigation | High — security-focused, tagged `needs-security-review` |
| [#11955](https://github.com/openclaw/openclaw/issues/11955) | Memory/Context: metrics + global semantic search + conversation chaining + preload on restart | Medium — grouped improvements, long-standing |
| [#87733](https://github.com/openclaw/openclaw/issues/87733) | Cross-gateway federation protocol (bridge + identity + tenant scopes) | Low — FRD draft, ByteDesk-internal, not yet filed |
| [#50287](https://github.com/openclaw/openclaw/issues/50287) | Next Sprint B: model-input validation guardrails | High — "confirmed", "wait for next sprint" |
| [#49251](https://github.com/openclaw/openclaw/issues/49251) | Queue prompts when API limits prevent immediate response | Medium — UX improvement, cost-first policy aligned |
| [#12008](https://github.com/openclaw/openclaw/issues/12008) | Configure Gemini safety settings (harassment, hate, sexual, dangerous) | Low — enhancement, off-meta tidepool |
| [#40644](https://github.com/openclaw/openclaw/issues/40644) | Cron Jobs Calendar View for Control UI (timeline + color coding) | Medium — UI enhancement, specific requirements defined |
| [#38302](https://github.com/openclaw/openclaw/issues/38302) | Per-account native command prefix for multi-agent slash commands | Medium — Slack limitation, clear use case |
| [#13620](https://github.com/openclaw/openclaw/issues/13620) | Telegram media groups (albums) support via `sendMediaGroup` | Medium — clear API gap, user demand |

**Predicted next-version candidates**: Model-input validation guardrails (#50287), prompt queuing on rate limits (#49251), and source-aware instruction tracking (#87714) have the strongest signals (explicit sprint planning, security priority, cost alignment).

## 7. User Feedback Summary

### Pain Points (from issue descriptions)
- **Silent failures**: DeepSeek v4 Flash, Codex subagents, claude-cli billing — users discover issues via fallbacks or bills, not errors
- **Session wedging**: Telegram, ACP parent, Slack threads — recovery requires manual refresh or CLI intervention
- **Config/reality mismatch**: Per-agent model overrides invisible in `openclaw models`/UI ([#106504](https://github.com/openclaw/openclaw/issues/106504)), Feishu provider shows original not normalized value ([#47840](https://github.com/openclaw/openclaw/issues/478

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal Assistant Open-Source Ecosystem (2026-08-04)

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape shows **high fragmentation with convergent technical challenges**. Twelve active projects span from enterprise-grade frameworks (OpenClaw, Hermes Agent, IronClaw) to specialized single-developer tools (PicoClaw, Moltis, ZeptoClaw). Despite diverse architectures — multi-protocol gateways, desktop-first UIs, CLI/TUI hybrids, web-based dashboards — all projects are simultaneously grappling with **session lifecycle correctness, provider API volatility, multi-channel message delivery, and resource bounding**. No single project dominates; instead, a tiered ecosystem is emerging where core frameworks (OpenClaw, Hermes, ZeroClaw) provide infrastructure primitives while downstream forks and specialized agents (NanoBot, CoPaw, LobsterAI) target specific UX niches. Release cadences range from daily patches (OpenClaw) to monthly betas (CoPaw), indicating varied maturity levels.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score |
|---------|--------------|-----------|----------------|--------------|
| **OpenClaw** | 164 | 500 | v2026.7.1-2 (patch, today) | 🟡 High velocity, strained review |
| **Hermes Agent** | 12 | 50 | v0.20.0 / v2026.8.3 (major, 1 day ago) | 🟢 Active, post-major-release |
| **ZeroClaw** | 14 | 50 | None (pre-release epic phase) | 🟡 Heavy dev, RFC bottleneck |
| **IronClaw** | 20 | 50 | None (Wave 3 refactor, release PR stale 33d) | 🟡 Architectural churn, CI blocking |
| **CoPaw (QwenPaw)** | 14 | 50 | v2.1.0-beta.1 (yesterday), b2 merged | 🟢 High velocity, beta iteration |
| **NanoBot** | ~2 | 31 (19 merged) | Imminent patch (19 PRs merged) | 🟢 Healthy, responsive |
| **NanoClaw** | 1 | 9 (6 merged) | None (accumulating fixes) | 🟢 Steady maintenance |
| **LobsterAI** | 2 (stale) | 12 (7 merged) | None (stale PR backlog 125d) | 🟡 Feature delivery, review bottleneck |
| **PicoClaw** | 8 (mostly stale) | 5 (3 merged) | None (0.3.1 current) | 🟡 Fair, critical bugs unfixed |
| **NullClaw** | 1 | 5 (2 closed) | None | 🟡 Moderate, scheduler bug stale 80d |
| **Moltis** | 0 | 1 (open) | None | ⚪ Quiet maintenance |
| **ZeptoClaw** | 0 | 0 | None | ⚪ Inactive |

**Activity Tiers:**
- **Tier 1 (High throughput):** OpenClaw, Hermes, ZeroClaw, IronClaw, CoPaw — 50+ PRs/day
- **Tier 2 (Steady):** NanoBot, NanoClaw — 10-30 PRs/day, high merge rate
- **Tier 3 (Low/Stalled):** LobsterAI, PicoClaw, NullClaw, Moltis — <15 PRs/day, stale backlogs

---

## 3. OpenClaw's Position

### Advantages vs Peers
| Dimension | OpenClaw | Peer Comparison |
|-----------|----------|-----------------|
| **Protocol breadth** | 10+ channels (Slack, Telegram, WhatsApp, Feishu, Discord, ACP, Matrix, SMS, Email, custom) | Only Hermes Agent matches; others support 2-4 channels |
| **Enterprise readiness** | Gateway sandboxing, approval policies, audit logging, device pairing | IronClaw has similar; NanoBot/CoPaw lack policy engine |
| **Multi-provider abstraction** | Unified model routing, cost tracking, fallback chains | NanoBot leads on provider agility; OpenClaw deeper on policy |
| **Scale indicators** | 164 issues/500 PRs/day, 100+ comment threads | 3-5× next busiest (Hermes/ZeroClaw/IronClaw/CoPaw) |

### Technical Approach Differences
- **Gateway-centric architecture**: OpenClaw isolates channel adapters, provider routers, and agent runtimes in a privileged gateway process — unique among peers (Hermes uses similar but lighter; others embed in single process).
- **Session as first-class persisted object**: Survives gateway restarts, supports subagent trees, cross-channel continuation — PicoClaw/NanoClaw/ZeroClaw attempt this but lack OpenClaw's maturity.
- **Security-by-default**: Sandbox locks, env scrubbing (`CLAUDE_CLI_CLEAR_ENV`), approval clamping — only IronClaw matches depth.

### Community Size
- **Contributor signals**: 650+ contributors on Hermes (v0.20.0 credits), but OpenClaw's 500 PRs/24h suggests larger active contributor pool (many automated/clawsweeper, but human review bottleneck confirms scale).
- **Issue depth**: 100+ comment threads on single bugs (DeepSeek, voice state) indicate production deployments at scale — rare in other projects.

---

## 4. Shared Technical Focus Areas (Cross-Project Convergence)

| Requirement | Projects Affected | Specific Manifestations |
|-------------|-------------------|-------------------------|
| **Session lifecycle correctness** | OpenClaw, Hermes, ZeroClaw, PicoClaw, NanoClaw, CoPaw | Subagent hook loss (OpenClaw #111010), ACP resume vs load (Hermes #32201), routed agent context loss (PicoClaw #3301), session rotation on missing transcript (NanoClaw #3184), daemon session visibility (ZeroClaw #9734) |
| **Provider API volatility & version tracking** | NanoBot, OpenClaw, Hermes, CoPaw, NullClaw | Opus 5 temperature deprecation (NanoBot #5235), DeepSeek v4 silent failure (OpenClaw #116277), GPT-5.6 prompt caching (CoPaw #6649), DeepSeek DSML parsing (ZeroClaw #9723) |
| **Multi-channel message delivery guarantees** | OpenClaw, Hermes, PicoClaw, CoPaw, LobsterAI | Slack thread serialization (OpenClaw #114184), WeCom rate-limit circuit breaker (Hermes #78139), Telegram topic support (PicoClaw #3315), Feishu/WeChat silent failures (CoPaw #6614, #6608) |
| **Resource bounding (memory, tokens, connections)** | OpenClaw, NanoBot, Hermes, ZeroClaw, PicoClaw | Voice unbounded buffers (OpenClaw #116201), MCP connection hang (PicoClaw #3269), Dream diary unbounded growth (OpenClaw #87447), context cap 128k hardcoded (OpenClaw #116010) |
| **Desktop/WebView stability** | Hermes, CoPaw, LobsterAI | macOS update handoff race (Hermes #75778), WebView2 crash → black UI (CoPaw #6647), NSIS survivor processes (LobsterAI #2420) |
| **MCP (Model Context Protocol) integration maturity** | NanoBot, NullClaw, ZeroClaw, Moltis, PicoClaw | Business error envelopes ignored (NanoBot #5237), streaming tool calls (NullClaw #964/965), managed repo bundles (Moltis #1183), MCP hang (PicoClaw #3269) |
| **Security defaults & audit** | OpenClaw, IronClaw, ZeroClaw, NullClaw | Env scrubbing failure (OpenClaw #117956), command audit logging default-on (ZeroClaw #9410), proxy credential handling (NullClaw #983), OAuth scope over-grant (IronClaw #7078) |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architecture Signature |
|---------|---------------|-------------|------------------------|
| **OpenClaw** | Multi-tenant gateway, enterprise channels, policy enforcement | Platform teams, MSPs, org-wide deployments | Gateway + sandboxed agents + protocol adapters (plugin) |
| **Hermes Agent** | Desktop-first, local-first, skill/plugin ecosystem | Power users, developers, self-hosters | Single binary, TUI/CLI/Desktop, ACP-native, skill marketplace |
| **ZeroClaw** | Multi-session UX, observability, daemon-centric | Developers running parallel agents | Daemon + zerocode UI, RPC-first, multi-pane sidebar (epic) |
| **IronClaw** | Extension/runtime framework, WASM/WIT, NEAR integration | Web3/app developers, plugin authors | Crate re-layering, WIT definitions, manifest-driven extensions |
| **NanoBot** | Provider agility, search breadth, WebUI polish | Researchers, multi-model experimenters | Gateway + Responses API unification, metasearch, cross-session graph |
| **CoPaw (QwenPaw)** | Desktop UX, Chinese localization, channel integrations (Feishu/WeChat) | Chinese enterprise/users, desktop-first | Electron + WebView2, Skills API, ACP + custom channels |
| **NanoClaw** | Lightweight containerized agents, session resilience | Small teams, container-native ops | Docker-first, hardened images, operational skills |
| **PicoClaw** | Embedded/edge, routing dispatch, i18n | IoT, edge, multilingual deployments | Lightweight gateway, dispatch routing, launcher |
| **LobsterAI** | Credit-based SaaS desktop, onboarding funnel | Consumer/prosumer, credit-model users | Electron, campaign UI, Windows installer hardening |
| **NullClaw** | Streaming tool calls, proxy hardening, scheduler | Self-hosted LLM users, Telegram automation | Native streaming SSE, curl proxy transport, Ollama focus |
| **Moltis** | MCP server lifecycle, Git-backed bundles | MCP server authors, web onboarding | Managed repo bundles, vault integration |
| **ZeptoClaw** | (Inactive) | — | — |

**Key Architectural Fault Lines:**
- **Gateway vs. Embedded**: OpenClaw, Hermes, NanoBot, NanoClaw use gateway; CoPaw, LobsterAI, PicoClaw embed.
- **Daemon vs. CLI**: ZeroClaw, IronClaw daemon-centric; Hermes, NullClaw CLI/TUI-first.
- **Channel Depth**: OpenClaw/Hermes >10; CoPaw/PicoClaw/NanoBot 4-6; others 1-3.
- **Extension Model**: IronClaw (WIT/WASM), Hermes (skills), OpenClaw (plugins), ZeroClaw (RPC/daemon).

---

## 6. Community Momentum & Maturity

| Maturity Stage | Projects | Signals |
|----------------|----------|---------|
| **Production-hardening** | OpenClaw, Hermes Agent | Major releases (v2026.7.1, v0.20.0), 1000+ closed issues/release, security patches in patches |
| **Rapid iteration (pre-1.0)** | ZeroClaw, CoPaw, NanoBot, IronClaw | Beta releases, epic-driven development, RFC-heavy, high PR velocity |
| **Stabilizing niche** | NanoClaw, NullClaw, PicoClaw | Focused bug fixes, container/edge specialization, smaller but consistent |
| **Review bottlenecked** | LobsterAI, IronClaw | 125-day stale PRs (LobsterAI), 33-day release PR (IronClaw), CI blocking merges |
| **Low engagement** | Moltis, ZeptoClaw | Single PR, no issues, no releases |

**Velocity Leaders (PRs merged/day):** NanoBot (19), OpenClaw (~50 but review-bound), CoPaw (5+), Hermes (8), NanoClaw (6).

**Community Health Risks:**
- OpenClaw: Maintainer review bandwidth (`clawsweeper:needs-maintainer-review` on P1s)
- IronClaw: CI/test infrastructure blocking all Wave 3 PRs
- LobsterAI: 4 high-value PRs stale 125 days
- ZeroClaw: RFC backlog (#6998 67d, #9530 6d) gating epic

---

## 7. Trend Signals for AI Agent Developers

### 1. **Provider Abstraction is Shifting from Config Lists → Capability Declarations**
- NanoBot PR #5204: `ResponsesCapabilities` replaces provider-name checks
- OpenClaw: Model routing with cost/fallback policies
- CoPaw: Provider unification PR #6302
- **Implication**: Hardcoded model lists are technical debt; invest in declarative capability matrices.

### 2. **Session State is the New Database — Durability & Recovery are Table Stakes**
- Every project reports session wedging, context loss, or resume failures
- ZeroClaw's multi-session sidebar epic (#9727) and OpenClaw's subagent lifecycle fixes signal **session-as-a-service** emerging
- **Implication**: Design for session persistence, migration, and multi-client access from day one.

### 3. **MCP is Becoming the Standard Tool Protocol — But Error Handling is Immature**
- 6/12 projects actively building MCP; NanoBot #5237 exposes protocol gap (business errors with `isError=false`)
- NullClaw streaming tool calls (#964/965), Moltis managed bundles (#1183)
- **Implication**: MCP clients must handle partial failure, timeouts, and semantic errors — not just transport errors.

### 4. **Desktop Stability is a Differentiator — WebView2/Electron Crashes Kill Trust**
- Hermes macOS update race (#75778), CoPaw WebView2 black screen (#6647), LobsterAI NSIS survivors (#2420)
- **Implication**: Desktop agents need crash recovery, process isolation, and update atomicity — not just web tech wrapped.

### 5. **Security Defaults are Shifting from "Enable All" → "Audit First"**
- ZeroClaw #9410 (audit logging default-on → off), OpenClaw #117956 (env scrubbing failure), IronClaw #7078 (OAuth over-grant)
- **Implication**: Default-deny, operator-reviewed telemetry, and credential isolation are becoming expected.

### 6. **Multi-Channel Ingestion Requires Lane-Level Isolation**
- OpenClaw Slack thread key missing `thread_ts` (#114184), Hermes Discord duplicate clarifies (#71937), CoPaw Feishu 1.5h block (#6608)
- **Implication**: Ingress lanes must be keyed by (channel, thread, user) — not just channel — to prevent cross-talk.

### 7. **Cost Observability Drives Feature Priority**
- OpenClaw 13.7M token billing bug (#117956), CoPaw GPT-5.6 prompt caching (#6649), NanoBot Opus 5 effort controls (#5236)
- **Implication**: Token accounting, caching controls, and provider cost metadata are product requirements, not ops concerns.

---

## Summary for Decision-Makers

| If You Need... | Best Fit | Caveat |
|----------------|----------|--------|
| **Enterprise multi-channel gateway** | OpenClaw | High complexity, review bandwidth constrained |
| **Local-first desktop with skill ecosystem** | Hermes Agent | Post-v0.20.0 stabilizing; macOS update flow needs work |
| **Parallel agent UX with observability** | ZeroClaw | Pre-release, RFC-gated, but strong UX vision |
| **Provider-agnostic experimentation** | NanoBot | Best model agility, WebUI polish, metasearch |
| **Chinese enterprise desktop (Feishu/WeChat)** | CoPaw | Beta, WebView2 risks, active iteration |
| **Containerized lightweight agents** | NanoClaw | Session resilience focus, small team |
| **Edge/embedded multilingual** | PicoClaw | Routing gaps, MCP fragility |
| **WASM/WIT extension framework** | IronClaw | Heavy refactor, CI broken, NEAR-aligned |

**Strategic Takeaway**: The ecosystem is converging on **g

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-04

## 1. Today's Overview
NanoBot shows **high maintenance velocity** with 31 PRs updated in the last 24 hours (19 merged/closed), indicating active development and rapid bug resolution. The project is addressing critical provider compatibility issues (Anthropic Opus 5, Gemini, DeepSeek) and WebUI stability fixes. Two new high-priority bugs were reported today around MCP error handling and Anthropic Opus 5 temperature configuration. No releases were cut today, but the volume of merged P1 fixes suggests a patch release is imminent.

## 2. Releases
**No new releases today.** The latest release remains unchanged. Given 19 PRs merged/closed today—including 8 P1 fixes—expect a patch release (likely `v0.x.y+1`) within 1–2 days.

---

## 3. Project Progress — Merged/Closed PRs Today (Highlights)

| PR | Type | Summary | Priority |
|----|------|---------|----------|
| [#5228](https://github.com/HKUDS/nanobot/pull/5228) | fix(webui) | Persist and display actual local trigger messages in session popover | P1 |
| [#5227](https://github.com/HKUDS/nanobot/pull/5227) | fix(webui) | Complete i18n audit; fix Chinese terminology (`网页`→`网络`, `网页搜索`→`网络搜索`) | P1 |
| [#5214](https://github.com/HKUDS/nanobot/pull/5214) | fix(provider) | Keep DeepSeek reasoning items wire-valid for OpenAI Responses API routing | P1 |
| [#5215](https://github.com/HKUDS/nanobot/pull/5215) | fix(gateway) | Deterministic agent/MCP resource cleanup on gateway stop | P1 |
| [#5229](https://github.com/HKUDS/nanobot/pull/5229) | fix(webui) | Stabilize thread during IME input (defer autosize, preserve scroll) | P2 |
| [#5226](https://github.com/HKUDS/nanobot/pull/5226) | fix(webui) | Dismiss mobile keyboard after send on touch devices | P2 |
| [#5213](https://github.com/HKUDS/nanobot/pull/5213) | fix(plugins) | Fall back to `uv` when `pip` unavailable for plugin management | P2 |
| [#5141](https://github.com/HKUDS/nanobot/pull/5141) | fix(cron) | Validate cron expression syntax at schedule creation time | P2 |
| [#5038](https://github.com/HKUDS/nanobot/pull/5038) | docs(provider) | Add ModelScope (魔搭) provider documentation | P2 |
| [#4861](https://github.com/HKUDS/nanobot/pull/4861) | feat(provider) | Add Eden AI as OpenAI-compatible gateway provider | P2 |

**Key theme:** Provider wire-compatibility (DeepSeek, Gemini, Anthropic), WebUI polish (i18n, IME, mobile), and operational robustness (gateway shutdown, cron validation).

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#5236](https://github.com/HKUDS/nanobot/pull/5236) *fix(anthropic): support Opus 5 effort controls* | Opened today, P1 | **Immediate response to #5235.** Replaces hard-coded model exclusions with version-threshold logic; adds adaptive thinking + `output_config.effort` for Opus 5. Signals maintainers prioritize Anthropic cutting-edge model support. |
| [#5237](https://github.com/HKUDS/nanobot/issues/5237) *MCP tool returns "data not found" envelope → agent ignores it* | Opened today, 0 comments | **Silent failure mode.** MCP servers returning business errors with `isError=false` are treated as success. LLM never learns of failure → cannot retry. High impact for MCP-heavy workflows; needs protocol-level fix. |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) *feat(agent): integrate mst-python as metasearch provider* | Opened yesterday, P1 | **New provider: Meta-Search Tool (mst).** Aggregates DuckDuckGo, Google, Brave, Bing via RRF. Expands search provider ecosystem beyond single-engine providers. |
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) *feat(session): cross-session search and mentions* | Open 3 days, P2 | **Long-requested UX.** `@` mention palette now lets users reference other sessions; adds `search_sessions`/`read_session` APIs. Enables knowledge reuse across conversations. |

**Underlying needs:** 
- **Provider agility:** Users adopt new models (Opus 5) faster than config lists update → need version-threshold logic.
- **MCP reliability:** Business errors must surface to LLM for autonomous recovery.
- **Search breadth:** Single-engine providers have blind spots; metasearch via RRF is a force multiplier.
- **Session continuity:** Cross-session references turn isolated chats into a knowledge graph.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| **Critical** | [#5235](https://github.com/HKUDS/nanobot/issues/5235) *Anthropic: Opus 5 temperature config rejected* | Opus 5 (`claude-opus-5`, released 2026-07-24) fully deprecates `temperature`. Nanobot's `omit_temperature` list lacks `"opus-5"` → every request sends deprecated param → API rejects. | **Yes:** [#5236](https://github.com/HKUDS/nanobot/pull/5236) (opened today, P1) |
| **High** | [#5237](https://github.com/HKUDS/nanobot/issues/5237) *MCP business error envelope ignored* | MCP server returns `{"code":404,"msg":"data not exist"}` with `isError=false`. Nanobot treats as success → LLM unaware → tool_timeout fires → no retry logic. | No (needs protocol handling in MCP client) |
| **Medium** | [#5190](https://github.com/HKUDS/nanobot/issues/5190) *Module script MIME type "text/plain"* | Frontend fails to load JS modules: server returns `text/plain` instead of `application/javascript`. **Closed today** (likely config/static fix). | Fixed (closed 2026-08-03) |

**Stability signal:** Critical provider bug (#5235) has a fix PR within hours. MCP error handling (#5237) is a protocol gap needing design decision (treat `isError=false` + error-code payload as failure?).

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Metasearch provider (mst-python)** | [#5234](https://github.com/HKUDS/nanobot/pull/5234) (P1, open) | **High** — P1, adds RRF aggregation, fills search coverage gap |
| **Cross-session search & `@` mentions** | [#5211](https://github.com/HKUDS/nanobot/pull/5211) (open 3 days) | **High** — UX multiplier, APIs + WebUI integrated |
| **Mattermost thread-level group policy** | [#5233](https://github.com/HKUDS/nanobot/pull/5233) / [#5232](https://github.com/HKUDS/nanobot/pull/5232) | **Medium** — Follow-up to #4459, config + WebUI exposed |
| **Dream memory: archive idle sessions** | [#5231](https://github.com/HKUDS/nanobot/pull/5231) (open) | **Medium** — Addresses blind spot in Dream's `history.jsonl` input |
| **Responses API capability declarations** | [#5204](https://github.com/HKUDS/nanobot/pull/5204) (open, conflict) | **High architectural value** — Declarative `ResponsesCapabilities` replaces provider-name checks; unblocks multi-provider routing |

**Predicted next-version themes:** 
1. **Anthropic Opus 5 full support** (critical bug + effort controls)
2. **Metasearch provider** (search quality step-change)
3. **Cross-session UX** (knowledge reuse)
4. **Responses API architecture cleanup** (technical debt reduction)

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **New model config lag** | #5235: Opus 5 released 2026-07-24, config still lacks `opus-5` in `omit_temperature` | Blocks early adopters; API rejects every request |
| **Silent MCP failures** | #5237: Business errors with `isError=false` invisible to agent | Agent cannot self-correct; wastes tool_timeout cycles |
| **Mobile WebUI friction** | #5226, #5229: Keyboard dismissal, IME instability | Degrades mobile UX; fixed today |
| **Plugin install failures in `uv` envs** | #5213: `pip` missing in `uv tool` installs | Blocks plugin management; fixed with `uv` fallback |
| **i18n inconsistency (Chinese)** | #5227: `网页` vs `网络`, hardcoded labels | Confuses CN users; comprehensive audit merged |

**Satisfaction signals:** Rapid fix turnaround (Opus 5 fix PR same day as issue), WebUI polish cluster (5 fixes in 2 days), proactive architecture work (Responses capabilities, Dream memory).

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) *refactor(providers): declare Responses capabilities* | 3 days open, **conflict** | Architectural keystone: replaces fragile provider-name checks with declarative capabilities. Unblocks clean multi-provider routing. Conflict needs resolution. |
| [#5237](https://github.com/HKUDS/nanobot/issues/5237) *MCP business error envelope ignored* | Opened today, **0 comments** | Protocol design decision needed: should non-`isError` payloads with error codes be treated as failures? Affects all MCP integrations. |
| [#1550](https://github.com/HKUDS/nanobot/pull/1550) *feat(codex): OAuth + custom Responses dual mode* | **5 months old**, conflict | Long-standing request for `openai_codex` flexibility. Conflict suggests merge complexity; high user demand (OAuth + API key both). |
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) *feat(session): cross-session search and mentions* | 3 days open | High-value UX feature; needs review for API stability and WebUI integration completeness. |
| [#5230](https://github.com/HKUDS/nanobot/pull/5230) *fix(providers): drop unsigned tool calls when replaying to Gemini* | Opened yesterday | Prevents hard 400 on model-switch conversations. Critical for multi-provider fallback reliability. |

---

**Overall Health:** 🟢 **Healthy — High velocity, responsive maintainers, active community.** Critical bugs get same-day fix PRs. Architectural refactors (Responses capabilities, Dream memory, session graph) indicate strategic investment beyond firefighting. Watch: MCP error protocol decision (#5237) and Responses capabilities merge (#5204 conflict).

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-04

---

## 1. Today's Overview

Hermes Agent remains in **high-velocity active development** with 50 PRs and 12 issues updated in the past 24 hours. The project just shipped **v0.20.0 (v2026.8.3)** on August 3 — a major milestone dubbed "The Herald Release" representing ~3,650 commits and ~1,400 merged PRs since v0.19.0. Current activity shows a healthy balance: 8 PRs merged/closed today against 42 still open, indicating steady integration throughput. The issue backlog is dominated by desktop/update reliability, platform adapter quirks (ACP, Slack, WeCom, Discord), and session-state edge cases — all typical for a maturing multi-platform agent framework.

---

## 2. Releases

### **v2026.8.3 — Hermes Agent v0.20.0** (Released 2026-08-03)
> **The Herald Release.** Hermes is the herald of the gods, an...

**Scale since v0.19.0:**
- ~3,650 commits · ~1,400 merged PRs · ~5,200 files changed
- ~559,000 insertions · ~405,000 deletions
- **~1,200 issues closed** · 650+ contributors

**Migration notes / breaking changes:** Not explicitly detailed in the provided excerpt. Given the magnitude (~1,200 issues closed), users should review the full changelog for configuration, API, or plugin interface changes. The version bump to `v0.20.0` (calendar-versioned as `v2026.8.3`) suggests potential minor breaking changes — test desktop/update flows, gateway startup, and provider plugins before rolling out widely.

[🔗 Release Page](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.3)

---

## 3. Project Progress — Merged/Closed PRs Today (8)

| PR | Type | Component | Summary |
|----|------|-----------|---------|
| [#77415](https://github.com/NousResearch/hermes-agent/pull/77415) | 🐛 Bug fix | `comp/tools`, `tool/mcp`, `area/auth` | Fix MCP OAuth: treat `mtime=0` as first observation, not external refresh (fixes #77369) |
| [#78136](https://github.com/NousResearch/hermes-agent/pull/78136) | 🐛 Bug fix | `comp/plugins`, `platform/slack` | Fix Slack clarify button truncation: show full text for long choices (fixes #78115) |
| [#78139](https://github.com/NousResearch/hermes-agent/pull/78139) | 🐛 Bug fix | `comp/gateway`, `platform/wecom` | Fix WeCom rate-limit circuit breaker blocking built-in retry/backoff |
| [#78141](https://github.com/NousResearch/hermes-agent/pull/78141) | 🐛 Bug fix | `comp/cli`, `area/config` | Fix launchd stdio logs: move to `~/Library/Logs/` on macOS (fixes #78129) |
| [#78143](https://github.com/NousResearch/hermes-agent/pull/78143) | 🐛 Bug fix | `comp/kanban` | Count dry-run spawns toward global concurrency cap (fixes #78117) |
| *3 additional closed PRs* | — | — | Not fully detailed in feed; likely minor fixes/docs |

**Net progress:** Strong focus on **platform adapter reliability** (Slack, WeCom, MCP OAuth) and **desktop/daemon hygiene** (launchd logs, concurrency accounting). No new features merged today — all 8 are bug fixes.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#75778](https://github.com/NousResearch/hermes-agent/issues/75778) | Issue (Bug) | 4 | 0 | **Desktop update handoff broken on macOS** — duplicate `hermes-setup` processes race; first holds lock, second fails with misleading "Hermes still running" message. Blocks reliable auto-update. |
| [#416](https://github.com/NousResearch/hermes-agent/issues/416) | Issue (Feature) | 4 | 1 | **Skill validation & linting** — automated quality checks on `skill_manage` create/edit (YAML, Python, referenced files). Long-standing (open since Mar 2026), high community interest. |
| [#75184](https://github.com/NousResearch/hermes-agent/pull/75184) | PR (Feature) | — | 0 | **`@blame:path` context injection** — attach `git blame` output to chat like `@file:`/`@diff:`. Useful for code-review workflows; touches CLI, TUI, Desktop. |
| [#32201](https://github.com/NousResearch/hermes-agent/issues/32201) | Issue (Bug) | 2 | 0 | **ACP `session/resume` replays history** — violates ACP semantics (should distinguish `load` vs `resume`). Blocks interop with ACP-compliant clients. |
| [#78133](https://github.com/NousResearch/hermes-agent/issues/78133) | Issue (Feature) | 1 | 0 | **Fallback provider chain for cron jobs** — unattended tasks silently fail on provider outage; needs automatic failover. |

**Underlying themes:**
1. **Desktop update reliability** is a user-visible pain point (two issues: #75778, #78135).
2. **Skill ecosystem maturity** — validation (#416) and symlink-aware discovery (#78144) are requested.
3. **Platform adapter correctness** — ACP, Slack, WeCom, Discord all have message-delivery or session-state bugs.
4. **Unattended resilience** — cron fallback providers (#78133) and session drift on abandoned tasks (#78146).

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Component | Status | Fix PR? |
|----------|-------|-----------|--------|---------|
| **P2 — High** | [#75778](https://github.com/NousResearch/hermes-agent/issues/75778) | `comp/desktop`, `area/install-update` | Open | No |
| **P2 — High** | [#32201](https://github.com/NousResearch/hermes-agent/issues/32201) | `comp/acp`, `area/sessions` | Open | No |
| **P2 — High** | [#78134](https://github.com/NousResearch/hermes-agent/issues/78134) | `comp/gateway`, `platform/yuanbao` | Open | No |
| **P2 — High** | [#78135](https://github.com/NousResearch/hermes-agent/issues/78135) | `comp/desktop`, `platform/windows` | Open | No |
| **P2 — High** | [#78141](https://github.com/NousResearch/hermes-agent/issues/78129) | `comp/cli`, `area/config` | **Fixed** | [#78141](https://github.com/NousResearch/hermes-agent/pull/78141) ✅ |
| **P3 — Medium** | [#78050](https://github.com/NousResearch/hermes-agent/issues/78050) | `comp/cli`, `comp/tui`, `comp/plugins` | Open | No |
| **P3 — Medium** | [#78148](https://github.com/NousResearch/hermes-agent/issues/78148) | `comp/agent` (context compaction) | Open | No |
| **P3 — Medium** | [#78146](https://github.com/NousResearch/hermes-agent/issues/78146) | `comp/agent` (session reset) | Open | No |
| **P3 — Medium** | [#78144](https://github.com/NousResearch/hermes-agent/issues/78144) | `comp/gateway` (symlink skills) | Open | No |
| **P3 — Medium** | [#78115](https://github.com/NousResearch/hermes-agent/issues/78115) | `platform/slack` | **Fixed** | [#78136](https://github.com/NousResearch/hermes-agent/pull/78136) ✅ |
| **P3 — Medium** | [#78117](https://github.com/NousResearch/hermes-agent/issues/78117) | `comp/kanban` | **Fixed** | [#78143](https://github.com/NousResearch/hermes-agent/pull/78143) ✅ |

**Critical cluster:** Desktop update handoff (#75778, #78135) affects **every macOS/Windows user** on auto-update. ACP session resume (#32201) breaks protocol compliance. Yuanbao group-chat interrupt regression (#78134) degrades multi-user UX.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Signal Strength | Likelihood for v0.21.x |
|---------|----------|-----------------|------------------------|
| **Skill validation & linting** | [#416](https://github.com/NousResearch/hermes-agent/issues/416) | ⭐⭐⭐ Long-standing (5mo), 1👍, 4 comments | **High** — foundational for plugin ecosystem |
| **Fallback provider chain for cron** | [#78133](https://github.com/NousResearch/hermes-agent/issues/78133) | ⭐⭐ New, addresses silent failures | **High** — aligns with "unattended resilience" theme |
| **Standalone Requesty provider plugin** | [#78145](https://github.com/NousResearch/hermes-agent/issues/78145) | ⭐ New, salvage of #27908 | **Medium** — follows OpenAI-compat plugin pattern |
| **Gateway-owned job dispatcher with cancellation** | [#77576](https://github.com/NousResearch/hermes-agent/issues/77576) | ⭐⭐ Architectural, `needs-decision` | **Medium** — enables plugin/gateway loop boundary safety |
| **`@blame:path` context injection** | [#75184](https://github.com/NousResearch/hermes-agent/pull/75184) | ⭐⭐ PR open, crosses CLI/TUI/Desktop | **Medium** — developer UX improvement |
| **Buzz per-channel free-response config** | [#78137](https://github.com/NousResearch/hermes-agent/pull/78137) | ⭐ PR open, mirrors Discord/Chatto | **Medium** — platform parity |
| **Blaxel cloud sandbox terminal backend** | [#78140](https://github.com/NousResearch/hermes-agent/pull/78140) | ⭐ First-party PR from vendor | **Medium** — expands terminal backend options |
| **French docs translations** | [#63660](https://github.com/NousResearch/hermes-agent/pull/63660) | ⭐ Long-open (3 weeks), i18n | **Low-Medium** — docs-only, low risk |

**Roadmap prediction:** Next patch (v0.20.1) will likely bundle desktop update fixes + platform adapter patches. Next minor (v0.21.0) may land skill validation, cron fallback providers, and gateway job dispatcher — all addressing "unattended reliability" and "plugin ecosystem maturity."

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Desktop auto-update broken** | #75778 (4 comments), #78135 — "reliably produces two `hermes-setup` processes", misleading error | **High** — every desktop user on macOS/Windows; blocks seamless upgrades |
| **Skill management friction** | #416 (5mo old), #78144 (symlink breaks skill discovery), #78148 (validation loops corrupt context) | **High** — power users building custom skills hit silent failures, path issues, compaction bugs |
| **Platform adapter message loss/duplication** | #71937 (Discord duplicate clarifies), #78136 (Slack truncation), #78139 (WeCom circuit breaker), #78134 (Yuanbao no interrupt) | **Medium-High** — teams relying on Slack/Discord/WeCom/Yuanbao integration |
| **Session state drift on abandoned tasks** | #78146 — `session_reset.mode: none` default lets "closed" sessions accumulate context | **Medium** — long-running agents accumulate token bloat; `/reset` required manually |
| **CLI/TUI missing A2A tools** | #78050 — A2A client tools invisible outside gateway processes | **Medium** — developers using CLI/TUI for A2A orchestration can't access tools |
| **Launchd logs on external drive fail** | #78129 → #78141 fixed — `HERMES_HOME` on symlink/external volume breaks stdout capture | **Low-Medium** — niche but macOS daemon users affected |

**Positive signals:** Active PR contributions from vendor teams (Blaxel #78140), community i18n (#63660), and rapid fix turnaround (Slack/WeCom/launchd fixed same-day).

---

## 8. Backlog Watch — Long-Unanswered Items Needing Maintainer Attention

| Item | Age | Type | Why It Matters |
|------|-----|------|----------------|
| [#416](https://github.com/NousResearch/hermes-agent/issues/416) | **~5 months** (2026-03-05) | Feature | Skill validation is foundational for ecosystem trust; 1👍, 4 comments show sustained interest. No PR yet. |
| [#32201](https://github.com/NousResearch/hermes-agent/issues/32201) | **~2.5 months** (2026-05-25) | Bug (ACP) | Protocol compliance gap; blocks ACP client interop. Only 2 comments but P2 severity. |
| [#67198](https://github.com/NousResearch/hermes-agent/pull/67198) | **~2.5 weeks** (2026-07-18) | Test (Cron) | Adds missing unit tests for cron ticker (interval, adapter/loop forwarding, recovery). `sweeper:blast-contained` — low risk, high value. |
| [#67220](https://github.com/NousResearch/hermes-agent/pull/67220) | **~2.5 weeks** (2026-07-19) | Bug (write_file) | Fixes cwd-shaped relative path misinterpretation (P2, `needs-decision`, `sweeper:risk-compatibility`). Affects cross-platform file writes. |
| [#66535](https://github.com/NousResearch/hermes-agent/pull/66535) | **~2.5 weeks** (2026-07-17) | Feature (Debug) | Captures model responses in `HERMES_DEBUG_DUMP` — aids debugging. `sweeper:blast-contained`. |
| [#71937](https://github.com/NousResearch/hermes-agent/pull/71937) | **~1.5 weeks** (2026-07-26) | Bug (Discord) | Stops duplicate clarify prompts. `sweeper:risk-message-delivery`, `sweeper:blast-moderate`. Regression coverage included. |
| [#75184](https://github.com/NousResearch/hermes-agent/pull/75184) | **~4 days** (2026-07-31) | Feature (`@blame:`) | Cross-platform (CLI/TUI/Desktop), security-boundary tagged. Needs review for git integration safety. |
| [#76247](https

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-04

## 1. Today's Overview
PicoClaw shows **moderate maintenance activity** with 13 total updates (8 issues, 5 PRs) in the last 24 hours, though most are tagged `[stale]` — indicating automated cleanup or delayed follow-up rather than fresh development. Three issues remain open, including a high-impact Web UI input lag (#3281), an MCP server hang bug (#3269), and a routed-agent context management regression (#3301). Two PRs are open addressing the routing context bug (#3316) and Telegram topic support (#3315). No new releases were published. The project appears in a **stabilization phase** with focus on bug fixes, i18n, and edge-case handling in multi-channel routing.

## 2. Releases
**No new releases** in the last 24 hours. Current latest version remains **0.3.1** (commit `2cf030d2`).

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Title | Author | Status | Impact |
|----|-------|--------|--------|--------|
| [#3273](https://github.com/sipeed/picoclaw/pull/3273) | feat(webui): add Japanese (ja) localization | honbou | **Closed/Merged** | Adds full Japanese translation (968 lines) to WebUI; registers `ja` locale and dayjs support. Addresses #3272. |
| [#3267](https://github.com/sipeed/picoclaw/pull/3267) | fix scope bug for refresh agy token | sarff | **Closed/Merged** | Fixes token refresh failure in antigravity provider due to incorrect scope passing (PERMISSION_DENIED). |
| [#3202](https://github.com/sipeed/picoclaw/pull/3202) | fix(routing): strip leading/trailing underscores in ID normalization | Osamaali313 | **Closed/Merged** | Ensures `NormalizeAgentID`/`NormalizeAccountID` output conforms to `^[a-z0-9][a-z0-9_-]{0,63}$` — fixes routing ID validation edge cases. |

**Summary**: Progress on **i18n (Japanese)**, **auth reliability (antigravity token refresh)**, and **routing robustness (ID normalization)**.

## 4. Community Hot Topics — Most Active Issues/PRs
| Item | Type | Comments | 👍 | Link | Core Need |
|------|------|----------|-----|------|-----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Issue (BUG) | 3 | 1 | Web UI chat input lag with long history | **Performance**: Input latency grows with session length — likely DOM/event-handler accumulation in WebUI. |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | Issue (BUG) | 2 | 1 | MCP server failure hangs agent loop | **Reliability**: No timeout/fallback when MCP connection fails — blocks entire chat. |
| [#3316](https://github.com/sipeed/picoclaw/pull/3316) | PR (fix) | 0 | 0 | Routed-agent context/compression broken | **Architecture**: Dispatch-routed agents lose history, summarization, compression, and Seahorse bootstrap. |
| [#3272](https://github.com/sipeed/picoclaw/issues/3272) | Issue (Feature) | 2 | 0 | Japanese localization for WebUI/Launcher | **i18n**: Community demand for full Japanese UI — now delivered via #3273. |

**Analysis**: Users are hitting **scalability limits in WebUI** and **fragility in agent-loop error handling**. The routed-agent bug (#3316/#3301) suggests dispatch routing was not fully integrated with session lifecycle — a gap in multi-agent architecture.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? | Details |
|----------|-------|--------|---------|---------|
| **High** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) MCP hang on connection failure | Open | No | Agent loop blocks indefinitely — no timeout, retry, or fallback. Affects all MCP users. |
| **High** | [#3301](https://github.com/sipeed/picoclaw/issues/3301) `/clear` & auto-compression fail for routed agents | Open | **Yes: #3316** | Dispatch-routed sessions lose context management — memory grows unbounded. |
| **Medium** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI input lag with history | Open | No | Lag scales with message count — likely O(n) DOM/event buildup. Impacts heavy users. |
| **Medium** | [#3264](https://github.com/sipeed/picoclaw/issues/3264) `SplitMessage` infinite loop on oversized fence info | Closed | Likely fixed | Parsing edge case in markdown splitting — could hang message rendering. |
| **Low** | [#3268](https://github.com/sipeed/picoclaw/issues/3268) `exec` tool requires `action` param | Closed | Likely fixed | AI calls fail when omitting `action: "run"` — now should default. |
| **Low** | [#3265](https://github.com/sipeed/picoclaw/issues/3265) Gateway fails on unknown `deltachat` type | Closed | Likely fixed | Config validation too strict — errors on unconfigured channel types. |

**Note**: #3316 directly addresses #3301 — good sign of responsive triage.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|-----------------------------|-----------|
| **Japanese (ja/ja-JP) localization** | [#3272](https://github.com/sipeed/picoclaw/issues/3272) + [#3273](https://github.com/sipeed/picoclaw/pull/3273) | ✅ **Done** | PR merged — will ship in next release. |
| **Launcher: detect external gateway (systemd)** | [#3276](https://github.com/sipeed/picoclaw/issues/3276) | 🟡 **Planned** | Headless deployment friction; design discussion needed. |
| **Telegram topic support in private bot chats** | [#3315](https://github.com/sipeed/picoclaw/pull/3315) | 🟢 **High** | PR open, fixes `IsTopicMessage` handling — low risk, high utility. |
| **MCP connection resilience (timeouts, fallbacks)** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | 🟡 **Needed** | Critical for production MCP use — no PR yet. |
| **WebUI virtualized message list / input debounce** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 🟡 **Likely** | Performance regression with scale — architectural fix needed. |

**Prediction**: Next patch (0.3.2) will include **Japanese i18n, Telegram topic fix, routing ID normalization, antigravity token fix**, and likely the **routed-agent context fix (#3316)**. MCP resilience and WebUI performance may wait for 0.4.0.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | User Context |
|------------|----------|--------------|
| **WebUI unusable with long sessions** | #3281: "very laggy" input after "a little bit long" history | Web UI users with extended chats — likely developers/ops using PicoClaw daily. |
| **MCP failure = total chat freeze** | #3269: "agent loop will hang... stop replying" | Users integrating external tools via MCP — expects resilience. |
| **Routed agents are stateless** | #3301: "wasn't remembering anything... auto-compaction never triggered" | Discord/Telegram users with dispatch rules — multi-channel, multi-agent setups. |
| **Headless deployment friction** | #3276: launcher fights systemd for gateway control | Server/VM operators — want PicoClaw as managed service, not CLI toy. |
| **Missing Japanese UI** | #3272: docs have JP, but WebUI/Launcher don't | Japanese-speaking community — strong localization demand. |

**Satisfaction Signal**: Users are **invested enough to file detailed bugs** with env/version/repro — indicates production use. Frustration centers on **scalability (WebUI)** and **architectural gaps (routing, MCP)**.

## 8. Backlog Watch — Stale but Critical Items Needing Attention
| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) MCP hang | 15 days (created 2026-07-20) | **Production blocker** for MCP users — no workaround. | Assign owner; add connection timeout + circuit breaker in agent loop. |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) WebUI input lag | 14 days | **Degrades UX at scale** — affects all heavy WebUI users. | Profile frontend; implement virtualized list + input debouncing. |
| [#3276](https://github.com/sipeed/picoclaw/issues/3276) Launcher vs systemd gateway | 15 days | **Blocks proper service deployment** — design decision needed. | RFC: launcher should detect/manage external gateway, not own it. |
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) Routed agent context loss | 6 days | **Silent data loss** — users think context works, but it doesn't. | **PR #3316 exists** — review/merge urgently. |

**Maintainer Alert**: #3316 (fix for #3301) is **open 1 day with 0 comments** — should be prioritized. #3269 and #3281 have no fix PRs despite high impact.

---

**Project Health Score**: 🟡 **Fair**  
- ✅ Active triage (stale cleanup), i18n progressing, routing hardening  
- ⚠️ Critical bugs lack fixes (#3269, #3281)  
- ⚠️ Architectural gaps in routing + MCP resilience  
- 🟢 Good community engagement with detailed reports  

**Next Watch**: PR #3316 merge, MCP timeout design, WebUI perf investigation.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-04

## 1. Today's Overview
NanoClaw shows high maintenance velocity with 9 pull requests updated in the last 24 hours (6 merged/closed, 3 still open) but only 1 new issue filed. The project is actively addressing session management bugs, container image updates, and iMessage integration fixes. No new releases were cut today, suggesting the team is accumulating changes for a future release. The single open issue (#3179) indicates a Node.js compatibility problem with a dependency (`@clack/core`) that may affect developer onboarding.

## 2. Releases
**No new releases published today.** The last release information is not provided in the data. The team repinned the agent Docker image to `hardened-2026-08-02` (PR #3182), a routine base-image refresh with identical upstream content.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Link |
|----|------|---------|------|
| #3182 | Chore/Container | Repinned agent image to `hardened-2026-08-02` (621 MB, built 2026-08-02); same upstream digest as previous build. | [#3182](https://github.com/nanocoai/nanoclaw/pull/3182) |
| #3180 | Operational Skill | Surfaced hardened image migration via an operational/container skill (SKILL.md). | [#3180](https://github.com/nanocoai/nanoclaw/pull/3180) |
| #3137 | Feature/Fix | Fixed engagement consistency: keep accumulated messages as context without triggering warm-container follow-ups; added self-serve wiring controls for group-scoped agents; reject invalid JS engagement regexes. | [#3137](https://github.com/nanocoai/nanoclaw/pull/3137) |
| #3181 | Fix/iMessage | Opt-in via first message to assigned line for iMessage integration. | [#3181](https://github.com/nanocoai/nanoclaw/pull/3181) |
| #3143 | Fix/UI | Preserve resolved approval card content (title, request details) while replacing buttons with muted decision/actor or timeout status. | [#3143](https://github.com/nanocoai/nanoclaw/pull/3143) |
| #3178 | Admin | Closed — opened against wrong repository; no upstream change. | [#3178](https://github.com/nanocoai/nanoclaw/pull/3178) |

**Net advancement:** Session resilience (rotation on missing transcript, retention cleanup pin), engagement policy self-service, iMessage opt-in flow, and approval card persistence all landed today.

## 4. Community Hot Topics
| Item | Activity | Signal |
|------|----------|--------|
| **Issue #3179** — `SyntaxError: The requested module 'node:util' does not provide an export named 'styleText'` | 1 comment, 0 👍, created & updated 2026-08-03 | [Link](https://github.com/nanocoai/nanoclaw/issues/3179) | Developer environment breakage: `@clack/core@1.2.0` uses `styleText` from `node:util`, which is only available in Node.js ≥ 18.11.0 (or behind a flag in 16). Users on older Node versions cannot run basics. **Underlying need:** Document minimum Node version or polyfill/optional-dependency the CLI tooling. |
| **PR #3092** — `feat: support remote Streamable HTTP MCP servers` | Open since 2026-07-19, updated 2026-08-03, core-team label | [Link](https://github.com/nanocoai/nanoclaw/pull/3092) | Long-running feature PR for MCP (Model Context Protocol) remote HTTP transport. Indicates community push for standardised tool/server interop. No comments/reactions visible but core-team tag signals maintainer awareness. |

## 5. Bugs & Stability — Reported Today
| Severity | Issue/PR | Description | Fix PR Exists? |
|----------|----------|-------------|----------------|
| **High** | #3179 (Issue) | `SyntaxError` on `node:util` `styleText` import blocks `basics ready` step; likely affects all new contributors on Node < 18.11. | **No** — no linked PR yet. |
| **Medium** | #3184 (PR, open) | Stored continuation with missing transcript file causes `No conversation found with session ID` on next message; fix rotates session instead of resuming into dead session. | **Yes** — #3184 is the fix, still open. |
| **Medium** | #3183 (PR, open) | Group init cleanup period not pinned; cold sessions (>30 days quiet) reap prematurely, causing raw `No conversation found` errors. | **Yes** — #3183 pins `cleanupPeriodDays`, still open. |
| **Low** | #3143 (PR, closed) | Resolved approval cards lost title/request details; now persisted. | **Fixed & merged.** |
| **Low** | #3181 (PR, closed) | iMessage integration required explicit opt-in; now automatic on first message to assigned line. | **Fixed & merged.** |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Remote Streamable HTTP MCP servers** | PR #3092 (open 16 days, core-team) | **High** — core-team label + long review cycle suggests prioritised feature. |
| **Self-serve engagement wiring controls** | PR #3137 (merged) | **Delivered** — agents can now inspect/adjust engagement policies. |
| **Hardened image migration surfaced as skill** | PR #3180 (merged) | **Delivered** — operational skill pattern for infra changes. |
| **Session rotation on missing transcript** | PR #3184 (open) | **High** — direct fix for data-loss scenario. |
| **Retention cleanup pin for group sessions** | PR #3183 (open) | **High** — prevents silent session loss in quiet channels. |

## 7. User Feedback Summary
- **Pain point:** New contributors hit immediate `SyntaxError` on Node.js version mismatch (#3179). No workaround documented.
- **Pain point:** Long-idle group channels throw cryptic `No conversation found` errors instead of graceful recovery (#3183).
- **Pain point:** Session resume fails hard when transcript file is missing (e.g., cleanup, disk failure) (#3184).
- **Satisfaction:** Approval card UX improved — resolved cards now retain context (#3143).
- **Satisfaction:** iMessage onboarding simplified to single-message opt-in (#3181).
- **Use case signal:** Demand for standardised MCP remote server support (PR #3092) suggests users are building tool ecosystems around NanoClaw agents.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Risk | Recommended Action |
|------|-----|------|-------------------|
| **PR #3092** — Remote Streamable HTTP MCP servers | 16 days | Feature block for MCP adopters; core-team labelled but stale. | Assign reviewer, unblock merge or request changes. |
| **Issue #3179** — Node.js `styleText` compat | 1 day | Blocks onboarding for Node < 18.11 users. | Add Node version check in CI, document minimum version, or downgrade `@clack/core`. |
| **PR #3184** — Rotate on missing transcript | 1 day | Data-loss regression for session continuity. | Review & merge promptly. |
| **PR #3183** — Pin `cleanupPeriodDays` | 1 day | Silent session loss in quiet groups. | Review & merge promptly. |

---
*Digest generated from GitHub API data for nanocoai/nanoclaw on 2026-08-04. All links point to github.com/nanocoai/nanoclaw.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-04

---

## 1. Today's Overview
NullClaw shows steady maintenance activity with **5 PRs updated** and **1 active issue** in the last 24 hours. Two significant streaming tool-call PRs (#964, #965) were closed, indicating completion of a major feature cycle around native API-level tool calling during streaming. Two new proxy-related fixes (#982, #983) opened today address transport-layer robustness for Telegram and provider requests. The project remains in active development with a focus on networking reliability and streaming completeness, though no new releases have been cut recently.

---

## 2. Releases
**No new releases** in the last 24 hours. The last release version is not indicated in the provided data.

---

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Author | Status | Summary |
|----|-------|--------|--------|---------|
| [#964](https://github.com/nullclaw/nullclaw/pull/964) | Enable native API-level tool calls during streaming | mtdphn | **CLOSED** | Core streaming enhancement: preserves structured tool-call deltas in `StreamChatResult`, enables Agent execution of pure streamed tool responses, adds provider capability checks for streaming tools. |
| [#965](https://github.com/nullclaw/nullclaw/pull/965) | Structured streaming tool-call support for SSE parser | mtdphn | **CLOSED** | Companion to #964: handles servers emitting tool calls as XML in `delta.content`, adds SSE parser support for structured streaming tool-call deltas. |

**Net impact**: The streaming tool-call pipeline is now feature-complete at the API/SSE layer, enabling end-to-end native tool calling in streaming mode across compatible providers.

---

## 4. Community Hot Topics
| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#915](https://github.com/nullclaw/nullclaw/issues/915) | **Issue** | 4 comments, 1 👍, updated 2026-08-03 | **Scheduler authentication failure** with external Ollama (qwen3.6:27b on RTX 3090). User reports LLM/tool-calling works but scheduler fails in Telegram and CLI. Indicates a gap in credential propagation or auth handling for scheduled tasks vs. interactive sessions. |
| [#983](https://github.com/nullclaw/nullclaw/pull/983) | **PR** | Opened 2026-08-03 | **Provider proxy hardening**: routes non-streaming POSTs through pinned curl path, keeps credentials out of argv via mode-0600 temp header file. Security/ops hardening for proxied environments. |
| [#982](https://github.com/nullclaw/nullclaw/pull/982) | **PR** | Opened 2026-08-03 | **Telegram proxy parity**: routes Bot API POSTs through curl transport when `proxy` is configured, matching existing live-channel probe behavior. Closes a transport inconsistency. |

**Signal**: Proxy/networking reliability is the current front-line concern; scheduler auth is a user-facing blocker for automation workflows.

---

## 5. Bugs & Stability
| Severity | Item | Status | Fix PR? |
|----------|------|--------|---------|
| **High** | [#915](https://github.com/nullclaw/nullclaw/issues/915) Scheduler unauthorized (Telegram + CLI) | Open, 4 comments | No fix PR yet |
| **Medium** | Proxy transport gaps for providers/Telegram (implicit in #982, #983) | PRs open | Yes: #982, #983 |
| **Low** | Alpine 3.23 → 3.24 base image bump ([#956](https://github.com/nullclaw/nullclaw/pull/956)) | Open Dependabot PR | Yes: #956 |

**Note**: The scheduler bug (#915) is the only user-reported functional regression; it blocks automated workflows and has persisted since May.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Scheduler auth parity** (make scheduled tasks inherit interactive-session credentials) | Issue #915 | High — active user pain, no workaround noted |
| **Proxy transport unification** (consistent curl path for all proxied HTTP) | PRs #982, #983 | High — both PRs opened same day, clear pattern |
| **Streaming tool-call GA** (native API tools + SSE parser) | PRs #964, #965 (closed) | **Delivered** — core work merged/closed |
| **Dependency hygiene** (Alpine 3.24) | PR #956 | Medium — routine, low risk |

**Prediction**: Next cut will likely bundle the proxy fixes (#982, #983) and possibly a scheduler auth patch if a contributor picks up #915.

---

## 7. User Feedback Summary
- **Pain point**: Scheduler fails with "unauthorized" when using external Ollama; interactive chat + tool calling work fine. Suggests credential context is not propagated to background scheduler jobs.
- **Use case**: Self-hosted LLM (Ollama on RTX 3090) + Telegram bot + scheduled automation.
- **Sentiment**: Frustration on a core automation feature; otherwise tool-calling stack is praised as "mostly fine."
- **No new praise/complaints** in PR discussions (comments undefined on recent PRs).

---

## 8. Backlog Watch — Stale/Needs Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#915](https://github.com/nullclaw/nullclaw/issues/915) Scheduler unauthorized | **~80 days** (opened 2026-05-15) | High-impact user blocker; no maintainer reply or triage label visible. Needs root-cause analysis: auth context propagation, token refresh, or config gap. |
| [#956](https://github.com/nullclaw/nullclaw/pull/956) Alpine 3.24 bump | **~50 days** | Routine but stale Dependabot PR; CI may need updates for new base image. Low risk but should be merged or closed. |
| [#964](https://github.com/nullclaw/nullclaw/pull/964) / [#965](https://github.com/nullclaw/nullclaw/pull/965) Streaming tool calls | Closed recently | Verify follow-up: docs, changelog, provider compat matrix, and whether any provider-specific adapters need updates. |

---

**Health Indicator**: 🟡 **Moderate** — Active core development (streaming tools delivered), but a persistent user-facing bug (#915) and stale dependency PR suggest maintainer bandwidth is focused on internals over user triage. Proxy fixes show good operational hygiene.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-04

## 1. Today's Overview
IronClaw shows **intense architectural refactoring activity** with 50 PRs updated and 20 issues touched in the last 24 hours. The project is deep in "Wave 3" of a major crate re-layering effort (WS2/WS3/WS4/WS6 workstreams), moving `wit/` definitions, splitting obligations, tightening secrets dependencies, and retiring legacy naming (`local_runtime`). Simultaneously, several CI/test infrastructure bugs surfaced that block unrelated PRs. No releases were cut today. The velocity suggests a focused sprint on internal architecture over user-facing features.

## 2. Releases
**No new releases today.** The last release PR (#5598) remains open with breaking changes to `ironclaw_common` (0.4.2→0.5.0) and `ironclaw_skills` (0.3.0→0.4.0), but has not been merged.

## 3. Project Progress — Merged/Closed PRs Today (17 total)
| PR | Title | Workstream | Status |
|----|-------|------------|--------|
| [#7064](https://github.com/nearai/ironclaw/pull/7064) | refactor(loop): shed model gateway & tool disclosure into `loop_host` (WS3/WS4) | WS3/WS4 | **Closed** |
| [#7024](https://github.com/nearai/ironclaw/pull/7024) | fix(extensions): resolve custom MCP auth during registration | Extensions/Auth | **Closed** |
| [#7088](https://github.com/nearai/ironclaw/pull/7088) | fix(extensions): expose custom MCP registration to model | Extensions | **Closed** |
| [#7049](https://github.com/nearai/ironclaw/pull/7049) | docs: add weekly Wednesday release strategy | Process | **Closed** |
| [#7023](https://github.com/nearai/ironclaw/pull/7023) | chore(deps): bump everything-else group (6 updates) | Dependencies | **Closed** |
| [#7100](https://github.com/nearai/ironclaw/issues/7100) | CI: Reborn test planner fails on `crates/AGENTS.md` | CI/Testing | **Closed** (as issue) |

**Key advances**: The Loop crate shed its model gateway; MCP auth resolution and model-exposed registration landed; release cadence documented. The Wave 3 structural PRs (#7084, #7094, #7096, #7090, #7080, #7065, #7101, #7099) remain open and under review.

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#7087](https://github.com/nearai/ironclaw/issues/7087) | Issue | 3 | **CI test planner hard-fails** on `.claude/`, `Dockerfile`, `.githooks/`, `crates/AGENTS.md`, `test-tools/`, scripts — blocks Wave 3 PR (#7084) |
| [#7100](https://github.com/nearai/ironclaw/issues/7100) | Issue | 2 | **Reborn planner unmapped crate paths** (`crates/AGENTS.md`, `Architecture.md`, `README.md`) — fail-closed before tests run |
| [#7085](https://github.com/nearai/ironclaw/issues/7085) | Issue | 2 | **`check-version-bumps.sh` silently skips WIT version check on macOS** (BSD `sed` incompatibility) |
| [#7077](https://github.com/nearai/ironclaw/pull/7077) | PR | — | **Fix repeated Google auth** per service — one vendor auth should cover all extensions sharing account |
| [#6994](https://github.com/nearai/ironclaw/pull/6994) | PR | — | **OOBE onboarding prototype** — carousel, inline cards, agent-mode pill (UI-only, design recovery) |

**Underlying theme**: CI/test infrastructure fragility is blocking architectural work; auth UX for multi-service extensions is a user pain point; onboarding UX is being prototyped but not yet merged.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#7087](https://github.com/nearai/ironclaw/issues/7087) | Reborn test planner fails entire workflow on any `.claude/`, `Dockerfile`, `.githooks/`, `crates/AGENTS.md`, `test-tools/`, scripts change — blocks all PRs touching these paths | Partially in [#7084](https://github.com/nearai/ironclaw/pull/7084) (commit `1f66b58`) |
| **High** | [#7100](https://github.com/nearai/ironclaw/issues/7100) | Any PR editing `crates/AGENTS.md`, `Architecture.md`, `README.md` fails before tests run — crate-family map unreachable | — |
| **High** | [#7081](https://github.com/nearai/ironclaw/issues/7081) | Docker fail-closed gate (`IRONCLAW_REQUIRE_DOCKER_TESTS`) never set in CI — sandbox tests silently skip instead of failing loudly | — |
| **Medium** | [#7083](https://github.com/nearai/ironclaw/issues/7083) | Coverage tooling blind to entire `crates/extensions/` family (5 crates) since #7037 colocated them — absent from per-crate & aggregate tables | Targeted in [#7094](https://github.com/nearai/ironclaw/pull/7094) |
| **Medium** | [#7085](https://github.com/nearai/ironclaw/issues/7085) | `check-version-bumps.sh` uses GNU `sed` `\+` — silently skips WIT version cross-check on macOS/BSD | — |
| **Medium** | [#7082](https://github.com/nearai/ironclaw/issues/7082) | `builtin.skill_install`: inline multi-file installs unreachable; URL installs drop `files/source/source_url` fields | — |
| **Low** | [#7086](https://github.com/nearai/ironclaw/issues/7086) | `.claude/commands/add-tool.md` references deleted `tools-src/` tree — stale docs | — |
| **Low** | [#7078](https://github.com/nearai/ironclaw/issues/7078) | Shared-vendor OAuth scope ceiling is store-wide, not caller-scoped — over-grants scopes across extensions | Fix in [#7077](https://github.com/nearai/ironclaw/pull/7077) |

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Weekly Wednesday release cadence** | [#7049](https://github.com/nearai/ironclaw/pull/7049) (merged) | **High** — process doc merged, implies imminent adoption |
| **OOBE onboarding (carousel, agent-mode pill)** | [#6994](https://github.com/nearai/ironclaw/pull/6994) | **Medium** — UI prototype, design-recovered, no backend |
| **Skills self-create/find/choose/use (Epic)** | [#6941](https://github.com/nearai/ironclaw/issues/6941) | **Low** — large epic, subset of #6565, multi-person, measured |
| **Channel-first onboarding (General Assistant)** | [#7044](https://github.com/nearai/ironclaw/issues/7044) | **Medium** — product-focused, blank-slate problem identified |
| **Billing support escalation pathways** | [#7097](https://github.com/nearai/ironclaw/issues/7097) | **Low** — P2 feedback, not engineering-blocking |

**Prediction**: The release-process doc (#7049) and Wave 3 architectural PRs are the nearest shippable changes. User-facing onboarding (#6994, #7044) remains prototype/design phase.

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Repeated Google authentication per service** | [#7069](https://github.com/nearai/ironclaw/issues/7069) (bug_bash_P1, Railway instance) — "Each Google service requests separate auth even after completing flow multiple times" | High — blocks multi-service extension use |
| **Blank slate on first login — no guidance** | [#7044](https://github.com/nearai/ironclaw/issues/7044) — "WebUI opens to blank slate; burden on user to imagine use case" | High — adoption friction for General Assistant |
| **Billing help unclear** | [#7097](https://github.com/nearai/ironclaw/issues/7097) — "User uncertain who handles billing issues; page lacks resolution pathways" | Medium — support escalation gap |
| **Custom MCP auth not model-visible** | [#7088](https://github.com/nearai/ironclaw/pull/7088) (fixed) — registration pipeline existed but no model tool | Medium — now resolved |

**Overall sentiment**: Technical users hit CI/auth rough edges; new users hit onboarding void. Fixes for auth (#7077) and MCP exposure (#7088) are in flight; onboarding remains a gap.

## 8. Backlog Watch — Stale/Unanswered Items Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#5598](https://github.com/nearai/ironclaw/pull/5598) | **33 days** (created 2026-07-03) | **Release PR with breaking changes** — `ironclaw_common` 0.5.0, `ironclaw_skills` 0.4.0 — unmerged, blocks version publishes | Open, updated today by bot |
| [#6481](https://github.com/nearai/ironclaw/issues/6481) | **13 days** | Epic: Manifest-Driven Extension Lifecycle — closed but no closing PR linked; outcome not visibly shipped | Closed (no PR ref) |
| [#6482](https://github.com/nearai/ironclaw/issues/6482) | **13 days** | Epic: Pluggable Memory Providers — same pattern | Closed (no PR ref) |
| [#6941](https://github.com/nearai/ironclaw/issues/6941) | **4 days** | Skills Epic — 21 acceptance criteria, 4 owned by others, too large for one person | Open, no assignee |
| [#7044](https://github.com/nearai/ironclaw/issues/7044) | **1 day** | Channel-first onboarding — product priority, no PR yet | Open |
| [#7093](https://github.com/nearai/ironclaw/issues/7093) | **0 days** | 17 `include_str!` sites remain across 3 lanes — `REPORT_ONLY=true` test, path to `false` undocumented | Open, fresh |

**Maintainer action items**: 
1. **Merge or close #5598** — release backlog is stale.
2. **Verify epic closures (#6481, #6482)** — ensure outcomes landed.
3. **Triage #6941** — break into assigned sub-issues.
4. **Address CI blockers (#7087, #7100, #7081)** — they impede all Wave 3 work.

---

**Project Health Indicator**: 🟡 **Active but friction-heavy** — High architectural velocity (Wave 3) is underway, but CI/test infrastructure bugs (#7087, #7100, #7081) and a stale release PR (#5598) create drag. User-facing improvements (auth, onboarding) are acknowledged but not yet delivered.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-04

## 1. Today's Overview
LobsterAI shows **moderate maintenance activity** with 12 PRs updated in the last 24 hours (7 closed/merged, 5 open) but only 2 issues updated (both stale, opened April 2026). The merged PRs cluster around three themes: **credit-campaign UI**, **Windows installer hardening**, and **sidebar multi-agent filtering**. No new release was cut. The backlog contains several month-old open PRs (Electron upgrade, retry button, custom provider limit) that remain unmerged, suggesting a bottleneck in review/integration.

## 2. Releases
**None** — No new version published today.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2424](https://github.com/netease-youdao/LobsterAI/pull/2424) | renderer, main, cowork | **Restore active credits campaign** — reverts aced16fc to re-enable 500-credit claim flow, subscription credit-reset entry, and campaign status passthrough. | User-acquisition feature re-enabled; affects onboarding & retention. |
| [#2419](https://github.com/netease-youdao/LobsterAI/pull/2419) | renderer, docs, main, cowork | **Add startup credit campaign** — popup + persistent new-conversation entry with login continuation & claim tracking. | New user-acquisition funnel; configurable via backend. |
| [#2420](https://github.com/netease-youdao/LobsterAI/pull/2420) | platform: windows | **NSIS installer: re-kill survivor processes on every stop-poll round** — fixes race where stale processes survived uninstall/update. | Improves Windows update reliability; reduces “app still running” errors. |
| [#2418](https://github.com/netease-youdao/LobsterAI/pull/2418) | renderer, docs, cowork | **Sidebar: multi-agent task activity filter** — Codex-style filter button (hidden when collapsed) with blue indicator for tasks needing attention. | UX improvement for multi-agent workflows; discoverability of pending tasks. |
| [#2423](https://github.com/netease-youdao/LobsterAI/pull/2423) | renderer, docs, main, openclaw, cowork, artifacts | **Revert “Liuzhq/fix btw tools”** — rolls back #2422/#2421 (duplicate tooling fixes). | Housekeeping; no functional change. |

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [Issue #1206](https://github.com/netease-youdao/LobsterAI/issues/1206) — *kimi2.5 duplicate progress replies* | 1 comment, stale since Apr 2026 | **Model-specific streaming bug** — private deployment of kimi2.5 emits duplicate “current action” messages, confusing users. Switching models works, so it’s a provider-adapter issue. |
| [Issue #1213](https://github.com/netease-youdao/LobsterAI/issues/1213) + [PR #1214](https://github.com/netease-youdao/LobsterAI/pull/1214) — *Export session as Markdown* | 1 comment each, stale since Apr 2026 | **Portable conversation records** — users need editable, searchable, version-controllable exports (vs. current image-only). PR #1214 implements the feature but awaits review. |

*No PR has >0 reactions/comments in the last 24h; the “hot” items are the only ones with any discussion.*

## 5. Bugs & Stability
| Severity | Item | Status | Fix PR? |
|----------|------|--------|---------|
| **Medium** | [#1206](https://github.com/netease-youdao/LobsterAI/issues/1206) — kimi2.5 duplicate progress events (Win10, v2026.3.30) | Open, stale | No |
| **Low** | [#1209](https://github.com/netease-youdao/LobsterAI/pull/1209) — Web search blocked by unsupported Chrome flag (`--disable-blink-features=AutomationControlled`) injected externally | Open PR, stale | Yes (#1209) |
| **Low** | [#2420](https://github.com/netease-youdao/LobsterAI/pull/2420) — NSIS survivor processes on uninstall/update | **Merged** | Yes (#2420) |

*No crashes or regressions reported today.*

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **Export session as Markdown** | [Issue #1213](https://github.com/netease-youdao/LobsterAI/issues/1213) + [PR #1214](https://github.com/netease-youdao/LobsterAI/pull/1214) | **High** — PR complete, uses existing `saveInlineFile` IPC, only needs review. |
| **Manual retry button for transient errors (429, network, 5xx)** | [PR #1208](https://github.com/netease-youdao/LobsterAI/pull/1208) | **Medium** — well-scoped, adds `RETRYABLE_ERROR_KEYS` classification; stale since Apr. |
| **Raise custom provider limit from 10 → 20** | [PR #1212](https://github.com/netease-youdao/LobsterAI/pull/1212) | **Medium** — simple config change; unblocks power users. |
| **Electron 40 → 43 upgrade** | [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (Dependabot) | **Low/Medium** — security/maintenance; blocked by test matrix. |

## 7. User Feedback Summary
- **Pain points**:  
  - *kimi2.5 private deploy* emits noisy duplicate progress toasts (#1206).  
  - *Conversation portability* limited to images; users manually copy or screenshot (#1213).  
  - *Transient API errors* force full message re-type; no one-click retry (#1208).  
- **Use cases**:  
  - Multi-agent task triage (new sidebar filter #2418).  
  - Windows enterprise deployment (installer hardening #2420).  
- **Satisfaction signals**:  
  - Credit-campaign work (#2419, #2424) shows focus on onboarding/retention.  
  - Zero community reactions on recent PRs suggests low visibility or contributor fatigue.

## 8. Backlog Watch (Stale ≥ 30 days, High Value)
| Item | Age | Why It Matters | Blocker |
|------|-----|----------------|---------|
| [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Electron 40→43 | 124 days | Security patches, V8 updates, Windows ARM64 support | CI/test failures? |
| [PR #1208](https://github.com/netease-youdao/LobsterAI/pull/1208) — Retry button for Cowork | 125 days | Reduces friction on 429/5xx; improves perceived reliability | Review bandwidth |
| [PR #1212](https://github.com/netease-youdao/LobsterAI/pull/1212) — 20 custom providers | 125 days | Power-user retention; trivial code change | Review bandwidth |
| [PR #1214](https://github.com/netease-youdao/LobsterAI/pull/1214) — Markdown export | 125 days | Top-voted UX gap; implementation done | Review bandwidth |
| [Issue #1206](https://github.com/netease-youdao/LobsterAI/issues/1206) — kimi2.5 duplicate progress | 125 days | Blocks private-deploy users on specific model | Root-cause in provider adapter |

> **Maintainer action suggested**: Batch-review the four stale PRs (#1208, #1212, #1214, #1277) — they are low-risk, high-value, and collectively unblock several user segments. Assign a “stale PR triage” label to prevent recurrence.

---
*Digest generated from GitHub API data (issues, PRs, releases) for netease-youdao/LobsterAI as of 2026-08-04 00:00 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-04

## 1. Today's Overview
The Moltis repository shows **minimal activity** over the past 24 hours: no issue updates, no releases, and only one open pull request (#1183) updated yesterday. The project appears to be in a quiet maintenance phase with development focus concentrated on a single feature branch for MCP (Model Context Protocol) server management. No community discussions, bug reports, or merged work were recorded today.

## 2. Releases
**No new releases** published today or in the recent period covered by this data.

## 3. Project Progress
**No PRs merged or closed today.** The sole active PR remains open:
- **#1183** `feat(mcp): add managed repository bundles` — *Author: penso* — *Updated: 2026-08-03*  
  This PR introduces managed Git repository bundles for MCP servers, supporting discovery, preview, install, update, rollback, and removal. It adds HTTPS credentials, pinned SSH transport, vault lifecycle integration, and imported repository-backed MCP configurations, aiming to simplify web onboarding.  
  🔗 [moltis-org/moltis#1183](https://github.com/moltis-org/moltis/pull/1183)

## 4. Community Hot Topics
**No active community discussions** in the last 24 hours. The only candidate is PR #1183, which currently has **0 comments and 0 reactions**, indicating it has not yet attracted review or debate.

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.** No issue activity means no stability signals—positive or negative—from the past day.

## 6. Feature Requests & Roadmap Signals
The only roadmap signal is the work in **PR #1183**, which expands MCP server lifecycle management via Git-backed bundles. This suggests the team is prioritizing:
- Declarative, version-controlled MCP server provisioning
- Secure credential handling (HTTPS/SSH) and vault integration
- Improved onboarding UX for web users  
Given the scope, this feature is a strong candidate for the next minor or major release once reviewed and merged.

## 7. User Feedback Summary
**No direct user feedback** (issues, discussions, reactions) captured in the last 24 hours. The absence of reports may indicate either a stable current release or low community engagement at this moment.

## 7. Backlog Watch
No long-unanswered issues or stale PRs are visible in today’s data slice. However, **PR #1183 has been open since 2026-08-02 without review activity**—maintainers should consider triaging it soon to avoid contributor friction.

---
*Data source: GitHub API snapshot for moltis-org/moltis covering 2026-08-03 to 2026-08-04. Links point to live GitHub objects.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-04

---

## 1. Today's Overview

CoPaw (QwenPaw) shows **high development velocity** with 64 total GitHub activities (14 issues, 50 PRs) in the last 24 hours and a **beta release (v2.1.0-beta.1)** published. The project is actively addressing stability regressions (WebView2 crash, skills API timeout, ACP text loss), hardening provider fallback logic, and polishing desktop UX (file drag-and-drop, attachment rendering). Open issue count remains moderate (10 active), with several high-impact bugs already having fix PRs in review. Community engagement is evident from first-time contributor PRs and detailed user-reported scenarios.

---

## 2. Releases

### **v2.1.0-beta.1** (Beta) — Published 2026-08-03
[Release Page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.1) | [Installation Verification Issue #6656](https://github.com/agentscope-ai/QwenPaw/issues/6656)

| Change | Type | Details |
|--------|------|---------|
| Fix stale channel identity leaking into new chats | Bug Fix | Prevents cross-chat contamination in chat state management ([#6382](https://github.com/agentscope-ai/QwenPaw/pull/6382)) |
| Wobble sidebar inbox on new approvals + color-code badge dot | UX Enhancement | Visual notification for pending approvals in inbox sidebar |

> **Note**: This is a **beta** release. Installation verification checklist (#6656) requires 4 platform checkpoints (Windows/macOS/Linux/Web) to pass within 4 hours of publish. A follow-up version bump to `2.1.0b2` is already merged ([#6665](https://github.com/agentscope-ai/QwenPaw/pull/6665)).

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Category | Linked Issue |
|----|-------|----------|--------------|
| [#6634](https://github.com/agentscope-ai/QwenPaw/pull/6634) | **fix(skills): exclude full content from skill list endpoints** | Performance/Stability | Fixes [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) — Skills pages timeout on slow networks (MB-level payloads vs 30s frontend timeout) |
| [#6650](https://github.com/agentscope-ai/QwenPaw/pull/6650) | **fix(skill): loading redundancy** | Performance | Separates lightweight list summaries from on-demand detail endpoints; reads only bounded YAML frontmatter |
| [#6597](https://github.com/agentscope-ai/QwenPaw/pull/6597) | **fix(checkpoints): restore auto snapshots in web workspace bootstrap** | Reliability | Restores automatic checkpoints after successful responses; aligns web bootstrap with agent bootstrap |
| [#6203](https://github.com/agentscope-ai/QwenPaw/pull/6203) | **fix(utils): bound and hide Windows tasklist liveness probe** | Stability (Windows) | Adds timeout, hides console window, handles missing `tasklist` — first-time contributor |
| [#6661](https://github.com/agentscope-ai/QwenPaw/pull/6661) | **ci(plugins): add platform publish workflow** | CI/CD | Enables manual dispatch for targeted plugin publishes |
| [#6665](https://github.com/agentscope-ai/QwenPaw/pull/6665) | **chore: bump version to 2.1.0b2** | Release | Post-beta version increment |

**Key Advancement**: Skills API payload reduction (~MB → KB) resolves a critical load-time regression for workspaces with many skills. Checkpoint restoration improves session recovery reliability.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Reactions | Core Need |
|------|----------|-----------|-----------|
| [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) **Support GPT-5.6 prompt caching parameters** | 9 | 0 | **Cost/latency optimization** for multi-turn agent loops via `prompt_cache_key`, `prompt_cache_options`, `prompt_cache_breakpoint` in Responses API provider |
| [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) **`spawn_subagent` treats empty `batch` as batch mode** | 6 | 0 | **API compatibility** — empty placeholders (`[]`, `""`) from Responses-compatible providers incorrectly trigger batch path; two fix PRs: [#6595](https://github.com/agentscope-ai/QwenPaw/pull/6595), [#6658](https://github.com/agentscope-ai/QwenPaw/pull/6658) |
| [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) **Long-running shell commands bypass timeout, block Feishu session 1.5h** | 3 | 0 | **Session reliability** — orphan subprocess on cancel, no per-channel total timeout; affects channel scalability |
| [#6614](https://github.com/agentscope-ai/QwenPaw/issues/6614) **WeChat cron push silent failure (ret=-2, context_token 失效)** | 2 | 0 | **Channel integration health** — cron reports success but delivery fails; burned ~44M tokens in retries |
| [#6647](https://github.com/agentscope-ai/QwenPaw/issues/6647) **Desktop UI goes fully black on WebView2 crash (0xc0000006)** | 1 | 0 | **Desktop stability** — no recovery path when browser process crashes mid-session |

> **Pattern**: Users are hitting **integration edge cases** (provider quirks, channel timeouts, WebView2 instability) that bypass existing safeguards. Prompt caching (#6649) signals growing production cost-sensitivity.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR | Impact |
|----------|-------|--------|--------|--------|
| **Critical** | [#6647](https://github.com/agentscope-ai/QwenPaw/issues/6647) Desktop UI black screen on WebView2 crash (STATUS_IN_PAGE_ERROR) | Open | — | Complete desktop session loss; no recovery |
| **High** | [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) Shell command timeout bypass → 1.5h Feishu session block | Open | — | Channel starvation, orphan subprocesses |
| **High** | [#6614](https://github.com/agentscope-ai/QwenPaw/issues/6614) WeChat cron silent delivery failure (ret=-2) | Open | — | User-facing feature broken; token waste |
| **Medium** | [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) `spawn_subagent` empty batch placeholder misrouting | Open | [#6595](https://github.com/agentscope-ai/QwenPaw/pull/6595), [#6658](https://github.com/agentscope-ai/QwenPaw/pull/6658) | Subagent spawning fails for Responses-compatible providers |
| **Medium** | [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) ACP `delegate_external_agent` loses final text on notification race | Open | [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) | External agent output silently dropped |
| **Medium** | [#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) Console channel doesn't render security approval prompts → silent 300s timeout | Closed | — | Console users cannot approve risky commands |
| **Low** | [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) Skills pages timeout on slow networks (MB payloads) | **Closed** | [#6634](https://github.com/agentscope-ai/QwenPaw/pull/6634), [#6650](https://github.com/agentscope-ai/QwenPaw/pull/6650) | **Fixed** — payload optimization merged |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for Next Version | Rationale |
|---------|-------|----------------------------|-----------|
| **GPT-5.6 prompt caching support** | [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | High | 9 comments, explicit API parameter spec; aligns with provider unification PR [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) |
| **Model fallback with cooldown** | [#2199](https://github.com/agentscope-ai/QwenPaw/pull/2199), [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659) | High | Long-standing (#2199 from Mar), multiple linked issues (#1327, #2089); PR [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659) under review |
| **Per-task artifact directories (not flat `media/`)** | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | Medium | Clear UX pain, low complexity |
| **Direct file path reading on drag-drop (no upload copy)** | [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) | Medium | Parity with "majority of desktop agent tools" |
| **Multi-line file name display in chat composer** | [#6583](https://github.com/agentscope-ai/QwenPaw/issues/6642) | Medium | PR [#6662](https://github.com/agentscope-ai/QwenPaw/pull/6662) open — attachment preview wrapping |
| **User context transparent pass-through (Chat API → Agent → Tool → MCP → SKILL CLI)** | [#6525](https://github.com/agentscope-ai/QwenPaw/pull/6525) | Medium | Large architectural PR open since Jul 28; enables multi-tenant audit trails |
| **Structured run outcome in SSE for API automation** | [#5930](https://github.com/agentscope-ai/QwenPaw/pull/5930) | Low-Medium | Open since Jul 10; addresses Java service integration gap |

---

## 7. User Feedback Summary — Real Pain Points

| User | Scenario | Pain Point | Sentiment |
|------|----------|------------|-----------|
| **rerbin** (multiple issues) | Daily desktop usage | File drag-drop UX (single-line overflow, unnecessary copy to `media/`), flat artifact directory, console approval invisibility | 😐 Frustrated — detailed repros, workaround-seeking |
| **feng183043996** | Feishu channel automation | 1.5h session block from dedup script; follow-up messages queued behind stuck task | 😠 Critical — production blocker |
| **angelozb** | WeChat scheduled push | Silent failure for 8 days; cron says success, WeChat returns `ret=-2 context_token 失效`; ~44M tokens burned | 😠 Critical — trust erosion |
| **adolfishxu** | Windows portable edition | WebView2 crash (0xc0000006) → full black UI, no recovery | 😠 Critical — data loss risk |
| **xiaobing006** | Windows desktop + Conda | No bundled Python; system Python unavailable in managed envs | 😐 Workflow friction |
| **Moonlit-Pages** | Slow network + large skill workspace | Skills page fails to load (30s timeout vs MB payload) | 😐 **Resolved** via [#6634](https://github.com/agentscope-ai/QwenPaw/pull/6634) |
| **samluoabc** | GPT-5.6 multi-turn agents | Missing prompt caching params → higher latency/cost | 😐 Feature gap |

> **Theme**: **Channel reliability** (Feishu, WeChat, Console) and **desktop stability** (WebView2, Python env) dominate production complaints. File/artifact UX is a recurring desktop polish request.

---

## 8. Backlog Watch — Stagnant High-Value Items

| Item | Age | Type | Why It Needs Attention |
|------|-----|------|------------------------|
| [#2199](https://github.com/agentscope-ai/QwenPaw/pull/2199) **Model fallback with cooldown** | 4.5 months | Feature PR | Blocks reliability for multi-provider deployments; new implementation [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659) under review — **decide & merge** |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) **Unify provider discovery, metadata, routing, agent controls** | 2 weeks | Feature PR | Foundation for #6649 (prompt caching) and model fallback; large scope — needs maintainer review bandwidth |
| [#6525](https://github.com/agentscope-ai/QwenPaw/pull/6525) **User context transparent pass-through** | 1 week | Feature PR | Cross-cutting architecture change; enables audit/multi-tenancy — **design review needed** |
| [#5930](https://github.com/agentscope-ai/QwenPaw/pull/5930) **Structured run outcome in SSE** | 3.5 weeks | Feature PR | API automation gap (Java services); **low reviewer attention** |
| [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) **Shell command timeout bypass / per-channel total timeout** | 4 days | Bug | Production session starvation; **no fix PR yet** — needs design for channel-level watchdog |
| [#6614](https://github.com/agentscope-ai/QwenPaw/issues/6614) **WeChat cron silent failure** | 4 days | Bug | Token waste + trust loss; **no fix PR** — needs WeChat token refresh/retry logic |
| [#6647](https://github.com/agentscope-ai/QwenPaw/issues/6647) **WebView2 crash → black UI, no recovery** | 1 day | Bug | **No fix PR** — requires WebView2 process crash handling + UI fallback |

---

## Project Health Indicators

| Metric | Signal |
|--------|--------|
| **Release cadence** | Beta → b2 within 24h — active iteration |
| **Bug fix velocity** | 3 critical bugs fixed in 24h (#6633, #6634, #6650, #6597, #6203) |
| **First-time contributors** | 2 merged (#6203, #6660) — healthy onboarding |
| **Open critical bugs** | 3 (WebView2, Feishu timeout, WeChat delivery) — **needs triage priority** |
| **Architectural PRs in flight** | 3 major (provider unification, context pass-through, model fallback) — **review bottleneck risk** |

---

**Next Watch**: v2.1.0-beta.2 verification (#6656), model fallback merge decision (#6659 vs #2199), and whether channel reliability bugs (#6608, #6614, #6655) get fix PRs before next beta.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-04

## 1. Today's Overview
ZeroClaw shows **high velocity with architectural focus**: 14 active issues and 50 active PRs in the last 24 hours, but only 1 PR merged. The project is in a **heavy design-and-implementation phase** around a major epic (#9727) to add a multi-agent sidebar to `zerocode`, spawning 9 follow-up issues and several stacked PRs. Concurrently, multiple RFCs (#6998, #9621, #9530) are under maintainer review for memory consolidation, telemetry, and risk labeling. Security hardening continues (PR #9737, #9410). No release cut today — the branch is absorbing foundational changes.

## 2. Releases
**No new releases** published today.

## 3. Project Progress (Merged/Closed Today)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| *None merged* | — | — | The single closed/merged PR in the 24h window is not listed in the top-20; maintainers are holding merges while stacked work (#9738 → #9739) and RFCs settle. |

> **Note**: 49 PRs remain open; several are stacked (e.g., #9738 base for #9739) and await RFC resolution or CI green.

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) | Issue (RFC) | 3 | 0 | **Schema-validated memory consolidation** — replace fragile JSON-in-prompt parsing with bounded, provider-agnostic validation. High risk, needs maintainer review. |
| [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) | Issue (RFC) | 2 | 0 | **Opt-in product telemetry** — maintainers lack usage data for feature investment decisions; proposes staged, operator-reviewed reports. |
| [#9005](https://github.com/zeroclaw-labs/zeroclaw/issues/9005) | Issue (Feature) | 2 | 0 | **Inject harness context into agent prompts** — agents need to know which UI (Chat/Code/CLI) is driving the session. Accepted, follow-up pending. |
| [#9727](https://github.com/zeroclaw-labs/zeroclaw/issues/9727) | Issue (Epic) | 0 | 0 | **Multi-agent sidebar for zerocode** — users run multiple agents but can only see one pane at a time. Spawned 9 sub-issues + PRs today. |
| [#9738](https://github.com/zeroclaw-labs/zeroclaw/pull/9738) | PR (feat) | — | 0 | **`keep_siblings` opt-out for `session/new`** — daemon change required to keep idle background sessions alive (prerequisite for sidebar). |
| [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) | PR (feat) | — | 0 | **Multi-session panes + agent sidebar** — stacked on #9738; implements the full sidebar UX with Quickstart relocation. |

**Signal**: The community (core contributors) is aligning around **multi-session UX** and **observability gaps**. RFCs indicate maintainers want broader consensus before merging high-risk changes.

## 5. Bugs & Stability (Reported/Fixed Today)
| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **High** | [#9736](https://github.com/zeroclaw-labs/zeroclaw/issues/9736) RPC prompt path never writes persisted `SessionState` (idle/running/error) | Open (new) | — |
| **High** | [#9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737) Tool pipelines bypass agent policy enforcement | Open (PR) | #9737 |
| **High** | [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) Command audit logging defaulted to enabled (security exposure) | Open (PR) | #9410 |
| **High** | [#9313](https://github.com/zeroclaw-labs/zeroclaw/pull/9313) WeChat sync cursor persisted before batch enqueued → message loss on crash | Open (PR) | #9313 |
| **High** | [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) Config `set` leaves auto-created map aliases on failure | Open (PR) | #9281 |
| **Medium** | [#9197](https://github.com/zeroclaw-labs/zeroclaw/pull/9197) CLI `channel start` Ctrl+C causes restart loop | Open (PR) | #9197 |
| **High** | [#9725](https://github.com/zeroclaw-labs/zeroclaw/pull/9725) Channel reload removing all channels leaves stale delivery registry | Open (PR) | #9725 |

**Trend**: Security and data-loss bugs dominate; fixes are authored but awaiting review/merge.

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood (Next Version) | Rationale |
|---------|--------|---------------------------|-----------|
| **Multi-agent sidebar in zerocode** | Epic #9727 + 9 sub-issues + PRs #9738, #9739 | **High** — stacked PRs ready, only daemon opt-out (#9738) blocks | Core UX gap; all sub-tasks filed same day; principal contributor driving |
| **Schema-validated memory consolidation** | RFC #6998 | **Medium** — RFC open, high risk, needs maintainer sign-off | Architectural; affects all providers; fallback path is fragile |
| **Opt-in telemetry with operator review** | RFC #9621 | **Medium** — early discussion, security-labeled | Maintainers explicitly need usage data for decisions |
| **Harness context in agent prompts** | #9005 (accepted) | **High** — accepted, follow-up labeled | Low-risk prompt injection; unblocks agent awareness |
| **Per-server custom CA trust for MCP** | PR #9405 | **High** — PR open, validated path | Enterprise TLS requirement; already implemented |
| **DeepSeek DSML / `<|tool_call|>` parsing** | PR #9723 | **High** — new PR, provider compatibility | Directly unblocks DeepSeek-family models |

## 7. User Feedback Summary
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Cannot run/monitor multiple agents side-by-side** | Epic #9727: “Users running several agents have no way to see them side by side, watch progress, or jump between them” | New epic, 9 sub-issues filed today |
| **Session state invisible after socket drop** | #9734: “After socket drop, rebuilt panes re-attach every tracked session sequentially… eager initialization” | New |
| **No notification when daemon kills session** | #9733: “When daemon removes a session… no proactive notification” | New |
| **String-matching error sentinels in RPC** | #9732: “TUI string-matches `session_not_found` suffix” | New |
| **Quickstart buried in mode bar** | #9731: “Wizard no longer needs top-level tab” | New (part of sidebar epic) |
| **WeChat message loss on crash** | PR #9313: cursor persisted before enqueue | 1 PR, high severity |
| **Config aliases leaked on failed `set`** | PR #9281: “Failed pre-commit writes discard newly materialized aliases transactionally” | 1 PR, high severity |

**Satisfaction signal**: No explicit satisfaction comments; all 14 issues are enhancements/bugs — users/contributors are **pushing boundaries**, not complaining about basics.

## 8. Backlog Watch (Stale / Needs Maintainer Attention)
| Item | Age | Labels | Why It Matters |
|------|-----|--------|----------------|
| [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) RFC: Schema-validated memory consolidation | 67 days | `priority:p2`, `risk:high`, `needs-maintainer-review`, `type:rfc` | Cross-provider memory reliability; high-risk path, no decision yet |
| [#9530](https://github.com/zeroclaw-labs/zeroclaw/issues/9530) RFC: Risk precedence for test-only changes in high-risk paths | 6 days | `priority:p2`, `needs-maintainer-review`, `type:rfc` | Docs conflict blocks contributor onboarding; low risk but process-critical |
| [#9229](https://github.com/zeroclaw-labs/zeroclaw/pull/9229) fix(runtime): make interactive Ctrl+C state-aware | 14 days | `priority:p2`, `risk:high`, `size:L` | UX reliability; large refactor, author action needed |
| [#9329](https://github.com/zeroclaw-labs/zeroclaw/pull/9329) refactor(zerocode): derive slash commands from shared catalogue | 11 days | `priority:p2`, `risk:high`, `size:L`, `type:refactor` | Centralizes command definitions; touches CLI/TUI/daemon |
| [#9405](https://github.com/zeroclaw-labs/zeroclaw/pull/9405) feat(mcp): per-server custom CA trust | 9 days | `priority:p2`, `risk:high`, `size:L` | Enterprise TLS; validation path done, awaiting review |
| [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) fix(security): default command audit logging to disabled | 9 days | `priority:p1`, `domain:security`, `risk:high` | Security default flip; binding scope, needs maintainer triage |

---

**Project Health Indicator**: 🟡 **Active Development / Pre-Release Stabilization**  
High contributor velocity on a focused epic, but RFC backlog and stacked PRs indicate **merge throughput is the bottleneck**. Expect a feature-rich release once #9738/#9739 land and RFCs resolve.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*