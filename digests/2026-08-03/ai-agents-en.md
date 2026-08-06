# OpenClaw Ecosystem Digest 2026-08-03

> Issues: 174 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-03 03:39 UTC

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

# OpenClaw Project Digest — 2026-08-03

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 500 PRs and 174 issues updated in the last 24 hours. The project released **v2026.7.2-beta.7** focusing on state safety and recovery (quarantine store, crash-recoverable SQLite snapshots, schema-upgrade data-loss rejection). Of the 134 merged/closed PRs, many are automated fixes from `clawsweeper[bot]` addressing transport failures, auth key preservation, WhatsApp reactions, and memory provider aliases. The issue backlog reveals deep architectural challenges around session state, message loss, subagent delivery durability, and provider integration stability — particularly for Anthropic, Codex, and realtime voice pathways.

## 2. Releases

### v2026.7.2-beta.7 — State Safety & Recovery
**Release Notes:** [openclaw/openclaw/releases/tag/v2026.7.2-beta.7](https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.7)

**Key Changes:**
- **Quarantine store** — persisted data protected against primary-database damage
- **Crash-recoverable SQLite snapshots** — durable state persistence
- **Crash-durable filesystem publication** — atomic writes survive power loss
- **Schema-upgrade data-loss rejection** — prevents silent data loss during migrations
- **Rollback-writer snapshot recovery** — automatic rollback on corruption detection

