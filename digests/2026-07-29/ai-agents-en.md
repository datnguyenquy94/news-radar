# OpenClaw Ecosystem Digest 2026-07-29

> Issues: 174 | PRs: 500 | Projects covered: 12 | Generated: 2026-07-29 03:37 UTC

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

# OpenClaw Project Digest — 2026-07-29

## 1. Today's Overview

OpenClaw shows **extremely high development velocity** with 500 PRs and 174 issues updated in the last 24 hours. The 62% PR close rate (312 merged/closed) indicates strong maintainer throughput, though the 188 open PRs suggest a growing review backlog. No new releases were cut today. The issue landscape is dominated by **session-state regressions**, **provider compatibility problems** (especially Anthropic native path and llama.cpp tool-calling), and **channel delivery failures** (Discord/WhatsApp suppression, Telegram/Feishu/LINE issues). Multiple P1/P0 bugs affect core reliability: memory trust tagging (security), crash-loop breaker suppressing channels permanently, Anthropic `thinking` block signature failures bricking long sessions, and session transcript overwrites. The project is in active stabilization mode post-2026.7.x beta cycle.

## 2. Releases

**No new releases today.** The latest beta appears to be `2026.7.2-beta.4` (referenced in #113434, #115202). Several issues reference regressions introduced in `2026.7.1` and `2026.7.2-beta` builds, suggesting a release candidate stabilization phase.

## 3. Project Progress — Merged/Closed PRs (312 today)

| Area | Key Merged Fixes | Impact |
|------|------------------|--------|
| **Session State** | #115223: Clear stale token metadata after `--max-lines` session compact (P1, session-state) | Prevents token count accumulation across compactions |
| **Telegram** | #111065: Surface draft stream delivery failures at warn level (P2) | Improves observability of Telegram send failures |
| **CI/Automation** | #110851: Bound mantis-discord-smoke git fetches with timeout (P2, automation) | Prevents CI hangs from unbounded git operations |
| **Plugins** | #115083: Keep bulk updates on beta channel (P1, compatibility) | Fixes unintended channel switching during `plugins update --all` |
| **CLI/Doctor** | #115512: Restore default workspace suggestions in `doctor` (XS) | UX fix for onboarding workflow |
| **QA/Testing** | #115446: Validate maturity profiles against scenario inventory (XS) | Fixes false-positive QA results |
| **Auth/Providers** | #103527: Enforce plugin-runtime ownership on `sessions.patch` (P1, security-boundary) | Closes privilege escalation vector |
| **Mobile** | #115502: Stop repeated exec approvals migration retries on macOS (M) | Stops 86k warning lines/day from SQLite/TCC thrashing |
| **Model Providers** | #115508: Expose custom provider max/ultra reasoning tiers (XS) | Unblocks reasoning effort selection for custom providers |

**Notable open PRs awaiting review:** #114278 (P0, availability) — recover from state-database corruption without gateway restart; #115134 (P1, compatibility/auth-provider) — reuse Claude CLI logins natively and stop forwarding expired OAuth tokens; #78441 (XL, showcase) — forward `toolsAllow` from `sessions_spawn` for subagent tool restriction.

## 4. Community Hot Topics (Most Comments/Reactions)

| Issue/PR | Type | Comments | 👍 | Core Need |
|----------|------|----------|----|-----------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Enhancement (Security) | 23 | 0 | **Memory Trust Tagging** — Tag agent memory by source trust level (user vs web vs 3rd-party) to prevent memory poisoning attacks. Tagged `impact:security`, `issue-rating: 🐚 platinum hermit`. |
| [#94228](https://github.com/openclaw/openclaw/issues/94228) | Bug (Anthropic) | 15 | 2 | **Native Anthropic `thinking` block signature failure** — Long tool-use sessions brick permanently with `Invalid signature in thinking block` 400. P1, `clawsweeper-recovery-stuck`. |
| [#115326](https://github.com/openclaw/openclaw/issues/115326) | Bug (Regression) | 13 | 0 | **Crash-loop breaker suppresses Discord/WhatsApp permanently** — Documented recovery (`channels.start`) fails with WebSocket 1006. |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) | Enhancement (Sessions) | 11 | 0 | **Webhook hook sessions should reuse existing session** when `sessionKey` consistent — multi-turn support broken in `resolveCronSession()`. |
| [#113434](https://github.com/openclaw/openclaw/issues/113434) | Bug (RAM) | 10 | 0 | **Codex sessions.reset reuses retired session ID; catalog/file scans exhaust Gateway RAM** — Gateway-wide crash in 2026.7.2-beta.4. |
| [#77012](https://github.com/openclaw/openclaw/issues/77012) | Bug (Regression) | 9 | 1 | **WebChat session transcript overwritten on every turn** — v5.2 regression from SessionManager removal. |
| [#113251](https://github.com/openclaw/openclaw/issues/113251) | Enhancement (UI) | 9 | 0 | **Add image viewing in webchat file viewer** — User-requested UX improvement with screenshots. |
| [#73537](https://github.com/openclaw/openclaw/issues/73537) | Enhancement (Process) | 8 | 2 | **Add production-readiness stability label to releases** — User asks for clear stability signaling for family/business deployments. |

**Underlying needs:** Users are demanding **production-grade reliability** (session persistence, memory safety, crash recovery), **provider compatibility** (Anthropic native, llama.cpp, Codex), and **release transparency** (stability labels). Security-conscious users want memory isolation; power users need multi-turn webhook sessions; operators need observability into delivery failures.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR | Description |
|----------|-------|--------|--------|-------------|
| **P0 (Availability)** | [#114269](https://github.com/openclaw/openclaw/issues/114269) (ref in #114278) | Open | [#114278](https://github.com/openclaw/openclaw/pull/114278) (open) | State-database corruption causes permanent gateway failure; requires restart. PR implements auto-recovery. |
| **P1 (Security/Session)** | [#7707](https://github.com/openclaw/openclaw/issues/7707) | Open | — | Memory poisoning risk: no trust tagging by source. Tagged `impact:security`, `platinum hermit`. |
| **P1 (Provider/Session)** | [#94228](https://github.com/openclaw/openclaw/issues/94228) | Closed | — | Anthropic native path: `thinking` block signature invalid after long tool-use threads — bricks session permanently. |
| **P1 (Channel/Crash)** | [#115326](https://github.com/openclaw/openclaw/issues/115326) | Open | — | Crash-loop breaker permanently suppresses Discord/WhatsApp; recovery path (`channels.start`) fails WS 1006. |
| **P1 (RAM/Crash)** | [#113434](https://github.com/openclaw/openclaw/issues/113434) | Closed | — | Codex session catalog scans exhaust Gateway RAM → OOM kill (2026.7.2-beta.4, Windows). |
| **P1 (Session/Data)** | [#77012](https://github.com/openclaw/openclaw/issues/77012) | Closed | — | WebChat transcript overwritten every turn — only latest message survives (v5.2 regression). |
| **P1 (Auth/Provider)** | [#115137](https://github.com/openclaw/openclaw/issues/115137) (ref in #115134) | Open | [#115134](https://github.com/openclaw/openclaw/pull/115134) (open) | Claude CLI forwards expired OAuth tokens to Claude Code since 2026.7.2-beta.4. |
| **P1 (Delivery/Session)** | [#115202](https://github.com/openclaw/openclaw/issues/115202) | Closed | — | Reply lost after successful Codex turn: "terminal source reply lost restart recovery ownership" (Telegram, beta.3→beta.4). |
| **P2 (Provider/Tool)** | [#108580](https://github.com/openclaw/openclaw/issues/108580) | Open | — | Cron tool schema incompatible with llama.cpp grammar-constrained tool calling (2026.7.1 regression). |
| **P2 (Provider/Tool)** | [#114826](https://github.com/openclaw/openclaw/issues/114826) | Closed | — | Zod-generated unanchored regex patterns break llama.cpp tool calling. |
| **P2 (Channel/Session)** | [#88955](https://github.com/openclaw/openclaw/issues/88955) | Open | — | qqbot WebSocket reconnection causes "Outbound not configured for channel: qqbot" error. |
| **P2 (Channel/Delivery)** | [#113181](https://github.com/openclaw/openclaw/issues/113181) | Open | — | Cron `delivery.mode="none"` + isolated agent → silent no-op (status=ok, delivered=false, no error). |
| **P2 (RAM/Crash)** | [#99659](https://github.com/openclaw/openclaw/issues/99659) | Open | — | OOM killed after companion app connects — memory spike on Windows/K8s. |
| **P2 (Auth/Node)** | [#109054](https://github.com/openclaw/openclaw/issues/109054) | Closed | — | macOS client generates new node ID on every connection → ghost entries in nodes list. |

**Pattern:** Session-state corruption, provider-specific tool-calling regressions (Anthropic, llama.cpp, Codex), and channel delivery failures dominate. Multiple fixes are in open PRs awaiting maintainer review (`merge-risk: 🚨 session-state`, `🚨 security-boundary`, `🚨 availability`).

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signals | Likelihood (Next Version) |
|---------|-------|---------|---------------------------|
| **Memory Trust Tagging** | [#7707](https://github.com/openclaw/openclaw/issues/7707) | `platinum hermit`, `impact:security`, `needs-security-review`, `needs-product-decision` | Medium — Security-focused, needs design decision |
| **Production-Readiness Labels** | [#73537](https://github.com/openclaw/openclaw/issues/73537) | User runs family/business assistant; 2 👍; `off-meta tidepool` | High — Low effort, high user value |
| **Webhook Multi-Turn Sessions** | [#11665](https://github.com/openclaw/openclaw/issues/11665) | `diamond lobster`, `linked-pr-open`, `impact:session-state` | High — PR exists, documented behavior broken |
| **Image Viewing in WebChat** | [#113251](https://github.com/openclaw/openclaw/issues/113251) | Screenshots provided, clear UX ask | High — UI polish, straightforward |
| **Reminders Tab in Mission Control** | [#14133](https://github.com/openclaw/openclaw/issues/14133) | `diamond lobster`, clear separation of concerns | Medium — UI reorganization |
| **Autonomous Agent Loop (/loop)** | [#107423](https://github.com/openclaw/openclaw/issues/107423) | `third-party-extension`, token budget, max-iteration guard | Low — Marked as extension, not core |
| **Subagent Tool Restriction (toolsAllow)** | [#78441](https://github.com/openclaw/openclaw/pull/78441) | `showcase`, `XL`, `security-boundary`, `session-state` | High — PR open, addresses DMZ/restricted orchestrator pattern |
| **Mid-Stream Message Injection (Soft Steer)** | [#10960](https://github.com/openclaw/openclaw/issues/10960) | `platinum hermit`, real-time steering need | Medium — Architectural change needed |
| **Control UI Accept Gateway Token from Auth Header** | [#12441](https://github.com/openclaw/openclaw/issues/12441) | `diamond lobster`, reverse proxy deployment blocker | High — Infra compatibility, security-adjacent |
| **Postcondition Checks for Cron Jobs** | [#12398](https://github.com/openclaw/openclaw/issues/12398) | `diamond lobster`, `impact:security`, deterministic verification | Medium — Cron reliability, needs design |

**Roadmap prediction:** Next stable release will likely include: production-readiness labels (#73537), webchat image viewing (#113251), subagent `toolsAllow` forwarding (#78441), Control UI auth header support (#12441), and fixes for the P1 session/provider bugs. Memory trust tagging (#7707) and autonomous loop (#107423) are longer-term.

## 7. User Feedback Summary

**Pain Points (from issue descriptions):**
- **Session unreliability:** Transcripts overwritten (#77012), sessions.brick permanently (#94228), RAM exhaustion (#113434), duplicate deliveries (#51628, #88015).
- **Provider friction:** Anthropic native path broken for long sessions (#94228); llama.cpp tool-calling broken by Zod regex (#114826, #108580); Codex runtime implicitly selected over OpenAI (#113051); custom provider reasoning tiers blocked (#115451).
- **Channel instability:** Discord/WhatsApp suppressed permanently (#115326); Telegram draft failures silent (#111065); qqbot reconnection breaks outbound (#88955); Feishu DMs use reply mode incorrectly (#94922); LINE inbound delays (#97435).
- **Operational opacity:** No production stability labels (#73537); silent daily session reset at 4 AM (#61238); no observability into gateway probe duration (#50245); ghost node IDs (#109054).
- **Mobile/Companion issues:** macOS exec approval migration spams logs (#115502); Windows Companion re-pairs on every restart (#114162); iOS Motion & Fitness permission blocked on first use (#115523).

**Positive Signals:**
- User runs OpenClaw as "family and business assistant" with Telegram, automations, cron, Home Assistant (#73537) — **production usage validated**.
- Detailed bug reports with env, steps, versions — **engaged technical user base**.
- PRs with screenshots, proofs, AI-assisted fixes — **contributor investment**.

**Satisfaction:** Mixed. Core users depend on it daily but hit

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-07-29)

---

## 1. Ecosystem Overview

The personal AI agent open-source ecosystem shows **high aggregate velocity** but **fragmented maturity**. Twelve active projects generated 750+ PR updates and 250+ issue updates in 24 hours, yet only **NanoBot** and **PicoClaw** maintain healthy merge rates (>50%). Most projects are in **stabilization or architectural refactoring phases** post-major-version cycles, with zero releases cut today across the board. Core technical challenges converge on **session-state reliability**, **multi-provider compatibility**, **channel delivery guarantees**, and **security boundaries**—indicating the ecosystem is transitioning from prototype to production-grade infrastructure. Commercial adoption signals (LobsterAI licensing questions, OpenClaw family/business usage, NanoClaw production quota fallback) confirm real-world deployment pressure.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Merge Rate | Latest Release | Health Score |
|---------|-------------|-----------|-------------------|------------|----------------|--------------|
| **OpenClaw** | 174 | 500 | 312 | 62% | 2026.7.2-beta.4 | 🟡 High velocity, review backlog |
| **NanoBot** | 7 | 38 | 19 | 50% | Pre-patch | 🟢 Healthy stabilization |
| **Hermes Agent** | 36 | 50 | 3 | 6% | None (v0.16.0) | 🔴 Review bottleneck, critical bugs |
| **PicoClaw** | 4 | 9 | 3 | 33% | None | 🟢 Steady maintenance |
| **NanoClaw** | 1 | 10 | 4 | 40% | None | 🟢 Steady, strategic PRs open |
| **NullClaw** | 0 | 0 | 0 | — | None | ⚪ Dormant |
| **IronClaw** | 9 | 50 | 15 | 30% | Pending v0.5.0 (breaking) | 🟡 Hardening, XL PRs gating release |
| **LobsterAI** | 3 | 4 | 4 | 100% | None | 🟡 Fair, stale backlog |
| **Moltis** | 1 | 8 | 2 | 25% | None | 🟢 Platform maturity focus |
| **CoPaw** | 9 | 50 | 18 | 36% | v2.0.1 | 🟡 Caution, v2.0.1 regressions |
| **ZeptoClaw** | 0 | 2 (bot) | 1 | 50% (bot) | None | 🟡 Maintenance-only |
| **ZeroClaw** | 2 (RFCs) | 50 | 0 | 0% | None | 🔴 Review saturation, RFC phase |

**Health Score Key**: 🟢 = Healthy merge velocity + stability focus; 🟡 = High activity but bottlenecks (review, regressions, stale items); 🔴 = Critical merge rate <10% or zero merges with high PR volume.

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Highest absolute throughput**: 500 PRs/24h dwarfs all others (next: Hermes/IronClaw/CoPaw at 50)
- **Largest contributor base**: 312 merged PRs implies broad maintainer bandwidth
- **Production validation**: Explicit user report of "family and business assistant" with Telegram, cron, Home Assistant
- **Security depth**: Only project with formal memory trust tagging proposal (`platinum hermit` rating) and privilege escalation fix (`sessions.patch` ownership)

### Technical Approach Differences
| Dimension | OpenClaw | Peer Norm |
|-----------|----------|-----------|
| **Session architecture** | Centralized gateway with catalog scans, compaction, crash-loop breaker | Decentralized (NanoBot, Moltis) or runtime-owned (ZeroClaw RFC) |
| **Provider abstraction** | Native paths per provider (Anthropic, Codex, llama.cpp) with custom reasoning tiers) | Mostly OpenAI-compat wrappers (IronClaw, NanoClaw, Hermes) |
| **Channel delivery** | First-class Discord/WhatsApp/Telegram/Feishu/LINE with crash-loop suppression logic | Subset of channels; Moltis/ZeroClaw invest in Slack/Telegram reliability |
| **Release cadence** | Beta cycle with explicit version references (2026.7.x) | Mostly pre-1.0 or patch-only; IronClaw gating on breaking-change release |

### Community Size Comparison
- **OpenClaw**: 174 issue updates, 23-comment security issue, multiple 10+ comment bugs → **largest engaged community**
- **NanoClaw**: 8 👍 on Copilot SDK issue → **strongest single-feature demand signal**
- **Hermes**: 7 👍 on runtime reasoning tool → **highest reaction count**
- **Others**: Mostly <5 comments/reactions per hot topic

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Session-state durability & recovery** | OpenClaw, NanoBot, Hermes, CoPaw, ZeroClaw, Moltis | Auto-recovery from DB corruption (OpenClaw #114278), WAL checkpoint fixes (Hermes #72549), cron archiving visibility (Moltis #1111), checkpointing (CoPaw #6269), runtime-owned sessions (ZeroClaw RFC #9487) |
| **Multi-provider tool-calling compatibility** | OpenClaw, Hermes, NanoClaw, CoPaw, PicoClaw, IronClaw | Anthropic `thinking` blocks (OpenClaw #94228), llama.cpp grammar constraints (OpenClaw #108580, #114826), Qwen/DeepSeek empty `tool_calls` (Hermes #72591), Codex runtime selection (OpenClaw #113051), MiniMax/Copilot SDK (NanoClaw #1255, #1350) |
| **Channel delivery guarantees** | OpenClaw, Hermes, NanoClaw, Moltis, ZeroClaw, CoPaw | Crash-loop suppression (OpenClaw #115326), Telegram offset handling (ZeroClaw #9314), Slack Block Kit + ack phases (Moltis #1166), Feishu native media (PicoClaw #3256), WhatsApp audio (NanoBot #5149) |
| **Security boundaries** | OpenClaw, Hermes, IronClaw, ZeroClaw, CoPaw | Memory trust tagging (OpenClaw #7707), thread-unsafe caches (Hermes #8039), TOCTOU escapes (IronClaw #6817), nested Docker sandbox (ZeroClaw #9402), `import-local` path restriction (CoPaw #6487) |
| **Observability & production readiness** | OpenClaw, NanoBot, Hermes, Moltis, LobsterAI, ZeroClaw | Stability labels (OpenClaw #73537), dashboard memory leak (Hermes #46082), Langfuse/OTLP (Moltis #1174), installer redirect hardening (LobsterAI #2402), minimal info logging (IronClaw #6837) |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Architectural Signature |
|---------|---------------|--------------|-------------------------|
| **OpenClaw** | Multi-channel gateway, session orchestration, provider-native paths | Power users, families, small businesses self-hosting | Centralized gateway + catalog + crash-loop breaker; provider-native over compat layer |
| **NanoBot** | WebUI polish, agent lifecycle, skill/extension platform | Desktop/web users, skill authors | WebUI-first, Rust/Tauri, subagent → multi-agent evolution |
| **Hermes** | Multi-provider gateway, desktop/TUI/CLI parity, Nous ecosystem | Nous model users, multi-tenant gateway operators | Provider abstraction + gateway + desktop; heavy fallback chain logic |
| **PicoClaw** | Matrix/E2EE, multi-platform messaging (Feishu/DingTalk), mobile | Privacy-focused, enterprise messaging users | Matrix-native, vodozemac migration, Android service architecture |
| **NanoClaw** | Container-native, quota-aware multi-provider, fork-safe updates | DevOps/self-hosted operators, quota-constrained teams | Container PID 1 init, dual-engine fallback, `/update-nanoclaw` smoke tests |
| **IronClaw** | Rust safety, sandbox isolation, skill marketplace, error recoverability | Security-sensitive, skill developers, platform builders | Crate-per-concern, DB migration lifecycle, error-recoverability epic, `@ironclaw/ui` |
| **LobsterAI** | Windows installer, OpenClaw runtime wrapper, skill licensing | Windows desktop users, commercial adopters | Electron + OpenClaw runtime, safety-contract gate, skill provenance tracking |
| **Moltis** | Team collaboration, ACP interoperability, observability | Teams, integrators, enterprise pilots | ACP stdio host, per-account operator gating, Langfuse/OTLP, PWA push |
| **CoPaw** | Browser automation, desktop GUI control, checkpointing | Chinese-market desktop users, browser-agent developers | Chrome extension + native messaging, accessibility-first desktop automation |
| **ZeroClaw** | Runtime-centric architecture, unified attachments, declarative skills | Platform builders, architectural purists | `zeroclaw-runtime` as session owner, transport adapters, RFC-driven design |
| **ZeptoClaw** | Minimal maintenance | Unknown | Docker + Rust toolchain only |
| **NullClaw** | Dormant | — | — |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration with Production Pressure
- **OpenClaw**: Highest velocity, explicit production users, beta stabilization cycle
- **NanoBot**: Healthy merge rate, WebUI regression sprint, strategic multi-agent proposal
- **NanoClaw**: Steady fixes, production-tested quota fallback, strong community demand (Copilot SDK)

### Tier 2: Architectural Refactoring / Pre-Release Hardening
- **IronClaw**: Post-1.0.0, XL PRs restructuring core, breaking-change release gated
- **ZeroClaw**: RFC-driven, zero merges but 50 PRs, runtime-centric pivot
- **Hermes**: Heavy provider/desktop work, 6% merge rate, critical concurrency bugs
- **CoPaw**: v2.0.1 regression cluster (installer, config, MCP), feature PRs stacking

### Tier 3: Steady Maintenance / Niche Focus
- **PicoClaw**: Provider fixes, security migration, Android blocker
- **Moltis**: Platform maturity features (ACP, Slack, observability), no bugs reported
- **LobsterAI**: Security/UX polish, commercial licensing question, stale backlog

### Tier 4: Low Activity / Dormant
- **ZeptoClaw**: Dependabot only
- **NullClaw**: No activity

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Multi-provider quota failover is becoming table stakes** | NanoClaw #3057 (Claude→Codex prod-tested), OpenClaw custom reasoning tiers, Hermes fallback chain bugs, NanoClaw #1350 (Copilot 8 👍) | Agents must gracefully degrade across providers; single-provider lock-in is a user pain point |
| **Session durability > raw model capability** | 6+ projects fixing session recovery, compaction, archiving, checkpointing | Invest in WAL, snapshot isolation, crash-loop breakers before adding model features |
| **Channel delivery = product quality** | OpenClaw/WhatsApp/Discord suppression, ZeroClaw/Telegram offset, Moltis/Slack Block Kit, Hermes/Telegram auth | Users judge agents by messaging reliability; silent failures destroy trust |
| **Security boundaries moving from afterthought to requirement** | OpenClaw memory tagging, Hermes thread-unsafe caches, IronClaw TOCTOU, ZeroClaw nested Docker, CoPaw path restriction | Enterprise/self-hosted deployments demand formal trust boundaries; timing attacks, privilege escalation are real |
| **ACP (Agent Client Protocol) emerging as integration standard** | Moltis #1169 (ACP stdio host), Hermes/ZeroClaw/OpenClaw gateway patterns | Building ACP-compatible runtimes unlocks client ecosystem (Zed, Multica, OpenCode) |
| **Windows is a first-class deployment target** | OpenClaw macOS/Windows fixes, NanoBot uv install, CoPaw NSIS installer, LobsterAI Windows hardening, PicoClaw Android | Cross-platform desktop + mobile is expected;

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-29

---

## 1. Today's Overview

NanoBot shows **high maintenance velocity** with 38 PRs updated in 24 hours (19 merged/closed, 19 open) against 7 issue updates. The project is in an active stabilization sprint: 10+ WebUI regressions were fixed and merged today, alongside core agent fixes for session locking, output buffering, and subagent completion tracking. No new release was cut. Community engagement remains modest (max 7 comments on a stale install issue), but a strategic proposal (#5000) to evolve subagents into a true multi-agent system signals architectural ambition.

---

## 2. Releases

**No new releases** in the last 24 hours. The current version continues to accumulate fixes; a patch release is likely imminent given the volume of merged P1 regressions.

---

## 3. Project Progress — Merged/Closed PRs Today (19)

| PR | Area | Summary | Priority |
|----|------|---------|----------|
| [#5113](https://github.com/HKUDS/nanobot/pull/5113) | WebUI | Stabilize repeated model preset rows; unique React keys + regression test | P1 |
| [#5119](https://github.com/HKUDS/nanobot/pull/5119) | WebUI | Soften model selector typography (weight, opacity token) | P2 |
| [#5132](https://github.com/HKUDS/nanobot/pull/5132) | Docs | Move README title above introduction | P2 |
| [#5134](https://github.com/HKUDS/nanobot/pull/5134) | Agent | Prevent gateway crash when stopping active tasks (snapshot tasks before cancel) | P1 |
| [#5130](https://github.com/HKUDS/nanobot/pull/5130) | WebUI | Reconcile chats after browser resume/WS reconnect; fence delayed frames by turn ID | P1 |
| [#5140](https://github.com/HKUDS/nanobot/pull/5140) | WebUI | Keep streaming tail visible; remove delayed follow-motion profile | P1 |
| [#5142](https://github.com/HKUDS/nanobot/pull/5142) | WebUI | Open restored threads at latest message without scroll animation | P1 |
| [#5143](https://github.com/HKUDS/nanobot/pull/5143) | WebUI | Animate reasoning drawer transitions (600ms ease-out, reduced-motion support) | P2 |
| [#5144](https://github.com/HKUDS/nanobot/pull/5144) | CI/CD | Scope PR path detection to head changes (three-dot range) | P1 |
| [#5148](https://github.com/HKUDS/nanobot/pull/5148) | Provider/WebUI | **Feature**: Image-aware model presets (migrate legacy settings, tri-state `supportsImageInput`) | P1 |

**Other merged fixes** (not in top-20 list but closed today): pairing null-approved map (#5155), Responses API primitive items (#5154), memory non-string timestamps (#5153), subagent partial completion metadata (#5152), agent idle session lock release (#5151), exec buffered output bounding (#5150).

**Theme**: WebUI streaming/navigation stability, agent lifecycle hardening, and config/preset modernization.

---

## 4. Community Hot Topics

| Item | Link | Activity | Underlying Need |
|------|------|----------|-----------------|
| **#5000** Proposal: Evolve subagents → multi-agent collaboration | [Issue #5000](https://github.com/HKUDS/nanobot/issues/5000) | 5 comments, 0 👍 | Users want **persistent agent identities, shared task state, inter-agent communication** — moving beyond fire-and-forget delegation. |
| **#5** uv install instructions | [Issue #5](https://github.com/HKUDS/nanobot/issues/5) | 7 comments, 3 👍 (closed) | Faster, more reliable installs; `uv` adoption is a real user demand. |
| **#1332** High token consumption (5k+ for "hello") | [Issue #1332](https://github.com/HKUDS/nanobot/issues/1332) | 4 comments, 0 👍 (closed stale) | Cost anxiety; users need **token transparency, compression, or cheaper model routing**. |
| **#5118** Session consolidation drops media paths | [Issue #5118](https://github.com/HKUDS/nanobot/issues/5118) | 2 comments | **Data integrity**: uploaded files become unrecoverable after archive — blocker for media-heavy workflows. |

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#5118](https://github.com/HKUDS/nanobot/issues/5118) | Session consolidation silently drops uploaded file paths stored only in `media[]` — files unrecoverable post-archive | — |
| **High** | [#5133](https://github.com/HKUDS/nanobot/issues/5133) | `finish_reason='length'` + tool_calls + blank content misrouted to empty-response retry instead of length recovery | — |
| **Medium** | [#5138](https://github.com/HKUDS/nanobot/issues/5138) | MCP stdio shutdown: cancel-scope teardown error + stdout protocol pollution on exit | — (tracking SDK v2 migration) |
| **Medium** | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | WhatsApp: cannot send audio files (receives OK); ffmpeg warning in logs | — |
| **Low** | [#5155](https://github.com/HKUDS/nanobot/pull/5155) | Pairing store `get_approved` crashes on `"approved": null` | **PR #5155 open** |
| **Low** | [#5154](https://github.com/HKUDS/nanobot/pull/5154) | Responses API parser crashes on primitive/non-dict output items | **PR #5154 open** |
| **Low** | [#5153](https://github.com/HKUDS/nanobot/pull/5153) | Memory raw-archive fails on non-string/None timestamp or missing role | **PR #5153 open** |

**Note**: Three regression fixes (#5153–5155) are open PRs awaiting review; #5118 and #5133 have no fix PR yet.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Multi-agent collaboration** (persistent identities, shared state, inter-agent comms) | [#5000](https://github.com/HKUDS/nanobot/issues/5000) | Medium — architectural, needs design consensus |
| **Unified extension platform** (native Python extensions bridging skills/Apps/MCP gaps) | [PR #5098](https://github.com/HKUDS/nanobot/pull/5098) (open, conflict) | High — large PR, active development, fills known capability gap |
| **Skill marketplace & management UI** (Discover view, SkillHub/skills.sh, install history) | [PR #5116](https://github.com/HKUDS/nanobot/pull/5116) (open) | High — WebUI feature, test-covered, user-facing |
| **Stable resource path aliases** (`<config-dir>/resources/<view-id>/`) | [PR #5131](https://github.com/HKUDS/nanobot/pull/5131) (open, conflict) | Medium — infrastructure prep for multi-agent/extensions |
| **Image-aware model presets** (tri-state `supportsImageInput`) | [PR #5148](https://github.com/HKUDS/nanobot/pull/5148) **merged** | **Done** — in next release |

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Install friction** | #5 (7 comments, 3 👍) — users want `uv` instructions | Onboarding |
| **Token cost opacity** | #1332 — 5k tokens for "hello", 30k+ for skill install query | Cost predictability |
| **Media loss after archive** | #5118 — files uploaded via `media[]` disappear on consolidation | Data trust |
| **WhatsApp audio send broken** | #5149 — receive works, send fails with ffmpeg warning | Channel parity |
| **WebUI scroll/streaming glitches** | 5 P1 WebUI PRs merged today (tail visibility, thread restore, resume reconcile) | Daily usability |

**Positive signals**: Rapid WebUI regression fixes show maintainer responsiveness; image-aware presets (#5148) address a concrete multimodal gap.

---

## 8. Backlog Watch — Stale/Unanswered High-Value Items

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#5000](https://github.com/HKUDS/nanobot/issues/5000) Multi-agent proposal | 9 days | Strategic direction; no maintainer response yet | **Open, needs triage** |
| [#5098](https://github.com/HKUDS/nanobot/pull/5098) Unified extension platform | 3 days | Large feature PR, marked `conflict`, no review yet | **Open, needs review** |
| [#5116](https://github.com/HKUDS/nanobot/pull/5116) Skill marketplace UI | 2 days | User-facing feature, test-covered, no review | **Open, needs review** |
| [#5131](https://github.com/HKUDS/nanobot/pull/5131) Resource path aliases | 1 day | Infra for extensions/multi-agent, marked `conflict` | **Open, needs review** |
| [#5118](https://github.com/HKUDS/nanobot/issues/5118) Media path loss in consolidation | 2 days | Data loss bug, no fix PR assigned | **Open, needs fix** |
| [#5133](https://github.com/HKUDS/nanobot/issues/5133) Length-finish misrouting | 1 day | Core agent loop bug, no fix PR | **Open, needs fix** |

---

**Project Health Indicator**: 🟢 **Healthy velocity, stabilization-focused**. High PR merge rate (19/38) with strong test coverage on regressions. Strategic items (#5000, #5098, #5116) await maintainer bandwidth. Next patch release will likely bundle today's WebUI/agent fixes + image-aware presets.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-29

## 1. Today's Overview

Hermes Agent shows **high velocity with zero releases** — 36 active issues and 50 active PRs were updated in the last 24 hours, but only 3 PRs merged/closed. The project is in a heavy development/refactoring phase: multiple provider integrations (Qwen, DeepSeek, Kimi, Anthropic Claude SDK), gateway/desktop hardening, and memory/session infrastructure fixes are all in flight. No new version shipped; the team appears focused on stabilizing the `main` branch across a broad surface area (TUI, CLI, Desktop, Gateway, plugins) before cutting a release.

## 2. Releases

**None** — no new releases published today.

## 3. Project Progress (Merged/Closed PRs)

Only **3 PRs merged/closed** in the last 24h (details not fully listed in the feed). The open PR queue (47) dwarfs merged volume, indicating a **review bottleneck**. Notable open PRs advancing key areas:

| PR | Area | Status | Summary |
|----|------|--------|---------|
| [#71763](https://github.com/NousResearch/hermes-agent/pull/71763) | Provider/Anthropic | Open | Ports Claude Agent SDK runtime to v0.19 — first-class managed-subscription provider |
| [#72549](https://github.com/NousResearch/hermes-agent/pull/72549) | Session/State | Open | Fixes WAL checkpoint mode in `close()`/pre-VACUUM paths (follow-up to #45383) |
| [#72591](https://github.com/NousResearch/hermes-agent/pull/72591) | Transport/Qwen/DeepSeek | Open | Strips empty `tool_calls` arrays that cause 400s on strict OpenAI-compat endpoints |
| [#69910](https://github.com/NousResearch/hermes-agent/pull/69910) | Plugin/Docker/iMessage | Open | Supports immutable install trees for Photon iMessage sidecar (NS-606) |
| [#58512](https://github.com/NousResearch/hermes-agent/pull/58512) | Compression | Open | Rebinds context engine before compaction to avoid stale session bindings |
| [#61499](https://github.com/NousResearch/hermes-agent/pull/61499) | Delegation/Auth | Open | Fixes Nous auth resolution before direct endpoint fallback |
| [#62701](https://github.com/NousResearch/hermes-agent/pull/62701) | MCP/Tools | Open | Disables fuzzy repair for MCP tool names to prevent hallucinated calls |
| [#73809](https://github.com/NousResearch/hermes-agent/pull/73809) | Desktop/Windows | Open | Removes GIL-holding gateway prewarm from desktop lifespan (fixes boot loop #71226) |
| [#73811](https://github.com/NousResearch/hermes-agent/pull/73811) | Config/Kimi | Open | Adds `reasoning_replay` opt-in for self-hosted thinking models (Kimi K3) |
| [#73826](https://github.com/NousResearch/hermes-agent/pull/73826) | Computer Use | Open | Safe Wayland diagnostics + compositor tier documentation |

## 4. Community Hot Topics (Most Comments/Reactions)

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|-----|-----------|
| [#20866](https://github.com/NousResearch/hermes-agent/issues/20866) | Bug | 8 | 0 | **Qwen3.6-27B on vLLM**: "System message must be at beginning" template error in auxiliary tasks — blocks multi-provider setups |
| [#7273](https://github.com/NousResearch/hermes-agent/issues/7273) | Feature | 4 | 7 | **Runtime `reasoning_effort` tool** — agents need to self-adjust reasoning depth mid-session (vs. user-only slash commands) |
| [#39492](https://github.com/NousResearch/hermes-agent/issues/39492) | Feature | 4 | 1 | **Disable built-in memory tool** while keeping external memory providers — multi-tenant gateway use case |
| [#46527](https://github.com/NousResearch/hermes-agent/issues/46527) | Bug | 4 | 0 | **Fallback chain doesn't recompute `api_mode`** — reasoning silently dropped when falling back from Codex to Copilot GPT-5-mini |
| [#6237](https://github.com/NousResearch/hermes-agent/issues/6237) | Docs | 4 | 1 | **Hardcoded `~/.hermes/hermes-agent` path** — breaks installs at custom locations |
| [#38854](https://github.com/NousResearch/hermes-agent/issues/38854) | Bug | 2 | 2 | **Desktop zoom persisted per-route** — should be app-wide preference |

**Pattern**: Provider interop (Qwen, Copilot, OpenRouter, Kimi) and gateway/multi-tenant scenarios dominate. Users are pushing Hermes into production gateway roles and hitting edge cases in fallback, auth, and session isolation.

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Area | Fix PR? | Notes |
|----------|-------|------|---------|-------|
| **Critical** | [#46082](https://github.com/NousResearch/hermes-agent/issues/46082) | Dashboard memory leak → 5.2 GB → OOM kill | ❌ | v0.16.0, Linux; dashboard process unbounded growth |
| **Critical** | [#8039](https://github.com/NousResearch/hermes-agent/issues/8039) | Thread-unsafe global caches in `model_metadata.py` | ❌ | Data races under gateway concurrency — affects all multi-user deployments |
| **High** | [#20866](https://github.com/NousResearch/hermes-agent/issues/20866) | Qwen/vLLM 400 `TemplateError` in auxiliary tasks | ❌ | Blocks vision/compression/search on Qwen3.6-27B |
| **High** | [#46527](https://github.com/NousResearch/hermes-agent/issues/46527) | Fallback chain keeps stale `api_mode` → reasoning dropped | ❌ | Silent degradation; affects Copilot GPT-5-mini fallback |
| **High** | [#20577](https://github.com/NousResearch/hermes-agent/issues/20577) | `reasoning` blocks stripped on replay to vLLM/custom | ❌ | Degrades multi-turn reasoning for thinking models |
| **High** | [#72591](https://github.com/NousResearch/hermes-agent/pull/72591) | Empty `tool_calls: []` rejected by Qwen/DeepSeek/OneRouter | ✅ PR open | Transport-level fix; 400 non-retryable |
| **Medium** | [#44852](https://github.com/NousResearch/hermes-agent/issues/44852) | `hermes backup` includes Git for Windows (390 MB) | ❌ | Exclusion list missing `git/` dir |
| **Medium** | [#48594](https://github.com/NousResearch/hermes-agent/issues/48594) | Dashboard update controls hidden on systemd+Docker host | ❌ | False container detection |
| **Medium** | [#62501](https://github.com/NousResearch/hermes-agent/issues/62501) | First message becomes title instead of sending (Desktop) | ❌ | UX regression — double Enter required |
| **Medium** | [#35230](https://github.com/NousResearch/hermes-agent/issues/35230) | Empty response retries have **zero backoff** — wastes API calls | ❌ | Immediate retry ×3 before fallback |
| **Medium** | [#56579](https://github.com/NousResearch/hermes-agent/issues/56579) | `browser_snapshot/vision` weaker private-page check | ❌ | Security boundary inconsistency |
| **Medium** | [#29680](https://github.com/NousResearch/hermes-agent/issues/29680) | MCP OAuth with Supabase: `client_secret` required | ❌ | Auth flow breaks on token exchange |
| **Medium** | [#73809](https://github.com/NousResearch/hermes-agent/pull/73809) | Desktop boot loop on Windows (GIL + cold `.pyc` compile) | ✅ PR open | Removes gateway prewarm from lifespan |

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for Next Release | Rationale |
|---------|-------|----------------------------|-----------|
| **Runtime `reasoning_effort` tool** | [#7273](https://github.com/NousResearch/hermes-agent/issues/7273) | High | 7 👍, clear agent-autonomy use case; fits "agent controls itself" philosophy |
| **Disable built-in memory tool (gateway multi-tenant)** | [#39492](https://github.com/NousResearch/hermes-agent/issues/39492) | High | Directly supports OpenAI-compat API server product path |
| **Configurable file-upload size limits (env vars)** | [#51355](https://github.com/NousResearch/hermes-agent/issues/51355) | High | Hardcoded constants block enterprise deployments; low-risk config change |
| **Session ↔ Workspace binding (cwd + repo)** | [#48190](https://github.com/NousResearch/hermes-agent/issues/48190) | Medium | Strong dev-loop value; needs schema migration |
| **`reasoning_replay` opt-in for self-hosted thinking models** | [#73811](https://github.com/NousResearch/hermes-agent/pull/73811) | Medium | PR open; unblocks Kimi K3 / llama.cpp thinking models |
| **Spotify Web Playback dashboard widget** | [#15182](https://github.com/NousResearch/hermes-agent/issues/15182) | Low | Niche; depends on Spotify Connect browser SDK stability |
| **Fix hardcoded `~/.hermes/hermes-agent` paths** | [#6237](https://github.com/NousResearch/hermes-agent/issues/6237) | High | Docs/install friction; simple find/replace but wide surface |

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Provider fragmentation** | Qwen template errors (#20866), OpenRouter 400s (#11057), DeepSeek empty tool_calls (#72591), Kimi reasoning replay (#73811) | Users stitching together 5+ inference backends; Hermes' provider abstraction leaks |
| **Gateway readiness gaps** | Memory tool disable (#39492), thread-unsafe caches (#8039), custom headers ignored (#9589), MCP OAuth breaks (#29680) | Multi-tenant SaaS deployments hit concurrency, auth, and isolation bugs |
| **Desktop polish** | Zoom per-route (#38854), first-message-as-title (#62501), boot loop Windows (#73809), backup bloat (#44852) | Daily-driver UX friction; Windows especially fragile |
| **Session reliability** | Search hides recent prompt (#39734), fallback loses `api_mode` (#46527), reasoning stripped on replay (#20577) | Users lose trust in history/recovery — core product promise |
| **Observability gaps** | Dashboard memory leak (#46082), empty-response zero-backoff (#35230), print() swallowed in TUI (#20711) | Operators can't debug; silent failures |

**Sentiment**: Power users are **invested but frustrated** — they're building real workflows (gateways, multi-provider routing, desktop daily drivers) and hitting infrastructure-level bugs that suggest the test matrix doesn't cover their configurations.

## 8. Backlog Watch (Stale/High-Value Items Needing Maintainer Attention)

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#8039](https://github.com/NousResearch/hermes-agent/issues/8039) | 108 days | **Thread-unsafe global caches** — fundamental correctness bug for any concurrent gateway | Assign owner; add `threading.Lock` or `functools.lru_cache`; add concurrency test |
| [#46082](https://github.com/NousResearch/hermes-agent/issues/46082) | 45 days | **Dashboard OOM** — makes long-running desktop/gateway unusable | Profile memory; suspect session cache or websocket buffer leak; add heap sampling |
| [#20577](https://github.com/NousResearch/hermes-agent/issues/20577) | 84 days | **Reasoning stripped on replay** — breaks thinking-model multi-turn | Audit history replay path for `provider: custom`; preserve `reasoning_content` |
| [#6237](https://github.com/NousResearch/hermes-agent/issues/6237) | 112 days | **Hardcoded paths** — docs/install break custom**Low-effort fix (grep/replace), high user visibility |
| [#35230](https://github.com/NousResearch/hermes-agent/issues/35230) | 60 days | **Zero-backoff retries** — burns API quota, triggers rate limits | Add exponential backoff (1s, 2s, 4s) + jitter; configurable |
| [#29680](https://github.com/NousResearch/hermes-agent/issues/29680) | 69 days | **MCP OAuth + Supabase** — blocks enterprise auth integration | Support `client_secret` in token exchange; document Supabase config |
| [#16022](https://github.com/NousResearch/hermes-agent/pull/16022) | 94 days | **Invalid tool-call args → format_error classification** — prevents compression retry storms | Review + merge; adds regression tests |
| [#17070](https://github.com/NousResearch/hermes-agent/pull/17070) | 92 days | **GitHub P1 integration for Code Mode** — stacked on 2 other PRs | Unblock dependencies (#17020, #17056) or rebase |

---

### Health Indicators Summary

| Metric | Signal |
|--------|--------|
| **Issue:PR ratio** | 36:50 — healthy intake, but **merge rate ~6%** (3/50) indicates review bandwidth saturation |
| **Zero releases** | Suggests "stabilization sprint" — but 36 active issues show stabilization not yet achieved |
| **Provider bugs** | 6+ distinct provider issues in 24h — abstraction layer needs contract tests per provider |
| **Desktop/Windows** | 3 Windows-specific bugs + boot loop fix — platform parity lagging |
| **Security** | 1 boundary bypass (#56579) + auth gaps (#29680, #9589) — needs dedicated security review |

**Recommendation**: Prioritize merging the 3 critical-stability PRs (#72591, #73809, #72549), assign owners for the 3 critical bugs (#8039, #46082, #20577), and cut a **v0.16.1 patch** before adding new features. The gateway/desktop/provider surface is too broad for current review capacity — consider a "hardening" milestone.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-29

---

## 1. Today's Overview

PicoClaw shows **steady maintenance velocity** with 9 PRs and 4 issues updated in the past 24 hours. The project closed 3 issues and merged 3 PRs, indicating active triage and resolution. Open work remains substantial (6 open PRs, 1 open issue), with several tagged `stale` suggesting backlog grooming is ongoing. No new release was cut today, but merged PRs include provider fixes (Anthropic, Feishu), model resolution improvements, and a native Exa search provider in review. Overall health: **healthy, actively maintained, with a focus on provider reliability and multi-platform messaging fixes**.

---

## 2. Releases

**No new releases published today.**

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Domain | Impact |
|----|-------|--------|--------|
| [#3256](https://github.com/sipeed/picoclaw/pull/3256) | `fix(feishu): send audio and video with native message types` | Feishu/Lark adapter | Audio (opus) and video (mp4) now render as native playable messages instead of generic file downloads. |
| [#3254](https://github.com/sipeed/picoclaw/pull/3254) | `fix(agent): prefer verbatim model matches over provider-alias splits when resolving refs` | Model resolution | Fixes incorrect model selection when a provider-alias split matched earlier than an exact model string. |
| [#3228](https://github.com/sipeed/picoclaw/pull/3228) | `fix(anthropic-messages): send SystemParts as system blocks with cache_control` | Anthropic provider | Enables Anthropic prompt caching by preserving `SystemParts` and `cache_control` markers; previously flattened to a single string. |

**Net effect:** Two provider-level correctness fixes (Feishu media UX, Anthropic caching) and one core model-resolution hardening.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | Issue (closed) | 10 | 2 | **Security/maintenance**: Replace unmaintained `libolm` with `vodozemac` for Matrix E2EE. High-priority, help-wanted. |
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Issue (open) | 5 | 0 | **Android service startup failure** — service cannot launch, path settings immutable. Blocks mobile deployment. |
| [#3280](https://github.com/sipeed/picoclaw/pull/3280) | PR (open) | — | 0 | **OAuth login robustness** — fixes 4 independent failure modes in headless/remote browser auth flows. |
| [#3279](https://github.com/sipeed/picoclaw/pull/3279) | PR (open) | — | 0 | **Tool-call format leakage** into LLM summaries via Seahorse (`partsToReadableContent`). |

**Signal:** Security (libolm → vodozemac) and mobile (Android) are the two highest-visibility user pain points. Auth reliability and summary hygiene are active developer concerns.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | [#3182](https://github.com/sipeed/picoclaw/issues/3182) Android service fails to launch; path settings unchangeable | Open | No |
| **High** | [#3300](https://github.com/sipeed/picoclaw/issues/3300) Missing `read_file` tool causes conversation deadlock when agent instructed to read `RULES.md` | Closed (same day) | Implicit — likely fixed by tool registration |
| **Medium** | [#3255](https://github.com/sipeed/picoclaw/issues/3255) DingTalk chat list preview shows fixed "PicoClaw" instead of message content | Closed | Yes — [#3256](https://github.com/sipeed/picoclaw/pull/3256) (Feishu native media) suggests similar fix path for DingTalk |
| **Medium** | [#3279](https://github.com/sipeed/picoclaw/pull/3279) Tool-call format leaks into user-visible summaries (Seahorse) | Open (PR) | PR open |

**Note:** #3300 was filed and closed same day — suggests a known/quickly-addressed tooling gap.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Native Exa web search provider** | [#3299](https://github.com/sipeed/picoclaw/pull/3299) (PR open) | High — complete implementation with config, highlights, date filters |
| **Configurable default model fallback chain (UI + API)** | [#3200](https://github.com/sipeed/picoclaw/pull/3200) (PR open) | High — UI/UX work mostly done, persists via backend |
| **Anthropic prompt cache token metrics** | [#3251](https://github.com/sipeed/picoclaw/pull/3251) (PR open) | Medium — observability improvement, non-breaking |
| **vodozemac migration (replace libolm)** | [#3088](https://github.com/sipeed/picoclaw/issues/3088) (closed, help-wanted) | Medium — depends on community contributor; flagged high priority |
| **Installation scripts moved to main repo** | [#1951](https://github.com/sipeed/picoclaw/pull/1951) (open since Mar) | Low — housekeeping, blocked on docs repo coordination |

**Prediction:** Exa search provider and fallback chain UI are closest to merge. vodozemac remains a dependency upgrade needing dedicated effort.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Context |
|------------|----------|--------------|
| **Android deployment broken** | [#3182](https://github.com/sipeed/picoclaw/issues/3182) — service won't start, paths locked | Mobile/self-hosted users; full permissions granted but ineffective |
| **DingTalk preview shows bot name, not content** | [#3255](https://github.com/sipeed/picoclaw/issues/3255) | Enterprise DingTalk users; list UX degraded |
| **Agent deadlocks without `read_file` tool** | [#3300](https://github.com/sipeed/picoclaw/issues/3300) | Power users splitting prompts into `RULES.md`; forced to hack system prompt |
| **OAuth login fails in headless/remote setups** | [#3280](https://github.com/sipeed/picoclaw/pull/3280) | Devs/operators running PicoClaw on servers without local browser |
| **Prompt cache invisible (Anthropic)** | [#3251](https://github.com/sipeed/picoclaw/pull/3251), [#3228](https://github.com/sipeed/picoclaw/pull/3228) | Cost-sensitive users needing cache hit-rate visibility |

**Satisfaction signal:** Quick closure of #3255 and #3300 suggests responsive maintainers for messaging/platform bugs. Android and OAuth remain open frustrations.

---

## 8. Backlog Watch — Stale/Unanswered Items Needing Attention

| Item | Age | Type | Why It Matters |
|------|-----|------|----------------|
| [#1951](https://github.com/sipeed/picoclaw/pull/1951) | ~4 months | PR (open) | Installation scripts consolidation — reduces repo sprawl; blocked on cross-repo coordination |
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | ~7 weeks | Issue (closed, help-wanted) | Security-critical dependency upgrade; needs contributor or maintainer sprint |
| [#3280](https://github.com/sipeed/picoclaw/pull/3280) | ~1 week | PR (open, stale) | Auth reliability — affects all OAuth providers in headless envs; 4 fixes bundled |
| [#3279](https://github.com/sipeed/picoclaw/pull/3279) | ~1 week | PR (open, stale) | Summary hygiene — prevents tool-call noise in user-facing history |
| [#3251](https://github.com/sipeed/picoclaw/pull/3251) | ~2 weeks | PR (open, stale) | Observability — Anthropic cache metrics requested by operators |

**Recommendation:** Prioritize review of #3280 (auth), #3279 (summaries), and #3251 (metrics) — all are focused, low-risk fixes with clear user impact. Assign #3088 (vodozemac) to a security sprint or bounty.

---

*Digest generated from GitHub data as of 2026-07-29. All links point to live items on github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-29

---

## 1. Today's Overview

NanoClaw shows **healthy, steady maintenance velocity** with 10 PRs updated in the last 24 hours (4 merged/closed, 6 open) and 1 active issue. The project is actively addressing container runtime stability (zombie process reaping), configuration bugs (WEBHOOK_PORT precedence), database migration backfills, and developer tooling rot. A significant open PR (#3057) introduces a **dual-engine quota fallback (Claude → Codex)** that has been battle-tested in production since early July, signaling a strategic move toward multi-provider resilience. No new releases were cut today, but the volume of merged fixes suggests a patch release is imminent.

---

## 2. Releases

**No new releases published today.**  
The last release information is not provided in the data; however, 4 PRs were merged/closed in the last 24h, indicating a release candidate may be forming.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3060](https://github.com/nanocoai/nanoclaw/pull/3060) | **Fix (container)** | Adds `--init` to agent container spawn args so PID 1 reaps zombie processes; corrects docs. | **High** — eliminates orphaned processes in container runners, improves reliability for long-running agents. |
| [#1255](https://github.com/nanocoai/nanoclaw/pull/1255) | **Feature (provider)** | Adds MiniMax OAuth (Coding Plan) as alternative model provider with device-code PKCE flow, token polling, auto-refresh. | **Medium** — expands provider ecosystem; reduces Anthropic/Claude dependency. |
| [#2197](https://github.com/nanocoai/nanoclaw/pull/2197) | **Fix (update-nanoclaw)** | Guards merge state to prevent silent single-parent commits during upstream merges on forks. | **Medium** — protects customized forks from losing merge history and silently dropping changes. |
| [#1136](https://github.com/nanocoai/nanoclaw/pull/1136) | **Feature (update-nanoclaw)** | Adds auto-merge audit and container smoke test to `/update-nanoclaw` skill. | **Medium** — catches silent code drops during upstream merges; adds CI-like safety for fork sync. |

**Net progress:** Container runtime hardening, provider diversification, and fork-sync safety all advanced today.

---

## 4. Community Hot Topics

| Item | Activity | Signal |
|------|----------|--------|
| **Issue [#1350](https://github.com/nanocoai/nanoclaw/issues/1350)** — *Add GitHub Copilot SDK as alternative AI backend* | 3 comments, 8 👍, open since 2026-03-22, updated today | **Strong community demand** for Copilot/GPT-4.1 support. Users want to avoid Anthropic lock-in and leverage existing GitHub Copilot subscriptions. |
| **PR [#3057](https://github.com/nanocoai/nanoclaw/pull/3057)** — *Dual-engine quota fallback: Claude→Codex overflow, handoff recaps, proactive quota warning* | 0 comments (but production-tested since 2026-07-06), open | **Strategic feature** — automatic provider failover on quota exhaustion, with migration (017) and per-agent-group config. Indicates roadmap direction: **multi-provider, quota-aware agent groups**. |

**Underlying need:** Users are hitting Claude quota limits in production and want seamless, transparent failover to alternative models (Codex, Copilot, MiniMax) without manual intervention.

---

## 5. Bugs & Stability — Reported/Fixed Today

| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **High** | Zombie processes in agent containers (PID 1 not reaping) | **Fixed** | [#3060](https://github.com/nanocoai/nanoclaw/pull/3060) (merged) |
| **Medium** | `WEBHOOK_PORT` from `.env` not honored; precedence broken | **Fixed** | [#3148](https://github.com/nanocoai/nanoclaw/pull/3148) (open, ready) |
| **Medium** | Destination reply context leaking across agents | **Fixed** | [#3147](https://github.com/nanoclaw/pull/3147) (open, ready) |
| **Medium** | Missing channel destinations for existing wirings (DB migration gap) | **Fixed** | [#3145](https://github.com/nanocoai/nanoclaw/pull/3145) (open, migration 021) |
| **Low** | Dev script `test-v2-host.ts` rotted against current architecture | **Fixed** | [#3146](https://github.com/nanocoai/nanoclaw/pull/3146) (open) |
| **Low** | Resolved approval cards lose title/request details on timeout/decision | **Fixed** | [#3143](https://github.com/nanocoai/nanoclaw/pull/3143) (open) |

**Stability note:** 6 bug-fix PRs opened today (5 labeled `Fix`), 1 merged. The team is actively cleaning up config precedence, DB integrity, and UI state bugs — a good sign for release readiness.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **GitHub Copilot SDK backend** | Issue [#1350](https://github.com/nanocoai/nanoclaw/issues/1350) (8 👍) | **High** — strong community traction, aligns with multi-provider strategy. |
| **Dual-engine quota fallback (Claude → Codex)** | PR [#3057](https://github.com/nanocoai/nanoclaw/pull/3057) (prod-tested) | **Very High** — already in production, includes migration, config, and handoff UX. |
| **MiniMax OAuth provider** | PR [#1255](https://github.com/nanocoai/nanoclaw/pull/1255) (merged) | **Done** — landed today, expands provider matrix. |
| **Auto-merge audit + smoke test for fork sync** | PR [#1136](https://github.com/nanocoai/nanoclaw/pull/1136) (merged) | **Done** — improves maintainer/contributor experience. |

**Predicted next version (v0.x patch/minor):** Will likely include quota fallback (#3057), WEBHOOK_PORT fix (#3148), DB migration 021 (#3145), and approval card UX fix (#3143). Copilot SDK (#1350) may follow in a subsequent minor.

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence |
|------------------------|----------|
| **Claude quota exhaustion in production** | PR #3057 explicitly built for “live WhatsApp deployment” since July 6; users need automatic failover. |
| **Provider lock-in (Anthropic only)** | Issue #1350 (8 👍) requests Copilot/GPT-4.1; PR #1255 adds MiniMax as alternative. |
| **Fork sync silently drops changes** | PRs #2197, #1136 address real incidents where upstream merges deleted secrets/code without conflicts. |
| **Config precedence confusion (ENV vs .env)** | PR #3148 fixes WEBHOOK_PORT not reading `.env` — users expect standard NanoClaw config hierarchy. |
| **Dev tooling rot** | PR #3146 repairs scripts unused by CI — maintainers feel friction when running local tests. |

**Satisfaction signal:** Contributors are submitting production-hardened fixes (quota fallback, fork safety), indicating **trust in the codebase** but **frustration with single-provider limits and config ergonomics**.

---

## 8. Backlog Watch — Stale but Important

| Item | Age | Why It Matters |
|------|-----|----------------|
| **Issue [#1350](https://github.com/nanocoai/nanoclaw/issues/1350)** — Copilot SDK backend | Open since 2026-03-22 (4+ months) | High community interest (8 👍), no PR yet. Blocks users on GitHub Enterprise/Copilot plans. |
| **PR [#3057](https://github.com/nanocoai/nanoclaw/pull/3057)** — Dual-engine quota fallback | Open since 2026-07-15 (2 weeks), 0 comments | Large, production-tested feature awaiting review. Merge would unblock multi-provider roadmap. |
| **PR [#3146](https://github.com/nanocoai/nanoclaw/pull/3146)** — Repair rotted dev scripts | Open 1 day, but scripts predating migrations | Low visibility but high maintainer friction; should be merged quickly to unblock local dev. |

**Maintainer action recommended:** Prioritize review of #3057 (strategic) and #1350 (community demand). Assign triage for dev-script repair (#3146) to prevent further rot.

---

## Links Reference

- **Repository:** https://github.com/qwibitai/nanoclaw  
- **Issues:** https://github.com/nanocoai/nanoclaw/issues  
- **Pull Requests:** https://github.com/nanocoai/nanoclaw/pulls  

*Digest generated 2026-07-29 from GitHub API data (last 24h).*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-29

## 1. Today's Overview
IronClaw shows **high velocity** with 50 PRs and 9 issues updated in the last 24 hours, indicating an active development sprint. The project is deep in a **post-1.0.0 stabilization and architecture-refinement phase**: multiple large PRs (size XL) are restructuring core subsystems (process lifecycle, sandbox TLS, composition assembly, messaging framework, IronHub integration). No new releases were cut today, but a release PR (#5598) remains open with breaking changes across three crates. The epic **#6284 (error-recoverability endgame)** continues to drive cross-cutting fixes across the runtime, LLM client, and agent loop.

## 2. Releases
**No new releases published today.**  
The pending release PR **#5598** (open since 2026-07-03) proposes:
- `ironclaw_common`: 0.4.2 → 0.5.0 (**API breaking** — `failure` crate impl added, type now implements `Fail`)
- `ironclaw_safety`: 0.2.2 → 0.2.3 (API compatible)
- `ironclaw_skills`: 0.3.0 → 0.4.0 (**API breaking**)

> **Migration note**: Consumers of `ironclaw_common` and `ironclaw_skills` will need to update trait bounds and error-handling code. The release has not been merged; maintainers appear to be batching it with the current XL refactors.

## 3. Project Progress (Merged/Closed PRs Today)
15 PRs merged/closed in the last 24h. From the visible list, **#6816** (channels: centralize ingress, scope manifest commands) was closed today. The remaining 14 merged PRs are not individually listed in the top-20-by-comments view but are reflected in the high merge rate. Key advancement areas inferred from open XL PRs landing today:
- **Process lifecycle & DB**: #6696 collapses lifecycle state into row-native process journal (DB migration)
- **Sandbox security**: #6817 closes 4 TOCTOU escapes in local filesystem backend via fd-rooted traversal
- **Composition architecture**: #6691 reduces `ironclaw_reborn_composition` by 9,421 lines via focused builders
- **IronHub integration**: #6754 ports IronHub install flow to Reborn; #6780 adds deep-link register/install gateway
- **Messaging framework**: #6831 introduces host-owned standardized messaging ops with canonical JSON schemas
- **Error recoverability**: #6832 bounds recovery per RUN (not per stage) for epic #6284 WS9
- **WebUI design system**: #6836 extracts `@ironclaw/ui` workspace package

## 4. Community Hot Topics
| Item | Type | Comments | Signal |
|------|------|----------|--------|
| **[#6284](https://github.com/nearai/ironclaw/issues/6284)** | Issue (Epic) | 15 | **Highest engagement** — cross-team coordination on error-recoverability contract (survive, surface cause, model gets a turn, no silent failures). 10 days old, still active. |
| **[#6820](https://github.com/nearai/ironclaw/issues/6820)** | Issue | 2 | Trust-boundary issue: agent reaches for unsigned catalog URL when IronHub discovery disappoints. Found in live preview (PR #6780). |
| **[#6814](https://github.com/nearai/ironclaw/issues/6814)** | Issue | 1 | Regression: third-party skills still hit prompt-content denylist on "API key" in description (follow-up to #5169/#5258). Blocks user-authored skills on 1.0.0. |
| **[#6780](https://github.com/nearai/ironclaw/pull/6780)** | PR (XL) | — | IronHub deep-link register/install + private manifest source. Stacked on #6754; 32 files. High architectural impact. |
| **[#6696](https://github.com/nearai/ironclaw/pull/6696)** | PR (XL) | — | DB migration: collapse lifecycle state into process journal. Touches `db/postgres`, CI, docs, deps. Core infrastructure. |

**Underlying need**: The project is hardening **trust boundaries** (unsigned catalogs, denylist bypasses, TOCTOU) and **observability** (error-recoverability contract, logging for growth stats) simultaneously — signals a push toward production-grade multi-tenant readiness.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | **[#6814](https://github.com/nearai/ironclaw/issues/6814)** | Third-party skills with "API key" in description fail every run on 1.0.0 (denylist regression). User-facing blocker. | None yet |
| **High** | **[#6833](https://github.com/nearai/ironclaw/issues/6833)** | Notion tool install fails/hangs without clear errors. User-reported. | None yet |
| **High** | **[#6834](https://github.com/nearai/ironclaw/issues/6834)** | Slack setup fails on near.foundation account; auth flow incomplete. User-reported. | None yet |
| **High** | **[#6835](https://github.com/nearai/ironclaw/issues/6835)** | MCP `AuthRequired` classified as `Client` error, never raises re-auth gate. Auth failures silently misclassified. | None yet |
| **Medium** | **[#6821](https://github.com/nearai/ironclaw/issues/6821)** | IronHub search: free-text matches reported as complete catalog listing (3 tools vs 18 in catalog). Data integrity. | Related to #6780/#6754 |
| **Medium** | **[#6829](https://github.com/nearai/ironclaw/issues/6829)** | Telegram forum-topic delivery lacks `message_thread_id` coverage; replies land in wrong thread. Security/privacy risk. | None yet |
| **Fixed (PR open)** | **[#6817](https://github.com/nearai/ironclaw/pull/6817)** | 4 TOCTOU escapes in `DiskFilesystem` (pathname check + separate syscall). **PR open, fixes ready.** | #6817 |

> **Note**: #6817 is the only bug with an immediate fix PR. The user-facing installation/auth bugs (#6833, #6834, #6814) have no linked PRs yet.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Minimal info-level logging for growth/usage stats** | [#6837](https://github.com/nearai/ironclaw/issues/6837) (enhancement, epic) | High — explicit gap identified (0 `info!` calls in core crates) |
| **Standardized messaging framework** (16 core ops, canonical schemas, 11-code error taxonomy) | [#6831](https://github.com/nearai/ironclaw/pull/6831) | High — XL PR, host-owned, design spec complete |
| **IronHub deep-link register/install + private manifest** | [#6780](https://github.com/nearai/ironclaw/pull/6780) / [#6754](https://github.com/nearai/ironclaw/pull/6754) | High — stacked PRs, live preview tested |
| **WebUI design system as `@ironclaw/ui` workspace package** | [#6836](https://github.com/nearai/ironclaw/pull/6836) | Medium — supersedes #5563/#6830, new contributor |
| **TLS termination seam for sandbox egress proxy** | [#6740](https://github.com/nearai/ironclaw/pull/6740) | Medium — part of W6 sandbox work, dependency (#6723) merged |
| **Error-recoverability endgame** (model recovers from 100% of errors) | [#6284](https://github.com/nearai/ironclaw/issues/6284) | Ongoing — WS9 fix merged (#6832), audit continues |

**Predicted next-version themes**: Observability (logging), messaging standardization, IronHub GA, sandbox hardening, WebUI component library.

## 7. User Feedback Summary
| Pain Point | Source | Context |
|------------|--------|---------|
| **Notion tool install fails silently** | [#6833](https://github.com/nearai/ironclaw/issues/6833) | User navigates to install; process hangs/fails without clear error messaging. |
| **Slack setup broken on near.foundation** | [#6834](https://github.com/nearai/ironclaw/issues/6834) | Connection/auth flow incomplete; extension left unusable. |
| **Third-party skills blocked by "API key" denylist** | [#6814](https://github.com/nearai/ironclaw/issues/6814) | User-authored `SKILL.md` with "API key" in description kills every run on 1.0.0. |
| **IronHub search returns incomplete/misleading results** | [#6821](https://github.com/nearai/ironclaw/issues/6821) | Agent reports 3 tools (catalog has 18) or 21 skills (20 not catalog entries). |
| **Telegram forum replies leak to supergroup** | [#6829](https://github.com/nearai/ironclaw/issues/6829) | Missing `message_thread_id` causes wrong-thread delivery. |

**Satisfaction signal**: Users are hitting **integration rough edges** (Notion, Slack, IronHub, Telegram) and **skill-authoring friction** (denylist false positives). These are post-1.0.0 adoption blockers.

## 8. Backlog Watch (Stale/Needing Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| **[#5659](https://github.com/nearai/ironclaw/pull/5659)** | 24 days | **Production behavior change**: narrows tool-disclosure surface (3 leak vectors fixed), adds regression + trust-boundary tests. XL, low risk, core contributor. Stalled? |
| **[#5598](https://github.com/nearai/ironclaw/pull/5598)** | 26 days | **Release PR** with breaking changes in 2/3 crates. Blocked on XL refactors? |
| **[#6284](https://github.com/nearai/ironclaw/issues/6284)** | 10 days | Epic driving 9+ workstreams. WS9 fix merged (#6832), but audit boxes 4–11 remain. Cross-cutting. |
| **[#6696](https://github.com/nearai/ironclaw/pull/6696)** | 2 days | DB migration (lifecycle state → process journal). High risk, touches CI/docs/deps. Needs review. |
| **[#6691](https://github.com/nearai/ironclaw/pull/6691)** | 2 days | 9,421-line reduction in composition monolith. Architectural cleanup. Needs review. |
| **[#6740](https://github.com/nearai/ironclaw/pull/6740)** | 2 days | TLS termination seam for sandbox egress. Part of sandbox stack (slice 1 of 4). |

> **Maintainer attention recommended**: #5659 and #5598 are the oldest open PRs with production impact. #6284 epic coordination needs a visible tracker. The 4 XL PRs opened 2026-07-27/28 (#6696, #6691, #6740, #6754) represent a coordinated architecture push — review bandwidth may be the bottleneck.

---

**Overall Health**: 🟢 **Active / Hardening** — High PR throughput, focused on security, observability, and integration reliability. User-facing bugs accumulating; release cycle appears gated on XL refactors.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-29

## 1. Today's Overview
LobsterAI shows **moderate maintenance activity** with 4 PRs merged/closed and 3 issues updated in the last 24 hours. The merged PRs focus on **Windows installer hardening**, **OpenClaw runtime safety contracts**, **UI cleanup**, and **Skills backup reliability** — indicating a sprint targeting platform stability and security. No new releases were published. Three issues remain open, including two stale bugs (plugin ID mismatch, scheduled task creation) and a new question about Anthropic skill licensing.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2402](https://github.com/netease-youdao/LobsterAI/pull/2402) | `update`, `docs`, `main` | **Windows installer**: Reject HTTP redirects instead of trusting `response.url` | 🔒 Security hardening — prevents potential MITM/tampering during installer download |
| [#2400](https://github.com/netease-youdao/LobsterAI/pull/2400) | `build`, `docs`, `main`, `openclaw` | **OpenClaw runtime**: Enforce runtime/config safety-contract gate; retire `prompt-exposure-budget` as terminal kind | 🛡️ Architecture guard — ensures bundled runtime cannot run without LobsterAI's managed safety policy |
| [#2399](https://github.com/netease-youdao/LobsterAI/pull/2399) | `renderer` | **UI**: Hide "Sites" nav entry outside test mode | 🎨 UX cleanup — reduces noise for production users |
| [#2398](https://github.com/netease-youdao/LobsterAI/pull/2398) | `installer`, `windows` | **Skills backup**: Derive outcome from PowerShell helper exit codes (fix CRLF parsing bug) | 🐛 Bug fix — eliminates false "legacy-restore-backup-missing" degraded state on Windows |

**Net progress**: 4/5 PRs merged — strong closure rate. All merged PRs address **security, stability, or UX polish** with zero new features.

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#2401](https://github.com/netease-youdao/LobsterAI/issues/2401) | Issue | 1 comment, created today | **Licensing clarity** — User asks if Anthropic's official PDF/DOCS/PPTX/XLSX skills are used and whether they permit commercial use. Signals demand for **transparent skill provenance & licensing**. |
| [#1236](https://github.com/netease-youdao/LobsterAI/issues/1236) | Issue (stale) | 1 comment, updated today (orig. 2026-04-01) | **Plugin config hygiene** — `mcp-bridge` entry key ≠ manifest ID causes startup warnings every launch. Low-severity but high-visibility annoyance. |
| [#1233](https://github.com/netease-youdao/LobsterAI/pull/1233) | PR (stale) | Updated today (orig. 2026-04-01) | **Model provider UX** — Adds clickable official-site links & "Get API Key" shortcuts per provider, with i18n. Merges duplicate URL tables. **Ready for review** but stale for 4 months. |

**Analysis**: The fresh issue (#2401) reveals a **commercial-adoption blocker** — enterprises need skill licensing transparency. The stale items (#1236, #1233) represent **paper-cut debt** and a **polished UX improvement** awaiting maintainer bandwidth.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Medium** | [#2071](https://github.com/netease-youdao/LobsterAI/issues/2071) — Scheduled task creation fails (screenshot attached, v2026.5.27) | Open, stale (2 months) | ❌ No linked PR |
| **Low** | [#1236](https://github.com/netease-youdao/LobsterAI/issues/1236) — Plugin ID mismatch warning on every gateway restart | Open, stale (4 months) | ❌ No linked PR |
| **Low (fixed)** | [#2398](https://github.com/netease-youdao/LobsterAI/pull/2398) — Skills backup misreads PowerShell helper stdout (CRLF) → false degraded state | **Merged today** | ✅ Fixed in #2398 |

**Stability note**: Only 1 active bug with user impact (#2071). The plugin ID mismatch (#1236) is cosmetic but erodes trust in logs. No crashes or regressions reported today.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Model provider official links + "Get API Key" shortcuts** | [#1233](https://github.com/netease-youdao/LobsterAI/pull/1233) (PR ready, stale) | **High** — Complete, reviewed, only needs merge |
| **Skill licensing / provenance disclosure** | [#2401](https://github.com/netease-youdao/LobsterAI/issues/2401) (new issue) | **Medium** — May trigger docs/README update or skill manifest metadata |
| **Plugin config validation at startup** | [#1236](https://github.com/netease-youdao/LobsterAI/issues/1236) | **Low-Medium** — Easy fix (align entry key ↔ manifest ID), but stale |

**Prediction**: #1233 is the strongest candidate for next merge. #2401 may spawn a docs task. #1236 fix is trivial but unprioritized.

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Commercial-use uncertainty for built-in skills** | #2401: "Are pdf/docs/pptx/xlsx skills from Anthropic official? Can they be used commercially?" | 😟 Anxiety — blocker for enterprise adoption |
| **Noisy startup warnings** | #1236: "Every gateway restart logs config warning for mcp-bridge ID mismatch" | 😐 Annoyance — degrades perceived quality |
| **Scheduled tasks broken** | #2071: Screenshot of error creating timed task (v2026.5.27) | 😡 Frustration — core feature failure |
| **Installer trust issues** | #2402 merged: redirect-following fixed | 👍 Positive — security improvement noticed |

**Overall**: Users are **testing advanced features** (skills, scheduled tasks, multi-model) and hitting **polish gaps**. Security hardening (#2402, #2400) is invisible but appreciated.

## 8. Backlog Watch (Needs Maintainer Attention)
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#1233](https://github.com/netease-youdao/LobsterAI/pull/1233) | 4 months | **Polished UX feature** — provider links + API Key guidance + i18n, duplicate URL cleanup. Ready to merge. | **Merge** — low risk, high user value |
| [#1236](https://github.com/netease-youdao/LobsterAI/issues/1236) | 4 months | **Trivial fix** — align config entry key with plugin manifest ID. Eliminates 100% reproducible warning. | **Fix in 5 min** — assign to contributor or auto-fix via config schema |
| [#2071](https://github.com/netease-youdao/LobsterAI/issues/2071) | 2 months | **Core feature regression** — scheduled tasks fail. Screenshot provided, version pinned. | **Triage** — reproduce on v2026.5.27, label priority |

---

**Health Score**: 🟡 **Fair** — Good merge velocity on stability/security, but **stale backlog accumulating** (2 issues + 1 PR > 60 days). Commercial licensing question (#2401) is a new strategic signal. Recommend: merge #1233, fix #1236, triage #2071 this week.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-29

## 1. Today's Overview
Moltis shows **high development velocity** with 8 PRs updated in the last 24 hours (6 open, 2 merged), though only 1 issue was closed. No new releases were published. The merged PRs directly address the sole closed issue (#1111) — hiding archived cron sessions by default — and refine the ACP agent integration UX. Open PRs span major infrastructure: Slack Block Kit + acknowledgment phases, ACP stdio exposure, per-account operator gating, PWA push reliability, Langfuse/OTLP instrumentation, and a Terminal-Bench chat runner. The project is actively hardening multi-channel UX, observability, and developer tooling ahead of a likely feature-rich release.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#1172](https://github.com/moltis-org/moltis/pull/1172) | `fix(web): hide archived cron sessions by default` | Bug fix / UX | Resolves [#1111](https://github.com/moltis-org/moltis/issues/1111): applies the shared “archived-session” preference to the Cron tab, adds Show/Hide control, and includes a Playwright regression test. |
| [#1171](https://github.com/moltis-org/moltis/pull/1171) | `Move ACP selection into the chat model picker` | UX / Refactor | Consolidates installed ACP clients into the composer model selector, removes legacy header selector and redundant “Built-in LLM agent” option, preserves per-session binding and auto-binding logic. |

**Net effect**: The cron-archiving visibility bug is fixed with test coverage; ACP agent discovery is now unified with model selection, reducing UI surface and cognitive load.

## 4. Community Hot Topics — Most Active PRs (by recency & scope)

| PR | Author | Area | Why it matters |
|----|--------|------|----------------|
| [#1166](https://github.com/moltis-org/moltis/pull/1166) | penso | Slack | Per-message acknowledgment reactions, phase feedback, Block Kit rendering, reconnect supervision — makes Slack bots feel responsive under real network conditions. |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | penso | Security / Channels | Separates *access* from *privilege* with explicit per-account `operators` list; gates `/sh` and host tools across commands, callbacks, queue replay, external triggers. |
| [#1169](https://github.com/moltis-org/moltis/pull/1169) | penso | ACP / Integration | Exposes Moltis as an ACP agent over stdio via `moltis acp`; enforces session isolation, bounded framing, final-text reconciliation, deterministic shutdown. |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | penso | Observability | Backend-neutral instrumentation, Langfuse v4 export, OTLP backends, end-user reaction feedback; captures streaming/non-streaming parity, provider failover, cache-aware tokens, reasoning traces. |
| [#1173](https://github.com/moltis-org/moltis/pull/1173) | penso | PWA / Notifications | Reliable, private, non-disruptive push: re-alerts for newer messages, generic titles, stripped formatting, app-wide deduplication across tabs/devices. |
| [#1175](https://github.com/moltis-org/moltis/pull/1175) | choskeli | CLI / Testing | `moltis-ctl chat` + `chat-history` over authenticated RPC; Harbor/Terminal-Bench wrapper with per-task isolation; includes contract test. |

**Underlying needs**: Production-grade Slack UX, least-privilege channel security, first-class ACP interoperability, vendor-neutral observability, and reliable mobile/desktop notifications — all signals of a platform maturing for team and enterprise adoption.

## 5. Bugs & Stability

| Issue/PR | Severity | Status | Fix PR |
|----------|----------|--------|--------|
| [#1111](https://github.com/moltis-org/moltis/issues/1111) — Archiving a cron session has no visible effect | Low (UX) | **Closed** | Fixed by [#1172](https://github.com/moltis-org/moltis/pull/1172) (merged) |

No new bugs, crashes, or regressions reported in the last 24h. The only recent bug is resolved with regression test.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| Slack Block Kit + phased acknowledgments | [#1166](https://github.com/moltis-org/moltis/pull/1166) | High — builds on merged #1165, near-complete |
| Per-account operator gating for privileged tools | [#1170](https://github.com/moltis-org/moltis/pull/1170) | High — security hardening, broad scope |
| ACP stdio agent exposure (`moltis acp`) | [#1169](https://github.com/moltis-org/moltis/pull/1169) | High — default-on command, integration focus |
| Langfuse v4 / OTLP instrumentation + user feedback | [#1174](https://github.com/moltis-org/moltis/pull/1174) | High — backend-neutral, export-ready |
| PWA push reliability & privacy | [#1173](https://github.com/moltis-org/moltis/pull/1173) | Medium-High — UX polish, cross-device |
| Terminal-Bench / `moltis-ctl chat` runner | [#1175](https://github.com/moltis-org/moltis/pull/1175) | Medium — developer tooling, niche but CI-relevant |

**Prediction**: The next release will likely bundle Slack Block Kit, ACP stdio, operator gating, and observability — a “platform readiness” milestone.

## 7. User Feedback Summary
- **Pain point resolved**: Cron session archiving was invisible (#1111) — now hidden by default with toggle.
- **No new user-reported issues** in the last 24h.
- **Implicit demand** from PR scope: teams need Slack to feel “alive” (ack reactions), admins need least-privilege channel control, integrators want ACP as a first-class transport, and operators want vendor-neutral telemetry + user feedback loops.

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why it matters |
|------|-----|----------------|
| [#1166](https://github.com/moltis-org/moltis/pull/1166) — Slack Block Kit + ack phases | 5 days open | Large UX surface; needs review for Block Kit compatibility, reconnect edge cases |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) — Operator gating | 3 days open | Security boundary change; requires thorough review of all command/callback paths |
| [#1169](https://github.com/moltis-org/moltis/pull/1169) — ACP stdio agent | 3 days open | New protocol exposure; session isolation & framing must be airtight |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) — Instrumentation + Langfuse/OTLP | 2 days open | Cross-cutting; affects all chat paths, token accounting, provider failover attribution |
| [#1173](https://github.com/moltis-org/moltis/pull/1173) — PWA push reliability | 3 days open | User-facing notification UX; deduplication logic across tabs/devices is subtle |
| [#1175](https://github.com/moltis-org/moltis/pull/1175) — Terminal-Bench runner | 1 day open | New CLI surface + auth RPC; contract test included but needs integration review |

**Recommendation**: Prioritize review of #1170 (security), #1169 (protocol correctness), and #1174 (observability breadth) — these have the widest blast radius.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-07-29

---

## 1. Today's Overview
CoPaw shows **high development velocity** with 50 PRs and 9 issues updated in the last 24 hours. The project is in active feature development (Chrome extension, desktop automation, checkpointing) while simultaneously addressing a cluster of **critical stability regressions** in v2.0.1: MCP session recovery, skill-tag persistence, `agent.json` corruption on Windows, context-compression role-mismatch with DeepSeek, and a broken Windows installer. Eighteen PRs were merged/closed today, indicating maintainers are clearing review backlog ahead of a likely v2.1 release.

---

## 2. Releases
**No new releases published today.** Current latest remains **v2.0.1**. Several merged PRs (#6479, #6456, #6489, #6532, #6330) contain user-facing fixes and infrastructure improvements that will likely ship in v2.1.0.

---

## 3. Project Progress — Merged / Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#6479](https://github.com/agentscope-ai/QwenPaw/pull/6479) | **Fix** | Sync MiniMax model baseline with current platform lineup | Restores correct model picker & multimodal prober for MiniMax |
| [#6456](https://github.com/agentscope-ai/QwenPaw/pull/6456) | **Feature** | Visual Compact — selective history/tool-result compression with profitability gating & exact-content recovery | Major context-management upgrade; reduces token spend on long sessions |
| [#6489](https://github.com/agentscope-ai/QwenPaw/pull/6489) | **Test/Infra** | Driver unit tests + enforce `fail_under=50` coverage gate | Raises CI quality floor; prevents coverage regressions |
| [#6532](https://github.com/agentscope-ai/QwenPaw/pull/6532) | **Fix** | Temporarily disable plugin max-version check for 2.1.0b1 | Unblocks plugin ecosystem during pre-release |
| [#6330](https://github.com/agentscope-ai/QwenPaw/pull/6330) | **Website** | Fix GA tracking, improve nav/downloads UI, hardcode hero version, expand blog | Improves project discoverability & download experience |
| [#6517](https://github.com/agentscope-ai/QwenPaw/pull/6517) | **Feature** | Add skill import-from-URL page with examples | Enhances skill distribution UX |
| [#3332](https://github.com/agentscope-ai/QwenPaw/pull/3332) | **Website** | Contributors page style fix | Polish |

---

## 4. Community Hot Topics (Most Discussed)
| Item | Comments | Core Need |
|------|----------|-----------|
| [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) **MCP session not auto-recovering after server restart** | 3 | **Reliability**: Users expect transparent reconnection for remote MCP (streamable_http); currently requires manual `list mcp` |
| [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) **Skill tags lost on restart (regression of #3270)** | 2 | **Data integrity**: Tags persist in `skill.json` but dropped during manifest reconciliation |
| [#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520) **Systemic `agent.json` corruption (BOM, missing quotes, double-encoding)** | 2 | **Windows stability**: Corruption across 20+ fields causes total config failure |
| [#6157](https://github.com/agentscope-ai/QwenPaw/pull/6157) **Chrome extension plugin (install, pairing, native messaging)** | — | **Extensibility**: Long-awaited browser-control layer; depends on #6276 (unified browser) |
| [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) **Native desktop GUI automation (Windows/macOS, accessibility-first)** | — | **Agent capability**: Computer-use tool for host desktop control |

*PR comment counts not exposed in feed; issue comment counts used as proxy.*

---

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#6534](https://github.com/agentscope-ai/QwenPaw/issues/6534) Windows NSIS installer false-positive “still running” → install impossible | Open | — |
| **Critical** | [#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520) `agent.json` systemic corruption on Windows (BOM, quotes, encoding) | Open | [#6528](https://github.com/agentscope-ai/QwenPaw/pull/6528) (open) |
| **High** | [#6541](https://github.com/agentscope-ai/QwenPaw/issues/6541) Scroll context compression injects `[context compressed]` as `role=user` → DeepSeek `MODEL_EXECUTION_ERROR` | Open | — |
| **High** | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) MCP `streamable_http` session not auto-recovered after server restart | Open | — |
| **High** | [#6529](https://github.com/agentscope-ai/QwenPaw/issues/6529) ACP `new_session` missing `models` field → external clients can’t discover models | Open | [#6531](https://github.com/agentscope-ai/QwenPaw/pull/6531) (open) |
| **Medium** | [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) Skill tags disappear on restart (regression) | Open | — |
| **Medium** | [#6533](https://github.com/agentscope-ai/QwenPaw/issues/6533) `/mission` command `TypeError` (unexpected `verification_instructions` arg) | Open | — |
| **Medium** | [#6474](https://github.com/agentscope-ai/QwenPaw/issues/6474) `view_video` reports success but video DataBlock never reaches LLM | **Closed** | — (architectural gap) |
| **Medium** | [#6542](https://github.com/agentscope-ai/QwenPaw/issues/6542) Crash loses last N conversation turns (JSONL not real-time flushed) | Open | — |

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Auto-save / checkpointing for conversation history** | [#6542](https://github.com/agentscope-ai/QwenPaw/issues/6542) (user pain) + [#6269](https://github.com/agentscope-ai/QwenPaw/pull/6269) (workspace checkpoint PR) | **High** — PR #6269 implements shadow-Git checkpoints; strong alignment |
| **Per-session model overrides** | [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) (open PR, opt-in) | **High** — Near completion, first-time contributor |
| **Safe provider model discovery** | [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) (infra + first integrations) | **High** — Foundational for model picker UX |
| **User-context transparent pass-through (Chat API → Agent → Tool → MCP → Skill CLI)** | [#6525](https://github.com/agentscope-ai/QwenPaw/pull/6525) | **Medium** — Advanced multi-tenant feature |
| **Background tool-call offload with dual-deadline architecture** | [#6151](https://github.com/agentscope-ai/QwenPaw/pull/6151) | **Medium** — Fixes #6056 regressions |
| **Cancellation-safe lifecycle hooks (`ON_CANCEL`)** | [#6527](https://github.com/agentscope-ai/QwenPaw/pull/6527) | **Medium** — Improves crash resilience |
| **Chrome extension / native desktop automation** | [#6157](https://github.com/agentscope-ai/QwenPaw/pull/6157), [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) | **Low–Medium** — Large surface, likely post-2.1 |

---

## 7. User Feedback Summary
| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Installer broken on clean Windows machines** | [#6534](https://github.com/agentscope-ai/QwenPaw/issues/6534) — NSIS detects own process | All new Windows installs |
| **Config corruption kills agent** | [#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520) — 20+ fields corrupted, BOM/encoding issues | Windows users, sync-tool users |
| **Crash = lost conversation** | [#6542](https://github.com/agentscope-ai/QwenPaw/issues/6542) — JSONL not fsynced | Console users, long sessions |
| **MCP remote servers fragile** | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) — No auto-reconnect | Enterprise/remote MCP users |
| **Skill tags not persisted** | [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) — Regression of fixed #3270 | Power users organizing skills |
| **DeepSeek + context compression = hard error** | [#6541](https://github.com/agentscope-ai/QwenPaw/issues/6541) — Role mismatch | DeepSeek/OpenAI-compat users |
| **ACP clients blind to models** | [#6529](https://github.com/agentscope-ai/QwenPaw/issues/6529) — `new_session` lacks `models` | Multica, Zed, OpenCode integrators |

**Positive signals**: Visual Compact (#6456), MiniMax sync (#6479), Driver test coverage (#6489) show investment in core quality.

---

## 8. Backlog Watch — Stale / Needs Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#6157](https://github.com/agentscope-ai/QwenPaw/pull/6157) Chrome extension plugin | 14 days | Blocks browser-control feature; depends on #6276 |
| [#6151](https://github.com/agentscope-ai/QwenPaw/pull/6151) Background tool-call offload refactor | 14 days | Fixes three regressions from #6056 |
| [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) Native desktop GUI automation | 5 days | Large surface; needs security & accessibility review |
| [#6269](https://github.com/agentscope-ai/QwenPaw/pull/6269) Workspace checkpoint management | 9 days | Directly addresses #6542 crash-loss pain |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) Safe model discovery infra | 8 days | Unblocks dynamic model pickers |
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) Per-session model overrides | 17 days | First-time contributor; near-ready |
| [#6487](https://github.com/agentscope-ai/QwenPaw/pull/6487) Restrict `import-local` source path (security) | 2 days | Prevents directory exfiltration — **security-relevant** |

---

**Health Indicator**: 🟡 **Caution** — High feature throughput but v2.0.1 has multiple user-facing regressions (installer, config corruption, MCP, skill tags, DeepSeek compression). Critical fixes (#6528, #6531, #6540) are open; recommend prioritizing these for a **v2.0.2 hotfix** before v2.1 feature release.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-07-29

## 1. Today's Overview
ZeptoClaw shows **minimal active development** in the last 24 hours. Only two Dependabot-generated pull requests were updated—one closed, one open—both targeting the Docker base image's Rust toolchain (1.95 → 1.96 → 1.97). No human-authored issues, feature work, or bug fixes appeared. The project remains in a **maintenance-only holding pattern** with no new releases since the last digest.

## 2. Releases
**No new releases** published today or in the recent window.

## 3. Project Progress
| PR | Status | Scope | Notes |
|----|--------|-------|-------|
| [#613](https://github.com/qhkm/zeptoclaw/pull/613) | **Closed** | Docker: `rust:1.95-slim-trixie` → `1.96-slim-trixie` | Merged by dependabot[bot]; routine toolchain bump. |
| [#649](https://github.com/qhkm/zeptoclaw/pull/649) | **Open** | Docker: `rust:1.95-slim-trixie` → `1.97-slim-trixie` | Awaiting CI pass / maintainer review; supersedes #613. |

No feature development, refactors, or bug fixes landed today.

## 4. Community Hot Topics
**None.** Zero human-authored issues or PRs updated in the last 24h; both PRs are automated dependency updates with no comments or reactions.

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.**  
No open issues exist in the tracker at all (total issues = 0).

## 6. Feature Requests & Roadmap Signals
**No feature requests or roadmap signals detected.**  
The absence of issues/PRs beyond automated dependency bumps suggests either:
- The project is feature-complete for current maintainers/users, or
- Community engagement has dropped below visible threshold.

## 7. User Feedback Summary
**No user feedback captured today.**  
With zero issues and zero non-bot PRs, there are no pain points, use-case reports, or satisfaction signals to summarize.

## 8. Backlog Watch
| Item | Age | Type | Why It Matters |
|------|-----|------|----------------|
| [PR #649](https://github.com/qhkm/zeptoclaw/pull/649) | <1 day | Dependency update | Latest Rust 1.97 Docker image; should be validated & merged to keep CI current. |
| *(No stale human issues/PRs)* | — | — | The tracker is empty; no long-running items require triage. |

---

**Health Indicator**: 🟡 **Low activity / maintenance-only** — Automated dependency updates are flowing, but zero human-driven work in 24h. Consider whether the project needs a maintainer call for new contributors or a roadmap refresh.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-29

## 1. Today's Overview
ZeroClaw shows **high contributor velocity** with **50 active pull requests** updated in the last 24 hours, but **zero merges** — indicating a review bottleneck or deliberate staging. Two new architectural RFCs (#9487, #9488) signal a push to re-centralize conversation lifecycle in `zeroclaw-runtime` and unify attachment handling across web and channel surfaces. No releases were cut today. The project is in a **heavy refactoring/architectural hardening phase** with emphasis on security (timing attacks, sandbox nesting), reliability (cron timeouts, offset handling), and provider compatibility.

## 2. Releases
**No new releases today.**

## 3. Project Progress
**No PRs were merged or closed today.** All 50 updated PRs remain open. Key workstreams advancing in review:

| Area | PR | Status | Summary |
|------|-----|--------|---------|
| **Security** | [#9110](https://github.com/zeroclaw-labs/zeroclaw/pull/9110) | Open | Lark: constant-time `verification_token` comparison (timing attack fix) |
| **Security** | [#9402](https://github.com/zeroclaw-labs/zeroclaw/pull/9402) | Open, `status:accepted` | Prevent Docker sandbox inside Docker runtime (nested container escape risk) |
| **Reliability** | [#9314](https://github.com/zeroclaw-labs/zeroclaw/pull/9314) | Open, `priority:p1` | Telegram: advance long-poll offset only after successful delivery/skip |
| **Reliability** | [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | Open, `priority:p1` | Cron: wall-clock timeout on agent jobs to release SQLite locks |
| **Performance** | [#9208](https://github.com/zeroclaw-labs/zeroclaw/pull/9208) | Open | Eliminate per-iteration tool-schema deep clones in agent loop |
| **Architecture** | [#9525](https://github.com/zeroclaw-labs/zeroclaw/pull/9525) | Open | Split history for `before_llm_call` hook (PR-A of RFC #7822) |
| **Provider Compat** | [#9404](https://github.com/zeroclaw-labs/zeroclaw/pull/9404) | Open, `status:accepted` | Accept `data.choices` wrapped responses from compatible providers |
| **Docs** | [#9242](https://github.com/zeroclaw-labs/zeroclaw/pull/9242) | Open | End-to-end Telegram setup guide |

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Analysis |
|------|------|----------|-----|----------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | Issue (RFC) | 3 | 0 | **Runtime-owned sessions**: Proposes making `zeroclaw-runtime` the single owner of conversation execution; WS, dashboard, channels, ACP become transport adapters. High risk, architectural pivot. |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | Issue (RFC) | 3 | 0 | **Unified attachment architecture**: Single attachment model for web chat + all channels. Drafted with Codex, sponsored by @NiuBlibing. Complements #9487. |

*Both RFCs are early (created 2026-07-28), tagged `needs-author-action`, `risk:high`, and `domain:architecture` — indicating they require maintainer sponsorship and design consensus before implementation.*

## 5. Bugs & Stability
**Ranked by severity (from labels `risk:high` + `priority:p1`):**

| Severity | Bug | PR Fix | Status |
|----------|-----|--------|--------|
| **Critical** | Telegram long-poll offset advanced before delivery → message loss on transient failure | [#9314](https://github.com/zeroclaw-labs/zeroclaw/pull/9314) | Open, `p1`, `risk:high` |
| **Critical** | Cron agent jobs hang indefinitely → SQLite `locked_at` never released | [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | Open, `p1`, `risk:high` |
| **Critical** | Lark `verification_token` compared with `==` → timing attack | [#9110](https://github.com/zeroclaw-labs/zeroclaw/pull/9110) | Open, `risk:high` |
| **Critical** | Docker sandbox selected inside Docker runtime → nested container escape risk | [#9402](https://github.com/zeroclaw-labs/zeroclaw/pull/9402) | Open, `p1`, `status:accepted`, `risk:high` |
| **High** | WeChat sync cursor persisted before enqueue → message loss on crash | [#9313](https://github.com/zeroclaw-labs/zeroclaw/pull/9313) | Open, `p1`, `risk:high` |
| **High** | Per-iteration tool-schema deep clones in agent loop → CPU/memory pressure | [#9208](https://github.com/zeroclaw-labs/zeroclaw/pull/9208) | Open, `risk:high`, `size:XL` |
| **Medium** | Telegram unauthorized media senders silently dropped | [#9321](https://github.com/zeroclaw-labs/zeroclaw/pull/9321) | Open, `p2`, `risk:medium` |
| **Medium** | ZeroCode transient frames render full history → UI lag | [#9317](https://github.com/zeroclaw-labs/zeroclaw/pull/9317) | Open, `p2`, `risk:medium` |

*All bug-fix PRs are open and tagged `needs-author-action` — awaiting review/approval.*

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Runtime-owned conversation sessions + transport adapters** | RFC [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | Medium — high architectural impact, needs consensus |
| **Unified attachment model (web + channels)** | RFC [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | Medium — complements #9487, same sponsor |
| **Declarative skill auto-activation (triggers, provider switch, image-turn blocking)** | PR [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) | High — large `size:XL`, active since Jul 11, `needs-author-action` |
| **Signal "Note to Self" sync message support** | PR [#9326](https://github.com/zeroclaw-labs/zeroclaw/pull/9326) | High — `p2`, `size:L`, straightforward channel enhancement |
| **`before_llm_call` hook (split history PR-A)** | PR [#9525](https://github.com/zeroclaw-labs/zeroclaw/pull/9525) | High — behavioral-equivalence refactor, enables RFC #7822 |
| **OAuth refresh retry sharing across providers** | PR [#9400](https://github.com/zeroclaw-labs/zeroclaw/pull/9400) | High — `status:accepted`, `p3`, clean refactor |

## 7. User Feedback Summary
*No direct user issues/comments in the last 24h beyond RFC discussions.* Indirect signals from PR activity:

| Pain Point | Evidence |
|------------|----------|
| **Telegram reliability** | 3 high-priority fixes in 24h (#9313, #9314, #9321) — offset handling, cursor persistence, unauthorized media |
| **Cron job hangs** | #9320 adds wall-clock timeout — users likely experiencing stuck scheduled agents |
| **Web UI performance** | #9317 fixes ZeroCode viewport rendering — streaming/transient frames causing lag |
| **Provider compatibility** | #9404 adds `data.choices` parsing — users hitting non-standard compatible APIs |
| **Setup friction** | #9242 writes full Telegram guide — generated examples insufficient |

## 8. Backlog Watch
**Long-open, high-impact items needing maintainer attention:**

| Item | Age | Blockers | Why It Matters |
|------|-----|----------|----------------|
| [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) | 18 days | `needs-author-action`, `size:XL`, `risk:high` | Declarative skills — major UX feature, touches agent, channels, runtime |
| [#8964](https://github.com/zeroclaw-labs/zeroclaw/pull/8964) | 18 days | `needs-author-action`, `risk:medium` | Telegram scratchpad leak — user-visible reasoning artifacts |
| [#9208](https://github.com/zeroclaw-labs/zeroclaw/pull/9208) | 9 days | `needs-author-action`, `size:XL`, `risk:high` | Tool-schema clone elimination — perf critical for long-running agents |
| [#9203](https://github.com/zeroclaw-labs/zeroclaw/pull/9203) | 9 days | `needs-author-action`, `risk:high` | Authenticated SOP fan-in — gateway security surface |
| [#9229](https://github.com/zeroclaw-labs/zeroclaw/pull/9229) | 8 days | `needs-author-action`, `size:L`, `risk:high` | Interactive Ctrl+C state machine — CLI reliability |

---

**Health Indicators**
- 🔴 **Merge throughput**: 0/50 PRs merged today — review capacity saturated
- 🟡 **RFC velocity**: 2 new architectural RFCs in 24h — design activity high, but no implementation yet
- 🟢 **Security hygiene**: 3 timing-attack/nesting fixes in flight, 1 accepted
- 🟡 **Docs investment**: 2 guides/PR docs updated — onboarding improving

**Recommendation**: Prioritize merging the 4 `priority:p1` + `risk:high` bug fixes (#9314, #9320, #9402, #9313) to unblock stability, then allocate review bandwidth to the two RFCs for architectural direction.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*