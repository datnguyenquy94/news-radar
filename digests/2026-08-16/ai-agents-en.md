# OpenClaw Ecosystem Digest 2026-08-16

> Issues: 286 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-16 01:47 UTC

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

# OpenClaw Project Digest — 2026-08-16

## 1. Today's Overview
OpenClaw shows **high velocity with significant technical debt surfacing**: 286 issues and 500 PRs updated in 24 hours indicates intense active development. The v2026.8.1-beta.2 release shipped secret egress host binding and GPT-5.6 Ultra runtime switching. However, the issue backlog reveals systemic stability concerns — memory leaks, session state corruption, compaction failures, and silent data loss — many tagged P1 with "clawsweeper-recovery-stuck" labels suggesting automated remediation is stalled. PR activity is heavily UI-focused (sidebar, chat header, session cards) while core gateway bugs remain open.

## 2. Releases
### v2026.8.1-beta.2 — OpenClaw 2026.8.1-beta.2
**Highlights:**
- **Secret egress host binding** — Each shared-store secret now bound to exact HTTPS destination hosts across CLI, Gateway RPC, and Control UI; unbound sentinel substitution fails closed before plaintext egress. (Thanks @shakkernerd)
- **GPT-5.6 Ultra and runtime switching** — Support for dynamic model runtime switching.

**Migration Notes:** No breaking changes documented in release notes. Secret binding is a security hardening that should be transparent unless custom secret stores were used.

[Release Link](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1-beta.2)

---

