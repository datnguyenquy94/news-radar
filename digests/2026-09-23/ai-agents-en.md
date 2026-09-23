# OpenClaw Ecosystem Digest 2026-09-23

> Issues: 263 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-23 04:26 UTC

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

# OpenClaw Project Digest — 2026-09-23

## 1. Today's Overview

OpenClaw shows **exceptionally high velocity** with 500 PRs and 263 issues updated in the last 24 hours — a volume suggesting either a major release preparation cycle or sustained multi-team sprint activity. No new release was cut today (0 releases), but 148 PRs were merged/closed, indicating substantial integration work. The issue backlog carries significant weight: multiple **P0/P1 severity bugs** cluster around session-state corruption, message loss, and crash loops — particularly in the memory-core indexing subsystem, Telegram/Slack/Discord transports, and CLI backend compaction logic. The project appears to be in a **stabilization phase** targeting reliability regressions introduced in recent 2026.8.x–2026.9.x versions.

## 2. Releases

**No new releases published today.** The latest version in circulation appears to be `2026.9.5` (referenced in #155764) with `2026.9.6` candidate under validation (#156138). Users on `2026.9.5` report update blocking due to `retained_plugin_source_conflict` — a regression worth tracking for the next patch.

## 3. Project Progress (Merged/Closed PRs Today)

| Area | PRs Merged/Closed | Notable Outcomes |
|------|-------------------|------------------|
| **Gateway/Core** | ~40+ | Fixes for update race conditions (#156138), guest access revocation (#156106), session busy-state contention (#156067) |
| **Agents/Backends** | ~35+ | Anthropic Opus 5.5 defaults (#156093), Copilot reasoning ciphertext preservation (#155994), ACP config crash fix (#113451), sequential subagent workflows (#129635) |
| **Transports** | ~20+ | WhatsApp group mention false-positives (#137490), Discord voice double-speak mitigation (#125826), Matrix E2EE rotation handling (#123354) |
| **UI/Companion** | ~15+ | Android Talk failure diagnostics (#143220), Web UI dashboard simplification (#156164), PDF preview in chat (#148399) |
| **Memory/Indexing** | ~10+ | Memory-host import narrowing (#155043), dream-state migration issues remain open (#123361) |
| **CI/Infra** | ~15+ | Flaky test quarantine (#122090), FreeBSD root-owned updates (#149882), Git config null-path on Windows (#141309) |

**Net signal:** Heavy investment in **transport reliability**, **session lifecycle correctness**, and **update/repair robustness** — consistent with a pre-release hardening window.

## 4. Community Hot Topics (Most Commented Issues/PRs)

| Item | Comments | Core Need | Link |
|------|----------|-----------|------|
| **#22438** Tiered bootstrap file loading | 19 | Progressive context control to reduce token waste in large workspaces | [Issue #22438](https://github.com/openclaw/openclaw/issues/22438) |
| **#64810** Telegram heartbeat swallows in-progress replies | 12 | Message-loss in topic sessions; heartbeat preemption | [Issue #64810](https://github.com/openclaw/openclaw/issues/64810) |
| **#136311** memory-core reindex lock starvation + 19GB orphaned temp DBs | 11 | **Critical**: index unrecoverable; gateway holds lock indefinitely | [Issue #136311](https://github.com/openclaw/openclaw/issues/136311) |
| **#137729** Unguarded `.trim()` crashes on every agent turn | 11 | TypeError masking upstream errors; fix pattern exists elsewhere | [Issue #137729](https://github.com/openclaw/openclaw/issues/137729) |
| **#123792** Assistant turns render twice (CLI backends) | 9 | Duplicate persistence via live view + aggregate record | [Issue #123792](https://github.com/openclaw/openclaw/issues/123792) |
| **#137613** Pre-compaction memory flush gated off on CLI backends | 9 | Sessions on `claude-cli` never durably checkpoint before compaction | [Issue #137613](https://github.com/openclaw/openclaw/issues/137613) |
| **#155764** Update blocked by `retained_plugin_source_conflict` (P0) | 8 | **Release blocker** for 2026.9.5 → 2026.9.6 | [Issue #155764](https://github.com/openclaw/openclaw/issues/155764) |
| **#131150** Slack DMs silently dropped after restart (19 accounts) | 8 | Multi-account socket mode identity degradation | [Issue #131150](https://github.com/openclaw/openclaw/issues/131150) |
| **#128067** Beta.7 field report: 6 reliability defect classes | 7 | Consolidated production evidence across persistence/delivery/restart | [Issue #128067](https://github.com/openclaw/openclaw/issues/128067) |
| **#123327** Shared-state WAL corrupts SQLite page 1 on ext4 (P0) | 6 | **Data corruption**: index leaf page overwrites DB header | [Issue #123327](https://github.com/openclaw/openclaw/issues/123327) |

**Underlying themes:** 
- **Session durability** is the #1 pain point (message loss, duplicate rendering, compaction failures)
- **Multi-account/multi-transport** deployments expose identity and offset-tracking bugs
- **Memory/indexing subsystem** has structural flaws (lock contention, WAL corruption, frozen dream state)
- Users demand **progressive context loading** for large workspaces

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 P0 / Critical (Release Blockers / Data Loss)
| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| **#155764** Update blocked by `retained_plugin_source_conflict` | P0, regression | Open | No |
| **#123327** WAL checkpoint corrupts SQLite page 1 (data corruption) | P0, data-loss | Open | No |
| **#136311** memory-core reindex lock permanently held; 19GB orphaned DBs | P1 (crash-loop) | Open | No |
| **#138599** Auto-compaction deadlock when session > compaction model context | P1, deadlock | Open | No |

### 🟠 P1 / High (Message Loss / Crash Loops / Security)
| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| **#64810** Telegram heartbeat swallows in-progress replies | P1, message-loss | Closed (stale) | Linked PR open |
| **#113315** Telegram inbound update permanently lost after offset persist | P1, message-loss | Closed | Linked PR open |
| **#131150** Slack DMs silently dropped after gateway restart (multi-account) | P1, message-loss | Open | No |
| **#137294** Preflight compaction aborted by 300s ingress watchdog | P1, message-loss | Open | Linked PR open |
| **#137710** Native Codex completion recorded but doesn't wake parent | P1, message-loss | Open | Linked PR open |
| **#138226** Discord-approved Windows node command → `APPROVAL_CLIENT_MISMATCH` | P1, security | Open | Linked PR open |
| **#138632** Subagent result dropped: `requester settle wake deferred too many times` | P1, message-loss | Open | No |
| **#138139** `providerConfigMatchesRuntimeSnapshot` starves event loop (400+ models) | P1, crash-loop | Open | No |
| **#123354** Matrix E2EE stops decrypting after Megolm rotation | P1, behavior | Open | No |

### 🟡 P2 / Medium (UX Friction / Stability)
| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| **#137729** Unguarded `.trim()` crashes on every turn | P2, crash | Open | Linked PR open |
| **#123792** Duplicate assistant turn persistence (CLI backends) | P2, session-state | Open | Linked PR open |
| **#137613** Pre-compaction flush disabled on CLI backends | P2, session-state | Open | Linked PR open |
| **#94032** `exec` private-LAN access fails vs GUI success | P2, security/ux | Closed (stale) | No |
| **#124759** iOS app lags with "show reasoning" enabled | P2, ux-friction | Open | No |
| **#124911** Compaction `reserveTokensFloor` ignores model context window | P2, ux-friction | Open | No |
| **#142549** Messages duplicated 3-4× in chat UI | P2, ux-friction | Open | No |
| **#141540** `agents.defaults.model` change doesn't propagate to existing sessions | P2, session-state | Open | No |

**Fix PR coverage:** ~60% of P0/P1 issues have linked PRs open; several marked `clawsweeper:linked-pr-open` but not yet merged. The `clawsweeper-recovery-stuck` label on many suggests automated triage detects stalled remediation.

## 6. Feature Requests & Roadmap Signals

| Request | Votes/Interest | Likelihood for Next Version | Rationale |
|---------|----------------|----------------------------|-----------|
| **Tiered bootstrap loading** (#22438, 19💬) | High | **High** — P2, active design discussion, addresses token cost at scale | Directly reduces context waste; prototype referenced |
| **Image batching / media group buffering** (#39343, 6💬, 1👍) | Medium | Medium — P2, `off-meta tidepool` (needs product decision) | Multi-image UX gap across LINE/Telegram/Slack |
| **Temp artifact provenance + durable-path guardrails** (#45179, 6💬, 1👍) | Medium | Medium — P3, `off-meta tidepool` | Prevents `/tmp` chaos; security-adjacent |
| **Agent Teleconference primitive** (#65403, 6💬, 1👍) | Medium | Low — RFC, `off-meta tidepool`, prototype exists | Novel multi-agent meeting primitive; needs product buy-in |
| **Fal H3 Max video model support** (#137513, 4💬) | Low | Medium — P2, straightforward model catalog addition | New SOTA video model; low integration complexity |
| **Linux aarch64 companion builds** (#138279, 6💬) | Medium | **High** — P3, Windows ARM64 already ships | Parity gap; strong ARM Linux user demand |
| **Zero-config fallback for Web Search / OS FS skills** (#128153, 4💬) | Medium | Medium — P3, regression flagged | Removes credential barrier for free-tier users |
| **Custom `anthropic_beta` flags in Bedrock config** (#39734, 4💬) | Low | Low — P3, long-standing | Niche but blocks Bedrock feature parity |
| **Dreams page driven by memory slot owner** (#138366, 5💬) | Low | Low — P3, `off-meta tidepool` | Plugin extensibility for memory UX |

**Predicted next-version inclusions:** Tiered bootstrap loading (high impact, active), Linux ARM64 builds (parity), Fal H3 Max (catalog update), and possibly temp artifact guardrails (security hygiene). Agent Teleconference remains exploratory.

## 7. User Feedback Summary

### Pain Points (from issue narratives)
- **"Bootstrap files consume LLM tokens on every session"** — large workspace users hit context window limits unnecessarily (#22438)
- **"Heartbeat/system events interrupt in-progress replies and make answers disappear"** — Telegram topic sessions unreliable (#64810)
- **"Index could never be rebuilt... 19 GB of orphaned temp DBs accumulate"** — memory-core unusable without manual intervention (#136311)
- **"Every assistant turn persisted twice"** — CLI backend users see duplicate history in Web UI/Android (#123792)
- **"AGENTS.md never reaches the model on sandboxed Codex runs"** — container cwd mismatch breaks project instructions (#120600)
- **"iOS app lags badly when 'show reasoning' enabled"** — mobile UX regression (#124759)
- **"Cron scheduler timers stall 5-9h nightly then self-recover"** — silent scheduling gaps (#131500)
- **"OpenClaw update blocked by retained_plugin_source_conflict"** — upgrade path broken on 2026.9.5 (#155764)

### Use Cases Evident
- **Multi-agent fleets** (6+ agents, cron-heavy, #128067)
- **Multi-account Slack/Discord/Telegram** deployments (19 Slack accounts, #131150)
- **Large workspace / monorepo** development (bootstrap token concerns, #22438)
- **Edge/ARM deployments** (Raspberry Pi 5, Linux aarch64 requests)
- **Sandboxed/containerized Codex** app-server runs (#120600)
- **Mobile-first** (iOS/Android companion apps)

### Satisfaction Signals
- **Negative:** Repeated "stale" labels on high-severity bugs suggest user frustration with triage latency; multiple `clawsweeper-recovery-stuck` flags
- **Positive:** High PR comment engagement on fixes; users providing detailed repros, logs, and even local patches (#123327, #134918); community maintaining workarounds

## 8. Backlog Watch (Long-Unanswered / Needs Maintainer Attention)

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| **#22438** Tiered bootstrap loading | 7 months (2026-02-21) | High-impact UX/token optimization; 19 comments, design stalled at `needs-product-decision` | Open, stale |
| **#64810** Telegram heartbeat swallows replies | 5 months (2026-04-11) | Message loss in primary transport; marked `stale` but 12 comments, linked PR open | Closed (stale) |
| **#39343** Image batching / media groups | 6.5 months (2026-03-08) | Cross-transport UX gap; `off-meta tidepool` = needs product call | Open, stale |
| **#45179** Temp artifact provenance | 6 months (2026-03-13) | Security/ops hygiene; `recovery-stuck` | Open, stale |
| **#65403** Agent Teleconference RFC | 5 months (2026-04-12) | Novel primitive; prototype exists; `stale` | Closed (stale) |
| **#39734** Custom Bedrock `anthropic_beta` flags | 6.5 months (2026-03-08) |

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-09-23)

---

## 1. Ecosystem Overview

The open-source personal AI agent ecosystem shows **polarized maturity**: a top tier (OpenClaw, Hermes Agent, CoPaw, ZeroClaw) operating at **high velocity with 50–500 daily PRs** in active stabilization sprints, while a long tail (PicoClaw, Moltis, ZeptoClaw, NullClaw) runs at maintenance cadence. **No project released a new version today** except LobsterAI, indicating a widespread pre-release hardening window. Critical reliability themes—session durability, transport correctness, sandbox security, and provider fallback resilience—cut across all active projects, suggesting the ecosystem is converging on **production-grade hardening** after a feature-expansion phase. Community engagement is strongest where user-facing pain (message loss, upgrade blocks, Windows/ARM gaps) intersects with transparent triage.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases Today | Health Score | Phase |
|---------|---------------------|-------------------|----------------|--------------|-------|
| **OpenClaw** | 263 | 500 | 0 | 🟡 High velocity, P0 backlog | Stabilization / pre-release |
| **Hermes Agent** | 10 | 50 | 0 | 🟡 High velocity, 7 new P1/P2 | Bug bash / hardening |
| **ZeroClaw** | 14 | 50 | 0 | 🟢 High velocity, 2 S0 open | Bug-fix / feature-completion |
| **CoPaw (QwenPaw)** | 21 | 45 | 0 (v2.2.2 RC) | 🟢 High velocity, 32 closed | Patch release imminent |
| **NanoBot** | 3 | 37 | 0 | 🟢 High velocity, 2 P1 fixed | Feature sprint + stability |
| **NanoClaw** | 2 | 19 | 0 | 🟢 Healthy, architectural maturity | Hardening / CDSS infra |
| **LobsterAI** | 5 (stale) | 9 merged | **1 (2026.9.22)** | 🟡 Fair, stale UX debt | Release cadence + backlog |
| **IronClaw** | 0 | 3 | 0 | 🟢 Healthy, review latency | Polish / i18n expansion |
| **PicoClaw** | 2 (stale) | 4 (stale) | 0 | 🟠 Low activity, stale fixes | Maintenance / cleanup |
| **Moltis** | 0 | 0 (1 dependabot) | 0 | 🟢 Stable / quiet | Maintenance-only |
| **ZeptoClaw** | 0 | 0 (3 dependabot) | 0 | 🟢 Stable / quiet | Supply-chain hygiene |
| **NullClaw** | 0 | 0 | 0 | ⚪ No activity | Dormant |

**Tier Summary**:  
- **Tier 1 (Velocity >30 PRs/day)**: OpenClaw, Hermes, ZeroClaw, CoPaw, NanoBot  
- **Tier 2 (Velocity 10–30 PRs/day)**: NanoClaw, LobsterAI  
- **Tier 3 (Velocity <10 PRs/day)**: IronClaw, PicoClaw, Moltis, ZeptoClaw, NullClaw  

---

## 3. OpenClaw's Position

**Advantages vs Peers**  
- **Scale of integration**: 500 PRs/24h implies largest contributor base and multi-team coordination; only project with triple-digit issue throughput.  
- **Transport breadth**: First-class Telegram/Slack/Discord/Matrix/WhatsApp/QQ/Line support with active multi-account debugging (#131150: 19 Slack accounts).  
- **Memory/indexing depth**: Dedicated `memory-core` subsystem with dream-state, WAL, and reindexing—unmatched in scope (though currently fragile).  
- **Ecosystem gravity**: Referenced as upstream by LobsterAI, NanoClaw, ZeroClaw; de facto reference implementation.

**Technical Approach Differences**  
- **Monolithic gateway + plugin architecture** vs. NanoBot/ZeroClaw’s skill/channel separation vs. Hermes’ profile-based multiplexer.  
- **Session-state as central truth** (with compaction, indexing, WAL) vs. CoPaw’s per-conversation model overrides or NanoBot’s transcript summarization.  
- **CLI backends as first-class peers** (Claude, Codex, ACP, Copilot) with dedicated compaction logic—most projects support 1–2 backends.

**Community Size Indicators**  
- Highest comment counts on issues (19 on #22438, 12 on #64810) and detailed user repros/logs.  
- `clawsweeper` automated triage labels indicate scale requiring tooling.  
- Downstream forks (LobsterAI, PicoClaw, NanoClaw) actively track OpenClaw versions.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Session durability & compaction** | OpenClaw, NanoBot, Hermes, ZeroClaw, LobsterAI, CoPaw | Auto-compaction deadlocks (NanoBot #5849, OpenClaw #138599), pre-compaction flush gaps (OpenClaw #137613), duplicate turn persistence (OpenClaw #123792, CoPaw #7947), WAL corruption (OpenClaw #123327). |
| **Provider fallback & resilience** | OpenClaw, NanoBot, Hermes, ZeroClaw, CoPaw, NanoClaw | Fallback chain config ignored (Hermes #119826, OpenClaw #138139), auto-failover on quota/timeout (CoPaw #5572, NanoClaw Cursor provider), streaming timeout recovery (CoPaw #7935). |
| **Sandbox / approval security** | OpenClaw, ZeroClaw, Hermes, CoPaw, NanoClaw | ANSI-C quoting bypass (Hermes #76218), `allowed_commands` exempting high-risk (ZeroClaw #11058), prompt-injection in skill dirs (CoPaw #7864), Windows ACL on drive root (CoPaw #7942). |
| **Multi-account / multi-transport identity** | OpenClaw, ZeroClaw, Hermes, NanoClaw | Slack DM drop after restart (OpenClaw #131150), WhatsApp session-bound channel loss (ZeroClaw #10985), Telegram topic heartbeat preemption (OpenClaw #64810), CDSS per-instance adapters (NanoClaw #3865). |
| **Windows / ARM / native container support** | OpenClaw, CoPaw, NanoClaw, LobsterAI, PicoClaw | Windows gateway AV-blocked `Add-Type` (LobsterAI #2743), drive-root ACL corruption (CoPaw #7943), Apple Container microVMs (NanoClaw #3503), Linux aarch64 builds (OpenClaw #138279, PicoClaw #3370). |
| **Config persistence & upgrade safety** | OpenClaw, LobsterAI, Hermes, ZeroClaw, NanoClaw | Update blocked by plugin conflict (OpenClaw #155764), config overwrite on restart (LobsterAI #1006), `--replace` host-lock races (Hermes #119837, #119824), self-update missing deps (NanoClaw #3869). |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | ZeroClaw | CoPaw | NanoClaw | LobsterAI | IronClaw |
|-----------|----------|---------|--------------|----------|-------|----------|-----------|----------|
| **Core Architecture** | Monolithic gateway + plugin transports | Skill/channel separation, WebUI-first | Profile multiplexer + standalone gateways | Channel-tool integration, Zerocode DSL | Desktop app + console + plugin extensions | CDSS (self-serve deployment) + skill registry | OpenClaw downstream + Electron desktop | Wasmtime runtime + WebUI |
| **Target User** | Power users, multi-platform fleets, integrators | Developers wanting WebUI observability | Self-hosters, security-conscious teams | WhatsApp/channel-heavy automation | Chinese-market desktop users (Qwen) | Enterprise/operator self-serve deployments | Chinese enterprise (Feishu, WeChat, Kimi) | Rust/Wasm runtime enthusiasts |
| **Unique Feature Focus** | Memory-core indexing, dream-state, bootstrap tiering | Subtask panel, Mermaid, command inspector, video input | Bot Mode relay, cron/goal loops, skill sync | WhatsApp Web richness (polls, rooms, PDF previews) | Per-session model/reasoning, prompt caching, driver cards | Credential gateway, Iron Proxy, Apple Container | Windows gateway hardening, cowork streaming, Kimi 1M | Time-delta builtin, IME composition, rapid i18n |
| **Provider Strategy** | 10+ CLI backends + OpenRouter + Bedrock | OpenAI-compatible + custom skills | OpenRouter-first + local keep-alive config | Anthropic-centric + profile identity preservation | GPT-5.6 prompt caching, Volcengine Ark, routing | Cursor + Claude + Codex + custom gateways | Kimi K3, OpenClaw backends | Provider-agnostic via Wasmtime |
| **Maturity Signal** | Stabilizing 2026.9.x, P0 data-loss bugs | v2.2.2 RC, hardening + WebUI features | v0.21.3, security + host-lock fixes | Active WhatsApp polish, 2 S0 bugs open | v2.2.2 RC, model config + fallback shipped | Pre-v0.15, CDSS infra merging | 2026.9.22 released, 6-mo stale UX debt | Quiet, 3 PRs ready for review |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Momentum Indicators |
|------|----------|---------------------|
| **Rapidly Iterating (Daily merges, release candidates)** | CoPaw, NanoBot, ZeroClaw, Hermes Agent | CoPaw: 32 items closed/day, v2.2.2 RC; NanoBot: 2 P1 fixes merged same day; ZeroClaw: 18 merges/day; Hermes: 7 P1/P2 opened + 3 merged same day. |
| **Stabilizing at Scale** | OpenClaw, NanoClaw | OpenClaw: 148 merges/day but 263 issues updated—backlog growing; NanoClaw: CDSS infra feature-complete on branch, setup wizard hardened. |
| **Release-Cadence Driven** | LobsterAI | Shipped 2026.9.22 with 9 merged PRs; dependabot Electron upgrade stalled 5 months. |
| **Polish / Incremental** | IronClaw, PicoClaw | IronClaw: 3 ready PRs (IME, i18n, builtin) awaiting review; PicoClaw: 3 merges but stale data-loss issue (#3373) unaddressed. |
| **Maintenance / Dormant** | Moltis, ZeptoClaw, NullClaw | Only dependabot activity; no human-driven changes in 24h. |

**Key Insight**: The **top 5 projects** (OpenClaw, Hermes, ZeroClaw, CoPaw, NanoBot) represent **~85% of ecosystem PR velocity** and share a common profile: **desktop/multi-transport agents targeting production reliability**. The next tier (NanoClaw, LobsterAI) focuses on **deployment/operator experience**. The tail maintains **runtime/WebUI niches**.

---

## 7. Trend Signals for AI Agent Developers

1. **Session durability is the new table stakes**  
   Every active project has open bugs on message loss, duplicate persistence, or compaction deadlocks. **Invest in idempotent turn recording, WAL-protected checkpoints, and compaction-budget guards**—users will not tolerate silent data loss.

2. **Multi-gateway / multi-provider abstraction is converging**  
   Hermes’ profile multiplexer, NanoClaw’s credential gateway, ZeroClaw’s provider identity preservation, and CoPaw’s `RoutingChatModel` all solve the same problem: **dynamic provider selection with fallback, without session restart**. Standardize on a provider-capability contract (context window, modalities, reasoning effort) early.

3. **Windows + ARM are deployment blockers, not afterthoughts**  
   LobsterAI’s AV-blocked `Add-Type`, CoPaw’s drive-root ACL corruption, OpenClaw’s Linux aarch64 demand, NanoClaw’s Apple Container skill—**native packaging, code-signing, and ARM CI are now release criteria**.

4. **Config as code + upgrade safety**  
   OpenClaw’s `retained_plugin_source_conflict`, Hermes’ `--replace` races, NanoClaw’s self-update missing deps, LobsterAI’s config overwrite—**treat config migration as a first-class API with rollback, not a script**.

5. **Observability drives adoption**  
   CoPaw’s commands/subtask panels, NanoBot’s Mermaid/usage analytics, OpenClaw’s dashboard simplification—**developers choose agents they can debug**. Build live turn

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-23

## 1. Today's Overview
NanoBot shows **high development velocity** with 37 pull requests updated in the last 24 hours (15 merged/closed) and 3 active issues. The project is in a **feature-heavy sprint** focused on WebUI enhancements (commands panel, subtask visualization, Mermaid rendering, image artifacts, link/file actions, usage analytics) while simultaneously addressing critical stability bugs in Telegram compaction notices, auto-compaction token-budget deadlocks, and file decoding regressions. No new release was cut today, but the volume of merged fixes suggests a release candidate may be imminent.

## 2. Releases
**No new releases** published today. The latest version remains the previous tag; all changes are accumulating on `main`.

## 3. Project Progress — Merged / Closed PRs (Last 24h)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#5872](https://github.com/HKUDS/nanobot/pull/5872) | refactor(utils): dedupe atomic JSONL write helper (Closes #5290) | Core/Utils | Consolidates atomic write logic across `MemoryStore`, `JsonlSessionStore`, WebUI transcript rewriter — reduces duplication & fsync edge-cases. |
| [#5867](https://github.com/HKUDS/nanobot/pull/5867) | fix(files): decode BOM-marked text correctly | Tools/Files | Fixes UTF-16/UTF-32 BOM handling and UTF-8 BOM leakage in `read_file`; prevents NUL-filled garbled output. |
| [#5859](https://github.com/HKUDS/nanobot/pull/5859) | fix(tools): handle boolean JSON subschemas during argument validation | Tools/Validation | Prevents crashes on valid boolean JSON subschemas (`true`/`false`) during MCP tool argument casting. |
| [#5803](https://github.com/HKUDS/nanobot/pull/5803) | Small improvements and fixes for Telegram | Channel/Telegram | Fixes rich-message newlines (double-space), exposes `topic_id` in `my` tool, respects typing status per topic. |
| [#5842](https://github.com/HKUDS/nanobot/pull/5842) | fix(channels): show unavailable channel plugins in status | Channels/CLI | `channels status` now lists all descriptors with `Available` column (ok / missing dep / invalid runtime). |
| [#5824](https://github.com/HKUDS/nanobot/pull/5824) | fix(tools): keep read_file progressing on oversized lines | Tools/Files | Bounded return + 1-based `column` continuation for lines exceeding char budget; no data loss. |
| [#5857](https://github.com/HKUDS/nanobot/pull/5857) | fix(memory): bound automatic transcript summarization | Memory/Compaction | **Critical fix for #5849** — adds token-budget guard to `summarize_transcript` so auto-compaction cannot deadlock when history exceeds input budget. |

*Plus 8 additional merged PRs (WebUI polish, Linear UX, etc.) — see [closed PR list](https://github.com/HKUDS/nanobot/pulls?q=is%3Apr+is%3Aclosed+updated%3A2026-09-23).*

## 4. Community Hot Topics
| Item | Type | Comments | Core Need / Signal |
|------|------|----------|-------------------|
| [#5870](https://github.com/HKUDS/nanobot/issues/5870) | Issue (P1) | 3 | **Telegram spam**: “Context compacted.” notice repeats on every idle heartbeat compaction — user-facing noise. |
| [#5849](https://github.com/HKUDS/nanobot/issues/5849) | Issue (P1) | 2 | **Auto-compaction deadlock**: `summarize_transcript` sends unbounded history → OOM / stall when context > model input budget. |
| [#5856](https://github.com/HKUDS/nanobot/pull/5856) | PR (WebUI) | — | **Commands panel**: Inspect/stop exec commands without consuming agent output — major UX for debugging. |
| [#5855](https://github.com/HKUDS/nanobot/pull/5855) | PR (WebUI) | — | **Subtasks panel**: Parent-scoped child-task visibility (status, tools, output) — addresses “black-box subagent” complaints. |
| [#5848](https://github.com/HKUDS/nanobot/pull/5848) | PR (WebUI) | — | **Mermaid rendering**: Safe diagram preview with zoom/pan — targets technical users documenting architecture. |
| [#5869](https://github.com/HKUDS/nanobot/issues/5869) | Issue (P2) | 0 | **Video input**: Request to send video frames directly to omni models (Qwen, MiniCPM-V) instead of disk-path fallback. |

**Underlying theme**: Users want **observability** (what did the agent just run?), **multi-modal parity** (video = first-class), and **quiet stability** (no spam, no deadlocks).

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **Critical** | [#5849](https://github.com/HKUDS/nanobot/issues/5849) Auto-compaction deadlock (unbounded history → unrecoverable) | Open | [#5857](https://github.com/HKUDS/nanobot/pull/5857) **merged** |
| **High** | [#5870](https://github.com/HKUDS/nanobot/issues/5870) Telegram compaction notice spam (P1) | Open | [#5874](https://github.com/HKUDS/nanobot/pull/5874) **open** (fixes heartbeat borrowing user channel) |
| **High** | [#5867](https://github.com/HKUDS/nanobot/pull/5867) BOM-marked UTF-16/32 decode → NUL garbage | **Closed** | Merged |
| **Medium** | [#5859](https://github.com/HKUDS/nanobot/pull/5859) Boolean JSON subschema crashes tool validation | **Closed** | Merged |
| **Medium** | [#5824](https://github.com/HKUDS/nanobot/pull/5824) `read_file` stalls on oversized lines | **Closed** | Merged |
| **Low** | [#5803](https://github.com/HKUDS/nanobot/pull/5803) Telegram rich-message newline, typing-status topic bug | **Closed** | Merged |

**Stability takeaway**: Two **critical-path bugs** (compaction deadlock, Telegram spam) received fixes today; one merged, one in review. File/encoding regressions also resolved.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Release | Rationale |
|---------|--------|-----------------------------|-----------|
| **Video frame input for omni models** | [#5869](https://github.com/HKUDS/nanobot/issues/5869) | Medium | Growing omni-model ecosystem; current disk-path fallback is a known gap. |
| **Commands panel (inspect/stop exec)** | [#5856](https://github.com/HKUDS/nanobot/pull/5856) | High | PR open, heavy WebUI investment; aligns with “debuggability” theme. |
| **Subtasks panel (parent-scoped)** | [#5855](https://github.com/HKUDS/nanobot/pull/5855) | High | Same sprint as #5856; addresses subagent opacity. |
| **Mermaid diagram rendering** | [#5848](https://github.com/HKUDS/nanobot/pull/5848) | High | PR open, lazy-loaded, low risk. |
| **Scoped prompt commands + management UI** | [#5854](https://github.com/HKUDS/nanobot/pull/5854) | Medium | Larger scope (workspace/user scopes, reservations); may need design review. |
| **Usage analytics (calendar, model breakdown)** | [#5851](https://github.com/HKUDS/nanobot/pull/5851) | Medium | Backend queries exist; UI polish needed. |
| **Linear native agent UX** | [#5871](https://github.com/HKUDS/nanobot/pull/5871) | Low-Medium | Channel-specific; depends on OAuth/Linear API stability. |

**Prediction**: WebUI observability features (#5856, #5855, #5848) and video input (#5869) are the strongest candidates for the next minor release.

## 7. User Feedback Summary
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Telegram notification spam** | “Six copies of ‘Context compacted.’ in same conversation” ([#5870](https://github.com/HKUDS/nanobot/issues/5870)) | 1 user, high visibility |
| **Agent becomes unresponsive after long sessions** | Auto-compaction deadlock when history > model budget ([#5849](https://github.com/HKUDS/nanobot/issues/5849)) | 1 report, critical severity |
| **Cannot see what sub-agents are doing** | Drives #5855 (Subtasks panel) | Implicit — no direct issue, but PR priority signals demand |
| **Video files saved to disk instead of sent to model** | Explicit request in [#5869](https://github.com/HKUDS/nanobot/issues/5869) | 1 user, emerging need |
| **File encoding issues (BOM, UTF-16)** | Fixed in #5867, #5824 | Silent failures until reported |

**Satisfaction signals**: Rapid fix turnaround (deadlock → PR in 24h) and WebUI feature density suggest **active maintainer responsiveness**; users are filing actionable, well-scoped reports.

## 8. Backlog Watch — Stale / High-Impact Items Needing Attention
| Item | Age | Why It Matters | Current State |
|------|-----|----------------|---------------|
| [#5314](https://github.com/HKUDS/nanobot/pull/5314) fix: decode nested JSON tool arguments by schema | 44 days | Provider interop: some OpenAI-compatible APIs stringify nested args → schema validation fails. Marked `conflict`. | Open, needs rebase/resolution |
| [#5290](https://github.com/HKUDS/nanobot/issues/5290) Atomic JSONL write deduplication (closed by #5872) | — | Was long-standing tech debt; now resolved. | ✅ Done |
| [#5849](https://github.com/HKUDS/nanobot/issues/5849) Auto-compaction deadlock | 2 days | Fixed by #5857 (merged), but **verify backport to release branch** if any. | Fix merged |
| [#5870](https://github.com/HKUDS/nanobot/issues/5870) Telegram compaction spam | 1 day | Fix PR #5874 open; **needs review/merge to stop user noise**. | Awaiting review |
| [#5869](https://github.com/HKUDS/nanobot/issues/5869) Video input support | 1 day | No PR yet; **design decision needed** (which models, frame sampling, bandwidth). | Triage needed |

---

**Bottom line**: NanoBot is shipping **WebUI observability** and **core stability** in parallel. The two P1 bugs are on track for resolution today; the next release will likely bundle the WebUI command/subtask/Mermaid features plus the compaction/encoding fixes. Video input remains a design discussion.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-23

## 1. Today's Overview
Hermes Agent shows **very high development velocity** today with **50 PRs updated** (47 open, 3 merged/closed) and **10 issues updated** — all remaining open. No new release was published. The activity centers on **security hardening**, **gateway/desktop stability**, **configuration correctness**, and **plugin ecosystem expansion**. Multiple critical bugs around host-lock race conditions, session-state corruption, and config misreads were both reported and fixed in the same day, indicating an active "bug bash" or pre-release stabilization window.

## 2. Releases
**No new releases today.** Current latest remains `v0.21.3` (2026-09-14 per issue #119825).

## 3. Project Progress — Merged/Closed PRs (3)
| PR | Type | Summary |
|----|------|---------|
| [#119840](https://github.com/NousResearch/hermes-agent/pull/119840) | **Security** | Updates vulnerable deps (`httpx2`, `httpcore2`) that allowed insecure WebSocket traffic — removes security-audit findings. |
| [#119838](https://github.com/NousResearch/hermes-agent/pull/119838) | **Bug (P2)** | Fixes `--replace` incorrectly skipping the host-lock refusal, which allowed two gateways to start simultaneously and race for the host record. |
| [#119808](https://github.com/NousResearch/hermes-agent/pull/119808) | **Bug (P1)** | Fixes `--replace` starting beside another profile’s standalone owner — the host-attach logic now checks profile ownership before replacing. |

*All three merged PRs address **critical stability/security regressions** in gateway startup and dependency hygiene.*

## 4. Community Hot Topics (Most-Commented Issues)
| Issue | Comments | Area | Core Need |
|-------|----------|------|-----------|
| [#76218](https://github.com/NousResearch/hermes-agent/issues/76218) | 6 | Security / Terminal | **ANSI-C quoting bypasses dangerous-command approval** — `rm -rf /` hidden in `$'...'` slips past hardline scanner. |
| [#32737](https://github.com/NousResearch/hermes-agent/issues/32737) | 6 | Security / Terminal | **Tirith shell scanner over-flags** `local-script \| python3` as HIGH severity even when LHS is user-owned. |
| [#118426](https://github.com/NousResearch/hermes-agent/issues/118426) | 4 | Gateway / Sessions | **Session chat turn 2+ misresolves provider** → falls back to OpenRouter with no credentials (session-persisted model branch bug). |
| [#108088](https://github.com/NousResearch/hermes-agent/issues/108088) | 3 | Desktop / Bot Mode | **Bot Mode relay keeps unwanted local backend alive** → 30s WebSocket churn, focus loss on composer/dictation. |

**Pattern:** Security boundary bypasses (#76218, #32737) and **session-state corruption** (#118426, #108088) dominate user pain — both erode trust in automated approvals and long-running sessions.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P1** | [#119824](https://github.com/NousResearch/hermes-agent/issues/119824) | Desktop pool backend owning host rendezvous record **permanently blocks supervised dashboard restart** — `Refusing to start` (exit 1), remote ingress dead. | ❌ |
| **P2** | [#119837](https://github.com/NousResearch/hermes-agent/issues/119837) | `--replace` **skips host-lock refusal** → supervised unit that loses start race runs second gateway beside multiplexer. | ✅ [#119838](https://github.com/NousResearch/hermes-agent/pull/119838) (merged) |
| **P2** | [#119826](https://github.com/NousResearch/hermes-agent/issues/119826) | `model.fallback_providers` **read by no loader** — chain nested under `model:` resolves to empty chain silently. | ✅ [#119831](https://github.com/NousResearch/hermes-agent/pull/119831) (open) |
| **P2** | [#119829](https://github.com/NousResearch/hermes-agent/issues/119829) | Retried MCP OAuth **restores previous attempt’s half-written files on rollback** via `inherited_backup`. | ❌ |
| **P2** | [#119835](https://github.com/NousResearch/hermes-agent/pull/119835) | `delegate_task` **silently ignores per-task `model` pin** — now rejects unsupported fields. | ✅ (open PR fixing #118825) |
| **P2** | [#119737](https://github.com/NousResearch/hermes-agent/pull/119737) | Gateway config **does not expand `${VAR}` env substitutions** (CLI does, gateway doesn’t). | ✅ (open PR) |
| **P2** | [#119738](https://github.com/NousResearch/hermes-agent/pull/119738) | Cron delivery-targets route **runs outside profile secret scope** → `get_secret` fails. | ✅ (open PR) |
| **P2** | [#119836](https://github.com/NousResearch/hermes-agent/pull/119836) | Background secondary reopens **re-resume every tile** every ~30s (caret reset, layout shift, model pick revert). | ✅ (open PR) |
| **P2** | [#119827](https://github.com/NousResearch/hermes-agent/pull/119827) | `_contains_image` **crashes on non-string image part type** (`TypeError: unhashable type: list`). | ✅ (open PR) |
| **P3** | [#100796](https://github.com/NousResearch/hermes-agent/pull/100796) | Stale Russian locale keys (desktop i18n). | ✅ (open PR, older) |

**Critical cluster:** Host-lock / `--replace` race conditions (#119837, #119824, #119808) + config fallback misread (#119826) + MCP OAuth state corruption (#119829) — all **P2/P1**, most with fix PRs already open or merged.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Configurable local-model keep-alive** (replace hardcoded 15-min unload) | [#119834](https://github.com/NousResearch/hermes-agent/issues/119834) (new today) | High — single-file config change, clear ROI for dedicated inference boxes |
| **Skill Sync (`tool_gateway_admin`) for self-hosted single-user** | [#119825](https://github.com/NousResearch/hermes-agent/issues/119825) (new today) | Medium — needs Portal-side permission model decision |
| **Cron `/goal` prompts as bounded loops** (via `GoalManager`) | [#119472](https://github.com/NousResearch/hermes-agent/pull/119472) | High — PR open, extends existing GoalManager, low risk |
| **New plugin catalog entries**: `grok-acp`, `Token Kiosk`, `hermes-trove` | [#119731](https://github.com/NousResearch/hermes-agent/pull/119731), [#119735](https://github.com/NousResearch/hermes-agent/pull/119735), [#119237](https://github.com/NousResearch/hermes-agent/pull/119237) | High — catalog additions are routine merges |
| **Unified package manager & bundles** (`pm/`, `pm/lock.json`) | [#102765](https://github.com/NousResearch/hermes-agent/pull/102765) (large, ci-reviewed) | Medium — foundational, but broad scope; may target v0.22+ |

**Strongest near-term candidates:** Local-model keep-alive config, cron `/goal` loops, and the three plugin catalog PRs.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Dangerous commands bypass approval** via ANSI-C quoting | #76218 (6 comments, P2 security) | **Critical trust issue** — `rm -rf /` can run silently |
| **Over-aggressive shell scanner** blocks legitimate `local-script \| python` | #32737 (6 comments, P2) | **Developer friction** — common pattern flagged HIGH |
| **Session provider misresolution on turn 2+** → OpenRouter fail-open | #118426 (4 comments, P2) | **Broken multi-turn chats** — silent fallback to unconfigured provider |
| **Bot Mode relay churn** (30s WebSocket, focus loss) | #108088 (3 comments, P2) | **Desktop unusable** for long sessions with remote gateway |
| **Dashboard permanently blocked** after upgrade if pool backend owns host record | #119824 (new, P1) | **Upgrade = outage** — requires manual intervention |
| **Config fallbacks silently ignored** when nested under `model:` | #119826 (new, P2) | **Silent misconfiguration** — users think fallback works, it doesn’t |
| **MCP OAuth retry corrupts state** via rollback | #119829 (new, P2) | **Auth unreliability** — retries make things worse |

**Recurring theme:** **Silent failures** (config ignored, fallbacks dropped, approvals bypassed) and **state corruption across restarts/retries** — users cannot trust the system to “do the right thing” without vigilance.

## 8. Backlog Watch — Stale Important Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#102765](https://github.com/NousResearch/hermes-agent/pull/102765) | 19 days (updated today) | **Unified package manager** — foundational for installs, updates, Windows support, CI; `ci-reviewed` but still open. Large scope, needs decision. |
| [#80832](https://github.com/NousResearch/hermes-agent/pull/80832) | 47 days (updated today) | **Terminal activity stamp** to prevent stuck `last_activity_at` — UI stops showing new messages when timestamp stalls. Core desktop reliability. |
| [#106414](https://github.com/NousResearch/hermes-agent/pull/106414) | 14 days (updated today) | **Claude Code OAuth identity floor** — fixes Anthropic Fable 5.x / Opus 5.5 rejection. `P1`, `ci-reviewed`, ported from prime-agent. Should land soon. |
| [#32737](https://github.com/NousResearch/hermes-agent/issues/32737) | 120 days | **Tirith over-flagging** — known since May, 6 comments, `sweeper:risk-security-boundary`. Needs scanner logic refinement (allow user-owned LHS). |
| [#76218](https://github.com/NousResearch/hermes-agent/issues/76218) | 53 days | **ANSI-C quoting bypass** — security boundary hole, 6 comments. Requires decoding `$'...'` before dangerous-pattern matching. |

**Recommendation:** Prioritize merging #106414 (P1 Anthropic fix), #80832 (desktop message visibility), and resolving the host-lock race cluster (#119837/#119824/#119808) before next release. The package-manager PR (#102765) needs a maintainer verdict on scope/timeline.

---

**Overall Health:** 🟡 **High velocity but accumulating critical bugs** — today’s merge of 3 high-severity fixes is positive, but 7 new P1/P2 issues opened in 24h (several with user-facing outages) suggests the project is in a **pre-release hardening phase**. Plugin ecosystem growth (3 catalog PRs) and cron/goal enhancements show forward momentum. Next release should include the merged security/host-lock fixes and ideally the config-fallback and OAuth fixes.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-23

## 1. Today's Overview
PicoClaw shows **low fresh activity** in the last 24 hours: all 2 issues and 4 PRs were last updated on 2026-09-22 and are tagged `[stale]`. The three closed PRs (#3375, #3372, #1349) address a data-race bug, a tool-configuration gap, and QQ Channel attachment support respectively. One feature PR (#3370) adding the Keenable web-search provider remains open but stale. No new releases were published. The project appears to be in a maintenance/cleanup phase rather than active feature development.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress
| PR | Status | Summary |
|----|--------|---------|
| [#3375](https://github.com/sipeed/picoclaw/pull/3375) | **Closed** | Guards lazy initialization of `Config.sensitiveCache` with `sync.Once` to eliminate a data race that could return a nil replacer and panic `FilterSensitiveData`. Fixes [#3374](https://github.com/sipeed/picoclaw/issues/3374). |
| [#3372](https://github.com/sipeed/picoclaw/pull/3372) | **Closed** | Adds a dedicated `reaction` field to `ToolsConfig` and wires `IsToolEnabled("reaction")` so the reaction tool respects its config toggle instead of defaulting to `true`. |
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | **Closed** | Extends QQ Channel adapter: parses emoji structures, handles inbound voice/image/video/file messages, supports outbound local attachments (upload-then-send), and prefers Markdown replies with graceful fallback. |

## 4. Community Hot Topics
No issues or PRs received new comments or reactions in the last 24 hours (all comment counts are `undefined` or `0`). The only open PR with potential community interest is **#3370** (Keenable web search), but it has zero engagement since 2026-09-07.

## 5. Bugs & Stability
| Issue | Severity | Fix PR | Status |
|-------|----------|--------|--------|
| [#3374](https://github.com/sipeed/picoclaw/issues/3374) – Data race in `Config.initSensitiveCache` causing nil-pointer panic in `FilterSensitiveData` | **High** (crash under concurrency) | [#3375](https://github.com/sipeed/picoclaw/pull/3375) | **Fixed & Closed** |
| [#3373](https://github.com/sipeed/picoclaw/issues/3373) – `SaveConfig` silently drops all but the first `api_key` in a `model_list` entry and leaves a dangling `fallbacks` reference | **Medium** (silent data loss) | *No linked PR in dataset* | **Closed (stale)** – root cause not visibly addressed in merged PRs |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Keenable web-search provider** (no-API-key public endpoint) | [#3370](https://github.com/sipeed/picoclaw/pull/3370) (open, stale) | Moderate – code complete, awaiting review/merge |
| **Reaction tool configurability** | [#3372](https://github.com/sipeed/picoclaw/pull/3372) (merged) | Already landed |
| **Richer QQ Channel media support** | [#1349](https://github.com/sipeed/picoclaw/pull/1349) (merged) | Already landed |

## 7. User Feedback Summary
- **Pain points**: Concurrency safety in config security (#3374), silent credential loss on config round-trip (#3373).  
- **Use cases**: Need for zero-key web search (Keenable), reaction-tool toggling, and full QQ Channel multimedia handling.  
- **Sentiment**: No explicit satisfaction signals (no 👍/comments); stale tags suggest maintainers triaged but deprioritized these items.

## 8. Backlog Watch
| Item | Age | Risk |
|------|-----|------|
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) – Keenable web search provider | Open since 2026-09-07, no review activity | Feature complete but stalled; merge would expand provider ecosystem |
| [#3373](https://github.com/sipeed/picoclaw/issues/3373) – `SaveConfig` api_key loss | Closed stale without visible fix PR | Silent data-loss bug may still exist in `main` branch |
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) – QQ Channel attachments | Merged after 6 months | Large diff; verify no regressions in QQ adapter |

---
*Data sourced from GitHub API (issues/PRs updated 2026-09-22). "Stale" label indicates auto-marked inactivity; manual review recommended for closed-but-unfixed items.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-23

## 1. Today's Overview
NanoClaw shows **high velocity** with 19 PRs updated and 2 issues addressed in the last 24 hours. The project is in an active development phase focused on **provider/gateway infrastructure**, **setup/installation reliability**, and **container/runtime upgrades**. Five PRs were merged/closed today — all core-team driven — indicating strong internal momentum. The open PR backlog (14) skews toward foundational refactors (credential gateway, provider contracts, channel adapters) rather than user-facing features, suggesting a "hardening" sprint before the next release.

## 2. Releases
**No new releases** published today. The latest activity is pre-release stabilization work.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3865](https://github.com/nanocoai/nanoclaw/pull/3865) | Feat/Skill | **Slack & Teams adapters per-instance** (CDSS WP-6b): instance specs, webhook mode, pending challenge flow | Enables multi-tenant chat deployments without restart; unblocks customer self-serve |
| [#3864](https://github.com/nanocoai/nanoclaw/pull/3864) | Feat/Core | **Channel credential provider & instance specs** (CDSS WP-6a): dynamic adapter instantiation from stored connections | Core plumbing for CDSS; separates credential storage from adapter lifecycle |
| [#3863](https://github.com/nanocoai/nanoclaw/pull/3863) | Fix/Setup | **Register provider contract mid-wizard** before gateway store reads it | Fixes fresh install crash under Iron Proxy (see Issue #3862) |
| [#3861](https://github.com/nanocoai/nanoclaw/pull/3861) | Fix/Setup | **Persist image-source answer** across wizard resume; stops duplicate Echo perk prompt | UX polish for setup wizard resumability |
| [#1491](https://github.com/nanocoai/nanoclaw/pull/1491) | Feat/Skill | **Google Workspace CLI integration** (gws_discover/help/run + nonce guardrails + audit log) | Long-standing community contribution finally merged; adds enterprise SaaS integration |

**Net advancement**: CDSS (Customer Deployment Self-Serve) channel infrastructure is now feature-complete on `channels` branch; setup wizard is hardened against mid-run contract registration races; a major third-party integration (Google Workspace) lands after 6 months in review.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3503](https://github.com/nanocoai/nanoclaw/pull/3503) **feat(add-apple-container): Apple Container support** | Open since Aug 24, updated today; **macOS-native microVM sessions** instead of Docker | **Strong macOS developer demand** for lighter, more isolated agent sessions; avoids Docker Desktop license/overhead |
| [#3815](https://github.com/nanocoai/nanoclaw/pull/3815) **refactor(gateway): centralize credential gateway contract** | Core-team, 7 area labels, updated today | **Architectural debt paydown**: unified approval/credential model across OneCLI, Iron Proxy, future gateways |
| [#3817](https://github.com/nanocoai/nanoclaw/pull/3817) **feat(skills): add Iron Proxy gateway** | Core-team, skill + setup, updated today | **Gateway diversity**: operators want non-OneCLI credential routing (e.g., corporate proxy, air-gapped) |
| [#2924](https://github.com/nanocoai/nanoclaw/pull/2924) **fix(delivery): strip agent-group namespace from messageId** | Open since Jul 4, still active | **Platform delivery correctness**: message deduplication/fan-out broken for multi-agent groups |

**Pattern**: Contributors are investing in **multi-gateway, multi-provider, multi-platform** correctness — the project is maturing from "single happy path" to "pluggable infrastructure."

## 5. Bugs & Stability — Today's Reports
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#3869](https://github.com/nanocoai/nanoclaw/issues/3869) `update-nanoclaw` controller crashes: `MODULE_NOT_FOUND` for 3 transitive imports missing from `git archive` list | **Open** (0 comments, created today) | None yet — blocks self-update mechanism |
| **High** | [#3862](https://github.com/nanocoai/nanoclaw/issues/3862) Codex + Iron Proxy fresh install fails: stale `provider-contracts` barrel in wizard process | **Closed** (fixed by [#3863](https://github.com/nanocoai/nanoclaw/pull/3863)) | Merged today |
| **Medium** | Signal adapter attachment/DM routing regressions (consolidated in [#3837](https://github.com/nanocoai/nanoclaw/pull/3837), [#3838](https://github.com/nanocoai/nanoclaw/pull/3838)) | **Open PRs** (updated today) | Fixes staged in PRs; not yet merged |

**Watchlist**: #3869 is a **self-hosting regression** — the update skill cannot update itself. Expect a hotfix PR within 24h.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Apple Container (microVM) sessions** | [#3503](https://github.com/nanocoai/nanoclaw/pull/3503) — active, macOS-only | **High** — only macOS gap in container strategy; skill-based, low merge risk |
| **Cursor Agent SDK provider** | [#3356](https://github.com/nanocoai/nanoclaw/pull/3356) — core-team, provider contracts | **High** — completes "big three" provider set (Claude, Codex, Cursor) |
| **Centralized gateway contract** | [#3815](https://github.com/nanocoai/nanoclaw/pull/3815) — cross-cutting refactor | **Medium** — prerequisite for Iron Proxy (#3817) and future gateways; may need 1-2 more sprints |
| **Per-instance Slack/Teams webhooks** | [#3865](https://github.com/nanocoai/nanoclaw/pull/3865) — merged to `channels` branch | **High** — already merged; will ship when `channels` branch promotes |
| **Google Workspace CLI skill** | [#1491](https://github.com/nanocoai/nanoclaw/pull/1491) — merged today | **Immediate** — available in next skill index refresh |

**Prediction**: Next minor release will ship **Apple Container skill**, **Cursor provider**, and **CDSS channel adapters**; gateway refactor may slip to following release.

## 7. User Feedback Summary
No direct user comments on today's items (all 0 👍, 0 comments). Inferred pain points from PR/issue descriptions:

| Pain Point | Evidence |
|------------|----------|
| **Setup wizard fragility** | #3862, #3861: mid-wizard contract registration races; duplicate prompts on resume |
| **Self-update broken** | #3869: `update-nanoclaw` skill cannot run due to missing transitive deps |
| **macOS Docker fatigue** | #3503: explicit request for Apple Container (microVM) alternative |
| **Multi-gateway operations** | #3817, #3818: teams need Iron Proxy / non-OneCLI credential routing without re-login |
| **Signal adapter reliability** | #3837, #3838: attachment loss, DM misrouting, queue stalls — consolidated fixes pending |

**Sentiment**: Contributors are fixing **their own operational pain** (core-team dogfooding); external user voice is quiet — likely because NanoClaw is still pre-1.0 / early adopter phase.

## 8. Backlog Watch — Stale but Important
| Item | Age | Why It Matters | Blocker |
|------|-----|----------------|---------|
| [#2924](https://github.com/nanocoai/nanoclaw/pull/2924) **fix(delivery): strip agent-group namespace** | 81 days | Message deduplication broken for multi-agent groups; affects all platforms | Needs reviewer; core routing logic |
| [#3451](https://github.com/nanocoai/nanoclaw/pull/3451) **fix(update-skills): attribute barrel import to appending skill** | 32 days | Skill update attribution broken; causes merge conflicts in skill registry | Part of update-system overhaul |
| [#3565](https://github.com/nanocoai/nanoclaw/pull/3565) **fix(update): let forks keep local adapters** | 28 days | Fork friendliness; upstream skill refresh wipes local provider adapters | Design decision needed: merge strategy |
| [#3750](https://github.com/nanocoai/nanoclaw/pull/3750) **fix(update): extract whole scripts/ tree** | 15 days | Related to #3869; incomplete `git archive` list breaks controller | Superseded by #3869? Needs triage |

**Maintainer action needed**: #2924 is the oldest open PR with user-visible impact (message delivery). #3750 and #3869 are likely the same root cause — **coordinate fix**.

---

**Health Score**: 🟢 **Healthy velocity, architectural maturity increasing**  
**Risk**: Self-update regression (#3869) + stale delivery fix (#2924)  
**Next Milestone**: CDSS channel promotion + Apple Container skill + Cursor provider → v0.15.x candidate

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-23

## 1. Today's Overview
IronClaw showed **low issue activity but steady PR momentum** over the last 24 hours. No new issues were filed or updated, and no releases were published. Three pull requests remain open and were all updated today, indicating active development on the `host-runtime` time builtin, WebUI IME handling, and Italian localization. The project appears to be in a **feature-polish and i18n expansion phase** rather than a bug-firefighting cycle.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
No PRs were merged or closed today. The three open PRs advanced as follows:

| PR | Area | Status | Key Advancement |
|----|------|--------|-----------------|
| [#8108](https://github.com/nearai/ironclaw/pull/8108) | `host-runtime` / builtins | **Open** | Added `operation: "shift"` to `builtin.time` — supports signed seconds/minutes/hours/days/weeks summed into a `TimeDelta` applied to an input timestamp (or `now`), with multiple output formats (`iso`, `utc_iso`, `unix`, `unix_millis`, `local_iso` + timezone). |
| [#8092](https://github.com/nearai/ironclaw/pull/8092) | `webui` / chat composer | **Open** (updated today, created 2026-09-10) | Preserves native IME composition in the chat composer: defers composition keys to browser before command-menu/Enter handling; handles Safari's `keyCode 229` edge case when `isComposing` is false; adds regression tests for plain and composed input. |
| [#8107](https://github.com/nearai/ironclaw/pull/8107) | `webui` / i18n | **Open** | Adds Italian (`it`) as the 12th WebUI locale (requested in #7855). `it.ts` includes the full English key union plus lazily registered sidecar packs (`device-link-translations.ts`, `inspector-translations.ts`) to avoid silent fallbacks. |

## 4. Community Hot Topics
No issues were updated in the last 24 hours, and all three PRs have **zero comments and zero reactions** so far. The most notable community signal is the **Italian locale request (#7855)** that drove PR #8107, suggesting growing international adoption. Maintainer review bandwidth appears to be the current bottleneck.

## 5. Bugs & Stability
**No new bugs, crashes, or regressions reported today.** PR #8092 addresses a pre-existing IME composition bug (Safari `isComposing` false-positive on Enter), but it remains unmerged. No security or data-loss issues surfaced.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Time-delta shifting builtin** | PR #8108 | High — pure additive feature, well-scoped |
| **Italian localization** | PR #8107 (from #7855) | High — follows established i18n pattern, 12th locale |
| **IME composition robustness** | PR #8092 | Medium — fixes a cross-browser edge case; tests added |
| **Additional locales** | Implied by #7855 / #8107 | Likely — i18n infrastructure now supports rapid locale addition |

The roadmap appears focused on **runtime builtin completeness** and **WebUI polish for global users**.

## 7. User Feedback Summary
Direct user feedback is absent from today's data (no issue comments, no PR discussions). Indirect signals:
- **Positive**: Community requested Italian locale (#7855) → acted upon quickly (#8107).
- **Pain point**: Safari IME handling in chat composer (#8092) indicates real-world friction for non-Latin-script users.
- **No dissatisfaction signals** visible in the last 24h.

## 8. Backlog Watch
| Item | Age | Concern | Action Needed |
|------|-----|---------|---------------|
| [PR #8092](https://github.com/nearai/ironclaw/pull/8092) | 13 days (created 2026-09-10) | IME fix with regression tests sitting unmerged; affects Safari users | **Maintainer review/merge** — low risk, high UX value |
| [PR #8107](https://github.com/nearai/ironclaw/pull/8107) | 1 day | Italian locale ready; blocks i18n completeness | **Review & merge** — straightforward |
| [PR #8108](https://github.com/nearai/ironclaw/pull/8108) | 1 day | New builtin.time capability; no tests visible in summary | **Review + test coverage check** before merge |

**Overall health**: 🟢 **Healthy** — active PR pipeline, no critical bugs, clear incremental progress. Main risk is **review latency** on ready-to-merge PRs.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-23

## 1. Today's Overview
LobsterAI shows **high maintenance velocity** with 9 PRs merged/closed and 1 release shipped in the last 24 hours, primarily targeting OpenClaw gateway stability, Windows startup reliability, and cowork streaming UX. The issue backlog contains 5 active tickets—all stale (opened March 2026) but recently updated—indicating persistent user pain points around config persistence, WeChat sync, web search startup, i18n, and hotkey customization. No new issues were filed today; activity is concentrated on hardening the 2026.9.22 release and polishing cowork turn progress.

## 2. Releases
### **LobsterAI 2026.9.22** (2026-09-22)
| Change | Type | Details |
|--------|------|---------|
| Restore native scheduled tasks & Feishu delivery | Bugfix | Fixes regression where scheduled tasks and Feishu webhook delivery stopped working after recent refactors. [PR #2737](https://github.com/netease-youdao/LobsterAI/pull/2737) |
| Recover Windows gateway exits & repair startup | Bugfix | Addresses gateway crashes on Windows caused by `koffi`/`Add-Type` private-directory creation blocked by security software. [PR #2743](https://github.com/netease-youdao/LobsterAI/pull/2743) |

**Migration notes**: No breaking changes. Users on 2026.9.21 or earlier should upgrade to resolve Windows gateway startup failures and Feishu/scheduled-task regressions.

## 3. Project Progress (Merged/Closed PRs — 2026-09-22/23)
| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2750](https://github.com/netease-youdao/LobsterAI/pull/2750) | renderer, main, openclaw, cowork | Cowork turn progress polish: live per-step streaming, diff stats, artifact tab de-dup | UX — real-time visibility into multi-agent turns |
| [#2749](https://github.com/netease-youdao/LobsterAI/pull/2749) | renderer, main, cowork | Stream live turn progress & diff stats (`isGenerating`, `liveEditDiff`) via `ActivityGroupBlock`/`ToolCallGroup` | UX — reduces perceived latency during tool calls |
| [#2748](https://github.com/netease-youdao/LobsterAI/pull/2748) | renderer, docs, main, openclaw | Raise Kimi K3 `maxTokens` to 1M (match context window); localize stream wrapper, add SDK export contract | Feature — unblocks long-output Kimi K3 usage |
| [#2747](https://github.com/netease-youdao/LobsterAI/pull/2747) | renderer, docs, main, openclaw, cowork | Release 2026.9.21 prep | Release engineering |
| [#2746](https://github.com/netease-youdao/LobsterAI/pull/2746) | main, openclaw | Avoid unnecessary Clawguard startup lease waits (500ms budget included sync SQLite) | Stability — faster gateway boot, fewer false timeouts |
| [#2745](https://github.com/netease-youdao/LobsterAI/pull/2745) | main, openclaw | Recover invalid generated model policies on upgrade (legacy model IDs blocking startup) | Stability — prevents gateway start failure after upgrade |
| [#2744](https://github.com/netease-youdao/LobsterAI/pull/2744) | docs, openclaw | Move "Active exec sessions" snapshot out of system prompt into hidden runtime-context carrier | Performance — preserves provider prefix cache across turns |
| [#2743](https://github.com/netease-youdao/LobsterAI/pull/2743) | docs, openclaw | Backport native `koffi` Windows private-directory patch (bypass `Add-Type` blocked by AV) | Stability — fixes Windows gateway/Doctor/device-identity startup |
| [#2742](https://github.com/netease-youdao/LobsterAI/pull/2742) | main, openclaw | Stabilize skill config sync & timeout recovery (dedupe notifications, retain `modelPolicy`, confirm applied config on timeout) | Stability — stops gateway restart loops from config thrashing |

**Open PRs of note**:
- [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727) — Persist OpenClaw entry hooks across sync (SQLite + `syncToDisk` rewrite) — addresses config-loss on gateway restart.
- [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Dependabot: bump Electron 43.5.0 → 44.4.2 + electron-builder (open since Apr, updated today).

## 4. Community Hot Topics
| Issue | Comments | Reactions | Core Need |
|-------|----------|-----------|-----------|
| [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) Config/workspace files reset on restart | 3 | 0 | **Official persistence API** — users lose `openclaw.json` custom fields (e.g., `channels.feishu.streaming`) and `AGENTS.md` on every boot; current workaround = cron job. |
| [#986](https://github.com/netease-youdao/LobsterAI/issues/986) WeChat replies not synced with client; batched burst after full reply | 2 | 0 | **Streaming WeChat sync** — poor UX: long wait then message flood. |
| [#981](https://github.com/netease-youdao/LobsterAI/issues/981) `Failed to start Web Search service` on app launch | 1 | 0 | **Reliable web-search bridge bootstrap** — runtime repair succeeds but service start fails. |
| [#982](https://github.com/netease-youdao/LobsterAI/issues/982) Preset Agents not localized (EN UI shows CN names/descriptions) | 1 | 0 | **i18n for built-in agents** — missing translation keys or fallback logic. |
| [#983](https://github.com/netease-youdao/LobsterAI/issues/983) Cannot rebind hotkey by pressing new combo (docs promise unimplemented) | 1 | 0 | **Hotkey recorder UI** — documented feature missing in settings. |

**Pattern**: All 5 hot issues are **stale (6 months old) but recently touched**, signaling unresolved “paper cuts” that affect daily workflows. Config persistence (#1006) and WeChat streaming (#986) are the highest-impact for power users.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **Critical (Windows)** | Gateway/Doctor/device-identity spawn `powershell.exe Add-Type` blocked by AV → total startup failure | Fixed in 2026.9.22 | [#2743](https://github.com/netease-youdao/LobsterAI/pull/2743) |
| **Critical** | Legacy model ID (e.g., `DeepSeek V4 Pro`) blocks gateway start after upgrade | Fixed in 2026.9.22 | [#2745](https://github.com/netease-youdao/LobsterAI/pull/2745) |
| **High** | Clawguard startup lease wait (500ms + sync SQLite) causes false timeouts | Fixed in 2026.9.22 | [#2746](https://github.com/netease-youdao/LobsterAI/pull/2746) |
| **High** | Skill config sync thrash → gateway restart loops (duplicate notifications, `modelPolicy` mismatch, RPC timeout) | Fixed in 2026.9.22 | [#2742](https://github.com/netease-youdao/LobsterAI/pull/2742) |
| **Medium** | OpenClaw entry hooks lost on gateway restart (not persisted in SQLite) | **Open PR** | [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727) |
| **Medium** | Config/workspace files overwritten from internal templates on every restart | **Open Issue** | None yet ([#1006](https://github.com/netease-youdao/LobsterAI/issues/1006)) |
| **Medium** | Web Search Bridge fails to start after runtime repair | **Open Issue** | None yet ([#981](https://github.com/netease-youdao/LobsterAI/issues/981)) |
| **Low** | WeChat bot replies batched, not streamed | **Open Issue** | None yet ([#986](https://github.com/netease-youdao/LobsterAI/issues/986)) |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|-----------------------------|-----------|
| **Config/workspace persistence API** (protect user-edited files from template overwrite) | [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) | High | Directly blocks customization; workaround exists but is fragile. |
| **Streaming WeChat reply sync** | [#986](https://github.com/netease-youdao/LobsterAI/issues/986) | Medium | UX gap; requires WeChat protocol support for incremental delivery. |
| **Hotkey recorder (press combo to bind)** | [#983](https://github.com/netease-youdao/LobsterAI/issues/983) | Medium | Docs already promise it; implementation missing. |
| **i18n for preset Agents** | [#982](https://github.com/netease-youdao/LobsterAI/issues/982) | Low-Medium | Straightforward translation pass; low engineering risk. |
| **Kimi K3 1M token output** | [#2748](https://github.com/netease-youdao/LobsterAI/pull/2748) | **Shipped** | Already merged; will be in next release. |
| **Cowork live turn progress & diff stats** | [#2749](https://github.com/netease-youdao/LobsterAI/pull/2749), [#2750](https://github.com/netease-youdao/LobsterAI/pull/2750) | **Shipped** | Merged today; polish for multi-agent UX. |

## 7. User Feedback Summary
- **Pain points**: Config reset on restart (#1006) forces cron workarounds; WeChat batched replies (#986) break conversational flow; Windows gateway crashes (#2743) block onboarding; hotkey recorder missing (#983) despite docs.
- **Use cases**: Multi-agent cowork sessions (heavy PR investment today), Feishu/Scheduled-task automation, Kimi K3 long-context generation, Windows daily driver.
- **Satisfaction**: Recent stability fixes (2026.9.22) address critical Windows/upgrade blockers, but **long-standing config/UX issues remain open 6+ months** — users perceive neglect of “quality of life” features.

## 8. Backlog Watch (Needs Maintainer Attention)
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) Config/workspace reset | 6 months | Blocks all user customization; high friction | Design persistence layer (user-overlay dir or DB-backed config) — assign owner. |
| [#986](https://github.com/netease-youdao/LobsterAI/issues/986) WeChat streaming sync | 6 months | Core channel UX; affects every WeChat bot user | Investigate WeChat protocol capabilities; prototype incremental delivery. |
| [#981](https://github.com/netease-youdao/LobsterAI/issues/981) Web Search startup failure | 6 months | Breaks web search skill out-of-the-box | Add diagnostic logging; fallback to bundled runtime; ensure repair→start atomicity. |
| [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727) Persist OpenClaw entry hooks | 3 days (updated today) | Hooks lost on gateway restart → broken plugins | Review & merge; unblocks plugin authors. |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Electron 44 upgrade | 5 months | Security + compat; dependabot PR stale | Test on Windows/macOS/Linux; resolve any native module rebuilds; merge. |

---

**Health Score**: 🟡 **Fair** — Strong release cadence & critical bug throughput, but **stale UX debt** (config persistence, WeChat streaming, hotkeys, i18n) accumulates. Recommend dedicating 1 sprint cycle to close the top 3 backlog items before next minor version.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-23

## 1. Today's Overview
Moltis showed **minimal activity** in the last 24 hours: zero issue updates, zero merged or closed pull requests, and no new releases. The sole change is an automated dependabot PR (#1284) updating the `wasmtime-wasi` crate from 36.0.9 to 36.0.11. This indicates a **maintenance-only day** with no feature work, bug fixes, or community discussions recorded. Project health appears stable but quiet—no regressions or urgent matters surfaced.

## 2. Releases
**No new releases** published today. The latest release remains unchanged; monitor the [releases page](https://github.com/moltis-org/moltis/releases) for future version drops.

## 3. Project Progress
**No PRs merged or closed today.** The only open PR is dependabot’s dependency bump (#1284), which has not yet been reviewed or merged. No feature advancements or bug fixes landed in the last 24 hours.

## 4. Community Hot Topics
**No community-driven issues or PRs** received comments or reactions today. The only PR (#1284) is a bot-authored dependency update with zero comments or 👍 reactions. Underlying need: routine dependency hygiene to keep the Wasmtime runtime current.

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.** Zero issues opened or updated. Stability status: no known new defects.

## 6. Feature Requests & Roadmap Signals
**No feature requests filed or discussed today.** Roadmap signals remain unchanged; watch the [issues board](https://github.com/moltis-org/moltis/issues) for upcoming user-driven proposals.

## 7. User Feedback Summary
**No user feedback captured today.** No issues, discussions, or PR comments from end users. Pain points, use cases, and satisfaction signals are absent from the current data window.

## 8. Backlog Watch
- **PR #1284** — `chore(deps): bump wasmtime-wasi from 36.0.9 to 36.0.11` ([link](https://github.com/moltis-org/moltis/pull/1284))  
  *Status*: Open, authored by dependabot[bot] on 2026-09-22, zero reviewer engagement.  
  *Action needed*: Maintainer review and merge to keep the Wasmtime dependency current; low risk, routine update.

---

**Overall health indicator**: 🟢 Stable / Low activity — project is quiet with only automated maintenance pending.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-09-23

## 1. Today's Overview
CoPaw (QwenPaw) shows **high velocity** with 66 total items updated in the last 24 hours (21 issues, 45 PRs). The project is in active bug-fix and stabilization mode: 12 issues and 20 PRs were closed/merged today, while 9 issues and 25 PRs remain open. No new release was cut, but a **v2.2.2 release notes PR (#7928)** is open, suggesting an imminent patch release. The backlog leans heavily toward **Windows sandbox security**, **provider resilience (timeouts, fallbacks)**, **console UX polish**, and **sub-agent observability** — all signals of a product hardening for production desktop use.

## 2. Releases
**No new releases published today.**  
- **Release candidate in progress:** PR [#7928](https://github.com/agentscope-ai/QwenPaw/pull/7928) — “chore: release notes for v2.2.2” (open, authored by cuiyuebing).  
- Current latest stable: **v2.2.1** (PyPI); beta **v2.2.2-beta.3** referenced in issue [#7947](https://github.com/agentscope-ai/QwenPaw/issues/7947).  
- Expected v2.2.2 scope: Windows ACL fixes, console file-card rendering, provider session-header propagation, and a batch of unit-test portability improvements.

## 3. Project Progress — Merged / Closed Today (20 PRs, 12 Issues)
| PR / Issue | Type | Summary |
|---|---|---|
| [#7938](https://github.com/agentscope-ai/QwenPaw/pull/7938) | test | Fixed Windows unit-test collection failures from batch-3 coverage sprint (merged). |
| [#7898](https://github.com/agentscope-ai/QwenPaw/pull/7898) | fix | Resolved `qwenpaw-pet` plugin breaking all tool approvals (HTTP 500) — closed, marked “review later”. |
| [#6668](https://github.com/agentscope-ai/QwenPaw/pull/6668) | feat | **Responses prompt caching** for GPT-5.6+ (opt-in via `prompt_cache_key` / `extra_body`) — under review, long-standing. |
| [#3819](https://github.com/agentscope-ai/QwenPaw/pull/3819) | feat | **Browsable remote model listing + batch insert** in Model Management Modal (replaces “Auto Discover”) — under review since Apr. |
| [#4938](https://github.com/agentscope-ai/QwenPaw/pull/4938) | feat | Plugin extensions demo — under review since Jun. |
| [#7942](https://github.com/agentscope-ai/QwenPaw/issues/7942) | bug | **Windows sandbox ACL on drive root (`C:\`) strips volume permissions** — closed (duplicate of #7943). |
| [#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318) | enh | **Per-conversation model override** (agent default + per-session override) — closed, likely shipped. |
| [#7062](https://github.com/agentscope-ai/QwenPaw/issues/7062) | feat | **Per-agent / per-session `reasoning_effort` override** — closed. |
| [#6229](https://github.com/agentscope-ai/QwenPaw/issues/6229) | enh | **User-controlled reasoning depth (Light/Medium/Deep/Auto)** — closed. |
| [#5182](https://github.com/agentscope-ai/QwenPaw/issues/5182) | enh | **Unified model config** (type, input/output modalities) — closed. |
| [#4882](https://github.com/agentscope-ai/QwenPaw/issues/4882) | enh | **Model fallback chain** for provider resilience — closed (design accepted, implementation may follow in #5351/#5572). |
| [#5351](https://github.com/agentscope-ai/QwenPaw/issues/5351) | enh | **Auto model failover in `model_factory.py`** — closed (RoutingChatModel now wired). |
| [#5572](https://github.com/agentscope-ai/QwenPaw/issues/5572) | enh | **Auto fallback on quota/failure/timeout** — closed. |

**Takeaway:** The last 24h closed a **major feature cluster** around model selection, reasoning control, and provider fallbacks — likely the core of v2.2.2.

## 4. Community Hot Topics (Most Comments / Engagement)
| Item | Comments | Core Need |
|---|---|---|
| [#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318) Per-conversation model override | 8 | **Multi-model workflows**: users want agent-level defaults but session-level overrides without creating duplicate agents. |
| [#7850](https://github.com/agentscope-ai/QwenPaw/issues/7850) Driver card policy lost update (race) | 3 | **Concurrency safety**: background `reload_driver` overwrites concurrent policy writes — critical for multi-user / multi-session deployments. |
| [#7549](https://github.com/agentscope-ai/QwenPaw/issues/7549) Volcengine Ark 400 on trailing assistant turn | 3 | **Provider compatibility**: request shape validation fails when conversation ends with assistant message — blocks Chinese cloud provider. |
| [#7935](https://github.com/agentscope-ai/QwenPaw/issues/7935) LLM timeout → process never recovers (v2.2.1) | 3 | **Resilience**: transient timeout poisons the process; requires manual restart — high severity for long-running agents. |
| [#7947](https://github.com/agentscope-ai/QwenPaw/issues/7947) `send_file_to_user` no file card in Console | 2 | **Console UX regression**: artifact guard checks JSON string vs block array — files invisible to users. |
| [#7948](https://github.com/agentscope-ai/QwenPaw/issues/7948) Poor web console design breaks input | 1 (new) | **Usability**: free-text report of console input handling — needs triage. |

**Underlying theme:** **Reliability at the edges** — provider quirks, Windows permissions, console rendering, and recovery from transient failures.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|---|---|---|---|
| **Critical** | [#7935](https://github.com/agentscope-ai/QwenPaw/issues/7935) LLM timeout → permanent process failure (v2.2.1) | Open, “Cannot Reproduce” | None yet |
| **High** | [#7850](https://github.com/agentscope-ai/QwenPaw/issues/7850) Driver card policy race condition (stale write) | Open | None yet |
| **High** | [#7942](https://github.com/agentscope-ai/QwenPaw/issues/7942) / [#7943](https://github.com/agentscope-ai/QwenPaw/issues/7943) Windows sandbox ACL on drive root → volume lock | Open (#7943) / Closed dup (#7942) | [#7937](https://github.com/agentscope-ai/QwenPaw/pull/7937) fixes zip validation prefix-match; sandbox ACL fix likely separate |
| **Medium** | [#7549](https://github.com/agentscope-ai/QwenPaw/issues/7549) Volcengine Ark rejects trailing assistant turn | Open | None yet |
| **Medium** | [#7947](https://github.com/agentscope-ai/QwenPaw/issues/7947) `send_file_to_user` file card missing in Console | Open | [#7949](https://github.com/agentscope-ai/QwenPaw/pull/7949) — open, handles serialized JSON string |
| **Medium** | [#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946) QQ gateway event replay on session resume → duplicate processing | Open | None yet |
| **Low** | [#7939](https://github.com/agentscope-ai/QwenPaw/issues/7939) Event-trigger plugin (external) — feature, not bug | Open | N/A (external impl) |

## 6. Feature Requests & Roadmap Signals
| Request | Evidence | Likelihood for Next Version |
|---|---|---|
| **Per-session / per-agent model & reasoning config** | #6318, #7062, #6229 all **closed today** | ✅ **Already landed** (v2.2.2) |
| **Model fallback chain / auto failover** | #4882, #5351, #5572 all **closed today** | ✅ **Design accepted**, `RoutingChatModel` wired (#5351) |
| **Prompt caching (GPT-5.6+)** | #6668 PR under review since Aug | 🟡 **High** — provider-side feature, low risk |
| **Browsable remote model discovery + batch add** | #3819 PR under review since Apr | 🟡 **Medium** — UI-heavy, may wait for v2.3 |
| **Event-trigger layer (cron complement)** | #7939 external plugin + issue | 🟡 **Medium** — community-driven, may become built-in skill |
| **Theme / custom colors** | #2869 (Apr, closed today) | ❌ **Deferred** — closed without action |
| **Project-scoped sessions / manual dir read** | #5283 (Jun, closed today) | ❌ **Deferred** — closed without action |
| **Sub-agent observability (spawn_subagent progress)** | #4923 (Jun, closed today) | ❓ **Closed** but #4923 notes “content still incomplete” — may reopen |

## 7. User Feedback Summary
| Pain Point | Frequency | Example |
|---|---|---|
| **Process instability after timeout** | High (multiple reports) | “Once timeout starts, *all* subsequent requests fail until restart” (#7935) |
| **Windows permission surprises** | 2 issues same day | Drive-root workspace = volume ACL corruption (#7942, #7943) |
| **Console rendering gaps** | 2 issues today | File cards missing (#7947), input handling broken (#7948) |
| **Provider-specific quirks** | Ongoing | Volcengine Ark 400 on valid conversation shape (#7549) |
| **Sub-agent blindness** | Historical | “Can’t see spawn_subagent progress until done, then incomplete” (#4923) |
| **QQ channel duplicate events** | New | Gateway replays on resume → double processing (#7946) |

**Satisfaction signals:** Users actively file detailed bugs with versions, logs, and code pointers — indicates **invested community**. Dissatisfaction clusters around **desktop/Windows robustness** and **console polish**.

## 8. Backlog Watch — Stale / High-Value Items Needing Attention
| Item | Age | Why It Matters |
|---|---|---|
| [#3819](https://github.com/agentscope-ai/QwenPaw/pull/3819) Browsable remote model listing | 5 months | Major UX upgrade for model management; blocked on review bandwidth. |
| [#6668](https://github.com/agentscope-ai/QwenPaw/pull/6668) Responses prompt caching | 1.5 months | Cost/latency win for OpenAI Responses API users; ready but unmerged. |
| [#4938](https://github.com/agentscope-ai/QwenPaw/pull/4938) Plugin extensions demo | 3.5 months | Showcases extensibility; could unblock plugin ecosystem docs. |
| [#7835](https://github.com/agentscope-ai/QwenPaw/pull/7835) Auto-memory-recall leak to channels | 6 days | Security/privacy: synthetic memory traces sent to Feishu/DingTalk/etc. — under review. |
| [#7864](https://github.com/agentscope-ai/QwenPaw/pull/7864) Skill directory prompt-injection protection | 5 days | **Security hardening** — prevents malicious deletion via prompt injection; under review. |
| [#7409](https://github.com/agentscope-ai/QwenPaw/pull/7409) Drop empty assistant text blocks | 24 days | Prevents context pollution from reasoning-only turns; small but impactful. |
| [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) Durable paginated transcript history (SQLite) | 1 day | **Architectural** — enables long-session persistence, deduplication, usage tracking; large PR, needs review. |

---

**Bottom line:** CoPaw is **shipping a significant v2.2.2** focused on model-config flexibility, provider resilience, and Windows/console stability. The next cycle will likely tackle **durable history (#7931)**, **security hardening (#7835, #7864)**, and the **backlog of UX/features (#3819, #6668)**. Maintainer bandwidth on review is the current bottleneck.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-09-23

## 1. Today's Overview
ZeptoClaw shows **low human-driven activity** over the past 24 hours. Zero issues were created or updated, and zero pull requests were merged or closed. All three PR updates are automated **Dependabot dependency bumps** (two GitHub Actions, one Rust crate), indicating routine maintenance rather than feature development. The project appears stable but quiet, with no community discussions, bug reports, or feature proposals surfacing today.

## 2. Releases
**No new releases** published today.

## 3. Project Progress
**No PRs merged or closed today.** All three open PRs are pending review/merge:
- [#704](https://github.com/qhkm/zeptoclaw/pull/704) – `docker/build-push-action` 7.2.0 → 7.3.0  
- [#705](https://github.com/qhkm/zeptoclaw/pull/705) – `mail-parser` 0.11.3 → 0.11.9  
- [#706](https://github.com/qhkm/zeptoclaw/pull/706) – `actions/checkout` 6.0.2 → 7.0.1  

These updates address CI/CD tooling and a core email-parsing dependency; merging them will keep the build chain current and may include minor bug fixes from upstream.

## 4. Community Hot Topics
**None today.** Zero issues and zero comments on the open PRs. No community discussions, feature debates, or support requests surfaced in the last 24 h.

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.** The dependency updates in #704–#706 may implicitly resolve upstream issues, but no ZeptoClaw-specific defect has been filed.

## 6. Feature Requests & Roadmap Signals
**No feature requests or roadmap signals today.** The backlog shows no user-driven enhancement proposals. The only signals are the routine dependency upgrades, which suggest the maintainers prioritize supply-chain hygiene.

## 7. User Feedback Summary
**No user feedback captured today.** No issues, discussions, or PR comments from end-users. Satisfaction/dissatisfaction signals are absent.

## 8. Backlog Watch
| Item | Type | Age | Notes |
|------|------|-----|-------|
| [#704](https://github.com/qhkm/zeptoclaw/pull/704) | PR (deps) | 1 day | `docker/build-push-action` v7.3.0 – review CI impact |
| [#705](https://github.com/qhkm/zeptoclaw/pull/705) | PR (deps) | 1 day | `mail-parser` v0.11.9 – verify email-parsing behavior |
| [#706](https://github.com/qhkm/zeptoclaw/pull/706) | PR (deps) | 1 day | `actions/checkout` v7.0.1 – major version bump, check breaking changes |

> **Maintainer action suggested:** Review and merge the three Dependabot PRs to avoid version drift. No stale human-authored issues or PRs require attention at this time.

---

*Digest generated from GitHub data as of 2026-09-23. Next update will reflect any new issues, PR merges, or releases.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-23

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 64 total updates (14 issues, 50 PRs) in the last 24 hours. The project is in active bug-fix and feature-completion mode, particularly around **WhatsApp Web channel reliability**, **channel-tool integration**, and **provider runtime correctness**. No new release was cut today, but 18 PRs were merged/closed, indicating steady progress toward stabilization. Critical-severity (S0) bugs in memory backend and sandbox security remain open, warranting immediate maintainer attention.

---

## 2. Releases

**No new releases today.** The last release information is not present in the 24-hour window.

---

## 3. Project Progress — Merged/Closed PRs (18 today)

| PR | Title | Area | Status |
|----|-------|------|--------|
| [#11042](https://github.com/zeroclaw-labs/zeroclaw/pull/11042) | docs(developing): record the replacement-first integration policy | Docs/Architecture | **Closed** |
| [#11038](https://github.com/zeroclaw-labs/zeroclaw/pull/11038) | chore(security): ignore RUSTSEC-2026-0292 (imbl-sized-chunks double free) | Security/Deps | **Closed** |
| [#10981](https://github.com/zeroclaw-labs/zeroclaw/pull/10981) | fix(channels/whatsapp-web): outgoing images need jpegThumbnail/dimensions | WhatsApp Channel | **Closed** |
| [#10952](https://github.com/zeroclaw-labs/zeroclaw/pull/10952) | fix: seam sanitizers rewriting signed reasoning in tool-call envelope | Provider/Anthropic | **Closed** |
| [#10948](https://github.com/zeroclaw-labs/zeroclaw/pull/10948) | fix(channel): interruption-scope key collisions across components | Channel Core | **Closed** |
| [#10889](https://github.com/zeroclaw-labs/zeroclaw/pull/10889) | fix(provider/anthropic): rolling cache breakpoint on image blocks | Provider/Anthropic | **Closed** |
| [#9392](https://github.com/zeroclaw-labs/zeroclaw/pull/9392) | fix(channel/line): group messages skip allowlist & pairing handshake | Channel/LINE (Security) | **Closed** |

**Key advances:** WhatsApp image rendering fixed; Anthropic provider cache logic corrected; LINE security bypass patched; documentation for integration policy added; critical dependency vulnerability (RUSTSEC-2026-0292) mitigated via allowlist.

---

## 4. Community Hot Topics — Most Active Discussions

| Item | Comments | Type | Core Issue |
|------|----------|------|------------|
| [#10172](https://github.com/zeroclaw-labs/zeroclaw/pull/10172) | *undefined (high activity)* | PR | **Provider profile identity preservation** — XL refactor to keep `<family>.<alias>` semantics through runtime, gateway, Zerocode. Parked, needs maintainer review. |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | *undefined* | PR | **Bounded delegate filesystem tools** — respect target workspace; security/policy implications. Needs author action. |
| [#10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922) | 5 | Issue | **WhatsApp `suppress_voice` ignored** — automatic TTS queues despite flag. PR [#11057](https://github.com/zeroclaw-labs/zeroclaw/pull/11057) open. |
| [#10985](https://github.com/zeroclaw-labs/zeroclaw/issues/10985) | 3 | Issue | **Dashboard turns get fresh channel instances** — session-bound channels (WhatsApp) unreachable. PR [#10986](https://github.com/zeroclaw-labs/zeroclaw/pull/10986) open. |
| [#11052](https://github.com/zeroclaw-labs/zeroclaw/issues/11052) | 3 | Issue | **WhatsApp Markdown: thematic breaks & setext headings** — PR [#11054](https://github.com/zeroclaw-labs/zeroclaw/pull/11054) open. |
| [#10889](https://github.com/zeroclaw-labs/zeroclaw/issues/10889) | 3 | Issue | **Anthropic cache breakpoint dropped on image blocks** — fixed in closed PR. |
| [#9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392) | 3 | Issue | **LINE group messages bypass allowlist/handshake** — fixed in closed PR. |

**Underlying needs:** Channel reliability (especially WhatsApp session binding and voice control), provider runtime correctness, and security hardening are the dominant themes. Contributors are stacking PRs (e.g., #11057 + #11060 for voice flags) indicating coordinated feature completion.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **S0 — Data loss / Security** | [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797): Markdown memory backend loses entries on concurrent `store()` | **Open** | None yet |
| **S0 — Data loss / Security** | [#11058](https://github.com/zeroclaw-labs/zeroclaw/issues/11058): `allowed_commands` exempts high-risk commands from `block_high_risk_commands` — runs unprompted, no approval/log | **Open** | None yet |
| **S1 — High (P1)** | [#10985](https://github.com/zeroclaw-labs/zeroclaw/issues/10985): Dashboard turns get fresh channel instances; session-bound tools fail | **Open** | [#10986](https://github.com/zeroclaw-labs/zeroclaw/pull/10986) |
| **S1 — High (P1)** | [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055): Daemon never registers channel-map factory; webhook/cron/SOP turns have no channels | **Open** | None yet |
| **S2 — Medium** | [#10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922): WhatsApp ignores `suppress_voice` when queueing TTS | **Open** | [#11057](https://github.com/zeroclaw-labs/zeroclaw/pull/11057) |
| **S2 — Medium** | [#11059](https://github.com/zeroclaw-labs/zeroclaw/issues/11059): WhatsApp ignores `force_voice`; `send_via` cannot route to voice | **Open** | [#11060](https://github.com/zeroclaw-labs/zeroclaw/pull/11060) |
| **S2 — Medium** | [#10948](https://github.com/zeroclaw-labs/zeroclaw/issues/10948): Interruption-scope keys collide across component boundaries | **Closed** | Fixed |
| **S2 — Medium** | [#10981](https://github.com/zeroclaw-labs/zeroclaw/issues/10981): WhatsApp outgoing images lack thumbnail/dimensions | **Closed** | Fixed |
| **S2 — Medium** | [#10889](https://github.com/zeroclaw-labs/zeroclaw/issues/10889): Anthropic drops cache breakpoint on image blocks | **Closed** | Fixed |
| **S2 — Medium** | [#9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392): LINE group messages skip allowlist/handshake | **Closed** | Fixed |

**Critical gaps:** Two S0 bugs (#10797 memory corruption, #11058 sandbox bypass) have **no fix PRs yet**. The daemon channel-map registration bug (#11055) breaks all non-interactive turn types.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **WhatsApp voice-note round-trip docs** | [#11056](https://github.com/zeroclaw-labs/zeroclaw/pull/11056) (PR) | ✅ High — docs PR open, feature already works |
| **WhatsApp thematic breaks & setext headings** | [#11052](https://github.com/zeroclaw-labs/zeroclaw/issues/11052) + [#11054](https://github.com/zeroclaw-labs/zeroclaw/pull/11054) | ✅ High — PR ready |
| **WhatsApp PDF first-page previews** | [#10980](https://github.com/zeroclaw-labs/zeroclaw/pull/10980) | ✅ High — PR open, needs author action |
| **WhatsApp poll vote readback as `[choice]` messages** | [#10988](https://github.com/zeroclaw-labs/zeroclaw/pull/10988) | ✅ High — PR open |
| **WhatsApp `create_room` / `invite_user` implementation** | [#10979](https://github.com/zeroclaw-labs/zeroclaw/pull/10979) | ✅ High — PR open, needs author action |
| **Knowledge graph as first-class memory layer** | [#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053) (RFC) | 🟡 Medium — design discussion, no PR yet |
| **Multiple models per provider profile** | [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | 🟡 Medium — XL PR, needs author action |
| **Zerocode session roots explicit + preserve resumed roots** | [#11044](https://github.com/zeroclaw-labs/zeroclaw/pull/11044) | 🟡 Medium — PR open |
| **Preserve provider profile identities (`<family>.<alias>`) through runtime** | [#10172](https://github.com/zeroclaw-labs/zeroclaw/pull/10172) | 🟡 Medium — parked, needs maintainer review |

**Prediction:** Next version will likely ship WhatsApp Web polish (voice flags, polls, rooms, PDF previews, Markdown rendering) and the provider-profile identity fix if unparked. Knowledge graph RFC needs more discussion.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **WhatsApp voice control unreliable** | `suppress_voice` ignored (#10922), `force_voice` ignored (#11059) | Users cannot programmatically control modality; automatic TTS fires unexpectedly |
| **Dashboard unusable with session-bound channels** | #10985: "channel-backed tools cannot reach session-bound channel" | Blocks web-UI-driven automation for WhatsApp/other session channels |
| **Daemon deployments lack channel access** | #11055: "webhook, cron and SOP turns have no channels" | Breaks headless/automation use cases entirely |
| **Memory backend loses data under concurrency** | #10797: "silently loses stored entries when `store()` calls overlap" | Data loss risk for agents using markdown memory |
| **Sandbox allowlist bypasses high-risk block** | #11058: high-risk command in `allowed_commands` runs "unprompted, with no approval and no log" | Security regression; audit trail broken |
| **LINE groups bypass security controls** | #9392 (fixed): group messages skip allowlist & pairing handshake | Was a production security hole |
| **Anthropic provider drops cache on images** | #10889 (fixed): cache breakpoint lost when last message ends with image | Increased token costs, broken caching expectation |

**Positive signals:** Active contributor community (RustLangLatam, Audacity88, qo-roj, RO-mix) filing detailed bugs with code references and often pairing with fix PRs. WhatsApp Web is a clear priority surface.

---

## 8. Backlog Watch — Stale/Important Items Needing Maintainer Attention

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#10172](https://github.com/zeroclaw-labs/zeroclaw/pull/10172) | **34 days** (2026-08-20) | **XL refactor**: preserves provider profile semantics across runtime, gateway, Zerocode. Parked in "parking-lot", needs maintainer review. | Design scope, review bandwidth |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | **28 days** (2026-08-26) | **Security/policy**: bounded delegate tools must respect target workspace. Needs author action. | Author follow-up |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | **47 days** (2026-08-07) | **Multi-model per provider** — major UX improvement. XL PR, needs author action. | Author follow-up |
| [#9368](https://github.com/zeroclaw-labs/zeroclaw/pull/9368) | **60 days** (2026-07-25) | **History retention accounting** — counts whole turns, not messages. Needs maintainer review. | Review bandwidth |
| [#10446](https://github.com/zeroclaw-labs/zeroclaw/pull/10446) | **25 days** (2026-08-29) | **Tool-call envelope leak** — rejects glued tool calls in prose. Needs author action. | Author follow-up |
| [#10860](https://github.com/zeroclaw-labs/zeroclaw/pull/10860) | **9 days** (2026-09-14) | **Non-image data-URI markers** kept as text in tool results. Needs maintainer review. | Review bandwidth |
| [#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053) | **1 day** (2026-09-22) | **RFC: Knowledge graph as memory layer** — architectural direction. No PR yet. | Design consensus |

**Recommendation:** Prioritize review of #10172 (provider identity) and #9368 (history accounting) as they unblock multiple downstream PRs. Assign triage for the two S0 bugs (#10797, #11058) immediately.

---

*Digest generated from GitHub API data for zeroclaw-labs/zeroclaw on 2026-09-23. All links point to live GitHub items.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*