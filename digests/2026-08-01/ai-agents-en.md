# OpenClaw Ecosystem Digest 2026-08-01

> Issues: 227 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-01 03:36 UTC

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

# OpenClaw Project Digest — 2026-08-01

## 1. Today's Overview

OpenClaw shows **very high velocity** with 727 total items (227 issues + 500 PRs) updated in the last 24 hours. The project is in active maintenance mode with a concerning signal: **215 issues remain open/active** while only 12 closed, and 382 PRs are open versus 118 merged/closed. No new releases have been cut. The issue backlog is dominated by **P0/P1 stability bugs** — memory leaks, session state corruption, message loss, and security credential exposure — suggesting the project is prioritizing reliability hardening over new features. The "clawsweeper" automation labels indicate systematic triage, but many critical issues carry `clawsweeper:no-new-fix-pr` and `clawsweeper-recovery-stuck`, signaling stalled remediation.

## 2. Releases

**No new releases today.** The latest version in discussion appears to be `2026.7.1-2` (referenced in issues #114137, #115700, #115361, #116315). Several issues mention beta blockers and regressions in this version line.

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary | Status |
|----|------|---------|--------|
| [#117182](https://github.com/openclaw/openclaw/pull/117182) | i18n/scripts | Remove unused 11k-line Apple translation contradiction report from localization refreshes | **Closed** |
| [#117167](https://github.com/openclaw/openclaw/pull/117167) | agents/google | Stop scraping Gemini CLI OAuth credentials (fixes #54289) | **Closed** |
| [#117118](https://github.com/openclaw/openclaw/pull/117118) | gateway/perf | Count large histories before Gateway prewarm; completes recovery from #117108 | **Closed** |
| [#115107](https://github.com/openclaw/openclaw/pull/115107) | channel:signal | Preserve original filenames in outbound Signal attachments | **Closed** |

**Key trend**: Merged PRs focus on **cleanup, security hardening, and performance recovery** — not new features. The Gateway prewarm fix (#117118) addresses a startup timeout blocking health checks.

## 4. Community Hot Topics (Most Active Issues)

| Issue | Comments | 👍 | Core Problem | Underlying Need |
|-------|----------|-----|--------------|-----------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 116 | 80 | Missing desktop apps for Linux/Windows (macOS, iOS, Android exist) | **Platform parity** — users want native desktop experience |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway Memory Leak (P0) | 23 | 1 | RSS grows 350MB → 15.5GB over 2-3 days, OOM kills, launchd restart loops | **Production stability** — gateway unusable for long-running deployments |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source | 23 | 0 | No trust-level tagging on memory entries; enables memory poisoning attacks | **Security hardening** — prevent prompt injection via untrusted sources |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) Realtime voice unbounded state retention (P1) | 20 | 0 | Voice sessions retain superseded provider frames, pre-ready audio without hard bounds | **Resource control** — prevent memory bloat in long voice sessions |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked Secrets — Prevent Agent from Seeing Raw API Keys | 14 | 4 | Secrets in `.env` fully accessible to agents; leak risk via prompt injection | **Credential isolation** — agents should *use* keys without *seeing* them |

**Analysis**: Top issues cluster around **platform gaps (Linux/Windows)**, **gateway reliability (memory leak)**, and **security architecture (memory trust, secret masking)**. The community is pushing for production-grade hardening.

## 5. Bugs & Stability — Ranked by Severity

### 🔴 P0 / Critical
| Issue | Title | Severity Indicators | Fix PR? |
|-------|-------|---------------------|---------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway Memory Leak — RSS 350MB→15.5GB, OOM crashes | `P0`, `impact:crash-loop`, `clawsweeper-recovery-stuck`, `clawsweeper:needs-live-repro` | ❌ No fix PR linked |
| [#114893](https://github.com/openclaw/openclaw/issues/114893) | Cron webhook bearer token attached to any job-supplied host | `P0`, `impact:security`, `clawsweeper:bulk-filed` | ❌ No fix PR linked |

### 🟠 P1 / High
| Issue | Title | Severity Indicators | Fix PR? |
|-------|-------|---------------------|---------|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime voice unbounded provider/consult state retention | `P1`, `impact:session-state`, `clawsweeper:needs-info` | ❌ |
| [#114137](https://github.com/openclaw/openclaw/issues/114137) | Visible channel turns dispatch with no reply payload — text persisted, never delivered | `P1`, `impact:message-loss`, `maturity:stable` | ❌ |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | Session transcript projection livelock under sustained writes, stalls main thread | `P1`, `impact:crash-loop`, `clawsweeper:needs-live-repro` | ❌ |
| [#70024](https://github.com/openclaw/openclaw/issues/70024) | Channel stop timeout leaves channel permanently dead (`running: true` with stale store) | `P1`, `impact:message-loss`, `clawsweeper:linked-pr-open` | ⚠️ Linked PR open |
| [#114211](https://github.com/openclaw/openclaw/issues/114211) | Matrix agents loop on no-reply output, restart recovery, stale session replay | `P1`, `impact:message-loss` | ❌ |
| [#48810](https://github.com/openclaw/openclaw/issues/48810) | Compaction retry creates orphan fork in parentId chain (breaks reconstruction) | `P1`, `impact:data-loss`, `regression` | ❌ |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Unreaped hook/tool child processes → zombie accumulation | `P1`, `impact:crash-loop`, `regression`, `clawsweeper-recovery-stuck` | ❌ |
| [#95553](https://github.com/openclaw/openclaw/issues/95553) | Preflight compaction hard-capped at ~60s, ignores `compaction.timeoutSeconds` | `P1`, `impact:crash-loop`, `clawsweeper-recovery-stuck` | ❌ |
| [#64267](https://github.com/openclaw/openclaw/issues/64267) | Agent internal thinking (English) exposed to user | `P1`, `impact:security` | ❌ |
| [#96692](https://github.com/openclaw/openclaw/issues/96692) | Slack thread replies generated but not delivered after origin tuple lost | `P1`, `impact:message-loss` | ❌ |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | `chat.send` rejected "thread switched branches" — stale `expectedLeafEntryId` | `P1`, `impact:ux-friction`, `maturity:stable`, `clawsweeper:linked-pr-open` | ⚠️ Linked PR open |
| [#116242](https://github.com/openclaw/openclaw/issues/116242) | Codex supervision redaction covers only 4 token prefixes; Google/AWS/JWT/GitHub leak | `P1`, `impact:security`, `clawsweeper:needs-security-review` | ❌ |
| [#114653](https://github.com/openclaw/openclaw/issues/114653) | `sessions_send/history`: transient failure indistinguishable from policy denial (bare catch) | `P1`, `impact:security` | ❌ |
| [#114654](https://github.com/openclaw/openclaw/issues/114654) | `agents.defaults.compaction.*` reload classified as no-op but captured per-process — edits never apply | `P1` | ❌ |
| [#115361](https://github.com/openclaw/openclaw/issues/115361) | Multi-account Telegram: channel-level groups silently ignored when account defines none (regression) | `P1`, `regression`, `clawsweeper:linked-pr-open` | ⚠️ Linked PR open |
| [#115437](https://github.com/openclaw/openclaw/issues/115437) | Support fast mode on claude-cli runtime (like Codex has) | `P1` | ❌ |
| [#107839](https://github.com/openclaw/openclaw/issues/107839) | Successful OpenAI responses don't clear `auth_profile_state` cooldown after `subscription_limit` | `P1`, `impact:auth-provider` | ❌ |
| [#116315](https://github.com/openclaw/openclaw/issues/116315) | `server_is_overloaded` on ChatGPT OAuth: fallback fails when fallback model missing from catalog | `P1`, `impact:auth-provider` | ❌ |
| [#116418](https://github.com/openclaw/openclaw/issues/116418) | Ollama provider never selected as primary in 2026.7.1 — always falls back | `P1`, `impact:auth-provider` | ❌ (Closed, but no fix PR shown) |

### 🟡 P2 / Medium
| Issue | Title | Notes |
|-------|-------|-------|
| [#77625](https://github.com/openclaw/openclaw/issues/77625) | `reasoningDefault=stream` causes infinite reasoning recursion | `P2`, `impact:crash-loop`, `clawsweeper-recovery-stuck` |
| [#90916](https://github.com/openclaw/openclaw/issues/90916) | Topic-session families for one assistant across multiple context lanes | `P2`, `stale`, feature request |
| [#45608](https://github.com/openclaw/openclaw/issues/45608) | Pre-reset agentic memory flush — `/new` and daily reset should flush like compaction | `P2` |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) | Trigger model fallback on context length exceeded (not just API errors) | `P2`, `clawsweeper-recovery-stuck` |
| [#9912](https://github.com/openclaw/openclaw/issues/9912) | Add `maxTurns`/`maxToolCalls` config to limit agent iterations | `P2`, `clawsweeper-recovery-stuck` |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked Secrets — prevent agent from accessing raw API keys | `P1` but enhancement-labeled, 14 comments, 4 👍 |
| [#72611](https://github.com/openclaw/openclaw/issues/72611) | Dreaming needs configurable session/cron exclusions; isolated cron transcripts enter corpus | `P2` |
| [#86012](https://github.com/openclaw/openclaw/issues/86012) | LINE channel: messages silently lost due to reply token expiry + missing push fallback | `P1` but `stale`, `impact:message-loss` |
| [#116943](https://github.com/openclaw/openclaw/issues/116943) | Outbound: fenced system-reminder/prompt-data examples deleted from replies on every channel | `P2`, `clawsweeper:bulk-filed` |
| [#116942](https://github.com/openclaw/openclaw/issues/116942) | iMessage sanitizer deletes bare YAML keys inside fenced code blocks | `P2`, `clawsweeper:bulk-filed` |
| [#116893](https://github.com/openclaw/openclaw/issues/116893) | Browser click-created tabs not tracked/cleaned up | `P2` |
| [#116921](https://github.com/openclaw/openclaw/issues/116921) | Control UI session companion rail re-opens after hide — auto-expand overwrites persisted 'off' | `P2`, `impact:ux-friction` |

**Stability assessment**: **Critical**. 20+ P0/P1 issues open with memory leaks, message loss, credential exposure, and session corruption. Many carry `clawsweeper-recovery-stuck` and `clawsweeper:no-new-fix-pr`, indicating remediation is stalled. Only a handful have linked fix PRs.

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Signals / Priority Indicators |
|-------|---------|-------------------------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | **Linux/Windows Clawdbot Apps** (116 comments, 80 👍) | Highest community demand; platform parity gap |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | **Masked Secrets** — agents use keys without seeing them | 14 comments, 4 👍; `P1`, `impact:security`, `clawsweeper-recovery-stuck` |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | **Memory Trust Tagging by Source** (23 comments) | `P2`, `impact:security`, `clawsweeper-recovery-stuck` — security architecture |
| [#45608](https://github.com/openclaw/openclaw/issues/45608) | **Pre-reset agentic memory flush** for `/new`, `/reset`, daily reset | 11 comments, 4 👍; `P2`, `impact:session-state` |
| [#90916](https://github.com/openclaw/openclaw/issues/90916) | **Topic-session families** — multiple named context lanes per assistant | 9 comments, 2 👍; `P2`, `stale` — advanced session model |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) | **Fallback on context length exceeded** (not just API errors) | 6 comments; `P2`, `clawsweeper-recovery-stuck` |
| [#9912](https://github.com/openclaw/openclaw/issues/9912) | **`maxTurns`/`maxToolCalls` config** to limit agent iterations | 5 comments, 1 👍; `P2`, `clawsweeper-recovery-stuck` |
| [#10142](https://github.com/openclaw/openclaw/issues/10142) | **`session:end` internal hook event** for workflow orchestration (Temporal) | 5 comments; `P2`, `clawswe

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-08-01)

## 1. Ecosystem Overview
The personal AI agent ecosystem shows **bimodal maturity**: a cluster of high-velocity projects (OpenClaw, Hermes, IronClaw, ZeroClaw, CoPaw) executing large-scale architectural refactors or stability hardening, and a long tail of maintenance-mode or early-stage projects (NullClaw, PicoClaw, ZeptoClaw, NanoClaw). **No project cut a release today**, indicating a synchronized "accumulate-fixes-before-tag" pattern. The dominant theme across active projects is **production hardening** — memory leaks, session corruption, credential exposure, and platform gaps — over new features. Security architecture (secret masking, memory trust tagging, supply-chain hardening) and multi-platform parity (Linux/Windows desktop, Termux, WebUI) are cross-cutting investment areas.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Merged/Closed PRs | Open PRs | Release Today | Health Score* |
|---------|----------------|-------------|-------------------|----------|---------------|---------------|
| **OpenClaw** | 227 | 500 | 118 | 382 | ❌ | 🟡 **Fragile** |
| **Hermes Agent** | 8 | 50 | 10 | ~40 | ❌ | 🟡 **Active but fragile** |
| **IronClaw** | ~10 | 50 | 29 | ~21 | ❌ | 🟢 **High velocity, architectural** |
| **ZeroClaw** | 8 | 50 | 7 | 43 | ❌ | 🟡 **Review bottleneck** |
| **CoPaw** | 16 | 34 | 10 | ~24 | ❌ | 🟡 **Stabilizing v2.0.1** |
| **LobsterAI** | 4 (stale closed) | 11 | 11 | 1 | ❌ | 🟢 **Healthy refinement** |
| **NanoBot** | 4 | 17 | 6 | 11 | ❌ | 🟢 **High merge rate** |
| **Moltis** | 2 | 7 | 2 | 5 | ❌ | 🟢 **Security-responsive** |
| **PicoClaw** | 2 | 3 | 0 | 3 | ❌ | 🟡 **Stalled PRs** |
| **NullClaw** | 0 | 1 | 0 | 1 | ❌ | ⚪ **Maintenance** |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | ❌ | ⚪ **Dormant** |
| **NanoClaw** | — | — | — | — | — | ⚪ **No data** |

*Health Score: 🟢 Healthy velocity/merge rate; 🟡 Active but concerning signals (backlog, bottlenecks, no releases); ⚪ Low/no activity.

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale & Breadth**: Largest activity volume (727 items/24h) and widest protocol coverage (Signal, Matrix, Slack, Telegram, Discord, IRC, Email, SMS)
- **Reference Implementation**: Serves as upstream for downstream forks (LobsterAI, PicoClaw, NanoBot consume OpenClaw core)
- **Systematic Triage**: "Clawsweeper" automation labels indicate mature issue management despite backlog

**Technical Approach Differences:**
- **Gateway-Centric Architecture**: Centralized `gateway` process handles multi-channel routing, session state, and provider abstraction — unlike NanoBot's embedded CLI model or Hermes' desktop-first design
- **Memory/Compaction as First-Class**: Deep investment in session transcript projection, compaction pipelines, and memory trust tagging (#7707, #48810)
- **Security by Isolation**: Pursuing "Masked Secrets" (#10659) and memory source trust tagging — architectural security vs. point fixes

**Community Size Comparison:**
- **Highest engagement**: #75 (Linux/Windows apps) has 116 comments, 80 👍 — dwarfing peer discussions
- **Contributor breadth**: 500 PRs/24h suggests large contributor pool, though many carry `clawsweeper:no-new-fix-pr` (stalled remediation)
- **Downstream dependency**: LobsterAI, PicoClaw, NanoBot all track OpenClaw core — ecosystem gravitational center

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Credential Isolation / Secret Masking** | OpenClaw (#10659), Hermes (auxiliary client hardcoded fallback), Moltis (#1180 path traversal), ZeroClaw (#8918 token redaction) | Agents must *use* keys without *seeing* them; prevent leakage via prompt injection, zip extraction, or config writes |
| **Memory/Session Integrity** | OpenClaw (#91588, #115908, #48810), Hermes (#75805, #75807), CoPaw (#6555, #6592), ZeroClaw (#9449), NanoBot (#5173 SQLite) | Bounded retention, corruption-free compaction, trust-tagged entries, transactional storage |
| **Multi-Platform Desktop Parity** | OpenClaw (#75), NanoBot (#5187 Termux), CoPaw (#6520 Windows config), PicoClaw (#3292 WebUI CPU), Hermes (#74914 Windows pin/unpin, #75810 macOS updater) | Native Linux/Windows apps; Termux/Android support; WebUI cross-browser/OS stability |
| **Provider Abstraction & Fallback Chains** | OpenClaw (#116315, #116418), NanoBot (#5197 DeepSeek Responses, #3732 local priority), PicoClaw (#3200), ZeroClaw (#7100 per-model caps), LobsterAI (#2413/2415 DeepSeek cache) | Configurable fallback order, context-window-aware compaction, byte-stable prompt prefixes for cache hits |
| **Observability & Instrumentation** | Moltis (#1174 Langfuse/OTLP), Hermes (billing integrity #75805), ZeroClaw (quickstart validation #9605), IronClaw (pi-harness cache breakpoints) | Streaming/non-streaming parity, failover attribution, cache-aware token accounting, user feedback loops |
| **Security Hardening (Supply Chain/Runtime)** | Moltis (#1180, #1179), ZeroClaw (#9607 sandbox routing, #9606 proxy), Hermes (#75808 RFC 8252), IronClaw (#6981 sealed evidence) | Path traversal prevention, node pairing verification, CLI tool sandboxing, native auth flows |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes | IronClaw | ZeroClaw | CoPaw | LobsterAI | Moltis | PicoClaw |
|-----------|----------|---------|--------|----------|----------|-------|-----------|--------|----------|
| **Primary Target** | Multi-channel gateway / infra | Terminal-first personal agent | Desktop GUI + billing-aware | Multi-tenant platform / extensions | Security-governed agent platform | Desktop productivity (Windows-first) | Enterprise team collaboration (UI-rich) | Nostr/Buzz-native, privacy-first | Lightweight embedded / protocol bridge |
| **Architecture** | Gateway + agents + channels | Embedded CLI + WebUI + channels | Desktop (Tauri) + gateway + plugins | Crate-based contracts (WS1.x), runner/extension separation | JSONL + SQLite, RFC-driven design | Electron/TA + AgentScope runtime | React + Redux + OpenClaw core | Rust + Nostr + WebUI | Rust, single-binary, channel-focused |
| **Key Differentiator** | Protocol breadth, memory/compaction depth | SQLite session storage, Quick/Temporary Chat | Per-session billing, plugin hooks, native auth | Contract-separated dependency graph, hosted MCP | Per-execution shell policy, Hindsight memory | AgentScope integration, collapsible traces | Antigravity OAuth, skeleton UI, DeepSeek cache fix | NIP-29 group chat, Markdown export, zvec memory | IRCv3/SimpleX/DeltaChat, minimal deps |
| **User Base Signal** | Platform parity demand (Linux/Win) | Termux/WebUI power users | Silent-failure pain (billing, pin/unpin) | IronHub CTA/auth broken, workspace isolation | RFC engagement (10 comments), decision queue | Config corruption, UI freezes, AgentScope compat | UX polish (sidebar, shortcuts, skeletons) | Pre-adoption security audit, model compat | Protocol correctness, low engagement |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Architectural Iteration** | IronClaw, ZeroClaw, OpenClaw | 50+ PRs/day; large refactors (contract extraction, RFC stacks, clawsweeper); no releases; high open/closed ratios |
| **Stabilization / Patch Accumulation** | Hermes, CoPaw, LobsterAI, NanoBot | 10-50 PRs/day; focused bug fixes, security hardening, UX polish; same-day fix cycles; preparing patch releases |
| **Feature Expansion with Security Focus** | Moltis | 7 PRs/day; Nostr protocol, instrumentation, supply-chain security; external contributor-driven |
| **Maintenance / Low Velocity** | PicoClaw, NullClaw | <5 items/day; stalled PRs, minimal engagement; incremental provider/protocol adds |
| **Dormant / No Data** | ZeptoClaw, NanoClaw | Zero activity or missing data |

**Key Insight**: The ecosystem is **not releasing** — all active projects are in "accumulate on main" mode. This suggests either coordinated release trains or widespread release-process friction.

---

## 7. Trend Signals for AI Agent Developers

1. **Session State is the New Battleground**  
   Memory leaks (OpenClaw #91588), compaction corruption (OpenClaw #48810), transcript livelock (OpenClaw #115908), and cross-user leakage (IronClaw #6900) show that **long-running session integrity** is the primary reliability blocker. Invest in bounded retention, transactional storage (NanoBot SQLite), and trust-tagged memory.

2. **Credential Architecture Must Shift from "Access" to "Use-Without-See"**  
   OpenClaw #10659, Moltis #1180, ZeroClaw #8918, Hermes auxiliary client — all signal that **raw key exposure to agent context is a critical vulnerability**. Design provider abstractions where the gateway holds secrets and injects signed/short-lived tokens.

3. **Platform Parity Drives Adoption More Than Features**  
   OpenClaw #75 (116 comments), NanoBot Termux blocker, CoPaw Windows config corruption, Hermes Windows/macOS desktop bugs — **missing Linux/Windows native apps or broken WebUI on Windows** are top user pain points. Electron/Tauri desktop + Termux support is table stakes.

4. **Provider Fallback & Cache Stability Determine Cost/Latency**  
   LobsterAI restored DeepSeek cache hit rate from 57%→100% via byte-stable prompts (#2413/2415); OpenClaw, PicoClaw, ZeroClaw all building configurable fallback chains. **Prompt prefix stability + context-window-aware compaction** directly impact production economics.

5. **Security Hardening is Moving Upstack**  
   From point fixes (token redaction) to architectural: Moltis zip/HF path traversal, ZeroClaw sandbox routing for CLI tools, Hermes RFC 8252 native auth, IronClaw sealed evidence minting. **Supply-chain and runtime isolation** are becoming core platform features.

6. **Observability Infrastructure is Commoditizing**  
   Moltis Langfuse/OTLP/reaction feedback (#1174), Hermes billing integrity, ZeroClaw quickstart validation — **production debugging requires streaming/non-streaming parity, failover attribution, cache-aware tokens**. Build this early.

7. **RFC/Design-Driven Development Scales Better Than Ad-Hoc PRs**  
   ZeroClaw (7 RFCs), IronClaw (WS1.x contract extraction), OpenClaw (clawsweeper labels) show that **explicit design review processes** correlate with architectural coherence. Projects without them (PicoClaw, NullClaw) accumulate stalled PRs.

---

**Bottom Line for Decision-Makers**: The ecosystem is consolidating around **gateway-centric, multi-channel, security-hardened architectures** with **session integrity** and **credential isolation** as non-negotiable requirements. Projects investing in **contract-separated dependency graphs** (IronClaw), **RFC-driven security** (ZeroClaw, Moltis), and **transactional memory** (NanoBot, OpenClaw) are best positioned for production adoption. The absence of releases across the board suggests a **release-process gap** — an opportunity for tooling or governance standardization.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-01

## 1. Today's Overview
NanoBot shows **high development velocity** with 17 PRs updated in the last 24 hours (11 open, 6 merged/closed) and 4 issues updated. The project is actively addressing both **core stability regressions** (timezone handling in Termux, session persistence, WebUI MIME types) and **feature expansion** (DeepSeek Responses API, Quick/Temporary Chat in WebUI). A significant architectural migration from JSONL to SQLite for session storage was merged today (#5173), indicating maturation of the storage layer. No new releases were published.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs (6)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5196](https://github.com/HKUDS/nanobot/pull/5196) | **Bug Fix (Weixin Channel)** | Recovers refreshed session state after `errcode -14` pause expiry; reloads `account.json` on wake. Fixes #5195. | **Critical** — resolves permanent silent deadloop in Weixin personal channel after token expiry. |
| [#4223](https://github.com/HKUDS/nanobot/pull/4223) | **Bug Fix (Weixin Channel)** | Reloads session state after 60-min pause expiry; prevents repeated `errcode -14` deadloop. (Chinese description) | **Critical** — same root cause as #5196; merged as alternative/earlier fix. |
| [#5192](https://github.com/HKUDS/nanobot/pull/5192) | **Bug Fix (Slack Channel)** | Scopes channel thread openers to their own session; prevents unrelated threads from sharing opening turns. | **High** — fixes session leakage across Slack threads. |
| [#5193](https://github.com/HKUDS/nanobot/pull/5193) | **Bug Fix (WebUI)** | Preserves user scroll ownership near message tail; improves auto-follow behavior on touch/upward scroll. | **Medium** — UX polish for chat history navigation. |
| [#5173](https://github.com/HKUDS/nanobot/pull/5173) | **Feature (Session Storage Migration)** | Migrates session storage from JSONL to SQLite (`sessions.db`); transactional import of legacy JSONL on first startup; retains JSONL as rollback backups. | **High** — major architectural change; improves concurrency, query performance, and durability. |
| [#5189](https://github.com/HKUDS/nanobot/pull/5189) | **Bug Fix (Config/Termux)** | Installs `tzdata` as `zoneinfo` fallback on all platforms; fixes Termux timezone validation error. Fixes #5187. | **High** — unblocks Termux/Android users; improves cross-platform robustness. |

## 4. Community Hot Topics
*No issues or PRs with significant comment volume or reactions (👍) in the last 24h.* All items have 0–2 comments and 0 reactions. The most discussed item is **#5195 (Weixin QR re-login bug)** with 2 comments, but it was quickly closed and fixed via #5196. The community appears focused on **silent, rapid iteration** rather than open debate.

## 5. Bugs & Stability — Ranked by Severity

| Rank | Issue | Severity | Fix PR | Status |
|------|-------|----------|--------|--------|
| 1 | **[#5195](https://github.com/HKUDS/nanobot/issues/5195)** Weixin QR re-login overwrites new token with old one → immediate `errcode -14` → 60-min pause deadloop | **Critical** (channel unusable until manual intervention) | [#5196](https://github.com/HKUDS/nanobot/pull/5196) (merged) | ✅ Fixed |
| 2 | **[#5187](https://github.com/HKUDS/nanobot/issues/5187)** `nanobot` fails in Termux: timezone validation error (`zoneinfo` missing `tzdata`) | **High** (blocks entire platform) | [#5189](https://github.com/HKUDS/nanobot/pull/5189) (merged) | ✅ Fixed |
| 3 | **[#5190](https://github.com/HKUDS/nanobot/issues/5190)** WebUI module scripts fail with MIME type `text/plain` on Windows | **High** (WebUI broken on Windows) | [#5191](https://github.com/HKUDS/nanobot/pull/5191) (open) | 🔧 In Progress |
| 4 | **[#5198](https://github.com/HKUDS/nanobot/issues/5198)** Cannot change model in specific session without full instance reconfig; `/model` command ineffective | **Medium** (workflow friction) | None yet | ❌ Open |
| 5 | Session summary corruption on startup (`AutoCompact.prepare_session`) | **Medium** (potential data loss/UX glitch) | [#5201](https://github.com/HKUDS/nanobot/pull/5201) (open) | 🔧 In Progress |
| 6 | `wait_for` targets lost during response truncation in exec sessions | **Medium** (automation reliability) | [#5200](https://github.com/HKUDS/nanobot/pull/5200) (open) | 🔧 In Progress |

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **DeepSeek Responses API support** (`deepseek-v4-flash` via native Responses API, preserving reasoning/function-tools) | [#5197](https://github.com/HKUDS/nanobot/pull/5197) (open, p1, tests included) | **High** — provider expansion, well-scoped, test-covered |
| **WebUI: Quick Chat (persistent) & Temporary Chat (in-memory, ephemeral)** | [#5184](https://github.com/HKUDS/nanobot/pull/5184) (open) | **High** — UX parity with SaaS AI UIs; shared sidebar, streaming reuse |
| **WebUI: Session list performance optimization** (JSONL → SQLite index reuse, workspace-scope caching) | [#5194](https://github.com/HKUDS/nanobot/pull/5194) (open, p2) | **High** — follows #5173 migration; direct perf win |
| **Skills.sh: Well-known DNS source allowlist** (preserve `uizze.com` skills, pass as HTTPS URLs) | [#5186](https://github.com/HKUDS/nanobot/pull/5186) (open, p2) | **Medium** — ecosystem integration, niche but structured |
| **Provider matching: Require `api_base` for local provider keyword match** (prevent cloud model hijacking) | [#3732](https://github.com/HKUDS/nanobot/pull/3732) (open since May, updated today) | **Low–Medium** — long-standing, security-adjacent; may need design review |

## 7. User Feedback Summary
- **Pain Points**: 
  - **Platform gaps**: Termux/Android users blocked by missing `tzdata` (#5187).
  - **Channel reliability**: Weixin personal channel enters unrecoverable pause after token expiry (#5195, #4223).
  - **WebUI breakage on Windows**: MIME type misconfiguration breaks module loading (#5190).
  - **Model switching UX**: Users expect per-session model selection like SaaS UIs; current `/model` command and UI blip are non-functional (#5198).
- **Use Cases**: 
  - Mobile/terminal usage (Termux).
  - Multi-channel deployments (Weixin, Slack) with session isolation needs.
  - WebUI as primary interface — scroll behavior, session list performance matter.
- **Satisfaction Signals**: Rapid fix turnaround (issues closed same-day with PRs) suggests responsive maintenance. No negative sentiment in comments.

## 8. Backlog Watch — Stale / Needing Attention

| Item | Age | Reason for Attention |
|------|-----|----------------------|
| **[#3732](https://github.com/HKUDS/nanobot/pull/3732)** `fix(providers): require api_base before local provider wins on keyword match` | ~3 months (created 2026-05-11) | Security-adjacent provider routing fix; updated today but no merge. Risk of cloud model hijacking by local providers. |
| **[#5198](https://github.com/HKUDS/nanobot/issues/5198)** Model switching per session | 1 day | High user visibility; no PR yet. Core UX gap vs. competitors. |
| **[#5191](https://github.com/HKUDS/nanobot/pull/5191)** Register correct MIME types for static assets on Windows | 1 day | Blocks WebUI on Windows; fix identified (registry override), PR open. |
| **[#5200](https://github.com/HKUDS/nanobot/pull/5200)** / **[#5201](https://github.com/HKUDS/nanobot/pull/5201)** Exec/session edge-case fixes | 1 day | Both p1, test-covered, open. Likely to merge soon but need review. |

---

**Project Health Indicators**  
✅ **High merge rate** (6/17 PRs merged in 24h)  
✅ **Same-day bug-to-fix cycle** for critical issues  
✅ **Architectural investment** (SQLite migration #5173)  
⚠️ **Windows WebUI broken** (#5190/5191) — platform gap  
⚠️ **Model switching UX gap** (#5198) — user-facing limitation  
⚠️ **Stale security-adjacent PR** (#3732) — needs triage  

*Data sourced from GitHub API; covers activity updated 2026-07-31 → 2026-08-01.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-01

## 1. Today's Overview
Hermes Agent shows **high development velocity** with 50 PRs and 8 issues updated in the last 24 hours. Ten PRs were merged/closed, indicating active integration of fixes and features. No new release was cut today. The issue tracker reveals a cluster of **critical bugs around session state integrity, billing accuracy, model validation, and platform-specific desktop failures** (Windows pin/unpin, macOS updater deadlock). Several P1–P2 bugs were closed today with fixes implemented on `main`, while others remain open awaiting decisions. The PR pipeline is dominated by targeted bug fixes, plugin/extension infrastructure, and security hardening.

## 2. Releases
**No new releases published today.** The project appears to be in a rapid-fix accumulation phase on `main` before the next version cut.

## 3. Project Progress — Merged/Closed PRs & Issues Today
| Item | Type | Summary | Link |
|------|------|---------|------|
| #75804 | Bug (P1, Closed) | Auxiliary client hardcoded fallback to paid OpenRouter model (`google/gemini-3.6-flash`) with no free marker or opt-out — **fixed on main** | [#75804](https://github.com/NousResearch/hermes-agent/issues/75804) |
| #75810 | Bug (P2, Closed) | Desktop GUI updater deadlock when launchd-managed gateway runs on macOS — **fixed on main** | [#75810](https://github.com/NousResearch/hermes-agent/issues/75810) |
| #75806 | Bug (P3, Closed) | Test/probe model IDs (e.g., `qwen/nonexistent-audit-test`) created real sessions & permanent usage rows despite 404s — **cannot reproduce, needs decision** | [#75806](https://github.com/NousResearch/hermes-agent/issues/75806) |
| *Multiple PRs* | Fixes merged | 10 PRs merged/closed today (exact PR numbers not listed in feed; inferred from closed issues and sweeper tags `sweeper:implemented-on-main`) | — |

**Key advances:** Critical billing/session integrity bugs (#75804, #75810) resolved; plugin hook infrastructure (#74645) and security fixes (#75800) progressing.

## 4. Community Hot Topics
Activity is **developer-driven** rather than community-discussion-heavy. Top items by comment count:

| Item | Comments | Reactions | Signal |
|------|----------|-----------|--------|
| [#75804](https://github.com/NousResearch/hermes-agent/issues/75804) | 2 | 0 | Hardcoded paid model fallback — **cost surprise risk**; fix merged |
| [#74914](https://github.com/NousResearch/hermes-agent/issues/74914) | 1 | 0 | Windows pin/unpin silently fails — **UX regression**, no DevTools error |
| [#75810](https://github.com/NousResearch/hermes-agent/issues/75810) | 1 | 0 | macOS updater deadlock with launchd — **install/update blocker**, fixed |
| [#75806](https://github.com/NousResearch/hermes-agent/issues/75806) | 1 | 0 | Probe model IDs polluting production usage records — **billing integrity** |

**Underlying needs:** Users (and internal auditors) are hitting **silent failures** — no errors, no logs, just wrong state (pinned sessions, billed models, deadlocked updaters). Observability and config-driven fallbacks are recurring themes.

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)

| Severity | Issue | Component | Status | Fix PR |
|----------|-------|-----------|--------|--------|
| **P1 (Critical)** | [#75804](https://github.com/NousResearch/hermes-agent/issues/75804): Hardcoded paid OpenRouter fallback in auxiliary client | `agent/auxiliary_client.py`, billing, config | **Closed** (fixed on main) | Implied by `sweeper:implemented-on-main` |
| **P2 (High)** | [#75807](https://github.com/NousResearch/hermes-agent/issues/75807): `api_server` accepts arbitrary unknown model IDs — session + registry rows created before validation | `gateway/api_server.py`, sessions, billing | **Open** (`needs-decision`) | — |
| **P2** | [#75805](https://github.com/NousResearch/hermes-agent/issues/75805): `session_model_usage` records fabricated model/provider pairings via COALESCE from last-write-wins session row | `hermes_state.py`, billing, sessions | **Open** | — |
| **P2** | [#75801](https://github.com/NousResearch/hermes-agent/issues/75801): OpenCode Go `gpt-5.6-luna` omits `finish_reason` → 4 fake continuations; desktop strips streamed answer | `comp/tui`, streaming, desktop | **Open** | — |
| **P2** | [#75810](https://github.com/NousResearch/hermes-agent/issues/75810): Desktop GUI updater deadlock with launchd gateway (macOS) | `comp/cli`, `comp/gateway`, `comp/desktop`, install-update | **Closed** (fixed on main) | Implied by `sweeper:implemented-on-main` |
| **P3 (Medium)** | [#74914](https://github.com/NousResearch/hermes-agent/issues/74914): Pin/unpin sessions silently fails on Windows | `comp/desktop`, `platform/windows`, sessions | **Open** (`sweeper:risk-session-state`) | — |
| **P3** | [#75806](https://github.com/NousResearch/hermes-agent/issues/75806): Probe model IDs enter production usage records | `comp/agent`, `comp/gateway`, billing, sessions | **Closed** (`cannot-reproduce`, `needs-decision`) | — |

**Stability note:** Three P1–P2 bugs involve **session/billing state corruption** (#75804, #75807, #75805) — a systemic risk area. Two platform-specific desktop blockers (Windows, macOS) affect install/update and core UX.

## 6. Feature Requests & Roadmap Signals

| Request | Area | Likelihood for Next Version | Link |
|---------|------|----------------------------|------|
| **Per-session workflow stage visibility tracker** — users need to see scoping/planning/executing/finalizing stages | `comp/agent`, sessions, UX | Medium (new issue, no PR yet) | [#75815](https://github.com/NousResearch/hermes-agent/issues/75815) |
| **Four plugin extension hooks** for plugin-directed core behavior (override/veto without patching core) | `comp/plugins`, `tool/delegate`, security boundary | High (PR open, broad scope) | [#74645](https://github.com/NousResearch/hermes-agent/pull/74645) |
| **RFC 8252 native sign-in extended to password providers** — system browser autofill for desktop | `comp/gateway`, auth, dashboard | High (PR open, security-focused) | [#75808](https://github.com/NousResearch/hermes-agent/pull/75808) |
| **Reserved executor lane for interactive turns** — prevent batch webhook traffic from starving human interactions | `comp/gateway`, config, message delivery | Medium (PR open, needs config design) | [#75802](https://github.com/NousResearch/hermes-agent/pull/75802) |
| **Approval prompts show purpose, effect, risk** — richer context for dangerous commands | `comp/gateway`, `comp/tools`, approvals | Medium (PR open, rebuilds #22363) | [#75795](https://github.com/NousResearch/hermes-agent/pull/75795) |

**Prediction:** Plugin hooks (#74645), native auth extension (#75808), and approval UX (#75795) are furthest along with open PRs. Workflow visibility (#75815) is earliest stage.

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Silent failures with no errors** | Pin/unpin (#74914), model fallback (#75804), probe model pollution (#75806) | Users cannot trust UI state or billing |
| **Platform-specific desktop breakage** | Windows pin/unpin, macOS updater deadlock, Windows config path backslashes (#75813) | Blocks daily driver use on affected OS |
| **Billing/usage inaccuracy** | Fabricated model/provider pairings (#75805), probe models in production records (#75806) | Cost tracking unreliable; audit risk |
| **Streaming fragility with new models** | `gpt-5.6-luna` missing `finish_reason` → answer stripped (#75801) | Complete answers lost; regression risk per provider |
| **Config writes ignored for managed keys** | TUI/desktop gateway allowed writes CLI rejects (#75730) | Admin-locked settings bypassable in GUI |

**Satisfaction signals:** No positive feedback in today’s feed. Dissatisfaction is implicit in bug severity and “silent failure” pattern.

## 8. Backlog Watch — Stale Important Items Needing Maintainer Attention

| Item | Age | Type | Why It Matters | Link |
|------|-----|------|----------------|------|
| #58512 | 28 days | Bug (P3) | Compression rebinds stale context engine — data loss risk during compaction | [#58512](https://github.com/NousResearch/hermes-agent/pull/58512) |
| #61499 | 23 days | Bug (P2) | Nous delegation auth resolution broken for direct endpoints | [#61499](https://github.com/NousResearch/hermes-agent/pull/61499) |
| #62701 | 21 days | Bug (P3) | Fuzzy MCP tool name repair causes hallucinated tool calls | [#62701](https://github.com/NousResearch/hermes-agent/pull/62701) |
| #67872 | 12 days | Bug (P3) | `text/plain` fence labels leak into chat — transcript corruption | [#67872](https://github.com/NousResearch/hermes-agent/pull/67872) |
| #67822 | 12 days | Bug (P3) | Fenced file lists not rendered as code blocks — UX regression | [#67822](https://github.com/NousResearch/hermes-agent/pull/67822) |
| #72549 | 5 days | Bug (P2) | WAL checkpoint uses `TRUNCATE` at close/pre-VACUUM — concurrent writer corruption (field evidence) | [#72549](https://github.com/NousResearch/hermes-agent/pull/72549) |
| #72591 | 5 days | Bug (P2) | Empty `tool_calls: []`/`null` rejected by strict providers (DeepSeek, Qwen) — 400 errors | [#72591](https://github.com/NousResearch/hermes-agent/pull/72591) |

**Action needed:** #72549 (data corruption risk) and #72591 (provider compatibility) are P2 with field evidence. #58512, #61499, #62701 are older P2/P3 with regression tests — strong merge candidates.

---

**Overall Health:** 🟡 **Active but fragile** — high fix throughput, but recurring silent-failure patterns in session/billing state and platform-specific desktop bugs indicate architectural debt in observability and config-driven behavior. Plugin/extension work (#74645) and security hardening (#75800, #75808) are positive strategic investments.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-01

## 1. Today's Overview
PicoClaw shows steady maintenance activity with **5 items updated in the last 24 hours** (2 issues, 3 pull requests), all remaining open. No releases were published. The project is actively addressing protocol compliance (IRCv3 message handling), performance (CPU spike in web chat input), and architectural improvements (DeltaChat refactor, new SimpleX channel, model fallback chains). Community engagement appears low — zero reactions and minimal comment threads — suggesting a quiet but consistent development cadence.

## 2. Releases
**No new releases** in the last 24 hours. Current latest version remains unspecified in provided data.

## 3. Project Progress
**No PRs were merged or closed today.** All three active PRs are in review:
- **#3222** `refactor(deltachat)`: Major cleanup (-200 LOC), drops legacy auth, references official relay list, renames invite fields, adds full documentation. *High impact on maintainability.*
- **#3193** `feat: Added simplex channel type`: Introduces SimpleX as a new communication channel. *Expands protocol support.*
- **#3200** `feat(models): add configurable default fallback chain`: Adds UI + API for defining model fallback order in web interface. *Improves resilience for multi-model deployments.*

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#3287** | Feature Request | 2 comments, 0 👍 | [IRCv3 long message support](https://github.com/sipeed/picoclaw/issues/3287) |
| **#3292** | Bug (stale) | 1 comment, 0 👍 | [High CPU on chat input focus](https://github.com/sipeed/picoclaw/issues/3292) |

**Analysis**:  
- **#3287** reflects growing need for **protocol correctness** — IRCv3’s `message-tags` and `labeled-response` imply multi-part messages; PicoClaw currently treats splits as separate messages, breaking context.  
- **#3292** (marked `stale`) signals a **frontend performance regression** in the web chat — likely excessive re-renders or event listeners on input focus. Despite low engagement, it affects UX on Debian/Firefox.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | #3292: CPU spike on input focus (web chat) | Open, stale | ❌ No linked PR |
| **Medium** | #3287: IRC message fragmentation breaks continuity | Open | ❌ No linked PR |

**Note**: No crash reports or regressions from recent merges (no merges today). The DeltaChat refactor (#3222) *may* reduce surface area for bugs but is unmerged.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| IRCv3 long-message reassembly | #3287 (user-reported) | **High** — protocol compliance, low complexity |
| SimpleX channel support | #3193 (PR open 35 days) | **High** — PR exists, adds new protocol |
| Configurable model fallback chain | #3200 (PR open 31 days) | **High** — PR exists, enhances web UI resilience |
| DeltaChat modernization | #3222 (PR open 29 days) | **Medium** — large refactor, needs review bandwidth |

**Prediction**: SimpleX and model fallback chain are closest to merge (feature-complete PRs). IRC fix likely next sprint. DeltaChat refactor may wait for test coverage.

## 7. User Feedback Summary
- **Pain point**: Web chat becomes sluggish when typing (CPU spike) — impacts daily usability on Linux/Firefox.  
- **Use case**: Users rely on IRC bridging for long-form messages (logs, code, docs) — current splitting breaks AI context.  
- **Satisfaction**: No positive signals (0 👍, low comments). Suggests either small active user base or friction in reporting.  
- **Unmet need**: No feedback on DeltaChat/SimpleX — may indicate these are maintainer-driven, not user-requested.

## 8. Backlog Watch
| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| **#3193** SimpleX channel PR | 35 days | Stalled review — adds new protocol, needs security/testing audit | Assign reviewer, run integration tests |
| **#3200** Model fallback chain PR | 31 days | UI/API complete but unmerged — blocks multi-model resilience | Prioritize review; low risk, high value |
| **#3222** DeltaChat refactor PR | 29 days | Large (-200 LOC), touches auth & config — high regression risk if rushed | Require test plan + staging deploy before merge |
| **#3292** CPU bug (stale) | 8 days | UX-impacting, no fix in sight — may drive users away | Assign frontend dev; profile input component |

---

**Health Assessment**: 🟡 **Moderate**  
- ✅ Active development, protocol expansion, code quality focus  
- ⚠️ Stalled PRs, zero merged work this cycle, low community interaction  
- 🔴 Critical UX bug (#3292) untriaged for 8 days  

**Recommendation**: Merge #3200 and #3193 this week; triage #3292 immediately; schedule #3222 for next sprint with test mandate.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-01

## 


</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-01

---

## 1. Today's Overview
NullClaw shows **minimal activity** in the past 24 hours: zero issue updates, zero merged/closed PRs, and no new releases. The sole movement is a single open pull request (#981) adding a `grok-cli` provider for xAI’s Grok CLI. This pattern suggests the project is in a **maintenance/low-velocity phase** with no urgent bugs or community fires. The new provider work indicates ongoing, incremental expansion of supported LLM backends rather than core refactoring or major feature drives.

---

## 2. Releases
**No new releases** published today or in the recent window covered by the data.

---

## 3. Project Progress
**No PRs were merged or closed today.** The only active PR remains open:

| PR | Title | Status | Author | Created | Updated |
|----|-------|--------|--------|---------|---------|
| [#981](https://github.com/nullclaw/nullclaw/pull/981) | `feat(provider): add grok-cli provider for xAI Grok CLI` | **OPEN** | valonmulolli | 2026-07-29 | 2026-07-31 |

*Progress note:* The PR follows the existing “spawn-per-request” pattern used by `codex-cli`, `gemini-cli`, and `claude-cli` providers. It is marked **optional** (requires local `grok` CLI installation + authentication). No review activity (comments, approvals, or CI results) is visible in the snapshot.

---

## 4. Community Hot Topics
**Only one active item** in the last 24 h — PR #981.  
- **Comments:** 0  
- **Reactions (👍):** 0  
- **Engagement:** None yet; the PR has not attracted reviewer or community attention.

*Underlying need:* Extending provider coverage to xAI’s Grok CLI aligns with NullClaw’s strategy of supporting multiple local/CLI-based LLM interfaces. The lack of discussion suggests either low stakeholder urgency or that the change is seen as routine.

---

## 5. Bugs & Stability
**No bug reports, crash logs, or regression issues** were filed or updated in the last 24 h.  
- No fix PRs exist because no defects were reported.

---

## 6. Feature Requests & Roadmap Signals
The sole feature signal today is **PR #981** — adding `grok-cli` provider support.  
Given the project’s history of adding CLI providers (`codex-cli`, `gemini-cli`, `claude-cli`), this fits an established roadmap pattern: **broaden the roster of supported local LLM CLIs**.  
*Prediction:* If merged, the next logical candidates would be providers for other emerging CLI tools (e.g., `llama-cli`, `mistral-cli`) or enhancements to the provider abstraction (shared config, health checks, streaming parity).

---

## 7. User Feedback Summary
**No user-facing feedback** (issues, discussions, or PR reviews) appeared in the last 24 h.  
- No pain points, use-case reports, or satisfaction signals captured.  
- The silence may reflect a small active user base, stable current functionality, or engagement occurring outside GitHub (Discord, Matrix, etc.).

---

## 8. Backlog Watch
With **zero open issues** in the provided snapshot and only one open PR (#981), there are **no stale or neglected items** requiring maintainer triage at this moment.  
*Recommendation:* Keep an eye on PR #981 for review latency; if it stalls >7 days, consider pinging maintainers or assigning a reviewer to avoid contributor discouragement.

---

**Data source:** GitHub API snapshot for `nullclaw/nullclaw` (issues, PRs, releases) as of 2026-08-01.  
**Links:** All references point to `https://github.com/nullclaw/nullclaw/<type>/<number>` (e.g., PR #981 → https://github.com/nullclaw/nullclaw/pull/981).

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-01

## 1. Today's Overview

IronClaw is in the midst of a **large-scale architectural refactoring** ("Reborn" / target architecture) that dominates today's activity. Of the 50 PRs updated, **29 were merged/closed** — primarily a stacked sequence (WS1.1 → WS1.7) extracting neutral contract crates (`ironclaw_loop_contracts`, `ironclaw_extension_contracts`, `ironclaw_product_contracts`), sealing evidence minting, and narrowing `ironclaw_common`. Simultaneously, a **P0/P1 cache/prompt-optimization program** (pi-harness adoption) opened 7 new issues targeting Anthropic cache_control breakpoints, prompt-prefix stability, tool-array byte identity, and compaction budget derivation. On the product side, user-reported bugs include a **cross-user memory leak in shared channels (P0)**, **IronHub CTA 404s**, **broken email authentication**, and **workspace isolation failures**. No new releases were cut today.

## 2. Releases

**No new releases published today.** The most recent automated release PR (#5598) shows pending version bumps for `ironclaw_common` (0.4.2 → 0.5.0, breaking), `ironclaw_safety` (0.2.2 → 0.2.3), and `ironclaw_skills` (0.3.0 → 0.4.0, breaking), but it remains open.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Scope | Outcome |
|----|-------|-------|---------|
| [#6977](https://github.com/nearai/ironclaw/pull/6977) | `refactor(contracts): extract ironclaw_extension_contracts` (WS1.3) | Architecture / Dependencies | **Merged** — carved extension-tier contracts out of `ironclaw_host_api`, closed dual import paths. |
| [#6975](https://github.com/nearai/ironclaw/pull/6975) | `refactor(contracts): extract ironclaw_loop_contracts` (WS1.2) | Architecture / Dependencies | **Merged** — loop-tier contracts extracted, `ironclaw_agent_loop` flipped onto new crate, CI registration added. |
| [#6967](https://github.com/nearai/ironclaw/pull/6967) | `refactor(contracts): complete turn vocabulary in host_api` (WS1.1) | Architecture / Dependencies | **Merged** — finished turn vocabulary, retired turns shims. |
| [#6980](https://github.com/nearai/ironclaw/pull/6980) | `refactor(contracts): extract ironclaw_product_contracts` (WS1.4) | Architecture / Dependencies | **Merged** — product-tier contracts carved out, adapter half landed. |
| [#6981](https://github.com/nearai/ironclaw/pull/6981) | `refactor(contracts): consolidate sealed evidence minting` (WS1.5) | Architecture / Security | **Merged** — witness-grant evidence minting consolidated behind sealed API. |
| [#6979](https://github.com/nearai/ironclaw/pull/6979) | `docs(target-architecture): reconcile with #6930 hosted-MCP registration` | Documentation | **Merged** — 5 markdown files updated to reflect hosted MCP server registration. |
| [#6930](https://github.com/nearai/ironclaw/pull/6930) | `feat(extensions): register hosted MCP servers` | Extensions / MCP | **Merged** — tenant-runtime registration for hosted MCP servers with OAuth detection. |
| [#6908](https://github.com/nearai/ironclaw/pull/6908) | `fix(webui): paginate admin users list` | WebUI / Bug Fix | **Merged** — cursor-based infinite query, load-more/retry states, deduplication. |
| [#3942](https://github.com/nearai/ironclaw/pull/3942) | `refactor(trace): PilotAllowlist enum + caller-level error-branch tests` | Tracing / Refactor | **Merged** — string labels → serde enum, added error-branch tests. |
| [#4022](https://github.com/nearai/ironclaw/pull/4022) | `fix(tools): HTTP response error is recoverable` | Tools / Regression Fix | **Merged** — reverted run-aborting behavior from #4014, errors now model-visible. |

**Net effect:** The WS1.1–WS1.5 contract-extraction wave is **complete and on `main`**. WS1.6 (`ironclaw_common` narrowing) and WS1.7 (product→runner edge removal) are open in [#6982](https://github.com/nearai/ironclaw/pull/6982).

## 4. Community Hot Topics

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#6963](https://github.com/nearai/ironclaw/issues/6963) | Issue | 5 | **CI gate survival after crate moves** — 8 path-keyed gates still resolve from old flat `crates/ironclaw_*` layout; need rewiring to survive `git mv`. |
| [#6940](https://github.com/nearai/ironclaw/issues/6940) | Issue | 2 | **IronHub skill CTA 404** — every skill’s call-to-action button returns 404; blocks user onboarding. |
| [#6920](https://github.com/nearai/ironclaw/issues/6920) | Issue | 2 | **Target-architecture baselines** — tracking issue for prerequisite cleanup & exception ratchets (now largely done via WS1.x PRs). |
| [#5981](https://github.com/nearai/ironclaw/pull/5981) | PR | — | **Queued-message steering** — large forward-port with turn-boundary race fixes; stacked behind contract work. |
| [#6982](https://github.com/nearai/ironclaw/pull/6982) | PR | — | **Narrow `ironclaw_common` + shed product→runner edge** (WS1.6+WS1.7) — final wave of contract extraction. |

**Underlying signal:** Contributors are **finishing the dependency-graph rewrite** while product bugs (CTA, auth, memory leak) accumulate — suggesting a **release cutoff** may be needed before the next feature wave.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P0** | [#6900](https://github.com/nearai/ironclaw/issues/6900) | **Cross-user memory leak**: shared-channel default subject binds all users to operator’s memory namespace. | No |
| **P0** | [#6984](https://github.com/nearai/ironclaw/issues/6984) | **Cache**: missing explicit Anthropic `cache_control` breakpoints — relies on automatic caching only. | No (part of pi-harness P0 #1) |
| **P0** | [#6985](https://github.com/nearai/ironclaw/issues/6985) | **Cache**: prompt prefix mutates per run (nudges, timestamp, memory retrieval) → invalidates cached prefix. | No (P0 #2) |
| **P0** | [#6986](https://github.com/nearai/ironclaw/issues/6986) | **Cache**: tool array not byte-identical — progressive disclosure promotes tools mid-run. | No (P0 #3) |
| **P0** | [#6987](https://github.com/nearai/ironclaw/issues/6987) | **Cache**: missing regression test for byte-identical prompt prefix across turns. | No (P0 #4) |
| **P1** | [#6940](https://github.com/nearai/ironclaw/issues/6940) | IronHub skill CTA 404 for all skills. | No |
| **P1** | [#6972](https://github.com/nearai/ironclaw/issues/6972) | New account email authentication not working. | No |
| **P1** | [#6988](https://github.com/nearai/ironclaw/issues/6988) | Compaction uses hardcoded 128k context window instead of actual model window. | No (P1 #5) |
| **P1** | [#6989](https://github.com/nearai/ironclaw/issues/6989) | Token accounting estimates from content *reference string* length, not referenced content. | No (P1 #6) |
| **P1** | [#6990](https://github.com/nearai/ironclaw/issues/6990) | Compaction summarization pollutes prompt cache / session affinity. | No (P1 #7) |
| **P2** | [#6866](https://github.com/nearai/ironclaw/issues/6866) | Same home directory shared across users — workspaces visible to others. | No |
| **P2** | [#6974](https://github.com/nearai/ironclaw/issues/6974) | libSQL `thread_store_writes` p95 37–135s in tool-heavy stress cases. | No (PR [#6973](https://github.com/nearai/ironclaw/pull/6973) addresses Postgres capacity, not libSQL) |
| **P2** | [#6976](https://github.com/nearai/ironclaw/issues/6976) | `ironclaw service install` doesn’t enable user lingering → breaks unattended VMs. | No |

**Critical cluster:** The **P0 cache/prompt-prefix issues (#6984–#6987)** are a coordinated program (pi-harness adoption) with **no PRs yet** — they will likely land as a batch. The **shared-channel memory leak (#6900)** is a standalone P0 security bug with no fix in flight.

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **`hub` alias for `ironhub` CLI subcommand** | [#6983](https://github.com/nearai/ironclaw/issues/6983) (user feedback) | High — trivial CLI alias, documentation-driven. |
| **Standardize "Tools" vs "Extensions" terminology** | [#6971](https://github.com/nearai/ironclaw/issues/6971) (user feedback) | High — product-facing clarity, low code impact. |
| **Rebrand "Reborn" → "Ironclaw 1.0" on extensions page** | [#6854](https://github.com/nearai/ironclaw/issues/6854) | High — copy change only. |
| **Admin-managed agents as UserId subjects** | [#6578](https://github.com/nearai/ironclaw/issues/6578) (epic) | Medium — architectural, requires identity-model work. |
| **Skills the model can find, choose, use + self-created skills** | [#6941](https://github.com/nearai/ironclaw/issues/6941) (epic) | Medium — large, multi-PR effort; subset of #6565. |
| **Hosted MCP server registration** | [#6930](https://github.com/nearai/ironclaw/pull/6930) (merged) | **Done** — landed today. |
| **Queued-message steering + budget approval gate** | [#5981](https://github.com/nearai/ironclaw/pull/5981), [#5982](https://github.com/nearai/ironclaw/pull/5982) | Medium — stacked on contract work; #5981 has turn-boundary fixes. |

**Prediction:** The next version will likely ship the **WS1.6/WS1.7 contract cleanup (#6982)**, the **pi-harness cache fixes (#6984–#6990)**, and the **CLI/terminology polish (#6983, #6971, #6854)**. The large skills epic (#6941) and admin-managed agents (#6578) are farther out.

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **IronHub unusable** — CTA buttons 404 everywhere | [#6940](https://github.com/nearai/ironclaw/issues/6940) | Blocks skill discovery/installation for all users. |
| **Can’t log in after email signup** | [#6972](https://github.com/nearai/ironclaw/issues/6972) | New user onboarding broken. |
| **No workspace privacy** — all users see each other’s files | [#6866](https://github.com/nearai/ironclaw/issues/6866) | Multi-tenant trust violation. |
| **Shared channels leak memory across users** | [#6900](https://github.com/nearai/ironclaw/issues/6900) | Cross-user data exposure in Slack/shared conversations. |
| **Admin user list pagination broken** | [#6903](https://github.com/nearai/ironclaw/issues/6903) (fixed by [#6908](https://github.com/nearai/ironclaw/pull/6908)) | Resolved today. |
| **Service install unreliable on headless VMs** | [#6976](https://github.com/nearai/ironclaw/issues/6976) | Ops friction for self-hosters. |
| **Terminology confusion: Tools vs Extensions** | [#6971](https://github.com/nearai/ironclaw/issues/6971) | Product clarity / docs debt. |

**Sentiment:** **Frustration with core product loops** (auth, hub, isolation) while internals undergo heavy refactoring. Users are hitting **visible regressions** that feel like "pre-1.0" rough edges.

## 8. Backlog Watch — Stalled / Needs Maintainer Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#6578](https://github.com/nearai/ironclaw/issues/6578) | 9 days | **Epic: Admin-managed agents as UserId subjects** — foundational for multi-tenant agent ops; no PR movement. | Open, 1 comment |
| [#6831](https://github.com/nearai/ironclaw/pull/6831) | 4 days | **Standardized messaging framework** (16 core ops, canonical error taxonomy) — large XL PR, no merge yet. | Open, 0 comments on PR |
| [#5981](https://github.com/nearai/ironclaw/pull/5981) | 21 days | **Queued-message steering** — ported to main, turn-boundary races fixed, but stacked behind contract wave. | Open, 0 comments on PR |
| [#5982](https://github.com/nearai/ironclaw/pull/5982) | 21 days | **Budget approval gate + usage settings** — split 2/2, depends on #5981. | Open, 0 comments on PR |
| [#6900](https://github.com/nearai/ironclaw/issues/6900) | 2 days | **P0 cross-user memory leak** — security severity, no fix PR. | Open, 1 comment |
| [#6974](https://github.com/nearai/ironclaw/issues/6974) | 1 day | **libSQL write pathology** — p95 37–135s; Postgres fix (#6973) landed but libSQL remains. | Open, 0 comments |
| [#6978](https://github.com/nearai/ironclaw/issues/6978) | 1 day | **CI roll-up fails on workflow_dispatch** —

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-01

---

## 1. Today's Overview
LobsterAI showed **high maintenance velocity** on 2026-07-31 with **11 PRs merged/closed** and **4 stale issues resolved**, though no new release was cut. The merged work spans UI polish (sidebar resize, keyboard hints, skeleton loading), OAuth integration (Antigravity), and core agent-runtime fixes (OpenClaw prompt stability, tool-protocol leakage, cron finalization). The single open PR (#2234) addresses a subtle yield/continuation bug in the OpenClaw scheduler. Overall, the project is in a **healthy refinement phase**—clearing backlog, hardening the agent runtime, and incrementally improving UX—without disruptive changes.

---

## 2. Releases
**No new releases** published today. The last release PR (#2416) appears to be a version bump / changelog preparation but was closed without a tag. Expect a `2026.7.31` or `2026.8.x` tag soon if the merged fixes pass CI.

---

## 3. Project Progress — Merged / Closed PRs (2026-07-31)

| PR | Area | Summary | Link |
|----|------|---------|------|
| **#1315** | UI / Sidebar | **Drag-to-resize sidebar** (180–480 px) with persist handle, col-resize cursor, global mouse events. Closes #1314. | [#1315](https://github.com/netease-youdao/LobsterAI/pull/1315) |
| **#1318** | UI / Sidebar | **Keyboard-shortcut badges** (⌘/Ctrl, ⌥/Alt, ⇧/Shift) on “New Task” & “Search” buttons, platform-aware, fade-in on hover. Closes #1317. | [#1318](https://github.com/netease-youdao/LobsterAI/pull/1318) |
| **#1320** | UI / Session List | **Skeleton loading state** for session list via `sessionsLoaded` flag in `coworkSlice`, eliminating “empty state flash” on startup. Closes #1319. | [#1320](https://github.com/netease-youdao/LobsterAI/pull/1320) |
| **#1321** | UI / Settings | **Dismiss overlays** (memory editor, model test modal) when switching settings tabs—fixes “stuck overlay” blocking clicks. Fixes #1307. | [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321) |
| **#1308** | Core / Cowork | **Isolate home-screen input draft per agent**—prevents draft bleed when switching agents. | [#1308](https://github.com/netease-youdao/LobsterAI/pull/1308) |
| **#172** | Auth / OAuth | **Antigravity OAuth integration** + SQLite persistence + OpenAI-compatible proxy support. Large subsystem addition. | [#172](https://github.com/netease-youdao/LobsterAI/pull/172) |
| **#2413** | Core / OpenClaw | **Byte-stable live prompt tool-result history**—pass `aggregateMaxCharsOverride=null` to prevent rewriting cached history, restoring DeepSeek cache hit rate (~100% → ~57% regression fixed). | [#2413](https://github.com/netease-youdao/LobsterAI/pull/2413) |
| **#2415** | Core / OpenClaw | **Drop aggregate cap in live tool-result prompt projection**—same root cause as #2413, ensures prefix-cache stability. | [#2415](https://github.com/netease-youdao/LobsterAI/pull/2415) |
| **#2414** | Core / Cowork | **Prevent BTW tool protocol leakage**—sanitize provider tool-call markup from side-chat results, preserve error metadata. | [#2414](https://github.com/netease-youdao/LobsterAI/pull/2414) |
| **#2417** | UI / Sites | **Copy success feedback** for site URLs & share codes (reuses conversation copy icon/interaction). | [#2417](https://github.com/netease-youdao/LobsterAI/pull/2417) |
| **#2416** | Release | Version bump / changelog prep for `2026.7.31` (closed without tag). | [#2416](https://github.com/netease-youdao/LobsterAI/pull/2416) |

---

## 4. Community Hot Topics
All four issues updated today were **stale issues from April 2026** closed en masse after their corresponding PRs landed. No new community discussions or high-reaction threads appeared in the last 24 h. The underlying needs addressed were:
- **Sidebar flexibility** (resize, shortcut visibility) — power-user workflow efficiency.
- **Perceived performance** (skeleton loading) — eliminating startup flash.
- **Table rendering** (#1311: raw tags in line-breaks, hover full-text) — data-intensive UI clarity.

> **Signal**: The maintainers are systematically closing the April backlog; community friction points are UX polish rather than functional gaps.

---

## 5. Bugs & Stability
| Severity | Issue / PR | Description | Fix Status |
|----------|------------|-------------|------------|
| **High** | #2413 / #2415 | DeepSeek prefix-cache hit rate collapsed from ~100% → ~57% due to aggregate-char-cap rewriting stable history on every tool-result append. | **Fixed & merged** (#2413, #2415) |
| **Medium** | #2414 | BTW (side-chat) tool-call markup leaked into main conversation, corrupting provider protocol. | **Fixed & merged** |
| **Medium** | #1321 | Settings-tab switch left full-window overlay mounted, making UI appear read-only. | **Fixed & merged** |
| **Low** | #1311 | Table cells: line-breaks rendered with raw tags; long text truncated without hover reveal. | **Closed (stale)** — fix likely in separate PR not in today’s batch |
| **Low** | #2234 (open) | Cron yield descendant finalization broken—parent agent stalls after child completes. | **Open PR** (#2234) — needs review & test coverage |

---

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| Sidebar drag-resize (180–480 px) | #1314 / #1315 | ✅ **Merged** — will ship |
| Keyboard-shortcut badges (platform-aware) | #1317 / #1318 | ✅ **Merged** — will ship |
| Skeleton loading for session list | #1319 / #1320 | ✅ **Merged** — will ship |
| Antigravity OAuth provider | #172 | ✅ **Merged** — major new auth option |
| Table hover full-text & tag cleanup | #1311 | ⚠️ **Closed stale** — may reopen if not addressed |
| Cron yield continuation fix | #2234 | 🔄 **In PR** — high priority for agent reliability |

**Prediction**: Next release will bundle the 11 merged PRs above (UI polish + OpenClaw stability + Antigravity OAuth). The open #2234 is the only blocker for a clean cut.

---

## 7. User Feedback Summary
- **Pain points** (from stale issues):  
  - Fixed sidebar width hurts small/large screens.  
  - Hidden keyboard shortcuts increase discovery cost.  
  - Startup “empty state flash” causes confusion/history-loss fear.  
  - Table rendering shows raw `<br>` tags; no hover expansion.  
- **Satisfaction drivers** (merged PRs):  
  - Tangible UX upgrades (resize, hints, skeletons).  
  - DeepSeek cache regression fixed—critical for long-session cost/latency.  
  - New OAuth provider expands auth flexibility.  
- **No new negative feedback** in last 24 h; all reported issues are being actioned.

---

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| **#2234** — `cron yield descendant finalization` | Open since 2026-06-30 (32 days) | Breaks multi-agent cron workflows; parent agent stalls. PR has test plan but no review. | **Open PR** — assign reviewer, run integration tests. |
| **#1311** — Table rendering (raw tags, no hover) | Created 2026-04-02 (121 days) | Data-heavy users hit this daily; closed stale but no fix PR visible. | **Closed stale** — verify if fixed in passing or reopen. |
| **#2416** — Release `2026.7.31` tag | Created today | 11 merged PRs await a tagged release; changelog PR closed without tag. | **Action required** — cut tag & publish release notes. |

---

### Key Links
- **Repo**: https://github.com/netease-youdao/LobsterAI  
- **Today’s merged PRs**: #1308, #1315, #1318, #1320, #1321, #172, #2413, #2414, #2415, #2417, #2416  
- **Open PR needing review**: #2234  
- **Stale issues closed**: #1311, #1314, #1317, #1319  

---

*Digest generated from GitHub API data for 2026-07-31 00:00–23:59 UTC. All links point to netease-youdao/LobsterAI.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-01

## 1. Today's Overview
Moltis shows high development velocity with **7 PRs updated in the last 24 hours** (5 open, 2 merged), signaling an active sprint focused on **security hardening**, **Nostr protocol expansion**, and **observability infrastructure**. Two issues were updated: one new bug report for GPT 5.6 Luna compatibility and one feature request (Markdown export) that was closed via PR #1176. No new releases were published. The project demonstrates strong community engagement with external contributors submitting critical security fixes.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
### Merged / Closed PRs (2)
| PR | Title | Author | Merged/Closed | Summary |
|----|-------|--------|---------------|---------|
| [#1168](https://github.com/moltis-org/moltis/pull/1168) | feat(nostr): add NIP-29 group chat support for Buzz channels | penso | 2026-08-01 | Implements NIP-29 group chat over NIP-42 authenticated connections for Block's Buzz workspace relay. Enables AI agents and humans as equal members in team channels. |
| [#1176](https://github.com/moltis-org/moltis/pull/1176) | feat(web): add Markdown copy and session export | Jonesxq | 2026-07-31 | Implements **Issue #1131**: preserves original Markdown when copying assistant replies; adds session-level "Save as Markdown" with paginated history, user/assistant text, and image references. |

### Open PRs with Recent Activity (5)
| PR | Title | Author | Updated | Status |
|----|-------|--------|---------|--------|
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | fix(channels): gate `/sh` and privileged tools behind per-account operators list | penso | 2026-08-01 | Separates channel access from privilege; enforces explicit `operators` list across commands, callbacks, queue replay, chat execution, and external interfaces. |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | Add instrumentation and feedback collection infrastructure | penso | 2026-08-01 | Backend-neutral agent instrumentation, Langfuse v4 export, OTLP backends, end-user reaction feedback. Records immutable completion-only turns with streaming parity, failover attribution, cache-aware token usage. |
| [#1179](https://github.com/moltis-org/moltis/pull/1179) | fix(gateway): verify node pairing signatures | tsauvajon | 2026-07-31 | Binds `node.pair.verify` to server-issued pending request; prevents callers from supplying own key/challenge. |
| [#1180](https://github.com/moltis-org/moltis/pull/1180) | fix(security): harden model and zip paths | tsauvajon | 2026-07-31 | Prevents arbitrary file write via malicious zip/HuggingFace repo (path traversal in `clawhub.rs` zip extraction and model download paths). |
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | feat(memory): add zvec vector database memory backend | demyanrogozhin | 2026-07-31 | Experimental Zvec + redb backend, feature-gated behind `zvec` cargo feature; integrates with llama-cpp embedding server. |

## 4. Community Hot Topics
| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#1180](https://github.com/moltis-org/moltis/pull/1180) | PR (security) | Critical fix for **arbitrary file write / RCE vector** via malicious zip or HF repo | **Supply-chain security**: users need trust that model/zip extraction cannot overwrite config, credentials, or scripts. |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | PR (infra) | Large instrumentation PR (Langfuse, OTLP, feedback) | **Production observability**: teams require streaming/non-streaming parity, failover attribution, cache-aware token accounting, and user feedback loops. |
| [#1131](https://github.com/moltis-org/moltis/issues/1131) → [#1176](https://github.com/moltis-org/moltis/pull/1176) | Issue + PR | 1 👍, closed via PR | **Data portability**: users want to export chat sessions as clean Markdown for documentation, sharing, or archival. |
| [#1181](https://github.com/moltis-org/moltis/issues/1181) | Issue (bug) | New, 0 comments | **Model compatibility**: GPT 5.6 "Luna" (likely a new variant) breaks existing integration; needs rapid triage. |

## 5. Bugs & Stability
| Severity | Item | Description | Fix Status |
|----------|------|-------------|------------|
| **Critical** | [#1180](https://github.com/moltis-org/moltis/pull/1180) | Zip extraction path traversal (`clawhub.rs`) + HuggingFace model download path traversal → arbitrary file write, potential RCE | **Fix PR open** (tsauvajon) |
| **High** | [#1179](https://github.com/moltis-org/moltis/pull/1179) | Node pairing signature verification bypass: callers could supply own key/challenge | **Fix PR open** (tsauvajon) |
| **High** | [#1170](https://github.com/moltis-org/moltis/pull/1170) | Channel allowlist granted access to privileged commands (`/sh`, host tools) without separate operator authorization | **Fix PR open** (penso) |
| **Unknown** | [#1181](https://github.com/moltis-org/moltis/issues/1181) | "Issue with GPT 5.6 Luna" — details redacted in summary; reported 2026-07-31 | **No fix PR yet**; needs triage |

> **Note**: Three security-focused PRs (#1179, #1180, #1170) from two contributors (tsauvajon, penso) indicate a coordinated hardening effort.

## 6. Feature Requests & Roadmap Signals
| Feature | Signal | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **Markdown copy/export** | Implemented in [#1176](https://github.com/moltis-org/moltis/pull/1176) (closes #1131) | **High** — already merged |
| **Nostr NIP-29 group chat (Buzz)** | Merged in [#1168](https://github.com/moltis-org/moltis/pull/1168) | **High** — already merged |
| **Operator/privilege separation for channels** | PR [#1170](https://github.com/moltis-org/moltis/pull/1170) active, security-critical | **High** — likely in next security patch |
| **Instrumentation & feedback (Langfuse, OTLP, reactions)** | PR [#1174](https://github.com/moltis-org/moltis/pull/1174) large scope, active | **Medium** — may need review cycles |
| **zvec vector memory backend** | PR [#1158](https://github.com/moltis-org/moltis/pull/1158) experimental, feature-gated | **Low-Medium** — behind feature flag, "vibe-coded" per author |
| **GPT 5.6 Luna compatibility** | Issue [#1181](https://github.com/moltis-org/moltis/issues/1181) newly filed | **High** — model regressions typically fast-tracked |

## 7. User Feedback Summary
- **Positive**: Markdown export request (#1131) received a 👍 and was implemented quickly (#1176 merged in 1 day), showing responsive maintainers.
- **Security-conscious adoption**: Contributor **tsauvajon** states *"I'd like to use Moltis, but I've got a couple of security fixes I'd like to get in before doing so"* — indicates **pre-adoption security audit** behavior, a strong trust signal.
- **Model compatibility pain**: New issue #1181 for "GPT 5.6 Luna" suggests users are testing cutting-edge models and hitting integration gaps.
- **Experimental infrastructure use**: PR #1158 author describes running *"embedding model on independently installed llama-cpp server"* — users are self-hosting complex stacks.

## 8. Backlog Watch
| Item | Stale Since | Why It Matters | Recommended Action |
|------|-------------|----------------|---------------------|
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | 2026-07-17 (15 days) | Alternative vector memory backend (Zvec + redb); could diversify embedding options beyond current defaults. | Review for correctness; consider merging behind feature flag for community testing. |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | 2026-07-27 (5 days) | Observability foundation (Langfuse, OTLP, feedback); enables production debugging and eval loops. | Prioritize review — high leverage for enterprise/power users. |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | 2026-07-26 (6 days) | Privilege separation for channels; closes security gap where allowlist = full admin. | Fast-track review; security-adjacent. |
| [#1181](https://github.com/moltis-org/moltis/issues/1181) | 2026-07-31 (1 day) | New model compatibility bug; no reproduction details visible in summary. | Request full session context from reporter; label `needs-triage`. |

---

**Project Health Indicators**
- 🟢 **Velocity**: 7 PR updates / 24h (strong)
- 🟢 **Security responsiveness**: 3 critical fixes in flight from external contributors
- 🟢 **Community PR merge rate**: 2/7 merged today (29%)
- 🟡 **Issue triage**: 1 new bug unassigned, 0 comments
- 🟢 **Feature delivery**: User-requested Markdown export delivered in < 2 months (issue filed 2026-06-17, merged 2026-07-31)

*Data sourced from GitHub API; timestamps UTC. Links point to live items on github.com/moltis-org/moltis.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-01

## 1. Today's Overview
CoPaw shows **high development velocity** with 50 total GitHub activities (16 issues, 34 PRs) in the last 24 hours. The project is in active bug-fix and stabilization mode for v2.0.1, addressing critical regressions in skill persistence, shell command handling, memory compression, and AgentScope 2.0.4 compatibility. No new release was published today, but 10 PRs were merged/closed, indicating rapid iteration on hotfixes. Community engagement is moderate with several first-time contributors submitting fixes.

## 2. Releases
**No new releases today.** Current stable version remains **v2.0.1 (Desktop)**. The project appears to be accumulating fixes for a potential v2.0.2 patch release.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Type | Linked Issue |
|----|-------|------|--------------|
| [#6573](https://github.com/agentscope-ai/QwenPaw/pull/6573) | `fix(audio): restore transcription for channel audio messages` | Bug Fix | #6544 |
| [#6592](https://github.com/agentscope-ai/QwenPaw/pull/6592) | `fix(memory): flush Auto-Memory before Scroll context eviction` | Bug Fix | #6555 |
| [#6606](https://github.com/agentscope-ai/QwenPaw/pull/6606) | `fix(read_file): accept numeric string line ranges` | Bug Fix | — |
| [#6558](https://github.com/agentscope-ai/QwenPaw/issues/6558) | Multiple chat session UI data integrity issues | Issue Closed | — |
| [#6549](https://github.com/agentscope-ai/QwenPaw/issues/6549) | Desktop App input field obscured | Issue Closed | — |
| [#6544](https://github.com/agentscope-ai/QwenPaw/issues/6544) | Feishu audio transcription silent failure | Issue Closed | — |
| [#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555) | Dream/memory compression misses early-session events | Issue Closed | — |
| [#6529](https://github.com/agentscope-ai/QwenPaw/issues/6529) | ACP new_session missing models field | Issue Closed | — |

**Key Advances:**
- **Audio transcription restored** for Feishu/channel messages after AgentScope 2.0 migration (#6573)
- **Memory system fixed** — early-session events no longer lost during context compression (#6592, #6555)
- **ACP protocol compliance** improved for external client integration (#6529)

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) Skill tags disappear on restart | 10 comments, regression of #3270 | **Data persistence reliability** — users lose custom skill organization across sessions |
| [#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) Empty response not reported as error | 5 comments | **Observability** — silent failures in long-context sessions erode trust |
| [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) `spawn_subagent` single-task mode broken | 4 comments, PR #6609 open | **API usability** — required `batch` parameter blocks legitimate single-agent workflows |
| [#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520) `agent.json` systematic corruption (BOM, quotes, encoding) | 3 comments, PR #6528 open | **Windows compatibility** — config corruption causes complete system failure |
| [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) `execute_shell_command` large output freezes UI | 3 comments, PR #6610 open | **Frontend performance** — unbounded rendering blocks main thread |
| [#6608](https://github.com/agents/ai/QwenPaw/issues/6608) Long-running commands bypass timeout, orphan subprocesses | 2 comments, PR #6610 open | **Resource control** — runaway processes block sessions for hours |

**Pattern:** Users are hitting **production-blocking stability issues** in v2.0.1 — config corruption, silent failures, UI freezes, and timeout bypasses. The regression of #3270 (#6537) suggests insufficient regression testing.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520) `agent.json` corruption (BOM, missing quotes, double-encoding) — complete system failure on Windows | Open | [#6528](https://github.com/agentscope-ai/QwenPaw/pull/6528) |
| **Critical** | [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) Incompatible with `agentscope==2.0.4.post1` — proactive crashes & tool-permission deadlock | Open | [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) |
| **High** | [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) Long shell commands bypass timeout, orphan subprocesses, block sessions 1.5h+ | Open | [#6610](https://github.com/agentscope-ai/QwenPaw/pull/6610) |
| **High** | [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) Massive stdout freezes UI (main thread blocked) | Open | [#6610](https://github.com/agentscope-ai/QwenPaw/pull/6610) |
| **High** | [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) Skill tags lost on restart (regression of #3270) | Open | — |
| **Medium** | [#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) Empty model responses not reported as errors | Open | — |
| **Medium** | [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) `spawn_subagent` single-task mode unusable (required `batch`) | Open | [#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) |
| **Medium** | [#6614](https://github.com/agentscope-ai/QwenPaw/issues/6614) WeChat cron push silent failure (ret=-2, context_token invalid) | Open | — |

**Note:** 4 critical/high bugs have open fix PRs (#6528, #6615, #6610, #6609) — good signal for rapid resolution.

## 6. Feature Requests & Roadmap Signals
| Request | Issue/PR | Likelihood for Next Version |
|---------|----------|----------------------------|
| **Collapsible thought/tool traces in UI** — results buried in execution noise | [#6260](https://github.com/agentscope-ai/QwenPaw/issues/6260) (1 👍) | High — UX pain point, referenced other tools |
| **Large output handling: auto-write to file / streaming read** | [#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512) | High — complements #6589/#6608 fixes |
| **Global hotkey floating quick-input window (Doubao-style)** | [#6607](https://github.com/agentscope-ai/QwenPaw/pull/6607) | High — PR open, desktop UX differentiation |
| **Workspace shortcut in desktop sidebar** | [#6306](https://github.com/agentscope-ai/QwenPaw/pull/6306) | Medium — closes #6083, PR open |
| **NVIDIA NIM provider support** | [#6526](https://github.com/agentscope-ai/QwenPaw/pull/6526) | Medium — expands provider ecosystem |
| **Rename "QwenPaw Desktop" → "QwenPaw"** | [#6587](https://github.com/agentscope-ai/QwenPaw/issues/6587) | Low — trivial branding fix |
| **Unified provider discovery, model metadata, routing** | [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | Medium — architectural, under review |

**Prediction:** v2.0.2 will likely bundle the critical bug fixes (#6528, #6615, #6610, #6609) plus the collapsible UI improvement (#6260) and global hotkey (#6607) as user-facing enhancements.

## 7. User Feedback Summary
**Pain Points (from issues):**
- **Config fragility:** `agent.json` corruption on Windows causes total breakdown (#6520)
- **Silent failures:** Empty responses, WeChat pushes reporting success but not delivering (#6601, #6614)
- **UI freezes:** Large command output locks desktop app (#6589)
- **Session blocking:** Runaway shell commands hold Feishu sessions hostage for hours (#6608)
- **Data loss:** Skill tags, early-session memories, chat messages lost on mode/session switch (#6537, #6555, #6558)
- **Version incompatibility:** v2.0.1 breaks with latest AgentScope (#6612)

**Use Cases Revealed:**
- Long-running data analysis scripts (stock reports, dedup via Feishu Bitable API)
- Multi-session workflows with mode switching (Code ↔ Chat)
- Cron-scheduled proactive pushes (WeChat, Feishu)
- External ACP clients (Multica daemon) needing model discovery
- Windows desktop as primary platform

**Sentiment:** Frustration with v2.0.1 stability regressions, but appreciation for rapid fix PRs from maintainers and community.

## 8. Backlog Watch — Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#6260](https://github.com/agentscope-ai/QwenPaw/issues/6260) Collapsible thought/tool traces | 13 days (updated today) | High-impact UX, 1 👍, clear reference implementations |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) Unified provider discovery & routing | 11 days | Architectural PR, under review, blocks model management improvements |
| [#6306](https://github.com/agentscope-ai/QwenPaw/pull/6306) Workspace shortcut in sidebar | 11 days | Desktop UX, closes #6083, ready for review |
| [#6528](https://github.com/agentscope-ai/QwenPaw/pull/6528) Fix `agent.json` corruption | 4 days | Critical Windows bug, first-time contributor PR |
| [#6526](https://github.com/agentscope-ai/QwenPaw/pull/6526) NVIDIA NIM provider | 4 days | Ecosystem expansion, first-time contributor PR |
| [#6611](https://github.com/agentscope-ai/QwenPaw/pull/6611) Refactor context: align Scroll/memory with AgentScope lifecycle | 1 day | Major architectural cleanup, reduces inconsistency risk |

**Recommendation:** Prioritize review/merge of #6528 (critical bug), #6615 (AgentScope compat), #6610/#6609 (shell command fixes), then #6260 (UX) and #6607 (desktop differentiation).

---

*Data source: GitHub API — agentscope-ai/QwenPaw, snapshot 2026-08-01 00:00 UTC*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-01

## 1. Today's Overview
ZeroClaw shows **high architectural activity** with 50 PRs and 8 issues updated in the last 24 hours, but **no new releases**. The project is in a heavy refactoring/feature-development phase: 7 RFCs are under active maintainer review (covering shell command security, memory lifecycle, model capabilities, slash-command unification, hot config reload, structured output, and memory backend decoupling), while a 7-part "Hindsight memory stack" (PRs #9063–#9069) is progressing through review. Bug fixes target security (token redaction, proxy handling, webhook alias enforcement), stability (agent turn persistence, Slack thread hydration), and cross-platform CI. The volume of open PRs (43) vs. merged (7) suggests a review bottleneck.

---

## 2. Releases
**No new releases today.** The latest published version remains unchanged; all changes are landing on `master` via PR merges.

---

## 3. Project Progress — Merged/Closed PRs Today (7)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| #9119 | **Bug**: ZeroCode session picker selects wrong row after scrolling | `zerocode/tui` | **Closed** — UI regression fixed (S2 severity) |
| *(6 others merged/closed)* | Not individually listed in feed | — | Likely smaller fixes/docs; check merged PR list on GitHub for details |

> **Note**: The feed shows 7 merged/closed PRs but only #9119 appears in the issue list. The remaining 6 are likely merged PRs not captured in the issue snapshot.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | Issue (RFC) | 10 | **Per-execution shell confirmation tier** — Users want a middle ground between “always allow” and “always deny” for high-risk shell commands, with Claude Code-style allow/ask/deny policies. High risk, P1. |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | Issue (RFC) | 7 | **Decouple memory lifecycle from storage backends** — Architectural boundary needed so consolidation/governance policies aren’t reimplemented per backend. High risk, P2. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Issue (Tracker) | 5 | **Maintainer decision queue** — Central tracker for RFCs/design issues awaiting maintainer action. Signals process bottleneck. |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | Issue (RFC) | 4 | **Per-model capability & context-window config** — Unified source of truth for vision support, context windows, and UI display. P1, high risk. |
| [#8969](https://github.com/zeroclaw-labs/zeroclaw/pull/8969) | PR (feat) | — | **Slack thread context hydration** — Bounded history on first bot mention; adds `thread_context_max_messages` config. XL size, needs author action. |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | PR (fix) | — | **Keep agent turns alive after viewer disconnect** — WebSocket treated as viewer, not owner; prevents work cancellation on browser sleep/nav. P1, high risk. |

**Underlying theme**: Security governance (shell, memory, config reload), multi-surface consistency (slash commands, Slack/web/TUI), and provider-agnostic model metadata.

---

## 5. Bugs & Stability — Reported/Fixed Today

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **High** | [#9607](https://github.com/zeroclaw-labs/zeroclaw/pull/9607) | Open | Routes coding CLI tools (`codex_cli`, `claude_code`, `gemini_cli`, `opencode_cli`) through configured runtime/sandbox — prevents bypass. |
| **High** | [#9606](https://github.com/zeroclaw-labs/zeroclaw/pull/9606) | Open | Honors runtime proxy for OpenAI Responses API (streaming + non-streaming). |
| **High** | [#9604](https://github.com/zeroclaw-labs/zeroclaw/pull/9604) | Open | Enforces Linq webhook alias ownership — ignores unowned/disabled aliases. |
| **High** | [#8918](https://github.com/zeroclaw-labs/zeroclaw/pull/8918) | Open | Redacts Slack tokens (`xoxe.xoxb-`, `xoxe.xoxp-`) in leak detector; maintainer hardened regex/unwrap. |
| **High** | [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | Open | Prevents agent turn cancellation on WebSocket viewer disconnect. |
| **Medium** | [#9449](https://github.com/zeroclaw-labs/zeroclaw/pull/9449) | Open | Preserves JSONL rows during schema migration (scans full trace, rewrites only legacy rows). |
| **Medium** | [#9605](https://github.com/zeroclaw-labs/zeroclaw/pull/9605) | Open | Quickstart collects required webhook `port`/`secret`; validates before enable. |
| **S2 (Degraded)** | [#9119](https://github.com/zeroclaw-labs/zeroclaw/issues/9119) | **Closed** | ZeroCode session picker off-by-one after scroll — fixed. |
| **Medium** | [#9037](https://github.com/zeroclaw-labs/zeroclaw/pull/9037) | Open | Strips trailing `<eom>` provider markers from streamed assistant text (leaked into transcript/history). |

**Trend**: Security-hardening fixes dominate (proxy, token redaction, alias ownership, sandbox routing). Several are same-day PRs (#9604–#9607), indicating rapid response.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Per-execution shell confirm tier (allow/ask/deny)** | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) (P1, 10 comments) | **High** — Security-critical, active design discussion. |
| **Hindsight memory stack (7-part)** | PRs [#9063–#9069](https://github.com/zeroclaw-labs/zeroclaw/pull/9063) | **High** — Part 1 (backend/factory) through Part 7 (dashboard) all open; large scope but structured. |
| **Per-model capability/context config** | [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) (P1) | **High** — Blocks accurate UI/context budget; provider-family defaults are wrong. |
| **Unified slash-command registry** | [#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) (P2) | **Medium** — Drift across web/TUI/channel; needs single source. |
| **Hot config/security reload (no daemon restart)** | [#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897) (P3) | **Medium** — Operational pain point; long-lived subsystems stale after config save. |
| **Schema-Guided Reasoning (structured output)** | [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) (P2) | **Medium** — Fragile JSON parsing across providers; SGR would standardize. |
| **OpenAI Chat Completions gateway endpoint** | [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | **High** — Enables LangChain/Continue.dev/Aider integration; XL PR in review. |
| **Slack thread context hydration** | [#8969](https://github.com/zeroclaw-labs/zeroclaw/pull/8969) | **Medium** — UX improvement for Slack; config-gated, XL. |
| **Agent lifecycle progress states (Slack)** | [#8985](https://github.com/zeroclaw-labs/zeroclaw/pull/8985) | **Medium** — UX for long runs; 6 typed states. |

---

## 7. User Feedback Summary
- **Pain points**:  
  - Shell tool too coarse-grained (binary allow/deny) — users want per-command confirmation.  
  - Memory consolidation fails silently across providers (Markdown fences, missing fields).  
  - Config changes don’t propagate until `/admin/reload` — security policy stale.  
  - Slack threads lose context on first mention; agent appears “stalled” during long runs.  
  - ZeroCode session picker broken with scroll (now fixed).  
  - Provider terminal markers (`<eom>`) leak into UI/history.  
- **Use cases**:  
  - Multi-channel agents (Slack, web, webhook, TUI) needing consistent slash commands.  
  - IDE/orchestrator integration via OpenAI-compatible gateway.  
  - Per-agent memory tiers (private/shared/system) with authorization.  
- **Satisfaction**: High engagement on RFCs (10+ comments) shows community investment; but maintainer decision queue (#8692) suggests frustration with review latency.

---

## 8. Backlog Watch — Stale/Blocked Items Needing Maintainer Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | 59 days | Open, needs maintainer review | **P1 security RFC** — shell command policy; 10 comments, no decision. |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 71 days | Open, needs maintainer review | **Memory architecture boundary** — blocks backend extensibility; 7 comments. |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | 60 days | Open, needs maintainer review | **Model metadata unification** — affects context budget, UI, vision; 4 comments. |
| [#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) | 44 days | Open, needs maintainer review | **Slash-command registry drift** — multi-surface inconsistency; 3 comments. |
| [#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897) | 45 days | Open, needs maintainer review | **Hot config reload** — operational gap; 3 comments. |
| [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) | 64 days | Open, needs maintainer review | **Structured output (SGR)** — cross-provider fragility; 2 comments. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 28 days | Accepted tracker | **Decision queue itself** — 5 comments; meta-indicator of review backlog. |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | 33 days | Open, needs author action | **OpenAI Chat Completions gateway** — XL, high impact; awaits contributor updates. |
| [#9063–#9069](https://github.com/zeroclaw-labs/zeroclaw/pull/9063) | 18 days | Open, needs author action (7 PRs) | **Hindsight memory stack** — large, multi-part; maintainer notes on #9067/9068. |

**Recommendation**: Prioritize decisions on P1 RFCs (#7155, #7100) and unblock the Hindsight stack (#9063–#9069) which spans memory, dashboard, and auth. The decision tracker (#8692) should be groomed weekly.

---

**Project Health Indicators**  
- 🟢 **Velocity**: High (50 PR updates/day)  
- 🟡 **Review throughput**: Low (43 open vs. 7 merged) — bottleneck at maintainer review  
- 🟢 **Security posture**: Active hardening (5 high-risk security PRs today)  
- 🟡 **Technical debt**: Multiple RFCs open >45 days; architectural decisions pending  
- 🟢 **Community engagement**: Strong on design issues (10 comments on top RFC)  

*Data source: GitHub API snapshot for zeroclaw-labs/zeroclaw, 2026-08-01 00:00–23:59 UTC.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*