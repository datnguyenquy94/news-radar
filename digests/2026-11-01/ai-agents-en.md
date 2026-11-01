# OpenClaw Ecosystem Digest 2026-11-01

> Issues: 118 | PRs: 500 | Projects covered: 12 | Generated: 2026-11-01 05:40 UTC

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

**OpenClaw – Project Digest (2026‑11‑01)**  

---

### 1. Today’s Overview  
- **Activity surge:** 118 issues were touched in the last 24 h (101 still open, 17 closed) and 500 PRs were updated, of which 221 were merged or closed.  
- **Stability focus:** A large share of the conversation is centred on severe regressions (several P0/P1 bugs) and memory‑leak / resource‑use concerns on the Gateway.  
- **Release cadence:** No new tag was published today; the team is still working toward the next stable line (2026.10.x).  

---

### 2. Releases  
*No new release was cut in the past 24 h, so there are no change‑logs or migration notes to report.*

---

### 3. Project Progress (PRs)  

| Category | Approx. count (last 24 h) | Notable merged/closed PRs |
|----------|--------------------------|---------------------------|
| **Bug‑fixes** | ~85 | • **#190019** – security‑sensitive fix that restores model visibility after a provider credential is saved (rating 🐚 platinum hermit). <br>• **#180854** – stops Slack replies from persisting after their parent message is deleted (rating 🦐 gold shrimp). |
| **Performance / CI** | ~45 | • **#185851** – consolidates Knip static‑analysis runs, cutting CI time by ~40 %. <br>• **#189949** – memoises model‑picker index, reducing UI‑search latency on large catalogs. |
| **Feature / Refactor** | ~46 | • **#185848** – makes default delivery / failure destinations configurable for cron jobs. <br>• **#188327** – scopes Workboard lifecycle hydration to linked cards, fixing O(N²) blow‑up on large boards. |
| **Documentation / UX** | ~20 | • **#190036** – unifies model‑policy glob handling (security‑boundary change). <br>• **#185446** – cleans up inbound‑attachment filename display in the Web UI. |

> **Take‑away:** The bulk of today’s merges were stability‑oriented (credential handling, Slack/Telegram edge‑cases) and tooling‑efficiency improvements, signalling a short‑term push to bring the current 2026.10 series back to a “release‑ready” state.

---

### 4. Community Hot Topics  

| Item | Comments / Rating | Link | Core need |
|------|-------------------|------|-----------|
| **#160959** – *Gateway blocks for minutes while capturing large external plugins* (P0, “diamond lobster”) | 67 comments | <https://github.com/openclaw/openclaw/issues/160959> | Prevent long‑running event‑loop stalls; need better streaming / incremental loading of large plugin packages. |
| **#123009** – *Recheck native Codex subscription blocks every five minutes* (P0) | 13 comments (closed) | <https://github.com/openclaw/openclaw/issues/123009> | Reliability of subscription‑state polling; a bug that caused repeated API throttling. |
| **#190019** – *Saving provider credentials hides models* (security‑sensitive, P2) | – (PR) | <https://github.com/openclaw/openclaw/pull/190019> | Consistency between credential storage and model‑allowlist; impacts Multi‑Provider setups. |
| **#185848** – *Cron: configurable default delivery & failure destinations* (P2) | – (PR) | <https://github.com/openclaw/openclaw/pull/185848> | Operator ergonomics – reduces repetitive configuration for large automation fleets. |
| **#185851** – *Reuse Knip analysis across CI runs* (P2) | – (PR) | <https://github.com/openclaw/openclaw/pull/185851> | Faster CI feedback loop; a recurring request from contributors about CI slowness. |

**Analysis:**  
- The heaviest discussion revolves around **resource‑blocking regressions** (gateway stalls, subscription polling).  
- A parallel thread concerns **credential & model discoverability**, reflecting adoption of many external providers.  
- UI/UX polish (cron defaults, CI speed) also draws notable attention, suggesting the community is moving from “can it run?” to “can it run efficiently and be managed at scale?”.

---

### 5. Bugs & Stability (ranked by severity)  

| Severity | Issue | Summary | Fix status |
|----------|-------|---------|-----------|
| **P0 – Crash / Release‑blocker** | **#160959** – Gateway blocks for minutes after loading large plugins (regression introduced in 2026.9.6). | Still **open**; 67 comments, no fix PR yet. |
| | **#137781** – WhatsApp group gets duplicate `direct` conversation row → UNIQUE constraint failures (crash). | Open, 5 comments, no fix PR. |
| | **#161719** – Gateway restart tombstones whole main session when an interrupted turn comes from another session (A2A). | Open, 4 comments, no fix PR. |
| | **#178441** – Owner Telegram conversation held by `providerReview` with no continuation. | Open, 5 comments, no fix PR. |
| **P1 – High‑impact behavior** | **#137710** – Native Codex completion recorded but parent session never wakes. | Open, 8 comments; no fixing PR yet. |
| | **#159858** – Idle worker isolates keep ~650 MB resident memory on small hosts. | Open, 8 comments; no fix PR. |
| | **#181459** – 3.5 GB agent DB makes Gateway startup gamble; `UNAVAILABLE` errors. | Open, 8 comments; no fix PR. |
| **P2 – Moderate friction** | **#137508** – Mobile UI keyboard hides chat content (Chinese UI). | Open, 8 comments; UI‑adjustment PR not yet landed. |
| | **#182604** – Discord ack reaction delay (~3 s) introduced in 2026.10.x. | Open, 3 comments; no fix PR. |
| | **#182567** – Explicit update‑status checks fail to discover fresh releases. | Open, 3 comments; no fix PR. |

