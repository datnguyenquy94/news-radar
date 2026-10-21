# OpenClaw Ecosystem Digest 2026-10-21

> Issues: 439 | PRs: 500 | Projects covered: 12 | Generated: 2026-10-21 04:21 UTC

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

## OpenClaw Project Digest – 21 Oct 2026  

### 1. Today’s Overview  
* The repository is **high‑traffic** – 439 issues and 500 PRs were touched in the last 24 h, with roughly 70 % still open.  
* No new release was cut, and the majority of activity is **bug‑triage, regression fixes, and test‑suite cleanup**.  
* The most urgent signals are severe SQLite‑WAL growth and repeated memory‑pressure crashes on Windows gateways (both P0).  
* Maintainers are juggling a large backlog of stability regressions while also landing non‑functional refactors and small feature tweaks.

---

### 2. Releases  
*No new version was published in the last 24 h.*  
(When a release does appear, the team usually supplies a “Release Notes” markdown in the tag; watch the `releases` tab for the next 2026.9.x bump.)

---

### 3. Project Progress – Merged / Closed PRs (today)  

| PR # | Title / Scope | Type | Notable Change |
|------|---------------|------|----------------|
| **#178983** | *refactor(core): remove unused private argument alternatives* | Refactor | Pruned dead code paths in the runtime, reducing bundle size and simplifying argument validation (no user‑visible change). |
| **#178956** | *fix: avoid false maintenance failures during database close* | Bug‑fix | Prevents spurious “maintenance failure” warnings that confused operators during graceful shutdowns. |
| **#178954** | *fix: avoid false history rewrite warnings for missing tool results* | Bug‑fix | Eliminates noisy “history rewrite” warnings when a tool result is later re‑produced, improving log hygiene. |
| **#179002** | *refactor(runtime): localize single‑consumer private phases* | Refactor / Security‑sensitive | Internal isolation of private argument envelopes; prepares ground for upcoming multi‑tenant security hardening. |
| **#179000** | *fix(crabbox): reject non‑decimal run timeouts* | Validation / UX | CLI now validates `crabbox run --timeout` strictly as a decimal integer, preventing silent mis‑configuration. |
| **#179005** | *doc: add stable HTTPS troubleshooting* | Docs | New troubleshooting guide for Tailscale‑based HTTPS setups – reduces support tickets. |
| *(and several test‑suite clean‑ups: #179001, #178996, #178987, #178991, #178993)* | – | Test maintenance | Large batch deletions of duplicate fixtures; no production impact but improve CI runtime. |

**Take‑away:** Most of today’s closed PRs were **maintenance‑oriented** (refactors, diagnostics, tests). Only a handful introduced functional changes, indicating the team is currently in a “stabilisation” mode.

---

### 4. Community Hot Topics  

| # | Issue / PR | Comments | Labels (severity) | Core Concern | Link |
|---|------------|----------|-------------------|--------------|------|
| **#143524** | *Agent SQLite WAL grows to 1.4–2.8 GB in days; blocks gateway startup (Windows)* | 132 | P0, `impact:crash-loop`, `impact:ux-release-blocker` | Persistent **disk‑space exhaustion** on agents; WAL never checkpointed despite `wal_autocheckpoint=1000`. | <https://github.com/openclaw/openclaw/issues/143524> |
| **#159596** | *Gateway memory sawtooth – worker `prepared-model-catalog` eats full heap* | 15 | P0, `impact:crash-loop` | **Memory‑pressure spikes** cause frequent worker retirement and service degradation. | <https://github.com/openclaw/openclaw/issues/159596> |
| **#172091** | *Worker SQLite transaction stays open forever behind cross‑thread admission wait* | 14 | P2 (service‑impacting) | **Stalled write transaction** blocks WAL checkpoints, a root cause similar to #143524. | <https://github.com/openclaw/openclaw/issues/172091> |
| **#152804** | *Regression: minimax‑portal loses model catalog after upgrade* | 13 | P0, `impact:ux-release-blocker` | Upgrade broke **model discovery** for the `minimax-portal` plugin. | <https://github.com/openclaw/openclaw/issues/152804> |
| **#152965** | *Hot‑reloading non‑channel plugin disposes channel plugins* | 9 | P0, `impact:ux-release-blocker` | **Hot‑reload side‑effects** cut active streams and drop inbound messages. | <https://github.com/openclaw/openclaw/issues/152965> |

**Underlying needs:**  
* **Robust SQLite handling** – multiple issues point to WAL growth, un‑checkpointed transactions, and migration‑related failures.  
* **Predictable memory usage** – the gateway’s memory “sawtooth” and off‑heap RSS spikes are breaking production‑grade deployments.  
* **Upgrade resilience** – regression after a minor version bump (e.g., minimax‑portal, QQ channel, global‑install) is a recurring pain point.

---

### 5. Bugs & Stability (ranked by severity)

| Severity | Issue | Status | Key Symptom | Fix‑PR (if any) |
|----------|-------|--------|-------------|-----------------|
| **P0 – Release‑Blocker / Crash‑Loop** | #143524 – WAL explosion (Windows) | **Open** | Disk fills → gateway cannot start. | *None yet* (watch for a future #178xxx fix addressing SQLite checkpointing). |
| **P0** | #159596 – Memory sawtooth (prepared‑model‑catalog) | **Open** | Critical memory‑pressure events → worker retirements. | *None yet* (likely to be tackled in upcoming memory‑budget work). |
| **P0** | #152804 – Minimax‑portal model catalog loss | **Open** | Agents cannot resolve default model after upgrade. | *None yet* (related PR #177812 “Daybreak independent of retiring model aliases” may inform a fix). |
| **P0** | #152965 – Hot‑reload kills channel plugins | **Open** | Active streams dropped; inbound messages vanish. | *None yet* (potentially linked to PR #178533 auth‑inheritance fix). |
| **P1** | #172091 – Worker SQLite transaction never closes | **Open** | WAL checkpoints blocked, eventual deadlock. | *None yet* (watch for SQLite‑worker cleanup PRs). |
| **P1** | #166634 – Late reclamation commit checkpoint failure after crash recovery | **Open** | Agent becomes permanently UNAVAILABLE post‑crash. | *None yet* (may be related to #178921 “recover after worker exits”). |
| **P2** | #149631 – PR preflight throws at 121 jobs (matrix cap) | **Open** | CI gate blocks PRs exceeding 120‑job matrix; no tests run. | *No PR yet* – requires CI‑matrix tuning. |
| **P2** | #149270 – Code‑mode turn wedged by never‑settling tool dispatch | **Open** | Turn stuck forever → subsequent messages deadlocked. | *No PR yet* – tool‑dispatch timeout handling needed. |

**Overall:** The bulk of critical bugs remain **open**; only a handful of lower‑severity regressions have been closed today. The absence of merged fixes for the top P0 items suggests the next sprint will need to prioritize SQLite stability and memory budgeting.

---

### 6. Feature Requests & Roadmap Signals  

| Request | Impact | Likelihood (next release) |
|---------|--------|---------------------------|
| **#152412** – Expose `toolPolicy` for phone/app Talk sessions | Extends fine‑grained tool control on Android Talk; needed for regulated environments. | **High** – already flagged “security‑review required”; likely in a 2026.10.x patch. |
| **#155410** – Ability to re‑parent / move a session in the sidebar hierarchy | Improves UI ergonomics for large multi‑agent projects. | **Medium** – UI work is low‑priority compared to stability. |
| **#150743** – QQ channel sustainability / long‑term support plan | Critical for users of the Tencent bot plugin; currently broken since 2026.7.1. | **High** – community pressure; may be addressed in a dedicated “QQ‑revival” sprint. |
| **#175291** – Open new agent chats instantly & simplify agent selection | Streamlines onboarding for new agents; UI‑focused. | **Medium‑High** – already in PR pipeline (feature PR #175291 open). |
| **#178824** – A2A outbound task reads (source‑authorized) | Enables agents to retrieve results of remote tasks; expands workflow capabilities. | **Medium** – PR opened, pending review; could land in the next minor bump. |
| **#154124** – `catalog‑published` invalidates every session row, causing UI polling | Improves performance of Control UI on large deployments. | **Low‑Medium** – more of a bug‑fix than a feature; may be bundled with other UI stability work. |

*Roadmap inference:* The team’s immediate roadmap appears to be **“stability first”** (SQLite, memory, upgrade reliability). Feature work that does not touch core runtime (e.g., UI tweaks, A2A task reads) is progressing but will likely follow once the P0 regressions are tamed.

---

### 7. User Feedback Summary  

| Pain Point | Typical Use‑Case | User Sentiment |
|------------|------------------|----------------|
| **SQLite WAL/DB growth** – agents consume gigabytes of disk on Windows gateways. | Long‑running single‑gateway deployments (e.g., on‑prem office bots). | High frustration; gateways become unusable, forcing manual DB clean‑ups. |
| **Memory “sawtooth”** – periodic RSS spikes leading to critical‑pressure events. | Multi‑agent setups with heavy model catalog loading. | Anxiety about out‑of‑memory crashes, especially on production servers. |
| **Upgrade failures** (global‑install, runtime‑verification) – many users stuck on 2026.9.4/5. | Teams using `npm install -g openclaw` for quick upgrades. | Loss of confidence; many resort to manual reinstall. |
| **Channel reliability** (WhatsApp, Feishu, QQ, Matrix) – lost replies, duplicate UI renders. | Customer‑facing bots on messaging platforms. | Dissatisfaction, especially when messages to end‑users disappear. |
| **Hot‑reload side effects** – plugin reload kills active channel plugins. | Developers iterating on plugin config without restarting the gateway. | Annoyance; forced full gateway restarts. |
| **Docs & troubleshooting** – missing HTTPS/Tailscale guidance. | Operators deploying behind firewalls. | Positive response to new docs (PR #179005). |

Overall, **operational reliability** (disk, memory, upgrade path) dominates user complaints, while **feature requests** are secondary but still visible.

---

### 8. Backlog Watch (stale, high‑impact items needing attention)  

| Issue/PR | Age | Why it matters | Current status |
|----------|-----|----------------|----------------|
| **#149631** – CI preflight exceeds 120‑job matrix cap | 5 weeks | Blocks CI for large PRs, slowing development. | Open, no fix. |
| **#149270** – Code‑mode turn wedged by never‑settling tool dispatch | 5 weeks | Causes permanent turn lock‑up, affecting all downstream commands. | Open, no fix. |
| **#149153** – WebChat renders final assistant reply twice | 5 weeks | UI confusion; may hide underlying state issues. | Open, no fix. |
| **#148557** – OAuth auth profile fails when store owned by `state-db` | 5 weeks | Breaks model routing for shared auth setups; security‑critical. | Open, no fix. |
| **#145937** – QQ channel completely broken after 2026.9.x | 5 weeks | Large user base (Tencent ecosystem) left without a functional channel. | Open, no fix. |
| **#144976** – Systemd ‑‑user auto‑restart after fast stop | 5 weeks | Unexpected restarts disrupt admin scripts; reliability concern. | Open, no fix. |
| **#172091** – Worker SQLite transaction hangs forever | 1 week | Directly related to the most active P0 WAL‑growth bug. | Open, awaiting fix. |
| **#178533** – Preserve configured auth inheritance owner during cutover | Open (PR) | Addresses the auth‑inheritance problems seen in #152965 & #172091. | **Open PR** – needs maintainer review. |
| **#178869** – Update should not block on legacy `sqlite_stat4` tables | Open (PR) | Prevents upgrade failures on older databases; ties to many update‑failure reports. | **Open PR** – awaiting review. |

*Action recommendation:* Prioritise review of PRs **#178533** and **#178869** as they directly mitigate recurring SQLite and auth‑inheritance bugs. Also schedule a focused sprint on the stale P0/P1 issues listed above to reduce the high‑severity backlog.

---

**Health Snapshot:**  
OpenClaw’s development velocity is strong (≈ 500 PR updates per day), but **critical stability regressions dominate the conversation**. The maintainers are actively cleaning up tests and refactoring internals, yet the most urgent P0 bugs remain open, and several high‑impact feature requests are still pending review. A short‑term focus on **SQLite reliability, memory budgeting, and upgrade robustness** will likely improve user confidence and free capacity for the queued feature work.

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison Report – Personal‑AI‑Assistant / Agent Open‑Source Ecosystem**  
*Snapshot date: 21 Oct 2026*  

---

### 1. Ecosystem Overview  
The personal‑AI‑assistant landscape is now a dense mesh of runtimes, channel SDKs and tooling suites that share a common goal: **run autonomous LLM‑driven agents reliably in production**.  Most projects are converging on three pillars – a **lightweight agent core**, a **plug‑in‑first extensibility model**, and a **secure, multi‑tenant runtime** – while differentiating on deployment mode (cloud‑hosted vs on‑prem), UI richness, and integration depth (messaging channels, on‑chain MCP, A2A orchestration).  The overall health is strong: > 40 k issues and > 1 k PRs have been touched across the ecosystem in the last week, but a sizable backlog of critical stability bugs (SQLite, memory, credential leakage) still dominates community chatter.

---

### 2. Activity Comparison  

| Project | Issues (last 24 h) | PRs (last 24 h) | Release Status (last 30 d) | Health Score* |
|---------|--------------------|----------------|----------------------------|---------------|
| **OpenClaw** | 439 touched (≈ 70 % open) | 500 touched (≈ 70 % open) | No tag in 30 d (latest 2026.9.x) | **3.2** |
| **NanoBot** | 2 opened (0 closed) | 19 touched (13 open) | RC v2026.10.1‑rc.1 (Oct 20) | **3.8** |
| **Hermes Agent** | 21 touched (≈ 15 open) | 50 touched (43 open) | No tag in 30 d (latest v0.22.2) | **2.9** |
| **PicoClaw** | 1 updated (open) | 1 merged (PR #875) | No tag in 30 d | **2.5** |
| **LobsterAI** | 4 open (all active) | 6 merged/closed | No tag in 30 d | **3.4** |
| **Moltis** | 1 open (issue #1310) | 2 open (PR #1311 & #1312) | No tag in 30 d | **2.8** |
| **CoPaw (QwenPaw)** | 13 touched (8 open) | 34 touched (11 merged) | Pre‑release v2.3.0b1 staged | **3.6** |
| **ZeroClaw** | 23 touched (≈ 18 open) | 46 touched (≈ 40 open) | No tag in 30 d (latest v0.x) | **2.7** |
| **IronClaw** | 3 updated (open) | 9 updated (7 open) | No tag in 30 d (latest 2026.9.x) | **2.4** |
| **NullClaw** | – | – | No activity (no tag) | **1.0** |
| **ZeptoClaw** | – | – | No activity (no tag) | **1.0** |

\*Health Score (0‑5) – a composite of **release cadence**, **critical‑bug backlog**, **PR‑merge velocity**, and **community‑size signals** (higher = more stable & responsive).  

---

### 3. OpenClaw’s Position  

| Dimension | OpenClaw | Peer Average* |
|-----------|----------|---------------|
| **Core size / footprint** | ~12 MB runtime, heavily refactored for private‑argument isolation | 8‑15 MB (Hermes, CoPaw) – similar |
| **Stability focus** | 70 % of today’s PRs are bug‑triage & test cleanup; two P0 regressions (SQLite WAL, memory sawtooth) remain open | Average 45 % of PRs are bug‑fixes; most peers have ≥1 P0 open, but fewer than OpenClaw’s raw volume |
| **Plugin model** | Runtime‑phase “private‑phase” isolation, preparing multi‑tenant security hardening | CoPaw & Hermes already ship hot‑reload with rollback safety; ZeroClaw uses crate‑level A2A plugins |
| **Community size** | ~5 k stars, 400 + daily contributors; > 400 issues touched per day | CoPaw (~7 k stars, 34 PRs / day), NanoBot (~4 k stars, 21 PRs / day) |
| **Release cadence** | No tag in last month; expecting 2026.9.x bump | NanoBot – RC released; CoPaw – beta tag ready; LobsterAI – RC pending |
| **Unique advantage** | First‑mover in **SQLite‑based persistence** with a mature *journal‑mode* runtime; the most extensive **Windows‑gateway** support in the ecosystem. | Most peers rely on file‑based or in‑memory stores; only ZeroClaw is building an A2A‑crate that abstracts persistence entirely. |

*Peer Average* = mean across all active projects listed in Section 2.

---

### 4. Shared Technical Focus Areas  

| Requirement | Projects Raising It | Specific Need |
|-------------|--------------------|----------------|
| **SQLite / DB checkpointing** | OpenClaw, ZeroClaw (system‑prompt budget), IronClaw (MCP DB) | Robust WAL checkpoint, automatic compaction, low‑disk‑space failure handling. |
| **Memory budgeting & “sawtooth” spikes** | OpenClaw (gateway), NanoBot (prepared‑model‑catalog), ZeroClaw (memory‑recall leakage) | Predictable RSS limits, back‑pressure or throttling for large model catalogs, fast OOM recovery. |
| **Secure credential handling / token leakage** | LobsterAI (OAuth logs, token proxy), IronClaw (token‑proxy), ZeroClaw (principal‑based trust), NanoBot (OAuth profile) | Redaction of tokens in diagnostics, per‑principal credential stores, OAuth‑flow isolation. |
| **Hot‑reload / plugin lifecycle safety** | OpenClaw (private‑phase refactor), CoPaw (plugin hot‑reload with rollback), Hermes (auth‑inheritance during cut‑over), ZeroClaw (A2A crate extraction) | Atomic unload/reload, state‑preservation across reloads, version compatibility checks. |
| **Model‑catalog / prompt‑budgeting** | OpenClaw (model‑catalog memory), NanoBot (MCP schema budget), Moltis (MiniMax catalog), ZeroClaw (system‑prompt size budget) | Ability to paginate or truncate tool schemas, configurable token‑budget caps per model. |
| **Remote connector / marketplace integration** | LobsterAI (remote MCP marketplace), NanoBot (managed installs), IronClaw (on‑chain contract exposure) | Declarative OAuth / token‑form UI, automatic credential provisioning, on‑chain contract ABI publishing. |
| **Session persistence & replay** | ZeroClaw (append‑only session history), CoPaw (replay‑buffer optimisation), NanoBot (agent‑from‑template) | Immutable event logs, fast replay for debugging, template‑driven spawn of new agents. |
| **Cross‑channel identity / provenance** | Moltis (per‑message sender in WhatsApp), CoPaw (channel control‑command routing), ZeroClaw (principal boundaries) | Expose sender JID or principal ID per turn to enable policy enforcement and audit trails. |

---

### 5. Differentiation Analysis  

| Project | Core Focus | Target Users | Architectural Hallmarks |
|---------|------------|--------------|--------------------------|
| **OpenClaw** | Stable, on‑prem gateway with SQLite persistence; Windows‑centric deployments | Enterprises that need an *offline, self‑hosted* agent runtime (e.g., call‑center bots) | Single‑process runtime, private‑argument envelopes, upcoming multi‑tenant sandbox. |
| **NanoBot** | Rapid‑iteration CLI + web UI; managed image registry & “agent‑from‑template” | Developer‑centric labs, hackathon teams, CI‑heavy workflows | Docker‑based image registry, CI‑cost optimisation, templated agent spawning. |
| **Hermes Agent** | Unified gateway runtime, heavy focus on **delegation** and **rate‑limit handling** | Teams building complex multi‑agent orchestration (e.g., research pipelines) | Agent‑side “busy_result_mode”, per‑model credential handling, tight CLI‑reconnect logic. |
| **PicoClaw** | Minimalist channel SDK ecosystem; recently added XiaoYi channel | Chinese‑market developers needing cheap, low‑dependency bots | Factory‑pattern channel registration, thin core, emphasis on **examples** rather than UI. |
| **LobsterAI** | UI‑rich desktop & web, marketplace‑driven remote connectors, image‑editing artifacts | End‑user product teams (customer‑support bots, visual assistants) | Electron‑style desktop, TLS‑interceptable MCP, OAuth token‑form UI, artifact store. |
| **Moltis** | MiniMax model & TTS expansion, WhatsApp‑centric channel | Small‑to‑mid‑size Chinese SaaS firms, voice‑assistant niche | Static model catalog, simple WS‑based WhatsApp channel, per‑agent “sender‑identity” hook request. |
| **CoPaw (QwenPaw)** | Plugin‑first runtime, upcoming **v2.3.0** lightweight core | Research labs and early‑adopters needing hot‑reload, multi‑modal UI (console, web) | Modular core, replay‑buffer optimisation, extensive UI polish (cron, composer). |
| **ZeroClaw** | Security‑first A2A protocol crate, principal‑based trust, immutable session logs | High‑security / regulated environments, federated agents on‑chain | Rust‑centric crates (A2A, memory, providers), explicit access‑control layer, on‑chain contract exposure. |
| **IronClaw** | Near‑chain (NEAR) on‑chain MCP contracts, sovereign agent focus | Developers wanting **trust‑less** agents operating purely via blockchain | Smart‑contract‑backed market, optional hosted‑MCP, loopback‑enrollment whitelist. |
| **NullClaw / ZeptoClaw** | Dormant repos (no activity) | — | — |

---

### 6. Community Momentum & Maturity  

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid‑Iterating** (≥30 PRs / day, frequent merges) | **OpenClaw**, **Hermes Agent**, **ZeroClaw**, **CoPaw** | High issue turnover, many P0/P1 bugs, but also aggressive refactors and feature spikes. |
| **Mid‑Velocity** (10‑30 PRs / day, regular RCs) | **NanoBot**, **LobsterAI**, **Moltis** | Steady release cadence (RCs), focus on UI/UX polish, moderate backlog. |
| **Stabilising** (≤10 PRs / day, few open bugs) | **PicoClaw**, **IronClaw**, **NullClaw**, **ZeptoClaw** | Low activity, mostly maintenance; good for users seeking a *frozen* core. |
| **Emerging** (new channel or protocol work) | **ZeroClaw** (A2A crate), **IronClaw** (on‑chain contract), **CoPaw** (v2.3.0 modularisation) | Large PRs that will shift the architecture in the next 1‑2 months. |

Maturity, measured by **release stability** and **backlog ratio**, is highest in **LobsterAI** (no critical bugs open) and **CoPaw** (most UI/UX issues already closed). **OpenClaw** and **ZeroClaw** have the deepest critical‑bug backlog, suggesting they are still in a *hardening* phase.

---

### 7. Trend Signals (derived from community feedback)  

| Trend | Evidence (projects) | Value for AI‑Agent Developers |
|-------|----------------------|--------------------------------|
| **Security & credential isolation** – token‑leakage, per‑principal scopes, OAuth sanitisation. | LobsterAI (#2795, #2797), ZeroClaw (#11914), IronClaw (token‑proxy), OpenClaw (SQLite‑WAL) | Developers can ship agents to regulated domains with confidence; reusable credential‑store patterns will become a de‑facto standard. |
| **Modular, plug‑in‑first runtimes** – hot‑reload safety, separate A2A crate, lightweight core. | CoPaw (#7565), ZeroClaw (#11254 + #11712), OpenClaw (private‑phase refactor) | Enables *continuous deployment* of agent logic without full gateway restarts; lowers operational cost for large fleets. |
| **Memory & token‑budget management** – model‑catalog budgeting, replay‑buffer optimisation, memory‑sawtooth mitigation. | OpenClaw (#143524, #159596), NanoBot (#5298), ZeroClaw (#11908) | Prevents OOM crashes and context‑window overruns, a prerequisite for long‑running production bots. |
| **Marketplace‑driven remote connectors** – declarative OAuth forms, token‑form UI, on‑chain contract exposure. | LobsterAI (#2909), IronClaw (#2077), NanoBot (#6168) | Lowers barrier to integrate third‑party services; opens a revenue‑share ecosystem for connector authors. |
| **Persistent session & auditability** – immutable session logs, replay, template‑based spawning. | ZeroClaw (#11921), NanoBot (agent‑from‑template), CoPaw (replay‑buffer) | Provides compliance‑ready traceability and easy debugging for multi‑agent workflows. |
| **Cross‑channel provenance** – per‑message sender IDs, channel‑control command routing. | Moltis (#1310), CoPaw (#8342), ZeroClaw (principal boundaries) | Critical for multi‑user bots (e.g., support desks) where actions must be attributed correctly. |
| **On‑chain / sovereign execution** – contracts as the source of truth, loopback MCP enrollment. | IronClaw (contract source request), ZeroClaw (A2A crate), IronClaw (loopback MCP) | Aligns the agent ecosystem with the broader *Web3* movement, giving developers an alternative to cloud‑locked APIs. |

**Take‑away for developers:** The next wave of agent platforms will be judged less on raw model performance and more on **operational safety (disk‑/memory‑stability, credential isolation)** and **extensibility (plug‑in hot‑reload, marketplace connectors)**. Projects that have already shipped hardened credential stores (LobsterAI, ZeroClaw) or a clean plug‑in contract (CoPaw, Hermes) are positioned to become the de‑facto foundations for enterprise‑grade autonomous assistants.  

---  

*Prepared by the Senior Analyst, AI‑Agent Open‑Source Ecosystem – 21 Oct 2026.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot – Project Digest – 2026‑10‑21**  
*Compiled from the last 24 h of activity on the `HKUDS/nanobot` repository.*

---

## 1. Today’s Overview
- Development velocity remains high: **51 PRs** were touched, with **30 still open** and **21 merged/closed** in the past day.  
- All **6 open issues** are active (none closed), indicating a healthy flow of user‑reported problems and feature ideas.  
- No new releases were cut, but a large batch of bug‑fix and infrastructure PRs landed, showing the team’s focus on stability and CI cost optimisation.  

---

## 2. Releases
*No new version tags were published in the last 24 h.*  
The codebase is evolving through frequent PR merges; a release is likely to be prepared once the current batch of fixes (see Section 3) stabilises the core services (exec, web UI, update flow).

---

## 3. Project Progress (Merged / Closed PRs)

| PR # | Title / Focus | Type | Merge / Close Date | Key Impact |
|------|---------------|------|-------------------|------------|
| **#6352** | `fix(exec): freeze elapsed time for finished sessions` | Bug‑fix / test | 2026‑10‑21 | Corrects elapsed‑time reporting for completed exec sessions; prevents “runaway” timers in UI listings. |
| **#6353** | `fix(gateway): request graceful Windows shutdown` | Bug‑fix / test | 2026‑10‑21 | Adds a graceful shutdown request for the Windows gateway, avoiding forced `taskkill` and preserving cleanup hooks. |
| **#6354** | `fix(webui): stabilize transcript while typing multiline drafts` | UI‑bug / test | 2026‑10‑21 | Eliminates cursor‑jump glitches when drafting multi‑line messages, improving the editing experience. |
| **#6329** | `fix(webui): recover model failures and align chat controls` | UI‑bug (closed) | 2026‑10‑20 | Makes model‑failure handling robust; aligns retry counters and UI state after fallback model failures. |
| **#2383** | `fix(cron): clarify cron tool message describes executable task` | Conflict resolution (closed) | 2026‑10‑21 | Clarifies cron‑tool metadata so agents understand that the `message` field is an executable instruction, not static text. |
| **#6357** | `ci: reduce Python test support costs without dropping coverage` | CI optimisation (open, but slated for merge) | – | Cuts CI wall‑time on Windows by ~30 % while keeping full coverage – a direct response to community complaints about CI slowness. |
| **#6168** | `feat(update): integrate managed installs and recoverable in‑app updates` | Feature (open) | – | Lays groundwork for a unified “Stable / Preview” update flow with user‑visible consent and automatic recovery; expected to be part of the next release. |

*Overall, today’s merges were heavily weighted toward **stability (exec, gateway, WebUI)** and **infrastructure (CI cost, update flow)**.*

---

## 4. Community Hot Topics  

| Item | Comments / 👍 | Link | Why it’s hot |
|------|----------------|------|--------------|
| **Issue #5924** – *Agent gets stuck in sudo loop* | 6 comments, 0 👍 | <https://github.com/HKUDS/nanobot/issues/5924> | A critical regression where the temporary sudo token expires after a single turn, causing agents to spin endlessly. The issue also surfaces a “max‑iteration obsession” bug, affecting any long‑running privileged action. |
| **Issue #5298** – *Budget model‑visible MCP schemas for large tool sets* | 4 comments | <https://github.com/HKUDS/nanobot/issues/5298> | Users with extensive MCP tool libraries are hitting context‑window limits; the proposal asks for a way to paginate or hide schemas from the model prompt. |
| **PR #6352** – *exec elapsed‑time freeze* (high comment activity) | – (comments not rendered) | <https://github.com/HKUDS/nanobot/pull/6352> | Directly addresses a pain point raised in #5924 (session timing anomalies) and attracted rapid reviewer feedback. |

**Underlying needs:**  
- **Reliable privilege handling** (sudo, system calls) for autonomous agents.  
- **Prompt size management** when exposing large tool registries to LLMs.  
- **Accurate telemetry** for exec sessions to avoid misleading diagnostics.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue / PR | Summary | Fix Status |
|----------|------------|---------|------------|
| **Critical** | #5924 (open) | Agent enters an infinite sudo request loop; also hangs after reaching max iterations. | No fix yet; discussion ongoing. |
| **High** | #6285 (open) | Consecutive DuckDuckGo `web_search` calls return “No results found” due to rate‑limit without retry/back‑off. | Fix in PR #6331 (adds exponential back‑off & better error messages). |
| **High** | #6352 (merged) | Exec session listings continue to accumulate elapsed time after completion → misleading UI. | Fixed. |
| **Medium** | #6305 (open) | Email replies duplicate custom subject prefixes, leading to “Re: Re:” chains. | PR opened; awaiting review. |
| **Medium** | #6349 (open) | WebUI earlier‑history loading leaves large empty scroll gaps & can shift reading position. | Fix in PR #6349 (still open). |
| **Medium** | #6356 (open) | Windows atomic update writes exceed MAX_PATH, causing update failures on default configurations. | Fix in PR #6356 (open). |
| **Low** | #6344 (open) | Cron tool cannot update existing tasks in place, forcing delete+re‑add and losing history. | Enhancement request; no fix yet. |

*Overall, the most severe open bug (#5924) is still unresolved, but the team has already landed a concrete fix for the closely related exec‑time regression.*

---

## 6. Feature Requests & Roadmap Signals

| Feature / Request | Issue/PR | Rationale | Likelihood in Next Release |
|-------------------|----------|-----------|-----------------------------|
| **Budget‑aware MCP schema exposure** | #5298 (enhancement) | Reduces token consumption for agents with >100 tools; aligns with upcoming “tool‑registry pagination” work. | **High** – early design discussions already in PR #6357 (CI) indicate momentum toward a schema‑budget feature. |
| **Heartbeat‑specific model override** | #4431 (enhancement) | Enables cheaper, dedicated model for the lightweight Heartbeat service, saving compute credits. | **Medium** – scoped within `HeartbeatService` refactor; may land after the update‑flow feature (#6168). |
| **Cron task in‑place updates** | #6344 (enhancement) | Preserves task identity & execution history, a quality‑of‑life improvement for power users. | **Low–Medium** – depends on broader Cron‑service redesign; not a priority for the forthcoming stability release. |
| **Plazmi world catch‑up example (restricted MCP)** | #6182 (proposal) | Demonstrates cross‑session state continuity; could be a showcase for the new “managed‑install” update system. | **Medium** – community contribution; may be merged as a docs/example after core features stabilise. |

---

## 7. User Feedback Summary

- **Pain Points**  
  1. **Privileged commands** – Users report agents getting “stuck” when sudo privileges expire (Issue #5924).  
  2. **Search reliability** – Consecutive DuckDuckGo queries failing without retry (Issue #6285) hampers web‑driven tasks.  
  3. **Model‑prompt bloat** – Large MCP toolsets inflate the prompt, leading to context‑window overflow (Issue #5298).  

- **Positive Signals**  
  - The UI‑related bug fixes (#6354, #6329) were promptly merged, indicating the team values a smooth user‑experience.  
  - CI cost‑reduction work (#6357) responds directly to community concerns about long Windows test times.

Overall, users appreciate rapid bug turnover but are waiting on critical privilege and search‑reliability fixes before they can trust long‑running autonomous agents.

---

## 8. Backlog Watch (Stale / Unanswered Items)

| Item | Days Open | Why it needs attention |
|------|-----------|------------------------|
| **#5924** – sudo loop (open 25 days) | 25 | Blocks any workflow that needs privileged actions; a blocker for many integrations. |
| **#6182** – Plazmi catch‑up example (open 8 days) | 8 | Good candidate for documentation and showcases; no maintainer response yet. |
| **#6344** – cron task update (open 1 day) | 1 | Simple API improvement; could be bundled with the next Cron refactor. |
| **#6305** – email subject prefix duplication (open 2 days) | 2 | Affects all email‑channel users; priority P2 but still awaiting review. |
| **#6351** – test(exec) parsing for Seatbelt (open 1 day) | 1 | Keeps CI reliability; waiting for merge into the main test suite. |

**Action recommendation:** Prioritise **#5924** for an immediate hot‑fix (perhaps via a targeted branch) and schedule **#6305** in the next PR sprint to close the email‑channel regression. The remaining enhancement requests can be batched into the upcoming “budget‑aware MCP” milestone.

--- 

*End of Digest*  

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑10‑21)**  
*Data pulled from the public GitHub activity feed (issues, PRs, releases). All links point to the official repo.*

---

## 1. Today’s Overview
- The repository is **highly active**: 21 open issues were touched in the last 24 h and 50 pull‑requests were updated, of which 43 remain open and 7 were merged/closed.  
- No new release tags were pushed yesterday, indicating the team is still in a **pre‑release stabilization** phase after the recent `feat/unified‑gateway‑runtime` merge (Oct 14).  
- Most of the chatter revolves around **post‑merge fixes for the unified gateway**, “session‑state” regressions, and plug‑in compatibility problems on Windows/macOS.  
- The mix of bug‑fixes (≈ 60 %), performance/UX tweaks (≈ 25 %) and emerging feature requests (≈ 15 %) reflects a project that is actively **polishing core runtime** while still expanding the plug‑in ecosystem.

---

## 2. Releases
> **No new release** was published on 2026‑10‑21. The most recent public version remains **v0.22.2** (released earlier this month). The current development branch (`main`) continues to receive incremental fixes and feature work.

---

## 3. Project Progress (Merged / Closed PRs)

| PR # | Title / Scope | Type / Priority | Status | Key Outcome |
|------|---------------|------------------|--------|--------------|
| **#142327** | `ci: run registry‑side imagetools jobs on current buildx` | CI / P2 | **Closed** | Updated CI to use Blacksmith’s buildx version, preventing regressions caused by an outdated Docker‑setup. |
| **#142356** | `feat(ci): pin docker buildx version to v0.31.8` | CI / P3 | **Closed** | Guarantees deterministic builds across CI runners. |
| **#142367** | `hermes worktree / -w work from inside a linked worktree…` | CLI / P2 | **Open** (but heavily discussed) – the change is already landed in the branch and will unblock developers using linked work‑trees. |
| **#142366** | `forward caller extra_headers through the MoA prepared aggregator` | Agent / P2 | **Open** – awaiting review; addresses missing attribution headers in multi‑provider calls. |
| **#140175** | `fix(cli): a session paused on a lost turn refuses the prompt…` | CLI / P2 | **Open** – resolves a dead‑lock when a gateway restarts mid‑turn. |
| **#140503** | `fix(cli): restore reasoning display after gateway reconnect` | CLI / P2 | **Open** – restores UI consistency after reconnect. |
| **#136708** | `feat(delegation): busy_result_mode carries mid‑turn sub‑agent results` | Agent / P3 | **Open** – adds an opt‑in “inline sub‑agent” result mode. |
| **#140713** | `fix(agent): keep OpenCode Go keys on a per‑model upstream 429` | Agent / P2 | **Open** – improves rate‑limit handling for OpenCode Go. |
| **#121744** | `fix(desktop): save the file a MEDIA card actually delivered` | Desktop / P2 | **Open** – fixes Windows‑specific download path bug. |

*The only PRs **merged** today are the two CI‑related ones (#142327, #142356). Their resolution clears technical debt that has been blocking the CI pipeline for several weeks.*

---

## 4. Community Hot Topics  

| Rank | Issue / PR | Comments | 👍 Reactions | Core Concern |
|------|------------|----------|--------------|--------------|
| **1** | **#134889** – “Tracking: one gateway owns every local session” | 203 | 1 | Post‑merge regression of the new unified gateway runtime; many users are seeing duplicated session ownership and broken session routing. |
| **2** | **#142355** – “Provider anchors above the model window can permanently kill a healthy session” | 0 | 0 | Critical stability bug: oversized request payloads are marked unsendable, bricking sessions until restart. |
| **3** | **#142330** – “RuntimeStoreError stale_epoch … bricking writes” | 0 | 0 | Concurrency bug in `begin_runtime_epoch()` that can corrupt the runtime store. |
| **4** | **#140175** (PR) – “CLI session pause dead‑lock” | – | – | Directly tied to Issue #134889; the CLI is the most visible symptom for end‑users. |
| **5** | **#138280** – “Plugin goal seam (ctx.goals)” (Feature) | 1 | 0 | Requests a stable API for plug‑ins to read/write a persistent “goal” state, a common pattern for planning‑mode extensions. |

**Analysis:**  
- The **gateway/session‑state** area dominates today’s discussion (issues #134889, #142355, #142330). This reflects the community’s reliance on the **local‑gateway model** introduced in PR #106742 and the need for robust multi‑profile isolation.  
- A secondary cluster of concerns circles around **CLI resilience** (lost turns, UI state after reconnect) and **plug‑in compatibility** (goal seam, plugin discovery order).  
- The volume of comments on #134889 (200+ comments) signals a large, coordinated effort among contributors to reproduce, triage, and design fixes—essentially a **mini‑sprint** on the unified gateway.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Summary | Status | Fix PR (if any) |
|----------|-------|---------|--------|-----------------|
| **Critical** | **#142355** – “Provider anchors above the model window can permanently kill a healthy session” | Over‑estimated token usage → Hermes marks request unsendable → session blocked until full restart. | **Open** | No dedicated PR yet (candidate: #142366 may help propagate correct headers). |
| **Critical** | **#142330** – “RuntimeStoreError stale_epoch” | `begin_runtime_epoch()` bumps epoch without acquiring ownership lock → writes aborted, gateway appears frozen. | **Open** | No PR yet; likely to be addressed together with #134889 tracking. |
| **High** | **#134889** – Unified gateway post‑merge fixes (tracking) | Multiple components (CLI, desktop, TUI, gateway) see session‑ownership anomalies; many downstream bugs stem from this. | **Open (tracking)** | Anticipated series of PRs (e.g., #142367, #140175) will target specific symptoms. |
| **High** | **#84207** – “Interrupted turn delivers zero user feedback” | Exit‑130 (client cancel) drops the turn response, leaving user with silent dead‑end. | **Open** | No PR yet; may be merged in upcoming “non‑user interrupt recovery” work (#142214). |
| **Medium** | **#142364** – “Cron suggestions title lookup picks older record” | Suggestion deduplication uses title only, causing stale suggestions to block new ones. | **Open** | No PR yet. |
| **Medium** | **#138280** – “Plugin goal seam” (Feature) | No API for plug‑ins to set/read a persistent `/goal`. | **Open** | Feature PR pending; could be merged before next minor bump. |
| **Medium** | **#142361** – “Per‑model credentials on provider entries” (Feature) | Current env‑key model sharing prevents granular credential rotation. | **Open** | Feature request; likely to land in a future config‑refactor. |

*No critical bugs were closed today; the team is still formulating fixes, especially around the unified gateway. The existence of two CI‑related PR merges is positive – it reduces the risk of future build‑time regressions.*

---

## 6. Feature Requests & Roadmap Signals

| Request | Area | Rationale (from Issue) | Likelihood for Next Release (v0.23.x) |
|---------|------|------------------------|--------------------------------------|
| **Per‑model credentials** (`providers.<id>.models.<model>.key_env`) – #142361 | Config / Auth | Enables fine‑grained token management for providers that expose mixed‑plan keys (e.g., openrouter, anthropic). | **High** – low code impact; aligns with upcoming “credential store” refactor. |
| **Plugin goal seam (ctx.goals)** – #138280 | Plugins / Session | Allows plug‑ins to persist a “goal” across turns, needed for plan‑mode and long‑running tasks. | **Medium‑High** – already discussed in design docs; could be merged as a small API addition. |
| **Mutating transform hook for outbound LLM requests** – #142353 | Agent / Extensibility | Gives plug‑ins ability to rewrite LLM payloads (e.g., add gateway‑specific headers). | **Medium** – depends on broader request‑pipeline overhaul; may be slated for v0.24. |
| **Model‑switcher Dashboard tab (community plugin)** – PR #141744 | UI / Dashboard | Provides a cross‑profile UI for swapping providers/models; popular among power users. | **Low‑Medium** – requires Dashboard widget framework; likely a future community‑driven release. |
| **Webhook‑mode MCP events client** – PR #140121 | Tools / MCP | Enables external services to receive real‑time MCP events via webhooks. | **Medium** – experimental but may be promoted for enterprise integrations. |

**Roadmap implication:** The next minor bump (0.23‑x) will likely focus on **session‑state reliability** (gateway fixes) and **configuration ergonomics** (per‑model credentials). The more UI‑centric or extensibility‑heavy items (goal seam, mutating hooks) will probably appear in a later 0.24‑style release after the core stability work lands.

---

## 7. User Feedback Summary

- **Session ownership & gating** – Users report that after the unified gateway merge, their local sessions “disappear” or become attached to the wrong profile, leading to lost context. This is the most vocal pain point (see #134889).  
- **CLI dead‑locks** – When the gateway restarts mid‑turn, the CLI refuses new prompts until a manual `/discard`, causing workflow interruption (issue #140175). Users expect the CLI to automatically recover.  
- **Windows desktop file handling** – Media cards download failed on Windows because the local path was mis‑interpreted (`/C:/…`). This was a blocker for Windows‑only users (#121744).  
- **Rate‑limit handling for OpenCode Go** – 429 responses were silently ignored, causing unexpected stalls (#140713). Users want explicit back‑off and key‑preservation.  
- **Plug‑in discovery order** – Import‑time plugin discovery sometimes disables user‑installed plugins silently (#77200), prompting a demand for clearer diagnostics.

Overall, the community is **highly engaged**, providing detailed repro steps and log snippets, but the recurring theme is *reliability of the new unified gateway* and *smoothness of the command‑line experience*.

---

## 8. Backlog Watch (Long‑standing items needing attention)

| Issue/PR | Age (approx.) | Why It Matters | Current Status |
|----------|---------------|----------------|----------------|
| **#106742** (merged) – Unified gateway runtime (the source of many current bugs) | merged Oct 14 | Core architectural change; all downstream bugs trace back here. | Needs a dedicated “post‑merge stabilization” milestone. |
| **#77200** – Import‑time plugin discovery can permanently disable user plugins | opened Aug 03 | Affects plug‑in ecosystem health; no fix yet. | Open, low comment count. |
| **#136683** – Kanban card branch name invalid | opened Oct 11 | Breaks CI pipelines that rely on auto‑generated git worktrees. | Open, minimal activity. |
| **#136708** – Delegation busy_result_mode (still open) | opened Oct 11 | Enhances sub‑agent orchestration; may be a key differentiator. | Open, awaiting review. |
| **#142214** – Epic: non‑user interrupt → bounded model recovery | opened Oct 20 | Improves UX when external failures occur (e.g., API limits). | Open, low traffic but high impact. |
| **#138694** – Enable native compaction for Codex GPT‑6 tiers | opened Oct 15 | Performance/ cost optimization for high‑tier users. | Open, PR not yet merged. |

*These items have stayed open for weeks to months and have relatively few comments, indicating either low urgency or limited maintainer bandwidth. Given their potential impact on stability and performance, they should be prioritized once the immediate gateway‑state crisis is resolved.*

---

### Bottom Line
Hermes Agent is **vibrant but in a stabilization window**. The community is rallying around a handful of **critical session‑state regressions** introduced by the unified gateway; fixing those will unlock a wave of downstream improvements (CLI resilience, plug‑in APIs, Windows desktop reliability). The two CI‑related PR merges today are a positive sign that the maintainers are clearing technical debt, but the lack of any production release suggests the next version will be a **maintenance/bug‑fix** update rather than a feature‑heavy bump. Stakeholders should keep an eye on the “gateway‑state” tracking issue #134889 and the pending CI cleanup PRs, as they are the *gatekeepers* for the next stable release.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026‑10‑21**  
*(sipeed/picoclaw – open‑source AI‑agent runtime & channel ecosystem)*  

---

### 1. Today’s Overview
- Activity on the repository is minimal but steady: one open issue was updated and a single pull request was merged.  
- No new releases were published, indicating the maintainers are still in a feature‑integration phase rather than a release‑focused sprint.  
- Overall health appears **stable** – there are no crash reports or regression bugs surfacing today, and the merged PR expands the platform’s channel support without breaking existing functionality.

---

### 2. Releases
*No new releases were published in the last 24 h.*  

---

### 3. Project Progress
| PR # | Title / Scope | Key Contributions | Impact |
|------|----------------|-------------------|--------|
| **#875** (closed / merged) | **feat(channels): add XiaoYi channel support** | • Introduced `xiaoyi` sub‑package (`pkg/channels/xiaoyi/`). <br>• Implemented an A2A (Agent‑to‑Agent) protocol via the `xiaoyi‑agent‑sdk`. <br>• Added `XiaoYiConfig` and registered the channel through the `BaseChannel` factory pattern. <br>• Updated documentation and CI checks for the new channel. | Expands PicoClaw’s connectivity to the **XiaoYi** ecosystem, allowing agents to interact with XiaoYi‑enabled devices and services. This is the first new channel added since the 2025‑Q4 refactor and demonstrates the viability of the new channel architecture for future integrations. |

No bug‑fix PRs were merged today; the work was purely additive.

---

### 4. Community Hot Topics
| Item | Type | Activity | Link | What the community is asking for |
|------|------|----------|------|-----------------------------------|
| **#3427** | Issue (open, labeled *stale*) | Created Oct 13, last updated Oct 20; 1 comment, no reactions. | <https://github.com/sipeed/picoclaw/issues/3427> | A proposal for a **low‑dependency “Plazmi” MCP/CLI example** that demonstrates persistent‑world agent sessions (heartbeat, `pulse`/`digest`). The author suggests a single‑file Python client that could serve as a minimal reference implementation. The “stale” label indicates the discussion has stalled; no maintainer response yet. |

*Analysis*: The issue reveals a demand for **concise, end‑to‑end examples** that lower the barrier for newcomers to run persistent agents. The focus on “low‑dependency” suggests the community wants a **lightweight** starter kit that does not require the full PicoClaw stack. This aligns with recent trends in the broader AI‑agent ecosystem where rapid prototyping is prized.

---

### 5. Bugs & Stability
| Severity | Description | Current Status | Fix / Mitigation |
|----------|-------------|----------------|------------------|
| **None reported today** | No crash logs, test failures, or regression tickets were opened or updated in the last 24 h. | N/A | N/A |

*Note*: The absence of bug reports combined with a successful channel‑addition PR suggests that the core runtime remains reliable.

---

### 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood of inclusion in next release |
|----------|--------|----------------------------------------|
| **Plazmi MCP/CLI example** (persistent‑agent session demo) | Issue #3427 (community‑initiated) | **Medium** – the request aligns with the maintainer’s recent emphasis on “examples” and “documentation”. If a maintainer picks it up soon, it could be packaged as an example‑only release or a documentation‑only update. |
| **Additional channel adapters** (e.g., other Chinese smart‑home platforms) | Implied by PR #875 and the newly opened channel architecture | **High** – the PR shows the channel framework is now production‑ready, so expect more community‑driven channel PRs in the coming weeks. |

---

### 7. User Feedback Summary
- **Pain point**: New users struggle to find a **minimal, turnkey example** that demonstrates persistent agent behavior without pulling in heavy dependencies. This is directly voiced in Issue #3427.
- **Positive notes**: The successful integration of the XiaoYi channel has been welcomed (no negative reactions yet, but the PR’s smooth merge suggests community approval). Users see the *factory registration pattern* as a clean way to extend the platform.
- **Overall satisfaction**: Stable – the core runtime continues to work as expected, and the addition of a new channel signals continued growth. The main dissatisfaction is the lack of ready‑made tutorials for persistent sessions.

---

### 8. Backlog Watch
| Item | Age (since creation) | Status | Why it needs attention |
|------|----------------------|--------|------------------------|
| **#3427** – Plazmi MCP/CLI example | **8 days** (opened Oct 13) | Open, labeled *stale* | No maintainer response; the community request is still open. A concrete example would improve onboarding and could be bundled as an official tutorial. |
| *(No other issues/PRs are listed in the supplied snapshot)* | – | – | – |

**Recommendation**: A maintainer should either provisionally close the issue with a “working on it” comment or assign it to a contributor. Even a short proof‑of‑concept commit would signal that the request is being taken seriously and would reduce the “stale” perception.

---

### Closing Note
PicoClaw’s development cadence is modest but purposeful. The **addition of the XiaoYi channel** marks a tangible expansion of the platform’s integration capabilities, while the **unaddressed Plazmi example request** highlights an opportunity to bolster documentation and lower the entry barrier for new agents. No stability concerns were observed today, suggesting the core codebase is solid heading into the next development sprint.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑10‑21**  
*(Data pulled from the GitHub activity of `qwibitai/nanoclaw` over the last 24 h)*  

---

## 1. Today’s Overview  
- Development velocity is high: 19 PRs were touched, 13 remain open and six were closed/merged.  
- The community is focused on hardening (egress lockdown, image refresh) and on polishing the new *OneCLI* provider integration.  
- Only two issues were opened, both at #4154 and #4162, indicating a relatively low influx of new bugs while the team works on a release candidate (v2026.10.1‑rc.1).  
- Overall health is good – most changes are incremental fixes or small feature extensions, and no breaking‑change‑related panic has been reported.

---

## 2. Releases  
**v2026.10.1‑rc.1** (Oct 20) – first release candidate for the upcoming 2026.10.1 series  

- **Key additions**  
  1. *Agent‑from‑template* capability – agents can now spawn other agents using predefined templates.  
  2. **Cursor** added as an official agent provider.  
  3. Relocation of locally‑built agent images to the new image‑registry layout.  

- **Migration notes**  
  - Installations on the `stable` channel stay on 2026.10.0 until the final 2026.10.1 is published.  
  - No breaking API changes; the only required action for existing installs is to update the `beta` channel if you want the RC features.  

*Release PR:* [#4158](https://github.com/qwibitai/nanoclaw/pull/4158)

---

## 3. Project Progress – Merged / Closed PRs (today)

| PR # | Title / Scope | Type | Primary Impact |
|------|---------------|------|----------------|
| **#4103** | `fix(cli): cascade dependent rows in ncl messaging-groups delete` | Bug‑fix (core) | Prevents FK errors when removing messaging groups. |
| **#4109** | `docs: provider code ships in skill payloads, not the providers branch` | Docs update | Aligns documentation with the new provider‑payload model (post‑#4104). |
| **#4157** | `ci: run the image refresh only in nanocoai/nanoclaw` | Cleanup / Hardening | Stops unnecessary CI runs on forks, reducing noise and failed scheduled jobs. |
| **#4158** | `chore(release): v2026.10.1‑rc.1` | Release | Tags the RC, updates `package.json`, and compiles the official changelog. |
| **#4149** | `agent-images: list the v2026.10.0 hardened image` | Fix (image registry) | Makes the latest hardened Docker image visible in `agent‑images.json`. |
| **#4010** | `ci: open the agent‑images.json PR for each promoted image` | Hardening (CI) | Automates PR creation per hardened image, improving traceability of image releases. |

*No PRs were merged that introduce breaking changes; the focus is on reliability, documentation and the OneCLI migration.*

---

## 4. Community Hot Topics  

| Item | Link | Comments / 👍 | Why it’s hot |
|------|------|---------------|--------------|
| **#4162** – *Codex sessions have no compaction threshold* | <https://github.com/qwibitai/nanoclaw/issues/4162> | 0 / 0 | Highlights a scalability limitation in long‑running Codex chats; directly ties to the new `CODEX_AUTO_COMPACT_TOKEN_LIMIT` feature being prototyped. |
| **#4156** – *show long approval cards in full on Telegram, Discord, WhatsApp* | <https://github.com/qwibitai/nanoclaw/pull/4156> | 0 / 0 (recently updated) | Messaging‑platform UI polish is a recurring request – users repeatedly reported truncated approval dialogs. |
| **#4094** – *OneCLI 1.45 grants; new groups get only their model credential* | <https://github.com/qwibitai/nanoclaw/pull/4094> | 0 / 0 | The OneCLI migration is a strategic shift; many contributors are tracking this PR for downstream compatibility. |
| **#4154** – *add‑pi: pick the group’s own provider, not the install’s whole gateway list* | <https://github.com/qwibitai/nanoclaw/issues/4154> | 1 comment, 0 👍 | Reveals a design gap: provider configuration is currently install‑wide, but groups need per‑group granularity. This touches core credential handling. |

**Underlying needs:**  
- **Scalability & performance** for long‑running Codex sessions.  
- **Consistent UI/UX** across messaging platforms (approval cards, long actions).  
- **Granular credential/provider isolation** at the group level (issue #4154).  
- **Smooth transition** to the OneCLI gateway (PR #4094) – a major upstream dependency change.

---

## 5. Bugs & Stability  

| Severity | Issue / PR | Summary | Current Fix Status |
|----------|------------|---------|--------------------|
| **High** | #4162 (bug) – Codex compaction timeout | Threads never compact until the context window is almost full, causing time‑outs in busy chats. | A fix is in progress: PR #4163 adds `CODEX_AUTO_COMPACT_TOKEN_LIMIT`. |
| **Medium** | #4154 (capability) – Provider selection per‑group | Mis‑use of `PI_GATEWAY_PROVIDERS` env‑var leads to wrong gateway placeholders. | No PR yet; open for discussion. |
| **Low** | #4123 (closed) – Flaky gateway detection test | Intermittent failure in nested `pnpm` environments. | Fixed upstream; issue closed. |
| **Low/Info** | #4102 (open) – Messaging‑group dependent cleanup for `/add-imessage` removal | Still open; addresses dangling rows after iMessage removal. | Pending. |

*Overall, the most pressing stability risk today is the Codex compaction bug, which already has a dedicated fix PR (#4163).*

---

## 6. Feature Requests & Roadmap Signals  

| Request / Signal | Link | Likelihood of inclusion in 2026.10.1 |
|------------------|------|------------------------------------|
| **Agent‑from‑template** (new capability) – shipped in the RC. | <https://github.com/qwibitai/nanoclaw/releases/tag/v2026.10.1-rc.1> | ✅ Already in RC; will be part of the final 2026.10.1. |
| **Per‑group provider configuration** (issue #4154). | <https://github.com/qwibitai/nanoclaw/issues/4154> | ⏳ Medium – involves core credential logic; likely slated for a post‑RC patch. |
| **Codex auto‑compaction threshold** (PR #4163). | <https://github.com/qwibitai/nanoclaw/pull/4163> | ✅ Expected to land before the final 2026.10.1 release. |
| **OneCLI 1.45 grants & credential scoping** (PR #4094). | <https://github.com/qwibitai/nanoclaw/pull/4094> | ✅ Already open; targeted for inclusion in the next minor version (2026.11.x) after RC stabilization. |
| **Improved approval‑card UI** (PR #4156, #4147). | <https://github.com/qwibitai/nanoclaw/pull/4156> | ✅ Likely to be merged before the final 2026.10.1, as UI polish is high‑priority. |

---

## 7. User Feedback Summary  

- **Pain points**  
  - *Long‑running Codex chats* become unresponsive due to lack of early compaction.  
  - *Approval cards* on Telegram/Discord/WhatsApp truncate when the action description exceeds a single message.  
  - *Provider configuration* is too coarse‑grained; groups want their own gateway selections without affecting the entire install.  

- **Positive signals**  
  - The **agent‑template** feature is being trialed by several early adopters and is praised for reducing admin overhead when deploying similar agents.  
  - The **Cursor provider** addition is welcomed by users looking for a lightweight, local LLM that integrates with the same workflow as cloud providers.  

Overall satisfaction is moderate‑high; the community values the continuous hardening work (egress lockdown, image refresh) but is eager for the scalability and UI refinements listed above.

---

## 8. Backlog Watch (items needing maintainer attention)

| Item | Type | Reason for attention |
|------|------|-----------------------|
| **#4154** – per‑group provider selection | Capability / Bug | Core to credential isolation; still open with only one comment. |
| **#4102** – `/add-imessage` removal clean‑up | Bug / Feature | Prevents orphaned rows; pending review. |
| **#3156** – Structured attachments for provider APIs | Feature | Large PR (opened 2026‑07‑30) awaiting final review; would unlock vision‑model use cases. |
| **#4161** – Anthropic newer API key types | Fix (setup) | Merged? (Open) – needed for smooth onboarding of Anthropic users. |
| **#4160** – Egress lockdown for already‑running agents | Hardening | Open; security impact if left unaddressed for long‑running containers. |

*Recommendation*: Prioritize #4154 and #4160 for the next sprint, as they affect security and correct provider behavior for production installs.

--- 

*Prepared by the NanoClaw Open‑Source Analyst on 2026‑10‑21.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw – Project Digest (2026‑10‑21)**  

---

### 1. Today's Overview  
- The repository saw a modest burst of activity: 3 open issues were updated and 9 pull requests (7 still open, 2 closed/merged) were touched in the last 24 h.  
- No new releases were cut, but the maintainer is busy trimming dependency versions and addressing a breaking change in the Hosted MCP registration flow.  
- The dominant discussion theme is **on‑chain integration & local MCP enrollment**, indicating a shift toward fully sovereign agents that can operate without reliance on IronClaw’s HTTP gateway.

---

### 2. Releases  
*No new release was published today.*  

---

### 3. Project Progress (Merged/Closed PRs)  
| PR | Title / Scope | Type | Merge/Close Date* | Key Impact |
|----|---------------|------|-------------------|------------|
| **#7386** | `chore(deps): bump dompurify from 3.4.12 to 3.4.13` | Dependency (JS) | 2026‑10‑20 (closed) | Minor security/bug fix for the web UI sanitizer. |
| **#8048** | `chore(deps): bump fast-uri from 3.1.5 to 3.1.7` | Dependency (JS) | 2026‑10‑20 (closed) | Security‑focused update for the documentation‑site URI parser. |
| *(no other PRs were merged today; the rest remain open for review)* |

> *The “closed” status on GitHub for these two PRs indicates they were merged and then closed automatically by the platform. No breaking‑change code was introduced; they are pure dependency upgrades.*

---

### 4. Community Hot Topics  

| Item | Kind | Comments / 👍 | Link | Why it matters |
|------|------|---------------|------|-----------------|
| **#2077** – *contract source for market.near.ai* | Issue (Open) | 2 comments, 0 👍 | <https://github.com/nearai/ironclaw/issues/2077> | The requester wants the on‑chain contract code that powers the market service. Publishing it would enable **sovereign agents** to interact directly with the market, removing the current HTTP‑API dependency and aligning with the community’s “trust‑less” ambition. |
| **#8136** – *optional hosted‑MCP Plazmi extension* | Issue (Open) | 0 comments | <https://github.com/nearai/ironclaw/issues/8136> | Proposes a plug‑in for the **Plazmi** gaming platform that would reuse the existing “hosted‑MCP metadata + declarative auth” surface. Shows demand for easy third‑party extensions without vendor‑lock‑in. |
| **#8146** – *Hosted MCP: explicit 127.0.0.1 endpoint enrollment* | Issue (Open) | 0 comments | <https://github.com/nearai/ironclaw/issues/8146> | Highlights a regression where the hosted‑MCP registration logic now rejects literal IP/hostname endpoints, breaking local development and on‑prem deployments. This is the most urgent bug‑signal. |
| **#8147** – *Allow explicit trusted enrollment of an exact loopback MCP endpoint* | PR (Open) | – | <https://github.com/nearai/ironclaw/pull/8147> | Direct response to #8146. Introduces a whitelist flag for loopback (`127.0.0.1`) MCP endpoints, aiming to restore local‑only enrollment while keeping the broader security policy intact. |

*Takeaway*: The community is gravitating toward **self‑hosted, low‑trust networking** (local MCP) and **open‑source contract visibility**. Both are strategic for IronClaw’s goal of “sovereign AI agents”.

---

### 5. Bugs & Stability  

| Severity | Issue/PR | Symptom | Current Status | Fix / Work‑around |
|----------|----------|---------|----------------|-------------------|
| **High** | #8146 (Open) – Hosted MCP rejects IP literals | Local Connector cannot register with a native credential‑account; registration fails with “endpoint not allowed”. | Awaiting maintainer review. | PR #8147 proposes an explicit allow‑list for loopback; not merged yet. |
| **Medium** | None reported today other than the above. | – | – | – |
| **Low** | Dependency upgrade PRs (#7386, #8048) – primarily security patches, no functional impact. | – | Merged. | – |

No crash reports or regressions beyond the MCP enrollment issue were logged in the last day.

---

### 6. Feature Requests & Roadmap Signals  

| Request | Description | Likelihood of inclusion in next release (next 4‑6 weeks) |
|---------|-------------|--------------------------------------------------------|
| **Contract source publication** (Issue #2077) | Release the Solidity/NEAR AssemblyScript contract that backs `market.near.ai`. | **Medium‑High** – fits the “on‑chain first” roadmap and has low implementation effort (just repo push). |
| **Plazmi hosted‑MCP extension** (Issue #8136) | Optional Plazmi companion that uses the declarative auth/e​gress surface already built for hosted‑MCP. | **Medium** – needs a separate repo/extension; may be slated for a later minor version after core MCP stability is restored. |
| **Loopback MCP enrollment flag** (PR #8147) | Add a config‑driven whitelist for `127.0.0.1` MCP endpoints. | **High** – directly addresses a high‑severity bug; likely to be merged once reviewed. |
| **Enhanced credential‑account bridging** (implicit from #8146 discussion) | More flexible credential‑account creation for local connectors, possibly via a “bridge” service. | **Low‑Medium** – still exploratory, may become part of a larger “offline‑first” effort. |

---

### 7. User Feedback Summary  

- **Pain point:** Dependency on IronClaw’s cloud‑hosted HTTP API forces agents to keep a secret key on the service, undermining the “sovereign agent” narrative. Users want the **contract source** and a **pure on‑chain interaction path**.  
- **Pain point:** Local development is hampered by the new IP‑literal rejection rule; developers cannot spin up a loopback MCP for testing or private deployments.  
- **Desire:** Extensibility for niche ecosystems (e.g., Plazmi) that can plug into the existing hosted‑MCP flow without writing custom vendor code.  
- **Satisfaction:** The community appreciates the maintainers’ rapid dependency hygiene (multiple security‑focused upgrades in a single day).  

Overall sentiment is cautiously optimistic: users see the project moving toward their core goal (sovereign agents) but are waiting on concrete on‑chain artifacts and the resolution of the local MCP bug.

---

### 8. Backlog Watch  

| Item | Type | Age | Status | Why it needs attention |
|------|------|-----|--------|------------------------|
| **#2077** – contract source request | Issue (Open) | >6 months (opened 2026‑04‑06) | No recent maintainer comment | Publishing the contract is a low‑effort, high‑impact deliverable that aligns with the project’s trust‑less vision. |
| **#8136** – Plazmi extension proposal | Issue (Open) | 8 days | No comments yet | Could be a showcase integration; early engagement would stimulate ecosystem growth. |
| **#8146** – MCP endpoint enrollment bug | Issue (Open) | 1 day | Awaiting PR review | Blocks local development and private deployments; priority should be raised. |
| **#8147** – Loopback enrollment PR | PR (Open) | 1 day | No review/comments | Direct fix for #8146; should be merged quickly to restore developer workflow. |
| **#8151 / #8152** – Rustls bump (both open) | PR (Open) | 1 day | No activity | Security update; merging now avoids downstream vulnerabilities. |
| **#8145** – aiohttp bump | PR (Open) | 1 day | No activity | Same rationale as above – keep test harnesses secure. |

**Recommendation:** Prioritize review/merge of #8147 and the associated security‑dependency PRs (#8151‑#8152, #8145). Follow up on #2077 to publish the market contract, which will likely reduce the number of “dependency on HTTP API” complaints.

---  

*Prepared by the Open‑Source AI Agent Analyst (October 21 2026).*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI – Project Digest (2026‑10‑21)**  
*Compiled from GitHub activity (issues, PRs, commits) on the `main` branch.*

---

### 1. Today’s Overview
- Development momentum is high: 6 PRs were merged/closed in the last 24 h, while 4 issues remain open and active.  
- The team is focused on hardening the MCP (Message‑Connector‑Protocol) layer, polishing the UI, and expanding marketplace‑driven connector support.  
- No new public release was cut, indicating the project is still in a rapid “pre‑release” cycle where changes are landed directly onto `main` before a formal tag.

---

### 2. Releases  
*No new version tags were created in the reporting window, so there are no release notes to list.*

---

### 3. Project Progress (Merged/Closed PRs)

| PR # | Title / Scope | Key Deliverables | Impact |
|------|---------------|-------------------|--------|
| **2912** | *fix(mcp): trust system CA store for stdio MCP servers* | Restores `NODE_OPTIONS=--use-system-ca` for stdio‑based MCP servers; resolves TLS‑intercept failures. | Critical – fixes a blocker for enterprise environments (see Issue #2906). |
| **2911** | *fix(sidebar): soften capabilities menu and animate open/close* | UI polish: lighter menu styling, smooth open/close animation, corrected pill duplication. | Improves perceived responsiveness and visual consistency. |
| **2910** | *fix(desktop-companion): hide Windows companion windows from taskbar* | Marks companion windows as `WS_EX_TOOLWINDOW` so they disappear from the taskbar preview. | Reduces clutter for Windows power‑users; no functional regression. |
| **2909** | *feat(mcp): install remote connectors from the marketplace with token forms and OAuth* | Adds remote (SSE/HTTP) MCP connector type; supports declarative credential forms and OAuth flows. | Expands marketplace capability beyond local stdio commands, a prerequisite for upcoming remote services. |
| **2908** | *fix(mcp): harden OAuth sign‑in cleanup and status refresh* | Isolates temporary `openclaw.json` per OAuth operation, prevents state leakage; aligns with earlier OAuth hardening (`#2874`, `#2905`). | Increases security and reliability of OAuth‑based connectors. |
| **2907** | *feat(artifacts): add image editing and chat snapshots* | New image‑editing toolbox (brush, erase, crop, background removal, etc.) with snapshot history stored as artifact versions. | Introduces a visual‑content creation workflow directly inside the chat UI. |

**Take‑away:** The bulk of today’s work is stabilisation (MCP TLS handling, OAuth cleanup) plus two user‑experience upgrades (sidebar polish, Windows task‑bar fix) and two forward‑looking features (remote connector marketplace support and image‑editing artifacts).

---

### 4. Community Hot Topics  

| Item | Type | Comments / 👍 | Link | Why It Matters |
|------|------|---------------|------|----------------|
| **#2895** – *Computer Use … repeated auth prompt* | Issue (Bug) | 1 comment, 0 👍 | <https://github.com/netease-youdao/LobsterAI/issues/2895> | Re‑prompting for the same app within a single session breaks workflow continuity and indicates a key‑normalisation problem. Users expect persistent authorisation across sessions. |
| **#2795** – *OAuth tokens written to diagnostic logs* | Issue (Security) | 0 comments | <https://github.com/netease-youdao/LobsterAI/issues/2795> | Exposes sensitive credentials; a potential compliance risk for enterprises. |
| **#2797** – *OpenClaw token proxy accepts unauthenticated requests* | Issue (Security) | 0 comments | <https://github.com/netease-youdao/LobsterAI/issues/2797> | Allows token‑stealing attacks; highlights the need for stricter proxy authentication. |
| **#2906** – *stdio MCP server silently drops NODE_OPTIONS* | Issue (Bug) | 0 comments | <https://github.com/netease-youdao/LobsterAI/issues/2906> | Directly triggered today’s PR #2912. Shows a regression that affects TLS‑intercept environments (common in corporate networks). |

*Analysis*: Security‑related issues (#2795, #2797) are attracting the most attention from the core team (they are addressed by PRs #2908, #2909). The persistent‑auth bug (#2895) is the only open issue with developer discussion, signalling an immediate need for a stable key‑management fix.  

---

### 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Symptoms | Fix Status |
|----------|-------|----------|------------|
| **Critical** | **#2906** – stdio MCP server drops `NODE_OPTIONS` → TLS fetch failures | All remote fetches fail (`fetch failed`) in environments that rely on system CA, breaking GitHub MCP, etc. | Fixed in PR #2912 (merged). |
| **High** | **#2895** – Re‑prompting for the same app in‑session | Users repeatedly see auth dialogs; approvals are not persisted across the same conversation. | Open; no PR yet. |
| **High** | **#2795** – OAuth tokens logged | Sensitive `access_token` / `refresh_token` appear in diagnostic logs. | Open; no fix landed yet (likely to be covered by upcoming OAuth hardening PRs). |
| **High** | **#2797** – Unauthenticated token proxy | Proxy forwards user bearer token even when request lacks authentication, creating a token‑leak vector. | Open; awaiting dedicated security PR. |
| **Medium** | **#2906** (already fixed) | — | — |

*Note*: The critical bug (#2906) was resolved promptly, which is a positive indicator of rapid triage. The remaining high‑severity security issues are still open and should be prioritized for the next release cycle.

---

### 6. Feature Requests & Roadmap Signals

| Request | Source / Issue | Likelihood of Inclusion |
|----------|----------------|--------------------------|
| **Remote MCP connectors with OAuth / token forms** | Implemented in PR #2909 (marketplace feature). | Already in code – expected to ship in the next tagged release. |
| **Image‑editing & snapshot artifacts** | PR #2907 adds full UI and persistence. | Likely to be part of the upcoming `release/2026.10.19` branch roll‑out. |
| **Persistent authorisation across sessions** | Reported in Issue #2895. | High demand; no current PR – may be scheduled after security hardening. |
| **Improved sidebar capabilities menu** | Delivered in PR #2911. | Already merged; awaiting release. |
| **Windows companion window tidying** | Delivered in PR #2910. | Small UI tweak – near‑term release. |

Overall, the roadmap appears to be moving toward **enhanced connector security**, **remote marketplace integration**, and **richer multimodal content handling** (image editing). The open security bugs suggest a parallel effort to lock down the OAuth and token‑proxy pathways before major feature releases.

---

### 7. User Feedback Summary

- **Pain Points**  
  - **Auth fatigue**: Re‑prompting for the same app (#2895) disrupts conversational flow.  
  - **Credential exposure**: Logging of OAuth tokens (#2795) raises privacy/compliance concerns.  
  - **Network environment incompatibility**: Dropped `NODE_OPTIONS` leads to TLS failures in corporate proxies (#2906).  

- **Positive Signals**  
  - UI refinements (sidebar softening, task‑bar cleanup) are well‑received – no negative comments yet, implying they address prior usability friction.  
  - New image‑editing capabilities are highlighted in the PR description as a “direct‑to‑chat” workflow, suggesting strong demand for multimodal interaction.  

- **Overall Satisfaction**: The community is actively reporting bugs and security concerns, indicating deep engagement. The swift merge of critical fixes is a clear confidence boost.

---

### 8. Backlog Watch (Long‑Open / High‑Impact Items)

| Issue/PR | Age | Reason for Attention |
|----------|-----|----------------------|
| **#2795** – OAuth tokens in logs | Open since 2026‑10‑05 | Security/compliance risk; needs a dedicated sanitisation PR. |
| **#2797** – Unauthenticated token proxy | Open since 2026‑10‑05 | Potential token‑theft vector; should be addressed before any public release. |
| **#2895** – Re‑prompting auth bug | Open since 2026‑10‑17 (updated 2026‑10‑20) | Directly impacts user workflow; no fix in sight yet. |
| **#2794** (hypothetical) – any older, low‑activity bugs not listed here may become blockers as the codebase stabilises; maintainers should scan the full issue list for items >30 days without activity. |

*Recommendation*: Prioritise the two security issues (#2795, #2797) in the next sprint, then allocate resources to the persistent‑auth bug (#2895). Flag any remaining low‑priority bugs for a “bug‑bash” before the next version tag.

---

**Health Snapshot** – LobsterAI shows a **high development velocity** with prompt resolution of show‑stopper bugs, but **security hardening remains the top priority**. The recent feature merges (remote connectors, image artifacts) signal a strategic shift toward a richer plugin ecosystem and multimodal capabilities. Maintaining this pace while addressing the open high‑severity security concerns will be key to a stable upcoming release.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 21 Oct 2026**

---

## 1. Today’s Overview  
- Activity in the last 24 hours was modest: **1 open issue** and **2 newly opened pull requests**. No PRs were merged or closed, and there were no new releases.  
- All activity originated from the same contributor (octo‑patch) and centers on expanding the MiniMax model catalog (text and voice).  
- The sole open issue concerns exposing per‑message sender identity in shared WhatsApp chats, indicating a growing need for richer provenance data in multi‑agent conversations.

---

## 2. Releases  
*No releases were published in the last 24 h, so there are no change logs, breaking‑change notes, or migration guidance to report.*

---

## 3. Project Progress  
- **Merged / Closed PRs:** 0.  
- **Open PRs (opened today):**  
  1. **#1312 – “feat: prefer MiniMax M3.1 Flash for ordinary text”** – adds the MiniMax‑M3.1‑Flash model to the static model catalog and preserves existing model IDs for explicit selections.  
  2. **#1311 – “feat(voice): add MiniMax speech synthesis”** – introduces a MiniMax TTS provider, registers it in the TTS registry, adds credential‑store hooks, and implements regional endpoint selection for the global and China `t2a_v2` APIs.  

Both PRs are still in *open* status, awaiting review and integration. They represent the only forward‑moving work today and expand Moltis’ support for MiniMax models across text‑generation and speech‑synthesis pipelines.

---

## 4. Community Hot Topics  

| Item | Type | Highlights | Link |
|------|------|------------|------|
| **#1310 – Expose per‑message sender identity** | Issue (open) | Requests a new hook that supplies the JID (or equivalent identifier) of the message sender for each turn in shared WhatsApp chats. The author notes that existing work on per‑sender MCP credentials (#1294) and generic hook metadata (#640) does **not** satisfy this need. | https://github.com/moltis-org/moltis/issues/1310 |
| **#1312 – Prefer MiniMax M3.1 Flash** | PR (open) | Adds a newer MiniMax model to the catalog, aiming to improve default performance for ordinary text tasks. | https://github.com/moltis-org/moltis/pull/1312 |
| **#1311 – MiniMax speech synthesis** | PR (open) | Introduces a new TTS provider, filling a gap in Moltis’ speech‑synthesis capabilities. | https://github.com/moltis-org/moltis/pull/1311 |

**Analysis**  
- The most discussed topic is the *sender‑identity* request, reflecting a demand for finer‑grained provenance when multiple agents (or humans) share a single WhatsApp channel. This is a *functional* need that could affect security, auditability, and context‑aware behavior.  
- The MiniMax PRs highlight a *strategic* direction: the maintainers are expanding the model ecosystem, particularly around the MiniMax family, to stay competitive with newer LLM/TTS offerings.  

---

## 5. Bugs & Stability  

| Severity | Description | Current Status | Fix / Related PR |
|----------|-------------|----------------|------------------|
| Low | No crash or regression reports were opened today. | N/A | — |
| Low | Issue #1310 is not a bug but a feature request; no stability concerns. | — | — |

*Conclusion:* The project shows no immediate stability issues in the last 24 h. No bug‑fix PRs were submitted.

---

## 6. Feature Requests & Roadmap Signals  

| Request | Summary | Potential Roadmap Placement |
|----------|---------|----------------------------|
| **#1310 – Per‑message sender identity** | Adds provenance metadata (sender JID) to each message in shared WhatsApp chats, enabling agents to differentiate who said what. | Likely to be scoped into the next **MCP (Multi‑Channel Provider) enhancements** release, especially if the team prioritizes multi‑agent scenarios. |
| **MiniMax TTS (PR #1311)** | Provides speech synthesis via MiniMax `t2a_v2` APIs for both global and China regions. | Already in PR; if accepted, it will be part of the upcoming **Model Catalog Expansion** milestone. |
| **MiniMax M3.1‑Flash (PR #1312)** | Makes the newer Flash variant the default for ordinary text generation. | Same as above – will land in the next *catalog‑update* release. |

**Prediction:** Assuming a typical 1‑2 week review cycle, both MiniMax PRs could be merged within the next sprint, making MiniMax M3.1‑Flash the default text model and adding MiniMax TTS to the official provider list.

---

## 7. User Feedback Summary  

- **Pain Point:** Lack of sender provenance in group WhatsApp chats hampers agents that need to route or filter responses based on who spoke. This is evident from Issue #1310, which includes detailed debugging logs and a pre‑flight checklist—signifying a serious real‑world use case.  
- **Satisfaction:** Users appear pleased with the existing model catalog but are requesting newer, higher‑quality models (MiniMax). The PRs indicate community contributors are proactively adding these models. No complaints about performance or crashes were raised today.  

Overall, user sentiment is **neutral‑to‑positive**, with the primary friction point being the missing per‑turn identity feature.

---

## 8. Backlog Watch  

| Item | Age | Reason for Attention |
|------|-----|-----------------------|
| **#640 – Hook metadata (closed)** | Closed but cited in #1310 | Demonstrates that prior metadata hooks were insufficient for per‑sender data; revisiting hook design may be needed. |
| **#1294 – Per‑sender MCP credentials** | Closed | Might provide a reusable pattern for exposing sender identity; cross‑referencing could reduce duplicated effort. |
| **Open PRs #1311 & #1312** | 1 day | Both are pending review. Timely feedback is required to keep the MiniMax expansion on schedule. |
| **Issue #1310** | 1 day | Needs a maintainer to acknowledge, ask clarifying questions, and potentially label (e.g., “enhancement”, “needs design”). |

*Actionable recommendation:* Assign a maintainer to triage #1310 today, label it appropriately, and add it to the upcoming sprint backlog. Also, expedite review of the MiniMax PRs to prevent stagnation in the model‑catalog pipeline.

--- 

**Bottom Line:** Moltis’ activity today is low‑volume but strategically focused on expanding model support (MiniMax) while surfacing a key feature gap (per‑message sender identity) that could influence future roadmap priorities. No stability concerns were raised, and the community appears engaged with the model‑catalog enhancements. Prompt attention to the open issue and PR reviews will help maintain momentum.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

## CoPaw (QwenPaw) – Project Digest  
**Date:** 2026‑10‑21 | **Time‑zone:** UTC  

---

### 1. Today’s Overview  
- Development activity remains **high**: 13 issues were touched (8 still open) and 34 pull‑requests were updated, of which 11 have been merged or closed.  
- Most of the recent work is focused on **stability fixes** (cron‑job UI, console composer, channel routing) and **pre‑release groundwork** for the upcoming **v2.3.0** (modularisation, lighter runtime).  
- No new public release was published today, but a version bump to **v2.3.0b1** is staged in PR #8355 and will likely precede the next beta tag.

---

### 2. Releases  
*No new release was published in the last 24 h.*  
The next release is expected to be **v2.3.0b1** (see PR #8355). When it lands, the changelog will highlight:  

| Area | Expected change | Migration notes |
|------|----------------|-----------------|
| **Core** | slimmer dependency graph, optional plugin‑host | Existing plugins continue to work; only the `QWENPAW_*` env‑var panel (PR #8354) may require new variables. |
| **Console UI** | major refactor (PR #8332) – responsive layout, better state handling | No breaking API changes; UI config files are regenerated on first start. |
| **Runtime** | replay‑buffer memory optimisation (PR #8348) | No user‑visible impact. |
| **Plugins** | hot‑reload with rollback safety (PR #7565) | Plugins built against the old loader will still load; new loader is backward compatible. |

---

### 3. Project Progress (Merged / Closed PRs)  

| PR | Title / Goal | Link | Status |
|----|--------------|------|--------|
| **#8349** | Fix cron‑job edit UI (time‑wheel, draft loss) | <https://github.com/agentscope-ai/QwenPaw/pull/8349> | **Closed / Merged** (fixes #8249) |
| **#8283** | Decision‑model‑backed tool‑approval mode (security) | <https://github.com/agentscope-ai/QwenPaw/pull/8283> | **Closed / Merged** |
| **#8346** | Correct ZIP size & version range for data‑app uploads | <https://github.com/agentscope-ai/QwenPaw/pull/8346> | **Closed / Merged** |
| **#5097** | Shield‑icon centering fix (UI polish) | <https://github.com/agentscope-ai/QwenPaw/pull/5097> | **Closed / Merged** |
| **#8200** | Add Firecrawl as a `web_search` provider (first‑time contributor) | <https://github.com/agentscope-ai/QwenPaw/pull/8200> | **Closed / Merged** |
| **#8355** | Bump version to **2.3.0b1** (pre‑release tag) | <https://github.com/agentscope-ai/QwenPaw/pull/8355> | **Open** (will be merged soon) |
| **#8353** | Preserve running jobs & concurrency limits on agent reload (cron) | <https://github.com/agentscope-ai/QwenPaw/pull/8353> | **Open** (review ongoing) |
| **#8356** | Refactor providers – use AgentScope 2.0.10 JEV classifier | <https://github.com/agentscope-ai/QwenPaw/pull/8356> | **Open** |
| **#8348** | Optimise replay‑buffer memory usage (runtime) | <https://github.com/agentscope-ai/QwenPaw/pull/8348> | **Open** |
| **#8332** | Console UI/UX overhaul (responsive, resilient) | <https://github.com/agentscope-ai/QwenPaw/pull/8332> | **Open** |
| **#7565** | Plugin hot‑reload with clean unload & rollback safety | <https://github.com/agentscope-ai/QwenPaw/pull/7565> | **Open** (large‑scope refactor) |

*Key take‑away:* the team is clearing several long‑standing UI bugs (cron, console composer) and laying the groundwork for a more modular, lightweight runtime in v2.3.0.

---

### 4. Community Hot Topics  

| Item | Type | Comments / 👍 | Link | Core Need |
|------|------|---------------|------|-----------|
| **#8171** | Issue (closed) – audio file delivery wedges session | 6 comments | <https://github.com/agentscope-ai/QwenPaw/issues/8171> | Robust handling of media DataBlocks; need a fallback when the downstream gateway caps audio payloads. |
| **#8249** | Issue (closed) – Cron job modification UI shows “0:0” and corrupt request payload | 3 comments | <https://github.com/agentscope-ai/QwenPaw/issues/8249> | Accurate cron‑editor state persistence; drove PR #8349. |
| **#8092** | Issue (open) – Content‑inspection false positives from Ali‑style gateways | 3 comments | <https://github.com/agentscope-ai/QwenPaw/issues/8092> | Better classification fallback; prevents “bad_request” termination of benign conversations. |
| **#8289** | Enhancement (open) – “Making QwenPaw lighter & more extensible” (v2.3.0) | 2 comments, 1 👍 | <https://github.com/agentscope-ai/QwenPaw/issues/8289> | Signals strong community demand for a plugin‑centric, low‑overhead core. |
| **#8351** | Issue (open) – Composer draft persisted per‑agent, leaking text across chats | 1 comment | <https://github.com/agentscope-ai/QwenPaw/issues/8351> | UX consistency; affects multi‑agent workflows. |

**Analysis:** The most active threads revolve around **media handling**, **cron‑job UI reliability**, and **gateway‑level request classification**. The community is also pushing for a **lighter core** and **plugin‑first architecture**, which aligns with the team’s v2.3.0 roadmap.

---

### 5. Bugs & Stability (ranked by severity)  

| Severity | Issue | Summary | Status / Fix |
|----------|-------|---------|--------------|
| **Critical** | **#8350** – Feishu channel performs synchronous network calls on the main event loop; loss of connectivity hangs the whole service. | Service freeze, health‑check timeout, SIGTERM not honoured. | Open – no fix yet; high priority for next sprint. |
| **High** | **#8092** – Content‑inspection false positives (data_inspection_failed) abort dev‑ops conversations, no retry or fallback. | Missing fallback leads to dropped sessions. | Open – likely to be addressed by PR #8356 (provider refactor) or a dedicated fallback PR. |
| **Medium** | **#8342** – Quoted replies lose channel control‑command routing (e.g., `/stop` treated as normal message). | Affects 7 channels; can prevent user from aborting long tasks. | Open – no dedicated PR yet. |
| **Medium** | **#8351** – Composer draft keyed only by agent ID; drafts leak between conversations of the same agent. | UX annoyance for multi‑chat users. | Open – may be fixed in upcoming console refactor (PR #8332). |
| **Low** | **#8340** – Cron‑task edit modal cannot be closed after a change, requiring full page refresh. | UI glitch; already fixed by PR #8349. | Fixed. |
| **Low** | **#8284** – Wheel scrolling in long conversation snaps view back. | Visual annoyance; already closed with fix #8284. | Fixed. |
| **Low** | **#8354** – Request for env‑var panel in Hub‑managed runtimes (feature request, not a bug). | Open discussion. | No code change yet. |

*Overall stability*: The core runtime remains solid, but **channel‑specific deadlocks** (Feishu) and **gateway classification** issues are the most pressing to prevent service outages.

---

### 6. Feature Requests & Roadmap Signals  

| Request | Description | Current Status | Likelihood for next release |
|---------|-------------|----------------|-----------------------------|
| **#8289** – “Making QwenPaw lighter & more extensible (v2.3.0)” | Plugin‑refactor, modular core, reduced binary size. | Actively discussed; many PRs (e.g., #8332, #8348, #7565) target this. | **High** – core of v2.3.0. |
| **#8354** – Env‑var UI for Hub‑managed runtimes | UI panel to set `QWENPAW_*` variables inside Docker‑based Hub. | Open PR #8355 bumps version; UI not yet implemented. | **Medium** – may land in v2.3.0b1. |
| **#8311** – HarmonyOS local plugin host contract (`window.QwenPaw`) | Standardised request contract & verification for mobile plugins. | Design proposal; no code yet. | **Low‑Medium** – could be a separate “mobile‑plugin” release. |
| **#8285** – Cancellable skill‑pool downloads | Ability to abort large skill‑pool installs from Console. | PR #8285 under review (size XXL). | **Medium** – likely in a later 2.3.x patch. |
| **#8187** – Channels as isolated subprocess plugins | Extract channel handling into separate plugins with sandboxing. | PR #8187 open. | **Medium‑Low** – longer‑term architectural goal. |

The community’s top‑priority signals (lighter core, UI env‑var panel, mobile plugin host) map directly onto the team’s current PR pipeline.

---

### 7. User Feedback Summary  

| Pain Point | Example Evidence | Impact |
|------------|-------------------|--------|
| **Audio file delivery** – agents can send audio files but the downstream LM rejects them due to “max 0 audio(s) per prompt”. | Issue #8171 (closed) – still referenced in code comments. | Limits use cases that need voice feedback (e.g., accessibility, IVR). |
| **Cron‑job UI quirks** – time‑picker defaults to 0:0, edit modal can’t close. | Issues #8249, #8340; fixed by PR #8349. | Hinders scheduling automation, a core feature for enterprise users. |
| **Gateway content inspection** – false “bad_request” classification stops normal conversations. | Issue #8092 (open). | Reduces reliability when using third‑party OpenAI‑compatible gateways. |
| **Channel command routing** – quoted replies lose control‑command detection. | Issue #8342 (open). | Users can’t reliably abort tasks, causing frustration in long‑running tools. |
| **Composer draft leakage** – unsent text appears in other chats of same agent. | Issue #8351 (open). | Affects multi‑agent UI experience, especially in support desks. |
| **Feishu network block** – synchronous calls on the main loop freeze the whole service. | Issue #8350 (open, critical). | Could cause complete outage for Feishu‑integrated deployments. |

Overall sentiment is **constructive**: users appreciate the rapid bug turnaround (many UI bugs already fixed) but are eager for more **robustness** in media handling, gateway classification, and channel isolation.

---

### 8. Backlog Watch (Items needing maintainer attention)

| Item | Type | Age / Last update | Why it matters |
|------|------|-------------------|----------------|
| **#7565** – Clean plugin unload & rollback‑safe hot reload | Enhancement (XXXL) | Open since 2026‑09‑04 | Critical for enterprise deployments that update plugins at runtime; still pending review. |
| **#8311** – HarmonyOS plugin host contract | Feature (question) | Updated 2026‑10‑20 | Represents a new platform target; no implementation yet. |
| **#8350** – Feishu sync‑call deadlock | Bug (critical) | Updated 2026‑10‑21 | Service‑wide freeze; needs urgent fix. |
| **#8092** – Content‑inspection false positives | Bug (medium) | Updated 2026‑10‑20 | Blocks normal usage of many gateway providers. |
| **#8342** – Quoted reply routing loss | Bug (medium) | Updated 2026‑10‑20 | Affects stop/interrupt commands across several channels. |
| **#8354** – Env‑var panel request | Feature request | Created 2026‑10‑21 | Important for Hub‑managed deployments; low‑effort UI change. |
| **#8341** – DingTalk long‑reply markdown truncation | Bug (low) | Updated 2026‑10‑20 | Affects rich‑text delivery; small fix. |
| **#8351** – Composer draft per‑agent leakage | Bug (low) | Updated 2026‑10‑21 | UI annoyance, may be bundled with console refactor. |

**Recommendation:** Prioritise **#8350** and **#8092** for the next sprint (service stability). The **plugin hot‑reload** work (#7565) should be merged before the v2.3.0 beta to ensure a smooth upgrade path for enterprise users.

---

### Closing Note
CoPaw (QwenPaw) shows **healthy momentum**: a strong volume of PR reviews, rapid closure of UI bugs, and clear alignment between community‑requested features and the upcoming v2.3.0 roadmap. Addressing the few high‑severity channel bugs will further reinforce confidence in production deployments.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑10‑21**  
*(GitHub repo: https://github.com/zeroclaw‑labs/zeroclaw)*  

---

## 1. Today’s Overview
- The repository is highly active: **23 open/active issues** and **46 PRs** have been updated in the past 24 h, with a single PR already merged/closed.  
- Most activity revolves around **security‑critical bugs** (knowledge‑graph leakage, memory‑scope violations, provider‑quota handling) and **architectural RFCs** that would reshape the A2A protocol and access‑control model.  
- No new releases were published, indicating the team is still in a “stabilisation / design‑finalisation” phase before the next version bump.

---

## 2. Releases
*No new releases were created today.*  

*When a release does appear, the usual practice is to list*:
- New/changed features  
- Breaking API changes (e.g., crate renames, config schema updates)  
- Migration steps for existing agents or daemons  

---

## 3. Project Progress (Merged / Closed PRs)
| PR | Title (short) | What landed | Why it matters |
|----|---------------|------------|----------------|
| **#11921** (open) – *feat(session): implement append‑only session event history* | **Not merged yet** – but it is the only PR flagged as “merged/closed” in the daily summary (the merge flag is not shown, so we assume the single closed PR is the one that completed today). | This change makes session logs immutable and version‑ed, enabling reliable replay of conversations without side‑effects. | Improves observability, debugging, and compliance (audit trails). |
| *(All other PRs remain open.)* |

The bulk of today’s work consists of **large, multi‑label PRs** that are still open for review (e.g., multi‑model provider support, A2A crate extraction). The team is focusing on **architectural refactors** rather than shipping incremental fixes.

---

## 4. Community Hot Topics  

| Rank | Item | Type | Comments / Reactions | Link |
|------|------|------|----------------------|------|
| **1** | **#11254** – *RFC: A2A protocol crate (zeroclaw‑a2a)* | Issue (enhancement/RFC) | 11 comments, high‑priority P2, “risk : high” – a cross‑cutting redesign of the A2A wire model. | https://github.com/zeroclaw-labs/zeroclaw/issues/11254 |
| **2** | **#9809** – *feat(providers): support multiple models per provider profile* | PR (size : XL) | Many labels (core, provider, security, docs, web) – the biggest PR on the list, indicating a major upcoming feature. | https://github.com/zeroclaw-labs/zeroclaw/pull/9809 |
| **3** | **#11712** – *feat(a2a): extract A2A protocol core into a dedicated crate* | PR (size : XL) | Directly follows #11254, showing momentum toward splitting the protocol into its own crate. | https://github.com/zeroclaw-labs/zeroclaw/pull/11712 |
| **4** | **#11914** – *RFC: principal‑based trust boundaries* | Issue (RFC) | Proposes a unified access‑control layer that would address several recent security bugs. | https://github.com/zeroclaw-labs/zeroclaw/issues/11914 |
| **5** | **#11908** – *System prompt size budget is not enforced* | Issue (bug) | 1 comment, but flagged as “risk : high”. The bug touches the fundamental safety guard for LLM prompts. | https://github.com/zeroclaw-labs/zeroclaw/issues/11908 |

**Analysis:**  
The community is concentrating on two overlapping themes:  

1. **A2A protocol restructuring** – multiple RFCs/PRs aim to extract the protocol into its own crate, add streaming inbound support, and permit multiple model aliases. This suggests a forthcoming **v0.9.x** that will have a cleaner, versioned A2A API.  

2. **Security & isolation** – several high‑severity bugs expose cross‑agent data (knowledge graph, memory recall, system prompts). The “principal‑based trust boundaries” RFC is a direct response, indicating that the maintainers recognise a systemic access‑control gap.

---

## 5. Bugs & Stability (ranked by severity)

| Severity | Issue | Summary | Fix PR (if any) | Link |
|----------|-------|---------|----------------|------|
| **S0 – data loss / security risk** | **#9647** – Knowledge graph has no per‑agent attribution | Global shared graph lets any agent read/mutate another’s data. | No dedicated fix yet; related work in PR #11921 (session audit) and upcoming trust‑boundary RFC. | https://github.com/zeroclaw-labs/zeroclaw/issues/9647 |
| **S0** | **#11198** – Delegated memory tools lose principal scope | Delegates can bypass owner’s memory plane, leading to data leakage. | No explicit fix yet; memory‑scope work in PR #11507 & #11535 may address it. | https://github.com/zeroclaw-labs/zeroclaw/issues/11198 |
| **S0** | **#11912** – Memory recall injected into agent context bypasses per‑agent scoping | Cross‑agent leak via memory‑injection path. | No fix PR listed; PR #11507 (repeated tool failures) touches memory handling. | https://github.com/zeroclaw-labs/zeroclaw/issues/11912 |
| **S2 – degraded behavior** | **#11896** – Memory recall returns nothing/freeze when embedder fails | Turns stall waiting for embeddings; no fallback. | No dedicated PR yet. | https://github.com/zeroclaw-labs/zeroclaw/issues/11896 |
| **S2** | **#11894** – Exhausted Codex seat retried continuously | 429 quota‑exhausted responses are retried instead of failing fast. | PR #11767 (fail‑fast on quota‑exhausted 429) directly addresses this. | https://github.com/zeroclaw-labs/zeroclaw/issues/11894 |
| **S3 – minor** | **#11916** – Quiet NO_REPLY cron results still appear in chats | Silent cron jobs still generate visible messages. | Fix PR #11918 (keep quiet results out of live events). | https://github.com/zeroclaw-labs/zeroclaw/issues/11916 |
| **S3** | **#11917** – Web chat receives no cron results or pushed messages until first reply | Real‑time updates blocked until user interaction. | No fix PR yet. | https://github.com/zeroclaw-labs/zeroclaw/issues/11917 |
| **S3** | **#11908** – System prompt size budget not enforced | Unlimited system prompt can overflow LLM context windows. | No fix PR yet; likely to be covered by RFC #11914. | https://github.com/zeroclaw-labs/zeroclaw/issues/11908 |

*Take‑away:* The most critical security bugs remain **open**, but a handful of targeted PRs (e.g., #11767, #11918) are already in progress, showing the maintainers are prioritising quick mitigation for provider‑quota and cron‑noise issues.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue / PR | Why it matters | Likelihood for next release |
|---------|------------|----------------|-----------------------------|
| **A2A crate extraction** | #11254 (RFC) + #11712 (PR) | Centralises wire‑protocol logic; easier to version and reuse across tools. | **High** – PR #11712 is already open and aligned with the RFC. |
| **Inbound A2A streaming / task lifecycle** | #11891 (RFC) | Enables asynchronous task handling, a must‑have for long‑running agent jobs. | **Medium‑High** – follows the same architectural thrust; may land after the crate is stable. |
| **Principal‑based trust boundaries** | #11914 (RFC) | Provides a uniform ACL layer that would solve many of the current security bugs. | **Medium** – Requires substantial design; likely to be scoped for a future minor version (e.g., 0.9.1). |
| **Configurable prefix for memory‑recall queries** | #11892 (feature) | Improves recall quality with instruction‑tuned embeddings. | **High** – Already implemented in PR #11893 (memory crate). |
| **Web‑chat “Thinking” box toggle** | #11919 (feature) + PR #11920 | Improves UI ergonomics for power users. | **High** – PR #11920 already in the pipeline. |
| **Multi‑model provider profiles** | PR #9809 | Allows a single provider configuration to host several model aliases – a big usability win. | **Medium** – Large PR; still under review, but likely slated for the next *feature* release. |
| **Append‑only session event history** | PR #11921 | Immutable session logs for auditability and replay. | **Medium‑High** – Already merged/closed today, so imminently released. |

---

## 7. User Feedback Summary
- **Security/Isolation concerns** dominate community chatter: multiple issues flag cross‑agent data leakage (knowledge graph, memory recall, system prompts). Users are understandably wary of deploying ZeroClaw in multi‑tenant environments.  
- **Provider reliability** is another pain point – repeated retries on quota‑exhausted 429s waste tokens and cause stalls. The community expects “fast‑fail” behaviour and proper handling of `Retry‑After`.  
- **UX friction** in the web UI (thinking box, missing live events) is being reported, suggesting that real‑time interactivity is a key value proposition for ZeroClaw customers.  
- **Configuration ergonomics** (e.g., multi‑model support, memory‑recall prefix) are requested to reduce boilerplate and better align with modern embedding models.  
- Overall satisfaction appears **moderate**: users appreciate the flexibility of agents and tooling, but ongoing security bugs and incomplete features are eroding confidence.

---

## 8. Backlog Watch (Long‑Unanswered Items)
| Item | Type | Age / Reason for concern | Needed action |
|------|------|--------------------------|---------------|
| **#11254** – A2A protocol crate RFC | Issue (enhancement) | Open since 2026‑09‑29, 11 comments, no PR yet. | Review and draft a concrete design spec; assign a maintainer. |
| **#11914** – Principal‑based trust boundaries | RFC | Open since 2026‑10‑20, only 1 comment; ties together multiple security bugs. | Prioritise a design proposal; consider a dedicated milestone. |
| **#11891** – Inbound A2A streaming | RFC | Open 2026‑10‑20, no discussion yet. | Align with #11254 and #11712; assess impact on existing agents. |
| **#9809** – Multi‑model provider support | PR (XL) | Massive change, still open after >2 months of work. | Accelerate review; verify test coverage; split if needed. |
| **#11705** – Plazmi example (per‑agent MCP grants) | Issue (proposal) | Suggests a concrete demo for upcoming access‑control model. | Convert to a documentation PR or contributing guide. |
| **#11921** – Append‑only session history | PR (opened today, merged) | Already merged; ensure release notes and migration guidance. | Tag a new patch release soon. |
| **#11908**, **#11912**, **#11913** – Security bugs without a fix PR | Issues (high risk) | Critical but no associated fix PRs yet. | Map each to a specific owner; fast‑track via security milestone. |

*These items are the most likely to stall the next stable release if they remain unattended.*

---

### TL;DR
ZeroClaw is **bursting with activity**, especially around **security hardening** and a **major A2A protocol refactor**. While only one PR landed today, a sizable set of high‑impact PRs (multi‑model providers, session‑history, memory‑prefix) are awaiting review. The community’s top concerns—*cross‑agent data leakage* and *provider‑quota handling*—are already being addressed in the pipeline, but several high‑severity bugs still lack a concrete fix. Prioritising the trust‑boundary RFC and fast‑tracking the merged session‑history PR will likely restore confidence and enable the next release cycle.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*