**Migration Notes:** This beta focuses on storage layer resilience. Operators upgrading from v1 schema to v6+ should verify `openclaw doctor --fix` handles quarantine/wipe behavior correctly (see [#115421](https://github.com/openclaw/openclaw/issues/115421)).

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Change | Risk Tags |
|----|------|--------|-----------|
| [#118130](https://github.com/openclaw/openclaw/pull/118130) | Failover | Classify interrupted transport failures as timeouts for fast retry | `clawsweeper:autofix` |
| [#117697](https://github.com/openclaw/openclaw/pull/117697) | WhatsApp | Preserve source direction for automatic reactions | `clawsweeper:autofix` |
| [#117843](https://github.com/openclaw/openclaw/pull/117843) | Agents | Verify delegated writes before reporting success (fixes #67136) | `clawsweeper:autofix` |
| [#118339](https://github.com/openclaw/openclaw/pull/118339) | Heartbeat | Preserve CLI side-question mode for commitments | `clawsweeper:autofix` |
| [#116248](https://github.com/openclaw/openclaw/pull/116248) | Auth | Fix default agent losing keys after secondary `paste-api-key` | `merge-risk: compatibility, auth-provider` |
| [#117951](https://github.com/openclaw/openclaw/pull/117951) | Gateway | Preserve assistant media in live chat events | `merge-risk: compatibility, message-delivery` |
| [#115277](https://github.com/openclaw/openclaw/pull/115277) | Agents | Materialize MCP for server-name `toolsAllow` globs | `merge-risk: compatibility` |
| [#117976](https://github.com/openclaw/openclaw/pull/117976) | Memory | Resolve Google embedding provider alias → `gemini` | `merge-risk: compatibility, auth-provider` |
| [#117992](https://github.com/openclaw/openclaw/pull/117992) | Config | Stop plugin schemas rejecting core-written `channel` key | `merge-risk: compatibility` |
| [#117184](https://github.com/openclaw/openclaw/pull/1117184) | Auto-reply | Clean empty staged inbound media directories | — |

**Pattern:** Heavy reliance on `clawsweeper[bot]` for automated fixes (8 of 10 shown), indicating mature CI-driven remediation for well-understood bug classes.

---

## 4. Community Hot Topics (Most Commented Issues)

| Issue | Comments | Type | Core Problem |
|-------|----------|------|--------------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | 87 | 🐛 **P1** | DeepSeek v4 Flash silent reply failure — no reply generated, generic fallback |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 51 | 🐛 **P1** | Realtime voice retains unbounded provider/consult state (resource leak) |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | 19 | 🐛 **P1** | Codex PreToolUse hook spawns CPU-bound `openclaw-hooks` processes, stalls gateway RPC |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | 16 | 🐛 **P1** | Steer mode doesn't inject messages mid-turn for main sessions |
| [#74586](https://github.com/openclaw/openclaw/issues/74586) | 13 | 🐛 **P1** | AM embedded run aborts `memory_search` tool calls; classifies as timeout despite completion |

**Underlying Needs:**
- **Provider reliability** — Silent failures (DeepSeek, Anthropic catalog static [#109017](https://github.com/openclaw/openclaw/issues/109017)) erode trust
- **Realtime voice resource bounds** — Current "item count" limits insufficient for bursty/stalling providers
- **Hook/process isolation** — Codex hook relay spawns unbounded processes ([#91009](https://github.com/openclaw/openclaw/issues/91009))
- **Mid-turn steerability** — Users expect message injection at tool boundaries, not turn boundaries ([#48003](https://github.com/openclaw/openclaw/issues/48003))

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 Critical (P0/P1, Data Loss / Crash Loop / Message Loss)

| Issue | Severity | Symptoms | Fix PR? |
|-------|----------|----------|---------|
| [#115421](https://github.com/openclaw/openclaw/issues/115421) | **P0** | Schema downgrade recovery quarantines/wipes state DB → cron jobs lost | ❌ |
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | **P1** 🦞 | DeepSeek v4 Flash silent reply failure → fallback message | ❌ |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | **P1** 🦞 | Realtime voice unbounded state retention → resource exhaustion | ❌ |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | **P1** 🐚 | Codex hook relay CPU-bound processes stall gateway RPC | ❌ |
| [#106231](https://github.com/openclaw/openclaw/issues/106231) | **P1** 🦞 | Loop detection blocks exec but doesn't terminate stuck agent run | ❌ |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | **P1** 🦞 | Usage-cost refresh lock never releasable in containers (PID reuse) | ❌ |
| [#118018](https://github.com/openclaw/openclaw/issues/118018) | **P1** 🦞 | Stale subagent completion delivered to replaced requester lifecycle | ❌ |
| [#115847](https://github.com/openclaw/openclaw/issues/115847) | **P1** | ACP session half-initialization → permanent ready-check timeout loop | ❌ |
| [#115914](https://github.com/openclaw/openclaw/issues/115914) | **P1** | Accepted WhatsApp turns silent for tens of minutes, no liveness fallback | ❌ |

### 🟠 High (P1, Session State / Auth / Crash)

| Issue | Area | Symptoms |
|-------|------|----------|
| [#111498](https://github.com/openclaw/openclaw/issues/111498) | Auth | Main agent blocked by persistent workspace-state migration after Anthropic auth recovery |
| [#109017](https://github.com/openclaw/openclaw/issues/109017) | Auth | Anthropic provider disappears from model picker; static catalog never pulls new models |
| [#114181](https://github.com/openclaw/openclaw/issues/114181) | Auth | Exec approval runtime drops loopback-token auth on WS reconnect after idle |
| [#112248](https://github.com/openclaw/openclaw/issues/112248) | Codex | `@openclaw/codex` plugin fails to register on gateway boot (TypeError) |
| [#74986](https://github.com/openclaw/openclaw/issues/74986) | Infer | `openclaw infer` hangs indefinitely, child spins at 100% CPU |
| [#100360](https://github.com/openclaw/openclaw/issues/100360) | Transcript | `message-tool` mid-turn writes 'delivery-mirror' side-branch → permanent HTTP 400 loop |

### 🟡 Medium (P2, UX / Config / Plugin)

| Issue | Area | Symptoms |
|-------|------|----------|
| [#118242](https://github.com/openclaw/openclaw/issues/118242) | Migration | Exec-approvals migration rejects null `lastUsedAt` from older versions |
| [#115152](https://github.com/openclaw/openclaw/issues/115152) | Config | `bootstrapMaxChars`/`bootstrapTotalMaxChars` deleted on every restart (regression) |
| [#115478](https://github.com/openclaw/openclaw/issues/115478) | Plugin | WeChat plugin fails to load: missing `plugin-sdk/channel-runtime` export |
| [#114169](https://github.com/openclaw/openclaw/issues/114169) | Health | `BUSY_ACTIVITY_STALE_THRESHOLD_MS` hardcoded 25min — health monitor restarts mid-turn |
| [#114176](https://github.com/openclaw/openclaw/issues/114176) | Provider | `ERR_INTERNAL_ASSERTION` with custom `openai-completions` provider |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Votes | Area | Signal |
|-------|-------|------|--------|
| [#52640](https://github.com/openclaw/openclaw/issues/52640) | 2 | Discord | Persistent task-status surface for long-running channel turns |
| [#48918](https://github.com/openclaw/openclaw/issues/48918) | 0 | Skills | User-level skill preferences/conventions support |
| [#113251](https://github.com/openclaw/openclaw/issues/113251) | 0 | Web UI | Image viewing in webchat file viewer |
| [#71195](https://github.com/openclaw/openclaw/issues/71195) | 1 | macOS Talk | OpenAI Realtime (speech-to-speech) path for Talk Mode |
| [#57148](https://github.com/openclaw/openclaw/issues/57148) | 1 | Subagents | `maxSubagentResultChars` to truncate injected results |
| [#51534](https://github.com/openclaw/openclaw/issues/51534) | 1 | Discord | Auto-inject @mention for guild message replies |
| [#58407](https://github.com/openclaw/openclaw/issues/58407) | 1 | Discord | Inject parent channel pinned messages into thread context |
| [#49376](https://github.com/openclaw/openclaw/issues/49376) | 0 | LLM | Configurable LLM retry with backoff on transient errors (529/503) |
| [#111143](https://github.com/openclaw/openclaw/issues/111143) | 1 | Control UI | Pin plugin tabs in sidebar |

**Prediction:** Next stable release will likely include:
1. **Subagent delivery durability** (PR [#118360](https://github.com/openclaw/openclaw/pull/118360) open, closes #112616)
2. **Auth key preservation** (PR [#116248](https://github.com/openclaw/openclaw/pull/116248) ready for review)
3. **Realtime voice resource bounds** (tracked in #116201, high community attention)
4. **Schema migration safety** (addressed in v2026.7.2-beta.7, but #115421 shows gaps)

---

## 7. User Feedback Summary

### Pain Points (from issue descriptions)
- **"Silent failures are the worst"** — DeepSeek v4 Flash produces no reply, only generic fallback ([#116277](https://github.com/openclaw/openclaw/issues/116277))
- **"Messages lost during WhatsApp outage"** — No backfill after reconnection ([#50093](https://github.com/openclaw/openclaw/issues/50093))
- **"Agent loops on no-reply output"** — Matrix room agents enter self-sustaining loops ([#114211](https://github.com/openclaw/openclaw/issues/114211))
- **"CLI silently falls back to embedded mode"** — Masks gateway behavior in diagnostics ([#76492](https://github.com/openclaw/openclaw/issues/76492))
- **"Config fields deleted on restart"** — Protected paths cause regression ([#115152](https://github.com/openclaw/openclaw/issues/115152))

### Use Cases Emerging
- **Multi-channel Discord/Slack/Telegram/Matrix/WhatsApp** with thread-aware routing
- **Realtime voice** (Twilio + gpt-realtime) for sub-second turns
- **Subagent orchestration** with durable completion delivery
- **Kubernetes/nested container** deployments (WhatsApp inbound issues [#51049](https://github.com/openclaw/openclaw/issues/51049))
- **Tailscale identity-header auth** for Control UI ([#118341](https://github.com/openclaw/openclaw/issues/118341))

### Satisfaction Signals
- High engagement on bug reports (87 comments on #116277) shows **active user base**
- Automated `clawsweeper` fixes closing issues rapidly indicates **responsive maintainers**
- Feature requests for "polish" (pinned tabs, image viewer, @mentions) suggest **core workflows functional**

---

## 8. Backlog Watch (Long-Open, High-Impact)

| Issue | Age | Status | Why It Matters |
|-------|-----|--------|----------------|
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | ~5 months | Open, P1 | Steer mode mid-turn injection — core UX for interactive agents |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | ~2 months | Open, P1 | Codex hook CPU spawn — blocks gateway, affects all Codex users |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) | ~4.5 months | Open, P2 | WhatsApp message backfill — critical for reliability |
| [#4

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Open-Source Ecosystem (2026-08-03)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **bifurcated maturity**: a tier of high-velocity, production-hardened platforms (OpenClaw, ZeroClaw, IronClaw, Hermes Agent, CoPaw) operating at 30–500 PRs/day with automated remediation and multi-channel deployments, and a tier of specialized or earlier-stage projects (NanoBot, PicoClaw, NanoClaw, LobsterAI, Moltis) iterating on provider reliability, platform compatibility, and UX polish. **No project is stagnant**—even quiet repos (Moltis) have significant feature PRs in review. The dominant theme across *all* active projects is **state durability, provider/runtime resilience, and multi-channel orchestration**—reflecting a shift from "chat wrapper" to "agent operating system" architecture.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed PRs | Release Status | Health Score |
|---------|---------------------|-------------------|-------------------|----------------|--------------|
| **OpenClaw** | 174 | 500 | 134 | **v2026.7.2-beta.7** (state safety) | 🟢 **Excellent** |
| **ZeroClaw** | 15 | 50 | 5 | **v0.8.4** (262 commits, 49 contributors) | 🟢 **Excellent** |
| **IronClaw** | 8 | 31 | 7 | No release (Wave 2 consolidated, release PR 31d stale) | 🟢 **Strong** |
| **Hermes Agent** | 7 | 50 | 13 | No release (patch imminent) | 🟢 **Strong** |
| **CoPaw / QwenPaw** | 13 | 29 | 11 | v2.0.1 current (patch likely) | 🟢 **Strong** |
| **NanoBot** | — | 15 | 9 | Continuous delivery (main) | 🟢 **Healthy** |
| **NanoClaw** | 1 | 10 | 3 | No release (Docker SQLite blocker) | 🟡 **Active / Risk Rising** |
| **PicoClaw** | 3 | 9 | 3 | No release | 🟡 **Steady** |
| **LobsterAI** | 3 | 6 | 2 | No release (stale cleanup) | 🟡 **Stabilizing** |
| **Moltis** | 0 | 0 | 0 | No release (1 open feature PR) | 🟡 **Quiet** |
| **NullClaw** | 0 | 0 | 0 | No activity | ⚪ **Inactive** |
| **ZeptoClaw** | 0 | 0 | 0 | No activity | ⚪ **Inactive** |

*Health Score criteria: release cadence, issue→fix velocity, automated tooling, critical bug resolution, community engagement.*

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale & Automation**: 500 PRs/24h with `clawsweeper[bot]` closing 8/10 sampled fixes—only project with mature CI-driven auto-remediation for well-understood bug classes.
- **Storage-Layer Maturity**: v2026.7.2-beta.7 ships *crash-recoverable SQLite snapshots, quarantine store, schema-upgrade data-loss rejection*—features peers treat as roadmap items (ZeroClaw RFC #7142, NanoClaw #3177).
- **Multi-Channel Depth**: Production-grade WhatsApp, Discord, Slack, Telegram, Matrix, Twilio voice with thread-aware routing; peers support subsets (Hermes: WhatsApp/Desktop/Windows; ZeroClaw: WhatsApp Cloud/Linq/WATI; CoPaw: OneBot/QQ).
- **Community Engagement**: 87 comments on top issue (#116277) signals active user base; most peers show 0–2 comments.

**Technical Approach Differences:**
- **State as First-Class Citizen**: Quarantine store + rollback-writer snapshots treat agent state as durable, recoverable infrastructure—unlike peers' in-memory or basic SQLite approaches.
- **Bot-Driven Remediation**: `clawsweeper` automates fixes for transport failures, auth key preservation, provider alias resolution—reducing maintainer toil for recurring patterns.
- **Schema Migration Safety**: Explicit data-loss rejection on upgrades (v1→v6+) with `openclaw doctor --fix`—a governance layer absent elsewhere.

**Community Size**: Largest visible engagement (issue comments, bot activity, multi-channel operator reports). ZeroClaw matches contributor breadth (49 on v0.8.4) but with less public discourse.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Provider Reliability & Silent Failure Detection** | OpenClaw (#116277 DeepSeek), NanoBot (#5216 Gemini Flash), Hermes (#73985 xAI TTS), CoPaw (#6619 Gemini thought_signature), ZeroClaw (#9037 `<eom>` leakage) | Structured fallback chains, liveness probes, stream validation, token sanitization |
| **Realtime Voice / Streaming Resource Bounds** | OpenClaw (#116201 unbounded state), Hermes (#77291 5–13s latency), ZeroClaw (SSE hardening #8838) | Token/item budgets, backpressure, prompt caching, parallel tool calls |
| **Multi-Channel Durability & Backfill** | OpenClaw (#50093 WhatsApp backfill), ZeroClaw (#9465 silent precheck decline), Hermes (#77268 WhatsApp wedge), NanoClaw (#3177 Docker SQLite locks) | Idempotent delivery, WAL mode SQLite, persistent outbound queues, reconnection state recovery |
| **Auth / Credential Rotation & Multi-User Identity** | OpenClaw (#116248, #109017), ZeroClaw (RFC #7141 OIDC, #7142 security pipeline), IronClaw (#7016 SSRF via proxy), NanoBot (#5196 Weixin session) | Pluggable auth providers, principal canonicalization, proxy-safe transports, secret hydration |
| **Subagent / Multi-Agent Orchestration Durability** | OpenClaw (#118018 stale completion), CoPaw (#6625 ACP delegate race), ZeroClaw (#8289 per-sender authz), IronClaw (Wave 2 port-inversion) | Durable completion delivery, CAS-guarded state transitions, isolation boundaries |
| **Plugin / Skill Ecosystem & Sandboxing** | OpenClaw (#115478 WeChat plugin SDK), NanoClaw (#3041/#3050 Dial channel), ZeroClaw (#9624 WIT pin divergence), CoPaw (#6537 skill tags), LobsterAI (#1215 chat handler rebuild) | Versioned plugin manifests, capability negotiation, sandbox egress control, hot-reload |
| **Windows / Cross-Platform Reliability** | Hermes (#77277 update loop, #77286 installer), NanoBot (#5190 MIME types), PicoClaw (#3313 shell allow-list), ZeroClaw (desktop pipeline) | Native installer signing, path/locale handling, process tree cleanup, filesystem locking |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Technical Architecture |
|---------|---------------|--------------|------------------------|
| **OpenClaw** | **Multi-channel agent OS** with enterprise-grade state durability | Power users, operators, multi-platform bot deployments | Central gateway + quarantine store + crash-recoverable SQLite + bot-driven CI remediation |
| **ZeroClaw** | **Security-first multi-user platform** with OpenAI-compatible API | Developers integrating with Open WebUI/LobeChat/Continue, orgs needing OIDC/isolation | Pluggable auth principals, security decision pipeline overlays, Chat Completions profile, WIT-component plugins |
| **IronClaw** | **Correctness-verified agent runtime** with formal port-inversion architecture | NEAR ecosystem, developers needing auditable delivery guarantees | Wave-based consolidation, strict CI coverage gates, internal QA audit loop, Reborn steering |
| **Hermes Agent** | **Desktop-native personal agent** with Windows/Whisper/TTS polish | Individual users on Windows/macOS/Linux desktop | Tauri desktop app, app-managed gateway, xAI/OpenAI TTS streaming, in-app updates |
| **CoPaw / QwenPaw** | **Qwen/agentScope-integrated IDE companion** with multi-agent delegation | Chinese developers, Qwen ecosystem users, coding agents | AgentScope 2.x backend, ACP protocol, Creator skill builder, OneBot/QQ bridge |
| **NanoBot** | **Lightweight cross-platform agent** with provider agility | Developers needing fast Gemini/OpenAI/Codex switching, Windows users | Fast provider adaptation (Gemini Flash images, Codex dedup), WebUI caching, `uv` plugin installs |
| **NanoClaw** | **Telephony/SMS + MCP HTTP agent** for voice-first workflows | Users building AI voice/SMS bots, multi-agent MCP topologies | Dial channel adapter, remote Streamable HTTP MCP, context Markdown prepend |
| **PicoClaw** | **Security-hardened embedded agent** with locale/provider extensibility | Embedded/IoT deployments, Chinese/Taiwanese users, security-conscious ops | Remote exec boundaries, schema-v4 prompt injection defense, AI Router/Exa presets, zh-TW i18n |
| **LobsterAI** | **Enterprise IM bot framework** (DingTalk/Telegram/PoPo) | NetEase/Youdao internal, Chinese enterprise IM automation | React cowork UI, scheduled tasks, gateway stability on Windows, Tailwind v4 migration |
| **Moltis** | **MCP server lifecycle manager** with Git-backed bundles | Operators distributing/updating MCP servers | Managed Git repo bundles (HTTPS/SSH), vault integration, CLI/RPC/Web UI, DB migrations |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (High Velocity + Releases)** | OpenClaw, ZeroClaw, CoPaw, Hermes Agent | Daily merges, patch releases imminent, automated tooling, user-facing bug velocity |
| **Consolidating Architecture (High Velocity, Pre-Release)** | IronClaw, NanoBot | Major refactors landed (Wave 2, port-inversion), strict CI gates, internal QA driving fixes |
| **Stabilizing / Tech-Debt Reduction** | PicoClaw, LobsterAI, NanoClaw | Stale cleanup, regression fixes, performance PRs, critical blockers (NanoClaw Docker) |
| **Feature-Branch Development** | Moltis | Single large PR (#1183 MCP bundles), no community friction yet |
| **Inactive** | NullClaw, ZeptoClaw | No 24h activity |

**Key Insight**: The top 4 projects (OpenClaw, ZeroClaw, IronClaw, Hermes) represent **~85% of total PR volume**—ecosystem momentum is concentrated. CoPaw and NanoBot form a second tier with strong domain-specific velocity (Qwen ecosystem, provider agility).

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **State Durability > Feature Velocity** | OpenClaw quarantine store, ZeroClaw security pipeline, IronClaw delivery CAS, NanoClaw SQLite WAL blocker | **Invest in crash-recoverable storage, idempotent delivery, and schema migration safety**—users punish silent data loss more than missing features. |
| **OpenAI Chat Completions as Universal Interop Layer** | ZeroClaw RFC #8603 (15 comments), OpenClaw provider catalog, IronClaw MCP OAuth | **Implement `/v1/chat/completions` compatibility**—it's the de facto integration point for Open WebUI, LobeChat, Continue, Aider, LangChain. |
| **Multi-User Identity & Isolation as Prerequisite** | ZeroClaw RFC #7141/#7142 (61d stale), IronClaw principal auth, OpenClaw workspace-state migration | **Design for pluggable OIDC, canonical principals, and per-sender authorization from day one**—retrofitting is blocking releases. |
| **Provider Churn Requires Automated Adaptation** | NanoBot Gemini Flash image fix (same-day), OpenClaw `clawsweeper` auth alias fixes, CoPaw agentScope 2.0.4.post1 breakage | **Build provider abstraction layers with contract testing & fallback chains**—model APIs change weekly; manual updates don't scale. |
| **Windows/Desktop is a Differentiator, Not Afterthought** | Hermes 3 Windows bugs/24h, NanoBot MIME blocker, LobsterAI gateway restarts, PicoClaw shell allow-list | **Invest in native installers, process tree cleanup, locale/path handling, and code-signing**—desktop users are high-value and vocal. |
| **MCP / Tool Protocol Standardization Accelerating** | NanoClaw Streamable HTTP MCP, ZeroClaw Lucid retirement, Moltis Git bundles, IronClaw RFC 9728 | **Adopt MCP as primary tool interface**; build managed server distribution (Git bundles, vault-backed credentials) into platform. |
| **Observability & Debugging as Product Features** | IronClaw OTel correlation (#9352), OpenClaw `doctor --fix`, ZeroClaw webhook auth bypass detection | **Expose internal state via structured logs, health endpoints, and CLI diagnostics**—operators demand "why did it fail?" not just "it failed." |

---

## Summary for Decision-Makers

- **OpenClaw** sets the **production baseline** for state safety, multi-channel breadth, and automated remediation.
- **ZeroClaw** leads on **security architecture and ecosystem interoperability** (OpenAI API, OIDC, isolation).
- **IronClaw** demonstrates **correctness-by-construction

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-03

## 1. Today's Overview
NanoBot showed **high maintenance velocity** on 2026-08-03 with **15 PRs updated** (9 merged/closed, 6 open) and **1 critical bug resolved**. The project is actively stabilizing cross-platform compatibility (Windows MIME types), provider integrations (Gemini Flash images, OpenAI Responses API), and WebUI reliability. No new releases were published, indicating ongoing iteration on the `main` branch. Community engagement remains developer-driven with minimal external issue commentary.

## 2. Releases
**No new releases** published today. The project continues on a continuous-delivery cadence via merged PRs to `main`.

## 3. Project Progress — Merged/Closed PRs (9)

| PR | Category | Summary | Impact |
|----|----------|---------|--------|
| [#5191](https://github.com/HKUDS/nanobot/pull/5191) | **Bug Fix (Windows)** | Register correct MIME types for `.js`/`.mjs` static assets on Windows — fixes `text/plain` MIME error blocking module script loading ([#5190](https://github.com/HKUDS/nanobot/issues/5190)) | **Critical**: Unblocks Windows WebUI startup |
| [#5216](https://github.com/HKUDS/nanobot/pull/5216) | **Provider Fix** | Send Gemini Flash image hints via `generationConfig.imageConfig` — resolves `HTTP 400 INVALID_ARGUMENT` for `gemini-3.1-flash-lite-image`, `gemini-2.5-flash-image` | **High**: Restores image generation for latest Gemini models |
| [#5217](https://github.com/HKUDS/nanobot/pull/5217) | **WebUI Fix** | Show persisted timestamps for replayed messages (user/assistant/cron) — adds regression tests | **Medium**: Improves conversation history fidelity |
| [#4854](https://github.com/HKUDS/nanobot/pull/4854) | **Feature (Exec)** | Add opt-in RTK command rewriter for `tools.exec` with sandbox integration | **Medium**: Enhances command safety/observability |
| [#4833](https://github.com/HKUDS/nanobot/pull/4833) | **Architecture** | Gate sustained goals behind explicit runtime mode (`create_goal`/`update_goal` tools) — dynamic per-run tool registration | **High**: Major UX shift for long-running agent workflows |
| [#4822](https://github.com/HKUDS/nanobot/pull/4822) | **WebUI Fix** | Preserve automation source metadata on streamed replies — fixes hydration badges | **Medium**: Restores provenance tracking in live streams |
| [#5196](https://github.com/HKUDS/nanobot/pull/5196) | **Channel Fix (Weixin)** | Recover refreshed session state after 60-min `errcode -14` pause | **High**: Fixes Weixin channel reliability |
| [#5194](https://github.com/HKUDS/nanobot/pull/5194) | **Performance** | Accelerate JSONL session list/thread loading via workspace-scoped caching | **Medium**: Reduces WebUI latency for large histories |
| [#4021](https://github.com/HKUDS/nanobot/pull/4021) | **Provider Fix (Codex)** | Dedup reasoning items before send, retry on duplicate-item 400 — closes [#3633](https://github.com/HKUDS/nanobot/issues/3633) | **High**: Stabilizes Codex multi-turn conversations |

## 4. Community Hot Topics
*No issues/PRs with significant comments or reactions in the last 24h.* Activity is maintainer-driven. The most consequential item is the **Windows MIME-type blocker (#5190/#5191)** — a silent failure mode affecting all Windows users on startup.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue/PR | Status | Fix PR |
|----------|----------|--------|--------|
| **Critical** | [#5190](https://github.com/HKUDS/nanobot/issues/5190): Windows WebUI fails to load JS modules (`text/plain` MIME) | **Closed** | [#5191](https://github.com/HKUDS/nanobot/pull/5191) ✅ |
| **High** | Gemini Flash image models reject requests (400) | **Fixed** | [#5216](https://github.com/HKUDS/nanobot/pull/5216) ✅ |
| **High** | OpenAI Responses API: serde deserialization errors crash conversations | **Open** | [#5214](https://github.com/HKUDS/nanobot/pull/5214) (fallback to chat completions) |
| **High** | Gateway shutdown stalls with asyncio noise (exec/MCP subprocesses) | **Open** | [#5215](https://github.com/HKUDS/nanobot/pull/5215) (deterministic resource close) |
| **Medium** | Weixin channel loses refreshed session after pause | **Fixed** | [#5196](https://github.com/HKUDS/nanobot/pull/5196) ✅ |
| **Medium** | Subagent partial completion not signaled to model | **Open** | [#5152](https://github.com/HKUDS/nanobot/pull/5152) (metadata + notice) |

## 6. Feature Requests & Roadmap Signals

| Signal | PR/Issue | Likelihood for Next Version |
|--------|----------|----------------------------|
| **Cross-session search & `@` mentions** — WebUI users can search/read other sessions, mention them in chat | [#5211](https://github.com/HKUDS/nanobot/pull/5211) (Open) | **High** — UX polish, tests included |
| **MiniMax music generation guidance** — Tool contract discovery for music provider | [#5212](https://github.com/HKUDS/nanobot/pull/5212) (Open) | **Medium** — Provider expansion, docs/tests |
| **Plugin installer fallback to `uv`** — Works when `pip` absent (common in `uv tool` installs) | [#5213](https://github.com/HKUDS/nanobot/pull/5213) (Open) | **High** — Fixes install-footgun, low risk |
| **Sustained goals runtime gating** — Long-task tools only active in `/goal` mode | [#4833](https://github.com/HKUDS/nanobot/pull/4833) ✅ | **Shipped** — Major paradigm shift landed |

## 7. User Feedback Summary
- **Windows users**: Blocked entirely on startup until #5191 (now fixed). No prior reports suggest this regression was recent.
- **Gemini image users**: `flash-image` models unusable until #5216 — indicates rapid model churn requiring provider agility.
- **Codex users**: Duplicate reasoning items broke multi-turn chats (#4021, open since May) — fix finally merged.
- **Weixin channel operators**: Silent session loss after 60-min pause (#5196) — critical for production bots.
- **Plugin adopters**: `nanobot plugins enable` fails in `uv`-only envs (#5213) — common modern install path.

*No direct user satisfaction metrics (👍/comments) on tracked items.*

## 8. Backlog Watch — Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5214](https://github.com/HKUDS/nanobot/pull/5214) — OpenAI Responses API fallback | 1 day (updated) | **P1**: Prevents hard crashes on provider schema drift; fallback design needs review |
| [#5215](https://github.com/HKUDS/nanobot/pull/5215) — Gateway deterministic shutdown | 1 day | **P1**: Async teardown noise masks real errors; blocks clean deployments |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) — Subagent partial completion metadata | 6 days | **Regression**: Model infers false completion; affects multi-agent reliability |
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) — Cross-session search/mentions | 2 days | **Feature**: Significant WebUI UX upgrade; requires session-store API review |
| [#5213](https://github.com/HKUDS/nanobot/pull/5213) — `uv` fallback for plugins | 1 day | **DX**: Unblocks `uv tool` installs; trivial fix, high leverage |

---

**Health Indicator**: 🟢 **Healthy** — High merge throughput, critical bugs resolved fast, architectural improvements landing. Risk concentrated in **open P1 provider/runtime PRs (#5214, #5215)** which gate stability for OpenAI/gateway users.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-03

## 1. Today's Overview
Hermes Agent shows **high maintenance velocity** with 50 PRs and 7 issues updated in the last 24 hours. The project is in active stabilization mode: 13 PRs were merged/closed today, addressing critical platform bugs (WhatsApp, Desktop, Windows updates), TTS streaming failures, and configuration persistence. No new releases were cut, but the volume of fixes targeting P1/P2 regressions suggests a patch release is imminent. Community engagement is moderate—most items have 0–1 comments—indicating core maintainers are driving the current wave.

---

## 2. Releases
**None** — No new versions published today. The merged fixes (see §3) are staged on `main` and will likely ship in a near-term patch (e.g., `v0.x.y+1`).

---

## 3. Project Progress — Merged/Closed PRs Today (13)

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#77292](https://github.com/NousResearch/hermes-agent/pull/77292) | Pasting a thread with images keeps the text and skips the blank thumbnails | Desktop/Clipboard | Fixes data loss when copying Discord threads with embeds |
| [#75263](https://github.com/NousResearch/hermes-agent/pull/75263) | fix(secrets): hydrate cold multiplex sources locally | Auth/Config/Profiles | Resolves secret hydration for multiplex profiles (#74317) |
| [#77237](https://github.com/NousResearch/hermes-agent/pull/77237) | fix(cli): persist YOLO mode across `--resume` | CLI/Sessions | YOLO bypass now survives session resume (was in-memory only) |
| [#77299](https://github.com/NousResearch/hermes-agent/pull/77299) | fix(cli): back up config.yaml before `--reset` overwrites it | CLI/Config | Prevents accidental config loss during `hermes setup --reset` |
| [#77297](https://github.com/NousResearch/hermes-agent/pull/77297) | fix(desktop): stop app-managed gateway on backend shutdown | Desktop/Gateway | Stops orphan gateway processes (addresses #77276) |
| [#77298](https://github.com/NousResearch/hermes-agent/pull/77298) | fix(whatsapp): add timeout to `fetchLatestBaileysVersion` | WhatsApp/Gateway | Prevents permanent disconnect wedge (#77268) |
| [#77296](https://github.com/NousResearch/hermes-agent/pull/77296) | fix(desktop): persist message reactions config | Desktop/Config | Fixes toggle persistence (was returning 4002) |
| [#77294](https://github.com/NousResearch/hermes-agent/pull/77294) | fix(tools): honor docker cleanup settings in file/execute_code tools | Tools/Docker | Forwards `docker_persist_across_processes` & `docker_orphan_reaper` |
| [#77285](https://github.com/NousResearch/hermes-agent/pull/77285) | fix(tts): rewrite xAI streaming against real WebSocket protocol | TTS/xAI | Full rewrite of broken `XAIStreamer` (#73985) |
| [#77300](https://github.com/NousResearch/hermes-agent/pull/77300) | fmt(js): `npm run fix` auto-fix | CI/JS | Automated lint/formatting pass |
| [#40457](https://github.com/NousResearch/hermes-agent/pull/40457) | feat(qqbot): support send_message MEDIA via adapter-backed delivery | QQBot/Tools | Media delivery via gateway & standalone sender (long-open, now active) |
| [#73302](https://github.com/NousResearch/hermes-agent/pull/73302) | fix(tool-search): validate deferred tool_call args against full JSON Schema | Tools/MCP | Extends validation to `type`, `enum`, nested `required` (#73175) |
| [#73805](https://github.com/NousResearch/hermes-agent/pull/73805) | feat(api): expose tool call success/failure counts in chat/completions | API/Agent | Adds framework-level signal for tool outcome visibility (#73389) |

**Theme**: Stability > new features. 10/13 are bug fixes; 3 are features (QQBot media, tool-call telemetry, JS formatting).

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|-----|-----------|
| [#73985](https://github.com/NousResearch/hermes-agent/issues/73985) | Issue (Bug) | 4 | 0 | **xAI TTS streaming fundamentally broken** — 4 independent failures; rewrite PR [#77285](https://github.com/NousResearch/hermes-agent/pull/77285) open |
| [#77268](https://github.com/NousResearch/hermes-agent/issues/77268) | Issue (Bug) | 1 | 0 | **WhatsApp bridge permanent disconnect** on version-fetch hang; fix PR [#77298](https://github.com/NousResearch/hermes-agent/pull/77298) open |
| [#77291](https://github.com/NousResearch/hermes-agent/issues/77291) | Issue (Perf) | 1 | 0 | **Per-turn latency 5–13s** — high reasoning effort, serial round-trips, no prompt caching; audit with 14-day data |
| [#77276](https://github.com/NousResearch/hermes-agent/issues/77276) | Issue (Bug) | 1 | 0 | **Desktop restart leaves orphan gateway** (app-managed spawn path not covered by #75936); fix PR [#77297](https://github.com/NousResearch/hermes-agent/pull/77297) open |
| [#77277](https://github.com/NousResearch/hermes-agent/issues/77277) | Issue (Bug) | 1 | 0 | **Windows in-app update loops forever** — updater sees own backend as blocker; dup of earlier Windows update bugs |

**Analysis**: All top items are **P1/P2 regressions affecting core platforms** (WhatsApp, Desktop, Windows, TTS). Users hit showstoppers, not nice-to-haves. The performance issue (#77291) is data-backed and signals architectural debt in the agent loop.

---

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **P1 — Platform wedge** | [#77268](https://github.com/NousResearch/hermes-agent/issues/77268) | WhatsApp bridge permanently disconnected after 503; `fetchLatestBaileysVersion()` has no timeout | [#77298](https://github.com/NousResearch/hermes-agent/pull/77298) ✅ |
| **P1 — Orphan process** | [#77276](https://github.com/NousResearch/hermes-agent/issues/77276) | Desktop app restart leaves gateway running (app-managed path) | [#77297](https://github.com/NousResearch/hermes-agent/pull/77297) ✅ |
| **P1 — Update loop** | [#77277](https://github.com/NousResearch/hermes-agent/issues/77277) | Windows in-app update aborts: “another Hermes process” — but it’s the app’s own respawning backend | — (needs triage) |
| **P1 — Data loss** | [#77286](https://github.com/NousResearch/hermes-agent/issues/77286) | Update program error submission (screenshots attached) — Windows installer failure | — (needs repro) |
| **P3 — Feature broken** | [#73985](https://github.com/NousResearch/hermes-agent/issues/73985) | xAI streaming TTS **never produces audio** — 4 stacked failures (handshake, protocol, kwargs, wire format) | [#77285](https://github.com/NousResearch/hermes-agent/pull/77285) ✅ |
| **P3 — Config loss** | [#77299](https://github.com/NousResearch/hermes-agent/pull/77299) | `hermes setup --reset` destroys `config.yaml`; backup captures wrong file | [#77299](https://github.com/NousResearch/hermes-agent/pull/77299) ✅ |
| **P3 — Config not persisted** | [#77296](https://github.com/NousResearch/hermes-agent/pull/77296) | Desktop message-reactions toggle returns 4002, doesn’t save | [#77296](https://github.com/NousResearch/hermes-agent/pull/77296) ✅ |

**Note**: 5/7 bugs reported today already have fix PRs open. The Windows update loop (#77277) and installer error (#77286) need maintainer triage.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood for Next Version |
|----------|--------|------------------------------|
| [#77284](https://github.com/NousResearch/hermes-agent/issues/77284) | `custom_providers`: add `bearer_auth` for Anthropic-compatible endpoints | **High** — small, well-scoped config addition; no opposition |
| [#77291](https://github.com/NousResearch/hermes-agent/issues/77291) | **Prompt caching, parallel tool calls, reduced reasoning effort** to cut 5–13s/turn latency | **Medium** — architectural; needs design decision, but data-backed urgency |
| [#77295](https://github.com/NousResearch/hermes-agent/pull/77295) | **Skill learning loop**: lessons overlay, `skill_view` inject, `fact_store` review | **Medium** — feature PR open, touches agent memory/skills; may need iteration |
| [#77076](https://github.com/NousResearch/hermes-agent/pull/77076) | **SMART busy-input orchestration** (durable queues, FIFO, cancellation tombstones) | **Low–Medium** — large cross-cutting change; still in early review |
| [#30975](https://github.com/NousResearch/hermes-agent/pull/30975) | Web tool backend fallback chains (`web_search`/`web_extract`) | **Low** — open since May, needs decision; not hot path |
| [#73805](https://github.com/NousResearch/hermes-agent/pull/73805) | Expose tool call success/failure counts in `/chat/completions` | **High** — merged today; ships in next release |

**Prediction**: Next patch will include `bearer_auth` config, tool-call telemetry, and the 10 bug fixes. Latency work (#77291) and skill learning (#77295) are candidates for the following minor release.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **WhatsApp unreliability** | Bridge wedges permanently on network hiccup (#77268) | 1 report, but P1 severity |
| **Desktop on Windows is fragile** | Update loops forever (#77277), installer errors (#77286), locale injection (#69474) | 3+ issues in 24h |
| **xAI TTS unusable** | “Can never produce audio” — 4 independent bugs (#73985) | 1 report, but feature completely broken |
| **Latency too high** | 5–13s/turn, minutes for full requests (#77291) | 1 data-backed audit |
| **Config loss on reset** | `hermes setup --reset` nukes `config.yaml` (#77299) | 1 report, fix merged |
| **Orphan processes** | Gateway survives Desktop restart (#77276) | 1 report, fix merged |

**Sentiment**: Frustration with **platform-specific stability** (Windows, WhatsApp, xAI). Core agent logic is praised in the latency audit (“work is trivial” but overhead dominates). Users want **reliability over features**.

---

## 8. Backlog Watch — Stale but Important Items

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#40457](https://github.com/NousResearch/hermes-agent/pull/40457) | ~60 days | QQBot media delivery — core platform parity | **Merged today** ✅ |
| [#30975](https://github.com/NousResearch/hermes-agent/pull/30975) | ~70 days | Web tool fallback chains — resilience for search/extract | Open, needs decision |
| [#63505](https://github.com/NousResearch/hermes-agent/pull/63505) | ~20 days | Telegram: send local GIFs as animations | Open, moderate risk |
| [#69474](https://github.com/NousResearch/hermes-agent/pull/69474) | ~12 days | Desktop: preserve terminal locale (stop injecting `LC_CTYPE=UTF-8`) | Open, Windows/macOS impact |
| [#57982](https://github.com/NousResearch/hermes-agent/pull/57982) | ~30 days | `/sessions search` punctuation stripping asymmetry | Open, low visibility |
| [#73302](https://github.com/NousResearch/hermes-agent/pull/73302) | ~6 days | Tool-call arg validation against full JSON Schema | **Merged today** ✅ |
| [#73805](https://github.com/NousResearch/hermes-agent/pull/73805) | ~5 days | Tool call success/failure counts in API response | **Merged today** ✅ |

**Action needed**: #30975 (web fallbacks) and #69474 (locale) are the oldest open PRs with user-facing impact. #63505 (Telegram GIFs) has platform-compatibility labels and should be reviewed before next release.

---

## Health Indicators
| Metric | Status |
|--------|--------|
| **Issue→Fix velocity** | ✅ Strong — 5/7 today’s bugs have PRs |
| **Release cadence** | ⚠️ No release today; fixes accumulating on `main` |
| **Platform coverage** | ⚠️ Windows/WhatsApp/xAI showing repeated regressions |
| **Community engagement** | 🟡 Low comments/reactions — maintainer-driven |
| **Tech debt signals** | 🟠 Latency audit (#77291) reveals structural overhead |

**Bottom line**: Hermes Agent is **stabilizing rapidly** after a wave of platform regressions. The next patch will be high-value. Watch for a `v0.x.y+1` tag within days.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-03

## 1. Today's Overview
PicoClaw shows **steady maintenance velocity** with 9 PRs and 3 issues updated in the last 24 hours. No new release shipped today. Activity clusters around **security hardening**, **agent-loop reliability**, **shell-command allow-list fixes**, and **provider/locale expansion**. Three PRs were closed/merged (two duplicates for the same shell-guard fix, one automated PR), while six PRs remain open awaiting review. The most user-visible regression — silent agent stalls on repeated tool failures — has both an issue (#3311) and a targeted fix PR (#3312) submitted the same day.

## 2. Releases
**None** — no new version published today.

## 3. Project Progress (Merged / Closed PRs Today)
| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#3313](https://github.com/sipeed/picoclaw/pull/3313) | Fix: agent not able to execute shell command added to `customAllowPatterns` | **Bug fix** (merged) | Default deny patterns incorrectly overrode user allow-lists; `git push` etc. now work when explicitly permitted. |
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) | Duplicate of #3313 (left open) | — | Same fix; likely kept open for CI verification or backport. |
| [#3310](https://github.com/sipeed/picoclaw/pull/3310) | Feat/auto pr | **Automation** (closed) | Generated by `picoclanker`; purpose unclear — may be dependency bump or chore. |
| [#3261](https://github.com/sipeed/picoclaw/pull/3261) | Add zh-TW locale and Traditional Chinese translations | **Feature** (closed) | WebUI & docs now use Taiwanese terminology end-to-end. |

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3298](https://github.com/sipeed/picoclaw/issues/3298) — *Add AI Router as OpenAI-compatible provider preset* | 1 comment, 👍0, author = AI Router maintainer | **Provider ecosystem growth** — vendors want first-class presets so users don’t hand-edit `api_base`. |
| [#3294](https://github.com/sipeed/picoclaw/issues/3294) — */list models shows only current model* | 1 comment, 👍0 | **Discoverability** — users expect `/list models` to enumerate *all* configured models, not just the active one. |
| [#3297](https://github.com/sipeed/picoclaw/pull/3297) — *Harden remote prompt & exec boundaries* | 0 comments, 👍0, **security-labeled** | **Supply-chain / prompt-injection defense** — normalizes remote metadata, disables remote exec by default, adds per-call approval + origin policy re-check. |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) — *Native Exa web search provider* | 0 comments, 👍0 | **RAG quality** — Exa’s highlights + date-range filters requested as alternative to existing web providers. |

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Fix PR? | Notes |
|----------|-------|---------|-------|
| **High** | [#3311](https://github.com/sipeed/picoclaw/issues/3311) — Agent loops silently on repeated identical tool failure until `max_tool_iterations`; user receives **no answer**. | **Yes** — [#3312](https://github.com/sipeed/picoclaw/pull/3312) stops turn early on repeated identical failure. | Production impact reported over Telegram (git command without creds). Fix adds failure-signature tracking & early exit. |
| **Medium** | [#3294](https://github.com/sipeed/picoclaw/issues/3294) — `/list models` returns only active model/provider. | No PR yet. | UX regression; command name & description promise full list. |
| **Medium** | [#3295](https://github.com/sipeed/picoclaw/pull/3295) — `SplitMessage` hangs when fenced-code info string > `maxLen`. | **PR open** — fallback to bounded raw split + regression test. | Channel message splitter stall; affects all chat adapters. |
| **Low** | [#3313/#3314](https://github.com/sipeed/picoclaw/pull/3313) — `customAllowPatterns` ignored due to deny-list precedence. | **Merged** (#3313). | Shell guard logic fixed; `git push` etc. now honor allow-list. |

## 6. Feature Requests & Roadmap Signals
| Request | Signal Strength | Likelihood for Next Release |
|---------|----------------|-----------------------------|
| **AI Router preset** (#3298) | Vendor-maintained, 1 comment | High — trivial config addition, aligns with “provider preset” pattern. |
| **Exa native web provider** (#3299) | PR open, full impl + config | High — code complete, only review needed. |
| **Czech i18n completion** (#3296) | PR open, labels only | Medium — low-risk, but locale PRs often batched. |
| **zh-TW locale** (#3261) | **Merged today** | ✅ Already landed. |
| **Security hardening** (#3297) | PR open, schema v4 migration | Medium-High — security-labeled, but schema bump may require minor version. |

## 7. User Feedback Summary
- **Pain point**: Agent **silently spins** for minutes on tool errors (git auth, shell guard) — users see *no reply* (#3311).  
- **Expectation gap**: `/list models` should enumerate *all* configured models, not just current (#3294).  
- **Provider friction**: Power users manually set `api_base` for AI Router; want one-click preset (#3298).  
- **Positive**: Traditional Chinese localization completed end-to-end (#3261 merged).  
- **Security consciousness**: Community submits hardening PR (#3297) proactively — indicates mature threat-model awareness.

## 8. Backlog Watch (Stale / Needs Maintainer Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3297](https://github.com/sipeed/picoclaw/pull/3297) — Security hardening & schema v4 | 8 days (updated 2026-08-02) | **Security-labeled**, changes remote-exec default & config schema — needs maintainer review before merge. |
| [#3295](https://github.com/sipeed/picoclaw/pull/3295) — SplitMessage hang fix | 8 days | Regression test included; blocks reliable long-message delivery in all channels. |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) — Exa provider | 8 days | Feature-complete; expands RAG options. |
| [#3296](https://github.com/sipeed/picoclaw/pull/3296) — Czech labels | 8 days | Small i18n PR; easy merge but overlooked. |
| [#3294](https://github.com/sipeed/picoclaw/issues/3294) — /list models bug | 9 days | No PR yet; simple fix but UX-affecting. |

---

**Health Indicators**  
- **PR throughput**: 3 closed / 6 open today → healthy merge rate.  
- **Security focus**: 1 security PR + 1 shell-guard fix merged → proactive posture.  
- **Community contributions**: 4 external PRs (Exa, Czech, zh-TW, AI Router issue) → growing ecosystem.  
- **Risk**: Two 8-day-old PRs (#3297, #3295) with regression/security impact awaiting review — recommend prioritizing these in next triage.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-03

## 1. Today's Overview
NanoClaw shows **high contributor velocity** with 10 PRs updated and 1 critical issue opened in the last 24 hours, but **zero new releases**, indicating active development sprint without a cut. The open PR count (7) dwarfs closed (3), suggesting work-in-progress accumulation. The single new issue (#3177) is a **high-severity infrastructure bug** affecting Docker deployments on macOS/Linux — a core deployment target. Overall health: **active but with a blocking stability risk** that could stall releases if not resolved quickly.

## 2. Releases
**No new releases today.** The repository has not cut a version since the last digest. With PR #3176 (release retry logic) merged and PR #3177 (Docker SQLite lock contention) open, the next release will likely include both the publish hardening and the Docker filesystem fix.

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3176](https://github.com/nanocoai/nanoclaw/pull/3176) | **Fix (core-team)** | `fix(release): retry post-publish readback` — adds retry logic to npm publish verification, reducing flaky CI failures. | Improves release pipeline reliability. |
| [#301](https://github.com/nanocoai/nanoclaw/pull/301) | **Feature Skill (Blocked → Closed)** | `feat(skill): enhance add-telegram skill` — Markdown rendering, file downloads (≤10MB), Linux/Docker guidance. **Closed as blocked/pending closure** after 5+ months. | Telegram channel capability completed but stalled; may need re-PR. |
| [#2626](https://github.com/nanocoai/nanoclaw/pull/2626) | **Fix** | `fix(signal): replace silent restartService failure with explicit error` — surfaces `launchctl kickstart` failures instead of silent no-op. Closes #2583. | Signal channel reliability on macOS; eliminates wizard false-success. |

**Net progress:** Release hardening + Signal macOS fix shipped; Telegram skill enhancement archived (blocked). Dial channel work (#3041, #3050) and MCP HTTP support (#3092) remain open and active.

## 4. Community Hot Topics — Most Active Items

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| **[#3177](https://github.com/nanocoai/nanoclaw/issues/3177)** — *Session DB lock contention on Docker cross-mount filesystems* | **New, 0 comments, 0 👍** — but **critical severity** (29k+ readonly errors, delivery failures). Author: `DawoudIO`. | **Production Docker deployments on macOS/Linux (VirtioFS) are broken.** SQLite DELETE journal mode doesn’t propagate locks across mounts. Need WAL mode or alternative locking. Blocks any Docker-based user. |
| **[#3041](https://github.com/nanocoai/nanoclaw/pull/3041)** / **[#3050](https://github.com/nanocoai/nanoclaw/pull/3050)** — *Dial channel adapter (SMS + AI voice calls)* | **Open since 2026-07-14, updated 2026-08-02** — 2 PRs (adapter + wizard/skill), 0 comments. Author: `OmriBenShoham`. | **New channel integration demand** — voice/SMS via Dial. Requires both core adapter and setup wizard. Long review cycle suggests complexity or maintainer bandwidth limit. |
| **[#3092](https://github.com/nanocoai/nanoclaw/pull/3092)** — *Remote Streamable HTTP MCP servers* | **Open since 2026-07-19, updated 2026-08-02** — 0 comments. Author: `amit-shafnir` (core-team). | **MCP ecosystem alignment** — enable connecting to remote MCP servers over Streamable HTTP. Strategic for agent interop. |
| **[#3090](https://github.com/nanocoai/nanoclaw/pull/3090)** — *Prepend all top-level context Markdown* | **Open since 2026-07-19, updated 2026-08-02** — 0 comments. Author: `amit-shafnir` (core-team). | **Prompt/context engineering** — ensure full context injection for skills. Quality-of-life for skill authors. |

**Pattern:** Core-team PRs (#3090, #3092, #3172, #3176) move quietly; external contributor PRs (#3041, #3050, #2625, #2626) sit longer. Issue #3177 is the only community-reported bug today — but it’s a **deployment blocker**.

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)

| Severity | Issue/PR | Status | Fix PR? |
|----------|----------|--------|---------|
| **🔴 Critical** | [#3177](https://github.com/nanocoai/nanoclaw/issues/3177) — SQLite lock contention on Docker mounts (VirtioFS) → 29k+ readonly errors, delivery failures. Root cause: DELETE journal mode doesn’t propagate across mounts. | **Open** (created 2026-08-02) | **No fix PR yet.** Requires WAL mode migration or file-locking shim. |
| **🟡 Medium** | [#3175](https://github.com/nanocoai/nanoclaw/pull/3175) — Command-gate denials written to `outbound.db` (container-owned) via `writeOutboundDirect()` — violates single-writer invariant, corruption risk. | **Open PR** (created 2026-08-02) | **PR #3175 is the fix** — routes denials through delivery adapter instead of direct DB write. |
| **🟢 Low** | [#2625](https://github.com/nanocoai/nanoclaw/pull/2625) — Teams `supportsFiles: false` hardcoded → disables upload UI + drops `send_file` silently. | **Open PR** (since 2026-05-27) | **PR #2625 is the fix** — flips flag in manifest & skill. Stalled 2+ months. |

**Stability signal:** Two data-integrity risks (#3177, #3175) surfaced same day. #3177 has no fix; #3175 has a PR but unmerged. Docker + SQLite is a known sharp edge — expect hotfix branch.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Dial channel (SMS + AI voice)** | PRs [#3041](https://github.com/nanocoai/nanoclaw/pull/3041), [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) — full adapter + wizard | **Medium** — 3 weeks open, no review traction. May need maintainer champion. |
| **Remote Streamable HTTP MCP** | PR [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) (core-team) | **High** — core-team authored, aligns with MCP momentum. |
| **Context Markdown prepend** | PR [#3090](https://github.com/nanocoai/nanoclaw/pull/3090) (core-team) | **High** — small, core-team, improves skill UX. |
| **Teams file upload support** | PR [#2625](https://github.com/nanocoai/nanoclaw/pull/2625) | **Low** — stale 2+ months, trivial fix, no movement. |
| **qodo skills removal** | PR [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) (core-team) | **High** — cleanup, core-team, recent. |

**Prediction:** Next version will likely ship **MCP HTTP (#3092)**, **context prepend (#3090)**, **qodo removal (#3172)**, and **release retry (#3176 — merged)**. Dial and Teams fixes need explicit maintainer pull.

## 7. User Feedback Summary
- **Pain point (critical):** Docker on macOS/Linux **unusable** for session persistence due to SQLite lock contention (#3177). User `DawoudIO` reports 29,000+ readonly errors — this is not theoretical.
- **Pain point (medium):** Signal channel on macOS silently fails restart (#2626, now fixed in #2626 merged).
- **Pain point (low):** Teams bot cannot send/receive files — silent drop (#2625, fix PR open 2+ months).
- **Use case expansion:** Demand for **voice/SMS via Dial** (#3041/#3050) and **remote MCP servers** (#3092) shows users pushing NanoClaw into telephony and multi-agent topologies.
- **Satisfaction signal:** Core-team PRs merge fast (#3176 same-day); external PRs languish. Contributor friction evident.

## 8. Backlog Watch — Stale & High-Value Items Needing Attention

| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| **[#2625](https://github.com/nanocoai/nanoclaw/pull/2625)** — Teams `supportsFiles: true` | **69 days** (2026-05-27) | Trivial one-line fix + skill doc; restores file upload for Teams users. Silent data loss currently. | **Merge or close with reason.** 2-line change. |
| **[#3041](https://github.com/nanocoai/nanoclaw/pull/3041)** / **[#3050](https://github.com/nanocoai/nanoclaw/pull/3050)** — Dial channel | **20 days** | New channel = new user segment. Requires review of telephony security, billing, skill UX. | **Assign reviewer / schedule design review.** |
| **[#3090](https://github.com/nanocoai/nanoclaw/pull/3090)** — Context Markdown prepend | **15 days** | Core-team PR, small, improves all skill context. No reason to stall. | **Merge.** |
| **[#3092](https://github.com/nanocoai/nanoclaw/pull/3092)** — Remote MCP HTTP | **15 days** | Strategic for agent interop. Core-team authored. | **Prioritize review.** |
| **[#3177](https://github.com/nanocoai/nanoclaw/issues/3177)** — Docker SQLite lock contention | **1 day** | **Blocks all Docker macOS/Linux prod deployments.** No workaround documented. | **Urgent: spike WAL mode / file-lock shim. Assign owner today.** |

---

**Bottom line:** NanoClaw is **feature-velocity high, stability-risk rising**. The Docker SQLite bug (#3177) is a **release blocker** for a major deployment target. Core-team PRs flow; community PRs pool. Immediate action on #3177 and stale trivial fixes (#2625, #3090) would signal healthy maintainership. Next release should bundle MCP HTTP, context fix, qodo cleanup, and the Docker fix — if the latter lands.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-03

## 1. Today's Overview
IronClaw shows **high engineering velocity** with 31 PR updates and 8 issue updates in the last 24 hours. The project is in a **post-Wave 2 consolidation phase**: a massive port-inversion refactor (PR #7018) was merged yesterday, and today's activity centers on resolving follow-up architecture decisions (#7033, #7032), hardening production gaps (model budget enforcement #7035, CI coverage gates #7036), and addressing a cluster of **QA-discovered security and correctness bugs** in outbound delivery and network transport (5 issues from @theredspoon). No new releases were cut. The ratio of bug-fix/security PRs to feature work suggests a **stabilization sprint** rather than feature expansion.

## 2. Releases
**No new releases today.** The last release PR (#5598) remains open since 2026-07-03, proposing breaking changes to `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0). Maintainers appear to be holding the release until Wave 2 consolidation settles.

## 3. Project Progress — Merged/Closed Today
| PR | Scope | Outcome |
|----|-------|---------|
| [#7018](https://github.com/nearai/ironclaw/pull/7018) | **Wave 2 port-inversion consolidation** (WS2.2, WS2.4, WS5) — XL, medium risk | **MERGED** — Supersedes 4 prior PRs (#7000, #7003, #7004, #7005); completes the port-inversion stack on `main` |
| [#7013](https://github.com/nearai/ironclaw/pull/7013) | CI: restore 90% changed-line coverage floor | **MERGED** — Re-establishes strict coverage gate |
| [#7015](https://github.com/nearai/ironclaw/issues/7015) | UI bug on Staking page (user-reported) | **CLOSED** — Fixed via undisclosed PR |
| [#6952](https://github.com/nearai/ironclaw/pull/6952) | CI: scope Reborn PR tests by affected area | **MERGED** — Deterministic test selection planner |
| [#7002](https://github.com/nearai/ironclaw/pull/7002) | WS5 transports (part of Wave 2) | **MERGED** (implied by #7018 consolidation) |
| [#6998](https://github.com/nearai/ironclaw/pull/6998) | WS2.1 (part of Wave 2) | **MERGED** (implied by #7018 consolidation) |
| [#6996](https://github.com/nearai/ironclaw/pull/6996) | #6963 gate closeout | **MERGED** (implied by #7018 consolidation) |

**Net effect:** Wave 2 port-inversion is **fully landed**; CI coverage gates are strict again; test execution is now scoped for speed.

## 4. Community Hot Topics
| Item | Type | Signal | Underlying Need |
|------|------|--------|-----------------|
| [#7035](https://github.com/nearai/ironclaw/issues/7035) | Issue | **Production gap**: Model budget enforcement (daily USD caps) unwired since #6174 | **Cost control in prod** — two artifacts claim opposite states; needs runtime enforcement |
| [#7036](https://github.com/nearai/ironclaw/issues/7036) | Issue | **CI policy gap**: Changed-coverage gate doesn’t run on ordinary PRs | **CI trust** — “know what green means” before merging |
| [#7033](https://github.com/nearai/ironclaw/pull/7033) | PR | **Architecture decisions resolved** by delegated agent (8 open Wave 2 decisions) | **Decision closure** — docs-only, but unblocks future work |
| [#7016](https://github.com/nearai/ironclaw/issues/7016) → [#7027](https://github.com/nearai/ironclaw/pull/7027), [#7034](https://github.com/nearai/ironclaw/pull/7034) | Issue+PRs | **SSRF/DNS-rebinding bypass** via ambient proxy env vars | **Network security hardening** — proxy discovery must be disabled in hardened transport |
| [#7017](https://github.com/nearai/ironclaw/issues/7017) → [#7028](https://github.com/nearai/ironclaw/pull/7028) | Issue+PR | **Race**: Interrupted-delivery recovery overwrites `Delivered` status | **Delivery correctness** — compare-and-swap guard needed |
| [#7025](https://github.com/nearai/ironclaw/issues/7025) → [#7029](https://github.com/nearai/ironclaw/pull/7029) | Issue+PR | **Duplicate sends**: Concurrent coordinators can both claim same delivery | **Idempotency** — durable `Prepared→Sending` CAS as sole authority |

**Pattern:** QA engineer @theredspoon filed 5 deep-dive issues in 48h; each has a matching fix PR within hours. This is **internal quality engineering**, not community noise.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical (Security)** | [#7016](https://github.com/nearai/ironclaw/issues/7016) | Ambient proxy vars (`HTTP_PROXY`, `HTTPS_PROXY`) bypass DNS-rebinding protection in `ReqwestNetworkTransport` → SSRF risk | [#7027](https://github.com/nearai/ironclaw/pull/7027) (disable proxy discovery) + [#7034](https://github.com/nearai/ironclaw/pull/7034) (doctor check) |
| **Critical (Correctness)** | [#7025](https://github.com/nearai/ironclaw/issues/7025) | Concurrent coordinators can both send same durable delivery → duplicate vendor egress | [#7029](https://github.com/nearai/ironclaw/pull/7029) (restore durable CAS ownership) |
| **High (Correctness)** | [#7017](https://github.com/nearai/ironclaw/issues/7017) | Interrupted-delivery recovery overwrites concurrent `Delivered` status → lost delivery confirmation | [#7028](https://github.com/nearai/ironclaw/pull/7028) (CAS-guarded `Sending→Unknown`) |
| **High (Reliability)** | [#7031](https://github.com/nearai/ironclaw/issues/7031) | Failed lazy delivery recovery not retried within coordinator lifetime → permanent delivery stall | *No PR yet* |
| **Medium (Observability)** | [#7030](https://github.com/nearai/ironclaw/issues/7030) | `doctor` command doesn’t report host-mediated egress ignoring ambient proxy vars | [#7034](https://github.com/nearai/ironclaw/pull/7034) adds check |
| **Medium (Prod Gap)** | [#7035](https://github.com/nearai/ironclaw/issues/7035) | Model budget enforcement (daily USD caps) not wired in production since #6174 | *No PR yet* |
| **Low (UI)** | [#7015](https://github.com/nearai/ironclaw/issues/7015) | Staking page UI defect (user-reported, no details) | **Closed** (fixed) |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Model cost enforcement runtime** | [#7035](https://github.com/nearai/ironclaw/issues/7035) — production gap since #6174 | **High** — explicit prod gap, architecture decision already made (per #7033) |
| **CI coverage gate on all PRs** | [#7036](https://github.com/nearai/ironclaw/issues/7036) — policy mismatch | **High** — “know what green means” is a blocker for trust |
| **Wave 2 architecture decisions documented** | [#7033](https://github.com/nearai/ironclaw/pull/7033) — 8 decisions resolved by delegated agent | **Done** (docs-only PR open) |
| **MCP OAuth registration per RFC 9728** | [#7024](https://github.com/nearai/ironclaw/pull/7024) — Auto hosted-MCP registration | **Medium** — PR open, core contributor, validates protected-resource metadata |
| **Workspace file links in authenticated previews** | [#6917](https://github.com/nearai/ironclaw/pull/6917) — WebUI UX | **Medium** — XL PR, open since 07-30, human-verified |
| **API-backed project data only (remove fabricated metrics)** | [#6906](https://github.com/nearai/ironclaw/pull/6906) — Projects overview | **Medium** — L PR, core contributor, removes fake spend/gate/failure metrics |

## 7. User Feedback Summary
- **Single external user report**: [#7015](https://github.com/nearai/ironclaw/issues/7015) — Staking page UI bug (closed, no screenshots/steps provided). Low detail, quick close.
- **All other “feedback” is internal QA**: @theredspoon’s 5 issues are systematic correctness/security audits with repro steps, commit hashes, and environment details. This reflects **engineering rigor**, not user pain.
- **No feature requests from users** in this window.
- **Satisfaction signal**: The project merges XL refactors (#7018) and fixes critical bugs within hours — indicates high maintainer responsiveness.

## 8. Backlog Watch — Stale/Important Items Needing Attention
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#5598](https://github.com/nearai/ironclaw/pull/5598) | **31 days** | Release with breaking changes (`ironclaw_common` 0.5.0, `ironclaw_skills` 0.4.0) — blocked on Wave 2? | Open, updated today (bot) |
| [#5981](https://github.com/nearai/ironclaw/pull/5981) | **23 days** | Reborn queued-message steering (XL, medium risk) — forward-ported, turn-boundary races fixed, e2e tested | Open, updated 08-02 |
| [#7031](https://github.com/nearai/ironclaw/issues/7031) | **0 days** | Lazy delivery recovery not retried → permanent stall — **no fix PR yet** | Open, new |
| [#7035](https://github.com/nearai/ironclaw/issues/7035) | **0 days** | Model budget enforcement missing in prod — **no fix PR yet** | Open, new |
| [#6917](https://github.com/nearai/ironclaw/pull/6917) | **4 days** | WebUI workspace links — XL, needs review | Open, updated today |
| [#6906](https://github.com/nearai/ironclaw/pull/6906) | **4 days** | Projects overview cleanup — L, removes fabricated metrics | Open, updated today |

---

**Health Score: 🟢 Strong**  
- Wave 2 architecture complete, CI gates strict, critical bugs patched in hours.  
- **Risks**: Two production gaps (#7031, #7035) lack fix PRs; release (#5598) delayed >1 month.  
- **Next watch**: Merge of #7027/#7028/#7029 (security/correctness), resolution of #7031/#7035, and release cut.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-03

## 1. Today's Overview
LobsterAI showed moderate maintenance activity in the last 24 hours with **3 issue updates** (2 closed, 1 open) and **6 PR updates** (2 merged/closed, 4 open). All touched items are tagged `[stale]` and originated in early April 2026, indicating a batch cleanup of dormant work rather than new feature velocity. No new releases were published. The project appears in a **stabilization and tech-debt reduction phase**, focusing on IM integration reliability, UI performance, and dependency hygiene.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress (Merged/Closed PRs)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#1285](https://github.com/netease-youdao/LobsterAI/pull/1285) | `chore(deps-dev)` | Bumped `concurrently` 8.2.2 → 9.2.1 | Dev-tool upgrade; minor CI/script reliability improvements. |
| [#1286](https://github.com/netease-youdao/LobsterAI/pull/1286) | `chore(deps-dev)` | Bumped `tailwindcss` 3.4.19 → 4.2.2 | Major Tailwind v4 migration; may require config changes in downstream forks. |

Both PRs were merged/closed by `dependabot[bot]` as part of automated dependency maintenance.

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#1219](https://github.com/netease-youdao/LobsterAI/pull/1219) `perf(cowork): eliminate useless re-renders` | 0 comments, 0 👍 | **Renderer performance** — streaming output and message updates trigger full-list re-renders due to missing `React.memo` and fragmented selectors. |
| [#1220](https://github.com/netease-youdao/LobsterAI/pull/1220) `perf(cowork): eliminate N+1 queries` | 0 comments, 0 👍 | **Data-layer efficiency** — `recentChats()` and `conversationSearch()` execute 2 queries per session, causing noticeable lag on large histories. |
| [#1217](https://github.com/netease-youdao/LobsterAI/issues/1217) `[bug] intermittent gateway restart` | 1 comment, 0 👍 | **Runtime stability** — Win10 users experience 3–5 daily gateway restarts; logs attached but root cause unknown. |

*Despite low comment counts, the three items above represent the most technically significant open work.*

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | [#1217](https://github.com/netease-youdao/LobsterAI/issues/1217) Gateway restarts randomly on Win10 (3–5×/day) | **OPEN** | No |
| **Medium** | [#1287](https://github.com/netease-youdao/LobsterAI/issues/1287) IM bot connectivity test passes with dummy credentials (`"1"`) | **CLOSED (stale)** | No — closed without fix; validation logic likely still missing |
| **Low** | [#1215](https://github.com/netease-youdao/LobsterAI/pull/1215) Chat handler not rebuilt when platform config (DingTalk/Telegram) changes without `settings` key | **OPEN** | **Yes** — PR #1215 addresses it |

**Action needed:** #1217 is the only high-severity, user-impacting bug without a fix PR. #1287 was closed stale but may leave a security hole in IM credential validation.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| Collapse/expand for long code blocks (15–200 lines) | [#1289](https://github.com/netease-youdao/LobsterAI/issues/1289) (closed stale) | **Medium** — PR-ready design exists; only needs implementation. |
| Scheduled-task list sorting by creation time / next run time | [#1218](https://github.com/netease-youdao/LobsterAI/pull/1218) | **High** — PR open, solves real UX pain (random UUID ordering). |
| React-memo & selector consolidation for cowork views | [#1219](https://github.com/netease-youdao/LobsterAI/pull/1219) | **High** — Performance PR, low risk, high user-visible impact. |
| Batch-loading recent chats / search results | [#1220](https://github.com/netease-youdao/LobsterAI/pull/1220) | **High** — Directly addresses N+1 query bottleneck. |

**Prediction:** The three open performance PRs (#1218, #1219, #1220) are the strongest candidates for the next minor release.

## 7. User Feedback Summary
- **Pain points**:  
  - Gateway instability on Windows (#1217) disrupts daily workflows.  
  - Long code blocks hijack scroll space; no native collapse UI (#1289).  
  - Scheduled tasks appear in random order, making management tedious (#1218).  
- **Use cases**:  
  - Multi-platform IM bots (DingTalk, Telegram, PoPo) with credential rotation.  
  - Heavy cowork/history usage triggering renderer & DB perf issues.  
- **Sentiment**:  
  - No positive reactions (👍) on any recent item — community engagement is low.  
  - Stale closures without resolution (#1287, #1289) may erode trust.

## 8. Backlog Watch (Stale & Unresolved)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1217](https://github.com/netease-youdao/LobsterAI/issues/1217) Gateway restart bug | 124 days | High user impact, no fix, logs provided. |
| [#1215](https://github.com/netease-youdao/LobsterAI/pull/1215) Chat handler stale config | 124 days | Fixes IM credential propagation; ready for review. |
| [#1218](https://github.com/netease-youdao/LobsterAI/pull/1218) Task list sorting | 124 days | UX improvement, PR open, low complexity. |
| [#1219](https://github.com/netease-youdao/LobsterAI/pull/1219) Re-render elimination | 124 days | Core perf fix for streaming UI. |
| [#1220](https://github.com/netease-youdao/LobsterAI/pull/1220) N+1 query fix | 124 days | Core perf fix for history views. |

**Maintainer action recommended:** Prioritize review/merge of #1215, #1218, #1219, #1220 (all open, stale, but technically sound). Re-open or triage #1217 with a dedicated debugging session.

---

*Digest generated from GitHub data as of 2026-08-02 23:59 UTC. All links point to netease-youdao/LobsterAI.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-03

## 1. Today's Overview
Moltis showed minimal community activity in the last 24 hours: zero issue updates, zero merged or closed PRs, and no new releases. The sole movement is a single open pull request (#1183) introducing managed Git repository bundles for MCP server discovery, installation, and lifecycle management. The project appears to be in a quiet development phase with a focused feature branch under review.

## 2. Releases
No new releases published today.

## 3. Project Progress
No PRs were merged or closed today. The only active change is **PR #1183** (open), which adds a comprehensive managed-repository-bundle system for MCP servers, including HTTPS/SSH Git credentials, vault integration, CLI/RPC/web UI workflows, and database migrations. This represents a significant feature expansion for MCP server management.

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Link |
|------|------|----------|-----------|------|
| #1183 | PR | — | 0 👍 | [moltis-org/moltis#1183](https://github.com/moltis-org/moltis/pull/1183) |

The only discussion surface is the open PR. Zero comments or reactions indicate the change has not yet attracted community review or debate.

## 5. Bugs & Stability
No bug reports, crashes, or regressions were filed or updated today. No fix PRs are present.

## 6. Feature Requests & Roadmap Signals
The sole feature signal is **PR #1183**, which delivers:
- Managed Git repository bundles for MCP servers (discover, preview, install, update, remove)
- HTTPS Git credentials & SSH transport support
- Vault lifecycle integration
- Imported repository-backed MCP configurations
- End-to-end CLI, RPC, and web UI workflows
- Database migrations for the new data model

Given the scope, this feature is likely targeted for the next minor/major release and signals a strategic push to make MCP server distribution and updates a first-class workflow in Moltis.

## 7. User Feedback Summary
No user-reported issues, pain points, or satisfaction signals appeared in the last 24 hours. The absence of issue activity may reflect a stable current release or low community engagement at this time.

## 8. Backlog Watch
No long-unanswered issues or PRs requiring maintainer attention were identified in today’s data set. The only open item is the newly created PR #1183 (2 days old), which is within a normal review window.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-03

---

## 1. Today's Overview

CoPaw shows **high maintenance velocity** with 42 total updates (13 issues, 29 PRs) in 24 hours. The project is in active stabilization mode post v2.0.1 release: **11 PRs merged/closed** address critical regressions (UI freeze on large outputs, CSS stripping, skill-tag persistence, multi-agent compatibility) while **18 open PRs** pipeline pagination, compression, ACP reliability, and provider routing unification. No new release cut today. Community friction centers on **network resilience** (MB-level unpaginated APIs vs 30s timeout), **agentscope 2.0.4.post1 incompatibility** (Msg.content type changes), and **missing multi-agent onboarding**.

---

## 2. Releases

**None today.** Latest remains v2.0.1 (desktop) / pip installable. Next patch likely to bundle the 11 merged fixes.

---

## 3. Project Progress — Merged / Closed PRs (11)

| PR | Title | Issue Fixed | Impact |
|----|-------|-------------|--------|
| [#6637](https://github.com/agentscope-ai/QwenPaw/pull/6637) | Fix console large tool output UI freeze | [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) | **Critical UX**: caps rendering at 100KB/1000 lines; shows head/tail with truncation indicators |
| [#6639](https://github.com/agentscope-ai/QwenPaw/pull/6639) | Stop stubbing node_modules CSS in real builds | — | **Critical regression fix**: restores Monaco editor CSS (hidden textarea white-box bug) |
| [#6543](https://github.com/agentscope-ai/QwenPaw/pull/6543) | OneBot: clean text & send local media | — | Improves QQ/OneBot UX: strips markdown links, enables local media upload |
| [#6521](https://github.com/agentscope-ai/QwenPaw/pull/6521) | Surface OMP loop modes in slash menu | — | Adds `/ultrawork`, `/autowork` etc. to autocomplete with i18n |
| [#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) | Fix spawn subagent schema | [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) | Corrects `batch`/`allowed_tools`/`skills` optionality in JSON schema |
| [#6640](https://github.com/agentscope-ai/QwenPaw/pull/6640) | Creator: rejection feedback loop & hardening | — | Structured undo/regenerate feedback, idempotent runtime messages, specialist delegation |
| [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) | Skill tags persist on restart | [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) | Regression of #3270 fixed — tags survive manifest reconciliation |
| [#6547](https://github.com/agentscope-ai/QwenPaw/issues/6547) | Misplaced cursor in Coding Mode | [#6547](https://github.com/agentscope-ai/QwenPaw/issues/6547) | Floating caret overlay removed |
| [#6617](https://github.com/agentscope-ai/QwenPaw/pull/6617) | Honor Retry-After cap on streaming retry | — | Prevents unbounded pause on rate-limited streams |
| [#6618](https://github.com/agentscope-ai/QwenPaw/pull/6618) | Remove forced UTC timestamp normalization | — | Session timestamps now respect local timezone (backend #6301) |
| [#6616](https://github.com/agentscope-ai/QwenPaw/pull/6616) | Valid user message for headless `task` | — | Fixes `qwenpaw task` CLI command (Msg.content type mismatch) |

---

## 4. Community Hot Topics

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) | Issue | 2 | **Blocker**: v2.0.1 + agentscope 2.0.4.post1 breaks proactive subsystem (Msg.content type + tool-permission deadlock). PR [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) in review. |
| [#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635) / [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) | Issues | 1 each | **Network resilience**: MB-level unpaginated `/api/chats/{id}` and `/api/skills` exceed 30s timeout on slow links. PR [#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636) adds pagination + GZip for chats; skills endpoint still open. |
| [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) | Issue | 1 | **Onboarding gap**: 50+ multi-agent sessions before discovering Default Agent won't auto-delegate without explicit PROFILE.md instruction. Docs describe *how*, not *that it's required*. |
| [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) | Issue | 1 | **File UX**: Drag-and-drop copies to `media/` instead of reading in-place — users expect VS Code/Cursor behavior. |
| [#6626](https://github.com/agentscope-ai/QwenPaw/issues/6626) | Issue | 1 | **CI gate false negative**: Real-behavior proof strips fenced `## Evidence` blocks, rejecting valid PRs with terminal transcripts. |

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) Proactive crashes + tool-permission deadlock (agentscope 2.0.4.post1 incompatibility) | Open | [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) |
| **Critical** | [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) `ToolCallBlock` missing `extra_content` — crashes on Gemini thought_signature | Open | [#6620](https://github.com/agentscope-ai/QwenPaw/pull/6620) |
| **High** | [#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635) Chat history API timeout (1MB+ unpaginated) | Open | [#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636) |
| **High** | [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) Skills list API timeout (MB-level, uncompressed) | Open | — |
| **High** | [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) ACP `delegate_external_agent` loses final text when notification races prompt | Open | [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) |
| **High** | [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) Auto-compression (Scroll) doesn't trigger `summarize_when_compact` | Open | [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) |
| **Medium** | [#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565) `execute_shell_command`: newlines→spaces breaks multi-line cmds; Linux PIPE hangs | Open | — |
| **Medium** | [#6626](https://github.com/agentscope-ai/QwenPaw/issues/6626) CI gate strips fenced Evidence blocks | Open | — |
| **Low** | [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) Drag-and-drop copies file instead of reading in-place | Open | — |

**Resolved today**: #6589 (UI freeze), #6537 (skill tags), #6547 (cursor), #6639 (Monaco CSS), #6609 (spawn schema).

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood Next Version |
|---------|--------|-------------------------|
| **Pagination + GZip for all list APIs** (chats, skills, history) | [#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635), [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) | ★★★★★ — PR #6636 merged for chats; skills endpoint next |
| **In-place file reading on drag-and-drop** | [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) | ★★★☆☆ — UX parity with Cursor/VS Code; low complexity |
| **Multi-agent auto-delegation onboarding** | [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) | ★★★★☆ — Docs + default PROFILE.md template change |
| **Unified provider discovery / model routing** | [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | ★★★★★ — Large PR open since 07-21, addresses #6167 |
| **User context transparent pass-through (Chat→Agent→Tool→MCP→Skill)** | [#6525](https://github.com/agentscope-ai/QwenPaw/pull/6525) | ★★★★☆ — Open since 07-28, architectural |
| **AI review bot enhancements (per-file change map, fewer false alarms)** | [#6550](https://github.com/agentscope-ai/QwenPaw/pull/6550) | ★★★☆☆ — CI quality-of-life |
| **Creator rejection feedback loop & structured logging** | [#6641](https://github.com/agentscope-ai/QwenPaw/pull/6641) | ★★★★☆ — Opened today, runtime hardening |

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Network fragility** | "Console views fail to load on slow networks — MB-level responses vs 30s timeout" ([#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635), [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633)) | 😡 High frustration — blocks daily use |
| **Upgrade breakage** | "v2.0.1 + agentscope 2.0.4.post1 breaks proactive subsystem" ([#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612)) | 😡 Blocker for latest deps |
| **Hidden multi-agent mechanics** | "50+ sessions before discovering Default Agent won't auto-delegate without PROFILE.md edit" ([#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621)) | 😕 Silent failure, wasted time |
| **File handling UX** | "Drag-and-drop copies to media/ — why not read in-place like other tools?" ([#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642)) | 😕 Friction, disk clutter |
| **Shell command reliability** | "Newlines→spaces breaks multi-line; PIPE hangs background processes" ([#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565)) | 😡 Daily driver impact |
| **Positive** | Rapid fix turnaround: UI freeze (#6589→#6637 same day), Monaco CSS (#6639), skill tags (#6537) | 👍 Trust in maintainer responsiveness |

---

## 8. Backlog Watch — Stale / Needs Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) *Unify provider discovery, model metadata, routing* | 13 days open | **Architectural backbone** for model management (#6167). Large scope, blocks provider ecosystem work. |
| [#6525](https://github.com/agentscope-ai/QwenPaw/pull/6525) *User context transparent pass-through* | 6 days open | **Cross-cutting feature** — enables multi-tenant, audit, personalization. Touches Chat API → Agent → Tool → MCP → Skill CLI. |
| [#6565](https://github.com/agentscope-ai/QwenPaw/issues

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-03

---

## 1. Today's Overview

ZeroClaw remains in **high-velocity development** with a maintenance release (v0.8.4) shipped and **65 total items** (15 issues + 50 PRs) updated in the last 24 hours. The project is heavily focused on **security hardening**, **provider/channel reliability**, and **multi-user architecture** — evidenced by multiple high-risk RFCs in progress (pluggable auth, security decision pipeline, chat completions profile) and a critical S0 bug in webhook authentication. Contributor breadth is strong (49 contributors on v0.8.4 alone), but several RFCs and security-critical PRs are awaiting maintainer review, creating a decision bottleneck.

---

## 2. Releases

### v0.8.4 — Maintenance & Hardening Release
- **Scope**: 262 commits, 49 contributors
- **Highlights**:
  - Expanded memory and SOP control planes
  - Improved provider and channel reliability
  - Strengthened sandbox and credential boundaries
  - Desktop and release pipeline improvements
- **Breaking Changes**: None noted in summary; verify changelog for config migrations
- **Migration Notes**: Standard upgrade path; check `zeroclaw doctor` for config warnings
- **Link**: [Release v0.8.4](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.4)

---

## 3. Project Progress (Merged/Closed Today)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#9037](https://github.com/zeroclaw-labs/zeroclaw/pull/9037) | Bug fix | Strip trailing provider terminal markers (`<eom>`) from streamed assistant text | UX: prevents leaked tokens in UI/history |
| [#8838](https://github.com/zeroclaw-labs/zeroclaw/pull/8838) | Bug fix | Harden SSE completion and idle timeouts for OpenAI/Anthropic/compatible providers | Reliability: prevents hung streams |
| [#9519](https://github.com/zeroclaw-labs/zeroclaw/pull/9519) | Bug fix | Serialize gateway config writes to prevent concurrent flush erasure | Data integrity: fixes lost config updates |
| [#9478](https://github.com/zeroclaw-labs/zeroclaw/pull/9478) | Bug fix | Notify sender when reply-intent precheck declines (fixes #9465) | UX: eliminates silent failures on channels |
| [#8997](https://github.com/zeroclaw-labs/zeroclaw/pull/8997) | Enhancement | Warn when `peer_groups.*.channel` references non-existent alias | DX: catches config typos early |

**Net**: 5 PRs closed/merged addressing **provider streaming artifacts, gateway config races, channel UX gaps, and config validation** — all medium-to-high priority.

---

## 4. Community Hot Topics

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC | 15 | **OpenAI Chat Completions compatibility** — enable ZeroClaw agents to work with Open WebUI, LobeChat, Continue.dev, Aider, LangChain, OpenAI SDK |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | RFC | 9 | **Pluggable inbound auth & canonical principals** — OIDC, multi-provider auth, principal identity foundation for multi-user |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker | 8 | **Maintainer decision queue** — bottleneck for RFC acceptance/rejection; 13 items awaiting review |
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) | RFC | 6 | **Runtime-owned security decision pipeline** — restrictive overlays, v0.9.0 security architecture |
| [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | Bug (S0) | 3 | **Webhook handlers not failing closed** — WhatsApp Cloud, Linq, WATI accept unauthenticated attacker-controlled messages |

**Analysis**: The top discussion is **protocol interoperability** (#8603) — users want ZeroClaw to speak the de facto standard API. Simultaneously, **identity/security foundations** (#7141, #7142) are blocked on maintainer bandwidth (#8692). The S0 bug (#9565) underscures urgency for auth hardening.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|----------|-------|--------|--------|---------|
| **S0** (Data loss / Security) | [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | Open, in-progress | — | Gateway webhook handlers for WhatsApp Cloud, Linq, WATI dispatch unauthenticated messages |
| **S2** (Degraded) | [#9624](https://github.com/zeroclaw-labs/zeroclaw/issues/9624) | Open, accepted | — | Plugin registry WIT pin diverges from master; breaks published components |
| **Medium** | [#9465](https://github.com/zeroclaw-labs/zeroclaw/issues/9465) | Closed | [#9478](https://github.com/zeroclaw-labs/zeroclaw/pull/9478) | Precheck decline → only reaction, no text reply (Telegram shows emoji only) |
| **High** | [#9382](https://github.com/zeroclaw-labs/zeroclaw/issues/9382) | Open, blocked | [#9382](https://github.com/zeroclaw-labs/zeroclaw/pull/9382) | WhatsApp Web chat policies not enforced in both modes |
| **High** | [#9419](https://github.com/zeroclaw-labs/zeroclaw/issues/9419) | Open | [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) | Provider credential rotation after rate limits not working |

**Critical**: #9565 is an **active security exposure** on three channels. #9624 blocks plugin ecosystem. Both need immediate maintainer action.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood (v0.9.x) | Rationale |
|---------|--------|---------------------|-----------|
| **OpenAI Chat Completions API** | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) (RFC, 15 comments) | **High** | Broad ecosystem demand; unblocks Open WebUI, LobeChat, Continue, Aider, LangChain |
| **Pluggable OIDC/Auth Providers** | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) (RFC, Rev 6) | **High** | Prerequisite for multi-user milestone; tracked in [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) |
| **Security Decision Pipeline + Overlays** | [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) (RFC, Rev 5) | **High** | Targeted at v0.9.0 security architecture; enables restrictive defaults |
| **Local Model Advisor (Community-Powered)** | [#9549](https://github.com/zeroclaw-labs/zeroclaw/issues/9549) (RFC) | **Medium** | UX gap for Ollama/llama.cpp users; low implementation cost |
| **Operator UX: Onboarding/Pairing/Self-Service** | [#9009](https://github.com/zeroclaw-labs/zeroclaw/issues/9009) (Tracker) | **Medium** | Epic tracked; UI work in progress (zerocode SOP pane) |
| **Retire Lucid Memory Connector** | [#9644](https://github.com/zeroclaw-labs/zeroclaw/issues/9644) (RFC) | **High** | Upstream dormant; planned for v0.9.0 removal |

**Prediction**: v0.9.0 will center on **Identity & Access** (auth, principals, isolation) + **Chat Completions compatibility** + **Security pipeline**. Lucid removal and model advisor are likely follow-ons.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **No OpenAI-compatible API** | #8603: "Clients that speak OpenAI Chat Completions — Open WebUI, LobeChat, Continue.dev, Aider, LangChain, OpenAI SDK — cannot use ZeroClaw" | Developers integrating with existing LLM tooling |
| **Silent failures on channels** | #9465: "Sender sees a single emoji and nothing else… agent looks broken" | Telegram/WhatsApp end-users |
| **Config typos silently disable channels** | #8997: "One-character typo becomes silently unauthorized channel" | Operators managing multi-channel deployments |
| **Provider tokens leak into UI/history** | #9006/#9037: `<eom>` markers visible in ZeroCode Code tab | Desktop/UI users |
| **Webhook auth bypass** | #9565: "Attacker-controllable messages dispatched without authenticating caller" | All webhook-receiving deployments (WhatsApp, Linq, WATI) |
| **Plugin WIT divergence breaks components** | #9624: "Registry pin diverged from master… cannot resolve on its own" | Plugin authors & users |

**Satisfaction Signal**: Users are **actively blocked** on interoperability and **security basics**; RFC engagement (15 comments on #8603) shows strong demand. The v0.8.4 hardening release addresses several reliability issues but not the architectural gaps.

---

## 8. Backlog Watch — Stalled High-Value Items

| Item | Type | Days Stale | Risk | Why It Matters |
|------|------|------------|------|----------------|
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | RFC (Rev 6) | 61 | **High** | Auth foundation for multi-user; 9 comments, needs maintainer decision |
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) | RFC (Rev 5) | 61 | **High** | v0.9.0 security architecture; blocked on #7141 |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC | 32 | **High** | Chat Completions profile; 15 comments, broad ecosystem impact |
| [#8290](https://github.com/zeroclaw-labs/zeroclaw/issues/8290) | Tracker | 40 | **High** | Multi-user milestone coordination (isolation + per-sender authz) |
| [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) | Tracker | 40 | **High** | OIDC milestone implementation tracker |
| [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | Bug (S0) | 4 | **Critical** | Active webhook auth bypass; in-progress but no PR linked |
| [#9624](https://github.com/zeroclaw-labs/zeroclaw/issues/9624) | Bug (S2) | 2 | **High** | Plugin ecosystem broken; accepted but no fix PR |
| [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) | PR (XL) | 8 | **High** | Credential rotation after rate limits; needs author action |
| [#9352](https://github.com/zeroclaw-labs/zeroclaw/pull/9352) | PR (XL) | 9 | **Medium** | Cross-turn OTel correlation; needs author action |
| [#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313) | PR (XL) | 39 | **Medium** | Skill injection default change; distinguished contributor, long review |

**Maintainer Action Needed**: The **RFC decision queue (#8692)** has 13 items awaiting review. Unblocking #7141, #7142, and #8603 would unlock the next architectural phase. The S0 bug (#9565) should be prioritized for immediate patch.

---

*Digest generated from GitHub data as of 2026-08-03. All links point to zeroclaw-labs/zeroclaw repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*