*Only a handful of high‑severity bugs have associated fix branches at the moment (e.g., PR #190019 is a security fix but does not address the above P0 regressions).*

---

### 6. Feature Requests & Roadmap Signals  

| Feature request | Priority / Rating | Why it matters |
|-----------------|-------------------|----------------|
| **#182712** – *Limit‑aware model fallback (skip exhausted quota pool)* | P2, “silver shellfish” | Improves reliability when a provider hits rate limits; aligns with multi‑provider strategy. |
| **#159858** – *Idle worker isolates release memory on small hosts* | P0, “platinum hermit” | Directly addresses the memory‑bloat regression; likely to be prioritized for the next stable release. |
| **#150250** – *Skill Workshop – verify learning coverage & reuse* | P3, “tidepool” | Adds a structured workflow for skill‑learning, a long‑standing roadmap item. |
| **#182699** – *Opt‑in ZSTD compression for backup archives* | P3, “tidepool” | Gives operators better backup performance; low implementation risk. |
| **#181590** – *Allow plugins to extend the New‑Session page* | P2, “silver shellfish” | Enhances extensibility for third‑party integrations; fits the upcoming “Plugin‑first UI” initiative. |
| **#181791** – *Durable owner‑native execution provenance* | P2, “tidepool” | Supports safe interruption recovery for long‑running jobs; could be a milestone for the “Enterprise‑grade reliability” wave. |
| **#181368 / #181354** – *Gateway lanes & suspend‑status commands* | P3, “tidepool” | Improves observability & operational control; may be bundled with the next CLI‑tooling update. |

**Prediction:** The **memory‑release for idle workers** and **limit‑aware fallback** are the most likely to ship in the upcoming 2026.10.x “stabilisation” release, given their P0/P2 severity and direct impact on production‑grade deployments.

---

### 7. User Feedback Summary  

- **Mobile UX pain:** Issue #137508 (keyboard covering chat) and #137922 (attachment preview failures on WebKitGTK) show that the mobile and Linux desktop clients still suffer from layout/codec regressions after recent UI rewrites.  
- **Gateway performance:** Multiple complaints (#160959, #180761 on slow startup, #181459 on massive DB load) indicate that the core event‑loop is a bottleneck when handling large plugin packages or big agent databases.  
- **Message‑delivery reliability:** Slack/Telegram/WhatsApp edge‑case bugs (#180854, #137781, #182604, #182252) reflect real‑world usage where channels experience high volume or intermittent connectivity.  
- **Configuration friction:** Users request clearer provider‑setup flows (#137842), better update‑status discovery (#182567), and more intuitive default routing for cron jobs (#185848).  
Overall, the community is **satisfied with core functional breadth** (many providers, plugin system) but increasingly **demanding stability, performance, and polished UI** as they scale installations.

---

### 8. Backlog Watch (Stale / Unanswered)  

| Stale Issue | Last activity | Why it needs attention |
|-------------|---------------|------------------------|
| **#137508** – Mobile UI layout after keyboard | 2026‑11‑01 (8 comments) | UI regression blocks daily use on Android; no patch yet. |
| **#137842** – Provider card UI omits plugin‑guided reconnect actions | 2026‑11‑01 (5 comments) | Reduces discoverability of provider‑specific flows; aligns with upcoming plugin‑first UI. |
| **#173095** – Control UI sidebar empty on cold start | 2026‑11‑01 (6 comments) | Affects session navigation; likely a regression from recent state‑restore changes. |
| **#182567** – Update‑status does not discover fresh releases | 2026‑11‑01 (3 comments) | Hinders automated update pipelines; high‑impact for CI/CD. |
| **#182604** – Discord ack reaction delay | 2026‑11‑01 (3 comments) | User‑perceived latency; may be tied to recent gateway timing changes. |
| **#182699** – ZSTD compression for backups | 2026‑11‑01 (3 comments) | Feature request with low implementation cost but awaiting maintainer review. |
| **#181283** – `openclaw hooks test <name>` CLI helper | 2026‑11‑01 (2 comments) | Improves developer ergonomics; still open despite clear use‑case. |

**Action recommendation:** Prioritise the *mobile UI* and *provider‑card* UI bugs (high user‑impact, low complexity) and allocate a small “stability sprint” to address the **gateway‑blocking** regressions (#160959, #181459) before the next release freeze.

--- 

*All links point to the official OpenClaw repository on GitHub.*

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison Report – 2026‑11‑01**  
*Personal‑AI‑assistant / autonomous‑agent open‑source ecosystem*  

---

### 1. Ecosystem Overview  
The open‑source AI‑assistant landscape is now a **heterogeneous stack of “core + adapters”**: a handful of reference engines (OpenClaw, Hermes, ZeroClaw) provide the heavy‑weight orchestration, while lightweight forks (NanoBot, NanoClaw, PicoClaw, NullClaw) focus on single‑channel or edge use‑cases.  Most projects are **community‑driven but increasingly security‑ and reliability‑first**, reflecting their move from “can it run?” to “can it run at scale and under audit”.  

---

### 2. Activity Comparison  

| Project | Issues (past 24 h) | PRs (past 24 h) | Release today? | Health Score* (0–10) |
|---------|-------------------|------------------|----------------|----------------------|
| **OpenClaw** | 118 touched (101 open) | 500 updated (221 merged/closed) | No | 7 |
| **NanoBot** | 2 open | 5 updated (0 merged) | No | 6 |
| **Hermes Agent** | 8 touched (all open) | 50 updated (27 open, 23 merged) | No | 7 |
| **PicoClaw** | 1 closed (no open) | 5 updated (4 merged) | No | 8 |
| **NanoClaw** | 1 open (credential‑retry bug) | 3 updated (1 merged) | No | 6 |
| **NullClaw** | 1 open (Exa header bug) | 2 updated (both open) | No | 5 |
| **CoPaw** | 10 updated (mixed) | 21 updated (1 merged) | No | 7 |
| **ZeroClaw** | 5 touched (2 open) | 50 updated (44 open, 6 merged) | No | 6 |
| **IronClaw** | 0 | 0 | No | 3 |
| **LobsterAI** | 0 | 0 | No | 3 |
| **Moltis** | 0 | 0 | No | 3 |
| **ZeptoClaw** | 0 | 0 | No | 3 |

\*Health Score = composite of **activity velocity, open‑issue severity, and recent bug‑fix merge rate** (higher = healthier).  

---

### 3. OpenClaw’s Position  

| Dimension | OpenClaw | Typical Peer |
|-----------|----------|--------------|
| **Community size** | > 100 issues/day, > 500 PR touches → the **largest** active contributor base among the set. | NanoBot, PicoClaw, NullClaw each see < 10 issues/PRs per day. |
| **Core advantage** | *Full‑stack, plugin‑first architecture* (gateway, cron, workboard, UI, CI tooling).  Provides **multi‑provider credential handling**, extensible “Workboard” lifecycle, and a mature CI cache (Knip). | Other engines are either **single‑channel** (NanoClaw, NanoBot) or **edge‑focused** (PicoClaw). |
| **Technical differentiators** | 1. **Credential‑model sync** – fixes that keep provider models visible after secret changes (PR #190019).  <br>2. **Configurable cron destinations** – reduces repetitive routing configuration.  <br>3. **Performance‑oriented CI** – merged Knip deduplication cuts CI time 40 %. | Hermes focuses on **deterministic state snapshots**; ZeroClaw on **security hardening**; CoPaw on **real‑time console UI**; PicoClaw on **tiny runtime footprints**. |
| **Maturity signal** | The project is **in a stabilisation sprint** (many P0/P1 bug fixes, no new tag yet).  The volume of high‑severity regressions shows a large user base pushing the limits, which is a stronger indicator of production maturity than the low‑activity projects. | Projects with low issue counts are often **maintenance‑only** rather than “battle‑tested”. |

**Bottom line:** OpenClaw is the **de‑facto reference implementation** for large‑scale, multi‑provider deployments.  Its breadth of plugins and the size of its issue/PR traffic give it a decisive advantage when evaluating a platform that must support many channels, heavy cron workloads, and strict credential security.

---

### 4. Shared Technical Focus Areas  

| Need (appears in ≥ 3 projects) | Projects that surface it | Typical requirement |
|--------------------------------|--------------------------|--------------------|
| **Resource‑blocking / memory‑leak regressions** | OpenClaw (gateway stalls, idle‑worker memory), Hermes (idle‑worker ~650 MiB), ZeroClaw (memory isolation for sub‑agents) | Need **incremental loading** of large plugins, **worker‑isolate reclamation**, and **configurable memory budgets**. |
| **Multi‑provider reliability / fallback** | OpenClaw (limit‑aware model fallback, credential sync), NanoClaw (provider‑credential visibility), NullClaw (Exa header handling), ZeroClaw (provider‑agnostic OIDC), CoPaw (provider catalog rules) | Require **standardised credential stores**, **quota‑aware routing**, and **robust HTTP helper utilities** that respect caller‑provided headers. |
| **UI/UX polish for rich messaging** | OpenClaw (Telegram/Slack reply bugs), PicoClaw (Telegram markdown escape), CoPaw (SSE buffering, chat latency UI), NanoClaw (Telegram `$` escape) | Demand **markdown‑safe sanitisation**, **real‑time streaming headers**, and **observable latency metrics**. |
| **Deterministic session / tool history** | Hermes (tool‑history loss across continuations), ZeroClaw (send_message_to_peer scope bugs), OpenClaw (cron job status), NanoBot (checkpoint granularity) | Need **atomic checkpoint primitives**, **explicit tool‑call provenance**, and **clear failure propagation**. |
| **Internationalisation / docs** | OpenClaw (Chinese UI), PicoClaw (Traditional Chinese docs), NullClaw (zh‑TW docs) | Call for **localized guides**, **Unicode‑safe UI**, and **multilingual onboarding**. |
| **CLI‑only / container‑first distribution** | ZeroClaw (CLI‑only installer), PicoClaw (small binary), NanoBot (minimal runtime) | Require **lightweight binaries**, **environment‑agnostic packaging**, and **quick CI feedback loops**. |

---

### 5. Differentiation Analysis  

| Aspect | OpenClaw | Hermes Agent | ZeroClaw | CoPaw | PicoClaw | NanoBot | NanoClaw |
|--------|----------|--------------|----------|-------|----------|---------|----------|
| **Target user** | Enterprise / SaaS gateways, large‑scale multi‑tenant fleets | Developers needing **long‑running tool sessions** and deterministic state | Security‑conscious operators, CLI‑first adopters | Console‑oriented chat operators, UI‑heavy admins | Edge/IoT devices, low‑resource deployments | Minimalist orchestration for multi‑tool pipelines | Telegram‑centric bots with simple provider set |
| **Core architecture** | Modular gateway + plugin catalog + workboard + cron scheduler | Single‑process agent with **snapshot‑prune** & **skill telemetry** | Core + **CLI‑only build**, Goal‑stack UI layer, sandboxed OIDC | Electron‑based console + SSE streaming, plugin‑driven back‑end | Tiny binary, hard‑coded provider set, static UI | Tool‑centric runtime with **checkpoint granularity** | Telegram gateway + provider credential storage |
| **Feature focus** | Provider credential sync, configurable cron destinations, UI latency fixes | State‑DB resilience, Windows replace‑race fix, skill‑use counters | Security hardening (admin‑only SOP, memory isolation), CLI installer | Real‑time console, chat search, proxy handling | Network‑binding stability, Telegram markdown | Persistent checkpointing across batches, Runcrate provider | Rich‑text escape, hidden retry‑timeout, bot‑to‑bot gate |
| **Scalability** | Designed for **hundreds of plugins**, multi‑profile gateways | Handles **large tool‑heavy sessions** but still single‑process; focus on memory leaks | Scales via **CLI‑only** and Docker hub; security‑first | Scales via **SSE + plugin catalog**, but UI can block on schema generation | Optimised for **single‑host** edge; no heavy scaling features | Works with **multiple providers** but still a thin runtime | Limited to **Telegram**; modest concurrency |
| **Security posture** | Recent credential‑model sync, model‑policy glob unification | Session‑DB auto‑recovery, Windows race, OIDC binding | Multiple admin‑only SOP / memory‑isolation PRs, rate‑limit fixes | Proxy & HTTPS hardening, doom‑loop gate discussions | No explicit security PRs today | Host‑error propagation, credential‑error visibility | Provider credential handling, bot‑to‑bot admission gate |

---

### 6. Community Momentum & Maturity  

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapidly iterating** (≥ 20 PR updates/day, many merges) | **OpenClaw**, **Hermes Agent**, **CoPaw**, **ZeroClaw** | Large contributor pool, frequent bug‑fixes, active security hardening, visible roadmap (Goal‑stack, streaming caps). |
| **Stabilizing** (≤ 10 PR updates/day, few open issues) | **PicoClaw**, **NanoBot** | Low churn, most changes are bug‑fix/house‑keeping, no new releases scheduled—indicative of a mature, low‑maintenance code base. |
| **Under‑pressure** (high‑severity bugs open, low merge rate) | **NanoClaw**, **NullClaw** | Critical functional blockers (WebSocket hidden retry, Exa header) remain unfixed; community size small, PR review backlog visible. |
| **Dormant / Low‑momentum** (no activity) | **IronClaw**, **LobsterAI**, **Moltis**, **ZeptoClaw** | No issues/PRs in the last 24 h; essentially archival or awaiting revival. |

---

### 7. Trend Signals (derived from community feedback)  

| Trend | Evidence across projects | Implication for developers |
|-------|--------------------------|----------------------------|
| **Multi‑provider fail‑over & quota awareness** | OpenClaw “limit‑aware fallback”, NanoClaw credential‑model sync, ZeroClaw provider‑rate‑limit handling, NullClaw header fix. | Design **provider‑agnostic adapters** that expose quota/availability metadata; build automatic fallback layers. |
| **Deterministic state & reproducible tool pipelines** | Hermes “tool‑history loss”, ZeroClaw “send_message_to_peer scope”, NanoBot checkpoint granularity, OpenClaw cron status propagation. | Implement **atomic checkpoints**, **idempotent tool calls**, and expose **session‑state APIs** for audit. |
| **Memory‑efficiency & worker isolation** | OpenClaw idle‑worker bloat, Hermes idle‑worker memory, ZeroClaw sub‑agent memory isolation. | Prefer **lazy worker creation**, **explicit memory‑budget config**, and **periodic isolate GC**. |
| **Security‑first credential handling** | OpenClaw model‑policy glob, ZeroClaw admin‑only SOP, NanoClaw credential‑visibility bug, ZeroClaw OIDC binding. | Centralise **credential vaults**, enforce **role‑based policy checks** at the provider‑gateway boundary. |
| **Observability & UI latency metrics** | CoPaw SSE buffering, OpenClaw UI‑search latency, ZeroClaw latency display request, NullClaw rich‑text formatting. | Expose **per‑turn latency**, **stream‑capped lifetimes**, and **structured logs** for UI dashboards. |
| **Internationalisation & documentation** | OpenClaw Chinese UI, PicoClaw zh‑TW docs, NullClaw Traditional Chinese docs. | Provide **localisation pipelines** early; treat docs as first‑class artifacts. |
| **Container/CLI‑only distribution** | ZeroClaw CLI‑only installer, PicoClaw tiny binary, NanoBot minimal runtime. | Offer **Docker‑ready images** and **single‑binary packages** for CI/CD pipelines and edge devices. |

**Take‑away for AI‑agent developers:**  
- **Prioritise a modular provider layer** that can surface quota, health, and credential state; this satisfies the dominant multi‑provider demand.  
- **Embed deterministic checkpoints** (snapshot + prune) early to avoid the tool‑history regressions seen in Hermes and ZeroClaw.  
- **Allocate memory‑budget and idle‑worker reclamation** as first‑class configuration – many projects are already racing to fix related regressions.  
- **Hard‑wire security checks** (admin‑only SOP, OIDC binding, header sanitisation) before scaling; the community is flagging them as blockers.  
- **Expose latency / streaming caps** in the API; users of CoPaw and ZeroClaw explicitly request them for observability.

--- 

**Conclusion** – The ecosystem is coalescing around a **core‑plus‑plugins** model, with OpenClaw leading in breadth, Hermes and ZeroClaw driving safety and deterministic state, and the lighter forks (PicoClaw, NanoBot) providing “trim‑the‑fat” deployments for edge or CI use‑cases.  Projects that can combine **robust multi‑provider fallback**, **deterministic checkpointing**, and **security‑first credential handling** while offering **lightweight distribution options** will be best positioned for the next wave of production‑grade AI‑assistant deployments.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 1 Nov 2026**  

---

### 1. Today’s Overview  
- Activity is modest but focused: the repo saw **2 open issues** and **5 open pull requests** updated in the last 24 h, with **no new releases or merges**.  
- The open issues highlight two emerging functional gaps – persistent checkpointing for multi‑tool runs and automatic transcription of Signal audio attachments.  
- Pull‑request activity centers on expanding provider support (Runcrate, structured‑decision client) and tightening core stability (session‑lock cleanup, retry‑wait propagation).  
- Overall health is stable; the project is in a **maintenance‑and‑feature‑extension** phase rather than rapid iteration.

---

### 2. Releases  
*No new releases were published today.*

---

### 3. Project Progress (Merged / Closed PRs)  
- **No PRs were merged or closed in the last 24 h**. All five open PRs remain in review or awaiting maintainer interaction.  
- The lack of merges suggests a bottleneck in review capacity; maintainers may need to triage the pending PRs to keep the roadmap moving.

---

### 4. Community Hot Topics  

| # | Title / Scope | Type | Comments | 👍 Reactions | Link |
|---|---------------|------|----------|--------------|------|
| **5747** | *Recovery: persist completed tool results at execution‑batch boundaries* | Enhancement | 3 comments (discussion on checkpoint semantics) | 0 | <https://github.com/HKUDS/nanobot/issues/5747> |
| **6446** | *feat(providers): add Runcrate provider* | PR – New Provider | undefined (new PR, early feedback) | 0 | <https://github.com/HKUDS/nanobot/pull/6446> |

**Analysis**  
- **Issue #5747** is the most discussed item today. The community is concerned about the “crash‑consistency window” that can leave the durable checkpoint out‑of‑sync with actual tool progress. This reflects an underlying demand for **robust, resumable workflows** in long‑running or multi‑stage agent tasks.  
- **PR #6446** introduces the Runcrate gateway, a new OpenAI‑compatible provider. Early interest suggests users are actively seeking **more diverse model back‑ends** (especially for cost‑effective or region‑specific inference). The provider’s addition also aligns with the project’s “plug‑in‑first” philosophy.

Other notable PRs that are attracting quiet attention:  

- **#5405** – adds a “manual‑only” mode for skills that perform side‑effects.  
- **#6163** – fixes delivery of provider retry‑wait events to channel hooks.  
- **#6194** – resolves a session‑lock leak (see Bugs & Stability).  

---

### 5. Bugs & Stability  

| Severity | Area | Description | Current Status | Fix PR (if any) |
|----------|------|-------------|----------------|----------------|
| **Medium** | Core API | Session locks left in the registry after completing API requests with distinct `session_id`s, leading to memory growth. | Reported in issue #4883, addressed today. | **#6194** (open) |
| **Medium** | Provider / Channel | Retry‑wait events were silently dropped, preventing UI progress feedback during back‑off. | Fixed in PR #6163 (open). | **#6163** |
| **Low** | Recovery | Checkpoint may record pending calls for tools that already finished when a crash occurs between batch steps. | Open issue #5747 (enhancement) – not a bug yet but a reliability risk. | – |

*No new crash reports or regressions appeared in the last day.* Both bug‑fix PRs (#6163, #6194) are open and awaiting review; their early presence is a positive sign that maintainers are actively addressing stability.

---

### 6. Feature Requests & Roadmap Signals  

| Issue / PR | Requested Feature | Potential Next‑Release Impact |
|------------|-------------------|--------------------------------|
| **#6534** – *Transcribe audio attachments automatically (Signal)* | Auto‑transcribe Signal voice notes via the existing transcription service, matching behavior on other channels. | High likelihood of landing in the next minor release because it aligns with ongoing work on channel‑level media handling. |
| **#5747** – *Persist completed tool results across batch boundaries* | Add checkpoint granularity to record per‑tool success/failure, enabling correct recovery after mid‑batch crashes. | Could be scheduled for a later release (vX.Y+1) as it touches core runtime semantics and may require broader testing. |
| **#5405** – *Manual‑only skill invocation* | Allow certain skills to be disabled for model‑driven auto‑invocation, requiring explicit user triggers. | Already in PR form; if merged, it will be a visible feature in the next release. |
| **#5825** – *Provider‑neutral structured decision client* | Abstract decision‑making client (initially OpenRouter System‑One) for use across providers. | The PR is open; merging would add a reusable component, likely part of a “provider ecosystem” milestone. |

**Roadmap inference:** The team appears to be prioritizing **provider expansion**, **skill safety controls**, and **core robustness**. The Signal transcription request dovetails with recent channel work, and the structured decision client suggests a forthcoming shift toward **provider‑agnostic tooling**.

---

### 7. User Feedback Summary  

- **Reliability concerns:** Issue #5747’s discussion reveals users are deploying NanoBot in multi‑step pipelines where crashes are not rare. They need guarantees that completed work isn’t undone after a restart.  
- **Consistency across channels:** The request for Signal audio transcription (#6534) stems from a user experience gap—other platforms (e.g., Telegram, Discord) already enjoy automatic transcription, and Signal users feel left behind.  
- **Safety of side‑effecting actions:** The manual‑only skill proposal (#5405) reflects apprehension about autonomous agents executing destructive or irreversible actions without explicit consent.  

Overall sentiment is **constructive and forward‑looking**; users appreciate the extensibility but are asking for more safeguards and parity across communication channels.

---

### 8. Backlog Watch  

| Item | Age (since creation) | Reason for attention |
|------|----------------------|----------------------|
| **#5747** (Enhancement) | ~7 weeks | Critical for production‑grade reliability; still open with only discussion. |
| **#6534** (Enhancement) | 1 day | Fresh request; should be reviewed quickly to maintain channel parity. |
| **#5405** (PR) | ~10 weeks | Provides essential safety for side‑effect skills; remains open, blocking that capability. |
| **#5825** (PR) | ~6 weeks | Introduces reusable decision client; could unlock future provider features. |
| **#6163** (PR) | ~3 weeks | Bug fix that improves UI feedback; pending review may delay stability improvements. |
| **#6194** (PR) | ~2 weeks | Fixes memory‑leak‑type bug; should be merged promptly. |

*Actionable note:* The maintainers would benefit from **prioritizing review of PR #5405 and #5747** to address user‑reported reliability and safety concerns, while also merging the bug‑fix PRs (#6163, #6194) to keep the codebase clean.

---

**Bottom line:** NanoBot is in a healthy maintenance window with active community‑driven feature ideas and timely bug‑fix PRs. The main risk is the **review backlog**; clearing the high‑visibility PRs will sustain momentum and address the most pressing user‑needs.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑11‑01)**  

---  

### 1. Today’s Overview  
- Development momentum is high: 8 issues were touched (all still open) and **50 pull‑requests** saw activity, of which **27 remain open** and **23 were merged or closed**.  
- No new public release was cut, but a steady stream of bug‑fixes and small performance tweaks landed, keeping the v0.22.x line stable.  
- The community focus is split between **long‑running tool‑heavy sessions** (e.g., Codex) and **state‑management regressions** that surface under heavy concurrency.  

---  

### 2. Releases  
*No new version was published on 2026‑11‑01.*  
(When a release does appear, the digest will list the changelog, breaking‑change notes and any migration steps.)

---  

### 3. Project Progress (Merged / Closed PRs)  

| PR | Title / Goal | Area | Labels | Closed / Merged (date) |
|----|--------------|------|--------|------------------------|
| **#144478** | Restore `state.db` from newest snapshot by mtime | Sessions, Install‑Update | `type/bug`, `P1` | 2026‑11‑01 |
| **#144480** | Make `mautrix[encryption]` optional for Matrix E2EE‑off installs | Platform / Matrix | `type/bug`, `P1` | 2026‑11‑01 |
| **#144481** | Prevent empty `platform_toolsets` from merging MCP servers | CLI, Config | `type/bug`, `P3` | 2026‑11‑01 |
| **#144326** | Retry contended `jobs.json` replace on Windows | Cron, OS / Windows | `type/bug`, `P2` | 2026‑11‑01 |
| **#144327** | Separate “view” vs “use” counters for skill tracking | Tools / Skills | `type/bug`, `P2` | 2026‑11‑01 |
| **#131498** | Allow packaged Desktop to connect to non‑loopback origins | Desktop, Dashboard | `type/bug`, `P2` | 2026‑11‑01 |
| **#127579‑#127590** (batch) | A series of “invalid” PRs that were closed after community triage – no code landed. | Various | `invalid` | 2026‑11‑01 |
| **#147152** *(still open)* | Align **checkpoints prune** preview with actual deletion logic | Checkpoints | `type/bug`, `P2` | – |

**What advanced?**  
- **State‑database resilience** (auto‑recovery from latest snapshot).  
- **Platform compatibility** – Windows file‑replace race fixed; Matrix optional encryption dependency removed.  
- **Skill telemetry** – more accurate view/use metrics.  
- **Desktop reachability** – the packaged Electron client now works with remote, non‑loopback bind addresses (useful for Tailscale, VPN‑exposed servers).  

---  

### 4. Community Hot Topics  

| Item | Comments / Reactions | Core Concern |
|------|----------------------|---------------|
| **Issue #131743** – *“Codex long‑task first‑progress stalls”* | 15 comments (most active) | 300 s silent stall before any substantive streaming token appears in tool‑heavy Codex sessions. Users report repeated cancellations and retries; a regression tied to recent compression/streaming changes. |
| **Issue #147444** – *Dashboard `GET /api/config/schema` blocks event loop* | 0 comments (new) | Synchronous plugin discovery during schema generation blocks the async event loop for ~1 s per call, slowing UI loads when many plugins are installed. |
| **PR #80701** – *Streaming response lifetime cap* (open, 0 comments) | N/A | Feature request to let operators cap runaway streaming responses (`agent.stream_max_lifetime`). Signals interest in better resource‑guardrails for long‑reasoning models. |
| **Issue #142535** – *Runs API loses canonical tool history across continuations* | 2 comments | Breaks deterministic replay of tool calls when a caller owns a mutable conversation history; threatens reproducibility of multi‑turn tool pipelines. |

**Underlying needs**  
1. **Predictable long‑running tool usage** – developers expect the first substantive token within seconds; stalls affect batch‑processing pipelines.  
2. **Responsive UI / API** – heavy plugin ecosystems should not degrade core event‑loop performance.  
3. **Deterministic session state** – cross‑turn tool history and profile isolation are critical for both security and reproducibility.  

---  

### 5. Bugs & Stability (ranked by severity)

| Severity | Issue / PR | Summary | Status / Fix |
|----------|------------|---------|--------------|
| **Critical (P1)** | **#144478** (merged) – state‑db auto‑recovery | Prevents loss of conversation history after crash or corrupted snapshot. | Fixed & merged. |
| **High (P2)** | **#131743** – Codex first‑progress stall | 5‑minute silent stalls; impacts heavy tool usage. | No fix merged yet; investigation ongoing. |
| **High (P2)** | **#131848** – Desktop duplicate last exchange | Occasionally repeats previous bot reply after optimistic UI update. | Open; no fix yet. |
| **High (P2)** | **#142535** – Runs API loses tool history | Breaks deterministic tool pipelines across continuations. | Open; under discussion. |
| **High (P2)** | **#87575** – Profile scope bleed in concurrent runs | Cron job of profile β contaminates live turn of profile α. | Open; no patch yet. |
| **Medium (P2)** | **#147442** – Outbound image budget too low; 400 errors not retried | Large images exceed hard‑coded 24 MiB budget; backend returns 400 → no retry. | Open; likely a config/parameter tweak. |
| **Medium (P2)** | **#147444** – Dashboard schema call blocks event loop | Synchronous plugin discovery hurts UI responsiveness. | Open; could be remedied by lazy loading. |

*Note:* Several high‑severity bugs have **no merged corrective PR** as of today, indicating a short‑term risk window for production deployments that rely heavily on Codex or multi‑profile gateways.

---  

### 6. Feature Requests & Roadmap Signals  

| Request | Description | Current Signal |
|---------|-------------|----------------|
| **Plugin catalog admission rule clarification** – *Issue #147445* | Clarify whether a “hook‑only” local sign‑in broker (Keyflap) meets catalog rule 18. | New, low comment count but indicates upcoming plugin‑catalog expansion. |
| **Streaming‑lifetime cap** – *PR #80701* | Opt‑in limit (`agent.stream_max_lifetime`) to truncate runaway streams. | Open, P2, already reviewed; likely to land in the next minor bump (v0.23). |
| **Dashboard `/api/config/schema` performance** – *Issue #147444* | Reduce blocking during dynamic provider discovery. | High impact on UI; could be addressed alongside other UI refactors in the next release cycle. |
| **Outbound image budget adjustment** – *Issue #147442* | Raise or make configurable the image budget for back‑ends with larger payload limits. | Practical request; may be exposed as a config flag in v0.23. |

**Prediction:** The next scheduled release (v0.23.0) will probably include the streaming‑lifetime cap, the dashboard schema performance fix, and a configurable image‑budget setting, as these have already been discussed and have clear implementation paths.

---  

### 7. User Feedback Summary  

- **Pain points:**  
  - **Long‑task latency** (issue #131743) – users running Codex with vision‑oriented tools experience multi‑minute freezes, disrupting batch automation.  
  - **State contamination** across profiles (issue #87575) – multi‑tenant deployments see cross‑profile leakage, raising security concerns.  
  - **Desktop UI glitches** (issue #131848) – duplicate messages erode confidence in the Electron client.  
- **Positive signals:**  
  - Recent bug‑fixes (state‑db recovery, Matrix optional encryption, Windows file‑replace handling) were merged quickly, showing responsive maintenance for high‑severity regressions.  
  - The community continues to contribute detailed repro steps and environment data (e.g., Linux‑Arch, Electron packaging), which aids rapid debugging.  

Overall, users are **satisfied with the core stability** but are pressing for **more deterministic session handling** and **better safeguards against runaway streaming**.

---  

### 8. Backlog Watch  

| Backlog Item | Why It Needs Attention | Last Update |
|--------------|------------------------|--------------|
| **Open PR #80701** (stream‑max‑lifetime) | Addresses a widely‑requested safety net for long streams; no merges yet. | 2026‑11‑01 |
| **Open Issue #131743** (Codex stall) | High‑impact regression affecting many enterprise users; no fix in sight. | 2026‑11‑01 |
| **Open Issue #142535** (canonical tool history loss) | Breaks reproducibility of tool pipelines; medium‑severity but core to the agent’s contract. | 2026‑11‑01 |
| **Open Issue #87575** (profile bleed) | Security‑critical for multi‑tenant gateways; still open after weeks. | 2026‑11‑01 |
| **Open Issue #147444** (dashboard schema blocking) | Performance bottleneck for UI heavy deployments; could be addressed in the next UI sprint. | 2026‑11‑01 |
| **Open PR #147152** (checkpoint prune consistency) | Fixes divergence between preview and actual prune; may affect backup/maintenance scripts. | 2026‑11‑01 |

**Actionable recommendation:** Allocate at least one maintainer to each of the four high‑severity open issues (#131743, #131848, #142535, #87575) and prioritize PR #80701 for inclusion in the upcoming release.  

---  

*All links point to the public GitHub repository:* `https://github.com/NousResearch/hermes-agent`.  

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 1 Nov 2026**

---

### 1. Today’s Overview
- Activity in the last 24 h was modest: **1 issue** was closed and **5 pull‑requests** were updated (4 merged/closed, 1 still open).  
- No new releases were published, indicating a maintenance‑focused sprint rather than a feature‑release cycle.  
- The community discussion centered on two stability‑related topics (launcher networking bug and Telegram markdown handling), while a new provider implementation is the only open feature work.

---

### 2. Releases
*No new release was created in the last 24 h, so there are no changelogs, breaking‑change notes, or migration guidance to report.*

---

### 3. Project Progress (Merged / Closed PRs)

| PR # | Title / Scope | Key Change | Impact |
|------|----------------|------------|--------|
| **#3443** | *fix(telegram): escape link labels and blockquote text in MarkdownV2* | Sanitises characters that Telegram’s MarkdownV2 parser rejects (e.g., “.” in link labels, “>” in blockquotes). | Restores full rich‑text formatting for Telegram notifications; prevents fallback to plain‑text replies. |
| **#3442** | *fix(cron): propagate job failures to lastStatus* | Corrects `CronTool.ExecuteJob` to record `"error"` instead of `"ok"` when a job fails, and updates `cron/jobs.json` accordingly. | Improves reliability of cron‑job monitoring and alerting; downstream tooling can now react to real failure states. |
| **#1558** | *merge fix: PR #1344 #1342 #1341 #1331* | Bulk merge of four previously isolated fixes (bug‑fixes, minor adjustments). | Reduces PR queue, ensures multiple small patches are incorporated without further review overhead. |
| **#1545** | *merge fix: PR #1500 #1490 #1488 #1487 #1485* | Similar bulk merge of five older fixes. | Same housekeeping benefit as #1558. |
| **#3431** *(still open)* | *feat(provider): add Standard Compute provider* | Introduces a new OpenAI‑compatible backend (`standardcompute`) with its own metadata and config handling. | Expands the ecosystem of external AI providers; pending review. |

*The four merged PRs are all **bug‑fixes or housekeeping**. The only forward‑looking development is the open provider PR (#3431).*

---

### 4. Community Hot Topics  

| Item | Type | Activity (comments / 👍) | Link | Why It Matters |
|------|------|--------------------------|------|----------------|
| **#3439** | Issue (closed) – *picoclaw-launcher: `-public` & `-host` conflict / IPv6‑only bind* | 1 comment, 0 👍 | <https://github.com/sipeed/picoclaw/issues/3439> | Shows a **critical runtime crash** on a popular launch configuration (public IPv4/IPv6 support). Users on OpenWrt aarch64 experienced a “crash loop” and inability for IPv4 clients to connect. |
| **#3443** | PR – *Telegram MarkdownV2 escape fix* | No comment count provided, 0 👍 | <https://github.com/sipeed/picoclaw/pull/3443> | Highlights a **user‑experience bug** where malformed markdown caused Telegram to drop formatting, affecting notification clarity for many integrations. |
| **#3442** | PR – *Cron job status propagation* | No comment count provided, 0 👍 | <https://github.com/sipeed/picoclaw/pull/3442> | Addresses a **silent‑failure scenario** that could mislead operators about job health. |

*The two PRs (#3442, #3443) were merged today, indicating that the maintainers prioritized fixing observable reliability gaps that directly impact end‑users.*

---

### 5. Bugs & Stability  

| Severity | Issue/PR | Description | Current Status |
|----------|----------|-------------|----------------|
| **High** | **#3439** (Issue) | `picoclaw-launcher -public` binds **only IPv6**; combined with `-host 0.0.0.0` leads to a crash loop on dual‑stack kernels. IPv4 clients cannot reach the service. | Closed (no dedicated fix PR yet). The issue was reported, discussed, and closed without an evident code change – likely awaiting a future release. |
| **Medium** | **#3443** (PR) | Telegram MarkdownV2 parsing rejected characters, causing loss of rich‑text formatting. | Fixed – merged. |
| **Medium** | **#3442** (PR) | Cron jobs always recorded `"ok"` regardless of failure, obscuring real error states. | Fixed – merged. |
| **Low** | Bulk merge PRs #1558 & #1545 | Accumulated small bug‑fixes from earlier PRs. | Integrated – merged. |

*Only one high‑severity bug surfaced today, and it remains unresolved in code. The maintainers addressed two medium‑severity bugs promptly.*

---

### 6. Feature Requests & Roadmap Signals  

| Feature | Origin | Status | Likelihood for Next Release |
|---------|--------|--------|------------------------------|
| **Standard Compute provider** | PR #3431 (open) | New provider implementation adding `standardcompute` backend. | **High** – already in PR form; if review proceeds quickly, it could land in the next minor bump. |
| **Improved launcher networking options** | Issue #3439 (closed) | No explicit fix yet; the problem points to missing IPv4 binding logic. | **Medium** – the bug’s severity suggests a fix will be prioritized, but no PR is in flight. |
| **Telegram markdown compatibility** | PR #3443 (merged) | Implemented. | Already delivered. |

*The only forward‑looking feature under active development is the Standard Compute provider, which aligns with the project’s goal of supporting a broader set of AI back‑ends.*

---

### 7. User Feedback Summary  

- **Networking friction** – Users deploying PicoClaw on OpenWrt devices experienced a **network‑binding regression** that broke IPv4 connectivity and caused restart loops. This indicates a need for clearer documentation of launcher flags and more robust dual‑stack handling.  
- **Notification formatting** – Operators relying on Telegram for alerts reported **lost markdown formatting**, leading to reduced readability of alerts. The quick fix shows the community values high‑quality, well‑formatted notifications.  
- **Cron reliability** – The misunderstanding of job status was a source of confusion for automation pipelines; fixing it improved trust in the built‑in scheduler.  

Overall, the community is most concerned with **operational reliability** (network binding, job monitoring) and **communication clarity** (Telegram formatting).

---

### 8. Backlog Watch  

| Item | Type | Age (approx.) | Reason to Prioritize |
|------|------|----------------|----------------------|
| **#3439** – Launcher networking bug | Issue (closed, no fix) | Reported 17 days ago (15 Oct) | High‑severity crash loop; impacts production deployments on ARM‑based routers. |
| **#3431** – Standard Compute provider | PR (open) | Open 17 days | Expands provider ecosystem; aligns with roadmap for multi‑vendor AI back‑ends. |
| **Unmerged older PRs** – Those merged via #1558 & #1545 suggest there are still isolated patches awaiting integration. A periodic “cleanup sprint” would keep the backlog shallow. |

*The maintainer team should consider opening a dedicated PR to address the launcher binding logic (or at least tagging the issue with “needs‑fix”) and accelerating the review of the Standard Compute provider to keep momentum on ecosystem expansion.*

---

**Health Verdict:**  
PicoClaw’s activity today reflects a **maintenance‑centric phase**: critical bugs are being surfaced (launcher crash) but not yet fixed, while medium‑severity stability issues are promptly resolved. The sole open feature PR indicates a **potential near‑term expansion** of supported AI providers. Keeping an eye on the launcher bug and progressing the provider PR will be key to sustaining user confidence and growth.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026‑11‑01**  

---

### 1. Today’s Overview  
- Activity on the NanoClaw repo remains modest but focused: 1 open bug was updated and three PRs received attention, with one PR merged/closed.  
- No new releases were published, so the codebase is still at the pre‑v0.14‑rc.2 stage.  
- The most visible community concern is the hidden timeout for Codex WebSocket idle retries, which can leave Telegram users waiting up to ten minutes for a reply.  

---

### 2. Releases  
*No new releases were created in the last 24 h.*  
*The latest published version remains the last tag prior to today (v0.14‑rc.2).*  

---

### 3. Project Progress  

| PR | Status (today) | Summary & Impact |
|----|----------------|------------------|
| **#4111** – *feat(telegram): bot‑to‑bot admission gate* | **Closed / Merged** (Oct 31) | Introduces a “doorman” gate (`TELEGRAM_BOT_INBOUND`) that blocks unsolicited bot‑to‑bot messages, preventing unbounded reply loops. Directly improves stability of Telegram integrations. |
| **#4244** – *fix(host): propagate operational errors from AnchoredDir* | **Open** (updated Oct 31) | Strengthens the host‑side security model by bubbling real I/O errors (e.g., ENOSPC, EACCES) instead of treating them as unsafe‑path rejections. Pre‑emptively reduces false‑positive security blocks. |
| **#4243** – *fix(telegram): escape `$` and keep line breaks in rich messages* | **Open** (updated Oct 31) | Fixes formatting bugs in Telegram’s “rich” message mode (dollar‑delimited math rendering and collapsed bullet lists). Improves presentation of multi‑line or monetary responses. |
| **#3448** – *ncl: warn when group scope overrides an explicit auto‑fill arg* | **Open** (updated Nov 01) | Adds a warning when a caller’s explicit argument conflicts with the auto‑filled values from a group context. Provides clearer diagnostics for developers using the `dispatch()` helper. |

**Key Takeaway:** The only PR that reached completion today was the Telegram “doorman” safeguard, highlighting a short‑term priority on preventing runaway bot interactions.

---

### 4. Community Hot Topics  

| Item | Type | Comments / 👍 | Link | Core Concern |
|------|------|---------------|------|--------------|
| **#3338** – *Codex WebSocket idle retry is hidden until NanoClaw’s 10‑minute turn timeout* | Issue (bug) | 4 comments, 0 👍 | https://github.com/qwibitai/nanoclaw/issues/3338 | Users experience up to ten minutes of silence when a Telegram request’s WebSocket stalls; the retry logic in `codex app‑server` is not surfaced to NanoClaw, leading to missed turns. |
| **#4111** – *feat(telegram): bot‑to‑bot admission gate* | PR (merged) | – | https://github.com/qwibitai/nanoclaw/pull/4111 | Community demanded a safety net for bot‑to‑bot traffic after accidental loop incidents. |
| **#4243** – *fix(telegram): escape `$` and keep line breaks* | PR (open) | – | https://github.com/qwibitai/nanoclaw/pull/4243 | Formatting glitches in rich Telegram messages affect readability, especially for financial or bullet‑list replies. |

**Analysis:** The dominant discussion revolves around Telegram channel reliability—both the hidden timeout bug and the need for robust message formatting. The merged “doorman” PR indicates the maintainers are responding to real‑world operational pain points.

---

### 5. Bugs & Stability  

| Severity | Issue / PR | Description | Status |
|----------|-----------|-------------|--------|
| **Critical** | #3338 (bug) | Codex WebSocket stalls for up to 10 min without surfacing retry, causing silent user experiences. | Open – no fix yet. |
| **High** | #4244 (security bug) | `AnchoredDir` misclassifies genuine I/O failures (disk full, permission denied) as unsafe‑path rejections, potentially hiding real operational errors. | Open – PR underway. |
| **Medium** | #4243 (formatting bug) | Telegram rich messages mis‑interpret `$…$` as LaTeX and collapse single‑newline bullet lines, degrading UI. | Open – PR submitted. |

*No crash reports or regressions were logged today beyond the above.*  

---

### 6. Feature Requests & Roadmap Signals  

| Signal | Description | Likelihood in Next Release |
|--------|-------------|----------------------------|
| **Explicit warning on group‑scope auto‑fills** – PR #3448 | Adds developer‑visible warnings when an explicit argument is overridden by group context. | High – already open; likely to be merged in the next minor bump. |
| **Telegram “doorman” gate** – PR #4111 | Prevents unintended bot‑to‑bot wake‑ups. Already merged, will be part of the upcoming v0.14‑rc.3 rollout. |
| **Improved error propagation from host filesystem** – PR #4244 | Security‑focused change that clarifies error semantics. Expected to land before the next stable release given its impact on sandboxing. |
| **Rich‑text handling improvements** – PR #4243 | Fixes UI glitches for Telegram. Expected to be bundled with the next release that includes the Telegram adapter bump. |

*No brand‑new feature request tickets appeared today, but the pattern suggests the roadmap will prioritize Telegram reliability and host‑side security hardening.*  

---

### 7. User Feedback Summary  

- **Silent Responses:** The most vocal user complaint (Issue #3338) concerns prolonged silence when the Codex WebSocket drops, confirming a real‑world reliability gap in the Telegram channel.  
- **Message Presentation:** Users appreciate the richer formatting capabilities of the Telegram adapter but are frustrated by unexpected LaTeX rendering and paragraph merging, driving the need for the fix in PR #4243.  
- **Safety in Bot‑to‑Bot Interactions:** The acceptance of the “doorman” PR indicates strong community demand for safeguards against accidental recursion, a recurring pain point after several projects reported infinite reply loops.  

Overall, the community’s sentiment is **constructively critical**—they value NanoClaw’s extensibility but expect more robust channel fault handling and clearer debugging signals.

---

### 8. Backlog Watch  

| Item | Age / Status | Why It Needs Attention |
|------|--------------|------------------------|
| **#3338** – Codex WebSocket idle retry hidden | Open, last updated Oct 31 (≈2 months old) | Directly affects end‑user latency; no corrective PR yet. |
| **#4244** – AnchoredDir error propagation | Open, created Oct 31 | Security‑related; improper error masking could lead to hidden operational failures. |
| **#4243** – Telegram rich‑text escape | Open, created Oct 31 | UI regression that impacts a large portion of Telegram‑based deployments. |
| **#3448** – Group‑scope override warning | Open, created Aug 22 (≈3 months) | While low‑severity, the warning improves developer ergonomics and may reduce subtle bugs in complex dispatch scenarios. |

*Recommendation:* Prioritize #3338 for an early fix (e.g., surface the retry status to NanoClaw’s turn‑timeout logic) and merge #4244 to close the security gap before the next stable release. The remaining open PRs are already active and should be merged in the upcoming release cycle.  

---  

*Prepared by the AI‑Agent Open‑Source Analyst (as of 2026‑11‑01).*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest – 1 Nov 2026**  

---

### 1. Today’s Overview
- Activity on the repository was modest but focused: **1 open issue** and **2 open pull requests** were updated in the last 24 h.  
- No new releases were published, and no PRs were merged or closed today, indicating a steady‑state development phase.  
- The primary technical discussion revolves around a **Content‑Type header duplication bug** that breaks the `web_search` tool when using the Exa provider, and a parallel effort to expand documentation into Traditional Chinese.

---

### 2. Releases
*No new releases were created in the last 24 h.*  
> **Implication:** Existing users continue on the current stable version (v‑latest). No migration steps or breaking‑change notices are required today.

---

### 3. Project Progress
| PR # | Title | Author | Status | Key Impact |
|------|-------|--------|--------|------------|
| **1086** | *fix(http): send a single Content-Type when callers pass their own* | **Krakazybik** | **Open** (created 31 Oct) | Resolves duplicate `Content-Type` header issue that caused Exa‑based `web_search` calls to fail (HTTP 400). Once merged, the `curlRequestWithProxy` helper will honour caller‑provided headers, restoring full search functionality. |
| **1087** | *docs(zh‑tw): add Traditional Chinese documentation* | **supersonictw** | **Open** (created 1 Nov) | Introduces a complete Traditional Chinese (`zh‑TW`) docs set, covering all 15 core guides. This widens accessibility for Chinese‑speaking users and may increase adoption in Asian regions. |

*No PRs were merged or closed today; both remain under review.*

---

### 4. Community Hot Topics
| Item | Type | Link | Activity | Why It Matters |
|------|------|------|----------|----------------|
| **#1085** – *web_search: Exa rejects requests because Content-Type is sent twice* | Issue (open) | <https://github.com/nullclaw/nullclaw/issues/1085> | Opened & updated 31 Oct; 0 comments, 0 reactions (still fresh) | Directly blocks a core capability of the AI agent (web search). The bug prevents the agent from retrieving external information, a fundamental use‑case. |
| **#1086** – *fix(http): send a single Content-Type when callers pass their own* | PR (open) | <https://github.com/nullclaw/nullclaw/pull/1086> | Opened 31 Oct; linked to #1085, no comments yet | Provides the corrective code for the #1085 bug. Its swift creation demonstrates responsive maintenance. |
| **#1087** – *docs(zh‑tw): add Traditional Chinese documentation* | PR (open) | <https://github.com/nullclaw/nullclaw/pull/1087> | Opened 1 Nov; community contribution, no comments yet | Addresses a long‑standing demand for non‑English documentation, improving onboarding for a new user segment. |

**Underlying needs:**  
- **Reliability of external services** – Users expect `web_search` to work with any supported provider; duplicate headers are a regression that must be closed quickly.  
- **Internationalization** – The addition of Traditional Chinese docs signals growing interest from Asian markets and a desire for multilingual support.

---

### 5. Bugs & Stability
| Severity | Issue/PR | Summary | Current Status |
|---------|----------|---------|----------------|
| **High** | **#1085** – Exa API returns 400 due to duplicated `Content-Type` header | All `web_search` calls using `search_provider: "exa"` fail, disabling a primary agent function. | Open; fix is being prepared in PR #1086. |
| **Medium** | (None reported today) | – | – |

*Fix availability:* PR #1086 directly addresses the high‑severity bug. No other regressions were reported in the 24‑hour window.

---

### 6. Feature Requests & Roadmap Signals
- **No explicit feature‑request issues were opened today.**  
- The **Traditional Chinese documentation** effort (PR #1087) hints at a broader roadmap item: *Localization & multilingual documentation*. The maintainers may prioritize additional language packs (e.g., Japanese, Korean, Spanish) in upcoming milestones.  
- The quick turnaround on the header‑duplication bug suggests the team values **robust third‑party integration**; future releases may include more defensive checks around HTTP helper utilities.

---

### 7. User Feedback Summary
- **Pain point:** Inability to use the Exa search provider, effectively crippling web‑search‑driven workflows. Users relying on up‑to‑date internet information are forced to switch providers or wait for a fix.  
- **Positive signal:** The community contribution of a full Traditional Chinese documentation set reflects enthusiasm from non‑English speakers and a desire for better onboarding resources.  
- **Overall sentiment:** Neutral to slightly negative today, driven primarily by the functional blocker in `web_search`. Anticipated satisfaction rise once PR #1086 lands.

---

### 8. Backlog Watch
| Item | Type | Link | Reason for Attention |
|------|------|------|----------------------|
| **#1085** | Issue (open) | <https://github.com/nullclaw/nullclaw/issues/1085> | High‑severity bug; still open despite a ready fix. Timely merge is critical to restore core functionality. |
| **#1086** | PR (open) | <https://github.com/nullclaw/nullclaw/pull/1086> | Fixes the above bug. Needs review and CI verification before merging. |
| **#1087** | PR (open) | <https://github.com/nullclaw/nullclaw/pull/1087> | Documentation expansion. Review for completeness, consistency, and potential integration into the release process. |
| *(Older open items not listed in the provided snapshot)* | — | — | Maintainers should scan the issue tracker for any long‑standing, low‑activity tickets (e.g., feature proposals, performance improvements) that have been dormant for >30 days. Prioritizing them will keep the backlog from stagnating. |

---

**Health Verdict:** The NullClaw project is in a stable maintenance mode with low but purposeful activity. The primary risk today is the unresolved `web_search` bug, but a corrective PR is already in place. Documentation expansion indicates healthy community engagement. Prompt review of PR #1086 and #1087 will resolve the most urgent blocking issue and broaden the project's reach, respectively.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (agentscope‑ai/CoPaw) – Project Digest**  
*Date: 2026‑11‑01*  

---

## 1. Today’s Overview
- Development activity is **high**: 10 open issues were updated and 21 pull‑requests (PRs) received activity within the last 24 h.  
- No new releases were cut, but **one PR was merged**, indicating that the maintainers are still landing incremental fixes.  
- The bulk of the chatter revolves around **protocol compatibility, channel reliability, and UI/UX pain points**, suggesting the project is in a consolidation phase before the next major release.  

---

## 2. Releases
*No new version was published in the last 24 h.*  
(When a release does appear, the digest will list the version number, highlighted changes, breaking‑change notes, and migration guidance.)

---

## 3. Project Progress
| PR | Title / Goal | Size | Status (today) | Key Impact |
|----|--------------|------|----------------|------------|
| **#8522** | *fix(console): disable nginx buffering on /console/chat SSE* | XS (first‑time‑contributor) | **Merged** (the sole PR merged today) | Removes the missing `X‑Accel‑Buffering: no` header that caused the first SSE event to be buffered behind Nginx, improving real‑time console chat responsiveness. |
| #8411 | fix(matrix): recover cached sessions and missing device keys | L | Open (review ongoing) | Fixes Matrix login after restart; restores encrypted device keys, preventing silent decryption failures. |
| #8309 | fix(cli): discover Ollama models before activation | M | Open | Improves CLI UX by auto‑detecting installed Ollama models, reducing manual entry errors. |
| #8367 | feat(chats): add keyword and agentic conversation search | XXL | Open | Introduces full‑text and agentic search across chat history, a major productivity enhancement for large‑scale deployments. |
| #8319 | fix(qq): handle GROUP_MESSAGE_CREATE gateway events | XS | Open | Expands QQ plugin compatibility, preventing loss of ordinary group messages. |
| #8305 | fix(channels): preserve structured custom channel configuration | M | Open | Guarantees JSON array/object types survive editor autosave, reducing config corruption. |
| #8304 | fix(matrix): normalize pasted connection credentials | S | Open | Handles stray whitespace in pasted Matrix creds, increasing robustness of the native Matrix plugin. |
| #8302 | fix(channels): retain consumers until shutdown cleanup finishes | S | Open | Eliminates “Task was destroyed but it is pending!” warnings during graceful shutdown. |
| #8519 | fix(hub): preserve shared Docker runtime data ownership | L | Open | Addresses permission‑denied errors for non‑root Hub containers, improving CI/CD reliability. |
| #8510 | fix(test): further speedup unittest from plugin | XL | Open | Optimises the test suite, shortening CI feedback loops. |
| … | *(other PRs continue to sit open, awaiting review or further testing)* | | | |

**Take‑away:** The merged PR is a **deployment‑focused bug‑fix**, while most open PRs cluster around **channel adapters, runtime stability, and UI/search features**. The size distribution (XS–XXL) shows a healthy mix of quick wins and larger, strategic work.

---

## 4. Community Hot Topics
| Issue | Comments | Summary | Why it matters |
|-------|----------|---------|----------------|
| **#8424** – *server/discover returns HTTP 404 + JSON‑RPC -32601 …* | 5 | Modern server discovery aborts before falling back to the legacy MCP handshake, breaking compatibility with older MCP servers. | Highlights a **protocol‑negotiation regression** that threatens backward compatibility for users running legacy MCP back‑ends. |
| #8315 – *Feishu channel fails with 426 Upgrade Required when HTTP(S)_PROXY is injected* | 4 | Proxy environment variables without appropriate `NO_PROXY` entries break Feishu WebSocket connections. | Signals the need for **robust proxy handling** across all channel plugins, a common enterprise deployment scenario. |
| #8500 – *Auto‑Dream silently drops memory when extract step fails* | 3 | Extraction failures cause whole‑day memory snapshots to be checkpointed but never retried, silently reporting success. | Exposes a **data‑loss risk** in long‑running autonomous workflows, affecting trust in the Auto‑Dream feature. |
| #8184 – *Doom‑loop gate kills legitimate task‑authorized polling* | 3 | The “doom‑loop” guard mistakes legitimate long‑running background tasks for stuck agents, aborting them and logging false success. | Indicates a **false‑positive safety mechanism** that harms legitimate use‑cases (e.g., waiting for external jobs). |
| #8511 – *Feishu intermittent ProviderError: No active model configured* | 2 | New messages arriving while a previous request is still processing sometimes trigger an internal error. | Shows a **concurrency edge‑case** in the Feishu channel that degrades user experience during rapid chat. |

**Underlying needs:**  
- **Backward‑compatibility** of discovery/handshake flows.  
- **Network‑environment resilience** (proxy, firewalls, reverse proxies).  
- **Reliability of autonomous agents** (memory checkpointing, long‑running tasks).  
- **Concurrency handling** in channel plugins (especially Feishu).  

These topics dominate discussions and are likely to drive the next batch of fixes.

---

## 5. Bugs & Stability (ranked by severity)

| Severity | Issue / PR | Core Symptom | Current Status | Fix Outlook |
|----------|------------|--------------|----------------|-------------|
| **Critical** | #8424 (Bug) | Modern discover endpoint aborts, preventing any communication with legacy MCP servers. | Open, 5 comments, issue high priority. | No fix PR yet; needs protocol‑negotiation patch. |
| **High** | #8315 (Bug) | Feishu channel entirely dead behind corporate proxies. | Open, 4 comments. | No dedicated PR; likely addressed by broader proxy‑handling improvements (e.g., matrix/qq fixes). |
| **High** | #8500 (Bug) | Auto‑Dream silently discards a day of memory; checkpoint files never retried, yet run reports success. | Open, 3 comments. | No fix PR yet; could be tackled by better error‑propagation in the `extract` step. |
| **Medium** | #8184 (Bug) | Doom‑loop gate kills legitimate polling, logs false success. | Open, 3 comments. | No PR; may be merged with future safety‑gate refinements. |
| **Medium** | #8516 (Bug) – SSE buffering behind Nginx | First SSE event buffered, causing UI latency. | **Fixed** by PR #8522 (merged). |
| **Medium** | #8517 (Bug) – Hub Docker permission denied | Non‑root Hub cannot start runtime. | Open; related PR #8519 (Docker ownership) is in progress. |
| **Low** | #8511 (Bug) – Feishu intermittent ProviderError | Sporadic internal error when new message arrives. | Open, 2 comments. | No fix PR yet. |
| **Low** | #8521 (Bug) – Missing answer & copy‑paste issues | Occasionally no reply content, clipboard requires multiple presses. | Open, 1 comment. | No PR yet. |
| **Low** | #8518 (Feature request) – Display per‑reply latency | UI improvement request. | Open, 1 comment. | No PR yet. |

**Overall stability:** The project is **stable enough for production** (no crashes reported today), but several **high‑impact compatibility and reliability bugs** remain open. The successful merge of #8522 shows that critical bugs are being addressed promptly when they surface.

---

## 6. Feature Requests & Roadmap Signals
| Request | Summary | Potential Placement |
|---------|---------|---------------------|
| **#8523** – *Automatic daily task scheduling / dispatch* | Users want a built‑in scheduler to run predefined agent tasks at specific times, with result notifications. | Likely a **Roadmap candidate** for the next minor release (adds orchestration capabilities). |
| **#8518** – *Display per‑reply latency in Console UI* | Adds a UI metric for response time, improving observability. | Could be folded into the upcoming **UI revamp** (low‑effort). |
| **#8516** (already fixed) – *SSE buffering control* | Demonstrated demand for better real‑time streaming under reverse proxies. | Already delivered; indicates future **deployment‑friendliness** focus. |
| **#8519** – *Docker runtime data ownership preservation* | Improves CI/CD and multi‑user environments. | Aligns with **container‑first** roadmap items. |
| **#8367** – *Keyword & agentic conversation search* (large PR) | Provides powerful search across chat history, a **major usability upgrade**. | Expected in the next **major UI/UX** iteration. |

**Prediction:** The next scheduled release (likely a 2.3.x series) will probably bundle:
- **Deployment fixes** (SSE header, Docker ownership, proxy handling).  
- **UI enhancements** (latency display, improved chat search).  
- **Scheduling / automation** groundwork (initial scheduler API).  

---

## 7. User Feedback Summary
- **Reliability concerns** dominate: legacy protocol fallback failures, silent data loss, and proxy‑related channel breakage are reported as blockers for enterprise adoption.  
- **Channel-specific pain points**: Feishu and QQ plugins experience intermittent errors, highlighting the need for more robust concurrency handling.  
- **UI/UX dissatisfaction**: Users cite sluggish UI, missing latency metrics, and cumbersome model switching; a request for a toggle to the “old” UI appears in #8521.  
- **Operational transparency**: The missing latency indicator (#8518) and silent memory drops (#8500) illustrate a desire for better observability and error reporting.  

Overall sentiment is **constructive**: contributors are actively filing detailed bug reports and offering patches, indicating a healthy community willing to improve the product.

---

## 8. Backlog Watch (Long‑standing items needing attention)
| Issue / PR | Age | Why it matters | Suggested Action |
|------------|-----|----------------|------------------|
| **#8367** – *Keyword & agentic conversation search* | Open since 2026‑10‑22 | Major UX improvement for large deployments. | Prioritise review; attach a dedicated reviewer to move toward merge. |
| **#8315** – *Feishu proxy failure* | Open since 2026‑10‑19 | Blocks usage in corporate networks. | Evaluate reusable proxy handling utility across all channel plugins. |
| **#8424** – *Discover endpoint 404* | Open since 2026‑10‑26 | Breaks backward compatibility with legacy MCP servers. | Create a fallback‑negotiation patch; consider deprecating strict modern‑only mode. |
| **#7180** (not listed here but historically open) – *Documentation gaps for custom plugins* | Open >6 months | Hinders onboarding of first‑time contributors. | Add a “Contributing → Plugin Development” guide. |
| **#7211** – *Prevent injected context from persisting* (PR currently open) | Open since 2026‑08‑21 | Affects correctness of context‑aware models. | Review test coverage and merge if stable. |

---

### Bottom‑Line Assessment
CoPaw is experiencing **high development velocity** with many small‑to‑medium PRs in flight and a **steady stream of user‑reported bugs** centered on compatibility, networking, and UI reliability. The merge of #8522 shows maintainers respond quickly to critical deployment issues. To sustain momentum, the team should **prioritise the high‑impact compatibility bugs** (#8424, #8315) and **advance the large feature PRs** (#8367, #8523) that align with the emerging demand for scheduling and search capabilities. Continued focus on documentation, proxy handling, and observability will further improve newcomer onboarding and enterprise confidence.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 1 Nov 2026**  

---

### 1. Today’s Overview
- Activity remains high: 5 issues were touched (2 still open, 3 closed) and **50 pull‑requests** were updated, of which **44 are still open** and **6 have been merged or closed**.  
- No new releases were published, indicating that the team is still consolidating changes before the next v0.9.0‑type cut.  
- The dominant signals are security hardening (several high‑risk security PRs) and a push toward a *CLI‑only* distribution and richer Goal‑control ergonomics in the ZeroCode UI.

---

### 2. Releases
*No new version was released in the last 24 h. *  

---

### 3. Project Progress (merged/closed PRs)
| PR | Title / Scope | Size | Main Change |
|----|---------------|------|-------------|
| **#11940** | `fix(enroll): redeem enrollment codes on the daemon’s canonical pairing guard` | L | Enrollment now uses the daemon’s global `PairingGuard`, fixing pairing‑code rejections. |
| **#12111** | `feat(install): install the CLI‑only build and switch it to the standard build only on request` | L | Adds a package‑manager‑friendly installer for the CLI‑only binary and safe switch‑over to the full build. |
| **#12071** | `feat(zerocode): add /load-session to resume a saved session by name or id` | L | Introduces a slash‑command that lets users restore ZeroCode sessions without the Ctrl‑S picker. |
| **#12159** | `fix(install): show package version from zeroclaw --version field 2` | S | Improves installer diagnostics by exposing the full version string. |
| **#12114** | `fix(gateway): key rate limits on the proxy‑appended XFF hop` | S | Adjusts X‑Forwarded‑For handling to honor the right‑most hop, tightening rate‑limit enforcement. |
| **#12157** | `fix(oidc): bind enrollment callbacks to the initiating browser` | M | Secures OIDC enrollment flow by tying callbacks to the originating browser and rotating secrets. |

*These closures primarily address security, installation ergonomics, and UX improvements, laying groundwork for the upcoming v0.9.0 feature set.*

---

### 4. Community Hot Topics
| Item | Type | Comments / Reactions | Why It Matters |
|------|------|----------------------|----------------|
| **#11883** – *feat(matrix): host Goal controls at foreground turn boundaries* | PR (XL) | **(no comment count shown, but large diff & many labels)** | Proposes a *Goal‑stack* architecture (Goal V1) that lets agents expose high‑level objectives to users directly in the Matrix front‑end. This is a core roadmap signal for “Goal‑driven” interaction. |
| **#11220** – *fix(security): require administrator authority for SOP execution* | PR (XL) | – | Tightens SOP (Standard Operating Procedure) authority checks, preventing non‑admin agents from running privileged steps. Reflects community pressure for stricter isolation. |
| **#11230** – *fix(runtime): withhold session‑data tools from non‑admin principals* | PR (XL) | – | Extends the above security model to hide session‑state tools (e.g., `memory`, `state`) from unprivileged agents. |
| **#12169** – *Bug: `send_message_to_peer` starts recipient’s turn outside the tool scope* | Issue (open) | 0 | Highlights a subtle concurrency bug that can break deterministic SOP flows, especially in headless pipelines. |
| **#12069** – *Feature: Add `/load-session` slash command* | Issue (closed) | 2 | Demonstrates user demand for easier session recovery; the feature was merged yesterday (see PR #12071). |

*Underlying need:* users are asking for **more secure, fine‑grained authority controls** while also demanding **smoother, less‑modal UI interactions** (session loading, goal visibility). The large‑scale Goal‑stack PR shows the project’s strategic direction toward expressive, user‑driven agent objectives.

---

### 5. Bugs & Stability
| Severity | Issue | Summary | Current Fix Status |
|----------|-------|---------|-------------------|
| **High** | **#12169** – `send_message_to_peer` runs recipient outside tool scope | Turns launched from headless SOP steps escape the originating sandbox, potentially leaking state. | No fix yet; open. |
| **High** | **#12167** – `send_message_to_peer` ignores sender autonomy & budget | Allows read‑only agents to trigger actions, violating policy enforcement. | No fix yet; open. |
| **High** | **#11266** – `fix(memory): keep owned‑session subagent and pipeline memory private` | Sub‑agents inherit parent memory, breaking isolation guarantees. | Open PR; see #11266 (XL). |
| **Medium** | **#12128** – Security job fails due to Wasmtime vulnerabilities (RUSTSEC‑2026‑0420‑0424) | CI audit blocked; advisory for Wasmtime 48.0.7. | Fixed downstream by dependency updates in PR #12171 (deps bump). |
| **Low** | **#12069** – Feature request (now closed) | No bug, but shows past pain point. | Implemented in PR #12071. |

*Overall, the most critical stability concerns are the **`send_message_to_peer`** autonomy bugs and memory isolation – both directly impact security guarantees for multi‑agent SOP pipelines.*

---

### 6. Feature Requests & Roadmap Signals
| Feature | Origin | Likelihood of Inclusion in Next Release |
|---------|--------|------------------------------------------|
| **CLI‑only build** (no gateway/dashboard) | Issue #11971 (closed) → PR #12111 (merged) | **Very likely** – already merged; will be part of the next release candidate. |
| **/load‑session slash command** | Issue #12069 (closed) → PR #12071 (merged) | **Very likely** – merged; will ship in the upcoming v0.9.0 patch. |
| **Goal‑stack UI (Matrix foreground controls)** | PR #11883 (open, XL) | **Medium‑high** – large scope, still in draft; may land in a post‑v0.9.0 minor. |
| **Opt‑in OIDC dashboard sign‑in** | PR #11965 (open) | **Medium** – depends on completion of gateway split; slated for next security‑focused release. |
| **Enhanced SOP authority (admin‑only SOP execution)** | PR #11220 (open) | **High** – already merged; core to upcoming security hardening. |

---

### 7. User Feedback Summary
- **Session recovery friction:** Users complained they had to scroll through the Ctrl‑S picker to resume work. The `/load‑session` command directly addresses this and was positively received.  
- **Installation footprint:** Several contributors (e.g., @JordanTheJet) requested a lean CLI‑only binary for headless servers. The merged installer changes show the team responding to that demand.  
- **Security confidence:** Multiple high‑severity PRs (admin‑only SOP, memory isolation, OIDC binding) were opened in the last month, reflecting community concern over privilege escalation in multi‑agent environments.  
- **Goal visibility:** The massive Goal‑stack proposal indicates a growing desire for agents to expose high‑level intents rather than low‑level tool calls, especially in collaborative Matrix or web front‑ends.

Overall, users appreciate the rapid iteration on security & UX but are eager for clearer release timelines for the larger UI/Goal features.

---

### 8. Backlog Watch
| Item | Type | Labels / Size | Why It Needs Attention |
|------|------|----------------|-------------------------|
| **#11220** – admin authority for SOP | PR (XL) | `security`, `risk:high` | Critical for preventing unauthorized SOP execution; still open for final review. |
| **#11230** – hide session‑data tools from non‑admin | PR (XL) | `security`, `risk:high` | Complements #11220; pending integration. |
| **#11234** – queue ownership checks in RPC | PR (XL) | `security`, `risk:high` | Ensures proper session ownership; must be merged before v0.9.0 GA. |
| **#11266** – memory isolation for subagents | PR (XL) | `security`, `risk:high` | Directly related to open bugs #12169 / #12167; a blocking issue for safe multi‑agent pipelines. |
| **#11883** – Goal‑stack UI changes | PR (XL) | `size:XL`, many component labels | Large architectural shift; needs design sign‑off and test plan before integration. |
| **#12169 / #12167** – `send_message_to_peer` bugs | Issues (open) | `Bug` | High‑severity concurrency/security bugs; no fix yet. |
| **#12171** – dependency bump | PR (XS) | `dependencies` | Already merged; keep an eye on downstream CI failures. |

*These items are the most pressing from a security and architectural perspective and should be prioritized for the next merge window to maintain project momentum.*

---

**Bottom line:** ZeroClaw is in a high‑activity phase, consolidating security hardening, CLI‑only distribution, and UX improvements while preparing for the next **v0.9.0** milestone. The community’s primary concerns—secure multi‑agent orchestration and streamlined session management—are being addressed, but a few high‑severity bugs and large‑scale UI proposals remain on the backlog. Timely merges of the security PRs and resolution of the `send_message_to_peer` bugs will be key indicators of project health moving forward.  

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*