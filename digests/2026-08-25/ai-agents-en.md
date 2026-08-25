# OpenClaw Ecosystem Digest 2026-08-25

> Issues: 205 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-25 01:41 UTC

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

# OpenClaw Project Digest — 2026-08-25

## 1. Today's Overview
OpenClaw continues its rapid beta cadence with **v2026.8.1-beta.3** released today, bringing GPT-5.6 model family support and Control UX improvements. The project shows **very high velocity**: 205 issues and 500 PRs updated in 24 hours, with 72 PRs merged/closed — indicating active stabilization work. However, the open issue count (191 active) and numerous P1 bugs tagged `diamond lobster` (highest severity) signal a **stabilization-heavy phase** where the team is chasing regressions across multi-agent sessions, channel delivery, and provider integrations. The PR queue (428 open) includes many `needs proof` and `waiting on author` items, suggesting review throughput is a current bottleneck.

---

## 2. Releases
### v2026.8.1-beta.3 — *OpenClaw 2026.8.1-beta.3* ([Release Notes](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1-beta.3))
**Highlights**
- **GPT-5.6 Sol, Terra, Luna, Ultra** reasoning support across OpenClaw and Codex runtime
- **Control UI first-run setup** now continues verified model setup into Custodian and optional channel setup
- **Puppeteer-compatible CDP relay** for paired Chrome sessions
- Explicit extension points for custom model routing (details truncated in feed)

