# OpenClaw Ecosystem Digest 2026-08-06

> Issues: 224 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-06 03:20 UTC

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

# OpenClaw Project Digest — 2026-08-06

## 1. Today's Overview
OpenClaw shows **very high velocity** with 224 issues and 500 PRs updated in the last 24 hours, though the majority remain open (188 issues, 436 PRs). Only 36 issues and 64 PRs were closed/merged, indicating a growing backlog. No new releases were published today. The project is actively tackling critical session-state and message-loss bugs (multiple 🦞 "diamond lobster" P1 issues), while also advancing features around security, memory trust, and voice/realtime capabilities. The high volume of maintainer-tagged items suggests the team is triaging aggressively but may be bottlenecked on review capacity.

## 2. Releases
**No new releases today.** The latest stable appears to be v2026.7.1 based on issue references.

## 3. Project Progress (Merged/Closed Today)
| PR/Issue | Title | Area | Status |
|----------|-------|------|--------|
| #92369 | Subagent orchestration in cron isolated sessions | sessions | Closed (already fixed) |
| #91564 | Telegram forum topic inbound black hole | telegram | Closed (already fixed) |
| #113041 | memory_search empty via QMD backend | memory | Closed (already fixed) |
| #114615 | CLI eager plugin-graph init (~6s) | cli/performance | Closed (already fixed) |
| #119534 | Bundled skills reference own support files | skills | Closed |
| #38076 | skill-creator: case-insensitive --resources | skills | Closed |
| #92672 | Rate-limit fallback: user-visible error | fallback | Closed |
| #110601 | Bound ci-run-timings git/GH CLI ops | ci/scripts | Closed |
| #119146 | Bound gh-read gh CLI child process | scripts | Closed |
| #112278 | diagnostics-otel: root span mints new traceId | observability | Closed |

**Key advances:** Several long-standing session-state/message-loss bugs were confirmed fixed on main (issues closed as `already-fixed` or `not-repro-on-main`). CI/script hardening continues with timeout bounding for external CLI calls.

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 58 | **P1 Bug** | Realtime voice sessions leak unbounded provider/consult state under slow/bursty conditions — needs hard ownership bounds |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 27 | **P2 Enhancement** | Memory trust tagging by source (user vs web vs skills) to prevent memory poisoning attacks |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | 13 | **P1 Regression** | Telegram duplicate replies (2–10×) since v5.20; partial fix in v5.22 but not resolved |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | 12 | **P2 Bug** | Hardcoded developer path (`/Users/wangtao`) shipped in release — workspace initialization broken |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) | 11 | **P2 Enhancement** | Denylist for exec-approvals (complement allowlist) — security policy flexibility |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | 9 | **P2 Feature** | MathJax/LaTeX rendering in Control UI for scientific communication |

