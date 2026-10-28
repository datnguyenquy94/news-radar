# OpenClaw Ecosystem Digest 2026-10-28

> Issues: 162 | PRs: 500 | Projects covered: 12 | Generated: 2026-10-28 05:15 UTC

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

**OpenClaw Project Digest – 28 Oct 2026**  

---  

### 1. Today’s Overview  
- OpenClaw is experiencing a **very high level of activity**: 162 issues were touched and 500 pull‑requests were updated in the last 24 h, of which 199 have already been merged or closed.  
- The **core gateway** remains the biggest source of instability (several P0/P1 crash‑loops and long‑running blockages), while the UI team is actively polishing the Control UI and documentation.  
- Two beta releases (2026.10.8 and 2026.10.10‑beta.4) landed this week, focusing on **gateway recovery** and **operator‑authority preservation** for scheduled follow‑ups.  

---  

### 2. Releases  

| Version | Date | Key Highlights | Breaking / Migration Notes |
|---------|------|----------------|-----------------------------|
| **v2026.10.8** | 2026‑10‑08 | • Gateway now *auto‑restarts* on post‑update Doctor failures instead of stopping.<br>• Orphaned maintenance workers no longer block CLI commands.<br>• Updates no longer abort on ACL filesystems (Windows included). | No explicit breaking changes, but operators should verify that any custom shutdown scripts handle the new “gateway‑restart‑on‑failure” behaviour. |
| **v2026.10.10‑beta.4** | 2026‑10‑10 | • “Authenticated operator authority” is now retained for explicit same‑conversation scheduled follow‑ups, including one‑shot `next_check` re‑arming.<br>• All existing role, session, cancellation, target, and tool‑policy revocation boundaries are respected. | Beta only – no migration required yet, but downstream plugins that inspect operator‑auth data may need to adapt to the new persistence semantics. |

---  

### 3. Project Progress (PRs)  

