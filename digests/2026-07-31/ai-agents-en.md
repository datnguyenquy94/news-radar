# OpenClaw Ecosystem Digest 2026-07-31

> Issues: 286 | PRs: 500 | Projects covered: 12 | Generated: 2026-07-31 03:37 UTC

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

# OpenClaw Project Digest — 2026-07-31

## 1. Today's Overview
OpenClaw shows **high development velocity** with 500 PRs and 286 issues updated in the last 24 hours. The project is in active maintenance mode with no new releases today, but a significant volume of merged PRs (96) indicates steady feature delivery and bug resolution. The issue backlog reveals persistent stability challenges around session state management, message delivery reliability, and multi-agent orchestration — areas receiving concentrated fix effort. Maintainer review capacity appears stretched given the volume of "needs-maintainer-review" labeled items.

## 2. Releases
**No new releases today.** The project continues on its rolling release cadence without a version cut.

---

## 3. Project Progress (Merged/Closed PRs Today)
96 PRs merged/closed in the last 24h. Key merged fixes (inferred from PR titles and linked issues):

| PR | Area | Impact |
|----|------|--------|
| [#110061](https://github.com/openclaw/openclaw/pull/110061) | Telegram | Fixes streamed drafts disappearing after run failures — improves perceived reliability for Telegram users |
| [#116280](https://github.com/openclaw/openclaw/pull/116280) | Security | Hardens `dangerous-exec` scanner against alias/computed-member evasions |
| [#116636](https://github.com/openclaw/openclaw/pull/116636) | Session routing | Resolves explicit `main` alias targeting wrong session |
| [#116649](https://github.com/openclaw/openclaw/pull/116649) | Agents/Gateway | Prevents silently lost replies, delivery receipts, cron reports |
| [#116591](https://github.com/openclaw/openclaw/pull/116591) | Exec deadline | Arms gateway node invoke deadline for `exec host=node` path |
| [#116616](https://github.com/openclaw/openclaw/pull/116616) | Exec continuity | Preserves approved exec continuation output (fixes truncation) |
| [#103062](https://github.com/openclaw/openclaw/pull/103062) | Channels | Stops sends after delivery cancellation — prevents late messages |
| [#116639](https://github.com/openclaw/openclaw/pull/116639) | Docker | Fixes healthcheck on custom ports |

**Theme:** Session reliability, message delivery guarantees, and security scanning hardening.

---

## 4. Community Hot Topics (Most Discussed Issues/PRs)

| Issue | Comments | 👍 | Core Pain Point | Link |
|-------|----------|-----|-----------------|------|
| **#25592** Text between tool calls leaks to messaging channels | 39 | 1 | **UX/Security**: Internal processing output (errors, narration) visible to end users in Slack/iMessage/Telegram | [#25592](https://github.com/openclaw/openclaw/issues/25592) |
| **#44925** Subagent completion silently lost — no retry/notification | 22 | 2 | **Reliability**: Subagent results vanish on timeout/crash with no recovery path | [#44925](https://github.com/openclaw/openclaw/issues/44925) |
| **#115326** Crash-loop breaker suppresses Discord/WhatsApp permanently | 20 | 0 | **Availability**: Documented recovery (`channels.start`) fails with WebSocket 1006 | [#115326](https://github.com/openclaw/openclaw/issues/115326) |
| **#48788** Centralized filename encoding for multi-encoding Content-Disposition | 19 | 1 | **i18n**: Feishu Chinese filenames broken; needs Shift-JIS/EUC-KR/GB18030 support | [#48788](https://github.com/openclaw/openclaw/issues/48788) |
| **#91009** Codex PreToolUse hooks spawn CPU-bound processes, stall gateway RPC | 18 | 2 | **Performance**: `openclaw-hooks` relay processes consume 100%+ CPU each | [#91009](https://github.com/openclaw/openclaw/issues/91009) |
| **#39604** Allow private network access for `web_fetch` | 13 | 12 | **Feature**: Opt-in `tools.web.fetch.allowPrivateNetwork` for internal services | [#39604](https://github.com/openclaw/openclaw/issues/39604) |
| **#45608** Pre-reset agentic memory flush (like compaction) | 12 | 4 | **Data integrity**: `/new`, `/reset`, daily reset should flush memory before destroy | [#45608](https://github.com/openclaw/openclaw/issues/45608) |

**Underlying needs:** Users demand **message delivery guarantees**, **subagent reliability**, and **operational visibility** — the project is transitioning from "works for me" to production-grade multi-channel deployment.

---

## 5. Bugs & Stability (Reported/Active Today, Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P1 — Critical** | [#25592](https://github.com/openclaw/openclaw/issues/25592) | Internal tool-call text leaks to user-facing channels (Slack, iMessage, Telegram) | [#50520](https://github.com/openclaw/openclaw/pull/50520) open (strip inbound metadata) |
| **P1 — Critical** | [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completions silently lost on timeout; no retry/notification/auto-restart | None linked |
| **P1 — Critical** | [#115326](https://github.com/openclaw/openclaw/issues/115326) | Crash-loop breaker permanently suppresses Discord/WhatsApp; recovery fails (WS 1006) | None linked |
| **P1 — Critical** | [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex hook relay spawns CPU-bound processes, stalls gateway RPC | None linked |
| **P1 — Critical** | [#43996](https://github.com/openclaw/openclaw/issues/43996) | Sandbox exits immediately with `no-new-privileges` (exec /usr/bin/sleep: operation not permitted) | None linked |
| **P1 — Critical** | [#46786](https://github.com/openclaw/openclaw/issues/46786) | `tools.elevated.enabled: true` breaks exec routing — all exec calls route to host | None linked |
| **P1 — High** | [#69118](https://github.com/openclaw/openclaw/issues/69118) | Claude CLI sessions reset every turn in group channels (extraSystemPromptHash drift) | None linked |
| **P1 — High** | [#41165](https://github.com/openclaw/openclaw/issues/41165) | Telegram DMs routed to `agent:main:main` instead of isolated session | None linked |
| **P1 — High** | [#45049](https://github.com/openclaw/openclaw/issues/45049) | Agent loop allows simulated tool calls instead of enforcing real invocation | None linked |
| **P2 — High** | [#45494](https://github.com/openclaw/openclaw/issues/45494) | Cron jobs timeout fully on sustained LLM 500s instead of fast-failing | None linked |
| **P2 — High** | [#43747](https://github.com/openclaw/openclaw/issues/43747) | Memory management inconsistent across users (chunking, embedding, storage paths differ) | None linked |
| **P2 — High** | [#45224](https://github.com/openclaw/openclaw/issues/45224) | Unhandled Playwright assertion crashes Gateway (CDP session) | None linked |

**Pattern:** Session state corruption, message routing failures, and sandbox/exec regressions dominate. Several P1s have open fix PRs but await maintainer review.

---

## 6. Feature Requests & Roadmap Signals

| Request | Votes/Interest | Likelihood for Next Version | Link |
|---------|----------------|----------------------------|------|
| **Private network fetch** (`tools.web.fetch.allowPrivateNetwork`) | 12 👍 | **High** — clear opt-in, security-reviewed, PR #115545 adds headers support | [#39604](https://github.com/openclaw/openclaw/issues/39604) |
| **Memory flush before reset** (parity with compaction) | 4 👍 | **Medium** — architectural consistency, low risk | [#45608](https://github.com/openclaw/openclaw/issues/45608) |
| **YAML config support** | 2 👍 | **Medium** — DevOps familiarity, JSON5 migration path exists | [#45758](https://github.com/openclaw/openclaw/issues/45758) |
| **MathJax/LaTeX in Control UI** | 10 👍 | **Medium-High** — UI-only, high user visibility | [#42840](https://github.com/openclaw/openclaw/issues/42840) |
| **Self-hosted STT/TTS in webchat** | 2 👍 | **Medium** — requires gateway audio pipeline changes | [#45508](https://github.com/openclaw/openclaw/issues/45508) |
| **Durable NL rule learning + multi-mention semantics** | 1 👍 | **Low** — complex multi-agent state, needs RFC | [#41366](https://github.com/openclaw/openclaw/issues/41366) |
| **Bounded memory tool with hard limits** | 1 👍 | **Medium** — addresses real pain (unbounded MEMORY.md growth) | [#42877](https://github.com/openclaw/openclaw/issues/42877) |
| **Control UI memory panel (MEMORY.md/USER.md)** | 1 👍 | **Medium** — UI feature, PR #116621 shows UI schema work active | [#46809](https://github.com/openclaw/openclaw/issues/46809) |

**Roadmap signal:** The project is investing in **Control UI maturity** (schema sharing, settings inheritance, memory panel) and **operator-facing config** (private fetch, YAML, headers). Multi-agent reliability remains a deeper architectural track (RFC #42026).

---

## 7. User Feedback Summary (Real Pain Points)

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Silent data loss** | #44925 (subagent results lost), #45573 (group chat sessions not persisted — 166 msgs, 1 session), #115326 (channels suppressed permanently) | **High** — users cannot trust automation for production workloads |
| **Message pollution** | #25592 (internal text leaks to users), #46548 (tool errors lack failure reason), #39406 (transient errors shown as warnings) | **High** — degrades UX, exposes internals, creates noise |
| **Session instability** | #69118 (Claude sessions reset every turn), #41165 (Telegram DMs misrouted), #43367 (concurrent agents overwrite config) | **High** — breaks multi-user/group workflows |
| **Sandbox/exec regressions** | #43996 (sandbox exits immediately), #46786 (elevated breaks routing), #39248 (non-main sandbox breaks subagents) | **High** — blocks code execution use cases |
| **Operational blind spots** | #57256 (`status` falsely reports memory unavailable), #43549 (Telegram wedged by bad session JSON, no recovery guidance) | **Medium** — operators lack diagnostics |
| **Config friction** | #39811 (unvalidated model names), #45765 (OPENCLAW_HOME creates nested dir), #42820 (Feishu poll schema blocks file send) | **Medium** — setup-time surprises |

**Satisfaction signal:** Users are sophisticated (self-hosted, multi-channel, cron-heavy) and vocal about **reliability gaps** — not feature gaps. The project is being stress-tested in production.

---

## 8. Backlog Watch (Stale/High-Impact Items Needing Maintainer Attention)

| Item | Age | Labels | Why It Matters | Link |
|------|-----|--------|----------------|------|
| **#42026** RFC: Distributed Agent Runtime (split control plane/runtime) | ~4.5 mo | `stale`, `P2`, `needs-product-decision` | **Architectural pivot** — enables horizontal scaling, fault isolation; blocked on design consensus | [#42026](https://github.com/openclaw/openclaw/issues/42026) |
| **#25592** Text between tool calls leaks to channels | ~5 mo | `P1`, `impact:security`, `impact:session-state`, `linked-pr-open` | **Security/UX** — PR #50520 open since Mar, awaits review | [#25592](https://github.com/openclaw/openclaw/issues/25592) |
| **#44925** Subagent completion silently lost | ~4.5 mo | `P1`, `impact:message-loss`, `no-new-fix-pr` | **Core reliability** — no PR yet, affects all subagent users | [#44925](https://github.com/openclaw/openclaw/issues/44925) |
| **#43367** Multi-agent orchestration unstable (config overwrites, session-lock failures) | ~4.5 mo | `P1`, `impact:session-state`, `impact:message-loss` | **Blocker for parallel workflows** — multiple failure modes documented | [#43367](https://github.com/openclaw/openclaw/issues/43367) |
| **#43747** Memory management chaos (inconsistent storage, chunking, embedding) | ~4.5 mo | `P2`, `regression`, `impact:session-state` | **Data integrity** — users see divergent behavior on same version | [#43747](https://github.com/openclaw/openclaw/issues/43747) |
| **#45505** Generalize post-timeout compaction reconciliation | ~4.5 mo | `P2`, `needs-maintainer-review` | **State consistency** — narrow fix exists but broader pattern likely | [#45505](https://github.com/openclaw/openclaw/issues/45505) |
| **#45224** Unhandled Playwright assertion crashes Gateway | ~4.5 mo | `P1`, `regression`, `impact:crash-loop` | **Availability** — full process exit, requires external restart | [#45224](https://github.com/openclaw/openclaw/issues/45224) |
| **#50520** Fix: strip inbound metadata before delivery | ~4 mo | `P1`, `waiting on author`, `security-boundary` | **Security fix** for #25592 — stale, needs author/maintainer sync | [#50520](https://github.com/openclaw/openclaw/pull/50520) |
| **#77877** Managed outgoing attachments (xlsx/pdf/docx) | ~3 mo | `P1`, `XL`, `waiting on author`, `security-boundary` | **Document delivery** — gateway-side MIME/Content-Disposition fix | [#77877](https://github.com/openclaw/openclaw/pull/77877) |
| **#42840** MathJax/LaTeX in Control UI | ~4.5 mo | `P2`, `stale`, 10 👍 | **High-visibility UI feature** — low complexity, high user value | [#42840](https://github.com/openclaw/openclaw/issues/42840) |

---

## Project Health Assessment
|

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent / Personal Assistant Ecosystem (2026-07-31)

---

## 1. Ecosystem Overview

The open-source AI agent landscape shows **intense parallel development** across 11 active projects (NullClaw inactive). All projects are in **post-v1 stabilization or pre-v1 hardening phases**, with heavy focus on **production reliability**—session persistence, message delivery guarantees, security boundaries, and multi-channel deployment—rather than novel LLM capabilities. A clear bifurcation exists: **framework-grade projects** (OpenClaw, Hermes, IronClaw, ZeroClaw) targeting self-hosted, multi-tenant, operator-grade deployments, and **desktop/app-centric projects** (NanoBot, PicoClaw, LobsterAI, CoPaw, Moltis) prioritizing end-user UX, local-first execution, and channel parity. **Supply-chain security** (Sigstore, image hardening, webhook auth) and **observability** (Langfuse, OTLP, structured logging) are cross-cutting investment areas. No project has shipped a major version in the last 24h; the ecosystem is in a **consolidation sprint**.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged PRs (24h) | Release Today | Health Score* |
|---------|--------------|-----------|------------------|---------------|---------------|
| **OpenClaw** | 286 | 500 | 96 | ❌ | 🟢 **High** — massive throughput, but P1 backlog growing |
| **NanoBot** | 5 | 42 | 24 | ❌ | 🟢 **High** — architectural migration (SQLite) landed, rapid fixes |
| **Hermes Agent** | 8 | 50 | 3 | ✅ v0.19.1 | 🟡 **Medium-High** — patch cadence strong, but 6 P2/P3 bugs filed today |
| **PicoClaw** | 7 | 17 | 5 | ❌ | 🟢 **High** — steady feature + hygiene, hook serialization risk |
| **NanoClaw** | 2 | 15 | 4 | ❌ | 🟡 **Medium** — core hardening, but 2 critical regressions unaddressed |
| **IronClaw** | 21 | 50 | 24 | ❌ | 🟡 **Medium** — architecture paydown active, **2 critical security bugs (P0) open** |
| **LobsterAI** | 0 | 7 | 7 | ❌ | 🟢 **High** — 100% merge rate, enterprise features landing, stale PR backlog |
| **Moltis** | 2 | 4 | 1 | ❌ | 🟡 **Medium** — focused hardening, **critical Vault auth bug (CWE-306) open** |
| **CoPaw** | 15 | 47 | 21 | ❌ | 🟡 **Medium** — Computer Use shipped, but **2s perf regression + 8 high-sev bugs** |
| **ZeptoClaw** | 0 | 1 | 0 | ❌ | 🔴 **Low** — single security PR stalled 8 days, no community signal |
| **ZeroClaw** | 6 | 50 | 1 | ❌ (target today) | 🟡 **Medium** — security fixes + CI consolidation, XL architectural PRs stalled |

*Health Score: 🟢=Strong velocity + risk managed; 🟡=Velocity present but material risks (security, perf, backlog); 🔴=Stalled/insufficient activity.*

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale of operation**: 500 PRs/24h dwarfs all others (next: Hermes 50, IronClaw 50). This reflects **production stress-testing at breadth**—multi-channel (Slack, Telegram, Discord, iMessage, Feishu), cron, subagents, sandboxed exec.
- **Session/routing maturity**: Explicit work on session routing (`main` alias), delivery receipts, cron reports, exec deadlines—areas where peers are still building foundations (NanoBot SQLite, IronClaw libSQL, Moltis instrumentation).
- **Security scanner investment**: `dangerous-exec` hardening against alias/computed-member evasions shows **proactive supply-chain thinking** matched only by ZeroClaw/NanoClaw image attestation work.

**Technical Approach Differences:**
- **Gateway-centric architecture**: OpenClaw’s gateway node, session routing, and channel abstraction are more elaborate than NanoBot’s SQLite sessions or CoPaw’s dialog WAL. Closer to IronClaw’s “Reborn” crate architecture but further evolved.
- **Rolling release, no version cuts**: Unlike Hermes (10-day patches), ZeroClaw (v0.8.4 target), or LobsterAI (feature drops), OpenClaw operates on continuous integration—faster fix propagation but harder for downstream consumers to pin.
- **Multi-agent as first-class**: Subagent completion loss (#44925), orchestration instability (#43367) indicate **parallel agent workloads** are a core use case; most peers treat this as future work.

**Community Size Comparison:**
- **Issue volume (286/24h) and P1 density (6 critical)** suggest the largest *active operator base* running production workloads. Hermes and CoPaw have deep technical reporters but lower throughput. IronClaw’s security bugs have **zero comments**—smaller/quieter community despite high PR count.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Session persistence & recovery** | OpenClaw, NanoBot, Hermes, IronClaw, CoPaw, ZeroClaw | SQLite/libSQL migration (NanoBot, IronClaw), WAL durability (CoPaw), compaction reconciliation (OpenClaw), session archive (Hermes) |
| **Message delivery guarantees** | OpenClaw, NanoBot, PicoClaw, Moltis, ZeroClaw | Acknowledgment reactions (Moltis), delivery receipts/cron reports (OpenClaw), inbound reaction/edit fix (NanoClaw), Block Kit rendering (Moltis) |
| **Security boundaries & supply chain** | OpenClaw, NanoClaw, ZeroClaw, ZeptoClaw, Moltis, IronClaw | `dangerous-exec` scanner (OpenClaw), Sigstore attestation (NanoClaw, ZeroClaw), subprocess secret scrubbing (ZeptoClaw), Vault auth (Moltis), webhook fail-closed (ZeroClaw), shared-home isolation (IronClaw) |
| **Observability & eval infrastructure** | Hermes, Moltis, ZeroClaw, NanoBot | Langfuse/OTLP instrumentation (Moltis), memory TUI + `/mem` (Hermes), eval receipts (ZeroClaw), Responses API reasoning preservation (NanoBot) |
| **Multi-channel parity (Slack/Telegram/Discord/Web)** | OpenClaw, NanoBot, PicoClaw, IronClaw, Moltis, ZeroClaw | Telegram inline buttons (Moltis), WhatsApp audio (NanoBot), DingTalk images (PicoClaw), Slack thread context (ZeroClaw), Feishu filenames (OpenClaw) |
| **Windows / cross-platform reliability** | Hermes, CoPaw, LobsterAI, NanoBot | EOL churn (Hermes), Computer Use permissions (CoPaw), NSIS survivor processes (LobsterAI), Termux tzdata (NanoBot) |
| **Enterprise / multi-tenant readiness** | OpenClaw, IronClaw, ZeroClaw, LobsterAI | Account-scoped isolation (LobsterAI), migration tooling (IronClaw), plugin config validation (ZeroClaw), private network fetch (OpenClaw) |

---

## 5. Differentiation Analysis

| Dimension | Framework/Operator-Grade | Desktop/App-Centric | Specialized/Niche |
|-----------|--------------------------|---------------------|-------------------|
| **Primary Target** | Self-hosted infra, multi-tenant, automation pipelines | End-users, local-first, chat UX | Embedded/edge (ZeptoClaw), enterprise SaaS (LobsterAI) |
| **Core Architecture** | Gateway + runtime separation (OpenClaw, IronClaw, ZeroClaw) | Monolithic app + local DB (NanoBot, CoPaw, PicoClaw, LobsterAI) | Minimal runtime (ZeptoClaw), channel-bot framework (Moltis) |
| **Agent Model** | Multi-agent orchestration, subagents, cron (OpenClaw, IronClaw) | Single-session, side-chat, Computer Use (CoPaw, NanoBot, LobsterAI) | Single-tool / skill-based (PicoClaw, ZeroClaw) |
| **Extension Mechanism** | Skills/plugins with typed config (ZeroClaw, IronClaw), MCP (all) | Skills from hub (NanoBot, CoPaw), OAuth connectors (PicoClaw) | Channel operators (Moltis), skills as containers (NanoClaw) |
| **Deployment Model** | Container/K8s, gated downloads, hermetic builds | Desktop binaries (Tauri/Electron), NSIS, AppImage | Static binary, minimal deps (ZeptoClaw) |
| **Maturity Signal** | RFCs for distributed runtime (OpenClaw #42026), architecture ratchets (IronClaw #6919) | Computer Use shipped (CoPaw #6424), SQLite migration (NanoBot #5173) | Security hardening only (ZeptoClaw), release attestation consolidation (ZeroClaw) |

**Key Insight**: The ecosystem is **converging on MCP + skill/container packaging** as the universal extension layer, but diverging on **state management** (SQLite vs libSQL vs JSONL vs WAL) and **multi-tenancy primitives** (account isolation vs shared-home vs namespace per channel).

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapidly Iterating (Pre-v1 / Major Refactor)** | **IronClaw**, **NanoBot**, **CoPaw**, **Hermes Agent** | Architecture restructuring (IronClaw Reborn), storage migration (NanoBot SQLite), flagship feature landing (CoPaw Computer Use), patch cadence (Hermes 10-day). High PR velocity, growing P1/P2 bug influx. |
| **Stabilizing at Scale (Post-v1 / Production Hardening)** | **OpenClaw**, **ZeroClaw**, **LobsterAI**, **PicoClaw** | Rolling/regular releases, critical bug fix focus, enterprise features, dependency hygiene. OpenClaw’s volume is unique; others show controlled velocity. |
| **Focused Hardening (Narrow Scope / Maintenance)** | **Moltis**, **NanoClaw**, **ZeptoClaw** | Moltis: observability + channel UX; NanoClaw: container/security; ZeptoClaw: single security PR stalled. Low issue inflow, maintainer-driven. |
| **Inactive** | **NullClaw** | No 24h activity. |

**Velocity Leaders**: OpenClaw (absolute), NanoBot (relative to size), CoPaw (feature + fix balance).  
**Stability Leaders**: LobsterAI (100% merge rate, security-first), PicoClaw (hygiene + feature), ZeroClaw (targeted v0.8.4 train).  
**Risk Clusters**: IronClaw (2 P0 security, 0 comments), NanoClaw (2 critical regressions, 0 fix PRs), CoPaw (2s perf regression, 8 high-sev), Moltis (CWE-306 unauthenticated).

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence Across Projects | Strategic Value |
|-------|--------------------------|-----------------|
| **Reliability > Features** | 6/11 projects have P0/P1 bugs around message loss, session corruption, silent failures. Fix PRs outnumber feature PRs in merged sets. | **Invest in delivery guarantees, idempotency, and observability first**—users will not adopt agents that silently lose work. |
| **Local-First + Desktop Convergence** | CoPaw Computer Use, NanoBot SQLite + Quick Chat, LobsterAI side-chat, PicoClaw Termux/DeltaChat, Hermes Windows fixes. | **Desktop is the new deployment target**—accessibility APIs, bundled runtimes, offline capability, and UX parity with cloud UIs are table stakes. |
| **MCP as Universal Skill Protocol** | Every active project references MCP servers, OAuth 2.1/PKCE (PicoClaw), hosted MCP registration (IronClaw), skill installation from hubs. | **Build skills as MCP servers**; the ecosystem is standardizing on this transport. OAuth-for-MCP dashboard UX is the next UX frontier. |
| **Supply-Chain Security Mandated** | Sigstore/attestation (NanoClaw, ZeroClaw), subprocess secret scrubbing (ZeptoClaw), webhook fail-closed (ZeroClaw), `dangerous-exec` scanner (OpenClaw). | **Assume compromised environments**—sign, attest, pin, and isolate. Container image hardening (NanoClaw 611MB→781MB layer optimization) is a competitive differentiator. |
| **Multi-Tenant Isolation as Product Requirement** | LobsterAI account-scoped auth/media/sharing, IronClaw shared-home + cross-user memory bugs, OpenClaw session routing per channel, ZeroClaw plugin instance validation. | **Design for multi-user from day one**—namespace isolation, per-account config, and migration tooling are now launch blockers. |
| **Observability-Native Architecture** | Moltis Langfuse/OTLP + reactions, Hermes memory TUI, ZeroClaw eval receipts, NanoBot Responses reasoning chain. | **Instrumentation is not optional**—structured traces, token usage, reasoning traces, and user feedback loops are expected in production agents. |
| **Windows/Linux Parity Investment** | Hermes EOL churn + CI migration, CoPaw bundled Python + Computer Use, LobsterAI NSIS fixes, NanoBot Termux tzdata. | **Cross-platform is a quality signal**—projects ignoring Windows/Termux/WSL lose the developer-desktop segment entirely. |

---

## Bottom Line for Decision-Makers

- **For platform builders**: OpenClaw, IronClaw, ZeroClaw represent the **operator-grade tier**—high complexity, high reliability investment, multi-tenant ready. OpenClaw leads on battle-tested scale; IronClaw on architectural clarity; ZeroClaw on supply-chain rigor.
- **For product teams shipping user-facing agents**: NanoBot, CoPaw, LobsterAI, PicoClaw offer **desktop/app maturity** with local-first UX, Computer Use, and channel parity. CoPaw’s Computer Use is the most advanced desktop automation; NanoBot’s SQLite + WebUI is the most polished chat stack.
- **For embedded/edge or minimal deployments**: ZeptoClaw (if PR #645 merges) and Moltis (channel-bot focus) are the only lightweight contenders.
- **Universal investment areas**: MCP server authoring, Sigstore attestation, structured

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-31

## 1. Today's Overview
NanoBot shows **very high development velocity** with 42 PRs updated and 5 issues active in the last 24 hours. The project is in a heavy refactoring and stabilization phase: 24 PRs were merged/closed today, covering CI hardening, agent routing fixes, WebUI UX improvements, and a major session storage migration to SQLite. No new release was cut, but the volume of merged fixes suggests a release candidate is imminent. Community-reported regressions (audio on WhatsApp, tool-call leakage, Termux timezone) are being addressed rapidly with same-day fix PRs.

## 2. Releases
**No new releases today.** The latest merged work (CI stabilization, agent routing, session SQLite migration, WebUI Quick Chat) is accumulating on `main` and likely targeting a near-term patch or minor release.

## 3. Project Progress — Key Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5145](https://github.com/HKUDS/nanobot/pull/5145) | CI/CD, perf | Stabilized CI: replaced flaky timeout test with readiness handshake; batched channel dependency installs. | **High** — reduces false failures, speeds up CI. |
| [#5136](https://github.com/HKUDS/nanobot/pull/5136) | Bug fix (P1) | Fixed routing of `finish_reason='length'` with tool calls + blank content → now goes to length recovery, not empty retry. | **High** — resolves agent stall on truncated tool calls. |
| [#5172](https://github.com/HKUDS/nanobot/pull/5172) | Feature | Preserves full Responses API output-item chain (encrypted reasoning, future item types) across turns; compacts context. | **High** — aligns with OpenAI ARC-AGI-3 capabilities; improves multi-turn reasoning fidelity. |
| [#5181](https://github.com/HKUDS/nanobot/pull/5181) / [#5182](https://github.com/HKUDS/nanobot/pull/5182) / [#5184](https://github.com/HKUDS/nanobot/pull/5184) | WebUI UX | Added persistent **Quick Chat** (fixed sidebar entry, reuses session/streaming stack), shared sidebar highlight, and opt-in **Temporary Chat** (in-memory only). | **Medium-High** — major UX upgrade for casual and ephemeral conversations. |
| [#5173](https://github.com/HKUDS/nanobot/pull/5173) | Architecture | Migrates session storage from JSONL → SQLite (`sessions.db`); transactional import on first run; JSONL kept as rollback backup. | **High** — enables scalable session listing, search, pruning; foundation for session management features. |
| [#5133](https://github.com/HKUDS/nanobot/issues/5133) (closed via #5136) | Bug fix | Misrouting of length-finish with tool calls fixed. | **High** — closes user-reported regression. |

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) — **No audio on WhatsApp** | 3 comments, open 3 days | Users rely on WhatsApp voice messaging; ffmpeg/neonize pipeline breaks on send. Blocking for voice-first workflows. |
| [#5185](https://github.com/HKUDS/nanobot/issues/5185) — **Tool-call code leaked in responses** | 1 comment, fresh | Model outputs raw tool-call JSON to user; indicates provider response parsing or streaming handler regression. |
| [#5187](https://github.com/HKUDS/nanobot/issues/5187) — **Termux timezone failure** | 0 comments, fresh | `zoneinfo` missing on minimal Linux; blocks Termux users (mobile/edge deployments). Fix PR [#5189](https://github.com/HKUDS/nanobot/pull/5189) opened today. |
| [#5133](https://github.com/HKUDS/nanobot/issues/5133) — **Length-finish misrouting** | Closed today, fix merged | Critical agent-loop bug; affected users on long tool-call responses. |

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#5185](https://github.com/HKUDS/nanobot/issues/5185) Tool-call JSON shown to user | Open | None yet |
| **High** | [#5149](https://github.com/HKUDS/nanobot/issues/5149) WhatsApp audio send broken (ffmpeg warning) | Open | None yet |
| **High** | [#5187](https://github.com/HKUDS/nanobot/issues/5187) Termux crash: missing `tzdata` | Open | [#5189](https://github.com/HKUDS/nanobot/pull/5189) (opened today, installs `tzdata` on all platforms) |
| **Medium** | [#5156](https://github.com/HKUDS/nanobot/pull/5156) Telegram polling silently stalls after network blip | Open (PR) | PR #5156 adds recovery logic |
| **Medium** | [#4819](https://github.com/HKUDS/nanobot/pull/4819) Consolidation locks lost via `WeakValueDictionary` GC | Open (PR) | PR #4819 replaces with plain `dict` |
| **Low** | [#3106](https://github.com/HKUDS/nanobot/issues/3106) Scheduled tasks fail with GPT (model-specific) | Open, stale | No fix; workaround: use other models |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Session export/import/search/stats** | [#1565](https://github.com/HKUDS/nanobot/pull/1565) (open, conflict) | **High** — SQLite migration (#5173) unblocks this; UX demand clear. |
| **Skill status CLI** | [#1319](https://github.com/HKUDS/nanobot/pull/1319) (open, conflict) | **Medium** — reduces “skill unavailable” support burden. |
| **Telegram custom Bot API base URL** | [#4919](https://github.com/HKUDS/nanobot/pull/4919) (open) | **High** — enterprise/self-hosted demand; implements #4702. |
| **Subagent model presets (spawn)** | [#4291](https://github.com/HKUDS/nanobot/pull/4291) (open) | **Medium** — advanced agent orchestration; needs preset allowlist. |
| **Heartbeat shared session config** | [#4551](https://github.com/HKUDS/nanobot/pull/4551) (open) | **Medium** — fixes #1899; useful for multi-bot setups. |
| **Codex duplicate reasoning dedup** | [#4021](https://github.com/HKUDS/nanobot/pull/4021) (open) | **Medium** — improves Codex reliability; AI-assisted fix. |

## 7. User Feedback Summary
- **Pain points**: WhatsApp audio broken (voice users), tool-call leakage (trust/UX), Termux incompatibility (mobile devs), silent Telegram polling death (production reliability).
- **Use cases**: Scheduled tasks (cron), multi-session WebUI (Quick Chat, Temporary Chat), skill installation from ClawHub, enterprise Telegram gateways, mobile/Termux deployment.
- **Satisfaction**: High engagement on WebUI UX PRs (#5181, #5184) suggests users value polished chat experience. Frustration on audio/Tool-call bugs is acute but fix velocity is strong.
- **Workarounds reported**: Switch models for cron (#3106), avoid WhatsApp audio, avoid Termux.

## 8. Backlog Watch — Stale/Important Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1565](https://github.com/HKUDS/nanobot/pull/1565) Session export/import/search/stats | 5 months (conflict) | High user demand; blocked by merge conflicts — now unblocked by SQLite migration (#5173). |
| [#1319](https://github.com/HKUDS/nanobot/pull/1319) Skill status CLI | 5 months (conflict) | Reduces support load; simple diagnostic command. |
| [#1656](https://github.com/HKUDS/nanobot/pull/1656) Validation: handle None in string schema | 5 months (conflict) | Prevents `TypeError` on None strings; low-risk fix. |
| [#4819](https://github.com/HKUDS/nanobot/pull/4819) Consolidation lock GC race | 3 weeks | Can cause concurrent consolidation corruption; fix is small (dict swap). |
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) Heartbeat isolated_session config | 1 month | Fixes #1899; enables shared-session deployments. |
| [#3106](https://github.com/HKUDS/nanobot/issues/3106) GPT scheduled task failure | 3.5 months | Model-specific bug; needs root-cause analysis or provider workaround. |

---

**Health Indicators**: 🟢 **Strong** — high merge rate (24/42 PRs), critical bugs fixed same-day, architectural migration (SQLite) landed, WebUI UX shipping.  
**Risk Areas**: WhatsApp audio regression (no fix PR yet), tool-call leakage (new, no fix), Termux (fix PR opened today).  
**Next Release Likely Includes**: SQLite sessions, Quick/Temporary Chat, CI fixes, length-finish routing, Responses reasoning preservation, timezone fix for Termux.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-31

## 1. Today's Overview

Hermes Agent remains in **high-velocity development** with 50 PRs and 8 issues updated in the last 24 hours. The project just shipped **v0.19.1 (v2026.7.30)**, a patch release rolling up ~1,000+ PRs since v0.19.0 into a stable tagged build for Docker images and fresh installs. Activity is heavily weighted toward **bug fixes, compatibility hardening, and plugin/desktop polish** rather than new features. Three PRs were merged/closed today, while 47 remain open—indicating a healthy but growing review backlog. Notable pain points cluster around **memory pollution, credential handling, Windows compatibility, and provider-specific auth/transport quirks**.

---

## 2. Releases

### v0.19.1 (v2026.7.30) — July 30, 2026
**Type:** Patch / roll-up release  
**Scope:** Aggregates ~1,000+ PRs merged since v0.19.0 (v2026.7.20) into a single stable tag for downstream consumers (Docker, hosted deployments, fresh installs).  
**Breaking Changes:** None explicitly noted; intended as a non-breaking stabilization drop.  
**Migration Notes:** Users on v0.19.0 can pull the new tag; no config/schema migrations required. Docker images and binary bundles have been refreshed.  
**Release URL:** [NousResearch/hermes-agent Releases](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.30)

---

## 3. Project Progress (Merged/Closed Today)

| PR | Title | Area | Status |
|----|-------|------|--------|
| [#75176](https://github.com/NousResearch/hermes-agent/pull/75176) | `fix(streaming): recover truncated tool args when finish_reason is set` | streaming, tools (write_file, terminal) | **Closed** (duplicate of #75179) |
| [#75179](https://github.com/NousResearch/hermes-agent/pull/75179) | `fix(streaming): recover truncated tool args when finish_reason is set (#74798)` | streaming, tools | **Open** (active fix) |
| [#75180](https://github.com/NousResearch/hermes-agent/pull/75180) | `The placeholder comes back when you clear the composer` | desktop, composer UX | **Open** |

**Summary:** The only merged/closed item today is a duplicate streaming fix (#75176 closed in favor of #75179). The streaming fix addresses a regression where large tool arguments (write_file, terminal) were silently dropped when a provider returned a `finish_reason` alongside truncation. The composer placeholder fix restores UX parity after select-all + cut/delete.

---

## 4. Community Hot Topics (Most Active Items)

| Item | Type | Comments/Reactions | Core Need |
|------|------|-------------------|-----------|
| [#66654](https://github.com/NousResearch/hermes-agent/issues/66654) | Issue | 3 comments, 0 👍 | **Memory system overhaul**: Users report persistent "memory pollution" (inaccurate/contradictory facts written by the model) with no timestamps, priority, or automated cleanup. High-impact for long-running agents. |
| [#75181](https://github.com/NousResearch/hermes-agent/issues/75181) | Issue | 0 comments | **China connectivity**: `models.dev` unreachable in mainland China blocks desktop model picker for 15+ seconds on cold start. Needs fallback or async loading. |
| [#75173](https://github.com/NousResearch/hermes-agent/issues/75173) | Issue | 0 comments | **Config regression**: Desktop model picker silently clears `model.api_key`/`base_url` in `config.yaml` for *all* custom-endpoint providers, breaking connectivity. P2 severity. |
| [#74645](https://github.com/NousResearch/hermes-agent/pull/74645) | PR | — | **Plugin extensibility**: Adds four fail-open hooks so user plugins (`~/.hermes/plugins/`) can override/veto core behaviors without patching. Addresses multiple blocked PRs. |
| [#72591](https://github.com/NousResearch/hermes-agent/pull/72591) | PR | — | **Provider compatibility**: Strips empty/null `tool_calls` on assistant messages to satisfy strict OpenAI-compatible providers (DeepSeek, Qwen, onerouter) that reject them with HTTP 400. |

**Underlying Themes:**  
- **Reliability over features**: Majority of heat is on data integrity (memory, config, streaming) and cross-provider compatibility.  
- **Global accessibility**: China connectivity issue (#75181) signals need for resilient, region-aware fallback chains.  
- **Extensibility demand**: Plugin hooks (#74645) reflect community desire to fix bugs without forking core.

---

## 5. Bugs & Stability (Reported Today, Ranked by Severity)

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P2** | [#75173](https://github.com/NousResearch/hermes-agent/issues/75173) | Desktop model picker clears `api_key`/`base_url` for *all* custom-endpoint providers on model switch — silent connectivity loss. | No |
| **P2** | [#75174](https://github.com/NousResearch/hermes-agent/issues/75174) | Credential pool rotates to single entry even when failed key matches no pool entry — false recovery, potential auth loop. | No |
| **P2** | [#75175](https://github.com/NousResearch/hermes-agent/issues/75175) | `_normalize_managed_eol` fails to clear CRLF churn on Windows; 5/9 tests in `test_update_eol_churn.py` fail (merged PR #74487 regresses). | No |
| **P2** | [#75153](https://github.com/NousResearch/hermes-agent/issues/75153) | WSL managed update leaves SQLite 3.50.4; warning claims `hermes update` can repair but WAL DBs lack guided remediation. | No |
| **P2** | [#75137](https://github.com/NousResearch/hermes-agent/pull/75137) | `.env` loaded with `interpolate=True` mangles `${VAR}` values (e.g., credentials with `$`), breaking round-trip. **PR open** | **Yes** (#75137) |
| **P3** | [#66654](https://github.com/NousResearch/hermes-agent/issues/66654) | Memory pollution: no timestamps, priority, or auto-cleanup for stale/incorrect memories. | No |
| **P3** | [#75181](https://github.com/NousResearch/hermes-agent/issues/75181) | `models.dev` unreachable in China blocks desktop model picker 15s+ on cold start. | No |
| **P3** | [#75167](https://github.com/NousResearch/hermes-agent/issues/75167) | `codex_app_server` misclassifies ambient plugin 401 stderr as primary auth failure. | No |

**Stability Note:** 6 P2/P3 bugs filed *today* alone—indicates either a recent regression wave or improved detection. The Windows EOL churn (#75175) and config clearing (#75173) are user-visible regressions from recent merges.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Holographic memory TUI + `/mem` slash command** | [#74900](https://github.com/NousResearch/hermes-agent/pull/74900) (PR open) | **High** — Already implemented, adds CLI/tree inspection for fact_store; aligns with memory pollution fix demand. |
| **Plugin extension hooks (4 new)** | [#74645](https://github.com/NousResearch/hermes-agent/pull/74645) (PR open) | **High** — Unblocks multiple community fixes; fail-open design minimizes risk. |
| **Chinese i18n for all 90 slash commands** | [#72390](https://github.com/NousResearch/hermes-agent/pull/72390) (PR open) | **Medium** — Localization polish; desktop-focused. |
| **Discord `<details>/<summary>` expansion** | [#54804](https://github.com/NousResearch/hermes-agent/pull/54804) (PR open, old) | **Low** — Platform-specific, moderate blast radius; likely deferred. |
| **Session event archive (JSONL) for state.db decoupling** | [#34750](https://github.com/NousResearch/hermes-agent/pull/34750) (PR open, 2mo) | **Low** — Architectural, long-horizon; Phase 0 plan only. |

**Prediction:** Next patch (v0.19.2) will likely ship the memory TUI (#74900), plugin hooks (#74645), and the `.env` interpolation fix (#75137). The memory pollution fix (#66654) is deeper and may slip to v0.20.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Memory unreliability** | #66654: "模型记录错误/不准确的记忆…污染记忆一旦写入就会一直存在" | High — undermines trust in long-running agents; no automated remediation. |
| **Desktop config loss on model switch** | #75173: "silently cleared to empty strings…model not connected" | High — breaks custom providers (Ollama, local, enterprise proxies) silently. |
| **China cold-start latency** | #75181: "15+ seconds on every cold start" | Medium — blocks adoption in CN; no fallback/async path. |
| **WSL/SQLite version mismatch** | #75153: "warning says hermes update can repair it; existing WAL DBs lack guided remediation" | Medium — WSL users hit confusing dead end. |
| **Credential mangling in `.env`** | #75137: `${VAR}` rewritten on load, breaking secrets with `$` | Medium — security-adjacent; affects any secret containing `${...}`. |
| **Streaming tool truncation silent failure** | #75179/#74798: large `write_file`/`terminal` args dropped when `finish_reason` set | Medium — data loss in coding/terminal workflows. |

**Positive Signals:** Active plugin ecosystem (hooks PR), memory introspection tooling landing, and rapid patch releases show maintainer responsiveness.

---

## 8. Backlog Watch (Stale but Important Items Needing Maintainer Attention)

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#66654](https://github.com/NousResearch/hermes-agent/issues/66654) | 13 days | Foundational memory system flaw; blocks trust in agent autonomy. | Assign owner; design timestamp/priority/TTL schema; link to #74900 TUI for inspection. |
| [#34750](https://github.com/NousResearch/hermes-agent/pull/34750) | 63 days | Session event archive — prerequisite for durable replay, multi-device sync, audit. | Review Phase 0 plan; decide if additive JSONL lands in v0.20 or stays experimental. |
| [#54804](https://github.com/NousResearch/hermes-agent/pull/54804) | 32 days | Discord HTML collapsibles — improves readability for long tool outputs. | Low risk; merge if tests pass or assign to platform maintainer. |
| [#66520](https://github.com/NousResearch/hermes-agent/pull/66520) | 14 days | CI migration to GKE self-hosted runners (ARC) — reduces CI cost/flakiness. | Infra-critical; needs review from DevOps/Platform team. |
| [#74300](https://github.com/NousResearch/hermes-agent/pull/74300) | 2 days | Windows test suite fixes (50+ failures) — unblocks Windows CI. | High priority for cross-platform claim; assign to Windows compat owner. |

---

## Project Health Snapshot

| Metric | Status |
|--------|--------|
| **Release Cadence** | ~10-day patch cycle (v0.19.0 → v0.19.1) |
| **PR Throughput** | 50 updated/24h, 3 merged — review bottleneck forming |
| **Bug Influx** | 8 new issues/24h (6 P2/P3) — elevated but triaged |
| **Community Engagement** | Moderate (few comments, but deep technical reports) |
| **Platform Coverage** | Windows gaps visible (#74300, #75175); China connectivity gap (#75181) |
| **Architectural Debt** | Memory system (#66654), session archive (#34750), CI migration (#66520) |

**Bottom Line:** Hermes Agent is shipping fast and hardening aggressively, but the **memory subsystem** and **cross-platform/region resilience** are the two highest-leverage investment areas for the next minor version. The plugin hooks PR (#74645) is a force-multiplier — merging it will unlock community-driven fixes for many of today's P2 bugs.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-31

## 1. Today's Overview
PicoClaw shows **high maintenance velocity** with 24 total items updated in the last 24 hours (7 issues, 17 PRs). The project is in active feature development and dependency hygiene mode — no new release today, but five PRs were merged/closed including dependency upgrades and a Bedrock prompt-caching feature. Open PRs (12) focus on provider updates, channel improvements (DeltaChat, DingTalk), core fixes (SeaHorse tool-call leakage), and UX enhancements (configurable model fallback chain). Issue activity reveals strong community interest in OAuth 2.1/PKCE for MCP servers, session management from chat channels, and robustness around long-message handling and hook execution.

## 2. Releases
**No new releases** published in the last 24 hours. The latest version remains `0.3.1` (git: `2cf030d2`).

## 3. Project Progress — Merged / Closed PRs Today
| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#3163](https://github.com/sipeed/picoclaw/pull/3163) | `feat(bedrock): leverage Converse prompt caching via cache points` | **Feature** | Reduces Bedrock input costs ~90% for cached prefixes; writes at ~1.25×. Enables explicit cache points in `system`, `tools`, `messages`. |
| [#3290](https://github.com/sipeed/picoclaw/pull/3290) | `build(deps): bump aws-sdk-go-v2/service/bedrockruntime 1.53.3 → 1.56.0` | **Dependency** | Required for prompt-caching API above. |
| [#3288](https://github.com/sipeed/picoclaw/pull/3288) | `build(deps): bump aws-sdk-go-v2/service/bedrockruntime 1.53.3 → 1.56.0` (duplicate) | **Dependency** | Closed as duplicate of #3290. |
| [#3263](https://github.com/sipeed/picoclaw/pull/3263) | `build(deps): bump actions/setup-node 6 → 7` | **CI** | GitHub Actions Node.js setup v7; may require workflow adjustments. |
| [#3262](https://github.com/sipeed/picoclaw/pull/3262) | `build(deps): bump actions/setup-go 6 → 7` | **CI** | Go toolchain setup v7; migrates to new action syntax. |

**Net progress**: Bedrock prompt caching landed (cost optimization for heavy users), CI modernized, and AWS SDK aligned. No breaking changes in merged PRs.

## 4. Community Hot Topics — Most Active Discussions
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#2546](https://github.com/sipeed/picoclaw/issues/2546) | Issue (closed) | 6 | 0 | **OAuth 2.1 + PKCE for MCP servers via dashboard** — non-technical "add connector" UX like Claude.ai. Closed but reopened as [#3302](https://github.com/sipeed/picoclaw/issues/3302) (0 comments). |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Issue (open) | 2 | 0 | **IRCv3 long-message reassembly** — PicoClaw treats split fragments as separate messages, breaking context. |
| [#3258](https://github.com/sipeed/picoclaw/issues/3258) | Bug (closed) | 2 | 0 | **Process hook `before_tool` decision/args deserialization defect** — hook modifications discarded. |
| [#3279](https://github.com/sipeed/picoclaw/pull/3279) | PR (open) | — | 0 | **SeaHorse tool-call format leakage into LLM summaries** — same root cause as #3258 but in summarization path. |
| [#3308](https://github.com/sipeed/picoclaw/issues/3308) | Issue (open) | 0 | 0 | **Concurrency hazards, goroutine leaks, memory/speed optimizations** in SeaHorse, Channel Manager, Hooks — detailed code-review issue. |

**Signal**: OAuth-for-MCP is the top *user-facing* ask (two issues, one closed but re-filed). The *technical* hotspot is **hook/SeaHorse serialization correctness** — two bugs + one PR fixing leakage, plus a sweeping concurrency audit request.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue / PR | Summary | Fix PR? |
|----------|------------|---------|---------|
| **High** | [#3308](https://github.com/sipeed/picoclaw/issues/3308) | Concurrency hazards, goroutine leaks, memory/speed issues in core components (SeaHorse, Channel Manager, Hooks). No fix yet. | ❌ |
| **High** | [#3258](https://github.com/sipeed/picoclaw/issues/3258) | `before_tool` hook `decision` field discarded; `args` misparsed due to deserialization defect. | ❌ (closed stale, no fix merged) |
| **Medium** | [#3279](https://github.com/sipeed/picoclaw/pull/3279) | Tool-call format leaks into LLM summaries via `partsToReadableContent`. | ✅ PR open, unmerged |
| **Medium** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | IRCv3 long messages (>512 B) split by clients; PicoClaw treats fragments as separate messages. | ❌ |
| **Low** | [#3283](https://github.com/sipeed/picoclaw/pull/3283) | DingTalk inbound image message support (feature + graceful fallback). | ✅ PR open, unmerged |

**Watch**: #3308 is a systemic stability audit — if validated, it could require coordinated refactors across multiple packages.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Release | Rationale |
|---------|--------|-----------------------------|-----------|
| **OAuth 2.1 + PKCE for MCP servers (dashboard "add connector")** | [#2546](https://github.com/sipeed/picoclaw/issues/2546), [#3302](https://github.com/sipeed/picoclaw/issues/3302) | 🟡 Medium | High user demand, but closed stale; re-filed with no discussion. Needs design decision. |
| **Session list/switch/delete from Telegram (and other chat channels)** | [#3307](https://github.com/sipeed/picoclaw/issues/3307) | 🟢 High | Parity with Web UI; clear scope; no open PR yet. |
| **Stateless / no-history mode for gateway sessions** | [#3257](https://github.com/sipeed/picoclaw/issues/3257) | 🟡 Medium | Closed stale; gateway users need CLI-like ephemeral sessions. |
| **Configurable default model fallback chain (Web UI + API)** | [#3200](https://github.com/sipeed/picoclaw/pull/3200) | 🟢 High | PR open, comprehensive (UI + backend), aligns with multi-provider strategy. |
| **DashScope TTS + WeChat audio sending** | [#3270](https://github.com/sipeed/picoclaw/pull/3270) | 🟢 High | PR open, complete provider + channel integration. |
| **DingTalk inbound image support** | [#3283](https://github.com/sipeed/picoclaw/pull/3283) | 🟢 High | PR open, Chinese enterprise channel parity. |
| **IRCv3 long-message reassembly** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | 🔴 Low | Niche protocol; no PR. |
| **Provider model list refresh (GPT-5.6, Claude 4.x, etc.)** | [#3271](https://github.com/sipeed/picoclaw/pull/3271) | 🟢 High | PR open, routine maintenance. |

**Predicted next-version themes**: Multi-provider model management (fallback chain, updated IDs), Chinese channel parity (WeChat audio, DingTalk images), gateway/Telegram session UX.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | User Segment |
|------------|----------|--------------|
| **Cannot add OAuth-protected MCP servers without CLI/Node.js** | [#2546](https://github.com/sipeed/picoclaw/issues/2546), [#3302](https://github.com/sipeed/picoclaw/issues/3302) | Non-technical users, cloud-VM deployers |
| **Hook modifications silently ignored** | [#3258](https://github.com/sipeed/picoclaw/issues/3258) | Power users writing `before_tool` hooks (Python) |
| **Tool-call noise pollutes LLM summaries** | [#3279](https://github.com/sipeed/picoclaw/pull/3279) | All users relying on conversation summaries |
| **IRC messages fragmented** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | IRC channel users |
| **No session management from chat apps** | [#3307](https://github.com/sipeed/picoclaw/issues/3307) | Telegram (primary), other chat-channel users |
| **Gateway sessions lack ephemeral/stateless mode** | [#3257](https://github.com/sipeed/picoclaw/issues/3257) | CLI/gateway automation users |
| **Potential goroutine leaks / memory pressure** | [#3308](https://github.com/sipeed/picoclaw/issues/3308) | High-throughput / long-running deployments |

**Satisfaction signals**: Users actively file detailed bugs with reproduction steps (e.g., #3258 includes hook code, env, model). The re-filing of OAuth MCP (#3302 after #2546 closed) indicates **strong unmet need**. No explicit praise/complaints in reactions (all 👍: 0).

## 8. Backlog Watch — Stale / Unanswered Items Needing Attention
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#2222](https://github.com/sipeed/picoclaw/pull/2222) *not in data but referenced by pattern* | — | — | *Placeholder: check for PRs >30 days with no review* |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 28 days (created 2026-07-03) | Open, stale | **DeltaChat refactor (-200 LOC)** — drops legacy, hardcoded relays, password config. Large cleanup, needs review. |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | 30 days (created 2026-07-01) | Open | **Configurable model fallback chain** — UX + API + persistence. High value, pending review. |
| [#3163](https://github.com/sipeed/picoclaw/pull/3163) | 38 days (created 2026-06-23) | **Closed today** | Bedrock prompt caching — *was* stale, now merged. Good precedent. |
| [#2546](https://github.com/sipeed/picoclaw/issues/2546) | 106 days (created 2026-04-16) | Closed stale | OAuth MCP — re-filed as #3302. Maintainer decision needed: accept or close with rationale. |
| [#3257](https://github.com/sipeed/picoclaw/issues/3257) | 16 days | Closed stale | Stateless gateway mode — legitimate CLI parity gap. |
| [#3258](https://github.com/sipeed/picoclaw/issues/3258) | 16 days | Closed stale | Hook deserialization bug — closed without fix. **Risk: regression**. |

**Action items for maintainers**:
1. **Triage #3308** (concurrency audit) — assign or label for investigation.
2. **Review #3200** (fallback chain) and **#3222** (DeltaChat cleanup) — both high-value, month-old PRs.
3. **Decide on OAuth MCP** — close #3302 with design doc or accept; avoid third duplicate.
4. **Re-open #3258** or link to #3279 — same root cause (deserialization); fix should cover both paths.
5. **Label #3287** (IRC) as `help-wanted`/`good-first-issue` if not priority.

---

**Project Health**: 🟢 **Active & Healthy** — steady PR throughput, dependency hygiene, feature work across providers/channels. **Risk areas**: hook/SeaHorse serialization correctness (#3258, #3279, #3308) and stale high-value PRs (#3200, #3222). **Next milestone** likely focuses on model-management UX, Chinese channel parity, and gateway/Telegram session parity.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-31

---

## 1. Today's Overview

NanoClaw shows **high internal velocity** with 15 PRs updated and 2 new issues filed in the last 24 hours, but **zero releases** — indicating a heavy development/refactoring phase rather than a shipping cycle. Four PRs were merged/closed today, all from core-team members, focusing on container hardening, image verification, and opencode compatibility. Two critical bugs surfaced: inbound message operations failing due to ID-suffix stripping (Slack `message_not_found`) and registry branch drift breaking provider install gates. The project is actively tightening supply-chain security (Sigstore attestation pinning, Vercel CLI opt-in) and fixing long-standing skill-materialization symlink hazards. Overall health: **active core maintenance, but user-facing regressions accumulating**.

---

## 2. Releases

**No new releases** in the last 24 hours. The latest published version remains unchanged.

---

## 3. Project Progress — Merged / Closed PRs Today

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3160](https://github.com/nanocoai/nanoclaw/pull/3160) | **Core infra / Security** | Repin agent image to `hardened-2026-07-30` (611 MB, 8 layers vs 781 MB, 18 layers) — largest layer dropped from 39% → 27%. | **High**: Smaller attack surface, faster pulls, layer-structure optimization for gated downloads. |
| [#3159](https://github.com/nanocoai/nanoclaw/pull/3159) | **Core infra / DX** | Make Vercel CLI opt-in via `/add-vercel` skill instead of baked into every image. | **Medium**: Removes default credential surface; reduces image bloat for non-Vercel users. |
| [#3122](https://github.com/nanocoai/nanoclaw/pull/3122) | **Integration / Fix** | opencode: main compatibility, custom-endpoint transport, memory parity. | **Medium**: Unblocks opencode adapter for current upstream; adds transport flexibility. |
| [#2682](https://github.com/nanocoai/nanoclaw/pull/2682) | **Tooling / Fix** | `update-skills`: skip v1-only skill branches (version `1.*`) during sync. | **Low-Medium**: Prevents wasted CI cycles & confusing upgrade offers for legacy skills. |

> **Net effect**: Container image hardened & slimmed; supply-chain defaults tightened; two integration adapters (opencode, skills sync) made robust.

---

## 4. Community Hot Topics — Most Active Items

| Item | Activity | Core Need |
|------|----------|-----------|
| [#3153](https://github.com/nanocoai/nanoclaw/issues/3153) — `add_reaction` / `edit_message` fail on inbound messages (agent-group suffix not stripped) | 1 comment, 0 👍, **created & updated today** | **Critical regression**: Slack inbound messages become unactionable — every reaction/edit retries 3× then marks `failed`. Blocks any bot that must react or edit inbound traffic. |
| [#3155](https://github.com/nanocoai/nanoclaw/issues/3155) — Registry branches drifted from `main`; provider payloads fail own install gates | 0 comments, 0 👍, **created today** | **Build/release pipeline break**: `/add-codex` fails at skill's own typecheck step. Indicates branch-sync automation or release gating is misaligned. |
| [#3119](https://github.com/nanocoai/nanoclaw/pull/3119) — Reconcile untracked orphan containers (duplicate per-group spawns) | Updated today, open since 07-23 | **Operational stability**: 3 concurrent containers for one agent group observed on 5-day uptime host. Root cause: `*/15` scheduler race. |
| [#3156](https://github.com/nanocoai/nanoclaw/pull/3156) — Carry channel attachments to providers as structured parts | Opened today, core-team | **Provider parity**: Attachments currently lost or malformed when forwarded to LLM providers. Needed for multimodal workflows. |

> **Pattern**: Core-team PRs dominate merged work; community-reported bugs (#3153, #3155) are fresh and unaddressed — **triage latency risk**.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue / PR | Status | Fix PR? |
|----------|------------|--------|---------|
| **🔴 Critical** | [#3153](https://github.com/nanocoai/nanoclaw/issues/3153) — Inbound `add_reaction` / `edit_message` always fail (Slack `message_not_found`) | Open, 0 comments | **No** |
| **🟠 High** | [#3155](https://github.com/nanocoai/nanoclaw/issues/3155) — Registry branch drift breaks provider install gates (`/add-codex` fails typecheck) | Open, 0 comments | **No** |
| **🟠 High** | [#3119](https://github.com/nanocoai/nanoclaw/pull/3119) — Orphan containers accumulate → duplicate spawns per agent group | Open PR, **fix in review** | **Yes (#3119)** |
| **🟡 Medium** | [#3157](https://github.com/nanocoai/nanoclaw/pull/3157) — `materializeTemplateSkills` follows dangling symlinks to container paths (`/app/skills/...`) | Open PR, **fix in review** | **Yes (#3157)** |
| **🟡 Medium** | [#3124](https://github.com/nanocoai/nanoclaw/pull/3124) — Unavailable MCP servers not reported (silent failure) | Open PR, **fix in review** | **Yes (#3124)** |

> **Note**: Three fix PRs (#3119, #3157, #3124) are open and address medium-severity bugs; **zero fix PRs for the two critical issues filed today**.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Structured attachment parts for providers** | [#3156](https://github.com/nanocoai/nanoclaw/pull/3156) (core-team PR) | **High** — core-team authored, follows guidelines, unblocks multimodal. |
| **Scheduled tasks get current run time (`process_after` + weekday)** | [#3154](https://github.com/nanocoai/nanoclaw/pull/3154) (core-team PR) | **High** — small, well-scoped, improves cron-like reliability. |
| **Sigstore publisher identity pin + per-arch attestation check** | [#3158](https://github.com/nanocoai/nanoclaw/pull/3158) (core-team PR) | **High** — closes verification gate skipped since #3150; enables auto-merge. |
| **Vercel CLI opt-in skill** | [#3159](https://github.com/nanocoai/nanoclaw/pull/3159) (merged) | **Done** — pattern likely to repeat for other heavy CLIs. |
| **Signal group typing, outbound reactions, quote-reply** | [#2685](https://github.com/nanocoai/nanoclaw/pull/2685) (open since 06-04) | **Medium** — docs-only PR stalled; needs implementation PR. |
| **GitHub polling mode (no inbound port)** | [#2301](https://github.com/nanocoai/nanoclaw/pull/2301) (open since 05-06) | **Medium** — high value for NAT/firewall users; large PR, needs review bandwidth. |
| **Local Whisper transcription skill (GPU/CPU backends)** | [#2317](https://github.com/nanocoai/nanoclaw/pull/2317) (open since 05-07) | **Low-Medium** — niche, but complete; waiting on skill-review queue. |
| **AWS credential proxy daemon (paws4claws) skill** | [#2634](https://github.com/nanocoai/nanoclaw/pull/2634) (open since 05-28) | **Low** — enterprise-specific; mount-from-outside pattern is novel. |

> **Roadmap read**: Next version will likely ship **supply-chain hardening (Sigstore, image pins)**, **provider attachment parity**, **scheduled-task time fidelity**, and **container orphan reconciliation**. Community-facing features (Signal, GitHub polling, Whisper) remain backlogged.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Inbound message mutations broken** | #3153: "every attempt comes back `message_not_found`, retries 3× and ends as `failed`" | Any bot using Slack reactions/edits on inbound messages (moderation, threading, UX). |
| **Skill install self-tests fail** | #3155: `/add-codex` fails at skill's own build step on `main` | Operators adding Codex provider; suggests CI/release drift. |
| **Orphan containers spawn duplicates** | #3119: "one agent group reached **3 concurrent containers** on 5d uptime" | Long-running hosts; wastes resources, may cause session DB contention. |
| **Symlink traversal breaks skill materialization** | #3157: `fs.statSync` follows container paths (`/app/skills/...`) | Users with shared-skill symlinks (`.claude-shared/skills`) — likely multi-tenant setups. |
| **Silent MCP server unavailability** | #3124: no reporting when MCP servers down | Users relying on MCP tools; fail-open behavior masks outages. |
| **Image bloat & default credential surface** | #3159 merged: Vercel CLI in every image | All users; fixed by opt-in skill pattern. |

> **Satisfaction signal**: No positive reactions (👍) on new issues; core-team PRs move fast, community PRs linger (months). **Trust in release quality** may be eroding if critical regressions ship.

---

## 8. Backlog Watch — Stalled Items Needing Maintainer Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#2685](https://github.com/nanocoai/nanoclaw/pull/2685) — Signal group typing, outbound reactions, quote-reply docs | 57 days | Docs-only but reflects unimplemented features; Signal users blocked. | **Triage**: split into impl PRs or close if deprioritized. |
| [#2301](https://github.com/nanocoai/nanoclaw/pull/2301) — GitHub polling mode, secret merge | 86 days | High-value for air-gapped/NAT users; large but complete. | **Assign reviewer**; consider breaking into smaller PRs. |
| [#2317](https://github.com/nanocoai/nanoclaw/pull/2317) — `/add-voice-transcription-free-whisper` skill | 85 days | Complete skill with dual backend; expands voice accessibility. | **Skill-review queue** — needs maintainer pass. |
| [#2634](https://github.com/nanocoai/nanoclaw/pull/2634) — `/add-paws4claws` AWS credential proxy | 64 days | Novel mount-from-outside pattern; enterprise AWS use case. | **Evaluate pattern** for adoption or document as experimental. |
| [#2537](https://github.com/nanocoai/nanoclaw/pull/2537) — Pre-commit hooks (prettier, eslint, typecheck, vitest) | 74 days | DX improvement; reduces CI failures from formatting. | **Low risk** — merge to raise contributor bar. |
| [#3153](https://github.com/nanocoai/nanoclaw/issues/3153) — Inbound reaction/edit failure | 1 day | **Critical regression**; no fix PR yet. | **Urgent**: assign core-team, write regression test, ship hotfix. |
| [#3155](https://github.com/nanocoai/nanoclaw/issues/3155) — Registry branch drift | 1 day | **Release pipeline broken**; blocks provider installs. | **Urgent**: audit branch-sync automation, realign gates. |

> **Backlog health**: 6 PRs > 60 days open — **review capacity bottleneck**. Two **day-old critical bugs** have zero fix movement. Recommend **triage sprint** this week.

---

## TL;DR

- **Shipping**: 0 releases; 4 core PRs merged (image hardening, Vercel opt-in, opencode fix, v1-skill skip).
- **Burning**: 2 critical bugs filed today (#3153 Slack inbound ops, #3155 registry drift) — **no fix PRs yet**.
- **Fixing**: 3 medium-bug PRs open (#3119 orphans, #3157 symlinks, #3124 MCP reporting).
- **Hardening**: Sigstore publisher pin (#3158), scheduled-task time (#3154), attachment parts (#3156) — all core-team, likely next release.
- **Stalled**: 6 community PRs > 60 days; review bandwidth is the constraint.
- **Action items**: (1) Hotfix #3153/#3155, (2) Merge orphan/symlink/MCP fix PRs, (3) Clear 2-3 oldest community PRs, (4) Ship hardened image + provider attachments + Sigstore gate together.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-31

## 1. Today's Overview

IronClaw shows **high velocity** with 71 total updates (21 issues, 50 PRs) in the last 24 hours, signaling an active pre-launch stabilization phase. The project is executing a major **architecture restructuring program** ("Reborn") across 10+ coordinated workstreams (#6919–#6927), while simultaneously hardening **skill discovery/activation** (#6565, #6941), **error recoverability** (#6284), and **hermetic testing** (#6524). Critical **multi-user security bugs** have surfaced (#6866, #6900) requiring immediate attention. No new releases were cut today, but 24 PRs were merged/closed, indicating steady integration flow.

---

## 2. Releases

**No new releases today.** The last release activity was tracked in PR #5598 (opened 2026-07-03, updated today), which documents breaking changes in `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0), plus compatible updates to `ironclaw_safety`. Teams should review the [breaking change notes](https://github.com/nearai/ironclaw/pull/5598) before upgrading.

---

## 3. Project Progress — Merged/Closed PRs Today (24)

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#6935](https://github.com/nearai/ironclaw/pull/6935) | fix(libsql): recover cancelled transactions and history migration | Storage/DB | Fixes 503s on conversation history; prevents writer lease leaks |
| [#6936](https://github.com/nearai/ironclaw/pull/6936) | test(architecture): baselines + shrink-only exception ratchet (WS0) | Architecture/CI | Establishes dependency-graph baselines for Reborn restructure |
| [#6364](https://github.com/nearai/ironclaw/pull/6364) | feat(attachments): add durable cross-channel file flows | Attachments/WebUI/Telegram/Slack | Generic attachment contract; atomic inbound batches; run-scoped capability |
| [#6934](https://github.com/nearai/ironclaw/pull/6934) | refactor(host_api): de-wildcard the contract prelude (WS0) | Architecture | Removes 45-module wildcard re-export; enforces explicit imports |
| [#6496](https://github.com/nearai/ironclaw/pull/6496) | Complete Telegram attachment support in both directions | Telegram | **Issue closed** — inbound/outbound Telegram attachments production-hardened |

**Key advancement**: The Reborn architecture program (epic #3773) has shipped its **Wave 0 foundations** (baselines, dead-code ratchets, contract sealing). Attachment infrastructure is now cross-channel complete. LibSQL transaction reliability is restored.

---

## 4. Community Hot Topics — Most Active Discussions

| Item | Comments | Summary | Underlying Need |
|------|----------|---------|-----------------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) Epic: Error-recoverability endgame | 15 | Contract: every mid-run error must be survived, surfaced with cause+remedy, and acted on by model | **Production reliability** — eliminate silent failures; make errors actionable for autonomous recovery |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) Epic: Hermetic capability/journey testing | 4 | Mechanical answer to "does every capability/journey have deterministic coverage?" | **Release confidence** — replace manual/test-fixture gaps with hermetic, measurable coverage |
| [#6565](https://github.com/nearai/ironclaw/issues/6565) Epic: Reliable Skill Discovery/Routing/Activation | 2 | Model cannot reliably find/select/activate best skill; 21 acceptance criteria | **Core agent competence** — skill system is a user-visible failure point; blocking v1 launch |
| [#6941](https://github.com/nearai/ironclaw/issues/6941) Epic: Skills subset (of #6565), fully measured | 0 (new) | Splits #6565 into measurable slice; 4 criteria belong to other open work | **Incremental delivery** — unblock measurable progress on skill system without waiting for full epic |

**Pattern**: The team is decomposing large, cross-cutting epics into independently verifiable slices (#6941 from #6565; #6919–#6927 from #3773), reflecting a shift to **measurable, incremental delivery**.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical (Security)** | [#6866](https://github.com/nearai/ironclaw/issues/6866) | Shared home directory across all users; workspaces visible to others — **privacy breach** | No |
| **Critical (Security)** | [#6900](https://github.com/nearai/ironclaw/issues/6900) | Shared-channel default subject binds all users into operator's memory namespace — **cross-user memory leak** | No |
| **High (Availability)** | [#6752](https://github.com/nearai/ironclaw/issues/6752) | Instance deletion fails; "Loading your agents..." stuck on re-login | No |
| **High (Integration)** | [#6834](https://github.com/nearai/ironclaw/issues/6834) | Slack setup fails in IronClaw (near.foundation account) — auth flow incomplete | No |
| **Medium (UX)** | [#6940](https://github.com/nearai/ironclaw/issues/6940) | IronHub skill CTA returns 404 across all skills | No |

**Action needed**: The two critical security issues (#6866, #6900) have **no fix PRs** and affect multi-tenant isolation. They should be triaged as **P0**. Instance deletion (#6752) and Slack auth (#6834) block user operations.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Migration tool** for legacy agent (Hermes/Openclaw) setup & memory → IronClaw | [#6939](https://github.com/nearai/ironclaw/issues/6939) (user feedback) | **High** — explicit switching-cost barrier; multiple users resisting migration |
| **Agentic Activity & Streaming UX** redesign (WebUI v2) | [#6901](https://github.com/nearai/ironclaw/pull/6901) (PR open) | **High** — design-approved mockup + implementation brief landed; foundation PR open |
| **Hosted MCP server registration** in extension lifecycle | [#6930](https://github.com/nearai/ironclaw/pull/6930) (PR open) | **High** — XL PR with auto OAuth detection; extends extension platform |
| **IronHub deep-link register/install gateway** with private manifest | [#6780](https://github.com/nearai/ironclaw/pull/6780) (PR open) | **Medium** — re-port of prior work; HMAC-SHA256 handshake; depends on #6933 |
| **Skill activation refusal explanations** & requirement enforcement | [#6938](https://github.com/nearai/ironclaw/pull/6938) (PR open) | **High** — directly addresses #6565 epic; makes silent failures explicit |

**Roadmap signal**: The next version will likely ship **streaming UX**, **MCP hosting**, **skill activation transparency**, and **IronHub package verification** — all in open PRs with core contributor authorship.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Cannot migrate from legacy agents** | [#6939](https://github.com/nearai/ironclaw/issues/6939): "high switching costs… no way to carry over prior setup, configuration, and memory" | Adoption blocker; users "resist starting over" |
| **Slack integration broken** | [#6834](https://github.com/nearai/ironclaw/issues/6834): "setup process does not complete… extension in unusable state" | Core integration failure for team workflows |
| **Instance management broken** | [#6752](https://github.com/nearai/ironclaw/issues/6752): deletion fails; re-login stuck | Operational reliability concern |
| **IronHub skill links broken** | [#6940](https://github.com/nearai/ironclaw/issues/6940): "CTA leads to 404 for every skill" | Discovery/install UX dead end |
| **Privacy violation** | [#6866](https://github.com/nearai/ironclaw/issues/6866): "home directory same for all users… all workspaces visible" | Trust/security regression |

**Sentiment**: Frustration on **migration, core integrations (Slack), and basic operations (instance mgmt)**. Positive signal: Telegram attachments completed ([#6496](https://github.com/nearai/ironclaw/issues/6496) closed).

---

## 8. Backlog Watch — Long-Unanswered / Stalled Important Items

| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| [#3773](https://github.com/nearai/ironclaw/issues/3773) Epic: Target Crate Architecture | **~73 days** (opened 2026-05-19) | Open, 0 comments | **North-star architecture**; 9 child workstreams (#6919–#6927) created today but need ratification (#6919) and execution |
| [#6284](https://github.com/nearai/ironclaw/issues/6284) Epic: Error-recoverability endgame | **12 days** | Open, 15 comments | **v1-launch dependency**; 15 comments show active debate but no closure; blocks "model recovers from 100% of errors" |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) Epic: Hermetic testing platform | **9 days** | Open, 4 comments | **Release quality gate**; without it, "cannot answer mechanically" if capabilities are covered |
| [#6565](https://github.com/nearai/ironclaw/issues/6565) Epic: Skill discovery/routing/activation | **8 days** | Open, 2 comments | **User-facing core competency**; 21 criteria, 4 owned by others; new slice #6941 created to unblock |
| [#6866](https://github.com/nearai/ironclaw/issues/6866) Shared home directory (security) | **2 days** | Open, 0 comments | **Critical privacy bug**; no fix PR, no assignee, no discussion — silent P0 |
| [#6900](https://github.com/nearai/ironclaw/issues/6900) Cross-user memory leak (security) | **1 day** | Open, 0 comments | **Critical security bug**; shared-channel binding collapses namespaces; no fix PR |

**Maintainer action required**: 
1. **Assign/security-triage #6866 and #6900 immediately** — they are silent P0s.
2. **Ratify #6919** (target architecture decision record) to unblock 9 workstreams.
3. **Drive #6284 to closure** — it's the v1 recoverability contract with active discussion but no resolution.

---

## Project Health Indicators

| Metric | Signal |
|--------|--------|
| **PR merge rate** | 24/50 (48%) merged/closed in 24h — healthy integration |
| **Issue:PR ratio** | 21:50 — PR-heavy (refactoring/dependencies dominate) |
| **Security hygiene** | ⚠️ **Two critical multi-tenant bugs with zero fix activity** |
| **Architecture debt** | 🟡 **Active paydown** (Wave 0 shipped; 9 workstreams defined) |
| **User-facing delivery** | 🟢 **Telegram attachments done**; Slack/instance mgmt broken |
| **Skill system** | 🟡 **Active fixes** (#6937, #6938, #6745) but epic not measurable yet |

**Bottom line**: IronClaw is in a **high-velocity restructuring sprint** with strong technical progress on foundations, but **critical security regressions** and **user-blocking bugs** in core integrations (Slack, instance mgmt, migration) need immediate maintainer intervention to avoid eroding trust ahead of v1.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-31

## 1. Today's Overview
LobsterAI showed **high merge velocity** with **7 PRs closed/merged** in the last 24 hours and **3 open PRs** (2 of which are stale from April). No new issues were filed, and no releases were published. The merged work spans **security hardening (path traversal fix)**, **Windows process-management reliability**, **UI polish (sidebar carousel, Sites page alignment)**, **major cowork features (isolated `/btw` side-chat, input improvements)**, and **enterprise-grade account isolation** for auth/media/sharing flows. The project is in active feature-development mode with a focus on stability, security, and enterprise readiness.

## 2. Releases
**None** — no new versions published today.

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Type | Summary |
|----|------|------|---------|
| [#2412](https://github.com/netease-youdao/LobsterAI/pull/2412) | platform: windows | **Bug Fix** | Re-issues `Stop-Process` on every poll round during NSIS uninstall/stop, preventing survivor processes from persisting; adds per-process survivor logging (name/pid/path) on timeout. |
| [#2411](https://github.com/netease-youdao/LobsterAI/pull/2411) | renderer | **Feature** | Adds unified sidebar carousel for daily check-in (exclusive) and banner carousel (multiple); hides nav for single item; preserves banner-group dismissal state. |
| [#2410](https://github.com/netease-youdao/LobsterAI/pull/2410) | renderer | **UI Polish** | Aligns Sites page width, spacing, and search styling with Skills and MCP management views for visual consistency. |
| [#2389](https://github.com/netease-youdao/LobsterAI/pull/2389) | skills, docs | **Security Fix** | Sanitizes email attachment filenames, enforces download-directory boundaries, adds cross-platform security tests, bumps bundled email skill version. |
| [#2397](https://github.com/netease-youdao/LobsterAI/pull/2397) | renderer, main, openclaw, cowork, docs | **Feature** | Introduces editable floating `/btw` side-chat panel (drag, 8-dir resize, stop, follow-up); isolates execution/history from main conversation; routes via OpenClaw utility stream. |
| [#2406](https://github.com/netease-youdao/LobsterAI/pull/2406) | renderer, main, cowork, docs | **Bug Fix / UX** | Accumulates selected text excerpts while side-chat open; removes product-level question length limit; retains bounded context & transport safety checks. |
| [#2409](https://github.com/netease-youdao/LobsterAI/pull/2409) | renderer, main, openclaw, cowork, artifacts, docs | **Feature (Enterprise)** | Isolates auth, media, queued follow-up, sharing, deployment state by account; prevents stale async responses cross-account; enforces enterprise entitlements; improves rollback/cleanup; adds bilingual diagnostics. |

## 4. Community Hot Topics
*No new issues or high-engagement PRs in the last 24 h.* The only open PRs with recent updates are the two **stale PRs from April** (#1228, #1231), both still awaiting review. This suggests community discussion is currently low; maintainers are driving progress internally.

## 5. Bugs & Stability
| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **High (Security)** | Email attachment path traversal | **Fixed** | [#2389](https://github.com/netease-youdao/LobsterAI/pull/2389) |
| **Medium (Reliability)** | Windows NSIS stop leaving survivor processes | **Fixed** | [#2412](https://github.com/netease-youdao/LobsterAI/pull/2412) |
| **Low (UX)** | Side-chat input: lost excerpts, artificial length limit | **Fixed** | [#2406](https://github.com/netease-youdao/LobsterAI/pull/2406) |
| **Low (Performance)** | Live prompt re-capping cached history, hurting DeepSeek cache hit rate | **Open** | [#2413](https://github.com/netease-youdao/LobsterAI/pull/2413) |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Mark session as unread** (menu + context menu, Redux action, i18n) | [#1228](https://github.com/netease-youdao/LobsterAI/pull/1228) (stale, Apr) | Medium — feature complete but unmerged for 4 months |
| **Escape key to close AgentCreateModal + form reset on reopen** | [#1231](https://github.com/netease-youdao/LobsterAI/pull/1231) (stale, Apr) | Medium — small UX consistency fix, pattern exists elsewhere |
| **Byte-stable live prompt history for cache efficiency** | [#2413](https://github.com/netease-youdao/LobsterAI/pull/2413) (open, today) | High — performance optimization for OpenClaw/DeepSeek |
| **Enterprise account-scoped isolation (auth, media, sharing, deployment)** | [#2409](https://github.com/netease-youdao/LobsterAI/pull/2409) (merged today) | **Already landed** — signals enterprise push |
| **Sidebar carousel for check-in/banners** | [#2411](https://github.com/netease-youdao/LobsterAI/pull/2411) (merged today) | **Already landed** — engagement/growth feature |

**Prediction:** Next version will likely include the enterprise isolation (#2409), side-chat (#2397/#2406), sidebar carousel (#2411), and the cache-stability fix (#2413). The two stale PRs (#1228, #1231) are overdue for review/merge.

## 7. User Feedback Summary
*No direct user issues/comments captured in the last 24 h.*  
Indirect signals from merged PRs:
- **Security consciousness**: Path-traversal fix (#2389) shows proactive hardening.
- **Windows reliability**: Survivor-process fix (#2412) addresses real-world uninstall/stop failures.
- **Enterprise needs**: Account-scoped isolation (#2409) reflects demand for multi-tenant / SSO scenarios.
- **Collaboration UX**: Side-chat (#2397) and markdown/unread features (#1228) indicate users juggle multiple concurrent threads.
- **Performance sensitivity**: Cache-hit optimization (#2413) suggests heavy LLM usage where token/call cost matters.

## 8. Backlog Watch
| Item | Age | Area | Why It Needs Attention |
|------|-----|------|------------------------|
| [#1228](https://github.com/netease-youdao/LobsterAI/pull/1228) | **121 days** | cowork | Feature-commit-stale | Complete “mark as unread” implementation with Redux + i18n; UX parity with mainstream chat apps. |
| [#1231](https://github.com/netease-youdao/LobsterAI/pull/1231) | **121 days** | agent | Tiny UX consistency fix (Escape key + form reset) matching existing modal patterns. |
| [#2413](https://github.com/netease-youdao/LobsterAI/pull/2413) | **0 days** | openclaw, docs | Performance fix for live prompt caching; open but ready for review — low risk, high impact. |

---

**Health Indicators**  
- **Merge rate**: 7 PRs/24 h → **Strong**  
- **Issue inflow**: 0 → **Quiet** (may indicate stable release or low external contribution)  
- **Stale PRs**: 2 open > 4 months → **Backlog grooming needed**  
- **Security posture**: 1 critical fix merged today → **Proactive**  

*Next digest: 2026-08-01.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-31

## 1. Today's Overview
Moltis shows moderate but focused development activity over the last 24 hours. Two new issues were opened—one feature request for Telegram inline button support and one security bug report for missing authentication on Vault unlock/recovery endpoints. Four pull requests were updated: three remain open (instrumentation/feedback infrastructure, channel operator gating, and web Markdown export), while one major Slack enhancement (acknowledgment reactions, phases, reconnect supervision, Block Kit) was merged. No new releases were published. The project appears to be in a steady feature-and-hardening phase, with attention on observability, access control, and multi-channel UX improvements.

## 2. Releases
**No new releases** published today.

## 3. Project Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#1166](https://github.com/moltis-org/moltis/pull/1166) | **Merged** | Slack: per-message acknowledgment reactions, phased progress, reconnect supervision, and Block Kit rendering. Builds on #1165. | **High** — improves Slack bot reliability, user feedback loop, and message rendering fidelity under real-world queueing/retry conditions. |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | Open | Adds backend-neutral agent instrumentation, Langfuse v4 export, OTLP backends, and end-user reaction feedback. Captures immutable completion-only turns, streaming/non-streaming parity, provider failover attribution, cache-aware token usage, reasoning traces. | **High** — foundational observability & analytics infrastructure; enables production-grade monitoring and evaluation. |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | Open | Channels: gates `/sh` and privileged host tools behind a per-account `operators` list, separating access from privilege. Enforced across commands, callbacks, queue replay, chat execution, external triggers. | **High** — security hardening; prevents privilege escalation via channel access lists. |
| [#1176](https://github.com/moltis-org/moltis/pull/1176) | Open | Web UI: preserves original Markdown when copying assistant replies; adds session-level “Save as Markdown” export with full paginated history, user/assistant text, and image references. | **Medium** — improves developer/analyst workflow for session review and documentation. |

## 4. Community Hot Topics
| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#1178](https://github.com/moltis-org/moltis/issues/1178) | Feature Request | 0 comments, 0 👍 (new) | **Rich Telegram interactions** — agents need to send inline keyboards and receive structured callback data to build interactive workflows (menus, confirmations, pagination) directly in Telegram. |
| [#1177](https://github.com/moltis-org/moltis/issues/1177) | Security Bug (CWE-306) | 0 comments, 0 👍 (new) | **Authentication gap** — Vault unlock/recovery endpoints lack auth, exposing sensitive secret-management operations. Critical for production deployments. |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | PR | Updated today, 0 comments | **Observability maturity** — team investing heavily in standardized instrumentation (Langfuse, OTLP) and user feedback loops, signaling a push toward production-grade eval/monitoring. |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | PR | Updated today, 0 comments | **Least-privilege channel ops** — explicit operator model addresses real-world risk where channel access ≠ host-tool privilege. |

*No items have significant comment/reaction volume yet; all four are fresh (created/updated today).*

## 5. Bugs & Stability
| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#1177](https://github.com/moltis-org/moltis/issues/1177) — Vault Unlock/Recovery endpoints missing authentication (CWE-306) | **Critical** | Open, reported today | **No fix PR yet** — requires immediate maintainer attention; impacts secret integrity. |

*No crashes, regressions, or other bugs reported in the last 24h.*

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Telegram inline buttons + structured callbacks** | [#1178](https://github.com/moltis-org/moltis/issues/1178) | **High** — natural extension of existing Telegram channel support; aligns with multi-channel interactive UX push (see Slack Block Kit in #1166). |
| **Agent instrumentation & feedback collection (Langfuse, OTLP, reactions)** | [#1174](https://github.com/moltis-org/moltis/pull/1174) | **Very High** — PR is large, active, and foundational; likely to land soon behind a feature flag. |
| **Per-account operator lists for privileged tools** | [#1170](https://github.com/moltis-org/moltis/pull/1170) | **High** — security hardening; review feedback suggests it’s near merge. |
| **Web Markdown copy & session export** | [#1176](https://github.com/moltis-org/moltis/pull/1176) | **Medium** — quality-of-life improvement; low risk, likely to merge after UI review. |

**Prediction**: The next release will likely bundle the merged Slack enhancements (#1166) with the channel operator gating (#1170) and possibly the instrumentation stack (#1174) if test coverage passes. Telegram inline buttons (#1178) may slip to the following cycle unless prioritized.

## 7. User Feedback Summary
- **Pain point (Security)**: Vault unlock/recovery endpoints are unauthenticated — a direct operational risk for teams using Moltis for secret management in production. No workaround mentioned.
- **Pain point (Telegram UX)**: Agents cannot present interactive menus or collect structured responses in Telegram, limiting bot sophistication compared to Slack (which now has Block Kit + reactions via #1166).
- **Positive signal**: The merged Slack acknowledgment/phase/reconnect work (#1166) addresses a long-standing gap (no typing indicator) with a robust reaction-based lifecycle — indicates maintainers are responsive to channel-parity requests.
- **Developer experience**: Web Markdown export (#1176) reflects demand for portable session artifacts (audit, sharing, offline analysis).

*No explicit satisfaction/dissatisfaction comments captured in today’s data.*

## 8. Backlog Watch
| Item | Age | Why It Needs Attention |
|------|-----|------------------------|
| [#1177](https://github.com/moltis-org/moltis/issues/1177) — Vault auth bypass | 0 days (new) | **Critical severity, no fix PR**. Should be triaged and patched immediately; consider backporting to latest stable if applicable. |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) — Instrumentation infrastructure | 4 days (updated today) | Large, cross-cutting PR; needs maintainer review for API stability, OTLP/Langfuse version pinning, and performance impact. |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) — Channel operator gating | 5 days (updated today) | Security-related; ensure migration path for existing channel allowlists is documented. |
| [#1178](https://github.com/moltis-org/moltis/issues/1178) — Telegram inline buttons | 1 day | Feature parity with Slack; design discussion needed on callback payload schema and agent-side handling. |

---

*Digest generated from GitHub data as of 2026-07-31. Links point to live items on github.com/moltis-org/moltis.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-31

## 1. Today's Overview

CoPaw maintains **high development velocity** with 47 PR updates and 15 issue updates in the last 24 hours. The project is in active stabilization phase post-v2.0 release, with contributors addressing performance regressions (~2s fixed overhead per reply), session management bugs, MCP reconnection failures, and UI/UX polish. CI infrastructure has a critical regression blocking all fork PRs. No new releases today; the team is focused on bug fixes and incremental enhancements rather than feature delivery.

---

## 2. Releases

**No new releases today.** The latest version remains v2.0.1 (post3). The project appears to be in a patch/fix cycle after the v2.0 major release.

---

## 3. Project Progress — Merged/Closed PRs Today (21 total)

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#6596](https://github.com/agentscope-ai/QwenPaw/pull/6596) | feat(dialog): WAL durability — flush+fsync JSONL after every reply turn | **Bug Fix / Reliability** | Fixes data loss on crash; ensures dialog persistence survives hard kills |
| [#6590](https://github.com/agentscope-ai/QwenPaw/pull/6590) | fix(computer-use): reuse desktop identity on macOS | **Bug Fix** | Restores Screen Recording permission for Computer Use on macOS |
| [#6594](https://github.com/agentscope-ai/QwenPaw/pull/6594) | docs(computer-use): add beginner guide | **Documentation** | New user onboarding for Computer Use feature |
| [#6562](https://github.com/agentscope-ai/QwenPaw/pull/6562) | Fix Bug #6533, #6506, and #60 | **Bug Fix** | Fixes `/mission` command TypeError and other regressions |
| [#6256](https://github.com/agentscope-ai/QwenPaw/pull/6256) | feat(governance): make sandbox-unavailable fallback action configurable | **Feature** | Adds operator control over sandbox fallback behavior |
| [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) | feat(computer-use): native desktop GUI automation for Windows and macOS | **Major Feature** | **Ships Computer Use** — accessibility-first desktop automation with per-app approval |

**Key advancement:** The **Computer Use** feature (#6424) has landed — a major v2.0 capability enabling native desktop GUI automation on Windows/macOS with accessibility tree + screenshot observation, per-application approval, and safety boundaries. This is likely the flagship feature of the v2.0 line.

---

## 4. Community Hot Topics

| Item | Activity | Core Need |
|------|----------|-----------|
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) **Performance: ~2s fixed overhead per reply in v2.0** | 7 comments, opened 2026-07-21 | **Critical regression** — architectural changes in request pipeline add 2s latency independent of model. Blocks adoption for latency-sensitive use cases. |
| [#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) **CI blocks ALL fork PRs** | 5 comments, **CLOSED today** | **Infrastructure emergency** — `real-behavior-proof.yml` fails on every fork PR with "Resource not accessible by integration". Fixed via PR #6562. |
| [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) **MCP client fails to auto-reconnect after server restart** | 5 comments | **Reliability gap** — stale `mcp-session-id` reused after server reboot; requires manual `list mcp` to recover. |
| [#6559](https://github.com/agentscope-ai/QwenPaw/issues/6559) **Unwanted session forking pollutes session list** | 2 comments | **UX debt** — auto-forked sessions appear flat in list without parent-child grouping, making history navigation chaotic. |
| [#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555) **Dream/memory compression loses early-session events** | 2 comments | **Data loss** — context scroll eviction discards turns before daily memory generation; **fix PR #6592 open**. |

**Pattern:** Users are hitting **v2.0 architectural growing pains** — performance, session model complexity, and persistence reliability. The community is technically sophisticated (detailed repro steps, log excerpts) and expects production-grade stability.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) ~2s fixed overhead per conversational reply | **Open** | None yet |
| **Critical** | [#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) CI blocks all fork PRs | **Closed** | [#6562](https://github.com/agentscope-ai/QwenPaw/pull/6562) ✅ |
| **High** | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) MCP client doesn't auto-recover after server restart | **Open** | None |
| **High** | [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) `spawn_subagent` single-task mode unusable (schema requires `batch`) | **Open** | [#6595](https://github.com/agentscope-ai/QwenPaw/pull/6595) ✅ |
| **High** | [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) `execute_shell_command` large output freezes UI | **Open** | None |
| **High** | [#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555) Dream compression loses early-session events | **Open** | [#6592](https://github.com/agentscope-ai/QwenPaw/pull/6592) ✅ |
| **Medium** | [#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512) `execute_shell_command` output truncated >30KB | **Open** | None |
| **Medium** | [#6453](https://github.com/agentscope-ai/QwenPaw/issues/6453) Chinese filenames garbled in upload prompt | **Open** | [#6567](https://github.com/agentscope-ai/QwenPaw/pull/6567) ✅ |
| **Medium** | [#6591](https://github.com/agentscope-ai/QwenPaw/pull/6591) Scroll history retention prunes active sessions | **Open PR** | [#6591](https://github.com/agentscope-ai/QwenPaw/pull/6591) |

**Stability signal:** 8+ high-severity bugs open, but **4 have active fix PRs** — maintainers are responsive. The performance regression (#6307) remains the biggest unaddressed risk.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for Next Version | Rationale |
|---------|-------|----------------------------|-----------|
| **Workspace artifact quick-access button in Desktop** | [#6083](https://github.com/agentscope-ai/QwenPaw/issues/6083) | **High** | 4 comments, clear UX pain point for non-technical users; aligns with Desktop polish |
| **Bundled Python environment for script execution** | [#6160](https://github.com/agentscope-ai/QwenPaw/issues/6160) | **High** | [PR #6579](https://github.com/agentscope-ai/QwenPaw/pull/6579) **open** — uses bundled Python; solves "Python not found" on Windows |
| **Unified cleanup page for memory/workspace/data** | [#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) | **Medium** | New today; addresses long-term storage bloat — may be v2.1 scope |
| **Streaming/large-output handling for shell commands** | [#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512), [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) | **High** | Two related issues; UI freeze + truncation are blockers for data-heavy workflows |
| **Session tree view (parent-child grouping for forks)** | [#6559](https://github.com/agentscope-ai/QwenPaw/issues/6559) | **Medium** | Architectural UX improvement; requires session model changes |
| **Configurable env var expansion in JSON config** | [PR #5740](https://github.com/agentscope-ai/QwenPaw/pull/5740) | **High** | First-time contributor PR, open since Jul 2; security-friendly secret management |

**Prediction:** Next patch (v2.0.2) will likely include: bundled Python (#6579), spawn_subagent fix (#6595), memory flush fix (#6592), Chinese filename fix (#6567), and CI fix (#6562). Performance regression (#6307) may require a minor version (v2.1).

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Segment |
|------------|----------|--------------|
| **v2.0 slower than v1.x** | "#6307: ~2s fixed overhead per simple reply" | All users; blocker for interactive use |
| **Session list chaos** | "#6559: auto-forks pollute flat list, no tree view" | Power users with long conversations |
| **MCP fragility** | "#6524: manual reconnect needed after server restart" | Users with remote MCP servers |
| **Large output breaks UI** | "#6589: UI freeze on 10k+ line output; #6512: truncation at 30KB" | Data analysts, log reviewers |
| **No bundled Python on Windows** | "#6160: conda envs not detected; 'Python not installed'" | Windows desktop users |
| **File upload UX** | "#6453: Chinese names garbled; #6583: multi-file drag shows single line" | Non-English / multi-file workflows |
| **No storage management** | "#6593: memory/workspace bloat, no cleanup UI" | Long-term users |
| **Distracting char counter** | "#6585: dynamic character count flashes during load" | Accessibility-sensitive users |

**Satisfaction signals:** Users file detailed, actionable issues — indicates **investment in the product**. Complaints are specific to v2.0 regressions, not fundamental design. Computer Use (#6424) landing suggests confidence in direction.

---

## 8. Backlog Watch — Stale Items Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) **Performance: 2s overhead** | 10 days | **Highest impact bug**; no fix PR yet; architectural |
| [#5739](https://github.com/agentscope-ai/QwenPaw/pull/5739) **feat(chat): select & auto-copy message text** | 29 days | First-time contributor PR; "Under Review" — UX polish |
| [#5740](https://github.com/agentscope-ai/QwenPaw/pull/5740) **feat(config): env var expansion in JSON** | 29 days | First-time contributor PR; security-enhancing; stale |
| [#5745](https://github.com/agentscope-ai/QwenPaw/pull/5745) **fix(security): redact secrets in dialog artifacts** | 29 days | **Security hardening**; first-time contributor; stale |
| [#6232](https://github.com/agentscope-ai/QwenPaw/pull/6232) **perf(console): cache & compress static assets** | 14 days | Directly relevant to #6307 performance; reduces bundle transfer |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) **feat: unify provider discovery, routing, agent controls** | 10 days | Large architectural PR; addresses #6167 (7 pain points); needs review |
| [#6350](https://github.com/agentscope-ai/QwenPaw/pull/6350) **fix(git): inject identity on coding mode commit** | 9 days | Fixes CI/container commits; small but blocking for some |

**Maintainer action recommended:** Prioritize #6307 (performance), #6232 (asset compression), and the three stale first-time-contributor PRs (#5739, #5740, #5745) to unblock contributors and improve security/UX. The provider unification PR (#6302) is a strategic v2.1 candidate.

---

## Health Indicators

| Metric | Status | Trend |
|--------|--------|-------|
| **Issue throughput** | 15 updated / 1 closed | 🟡 Steady inflow |
| **PR throughput** | 47 updated / 21 closed | 🟢 High velocity |
| **First-time contributor PRs** | 4 open (29 days avg) | 🟡 Stalling — needs review |
| **Critical bugs open** | 3 (perf, MCP, UI freeze) | 🔴 Elevated |
| **Fix PRs for critical bugs** | 4/8 high-sev have PRs | 🟢 Responsive |
| **Major feature landed** | Computer Use (#6424) | 🟢 Milestone achieved |

**Overall:** **Active stabilization phase**. Strong contributor engagement, but v2.0 regressions (performance, session model, persistence) need systematic resolution before v2.1 feature work.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-07-31

---

## 1. Today's Overview
ZeptoClaw shows **minimal surface activity** over the last 24 hours: zero new or updated issues, no releases, and a single open pull request (#645) that has been under review since 2026-07-23. The lone PR addresses a **security and stability hardening** in the runtime layer—specifically, preventing credential leakage to subprocesses and ensuring timed-out command trees are fully reaped. With no merged work or community chatter today, the project is in a **quiet maintenance window**, likely awaiting review bandwidth for the pending runtime fix.

---

## 2. Releases
**No new releases** published today or in the recent window.

---

## 3. Project Progress
**Merged/Closed PRs today:** 0  
**Open PR with recent update:**
- **#645** `fix(runtime): scrub subprocess secrets and reap timed-out process trees`  
  - *Author:* qhkm | *Created:* 2026-07-23 | *Last updated:* 2026-07-30  
  - *Summary:* Runtime shell commands were inheriting ZeptoClaw’s full process environment, exposing provider keys and unrelated credentials to model-authored commands. Additionally, timeouts on `Command::output()` futures were not consistently terminating and reaping descendant processes (including Docker containers). This PR scrubs secrets from the subprocess environment and implements robust process-tree reaping on timeout.  
  - *Link:* [qhkm/zeptoclaw#645](https://github.com/qhkm/zeptoclaw/pull/645)  
  - *Status:* Open, awaiting review/merge. No comments or reactions recorded.

---

## 4. Community Hot Topics
**Most active item (sole PR):**
- **PR #645** — Security/stability fix for runtime subprocess handling.  
  - *Underlying need:* Users and maintainers require **guaranteed isolation of secrets** (API keys, tokens) from untrusted model-generated commands, and **reliable cleanup** of spawned process trees to avoid orphaned containers or resource leaks. This is a foundational hardening, not a feature request, signaling that runtime safety is a current priority.

---

## 5. Bugs & Stability
| Severity | Issue / PR | Description | Fix PR Exists? |
|----------|------------|-------------|----------------|
| **High** | PR #645 (open) | Subprocesses inherit full parent env → credential leakage to model commands; timeout futures drop without reaping descendants → orphaned processes/containers. | **Yes** — PR #645 itself is the fix, pending merge. |
| — | No new bug issues filed today. | — | — |

*No crashes, regressions, or new bug reports surfaced in the last 24h.*

---

## 6. Feature Requests & Roadmap Signals
- **No new feature requests** or roadmap discussions in issues/PRs today.
- The sole active PR (#645) is a **security/stability hardening**, not a feature. Its merging will likely unblock safer execution of model-authored shell commands—a prerequisite for any future “agentic” or “tool-use” features that rely on sandboxed subprocesses.

---

## 7. User Feedback Summary
- **No user-facing issues, discussions, or comments** recorded in the last 24h.
- Zero reactions/comments on PR #645 suggest the change is **internal/maintainer-driven** rather than prompted by external reports.
- Pain points inferred from PR #645: developers running ZeptoClaw in environments with sensitive env vars (cloud credentials, API keys) need assurance that model-spawned shells cannot exfiltrate them; operators need confidence that timeouts clean up fully.

---

## 8. Backlog Watch
| Item | Age | Type | Why It Needs Attention |
|------|-----|------|------------------------|
| **PR #645** | 8 days (opened 2026-07-23) | Security/Stability Fix | Critical runtime hardening; blocks safe deployment in credentialed environments. No review activity yet. Assign reviewer or self-merge if CI passes. |
| *(No stale issues)* | — | — | Issue tracker empty; no long-unanswered items. |

---

**Bottom line:** ZeptoClaw is **quiet but not stagnant**—a high-value security fix sits in review limbo. Merging PR #645 should be the immediate priority to harden the runtime substrate for any upcoming agent/tool-use work.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-31

## 1. Today's Overview
ZeroClaw shows **high maintenance velocity** with 50 PRs and 6 issues updated in the last 24 hours. The project is in a **stabilization phase for v0.8.4** (target date: today, 2026-07-31), with multiple security-critical bug fixes landing alongside CI consolidation work. No new release shipped today. Activity is heavily weighted toward **security hardening** (webhook authentication, command allowlist fixes) and **CI/release engineering** (consolidating three parallel attestation mechanisms into one). The maintainer team is actively triaging and merging fixes for regressions introduced in v0.8.3.

## 2. Releases
**No new releases today.** The v0.8.4 maintenance train (tracked in [#8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357)) targets July 31, 2026. v0.8.3 shipped with three redundant signing mechanisms (cosign, GitHub artifact attestations, slsa-github-generator) — consolidation is in progress via [#9211](https://github.com/zeroclaw-labs/zeroclaw/pull/9211).

## 3. Project Progress
**Merged/Closed today (1 PR):**
- [#9211](https://github.com/zeroclaw-labs/zeroclaw/pull/9211) **CLOSED** — `ci(release): consolidate release attestations`  
  Makes GitHub artifact attestations the sole provenance mechanism; generates both SBOM formats in a read-only job; reduces release assets from ~53 to ~20. Addresses [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101).

**Notable open PRs advancing toward v0.8.4:**
| PR | Area | Status |
|----|------|--------|
| [#9569](https://github.com/zeroclaw-labs/zeroclaw/pull/9569) | Security: fail-closed WhatsApp/Linq webhooks | Open, fixes [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) |
| [#9568](https://github.com/zeroclaw-labs/zeroclaw/pull/9568) | Security: case-insensitive command allowlist on Unix | Open, fixes [#9566](https://github.com/zeroclaw-labs/zeroclaw/issues/9566) |
| [#9567](https://github.com/zeroclaw-labs/zeroclaw/pull/9567) | Feature: email Cc/Bcc support | Open, stacked on reply-threading branch |
| [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) | Chore: remove WATI channel (deprecated) | Open |

## 4. Community Hot Topics
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) | Issue (enhancement) | 8 | **CI/release hygiene** — eliminate redundant signing pipelines that double CI time and asset count |
| [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | Issue (bug, S0) | 2 | **Webhook authentication bypass** — three inbound handlers accept unauthenticated attacker-controlled messages |
| [#8927](https://github.com/zeroclaw-labs/zeroclaw/pull/8927) | PR (bug) | — | **Provider compatibility** — strip_think_tags breaks MiniMax reasoning models using inline `<think>` tags |
| [#8969](https://github.com/zeroclaw-labs/zeroclaw/pull/8969) | PR (enhancement) | — | **Slack thread context** — hydrate bounded history on first bot mention for contextual replies |

**Underlying theme:** Contributors are surfacing **supply-chain/security debt** (attestation redundancy, unauthenticated webhooks) and **provider-edge cases** (reasoning tag handling, Slack context) that affect production reliability.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Component | Fix PR | Status |
|----------|-------|-----------|--------|--------|
| **S0 — Data loss / Security risk** | [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565): WhatsApp Cloud, Linq, WATI webhooks skip signature verification when no secret configured | `gateway/api` | [#9569](https://github.com/zeroclaw-labs/zeroclaw/pull/9569) | Fix open |
| **S2 — Degraded behavior** | [#9573](https://github.com/zeroclaw-labs/zeroclaw/issues/9573): Cost pricing lookup ignores configured prices with multiple aliases of same provider type | `runtime/daemon` | — | No fix yet |
| **S2 — Degraded behavior** | [#9572](https://github.com/zeroclaw-labs/zeroclaw/issues/9572): Debug gateway WebSocket turns overflow default Tokio worker stack | `gateway/api` | — | No fix yet |
| **S2 — Degraded behavior** | [#9566](https://github.com/zeroclaw-labs/zeroclaw/issues/9566): Uppercase `allowed_commands` entries never match on Unix (regression from #4552) | `security/sandbox` | [#9568](https://github.com/zeroclaw-labs/zeroclaw/pull/9568) | Fix open |

**Note:** The S0 webhook bug affects three providers simultaneously; fix [#9569](https://github.com/zeroclaw-labs/zeroclaw/pull/9569) adds fail-closed logic. The command allowlist regression [#9566](https://github.com/zeroclaw-labs/zeroclaw/issues/9566) has a targeted fix in [#9568](https://github.com/zeroclaw-labs/zeroclaw/pull/9568).

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for v0.8.4/v0.9 |
|--------|--------|----------------------------|
| **Email Cc/Bcc on single message** | [#9567](https://github.com/zeroclaw-labs/zeroclaw/pull/9567) (stacked on reply-threading) | High — scoped enhancement, half of [#9506](https://github.com/zeroclaw-labs/zeroclaw/issues/9506) |
| **Slack thread context hydration** | [#8969](https://github.com/zeroclaw-labs/zeroclaw/pull/8969) | Medium — XL size, needs author action, config flag default 0 |
| **Trusted goal tools & delegation boundaries** | [#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688) | Low for v0.8.4 — XL, high risk, adds model-callable goal tools |
| **Plugin typed instance config validation** | [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) | Medium — XL, high risk, Draft 2020-12 schema enforcement |
| **Eval append-only run-history receipts** | [#9248](https://github.com/zeroclaw-labs/zeroclaw/pull/9248) | Medium — XL, opt-in feature for trend analysis |

**Prediction:** v0.8.4 will land the security fixes and CI consolidation. Email Cc/Bcc and eval history are strong candidates. Slack thread context and plugin validation likely slip to v0.9.

## 7. User Feedback Summary
**Pain points from issues/PRs:**
- **Security operators** cannot trust webhook endpoints without manual secret configuration (S0 bug [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565))
- **Unix users** hit silent command denials when `allowed_commands` contains uppercase (regression [#9566](https://github.com/zeroclaw-labs/zeroclaw/issues/9566))
- **Multi-alias deployments** lose cost tracking — critical for billing/observability ([#9573](https://github.com/zeroclaw-labs/zeroclaw/issues/9573))
- **Developers** face stack overflows in debug WebSocket builds ([#9572](https://github.com/zeroclaw-labs/zeroclaw/issues/9572))
- **Provider integrators** need per-model vision/modality parsing ([#8878](https://github.com/zeroclaw-labs/zeroclaw/pull/8878))

**Positive signals:** Active contributor base (JordanTheJet, IftekharUddin, wangmiao0668000666, NiuBlibing) rapidly filing fixes for regressions. Maintainers triaging with severity labels and linking fix PRs same-day.

## 8. Backlog Watch (Long-unanswered, High-impact)
| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688) `feat(runtime): add trusted goal tools and delegation boundaries` | 27 days | High | Foundational agent delegation feature; XL scope, needs design review |
| [#8969](https://github.com/zeroclaw-labs/zeroclaw/pull/8969) `feat(channels/slack): hydrate thread context` | 20 days | Medium | UX-critical for Slack deployments; XL, needs author action |
| [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) `feat(plugins): validate typed instance config` | 13 days | High | Plugin ecosystem safety; XL, high risk, blocks schema enforcement |
| [#8927](https://github.com/zeroclaw-labs/zeroclaw/pull/8927) `fix(providers): remove unconditional strip_think_tags` | 21 days | Medium | Breaks MiniMax reasoning models; needs maintainer review |
| [#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313) `feat(skills): default to compact injection` | 36 days | High | Prompt token savings; deprecation path needs final call |

**Maintainer attention needed:** The three XL/high-risk PRs ([#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688), [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126), [#8969](https://github.com/zeroclaw-labs/zeroclaw/pull/8969)) have been open 2–4 weeks without resolution. They represent architectural shifts (delegation, plugin validation, Slack UX) that require design sign-off before v0.9 planning.

---

**Project Health Indicator:** 🟡 **Stabilizing** — High fix velocity on security regressions, but architectural backlog accumulating. v0.8.4 release readiness depends on merging the two S0/S2 fix PRs ([#9569](https://github.com/zeroclaw-labs/zeroclaw/pull/9569), [#9568](https://github.com/zeroclaw-labs/zeroclaw/pull/9568)) and closing the CI consolidation ([#9211](https://github.com/zeroclaw-labs/zeroclaw/pull/9211) ✓ done).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*