**Underlying themes:** Session-state integrity under load (voice, cron, subagents), security hardening (memory trust, exec denylist, credential redaction), and Telegram reliability regressions dominate discussion.

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P1 🦞** | [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime voice retains unbounded provider/consult state | No (needs maintainer review) |
| **P1 🦞** | [#86519](https://github.com/openclaw/openclaw/issues/86519) | Telegram duplicate replies regression (v5.20+) | No |
| **P1 🦞** | [#53540](https://github.com/openclaw/openclaw/issues/53540) | Embedded runner "Network connection lost" on large tool-call params | No |
| **P1 🦞** | [#90098](https://github.com/openclaw/openclaw/issues/90098) | Large attachments overflow stack (Control UI/gateway) | [#118560](https://github.com/openclaw/openclaw/pull/118560) linked |
| **P1 🦞** | [#119401](https://github.com/openclaw/openclaw/issues/119401) | DM NO_REPLY suppression ignores silentReply policy | No |
| **P1 🦞** | [#117609](https://github.com/openclaw/openclaw/issues/117609) | Transient LLM errors not retried at embedded-assistant stage | No |
| **P1 🦞** | [#115914](https://github.com/openclaw/openclaw/issues/115914) | WhatsApp accepted turns silent indefinitely (no liveness fallback) | No |
| **P1 🦞** | [#118018](https://github.com/openclaw/openclaw/issues/118018) | Stale subagent completion delivered to replaced requester lifecycle | [PR linked](https://github.com/openclaw/openclaw/pull/118018) |
| **P1 🦞** | [#117358](https://github.com/openclaw/openclaw/issues/117358) | Post-turn compaction ignores boundaries, delays replies | [PR linked](https://github.com/openclaw/openclaw/pull/117358) |
| **P1 🐚** | [#119454](https://github.com/openclaw/openclaw/issues/119454) | Stuck-session recovery self-suppresses on leaked embedded run | No |
| **P2 🦞** | [#116242](https://github.com/openclaw/openclaw/issues/116242) | **Security**: Codex redaction misses Google/AWS/JWT/GitHub tokens | [PR linked](https://github.com/openclaw/openclaw/pull/116242) |
| **P2 🦞** | [#79263](https://github.com/openclaw/openclaw/issues/79263) | CLI local-transport stops reading `~/.env` (v4.29+) | No |
| **P2 🦞** | [#118793](https://github.com/openclaw/openclaw/issues/118793) | Claude CLI "session limit" error doesn't trigger fallback | [PR linked](https://github.com/openclaw/openclaw/pull/118793) |
| **P2 🦞** | [#116348](https://github.com/openclaw/openclaw/issues/116348) | "No reply generated" fallback spam in mention-gated groups | No |
| **P2 🦞** | [#119557](https://github.com/openclaw/openclaw/issues/119557) | Chat delta throttle lacks trailing flush (withheld chunks) | [PR linked](https://github.com/openclaw/openclaw/pull/119557) |

**Critical cluster:** Session-state/message-loss bugs (10× P1 🦞) plus a security credential leak (#116242). Several have linked PRs but remain in `needs-maintainer-review`.

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|----------------------------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging | High — security-critical, 27 comments, needs security review | Medium (needs design decision) |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) Exec-approvals Denylist | High — 11 comments, 8 👍, PR linked | High (clear scope, security-adjacent) |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) MathJax/LaTeX in Control UI | Medium — 10 👍, UX for technical users | Medium |
| [#16555](https://github.com/openclaw/openclaw/issues/16555) TTL for Delivery Queue | Medium — prevents gateway restart floods | High (operational hardening) |
| [#50798](https://github.com/openclaw/openclaw/issues/50798) Visible A2A messaging for ACP | Medium — architectural gap for multi-agent | Low (complex routing changes) |
| [#50205](https://github.com/openclaw/openclaw/issues/50205) Gemini request labels (GCP billing) | Low — niche cloud ops need | Low |
| [#60275](https://github.com/openclaw/openclaw/issues/60275) Per-session heartbeat scheduling | Low — advanced multi-thread management | Low |

**Predicted next-version candidates:** Exec-approvals denylist (#6615), delivery queue TTL (#16555), and possibly memory trust tagging (#7707) if security review completes.

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Telegram reliability regressed** | #86519 (13 comments), #116348 (fallback spam), #91564 (forum black hole) | High — core channel for many users |
| **Session/message loss under load** | 10+ P1 issues: voice, cron, subagents, compaction, WhatsApp, DM | Critical — data loss / silent failures |
| **Security gaps in credential handling** | #116242 (Codex redaction incomplete), #7707 (memory poisoning) | High — production blocker for enterprise |
| **Hardcoded paths / env regressions** | #51429 (wangtao path), #79263 (~/.env ignored) | Medium — breaks out-of-box experience |
| **Control UI gaps** | #118560 (canvas hides history), #49205 (WebUI sync), #42840 (LaTeX) | Medium — power-user friction |
| **No liveness/visibility guarantees** | #115914 (WhatsApp silent), #116348 (fallback spam), #119557 (delta throttle) | Medium — unpredictable UX |

**Satisfaction signals:** Users actively file detailed repros (many `source-repro`, `needs-live-repro` tags) and engage in discussion — indicates investment in the project. Dissatisfaction centers on **silent failures** (messages lost, sessions wedged, no fallback visibility).

## 8. Backlog Watch (Long-Open, High-Value, Needs Maintainer)

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging | ~6 months | Foundational security for RAG/memory; 27 comments | Needs security review + product decision |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) Exec-approvals Denylist | ~6 months | Completes approvals security model; 8 👍, PR linked | Needs maintainer review |
| [#16555](https://github.com/openclaw/openclaw/issues/16555) Delivery Queue TTL | ~6 months | Prevents gateway restart message floods | Needs maintainer review |
| [#45475](https://github.com/openclaw/openclaw/issues/45475) Slack ignoreSubtypes | ~5 months | Stops spurious agent wakes on edits/deletes | Needs maintainer review |
| [#48238](https://github.com/openclaw/openclaw/issues/48238) Loop-aware Compaction Guard | ~5 months | Prevents degradation in long sessions | Needs product decision |
| [#50798](https://github.com/openclaw/openclaw/issues/50798) Visible A2A for ACP | ~4 months | Unblocks clean multi-agent architectures | Needs maintainer review |
| [#118785](https://github.com/openclaw/openclaw/issues/118785) QA: Container/External App SDK Proof | 3 days | Fresh — tracks 54 new eligible IDs for release | Maintainer-owned, active |
| [#116783](https://github.com/openclaw/openclaw/issues/116783) Remote Validation Workload Policy | 6 days | CI capacity/speed bottleneck across Blacksmith/Daytona/AWS | Maintainer-owned |

**PRs awaiting maintainer look (from today's list):**
- [#119326](https://github.com/openclaw/openclaw/pull/119326) Account-scoped history limits (P1, session-state)
- [#119221](https://github.com/openclaw/openclaw/pull/119221) Session ID rotation guard (P1)
- [#117305](https://github.com/openclaw/openclaw/pull/117305) Transient vs policy failures (P1)
- [#116489](https://github.com/openclaw/openclaw/pull/116489) Security install policy warnings (P1)
- [#118505](https://github.com/openclaw/openclaw/pull/118505) macOS realtime Talk settings (P1, XL)

---

**Overall Health Assessment:** 🟡 **Elevated Risk** — High velocity but growing open backlog; critical P1 session-state/message-loss bugs cluster without fixes merged; security gaps in credential redaction and memory trust. Maintainer review capacity appears to be the primary bottleneck. Immediate focus should be on merging the 10+ P1 🦞 fixes with linked PRs and resolving the Telegram regression (#86519).

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-08-06 | **Projects Analyzed:** 12 | **Active Projects:** 10

---

## 1. Ecosystem Overview
The personal AI agent ecosystem shows **high fragmentation with convergent technical challenges**. Ten projects exhibited meaningful activity in the last 24 hours, spanning from core reference implementations (OpenClaw) to specialized forks (LobsterAI, CoPaw) and emerging architectures (ZeroClaw, IronClaw). Common pressures include **session-state integrity under load**, **MCP integration reliability**, **multi-channel message fidelity**, and **enterprise-grade security hardening**. A clear split exists between projects prioritizing **architectural refactoring** (Hermes, ZeroClaw, IronClaw) and those shipping **user-facing features** (NanoBot, PicoClaw, LobsterAI). No dominant standard has emerged; instead, projects are converging on similar capability sets (voice, skills, memory, multi-channel) through divergent architectures.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Latest Release | Health Score |
|---------|--------------|-----------|----------------|--------------|
| **OpenClaw** | 224 | 500 | v2026.7.1 | 🟡 Elevated Risk |
| **CoPaw / QwenPaw** | 16 | 50 | 2.1.0b2 (beta) | 🟢 High Velocity |
| **Hermes Agent** | 14 | 50 | v0.20.0 (2026-08-03) | 🟡 Hardening vs Refactor |
| **IronClaw** | 5 | 50 | v1.1.0-rc.1 (2026-08-03) | 🟢 Pre-Release Stabilization |
| **ZeroClaw** | 17 | 50 | v0.8.5 tracker (intake frozen) | 🟡 Review Bottleneck |
| **NanoBot** | 4 | 14 | — | 🟢 Active Development |
| **LobsterAI** | 3 (2 new) | 10 merged | v2026.8.5 (2026-08-05) | 🟢 Strong Velocity |
| **NanoClaw** | 2 | 12 | — | 🟡 Active w/ Blockers |
| **PicoClaw** | 0 | 4 | — | 🟢 Steady Maintenance |
| **NullClaw** | 0 | 2 | — | 🟢 Maintenance Mode |
| **Moltis** | 0 | 0 | — | ⚪ Dormant |
| **ZeptoClaw** | 0 | 0 | — | ⚪ Dormant |

**Health Score Key:** 🟢 Healthy velocity & throughput | 🟡 Active but bottlenecked/unstable | ⚪ No recent activity

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Scale & Breadth:** 4–10× higher issue/PR volume than any peer; supports 10+ channels (Telegram, WhatsApp, Signal, Slack, Matrix, Discord, etc.) vs. 2–4 in most forks.
- **Reference Implementation:** Core session, memory, and orchestration primitives are adopted downstream (LobsterAI, NanoClaw, CoPaw).
- **Community Investment:** 58 comments on top P1 bug (#116201) vs. 0–4 on most peer issues; users file detailed repros (`source-repro`, `needs-live-repro` tags).

### Technical Approach Differences
| Dimension | OpenClaw | Typical Peer Approach |
|-----------|----------|----------------------|
| **Session Model** | Complex subagent/cron/isolated sessions with compaction | Simplified linear history (NanoBot, PicoClaw) or bounded Matrix work (ZeroClaw) |
| **Skill System** | Bundled + dynamic, support-file references | Model-driven activation (IronClaw), container-isolated (NanoClaw), Creator timeline (CoPaw) |
| **Security** | Post-hoc redaction (Codex), memory trust tagging (proposed) | Forbidden-path globs (ZeroClaw), sandbox profiles (IronClaw), OAuth-first (PicoClaw) |
| **Architecture** | Monolithic core with god files (being sharded in Hermes) | Modular from start (IronClaw, ZeroClaw) or WebUI-centric (NanoBot, CoPaw) |

### Community Size Comparison
- **GitHub Activity (24h):** OpenClaw (724 total) > IronClaw/ZeroClaw/Hermes/CoPaw (55–67) > others (<20)
- **Contributor Breadth:** OpenClaw shows maintainer-tagged triage across 188 open issues; peers rely on core teams (2–5 active committers visible in digests).

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Session-State Integrity / Message Loss Prevention** | OpenClaw, Hermes, CoPaw, NanoClaw, LobsterAI | Hard ownership bounds for provider/consult state (OpenClaw #116201); tool-call history overflow at 20–30 calls (CoPaw #6726); gateway lock races (LobsterAI #2436); single-writer `outbound.db` invariant (NanoClaw #3192) |
| **MCP Integration & Reliability** | NanoBot, NanoClaw, CoPaw, ZeroClaw, IronClaw | Business-error envelope handling (NanoBot #5237); periodic disconnects requiring container restart (CoPaw #6732); proxy/CA-cert forwarding (NanoClaw #3188); A2A outbound client (ZeroClaw #9324, IronClaw extension reach) |
| **Credential Redaction & Memory Trust** | OpenClaw, ZeroClaw, IronClaw, NanoClaw | Codex misses Google/AWS/JWT/GitHub tokens (OpenClaw #116242); workspace-relative `forbidden_paths` globs (ZeroClaw #9776); sandbox profiles for non-root workers (IronClaw #7214); memory trust tagging by source (OpenClaw #7707) |
| **Multi-Channel Message Fidelity** | OpenClaw, NanoBot, NanoClaw, Hermes, CoPaw | Telegram duplicate replies regression (OpenClaw #86519); WhatsApp audio send via libmagic (NanoBot #5203); Signal attachments inaccessible in container (NanoClaw #2528); WeChat approval i18n (CoPaw #6728) |
| **Model Routing / Provider Unification** | NanoBot, CoPaw, IronClaw, ZeroClaw, PicoClaw | Metasearch via Reciprocal Rank Fusion (NanoBot #5234); automatic per-message routing (CoPaw #6436); modalities parser for per-model vision (ZeroClaw #9743); configurable fallback chains (PicoClaw #3200) |
| **Desktop Stability & UX** | Hermes, LobsterAI, CoPaw, PicoClaw | macOS WindowServer/tccd deadlock on sleep (Hermes #79849); system-prompt deduplication (LobsterAI #2440); Chrome native messaging on Windows (CoPaw #6669); Anthropic OAuth setup-token (PicoClaw #926) |
| **Configuration-as-Code / Declarative Tenancy** | IronClaw, ZeroClaw, Hermes | Tenant blueprints replacing `.env`/settings JSON (IronClaw #3036); admin-managed non-human subjects (IronClaw #6578); goal mode v1 bounded work (ZeroClaw #8303); god-file decomposition (Hermes #78647) |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architectural Signature |
|---------|---------------|-------------|-------------------------|
| **OpenClaw** | Core reference, maximum channel coverage | Platform builders, power users | Monolithic session orchestrator; complex subagent/cron isolation; skill bundling |
| **NanoBot** | WebUI-first, search & provider-native features | Desktop/web users, researchers | Metasearch aggregation; provider-native switches (Codex Fast, Grok X Search); temporary chat |
| **Hermes Agent** | Desktop-native, agent economy, refactoring | Developers, VS Code users | God-file decomposition epic; Kickbacks.ai monetization; TUI + desktop parity |
| **PicoClaw** | Lightweight, OAuth/auth innovation, model flexibility | Embedded/edge, privacy-focused | Anthropic OAuth setup-token; configurable fallback chains; minimal deps |
| **NanoClaw** | Container-first, skill architecture, data integrity | Self-hosters, multi-agent workflows | Single-writer `outbound.db`; structured attachment parts; host-seam capabilities |
| **NullClaw** | Runtime stability, minimal surface | Embedded, long-running gateways | Stack sizing fixes; channel polling supervisor; no feature churn |
| **IronClaw** | Enterprise tenancy, extension reach, config-as-code | Operators, SaaS platforms | WASM sandbox; IronHub deep-links; durable attachments; admin-managed subjects |
| **LobsterAI** | Enterprise auth, OpenClaw integration layer, gamification | Enterprise teams, Chinese market | Account-scoped auth isolation; daily check-in; OpenClaw config merge strategy |
| **CoPaw / QwenPaw** | Visual workflows (Creator), i18n, Chinese UX | Chinese developers, visual thinkers | Timeline workbench (NLE-style); full i18n; proactive mode; embedding validation lifecycle |
| **ZeroClaw** | Governance formalization, A2A/SOP contracts, security | Protocol designers, regulated envs | RFC-driven governance; A2A outbound client; workspace-relative forbidden paths; SOP engine |

---

## 6. Community Momentum & Maturity

### Activity Tiers
| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Tier 1: Rapid Iteration** (50+ PRs/24h) | OpenClaw, CoPaw, Hermes, IronClaw, ZeroClaw | High PR volume; architectural work + feature delivery; review bottlenecks emerging |
| **Tier 2: Active Development** (10–14 PRs/24h) | NanoBot, NanoClaw, LobsterAI | Steady feature flow; user-facing fixes; 1–2 critical bugs open |
| **Tier 3: Steady Maintenance** (2–4 PRs/24h) | PicoClaw, NullClaw | Focused fixes; no feature churn; high signal-to-noise |
| **Tier 4: Dormant** | Moltis, ZeptoClaw | No

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-06

## 1. Today's Overview
NanoBot shows **high development velocity** with 14 PRs and 4 issues updated in the last 24 hours. The project is actively advancing on multiple fronts: WebUI enhancements (drag-and-drop sessions, temporary chat, shared terminal), critical bug fixes (WhatsApp audio, MCP tool error handling, goal continuation loops), and infrastructure improvements (memory tracking, API status reporting). Five PRs were merged/closed today, indicating healthy review throughput. No new release was published, suggesting changes are accumulating for a future release batch.

## 2. Releases
**No new releases** in the last 24 hours. The project appears to be in active development cycle with changes staged in PRs.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | **Feature (P1)** | Integrated **mst-python** as a metasearch provider — aggregates DuckDuckGo, Google, Brave, Bing via Reciprocal Rank Fusion | Richer web search coverage for agents |
| [#5254](https://github.com/HKUDS/nanobot/pull/5254) | **Feature (P2)** | Added **provider-native request switches** in WebUI: OpenAI Codex Fast mode, OpenAI/DeepSeek web search, xAI Grok X search | Direct access to provider-specific capabilities from UI |
| [#5203](https://github.com/HKUDS/nanobot/pull/5203) | **Bug Fix (P2)** | **WhatsApp**: detect outbound media by file contents (libmagic) not extension; send unsupported audio as documents | Fixes audio sending reliability (related to #5149) |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | **Feature (Conflict)** | Quick Chat + Temporary Chat — closed due to conflicts, superseded by #5252/#5261 | Functionality redistributed to newer PRs |
| [#5249](https://github.com/HKUDS/nanobot/pull/5249) | **Refactor (P2)** | WebUI visual consistency: unified elevation, flattened layouts, removed replay animations, auto timezone detection | Polished UX foundation |

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) **WhatsApp audio not sending** | 4 comments, 8 days open | **Critical channel reliability** — users cannot send audio files; ffmpeg warnings in logs; blocker for WhatsApp power users |
| [#5237](https://github.com/HKUDS/nanobot/issues/5237) **MCP tool "data not found" swallowed as success** | 2 comments, 2 days open | **Agent correctness** — MCP servers return business errors with `isError=false`; agent never learns of failure, cannot retry/route |
| [#5256](https://github.com/HKUDS/nanobot/issues/5256) **/goal produces dozens of repeated replies while waiting** | 0 comments, 1 day open | **Loop prevention** — goal continuation unbounded; burns tokens/context while idle waiting for user |
| [#5261](https://github.com/HKUDS/nanobot/pull/5261) **Drag sidebar sessions in WebUI** | Just opened | **Workflow efficiency** — Codex-style session management; drag-to-mention, reorder sessions |

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#5149](https://github.com/HKUDS/nanobot/issues/5149) WhatsApp audio send broken (ffmpeg warnings) | Open | Partially addressed by [#5203](https://github.com/HKUDS/nanobot/pull/5203) (merged) — media detection by content; may need follow-up |
| **High** | [#5237](https://github.com/HKUDS/nanobot/issues/5237) MCP business errors treated as success → agent unaware | Open | No fix PR yet; requires MCP result validation layer |
| **Medium** | [#5256](https://github.com/HKUDS/nanobot/issues/5256) `/goal` reply spam while waiting for user | Open | Fix PR [#5257](https://github.com/HKUDS/nanobot/pull/5257) open — bounds goal continuation on idle turns |
| **Medium** | [#5248](https://github.com/HKUDS/nanobot/pull/5248) Matrix join fails on Continuwuity (empty POST body) | Open PR | Fix ready — sends `{}` body for compatibility |
| **Low** | [#5260](https://github.com/HKUDS/nanobot/pull/5260) Memory tracker picks up runtime artifacts in workspace dirs | Open PR | Fix ready — ignore rules + backfill for existing workspaces |

## 6. Feature Requests & Roadmap Signals
| Signal | Evidence | Likelihood for Next Version |
|--------|----------|----------------------------|
| **MCP Apps host support in WebUI** | [#5251](https://github.com/HKUDS/nanobot/issues/5251) — official `io.modelcontextprotocol/ui` extension for interactive MCP server UIs | High — aligns with MCP client maturity; WebUI is primary surface |
| **Temporary Chat mode** | [#5252](https://github.com/HKUDS/nanobot/pull/5252), [#5259](https://github.com/HKUDS/nanobot/pull/5259) — in-memory, connection-owned, no history persistence | High — two PRs active; addresses privacy/ephemeral use cases |
| **Shared project terminal (PTY/ConPTY)** | [#5253](https://github.com/HKUDS/nanobot/pull/5253) — persistent xterm.js dock, human input, reconnect | Medium — complex but high-value for coding agents |
| **Provider-native switches in WebUI** | [#5254](https://github.com/HKUDS/nanobot/pull/5254) **merged** — Codex Fast, web search, X Search toggles | **Delivered** — already in main |
| **Truthful API status for external `nanobot serve`** | [#5255](https://github.com/HKUDS/nanobot/pull/5255) (Draft) — WebUI currently lies about externally managed API servers | Medium — operational visibility need |

## 7. User Feedback Summary
| Pain Point | Source | User Impact |
|------------|--------|-------------|
| **WhatsApp audio send broken** | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | "nanobot will not send audio message on whatsapp. it does receive them." — blocks voice workflows |
| **MCP errors invisible to agent** | [#5237](https://github.com/HKUDS/nanobot/issues/5237) | Agent "never learns the call failed, so it cannot re-try or route around" — breaks tool reliability |
| **Goal loops burn context** | [#5256](https://github.com/HKUDS/nanobot/issues/5256) | "Dozens of near-identical replies… ended only when user intervened" — wasteful, confusing |
| **Matrix join fails silently** | [#5248](https://github.com/HKUDS/nanobot/pull/5248) | Continuwuity users cannot join rooms; `_on_room_invite` fires but `join()` fails quietly |
| **Memory pollutes workspace** | [#5260](https://github.com/HKUDS/nanobot/pull/5260) | Runtime artifacts tracked as memory files — noise in context |

**Positive signals**: Provider switches merged (#5254), metasearch added (#5234), WebUI polish (#5249) — users gain immediate capability upgrades.

## 8. Backlog Watch — Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) **WhatsApp audio** | 8 days | High-user-impact channel bug; partial fix merged but issue still open — needs verification/closure |
| [#5237](https://github.com/HKUDS/nanobot/issues/5237) **MCP error envelope handling** | 2 days | Architectural gap: no validation of `CallToolResult` success semantics; affects all MCP integrations |
| [#5255](https://github.com/HKUDS/nanobot/pull/5255) **API status truthfulness (Draft)** | 1 day | Operational blind spot: WebUI misreports external `nanobot serve` status; blocks reliable monitoring |
| [#5248](https://github.com/HKUDS/nanobot/pull/5248) **Matrix Continuwuity compat** | 2 days | Small fix, unblocks a homeserver variant; ready for review |
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) **Goal continuation bound** | 1 day | Direct fix for #5256 spam loop; should be fast-tracked |

---

**Project Health Indicators**  
✅ **Velocity**: 14 PRs/24h, 5 merged  
✅ **Scope**: WebUI, channels, agent core, memory, MCP all advancing  
⚠️ **Stability**: 3 high-impact bugs open (WhatsApp audio, MCP errors, goal loops)  
✅ **Review throughput**: Conflicts resolved (#5184 → #5252/#5261), refactors landing  
📦 **Release readiness**: Accumulating changes — likely batch release imminent

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-06

## 1. Today's Overview

Hermes Agent shows **high development velocity** with 50 PRs and 14 issues updated in the last 24 hours. The project is in an active refactoring phase — highlighted by the "Kill All Gods" epic (#78647) to decompose 20 god files — while simultaneously addressing a cluster of desktop stability regressions in v0.20.0 (macOS resource spikes, Windows update failures, session sidebar data loss). No new release was cut today; the merged PRs focus on platform-specific fixes (Windows shortcuts, Signal typing cadence, Docker persistence) and gateway error handling. Community engagement is moderate — most issues/PRs have 0–4 comments — but several duplicate feature requests (#79854, #79855) indicate emerging user demand for Kickbacks.ai integration.

---

## 2. Releases

**No new releases today.** The last release was v0.20.0 ("The Herald Release", 2026-08-03). Several open issues (#79853, #79849, #79860) report regressions in v0.20.0, suggesting a patch release may be imminent.

---

## 3. Project Progress — Merged/Closed PRs Today (6)

| PR | Type | Component | Summary |
|----|------|-----------|---------|
| [#77900](https://github.com/NousResearch/hermes-agent/pull/77900) | Bug fix | Desktop (Win/Linux) | Register reload/devtools shortcuts on Windows/Linux (closes #77845) |
| [#69661](https://github.com/NousResearch/hermes-agent/pull/69661) | Bug fix | Desktop | Restore queue-on-plain-Enter when composer is busy; reverts regression from `3d40a1cbf` |
| [#53525](https://github.com/NousResearch/hermes-agent/pull/53525) | Bug fix | Gateway/TUI | Preserve rebound WebSocket sessions during teardown (reconnect race fix for #50005) |
| [#61326](https://github.com/NousResearch/hermes-agent/pull/61326) | Bug fix | Agent | Centralize bounded model fallback via unified error classifier |
| [#74560](https://github.com/NousResearch/hermes-agent/issues/74560) | Issue closed | Desktop | Double-render bug — interimBoundaryPending flag reset causes duplicate bubbles (followup to #63679) |
| [#79854](https://github.com/NousResearch/hermes-agent/issues/79854) | Issue closed | Tools | Duplicate Kickbacks.ai feature request (closed as duplicate of #79855) |

**Key advances:** Desktop composer UX stabilized (Enter queuing), gateway reconnect reliability improved, model fallback logic centralized, Windows dev ergonomics restored.

---

## 4. Community Hot Topics — Most Active Items

| Item | Type | Comments | Signal |
|------|------|----------|--------|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | Issue (Epic) | **17** | **Architectural mandate**: "Shard all 20 god files — repo-wide decomposition." Standing policy: all god files sharded, never reverted. 17 comments show active design debate on module boundaries. |
| [#74560](https://github.com/NousResearch/hermes-agent/issues/74560) | Issue (Bug) | **4** | Desktop double-render regression; root cause traced to `use-message-stream` hook. Fix incomplete — #71857 still open with same symptom. |
| [#71866](https://github.com/NousResearch/hermes-agent/issues/71866) | Issue (Bug) | **2** | Sidebar empty after v0.19.0 update; `state.db` intact (227 sessions). Data-migration / UI hydration failure. |
| [#79855](https://github.com/github.com/NousResearch/hermes-agent/issues/79855) + [#79854](https://github.com/NousResearch/hermes-agent/issues/79854) | Issues (Feature) | 0 each (but **2 duplicates filed same day**) | **Emerging demand**: Kickbacks.ai monetization integration for VS Code coding agents. Users want parity with Claude Desktop. |

**Underlying needs:**  
- **Architecture**: Maintainers pushing hard on technical debt (god-file decomposition) — may slow feature velocity short-term.  
- **Desktop stability**: v0.20.0 introduced macOS/Windows regressions eroding trust.  
- **Monetization**: Community pulling for agent-economy integrations (Kickbacks.ai) — signal for "agent-as-income" workflows.

---

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Component | Status | Fix PR? |
|----------|-------|-----------|--------|---------|
| **Critical** | [#79849](https://github.com/NousResearch/hermes-agent/issues/79849) | Desktop (macOS) | Open | No |
| | System-wide freeze on sleep/wake via WindowServer ↔ tccd deadlock (macOS 15.7.7) | | | |
| **Critical** | [#79853](https://github.com/NousResearch/hermes-agent/issues/79853) | Desktop (macOS) | Open | No |
| | v0.20.0: >90% CPU sustained, renderer spikes to 400%; cross-session message mixing under load | | | |
| **High** | [#79860](https://github.com/NousResearch/hermes-agent/issues/79860) | Desktop (Windows) | Open | No |
| | UI update fails: "Hermes still running" — detached gateway's venv-launcher survives updater kill | | | |
| **High** | [#71866](https://github.com/NousResearch/hermes-agent/issues/71866) | Desktop (Sessions) | Open | No |
| | Sidebar empty after update; history + pinned sessions gone; `state.db` intact | | | |
| **Medium** | [#79859](https://github.com/NousResearch/hermes-agent/issues/79859) | Desktop (TTS/OpenAI) | Open | No |
| | Talk to Hermes uses delayed whole-file MP3 playback (no streaming, no barge-in) | | | |
| **Medium** | [#79863](https://github.com/NousResearch/hermes-agent/issues/79863) | Desktop (UI) | Open | No |
| | UI zoom reverts to stale per-URL records on SPA navigation | | | |
| **Medium** | [#79865](https://github.com/NousResearch/hermes-agent/issues/79865) | Desktop (Settings) | Open | No |
| | "Default project directory" misplaced under "Archived Chats" label | | | |

**Open fix PRs today:**  
- [#79857](https://github.com/NousResearch/hermes-agent/pull/79857) — Gateway: suppress internal errors on customer-facing channels (SMS)  
- [#79861](https://github.com/NousResearch/hermes-agent/pull/79861) — Memory: make Hindsight prefetch wait configurable  
- [#79862](https://github.com/NousResearch/hermes-agent/pull/79862) — Vision: per-model image input for Kimi-Coding (kimi-k3 multimodal)  
- [#79864](https://github.com/NousResearch/hermes-agent/pull/79864) — Desktop: new session collapses terminal pane (regression)  
- [#79799](https://github.com/NousResearch/hermes-agent/pull/79799) — Slack: ack free-response channel messages  
- [#79851](https://github.com/NousResearch/hermes-agent/pull/79851) — WeCom: surface iLink business errors on media sends  

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Component | Likelihood for Next Version |
|---------|-------|-----------|----------------------------|
| Configurable composer/conversation width | [#79856](https://github.com/NousResearch/hermes-agent/issues/79856) | Desktop (Windows) | **High** — simple CSS var change, marked duplicate (existing demand) |
| Independent conversation font-size (no global UI scale) | [#79858](https://github.com/NousResearch/hermes-agent/issues/79858) | Desktop (Windows) | **High** — low-risk settings addition |
| Kickbacks.ai integration (monetize agent edits) | [#79855](https://github.com/NousResearch/hermes-agent/issues/79855) | Tools / VS Code | **Medium** — 2 duplicate filings same day; requires API partnership |
| Context token usage (context_pct) in chat footer | [#79852](https://github.com/NousResearch/hermes-agent/issues/79852) | Desktop | **Medium** — CLI/TUI already has it; regression restore |
| Minimize-to-tray on close (Win/Linux, opt-in) | [#79803](https://github.com/NousResearch/hermes-agent/pull/79803) | Desktop | **High** — PR open, off-by-default, matches IM conventions |
| AIDE² self-evaluation engine (5-phase auto-improvement) | [#77236](https://github.com/NousResearch/hermes-agent/pull/77236) | Agent (Innovation) | **Low–Medium** — ambitious, CI green but needs design review |

**Prediction:** Next patch (v0.20.1) will likely bundle macOS/Windows stability fixes + desktop UX polish (width, font-size, tray, context_pct). Kickbacks.ai and AIDE² are strategic bets for v0.21+.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Theme | Evidence | Sentiment |
|-------|----------|-----------|
| **v0.20.0 regression cluster** | #79853 (macOS CPU/mixing), #79849 (sleep freeze), #79860 (Win update), #71866 (session loss) | 😡 **High frustration** — "unusable under load", "system-wide freeze", "update fails every time" |
| **Desktop UX papercuts** | #79856 (width), #79858 (font), #79863 (zoom), #79865 (misplaced setting), #79864 (terminal pane collapse) | 😐 **Annoyed** — "hardcoded", "silently reverts", "misleading label" |
| **Voice/TTS latency** | #79859 — OpenAI TTS whole-file playback, no barge-in | 😐 **Disappointed** — "delayed voice-note workflow" |
| **Monetization demand** | Two duplicate Kickbacks.ai requests same day (#79854, #79855) | 😃 **Enthusiastic** — "give you money for every changes from agent" |
| **Architecture confidence** | Epic #78647 (17 comments) — "all god files sharded, never reverted" | 🤔 **Mixed** — maintainers committed, but community watches for breakage |

**Top use cases surfacing:**  
- Long-running coding sessions on macOS (hit CPU/memory bugs)  
- Windows users updating via UI (blocked by venv-launcher leak)  
- Multi-session power users (sidebar data loss, cross-session mixing)  
- Voice-first users (TTS latency, no interruption)  
- Agent-economy participants (Kickbacks.ai integration)

---

## 8. Backlog Watch — Stale High-Impact Items Needing Attention

| Item | Age | Type | Why It Matters |
|------|-----|------|----------------|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | 2 days | Epic | **God-file decomposition** — 20 files, repo-wide. 17 comments show design tension. Blocking clean module boundaries. Needs maintainer arbitration on shard interfaces. |
| [#71866](https://github.com/NousResearch/hermes-agent/issues/71866) | 11 days | Bug | **Session sidebar empty after update** — data intact but UI broken. Affects all upgraders. No fix PR yet. |
| [#74560](https://github.com/NousResearch/hermes-agent/issues/74560) | 7 days | Bug | **Double-render regression** — followup to #63679, same symptom as #71857. Root cause known (`use-message-stream`), fix incomplete. |
| [#77236](https://github.com/NousResearch/hermes-agent/pull/77236) | 3 days | Feature PR | **AIDE² self-evaluation** — 198 tests green, CI clean, but ambitious scope. Needs architectural review before merge. |
| [#40124](https://github.com/NousResearch/hermes-agent/pull/40124) | 62 days | Bug PR | **Strip ANSI from session_search** — model context pollution. Old, unmerged, moderate blast radius. |
| [#75566](https://github.com/NousResearch/hermes-agent/pull/75566) | 6 days | Bug PR | **Docker: ddgs install survival** — three coupled bugs, affects CI/deploy. Stalled. |
| [#79778](https://github.com/NousResearch/hermes-agent/pull/79778) | 1 day | Refactor PR | **web_server.py shard S5 extraction** — part of god-file epic. Large, needs careful review for zero-behavior-change guarantee. |

---

## Project Health Snapshot

| Indicator | Status | Trend |
|-----------|--------|-------|
| **Release cadence** | ⚠️ No release today; v0.20.0 regressions accumulating | ⬇️ |
| **Bug throughput** | ✅ 6 closed today, but 7 new critical/high bugs filed | ↔️ |
| **Refactor momentum** | ✅ Epic active, multiple shard PRs open | ⬆️ |
| **Community pull** | 🟡 Moderate (duplicates signal demand) | ⬆️ |
| **Platform coverage** | 🟡 macOS/Windows regressions dominate | ⚠️ |

**Bottom line:** Hermes is in a **"hardening vs. refactoring" tension** — v0.20.0 stability debt is competing with the god-file decomposition epic. A patch release (v0.20.1) targeting the macOS/Windows/session bugs would restore confidence before the architectural wave lands.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-06

## 1. Today's Overview
PicoClaw shows modest but focused development activity over the past 24 hours, with **4 pull requests updated** and **zero issue activity**. One PR (#926) was merged, delivering Anthropic OAuth support with usage tracking. Three open PRs remain active: a critical lockfile repair (#3318), a configurable model fallback chain (#3200), and a long-running documentation consolidation effort (#1951). No new releases were published. The project appears to be in a steady maintenance and feature-enhancement phase, with maintainers addressing both infrastructure debt and user-facing improvements.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
### Merged / Closed PRs
- **#926** — `feat(auth): add Anthropic OAuth setup-token login`  
  **Merged** 2026-08-05. Adds support for Anthropic OAuth setup tokens (`sk-ant-oat01-*`) via a new `--setup-token` flag and interactive login menu. Integrates Anthropic’s usage endpoint to display 5-hour and 7-day utilization in `auth status`. Includes streaming support for OAuth tokens.  
  → [PR #926](https://github.com/sipeed/picoclaw/pull/926)

## 4. Community Hot Topics
| PR | Type | Activity | Summary |
|----|------|----------|---------|
| [#3318](https://github.com/sipeed/picoclaw/pull/3318) | **Bug Fix (Build)** | Created & updated 2026-08-05 | **Critical lockfile corruption**: `web/frontend/pnpm-lock.yaml` contains duplicate `semver@7.8.5` entries under both `packages:` and `snapshots:`, violating YAML spec and blocking `pnpm install`. Zero comments but high urgency — unblocks frontend development. |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | **Feature (Models)** | Created 2026-07-01, updated 2026-08-05 | **Configurable default fallback chain** for models in web UI, persisted via backend API. Enables users to set default model, add fallbacks, reorder, and save full chain. Addresses multi-model workflow needs. |
| [#1951](https://github.com/sipeed/picoclaw/pull/1951) | **Chore (Build/Docs)** | Created 2026-03-24, updated 2026-08-05 | **Move installation scripts** from `picoclaw_docs` repo into main repo. Long-running (4+ months), likely blocked by coordination or scope. Related to docs repo PR #14. |

> **Underlying needs**: Frontend build reliability (#3318), flexible model orchestration for power users (#3200), and reduced repo fragmentation for onboarding (#1951).

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | `pnpm-lock.yaml` duplicate key blocks frontend installs (`ERR_PNPM_BROKEN_LOCKFILE`) | **Open** | [#3318](https://github.com/sipeed/picoclaw/pull/3318) (author: nuestraai) — removes duplicate `semver@7.8.5` mapping |

> No crashes, regressions, or runtime bugs reported in issues today. The sole blocker is build-time.

## 6. Feature Requests & Roadmap Signals
| PR | Feature | Likelihood for Next Release |
|----|---------|-----------------------------|
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | Configurable model fallback chain (UI + API persistence) | **High** — active development, recent update, addresses core UX for multi-model users |
| [#926](https://github.com/sipeed/picoclaw/pull/926) | Anthropic OAuth + usage tracking | **Delivered** — merged 2026-08-05 |
| [#1951](https://github.com/sipeed/picoclaw/pull/1951) | Consolidate install scripts into main repo | **Medium** — long stale, but updated recently; may land with docs overhaul |

> **Prediction**: Next version will likely include the model fallback chain (#3200) and the lockfile fix (#3318). OAuth is already in.

## 7. User Feedback Summary
- **No issues opened or commented** in the last 24 hours → no direct user pain points surfaced today.
- **Implicit signals from PRs**:
  - Developers blocked by broken lockfile (#3318) → need reliable CI/local setup.
  - Users want persistent, reorderable model fallback chains (#3200) → multi-model workflows are real.
  - Install script fragmentation (#1951) → onboarding friction for new contributors/users.

## 8. Backlog Watch
| Item | Age | Type | Why It Matters |
|------|-----|------|----------------|
| [#1951](https://github.com/sipeed/picoclaw/pull/1951) | **135 days** | Chore (Docs/Build) | Installation scripts split across repos increases maintenance burden and onboarding friction. Updated recently — may need maintainer decision or rebase. |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | **36 days** | Feature (Models) | High-value UX improvement; pending review/merge. Last updated 2026-08-05 — likely nearing readiness. |
| [#3318](https://github.com/sipeed/picoclaw/pull/3318) | **1 day** | Bug Fix (Build) | **Urgent**: blocks all frontend development. Should be prioritized for immediate review/merge. |

> **Maintainer attention needed**: #3318 (critical build blocker), then #3200 (high-value feature), then #1951 (technical debt).

---

*Digest generated from GitHub data as of 2026-08-06. All links point to live GitHub resources.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-06

## 1. Today's Overview
NanoClaw shows **high development velocity** with 12 PRs updated and 2 issues active in the last 24 hours, but **no new releases**. The PR queue is dominated by architectural fixes (command-gate routing, container env forwarding), new utility skills (Tavily MCP, `add-why`), and channel hardening (WhatsApp timeout, attachment handling). Two persistent bugs—Signal attachment accessibility and Docker permission recovery on LXC—remain open since April–May, indicating gaps in container–host file sharing and install-time resilience. Overall project health is **active but with unresolved user-facing blockers**.

---

## 2. Releases
**No new releases** in the last 24 hours.

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3175](https://github.com/nanocoai/nanoclaw/pull/3175) | Fix (closed, superseded) | Routed command-gate denials via delivery adapter instead of writing directly to container-owned `outbound.db` (single-writer invariant). | Prevents DB corruption risk; superseded by [#3192](https://github.com/nanocoai/nanoclaw/pull/3192). |
| [#3187](https://github.com/nanocoai/nanoclaw/pull/3187) | Fix (closed) | Disallowed built-in `SendMessage` tool so agent-to-agent messaging works correctly. | Unblocks multi-agent workflows; core runtime fix. |

**Net progress**: Two runtime correctness fixes landed (DB safety, agent messaging), both addressing architectural invariants rather than user-facing features.

---

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3192](https://github.com/nanocoai/nanoclaw/pull/3192) (open) | Replaces closed #3175; same fix, active review | **Data integrity**: Enforce single-writer rule for `outbound.db`—critical for session reliability. |
| [#3156](https://github.com/nanocoai/nanoclaw/pull/3156) (open, updated today) | Carry channel attachments to providers as structured parts | **Multimodal parity**: Agents must see images/PDFs from Signal, WhatsApp, etc.—blocks real-world use. |
| [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) (issue, updated today) | Signal image/PDF attachments unreachable from agent container | **Container file access**: Host receives files but agent cannot open them—directly blocks #3156’s goal. |
| [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) (open) | Add Tavily MCP tool skill | **Tooling expansion**: Users want web search via MCP; signals demand for more built-in skills. |

**Pattern**: Attachment handling (#2528, #3156) and DB/runtime invariants (#3192, #3187) dominate attention—both are **foundational** for trustworthy agent operation.

---

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue / PR | Description | Fix PR? |
|----------|------------|-------------|---------|
| **High** | [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) | Signal images/PDFs land on host but agent container cannot access them. | Partially addressed by [#3156](https://github.com/nanocoai/nanoclaw/pull/3156) (structured parts), but container mount/path issue remains. |
| **High** | [#2006](https://github.com/nanocoai/nanoclaw/issues/2006) | Fresh Debian 12 LXC install: `usermod -aG docker` doesn’t take effect in same session; setup fails. | No fix PR yet. Workaround: re-login/new shell, but installer should handle this. |
| **Medium** | [#3191](https://github.com/nanoclaw/pull/3191) | WhatsApp `setup()` hangs indefinitely on logged-out session (no QR re-scan). | Fix PR open: bounds setup with timeout. |
| **Medium** | [#3188](https://github.com/nanoclaw/pull/3188) | MCP servers spawned in container miss `HTTPS_PROXY`/CA-trust env vars. | Fix PR open: forward OneCLI gateway env. |
| **Low** | [#2346](https://github.com/nanoclaw/pull/2346) | Unknown slash commands mis-categorized as `passthrough`, causing silent drop. | Fix PR open: treat as `category: 'none'`. |

**Top stability risks**: #2528 (data loss for user attachments) and #2006 (broken first-run experience on common platform).

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Tavily MCP skill** (web search) | [#3190](https://github.com/nanoclaw/pull/3190) | High—utility skill, no core changes, follows guidelines. |
| **`add-why` skill** (explain message handling) | [#3189](https://github.com/nanoclaw/pull/3189) | High—debugging utility, pure skill, low risk. |
| **Dial channel integration** | [#3050](https://github.com/nanoclaw/pull/3050) | Medium—feature skill, adds new channel; needs review bandwidth. |
| **Host seams for skill-owned capabilities** | [#3186](https://github.com/nanoclaw/pull/3186) | Medium—refactor to let skills declare host-side capabilities; architectural. |
| **Remove stale skills (qodo, Google MCP)** | [#3172](https://github.com/nanoclaw/pull/3172) | High—maintenance, reduces surface area. |

**Prediction**: Next version will likely ship **Tavily**, **`add-why`**, and **stale-skill cleanup** (low-risk, high-value). Dial and host-seams need more design review.

---

## 7. User Feedback Summary
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Attachments invisible to agent** | [#2528](https://github.com/nanoclaw/issues/2528): “agent inside the container can't open them” | Blocks multimodal workflows; users cannot use images/PDFs sent via Signal. |
| **Install fails on Debian 12 LXC** | [#2006](https://github.com/nanoclaw/issues/2006): “recovery path doesn't fire” | First-run failure on Proxmox/container hosts; requires manual intervention. |
| **WhatsApp setup hangs** | [#3191](https://github.com/nanoclaw/pull/3191): “logged-out session can't hang host startup” | Host startup blocked if WhatsApp session expired and no one scans QR. |
| **MCP servers lack proxy/CA env** | [#3188](https://github.com/nanoclaw/pull/3188): “never see HTTPS_PROXY/CA-trust vars” | Enterprise users behind proxies cannot use MCP tools. |

**Satisfaction signals**: No explicit positive feedback in recent items; activity is fix/feature-driven. Users are **filing bugs and contributing fixes**—healthy engagement but friction in core flows.

---

## 8. Backlog Watch (Stale / Needs Maintainer Attention)
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#2006](https://github.com/nanoclaw/issues/2006) | 103 days (since 2026-04-25) | Breaks install on Debian 12 LXC (common CI/host platform); no fix PR. | Prioritize: add `newgrp docker` or `sg docker -c` in installer, or detect and reboot session. |
| [#2528](https://github.com/nanoclaw/issues/2528) | 80 days (since 2026-05-18) | Signal attachments unusable; blocks multimodal. | Coordinate with [#3156](https://github.com/nanoclaw/pull/3156) merge + container volume mount fix. |
| [#2346](https://github.com/nanoclaw/pull/2346) | 90 days (since 2026-05-08) | Slash-command regression; silent failure. | Small fix—review and merge to unblock command parsing. |
| [#3050](https://github.com/nanoclaw/pull/3050) | 23 days (since 2026-07-14) | New channel (Dial) + wizard; expands integration surface. | Needs core-team review for feature-skill acceptance. |

**Maintainer focus recommended**: #2006 and #2528 are **user-facing regressions** with no merged fix; #2346 is a trivial merge candidate.

---

*Digest generated from GitHub data as of 2026-08-06. Links point to live issues/PRs on `github.com/nanocoai/nanoclaw`.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-06

## 1. Today's Overview
NullClaw saw **no new issues or releases** in the last 24 hours, but **two open pull requests** were submitted by core contributor `raskevichai`. Both PRs target stability fixes in the runtime and channel layers, addressing previously reported issues (#976 and #972). The project remains in active maintenance mode with focused, low-level corrections rather than feature development. Community engagement appears limited to core maintainers at this time.

## 2. Releases
**No new releases** published today.

## 3. Project Progress
**No PRs merged or closed today.** The two open PRs represent ongoing work:
- **#985** — Runtime stack sizing fix for agent turn execution path
- **#984** — Channel polling supervisor resilience improvement

Both are labeled `fix` and reference prior issues, indicating reactive stabilization rather than proactive feature work.

## 4. Community Hot Topics
| Item | Type | Activity | Summary |
|------|------|----------|---------|
| [#985](https://github.com/nullclaw/nullclaw/pull/985) | PR | 0 comments, 0 👍 | Fixes agent turn stack size (was 2 MiB, now 16 MiB) to prevent stack overflow in deep call chains |
| [#984](https://github.com/nullclaw/nullclaw/pull/984) | PR | 0 comments, 0 👍 | Addresses silent channel failure after idle periods by making polling thread failures visible to supervisor |

**Analysis:** Both PRs target **operational reliability** — stack exhaustion in agent execution and undetected channel degradation. Zero community interaction suggests these are internal fixes, not yet surfaced to broader users. Underlying need: **robust long-running agent/gateway operation without manual restarts**.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | Agent turn path stack overflow risk (2 MiB insufficient for deep recursion) | Open | [#985](https://github.com/nullclaw/nullclaw/pull/985) |
| **High** | Telegram/Matrix channels go silent after idle night; supervisor fails to detect dead polling threads | Open | [#984](https://github.com/nullclaw/nullclaw/pull/984) |

**Note:** Both bugs were previously tracked (#976, #972) and now have targeted fixes. No new regressions reported today.

## 6. Feature Requests & Roadmap Signals
**No new feature requests or roadmap discussions** in the last 24h. Current signal: **stability hardening** over feature expansion. If pattern holds, next version will likely be a patch release (e.g., `v0.x.y+1`) bundling these runtime/channel fixes.

## 7. User Feedback Summary
**No direct user feedback** (issues, discussions, reactions) captured in the last 24h. Pain points inferred from fixed bugs:
- Agents crashing or misbehaving under deep call stacks
- Gateway channels failing silently overnight, requiring full restart
- Lack of observability into channel health between restarts

Satisfaction signal: **neutral/unknown** — no user-facing changes shipped recently.

## 8. Backlog Watch
| Item | Age | Concern |
|------|-----|---------|
| [#976](https://github.com/nullclaw/nullclaw/issues/976) (referenced by #985) | Pre-2026-08-05 | Stack size aliasing bug known but unpatched until now |
| [#972](https://github.com/nullclaw/nullclaw/issues/972) (referenced by #984) | Pre-2026-08-05 | Channel supervisor blind spot persisted across releases |

**Maintainer attention needed:** Review and merge **#985** and **#984** promptly — both resolve high-severity stability issues with clear root causes and minimal scope. No other stale critical items visible in current data.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-06

## 1. Today's Overview
IronClaw is in a high-velocity pre-release phase, with **50 PRs updated** and **5 issues active** in the last 24 hours. The project shipped its first release candidate since 1.0.0 (`v1.1.0-rc.1` on 2026-08-03), focusing on extension reach, MCP server registration, IronHub deep-link installs, durable file attachments, and Slack slash commands. Of the 50 active PRs, 17 were merged/closed — indicating strong merge throughput. Work streams span delivery reliability, skills system overhaul, sandbox profiles, design-system foundations, and a program-closure push for the Reborn architecture restructure. No critical regressions or outages were reported today.

## 2. Releases
### `ironclaw-v1.1.0-rc.1` (2026-08-03)
**Headline features:**
- **Extension reach**: Register arbitrary hosted MCP servers; install extensions via IronHub deep links.
- **Durable file attachments** that persist across channels.
- **Slack `/ironclaw` slash commands** for in-channel invocation.
- **Broad failure-legibility pass** — improved error surfaces and observability.

**Breaking changes / migration notes:** None explicitly documented in the release notes. As a release candidate, operators should validate extension registration flows, attachment handling in multi-channel conversations, and Slack command routing before promoting to production. See [release notes](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.1.0-rc.1).

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Scope | Outcome |
|----|-------|---------|
| [#7261](https://github.com/nearai/ironclaw/pull/7261) | CI / Release | **Closed** — Fixed zero-job failure in tag-only release workflow by resolving canary evidence directory from `$RUNNER_TEMP` and extending sabotage contract. |
| [#7196](https://github.com/nearai/ironclaw/pull/7196) | Dependencies (WASM) | **Closed** — Bumped `wasmtime-wasi` (47.0.2→47.0.3), `wit-component`, `wit-parser`. |
| *15 other merged PRs* | (not listed in top-20) | Contributed to delivery recovery, skills refactor, sandbox profiles, and docs/governance. |

**Key advances:**
- **Durable delivery recovery** hardened via stacked PRs [#7028](https://github.com/nearai/ironclaw/pull/7028) (preserve terminal status) and [#7029](https://github.com/nearai/ironclaw/pull/7029) (restore durable delivery claim) — compare-and-swap guarded transitions prevent duplicate vendor egress.
- **Skills system** moving to model-driven activation ([#6745](https://github.com/nearai/ironclaw/pull/6745), [#6938](https://github.com/nearai/ironclaw/pull/6938), [#7171](https://github.com/nearai/ironclaw/pull/7171)) — keyword scorer removed; DB-backed skill mounts; agent-authored skills installable.
- **Sandbox profiles** for Docker and Railway added ([#7214](https://github.com/nearai/ironclaw/pull/7214)) — tenant+user scoped, non-root Python workers.
- **Program closure** for Reborn restructure ([#7263](https://github.com/nearai/ironclaw/pull/7263)) — all WS12 gates ticked, backlog re-owned.
- **Design-system foundations** epic ([#7038](https://github.com/nearai/ironclaw/issues/7038)) advancing with Storybook + AI-first theming proposal.

## 4. Community Hot Topics
| Item | Activity | Signal |
|------|----------|--------|
| [#3036](https://github.com/nearai/ironclaw/issues/3036) *EPIC: Configuration-as-Code for IronClaw Reborn* | 7 comments, 1 👍 (oldest active epic, updated 2026-08-05) | Operators demand declarative, schema-driven tenant blueprints — replacing `.env`, `.system/` docs, settings JSON, and runtime flags with auditable, diffable config. |
| [#6578](https://github.com/nearai/ironclaw/issues/6578) *Epic: Admin-Managed Agents as UserId Subjects* | 1 comment (updated 2026-08-05) | Need for non-human subject identities (product agents, automations) without a second identity hierarchy — critical for enterprise tenancy. |
| [#7265](https://github.com/nearai/ironclaw/issues/7265) *Design proposal: ChannelAdapter proof of vendor non-receipt* | 0 comments (created today) | Type-level guarantee needed for safe automatic reopening of failed outbound deliveries (follow-up to [#7029](https://github.com/nearai/ironclaw/pull/7029)). |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) *Epic: Storybook + AI-first Design System* | 0 comments (updated 2026-08-05) | Backed by full proposal package (PR [#7257](https://github.com/nearai/ironclaw/pull/7257)); governance-aligned UI system for Reborn. |
| [#6993](https://github.com/nearai/ironclaw/issues/6993) *Backend wiring for OOBE automation-tasks* | 0 comments (updated 2026-08-05) | Prototype rolled back; now needs backend implementation for onboarding automation tasks. |

**Underlying needs:** Operators want **configuration-as-code** and **admin-managed non-human identities** to run IronClaw at scale. The delivery-reliability thread ([#7029](https://github.com/nearai/ironclaw/pull/7029) → [#7265](https://github.com/nearai/ironclaw/issues/7265)) shows deep investment in *exactly-once* semantics for channel egress.

## 5. Bugs & Stability
No new crash reports, regressions, or stability incidents were filed in the last 24 hours. The two closed PRs ([#7261](https://github.com/nearai/ironclaw/pull/7261), [#7196](https://github.com/nearai/ironclaw/pull/7196)) addressed a CI flake and routine dependency updates respectively. The stacked delivery-recovery work ([#7028](https://github.com/nearai/ironclaw/pull/7028), [#7029](https://github.com/nearai/ironclaw/pull/7029)) is a *correctness hardening* effort, not a bug fix per se — it adds deterministic regression contracts proving recovered attempts are counted once.

**Watch list:** The WASM sandbox/WASI updates ([#7196](https://github.com/nearai/ironclaw/pull/7196), [#7262](https://github.com/nearai/ironclaw/pull/7262)) and `cargo-component` installer change ([#5101](https://github.com/nearai/ironclaw/pull/5101)) could surface runtime issues in self-hosted canary environments — monitor canary logs.

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Configuration-as-Code (tenant blueprints, use-case harnesses)** | [#3036](https://github.com/nearai/ironclaw/issues/3036) (epic, P2) | High — oldest active epic, direct operator pain |
| **Admin-managed agent subjects (non-human UserIds)** | [#6578](https://github.com/nearai/ironclaw/issues/6578) (epic) | High — enterprise tenancy blocker |
| **Storybook + AI-first Design System (theming, assets, IA)** | [#7038](https://github.com/nearai/ironclaw/issues/7038) (epic, P0) | Medium — proposal evaluated, governance-aligned |
| **OOBE automation-tasks backend** | [#6993](https://github.com/nearai/ironclaw/issues/6993) | Medium — prototype exists, needs wiring |
| **ChannelAdapter vendor non-receipt proof (type-level)** | [#7265](https://github.com/nearai/ironclaw/issues/7265) | Medium — required for safe delivery reopening |
| **APDD governance kit integration** | [#7255](https://github.com/nearai/ironclaw/pull/7255) (docs) | Low-Medium — evaluation phase, phased integration proposed |

**Prediction:** The next patch/minor will likely land **Configuration-as-Code scaffolding** and **admin-managed subjects** — both are epics with clear operator demand and architecture alignment. Design-system work may ship as a separate `design-system` crate first.

## 7. User Feedback Summary
No direct end-user feedback (support tickets, forum posts, surveys) appears in the GitHub data. All signal comes from **operator/contributor issues**:
- **Pain point**: "Hand-edit a mix of `.env`, workspace docs under `.system/...`, settings JSON, extension installs, and runtime flags — with no schema, no diff, no audit trail" ([#3036](https://github.com/nearai/ironclaw/issues/3036)).
- **Pain point**: "Tenant administrators need to create and operate non-human subjects … without inventing a second identity hierarchy or weakening private-user isolation" ([#6578](https://github.com/nearai/ironclaw/issues/6578)).
- **Satisfaction signal**: High PR throughput (50 updated, 17 merged) and structured epic/PR stacking suggest contributors find the codebase approachable and review process functional.
- **Use cases emerging**: Slack slash commands, IronHub deep-link installs, durable cross-channel attachments — all shipping in `rc.1` — indicate real deployment scenarios driving the extension-reach work.

## 8. Backlog Watch (Long-Unanswered / Stalled)
| Item | Age | Risk | Why It Needs Attention |
|------|-----|------|------------------------|
| [#3036](https://github.com/nearai/ironclaw/issues/3036) *Config-as-Code Epic* | **100+ days** (created 2026-04-28) | High | Foundational for operator adoption; blocks declarative tenancy. No PR linked yet. |
| [#6578](https://github.com/nearai/ironclaw/issues/6578) *Admin-Managed Agent Subjects* | **14 days** (created 2026-07-23) | High | Enterprise identity model gap; design discussion needed before implementation. |
| [#5101](https://github.com/nearai/ironclaw/pull/5101) *CI: reuse cargo-component installer in live canary* | **47 days** (created 2026-06-20) | Medium | Canary reliability; pinned installer reduces supply-chain risk. Still open. |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) *Design System Epic* | **3 days** (created 2026-08-03) | Low | P0 scoped but no implementation PRs yet; depends on governance decision. |
| [#6993](https://github.com/nearai/ironclaw/issues/6993) *OOBE Automation Backend* | **5 days** (created 2026-08-01) | Low | Prototype rolled back; clear path but needs owner. |

**Maintainer action suggested:** Assign owners to [#3036](https://github.com/nearai/ironclaw/issues/3036) and [#6578](https://github.com/nearai/ironclaw/issues/6578) this sprint — they are the two highest-impact, longest-open operator epics. Triangulate [#5101](https://github.com/nearai/ironclaw/pull/5101) with the release-canary fixes in [#7261](https://github.com/nearai/ironclaw/pull/7261) to unblock canary stability.

---

*Digest generated from GitHub data as of 2026-08-06. Links point to live GitHub items.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-06

## 1. Today's Overview
LobsterAI shipped **v2026.8.5** yesterday, delivering a native daily check-in experience and enterprise-grade auth isolation. The team closed **10 PRs in 24 hours** — a high throughput day focused on stability (window lifecycle, gateway lock races), UI polish (startup posters, title-bar search), and dependency hygiene. Three active bugs remain open, two filed today around system-prompt duplication and skill-switch persistence, signaling growing friction in the OpenClaw integration layer. Overall velocity is strong, but the backlog shows a stale NIM super-group bug (open since April) and fresh UX regressions that affect every new conversation.

## 2. Releases
### **v2026.8.5** (2026-08-05)
| Change | PR | Type |
|--------|-----|------|
| Native daily check-in experience (activity) | [#2408](https://github.com/netease-youdao/LobsterAI/pull/2408) | ✨ Feature |
| Isolate account-scoped auth & service flows (enterprise) | [#2409](https://github.com/netease-youdao/LobsterAI/pull/2409) | ✨ Feature |
| Style updates | — | 🎨 Style |

**No breaking changes or migration notes documented.** The release is additive; existing configs should continue working.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2437](https://github.com/netease-youdao/LobsterAI/pull/2437) | main, cowork | Hardened window lifecycle & shutdown: drain timer + hard deadline for proxy/preview servers; gated main-window activation on first render | 🛑 Fixes app-hang-on-quit caused by lingering keep-alive sockets |
| [#2436](https://github.com/netease-youdao/LobsterAI/pull/2436) | main, openclaw | Prevented gateway lock-file poisoning from self-restart races (force-kill mid-write, gateway-initiated restart) | 🛑 Eliminates 30 s gateway respawn failures |
| [#2435](https://github.com/netease-youdao/LobsterAI/pull/2435) | renderer, docs, cowork | Added title-bar conversation search button (reuses sidebar search workflow, responsive UI) | ✨ UX improvement — faster session switching |
| [#2439](https://github.com/netease-youdao/LobsterAI/pull/2439) / [#2438](https://github.com/netease-youdao/LobsterAI/pull/2438) | renderer | Updated startup credit poster with close icon & approved artwork | 🎨 Visual polish |
| [#1279](https://github.com/netease-youdao/LobsterAI/pull/1279) / [#1280](https://github.com/netease-youdao/LobsterAI/pull/1280) / [#1281](https://github.com/netease-youdao/LobsterAI/pull/1281) | deps | Bumped `cross-env@10.1.0`, `react-dom@19.2.4`, `vite@8.0.9` (stale dependabot PRs finally merged) | 🔧 Dependency hygiene, unlocks React 19 / Vite 8 features |
| [#2434](https://github.com/netease-youdao/LobsterAI/pull/2434) / [#2431](https://github.com/netease-youdao/LobsterAI/pull/2431) | renderer, docs, main, cowork | `Liuzhq/fix rlog 202683` (details not summarized) | 🔧 Logging/refactor |

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) | Bug | Created & updated today, 0 comments | **Persistent skill-switch state** — directory-name vs. frontmatter-name mismatch silently disables skills; `openclaw.json` full overwrite removes user customization entry point |
| [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) | Bug | Created & updated today, 0 comments | **System-prompt deduplication** — 4.4 KB duplicate block injected every new session (78 % overlap with `AGENTS.md`), wasting context window & confusing model |
| [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) / [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) | Bug + PR | Stale since Apr 2021, updated today | **NIM super-group `@` mention** — hardcoded `teamTypeNum` enum mismatch returns raw IDs instead of group names |

**Analysis:** The two fresh bugs (#2441, #2440) both stem from **OpenClaw–LobsterAI contract drift** — config serialization format and prompt assembly are out of sync. Users cannot persistently slim the system prompt, and skill toggles silently fail. These are high-impact daily-driver issues despite low comment count.

## 5. Bugs & Stability (Reported Today)
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) | System prompt duplicate injection (4,425 chars, 78 % duplication) on every new desktop session | ❌ No PR yet |
| **High** | [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) | Skill switch writes dir name, OpenClaw reads frontmatter `name` → silent failure; `openclaw.json` full overwrite blocks persistent user config | ❌ No PR yet |
| **Medium** | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) | NIM `teamTypeNum` hardcoded wrong for superTeam/team → `@bot` shows raw ID not group name | ✅ PR [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) open (stale) |

**Stability note:** Today’s merged PRs (#2437, #2436) address **critical shutdown/respawn hangs** — likely the top crash vectors in recent telemetry.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| Title-bar conversation search | [#2435](https://github.com/netease-youdao/LobsterAI/pull/2435) (merged) | ✅ Already in v2026.8.5 |
| Persistent, user-editable `openclaw.json` (not full overwrite) | [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) | 🔥 High — blocks skill customization |
| System-prompt deduplication / modular injection | [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) | 🔥 High — affects every session |
| Enterprise auth isolation (account-scoped) | [#2409](https://github.com/netease-youdao/LobsterAI/pull/2409) (released) | ✅ Delivered |
| Daily check-in / gamification | [#2408](https://github.com/netease-youdao/LobsterAI/pull/2408) (released) | ✅ Delivered |

**Prediction:** Next patch will likely hotfix #2440 & #2441 (prompt dedup + skill config persistence) given their per-session impact.

## 7. User Feedback Summary
- **Pain points:**  
  - *“Every new chat forces me to read the same 4 KB instructions twice.”* (#2440)  
  - *“I toggle a skill off, it looks saved, but next session it’s back on — no error, just ignored.”* (#2441)  
  - *“@ing the bot in a super-group shows `123456` instead of ‘Marketing Team’.”* (#1200)
- **Use cases:** Heavy OpenClaw skill users, enterprise multi-account workspaces, NIM super-group communities.
- **Sentiment:** Frustration with silent config failures and context-window waste; appreciation for rapid stability fixes (shutdown, gateway lock).

## 8. Backlog Watch
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) / [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) | 127 days | Stale bug + open PR | One-line enum fix; restores group names for all NIM super-group users. Merge & backport. |
| [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) | 0 days | Open, no PR | Design gap: need `openclaw.json` merge strategy + key-by-frontmatter-name. |
| [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) | 0 days | Open, no PR | Prompt assembly refactor to de-duplicate `AGENTS.md` vs. injected block. |

---
*Digest generated from GitHub data as of 2026-08-06. All links point to netease-youdao/LobsterAI.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-06

---

## 1. Today's Overview

CoPaw (QwenPaw) shows **high development velocity** with 50 PRs and 16 issues updated in the last 24 hours. The project is in active feature development (v2.1 beta) with significant work on **Creator/PawApp capabilities**, **memory/embedding infrastructure**, **provider unification**, and **desktop stability**. No new release shipped today. The ratio of merged/closed PRs (22) to open PRs (28) indicates healthy throughput. Community engagement is moderate—most items have 0–2 comments, suggesting core team drives most changes with limited external discussion.

---

## 2. Releases

**No new releases today.** The latest version remains **2.1.0b2 (beta)**. Users on 2.0.1 stable should expect the next stable to include: unified provider discovery/model routing (#6302), Creator timeline workbench & i18n (#6740), embedding model validation lifecycle (#6741), and desktop Chrome native messaging fixes (#6669).

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#6738](https://github.com/agentscope-ai/QwenPaw/pull/6738) | feat(creator): grounding search, timeline workbench, YOLO reviews, i18n, ASR, reliability hardening | Creator/PawApp | **Major feature batch** — NLE-style timeline, full i18n, App Center unification, ASR, hardened against field bugs |
| [#6669](https://github.com/agentscope-ai/QwenPaw/pull/6669) | fix(desktop): stabilize Chrome native messaging and Windows restore locking | Desktop/Extension | Fixes Windows startup failures from process boundaries & file-lock semantics |
| [#6701](https://github.com/agentscope-ai/QwenPaw/pull/6701) | fix(website): website add blog | Docs/Website | Adds blog to documentation site |
| [#6670](https://github.com/agentscope-ai/QwenPaw/pull/6670) | docs(checkpoint): add checkpoint usage documentation in commands page | Docs | Consolidates checkpoint commands (auto, snapshot, timeline, restore, GC, config, reset) into Magic Commands page |
| [#6716](https://github.com/agentscope-ai/QwenPaw/pull/6716) | Integration test `test_auto_update_persists_targets` fails deterministically (KeyError) | CI/Testing | Test failure blocked nightly; marked invalid/closed — likely superseded by API changes in #6650 |
| [#6452](https://github.com/agentscope-ai/QwenPaw/issues/6452) | [Feature]: 取消“当前模型未检测到多模态能力”的提示 | UX | Closed — multimodal capability warning removed/optimized |
| [#6587](https://github.com/agentscope-ai/QwenPaw/issues/6587) | [Feature]: 桌面应用名“QwenPaw Desktop”改成“QwenPaw” | Branding | Closed — app name shortened |
| [#6454](https://github.com/agentscope-ai/QwenPaw/issues/6454) | [Feature]: 会话中鼠标选定任何内容建议都有个“复制”菜单项 | UX | Closed — context-menu copy added |

**Key advancement:** The Creator/PawApp feature wave (#6738/#6740) is the largest single merged batch, signaling v2.1's focus on **visual/timeline-based agent workflows** and **internationalization**.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|-----|-----------|
| [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | Issue (enhancement) | 3 | 0 | **Automatic model routing** — route each message to best model (local fast, vision, reasoning) instead of fixed per-agent model |
| [#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726) | Issue (bug) | 2 | 0 | **Long-session tool-call overflow** — 20–30+ tool_call/tool_result pairs cause 400 "Messages with role 'tool' must be a response to a preceding message with 'tool_calls'" |
| [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | Issue (bug) | 2 | 0 | **MCP tools periodically stop working** — require Docker container restart; suggests connection/state leak |
| [#6452](https://github.com/agentscope-ai/QwenPaw/issues/6452) | Issue (enhancement) | 2 | 0 | **Multimodal warning UX** — now closed/fixed |
| [#6722](https://github.com/agentscope-ai/QwenPaw/issues/6722) | Issue (bug) | 1 | 0 | **Background forked subagent reports completed when worktree finalization fails** — silent failure |
| [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724) | Issue (enhancement) | 1 | 0 | **Configurable MCP tool-call timeout** — currently no timeout, hung servers stall turns indefinitely |
| [#6728](https://github.com/agentscope-ai/QwenPaw/issues/6728) | Issue (enhancement) | 1 | 0 | **WeChat approval prompts in Chinese** — actions still English ("Approve"/"Deny") post-#6695 |
| [#6736](https://github.com/agentscope-ai/QwenPaw/issues/6736) | Issue (enhancement) | 1 | 0 | **Session title in top-left: visual noise, low value** — closed/fixed |
| [#6737](https://github.com/agentscope-ai/QwenPaw/issues/6737) | Issue (enhancement) | 1 | 0 | **History conversation auto-titles lack semantic clarity** — compare to Hermes |
| [#6731](https://github.com/agentscope-ai/QwenPaw/issues/6731) | Issue (bug) | 1 | 0 | **execute_shell_command crashes with sandbox_config** — `replace() should be called on dataclass instances` |
| [#6730](https://github.com/agentscope-ai/QwenPaw/issues/6730) | Issue (enhancement) | 1 | 0 | **Live artifact canvas** — render agent-generated HTML in side panel |

**Underlying themes:**
1. **Model flexibility** — users want dynamic routing, not pinned models (#6436)
2. **Long-context stability** — tool-call history management breaks at scale (#6726)
3. **MCP reliability** — periodic disconnection, no timeouts (#6732, #6724)
4. **Polish/i18n** — Chinese UX gaps in approvals, titles, copy menus (#6728, #6737, #6454)
5. **Visual workflows** — artifact canvas, timeline workbench demand growing (#6730, #6740)

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726) | Long console sessions with 20–30+ tool calls → 400 error: tool messages not linked to tool_calls. Blocks extended coding/agent workflows. | — |
| **High** | [#6731](https://github.com/agentscope-ai/QwenPaw/issues/6731) | `execute_shell_command` crashes with `TypeError: replace() should be called on dataclass instances` when `sandbox_config` passed. Affects all sandboxed shell execution. | — |
| **High** | [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | MCP tools fail periodically (hours/overnight), require Docker restart. "Unregistered/not found" errors. Connection/state leak suspected. | — |
| **Medium** | [#6722](https://github.com/agentscope-ai/QwenPaw/issues/6722) | Background forked subagent reports `completed` despite worktree finalization failure (Git hook rejection). Silent data loss. | [#6725](https://github.com/agentscope-ai/QwenPaw/pull/6725) (open) |
| **Medium** | [#6716](https://github.com/agentscope-ai/QwenPaw/issues/6716) | Integration test `test_auto_update_persists_targets` fails deterministically with `KeyError: 'auto_update_targets'` on all 4 platforms. Blocked nightly. | Closed as invalid (API changed in #6650) |
| **Low** | [#6452](https://github.com/agentscope-ai/QwenPaw/issues/6452) | Multimodal capability warning too intrusive. | Fixed/closed |
| **Low** | [#6587](https://github.com/agentscope-ai/QwenPaw/issues/6587) | App name "QwenPaw Desktop" → "QwenPaw". | Fixed/closed |

**Critical gaps:** No fix PRs yet for #6726 (session overflow), #6731 (shell crash), #6732 (MCP disconnect). These affect core workflows and should be prioritized.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|----------------------------|-----------|
| **Automatic model routing** | [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | High | Aligns with #6302 (unified provider/model routing) already in PR; natural next step |
| **Configurable MCP tool-call timeout** | [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724) | High | Critical reliability gap; simple config addition |
| **Live artifact canvas (HTML render in side panel)** | [#6730](https://github.com/agentscope-ai/QwenPaw/issues/6730) | Medium | Complements Creator timeline workbench (#6740); visual workflow trend |
| **WeChat approval Chinese i18n** | [#6728](https://github.com/agentscope-ai/QwenPaw/issues/6728) | High | Follow-up to #6695; low effort, high UX value for CN users |
| **History conversation title quality improvement** | [#6737](https://github.com/agentscope-ai/QwenPaw/issues/6737) | Medium | UX polish; compare to Hermes benchmark |
| **Proactive mode stability & tool selection** | [#6712](https://github.com/agentscope-ai/QwenPaw/pull/6712) | High | PR open, ready for review; adds web_search/web_fetch to proactive agent |
| **Embedding model validation & lifecycle** | [#6741](https://github.com/agentscope-ai/QwenPaw/pull/6741) | High | PR open; completes memory/embedding infrastructure |
| **Unified project directories & file workspace** | [#6504](https://github.com/agentscope-ai/QwenPaw/pull/6504) | High | PR open since Jul 27; foundational for coding agents |

**Predicted v2.1 scope:** Model routing, MCP timeouts, Creator timeline/i18n, embedding validation, proactive mode fixes, workspace unification. Artifact canvas may slip to v2.2.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Segment |
|------------|----------|--------------|
| **Session history management breaks at scale** | #6726: 20–30 tool calls → 400 error; users cannot run long coding sessions | Power users, developers using agent for extended tasks |
| **MCP unreliable for production** | #6732: Tools die overnight, require container restart; #6724: no timeout → hung turns | Teams using MCP for custom tooling |
| **Shell tool crash with sandbox** | #6731: `execute_shell_command` + `sandbox_config` = TypeError | Users relying on sandboxed execution |
| **Silent subagent failure** | #6722: Background fork reports success but worktree not finalized | Users of forked background agents |
| **Chinese UX gaps** | #6728: WeChat approval buttons English; #6737: auto-titles poor quality; #6454: no right-click copy (fixed) | Chinese desktop/mobile users |
| **Visual noise / low-value UI** | #6736: Session title top-left "visual interference, no value" (fixed); #6734: "新建聊天" → "新任务" terminology | All desktop users |
| **Model rigidity** | #6436: Want automatic routing — small model for simple, vision for images, big for reasoning | Users with multi-model setups |

**Positive signals:** Quick closure of UX polish issues (#6452, #6587, #6454, #6736) shows responsiveness to desktop user feedback. Creator feature investment (#6740) matches demand for visual/structured agent workflows.

---

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 16 days (opened 2026-07-21) | Open | **Unified provider discovery, model metadata, routing, agent controls** — foundational for #6436 auto-routing; large PR, needs review |
| [#6504](https://github.com/agentscope-ai/QwenPaw/pull/6504) | 10 days (opened 2026-07-27) | Open | **Unify project directories & harden file workspace** — blocks consistent coding-agent experience |
| [#6525](https://github.com/agentscope-ai/QwenPaw/pull/6525) | 9 days (opened 2026-07-28) | Open | **User context透穿透 (Chat API → Agent → Tool → MCP → SKILL CLI)** — critical for multi-tenant/enterprise auth |
| [#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726) | 1 day | Open, **no fix PR** | **Long-session tool-call overflow** — high severity, blocks power users |
| [#6731](https://github.com/agentscope-ai/QwenPaw/issues/6731) | 0 days | Open, **no fix PR** | **Shell sandbox crash** — regression in core tool |
| [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | 0 days | Open, **no fix PR** | **MCP periodic disconnect** — reliability blocker for MCP adopters |
| [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724) | 1 day | Open, **no fix PR** | **MCP timeout config** — simple but critical for production |
| [#6712](https://github.com/agentscope-ai/QwenPaw/pull/6712) | 1 day | Open, "ready-for-human-review" | **Proactive mode refactor** — stability & tool selection; awaiting review |
| [#6721](https://github.com/agentscope-ai/QwenPaw/pull/6721) | 1 day | Open | **Retry reasoning-content errors for AgentScope messages** — provider compatibility |

**Maintainer action recommended:** Prioritize reviews for #6302, #6504, #6525 (large foundational PRs). Assign fix owners for #6726, #6731, #6732 (high-severity bugs with no PR). Merge #6712 (ready for review).

---



</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-06

## 1. Today's Overview
ZeroClaw shows **high governance and architectural activity** with 17 active issues and 50 PRs updated in the last 24 hours. The project is in a **pre-release stabilization phase** (v0.8.5 tracker active, intake frozen since Aug 4) with maintainers processing a heavy RFC backlog—10+ governance/design RFCs are in various review states. No new releases today. The PR queue is dominated by **security hardening** (SSRF gates, WebAuthn validation, forbidden path patterns), **provider/runtime correctness fixes** (OpenRouter streaming, Signal channel, DeepSeek tool-call parsing), and **A2A protocol implementation**. One PR merged/closed in the last 24h. Overall health: **active but bottlenecked on maintainer review capacity**—many PRs carry `needs-author-action` or `needs-maintainer-review` labels.

---

## 2. Releases
**No new releases in the last 24 hours.**  
The active stabilization tracker [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) targets v0.8.5 with a weekly cut cadence through August 30, 2026. Intake froze on August 4.

---

## 3. Project Progress (Merged/Closed PRs Today)
Only **1 PR merged/closed** in the last 24h (per data overview). The merged PR is not individually listed in the top-20 PR feed; the remaining 49 PRs are open. Key **advancing work** in open PRs:

| PR | Area | Status | Significance |
|----|------|--------|--------------|
| [#9743](https://github.com/zeroclaw-labs/zeroclaw/pull/9743) | Providers (OpenAI-compat) | Open, `needs-author-action` | Wires modalities parser into `capabilities_for_model`; enables per-model vision resolution |
| [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) | A2A outbound client | Open, `needs-author-action` | Phase 1 of A2A RFC #9106: tools, wire model v1.0, config block |
| [#9695](https://github.com/zeroclaw-labs/zeroclaw/pull/9695) | Runtime (WeCom) | Open, `needs-author-action` | Strips `<eom>`/`<|eom|>` terminal markers from streaming & non-streaming responses |
| [#9197](https://github.com/zeroclaw-labs/zeroclaw/pull/9197) | CLI/Channels | Open, `needs-author-action` | Connects Ctrl+C to supervisor lifecycle token; fixes restart loop on `zeroclaw channel start` |
| [#9781](https://github.com/zeroclaw-labs/zeroclaw/pull/9781) | Security (WebAuthn) | Open | Validates assertion data: 37-byte header, RP ID hash, User Present flag |
| [#9723](https://github.com/zeroclaw-labs/zeroclaw/pull/9723) | Tool-call parser | Open, `needs-author-action` | Parses DeepSeek DSML and `<|tool_call|>` envelopes |
| [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) | Tools (file_download) | Open, `needs-author-action` | Adds `allowed_private_hosts` opt-in for SSRF gate; fixes trailing-dot hostname handling |
| [#9776](https://github.com/zeroclaw-labs/zeroclaw/pull/9776) | Security (forbidden_paths) | Open | Extends `forbidden_paths` with workspace-relative glob patterns (implements RFC #8424) |
| [#9777](https://github.com/zeroclaw-labs/zeroclaw/pull/9777) | Channels (Signal) | Open | Accepts `sourceUuid` senders; fixes silent drop of phone-number-private senders |
| [#9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737) | Runtime (pipelines) | Open, `needs-author-action` | Enforces agent tool policy in pipeline execution |

---

## 4. Community Hot Topics (Most Active Issues/PRs)
Ranked by comment count (all from issues; PR comment counts not provided in feed):

| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) RFC: Work Lanes, Board Automation, Label Cleanup | 18 | Governance RFC | Reduce maintainer overhead in work routing; automate board transitions; clean label taxonomy. Deferred ratification, rollout in progress since 0.8.0-beta-1. |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) RFC: Goal mode v1 — bounded foreground Matrix work | 18 | Agent/Architecture RFC | Durable multi-turn pursuit of user objectives; decouples restart handoff, channel admission, web, async child work from v1 scope. High risk, needs maintainer review. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Tracker: Maintainer decision queue for RFCs | 11 | Process Tracker | Central queue for RFCs/design issues needing maintainer/code-owner decisions (accept/reject/defer/split). Active triage surface. |
| [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) RFC: Preserve Todo tracker config during ZeroCode ownership migration | 9 | Config/ZeroCode RFC | Ensures Todo tracker configuration survives ZeroCode ownership transfer; consolidation of July review. |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) RFC: Provenance, conversation binding, reply contract for internally initiated agent turns | 9 | Runtime/Architecture RFC | Defines contracts for agent-initiated turns: identity stability, binding concurrency, reply envelopes. Revision 2 posted Aug 5. |

**Underlying theme:** The project is **re-architecting its governance and agent runtime primitives** (work lanes, goal mode, internal turn contracts, A2A, plugin-owned Kanban) while simultaneously hardening security boundaries. Maintainer review bandwidth is the primary constraint.

---

## 5. Bugs & Stability (Reported Today, Ranked by Severity)

| Issue | Severity | Component | Status | Fix PR |
|-------|----------|-----------|--------|--------|
| [#9775](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) OpenRouter streaming drops `provider_extra` | **S1 – workflow blocked** | Provider (OpenRouter) | Open | — |
| [#9774](https://github.com/zeroclaw-labs/zeroclaw/issues/9774) Signal channel drops `sourceUuid`-only senders | **S1 – workflow blocked** | Channel (Signal) | Open | [#9777](https://github.com/zeroclaw-labs/zeroclaw/pull/9777) (open) |
| [#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) Cron-triggered SOPs lack HTTP capability; `shell.exec`/`notify.channel` placeholders unsatisfiable | **Functional gap** | SOP / Runtime | Open | — |
| [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) `sops_dir` documented default not honored; SOP engine silently never loads | **Silent failure** | SOP / Daemon | Open | — |
| [#9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477) Tool-call parser: recover invocations wrapped in `<tools>` tag | **Parsing bug** | Runtime (tool-call-parser) | Open PR | [#9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477) |
| [#9723](https://github.com/zeroclaw-labs/zeroclaw/pull/9723) DeepSeek DSML/`<|tool_call|>` envelopes not parsed | **Parsing bug** | Runtime (tool-call-parser) | Open PR | [#9723](https://github.com/zeroclaw-labs/zeroclaw/pull/9723) |

**Note:** Two S1 bugs filed today (#9775, #9774) with a fix PR already open for the Signal issue. The SOP issues (#9780, #9779) reveal **documentation-implementation drift** in a recently documented feature.

---

## 6. Feature Requests & Roadmap Signals
Strong signals from open RFCs and tracker issues:

| Signal | Likelihood for v0.8.5 / Near-term | Evidence |
|--------|-----------------------------------|----------|
| **A2A outbound client (Phase 1)** | High — PR #9324 is large, reviewed, implements RFC #9106 positions | [PR #9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324), RFC #9106 |
| **Workspace-relative `forbidden_paths` globs** | High — PR #9776 implements RFC #8424 | [PR #9776](https://github.com/zeroclaw-labs/zeroclaw/pull/9776), [Issue #8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) |
| **OpenRouter prompt caching via `session_id`** | Medium — Feature request #9631, cost-saving driver | [Issue #9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) |
| **Goal mode v1 (bounded Matrix work)** | Medium — RFC #8303 active, high risk, decoupled scope | [Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) |
| **Plugin-owned Kanban board for agent work** | Low-Medium — RFC #8832, opt-in, plugin-domain design | [Issue #8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) |
| **Computer-use (desktop screen/input control)** | Low — RFC #6909, security-sensitive, sidecar architecture | [Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) |
| **Unified package/capability/catalog contract** | Low — RFC #9346, depends on narrower catalogs (#8908, #8909) | [Issue #9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) |

**Prediction:** v0.8.5 will likely ship **A2A Phase 1**, **forbidden_paths globs**, and the **security/stability fixes** currently in PR review. Goal mode and Kanban are post-0.8.5.

---

## 7. User Feedback Summary (Pain Points & Use Cases)
Extrapolated from issues filed today and recent RFC discussions:

| Pain Point | Source | User Impact |
|------------|--------|-------------|
| **OpenRouter streaming breaks `provider_extra`** → wasted spend, broken tool calls | [#9775](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) | Direct cost & workflow failure for OpenRouter users |
| **Signal messages from privacy-enabled senders vanish silently** | [#9774](https://github.com/zeroclaw-labs/zeroclaw/issues/9774) | Missed messages, no error surface |
| **Cron SOPs documented as "watch-loops" but cannot do network work** | [#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) | Feature gap vs. docs; operators cannot build polling integrations |
| **`sops_dir` default documented but ignored → SOPs silently disabled** | [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) | Silent failure, hours of debugging |
| **ZeroCode ownership migration loses Todo tracker config** | [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) | Configuration drift during migration |
| **OpenRouter prompt caching unsupported → 10× cost on long conversations** | [#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) | Economic pressure for heavy users |
| **Workspace-internal sensitive files (`.env`, `config.yaml`) not protected by `forbidden_paths`** | [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | Security exposure for repo-local secrets |

**Satisfaction signal:** Users are **filing precise, high-severity bugs** and **sponsoring RFCs**—indicates deep investment but frustration with silent failures and doc/code drift.

---

## 8. Backlog Watch (Long-Unanswered / Needs Maintainer Attention)

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) RFC: Work Lanes, Board Automation, Label Cleanup | Since **2026-05-20** (78 days) | Governance foundation; "ratification deferred / rollout in progress" | Maintainer bandwidth; RFC complexity |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) RFC: Provenance, conversation binding, reply contract | Since **2026-05-26** (72 days) | Core agent runtime contract; Revision 2 just posted Aug 5 | Requires architectural consensus |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) RFC: Computer-use support for desktop interaction | Since **2026-05-25** (73 days) | High-value capability; security-sensitive | Security review, sidecar design |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) RFC: Goal mode v1 | Since **2026-06-24** (43 days) | Major agent UX evolution; high risk | Scope decoupling, maintainer review |
| [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) RFC: Workspace-relative forbidden paths | Since **2026-06-28** (39 days) | Security hardening; PR #9776 ready | Final maintainer sign-off |
| [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) RFC: Plugin-owned Kanban board | Since **2026-07-08** (29 days) | Extensibility model for agent coordination | Depends on generic host capabilities |
| [#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) RFC: Unified catalog contract | Since **2026-07-24** (13 days) | Product-level integration surface | Depends on #8908, #8909 |
| [#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) RFC: Anthropic stored-profile OAuth alias | Since **2026-07-27** (10 days) | Auth UX for Anthropic users | Narrow contract, needs confirmation |

**Critical observation:** The **maintainer decision queue tracker [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** exists precisely because this backlog exceeds review capacity. Several RFCs have `needs-maintainer-review` + `needs-author-action` simultaneously—indicating **ping-pong latency** between authors and reviewers.

---

## Summary Health Indicators
| Metric | Signal |
|--------|--------|
| **Release cadence** | Stabilization-only (v0.8.5), no feature releases imminent |
| **PR throughput** | High volume (50 updated), low merge rate (1/24h) — review bottleneck |
| **Security posture** | Actively hardening (WebAuthn, SSRF, forbidden_paths, Signal auth) |
| **Architectural velocity** | High RFC count (10+ active), but

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*