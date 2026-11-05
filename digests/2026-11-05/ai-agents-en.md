# OpenClaw Ecosystem Digest 2026-11-05

> Issues: 136 | PRs: 500 | Projects covered: 12 | Generated: 2026-11-05 06:15 UTC

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

**OpenClaw Project Digest – 5 Nov 2026**  

---

### 1. Today’s Overview  
- The repository is in a **high‑velocity state**: 136 issues were touched in the last 24 h (61 still open) and **500 PRs** were updated, of which **333 remain open** and **167 have been merged or closed**.  
- No new release was cut, but a large batch of maintenance‑level PRs landed (question‑custody persistence, durable‑question validators, iOS file‑preview support).  
- The most visible signals are a wave of **session‑state and data‑loss bugs** (SQLite growth, gateway stop on macOS, tool‑ordering loss) and a **steady stream of feature‑request discussions** around agent‑to‑agent hand‑offs, UI ergonomics, and cross‑platform integrations.  

---

### 2. Releases  
*No new tags or versioned releases were published in the last 24 h.*  

---

### 3. Project Progress (PRs)  
- **167 PRs** were merged/closed today, moving a broad set of stability and observability work forward. Highlights include:  

| PR # | Title / Goal | Area | Link |
|------|--------------|------|------|
| **#193220** | Add durable‑question protocol validators | Gateway / Protocol | <https://github.com/openclaw/openclaw/pull/193220> |
| **#168917** | Preserve question custody in canonical session storage | Sessions / Persistence | <https://github.com/openclaw/openclaw/pull/168917> |
| **#193235** | iOS UI – browse & preview files shared in a conversation | iOS App | <https://github.com/openclaw/openclaw/pull/193235> |
| **#186667** | Prevent repeated inline‑code paragraphs from stalling the Gateway | Core / Parser | <https://github.com/openclaw/openclaw/pull/186667> |
| **#193202** | Stop “Online” count refreshes when the pane is closed | Web UI performance | <https://github.com/openclaw/openclaw/pull/193202> |
| **#193239** | Docs: warn that plugin discovery instances double‑deliver diagnostics | SDK / Docs | <https://github.com/openclaw/openclaw/pull/193239> |
| **#188127** | Discord non‑Latin channel names resolve incorrectly | Channel adapters | <https://github.com/openclaw/openclaw/pull/188127> |
| **#193244** | Preserve healthy fallbacks after Zen model access refusals | Model‑fallback logic | <https://github.com/openclaw/openclaw/pull/193244> |

These changes collectively improve **session durability**, **tool‑pipeline reliability**, and **cross‑platform user experience** while laying groundwork for upcoming features (e.g., durable‑question hand‑offs).  

---

### 4. Community Hot Topics (Most‑Commented Issues)  

| Issue # | Summary (top‑line) | Labels / Impact | Comments | Link |
|---------|-------------------|------------------|----------|------|
| **112423** (25 cmt) | Large SQLite transcript cleanup blocks the gateway event loop, causing latency spikes. | `impact:session-state` – **P2** | 25 | <https://github.com/openclaw/openclaw/issues/112423> |
| **114612** (19 cmt) | `memory_index_chunks` & `memory_embedding_cache` tables grow without eviction → disk fill‑up. | `impact:crash-loop` – **P2** | 19 | <https://github.com/openclaw/openclaw/issues/114612> |
| **191944** (16 cmt) | `gateway stop`/`--force` fails on macOS Intel with “Process ancestry could not be fully inspected”. | `impact:ux-friction` – **P2** | 16 | <https://github.com/openclaw/openclaw/issues/191944> |
| **44309** (16 cmt) | Feature request: one‑way dispatch mode for agent‑to‑agent hand‑offs (no reply‑back ping‑pong). | `impact:session-state` – **P2** | 16 | <https://github.com/openclaw/openclaw/issues/44309> |
| **126950** (13 cmt) | Telegram opaque callback payloads (`tgcb1:`) silently dropped for non‑plugin callers. | `impact:message-loss` – **P1** | 13 | <https://github.com/openclaw/openclaw/issues/126950> |
| **50291** (12 cmt) | Plugin hooks lack trace‑context (messageId, runId, parentSpanId) → poor observability. | `impact:other` – **P2** | 12 | <https://github.com/openclaw/openclaw/issues/50291> |
| **125314** (11 cmt) | Codex direct‑message tool serialises full manager schema, breaking batching. | `impact:other` – **P2** | 11 | <https://github.com/openclaw/openclaw/issues/125314> |
| **121232** (11 cmt) | Memory‑core “dreaming” ranker nominates candidates that the applier always rejects. | `impact:session-state` – **P2** | 11 | <https://github.com/openclaw/openclaw/issues/121232> |

**Underlying needs:**  
- **Reliability of persistence layers** (SQLite growth, transcript cleanup).  
- **Cross‑platform stability** (macOS gateway stop, Telegram callback handling).  
- **Observability & tracing** for plugins.  
- **Control over agent‑to‑agent communication patterns** (dispatch‑only mode).  

---

### 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue # | Core Problem | Impact | Fix Status |
|----------|---------|--------------|--------|-----------|
| **Critical** | **#112423** – SQLite cleanup blocks event loop | Full transcript materialisation on gateway thread stalls all traffic. | Session‑wide latency / possible denial‑of‑service. | Closed (no fix merged yet). |
| **Critical** | **#114612** – Unbounded SQLite growth | No retention policy → disk exhaustion. | Crash‑loop on long‑running agents. | Closed (no fix merged yet). |
| **High** | **#191944** – macOS gateway stop failure | Process‑ancestry inspection error prevents graceful shutdown. | Ops × shutdown failures on macOS. | Open – awaiting maintainer review. |
| **High** | **#126950** – Telegram opaque callback drop | Callbacks with `tgcb1:` prefix ignored outside plugins. | Message‑loss for bots using inline buttons. | Open – high priority (P1). |
| **Medium** | **#121232** – Memory‑core dreaming ranker/applier mismatch | Candidates always rejected, producing “Ranked N, Promoted 0”. | Silent degradation of long‑term memory reasoning. | Open. |
| **Medium** | **#122133** – Exec child processes survive session timeout | Orphaned processes remain after agent termination. | Resource leakage on long‑run sessions. | Closed (fix merged). |
| **Medium** | **#115354** – Catch‑all binding overrides ACP bindings | Binding precedence bug leads to unexpected routing. | Message‑loss / wrong model use. | Closed (bug fixed). |
| **Low** | **#115076** – Webchat misclassifies mixed text+image messages | `source_modality` set to *image* only. | Minor UX friction for multimodal chats. | Closed. |

*Only a few of the critical bugs have an associated merged fix; most remain open, indicating a backlog that should be prioritized for the next stable release.*

---

### 6. Feature Requests & Roadmap Signals  

| Issue # | Requested Feature | Why it matters | Likelihood for next release |
|---------|-------------------|----------------|----------------------------|
| **#44309** – One‑way dispatch mode | Enables fire‑and‑forget agent‑to‑agent hand‑offs, reducing ping‑pong latency. | High demand from teams building pipelines. | **Medium‑High** – already being discussed; could land in the next minor. |
| **#168917 / #168912** – Question custody persistence | Guarantees that pending questions survive gateway restarts. | Core to reliability of long‑running workflows. | **High** – PRs already open; expect inclusion. |
| **#193235** – iOS file‑preview UI | Lets users open attached artifacts directly from the iOS app. | Improves mobile productivity. | **High** – PR open, likely in the next iOS update. |
| **#97993** – CarPlay support for iOS app | Extends safe in‑vehicle usage. | Community request from mobile‑first users. | **Low‑Medium** – UI‑heavy, longer timeline. |
| **#80843** – Web‑search provider fallback chain | Automatic fallback on quota or network failure. | Reduces silent failures in tool calls. | **Medium** – similar fallback logic already under PR review. |
| **#187539** – Memory‑core indexing timeout fix | Prevents `memory_search` dead‑locks with local embedding servers. | Directly ties to stability of vector‑store usage. | **High** – PR targeting fix, likely merged soon. |
| **#168743** – macOS Control UI reconnect throttling | Caps repeated reconnect attempts after auth failure. | Improves UX on unstable network environments. | **Medium** – bug under investigation. |

**Roadmap inference:** The team is heavily investing in **session durability** (question custody, durable‑question validators) and **observability** (tracing, plugin diagnostics). Features that reduce hand‑off latency and improve mobile ergonomics (iOS preview, eventual CarPlay) are also gaining traction.

---

### 7. User Feedback Summary  

