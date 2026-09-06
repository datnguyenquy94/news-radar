# OpenClaw Ecosystem Digest 2026-09-06

> Issues: 183 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-06 04:12 UTC

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

# OpenClaw Project Digest — 2026-09-06

## 1. Today's Overview

OpenClaw shows **high velocity** with 500 PR updates and 183 issue updates in 24 hours. The project released **v2026.9.2** today, focused on chat responsiveness and gateway performance. The issue backlog reveals systemic pressure on **long-conversation stability**, **child process management**, **billing/auth recovery**, and **memory/dreaming promotion event-loop blocking**. Maintainer "steipete" and automation "roboclaw-bot" are driving a wave of cleanup PRs targeting gateway lifecycle, memory indexing, update mechanisms, and channel rendering unification.

---

## 2. Releases

### v2026.9.2 — "Faster, more responsive chat"
- **Highlights**: Keeps chat, dashboards, and session interactions responsive while long transcripts and disk usage are processed; direct dashboard lookup; reduced cold-load work; durable history reads moved outside Gateway event loop.
- **Related PRs**: #136862, #138xxx (partial reference in data)
- **Breaking changes**: None noted in summary.
- **Migration notes**: No explicit migration steps; users upgrading from 2026.9.1 should verify service restart behavior (see PR #139660 fixing npm upgrade service stop issue).

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary |
|----|------|---------|
| [#139660](https://github.com/openclaw/openclaw/pull/139660) | CLI/Update | Fix npm upgrade from 2026.9.1 leaving service stopped |
| [#139651](https://github.com/openclaw/openclaw/pull/139651) | Test | Overlap independent proxy deadline checks (81s → faster) |
| [#139685](https://github.com/openclaw/openclaw/pull/139685) | ACP | Preserve queued output, cancel failed deliveries (closes #139680) |
| [#139694](https://github.com/openclaw/openclaw/pull/139694) | Daemon | Consolidate service lifecycle test coverage |
| [#137845](https://github.com/openclaw/openclaw/pull/137845) | Channels | Fix unclassified harness-internal turn failures surfaced as generic provider errors |
| [#115430](https://github.com/openclaw/openclaw/pull/115430) | Windows | Corepack EPERM creating pnpm shim in Program Files (not-repro-on-main) |
| [#107434](https://github.com/openclaw/openclaw/pull/107434) | Media | Media attachments dropped when inbound turn steers active run |
| [#103636](https://github.com/openclaw/openclaw/pull/103636) | Auth | Backend loopback client loses operator scope on host interface IP relay |

**Theme**: Stabilization of upgrade paths, test speed, ACP output integrity, and auth/scope correctness.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | Bug | 12 | 2 | **Tool parameter loss after 15+ turns** — `write`/`exec` receive empty args, breaking long conversations |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Bug | 11 | 1 | **Zombie process accumulation** — unreaped hook/tool children degrade runtime |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | Bug (P0) | 8 | 0 | **Billing cooldown persists after outage** — 5h fixed TTL, no probe-based recovery for subscription auth |
| [#132765](https://github.com/openclaw/openclaw/issues/132765) | Bug (P1) | 8 | 0 | **`agents_wait` ignores `timeoutSeconds`** — dies at ~60s as tool error instead of returning pending |
| [#127148](https://github.com/openclaw/openclaw/issues/127148) | Bug (P1) | 7 | 0 | **Codex `sessions.compact` acquires second app-server** — active-writer conflict |
| [#139669](https://github.com/openclaw/openclaw/issues/139669) | Bug (P1) | 3 | 0 | **iMessage catchup drops oldest messages** when backlog > `perRunLimit` (default 50) |

**Underlying pattern**: Users hitting **scale limits** (long conversations, high message volumes, multi-session deployments) expose resource leaks, timeout mismatches, and recovery gaps.

---

## 5. Bugs & Stability (Reported/Updated Today, Ranked by Severity)

| Severity | Issue | Status | Fix PR? | Notes |
|----------|-------|--------|---------|-------|
| **P0** | [#115642](https://github.com/openclaw/openclaw/issues/115642) Billing cooldown outlives outage | Open | No | Subscription auth blocked for 5h fixed window; needs probe-based recovery + manual reset |
| **P1** | [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie child process leak | Open | No | `openclaw-hooks`, `bash`, `codex` accumulate; runtime degradation over time |
| **P1** | [#132765](https://github.com/openclaw/openclaw/issues/132765) `agents_wait` ignores timeout | Open | No | Hard ~60s failure vs configured `waitTimeoutSecondsMax` (default 600) |
| **P1** | [#127148](https://github.com/openclaw/openclaw/issues/127148) Codex compact acquires 2nd app-server | Open | No | Active-writer conflict on bound sessions |
| **P1** | [#121823](https://github.com/openclaw/openclaw/issues/121823) Memory dreaming parks event loop (min–90min) | Open | No | Healthz dark, in-process guards starve; liveness monitor cannot act |
| **P1** | [#139578](https://github.com/openclaw/openclaw/issues/139578) llama.cpp EmbeddingGemma ubatch regression | Open | No | Regression from #134389/c97c5b6; server-default 512 used |
| **P2** | [#53408](https://github.com/openclaw/openclaw/issues/53408) Write/exec params dropped after long convos | Open | No | Silent empty args after 15+ turns with heavy tool usage |
| **P2** | [#137729](https://github.com/openclaw/openclaw/issues/137729) Unguarded `.trim()` on undefined fields | Open | No | Crashes transcript replay & error classification; fix pattern exists elsewhere |
| **P2** | [#139669](https://github.com/openclaw/openclaw/issues/139669) iMessage catchup drops oldest messages | Open | No | Cursor advances past unfetched messages when backlog > perRunLimit |
| **P2** | [#84110](https://github.com/openclaw/openclaw/issues/84110) Codex rewrites prompt on continuation (cache 93%→47%) | Open | No | Regression since 2026.5.12 + codex-cli 0.130.0 |

**Observation**: Multiple P1/P2 bugs involve **event-loop blocking**, **resource leaks**, and **timeout/recovery logic gaps** — areas where automated tests may not catch real-world load patterns.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Category | Signal |
|-------|----------|--------|
| [#132781](https://github.com/openclaw/openclaw/issues/132781) | UX | Use latest commentary as progress draft label when narration unavailable |
| [#116716](https://github.com/openclaw/openclaw/issues/116716) | Context Engine | Optional strict failure policy for selected engines (no silent fallback) |
| [#103747](https://github.com/openclaw/openclaw/issues/103747) | System Prompt | Refactor from 20+ fragmented rules → 3-tier cognitive framework |
| [#101422](https://github.com/openclaw/openclaw/issues/101422) | Memory | Configurable recall eligibility & index exclusion paths for markdown-first workspaces |
| [#114798](https://github.com/openclaw/openclaw/issues/114798) | Browser Tool | Snapshot-on-navigate, fewer round-trips, fewer setup dead-ends |
| [#114240](https://github.com/openclaw/openclaw/issues/114240) | Browser Tool | Auto-close browser after operations (timeout or explicit) |
| [#58057](https://github.com/openclaw/openclaw/issues/58057) | Auth | Dynamic identity resolution for allowlists (`dmPolicy: dynamic`) |
| [#82011](https://github.com/openclaw/openclaw/issues/82011) | Input | Typo/grammar detection in chat input (configurable, highlight-only) |
| [#42591](https://github.com/openclaw/openclaw/issues/42591) | Install | Modularize `install.sh` (2498 lines → maintainable modules) |

**Prediction**: Next version likely to include **browser tool improvements** (multiple PRs active), **memory indexing fixes** (PR #139698 open), and **progress rendering unification** (PR #139206). System prompt refactor (#103747) is high-impact but may need design consensus.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Long conversations break tools** | #53408 (12 comments), #84110 (cache regression) | Core usability for power users |
| **Silent failures / zombie processes** | #97616, #121823 (event loop parked 90min) | Production reliability |
| **Auth/billing recovery too rigid** | #115642 (5h cooldown), #89430 (Google Chat 403 on app auth) | Multi-tenant / subscription deployments |
| **Channel-specific regressions** | #124133 (Snowluma broken), #81892 (Matrix reasoning), #89254 (Matrix DM dispatch), #139669 (iMessage catchup) | Channel plugin stability |
| **Upgrade friction** | #139660 (npm upgrade stops service), #139709 (stale beta plugins loop startup) | Operational burden |
| **Windows/permissions issues** | #115430 (corepack EPERM), #76259 (macOS killProcessTree regression) | Cross-platform reliability |

**Satisfaction signals**: Users file detailed repros, suggest fixes, and track regressions across versions — indicates invested community. Dissatisfaction centers on **silent data loss** (params, messages) and **unrecoverable states** (cooldowns, event-loop blocks).

---

## 8. Backlog Watch (Long-Unanswered, High-Impact)

| Issue | Age | Severity | Why It Matters |
|-------|-----|----------|----------------|
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | 166 days | P2 | Tool param loss after long convos — core UX regression, no fix PR |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 69 days | P1 | Zombie process leak — degrades all long-running deployments |
| [#58057](https://github.com/openclaw/openclaw/issues/58057) | 159 days | P2 | Dynamic allowlists — blocks multi-user scaling |
| [#84110](https://github.com/openclaw/openclaw/issues/84110) | 110 days | P2 | Codex prompt cache busting — 2x cost/latency |
| [#89254](https://github.com/openclaw/openclaw/issues/89254) | 97 days | P2 | Matrix E2EE DM dispatch failure — channel reliability |
| [#99910](https://github.com/openclaw/openclaw/issues/99910) | 64 days | P1 | Memory dreaming pegs event loop 10min — availability |
| [#108441](https://github.com/openclaw/openclaw/issues/108441) | 53 days | P2 | Startup migration lease deadlock — HA gateway startup |
| [#112698](https://github.com/openclaw/openclaw/issues/112698) | 46 days | P1 | Codex notification starves gateway 22s/turn — latency |
| [#42591](https://github.com/openclaw/openclaw/issues/42591) | 179 days | P3 | Install.sh modularization — contributor onboarding, maintainability |

**Maintainer attention needed**: Several P1 issues have `clawsweeper:no-new-fix-pr` and `clawsweeper:needs-maintainer-review` labels but no active fix PR. The **memory dreaming** (#121823, #99910) and **Codex notification** (#112698) event-loop blocking issues are critical for production stability.

---

## Quick Links
- **Release**: [v2026.9.2](https://github.com/openclaw/openclaw/releases/tag/v2026.9.2)
- **All issues updated today**: [GitHub Issues](https://github.com/openclaw/openclaw/issues?q=updated%3A2026-09-06)
- **All PRs updated today**: [GitHub PRs](https://github.com/openclaw/openclaw/pulls?q=updated%3A2026-09-06)
- **ClawSweeper dashboard** (triage bot): Search `clawsweeper:` labels in issues

---

*Digest generated from GitHub API data for openclaw/openclaw on 2026-09-06. All links point to live GitHub items.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-09-06)

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape shows **high fragmentation with convergent technical challenges**. Twelve active projects span from enterprise-grade platforms (OpenClaw, ZeroClaw, Hermes Agent) to specialized single-developer tools (PicoClaw, NanoClaw, ZeptoClaw). All projects face **scale-related stability issues**: long-conversation context degradation, event-loop blocking under load, subprocess/resource leaks, and authentication/billing recovery gaps. A clear bifurcation exists between **multi-tenant gateway architectures** (OpenClaw, ZeroClaw, Hermes, CoPaw) optimizing for team/enterprise deployment, and **local-first single-user agents** (NanoBot, PicoClaw, NanoClaw, ZeptoClaw) prioritizing latency and privacy. No dominant standard has emerged for agent-channel protocols, memory persistence, or tool-permission models—each project invents its own.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged PRs (24h) | Release Today | Health Score* |
|---------|--------------|-----------|------------------|---------------|---------------|
| **OpenClaw** | 183 updates | 500 updates | 9 | **v2026.9.2** | 🟢 **9/10** |
| **ZeroClaw** | 7 active | 50 updates | 5 | **v0.8.5** (454 commits) | 🟢 **9/10** |
| **CoPaw/QwenPaw** | 11 updated | 7 updated | 0 | — (v2.2.0 pending) | 🟡 **7/10** |
| **Hermes Agent** | 5 active | 50 updated | 0 | — | 🟡 **7/10** |
| **NanoBot** | 1 new (critical) | 25 updated | 3 | — | 🟡 **7/10** |
| **ZeptoClaw** | 10 new (arch) | 4 merged | 4 | — | 🟢 **8/10** |
| **IronClaw** | 1 new | 1 open | 0 | — | 🟡 **6/10** |
| **PicoClaw** | 2 updated | 3 merged | 3 | — | 🟡 **6/10** |
| **NanoClaw** | 0 | 3 open | 0 | — | 🟡 **5/10** |
| **LobsterAI** | 0 | 0 merged | 0 | — | 🔴 **3/10** |
| **NullClaw** | 0 | 0 | 0 | — | 🔴 **1/10** |
| **Moltis** | 0 | 0 | 0 | — | 🔴 **1/10** |

*Health Score: Weighted by release cadence, PR merge rate, issue resolution velocity, critical bug count, and community engagement (0-10).

---

## 3. OpenClaw's Position

### Advantages vs Peers
| Dimension | OpenClaw | Nearest Peers |
|-----------|----------|---------------|
| **Release velocity** | Daily cuts (v2026.9.2 today) | ZeroClaw (major monthly), others irregular |
| **Scale validation** | 500 PRs/24h, 183 issue updates — real production load | ZeroClaw (73 contributors), Hermes (50 PRs) |
| **Gateway maturity** | Direct dashboard lookup, durable history outside event loop | Hermes (gateway authority on `main`), ZeroClaw (ZeroRouter/Relay) |
| **Cross-platform** | Windows service fix (#139660), macOS, Linux | ZeroClaw (Windows CI), NanoBot (TUI/WebUI) |
| **Channel breadth** | iMessage, Matrix, Slack, Discord, Snowluma, ACP | Hermes (WhatsApp, Discord, Feishu), ZeroClaw (Telegram, Matrix, Lark, Signal) |

### Technical Approach Differences
- **Event-loop protection**: OpenClaw moves *durable history reads outside Gateway event loop* (v2026.9.2); NanoBot offloads *session persistence* (#5580); ZeptoClaw enforces *fail-closed agent_mode* (#671); ZeroClaw hardens *sandbox/credential boundaries* (v0.8.5).
- **Memory/dreaming**: OpenClaw's "dreaming parks event loop 10–90min" (#121823, #99910) is a **unique scale pain point** — no other project reports this.
- **Upgrade safety**: OpenClaw fixes `npm upgrade` leaving service stopped (#139660); ZeroClaw has no breaking changes noted; others lack upgrade automation.

### Community Size Comparison
| Metric | OpenClaw | ZeroClaw | Hermes | CoPaw | NanoBot |
|--------|----------|----------|--------|-------|---------|
| Contributors (latest release) | Not stated | **73** | Not stated | Not stated | Not stated |
| PR velocity (24h) | **500** | 50 | 50 | 7 | 25 |
| Issue engagement (top issue) | 12 comments | 5 comments | **164** comments | 23 comments | 5 comments |
| **Verdict** | **Largest active contributor base** | Strong release cohort | High discussion volume | Growing enterprise interest | Focused technical community |

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Need |
|-------------|-------------------|---------------|
| **Long-conversation stability** | OpenClaw (#53408, #84110), CoPaw (#7576), Hermes (blank iteration turns #93635), NanoBot (unbounded dream memory #5630) | Tool param loss after 15+ turns; context window regression; hardcoded context sizes; unbounded memory injection |
| **Event-loop non-blocking** | OpenClaw (#121823 dreaming), NanoBot (#5580 session I/O), ZeptoClaw (P0 subprocess env scrubbing), ZeroClaw (memory consolidation #10637) | Offload I/O, memory, dreaming, subprocess reaping from main loop |
| **Subprocess/resource hygiene** | OpenClaw (#97616 zombie children), ZeptoClaw (#644/#660 env scrub + reap), ZeroClaw (hardened sandbox v0.8.5), Hermes (container detection #58141) | Reap child processes, scrub secrets from env, prevent leaks |
| **Auth/billing recovery** | OpenClaw (#115642 5h fixed cooldown), ZeroClaw (credential boundaries), CoPaw (custom provider config migration #7474), Hermes (kanban identity leak #103974) | Probe-based recovery, graceful degradation, config migration, identity isolation |
| **Multi-channel parity** | OpenClaw (iMessage, Matrix, Snowluma regressions), Hermes (WhatsApp, Discord, Feishu), ZeroClaw (Telegram, Matrix, Lark, Signal), CoPaw (Feishu cards), IronClaw (shared channels) | Consistent UX across Slack/Discord/Matrix/Telegram/Signal/Feishu/WhatsApp/IRC/ACP |
| **Tool permission models** | ZeroClaw (Shell V1 RFC #7155 #10610), ZeptoClaw (delegation policy #664), Hermes (kanban worker identity #103974), CoPaw (skill versioning #7557) | Tiered approval, capability inheritance, audit correlation, reproducible skill deps |

---

## 5. Differentiation Analysis

| Project | Target Users | Architectural Focus | Key Differentiator |
|---------|--------------|---------------------|-------------------|
| **OpenClaw** | Enterprise teams, power users | **Gateway-centric**: event-loop protection, durable history, multi-channel hub | Production scale: 500 PRs/day, daily releases, longest track record |
| **ZeroClaw** | Enterprise/operator deployments | **Connectivity primitives**: ZeroRelay, ZeroRouter, hardened sandbox boundaries | Security-first: plugin egress trust-store, webhook audit correlation, RFC-governed |
| **Hermes Agent** | Multi-device bot operators | **Gateway authority + session persistence**: bot survives desktop close | Group-chat continuity across devices, kanban orchestration |
| **CoPaw/QwenPaw** | Team/enterprise (Hub multi-tenant) | **Skill ecosystem + advisor mode**: dual-model planner/worker, Make Skill v2 | Fleet management (9+ agents), skill versioning, Feishu-native |
| **NanoBot** | Developers, NIM users | **Provider resilience + WebUI/TUI**: fallback chains, heartbeat override, session security | Nvidia NIM optimization, signed webhooks, path-traversal hardening |
| **ZeptoClaw** | Security-conscious deployments | **Audit-chain + hermetic testing + capability policy** | Tamper-evident logs, config opacity resolution, extension-host redesign |
| **IronClaw** | Benchmark/CI sandbox workloads | **Embedded Pi sandbox as default** | Reproducible sandbox images for performance measurement |
| **PicoClaw** | IRC bot deployments | **IRCv3 message reassembly** | Only project solving IRC 512-byte fragmentation |
| **NanoClaw** | Signal-cli Linux users | **Dependency hygiene + CI cleanliness** | signal-cli pin, temp-dir leak fix, model ID freshness |
| **LobsterAI** | Collaborative UI teams | **Cowork session UI + per-session MCP** | Stalled: 160-day stale PRs for component split + MCP toggle |

---

## 6. Community Momentum & Maturity

### Tier 1: **Rapidly Iterating / Production-Ready**
- **OpenClaw**: Daily releases, 500 PRs/24h, 183 issue updates — **highest velocity**, active triage (ClawSweeper bot)
- **ZeroClaw**: Major release v0.8.5 (454 commits, 73 contributors), security/connectivity focus, RFC process
- **ZeptoClaw**: 4 security PRs merged in 24h, architecture review → 10 structured roadmap issues, CI baseline restored

### Tier 2: **Feature-Complete Pre-Release Stabilization**
- **Hermes Agent**: 50 open PRs, zero merges — **review bottleneck**; bot-mode continuity + macOS LaunchAgent near merge
- **CoPaw/QwenPaw**: v2.2.0 (Hub) pending; 11 issues/7 PRs updated but **0 merges/24h**; critical bugs unfixed (#7576, #7572)
- **NanoBot**: 25 PRs/24h, same-day bug→fix (#5674→#5675), but **7+ conflict-stalled PRs** (some >2 months)

### Tier 3: **Maintenance / Low Velocity**
- **IronClaw**: Light activity, sandbox default PR stacked on dependency
- **PicoClaw**: Batch-merged 13 March PRs via 3 meta-PRs; only IRC feature active
- **NanoClaw**: 3 open PRs awaiting review, no community discussion

### Tier 4: **Stalled / Dormant**
- **LobsterAI**: 160-day stale PRs, zero merges/issues — **under-resourced**
- **NullClaw, Moltis**: No activity in 24h window

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Gateway authority > desktop-client** | Hermes (bot survives desktop close), OpenClaw (durable history outside loop), ZeroClaw (ZeroRouter/Relay) | **Design for headless, multi-device session persistence from day one** |
| **Event-loop protection is non-negotiable at scale** | OpenClaw (dreaming blocks 90min), NanoBot (session I/O stalls), ZeptoClaw (P0 subprocess fixes), ZeroClaw (memory consolidation wrong provider) | **Offload all I/O, memory, subprocess, dreaming to async workers**; main loop must stay responsive |
| **Multi-tenant Hub is the next enterprise battleground** | CoPaw (v2.2.0 Hub, 23-comment design discussion), ZeroClaw (RBAC, audit logs), Hermes (kanban multi-agent) | **Invest in RBAC, shared skill registry, cost attribution, SSO, audit logs** — table stakes for team adoption |
| **Provider API churn demands abstraction layers** | OpenClaw (Codex cache regression), ZeroClaw (Anthropic thinking.display enum narrowed), CoPaw (NIM timeout misclassification), NanoBot (OpenAI-compatible warmup) | **Build provider adapters with version detection, capability negotiation, fallback chains** |
| **Tool permission models converging on tiered approval** | ZeroClaw (Shell V1 RFC), ZeptoClaw (delegation policy), Hermes (kanban identity scrub), CoPaw (skill versioning) | **Adopt capability-based, auditable, workspace-isolated tool permissions** — avoid ad-hoc allowlists |
| **Channel parity is a cost center, not a feature** | 8+ projects maintaining Slack/Discord/Matrix/Telegram/Signal/Feishu/WhatsApp/IRC/ACP | **Standardize on ACP (Agent Client Protocol) or similar** — reduce N×M integration burden |
| **Memory/dreaming systems need transactional durability** | OpenClaw (event-loop block), NanoBot (unbounded summaries), ZeroClaw (consolidation wrong provider), ZeptoClaw (audit-chain rotation) | **Design memory as append-only log with compaction, not in-process mutation** |

---

## Summary for Decision-Makers

| If You Need... | Best Reference Project |
|----------------|------------------------|
| **Production gateway at scale** | OpenClaw (velocity, daily releases, event-loop hardening) |
| **Security-first operator platform** | ZeroClaw (RFC process, sandbox boundaries, audit correlation) |
| **Multi-device bot continuity** | Hermes Agent (gateway authority, group-chat survival) |
| **Team/enterprise Hub with skills** | CoPaw/QwenPaw (Advisor Mode, Make Skill v2, fleet management) |
| **Provider resilience & NIM optimization** | NanoBot (fallback chains, heartbeat override, signed webhooks) |
| **Audit-chain & capability policy** | ZeptoClaw (tamper-evident logs, delegation policy, hermetic tests) |
| **IRC-native deployment** | PicoClaw (IRCv3 reassembly) |

**Strategic recommendation**: The ecosystem is **converging on gateway-centric, multi-tenant architectures with hardened event loops, capability-based permissions, and ACP-style channel abstraction**. Projects investing in these foundations (OpenClaw, ZeroClaw, Hermes, ZeptoClaw) show the strongest momentum. Avoid building custom channel integrations or in-process memory systems — adopt or contribute to the emerging shared infrastructure.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-06

## 1. Today's Overview
NanoBot shows high development velocity with **25 PRs updated** in the last 24 hours (18 open, 7 merged/closed) and **1 new critical bug report**. The project is in active maintenance mode with multiple concurrent workstreams: provider resilience, session security, WebUI improvements, MCP/OAuth hardening, and agent memory management. No new release was cut today, but several merged PRs indicate incremental stabilization of the gateway, CLI, and test suite. The single new issue (#5674) reveals a provider-level failure mode where Nvidia NIM timeouts are misclassified as model output, halting the agent — a fix PR (#5675) was opened same-day.

## 2. Releases
**No new releases today.** The latest version remains unchanged. Merged PRs (#5670, #5671, #5672) are internal refactors and test cleanups that will roll into the next release.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5670](https://github.com/HKUDS/nanobot/pull/5670) | Refactor/Tests | Unified scoped runtime notifications across clients via MessageBus; migrated context compaction end-to-end; wire compatibility preserved. | Improves event delivery reliability for WebUI/TUI; reduces duplicate notification logic. |
| [#5671](https://github.com/HKUDS/nanobot/pull/5671) | Fix (CLI) | Skipped WebUI bundle freshness check in `--dev` mode; Vite now serves source tree without stale-bundle warnings. | Developer experience improvement; eliminates false warnings during local development. |
| [#5672](https://github.com/HKUDS/nanobot/pull/5672) | Test Cleanup | Removed obsolete nonexistence checks for retired symbols/routes/wording; kept security, protocol, and regression coverage. | Reduces test noise and maintenance burden; keeps meaningful assertions. |

*Four additional PRs were merged/closed today but fall outside the top-20-by-comments list.*

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#5674](https://github.com/HKUDS/nanobot/issues/5674) — **Agent stops on Nvidia NIM timeout** | 1 issue, 0 comments, 0 👍 (new today) | **Provider resilience**: Users running Nvidia NIM hit 300s/600s timeouts that are misinterpreted as model output, freezing the agent. Critical for production workloads on NIM. |
| [#5675](https://github.com/HKUDS/nanobot/pull/5675) — **Fix: allow model failover after runner deadlines** | Opened today, linked to #5674 | **Failover correctness**: Runner deadline cancels entire chain before `FallbackProvider` can act. Fix ensures healthy fallback is attempted. |
| [#5580](https://github.com/HKUDS/nanobot/pull/5580) — **Move session persistence off event loop** | Updated 2026-09-05, p1 priority | **Event-loop latency**: Slow storage/file-lock contention blocks unrelated conversations. Offloading to async adapters prevents stalls. |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) — **Surface model retry status in UI** | Updated 2026-09-05, p2 priority | **Observability**: Users need visible retry countdown/attempt progress in TUI/WebUI during model retries (NAN-34). |
| [#5633](https://github.com/HKUDS/nanobot/pull/5633) — **Reject session keys with path traversal** | Updated 2026-09-05, p1/security | **Security hardening**: Prevents `../../etc/passwd` style session IDs from escaping sessions directory. |

## 5. Bugs & Stability (Reported/Fixed Today)
| Severity | Issue/PR | Status | Description |
|----------|----------|--------|-------------|
| **Critical** | [#5674](https://github.com/HKUDS/nanobot/issues/5674) / [#5675](https://github.com/HKUDS/nanobot/pull/5675) | **Fix PR open** | Nvidia NIM 300s/600s timeouts treated as model output → agent halts; fallback never triggered because runner deadline cancels chain. |
| **High (Security)** | [#5633](https://github.com/HKUDS/nanobot/pull/5633) | **Open (conflict)** | Path traversal via session key (`../../etc/passwd`) could write outside sessions dir. Validation added at persistence chokepoint. |
| **High** | [#5589](https://github.com/HKUDS/nanobot/pull/5589) | **Open (conflict)** | Discarded sessions can revive via pending/deferred queues publishing to message bus during cleanup. |
| **High** | [#5471](https://github.com/HKUDS/nanobot/pull/5471) | **Open (conflict)** | `ephemeral=True` SDK runs incorrectly persist turn/compact history, violating documented behavior. |
| **Medium** | [#5664](https://github.com/HKUDS/nanobot/pull/5664) | **Open (conflict)** | Unbounded idle-session summary cache (`AutoCompact._summaries`) grows indefinitely on abandoned sessions. |
| **Medium** | [#5630](https://github.com/HKUDS/nanobot/pull/5630) | **Open (conflict)** | Dream memory files (SOUL.md, USER.md, MEMORY.md) unbounded after PR #5622 removed 8000-char cap; injected into every request. |
| **Medium** | [#5457](https://github.com/HKUDS/nanobot/pull/5457) | **Open (conflict)** | Single outbound message error stops `ChannelManager._dispatch_outbound` background task, halting all message delivery until restart. |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Heartbeat model override** — cheaper model for heartbeat checks | [#4549](https://github.com/HKUDS/nanobot/pull/4549) (open since Jun, conflict) | Medium — long-standing, but conflicts block merge |
| **Heartbeat isolated session** — share context with target session | [#4551](https://github.com/HKUDS/nanobot/pull/4551) (open since Jun, conflict) | Medium — same as above |
| **Signed direct-delivery webhook** — deterministic notifications from CI/monitoring | [#5652](https://github.com/HKUDS/nanobot/pull/5652) (new, security/test) | High — addresses concrete integration need; has test coverage |
| **Per-spawn model presets** via `spawnPresets` allowlist | [#5561](https://github.com/HKUDS/nanobot/pull/5561) (conflict) | Medium — resolves #4231; design reviewed but conflicts persist |
| **MCP Apps result metadata preservation** — structured tool results separate from model text | [#5386](https://github.com/HKUDS/nanobot/pull/5386) (conflict) | Medium — improves MCP integration quality |
| **Remote project path support in WebUI** — honor folder-picker capability | [#5673](https://github.com/HKUDS/nanobot/pull/5673) (new, p2) | High — recent, targeted, with test; enables remote WebUI workflows |
| **CLI attach-only Desktop target selection** | [#5676](https://github.com/HKUDS/nanobot/pull/5676) (new today) | High — small UX improvement, independent installs, ready for review |

## 7. User Feedback Summary
- **Pain point**: Nvidia NIM users experience **complete agent lockup** on provider timeouts (#5674) — no fallback, no recovery. This is a production blocker for NIM-backed deployments.
- **Pain point**: **Event-loop stalls** during session I/O (#5580) cause cross-conversation latency spikes — affects multi-user gateway scenarios.
- **Pain point**: **No visibility into model retries** (#5504) — users see unexplained delays in TUI/WebUI; retry countdown requested.
- **Security concern**: Path traversal via session IDs (#5633) — reported via #5564, fix in review.
- **Developer friction**: Stale WebUI bundle warning in `--dev` mode (#5671) — fixed today.
- **Integration need**: Signed webhook for deterministic notifications (#5652) — requested by teams using CI/monitoring/billing systems.

## 8. Backlog Watch (Stale/Blocked High-Value Items)
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) — Heartbeat model override | ~73 days | Open, conflict | Cost optimization for heartbeat; per-run immutable runtime; blocker: merge conflicts |
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) — Heartbeat isolated session | ~73 days | Open, conflict | Allows heartbeat to reuse target session context; same conflict blocker |
| [#5561](https://github.com/HKUDS/nanobot/pull/5561) — Per-spawn model presets | ~10 days | Open, conflict | Resolves #4231; design approved but implementation conflicts |
| [#5386](https://github.com/HKUDS/nanobot/pull/5386) — MCP Apps result metadata | ~24 days | Open, conflict | Structured tool results for better agent reasoning; conflicts with current MCP handling |
| [#5457](https://github.com/HKUDS/nanobot/pull/5457) — Channel dispatcher exception boundary | ~17 days | Open, conflict | Single message error kills all outbound delivery; p2 but conflict-stalled |
| [#5580](https://github.com/HKUDS/nanobot/pull/5580) — Session persistence off event loop | ~9 days | Open, p1 | Critical for gateway scalability; needs maintainer review to resolve conflicts |

---
**Health Indicator**: 🟡 **Active but conflict-heavy** — High PR throughput (25/24h) and same-day bug→fix turnaround (#5674→#5675) show responsiveness, but **7+ open PRs carry `conflict` labels** (some >2 months old), indicating merge bottlenecks. Security (p1) and stability (p1/p2) fixes are queued behind conflicts. Recommend maintainer triage to unblock high-priority items before next release.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-06

## 1. Today's Overview
Hermes Agent shows **high development velocity** with 50 open PRs updated in the last 24 hours, though zero merges indicate a review bottleneck or batched integration strategy. Five active issues span operational stability (skills index freshness, macOS liveness probe), architectural gaps (bot group-chat continuity, in-session message delivery), and a security boundary concern (kanban worker identity leakage). The PR queue is heavily weighted toward **gateway/bot-mode features**, **WhatsApp/Discord platform polish**, **memory/agent hardening**, and **cross-platform install tooling** — signaling a push toward production-ready multi-device agent orchestration. No releases today; the project appears in a feature-complete pre-release stabilization phase.

---

## 2. Releases
**None today.** The latest release data shows no new versions published. Given the volume of open PRs targeting gateway authority, session persistence, and cross-platform service management, a consolidated release (likely `v0.12.x` or `v0.13.0`) is probable once the bot-mode and gateway continuity work lands.

---

## 3. Project Progress
**No PRs merged or closed in the last 24h** — all 50 updated PRs remain open. Key workstreams advancing in review:

| PR | Area | Status |
|----|------|--------|
| [#98073](https://github.com/NousResearch/hermes-agent/pull/98073) | **Bot-mode: control Group Chats from messaging apps** (Slack, Discord, etc.) | Open, needs decision |
| [#97846](https://github.com/NousResearch/hermes-agent/pull/97846) | **Bot-mode: automatic Group Chat continuity** after Desktop closes | Open, needs decision |
| [#93631](https://github.com/NousResearch/hermes-agent/pull/93631) | **Agent hardening**: trust isolated worktrees, pin worker cwd, harden skill scanning | Open |
| [#93635](https://github.com/NousResearch/hermes-agent/pull/93635) | **Agent fix**: summarize blank iteration-limit turns | Open |
| [#104041](https://github.com/NousResearch/hermes-agent/pull/104041) | **Dashboard**: login/asset URLs honor `X-Forwarded-Prefix` | Open (fresh today) |
| [#104021](https://github.com/NousResearch/hermes-agent/pull/104021) | **Tools fix**: mount/spill paths for terminal & code_exec (Docker backend) | Open (fresh today, P2) |
| [#101420](https://github.com/NousResearch/hermes-agent/pull/101420) | **CI**: cross-OS install/update E2E matrix (Win/macOS/Linux) | Open |
| [#104022](https://github.com/NousResearch/hermes-agent/pull/104022) | **CLI**: macOS LaunchAgent lifecycle for dashboard | Open (fresh today) |

The two bot-mode PRs (#98073, #97846) are the largest user-facing features in flight, both tagged `needs-decision` — likely awaiting architectural sign-off on gateway authority delegation.

---

## 4. Community Hot Topics

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Issue (Bug) | **164** | **Skills index freshness automation broken** — index 29.8h old vs 26h SLA; blocks docs/skills site reliability. Automated cron (`skills-index.yml`) and deploy workflow not keeping pace. |
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Issue (Feature) | **23** | **Bot Group Chats must survive Desktop close** — gateway-owned authority + cross-gateway transport exist on `main`; need wiring to Desktop reconnection/fallback logic. |
| [#103748](https://github.com/NousResearch/hermes-agent/issues/103748) | Issue (Feature) | 2 | **Official API to inject messages into live session** — multi-agent setups need programmatic "manager → worker" messaging without CLI shim. |
| [#103974](https://github.com/NousResearch/hermes-agent/issues/103974) | Issue (Security) | 1 | **Kanban worker identity leaks to grandchildren** — `HERMES_KANBAN_TASK` env + `ContextVar` fence doesn't survive `fork/exec`; proposes `HERMES_KANBAN_OWNER_PID` + scrub-by-default. |
| [#103568](https://github.com/NousResearch/hermes-agent/issues/103568) | Issue (Bug) | 0 | **macOS liveness probe false negative** — launchd-managed gateway reported dead due to `start_time` mismatch short-circuiting cmdline check. |

**Analysis**: The skills-index stale alert (#66616) dominates discussion (164 comments) — likely a mix of bot noise and genuine triage. The bot-group-chat continuity (#97681) and in-session messaging (#103748) reflect **real production patterns**: users run long-lived manager sessions coordinating ephemeral task agents. The security issue (#103974) is architecturally significant — identity leakage across process boundaries could escalate privileges in multi-tenant deployments.

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR? | Notes |
|----------|-------|---------|-------|
| **P2** | [#103568](https://github.com/NousResearch/hermes-agent/issues/103568) macOS liveness probe false negative (launchd gateway) | ❌ No PR yet | Breaks `hermes kanban create` UX — spurious "no gateway" warnings. Root cause: `start_time` mismatch in cmdline identity check. |
| **P2** | [#104021](https://github.com/NousResearch/hermes-agent/pull/104021) Terminal/execute_code spill paths not mounted in Docker backend | ✅ **PR open** (fresh) | Truncation footers point to `read_file`/`search_files` but spill dirs missing from `credential_files._CACHE_DIRS` mount list. |
| **P3** | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index stale (29.8h > 26h SLA) | ❌ No PR yet | Automated freshness probe failing; cron at 6/18 UTC + deploy workflow not sustaining freshness. Impacts `/docs/skills` site. |
| **P3** | [#93635](https://github.com/NousResearch/hermes-agent/pull/93635) Agent: blank iteration-limit turns produce no summary | ✅ **PR open** | Synthesizes truthful final summary when iteration limit exits with no assistant text. Regression tests included. |
| **P3** | [#58141](https://github.com/NousResearch/hermes-agent/pull/58141) `is_container()` false positive on Linux host running containers | ✅ **PR open** (old, updated today) | Fixes browser tool "Chrome not found" on host installs; cgroup-v2 fallback scanned only root mount. |

**Stability signal**: Two P2 bugs with user-visible impact (macOS gateway detection, Docker tool spill) have active fix PRs. The skills-index issue is operational but not user-facing. The container detection fix (#58141) has lingered since July — may need maintainer nudge.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Release | Rationale |
|---------|--------|----------------------------|-----------|
| **Bot Group Chat continuity after Desktop close** | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) + [#97846](https://github.com/NousResearch/hermes-agent/pull/97846) + [#98073](https://github.com/NousResearch/hermes-agent/pull/98073) | **High** | Two PRs + issue; gateway authority + transport already on `main`; "remaining production work" per issue. |
| **Official message injection into live session** | [#103748](https://github.com/NousResearch/hermes-agent/issues/103748) | **Medium** | Clear multi-agent use case; low-comment but architecturally aligned with gateway/session model. |
| **macOS LaunchAgent for dashboard** | [#104022](https://github.com/NousResearch/hermes-agent/pull/104022) | **High** | Fresh PR implementing #44106; per-profile lifecycle (`install|start|stop|...`); macOS parity gap. |
| **Configurable external memory prefetch timeout** | [#98045](https://github.com/NousResearch/hermes-agent/pull/98045) + [#87028](https://github.com/NousResearch/hermes-agent/pull/87028) | **High** | Two PRs (one duplicate); hardcoded 8s timeout causes latency issues; config wiring straightforward. |
| **Discord inbound reaction routing** | [#8379](https://github.com/NousResearch/hermes-agent/pull/8379) | **Medium** | Ports proven Feishu pattern; moderate blast radius; sitting since April. |
| **A2A peer bearer token from `token_env`** | [#104040](https://github.com/NousResearch/hermes-agent/pull/104040) | **Medium** | Security hygiene — avoids inline tokens in config; fresh PR. |

**Roadmap prediction**: Next release will likely bundle **bot-mode continuity** (#97846/#98073), **macOS dashboard service** (#104022), **memory timeout config** (#87028), and the **Docker spill fix** (#104021). The in-session messaging API (#103748) may slip to following release pending API design.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **"Group Chat dies when I close laptop"** | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) — 23 comments | High — core multi-device promise broken; users expect VPS/homelab bots to persist. |
| **"Can't programmatically message my manager session"** | [#103748](https://github.com/NousResearch/hermes-agent/issues/103748) | Medium — forces workarounds (file watches, clipboard, custom IPC). |
| **"macOS says gateway dead when it's alive"** | [#103568](https://github.com/NousResearch/hermes-agent/issues/103568) | High — spurious warnings erode trust; kanban tasks stuck in 'ready'. |
| **"Docker tool output truncated but unreadable"** | [#104021](https://github.com/NousResearch/hermes-agent/pull/104021) | Medium — spill footers lie; `read_file` fails inside container. |
| **"Skills docs stale for days"** | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — 164 comments | Low (ops) — but signals CI/CD fragility; 164 comments suggest bot spam or deep triage. |
| **"Kanban worker identity leaks to child processes"** | [#103974](https://github.com/NousResearch/hermes-agent/issues/103974) | **Security** — grandchild shells inherit full worker authority; env scrub needed. |

**Sentiment**: Users are **building real multi-agent topologies** (manager + workers, cross-device bots) and hitting **session/gateway lifecycle gaps**. The tone is constructive — feature requests come with architecture context. Security issue (#103974) shows sophisticated threat modeling.

---

## 8. Backlog Watch

| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| [#58141](https://github.com/NousResearch/hermes-agent/pull/58141) `is_container()` cgroup-v2 fix | **~2 months** (created 2026-07-04) | Fixes browser tool on Linux hosts; low-risk, tested; blocks host installs. | **Review & merge** — small, focused, high leverage. |
| [#8379](https://github.com/NousResearch/hermes-agent/pull/8379) Discord reaction routing | **~5 months** (created 2026-04-12) | Feature parity with Feishu; moderate blast radius (`sweeper:blast-moderate`). | **Triage** — decide if Discord reactions in scope for next release. |
| [#80608](https://github.com/NousResearch/hermes-agent/pull/80608) WhatsApp Cloud webhook reuse on reconnect | **~1 month** (created 2026-08-06) | Production WhatsApp reliability; avoids cold-start storms. | **Review** — P2, message-delivery risk tagged. |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index freshness | **~1.5 months** (created 2026-07-18) | CI/CD health signal; 164 comments indicate unresolved root cause. | **Root-cause** — cron schedule vs workflow dependency; may need SLA adjustment or dedicated maintainer. |
| [#93631](https://github.com/NousResearch/hermes-agent/pull/93631) Agent worktree/skill scanning hardening | **~2 weeks** (created 2026-08-24) | Foundational agent stability; touches isolation, cwd, imports. | **Prioritize review** — P3 but broad compatibility risk (`sweeper:risk-compatibility`). |

**Maintainer attention recommended**: The container detection fix (#58141) and agent hardening (#93631) are high-leverage, low-controversy PRs stuck in queue. The skills-index issue (#66616) needs a dedicated look — 164 comments on an automated alert suggests either a noisy bot or a deeper workflow misconfiguration.

---

*Digest generated from GitHub data as of 2026-09-06. All links point to NousResearch/hermes-agent repository.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-06

---

## 1. Today's Overview
PicoClaw saw moderate maintenance activity over the last 24 hours with **three merge pull requests closed** (all originally opened in March 2026 and finalized today) and **two issues updated** — one open feature request for IRC long-message handling and one stale feature request closed. No new releases were published. The project appears to be in a **consolidation phase**, cleaning up long-pending PR batches while feature discussions continue on the issue tracker. Community engagement is low (max 10 comments on the top issue, zero reactions), suggesting a quiet but steady maintenance cadence.

---

## 2. Releases
**No new releases** in the last 24 hours.

---

## 3. Project Progress
The following merged/closed PRs represent batch integrations of earlier work:

| PR | Author | Summary | Merged/Closed |
|----|--------|---------|---------------|
| [#1559](https://github.com/sipeed/picoclaw/pull/1559) | xuwei-xy | Merges fixes from PRs #1327, #1319, #1318, #1313 | 2026-09-05 |
| [#1545](https://github.com/sipeed/picoclaw/pull/1545) | xuwei-xy | Merges fixes from PRs #1500, #1490, #1488, #1487, #1485 | 2026-09-05 |
| [#1555](https://github.com/sipeed/picoclaw/pull/1555) | xuwei-xy | Merges fixes from PRs #1390, #1389, #1383, #1381 | 2026-09-05 |

**Analysis**: All three PRs are **meta-merge PRs** authored by `xuwei-xy`, consolidating 13 individual fixes from March 2026. This indicates a **backlog-clearing effort** — likely finalizing accumulated bug fixes, refactors, or minor improvements that had been pending review. No new feature development is visible in today’s merged work.

---

## 4. Community Hot Topics
### Most Active Issue: [#3287](https://github.com/sipeed/picoclaw/issues/3287) — *Better support long messages in IRC*
- **Status**: Open | **Comments**: 10 | **Created**: 2026-07-22 | **Updated**: 2026-09-05
- **Core Need**: PicoClaw currently treats IRC messages split across 512-byte boundaries as separate messages. Users want **automatic reassembly of fragmented IRCv3 messages** into single logical units for coherent processing.
- **Underlying Signal**: IRC remains a relevant transport for bot/agent deployments. The 10-comment thread suggests active technical discussion — likely around parsing logic, buffer management, and IRCv3 `message-tags` compliance.

### Stale/Closed Issue: [#3342](https://github.com/sipeed/picoclaw/issues/3342) — *Opt-in "after-turn" steering mode*
- **Status**: Closed (stale) | **Comments**: 2 | **Created**: 2026-08-21
- **Core Need**: Queue incoming user messages during agent execution instead of interrupting the current turn (which skips remaining tool calls).
- **Why Closed**: Marked `stale` — likely due to inactivity or maintainer triage decision. Only 2 comments indicate limited community push.

**Takeaway**: IRC message handling is the **only actively discussed feature**. The steering-mode request, while architecturally interesting, lacks momentum.

---

## 5. Bugs & Stability
**No new bug reports, crashes, or regressions** filed or updated in the last 24 hours.  
The three closed PRs (#1559, #1545, #1555) are fix-merges — but without access to the original PRs (#1313–#1500), specific bug classes (e.g., memory leaks, parsing errors, concurrency issues) cannot be categorized.  
**Recommendation**: Review the merged PR diffs to assess stability impact; no urgent user-reported instability visible today.

---

## 6. Feature Requests & Roadmap Signals
| Request | Issue | Likelihood for Next Version |
|--------|-------|-----------------------------|
| **IRC long-message reassembly** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | **High** — Active discussion, clear spec (IRCv3), 10 comments, open for 46 days |
| **After-turn message queuing (opt-in)** | [#3342](https://github.com/sipeed/picoclaw/issues/3342) | **Low** — Closed as stale, only 2 comments, no maintainer endorsement visible |

**Prediction**: IRC message coalescing is the **strongest candidate** for the next minor release. The steering-mode idea may resurface if user demand grows, but currently lacks traction.

---

## 7. User Feedback Summary
- **Pain Point**: IRC integration is **fragile for real-world usage** — messages >512 bytes (common with code blocks, logs, LLM outputs) are split and misinterpreted as separate turns.
- **Use Case**: Deploying PicoClaw agents on IRC networks (e.g., Libera.Chat, OFTC) where bots receive multi-line technical output.
- **Sentiment**: Neutral-to-constructive. No frustration signals (👍=0, no heated comments), but persistent engagement on #3287 implies **genuine operational need**.
- **Satisfaction**: No feedback on core agent stability, tooling, or UX today — focus is narrowly on transport-layer correctness.

---

## 8. Backlog Watch
| Item | Type | Age | Risk | Action Needed |
|------|------|-----|------|---------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Feature (IRC) | 46 days | Medium — blocks reliable IRC deployments | **Maintainer review & design decision** — assign, prototype, or close with rationale |
| Original PRs merged in #1559/#1545/#1555 (13 PRs) | Fixes/Refactors | ~6 months | Low (now merged) | **Verify CI passes & changelog updated** — ensure no regression from batch merge |

**Note**: The 13 merged PRs were **open since March** — their long latency suggests either review bandwidth constraints or low priority. Now that they’re merged, **post-merge validation** (tests, docs, release notes) is the critical next step.

---

**Digest generated**: 2026-09-06 00:00 UTC  
**Data window**: 2026-09-05 00:00 – 2026-09-06 00:00 UTC  
**Source**: GitHub API (sipeed/picoclaw)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-06

## 1. Today's Overview
NanoClaw shows **low community churn but active maintenance** on 2026-09-06. Zero issues were opened or updated in the last 24 hours, and no releases shipped. Three pull requests remain open—each addressing a concrete maintenance or correctness concern: pinning a problematic `signal-cli` version, cleaning up test artefacts, and updating a retired Anthropic model identifier. No PRs were merged today, so the codebase is in a holding pattern awaiting review. Overall project health appears stable with a focus on reliability and hygiene rather than new features.

## 2. Releases
**No new releases** published today.

## 3. Project Progress
**No PRs merged or closed** in the last 24 hours. The three open PRs represent incremental improvements:
- **#3725** — Pins `signal-cli` to 0.14.7 on Linux to avoid a hang when sending to contacts without an existing session ([nanocoai/nanoclaw#3725](https://github.com/nanocoai/nanoclaw/pull/3725)).
- **#3710** — Removes ~355 temporary directories left behind by `pnpm test`, preventing accumulation on long-lived CI runners and tmpfs `/tmp` ([nanocoai/nanoclaw#3710](https://github.com/nanocoai/nanoclaw/pull/3710)).
- **#3724** — Updates the `add-opencode` skill’s Anthropic example from the retired `claude-sonnet-4-20250514` to `claude-sonnet-5` ([nanocoai/nanoclaw#3724](https://github.com/nanocoai/nanoclaw/pull/3724)).

## 4. Community Hot Topics
**No issues or PRs with comments or reactions** in the last 24 hours. All three PRs have 👍: 0 and `Comments: undefined`, indicating they have not yet attracted community discussion. The underlying needs are purely technical: stability (signal-cli hang), CI hygiene (temp-dir leak), and documentation accuracy (retired model ID).

## 5. Bugs & Stability
| Severity | Item | Description | Fix PR |
|----------|------|-------------|--------|
| **High** | `signal-cli` 0.14.3 hang | Linux installs ship a version that can block indefinitely when messaging a new contact. | [#3725](https://github.com/nanocoai/nanoclaw/pull/3725) (open) |
| **Medium** | Test-suite temp-dir leak | ~355 directories leaked per `pnpm test` run, exhausting tmpfs on persistent runners. | [#3710](https://github.com/nanocoai/nanoclaw/pull/3710) (open) |
| **Low** | Retired model ID in example | `add-opencode` skill references an Anthropic model retired 2026-06-15. | [#3724](https://github.com/nanocoai/nanoclaw/pull/3724) (open) |

No new crash reports or regressions filed today.

## 6. Feature Requests & Roadmap Signals
**No feature requests** opened or updated today. The current PRs signal a roadmap emphasis on:
- **Dependency hygiene** (pinning known-good versions)
- **Developer experience** (clean CI environments)
- **Documentation freshness** (tracking upstream model retirements)

Expect the next patch release to bundle these three fixes once reviewed.

## 7. User Feedback Summary
No direct user feedback (issues, discussions, or reactions) captured in the last 24 hours. The three PRs originate from contributors (`astraltrekkin`, `mmv`, `kasparovabi`) addressing internal pain points rather than external reports.

## 8. Backlog Watch
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| **#3710** (temp-dir cleanup) | 3 days (created 2026-09-03) | Open, no review | Affects every CI run; will compound on persistent runners. |
| **#3725** (signal-cli pin) | 1 day | Open, no review | Blocks reliable Signal messaging on Linux; user-facing regression risk. |
| **#3724** (model ID update) | 1 day | Open, no review | Documentation drift; low risk but easy win for accuracy. |

**Maintainer attention needed:** All three PRs are awaiting first review. Prioritizing #3725 and #3710 would immediately improve stability and CI reliability.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-06

## 1. Today's Overview
IronClaw showed light but focused activity over the last 24 hours: one new bug report (#8074) and one open feature PR (#8075). No releases were cut, and no PRs were merged or closed. The project appears to be in a steady development phase with core contributors advancing sandbox infrastructure while addressing a user-facing messaging bug in shared-channel flows.

## 2. Releases
No new releases published today.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours. The single open PR (#8075) is stacked on #7908 and targets the `feat/7903-native-loop-sandbox-spike` branch, aiming to promote the embedded Pi sandbox loop to the default startup profile for fresh installs — a change explicitly requested for benchmarking.

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| #8074 | Bug | 1 comment, 0 👍 | [nearai/ironclaw#8074](https://github.com/nearai/ironclaw/issues/8074) |
| #8075 | Feature PR | 0 comments, 0 👍 | [nearai/ironclaw#8075](https://github.com/nearai/ironclaw/pull/8075) |

**Analysis**: The bug report highlights a copy mismatch in shared-channel onboarding — paired users see "connect your account" messaging meant for unpaired actors, indicating a gap in conditional UI logic. The PR reflects internal investment in sandbox performance defaults, suggesting the team is optimizing for benchmark/CI scenarios.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| Medium | [#8074](https://github.com/nearai/ironclaw/issues/8074) | Paired user in a non-connected shared channel receives `connect_required` notice (unpaired copy) instead of a channel-not-connected message. Affects onboarding clarity for existing users. | No fix PR yet |

No crashes or regressions reported today.

## 6. Feature Requests & Roadmap Signals
- **Embedded Pi sandbox as default startup** ([#8075](https://github.com/nearai/ironclaw/pull/8075)): Core contributor `serrrfirat` is pinning a Bun/Pi agent-core worker to the sandbox image and making it the default boot profile (`hosted-loop`). This signals a move toward stable, reproducible sandbox environments for benchmarking and likely production workloads.
- **Shared-channel UX polish** (implied by #8074): The bug reveals an unfinished edge case in multi-tenant channel flows; a follow-up PR to differentiate messaging for paired vs. unpaired actors is probable in the next sprint.

## 7. User Feedback Summary
- **Pain point**: Paired users encountering confusing "connect your account" prompts when the real issue is channel-level disconnection. This degrades trust in the onboarding flow for shared channels.
- **Use case**: Teams using IronClaw in shared Slack/Discord channels where installations exist but channel linking is incomplete.
- **Sentiment**: Neutral — only one reporter, no votes or discussion yet. No explicit dissatisfaction surfaced beyond the copy bug.

## 8. Backlog Watch
No long-unanswered issues or PRs surfaced in today’s data. The sole open PR (#8075) is blocked on its base (#7908) and marked "do not merge before the base PR," so maintainer attention there is expected once the dependency lands. The bug (#8074) is fresh (created 2026-09-04) and unassigned — a candidate for triage in the next grooming session.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-06

## 1. Today's Overview
LobsterAI shows **minimal active development** in the past 24 hours: zero issues updated, zero PRs merged, and no new releases. The only visible activity is two **stale pull requests** (#1069, #1070) last updated on 2026-09-05, both opened over five months ago (2026-03-30) and carrying the `[stale]` label. This suggests the project is currently in a **maintenance/low-velocity phase**, with no immediate feature delivery or bug-fix momentum. Community engagement appears dormant—no comments or reactions on recent PRs.

## 2. Releases
**No new releases** published today or in the recent window. The latest release information is not present in the provided data.

## 3. Project Progress
**No PRs merged or closed today.** The two open PRs remain in review limbo:
- **#1069** – Refactor: split `CoworkSessionDetail.tsx` (2100+ lines) into multiple files for maintainability and rendering performance.  
- **#1070** – Feat(cowork): add per-session MCP server toggle in the toolbar with DB persistence and OpenClaw engine interception.  

Neither has advanced to merge; both are stale and lack recent reviewer interaction.

## 4. Community Hot Topics
| PR | Title | Updated | Comments | 👍 | Link |
|----|-------|---------|----------|----|------|
| #1069 | Refactor: split `CoworkSessionDetail` for maintainability & render performance | 2026-09-05 | 0 | 0 | [netease-youdao/LobsterAI#1069](https://github.com/netease-youdao/LobsterAI/pull/1069) |
| #1070 | Feat(cowork): per-session MCP switch control | 2026-09-05 | 0 | 0 | [netease-youdao/LobsterAI#1070](https://github.com/netease-youdao/LobsterAI/pull/1070) |

**Analysis**: Both PRs address **architectural debt** (large component) and **user-facing flexibility** (per-session MCP control)—core needs for a collaborative AI agent UI. The absence of comments/reactions indicates either low reviewer bandwidth or community disengagement. These are the only signals of intended direction.

## 5. Bugs & Stability
**No new bugs, crashes, or regressions reported today.** Zero issues updated in the last 24h. Stability status cannot be assessed from current data; the stale PRs imply known technical debt (oversized component, missing per-session config) but no active incident.

## 6. Feature Requests & Roadmap Signals
The two stale PRs are the **sole roadmap signals**:
1. **Component modularization** (#1069) – prerequisite for scalable UI development and testability.
2. **Per-session MCP server toggles** (#1070) – enables context-aware tool use per conversation, a likely differentiator for multi-agent workflows.

Given their age and stale status, **neither is guaranteed for the next release**. If maintainers re-engage, these are the highest-probability candidates for the next version.

## 7. User Feedback Summary
**No direct user feedback (issues, comments, reactions) captured in the last 24h.** The PR authors (internal contributors `stone333`, `vdorchan`) are driving changes based on **internal technical pain points**:
- Developers struggle with a 2100-line monolithic component.
- Users cannot tailor MCP servers per session, limiting workflow flexibility.

No external satisfaction/dissatisfaction data available.

## 8. Backlog Watch
| Item | Type | Age | Status | Why It Needs Attention | Link |
|------|------|-----|--------|------------------------|------|
| #1069 | PR | 160 days | Open, stale | Core UI component unmaintainable; blocks performance & testing improvements | [#1069](https://github.com/netease-youdao/LobsterAI/pull/1069) |
| #1070 | PR | 160 days | Open, stale | High-value UX feature (per-session MCP) incomplete; engine integration half-done | [#1070](https://github.com/netease-youdao/LobsterAI/pull/1070) |

**Recommendation**: Maintainers should triage these PRs—either assign reviewers, request updates, or close with rationale. Leaving them stale for 5+ months erodes contributor trust and obscures project direction.

---

**Overall Health Indicator**: 🟡 **Low Activity / Technical Debt Accumulating**  
No merges, no issues, stale PRs → project appears **paused or under-resourced**. Immediate action needed on the two architectural PRs to unblock future velocity.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-09-06

---

## 1. Today's Overview
CoPaw (QwenPaw) shows **high community engagement** with 11 issues and 7 PRs updated in the last 24 hours, though **no PRs were merged** today. The project is in a **pre-release stabilization phase** for v2.2.0 (which will introduce QwenPaw Hub, the multi-tenant edition). Activity centers on: (1) fixing critical regressions from recent merges (custom provider loading, 409 errors during task execution), (2) hardening the tool-calling pipeline (exception swallowing in `_coordinator.py`), (3) advancing the skill ecosystem (Make Skill v2, skill versioning), and (4) new UX modes (Advisor Mode, Feishu card improvements). Several first-time contributor PRs address high-impact bugs, indicating healthy onboarding.

---

## 2. Releases
**No new releases published today.**  
The upcoming **v2.2.0** is expected to ship **QwenPaw Hub (multi-tenant edition)** per the active discussion in [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) (23 comments, 3 👍). Community input is being solicited on Hub priorities (RBAC, shared skill registry, audit logs, cost controls, etc.).

---

## 3. Project Progress (Merged/Closed Today)
| Item | Type | Summary | Impact |
|------|------|---------|--------|
| [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) | Bug (Closed) | Custom provider loading broken after PR #7337 (`max_tokens` → `max_output_length` migration). Config files using old field fail to parse. | **High** — blocks users on custom models; fix likely in follow-up PR. |
| [#7574](https://github.com/agentscope-ai/QwenPaw/issues/7574) | Bug (Closed) | `img-gen` skill `openai_images.py` omits `model` field → HTTP 503 fallback to `dall-e-2`. | **Medium** — affects image generation skill reliability. |
| [#7575](https://github.com/agentscope-ai/QwenPaw/issues/7575) | Bug (Closed) | `img-gen` skill `edit()` unconditionally sends `response_format` → HTTP 400 on `gpt-image-2` edit endpoint. | **Medium** — breaks editing with newer OpenAI image models. |

> **Note:** No PRs show as *merged* in the 24h window; the three closed issues likely had fixes merged earlier or were resolved via workarounds.

---

## 4. Community Hot Topics (Most Active)
| Item | Type | Engagement | Core Need |
|------|------|------------|-----------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | Discussion | **23 comments, 3 👍** | **Multi-tenant Hub design input** — teams want RBAC, shared skill registry, audit logs, cost attribution, SSO. Signals strong demand for team/enterprise deployment. |
| [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) | Bug | 5 comments | **409 error when sending follow-up during task execution** — users expect queuing, not rejection. Directly impacts conversational UX. |
| [#7572](https://github.com/agentscope-ai/QwenPaw/issues/7572) | Bug | 2 comments | **Tool coordinator swallows exceptions** — no stack traces in logs, impossible to debug tool failures. Critical for maintainability. |
| [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) | Bug | 2 comments | **Agent "forgets" instructions** (TODO file placement, working directory drift) — suggests context/state management gaps in long-running sessions. |
| [#7557](https://github.com/agentscope-ai/QwenPaw/issues/7557) | Feature | 2 comments | **Skill versioning & dependency metadata** — needed for fleet management (9+ agents), reproducible deployments, update safety. |

---

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) | `RetryChatModel` hardcodes `context_size=32768` fallback → `CONTEXT_UNFIT` (>31k tokens) for **all models** (v2.1.0–v2.2.0). Breaks long-context workflows. | ❌ No PR yet |
| **Critical** | [#7572](https://github.com/agentscope-ai/QwenPaw/issues/7572) | `_coordinator.py::_drain()` catches `Exception`, returns only `str(exc)` to model, **no `logger.exception()`** — zero observability for tool failures. | ✅ **PR #7578** (open) adds `logger.exception()` |
| **High** | [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) | Sending message during active task → **HTTP 409** ("A task is already running") instead of queueing. Blocks natural multi-turn flows. | ✅ **PR #7577** (open) enqueues follow-ups |
| **High** | [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) | Custom provider config fails to load after `max_tokens` → `max_output_length` migration (PR #7337). | ❌ No PR linked (issue closed, may need migration script) |
| **Medium** | [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) | Agent forgets workspace constraints (TODO paths, working dir) over multi-day sessions — possible context window / state persistence issue. | ❌ No PR |
| **Medium** | [#7574](https://github.com/agentscope-ai/QwenPaw/issues/7574) / [#7575](https://github.com/agentscope-ai/QwenPaw/issues/7575) | `img-gen` skill: missing `model` field (503 fallback) + spurious `response_format` on edit (400). Both closed. | Likely fixed in skill repo |

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for v2.2.0 / Next |
|--------|--------|------------------------------|
| **QwenPaw Hub (multi-tenant)** | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) (23 comments) | **Very High** — explicitly targeted for 2.2.0; community shaping scope now. |
| **Advisor Mode** (dual-model: strong planner + cheap worker) | [PR #7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) | **High** — PR open, adds new loop mode; aligns with cost/quality tradeoff demand. |
| **Skill versioning & dependencies** | [#7557](https://github.com/agentscope-ai/QwenPaw/issues/7557) | **High** — fleet operators (9+ agents) blocked; PR #7509 (Make Skill v2) lays groundwork. |
| **Make Skill v2** (approval-driven draft→publish) | [PR #7509](https://github.com/agentscope-ai/QwenPaw/pull/7509) (Ready for Merge) | **High** — "Ready for Merge"; enables structured skill lifecycle. |
| **Feishu streaming card: auto-collapse thinking** | [#7570](https://github.com/agentscope-ai/QwenPaw/issues/7570) | **Medium** — local fix validated; improves UX for reasoning models (GLM-5.x). |
| **Edit last message / Rewind in Web UI** | [#7573](https://github.com/agentscope-ai/QwenPaw/issues/7573) | **Medium** — common UX ask; backend + frontend work needed. |
| **Configurable MCP tool-call timeout** | [PR #6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) (Under Review, 27 days) | **Medium** — long-review PR; needed for slow external tools. |

---

## 7. User Feedback Summary
| Pain Point | Evidence | User Context |
|------------|----------|--------------|
| **"Agent forgets instructions over time"** | [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) | Plugin developer; multi-path workspace (A/B/C); agent drifts to wrong dir, ignores TODO constraints despite repeated correction. |
| **"Can't debug tool failures — no logs"** | [#7572](https://github.com/agentscope-ai/QwenPaw/issues/7572) | Maintainer/operator; exceptions in tool chain vanish, only bare string returned to model. |
| **"Follow-up messages rejected during task"** | [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) | Windows 11 user; expects queueing, gets 409; breaks natural chat flow. |
| **"Custom provider broken after update"** | [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) | User on post-#7337 commit; config migration not handled. |
| **"Hardcoded context size breaks all models"** | [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) | Affects all published releases v2.1.0–v2.2.0; `CONTEXT_UNFIT` at ~31k tokens. |
| **"Skill management doesn't scale"** | [#7557](https://github.com/agentscope-ai/QwenPaw/issues/7557) | Fleet of 9 agents; no versioning, no dependency graph, manual copy-per-workspace. |
| **Positive: Feishu CardKit streaming works well** | [#7570](https://github.com/agentscope-ai/QwenPaw/issues/7570) | "Using nicely since 2.1.0"; only asks for auto-collapse of long thinking blocks. |

---

## 8. Backlog Watch (Stale / Needs Maintainer Attention)
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [PR #6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | **27 days** (since 2026-08-10) | Under Review | Configurable MCP tool-call timeout; default 300s, legacy compat. Blocks users with slow external tools. |
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | **11 days** (since 2026-08-26) | Open (Discussion) | **Hub scope definition** — 23 comments but no maintainer synthesis; 2.2.0 target needs decision soon. |
| [PR #7509](https://github.com/agentscope-ai/QwenPaw/pull/7509) | **4 days** | Ready for Merge | Make Skill v2 — foundational for skill versioning (#7557); merge unblocked? |
| [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) | **1 day** | Open (Bug) | **Regression in all v2.1.0+ releases** — hardcoded context size; no PR yet; high blast radius. |
| [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) | **5 days** | Closed | Custom provider migration gap; if not fixed via script, users stuck on old configs. |

---

### 📊 Health Indicators
| Metric | Signal |
|--------|--------|
| **Issue velocity** | High (11/24h) — active community & surfacing regressions |
| **PR merge rate** | **0/24h** — concerning; several "Ready for Merge" / first-time PRs stalled |
| **First-time contributors** | **4 PRs today** (#7547, #7546, #7577, #7578) — excellent onboarding |
| **Critical bugs unfixed** | 2 (context size, exception swallowing) — both have PRs or clear fixes |
| **Release readiness (v2.2.0)** | Hub scope undecided; critical bugs in current branch; **delay likely** |

---

*Digest generated from GitHub data as of 2026-09-06. Links point to agentscope-ai/QwenPaw repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-09-06

## 1. Today's Overview
ZeptoClaw showed high-intensity security-focused activity on 2026-09-06, with **4 critical issues closed** and **2 security patches merged** addressing P0 vulnerabilities in subprocess environment scrubbing and agent-mode fail-closed behavior. The project is in a hardening phase following a deep architecture review (2026-09-06), with 10 new architectural issues opened spanning configuration UX, audit-chain persistence, hermetic integration testing, extension-host redesign, memory durability, cron v2, delegation policy, agent-pipeline migration, channel-plugin protocol, and prompt-envelope stability. No releases were cut; the codebase remains on a pre-release development cadence.

## 2. Releases
**No new releases published today.** The project continues on a continuous-development model without versioned cuts in this window.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#672](https://github.com/qhkm/zeptoclaw/pull/672) | `fix(security): scrub inherited env in plugin/MCP spawn sites (P0 #660)` | Security fix | **Closed P0 vulnerability**: eliminates full-environment inheritance at three spawn sites (`binary_plugin.rs`, `mcp/transport.rs`, `channels/plugin.rs`), complementing runtime-level fix in #645. |
| [#671](https://github.com/qhkm/zeptoclaw/pull/671) | `fix(security): fail closed on invalid agent_mode (P0 #659)` | Security fix | **Closed P0 vulnerability**: unknown `agent_mode` values now resolve to `Assistant` (least privilege) instead of `Autonomous` (max permissions), with warning logged. |
| [#645](https://github.com/qhkm/zeptoclaw/pull/645) | `fix(runtime): scrub subprocess secrets and reap timed-out process trees` | Security + stability fix | Runtime-level env scrubbing + process-tree termination on timeout; uncovered Clippy/cargo-deny regressions fixed in #646. |
| [#646](https://github.com/qhkm/zeptoclaw/pull/646) | `chore(ci): restore Clippy and cargo-deny checks on current toolchain` | CI hygiene | Restored baseline CI checks after #645 exposed 5 new Clippy warnings and 2 vulnerable dependencies (quick-xml 0.39.2, lopdf 0.40.0). |

**Net effect**: All P0 security findings from the 2026-09-06 architecture review are now mitigated in-code; CI baseline is green again.

## 4. Community Hot Topics
| Issue/PR | Activity | Underlying Need |
|----------|----------|-----------------|
| [#646](https://github.com/qhkm/zeptoclaw/issues/646) (3 comments) | CI baseline restoration debate | Maintainers need **reliable, noise-free CI** that doesn't drift with toolchain updates; Clippy/cargo-deny must stay passing without manual intervention. |
| [#644](https://github.com/qhkm/zeptoclaw/issues/644) (1 comment) | Subprocess env scrubbing + timeout reap | **Defense-in-depth**: ensure *all* spawn sites (runtime, plugins, MCP, channels) scrub secrets and reap children — no single point of leakage. |
| [#670](https://github.com/qhkm/zeptoclaw/issues/670) (new, 0 comments) | Config source opacity | Operators need **“effective config” visibility** (file vs env vs default) and schema-backed get/set to debug misconfigurations in multi-source setups. |
| [#668](https://github.com/qhkm/zeptoclaw/issues/668) (new, 0 comments) | Hermetic seam-level integration tests | QA needs **real-path, no-live-credentials tests** for system seams (plugin channels, MCP transport, native runtime) to catch integration regressions early. |

*Reactions (👍) are uniformly 0 across all items — community engagement is currently maintainer-driven.*

## 5. Bugs & Stability — Today’s Reports
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **P0 Critical** | [#660](https://github.com/qhkm/zeptoclaw/issues/660): Unscrubbed env at 3 plugin/MCP spawn sites | **Closed** | [#672](https://github.com/qhkm/zeptoclaw/pull/672) ✅ merged |
| **P0 Critical** | [#659](https://github.com/qhkm/zeptoclaw/issues/659): Invalid `agent_mode` falls back to `Autonomous` | **Closed** | [#671](https://github.com/qhkm/zeptoclaw/pull/671) ✅ merged |
| **P1 Critical** | [#644](https://github.com/qhkm/zeptoclaw/issues/644): Runtime subprocess env inheritance + timeout reap gaps | **Closed** | [#645](https://github.com/qhkm/zeptoclaw/pull/645) ✅ merged |
| **P1 Critical** | [#646](https://github.com/qhkm/zeptoclaw/issues/646): Clippy/cargo-deny regressions on Rust 1.97.1 | **Closed** | [#646](https://github.com/qhkm/zeptoclaw/pull/646) ✅ merged (CI chore) |

**No new bugs reported today** — all tracked critical issues have fix PRs merged.

## 6. Feature Requests & Roadmap Signals
The 10 new issues opened today (all tagged `[M]`, `[L]`, or `[S]` from the architecture review) form a **cohesive next-version roadmap**:

| Priority | Issue | Predicted Next-Version Inclusion |
|----------|-------|----------------------------------|
| **High (M)** | [#669](https://github.com/qhkm/zeptoclaw/issues/669): Persist & rotate audit-chain segments | ✅ Likely — tamper-evidence across restarts is a security baseline |
| **High (M)** | [#668](https://github.com/qhkm/zeptoclaw/issues/668): Hermetic seam-level integration tests | ✅ Likely — unblocks confident refactors |
| **High (M)** | [#667](https://github.com/qhkm/zeptoclaw/issues/667): Footprint Ladder + Extension Host v2 | ⚠️ Possible — large scope, may be phased |
| **High (M)** | [#666](https://github.com/qhkm/zeptoclaw/issues/666): Durable cross-session recall & transactional memory writes | ⚠️ Possible — memory system is core differentiator |
| **High (M)** | [#665](https://github.com/qhkm/zeptoclaw/issues/665): Cron Job v2 (completion ack, run ledger) | ✅ Likely — operational gap in current cron |
| **High (M)** | [#664](https://github.com/qhkm/zeptoclaw/issues/664): Delegated-agent capability inheritance | ✅ Likely — policy inheritance is a security must |
| **High (L)** | [#663](https://github.com/qhkm/zeptoclaw/issues/663): Finish Agent Pipeline migration | ⚠️ Possible — 5k-line `AgentLoop` still in prod |
| **High (L)** | [#662](https://github.com/qhkm/zeptoclaw/issues/662): Complete channel-plugin protocol | ⚠️ Possible — plugin channels are documented but half-implemented |
| **High (L)** | [#661](https://github.com/qhkm/zeptoclaw/issues/661): Byte-stable Prompt Envelope contract | ⚠️ Possible — largest perf gap (prompt-cache hostility) |
| **Normal (S)** | [#670](https://github.com/qhkm/zeptoclaw/issues/670): Config source opacity + schema-backed get/set | ⚠️ Possible — UX polish, lower risk |

**Signal**: The project is pivoting from *feature addition* to *architectural completion* — closing gaps identified in the deep review.

## 7. User Feedback Summary
- **No external user issues/comments** in the last 24h — all activity is maintainer-driven (author `qhkm` on every item).
- **Pain points inferred from issue themes**:
  - Operators cannot audit *why* a config value is effective (#670)
  - Plugin/MCP developers risk credential leakage (#660, #644)
  - Long-running deployments lose audit-chain evidence on restart (#669)
  - Integration testing requires live credentials (#668)
  - Extension authors face growing compile-time surface (#667)
- **Satisfaction signal**: Zero community friction visible; project appears to be in a **pre-adoption hardening sprint**.

## 8. Backlog Watch — Stale but Important
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#627](https://github.com/qhkm/zeptoclaw/pull/627) `serde_json 1.0.150` | 95 days | Dependabot PR — non-string enum key rejection may break config parsing; needs compat test. |
| [#625](https://github.com/qhkm/zeptoclaw/pull/625) `rpassword 7.5.2` | 95 days | Unicode password fix; low risk but unmerged. |
| [#623](https://github.com/qhkm/zeptoclaw/pull/623) `tokio 1.52.3` | 95 days | Runtime dependency; 1.52.3 fixes include `Select` fairness — relevant to agent loop. |
| [#620](https://github.com/qhkm/zeptoclaw/pull/620) `scraper 0.27.0` | 95 days | Breaking API changes possible; used in web tooling. |
| [#617](https://github.com/qhkm/zeptoclaw/pull/617) `tower-http 0.6.11` | 95 days | HTTP middleware stack; may affect MCP/channel transports. |

**Recommendation**: Batch-merge dependency updates after current security sprint; they are low-risk but block future `cargo update` flexibility.

---

**Health Indicator**: 🟢 **Strong** — critical security debt cleared in a single day; architectural backlog now explicit and prioritized. Next milestone: merge the `[M]`/`[L]` roadmap issues and cut a hardened release.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-06

## 1. Today's Overview

ZeroClaw maintains high development velocity with **50 PRs updated** and **7 issues active** in the last 24 hours. The project just released **v0.8.5** (454 commits from 73 contributors), a major security and operator-experience release introducing ZeroRelay, ZeroRouter, expanded live chat, and hardened sandbox/credential boundaries. Current focus areas include: shell permission policy implementation (RFC #7155), Anthropic/Bedrock adaptive-thinking support, plugin HTTPS trust-store parity, ZeroCode TUI performance fixes, and Telegram/Matrix channel improvements. The 5 merged PRs today address Windows CI measurement, Gemini context preservation, Telegram approval-card cleanup, and two bug fixes.

---

## 2. Releases

### **v0.8.5** — Security, Connectivity & Operator Experience
- **Scope**: 454 commits, 73 contributors
- **Key Features**:
  - **ZeroRelay & ZeroRouter** — new connectivity primitives
  - **Live chat & provider expansions** — broader model/provider support
  - **Hardened boundaries** — plugin sandbox, webhooks, credentials, file access
- **Breaking Changes**: None explicitly noted; review plugin egress and credential handling if upgrading from ≤v0.8.4
- **Migration Notes**: Provider HTTPS trust-store changes (#6528) now extended to plugin egress via follow-up PR #10491; verify custom CA configurations
- **Links**: [Release v0.8.5](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.5)

---

## 3. Project Progress — Merged/Closed PRs Today (5)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#10350](https://github.com/zeroclaw-labs/zeroclaw/pull/10350) | CI | Measure affected Windows tests on PRs (advisory, non-blocking) | Improves Windows coverage visibility |
| [#10435](https://github.com/zeroclaw-labs/zeroclaw/pull/10435) | Bug | Preserve model context when anchoring Gemini requests | Fixes context loss in Gemini provider |
| [#10064](https://github.com/zeroclaw-labs/zeroclaw/pull/10064) | Bug | Telegram: self-destruct approval cards after operator tap | UX improvement for tool approvals |
| [#10240](https://github.com/zeroclaw-labs/zeroclaw/pull/10240) | Docs | Narrow screenshot evidence rule for semantic-only changes | Reduces contributor friction |
| [#10595](https://github.com/zeroclaw-labs/zeroclaw/pull/10595) | Bug | ZeroCode: cache wrapped rows for long thinking output | Performance fix for TUI rendering |

---

## 4. Community Hot Topics — Most Active Items

### **Top Issues by Engagement**
| Issue | Comments | Labels | Core Need |
|-------|----------|--------|-----------|
| [#9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) | 5 | `ci`, `priority:p2`, `risk:high`, `in-progress` | **Automated PR risk/size labeling** — eliminate manual label maintenance; recalculate on every diff update while preserving maintainer overrides |
| [#9575](https://github.com/zeroclaw-labs/zeroclaw/issues/9575) | 3 | `provider:compatible`, `priority:p2` | **OpenAI-compatible warmup via `/models`** — replace fragile `/chat/completions` GET with standard `/models` endpoint |
| [#10426](https://github.com/zeroclaw-labs/zeroclaw/issues/10426) | 2 | `channel:telegram`, `priority:p2`, `risk:high` | **Telegram agent progress visibility** — users see "silent" conversation during long tool calls; need optional progress updates |
| [#10580](https://github.com/zeroclaw-labs/zeroclaw/issues/10580) | 2 | `ci`, `docs`, `priority:p2` | **Repo-wide internal link check** — current CI only validates *added* links; pre-existing links rot silently |

### **Top PRs by Discussion (Open)**
| PR | Comments | Focus |
|----|----------|-------|
| [#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) | Active | **Shell V1 permission policy** (RFC #7155 Phase 0+1) — unified tool permission system, tiered approval, security:policy |
| [#10489](https://github.com/zeroclaw-labs/zeroclaw/pull/10489) | Active | **Matrix voice replies** (MSC3245) — wire TTS into Matrix channel |
| [#10611](https://github.com/zeroclaw-labs/zeroclaw/pull/10611) | Active | **Anthropic/Bedrock adaptive-thinking** — support Claude Fable 5.1, Opus 4.7+, Sonnet 5 thinking modes |
| [#10241](https://github.com/zeroclaw-labs/zeroclaw/pull/10241) | Active | **Supervised shell approval routing** — restore operator approval path across all channels (Slack, Telegram, Discord, Matrix, Lark, Signal) |

**Underlying Themes**: Security policy maturation (shell permissions, trust stores), multi-channel parity (Telegram, Matrix, ACP), provider API evolution (Anthropic thinking, OpenAI-compatible warmup), and TUI performance at scale.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **P1 / High** | [#10617](https://github.com/zeroclaw-labs/zeroclaw/issues/10617) | `thinking.display="updates"` returns 400 on Claude Fable 5.1 — enum narrowed to `summarized`/`omitted` | **Open** — no fix PR yet |
| **High** | [#9653](https://github.com/zeroclaw-labs/zeroclaw/issues/9653) | Plugin WASI:HTTP trusts only bundled webpki roots, ignores OS trust store (provider parity gap from #6528) | **Fix PR open**: [#10491](https://github.com/zeroclaw-labs/zeroclaw/pull/10491) |
| **High** | [#10241](https://github.com/zeroclaw-labs/zeroclaw/pull/10241) | Supervised shell approval routing broken across channels — denied before operator can respond | **Fix PR open** (blocked) |
| **High** | [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | Bounded delegate filesystem tools ignore target workspace — agent B acts with agent A's context | **Fix PR open** |
| **Medium** | [#10302](https://github.com/zeroclaw-labs/zeroclaw/issues/10302) | ZeroCode Code pane stuck in "Processing" state during history browse + high CPU | **Fix PRs open**: [#10595](https://github.com/zeroclaw-labs/zeroclaw/pull/10595), [#10648](https://github.com/zeroclaw-labs/zeroclaw/pull/10648) |
| **Medium** | [#10485](https://github.com/zeroclaw-labs/zeroclaw/pull/10485) | ZeroCode: clean active-turn clipboard temps on disconnect | **Fix PR open** |
| **Medium** | [#10638](https://github.com/zeroclaw-labs/zeroclaw/pull/10638) | Gateway boot default seeded from first provider entry even if no model declared | **Fix PR open** |
| **Medium** | [#10637](https://github.com/zeroclaw-labs/zeroclaw/pull/10637) | WS memory consolidation uses gateway default provider, not turn-serving provider | **Fix PR open** |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Release |
|--------|--------|----------------------------|
| **Shell V1 permission policy (RFC #7155)** | [#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) (XL, security:policy) | **Very High** — accepted RFC, Phase 0+1 implementation in review |
| **Anthropic/Bedrock adaptive-thinking models** | [#10611](https://github.com/zeroclaw-labs/zeroclaw/pull/10611) (XL, provider:anthropic/bedrock) | **High** — live probing confirms API changes; Claude Fable 5.1/Opus 5/Sonnet 5 affected |
| **Telegram agent progress indicators** | [#10426](https://github.com/zeroclaw-labs/zeroclaw/issues/10426) (p2, risk:high) | **High** — user-visible UX gap, active discussion |
| **Matrix voice notes (MSC3245)** | [#10489](https://github.com/zeroclaw-labs/zeroclaw/pull/10489) (XL) | **Medium-High** — parity with Telegram/WhatsApp TTS |
| **Pre-turn tool-elicitation hints** | [#10325](https://github.com/zeroclaw-labs/zeroclaw/pull/10325) (L, default-off flag) | **Medium** — 2/2 of accepted #7431 design |
| **Repo-wide internal link validation** | [#10580](https://github.com/zeroclaw-labs/zeroclaw/issues/10580) (ci, docs) | **Medium** — CI hardening, low risk |
| **OpenAI-compatible warmup via `/models`** | [#9575](https://github.com/zeroclaw-labs/zeroclaw/issues/9575) (provider:compatible) | **Medium** — simplifies provider integration |

---

## 7. User Feedback Summary

| Channel / Context | Pain Point | Evidence |
|-------------------|------------|----------|
| **Telegram users** | No visibility into agent progress during long tool calls — appears "stalled" | [#10426](https://github.com/zeroclaw-labs/zeroclaw/issues/10426): "conversation appears silent until final response" |
| **ZeroCode TUI users** | "Processing..." state persists during history browse; high CPU consumption | [#10302](https://github.com/zeroclaw-labs/zeroclaw/issues/10302): S2 severity, active fix PRs |
| **Multi-provider operators** | Gateway picks wrong default provider/model for memory consolidation | [#10637](https://github.com/zeroclaw-labs/zeroclaw/pull/10637): "spawned LLM call on gateway-wide boot default instead of turn-serving provider" |
| **Plugin developers** | Plugin HTTPS egress lacks OS trust-store support (unlike provider requests) | [#9653](https://github.com/zeroclaw-labs/zeroclaw/issues/9653): parity gap since #6528 |
| **Anthropic/Claude users** | `thinking.display="updates"` rejected by Fable 5.1 — breaking config | [#10617](https://github.com/zeroclaw-labs/zeroclaw/issues/10617): P1, enum narrowed upstream |
| **ACP/Code users** | Interrupted turns lose progress — no checkpoint recovery | [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197): "persist interrupted turn progress" |

**Satisfaction Signals**: Active contributor base (73 on v0.8.5), rapid PR iteration, RFC-driven governance. **Friction Points**: Multi-channel parity gaps, provider API churn (Anthropic), TUI performance at scale, trust-store consistency.

---

## 8. Backlog Watch — Stale but Critical Items

| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) | ~57 days | High | **Live provider identity on usage events** — fixes context meter ceiling, resolves context window from serving provider; blocked on author action |
| [#10016](https://github.com/zeroclaw-labs/zeroclaw/pull/10016) | ~22 days | High | **Webhook audit correlation by identity** — adds per-invocation context to tool-call hooks; needs maintainer review |
| [#10241](https://github.com/zeroclaw-labs/zeroclaw/pull/10241) | ~15 days | High | **Supervised shell approval routing** — blocked; affects all channels (Slack, Telegram, Discord, Matrix, Lark, Signal) |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | ~11 days | High | **Delegate filesystem workspace isolation** — bounded delegation breaks target workspace boundaries |
| [#10325](https://github.com/zeroclaw-labs/zeroclaw/pull/10325) | ~13 days | High | **Pre-turn tool elicitation** — needs author action; second half of accepted #7431 |

**Recommendation**: Prioritize unblocking #10241 (shell approvals — security UX), #10016 (audit integrity), and #8966 (provider identity — observability). The RFC-backed shell policy (#10610) and Anthropic adaptive-thinking (#10611) are on track for near-term merge.

---

*Digest generated from GitHub data as of 2026-09-06. All links point to zeroclaw-labs/zeroclaw repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*