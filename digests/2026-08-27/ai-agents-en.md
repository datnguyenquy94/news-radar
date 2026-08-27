# OpenClaw Ecosystem Digest 2026-08-27

> Issues: 186 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-27 06:13 UTC

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

# OpenClaw Project Digest — 2026-08-27

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 686 total items updated in the last 24 hours (186 issues, 500 PRs). The project is in active maintenance mode with a 34% PR merge/close rate (169/500) and 39% issue closure rate (73/186). No new releases were published today. The issue backlog reveals a concentration of **P1 multi-agent orchestration bugs** (session-state, message-loss, agent lifecycle) and **gateway/plugin integration regressions**. PR activity is heavily skewed toward fixes for subagent completion handling, memory indexing, channel webhook handling, and CLI/backend model resolution — indicating a stabilization push ahead of a likely beta/rc cycle.

---

## 2. Releases

**No new releases published today.** The latest versions in issues remain `2026.7.1-2` (stable) and `2026.7.2-beta.7` (beta). Several issues reference fixes already landed in beta.7 but regressing again (e.g., #118839), suggesting the beta channel is actively iterating.

---

## 3. Project Progress — Merged/Closed PRs Today (169)

Key merged/closed PRs signal progress on **core stability**:

| PR | Area | Impact |
|----|------|--------|
| [#124543](https://github.com/openclaw/openclaw/pull/124543) | gateway | Fixes **assistant turns rendering twice** on CLI backends (claude-cli) — major UX fix for Control UI/Android |
| [#126907](https://github.com/openclaw/openclaw/pull/126907) | plugins | Bound failed-start service cleanup with replacement stop timeout — prevents gateway hot-reload wedging |
| [#126399](https://github.com/openclaw/openclaw/pull/126399) | codex | Allow computer reuse across completed runs — fixes `COMPUTER_HOST_BUSY` stale ownership |
| [#126856](https://github.com/openclaw/openclaw/pull/126856) | imessage | Stop self-chat dedupe from tripping loop limiter — fixes false positive conversation limits |
| [#130698](https://github.com/openclaw/openclaw/pull/130698) | memory-core | Keep indexing after memory folder replacement — fixes watcher retention on Linux |
| [#126486](https://github.com/openclaw/openclaw/pull/126486) | memory-core | Restore MEMORY.md when in-place fallback write fails midway — prevents corruption |
| [#123975](https://github.com/openclaw/openclaw/pull/123975) | scripts | Clean up tsgo process trees on timeout/signal — CI stability |
| [#118157](https://github.com/openclaw/openclaw/pull/118157) | channels | Bundled channels now accept documented `mediaMaxMb` override — config validation fix |
| [#130734](https://github.com/openclaw/openclaw/pull/130734) | docs | Clarify hooks setup/execution contracts — developer experience |
| [#130709](https://github.com/openclaw/openclaw/pull/130709) | docs | Add "Why OpenClaw enterprise architecture" page — enterprise evaluation support |

**Pattern**: Fixes target **session-state corruption**, **plugin lifecycle**, **channel delivery**, and **memory persistence** — the four pillars of multi-agent reliability.

---

## 4. Community Hot Topics (Most Commented/Reactive)

### Top Issues by Discussion Volume

| Issue | Comments | 👍 | Core Problem | Underlying Need |
|-------|----------|-----|--------------|-----------------|
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 14 | 1 | **Multi-agent orchestration unstable**: concurrent `agents add` overwrites config, session-lock failures, detached child work | **Production-grade parallel agent runs** — users need reliable batch orchestration |
| [#114154](https://github.com/openclaw/openclaw/issues/114154) | 8 | 0 | **bundle-mcp**: tool passes policy & health checks but agent sessions never bundle it — ToolSearch finds nothing | **MCP tool discovery broken** — core extensibility blocker |
| [#118018](https://github.com/openclaw/openclaw/issues/118018) | 7 | 0 | **Stale subagent completion delivered into replaced requester lifecycle** — silent data loss | **Subagent completion routing correctness** — message-loss severity |
| [#80498](https://github.com/openclaw/openclaw/issues/80498) | 7 | 3 | **Subagent completion announcements premature/duplicated** after tool-use turns | **Subagent lifecycle state machine** needs hardening |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | 7 | 0 | **Usage-cost refresh lock never releasable** after container restart reusing PID — permanently freezes cache | **Container-native lock semantics** — infrastructure compatibility |
| [#112248](https://github.com/openclaw/openclaw/issues/112248) | 6 | 0 | **@openclaw/codex plugin fails to register** on gateway boot — `TypeError: openSyncKeyedStore` | **Plugin initialization order** — critical plugin broken |
| [#118839](https://github.com/openclaw/openclaw/issues/118839) | 5 | 0 | **Regression**: 'restart recovery claim changed before agent adoption' reappears on beta.7 | **Restart recovery reliability** — previously fixed, now regressed |
| [#123548](https://github.com/openclaw/openclaw/issues/123548) | 4 | 0 | **message_tool_only requesters silently lose subagent results** when completion agent skips message tool | **Subagent result propagation** — silent data loss |

### Top PRs by Review Activity
*(Note: Comment counts not provided in data; prioritized by "ready for maintainer look" status and merge-risk tags)*

- [#130466](https://github.com/openclaw/openclaw/pull/130466) — **Schema v13 consolidation** (XL, P1, 🦐 gold shrimp): Consolidates wide rows, plugin index, workspace attestations, shared auth singletons. High merge-risk (compatibility, session-state, availability). **Blocked on author.**
- [#123356](https://github.com/openclaw/openclaw/pull/123356) — **Control UI slash command arguments staging** (XL, P1, 🦐 gold shrimp): Composer/UI phase for slash commands. **Waiting on author.**
- [#124543](https://github.com/openclaw/openclaw/pull/124543) — **Assistant double-render fix** (L, P1, 🐚 platinum hermit): **Merged/ready** — high impact UX fix.
- [#130698](https://github.com/openclaw/openclaw/pull/130698) — **Memory indexing after folder replacement** (XL, P1, 🐚 platinum hermit): **Ready for maintainer look** — fixes Linux watcher retention.
- [#130563](https://github.com/openclaw/openclaw/pull/130563) — **Prevent early final responses in sequential subagent runs** (XL, P1): **Needs proof** — addresses subagent wave finalization bug.

---

## 5. Bugs & Stability — Ranked by Severity

### 🔴 Critical (P1, Data/Message Loss, Session-State Corruption)

| Issue | Severity | Fix PR Status |
|-------|----------|---------------|
| [#43367](https://github.com/openclaw/openclaw/issues/43367) Multi-agent orchestration: config overwrites, session-lock failures, detached children | **P1, 🦐 gold shrimp, data-loss, message-loss** | Linked PR open, needs maintainer review |
| [#118018](https://github.com/openclaw/openclaw/issues/118018) Stale subagent completion delivered to wrong requester lifecycle | **P1, 🦞 diamond lobster, session-state, message-loss** | Linked PR open, source repro |
| [#80498](https://github.com/openclaw/openclaw/issues/80498) Subagent completion premature/duplicated after tool-use | **P1, 🦐 gold shrimp, session-state, message-loss** | Needs info |
| [#123548](https://github.com/openclaw/openclaw/issues/123548) `message_tool_only` requesters silently lose subagent results | **P1, 🦞 diamond lobster, message-loss** | Source repro, needs maintainer review |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) Usage-cost refresh lock permanently frozen after container PID reuse | **P1, 🦞 diamond lobster** | Linked PR open, source repro |
| [#119411](https://github.com/openclaw/openclaw/issues/119411) Memory file watcher never reindexes; `Dirty: no` but indexed < on-disk | **P1, 🦐 gold shrimp, session-state** | Needs info |
| [#118242](https://github.com/openclaw/openclaw/issues/118242) Exec-approvals migration rejects null `lastUsedAt` from older versions | **P1, 🦞 diamond lobster, ux-friction** | Linked PR open, source repro |
| [#122357](https://github.com/openclaw/openclaw/issues/122357) Bundled memory-wiki omits `mdast-util-from-markdown` dep in npm packages | **P1, 🦞 diamond lobster** | Linked PR open, source repro |
| [#120154](https://github.com/openclaw/openclaw/issues/120154) Config reload unconditionally rebuilds all prepared-model snapshots | **P1, 🐚 platinum hermit** | Needs product decision |

### 🟠 High (P1/P2, Availability, UX Friction)

| Issue | Severity | Fix PR Status |
|-------|----------|---------------|
| [#114154](https://github.com/openclaw/openclaw/issues/114154) bundle-mcp: tool healthy but never bundled — ToolSearch empty | **P1, 🦐 gold shrimp, session-state** | Needs maintainer review, needs info |
| [#112248](https://github.com/openclaw/openclaw/issues/112248) @openclaw/codex plugin fails to register — `openSyncKeyedStore` undefined | **P1, 🦐 gold shrimp** | Needs maintainer review, needs info |
| [#118839](https://github.com/openclaw/openclaw/issues/118839) Restart recovery regression on beta.7 | **P1, 🐚 platinum hermit** | Needs live repro, bulk-filed |
| [#115256](https://github.com/openclaw/openclaw/issues/115256) Desktop app boot-loops gateway; `doctor` recommends fix app reverts | **P2, 🦞 diamond lobster, ux-friction** | Needs maintainer review |
| [#126429](https://github.com/openclaw/openclaw/issues/126429) CLI-backend models: models-list crash, auth not recognized for secondary IDs | **P2, 🐚 platinum hermit, auth-provider** | Needs live repro, recovery-stuck |
| [#130673](https://github.com/openclaw/openclaw/issues/130673) Authenticated Claude CLI models show unknown auth in models list | **P2, 🦞 diamond lobster, auth-provider, stable** | New today, no fix PR yet |

### 🟡 Medium (P2/P3, Compatibility, Security, UX)

- [#40786](https://github.com/openclaw/openclaw/issues/40786) Backup CLI lacks `.gitignore`-like exclude patterns (P2, security)
- [#114158](https://github.com/openclaw/openclaw/issues/114158) `fs-safe` hardcoded `0o600` ignores umask — breaks shared workspaces (P2, security)
- [#112475](https://github.com/openclaw/openclaw/issues/112475) Device pairing recovery fails after removal (P2, security, ux-friction)
- [#72176](https://github.com/openclaw/openclaw/issues/72176) Intermittent duplicate message delivery across all channels since 2026.4.24 (P2, regression)
- [#45469](https://github.com/openclaw/openclaw/issues/45469) `scheduleReconnect()` has no max retry limit — infinite loop (P3)
- [#116473](https://github.com/openclaw/openclaw/issues/116473) Operator-initiated inter-agent delegation via `@A ask @B` syntax (P3, stale, security review needed)

---

## 6. Feature Requests & Roadmap Signals

### High-Signal Requests (Active Discussion, Clear ROI)

| Issue | Signal Strength | Predicted Next-Version Inclusion |
|-------|-----------------|----------------------------------|
| [#40786](https://github.com/openclaw/openclaw/issues/40786) Backup CLI exclude patterns (`.gitignore`-like) | 11 comments, P2, security + UX | **High** — low complexity, high user pain |
| [#26037](https://github.com/openclaw/openclaw/issues/26037) Ali Bailian coding plan support (thinking/reasoning) | 5 comments, 4 👍, P2, auth-provider | **Medium** — provider-specific, needs product decision |
| [#107930](https://github.com/openclaw/openclaw/issues/107930) Improve upgrade experience when Node.js version changes | 5 comments, 1 👍, P2, ux-friction | **High** — affects all users, linked to release process |
| [#20837](https://github.com/openclaw/openclaw/issues/20837) Make agent aware of communication channel (Telegram vs Dashboard) | 5 comments, P2, queueable-fix | **Medium** — architectural, plugin-first verdict pending |
| [#116473](https://github.com/openclaw/openclaw/issues/116473) Operator-initiated inter-agent delegation `@A ask @B` | 4 comments, P3, security review needed | **Low** — requires security/model, plugin-first scope |
| [#122654](https://github.com/openclaw/openclaw/issues/122654) Manage shared MCP OAuth in Control UI | 3 comments, P3, auth-provider | **Medium** — UI gap for existing CLI flow |
| [#87733](https://github.com/openclaw/openclaw/issues/87733) Cross-gateway federation protocol (FRD) | 3 comments, 1 👍, P3, stable | **Low** — draft FRD, enterprise-only, long-term |

### Emerging Patterns
1. **Enterprise hardening**: Auth-provider fixes, audit logs, federation FRD, "Why OpenClaw" docs — Red Hat evaluation driving scope.
2. **Plugin ecosystem maturity**: MCP bundling, Codex plugin registration, channel mediaMaxMb, shared OAuth — plugins moving from "works on my machine" to "production configurable."
3. **Container/cloud-native**: PID-reuse locks, gateway hot-reload wedging, cloud machine picker catalog limits — infrastructure parity work.

---

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence (Issues) | User Impact |
|------------|-------------------|-------------|
| **Multi-agent runs unreliable in production** | [#43367](https://github.com/openclaw/openclaw/issues/43367) (14 comments), [#118018](https://github.com/openclaw/openclaw/issues/118018), [#80498](https

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent / Personal AI Assistant Open-Source Ecosystem (2026-08-27)

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source landscape is **highly fragmented but technically converging** around multi-agent orchestration, model-agnostic provider abstraction, and channel/plugin extensibility. Of 12 tracked projects, 9 showed meaningful activity in the last 24 hours, with **OpenClaw, Hermes Agent, NanoClaw, CoPaw, and ZeroClaw** operating at high velocity (>20 PRs/day). The ecosystem is bifurcating into **core runtime frameworks** (OpenClaw, Hermes, IronClaw, ZeroClaw) that prioritize orchestration correctness and security, and **product-oriented distributions** (LobsterAI, PicoClaw, Moltis, CoPaw) that ship packaged UIs, installer polish, and consumer-facing features. A clear stabilization push is underway across the board: release candidates (IronClaw v1.4.0-rc.1, CoPaw v2.2.0-beta.1), beta channels (OpenClaw 2026.7.2-beta.7), and freeze milestones (ZeroClaw v0.8.5 Aug 30) indicate the sector is transitioning from rapid feature expansion to production hardening.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged PRs (24h) | Release Status | Health Score* |
|---------|--------------|-----------|------------------|----------------|---------------|
| **OpenClaw** | 186 | 500 | 169 | Beta.7 active, no new release | 🟢 **9/10** (extreme velocity, active stabilization) |
| **Hermes Agent** | 11 | 50 | 6 | No release, continuous delivery | 🟢 **8/10** (high velocity, critical installer bugs) |
| **NanoClaw** | ~0 | 24 | 6 | No release, fixes accumulating | 🟢 **8/10** (high throughput, 1 critical untriaged bug) |
| **CoPaw (QwenPaw)** | 21 | 44 | 27 | **v2.2.0-beta.1 today** | 🟢 **8/10** (release shipped, test infra overhaul) |
| **ZeroClaw** | 13 | 50 | 5 | v0.8.5 freeze (Aug 30), v0.9.0 scoped | 🟡 **7/10** (architectural ambition, review bottleneck) |
| **IronClaw** | 0 | 47 | 47 | **v1.4.0-rc.1 yesterday** | 🟢 **8/10** (massive backlog clear, RC cut) |
| **LobsterAI** | 2 | 16 | 16 | 2026.08.26 staged (PR merged) | 🟢 **8/10** (mature CI/CD, zero open PRs) |
| **PicoClaw** | 7 | 6 | 4 | v0.3.1 current, no new release | 🟡 **6/10** (moderate, usability regressions open) |
| **Moltis** | 1 | 2 | 2 | **20260826.01 today** | 🟡 **6/10** (low velocity, clean but quiet) |
| **NullClaw** | 1 | 0 | 0 | No release, quiet | 🔴 **3/10** (minimal activity) |
| **ZeptoClaw** | 0 | 0 | 0 | No activity | 🔴 **1/10** (dormant) |
| **NanoBot** | — | — | — | — | ⚪ **N/A** (data unavailable) |

*Health Score: Composite of velocity, release cadence, bug severity, review throughput, and community engagement (1-10 scale).

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Scale of orchestration focus**: 686 items/24h dwarfs all peers; the only project treating multi-agent session-state, message routing, and plugin lifecycle as **P1 production-blockers** with dedicated emoji-tagged severity tiers (🦐 gold shrimp, 🦞 diamond lobster, 🐚 platinum hermit).
- **Enterprise readiness signals**: Explicit Red Hat evaluation driving auth-provider fixes, audit logs, federation FRD, and "Why OpenClaw enterprise architecture" docs — no other project shows this level of enterprise GTM preparation.
- **Plugin/channel maturity**: MCP bundling fixes, Codex plugin registration, channel `mediaMaxMb` config validation, and gateway hot-reload wedging fixes indicate a **production-grade extensibility layer** that peers are still building (ZeroClaw's MCP OAuth, Hermes' MCP issuer mismatch, LobsterAI's custom provider gaps).

### Technical Approach Differences
| Dimension | OpenClaw | Peer Consensus |
|-----------|----------|----------------|
| **Architecture** | Monorepo core with gateway/plugin/channel subsystems; session-state as first-class citizen | Most peers: modular but less centralized state management (ZeroClaw's persistence contract conflict #9600, Hermes' WS-only revert) |
| **Multi-agent** | Native subagent completion routing, session-lock, lifecycle state machine | Others: emerging (CoPaw Hub multi-tenant, ZeroClaw session-scoped attachments, IronClaw notification inbox) |
| **Security** | PID-reuse lock fixes, exec-approvals migration, config reload snapshot control | ZeroClaw leads on sandbox/SSRF/mTLS; IronClaw on TOCTOU; OpenClaw catching up on container-native semantics |

### Community Size Comparison
- **OpenClaw**: Largest active contributor base implied by PR volume (500/24h) and maintainer-tagged triage labels (P1, 🦐, 🦞, 🐚). Issue discussion depth (14 comments on #43367) exceeds most peers.
- **Hermes/ZeroClaw/CoPaw**: Strong but smaller core teams; Hermes' skills-index watchdog (104 comments) shows operational community, not user-scale.
- **LobsterAI/PicoClaw/Moltis**: Product-focused communities; faster merge cycles but narrower scope.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Multi-agent / subagent orchestration reliability** | OpenClaw (#43367, #118018, #80498, #123548), CoPaw (#6921, #7193, #7321), ZeroClaw (#9998→#10405), IronClaw (#6096) | Session-state isolation, completion routing correctness, memory/context leakage prevention, silent stall detection |
| **Provider abstraction & model routing** | Hermes (#96066), LobsterAI (#2554), PicoClaw (#3339), ZeroClaw (#9707), OpenClaw (#126429, #130673) | Vision auto-detection, dual-base-URL gateways (Synthorai/OpenRouter), config migration, auth-provider recognition |
| **MCP / tool ecosystem hardening** | ZeroClaw (#8780, #10406), Hermes (#96107), LobsterAI (custom provider gaps), OpenClaw (#114154), IronClaw (#5970, #5918) | OAuth issuer conformance, dynamic registration, per-group policy, tool discovery reliability |
| **Container/cloud-native operations** | OpenClaw (#114234, #126907), NanoClaw (#3566, #3568), ZeroClaw (dist artifacts #10363), Hermes (#51327, #96112) | PID-reuse lock semantics, container wake observability, Node version floors, installer PATH hygiene |
| **Security hardening (supply-chain, SSRF, sandbox)** | ZeroClaw (#10070, #10367, #6996, #10142), IronClaw (#6817), NanoClaw (#3550, #3555), OpenClaw (#114158, #112475) | TOCTOU prevention, private-host opt-in, symlink races, mTLS transport, granular filesystem policy |
| **Desktop/app distribution reliability** | Hermes (#51327, #96112), CoPaw (#7323, #7336), NanoClaw (#3561, #3562), LobsterAI (#2543) | Linux setuid, Windows bootstrap PATH, NSIS uninstall, web installer diagnostics |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Technical Architecture | Key Differentiator |
|---------|---------------|-------------|------------------------|---------------------|
| **OpenClaw** | **Multi-agent orchestration core** | Enterprise, power users, platform builders | Gateway-centric monorepo; session-state, plugin, channel as subsystems | Deepest subagent lifecycle mgmt; enterprise eval artifacts |
| **ZeroClaw** | **Security-first agent runtime** | Security-conscious deployments, voice-first UX | RFC-driven; granular sandbox, ZeroRelay mTLS, session-scoped persistence | Architectural rigor: accepted RFCs → implementation trackers; Gemini Live speech-to-speech |
| **IronClaw** | **Hosted/deployed agent platform** | NEAR ecosystem, hosted deployments | Rust core; Reborn v2 (WebChat v2 API), container-supervised mode | Durable notification inbox; MCP registration framework; TLS sandbox egress |
| **Hermes Agent** | **Desktop-first multi-channel assistant** | Desktop power users, Discord/Slack/Matrix communities | Python/Electron; split-boot desktop architecture (lean WS + HTTP control) | Broad channel adapters; skills index; TUI/Gateway parity |
| **CoPaw (QwenPaw)** | **Consumer mobile/desktop with Hub** | Qwen/DashScope users, mobile-first | TypeScript/React; QwenPaw Hub multi-tenant (beta); heavy test infra | Prompt cache observability; mobile composer; DashScope integration |
| **LobsterAI** | **Polished consumer app with analytics** | General consumers, Chinese market | Electron/React; built-in provider catalog, artifact sharing, credit system | RTL/i18n investment; analytics event pipeline; Windows installer diagnostics |
| **PicoClaw** | **Lightweight multi-channel bridge** | IRC/Telegram/Slack power users | Go; channel adapter focus | Protocol correctness (IRCv3), routed-agent context mgmt |
| **NanoClaw** | **Container-native agent host** | Self-hosters, Mattermost/Email/Signal users | Node/TypeScript; container orchestration, Chat SDK bridge | Node version discipline; Mattermost card persistence; queue fairness |
| **Moltis** | **Minimalist provider/model manager** | Model-switching enthusiasts | Rust; provider preference UI, Fastmail MCP | Date-based releases; clean scope; OAuth scope precision |
| **NullClaw** | **Skill-centric CLI agent** | Dotfiles/sync workflow users | CLI-first; skills symlink request | Niche: shared skill library via symlinks |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating / Pre-Release Stabilization
- **OpenClaw**: Extreme velocity, beta channel active, P1 bug crush toward RC.
- **CoPaw**: v2.2.0-beta.1 shipped; test infra overhaul (parallel CI, 382 unit tests); Hub multi-tenant landing.
- **IronClaw**: 47 PRs merged in 24h clearing months of backlog; v1.4.0-rc.1 cut.
- **ZeroClaw**: Dual-track (v0.8.5 freeze + v0.9.0 RFC implementations); high PR count but review-bound.

### Tier 2: Steady Maintenance / Product Polish
- **Hermes Agent**: Continuous delivery; critical installer bugs (Linux/Windows) persist 65+ days; skills-index automation debt.
- **LobsterAI**: Zero open PRs; mature CI/CD; release staged; i18n/provider gaps emerging.
- **NanoClaw**: High fix throughput; one critical untriaged bug (#3568); Node floor raise shows discipline.

### Tier 3: Low Velocity / Niche / Quiet
- **PicoClaw**: Usability regressions (Web UI lag, IRC) stale 36+ days; fixes ready but unmerged.
- **Moltis**: Clean release cadence but minimal community; maintainer-led only.
- **NullClaw**: Single enhancement issue; no PR activity.
- **ZeptoClaw**: Dormant.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence Across Projects | Developer Actionability |
|-------|--------------------------|-------------------------|
| **Multi-agent orchestration is the new "container orchestration"** | OpenClaw (P1 session-state), CoPaw (Hub multi-tenant), ZeroClaw (session-scoped attachments), IronClaw (notification inbox) | Invest in **subagent completion routing correctness** and **session isolation** — silent data loss is the #1 production blocker. |
| **Provider abstraction must support gateway protocols natively** | LobsterAI (Synthorai), Hermes (opencode-go routing), OpenClaw (CLI-backend models), ZeroClaw (Gemini Live broker) | Build **dual-base-URL switching**, **vision auto-detection**, and **OAuth issuer conformance** into provider SDKs — custom slots are insufficient. |
| **MCP is becoming the universal tool protocol — but OAuth is the weak link** | ZeroClaw (Fastmail scope registration), Hermes (Monday.com issuer mismatch), IronClaw (registration framework), OpenClaw (bundle-mcp discovery) | Implement **RFC 7591 dynamic registration with protected-resource scope precedence**; test against real providers (Monday, Fastmail, Google). |
| **Security hardening is shifting from "optional" to "release gate"** | ZeroClaw (SSRF, symlink, mTLS, sandbox), IronClaw (TOCTOU), NanoClaw (shell-injection, Node floor), OpenClaw (umask, PID-reuse) | Adopt **directory-handle-relative fs ops**, **private-host opt-in for egress**, **per-daemon mTLS CAs** — treat as P0 for any hosted deployment. |
| **Desktop distribution remains a cross-platform minefield** | Hermes (Linux setuid, Windows tsc), CoPaw (NSIS, OpenSSL 3.0), NanoClaw (launchd, apt), LobsterAI (web installer

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-27

## 1. Today's Overview
Hermes Agent shows **high development velocity** with 50 PRs and 11 issues updated in the last 24 hours, though no new releases were published. The project is in an active maintenance and feature-development phase, with significant work across desktop, gateway, CLI, and tooling layers. Six PRs were merged/closed today, addressing bugs in session resumption, authentication, Slack adapter stability, and code formatting. Open PRs (44) indicate a healthy pipeline of fixes and features awaiting review. Several critical bugs affect Linux desktop launch, Windows installer, and provider routing — all with active fix PRs.

---

## 2. Releases
**No new releases** published today. The project appears to be operating on a continuous-delivery model with changes landing directly on `main`.

---

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#96114](https://github.com/NousResearch/hermes-agent/pull/96114) | fix(auth): honor suppressed Claude Code credentials | auth, provider/anthropic | **Security/Privacy** — Prevents auto-discovery of suppressed credentials; regression test added. |
| [#96115](https://github.com/NousResearch/hermes-agent/pull/96115) | fmt(js): `npm run fix` auto-fix | desktop, chore | Automated formatting; auto-merges on CI pass. |
| [#96118](https://github.com/NousResearch/hermes-agent/pull/96118) | revert: WS-only desktop backend (#94245) | desktop, architecture | **Architectural rollback** — Removes experimental WS-only backend (`entry_ws.py`, `--ws-only` flag) per maintainer request. |
| [#96119](https://github.com/NousResearch/hermes-agent/issues/96119) | [CLOSED] Bot Mode group rooms render MEDIA paths as text | desktop, bot-mode | **UX bug closed** — Issue reported today; likely fixed by a related PR not yet linked. |
| [#65351](https://github.com/NousResearch/hermes-agent/issues/65351) | [CLOSED] Desktop remote mode never fetches historical session list | gateway, desktop | **Long-standing bug closed** — Sidebar session list now populates on remote reconnect. |
| [#96114](https://github.com/NousResearch/hermes-agent/pull/96114) | (duplicate entry) | — | — |

**Key advancement**: The WS-only desktop backend experiment was reverted, signaling a decision to keep the HTTP control plane intact while pursuing leaner boot via other means (see Issue #94484).

---

## 4. Community Hot Topics
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Issue | **104** | **Skills index freshness automation** — Automated watchdog reports index is 29.8h stale (limit 26h). Indicates CI/CD pipeline reliability concern for documentation/skills hub. |
| [#51327](https://github.com/NousResearch/hermes-agent/issues/51327) | Issue | 12 | **Linux desktop launch failure** — Silent crash when `chrome-sandbox` lacks setuid 4755. Affects all `.desktop` launcher users on Linux; workaround exists but UX is broken. |
| [#94484](https://github.com/NousResearch/hermes-agent/issues/94484) | Issue | 2 | **Cheap desktop backend boot** — Tracking issue for split-boot architecture (lean chat/event plane, no control-plane removal). Maintainer-reframed; signals strategic direction. |
| [#96066](https://github.com/NousResearch/hermes-agent/issues/96066) | Issue | 2 | **Provider routing bug** — `opencode-go` + `deepseek-v4-flash-vision-exp` misroutes to Anthropic endpoint; vision auto-detection broken. Fix PR [#96116](https://github.com/NousResearch/hermes-agent/pull/96116) opened today. |
| [#96107](https://github.com/NousResearch/hermes-agent/issues/96107) | Issue | 2 | **MCP OAuth issuer mismatch** — Monday.com MCP login fails due to AS metadata issuer (`auth.monday.com/mcp`) vs actual redirect issuer (`auth.monday.com`). Suggests broader OAuth conformance gap. |

**Analysis**: The skills-index watchdog (#66616) dominates discussion (104 comments), revealing operational friction in the documentation pipeline. Linux desktop launch (#51327) remains a persistent user-facing blocker. The new provider routing bug (#96066) and MCP OAuth issue (#96107) highlight growing pains in multi-provider/tool integration.

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical (P2)** | [#51327](https://github.com/NousResearch/hermes-agent/issues/51327) | Linux `.desktop` launcher fails silently — Electron `chrome-sandbox` missing setuid 4755. **No window, no error.** | None yet |
| **Critical (P2)** | [#96112](https://github.com/NousResearch/hermes-agent/issues/96112) | Windows bootstrap installer fails at desktop stage: `'tsc' not recognized` despite TypeScript installed. PATH/env issue in installer-spawned build. | None yet |
| **High (P2)** | [#96107](https://github.com/NousResearch/hermes-agent/issues/96107) | MCP OAuth login fails against Monday.com — issuer metadata mismatch blocks all non-interactive connections. | None yet |
| **High (P2)** | [#96111](https://github.com/NousResearch/hermes-agent/pull/96111) | TUI/Gateway: resumed session with stale/removed provider crashes instead of healing/fallback. | [#96111](https://github.com/NousResearch/hermes-agent/pull/96111) (open) |
| **Medium (P3)** | [#96066](https://github.com/NousResearch/hermes-agent/issues/96066) | `opencode-go` + `deepseek-v4-flash-vision-exp` misroutes to `api.anthropic.com`; not auto-detected as vision. | [#96116](https://github.com/NousResearch/hermes-agent/pull/96116) (open) |
| **Medium (P3)** | [#96119](https://github.com/NousResearch/hermes-agent/issues/96119) | Bot Mode group rooms: artifacts (PDF, images) render as `MEDIA:/path` text instead of downloadable attachments. | **Closed today** (fix likely in untracked PR) |
| **Medium (P3)** | [#96113](https://github.com/NousResearch/hermes-agent/pull/96113) | Slack Socket Mode adapter wedges on closed session — infinite retry loop until gateway restart. | [#96113](https://github.com/NousResearch/hermes-agent/pull/96113) (open) |
| **Low (P3)** | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index 29.8h stale (limit 26h) — CI cron (6/18 UTC) not keeping up. Operational, not user-facing. | None yet |

**Stability signal**: Two P2 installer/launcher bugs (Linux + Windows) block onboarding. Two P2 session-state bugs (provider staleness, Slack wedge) affect reliability. Fix PRs exist for the latter two.

---

## 6. Feature Requests & Roadmap Signals
| Issue/PR | Signal | Likelihood for Next Version |
|----------|--------|----------------------------|
| [#94484](https://github.com/NousResearch/hermes-agent/issues/94484) | **Split-boot desktop backend** — Cheap boot + lean chat/event plane over WS, keeping HTTP control plane. Maintainer-reframed; active design. | **High** — Strategic direction; revert of WS-only backend (#96118) confirms this path. |
| [#96126](https://github.com/NousResearch/hermes-agent/issues/96126) | **Organization/project isolation** — Multi-tenant scoping for bots, chats, memory, files, workflows. Enterprise readiness. | **Medium** — New today; requires data-model changes. May target 2026-Q4. |
| [#96124](https://github.com/NousResearch/hermes-agent/issues/96124) | **Mouse support in TUI** — Click-to-position cursor in input bar (DEC 1000/1002/1006). Parity with Claude Code. | **High** — Small scope, high UX value; likely quick win. |
| [#96121](https://github.com/NousResearch/hermes-agent/issues/96121) | **Configurable HA service-call timeouts** — Hardcoded 15s too short for device-boot scripts. | **High** — Single config flag; low risk. |
| [#89487](https://github.com/NousResearch/hermes-agent/pull/89487) | **⌘⇧E collapse/expand all sidebar projects** — Keyboard shortcut for existing mouse-only action. | **High** — PR open since 08-18; trivial merge. |
| [#94286](https://github.com/NousResearch/hermes-agent/pull/94286) | **Resilient Discord music playback** — Per-guild queues, Spotify→YouTube, HLS fallback, voice lifecycle hardening. | **Medium** — Large PR; needs review bandwidth. |
| [#92729](https://github.com/NousResearch/hermes-agent/pull/92729) | **`GET /v1/tools` endpoint** — Platform-resolved callable tool catalog (MCP, defaults, backfills). Operator observability. | **High** — Gateway API addition; well-scoped. |

**Roadmap inference**: Desktop architecture refactor (split-boot) is the major initiative. Multi-tenancy is the next enterprise pillar. Small UX/Config improvements (mouse, shortcuts, timeouts) are queued and likely to land soon.

---

## 7. User Feedback Summary
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Linux desktop won't launch** | [#51327](https://github.com/NousResearch/hermes-agent/issues/51327) (12 comments, open since 06-23) | **High** — Silent failure; no error dialog; affects all Linux `.desktop` users. Workaround requires manual `chmod 4755`. |
| **Windows installer broken** | [#96112](https://github.com/NousResearch/hermes-agent/issues/96112) (filed today) | **High** — Bootstrap fails at desktop stage; `tsc` not found in installer context despite global install. Blocks Windows onboarding. |
| **Remote desktop sidebar empty** | [#65351](https://github.com/NousResearch/hermes-agent/issues/65351) (closed today) | **Medium** — Historical sessions not fetched on reconnect; data exists server-side. Fixed. |
| **Bot artifacts not delivered** | [#96119](https://github.com/NousResearch/hermes-agent/issues/96119) (closed today) | **Medium** — Group room bots output `MEDIA:/path` text instead of previews/downloads. Fixed. |
| **MCP Monday.com login broken** | [#96107](https://github.com/NousResearch/hermes-agent/issues/96107) (filed today) | **Medium** — OAuth issuer mismatch prevents non-interactive MCP connections. |
| **TUI mouse ignored** | [#96124](https://github.com/NousResearch/hermes-agent/issues/96124) (filed today) | **Low-Medium** — Cursor positioning via click unsupported; parity gap vs Claude Code. |
| **HA timeout too short** | [#96121](https://github.com/NousResearch/hermes-agent/issues/96121) (filed today) | **Low** — 15s hardcoded; breaks long device-boot scripts. Configurable timeout requested. |

**Satisfaction signal**: Users encounter **onboarding blockers** (Linux/Windows launch) and **reliability gaps** (session resume, MCP, Slack). Fixes for recent regressions (sidebar, bot artifacts) landed quickly. Enterprise features (multi-tenancy) are explicitly requested.

---

## 8. Backlog Watch — Stale High-Value Items Needing Attention
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **40 days** (opened 07-18) | Skills index automation degraded; 104 comments indicate CI/CD reliability debt. Blocks docs/skills freshness. | Open, no fix PR |
| [#51327](https://github.com/NousResearch/hermes-agent/issues/51327) | **65 days** (opened 06-23) | Linux desktop silent launch failure; P3 but high user impact. Root cause known (setuid), fix straightforward. | Open, no fix PR |
| [#76003](https://github.com/NousResearch/hermes-agent/pull/76003) | **26 days** (opened 08-01) | `hermes doctor` hangs indefinitely on `state.db` probe; supersedes #72527. Adds cancellable SQLite deadline. Critical for diagnostics. | Open PR, needs review |
| [#84539](https://github.com/NousResearch/hermes-agent/pull/84539) | **15 days** (opened 08-12) | Gateway: `SIGUSR2` faulthandler chain kills process — breaks diagnostic `kill -USR2` under systemd. | Open PR, needs review |
| [#89487](https://github.com/NousResearch/hermes-agent/pull/89487) | **9 days** (opened 08-18) | Desktop: ⌘⇧E shortcut for collapse/expand all sidebar projects. Small, high-value UX. | Open PR, needs review |
| [#93944](https://github.com/NousResearch/hermes-agent/pull/93944) | **3 days** (opened 08-24) | Browser Use: honor canonical managed selection (`browser.cloud_provider: nous`), not legacy flag. | Open PR, needs review |
| [#94096](https://github.com/NousResearch/hermes-agent/pull/94096) | **3 days** (opened 08-24) | Matrix: MAS refresh-token support for matrix.org (OAuth 2.0 migration 2025-04). Auth breakage for Matrix users. | Open PR, needs review |

**Maintainer attention needed**: The Linux desktop launch bug (#51327) and skills-index automation (#66616) are the longest-standing user-facing and operational issues. The `hermes doctor` hang fix (#76003) and gateway SIGUSR2 fix (#84539) are stability-critical PRs awaiting review. Several high-value desktop UX PRs (#89487, #93944) are also queued.

---

*Digest generated from GitHub data as of 2026-08-27. All links point to NousResearch/hermes-agent repository.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-27

## 1. Today's Overview
PicoClaw shows moderate maintenance activity with 7 issues and 6 PRs updated in the last 24 hours. The project is in a **bug-fix and stabilization phase** — four PRs were closed/merged today addressing routing, Telegram topics, command allow-lists, and a batch merge of older fixes. Two open PRs directly target active bugs (Slack media upload, LINE webhook config). No new release was published. Community engagement is visible on long-standing issues (IRC long messages, Web UI lag) but no critical outages reported.

## 2. Releases
**No new releases today.** Current latest version remains **v0.3.1**.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Impact |
|----|-------|--------|
| [#1549](https://github.com/sipeed/picoclaw/pull/1549) | Merge fixes from #1448 #1447 #1446 #1444 | Bulk integration of older community fixes |
| [#3316](https://github.com/sipeed/picoclaw/pull/3316) | Fix routed-agent context management (history, summarization, compression, seahorse bootstrap) | Resolves #3301 — agents routed via dispatch rules now retain session context and trigger auto-compaction |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | Support topics in private bot chats (Telegram) | Enables forum-topic handling in private chats with bots |
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) | Fix `customAllowPatterns` for shell commands | Agents can now execute allow-listed commands (e.g., `git push`) previously blocked by default deny patterns |

**Net effect:** Routing reliability, Telegram UX, and agent command execution are now fixed. The codebase also absorbed a batch of legacy PRs.

## 4. Community Hot Topics
| Issue/PR | Activity | Core Need |
|----------|----------|-----------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) — Better IRC long-message support | 8 comments, stale since 2026-07-22 | Treat split IRCv3 messages (>512 bytes) as single logical message; critical for IRC power users |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI input lag with history | 7 comments, 1 👍 | Frontend performance degradation as chat history grows; impacts daily usability |
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) — `/clear` & auto-compression broken for routed agents | 5 comments, **closed via #3316** | Session management parity between default and dispatched agents |

**Analysis:** The top two open issues are **usability regressions** (IRC protocol compliance, Web UI responsiveness) affecting core user workflows. The routed-agent fix (#3316) shows maintainers respond to dispatch-rule users.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#3338](https://github.com/sipeed/picoclaw/issues/3338) Slack media upload fails (`file size cannot be 0`) | Open | [#3340](https://github.com/sipeed/picoclaw/pull/3340) — sets `FileSize` in upload params |
| **High** | [#3339](https://github.com/sipeed/picoclaw/issues/3339) Google Antigravity returns 429 despite valid quota | Open | None yet — may be upstream quota or auth scope issue |
| **Medium** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI input lag with history | Open | None — needs frontend profiling (virtualization, memoization) |
| **Medium** | [#3346](https://github.com/sipeed/picoclaw/issues/3346) RKLLM abnormal replies on ARM board | Open (new today) | None — hardware/model-specific, needs logs |
| **Low** | [#3328](https://github.com/sipeed/picoclaw/issues/3328) LINE `webhook_host`/`webhook_port` config ignored | Closed | [#3329](https://github.com/sipeed/picoclaw/pull/3329) — adds warning instead of silent no-op |

**Note:** Slack media bug has a ready fix (#3340). Antigravity 429 and RKLLM issues need triage.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| IRCv3 message concatenation | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Medium — protocol compliance, but marked stale |
| Web UI history virtualization | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | High — direct UX impact, 1 👍 |
| Expose LINE webhook config or remove | [#3328](https://github.com/sipeed/picoclaw/issues/3328) | Done via warning (#3329) — config cleanup likely |
| RKLLM ARM optimization | [#3346](https://github.com/sipeed/picoclaw/issues/3346) | Low — niche hardware, new issue |

**Prediction:** Next patch (v0.3.2) will likely include Slack media fix, LINE config warning, and possibly Web UI perf work if prioritized.

## 7. User Feedback Summary
- **Pain points:**  
  - Web UI becomes unusable with moderate history (laggy input)  
  - Slack image sharing completely broken  
  - Routed agents lost session memory (now fixed)  
  - IRC long messages fragmented  
- **Positive signals:**  
  - Dispatch-rule users validated fix for context management (#3316)  
  - Telegram topic support in private chats delivered (#3315)  
  - Custom command allow-lists now work (#3314)  
- **Hardware-specific:** RKLLM on ARM boards showing abnormal output — may need vendor collaboration.

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Stale Since | Why It Matters |
|------|-------------|----------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) IRC long-message support | 2026-07-22 (36 days) | Protocol correctness; blocks IRC power users |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI lag | 2026-07-21 (37 days) | Core UI regression, affects all web users |
| [#3329](https://github.com/sipeed/picoclaw/pull/3329) LINE config warning | 2026-08-11 (16 days) | Ready to merge — prevents silent misconfiguration |
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) Slack FileSize fix | 2026-08-17 (10 days) | Ready to merge — unblocks Slack media |

**Recommendation:** Prioritize merging #3340 and #3329 this week. Schedule triage for #3281 (frontend) and #3287 (IRC) before they reach 60 days stale. Investigate #3339 (Antigravity 429) and #3346 (RKLLM) for provider/hardware specificity.

---

*Digest generated from GitHub data as of 2026-08-27. All links point to live GitHub items.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-27

## 1. Today's Overview
NanoClaw shows **high maintenance velocity** with 24 PRs updated in the last 24 hours (18 open, 6 merged/closed), indicating an active core team and contributor base. The project is in a **stabilization phase** — most PRs are fixes across setup, container orchestration, chat SDK, Mattermost, and MCP routing. One critical runtime bug (#3568) was reported today: pending `system` rows can starve the inbound queue, causing the agent to silently stop responding. No new releases were published.

---

## 2. Releases
**None** — No new versions released today. The project appears to be accumulating fixes for a future patch/minor release.

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3557](https://github.com/qwibitai/nanoclaw/pull/3557) | Fix (core-team) | Improve Mattermost initial setup & `SiteURL` handling | Reduces onboarding friction for Mattermost deployments |
| [#3556](https://github.com/qwibitai/nanoclaw/pull/3556) | Fix (core-team) | Recover Mattermost card thread after restart | Fixes approval-card routing loss on host restart (data integrity) |
| [#3555](https://github.com/qwibitai/nanoclaw/pull/3555) | Fix | Raise Node floor to 22.14.0 (better-sqlite3 13 segfaults below) | Prevents native module crashes; stability-critical |
| [#3554](https://github.com/qwibitai/nanoclaw/pull/3554) | Test | Keep stdin-json stderr assertions exact on Node 25+ | CI reliability for upcoming Node versions |
| [#3553](https://github.com/qwibitai/nanoclaw/pull/3553) | Fix | Normalize reaction emoji per platform in Chat SDK bridge | Cross-platform UX consistency |
| [#574](https://github.com/qwibitai/nanoclaw/issues/574) | Issue (Closed) | Containers lack `jq`; using `node -e` for JSON parsing (eval risk) | Security hardening — mitigation likely in container images |

**Theme:** Hardening installers (Node version, apt non-interactive, launchd bootstrap), fixing channel adapters (Mattermost, Chat SDK), and closing a container-security gap.

---

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3568](https://github.com/qwibitai/nanoclaw/issues/3568) — *Pending `system` rows starve inbound queue; agent silently stops responding* | **New today, 0 comments, 0 reactions** — but **critical severity** (silent total failure) | Reliable message processing under load; backpressure/queue fairness for system vs. user traffic |
| [#3567](https://github.com/qwibitai/nanoclaw/pull/3567) — `fix(setup): put ~/.local/bin on PATH before the onecli guard` | Open, author Agi-Asi | Installer robustness — ensure user binaries take precedence over bundled tooling |
| [#3566](https://github.com/qwibitai/nanoclaw/pull/3566) — `fix(host): notify user when container repeatedly fails to wake` | Open, author Agi-Asi | Observability — users currently get no signal when container wake loops |
| [#3501](https://github.com/qwibitai/nanoclaw/pull/3501) — `docs: mention Dial channel in README and changelog` | Open since 2026-08-24, core-team | Documentation parity — Dial shipped (#3050) but not documented |

**Signal:** Contributors (especially Agi-Asi) are systematically addressing **operational blind spots** (installer PATH, container wake feedback, signal-cli timeouts, launchd bootstrap). The Dial docs gap suggests a release-communication lag.

---

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Item | Status | Fix PR? |
|----------|------|--------|---------|
| **Critical** | [#3568](https://github.com/qwibitai/nanoclaw/issues/3568) — System-row starvation halts all inbound processing | **Open, no fix PR yet** | ❌ |
| **High** | [#3556](https://github.com/qwibitai/nanoclaw/pull/3556) — Mattermost approval cards lose routing after restart | **Merged** | ✅ (#3556) |
| **High** | [#3555](https://github.com/qwibitai/nanoclaw/pull/3555) — better-sqlite3 13 segfaults on Node < 22.14.0 | **Merged** | ✅ (#3555) |
| **Medium** | [#3550](https://github.com/qwibitai/nanoclaw/pull/3550) — Email substitution shell-injection risk & apostrophe breakage | Open | ✅ (#3550) |
| **Medium** | [#3549](https://github.com/qwibitai/nanoclaw/pull/3549) — `insertMessage` unique-constraint crash loop on retry | Open | ✅ (#3549) |
| **Medium** | [#3563](https://github.com/qwibitai/nanoclaw/pull/3563) — `signal-cli` probes deadlock on daemon config lock | Open | ✅ (#3563) |
| **Low** | [#574](https://github.com/qwibitai/nanoclaw/issues/574) — Containers use `node -e` for JSON (eval risk) | Closed | Likely in container image rebuild |

**Top action:** #3568 needs immediate triage — it’s a **silent total outage** trigger with a clear mechanism (seq ordering + `maxMessagesPerPrompt`).

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **MCP per-group policy enforcement + OneCLI gateway routing** | [#3551](https://github.com/qwibitai/nanoclaw/pull/3551), [#3552](https://github.com/qwibitai/nanoclaw/pull/3552) (Codex agent) | High — two PRs from `wildcard` (Codex/GPT-5) targeting same area |
| **Dial channel visibility in docs/onboarding** | [#3501](https://github.com/qwibitai/nanoclaw/pull/3501) | High — trivial doc fix, channel already shipped |
| **Container wake-failure user notification** | [#3566](https://github.com/qwibitai/nanoclaw/pull/3566) | High — UX gap, PR open |
| **Task-series ID stamping for run-log continuity** | [#3564](https://github.com/qwibitai/nanoclaw/pull/3564) | Medium — observability improvement |
| **Fork-friendly skill refresh (preserve local adapters)** | [#3565](https://github.com/qwibitai/nanoclaw/pull/3565) | Medium — contributor ergonomics |

**Prediction:** Next release will be a **stability + MCP-hardening patch** (vX.Y.Z) with Dial docs, Node 22.14+ requirement, Mattermost restart fixes, and the queue-starvation fix if prioritized.

---

## 7. User Feedback Summary
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Silent agent unresponsiveness** | #3568 — “agent silently stops responding to every inbound message” | New, but catastrophic |
| **Mattermost card buttons break after restart** | #3556 — “clicking an existing approval card lost that cache” | Fixed today |
| **Installer hangs on `needrestart` / launchd no-op** | #3562, #3561 — non-interactive apt, bootstrap unloaded plist | Fixed in PRs |
| **Email onboarding breaks with apostrophes/shell chars** | #3550 — `o'brien@x.com` corrupts shell line | Fixed in PR |
| **No feedback when container fails to wake** | #3566 — user left waiting indefinitely | PR open |
| **Dial channel invisible in docs despite being shipped** | #3501 — “README channel lists did not say so” | PR open |

**Sentiment:** Users/contributors are hitting **operational rough edges** (installers, restarts, queue logic) more than core feature gaps. The team is responding rapidly with fixes.

---

## 8. Backlog Watch (Needs Maintainer Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3568](https://github.com/qwibitai/nanoclaw/issues/3568) — System-row queue starvation | **Hours old** | **Critical regression risk** — can brick all inbound traffic silently; no fix PR yet |
| [#3501](https://github.com/qwibitai/nanoclaw/pull/3501) — Dial channel docs | 3 days | Shipped feature undocumented; blocks user adoption |
| [#3566](https://github.com/qwibitai/nanoclaw/pull/3566) — Container wake-failure notification | Hours old | UX gap; users get no signal on repeated container failures |
| [#3567](https://github.com/qwibitai/nanoclaw/pull/3567) — PATH ordering for `~/.local/bin` | Hours old | Installer correctness; affects all Linux/macOS installs |
| [#3565](https://github.com/qwibitai/nanoclaw/pull/3565) — Fork local adapters preserved on skill refresh | Hours old | Contributor workflow; prevents fork divergence pain |

**Recommendation:** Prioritize #3568 (root-cause + fix), merge #3501 (trivial), and review Agi-Asi’s fix stack (#3561–#3567) for batch inclusion in next patch.

---

## Health Indicators
| Metric | Signal |
|--------|--------|
| **PR throughput** | 🟢 High (24 PRs/24h, 6 merged) |
| **Issue triage** | 🟡 One critical issue untriaged (#3568) |
| **Security posture** | 🟢 Proactive (Node floor raise, shell-injection fix, `jq` container issue closed) |
| **Documentation sync** | 🟡 Lagging (Dial shipped 3 weeks ago, docs PR still open) |
| **Contributor diversity** | 🟢 Core team + 4 external authors today |

**Bottom line:** NanoClaw is **actively maintained and hardening fast**, but has a **critical queue-starvation bug** that should be the #1 priority for the next 24–48 hours.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-27

## 1. Today's Overview
NullClaw saw minimal activity in the past 24 hours with only **one new enhancement issue** (#995) opened and no pull requests, releases, or issue closures. The project appears to be in a quiet maintenance phase with no active development merges or version cuts today. Community engagement is low (zero comments/reactions on the new issue), suggesting either a small contributor base or a lull between development cycles. Overall project health indicators show stability but limited forward momentum today.

## 2. Releases
**No new releases** published in the last 24 hours. The latest referenced version in issues is `nullclaw 2026.5.29` (from Issue #995).

## 3. Project Progress
**No merged or closed PRs today.** Zero pull requests were updated, meaning no features were completed, bugs fixed, or code changes integrated in the last 24 hours.

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#995** | Enhancement | 0 comments, 0 👍, created & updated 2026-08-26 | [nullclaw/nullclaw#995](https://github.com/nullclaw/nullclaw/issues/995) |

**Analysis:** The sole active discussion requests **symlink support for skills** (`nullclaw skills link` currently ignores symlinks). The user's motivation—reducing synchronization overhead and avoiding obsolete skill duplication—points to a workflow need for **shared/centralized skill management** across projects or environments. With zero community reactions, this may be a niche but genuine usability gap for power users managing multiple NullClaw instances.

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.** The single issue is an enhancement, not a defect report.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Skills symlink support** (`nullclaw skills link` to follow symlinks) | [#995](https://github.com/nullclaw/nullclaw/issues/995) | **Medium** – Low implementation complexity (filesystem traversal change), clear user value, but no maintainer triage yet. |

**Prediction:** If maintainers prioritize DX improvements, symlink support is a strong candidate for the next minor release. No other feature signals present today.

## 7. User Feedback Summary
- **Pain point:** Users cannot use symlinks to share skills across projects/environments, forcing duplication or manual sync.
- **Use case:** Centralized skill library (e.g., in dotfiles or shared repo) linked into multiple NullClaw projects.
- **Sentiment:** Neutral—single report, no upvotes/discussion yet. No dissatisfaction signals; rather a "missing capability" request.

## 8. Backlog Watch
| Item | Status | Age | Note |
|------|--------|-----|------|
| **#995** Support Skills Symlinks | Open, unanswered | 1 day | **Needs maintainer triage** – first community signal in 24h; assign or label to prevent stall. |

> **Maintainer action recommended:** Acknowledge #995, assess implementation scope (likely `skills link` command + filesystem walker), and label (`enhancement`, `good first issue`?). Zero other stale items surfaced today.

---

*Data source: GitHub API (nullclaw/nullclaw) — 2026-08-27 00:00 UTC snapshot*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-27

---

## 1. Today's Overview

IronClaw shipped its first release candidate for v1.4.0 (`ironclaw-v1.4.0-rc.1`) yesterday, capping 81 commits since v1.3.0. The project shows **high merge velocity**: 47 PRs were closed/merged in the last 24 hours (mostly older PRs from July finally landing), while only 3 new PRs opened today. Zero issues were updated, indicating a quiet issue tracker. The release highlights a **durable notification inbox** with per-user authoritative outcomes and actionable gates surfaced in the WebUI notification center. Overall health is strong—core contributors are clearing backlog and stabilizing the 1.4 branch.

---

## 2. Releases

### `ironclaw-v1.4.0-rc.1` (2026-08-26)
**Release Notes** — First release candidate for 1.4.0.

**Key Additions**
- **Durable notification inbox**: Runs publish authoritative outcomes and actionable gates to a per-user inbox, surfaced by the WebUI notification center. Approvals and auth prompts now persist and are centrally visible.
- (Full changelog spans 81 commits since `ironclaw-v1.3.0`; see [release page](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.4.0-rc.1))

**Breaking Changes / Migration Notes**
- None explicitly called out in the RC notes. As a release candidate, expect further polish before stable. Users on `main` or `release/2026-08-26` branch should test upgrade paths for the new inbox schema and WebUI notification center integration.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Scope | Summary |
|----|-------|---------|
| [#7926](https://github.com/nearai/ironclaw/pull/7926) | release | Cut `1.4.0-rc.1` (version bumps in `Cargo.toml`, `Cargo.lock`, `crates/app/ironclaw_cli/Cargo.toml`) |
| [#6817](https://github.com/nearai/ironclaw/pull/6817) | filesystem, security | Fixed **four TOCTOU containment escapes** in `DiskFilesystem` (local backend) via fd-rooted traversal |
| [#6740](https://github.com/nearai/ironclaw/pull/6740) | sandbox, TLS | TLS termination seam for sandbox egress proxy (`tls_intercept.rs` ported from trunk) |
| [#6533](https://github.com/nearai/ironclaw/pull/6533) | service, hosted | Container-supervised mode for hosted deployments (restart/apply path, UX fixes) |
| [#6366](https://github.com/nearai/ironclaw/pull/6366) | onboard, UX | `Esc` at API-key prompt now returns to provider menu (fixes #6360) |
| [#6157](https://github.com/nearai/ironclaw/pull/6157) | reborn, TUI | `ironclaw-reborn tui` — thin HTTP+SSE client of WebChat v2 API (behind `webui-v2-beta`) |
| [#6134](https://github.com/nearai/ironclaw/pull/6134) | test, reborn | Fault-injection scenarios: provider-error & compound-denial paths |
| [#6133](https://github.com/nearai/ironclaw/pull/6133) | webui-v2, test | SSE wire-contract fixture round-trip test (`WebChatV2Event` ↔ frontend parsing) |
| [#6132](https://github.com/nearai/ironclaw/pull/6132) | reborn, test | Fixture-sourced LLM seam for tier-2 integration harness |
| [#6131](https://github.com/nearai/ironclaw/pull/6131) | reborn, test | Storage-mode audit (InMemory vs LibSql) + operator LLM-config tier-2 coverage |
| [#6112](https://github.com/nearai/ironclaw/pull/6112) | agent-loop, refactor | Decomposed `canonical.rs execute()`, deduplicated latency wrapping |
| [#6096](https://github.com/nearai/ironclaw/pull/6096) | concurrency, fix | Serialized concurrent inbound-message writes per thread (fixes #6047) |
| [#5970](https://github.com/nearai/ironclaw/pull/5970) | mcp, framework | MCP registration framework skeleton (owner-scoped store, minted IDs, lifecycle chokepoints) |
| [#5918](https://github.com/nearai/ironclaw/pull/5918) | mcp, hosted | User-facing hosted-MCP registration & runtime discovery |
| [#5917](https://github.com/nearai/ironclaw/pull/5917) | mcp, security | Lock registered MCP servers to host egress (reject public endpoints) |
| [#5742](https://github.com/nearai/ironclaw/pull/5742) | reborn, memory | Wired `ProductionMemoryPromptContextService` with prompt-injection hardening envelope |
| [#5736](https://github.com/nearai/ironclaw/pull/5736) | reborn, retry | Restored local-dev synthetic retry path; retry-category coverage |

**Pattern**: Heavy focus on **Reborn (v2) stabilization**, **MCP (Model Context Protocol) registration/discovery**, **sandbox security**, and **test infrastructure**. The 1.4 release train is absorbing months of parallel work.

---

## 4. Community Hot Topics (Active PRs with Most Engagement)

| PR | Status | Comments | Reactions | Analysis |
|----|--------|----------|-----------|----------|
| [#7925](https://github.com/nearai/ironclaw/pull/7925) | Open | Undefined | 0 | **Slack adapter bug**: Threaded replies with "Also send to channel" (`subtype: thread_broadcast`) were silently dropped. Fix admits human message subtypes and stops channel mentions from depending on `app_mention`. Critical for Slack integration reliability. |
| [#7928](https://github.com/nearai/ironclaw/pull/7928) | Open | Undefined | 0 | **Tool result UX**: Bounded, shallow JSON selection via RFC 6901 pointers, collection limits, UTF-8 paging, omission descriptors, continuation requests. Addresses large-result handling for tool calls. |
| [#7927](https://github.com/nearai/ironclaw/pull/7927) | Open | Undefined | 0 | **CI/Infra**: Nightly codebase knowledge graph refresh (auto-generated). Routine maintenance. |

> **Note**: Comment counts are not populated in the feed; all three open PRs show "undefined" comments. The real signal is the **volume of merged PRs** (47) — maintainers are actively clearing the queue.

---

## 5. Bugs & Stability

| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **High** | TOCTOU escapes in `DiskFilesystem` (local backend) | Fixed | [#6817](https://github.com/nearai/ironclaw/pull/6817) ✅ |
| **Medium** | Concurrent inbound-message writes persisted out of order | Fixed | [#6096](https://github.com/nearai/ironclaw/pull/6096) ✅ |
| **Medium** | Slack threaded replies with "Also send to channel" silently discarded | Open | [#7925](https://github.com/nearai/ironclaw/pull/7925) (fix proposed) |
| **Low** | `Esc` at API-key prompt trapped user in terminal state | Fixed | [#6366](https://github.com/nearai/ironclaw/pull/6366) ✅ |
| **Low** | Local-dev synthetic capabilities never retried on failure | Fixed | [#5736](https://github.com/nearai/ironclaw/pull/5736) ✅ |

**Stability Takeaway**: The two highest-severity bugs (filesystem TOCTOU, message ordering) are **fixed and merged**. The only open regression is the Slack adapter edge case (#7925), which has a targeted fix in review.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for 1.4 / Next |
|--------|--------|---------------------------|
| **Durable notification inbox** (approvals, auth prompts, per-user) | Release notes | ✅ Landed in 1.4.0-rc.1 |
| **MCP registration & hosted server discovery** | [#5970](https://github.com/nearai/ironclaw/pull/5970), [#5918](https://github.com/nearai/ironclaw/pull/5918), [#5917](https://github.com/nearai/ironclaw/pull/5917) | ✅ Framework + user-facing flow merged; likely in 1.4 |
| **Reborn TUI (`ironclaw-reborn tui`)** | [#6157](https://github.com/nearai/ironclaw/pull/6157) | ✅ Behind `webui-v2-beta`; may stay beta in 1.4 |
| **Bounded JSON result views for tools** | [#7928](https://github.com/nearai/ironclaw/pull/7928) | 🟡 Open PR; could make 1.4 if reviewed fast |
| **Sandbox TLS termination / egress proxy** | [#6740](https://github.com/nearai/ironclaw/pull/6740) | ✅ Merged; infrastructure for hosted deployments |
| **Container-supervised mode** | [#6533](https://github.com/nearai/ironclaw/pull/6533) | ✅ Merged; addresses hosted deployment ops |

**Prediction**: 1.4 stable will ship with notification inbox, MCP registration/discovery, sandbox TLS seam, and container-supervised mode. Reborn TUI and bounded tool results may remain beta/behind flags.

---

## 7. User Feedback Summary

No new issues filed in the last 24h. Inferred pain points from merged PRs:

| Pain Point | Evidence |
|------------|----------|
| **Slack integration drops threaded channel broadcasts** | #7925 fix description: "silently discarded at ingress" |
| **Large tool results lack pagination/selection** | #7928 adds RFC 6901 pointers, paging, continuation |
| **Hosted deployments need container-native restart/apply** | #6533: "raw `os error 2` instead of clear message" |
| **Onboarding traps users at API-key prompt** | #6366: "terminal state" — UX friction |
| **Filesystem sandbox escapes** | #6817: four TOCTOU vectors in local backend |
| **Reborn memory context not wired in production** | #5742: "fully implemented but nothing composed it" |

**Satisfaction signal**: High merge velocity + RC cut suggests maintainers are responsive. No open issues = either quiet period or users tracking via PRs/discussions.

---

## 8. Backlog Watch (Older PRs Needing Attention)

| PR | Age | Scope | Why It Matters |
|----|-----|-------|----------------|
| [#5970](https://github.com/nearai/ironclaw/pull/5970) | ~48 days | MCP framework skeleton | Foundation for all MCP features; merged but verify no follow-up gaps |
| [#6112](https://github.com/nearai/ironclaw/pull/6112) | ~43 days | Agent-loop refactor | Decomposed executor spine; watch for regressions in canonical loop |
| [#6740](https://github.com/nearai/ironclaw/pull/6740) | ~31 days | Sandbox TLS seam | Security-critical; ensure cert rotation & validation tested |
| [#6817](https://github.com/nearai/ironclaw/pull/6817) | ~30 days | Filesystem TOCTOU fixes | High-severity security fix; confirm no variants missed |

All four are **merged** — the "watch" is for **post-merge validation** in the RC testing window. No stale open PRs beyond the three opened today.

---

## Links Index

- **Release**: [ironclaw-v1.4.0-rc.1](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.4.0-rc.1)
- **Open PRs**: [#7925](https://github.com/nearai/ironclaw/pull/7925) · [#7928](https://github.com/nearai/ironclaw/pull/7928) · [#7927](https://github.com/nearai/ironclaw/pull/7927)
- **Key Merged PRs**: [#7926](https://github.com/nearai/ironclaw/pull/7926) · [#6817](https://github.com/nearai/ironclaw/pull/6817) · [#6740](https://github.com/nearai/ironclaw/pull/6740) · [#6533](https://github.com/nearai/ironclaw/pull/6533) · [#6157](https://github.com/nearai/ironclaw/pull/6157) · [#6096](https://github.com/nearai/ironclaw/pull/6096) · [#5970](https://github.com/nearai/ironclaw/pull/5970) · [#5918](https://github.com/nearai/ironclaw/pull/5918) · [#5742](https://github.com/nearai/ironclaw/pull/5742)

---

*Digest generated 2026-08-27 from GitHub API data. Next digest: 2026-08-28.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-27

## 1. Today's Overview
LobsterAI shows **high development velocity** with 16 PRs merged/closed in the last 24 hours and zero open PRs pending review, indicating a mature CI/CD pipeline and active maintainer throughput. No new release was cut today, but a release PR (#2549) was merged, suggesting a version bump is imminent. Two new feature requests arrived: adding Synthorai as a built-in provider (#2554) and Persian/Farsi RTL/bidi support in chat (#2541). The merged PRs span UI polish (icons, sidebar, settings width), analytics/event tracking hardening, artifact/library sharing enhancements, Windows installer diagnostics, and app-update state preservation — a mix of user-facing polish and infrastructure reliability work.

## 2. Releases
**No new releases published today.**  
PR [#2549](https://github.com/netease-youdao/LobsterAI/pull/2549) `Release/2026.8.26` was merged, implying a **2026.08.26** build is staged. Watch the [Releases page](https://github.com/netease-youdao/LobsterAI/releases) for the formal tag and changelog.

## 3. Project Progress — Merged/Closed PRs (15)
| PR | Area | Summary | Link |
|----|------|---------|------|
| #2555 | renderer, artifacts | **Analytics hardening**: new share/deploy/copy/permission events, async deploy final-state tracking, reliable upload queue, unified identity/subscription/env context, library refresh/favorite/publish telemetry, automated tests | [#2555](https://github.com/netease-youdao/LobsterAI/pull/2555) |
| #2550 | renderer, docs, main, artifacts | **Permanent delete for cloud-shared files**: new delete API/IPC/types, allowed only for stopped shares with filename confirmation, syncs cloud list/state/local favorites, handles conflicts/server incompat/failed deletions, fixes duplicate deploy triggers on account switch/close, tooltip a11y, automated tests & server integration docs | [#2550](https://github.com/netease-youdao/LobsterAI/pull/2550) |
| #2553 | renderer, build, docs, windows | **Zhipu icon dark-mode fix** | [#2553](https://github.com/netease-youdao/LobsterAI/pull/2553) |
| #2552 | renderer, cowork | **Guide/recharge flow update** | [#2552](https://github.com/netease-youdao/LobsterAI/pull/2552) |
| #2548 | renderer | **Settings panel width adjustment** | [#2548](https://github.com/netease-youdao/LobsterAI/pull/2548) |
| #2547 | renderer | **Login guide fix** | [#2547](https://github.com/netease-youdao/LobsterAI/pull/2547) |
| #2546 | renderer | **Sidebar login promo**: delay auto-hide timer until engine startup overlay clears, then start 5s display window | [#2546](https://github.com/netease-youdao/LobsterAI/pull/2546) |
| #2545 | renderer | **Login guide fix** (duplicate/related to #2547) | [#2545](https://github.com/netease-youdao/LobsterAI/pull/2545) |
| #2544 | renderer | **Library icon update** | [#2544](https://github.com/netease-youdao/LobsterAI/pull/2544) |
| #2543 | build, docs, windows | **Web installer timing diagnostics** | [#2543](https://github.com/netease-youdao/LobsterAI/pull/2543) |
| #2542 | renderer, main, openclaw, cowork | **Sidebar library icon styling** | [#2542](https://github.com/netease-youdao/LobsterAI/pull/2542) |
| #2540 | renderer | **Redesign sidebar library icon** | [#2540](https://github.com/netease-youdao/LobsterAI/pull/2540) |
| #2539 | renderer | **Daily credit gift entry in user menu** | [#2539](https://github.com/netease-youdao/LobsterAI/pull/2539) |
| #2556 | renderer, docs | **Release log update (Liuzhq/26.8.24 rlog)** | [#2556](https://github.com/netease-youdao/LobsterAI/pull/2556) |

**Open PR (1):**  
- **#2551** `fix: app update preserve ready state` — ensures app-update flow doesn’t lose readiness state; under review. [#2551](https://github.com/netease-youdao/LobsterAI/pull/2551)

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Signal |
|------|------|----------|----|--------|
| **#2554** | Issue (Feature) | 1 | 0 | **Synthorai as built-in provider** — user asks for first-class support for “one-key multi-model” gateways (like OpenRouter). Pain points: custom slots lack default model list, `switchableBaseUrls`, icons, default baseUrl, leading to config errors. |
| **#2541** | Issue (Feature) | 1 | 0 | **Persian/Farsi RTL support** — chat input is LTR (caret on left), mixed bidi rendering broken, ZWNJ half-space not handled. Affects input, message bubbles, code blocks. Strong i18n gap for RTL languages. |

Both issues are fresh (created 2026-08-26) with minimal discussion so far; they represent **provider extensibility** and **internationalization** — two recurring themes in LobsterAI’s backlog.

## 5. Bugs & Stability
No explicit bug reports in today’s issues. The merged PRs address several **stability/reliability fixes**:
- **#2551** (open) — app update ready-state preservation (potential regression if update interrupts session).
- **#2550** — duplicate deploy triggers on account switch/dialog close; state conflicts & server incompat handling for share deletion.
- **#2543** — Windows web installer timing diagnostics (install reliability).
- **#2546** — sidebar promo timer race with engine startup overlay.

**Severity ranking (inferred):**
1. **Medium** — #2551 (update-state loss could confuse users post-update)
2. **Low** — #2550 duplicate deploy (cosmetic/log noise), #2543 installer diagnostics (observability), #2546 promo timing (UX polish)

All have fix PRs merged or open.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **Synthorai built-in provider** (dual OpenAI/Anthropic base URL switching, default models, icon) | #2554 | **High** — follows OpenRouter pattern; low implementation cost (config + icon), high user value for multi-model gateways. |
| **Persian/Farsi RTL + bidi + ZWNJ** | #2541 | **Medium-High** — requires input/bubble/code-block CSS & Unicode handling; aligns with i18n push. May need design review for mixed LTR/RTL. |
| **Daily credit gift entry** | #2539 (merged) | **Done** — already in today’s build. |
| **Permanent delete for shared artifacts** | #2550 (merged) | **Done** — shipped. |
| **Analytics/event pipeline hardening** | #2555 (merged) | **Done** — infra for future feature telemetry. |

**Prediction:** Next patch (2026.08.27/28) will include #2551 fix + possibly #2554 if maintainers prioritize provider parity. RTL support may land in a minor release after design sign-off.

## 7. User Feedback Summary
- **Provider UX friction**: Custom provider slots are functional but second-class — no model catalog, no protocol-switching UI, no icons/defaults. Users want “gateway” providers (OpenRouter, Synthorai) treated as first-class. (#2554)
- **RTL language gap**: Persian users cannot chat naturally — caret positioning, mixed-direction rendering, and half-space (ZWNJ) break workflow. This is a **blocker for Farsi-speaking adopters**. (#2541)
- **Positive signals**: Rapid merge cadence, automated tests added (#2550, #2555), Windows installer diagnostics (#2543) show maintainers investing in release quality and cross-platform reliability.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| **#2554 Synthorai provider** | <1 day | Low-effort, high-impact provider parity; sets precedent for future gateway integrations. |
| **#2541 Persian RTL/bidi** | <1 day | Accessibility/i18n gap; may require coordination with design system for bidi-aware components. |
| **#2551 App update ready-state** | <1 day (open PR) | Last open PR; merge to avoid update-state regression in next release. |
| **Historical: Custom provider enhancements** | — | Recurring theme — consider a “Provider SDK” or JSON schema to let community contribute provider configs without core changes. |

---
*Digest generated from GitHub API data for 2026-08-27. All links point to netease-youdao/LobsterAI.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-27

## 1. Today's Overview
Moltis shipped a new dated release **20260826.01** and closed two pull requests that address provider model preferences and Fastmail MCP OAuth integration. The single issue updated in the last 24 hours (#1094) was closed alongside its fix in PR #1104, indicating a focused bug-fix cycle. No new issues or open PRs appeared today, suggesting the project is in a stabilization phase rather than active feature development. Overall activity is low but purposeful: a release cut, two merges, and one bug resolved.

## 2. Releases
**Version 20260826.01** (published 2026-08-26)  
- No detailed changelog provided in the data; the version follows a date-based scheme.  
- Likely includes the merged fixes from PR #1104 (provider preferred-model replacement) and PR #1244 (Fastmail MCP OAuth scope registration).  
- No breaking changes or migration notes reported.  
- [Release page](https://github.com/moltis-org/moltis/releases/tag/20260826.01)

## 3. Project Progress
| PR | Title | Status | Key Changes |
|----|-------|--------|-------------|
| [#1104](https://github.com/moltis-org/moltis/pull/1104) | `fix(providers): allow replacing preferred models` | **Closed/Merged** | • Preselects saved provider model preferences when opening the preferred-model dialog<br>• Replaces a provider’s previous preferred models on save, including clearing all preferences with an empty selection<br>• Adds backend and Playwright regression coverage for de-preferring models |
| [#1244](https://github.com/moltis-org/moltis/pull/1244) | `Fix Fastmail MCP OAuth scope registration` | **Closed/Merged** | • Prefers protected-resource scopes over the authorization server’s broader scope catalog during MCP OAuth discovery<br>• Includes selected scopes in RFC 7591 dynamic client registration<br>• Adds a Fastmail-shaped regression test covering resource discovery, registration, and localhost redirect |

Both PRs were authored by **penso** and merged on 2026-08-26, closing the loop on issue #1094 and a Fastmail integration gap.

## 4. Community Hot Topics
No open issues or PRs with comments or reactions in the last 24 hours. The only updated issue (#1094) has **0 comments** and **0 reactions**, and both PRs show undefined comment counts and zero reactions. Community discussion is currently minimal; the project’s momentum appears driven by maintainer-led fixes rather than external contributor debate.

## 5. Bugs & Stability
| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#1094](https://github.com/moltis-org/moltis/issues/1094) – *De-Preferring Models* | **Medium** (UI/preference logic bug; user unable to clear/replace preferred models) | **Closed** | [#1104](https://github.com/moltis-org/moltis/pull/1104) (merged) |

No new bugs, crashes, or regressions reported today. The fixed issue had a test-backed solution, reducing recurrence risk.

## 6. Feature Requests & Roadmap Signals
No new feature requests surfaced in the last 24 hours. The two merged PRs signal ongoing work on:
- **Provider-model UX refinement** (allowing full replacement/clearing of preferred models)  
- **MCP/OAuth hardening** for specific providers (Fastmail)  

If the pattern holds, the next version may include further OAuth provider integrations (e.g., other email/calendar services) and continued polish of the model-preference UI.

## 7. User Feedback Summary
Direct user feedback is absent from today’s data (zero comments/reactions on the closed issue and PRs). The sole bug report (#1094) came from **RokkuCode** and described an inability to de-prefer models—a workflow friction point for users managing multiple model preferences. The swift fix and regression tests suggest maintainers prioritize smooth preference management.

## 8. Backlog Watch
The provided dataset contains only today’s activity; no long-unanswered issues or stale PRs are visible. To identify backlog items needing attention, a broader query (e.g., issues open >30 days, PRs with review requests pending) would be required. Current signals show a clean, up-to-date queue.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-27

## 1. Today's Overview
CoPaw shipped its **v2.2.0-beta.1** release today and maintained very high velocity: **21 issues** and **44 PRs** updated in the last 24 hours, with a **27:17 merge-to-open PR ratio** signaling strong throughput. The release introduces the first **multi-tenant "QwenPaw Hub"** preview (tracked in #7318), while the community surfaces a cluster of regressions around agent mid-task stalls (#6921), TLS/handshake failures on carrier networks (#7298), and context/memory leakage across sessions (#7193). Test infrastructure got a major overhaul—parallelized CI shards, 23 new E2E cases, and 382 console unit tests—indicating the team is hardening quality gates ahead of the 2.2 stable line.

---

## 2. Releases
### v2.2.0-beta.1 (Beta) — [Release Page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.1)
| Change | Details |
|--------|---------|
| **Docs** | Updated scroll context manager blog ([#7300](https://github.com/agentscope-ai/QwenPaw/pull/7300)) |
| **Providers** | Sanitized DashScope tool schemas for strict models ([#7284](https://github.com/agentscope-ai/QwenPaw/pull/7284)) |
| **Integration Tests** | Targeted coverage improvements (see PR #7327, #7325) |

**Breaking Changes / Migration Notes**: None explicitly documented in this beta. The Hub multi-tenant feature is opt-in; existing single-user deployments should be unaffected. Installation verification checklist is tracked in [#7333](https://github.com/agentscope-ai/QwenPaw/issues/7333) (deadline 2026-08-27 06:52 UTC).

---

## 3. Project Progress — Merged / Closed PRs (27 total)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#7327](https://github.com/agentscope-ai/QwenPaw/pull/7327) | **test(e2e)** | +23 targeted console E2E cases; ~6-7 pp coverage gain | 🟢 Quality gate hardening |
| [#7325](https://github.com/agentscope-ai/QwenPaw/pull/7325) | **test(console)** | +382 unit tests, +5.49 pp statement coverage | 🟢 Frontend regression safety |
| [#7326](https://github.com/agentscope-ai/QwenPaw/pull/7326) | **feat(ci)** | Nightly E2E split into 3 parallel shards (p0/p1/p2), fail-closed summary | 🟢 CI reliability & speed |
| [#7293](https://github.com/agentscope-ai/QwenPaw/pull/7293) | **feat(ci)** | Integration tests in `tests.yml` split into 3 parallel shards | 🟢 Faster feedback loop |
| [#7292](https://github.com/agentscope-ai/QwenPaw/pull/7292) | **test(coverage)** | +19 unit test files (+1,148 tests), +5.02 pp backend coverage; fixed `/root` classification | 🟢 Backend coverage & correctness |
| [#7250](https://github.com/agentscope-ai/QwenPaw/pull/7250) | **fix(scripts)** | Fixed local test runner skipping suites & false-success reporting | 🟢 Developer productivity |
| [#7194](https://github.com/agentscope-ai/QwenPaw/pull/7194) | **fix(workspace)** | Cancellation-safe startup/cleanup for reload candidates | 🟢 Stability during hot-reload |
| [#7319](https://github.com/agentscope-ai/QwenPaw/pull/7319) | **refactor(console)** | Background agent runs now tracked via TaskTracker (status, stop, reconnect) | 🟢 Observability & control |
| [#7190](https://github.com/agentscope-ai/QwenPaw/pull/7190) | **feat(qwenpaw-data)** | PyPI runtime path, docker-compose GAAP demo, env inheritance fix | 🟢 Data app installability |
| [#7323](https://github.com/agentscope-ai/QwenPaw/pull/7323) / [#7336](https://github.com/agentscope-ai/QwenPaw/pull/7336) | **fix(installer)** | NSIS uninstall process-blocker handling (two follow-ups) | 🟢 Windows uninstall reliability |

**Other notable merges**: Provider model discovery restore ([#7320](https://github.com/agentscope-ai/QwenPaw/pull/7320)), mobile composer controls ([#7334](https://github.com/agentscope-ai/QwenPaw/pull/7334)), chat scroll-lock UI ([#7340](https://github.com/agentscope-ai/QwenPaw/pull/7340)), oversized tool-result bounding ([#7331](https://github.com/agentscope-ai/QwenPaw/pull/7331)), MCP Streamable-HTTP dual-protocol client ([#7330](https://github.com/agentscope-ai/QwenPaw/pull/7330)).

---

## 4. Community Hot Topics (Most Comments / Reactions)
| Issue / PR | Comments | Core Need | Signal |
|------------|----------|-----------|--------|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | **11** 🐛 | **Agent silently stops mid-task** after planning output (“Now 2.1, 3.1…”) with no visual cue; user must say “continue”. Windows 11, v2.1beta2. | **High-severity UX regression** — blocks multi-step workflows; no fix PR yet. |
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | **6** 💬 | **QwenPaw Hub (multi-tenant) coming in 2.2.0** — community asked what to build next. Links to #2324 (multi-user/admin skills). | **Roadmap anchor** — Hub is the 2.2 headline feature; community input sought. |
| [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) | **6** 🐛 | **WeChat channel “show thinking” toggle ignored** — thinking still rendered. Web v2.1. | **Channel-specific regression** — affects trust/transparency. |
| [#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177) | **4** ✨ | **Deploy page mobile UX**: primary action buried at bottom; stop button too close to primary. | **Mobile-first polish** — PR #7334 addresses composer; deploy page still open. |
| [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) | **3** 🐛 | **Desktop & Docker bundle OpenSSL 3.0.x (Python 3.11)** → carrier DPI resets TLS handshakes; no desktop workaround. | **Network-level blocker** — PR #7328 bumps to Python 3.13 / OpenSSL 3.5.x. |
| [#7335](https://github.com/agentscope-ai/QwenPaw/issues/7335) | **2** ✨ | **Prompt cache hit-rate observability**: QwenPaw 81.68% vs OpenCode 96.02%; direct cost impact. Labeled “good first issue”. | **Cost/performance gap** — instrumentation + optimization opportunity. |
| [#7316](https://github.com/agentscope-ai/QwenPaw/issues/7316) | **2** 💡 | **Tool to prune/simplify useless tool returns in ReAct loop** — reduce context bloat. | **Context-efficiency research** — community exploring automatic compression. |

---

## 5. Bugs & Stability — Ranked by Severity
| Rank | Issue | Severity | Status | Fix PR / Notes |
|------|-------|----------|--------|----------------|
| 1 | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) Agent silent stall mid-task | **Critical** (data loss risk, workflow break) | Open | No fix PR; needs root-cause on planner/loop handoff |
| 2 | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) TLS handshake reset on carrier networks | **High** (network-level failure) | Open | **PR #7328** bumps Python 3.11→3.13 (OpenSSL 3.0→3.5) for desktop + Docker |
| 3 | [#7206](https://github.com/agentscope-ai/QwenPaw/issues/7206) `/compact` ValidationError at threshold 0.9 | **High** (regression from v2.1.0) | Closed | Fixed in v2.1.1-beta.1? (closed but verify regression test) |
| 4 | [#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193) Memory search crosses sessions | **High** (context leakage) | Open | No fix PR; isolation bug in memory retrieval |
| 5 | [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) WeChat “show thinking” ignored | **Medium** | Closed | Likely fixed in recent channel refactor |
| 6 | [#7321](https://github.com/agentscope-ai/QwenPaw/issues/7321) Tool call stuck in “executing” UI after force-stop | **Medium** | Open | State sync issue between backend/task-tracker & frontend |
| 7 | [#7324](https://github.com/agentscope-ai/QwenPaw/issues/7324) Missing inbox notification for 1 of 3 scheduled tasks | **Medium** | Open | Notification delivery race? |
| 8 | [#7310](https://github.com/agentscope-ai/QwenPaw/issues/7310) Plugin conflict (datapaw) crashes app | **Medium** | Open | Plugin sandboxing / error boundary needed |

---

## 6. Feature Requests & Roadmap Signals
| Request | Issue | Likelihood for 2.2 / 2.3 | Rationale |
|---------|-------|--------------------------|-----------|
| **QwenPaw Hub (multi-tenant)** | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | **Confirmed 2.2.0** | Beta already shipping; community polling for next priorities |
| **Prompt cache hit-rate dashboard & optimization** | [#7335](https://github.com/agentscope-ai/QwenPaw/issues/7335) | **High (2.2.x)** | Labeled “good first issue”; quantified cost delta (81% vs 96%) |
| **Chat scroll-lock during streaming** | [#7339](https://github.com/agentscope-ai/QwenPaw/issues/7339) | **High (2.2.x)** | **PR #7340** already open — UI control + localStorage persistence |
| **Popup selection vs text input for model options** | [#7279](https://github.com/agentscope-ai/QwenPaw/issues/7279) | **Medium (2.3)** | UX parity with competitors (Hesmes cited); low complexity |
| **Auto-clear completed background tasks** | [#7280](https://github.com/agentscope-ai/QwenPaw/issues/7280) | **Medium (2.3)** | Setting toggle requested; PR #7319 adds TaskTracker foundation |
| **ReAct-loop tool-return pruning tool** | [#7316](https://github.com/agentscope-ai/QwenPaw/issues/7316) | **Low (research)** | Novel idea; needs design for LLM-as-judge compression |
| **DingTalk group context modes (isolate/share)** | [#7158](https://github.com/agentscope-ai/QwenPaw/issues/7158) | **Medium (2.3)** | Enterprise channel parity; closed but may reopen for 2.3 |
| **Mobile deploy page UX** | [#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177) | **Medium (2.2.x)** | Partial fix in #7334 (composer); deploy page still pending |

---

## 7. User Feedback Summary — Real Pain Points
| Theme | Representative Voices | Frequency |
|-------|----------------------|-----------|
| **“Agent ghosts” — stops without telling me** | #6921 (11 comments), #7321 (UI stuck) | **High** — multiple users, multi-step tasks |
| **Mobile UX feels like afterthought** | #7177 (deploy page), #7334 (composer controls) | **Medium** — power users on phone |
| **Memory/Context leaks across sessions** | #7193 (searched wrong session), #7335 (cache opacity) | **Medium** — trust & cost |
| **Install/Uninstall friction (Windows)** | #7188 (cache option unclear), #7323/#7336 (NSIS blockers) | **Medium** — onboarding/offboarding |
| **Background task noise** | #7280 (completed

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-27

## 1. Today's Overview
ZeroClaw shows **high architectural activity** with 13 issues and 50 PRs updated in the last 24 hours. The project is in a **pre-release stabilization phase** (v0.8.5 tracker #9459 targeting August 30) while simultaneously advancing two major accepted RFCs: Gemini Live speech-to-speech broker channel (#8780 → implementation tracker #10406) and session-scoped persistent prompt attachments (#9998 → implementation tracker #10405). No new releases were published today. The PR velocity (50 updates, 5 merged) indicates active development with maintainer review bottlenecks on several high-risk, XL-sized PRs (e.g., #10142 ZeroRelay secure transport, #10070 SSRF hardening, #10367 symlink race fix).

---

## 2. Releases
**No new releases today.** The v0.8.5 stabilization line (#9459) remains active with intake frozen since August 4; weekly cuts continue shipping ready work. The next milestone (v0.9.0) is tracked in #7432 covering auth, security hardening, gateway boundaries, and breaking changes.

---

## 3. Project Progress — Merged / Closed PRs (Last 24h)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#9725](https://github.com/zeroclaw-labs/zeroclaw/pull/9725) | **Bug fix** (channel, S1 severity) | Clears delivery registry when channel reload removes all channels — fixes stale registry bug from #9591 | **Critical stability**: prevents message-delivery regression on config reload |
| [#10335](https://github.com/zeroclaw-labs/zeroclaw/pull/10335) | **Dependency** (root `schemars` gated behind `schema-export`) | Makes schemars optional, reduces compile-time surface | Supply-chain hygiene |
| [#10363](https://github.com/zeroclaw-labs/zeroclaw/pull/10363) | **Distribution** (closes #10138) | Adds `channel-git` to canonical `dist` feature; regenerates Docker, Nix, AUR, Windows artifacts | **User-facing**: Git channel now included in official `zeroclaw:debian` image |
| [#10192](https://github.com/zeroclaw-labs/zeroclaw/pull/10192) | **Docs / Policy** | Calibrates risk-review policy per accepted RFC #9990; aligns labels, playbook, workflow | Process maturity |
| [#9591](https://github.com/zeroclaw-labs/zeroclaw/issues/9591) | **Issue closed** | Channel registry bug fixed by #9725 | Resolved |

**Net progress**: One S1 channel bug resolved, Git channel shipped in artifacts, risk-review policy formalized, dependency surface reduced.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Activity | Core Need |
|------|----------|-----------|
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) RFC: Gemini Live speech-to-speech channel | **21 comments**, accepted, high-risk, feature-gated | **Realtime voice UX** — broker contract for speech-to-speech; first provider Gemini Live; security & architecture review heavy |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Tracker: Maintainer decision queue | **14 comments** | **Governance bottleneck** — central queue for RFC/design decisions needing maintainer attention |
| [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) Tracker: Session-persistence contract ownership | **13 comments**, high-risk | **Architectural conflict** — four workstreams touching same persistence contract without designated owner |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) RFC: Granular sandbox policy (filesystem/network) | **12 comments**, in-progress, needs maintainer review | **Security hardening** — unify application-layer path admission with OS sandbox backends (Bubblewrap, Landlock, Seatbelt) |
| [#9998](https://github.com/zeroclaw-labs/zeroclaw/issues/9998) RFC: Session-scoped persistent prompt attachments | **9 comments**, accepted, zerocode | **Agent memory durability** — survive history trimming, restarts, parallel sessions; SQLite-backed, approval-gated mutations |
| [#10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142) feat(zerorelay): secure transport with blind relay & native mTLS | **XL, high-risk, needs maintainer review** | **Zero-trust networking** — mandatory mTLS, per-daemon CA, CSR-only issuance; supersedes #9080 |

**Pattern**: Contributors are pushing **security-critical, architecture-spanning changes** (transport, sandbox, persistence, realtime voice) that require maintainer bandwidth for review — hence the decision-queue tracker (#8692) and ownership tracker (#9600).

---

## 5. Bugs & Stability — Reported / Fixed Today

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **S1 (workflow blocked)** | [#9591](https://github.com/zeroclaw-labs/zeroclaw/issues/9591) Channel registry not cleared when reload removes all channels | **Closed** | [#9725](https://github.com/zeroclaw-labs/zeroclaw/pull/9725) ✅ merged |
| **High (security)** | [#10367](https://github.com/zeroclaw-labs/zeroclaw/pull/10367) Symlink races during skill install | **Open** | PR open, needs maintainer review — uses directory-handle-relative opens to prevent TOCTOU |
| **High (security)** | [#10070](https://github.com/zeroclaw-labs/zeroclaw/pull/10070) SSRF in `file_download` — private-host opt-in gating | **Open, blocked, do-not-merge** | First slice of SSRF hardening; awaiting review |
| **Medium** | [#9707](https://github.com/zeroclaw-labs/zeroclaw/pull/9707) Bare `vision_model_provider` config migration to dotted alias ref | **Open** | Config migration fix; risk:medium |
| **Medium** | [#10347](https://github.com/zeroclaw-labs/zeroclaw/pull/10347) Quickstart test assertions locale-dependent | **Open** | Test flakiness fix; XS |

**Stability signal**: Only one active S1 bug, now fixed. Remaining high-severity items are **security hardening PRs awaiting review** — not regressions.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Stage | Likelihood for v0.8.5 / v0.9.0 |
|---------|--------|-------|--------------------------------|
| **Gemini Live speech-to-speech broker channel** | #8780 (accepted) → #10406 (impl tracker) | Implementation started (PR #10407 related) | **High** — accepted RFC, dedicated tracker, security/architecture review done |
| **Session-scoped persistent prompt attachments** | #9998 (accepted) → #10405 (impl tracker) | Implementation PR #10407 opened today | **High** — accepted RFC, zerocode, SQLite-backed, approval-gated |
| **Microsoft Teams (Bot Framework) channel** | [#9241](https://github.com/zeroclaw-labs/zeroclaw/pull/9241) | Open, XL, needs author action | **Medium** — large PR, author action required, channel expansion |
| **LLM-judge grader (per-dimension, diagnostic)** | [#9222](https://github.com/zeroclaw-labs/zeroclaw/pull/9222) | Open, XL, needs author action | **Low for v0.8.5** — explicitly off gate until calibrated |
| **Append-only eval run-history receipts** | [#9248](https://github.com/zeroclaw-labs/zeroclaw/pull/9248) | Open, XL, needs author action | **Low for v0.8.5** — opt-in, diagnostic |
| **Granular sandbox policy (filesystem/network)** | #6996 | RFC in-progress, needs maintainer review | **Target v0.9.0** — #7432 tracker, high-risk, breaking changes |
| **ZeroRelay secure transport (mTLS, blind relay)** | [#10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142) | Open, XL, needs maintainer review | **Target v0.9.0** — supersedes #9080, architectural |

**Prediction**: v0.8.5 (Aug 30) will likely include the two accepted RFC implementations (Gemini voice, prompt attachments) plus the Git channel artifact fix. v0.9.0 will carry the security-breaking changes: sandbox policy, ZeroRelay transport, SSRF hardening, auth/gateway overhaul.

---

## 7. User Feedback Summary (Inferred from Issues/PRs)

| Pain Point / Use Case | Evidence |
|------------------------|----------|
| **Voice-first agent interaction** | #8780: demand for realtime speech-to-speech (Gemini Live) as first-class channel |
| **Agent memory loss across restarts / trimming** | #9998: sessions lose objectives/constraints; parallel sessions exacerbate |
| **Git channel missing from Docker image** | #10138 → #10363: users expect `channel-git` in official `zeroclaw:debian` |
| **Config migration friction** | #9707: bare `vision_model_provider` no longer works after V3 alias migration |
| **Locale-dependent test flakiness** | #10347: Quickstart tests fail on non-English systems |
| **SSRF exposure in file_download** | #10070: operators need private-host opt-in for internal services |
| **Symlink races in skill install** | #10367: supply-chain / local privilege escalation concern |
| **PR review process opacity** | #10366 (new RFC): contributors want clarified evidence/freshness/expedited lanes |

**Satisfaction signals**: Quick resolution of S1 channel bug (#9591→#9725), Git channel added to artifacts (#10363), i18n fixes landing (#10189, #10347).  
**Friction signals**: Multiple XL PRs stalled on maintainer review; governance trackers (#8692, #9600) indicate decision bottlenecks.

---

## 8. Backlog Watch — Stalled / Long-Unanswered High-Value Items

| Item | Age | Why It Matters | Blocked On |
|------|-----|----------------|------------|
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) RFC: Granular sandbox policy | **~3 months** (created 2026-05-28) | Unifies dual filesystem-policy layers; prerequisite for v0.9.0 security hardening (#7432) | **Maintainer review** — labeled `needs-maintainer-review`, high-risk |
| [#10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142) ZeroRelay secure transport | **8 days** (created 2026-08-19) | Mandatory mTLS, per-daemon CA; architectural shift for remote transport | **Maintainer review** — XL, high-risk, distinguished contributor |
| [#10070](https://github.com/zeroclaw-labs/zeroclaw/pull/10070) SSRF hardening for `file_download` | **9 days** | First slice of SSRF fix; `do-not-merge` + `blocked` labels | **Maintainer review** — high-risk, security:policy |
| [#10367](https://github.com/zeroclaw-labs/zeroclaw/pull/10367) Symlink race fix in skills | **2 days** | Prevents TOCTOU during skill install; security:traits | **Maintainer review** — high-risk, XL |
| [#9241](https://github.com/zeroclaw-labs/zeroclaw/pull/9241) Microsoft Teams channel | **37 days** | Major channel expansion; Bot Framework integration | **Author action** — labeled `needs-author-action`, XL |
| [#9222](https://github.com/zeroclaw-labs/zeroclaw/pull/9222) LLM-judge grader | **38 days** | Evaluation infra; diagnostic-first | **Author action** — XL, needs calibration |
| [#9248](https://github.com/zeroclaw-labs/zeroclaw/pull/9248) Eval run-history receipts | **37 days** | Trend analysis for eval runs | **Author action** — XL |

**Maintainer attention needed most**: #6996 (oldest RFC, blocks v0.9.0 security), #10142 (architectural transport change), #10070/#10367 (security fixes stuck in review). The decision-queue tracker (#8692) exists precisely for this backlog.

---

## Health Indicators
| Metric | Signal |
|--------|--------|
| **Issue/PR velocity** | High (63 items updated/24h) |
| **Review throughput** | Low — 5 merged vs 45 open; multiple XL PRs awaiting review >1 week |
| **Security posture** | Active hardening (sandbox, SSRF, symlink, mTLS) but review-bound |
| **Release cadence** | v0.8.5 stabilization on track (Aug 30); v0.9.0 scope defined |
| **Governance** | Explicit trackers for decisions (#8692), ownership (#9600), milestones (#7432, #9459) |
| **Contributor experience** | New RFC (#10366) to clarify review process; i18n/test fixes landing |

**Bottom line**: ZeroClaw is **architecturally ambitious and security-focused**, with a healthy pipeline of accepted RFCs moving to implementation. The primary risk is **maintainer review capacity** gating high-impact security and transport changes. The v0.8.5 cut looks stable; v0.9.0 will be the significant security/architecture release.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*