## 3. Project Progress (Merged/Closed PRs Today)
50 PRs merged/closed in last 24h. Notable completions:

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#119700](https://github.com/openclaw/openclaw/pull/119700) | fix(ci): avoid false Crabbox auth failures during readiness | CI/Security | Reduces flaky auth failures in managed provider readiness checks |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | feat(security): require acknowledgement for install policy warnings | Security/CLI | Adds interactive acknowledgement for suspicious plugin/skill installs |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | feat(ui): review install policy warnings | UI/Security | Control UI review flow for install-policy warnings with deliberate continuation |
| [#124334](https://github.com/openclaw/openclaw/pull/124334) | fix(gateway): prevent idle CPU spikes on multi-agent hosts | Gateway/Performance | Fixes 100-140% idle CPU and 1.8-2.7GB RSS on 11-agent installations (strace: 27,680 syscalls/sec) |

**Pattern:** Security hardening (install policy), CI reliability, and a critical gateway performance fix landed today. UI polish PRs dominate open queue.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

### Top Issues by Comment Count
| Issue | Comments | 👍 | Labels | Core Problem |
|-------|----------|-----|--------|--------------|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 29 | 2 | P1, data-loss, message-loss, clawsweeper-recovery-stuck | **Subagent completion silently lost** — no retry, notification, or auto-restart on timeout |
| [#86684](https://github.com/openclaw/openclaw/issues/86684) | 12 | 1 | P1, regression, clawsweeper-recovery-stuck | **sessions_yield compacts parent branch at low context** (65k/1.05M) during subagent wake |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | 10 | 1 | P1, crash-loop | **Gateway heap grows to 1073MB+ at idle on macOS** — cron jobs silently fail under memory pressure |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | 10 | 3 | P2, auth-provider | **Fully dynamic model discovery** for OpenRouter + fast-moving catalogs |
| [#50165](https://github.com/openclaw/openclaw/issues/50165) | 8 | 0 | P2, session-state | **Subagents appear completed before delegated work finishes** — unreliable task state |

**Underlying Needs:** 
- **Reliability over features** — Multiple P1 data-loss/silent-failure bugs with "clawsweeper-recovery-stuck" suggest automated fix pipeline is failing
- **Memory/GC stability** — Gateway heap growth, compaction timeouts, and OOM-silent-failures are recurring themes
- **Model ecosystem agility** — Dynamic model discovery (#10687) and compaction threshold relativity (#87136) reflect pain from static configs

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 Critical (P0/P1 — Data Loss, Crash Loops, Silent Failures)
| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) Subagent completion silently lost | P1, data-loss, message-loss | Open, 5mo old | No (clawsweeper-recovery-stuck) |
| [#91931](https://github.com/openclaw/openclaw/issues/91931) Preseeded SOUL.md auto-completes bootstrap, deletes BOOTSTRAP.md | P1, data-loss | Open | Linked PR open |
| [#92186](https://github.com/openclaw/openclaw/issues/92186) Foreground reply fence cancels delivery to earlier concurrent messages | P1, message-loss | Open | No |
| [#53008](https://github.com/openclaw/openclaw/issues/53008) Memory compaction blocks main lane 10+ min, bot unresponsive | P1, message-loss | Open | No |
| [#94229](https://github.com/openclaw/openclaw/issues/94229) Plugin state SQLite corruption — "session file changed while embedded prompt lock released" | P0, data-loss | Open | No |

### 🟠 High (P1 — Memory, Regression, Crash)
| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#87109](https://github.com/openclaw/openclaw/issues/87109) Gateway heap 1073MB+ idle, cron silent fail | P1, crash-loop | Open | No |
| [#86684](https://github.com/openclaw/openclaw/issues/86684) sessions_yield compacts parent at low context | P1, regression | Open | No |
| [#95553](https://github.com/openclaw/openclaw/issues/95553) Preflight compaction hard-capped at ~60s, ignores timeoutSeconds | P1, session-state | Open | No |
| [#45224](https://github.com/openclaw/openclaw/issues/45224) Unhandled Playwright assertion crashes Gateway | P1, crash-loop | Open | No |
| [#123073](https://github.com/openclaw/openclaw/issues/123073) Dev-channel update fails: EUNSUPPORTEDPROTOCOL (npm vs pnpm workspace:*) | P1, ux-friction | Open, 3 days old | No |

### 🟡 Medium (P2 — Session State, UX, Compatibility)
| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#50165](https://github.com/openclaw/openclaw/issues/50165) Subagents appear complete before work finishes | P2, session-state | Open | No |
| [#48810](https://github.com/openclaw/openclaw/issues/48810) Compaction retry creates orphan fork in parentId chain | P2, regression | Open | No |
| [#82662](https://github.com/openclaw/openclaw/issues/82662) Isolated cron agentTurn fails "setup timed out before runner start" | P2, regression | Open | No |
| [#91223](https://github.com/openclaw/openclaw/issues/91223) Active memory injection breaks prompt cache hit rate 99.9% → 22% | P2, other | Open | No |
| [#74378](https://github.com/openclaw/openclaw/issues/74378) CLI commands remain alive as node.exe on Windows | P2, regression | Open | No |

**Pattern:** 15+ P1/P0 bugs with "clawsweeper-recovery-stuck" label — automated remediation pipeline appears broken. No fix PRs linked for most critical items.

---

## 6. Feature Requests & Roadmap Signals

### High-Engagement Feature Requests
| Issue | Comments | 👍 | Signal |
|-------|----------|-----|--------|
| [#10687](https://github.com/openclaw/openclaw/issues/10687) Fully dynamic model discovery (OpenRouter+) | 10 | 3 | **Strong** — Static catalog blocks fast-moving provider ecosystems |
| [#95279](https://github.com/openclaw/openclaw/issues/95279) Trusted inbound-decoration contract for consumers | 5 | 4 | **Strong** — Security/observability need: strip/dedup without forgeable heuristics |
| [#60572](https://github.com/openclaw/openclaw/issues/60572) Multi-slot memory architecture | 6 | 3 | **Medium** — Architectural: replace single memory slot with purpose-specific layers |
| [#26037](https://github.com/openclaw/openclaw/issues/26037) Ali Bailian coding plan support (thinking/reasoning) | 6 | 4 | **Regional** — Chinese provider integration demand |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) Per-model usage logging for cost tracking | 8 | 1 | **Medium** — Observability gap: no aggregated usage view |
| [#88154](https://github.com/openclaw/openclaw/issues/88154) Slack Modal support for interactive workflows | 8 | 1 | **Medium** — Channel expansion: structured input beyond message prompts |
| [#82450](https://github.com/openclaw/openclaw/issues/82450) Linear persistent workspace mode for blind users | 6 | 1 | **Accessibility** — Underserved user segment, high loyalty expressed |

### Predicted Next-Version Candidates
1. **Dynamic model discovery** (#10687) — High votes, maintainer-tagged, blocks provider agility
2. **Compaction threshold relativity** (#87136) — Absolute tokens break on model switches, P1 impact
3. **Trusted inbound decoration** (#95279) — Security boundary hardening, 4 👍
4. **Gateway idle CPU fix** (#124334 merged today) — Performance regression, high impact
5. **Slack modals** (#88154) — Channel parity, active PR landscape

---

## 7. User Feedback Summary

### Pain Points (from issues)
- **Silent failures dominate** — "no output, no push, no error reporting" (#87109), "silently lost" (#44925), "silently fails" (#92186)
- **Memory/GC instability** — Heap growth 558MB→1073MB+ idle, compaction blocks 10+ min, OOM kills cron
- **Session state unreliability** — Subagent completion race conditions, compaction forks parentId chain, bootstrap auto-delete
- **Upgrade friction** — Dev channel broken (npm vs pnpm), Node version changes require manual intervention (#107930), launchd stderr hidden (#90711)
- **Windows CLI zombies** — node.exe processes linger after command completion (#74378)

### Use Cases Revealed
- **Family/business assistant** — Telegram, automations, cron, Home Assistant control (#73537)
- **Blind accessibility workflow** — Video promo, browser automation, social media, blogging, music research (#82450)
- **Multi-agent production** — 11-agent installations hitting CPU/RSS limits (#124334)
- **Matrix/Feishu/Slack/WhatsApp/Telegram** — Multi-channel deployments with delivery bugs
- **Voice/real-time agents** — 10-15s TTFB on /v1/chat/completions blocks LiveKit/Twilio (#68920)

### Satisfaction Signals
- **Positive:** "genuinely become part of our daily workflow" (#73537), "most powerful AI work interface I have ever used" (#82450)
- **Negative:** "beta release blocker: No" on many P1 bugs suggests users accept instability; "clawsweeper-recovery-stuck" on 20+ issues indicates frustration with automated fix promises

---

## 8. Backlog Watch (Long-Unanswered, Maintainer Attention Needed)

| Issue | Age | Labels | Why It Matters |
|-------|-----|--------|----------------|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) Subagent completion silently lost | 5 months | P1, data-loss, message-loss, clawsweeper-recovery-stuck | Core orchestration reliability; 29 comments, no fix |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) Dynamic model discovery | 6 months | P2, auth-provider, clawsweeper-recovery-stuck | Blocks OpenRouter+ integration; 3 👍, maintainer-tagged |
| [#60572](https://github.com/openclaw/openclaw/issues/60572) Multi-slot memory architecture | 4 months | P2, session-state, linked PR open | Architectural refactor; 3 👍, PR exists but stalled |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) Gateway heap growth → cron silent fail | 3 months | P1, crash-loop, needs-live-repro | Production stability; reproducible, no fix |
| [#94229](https://github.com/openclaw/openclaw/issues/94229) Plugin state SQLite corruption | 2 months | P0, data-loss | Data integrity; "session file changed while embedded prompt lock released" |
| [#53008](https://github.com/openclaw/openclaw/issues/53008) Compaction blocks main lane 10+ min | 5 months | P1, message-loss, clawsweeper-recovery-stuck | Availability; bot unresponsive during compaction |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) Per-model usage logging | 6 months | P2, off-meta tidepool, clawsweeper-recovery-stuck | Cost observability gap; users parse JSONL manually |
| [#73537](https://github.com/openclaw/openclaw/issues/73537) Production-readiness stability labels | 4 months | P2, off-meta tidepool, clawsweeper-recovery-stuck | Release trust; users need stability signals for prod |

### Stalled PRs Needing Review
- [#97175](https://github.com/openclaw/openclaw/pull/97175) fix(context-engine): keep background maintenance from blocking new messages — **stale**, P1, session-state, needs proof
- [#110455](https://github.com/openclaw/openclaw/pull/110455) fix(acp): order new session response before updates — P1, session-state, needs proof
- [#110700](https://github.com/openclaw/openclaw/pull/110700) fix(codex): MEMORY.md silently truncated — P1, session-state, needs proof

---

## Project Health Assessment
| Dimension | Status | Evidence |
|-----------|--------

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Ecosystem (2026-08-16)

## 1. Ecosystem Overview
The open-source personal AI assistant landscape shows a **bifurcated maturity pattern**: a few large-scale platforms (OpenClaw, IronClaw, ZeroClaw) are deep in architectural stabilization and technical debt resolution, while a larger cohort of mid-sized projects (NanoBot, Hermes, NanoClaw, Moltis, CoPaw) are actively hardening session reliability, multi-channel messaging, and provider interoperability. Security hardening (secret binding, allowlist bypass fixes, path traversal patches) and memory/state integrity (compaction, consolidation, session fan-out) are cross-cutting priorities. Release cadence varies wildly—some projects cut weekly betas, others have stalled for months—reflecting differing governance models and maintainer bandwidth.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed (24h) | Release Status | Health Score* |
|---------|--------------|-----------|---------------------|----------------|---------------|
| **OpenClaw** | 286 | 500 | 50 | v2026.8.1-beta.2 (today) | 🟡 6/10 |
| **NanoBot** | 6 | 16 | 7 | None (accumulating fixes) | 🟢 8/10 |
| **Hermes Agent** | 12 | 50 | 14 | v0.20.2 imminent | 🟢 8/10 |
| **PicoClaw** | 0 | 2 (stale) | 0 | None | 🔴 3/10 |
| **NanoClaw** | 0 | 22 | 3 | Pre-release sprint | 🟢 8/10 |
| **NullClaw** | 1 | 1 | 0 | None | 🟡 5/10 |
| **IronClaw** | 21 closed | 5 | 5 | Post-stabilization sprint | 🟢 8/10 |
| **LobsterAI** | 18 (16 stale) | 6 | 2 | None | 🟡 5/10 |
| **Moltis** | 2 (closed) | 16 | 14 | None | 🟢 9/10 |
| **CoPaw** | 9 | 10 | 0 | v2.1.0 (stale) | 🟡 6/10 |
| **ZeptoClaw** | 0 | 0 | 0 | None | ⚫ N/A |
| **ZeroClaw** | 15 (RFCs) | 50 | 6 | v0.8.5 target Aug 30 | 🟡 7/10 |

*Health Score: 1-10 composite of velocity, bug severity, release cadence, maintainer responsiveness, and architectural clarity.

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale & Ecosystem**: 10× issue/PR volume of nearest peer; de facto reference implementation for "Claw" architecture
- **Provider Agility**: GPT-5.6 Ultra runtime switching + secret egress host binding ship first here
- **Security Hardening**: Install-policy acknowledgements, secret binding, CI auth fixes demonstrate production-grade threat modeling

**Technical Approach Differences:**
- **Monolithic Gateway**: Single gateway process manages multi-agent orchestration, compaction, cron, MCP—vs. NanoClaw/ZeroClaw's decoupled runtime-owned sessions
- **Automated Remediation ("ClawSweeper")**: Unique attempt at ML-assisted bug fixing, though currently stalled (20+ "clawsweeper-recovery-stuck" issues)
- **Session Compaction as Core Primitive**: Absolute token thresholds, preflight compaction, memory injection—more sophisticated but fragiler than peers' simpler truncation

**Community Size**: Largest by contributor count and issue volume, but **signal-to-noise ratio is declining**—many P1 bugs lack fix PRs despite 5-month age, suggesting maintainer bandwidth is saturated.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Affected | Specific Needs |
|------------|-------------------|----------------|
| **Session State Integrity** | OpenClaw, NanoBot, Hermes, NanoClaw, ZeroClaw, CoPaw | Compaction/consolidation data loss, cursor advance bugs, subagent completion tracking, forked parentId chains |
| **Memory/GC Stability** | OpenClaw, NanoBot, Hermes, ZeroClaw | Heap growth at idle (558MB→1GB+), compaction blocking main lane 10+ min, OOM-silent cron failures |
| **Multi-Channel Messaging** | NanoClaw, CoPaw, Moltis, ZeroClaw, LobsterAI | Telegram/Discord/Slack/Matrix adapters, DM thread normalization, delivery batching, permission interception |
| **Provider Interoperability** | OpenClaw, NanoBot, Hermes, CoPaw, ZeroClaw, LobsterAI | Dynamic model discovery (OpenRouter), capability-aware routing, refusal/fallback handling, pricing/usage tracking |
| **Security Hardening** | OpenClaw, NanoBot, Moltis, ZeroClaw, IronClaw | Secret egress binding, exec allowlist bypass, path traversal in model/zip extraction, node pairing verification, SSRF hardening |
| **Desktop/CLI Reliability** | Hermes, OpenClaw, CoPaw, ZeroClaw | Process leaks on reconnection, Windows node.exe zombies, WSL2 MCP child tracking, KDE .desktop path resolution |
| **Observability & Cost Tracking** | OpenClaw, Hermes, ZeroClaw, LobsterAI | Per-model usage logging, trajectory benchmarks, opt-in telemetry, ACP audit trail completeness |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Architectural Signature |
|---------|---------------|--------------|-------------------------|
| **OpenClaw** | Comprehensive agent platform | Power users, enterprises, researchers | Monolithic gateway, compaction-centric memory, ClawSweeper auto-remediation |
| **IronClaw** | Performance-optimized runtime | High-throughput automation, NEAR ecosystem | Unbound-turns execution model, aggressive DB write reduction, Reborn architecture |
| **ZeroClaw** | Interoperable agent platform | Tool builders, integration-heavy deployments | RFC-driven architecture, runtime-owned sessions, Chat Completions API compatibility |
| **NanoClaw** | Multi-tenant messaging backbone | SaaS/self-hosted multi-bot deployments | Dynamic channel registry, cross-session context fan-out, permission policies |
| **Hermes** | Desktop-first reliability | Developers, daily drivers on Linux/macOS/Windows | TUI gateway session fan-out, SQLite FTS5 self-repair, WSL2 MCP resilience |
| **Moltis** | Local-first, security-hardened | Privacy-conscious, enterprise air-gapped | Vector memory backends (zvec/redb), durable connectors, Slack-native task cards |
| **NanoBot** | Extensible skill/agent framework | Hobbyists, skill authors, WebUI users | Dream skill iteration, WebUI turn-awareness, OrcaRouter zero-trust gateway |
| **CoPaw** | Console/WebUI scalability | Enterprise plugin developers, Matrix users | Provider unification, DataPaw runtime, ACP streaming integrity |
| **LobsterAI** | OpenClaw downstream + NetEase models | Chinese-market users, paid model consumers | Config sync preservation, cron yield fixes, agent memory system spec |
| **PicoClaw/NullClaw** | Lightweight/specialized | Embedded, proxy-constrained, Zig runtime | Minimal deps, prompt caching, loop hygiene |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapidly Iterating (High Velocity, Pre-Stabilization)** | NanoClaw, CoPaw, ZeroClaw | 20-50 PRs/day, architectural RFCs active, review bottlenecks, no recent releases |
| **Active Stabilization (High Fix Velocity, Release-Ready)** | NanoBot, Hermes, Moltis, IronClaw | 7-14 merges/day, security + reliability focus, imminent patch releases |
| **Mature but Debt-Laden** | OpenClaw | Massive scale, 5-month-old P1 bugs, automated remediation stalled, beta releases |
| **Maintenance Mode / Stagnant** | PicoClaw, LobsterAI, NullClaw | <5 PRs/day, stale PRs >1 week, dependency on upstream (OpenClaw) |
| **Inactive** | ZeptoClaw | Zero activity |

**Key Insight**: The "Claw" family (OpenClaw, NanoClaw, ZeroClaw, PicoClaw, IronClaw, Moltis) shares architectural DNA but diverges sharply in governance—IronClaw and Moltis demonstrate **disciplined stabilization sprints**, while OpenClaw and ZeroClaw carry **architectural ambition exceeding maintainer throughput**.

---

## 7. Trend Signals for AI Agent Developers

1. **Runtime-Owned Sessions > Transport-Coupled Sessions**  
   ZeroClaw (#9487), NanoClaw (cross-session fan-out), Hermes (TUI gateway fan-out) all converge on decoupling session lifecycle from WebSocket/ACP/HTTP transports. This enables multi-client, multi-channel, and checkpoint/resume patterns.

2. **Compaction/Consolidation is the #1 Reliability Surface**  
   Every project with long-running sessions reports data loss or cursor bugs during context compression. **Lossless chunking** (NanoBot #5379), **relative thresholds** (OpenClaw #87136), and **lean recall modes** (Hermes #87326) are emerging patterns.

3. **Standard API Interoperability is a Hard Requirement**  
   ZeroClaw's Chat Completions RFC (#8603, 21 comments) and CoPaw's provider unification (#6302) signal that **agents must be consumable by Open WebUI, LobeChat, Continue.dev, LangChain**—not just their own CLIs.

4. **Security is Shifting from "Tool Allowlists" to "Credential Boundaries & Ingress Trust"**  
   ZeroClaw RFC #6971, Moltis path-traversal fixes (#1180), NanoBot exec bypass (#5305), OpenClaw secret egress binding—all point to **supply-chain and deployment-layer threat models** replacing simple command allowlists.

5. **Observability Gaps Block Production Adoption**  
   Per-model cost tracking (OpenClaw #13219), trajectory benchmarks (IronClaw #467), opt-in telemetry (ZeroClaw #9621), ACP audit completeness (ZeroClaw #10018)—**operators cannot justify spend or debug failures without structured observability**.

6. **Desktop/Terminal UX is a Differentiator, Not an Afterthought**  
   Hermes (KDE pinning, WSL2 MCP), ZeroClaw (ZeroCode TUI copy), CoPaw (Console virtual scrolling), Moltis (command-palette agent entry)—**daily-driver friction determines retention** for developer-facing tools.

7. **Upstream Dependency Drift is a Systemic Risk**  
   PicoClaw (WhatsApp 405), Moltis (gogcli org rename), LobsterAI (OpenClaw config sync), NanoBot (whatsmeow bump)—**projects depending on external CLIs/protocols need automated compatibility testing**.

---

**Bottom Line for Decision-Makers**:  
- **For production deployment today**: Moltis (security-first, connectors, Slack UX) and IronClaw (performance, unbound-turns complete) show the healthiest stabilization signals.  
- **For building custom integrations**: ZeroClaw (Chat Completions API track) and NanoClaw (dynamic channel registry) offer the cleanest architectural boundaries.  
- **For upstream contribution**: Hermes (desktop reliability), NanoBot (skill/WebUI), and CoPaw (provider unification) have active maintainers and reviewable PR backlogs.  
- **Avoid betting on**: OpenClaw's automated remediation (ClawSweeper) or PicoClaw/NullClaw/ZeptoClaw for near-term feature delivery.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-16

## 1. Today's Overview
NanoBot shows **high maintenance velocity** with 16 PRs updated and 6 issues active in the last 24 hours. The project closed/merged **7 PRs** today — primarily bug fixes, security hardening, and WebUI polish — while 9 PRs remain in review. No new release was cut. Activity centers on **session reliability** (consolidation, background-task safety, cron resilience), **WebUI UX** (mentions, side conversations, drag-and-drop, action visibility), and **provider expansion** (OrcaRouter, DashScope native). A critical security bypass (#5305) and a consolidation data-loss bug (#5377) are the highest-severity open items.

## 2. Releases
**No new releases today.** The last published version remains unchanged; maintainers are accumulating fixes in `main` for the next cut.

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5328](https://github.com/HKUDS/nanobot/pull/5328) | ✨ Feature | Add **OrcaRouter** as a named gateway provider (150+ models, zero-trust gateway) | Expands model routing options; zero-config multi-provider access |
| [#5371](https://github.com/HKUDS/nanobot/pull/5371) | 🐛 Fix | WebUI: hide copy/fork actions until agent turn ends | Eliminates conflicting completion signals during streaming |
| [#5369](https://github.com/HKUDS/nanobot/pull/5369) | 🔒 Security + 🐛 Fix | Revalidate cached skill roots after package changes | Prevents stale plugin skill reads after in-place package replacement |
| [#5370](https://github.com/HKUDS/nanobot/pull/5370) | 🐛 Fix + ⚡ Perf | Bound per-session `FileStateStore` lifecycle | Fixes unbounded memory growth from high-cardinality/temporary sessions |
| [#5376](https://github.com/HKUDS/nanobot/pull/5376) | 🐛 Fix | Cron: keep scheduler alive when job-store persistence fails | Removes silent scheduler death on disk/permission errors |
| [#5399](https://github.com/HKUDS/nanobot/pull/5399) | 🐛 Fix + 📝 Docs | Clarify model preset display names vs. stable command names | Improves WebUI preset editing UX; avoids rename confusion |
| [#5397](https://github.com/HKUDS/nanobot/pull/5397) | 🐛 Fix | Preserve range selection & turn timing in WebUI | Fixes macOS Shift-selection & turn-identity continuity |

**Net advance:** Session stability (compaction, file state, cron), WebUI turn-awareness, provider ecosystem, and plugin security.

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) — **Endless loop in `complete_goal`** (5 💬, 1 👍) | Highest comment count; gateway parses `recap` as string not JSON | **Tool-calling contract broken** — blocks autonomous task completion; regression from recent gateway serialization change |
| [#4467](https://github.com/HKUDS/nanobot/issues/4467) — **Dream creates duplicate skills** (2 💬, 1 👍) | Long-standing (since Jun 23) | **Workspace skill idempotency** — users iterate on custom skills daily; duplicates pollute `skills/` |
| [#5377](https://github.com/HKUDS/nanobot/issues/5377) — **Consolidation truncates but advances cursor** (2 💬) | Data-loss risk | **Conversation integrity** — truncated context lost forever; cursor advances past full batch |
| [#5305](https://github.com/HKUDS/nanobot/issues/5305) — **`exec.allowPatterns` bypass** (1 💬) | Security advisory | **Shell injection via chained commands** — allowlist bypass in OpenAI-compatible API path |
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) — **Session collaboration via mentions** (open, 0 💬) | Feature PR, cross-session UX | **Multi-session teamwork** — stable `@name` identity, mention picker, peer awareness |

**Signal:** Users feel pain around **skill iteration workflow** (#4467) and **agent-tool reliability** (#4864). Security (#5305) and data-loss (#5377) are silent but severe.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical** | [#5305](https://github.com/HKUDS/nanobot/issues/5305) — `exec.allowPatterns` bypass → chained shell execution | 🟢 Open | No PR yet |
| **High** | [#5377](https://github.com/HKUDS/nanobot/issues/5377) — Consolidation truncates input but advances `last_consolidated` → permanent context loss | 🟢 Open | **[#5379](https://github.com/HKUDS/nanobot/pull/5379)** (open, lossless chunking) |
| **High** | [#4864](https://github.com/HKUDS/nanobot/issues/4864) — `complete_goal` endless loop (gateway JSON parsing regression) | 🟢 Open | No PR yet |
| **Medium** | [#5402](https://github.com/HKUDS/nanobot/issues/5402) — Token consolidation never triggers (tiktoken underestimates) | 🟢 Open (created today) | No PR yet |
| **Low** | [#5368](https://github.com/HKUDS/nanobot/issues/5368) — WebUI copy/fork actions appear mid-turn | 🔴 Closed | Fixed in **[#5371](https://github.com/HKUDS/nanobot/pull/5371)** |

**Watch:** #5305 and #5377 have no merged fix yet; #5379 addresses #5377 but is still in review.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Dream: update existing workspace skills instead of duplicating** | [#4467](https://github.com/HKUDS/nanobot/issues/4467) | 🟡 Medium — UX debt, but requires skill-diff logic |
| **Session collaboration via `@mentions`** | [#5358](https://github.com/HKUDS/nanobot/pull/5358) | 🟢 High — PR open, WebUI-focused, aligns with multi-user direction |
| **Temporary side conversations ( `/side` )** | [#5364](https://github.com/HKUDS/nanobot/pull/5364) | 🟡 Medium — PR open, conflict flagged, niche but polished |
| **Drag-and-drop session organization** | [#5389](https://github.com/HKUDS/nanobot/pull/5389) | 🟡 Medium — PR open, conflict flagged, sidebar UX improvement |
| **DashScope native protocol provider** | [#5398](https://github.com/HKUDS/nanobot/pull/5398) | 🟢 High — PR open, extends Chinese-model support, low risk |
| **Unified model preset names across config/UI/commands** | [#5400](https://github.com/HKUDS/nanobot/pull/5400) | 🟢 High — Refactor PR, reduces inconsistency bugs |

**Prediction:** Next release will likely ship **OrcaRouter provider**, **WebUI turn-end action gating**, **cron resilience**, **file-state bounding**, and **DashScope native**. Skill deduplication and side conversations may slip.

## 7. User Feedback Summary
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Skill iteration broken** — Dream clutters `skills/` with duplicates instead of updating | [#4467](https://github.com/HKUDS/nanobot/issues/4467) (“frustrated… each session adds small improvements”) | Persistent (2 months) |
| **Agent loops silently** — `complete_goal` fails due to gateway JSON bug | [#4864](https://github.com/HKUDS/nanobot/issues/4864) (“keeps erroring… gateway parsing recap as bare string”) | Regression, blocks autonomy |
| **Context loss during consolidation** — Truncation without warning | [#5377](https://github.com/HKUDS/nanobot/issues/5377) (“messages removed… advanced past full batch”) | Data-integrity fear |
| **Token budget miscalibration** — Consolidation never fires | [#5402](https://github.com/HKUDS/nanobot/issues/5402) (“tiktoken consistently underestimates”) | New, affects long sessions |
| **WebUI action clutter mid-stream** — Copy/fork appear while agent working | [#5368](https://github.com/HKUDS/nanobot/issues/5368) (fixed) | UX confusion, resolved |

**Satisfaction signals:** Users invest in custom skills daily (#4467) and build multi-session workflows (#5358) — high engagement. Security report (#5305) shows responsible disclosure culture.

## 8. Backlog Watch — Stale & High-Impact Items Needing Attention
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#4467](https://github.com/HKUDS/nanobot/issues/4467) — Dream skill deduplication | 54 days | Core workflow for power users; blocks skill-as-code maturity | Assign to Dream maintainer; design idempotent upsert |
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) — `complete_goal` JSON parsing | 38 days | Breaks agent autonomy; gateway regression | Prioritize gateway serialization fix; add contract test |
| [#5305](https://github.com/HKUDS/nanobot/issues/5305) — `exec` allowlist bypass | 7 days | **Security vulnerability**; shell injection via API | **Urgent**: patch + release hotfix; audit other tools |
| [#5377](https://github.com/HKUDS/nanobot/issues/5377) / [#5379](https://github.com/HKUDS/nanobot/pull/5379) — Consolidation data loss | 3 days | Silent context truncation | Review & merge #5379; add integration test for cursor advance |
| [#5291](https://github.com/HKUDS/nanobot/pull/5291) — Persist subagent transcripts | 9 days | Observability gap — subagent work invisible after completion | Review; high value for debugging complex delegations |
| [#5271](https://github.com/HKUDS/nanobot/pull/5271) — Stale background task saves | 10 days | Session corruption risk on `/new`; conflict flag | Resolve conflict; critical for session reliability |

---

**Health Indicator:** 🟢 **Active & Hardening** — High PR throughput, security awareness, session/WebUI stability focus. **Blockers:** Critical security (#5305) and data-loss (#5377) bugs lack merged fixes; Dream skill UX debt (#4467) unchanged for 8 weeks. Recommended: cut a patch release for #5305 + #5379, then schedule Dream skill refactor.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-16

## 1. Today's Overview
Hermes Agent shows **very high development velocity** today with 50 PRs updated (36 open, 14 merged/closed) and 12 issues updated in the last 24 hours. The project is in active stabilization mode — numerous bug fixes targeting session state management, desktop reliability, MCP/WSL2 compatibility, and pricing/usage tracking dominate the PR queue. No new release was cut today, but the volume of merged fixes suggests a patch release (likely v0.20.2) is imminent. Community engagement is moderate: top issues have 7–11 comments, indicating focused technical discussion rather than broad user outcry.

## 2. Releases
**No new releases today.** Latest published version remains v0.20.1. Given 14 PRs merged/closed today — including critical fixes for SQLite FTS5 upgrade corruption (#86183), desktop process leaks (#58619), and WSL2 MCP tracking (#32962) — a **v0.20.2 hotfix release is highly probable within 24–48 hours**. Users on v0.18.2→v0.20.1 upgrade path should watch for migration notes around `state.db` FTS5 index repair.

## 3. Project Progress — Merged/Closed Today
| PR / Issue | Area | Summary |
|------------|------|---------|
| **#32962** (CLOSED) | `tool/mcp`, `platform/windows` | **WSL2 child PID tracking + MCP subprocess resilience** — fixes `/proc/children` empty reads on WSL2 by falling back to `ps --ppid`; salvages #10250. Critical for Windows/WSL2 MCP server stability. |
| **#67165** (CLOSED) | `comp/tools`, `platform/macos` | **ScreenCaptureKit `display_count=0` on macOS 26.5.2** — resolved capture width/height=0 regression despite valid TCC permissions. |
| **#81333** (CLOSED) | `comp/tools` | **`computer_use` silently discards `app=` on placeholder `pid=0`/`window_id=0`** — fixed dispatch logic treating non-`None` placeholders as exact-window targeting. |
| **#86183** (OPEN, fixes #86027) | `comp/agent`, `area/sessions` | **Verify & self-repair FTS5 indexes on engine change** — addresses SQLite 3.46→3.53 upgrade corruption where legacy `messages_fts_trigram` becomes malformed. **High-impact migration fix.** |
| **#76063** (OPEN) | `comp/cli`, `tool/terminal`, `area/auth` | **Enforce deny rules after command prefixes** — closes #76037; prevents env/wrapper bypass of `approvals.deny` globs. Security hardening. |

*Note: 9 other PRs merged/closed today not individually listed in top-20; likely include routine fixes, doc updates, and test improvements.*

## 4. Community Hot Topics
| Item | Comments | Core Need / Signal |
|------|----------|---------------------|
| **[#58619](https://github.com/NousResearch/hermes-agent/issues/58619)** — Desktop spawns unbounded `serve` processes on reconnection | 11 | **Process lifecycle management gap**: Desktop lacks `--replace` flag (unlike `gateway run --replace`), causing ~1 leaked process per 15–30 min during sustained API errors. Users need automatic cleanup or explicit replacement semantics. |
| **[#86027](https://github.com/NousResearch/hermes-agent/issues/86027)** — Legacy `messages_fts_trigram` malformed after SQLite upgrade (v0.18.2→v0.20.1) | 8 | **Upgrade compatibility blocker**: Same `state.db` works on SQLite 3.46 but fails on 3.53. Affects all long-term users upgrading. PR #86183 provides self-repair logic. |
| **[#80439](https://github.com/NousResearch/hermes-agent/issues/80439)** — Auto-generated `hermes.desktop` uses wrong `Exec` path, breaks KDE pinning | 7 | **Linux desktop integration regression** (introduced 2026-08-01): `sys.argv[0]` resolves to bare Python script, not installed binary. Blocks taskbar pinning on KDE. |
| **[#67165](https://github.com/NousResearch/hermes-agent/issues/67165)** — macOS ScreenCaptureKit returns 0×0 despite permissions | 5 | **macOS 26.5.2 regression** in `cua-driver` 0.8.3; now closed via upstream fix. |

**Underlying theme**: Desktop/CLI reliability on Linux/macOS/Windows is the top user pain point — process leaks, upgrade breaks, and platform-specific integration gaps.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **P0** | **[#87368](https://github.com/NousResearch/hermes-agent/issues/87368)** — Background review drops gateway ephemeral session context, breaks prompt-cache prefix parity | Open (created today) | None yet |
| **P1** | **[#80439](https://github.com/NousResearch/hermes-agent/issues/80439)** — Wrong `Exec` path in auto-generated `.desktop` breaks KDE pinning | Open | None yet |
| **P2** | **[#58619](https://github.com/NousResearch/hermes-agent/issues/58619)** — Unbounded `serve` process spawn on Desktop reconnection | Open | None yet (suggested: add `--replace`) |
| **P2** | **[#86027](https://github.com/NousResearch/hermes-agent/issues/86027)** — SQLite 3.53 reports legacy FTS5 index malformed after upgrade | Open | **[#86183](https://github.com/NousResearch/hermes-agent/pull/86183)** (verify & self-repair) |
| **P2** | **[#87356](https://github.com/NousResearch/hermes-agent/issues/87356)** — `cronjob update` schema omits `model`/`provider`, drift-guard remediation unreachable | Open (created today) | None yet |
| **P2** | **[#87364](https://github.com/NousResearch/hermes-agent/issues/87364)** — Desktop plugin load fails: missing `McpTab` export after update | Open (created today) | None yet |
| **P2** | **[#87367](https://github.com/NousResearch/hermes-agent/pull/87367)** — MCP: `/proc/children` empty on WSL2, fallback not reached | **Open PR** | **#87367** (fallback to `ps --ppid`) |
| **P2** | **[#86921](https://github.com/NousResearch/hermes-agent/pull/86921)** — Background terminal events lose owning session after compression | **Open PR** | **#86921** (keep events in owning session) |
| **P2** | **[#86784](https://github.com/NousResearch/hermes-agent/pull/86784)** — TUI gateway: resuming clients steal live event stream | **Open PR** | **#86784** (attach instead of steal) |
| **P3** | **[#87359](https://github.com/NousResearch/hermes-agent/issues/87359)** — Spurious "boot failed" during `hermes update` on Windows (dashboard restart) | Open (created today) | None yet (false positive) |

**Critical cluster**: Session state integrity (#87368, #86921, #86784, #86786, #87372) — multiple PRs addressing fan-out, lease ownership, and interrupted-turn persistence. This is the **highest-risk subsystem** currently.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Inbound attachments in Photon/iMessage** | [#84721](https://github.com/NousResearch/hermes-agent/issues/84721) (type/docs) | Medium — docs gap; implementation likely in `comp/plugins` |
| **Desktop: render attached images above user text** | [#87357](https://github.com/NousResearch/hermes-agent/issues/87357) (type/feature) | High — trivial UI fix, created today, no opposition |
| **Model switcher shows currently selected model** | [#87373](https://github.com/NousResearch/hermes-agent/issues/87373) | High — UX polish, screenshot attached, zero friction |
| **`delegate_task`: per-task model/provider override in batch** | [#87366](https://github.com/NousResearch/hermes-agent/pull/87366) (open PR) | Medium — useful for cost optimization, needs decision |
| **Linear webhook HMAC-SHA256 signature validation** | [#87361](https://github.com/NousResearch/hermes-agent/pull/87361) (open PR) | High — security hardening, fixes #87348 |
| **Lean compaction mode (`tail_mode="lean"`) + recall eval harness** | [#87326](https://github.com/NousResearch/hermes-agent/pull/87326) (open PR) | Medium — **+22.5 pts recall at 0.30× tokens**; opt-in, needs eval validation |
| **Session mirroring announcement & turn-origin stamping** | [#87371](https://github.com/NousResearch/hermes-agent/pull/87371) (open PR, stacked on #86784) | Medium — wire-contract change for multi-client TUI gateway |

**Roadmap signal**: Strong push toward **multi-client session integrity** (TUI gateway fan-out, lease ownership, mirroring) and **cost/usage observability** (pricing fixes for Z.AI, Ollama Cloud, GPT-5.4 snapshots in #87360, #87365, #87369).

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Desktop instability on reconnection** | #58619: "processes accumulate at ~1 per 15–30 min" during API errors | High — resource exhaustion, requires manual kill |
| **Upgrade breaks existing installations** | #86027: v0.18.2→v0.20.1 fails on SQLite 3.53; same DB works on 3.46 | High — blocks upgrades, data integrity fear |
| **Linux desktop integration broken** | #80439: KDE taskbar pinning fails due to wrong `Exec` path | Medium — daily UX friction for Linux users |
| **Windows false alarms during update** | #87359: "Desktop boot failed" spurious error when dashboard restarts | Medium — erodes trust, causes support noise |
| **MCP/WSL2 silent failures** | #32962, #87367: child PID tracking broken, subprocesses orphaned | High for WSL2 devs — MCP servers die silently |
| **Pricing unknown for major providers** | #87360, #87365: Z.AI, Ollama Cloud, GPT-5.4 show "unknown cost" | Medium — Insights/dashboard unusable for cost tracking |

**Positive signals**: Users actively debug and provide detailed repro steps (SQLite version matrix, macOS ScreenCaptureKit logs, WSL2 `/proc` behavior). Community is technical and engaged.

## 8. Backlog Watch — Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| **[#58619](https://github.com/NousResearch/hermes-agent/issues/58619)** — Unbounded `serve` processes | 42 days (created 2026-07-05) | **P2, 11 comments, no fix PR** — process leak compounds over time; simple `--replace` flag would resolve. |
| **[#80439](https://github.com/NousResearch/hermes-agent/issues/80439)** — Wrong `Exec` path in `.desktop` | 10 days | **P1, 7 comments, no fix PR** — regression from eea6044 (2026-08-01); blocks KDE pinning. Easy fix: resolve actual binary path. |
| **[#71735](https://github.com/NousResearch/hermes-agent/pull/71735)** — Stop dashboard SSRF-scanning cloud metadata | 21 days | **Security, P3, needs-repro** — dashboard endpoint probes hit link-local metadata; critical if dashboard exposed non-loopback. Stalled on repro. |
| **[#76063](https://github.com/NousResearch/hermes-agent/pull/76063)** — Enforce deny rules after prefixes | 15 days | **Security, P3** — prevents `approvals.deny` bypass via `env FOO=bar denied_cmd`; ready but unmerged. |
| **[#32962](https://github.com/NousResearch/hermes-agent/pull/32962)** — WSL2 MCP child PID tracking | 81 days | **Closed today** — was long-stalled; now merged. Good resolution. |
| **[#86784](https://github.com/NousResearch/hermes-agent/pull/86784)** / **[#86786](https://github.com/NousResearch/hermes-agent/pull/86786)** / **[#87371](https://github.com/NousResearch/hermes-agent/pull/87371)** / **[#87372](https://github.com/NousResearch/hermes-agent/pull/87372)** — TUI gateway session fan-out stack | 1–2 days | **Interdependent P2 stack** — core session integrity for multi-client gateway. Needs coordinated review; ryantuc driving. |

---

**Overall Health**: 🟡 **Active stabilization** — high fix velocity, but several P1/P2 desktop/session bugs lack fix PRs. Next 48h critical for v0.20.2 readiness. Maintainer bandwidth appears focused on session-state fan-out stack (#86784+); desktop process leak (#58619) and KDE .desktop fix (#80439) are **actionable quick wins** awaiting pickup.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-16

---

## 1. Today's Overview
PicoClaw shows **minimal recent activity** with zero issue updates, zero merged PRs, and no new releases in the past 24 hours. Two open pull requests (#3321, #3320) remain in `[stale]` status since their last update on 2026-08-15, indicating a quiet period in maintainer review cycles. Both PRs address high-impact technical debt (LLM prefix-caching optimization and a WhatsApp connectivity blocker), but neither has advanced toward merge. Project health appears **stable but stagnant**—no regressions reported, yet critical fixes sit unmerged.

---

## 2. Releases
**No new releases** published today or in the recent window. The project continues on its current version.

---

## 3. Project Progress
**No PRs merged or closed today.** The two open PRs represent the only forward motion:

| PR | Title | Status | Impact |
|----|-------|--------|--------|
| [#3321](https://github.com/sipeed/picoclaw/pull/3321) | `fix(agent): move dynamic context after history to preserve prefix caching` | Open (stale) | **Performance** — Reorders system-prompt blocks so per-request dynamic context (time, runtime, session, sender) no longer invalidates cached conversation-history tokens. Expected to reduce latency & token cost for LLM calls. |
| [#3320](https://github.com/sipeed/picoclaw/pull/3320) | `fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)"` | Open (stale) | **Stability/Connectivity** — Updates `go.mau.fi/whatsmeow` to a version accepted by WhatsApp servers. Current pinned version causes immediate disconnect (`Client outdated (405)`), leaving the native WhatsApp channel non-functional. |

Both PRs authored by **grrowl**; zero reviewer comments or approvals recorded.

---

## 4. Community Hot Topics
With zero issues and only two stale PRs, **no hot topics** emerged in the last 24h. The two PRs themselves signal the community’s current priorities:
- **LLM inference efficiency** (prefix caching) — core to agent responsiveness.
- **WhatsApp reliability** — a user-facing channel currently broken.

*Underlying need:* Maintainer bandwidth to review/merge dependency upgrades and prompt-engineering fixes that directly affect production usability.

---

## 5. Bugs & Stability
| Severity | Description | Source | Fix PR |
|----------|-------------|--------|--------|
| **High** | WhatsApp native channel dead — connects then drops with `405 Client outdated`; no auto-reconnect. | PR [#3320](https://github.com/sipeed/picoclaw/pull/3320) | #3320 (open) |
| **Medium** | Prefix caching broken for every request because dynamic context precedes history, forcing full re-computation. | PR [#3321](https://github.com/sipeed/picoclaw/pull/3321) | #3321 (open) |

No new crash reports or regressions filed today.

---

## 6. Feature Requests & Roadmap Signals
No new feature requests in the last 24h. The two open PRs hint at near-term roadmap items:
1. **Prompt-template refactor** — Once #3321 lands, expect follow-ups to formalize dynamic-context injection points.
2. **WhatsApp multi-device / business-api support** — Dependency bump in #3320 may be a prerequisite for future WhatsApp Cloud API migration.

*Prediction:* Next patch release will likely bundle both PRs once reviewed.

---

## 7. User Feedback Summary
No direct user feedback (issues, discussions, reactions) captured in the last 24h. Indirect signals:
- **Pain point:** WhatsApp channel silently down — users likely experiencing failed message delivery without error visibility.
- **Pain point:** Higher-than-necessary LLM latency/cost due to cache misses — invisible to end users but impacts operator costs.
- **Satisfaction:** No complaints filed → either low usage of affected features or users unaware of root causes.

---

## 8. Backlog Watch
| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| [PR #3320](https://github.com/sipeed/picoclaw/pull/3320) | 9 days (created 2026-08-07) | WhatsApp channel **completely non-functional**; blocks users relying on native WA integration. | **Urgent:** Maintainer review & merge; tag patch release. |
| [PR #3321](https://github.com/sipeed/picoclaw/pull/3321) | 9 days | Prefix-caching fix reduces token spend & latency on every agent turn. | **High:** Review, benchmark, merge. |
| *No stale issues* | — | — | — |

**Maintainer attention deficit** is the primary risk: two high-value, low-risk PRs idle for over a week.

---

*Digest generated from GitHub data as of 2026-08-16. Links point to live GitHub items.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-16

## 1. Today's Overview
NanoClaw shows **high development velocity** with 22 pull requests updated in the last 24 hours (19 open, 3 closed), but zero issue activity. The project is in a heavy refactoring/feature-expansion phase focused on **multi-channel messaging infrastructure** (Telegram, Discord), **agent orchestration primitives** (cross-session context, delivery batching, permission interception), and **container stability fixes**. Core team member `gavrielc` authored 10+ PRs today, indicating coordinated sprint work. No releases cut; the codebase appears to be in active pre-release development.

## 2. Releases
**None** — No new versions published today.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Title | Type | Summary |
|----|-------|------|---------|
| [#3268](https://github.com/qwibitai/nanoclaw/pull/3268) | fix(poll-loop): stopped loops leaked their active query's follow-up poller | **Bug Fix** | Root cause: `runPollLoop` only checked abort signal between iterations, but parked inside `processQuery` on long-lived streams. Fix ensures active query + 500ms follow-up poller are cleaned up on abort. |
| [#37](https://github.com/qwibitai/nanoclaw/pull/37) | Rename to DotClaw and switch from WhatsApp to Telegram | **Major Refactor** | Project rename `nanoclaw → dotclaw`; WhatsApp → Telegram (Telegraf); new launchd plist, setup scripts, test group. **Closed** (likely superseded by newer Telegram work in #3269). |
| [#3269](https://github.com/qwibitai/nanoclaw/pull/3269) | feat(channels): add Telegram channel integration | **Feature** | Adds `@chat-adapter/telegram`, pairing flow, Markdown sanitizer; self-registration wired in `src/channels/index.ts`. 1483 tests pass, clean build. **Still open** (active review). |

## 4. Community Hot Topics
*No GitHub Issues were updated today — all discourse is in PRs.* The most commented/reacted PRs are not surfaced in the data (comment counts `undefined`). However, **volume and labeling** signal focus areas:

| PR | Labels | Area | Why It Matters |
|----|--------|------|----------------|
| [#3269](https://github.com/qwibitai/nanoclaw/pull/3269) | — | **Telegram Integration** | First-class Telegram adapter; unblocks non-WhatsApp deployments. |
| [#3263](https://github.com/qwibitai/nanoclaw/pull/3263) | `follows-guidelines, core-team` | **Channel Registry Hot-Start** | Enables dynamic adapter registration without reboot — critical for plugin-style channels. |
| [#3262](https://github.com/qwibitai/nanoclaw/pull/3262) | `follows-guidelines, core-team` | **Chat SDK Bridge / DM Threads** | Normalizes DM thread IDs, captures app-context — needed for multi-thread platforms (Discord, Slack, Telegram). |
| [#3260](https://github.com/qwibitai/nanoclaw/pull/3260) | `follows-guidelines, core-team` | **Permissions: `decline_notify` Policy** | New unknown-sender policy: polite DM decline + owner FYI — reduces admin interruption. |
| [#3257](https://github.com/qwibitai/nanoclaw/pull/3257) | `core-team` | **Cross-Session Context Fan-Out** | Messages fanned to sibling sessions as `trigger=0` context; DM backfill; new `ncl sessions history` CLI. |

**Underlying need**: The project is building a **production-grade multi-tenant agent messaging backbone** — dynamic channels, robust delivery, fine-grained permissions, and cross-session memory — likely targeting SaaS or self-hosted multi-bot deployments.

## 5. Bugs & Stability (Reported/Fixed Today)
| Severity | PR | Issue | Fix Status |
|----------|-----|-------|------------|
| **High** | [#3251](https://github.com/qwibitai/nanoclaw/pull/3251) | Heartbeat stall during Claude API rate-limiting → false stale-container kills (30+ min stalls) | **Fix open** — touches heartbeat on scheduler tick, not just API events |
| **High** | [#3268](https://github.com/qwibitai/nanoclaw/pull/3268) | Stopped poll loops leaked active query + follow-up poller (resource leak) | **Merged** |
| **Medium** | [#3250](https://github.com/qwibitai/nanoclaw/pull/3250) | Telegram legacy Markdown sanitizer downgrades `**bold**` → `_italic_` | **Fix open** — drop legacy sanitizer (upstream converter fixed) |
| **Medium** | [#3255](https://github.com/qwibitai/nanoclaw/pull/3255) | Outbound delivery resolved arbitrary sibling instance when multiple adapters share `(channel_type, platform_id)` | **Fix open** — resolves sender's own channel row |
| **Medium** | [#3254](https://github.com/qwibitai/nanoclaw/pull/3254) | Context rows (`trigger=0`) crowded out due task rows in capped inbound batch | **Fix open** — two-phase selection (due tasks first, then context) |
| **Low** | [#2752](https://github.com/qwibitai/nanoclaw/pull/2752) | Discord inbound attachments (text/images) never reach agent in readable form | **Open since Jun 12** — chat-sdk bridge downloads but doesn't stage bytes/path |

## 6. Feature Requests & Roadmap Signals
| Signal | PR(s) | Likelihood for Next Version |
|--------|-------|----------------------------|
| **Telegram as primary channel** | [#3269](https://github.com/qwibitai/nanoclaw/pull/3269), [#37](https://github.com/qwibitai/nanoclaw/pull/37) | **Very High** — active implementation, test suite passing |
| **Dynamic channel adapter lifecycle** | [#3263](https://github.com/qwibitai/nanoclaw/pull/3263) (hot-start), [#3261](https://github.com/qwibitai/nanoclaw/pull/3261) (optional capabilities) | **High** — core-team, follows guidelines |
| **Cross-session context / agent groups** | [#3257](https://github.com/qwibitai/nanoclaw/pull/3257) (fan-out, backfill, CLI) | **High** — core-team, enables multi-session agents |
| **Fine-grained permission policies** | [#3260](https://github.com/qwibitai/nanoclaw/pull/3260) (`decline_notify`), [#3266](https://github.com/qwibitai/nanoclaw/pull/3266) (interceptor seam) | **High** — security/ops hardening |
| **Delivery observability hooks** | [#3264](https://github.com/qwibitai/nanoclaw/pull/3264) (batch preview hook) | **Medium** — module extensibility |
| **Agent creation UX control** | [#3265](https://github.com/qwibitai/nanoclaw/pull/3265) (`suppressCreatedNotify`) | **Medium** — wrapper/provisioning workflows |
| **Detached conversation handling** | [#3256](https://github.com/qwibitai/nanoclaw/pull/3256) (`messaging_groups.detached_at` + migration) | **Medium** — data integrity |

## 7. User Feedback Summary
*No end-user Issues filed today.* Pain points inferred from PR fixes:
- **Container instability** under API rate limits (heartbeat stall → false kills) — [#3251](https://github.com/qwibitai/nanoclaw/pull/3251)
- **Telegram formatting broken** (bold → italic) — [#3250](https://github.com/qwibitai/nanoclaw/pull/3250)
- **Discord attachments invisible to agent** (open 65+ days) — [#2752](https://github.com/qwibitai/nanoclaw/pull/2752)
- **Multi-bot deployments** suffer from wrong adapter instance selection — [#3255](https://github.com/qwibitai/nanoclaw/pull/3255)
- **Admin fatigue** from approval cards for unknown senders — motivates `decline_notify` — [#3260](https://github.com/qwibitai/nanoclaw/pull/3260)

## 8. Backlog Watch (Stale / Needs Attention)
| Item | Age | Concern |
|------|-----|---------|
| [#2752](https://github.com/qwibitai/nanoclaw/pull/2752) | **65 days** (opened 2026-06-12) | Discord attachment staging — blocks media-rich Discord bots; no recent movement |
| [#3253](https://github.com/qwibitai/nanoclaw/pull/3253) | 1 day | `fix(opencode): honor group reasoning effort in model config` — labeled `PR: Fix` but no core-team label; may need review |
| [#3252](https://github.com/qwibitai/nanoclaw/pull/3252) | 1 day | Idle container without heartbeat exempt from absolute-ceiling kill — policy change, needs ops review |
| [#3259](https://github.com/qwibitai/nanoclaw/pull/3259) | 1 day | Skill-apply heading-ordinal strip, headless browser URL surfacing — three small fixes bundled; verify scope creep |

---

**Health Indicators**
- 🟢 **Velocity**: High (22 PRs/24h, core-team coordinated)
- 🟢 **Test Discipline**: Explicit `pnpm test` (1483 pass) and build checks on major PRs
- 🟡 **Issue Hygiene**: Zero Issues updated — may indicate users file in Discord/other, or project is pre-user
- 🔴 **Stale PR**: #2752 (Discord attachments) untouched 65 days — risk of bitrot
- 🟢 **Architecture Direction**: Clear — multi-channel, multi-session, plugin-ready agent platform

**Next Watch**: Merge of [#3269](https://github.com/qwibitai/nanoclaw/pull/3269) (Telegram) + resolution of [#3251](https://github.com/qwibitai/nanoclaw/pull/3251) (heartbeat) would signal release readiness for a "multi-channel stability" cut.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-16

## 1. Today's Overview
NullClaw saw light but focused activity in the last 24 hours: one new enhancement issue requesting proxy support and one open pull request addressing agent-loop hygiene for long, tool-heavy runs. No releases were published, and no PRs were merged or closed. The project appears to be in a steady maintenance and incremental-improvement phase, with contributors tackling both infrastructure (proxy) and core agent runtime (loop hygiene, prompt caching, output compression) concerns.

## 2. Releases
*No new releases published today.*

## 3. Project Progress
*No PRs were merged or closed in the last 24 hours.*  
The single open PR ([#987](https://github.com/nullclaw/nullclaw/pull/987)) introduces several internal improvements aimed at long-running local agent sessions:
- **Prompt caching optimization** — splits the system prompt into a stable prefix (cached) and a variable datetime tail, with a hash to detect prefix changes.
- **Tool-output compression** — new `result_compress.zig` compresses tool results before they enter conversation history; observers still receive full output.
- **Identical-call loop detection** — per-turn deduping to prevent runaway recursive tool invocations.  
These changes target stability and cost-efficiency for heavy local workloads but remain under review.

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **Proxy support for providers** | Enhancement Issue | 0 comments, 0 👍 | [#988](https://github.com/nullclaw/nullclaw/issues/988) |
| **Loop hygiene for long local tool-heavy runs** | Feature PR | 0 comments, 0 👍 | [#987](https://github.com/nullclaw/nullclaw/pull/987) |

*Analysis*: Both items are fresh (created 2026-08-15) and have not yet attracted community discussion. The proxy request signals a need for enterprise/controlled-network deployments, while the PR addresses a core runtime pain point for power users running extended autonomous sessions.

## 5. Bugs & Stability
*No bug reports, crashes, or regressions were filed or updated today.*

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **HTTP(S) & SOCKS5h proxy support for all providers** | [Issue #988](https://github.com/nullclaw/nullclaw/issues/988) | Medium — standalone infrastructure feature; may be prioritized if enterprise adoption grows. |
| **Prompt caching, output compression, loop detection** | [PR #987](https://github.com/nullclaw/nullclaw/pull/987) | High — already implemented in PR; likely to land once reviewed, as it directly improves agent reliability and token economy. |

## 7. User Feedback Summary
- **Pain point**: Users operating behind corporate proxies or in air-gapped environments cannot reach LLM providers (Issue #988).  
- **Use case**: Long-running local agents performing heavy tool usage suffer from prompt bloat, token waste, and potential infinite tool-call loops (PR #987).  
- **Sentiment**: Too early to gauge satisfaction; both items lack community reactions. The PR demonstrates proactive internal investment in runtime robustness.

## 8. Backlog Watch
*No long-unanswered issues or stale PRs surfaced in today’s data.*  
The two new items (#987, #988) are the current frontier. Maintainer attention on reviewing #987 (which touches core agent loop logic) and triaging #988 (proxy support scope across providers) will determine short-term velocity.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-16

## 1. Today's Overview

IronClaw is in a **high-velocity stabilization and performance-optimization phase**. Over the last 24 hours, 21 issues were closed and 5 PRs merged — a 4:1 close-to-open ratio — indicating the team is aggressively burning down technical debt and completing the "Reborn" architecture migration. No new releases were cut, but the merged PRs (#7628, #7629, #7634, #7670, #7676) deliver measurable runtime savings (heartbeat journal churn eliminated, trigger/outbound writes reduced, thread-index touches coalesced) and complete the switchover to the **unbound-turns execution model**. Open work remains focused on Live QA harness reliability, capability dispatch stack pressure, and a new trajectory benchmark system for agent quality evaluation.

## 2. Releases

**No new releases** in the last 24 hours. The project appears to be accumulating changes for a future release after the current stabilization sprint.

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Type | Key Outcome |
|----|-------|------|-------------|
| [#7634](https://github.com/nearai/ironclaw/pull/7634) | feat(unbound-turns): complete the switchover to prepared-context turns | **Feature / Architecture** | Finalizes the unbound-turns model; 71-clause conformance audit passed; closes the Reborn execution-model migration. |
| [#7628](https://github.com/nearai/ironclaw/pull/7628) | perf(processes): remove heartbeat journal churn | **Performance** | Stops appending `ProcessJournalKind::Heartbeat` rows (~2,880 rows/day/process saved); keeps lease timestamps authoritative; ships 15s turn-runner heartbeat interval. |
| [#7629](https://github.com/nearai/ironclaw/pull/7629) | perf: reduce trigger and outbound state writes | **Performance** | Moves trigger run-history pruning to fire-claim time; removes dead `advance_subscription_cursor` API; cuts correlated-subquery DELETEs by ~50%. |
| [#7676](https://github.com/nearai/ironclaw/pull/7676) | perf(threads): coalesce thread index touches | **Performance** | Coalesces bursty per-thread activity into bounded writes; preserves multi-worker correctness with monotonic CAS. |
| [#7670](https://github.com/nearai/ironclaw/pull/7670) | chore(agents): refresh codebase knowledge graph | **Maintenance** | Nightly CI refresh of the codebase-memory bootstrap snapshot. |

**Net effect**: ~3,000+ fewer DB rows written per turn, heartbeat load reduced ~67%, and the Reborn execution model is now feature-complete.

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#467](https://github.com/nearai/ironclaw/issues/467) Trajectory benchmark system (4 comments, open since Mar) | **Highest comment count** among open issues | **Evaluation infrastructure gap** — team needs automated, LLM-judged quality gates for agent behavior before scaling Reborn to production workloads. |
| [#7679](https://github.com/nearai/ironclaw/pull/7679) fix(live-qa): stop harness bugs reddening green canary runs (XL, open) | **Critical path blocker** — 30/30 Live Canary runs red due to harness defects | **CI reliability** — harness bugs are masking true product health; must be fixed before any release gating on Live QA. |
| [#7675](https://github.com/nearai/ironclaw/issues/7675) E2E: qa_6c gmail-to-sheet flake cascades (new, 0 comments) | **Fresh regression** in provider-contracts suite | **Test stability** — intermittent Gmail capability failure cascades across entire test session; signals flaky external dependency or resource-class bug. |
| [#7674](https://github.com/nearai/ironclaw/issues/7674) Architecture tests: symbol-level allowlist for openai-compat → threads edge (new) | **Architecture governance** | **Dependency hygiene** — crate-level boundaries insufficient; need symbol-level control to prevent accidental coupling. |

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#7675](https://github.com/nearai/ironclaw/issues/7675) | `qa_6c_gmail_to_sheet_live_chat` flake cascades across provider-contracts session; intermittent resource-class capability failure | No |
| **High** | [#7671](https://github.com/nearai/ironclaw/issues/7671) | Capability dispatch stack pressure: kernel sandbox path near test-stack edge (2 MiB overflow in `reborn_integration_model_recovery`) | No (follow-up to #7634) |
| **Medium** | [#7673](https://github.com/nearai/ironclaw/issues/7673) | BudgetLedger: truncated-launch reconciliation double-charges; charge durability gap at gate edges | No |
| **Medium** | [#7672](https://github.com/nearai/ironclaw/issues/7672) | Typed ToolChoice: overloaded `tool_choice: String` across 7 provider encoders causes string-matching brittleness | No |
| **Low** | [#6821](https://github.com/nearai/ironclaw/issues/6821) (closed) | IronHub search returns incomplete catalog (3 vs 18 tools) — **closed today** | Likely fixed in recent PRs |
| **Low** | [#6835](https://github.com/nearai/ironclaw/issues/6835) (closed) | MCP `AuthRequired` misclassified as `Client` error, never raises re-auth gate — **closed today** | Fixed |

**Note**: 21 issues closed today include numerous Tier-1 performance bugs (#7593, #7595, #7596, #7597, #7599) — all addressed by merged PRs #7628, #7629, #7676.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Trajectory benchmark system** (hard assertions + LLM-as-judge) | [#467](https://github.com/nearai/ironclaw/issues/467) (open since Mar, 4 comments) | **High** — foundational for Reborn quality gates; active design discussion. |
| **Deterministic no-result suppression for automations** | [#7651](https://github.com/nearai/ironclaw/pull/7651) (XL, open) | **High** — PR open, model-derived intent detection, exposes `builtin.structured_output`. |
| **OMP core-tool contract + engines + benchmark arm** | [#7491](https://github.com/nearai/ironclaw/pull/7491) (XL, open) | **Medium** — unifies coding surface to 6 bare tools (`read`, `write`, `edit`, `glob`, `grep`, `bash`); large scope. |
| **Operator WebUI surface for IronHub agent link** | [#7516](https://github.com/nearai/ironclaw/pull/7516) (M, open, new contributor) | **Medium** — UX gap for deployments; PR from external contributor. |
| **Persist invocation state at gate/terminal edges** | [#7678](https://github.com/nearai/ironclaw/pull/7678) (XL, open) | **High** — performance + correctness; keeps state worker-local until durable edges. |
| **Fold message lookup indexes into message rows** | [#7677](https://github.com/nearai/ironclaw/pull/7677) (XL, open) | **High** — eliminates 1-3 sibling rows/message; storage win. |

## 7. User Feedback Summary

- **Pain point**: Live Canary harness producing false negatives (30/30 red) erodes confidence in CI — [#7679](https://github.com/nearai/ironclaw/pull/7679).
- **Pain point**: Gmail/Sheets live E2E test flakiness blocks provider-contracts validation — [#7675](https://github.com/nearai/ironclaw/issues/7675).
- **Pain point**: IronHub catalog search incomplete in preview (3 vs 18 tools) — [#6821](https://github.com/nearai/ironclaw/issues/6821) (now closed).
- **Positive signal**: External contributor ([neo-sky](https://github.com/neo-sky)) adding WebUI operator surface for IronHub — [#7516](https://github.com/nearai/ironclaw/pull/7516).
- **Architecture concern**: Symbol-level dependency boundaries needed to prevent crate coupling — [#7674](https://github.com/nearai/ironclaw/issues/7674).

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#467](https://github.com/nearai/ironclaw/issues/467) Trajectory benchmark system | **~5.5 months** (opened 2026-03-02) | Blocking automated quality evaluation for Reborn; 4 comments show design churn — needs decision. |
| [#3236](https://github.com/nearai/ironclaw/issues/3236) Reborn same-thread follow-up & steering policy | **~3.5 months** | Core UX policy for conversational steering (`/btw`, queue visibility, cancellation) — closed today but may need implementation follow-up. |
| [#4775](https://github.com/nearai/ironclaw/issues/4775) Automated QA for Reborn binary (epic) | **~2 months** | 8 manual QA journeys still not fully automated; closed today but epic scope suggests ongoing work. |
| [#4629](https://github.com/nearai/ironclaw/issues/4629) Reborn/Crabshack closeout: delete legacy paths | **~2 months** | Technical debt removal; closed today but "high risk" refactoring may have follow-ups. |
| [#5672](https://github.com/nearai/ironclaw/issues/5672) WebUI_v2 SSE drain-and-poll → real subscription | **~1.5 months** | Performance: browser polls at 1-3s, each poll drains Postgres — closed today but may need verification. |

---

**Health Indicators**  
✅ **Velocity**: 21 issues closed, 5 PRs merged in 24h  
✅ **Technical debt burn-down**: Tier-1 performance bugs systematically eliminated  
✅ **Architecture migration**: Unbound-turns model complete (#7634)  
⚠️ **CI reliability**: Live Canary 100% red due to harness bugs (#7679)  
⚠️ **Test stability**: Provider-contracts flake cascading (#7675)  
📋 **Next milestone**: Trajectory benchmark (#467) + OMP tool contract (#7491) + Live QA harness fix (#7679)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-16

## 1. Today's Overview
LobsterAI shows **low feature velocity but high maintenance activity** on 2026-08-15. Of 18 issues updated, 16 were closed as `[stale]` — a bulk cleanup of older reports (mostly from April–May 2026) rather than new resolutions. Only 2 issues remain open: a member-login failure (#1903) and a detailed agent-memory proposal (#2046). On the PR side, 2 patches were merged (plugin-path preservation, cron yield fix) while 4 Dependabot CI upgrades sit open. No new releases. The project appears in a **stabilization/housekeeping phase** with core contributors focusing on OpenClaw upstream integration and infrastructure hygiene.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs
| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#1879](https://github.com/netease-youdao/LobsterAI/pull/1879) | `main`, `openclaw` | **Fix:** Preserve manually-added plugin load paths during `OpenClawConfigSync.sync()` — prevents community plugins (e.g., `memory-lancedb-pro`) from being silently dropped when LobsterAI rewrites `openclaw.json`. | High — restores extensibility for power users. |
| [#2234](https://github.com/netease-youdao/LobsterAI/pull/2234) | `docs`, `openclaw` | **Fix:** Cron yield descendant finalization — ensures child-agent completion events correctly resume parent agent across parallel/serial cron scenarios. | Medium — improves reliability of scheduled/background agent workflows. |

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Core Need |
|------|------|----------|-----------|-----------|
| [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) | Issue (OPEN) | 3 | 0 | **Member login repeatedly fails**, blocking access to NetEase paid models. Screenshot shows auth error. |
| [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) | Issue (OPEN) | 2 | 0 | **Structured agent memory system** — session titles/metadata persistence, cross-session retrieval, automatic summarization. Detailed product spec. |
| [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) | Issue (CLOSED stale) | 2 | 0 | **Path-traversal in email SKILL** (`imap.js:downloadAttachments` unsanitized filenames). Security surface. |
| [#2040](https://github.com/netease-youdao/LobsterAI/issues/2040) | Issue (CLOSED stale) | 2 | 0 | **Strategic critique**: 5 OpenClaw weaknesses (memory, security, token cost, deployment, ecosystem). Signals architectural priorities. |

> **Pattern:** Open issues cluster around **auth reliability** and **long-term memory** — both prerequisites for production agent use. Closed-but-stale items reveal a backlog of UX polish (UI, loading states, scroll bugs) and upstream OpenClaw friction.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) Member login loop — blocks paid-model access | OPEN | No |
| **High** | [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) Email SKILL path traversal (RCE risk) | CLOSED stale | No (upstream skill fix needed) |
| **Medium** | [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) Infinite `NO_REPLY` / truncated output on follow-up | CLOSED stale | No |
| **Medium** | [#1993](https://github.com/netease-youdao/LobsterAI/issues/1993) "AI engine connection lost" on desktop; IM bot stable | CLOSED stale | No |
| **Medium** | [#1971](https://github.com/netease-youdao/LobsterAI/issues/1971) Virtual-scroll thrash with long Mermaid elements | CLOSED stale | No |
| **Low** | [#1920](https://github.com/netease-youdao/LobsterAI/issues/1920) Cowork blank `Loading...` instead of skeleton | CLOSED stale | No |
| **Low** | [#1921](https://github.com/netease-youdao/LobsterAI/issues/1921) Empty-state icons missing in Skills/History | CLOSED stale | No |

> **Note:** Most bugs were closed as `[stale]` without fix PRs — suggests they may persist in current builds. Prioritize #1903 (user-facing blocker) and #1885 (security).

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood Next Version |
|---------|--------|-------------------------|
| **Agent memory system** (session metadata, cross-session retrieval, auto-summarization) | [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) (detailed spec) | **High** — aligns with #2041 analysis & OpenClaw `memory-core` work |
| **Hermes Agent integration** (OpenWebUI-style agent marketplace) | [#1880](https://github.com/netease-youdao/LobsterAI/issues/1880) | Medium — requires OpenClaw upstream support |
| **OpenHuman engine** | [#2016](https://github.com/netease-youdao/LobsterAI/issues/2016) | Low — niche, no detail |
| **`agent:turn` / `agent:loop` events** for real-time persistence | [#2036](https://github.com/netease-youdao/LobsterAI/issues/2036) | Medium — needed for reliable checkpointing |
| **UI redesign** (professional design pass) | [#1836](https://github.com/netease-youdao/LobsterAI/issues/1836) | Low — subjective, no spec |

## 7. User Feedback Summary
- **Pain points:**  
  - Auth instability (#1903) — "cannot use paid models"  
  - Desktop engine disconnects (#1993) while IM bot works  
  - Follow-up streaming breaks (#1849)  
  - Scroll jank with complex renders (#1971)  
  - Missing skeleton/empty states feel "unfinished" (#1920, #1921)  
- **Use cases:**  
  - Local development with community plugins (plugin-path issue #1879)  
  - Scheduled/cron agent workflows (cron yield fix #2234)  
  - WeChat bot deployment (QR-code verification gap #1878)  
- **Sentiment:** Frustration on reliability basics; enthusiasm for memory/agent-evolution features. Users treat LobsterAI as a **daily driver** but hit ceilings on persistence & extensibility.

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) Member login failure | 101 days | **Blocker for paying users**; no workaround. |
| [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) Email SKILL path traversal | 102 days | **Security vulnerability** in bundled skill; requires patch in `resources/SKILLs/imap-smtp-email`. |
| [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) Agent memory system spec | 83 days | **Strategic feature** — comprehensive design ready for implementation planning. |
| [#2164–#2167](https://github.com/netease-youdao/LobsterAI/pulls?q=is%3Apr+is%3Aopen+author%3Adependabot%5Bbot%5D) 4× Dependabot CI upgrades | 62 days | Routine but **block CI freshness**; batch-review & merge. |
| [#2036](https://github.com/netease-youdao/LobsterAI/issues/2036) `agent:turn`/`agent:loop` events | 85 days | **Architectural enabler** for real-time persistence; needs OpenClaw gateway coordination. |

---

**Bottom line:** LobsterAI is polishing internals (config sync, cron yield) and clearing stale debt, but **user-blocking bugs (#1903, #1885) and the memory-system roadmap (#2046) deserve immediate triage**. The 4 open Dependabot PRs are a quick win to signal project health.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-16

## 1. Today's Overview
Moltis saw **high merge velocity** today with **14 PRs merged/closed** and only 2 remaining open, indicating a focused sprint wrap-up. No new release was cut, but the merged work spans security hardening, new memory backends, connector infrastructure, Slack UX improvements, and critical bug fixes for session management and sandbox builds. The project is in a healthy maintenance-and-expansion phase, with maintainers actively merging community contributions and dependabot updates.

---

## 2. Releases
**No new releases published today.**

---

## 3. Project Progress — Merged/Closed PRs (14)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#1180](https://github.com/moltis-org/moltis/pull/1180) | **Security** | Hardened model/zip extraction paths to prevent arbitrary file write → RCE via malicious HuggingFace repos or zip archives. | Critical: closes path-traversal vector in `clawhub.rs` and model loading. |
| [#1179](https://github.com/moltis-org/moltis/pull/1179) | **Security** | Bound `node.pair.verify` to server-issued pending request; callers can no longer supply arbitrary keys/challenges. | Hardens gateway node pairing against impersonation. |
| [#1182](https://github.com/moltis-org/moltis/pull/1182) | **Bug Fix** | Removed `main` session guard in `delete_impl` and `is_archivable_entry`; `main` session now deletable/archivable (fixes [#1132](https://github.com/moltis-org/moltis/issues/1132)). | UX unblock: users can manage default session like any other. |
| [#1191](https://github.com/moltis-org/moltis/pull/1191) | **Bug Fix** | Updated `gogcli` Go module path from `github.com/steipete/gogcli` → `github.com/openclaw/gogcli` in sandbox Dockerfile (fixes [#1189](https://github.com/moltis-org/moltis/issues/1189)). | Restores `moltis sandbox build` for all pre-built images. |
| [#1192](https://github.com/moltis-org/moltis/pull/1192) | **Bug Fix** | Fixed `wacrawl` skill install metadata to point at `openclaw` org. | Restores skill installation for web crawling. |
| [#1194](https://github.com/moltis-org/moltis/pull/1194) | **Bug Fix** | Guarded empty bash array expansions (`"${args[@]}"`) for macOS bash 3.2 compatibility in `just local-validate-full`. | Fixes CI/script failure on macOS. |
| [#1196](https://github.com/moltis-org/moltis/pull/1196) | **Bug Fix** | Eliminated per-result ClawHub metadata RPC calls during skill search; carries owner-qualified refs through install flow. | Prevents RPC timeout explosions; fixes legacy bare-slug reinstalls. |
| [#1198](https://github.com/moltis-org/moltis/pull/1198) | **Bug Fix** | Routed OpenAI `function tools + reasoning_effort` requests through Responses API; preserves Chat Completions for other cases. | Restores reasoning+tools compatibility for OpenAI models. |
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | **Feature** | Added `zvec` + `redb` vector database memory backend (feature-gated behind `zvec`, enabled in `full`). | New local-first embedding backend option; expands memory architecture. |
| [#1190](https://github.com/moltis-org/moltis/pull/1190) | **Feature** | Added durable connector persistence: CalDAV, Gmail, Himalaya v2, channel-history datasets with provider-owned schemas, atomic snapshots, scheduling, bounded local full-text search. | Major step toward long-lived, provider-neutral agent memory & tooling. |
| [#1195](https://github.com/moltis-org/moltis/pull/1195) | **Feature** | Slack native live task cards: channel-neutral tool lifecycle updates rendered as plan/task cards in response stream, opaque per-run IDs, terminal error cleanup. | Rich, real-time Slack UX for agent task tracking. |
| [#1197](https://github.com/moltis-org/moltis/pull/1197) | **Feature** | “Ask agent” action appended to command palette for every non-empty query; creates fresh chat session and sends query immediately. | Lowers friction to start agent chats from anywhere in UI. |
| [#1184](https://github.com/moltis-org/moltis/pull/1184) | **Chore** | Dependabot: `undici` 7.28.0 → 7.29.0 in `/website`. | Routine dependency hygiene. |
| [#1200](https://github.com/moltis-org/moltis/pull/1200) | **Chore** | Dependabot: `postcss` bump in `/crates/web/ui` & `/docs`; `js-yaml` bump in `/docs`. | Routine dependency hygiene. |

---

## 4. Community Hot Topics
| Item | Activity | Signal |
|------|----------|--------|
| [#1132](https://github.com/moltis-org/moltis/issues/1132) — “main” session can’t be deleted/archived | 1 comment, closed via [#1182](https://github.com/moltis-org/moltis/pull/1182) | User pain point on session management UX; fix merged quickly. |
| [#1189](https://github.com/moltis-org/moltis/issues/1189) — Sandbox build failing (wrong `gogcli` URL) | 0 comments, closed via [#1191](https://github.com/moltis-org/moltis/pull/1191) | Upstream dependency org rename (`steipete` → `openclaw`) broke builds; fixed same week. |
| [#1186](https://github.com/moltis-org/moltis/pull/1186) — Normalize recovery phrase before hashing | **Open**, 0 comments | Security-adjacent fix for vault unsealing consistency; awaiting review. |
| [#1199](https://github.com/moltis-org/moltis/pull/1199) — Coder remote workspace sandbox support | **Open**, 0 comments | New sandbox backend for enterprise/remote dev environments; early-stage, needs maintainer bandwidth. |

*Underlying needs:* Users expect **session flexibility**, **reliable sandbox builds**, and **enterprise-grade remote execution**. Security hardening is a maintainer priority (3 security PRs merged today).

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue/PR | Status | Fix PR |
|----------|----------|--------|--------|
| **Critical (RCE vector)** | Arbitrary file write via malicious zip/HF model ([#1180](https://github.com/moltis-org/moltis/pull/1180)) | Fixed | Merged [#1180](https://github.com/moltis-org/moltis/pull/1180) |
| **High (Auth bypass)** | Node pairing signature verification missing ([#1179](https://github.com/moltis-org/moltis/pull/1179)) | Fixed | Merged [#1179](https://github.com/moltis-org/moltis/pull/1179) |
| **High (Build break)** | `moltis sandbox build` fails on all pre-built images ([#1189](https://github.com/moltis-org/moltis/issues/1189)) | Fixed | Merged [#1191](https://github.com/moltis-org/moltis/pull/1191) |
| **Medium (UX block)** | `main` session undeletable/unarchivable ([#1132](https://github.com/moltis-org/moltis/issues/1132)) | Fixed | Merged [#1182](https://github.com/moltis-org/moltis/pull/1182) |
| **Medium (Skill install broken)** | `wacrawl`/`gogcli` Go module paths point to old org ([#1192](https://github.com/moltis-org/moltis/pull/1192)) | Fixed | Merged [#1192](https://github.com/moltis-org/moltis/pull/1192) |
| **Medium (macOS CI break)** | `just local-validate-full` crashes on bash 3.2 ([#1194](https://github.com/moltis-org/moltis/pull/1194)) | Fixed | Merged [#1194](https://github.com/moltis-org/moltis/pull/1194) |
| **Medium (RPC timeout)** | ClawHub skill search times out on metadata calls ([#1196](https://github.com/moltis-org/moltis/pull/1196)) | Fixed | Merged [#1196](https://github.com/moltis-org/moltis/pull/1196) |
| **Medium (OpenAI regression)** | Reasoning + tools broken for OpenAI ([#1198](https://github.com/moltis-org/moltis/pull/1198)) | Fixed | Merged [#1198](https://github.com/moltis-org/moltis/pull/1198) |
| **Low (Vault consistency)** | Recovery phrase hash mismatch on case/dash normalization ([#1186](https://github.com/moltis-org/moltis/pull/1186)) | **Open** | PR [#1186](https://github.com/moltis-org/moltis/pull/1186) open |

---

## 6. Feature Requests & Roadmap Signals
| Signal | Evidence | Likelihood for Next Release |
|--------|----------|----------------------------|
| **Vector memory backend diversity** | `zvec`+`redb` backend merged ([#1158](https://github.com/moltis-org/moltis/pull/1158)) | High — already in `full` feature set |
| **Durable, provider-neutral connectors** | CalDAV/Gmail/Himalaya/channel-history persistence merged ([#1190](https://github.com/moltis-org/moltis/pull/1190)) | High — large PR, foundational for agent memory |
| **Slack-native agent UX** | Live task cards merged ([#1195](https://github.com/moltis-org/moltis/pull/1195)) | High — user-facing, ships with next cut |
| **Command-palette agent entrypoint** | “Ask agent” from palette merged ([#1197](https://github.com/moltis-org/moltis/pull/1197)) | High — low-risk UX improvement |
| **Remote/ephemeral sandbox backends** | Coder workspace support **open** ([#1199](https://github.com/moltis-org/moltis/pull/1199)) | Medium — needs review, likely next cycle |
| **Vault recovery UX hardening** | Recovery phrase normalization fix **open** ([#1186](https://github.com/moltis-org/moltis/pull/1186)) | Medium — security-adjacent, small scope |

---

## 7. User Feedback Summary
- **Pain points**: Session management rigidity (`main` session), sandbox build breakage from upstream org renames, macOS script compatibility, skill search latency.
- **Use cases driving contributions**: Local-first vector memory (`zvec`), enterprise calendar/email integration, Slack-centric agent workflows, remote sandbox execution (Coder).
- **Satisfaction signals**: Rapid fix turnaround (issues → PRs → merge in days), maintainers merging community security fixes, dependabot noise kept low.
- **Dissatisfaction signals**: None explicit in last 24h; two open PRs ([#1186](https://github.com/moltis-org/moltis/pull/1186), [#1199](https://github.com/moltis-org/moltis/pull/1199)) awaiting review may indicate reviewer bandwidth constraints.

---

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1186](https://github.com/moltis-org/moltis/pull/1186) — Normalize recovery phrase before hashing | 7 days (opened 2026-08-09) | Vault unsealing consistency; security-adjacent; small, well-scoped fix. |
| [#1199](https://github.com/moltis-org/moltis/pull/1199) — Coder remote workspace sandbox support | 1 day (opened 2026-08-15) | New sandbox backend for enterprise/remote dev; expands deployment targets; needs architecture review. |
| *No stale issues* — both issues updated today were closed. | — | Healthy issue hygiene. |

---

**Overall Health**: 🟢 **Strong** — high merge throughput, security-first mindset, active feature expansion, and quick resolution of user-reported regressions. Two open PRs ([#1186](https://github.com/moltis-org/moltis/pull/1186), [#1199](https://github.com/moltis-org/moltis/pull/1199)) are the only items awaiting maintainer action.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-16

## 1. Today's Overview
CoPaw (QwenPaw) shows high community velocity with **19 items updated in the last 24 hours** (9 issues, 10 PRs), but **zero merges or releases** — indicating a backlog of review work. The issue stream is dominated by **video handling regressions** (2 bugs), **OAuth2 token rotation failures**, and **Console/WebUI UX gaps** (virtual scrolling, context strategy, image persistence). PRs span major architectural work (provider unification, DataPaw runtime) and targeted fixes (video delivery, PATH injection, ACP race condition). Project health: **active development, but release cadence appears stalled**; maintainers should prioritize triaging the 10 open PRs to unblock contributors.

## 2. Releases
**No new releases** in the last 24 hours. The latest published version remains **v2.1.0** (per issue reports). Several merged-but-unreleased fixes (e.g., #7055, #7057, #7061) are accumulating — a patch release (v2.1.1) would deliver immediate value for video, cron, and shell PATH bugs.

## 3. Project Progress (Merged/Closed Today)
- **Issues closed**: 1 — **#6476** (Matrix E2E encryption) marked closed after user confirmed `libolm-dev` + `matrix-nio[e2e]` installation works; no code change required.
- **PRs merged**: **0** — All 10 PRs updated today remain open. Notable PRs with recent activity but no merge:
  - **#7055** (fix: cron `--text` update for agent jobs) — ready, fixes silent failure.
  - **#7057** (fix: user-local `bin` dirs in subprocess `PATH`) — ready, unblocks CLI tools in daemon mode.
  - **#7061** (fix: deliver tool-result videos on OpenAI Responses API) — ready, addresses #7059/#7060.
  - **#6623** (fix: ACP final text loss under notification race) — under review, critical for streaming integrity.

## 4. Community Hot Topics (Most Active Items)
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#3915](https://github.com/agentscope-ai/QwenPaw/issues/3915) | Issue | 3 | 1 | **Virtual scrolling** for Console WebUI — long conversations cause severe DOM lag; blocker for power users. |
| [#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476) | Issue | 3 | 0 | Matrix E2E encryption — resolved via docs/install steps, but signals **onboarding friction** for secure comms. |
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | PR | — | 0 | **DataPaw native app runtime** — major feature (new analysis workspace); screenshots show advanced UI. High impact, needs review bandwidth. |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | PR | — | 0 | **Provider unification** — catalog-driven model routing, fallback, capability-aware selection. Architectural backbone for multi-provider support. |

**Signal**: Community is pushing **Console/WebUI scalability** (#3915, #7058, #7049) and **multi-provider/agent orchestration** (#6302, #7050, #7001). Maintainer review capacity is the bottleneck.

## 5. Bugs & Stability (Reported Today, Ranked by Severity)
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#7059](https://github.com/agentscope-ai/QwenPaw/issues/7059) | `view_video` tool returns success but **silently drops video frames** for OpenAI Responses API / Volcengine Ark — model receives zero video data. | ✅ **#7061** (open, ready) |
| **High** | [#7060](https://github.com/agentscope-ai/QwenPaw/issues/7060) | `view_video` **hardcoded 2 MB inline limit** ignores provider `max_inline_media_bytes`; large videos replaced with placeholder text. | ✅ **#7061** (same PR) |
| **High** | [#7053](https://github.com/agentscope-ai/QwenPaw/issues/7053) | **OAuth2 refresh token rotation not persisted** — remote MCP (e.g., XMind) degrades to manual re-auth after token expiry; no proactive renewal. | ❌ No PR yet |
| **Medium** | [#7051](https://github.com/agentscope-ai/QwenPaw/issues/7051) | **Image attachments lost on session reload** — backend serves data URL, frontend shows broken thumbnail; history broken after restart. | ❌ No PR yet |
| **Medium** | [#7055](https://github.com/agentscope-ai/QwenPaw/pull/7055) | `qwenpaw cron update --text` **silently fails for agent-type jobs** — returns success but prompt unchanged. | ✅ **#7055** (open, ready) |
| **Low** | [#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476) | Matrix E2E encryption install friction (closed — user resolved via `libolm-dev` + `uv pip install matrix-nio[e2e]`). | N/A |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|-----------------------------|-----------|
| **Virtual scrolling / paginated rendering** for Console message list | [#3915](https://github.com/agentscope-ai/QwenPaw/issues/3915) (3 👍, 3 comments) | **High** — UX blocker for long chats; PR #7049 (pagination API) already open. |
| **Restore native context strategy selector** in Web UI | [#7058](https://github.com/agentscope-ai/QwenPaw/issues/7058) | **High** — Backend supports `native`/`scroll`; UI removed in v2.1.0. Low-effort restore. |
| **Per-cron-job model override picker** | [#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050) | **High** — PR ready; backend contract exists; enables agent scheduling flexibility. |
| **Background task callback/notification** (webhook/push vs. polling) | [#7056](https://github.com/agentscope-ai/QwenPaw/issues/7056) | **Medium** — Architectural; requires API design. Strong demand for async agent workflows. |
| **Plugin API `system_prompt` permission** (hide prompt from user) | [#7052](https://github.com/agentscope-ai/QwenPaw/issues/7052) | **Medium** — Enterprise plugin use case; security/privacy angle. |
| **Remote Chrome bridge endpoint** (LAN/network browsers) | [#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054) | **Medium** — PR ready; unblocks remote browser debugging. |
| **Matrix per-sender session/memory isolation** in group rooms | [#7001](https://github.com/agentscope-ai/QwenPaw/pull/7001) | **Medium** — PR ready; fixes shared-context bug in group chats. |
| **Unified provider discovery & model routing** | [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | **Low (major)** — Large refactor; foundational for v3.0. Long review cycle expected. |
| **DataPaw native app runtime** | [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | **Low (major)** — New product surface; infra repo separate. Strategic, not imminent. |

## 7. User Feedback Summary
**Pain Points (from issues):**
- **Video analysis broken** for major providers (OpenAI Responses, Volcengine Ark) — "silent failure" erodes trust (#7059, #7060).
- **Console WebUI unusable for long conversations** — full DOM render causes severe lag; users need virtual scrolling (#3915).
- **Images vanish after reload** — breaking workflow continuity (#7051).
- **OAuth2 re-auth loop** for remote MCP — manual intervention required after token rotation (#7053).
- **Cron job prompt updates ignored** — silent failure wastes debugging time (#7055).

**Use Cases Emerging:**
- **Enterprise plugin development** — need hidden `system_prompt` for proprietary logic (#7052).
- **Multi-user Matrix group bots** — per-user memory/session isolation (#7001).
- **Remote browser debugging** — Chrome extension bridging over LAN (#7054).
- **Async agent orchestration** — webhook/callback for background tasks (#7056).

**Satisfaction Signals:**
- Matrix E2E encryption works *if* install steps followed — docs gap, not code gap (#6476).
- Contributors submitting **first-time PRs** for significant features (6/10 PRs tagged `first-time-contributor`) — healthy onboarding.

## 8. Backlog Watch (Stale High-Value Items Needing Maintainer Attention)
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 26 days | Open, no review | **Provider unification** — blocks multi-model routing, fallback, capability-aware selection. Foundation for enterprise scalability. |
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | 4 days | Open, no review | **DataPaw runtime** — new product line; screenshots show polished UI. Separate infra repo. Needs architectural sign-off. |
| [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) | 15 days | Under Review | **ACP race condition fix** — prevents final text loss when notification + prompt response race. Critical for streaming reliability. |
| [#3915](https://github.com/agentscope-ai/QwenPaw/issues/3915) | 110 days | Open | **Virtual scrolling** — highest community 👍 (1) among old issues; PR #7049 (pagination API) unblocks frontend work. |
| [#7001](https://github.com/agentscope-ai/QwenPaw/pull/7001) | 3 days | Open | **Matrix group room isolation** — fixes shared context bug; ready for merge. |
| [#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054) | 1 day | Open | **Remote Chrome bridge** — enables LAN debugging; small, focused PR. |

---

**Recommendation**: Prioritize merging **#7055, #7057, #7061, #7001, #7054, #7050** (6 targeted fixes/features, all ready) to ship v2.1.1 this week. Assign reviewers for **#6302** and **#6940** (architectural PRs) to prevent contributor churn. Address **#7053** (OAuth2 rotation) and **#7051** (image persistence) as next sprint bugs — both affect enterprise/remote usage.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-16

## 1. Today's Overview
ZeroClaw shows **high architectural churn with low release velocity** — 15 active issues (all RFCs/trackers) and 50 PRs updated, but zero new releases. The project is in a **pre-v0.8.5 stabilization phase** (tracker #9459, intake frozen Aug 4, target Aug 30), with maintainers focused on resolving cross-cutting architectural RFCs around chat completions compatibility, runtime-owned sessions, unified attachments, security posture, and telemetry. Six PRs merged/closed today, primarily completing the **Anthropic refusal/fallback stack** (PRs #9262–#9268). Bug surface area is small but includes a **data-loss severity issue** in ACP (#10018) and a **usability regression** in ZeroCode TUI (#10022).

## 2. Releases
**No new releases today.** The project is tracking toward **v0.8.5** (stabilization line tracked in #9459, weekly cuts through Aug 30). Next release will likely include: Anthropic refusal/fallback handling, SOP daemon control plane progress, cron job timeout fixes, and SSRF hardening for `file_download`.

## 3. Project Progress — Merged/Closed PRs (6)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#9262](https://github.com/zeroclaw-labs/zeroclaw/pull/9262) | Surface native Anthropic refusals as typed errors | Provider: Anthropic | Fixes silent empty-success on `stop_reason: "refusal"` |
| [#9263](https://github.com/zeroclaw-labs/zeroclaw/pull/9263) | Route refusals through client-side fallback entries | Provider: Reliable/Anthropic | Enables fallback model on refusal |
| [#9265](https://github.com/zeroclaw-labs/zeroclaw/pull/9265) | Opt-in Anthropic server-side fallback requests | Provider: Anthropic | Adds `server_fallback_models` config |
| [#9266](https://github.com/zeroclaw-labs/zeroclaw/pull/9266) | Detect Anthropic server-side fallback responses | Provider: Anthropic | Reads `NativeChatResponse.model` & `AnthropicUsage.iterations` |
| [#9268](https://github.com/zeroclaw-labs/zeroclaw/pull/9268) | Surface safeguard fallback notices in channels | Channel/CLI/ACP | User-visible notice when fallback occurs |
| [#9272](https://github.com/zeroclaw-labs/zeroclaw/pull/9272) | Handle refusals with fallback notices (consolidated) | Provider/Channel | Umbrella PR closing the stack |

**Net effect:** Anthropic refusal handling is now **fully implemented end-to-end** — typed errors, client-side fallback, server-side fallback opt-in, response detection, and user-facing notices across CLI, ACP, and web channels.

## 4. Community Hot Topics — Most Active Discussions
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC | 21 | **OpenAI Chat Completions API compatibility** — enable ZeroClaw agents to be consumed by Open WebUI, LobeChat, Continue.dev, Aider, LangChain, OpenAI SDK |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC | 17 | **Runtime-owned conversation sessions** — decouple session lifecycle from transport (WebSocket, ACP, webhooks) via `InboundAction` admission |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC | 16 | **Unified attachment architecture** — consistent file/image handling across web chat and all channels |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | RFC | 13 | **Provenance for internally-initiated agent turns** — cron/scheduled jobs need conversation binding & reply contract |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | RFC | 13 | **Unified security posture** — credential boundaries, ingress trust, sandboxing, workspace policy, tool approval, channel auth, gateway pairing, receipts, redaction |
| [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) | RFC | 5 | **Opt-in product telemetry** — maintainers lack usage data for feature investment/removal decisions |

**Pattern:** All top discussions are **architectural RFCs** (not bug reports), indicating the project is in a **platform-maturity phase** — resolving cross-cutting concerns before stabilizing APIs. The Chat Completions RFC (#8603) has highest engagement, reflecting strong external demand for standard API compatibility.

## 5. Bugs & Stability — Today's Reports
| Severity | Issue | Component | Status | Fix PR |
|----------|-------|-----------|--------|--------|
| **S0 — Data loss** | [#10018](https://github.com/zeroclaw-labs/zeroclaw/issues/10018): ACP graceful-summary text silently dropped on max-iteration exit | Channel/ACP | Open | None yet |
| **S2 — Degraded behavior** | [#10020](https://github.com/zeroclaw-labs/zeroclaw/issues/10020): Agentic independent delegates ignore target thinking policy | Runtime/Daemon | Open | [#10021](https://github.com/zeroclaw-labs/zeroclaw/pull/10021) (opened today) |
| **S3 — Minor** | [#10022](https://github.com/zeroclaw-labs/zeroclaw/issues/10022): Can't copy text from ZeroCode chat | ZeroCode/TUI | Open | None yet |
| **Test hygiene** | [#10011](https://github.com/zeroclaw-labs/zeroclaw/issues/10011): Runtime-written executable in daemon heartbeat test | Daemon/Test | Open | None yet |

**Notable:** The S0 ACP data-loss bug (#10018) affects **operator-facing audit trails** — when tool-iteration limit hits, the synthetic "provide your best answer" prompt response is dropped. The delegate thinking-policy bug (#10020) has a **same-day fix PR** (#10021) from core contributor `vrurg`.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for v0.8.5+ |
|--------|--------|------------------------|
| **OpenAI Chat Completions API** | #8603 (21 comments, high risk, p2) | Medium — RFC stage, requires gateway/runtime changes |
| **Runtime-owned sessions + transport adapters** | #9487 (17 comments, ratified boundary) | High — architectural prerequisite for #8603 |
| **Unified attachment architecture** | #9488 (16 comments, paired with #9487) | High — blocks consistent UX across channels |
| **Gemini Live realtime voice channel** | #8780 (11 comments, broker contract v2) | Low — feature-gated, provider-specific |
| **Staged opt-in telemetry** | #9621 (5 comments, maintainer pain point) | Medium — low implementation cost, high decision value |
| **SOP daemon control plane (5/5 capabilities)** | #8288 (tracker, 13 capabilities) | High — active milestone, multiple PRs in flight |
| **Hailo-Ollama native provider** | #9109 (XL PR, needs-author-action) | Medium — provider expansion, docs/doctor integration |
| **Herdr observability integration** | #8337 (XL PR, opt-in agent lifecycle reporting) | Low — niche integration, XL scope |

**Prediction:** Next version (v0.8.5) will ship **Anthropic fallback stack, cron timeout fix (#9320), SSRF hardening (#8713), SOP progress, and config validation fixes (#9753)**. Chat Completions API and runtime-owned sessions are **v0.9+** work.

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **No standard API for external clients** | #8603: "Clients that speak OpenAI Chat Completions protocol — Open WebUI, LobeChat, Continue.dev, Aider, LangChain, OpenAI SDK" | Blocks adoption in existing AI tool ecosystems |
| **ACP data loss on iteration limit** | #10018: "graceful-summary text is silently dropped" | Operators lose audit context on long-running turns |
| **ZeroCode TUI copy broken** | #10022: "highlight text with mouse… nothing gets selected" | Daily usability friction for terminal users |
| **Delegate thinking policy ignored** | #10020: "does not apply target profile's thinking configuration" | Inconsistent reasoning behavior in multi-agent flows |
| **Maintainers blind to feature usage** | #9621: "make support, removal, and investment decisions without knowing whether released features are used" | Risk of maintaining dead code or removing used features |

**Sentiment:** **Technical users want standard interoperability** (Chat Completions) and **reliable observability** (telemetry, ACP audit). Terminal UX regressions (#10022) indicate **dogfooding gaps** in ZeroCode.

## 8. Backlog Watch — Stalled High-Value Items
| Item | Age | Blockers | Maintainer Action Needed |
|------|-----|----------|--------------------------|
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) RFC: Chat Completions profile | 45 days | Depends on #9487/#9488 runtime-owned sessions & attachments | **Ratify architecture** — this is the top external demand |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) RFC: Security posture unification | 81 days | Cross-cutting, touches credential handling, ingress, sandboxing, policy | **Assign security lead** — too broad for drive-by review |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) RFC: Provenance for internal turns | 82 days | Rewritten Aug 5, needs completeness review | **Schedule ratification** — blocks cron/scheduler reliability |
| [#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337) Herdr observability | 51 days | XL PR, needs-author-action | **Review or close** — niche, but shows observability demand |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) Hailo-Ollama provider | 30 days | XL PR, needs-author-action, quickstart/docs/doctor | **Triage provider scope** — is Hailo strategic? |
| [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) ZeroCode multi-session panes | 12 days | Depends on #9738 (merged), XL scope | **Review UI/UX** — high user visibility |

**Critical path:** **#9487 → #9488 → #8603** form a dependency chain for the highest-impact feature (Chat Completions API). No maintainer has formally ratified the chain since Aug 3 boundary clarification.

---

**Health Score: 7/10** — Strong architectural discipline (RFC process, stacked PRs, trackers), active contributor base, but **release cadence lagging** behind architectural ambition. Zero S0 bugs in merged code, but one fresh S0 in ACP needs immediate triage.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*