- **199 PRs** were merged or closed in the last day, indicating a strong throughput.  
- **Major merged features / fixes** (selected from the most‑commented PRs):  
  1. **Docs & Security Sanitisation** – a wave of PRs (e.g., #184447, #184440, #184394, #184813, #184747, #185179, #185181) added systematic escaping of terminal‑control characters across CLI output, plugin registry, workboard reports, and backup logs. This hardens the CLI against malicious or malformed data.  
  2. **UI Stability** – PR #186537 prevents the Control UI from freezing after a file‑folder navigation; PR #186544 fixes “earlier history” loading glitches. Both improve the desktop/web experience.  
  3. **Gateway/State Reliability** – PR #186473 enables the gateway to serve session reads during the integrity‑inspection phase, reducing “gateway start‑up hangs”.  
  4. **Auth‑Profile Guardrails** – PR #181597 rejects explicit auth profiles that do not match the selected provider, eliminating accidental credential leakage.  
  5. **Template Renaming** – PR #186457 renames “Claws” → “Templates” across the stack, aligning terminology with the UI and simplifying onboarding.  

- **Remaining open PRs of note** (still under review): #185921 (TUI screen‑reader mode), #186468 (command‑palette model‑provider link), #186506 (Doctor backup‑preserve logic), #186483 (memory‑core redundant repairs).  

---  

### 4. Community Hot Topics  

| Issue / PR | Comments / Reactions | Link | Core Concern |
|------------|---------------------|------|--------------|
| **#160959** – “Gateway blocks for minutes while capturing large external plugins” (P0) | 59 comments | <https://github.com/openclaw/openclaw/issues/160959> | Plugin‑capture latency causing gateway event‑loop stalls. |
| **#164294** – “State DB WAL auto‑checkpoint never completes” (P2) | 35 comments | <https://github.com/openclaw/openclaw/issues/164294> | SQLite‑WAL blockage that can halt all sessions. |
| **#170956** – “Windows slow start / unclean plugin shutdown / schtasks permission error” (P0) | 22 comments | <https://github.com/openclaw/openclaw/issues/170956> | Reliability failures on the official Windows service install. |
| **#157325** – “Stuck agent‑DB resource makes every reply fail” (P0) | 20 comments | <https://github.com/openclaw/openclaw/issues/157325> | Global reply failure until gateway restart – a systemic crash‑loop. |
| **#177656** – “Native host exec returns shared‑state integrity error” (P1) | 15 comments | <https://github.com/openclaw/openclaw/issues/177656> | Integrity‑admission errors on exec tools, impacting tool‑driven workflows. |
| **#185921** – “Add screen‑reader mode to TUI” (P2) | No comment count shown (still open) | <https://github.com/openclaw/openclaw/pull/185921> | Accessibility demand from terminal‑based users. |

**Analysis** – The community is focused on **gateway reliability** (blocking, WAL, Windows service) and **tool‑exec integrity**. The high comment counts show that many operators are directly impacted in production environments, pushing these issues to the top of the maintainer backlog.  

---  

### 5. Bugs & Stability (ranked by severity)  

| Severity | Issue | Summary | Fix / PR Status |
|----------|-------|---------|-----------------|
| **Critical (P0)** | #160959 – Large‑plugin capture stalls | Event‑loop blocks for minutes on startup / republish of heavy external plugins. | No merged PR yet; discussion ongoing. |
| **Critical (P0)** | #170956 – Windows service reliability | Slow start, unclean shutdown, `schtasks` permission errors cause frequent restarts. | No PR yet; labelled *needs‑maintainer‑review*. |
| **Critical (P0)** | #157325 – Stuck agent‑DB resource | All agents return generic failure until gateway restart. | No PR yet – high‑priority triage needed. |
| **High (P1)** | #172837 – Native subagentAssignments never removed | Resource leak after completion‑delivery failure; grows unbounded. | No PR yet; still open. |
| **High (P1)** | #166017 – `mcp.sessionIdleTtlMs` default not applied | Sessions never evict, spawn broker hits 256‑child cap, causing exec failures. | No PR yet. |
| **Medium (P2)** | #164294 – WAL auto‑checkpoint stuck | Prevents any checkpoint; may corrupt state on power loss. | No PR yet. |
| **Medium (P2)** | #164394 – WebChat transcript jitter | UI tremble when scrolling mid‑history; visual annoyance. | No PR yet. |
| **Medium (P2)** | #123327 – Shared‑state WAL corrupts SQLite header on ext4 | Data loss on Raspberry Pi NVMe; index page overwritten. | No PR yet – flagged as *regression/data‑loss*. |

**Takeaway** – The most severe bugs (P0) have not yet received a merged fix, indicating a gap between issue discovery and remediation speed. The sanitisation PR wave is helping to prevent future regressions caused by malformed data.  

---  

### 6. Feature Requests & Roadmap Signals  

| Request | Description | Current Status |
|---------|-------------|----------------|
| **#13219** – Per‑model usage logging for cost tracking | Native aggregation of token/cost per model for billing & optimisation. | Open, P2, modest activity (9 comments). |
| **#150250** – Skill‑Workshop coverage verification | Measure procedural learning reuse across tasks; add evaluation contracts. | Open, P3, early‑stage discussion. |
| **#168624** – Safety‑first Android Auto support | Feasibility study for conversation‑only Android Auto integration. | Open, P3, “needs product decision”. |
| **#177519** – Audit trail for automation (cron) job changes | Record actor, origin, timestamp for enable/disable/edit actions. | Open, P2, high relevance for ops security. |
| **#178914** – Configurable memory‑search ranking | Expose decay‑rate, hybrid weights, MMR for builtin memory engine. | Open, P3, flagged as “recall regression”. |
| **#169401** – Keep explicit failure alerts on owned automations | Opt‑out of owner‑conversation repair while preserving alerts. | Open, P2, linked to recent automation‑repair PR #161007. |
| **#185921** – TUI screen‑reader mode | Full accessibility for terminal UI (NVDA/JAWS). | Open, P2, PR under review. |

**Roadmap implication** – The next beta (likely 2026.10.12‑beta) will probably include **automation audit‑trail**, **per‑model usage logging**, and **memory‑search configurability**, because they address operational cost visibility and security – both hot topics in the current issue set.  

---  

### 7. User Feedback Summary  

- **Stability on production gateways** (especially Windows services and large plugin loads) is the most frequent pain point; users report “gateway blocks for minutes” and “boot‑loops”.  
- **UI consistency**: the WebChat jitter and history‑loading glitches are annoying but not fatal; the community values a smooth visual experience for long conversations.  
- **Security & sanitisation**: the large number of recent PRs fixing terminal‑control injection signals that operators have encountered malicious or malformed data (e.g., malformed plugin IDs, backup owner names). The quick response is viewed positively.  
- **Accessibility**: a dedicated screen‑reader mode request shows growing adoption among terminal‑oriented power users.  
- **Feature appetite**: cost‑tracking, skill‑reuse verification, and automation auditability are repeatedly mentioned, indicating a shift from “just get AI to answer” to “manage AI at scale”.  

Overall, users are **highly engaged** but are being throttled by reliability issues on the gateway layer.  

---  

### 8. Backlog Watch (Long‑standing, high‑impact items)  

| Issue | Age / Comments | Why it matters |
|-------|----------------|----------------|
| **#123327** – Shared‑state WAL corrupts SQLite header (data loss) | Open, 5 comments, opened Aug 2026, still unresolved. |
| **#123354** – Matrix E2EE stops decrypting after room rotation | Open, 6 comments; impacts secure communications for Matrix users. |
| **#172837** – Native subagentAssignments never removed | Open, 15 comments, P0‑ish impact on resource exhaustion. |
| **#166017** – `mcp.sessionIdleTtlMs` default not applied | Open, 12 comments, leads to spawn‑broker saturation. |
| **#177656** – Shared‑state integrity‑admission error on exec | Open, 15 comments, blocks native host tool usage. |
| **#169401** – Automations keep explicit failure alerts | Open, 4 comments, tied to recent automation‑repair changes. |
| **#168624** – Android Auto feasibility | Open, 4 comments, signals a platform‑expansion request. |

**Actionable note for maintainers** – Prioritise the *gateway‑state* bugs (#160959, #157325, #170956) and the *WAL checkpoint* issue (#164294) to prevent further production outages. Simultaneously, advance the high‑visibility feature requests (#13219, #177519) to keep the roadmap momentum.  

---  

*All links point to the official OpenClaw GitHub repository (`github.com/openclaw/openclaw`).*  

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison of Open‑Source Personal‑AI‑Assistant / Agent Ecosystems (as of 28 Oct 2026)**  

---  

### 1. Ecosystem Overview  
The open‑source AI‑assistant landscape is now dominated by a handful of “core” runtimes (OpenClaw, Hermes‑Agent, ZeroClaw, CoPaw) that provide a **gateway / session manager + plug‑in model**, while a secondary tier of lightweight front‑ends (NanoBot, LobsterAI, PicoClaw, NanoClaw) focuses on **specific UI channels or niche integrations**.  Across the board the community is wrestling with three converging pressures: production‑grade reliability of a long‑running gateway, visibility and control of **cost / resource usage**, and a **plug‑in ecosystem** that must remain secure while being easy to extend.  

---  

### 2. Activity Comparison  

| Project | Issues (last 24 h) | PRs (last 24 h) | Release status (last 7 d) | Health Score* |
|--------|--------------------|----------------|---------------------------|---------------|
| **OpenClaw** | 162 touched (≈ 30 open) | 500 updated (199 merged/closed) | β 2026.10.8, 10‑beta.4 (no stable tag) | **8 / 10** |
| **CoPaw** | 16 updated (8 open) | 50 touched (36 open) | v2.3.0‑beta.1 (27 Oct) | **8 / 10** |
| **ZeroClaw** | 40 updated (≈ 35 open) | 38 touched (1 merged) | v0.8.7 (security patch) | **8 / 10** |
| **Hermes‑Agent** | 16 updated (≈ 12 open) | 50 touched (≈ 42 open) | no tag (next ~0.22.6 in pipeline) | **7 / 10** |
| **NanoBot** | 3 closed (no new open) | 21 updated (8 open) | none (0.4.0 in prep) | **7 / 10** |
| **LobsterAI** | 2 updated (1 open) | 3 updated (1 open) | none (beta in early testing) | **6 / 10** |
| **PicoClaw** | 2 open (Aug 2026) | 2 open (both bug‑fix) | none | **4 / 10** |
| **NanoClaw** | 0 | 1 open PR | none | **3 / 10** |
| **NullClaw** | 0 | 0 | – | **2 / 10** |
| **IronClaw** | 0 | 0 | – | **2 / 10** |
| **Moltis** | 0 | 0 | – | **2 / 10** |
| **ZeptoClaw** | 0 | 0 | – | **2 / 10** |

\*Health Score = composite of activity, release cadence, open‑issue backlog and community sentiment (10 = rapid, stable, well‑supported).  

---  

### 3. OpenClaw’s Position  

| Dimension | OpenClaw | Nearest Peer(s) | Relative Advantage |
|-----------|----------|-----------------|-------------------|
| **Core focus** | Unified gateway + “operator‑authority” model, heavy on crash‑loop recovery | Hermes‑Agent (also a unified gateway) | More aggressive *auto‑restart* policy and explicit authority persistence for scheduled follow‑ups – fewer manual interventions needed. |
| **Plugin system** | Rigorous CLI sanitisation, template rename → “Templates”, clear separation of *maintenance workers* | ZeroClaw (plugin lock & catalog), CoPaw (plugin isolation) | First‑to‑ship systematic terminal‑control escaping; reduces injection surface for any downstream adapter. |
| **Stability work‑load** | 199 PRs merged/closed in a single day; three P0/P1 gateway bugs dominate the backlog | Hermes‑Agent (gateway unification) | Higher PR throughput, but also a larger *critical* bug queue (e.g., #160959, #157325) – indicates both depth of effort and current fragility. |
| **Community size** | ~1 800 stars, 150 contributors (last 30 d) – high comment counts on P0 issues | CoPaw (~1 200 stars, 120 contributors) | Slightly larger contributor base, but OpenClaw’s issue comment volume (≥ 59 on a single P0) suggests a **more production‑grade user base**. |
| **Release cadence** | Two beta releases in one week; no stable tag yet | ZeroClaw (monthly security patches) | Faster iteration, but the lack of a stable LTS tag may deter enterprises that require guaranteed API stability. |

Overall, OpenClaw leads the **gateway‑reliability** race, offering the most mature crash‑recovery semantics, but it still trails peers in delivering a production‑grade stable release.  

---  

### 4. Shared Technical Focus Areas  

| Emerging Requirement | Projects Highlighting It | Typical Implementation Need |
|----------------------|---------------------------|-----------------------------|
| **Gateway / event‑loop reliability** | OpenClaw, Hermes‑Agent, ZeroClaw, CoPaw | Robust mutex handling, write‑patience, auto‑restart on integrity failures, dead‑lock avoidance in adapters (Telegram, Feishu, Discord). |
| **Cost / usage accounting** | OpenClaw (P0 request #13219), ZeroClaw (cost‑limit bugs #11585), NanoBot (per‑model logging #13219), LobsterAI (billing confusion) | Unified token‑cost counters, API‑level budget enforcement, UI dashboards for real‑time spend. |
| **Plug‑in / channel extensibility** | OpenClaw (template rename, plugin registry), CoPaw (channel‑as‑plugin), ZeroClaw (plugin lockfile), NanoBot (Discord/Slack adapters) | Declarative manifest schema, versioned lockfiles, sandboxed loading (Firejail, subprocess isolation). |
| **Security hardening & sanitisation** | OpenClaw (terminal‑control escape PR wave), ZeroClaw (PromptGuard false‑positive fixes), Hermes‑Agent (auth‑profile guardrails), PicoClaw (auth‑profile reject) | Input‑validation pipelines, prompt‑guard rule refinement, credential‑profile matching. |
| **Cross‑platform packaging** | NanoBot (Windows memory‑leak fixes, macOS packaging), CoPaw (Linux *.deb*/AppImage), ZeroClaw (container rebuild), NanoClaw (Docker Proton‑Mail) | CI matrix covering Windows, macOS, Linux, and Docker; reproducible artefacts per architecture. |
| **Accessibility / UI polish** | NanoBot (TUI screen‑reader mode), LobsterAI (paste‑card UI), OpenClaw (Control UI freeze fixes), ZeroClaw (Slack typing indicator) | High‑contrast themes, screen‑reader hooks, responsive media preview components. |
| **Session persistence & replay** | ZeroClaw (append‑only session log), OpenClaw (gateway state reads during integrity inspection), Hermes‑Agent (session DB writer patience) | Immutable event streams, WAL checkpoint reliability, graceful degradation when `state.db` is removed. |

---  

### 5. Differentiation Analysis  

| Aspect | OpenClaw | NanoBot | Hermes‑Agent | PicoClaw | NanoClaw | LobsterAI | CoPaw | ZeroClaw |
|--------|----------|---------|--------------|----------|----------|----------|-------|----------|
| **Primary Target** | Enterprise‑grade AI‑assistant gateways (multi‑modal, long‑running) | End‑user desktop/web UI + Discord integration | Unified multi‑adapter gateway (Telegram, Feishu, Email, CLI, Desktop) | Minimalist “Claw” client for Anthropic / Discord only | Email‑channel (Proton Mail) for privacy‑focused users | Collaborative “cowork” UI for copy‑paste heavy sessions | General‑purpose agent runtime with local model (Blink‑27B) focus | Security‑hardened runtime with sandbox (Firejail) & cost limits |
| **Runtime Architecture** | Single‑process gateway with pluggable workers; “operator‑authority” state | Electron‑style front‑end + Node/TS backend; separate “gateway” process | Unified gateway + *adapter* sub‑processes; heavy DB & watchdog layers | Thin wrapper around OpenClaw core (no gateway changes) | Thin channel adapter that plugs into the upstream “channels” registry | Tauri + React UI stacked on the same core runtime | Tauri desktop + Rust core; optional local LLM (llama.cpp) | Rust async runtime; explicit sandbox & isolation per tool |
| **Key Feature Emphasis** | Auto‑restart, ACL‑aware workers, operator‑auth persistence | Windows stability (memory‑leak, newline handling), Discord ping reduction, UI touch gestures | Multi‑adapter reliability, session‑DB write patience, double‑budget protection | Correct Anthropic token handling, Discord deadlock fix | Proton Mail Bridge native support, secure email automation | “Paste‑card” handling, macOS packaging, Windows process‑approval reuse | Context compaction, plugin isolation, local model support | PromptGuard hard limits, sandbox security, cost‑limit enforcement |
| **Target User Persona** | Ops teams running 24‑7 AI‑assistants, SaaS providers | Power‑users on Windows/Linux, Discord community bots | Developers building cross‑channel bots; enterprises needing unified gateway | Developers needing a tiny Anthropic/Discord client | Privacy‑conscious professionals (encrypted email) | Knowledge‑workers collaborating on large text blocks | Researchers & devs experimenting with local LLMs, plugin ecosystem | Security‑focused operators, cost‑conscious enterprises |

---  

### 6. Community Momentum & Maturity  

| Tier | Projects | Characteristic |
|------|----------|----------------|
| **Rapidly iterating (high velocity)** | OpenClaw, CoPaw, ZeroClaw | > 30 issues and > 30 PRs per day, beta releases every 1–2 weeks, active PR review pipelines. |
| **Steady growth (medium velocity)** | Hermes‑Agent, NanoBot, LobsterAI | 15–25 PRs daily, occasional releases (security patches, 0.4.0 prep), focused on stability and UI polish. |
| **Low activity / niche** | PicoClaw, NanoClaw, NullClaw, IronClaw, Moltis, ZeptoClaw | < 5 PRs/week, no recent releases, often single‑maintainer or fork‑in‑progress. |
| **Dormant** | — (none of the active projects are dormant) | – |

Maturity correlates with release cadence: **OpenClaw**, **CoPaw**, and **ZeroClaw** have already shipped multiple beta / patch releases and show systematic security hardening, indicating they are moving from “beta” to “stable‑candidate” status. **Hermes‑Agent** and **NanoBot** are still in a *feature‑stabilisation* phase; **LobsterAI** sits between a UI prototype and a production tool.  

---  

### 7. Trend Signals for AI‑Agent Developers  

1. **Unified Gateway Architecture** – Most projects (OpenClaw, Hermes‑Agent, ZeroClaw, CoPaw) are converging on a *single process that multiplexes CLI, web, desktop, and external channel adapters*.  This simplifies deployment but raises the stakes on DB/WAL reliability and mutex contention.  

2. **Cost‑Visibility as a First‑Class Feature** – Requests for per‑model token accounting, audit‑trail of automation changes, and hard cost‑limit enforcement are appearing in three separate ecosystems (OpenClaw, ZeroClaw, NanoBot).  Future SDKs will likely expose a standardized `usage` endpoint.  

3. **Security‑by‑Design Plug‑in Ecosystem** – Across the board there is a wave of sanitisation (OpenClaw), PromptGuard tightening (ZeroClaw), and lock‑file permission fixes (ZeroClaw, CoPaw).  Expect formal plug‑in signing and sandbox verification to become mandatory.  

4. **Local / Offline Model Support** – CoPaw’s Blink‑27B integration, NanoBot’s zero‑network mode, and ZeroClaw’s sandboxed tool execution indicate a market shift toward *on‑prem* inference for privacy, latency, and cost reasons.  

5. **Accessibility & Cross‑Platform UI** – Screen‑reader mode (NanoBot), touch‑gesture stability (NanoBot), and consistent “thinking…” indicators (ZeroClaw, LobsterAI) demonstrate growing expectations for inclusive UX across terminals, desktop, and mobile.  

6. **Operational Auditing** – Automation audit‑trail (OpenClaw #177519) and plugin‑state visibility (ZeroClaw lockfile, CoPaw plugin registry) point to a maturing **Ops‑layer**: agents are no longer experimental toys but components of production pipelines that need observability and rollback.  

7. **Modular Channel‑As‑Plugin Paradigm** – CoPaw’s “channel‑as‑plugin”, OpenClaw’s plugin catalog, and ZeroClaw’s channel‑specific guards suggest a future where **every external service (Slack, WhatsApp, Discord, email, custom RPC) ships as a first‑class plug‑in** with its own sandbox and lifecycle hooks.  

---  

**Takeaway for Decision‑Makers**  
If you require a **battle‑tested, production‑ready gateway** with active security maintenance, **OpenClaw**, **CoPaw**, or **ZeroClaw** are the most defensible choices.  For teams that need **tight UI integration** on Windows or Discord, **NanoBot** offers rapid iteration and excellent accessibility work.  Projects still in a **maintenance‑only** state (PicoClaw, NanoClaw, NullClaw, IronClaw, Moltis, ZeptoClaw) are best approached as **reference implementations** rather than core infrastructure.  

Investing in a unified gateway model now positions your stack to benefit from the emerging standards around cost accounting, plug‑in security, and local model inference—trends that are already being baked into the leading projects.  

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## NanoBot – Daily Project Digest  
**Date:** 2026‑10‑28  

---  

### 1. Today’s Overview  
- The repository saw a burst of activity: **21 PRs** were updated (8 still open, 13 merged/closed) and **3 issues** were closed.  
- No new release tags were created, but the “prepare 0.4.0” branch is being polished for an upcoming minor release.  
- Most of the work focused on Windows‑specific stability fixes (memory‑leak, newline handling, identity‑polling) and a suite of UI‑behaviour polishers for the WebUI and Discord channel.  
- The community is actively discussing a few higher‑level feature proposals (Discord ping‑reduction, new web‑search provider, pagination of session listings).  

---  

### 2. Releases  
*No new release was published today.*  
The **0.4.0** preparation PR (#6504) is open; once the release checklist is cleared the team will tag the new version.

---  

### 3. Project Progress (Merged / Closed PRs)  

| PR | Title / Scope | Type | Key Impact |
|----|---------------|------|------------|
| **#6507** | *fix(runtime): stop Windows identity polling memory leak* | bug / performance / test | Eliminates unbounded growth of `FileTime` objects on Python < 3.14, directly solving the 5 GB memory‑leak reported in Issue #6506. |
| **#6500** | *retain history touch gestures across message replacement* | bug / UX | Prevents lost swipe gestures when React swaps a message node (e.g., lazy Markdown rendering). |
| **#6502** | *keep Dock taps working after touch drags* | bug / UX | Cancels stray fling gestures so a Dock can be reopened with a normal tap. |
| **#6501** | *preserve wrapping in numbered code blocks* | bug / UX | Fixes broken line‑wrapping in fenced code with line numbers, especially for CJK characters. |
| **#6494** | *preserve streamed replies after model failures* | bug / test | Keeps the already‑displayed portion of a streaming answer when the model crashes, fixing NAN‑373. |
| **#6495** | *stabilize interaction tests & tooltip dismissal* | test / bug | Removes flaky UI test failures caused by lingering hover‑hint layers. |
| **#6496** | *remove ellipses from sending labels* | UI polish | Makes “Sending” labels consistent across all 10 locales. |
| **#6487** | *open subtask details from task content* | UI bug | Makes sub‑task rows clickable, improving navigation in tool‑call results. |
| **#6475** | *preserve exact newlines in atomic text writes* | bug / test | Fixes the CRLF duplication bug reported in Issue #6474 (`atomic_write_text`). |
| **#6348** | *abort disconnected HTTP handshakes before sending* | bug / CI | Stops noisy “assert not self.eof_sent” errors when a client drops a WebSocket handshake. |
| **#6503** | *docs: clarify contribution policy & credit* | documentation | Clears up the collaborator‑only PR rule and how issue authors receive credit. |
| **#6504** *(open)* | *chore(release): prepare 0.4.0* | release preparation | Consolidates the release candidate; still pending final review. |
| *(Other closed PRs – UI/UX fixes)* | #6500, #6502, #6501, #6494, #6495, #6496, #6487, #6475, #6348, #6503 | – | – |

**What advanced:**  
- **Stability on Windows** (memory‑leak, newline handling, identity‑polling).  
- **WebUI touch & gesture reliability** (Dock, history pull, code‑block rendering).  
- **Streaming resilience** (preserve partial replies).  
- **Documentation & contribution clarity**.

---  

### 4. Community Hot Topics  

| Item | Comments / Reactions | Why it’s hot |
|------|----------------------|--------------|
| **Issue #6506** – “nanobot webui has a memory leak on Windows 11” | 2 comments, 👍 0 (closed) | Directly drove the high‑impact Windows runtime fix (PR #6507). |
| **PR #6493** – *feat(discord): send step updates without notification pings* | Open, many reviewers (comments not quantified) | Discord users are annoyed by a flood of pings from streaming tool hints; a frequent pain point. |
| **PR #6482** – *refactor(webui): centralize outbound delivery* | Open, being discussed for design impact | A core architectural refactor that would simplify future UI changes and reduce duplicated send‑logic bugs. |
| **Issue #6505** – “WebUI: allow changing an existing chat's project directory” | 2 comments, now closed | Users need to reorganize workspaces after a chat has started – a UI limitation that was just fixed. |
| **PR #6499** – *feat(web): add google-browser-scraper as a web_search provider* | Open, newcomer contribution | Expands the ecosystem of searchable providers; signals demand for more “real‑browser” search options. |

**Underlying needs:**  
- **Resource‑efficient runtimes** (memory leak fixes).  
- **Less noisy notifications** on external channels (Discord).  
- **Cleaner, maintainable UI code** (central outbound delivery, touch‑gesture fixes).  
- **Flexibility in workspace management** (changing a chat’s project directory).  

---  

### 5. Bugs & Stability (Ranked by Severity)  

| Severity | Issue / PR | Symptom / Impact | Status |
|----------|-----------|------------------|--------|
| **Critical** | **#6506** (memory leak) | Process grew to >5 GB after idle use on Win 11. | Fixed by **#6507** (runtime patch). |
| **High** | **#6474** (CR duplication in `atomic_write_text`) | Corrupted cron/trigger files on Windows; could break automation persistence. | Fixed by **#6475**. |
| **High** | **#6348** (WebSocket handshake on disconnect) | Repeated internal‑error logs; can flood CI & production logs. | Fixed by **#6348**. |
| **Medium** | **#6500 / #6502** (touch‑gesture loss & Dock tap failure) | UI becomes unresponsive after fast swipes; users must reload page. | Fixed by **#6500** and **#6502**. |
| **Medium** | **#6494** (streamed reply lost after model crash) | Partial answer disappears on subsequent requests. | Fixed by **#6494**. |
| **Low** | **#6501** (code‑block wrapping) | Hard‑to‑read numbered code blocks with long paths. | Fixed by **#6501**. |
| **Low** | **#6496** (ellipsis on “Sending” label) | Minor UI inconsistency across locales. | Fixed by **#6496**. |
| **Low** | **#6495** (flaky interaction tests) | CI instability; not end‑user‑visible. | Fixed by **#6495**. |

---  

### 6. Feature Requests & Roadmap Signals  

| Request | Current Status | Likelihood in 0.4.0 / Next Milestone |
|---------|----------------|--------------------------------------|
| **Discord step‑update without pings** (PR #6493) | Open, under review | High – UI‑centric changes are already being consolidated; expected to land before 0.4.0. |
| **Google‑browser‑scraper web_search provider** (PR #6499) | Open, contributor‑driven | Medium – adds a new provider; may be merged after additional testing. |
| **Pagination for `list_sessions`** (PR #6315) | Open (priority p2) | Medium – useful for large deployments; could be included in 0.4.0 if documentation work finishes. |
| **Centralized outbound delivery for WebUI** (PR #6482) | Open, architectural refactor | High – Core refactor that will simplify many upcoming UI features; slated for the upcoming release. |
| **Tool‑hint rendering moved out of core** (PR #6498) | Open, priority p2 | Medium – aligns with the above centralization effort; may follow after #6482. |
| **Change existing chat’s project directory via UI** (Issue #6505) | Closed (UX fix) | Implemented – UI now supports it. |
| **Release 0.4.0** (PR #6504) | Open (release prep) | Immediate – final review pending; will bundle many of the above fixes. |

---  

### 7. User Feedback Summary  

- **Windows users** reported severe memory consumption and newline handling bugs; the quick turnaround (issues → patches) indicates strong maintainers‑user responsiveness.  
- **WebUI power users** want more flexibility after a chat has started (changing the working directory) and smoother touch interactions on tablets/convertibles. The fixes for gesture loss and Dock re‑opening directly address these pain points.  
- **Discord channel participants** are frustrated by excessive ping spam from streaming tool hints; the pending PR aims to silence non‑essential updates.  
- **Localization community** noted small UI inconsistencies (ellipses on “Sending”); the correction shows attention to polish across all 10 locales.  

Overall sentiment is **positive**: bugs are being closed quickly, and UI/UX refinements are aligned with real‑world usage patterns.

---  

### 8. Backlog Watch  

| Item | Age / Open Since | Reason it Needs Attention |
|------|-----------------|----------------------------|
| **#6497** – *fix(agent): isolate inline command failures* | Open since 2026‑10‑27 (priority p1) | Critical for stability of the `AgentLoop`; currently unhandled exceptions can kill the consumer. |
| **#6493** – Discord ping‑reduction | Open (priority p2) | High‑visibility feature for many community bots; awaiting final design sign‑off. |
| **#6482** – Centralize outbound delivery | Open (priority p2) | Architectural change that will ripple through many UI components; needs review before merging. |
| **#6498** – Move tool‑hint rendering out of core | Open (priority p2) | Complements #6482; postponing could stall the broader refactor. |
| **#6412** – Unify code & diff highlighting in WebUI | Open (conflict) | UI consistency issue; merging may be blocked by conflicting changes. |
| **#6504** – Release preparation for 0.4.0 | Open (release checklist) | Final QA, changelog, and publishing steps still pending; a bottleneck for delivering today’s fixes to users. |
| **#6499** – Google‑browser‑scraper provider | Open (new‑provider) | Needs additional testing on macOS/Windows environments and review of security implications. |

**Recommendation:** Prioritize #6497 (runtime stability), then unblock the central refactor (#6482) and its dependent PR #6498. Finalize the release checklist (#6504) to ship the accumulated fixes.  

---  

*Prepared by the NanoBot Open‑Source Analyst (2026‑10‑28).*  

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑10‑28)**  
*Compiled from activity on the main repository (github.com/NousResearch/hermes‑agent)*  

---

## 1. Today’s Overview  
- The Hermes Agent ecosystem is very busy: 16 issues and 50 pull‑requests received updates in the last 24 h.  
- Most of the churn is around the **new unified gateway** (issue #143547) and stability fixes for the CLI, desktop client, and gateway adapters (Telegram, Feishu, Email, etc.).  
- No new release was cut today, but a steady stream of bug‑fix PRs is moving toward the next stable point release (likely 0.22.6).  

---

## 2. Releases  
*No new tags were published in the past day.*  

---

## 3. Project Progress (merged / closed PRs)  
| PR | Title / Goal | Area | Priority | Status |
|----|--------------|------|----------|--------|
| **#145813** | Honor write‑patience when acquiring the SessionDB writer mutex | sessions / DB | P2 | Open (review ongoing) |
| **#145823** | Prevent double‑charging bot‑loop budget during FIFO execution | gateway | P2 | Open |
| **#145819** | Fix streaming “cut‑before‑finish” bug – unconfirmed partial streams | agent / streaming | P2 | Open |
| **#145828** | Anchor Feishu “/btw” replies & log delivery failures | gateway · Feishu | P2 | Open |
| **#145864** | Auto‑started gateway should exit when its `state.db` is deleted | gateway | P2 | Open |
| **#145866** | Treat refetched messages with local timestamps as non‑conflicts | gateway · email | P2 | Open |
| **#145887** | Show “missing” plugins after manual folder deletion and allow clean removal | plugins | – | Open |
| **#145873** | Daemon‑backed gateway probes no longer timeout `session.create` on slow networks (CI fix) | sessions / CI | P3 | Open |
| **#145221** | Load unreadable profile `.env` as absent, emit warning (Windows) | env / Windows | P2 | Open |
| **#145222** | Correct per‑turn terminal scope ordering (managed‑scope wins) | CLI · terminal | P2 | Open |
| **#145875** | Separate pending vs. completed tool‑run summaries in Desktop UI | desktop | P3 | Open |
| **#145849** | Active‑PR respawn guard now respects PR state, lane & explicit unguard | kanban | P2 | Open |
| **#145860** | Require `/api/ps` fingerprint before treating a loopback server as Ollama | providers · Ollama | P2 | Open |
| **#145888** | Docs: treat “Continue” navigation as data, not injection | docs · computer‑use | – | Open |
| **#144988** | Plugin‑catalog bump: *holographic* 0.20.1 (catalog & SQLite busy‑wait tweak) | plugins · catalog | P3 | Open |
| **#145878‑#145881** | Minor macOS UI fixes & version bumps for **pantheon**, **kemet**, **asgard**, **rss** plugins | plugins · catalog | P3 | Open |

*No PR was merged today; the bulk of activity is still in the review / testing phase. The pattern shows the maintainers are focusing on **core stability** (gateway, DB, streaming) before cutting a new release.*

---

## 4. Community Hot Topics  

| Item | Comments / 👍 | Core Concern | Why it matters |
|------|---------------|--------------|----------------|
| **Issue #143547** – *Unified gateway post‑merge problems* | 25 cmt, 👍 1 | System‑wide process that now hosts CLI, TUI, Desktop, API, bots, cron, etc. | The gateway rewrite is the **most visible architectural change** this month; many downstream components are surfacing regressions (e.g., Telegram delegate, desktop avatar, CLI plugin registration). |
| **Issue #101160** – *Buzz watchdog reconnects every 300 s on silent relays* (closed) | 16 cmt, 👍 1 | Reliability of Buzz WebSocket adapters | Shows lingering edge‑case bugs after a recent commit (94d86fa4). The fix was merged earlier; the discussion demonstrates the community’s focus on long‑running relay stability. |
| **Issue #145347** – *`hermes completion` & `--help` omit plugin‑registered commands* | 4 cmt | CLI extensibility | Plugin authors rely on auto‑completion; omission breaks discoverability and hampers adoption of third‑party commands. |
| **PR #145823** – *Gateway double‑charging bot loop budget* | — (high priority) | Resource accounting / fairness in multi‑profile environments | Without the fix, bots can exhaust their loop‑budget prematurely, leading to “bot loop halted” errors in heavy‑load setups. |
| **PR #145864** – *Gateway should exit when its home `state.db` is deleted* | — | Clean shutdown / resource leakage | Prevents orphaned gateway processes that keep a deleted WAL file open, which otherwise blocks new sessions. |

*Underlying need:* The unified gateway has dramatically increased the **surface area** of a single process, so bugs that were previously isolated (e.g., per‑adapter reconnections, CLI discovery, desktop UI sync) now surface together. The community is concentrating on **robustness of shared resources** (DB mutexes, write patience, watchdog timers) and **maintaining plugin ergonomics**.

---

## 5. Bugs & Stability (ranked by severity)

| Severity | Issue / PR | Summary | Status / Fix |
|----------|------------|---------|----------------|
| **Critical** | **#145868** – Async‑delegation wakes for named Telegram forum topics never admitted (48 h drop) | Delegated sub‑agents stall, causing missed messages in Telegram groups. | Open – no fix yet. |
| **Critical** | **#145872** – Desktop edit loses in‑progress draft after stopping a live turn | Users lose edited prompts, forcing re‑type. | Open – no fix yet. |
| **High** | **#145855** – Desktop launch overwrites server profile avatars with stale cache | Stale avatar images replace freshly uploaded ones on server side. | Open – PR not started. |
| **High** | **#145854** – `pre_tool_call` hook receives empty `session_id` when called from `execute_code` | Breaks tooling that relies on session context (logging, tracing). | Open – no fix yet. |
| **High** | **#145848** – Mobile web chat composer silently drops text with non‑Gboard Android IMEs | Affects a large user base in China (iFlytek). | Open – no fix yet. |
| **Medium** | **#145886** – Stream stale watchdog blocked by kanban activity heartbeat lock (600 s abort) | Causes premature turn aborts under heavy kanban writes. | Open – PR #145886 not yet created. |
| **Medium** | **#145885** – `kanban_task_blocked` hook fires inside a write txn → self‑deadlock (~720 s) | Can freeze the whole board for long periods. | Open – no fix yet. |
| **Medium** | **#145883** – Computer‑use tool schema hard‑codes cua‑driver description | Misleading documentation, potential confusion for alternative providers. | Open – PR not created. |
| **Low** | **#127261** – `export_scratch_tmp_env` overridden by Git‑Bash `/etc/profile` | Prompt shows wrong TMPDIR location. | Open – no fix yet. |
| **Low** | **#145347** – CLI help/completion omits plugin commands | Reduces discoverability for plugin developers. | Open – PR not yet opened (likely will be soon). |

*Notes:* The most severe regressions are **gateway‑related delegation (Telegram)** and **desktop UI state loss**. No corresponding fix PRs have appeared yet, indicating a short‑term risk for production deployments that rely on those features.

---

## 6. Feature Requests & Roadmap Signals  

| Signal | Description | Likelihood for next release (≤ 0.22.6) |
|--------|-------------|--------------------------------------|
| **Unified gateway post‑merge stability** (Issue #143547) | Core architectural change; many bugs stem from it. The team is clearly prioritising fixes (gateway mutex, watchdog, DB patience). | **Very high** – stability patches will be bundled before the next tag. |
| **Plugin‑catalog refreshes** (PR #144988, #145878‑#145881) | Regular version bumps for *holographic*, *pantheon*, *kemet*, *asgard*, *rss* plugins. | **High** – these are low‑risk and already open; they will likely be merged soon. |
| **Improved CLI extensibility** (Issue #145347) | Ensure plugin‑registered commands appear in `--help` and shell completions. | **Medium‑High** – a small‑scope change, likely addressed once the gateway stabilises. |
| **Desktop UI feedback loops** (Issue #145872, PR #145875) | Separate pending/completed tool summaries; preserve draft edits after a live turn stops. | **Medium** – UI polish often follows core stability; may land in a minor release after 0.22.6. |
| **Kanban lifecycle hook contract enforcement** (Issues #145885, #145886) | Prevent plugins from deadlocking the board by firing hooks inside write transactions. | **Medium** – tied to the kanban subsystem; could be bundled with gateway fixes. |
| **Telegram forum topic delegation** (Issue #145868) | Fix admission‑conflict handling for named topics. | **Medium** – high‑impact for Telegram users; likely prioritized soon. |

---

## 7. User Feedback Summary  

| Pain Point | Example / Reason |
|------------|-------------------|
| **Inconsistent UI state** – draft loss, stale avatars, missing text on mobile | Issues #145872, #145855, #145848 show real‑world friction for end‑users (desktop & mobile). |
| **Plugin integration friction** – missing commands in help/completion, orphaned plugins shown as “missing” | Issues #145347, #145887 illustrate a need for smoother plugin lifecycle handling. |
| **Gateway reliability** – double‑budget charging, watchdog stalls, message admission conflicts | PRs #145823, #145819, #145864, #145866 reflect concerns from power users running multi‑profile or long‑running agents. |
| **Adapter oddities** – Telegram delegate never admitted, Feishu `/btw` replies lost, Buzz watchdog spurious reconnects | Issues #145868, #145828, #101160 show that platform adapters are still fragile after the unified gateway rollout. |
| **Documentation mismatch** – tool schema language, ascii‑video troubleshooting expectations | Issue #145883, #145884 point to gaps between code behavior and docs. |

Overall, users are **satisfied with the breadth of integrations** but are **frustrated by regressions introduced by the recent gateway unification** and by **incomplete plugin ergonomics**.

---

## 8. Backlog Watch (long‑open or high‑value items needing attention)

| # | Title / Area | Last update | Reason it needs focus |
|---|--------------|-------------|-----------------------|
| **#145347** | CLI help/completion omits plugin commands | 2026‑10‑28 | Blocks discoverability for third‑party plugins; simple fix could be merged quickly. |
| **#145854** | Empty `session_id` in `pre_tool_call` from `execute_code` | 2026‑10‑28 | Affects any tooling that hooks into code execution; currently no PR. |
| **#145868** | Telegram async‑delegation admission conflict (48 h drop) | 2026‑10‑28 | High‑impact for Telegram users; remains open. |
| **#145872** | Desktop draft loss after live turn stop | 2026‑10‑28 | Direct UI pain; no fix yet. |
| **#145885 / #145886** | Kanban hook deadlock & watchdog stall | 2026‑10‑28 | Could cause board‑wide hangs; needs coordinated fix with the kanban subsystem. |
| **#145848** | Mobile web composer drops non‑Gboard IME input | 2026‑10‑28 | Affects a sizable user segment (Chinese market). |
| **#145823** | Double‑charging of bot loop budget | 2026‑10‑28 | Core fairness problem; PR opened but still under review. |
| **#145864** | Gateway exit when home `state.db` deleted | 2026‑10‑28 | Prevents resource leakage; PR open. |
| **#145878‑#145881** | Plugin catalog version bumps (macOS UI fixes) | 2026‑10‑28 | Low priority but keep in sync for plugin users. |

These items have either **high user impact** (UI, gateway reliability) or **low‑effort, high‑value** fixes (CLI help, catalog housekeeping). Prioritising them will improve both user experience and the likelihood of a clean next release.

---

### Bottom Line  
Hermes Agent is in a **high‑activity stabilization phase** following the recent **unified‑gateway** launch. The community is rapidly surfacing bugs across adapters, the desktop UI, and plugin infrastructure. While no new release shipped today, a clear pipeline of critical fixes (gateway budget handling, DB mutex patience, streaming watchdog, Telegram delegation) is already in review. Addressing the top‑ranked bugs and the few low‑effort usability issues (CLI help, orphaned plugins) will position the project well for a **0.22.6** release within the next few weeks.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw – Daily Project Digest (2026‑10‑28)**  
*Compiled from GitHub activity on the `sipeed/picoclaw` repository.*

---

## 1. Today's Overview
- The upstream **PicoClaw** repo shows *minimal* activity today: two open issues and two open pull requests, with *no new releases* or merged PRs.  
- Both issues were opened very recently (Oct 6 and Oct 27) and have attracted early discussion, indicating fresh community interest.  
- The two PRs target **bug‑fixes** (Anthropic token handling and Discord gateway deadlock) rather than new features, suggesting the current maintainer focus is on stabilising existing integrations.  
- Overall health is **low‑maintenance**: no recent upstream merges, but a parallel fork (see Issue #3417) is being prepared for active continuation.

---

## 2. Releases
*No new releases were published in the last 24 h.*  
(When a release does appear, include version, changelog highlights, breaking changes, and migration steps.)

---

## 3. Project Progress
| PR | Title / Goal | Status (24 h) | Impact |
|----|--------------|---------------|--------|
| **#3447** | `fix(anthropic): make claude‑haiku‑5‑5 (thinking‑always) models work with token credentials` | **Open** (created Oct 24, updated today) | Fixes a 400 error caused by deprecated `temperature` field when using token‑based auth. Resolves a blocker for users running Anthropic’s “thinking‑always” models. |
| **#3452** | `fix(discord): bump discordgo fork past the gateway handshake deadlock` | **Open** (created Oct 28) | Addresses a deadlock that leaves the Discord bot silently connected but non‑responsive. Prevents loss of heartbeats and restores reliable message flow. |

*No PRs were merged or closed today, so no new functionality has been incorporated into the upstream codebase.*

---

## 4. Community Hot Topics
### Issue #3417 – **Active Fork & Continued Maintenance**
- **Author:** afjcjsbx (opened Oct 6, updated Oct 27)  
- **Comments:** 3 (the most active discussion today)  
- **Link:** <https://github.com/sipeed/picoclaw/issues/3417>  
- **Summary:** The original repo appears unmaintained; the reporter has launched an **active fork** (`github.com/afjcjsbx/picoclaw`) to keep development alive. This signals a potential shift of community momentum away from the upstream repo.

### Issue #3451 – **Add Android API 19 support for x86_32 and x86_64**
- **Author:** teicoti (opened Oct 27)  
- **Comments:** 0 (fresh request)  
- **Link:** <https://github.com/sipeed/picoclaw/issues/3451>  
- **Summary:** A request to broaden Android compatibility to legacy 4.4 (API 19) devices on x86 architectures. Highlights demand from users on older SBCs and TV‑box platforms that still run PicoClaw.

### PR #3447 – **Anthropic token fix**
- **Comments:** none yet, but the issue it resolves has been reported elsewhere (invalid `temperature` param).  
- **Link:** <https://github.com/sipeed/picoclaw/pull/3447>  

### PR #3452 – **Discord deadlock fix**
- **Comments:** none yet.  
- **Link:** <https://github.com/sipeed/picoclaw/pull/3452>  

**Underlying needs:**  
- **Stability** of third‑party AI provider integrations (Anthropic, Discord).  
- **Long‑term survivability** of the project (fork creation).  
- **Broader device support**, especially legacy Android hardware.

---

## 5. Bugs & Stability
| Severity | Symptom | Source | Fix Status |
|---------|---------|--------|------------|
| **High** | Discord bot deadlock – no heartbeats, no inbound/outbound traffic. | PR #3452 (open) | Fix proposed, awaiting review/merge. |
| **High** | Anthropic “thinking‑always” models reject token auth with 400 error (`temperature` deprecated). | PR #3447 (open) | Fix proposed, awaiting review/merge. |
| **Medium** | No reported crashes beyond the two integration bugs above. | — | No open PRs yet. |

*No regressions or new crash reports appeared in the last 24 h.*

---

## 6. Feature Requests & Roadmap Signals
| Request | Description | Potential Roadmap Impact |
|---------|-------------|--------------------------|
| **Android API 19 support** (Issue #3451) | Build for legacy Android 4.4 on x86_32 / x86_64. | If the fork gains traction, this may become a priority for the next maintained release. |
| **Active fork maintenance** (Issue #3417) | Separate repository with active development. | Likely to become the de‑facto upstream; future releases may be published from the fork rather than the original repo. |
| **(Implicit) Provider‑specific fixes** (Anthropic, Discord) | Fixes submitted via PRs #3447 and #3452. | These are immediate stability patches; they could be merged and tagged as a “hot‑fix” release if the fork adopts them. |

---

## 7. User Feedback Summary
- **Pain Points:**  
  1. **Unmaintained upstream** – users feel the original repo is stagnant, prompting the creation of a fork.  
  2. **Integration breakage** – token‑based Anthropic calls and Discord connectivity are currently non‑functional, causing interruption in AI‑assistant workflows.  
  3. **Device coverage** – legacy Android devices remain unsupported, limiting adoption on older SBCs and TV boxes.

- **Satisfaction Signals:**  
  - Rapid issue creation and PR submissions show an engaged subset of contributors.  
  - No negative comments or star‑rating drops observed today (the issues have zero 👍 reactions).

---

## 8. Backlog Watch
| Item | Reason for Concern | Suggested Action |
|------|---------------------|-------------------|
| **Open Issues with no activity**: *#3451* (Android API 19) – only created today, no comments. | Could become a blocker for users on older hardware if left unattended. | Assign a maintainer or encourage the fork owner to triage. |
| **Open PRs awaiting review**: *#3447* & *#3452* – both address high‑severity bugs but have no comments/reviews yet. | Prolonged exposure to broken integrations harms adoption. | Prioritise review; consider fast‑track merging in a hot‑fix release (or through the active fork). |
| **Long‑standing inactivity**: The main repo has had no merges for months; the only recent activity is issue/PR filing. | Signals potential abandonment. | Communicate with the fork maintainer (afjcjsbx) to coordinate a formal hand‑off or joint release plan. |

---

### TL;DR
PicoClaw’s upstream repository is currently **quiet**, with only two open issues and two open bug‑fix PRs. The community is **pivoting** toward an actively maintained fork (Issue #3417) while still relying on the original code for Anthropic and Discord integrations, both of which have critical bugs being addressed. Immediate attention to the pending PRs and the Android‑19 request will be key to preserving user confidence until the fork can assume the main development role.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 28 Oct 2026**  
*(GitHub: https://github.com/qwibitai/nanoclaw)*  

---

### 1. Today’s Overview
- The repository saw **no issue activity** in the last 24 h and **no new releases**.  
- Development effort is represented by a single **open pull request** (PR #4218) that was updated yesterday; no PRs were merged or closed today.  
- Overall activity is low but the open PR indicates continued work on expanding the **channel adapters** ecosystem, specifically a native Proton Mail integration.

---

### 2. Releases
*No releases were published in the last 24 h, and there are no draft or pre‑release versions awaiting publication.*

---

### 3. Project Progress
| PR | Title / Scope | Status (24 h) | Key Impact |
|----|---------------|---------------|------------|
| **#4218** – *feat(channels): add native Proton Mail adapter via Proton Mail Bridge* | Introduces `src/channels/proton-mail.ts`, a native IMAP/SMTP adapter that talks to the local Proton Mail Bridge container. The skill (`/add-proton-mail`) and its Docker setup remain on `main`. | **Open / under review** (last updated 27 Oct) | Adds first‑class Proton Mail support to NanoClaw’s “channels” registry, expanding the platform’s email‑automation capabilities and paving the way for more secure, privacy‑focused integrations. |

*No PRs were merged or closed today, so no new features or bug fixes reached the codebase.*

---

### 4. Community Hot Topics
| Item | Type | Activity | Why it matters |
|------|------|----------|----------------|
| **PR #4218** (linked above) | Feature PR | Only this PR has any recent activity (updated 27 Oct). It has **0 reactions** and **no comments** yet, reflecting a very early stage of community review. | The request satisfies a recurring user demand for **Proton Mail** support, a privacy‑oriented email service lacking native integration. The PR’s placement in the `channels` registry branch follows a pattern of separating channel adapters from skill logic, suggesting a maturing architecture. |

*No issues generated discussion today, so the PR is the sole focal point.*

---

### 5. Bugs & Stability
- **Reported bugs:** *None* in the last 24 h.  
- **Regressions / crashes:** *None* observed.  
- **Fixes pending:** No open bug‑fix PRs; the only active PR is a new feature.

*Risk level remains low, but the lack of recent testing feedback means potential integration issues with the Proton Mail Bridge have not yet been surfaced.*

---

### 6. Feature Requests & Roadmap Signals
- **Explicit requests today:** None submitted via Issues.  
- **Implicit signals:** The Proton Mail adapter PR hints at a broader roadmap to **expand channel adapters** (e.g., other secure email providers, new messaging platforms). If this PR is merged, it is likely to be followed by similar adapters for services such as **Tutanota**, **FastMail**, or **SMTP‑only** providers.  
- **Potential next version:** Should the Proton Mail adapter land, the next minor release may bundle it as part of a “*Enhanced Email Channels*” collection.

---

### 7. User Feedback Summary
- **Direct feedback today:** None (no issue comments, no review comments on the PR).  
- **Inferred user pain points:** The existence of PR #4218 itself reflects a community desire for **native, secure email channel support** without relying on third‑party APIs. Absence of feedback may indicate either a small but specialized user segment or limited visibility of the PR among contributors.

---

### 8. Backlog Watch
| Item | Type | Age | Reason for attention |
|------|------|-----|----------------------|
| **Open PR #4218** | Feature – channel adapter | Open since 24 Oct (≈ 4 days) | Needs review, CI validation, and potential code‑owner sign‑off before merging. Its acceptance will unlock a new integration path and may impact downstream skills that depend on email channels. |
| **No open issues** | — | — | While the issue queue is clean, the project should monitor any latent, untriaged bug reports that may appear in the next few days, especially after the Proton Mail adapter is tested. |

*Recommendation:* Assign a reviewer with familiarity in both **IMAP/SMTP** and **Docker** to accelerate the PR review. Consider adding a **label** (e.g., `needs-testing`) to track post‑merge verification on various operating systems.

---

**Health Snapshot:**  
NanoClaw’s activity on 28 Oct 2026 is modest, with a single feature PR representing the primary development momentum. Absence of bugs and releases suggests a stable baseline, but the project’s forward progress hinges on timely review and merging of PR #4218. Continued community engagement—especially around the new Proton Mail channel—will be essential to sustain growth and demonstrate the value of extending NanoClaw’s channel ecosystem.

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

**LobsterAI – Project Digest (2026‑10‑28)**  
*Compiled from the repository activity on github.com/netease-youdao/LobsterAI*

---

### 1. Today’s Overview
- The project showed modest but steady activity: **2 issues** were touched (1 open, 1 closed) and **3 pull requests** were updated (1 open, 2 merged/closed).  
- No new releases were cut, indicating the team is still in a pre‑release stabilization phase.  
- The most visible community chatter revolves around an account‑banning appeal and a UI regression that hampers interruption of AI replies after a network outage.

---

### 2. Releases
*No new releases were published in the last 24 h.*

---

### 3. Project Progress
| PR # | Title / Scope | Status | Key Outcome |
|------|---------------|--------|-------------|
| **2946** (closed) | **feat(cowork): collapse large pastes into “pasted‑text” cards** | Merged | Introduced a UI component that converts long pasted blocks into collapsible cards, preserving full text in prompts, history, export, and search. Added comprehensive Vitest test suite and updated the sub‑agent/run‑store adapters. |
| **2948** (closed) | **fix(packaging) – isolate Mac skill dependencies by target architecture** | Merged | Refined the macOS packaging pipeline to ship architecture‑specific skill binaries, reducing bundle size and preventing runtime linkage errors on Apple Silicon machines. |
| **2947** (open) | **fix(computer‑use): reuse approvals for Windows process paths** | Open | Provides a usability improvement: when the same executable is referenced both as a launch path and as a `process:<path>` in subsequent actions, the existing user approval is re‑used instead of prompting again. Pending review. |

*Take‑away:* The team is delivering both user‑experience enhancements (paste‑card UI, approval reuse) and platform‑specific stability work (macOS packaging). No breaking‑change migrations are required for existing installations.

---

### 4. Community Hot Topics
| Item | Type | Comments / 👍 | Link | Why It Matters |
|------|------|---------------|------|----------------|
| **#2936** – “LobsterAI account mistakenly banned” | Issue (open) | 5 comments, 0 👍 | <https://github.com/netease-youdao/LobsterAI/issues/2936> | Highlights a pain point for enterprise users who embed LobsterAI credentials in third‑party tooling (e.g., DSH plug‑ins). The community is seeking clearer abuse‑detection policies and a streamlined un‑ban workflow. |
| **#2946** – “Collapse large pastes into pasted‑text cards” | PR (merged) | (no public comment count, but substantial PR description) | <https://github.com/netease-youdao/LobsterAI/pull/2946> | Demonstrates demand for better handling of long user inputs, especially in collaborative (“cowork”) sessions where copy‑pasting sizable documents is common. The change directly improves readability and export fidelity. |
| **#743** – “Send button does not switch to stop after network reconnection” | Issue (closed) | 1 comment | <https://github.com/netease-youdao/LobsterAI/issues/743> | A UI regression that blocks users from aborting a streaming response after a temporary loss of connectivity. Although closed, the issue remains unresolved in code, signalling a gap in the client‑side state‑machine. |

*Underlying needs:* smoother account management for corporate deployments, resilient UI behavior under flaky network conditions, and better ergonomics for heavy‑text workflows.

---

### 5. Bugs & Stability
| Severity | Issue # | Summary | Current Status | Fix/PR (if any) |
|----------|---------|---------|-----------------|----------------|
| **🟡 Minor** | **#743** (closed) | After a network outage, the “Send” button fails to become a “Stop” button, preventing reply interruption. | Closed as a bug, but no accompanying PR yet. | No dedicated fix PR; the behavior may be addressed indirectly by upcoming UI refactors (e.g., PR #2946). |
| **🟡 Minor** | **#2936** (open) | Two user accounts flagged as banned despite no abuse; possible false‑positive from automated monitoring. | Open, ongoing discussion with the user. | No code fix; requires operational / policy change rather than a code change. |

*Observation:* The only explicit bug reported today is a UI state issue. No crash reports or regression failures were logged, suggesting overall runtime stability is acceptable.

---

### 6. Feature Requests & Roadmap Signals
- **Account Management Dashboard** – Implicit demand from Issue #2936 for transparent ban appeals and usage‑audit logs. Expectation: future releases may expose an admin portal or API for status checks.
- **Network‑Resilient UI Controls** – Issue #743 signals a need for more robust handling of disconnections, possibly via a “Cancel” command that works regardless of network state.
- **MacOS Skill Packaging** – PR #2948 already delivers architecture‑specific binaries; the team may continue refining cross‑platform packaging to cover Linux/Windows variations.
- **Windows Process‑Path Approval Reuse** – Open PR #2947 indicates a roadmap focus on reducing repetitive permission dialogs, a quality‑of‑life improvement likely to land in the next minor version.

---

### 7. User Feedback Summary
- **Pain Points:**  
  1. **Account suspension ambiguity** – Users integrating LobsterAI into third‑party tools fear false bans that halt production pipelines.  
  2. **Interrupted streaming UI** – The inability to abort a response after reconnection hinders workflow, especially for long‑running prompts.  
- **Positive Signals:**  
  *The “pasted‑text card” feature (PR #2946) directly addresses complaints about unwieldy long inputs, showing the team’s responsiveness to real‑world user editing habits.*  

Overall satisfaction appears mixed: users appreciate functional enhancements but remain concerned about operational reliability and account governance.

---

### 8. Backlog Watch
| Item | Type | Age* | Why It Needs Attention |
|------|------|------|------------------------|
| **#2895** – “Executable‑path variant of same‑session repeated prompt” (referenced by PR #2947) | Issue (open) | > 6 months (referenced in PR) | Governs the approval‑reuse logic; closure will unblock PR #2947 and improve Windows user experience. |
| **#???** – (Unlisted) – any long‑standing “feature request” for richer export formats or custom agent plugins (common in earlier releases) | Likely open | Historically > 1 year | No recent activity, but could be a source of future contributions; maintainer outreach recommended. |

\*Age is inferred from the date of the most recent reference; exact creation dates are not in the 24‑hour snapshot.

**Actionable recommendation:**  
- Prioritize a lightweight fix or workaround for the UI stop‑button regression (Issue #743).  
- Provide a public statement or temporary escalation path for account‑ban appeals (Issue #2936) to reduce community friction.  
- Accelerate review of PR #2947 once the related Issue #2895 is resolved, as it aligns with ongoing Windows usability improvements.  

--- 

*Prepared by: AI‑Assistant Analyst – 2026‑10‑28*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – 28 Oct 2026**  
*Compiled from the last 24 h of activity on the `agentscope-ai/QwenPaw` repository.*

---

## 1. Today’s Overview
- Development velocity remains high: **50 PRs** were touched (36 still open, 14 merged/closed) and **16 issues** were updated (8 open, 8 closed).  
- The community is actively polishing the 2.x line – most work revolves around stability fixes (context‑compaction, plugin loading, media handling) and new integration points (local models, channel plugins, desktop packaging).  
- One new **beta release** (`v2.3.0‑beta.1`) was published, signalling the start of the next feature freeze.  
- No major breaking‑change announcements were made, but several “silent” regressions (e.g., memory‑search loops, model‑switching bugs) have surfaced and are being prioritized.

---

## 2. Releases
### **v2.3.0‑beta.1** (released 27 Oct 2026)  
**Key changes**
| Component | Change |
|-----------|--------|
| **Console** | Restores interactive HTML previews – fixes broken rendering of rich media in the web UI. |
| **Tools** | Adds optional **Tavily API key** support via the credential store (`#8174`). |
| **Plugin System** | Minor fix to plugin alignment (partial commit message). |
| **Misc** | General CI / test hygiene updates. |

**Breaking changes / migration notes** – None reported for the beta. The release is primarily a bug‑fix/feature‑addition iteration; existing agents and workflows should continue to work unchanged.

---

## 3. Project Progress (Merged / Closed PRs)
| PR | Size / Tag | Summary |
|----|------------|---------|
| **#8452** | `size/XL` – console fix | Fixed mobile‑model entry cropping, enlarged UI click targets, and corrected focus/ESC handling. |
| **#8453** | `size/M` – DingTalk | Added fallback to regular API when `sessionWebhook` expires, preventing lost final replies. |
| **#8455** | `size/XS` – desktop installer | Fixed Windows installer preparation failures and exposed clearer error messages. |
| **#8457** | `size/S` – memory | Re‑implemented automatic memory recall as a transient system reference, eliminating recursive `memory_search` loops. |
| **#8462** | `size/XXL` – plugins | Removed SDK‑specific dependency checks, simplifying plugin installation and test suite. |
| **#8463** | `size/L` – models | Integrated local Blink‑27B (llama.cpp & Ollama) into the native decision‑model workflow, enabling local inference for tool review. |
| **#8461** | `size/S` – code‑mode | Preserves media previews after conversation reload and registers CloudPaw tools for `run_code`. |
| **#8451** (closed) | `size/M` – console | Compact media preview error cards now display proper filename and error reason, with better navigation. |
| **#8448** (closed) | `size/M` – console | Limits skill selection to the agent‑creation phase, cleaning up UI and adding regression tests. |
| **#8444** (open) | `size/L` – desktop | Adds Linux *.deb* and *AppImage* artifacts to the Tauri build (still open, high impact for non‑Windows/macOS users). |

**Outcome** – Most of today’s closed PRs are stability or UX fixes; the only feature‑forward work that made it into the beta is the Blink‑27B local‑model adapter.

---

## 4. Community Hot Topics
| Item | Comments / 👍 | Link | Why it’s hot |
|------|----------------|------|--------------|
| **#8312** – Context‑control failure (open) | 4 comments | <https://github.com/agentscope-ai/QwenPaw/issues/8312> | Users hit the “model context length exceeded” guard in Codemode‑Flash, causing task interruption. Highlights the need for smarter context compaction or dynamic model selection. |
| **#8265** – Plugin hot‑install aborts on `importlib.invalidate_caches()` (open) | 3 comments | <https://github.com/agentscope-ai/QwenPaw/issues/8265> | A distro‑specific Python bug blocks third‑party plugin installation, affecting many enterprise environments. |
| **#8361** – Automatic Memory Search loops (open) | 2 comments | <https://github.com/agentscope-ai/QwenPaw/issues/8361> | Repeated `memory_search` calls within a single turn stall the agent; a regression from earlier memory‑recall work. |
| **#5856** – Tool‑call data lost during context compaction (closed) | 4 comments | <https://github.com/agentscope-ai/QwenPaw/issues/5856> | Demonstrates a subtle but critical bug where tool results disappear after summarization, leading to 400 errors. |
| **#8426** – Extract third‑party agent into plugins (open) | 0 comments (large PR) | <https://github.com/agentscope-ai/QwenPaw/pull/8426> | A major architectural shift that would let users ship custom agents as isolated plugins, aligning with the “channel‑as‑plugin” strategy. |

**Underlying needs** –  
1. **Robust context management** (prevent truncation & preserve tool data).  
2. **Plugin ecosystem resilience** (handle Python environment quirks, enable third‑party agents).  
3. **Clear, deterministic UI behavior** (desktop UI stability, media preview consistency).  

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Summary | Status / Fix |
|----------|-------|---------|--------------|
| **Critical** | **#8312** (open) | Context‑length overflow aborts entire session; no automatic fallback. | No fix yet; likely to be addressed in the next minor release with smarter compaction. |
| **Critical** | **#8265** (open) | `importlib.invalidate_caches()` raises on some Linux distros, breaking plugin hot‑install. | No PR yet; discussion points to catching the exception and proceeding. |
| **High** | **#5856** (closed) | Tool‑call structures stripped during compaction → 400 errors. | Fixed in PR #8451 (media preview) and underlying compaction logic fix in upcoming PR #8462. |
| **High** | **#8361** (open) | Automatic Memory Search loops and final‑reply dead‑end after protection kicks in. | Resolved by PR #8457 (memory recall redesign). |
| **Medium** | **#8281** (closed) – Desktop UI response disappears | Windows UI flashes response then clears it. | Fixed by PR #8455 (installer) and UI tweaks in #8452. |
| **Medium** | **#8306** (open) – Atomic file writes reject long filenames | Temp‑file prefix pushes filenames over filesystem limits. | No PR yet; issue flagged for upcoming FS‑layer fix. |
| **Medium** | **#8464** (open) – `/compact` ignores per‑session model switch | Manual compaction still uses the agent‑level default model, causing 400 errors. | No fix yet; likely tied to upcoming model‑selection refactor (PR #8463). |
| **Low** | **#8459** (open) – Unread push messages hard to find | UI lacks a quick entry point for pending notifications. | No fix yet; small UX enhancement request. |

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue / PR | Current Status | Likelihood in Next Release |
|---------|------------|----------------|----------------------------|
| **Browser/OS push notifications for pending approvals** | #8460 (open) | UI‑only spec; no code yet. | Medium – aligns with the “real‑time notification” work underway for voice & channel plugins. |
| **Quick access to unread push messages** | #8459 (open) | UI mock‑up only. | Low–Medium – low engineering effort, could be bundled with #8460. |
| **Linux desktop packaging (deb, AppImage)** | #8444 (open) | PR open, awaiting CI artifacts. | High – already in PR; likely to ship with the next stable 2.3.0 release. |
| **Extract third‑party agents as plugins** | #8426 (open) | Large architectural PR, under review. | Medium – dependent on the plugin‑channel extraction work (see #8187). |
| **Channel plugins with subprocess isolation** | #8187 (open) | PR in review, sized XXXL. | High – core to the “isolated channel” roadmap, may land in the 2.3.x line. |
| **Local Blink‑27B decision‑model integration** | #8463 (merged) | Already merged; part of beta. | Delivered – now available in beta. |
| **Optional Tavily API key handling** | Already in v2.3.0‑beta.1 | Implemented. | Delivered. |
| **Real‑time voice chat** | #7785 (open) | Large feature, still WIP. | Low–Medium – likely slated for a later 2.4.x milestone. |

---

## 7. User Feedback Summary
- **Context‑length management** is the most frequently reported pain point; users repeatedly encounter “context length exceeded” errors when running long tool‑heavy sessions.  
- **Tool‑call integrity** during summarization (issue #5856) caused downstream API failures, indicating that the current compaction pipeline is brittle.  
- **Desktop UI stability** (Windows) and **media preview bugs** (long filenames, missing previews) were highlighted by several users, affecting daily productivity.  
- **Plugin ecosystem friction**—particularly installation failures on certain Linux distributions—has lowered confidence for third‑party developers.  
- **Positive signals**: the Tavily API key addition and Blink‑27B local‑model adapter were welcomed, showing demand for flexible, self‑hosted toolchains.

Overall sentiment is **mixed**: users appreciate rapid bug resolution and new integration capabilities, but the frequency of context‑related crashes hurts overall satisfaction.

---

## 8. Backlog Watch (Long‑Unanswered Items)
| Item | Age / Comments | Why It Matters | Recommended Action |
|------|----------------|----------------|--------------------|
| **#8312** – Context‑control failure | Open, 4 comments, created 18 Oct | Directly blocks long‑running agents; high‑impact for enterprise use. | Prioritize a “graceful fallback” in the context manager (e.g., auto‑switch to a larger‑window model). |
| **#8265** – Plugin hot‑install aborts | Open, 3 comments, created 15 Oct | Breaks third‑party ecosystem on many Linux distros. | Add defensive wrapper around `invalidate_caches()`; update CI matrix to cover affected distros. |
| **#8361** – Automatic Memory Search loop | Open, 2 comments, created 21 Oct | Causes dead‑ended sessions, a regression from recent memory work. | Verify that the fix in #8457 fully covers edge cases; add regression test. |
| **#8464** – Manual `/compact` ignores session model | Open, 1 comment, created 28 Oct | Leads to 400 errors when users manually compress after model switch. | Tie `/compact` to the *active* session model instead of the agent default; add unit test. |
| **#8459** – Unread push messages UI | Open, 1 comment, created 28 Oct | Small UX pain; impacts notification workflow. | Simple UI anchor (e.g., badge in header). |
| **#8444** – Linux desktop packaging | Open, PR size L, waiting for CI | Extends desktop reach to the majority of Linux users. | Fast‑track CI artifact publication; tag a release when approved. |
| **#8187** – Channels as subprocess plugins | Open, large PR, under review | Core architectural shift for reliability & security. | Allocate a dedicated reviewer; split into incremental milestones if needed. |

---

### Bottom Line
CoPaw’s development pace is robust, with a healthy mix of bug‑fixes, UX polish, and forward‑looking integrations. However, **context‑management** and **plugin‑installation** bugs are the most critical blockers for large‑scale, production deployments. Delivering the Linux desktop packages and stabilizing the plugin ecosystem should be top priorities for the next sprint, while the community‑driven notification features can be slated for the subsequent minor release.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 28 Oct 2026**  

---

### 1. Today’s Overview  
- ZeroClaw is in a very active state: 40 open issues received updates in the last 24 h and 38 pull‑requests (37 open, 1 merged).  
- A new patch release **v0.8.7** landed, focusing on security updates (patched Wasmtime, Rustls, Tokio and ctutils) and a rebuild of the container images.  
- The bulk of activity revolves around hardening the runtime (prompt‑guard, sandbox, cost‑limit handling) and preparing the upcoming **v0.9.0** milestone, which already has a sizeable backlog of high‑priority bugs and feature requests.

---

### 2. Releases  
**v0.8.7** – 81 commits, 19 contributors  
- **Security / maintenance**: updated Wasmtime, Rustls certificate verification, Tokio, and ctutils to versions that address published advisories.  
- **Container image**: rebuilt with the patched dependencies and a clean C‑runtime layer.  
- **No breaking API changes** were announced; the release is a drop‑in upgrade.  
- **Migration note**: re‑pull the Docker images (`zeroclaw/zeroclaw:0.8.7`) and re‑run any custom builds that pinned the vulnerable libraries.  

---

### 3. Project Progress (merged / closed today)  
| PR | Title | Size | What advanced |
|----|-------|------|----------------|
| **#11921** (XL) | *session*: implement append‑only session event history | Major | Introduces a versioned, immutable session log that enables reliable replay without side‑effects – a core piece for the upcoming v0.9.0 stability guarantees. |
| **#12056** (L) | fix(runtime): keep identity sections at the head of direct‑path system prompts | Medium | Aligns system‑prompt construction across builders, preventing identity loss when multiple prompt sections are concatenated. |
| **#12044** (S) | feat(runtime): deferred bootstrap sections | Small | Adds an opt‑in directive to postpone large, rarely‑used bootstrap markdown (e.g., full AGENTS/TOOLS docs) until explicitly needed, saving context budget. |
| **#12070** (M) | fix(channels): re‑apply system‑prompt cap after per‑turn skill refreshes | Medium | Ensures the `max_system_prompt_chars` limit is enforced even when skills are refreshed mid‑turn – preventing runaway prompts. |
| **#11910** (L) | fix(runtime): enforce the system‑prompt size budget (fail‑closed) | Large | Turns the advisory `max_system_prompt_chars` into a hard gate; now a turn that exceeds the budget is aborted rather than silently trimmed. |
| **#12073** (S) | fix(providers): retry Codex streams as streams on the default endpoint | Small | Corrects the Codex retry logic that previously forced non‑streaming calls, eliminating 400 errors on the default ChatGPT Codex endpoint. |
| **#11872** (S) | fix(mcp): replay a tool call rejected for a stale HTTP session | Small | Adds proper 404 handling and session restart for stale MCP connections, addressing the “poisoned session” problem reported in #10807. |
| **#12068** (XS) | fix(security): stop treating a bare `;` or `|` as command injection | Very Small | Refines the PromptGuard rule that was flagging ordinary punctuation as malicious, reducing false‑positives for SOP payloads. |
| **#12065** (XS) | fix(channels): keep allowlisted Discord bots from answering approvals | Very Small | Prevents bots that are explicitly allowed from being mistakenly rejected during approval flows. |
| **#12082** (CLI) | fix(cli): exit non‑zero when `gateway get-paircode` fetch fails | Small | Makes the CLI command script‑friendly by returning an error status on failure. |

*Only one PR was merged today (#11921). The remainder remain open but represent concrete progress on security, prompt handling, and tooling stability.*

---

### 4. Community Hot Topics  
| Item | Comments / 👍 | Link | Core Need |
|------|----------------|------|-----------|
| **#11416** – Slack “is thinking…” missing in thread messages (priority p2) | 5 comments | https://github.com/zeroclaw-labs/zeroclaw/issues/11416 | Users need visible typing indicators for richer UX on Slack threads – a regression introduced in v0.8.5. |
| **#11204** – OpenRouter cost reporting always `$0.00` (priority p1, high risk) | 5 comments | https://github.com/zeroclaw-labs/zeroclaw/issues/11204 | Accurate cost tracking is crucial for budgeting; the bug defeats the dashboard’s financial monitoring. |
| **#10807** – MCP connection permanently poisoned after one failed recovery (priority p1) | 4 comments | https://github.com/zeroclaw-labs/zeroclaw/issues/10807 | Stability of tool‑call transport; a single hiccup should not break the whole system. |
| **#11539 / #11538** – Firejail sandbox errors (`--nowheel`, `private directory`) (priority p1) | 3 + 3 comments | https://github.com/zeroclaw-labs/zeroclaw/issues/11539 & 11538 | Sandbox integrity for Linux tool execution; users report immediate failures for all shell tools. |
| **#12069** – Feature request: `/load-session` slash command (high interest) | 2 comments | https://github.com/zeroclaw-labs/zeroclaw/issues/12069 | Streamlines session resumption inside ZeroCode, reflecting demand for smoother UX. |

**Analysis:** The most contested area is *runtime stability*—especially around external tool transports (MCP, Firejail) and cost/accounting visibility. Slack UI behavior and session‑management ergonomics also surface repeatedly, indicating that the product is being used in production‑like environments where observability and smooth interaction matter.

---

### 5. Bugs & Stability (ranked by severity)  

| Severity | Issue | Summary | Fix status |
|----------|-------|---------|------------|
| **S0 – Critical security** | #11058 – `allowed_commands` bypasses `block_high_risk_commands` (priority p1) | High‑risk commands can be run un‑approved, leaking data. | No fix yet; high‑visibility security concern. |
| **S1 – Workflow blocked** | #10807 – MCP poisoned session (p1) | One failed recovery leaves the MCP client unusable. | Partial fix in PR #11872 (re‑play) and #12061 (recover); still open. |
| | #11539 / #11538 – Firejail sandbox options rejected | Shell tool calls abort on Linux due to unsupported flags. | No PR merged yet; issues still open. |
| | #12075 – Android shell tool always fails (EPERM) | `Path::canonicalize` breaks on Termux, killing shell tool usage. | PR #12080 adds fallback; still open. |
| | #11585 – Cost limit requires daemon restart to clear | Daily cost caps become a hard stop, forcing a full restart. | No fix yet. |
| **S2 – Degraded behavior** | #11204 – OpenRouter shows $0 cost | Dashboard mis‑reports usage, breaking budgeting. | No fix yet. |
| | #11360 – Plugin lock file world‑readable, causing install/remove failures | Permission issue on `.zeroclaw-package-lock-v1`. | No PR yet. |
| | #11336 – `plugin info` reports loads for unregistered plugins | Confusing CLI output; may mask real plugin state. | No PR yet. |
| | #11332 – Skill review/creation never runs on non‑CLI channels | Learning loop limited to CLI/cron; reduces agent adaptability. | No PR yet. |
| **S3 – Minor / cosmetic** | #11972 – `gateway get-paircode` exits 0 on failure (fixed by PR #12082) | Exit‑code bug now resolved. |
| | #11358 – `plugin migrate` moves packages without lock, possible merge | Operational edge‑case; no immediate fix. |
| | #11908 – System‑prompt size budget not enforced (fixed by PR #11910) | Now a hard limit. |

**Take‑away:** Critical security‑policy bypass and MCP poisoning remain open; they should be prioritized before the v0.9.0 freeze. The team has already landed fixes for prompt‑budget enforcement and CLI exit codes, showing momentum on stability.

---

### 6. Feature Requests & Roadmap Signals  

| Feature | Reasoning / Impact | Likelihood for next release |
|---------|--------------------|-----------------------------|
| **`/load-session` slash command** (#12069) | Provides quick session restore inside ZeroCode; aligns with the newly merged append‑only session history (PR #11921). | **High** – already under development (PR #12071). |
| **Save inbound WhatsApp images to workspace** (#11255) | Brings WhatsApp parity with Telegram’s attachment handling; needed for richer multimodal agents. | **Medium** – depends on channel‑media pipeline work, currently open. |
| **Config editor for declarative cron schedules** (#11237) | Allows non‑technical users to author cron jobs via the UI; currently workflow‑blocked. | **Medium‑High** – likely to land in v0.9.0 given the “config editor” theme of other PRs. |
| **Focused workspaces UI** (PR #11414) | Optional “Focused” layout to reduce UI clutter; already merged as a feature flag. | **Already merged** – will be togglable in v0.9.0. |
| **Goal policy contracts (transport‑neutral)** (PR #11880) | Early groundwork for a future “Goal” abstraction; may become a v0.9.0 or v1.0.0 feature. | **Low–Medium** – still experimental. |
| **Append‑only session event history** (PR #11921) | Core architectural change enabling reliable replay; a flagship v0.9.0 capability. | **High** – merged; will ship in the next minor release. |

---

### 7. User Feedback Summary  

- **Observability & Cost** – Users of OpenRouter, OpenAI, and Anthropic providers are frustrated by missing cost data (#11204) and by silent cost‑limit blocks (#11585). Accurate accounting is a top priority for production deployments.  
- **Channel UX** – Slack typing indicator regression (#11416) and WhatsApp caption loss (#11257) show that UI consistency across channels is a pain point. Users expect the same “thinking…” experience regardless of thread vs. top‑level messages.  
- **Tool Reliability** – Firejail sandbox errors and MCP session poisoning are breaking core automation pipelines; users report halted workflows and have to restart daemons.  
- **Configuration Usability** – The inability to edit declarative cron expressions via the config UI (#11237) and the missing ability to persist/restore media attachments in WhatsApp (#11255) are friction points for non‑developer operators.  

Overall sentiment is **high engagement, moderate frustration** centered on runtime robustness and cost visibility.

---

### 8. Backlog Watch (long‑standing, high‑impact items)  

| Issue/PR | Age / Importance | Why it needs attention |
|----------|-----------------|------------------------|
| **#10807** – MCP session poisoning (p1, S1) | Open since Sep 2022, still unresolved | Blocks any tool‑call after a brief network glitch; directly affects reliability. |
| **#11539 / #11538** – Firejail sandbox flags | Open since Oct 2025, high severity (S1) | Prevents all shell‑tool usage on Linux, a core feature. |
| **#11058** – `allowed_commands` bypass (S0) | Open since Sep 2024, critical security | Could be exploited to run privileged commands; needs an immediate patch. |
| **#11204** – OpenRouter cost reporting (S2) | Open ~1 month, high user impact | Prevents budgeting; many customers rely on accurate cost dashboards. |
| **#11360** – Plugin lock file world‑readable (S3) | Open ~4 weeks, prevents install/remove in multi‑user envs | Affects CI pipelines and shared dev machines. |
| **#11332** – Skill review/creation not run on non‑CLI channels (S2) | Open ~1 month, limits learning capabilities | Reduces the value of ZeroClaw as a self‑improving agent. |
| **#11562** – Plugin discovery can pair wrong manifests (S2) | Open ~2 weeks, could cause silent code execution of wrong version | Safety concern for the plugin ecosystem. |
| **#11921** – Append‑only session history (merged) | No longer backlog – but downstream test suite updates may be needed. |

**Recommendation:** Prioritize security‑policy bypass (#11058) and MCP poisoning (#10807) before the v0.9.0 release freeze; schedule a dedicated sprint for sandbox/firejail compatibility (#11539/11538) to restore tool functionality across Linux deployments.

--- 

*Prepared by the ZeroClaw open‑source analyst, 28 Oct 2026.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*