# OpenClaw Ecosystem Digest 2026-10-25

> Issues: 133 | PRs: 500 | Projects covered: 12 | Generated: 2026-10-25 04:18 UTC

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

**OpenClaw – Project Digest (2026‑10‑25)**  

---

### 1. Today’s Overview  
- The OpenClaw ecosystem is **highly active**: 133 issues were touched in the last 24 h (115 still open) and **500 PRs** were updated, of which **298 have been merged or closed**.  
- Two releases landed this week (v2026.10.7 and the “extended‑stable” v2026.9.34), both delivering a raft of stability fixes and the first support for the new **Replay‑Safe session recovery** feature.  
- While the volume of activity is encouraging, the issue stream is dominated by **critical data‑integrity and startup‑performance regressions** that are currently blocking several gateway deployments, especially on Windows.

---

### 2. Releases  

| Version | Date | Highlights | Breaking changes / migration |
|---------|------|------------|------------------------------|
| **v2026.10.7** | 2026‑10‑07 | • *Replay‑safe session recovery*: interrupted runs now retain provenance, unfinished tool outcomes are cleaned before the next turn.<br>• Improved handling of rejected Claude‑CLI drafts, reduced residual state.<br>• Large‑model‑support shims added. | No required config changes; existing sessions will be auto‑migrated on first start‑up. |
| **v2026.9.34** (gateway‑only “extended‑stable”) | 2026‑09‑30 | • Security patches and reliability fixes (WAL checkpointing, state‑lock handling).<br>• New model‑catalog extensions (NVIDIA, custom decision providers).<br>• Minor performance improvements for plugin capture. | Operators using the **gateway‑only** mode should verify that any custom plugin‑capture pipelines are re‑run after upgrade, because the internal plugin‑capture workflow was altered. |

Full changelogs can be viewed on the GitHub releases page:
- https://github.com/openclaw/openclaw/releases/tag/v2026.10.7  
- https://github.com/openclaw/openclaw/releases/tag/v2026.9.34  

---

### 3. Project Progress (PRs)  

- **298 PRs merged/closed** in the last day – a clear sign that the maintainers are draining the backlog fast.  
- Notable *merged* work (all merged before 2026‑10‑25 but counted in today’s “merged/closed” total):  
  - **#164843** – Fixed loss of messages that arrived while a transcript projection was being rebuilt. This directly addresses the “inter‑session message loss” problem reported in Issue #144594.  
  - **#183018** – UI security fix that prevents non‑admin users from being offered “Request admin” actions they cannot satisfy.  
  - **#183184** – Optimized memory‑search diagnostics, cutting two extra count‑queries per warm search.  
  - **#183189** – Restored Bun‑based WebSocket proxy support, closing #161522.  
  - **#183224** – Introduced experimental AOT‑build modes for the standalone builder, expanding the developer‑tooling surface.  

These merges mostly focus on **stability, security, and developer ergonomics**, reflecting the community’s demand for a reliable production gateway.

---

### 4. Community Hot Topics  

| Rank | Issue / PR | Comments | Labels (severity) | Link | Core need |
|------|-------------|----------|-------------------|------|-----------|
| 1 | **#143524** – SQLite WAL blows to ≈ 2.8 GB on Windows | 135 | P0 🦪 silver shellfish, **crash‑loop**, **message‑loss** | https://github.com/openclaw/openclaw/issues/143524 | Durable storage reliability; Windows‑specific WAL checkpointing. |
| 2 | **#160959** – Gateway blocks for minutes when capturing large external plugins (regression introduced in 2026.9.6) | 53 | P0 🦞 diamond lobster, **crash‑loop** | https://github.com/openclaw/openclaw/issues/160959 | Plugin‑capture performance; non‑blocking event loop. |
| 3 | **#164294** – WAL auto‑checkpoint for gateway state DB never completes (pinned by in‑process reader) | 31 | P2 🦪 silver shellfish | https://github.com/openclaw/openclaw/issues/164294 | Core DB health; need better concurrency handling. |
| 4 | **#168955** – Startup regression on Windows (ready ≈ 1030 s vs ≈ 410 s) | 19 | P1 🦪 silver shellfish | https://github.com/openclaw/openclaw/issues/168955 | Faster boot; sidecar asset loading optimisation. |
| 5 | **#67413** – Per‑agent “dreaming” configuration request (memory‑core) | 14 | P2 🌊 off‑meta tidepool | https://github.com/openclaw/openclaw/issues/67413 | Granular resource control; memory‑spike mitigation. |
| 6 | **PR #164843** – Recover messages sent during transcript rebuild (high‑impact fix) | – | P1 🦐 gold shrimp | https://github.com/openclaw/openclaw/pull/164843 | Guarantees message delivery during recovery. |

**Analysis:** The top‑ranked items all revolve around **SQLite WAL management** and **gateway start‑up latency**, especially on Windows. This suggests that the current checkpointing logic and plugin‑capture pipeline are not scaling with large agent counts or heavy plugin dependency trees. The community is also pushing for **more granular per‑agent configuration** (dreaming, abort triggers) to avoid OOM scenarios in multi‑agent deployments.

---

### 5. Bugs & Stability (ranked by severity)

| Severity | Issue | Summary | Status / Fix outlook |
|----------|-------|---------|----------------------|
| **Critical (P0)** | **#143524** – Agent WAL grows unbounded (Windows) | WAL file reaches >2 GB within days; blocks gateway startup. | Open, no fixing PR yet. High‑priority triage needed. |
| **Critical (P0)** | **#160959** – Gateway hangs minutes while capturing large external plugins | Event loop blocked during plugin source‑capture; regression since 2026.9.6. | Open; likely to be addressed in upcoming **#183226** performance PR (reduce plugin‑blob reads). |
| **High (P1)** | **#168955** – Startup 2‑× slower on Windows (sidecars.control‑ui‑assets) | Ready time > 1000 s, sidecar asset loading stalls. | Open; no dedicated PR yet. |
| **High (P1)** | **#182476** – `update repair` fails with `OPENCLAW_STATE_LEASE_LOST` | Repair flow loses lease during plugin finalisation; gateway becomes unstable. | Open; no fix PR visible. |
| **Medium (P2)** | **#164294** – WAL auto‑checkpoint never finishes (gateway state DB) | Persistent `PASSIVE blocked by a reader`. | Open; may be linked to **#164948** (self‑deadlock in `doctor --fix`). |
| **Medium (P2)** | **#165391** – Control UI shows mismatched session row count | Dashboard inflation; cosmetic but confusing. | Open; no PR yet. |
| **Medium (P2)** | **#154...** – Various “session‑state” anomalies (e.g., #144594, #153426, #148978) | Inter‑session message loss, curated memory roots silently dropped, active‑memory recall skipped. | Some have partial fixes (e.g., #164843). |

*Fix PRs that directly target the above:* only **#164843** (message‑recovery) has landed. The rest remain open, signalling a **gap between issue reporting and remediation** that could affect production users.

---

### 6. Feature Requests & Roadmap Signals  

| Request | Core benefit | Likelihood of inclusion (next minor) |
|---------|--------------|--------------------------------------|
| **#67413** – Per‑agent dreaming config (memory‑core) | Prevent OOM spikes; give operators fine‑grained control. | **High** – aligns with recent memory‑core focus; likely to appear in a 2026.10.x patch. |
| **#55372** – Config option to disable restart‑sentinel notifications | Reduce noise for automated deployments. | **Medium** – low engineering effort; could be bundled with UI‐notification cleanup. |
| **#166678** – Hide agents from picker while keeping them spawnable | Cleaner UI for large orgs. | **Medium‑High** – UI‑related work is already in progress (see PRs #183067, #183231). |
| **#165685** – Machine‑readable reason on registry‑settled yielded collector | Improves observability for developers. | **Medium** – diagnostic enhancements are part of the “observability” thrust (see PR #183186). |
| **#166729** – Custom decision‑model providers in `models.providers` | Extends decision‑model ecosystem beyond built‑in providers. | **Medium** – analogous to NVIDIA model support added in v2026.9.34; may land in a future “model‑catalog” update. |
| **#166686** – Per‑agent accent colors in UI | Better visual distinction for multi‑agent panes. | **Low‑Medium** – UI polish items are lower priority compared to stability fixes. |

Overall, **resource‑control** (dreaming, abort triggers) and **observability** (diagnostic reasons, cost on model call events) are the strongest signals for the next release cycle.

---

### 7. User Feedback Summary  