**Migration Notes**
- No breaking changes documented in highlights; this is a beta increment on the 2026.8.1 line.
- Operators running beta.2 should validate via the release validation worksheet (see Issue #125626).

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Summary | Risk Tags |
|----|------|---------|-----------|
| [#128371](https://github.com/openclaw/openclaw/pull/128371) | Release automation | Authorized focused beta evidence for beta.3; unblocked release despite historical test flakes | 🚨 automation, 🚨 security-boundary |
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | Gateway, multi-agent | Keep conversation delivery within agent bindings; fixes cross-agent message leakage across Discord, iMessage, Matrix, Mattermost, Slack, Telegram, Feishu | 🚨 compatibility, 🚨 message-delivery, 🚨 security-boundary |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | Models, Control UI | Keep Claude CLI OAuth available in Control UI; fixes refresh ownership loss after Gateway restart | 🚨 auth-provider |
| [#123975](https://github.com/openclaw/openclaw/pull/123975) | Scripts, tooling | Clean up `tsgo` process trees on timeout/signal; adds managed-process owner and optional watchdog | 🚨 automation, 🚨 compatibility |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | Security, Control UI | Admin review of install-policy warnings in UI; adds `acknowledgeInstallPolicyWarning` flag | 🚨 security-boundary |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | Security, CLI | Require acknowledgement for install policy warnings; interactive CLI shows findings before continue | 🚨 compatibility, 🚨 security-boundary |

**Net advancement**: Security hardening (install policy), multi-agent message isolation, OAuth resilience, and release automation reliability.

---

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Comments | Priority | Core Need |
|------|----------|----------|-----------|
| [#125626](https://github.com/openclaw/openclaw/issues/125626) Release validation: v2026.8.1-beta.2 | 18 | Maintainer/P2 | Community-driven release gate; testers validate real gateway upgrades |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie child processes from hook/tool execution | 9 | P1 🦞 | **Runtime degradation** — unreaped `openclaw-hooks`, `bash`, `codex` processes accumulate as zombies |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) Agent-triggered context compaction (self-compact tool) | 8 | P2 | Agents need autonomous `/compact` without user intervention |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) Self-hosted STT/TTS in webchat (bypass browser Speech API) | 7 | P2 🦞 | Webchat ignores `openclaw.json` TTS/STT config; blocks self-hosted voice setups |
| [#114020](https://github.com/openclaw/openclaw/issues/114020) Feishu/Telegram dispatch fails: `runChannelInboundEvent` requires `runDispatchLifecycle` | 7 | P1 🦞 | **Message loss** — channel inbound broken since 2026.7.2-beta.4 |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) `AgentSelectionRequiredError` floods logs under explicit multi-agent ownership | 6 | P1 🦞 | Log spam + session-state impact; logbook plugin, Control UI RPCs, system-agent turns lack `agentId` |
| [#125570](https://github.com/openclaw/openclaw/issues/125570) Skill Workshop update overwrites live skill description, breaking routing | 6 | P1 🦞 | **Data loss** — skill router matches on `description`; proposal description silently replaces capability description |
| [#77202](https://github.com/openclaw/openclaw/issues/77202) Signal channel: live tool-call progress (edit-free pattern) | 5 | P3 | Parity with Telegram's live progress; close "silence gap" on long tool turns |
| [#77467](https://github.com/openclaw/openclaw/issues/77467) MiniMax Portal OAuth token cannot auto-refresh | 5 | P1 🦞 | `refreshOAuth` not implemented; users must re-auth every ~2 hours |
| [#93917](https://github.com/openclaw/openclaw/issues/93917) `genericRepeat` circuit-breaker never fires when exec results vary slightly | 5 | P1 🦞 | Tool-loop detection fails on near-duplicate results; warning path works, critical path doesn't |

**Underlying themes**: Multi-agent session integrity, channel delivery reliability, provider OAuth gaps, and observability (log spam, silent failures).

---

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical (P1, 🦞 diamond lobster)** | [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie process accumulation → runtime degradation | Open | No |
| **Critical** | [#114020](https://github.com/openclaw/openclaw/issues/114020) Feishu/Telegram inbound dispatch broken | Open | No |
| **Critical** | [#126360](https://github.com/openclaw/openclaw/issues/126360) `AgentSelectionRequiredError` log flood + session-state impact | Open | No |
| **Critical** | [#125570](https://github.com/openclaw/openclaw/issues/125570) Skill Workshop update silently breaks skill routing | Open | No |
| **Critical** | [#77467](https://github.com/openclaw/openclaw/issues/77467) MiniMax OAuth no auto-refresh | Open | No |
| **Critical** | [#93917](https://github.com/openclaw/openclaw/issues/93917) Tool-loop circuit-breaker ineffective | Open | [Linked PR open](https://github.com/openclaw/openclaw/issues/93917) |
| **Critical** | [#125838](https://github.com/openclaw/openclaw/issues/125838) QQBot slash commands (`/think`, `/status`) no reply | Open | No |
| **Critical** | [#126521](https://github.com/openclaw/openclaw/issues/126521) `zsh -f -c` interactive expansions break `echo ===` | Open | [Linked PR open](https://github.com/openclaw/openclaw/issues/126521) |
| **Critical** | [#126631](https://github.com/openclaw/openclaw/issues/126631) Sandbox skills bind-mount creates root-owned `/workspace/.openclaw` | Open | [Linked PR open](https://github.com/openclaw/openclaw/issues/126631) |
| **Critical** | [#128156](https://github.com/openclaw/openclaw/issues/128156) Gateway event-loop stalls: 76% time in log redaction regex | Open | [Linked PR open](https://github.com/openclaw/openclaw/issues/128156) |
| **High (P1, 🦪 silver shellfish)** | [#128883](https://github.com/openclaw/openclaw/issues/128883) Codex dynamic `sessions_spawn` loses Gateway resolver | Open | No |
| **High** | [#112173](https://github.com/openclaw/openclaw/issues/112173) ACP workers hang on permission prompts under Windows hidden-console service | Open | No |
| **High** | [#128889](https://github.com/openclaw/openclaw/issues/128889) Windows Session Host worker bundle hash mismatch (Unix mode bits) | Open | No |
| **High** | [#128515](https://github.com/openclaw/openclaw/issues/128515) Config publication doesn't refresh prepared model owners | Open | [Linked PR open](https://github.com/openclaw/openclaw/issues/128515) |
| **High** | [#113130](https://github.com/openclaw/openclaw/issues/113130) Moonshot/Kimi rejects tool schemas with parent-level `anyOf` | Open | No |

**Observation**: 14 P1 bugs updated today, 9 tagged `diamond lobster` (highest impact). Several have linked PRs but remain open — review bandwidth is the constraint.

---

## 6. Feature Requests & Roadmap Signals
| Issue | Priority | Signal | Likelihood for Next Release |
|-------|----------|--------|----------------------------|
| [#6757](https://github.com/openclaw/openclaw/issues/6757) Agent-triggered context compaction | P2 | Autonomous agent workflows; reduces human-in-the-loop | Medium — needs product decision |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) Self-hosted STT/TTS in webchat | P2 🦞 | Enterprise voice deployments; high 👍 (2) | High — clear gap, active discussion |
| [#113411](https://github.com/openclaw/openclaw/issues/113411) Automatic Anthropic model catalog via Models API | P2 | Reduce hand-maintenance burden; follows OpenRouter/xAI/Google pattern | High — maintainer-labeled, aligns with GPT-5.6 add |
| [#53548](https://github.com/openclaw/openclaw/issues/53548) Decouple `mode="session"` from thread binding | P2 | Flexible session spawn for channel-agnostic agents | Medium — needs product decision |
| [#77202](https://github.com/openclaw/openclaw/issues/77202) Signal live tool-call progress | P3 | Channel parity (Telegram has it) | Low — P3, edit-free pattern complexity |
| [#8285](https://github.com/openclaw/openclaw/issues/8285) Auto-send acknowledgment before agent processing | P2 | UX: reduce user uncertainty on message receipt | Medium — common request, low complexity |
| [#8913](https://github.com/openclaw/openclaw/issues/8913) Configurable thinking/reasoning format per channel | P3 | Accessibility/readability (Telegram italics hard to read) | Low — P3, niche |
| [#18985](https://github.com/openclaw/openclaw/issues/18985) Windows 11 MSYS / Fishshell support | P2 | Windows developer onboarding | Medium — installer blocks MSYS today |

**Prediction**: Self-hosted voice (webchat), Anthropic catalog automation, and auto-acknowledgment are the strongest candidates for 2026.8.x or 2026.9.

---

## 7. User Feedback Summary
**Pain Points (from issue narratives)**
- **Multi-agent session fragility**: Explicit ownership mode breaks logbook, Control UI RPCs, system-agent turns (#126360); subagent spawn loses Gateway resolver (#128883); Telegram private topics fail after restart (#128896).
- **Channel delivery unreliability**: Feishu/Telegram inbound broken (#114020); QQBot slash commands silent (#125838); Matrix follow-ups don't steer (#128907); Signal lacks live progress (#77202).
- **Provider OAuth gaps**: MiniMax no refresh (#77467); Fastmail MCP `invalid signing_id` (#119914); GitHub Copilot GHE data-residency break (#127287); DeepSeek V4 catalog costs wrong both directions (#128665).
- **Tool/exec environment bugs**: `zsh` interactive expansions break commands (#126521); sandbox bind-mount permission denial (#126631); Windows Session Host hash mismatch (#128889).
- **Observability gaps**: Log redaction stalls event loop (#128156); `failTurn()` logs `error=Error` without `runId` (#126400); `doctor` strips config fields silently (#126308); cron silent replies marked `not-delivered` indistinguishable from failure (#111851).
- **Skill/Workshop UX**: Update overwrites live skill description (#125570); `workboard_complete` rejects documented `proofId`-only flow (#127034).

**Positive Signals**
- Release validation process engages community testers (#125626, 18 comments).
- Control UI improvements: color-vision palettes (#128954), update action accessibility (#128958), session catalog refresh coalescing (#123535).
- Security hardening: install policy acknowledgment (#116489, #120900) — well-received pattern.

---

## 8. Backlog Watch (Long-Open Important Items)
| Issue | Age | Priority | Why It Matters |
|-------|-----|----------|----------------|
| [#97616](https://github.com/open

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-08-25 | **Projects Analyzed:** 12

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source landscape is **fragmented but highly active**, with 12 tracked projects showing concurrent development across distinct architectural philosophies. A clear bifurcation exists: **platform-scale frameworks** (OpenClaw, ZeroClaw, IronClaw, CoPaw) pursuing multi-agent orchestration, channel ecosystems, and enterprise-grade runtime resilience, versus **specialized tooling** (NanoBot, Moltis, PicoClaw, ZeptoClaw, NullClaw) focusing on provider observability, sandbox diversity, and CLI/REPL ergonomics. **LobsterAI** and **Hermes Agent** occupy a middle ground as desktop-first applications with plugin/skill extensibility. Velocity is uniformly high across the top tier—most projects merge 8–26 PRs daily—indicating a maturing ecosystem where stabilization, provider parity, and multi-channel reliability are shared immediate priorities over novel capability exploration.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed | Latest Release | Health Score* |
|---------|---------------------|-------------------|-------------------|----------------|---------------|
| **OpenClaw** | 205 | 500 | 72 | **Today** (v2026.8.1-beta.3) | 🟡 High velocity, review bottleneck, 14 P1 bugs |
| **ZeroClaw** | 23 | 50 | 5 | None recent | 🟡 Very high velocity, 3 P1 runtime bugs, architectural flux |
| **CoPaw (QwenPaw)** | 21 | 48 | 26 | **Today** (v2.1.1-beta.2) | 🟡 High throughput, critical memory leak (20GB+), session bugs |
| **IronClaw** | 19 | 35 | 17 | v1.3.0 (implied) | 🟢 Strong merge rate, CI investment, 2 fresh Telegram regressions |
| **Hermes Agent** | 10 | 50 | 8 | v0.20.5 (2026-08-19) | 🟡 42 open PRs review load, desktop stability regressions |
| **NanoClaw** | — | 21 | 3 | **Today** (v2.3.0) | 🟢 Active releases, MacOS segfault blocker (#3497) |
| **NanoBot** | 8 | 26 | 12 | None recent | 🟢 High merge rate, observability stack complete, 2 high bugs fixed today |
| **Moltis** | — | 7 | 7 | **Today** (20260824.01) | 🟢 100% merge rate, MTTR ~hours, zero open regressions |
| **LobsterAI** | 3 (stale) | 10 | 10 (2026-08-24) | None recent | 🟢 Maintenance sprint, Electron 43 upgrade stalled 145 days |
| **PicoClaw** | 3 | 3 | 2 | None recent | 🟡 Moderate, WebUI roadmap high, 2 stale integration bugs |
| **NullClaw** | 2 | 1 | 0 | None recent | 🔴 Quiet phase, onboarding regression (#992), stale Dependabot |
| **ZeptoClaw** | 1 | 0 | 0 | None recent | 🟢 Healthy maintenance mode, single maintainer-driven REPL fix |

*Health Score: 🟢 Stable/healthy velocity | 🟡 High velocity with significant risks | 🔴 Low activity or blocking issues*

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Largest community engagement**: 18-comment release validation issue (#125626), 500 PRs/24h indicates broadest contributor base
- **Most comprehensive channel ecosystem**: 7+ messaging platforms (Discord, iMessage, Matrix, Mattermost, Slack, Telegram, Feishu) with active multi-agent isolation work
- **Security-first posture**: Install-policy acknowledgment (#116489, #120900), gateway message leakage fixes (#126424) show production hardening
- **Model provider agility**: GPT-5.6 family support shipped same-day as availability; explicit extension points for custom routing

**Technical Approach Differences:**
- **Gateway-centric architecture**: Centralized message routing, session management, and policy enforcement—unlike NanoBot/IronClaw's more distributed agent-loop models
- **Control UI as first-class operator console**: First-run setup, Custodian integration, color-vision palettes—surpasses Hermes/PicoClaw desktop UX investment
- **Beta-cadence release train**: Date-based betas with community validation worksheets—more structured than NanoClaw's breaking-change gates or ZeroClaw's RFC-driven process

**Community Size Comparison:**
- **OpenClaw** ≈ **ZeroClaw** ≈ **CoPaw** > **IronClaw** > **NanoClaw** > **Hermes** > **NanoBot/Moltis** > **LobsterAI/PicoClaw** > **NullClaw/ZeptoClaw**
- Proxy metrics: PR throughput, issue comment volume, multi-platform channel issues, and release validation participation all point to OpenClaw having the widest active operator base.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Provider OAuth resilience & auto-refresh** | OpenClaw (#77467 MiniMax), NanoBot (QwenCloud #5350), Hermes (Groq/Cerebras #58606), Moltis (xAI Grok OAuth #1240), ZeroClaw (OpenAI-compatible gateway #8486) | Token refresh implementations, device-code flows, backward-compatible provider namespaces |
| **Multi-agent session integrity & isolation** | OpenClaw (#126360, #128883), CoPaw (#7011, #7231 cross-session leaks), IronClaw (#7818 subagent background mode), ZeroClaw (#9726 TaskRecord lifecycle owner) | Explicit agentId propagation, session identity freezing, durable delegation receipts |
| **Channel delivery reliability & parity** | OpenClaw (#114020 Feishu/Telegram, #77202 Signal), NanoBot (#5516 Telegram rich+streaming), CoPaw (#6782 Docker marketplace), PicoClaw (#3338 Slack media), Moltis (#1238 Slack untrusted policies, #1233 WhatsApp bounds) | Inbound dispatch fixes, live progress rendering, media upload bounds, policy knobs per channel |
| **Sandbox/runtime diversity & resilience** | NanoClaw (#3503 Apple Container), Moltis (#1237 Apple Container, #1199 Coder), IronClaw (#7810 credential broker), ZeroClaw (#9977 filesystem confinement, #9582 WASI egress) | MicroVM drivers, remote workspace PTY, credential brokering, namespace confinement |
| **Observability: usage, search, transcripts** | NanoBot (#5507 FTS5 search, #5480/5481 usage backend, #5291 subagent transcripts), OpenClaw (#128156 log redaction stall), ZeroClaw (#10023 fallback model logging), LobsterAI (#1193 SQLite write amp) | Full-text session search, unified token accounting, audit trails, performance regression prevention |
| **Desktop/WebUI stability & onboarding** | Hermes (#94058 Linux launcher, #94319 Windows maximize, #93280 /context), PicoClaw (#806 WebUI roadmap), CoPaw (#7242 6min dashboard load), NullClaw (#992 pairing token), LobsterAI (#2520 plugin modal) | Symlink-safe launchers, session state detection, pairing UX, large-scale UI performance |

---

## 5. Differentiation Analysis

| Dimension | Platform-Scale Frameworks | Specialized Tooling | Desktop Applications |
|-----------|---------------------------|---------------------|----------------------|
| **Primary Focus** | Multi-agent orchestration, channel ecosystems, enterprise runtime | Provider observability, sandbox variety, CLI/REPL ergonomics | Local-first UX, plugin/skill marketplace, artifact management |
| **Target Users** | Operators running fleets, multi-tenant gateways, channel integrators | Developers building custom agents, self-hosters, automation engineers | End-users, knowledge workers, non-technical teams |
| **Architecture** | Gateway-centralized, policy-enforced, multi-session | Agent-loop + provider abstraction + storage layer | Electron/Tauri app + plugin runtime + local DB |
| **Key Differentiator** | Channel breadth (OpenClaw 7+, NanoClaw 4+, IronClaw Telegram/Slack) | Observability depth (NanoBot FTS5, usage backend, transcripts) | Artifact/library UX (LobsterAI thumbnails, sharing, lifecycle) |
| **Release Philosophy** | Date-based betas (OpenClaw), breaking-change gates (NanoClaw), RFC-tracked (ZeroClaw) | Feature-complete PRs, rapid patch merges (NanoBot, Moltis) | Major UI overhauls + dependency upgrades (LobsterAI Electron 43) |
| **Extension Model** | Skills/Workshops (OpenClaw), Templates (NanoClaw), Automations (IronClaw) | Providers, Tools, Sandbox drivers | Plugins, Skills, IM integrations |

**Notable Unique Bets:**
- **OpenClaw**: Control UI as operator control plane + Custodian verification
- **ZeroClaw**: A2A protocol + agent export bundles + WASI plugin sandbox
- **IronClaw**: Design system governance + APDD kit evaluation + subagent background mode
- **NanoBot**: ConditionalTriggerRuntime (zero-token event filtering) + SQLite FTS5
- **Moltis**: Apple Container sandbox + xAI Grok subscription OAuth (device code)
- **CoPaw**: Agent Teams (natural-language self-evolving multi-agent) + ReMe memory index
- **LobsterAI**: Cross-platform artifact thumbnail renderer (Office/PDF/video/HTML)

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (High Velocity + Active Stabilization)** | OpenClaw, ZeroClaw, CoPaw, NanoClaw, IronClaw | Daily releases/betas, 20–500 PRs/day, critical bugs actively triaged, architectural RFCs in flight |
| **Feature-Complete Stabilization (High Merge Rate, Low Open Regressions)** | NanoBot, Moltis, LobsterAI | 100% PR merge rate (Moltis), observability stack complete (NanoBot), maintenance sprints (LobsterAI) |
| **Desktop/UX Hardening Phase** | Hermes Agent, PicoClaw | Platform-specific regressions (Linux/Windows), WebUI roadmap (PicoClaw), launcher/maximize bugs (Hermes) |
| **Maintenance / Quiet Phase** | NullClaw, ZeptoClaw | <5 items/24h, maintainer-driven only, onboarding regressions unresolved |

**Maturity Indicators:**
- **Most mature release process**: Moltis (date-based, 7/7 PRs merged, MTTR hours) → NanoClaw (v2.3.0 with migration notes) → OpenClaw (beta validation worksheet)
- **Deepest technical debt**: OpenClaw (191 open issues, 428 open PRs, 14 P1 bugs), ZeroClaw (3 P1 runtime bugs, 8 XL PRs >20 days), CoPaw (20GB memory leak, 4-month stale strategic issues)
- **Strongest contributor growth signals**: CoPaw (5 first-time contributor PRs today), IronClaw (neo-sky new contributor on #7516), NanoBot (multiple merged PRs from diverse authors)

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence Across Projects | Strategic Value |
|-------|-------------------------|-----------------|
| **Gateway → Agent protocol standardization** | OpenClaw Control UX extension points, ZeroClaw OpenAI-compatible gateway (#8486), IronClaw slim WS-only gateway (#94245), NanoClaw CLI picker (#2474) | **High**: Interoperability layer emerging; build agents against OpenAI Chat Completions or A2A, not proprietary SDKs |
| **Self-hosted / air-gapped deployment as default requirement** | NullClaw (#993 Firecrawl), OpenClaw (#45508 STT/TTS), NanoBot (QwenCloud #5350), Moltis (Apple Container), PicoClaw (WebUI for non-technical) | **High**: Enterprise adoption blocked by cloud-only assumptions; configurable endpoints, local models, offline sandbox drivers are table stakes |
| **Multi-agent = multi-session + explicit ownership** | OpenClaw agentId propagation, CoPaw session identity freeze (#7237), IronClaw subagent background mode (#7818), ZeroClaw TaskRecord owner (#9726) | **High**: "Agent" is becoming a session-scoped identity with durable state; design for handoff, delegation, and crash recovery from day one |
| **Provider parity as competitive baseline** | NanoClaw Codex skills/persona (#2475), Hermes Groq/Cerebras (#58606), Moltis xAI OAuth (#1240), OpenClaw GPT-5.6 same-day | **Medium**: Users expect seamless switching; invest in provider abstraction layers (model catalogs, tool schema normalization, auth flows) |
| **Observability as product feature, not afterthought** | NanoBot unified usage backend + FTS5 search, LobsterAI SQLite perf (#1193), OpenClaw log redaction stall (#128156), ZeroClaw fallback logging fix (#10023) | **Medium**: Token costs, session search, audit trails drive purchasing decisions; instrument at runtime, not via logging hacks |
| **Channel UX parity (Telegram as benchmark)** | OpenClaw Signal live progress (#77202), NanoBot rich+streaming conflict (#5516),

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-25

## 1. Today's Overview
NanoBot saw **high velocity** in the last 24 hours: **26 PRs updated** (12 merged/closed, 14 open) and **8 new/updated issues** — all opened today except one from 12 days ago. The project is in active feature-development and stabilization mode, with a clear focus on **provider observability, session search performance, WebUI reliability after Gateway restarts, and agent resilience** (timeouts, task persistence, loop detection). No new release was cut today, but multiple merged PRs (#5507, #5508, #5480, #5481) land significant infrastructure that will likely ship in the next minor release.

---

## 2. Releases
**No new releases** published in the last 24 hours. The latest published version remains the one prior to this activity window.

---

## 3. Project Progress — Merged / Closed PRs (12)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5507](https://github.com/HKUDS/nanobot/pull/5507) | **feat/perf** | **SQLite FTS5 full-text search index** for sessions — replaces linear JSONL scan with near-instant search; safe fallback. | Directly addresses #5509; major UX win for heavy users. |
| [#5508](https://github.com/HKUDS/nanobot/pull/5508) | **feat/perf** | **ConditionalTriggerRuntime** — token-free event pre-filtering; wakes LLM only when conditions match. | Implements #5510; enables cheap event-driven automation. |
| [#5480](https://github.com/HKUDS/nanobot/pull/5480) | **refactor** | **Typed LLMUsage contract** — replaces dynamic dicts; normalizes token/cache semantics across OpenAI, Anthropic, Bedrock, Codex. | Foundation for unified usage backend; improves observability & cost tracking. |
| [#5481](https://github.com/HKUDS/nanobot/pull/5481) | **feat** | **Unified provider usage backend** — records one usage row per retry-managed attempt (WebUI/TUI). | Completes the usage observability stack started in #5480. |
| [#5514](https://github.com/HKUDS/nanobot/pull/5514) | **bugfix** | **Clear stale WebUI stream state after Gateway reconnect** — subscribes to `onRunStatus` to reset `isStreaming`. | Fixes #5512 (WebUI stuck spinning after Gateway restart). |
| [#5496](https://github.com/HKUDS/nanobot/pull/5496) | **bugfix** | **Timeout no-tools model requests** — extends wall-clock guard to malformed-call recovery, empty-response finalization, max-iteration finalization. | Prevents stalled turns that previously bypassed timeout logic. |
| [#5506](https://github.com/HKUDS/nanobot/pull/5506) | **bugfix** | **Honor selected project workspace** — exposes WebUI project as CWD to model; preserves prompt-cache reuse. | Fixes workspace-scoped context loss in multi-project setups. |
| [#5517](https://github.com/HKUDS/nanobot/pull/5517) | **test/ci** | **Remove Windows process timing races** — explicit root-exit/child-ready handshake replaces timeout premise. | Improves CI reliability on Windows. |
| [#5291](https://github.com/HKUDS/nanobot/pull/5291) | **bugfix** | **Persist subagent conversation transcripts** — full tool calls, results, reasoning retained after background run. | Enables audit/debug of subagent behavior (long-standing gap). |
| [#5344](https://github.com/HKUDS/nanobot/pull/5344) | **bugfix** | **Warn on repeated identical tool calls** — breaks silent spiral burning `max_iterations`. | Adds loop detection; surfaces stuck-agent symptoms earlier. |
| [#5349](https://github.com/HKUDS/nanobot/pull/5349) | **testfix** | Pass `timezone_name` to `record_token_usage` in settings tests — fixes flaky 5-hour daily window. | Test stability. |
| [#5430](https://github.com/HKUDS/nanobot/pull/5430) | **bugfix** | **Release completed task groups** — removes `_active_tasks` entry on final dispatch completion. | Prevents memory leak in long-running `AgentLoop`. |

**Theme**: Observability (usage, search, transcripts), reliability (timeouts, reconnects, loops), and agent persistence (task ledger groundwork in #5511 still open).

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Reactions | Signal |
|------|----------|-----------|--------|
| [#5350](https://github.com/HKUDS/nanobot/issues/5350) QwenCloud provider path | 2 | 0 | **Provider ecosystem expansion** — backward-compatible path alongside DashScope; international Qwen developers need distinct endpoint/key/config namespace without breaking existing DashScope setups. |
| [#5512](https://github.com/HKUDS/nanobot/issues/5512) WebUI stalls after Gateway restart | 1 | 0 | **Critical UX regression** — WebUI never receives `goal_status: idle` after Gateway restart; `isStreaming` stuck `true`. **Fixed by #5514 (merged)**. |
| [#5516](https://github.com/HKUDS/nanobot/issues/5516) Telegram rich messages + streaming conflict | 0 | 0 | **Platform parity gap** — `rich_messages: true` and `streaming: true` mutually exclusive; Bot API 10.1-10.3 drafts could unify. Needs design decision. |
| [#5513](https://github.com/HKUDS/nanobot/issues/5513) Cron results → configurable channels + batch archive | 0 | 0 | **Operational scaling** — separate automation noise from personal chats; batch manage job history. Complements #5510/#5508. |
| [#5511](https://github.com/HKUDS/nanobot/issues/5511) Crash-safe task ledger for multi-step tasks | 0 | 0 | **Agent durability** — persistent `tasks.json` with atomic writes; resume after Gateway restart. High-value for production agent workloads. |

**Underlying needs**: 
- **Multi-platform provider strategy** (QwenCloud, AnySearch #5505, Codex tracing #5520)
- **Production-grade agent durability** (task ledger, conditional triggers, cron routing)
- **WebUI/Telegram parity** (streaming + rich messages, reconnect resilience)

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#5512](https://github.com/HKUDS/nanobot/issues/5512) WebUI stalls spinning after Gateway restart | **Fixed** | [#5514](https://github.com/HKUDS/nanobot/pull/5514) merged |
| **High** | [#5496](https://github.com/HKUDS/nanobot/pull/5496) No-tools requests bypass timeout → stalled turns | **Fixed** | [#5496](https://github.com/HKUDS/nanobot/pull/5496) merged |
| **Medium** | [#5516](https://github.com/HKUDS/nanobot/issues/5516) Telegram rich messages never render with streaming | Open | None yet |
| **Medium** | [#5344](https://github.com/HKUDS/nanobot/pull/5344) Silent spiral on repeated identical tool calls | **Fixed** | [#5344](https://github.com/HKUDS/nanobot/pull/5344) merged |
| **Medium** | [#5515](https://github.com/HKUDS/nanobot/pull/5515) Unobserved session-reply timeout task failures | Open (PR) | [#5515](https://github.com/HKUDS/nanobot/pull/5515) open |
| **Low** | [#5349](https://github.com/HKUDS/nanobot/pull/5349) Settings tests flaky in 5-hr UTC window | **Fixed** | [#5349](https://github.com/HKUDS/nanobot/pull/5349) merged |
| **Low** | [#5517](https://github.com/HKUDS/nanobot/pull/5517) Windows CI process timing races | **Fixed** | [#5517](https://github.com/HKUDS/nanobot/pull/5517) merged |

**Stability takeaway**: Two high-severity regressions fixed today (#5512, #5496). Telegram streaming/rich-message conflict (#5516) remains open and affects a user-facing channel.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood for Next Version | Rationale |
|---------|----------|----------------------------|-----------|
| **SQLite FTS5 session search** | [#5509](https://github.com/HKUDS/nanobot/issues/5509) / [#5507](https://github.com/HKUDS/nanobot/pull/5507) | ✅ **Very High** | PR merged; infrastructure complete. |
| **ConditionalTriggerRuntime (zero-token triggers)** | [#5510](https://github.com/HKUDS/nanobot/issues/5510) / [#5508](https://github.com/HKUDS/nanobot/pull/5508) | ✅ **Very High** | PR merged; core runtime landed. |
| **Unified usage backend + typed contract** | [#5480](https://github.com/HKUDS/nanobot/pull/5480) / [#5481](https://github.com/HKUDS/nanobot/pull/5481) | ✅ **Very High** | Both merged; observability stack complete. |
| **Crash-safe task ledger** | [#5511](https://github.com/HKUDS/nanobot/issues/5511) | 🟡 **Medium-High** | High-value, well-scoped; no PR yet but aligns with merged persistence work. |
| **Cron results → channels + batch archive** | [#5513](https://github.com/HKUDS/nanobot/issues/5513) | 🟡 **Medium** | Natural extension of #5508; needs design for channel routing. |
| **QwenCloud provider (backward-compat)** | [#5350](https://github.com/HKUDS/nanobot/issues/5350) | 🟡 **Medium** | Clear migration path; low risk. |
| **AnySearch web search provider** | [#5505](https://github.com/HKUDS/nanobot/issues/5505) | 🟢 **Medium** | Vendor-driven; key-optional anonymous quota lowers barrier. |
| **Langfuse tracing for Codex** | [#5520](https://github.com/HKUDS/nanobot/pull/5520) | 🟢 **Medium** | PR open; fills observability gap for Codex provider. |
| **Telegram rich messages + streaming** | [#5516](https://github.com/HKUDS/nanobot/issues/5516) | 🔴 **Low** | Requires Bot API draft support; may wait for stable API. |
| **TUI/WebUI unified config editor** | [#5497](https://github.com/HKUDS/nanobot/pull/5497) / [#5498](https://github.com/HKUDS/nanobot/pull/5498) | 🟢 **Medium** | PRs open; schema-driven editor with secret-safe snapshots. |

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **WebUI hangs after Gateway restart** | #5512 — "frontend never receives `goal_status: idle`, `isStreaming` remains true forever" | 1 issue, fixed same day |
| **Session search too slow at scale** | #5509 — "fully scans JSONL store on every query, slow with hundreds of sessions" | 1 issue, fix merged |
| **Heartbeat polling wastes tokens** | #5510 — "burns full LLM turn on every tick, even when nothing to do" | 1 issue, fix merged |
| **Subagent work invisible after completion** | #5291 — "full conversation vanished with the process" | 1 PR merged (was long-standing) |
| **Agent silently loops identical tool calls** | #5344 — "burns entire `max_iterations`

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-25

## 1. Today's Overview
Hermes Agent shows **high development velocity** with 50 PRs and 10 issues updated in the last 24 hours. The project is in active feature development and bug-fixing mode, with no new release today. Activity spans desktop experience, gateway architecture, MCP tooling, delegation/sub-agent workflows, and platform-specific fixes (Windows, Linux). Eight PRs were merged/closed, indicating steady integration. The open PR count (42) suggests a healthy pipeline but also potential review bottlenecks. No releases since the last digest means users are on v0.20.5 (2026-08-19).

## 2. Releases
**No new releases today.** Current stable: v0.20.5 (2026-08-19). Next release will likely bundle the merged PRs below plus ongoing fixes.

## 3. Project Progress — Merged/Closed PRs (8)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#18133](https://github.com/NousResearch/hermes-agent/pull/18133) | Feature | Conductor mission process management + dedicated API endpoints | Enables dashboard-started durable Conductor work with PID/log/status artifacts |
| [#18138](https://github.com/NousResearch/hermes-agent/pull/18138) | Bug fix | Return numeric zeros instead of `null` for empty analytics totals | Dashboard/API regression fix; improves client compatibility |
| [#58606](https://github.com/NousResearch/hermes-agent/pull/58606) | Feature | Add Groq & Cerebras as auto-recognized providers | Expands provider ecosystem; zero-config for these endpoints |
| [#93747](https://github.com/NousResearch/hermes-agent/pull/93747) | Security | Scope run-scoped API routes to calling profile (fixes auth bypass risk) | Critical: prevents cross-profile run access under `multiplex_profiles` |
| [#94339](https://github.com/NousResearch/hermes-agent/pull/94339) | Bug fix | Un-invert `_stdio_children_dead()` liveness check (fixes MCP oneshot crashes) | **High severity**: fixes fail-fast regression breaking `hermes -z` MCP calls |
| [#94320](https://github.com/NousResearch/hermes-agent/pull/94320) | Bug fix | Trust bounded manifests for Computer Use approval (removes duplicate prompt) | UX improvement for non-interactive CU runs |
| [#94338](https://github.com/NousResearch/hermes-agent/pull/94338) | Bug fix | Drop malformed `mcp_servers` entries instead of crashing desktop | Resilience: prevents config corruption crashes |
| [#94337](https://github.com/NousResearch/hermes-agent/pull/94337) | Bug fix | Keep dashboard TUI alive across OS app-switch (paste focus restore) | Desktop UX: fixes terminal reload + paste break on alt-tab |

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#7895](https://github.com/NousResearch/hermes-agent/issues/7895) | Issue | 5 | 3 | **OpenWebUI image integration** — images generated but not returned via OpenAI protocol; blocks multimodal workflows |
| [#94000](https://github.com/NousResearch/hermes-agent/issues/94000) | Issue | 2 | 0 | **Cron delivery transform hook** — plugin-owned per-target text transform for cron messages (split from large PR #41833) |
| [#94058](https://github.com/NousResearch/hermes-agent/issues/94058) | Issue | 2 | 0 | **Linux desktop launcher broken** — `Exec=` resolves venv symlink to bare interpreter, breaks after upgrade |
| [#93280](https://github.com/NousResearch/hermes-agent/issues/93280) | Issue | 2 | 0 | **Desktop `/context` fails** — always returns "No active agent" despite active session; status-bar indicator missing |
| [#41833](https://github.com/NousResearch/hermes-agent/pull/41833) | PR | — | 0 | **Rich cron delivery hooks** — large plugin extension for cron metadata/interactive callbacks (parent of #94000) |

**Analysis**: Top pain points are **desktop reliability** (Linux launcher, Windows maximize, context command), **gateway/protocol compliance** (OpenWebUI images, i18n), and **plugin extensibility** (cron transforms). Users need "it just works" on desktop and standard API compatibility.

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)
| Severity | Issue | Component | Fix PR? | Notes |
|----------|-------|-----------|---------|-------|
| **Critical** | [#94335](https://github.com/NousResearch/hermes-agent/issues/94335) | MCP stdio liveness check inverted → fail-fast every oneshot call | ✅ [#94339](https://github.com/NousResearch/hermes-agent/pull/94339) (open) | Blocks `hermes -z` MCP tool use; merged fix pending |
| **High** | [#94258](https://github.com/NousResearch/hermes-agent/issues/94258) | SQLite `SystemError` (NULL without exception) not retried → session persistence fails | ❌ | Transient DB error kills turn; needs retry path update |
| **High** | [#94328](https://github.com/NousResearch/hermes-agent/issues/94328) | Media attachments delivered twice when path contains space (Windows) | ❌ | Duplicate sends; path parsing bug |
| **High** | [#94058](https://github.com/NousResearch/hermes-agent/issues/94058) | Linux desktop entry `Exec=` resolves symlink → launcher crashes after upgrade | ❌ | Affects all uv-created venvs; breaks auto-update UX |
| **Medium** | [#94319](https://github.com/NousResearch/hermes-agent/issues/94319) | Windows: no restore-down button, maximize no-op, restore→fullscreen loop | ❌ | Layered/translucent window issues; stuck full-screen |
| **Medium** | [#93280](https://github.com/NousResearch/hermes-agent/issues/93280) | Desktop `/context` slash command fails; context usage indicator missing | ❌ | Session state detection broken in desktop |
| **Medium** | [#92561](https://github.com/NousResearch/hermes-agent/issues/92561) | Custom OpenAI-compatible provider: history + tool results never sent | ❌ | Only system prompt + current message reaches model |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version | Rationale |
|--------|--------|-----------------------------|-----------|
| **OpenWebUI image support (OpenAI protocol)** | [#7895](https://github.com/NousResearch/hermes-agent/issues/7895) | High | 3👍, 5 comments; standard integration gap |
| **i18n for gateway busy/redirect messages** | [#79757](https://github.com/NousResearch/hermes-agent/issues/79757), [#92338](https://github.com/NousResearch/hermes-agent/pull/92338) | High | PR open, aligned with existing `display.language` |
| **Per-target cron text transform (`transform_cron_delivery`)** | [#94000](https://github.com/NousResearch/hermes-agent/issues/94000), [#41833](https://github.com/NousResearch/hermes-agent/pull/41833) | Medium | Focused sub-issue split from large PR; plugin extensibility push |
| **User-owned delegation route for one-off subagents** | [#94312](https://github.com/NousResearch/hermes-agent/pull/94312) | Medium | New delegation UX; needs design decision |
| **Slim WS-only gateway server (remove FastAPI/uvicorn from desktop boot)** | [#94245](https://github.com/NousResearch/hermes-agent/pull/94245) | Medium | Architectural simplification; Step 1 of dashboard removal |
| **Browser `wait` tool for slow pages** | [#64848](https://github.com/NousResearch/hermes-agent/pull/64848) | Low-Medium | Scoped tool; prior art stalled; clear need but older PR |
| **Peer async run/status with idempotent admission** | [#94336](https://github.com/NousResearch/hermes-agent/pull/94336) | Low | New peer-to-peer API pattern; early stage |

## 7. User Feedback Summary
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Desktop launcher breaks after update (Linux)** | [#94058](https://github.com/NousResearch/hermes-agent/issues/94058) | "Crashes instantly and silently" — blocks auto-update trust |
| **Windows full-screen trap** | [#94319](https://github.com/NousResearch/hermes-agent/issues/94319) | "Stuck, hard-to-exit full-screen window" — three compound defects |
| **`/context` command lies about session state** | [#93280](https://github.com/NousResearch/hermes-agent/issues/93280) | "No active agent" despite active session; status bar missing |
| **OpenWebUI images not returned** | [#7895](https://github.com/NousResearch/hermes-agent/issues/7895) | Multimodal workflow broken; images generated but lost |
| **Custom provider loses conversation history** | [#92561](https://github.com/NousResearch/hermes-agent/issues/92561) | Model only sees system prompt + current message; tool results dropped |
| **MCP oneshot (`-z`) completely broken** | [#94335](https://github.com/NousResearch/hermes-agent/issues/94335) | Inverted liveness check fail-fasts every stdio call |
| **Duplicate media sends on Windows (spaces in path)** | [#94328](https://github.com/NousResearch/hermes-agent/issues/94328) | Attachment sent twice; path parsing regression |

**Positive signals**: Groq/Cerebras provider support merged ([#58606](https://github.com/NousResearch/hermes-agent/pull/58606)), security hardening on API scoping ([#93747](https://github.com/NousResearch/hermes-agent/pull/93747)), desktop TUI stability fix ([#94337](https://github.com/NousResearch/hermes-agent/pull/94337)).

## 8. Backlog Watch — Stale/Important Items Needing Attention
| Item | Age | Type | Why It Matters |
|------|-----|------|----------------|
| [#41833](https://github.com/NousResearch/hermes-agent/pull/41833) | ~78 days | Feature PR | Large plugin cron delivery hooks; split into #94000 but parent PR still open — review bottleneck |
| [#64848](https://github.com/NousResearch/hermes-agent/pull/64848) | ~41 days | Feature PR | `browser_wait` tool; scoped, clear need, but inactive since July — decide: merge or close? |
| [#64803](https://github.com/NousResearch/hermes-agent/pull/64803) | ~41 days | Bug fix | Browser guardrails mutation-aware reset; paired with #64804 — stalled |
| [#68499](https://github.com/NousResearch/hermes-agent/pull/68499) | ~35 days | Bug fix | Delegation lifecycle/outcome separation; broad blast radius — needs careful review |
| [#7895](https://github.com/NousResearch/hermes-agent/issues/7895) | ~136 days | Issue | OpenWebUI image integration; 3👍, 5 comments — long-standing protocol gap |
| [#79757](https://github.com/NousResearch/hermes-agent/issues/79757) | ~20 days | Issue | i18n for gateway messages; PR #92338 exists but unmerged — low-hanging fruit |

---

**Project Health Indicators**
- ✅ **Velocity**: 50 PR updates/24h, 8 merges
- ⚠️ **Review load**: 42 open PRs — risk of stagnation
- ✅ **Security**: Active auth scoping fix merged
- ⚠️ **Desktop stability**: 3 platform-specific bugs reported today (Linux launcher, Windows maximize, context command)
- ✅ **Provider ecosystem**: Groq/Cerebras added
- ⚠️ **MCP regression**: Critical oneshot break (fix PR open)

**Recommendation**: Prioritize merging the critical MCP fix (#94339), Linux launcher fix, and OpenWebUI image support. Consider a patch release (v0.20.6) for the regression fixes before larger features.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-25

---

## 1. Today's Overview

PicoClaw shows **moderate maintenance activity** with 6 total updates (3 issues, 3 PRs) in the last 24 hours. No new releases were published. The project is actively addressing stability bugs in MCP server handling and Slack integrations while advancing a high-priority WebUI roadmap item. Two older PRs (#1929, #1551) were closed today, suggesting maintainers are clearing backlog. Community engagement is concentrated on the WebUI feature request (#806: 8 👍, 10 comments) and the MCP hang bug (#3269: 7 comments), indicating these are the most visible pain points.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Project Progress

### Merged / Closed PRs (2)

| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#1929](https://github.com/sipeed/picoclaw/pull/1929) | **CLOSED** | Fix: apply security credentials before config validation in web handlers. Resolves false "token required" errors when credentials exist in `.security.yml`. | **Config/UX fix** — unblocks web-based config saves for Pico channel users. |
| [#1551](https://github.com/sipeed/picoclaw/pull/1551) | **CLOSED** | Merge of fixes from PRs #1428, #1422, #1417 (bulk cleanup). | **Code hygiene** — reduces open PR backlog; details in linked PRs. |

### Open PR Updated Today (1)

| PR | Author | Summary | Status |
|----|--------|---------|--------|
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | kesku | Add native Exa web search provider (`tools.web` / `web_search`) with API key auth, highlights, and date-range filters. | **OPEN (stale)** — awaiting review; expands built-in search capabilities. |

---

## 4. Community Hot Topics

| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#806](https://github.com/sipeed/picoclaw/issues/806) | **Feature** (roadmap, high) | 10 comments, 8 👍 | **WebUI for non-technical users** — lower entry barrier beyond TUI; refactoring underway. |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | **Bug** (stale) | 7 comments, 1 👍 | **MCP server failure resilience** — agent loop hangs on connection loss, freezing chat. |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) | **Bug** (stale) | 1 comment, 0 👍 | **Slack media uploads broken** — `FileSize` not set, causing SDK rejection before network call. |

**Analysis:** The WebUI request (#806) reflects a strategic push to broaden PicoClaw’s audience. The two bugs (#3269, #3338) are integration-level stability issues affecting production workflows (MCP, Slack). Both bugs are marked `stale` but updated today, suggesting they persist in nightly builds.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP server connection failure → agent loop hang → chat stops responding. Affects core agent reliability. | **No** |
| **Medium** | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack `SendMedia` omits `FileSize` → `file.upload.v2` rejects with "file size cannot be 0". Blocks all image uploads via Slack. | **No** |

**Note:** Neither bug has an associated fix PR yet. #3269 is a systemic hang risk; #3338 is a straightforward SDK parameter omission.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **WebUI (browser-based management)** | [#806](https://github.com/sipeed/picoclaw/issues/806) — explicit roadmap item, high priority, active refactoring | **Very High** — labeled `roadmap`, `priority: high`, work in progress. |
| **Native Exa web search provider** | [#3299](https://github.com/sipeed/picoclaw/pull/3299) — PR open, adds `tools.web` provider with highlights & date filters | **Medium** — PR is `stale` but feature-complete; depends on maintainer bandwidth. |
| **MCP resilience (auto-reconnect / timeout)** | Implied by [#3269](https://github.com/sipeed/picoclaw/issues/3269) — community demand for robustness | **High** — critical for production use; likely to be addressed before/with WebUI. |

---

## 7. User Feedback Summary

- **Pain points:**  
  - Agent becomes unresponsive when MCP server drops ([#3269](https://github.com/sipeed/picoclaw/issues/3269)).  
  - Slack image sharing completely broken ([#3338](https://github.com/sipeed/picoclaw/issues/3338)).  
  - Config save errors despite valid tokens (fixed in [#1929](https://github.com/sipeed/picoclaw/pull/1929)).  
- **Use cases driving demand:**  
  - Non-technical team members need browser UI ([#806](https://github.com/sipeed/picoclaw/issues/806)).  
  - Teams relying on Slack for media-rich collaboration.  
  - Users integrating external MCP servers needing fault tolerance.  
- **Sentiment:** Positive on WebUI direction (8 👍); frustration on lingering integration bugs (stale tags, no fix PRs).

---

## 8. Backlog Watch

| Item | Age | Why It Needs Attention |
|------|-----|------------------------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | 36 days (created 2026-07-20) | High-severity hang bug; no fix PR; blocks reliable MCP usage. |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 30 days (created 2026-07-26) | Feature-complete Exa search provider; stale, no review. |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) | 8 days (created 2026-08-17) | Slack media upload regression; simple fix (add `FileSize`), no PR. |
| [#806](https://github.com/sipeed/picoclaw/issues/806) | 181 days (created 2026-02-26) | Strategic WebUI work; long-running but active — monitor for milestone. |

**Recommendation:** Prioritize #3269 (stability) and #3338 (quick fix) for next patch. Assign reviewer to #3299 to unblock search extensibility.

---

*Digest generated from GitHub data as of 2026-08-25. Links point to live issues/PRs on `sipeed/picoclaw`.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-25

---

## 1. Today's Overview

NanoClaw shows **high velocity** with 21 PRs updated and 1 new release (v2.3.0) in the last 24 hours. The project is actively expanding its channel ecosystem (Mattermost, Dial, Apple Container driver), hardening infrastructure (durable host-coordination state, update controller fixes), and resolving upstream dependency issues (Telegram MarkdownV2, better-sqlite3 segfault). Core-team members drive most PRs, indicating strong internal momentum. One critical MacOS blocker (#3497) and a long-standing provider contract cleanup (#2361, #2337) remain open.

---

## 2. Releases

### v2.3.0 — **Breaking: New Slack Experience**
- **Released:** 2026-08-24 (implied by "latest releases")
- **Key Changes:**
  - Per-agent provisioned Slack apps (replaces classic single-bot install)
  - Agent spawning directly from Slack
  - UX improvements for Slack interactions
- **Breaking Change:** Classic single-bot Slack installs **continue working unchanged**; this is an opt-in gate, not a forced migration. New installs and non-Slack installations are unaffected.
- **Migration Notes:** Existing Slack workspaces can adopt the new model at their own pace. No immediate action required.

---

## 3. Project Progress (Merged/Closed in Last 24h)

| PR / Issue | Type | Summary | Impact |
|------------|------|---------|--------|
| [#2767](https://github.com/nanocoai/nanoclaw/issues/2767) | Issue **CLOSED** | Telegram legacy-Markdown sanitizer obsoleted by `@chat-adapter/telegram@4.30.0` (native MarkdownV2 support upstream) | Removes workaround code; simplifies Telegram channel |
| [#2474](https://github.com/nanocoai/nanoclaw/pull/2474) | PR **CLOSED** | AI-coding-CLI picker: choose Claude Code or Codex during setup | Enables provider-agnostic setup flow |
| [#2475](https://github.com/nanocoai/nanoclaw/pull/2475) | PR **CLOSED** | Codex: surface skills + persona to Codex agents (parity with Claude) | Provider parity milestone |
| *(3 merged/closed PRs total per data)* | | | |

**Net Progress:** Two major provider-parity features landed (CLI picker, Codex skill/persona sync), and a Telegram technical debt item was resolved via upstream fix.

---

## 4. Community Hot Topics (Most Active Open PRs/Issues)

| Item | Type | Comments/Reactions | Core Need |
|------|------|-------------------|-----------|
| [#3508](https://github.com/nanocoai/nanoclaw/pull/3508) `feat(db): durable host-coordination state` | PR (core-team) | — | **Infrastructure resilience**: Persist approval waiters, delivery retries, stop/respawn intent across host restarts |
| [#3497](https://github.com/nanocoai/nanoclaw/issues/3497) `setup: better-sqlite3 13 segfaults on MacOS` | Issue (open) | 👍0 / 0 comments | **Critical MacOS blocker**: Node 22.14.0+ required; breaks `pnpm test` and DB layer on older Node 22 |
| [#3396](https://github.com/nanocoai/nanoclaw/pull/3396) `feat: create agents from templates in chat` | PR (core-team) | — | **UX expansion**: `create_agent` tool gains `template` ref; `ncl templates list` verb for local/registry templates |
| [#3428](https://github.com/nanocoai/nanoclaw/pull/3428) `feat(slack-agent-flow): carry template ref through Slack creation` | PR (core-team) | — | **Slack integration depth**: Template-aware agent creation via Slack (re-port of reverted #3397) |
| [#2361](https://github.com/nanocoai/nanoclaw/pull/2361) `tighten codex provider contracts` | PR (open, 3+ months) | — | **Provider stability**: Align with current `codex app-server` JSON-RPC; make `CODEX_MODEL` optional |

**Analysis:** The dominant theme is **multi-provider parity** (Codex, Claude, future Aider/Gemini) and **operational durability** (surviving restarts, upgrades). The MacOS segfault (#3497) is a silent crisis—no comments but blocks all MacOS developers on Node 22.x < 22.14.0.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Item | Status | Fix PR Exists? |
|----------|------|--------|----------------|
| **Critical** | [#3497](https://github.com/nanocoai/nanoclaw/issues/3497) `better-sqlite3@13.0.3` segfault on `new Database()` — MacOS, Node 22 < 22.14.0 | Open, 0 comments | **No** — requires Node version floor bump or `better-sqlite3` downgrade/patch |
| **High** | [#3506](https://github.com/nanocoai/nanoclaw/pull/3506) `fix(update): transaction controller correct on macOS hosts` | Open PR | **Yes** — 6 fixes for `/update-nanoclaw` on macOS (also 1 Linux fallback defect) |
| **High** | [#3499](https://github.com/nanocoai/nanoclaw/pull/3499) `fix(update): resolve symlinks in update controller's path comparisons` | Open PR | **Yes** — symlink resolution for upgrade path safety |
| **Medium** | [#3505](https://github.com/nanocoai/nanoclaw/pull/3505) `fix: route attachments through selected mailbox mounts` | Open PR | **Yes** — attachment routing correctness |
| **Low** | [#3451](https://github.com/nanocoai/nanoclaw/pull/3451) `fix(update-skills): attribute barrel import to skill that appends it` | Open PR | **Yes** — skill update attribution |

**Note:** The MacOS segfault (#3497) is the only **unfixed critical** issue. The update-controller fixes (#3506, #3499) are actively being addressed.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Agent templates from chat** (Slack + CLI) | [#3396](https://github.com/nanocoai/nanoclaw/pull/3396), [#3428](https://github.com/nanocoai/nanoclaw/pull/3428) | **Very High** — core-team, re-ported, template registry design |
| **Mattermost channel + installation skill** | [#3502](https://github.com/nanocoai/nanoclaw/pull/3502), [#3507](https://github.com/nanocoai/nanoclaw/pull/3507) | **High** — feature skill PRs, SDK adapter swap |
| **Apple Container session driver** (macOS microVMs) | [#3503](https://github.com/nanocoai/nanoclaw/pull/3503) | **High** — first driver overlay, `NANOCLAW_RUNTIME_DRIVER=container` |
| **Dial channel documentation** | [#3501](https://github.com/nanocoai/nanoclaw/pull/3501) | **High** — feature exists since #3050, only docs missing |
| **MindsHub provider guide/skill** | [#3493](https://github.com/nanocoai/nanoclaw/pull/3493) | **Medium** — docs/skill only, no source changes |
| **Codex provider contract modernization** | [#2361](https://github.com/nanocoai/nanoclaw/pull/2361) | **Medium** — stale, but foundational for provider parity |
| **Claude Code skill catalog for non-Claude providers** | [#2337](https://github.com/nanocoai/nanoclaw/pull/2337) | **Medium** — shared helper exists, needs integration |

**Prediction:** v2.4.0 will likely ship **agent templates**, **Mattermost**, **Apple Container driver**, and **Dial docs**. Provider parity (Codex) continues but is slower-moving.

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|------------------------|----------|-----------|
| **MacOS developers blocked** on Node 22.x < 22.14.0 | [#3497](https://github.com/nanocoai/nanoclaw/issues/3497) — "pnpm test cannot complete", "no working database layer" | 😡 **High frustration** — silent but severe |
| **Slack classic users want choice, not forced migration** | v2.3.0 release note: "gate asks for a decision, not a forced migration" | 😐 **Neutral/positive** — explicit opt-in respected |
| **Provider switching should be config, not rewrite** | [#2475](https://github.com/nanocoai/nanoclaw/pull/2475) closed: "switching providers becomes a config change instead of a content rewrite" | 🙂 **Positive** — parity achieved for Codex |
| **Template-driven agent creation desired in chat** | [#3396](https://github.com/nanocoai/nanoclaw/pull/3396), [#3428](https://github.com/nanocoai/nanoclaw/pull/3428) — core-team building this | 🙂 **Positive** — active investment |
| **Upgrade reliability on macOS** | [#3506](https://github.com/nanocoai/nanoclaw/pull/3506) — "Every defect was hit live while updating a real macOS install" | 😐 **Pragmatic** — dogfooding surfacing real issues |

---

## 8. Backlog Watch (Stale but Important)

| Item | Age | Why It Matters | Recommended Action |
|------|-----|----------------|---------------------|
| [#2361](https://github.com/nanocoai/nanoclaw/pull/2361) `tighten codex provider contracts` | ~3.5 months (opened 2026-05-09) | Blocks Codex stability; aligns with current `codex app-server` JSON-RPC; makes `CODEX_MODEL` optional | **Assign to core-team** — foundational for provider parity |
| [#2337](https://github.com/nanocoai/nanoclaw/pull/2337) `feat(providers): surface Claude Code skill catalog to non-Claude providers` | ~3.5 months (opened 2026-05-07) | Enables skill reuse across providers; shared helper (`skill-catalog.ts`) already written | **Review & merge** — low-risk, high-leverage |
| [#3302](https://github.com/nanocoai/nanoclaw/pull/3302) `fix(onecli): correct default OneCLI gateway bind address` | ~1 month (opened 2026-08-17) | Fixes #2903; gateway bind address mismatch breaks agent→gateway connectivity | **Merge** — targeted fix, root cause identified |
| [#2474](https://github.com/nanocoai/nanoclaw/pull/2474) / [#2475](https://github.com/nanocoai/nanoclaw/pull/2475) — **CLOSED** but referenced in active work | — | Provider picker + Codex parity landed; ensure follow-ups (e.g., Aider/Gemini adapters) are tracked | **Create tracking issue** for next provider adapters |

---

## Health Indicators

| Metric | Status | Trend |
|--------|--------|-------|
| **Release Cadence** | v2.3.0 recent | 🟢 Active |
| **PR Throughput** | 21 updated / 3 merged (24h) | 🟢 High |
| **Critical Bugs Unfixed** | 1 (MacOS segfault) | 🔴 Needs triage |
| **Stale Important PRs** | 3 > 1 month | 🟡 Backlog grooming needed |
| **Provider Parity** | Codex skills/persona done | 🟢 Progressing |
| **Multi-Channel Expansion** | Mattermost, Dial, Apple Container | 🟢 Accelerating |

**Overall:** **Healthy velocity with one critical platform blocker.** The project is executing on a clear roadmap (templates, channels, drivers, durability) while carrying some technical debt in provider contracts. Immediate priority: resolve #3497 for MacOS users.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-25

## 1. Today's Overview
NullClaw shows **low but focused activity** over the past 24 hours: two new issues opened (one enhancement, one bug) and one Dependabot PR updated. No releases, no merged PRs, and no community discussions (zero comments/reactions on all items). The project appears in a **maintenance/quiet phase** with contributors surfacing configuration gaps (Firecrawl self-hosting) and a UX regression (hidden pairing token). The sole PR is an automated Alpine Linux base-image bump, indicating routine dependency hygiene but no feature velocity today.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress
**No merged or closed PRs today.** The only PR movement is the Dependabot update (#956) which remains open awaiting review/CI. No features advanced or bugs fixed in this window.

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#993** | Enhancement | 0 comments, 0 👍 | [Make Firecrawl search endpoint configurable for self-hosted instances](https://github.com/nullclaw/nullclaw/issues/993) |
| **#992** | Bug | 0 comments, 0 👍 | [Pairing code hidden & not written to disk — how to retrieve it?](https://github.com/nullclaw/nullclaw/issues/992) |

**Analysis**: Both issues are fresh (created yesterday) and have **zero community engagement** so far. The Firecrawl request reveals a growing need for **self-hosted / air-gapped deployment support**—a signal that enterprise or privacy-conscious users are evaluating NullClaw. The pairing-token bug points to a **post-#535 regression** where a security hardening (removing token from stdout) removed the only visible access path, creating a lockout risk for gateway operators.

## 5. Bugs & Stability
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **High** | [#992](https://github.com/nullclaw/nullclaw/issues/992) | Pairing token only exists in memory; no stdout log, no file, no CLI command to display it. Gateway API setup blocked. | No |
| **Medium** | — | — | — |

**Note**: #992 is a **critical usability regression** for anyone configuring the gateway. A fix should either (a) add a `nullclaw pairing-token` CLI subcommand, (b) write the token to a restricted file on first run, or (c) log it once to stdout with a clear warning.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Configurable Firecrawl endpoint** (env var / config file) | [#993](https://github.com/nullclaw/nullclaw/issues/993) | **High** — trivial code change (replace hard-coded URL), aligns with self-hosting trend |
| **Pairing token retrieval UX** | [#992](https://github.com/nullclaw/nullclaw/issues/992) | **High** — blocks gateway onboarding; likely hotfix candidate |

Both requests are **low-effort, high-impact** and fit a “polish & self-host” sprint.

## 7. User Feedback Summary
- **Pain point**: *“I cannot complete gateway setup because the 6-digit pairing code is invisible.”* (Issue #992) — indicates **onboarding friction** after a security change.
- **Use case**: *“We run Firecrawl internally; the native provider assumes the public cloud endpoint.”* (Issue #993) — signals **enterprise/air-gapped adoption**.
- **Sentiment**: Neutral-to-frustrated; no positive feedback captured today. Zero reactions suggest issues are not yet triaged or visible to wider community.

## 8. Backlog Watch
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | 71 days | Open (Dependabot) | Alpine 3.24 bump stalled; base-image updates are security-relevant. Needs maintainer merge or conflict resolution. |
| [#535](https://github.com/nullclaw/nullclaw/issues/535) | (referenced) | Closed | Security change that introduced #992 regression; review its mitigation completeness. |

**Action needed**: Maintainer should triage #992/#993 today (both are quick wins) and clear the stale Dependabot PR #956 to keep the CI surface clean.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-25

## 1. Today's Overview
IronClaw shows **high velocity** with 54 total GitHub items updated in the last 24 hours (19 issues, 35 PRs). The project is in active feature development and infrastructure hardening phase: onboarding suggestion flow improvements, CI pipeline modernization (setup-rust composite, nextest), sandbox credential broker work, and WebUI design-system refactors are all moving in parallel. No new releases cut today, but multiple merged PRs indicate steady main-branch progress. Bug count is moderate (several UI regressions, MCP discovery gap, Telegram linking failures) with fixes already landing or in review.

## 2. Releases
**No new releases today.** The last release remains v1.3.0 (implied by issue #7742 targeting v1.3.0 and #7849 targeting v1.4.0).

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Scope | Impact |
|----|-------|-------|--------|
| [#7833](https://github.com/nearai/ironclaw/pull/7833) | feat(suggestions): generate over user's no-approval, read-only tools | Onboarding / Agent | **Closes #7812** — suggestions now respect user-level tool permissions and can read connected data (Gmail, etc.) instead of only internal search tools. |
| [#7857](https://github.com/nearai/ironclaw/pull/7857) | fix(webui): refresh conversations after starting suggestion | WebUI | Fixes #7845 — thread entry now appears in left panel immediately after activating a suggested task. |
| [#7854](https://github.com/nearai/ironclaw/pull/7854) | fix(webui): remove Gateway v2 login eyebrow | WebUI / i18n | Removes stale "Gateway v2" badge from login card; cleans 11 locale files. |
| [#7794](https://github.com/nearai/ironclaw/pull/7794) | refactor(webui): introduce shared page shell and loading primitives | WebUI / Design System | **Closes #7792, #7793** — unified `PageScroll`, `PageStack`, `Skeleton`, `SkeletonList` across Automations, Extensions, Admin, Workspace, Settings; migrated feedback banners to `InlineNotice`. |
| [#7821](https://github.com/nearai/ironclaw/pull/7821) | ci: single setup-rust composite — toolchain pin, mold, centralized build profiles | CI / Infra | **Closes #7798** — replaces 43 scattered `dtolnay/rust-toolchain` invocations with one composite action; exports `RUSTUP_TOOLCHAIN` to eliminate local-vs-CI drift. |
| [#7001](https://github.com/nearai/ironclaw/pull/7001) | feat(loop): keep cached system prefix byte-stable across model calls | Agent / Performance | **Closes #6985** — stabilizes prompt prefix for provider caching (nudges after identity, timestamp in system block, per-run memory retrieval). |
| [#7858](https://github.com/nearai/ironclaw/pull/7858) | PROBE: run T1's composite on Windows | CI | Throwaway probe to validate Windows build under new setup-rust composite. |
| [#7852](https://github.com/nearai/ironclaw/pull/7852) | BISECT: isolate T1's E2E failure to profile change | CI | Throwaway bisect to debug Reborn WebUI v2 E2E flakiness introduced by T1. |
| [#7851](https://github.com/nearai/ironclaw/issues/7851) | Fix main branch CI failures 20260824 | CI | Meta-issue tracking CI remediation. |

**Also closed:** #7742 (automation creation preflight), #6985 (cache stability), #7798 (CI expedite T1), #7792/#7793 (design system primitives), #7812 (onboarding tool permissions), #7845 (suggestion thread render), #7851 (CI failures).

## 4. Community Hot Topics — Most Active Discussions

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#7817](https://github.com/nearai/ironclaw/pull/7817) | PR | *active discussion* | **CI modernization T2** — nextest pipeline, full-failure signal, PR unthrottle. Critical for developer velocity. |
| [#7257](https://github.com/nearai/ironclaw/pull/7257) | PR | *active discussion* | **WebUI Design System Epic** — Storybook + catalog proposal (docs-only). Long-running governance alignment. |
| [#7255](https://github.com/nearai/ironclaw/pull/7255) | PR | *active discussion* | **APDD Kit Governance Evaluation** — assessing external framework for agent product development process. |
| [#7818](https://github.com/nearai/ironclaw/pull/7818) | PR | *active discussion* | **Subagent Background Mode** — receipt spawns, per-child delivery, activation, healing sweeps (slices 2b+2c). Core agent architecture. |
| [#7810](https://github.com/nearai/ironclaw/pull/7810) | PR | *active discussion* | **Sandbox Credential Broker** — manifest-declared direct-exec bindings (e.g., `gh` CLI) behind managed proxy. Security/extensibility. |
| [#7853](https://github.com/nearai/ironclaw/issues/7853) | Issue | 2 | **Telegram Personal Account Linking Broken** — UI offers flow but no tool exists to complete it. User-facing regression. |
| [#7862](https://github.com/nearai/ironclaw/issues/7862) | Issue | 0 (new) | **Device Link Generic Error** — fails silently when `telegram_api_id/api_hash` unconfigured. Poor DX. |

**Underlying themes:** CI reliability, developer experience (DX) for onboarding/extensions, agent architecture scaling (subagents), and design-system consistency.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#7853](https://github.com/nearai/ironclaw/issues/7853) Telegram personal account linking offered but no tool exists | **Open** | Related: [#7861](https://github.com/nearai/ironclaw/pull/7861) (restores orphaned device-link guidance) |
| **High** | [#7862](https://github.com/nearai/ironclaw/issues/7862) Device link fails with generic error when `telegram_api_id/api_hash` unconfigured | **Open** | None yet |
| **Medium** | [#7297](https://github.com/nearai/ironclaw/issues/7297) Error messages stack up in UI after every failed prompt (accumulating, never cleared) | **Open** (since 2026-08-06) | None |
| **Medium** | [#7856](https://github.com/nearai/ironclaw/issues/7856) MCP tool discovery silently skips camelCase tool names | **Open** | None |
| **Low** | [#7845](https://github.com/nearai/ironclaw/issues/7845) Activating suggested task fails to create/render thread entry | **Closed** | Fixed by [#7857](https://github.com/nearai/ironclaw/pull/7857) ✅ |
| **Low** | [#7848](https://github.com/nearai/ironclaw/issues/7848) Daily failure taxonomy — 65 non-pass in officeqa (mostly model-quality) | **Open** (tracking) | N/A — model quality |

**Regression watch:** #7853/#7862 are fresh Telegram linking regressions; #7297 is a long-standing UI bug (19 days open).

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Onboarding suggestions: full connect → suggest → thread flow** | Epic [#7815](https://github.com/nearai/ironclaw/issues/7815), PR [#7816](https://github.com/nearai/ironclaw/pull/7816) | **High** — backend done (#7693, #7694, #6994), frontend gaps closing |
| **Agent-first GSuite CLI for Google Workspace** | [#7849](https://github.com/nearai/ironclaw/issues/7849) (v1.4.0, suggested_P1) | **High** — explicit v1.4.0 target, part of #6879 |
| **Sandbox egress auth: native iron-proxy recipes, retire GitHub carve-out** | [#7825](https://github.com/nearai/ironclaw/issues/7825) | **Medium** — builds on merged #7810 |
| **Italian language support** | [#7855](https://github.com/nearai/ironclaw/issues/7855) | **Medium** — straightforward i18n addition |
| **Document Gmail terminal-based setup in Extensions Registry UI** | [#6774](https://github.com/nearai/ironclaw/issues/6774) (28 days open) | **Low-Medium** — docs-only, but user-reported pain |
| **Automations: expose exact run capability facts** | PR [#7850](https://github.com/nearai/ironclaw/pull/7850) | **High** — PR open, adds `builtin.trigger_status` |
| **Subagent background mode (slices 2b+2c)** | PR [#7818](https://github.com/nearai/ironclaw/pull/7818) | **High** — core architecture, deployment-gated |

**Predicted v1.3.0 scope:** onboarding suggestions polish, design-system primitives, CI stabilization, automation preflight.  
**Predicted v1.4.0 scope:** GSuite CLI, subagent background mode, sandbox credential broker generalization.

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Telegram personal linking broken end-to-end** | #7853: "agent reports it still can't link a personal Telegram account from here because there's no available tool for that step" | Blocks user onboarding for personal Telegram; UI promises capability that doesn't exist |
| **Generic device-link error hides root cause** | #7862: "Something went wrong while linking" when `telegram_api_id/api_hash` unconfigured | Poor DX — users can't self-diagnose missing config |
| **Error messages accumulate and never clear** | #7297: "Previous error messages keep accumulating at the bottom of the chat after every new prompt" | UI becomes unusable over time; reported 19 days ago, still open |
| **Suggestions not grounded in user data** | #7812: "suggestions aren't grounded in the user's actual data… only internal search tools" | **Fixed by #7833** — now respects user-level read-only tool permissions |
| **Gmail/Google Apps require CLI setup, not documented in UI** | #6774: "If Gmail requires terminal/CLI-based setup… rather than being configurable through the WebUI" | Extension onboarding friction; docs gap |
| **MCP tools with camelCase names silently ignored** | #7856: "Hosted MCP discovery currently requires each advertised tool name to be directly usable as a Rust identifier" | Integration breakage for non-snake_case MCP servers |

**Satisfaction signals:** Active community engagement on design-system and governance PRs (#7257, #7255) suggests investment in long-term DX. Quick fixes for #7845, #7812 show responsiveness.

## 8. Backlog Watch — Stale Important Items Needing Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#7297](https://github.com/nearai/ironclaw/issues/7297) Error messages stack up in UI | 19 days | High-visibility UI regression affecting all users | Assign owner; likely needs error-boundary / toast lifecycle redesign |
| [#6774](https://github.com/nearai/ironclaw/issues/6774) Document Gmail terminal setup in Extensions UI | 28 days | User-reported docs gap blocking extension adoption | Add to Extensions Registry UI; low effort, high user value |
| [#7817](https://github.com/nearai/ironclaw/pull/7817) CI nextest pipeline (T2) | 3 days | Critical for CI speed & signal; blocked on review | Prioritize review — unblocks T3/T4 tracks |
| [#7818](https://github.com/nearai/ironclaw/pull/7818) Subagent background mode | 3 days | Core agent architecture; deployment-gated | Ensure deployment gate criteria documented; schedule staging test |
| [#7810](https://github.com/nearai/ironclaw/pull/7810) Sandbox credential broker | 4 days | Security/extensibility foundation; enables #7825 | Review manifest schema & proxy contract; security audit |
| [#7456](https://github.com/nearai/ironclaw/pull/7456) Durable storage profile-agnostic | 15 days | Large refactor; enables profile transitions | Needs rebase/review — check if blocked by T1 CI changes |
| [#7516](https://github.com/nearai/ironclaw/pull/7516) IronHub agent link operator surface | 13 days | WebUI gap for operator workflow | Review — new contributor (neo-sky), may need mentorship |
| [#7860](https://github.com/nearai/ironclaw/issues/7860) Decompose 1,774-line lifecycle_product_service.rs | 0 days (new) | Architecture rule violation (>1,500 lines) | Plan decomposition PR; assign to extensions team |

---

**Health Indicators:**
- ✅ **Merge rate strong:** 17 PRs merged/closed in 24h
- ✅ **CI investment paying off:** T1 composite landed, T2/T3/T4 in flight
- ✅ **Design system progressing:** primitives merged, migrations underway
- ⚠️ **Telegram linking regressions:** two fresh issues (#7853, #7862) need rapid fix
- ⚠️ **Stale UI bug:** #7297 (error stacking) unaddressed for 19 days
- 📈 **Roadmap clarity:** v1.3.0/v1.4.0 targets visible in issue labels

**Next 48h watch:** #7817 (CI T2) review, #7861/#7862 (Telegram fixes), #7297 triage, #7818 deployment gate evaluation.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-25

## 1. Today's Overview
LobsterAI shows **high maintenance velocity** with **10 PRs merged/closed in a single day** (2026-08-24), indicating an active development sprint or release preparation. All 3 issues updated today were **stale issues from April 2026** that were closed without recent resolution, suggesting backlog cleanup rather than new user-reported problems. No new releases were published. The project appears healthy with consistent UI/UX polish, infrastructure upgrades (Electron bump), and library/file-management enhancements landing rapidly.

---

## 2. Releases
**No new releases** in the last 24 hours.

---

## 3. Project Progress — Merged/Closed PRs (2026-08-24)

| PR | Area | Summary | Link |
|----|------|---------|------|
| **#2528** | renderer | Credits loading settings UI added | [#2528](https://github.com/netease-youdao/LobsterAI/pull/2528) |
| **#2527** | renderer | Skills tab: stop persisting selected tab, default to Marketplace | [#2527](https://github.com/netease-youdao/LobsterAI/pull/2527) |
| **#2526** | main | Update kit icon URLs | [#2526](https://github.com/netease-youdao/LobsterAI/pull/2526) |
| **#2525** | renderer, docs | Login guide improvements | [#2525](https://github.com/netease-youdao/LobsterAI/pull/2525) |
| **#2524** | renderer, docs, main | **Major library upgrade**: cross-platform thumbnail renderer (images, video, PDF, Office, HTML), unified 16:9 thumbnails, cache strategy, lifecycle fixes for local artifacts, cloud resource recovery, build/test/docs additions | [#2524](https://github.com/netease-youdao/LobsterAI/pull/2524) |
| **#2523** | renderer, docs, main, cowork, im | IM icon additions | [#2523](https://github.com/netease-youdao/LobsterAI/pull/2523) |
| **#2522** | renderer, artifacts | File share/favorite UX: Unicode filename retention, legacy compatibility, instant favorite updates, rollback on failure, unified quota dialogs, tests | [#2522](https://github.com/netease-youdao/LobsterAI/pull/2522) |
| **#2521** | renderer, main, cowork | Preserve message selection for context menu (read-only + editable), fix toolbar dismissal on right-click/Ctrl-click | [#2521](https://github.com/netease-youdao/LobsterAI/pull/2521) |
| **#2520** | renderer | Plugin install modal: viewport-constrained, scrollable logs/errors, close button, guarded IPC error handling, diagnostics | [#2520](https://github.com/netease-youdao/LobsterAI/pull/2520) |
| **#1193** | perf/sqlite | **Performance**: eliminate SQLite write amplification via debounce + batch transactions (prevents full DB export on every row mutation) | [#1193](https://github.com/netease-youdao/LobsterAI/pull/1193) |

**Key themes**: Library/artifact management overhaul (#2524), plugin/skill UX hardening (#2520, #2527), SQLite persistence performance (#1193), and cross-cutting UI polish.

---

## 4. Community Hot Topics
All three issues updated today are **stale (opened 2026-04-01) and closed** with low engagement. No new community-driven discussions appeared.

| Issue | Title | Comments | 👍 | Status | Link |
|-------|-------|----------|----|--------|------|
| **#1187** | Request: context window size & output token settings in model API config | 3 | 1 | Closed (stale) | [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) |
| **#1195** | Bug: custom skill installed to OpenClaw path but missing from skill panel after restart | 3 | 0 | Closed (stale) | [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) |
| **#1192** | Request: hard-code default tool config (e.g., headless browser) | 2 | 0 | Closed (stale) | [#1192](https://github.com/netease-youdao/LobsterAI/issues/1192) |

**Underlying needs**: 
- **Model config granularity** (context window, token limits) — #1187
- **Skill installation reliability & discoverability** — #1195
- **Deterministic tool defaults** (headless mode) — #1192

These align with PRs #2527 (skills tab UX) and #2520 (plugin install modal robustness), suggesting the team is addressing the *symptoms* but the original issues were closed as stale without explicit resolution links.

---

## 5. Bugs & Stability
No **new** bug reports today. The stale issues closed include one bug (#1195 — skill panel disappearance) but it was closed without a fix PR referenced. Recent PRs **proactively harden stability**:

| PR | Stability Impact |
|----|------------------|
| **#2520** | Prevents plugin install modal from hiding action buttons on long errors (usability/crash prevention) |
| **#2521** | Fixes context-menu race condition losing text selection (data-loss risk) |
| **#1193** | Eliminates SQLite write amplification — major I/O performance & disk-wear fix |
| **#2522** | Adds rollback on favorite/share failure, guards against duplicate refreshes |

**Severity ranking (inferred from PR scope)**:
1. **High** — #1193 (DB write amplification affects every write)
2. **Medium** — #2520, #2521 (UI interaction bugs that could confuse users)
3. **Low** — #2522 (UX polish with safety nets)

---

## 6. Feature Requests & Roadmap Signals
From closed stale issues + merged PRs, the near-term roadmap signals:

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Model API config: context window & max tokens** | #1187 (1👍, 3 comments) | Medium — direct user ask, no PR yet |
| **Hard-coded tool defaults (headless browser, etc.)** | #1192 | Low — closed stale, but #2524 adds artifact lifecycle config |
| **Skill installation reliability & UI discoverability** | #1195 | High — #2527 defaults to Marketplace tab, #2520 hardens install modal |
| **Cross-platform artifact thumbnails & lifecycle** | #2524 (large PR) | **Very High** — just merged, extensive docs/tests |
| **Plugin/skill install UX robustness** | #2520, #2527 | **Very High** — merged today |
| **Electron 40 → 43 upgrade** | #1277 (Dependabot, open) | High — security/compat, pending review |

**Predicted next version**: Library/artifact overhaul (#2524), plugin/skill UX fixes (#2520, #2527), SQLite perf (#1193), Electron bump (#1277).

---

## 7. User Feedback Summary
**Pain points** (from stale issues):
- **Context overflow errors** with DeepSeek — users need explicit context-window control (#1187)
- **Skill installation appears to succeed but vanishes on restart** — trust erosion in extensibility (#1195)
- **LLM ignores "headless" instruction** for browser tool — desire for deterministic defaults (#1192)

**Positive signals** (from PR volume):
- Team investing heavily in **artifact/library UX** (thumbnails, sharing, favorites, lifecycle)
- **Plugin/skill install flow** hardened for long errors, scroll, cleanup
- **Performance** taken seriously (SQLite batch writes)
- **Cross-platform parity** (thumbnail renderer for Office/PDF/HTML/video)

**Satisfaction proxy**: No new issues filed today; stale issues closed without resolution may frustrate original reporters if fixes aren’t visible.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters | Link |
|------|-----|----------------|------|
| **#1277** — Dependabot: Electron 40.2.1 → 43.4.1 (security, Node 20/22, V8 updates) | 145 days (opened 2026-04-02) | **Open, unmerged**. Critical for security/compat. Blocks modern OS support. | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) |
| **#1187** — Context window / output token settings | 146 days | User-facing config gap causing runtime errors. Closed stale but **no fix PR linked**. | [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) |
| **#1195** — Skill install to OpenClaw path not showing in panel | 146 days | Core extensibility bug. Closed stale; **verify if #2527/#2520 resolve it**. | [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) |
| **#1192** — Hard-coded tool defaults (headless browser) | 146 days | Recurring UX friction. Closed stale; **consider adding to tool config schema**. | [#1192](https://github.com/netease-youdao/LobsterAI/issues/1192) |

**Recommendation**: Prioritize merging #1277 (Electron) and triage the three stale issues — either link fix PRs or reopen with “help wanted” if unresolved.

---

*Digest generated from GitHub data as of 2026-08-25 00:00 UTC. All links point to netease-youdao/LobsterAI.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-25

## 1. Today's Overview
Moltis shipped a new date-based release **20260824.01** and closed **7 pull requests** in the last 24 hours, indicating a focused stabilization sprint. The merged work spans provider authentication (xAI Grok OAuth), sandbox infrastructure (Apple Container name-length fix, Coder remote workspace support), TTS/heartbeat/runtime bug fixes, and Slack/Whatsapp channel hardening. Only **3 PRs remain open** (Coder sandbox, OpenAI-safe tool schemas, cron context preservation), suggesting the maintainers are clearing the deck before the next cut. Community engagement is low on comments/reactions, but the volume of merged fixes signals healthy internal velocity.

---

## 2. Releases
### **20260824.01** (2026-08-24)
No formal changelog published in the data; the release bundles the 7 merged PRs below.  
**Key user-visible changes:**
- **xAI Grok subscription OAuth** (`xai-oauth` provider) — SuperGrok / Heavy / X Premium+ users can now authenticate via device code without an `XAI_API_KEY` ([#1240](https://github.com/moltis-org/moltis/pull/1240)).
- **Apple Container sandbox** now truncates/handles 64-char identifier limit, eliminating startup failures ([#1237](https://github.com/moltis-org/moltis/pull/1237)).
- **TTS auto-select** no longer falsely reports Coqui as “configured,” removing spurious red warnings ([#1242](https://github.com/moltis-org/moltis/pull/1242)).
- **Heartbeat `active_hours`** now honors `end = "24:00"` and is actually enforced in the agent turn path ([#1241](https://github.com/moltis-org/moltis/pull/1241)).
- **Slack shared channels** gain explicit `untrusted_audience` / `untrusted_tools` policy knobs ([#1238](https://github.com/moltis-org/moltis/pull/1238)).
- **Gateway node pairing** verifies signatures against server-issued challenges, closing a supply-your-own-key vector ([#1179](https://github.com/moltis-org/moltis/pull/1179)).
- **WhatsApp inbound media** download bounds while streaming, preventing unbounded memory growth ([#1233](https://github.com/moltis-org/moltis/pull/1233)).

> **Migration notes:** No breaking changes flagged. The new `xai-oauth` provider is additive; existing `xai` API-key flow unchanged. Slack `untrusted_*` defaults remain fail-closed.

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Outcome |
|----|------|---------|
| [#1240](https://github.com/moltis-org/moltis/pull/1240) | Providers | ✅ **Merged** — xAI Grok subscription OAuth (`xai-oauth`) via RFC 8628 device code |
| [#1237](https://github.com/moltis-org/moltis/pull/1237) | Sandbox (Apple Container) | ✅ **Merged** — 64-char identifier bound, stable SHA-256 suffixes |
| [#1242](https://github.com/moltis-org/moltis/pull/1242) | TTS | ✅ **Merged** — Coqui no longer hard-coded as configured; uses `is_configured()` |
| [#1241](https://github.com/moltis-org/moltis/pull/1241) | Heartbeat | ✅ **Merged** — `active_hours` enforced, `24:00` accepted as end-of-day |
| [#1238](https://github.com/moltis-org/moltis/pull/1238) | Slack | ✅ **Merged** — `untrusted_audience` / `untrusted_tools` persisted & documented |
| [#1179](https://github.com/moltis-org/moltis/pull/1179) | Gateway/Security | ✅ **Merged** — Node pairing verifies server-issued challenge/key |
| [#1233](https://github.com/moltis-org/moltis/pull/1233) | WhatsApp | ✅ **Merged** — Bounded inbound media downloads during streaming |

**Net effect:** 3 security/reliability fixes, 2 provider/sandbox expansions, 2 runtime correctness patches — all landed same-day.

---

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Signal |
|------|------|----------|----|--------|
| [#1239](https://github.com/moltis-org/moltis/issues/1239) | Issue (closed) | 2 | 0 | Feature request for xAI Grok OAuth — **implemented same day in #1240** |
| [#1137](https://github.com/moltis-org/moltis/issues/1137) | Bug (closed) | 1 | 0 | Apple Container ID length — **fixed in #1237** after ~2 months open |

**Analysis:** Both “hot” items were resolved within hours of last update. The project shows **rapid maintainer response** to concrete, reproducible issues (especially sandbox/provider gaps). No long-running debates or high-reaction threads — community is small but issues are actionable.

---

## 5. Bugs & Stability (Reported/Fixed Today)
| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **High** | Apple Container sandbox crash on >64-char ID ([#1137](https://github.com/moltis-org/moltis/issues/1137)) | ✅ Closed | [#1237](https://github.com/moltis-org/moltis/pull/1237) |
| **Medium** | TTS false “provider not configured” warnings ([#1114](https://github.com/moltis-org/moltis/issues/1114)) | ✅ Closed | [#1242](https://github.com/moltis-org/moltis/pull/1242) |
| **Medium** | Heartbeat `active_hours` ignored / `24:00` rejected | ✅ Closed | [#1241](https://github.com/moltis-org/moltis/pull/1241) |
| **Medium** | WhatsApp unbounded media download during streaming | ✅ Closed | [#1233](https://github.com/moltis-org/moltis/pull/1233) |
| **Low** | Gateway node pairing allowed caller-supplied key/challenge | ✅ Closed | [#1179](https://github.com/moltis-org/moltis/pull/1179) |

**No new bugs opened today.** All fixed bugs had PRs merged same day — **MTTR ≈ hours**.

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **Coder remote workspace sandbox** (ephemeral workspaces via REST + PTY WebSockets) | [#1199](https://github.com/moltis-org/moltis/pull/1199) (open, 10 days old) | 🟡 **Medium** — large PR, needs review; sandbox strategy expansion |
| **OpenAI-safe tool schemas** (`additionalProperties=false` compliance) | [#1232](https://github.com/moltis-org/moltis/pull/1232) (open, 3 days) | 🟢 **High** — small, focused, unblocks Codex strict mode |
| **Cron delivered-channel context preservation** (follow-ups keep WhatsApp history) | [#1243](https://github.com/moltis-org/moltis/pull/1243) (open, today) | 🟢 **High** — UX polish, low risk |
| **xAI Grok subscription OAuth** | [#1239](https://github.com/moltis-org/moltis/issues/1239) | ✅ **Done** — shipped in 20260824.01 |

**Prediction:** Next cut will likely include #1232 and #1243 (both open, small, reviewer-ready). #1199 is the next substantive feature but may wait for broader sandbox refactor.

---

## 7. User Feedback Summary
- **Pain point:** Apple Container users blocked by 64-char hostname limit — **resolved**.
- **Pain point:** SuperGrok subscribers forced to use API keys — **resolved** with device-code OAuth.
- **Pain point:** Spurious TTS “not configured” noise — **resolved**.
- **Pain point:** Scheduled WhatsApp messages lost conversation context — **fix in review** (#1243).
- **Security concern:** Node pairing challenge verification — **resolved** (#1179).
- **No dissatisfaction signals** in comments; issues are technical, not UX complaints.

**Use cases visible:** Multi-provider LLM routing (Codex, Copilot, Grok), heterogeneous sandboxes (Apple Container, Coder), multi-channel messaging (Slack, WhatsApp), self-hosted gateway clusters.

---

## 8. Backlog Watch (Stale / Needs Attention)
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#1199](https://github.com/moltis-org/moltis/pull/1199) | 10 days | Open | **Coder sandbox backend** — major new runtime target; large diff, no review activity yet |
| [#1232](https://github.com/moltis-org/moltis/pull/1232) | 3 days | Open | **OpenAI strict schema compliance** — blocks Codex strict mode; small, ready |
| [#1243](https://github.com/moltis-org/moltis/pull/1243) | 0 days | Open | **Cron context preservation** — UX fix for channel workflows; trivial risk |

**Recommendation:** Prioritize review of #1232 and #1243 for next patch; assign reviewer to #1199 to unblock Coder integration.

---

**Project Health:** 🟢 **Green** — high merge velocity, zero open regressions, features shipping same-day as requests. Bus factor risk: most merges by `penso` and `SP-937-215`; consider broadening review ownership.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-25

## 1. Today's Overview
The project shows **very high velocity** with 48 PRs updated and 21 issues touched in the last 24 hours. A new beta release `v2.1.1-beta.2` was published, focusing on console artifacts and video delivery fixes. The merged/closed PR ratio (26/48) indicates strong maintainer throughput. Critical stability concerns are surfacing: an unbounded memory leak (#7222, 20 GB+ after 2 days), session-routing bugs (#7231, #7011), and MCP reconnection failures (#6524). Community interest centers on multi-agent collaboration ergonomics, per-channel model configuration, and message aggregation to reduce UI spam.

## 2. Releases
### `v2.1.1-beta.2` (Beta) — 2026-08-24
| Change | Type | PR / Author |
|--------|------|-------------|
| Add artifacts to assistant response card in Console | feat | [#7161](https://github.com/agentscope-ai/QwenPaw/pull/7161) @zhijianma |
| Deliver tool-result videos on OpenAI Responses API | fix | [#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061) @xiaoka76 |

**Notes:** Beta release; installation verification issue [#7249](https://github.com/agentscope-ai/QwenPaw/issues/7249) is open for community testing. No breaking changes or migration notes mentioned.

## 3. Project Progress (Merged / Closed PRs Today)
| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#7234](https://github.com/agentscope-ai/QwenPaw/pull/7234) | Restore periodic ReMe index compaction (cron job) | Memory/Stability | Prevents BM25 slot leak; addresses long-run index bloat |
| [#7173](https://github.com/agentscope-ai/QwenPaw/pull/7173) | Re-anchor e2e agents action cells; follow API rename | Test/Infra | Fixes flaky e2e after console redesign |
| [#7248](https://github.com/agentscope-ai/QwenPaw/pull/7248) | Derive Docker boundary version from package (`__version__.py`) | Release/Infra | Eliminates hard-coded version drift in Docker builds |
| [#7247](https://github.com/agentscope-ai/QwenPaw/pull/7247) | Stop sending media to SiliconFlow DeepSeek V4 (text-only) | Provider/Bug | Avoids 400 errors on unsupported multimodal calls |
| [#6067](https://github.com/agentscope-ai/QwenPaw/pull/6067) | More sensitive files & allow read global | Security | Expands file-access guardrails |
| [#7121](https://github.com/agentscope-ai/QwenPaw/issues/7121) | Flaky nightly: `test_sibling_sessions_run_without_serializing` on macOS | Test/Infra | Closed (root cause under investigation) |

**Net progress:** Memory maintenance restored, Docker versioning hardened, provider compatibility fixed, e2e stability improved.

## 4. Community Hot Topics (Most Comments / Reactions)
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | Bug | 11 | 0 | Agent stops mid-task after planning phrase (“Now 2.1, 3.1…”) with no UI hint; user must say “continue” |
| [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) | Bug | 9 | 0 | Docker 2.0.1: Plugin & App markets stuck in “maintenance” — cannot install extensions |
| [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) | Feature | 8 | 1 | Webhook support: push messages to CoPaw, get callback/key for async reply |
| [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | Bug | 8 | 0 | Console stop request cancels active Feishu session (cross-session identity leak) |
| [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) | Feature | 7 | 0 | **Agent Teams**: natural-language driven, self-evolving multi-agent teams (beyond manual workspace creation) |

**Signal:** Users want **reliable multi-turn execution** (no silent stops), **working marketplace in Docker**, **async webhook integration**, and **first-class multi-agent team abstractions**.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Status | Fix PR / Notes |
|----------|-------|--------|----------------|
| **Critical** | [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) Backend memory grows unbounded → 20 GB+ after 2 days (runtime accumulation) | Open | No fix PR yet; distinct from startup leak (#9) |
| **High** | [#7231](https://github.com/agentscope-ai/QwenPaw/issues/7231) Console message sent to wrong session when switching tabs/pages during generation | Open | Fix PR [#7237](https://github.com/agentscope-ai/QwenPaw/pull/7237) open (freeze session identity) |
| **High** | [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) Console stop cancels active Feishu session (cross-session mix-up) | Open | Related to #7231; same root cause (session identity race) |
| **High** | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) MCP client fails to auto-recover after server restart (stale `mcp-session-id`) | Open | No fix PR; requires session invalidation + reconnect logic |
| **Medium** | [#7199](https://github.com/agentscope-ai/QwenPaw/issues/7199) `daily_paper` crashes on PDF with surrogate chars (U+D800–U+DFFF) in `write_atomic` | Open | No fix PR; UTF-8 sanitization needed |
| **Medium** | [#7242](https://github.com/agentscope-ai/QwenPaw/issues/7242) Dashboard loads 6+ min with 74 agents (Docker) | Open | No fix PR; likely N+1 queries or missing pagination |
| **Low** | [#7121](https://github.com/agentscope-ai/QwenPaw/issues/7121) Flaky macOS e2e timing assertion | Closed | Test-side; under investigation |

## 6. Feature Requests & Roadmap Signals
| Request | Issue | Likelihood for Next Version | Rationale |
|---------|-------|-----------------------------|-----------|
| **Per-channel model configuration** (DingTalk=GPT-4o, WeChat=Qwen, Console=local) | [#7085](https://github.com/agentscope-ai/QwenPaw/issues/7085) | High | Clear UX need; backend already agent-scoped; PR-ready scope |
| **Aggregate multi-step responses** (single card vs. 10 fragmented cards) | [#5563](https://github.com/agentscope-ai/QwenPaw/issues/5563) | High | UX pain point; aligns with new artifacts feature in beta |
| **Workspace-scoped Skill preload policy** (`on_demand` / `preload`) | [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) + PR [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | High | PR open, first-time contributor; low risk, high value |
| **Agent Teams: natural-language, self-evolving multi-agent teams** | [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) | Medium | Strategic; requires orchestration layer; may land in 2.2+ |
| **Webhook / async callback API** | [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) | Medium | Long-standing (Mar 2026); integration enabler |
| **OpenViking-backed long-term memory backend** | [#7252](https://github.com/agentscope-ai/QwenPaw/issues/7252) | Low–Medium | Early discussion; extends existing `BaseMemoryManager` |
| **Relational DB storage for config/sessions** (replace files) | [#3425](https://github.com/agentscope-ai/QwenPaw/issues/3425) | Low | Architectural; needs migration path |
| **Microsoft Teams channel support** | [#3425](https://github.com/agentscope-ai/QwenPaw/issues/3425) | Low | Platform expansion; after core stability |

## 7. User Feedback Summary
| Pain Point | Frequency | Representative Quote |
|------------|-----------|----------------------|
| **Silent mid-task stops** | High (multiple reports) | “Agent outputs ‘Now 2.1, 3.1… Let me do all three.’ then stops — no visual hint, must say ‘continue’” ([#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)) |
| **Cross-session contamination** | High | “Console stop kills my Feishu conversation” ([#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011)); “Message sent to wrong session when switching tabs” ([#7231](https://github.com/agentscope-ai/QwenPaw/issues/7231)) |
| **Marketplace broken in Docker** | Medium | “Plugin & App markets always show ‘under maintenance’” ([#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782)) |
| **MCP reconnection fails** | Medium | “After MCP server restart, client reuses stale session-id; must run `list mcp` manually” ([#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524)) |
| **Message spam / UI clutter** | Medium | “10-step task = 10 message cards; chat interface flooded” ([#5563](https://github.com/agentscope-ai/QwenPaw/issues/5563)) |
| **Multi-agent UX fragmentation** | Medium | “Collaboration creates new session each time; must switch agents to see dialogue” ([#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925)) |
| **Memory leak in long runs** | Low (1 report, high impact) | “20.7 GB after 2 days; slows entire machine” ([#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222)) |

**Satisfaction signals:** First-time contributors active (5 PRs today); beta artifacts feature welcomed; but core stability regressions (memory, sessions) erode trust for production use.

## 8. Backlog Watch (Stale / High-Value Items Needing Maintainer Attention)
| Item | Age | Type | Why It Matters |
|------|-----|------|----------------|
| [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) Webhook / async callback | 5+ months | Feature | Enables external orchestration; 8 comments, 1 👍 |
| [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) Agent Teams (self-evolving multi-agent) | 4+ months | Feature | Strategic differentiator; 7 comments, design doc attached |
| [#3425](https://github.com/agentscope-ai/QwenPaw/issues/3425) Relational DB storage + Teams channel | 4+ months | Feature/Infra | Scales config/session mgmt; unblocks enterprise |
| [#2750](https://github.com/agentscope-ai/QwenPaw/issues/2750) Multi-agent isolation & permission control | 4+ months | Security | “Info leakage during collaboration”; 2 comments |
| [#2420](https://github.com/agentscope-ai/QwenPaw/issues/2420) Cross-agent UX: guidance, triggering, coherence, identity confusion | 5 months | UX | Detailed doc attached; 4 comments |
| [#3013](https://github.com/agentscope-ai/QwenPaw/issues/3013) Async task reply stays in same session channel | 4+ months | Feature | “B’s result opens new session; A never sees it” |

**Recommendation:** Prioritize **memory leak (#7222)** and **session identity fixes (#7237, #7011)** for `v2.1.1` stable. Schedule **per-channel models (#7085)**, **response aggregation (#5563)**, and **skill preload (#7183)** for `v2.1.2`. Assign owners for stale strategic issues (#3224, #338, #3425) to prevent backlog rot.

---

*Data sourced from GitHub API (issues/PRs updated 2026-08-24 → 2026-08-25). Repository: [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw).*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-08-25

## 1. Today's Overview
ZeptoClaw saw minimal but focused activity in the last 24 hours: **1 open issue** (#650) was created targeting the interactive REPL (`zeptoclaw agent`), specifically addressing UX hardening around signal handling (`Ctrl+C`/`Ctrl+D`) and a lone `/` command edge case. No pull requests, merges, or new releases occurred. The project remains in a **maintenance/iteration phase** with the maintainer (Suraware) driving a targeted CLI improvement. Community engagement is currently low (0 comments, 0 reactions on the new issue).

## 2. Releases
**No new releases** published today. The latest release information is not provided in the data snapshot.

## 3. Project Progress
**No merged or closed PRs today.** The only movement is the filing of issue #650, which outlines a concrete plan for REPL UX hardening but has not yet been implemented.

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#650** `feat(cli): REPL UX hardening - safe Ctrl+C/Ctrl+D, lone '/'` | Issue | 0 comments, 0 👍, created & updated 2026-08-24 | [qhkm/zeptoclaw#650](https://github.com/qhkm/zeptoclaw/issues/650) |

**Analysis:** The sole active discussion centers on **preventing accidental session termination** and **graceful handling of a bare `/` input**. This signals a user/maintainer pain point around REPL robustness—likely encountered during daily dogfooding or early-adopter feedback. No broader community debate is visible.

## 5. Bugs & Stability
**No bug reports, crashes, or regressions filed today.** Issue #650 is framed as a **feature/UX improvement** rather than a defect, though the current behavior (silent exit on `Ctrl+C`/`Ctrl+D`) could be perceived as a usability bug by users.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Safe `Ctrl+C`/`Ctrl+D` handling** — prompt before exit, preserve in-progress session | #650 | **High** — clearly scoped, author is maintainer |
| **Lone `/` command shows command table** instead of `Unknown command: /` | #650 | **High** — trivial UX fix, aligns with CLI conventions |

**Prediction:** Both items in #650 are small, well-defined, and author-driven; they are strong candidates for the next patch/minor release.

## 7. User Feedback Summary
- **Pain point:** Accidental REPL termination via `Ctrl+C`/`Ctrl+D` destroys work-in-progress sessions.
- **Use case:** Interactive agent sessions where users instinctively hit `Ctrl+C` to interrupt a *command*, not the REPL itself.
- **Satisfaction signal:** None yet (no reactions/comments), but the maintainer’s own filing indicates **internal dissatisfaction** with current behavior.

## 8. Backlog Watch
No long-unanswered issues or PRs are highlighted in the 24-hour window. For a broader backlog view, a full repository query (e.g., issues with `updated < 2026-07-25`, `no:assignee`, or `label:"needs triage"`) would be required—data not provided here.

---

**Health Indicator:** 🟢 **Healthy maintenance mode** — focused, maintainer-driven improvement with clear scope. Low community volume is typical for a specialized CLI agent tool. Next signal to watch: a PR opening for #650.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-25

## 1. Today's Overview
ZeroClaw shows **very high development velocity** with 23 issues and 50 PRs updated in the last 24 hours. The project is in active feature development and stabilization phase — no releases today, but 5 PRs were merged/closed. Work spans architecture trackers (RFC routing, session-persistence ownership), critical runtime bugs (cron TOCTOU, config validation gaps, provider error masking), and major feature PRs (A2A client, agent export bundles, OpenAI-compatible gateway endpoint, multi-session ZeroCode panes). Risk profile is elevated: multiple `risk:high` and `priority:p1` items are open, indicating maintainers are tackling deep structural changes.

## 2. Releases
**No new releases today.** The last release data is not provided in this snapshot.

## 3. Project Progress (Merged/Closed in Last 24h)
5 PRs merged or closed. Notable closures:
- **#10023** [CLOSED] *Bug*: Fallback provider logs now correctly report the pinned model served instead of the requested model ([#10023](https://github.com/zeroclaw-labs/zeroclaw/issues/10023)) — fixes misleading observability in `zeroclaw-providers` reliable fallback path.

*Specific merged PR numbers not listed in the feed; the 5 merged/closed count includes the above issue closure and likely 4 PR merges from the open PR pool.*

## 4. Community Hot Topics (Most Discussed)
| Item | Type | Comments | Summary | Underlying Need |
|------|------|----------|---------|-----------------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Issue (Tracker) | 14 | Maintainer decision queue for RFCs/design issues | **Governance scaling** — formalizing how architectural decisions are triaged, owned, and routed to implementation |
| [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) | Issue (Tracker) | 11 | Session-persistence contract ownership & layer ordering | **Ownership clarity** — four workstreams touching same contract without a designated owner; needs explicit contract steward |
| [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) | Bug | 4 | Config metadata stays English in localized ZeroCode/web | **i18n completeness** — shell translates but config metadata (group headings, section labels, help text) does not |
| [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) | Feature | 4 | Decouple gateway WebSocket lifetime from agent turn lifecycle | **Resilience** — client disconnects should not cancel in-flight turns; WebSocket as transport, not turn owner |

*PR comment counts are not available (`undefined` in feed), so issue discussion volume is the primary signal.*

## 5. Bugs & Stability (Reported/Updated Today, Ranked by Severity)
| Issue | Severity | Component | Status | Fix PR? |
|-------|----------|-----------|--------|---------|
| [#10331](https://github.com/zeroclaw-labs/zeroclaw/issues/10331) | S2 / P1 | runtime/daemon, delegate | Open, needs maintainer review | No |
| [#10324](https://github.com/zeroclaw-labs/zeroclaw/issues/10324) | S2 / P1 | runtime/daemon, cron, security | Open | No |
| [#10329](https://github.com/zeroclaw-labs/zeroclaw/issues/10329) | S2 | provider (OpenAI-compatible) | Open | No |
| [#10320](https://github.com/zeroclaw-labs/zeroclaw/issues/10320) | S2 / P2 | config, runtime (CLI + RPC) | Open | No |
| [#10316](https://github.com/zeroclaw-labs/zeroclaw/issues/10316) | S2 / P3 | runtime, SOP | Open | No |
| [#10332](https://github.com/zeroclaw-labs/zeroclaw/issues/10332) | Low / P2 | cron, tests, CI | Open (test flake) | No |
| [#10327](https://github.com/zeroclaw-labs/zeroclaw/issues/10327) | S3 / P3 | channel (Discord) | Open | No |
| [#9820](https://github.com/zeroclaw-labs/zeroclaw/issues/9820) | P2 / High | agent, provider, tool (calculator) | Open, accepted | No |
| [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) | S2 / P2 | config, gateway, web, zerocode | Open, accepted | No |

**Critical cluster**: Three `priority:p1` / `risk:high` bugs filed or updated today (#10331, #10324, #10329) all touch runtime/daemon or provider resilience paths — suggests a systemic review of error propagation and lifecycle ownership is warranted.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **A2A outbound client (Phase 1)** | [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) (XL PR, 6 maintainer positions addressed) | **High** — large PR, multiple review rounds complete, implements accepted RFC #9106 |
| **Agent export bundles** | [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) (XL PR) | **High** — portable agent migration is a clear user need, PR is comprehensive |
| **OpenAI Chat Completions gateway endpoint** | [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) (XL PR, blocked) | **Medium-High** — strong ecosystem demand (LangChain, Continue.dev, Aider), but blocked status unclear |
| **Multi-session ZeroCode panes + agent sidebar** | [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) (XL PR) | **High** — builds on merged #9738, major UX upgrade for interactive use |
| **Plugin WASI HTTP egress policy (Stage 2)** | [#9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582) (XL PR, ADR-014) | **High** — security hardening, follows accepted ADR |
| **TaskRecord as single background lifecycle owner** | [#9726](https://github.com/zeroclaw-labs/zeroclaw/pull/9726) (XL PR) | **High** — fixes silent disagreement between output persistence and terminal state |
| **Filesystem mutation confinement to workspace** | [#9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977) (XL PR) | **High** — security hardening, shared data dir authority |
| **RFC: Opt-in single-tool provider rounds** | [#10222](https://github.com/zeroclaw-labs/zeroclaw/issues/10222) | **Medium** — accepted RFC tracker (#10330) suggests follow-through expected |
| **Browser enrollment frontdoor (post-#10142)** | [#10315](https://github.com/zeroclaw-labs/zeroclaw/issues/10315) | **Medium** — blocked on TLS rework, but security-critical |
| **TypeScript gate for web/ in required CI** | [#10306](https://github.com/zeroclaw-labs/zeroclaw/issues/10306) | **High** — CI reliability, low effort, high visibility |

**Roadmap theme**: Hardening multi-tenant/runtime security (egress policy, filesystem confinement, CA passphrase migration), finishing gateway protocol parity (OpenAI endpoint, A2A), and stabilizing background delegation lifecycle.

## 7. User Feedback Summary
**Pain points surfaced in issues:**
- **Localization gaps**: Non-English users see English config metadata in ZeroCode TUI and web dashboard ([#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363))
- **Model compatibility**: Calculator tool emits literal `<TOOLCALL>` pseudo-syntax instead of native function calls with certain models (Nemotron on NVIDIA NIM) ([#9820](https://github.com/zeroclaw-labs/zeroclaw/issues/9820))
- **Connection fragility**: WebSocket disconnect cancels in-flight agent turns — unacceptable for long-running tasks ([#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759))
- **Config safety**: `config set` and RPC `config/set` persist values without validation, allowing out-of-range settings silently ([#10320](https://github.com/zeroclaw-labs/zeroclaw/issues/10320))
- **Observability gaps**: Fallback provider logs show requested model, not actual served model (fixed in #10023)
- **Test flakiness**: CI gate failures at minute boundaries erode confidence ([#10332](https://github.com/zeroclaw-labs/zeroclaw/issues/10332))

**Positive signals**: Active contributor base (multiple "distinguished/principal contributor" PRs), RFC process functioning (trackers #8692, #10330), and security-first mindset (multiple `domain:security` items).

## 8. Backlog Watch (Stalled High-Value Items)
| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 52 days | Medium | **Governance backbone** — RFC decision queue without active maintainer throughput becomes a bottleneck for all architectural work |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | 57 days | High | **Ecosystem interop** — OpenAI Chat Completions endpoint unlocks IDE/extension integrations; blocked status needs resolution |
| [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) | 70 days | High | **Core resilience** — WebSocket/turn coupling is a known UX failure mode; marked `in-progress` but no recent PR link visible |
| [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) | 32 days | High | **A2A Phase 1** — large PR awaiting final review; implements accepted RFC, enables agent-to-agent communication |
| [#9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582) | 25 days | High | **Plugin security** — host-owned egress policy for WASM plugins; ADR-014 proposed, needs maintainer review |
| [#9726](https://github.com/zeroclaw-labs/zeroclaw/pull/9726) | 21 days | High | **Runtime correctness** — single lifecycle owner for background tasks; prevents silent state divergence |
| [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) | 21 days | Medium | **ZeroCode UX** — multi-session panes + sidebar; major interactive workflow upgrade |
| [#9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977) | 12 days | High | **Filesystem security** — confinement to workspace; prevents symlink escapes and unauthorized writes |
| [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) | 12 days | High | **Portability** — agent export bundles for migration across

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*