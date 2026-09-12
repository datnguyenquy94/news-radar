# OpenClaw Ecosystem Digest 2026-09-12

> Issues: 149 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-12 04:14 UTC

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

# OpenClaw Project Digest — 2026-09-12

## 1. Today's Overview

OpenClaw shows **exceptionally high velocity** with 500 PRs and 149 issues updated in the last 24 hours — a volume suggesting either a major release push, automated bot activity, or coordinated sprint. No new release was cut today. The open/active issue count (76) nearly matches closed (73), indicating steady throughput. Critical-path blockers dominate: update failures on 2026.9.3→2026.9.4, Doctor migration regressions, zombie process leaks, and session-state loss. Maintainer-authored PRs (steipete, roboclaw-bot, openclaw-mantis[bot]) target performance, UI, and migration fixes, signaling active triage.

## 2. Releases

**No new releases today.** The latest version remains **2026.9.3** (referenced in multiple update-failure issues). Users report failed updates to 2026.9.4 with errors: `runtime-verification-failed` ([#145510](https://github.com/openclaw/openclaw/issues/145510)), `doctor-failed` ([#145491](https://github.com/openclaw/openclaw/issues/145491)), `fetch-failed` ([#145494](https://github.com/openclaw/openclaw/issues/145494)), and schema-migration mismatches ([#144739](https://github.com/openclaw/openclaw/issues/144739)).

## 3. Project Progress (Merged/Closed PRs Today)

221 PRs merged/closed. Highlights from maintainer-merged PRs:

| PR | Area | Summary |
|----|------|---------|
| [#145576](https://github.com/openclaw/openclaw/pull/145576) | observability | Reduce Prometheus logging overhead on busy gateways (merged) |
| [#145215](https://github.com/openclaw/openclaw/pull/145215) | update/doctor | Promote Doctor config migrations after successful repair (closed — needs proof) |
| [#144378](https://github.com/openclaw/openclaw/pull/144378) | providers | Refresh bundled DeepSeek V4.1 model catalog (closed) |
| [#145494](https://github.com/openclaw/openclaw/pull/145494) | update | Update failure: fetch-failed on 2026.9.3 (closed — maintainer) |

Multiple PRs address the 2026.9.3→2026.9.4 update pipeline: [#145043](https://github.com/openclaw/openclaw/pull/145043) (prevent stale Codex migrations blocking upgrades), [#145456](https://github.com/openclaw/openclaw/pull/145456) (verify startup repair), [#145349](https://github.com/openclaw/openclaw/pull/145349) (preserve matching artifact no-op).

## 4. Community Hot Topics (Most Discussed)

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Issue (P1) | 16 | **Zombie process leak** — hook/tool children unreaped, degrades runtime over time |
| [#142585](https://github.com/openclaw/openclaw/issues/142585) | Issue (P0) | 15 | **Doctor blocks valid legacy workspace migration** — canonical rows absent, migration refused |
| [#96007](https://github.com/openclaw/openclaw/issues/96007) | Issue (P2, closed) | 10 | Discord message truncation after inline error — content loss |
| [#59662](https://github.com/openclaw/openclaw/issues/59662) | Issue (P2, closed) | 7 | Anthropic Max usage alerts delivered as assistant messages — pollutes conversation |
| [#59618](https://github.com/openclaw/openclaw/issues/59618) | Issue (P2, closed) | 7 | Auto-compaction abandons in-flight task execution silently |

**Pattern:** Migration/upgrade reliability (Doctor, schema, workspace state) and message/session integrity dominate discussion. Users hit **release-blocker** regressions on recent versions.

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **P0 — Release Blocker** | [#142585](https://github.com/openclaw/openclaw/issues/142585) Doctor refuses valid legacy workspace/attestation import | Open | No |
| **P0 — Release Blocker** | [#145510](https://github.com/openclaw/openclaw/issues/145510) Update failure: runtime-verification-failed (2026.9.3→2026.9.4) | Open | No |
| **P0 — Release Blocker** | [#145491](https://github.com/openclaw/openclaw/issues/145491) Update failure: doctor-failed (2026.9.3) | Open | No |
| **P0 — Release Blocker** | [#144739](https://github.com/openclaw/openclaw/issues/144739) npm update runs 2026.9.3 against schema-17 candidate state | Open | No |
| **P1 — Crash Loop** | [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie process accumulation from hook/tool children | Open | No |
| **P1 — Crash Loop** | [#134993](https://github.com/openclaw/openclaw/issues/134993) Gateway pegs CPU (busy loop in filesystem discovery) with large skill fleet | Open | No |
| **P0 — Data Loss** | [#142586](https://github.com/openclaw/openclaw/issues/142586) Doctor detects orphan FKs but provides no recovery path | Open | No |
| **P1 — Security** | [#112475](https://github.com/openclaw/openclaw/issues/112475) Device pairing recovery fails after removal | Open | No |
| **P2 — Session Loss** | [#111469](https://github.com/openclaw/openclaw/issues/111469) Tool outputs silently discarded as empty strings in long sessions | Closed | — |
| **P2 — Message Loss** | [#96007](https://github.com/openclaw/openclaw/issues/96007) Discord subsequent content truncated after inline error | Closed | — |

**Note:** Several P0 update failures ([#145510](https://github.com/openclaw/openclaw/issues/145510), [#145491](https://github.com/openclaw/openclaw/issues/145491), [#145494](https://github.com/openclaw/openclaw/issues/145494)) were filed **today** — indicates a problematic 2026.9.4 rollout.

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Signals |
|---------|----------|---------|
| **Collaborative markdown editor (Canvas embed)** | [#77798](https://github.com/openclaw/openclaw/issues/77798) (6👍, closed) | ChatGPT Canvas parity; render-only → editable |
| **Session fork/resume/continue** | [#59109](https://github.com/openclaw/openclaw/issues/59109) (5👍, closed) | Parity with open-agent-sdk; multi-branch workflows |
| **Shared memory DB for multi-agent** | [#144699](https://github.com/openclaw/openclaw/pull/144699) (PR open) | Active PR — deduplicate storage, consistent search |
| **Team mode: show all agents/sessions in sidebar** | [#141476](https://github.com/openclaw/openclaw/pull/141476) (PR open) | Multi-agent UX; stacked on roster-first home |
| **Inline browser panels in Tauri companion** | [#145572](https://github.com/openclaw/openclaw/pull/145572) (PR open) | Native browser surface for Linux/Windows parity with macOS |
| **Native approval buttons for Feishu/Teams/Mattermost** | [#104521](https://github.com/openclaw/openclaw/issues/104521) | Transport-rich approval UX beyond text commands |
| **Plugin tool custom emoji for Discord** | [#97184](https://github.com/openclaw/openclaw/issues/97184) (closed) | Observability/UX for plugin-tool progress |

**Prediction:** Shared memory DB ([#144699](https://github.com/openclaw/openclaw/pull/144699)), team-mode sidebar ([#141476](https://github.com/openclaw/openclaw/pull/141476)), and Tauri inline browser ([#145572](https://github.com/openclaw/openclaw/pull/145572)) are closest to landing — all have maintainer-authored PRs in "ready for maintainer look" state.

## 7. User Feedback Summary

**Pain Points (from issues):**
- **Upgrade fragility:** Multiple users on 2026.7.1→2026.9.3→2026.9.4 path hit Doctor migration blocks, schema mismatches, orphan FKs, and verification failures ([#142585](https://github.com/openclaw/openclaw/issues/142585), [#142586](https://github.com/openclaw/openclaw/issues/142586), [#145510](https://github.com/openclaw/openclaw/issues/145510), [#144739](https://github.com/openclaw/openclaw/issues/144739))
- **Session/message loss:** Discord truncation ([#96007](https://github.com/openclaw/openclaw/issues/96007)), auto-compaction abandonment ([#59618](https://github.com/openclaw/openclaw/issues/59618)), tool output truncation in long sessions ([#111469](https://github.com/openclaw/openclaw/issues/111469))
- **Resource leaks:** Zombie processes degrade runtime over hours/days ([#97616](https://github.com/openclaw/openclaw/issues/97616))
- **Accessibility gaps:** 13 screen-reader barriers in setup ([#126876](https://github.com/openclaw/openclaw/issues/126876)) — reported by blind user
- **Shared workspace breakage:** fs-safe hardcodes 0o600 ignoring umask ([#114158](https://github.com/openclaw/openclaw/issues/114158))

**Positive Signals:**
- Maintainer responsiveness: steipete authored 8+ PRs today across perf, update, UI, auth
- Automated i18n sync via openclaw-mantis[bot] ([#145410](https://github.com/openclaw/openclaw/pull/145410))
- Community reproductions: several issues include `clawsweeper:source-repro` or `proof: sufficient` tags

## 8. Backlog Watch (Stale but Critical)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie process leak | 75 days (P1) | Runtime degradation → crash loop; no fix PR |
| [#112475](https://github.com/openclaw/openclaw/issues/112475) Device pairing recovery fails | 52 days (P0, security) | Blocks permission upgrades; fails open? |
| [#114158](https://github.com/openclaw/openclaw/issues/114158) fs-safe ignores umask | 48 days (P2, security) | Breaks NFS/SMB/multi-user workspaces |
| [#112313](https://github.com/openclaw/openclaw/issues/112313) Dead-letter queue permanent | 53 days (P2) | Failed deliveries never retryable/clearable |
| [#126876](https://github.com/openclaw/openclaw/issues/126876) Accessibility: 13 screen-reader barriers | 23 days (P0) | First blind user install audit; 4 fixes would unblock |
| [#75187](https://github.com/openclaw/openclaw/issues/75187) AGENTS.md tool-use rules truncated | 135 days (P2) | Bootstrap truncation strips critical guidance |
| [#59736](https://github.com/openclaw/openclaw/issues/59736) Add Makefile/justfile for DX | 163 days (P3) | 80+ npm scripts undiscoverable |
| [#59728](https://github.com/openclaw/openclaw/issues/59728) Organize 150+ scripts/ files | 163 days (P3) | No taxonomy in scripts/ directory |

---

**Health Assessment:** 🟡 **Elevated Risk** — High velocity but clustered P0 update/migration failures on current release candidate (2026.9.4), plus long-standing P1 zombie leak and accessibility gaps. The 221 merged PRs show throughput, but release-blocker density suggests 2026.9.4 may need a hotfix or rollback. Watch [#145510](https://github.com/openclaw/openclaw/issues/145510), [#142585](https://github.com/openclaw/openclaw/issues/142585), [#97616](https://github.com/openclaw/openclaw/issues/97616) for resolution velocity.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Ecosystem (2026-09-12)

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape shows **bimodal maturity**: a tier of highly active, production-grade frameworks (OpenClaw, Hermes Agent, CoPaw/QwenPaw, ZeroClaw, NanoClaw, NanoBot) shipping weekly patches and major features, contrasted with early-stage or dormant projects (NullClaw, IronClaw, ZeptoClaw, Moltis). **Migration/upgrade reliability**, **multi-agent orchestration**, **provider extensibility**, and **desktop/web UX parity** are the dominant cross-cutting concerns. Release cadence is accelerating—three projects cut patches in the last 48 hours—yet **release-blocker density** (OpenClaw, Hermes, CoPaw) signals growing pains as architectures scale beyond single-user, single-session models.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Latest Release | Health Score |
|---------|--------------|-----------|-------------------|----------------|--------------|
| **OpenClaw** | 149 | 500 | 221 | 2026.9.3 (2026.9.4 failing) | 🟡 Elevated Risk |
| **NanoBot** | 3 | 33 | 18 | Pre-patch (fixes merged) | 🟢 Healthy |
| **Hermes Agent** | 13 | 50 | 4 | v0.21.2 (2026-09-11) | 🟡 Stabilizing |
| **PicoClaw** | 4 | 2 | 1 | Nightly only | 🟡 Moderate |
| **NanoClaw** | 5 | 38 | 8 | v2.3.0 (patches pending) | 🟢 Active Dev |
| **NullClaw** | 0 | 0 | 0 | — | ⚫ Dormant |
| **IronClaw** | 0 | 0 | 0 | — | ⚫ Dormant |
| **LobsterAI** | 3 | 6 | 4 | Not indicated | 🟡 Hardening |
| **Moltis** | 1 | 1 (updated) | 0 | None recent | 🟡 Quiet |
| **CoPaw/QwenPaw** | 21 | 25 | 9 | v2.2.1 (2026-09-11) | 🟢 Strong Cadence |
| **ZeptoClaw** | 0 | 0 | 0 | — | ⚫ Dormant |
| **ZeroClaw** | 5 | 50 | 2 | Continuous (master) | 🟡 Pre-Stabilization |

> **Note:** PR counts include all updates (opened, synchronized, merged, closed). "Merged/Closed" reflects net progress.

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale & Throughput**: 500 PRs/24h dwarfs all peers (next: ZeroClaw at 50). Indicates massive contributor base or sophisticated automation.
- **Observability & Infra Maturity**: Prometheus logging optimization (#145576), Doctor migration tooling, schema versioning—production-grade ops tooling absent in most projects.
- **Multi-Transport Architecture**: Native Discord, Feishu, Teams, Mattermost, Slack, Telegram channels with approval UX—broadest enterprise integration.

**Technical Approach Differences:**
- **Doctor-Centric Upgrade Model**: Automated migration/repair (Doctor) is core to OpenClaw's release strategy; peers rely on manual config migration or simpler version checks.
- **Session-State as First-Class Citizen**: Zombie process leaks (#97616), session-state loss (#111469), schema-migration mismatches (#144739) reveal deep investment in persistent, resumable agent sessions—most peers treat sessions as ephemeral.
- **Skill/Plugin Fleet at Scale**: 150+ scripts, 80+ npm scripts, filesystem discovery bottlenecks (#134993) indicate OpenClaw operates at **fleet scale** (hundreds of skills/agents) while peers target single-digit agent counts.

**Community Size**: 76 open issues ≈ 73 closed (24h) + 16 comments on top issue (#97616) + maintainer bot activity (steipete, roboclaw-bot, openclaw-mantis[bot]) → **largest active community**, but also highest support burden.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Upgrade/Migration Reliability** | OpenClaw, Hermes Agent, LobsterAI, CoPaw | Doctor/session-store corruption (OpenClaw #142585, Hermes #102163), config reset on restart (LobsterAI #1006), subagent_model regression (CoPaw #7676) |
| **Provider Extensibility (OpenAI-Compatible)** | PicoClaw, NanoBot, Moltis, CoPaw | Generic "OpenAI Compatible" provider slot (PicoClaw #3366), AnySearch vendor PR (NanoBot #5505), Requesty PR (Moltis #1143), Serply/Atlas Cloud (CoPaw #7711, #6499) |
| **Multi-Agent / Team Orchestration** | OpenClaw, Hermes, NanoClaw, CoPaw, ZeroClaw | Shared memory DB (OpenClaw #144699), profile isolation (Hermes #108501), per-group delivery (NanoClaw #3713), Hub multi-tenant (CoPaw #7318), principal-owned sessions (ZeroClaw #10265) |
| **Desktop/Web UX Parity & Accessibility** | OpenClaw, Hermes, CoPaw, ZeroClaw | Screen-reader barriers (OpenClaw #126876), scrollbar/keyboard/HUD fixes (Hermes #108791-93, #108796-99), mobile stop button/UX (CoPaw #7177, #7567), TUI Delete/Backspace (ZeroClaw #10796, #10795) |
| **Real-Time Voice/Streaming** | Hermes, NanoClaw, CoPaw | GPT-Live-1 voice channel (NanoClaw #3764, #3772), Copilot ACP voice (Hermes #108787), visual compaction (CoPaw #7703) |
| **Windows/ARM Compatibility** | NanoBot, PicoClaw, LobsterAI, ZeroClaw | Headless auth (NanoBot #5726), RKLLM on ARM (PicoClaw #3346), native module junction fix (LobsterAI #2653), CI flakiness (ZeroClaw #10793, #10794) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | CoPaw/QwenPaw | ZeroClaw | NanoBot | NanoClaw | PicoClaw | LobsterAI |
|-----------|----------|--------------|---------------|----------|---------|----------|----------|-----------|
| **Primary Target** | Enterprise/DevOps fleets | Local-first power users | Consumer + Team (Hub) | Security-first orgs | Self-hosted automation | Lightweight groups | Embedded/ARM + China enterprise | Chinese enterprise (Youdao) |
| **Architecture** | Monorepo, gateway + skills fleet | Desktop (Tauri) + gateway + kanban | Monorepo, Hub multi-tenant | Capability-based, OIDC-native | Modular channels/providers | CLI-first, skill-as-container | Lightweight Go + TS frontend | Electron + OpenClaw fork |
| **Session Model** | Persistent, migratable, schema-versioned | Profile-isolated, SQLite (state.db) | Grouped sessions, proactive memory | Principal-owned, storage-plane isolated | Conversation-centric | Agent-group envelopes | Simple chat history | Workspace-per-agent (broken) |
| **Auth/Security** | Device pairing, Doctor attestation | Custom endpoint API keys | Hub RBAC (roadmap), .master_key | **OIDC/RFC 7141 (in flight)** | OAuth2 (MS, Google), Bot API | Egress grants, plugin ceremonies | Feishu/Slack OAuth | Basic config, no SSO |
| **Provider Strategy** | Bundled catalog (DeepSeek V4.1), Doctor migrations | Local runtime + custom endpoints | Per-agent routing, fallback, ReMe memory | Dynamic context compaction, model-window ratio | Provider registry, wire-format guards | Capability installer, remote storage | Hardcoded providers, seeking abstraction | OpenClaw upstream + patches |
| **Key Differentiator** | **Fleet-scale upgrade automation** | **Kanban automation + local privacy** | **Hub multi-tenant + memory models** | **Canonical principals + inbound auth** | **Channel/provider extensibility** | **Skill-as-systemd-container** | **ARM/Feishu/Slack focus** | **Chinese enterprise integration** |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Tier 1: Rapid Iteration at Scale** | OpenClaw, ZeroClaw, CoPaw/QwenPaw | 50+ PRs/day, stacked PR chains, release-blocker triage, major milestones (OIDC, Hub, Doctor) in flight |
| **Tier 2: Stable Cadence, Feature Expansion** | NanoBot, NanoClaw, Hermes Agent | 20-40 PRs/day, regular patches, clear roadmaps (voice, providers, desktop polish), growing contributor base |
| **Tier 3: Focused Hardening** | LobsterAI, PicoClaw | <10 PRs/day, fixing critical regressions (Windows, persistence), niche platform focus, smaller teams |
| **Tier 4: Low/No Activity** | Moltis, NullClaw, IronClaw, ZeptoClaw | <1 PR/week, no releases >30 days, likely archived or pre-launch |

**Velocity Leaders**: OpenClaw (500 PRs), ZeroClaw (50 PRs), CoPaw (25 PRs) — all maintaining **>10:1 PR:Issue ratios**, indicating fix-heavy workflows.

**Stabilization Signals**: Hermes (v0.21.2 patch in 12 days), CoPaw (v2.2.1 + 9 hotfix PRs), NanoBot (18 merged fixes) — all shipping **patches within days of regressions**.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Upgrade Automation is a Competitive Moat** | OpenClaw Doctor, Hermes state.db, LobsterAI config reset, CoPaw subagent_model regression | **Invest in migration tooling early**; manual config migration breaks trust at scale. Projects without Doctor-like systems will hit adoption ceilings. |
| **Multi-Agent ≠ Multi-Session** | OpenClaw shared memory DB, NanoClaw per-group delivery, ZeroClaw principal-owned sessions, CoPaw Hub RBAC | **Architect for agent identity & isolation from Day 1**; retrofitting multi-tenancy into single-user session stores causes data-loss bugs (LobsterAI #2293, Hermes #108501). |
| **Provider Abstraction → OpenAI-Compatible Standard** | 5 projects adding generic OpenAI-compatible slots; vendor PRs (AnySearch, Requesty, Serply, Atlas) | **Build provider SDK around OpenAI Responses API**; custom wire formats (DeepSeek reasoning, Gemini imageConfig) are maintenance traps. |
| **Desktop/Web Parity is Table Stakes** | Hermes Tauri scrollbar/HUD, CoPaw mobile stop button, ZeroClaw TUI Delete/Backspace, OpenClaw accessibility | **Allocate 20%+ frontend budget to accessibility & input handling**; "it works on my Mac" fails enterprise procurement. |
| **Security Shifts from "Plugin Sandbox" to "Identity-Aware Runtime"** | ZeroClaw OIDC/RFC 7141, NanoBot gateway shutdown, LobsterAI junction traversal, CoPaw .master_key hardening | **Design for authenticated principals + capability grants**; plugin sandbox escapes (LobsterAI #2653) and path traversal (ZeroClaw #10381) are now CVEs waiting to happen. |
| **Voice/Streaming is the Next UX Frontier** | NanoClaw GPT-Live-1, Hermes Copilot ACP, CoPaw visual compaction | **Prototype real-time voice now**; latency budgets, interruption handling, and transcript sync require architectural changes (not just UI). |
| **China Enterprise Drives Distinct Requirements** | PicoClaw Feishu/9Router, LobsterAI Youdao integration, CoPaw Chinese UX | **Plan for on-prem LLM routers, Feishu/DingTalk, and PII-locality** if targeting APAC; not addressed by Western-centric projects. |

---

## Summary for Decision-Makers

- **For Production Deployment Today**: **NanoBot** (high fix velocity, clean provider model) or **CoPaw/QwenPaw** (strong release hygiene, Hub roadmap) offer the best stability/feature balance.
- **For Fleet/Enterprise Scale**: **OpenClaw** leads on automation but carries **elevated risk** until 2026.9.4 update blockers resolve; monitor #142585, #145510, #97616.
- **For Security-First Orgs**: **ZeroClaw**'s OIDC milestone (#8289) is the most ambitious—track PR chain merge velocity; not yet production-ready.
- **For Local-First/Privacy**: **Hermes Agent** has the clearest local-runtime story but needs 1-2 more patches (v0.21.3+) for desktop polish.
- **Avoid**: NullClaw, IronClaw, ZeptoClaw (dormant); Moltis (minimal maintainer bandwidth).

**Bottom Line**: The ecosystem is **consolidating around three patterns**—fleet automation (OpenClaw), identity-native runtime (ZeroClaw), and multi-tenant Hub (CoPaw)—with provider extensibility and upgrade reliability as the universal differentiators. Projects that solve **migration without data loss** and **multi-agent identity** will define the next generation.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-12

## 1. Today's Overview
NanoBot shows **high development velocity** with 33 PRs updated in the last 24 hours (18 merged/closed), indicating active maintenance and feature delivery. The project is currently in a **stabilization and platform-expansion phase**—multiple PRs address WebUI performance, email/Telegram channel hardening, provider reliability, and new provider integrations. No new release was cut today, but the volume of merged fixes (especially P1/P2 bugs) suggests a release candidate may be imminent. Community engagement is moderate: three new issues (two from the AnySearch team, one user support question) and several long-running PRs finally moving toward merge.

## 2. Releases
**No new releases published today.** The latest version remains the prior stable release. Given 18 PRs merged/closed in 24h—including critical fixes for provider failover (#5675), gateway shutdown (#5215), WebUI history replay (#5745), and binary data leakage (#5741)—a patch release (e.g., `v0.x.y+1`) is likely within days. Watch for changelog entries covering:
- Provider fallback reliability after runner deadlines
- WebUI large-history performance (incremental, cached replay)
- Email channel OAuth2 (Microsoft delegated) and alias filtering
- Gemini/DeepSeek wire-format fixes

## 3. Project Progress — Merged/Closed PRs Today (Key Items)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#5744](https://github.com/HKUDS/nanobot/pull/5744) | chore: remove core agent line count script | Housekeeping | Removes dead tooling; no user impact |
| [#5356](https://github.com/HKUDS/nanobot/pull/5356) | feat(webui): improve setup flows across chat channels (NAN-112) | WebUI, Channels | **Major UX upgrade**: grouped catalog, serialized installs, localized copy; unblocks multi-channel onboarding |
| [#5214](https://github.com/HKUDS/nanobot/pull/5214) | fix(providers): keep DeepSeek reasoning items wire-valid | Providers | Fixes OpenAI Responses API deserialization errors with DeepSeek reasoning traces |
| [#5230](https://github.com/HKUDS/nanobot/pull/5230) | fix(gemini): preserve imported tool calls with signature fallback | Providers | Enables conversation transfer *to* Gemini from non-Gemini providers |
| [#5216](https://github.com/HKUDS/nanobot/pull/5216) | fix(image): send Gemini Flash hints via generationConfig.imageConfig | Providers | Unblocks Gemini Flash image models (400 INVALID_ARGUMENT on aspect/size hints) |
| [#5215](https://github.com/HKUDS/nanobot/pull/5215) | fix(gateway): close agent resources deterministically on stop | Gateway | Eliminates asyncio teardown noise and shutdown stalls (MCP/exec subprocesses) |
| [#5742](https://github.com/HKUDS/nanobot/pull/5742) | fix(webui): restore navigation after automation deletion | WebUI | Fixes sidebar/page freeze after deleting an automation (dialog/menu interaction lock) |
| [#5741](https://github.com/HKUDS/nanobot/pull/5741) | fix(webui): omit binary data from tool progress | WebUI, Perf | Stops multi-MB base64 images leaking into WS progress frames & replay bandwidth |
| [#5255](https://github.com/HKUDS/nanobot/pull/5255) | Draft: truthful API service status for externally-managed servers | API, WebUI | **Closed as draft**—work likely continues elsewhere; addresses misleading “API Off” status for self-hosted `nanobot serve` |

**Net progress**: 9 PRs merged/closed today, heavily weighted toward **provider correctness**, **WebUI stability/performance**, and **gateway lifecycle hygiene**. The long-open channel/WebUI overhaul (#5356) finally landed.

## 4. Community Hot Topics
| Item | Type | Comments | Signals |
|------|------|----------|---------|
| [#5505](https://github.com/HKUDS/nanobot/issues/5505) | Issue (closed) | 8 | **AnySearch integration** — vendor team actively contributing; PR submitted for web_search provider (key-optional, anonymous quota). Closed likely because PR opened. |
| [#5726](https://github.com/HKUDS/nanobot/issues/5726) | Issue (open, P1) | 2 | **Headless server initial password** — user stuck on WebUI auth after installing on headless box; needs documented default or setup flow for no-JS environments. |
| [#5731](https://github.com/HKUDS/nanobot/issues/5731) | Issue (open) | 0 | **AnySearch extract as web_fetch backend** — follow-up from same vendor; extends integration to content extraction. |
| [#5495](https://github.com/HKUDS/nanobot/pull/5495) | PR (open) | — | **Native Linear agent channel** — OAuth + PKCE, webhook queue, WebUI setup; large feature, marked `conflict` (needs rebase). |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | PR (open) | — | **Telegram custom Bot API base URL** — enables self-hosted/enterprise gateways; open since Jul, still `conflict`. |

**Underlying needs**: 
- **Extensibility**: Vendors (AnySearch) want first-class provider/channel slots; users want self-hosted Telegram gateways.
- **Operability**: Headless deployments need documented auth bootstrap (Issue #5726).
- **Review bandwidth**: Large channel PRs (#5495, #4919) stall on conflicts—maintainer triage needed.

## 5. Bugs & Stability — Today’s Reports & Fixes
| Severity | Issue/PR | Summary | Fix Status |
|----------|----------|---------|------------|
| **P1** | [#5726](https://github.com/HKUDS/nanobot/issues/5726) | Headless install: no initial password for WebUI | **Open** — no PR yet; impacts new user onboarding |
| **P1** | [#5675](https://github.com/HKUDS/nanobot/pull/5675) | Model failover blocked by runner deadline (primary hangs, fallback never tried) | **Open PR** — fix isolates deadline per-model; needs review |
| **P1** | [#5215](https://github.com/HKUDS/nanobot/pull/5215) | Gateway shutdown stalls on running MCP/exec subprocesses | **Merged** — deterministic resource close |
| **P1** | [#5214](https://github.com/HKUDS/nanobot/pull/5214) | DeepSeek reasoning items break OpenAI Responses API deserialization | **Merged** — wire-format guard |
| **P2** | [#5745](https://github.com/HKUDS/nanobot/pull/5745) | Large history replay blocks gateway event loop, OOM risk | **Open PR** — incremental, cached, budgeted replay |
| **P2** | [#5741](https://github.com/HKUDS/nanobot/pull/5741) | Binary image data leaked into WebSocket progress frames | **Merged** — stripped from progress payload |
| **P2** | [#5605](https://github.com/HKUDS/nanobot/pull/5605) | Email channel marks `\Seen` before delivery (filters reject but message already read) | **Open PR** — defer `\Seen` until post-delivery |
| **P2** | [#5216](https://github.com/HKUDS/nanobot/pull/5216) | Gemini Flash image models reject aspect/size hints (wrong config path) | **Merged** — moved to `generationConfig.imageConfig` |

**Stability trend**: Critical provider/gateway bugs are being resolved; WebUI performance regressions (history, binary bloat) have active fixes. The **headless auth gap (#5726)** is the only unaddressed P1 user-facing blocker.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **AnySearch web_search provider** | [#5505](https://github.com/HKUDS/nanobot/issues/5505) (vendor PR submitted) | **High** — vendor-driven, key-optional, aligns with provider registry pattern |
| **AnySearch web_fetch (extract) backend** | [#5731](https://github.com/HKUDS/nanobot/issues/5731) | **Medium** — follow-up to above; same auth model |
| **Linear native agent channel** | [#5495](https://github.com/HKUDS/nanobot/pull/5495) | **Medium-High** — feature-complete but conflicted; needs rebase + review |
| **Telegram custom Bot API base URL** | [#4919](https://github.com/HKUDS/nanobot/pull/4919) | **Medium** — long-open, enterprise demand; blocked by conflicts |
| **Microsoft delegated OAuth for Email (Office365/Outlook)** | [#5609](https://github.com/HKUDS/nanobot/pull/5609) | **High** — addresses deprecated basic auth; test+security labels |
| **Email alias filtering** | [#5606](https://github.com/HKUDS/nanobot/pull/5606) | **High** — common multi-alias mailbox pattern; ready |
| **DaoXE gateway provider** | [#5746](https://github.com/HKUDS/nanobot/pull/5746) | **Medium** — new provider; follows existing gateway pattern |
| **MCP schema byte budget (model-visible)** | [#5388](https://github.com/HKUDS/nanobot/pull/5388) | **Low-Medium** — opt-in, complex; may wait for MCP stabilization |
| **WebUI completion notification sound** | [#5602](https://github.com/HKUDS/nanobot/pull/5602) | **High** — small, closes #5524, opt-in, tested |

**Prediction**: Next patch will bundle provider fixes (DeepSeek, Gemini), WebUI perf fixes (history, binary), email OAuth/alias, and possibly AnySearch web_search. Linear/Telegram channels and MCP budget need more review cycles.

## 7. User Feedback Summary
- **Pain points**:
  - **Headless deployments**: No documented initial password or setup flow for WebUI without JS (#5726).
  - **Email channel reliability**: Messages marked read prematurely (#5605), no alias filtering (#5606), basic auth deprecated (#5609).
  - **WebUI performance**: Large history causes freezes/bandwidth spikes (#5745, #5741).
  - **Provider fragility**: DeepSeek/Gemini wire-format issues break conversations (#5214, #5230, #5216).
- **Use cases**:
  - Self-hosted Telegram Bot API (enterprise/air-gapped) — #4919.
  - Multi-alias shared mailboxes for team assistants — #5606.
  - Vendor search/extract integration (AnySearch) — #5505, #5731.
  - Conversation portability across providers — #5230.
- **Satisfaction**: Contributors (AnySearch team, Linear/Telegram/Email PR authors) are investing significant effort, signaling **high confidence in platform extensibility**. The headless auth gap is a notable onboarding friction for new self-hosters.

## 8. Backlog Watch — Stalled / Needs Maintainer Attention
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | ~60 days | Open, `conflict` | Telegram self-hosted gateway support; enterprise blocker |
| [#5495](https://github.com/HKUDS/nanobot/pull/5495) | ~20 days | Open, `conflict` | Linear native channel — major new integration; needs rebase + review |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) | ~30 days | Open, `conflict` | MCP schema budget — controls context explosion; opt-in but complex |
| [#5609](https://github.com/HKUDS/nanobot/pull/5609) | ~13 days | Open, `conflict` | Microsoft OAuth for Email — required for Office365/Outlook compliance |
| [#5606](https://github.com/HKUDS/nanobot/pull/5606) | ~13 days | Open, `conflict` | Email alias filtering — common production pattern |
| [#5605](https://github.com/HKUDS/nanobot/pull/5605) | ~13 days | Open, `conflict` | Email `\Seen` semantics — data-loss risk (messages marked read but not delivered) |
| [#5726](https://github.com/HKUDS/nanobot/issues/5726) | 2 days | Open, P1 | Headless install password — blocks new self-hosters |

**Recommendation**: Prioritize review/merge of the email trio (#5609, #5606, #5605) and the headless auth issue (#5726) for immediate user impact. Schedule conflict resolution for Linear (#5495) and Telegram (#4919) channels in next sprint.

---

**Project Health**: 🟢 **Healthy** — high merge throughput, active vendor contributions, critical bugs fixed. Main risk: **review bandwidth** for large channel PRs and **onboarding documentation gaps** for self-hosters.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-12

---

## 1. Today's Overview

Hermes Agent shows **very high velocity** with 63 items (13 issues, 50 PRs) updated in the last 24 hours. A patch release **v0.21.2** shipped yesterday to address `state.db` fragility introduced in the v0.21.0 session-store rewrite. The backlog is dominated by desktop UX polish (scrollbars, keyboard shortcuts, HUD hitboxes), profile/session regressions, and a concerning cron/kanban "fabricated success" bug. Four PRs were merged/closed, but the majority of today's work remains in open review — indicating active triage and rapid iteration rather than stabilization.

---

## 2. Releases

### **v2026.9.11 — Hermes Agent v0.21.2** (Patch Release)  
**Released:** 2026-09-11 | [GitHub Release](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.11)

| Aspect | Details |
|--------|---------|
| **Scope** | Fixes `state.db` lock contention & corruption after v0.21.0's session-store connection-handling rewrite |
| **Root Cause** | Second writers cancelling each other's SQLite locks; healthy connections could be marked stale |
| **Impact** | Users on v0.21.0/0.21.1 experiencing session loss, profile-switch failures, or "database locked" errors |
| **Migration** | Drop-in replacement; no schema change. Run `hermes update` → restart gateway |
| **Breaking Changes** | None |

> **Note:** v0.21.0 (2026-08-31) introduced the regression; v0.21.2 is the first patch. Users on v0.20.x are unaffected.

---

## 3. Project Progress (Merged/Closed Today)

| PR | Title | Area | Status |
|----|-------|------|--------|
| *No merged PRs explicitly listed in the 50 updated PRs* | | | |
| #102163 | Profile switching regression in v0.21.0 — slot limit 3 enforced + session ownership lock | Desktop, Sessions, Profiles | **Closed** (likely superseded by v0.21.2 or duplicate) |

**Observation:** Only 1 issue closed today; the 4 "merged/closed" PRs from the overview are not individually identified in the data. The team appears focused on opening fixes (46 open PRs) rather than merging — typical for a post-patch triage day.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | Reactions | Core Need |
|------|------|----------|-----------|-----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Issue | 200 | 0 | **Skills index stale** — automated freshness probe failing (index 29.8h old vs 26h limit). Blocks `/docs/skills` site. CI cron (6/18 UTC) not keeping up. |
| [#107402](https://github.com/NousResearch/hermes-agent/issues/107402) | Issue | 14 | 0 | **`hermes update` false warning** — gateway defers restart correctly, but updater marks fleet `stale` immediately, leaving `partial` run state. |
| [#76207](https://github.com/NousResearch/hermes-agent/issues/76207) | Issue | 8 | 2 | **Vite config deprecation warning** — `__dirname` usage in `vite.config.ts` triggers future-compat noise on every `hermes update`. |
| [#108785](https://github.com/NousResearch/hermes-agent/issues/108785) | Issue | 1 | 0 | **Custom endpoint API key disappears on Save** — field blanks, template `${HERMES_CUSTOM_CUSTOM_API_KEY}` shown, Test then fails. |

**Pattern:** Desktop settings/UI bugs (#108785, #108791, #108792, #108793) cluster today — users hitting rough edges in the Settings → Providers flow and conversation viewport.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Summary | Fix PR |
|----------|-------|---------|--------|
| **P1** | [#107402](https://github.com/NousResearch/hermes-agent/issues/107402) | `hermes update` leaves permanent "did not restart gateways" warning when restart deferred | — |
| **P1** | [#102163](https://github.com/NousResearch/hermes-agent/issues/102163) | Profile switching regression: slot limit 3 hard-enforced, session ownership lock | Closed (v0.21.2?) |
| **P2** | [#108785](https://github.com/NousResearch/hermes-agent/issues/108785) | Custom endpoint API key removed on Save; Test uses stale key | [#108786](https://github.com/NousResearch/hermes-agent/pull/108786) |
| **P2** | [#108795](https://github.com/NousResearch/hermes-agent/pull/108795) | Usage tracking: silent $0.0 for unpriced/relay models; pricing overrides ignored | PR open |
| **P2** | [#74572](https://github.com/NousResearch/hermes-agent/pull/74572) | Weixin gateway: stale `context_token` (`ret=-2`) breaks scheduled text delivery | PR open (since Jul) |
| **P2** | [#108787](https://github.com/NousResearch/hermes-agent/pull/108787) | Copilot ACP: missing credential classified as `unknown` not `auth` error | PR open |
| **P3** | [#108659](https://github.com/NousResearch/hermes-agent/issues/108659) | Vision turns get previous answer when custom provider forces `cache_prompt` | — |
| **P3** | [#108782](https://github.com/NousResearch/hermes-agent/issues/108782) | **Cron/Kanban fabrication**: worker/verifier/lander cards report success with **zero work** | [#108794](https://github.com/NousResearch/hermes-agent/pull/108794) |
| **P3** | [#108784](https://github.com/NousResearch/hermes-agent/issues/108784) | Desktop-created sessions: `git_branch = NULL` → lane label falls back to fake `main` | — |
| **P3** | [#108793](https://github.com/NousResearch/hermes-agent/issues/108793) | Collapsed HUD transparent hitbox intercepts clicks | [#108796](https://github.com/NousResearch/hermes-agent/pull/108796) |
| **P3** | [#108791](https://github.com/NousResearch/hermes-agent/issues/108791) | Windows chat scrollbar 4px / 18% opacity — hard to see/grab | [#108799](https://github.com/NousResearch/hermes-agent/pull/108799) |
| **P3** | [#108792](https://github.com/NousResearch/hermes-agent/issues/108792) | PageUp/PageDown unbound in conversation viewport | [#108797](https://github.com/NousResearch/hermes-agent/pull/108797) |
| **P3** | [#108802](https://github.com/NousResearch/hermes-agent/issues/108802) | Cron `unknown` executions silent — no incident, no failure-deliver | — |
| **P3** | [#76207](https://github.com/NousResearch/hermes-agent/issues/76207) | Vite `__dirname` deprecation warning on update | — |

**Critical Cluster:** The **kanban fabrication bug (#108782)** is a data-integrity risk — automated workflows can advance on phantom work. Fix PR #108794 opened same day.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Signal Strength | Likelihood Next Version |
|---------|----------|-----------------|-------------------------|
| **Configurable local context window** (`local_runtime.context_window`) | [#108783](https://github.com/NousResearch/hermes-agent/issues/108783) / [#108790](https://github.com/NousResearch/hermes-agent/pull/108790) | High — user hit swap thrash on M1 Max 64GB with 262k ctx | **Very High** — PR #108790 validates at bootstrap, propagates through preset gen |
| **Profile-isolated prompt cache** | [#108501](https://github.com/NousResearch/hermes-agent/pull/108501) | Medium — security/isolation fix for multi-profile users | **High** — addresses cross-profile leakage |
| **Discord blocking-prompt owner notifications** | [#82982](https://github.com/NousResearch/hermes-agent/pull/82982) | Low — stale PR (Aug 10), salvage of older work | Low — needs rebase/review |
| **Hermes Talk plugin catalog entry** | [#108798](https://github.com/NousResearch/hermes-agent/pull/108798) | Low — community plugin, catalog-only change | Medium — trivial merge |
| **Scrollbar visibility & keyboard paging (Desktop)** | [#108791](https://github.com/NousResearch/hermes-agent/issues/108791), [#108792](https://github.com/NousResearch/hermes-agent/issues/108792) | High — daily UX pain, PRs ready | **High** — #108799, #108797 open today |
| **HUD click-through fix** | [#108793](https://github.com/NousResearch/hermes-agent/issues/108793) | Medium — niche but annoying | **High** — #108796 open today |

**Prediction:** v0.21.3 will likely bundle: context-window knob, profile cache isolation, desktop scrollbar/keyboard/HUD fixes, and the kanban fabrication guard.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Theme | Representative Voice | Sentiment |
|-------|---------------------|-----------|
| **Profile/Session instability post-v0.21.0** | "Opening a 4th profile now reliably causes… session ownership lock" ([#102163](https://github.com/NousResearch/hermes-agent/issues/102163)) | 😡 Frustrated — regression broke multi-profile workflow |
| **Update UX deception** | "`hermes update` leaves a permanent 'did not restart' warning when restart is deferred" ([#107402](https://github.com/NousResearch/hermes-agent/issues/107402)) | 😕 Confused — correct behavior flagged as error |
| **Custom provider config loss** | "Save button… removes the API key… field goes blank" ([#108785](https://github.com/NousResearch/hermes-agent/issues/108785)) | 😡 Broken trust in settings persistence |
| **Desktop accessibility** | "Scrollbar 4px and 18% opacity — hard to see or grab (Windows)" ([#108791](https://github.com/NousResearch/hermes-agent/issues/108791)) | 😕 Excluded — low-vision users blocked |
| **Local model OOM on macOS** | "RSS ≈ 29–38 GB, swap 24.4/25.6 GB near-full" ([#108783](https://github.com/NousResearch/hermes-agent/issues/108783)) | 😰 Anxious — hardware limits hit silently |
| **Silent automation failures** | "Kanban worker/verifier/lander cards all reported success while **zero work existed**" ([#108782](https://github.com/NousResearch/hermes-agent/issues/108782)) | 😨 Alarmed — CI/CD trust erosion |

**Overall:** Users feel **v0.21.0 was a rough release** — session/profile regressions, update UX lies, and desktop polish gaps dominate. The rapid patch (v0.21.2) and same-day fix PRs show responsive maintainers, but trust recovery needs visible stability.

---

## 8. Backlog Watch (Stale High-Impact Items)

| Item | Age | Area | Why It Matters |
|------|-----|------|----------------|
| [#74572](https://github.com/NousResearch/hermes-agent/pull/74572) | **45 days** | Gateway/WeCom | Stale `context_token` breaks scheduled Weixin delivery; fix limited to text path, media untouched. |
| [#22982](https://github.com/NousResearch/hermes-agent/pull/22982) | **125 days** | Gateway/Slack/Matrix | Inline `/model <name>\n<prompt>` routing broken — blocks orchestration patterns. |
| [#82982](https://github.com/NousResearch/hermes-agent/pull/82982) | **33 days** | CLI/Plugins/Discord | Discord blocking prompts silent; owner notify opt-in stalled. |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **56 days** | Skills/Infra | Skills index cron failing (29.8h > 26h limit); `/docs/skills` degraded. 200 comments = high visibility. |
| [#76872](https://github.com/NousResearch/hermes-agent/pull/76872) | **41 days** | Skills/Windows | Windows LF→CRLF makes hub skills permanently `update_available`. |
| [#83685](https://github.com/NousResearch/hermes-agent/pull/83685) | **32 days** | Terminal/Windows | Foreground payloads in `argv` — security/stability risk on Windows. |
| [#91965](https://github.com/NousResearch/hermes-agent/pull/91965) | **21 days** | Plugins/OpenCode | GLM-5.3 reasoning_effort dropped silently; binary thinking fallback. |

**Maintainer Action Needed:** The **WeCom gateway fix (#74572)** and **skills index cron (#66616)** are the longest-standing user-impacting issues. The inline model-command routing (#22982) is a 4-month-old UX gap for Slack/Matrix power users.

---

## Health Indicators

| Metric | Status | Trend |
|--------|--------|-------|
| Release cadence | Patch in 12 days (v0.21.0 → v0.21.2) | 🟢 Responsive |
| Issue:PR ratio | 13:50 (1:3.8) | 🟢 Fix-heavy |
| P1/P2 bugs open | 6 | 🟡 Elevated |
| Stale PRs (>30d) | 7 | 🔴 Backlog growing |
| Desktop UX cluster | 6 issues/PRs today | 🟡 Focus area |
| Automated infra alerts | 1 (skills index) | 🟡 CI health |

**Bottom Line:** Hermes Agent is in a **post-regression stabilization sprint**. The v0.21.2 patch addresses the worst data-loss risk, but desktop polish, update UX honesty, and automation integrity (kanban fabrication) need the next 1–2 patch cycles. Maintainer bandwidth appears focused on rapid triage — good signal, but stale PRs indicate review capacity may be saturated.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-12

## 1. Today's Overview
PicoClaw shows **moderate maintenance activity** with 4 issues and 2 PRs updated in the last 24 hours. The project is actively addressing both platform-specific bugs (Slack, Feishu, RKLLM) and a notable frontend performance regression. Two issues were closed with fixes merged, while two remain open — one a feature request for OpenAI-compatible provider support, the other a Feishu configuration bug. No new release was published today, suggesting fixes are accumulating for a future cut.

## 2. Releases
**No new releases** in the last 24 hours. The latest version remains unversioned/nightly (per issue #3355 referencing `nightly-50-gbbf6893c`).

## 3. Project Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) | **Merged/Closed** | **fix(slack): set FileSize on media upload params** — Resolves Slack `file.upload.v2: file size cannot be 0` error by populating `FileSize` in `slack.UploadFileParameters` before SDK call. | **High** — Unblocks Slack media uploads entirely. |
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | **Open** | **fix laggy interface** — Optimizes web UI rendering when chat history grows large; tested on desktop & mobile (Brave). Author notes non-expert TS/Node implementation. | **Medium-High** — Addresses UX regression for long conversations; pending review/merge. |

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) (Closed) | 4 comments, 👍0 | **Slack media upload broken** — Root cause: missing `FileSize` in upload params. Fixed via #3340. |
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) (Open) | 2 comments, 👍0 | **OpenAI-compatible provider support** — Request to add generic "OpenAI Compatible" provider for self-hosted routers (e.g., 9Router). Signals demand for **provider extensibility** beyond hardcoded integrations. |
| [#3355](https://github.com/sipeed/picoclaw/issues/3355) (Open) | 1 comment, 👍0 | **Feishu config validation error** — `config.json` rejects `channel_list.feishu.app_id` as unknown field. Indicates **config schema drift** or missing Feishu channel registration. |
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) (Open) | Comments: undefined | **Web UI lag with long chats** — Community-contributed perf fix; highlights frontend scalability as growing pain point. |

**Underlying trend**: Users are pushing PicoClaw into **heterogeneous environments** (self-hosted LLMs, enterprise chat platforms like Feishu/Slack) and hitting integration gaps — both in provider abstraction and channel configuration.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR | Notes |
|----------|-------|--------|--------|-------|
| **Critical** | [#3338](https://github.com/sipeed/picoclaw/issues/3338) Slack media upload fails (zero file size) | **Closed** | [#3340](https://github.com/sipeed/picoclaw/pull/3340) ✅ Merged | SDK-level rejection; no network call made. |
| **High** | [#3355](https://github.com/sipeed/picoclaw/issues/3355) Feishu `app_id` rejected as unknown config field | **Open** | None | Config schema likely missing Feishu channel definition; blocks onboarding. |
| **Medium** | [#3346](https://github.com/sipeed/picoclaw/issues/3346) RKLLM abnormal replies on ARM (Qwen3.5-0.8B) | **Closed** | None cited | Closed as `stale`; root cause unclear — may be model/quantization mismatch. |
| **Medium** | [#3347](https://github.com/sipeed/picoclaw/pull/3347) Web UI lags with large chat history | **Open (PR)** | [#3347](https://github.com/sipeed/picoclaw/pull/3347) | Perf fix submitted; needs maintainer review. |

## 6. Feature Requests & Roadmap Signals
| Request | Issue | Likelihood for Next Version | Rationale |
|---------|-------|-----------------------------|-----------|
| **OpenAI-compatible provider abstraction** | [#3366](https://github.com/sipeed/picoclaw/issues/3366) | **High** | Low-effort (copy OpenAI provider), high value for self-hosted/local LLM users; aligns with ecosystem trend. |
| **Feishu channel config support** | [#3355](https://github.com/sipeed/picoclaw/issues/3355) | **High** | Bug in config schema; fixing unblocks enterprise adoption in China. |
| **Web UI virtualization / pagination** | [#3347](https://github.com/sipeed/picoclaw/pull/3347) | **Medium** | PR exists but author is non-expert; may need refinement before merge. |

**Prediction**: Next release will likely include Slack media fix (#3340), Feishu config fix, and possibly the OpenAI-compatible provider if maintainers prioritize extensibility.

## 7. User Feedback Summary
- **Pain points**: 
  - **Platform integrations are brittle** — Slack media broken, Feishu config invalid, RKLLM unstable on ARM.
  - **Web UI doesn't scale** — Lag with long conversations degrades UX.
  - **Provider lock-in** — No way to plug in OpenAI-compatible endpoints without code changes.
- **Use cases emerging**: 
  - Self-hosted LLM routing (9Router, local models on ARM)
  - Enterprise chat (Feishu, Slack) as primary interfaces
  - Long-running chat sessions in browser
- **Sentiment**: Mixed — fixes are landing (Slack), but config/schema gaps (Feishu) and architectural limits (provider model) frustrate power users.

## 8. Backlog Watch
| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#3355](https://github.com/sipeed/picoclaw/issues/3355) Feishu `app_id` unknown field | 11 days (created 2026-09-01) | **High** — Blocks Feishu users entirely; config schema fix is trivial but unassigned. | Maintainer to audit `channel_list` schema registration for Feishu. |
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) OpenAI-compatible provider | 8 days (created 2026-09-04) | **Medium** — High community value, low implementation cost. | Label `good first issue` or assign to contributor; design decision: config-driven vs. code-based. |
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) Laggy interface fix | 16 days (created 2026-08-27) | **Medium** — UX regression; PR stalled without review. | Request review from frontend maintainer; consider virtualization library (e.g., `react-window`). |

---

**Health Indicators**  
✅ **Bug fix velocity**: 2/2 critical bugs closed with PRs in 24h  
⚠️ **Feature backlog**: 2 high-value requests (OpenAI-compat, Feishu) unassigned  
⚠️ **Frontend debt**: Perf fix pending review for 16 days  
📉 **Release cadence**: No release despite merged fixes — consider cutting `v0.3.2` or nightly tag.

*Data source: GitHub Issues/PRs updated 2026-09-11 to 2026-09-12. Links point to live GitHub items.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-12

## 1. Today's Overview
NanoClaw shows **high development velocity** with 38 pull requests and 5 issues updated in the last 24 hours. No new release was cut today. The activity centers on **installation/bootstrap reliability**, **voice channel rollout**, **agent-runner hardening**, and **skill lifecycle cleanup**. A cluster of bug-fix PRs targets fresh-install failures (uvx/pnpm PATH, Dockerfile guard leftovers, SQLite migration races) while two feature PRs (`/add-voice` and its adapter) advance the real-time browser calling capability. The project is in a **stabilization + feature-expansion** phase ahead of a likely v2.3.x point release.

## 2. Releases
**No new releases published today.** The latest tagged release remains v2.3.0 (commit `74224f62`). Several merged PRs since that tag (e.g., #3771, #3649, #3291, #3249, #1598) are candidates for the next patch or minor release.

## 3. Project Progress — Merged / Closed PRs (updated today)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3771](https://github.com/nanocoai/nanoclaw/pull/3771) | **Bug Fix** | Restores `~/.local/bin` to PATH after uvx bootstrap so parent launcher finds pnpm/npm | Unblocks fresh installs on clean VMs/containers |
| [#3649](https://github.com/nanocoai/nanoclaw/pull/3649) | **Chore** | Repairs `CODEOWNERS` — adds default owner, automation surface, supply-chain files | Improves review routing & security coverage |
| [#3291](https://github.com/nanocoai/nanoclaw/pull/3291) | **Bug Fix** | Bounds pending-message polling in agent-runner | Prevents unbounded memory/CPU growth during backpressure |
| [#3249](https://github.com/nanocoai/nanoclaw/pull/3249) | **Bug Fix** | Handles pre-existing Node outside supported range during setup | Hardens installer against host environment variance |
| [#1598](https://github.com/nanocoai/nanoclaw/pull/1598) | **Feature Skill** | Adds `add-remote-storage` (WebDAV/S3 via rclone + systemd) + `ncl groups config add-mount/remove-mount` | New persistent-volume capability for agent groups |
| [#2798](https://github.com/nanocoai/nanoclaw/pull/2798) | **Docs** | Expands CHANGELOG for v2.1.17 | Release hygiene |
| [#2086](https://github.com/nanocoai/nanoclaw/pull/2086) | **Docs** | Updates capability installer model documentation | Developer onboarding |
| [#2082](https://github.com/nanocoai/nanoclaw/pull/2082) | **Docs** | Clarifies upstream developer references | Contributor guidance |

> **Note:** All above PRs were *updated* today (2026-09-12) but were created weeks/months earlier — they likely merged today or were closed as part of a batch review.

## 4. Community Hot Topics
| Item | Comments | 👍 | Signal |
|------|----------|----|--------|
| [Issue #3576](https://github.com/nanocoai/nanoclaw/issues/3576) — Rate-limited turns flood channel with duplicate errors | 1 | 0 | **Operational pain**: users see spammy error notices when provider rate-limits retry; needs backoff/dedup in `deliverErrorResult` |
| [Issue #3762](https://github.com/nanocoai/nanoclaw/issues/3762) — `/add-opencode` leaves stale Dockerfile guard test on remove/upgrade | 1 | 0 | **Upgrade hygiene**: legacy test file `src/opencode-dockerfile.test.ts` not cleaned; blocks clean skill refresh |
| [PR #3764](https://github.com/nanocoai/nanoclaw/pull/3764) — `/add-voice` full-duplex browser conversations | 0 | 0 | **High-interest feature**: real-time voice channel (GPT-Live-1) — skill + adapter; likely flagship for next minor |
| [PR #3772](https://github.com/nanocoai/nanoclaw/pull/3772) — Voice adapter payload (OpenAI GPT-Live-1) | 0 | 0 | Companion to #3764; registry-side adapter for webhook `/webhook/voice/*` |

*Community discussion is light (most items have 0–1 comments), but the **voice channel** and **install/bootstrap reliability** are the clear focus areas.*

## 5. Bugs & Stability — Reported Today (ranked by severity)
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#3769](https://github.com/nanocoai/nanoclaw/issues/3769) (CLOSED) | Fresh `uvx` bootstrap exits `127` (`pnpm not found`) when `~/.local/bin` absent from PATH | ✅ [#3771](https://github.com/nanocoai/nanoclaw/pull/3771) merged |
| **High** | [#3765](https://github.com/nanocoai/nanoclaw/issues/3765) | Concurrent SQLite migrations during fresh setup cause initializer crash (macOS) | ❌ No PR yet |
| **Medium** | [#3576](https://github.com/nanocoai/nanoclaw/issues/3576) | Rate-limited turns flood channel — no backoff/dedup on `deliverErrorResult` | ❌ No PR yet |
| **Medium** | [#3762](https://github.com/nanocoai/nanoclaw/issues/3762) | `/add-opencode` leaves pre-refactor Dockerfile guard test (`src/opencode-dockerfile.test.ts`) on remove/upgrade | ✅ [#3763](https://github.com/nanocoai/nanoclaw/pull/3763) open |
| **Low** | [#3204](https://github.com/nanocoai/nanoclaw/issues/3204) (CLOSED) | Skill still instructs old `Dockerfile` `ARG`+`RUN` edits removed by `cli-tools.json` refactor | Superseded by #3762/#3763 |

**Stability takeaway:** Fresh-install path is the #1 friction point (uvx/PATH, SQLite races, Dockerfile cruft). Two high-severity bugs already have fixes merged or open; the SQLite concurrency issue (#3765) is the most critical unaddressed regression.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Full-duplex browser voice channel** (`/add-voice` + GPT-Live-1 adapter) | [PR #3764](https://github.com/nanocoai/nanoclaw/pull/3764), [PR #3772](https://github.com/nanocoai/nanoclaw/pull/3772) | **Very High** — skill + adapter both open, core-team labeled, active updates today |
| **Per-agent-group delivery mode** (envelope vs. outbound tools) | [PR #3713](https://github.com/nanocoai/nanoclaw/pull/3713) | **High** — schema + plumbing landed; reading logic deferred |
| **Remote storage skill** (WebDAV/S3 via rclone) | [PR #1598](https://github.com/nanocoai/nanoclaw/pull/1598) | **Medium** — merged but long-cycle (opened Apr 2026); may ship in v2.4 |
| **Dial channel docs** (README + changelog) | [PR #3501](https://github.com/nanocoai/nanoclaw/pull/3501) | **High** — trivial doc update, Dial already shipped |
| **Stale bot policy (dry-run)** | [PR #3656](https://github.com/nanocoai/nanoclaw/pull/3656) | **Medium** — repo hygiene, not user-facing |

**Prediction:** v2.3.1 will bundle the bootstrap/install fixes (#3771, #3763, #3249) + voice channel (#3764/#3772). Per-group delivery mode (#3713) may wait for consumer implementation.

## 7. User Feedback Summary (from issues)
| Pain Point | Evidence | Affected Flow |
|------------|----------|---------------|
| **Rate-limit spam** | #3576: “every retried turn produces its own delivered notice” | Provider retry → user channel |
| **Broken fresh install on clean VM** | #3769: `uvx` bootstrap fails when `~/.local/bin` not in PATH | `ncl` / one-line installer |
| **SQLite migration race** | #3765: “host and initializer ran migrations concurrently” | `scripts/init-cli-agent.ts` |
| **Stale artifacts on skill upgrade** | #3762, #3204: old Dockerfile guard test & instructions remain | `/add-opencode` remove/refresh |
| **Installer shell vulnerability** | #3776: `curl \| sh` uses PATH-resolved `sh`; exe.dev images changed behavior | `setup/onecli.ts`, `setup/install-docker.sh` |

**Satisfaction signals:** Users actively file detailed repros (versions, commits, host OS) — indicates engaged technical user base. No overt dissatisfaction, but **install/upgrade reliability** is a recurring theme.

## 8. Backlog Watch — Long-Open Items Needing Attention
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [PR #1598](https://github.com/nanocoai/nanoclaw/pull/1598) `add-remote-storage` | 163 days | **Merged** (updated today) | Large skill; verify it’s actually released & documented |
| [PR #3156](https://github.com/nanocoai/nanoclaw/pull/3156) Carry channel attachments as structured parts | 44 days | Open | Core agent-runner change; blocks rich-media parity across providers |
| [PR #3291](https://github.com/nanocoai/nanoclaw/pull/3291) Bound pending message polling | 26 days | **Merged** (updated today) | Backpressure fix — confirm released |
| [PR #3583](https://github.com/nanocoai/nanoclaw/pull/3583) Stamp series_id into task_log | 16 days | Open | Observability: chat-session runs lose log linkage |
| [PR #3652](https://github.com/nanocoai/nanoclaw/pull/3652) Opt-in heartbeat keep-alive during provider stream | 14 days | Open | Prevents mid-stream disconnects on long generations |
| [Issue #3576](https://github.com/nanocoai/nanoclaw/issues/3576) Rate-limit error dedup | 16 days | Open | UX degradation under quota pressure |
| [Issue #3765](https://github.com/nanocoai/nanoclaw/issues/3765) Concurrent SQLite migrations | 1 day | **New, High** | Blocks fresh macOS installs; needs immediate triage |

**Maintainer action items:**  
1. **Triage #3765** (SQLite race) — assign or spawn fix PR today.  
2. **Review #3764/#3772** (voice) for merge — they’re the biggest user-facing feature in flight.  
3. **Cut v2.3.1** with the 8 merged PRs since v2.3.0 to ship bootstrap/install fixes.  
4. **Close or update stale PRs** (#1598, #3156, #3583, #3652) — several are “core-team” labeled but idle >2 weeks.

---

*Generated from GitHub API data for nanocoai/nanoclaw on 2026-09-12. All links point to live GitHub items.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-12

## 1. Today's Overview
LobsterAI shows **moderate maintenance activity** with 6 PRs processed in the last 24 hours (4 merged/closed, 2 open) and 3 issues updated. The project is actively addressing **stability regressions** around plugin persistence, gateway startup, and native dependency handling on Windows/macOS. No new release was cut. Two long-standing issues (#1006, #2293) resurfaced with recent updates, indicating **configuration/workspace persistence bugs** remain a user pain point. The merged PRs focus on build optimization, plugin cleanup safety, and native module compatibility — signs of a hardening phase rather than feature development.

## 2. Releases
**No new releases** in the last 24 hours. The last release version is not indicated in the provided data.

## 3. Project Progress (Merged/Closed PRs — 2026-09-11)
| PR | Title | Area | Status | Key Change |
|----|-------|------|--------|------------|
| [#2656](https://github.com/netease-youdao/LobsterAI/pull/2656) | fix: openclaw gateway startup selfheal | docs, main, openclaw | **Closed** | Gateway startup resilience improved — likely addresses crash-loop or failed initialization |
| [#2655](https://github.com/netease-youdao/LobsterAI/pull/2655) | chore: optimize package size | build, docs, openclaw, windows, macos | **Closed** | Bundle size reduction across platforms; may improve install/launch performance |
| [#2653](https://github.com/netease-youdao/LobsterAI/pull/2653) | fix(openclaw): preserve host runtime during plugin cleanup | renderer, docs, main, openclaw, cowork | **Closed** | **Critical Windows fix**: Prevents `fs.rmSync` from deleting host `openclaw` runtime via junction traversal in `node_modules` |
| [#2652](https://github.com/netease-youdao/LobsterAI/pull/2652) | fix(plugins): patch nsp-clawguard native require compatibility | docs, main | **Closed** | Fixes `graceful-fs` interop proxy issue breaking gateway startup after OpenClaw v2026.8.1 upgrade |

**Summary**: Four merged PRs target **gateway stability, plugin sandbox safety, and native module compatibility** — especially on Windows. No user-facing features; all are infrastructure hardening.

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | Issue | 5 | 0 | **Multi-agent workspace isolation broken**: `USER.md` overwritten by main agent on restart — users cannot maintain per-agent context |
| [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) | Issue | 2 | 0 | **Config/workspace reset on restart**: `openclaw.json`, `AGENTS.md` regenerated from templates — users forced into cron workarounds |
| [#2654](https://github.com/netease-youdao/LobsterAI/issues/2654) | Issue | 1 | 0 | **Plugin `hooks` field not persisted**: `getUserPlugins` omits `hooks` → lost on `syncToDisk` — requires DB migration + sync fix |

**Analysis**: Top pain points are **data persistence** and **workspace isolation**. Users expect per-agent config and custom files to survive restarts. The `#2654` issue is a concrete, actionable bug with a clear fix path (DB schema + sync logic), while `#2293` and `#1006` suggest deeper architectural issues in workspace/template handling.

## 5. Bugs & Stability
| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **Critical (Windows)** | [#2653](https://github.com/netease-youdao/LobsterAI/pull/2653) | Plugin cleanup deletes host runtime via `node_modules` junction → gateway fails | ✅ **Fixed & merged** |
| **High** | [#2652](https://github.com/netease-youdao/LobsterAI/pull/2652) | `nsp-clawguard` 2.5.0 breaks gateway via `graceful-fs` interop proxy corruption | ✅ **Fixed & merged** |
| **High** | [#2654](https://github.com/netease-youdao/LobsterAI/issues/2654) | Plugin `hooks` config lost on restart — `getUserPlugins` doesn't return `hooks` | 🔴 **Open** (clear fix specified) |
| **High** | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | All agents' `USER.md` replaced by main agent's on restart — multi-agent isolation broken | 🔴 **Open** (stale, 2 months) |
| **High** | [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) | Config (`openclaw.json`) & workspace (`AGENTS.md`) reset to template on every restart | 🔴 **Open** (6 months) |

**Note**: Two critical Windows crashes were fixed today. The persistence bugs (#2293, #1006, #2654) remain open and affect core user workflows.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Persist plugin `hooks` field** | [#2654](https://github.com/netease-youdao/LobsterAI/issues/2654) | **High** — well-defined fix (DB + sync), PR likely imminent |
| **Official config persistence mechanism** | [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) | **Medium** — requires redesign of template vs. user config merge strategy |
| **Per-agent `USER.md` isolation** | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | **Medium** — architectural, may need workspace model changes |
| **Hide internal main agent sessions** | [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | **Low** — stale PR (5 months), low priority UX polish |

**Prediction**: Next patch will likely include `#2654` fix. `#1006`/`#2293` need design decisions — may slip to minor version.

## 7. User Feedback Summary
- **Pain**: Users lose custom configs (`openclaw.json`, `AGENTS.md`, `USER.md`) on every restart — forced to use external sync scripts.
- **Pain**: Multi-agent setups broken — all agents share same `USER.md` after restart, defeating purpose of isolated agents.
- **Frustration**: Workarounds (cron jobs, manual file protection) indicate **trust erosion** in persistence layer.
- **Positive**: Rapid fix turnaround for gateway/plugin crashes (#2652, #2653 merged same day) shows maintainer responsiveness to breakage.

## 8. Backlog Watch
| Item | Age | Risk | Why It Needs Attention |
|------|-----|------|------------------------|
| [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) | 6 months | **High** | Core config persistence broken; users cannot trust settings survival |
| [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | 2 months | **High** | Multi-agent workflow broken — key differentiator feature impaired |
| [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | 5 months | Low | Stale PR hiding internal sessions; low impact but easy cleanup |

**Recommendation**: Prioritize `#2654` (quick win), then allocate design time for `#1006`/`#2293` — they undermine the agent-centric UX promise. Consider a "persistence audit" across all user-editable files.

---
*Data sourced from GitHub API (issues/PRs updated 2026-09-11). Links point to live GitHub items.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-12

## 1. Today's Overview
Moltis saw minimal GitHub activity in the last 24 hours: one new bug report (#1264) and one long-standing pull request (#1143) received an update. No releases were published, and no PRs were merged or closed. The project appears to be in a quiet maintenance phase with the community surfacing a Telegram integration regression and a contributor advancing a new LLM provider integration.

## 2. Releases
**No new releases** published today.

## 3. Project Progress
- **Merged/Closed PRs today:** 0  
- **Open PRs updated:** 1  
  - **#1143** – *Add Requesty as an OpenAI-compatible provider* (author: Thibaultjaigu) – updated 2026-09-11. This PR introduces Requesty (https://requesty.ai) as a table-driven, OpenAI-compatible provider, mirroring the existing OpenRouter implementation. It remains open and awaits review/merge.  
  - [View PR #1143](https://github.com/moltis-org/moltis/pull/1143)

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| #1264 | Bug | Created & updated today, 0 comments, 0 👍 | [Issue #1264](https://github.com/moltis-org/moltis/issues/1264) |
| #1143 | Feature PR | Updated 2026-09-11, 0 👍 | [PR #1143](https://github.com/moltis-org/moltis/pull/1143) |

**Analysis:** The sole new issue reports a regression where tools cease functioning in shared Telegram channels—a core collaboration scenario. The Requesty provider PR reflects ongoing demand for broader LLM router support, but has lingered since July with no maintainer feedback.

## 5. Bugs & Stability
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **High** | [#1264](https://github.com/moltis-org/moltis/issues/1264) | Tools stop working in shared Telegram channels (regression in multi-user contexts) | No |

*No other bugs or crashes reported today. The Telegram tools regression is the only active stability concern and currently lacks a fix PR.*

## 6. Feature Requests & Roadmap Signals
- **Requesty provider integration (#1143)** – Strong signal: users want more OpenAI-compatible routers beyond OpenRouter. Given the PR’s completeness and alignment with existing provider patterns, it is a likely candidate for the next minor release if reviewed promptly.
- **Telegram channel tooling reliability** – The bug in #1264 highlights a gap in shared-channel support; a fix here would directly improve team workflows and may be prioritized if the issue gains traction.

## 7. User Feedback Summary
- **Pain point:** Tool execution fails in shared Telegram channels, breaking collaborative agent workflows (Issue #1264).  
- **Use case:** Teams relying on Moltis in group Telegram chats for multi-user agent interactions.  
- **Sentiment:** Neutral so far—no community discussion or reactions yet. The Requesty PR shows contributor enthusiasm but no maintainer engagement since July.

## 8. Backlog Watch
| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| [#1143](https://github.com/moltis-org/moltis/pull/1143) | ~72 days | Open, updated 2026-09-11 | Complete, well-structured provider addition; merging would expand LLM ecosystem support immediately. |
| [#1264](https://github.com/moltis-org/moltis/issues/1264) | 0 days | Open, 0 comments | High-impact regression in a flagship integration (Telegram); needs triage and a fix to prevent user churn. |

---

*Digest generated from GitHub data for 2026-09-12. All links point to the Moltis organization repository (github.com/moltis-org/moltis).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-12

## 1. Today's Overview

The project is in **high-velocity stabilization mode** following yesterday's v2.2.1 stable release. In the last 24 hours, maintainers processed 25 PRs (9 merged/closed) and triaged 21 issues (5 closed). Activity centers on post-release bug fixes (sub-agent model routing, session sync, Telegram rendering), new provider integrations (Serply, Atlas Cloud), and Hub multi-tenant bootstrap work. The community is actively stress-testing v2.2.1 — surfacing regressions in stop-control, MCP connectivity, and model persistence — while also driving the Hub roadmap discussion (#7318, 26 comments). Overall health: **strong release cadence, but v2.2.x shows integration rough edges needing rapid patching**.

---

## 2. Releases

### **v2.2.1 (Stable) — Released 2026-09-11**
| Category | Changes |
|----------|---------|
| **Models, Agents & Memory** | • Per-agent model routing with provider preferences & fallback ([#7501](https://github.com/agentscope-ai/QwenPaw/pull/7501))<br>• Auto Fin proactive memory review & ReMe upgrades |
| **Release Verification** | Installation validation gate tracked in [#7692](https://github.com/agentscope-ai/QwenPaw/issues/7692) (4-hour post-publish deadline) |

**Breaking Changes / Migration Notes**: None explicitly documented in the release summary. However, issue [#7676](https://github.com/agentscope-ai/QwenPaw/issues/7676) reveals `subagent_model` config is **non-functional in v2.2.1-beta.1/2** — a known regression vs. v2.1.x. Users relying on per-subagent model selection should defer upgrade or apply workaround.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Type | Impact |
|----|------|--------|
| [#7677](https://github.com/agentscope-ai/QwenPaw/pull/7677) | **Fix** | API now returns 422 (not 500) for non-finite validation inputs — improves client error handling |
| [#7688](https://github.com/agentscope-ai/QwenPaw/pull/7688) | **Fix** | Simplified grouped session pagination: removed "Collapse List", added "Load More", preserved scroll position |
| [#7652](https://github.com/agentscope-ai/QwenPaw/pull/7652) | **Fix** | Preserves provider-resolved context windows (prevents premature compaction when provider reports >32k) |
| [#7590](https://github.com/agentscope-ai/QwenPaw/pull/7590) | **Fix** | Telegram: renders Markdown tables as `<pre>` blocks instead of raw pipes |
| [#7696](https://github.com/agentscope-ai/QwenPaw/pull/7696) | **Feat (Hub)** | Local `qwenpaw hub --init-admin USERNAME` bootstrap — enables headless admin setup on remote servers |
| [#7701](https://github.com/agentscope-ai/QwenPaw/pull/7701) | **Test** | Repaired approval command handler unit tests broken by #7444 |
| [#7699](https://github.com/agentscope-ai/QwenPaw/pull/7699) | **Security** | Hardens `.master_key` file permissions on read (strips group/other bits, warns on correction) |
| [#7697](https://github.com/agentscope-ai/QwenPaw/pull/7697) | **CI** | Slims PR gate to Ubuntu-only backend tiers; adds release-time full test gate (no test deletions) |

---

## 4. Community Hot Topics

| Issue | Activity | Core Need |
|-------|----------|-----------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) **QwenPaw Hub Multi-Tenant Edition — What Next?** | 26 💬, 4 👍 | Community shaping Hub roadmap: RBAC, shared workspaces, skill marketplace, billing. Signals **strong demand for team/enterprise features** beyond personal assistant. |
| [#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177) **Web Deploy Page UX Optimization** | 10 💬 | Mobile-first UX gaps: primary action buried, stop button too accessible. Reflects **growing mobile/web console usage**. |
| [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) **Stop Button Shows Stopped But Task Continues** | 6 💬 | **Critical reliability bug**: UI-state / backend-state desync causes 409 conflicts & phantom execution. |
| [#7676](https://github.com/agentscope-ai/QwenPaw/issues/7676) **`subagent_model` Config Ignored** | 3 💬 (closed) | Sub-agents inherit parent model despite explicit override — blocks cost-optimization pattern (Haiku/Opus dispatch). Linked to long-standing [#4901](https://github.com/agentscope-ai/QwenPaw/issues/4901). |
| [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) **Daily Paper Fails Silently (arXiv Unreachable)** | 3 💬 (new) | No proxy/endpoint config for ReMe cron; error masked as "completed with no content". **Observability gap in scheduled tasks**. |
| [#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716) **MCP Broken Since 2.2.x** | 1 💬 (new) | Regression: v2.1.1b3 Hub connected MCP servers; 2.2.0/2.2.1 cannot. **Upgrade blocker for Hub adopters**. |

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **🔴 Critical** | [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) Stop button lies — task keeps running, causes 409 on new input | Open | No |
| **🔴 Critical** | [#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716) MCP registration broken in 2.2.x (worked in 2.1.1b3) | Open | No |
| **🟠 High** | [#7676](https://github.com/agentscope-ai/QwenPaw/issues/7676) `subagent_model` ignored — subagents always use parent model | Closed (but **no fix**) | [#7680](https://github.com/agentscope-ai/QwenPaw/pull/7680) *diagnoses* root cause (silent exception swallow) |
| **🟠 High** | [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) Configured models disappear mid-session, require restart | Open | No |
| **🟡 Medium** | [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) Daily Paper cron fails silently (no proxy config, misleading success msg) | Open | No |
| **🟡 Medium** | [#7693](https://github.com/agentscope-ai/QwenPaw/issues/7693) Creator: "Approve" during multi-image gen strands task in RUNNING forever | Open | No |
| **🟡 Medium** | [#7709](https://github.com/agentscope-ai/QwenPaw/issues/7709) Scheduled task outputs folded into thinking/steps or missing entirely | Open | No |
| **🟢 Low** | [#7698](https://github.com/agentscope-ai/QwenPaw/issues/7698) Session index/disk desync (ghost sessions) | Closed as *invalid* | — |
| **🟢 Low** | [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) spawn subAgent timeouts universally (even with long timeout) | Open | No |

> **Note**: [#7680](https://github.com/agentscope-ai/QwenPaw/pull/7680) adds logging for the `subagent_model` failure but does not yet restore the override behavior. A follow-up fix is likely imminent.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood for Next Version |
|---------|----------|----------------------------|
| **Per-agent memory model** (cheaper model for summarize/dream) | [#7664](https://github.com/agentscope-ai/QwenPaw/issues/7664) | 🟢 High — clear cost-saving value, fits v2.2 memory upgrades |
| **Serply as `web_search` provider** | [#7711](https://github.com/agentscope-ai/QwenPaw/issues/7711) + [#7712](https://github.com/agentscope-ai/QwenPaw/pull/7712) | 🟢 High — PR open, follows existing AnySearch pattern |
| **Default Loop mode selector** (rename "默认"→"标准", allow any template as default) | [#7714](https://github.com/agentscope-ai/QwenPaw/issues/7714) | 🟡 Medium — UX polish, low complexity |
| **History groups for inter-agent / proactive chats** | [#7710](https://github.com/agentscope-ai/QwenPaw/issues/7710) | 🟡 Medium — improves multi-agent debuggability |
| **DeepSeek native capability metadata, KV-cache observability** | [#7717](https://github.com/agentscope-ai/QwenPaw/issues/7717) | 🔴 Low — provider-specific, requires harness alignment |
| **Atlas Cloud provider** | [#6499](https://github.com/agentscope-ai/QwenPaw/pull/6499) | 🟡 Medium — long-open PR, OpenAI-compatible, low risk |
| **Bot-manager unified multi-channel plugin** | [#7702](https://github.com/agentscope-ai/QwenPaw/pull/7702) | 🟢 High — solves fragmentation for Hub/team users |
| **Chat files drawer → right side** | [#7704](https://github.com/agentscope-ai/QwenPaw/pull/7704) | 🟢 High — PR ready, addresses [#7700](https://github.com/agentscope-ai/QwenPaw/issues/7700) |
| **Visual compaction improvements** | [#7703](https://github.com/agentscope-ai/QwenPaw/pull/7703) | 🟡 Medium — UX iteration on context display |

---

## 7. User Feedback Summary

| Theme | Representative Voices | Sentiment |
|-------|----------------------|-----------|
| **Mobile/Web Console UX** | "Stop button below fold on mobile — scary"; "Can't enter newlines on Android keyboard" ([#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177), [#7707](https://github.com/agentscope-ai/QwenPaw/issues/7707)) | 😟 Frustrated — basic mobile affordances missing |
| **Reliability of Control Primitives** | "Clicked stop, UI says stopped, but it's still running" ([#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567)) | 😡 Angry — trust-breaking |
| **Model Config Persistence** | "Models vanish mid-session, have to re-select" ([#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708)) | 😟 Anxious — data loss fear |
| **Multi-Agent Cost Control** | "Need cheap model for sub-tasks, flagship for reasoning" ([#4901](https://github.com/

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-12

## 1. Today's Overview
ZeroClaw shows **high development velocity** with 50 PRs updated in the last 24 hours (48 open, 2 closed) and 5 new/updated issues. The project is in a **heavy feature-development phase** centered on the OIDC/authentication milestone (#8289), with a stacked PR chain of 10+ security PRs actively under review. Concurrently, the team is addressing TUI/ZeroCode usability bugs and Windows CI flakiness. No releases were published today, indicating the codebase is in active iteration rather than stabilization.

## 2. Releases
**No new releases today.** The project appears to be on a continuous-delivery cadence with changes landing directly on `master` via stacked PRs.

## 3. Project Progress
**Merged/Closed PRs (2):**
- **#10262** `fix(rpc): close RPC connections on daemon reload and unstick zerocode quickstart` — Closed. Resolves a daemon-reload connection leak that blocked ZeroCode quickstart. CI passes confirmed in [run 34618807959](https://github.com/zeroclaw-labs/zeroclaw/actions/runs/34618807959).
- **#10676** `fix(ci): compare publish exceptions as paths` — Closed. Fixes Windows CI failure in `publish_contract` by normalizing path comparison (backslash vs forward-slash).

**Major In-Flight Work (Stacked PR Chain for OIDC Milestone #8289):**
| PR | Stage | Focus | Status |
|----|-------|-------|--------|
| [#10248](https://github.com/zeroclaw-labs/zeroclaw/pull/10248) | Base | Foundation refactors | Open |
| [#10255](https://github.com/zeroclaw-labs/zeroclaw/pull/10255) | 5 | `oidc.<alias>` token-verification provider | Open |
| [#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259) | 3 | Enforce authenticated principals on RPC (native+peercred) | Open |
| [#10263](https://github.com/zeroclaw-labs/zeroclaw/pull/10263) | 4 | Compose principal tool selectors into agent sessions | Open |
| [#10265](https://github.com/zeroclaw-labs/zeroclaw/pull/10265) | 4 | Principal-owned sessions with predicated storage deletes | Open |
| [#10268](https://github.com/zeroclaw-labs/zeroclaw/pull/10268) | 4 | Private principal memory with storage-level plane isolation | Open |
| [#10270](https://github.com/zeroclaw-labs/zeroclaw/pull/10270) | 5 | Browserless OIDC enrollment (device grant + client_credentials) | Open |
| [#10274](https://github.com/zeroclaw-labs/zeroclaw/pull/10274) | 5 | Gateway route-layer auth with principal consumption | Open |
| [#10275](https://github.com/zeroclaw-labs/zeroclaw/pull/10275) | 6 | Retire Nevis/iam_policy, config shim, rollback evidence | Open |
| [#10321](https://github.com/zeroclaw-labs/zeroclaw/pull/10321) | 5 | Browser PKCE + cross-surface enrollment API | Open |

**Other Active Feature PRs:**
- [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) `feat(runtime): anchor context compaction to model window ratio` — Dynamic context budget per model.
- [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) `feat(cli): add egress grant ceremony to plugin install/list` — Security UX for plugin network access.
- [#10553](https://github.com/zeroclaw-labs/zeroclaw/pull/10553) `feat(zerocode): add selected text to chat` — Copy/Add-to-Chat for transcript selections.
- [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) `feat(runtime): coordinate agent lifecycle mutations` — Unified live-config authority for daemon/gateway/CLI.
- [#10648](https://github.com/zeroclaw-labs/zeroclaw/pull/10648) `fix(zerocode): reduce repeated label/pinned-preview rendering` — TUI performance optimization.

## 4. Community Hot Topics
**Most Active Issues (by recency & engagement):**
1. **[#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) OIDC Milestone Tracker** — 3 comments, `priority:p2`, `risk:high`. Central coordination issue for RFC 7141 implementation. All 10 stacked PRs reference this. *Underlying need: Enterprise-grade auth (OIDC, canonical principals, inbound auth) to unblock production deployments.*
2. **[#10796](https://github.com/zeroclaw-labs/zeroclaw/issues/10796) ZeroCode chat input ignores Delete key** — Filed today, `S3-minor`. *Need: Basic TUI editing parity with standard terminals.*
3. **[#10795](https://github.com/zeroclaw-labs/zeroclaw/issues/10795) REPL never enables IUTF8** — Filed today, `S2-degraded`. Backspace corrupts multi-byte chars. *Need: Proper UTF-8 handling in interactive REPL.*
4. **[#10794](https://github.com/zeroclaw-labs/zeroclaw/issues/10794) Advisory Windows nextest fails publish_contract** — `S3-minor`. Recurring Windows CI failure. *Need: Stable Windows publishing pipeline.*
5. **[#10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793) Three Windows-only test failures on advisory job** — `S3-minor`. Flaky `zeroclaw-runtime` tests on unrelated PR. *Need: Test isolation/stability on Windows.*

## 5. Bugs & Stability
| Severity | Issue | Component | Fix PR? |
|----------|-------|-----------|---------|
| **S2 (Degraded)** | [#10795](https://github.com/zeroclaw-labs/zeroclaw/issues/10795) REPL Backspace corrupts multi-byte chars (IUTF8 not enabled) | `channel` / REPL | No |
| **S3 (Minor)** | [#10796](https://github.com/zeroclaw-labs/zeroclaw/issues/10796) Delete key no-op in ZeroCode chat composer | `zerocode/tui` | No |
| **S3 (Minor)** | [#10794](https://github.com/zeroclaw-labs/zeroclaw/issues/10794) Windows `publish_contract` path-comparison failure | `tooling/ci` | **Yes** — [#10676](https://github.com/zeroclaw-labs/zeroclaw/pull/10676) closed |
| **S3 (Minor)** | [#10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793) Flaky Windows `zeroclaw-runtime` test failures | `runtime` / CI | No (investigation needed) |
| **High (Security)** | [#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) Host launcher resolution before workspace cwd (path traversal risk) | `security` / runtime | **Yes** — PR open, `risk:high`, needs maintainer review |

## 6. Feature Requests & Roadmap Signals
**Strong signals for next version:**
1. **OIDC/Enterprise Auth** — 10 stacked PRs implementing RFC 7141 (canonical principals, inbound auth, PKCE, device grant, cross-surface enrollment). *Likely to land as a major security release.*
2. **Dynamic Context Compaction** ([#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535)) — Model-window-ratio-based budget replaces fixed 32k token limit. *Quality-of-life for long-context models.*
3. **Egress Grant Ceremony** ([#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584)) — Explicit user consent for plugin network access. *Security/UX improvement for plugin ecosystem.*
4. **Agent Lifecycle Coordination** ([#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621)) — Single live-config authority across daemon/gateway/CLI. *Architectural consolidation reducing config drift.*
5. **ZeroCode Selection→Chat** ([#10553](https://github.com/zeroclaw-labs/zeroclaw/pull/10553)) — Copy/Add-to-Chat for transcript selections. *Power-user workflow enhancement.*

## 7. User Feedback Summary
**Pain Points (from today's issues):**
- **TUI/REPL maturity gaps**: Delete key ignored (#10796), Backspace breaks on Unicode (#10795) — indicates ZeroCode/REPL not yet at parity with standard terminal UX.
- **Windows CI instability**: Recurring `publish_contract` and flaky test failures (#10793, #10794) — erodes contributor confidence on Windows.
- **Security complexity**: OIDC milestone tracker (#8289) shows multi-stage rollout; users waiting for "canonical principals + inbound auth" to enable production SSO.

**Positive Signals:**
- Active distinguished contributors (Audacity88, JordanTheJet, NiuBlibing) driving large stacked PRs.
- Quick turnaround on CI fixes (#10676 closed same-day).
- ZeroCode receiving iterative UX polish (selection-to-chat, rendering perf).

## 8. Backlog Watch
**Long-standing / Stalled High-Impact Items:**
| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) `fix(security): resolve host launchers before workspace cwd` | 17 days | **High** | Path-traversal vector in launcher resolution; `needs-maintainer-review`, `risk:high`, `size:XL` |
| [#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635) `fix(config): resolve git subcommand past global options` | 42 days | **High** | Security policy misclassifies `git -C <path> <verb>`; `needs-author-action`, `risk:high` |
| [#9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428) `fix(channels): require sender authorization for Bluesky/Reddit` | 47 days | **High** | Two inbound channels bypassed `peer_groups` allowlist; `needs-author-action`, `risk:high` |
| [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) `fix(acp): persist interrupted turn progress` | 23 days | **High** | ACP transcript loss on interrupt; `needs-maintainer-review`, `risk:high`, `risk:manual` |
| [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) OIDC Milestone Tracker | 80 days | **High** | Umbrella for 10+ PRs; `status:accepted`, `risk:high` — coordination bottleneck |

**Maintainer Attention Needed:** The OIDC stacked PR chain (10 PRs) requires sequential review/merge. #10381 (security fix) and #9428/#9635 (auth bypasses) are high-risk security items awaiting review for >2 weeks. Windows CI flakiness (#10793, #10794) lacks a dedicated owner.

---

**Project Health Indicator:** 🟡 **Active Development / Pre-Stabilization** — High commit velocity on strategic security milestone, but TUI/REPL usability gaps and Windows CI instability suggest a hardening phase is needed before next release. The stacked PR model is working but creates review bottlenecks.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*