- **Windows reliability** is the dominant pain point: WAL growth, extremely slow gateway start‑up, and state‑lease losses are repeatedly cited.  
- **Plugin ecosystem friction**: large external plugins block the event loop; developers request *non‑blocking capture* and *smaller memory footprints* (issues #160959, #162585).  
- **UI/UX fatigue**: mismatched session counts, duplicated assistant messages, and noisy restart notifications are confusing end‑users (#165391, #164895, #55372).  
- **Memory‑core dreaming** is both a feature and a bug: when enabled globally it overwhelms memory, but users also experience silent drops of curated roots (issues #153426, #138561).  
- **Observability gaps**: missing `model.usage` events on channel overrides (#164562) and double‑firing events (#166289) hinder cost tracking.  

Overall sentiment is **highly engaged but increasingly frustrated by regressions that threaten production stability**. The community values rapid fixes (evidenced by fast comment turnover) and clear migration guidance.

---

### 8. Backlog Watch (Stale / Unanswered Items)  

| Issue | Age / Stale flag | Reason for concern | Needed action |
|-------|------------------|--------------------|---------------|
| **#127195** – Identical “changed while starting work” error across 16 call sites | Open, **stale** (no recent activity) | No diagnostics → root‑cause unknown; may affect many production agents. | Assign a maintainer for deep logging / add error code. |
| **#166486** – `decision_evaluate` rejects `score` questions (schema bug) | Open, **stale** | Decision tool is a key extensibility point; broken for a whole question type. | Review schema, add validation for `score`. |
| **#166574** – Restore session‑local structured planning for sub‑agents | Open, **stale** | Sub‑agent orchestration is a roadmap pillar; missing feature reduces composability. | Prioritise in the next planning sprint. |
| **#166688** – Identify unusable `web_fetch` pages with opt‑in Decision assistance | Open, **stale** | High false‑positive load on agents; quality‑of‑search impact. | Prototype a “page‑quality” check. |
| **#165685** – Machine‑readable reason on registry‑settled yielded collector | Open, **stale** | Observation & debugging of yielded rows is limited. | Add to diagnostics backlog. |
| **#164870** – Configurable plain‑text abort triggers | Open, **stale** | Hard‑coded abort list hampers localization & custom workflows. | Simple config addition, low effort. |
| **#166336** – `automations` tool silently vanishes organization‑wide mid‑session | Open, **stale** | Automation reliability; potential data loss. | Add logging of authority resolution. |

These items have **low recent comment volume** yet address **core reliability, observability, or extensibility** concerns. Prompt maintainer attention will prevent them from becoming future blockers.

---

**Bottom line:** OpenClaw remains a vibrant, fast‑moving project with a healthy PR throughput, but the **Windows WAL and plugin‑capture regressions** are the most immediate risks to production deployments. Prioritising fixes for those, coupled with the requested per‑agent resource controls, will likely restore confidence and keep the community momentum strong.

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison – Open‑Source Personal‑AI‑Assistant Ecosystem (as of 2026‑10‑25)**  

---

### 1. Ecosystem Overview  
The open‑source AI‑assistant landscape is fragmented across several language runtimes (Rust, Go, TypeScript, Python) but united by a common goal: provide a **self‑hosted, extensible gateway** that can orchestrate large‑language‑model (LLM) calls, tool execution, and multi‑agent coordination.  Over the past month the community has been spending the majority of its effort on **stability, security hardening, and plug‑in/skill ecosystems**, while the “core‑reference” projects (OpenClaw, ZeroClaw) continue to drive architectural decisions that the lighter‑weight agents (NanoBot, CoPaw, Hermes Agent) adopt.  This results in a healthy, if still‑maturing, ecosystem that is gradually converging on a few shared non‑functional requirements (persistent memory, sandboxed tool execution, cost observability).

---

### 2. Activity Comparison  

| Project | Issues (open / touched 24 h) | PRs (open / touched 24 h) | Release status (last ≤ 30 d) | Health score* |
|---------|-----------------------------|----------------------------|-----------------------------|----------------|
| **OpenClaw** | 115 open / 133 touched | 500 PRs, 298 merged/closed today | v2026.10.7 (Oct 7) & v2026.9.34 (Sep 30) | **9** |
| **ZeroClaw** | 5 open / 5 touched | 29 PRs, 27 still open | No tag yet (RC v0.8.7‑rc) | **8** |
| **Hermes Agent** | 12 updated / 0 new | 50 PRs, 46 open | No tag (v0.22.5 latest) | **7** |
| **CoPaw** | 6 open / 0 new | 10 PRs, 9 open | No tag (stable 0.x) | **7** |
| **NanoBot** | 4 updated / 0 new | 38 PRs, 31 open | No new release (last ≥ 30 d) | **6** |
| **PicoClaw** | 0 new (activity only in PRs) | 7 PRs (6 merged) | No release | **6** |
| **NanoClaw** | 0 new (only PR activity) | 9 PRs (1 closed) | No release | **5** |
| **LobsterAI** | 2 open (account‑appeal) | 3 PRs (all merged) | No release (latest build Oct 23) | **5** |
| **NullClaw** | 0 | 0 | – | **2** |
| **IronClaw** | 0 | 0 | – | **2** |
| **Moltis** | 0 | 0 | – | **2** |
| **ZeptoClaw** | 0 | 0 | – | **2** |

\*Health score (0‑10) integrates **issue severity**, **PR throughput**, and **release cadence** – a higher number indicates a fast‑moving, well‑maintained code base with visible mitigations for critical bugs.

---

### 3. OpenClaw’s Position  

| Dimension | OpenClaw | Typical Peer |
|-----------|----------|--------------|
| **Core focus** | Production‑grade **gateway** with SQLite WAL, checkpointing, and “Replay‑Safe session recovery”. | Most peers (NanoBot, CoPaw, Hermes) provide a *light‑weight client* that delegates persistence to an external gateway. |
| **Technical approach** | Rust‑based, single‑binary, **WAL‑driven ACID semantics**, explicit plugin‑capture pipeline, AOT‑build mode. | NanoBot & CoPaw are TypeScript/Python with *in‑process* memory; Hermes uses a mixed desktop‑gateway architecture; ZeroClaw also uses Rust but still in RC. |
| **Community size** | ~133 active issues, 500 PRs in 24 h – by far the **largest contributor base**. | ZeroClaw (29 PRs) is the second‑largest; others range 4‑12 issues a day. |
| **Strengths vs peers** | • Proven **data‑integrity** layer (WAL checkpointing).<br>• Fast **session‑recovery** without manual migration.<br>• Broad **model‑catalog** extensions (NVIDIA, custom providers). | • Smaller runtimes are easier to embed but lack OpenClaw’s robust crash‑recovery.<br>• Peers excel in UI polish and rapid feature prototyping. |
| **Weaknesses vs peers** | • **Windows‑specific WAL growth** and startup latency remain open blockers.<br>• Heavy dependency on SQLite makes cross‑platform tuning harder.<br>• Less focus on **sandboxing** and PII‑privacy features that newer agents prioritize. |

Overall, OpenClaw is the **de‑facto reference implementation** for enterprise‑grade gateways, while the other projects position themselves as **plug‑and‑play clients** or **domain‑specific extensions**.

---

### 4. Shared Technical Focus Areas  

| Need | Projects Mentioning It | Typical Request |
|------|------------------------|-----------------|
| **Reliability / Startup‑time** | OpenClaw (WAL & Windows latency), ZeroClaw (context‑window handling), LobsterAI (cold‑start profiling), NanoBot (session‑lock leak) | Faster boot, deterministic checkpointing, no blocking I/O. |
| **Security & Sandbox** | NanoBot (sandboxing PR #2569), NanoClaw (log redaction, payload escaping), ZeroClaw (npm‑audit, PowerShell parsing), Hermes (read‑only lease protection) | OS‑level sandbox, credential vault, safe CLI parsing. |
| **Persistent / Attributed Memory** | OpenClaw (dreaming config, per‑agent memory), ZeroClaw (knowledge‑graph attribution), CoPaw (ReMe integration, per‑agent memory), Hermes (doc‑chain proposal) | Cross‑session memory that survives restarts, per‑agent scoping, compaction. |
| **Plugin / Skill Ecosystem** | OpenClaw (plugin‑capture performance, AOT build), CoPaw (Matrix & QQ channel, plugin hooks), ZeroClaw (plugin RPC forwarding, binary hooks), NanoClaw (skill catalog, ProtonMail) | Standardized plugin API, non‑blocking capture, versioned skill registry. |
| **Configuration & Deployment Ergonomics** | PicoClaw (.env loading, Docker‑Compose), NanoBot (restart‑sentinel mute), CoPaw (server‑side UI defaults), ZeroClaw (Cargo & Vite upgrades) | `.env` support, container‑first stacks, central UI defaults. |
| **Observability & Cost Transparency** | OpenClaw (model‑usage events), NanoBot (model‑usage missing on overrides), ZeroClaw (OpenRouter balance toggle), LobsterAI (system‑prompt budgeting) | Structured telemetry, cost dashboards, provenance logs. |
| **Cross‑Platform UI Polish** | NanoBot (file‑card layout, thumbnails), CoPaw (assistant‑message folding), LobsterAI (IM settings redesign) | Consistent, responsive UI components across OSes. |

These themes indicate a **convergent roadmap**: the community is collectively moving toward **robust, observable, and secure agents that can retain knowledge across sessions**.

---

### 5. Differentiation Analysis  

| Project | Primary Feature Focus | Target Users | Architectural Highlights |
|---------|----------------------|--------------|--------------------------|
| **OpenClaw** | Enterprise gateway with ACID storage, replay‑safe recovery | Large‑scale deployments, SaaS‑style gateways | Rust binary, SQLite WAL, plugin‑capture pipeline, AOT‑build. |
| **ZeroClaw** | Memory‑first “knowledge‑graph” + plugin RPC, security‑audit focus | Developers building custom agents from Rust, heavy on privacy | Modular Rust workspace, per‑agent graph attribution, extensive CI audit. |
| **Hermes Agent** | Desktop + shared‑gateway, goal‑flow ergonomics, UI‑centric | End‑users who need a local desktop experience + remote gateway | Mixed Go/JS desktop client, `/handoff` RPC, UI goal skip logic. |
| **CoPaw** | Multi‑channel (Matrix, QQ, Discord) with per‑agent memory, Chinese market | Teams operating on multiple Chinese IMs, compliance‑heavy orgs | TypeScript core, ReMe memory v0.4, matrix‑session resilience. |
| **NanoBot** | Lightweight personal assistant, tool sandboxing, UI polish | Hobbyists & small‑team bots, rapid prototyping | Python backend, async tool pool, reversible‑PII de‑identification. |
| **NanoClaw** | Skill/channel catalogue, security hardening, email (ProtonMail) & Copilot integration | Enterprises needing a curated skill marketplace | Go backend, provider‑side env overrides, log redaction. |
| **LobsterAI** | Chinese IM & cost‑aware UI, startup latency fixes | Users of the NetEase/Youdao platform, mobile‑first audience | Hybrid Go + OpenClaw core, IM‑platform UI, risk‑control gating. |
| **PicoClaw** | Minor extensions to OpenClaw (Telegram, Anthropic, retries) | Operators needing a thin wrapper around OpenClaw | Go wrappers, Docker‑Compose, incremental provider fixes. |
| **Inactive projects** (NullClaw, IronClaw, Moltis, ZeptoClaw) | Minimal/no activity – mainly experimental forks. | N/A | N/A |

---

### 6. Community Momentum & Maturity  

| Tier | Projects | Characteristic |
|------|----------|----------------|
| **Rapid‑Iteration (high‑velocity, many merged PRs)** | OpenClaw, ZeroClaw, CoPaw | Daily PR merges, active issue triage, clear roadmap milestones. |
| **Stabilizing / Feature‑Polish** | NanoBot, Hermes Agent, LobsterAI | Fewer new issues, focus on UI/UX, incremental bug‑fix releases. |
| **Maintenance‑Only** | PicoClaw, NanoClaw | Mostly bug‑fix PRs, no new releases, small contributor pool. |
| **Dormant** | NullClaw, IronClaw, Moltis, ZeptoClaw | No activity in the last 24 h; could be archived or revived. |

Maturity can be read from **release cadence**: OpenClaw and ZeroClaw already have production‑grade releases; others are still on RC or pre‑v1.0.

---

### 7. Trend Signals (derived from community feedback)  

| Trend | Evidence Across Projects | What It Means for Developers |
|-------|---------------------------|-------------------------------|
| **Persistent, per‑agent memory** | OpenClaw (dreaming config), ZeroClaw (knowledge‑graph attribution), CoPaw (ReMe integration), Hermes (doc‑chain RFC) | Future agents will need built‑in, queryable memory stores that survive restarts and respect multi‑tenant isolation. |
| **Security‑first sandboxing** | NanoBot sandbox request, NanoClaw log redaction, ZeroClaw npm‑audit, Hermes read‑only lease protection | Deployments in regulated environments will prioritize OS‑level sandboxes, credential vaults, and immutable audit trails. |
| **Observability & cost control** | OpenClaw model‑usage events, ZeroClaw OpenRouter balance toggle, NanoBot missing usage events, LobsterAI system‑prompt budgeting | Tooling must expose structured telemetry (usage, latency, errors) to enable cost‑aware orchestration and debugging. |
| **Cross‑platform reliability (Windows & Linux)** | OpenClaw WAL growth on Windows, ZeroClaw PowerShell parser bug, CoPaw Windows newline handling, LobsterAI Windows opacity issue | Agents must treat OS‑specific quirks as first‑class citizens; tests on Windows, macOS, and Linux are becoming a baseline requirement. |
| **Plug‑in / skill marketplace** | OpenClaw plugin‑capture, ZeroClaw plugin RPC, NanoClaw skill catalogue, CoPaw channel extensions | Ecosystem health will rely on a **standardized plugin spec** (versioned, non‑blocking, reversible) and a discovery hub. |
| **Privacy‑aware data handling** | NanoBot reversible PII de‑identification, NanoClaw payload escaping, ZeroClaw audit‑db consistency | Regulations (GDPR, China PIPL) are shaping API contracts; agents need *de‑identification* and *redaction* as first‑class features. |

**Implication for AI‑agent developers:**  
- Adopt a **modular architecture** (gateway + client) that lets you replace the storage layer (SQLite, graph DB, etc.) without rewriting tooling.  
- Embed **sandboxed execution** early – many projects are moving to OS‑level isolation rather than regex filters.  
- Build **rich telemetry** (model usage, plugin health, cost) into the core; it is no longer optional.  
- Plan for **cross‑platform CI** that exercises Windows‑specific paths (WAL, line‑ending handling, UI opacity).  

---

**Bottom line:** The ecosystem is coalescing around **stable, observable, and secure gateways** (OpenClaw, ZeroClaw) while a vibrant second tier of **light‑weight, UI‑rich agents** (NanoBot, CoPaw, Hermes) experiment with new memory models, privacy controls, and plug‑in ecosystems.  Projects that can **bridge the gap**—offering enterprise‑grade persistence together with a developer‑friendly plug‑in API and robust sandboxing—will be best positioned to become the de‑facto platform for the next generation of self‑hosted AI assistants.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## NanoBot – Project Digest (2026‑10‑25)

### 1. Today’s Overview
- NanoBot remains **highly active**: 4 issues were updated and **38 PRs** saw activity in the last 24 h, reflecting a vigorous development pace.  
- The majority of the work is **maintenance‑focused** (bug fixes, UI polish, security hardening) with a handful of **new feature requests** emerging (sandboxing, reversible PII de‑identification, session‑scoped reasoning).  
- No new releases were cut yesterday, but a steady flow of PR merges is shaping the next release candidate.

---

### 2. Releases
> **No new version was published** in the last 24 h, so there are no change‑log items, breaking‑change notes, or migration guidance to report today.

---

### 3. Project Progress (Merged/Closed PRs)

| PR | Title / Scope | Main Impact | Status |
|----|----------------|------------|--------|
| **#6425** | *fix(webui): separate file cards from media previews* | UI clean‑up: file cards no longer stretch image galleries; layout is more predictable. | **Closed** |
| **#6437** | *fix(diagrams): upgrade Pele to 1.9.0* | Improves diagram rendering (Chinese labels, rich‑text). | **Closed** |
| **#6436** | *feat(webui): show image attachments as composer thumbnails* | Image files now appear as compact thumbnails above the composer, reducing visual clutter. | **Closed** |
| **#6442** | *fix(web): require ddgs 9.16.1 search fixes* | Pins the DuckDuckGo search library to a version that resolves the “empty‑result” bug. | **Closed** |
| **#6435** | *perf(webui): defer non‑chat startup interfaces* | Defers loading of rarely‑used UI components, noticeably speeding cold‑start on mobile. | **Closed** |
| **#6439** | *fix(api): release completed session locks* | Removes per‑session `asyncio.Lock` objects from the global dict once a session ends, preventing unbounded memory growth. | **Open** (work‑in‑progress) |
| **#6448** | *fix(tools): edit text files marked with a byte‑order mark* | Adds proper BOM detection/handling for UTF‑16/UTF‑32 files in `edit_file` and `apply_patch`. | **Open** |
| **#6447** | *fix(grep): search text declared by a byte‑order mark* | Enables grep to find patterns inside UTF‑16/UTF‑32 files and strips stray UTF‑8 BOMs. | **Open** |

> **Take‑away:** UI/UX polishing (file cards, image thumbnails, UI lag reduction) and **security/ stability** fixes (session‑lock leaks, search‑provider version pinning, Unicode handling) dominate today’s merges.

---

### 4. Community Hot Topics  

| Item | Type | Comments / Reactions | Why It’s Hot |
|------|------|----------------------|--------------|
| **#6285** – “web_search (ddgs): ambiguous failures look like empty results” | **Issue (Closed)** | 5 comments, 0 👍 | The default DuckDuckGo fallback broke consecutive searches, a pain point for users relying on the free provider. Fix landed in PR #6442. |
| **#2569** – “Add OS‑level sandboxing for tool execution via sandlock” | **Issue (Open)** | 2 comments, 1 👍 | Security model (regex‑based blocking) is deemed **bypassable**, prompting a request for real OS‑level sandboxing. Signals a shift toward hardened execution environments. |
| **#6440** – “feat(privacy): reversible PII de‑identification at the provider boundary” | **Issue (Open)** | 0 comments | Distinguishes **PII redaction** (one‑way) from reversible de‑identification, addressing GDPR‑type compliance concerns. |
| **#6438** – “API session lock registry grows without bound” | **Issue (Open)** | 0 comments | Direct memory‑leak risk for deployments with many short‑lived sessions. PR #6439 is the corresponding fix (still open). |
| **#6441** – “feat(webui): add session‑scoped reasoning effort” | **PR (Open, conflict)** | – | Users want to adjust the reasoning “effort” (temperature, top‑p) per‑conversation without mutating global presets. This reflects demand for finer control over LLM behavior. |

**Underlying needs**  
- **Reliability of tools** (search, filesystem) under varied usage patterns.  
- **Security & privacy** (sandboxing, reversible PII handling).  
- **Resource management** (session‑lock cleanup).  
- **Fine‑grained LLM control** (per‑session reasoning effort).

---

### 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue / PR | Description | Current Fix Status |
|----------|------------|-------------|---------------------|
| **Critical** | **#6438** – *API session lock registry grows without bound* | Unbounded `asyncio.Lock` dict leads to memory exhaustion on high‑traffic deployments. | Fix in PR #6439 (open). |
| **High** | **#6285** – *DuckDuckGo consecutive search failure* | Consecutive `web_search` calls incorrectly return “No results found”. | Fixed by pinning DDGS 9.16.1 in PR #6442 (merged). |
| **Medium** | **#6448** – *edit_file fails on UTF‑16/UTF‑32 with BOM* | Tool tries to decode non‑UTF‑8 files, raising errors. | PR #6448 open; patch pending review. |
| **Medium** | **#6447** – *grep treats UTF‑16/UTF‑32 as binary* | Pattern searches miss matches due to NUL bytes. | PR #6447 open; patch pending review. |
| **Low** | **#5880** – *oversized pending file reads after compaction* | Context‑window overflow when large `read_file` results survive history compaction. | PR #5880 open; pending review. |

---

### 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood of Inclusion in Next Release |
|--------|--------|----------------------------------------|
| **OS‑level sandboxing (`sandlock`)** | Issue #2569 | **High** – security is a top‑level priority; the issue has an up‑vote and explicit maintainer acknowledgment. |
| **Reversible PII de‑identification** | Issue #6440 | **Medium** – privacy compliance is gaining traction; may land in a dedicated “privacy” milestone. |
| **Session‑scoped reasoning effort UI** | PR #6441 | **Medium‑High** – UI work is already in progress; likely to ship once the underlying API flag is stable. |
| **Runcrate provider integration** | PR #6446 | **Low‑Medium** – provider additions are low‑risk, but the PR is still open; could be merged before the next release. |
| **Unified code/diff highlighting** | PR #6412 | **Medium** – refactor improves developer experience; pending conflict resolution. |

---

### 7. User Feedback Summary

| Pain Point | Evidence |
|------------|----------|
| **Tool reliability** – web search sometimes returns spurious “no results”. | Issue #6285 (5 comments) and the subsequent DDGS version pin. |
| **Security concerns** – current regex blocking can be evaded; users request true sandboxing. | Issue #2569 (up‑vote, discussion). |
| **Privacy handling** – conflation of secret redaction and PII de‑identification leads to over‑masking. | Issue #6440 (newly opened, no comments yet). |
| **Memory/scale** – API session locks accumulate, risking OOM on busy servers. | Issue #6438 & PR #6439. |
| **Unicode handling** – files with BOM cause crashes in edit/grep tools. | PRs #6447, #6448. |
| **UI ergonomics** – file cards overlapping image previews, missing thumbnails, slow mobile start‑up. | Closed PRs #6425, #6436, #6435. |

Overall sentiment: **users appreciate NanoBot’s flexibility** but are increasingly demanding **robust security, privacy, and scalability** as the platform is used in production‑grade settings.

---

### 8. Backlog Watch (Items Needing Maintainer Attention)

| Item | Type | Reason for Priority |
|------|------|---------------------|
| **#2569** – Sandbox via `sandlock` | Issue (Open) | Direct security impact; bypassable command blocking still present. |
| **#6440** – Reversible PII de‑identification | Issue (Open) | Legal/compliance relevance; could be a differentiator for enterprise users. |
| **#6438** – Session lock memory leak | Issue (Open) | Already has a fix PR (#6439) that must be merged quickly to avoid OOM. |
| **#6441** – Session‑scoped reasoning effort | PR (Open, conflict) | UI/UX improvement that many users request; pending conflict resolution. |
| **#6446** – Runcrate provider | PR (Open) | Adds a new OpenAI‑compatible gateway; low risk but expands provider ecosystem. |
| **#6412** – Unify code & diff highlighting | PR (Open, conflict) | Improves code‑review experience; conflicts must be cleared before merge. |
| **#6448 / #6447** – BOM handling for edit & grep | PRs (Open) | Prevents hidden crashes on non‑UTF‑8 files; should be merged together. |
| **#6194** – Release idle session locks (related to #6438) | PR (Open) | Duplicate effort; maintainers should decide which approach to adopt. |
| **#5314** – Decode nested JSON tool arguments | PR (Open) | Improves cross‑provider compatibility; moderate effort, but useful for tool ecosystem. |

**Recommendation:** Prioritize merging **#6439** (session‑lock cleanup) and **#2569** (sandboxing) before the next stable release, as they address **critical security and stability** concerns. Follow up on the Unicode‑BOM fixes (#6447, #6448) to prevent regressions for power‑users handling diverse file encodings.

--- 

*All links point to the respective GitHub items (e.g., `https://github.com/HKUDS/nanobot/issues/6285`).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑10‑25)**  
*Compiled from GitHub activity (issues, PRs, releases) for the `NousResearch/hermes-agent` repository.*

---

## 1. Today’s Overview
- Development momentum remains high: 12 issues received updates and **50 pull‑requests** were touched in the last 24 h, with **46 still open**.  
- No new tagged release was cut, indicating the team is still polishing the next minor version (≈ v0.22.5‑next).  
- Most activity clusters around the **desktop client, gateway stability, and the new plugin‑catalog**, while a handful of security‑related tickets have been opened, showing growing attention to supply‑chain hardening.

---

## 2. Releases
*No new version was published on 2026‑10‑25.*  
The current stable channel is still **v0.22.5** (commit `bf0203a794a0`). All forthcoming changes are staged in the `main` branch and will be bundled into the next release (likely v0.22.6).

---

## 3. Project Progress (Merged / Closed PRs)
| PR | Title / Goal | Category | Impact |
|----|---------------|----------|--------|
| **#144280** | “/goal no longer parks on a clarify question when `goals.clarify: skip` is set” | Feature (agent + CLI) | Improves goal‑flow ergonomics; removes a one‑hour “parking” delay. |
| **#144282** | “gateway dashboard auth refusal exits `EX_CONFIG` instead of `1`” | Bug‑fix (gateway) | Provides a proper exit‑code for CI/automation and avoids confusing shell scripts. |
| **#144257** | “Update that disables a plugin should keep memory provider and auto‑re‑enable when possible” | Bug‑fix (agent + CLI + dashboard) | Stops silent loss of the memory backend during forced plugin toggles – a regression that affected several users. |
| **#144275** | “Restore `/handoff` RPC verbs on the shared gateway” | Feature (gateway + CLI) | Enables Desktop and CLI to request hand‑offs on the new shared‑gateway architecture. |
| **#144246** | “Vault key can live in the OS keychain (opt‑in) & token‑manager cleanup” | Feature (security + CLI) | Raises the security posture by removing plain‑text key files and limiting token exposure. |
| **#144266** | “Plugins can hide replies until a `hold_stream` transform rewrites them” | Feature (plugins) | Gives policy‑filter plugins a way to rewrite LLM output without leaking the raw response on any surface. |
| **#141864** | “Serve the Desktop workspace from the gateway (WebApp) ” | Feature (gateway + Desktop) | Consolidates the web UI under the same process that powers CLI/desktop, simplifying deployment. |

*No PRs were merged today that introduce breaking API changes; most are incremental improvements or bug‑fixes.*

---

## 4. Community Hot Topics
| # | Item | Comments / 👍 | Link | Core Need |
|---|------|---------------|------|-----------|
| **#143379** | **RFC: “DOC‑CHAIN SUBSTRATE’S NETWORK – the read, the governance, the compaction”** | 15 comments, 0 👍 | <https://github.com/NousResearch/hermes-agent/issues/143379> | A high‑level design proposal for persistent, versioned “doc‑chain” records that survive session compression. Signals a community desire for long‑term provenance and resumable workflows. |
| **#143426** | **Linux desktop launches with 6 % window opacity (unwanted translucency)** | 13 comments, 10 👍 | <https://github.com/NousResearch/hermes-agent/issues/143426> | Real‑world usability bug affecting the default desktop experience on Ubuntu 26.04/Wayland. Highlights the need for reliable cross‑platform window‑manager handling. |
| **#72082** | **Background self‑improvement writes to skill library despite read‑only turn** | 4 comments, 1 👍 | <https://github.com/NousResearch/hermes-agent/issues/72082> | Exposes a security‑boundary leakage; users want guarantees that read‑only sessions cannot mutate persistent state. |
| **#137057** | **Refactor: one supervisor per long‑lived Hermes child + ratchet for detached spawns** | (large PR, discussion‑heavy) | <https://github.com/NousResearch/hermes-agent/pull/137057> | Addresses a systemic stability problem where child processes survive a parent kill, causing resource leaks. Indicates a growing focus on process‑supervision and container‑friendly behavior. |
| **#144280** | **/goal skip behaviour** | (open, moderate discussion) | <https://github.com/NousResearch/hermes-agent/pull/144280> | Improves task‑flow ergonomics; strong community reaction (many +1s in PR review). |

**Takeaway:** The community is currently juggling **core‑engine reliability** (process supervision, read‑only guarantees) and **UX polish** (desktop opacity, goal handling). The doc‑chain RFC suggests a strategic push toward *persistent, immutable knowledge graphs*.

---

## 5. Bugs & Stability (ranked by severity)

| Severity | Issue / PR | Symptom | Status / Fix |
|----------|------------|---------|--------------|
| **Critical** | **#143426** – Desktop opacity default (Linux) | All windows appear translucent; settings UI hides opacity control. | Open; no fix yet. High‑impact for Linux users. |
| **Critical** | **#144272** – Bot Mode “Group driver unavailable” | Group‑chat creation blocked despite driver reporting `true`. | Open; reproduces on Windows 11. |
| **High** | **#72082** – Background review writes to skill library in read‑only mode | Unexpected file writes; no disclosure to user. | Open; requires request‑layer hardening. |
| **High** | **#142336** – Reasoning‑effort pill spins forever (gateway sessions) | UI hangs on messaging‑platform sessions until a model/effort selection is forced. | Open; may be mitigated by recent `busy_result_mode` PR (#136708). |
| **High** | **#144236** – CLI token recovery rejects valid token pair (OAuth `sub` change) | Users cannot recover a previously saved token after IdP switch. | Open; no PR yet. |
| **Medium** | **#144279** – `cronjob_manage` “delete” action not recognised | Paused jobs pile up forever. | Open; documentation missing. |
| **Medium** | **#144278** – First `browser_exec` after idle throws `ModuleNotFoundError` | No auto‑recovery; user sees misleading error. | Open; could be fixed by lazy‑load guard. |
| **Low** | **#144267** – Withdrawn bug (gateway sessions) | Closed by author – no impact. | Closed. |
| **Low** | **#144050** – CLI spinner thread death on dead gateway socket | UI loses live‑work dock after a disconnect. | Open; fix likely in upcoming spinner‑resilience work. |

*Note:* Several of the above bugs already have **related PRs** in the pipeline (e.g., `#136708` for background‑process result handling, `#144257` for plugin disable‑enable logic). Their merge will indirectly resolve some stability complaints.

---

## 6. Feature Requests & Roadmap Signals

| Request | Summary | Priority (internal) | Likelihood for Next Release |
|---------|---------|--------------------|-----------------------------|
| **#144273** – Profile‑attributed active‑work metadata | Ability to tag work intervals per profile and query bounded activity. | P3 (interest from multi‑profile deployments) | **Medium** – may land in a later 0.22.x after core stability is locked. |
| **#144274** – Producer delivery receipts for cron jobs | Idempotent hand‑off + pre‑send validation for local alert producers. | P3 | **Low‑Medium** – needs broader cron redesign; likely postponed. |
| **#144268** – Provider/request‑layer security hooks & typed quirks | Decouple provider‑specific checks into `ProviderProfile` hooks, stop sharing global runtime state. | P3 (security focus) | **High** – aligns with recent security‑hardening PRs (`#144246`, `#144280`). |
| **#144280** – `/goal` skip behaviour | Prevent “parking” on clarifying questions when `skip` is set. | P3 (UX) | **High** – already open and actively reviewed; likely merged soon. |
| **#144275** – Shared‑gateway `/handoff` support | Enable classic `/handoff` RPC on the owner‑gateway. | P2 (gateway roadmap) | **Very High** – PR already open; expected in next minor. |
| **#144266** – Hidden replies until `hold_stream` transform | Policy‑filter plugins can rewrite output without exposing raw LLM text. | P3 | **Medium** – plugin catalog expansion is a priority. |
| **#144276 / #144277** – New plugin‑catalog entries (openpaths, simplexgen) | Add model‑provider & 3‑D generation plugins. | P3 (ecosystem) | **Medium** – will be bundled as optional catalog entries. |

**Roadmap inference:** The upcoming release will likely focus on **gateway robustness**, **security hardening (credential vault, provider hooks)**, and **UX refinements** (goal skipping, hidden replies). Larger, architecture‑level proposals (doc‑chain, cron delivery receipts) are still exploratory.

---

## 7. User Feedback Summary
- **Desktop UX pain points** – Unexpected translucency on Linux, Bot‑Mode group‑chat failures, and lingering background processes after a forced kill were the most vocal complaints.  
- **Security & state‑integrity concerns** – Users flagged that read‑only turns can still mutate the skill library, and that CLI token recovery is fragile when the OAuth “sub” claim changes.  
- **Reliability expectations** – Repeated reports of UI elements (reasoning‑effort pill, spinner) freezing after gateway disconnects highlight a demand for graceful degradation and automatic reconnection.  
- **Positive signals** – The community is actively contributing plugin ideas (sprite‑sheet cutter, openpaths, simplexgen) and approving improvements that reduce manual “parking” of goals, indicating satisfaction with the extensibility model.

Overall sentiment: **high engagement, moderate frustration with platform‑specific bugs, and strong appetite for security and workflow persistence features.**

---

## 8. Backlog Watch (Long‑standing / Unanswered Items)
| Issue / PR | Reason it Needs Attention | Last Update |
|------------|---------------------------|-------------|
| **#143379** – Doc‑Chain substrate RFC | Strategic design; no consensus yet. | 2026‑10‑25 |
| **#72082** – Background review writes (needs reproduction) | Security‑boundary; still open for a reproducible case. | 2026‑10‑25 |
| **#144279** – Cron “delete” action not working | Operational hygiene; no fix in sight. | 2026‑10‑25 |
| **#144278** – Browser harness first‑call failure | Affects automation pipelines that rely on idle periods. | 2026‑10‑25 |
| **#137057** – Process‑supervisor refactor (large, cross‑component) | Crucial for stability but still in review; requires coordination across many subsystems. | 2026‑10‑25 |
| **#144280** – `/goal` skip behaviour (open) | High community interest; PR pending final CI pass. | 2026‑10‑25 |
| **#144275** – Shared‑gateway handoff (open) | Core to multi‑instance deployments; pending review of integration tests. | 2026‑10‑25 |

*Recommendation:* Prioritise **#143379**, **#72082**, and the **process‑supervisor** refactor (#137057) for the next sprint, as they address long‑term architectural goals and security guarantees.

---

**Bottom line (2026‑10‑25):** Hermes Agent is in a *high‑velocity* development phase with a healthy mix of bug‑fixes, security hardening, and ecosystem expansion. The most pressing operational issues are desktop UI bugs on Linux and session‑state consistency after crashes. If the team lands the gateway‑handoff and goal‑skip PRs soon, the next minor release should deliver tangible user‑experience gains while paving the way for the longer‑term “doc‑chain” persistence vision.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw – Project Digest – 25 Oct 2026**  

---

## 1. Today’s Overview
- The repository saw a burst of activity in the last 24 h: **7 pull‑requests** were updated, with **6 of them merged/closed** and **1 still open**.  
- No new issues or releases were posted, indicating a relatively stable issue backlog but a strong focus on delivering polish and integrations.  
- The dominant theme is **maintenance‑level fixes** (Telegram timeout handling, cron‑job error propagation, Anthropic API compatibility) together with several **quality‑of‑life enhancements** (`.env` loading, Docker‑Compose for Coolify, retry logic, new provider support).  

---

## 2. Releases
*No new release has been published as of today.*

---

## 3. Project Progress (PRs merged/closed today)

| PR # | Title (short) | Type / Domain | Key Outcome |
|------|----------------|---------------|-------------|
| **#3424** | *fix(telegram): bound hung long‑poll requests with HTTP timeouts* | bug / provider‑telegram | Added sensible HTTP‑client timeouts; prevents daemon from hanging when Telegram’s long‑poll connections stall. |
| **#3425** | *fix(cron): report failed jobs as errors instead of ok* | bug / scheduler | Cron‑service now propagates execution errors, improving observability and automated alerting. |
| **#996** | *feat: add .env file loading and provider env overrides* | enhancement / config | Introduced automatic `.env` loading before `config.json`, allowing secret management outside VCS and enabling fresh‑install defaults. |
| **#1026** | *Coolify deployment* | enhancement / docker | Added a ready‑to‑use Coolify Docker‑Compose stack and documentation; simplifies one‑click self‑hosting. |
| **#594** | *feat(retry): add retry logic with backoff for LLM calls* | enhancement / agent | Implemented bounded exponential back‑off for LLM API calls, with retry‑able error detection, user‑facing notices, shared helper & tests. |
| **#1575** | *feat: Add support for Kimi For Coding model* | enhancement / provider‑go | Added specific `User‑Agent` and `x‑app` headers so the Kimi‑for‑Coding endpoint accepts requests; expands model catalogue. |
| **#3447** *(still open)* | *fix(anthropic): make claude‑haiku‑5‑5 (thinking‑always models) work with token credentials* | bug / provider‑anthropic | Addresses a 400 error caused by deprecated `temperature` field when using token auth; fix is under review. |

> **Impact** – The merged PRs bring immediate stability (Telegram, cron, Anthropic) and a noticeable uplift in developer experience (env handling, Docker deployment, retry resilience, new model support).  

---

## 4. Community Hot Topics
| Item | Comments / 👍 | Why it matters |
|------|----------------|-----------------|
| **#996 – .env loading** | No explicit count, but it is the only PR explicitly addressing secret management, a common pain point for self‑hosted users. | Enables safe handling of API keys/credentials and supports fresh installations without a pre‑filled `config.json`. |
| **#594 – LLM retry logic** | No reactions shown, but the addition of back‑off and retry notices directly tackles reliability complaints when external LLM services intermittently fail. | Improves continuity of long‑running agents, a frequent source of user frustration. |
| **#1026 – Coolify deployment** | No reactions shown; however, the PR adds a complete deployment recipe, which resonates with the community that prefers GUI‑based dev‑ops platforms. | Lowers the barrier to entry for non‑CLI users, potentially expanding the user base. |

*Underlying need:* **Operational robustness and secure configuration** – users are asking for “it just works” deployments and safe handling of secrets, while also demanding higher resilience when external LLM APIs glitch.

---

## 5. Bugs & Stability (today)

| Severity | PR (status) | Description | Fix status |
|----------|-------------|-------------|-------------|
| **Critical** | **#3447 (open)** – Anthropic “thinking‑always” models reject token‑auth calls with a 400 error (`temperature` deprecated). | Breaks a whole class of Claude models for token‑based installations. | Open, under review. |
| **High** | **#3424 (closed)** – Telegram long‑poll could hang indefinitely. | Could stall the whole agent, especially for users behind unstable proxies. | Fixed. |
| **Medium** | **#3425 (closed)** – Cron job failures were silently reported as success. | Masks real problems in scheduled tasks, leading to silent breakdowns. | Fixed. |
| **Low** | **#594 (closed)** – No built‑in retry for transient LLM failures. | Not a crash, but leads to flaky agent behavior. Fixed via back‑off logic. |

*Takeaway*: The most pressing open bug is the **Anthropic token compatibility** issue; the rest have been resolved today, indicating a quick bug‑fix turnaround.

---

## 6. Feature Requests & Roadmap Signals
| Feature | Origin | Likelihood of inclusion in next release (≈ next 4‑6 weeks) |
|---------|--------|-----------------------------------------------------------|
| **`.env`‑based secret loading** | PR #996 (enhancement) | **High** – already merged; will appear in the next tag. |
| **Retry / back‑off for LLM calls** | PR #594 (enhancement) | **High** – merged; ready for release. |
| **Coolify Docker‑Compose** | PR #1026 (enhancement) | **Medium‑High** – merged, but may wait for a “deployment‑focused” minor bump. |
| **Kimi‑for‑Coding model headers** | PR #1575 (enhancement) | **Medium** – merged; likely part of a “new‑providers” batch. |
| **Anthropic token fix for thinking‑always models** | PR #3447 (bug) | **High priority** – open; expect a hot‑fix release or patch soon. |

The pattern suggests the maintainers are bundling **configuration & reliability improvements** into the next minor version, with provider‑specific patches (Anthropic) slated for an urgent patch.

---

## 7. User Feedback Summary
- **Pain points** (inferred from PR topics):  
  * insecure configuration handling (`config.json` in VCS),  
  * unstable long‑running connections (Telegram, cron, LLM API),  
  * difficulty deploying on modern PaaS/Docker‑orchestrators.  
- **Positive signals**: The community is contributing concrete fixes and enhancements, indicating a **healthy, engaged contributor base** rather than just passive users.  
- **Satisfaction**: The quick closure of 5 bug‑related PRs within a day demonstrates responsive maintenance, likely boosting user confidence.

---

## 8. Backlog Watch
| Item | Status | Reason for attention |
|------|--------|----------------------|
| **#3447** – Anthropic token compatibility | **Open** (opened 24 Oct) | Blocks a whole generation of Claude models for token‑based users; should be merged ASAP. |
| **Any older open PRs** – Not listed in today’s snapshot but worth checking the repo for lingering PRs > 30 days with no activity, especially those labeled `help wanted` or `enhancement`. | — | Could become bottlenecks if left unattended. |
| **Open Issues** – None reported in the last 24 h, but the issue tracker is currently empty; periodic audits are recommended to ensure hidden bugs are not being reported elsewhere (e.g., discussions). | — | Prevents “silent” bug accumulation. |

*Recommendation*: Prioritize the merge of **#3447** and run a quick audit of any PRs older than two weeks that have no recent comments.  

---

**Overall health** – PicoClaw shows **steady maintenance momentum** with multiple critical bugs resolved and several high‑value features merged. The only blocker is the open Anthropic fix; once merged, the project should be ready for a **new minor release** that bundles the `.env` handling, retry logic, and provider extensions. The community’s focus on deployment ergonomics and reliability points to a roadmap centered on **ops‑friendly releases** and **broader model support**.  

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

## NanoClaw Project Digest – 2026‑10‑25  

**Repository:** <https://github.com/qwibitai/nanoclaw>  

---

### 1. Today’s Overview  
- The repo saw **no new issues** and **nine pull‑request updates** (eight still open, one closed).  
- Activity is concentrated on expanding the **skill/channel ecosystem** (new Proton Mail, Copilot, model‑use‑case helpers) and on **security‑hardening** (log redaction, payload‑escaping).  
- No releases were cut in the last 24 h, so the codebase remains at the same version as the last tagged release (none). Overall health looks stable, with most PRs in “awaiting review” status.

---

### 2. Releases  
*No new releases were published in the last 24 h.*  

---

### 3. Project Progress (Merged / Closed PRs)  
| PR | Title / Goal | Type | Closed / Merged | Key Impact |
|----|--------------|------|----------------|------------|
| **#3724** | Update retired Anthropic model ID in `add‑opencode` skill | **Bug‑fix** (provider) | **Closed** (2026‑10‑24) | Prevents runtime errors when users select the now‑retired `anthropic/claude‑sonnet‑4‑20250514`. |
| *(No other PRs were merged today; the remaining eight are still open and under review.)* |

---

### 4. Community Hot Topics  

| PR | Why It’s Hot | Link |
|----|--------------|------|
| **#4184** – *Log redaction of key‑shaped secrets* | Security‑focused hardening that touches core logging, a high‑visibility area for developers and operators. | <https://github.com/qwibitai/nanoclaw/pull/4184> |
| **#3726** – *Add native Proton Mail adapter (skill side)* | Introduces a much‑requested encrypted‑mail channel via Proton Mail Bridge; ties together two PRs (skill + adapter). | <https://github.com/qwibitai/nanoclaw/pull/3726> |
| **#3976** – *Add `/add‑copilot` GitHub Copilot SDK provider* | Opens the door for AI‑augmented coding assistance directly inside NanoClaw agents. | <https://github.com/qwibitai/nanoclaw/pull/3976> |
| **#3717** – *Escape payloads in composed prompt blocks* | Addresses a subtle injection risk that could let malicious content break the XML‑ish prompt envelope. | <https://github.com/qwibitai/nanoclaw/pull/3717> |
| **#4180** – *Add `/add‑model‑use‑cases` for role‑named group models* | Adds a convenient way for teams to map logical “use‑cases” (e.g., coding) to concrete model IDs, a common request from large deployments. | <https://github.com/qwibitai/nanoclaw/pull/4180> |

**Underlying Needs:**  
- **Secure, auditable operation** (log redaction, payload escaping).  
- **Broader channel support** to reach users on email (Proton Mail) and collaborative coding (Copilot).  
- **Simplified model management** for multi‑team environments (role‑named groups).  

---

### 5. Bugs & Stability  

| Severity | PR | Description | Status / Fix |
|----------|----|-------------|--------------|
| **High** | **#3717** – *escape payloads in composed prompt blocks* | Improper escaping could let user‑supplied content terminate/forge XML‑ish blocks, potentially corrupting downstream LLM prompts. | Open, under review. |
| **Medium** | **#2752** – *Stage inbound Discord attachments that expose only a URL* | Discord adapter previously ignored CDN URLs, causing the agent to miss image/text payloads. | Open, awaiting review. |
| **Medium** | **#4184** – *Redact keys in logs* | Unmasked credentials could leak via error messages or tool output. | Open (high priority due to security impact). |
| **Low** | **#4219** – *Prioritize MiniMax text models in OpenCode selector* | Not a crash, but a UX regression where newer MiniMax models were hidden. | Open (fix branch ready). |

*No crash reports or regression tickets were filed today; the above PRs constitute the main stability work.*

---

### 6. Feature Requests & Roadmap Signals  

| Request | Current PR | Potential Next Release |
|---------|------------|------------------------|
| **GitHub Copilot integration** (`/add-copilot`) | #3976 (open) | Likely candidate for the next minor release – the feature is “upstream‑ready”. |
| **Proton Mail channel** (skill + native adapter) | #3726 (skill) + #4218 (adapter) | Both PRs are already split for review; when merged they will constitute a full‑stack email channel. |
| **Model‑use‑case abstraction** (`/add-model-use-cases`) | #4180 (open) | Aligns with the roadmap toward “team‑level model orchestration”; may be bundled with other model‑management features. |
| **Improved attachment handling for Discord** | #2752 (open) | Could be merged alongside other channel hardening (e.g., #4184). |
| **MiniMax model prioritisation** | #4219 (open) | Small UI tweak; likely to land in a patch release after review. |

*Overall, the roadmap appears to be shifting toward (1) expanding secure communication channels, (2) tighter credential handling, and (3) richer model‑selection ergonomics.*

---

### 7. User Feedback Summary  

- **Security concerns dominate**: multiple PRs aim to mask secrets and sanitize payloads, indicating that operators are uneasy about accidental credential exposure.  
- **Channel diversity is a pain point**: users repeatedly request “native” email adapters (Proton Mail) and richer chat integrations (Discord attachment handling).  
- **Model management complexity**: the introduction of role‑named groups points to a demand for less‑hand‑crafted `.env` edits when scaling across many teams.  
- **Positive signals**: The community has quickly identified outdated model IDs (PR #3724) and submitted a fix, showing active monitoring of runtime health.

Overall sentiment is **constructive**—contributors are delivering concrete fixes and features rather than posting complaints.

---

### 8. Backlog Watch  

| Item | Type | Why It Needs Attention | Link |
|------|------|------------------------|------|
| **#3726** – *Add native Proton Mail adapter (skill side)* | Feature | Skill code merged, but adapter lives in a separate PR (#4218). Coordination needed to land both halves together. | <https://github.com/qwibitai/nanoclaw/pull/3726> |
| **#4218** – *Native Proton Mail adapter (channel side)* | Feature | Same dependency as above; reviewers have flagged missing tests in the adapter. | <https://github.com/qwibitai/nanoclaw/pull/4218> |
| **#4184** – *Log redaction* | Hardening | Security‐critical; should be merged before any public release to avoid accidental credential leaks. | <https://github.com/qwibitai/nanoclaw/pull/4184> |
| **#3717** – *Escape payloads in prompt blocks* | Bug | Potential injection vector; high priority for downstream model integrity. | <https://github.com/qwibitai/nanoclaw/pull/3717> |
| **#2752** – *Discord attachment staging* | Bug | Affects usability for a large user base that relies on Discord; modest effort to fix. | <https://github.com/qwibitai/nanoclaw/pull/2752> |

*No open issues are pending, but the above PRs are the most time‑sensitive items that would unlock the next wave of features and security hardening.*

---

**Bottom line:** NanoClaw’s development tempo is healthy, with a steady stream of PRs focused on expanding functionality and tightening security. The main risk is the backlog of open PRs—particularly the Proton Mail channel split and the payload‑escaping fix—which should be prioritized to maintain momentum and reinforce trust among operators.

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

**LobsterAI – Project Digest (2026‑10‑25)**  

---

### 1. Today’s Overview
- Activity on the repo was modest but focused: **2 open issues** (both account‑appeal requests) and **3 pull‑requests** were merged/closed.  
- No new releases were published, indicating the team is still in a stabilization phase rather than a feature‑release sprint.  
- The merged PRs target performance (startup latency) and UI refinements, suggesting a priority on user‑experience polish and reliability for the upcoming 2026.10.23‑2026.10.25 builds.

---

### 2. Releases
*No releases were made in the last 24 h.*  
> **Note:** The most recent public build (2026‑10‑23) is referenced in PR #2939’s performance testing. Keep an eye on the next tag for the “startup‑profile” improvements to land.

---

### 3. Project Progress (Merged / Closed PRs)

| PR # | Title / Area | Key Deliverables | Impact |
|-----|--------------|------------------|--------|
| **2942** *(closed)* | `feat(im): redesign IM settings layout…` – UI/renderer, main, openclaw, im | • New, compact IM platform list with status dots  <br>• Shared `IMPlatformHeader` component  <br>• Weixin DMs always admitted; DM‑policy UI removed | Improves the instant‑messaging (IM) configuration experience; reduces visual clutter and clarifies platform status. |
| **2941** *(closed)* | `chore(startup): profile the untimed steps before the AskUser server` – main | • Added four missing profiling phases (agentModelMig, cacheWarmup, …)  <br>• Makes the previously “gap” in startup timing visible in the profiler | Enables developers to pinpoint startup bottlenecks; groundwork for the latency reductions in PR #2939. |
| **2939** *(closed)* | `perf(openclaw): stop rerunning startup migrations and prewarm state databases` – main, openclaw | • Eliminated repeated migration runs on cold start  <br>• Pre‑warm OpenClaw state DBs, cutting gateway cold‑start from ~26 s → **13.6 s** in dev builds  <br>• Reduced CPU/memory churn during startup | Significant performance win for users with large OpenClaw state directories; directly addresses long‑standing start‑up latency complaints. |

*Overall trend:* The team is consolidating performance regressions introduced in the latest builds and iterating on the IM UI, indicating a “polish before next release” focus.

---

### 4. Community Hot Topics  

| Item | Type | Comments / 👍 | Link | Why it matters |
|------|------|---------------|------|----------------|
| **#2936** – “LobsterAI 账号被误封” | Issue (appeal) | 4 comments, 0 👍 | <https://github.com/netease-youdao/LobsterAI/issues/2936> | Highlights friction with the platform’s risk‑control system; users are being blocked for non‑malicious local usage (third‑party DSH plugin). Signals a need for clearer usage policies or a whitelist for developer‑tool integrations. |
| **#2940** – “账号被禁用，申请解封” | Issue (appeal) | 1 comment, 0 👍 | <https://github.com/netease-youdao/LobsterAI/issues/2940> | Same theme as #2936 – a user hit risk‑control after using a local reverse‑proxy to call LobsterAI models. The recurrence suggests the detection heuristics are too aggressive for typical developer workflows. |
| **#2939** – “perf(openclaw): stop rerunning startup migrations…” | PR (performance) | No public comments shown, merged | <https://github.com/netease-youdao/LobsterAI/pull/2939> | The biggest performance win of the day; directly addresses a pain point reported in the community (slow gateway startup). |

**Underlying need:** Developers want to embed LobsterAI services in local tooling without triggering automated bans. Simultaneously, they demand fast startup times for large state directories. Both concerns point to a tighter balance between security enforcement and developer friendliness.

---

### 5. Bugs & Stability  

| Severity | Description | Source | Fix Status |
|----------|-------------|--------|------------|
| **High** | **Account lock‑outs** for non‑malicious usage (Issues #2936 & #2940). | Users report being denied login after using local proxies or third‑party plugins. | No fix yet; only appeals opened. Requires policy revision or a “developer‑mode” exemption. |
| **Medium** | **Startup latency spikes** when OpenClaw state > 800 MB (reported in PR #2939). | Internal profiling identified > 25 s cold starts. | Fixed in PR #2939 (startup time now ~13.6 s). |
| **Low** | No crash or regression reports in the last 24 h. | — | — |

*Takeaway:* The only live‑blocking issue today is the account‑ban mechanism. The performance regression has already been resolved.

---

### 6. Feature Requests & Roadmap Signals  

| Request | Origin | Implication for Next Release |
|---------|--------|-------------------------------|
| **Developer‑friendly access tokens** – ability to whitelist local proxies or mark a token as “sandbox”. | Implicit in Issues #2936 & #2940 (users ask for “no commercial use” clarification). | Likely to be discussed in the upcoming security/usage policy roadmap; could be shipped as a token‑flag or “sandbox mode” in the next minor version. |
| **Customizable IM platform UI** – more granular control over which IM platforms appear on the settings page. | PR #2942 introduces a redesign; comments hint at demand for further customization. | The redesign is already merged; configurable visibility may be a follow‑up enhancement. |
| **Startup profiling UI** – surface the newly added phases directly in the UI to aid debugging. | PR #2941 adds profiling data; no UI exposure yet. | Could be packaged in a “developer tools” toggle for the next release. |

---

### 7. User Feedback Summary  

- **Pain Points:**  
  1. **Risk‑control false positives** – Users attempting legitimate local integration (reverse proxy, third‑party plugins) are being blocked, causing workflow interruptions.  
  2. **Long cold‑start times** for heavy OpenClaw state directories, degrading productivity.  

- **Positive Signals:**  
  - The UI overhaul for IM settings was well‑received (no negative comments, clean PR merge).  
  - Performance improvements (PR #2939) are quantifiable and directly address a long‑standing complaint.  

Overall, the community is **satisfied with UI polish and speed gains** but **frustrated by the opaque account‑ban process**.

---

### 8. Backlog Watch  

| ID | Title / Area | Age | Current State | Why It Needs Attention |
|----|---------------|-----|----------------|------------------------|
| **#2936** | Account ban appeal (multiple usernames) | Open 2 days | No maintainer response yet | Repeated false‑positive accusations could erode trust; a policy clarification or automated appeal flow would reduce support load. |
| **#2940** | Account disabled after reverse‑proxy usage | Open 1 day | No response | Same root cause as #2936; handling both together could lead to a systematic solution. |
| **#2939** (merged) | Performance regression – startup migrations | Closed (merged) | Verified in dev, not yet in tagged release | Ensure the performance fix lands in the next official build; monitor for regression after release. |
| **#2942** (merged) | IM settings redesign | Closed (merged) | UI changes live in dev branch | Verify accessibility and i18n support before release; consider adding configuration options per community feedback. |

**Action recommendation:** Prioritize a concise “account‑risk‑control FAQ” and an automated **appeal ticket** workflow to address the two open appeal issues. Additionally, schedule a **release candidate** that bundles PRs #2939, #2941, and #2942, and run a short‑term monitoring window for any regression in startup time or IM UI behavior.  

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (agentscope‑ai/CoPaw) – Project Digest**  
*Date: 2026‑10‑25*  

---  

## 1. Today’s Overview  
- Development activity is high: 6 open issues and 10 PR updates in the last 24 h, with 1 PR merged.  
- Most of the work today focuses on **bug fixes** (file‑editing newline handling, self‑kill guard, audit logging) and **configuration UX** (assistant‑message display mode).  
- No new releases were cut, indicating the team is still stabilising the current release line before the next version bump.  

---  

## 2. Releases  
*No new releases were published in the last 24 h.*  

---  

## 3. Project Progress (Merged / Closed PRs)  
| PR # | Title / Scope | Author | Size | Status | What landed |
|-----|----------------|--------|------|--------|--------------|
| **8411** | **fix(matrix): recover cached sessions and missing device keys** | hehuang139 | L | **Closed (merged)** | Fixes #8365 – restores Matrix channel login after device‑key loss; adds robust re‑registration of missing keys and improves session cache resiliency. |
| 8410 | fix(console): allow removing models from the pool | hehuang139 | M | Open | Introduces a **Remove** action (with confirmation) for provider‑managed model entries; back‑end API call and UI updates so deprecated models can be purged cleanly. |
| 8409 | feat(channels): add QQ C2C streaming message support | no‑teasy | L | Open | Implements `on_streaming_start / delta / end` hooks for QQ C2C via the official streaming API, gated by the `QQ_STREAMING_ENABLED` flag. |
| 8408 | feat(console): server‑provided default for assistant message display mode | Wiziechen | M | Open | Moves the assistant‑message‑folding preference from per‑browser `localStorage` to a **server‑side default** (`config.json → chat_display.assistant_message_display_mode`). |
| 8347 | feat(memory): integrate ReMe 0.4.2.0 with decision compaction, images & tags | jinliyl | XXXL | Open | Upgrades the ReMe memory backend, adds optional decision‑model compaction, image memorisation and entity‑tag generation. |
| 7835 | fix(memory): stop leaking auto‑memory‑recall payload to channels | TerebiSAMA | Under Review | Open | Removes synthetic “I will use the memory_search tool …” trace from all outbound channels (except the console), preventing accidental data leakage. |
| 8411 (closed) and the documentation fixes (PR 8403‑8401) also cleaned up broken anchor links across the website, improving the developer experience.  

*Take‑away:* The only merged work today is a critical stability fix for the Matrix channel; the rest of the PR queue is moving forward on UX polish, new channel support, and memory subsystem upgrades.  

---  

## 4. Community Hot Topics  

| # | Item | Type | Comments / 👍 | Link | Why it matters |
|---|------|------|---------------|------|---------------|
| **8415 / 8414** | *edit_file converts all CRLF line endings to LF* (duplicate bug reports) | Issue (bug) | 1 comment each | <https://github.com/agentscope-ai/QwenPaw/issues/8415> – <https://github.com/agentscope-ai/QwenPaw/issues/8414> | Users editing files on Windows see silent newline changes, risking version‑control conflicts and breaking scripts that depend on CRLF. Indicates a need for platform‑aware file handling. |
| **8413** | *Self‑kill guard blocks kill $PID for unrelated user‑started process* | Issue (bug) | 1 comment | <https://github.com/agentscope-ai/QwenPaw/issues/8413> | The safety guard mistakenly interprets `$PID` (uppercase) as a self‑kill, interfering with legitimate process management. Shows tension between safety heuristics and flexibility. |
| **8412** | *audit.db stops recording tool calls per‑agent despite policy=all* | Issue (bug) | 1 comment | <https://github.com/agentscope-ai/QwenPaw/issues/8412> | Auditing is a core compliance feature; loss of per‑agent records undermines traceability for multi‑tenant deployments. |
| **8407** | *Support server‑level default config for assistant message folding* (Feature request) | Issue (feature) | 1 comment | <https://github.com/agentscope-ai/QwenPaw/issues/8407> | Mirrors PR 8408 – a strong demand for centralised UI defaults, especially for self‑hosted / team environments. |
| **8410** | *Allow removing models from the pool* (Feature) | PR (feature) | – | <https://github.com/agentscope-ai/QwenPaw/pull/8410> | Direct response to long‑standing user frustration about stale or deprecated models cluttering the UI. |

**Community signal:** The most active topics revolve around **platform‑specific file handling**, **audit reliability**, and **centralised UI configuration**. These are recurring pain points for enterprise users who run CoPaw on Windows servers or in multi‑tenant deployments.  

---  

## 5. Bugs & Stability  

| Severity | Issue # / PR | Summary | Status / Fix |
|----------|--------------|---------|--------------|
| **Critical** | **8412** – audit.db stops recording tool calls per‑agent | Breaks compliance logs; may lead to missing evidence in audits. | No fix yet; high priority. |
| **High** | **8415 / 8414** – edit_file normalises CRLF → LF | Can corrupt Windows‑style files, cause CI failures. | No fix yet; duplicate reports suggest escalation. |
| **Medium** | **8413** – self‑kill guard over‑blocks `kill $PID` | Affects users who orchestrate external processes; not fatal but disruptive. | No PR yet. |
| **Medium** | **8406** – QQ channel enabled flag silently resets to false | Unexpected loss of configuration; may confuse operators. | No fix yet. |
| **Low** | Documentation anchor fixes (PR 8403‑8401) – not bugs but quality improvements. | Already under review/merged. |

*Overall stability:* The backlog contains several **blocking bugs** (audit logging, newline handling) that have not yet received a dedicated fix PR. The team should prioritize PRs that address these issues to avoid eroding trust in production‑grade deployments.  

---  

## 6. Feature Requests & Roadmap Signals  

| Feature | Origin | Likelihood for Next Release |
|---------|--------|------------------------------|
| **Server‑provided default for assistant‑message display mode** | Issue 8407 → PR 8408 | **Very likely** – PR already open and aligned with a documented need. |
| **QQ C2C streaming messages** | PR 8409 | **Likely** – core channel enhancement, already in review. |
| **Ability to remove models from the pool** | PR 8410 | **Likely** – resolves a long‑standing UI limitation; PR ready for review. |
| **ReMe 0.4.2.0 memory integration (decision compaction, image/tag support)** | PR 8347 | **Possible** – Large scope (XXXL) and may need more testing before inclusion. |
| **Improved Windows‑friendly file edit utilities** (preserve CRLF) | Issues 8415/8414 | **Possible** – High community interest; may be bundled with a minor stability release. |
| **More granular audit‑level controls & per‑agent logging reliability** | Issue 8412 | **High priority**, but uncertain timing pending root‑cause fix. |

---  

## 7. User Feedback Summary  

- **Platform‑specific file handling** is causing friction for Windows users; they expect `edit_file` to preserve original line endings.  
- **Configuration persistence** across devices and deployments is a frequent request, especially for UI preferences like message folding. The shift to server‑side defaults directly addresses this.  
- **Audit logging** is a compliance‑driven requirement; any loss of per‑agent records is seen as a serious regression.  
- **Channel stability** (Matrix, QQ) remains a top operational concern; users highlighted silent flag resets and incomplete device‑key recovery.  
- **Model lifecycle management** (removing deprecated models) is a usability pain point, highlighted in community discussions for months.  

Overall sentiment is **constructive but urgent**: users appreciate recent bug fixes but are waiting for the “quiet” issues (audit & file handling) to be resolved before they can comfortably upgrade to the next version.  

---  

## 8. Backlog Watch (Long‑standing Items Needing Attention)  

| Issue / PR | Age | Reason for attention |
|-----------|-----|----------------------|
| **#8195** – Model pool enable/disable only (now being extended by PR 8410) | Open > 1 yr | Prevents clean removal of deprecated providers. |
| **#6551** – Aliyun Coding Plan catalog drift (addressed by PR 7390) | Open > 6 mo | Ensures model catalog accuracy; PR already merged, but downstream tests needed. |
| **#8365** – Matrix device key loss (fixed by PR 8411) | Resolved, but **monitor** for regression. |
| **#8307** – QQ channel streaming feature request (implemented in PR 8409) | Open > 3 mo | Needs review & testing before merge. |
| **#7835** – Auto‑memory‑recall payload leak (PR 7835 under review) | Open > 1 mo | Security‑sensitive; should be merged quickly. |
| **#6551** – Alias model list mismatch (PR 7390 merged) | Closed, monitor for further drift. |

**Action recommendation:**  
- Assign a maintainer to triage **#8412** and **#8415/8414** as “high‑severity”.  
- Expedite review of **PR 8409** (QQ streaming) and **PR 7835** (memory leak) to close the security and channel‑feature gaps.  
- Keep an eye on the large **#8347** memory integration; consider a dedicated testing sprint before inclusion in the next stable release.  

---  

**Bottom line:** CoPaw shows healthy development velocity with a focus on stability and UX polish. However, a few critical bugs—especially around audit logging and Windows file handling—must be addressed promptly to maintain confidence among enterprise adopters and to clear the path for the next feature‑rich release.  

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw – Project Digest (2026‑10‑25)**  
*Generated from the last‑24‑hour activity on the **zeroclaw‑labs/zeroclaw** repository.*

---

### 1. Today’s Overview  
- Development velocity is high: **29 pull‑requests** received updates (27 still open) while **5 issues** were touched, signalling an active core team and many contributors.  
- No new releases were cut, so the codebase is still at the pre‑v0.8.7 release‑candidate stage.  
- The majority of the work today revolves around *runtime stability* (hardening context‑window handling, system‑prompt budgeting) and *extensibility* (plugin RPC, channel additions, memory attribution).  
- Security‑related signals appear (npm audit failure, PowerShell parsing regression) – the team is already flagging them as high‑risk items.

---

### 2. Releases  
*No new version was published in the last 24 h. The repository remains on the **v0.8.7‑rc** line; the next release is expected once the outstanding high‑priority PRs land.*

---

### 3. Project Progress (Merged / Closed Today)  
| PR | Title / Goal | Labels | Status today | Notable impact |
|----|--------------|--------|--------------|----------------|
| **#12011** | `chore(release): bump version to v0.8.7` | `ci`, `docs`, `release:v0.8.7` | **Closed** (merged) | Officially tags the v0.8.7 release candidate, updating Cargo‑tomls, Tauri config, and workspace version numbers. |
| **#12016** | `let an embedding binary add hooks to chat and cron turns` | `Feature` | **Closed** (won’t merge yet – still under review) | Opens the door for binary‑level extensions to inject custom logic into every turn, a key step toward “ZeroClaw as a library”. |
| **#11937** | `bump the rust‑all group (33 updates)` | `dependencies` | **Closed** | Brings the entire workspace onto the latest stable Rust ecosystem (clap 4.6.7, tokio 1.53.4, etc.). |
| **#11999** | `bump the actions‑all group (9 updates)` | `ci` | **Open** (still under review) | Updates GitHub Action dependencies, reducing supply‑chain risk. |
| **#11936** | `bump vite from 8.0.16 → 8.3.5` | `web`, `deps‑dev` | **Open** | Keeps the web UI build tooling current, fixing several known Vite regressions. |

*Only two PRs were actually merged/closed today; the rest remain open and are the focus of the next sprint.*

---

### 4. Community Hot Topics  

| # | Item | Comments / Activity | Why it matters |
|---|------|----------------------|----------------|
| **Issue #8891** – *Persistent memory – wire the curation, relevance, and operability planes to parity* | 12 comments (most‑commented issue) | This is the flagship **memory‑subsystem** epic. It groups 7 open tickets/PRs and drives the plan to bring ZeroClaw’s cross‑session memory to feature‑parity with competing agents. The discussion is shaping the data‑model, ownership, and eviction policies. |
| **PR #9745** – *fix(memory): add per‑agent attribution and scoping to the knowledge graph* | Large XL PR, many labels (risk p1, security, release‑gate) | Directly implements the “knowledge‑scope” piece of the memory roadmap (issue #8891). It introduces mandatory agent IDs on every graph write, a security‑critical change that will affect plugins and embeddings. |
| **Issue #11853** – *ci: npm audit failed — 2026‑10‑19* | 3 comments, high severity | Shows a **critical dependency** (`@tailwindcss/typography`) flagged as moderate/critical. The team must address this quickly to avoid supply‑chain exposure for the web UI. |
| **PR #11846** – *feat(config): control OpenRouter balance reporting in web settings* | XL, cross‑cutting `config`, `gateway`, `provider` | Adds an opt‑in toggle for OpenRouter credit‑balance display, reflecting community demand for better cost transparency. |
| **PR #11879** – *feat(goal): add dormant configuration and command grammar* | XL, “Goal V1 proposal 2/12” | Introduces a new “dormant” mode for agents, a language‑level feature that could affect how long‑running autonomous tasks are expressed. |

**Underlying needs:**  
- **Memory & state persistence** is the top strategic request (issues #8891, PR #9745).  
- **Security & supply‑chain hygiene** (npm audit, dependency bumps) is a recurring concern.  
- **Operational observability** (OpenRouter balance, system‑prompt budgeting) is being tackled via config‑level knobs.  

---

### 5. Bugs & Stability  

| Severity | Issue / PR | Summary | Current status | Fix in progress |
|----------|------------|---------|----------------|------------------|
| **P1 (workflow blocked)** | **#12014** – Custom OpenAI‑compatible provider silently defaults to 32 k context window | Runtime assumes a hard‑coded 32 k token limit when `context_window` is missing, causing premature rejections. | Open (12 h old) | **PR #12017** (see below) directly addresses this by treating the context window as immutable model metadata. |
| **P1 (security‑policy regression)** | **#12005** – PowerShell dialect rejects any argument containing a bare `@` | Breaks mail‑CLI usage on Windows because the parser treats `@` as a token delimiter. | Open (2 days old) | No dedicated PR yet; the issue is being triaged by the config team. |
| **High (dependency‑vulnerability)** | **#11853** – npm audit failure (critical findings) | `@tailwindcss/typography` flagged; could allow supply‑chain attack via the web UI. | Open (opened 6 days ago) | Pending a `npm audit fix` PR; not yet submitted. |
| **Medium (runtime bug)** | **#10446** – Tool‑call envelopes leaked into prose (fixed in PR) | A bug where tool‑call JSON leaked into model output caused malformed turns. | Fixed in **PR #10446** (open but merged locally). | The fix is awaiting review; high risk, already addressed. |

*Overall, the most severe bugs are being tackled today (context‑window handling) while a few regressions still need dedicated PRs.*

---

### 6. Feature Requests & Roadmap Signals  

| Feature / Signal | Source | Likelihood of landing in next release (v0.8.7‑rc → v0.9.0) |
|------------------|--------|-----------------------------------------------------------|
| **Cross‑session persistent memory with attribution** | Issue #8891 + PR #9745 | **High** – core to the upcoming v0.9.0 “knowledge‑graph” milestone. |
| **Agent‑level turn hooks for embedded binaries** | Issue #12016 (closed) | **Medium‑High** – design approved; awaiting integration tests. |
| **Dormant configuration / Goal grammar** | PR #11879 | **Medium** – still in proposal stage; depends on consensus on Goal language. |
| **XMPP/Prosody channel with OMEMO** | PR #11847 | **Medium** – large XL PR, needs security review before merge. |
| **Inbound‑only email channel (no SMTP)** | PR #12003 | **High** – small M‑size PR, already approved by reviewers; likely to land in the next RC. |
| **Plugin RPC webhook forwarding** | PR #11320 / #11322 | **High** – foundational for the plugin ecosystem; both PRs are in the “needs‑author‑action” state but have high priority. |

---

### 7. User Feedback Summary  

- **Memory & state continuity** is the most vocal pain point; users want their agents to remember context across daemon restarts (Issue #8891).  
- **Provider configuration** confusion (missing `context_window`) leads to hard‑to‑debug rejections (Issue #12014).  
- **Shell tooling regressions** on Windows (PowerShell `@` parsing) affect operational scripts (Issue #12005).  
- **Cost transparency** for OpenRouter usage is a frequent request, now addressed by the balance‑report toggle (PR #11846).  
- Overall sentiment: users appreciate the **extensibility** (plugin RPC, channel additions) but are increasingly sensitive to **runtime robustness** and **security hygiene**.

---

### 8. Backlog Watch  

| Item | Age | Reason for attention | Suggested action |
|------|-----|----------------------|------------------|
| **#8891** – Persistent memory epic | Open since **2026‑07‑09** (≈ 3 months) | Core roadmap item with 12 comments, still no merged implementation. | Prioritise PR #9745 review; allocate a dedicated maintainer to shepherd the remaining memory tickets. |
| **#11853** – npm audit failure | Open since **2026‑10‑19** (6 days) | Security risk flagged as **high**; could block web UI CI. | Create a rapid “audit‑fix” branch, upgrade `@tailwindcss/typography` or replace it. |
| **#12005** – PowerShell `@` parsing bug | Open since **2026‑10‑23** (2 days) | Regression affecting Windows automation; labelled **security‑policy**. | Assign to a maintainer familiar with `zeroclaw-config` parsing; consider a test‑case addition. |
| **#11320 / #11322** – Plugin RPC webhook forwarding | Open since **2026‑10‑01** (24 days) | Critical for the upcoming plugin ecosystem; large XL PRs, still “needs‑author‑action”. | Request clarification from the authors, run integration tests, merge if green. |
| **#11847** – XMPP/Prosody channel | Open since **2026‑10‑19** (6 days) | New channel type, high impact on messaging integrations; still open. | Conduct security review (OMEMO encryption) before merging. |

---

**Health Verdict:** ZeroClaw shows **strong development momentum** with a high volume of PR activity and clear strategic focus on memory, plugin RPC, and channel expansion. However, **security‑related regressions and outstanding high‑risk bugs** demand swift attention to maintain confidence. Prioritising the memory‑attribution PR (#9745) and closing the npm‑audit issue (#11853) should be the immediate next steps before the v0.9.0 release window.  

*All links point to the public GitHub repository.*  

- Issue #8891: <https://github.com/zeroclaw-labs/zeroclaw/issues/8891>  
- PR #9745: <https://github.com/zeroclaw-labs/zeroclaw/pull/9745>  
- PR #12017 (context‑window fix): <https://github.com/zeroclaw-labs/zeroclaw/pull/12017>  
- PR #11846: <https://github.com/zeroclaw-labs/zeroclaw/pull/11846>  
- PR #11879: <https://github.com/zeroclaw-labs/zeroclaw/pull/11879>  
- PR #11847: <https://github.com/zeroclaw-labs/zeroclaw/pull/11847>  
- PR #12003: <https://github.com/zeroclaw-labs/zeroclaw/pull/12003>  
- PR #11320: <https://github.com/zeroclaw-labs/zeroclaw/pull/11320>  
- PR #11322: <https://github.com/zeroclaw-labs/zeroclaw/pull/11322>  

---

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*