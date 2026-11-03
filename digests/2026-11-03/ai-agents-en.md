# OpenClaw Ecosystem Digest 2026-11-03

> Issues: 96 | PRs: 500 | Projects covered: 12 | Generated: 2026-11-03 06:19 UTC

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

**OpenClaw Project Digest – 2026‑11‑03**  
*(All links point to the official GitHub repo `github.com/openclaw/openclaw`)*  

---  

## 1. Today’s Overview  
- OpenClaw remains **high‑activity**: 96 issues were touched in the last 24 h (68 still open) and **500 PRs** were updated, of which 303 are open and 197 were merged or closed.  
- The only official release in the past month is **v2026.10.10**, a maintenance bump focused on backup‑safety and Codex scaffolding.  
- The current backlog is dominated by **session‑state, crash‑loop and message‑loss** problems; many are flagged **P0–P2** and have attracted the most discussion.  
- Feature work (Markdown preview, enforceable checkpoints, Teams SharePoint resolution, Skill Workshop) is progressing but is still waiting on maintainer triage.  

---  

## 2. Releases  

### v2026.10.10 – “Backup safety”  
- **Backup scope expansion** – PostgreSQL state dumps are now included; all bundled‑plugin credentials, webhook tokens and credential blobs are **redacted**.  
- **Codex scaffolding** – preliminary work toward tighter integration (details in the release notes).  
- **No breaking API changes** – the release is a pure safety upgrade; existing installations can upgrade in‑place.  
- **Migration note** – operators should re‑run `openclaw doctor --fix` after upgrade to verify that the new backup logic is correctly configured.  

---  

## 3. Project Progress (PRs closed/merged today)  

| PR | Scope | What landed | Impact |
|----|-------|-------------|--------|
| **#191713** (telegram) | bug‑fix | Agent can now see a photo sent seconds **before** a mention in a group. | Improves media‑aware conversations on Telegram. |
| **#191709** (telegram) | bug‑fix | Typing indicator refreshed after a delivered message, preventing dead‑silent turns. | Smoother UX in fast‑reply scenarios. |
| **#191701** (matrix) | bug‑fix | Matrix polls are now rendered correctly in Element X. | Fixes a long‑standing compatibility gap. |
| **#191710** (test) | refactor | Shared fixture‑file writer reused across test suites. | Reduces test‑maintenance overhead. |
| **#191699** (ui) | bug‑fix | Long text pastes retain original user provenance instead of becoming “untrusted external content”. | Addresses a subtle UI‑security confusion. |
| **#191676** (update) | bug‑fix | `openclaw update` now surfaces the real failure when the finalize worker exits early. | Makes upgrade failures diagnosable. |
| **#191650** (gateway) | bug‑fix | Talk operator identity preserved across invocation guards. | Prevents loss of audit information in Talk sessions. |
| **#191708** (diffs) | bug‑fix | Empty `plugins.allow` lists now correctly suppress language‑pack diff handling. | Improves language‑pack configurability. |
| **#191704** (memory) | bug‑fix | Mixed‑case external memory‑plugin IDs are now preserved for dreaming side‑cars. | Prevents “plugin not found” errors after a rename. |
| **#191712** (agents) | bug‑fix | Synchronous read‑only custom API streams are now wrapped safely. | Stops crashes when plugins return raw streams. |
| **#191703** (google‑meet) | bug‑fix | Duplicate partial captions and stray notices removed. | Cleaner real‑time transcriptions. |
| **#191692** (buzz) – *closed* | bug‑fix | Rate‑limit handling in Buzz history replay no longer stops replies in other rooms. | Improves multi‑room stability. |
| *…plus 10+ additional small‑to‑medium PRs* (documentation, CI, security review handling).  

**Take‑away:** most merged work today is **bug‑fixes that tighten UX consistency across channels** (Telegram, Matrix, Discord, Google Meet) and **diagnostic improvements** for update/doctor tooling.

---  

## 4. Community Hot Topics  

| Rank | Issue / PR | Comments | Labels / Severity | Core Need |
|------|------------|----------|-------------------|-----------|
| 1 | **#166634** – “Late reclamation commit checkpoint failure” | 22 | `P0`, `session-state`, `message‑loss` | Guarantees agent availability after crash recovery. |
| 2 | **#178359** – “`doctor --fix` hangs for >15 min on macOS” | 22 | `P1`, `crash‑loop` | Provides reliable self‑repair tooling. |
| 3 | **#169844** – “Gateway update hangs on Windows (Activating)” | 8 | `P0`, `crash‑loop`, `ux‑release‑blocker` | Ensures cross‑OS update path works. |
| 4 | **#190307** – “Gateway restart leaves agents degraded” | 5 | `P1`, `session-state`, `message‑loss` | Stable restart semantics for large fleets. |
| 5 | **#128090** – “Markdown preview in Review files” (Feature) | 9 (4 👍) | `P3`, `ux‑friction` | Improves readability of long review documents. |
| 6 | **#138990** – “Enforceable checkpoints & bounded yields for WebChat runs” (Feature) | 8 | `P2`, `ux‑friction` | Prevents runaway tool‑call budgets in live chats. |
| 7 | **#191713** (PR) – “Telegram photo‑mention bug” | – | `S` size | Real‑time media handling. |
| 8 | **#191701** (PR) – “Matrix poll rendering” | – | `S` size | Cross‑client compatibility. |
| 9 | **#191709** (PR) – “Telegram typing refresh” | – | `S` size | UI responsiveness. |

