# OpenClaw Ecosystem Digest 2026-10-04

> Issues: 188 | PRs: 500 | Projects covered: 12 | Generated: 2026-10-04 05:31 UTC

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

# OpenClaw Project Digest — 2026-10-04

## 1. Today's Overview
OpenClaw shows **high churn with no release cadence** today: 188 issues and 500 PRs updated in 24 hours, yet zero new releases. The ratio of closed-to-open issues (96:92) and merged-to-open PRs (196:304) suggests the project is actively triaging and merging, but the backlog remains large. Critical-severity bugs (P0/P1) around session stability, provider authentication, and upgrade reliability dominate the open queue, indicating the project is in a **stabilization phase** rather than feature development. Several long-standing issues (e.g., zombie processes, Anthropic thinking-block regression) have resurfaced with new comments, pointing to incomplete fixes or regressions.

---

## 2. Releases
**No new releases today.** The latest published version appears to be **2026.9.8** (referenced in #164396). Users on 2026.9.4–2026.9.7 report upgrade failures (#157818) and gateway connection issues (#164396), suggesting the 9.x line needs a stabilization patch before the next minor release.

---

## 3. Project Progress (Merged/Closed PRs Today)
**196 PRs merged/closed** in the last 24h. Key themes from recently merged work:

| Area | PRs | Summary |
|------|-----|---------|
| **Security/Redaction** | #161480 | Fixed credential leakage in long tool output; resolved redaction stalls and RangeError crashes |
| **Runtime Stability** | #164274 | Fixed turn failures when providers send malformed tool calls after successful tools |
| **Device Pairing** | #164783 | Hardened `/pair approve` authorization parity with gateway method |
| **Memory/Embedding** | #164792 | Added orphaned embedding cache collection after full reindex (refs #114612) |
| **Memory-Wiki Perf** | #164761, #164781 | Indexed related-page lookups during compile; optimized `wiki_get` path resolution |
| **Session/State** | #164465, #164779, #164630 | Released lifecycle resources; moved session projections & model-account links to workers |
| **Upgrade/Doctor** | #163592 | Migrated historical compaction state via Doctor for cleaner upgrades |
| **Test Hygiene** | #164767, #164760 | Removed low-value tests; fixed flaky grouped runtime tests |
| **UI/UX** | #164776, #164667 | Collapsed finished processes by default; fixed Tlon bare URL/image rendering |

**Notable closed issues** (resolved via PRs or triage):
- #113051: Codex runtime implicitly selected over OpenAI API provider
- #114162: Windows Companion pairing approval regression
- #107550: Thread pool starvation from sync crypto hashing
- #94922: Feishu plugin incorrect reply mode in DMs
- #89445: Gateway start failure "agents.list.*: Invalid input" (2026.5.28)

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Issue/PR | Comments | Priority | Core Need |
|----------|----------|----------|-----------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie process leak | 17 👍1 | P1, 🦪 | **Process hygiene**: Hook/tool child processes not reaped → zombie accumulation → runtime degradation. Affects all runtimes. |
| [#150635](https://github.com/openclaw/openclaw/issues/150635) Short-term recall eviction blocks dreaming | 15 | P2, 🦞 | **Memory architecture**: Nightly ingestion fills 512-entry cap with zero-recall entries, preventing deep-phase promotion. |
| [#94228](https://github.com/openclaw/openclaw/issues/94228) Anthropic `thinking` block signature error | 15 👍2 | P1, 🐚 | **Provider compatibility**: Long tool-use threads brick permanently on native Anthropic path (400 Invalid signature). **Closed but resurfaced**. |
| [#154572](https://github.com/openclaw/openclaw/issues/154572) `sessions_spawn` fails for `claude-cli` runtime | 11 | P1, 🦪 | **Session boot reliability**: ~350ms `SessionTranscriptWriterClaimReboundError` on every spawn; CLI agent route works. |
| [#162119](https://github.com/openclaw/openclaw/issues/162119) Codex 403 owner-verification after model switch | 11 👍1 | P1, 🦪 | **Auth stability**: In-place model switch triggers intermittent 403 "cannot verify owner" — requires fresh request. |
| [#117956](https://github.com/openclaw/openclaw/issues/117956) `claude-cli` billed 13.7M tokens despite `CLAUDE_CLI_CLEAR_ENV` | 11 | P1, 🦪 | **Security/Isolation**: Env scrubbing failed; managed CLI leaked metered Anthropic usage. **Closed, recovery stuck**. |
| [#157818](https://github.com/openclaw/openclaw/issues/157818) `openclaw update` 9.4→9.6 fails `doctor-failed` at 300s cap | 8 | P0, 🦞 | **Upgrade reliability**: Fixes for #151295 shipped in 9.6 but 9.4 driver’s canary budget blocks migration. **Release blocker**. |
| [#164396](https://github.com/openclaw/openclaw/issues/164396) 2026.9.8 refuses local gateway connection on clean Win11/Node22 | 6 | P0, 🦪 | **Install/onboarding regression**: Clean install cannot reach gateway post-onboarding. **Release blocker**. |

**Underlying needs**: 
- **Session/process lifecycle correctness** (zombies, spawn failures, transcript writer conflicts)
- **Provider auth isolation** (env leakage, model-switch 403s, thinking-block serialization)
- **Upgrade path robustness** (canary budgets, driver version skew, Doctor migrations)
- **Memory system liveness** (recall eviction, embedding cache bloat, dreaming pipeline)

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 P0 — Release Blockers / Crashes
| Issue | Status | Fix PR? | Summary |
|-------|--------|---------|---------|
| [#157818](https://github.com/openclaw/openclaw/issues/157818) Update 9.4→9.6 fails `doctor-failed` at 300s canary cap | OPEN | No | Upgrade path broken for existing 9.4 installs; fixes in 9.6 can’t lift 9.4 driver budget. |
| [#164396](https://github.com/openclaw/openclaw/issues/164396) 2026.9.8 clean Win11/Node22 install can’t reach gateway | OPEN | No | Onboarding completes but gateway connection fails; blocks new users on Windows. |

### 🟠 P1 — High Impact (Data Loss, Security, Session Bricking)
| Issue | Status | Fix PR? | Summary |
|-------|--------|---------|---------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie process leak from hooks/tools | OPEN | No | Unreaped `openclaw-hooks`, `bash`, `codex` children accumulate → runtime degradation. |
| [#154572](https://github.com/openclaw/openclaw/issues/154572) `sessions_spawn` → `claude-cli` fails with `SessionTranscriptWriterClaimReboundError` | OPEN | No | 100% failure rate on spawn; ~350ms timeout. Related to #152659. |
| [#162119](https://github.com/openclaw/openclaw/issues/162119) Codex 403 owner-verification after in-place model switch | OPEN | No | Intermittent; requires fresh request. Auth state not cleaned on switch. |
| [#133987](https://github.com/openclaw/openclaw/issues/133987) GitHub Copilot models unavailable in 2026.8.1+ | OPEN | No | Dynamic model discovery filters all Copilot models; regression from 2026.7.1-2. |
| [#150498](https://github.com/openclaw/openclaw/issues/150498) Subagent announce loses child report; raw text bypasses requester | OPEN | No | Malformed tool output loses report; failure path leaks raw child text to user. |
| [#152876](https://github.com/openclaw/openclaw/issues/152876) Remote JSON webhook → native stack overflow (0xC00000FD) | OPEN | No | `JSON.parse()` without nesting-depth guard; ~31k nested objects crashes gateway. |

### 🟡 P2 — Functional Regressions / UX Friction
| Issue | Status | Fix PR? | Summary |
|-------|--------|---------|---------|
| [#150635](https://github.com/openclaw/openclaw/issues/150635) Short-term recall eviction blocks dreaming deep phase | OPEN | No | 512-entry cap filled with zero-recall entries nightly; nothing promoted. |
| [#162768](https://github.com/openclaw/openclaw/issues/162768) OpenAI Codex model discovery hardcodes `client_version=0.158.0` | OPEN | No | Ignores configured external Codex app-server; version drift breaks discovery. |
| [#124759](https://github.com/openclaw/openclaw/issues/124759) iOS app lags with "show reasoning and tool activity" enabled | OPEN | No | Remote gateway via Cloudflare Tunnel; rendering bottleneck. |
| [#124731](https://github.com/openclaw/openclaw/issues/124731) `claude-cli` backend silently drops `queue-mode: steer` | OPEN | No | Degrades to `followup`; mid-run prompts not injected. |
| [#164188](https://github.com/openclaw/openclaw/issues/164188) Package-swap permission failure doesn’t identify rejected recovery object | OPEN | No | Update aborts safely but error lacks actionable detail. |

### 🟢 P3 / Stale — Lower Priority or Needs Triage
- [#44289](https://github.com/openclaw/openclaw/issues/44289) Generate secretref docs from registry metadata (stale, 🌊)
- [#87362](https://github.com/openclaw/openclaw/issues/87362) Emit task flow lifecycle hooks for plugins (stale, 🌊)
- [#70266](https://github.com/openclaw/openclaw/issues/70266) Use assistant avatar in macOS Talk Mode (🌊)

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signals |
|---------|-------|---------|
| **Consequence-bound release receipts** | [#153227](https://github.com/openclaw/openclaw/issues/153227) | Proposal for post-permission consequence verification; reference impl exists. Likely **security-hardening track** for next major. |
| **Auth-free model route/cooldown status** | [#145933](https://github.com/openclaw/openclaw/issues/145933) | Request for `openclaw models status --no-auth --json`; operational need for credential-free diagnostics. |
| **MCP `env`/`headers` SecretRef support** | [#141972](https://github.com/openclaw/openclaw/issues/141972) | Config parity: MCP server env vars can’t use SecretRef → plaintext secrets. High operator demand. |
| **Task flow lifecycle hook events** | [#87362](https://github.com/openclaw/openclaw/issues/87362) | Plugin observability gap; internal `TaskFlowRegistryObserverEvent` not exposed. Stale but recurring. |
| **System prompt architecture refactor** | [#103747](https://github.com/openclaw/openclaw/issues/103747) | 20+ fragmented blocks → 3-tier cognitive framework. **80% attention budget recovery** claimed. Long-term. |
| **VoiceOver-friendly chat history** | [#95601](https://github.com/openclaw/openclaw/issues/95601) | Accessibility polish; acknowledged in 2026.6.9 but history view still not screen-reader friendly. |

**Prediction**: Next version (likely 2026.10.x) will prioritize **P0/P1 stability fixes** (upgrade path, Windows gateway, zombie processes, Codex auth) over new features. SecretRef for MCP and auth-free diagnostics are strong candidates for 2026.11.

---

## 7. User Feedback Summary

### Pain Points (Direct Quotes)
| Source | Pain Point |
|--------|------------|
| [#157818](https://github.com/openclaw/openclaw/issues/157818) | "`openclaw update` from 2026.9.4 to 2026.9.6 fails with `doctor-failed` during candidate migration... the 9.4 driver's budget" blocks fixes already in 9.6 |
| [#164396](https://github.com/openclaw/openclaw/issues/164396) | "Clean installing 2026.9.8 for windows refuses to reach the local gateway after onboarding on clean win 11 system with node 22 LTS" |
| [#117956](https://github.com/openclaw/openclaw/issues/117956) | "~13.7M tokens billed in one day" despite `CLAUDE_CLI_CLEAR_ENV` scrubbing `ANTHROPIC_API_KEY` — **cost shock** |
| [#124759](https://github.com/openclaw/openclaw/issues/124759) |

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Ecosystem (2026-10-04)

---

## 1. Ecosystem Overview
The open-source personal AI assistant landscape shows a **bifurcated maturity distribution**: a cluster of 4–5 actively iterating projects (NanoBot, ZeroClaw, NanoClaw, Hermes, OpenClaw) pushing weekly stabilization or feature releases, contrasted with 4 dormant codebases (IronClaw, Moltis, ZeptoClaw, PicoClaw) and 2 in maintenance limbo (LobsterAI, CoPaw). No project shipped a release today, indicating a **synchronized stabilization window** across the leading tier. Core architectural debates—runtime/gateway separation, config propagation, memory liveness, and multi-channel parity—are converging across projects, suggesting emerging de-facto standards for the "local-first agent stack."

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | PRs Merged | Release Today | Health Score |
|---------|----------------|-------------|------------|---------------|--------------|
| **OpenClaw** | 188 | 500 | 196 | ❌ | 🟡 Medium (high churn, P0 blockers) |
| **NanoBot** | 3 (new) | 47 | 21 | ❌ (patch imminent) | 🟢 High |
| **Hermes Agent** | 7 | 50 | 9 | ❌ | 🟢 High |
| **NanoClaw** | 7 | 33 | 13 | ❌ | 🟢 High |
| **ZeroClaw** | 24 | 50 | 1 | ❌ | 🟢 High |
| **NullClaw** | 0 | 20 | 0 | ❌ | 🟡 Medium (single-author, no merges) |
| **CoPaw** | 5 | 7 | 0 | ❌ | 🟡 Medium (review bottleneck) |
| **LobsterAI** | 6 | 1 | 0 | ❌ | 🔴 Low (stale critical bugs) |
| **PicoClaw** | 1 (stale) | 0 | 0 | ❌ | 🔴 Low |
| **IronClaw** | 0 | 0 | 0 | ❌ | ⚫ Inactive |
| **Moltis** | 0 | 0 | 0 | ❌ | ⚫ Inactive |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ | ⚫ Inactive |

*Health Score: 🟢 High = rapid triage + merge throughput; 🟡 Medium = activity but structural blockers; 🔴 Low = stale critical issues; ⚫ Inactive = no 24h signal.*

---

## 3. OpenClaw's Position
**Scale & Scope Advantage**: OpenClaw is the **largest project by 10×** (500 PRs/24h vs. 33–50 for peers), serving as the de-facto reference implementation for multi-runtime (CLI, Codex, Claude), gateway-mediated device pairing, and a unified memory/wiki subsystem.

**Technical Approach Differences**:
- **Runtime plurality**: Native support for 4+ runtimes (OpenAI, Anthropic, Codex, Claude CLI) with shared session/transcript layer—peers target 1–2 runtimes.
- **Gateway-centric architecture**: Central gateway handles auth, pairing, and channel routing; NanoClaw/ZeroClaw adopt similar patterns but with lighter gateways.
- **Memory/wiki as first-class**: Compile-time indexing, embedding cache, and dreaming pipeline—most peers use simpler SQLite/Vector stores.

**Community Size**: Issue/PR volume and comment engagement (17 👍 on #97616) suggest **largest active contributor base**, though velocity is consumed by stabilization (P0/P1 bugs dominate).

**Risk**: Stabilization backlog (zombie processes, upgrade path, Windows gateway) blocks feature cadence; peers shipping fixes faster.

---

## 4. Shared Technical Focus Areas (Cross-Project Requirements)

| Requirement | Projects Affected | Specific Need |
|-------------|-------------------|---------------|
| **Session/process lifecycle correctness** | OpenClaw (#97616, #154572), NanoClaw (#3643), ZeroClaw (#11482), CoPaw (#8094) | Reap child processes, bound turn timeouts, survive WebView2 cache corruption |
| **Provider auth isolation & rotation** | OpenClaw (#162119, #117956), NanoBot (#6031), Hermes (#58226), NullClaw (#963, #1004) | Env scrubbing on model switch, fallback notifications, OAuth billing accuracy |
| **Upgrade/update atomicity & rollback safety** | OpenClaw (#157818), NanoClaw (#4004, #4003), Hermes (#132338, #132361), NanoBot (#6030) | Canary budgets, driver version skew, CLI env propagation, crash-safe commit points |
| **Memory system liveness & compaction** | OpenClaw (#150635), ZeroClaw (#11420), LobsterAI (#879), NullClaw (#1005) | Recall eviction policies, cascade-delete integrity, archive exclusion, timestamp preservation |
| **Config propagation & observability** | ZeroClaw (#10892, #11466), NanoClaw (#4016), Hermes (#132598), NullClaw (#1001) | Per-target apply results, saved-vs-applied status, credential alias clearing |
| **Multi-channel parity & deep-link routing** | NanoBot (#6031), CoPaw (#8101), NanoClaw (#2752), Hermes (#132594) | Fallback notifications, session activation across agents, attachment staging |
| **Security hardening (sandbox, supply chain, DNS)** | ZeroClaw (#10536, #10199), NanoClaw (#3985, #3989), Hermes (#132601), NullClaw (#1002) | macOS Seatbelt compliance, plugin egress deadlines, npm advisories, TLS stack sizing |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Technical Architecture |
|---------|---------------|-------------|------------------------|
| **OpenClaw** | Enterprise-grade reference runtime | Power users, orgs, runtime providers | Multi-runtime gateway, wiki memory, device pairing |
| **NanoBot** | Multi-channel chatops (QQ/TG/Discord/Slack) | Community managers, bot operators | Channel adapters + WebUI/TUI, skill memory (WIP) |
| **Hermes** | Self-hosted dashboard + Slack ops | DevOps teams, self-hosters | Plugin gateway, Kanban workers, update pipeline |
| **NanoClaw** | Container-orchestrated gateway skills | Homelab/embedded, hobbyist hardware | Skill containers, Iron approval bridge, pnpm workspaces |
| **ZeroClaw** | Config-driven local-first agent | Developers, privacy-focused users | ZeroCode TUI, runtime/gateway separation, macOS sandbox |
| **NullClaw** | Zig-native gateway & memory | Systems programmers, minimalists | Zig TLS, A2A bearer scopes, symlinked skills |
| **LobsterAI** | Desktop app + WeChat (CN market) | Chinese desktop users, BYOM | sql.js local DB, Electron, fuel-pack billing |
| **CoPaw** | Multi-agent orchestration + Matrix | Agent framework builders | Spawn parent-child linkage, Element-compatible Matrix |
| **PicoClaw** | Lightweight QQ bot | QQ community moderators | Minimal adapter, upstream API tracking |

**Key Architectural Split**: **Gateway-centric** (OpenClaw, NanoClaw, Hermes, NullClaw) vs. **Config-driven local-first** (ZeroClaw, NanoBot) vs. **Channel-adapter-first** (NanoBot, CoPaw, LobsterAI, PicoClaw).

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating** | NanoBot, ZeroClaw, NanoClaw, Hermes | 20–50 PRs/day, 10–20 merges/day, test-backed fixes, patch releases weekly |
| **Stabilizing at Scale** | OpenClaw | Highest absolute velocity but P0/P1 backlog consumes capacity; release cadence broken |
| **Pre-Release Hardening** | NullClaw | 20 PRs staged (single author), zero merges—awaiting maintainer review bandwidth |
| **Maintenance Mode / Bottlenecked** | CoPaw, LobsterAI | CoPaw: 7 PRs open, 0 merged (review queue); LobsterAI: 6-month-old critical bugs, no fix PRs |
| **Dormant** | PicoClaw, IronClaw, Moltis, ZeptoClaw | ≤1 issue update/24h, no PR activity, no releases in window |

**Maturity Indicator**: Only NanoBot and Hermes have **community-contributed companion apps** (Android for Hermes, mobile WebUI for NanoBot), signaling ecosystem pull.

---

## 7. Trend Signals for AI Agent Developers

1. **Local-First Runtime/Gateway Separation** (ZeroClaw #7432, NanoClaw skills, Hermes gateway): Agents are splitting into *configurable runtime daemons* + *thin gateway/channel adapters*—enables model routing, sandboxing, and multi-tenancy.

2. **Config as Observable Contract** (ZeroClaw #10892, NanoClaw #4016, Hermes #132598): "Saved ≠ Applied" is a universal pain point; projects are building **per-target application ledgers** with diff UX.

3. **Memory Systems Require Liveness Guarantees** (OpenClaw #150635, ZeroClaw #11420, LobsterAI #879): Simple vector stores fail at scale; **recall eviction policies, cascade-delete integrity, and compaction crash recovery** are now table stakes.

4. **Multi-Channel Is a Hard Requirement, Not a Feature** (

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-10-04

## 1. Today's Overview
NanoBot shows **high development velocity** with 47 pull requests updated in the last 24 hours (21 merged/closed, 26 still open) and 3 new issues filed. The project is actively iterating across multiple fronts: WebUI touch/mobile improvements, TUI stability fixes, MCP server connectivity, provider fallback logic, and CLI environment handling. No new release was cut today, but the volume of merged fixes suggests a maintenance release is imminent. Overall project health appears strong — rapid triage, test-backed fixes, and cross-platform attention (mobile, desktop, terminal).

---

## 2. Releases
**No new releases published today.** The latest version remains `nanobot-ai 0.3.5` (referenced in issue #6024). Given 21 PRs merged/closed today, a patch release (likely `0.3.6`) consolidating WebUI touch fixes, TUI stability, MCP pagination, and CLI environment preservation is probable within days.

---

## 3. Project Progress — Merged/Closed PRs Today (21)
| PR | Area | Summary |
|----|------|---------|
| [#6023](https://github.com/HKUDS/nanobot/pull/6023) | WebUI | Enlarge preview controls on touch devices — applies existing touch-target rules to tab selection, close buttons, image viewer; prevents clipping. |
| [#6022](https://github.com/HKUDS/nanobot/pull/6022) | WebUI | Keep touch navigation visible above keyboard — fits shell to visual viewport including iOS keyboard offset. |
| [#6021](https://github.com/HKUDS/nanobot/pull/6021) | WebUI | Hide unavailable website preview actions — shares browser/URL restriction check to avoid unsupported-preview panel on mobile Safari. |
| [#5640](https://github.com/HKUDS/nanobot/pull/5640) | WebUI | Mobile keyboard input & streaming send — Enter inserts newline on coarse pointers; Send button submits; shows Send during active response. |
| [#5763](https://github.com/HKUDS/nanobot/pull/5763) | API | Return 400 for invalid multimodal field types — classifies malformed JSON as client error, preserves 413 for oversized uploads. |
| [#6009](https://github.com/HKUDS/nanobot/pull/6009) | WebUI | Preserve sidebar state after failed initial fetch — keeps state read-only until success, retries every 3s. |
| [#5914](https://github.com/HKUDS/nanobot/pull/5914) | Channel (NapCat) | Keep message whose image declares non-numeric `file_size` — fixes premature rejection before parser handles it. |

**Other merged fixes** (less detailed in data): TUI file-edit merge order (#6027), TUI queued prompt retention on send failure (#6026), Kitty keypad Enter support (#6025), MCP resource/prompt pagination (#6018), cron DST-aware scheduling (#5922), fallback probe serialization (#5764), Codex image streaming (#6011), MCP servers without tools capability (#6019), Responses API SDK 3.8.0 alias serialization (#6020), JSON equality for enum validation (#6013).

**Net advance**: WebUI mobile/touch experience significantly polished; TUI reliability hardened; MCP discovery completed; provider fallback made thread-safe; CLI desktop integration fixed.

---

## 4. Community Hot Topics
*Comment/reaction counts are minimal across the board (0 👍, `undefined` comments), so “hot” is inferred from **recency + cross-cutting impact**.*

| Item | Type | Why It Matters |
|------|------|----------------|
| [#6031](https://github.com/HKUDS/nanobot/issues/6031) | Issue (new) | **Fallback model notification gap** — model failover works but chat channels (QQ, Telegram, Discord, Slack) receive no signal. Observer hook exists but not wired for channels. High user-visibility impact. |
| [#6029](https://github.com/HKUDS/nanobot/issues/6029) | Issue (new) | **Silent background compaction** — idle/dream cycles broadcast “Compressing context…” to active channels, creating noise. Request: suppress broadcasts for maintenance cycles. |
| [#6030](https://github.com/HKUDS/nanobot/pull/6030) | PR (open, same-day) | **CLI `XDG_RUNTIME_DIR` preservation** — fixes Obsidian CLI detection under Wayland/GNOME when launched via NanoBot gateway. Directly unblocks desktop integration. |
| [#1651](https://github.com/HKUDS/nanobot/pull/1651) | PR (open, 7 months) | **Skill memory layer** — optional `memory/SKILLS.jsonl`, extraction during consolidation, query-aware injection. Long-running, high-leverage feature for agent reuse. |

**Underlying needs**: Users want **observability** (know when model switches), **quiet automation** (background work shouldn’t spam), and **desktop fidelity** (CLI tools must work identically inside/outside NanoBot).

---

## 5. Bugs & Stability — Reported/Fixed Today
| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **High** | [#6024](https://github.com/HKUDS/nanobot/issues/6024) — Obsidian CLI “unable to find Obsidian” under NanoBot (XDG_RUNTIME_DIR lost) | Open | [#6030](https://github.com/HKUDS/nanobot/pull/6030) (open, same-day) |
| **High** | TUI: queued prompts lost on send failure | Fixed | [#6026](https://github.com/HKUDS/nanobot/pull/6026) (open, test-backed) |
| **Medium** | TUI: saved file edits merged in reverse order → diff corruption | Fixed | [#6027](https://github.com/HKUDS/nanobot/pull/6027) (open, regression test passes) |
| **Medium** | WebUI: sidebar state reset on failed initial fetch | Fixed | [#6009](https://github.com/HKUDS/nanobot/pull/6009) (open) |
| **Medium** | FallbackProvider: concurrent probes during half-open state | Fixed | [#5764](https://github.com/HKUDS/nanobot/pull/5764) (open) |
| **Medium** | MCP: only first page of resources/prompts discovered | Fixed | [#6018](https://github.com/HKUDS/nanobot/pull/6018) (open) |
| **Medium** | Cron: next-run time uses raw UTC offset, ignores DST rules | Fixed | [#5922](https://github.com/HKUDS/nanobot/pull/5922) (open) |
| **Low** | Kitty keypad Enter not bound in TUI composer | Fixed | [#6025](https://github.com/HKUDS/nanobot/pull/6025) (open) |
| **Low** | NapCat: non-numeric `file_size` rejects image prematurely | Fixed | [#5914](https://github.com/HKUDS/nanobot/pull/5914) (closed) |
| **Low** | Responses API: SDK 3.8.0 `async_` field sent as `async_` not `alias` | Fixed | [#6020](https://github.com/HKUDS/nanobot/pull/6020) (open) |
| **Low** | Enum validation accepts `True` for `[1]`, `0` for `[false]` | Fixed | [#6013](https://github.com/HKUDS/nanobot/pull/6013) (open) |

**Pattern**: Most bugs have **fix PRs already open with tests**; triage-to-fix cycle is tight. Highest user-impact bug (#6024) has a same-day fix PR.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Skill memory layer** — reusable workflow patterns, query-aware retrieval | [#1651](https://github.com/HKUDS/nanobot/pull/1651) (7 mo. open, active updates) | **Medium** — large scope, but design mature; may land behind flag first |
| **Session-owned subagents** — creation, messaging, inspection, cancellation | [#5985](https://github.com/HKUDS/nanobot/pull/5985) (open, 4 days) | **High** — builds on merged #5976; WebUI separation of active/results suggests near-readiness |
| **Fallback model notification to chat channels** | [#6031](https://github.com/HKUDS/nanobot/issues/6031) (new) | **High** — observer hook exists; wiring to channels is incremental |
| **Silent background compaction** | [#6029](https://github.com/HKUDS/nanobot/issues/6029) (new) | **High** — narrow scope, clear suppression flag |
| **Mobile keyboard UX** (newline vs send, streaming send button) | [#5640](https://github.com/HKUDS/nanobot/pull/5640) (merged today) | **Done** — shipped in today’s merges |
| **Touch-target compliance across WebUI** | [#6023](https://github.com/HKUDS/nanobot/pull/6023), [#6022](https://github.com/HKUDS/nanobot/pull/6022), [#6021](https://github.com/HKUDS/nanobot/pull/6021) (all merged) | **Done** |

**Prediction**: Next patch (`0.3.6`) will include today’s merged fixes + #6030 (CLI env). Next minor (`0.4.0`) likely targets subagent UX (#5985) and fallback notifications (#6031). Skill memory (#1651) remains a wildcard — could slip to `0.5.0`.

---

## 7. User Feedback Summary
| Pain Point | Evidence | Context |
|------------|----------|---------|
| **Desktop CLI integration broken under Wayland** | [#6024](https://github.com/HKUDS/nanobot/issues/6024) — Obsidian CLI works in terminal but not via NanoBot gateway | `XDG_RUNTIME_DIR` not propagated; blocks note-taking workflows |
| **Background maintenance spams chat channels** | [#6029](https://github.com/HKUDS/nanobot/issues/6029) — “Compressing context…” broadcast during idle/dream cycles | Users run NanoBot as persistent daemon; noise degrades channel signal |
| **No visibility when model fails over** | [#6031](https://github.com/HKUDS/nanobot/issues/6031) — fallback works but channels see no signal | Critical for multi-provider setups; users assume primary model still active |
| **Mobile WebUI unusable for preview/actions** | Touch controls too small, keyboard covers nav, unsupported preview offered | Addressed by today’s merged PRs (#6021–6023, #5640) |
| **TUI loses queued messages on network hiccup** | [#6026](https://github.com/HKUDS/nanobot/pull/6026) — send failure discards queue head | Terminal power users expect resilience |

**Satisfaction signals**: Rapid fix turnaround (same-day PR for #6024), mobile WebUI overhaul landed, TUI regression tests passing (257/257). **Dissatisfaction**: Long-standing skill memory PR (#1651) unmerged; background noise and fallback silence are new regressions in daemon use-cases.

---

## 8. Backlog Watch — Stale but Important
| Item | Age | Why It Needs Attention |
|------|-----|------------------------|
| [#1651](https://github.com/HKUDS/nanobot/pull/1651) — **Skill memory & query-aware retrieval** | Opened 2026-03-07 (7 months) | Foundational for agent reuse; enables “learned workflows” across sessions. Large diff, but tests & docs included. Maintainer review bottleneck? |
| [#5985](https://github.com/HKUDS/nanobot/pull/5985) — **Subagent messaging & cancellation** | Opened 2026-09-30 (4 days, but builds on #5976) | Core multi-agent UX; WebUI already separates active/results. Should be fast-tracked if #5976 merged. |
| [#5764](https://github.com/HKUDS/nanobot/pull/5764) — **Serialize half-open fallback probes** | Opened 2026-09-14 (20 days) | Concurrency bug in provider fallback; fix ready with test. Low risk, high stability value. |
| [#6018](https://github.com/HKUDS/nanobot/pull/6018) — **MCP full catalog discovery** | Opened 2026-10-03 (1 day) | Completes MCP support (tools done in #5916). Blockers for users with paginated resource/prompt servers. |

**Recommendation**: Prioritize #1651 review (assign dedicated reviewer), merge #5764/#6018 this week, and fast-track #5985 once #5976 lands. The 7-month skill memory PR is the single largest “value debt” in the backlog.

---

*Digest generated from GitHub API data as of 2026-10-04. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-10-04

## 1. Today's Overview
Hermes Agent shows **high maintenance velocity** with 50 PRs updated and 7 issues touched in the last 24 hours, but **no new releases**. The project is in a heavy stabilization phase: the majority of open PRs target the update/install pipeline, session-state integrity, Windows compatibility, and security dependency bumps. Community engagement is moderate—two mobile-app feature requests gathered 9 👍 combined, while most bugs have few reactions. No critical outages are reported, but several P2 bugs affect billing accuracy, Slack integration, and dashboard paste behavior on LAN deployments.

## 2. Releases
**No new releases today.** The last published version remains unchanged; all changes are landing on `main` via the 50 active PRs.

## 3. Project Progress — Merged / Closed PRs (9 total)
| PR | Area | Summary |
|----|------|---------|
| [#132600](https://github.com/NousResearch/hermes-agent/pull/132600) | **MCP / Gateway** | **Merged** — Scoped MCP server reload over gateway control socket (atomic, no restart). |
| #132386 | **CLI / Update** | Updater contract C3: post-commit steps never fail `hermes update`. |
| #132361 | **CLI / Update** | Git/ZIP swap made a single crash-safe commit point. |
| #132338 | **CLI / Update / Windows** | Killed Windows updater no longer strands paused gateways. |
| #132365 | **CLI / Update** | Update marker v2 with owner liveness + global checkout lock. |
| #125506 | **Kanban / Workers** | Workers now spawned via published launcher (fixes `ModuleNotFoundError`). |
| #126197 | **Memory** | `retrieval_count` incremented at retrieval exits (was stuck at 0). |
| #129752 | **Gateway / Plugins** | `pre_gateway_dispatch` hook now runs for mid-turn messages. |
| #132599 | **Tools / Delegate** | Delegation dispatch line aged at render time, not completion. |

**Key theme:** The update/install subsystem received 5 merged PRs hardening atomicity, Windows safety, and post-commit guarantees.

## 4. Community Hot Topics
| Item | Type | Signals | Underlying Need |
|------|------|---------|-----------------|
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | Feature | 8 comments, **9 👍** | Native iOS/Android app with **voice calling** — users want hands-free, phone-style AI interaction. |
| [#132592](https://github.com/NousResearch/hermes-agent/issues/132592) | Feature | 1 comment, 0 👍 | Duplicate of above; community member already maintains an **Android companion app** (MIT) — signals demand + existing effort. |
| [#58226](https://github.com/NousResearch/hermes-agent/issues/58226) | Bug | 9 comments, 1 👍 | **Anthropic OAuth billing shows 100% used** when actual utilization is <1% — breaks trust in usage dashboard. |
| [#132594](https://github.com/NousResearch/hermes-agent/issues/132594) | Bug | 2 comments | Slack status line broken on slack-sdk ≥3.44 (wrong API call) — affects all Slack-integrated teams. |
| [#132591](https://github.com/NousResearch/hermes-agent/issues/132591) | Bug | 0 comments | Dashboard paste (`Ctrl+V`) silently fails on **plain-HTTP LAN IPs** (non-secure context) — hits self-hosters/NAS users. |

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Component | Fix PR? |
|----------|-------|-----------|---------|
| **P2** | [#58226](https://github.com/NousResearch/hermes-agent/issues/58226) Anthropic OAuth usage ×100 scaling bug | `agent/account_usage.py` | ❌ No PR yet |
| **P2** | [#132594](https://github.com/NousResearch/hermes-agent/issues/132594) Slack status line broken on slack-sdk 3.44+ | `platform/slack` | ❌ No PR yet |
| **P2** | [#132598](https://github.com/NousResearch/hermes-agent/pull/132598) Custom endpoint credential aliases not cleared on blank save | `cli/auth/config` | ✅ **Open PR #132598** |
| **P3** | [#132498](https://github.com/NousResearch/hermes-agent/issues/132498) Kanban artifacts written to `~/.hermes/cache/scratch` (pruned after 24h) | `tools/kanban` | ❌ No PR yet |
| **P3** | [#132591](https://github.com/NousResearch/hermes-agent/issues/132591) Dashboard paste fails on non-secure HTTP LAN | `dashboard` | ❌ No PR yet |
| **P3** | [#132599](https://github.com/NousResearch/hermes-agent/pull/132599) Delegation dispatch age stale | `tools/delegate` | ✅ **Open PR #132599** |
| **P2** | [#132601](https://github.com/NousResearch/hermes-agent/pull/132601) High-severity npm advisories in root/web/ui-tui overrides | `security/deps` | ✅ **Open PR #132601** |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood Next Version |
|---------|--------|-------------------------|
| **Native mobile apps (iOS/Android) with voice calling** | [#11911](https://github.com/NousResearch/hermes-agent/issues/11911), [#132592](https://github.com/NousResearch/hermes-agent/issues/132592) | Medium — community Android app exists; iOS gap remains; voice calling implies audio pipeline work. |
| **Slack task card showing current step** | [#132595](https://github.com/NousResearch/hermes-agent/issues/132595) | High — small UI tweak, aligns with existing native task cards. |
| **Configurable Quick Entry window position (drag + settings)** | [#132596](https://github.com/NousResearch/hermes-agent/pull/132596) | **Very High** — PR already open, desktop-focused, low risk. |
| **Scoped MCP server reload (no gateway restart)** | [#132600](https://github.com/NousResearch/hermes-agent/pull/132600) | **Done** — merged today. |

## 7. User Feedback Summary
- **Self-hosters on LAN** hit silent paste failure ([#132591](https://github.com/NousResearch/hermes-agent/issues/132591)) — non-secure context blocks Clipboard API; need fallback.
- **Anthropic OAuth users** see misleading 100% usage ([#58226](https://github.com/NousResearch/hermes-agent/issues/58226)) — billing trust issue.
- **Slack-heavy teams** lose live status after SDK upgrade ([#132594](https://github.com/NousResearch/hermes-agent/issues/132594)).
- **Mobile demand** is vocal (9 👍) and already partially met by community Android app ([#132592](https://github.com/NousResearch/hermes-agent/issues/132592)).
- **Windows updater** stability improved via merged PRs (#132338, #132365) — addresses prior stranding pain.

## 8. Backlog Watch — Stale / High-Impact Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#58226](https://github.com/NousResearch/hermes-agent/issues/58226) Anthropic usage ×100 bug | **Opened 2026-07-04** (92 days) | P2 billing accuracy; 9 comments, no fix PR. |
| [#89978](https://github.com/NousResearch/hermes-agent/pull/89978) Reconcile finished prompt-run threads at session teardown | **Opened 2026-08-19** (46 days) | P2 session-state leak; blocks new dispatches. |
| [#90020](https://github.com/NousResearch/hermes-agent/pull/90020) Retry kanban notifications on dispatch rejection | **Opened 2026-08-19** (46 days) | P3 but causes **permanent notification loss**. |
| [#89954](https://github.com/NousResearch/hermes-agent/pull/89954) Strip managed leaves after config merge | **Opened 2026-08-19** (46 days) | P2 config pinning bypass; security boundary. |
| [#112864](https://github.com/NousResearch/hermes-agent/pull/112864) Skip pre-compress checkpoint for persistence-isolated forks | **Opened 2026-09-16** (18 days) | P2 compression pipeline; affects background review/`/btw`. |
| [#127857](https://github.com/NousResearch/hermes-agent/pull/127857) First checkpoint cold-start budget | **Opened 2026-09-29** (5 days) | P2 checkpoint unreachable on large initial `git add`. |

---

**Health Indicators**  
- 🟢 **Merge throughput**: 9 PRs merged today, 5 on update subsystem alone.  
- 🟡 **Issue triage**: 7 new/updated issues, but 3 P2 bugs lack fix PRs.  
- 🟢 **Security**: Active npm audit remediation ([#132601](https://github.com/NousResearch/hermes-agent/pull/132601)).  
- 🟡 **Community features**: Mobile/voice demand clear, but no core-team PR yet.  

*Next digest: 2026-10-05.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-10-04

---

## 1. Today's Overview
PicoClaw showed **minimal activity** in the last 24 hours: one stale bug issue was updated (comments added), but no pull requests, merges, or new releases. The project appears to be in a **maintenance lull** with no active development pushes or version cuts. Community interaction is limited to a single discussion on a QQ-channel compatibility regression. Overall project health signals low momentum; maintainers may be focused elsewhere or awaiting upstream API stabilization.

---

## 2. Releases
**No new releases** published today. The latest tagged version remains unchanged.

---

## 3. Project Progress
**No pull requests merged or closed today.** Zero PR activity means no features advanced, no fixes landed, and no code-review cycles completed in the last 24 h.

---

## 4. Community Hot Topics
| Item | Link | Activity | Core Need |
|------|------|----------|-----------|
| **#3394** `[BUG] QQ机器人的接口更新了，但QQ聊天通道的接口似乎没有更新，希望修复` | [sipeed/picoclaw#3394](https://github.com/sipeed/picoclaw/issues/3394) | 2 comments, 0 👍, stale label | **Upstream API drift**: QQ’s bot platform changed its HTTP/WebSocket contracts; PicoClaw’s QQ channel adapter is now broken. Users cannot send/receive messages until the connector is updated to match the new endpoints, auth flow, and payload schemas. |

*Analysis*: This is the **sole active thread** and represents a **blocking integration failure** for any user relying on the QQ channel. The “stale” label suggests it may have been auto-tagged due to age (created 2026-09-26), yet it received fresh comments yesterday, indicating ongoing user impact.

---

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High (blocking)** | #3394 – QQ channel broken after upstream API change | Open, stale | **No** |

No other crashes, regressions, or stability reports surfaced today.

---

## 6. Feature Requests & Roadmap Signals
- **Only signal**: Users implicitly request **“keep channel adapters in sync with upstream API changes”** (via #3394).  
- **Prediction**: The next patch/minor release will likely contain a **QQ-channel compatibility fix** (updated endpoints, token handling, event parsing). No other feature requests are visible in today’s data.

---

## 7. User Feedback Summary
- **Pain point**: “QQ bot stopped working overnight; no messages go in or out.”  
- **Use case**: Self-hosted PicoClaw instances bridged to QQ groups for community moderation / LLM chat.  
- **Sentiment**: Neutral-to-frustrated — issue is stale but recently bumped, suggesting users are waiting but not yet escalating.  
- **Satisfaction**: Indeterminate; no praise or broader feedback captured today.

---

## 8. Backlog Watch
| Item | Link | Age | Why It Needs Attention |
|------|------|-----|------------------------|
| **#3394** QQ channel API mismatch | [#3394](https://github.com/sipeed/picoclaw/issues/3394) | 8 days (created 2026-09-26) | **Blocking bug for a major channel**; no fix PR, no maintainer reply in latest comments. Should be triaged, assigned, or at least acknowledged to prevent contributor drift. |

*No other long-unanswered issues or PRs appear in today’s snapshot.*

---

**Bottom line**: PicoClaw is quiet today. The single actionable item is **#3394** — a high-severity channel breakage that merits immediate maintainer triage to unblock QQ users and signal project responsiveness.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-10-04

## 1. Today's Overview
NanoClaw shows **high maintenance velocity** with 33 PRs and 7 issues updated in the last 24 hours, yet **zero new releases** — indicating a focus on stabilization, hardening, and CI/CD pipeline maturation over feature delivery. The merged PRs (13) cluster around update reliability, container orchestration, gateway security, and logging robustness. Open issues reveal systemic pain points in long-running local-model turns, scheduled-task error visibility, and task/chat-session routing conflicts. Project health appears **strong on operational hygiene** but **strained by architectural debt** in the agent-runner/container boundary and gateway skill pipeline.

## 2. Releases
**No new releases published today.** The latest activity is all pre-release stabilization.

## 3. Project Progress — Merged/Closed PRs (13)
| PR | Area | Summary |
|----|------|---------|
| [#4016](https://github.com/nanocoai/nanoclaw/pull/4016) | setup-installation | **Critical fix**: Load gateway helpers *before* cutover swaps `node_modules`, preventing crashes when updates bump `tsx`/`esbuild` (root cause of [#4004](https://github.com/nanocoai/nanoclaw/issues/4004)). |
| [#4013](https://github.com/nanocoai/nanoclaw/pull/4013) | channels, security | **Security fix**: Authenticate loopback Gateway webhook — closes [#2970](https://github.com/nanocoai/nanoclaw/issues/2970) (local action forgery via unauthenticated forwarded gateway). |
| [#4008](https://github.com/nanocoai/nanoclaw/pull/4008) | channels, skills | Fix iMessage gateway: open `chat.db` using core's prebuilt `better-sqlite3`, avoiding missing binary after pnpm build skip ([#3443](https://github.com/nanocoai/nanoclaw/pull/3443)). |
| [#4005](https://github.com/nanocoai/nanoclaw/pull/4005) | skills, hardening | Bump `@grpc/grpc-js` to 1.14.5 in Iron approval bridge (two advisories fixed). |
| [#3997](https://github.com/nanocoai/nanoclaw/pull/3997) | setup-installation, skills | Commit applied skill files during setup so fresh installs can run `/update-nanoclaw` without manual commits. |
| [#3985](https://github.com/nanocoai/nanoclaw/pull/3985) | setup-installation, security | Stop writing proxy credentials (user:pass) into world-readable systemd unit files. |
| [#4011](https://github.com/nanocoai/nanoclaw/pull/4011) | documentation | Document "niche fixes go on your own fork" contribution rule. |
| [#4009](https://github.com/nanocoai/nanoclaw/pull/4009) | CI, containers | Make agent-image pin bumps merge manually; drop auto-approver. |
| [#4010](https://github.com/nanocoai/nanoclaw/pull/4010) | CI, containers | Open agent-image repin PR as `image-refresh` App (bypass `GITHUB_TOKEN` PR restriction). |
| [#3912](https://github.com/nanocoai/nanoclaw/pull/3912) | CI, repository-maintenance | Run area labeler *after* label-pr to stop it wiping kind/guideline labels. |
| [#3989](https://github.com/nanocoai/nanoclaw/pull/3989) | skills, hardening | Pin OneCLI gateway to 1.42.0 (credential-injection bypass fix). |
| [#4001](https://github.com/nanocoai/nanoclaw/pull/4001) | setup-installation | Mirror host pnpm patches/overrides in nested-pnpm probe (fixes test failures after `/add-matrix` or `/add-imessage`). |
| [#4018](https://github.com/nanocoai/nanoclaw/pull/4018) | channels, setup-installation | Use monotonic clock for Signal daemon startup wait (fixes Pi boot-time clock step). |

**Theme**: Update pipeline reliability, gateway/skill supply-chain security, and edge-case hardening for embedded/hobbyist hardware (Raspberry Pi).

## 4. Community Hot Topics
| Item | Type | Engagement | Core Need |
|------|------|------------|-----------|
| [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) | Issue (bug, high) | 2 comments, 0 👍 | **Configurable container kill ceiling** — hardcoded 30-min `ABSOLUTE_CEILING_MS` kills long local-model turns; no config seam. Blocks production local-LLM workloads. |
| [#3984](https://github.com/nanocoai/nanoclaw/issues/3984) | Issue (bug) | 1 comment, 0 👍 | **PreCompact hook crash** — `compact-instructions.ts` calls `getAllDestinations()` without registered mailbox; breaks compaction on every run. |
| [#3223](https://github.com/nanocoai/nanoclaw/issues/3223) | Issue (bug) | 1 comment, 0 👍 | **Scheduled-task error visibility** — errors produce unroutable messages silently dropped; operators never learn tasks failed. |
| [#3301](https://github.com/nanocoai/nanoclaw/issues/3301) | Issue (bug) | 1 comment, 0 👍 | **Task-in-chat regression** — one-door delivery ([#2988](https://github.com/nanocoai/nanoclaw/pull/2988)) drops logs, eats replies, unlists series. |
| [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) | PR (bug, old) | 0 comments, open since Jun 12 | **Discord attachment staging** — bridge drops attachments exposing only CDN `url` (images, `message.txt`). Long-standing channel parity gap. |

**Analysis**: The loudest signal is **local-model operator friction** (#3643, #3984) — users running self-hosted LLMs hit hard ceilings and compaction crashes. Scheduled-task observability (#3223) and Discord media parity (#2752) are chronic gaps affecting multi-channel deployments.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? | Impact |
|----------|-------|--------|---------|--------|
| **Critical** | [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) Hardcoded 30-min container kill ceiling | Open | No | Kills long local-model turns mid-stream; no workaround except forking. |
| **Critical** | [#3984](https://github.com/nanocoai/nanoclaw/issues/3984) PreCompact hook crashes on every compaction | Open | No | Compaction completely broken; affects all agents using context compaction. |
| **High** | [#4004](https://github.com/nanocoai/nanoclaw/issues/4004) Update cutover crashes on `tsx`/`esbuild` bump | **Closed** | [#4016](https://github.com/nanocoai/nanoclaw/pull/4016) ✅ | Update fails at final step, triggers rollback (which then has its own bug [#4003](https://github.com/nanocoai/nanoclaw/issues/4003)). |
| **High** | [#4003](https://github.com/nanocoai/nanoclaw/issues/4003) Rollback deletes half of `data/`, leaves host down | **Closed** | No (investigation) | Rollback after failed update corrupts data dir; host unrecoverable without manual intervention. |
| **High** | [#2970](https://github.com/nanocoai/nanoclaw/issues/2970) Local action forgery via unauthenticated webhook | **Closed** | [#4013](https://github.com/nanocoai/nanoclaw/pull/4013) ✅ | Security: any local process could forge gateway events. |
| **Medium** | [#3223](https://github.com/nanocoai/nanoclaw/issues/3223) Scheduled-task errors silently dropped | Open | No | Operators unaware of task failures; no alerting path. |
| **Medium** | [#3301](https://github.com/nanocoai/nanoclaw/issues/3301) Task-in-chat logs dropped, replies eaten | Open | No | Regression from one-door delivery; breaks hybrid task/chat workflows. |
| **Medium** | [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) Discord attachments with only URL unreadable | Open (PR) | **PR exists** | Images & pasted text (`message.txt`) invisible to agent; 4-month-old fix awaiting review. |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Configurable container timeouts** (replace `ABSOLUTE_CEILING_MS`) | [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) | High — blocking local-LLM adoption; labeled `priority/high`, `area/containers`. |
| **Scheduled-task error routing/notification** | [#3223](https://github.com/nanocoai/nanoclaw/issues/3223) | Medium — architectural (task messages lack routing fields by design). |
| **Task/chat session coexistence** (fix one-door regression) | [#3301](https://github.com/nanocoai/nanoclaw/issues/3301) | Medium — requires query-mode refactor; impacts legacy task data. |
| **Discord attachment URL staging** | [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) | High — PR ready, core-team labeled, 4 months stale. |
| **Monotonic clock for all daemon waits** | [#4018](https://github.com/nanoclaw/pull/4018) (merged) | Done — pattern likely to propagate to other adapters. |
| **Automated agent-image repin PRs (manual merge)** | [#4009](https://github.com/nanocoai/nanoclaw/pull/4009), [#4010](https://github.com/nanocoai/nanoclaw/pull/4010) | Done — CI pipeline now opens PRs; merge stays human. |

**Prediction**: Next patch will ship the `#3643` config seam (highest priority), `#2752` Discord fix (PR ready), and possibly `#3223` error routing if design consensus emerges. Compaction crash `#3984` must land before any release.

## 7. User Feedback Summary
**Pain points from issues**:
- **Local-model operators** (#3643): "Long turns killed mid-generation; 30-min ceiling is arbitrary and unconfigurable. We run 70B models — turns exceed this routinely."
- **Scheduled-task users** (#3223): "Tasks fail silently. We only discover failures by checking logs manually. No webhook, no notification, no message in chat."
- **Hybrid task/chat users** (#3301): "Since 2.1.48, tasks firing in chat sessions break: logs vanish, agent replies disappear, series unlisted. We reverted to 2.1.47."
- **Compaction users** (#3984): "Every compaction crashes the PreCompact hook. Agent memory grows unbounded."
- **Updaters** (#4004, #4003): "Update crashed at 99%, rollback deleted half our data. Host down for hours."

**Positive signals**: Rapid fix turnaround on update pipeline (#4004 → #4016 in 2 days), security patch for webhook auth (#2970 → #4013 same day), and CI hardening for supply chain.

## 8. Backlog Watch — Stale & Needing Attention
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) Discord attachment URL staging | 115 days | Core channel parity; PR complete, core-team labeled, zero review comments. | **Review & merge** — unblocks Discord media for all users. |
| [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) Configurable container ceiling | 37 days | `priority/high`, blocks local-LLM production use. | **Design config seam** (env var? `nanoclaw.toml`?); assign to container team. |
| [#3223](https://github.com/nanocoai/nanoclaw/issues/3223) Scheduled-task error routing | 55 days | Observability gap for automation-heavy deployments. | **RFC**: add `error_destination` field to task spec or auto-route to admin DM. |
| [#3301](https://github.com/nanocoai/nanoclaw/issues/3301) Task-in-chat regression | 48 days | Regression from deliberate architectural change (#2988). | **Decide**: support hybrid mode or document as unsupported; provide migration tool. |
| [#3984](https://github.com/nanocoai/nanoclaw/issues/3984) PreCompact hook mailbox crash | 3 days | Compaction totally broken; affects every agent using compaction. | **Urgent**: fix mailbox registration order in compaction path; should be in next patch. |

---

**Bottom line**: NanoClaw is in a **hardening sprint** — update reliability, gateway security, and CI/CD automation are shipping fast. The **top user-facing blockers** are local-model timeouts (#3643), compaction crashes (#3984), and silent scheduled-task failures (#3223). The 4-month-old Discord attachment PR (#2752) is a process smell: ready-to-merge fixes shouldn't stall this long. Expect a patch release once #3643 and #3984 land.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-10-04

## 1. Today's Overview
NullClaw shows **zero merged or closed pull requests** and **no new issues or releases** in the last 24 hours. However, **20 pull requests were updated yesterday (2026-10-03)**, all authored by `vernonstinebaker`, indicating an active development push focused on hardening, documentation, and quality-of-life improvements across channels, providers, memory, CLI, and agent internals. The project is in a **pre-release stabilization phase** with a backlog of refined fixes awaiting review/merge. No community-reported issues or external contributions appear in this window.

## 2. Releases
**None** — No new releases published in the last 24 hours.

## 3. Project Progress
**No PRs were merged or closed today.** All 20 PRs remain **open** and were last updated on 2026-10-03. Key thematic advances in the open queue:

| Area | PRs | Focus |
|------|-----|-------|
| **Gateway / Channels** | #953, #954, #1002, #1010 | Discord gateway socket recovery, outbound ownership, HTTPS typing stack sizing, self-message loop prevention |
| **Scheduler / Auth** | #959 | Scoped cron credentials with encrypted persistence |
| **Providers** | #962, #963, #966, #1004 | Anthropic native setup, Weixin iLink QR auth, Android curl fallback, error-body logging |
| **Agent / Memory** | #971, #987, #1001, #1005, #1011 | Streaming native tool calls, loop hygiene (prompt compression, dedup), configurable recall, archive exclusion, tool-call parse cleanup |
| **CLI / UX** | #970, #1006 | REPL arrow-key support, streamed stdout append fix |
| **Skills / A2A** | #1003, #1012 | Symlinked skill directories, bearer-scoped task/session isolation |
| **Documentation** | #1007, #1008 | Diagnostics flags, index repair, subsystem guides (MCP, subagents, voice, hardware, skills) |

## 4. Community Hot Topics
**No issues or PRs have comments or reactions** in the provided data. All 20 PRs show `Comments: undefined` and `👍: 0`. The conversation is entirely internal (single-author). No external community signal is visible in this window.

## 5. Bugs & Stability
No **new** bugs were reported today (0 issues). However, the open PR queue addresses **known stability risks** — ranked by inferred severity:

| Severity | PR | Issue Fixed |
|----------|-----|-------------|
| **High** | [#1002](https://github.com/nullclaw/nullclaw/pull/1002) | HTTPS typing workers overflow 512 KiB stack in Zig TLS → gateway crash (Discord, Telegram, MAX) |
| **High** | [#1010](https://github.com/nullclaw/nullclaw/pull/1010) | Bot replies to itself when `allow_bots=true` + `require_mention` → infinite loop |
| **Medium** | [#953](https://github.com/nullclaw/nullclaw/pull/953) | Stalled Discord gateway sockets not recovered; unsafe shutdown ownership |
| **Medium** | [#1005](https://github.com/nullclaw/nullclaw/pull/1005) | Archived conversation shards recalled into live prompt → model sees current message as history |
| **Medium** | [#1011](https://github.com/nullclaw/nullclaw/pull/1011) | `parseXmlToolCalls` leaks allocations on append failure |
| **Medium** | [#966](https://github.com/nullclaw/nullclaw/pull/966) | Android DNS resolution fails in stdlib HTTP; curl fallback incomplete |
| **Low** | [#1006](https://github.com/nullclaw/nullclaw/pull/1006) | Streamed CLI stdout overwrites at offset 0 (macOS pipe corruption) |

All have **open fix PRs**; none merged yet.

## 6. Feature Requests & Roadmap Signals
No user-facing feature requests (issues) in this window. The **open PRs themselves signal near-term roadmap priorities**:

| Likely Next-Version Features | Source PRs |
|------------------------------|------------|
| **Configurable memory recall** (`auto_recall`, `recall_limit`, `max_context_bytes`) | [#1001](https://github.com/nullclaw/nullclaw/pull/1001) |
| **Native tool calls during SSE streaming** (decoupled from prompt injection) | [#971](https://github.com/nullclaw/nullclaw/pull/971) |
| **Agent loop hygiene** (prompt prefix caching, tool-output compression, identical-call dedup) | [#987](https://github.com/nullclaw/nullclaw/pull/987) |
| **Symlinked skill directories** (with safety checks) | [#1003](https://github.com/nullclaw/nullclaw/pull/1003) |
| **Bearer-scoped A2A tasks & context sessions** | [#1012](https://github.com/nullclaw/nullclaw/pull/1012) |
| **REPL line editing** (arrow keys, history, word navigation) | [#970](https://github.com/nullclaw/nullclaw/pull/970) |
| **Comprehensive docs** (diagnostics, MCP, subagents, voice, hardware, skills) | [#1007](https://github.com/nullclaw/nullclaw/pull/1007), [#1008](https://github.com/nullclaw/nullclaw/pull/1008) |

## 7. User Feedback Summary
**No direct user feedback** (issues, discussions, reactions) captured in the last 24h. Pain points are inferred from fix PRs:
- **Gateway instability** on Discord/Telegram/MAX under TLS stack pressure
- **Self-trigger loops** when bots mention themselves
- **Memory pollution** from archived conversations
- **CLI output corruption** on macOS
- **Android network compatibility** (Termux)
- **Documentation gaps** for diagnostics, subsystems, and provider setup

## 8. Backlog Watch
**All 20 PRs are stale-open** (created Jun–Sep 2026, updated 2026-10-03, zero review activity). Highest-priority candidates for maintainer attention:

| PR | Age | Risk if Unmerged |
|----|-----|------------------|
| [#953](https://github.com/nullclaw/nullclaw/pull/953) | 114 days | Gateway socket leaks → connection storms |
| [#959](https://github.com/nullclaw/nullclaw/pull/959) | 110 days | Cron auth broken on paired/public gateways |
| [#962](https://github.com/nullclaw/nullclaw/pull/962) | 108 days | Anthropic provider misbehaves on streaming/tools |
| [#963](https://github.com/nullclaw/nullclaw/pull/963) | 108 days | Weixin iLink QR auth undocumented & fragile |
| [#966](https://github.com/nullclaw/nullclaw/pull/966) | 107 days | Android/Termux HTTP fundamentally broken |
| [#970](https://github.com/nullclaw/nullclaw/pull/970) | 97 days | REPL unusable without arrow keys |
| [#971](https://github.com/nullclaw/nullclaw/pull/971) | 97 days | Native streaming tools disabled → prompt injection fallback |
| [#987](https://github.com/nullclaw/nullclaw/pull/987) | 50 days | Agent memory/context bloat on long tool-heavy runs |
| [#1002](https://github.com/nullclaw/nullclaw/pull/1002) | 10 days | **Gateway crash** on typing indicators (high severity) |
| [#1010](https://github.com/nullclaw/nullclaw/pull/1010) | 8 days | **Infinite self-reply loop** (high severity) |

> **Recommendation**: Prioritize review/merge of #1002, #1010, #966, #953, #1011 (crash/leak/loop fixes), then batch the QoL/docs PRs (#970, #971, #987, #1001, #1003, #1007, #1008) for a consolidated stabilization release.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-10-04

---

## 1. Today's Overview
LobsterAI shows **low velocity but active community engagement** today. Six issues and one pull request were updated in the last 24 hours, though all issues carry a `[stale]` label—indicating they were auto-marked inactive but have received recent comments or edits. No PRs were merged and no releases shipped. The open PR (#2374) addresses a UI/UX annoyance (sidebar ad banner), while the issues span **account/billing confusion, a critical SQLite data-integrity bug, broken desktop slash commands, WeChat link failures, and a transaction-consistency defect**. Overall project health: **maintenance mode with unresolved stability debt**.

---

## 2. Releases
**None.** No new versions published today.

---

## 3. Project Progress
**No PRs merged or closed today.**  
The sole active PR remains open:

| PR | Title | Status | Notes |
|----|-------|--------|-------|
| [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | feat: add permanent setting to hide sidebar ad banner | Open | Addresses #2342; adds toggle in Settings → General. Awaiting review/merge. |

---

## 4. Community Hot Topics
*Ranked by recent update + comment count (all updated 2026-10-03).*

| Issue | Comments | Core Need / Signal |
|-------|----------|---------------------|
| [#884](https://github.com/netease-youdao/LobsterAI/issues/884) — Account login & paid “fuel pack” questions | 2 | **User onboarding gap**: New users unclear on login vs. guest features, credit applicability, and BYOM (bring-your-own-model) interaction. |
| [#885](https://github.com/netease-youdao/LobsterAI/issues/885) — WeChat link unusable | 2 | **Integration breakage**: Screenshots show WeChat share/deep-link flow failing—likely impacts viral/distribution channel. |
| [#879](https://github.com/netease-youdao/LobsterAI/issues/879) — SQLite FK constraints off → cascade delete broken → DB bloat | 1 | **Data integrity / stability**: Critical. `PRAGMA foreign_keys=OFF` by default in sql.js; orphan `cowork_messages` accumulate on session delete. |
| [#883](https://github.com/netease-youdao/LobsterAI/issues/883) — Windows desktop: all slash commands broken | 1 | **Desktop regression**: Core CLI-style shortcuts (`/status`, `/help`, `/think`, etc.) non-functional on Windows client. |
| [#867](https://github.com/netease-youdao/LobsterAI/issues/867) — `autoDeleteNonPersonalMemories()` transaction inconsistency | 1 | **Memory-management reliability**: Potential partial-deletes or leaked memory records. |
| [#873](https://github.com/netease-youdao/LobsterAI/issues/873) — PRD→EARS conversion + git worktree skill | 1 | **Power-user workflow**: Request for spec-to-EARS transform and git-worktree skill—signals demand for dev-centric agent skills. |

**Underlying theme**: Users hit **onboarding friction, desktop instability, and data-layer bugs**—while power users push for developer-toolchain skills.

---

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#879](https://github.com/netease-youdao/LobsterAI/issues/879) | SQLite foreign keys disabled → `ON DELETE CASCADE` ignored → `cowork_messages` orphaned → unbounded DB growth. Affects all sql.js-backed clients. | No |
| **High** | [#883](https://github.com/netease-youdao/LobsterAI/issues/883) | Windows desktop: *all* slash commands (`/status`, `/help`, `/reasoning`, `/think`, inline shortcuts) fail silently. Blocks core UX. | No |
| **Medium** | [#867](https://github.com/netease-youdao/LobsterAI/issues/867) | `autoDeleteNonPersonalMemories()` transaction inconsistency—may leave partial state. | No |
| **Medium** | [#885](https://github.com/netease-youdao/LobsterAI/issues/885) | WeChat link/share flow broken (screenshots attached). Impacts social onboarding. | No |

> **Note**: No fix PRs linked to any of the above. The only open PR (#2374) is a UI enhancement.

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| Permanent “hide sidebar ad banner” toggle | [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) (PR) | **High** — PR open, addresses #2342, trivial scope. |
| PRD → EARS conversion skill | [#873](https://github.com/netease-youdao/LobsterAI/issues/873) | **Medium** — Dev-facing skill; aligns with “agent as dev copilot” narrative. |
| Git worktree skill | [#873](https://github.com/netease-youdao/LobsterAI/issues/873) | **Medium** — Complements PRD→EARS; useful for parallel feature work. |
| Clearer login vs. guest feature matrix + fuel-pack docs | [#884](https://github.com/netease-youdao/LobsterAI/issues/884) | **Low–Medium** — Documentation/onboarding fix; no code PR yet. |

---

## 7. User Feedback Summary
- **Pain points**:  
  - *“Slash commands completely broken on Windows desktop”* (#883) — core power-user workflow blocked.  
  - *“Database keeps growing because cascade delete doesn’t work”* (#879) — silent data corruption risk.  
  - *“WeChat links don’t open”* (#885) — distribution channel broken.  
  - *“Confused what login unlocks and whether my own model works with fuel packs”* (#884) — monetization/BYOM messaging unclear.  
- **Positive signal**: Community members (e.g., `tomZou12`, `noransu`) file **detailed technical bugs with root-cause analysis** (sql.js PRAGMA, transaction logic)—indicates engaged developer-user base.

---

## 8. Backlog Watch
*Long-open, high-impact items with no maintainer response or fix PR.*

| Item | Age (created) | Why It Matters |
|------|---------------|----------------|
| [#879](https://github.com/netease-youdao/LobsterAI/issues/879) — SQLite FK / cascade delete | 2026-03-25 (~6 months) | **Data integrity**; affects every user’s local DB. Simple fix: `PRAGMA foreign_keys = ON` at connection init. |
| [#883](https://github.com/netease-youdao/LobsterAI/issues/883) — Windows slash commands | 2026-03-25 | **Desktop UX regression**; blocks `/help`, `/status`, `/think`—core discoverability. |
| [#867](https://github.com/netease-youdao/LobsterAI/issues/867) — Memory deletion transaction bug | 2026-03-25 | **Reliability** of long-term memory subsystem. |
| [#885](https://github.com/netease-youdao/LobsterAI/issues/885) — WeChat link broken | 2026-03-26 | **Growth channel**; social sharing broken with screenshots provided. |

> **Maintainer action suggested**: Prioritize #879 (one-line fix, high risk) and #883 (desktop blocker). Assign triage for #884 (docs/onboarding) and #885 (platform integration).

---

*Generated from GitHub data as of 2026-10-04. Links point to live issues/PRs on `netease-youdao/LobsterAI`.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-10-04

## 1. Today's Overview
CoPaw shows high maintenance velocity with **7 open PRs** and **5 issues updated** in the last 24 hours, though no releases were cut. The backlog is dominated by **runtime correctness bugs** (multimodal gating, deep-link navigation, boot resilience, provider error handling) rather than new feature work. All 7 PRs are open — none merged today — indicating a review bottleneck. The closed issue (#7535) was a long-standing Matrix/Element compatibility enhancement, suggesting the team is clearing legacy items while tackling acute regressions in the 2.2.x line.

## 2. Releases
**No new releases** in the last 24 hours. The latest published version remains **2.2.1** (self-hosted) / **2.2.2b4** (container beta per issue #8092). Users on the beta channel are encountering provider-gateway integration issues (#8092) and multimodal regressions (#8093) that may warrant a patch release once the open PRs land.

## 3. Project Progress
**Merged/closed today:** Only issue #7535 (Element-specific Matrix compatibility) was closed — no PRs merged.  
**Active PRs advancing key fixes:**
- **#8100** (size/M) — Resolves the core multimodal capability mismatch (#8093) by using resolved metadata at runtime instead of raw provider records.
- **#8096** (size/S) — Surfaces `finish_reason="length"` truncation metadata, addressing silent answer truncation (#8085).
- **#8095** (size/S) — Fixes inter-agent message attribution so cross-session chats register under the correct user.
- **#8098** (size/S) — Returns explicit timeout tool results for foreground delegated-agent chats instead of silent cancellation.
- **#8099** (size/S) — Enables Qoder custom providers and context usage visibility in Console.
- **#8097** (size/XS) — Adds regression test for PDF tool-result replay (no runtime change).
- **#7004** (size/M, from Aug 13) — Persists spawn parent-child linkage in chat meta; still awaiting review.

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#8101](https://github.com/agentscope-ai/QwenPaw/issues/8101) | Bug | 1 | 0 | **Deep-link reliability** — external integrations (plugins, bots) cannot reliably open specific chat sessions across agents. |
| [#8094](https://github.com/agentscope-ai/QwenPaw/issues/8094) | Bug | 1 | 0 | **Boot resilience** — stale WebView2 cache after update permanently blocks console startup with no retry/error UI. |
| [#8093](https://github.com/agentscope-ai/QwenPaw/issues/8093) | Bug | 1 | 0 | **Multimodal trust** — catalog says model supports images, runtime rejects them; breaks user workflows for `mimo-v2.6-flash`, `glm-5.3-flash`. |
| [#8092](https://github.com/agentscope-ai/QwenPaw/issues/8092) | Bug | 1 | 0 | **Provider gateway hardening** — Ali-style gateway content-inspection false positives kill turns with no retry/fallback. |

**Pattern:** All four open issues are **runtime reliability regressions** affecting production deployments (self-hosted, container, Telegram channel). Users need **graceful degradation** (retries, fallbacks, error surfaces) rather than hard failures.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | [#8094](https://github.com/agentscope-ai/QwenPaw/issues/8094) | Console boot permanently blocked by stale WebView2 cache; no retry, no error surface. Affects all desktop users post-update. | None yet |
| **High** | [#8093](https://github.com/agentscope-ai/QwenPaw/issues/8093) | Runtime rejects image input for models cataloged as multimodal (`mimo-v2.6-flash`, `glm-5.3-flash`). Silent data loss. | **#8100** (open) |
| **High** | [#8092](https://github.com/agentscope-ai/QwenPaw/issues/8092) | Content-inspection false positives from Ali-style gateways classified as `bad_request`; turn killed, no retry/fallback. | None yet |
| **Medium** | [#8101](https://github.com/agentscope-ai/QwenPaw/issues/8101) | Global `/chat/<id>` deep link fails across agents; same-agent deep link fails to activate session. Breaks external integrations. | None yet |
| **Medium** | [#8085](https://github.com/agentscope-ai/QwenPaw/issues/8085) (referenced) | Truncated answers indistinguishable from complete ones — `finish_reason="length"` dropped. | **#8096** (open) |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Element-compatible Matrix login** (recovery-key, MAS/OIDC MSC2965) | #7535 (closed) | ✅ **Done** — landed in 2.2.x; closed after implementation. |
| **Persisted spawn parent-child linkage** | #7004 (PR, Aug 13) | ⚠️ **Pending review** — enables tool/skill inheritance tracking for subagents; high value for agent orchestration. |
| **Qoder custom provider & context visibility** | #8099 (PR) | ✅ **High** — small fix, unblocks BYOK workflows. |
| **Explicit timeout tool results** | #8098 (PR) | ✅ **High** — improves debuggability of delegated agent timeouts. |
| **Deep-link session activation** | #8101 (issue) | ⚠️ **Medium** — needs design for cross-agent session resolution; may slip to 2.3. |
| **Boot retry/error UI for WebView2** | #8094 (issue) | ⚠️ **Medium** — requires frontend work; critical for desktop stability. |

## 7. User Feedback Summary
- **Pain points:**  
  - **Silent failures** dominate: truncated answers (#8085), killed turns without retry (#8092), images dropped without notice (#8093), boot splash hangs indefinitely (#8094).  
  - **Integration friction:** Deep links don’t work across agents (#8101), breaking external tooling (plugins, bots, Telegram).  
  - **Provider mismatch:** Catalog/prober metadata diverges from runtime gates, eroding trust in model capabilities.  
- **Use cases revealed:**  
  - Multi-agent orchestration with `spawn_subagent` + tool whitelists (#7004).  
  - Production Telegram bots using OpenAI-compatible gateways with fallback chains (#8092).  
  - Desktop console users on auto-update channels hitting WebView2 cache issues (#8094).  
- **Sentiment:** Frustration with **observability gaps** (no error surfaces, no retry, no metadata on truncation). Users expect **resilience by default** in a 2.x release.

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#7004](https://github.com/agentscope-ai/QwenPaw/pull/7004) | 52 days | **feat(console): persist spawn parent-child linkage** — enables audit trail and tool inheritance for subagents; blocked on review despite being feature-complete. |
| [#8094](https://github.com/agentscope-ai/QwenPaw/issues/8094) | 1 day | **Console boot hard-fail** — zero-resilience design; affects every desktop update. Needs frontend owner triage. |
| [#8092](https://github.com/agentscope-ai/QwenPaw/issues/8092) | 1 day | **Provider gateway error classification** — false positives kill turns; needs retry/fallback policy in provider layer. |
| [#8101](https://github.com/agentscope-ai/QwenPaw/issues/8101) | 0 days | **Deep-link contract** — external integrations depend on this; requires routing spec across agent sessions. |

---

**Health Indicators:**  
- 🟡 **Review throughput** — 7 open PRs, 0 merged today; risk of stagnation.  
- 🔴 **Runtime reliability** — 4/5 open issues are regressions with user-facing impact.  
- 🟢 **Test coverage** — PR #8097 adds a regression test; good signal for PDF tool-result path.  
- 🟡 **Release cadence** — No patch since 2.2.1; beta users on 2.2.2b4 hit multiple bugs.

**Recommended next steps:**  
1. Prioritize merging **#8100**, **#8096**, **#8095**, **#8098**, **#8099** (all small, targeted fixes).  
2. Assign frontend owner to **#8094** (boot splash) — critical for desktop UX.  
3. Design retry/fallback policy for provider errors (**#8092**) and deep-link routing (**#8101**).  
4. Cut **2.2.2** once the above PRs land to unblock beta/production users.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-10-04

## 1. Today's Overview
ZeroClaw shows **high development velocity** with 24 active issues and 50 PRs updated in the last 24 hours, though only 1 PR was merged. The project is in a **heavy feature-development phase** targeting v0.8.6 and v0.9.0 milestones, with concentrated effort on the ZeroCode TUI/dashboard (config UX, session rendering, chat responsiveness), runtime/gateway config application plumbing, and security hardening (macOS sandbox, SQLite audit hygiene, OIDC credential encoding). No releases were cut today. The backlog contains several long-running trackers (e.g., #7432 runtime/gateway delivery) indicating architectural work still in progress.

## 2. Releases
**No new releases today.** The current focus remains on v0.8.6 (Phase 2 runtime) and v0.9.0 (Phase 3 gateway separation) per tracker [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432).

## 3. Project Progress
**Merged/Closed (1 PR):**
- The single merged/closed PR is not explicitly identified in the data, but 49 PRs remain open.

**Key Advances in Open PRs (stacked/dependent work):**
| PR | Area | Status |
|----|------|--------|
| [#11466](https://github.com/zeroclaw-labs/zeroclaw/pull/11466) | Config: per-target application results ledger | Open, stacked on #10911 |
| [#11506](https://github.com/zeroclaw-labs/zeroclaw/pull/11506) | ZeroCode: show saved vs applied config status | Open, stacked on #11466 |
| [#11511](https://github.com/zeroclaw-labs/zeroclaw/pull/11511) | ZeroCode: predictable Config save/cancel | Open, stacked on #11460 |
| [#11479](https://github.com/zeroclaw-labs/zeroclaw/pull/11479) | Runtime: recover structured native tool arguments (fixes MCP nested object bug #11371) | Open |
| [#11407](https://github.com/zeroclaw-labs/zeroclaw/pull/11407) | ZeroCode: render live session updates promptly under load | Open |
| [#11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456) | Tools: opt-in subprocess memory watchdog (shell_max_memory_mb) | Open |
| [#11458](https://github.com/zeroclaw-labs/zeroclaw/pull/11458) | Memory: harden audit hygiene SQLite admission | Open |
| [#11423](https://github.com/zeroclaw-labs/zeroclaw/pull/11423) | OIDC: preserve reserved chars in enrollment credentials | Open, stacked |
| [#11410](https://github.com/zeroclaw-labs/zeroclaw/pull/11410) | Auth: guard cron writes, contain unscoped execution | Open, stacked |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | Gateway: keep agent turns alive after viewer disconnect | Open (long-running, needs author action) |

## 4. Community Hot Topics
**Most active issues (by comment count):**
1. **[#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)** (14 comments) — Harden runtime-written executable test fixtures under parallel runtime gate. *Underlying need: test reliability in multi-threaded test execution.*
2. **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)** (5 comments) — Runtime/gateway delivery tracker for v0.8.6/v0.9.0. *Underlying need: release coordination and gap tracking for major architectural phases.*
3. **[#10876](https://github.com/zeroclaw-labs/zeroclaw/issues/10876)** (3 comments) — Gateway config writes to auth sections reported saved but never reach RPC authorization until daemon reload. *Underlying need: config propagation correctness for security-critical paths.*
4. **[#10892](https://github.com/zeroclaw-labs/zeroclaw/issues/10892)** (3 comments) — Publish canonical config generations and track per-target apply results. *Underlying need: observability of config adoption across running consumers.*
5. **[#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416)** (3 comments) — Slack "is thinking…" status missing in channel threads since v0.8.5. *Underlying need: channel UX parity for Slack integration.*

**PRs with notable stacking/dependencies:** #11466 → #11506 → #11511 form a config-observability stack; #11410 → #11411 → #11422 → #11423 form an auth/cron/OIDC hardening stack.

## 5. Bugs & Stability
**Reported/Active Bugs (ranked by severity):**

| Severity | Issue | Component | Fix PR |
|----------|-------|-----------|--------|
| **S1 (workflow blocked)** | [#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536) macOS Seatbelt ignores `allowed_roots` for shell commands | security/sandbox | — |
| **S2 (degraded)** | [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) SQLite session backend rewrites `created_at` of every message on each turn | gateway/api | — |
| **S2** | [#11371](https://github.com/zeroclaw-labs/zeroclaw/issues/11371) MCP nested object argument serialized as string before tool execution | runtime/daemon | [#11479](https://github.com/zeroclaw-labs/zeroclaw/pull/11479) |
| **S2** | [#10301](https://github.com/zeroclaw-labs/zeroclaw/issues/10301) ZeroCode Code pane session history hard to navigate/copy from SSH | zerocode/tui | — |
| **S2** | [#11484](https://github.com/zeroclaw-labs/zeroclaw/issues/11484) ZeroCode Agent turns disable repetitive-tool safeguards | zerocode/tui | — |
| **S2** | [#11482](https://github.com/zeroclaw-labs/zeroclaw/issues/11482) Chat updates wait behind unrelated log notifications | zerocode/tui | [#11407](https://github.com/zeroclaw-labs/zeroclaw/pull/11407) |
| **S3 (minor)** | [#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416) Slack "is thinking…" status not shown in channel threads | channel/slack | — |
| **Medium risk** | [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) Test fixtures writing executable shims under parallel runtime | tests/runtime | — |
| **High risk** | [#10199](https://github.com/zeroclaw-labs/zeroclaw/issues/10199) Plugin egress connect-deadline cannot cancel blocking `getaddrinfo` | runtime:wasm/security | — |

## 6. Feature Requests & Roadmap Signals
**Strong signals for next version (v0.8.6/v0.9.0):**

| Feature | Evidence | Likelihood |
|---------|----------|------------|
| **Config application observability** (per-target results, saved vs applied status) | Tracker #10892, PRs #11466, #11506, issues #11491, #11489, #11488, #11487, #11486, #11485 | **Very High** — 8+ issues/PRs in 24h |
| **ZeroCode Config UX overhaul** (multi-select alias pickers, readable labels, confirm deletions, predictable save/cancel) | Issues #11485–#11492, PRs #11501, #11502, #11504, #11510, #11511 | **Very High** — 10+ items from same author (Audacity88) |
| **Runtime/gateway separation (Phase 3)** | Tracker #7432, RFC #5574 | **High** — explicit milestone |
| **Effort-based local/cloud model routing** | [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) (parking lot, but accepted) | **Medium** — architectural, depends on local-first work |
| **Channel attachment routing for large files** | [#8527](https://github.com/zeroclaw-labs/zeroclaw/issues/8527) (icebox) | **Low** — deferred |
| **Subprocess memory watchdog** | PR #11456 (opt-in, behind flag) | **Medium** — implementation ready, needs review |
| **Bound skill HTTP DNS resolution** | [#10550](https://github.com/zeroclaw-labs/zeroclaw/issues/10550) | **Medium** — in progress, security-relevant |

## 7. User Feedback Summary
**Real pain points from issues:**
- **Config UX friction**: Users cannot tell if saved config is applied (#11491), empty sections lack guidance (#11490), field labels are cryptic (#11489), filters break both panes (#11488), destructive actions lack confirmation (#11487), save/cancel behavior inconsistent (#11486), alias references require memorization (#11485).
- **Session history loss**: SQLite backend overwrites per-message timestamps (#11420) — breaks audit/debugging.
- **Chat responsiveness**: Responses blocked by log notifications (#11482), session updates render late under load (#11407).
- **Tool calling reliability**: MCP nested objects stringified (#11371), repetitive web fetches not deduplicated (#11484).
- **Platform-specific blocks**: macOS sandbox ignores configured paths (#10536) — "workflow blocked" (S1).
- **Slack integration regression**: "Thinking" indicator missing in threads since v0.8.5 (#11416).
- **Test flakiness**: Parallel runtime gate exposes fixture races (#9965).

**No explicit satisfaction signals** in this dataset (no 👍 reactions on issues/PRs).

## 8. Backlog Watch
**Long-running / Stalled Items Needing Maintainer Attention:**

| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) Runtime/gateway delivery tracker | ~117 days | High | Owns v0.8.6/v0.9.0 release criteria; only 5 comments in 3.5 months |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) Gateway: keep agent turns alive after viewer disconnect | ~85 days | High | "Distinguished contributor", "needs-author-action", "stale-candidate" — architectural fix for WebSocket lifecycle |
| [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) Effort-based local/cloud model routing | ~107 days | High | Marked "parking-lot" but accepted; core to local-first strategy |
| [#8527](https://github.com/zeroclaw-labs/zeroclaw/issues/8527) Route large files through channel attachments | ~96 days | Medium | "Icebox" — UX improvement for agent-generated artifacts |
| [#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536) macOS Seatbelt ignores allowed_roots | ~32 days | High | S1 severity, workflow-blocking, no fix PR visible |
| [#10199](https://github.com/zeroclaw-labs/zeroclaw/issues/10199) Plugin egress connect-deadline vs getaddrinfo | ~44 days | High | DNS resolution blocks deadline enforcement — security surface |
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) Harden test fixtures under parallel runtime | ~52 days | Medium | 14 comments, in-progress, test infrastructure debt |

**Recommendation:** Prioritize merging the config-observability stack (#11466 → #11506 → #11511) and ZeroCode Config UX stack (#11501, #11502, #11504, #11510, #11511) to unblock the v0.8.6 release criteria tracked in #7432. Address S1 macOS sandbox bug (#10536) and gateway WebSocket lifecycle (#9002) before v0.9.0 gateway separation.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*