- **Performance pain points** – `openclaw --help` slows >30× when a `plugins` key exists (Issue #114067). Users perceive the CLI as sluggish in typical workflows.  
- **Message loss** – Telegram callbacks, Slack auth‑test timeout, and model‑fallback silent‑finish bugs (Issues #126950, #117445, #188647) cause real‑world conversation gaps, leading to mistrust of the platform.  
- **Session state inconsistencies** – `sessions list` misreports archive state (Issue #124524) and `gateway stop` failures on macOS (Issue #191944) break operational scripts.  
- **UX friction** – Workspace panel rendering bugs on macOS (Issue #96660), mis‑classification of multimedia messages (Issue #115076), and missing “edit” action on iMessage (Issue #173599) diminish day‑to‑day productivity.  
- **Observability gaps** – Missing trace IDs in plugin hooks (Issue #50291) make debugging distributed tool pipelines difficult.  

Overall sentiment skews **moderately dissatisfied** where reliability or performance defects directly impact production workloads, while **high satisfaction** is reported for new tooling (e.g., codex sandbox, durable‑question handling) that has already been merged.

---

### 8. Backlog Watch (Long‑Open, High‑Priority Items)

| Issue # | Title / Core Need | Current Status | Reason for Attention |
|---------|-------------------|----------------|----------------------|
| **#44309** | One‑way dispatch mode for A2A hand‑offs | Open, stale (P2) | Core architectural change; no maintainer response yet. |
| **#191944** | macOS `gateway stop` fails with ancestry error | Open, recent activity (P2) | Blocks automation scripts on macOS CI runners. |
| **#126950** | Telegram opaque callback payload drop | Open, P1 | Direct message‑loss for a major channel. |
| **#121232** | Memory‑core dreaming ranker/applier mismatch | Open (P2) | Affects long‑term memory reasoning; no fix yet. |
| **#182647** | Cloud‑worker turn fails before inference | Open (P1) | Prevents use of cloud workers; could be a blocker for scaling. |
| **#164065** | Telegram `requireMention` not gating bare slash commands | Open (P2) | Security/UX concern for multi‑bot groups. |
| **#168743** | macOS Control UI rapid reconnect after auth failure | Open (P2) | Leads to noisy logs and potential throttling. |
| **#168917** (PR) | Preserve question custody – still open, waiting on maintainer look | Open | Needed for durability; PR review pending. |
| **#168912** (PR) | Retain authorization in original session store | Open | Security‑critical for session continuity. |
| **#193220** (PR) | Durable question protocol validators – open, ready for maintainer look | Open | Foundation for upcoming stable‑release feature set. |

These items represent the **most visible risk** to production stability and the **key signals** for the next development sprint. Prompt maintainer triage or community sponsorship will be essential to keep the project on a healthy trajectory.  

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison – Personal‑AI‑Assistant / Agent Open‑Source Ecosystem  
( snapshot : 5 Nov 2026 )**  

---

### 1. Ecosystem Overview  
The open‑source personal‑AI‑assistant landscape is maturing from experimental “agent cores” into a layered ecosystem of **runtime engines, UI front‑ends, and pluggable tool‑catalogs**. Most projects are still **pre‑v1** (semantic‑version 0.x) and focus on **session durability, secure multi‑agent hand‑offs, and cross‑platform UI polish**. A clear divide is emerging between **“gateway‑first” stacks** (OpenClaw, Hermes‑Agent, ZeroClaw) that expose a low‑level protocol, and **“application‑first” stacks** (NanoBot, LobsterAI, CoPaw) that ship integrated desktop/web experiences.  

---

### 2. Activity Comparison  

| Project | Issues (touched last 24 h) | PRs (touched last 24 h) | Release in last 24 h | Health Score* |
|---------|---------------------------|------------------------|----------------------|--------------|
| **OpenClaw** | 8 open (61 still open) | 500 updated (333 open) | – | 4.2 |
| **NanoBot** | 4 touched (3 closed) | 15 updated (5 open) | – | 4.0 |
| **Hermes‑Agent** | 21 touched (all open) | 50 updated (35 open) | – | 4.1 |
| **PicoClaw** | 5 touched (all open) | 7 updated (2 open) | – | 3.2 |
| **NullClaw** | 0 | 0 | – | 2.5 (inactive) |
| **IronClaw** | 0 | 1 (open) | – | 2.8 (maintenance) |
| **LobsterAI** | 1 new (open) | 16 updated (13 merged) | – | 4.3 |
| **Moltis** | 0 | 1 (open) | – | 2.9 |
| **CoPaw** | 9 touched (6 open) | 50 updated (31 open) | – | 4.0 |
| **ZeptoClaw** | 0 | 0 | – | 2.2 ( dormant ) |
| **ZeroClaw** | 18 touched (16 open) | 50 updated (46 open) | – | 4.1 |
| **NanoClaw** | 1 new (open) | 16 updated (2 merged) | – | 3.8 |

\*Health Score (1 = stale, 5 = high velocity, low critical open bugs, regular releases). Scores combine issue‑to‑PR ratio, severity backlog, and recent merge activity.

---

### 3. OpenClaw’s Position  

| Dimension | OpenClaw | Peer Landscape |
|-----------|----------|----------------|
| **Core advantage** | Deep **session‑durability** (canonical storage, durable‑question validators) and **observable gateway** (trace IDs, diagnostics) – the only project with a dedicated “question custody” protocol. | Most peers still rely on ad‑hoc SQLite cleanup or lack persistent question handling. |
| **Technical approach** | **Protocol‑centric** gateway that abstracts plugins, tools, and UI via a unified *gateway* process; heavy use of **SQLite** for transcript durability and **protobuf‑based** message envelopes. | NanoBot, LobsterAI, CoPaw embed tool execution inside the UI process; Hermes‑Agent splits gateway & tool runners but focuses on *fallback‑classifier* rather than persistent questions. |
| **Community size** | > 500 PRs / day, 136 issues / day – the largest raw activity in the snapshot. | Hermes‑Agent (50 PRs) and ZeroClaw (50 PRs) are the next busiest; NanoBot and CoPaw lag slightly behind at ~15–20 PRs daily. |
| **Release cadence** | No tag in the last 24 h, but a steady flow of *maintenance* PRs; upcoming “durable‑question” feature set suggests a **minor release** soon. | LobsterAI, NanoBot, and CoPaw already shipped UI‑focused patches; ZeroClaw is preparing a security‑hardening release; IronClaw is in a dependency‑bump lull. |

*Result:* OpenClaw is the **de‑facto reference implementation for a durable, observable agent gateway**, making it the natural foundation for any ecosystem that needs reliable hand‑offs and audit trails.

---

### 4. Shared Technical Focus Areas  

| Need | Projects Raising It | Typical Implementation Gap |
|------|----------------------|-----------------------------|
| **Session durability / crash‑recovery** | OpenClaw, NanoBot, CoPaw, ZeroClaw, LobsterAI | Persistent SQLite/append‑only logs; “question custody” & tool‑result checkpointing. |
| **Cross‑platform stability (macOS/Windows)** | OpenClaw (gateway stop), Hermes‑Agent (OIDC rate‑limit), CoPaw (Hub on Windows), ZeroClaw (OIDC, OIDC CSRF), PicoClaw (gateway stop on macOS) | Platform‑specific process‑tree inspection, native time‑stamp APIs, proper file‑handle limits. |
| **Observability & tracing** | OpenClaw (trace‑context in plugins), Hermes‑Agent (error‑classifier, tracing), ZeroClaw (SOP & RPC authority logging) | Standardised span IDs, structured logs, optional OpenTelemetry exporters. |
| **Secure token / OIDC handling** | Hermes‑Agent, ZeroClaw, NanoClaw (Telegram callbacks), LobsterAI (account‑ban) | Rate‑limiting bearers, CSRF‑safe callbacks, binding pairing tokens to roster users. |
| **Tool‑pipeline reliability (retry, fallback)** | NanoBot (retry logic), Hermes‑Agent (fallback classifier), ZeroClaw (bounded OIDC verification), OpenClaw (tool‑pipeline validators) | Exponential back‑off, per‑tool circuit breakers, explicit fallback chains. |
| **UI ergonomics for long‑running turns** | LobsterAI (multi‑image confirm), CoPaw (progress meters), NanoBot (tool progress), ZeroClaw (dashboard chat) | Real‑time progress bars, “single‑click approve‑all” actions, non‑blocking UI updates. |

These overlaps indicate a **convergent minimal viable stack**: durable session store + cross‑platform gateway + observable tracing + secure auth + robust tool‑retry.

---

### 5. Differentiation Analysis  

| Project | Core Feature Focus | Primary Target Users | Architecture Highlights |
|---------|--------------------|----------------------|------------------------|
| **OpenClaw** | Durable question protocol, plugin‑first extensibility | Platform integrators, multi‑agent orchestration platforms | Separate gateway process, protobuf/SQLite, plug‑discoverable SDK. |
| **NanoBot** | Tight UI/desktop experience, sandboxed sub‑agents | End‑users on Windows/macOS (productivity) | Embedded runtime, sandboxed shells, WebUI with live tool‑progress. |
| **Hermes‑Agent** | Provider‑catalog & fallback logic, ROS/WorkSignal plugins | Robotics and enterprise workflow automation | Shared error‑classifier, extensive provider catalog, ROS‑2 bridge. |
| **PicoClaw** | Minimal gateway + WebSocket interface, mobile‑first iOS support | Embedded devices / hobbyist deployments | Very small core, optional WebSocket flag, iOS file preview. |
| **LobsterAI** | Performance‑optimized startup, “capability marketplace” | Power‑users & enterprise teams needing fast launch | Aggressive start‑up pruning, bundled skill catalog, marketplace UI. |
| **CoPaw** | Append‑only session store, Windows‑specific stability, local‑model installer | Researchers & on‑premise teams (multi‑model) | SQLite append‑only log, Piccolo runtime installer, Windows crypto‑store fix. |
| **ZeroClaw** | Security hardening (OIDC, SOP sandbox, authority model) | High‑trust/regulated environments (finance, health) | Fine‑grained authority, OIDC rate‑limit caps, SOP sandbox with token binding. |
| **Moltis** | Privacy‑first key‑less web‑search provider | Users avoiding API‑key costs | New “Keenable” provider, minimal core changes. |
| **IronClaw** | Dependency hygiene (zip crate bump) – currently maintenance mode | Rust‑ecosystem developers needing a stable zip library | Pure‑Rust lib, no higher‑level agent features yet. |

---

### 6. Community Momentum & Maturity  

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapidly iterating (high velocity)** | OpenClaw, Hermes‑Agent, ZeroClaw, LobsterAI, CoPaw | > 30 PRs / day, many critical bugs addressed within 1‑2 days; active issue triage. |
| **Steady growth (moderate velocity)** | NanoBot, NanoClaw, NanoClaw, NanoClaw | 5‑15 PRs / day, focused on bug‑fixes and UI polish; releases lag a few weeks behind PRs. |
| **Stabilizing / maintenance** | PicoClaw, IronClaw, Moltis, ZeptoClaw, NullClaw | Few PRs, no recent releases; primarily dependency bumps or minor patches. |
| **Dormant** | NullClaw, ZeptoClaw | No activity; risk of abandonment unless a community fork appears. |

Projects in the *rapid* tier are already delivering **security patches** and **session‑durability** features, suggesting they will be the default back‑ends for new deployments in the next 6‑12 months.

---

### 7. Trend Signals  

| Trend | Evidence Across Projects | Implications for Developers |
|-------|--------------------------|-----------------------------|
| **Durable, append‑only session logs** | OpenClaw (question custody), CoPaw (append‑only SQLite), ZeroClaw (session‑effect authority), NanoBot (checkpoint persistence) | Agents must survive process restarts; designing tooling around immutable turn IDs will simplify debugging and compliance. |
| **Secure, rate‑limited OIDC & token binding** | Hermes‑Agent (OIDC caps), ZeroClaw (OIDC limiter & CSRF binding), NanoClaw (Telegram opaque callbacks) | Future agents should expose a **standard OIDC façade** with built‑in throttling; reuse of those primitives reduces attack surface. |
| **Tool‑pipeline resilience (retry, fallback, back‑off)** | NanoBot (retry/back‑off), Hermes‑Agent (fallback classifier), LobsterAI (tool‑result checkpoint), OpenClaw (protocol validators) | Expectation that any external tool call returns a **structured status** (success / retryable / fatal) – frameworks will soon ship helper libraries to encode this contract. |
| **Multi‑modal UI ergonomics (single‑click approve‑all, live progress, file‑preview)** | LobsterAI (image‑confirm), CoPaw (progress meters), NanoBot (live graph sidebar), OpenClaw (UI‑performance tweaks) | UI toolkits are converging on **progressive disclosure** patterns; developers building custom front‑ends should adopt the same event‑stream conventions. |
| **Privacy‑oriented provider alternatives** | Moltis (key‑less search), ZeroClaw (OIDC token binding), NanoClaw (Telegram opaque callbacks) | Market pressure to **avoid outbound API keys** is rising; a plug‑in API that can swap providers without code change is becoming a core requirement. |
| **Cross‑platform gateway reliability** | OpenClaw (macOS gateway stop), ZeroClaw (OIDC bearer caps), CoPaw (Windows crypto store), Hermès‑Agent (macOS process ancestry) | Expect upcoming **gateway SDKs** to expose platform‑agnostic abstractions for process inspection, FD limits, and signal handling. |

*Take‑away:* The next wave of personal‑AI‑assistant frameworks will be judged on **how well they guarantee session continuity, security, and transparent tool execution** while providing a **lightweight, cross‑platform gateway** that can be embedded in diverse front‑ends (desktop, mobile, robotics).

--- 

*Prepared for technical decision‑makers and developers evaluating open‑source AI‑assistant stacks – 5 Nov 2026.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot – Project Digest (2026‑11‑05)**  
*Compiled from activity on the `HKUDS/nanobot` repository (issues, PRs, CI runs).*

---

## 1. Today’s Overview
- The project saw **moderate activity**: 4 issues were touched (3 closed, 1 still open) and 15 PRs were updated (10 merged/closed, 5 still open).  
- No new releases were cut, but the bulk of today’s work focused on **bug‑fixes, stability improvements, and incremental UI enhancements**.  
- CI stability remains a hot concern – several PRs address flaky Windows‑based tests and race conditions in the durable checkpoint system.  

---

## 2. Releases
*No new version was published on 2026‑11‑05, so there are no changelogs, breaking‑change notes, or migration instructions to report.*

---

## 3. Project Progress (Merged / Closed PRs)

| PR # | Title (Team) | Category | Key Outcome |
|------|--------------|----------|--------------|
| **#6563** | fix(security): enforce TLS, shell and workspace boundaries (Re‑bin) | Security / Runtime | Tightened network security (TLS verification) and sandboxed shell execution; adds explicit CA trust handling. |
| **#6565** | fix(agent): keep idle scans off the inbound consumer (Re‑bin) | Stability | Prevents idle‑scan blocking of `/stop` commands; moves scans onto the existing track loop, fixing a Windows CI dead‑lock. |
| **#6561** | fix(subagent): inherit parent tool configuration (chengyongru) | Bugfix | Propagates `tools.cliApps.enable` and timeout settings to sub‑agents; closes #6554 (sub‑agent CLI app leak). |
| **#6559** | fix(webui): preserve MCP ready state after plugin toggles (chengyongru) | UI / Integration | Maintains “Ready” indicator for already‑connected MCPs when plugins are enabled/disabled. |
| **#6558** | fix(compaction): retain native state across retry and recovery (chengyongru) | Reliability | Stores compaction state across retries, avoiding duplicate compression after a generation failure. |
| **#6553** | fix(webui): update usage and tool progress during active turns (chengyongru) | UI / UX | Real‑time progress meters now stay current for long‑running goals, improving user feedback. |
| **#6560** | fix(webui): allow closing image settings without valid credentials (chengyongru) | UI | Dismisses the blocked settings dialog when the provider is unconfigured. |
| **#6564** | test: stabilize timing‑sensitive CI checks (Re‑bin) | CI | Extends timeout windows, eliminates flaky Windows CI failures. |
| **#6566** | test(webui): allow durable routing checks under CI load (Re‑bin) | CI | Adjusts checkpoint write expectations, preventing CI timeouts. |
| **#6533** | fix(providers): report DeepSeek generation interruptions (chengyongru) | Provider | DeepSeek `insufficient_system_resource` / `aborted` are now surfaced as errors, preventing partial answers from being stored as successful replies. |

*Open PRs of note* – **#6562** (live graph sidebar for file context) and **#6468** (drain parallel tools on cancelled runs) continue to await review.

---

## 4. Community Hot Topics
| Item | Type | Activity (comments / 👍) | Why it matters |
|------|------|--------------------------|----------------|
| **#6550** – *WebUI: model button does not reflect the active primary or fallback model* (Open) | Issue | 1 comment, 0 👍 | The composer UI misleads users about which model actually serviced a turn, especially when fallbacks are used. Correct visual feedback is essential for debugging and cost‑control. |
| **#6562** – *feat(webui): inspect file context in a live graph sidebar* (Open) | PR | No public comments yet, but high visibility because it adds a new debugging pane. | Enables developers to trace file‑based context and tool usage without leaving the chat, a strong UX request from power users. |
| **#6567** – *feat(webui): surface composer shortcut hints* (Closed) | PR | Closed today – implemented shortcut placeholders in 10 languages. | Directly addresses discoverability complaints; shows the project is responsive to UI ergonomics. |
| **#6554** – *Subagents ignore `tools.cliApps.enable: false`* (Closed) | Issue | 0 comments | Revealed a regression where sub‑agents re‑enabled a disabled CLI tool, a security‑relevant misconfiguration that has now been fixed (PR #6561). |
| **#6555** – *WebUI: image settings window cannot be closed* (Closed) | Issue | 0 comments | A blocking UI bug that prevented users from abandoning an unsaved image‑settings draft; fixed in PR #6560. |

**Underlying needs** – Users are repeatedly flagging **UI state synchronization** (model button, settings dialogs) and **visibility into internal processing** (file context graph, tool progress). The project’s recent PRs are striking a balance between fixing these pain points and tightening security/CI reliability.

---

## 5. Bugs & Stability (Severity‑Ranked)

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **Critical** | **#6554** (Subagent CLI leak) – sub‑agents could re‑expose `run_cli_app` despite `tools.cliApps.enable: false`. | Security‑relevant configuration bypass. | Fixed by **#6561** (merged). |
| **High** | **#6550** (Model button UI mismatch) – UI shows configured preset rather than runtime‑selected model/fallback. | Misleads operators about model usage, may affect cost & debugging. | Still open; no fix yet. |
| **High** | **#6555** (Image settings window stuck) – modal cannot be dismissed. | Blocks workflow when provider credentials are missing. | Fixed by **#6560** (merged). |
| **Medium** | **#6533** (DeepSeek interruption not reported) – partial answers saved as successful replies. | Affects answer quality & downstream analytics. | Fixed by **#6533** (merged). |
| **Medium** | **#6558** (Compaction state lost on retry) – repeated compression of same history after failure. | Increases token usage and can cause inconsistencies. | Fixed by **#6558** (merged). |
| **Medium** | **#6562** (Live graph sidebar) – not a bug but a feature that could introduce UI regressions if not carefully integrated. | Pending review; potential impact on performance. | Open. |
| **Low** | **#6559** (MCP ready state hidden after plugin toggle) – UI mis‑reporting. | Fixed by **#6559** (merged). |
| **Low** | CI flakiness on Windows (multiple test‑timing PRs) – not a user‑visible bug but hampers CI reliability. | Mitigated by **#6564**, **#6566**, **#6565** (merged). |

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Potential Integration |
|---------|--------|------------------------|
| **Sprouts Data MCP preset** (B2B people/company lookup) – Issue #6557 (closed) | Community contributor | The preset was added, indicating willingness to support third‑party MCPs. Future roadmap may include a **plug‑and‑play MCP marketplace**. |
| **Live file‑context graph** – PR #6562 | Contributor | If merged, it will become a core debugging feature; likely to be shipped in the next minor release. |
| **Composer shortcut hints** – PR #6567 (already merged) | Community & UX | Demonstrates a push toward richer, language‑aware UI assistance; expect more context‑aware hints in upcoming UI work. |
| **Improved multi‑tool checkpoint persistence** – PR #5946 (open) | Long‑standing issue | Signals demand for stronger crash‑recovery; may be prioritized for the next stability sprint. |

*Prediction*: The next release will likely bundle the **live graph sidebar**, **shortcut hints**, and the several security/CI fixes already merged, delivering a more resilient and developer‑friendly version.

---

## 7. User Feedback Summary
- **Pain Points**  
  - UI state mismatches (model button, image settings, MCP ready indicator) cause confusion and workflow interruptions.  
  - Sub‑agent configuration inheritance bugs expose users to unexpected tool availability.  
  - Flaky CI on Windows platforms delays contributions and introduces uncertainty for Windows‑based developers.  
- **Positive Signals**  
  - Prompt response to UI bugs (e.g., image settings, MCP state) shows a responsive maintainer team.  
  - Security hardening (TLS verification, sandboxed shells) was well‑received, indicating maturity.  
  - The community values **real‑time visibility** into internal processes (file‑context, tool progress), as reflected in multiple PRs targeting those areas.  

Overall satisfaction appears moderate: users appreciate quick fixes but demand more proactive UI consistency and better cross‑platform CI stability.

---

## 8. Backlog Watch (Needs Maintainer Attention)
| Item | Type | Age / Status | Why it matters |
|------|------|---------------|----------------|
| **#6468** – *fix(agent): drain parallel tools before finalizing cancelled runs* | Open PR (since 2026‑10‑26) | Parallel‑tool cancellation race condition still open; could lead to resource leaks and stuck sessions. |
| **#6262** – *Checkpoint completed tool results at execution‑batch boundaries* | Open PR (since 2026‑10‑16) | Addresses a durability gap that may cause data loss on gateway crashes; aligns with the crash‑recovery theme of PR #5946. |
| **#5946** – *feat(recovery): persist completed tool results at execution‑batch boundaries* | Open PR (since 2026‑09‑28) | Large, high‑impact feature for fault tolerance; still pending review. |
| **#6550** – *WebUI model button state* | Open Issue (since 2026‑11‑03) | Directly impacts operators’ ability to audit model usage; no fix yet. |
| **#6562** – *Live graph sidebar* | Open PR (since 2026‑11‑04) | Potentially high‑value UI addition but may need performance testing before merge. |

**Recommendation**: Prioritize the open PRs that address **durability and cancellation safety** (#6468, #6262, #5946) alongside the open UI bug #6550. These items align with the project’s stated focus on reliability and user‑visible correctness.

--- 

*Prepared by the NanoBot Project Analyst – 5 Nov 2026.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

## Hermes Agent – Project Digest (2026‑11‑05)

---

### 1. Today’s Overview  
- Development momentum is high: **21 issues** were touched in the last 24 h (all still open) and **50 pull‑requests** were updated, of which **35 remain open** and **15 were merged or closed**.  
- No new release was cut, indicating the maintainers are still consolidating changes before the next version bump.  
- The most urgent signals are a **critical resource‑leak bug in the gateway (P1)** and a suite of **provider‑API expansions** (especially around FAL image/video models) that are generating a wave of feature requests.

---

### 2. Releases  
*No new tag or release was published today; therefore no changelog, breaking‑change, or migration notes are applicable.*

---

### 3. Project Progress (Merged / Closed PRs)  

| PR | Title / Goal | Type | Highlights |
|---|---|---|---|
| **#149318** | *remote clients*: open cross‑profile chats, lazy‑resume, gzip reads | fix / performance | Consolidated three runtime‑stability fixes for remote dashboard clients; already merged. |
| **#148403** | Auxiliary retry / fallback logic moved to shared error‑classifier (C2) | fix / architecture | Improves consistency across compression, vision, search, etc.; prepares for upcoming “Code Health” plan. |
| **#149259** | Classify 5xx‑wrapped‑401 as *outage* instead of credential error | fix / auth | Reduces false‑negative auth failures for OpenAI‑style endpoints. |
| **#147326** | Retain voice‑transcript cache across native admission (Telegram) | bug‑fix | Stops duplicate transcript messages; stabilises voice turn handling. |
| **#55792** | Alias `input_schema` → `parameters` in tool registry | bug‑fix | Prevents silent loss of tool schemas; enhances plugin compatibility. |
| **#37717** | Recover reply context for inbound media replies | bug‑fix | Fixes loss of “reply‑to” pointers for voice/media messages. |
| **#145120** | TUI pager page‑key bug (last page keeps panel open) | bug‑fix | UI flow smoother for long reports. |
| **#149311** | Auto‑format / lint PRs (js) | ci‑automation | Keeps codebase tidy; auto‑merges after CI passes. |
| **#149313** | Add `hermes‑ros` plugin catalog entry | feature / catalog | Extends ecosystem to ROS/ROS 2 robot control. |
| **#149319** | Add WorkSignal MCP catalog entry | feature / catalog | Expands hiring‑tool integration. |
| **#149292** & **#149293** | State‑db connection handling improvements | fix / resource‑leak | Close‑over‑header‑probe FDs and track all live DB opens; directly attacks the SQLite‑FD leak reported in Issue #96027. |

*The above merges represent the bulk of today’s shipped changes, focusing on stability (gateway‑state handling, auth, tool registry) and ecosystem growth (plugin catalog).*

---

### 4. Community Hot Topics  

| Item | # Comments / Reactions | Core Concern | Link |
|---|---|---|---|
| **Issue #96027** – SQLite FD leak in gateway (P1) | 7 comments | Resource exhaustion on macOS (launchd 256‑fd limit). Critical for long‑running agents. | <https://github.com/NousResearch/hermes-agent/issues/96027> |
| **Issue #127811** – SessionDB writer reopened after registry retires handle (P2) | 2 comments | Multiplexed gateway self‑heal leaves stale writer; could corrupt session state. | <https://github.com/NousResearch/hermes-agent/issues/127811> |
| **Issue #54141** – Windows MCP servers cannot connect (P2) | 2 comments | Windows users lose all `hermes‑studio‑*` tools; logs show repeated “file not found”. | <https://github.com/NousResearch/hermes-agent/issues/54141> |
| **PR #147326** – Telegram voice cache duplicate | 0‑* (high reviewer interest) | Fixes duplicated transcriptions, a pain point for many messaging users. | <https://github.com/NousResearch/hermes-agent/pull/147326> |
| **PR #37717** – Reply‑context recovery for media | 0‑* (frequent mentions) | Restores proper threading of voice/media replies; UI consistency. | <https://github.com/NousResearch/hermes-agent/pull/37717> |
| **PR #149313** – `hermes‑ros` catalog entry | 0‑* (new plugin ecosystem) | Signals growing interest in robotics integration. | <https://github.com/NousResearch/hermes-agent/pull/149313> |
| **PR #149292/293** – State‑db FD handling | 0‑* (linked to #96027) | Direct response to the most severe leak bug. | <https://github.com/NousResearch/hermes-agent/pull/149292> / <https://github.com/NousResearch/hermes-agent/pull/149293> |

*The pattern shows the community is split between **critical stability concerns** (gateway leaks, Windows MCP connectivity) and **expansion of the plugin/provider ecosystem** (FAL catalog, ROS, MCP entries).*

---

### 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue / PR | Summary | Current Status |
|---|---|---|---|
| **P1 (Blocking)** | **#96027** – SQLite FD leak | 48 + 46 open handles after 22 days, hits launchd fd limit. | Open; related fix PRs #149292/293 in review. |
| **P2 (High)** | **#127811** – SessionDB writer reopened after retirement | Handles can be written outside registry, risking corruption. | Open; no fixing PR yet. |
| **P2 (High)** | **#54141** – Windows MCP servers cannot connect | All three built‑in MCP tools fail with *WinError 2*. | Open; no fix yet. |
| **P2** | **#149297** – Ideogram V3 edit fails (mask handling) | Mismatch of `image_url` / `mask_url`. | Open; part of larger FAL catalog clean‑up. |
| **P2** | **#149296** – Stale FAL endpoint IDs in catalogs | Ten IDs deprecated/removed, causing runtime errors. | Open; pending catalog update PRs. |
| **P3** | **#145120** – TUI pager key leaves panel open | Minor UX glitch, but can hide important info. | Fixed in PR #145120 (open). |
| **P3** | **#148254** – Control‑socket permission fallback | Security‑risk on shared filesystems. | Open; PR #148254 under review. |
| **P3** | **#149259** – 5xx wrapped in 401 mis‑classified | Auth flow false negatives. | Fixed in PR #149259 (merged). |

*Fixes already merged today address several P3–P2 issues (Telegram voice cache, reply context, error‑classifier, UI pager). The critical P1 leak remains open, but the new state‑db PRs are promising early mitigation.*

---

### 6. Feature Requests & Roadmap Signals  

| Feature | Rationale / User Need | Likelihood of Inclusion in Next Release |
|---|---|---|
| **Machine‑readable `hermes cron` / `hermes config` output** (Issue #118072) | Enables external mobile/web dashboards to ingest schedule & config reliably. | **Medium‑High** – API‑stability focus; low implementation overhead. |
| **Per‑job wall‑clock timeout in `cron/jobs.json`** (Issue #149316) | Prevents runaway LLM jobs that keep heart‑beating but make no progress. | **Medium** – Security & resource‑usage concern aligns with recent stability pushes. |
| **Hide voice UI in desktop composer** (Issue #149315) | Users who never use dictation want a cleaner UI. | **Low‑Medium** – UI polish, may be deferred to a minor patch. |
| **Make image/video provider registries public plugin API** (Issue #149300) | Allows third‑party plugins to query available back‑ends dynamically. | **High** – Already discussed in PR #149300; likely to land soon. |
| **Submit / status / cancel semantics for image/video generation** (Issue #149299) | Needed for long‑running generation jobs, progress UI, user‑initiated aborts. | **High** – Directly tied to per‑job timeout and other stability work. |
| **Typed per‑model controls for FAL video** (Issue #149302) & **mask input on image provider** (Issue #149301) | Unlocks richer model capabilities (camera motion, inpainting). | **Medium** – Part of broader FAL integration backlog. |
| **Comprehensive FAL catalog rows for images, videos, and new models** (Issues #149304‑#149310) | Keeps Hermes in sync with the rapidly evolving FAL ecosystem. | **High** – Several PRs already open (catalog updates) indicate active maintainer work. |
| **WorkSignal MCP entry** (PR #149319) & **ROS plugin catalog** (PR #149313) | Extends Hermes’ tooling marketplace; provides immediate community value. | **Already merged** – Landscape expansion is ongoing. |

Overall, the roadmap appears to prioritize **stability (resource leaks, auth handling)** while **opening the provider API** for richer third‑party integrations and **catalog synchronization** with FAL.

---

### 7. User Feedback Summary  

- **Stability pain points**: Users on macOS report the gateway eventually hitting the 256‑fd limit, leading to silent crashes; Windows users are blocked from the bundled MCP tools.  
- **Feature gaps**: Repeated requests for structured output (JSON) from `cron`/`config`, per‑job timeout, and the ability to monitor/cancel generation jobs.  
- **UI/UX desires**: Hide unused voice controls, show sender names in the desktop session list, and improve TUI pagination behavior.  
- **Ecosystem expansion**: A surge of issues around adding new FAL models (image & video) and making the provider registries publicly consumable shows strong community interest in extending Hermes’ multimodal capabilities.  

The sentiment is **mixed**: high enthusiasm for new integrations but frustration over reliability on long‑running agents and missing automation hooks.

---

### 8. Backlog Watch (Items Needing Maintainer Attention)

| ID | Title / Area | Age / Priority | Why It Matters |
|---|---|---|---|
| **#96027** (gateway SQLite leak) | Resource‑leak, P1 | Open > 2 months | Blocks long‑term deployments; risk of process termination. |
| **#127811** (SessionDB writer after retire) | Session handling, P2 | Open > 1 month | Could corrupt session state in multiplexed gateways. |
| **#54141** (Windows MCP connectivity) | Platform compatibility, P2 | Open > 4 months | Prevents Windows users from accessing core tools. |
| **#149296** (Stale FAL endpoint IDs) | Catalog accuracy | Open today | Leads to runtime errors for users relying on those models. |
| **#149297** (Ideogram V3 edit bug) | Provider‑specific bug | Open today | Blocks a popular edit workflow. |
| **#149304‑#149310** (Missing FAL catalog rows) | Ecosystem sync | Open today | Limits discoverability of new image/video models. |
| **#149300** (Public provider registry API) | Plugin architecture | Open today | Blocks third‑party plugins from dynamic backend discovery. |
| **#149299** (Job submit / status / cancel) | Long‑run generation control | Open today | Critical for UI progress bars and user‑initiated aborts. |
| **#148254** (Control‑socket permission fallback) | Security on shared FS | Open 2 days | Could expose control sockets on mis‑configured mounts. |

*These items represent the highest‑impact technical debt and feature gaps. Prioritising the P1/F2 resource‑leak PRs (#149292/293) and the public provider‑registry work (#149300) would address both stability and the most requested ecosystem extensions.*

--- 

**Bottom line:** Hermes Agent is experiencing a burst of development activity focused on fixing critical stability bugs and unlocking a richer plugin/provider ecosystem. The immediate risk is the gateway SQLite‑FD leak; a swift merge of the state‑db handling PRs is essential. Simultaneously, the community’s push for a public provider API, job‑control semantics, and up‑to‑date FAL catalogs is shaping the next roadmap milestones. Maintaining momentum on these fronts will keep both power‑users and new adopters satisfied.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw – Project Digest (2026‑11‑05)**  

---

### 1. Today’s Overview  
- The repository saw a burst of activity: 5 open issues were touched and 7 pull‑requests were updated, of which 5 were merged/closed and 2 remain open.  
- No new releases were published, indicating the maintainers are still in a “pre‑release” stabilization phase.  
- The mix of bug‑fixes, security hardening, and infrastructure enhancements (WebSocket gateway, retry logic, documentation) suggests the project is alive but still awaiting a dedicated maintainer or a community‑driven fork.

---

### 2. Releases  
*No new version was released on 2026‑11‑05.*

---

### 3. Project Progress (Merged / Closed PRs)  

| PR # | Title / Scope | Merged / Closed Date | Key Impact |
|------|---------------|---------------------|------------|
| **#957** | Fix config: prevent default `ModelList` from overriding user config | 2026‑11‑05 | Corrects a long‑standing configuration regression that caused missing `api_base` fields to be overwritten, reducing “401 Unauthorized” errors for new users. |
| **#1182** | Documentation: add `agents.md` | 2026‑11‑05 | Improves onboarding for AI‑agent contributors; clarifies Go version handling and principle‑first guidelines. |
| **#751** | Gateway: add WebSocket interface (OpenClaw style) | 2026‑11‑05 | Enables native WebSocket endpoints (`/health`, `/ready`), adds `--enable-websocket` flag, and streamlines CLI help output – a major step for production‑grade deployments. |
| **#423** | WIP: multi‑agent collaboration framework & shared context | 2026‑11‑04 | Introduces a thread‑safe “blackboard” for shared context, agent hand‑off and discovery tools. Although marked WIP, it lays groundwork for future multi‑agent orchestration. |
| **#594** | Feature: retry logic with back‑off for LLM calls | 2026‑11‑04 | Adds bounded exponential back‑off on timeouts / 5xx errors, with user‑visible retry notices; improves reliability of downstream LLM services. |

*Outcome*: The merged PRs collectively advance core stability (config, retry), expand deployment options (WebSocket), and lay foundations for more sophisticated agent ecosystems.

---

### 4. Community Hot Topics  

| Item | Type | Comments / 👍 | Link | Why It Matters |
|------|------|---------------|------|----------------|
| **#3417** (Open – “Active Fork & Continued Maintenance”) | Issue (Community notice) | 4 comments, 0 👍 | https://github.com/sipeed/picoclaw/issues/3417 | Signals that the original repo is perceived as abandoned; a community member has created an actively maintained fork, indicating a risk of fragmentation unless upstream stewardship resumes. |
| **#3456** (Open – Security: approval‑hook re‑initialization) | Issue (Security) | 0 comments | https://github.com/sipeed/picoclaw/issues/3456 | Highlights a potential privilege‑escalation window where tools could be executed without proper gate checks after a reload. Security‑critical, likely to attract quick attention. |
| **#3454** (Open – Model identifier validation) | Issue (Bug) | 1 comment | https://github.com/sipeed/picoclaw/issues/3454 | Affects users integrating non‑PicoClaw providers where case‑sensitivity matters; the automatic lower‑casing can break upstream APIs. |
| **#3453** (Open – WebUI “restart required” false positive) | Issue (UI/UX) | 1 comment | https://github.com/sipeed/picoclaw/issues/3453 | Confuses operators; the toast remains after a hot‑reload, indicating a UI‑state sync problem. |
| **#3452** (Open – Discord fork deadlock) | PR (Fix) | 0 comments | https://github.com/sipeed/picoclaw/pull/3452 | Addresses a deadlock that renders the Discord channel unusable; the issue has been open for weeks, showing the need for upstream dependency hygiene. |

**Analysis** – The most discussed point is the fork announcement (**#3417**), reflecting community concern over project sustainability. Security (**#3456**) and integration bugs (**#3454**, **#3453**) are also gathering attention, indicating that reliability and interoperability are current pain points.

---

### 5. Bugs & Stability  

| Severity | Issue/PR | Summary | Current Status | Fix / Work‑around |
|----------|----------|---------|----------------|-------------------|
| **Critical** | **#3456** – Approval‑hook re‑init bug | After a `/reload`, the gateway may serve without applied tool‑gating, exposing the system to unapproved executions. | Open (no comment) | No fix yet; requires urgent patch. |
| **High** | **#3454** – Model ID lower‑casing | Auto‑lowercasing of unknown provider prefixes breaks case‑sensitive upstream models (e.g., `ACME/gpt‑4o‑mini`). | Open, 1 comment | No PR yet; user must manually correct IDs. |
| **Medium** | **#3453** – Stale “restart required” UI | WebUI toast persists despite successful hot‑reload, leading to unnecessary manual restarts. | Open, 1 comment | No fix yet. |
| **Medium** | **#3452** – Discord deadlock | Discord bot hangs due to deadlock in forked `discordgo`. | Open PR exists, not merged. | PR #3452 proposes upstream fork bump; pending review. |
| **Low** | **#3451** – Android API‑19 support request | Legacy Android 4.4 (API 19) on x86_32/64 not supported. | Open, low activity. | No concrete fix; may be deferred. |

*Note*: The most severe open bug (**#3456**) is a security issue with no mitigation in place, warranting immediate community or fork maintainer attention.

---

### 6. Feature Requests & Roadmap Signals  

| Request | Description | Likelihood of Inclusion |
|---------|--------------|--------------------------|
| **Android API‑19 support** (#3451) | Enable PicoClaw on legacy Android 4.4 devices (x86). | Low – niche audience; would require substantial NDK work. |
| **Improved model‑identifier validation** (#3454) | Preserve case of upstream model namespaces; provide opt‑out for auto‑lowercasing. | Medium – directly tied to integration friction; may be bundled with a broader validation refactor. |
| **WebUI state sync after hot‑reload** (#3453) | Remove false “restart required” notifications. | Medium – UI polish; could be tackled alongside the upcoming WebSocket gateway release. |
| **Discord deadlock fix** (PR #3452) | Update forked `discordgo` to unblock the channel. | High – already has a dedicated PR; likely to land soon if maintainer reviews. |
| **Multi‑agent collaboration framework** (PR #423) | Shared blackboard, hand‑off, discovery. | Medium – WIP; could become a flagship feature in the next major version if the community adopts it. |
| **Security hardening (approval‑hook reload)** (#3456) | Ensure hooks are re‑registered atomically on reload. | High – security‑critical; may be prioritized in a “security patch” release. |

---

### 7. User Feedback Summary  

- **Configuration pain** – Issue #957 (merged) shows users struggled with default model list overwriting custom `api_base` values, leading to authentication failures. The fix was well‑received.  
- **Integration friction** – Issues #3454 and #3453 highlight that downstream API expectations (case sensitivity, UI state) are not yet fully respected, causing workflow interruptions.  
- **Security awareness** – The newly opened security issue (#3456) reflects that operators are actively testing reload scenarios and expect strict gate enforcement.  
- **Community stewardship** – The prominent fork announcement (#3417) indicates a desire for a reliable maintainer; users are looking for continuity and may migrate to the fork if the upstream repo does not revive.  
- **Documentation improvements** – The addition of `agents.md` (PR #1182) addresses a need for clearer contribution guidance, especially for AI‑agent developers.

Overall, users appreciate recent stability fixes but are frustrated by lingering integration bugs and the perception of an under‑maintained core.

---

### 8. Backlog Watch (Long‑standing Items Needing Attention)

| ID | Title | Age (approx.) | Reason for Flag |
|----|-------|---------------|-----------------|
| **#680** (referenced in PR #957) | Model config default override bug | > 6 months | Fixed now, but demonstrates that older bugs can linger unnoticed. |
| **#213** (provider protocol refactor) | Core provider abstraction | > 1 year | Foundation for multi‑agent work; still pending full tests. |
| **#131** (model fallback chain + multi‑agent routing) | Fallback & routing logic | > 8 months | Needed for robust agent collaboration; referenced by PR #423. |
| **#3452** (Discord deadlock PR) | Dependency deadlock | Open ~ 2 weeks | PR open, no maintainer response; blocks a popular channel integration. |
| **#3456** (security hook reload) | Approval‑hook re‑init bug | Open < 24 h | Critical security; urgent review required. |
| **#3417** (fork announcement) | Community fork maintenance | Open > 1 month | Indicates risk of fork divergence; upstream should address maintenance concerns. |

**Recommendation** – Prioritize the security bug **#3456** and the Discord deadlock PR **#3452** to restore confidence in the gateway’s safety and channel reliability. A short‑term “maintenance sprint” (e.g., a 2‑week window) could also address the integration bugs **#3454** and **#3453**, while the community fork announced in **#3417** could be approached for a possible upstream hand‑off or co‑maintainership.

--- 

*Prepared by the AI‑Assistant Project‑Analytics team, 2026‑11‑05.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw – Project Digest (2026‑11‑05)**  
*Generated from the public GitHub activity of [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw).*

---

### 1. Today’s Overview
- The repository is **moderately active**: 1 issue was closed and 16 pull‑requests were touched in the last 24 h, of which **2 have been merged/closed** and **14 remain open**.  
- No new releases were cut, but the **image‑refresh bot** pushed two new hardened container tags (v2026.10.0‑20261104T2038 and v2026.10.0‑20261103T2105).  
- The bulk of the activity is **bug‑fixes and hardening work** focused on the channel adapters, session stability, and the setup‑diagnostics flow.  
- Community attention is coalescing around **approval‑card UX**, **Telegram reaction handling**, and the **new Proton Mail channel** that is being introduced as a skill.

---

### 2. Releases
*No new tagged releases were published today.*

---

### 3. Project Progress (merged / closed PRs)
| PR # | Title / Scope | Status Today | Key Impact |
|------|---------------|--------------|------------|
| **#4029** | `fix(telegram): render links with an underscore in the URL as plain text` | **Closed** (Nov 4) | Restores correct handling of email‑style links & query strings on Telegram, preventing silent message drops. |
| **#3970** | `fix(delivery): strip the agent‑group suffix from reaction/edit target ids` | **Closed** (Nov 4) | Fixes the “add_reaction” regression that broke Telegram reactions when a 3‑part platform ID was used. |
| (No other PR reached a merged state in the last 24 h.) |  |  |  |

These two merges directly address the two bugs that surfaced in the lone issue (#2042) and in upstream Telegram behavior.

---

### 4. Community Hot Topics
| # | Item | Type | Recent Activity | Why It’s Hot |
|---|------|------|-----------------|--------------|
| **4266** | `fix(setup): make setup diagnostics complete, loss‑proof and free of user text` | PR (Open) | Created Nov 4 → updated Nov 5 | Overhauls the *setup* diagnostic payload (adds `nanoclaw_version`, `release_channel`, `run_id`, `arch`). This touches all installer scripts and is the most‑viewed PR today, signaling a strong demand for reproducible, privacy‑preserving diagnostics. |
| **4156** | `fix(channels): show long approval cards in full on Telegram, Discord and WhatsApp Cloud` | PR (Open) | Updated Nov 4 | Approval cards are a core UX element for human‑in‑the‑loop workflows; the fix expands the visible text, addressing complaints about truncated actions. |
| **4147** | `fix(approvals): approval cards always show the full action` | PR (Open) | Updated Nov 4 | Complements #4156 by ensuring the *action* string itself is fully displayed, a follow‑up to user reports of missing details. |
| **4265** | `fix(mattermost): retry setup when the server or a proxy is briefly down` | PR (Open) | Created Nov 4 | Adds resilience to Mattermost adapters; a recent outage caused deployment stalls, prompting quick community attention. |
| **3726** | `feat(channels): add native Proton Mail adapter via Proton Mail Bridge` | PR (Open) | Created Sep 6 → updated Nov 4 | First‑class email channel for Proton Mail; the feature is being tracked as a new skill‑level integration and has attracted several comments from privacy‑focused users. |

**Underlying needs** – a consistent, privacy‑first diagnostic experience; reliable multi‑platform approval UI; robust channel‑setup retries; and expanding the ecosystem beyond chat‑messaging into secure email.

---

### 5. Bugs & Stability (ranked by severity)

| Severity | Bug / PR | Summary | Fix Status |
|----------|----------|---------|------------|
| **Critical** | **#4192** – `fix(delivery): one stuck channel send no longer silences a session until restart` | A hung send blocked the entire host session, causing silent dead‑locks. | Open PR; mitigation added (60 s timeout). |
| **Critical** | **#4263** – `fix(add-onecli): end sessions only after 3 consecutive failed health probes` | Single slow health probe caused all running sessions to terminate, severely impacting production clusters. | Open PR; fix pending review. |
| **High** | **#2042** (Issue) – `Fix add_reaction: 3‑part platform ID breaks Telegram setMessageReaction` | Reactions silently failed; root cause identified in platform‑ID handling. | Fixed by PR #3970 (closed). |
| **High** | **#4262** – `fix(agent-runner): decode message entities before delivery` | XML entities leaked into bot replies, breaking formatting on all channels. | Open PR; awaiting merge. |
| **Medium** | **#4264** – `fix(sweep): clear a stranded outbound journal so the session can wake again` | Stale SQLite journal after container kill left a session permanently stuck. | Open PR; review in progress. |
| **Medium** | **#4266** – `fix(setup): make setup diagnostics complete, loss‑proof and free of user text` | Diagnostics could lose data on abrupt termination; also risked leaking user‑provided text. | Open PR; under review. |
| **Low** | **#4265** – `fix(mattermost): retry setup when the server or a proxy is briefly down` | Improves resilience but does not affect existing functionality. | Open PR. |
| **Low** | **#4261 / #4267** – Image‑refresh tags | Routine hardening; no functional change for users. | Merged by bot. |

---

### 6. Feature Requests & Roadmap Signals
| Feature | Origin / PR | Signal Strength |
|--------|-------------|-----------------|
| **Proton Mail channel** (via Bridge) | PR #3726 (skill) + related channel work in #4218 | **Strong** – First‑party email support is a strategic expansion; early adopters are already testing. |
| **Full‑text approval cards** | PRs #4156, #4147 | **Strong** – Multiple UX complaints (truncated actions) have been raised; the fixes are slated for the next stable release. |
| **Setup diagnostics without user text** | PR #4266 | **Medium‑High** – Privacy‑focused users demand audit‑ready diagnostics; likely to be merged before the next release cycle. |
| **Retry logic for channel adapters** (Mattermost, others) | PR #4265, #4268 (not listed) | **Medium** – Adds robustness but does not introduce new capabilities. |
| **Container‑runner health‑probe tolerance** | PR #4263 | **Medium** – Prevents unnecessary session termination; may be bundled with stability updates. |

**Prediction:** The next published version (expected late‑November) will most likely include the **approval‑card UI fixes**, **setup‑diagnostics hardening**, and **Proton Mail channel skeleton** (as a skill flag). The health‑probe and journal‑sweep fixes are also strong candidates for inclusion.

---

### 7. User Feedback Summary
- **Telegram reactions** – Users reported that adding reactions in group chats never appeared; the underlying 3‑part ID bug was confirmed and fixed (PR #3970).  
- **Link parsing on Telegram** – Underscore characters (`_`) in URLs caused silent message drops; resolved in PR #4029.  
- **Approval workflow visibility** – Several users complained that long approval cards were truncated, hiding critical action details; the project is actively addressing this via PRs #4156 and #4147.  
- **Session reliability** – Reports of “stuck” agents and sudden session silencing (Mattermost, OneCLI health checks) indicate a need for more defensive timeout handling, which is now being engineered.  
Overall sentiment is **constructive**: users appreciate rapid bug triage but stress the importance of *stable long‑running sessions* for enterprise deployments.

---

### 8. Backlog Watch (Long‑standing items needing attention)

| # | Title / Area | Status | Reason for Watch |
|---|---------------|--------|------------------|
| **#4266** | `fix(setup): make setup diagnostics complete, loss‑proof` | Open (updated Nov 5) | Core installer; pending review could block privacy‑critical releases. |
| **#4156** | `fix(channels): show long approval cards in full` | Open (updated Nov 4) | UX impact across Telegram, Discord, WhatsApp; deadline approaching for next release. |
| **#4147** | `fix(approvals): approval cards always show the full action` | Open (updated Nov 4) | Complementary to #4156; still awaiting merge. |
| **#4168 / #4171** | `fix(approvals): resolve a clicked card only after host accepts the click` | Open (updated Nov 4) | Critical for auditability; needs final sign‑off. |
| **#4265** | `fix(mattermost): retry setup on transient failures` | Open (updated Nov 4) | Important for production Mattermost deployments. |
| **#4192** | `fix(delivery): one stuck channel send no longer silences a session` | Open (updated Nov 4) | High‑severity stability bug; review progress unclear. |
| **#4213** | `fix(setup): restart host after provider‑auth installs` | Open (updated Nov 4) | Affects all provider‑auth flows; should be merged before next GA. |
| **#4264** | `fix(sweep): clear a stranded outbound journal` | Open (updated Nov 4) | Prevents containers from hanging after crashes; needs testing. |
| **#4263** | `fix(add-onecli): end sessions only after 3 consecutive failed health probes` | Open (updated Nov 4) | High‑impact on scaling; review pending. |
| **#4262** | `fix(agent-runner): decode message entities before delivery` | Open (updated Nov 4) | Formatting bug that can affect any channel. |
| **#3726** | `feat(channels): add native Proton Mail adapter` | Open (updated Nov 4) | Strategic feature; still awaiting the associated channel adapter PR #4218. |

**Recommendation:** Prioritize the *setup diagnostics* and *approval‑card* fixes for the upcoming release, and accelerate review of the **session‑stability** PRs (#4192, #4263, #4264) to reduce risk for enterprise users.

--- 

*All links point to the public GitHub repository: e.g., https://github.com/qwibitai/nanoclaw/pull/4266* (replace the number accordingly).

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

## IronClaw – Project Digest (2026‑11‑05)

### 1. Today's Overview
- The repository saw **no issue activity** in the last 24 h and **no new releases**.  
- The only change was a single open pull‑request that updates the `zip` Rust crate from 8.6.0 → 9.0.5.  
- Overall activity is low today, indicating a maintenance‑focused day rather than feature development or bug‑fixing.  

### 2. Releases
*No new releases were published in the last 24 h, so there are no changelogs, breaking‑change notes, or migration guidance to report.*

---

### 3. Project Progress
| PR | Title | Author | Status | What it does |
|----|-------|--------|--------|--------------|
| #8168 | **chore(deps): bump zip from 8.6.0 to 9.0.5** | dependabot[bot] | **Open** (no merge yet) | Updates the `zip` dependency to the latest stable branch (v9.0.5). The change mainly brings bug‑fixes and a few minor API adjustments from the upstream library. |

*There were **no PRs merged or closed** today, so no features or bugs progressed to completion.*

---

### 4. Community Hot Topics
- **Only PR #8168** is active; it has **0 reactions/comments** so far.  
- With no open or recently updated issues, there is currently **no community‑driven discussion** to surface.

*Implication:* The lack of active threads suggests either a period of quiet usage or that contributors are awaiting upstream changes (e.g., the `zip` bump) before opening new work items.

---

### 5. Bugs & Stability
| Severity | Description | Reported In | Fix Status |
|----------|-------------|------------|------------|
| — | No bugs, crashes, or regressions were reported today. | N/A | N/A |

*The repository’s bug surface remains unchanged; the only pending change is the dependency bump, which itself addresses upstream bugs in `zip`.*

---

### 6. Feature Requests & Roadmap Signals
- **No new feature‑request issues** appeared in the last 24 h.  
- The only activity (the `zip` upgrade) is a **maintenance task**, not a new capability.

*Prediction:* Given the current lull, the next set of roadmap items will likely emerge once the dependency update is merged and CI validates the new version. Historically, IronClaw’s roadmap advances after a batch of dependency upgrades, so we may see a feature‑focused PR wave in the coming weeks.

---

### 7. User Feedback Summary
- **No user comments or reactions** were recorded today, so there is no fresh feedback to summarize.  
- The absence of feedback could indicate that the current stable release is meeting user expectations, or that the user base is not actively engaging on GitHub at the moment.

---

### 8. Backlog Watch
| Item | Type | Title | Age | Why it matters |
|------|------|-------|-----|----------------|
| – | – | *No open issues or PRs are listed in the provided data.* | – | *If the repository has long‑standing open items (e.g., performance enhancements, platform support), they would need a reminder here. In the absence of data, maintainers should review the full backlog on GitHub to ensure nothing is stagnating.* |

**Actionable note for maintainers:**  
- Review the full list of open issues/PRs on the IronClaw board to spot any that have been idle for > 30 days. Prioritize those with high‑impact tags (e.g., `performance`, `security`).  
- Once PR #8168 is merged, run the full CI matrix to confirm that the new `zip` version does not introduce runtime regressions.

---

*All links point to the official GitHub repository: https://github.com/nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI – Project Digest (2026‑11‑05)**  

---

### 1. Today’s Overview  
- Activity is brisk: 16 pull‑request updates (13 merged/closed, 3 still open) and a single newly‑opened issue.  
- No new releases were cut, but the bulk of today’s work is low‑level performance & stability work (gateway start‑up, image‑metadata handling, Windows process‑time reads) and a few UI/UX clean‑ups.  
- The open issue concerns an account‑ban appeal, indicating occasional “anti‑abuse” friction for power‑users. Overall health looks solid; most recent PRs are closing quickly, suggesting an active maintainer pipeline.

---

### 2. Releases  
*No new version was published in the last 24 h.*

---

### 3. Project Progress (merged/closed PRs)

| PR # | Title / Focus | Primary Impact |
|------|---------------|----------------|
| **3001** | `perf(openclaw): skip the dreaming startup scrub when dreaming is off` | Cuts unnecessary session‑scrubbing, shaving ~2 s from cold‑start when “dreaming” is disabled. |
| **3000** | `perf(openclaw): connect the gateway client sooner after startup` | Refactors gateway client loading, reducing Windows desktop client handshake from 2.3‑2.7 s to <1 s. |
| **2999** | `fix(cowork): stop storing generated images inline in message metadata` | Eliminates massive base‑64 duplication (13‑image session went from 1.12 GB to <60 MB), fixing UI freeze and memory pressure. |
| **2997** | `perf(openclaw): read Windows process start times natively` | Replaces PowerShell/WMIC calls with native API, removing ~2.5 s blocking I/O on each gateway start. |
| **2996** | `perf(openclaw): ship only allow‑listed bundled skills` | Skips FS checks for 55 unused bundled skills, cutting the 6‑7 s “starting channels & sidecars” phase on Windows. |
| **2995** | `feat(media): one confirmation approves the rest of a turn’s images` | Streamlines multi‑image generation (e.g., 16‑image tasks need only a single user confirm), preventing agent stalls. |
| **2994** | `fix(media): let visible subagents generate images` | Grants child agents proper auth context for image generation, restoring delegated‑image workflows. |
| **2993** | *(duplicate of 2994 – merged to close the same issue)* | Same as above. |
| **2992** | `fix(desktop-companion): show selections the hook skips in AppKit apps` | Fixes intermittent selection‑popup on macOS (e.g., Memo, Notes) by improving cursor‑state detection. |
| **2991** | `fix(account): open account menu without waiting on daily check‑in` | Removes blocking daily‑check‑in RPC from the account‑menu click path, eliminating UI lag on the sidebar. |
| **2990** | `fix(openclaw): skip integrity checks for cleanly closed agent databases` | Bypasses full‑file `PRAGMA integrity_check` on normal shutdown, dramatically speeding up start‑up for large profiles. |
| **2721** | `fix(openclaw): apply IM configuration without restarting the gateway` | Enables live IM‑config edits, preventing disruptive gateway restarts. |
| **2726** | `feat: add digital employees, expert teams and capability markets` | Lays groundwork for a “capability marketplace” (skill discovery, digital employee creation, expert‑team install). |

**Key themes:**  
- *Performance*: Six PRs target gateway start‑up latency (3000, 3001, 2997, 2996, 2990, 2721).  
- *Stability*: Image‑metadata blow‑up (2999) and media‑auth context (2994/2993) were resolved, preventing freezes and failed tasks.  
- *UX polish*: macOS selection hook (2992) and account‑menu lag (2991) improve day‑to‑day responsiveness.  
- *Strategic growth*: The capability‑marketplace prototype (2726) signals an upcoming shift toward modular “digital employee” ecosystems.

---

### 4. Community Hot Topics  

| Item | Type | Comments / Reactions | Link | Why it matters |
|------|------|-----------------------|------|----------------|
| **#2998** – “申诉：账号被禁用，申请解封” | Issue (open) | 1 comment, 0 👍 | <https://github.com/netease-youdao/LobsterAI/issues/2998> | Shows friction for power‑users who run automated sign‑in / proxy scripts. Highlights need for clearer abuse‑policy communication and possibly a self‑service un‑ban flow. |
| **#2790** – “group model choices and improve conversation loading” | PR (open, stale) | No comment count visible, but still open after a month | <https://github.com/netease-youdao/LobsterAI/pull/2790> | UI/UX demand: easier navigation of large model catalogs; directly impacts adoption for users with many custom models. |
| **#2791** – “ignore abbreviated paths in inferred file cards” | PR (open, stale) | – | <https://github.com/netease-youdao/LobsterAI/pull/2791> | Improves artifact‑card accuracy, a frequent source of confusion for developers using the renderer. |
| **#2792** – “keep long question prompts and context tooltips readable” | PR (open, stale) | – | <https://github.com/netease-youdao/LobsterAI/pull/2792> | Addresses UI clutter for long prompts – a pain point for power‑users who feed extensive context to agents. |

*Underlying needs*: smoother onboarding for large model sets, more reliable artifact inference, and better handling of long textual inputs. The open issue about account bans points to a need for clearer policy enforcement and perhaps an automated appeal UI.

---

### 5. Bugs & Stability (ranked by impact)

| Severity | Bug / Symptom | PR that fixes it (if any) | Notes |
|----------|----------------|---------------------------|-------|
| **Critical** | **Memory explosion when many images are generated** – `cowork_messages.metadata` grew to >1 GB, freezing the app. | ✅ **#2999** | Fixed by storing images as external files instead of inline Base64. |
| **High** | **Image generation fails for sub‑agents** (`Media tool has no authenticated run context`). | ✅ **#2994** (and duplicate #2993) | Restores delegated image generation for visible sub‑agents. |
| **High** | **Gateway startup slowdown on Windows (6–7 s)** due to FS checks of bundled skills. | ✅ **#2996** | Removes unnecessary skill checks, improving launch time. |
| **Medium** | **Blocking UI on account‑menu click** because of daily‑check‑in RPC. | ✅ **#2991** | UI now opens instantly. |
| **Medium** | **MacOS selection‑popup intermittency** (AppKit apps). | ✅ **#2992** | Improves selection‑hook reliability. |
| **Medium** | **Slow Windows process start‑time read (2.5 s)** via PowerShell. | ✅ **#2997** | Replaced with native API, no blocking. |
| **Low** | **Unnecessary integrity checks on cleanly closed DBs** – adds seconds for large profiles. | ✅ **#2990** | Skipped when the close seal is present. |
| **Low** | **Dreaming‑scrub runs even when dreaming is off** – minor CPU waste. | ✅ **#3001** | Guarded with config flag. |

All high‑impact bugs observed today have already been merged and are slated for the next client release (v2026.9.x).

---

### 6. Feature Requests & Roadmap Signals  

| Request / Signal | Evidence | Likely Next Milestone |
|-------------------|----------|-----------------------|
| **Capability Marketplace / Digital Employees** | PR **#2726** (merged) adds core UI and data‑model for “digital employees”, expert teams, and skill marketplace. | Expected in a **major feature release** (v2027.0) – UI polish and package‑store integration. |
| **Model Catalog Grouping / Better Browsing** | Open PR **#2790** (group model choices, collapsible families). | High priority – UI/UX focus; should land in the next **minor** release (v2026.10). |
| **Artifact Card Path Normalisation** | PR **#2791** (ignore abbreviated paths). | Likely to be merged soon (low‑risk) and shipped with the next patch. |
| **Long Prompt / Tooltip Readability** | PR **#2792** (compact headings, scrollable tooltips). | Same timeline as 2790 – part of UI refinement wave. |
| **Self‑service Account Un‑ban** | Issue **#2998** (user appeal). | Not yet formalized; could become a lightweight “support portal” feature in a future minor update. |

---

### 7. User Feedback Summary  

- **Performance & Latency**: Multiple PRs target startup latency on Windows and gateway connections, confirming that users feel the app is “slow to launch” in heavy‑skill environments.  
- **Memory & Storage**: The image‑metadata blow‑up (reported by a user with a 13‑image session) was a real blocker; the fix dramatically reduces RAM usage.  
- **UI Responsiveness**: Lag on the account sidebar and inconsistent macOS selection pop‑ups were pain points; both have been addressed.  
- **Automation & Abuse Controls**: The solitary open issue (**#2998**) shows a user trying to automate sign‑in / daily‑check‑in via a reverse‑proxy; the resulting ban indicates the current risk‑model may be too strict for experimental power‑users.  
- **Overall Satisfaction**: The rapid turnaround on high‑impact bugs (all merged within a day) suggests a responsive maintainer team; however, the presence of three stale PRs (2790‑2792) indicates a backlog that may affect perceived momentum for UI enhancements.

---

### 8. Backlog Watch  

| Item | Type | Age | Why it needs attention |
|------|------|-----|--------------------------|
| **#2790** – UI grouping for model catalogs | PR (open, stale) | Open since **2026‑10‑04** (≈1 month) | Improves discoverability for large model sets; integrates with upcoming capability‑marketplace. |
| **#2791** – Ignore abbreviated paths in inferred file cards | PR (open, stale) | Open since **2026‑10‑04** | Prevents confusing artifact cards that currently break user workflow. |
| **#2792** – Long prompt/tooltip readability | PR (open, stale) | Open since **2026‑10‑04** | Directly addresses UI clutter reported in multiple user forums. |
| **#2998** – Account ban appeal | Issue (open) | Created today | Needs a policy response or a quick admin tooling fix; otherwise community trust may erode. |
| **#2721** – Apply IM config without gateway restart (merged but not yet released) | PR (merged) | Closed 2026‑11‑04 | Verify that the live‑apply logic works across all platforms before next release. |

**Action Recommendation:** Prioritize the three UI PRs (2790‑2792) for the upcoming minor release; allocate a maintainer to respond to issue #2998 (provide a status update or temporary unblock) to preserve goodwill.

---

*Prepared by the AI‑Assistant Project Analyst – 2026‑11‑05*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**MOLTIS – Project Digest (2026‑11‑05)**  

---

### 1. Today’s Overview  
- The repository saw **no issue activity** in the past 24 hours and **no new releases**.  
- Development activity is limited to a single open pull request, suggesting a low‑key maintenance window today.  
- Overall project health appears stable, but the lack of recent merges or issue closures indicates that maintainers may be operating on a slower cadence or are awaiting community review on the submitted PR.  

---

### 2. Releases  
*No releases were published in the last 24 hours; the latest release remains unchanged.*  

---

### 3. Project Progress  
| PR | Title | Author | Created / Updated | Status | Highlights |
|----|-------|--------|-------------------|--------|------------|
| **#1321** | feat(tools): add Keenable as a web search provider | ilya‑bogin‑keenable | 2026‑11‑04 / 2026‑11‑04 | **Open** | Introduces a key‑less web‑search backend (`provider = "keenable"`). This gives users an alternative to the default Brave/DuckDuckGo providers, reducing reliance on external API keys. No comments or approvals yet. <br/>**Link:** https://github.com/moltis-org/moltis/pull/1321 |

*No PRs were merged or closed today.*  

---

### 4. Community Hot Topics  
- **PR #1321** is the sole active discussion point. Its focus on adding a **key‑less search provider** reflects a community desire for **privacy‑friendly and cost‑free** web search options. The lack of comments or reactions suggests either limited reviewer bandwidth or that the change is still under informal review.  

---

### 5. Bugs & Stability  
- **No bug reports, crashes, or regressions were filed** in the last 24 hours.  
- Consequently, there are **no fix‑oriented PRs** to reference today.  

---

### 6. Feature Requests & Roadmap Signals  
- **Key‑less search provider** (Keenable) – the newly opened PR signals a probable roadmap focus on expanding the `tools.web.search` ecosystem with more privacy‑oriented or free‑tier services. If merged, this could be the first of several alternative providers slated for the next minor release.  
- No other feature requests appeared today, but the PR’s existence hints that future roadmap discussions may revolve around **modular, pluggable tool integrations** and reducing external dependencies (e.g., API key management).  

---

### 7. User Feedback Summary  
- Direct user feedback is **absent** for the current window.  
- Indirectly, the PR’s purpose suggests users are requesting **search functionality that does not require an API key**, possibly to avoid usage limits or maintain privacy. This aligns with broader trends in AI‑assistant ecosystems where key‑less integrations are prized.  

---

### 8. Backlog Watch  
- **Open Issues:** *None* (the repository currently holds no open issues).  
- **Stale PRs / Unresolved Items:** A quick glance at the repository history (outside today’s 24 h window) would be needed to surface older, unattended PRs. Given today’s low activity, maintainers may want to **review PR #1321** promptly to keep momentum.  

---

**Overall Assessment** – Moltis is in a quiet state today, with no urgent bugs or release pressure. The sole active PR points to a strategic interest in expanding search‑provider options without API keys, a move that could improve user adoption and privacy. Prompt review and merging of PR #1321 would demonstrate active responsiveness and keep the roadmap on track.  

*All links are to the official GitHub repository.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – 2026‑11‑05**  
*(GitHub repo <https://github.com/agentscope-ai/CoPaw>)*  

---

### 1. Today’s Overview
- Activity is **high**: 9 issues were touched in the last 24 h (6 still open, 3 closed) and **50 PRs** were updated (31 open, 19 merged/closed).  
- No new releases were published, but the churn of PRs indicates a rapid stabilization sprint on the upcoming 2.3.0‑beta series.  
- Most of the effort today centres on fixing Windows‑specific regressions, tightening configuration handling, and polishing the new “append‑only” session store introduced in recent beta builds.

---

### 2. Releases
*No new tagged releases were created in the last 24 h.*

---

### 3. Project Progress – Merged / Closed PRs (today)

| PR # | Title / Scope | Size | Primary Impact | Link |
|------|---------------|------|----------------|------|
| **8582** | `fix(console): preserve new task project directories` | L | UI‑workflow fix – user‑selected task directory now persists across messages. | <https://github.com/agentscope-ai/CoPaw/pull/8582> |
| **8584** | `fix(matrix): use scoped crypto store filenames on Windows` | M | Windows‑only E2EE init crash resolved; improves Matrix plugin reliability. | <https://github.com/agentscope-ai/CoPaw/pull/8584> |
| **8583** | `fix(code-mode): allow tools with a name parameter` | XS | Removes `TypeError` when tool signatures include `name`; restores full tool‑callability in code mode. | <https://github.com/agentscope-ai/CoPaw/pull/8583> |
| **8572** | `fix(console): align settings visibility with runtime capabilities` | S | Settings UI now hides options unsupported by the current runtime (e.g., Codex/Qoder). | <https://github.com/agentscope-ai/CoPaw/pull/8572> |
| **8574** | `fix(shell): add opt‑in memory protection with live Console settings` | L | Prevents runaway shell commands from exhausting host memory; configurable via `QWENPAW_SHELL_MEMORY_LIMIT_MB`. | <https://github.com/agentscope-ai/CoPaw/pull/8574> |
| **8573** | `feat(local-models): install Piccolo runtimes and select model source` | XXL | Enables “Piccolo” model runtime in the local‑model installer; expands the model catalogue for on‑premise users. | <https://github.com/agentscope-ai/CoPaw/pull/8573> |
| **8582 (duplicate entry)** – already listed. |
| **8583 (duplicate entry)** – already listed. |

*These merges collectively improve Windows stability, UI consistency, and the breadth of supported local models.*

---

### 4. Community Hot Topics  

| Item | Type | Comments | Core Concern | Link |
|------|------|----------|--------------|------|
| **#8278** | Issue – Bug (DingTalk channel) | 6 | Messages > 3500 char are silently downgraded to plain‑text, destroying Markdown & tables. Affects data‑reporting use cases. | <https://github.com/agentscope-ai/CoPaw/issues/8278> |
| **#8565** | Issue – Bug (Hub Local runtime on Windows) | 4 | Local Hub cannot launch on Windows due to missing CPU‑arch metadata, AppContainer staging, and tunnel‑readiness timeout. Blocks Windows developers from using the Hub. | <https://github.com/agentscope-ai/CoPaw/issues/8565> |
| **#8538** | Issue – Bug (Matrix plugin multi‑workspace) | 3 | When several workspaces enable Matrix, only the first activates; others stay offline. | <https://github.com/agentscope-ai/CoPaw/issues/8538> |
| **#8586** | PR – Refactor (ACP config unification) | – (high‑impact PR) | Consolidates session‑scoped configuration overrides into a single validated snapshot. Signals community demand for a more deterministic config model. | <https://github.com/agentscope-ai/CoPaw/pull/8586> |
| **#8532** | PR – Feature (append‑only session storage) | – (large PR) | Introduces durable SQLite‑backed session logs, paginated history and native Turn forks – a long‑standing request for reliable long‑running conversations. | <https://github.com/agentscope-ai/CoPaw/pull/8532> |

**Takeaway:**  
The most vocal pain points today revolve around **Windows compatibility**, **channel reliability**, and **large‑message handling**. The community is also pushing for a **more robust session persistence model** (append‑only storage) and a **cleaner configuration system**.

---

### 5. Bugs & Stability (ranked by severity)

| Severity | Issue / PR | Summary | Status / Fix |
|----------|-----------|---------|--------------|
| **Critical** | **#8565** – Hub Local runtime cannot start on Windows | Blocks any local‑hub workflow on the most common developer OS. | Open; no fix yet (high‑priority). |
| **Critical** | **#8278** – DingTalk channel downgrade > 3500 char | Breaks Markdown & table rendering for long reports; silent downgrade leaves callers unaware. | Open; likely to be addressed in an upcoming hot‑fix. |
| **High** | **#8585** – `recall_history` broken on Windows (extended‑length path) | SQLite read‑only URI fails, causing loss of interaction memory. | Open; no PR linked yet. |
| **High** | **#8580** – Memory tag index never rebuilds (503 errors) | Tags generated but inaccessible; impacts retrieval & debugging. | Open. |
| **Medium** | **#8579** – Disabled provider leaves stale model in run‑config | Leads to `ProviderError` and opaque “Internal error” responses on channels. | Open. |
| **Medium** | **#8576** – Default agent edit button disabled in console | UI restriction contradicts API allowing edits; confusion for power users. | Open. |
| **Medium** | **#8538** – Matrix plugin activation limited to first workspace | Multi‑workspace setups lose Matrix connectivity. | Open. |
| **Low** | **#8555** – New task workspace selection not reflected (closed) | Fixed by PR #8582. | Resolved. |
| **Low** | **#8581** – `name` parameter tooling conflict in code‑mode (closed) | Fixed in PR #8583. | Resolved. |

*The majority of today’s open bugs are Windows‑specific, indicating a testing gap on that platform.*

---

### 6. Feature Requests & Roadmap Signals

| Request / Signal | Description | Evident Interest |
|-------------------|-------------|-------------------|
| **Append‑only session storage & Turn forks** (PR #8532) | Durable SQLite log, pagination, branchable turns. | High – many comments, core to long‑conversation use cases. |
| **Unified ACP configuration snapshot** (PR #8586) | Eliminates scattered overrides; deterministic per‑session config. | Medium – PR already under review, suggests upcoming config overhaul. |
| **Ollama model discovery** (PR #8309) | CLI now lists installed Ollama models before prompting. | Low‑medium – targeted at CLI users; PR open. |
| **GBK/CP936 decoding for file tools** (PR #8234) | Properly handle Chinese Windows encodings in `read_file`, `edit_file`, `grep`. | Low – niche but important for Chinese‑locale developers. |
| **Piccolo runtime installer** (PR #8573) | Adds a new local model runtime to the installer. | Low‑medium – expands model catalog, could be bundled in next beta. |
| **Memory protection for shell commands** (PR #8574) | Opt‑in memory cap for potentially explosive shell output. | Low – already merged, will appear in next release. |

*These items collectively hint that the next minor release (likely 2.3.0‑beta 2) will focus on **session durability**, **configuration sanity**, and **expanded model/runtime support**.*

---

### 7. User Feedback Summary

- **Windows developers feel left behind**: multiple open bugs (Hub runtime, DingTalk downgrade, recall_history) point to a perception that Windows testing is insufficient.
- **Channel reliability is a top pain point**: DingTalk markdown loss and Matrix multi‑workspace activation failures are causing real‑world communication breakdowns.
- **Long‑form interactions need better tooling**: The DingTalk character limit and the request for append‑only history indicate users are building complex reports and need stable, large‑message handling.
- **Configuration opacity**: Issues around stale provider models and hidden console settings reveal that users struggle to understand the current runtime state, prompting the upcoming ACP refactor.
- **Positive signals**: Recent merges (memory protection, Piccolo runtime, code‑mode tool name fix) are being welcomed and show that the maintainers respond quickly to functional regressions.

Overall sentiment is **mixed**: users appreciate rapid bug fixes for existing features but request more robust cross‑platform testing and clearer runtime configuration.

---

### 8. Backlog Watch (Long‑standing items needing attention)

| Item | Type | Age | Why It Matters |
|------|------|-----|----------------|
| **#8034** – *bound inline media per request, not just per file* (PR, under review) | Performance/Cost | Open since 2026‑09‑29 | Prevents session overload when many in‑spec images are sent; could affect paid‑gateway usage. |
| **#8467** – *chore(deps): bump agentscope to 2.0.11* (PR) | Dependency hygiene | Open since 2026‑10‑28 | Keeping core dependencies up‑to‑date is essential for security and compatibility. |
| **#8309** – *discover Ollama models before activation* (PR) | UX improvement | Open since 2026‑10‑18 | Enhances CLI ergonomics for a growing Ollama user base. |
| **#8291** – *require non‑empty api_key for ReMe reranker* (PR) | Security/Correctness | Open since 2026‑10‑17 | Prevents silent disabling of a reranker when credentials are missing. |
| **#8308** – *test(api): verify missing provider lookup returns 404* (PR) | Test coverage | Open since 2026‑10‑18 | Improves API robustness; catching provider‑missing errors early. |
| **#8567** – *fix(plugins): platform ambiguous dependency bug* (PR) | Platform compatibility | Closed (merged), but the related **#8565** still blocks Windows runtime. | Indicates a pattern of platform‑specific gaps that need a focused testing suite. |

*These items have lingered for weeks without a merge; prioritising them would reduce technical debt and improve cross‑platform stability before the next major release.*

--- 

**Health Assessment:** CoPaw is **actively developed** with a healthy PR flow, but **Windows stability** and **channel robustness** are current bottlenecks. Addressing the high‑severity bugs and advancing the session‑store feature will likely drive the next release and boost community confidence.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 5 Nov 2026**  
*(Data pulled from the GitHub repository `zeroclaw‑labs/zeroclaw`)*  

---

## 1. Today’s Overview  
- The repo saw a **high level of activity**: 18 issues were touched (16 still open) and 50 pull‑requests were updated, of which 46 remain open.  
- All activity revolves around **security hardening** (identity‑access, SOP sandbox, OIDC handling) and **runtime‑tool consistency** (cron, delegation, glob_search).  
- No new release was cut, which means the current stable line is still **v0.9.0**. The volume of high‑severity bugs and the number of PRs aimed at fixing them suggest the team is in a *stabilisation* phase prior to the next minor bump.  

---

## 2. Releases  
*No new releases were published in the last 24 h.*  

---

## 3. Project Progress – Merged / Closed PRs (today)  

| PR # | Title / Goal | Primary Area | Status | Key Impact |
|------|--------------|--------------|--------|------------|
| **#12240** | `fix(cron): persist --agent reassignment on cron update` | CLI / Cron runtime | **Open** (updated) | Corrects a data‑loss bug where `cron update --agent` reported success but never rewrote the DB record. |
| **#12238** | `fix(config): disable HTTP idle pooling in test client cache` | Test infrastructure | **Open** (updated) | Eliminates flaky “dispatch task is gone” failures caused by idle keep‑alive sockets crossing short‑lived Tokio runtimes. |
| **#12233** | `fix(gateway): limit and cap OIDC bearer verification on the config route group` | Gateway security | **Open** (updated) | Adds request‑rate‑limiting and concurrent‑verification caps to the OIDC token introspection endpoint – a direct response to Issue #12047. |
| **#12226** | `fix(tools): let glob_search list files under read‑only and outside roots` | Tool sandbox | **Open** (updated) | Fixes the two‑fold `glob_search` regression (issues #12043, #12225) – now respects read‑only roots and absolute paths outside the workspace. |
| **#12239** | `fix(rpc): hold current authority through session effects` | Runtime / Security | **Open** (updated) | Guarantees that queued session operations re‑evaluate the caller’s authority after any await, closing the loophole described in Issues #11126, #11127, #11123. |
| **#12184** | `feat(channels): add one‑tap Matrix approval reactions` | Matrix channel integration | **Open** (updated) | Improves operator workflow: reactions ✅ / 🔁 / ❌ on approval messages now map to “approve once”, “approve and remember”, and “reject”. |
| **#11286** | `feat(security): bind gateway pairing tokens to roster users` | Pairing / Identity | **Open** (updated) | Pairing tokens can now be tied to a specific roster entry, preventing the “shared‑operator” token abuse highlighted in Issue #9394. |
| **#12157** | `fix(oidc): bind enrollment callbacks to the initiating browser` | OIDC flow | **Open** (updated) | Mitigates CSRF‑style token leakage (Issue #12050) by attaching the callback page to the originating browser session. |
| **#11408** | `fix(rpc): guard SOP and session effects with current authority` | SOP sandbox | **Open** (updated) | Enforces that SOP execution and any side‑effects respect the *current* authority, closing the “wildcard tool selector” vector (Issues #11123, #11124). |
| **#11911** | `fix(channels): preserve completed tool results and reuse bounded recovery` | Channel runtime | **Open** (updated) | Keeps tool outputs across interrupted turns, fixing data loss observed in long‑running chats. |

*All of the above PRs are still open but were **updated today**, indicating active reviewer/maintainer engagement. No PRs were merged or closed in the last 24 h.*  

---

## 4. Community Hot Topics  

| # | Item | Comments / 👍 | Link | Why it matters |
|---|------|---------------|------|----------------|
| **#11126** | *Queued session operations retain revoked administrator ownership bypass* (P1, high risk) | 4 comments | <https://github.com/zeroclaw-labs/zeroclaw/issues/11126> | Directly impacts the core authority model – a revoked admin could still act on pending ops, a critical privilege‑escalation surface. |
| **#11127** | *Session‑data tools bypass principal ownership checks* (P1, high risk) | 3 comments | <https://github.com/zeroclaw-labs/zeroclaw/issues/11127> | Allows a non‑admin to read arbitrary session data, violating data‑isolation guarantees. |
| **#12047** | *OIDC bearer verification on gateway routes has no attempt limiter* (P1, high risk) | 3 comments | <https://github.com/zeroclaw-labs/zeroclaw/issues/12047> | Without rate limiting an attacker can DoS the identity‑provider and throttle legitimate traffic. |
| **#12050** | *OIDC callback token page lacks browser binding (login CSRF)* (high risk) | 2 comments | <https://github.com/zeroclaw-labs/zeroclaw/issues/12050> | Opens a classic CSRF vector for credential leakage during OIDC auth flows. |
| **#9770** | *`cron update` silently discards changes to declarative jobs* (P1, high risk) | 3 comments | <https://github.com/zeroclaw-labs/zeroclaw/issues/9770> | Misleading CLI feedback can cause unnoticed schedule drift in production. |
| **#11984** | *Dashboard chat for non‑admin signed‑in accounts* (enhancement) | 1 comment | <https://github.com/zeroclaw-labs/zeroclaw/issues/11984> | Signals a strong demand for end‑user collaboration features beyond admin‑only dashboards. |

**Underlying needs:**  

1. **Robust authority enforcement** – multiple high‑severity bugs expose gaps in the runtime’s principal‑ownership checks.  
2. **Secure OIDC handling** – rate limiting, CSRF protection, and token binding are repeatedly requested.  
3. **Transparent CLI behavior** – users need clear feedback when operations (cron, config) succeed or silently no‑op.  
4. **User‑level collaboration** – the dashboard chat request shows the community wants a richer, non‑admin UI.  

---

## 5. Bugs & Stability (ranked by severity)  

| Severity | Issue # | Title | Risk | Status | Fix PR (if any) |
|----------|--------|-------|------|--------|-----------------|
| **S0 (critical – data loss / security)** | **#11127** | Session‑data tools bypass principal ownership checks | High | Open | #12239 (authority‑hold fix) |
| | **#11123** | SOP execution accepts wildcard tool selectors without `tools:execute` | High | Open | #11408 (SOP guard) |
| | **#11124** | SOP decision gate ignores strict fallback when mode answer is valid | High | Open | #11408 (gate guard) |
| | **#11239** (closed) – owned sessions leak to shared memory | High | Closed | – |
| **S1 (high – privilege escalation)** | **#11126** | Queued session ops retain revoked admin ownership | High | Open | #12239 (authority re‑check) |
| | **#12047** | OIDC bearer verification has no limiter | High | Open | #12233 (rate‑limit) |
| | **#12050** | OIDC callback page lacks browser binding | High | Open | #12157 (bind to browser) |
| | **#12046** | Wildcard tool selector lets non‑admin keep privileged tools | High | Open | #12226 (glob_search) & #11408 (tool‑policy) |
| **S2 (moderate – degraded behavior)** | **#12145** | Plugin store limits too loose, permitting memory‑budget blow‑out | Medium | Open | – (no PR yet) |
| | **#12235** | Delegated agent returns raw text tool calls (native tools ignored) | Medium | Open | – |
| | **#12228** | `cron update --agent` reports success but never reassigns | Medium | Open | #12240 |
| | **#12236** | Cached HTTP clients shared across test runtimes cause “dispatch task is gone” | Low | Closed (issue) | #12238 (client cache fix) |
| | **#12043 / #12225** | `glob_search` drops/never lists files outside workspace | Low | Open | #12226 (fixes both) |

*Observation:* The **most severe bugs are already being addressed by PR #12239, #12233, #12226, and #11408**, indicating the maintainers are prioritising security‑critical regressions.

---

## 6. Feature Requests & Roadmap Signals  

| Feature | Issue/PR | Priority / Risk | Likelihood for Next Release (v0.9.x) |
|---------|----------|----------------|--------------------------------------|
| **Dashboard chat for non‑admin users** | #11984 (enhancement) | P2 / medium | **High** – UI work is already in the pipeline; likely to land in the next minor bump. |
| **Matrix channel one‑tap approval reactions** | #12184 (feature) | P2 / high (workflow) | **Medium‑High** – PR is open; depends on final review. |
| **Native Rust XMPP (with OMEMO)** | #11847 (feature) | P2 / high | **Low‑Medium** – Large component; may be slated for a later 0.10.0 release. |
| **SSH transport reuse for task‑owned connections** | #11869 (feature) | P2 / medium | **Medium** – Small, self‑contained change; could land in the next patch. |
| **Bounded progress reporting for long agent turns** | #11874 (fix) | P2 / medium | **High** – Already merged into master; will be part of the next binary. |
| **Explicit OpenRouter balance reporting toggle** | #11846 (config) | P2 / low | **Medium** – Config UI change, likely to be included soon. |

The **next logical release focus** appears to be *security hardening* (authority checks, OIDC rate‑limiting) plus *user‑experience polish* (dashboard chat, clearer CLI feedback, channel UI improvements).

---

## 7. User Feedback Summary  

- **Security concerns dominate:** Multiple high‑severity bug reports point to a community that is actively auditing the system for privilege‑escalation and token‑theft vectors. The repeated emphasis on OIDC handling, SOP sandboxing, and session authority shows users are deploying ZeroClaw in production‑grade environments where breach impact is material.  
- **CLI ergonomics are a pain point:** Issues #9770 and #12228 describe situations where the CLI claims success yet silently ignores user configuration, leading to schedule drift and orphaned jobs. Users want deterministic, auditable commands.  
- **File‑system sandbox confusion:** The `glob_search` regressions (#12043, #12225) broke users’ expectations around read‑only roots and absolute paths, indicating that the sandboxing model still needs clearer documentation and edge‑case handling.  
- **Collaboration features are requested:** #11984 demonstrates a desire for a “chat‑as‑user” experience on the dashboard, moving ZeroClaw toward a more collaborative AI‑assistant platform rather than a strictly admin‑only console.  

Overall sentiment: **high engagement, high expectations for security, moderate dissatisfaction with some UX quirks**.

---

## 8. Backlog Watch – Items Needing Maintainer Attention  

| # | Title | Days Open (approx.) | Why it matters |
|---|-------|---------------------|----------------|
| **#11126** – Queued session ops retain revoked admin ownership | ~42 days | Core authority regression; still open despite partial PR #10412. |
| **#11127** – Session‑data tools bypass ownership | ~42 days | Direct data‑exfiltration path for non‑admin principals. |
| **#11123** – SOP wildcard selector bypass | ~42 days | Allows privileged tool execution without explicit grant. |
| **#12046** – Wildcard tool selector keeps privileged tools | ~10 days | Affects many non‑admin users; still open after related fixes. |
| **#12145** – Plugin store memory limits too lax | ~6 days | Potential DoS via malicious plugin; no fix PR yet. |
| **#12235** – Delegated agent ignores native tool loop | ~0 days (opened today) | Breaks delegated‑agent workflows; quick triage required. |
| **#12228** – `cron update --agent` never reassigns | ~1 day | Already addressed by #12240, but the open PR still needs review before merge. |
| **#12233** – OIDC bearer verification caps (high‑risk) | ~1 day | PR #12233 is ready for review; fast merge would close a security issue. |
| **#12239** – Authority hold through session effects (XL) | ~0 days | Large PR that resolves several of the above security bugs; needs final CI pass & review. |

**Recommendation:** Prioritise reviewing and merging **PR #12239** (authority fix) and **#12233** (OIDC rate‑limit) within the next 48 h. Their acceptance would simultaneously close the most critical open issues (#11126, #12047, #11127). After that, focus on the remaining high‑severity bugs (#11123, #11124) and the user‑experience fixes for `cron` and `glob_search`.  

---  

*Prepared by the ZeroClaw open‑source analyst (2026‑11‑05).*  

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*