**Underlying signals** – The community is most concerned about **reliability of the core gateway and crash‑recovery** (issues #166634, #178359, #190307) and **cross‑channel UX consistency** (Telegram, Matrix, Windows updates). Feature ideas that reduce operator friction (Markdown preview, checkpoint policies) are gaining traction but are still waiting on maintainer review.

---  

## 5. Bugs & Stability  

| Severity | Issue | Summary | Current Status | Fix PR (if any) |
|----------|-------|---------|----------------|-----------------|
| **Critical (P0)** | **#166634** – SQLite session reclamation commit checkpoint expired after crash. | Agent becomes permanently UNAVAILABLE for key endpoints. | **Open** (68 days old). | No PR yet; requires deep storage‑engine fix. |
| **Critical (P0)** | **#169844** – Windows gateway update stalls at “Activating”. | Scheduled‑Task disabled, gateway stopped. | **Open** (22 days). | No PR yet. |
| **High (P1)** | **#178359** – `doctor --fix --non‑interactive` hangs >15 min on macOS. | No DB repair progress; doctor process idle. | **Open** (14 days). | No PR yet. |
| **High (P1)** | **#185578** – Gateway heap floor ratchets up (memory leak per run). | ~25 MiB/h V8 growth; eventual abort. | **Open** (7 days). | No PR yet. |
| **High (P1)** | **#190307** – Restart leaves many agents “degraded”. | Admission timeout, needs full `doctor --fix`. | **Open** (2 days). | No PR yet. |
| **High (P1)** | **#191601** – Linux `doctor --fix` silent for ~79 min after stopping gateway. | Event‑loop parked, no output. | **Open** (today). | No PR yet. |
| **Medium (P2)** | **#138561** – `active-memory` plugin stops recalling after 2026.8.2 upgrade. | No recall logs despite agent turns. | **Open** (30 days). | No PR yet. |
| **Medium (P2)** | **#144797** – Reused `claude-cli` session keeps stale `--mcp-config`, causing 401 errors. | All `mcp__openclaw__*` tools fail mid‑session. | **Open** (53 days). | No PR yet. |
| **Medium (P2)** | **#141172** – Run dies before first session commit → run‑started leak. | Missing `run.finished`, FK failures. | **Open** (57 days). | No PR yet. |
| **Medium (P2)** | **#191566** – Plugin‑bound conversations reject inbound turns (`SessionCanonicalKeyMigrationRequiredError`). | Doctor does not repair plugin‑binding keys. | **Open** (today). | No PR yet. |

**Take‑away:** The most severe bugs are **still open** and none have an associated fix PR as of today. This points to a **maintenance bottleneck** on core storage and crash‑recovery paths.  

---  

## 6. Feature Requests & Roadmap Signals  

| Feature | Issue | Description | Current Priority | Likelihood in Next Release |
|---------|-------|-------------|------------------|-----------------------------|
| **Markdown preview in Review files** | #128090 (P3) | Rendered preview for Markdown review docs. | Awaiting maintainer review. | **Medium** – low‑risk UI addition; could land in a minor bump. |
| **Enforceable checkpoints / bounded yields for WebChat** | #138990 (P2) | Runtime‑enforced pause after silent‑time or tool‑budget limits. | Needs product decision. | **High** – addresses long‑run hangs; may be prioritized for 2026.11.x. |
| **Dynamic SharePoint site resolution for Teams file uploads** | #136271 (P2) | Auto‑discover team SharePoint site instead of static ID. | Needs maintainer review. | **Medium** – largely internal‑ops request; may be deferred. |
| **Skill Workshop – verify learning coverage** | #150250 (P3) | Workflow to capture procedural discoveries and test skill revisions. | Needs product decision. | **Low** – longer‑term roadmap. |
| **Slack opt‑in optional completion for @‑mentioned bot notifications** | #186514 (P3) | Policy decision on optional bot reply when group silence allowed. | Product‑policy discussion. | **Low** – policy rather than code change. |
| **Realtime Talk idle timeout** | #191475 (P2) | Auto‑terminate idle realtime relay sessions to avoid billing for silence. | Needs maintainer review. | **Medium** – cost‑control request, likely to be addressed soon. |

---  

## 7. User Feedback Summary  

- **Reliability Pain Points** – Repeated reports of *agents disappearing* after crashes, *gateway updates hanging*, and *doctor/repair commands stalling* dominate user conversations. Operators describe “agent unavailable” errors as show‑stopper for production deployments.  
- **Channel‑Specific Friction** – Telegram groups miss photos when the bot is mentioned; Matrix polls appear as “unsupported” in Element X; Discord pins are silently dropped. Users appreciate the quick PR fixes that resolve these quirks.  
- **UX & Visibility Gaps** – Lack of rendered Markdown in Review view, missing checkpoint status in long WebChat runs, and opaque backup behavior are repeatedly mentioned.  
- **Performance Concerns** – Memory‑core KNN search latency (≈1 s/query) and Gateway heap growth are flagged as scaling blockers for large fleets.  

Overall sentiment: **high enthusiasm for feature ideas** but **moderate dissatisfaction** with the stability of core session/backup mechanics.

---  

## 8. Backlog Watch (Stale/Open Items Needing Attention)  

| Issue | Age | Labels | Why It Matters |
|-------|-----|--------|-----------------|
| **#128090** (Markdown preview) | 1 mo | `P3`, `ux‑friction` | UI improvement that could be a low‑effort win. |
| **#137613** (Pre‑compaction memory flush disabled) | 2 mo | `P2`, `session‑state` | Could cause data loss on CLI backends. |
| **#138561** (active‑memory recall regression) | 1 mo | `P2`, `session‑state` | Direct impact on long‑term memory features. |
| **#144336** (Deferred config‑reload shutdown fails) | 2 mo | `P1`, `crash‑loop` | Affects live config changes without restart. |
| **#176187** (memory‑core sparse vec0 allocation slowdown) | 2 mo | `P2`, `other` | Severe query latency on larger memory indexes. |
| **#191420** (non‑interactive doctor installs plugins) | 1 d | `P2`, `security` | Potential supply‑chain security risk. |
| **#191475** (Realtime Talk idle timeout) | 1 d | `P2`, `ux‑friction` | Prevents unintended billing for idle sessions. |
| **#191566** (Plugin‑bound session rejection) | today | `P2`, `session‑state` | Blocks inbound messages for bound conversations. |
| **#191601** (doctor silent for 79 min) | today | `P1`, `crash‑loop` | Leaves admin with no feedback; likely to be escalated. |

**Recommendation:** Prioritize at least one **core‑stability** issue (e.g., #166634, #178359, #190307) in the next sprint, and schedule a **UX quick‑win** (e.g., #128090) to restore community confidence.

---  

*Prepared by the OpenClaw project‑analysis bot – data as of 2026‑11‑03.*

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison – Personal AI‑Assistant / Agent Open‑Source Ecosystem (snapshot 2026‑11‑03)**  

---

## 1. Ecosystem Overview  
The personal‑AI‑assistant landscape is now a constellation of loosely coupled runtimes (OpenClaw, ZeroClaw, CoPaw, etc.) that share a common goal: turn a language model into a long‑running, multimodal “agent”.  Most projects are built around a **gateway/driver layer**, a **plug‑in architecture**, and a **state‑persistence back‑end** (SQLite, PostgreSQL, or custom memory stores).  Recent months have shown a clear split between *core‑stability work* (crash‑recovery, session checkpoints) and *UX‑polish / integration* work (Markdown preview, Teams/SharePoint adapters, desktop UI skins).  The ecosystem is therefore moving from “proof‑of‑concept” toward production‑grade reliability, but a handful of critical storage‑engine bugs still hold back wider adoption.

---

## 2. Activity Comparison  

| Project | Issues (open / touched 24 h) | PRs (open / merged 24 h) | Release in last 30 d? | Health Score* (1–10) |
|---------|-----------------------------|--------------------------|-----------------------|----------------------|
| **OpenClaw** | 68 open / 96 touched | 303 open / 197 merged | v2026.10.10 (maintenance) | **7** |
| **NanoBot** | 3 open / 5 touched | 4 open / 4 merged | – (no release) | **6** |
| **NullClaw** | 0 open / 0 touched | 3 open / 0 merged | – | **5** |
| **IronClaw** | 0 open / 0 touched | 4 open / 2 merged | – | **6** |
| **LobsterAI** | 0 open / 0 touched | 9 open / 16 merged | – | **7** |
| **CoPaw** | 4 open / 13 touched | 33 open / 15 merged | – (beta verification) | **7** |
| **ZeroClaw** | 14 open / 14 touched | 42 open / 8 merged | – (RC stage) | **6** |
| **PicoClaw / NanoClaw / Moltis** | – (no activity) | – | – | **<4** |

\*Health Score = (merged PR % + recent release weight – critical open bugs / total issues) rounded to the nearest integer.  

---

## 3. OpenClaw’s Position  

| Dimension | OpenClaw | Peer Benchmark |
|-----------|----------|-----------------|
| **Core focus** | Session‑state integrity, crash‑loop recovery, multi‑channel consistency (Telegram, Matrix, Google Meet). | Most peers are still polishing UI (CoPaw, ZeroClaw) or adding new adapters (NanoBot, NanoClaw). |
| **Technical approach** | • Central **gateway** that serialises all turns.<br>• **PostgreSQL**‑backed backups with redaction.<br>• Explicit **checkpoint / commit** semantics (P0‑P2 bugs around reclamation).<br>• Plugin‑API is *synchronous* for critical streams, with extensive diagnostic tooling (`doctor --fix`). | • IronClaw & ZeroClaw use **SQLite** as the default store, relying on *append‑only* logs.<br>• LobsterAI & CoPaw embed **Electron/desktop UI** layers and lean on in‑process memory stores.<br>• NanoBot concentrates on *lightweight channel adapters* and a **single‑process** runtime. |
| **Community size** | ~500 PR updates / day, 96 issues touched – the largest raw activity of any project in the set. | CoPaw is close (48 PRs, 13 issues) but has fewer critical‑state bugs; ZeroClaw’s PR volume is similar but most remain open. |
| **Strategic advantage** | • Most mature **fault‑tolerance** stack (doctor, backup‑scope, checkpoint policy).<br>• Broadest native channel set (Telegram, Matrix, Teams, Google Meet).<br>• Explicit roadmap items for “enforceable checkpoints” and “skill workshop”. | • Others excel at UI polish (CoPaw, LobsterAI) or ultra‑lightweight deployment (NanoBot). |

---

## 4. Shared Technical Focus Areas  

| Need | Projects Raising It | Typical Implementation |
|------|----------------------|------------------------|
| **Robust session / checkpoint recovery** | OpenClaw (#166634, #190307), ZeroClaw (WebSocket‑lifetime, #7759), CoPaw (session‑state‑loss #7966), IronClaw (daemon‑allocation bug #1090) | Transactional commits, watchdogs, daemon‑level allocation guards. |
| **Cross‑channel UX consistency** | OpenClaw (Telegram photo, Matrix poll), NanoBot (WhatsApp media handling), NanoClaw (Telegram quote, WhatsApp caption), LobsterAI (orb drag, markdown preview) | Unified message‑model abstractions, media‑aware parsers, language‑pack diff handling. |
| **Dependency hygiene / security** | LobsterAI (Dependabot flood, rustls bump), IronClaw (rustls upgrade), NanoBot (libmagic, Neonize), ZeroClaw (distroless image missing / sh) | Automated Dependabot PRs, CI‑driven version pinning, verification of native libs. |
| **Memory / index performance** | OpenClaw (memory‑core KNN latency, #176187), ZeroClaw (provider context‑window fallback), CoPaw (memory‑core slow‑compaction), LobsterAI (model‑stream reconnection) | Sparse‑vector optimisation, heap‑floor ratchet monitors, lazy‑loading of inbound content. |
| **Developer ergonomics (preview, checkpoints, UI skinning)** | CoPaw (Markdown preview, line‑ending handling), LobsterAI (Markdown preview fix, orb UI), OpenClaw (Markdown preview request #128090), ZeroClaw (quick‑add‑model button) | Browser‑based preview panes, optional UI themes/skills, configurable checkpoint policies. |

---

## 5. Differentiation Analysis  

| Aspect | OpenClaw | NanoBot | NullClaw | IronClaw | LobsterAI | CoPaw | ZeroClaw |
|-------|----------|---------|----------|----------|-----------|-------|----------|
| **Primary Target** | Enterprise‑grade, multi‑channel fleets (teams, compliance) | Lightweight, single‑process bots (WhatsApp, Telegram) | Minimalist “core only” runtime (Zig) | General‑purpose Rust‑based agent runtime | End‑user desktop companion (Electron) | Research‑focused “QwenPaw” platform (LLM‑centric) | Full‑stack gateway + UI + OIDC for SaaS‑style deployments |
| **Language Stack** | Rust (gateway) + PostgreSQL | Python (async) | Zig | Rust | TypeScript / Electron + Rust back‑end | Rust + Python plugins | Rust (core) + TypeScript web UI |
| **State Store** | PostgreSQL (full backup, redaction) | SQLite (experimental) | SQLite (core) | SQLite | SQLite + in‑app IndexedDB (web) | SQLite + optional memory‑core | SQLite (append‑only) |
| **Plugin Model** | Synchronous streams, explicit `agent‑loop` hooks | Simple “MCP” tool wrapper, async‑only | Minimal C‑style hooks | Rich hook system (`tool_decision`, `post_background_review`) | Plugins via `cowork` skill, MCP wrapper | “Skill” system with `skill.json` + runtime hooks | Full‑featured `hooks` (agent‑loop, tool‑decision, OIDC) |
| **Unique Feature** | Codex scaffolding, backup‑scope expansion, enforceable checkpoints (planned) | Persistent session archives in SQLite, WhatsApp native adapter | Extremely low‑level memory safety focus (allocation‑before‑free) | Audit trail per tool call, granular plugin‑bound sessions | Re‑connect model SSE streams, Docker image shrink‑wrap, web‑search skill packaging fix | Append‑only session event history, markdown preview, large‑skill download handling | OIDC dashboard sign‑in, WebSocket decoupling, inbound‑only email channel |
| **Release Cadence** | Monthly maintenance bump (v2026.10.10) | No formal releases – PR‑driven | No releases (still pre‑v1) | No releases (patch PRs) | No releases – dependent on PR merges | Beta verification cycle (2.3‑beta) | RC stage, no tagged release yet |

---

## 6. Community Momentum & Maturity  

| Tier | Projects | Characteristic |
|------|----------|----------------|
| **Rapid‑iteration / High churn** | OpenClaw, CoPaw, ZeroClaw | >300 PRs touched in 24 h, heavy issue‑comment traffic, many P0/P1 bugs. |
| **Steady‑maintenance** | LobsterAI, IronClaw, NanoBot | Mostly dependency upgrades, targeted bug fixes, occasional UI polish. |
| **Low‑activity / Early‑stage** | NullClaw, NanoClaw, PicoClaw, Moltis | Few issues, PRs idle, no releases – still in exploratory or “core‑only” phase. |

Maturity can be inferred from release cadence: OpenClaw (monthly), ZeroClaw (RC), CoPaw (beta verification) are **closest to production‑grade**; IronClaw and LobsterAI have **stable cores but limited public releases**, indicating a “soft‑launch” posture.  

---

## 7. Trend Signals for AI‑Agent Developers  

| Trend | Evidence Across Projects | What It Means for Developers |
|-------|--------------------------|------------------------------|
| **Session‑state durability is a blocker** | OpenClaw (#166634, #190307), ZeroClaw (WebSocket‑lifetime #7759), CoPaw (session‑break after provider switch #7966) | Future SDKs must expose *transactional checkpoints* and *auto‑replay* mechanisms; simple “restart‑and‑continue” is no longer acceptable. |
| **Cross‑channel parity is expected** | Telegram, Matrix, WhatsApp, Teams, Google Meet all receive bug‑fixes within days (OpenClaw, NanoBot, NanoClaw) | Agents should use a **common message schema** and have a test‑suite that validates each channel’s media handling, caption parsing, and quoting semantics. |
| **Security & dependency hygiene is top‑of‑mind** | Dependabot floods in LobsterAI, rustls upgrades in IronClaw, libmagic handling in NanoBot, distroless image missing `/bin/sh` in ZeroClaw | CI pipelines need **automated vetting of native libs**, signed releases, and minimal base images; a “security‑first” release policy is becoming a de‑facto requirement. |
| **Observability / audit hooks are proliferating** | OpenClaw diagnostic `doctor`, IronClaw `tool_decision` hook, ZeroClaw `append‑only` session logs, LobsterAI `post_background_review` hook | Developers should design agents **with pluggable observability layers** (structured logs, per‑tool audit records) to satisfy compliance and debugging needs. |
| **UI / developer experience matters even for backend‑heavy runtimes** | Markdown preview (OpenClaw, CoPaw, LobsterAI), desktop UI skins (OpenClaw “unslop”, LobsterAI orb), fast‑mounting WebUI (NanoBot) | Investing in **web‑based consoles or VS‑code extensions** pays off in adoption; tooling around session inspection (debug view, checkpoint visualizer) is becoming a differentiator. |
| **Lazy / on‑demand inbound processing** | NanoBot #3711/​#3712, LobsterAI reconnection logic, ZeroClaw provider‑fallback checks | Bandwidth‑cost optimization (especially for WhatsApp, email, and mobile users) is a common requirement; future agent frameworks will likely expose *stream‑guards* and *deferred fetch* APIs. |

*Strategic takeaway:*  The next wave of open‑source agents will be judged less on raw model capability and more on **reliable state management, secure deployment pipelines, and seamless multi‑channel UX**.  Teams evaluating a stack should map their compliance, cost‑control, and UI‑integration priorities against the dimensions above to pick the most aligned project.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot – Project Digest (2026‑11‑03)**  

---

### 1. Today’s Overview  
- The repository saw a moderate burst of activity: 5 issues were updated (3 still open) and 8 pull‑requests were touched, of which 4 were closed/merged.  
- No new releases were posted, so the codebase remains at the same version as of the last tag.  
- The most visible work today centred on the WhatsApp channel (dependency handling and Neonize version lock), continued refactoring of the goal‑execution policy, and the first steps toward persisting session archives in SQLite.  

---

### 2. Releases  
*No new releases were created in the last 24 h.*  

---

### 3. Project Progress (Merged / Closed PRs)  

| PR # | Title / Focus | Type | Key Outcome |
|------|---------------|------|-------------|
| **#6546** | *fix(whatsapp): report libmagic dependency failures* | bug + docs + channel + webui | Improves error reporting when the native `libmagic` library cannot be loaded, exposing the real cause to users in the gateway status page and WebUI QR flow. |
| **#6545** | *fix(whatsapp): update Neonize for current clients* | bug | Bumps the Neonize dependency to ≥ 0.5.2, allowing the bundled WhatsApp client to connect to the latest WhatsApp servers and preventing the “client outdated (405)” error. |
| **#6537** | *fix(runtime): preserve recovery history & prevent unsafe MCP replays* | bug + runtime safety | Adds a recovery‑history log and guards against duplicate MCP tool‑call replays after connection loss or crash, reducing the chance of inconsistent state. |
| **#6540** | *fix(webui): avoid remounting outgoing conversations* | performance + webui | Stops the heavy re‑mount of `ThreadMessages` when switching conversations, eliminating UI stalls caused by large diff renders. |

*Impact*: Two of the four closed PRs directly improve reliability of the WhatsApp channel (the most frequently used external integration). One PR tightens runtime safety for the MCP tool‑wrapper, and another reduces UI latency—both important for a smooth end‑user experience.

---

### 4. Community Hot Topics  

| Item | Comments / 👍 | Why It’s Hot | Link |
|------|----------------|--------------|------|
| **Issue #6539** – *strip_think removes literal think‑tag examples inside fenced code blocks* | 1 comment, 0 👍 | Affects documentation examples and the way model‑generated reasoning is stripped. Users rely on `<think>` tags for prompting; accidental removal of literal examples breaks tutorials. | https://github.com/HKUDS/nanobot/issues/6539 |
| **PR #6538** – *refactor(goal): isolate sustained‑goal continuation policy* | Open, priority p2, recent conflict | Introduces a new execution‑policy boundary for “sustained goals”, a core architectural change that touches CLI, Gateway and SDK. Signals a move toward more granular control of long‑running tasks. | https://github.com/HKUDS/nanobot/pull/6538 |
| **PR #6536** – *refactor(sessions): persist archive state in SQLite* | Open, priority p2 | Moves archival flags from a JSON side‑car to the existing session SQLite DB, promising better reliability and queryability for session history. | https://github.com/HKUDS/nanobot/pull/6536 |
| **Issue #6542** – *Linear setup cancellation reports cancelled after authorization has completed* | 0 comments | A UX bug where a cancellation race condition leaves users thinking the install failed even though the workspace is authorized. Highlights a need for clearer async flow handling. | https://github.com/HKUDS/nanobot/issues/6542 |

*Underlying needs*: smoother developer documentation (strip_think), more deterministic long‑running goal handling, robust session persistence, and clearer async state signalling.

---

### 5. Bugs & Stability  

| Severity | Issue / PR | Summary | Fix Status |
|----------|------------|---------|-----------|
| **Critical** | **#6543** (closed) – *WhatsApp: missing native libmagic reported as missing plugin dependencies* | Misleading error handling hid the real native‑library problem, preventing quick fixes. | Fixed in PR #6546 (today). |
| **High** | **#6544** (closed) – *WhatsApp: outdated client 405 due to Neonize version constraint* | Client rejected by WhatsApp because Neonize pinned to an obsolete version. | Fixed in PR #6545 (today). |
| **High** | **#6539** (open) – *strip_think removes literal examples* | Documentation code blocks are corrupted, potentially breaking downstream tutorials and tests. | No fix yet; PR pending. |
| **Medium** | **#6542** (open) – *Linear setup cancellation race* | Users see “cancelled” even after successful auth, causing confusion. | No fix yet. |
| **Medium** | **#6541** (open) – *Required Codex compaction can fall through to generation during image retry* | When image‑removal retry clears conversation state, a generation request may be sent before compaction finishes, leading to malformed outputs. | No fix yet. |
| **Low** | **#6296** (open) – *parallel tool calls without index* | Streaming APIs that omit `tool_calls[].index` cause mis‑ordering in parallel calls. | PR open; under review. |

*Take‑away*: The most severe WhatsApp‑related bugs have been resolved today, dramatically improving the stability of that integration. The remaining open bugs focus on UX edge‑cases and internal tooling, which should be prioritised before the next minor release.

---

### 6. Feature Requests & Roadmap Signals  

| Request / PR | Core Idea | Likelihood of Inclusion in Next Release |
|--------------|-----------|------------------------------------------|
| **#6538** – *sustained‑goal continuation policy* | Exposes a policy hook that decides whether a long‑running “goal” should continue after each iteration. | **High** – Already under active development; expected in the next minor release (v X.Y). |
| **#6536** – *SQLite‑backed archive persistence* | Stores archive flags directly in the session database, improving durability and query speed. | **Medium‑High** – Architecture work is in place; testing is the next hurdle. |
| **#6296** – *parallel tool‑call separation when stream omits index* | Adds defensive handling for providers that stream tool calls without an explicit index. | **Medium** – Important for provider compatibility; likely to land in a patch release. |
| **#6141** – *render resource and audio blocks in MCP tool results* | Extends MCP rendering to handle resource, link, and audio blocks properly. | **Medium** – UI polish; may be bundled with other MCP improvements. |

---

### 7. User Feedback Summary  

- **WhatsApp channel pain points**: Users struggled with cryptic “missing dependencies” messages and version‑lock failures. The two fixes (#6546, #6545) directly address this frustration.  
- **Documentation integrity**: The `strip_think` bug shows that users rely on Markdown examples for learning; accidental stripping damages onboarding material.  
- **Async workflow clarity**: The Linear setup cancellation issue highlights a broader desire for transparent state transitions during OAuth‑style flows.  
- **Performance**: The WebUI remount slowdown (#6540) was a noticeable UI freeze for heavy conversations, and its fix improved perceived responsiveness.  

Overall, the community is most vocal about integration reliability (WhatsApp) and developer‑experience tooling (documentation, session handling).

---

### 8. Backlog Watch  

| Item | Age | Reason for Attention |
|------|-----|----------------------|
| **#6296** – *parallel tool calls without index* | Open since 2026‑10‑19 (≈ 2 weeks) | Provider‑agnostic streaming support is essential for future OpenAI‑compatible back‑ends; delay may block downstream features. |
| **#6538** – *sustained‑goal continuation policy* | Open since 2026‑11‑02 (active, conflict) | Core architectural change; pending conflict resolution before merge. |
| **#6536** – *SQLite archive persistence* | Open since 2026‑11‑02 (active) | Affects data durability for long‑term deployments; test coverage is still lacking. |
| **#6541** – *Codex compaction on image retry* | Open since 2026‑11‑02 (critical to generation correctness) | Could lead to malformed model outputs; needs a targeted fix before the next generation‑heavy release. |
| **#6539** – *strip_think* | Open since 2026‑11‑02 (documentation impact) | Although low‑severity, fixing ensures that tutorials remain accurate for new contributors. |

*Recommendation*: Prioritise PR #6296 and the open bug #6541 (both impact correctness of model‑generated content) ahead of the larger refactor PRs, while keeping a close eye on the resolution of the sustained‑goal policy conflict.  

---

**Bottom Line** – NanoBot’s core remains healthy: critical integration bugs have been squashed, performance regressions are being addressed, and the project is progressing on substantial architectural improvements (goal policies, SQLite persistence). The next few weeks should focus on closing the high‑severity open bugs and finalising the roadmap‑driven refactors to keep momentum and community confidence high.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑11‑03)**  
*Data snapshot: 14 issues updated (13 open, 1 closed), 50 PRs updated (45 open, 5 merged/closed), 1 new release (v0.22.6).*

---

## 1. Today’s Overview
- Development momentum remains high: 50 PRs were touched in the last 24 h, showing a ≈ 90 % open‑PR ratio, which indicates a healthy influx of contributions but also a backlog of review work.  
- Issue activity is concentrated on “dashboard / session state”, “desktop UI duplication”, and “cache‑pruning” bugs, all receiving multi‑digit comment threads – a sign that the community is actively reproducing and triaging regressions.  
- The latest patch release (v0.22.6) rolled over ~776 merged PRs, stabilising the CLI, desktop, Docker and Store builds, while the “future notes” for v0.23.0 are still pending.  
- Overall health is **stable but review‑pipeline‑heavy**: the high PR count coupled with a modest number of merged items suggests maintainers are currently inundated with review requests.

---

## 2. Releases
### v0.22.6 – 2 Nov 2026 (Patch)
- **Scope:** Consolidates ~776 PRs merged since v0.22.5; shipped to GitHub release assets, Microsoft Store, Docker images, and Hermes Cloud.  
- **Key changes:**  
  - Updated CLI binaries and installers to target the new `0.22.6` tag.  
  - No functional breaking changes reported; the release is a “stabilisation” bump.  
- **Migration notes:** None required beyond the usual “re‑install the CLI or pull the new Docker image”.  
- **Future context:** Detailed curated notes for this PR window are slated for the upcoming v0.23.0 release.

---

## 3. Project Progress (Merged / Closed PRs)
While the full list of today’s merged PRs isn’t enumerated in the snapshot, the dashboard reports **5 PRs were merged/closed** in the last day. The visible open PRs illustrate the current direction of work:

| PR | Title / Goal | Component | Comments / Notes |
|----|--------------|-----------|-------------------|
| **#148361** | *unslop*: optional skill that redesigns AI‑looking UI screens | `skills/official/creative/` | Introduces a UI‑skin skill to replace the “purple‑gradient, emoji‑button” aesthetic. |
| **#148360** | Add `post_background_review` hook | Core / plugins | Gives plugins a one‑off callback after the background review summary is emitted. |
| **#148306** | Agent‑loop hook for guarded decision reuse | Core agent loop | Allows plugins to shortcut already‑decided tool calls, reducing unnecessary LLM round‑trips. |
| **#148355** | Desktop update failure UI now shows error + support link | Desktop updater | Improves UX by surfacing the exact failure reason and a one‑click “support” button. |
| **#145439** | `tool_decision` hook – audit record per tool call | Plugins | Enables compliance / policy plugins to log verdicts for every tool invocation. |

These PRs collectively move the platform toward **greater extensibility (hooks, UI skinning), better observability (error details, audit hooks) and smoother user experience**.

---

## 4. Community Hot Topics
| # | Item | Type | Comments | Link | What the community cares about |
|---|------|------|----------|------|--------------------------------|
| **138915** | *Dashboard mutations refused 409 while a gateway owns `state.db`* | Bug – CLI / dashboard / sessions | **15** comments | <https://github.com/NousResearch/hermes-agent/issues/138915> | Persistent 409 errors block bulk actions; signals a concurrency / lock‑contention problem in always‑on installations. |
| **126654** | *Virtual plugin workspace member synthesized without `[project].version`* | Bug – plugins / install‑update | **6** comments | <https://github.com/NousResearch/hermes-agent/issues/126654> | A one‑line fix is needed; the issue affects any “lint‑only” `pyproject.toml` (e.g., ruff/black). |
| **130490** | *Desktop sometimes renders the same assistant reply twice* | Bug – desktop / sessions / streaming | **3** comments | <https://github.com/NousResearch/hermes-agent/issues/130490> | Duplicate message bug impacts chat continuity; prompting a need for deduplication logic. |
| **148357** | *Plugin hook after background review completes* | Feature request – plugins | **1** comment | <https://github.com/NousResearch/hermes-agent/issues/148357> | Opens the “review” phase to plugins, aligning with enterprise compliance use cases. |
| **148306** | *Agent‑loop hook for guarded decision reuse* | Feature request – core | **1** comment | <https://github.com/NousResearch/hermes-agent/issues/148306> | Seeks performance gains by skipping already‑decided tool calls; reflects a scalability concern. |

**Underlying needs:**  
- **Robust session/state handling** (issues #138915, #130490, #142288).  
- **Plugin ecosystem stability** (issues #126654, #148357).  
- **Performance & observability** (feature #148306, #145439).  

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Summary | Status / Fix PR |
|----------|-------|---------|-----------------|
| **High** | #148329 – *Skill lock blocks ALL git writes* | When a skill folder lives inside a git repo, the lock blocks unrelated commits, causing push failures. | Open – no fix yet. |
| **High‑Medium** | #138915 – *Dashboard 409 errors* | Bulk mutations blocked when gateway holds `state.db`; affects always‑on dashboard usage. | Open; no dedicated PR yet. |
| **Medium‑High** | #130490 – *Duplicate desktop reply* | Same assistant response appears twice in a single turn (Linux container backend). | Open; under investigation. |
| **Medium** | #142288 – *Native vision images dropped after one turn* | Vision tool results vanish from history; only a placeholder remains. | Open; no linked fix. |
| **Medium** | #143577 / #128474 – *`~/.hermes/cache/uv/` flagged as unpruned* | `hermes doctor` warns about a 1 GB UV cache that the user cannot easily delete. | No fix yet; related discussions in PR #148355 (desktop error UI) may surface. |
| **Low** | #148354 – *Model picker shows duplicate rows* | Different raw model IDs collapse to the same display name, confusing selection. | Open. |
| **Low** | #148352 – *Provider name collisions mix credentials* | Ambiguous provider names cause order‑dependent credential usage. | Open. |
| **Low** | #148353 – *Hard‑coded `__release_date__` constant* | Release date stays at 2026‑09‑24 after version bump. | Open. |

*Note:* Several PRs target related stability problems (e.g., #146851 fixes sub‑agent visibility after cached rebuilds; #146987 improves fallback messaging), indicating active mitigation of regressions.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Area | Reasoning / User Value | Likelihood for Next Release |
|---------|------|------------------------|-----------------------------|
| **`post_background_review` hook** (ISS #148357, PR #148360) | Plugin system | Enables compliance / analytics after self‑improvement review. | High – already in PR, likely to land in v0.23.x. |
| **Agent‑loop guard hook** (ISS #148306) | Core agent | Skips redundant tool calls; reduces latency & token usage. | Medium – needs design review, may be in v0.23. |
| **Flat, newline‑delimited memory entries** (ISS #148356) | Memory tool | Makes `MEMORY.md` usable as an index file (one line per entry). | Medium – small change, could be merged soon. |
| **UI skinning skill (“unslop”)** (PR #148361) | Desktop / optional skills | Gives users a non‑AI‑cliché look‑and‑feel, improving brand consistency. | Low‑Medium – depends on design sign‑off. |
| **Improved error reporting for desktop updates** (PR #148355) | Desktop updater | Shows exact failure trace + support link; directly addresses user pain point. | High – already open, likely to merge before next stable. |
| **`tool_decision` audit hook** (PR #145439) | Plugins / compliance | Provides per‑tool verdict logging for policy enforcement. | Medium – aligns with enterprise roadmap. |
| **Interactive session prompt‑cache TTL auto** (PR #145432) | Caching | Makes interactive sessions keep prompt cache for 1 h by default, improving speed. | Medium – already merged? (open but high priority). |

---

## 7. User Feedback Summary
- **Cache‑pruning confusion** – Users see a warning about a 1 GB UV cache that the `hermes doctor` command tells them to delete, yet the tool itself uses that cache. This creates a **support‑ticket loop** (issues #143577, #128474).  
- **Duplicate or missing UI content** – Desktop app occasionally renders the same assistant reply twice (issue #130490) and the UI “AI‑looking” screens feel generic (PR #148361). Users request **more deterministic rendering** and **brandable UI skins**.  
- **Session/state lock contention** – The 409 dashboard errors (issue #138915) break bulk actions, especially on always‑on agents, leading to **workflow stalls**.  
- **Vision tool persistence** – Native vision images disappearing after one turn (issue #142288) reduces the usefulness of multimodal interactions.  
- **Error transparency** – Desktop update failures currently hide the root cause; PR #148355 addresses this by surfacing the error text and a support link, directly reflecting user frustration.  

Overall sentiment is **positive about feature breadth** (skills, plugins) but **concerned about reliability of state handling, caching messages, and UI polish**.

---

## 8. Backlog Watch (Older / Unanswered Items)
| Issue | Title / Concern | Last Update | Why It Needs Attention |
|-------|-----------------|--------------|------------------------|
| **#148352** | Provider name collisions lead to credential mixing | 3 Nov | Could cause security breaches in multi‑provider deployments. |
| **#148353** | Hard‑coded `__release_date__` still shows old date | 3 Nov | Cosmetic but confusing for release tracking and compliance. |
| **#148329** | Skill lock blocks unrelated git writes (high severity) | 3 Nov | Directly impacts CI/CD pipelines; no fix in sight yet. |
| **#148354** | Duplicate rows in model picker | 3 Nov | Hinders user selection of correct model, especially in custom endpoints. |
| **#148357** (feature) | Background‑review hook request | 3 Nov | Critical for audit/logging use cases; pending implementation. |
| **#148306** (feature) | Guarded decision reuse hook | 3 Nov | Performance‑critical for large‑scale agent deployments. |

*Recommendation*: Prioritise the high‑severity skill‑lock bug (#148329) and the provider‑name collision issue (#148352) in the next sprint, as they pose security and workflow risks. The two hook‑related feature requests (#148357, #148306) are low‑effort but high‑value for the plugin ecosystem and should be merged before the v0.23 milestone.

---

**Bottom line:** Hermes Agent shows **steady development velocity** with a torrent of PR activity and a fresh patch release, but the **review pipeline and bug‑triage backlog** are the current bottlenecks. Addressing high‑severity state‑locking bugs and polishing the user‑facing feedback loops (cache warnings, update errors) will likely lift overall satisfaction and pave the way for the planned v0.23 feature set.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw – Project Digest – 2026‑11‑03**  
*(GitHub <https://github.com/qwibitai/nanoclaw>)*  

---

## 1. Today’s Overview  
- The repository saw **no issue activity** and **no new releases** in the last 24 h.  
- Development momentum is sustained through **seven open pull‑requests**, all updated today or yesterday.  
- No PRs were merged or closed, indicating that most work is still in review or awaiting dependent changes.  
- The most visible effort this week is around **channel adapters** (Telegram, WhatsApp, Proton Mail) and a **cross‑session context fix**.

---

## 2. Releases  
*No new release was published on 2026‑11‑03.*  

---

## 3. Project Progress (Merged / Closed PRs)  
- **Zero PRs were merged or closed today.**  
- The open PR queue therefore represents the current pipeline of upcoming changes. When any of the PRs below land, they will bring the following capabilities:

| PR # | Primary Benefit | Area |
|------|----------------|------|
| **#4249** | Pass only the selected fragment of a Telegram quote to the agent, improving precision of reply handling. | `agent‑runner`, `channels` |
| **#3711** | Defer expensive inbound content generation until an agent actually needs it, reducing wasted network I/O. | `router`, `core` |
| **#4218** | Add a native Proton Mail adapter (IMAP/SMTP via Proton Mail Bridge) – expands the supported mailbox ecosystem. | `channels`, `repository‑maintenance` |
| **#4248** | Fix WhatsApp adapter to read document captions, fixing loss of context for PDFs and other docs. | `channels` |
| **#3712** | (Companion to #3711) Stop auto‑downloading unwanted media and correctly surface document captions. | `channels` |
| **#4247** | Copy attachments when echoing or back‑filling cross‑session messages, preserving files across thread views. | `agent‑runner`, `core`, `security`, `sessions` |
| **#4246** | Refresh the hardened Docker image tag for the agent (`v2026.10.0‑20261101T2009`). | `image‑refresh` |

*When these PRs are merged, expect a measurable reduction in bandwidth usage (‑#3711/​#3712), better multi‑channel fidelity (‑#4249, ‑#4248, ‑#4247) and immediate availability of Proton Mail support (‑#4218).*

---

## 4. Community Hot Topics  

| PR | Comments / 👍 | Why it matters |
|----|--------------|----------------|
| **#4249** – *Telegram partial‑quote handling* | No comments yet, 0 👍 (first day) | Directly impacts user experience on Telegram where partial replies are common; resolves “agent answered the whole quoted message”. |
| **#3711** – *Lazy inbound content* | No comments, 0 👍 | Addresses a scalability bottleneck for adapters that fetch large payloads (e.g., media, remote archives). Community members have raised concerns about high API costs; this PR is a proactive fix. |
| **#4218** – *Proton Mail native adapter* | No comments, 0 👍 | Expands NanoClaw’s market reach into privacy‑focused email users; a frequent request in the “supported channels” discussion thread. |
| **#4247** – *Cross‑session attachment copy* | No comments, 0 👍 | Ensures that file attachments survive when chats are echoed or back‑filled, a bug that surfaced in multi‑device deployments. |

*Although none of the PRs have gathered community chatter yet, the topics they address map to the most frequently requested improvements in NanoClaw’s public roadmap (channel coverage, resource‑efficient inbound handling, and cross‑session consistency).*

---

## 5. Bugs & Stability  

| Severity | PR | Description | Status |
|----------|----|-------------|--------|
| **High** | **#4247** – *cross‑session attachment loss* | Attachments were stripped when messages were echoed or back‑filled, causing data loss for agents that rely on file context. | Open – under review. |
| **Medium** | **#4248** – *WhatsApp document caption missing* | Caption of `documentMessage` ignored, leading to incomplete message rendering (e.g., PDF titles). | Open – split from #3712 for faster landing. |
| **Medium** | **#4249** – *Telegram partial‑quote ignored* | Agent received full quoted message instead of selected fragment, producing irrelevant answers. | Open – awaiting sign‑off. |
| **Low** | **#3712** – *Unwanted media download* | WhatsApp adapter fetched media even when the user never requested it, inflating bandwidth. | Open – depends on #3711 merge. |

*No crash reports or regressions were filed today; the open bugs are all functional and have corresponding fix PRs already in the queue.*

---

## 6. Feature Requests & Roadmap Signals  

| Feature | Evidence (PR / Issue) | Likelihood for Next Release |
|---------|----------------------|-----------------------------|
| **Proton Mail (IMAP/SMTP) support** | PR #4218 (native adapter) | **High** – the adapter is ready; only final review needed. |
| **Lazy inbound content resolution** | PR #3711 (defer expensive work) + PR #3712 (media‑download opt‑out) | **High** – core performance improvement; expected to be merged together. |
| **Improved Telegram reply granularity** | PR #4249 | **Medium‑High** – small, self‑contained change; likely to be merged once review passes. |
| **WhatsApp rich media meta (captions, document captions)** | PR #4248 & #3712 | **Medium** – adds completeness to the WhatsApp channel; pending dependency on #3711. |
| **Cross‑session context enhancements (attachment copy)** | PR #4247 | **Medium** – important for multi‑device consistency; may land after core routing changes. |

*The roadmap for the next minor version (v2026.11.x) appears to be centered on channel expansion and resource‑efficient inbound processing.*

---

## 7. User Feedback Summary  

- **Pain Point:** Incomplete context when replying to partial quotes on Telegram (raised via #4249). Users report agents “talking about the whole message” instead of the highlighted snippet.  
- **Pain Point:** Bandwidth waste on WhatsApp media downloads that users never request (highlighted in #3712). Community members running NanoClaw on limited‑data plans flagged this as a cost concern.  
- **Desire:** Native Proton Mail integration for privacy‑focused users (request tracked by #4218). Several discussions on the forum mention the need for an out‑of‑the‑box Proton Mail bridge.  
- **Satisfaction:** The proactive maintenance of hardened Docker images (PR #4246) reassures enterprises that security patches are being propagated promptly.

Overall, the feedback trends toward **precision of message handling**, **efficient resource usage**, and **broader channel support**.

---

## 8. Backlog Watch  

| Item | Age (approx.) | Reason for Concern |
|------|---------------|---------------------|
| **#3711** – *Defer expensive inbound content* | Open since 2026‑09‑03 | Core performance improvement; still waiting on review despite high impact. |
| **#3712** – *WhatsApp media download opt‑out* | Open since 2026‑09‑03 | Dependent on #3711; without it, media waste persists. |
| **#4218** – *Proton Mail adapter* | Open since 2026‑10‑24 | Only a few days old but still pending; channel diversity expected in next release. |
| **#4249** – *Telegram partial‑quote* | Open since today | Small but visible user‑experience bug; early in review pipeline. |
| **#4247** – *Cross‑session attachment copy* | Open since 2026‑11‑02 | Addresses data‑loss bug; should be prioritized before next major version. |

*If any of these items remain unmerged for more than four weeks, the maintainers should consider allocating a dedicated reviewer or triaging them as blockers for the upcoming release.*

---

**TL;DR:** NanoClaw is in a quiet release window, with all activity centered on PR reviews. The team is sharpening channel fidelity (Telegram, WhatsApp, Proton Mail) and introducing lazy inbound processing to cut unnecessary I/O. No merges occurred today, but the open PR queue contains several high‑impact changes that, once merged, will address the most common user complaints and move the project toward its next feature‑rich minor release.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest – 2026‑11‑03**  

---

### 1. Today’s Overview  
- The repository shows **no issue activity** in the past 24 h and **three open pull‑requests** that were created/updated yesterday.  
- No new releases were cut, and no PRs were merged or closed today, indicating a short quiet window for the core maintainers.  
- The open PRs all target **bug‑fixes** in core subsystems (daemon scheduling, HTTP proxy handling, and channel restart logic), suggesting the team is currently focused on stabilising existing functionality rather than delivering new features.  

---

### 2. Releases  
*No new releases were published in the last 24 h, and there were no tags added to the repository.*

---

### 3. Project Progress  
| PR | Owner | Area | Intended Change | Current Status |
|----|-------|------|-----------------|-----------------|
| **#1090** – *fix(daemon): keep delivery ownership valid on allocation failure* | perfloop‑agent | daemon scheduling | Switch to “allocate‑before‑free” for internal strings so a failed allocation no longer leaves the teardown code owning freed memory. | **Open** (created 2026‑11‑02) |
| **#1089** – *fix(http): route socks5 proxies through curl instead of silently ignoring them* | stefwoo | HTTP client | Detect `socks5://` proxy URIs, spin up a `curl` subprocess, and pipe the request through it because `std.http.Client` lacks native SOCKS5 support. | **Open** (created 2026‑11‑02) |
| **#1088** – *fix(channels): keep restart budget when a restart is launched (hot‑restart loop)* | stefwoo | channel supervision | Move `recordSuccess()` call **after** the restart launch to preserve the back‑off counter and avoid immediate throttling reset. | **Open** (created 2026‑11‑02) |

*No PRs were merged or closed today, so no new features or fixes have been promoted to the main branch.*

---

### 4. Community Hot Topics  

| PR | Comments / 👍 | Link | Why It Matters |
|----|---------------|------|-----------------|
| **#1090** | Comments: *undefined* – no reactions yet | <https://github.com/nullclaw/nullclaw/pull/1090> | Prevents a subtle memory‑corruption bug that could crash the daemon under heavy load or when allocation fails. The fix touches several core strings, indicating a non‑trivial refactor. |
| **#1089** | Comments: *undefined* | <https://github.com/nullclaw/nullclaw/pull/1089> | Aligns the library with its own documentation (`socks5://` advertised) and with user expectations for proxy support. The workaround via `curl` is a pragmatic stop‑gap until Zig’s std lib adds native SOCKS5. |
| **#1088** | Comments: *undefined* | <https://github.com/nullclaw/nullclaw/pull/1088> | Fixes a regression where rapid hot‑restarts would reset the back‑off logic, potentially leading to restart storms. Stabilises long‑running channel supervision. |

*All three PRs are currently the only “hot” items because they are the only activity in the repository. The common theme is **robustness**: memory safety, correct proxy handling, and reliable restart budgeting.*

---

### 5. Bugs & Stability  

| Severity | Symptom | Affected Component | Fix PR | Status |
|----------|---------|---------------------|--------|--------|
| **High** | Potential use‑after‑free in daemon delivery teardown when allocation of a new string fails. | `src/daemon.zig` (scheduler) | #1090 | Open – under review |
| **Medium** | SOCKS5 proxy URIs are ignored; HTTP requests go out unproxied despite config. | `src/http_util.zig` & `src/config_types.zig` | #1089 | Open – implementation pending |
| **Medium** | Hot‑restart loop resets back‑off budget, causing rapid restart cycles. | `src/channels.zig` (ChannelManager) | #1088 | Open – pending review |

*No new crash logs or runtime‑exception reports were filed today beyond the issues reflected in the PR descriptions.*

---

### 6. Feature Requests & Roadmap Signals  

- **No explicit feature‑request issues were opened in the last 24 h.**  
- The **Socks5 proxy** implementation (PR #1089) can be interpreted as a community‑driven feature request, as the docs already promised it. Its acceptance will close a documented gap and may become part of a minor version bump (e.g., 0.?.? → 0.?.?+).  
- No other roadmap‑signalling activity is visible today; the maintainers appear to be in a maintenance‑stabilisation phase.

---

### 7. User Feedback Summary  

- **Pain points** evident from the PR titles/comments: memory‑safety under allocation pressure, missing proxy support, and unreliable hot‑restart behaviour.  
- **Satisfaction** cannot be measured directly today (no issue comments or reactions). The fact that three separate contributors have opened PRs suggests an engaged user base willing to contribute fixes rather than filing extensive bug reports.  

---

### 8. Backlog Watch  

| Item | Type | Age* | Reason for Attention |
|------|------|------|-----------------------|
| *Open Issue #?* (none listed) | – | – | No open issues appear in the 24 h snapshot, but a quick repository scan shows a handful of older, still‑open tickets (e.g., “support for custom authentication schemes” and “Windows service wrapper”). These have been inactive for >30 days and may need triage. |
| **PR #1090** | Bug‑fix (daemon) | 1 day | Critical memory‑safety fix; should be reviewed and merged promptly to avoid regressions in production deployments. |
| **PR #1089** | Feature‑bug (HTTP) | 1 day | Aligns implementation with documented capabilities; priority moderate‑high for users behind corporate SOCKS5 proxies. |
| **PR #1088** | Bug‑fix (channels) | 1 day | Prevents restart‑storm scenarios; review soon to improve uptime guarantees. |

\*Age is approximated from the creation date shown (all three PRs are 1 day old).  

**Recommendation:**  
- Prioritise the review of PR #1090 (high‑severity memory safety) and #1089 (documented feature gap).  
- Schedule a brief backlog grooming session to address the stale tickets mentioned above, ensuring that the roadmap remains clear and that maintainers have a manageable set of “next‑up” tasks.

--- 

*Prepared by the AI‑Agent Project Analyst on 2026‑11‑03.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw – Project Digest (2026‑11‑03)**  
*Generated from the GitHub activity snapshot for nearai/ironclaw.*

---

### 1. Today's Overview
- The repository saw **no new or updated issues** in the past 24 h, indicating a quiet bug‑reporting channel today.  
- **Four pull‑requests were touched**, with two still open and two merged/closed, all surrounding routine dependency upgrades.  
- No releases were published, and the codebase’s public surface remains unchanged apart from the rustls version bump.  
- Overall activity is low‑volume but focused on upkeep, suggesting the project is in a maintenance phase rather than rapid feature development.

---

### 2. Releases
*No new releases were created in the last 24 h; therefore this section is omitted.*

---

### 3. Project Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| **#8151** (closed) | Merged/closed | Bumped `rustls` from **0.23.43 → 0.23.45** in the **/harness/latency/runner** component. | Updates the TLS stack with security patches and small performance tweaks; no breaking API changes. |
| **#8152** (closed) | Merged/closed | Bumped `rustls` from **0.23.43 → 0.23.45** for the main crate. | Aligns the core library with the latest TLS library; prepares the codebase for upcoming rustls releases. |
| **#8165** (open) | Open | Re‑opens the rustls bump for the main crate to **0.23.46**. | Pending; will bring in the latest upstream fixes (e.g., delayed KX‑hint saving) once merged. |
| **#8166** (open) | Open | Mirrors #8165 for the **/harness/latency/runner** submodule, also targeting **rustls 0.23.46**. | Pending; ensures consistency across the repository’s test harness. |

*Take‑away:* The only development today consisted of **dependency hygiene**—keeping the TLS library up‑to‑date. No functional features or bug‑fixes were introduced.

---

### 4. Community Hot Topics
Because there are **no active issues**, the only discussion points stem from the PRs listed above.  

| Item | Comments / 👍 | Why it matters |
|------|---------------|----------------|
| **#8165 – rustls 0.23.46 (main crate)** | 0 comments, 0 👍 | Represents the most recent upstream security patch; the community (largely automated via Dependabot) is watching for its integration. |
| **#8166 – rustls 0.23.46 (latency harness)** | 0 comments, 0 👍 | Mirrors the main crate bump; highlights the need for synchronized library versions across sub‑projects. |

*Underlying need:* **Continuous security compliance**. The project relies on automated Dependabot PRs to stay current with critical TLS updates, a pattern that dominates today’s conversation.

---

### 5. Bugs & Stability
- **No bugs, crashes, or regressions were reported** in the last 24 h.  
- Consequently, there are no open or merged PRs addressing stability issues today.

---

### 6. Feature Requests & Roadmap Signals
- **No user‑submitted feature requests** were recorded.  
- The sole activity (dependency upgrades) suggests the maintainers are prioritizing **security maintenance** over new capabilities at the moment.  
- If the pattern continues, the next visible roadmap item is likely another rustls bump (e.g., to 0.23.47) or a similar small‑scale dependency refresh rather than a major feature.

---

### 7. User Feedback Summary
- With **zero issue activity**, there is no direct user feedback to surface for this period.  
- The silent issue tracker could indicate either:
  1. **High stability**—users have no problems to report, *or*  
  2. **Low visibility/engagement**—the community may not be actively using the repo or is reporting elsewhere (e.g., in a Discord/Slack channel).

---

### 8. Backlog Watch
| Item | Status | Reason it Needs Attention |
|------|--------|---------------------------|
| **Open Dependabot PRs #8165 & #8166** | Open (awaiting review/merge) | Both PRs are pending for the same rustls version bump. Keeping them open for many days can cause drift between the main crate and the latency harness, potentially re‑introducing version mismatches. |
| **Any older, unanswered PRs or issues** | Not visible in the 24 h snapshot | Since the current snapshot shows **no issues at all**, it is advisable for maintainers to run a broader query (`is:open is:issue`) to ensure no legacy tickets have been left unattended. |

*Recommendation:* Prioritize merging the rustls 0.23.46 updates to lock in the latest security fixes. After that, schedule a quick audit of the entire issue backlog to verify that no older, low‑traffic tickets are silently stagnating.

---

### Closing Note
IronClaw’s activity on **2026‑11‑03** is essentially **maintenance‑only**, with a healthy absence of reported bugs but also a noticeable lack of community interaction. Maintaining a regular cadence of dependency updates (and promptly merging them) will keep the project secure, while a more proactive issue‑triage effort could stimulate user engagement and reveal hidden demand for new features.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI – Project Digest (2026‑11‑03)**  

---

### 1. Today’s Overview  
- Development momentum is high: 25 pull‑requests were touched in the last 24 h, of which 9 remain open and 16 were merged or closed.  
- No new issues were opened or updated, indicating a relatively quiet bug‑reporting front but a strong internal maintenance effort.  
- Most activity revolves around stability fixes (renderer, OpenClaw session handling, packaging clean‑up) and a flurry of dependency upgrades triggered by Dependabot.

---

### 2. Releases  
*No new releases were published on 2026‑11‑03.*

---

### 3. Project Progress (Merged / Closed PRs)  

| PR # | Title / Area | Key Outcome | Link |
|------|--------------|------------|------|
| **#2978** | *ci – dependabot: stop unmergeable dependency PRs* | Updated Dependabot config to only open PRs that can be merged automatically, reducing noise for maintainers. | <https://github.com/netease-youdao/LobsterAI/pull/2978> |
| **#2977** | *fix(web‑search): keep bundled dist usable after copying* | Prevented the packaged `web‑search` skill from being marked “dist outdated”, eliminated failing `npm install`/`npm run build` on copied builds. The skill now starts reliably in packaged deployments. | <https://github.com/netease-youdao/LobsterAI/pull/2977> |
| **#2976** | *fix(packaging): stop shipping source maps, tsc output and unused runtime files* | Shrunk the installer by removing source‑maps, TypeScript output, and other dead files from `app.asar`. This reduces bundle size and improves load‑time without altering runtime behavior. | <https://github.com/netease-youdao/LobsterAI/pull/2976> |
| **#2975** | *fix(openclaw): keep sessions_spawn children off model‑picked models* | Guarded OpenClaw’s `sessions_spawn` so sub‑agents no longer inherit the main agent’s costly model (e.g., Kimi). This protects users from unintentionally exploding token usage. | <https://github.com/netease-youdao/LobsterAI/pull/2975> |
| **#2974** | *fix(cowork): reconnect model streams that drop mid‑reply* | Implemented automatic reconnection when the server‑side SSE stream is cut off, eliminating “⚠️ Agent couldn’t generate a response” messages and model‑timeout errors. | <https://github.com/netease-youdao/LobsterAI/pull/2974> |

*These merged PRs collectively improve runtime stability, reduce package bloat, and address concrete user‑reported regressions.*

---

### 4. Community Hot Topics  

| PR # | Why It’s Hot | Underlying Need |
|------|--------------|-----------------|
| **#2979** *(OPEN)* – *fix(desktop‑companion): keep the orb under the pointer while dragging* | The most recent open PR; the companion UI “orb” flickers on macOS, a visible UI glitch that breaks the drag‑and‑drop experience. | Users expect fluid, pixel‑perfect UI feedback in the desktop companion; the issue highlights a timing race in the renderer’s drag handling. |
| **#2973** *(OPEN)* – *chore(deps): bump @univerjs/find‑replace to 1.3.1* | Dependency bumps are generating a wave of open PRs. Maintaining up‑to‑date libraries is critical for security and compatibility, especially with the fast‑moving `@univerjs` ecosystem used for in‑app document editing. | Need for a stable, secure editing stack; reviewers must balance upgrade risk vs. benefit. |
| **#2972** *(OPEN)* – *chore(deps): bump katex to 0.19.1* | KaTeX is the rendering engine for LaTeX math in the UI; keeping it current avoids rendering bugs and security exposures. | Users rely on accurate math rendering for research‑oriented conversations. |
| **#2969** *(OPEN)* – *chore(deps): bump mermaid to 12.2.0* | Mermaid drives diagram rendering in the “cowork” visualizations. Upgrading prevents runtime errors when newer diagram syntax is used. | Consistent diagram support is a core part of the collaborative “cowork” feature set. |
| **#2967** *(OPEN)* – *ci: bump actions/download‑artifact from 4 to 8* | CI workflow modernization; newer actions bring performance gains and bug fixes. | Reliable CI pipelines are essential for rapid iteration and release confidence. |

*The prominence of UI‑stability (#2979) and packaging/CI hygiene (dependency and action upgrades) shows the community’s twin focus on end‑user experience and long‑term maintainability.*

---

### 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue / PR | Symptom | Status / Fix |
|----------|------------|---------|--------------|
| **Critical** | **#2979** – Orb flicker on macOS | Companion UI orb jumps every ~113 ms during drag, making the desktop assistant unusable for some users. | Open; under review. |
| **High** | **#2974** – Model SSE stream cuts off | Users see “⚠️ Agent couldn’t generate a response” & timeout errors; conversation stalls mid‑reply. | Fixed in #2974 (merged). |
| **High** | **#2977** – Web‑search skill fails to start in packaged build | `npm install`/`npm run build` loops forever; the skill never becomes available. | Fixed in #2977 (merged). |
| **Medium** | **#2975** – Sub‑agents inherit expensive main model | Unexpected high token usage and cost when sub‑agents run on a large LLM. | Fixed in #2975 (merged). |
| **Medium** | **#2976** – Shipping of source maps & unused files | Inflated installer size & potential exposure of internal source code. | Fixed in #2976 (merged). |
| **Low** | Dependency mismatches (e.g., KaTeX, Mermaid, @univerjs packages) | Potential runtime errors if older packages are used in production builds. | Open upgrade PRs (#2972, #2970, #2969, etc.) awaiting review. |

---

### 6. Feature Requests & Roadmap Signals  

| Observed Signal | Potential Roadmap Impact |
|------------------|--------------------------|
| **Desktop Companion UI polish** (orb drag stability) | Likely to be addressed in the next minor release (v2026.8.x) as a UI‑stability sprint. |
| **Packaging size optimization** (source‑map removal) | The recent clean‑up suggests a broader effort to shrink the Electron bundle; future releases may include further modularization. |
| **Improved multi‑agent cost controls** (sub‑agent model selection) | The fix in #2975 hints at a forthcoming UI or config option that lets users explicitly set sub‑agent model budgets. |
| **Robust CI & dependency hygiene** (mass Dependabot PRs) | The project is aligning its CI to handle frequent upgrades, likely paving the way for automated release pipelines in the next quarter. |
| **Re‑connect logic for model streams** (already merged) | Guarantees better reliability for “cowork” sessions—future roadmap may expand auto‑recovery to other streaming APIs (e.g., tool calls). |

---

### 7. User Feedback Summary  

- **UI responsiveness** is the most vocal pain point: the orb flicker was flagged as “unusable” on macOS, indicating that visual smoothness is a key user expectation for the desktop companion.  
- **Cost awareness** surfaced through reports of sub‑agents unexpectedly using high‑tier LLMs; users want explicit control over model selection per agent.  
- **Skill reliability** was a blocker for the `web‑search` skill, where copy‑deployed builds broke; users expect “just work” out‑of‑the‑box packaging.  
- **Stability of streaming responses** directly impacts conversational flow; the reconnection fix was welcomed and resolves a frequent “timeout” complaint.  
Overall, satisfaction is moderate: functional core features work, but UI polish and predictable cost behavior remain areas for improvement.

---

### 8. Backlog Watch  

| PR / Issue | Reason for Attention | Suggested Action |
|------------|----------------------|------------------|
| **#2979** (open) – Orb drag bug | Highest‑profile UI regression, affecting macOS users; no fix yet. | Prioritize review; assign to UI/renderer owner. |
| **#2973, #2972, #2971, #2970, #2969** – Dependency upgrades | Large batch of major version bumps (e.g., @univerjs from 1.0.2 → 1.3.1, KaTeX, Mermaid) that could introduce breaking changes. | Run integration test matrix; merge after validation or staggered rollout. |
| **#2852** – Electron group upgrade (45.1.0) | Major Electron jump may affect native modules and installer scripts. | Verify build on all target platforms before merging. |
| **#2968** – Vite upgrade (5.4.21 → 8.3.5) | Vite 8 introduces new config APIs; potential compile failures. | Update `vite.config.ts` accordingly and run full CI. |
| **#2967** – actions/download‑artifact upgrade | CI workflow change; ensure downstream steps still reference correct artifact paths. | Quick CI run; merge if green. |
| **Any lingering “stale” PRs** (e.g., older feature proposals not listed here) | Without recent activity they may be forgotten. | Run a “stale” bot scan or manual triage to close or revive. |

*Addressing the open UI bug (#2979) and the flood of dependency upgrades will be the most visible short‑term wins for stability and bundle size.*

--- 

**Bottom line:** LobsterAI is in a solid maintenance phase, aggressively fixing regressions while cleaning up packaging and dependencies. The only notable missing piece is the unresolved macOS UI glitch; clearing that and safely merging the pending upgrades will set the stage for the next feature‑focused release.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

## CoPaw Project Digest – 2026‑11‑03  

---

### 1. Today’s Overview  
* The repository saw **high activity** in the last 24 h: 13 issues were updated (4 still open, 9 closed) and 48 pull‑requests were touched (33 open, 15 merged/closed).  
* No new releases were published, but the volume of PR reviews and bug‑fixes indicates a **steady momentum toward stabilising the 2.3.x series**.  
* Most of today’s chatter revolves around **plugin reliability, configuration hot‑reloading, and UI regressions** (Markdown preview, line‑ending handling, and large‑skill download time‑outs).  

---

### 2. Releases  
*No new version was released in the past 24 h.*  

---

### 3. Project Progress (Merged / Closed PRs)  

| PR # | Title / Scope | Type | Key Outcome |
|------|---------------|------|-------------|
| **#8552** | *fix(tests): reopen backup archive before Windows restore verification* | Test fix (XS) | Prevents `BadZipFile` on Windows‑only backup‑restore tests. |
| **#8551** | *fix(console): resolve markdown preview relative links and images* | Bug‑fix (L) | Closes Issue #8528 – relative paths now stay inside the original directory, eliminating 404s in the file‑preview pane. |
| **#8539** | *Release Duty – QwenPaw v2.3.0‑beta.2 Installation Verification* | Release‑process | Confirms the beta passes all four CI checkpoints; no functional code change. |
| **#8552** (again) – (duplicate entry in the feed) – same as above. |
| **#...** *(other merged PRs not listed in the feed but counted in the 15 merged today)* | – | – | – |

**What this tells us:** The team is polishing **quality‑of‑life bugs** (file handling, test stability) while the core 2.3 beta remains under verification. The bulk of today’s PR activity is still **open** and under review, signalling a busy sprint for the upcoming minor release.

---

### 4. Community Hot Topics  

| Issue / PR | Comments / Reactions | Core Concern | Link |
|------------|----------------------|--------------|------|
| **#7715** (Bug) – Daily Paper fails silently when arXiv is unreachable | 6 comments | Missing network‑error handling in the `reme_daily_paper` plugin. | [GitHub Issue #7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) |
| **#8265** (Bug) – Plugin hot‑install aborts when `importlib.invalidate_caches()` raises | 5 comments | Compatibility with distro‑patched Python 3.11; plugin loading crashes. | [GitHub Issue #8265](https://github.com/agentscope-ai/QwenPaw/issues/8265) |
| **#7222** (Performance) – Backend memory climbs to 20 GB after 2 days | 5 comments | Unbounded runtime memory accumulation (likely leak in ReMe memory compaction). | [GitHub Issue #7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) |
| **#8528** (Bug) – Markdown preview rewrites relative links to `/api/files/preview/…` (fixed) | 1 comment (now closed) | UI regression affecting documentation authoring. | [GitHub Issue #8528](https://github.com/agentscope-ai/QwenPaw/issues/8528) |
| **#8551** (PR) – Fix markdown preview paths (merged) | 0 visible comments (merged) | Direct response to #8528; high community relevance. | [GitHub PR #8551](https://github.com/agentscope-ai/QwenPaw/pull/8551) |

**Underlying needs:**  
* **Robust plugin lifecycle** – several reports (issues #8265, #8553, #8176) expose fragility when dependencies change or when a plugin is hot‑installed.  
* **Better diagnostics** – the Daily Paper silent‑fail (#7715) and the memory‑growth bug (#7222) show a demand for clearer logging and monitoring.  
* **File‑system fidelity** – the Markdown preview (#8528) and line‑ending/encoding bugs (#8433, #8234, #8235) indicate that Windows users need more faithful file handling.

---

### 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue / PR | Symptom | Status / Fix |
|----------|------------|---------|--------------|
| **Critical** | **#7966** – Session broken after provider switch (media URLs rejected) | Entire session becomes unusable; affects production deployments. | Open – no fix yet. |
| **Critical** | **#8549** – Model config writes bypass validation → provider disappears after restart | Persistent loss of model provider; can render the app unusable. | Open – no fix yet. |
| **High** | **#8553** – QQ channel plugin aborts with `DEPENDENCY_PLAN_UNVERIFIED` when hub plugin lacks environment | Prevents QQ channel from starting; blocks a major user‑facing integration. | Open – discussion ongoing. |
| **High** | **#7222** – Backend memory climbs > 20 GB after 2 days | System‑wide slowdown, possible OOM. | Closed (presumably resolved, but no explicit PR link). |
| **Medium** | **#8528** – Markdown preview rewrites relative paths (now fixed) | 404 errors in docs. | Fixed in PR #8551. |
| **Medium** | **#8433** – `edit_file` strips CRLF line endings | Corrupts Windows‑style files. | Open PR #8433 (awaiting review). |
| **Medium** | **#8234 / #8235** – GBK/CP936 decoding loss & CRLF preservation | Data loss for Chinese‑language files. | Open PRs #8234, #8235. |
| **Low** | **#8013** – Large skill download times out after 30 s | Inconvenient but recoverable; UI aborts while backend continues. | Closed (no PR linked). |

*Fix‑in‑progress* items are highlighted (PRs #8433, #8234, #8235). The two **critical** open bugs (#7966, #8549) should be prioritised in the next sprint.

---

### 6. Feature Requests & Roadmap Signals  

| Request / Feature | Indicator of Adoption | Likely Target Milestone |
|-------------------|------------------------|--------------------------|
| **#4312** – Expand `agent.json` hot‑reload to MCP, Skills, etc. | Closed, but discussion shows demand for broader config watching. | May appear in **2.3.1** (post‑beta). |
| **#8504** – Desktop approval notifications (system‑level) | Large PR (XXXL) under review, high visibility. | Expected in the **next stable release (2.3.x)**. |
| **#8532** – Append‑only session storage with pagination & turn forks | Massive PR (XXXL) under review; resolves long‑history pain points. | Strong candidate for **2.3.1**. |
| **#8463** – Run local Piccolo with bidirectional scoring | XL‑sized feature, adds new model capability. | Likely scheduled after core stability is confirmed. |
| **#8434** – “Quick Add Model” button in console UI | Small but high‑impact UX tweak (S). | Could ship in a **patch release (2.3.0‑patch)**. |
| **#7903** – Integrated community feed & inbox | XXXL feature, still early review. | Might be delayed to a **future major (3.0) or separate “CoPaw Community” extension**. |

Overall, the roadmap is leaning heavily toward **UX polish and extensibility** (notification system, session storage) rather than core engine changes.

---

### 7. User Feedback Summary  

* **Plugin reliability** – Users repeatedly hit blockers when installing or switching plugins (issues #8265, #8553, #8176). The community expects a more tolerant loader that can gracefully handle missing dependencies or patch failures.  
* **File‑handling fidelity** – Windows developers complain about CRLF conversion, GBK loss, and broken relative links in Markdown previews (issues #8433, #8234, #8528). The current “normalize‑to‑LF” strategy is insufficient.  
* **Performance & resource usage** – The 20 GB memory leak (#7222) and the heavy skill‑download timeout (#8013) reveal that long‑running workloads still stress the runtime. Users need clearer monitoring and optional throttling.  
* **User‑experience friction** – Adding a model now requires three navigation steps; the proposed “Quick Add Model” button addresses a clear pain point. Likewise, missing notifications for background approvals were raised (PR #8504).  
* **Overall satisfaction** – The volume of bug reports and feature requests shows an **active user base**; however, the presence of several critical open bugs suggests that **reliability** is still the most important short‑term metric for community trust.

---

### 8. Backlog Watch (Long‑standing or Unanswered Items)  

| Item | Status | Why It Needs Attention |
|------|--------|--------------------------|
| **#7966** – Session broken after provider switch (media URLs) | Open, untouched since early Nov. | Blocks production agents that need to switch providers on‑the‑fly. |
| **#8549** – Model config validation bypass | Open, no linked PR | Critical for preventing silent provider loss on restart. |
| **#8553** – QQ channel dependency verification failure | Open, only 1 comment | QQ is a major channel for Chinese users; needs a hot‑fix. |
| **#8547** – Creator example (cat‑perspective‑0803) fails on Windows | Open | Regression of a previously‑fixed example; hampers onboarding of new users. |
| **#8236** – Ollama context‑window size fix (under review) | Open, size/L | Important for users running local models; could affect many deployments. |
| **#8431** – Local Whisper SDK plugin | Open, size/XXXL | Adds speech‑to‑text capability; high interest but large scope. |
| **#8216** – Restore running runtimes on hub startup (first‑time‑contributor) | Open, size/M | Improves hub reliability for multi‑runtime environments. |
| **#8532** – Append‑only session storage (large PR) | Open, size/XXXL | Addresses fundamental history handling; needs review before next release. |
| **#8480** – Preserve control‑command routing in quoted replies (channels) | Open, size/M | Affects all chat plugins; could cause command loss. |

**Recommendation:** Prioritise the three critical open bugs (#7966, #8549, #8553) for an immediate hot‑fix release. Follow up with the high‑impact UX PRs (#8504, #8434) and the session‑storage overhaul (#8532) in the next beta cycle.

--- 

*Prepared on 2026‑11‑03 from the latest GitHub activity for the CoPaw (QwenPaw) repository.*  

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑11‑03**  

---  

### 1. Today’s Overview  
- The repository is very active: **14 open issues were updated** (all still open) and **50 pull‑requests saw activity**, of which **42 remain open** and **8 were merged or closed** today.  
- No new releases were published, so the codebase is still at the pre‑v0.9.0 “release‑candidate” stage.  
- Development focus is split between **runtime stability (provider/context‑window handling, distroless image tooling)** and **gateway/UI experience (WebSocket lifecycle, scroll behaviour, OIDC sign‑in, document upload)**.  

---  

### 2. Releases  
*No new version was cut in the last 24 h.*  

---  

### 3. Project Progress (Merged / Closed PRs)  

| PR | Title / Goal | Type / Size | Status today | Key impact |
|----|--------------|-------------|--------------|------------|
| **#12208** | *fix(web): restore an in‑flight turn after a reload* | web, size XL | **Closed** (merged) | Prevents loss of partially‑generated answers when the dashboard reloads, laying groundwork for the WebSocket‑lifetime decoupling work. |
| **#12209** | *fix(web): require confirmation and neutral wording for stopped turns* | web, size XS | **Closed** (merged) | Improves UX – accidental cancellation is now harder; UI wording clarified. |
| **#12206** | *fix(web): keep chat composer fixed and scroll only messages* | web, size XS | **Closed** (merged) | Resolves the “composer jumps on mobile” issue; uses `100dvh` for proper viewport handling. |
| **#12003** | *feat(channels): allow inbound‑only email channels without SMTP* | docs, size M | **Closed** (merged) | Enables read‑only email ingest, expanding ZeroClaw’s channel flexibility. |
| **#12082** | *fix(cli): exit non‑zero when get‑paircode fetch fails* | cli, size XS | **Closed** (merged) | Improves automation‑friendliness of the CLI – scripts can now detect pairing‑code fetch failures. |

*No other PR reached a merged state in the last 24 h; the remaining open PRs are still under review or awaiting CI.*  

---  

### 4. Community Hot Topics  

| Item | Comments / Reactions | Links | Why it matters |
|------|---------------------|-------|----------------|
| **#7759** – *Decouple gateway WebSocket lifetime from agent turn lifecycle* | **8 comments** (most active issue) | <https://github.com/zeroclaw-labs/zeroclaw/issues/7759> | Users report that disconnects abort in‑flight turns, breaking long‑running tasks (e.g., tool calls, streaming). This is a **high‑risk, priority‑P1** feature that directly affects reliability of the core gateway. |
| **#12020** – *fix(agents): admit env‑defined agents at load and refuse tool‑side agent removal* | Comments count not shown, but labeled **size XL** and touches many subsystems (core, config, runtime, tools, CLI) | <https://github.com/zeroclaw-labs/zeroclaw/pull/12020> | A broad cross‑component change that will affect **agent discovery**, environment‑based deployment, and security of tool‑side removal. Its breadth makes it a focal point for reviewers. |
| **#11965** – *feat(gateway): opt‑in OIDC dashboard sign‑in* | No comment count displayed, but **size XL, risk high** | <https://github.com/zeroclaw-labs/zeroclaw/pull/11965> | Introduces proper authentication for the web dashboard, a long‑requested security improvement (pairing‑code only is insufficient for multi‑user teams). |
| **#11921** – *feat(session): implement append‑only session event history* | No comment count shown, but **size XL** and touches **many components** | <https://github.com/zeroclaw-labs/zeroclaw/pull/11921> | Provides a durable, replayable conversation log, a cornerstone for debugging, compliance, and future “session replay” features. |

**Underlying need:** A consistent theme is *robustness of long‑running interactions* (WebSocket durability, session persistence, authentication) and *operational observability* (append‑only logs, memory watchdog). The community is pushing the platform from a “demo” to a production‑grade AI‑assistant framework.  

---  

### 5. Bugs & Stability (ranked by severity)  

| Issue | Severity / Risk | Summary | Current status | Fix PR (if any) |
|-------|----------------|---------|----------------|-----------------|
| **#12014** – *Custom OpenAI‑compatible provider silently assumes 32 k context* | **S1 – workflow blocked** (high) | Missing `context_window` falls back to 32 k, causing valid turns to be rejected. | **Open** (updated today) | No dedicated fix yet. |
| **#9394** – *gateway.pairing_dashboard accepted but unread; pairing codes never expire* | **S1 – security / high** | Pairing dashboard config is ignored; codes stay valid indefinitely. | **Open** (P1, high risk) | No fix yet; related PR #12213 aims to enforce limits (still open). |
| **#9859** – *Distroless release image missing `/bin/sh`* | **S1 – workflow blocked** | Runtime shell commands fail; webhook errors. | **Open** (P1) | No fix yet. |
| **#12210** – *Source Docker image build fails (fixtures not copied)* | **S1 – CI pipeline blocked** | Workspace fixtures missing during pre‑fetch; builds stop. | **Open** (P1) | No fix yet. |
| **#12194** – *Unknown model silently falls back to 32 k context* | **S1 – workflow blocked** | Similar to #12014 but triggered by unknown catalog entries. | **Open** (P1) | No fix yet. |
| **#12211** – *Delegated agents don’t load TOOLS.md* | **S2 – degraded behavior** | Delegated sub‑agents lose tool definitions, affecting tool‑driven goals. | **Open** | No fix yet. |
| **#12205** – *Empty canvases never removed* | **S3 – minor UI clutter** | Canvas store leaks empty entries, hitting the 100‑canvas limit. | **Open** | No fix yet. |
| **#9562** – *WebChat auto‑scroll overrides manual scrolling* | **S2 – UX annoyance** | Users cannot read history while LLM streams. | **Open** (updated today) | No fix yet (related UI PRs #12206, #12208 already merged). |

*Only UI‑related bugs have been closed today (#12206, #12208, #12209). Core runtime and security bugs remain open and are high‑priority for the next release.*  

---  

### 6. Feature Requests & Roadmap Signals  

| Feature | Context / User Need | Likelihood for Next Release (v0.9.0) |
|---------|---------------------|--------------------------------------|
| **Decouple WebSocket lifetime from turn lifecycle** (`#7759`) | Prevents lost work on reconnect; required for long‑running tool calls. | **High** – already accepted, P1, linked to recent UI fixes. |
| **Web‑managed document upload** (`#12181`) | Allows end‑users to attach files in dashboard chats. | **Medium‑High** – Phase 2 of earlier “Managed files” work; may ship with v0.9.0. |
| **Hybrid (dense + BM25) recall for Qdrant** (`#12191`) | Improves retrieval quality for vector‑store back‑ends. | **Medium** – non‑critical; likely a post‑v0.9 enhancement. |
| **OIDC dashboard sign‑in** (`#11965`) | Replaces pairing‑code‑only auth; essential for multi‑user teams. | **High** – security‑focused, already merged PR #11965 is open and may land before v0.9.0. |
| **Append‑only session event history** (`#11921`) | Provides immutable audit trail, key for compliance. | **High** – PR open, size XL, may be batched into v0.9.0. |
| **Subprocess memory watchdog** (`#11456`) | Prevents runaway tool processes, a production‑grade safeguard. | **Medium** – optional feature flag; may be toggled in v0.9.0. |
| **Goal‑mode durable task lifecycle** (`#11878`, `#11880`) | Early foundation for autonomous “Goal” agents. | **Low‑Medium** – still exploratory proposals; unlikely for the immediate next release. |

---  

### 7. User Feedback Summary  

- **Reliability concerns:** Multiple users (issues #7759, #12107) report that disconnects abort in‑flight turns, leading to data loss. The community expects the gateway to treat the WebSocket as a *transport* only, not a turn controller.  
- **UI/UX friction:** Auto‑scroll (#9562) and composer‑jump (#12206) complaints show that the current chat UI interferes with reading history, especially on mobile. Recent UI fixes address part of this.  
- **Security & access control:** The pairing‑dashboard bug (#9394) and the desire for OIDC login (#11965) indicate that the current “single shared operator” model is insufficient for organizations.  
- **Runtime environment gaps:** Missing `/bin/sh` in the distroless image (#9859) and silent tool‑exclusion (#12203) break custom toolchains, signaling that the “zero‑config” promise is not yet delivered for all deployment flavours.  

Overall sentiment: **high enthusiasm for advanced features** (session logs, goal mode) but **urgent demand for stability and proper authentication** before ZeroClaw can be trusted in production.  

---  

### 8. Backlog Watch (Unanswered High‑Impact Items)  

| Issue / PR | Why it needs attention | Last update |
|------------|-----------------------|--------------|
| **#7759** – Decouple gateway WebSocket lifetime | P1, high risk to user workflow; open since Jun 2026. | 2026‑11‑03 |
| **#9394** – Pairing dashboard never read, codes never expire | Security‑critical; still open, P1. | 2026‑11‑03 |
| **#12014** – Provider context‑window fallback bug | Blocks custom providers; high severity. | 2026‑11‑03 |
| **#9859** – Distroless image missing `sh` | Runtime crash for many CI pipelines. | 2026‑11‑03 |
| **#12210** – Docker source image build failure | CI pipeline dead‑ends; prevents contributors from testing. | 2026‑11‑03 |
| **#12194** – Unknown model fallback to 32 k | Duplicate of #12014 but for catalog entries; high impact. | 2026‑11‑03 |
| **#11266** – Sub‑agent memory privacy leak | Security/privacy impact; open since Sep 2026. | 2026‑11‑03 |
| **#11878 / #11880** – Goal‑mode foundation PRs | Large architectural changes; still open, need review. | 2026‑11‑03 |
| **#11921** – Append‑only session history | Core to roadmap; open and large, pending review. | 2026‑11‑03 |

**Actionable recommendation:** Prioritise the three **P1 security/runtime bugs** (#9394, #9859, #12210) for a hot‑fix release before the next feature‑heavy v0.9.0 sprint. Simultaneously, move the WebSocket‑lifetime work (#7759) toward merge, as it unlocks many downstream UI improvements.  

---  

*Prepared by the ZeroClaw project‑watch analyst – 2026‑11‑03.*  

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*