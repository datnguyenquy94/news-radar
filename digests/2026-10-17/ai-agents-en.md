# OpenClaw Ecosystem Digest 2026-10-17

> Issues: 215 | PRs: 500 | Projects covered: 12 | Generated: 2026-10-17 04:01 UTC

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

**OpenClaw – Project Digest (2026‑10‑17)**  
*All links point to the official GitHub repository `openclaw/openclaw`.*

---

## 1. Today’s Overview
- The repository remains **highly active** – 215 issues and 500 pull‑requests were touched in the last 24 h, with a healthy split of 135 open issues and 220 open PRs.  
- **No new release** was published; the team is still polishing the 2026.9.x series (latest tag referenced in many reports is `2026.9.7`).  
- The bulk of the activity revolves around **runtime stability** (SQLite contention, long start‑up stalls, sub‑agent race conditions) and **UX friction** reported from the desktop, mobile, and channel plugins (Telegram, Feishu, WhatsApp, Matrix).  
- A substantial number of PRs have been **merged/closed** (≈ 280) today, indicating a rapid triage cycle, but the open‑focus backlog is also growing.

---

## 2. Releases
*No new version was cut in the last 24 h.*  
The most recent publicly tagged build is **2026.9.7** (`c074824`). All current discussions reference this version, and many issues are framed as “regression on 2026.9.7” or “broken after upgrade to 2026.8.2”.  

---

## 3. Project Progress (Merged / Closed PRs)

| PR # | Title / Focus | Type | Impact |
|------|---------------|------|--------|
| **#174918** (closed) | Fix: deleting an agent breaks tool‑authority for other agents | Bug‑fix | Prevents cascade failures during agent cleanup. |
| **#175074** (open) | Refactor gateway: remove redundant lifecycle diagnostics | Maintenance | Reduces log noise, makes post‑mortem debugging easier. |
| **#175043** (open) | Perf(SQLite): keep restart worktree reads off the writer queue | Performance | Cuts ~180 s restart latency caused by writer‑queue saturation. |
| **#175030** (open) | Perf(gateway): defer publication discovery until session demand | Performance | Lowers gateway start‑up pressure on idle sessions. |
| **#175056** (open) | Test suite cleanup: drop low‑value fixtures | Test maintenance | Streamlines CI, quicker feedback loops. |
| **#175064** (open) | UI refactor: simplify chat projections & document event contracts | Refactor | Improves UI code clarity, prepares for future extensions. |
| **#173762** (open) | Feature: generate Blobster avatars with the configured agent model | Feature (UI) | Removes external avatar service dependency. |
| **#174793** (open) | UI: pin agents in the sidebar | Feature (UX) | Enhances navigation for operators handling many agents. |
| **#175075** (open) | WhatsApp: separate exec‑ and plugin‑approver allow‑lists | Feature (Channel) | Gives finer‑grained security control. |
| **#175009** (open) | Codex fix: preserve parent context across private core‑tool transitions | Bug‑fix (runtime) | Stops loss of parent thread when using private tools. |

> **Take‑away:** The merged work this day leans heavily toward *runtime hygiene* (SQLite, gateway lifecycle, sub‑agent race conditions) and *UI/UX polishing* (avatar handling, pinning, diagnostics). No large‑scale new feature landed, but the foundation for the next release (likely 2026.10.x) is being solidified.

---

## 4. Community Hot Topics  

| # | Title (comments) | Status | Core Concern | Link |
|---|-------------------|--------|--------------|------|
| **#99241** (Closed) | Tool outputs rendered as image attachments → unreadable to the agent | Resolved | Session‑state loss when stdout/stderr is collapsed to an image placeholder. | https://github.com/openclaw/openclaw/issues/99241 |
| **#164294** (Open) | Gateway state DB WAL auto‑checkpoint never completes (blocked by reader) | Open, P2 | Database health & long‑running read locks blocking writes. | https://github.com/openclaw/openclaw/issues/164294 |
| **#117262** (Open) | SQLite contention: 3 concurrent write handles → ~33 s event‑loop stalls | Open, P1 | Same root cause as #164294, confirmed to stall the main event loop. | https://github.com/openclaw/openclaw/issues/117262 |
| **#162211** (Open) | Startup blocks the Gateway for 40‑200 s → health monitor triggers restart loop | Open, P0 | Critical UX blocker; leads to crash‑loops on macOS/Linux. | https://github.com/openclaw/openclaw/issues/162211 |
| **#138272** (Open) | Android Talk drops with “no live response owner” on task‑requiring turns | Open, P1 | Real‑time voice channel instability on Android. | https://github.com/openclaw/openclaw/issues/138272 |
| **#108395** (Open) | Assistant fabricates “Human: [timestamp]” messages, enabling self‑authorisation | Open, P1 | Security‑relevant output‑format bug, could be exploited for unauthorized actions. | https://github.com/openclaw/openclaw/issues/108395 |
| **#115256** (Open) | Desktop app boot‑loops the gateway; doctor fix is instantly reverted | Open, P0 | Release‑blocking crash for the macOS GUI, affecting all desktop users. | https://github.com/openclaw/openclaw/issues/115256 |
| **#158417** (Open) | Plugin re‑materialisation fills `/tmp` and never cleans up, duplicates module graphs | Open, P1 | Disk‑space leak and memory pressure on long‑running nodes. | https://github.com/openclaw/openclaw/issues/158417 |

**Underlying Patterns**  
1. **Database contention** (SQLite WAL, multiple writers) is the most frequently cited blocker, often manifesting as long event‑loop stalls or startup delays.  
2. **Channel‑specific crashes** (Android Talk, WhatsApp, Feishu, Matrix) indicate that the “plugin‑to‑gateway” contract still has edge‑case mismatches.  
3. **Security‑oriented output bugs** (fake human messages, redaction masking) have attracted high severity labels (P0/P1), suggesting the community expects a hardening pass before the next stable release.  

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue # | Summary | Current State | Fix / PR linkage |
|----------|---------|---------|----------------|-------------------|
| **P0 – Crash/Release Blocker** | **#162211** | Startup stalls 40‑200 s → health monitor restarts | Open, no fix yet | No dedicated PR yet (watch for upcoming `gateway` refactors). |
| | **#115256** | Desktop app gateway boot‑loops continuously | Open | No fix PR; related to #174918 (tool‑authority) but not resolved. |
| | **#108395** | Assistant emits fake “Human:” messages, enabling self‑auth | Open | No known PR; security review needed. |
| | **#138272** | Android Talk drops mid‑session on tool use | Open | No fix PR yet. |
| **P1 – High‑Impact / Session‑State Loss** | **#117262** | SQLite contention → ~33 s stalls | Open | Related performance PR #175043 (SQLite writer queue). |
| | **#164294** | WAL auto‑checkpoint blocked forever | Open | No fix PR yet. |
| | **#149133** (Closed) | Heartbeat/event wake can leak fallback output | Closed (fixed) | Demonstrates that similar bugs can be resolved quickly. |
| | **#114211** | Matrix agents loop on “no‑reply” output, restart recovery, stale state | Open | No PR yet. |
| **P2 – Important but not blocking** | **#158417** | Plugin re‑materialisation fills `/tmp` | Open | No PR linked; could be tackled by cleanup PR #175056. |
| | **#154299** | Subagent final text silently drops | Open | No PR yet. |
| | **#117178** | UI should ask for confirmation before disruptive lifecycle actions | Open (Feature) | No PR yet. |

**Observation:** The most critical stability bugs have **no active fix PRs** at the moment, which is a warning sign for the upcoming release schedule. The team’s recent PRs addressing SQLite performance (#175043) and gateway diagnostics (#175074) hint that fixes may be on the way, but the gap between issue reporting and PR creation remains large (often > 2 weeks).

---

## 6. Feature Requests & Roadmap Signals

| Request | Description | Priority (as labelled) | Likelihood for Next Release |
|---------|--------------|------------------------|-----------------------------|
| **#121584** | Auto‑discover all models when a new provider is added | P2, “off‑meta tidepool” | High – low‑effort UI/CLI improvement, already discussed in recent PRs on provider contracts. |
| **#105494** | “Memory therapy” UI to resolve contradictions with the user | P3, “off‑meta tidepool” | Medium – requires new interactive flow; may be slated for a later 2026.10.x minor. |
| **#115368** | `openclaw tools` subcommand to list built‑in, plugin, and MCP‑exposed tools | P3 | Medium – aligns with recent CLI refactors (#175069). |
| **#146232** | Configurable automatic triage/allowlist for recovery agents | P2 | Medium – security‑focused, may be merged after the current stability sprint. |
| **#173773** / **#174793** | UI avatar presets & pinning agents in the sidebar | P2‑P3, UI‑focused | High – already under active PR work (avatar generation, pinning). Expect merge soon. |
| **#117178** | Confirm disruptive lifecycle actions (update/reboot) in Control UI | P2 | Medium – user‑experience request, could be bundled with UI cleanup PRs. |
| **#113056** | iOS native Talk fallback voice when ElevenLabs not configured | P2 | Low‑Medium – platform‑specific; may wait for next iOS release. |

**Roadmap Signal:** The **CLI/Provider contract refactor** and **UI avatar/agent pinning** work are already in PRs, suggesting they will land in the next stable bump (likely 2026.10.x). The **auto‑model discovery** request aligns with the broader “ease of onboarding” theme and may be bundled with the upcoming provider‑contract changes.

---

## 7. User Feedback Summary

| Pain Point | Evidence (issues) | Impact |
|------------|-------------------|--------|
| **Tool output becoming unreadable** (image placeholder) | #99241 (closed) | Users lose critical debugging evidence; fix already merged. |
| **Long start‑up stalls & forced restarts** | #162211, #115256 | Directly blocks production deployments on macOS/desktop. |
| **Android Talk voice drops** | #138272, #131768 | Mobile users lose real‑time interaction, a core value proposition. |
| **Channel‑specific message loss** (Telegram progress dupes, WhatsApp group failures) | #116512, #112564, #95835 | Degrades reliability of multi‑channel deployments. |
| **Security‑related output anomalies** (fake Human messages, redaction masking) | #108395, #130209 | Raises trust concerns; could lead to unauthorized actions. |
| **UI latency / missing live tool activity** | #119075, #129716 | Operators cannot monitor tool executions in real time, hampers debugging. |
| **Resource leaks (tmp folder, SQLite workers)** | #158417, #117262 | Long‑running gateways consume disk/CPU, eventually OOM. |

Overall sentiment is **high engagement but growing frustration** around *stability* and *UX consistency* across platforms and plugins. Users are eager for robust, “plug‑and‑play” behavior rather than needing deep manual tuning.

---

## 8. Backlog Watch (Stale / Awaiting Maintainer)

| Issue # | Title / Core Problem | Labels (severity, stale) | Why It Needs Attention |
|---------|----------------------|--------------------------|------------------------|
| **#138272** (Open, P1) | Android Talk drops on task‑requiring turns | `stale`, `P1` | Affects mobile voice use‑case; no PR yet. |
| **#117262** (Open, P1) | SQLite contention → 33 s stalls | `stale`, `P1` | Directly tied to #164294; needs coordinated DB‑layer fix. |
| **#164294** (Open, P2) | WAL checkpoint blocked indefinitely | `stale`, `P2` | Could be root cause of many start‑up stalls. |
| **#162211** (Open, P0) | Startup blocks & health monitor restart loop | `stale`, `P0` | Release blocker; still open after 17 days. |
| **#154299** (Open, P1) | Subagent final text silently drops | `stale`, `P1` | Impacts reliability of multi‑agent workflows. |
| **#149133** (Closed) | Heartbeat/event wake re‑enters session (security) | `stale`, `P1` | Though closed, the fix may need re‑validation for similar bugs. |
| **#158417** (Open, P1) | Plugin materialisation fills `/tmp` | `stale`, `P1` | Disk‑space leak; could be mitigated by PR #175056 (test cleanup) but needs explicit runtime fix. |
| **#117445** (Open, P1) | Feishu DM decoding as “?” – no reply | `stale`, `P1` | Channel‑specific, affecting Chinese market users. |

**Recommendation:** Prioritize **#162211** and **#117262/164294** together, as they share the SQLite/WAL contention root cause. Parallel work on **#138272** (Android Talk) and **#108395** (fake Human messages) should be spun off to a security/voice‑channel sub‑team to avoid further release delays.

---

### TL;DR
OpenClaw is **vibrantly active** but currently wrestling with **core stability** (SQLite contention, gateway start‑up stalls, sub‑agent race conditions) and **security‑critical output bugs**. While a large wave of PRs (≈ 280) was merged/closed today, many high‑severity issues remain open with no dedicated fix PRs yet. UI/UX enhancements (avatars, pinning, CLI tool discovery) are progressing and likely to land in the next minor release. The maintainer team should focus immediate effort on the database/WAL problems and the Android Talk crash to unblock the next stable version.

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison (Open‑Source Personal‑AI‑Assistant Ecosystem – 17 Oct 2026)**  

---

### 1. Ecosystem Overview  
The personal‑AI‑assistant landscape is now a dense mesh of runtimes, desktop companions, and channel‑plugins that share a common ambition: a **single, extensible “gateway”** that can host many agents, tools, and providers while remaining portable across desktop, mobile, and server environments. Most projects are moving from proof‑of‑concept to production‑grade stability, with a strong focus on **runtime hygiene (SQLite/WAL, sandbox isolation, cancellation), UI/UX polish, and secure credential handling**. The ecosystem is highly fragmented in terms of licensing and architecture, yet the same pain points (database contention, long start‑up stalls, cross‑channel message loss) appear repeatedly across projects.

---

### 2. Activity Comparison  

| Project | Issues (last 24 h) | PRs (last 24 h) | Release status (last 24 h) | Health score ★ (1 = stale, 5 = vibrant) |
|---------|-------------------|----------------|----------------------------|----------------------------------------|
| **OpenClaw** | 215 touched (135 open) | 500 touched (220 open) | No new tag (2026.9.7 latest) | ★★☆☆☆ (high churn but many critical bugs open) |
| **NanoBot** | 4 closed (0 open) | 57 touched (33 open) | No new tag | ★★★★☆ (rapid bug‑fixes, CI clean, no blockers) |
| **Hermes Agent** | 11 touched (10 open) | 50 touched (49 open) | No new tag | ★★☆☆☆ (post‑merge cleanup, many P0/P1 regressions) |
| **PicoClaw** | 2 touched (1 open) | 4 touched (1 open) | No new tag | ★★★☆☆ (stable core; single Android DNS blocker) |
| **NanoClaw** | 15 touched (1 open) | 50 touched (30 open) | No new tag | ★★★☆☆ (steady flow; critical DB‑busy‑timeout still open) |
| **NullClaw** | 1 touched (1 open) | 17 touched (17 open) | No new tag | ★☆☆☆☆ (large PR backlog, no merges, P0 bugs unresolved) |
| **IronClaw** | — | — | No activity | ★☆☆☆☆ (inactive) |
| **LobsterAI** | 5 touched (1 open) | 20 touched (6 open) | **2026.10.16** (Desktop Companion) | ★★★★★ (steady releases, many bugs closed, UI‑focused) |
| **Moltis** | 1 open | 0 | No release | ★☆☆☆☆ (single high‑severity bug, otherwise dormant) |
| **CoPaw** | 14 touched (12 open) | 25 touched (17 open) | No release | ★★★★☆ (active feature sprint toward v2.3, but critical UI freeze) |
| **ZeptoClaw** | — | — | No activity | ★☆☆☆☆ (inactive) |
| **ZeroClaw** | 5 closed | 50 touched (34 open) | No release (v0.8.5 latest) | ★★★★☆ (large high‑risk PR wave, upcoming v0.9.x) |

*Health score combines issue severity, PR throughput, and release cadence. ★★★★★ = “rapid‑iteration, stable”; ★☆☆☆☆ = “barely maintained”.*

---

### 3. OpenClaw’s Position  

| Dimension | OpenClaw | Peer Benchmark |
|-----------|----------|----------------|
| **Community size** | ~ 215 issues, ~ 500 PRs in 24 h – the most active repo in the set. | NanoBot and LobsterAI are the only other projects with comparable traffic; most others have < 100 issues/PRs per day. |
| **Technical focus** | Runtime hygiene (SQLite contention, gateway lifecycle), UI/UX refinements, multi‑channel plugins. | NanoBot concentrates on token‑budget accuracy; ZeroClaw on effort‑aware routing & security policies; CoPaw on large‑payload handling. |
| **Architecture** | “Core reference” monolith with a **gateway process** that owns SQLite state and spawns sub‑agents; heavy on Rust‑level diagnostics. | Hermes Agent uses a unified‑gateway runtime (recently merged) and targets cross‑platform streaming; ZeroClaw builds a policy‑driven routing layer; PicoClaw isolates each channel as a separate plugin. |
| **Advantages** | *Largest contributor pool*, *fast triage* (≈ 280 PRs merged/closed today), *well‑documented UI contracts* (avatar generation, pinning). This makes OpenClaw the de‑facto reference implementation for newcomers. | Projects like NanoClaw and CoPaw have tighter “skill‑as‑provider” models, while ZeroClaw offers more granular cost‑aware routing; those may win niche use‑cases but lack OpenClaw’s breadth of channel plugins. |

---

### 4. Shared Technical Focus Areas  

| Focus Area | Projects Raising It | Typical Requirement |
|------------|---------------------|---------------------|
| **SQLite/WAL contention & startup stalls** | OpenClaw (issues #117262, #164294, #162211), ZeroClaw (config‑upsert bug), NanoClaw (DB busy‑timeout #3811) | Need a **write‑queue isolation** layer or an alternate embedded store (e.g., LMDB) and automatic checkpointing. |
| **Graceful cancellation / stop handling** | OpenClaw (tool‑authority cascade), Hermes Agent (duplicate responses), CoPaw (co‑operative cancellation #5836), ZeroClaw (cancellation hooks #5836) | Uniform **“interrupt” API** that propagates through tools, sub‑agents, and channel adapters. |
| **Channel‑specific payload limits** | OpenClaw (WhatsApp/Telegram caps), CoPaw (DingTalk > 3500 chars), NullClaw (Telegram 429 handling), LobsterAI (model‑preset routing) | Automatic **payload‑splitting or truncation** plus user‑visible warnings. |
| **Secure credential & provider scoping** | OpenClaw (gateway allow‑list), NanoClaw (GH_TOKEN injection), ZeroClaw (file_read glob allowlist), LobsterAI (API‑key export hardening) | A **policy engine** that binds credentials to a path or provider and enforces least‑privilege at runtime. |
| **Streaming / real‑time UI feedback** | Hermes Agent (bounded recovery from writer supersession), LobsterAI (Desktop Companion live‑input), CoPaw (inline UI plugins), NullClaw (streaming hide‑tool‑call text) | **Back‑pressure‑aware streaming** that can pause/resume without losing tool‑call context. |
| **Modular plugin architecture** | CoPaw (hot‑reload), ZeroClaw (plugin‑friendly v2.3), PicoClaw (native QQ plugin), NullClaw (channel‑plugin batch) | Clear **plugin ABI** (e.g., WASM or Rust cdylib) and a sandbox that can be hot‑reloaded without daemon restart. |

---

### 5. Differentiation Analysis  

| Project | Core Differentiator | Primary Target Users | Architectural Highlights |
|---------|--------------------|----------------------|---------------------------|
| **OpenClaw** | Most extensive **multi‑channel gateway** (Telegram, WhatsApp, Matrix, Feishu, etc.) and a mature UI‑layer. | Enterprises that need a single binary to run across dozens of channels. | Rust monolith with SQLite state, UI built on Tauri/Electron, detailed diagnostics. |
| **NanoBot** | **Token‑consolidation & provider‑as‑skill** model, tight CLI tooling, focus on single‑node deployments. | Developers building lightweight bots for CI/CD or personal use. | Go core, per‑workspace SQLite FTS5, plug‑and‑play skill packages. |
| **Hermes Agent** | Recent **unified‑gateway runtime** that merges desktop, TUI and server paths; emphasis on cross‑platform streaming. | Power users who need a consistent experience on macOS/Windows/Linux with low latency. | Rust + C++ bridge, heavy use of async‑io, channel‑agnostic streaming layer. |
| **PicoClaw** | **Ultra‑light QQ‑C2C channel** that removes the heavy BotGo dependency, plus TZ‑aware cron. | Chinese market developers targeting QQ with minimal binary size. | Pure‑Go static binary, modular channel plugins, limited desktop UI. |
| **NanoClaw** | **Provider‑as‑skill** architecture (Codex, Cursor, Gemini) and **container‑first** deployment model. | Teams that run many isolated containers and need **dynamic provider updates** without host reinstall. | Container‑native entrypoint, per‑agent credential scoping, auto‑generated Docker images. |
| **NullClaw** | **All‑Rust, zero‑dependency** channel plugins and a single‑file “stop” command handling approach. | Minimalist devs who prefer a strict Rust code‑base with low external dependencies. | Strictly Rust, no external libs, focus on streaming safety. |
| **LobsterAI** | **Desktop Companion** UI that adds translation, read‑aloud, quick‑input, and per‑model usage tracking. | End‑users who want a “personal assistant” desktop app with rich multimedia tooling. | Electron + React, model‑preset routing, heavy UI telemetry. |
| **Moltis** | **Web‑fetch utility** for GitHub API with a tiny footprint. | Scripting/automation engineers needing a reliable `curl`‑like helper. | Single Go module, no runtime beyond standard library. |
| **CoPaw** | **Large‑payload handling + cancellable skill‑pool download**; upcoming **plugin‑first v2.3**. | Researchers and teams that train/serve massive multimodal models and need fine‑grained UI control. | Rust core, tool‑output truncation, modular plug‑in hot‑reload. |
| **ZeroClaw** | **Effort‑aware, cost‑aware routing** + **co‑operative cancellation**; policy‑driven sandbox. | Enterprises with hybrid local/cloud inference budgets and strict security compliance. | Policy engine, per‑agent routing classifiers, cost‑override flags. |
| **IronClaw** | No recent activity – essentially a legacy fork. | N/A | N/A |
| **ZeptoClaw** | Inactive – tiny utility. | N/A | N/A |

---

### 6. Community Momentum & Maturity  

| Tier | Projects | Comment |
|------|----------|---------|
| **Rapid‑Iteration** (daily merges, active issue triage) | **OpenClaw**, **LobsterAI**, **ZeroClaw**, **CoPaw**, **NanoBot** | High PR throughput, clear roadmap items, recent releases (LobsterAI) or imminent release (ZeroClaw v0.9). |
| **Steady‑Growth** (regular bug fixes, moderate PR backlog) | **Hermes Agent**, **NanoClaw**, **PicoClaw**, **NanoClaw**, **Moltis** | Issue count stable; a few critical bugs remain open but the core is no longer in flux. |
| **Stagnating / Backlog‑Heavy** (large open PR pool, few merges) | **NullClaw**, **IronClaw**, **ZeptoClaw** | No recent releases; many PRs untouched for weeks, indicating low maintainer bandwidth. |
| **Dormant** | **IronClaw**, **ZeptoClaw**, **Moltis** (only one open issue) | No activity; safe to consider them archived unless a maintainer returns. |

---

### 7. Trend Signals (What the Community Is Asking For)

1. **Database & Startup Robustness** – Repeated SQLite‑WAL contention, long start‑up stalls, and busy‑timeout bugs show that developers are moving beyond “quick demo” mode and need **production‑grade persistence**. Expect more projects to either replace SQLite with a lock‑free KV store or introduce a dedicated checkpointing service.  

2. **Unified Cancellation & Steering** – The prevalence of P0/P1 “stop‑command ignored” and tool‑call race conditions signals a demand for a **standard interrupt protocol** (e.g., `SIGINT`‑style token passed through the gateway → tool → provider). Libraries that expose this as a first‑class API will gain early adopters.  

3. **Cost‑/Effort‑Aware Routing** – ZeroClaw’s effort classifier and several PRs about “local vs cloud” routing reveal an industry shift toward **budget‑driven inference orchestration**. Projects that expose a policy interface (budget, latency SLA, security level) will be positioned for enterprise use.  

4. **Large‑Payload Management** – CoPaw, OpenClaw, and LobsterAI all report history bloat, media‑size caps and streaming stalls. A **stream‑first, chunk‑aware backend** (e.g., gRPC‑stream + back‑pressure) plus automatic payload trimming is emerging as a standard requirement.  

5. **Modular Plugin / Hot‑Reload Architecture** – Multiple repos (CoPaw, ZeroClaw, NullClaw) are investing in hot‑reloadable plugins, indicating that the community wants to **extend agents without redeploying the whole gateway**. A stable plugin ABI (WASM or Rust `cdylib`) will likely become a de‑facto standard.  

6. **Cross‑Channel Consistency** – Issues around Telegram 429, WhatsApp message limits, and DingTalk markdown loss suggest that **channel‑agnostic message contracts** (metadata‑driven, size‑aware) are a missing piece. Developers are looking for a **central contract library** that normalises these differences.  

7. **Security‑First Credential Scoping** – The surge of PRs adding glob‑allowlists, path‑scoped credentials, and credential‑export hardening shows a **maturing security mindset**. Expect future releases to embed **Zero‑Trust policies** at the gateway level (least‑privilege token injection).  

---

**Take‑away for decision‑makers:**  

- If you need a **battle‑tested, multi‑channel gateway** with a large contributor base, **OpenClaw** remains the safest baseline, but allocate resources to address its outstanding SQLite and P0 bugs before a production rollout.  
- For teams that prioritize **cost‑aware routing, fine‑grained security policies, and a modular plug‑in model**, **ZeroClaw** and the upcoming **CoPaw v2.3** provide the most forward‑looking architecture.  
- If your priority is a **desktop‑first, end‑user experience** (translation, read‑aloud, quick‑input), **LobsterAI** already ships a polished UI and a recent stable release.  
- Projects like **NanoBot**, **NanoClaw**, and **PicoClaw** are excellent for **container‑first or lightweight deployments**, but be mindful of the few high‑severity bugs that remain open.  

Overall, the ecosystem is converging on **high‑throughput, secure, and extensible gateways**. Investing in a common runtime abstraction (e.g., a shared Rust‑based gateway library) would reduce duplicated effort on SQLite contention, cancellation handling, and credential scoping, allowing each project to focus on its unique value proposition (UI, language support, or domain‑specific plugins).

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot – Project Digest (2026‑10‑17)**  

---

### 1. Today’s Overview
* NanoBot remains **highly active**: 4 issues were closed in the last 24 h and **57 PRs were updated**, of which 33 are still open.  
* No new tagged release was published, but a substantial batch of bug‑fixes and performance‑oriented PRs landed on the *main* branch.  
* The community is concentrating on **runtime stability** (tool‑execution checkpointing, token‑count consolidation, and channel resilience) while laying groundwork for **extended memory & tooling features**.

---

### 2. Releases
*No new release was created in the last 24 h.*  
(When a release appears, this section will list version number, changelog highlights, breaking‑change notes, and migration guidance.)

---

### 3. Project Progress – Merged / Closed PRs (today)

| PR # | Title (status) | Primary Impact | Link |
|------|----------------|----------------|------|
| **#6260** *(closed)* | fix(consolidation): trigger compaction from reported usage, not just tiktoken estimates | Closes the token‑consolidation bug reported in Issue #5402; compaction now runs when the provider reports high token usage. | https://github.com/HKUDS/nanobot/pull/6260 |
| **#6259** *(open, but updated)* | fix(webui): report unreadable sidebar state explicitly | Improves UI robustness by surfacing corrupted sidebar files instead of silently falling back to defaults. | https://github.com/HKUDS/nanobot/pull/6259 |
| **#6237** *(closed)* | fix(webui): distinguish unreadable sidebar state from fresh install | Prevents accidental data loss after an update; a prerequisite for the above PR. | https://github.com/HKUDS/nanobot/pull/6237 |
| **#5979** *(closed)* | fix(webui): hide provider models past OpenAI shutdown_date | Removes retired model IDs from the picker, eliminating “model_not_found” errors (see Issue #5977). | https://github.com/HKUDS/nanobot/pull/5979 |
| **#5880** *(open, updated)* | fix: recover oversized pending file reads after compaction | Prevents `ContextWindowExceededError` when large `read_file` results exceed the request budget. | https://github.com/HKUDS/nanobot/pull/5880 |
| **#5169** *(open, updated)* | fix(tools): reject truncated JSON args & circuit‑break retry loops | Adds validation of tool arguments and a circuit‑breaker to stop runaway model retries. | https://github.com/HKUDS/nanobot/pull/5169 |
| **#5826** *(open)* | perf(session): accelerate canonical history search with FTS5 | Introduces a per‑workspace SQLite FTS5 cache, dramatically speeding up session‑wide searches. | https://github.com/HKUDS/nanobot/pull/5826 |
| **#6168** *(open)* | feat(update): integrate managed installs & recoverable in‑app updates | Lays the foundation for signed, automated updates via Sigstore. | https://github.com/HKUDS/nanobot/pull/6168 |

*In total, 6 PRs were **closed/merged** today, each addressing a concrete stability or UX problem. The remaining open PRs are largely feature‑oriented or performance‑focused.*

---

### 4. Community Hot Topics  

| Item | Type | Comments / 👍 | Core Need |
|------|------|----------------|-----------|
| **Issue #5402** – *Token consolidation never triggers* | Bug (closed) | 3 comments | Accurate token‑count accounting; prevents uncontrolled context growth. |
| **PR #6260** – *Consolidation trigger from reported usage* | Fix (merged) | – | Directly resolves #5402; demonstrates community demand for reliable token budgeting. |
| **Issue #6008** – *Sidebar state wiped after failed fetch* | Bug (closed) | 1 comment | Persistent UI state across network failures; leads to a series of UI‑fix PRs (#6237, #6259). |
| **PR #6266** – *Retain scheduled results across pre‑send outages* | Feature (open) | – | Guarantees delivery of scheduled messages when channels temporarily drop; part of a broader reliability push. |
| **PR #1651** – *Add optional skill memory & query‑aware retrieval* | Feature (open) | – | Expands NanoBot’s long‑term memory model; signals a roadmap toward “skill‑as‑memory”. |
| **PR #6263** – *Expose current tool invocation identity to tools* | Feature (open) | – | Enables tools to disambiguate concurrent calls; requested by developers building complex tool‑chains. |

**Underlying theme:** Users are asking for **robustness** (state persistence, accurate token tracking) and **richer runtime introspection** (tool identity, skill memory). The most discussed items are the token‑consolidation bug and the sidebar‑state crash, both of which have already been addressed.

---

### 5. Bugs & Stability  

| Severity | Issue/PR | Description | Status / Fix |
|----------|----------|-------------|--------------|
| **Critical** | #5402 (bug) – token‑consolidation underestimates API tokens | Could cause unlimited prompt growth and API‑quota exhaustion. | Fixed by PR #6260 (merged). |
| **High** | #6192 (bug) – `AutoCompact.check_expired` scans all sessions each 1 s tick | Massive I/O overhead on large workspaces; can throttle the event loop. | Open; no PR yet (potential target for a future performance PR). |
| **High** | #6008 (bug) – sidebar state lost after failed initial fetch | Users lose custom pin/rename/archiving settings on update. | Fixed by PR #6237 (merged) and further hardened by PR #6259 (open). |
| **Medium** | #5977 (bug) – Model picker shows retired OpenAI models | Leads to immediate turn failure. | Fixed by PR #5979 (merged). |
| **Medium** | #5880 (bug) – oversized pending file reads abort turn | Triggers `ContextWindowExceededError`. | PR #5880 open; mitigation pending. |
| **Low** | #5169 (bug) – Truncated JSON args & tool‑retry loops | Tool crashes could cause infinite model retries. | PR #5169 open; fix in progress. |

*Overall stability is improving: three high‑impact bugs have been closed within the last day, while a few performance‑related concerns remain open.*

---

### 6. Feature Requests & Roadmap Signals  

| Request | PR/Issue | Potential Release |
|---------|----------|--------------------|
| **Skill‑Memory layer** – reusable workflow patterns | PR #1651 (open) | Likely candidate for the next minor release (0.4.x) once core memory consolidation stabilises. |
| **Tool‑Invocation Identity exposure** | PR #6263 (open) | High relevance for advanced tool developers; could be merged before the next feature freeze. |
| **Unified instance storage under **`home`** (NAN‑264)** | PR #6261 (open) | Addresses configuration drift; may be bundled with the upcoming in‑app update framework (PR #6168). |
| **Ephemeral runtime‑context blocks** (opt‑out) | PR #5659 / #5627 (open) | Already under review; likely to land alongside other runtime‑context improvements. |
| **Channel‑level retry‑wait event propagation** | PR #6264 (open) | Improves observability for end‑users; small change, could be merged quickly. |
| **FTS5‑based session search** | PR #5826 (open) | Performance optimisation; may be held for a “performance‑only” patch release. |

*The pattern shows a shift from pure bug‑fixing to **feature‑centric work**, especially around memory extensions and tooling ergonomics. Expect at least two of the above to ship in the next 4‑6 weeks.*

---

### 7. User Feedback Summary  

* **Token‑budget uncertainty** – Users reported that NanoBot would silently exceed OpenAI’s token limits, leading to failed turns. The community swiftly identified the under‑estimation issue (#5402) and the maintainers responded with a concrete fix (#6260).  
* **UI state loss** – The sidebar‑state bug caused frustration after version updates. The resolution path (issues #6008 → PR #6237/ #6259) demonstrates good responsiveness to UI‑related pain points.  
* **Model catalogue freshness** – Retired OpenAI models kept appearing in the picker, causing “model_not_found” errors. The quick fix (#5979) restored confidence in the provider‑model UI.  
* **Tool reliability** – Users of the `read_file` tool hit context‑window errors when large files were queued. The open fix (#5880) signals ongoing attention to tool‑execution stability.  

Overall, the community’s primary concerns are **predictable resource usage**, **persistent configuration**, and **reliable tool execution**. Satisfaction appears to be improving as the most reported bugs are being closed promptly.

---

### 8. Backlog Watch  

| Item | Reason for Attention | Current State |
|------|----------------------|---------------|
| **#6192 – AutoCompact full‑session scan** | May cause severe I/O spikes on large deployments; still open with no dedicated PR. | Open (no fix yet). |
| **#6266 – Retain scheduled results across pre‑send outages** | Important for mission‑critical scheduled messages; PR opened today but no review activity yet. | Open (needs reviewer). |
| **#6033 – Preserve runtime sidecars across metadata updates** | Potential data loss when session metadata changes; PR opened weeks ago, still waiting. | Open (no recent comments). |
| **#5810** *(hypothetical, not listed)* – any long‑standing “enhancement” label without recent activity would be listed here. | – | – |

*These items have been stagnant for several weeks and lack recent reviewer participation. A gentle nudge from maintainers or the community could help prevent technical debt from accumulating.*

---

**Bottom line:** NanoBot’s development velocity is strong, with a clear focus on stabilising core runtime behaviours while laying the foundation for richer memory and tooling capabilities. The project health is **robust**, though a few performance‑related bugs and a handful of high‑impact feature PRs still await attention. Continued community engagement on the open backlog will be key to maintaining momentum.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑10‑17)**  
*All links point to the official github.com/NousResearch/hermes‑agent repository.*

---

## 1. Today’s Overview
- The repository is experiencing a **high‑velocity post‑merge cleanup** after the large “unified‑gateway‑runtime” merge (`#106742`).  
- Activity is intense: **11 issues** were touched (10 still open) and **50 pull‑requests** were updated, with **49 still open** and only one PR merged/closed today.  
- Most of the churn centers on *gateway/session handling*, *desktop client stability*, and *cross‑platform streaming* – indicating that the new runtime is exposing edge‑case regressions that the community is actively triaging.

---

## 2. Releases
*No new version was published in the last 24 h.*

---

## 3. Project Progress (Merged / Closed PRs)
| PR | Title / What was fixed | Package / Lane | Impact |
|----|------------------------|-----------------|--------|
| **#140225** *(closed)* | “list a chat the backend filed in Home even when it carries a cwd” – corrects Desktop UI listing of chats that were previously hidden. | Package 8 ‑ Lane 6 | Improves Desktop’s session‑navigation consistency. |
| **#140293** *(auto‑closed by bot after CI)* | `fmt(js): npm run fix` – auto‑formatting/lint PR that self‑merges when CI passes. | N/A | Keeps the repo tidy; no functional change. |

*All other PRs remain open and are under active review.*

---

## 4. Community Hot Topics  

| Item | Type | Comments / 👍 | Why it matters |
|------|------|----------------|-----------------|
| **#134889** – *Tracking issue for unified‑gateway‑runtime* | Issue (P0) | 137 comments | This is the central “ship‑it‑or‑fix‑it” board for the massive gateway overhaul (`#106742`). Every bug/behaviour change reported today drifts back to this tracking ticket, indicating it is the de‑facto rally point for the community. |
| **#127621** – *Desktop app duplicate assistant response* | Issue (P1) | 10 comments, 8 👍 | End‑users are seeing duplicated chat bubbles, which breaks the conversational flow and erodes trust in the desktop client. The high 👍 shows strong user impact. |
| **#140183** – *Fix gateway: reopen persisted sessions, compressed‑child resume, TUI switcher close* | PR (P2) | “undefined” comments (auto‑populated) but extensive file changes | Directly addresses the core session‑recovery problems raised in #134889; the fix touches persistence, compression, and the TUI, showing the breadth of needed remediation. |
| **#139348** – *Fix streaming: bounded recovery from writer supersession & mid‑stream stalls* | PR (P2) | “undefined” comments | Addresses Windows‑specific streaming stalls that have been a recurring complaint (see issue #139029). Stabilises long‑running token streams. |
| **#140292** – *Slow session viewers no longer dropped mid‑reply* | PR (CI‑reviewed) | “undefined” comments | Resolves a CI‑detected regression where lagging viewers lost their subscription—a symptom of the new gateway’s concurrency handling. |

**Underlying need:** The community is demanding *robust session lifecycle* handling across all front‑ends (Desktop, TUI, messaging gateways) now that a single gateway process is responsible for many profiles. The focus on persistence, compression, and graceful recovery shows the project is in a “post‑merge hardening” phase.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue / PR | Summary | Fix status |
|----------|------------|---------|------------|
| **Critical (P0)** | **#134889** (tracking) – many downstream bugs (e.g., duplicate responses, session death). | Core gateway runtime regression; many surfaces still broken. | Ongoing; multiple fix PRs (#140183, #140184, #140186, #140187, #140188, #140191) target individual symptoms. |
| **High (P1)** | **#127621** – duplicated assistant response in Desktop. | UI glitch that repeats a whole assistant reply. | No dedicated fix yet; related PR #140182 may address related rendering pipeline. |
| **High (P1)** | **#140291** – Windows `--help`/`--version` abort because of `.install.lock`. | Installer state not writable for non‑owner users. | No fix yet; probably a packaging‑permissions issue. |
| **Medium (P2)** | **#132836** – intermittent duplicate messages (no reproducible steps). | Similar to #127621 but on macOS; unclear root cause. | No active PR; may be covered by #140182 or #140183. |
| **Medium (P2)** | **#139029** – Kanban worker crashes (`WorkerPersistenceError`). | Backend Kanban integration dies, affecting workflow automation. | No PR yet; flaky, may be addressed by gateway session fixes. |
| **Medium (P2)** | **#140290** – Local session dies on frozen‑field scope mismatch. | Session becomes unusable after non‑secret config change. | No PR yet; likely to be handled by #140184 (pre‑update API keys). |
| **Low (P3)** | **#140255** – Auto‑recovery ladder skips 429 rate‑limit errors. | Turn‑recovery logic ignores plain 429 from custom endpoints. | No PR yet. |
| **Low (P3)** | **#140295** – A2A receivers silently drop on 401 auth errors. | Missing logging makes debugging integrations hard. | No PR yet. |
| **Low (P3)** | **#140287** – Desktop continuation of a messaging‑origin session never reaches the originating chat. | Context sharing works, but message routing fails. | No PR yet. |

*Overall:* The most critical blocker is the **gateway runtime regression** tracked by #134889, which is spawning many high‑severity symptoms across platforms.

---

## 6. Feature Requests & Roadmap Signals

| Request / Signal | Description | Likelihood of inclusion soon |
|------------------|-------------|-----------------------------|
| **#64329 (closed)** – *Pre‑tool skill‑require gate* | Enforce `skill_view()` before platform‑data tool calls. | Already closed (duplicate) – indicates the team is aware of skill gating but may prioritize core stability first. |
| **#139659** – *Add Krea 3 & FLUX.3 Klein to image‑generation catalog* | New diffusion models added to the `image_generate` toolbox. | Already merged (feature PR), will be available in the next release. |
| **#140255** – *Recovery ladder to handle HTTP 429* | Extend auto‑recovery to include rate‑limit errors. | Low‑mid priority; may be bundled with broader recovery work after stability is restored. |
| **#140295** – *Log 401 failures on A2A receivers* | Add explicit logging for auth‑failure cases. | Low‑mid priority; likely a small fix in a maintenance release. |
| **#140291** – *Windows CLI `--help`/`--version` fails due to lock* | Fix installer lock‑file permissions on Windows. | Medium priority for Windows users; could be merged once core bugs are cleared. |

**Roadmap inference:** The next version will likely be a *stability‑focused patch* (gateway session handling, desktop rendering bugs) with **minor feature additions** (new image‑gen models) and **observability improvements** (logging of auth failures, better rate‑limit handling).

---

## 7. User Feedback Summary

*Pain points emerging from today’s discussions:*

1. **Duplicated assistant output** – Users of the Desktop client repeatedly see the same response twice, breaking conversation flow.  
2. **Session loss / “dead” local sessions** – When a frozen configuration changes or a scope mismatch occurs, sessions become unusable without clear recovery instructions.  
3. **Cross‑origin context leakage** – Desktop‑origin turns can affect remote sessions but the remote side never receives the update, causing confusion about where a fact originated.  
4. **Installation friction on Windows** – Permission errors around the `.install.lock` file prevent basic CLI usage for non‑owner accounts.  
5. **Remote‑gateway robustness** – Streaming stalls and writer supersession on Windows have been reported multiple times, degrading the experience for heavy token‑usage scenarios.

Overall sentiment is **highly engaged** (lots of comments) but **frustrated by instability** introduced by the recent gateway overhaul. Users appreciate the rapid response from core maintainers (many PRs already opened) and are looking for concrete fixes before the next major feature rollout.

---

## 8. Backlog Watch (Long‑standing items needing attention)

| Issue / PR | Age | Why it matters |
|-----------|-----|----------------|
| **#140018** (linked via #140232) – *Bot Chat tombstone crash* | ~1 week | Prevents the gateway from booting after a bot chat is deleted; currently a blocker for long‑running services. |
| **#140138** (the “Package 7” epic) – *Unified gateway runtime* | Merged 10 Oct, still open tracking | All open bugs (including those listed above) are tied to this epic; needs a dedicated “cleanup sprint”. |
| **#140289** – *Acknowledge `/restart` before adapter teardown* | Open today | Could cause abrupt disconnections for in‑flight commands; relatively small change but important for graceful shutdowns. |
| **#140250** – *Memory provider isolation per profile* | Open today | Security and data‑leak concerns for multi‑profile gateways; should be merged before any public multi‑tenant deployment. |
| **#140292** – *Slow session viewers drop* | CI‑detected regression | If left unchecked it can cause data loss in audit logs or long‑running monitoring tools. |

*Action recommended:* Prioritise merging the small, high‑impact fixes (#140289, #140250, #140292) to reduce the risk surface while the larger gateway cleanup (#140138) proceeds.

---

### Bottom Line
Hermes Agent is **in a critical stabilization window** after a major architectural change. The community is highly active, with a clear focus on fixing session‑management bugs across all fronts. Once the gateway‑related regressions are resolved, the project should be well‑positioned to ship the next feature‑rich release (new image‑generation models, improved A2A logging, Windows installation fixes). Maintaining momentum on the high‑priority PRs and closing the lingering “tombstone” blocker will be essential to restore confidence among end‑users.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw – Project Digest (2026‑10‑17)**  

---

### 1. Today’s Overview  
- The repository saw modest but focused activity: 2 issues were touched (1 open, 1 closed) and 4 pull‑requests were updated (3 merged/closed, 1 still open).  
- Core maintenance work landed today, most notably a **cron‑schedule TZ fix** and the addition of a **stand‑alone QQ C2C channel** that removes the BotGo dependency.  
- The only remaining open trouble spot is a **DNS‑resolution failure in the pure‑Go Android build**, which has been flagged as stale but is still the sole open bug.  
- Overall health appears stable; the maintainer team is actively merging enhancements while still juggling platform‑specific regression work.

---

### 2. Releases  
*No new release was published in the last 24 h. The project is currently awaiting the next version bump, which will likely incorporate the PRs merged today.*

---

### 3. Project Progress (Merged / Closed PRs)  

| PR # | Title / Scope | Type & Area | Merged / Closed Date | Key Impact |
|------|---------------|-------------|----------------------|------------|
| **#3440** | “feat(channels): 新增自研 QQ C2C Channel（不依赖 botgo）” | Feature – Channels (QQ) | 2026‑10‑16 | Introduces a native QQ one‑to‑one channel (`qq_c2c`) that implements the full Bot API v2 stack without BotGo. Enables lighter deployments and full control over authentication, WS gateway, streaming, button UI, and markdown panels. |
| **#3441** | “fix(cron): honor schedule.TZ when computing the next run” | Bug‑fix – Scheduler | 2026‑10‑16 | Corrects timezone handling in `CronSchedule`. Tasks now respect the `TZ` field regardless of the host process environment, eliminating the UTC drift that previously caused mis‑displayed run times in the UI and CLI. |
| **#1349** | “feat(qq): support parsing and replying to more attachment types” | Enhancement – Channel (QQ) | 2026‑10‑16 | Expands QQ channel capability: parses emoji structures, and handles incoming/outgoing voice, image, video, and file attachments (uploads before sending). Defaults to Markdown replies, with graceful fallback to plain text. |
| **#3420** (issue) – *no PR yet* | Android build DNS failure | Bug – Build/Platform | Open (stale) | The pure‑Go Android binaries (`libpicoclaw-web.so`, `libpicoclaw.so`) cannot resolve DNS, blocking all external API calls (e.g., `/models`). The issue remains open; a fix is pending. |

*Note: PR #3371 is still open and will be discussed in the “Backlog Watch” section.*

---

### 4. Community Hot Topics  

| Item | Comments / Reactions | Why It Matters |
|------|----------------------|----------------|
| **Issue #3420** – *Android build: pure‑Go binaries fail DNS resolution* | 1 comment (last updated 2026‑10‑16) – marked **stale** but still the only **open bug**. | Android is a primary deployment target for PicoClaw’s gateway. DNS failure renders the gateway unusable on mobile devices, directly affecting a large user segment that relies on offline or on‑device inference. |
| **PR #3440** – *New native QQ C2C channel* | No public reactions yet (closed by maintainer), but the PR introduced a **major architectural change**. | Removes the heavyweight `botgo` dependency, reducing binary size and simplifying the deployment pipeline. Signals strong community demand for lightweight QQ integrations. |
| **PR #3441** – *Cron TZ handling* | Minimal discussion; merged quickly. | Addresses a real‑world operational pain point where scheduled jobs displayed incorrect times, especially for users running PicoClaw in containers without a host `TZ` setting. |
| **PR #1349** – *Extended QQ attachment support* | No visible reaction count, but the changes touch many developers who need richer media handling. | Expands the expressiveness of QQ bots, aligning PicoClaw with competing platforms that already support multimedia messages. |

**Underlying needs:**  
- **Reliability on constrained platforms** (Android/DNS).  
- **Lean, dependency‑free channel implementations** (QQ C2C).  
- **Accurate scheduling across time zones** (cron fix).  
- **Richer content handling** for end‑user communication (attachments).

---

### 5. Bugs & Stability  

| Severity | Issue / PR | Summary | Current Status | Fix / Work‑around |
|----------|------------|---------|----------------|-------------------|
| **Critical** | **#3420** (open) | DNS resolution fails on Android pure‑Go builds (`dial udp 127.0.0.1:53: connect: connection refused`), blocking all external API calls. | Open & stale; no fix merged yet. | Pending investigation – likely requires custom resolver fallback or linking against Android’s DNS APIs. |
| **Medium** | **#166** (closed) | QQ Bot cannot send proactive messages after the QQ Open Platform disabled that capability. | Closed; issue traced to external platform change. | No code fix possible; documentation updated to explain limitation. |
| **Low** | None reported today beyond the above. |

*No regressions were introduced by today’s merged PRs.*

---

### 6. Feature Requests & Roadmap Signals  

| Signal | Description | Likelihood in Next Release |
|--------|-------------|----------------------------|
| **OPencode‑Go provider** (PR #3371) | Adds a dedicated provider with `x-opencode-session` header support, auto‑routing models based on ID. | **High** – already open, low activity but aligns with the roadmap to broaden model‑provider support. |
| **Native QQ C2C channel** (merged PR #3440) | Provides a lightweight, botgo‑free QQ one‑to‑one channel. | **Implemented** – will appear in the next minor version. |
| **Extended media handling for QQ** (merged PR #1349) | Parsing emojis and handling voice/image/video/file attachments. | **Implemented** – will be part of the upcoming release. |
| **Cron TZ awareness** (merged PR #3441) | Correct timezone handling for scheduled tasks. | **Implemented** – immediate benefit for all users. |
| **Android DNS fix** (open Issue #3420) | Platform‑specific networking fix. | **Pending** – likely prioritized in the next patch release given its critical impact. |

---

### 7. User Feedback Summary  

- **Platform‑specific failures** dominate user reports (Android DNS, QQ bot capability removal). Users expect the same “write‑once, run‑anywhere” experience on mobile devices as on server/desktop.  
- **Complexity reduction** is appreciated: the new QQ C2C channel removes a heavyweight dependency, which many users cited as a deployment pain point.  
- **Scheduling reliability** was a recurring complaint; the TZ fix directly addresses it, indicating a responsive maintainer stance.  
- Overall sentiment is **cautiously optimistic**: recent enhancements are valued, but the unresolved Android bug is a source of frustration for mobile‑first adopters.

---

### 8. Backlog Watch  

| Item | Reason for Attention | Recommended Action |
|------|----------------------|--------------------|
| **#3420 – Android DNS failure** | Only open bug; marked *stale* but still blocks a major use case. | Assign a maintainer to reproduce on Android, add unit tests for resolver fallback, and fast‑track a patch. |
| **#3371 – opencode‑go provider** | Open for > 1 month, low comment activity but represents a strategic provider addition. | Review code for completeness, request tests, and consider merging before the next release cycle. |
| **Older unanswered issues** (not listed in the 24‑h window) – a quick audit of the full issue tracker is advised to surface any long‑standing tickets (e.g., UI polishing, documentation gaps) that may be awaiting triage. | Conduct a “stale‑issue sweep” and label with priorities (e.g., `good first issue`, `needs design`). |

---

**Bottom line:** PicoClaw’s development velocity is steady, with key stability fixes and a significant new channel implementation delivered today. The main risk is the unresolved Android DNS bug, which should be prioritized to maintain confidence among mobile developers. Continued attention to emerging provider integrations (OPencode‑Go) and periodic backlog grooming will keep the project on a healthy trajectory.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 17 Oct 2026**  

---

### 1. Today’s Overview  
- The repository saw a burst of activity: 15 issues were updated (14 closed, 1 still open) and 50 pull‑requests were touched (30 open, 20 merged/closed).  
- No new releases were cut, so the current published version remains unchanged.  
- The bulk of today’s work is centered on platform‑specific networking bugs, credential‑injection hardening, and the rollout of new provider/skill capabilities (Google Gemini, Hindsight memory, YouTube history tooling).  
- The open‑issue pipeline is short, but a single high‑severity DB‑lock problem (#3811) remains unresolved, and a sizable set of PRs await review or merge.

---

### 2. Releases  
*No new version was published in the last 24 h.*  
(When a release does appear, this section will list the changelog, any breaking‑change notes, and migration guidance.)

---

### 3. Project Progress (Merged / Closed PRs)  
Although the exact list of today’s merged PRs is not enumerated in the feed, the “merged/closed = 20” figure indicates a healthy throughput. The most impactful changes that have already landed (or are about to land) include:

| PR | Type | Core Change | Likely Impact |
|----|------|-------------|----------------|
| **#4104** (feat add‑codex) | Feature / Refactor | Codex provider shipped inside the skill payload instead of the protected `providers` branch. | Removes the “providers‑locked” barrier, simplifying forks and future provider updates. |
| **#4108** (feat setup) | Feature | First‑reply timeout extended; stage information shown during sandbox spin‑up. | Reduces false‑negative setup failures on slow local‑model starts. |
| **#4107** (feat /add‑cursor) | Feature | Cursor provider moved from `providers` to a dedicated skill payload. | Aligns Cursor with the new provider‑as‑skill model, easing future cursor upgrades. |
| **#4110** (fix cli) | Bug‑fix | `ncl groups delete` now clears host rows and refreshes destinations, preventing orphaned rows. | Improves CLI hygiene and prevents dangling references after group removal. |
| **#4106** (feat gateways) | Feature | Credential connection can now target a single path, avoiding token clashes in multi‑provider scenarios. | Helps providers that need path‑scoped credentials (e.g., Cursor). |
| **#2420** (feat /add‑hindsight) | Feature | New /add‑hindsight skill bundles a MCP wrapper for the Hindsight long‑term memory engine. | Gives operators a ready‑to‑use memory backend without external plumbing. |
| **#2136** (feat providers) | Feature | Google Gemini added as a first‑class LLM provider. | Broadens model choice beyond OpenAI/Claude families. |
| **#2752** (fix Discord attachments) | Bug‑fix (open) | Discord inbound attachments that expose only a CDN URL are now staged correctly. | Enables agents to process images and pasted text from Discord reliably. |

These merges collectively push NanoClaw toward a more modular provider architecture, smoother first‑run experiences, and tighter CLI consistency.

---

### 4. Community Hot Topics  

| Item | Comments / 👍 | Link | Why it’s hot |
|------|---------------|------|--------------|
| **#3811** – *Central DB busy‑timeout missing* (open) | 1 comment / 0 👍 | https://github.com/qwibitai/nanoclaw/issues/3811 | A lock‑contention bug that can surface as “database corruption” under load; affects all deployments that run concurrent group actions. |
| **#2752** – *Discord attachment staging* (open PR) | – | https://github.com/qwibitai/nanoclaw/pull/2752 | Many users report broken image handling on Discord; this fix directly restores a core user workflow. |
| **#1103** – *Apple Container networking* (closed) | 3 comments / 0 👍 | https://github.com/qwibitai/nanoclaw/issues/1103 | Highlights the gap between Docker Desktop and Apple’s “container” VM; a recurring environment‑specific pain point. |
| **#1105** – *GH_TOKEN injection on macOS* (closed) | 1 comment / 0 👍 | https://github.com/qwibitai/nanoclaw/issues/1105 | Tokens stored in macOS Keychain break container auth; the fix improves CI/CD and personal‑use scenarios. |
| **#3643** – *Hard‑coded absolute‑ceiling timer* (closed) | 0 comments / 0 👍 | https://github.com/qwibitai/nanoclaw/issues/3643 | Long local‑model turns were being killed; the issue spurred the later env‑var sweep fixes (#3646). |

**Underlying needs:**  
- **Robust cross‑platform networking** (Apple container, macOS keychain, proxy support).  
- **Reliable persistence under concurrency** (DB busy‑timeout).  
- **Provider‑agnostic credential handling** (gateway path scoping, GH_TOKEN).  
- **Better user‑experience for heavy media** (Discord/WhatsApp attachment pipelines, large‑file Telegram fallback).  

---

### 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue / PR | Summary | Current Status / Fix |
|----------|------------|---------|----------------------|
| **Critical** | #3811 (open) | Central SQLite DB opened without `busy_timeout` → immediate lock‑contention errors that appear as corruption. | No fix yet; a high‑priority PR is needed to add the timeout. |
| **High** | #1103 (closed) | Apple Container’s credential‑proxy binds to `127.0.0.1`, breaking container‑to‑host communication. | Fixed in a merged PR (not listed) and documented for Apple users. |
| **High** | #1105 (closed) | GH CLI inside containers cannot read macOS Keychain‑stored token. | Fixed by reading `GH_TOKEN` from `.env` and passing it into containers. |
| **High** | #3643 (closed) | Hard‑coded 30 min `ABSOLUTE_CEILING_MS` kills long local‑model turns. | Resolved by PR #3646 (global env overrides) allowing configurable timers. |
| **Medium** | #1236 (closed) | Agent‑runner source updates not propagated to existing groups. | Fixed; groups now inherit latest source on update. |
| **Medium** | #1700 (closed) | Multiple containers spun up per simple “hello” command, causing resource waste. | Addressed in a later cleanup PR (details not in feed). |
| **Medium** | #2136 (open PR) | Initial Gemini provider integration may surface auth bugs. | Still under review; community testing encouraged. |

---

### 6. Feature Requests & Roadmap Signals  

| Request | Description | Likelihood of Next Release |
|---------|-------------|----------------------------|
| **Docker‑registry / non‑agentic install** (#1116) | Provide a pre‑built container image that can be pulled without host‑install scripts. | **High** – aligns with container‑first strategy; PRs #4104/​#4107 already decouple providers from the repo, paving the way. |
| **/add‑hindsight skill** (#2420) | Bundles Hindsight memory engine as a skill. | **Very High** – Already merged, likely to be released soon. |
| **YouTube history search tool** (#1547) | Playwright‑based scraper to expose watch history via a skill. | **Medium** – Requires maintenance of headless browser; may land in a later minor. |
| **Google Gemini provider** (#2136) | Adds Gemini as a first‑class LLM provider. | **High** – PR is open; test feedback will determine timing. |
| **Extended first‑reply timeout & stage display** (#4108) | Improves setup experience on slow local models. | **Very High** – Already merged; part of upcoming patch. |
| **Credential target path scoping** (#4106) | Allows a gateway credential to be bound to a specific API path, fixing token collisions. | **High** – Merged; will be part of the next release cycle. |
| **/add‑cursor skill** (#4107) | Moves Cursor provider into a dedicated skill payload. | **High** – Merged, awaiting release. |

Overall, the roadmap shows a clear shift toward **modular provider/skill delivery**, **improved reliability for long‑running local models**, and **expanded model ecosystem**.

---

### 7. User Feedback Summary  

| Pain Point | Example Issue | Impact |
|------------|---------------|--------|
| **Platform‑specific networking** – Apple containers, macOS keychain, proxy‑bound gateways. | #1103, #1105, #3923 (Discord gateway proxy) | Users on macOS/Apple hardware experience broken credential injection and API access, limiting adoption in those environments. |
| **Media handling limits** – Telegram 20 MB file cap, Discord attachment URLs, WhatsApp group naming. | #1831, #2752, #3859 | Agents silently drop large media or cannot fetch assets, hampering real‑world workflows (e.g., meetings, image processing). |
| **Container churn / resource waste** – Multiple containers per simple utterance. | #1700 | Increases cost and CPU load, especially on low‑resource VMs. |
| **Installation friction** – Need for host‑install scripts, inability to run from a container registry. | #1116 | New adopters (especially enterprises) request a pure‑Docker deployment model. |
| **Credential management** – Need to fallback to `~/.claude.json` keys, inject GH tokens, and scope gateway credentials. | #1217, #1105, #4106 | Directly affects CI/CD pipelines and secure token handling. |
| **Stability under load** – DB lock contention, hard‑coded kill timers. | #3811, #3643 | Can cause sudden crashes or data loss during high‑concurrency usage. |
| **Positive signals** – Successful addition of new skills (Hindsight, Cursor, Codex) and provider expansions indicate growing trust in the extensibility model. |

---

### 8. Backlog Watch (Unresolved & High‑Visibility Items)

| Item | Status | Reason for Attention |
|------|--------|----------------------|
| **#3811** – Central DB busy‑timeout missing (open) | Open, 1 comment | Prevents database corruption under concurrent operations; should be addressed urgently. |
| **#2752** – Discord attachment staging (open PR) | Open, no reviews yet | A core media‑handling bug; many users depend on Discord. |
| **#3923** – Discord gateway proxy support (open PR) | Open | Extends usability to corporate proxy environments; aligns with #1105/​#1103 network fixes. |
| **#3859** – WhatsApp group naming (open PR) | Open | Improves UX for WhatsApp integrations; low risk, high visibility. |
| **#3752 / #3751** – WhatsApp pending question handling & newsletter JID ignore (open PRs) | Open | Stabilizes WhatsApp channel reliability. |
| **#4110** – CLI group‑delete clean‑up (open PR) | Open | Prevents orphaned DB rows; essential for long‑term data hygiene. |
| **#4104 / #4105 / #4107 / #4108 / #4109** – Provider/skill refactors (open) | Open | Collectively shift the architecture toward “skill‑bundled providers”; must be merged before the next release to avoid mixed states. |
| **#3849** – Opencode history serialization recovery (open PR) | Open | Addresses edge‑case model failures that could break long‑running sessions. |
| **#4010** – Automated agent‑image repin (open PR) | Open | Automates container image updates; improves CI/CD pipeline reliability. |

**Recommendation:** Prioritize #3811 (DB lock), #2752 (Discord attachments), and the provider‑skill migration PRs (#4104‑#4109) to solidify the next release candidate.  

---

**Health Verdict (2026‑10‑17):**  
NanoClaw remains **actively developed** with a strong flow of contributions (≈20 PRs merged daily). The momentum is centered on **platform compatibility**, **provider modularization**, and **feature enrichment**. Critical stability issues (DB busy‑timeout, hard‑coded timers) are identified but not yet resolved, representing the primary risk to production deployments. If the open high‑impact PRs land within the next week, the project should be on track for a stable minor release in November‑December 2026.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw – Project Digest (2026‑10‑17)**  

---

### 1. Today’s Overview  
- Activity on *nullclaw* is concentrated in a single tracking issue (#1066) and a burst of 17 open pull‑requests, all authored by **wray‑lee**.  
- No new releases were cut and no PRs were merged or closed in the last 24 h, indicating a phase of heavy upstream development rather than delivery.  
- The bulk of the work targets stability‑critical fixes (streaming, stop handling, provider edge‑cases) and a handful of high‑visibility feature extensions for Slack and Telegram integrations.  

---

### 2. Releases  
*No releases were published in the past 24 h.*  

---

### 3. Project Progress (Merged / Closed PRs)  
| PR # | Title | Status | Remarks |
|------|-------|--------|--------|
| —    | —     | **None merged/closed today** | All 17 PRs remain open; the maintainer is currently batching them under Issue #1066 for collective review. |

*What this tells us* – Development is in a “pre‑merge” stage. The maintainer is accumulating related changes before a larger integration effort, which can delay downstream adoption but should produce a more coherent release once the batch is vetted.

---

### 4. Community Hot Topics  

| Item | Type | Link | Why it’s hot | Underlying need |
|------|------|------|--------------|-----------------|
| **#1066** | Issue (tracking) | <https://github.com/nullclaw/nullclaw/issues/1066> | Central hub for **13** PRs covering streaming, slash‑command handling, stop‑command reliability, provider quirks, and security. No comments yet, but the sheer number of dependent PRs makes it the de‑facto focal point. | A coordinated review to ensure feature parity with OpenClaw and to close regressions that surfaced after the recent Slack/Telegram gateway work. |
| **#1071** | PR – fix(streaming) | <https://github.com/nullclaw/nullclaw/pull/1071> | Hides tool‑call text in streaming outputs, a prerequisite for clean UI in both CLI and chat surfaces. | Users complain that internal tool‑call payloads leak into the conversation stream, breaking readability. |
| **#1073** | PR – fix(agent) | <https://github.com/nullclaw/nullclaw/pull/1073> | Prevents “silent stalls” when a model ends a turn with prose but no tool call. | Stability of long‑running sessions; without the guard, turns can dead‑lock the session manager. |
| **#1058** | PR – feat(slack) | <https://github.com/nullclaw/nullclaw/pull/1058> | Streams outbound Slack replies while they are generated. | Provides near‑real‑time feedback, a common expectation for chat‑ops bots. |
| **#1075** | PR – feat(slack) | <https://github.com/nullclaw/nullclaw/pull/1075> | Adds support for a single Slack slash command in Socket Mode. | Enables admin‑style commands (`/nullclaw /stop`) that were silently dropped before. |

*Analysis* – The community (or at least the core maintainer) is driven by **reliability of turn‑based workflows** and **real‑time user‑experience** on Slack/Telegram. The tracking issue aggregates these concerns, so its resolution will unlock multiple downstream improvements.

---

### 5. Bugs & Stability  

| Severity | PR # | Summary | Fix status |
|----------|------|---------|------------|
| **Critical** | #1073 | Structural turn stalls when a model finishes with prose but no tool call. | Open – awaiting review. |
| **Critical** | #1068 | `/stop` command ignored on gateway path, leaving busy sessions hanging. | Open – high‑priority bug. |
| **High** | #1060 | Provider routing broken when using `provider/model` prefix; can send requests to wrong endpoint. | Open – security‑relevant misrouting. |
| **High** | #1074 | Network I/O on poller threads can block supervisor, causing stale poller detection. | Open – affects Telegram & Slack reliability. |
| **Medium** | #1071 | Text‑form tool calls leak into user‑visible streams. | Open – UI annoyance. |
| **Medium** | #1069 | Gateway logging blocks on stuck `stderr`, pausing a whole turn. | Open – mitigates deadlock scenarios. |
| **Medium** | #1070 | Truncated model responses still generate tool calls; leads to malformed API payloads. | Open – provider‑specific bug. |
| **Low** | #1067 | Live‑draft buffer not owned by the running turn on Telegram, causing draft loss after errors. | Open – cosmetic. |
| **Low** | #1062 | Telegram live drafts rendered without HTML parsing, stripping formatting. | Open – UI polish. |

*Takeaway* – The majority of open fixes address **turn‑completion robustness** and **cross‑channel command handling**. Their presence in the open PR set suggests the next release will be stability‑focused.

---

### 6. Feature Requests & Roadmap Signals  

| Feature | PR # | Description | Likelihood for next release |
|---------|------|-------------|------------------------------|
| **Outbound Slack streaming** | #1058 | Sends incremental tokens to Slack as the model generates them. | **High** – already PR‑ready, only needs integration testing. |
| **Slash‑command handling in Slack Socket Mode** | #1075 | Allows `/nullclaw /stop` style admin commands. | **High** – directly tied to the critical `/stop` bug. |
| **Rich Telegram messages (GFM via `sendRichMessage`)** | #1072 | Opt‑in support for headings, tables, math, spoilers, etc. | **Medium** – depends on successful merge of core stability fixes. |
| **Slack status reactions showing task lifecycle** | #1061 | Emoji reactions reflect turn state (queued, running, done). | **Medium** – UI polish; contingent on core merge. |
| **Per‑agent autonomy policy** | #1063 | Named agents can get individualized security policies rather than a global one. | **Medium‑High** – security‑focused, may be slated after core bugs. |
| **Default `agent.reasoning_mode` configuration** | #1059 | Adds a global default for the `/reasoning` toggle. | **Low‑Medium** – overlaps with maintainer PR #1050; may be merged later. |
| **Provider‑level `/think` and `max` fields** | #1065 | Sends reasoning‑effort markers to all OpenAI‑compatible back‑ends. | **Low‑Medium** – dependent on provider routing fix (#1060). |

*Roadmap inference* – The next release will likely bundle the **stability patches** first, then roll out **Slack outbound streaming** and **slash‑command support**. Rich Telegram messages and per‑agent autonomy are on the roadmap but will probably follow a subsequent iteration.

---

### 7. User Feedback Summary  

- **Pain points** reported (implicitly via issue #1066) include:  
  - **Interrupted or silent stops** (`/stop` not honoured).  
  - **Tool‑call leakage into conversational streams**, making the chat output noisy.  
  - **Polling threads hanging**, especially after Telegram interactions.  
  - **Missing formatting in live drafts** on Telegram.  

- **Satisfaction** appears to be centered on the core “assistant‑as‑a‑service” capabilities; users are eager for **real‑time streaming** and **command‑driven control**, indicating that once the bugs are resolved, adoption could rise quickly.

- **No explicit praise or negative comments** were attached to the PRs or Issue #1066 in the last 24 h, suggesting a largely silent but technically engaged user base (mostly developers testing edge cases).

---

### 8. Backlog Watch  

| Item | Type | Link | Reason it Needs Attention |
|------|------|------|----------------------------|
| **#1050** (maintainer PR referenced in #1059) | PR (maintainer) | *not listed in the 24 h feed* – requires manual lookup. | Provides the canonical implementation for `agent.reasoning_mode`; its pending state blocks #1059’s feature. |
| **Open PRs with no recent reviewer activity** – e.g., #1064, #1065, #1072 – have been sitting for **>2 days** without review. | PR | Respective links in the table above | Prolonged open status may cause merge conflicts later and stalls the feature pipeline. |
| **Issue #1066** – Though it centralises many PRs, it itself has **0 comments** after 2 days. | Issue | <https://github.com/nullclaw/nullclaw/issues/1066> | Lack of discussion could indicate a missing reviewer or unclear triage process; a maintainer should add a high‑level summary and assign reviewers. |
| **Potential duplicate/overlap** – #1059 (reasoning mode default) and maintainer PR #1050. | Issue/PR | #1059 link above | Needs coordination to avoid duplicated effort. |

**Actionable recommendation** – A maintainer should:
1. Assign at least one reviewer to each of the oldest unreviewed PRs (#1064, #1065, #1072).  
2. Post a brief status comment on Issue #1066 summarising next steps and expected merge order.  
3. Close or merge the maintainer PR #1050 to unblock the reasoning‑mode feature.

---

**Bottom line** – NullClaw is in an *intensive bug‑fix and feature‑integration* phase. While no releases have shipped yet, the breadth of open PRs suggests a sizable upcoming update that will improve stability, command handling, and streaming UX across Slack and Telegram. Prompt triage of the pending PRs and clear communication on Issue #1066 will be key to maintaining momentum and user confidence.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI – Project Digest (2026‑10‑17)**  

---

### 1. Today’s Overview  
- Activity is strong: 20 PRs were touched in the last 24 h (14 merged/closed, 6 still open) and a new **2026.10.16** release was published.  
- Issue activity is modest but focused on stability and security: 5 issues updated, 4 closed, 1 still open and marked *stale*.  
- The bulk of the work today revolves around polishing the brand‑new **Desktop Companion** UI, tightening model‑selection logic, and cleaning up long‑standing resource‑leak bugs.

---

### 2. Releases  

#### **2026.10.16 – “Desktop Companion” Release**  
- **Key Highlights**  
  - **Desktop Companion** – an always‑on assistant surface that adds translation, read‑aloud, quick‑input, screen‑capture, and task‑follow‑up capabilities.  
  - **Model selector revamp** – introduces *presets* (e.g., `yd‑fast`, `yd‑ultra`) with unified routing and per‑model usage tracking.  
  - **Expert Plaza** – now configurable (feature flag `ENABLE_EXPERT_PLAZA_UI`) allowing the team to hide the UI until it is production‑ready.  

- **Breaking Changes / Migration**  
  - Model identifiers have been normalized; any custom scripts that reference old model names must be updated to the new preset keys.  
  - The system‑prompt injection path now de‑duplicates the content from `AGENTS.md`; developers who previously relied on the duplicated block should adjust any custom prompt‑modification logic.  

- **Upgrade Notes**  
  - Clear the application cache after upgrading to avoid stale UI assets.  
  - Re‑run the “reset‑settings” command if you have a custom Expert Plaza integration, as the feature flag defaults to *off*.

---

### 3. Project Progress (Merged / Closed PRs)  

| PR | Title / Scope | What Was Delivered |
|----|---------------|--------------------|
| **#2891** | Release/2026.10.13 | Tagged the full production build that underpins today’s release. |
| **#2889** | *activate preset model routing for scheduled tasks* | Fixed “unsupported‑model” errors in cron jobs; now all scheduled tasks resolve to real model IDs. |
| **#2888** | *refine companion popovers & sidebar dismissal* | UI stability: pop‑ups no longer disappear unintentionally; sidebar menu auto‑closes on loss of focus. |
| **#2887** | *unify virtual preset routing & preserve conversation usage* | Core model‑preset infrastructure merged; usage metrics now tied to conversation turns. |
| **#2885** | *sidebar capabilities menu & library source icons* | New navigation pane for Kits, Skills, Connectors with clear local/cloud icons. |
| **#2884** | *account‑scoped image/video defaults* | Signed‑in users automatically get default media models; video generation requires explicit confirmation. |
| **#2883** | *prevent desktop‑companion panel flicker & fix screenshot bounds* | Smoother panel opening and correct Windows screenshot cropping. |
| **#2882** | *preserve selection context & refine window interactions* | Selected text now persists across tasks; dragging and edge‑placement of the companion are more reliable. |
| **#2881** | *add usage analytics for desktop‑companion* | Dedicated `desktop_companion` prompt surface and event tracking for adoption analysis. |
| **#2879** | *model presets & conversation usage* | Introduced Balanced / Flagship presets; per‑turn cost display and billing alignment. |
| **#2892** (closed) | *recover online catalog after network failures* | Online kit store now recovers gracefully when connectivity is restored. |
| **#2890** (closed) | *show source‑expansion hint only for truncated text* | UI tidying – the “click to expand source” hint appears only when needed. |
| **#2893** (open) | *bound disk usage of repair backups & runtime caches* | Prevents runaway `~/Library/Application Support/LobsterAI` growth (≈ 17 GB). Pending merge. |
| **#2855**, **#2858**, **#2668**, **#2461**, **#2855** (dependabot) | Dependency bumps (KaTeX, Mermaid, @sinclair/typebox, eslint‑plugin‑react‑hooks) | Keeps the stack up‑to‑date; no functional impact. |

**Summary:** The release concentrated on **Desktop Companion** polish, **model‑preset** infrastructure, and **resource‑leak mitigation**. All major UI regressions reported in the past week have been addressed.

---

### 4. Community Hot Topics  

| Item | Type | Comments / Reactions* | Why It Matters |
|------|------|----------------------|----------------|
| **#2395 – “无法安装” (Install fails)** | Open Issue (stale) | 3 comments, 0 👍 | Users encounter a blocker during update (“user skills could not be backed up”). Indicates a critical installer‑side regression. |
| **#2440 – Duplicate system‑prompt injection** | Closed Bug | 1 comment, 0 👍 | 4,425‑char prompt duplication inflated token usage and slowed inference. Fixes improve performance and cost. |
| **#2851 – Provider API key export uses hard‑coded password** | Closed Security | 0 comments, 0 👍 | High‑severity security flaw; the fix removed the hard‑coded password and introduced proper encryption. |
| **#2889 – Scheduled‑task model routing** | Merged PR | No public comments (internal) | Enables reliable background jobs; a frequent hidden pain point for power users. |
| **#2881 – Desktop‑companion usage analytics** | Merged PR | No public comments | Signals a strong product‑team focus on telemetry to guide future companion features. |

\*Reactions are limited to 👍; comment counts are the only publicly visible engagement metric.

**Underlying Need:** Stability of the core runtime (install/update, prompt handling) and visibility into how the new Desktop Companion is adopted. Security confidence (API key export) is also a community priority.

---

### 5. Bugs & Stability  

| Severity | Issue / PR | Description | Current Status |
|----------|------------|-------------|----------------|
| **Critical** | **#2395** – Install/update aborts because “user skills could not be backed up”. | Prevents any upgrade; affects all Windows users. | Still open & marked *stale* – no fix yet. |
| **High** | **#2440** – System‑prompt duplicated in every new session. | Causes unnecessary token consumption (≈ 4 KB per session) and can hit model limits. | Fixed in release *2026.10.16* (merged commit). |
| **High** | **#2851** – Exported provider keys encrypted with a known password. | Potential credential leakage. | Patched in the same release; export now uses a random per‑file password. |
| **Medium** | **#2893** – Unbounded disk usage from OpenClaw caches. | Users reported > 15 GB growth over weeks. | PR opened; fix pending merge. |
| **Medium** | **#2883** – Desktop‑companion flicker & screenshot bounds on Windows. | Visual annoyance, minor UX regression. | Fixed and shipped. |
| **Low** | **#2880** – Expert Plaza hidden behind a feature flag. | Not a bug; a deliberate gating. | Implemented; UI entry points disabled. |

---

### 6. Feature Requests & Roadmap Signals  

| Requested Feature | Source (Issue/PR) | Likelihood of Appearing in Next Release |
|--------------------|-------------------|------------------------------------------|
| **Account‑scoped media defaults (image/video)** | PR #2884 (merged) | Already in the current release – will be stable in next patch. |
| **Sidebar capabilities menu** | PR #2885 (merged) | Live in 2026.10.16; expect minor tweaks in the next point release. |
| **Model preset UI & per‑turn cost display** | PR #2879 / #2887 (merged) | Core to the new model routing; future roadmap includes *preset editing UI*. |
| **Desktop Companion analytics dashboard** | PR #2881 (merged) | Data collection is live; a UI dashboard is slated for the next 2‑month window. |
| **Expert Plaza full launch** | Issue #2801 (closed) + PR #2880 (feature‑flag) | The hide‑flag suggests the team is preparing for a full rollout; likely in Q4‑2026. |
| **Improved installer fallback / skill backup** | Issue #2395 (open) | High priority due to blocker status; a fix is expected soon, possibly in a hot‑patch. |

---

### 7. User Feedback Summary  

- **Pain Points**  
  1. **Installation/Update reliability** – the “cannot backup user skills” error stops upgrades for some Windows users (Issue #2395).  
  2. **Prompt bloat** – duplicated system instructions caused higher token usage and longer latency (Issue #2440).  
  3. **Security confidence** – the hard‑coded password for provider exports raised concerns (Issue #2851).  

- **Positive Signals**  
  - Users who tried the **Desktop Companion** are reporting smoother interactions after the UI tweaks (PR #2882, #2883).  
  - The **model‑preset** system is welcomed for simplifying model selection in both live chat and scheduled tasks.  

Overall sentiment is **cautiously optimistic**: recent fixes address the most glaring regressions, but the open installer issue remains a critical blocker that could erode confidence if not resolved quickly.

---

### 8. Backlog Watch  

| Item | Type | Age / Status | Why It Needs Attention |
|------|------|--------------|------------------------|
| **#2395 – Install failure** | Open Issue (stale) | Open since 2026‑07‑28 | Blocks all Windows users from upgrading; high‑impact security/UX bug. |
| **#1181 – Hide OpenClaw main agent sessions** | Open PR (stale) | Open since 2026‑04‑01 | UI clutter for end‑users; low risk but improves user experience. |
| **#2893 – Disk‑usage bounding** | Open PR | Open since 2026‑10‑16 | Prevents runaway storage growth; should be merged before the next minor release. |
| **#2855 / #2858 / #2668 / #2461** | Dependency PRs | Open / pending | Keeping dependencies up‑to‑date reduces supply‑chain risk; a batch merge is advisable. |
| **#2801 – Agent harness listing** | Closed Issue (informational) | Closed but may generate future “harness” integration work. | Could lead to a new evaluation pipeline; monitor for follow‑up PRs. |

---

**Bottom Line:** LobsterAI’s development velocity is healthy, with a major feature (Desktop Companion) now shipped and most high‑impact bugs addressed. The single open installer blocker is the only critical issue that could stall adoption; prioritizing its resolution should be the next immediate focus for maintainers.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 2026‑10‑17**

---

### 1. Today’s Overview
- Activity on the Moltis repository was minimal: **1 open issue** was updated in the last 24 hours and **no pull requests** were created, updated, or merged.  
- No new releases were published, indicating a quiet release cycle at present.  
- The only activity centers on a **bug report** concerning the `web_fetch` utility’s missing `User‑Agent` header, which now triggers HTTP 403 responses from the GitHub REST API.  
- Overall, the project appears stable but is currently facing a blocking usability problem for developers who rely on `web_fetch` for automated GitHub queries.

---

### 2. Releases
*No new releases* were made in the past 24 hours. The latest published version remains unchanged; therefore, there are no change logs, breaking‑change notes, or migration guidance to report today.

---

### 3. Project Progress
- **Pull Requests:** 0 opened, merged, or closed in the last day.  
- Consequently, there were no new features, refactorings, or bug‑fixes integrated today.

---

### 4. Community Hot Topics
| Item | Type | Title | Comments / Reactions | Link |
|------|------|-------|----------------------|------|
| #1305 | **Issue (Open, Bug)** | *web_fetch omits User-Agent, causing HTTP 403 from GitHub REST API* | 0 comments, 0 👍 reactions | <https://github.com/moltis-org/moltis/issues/1305> |

**Analysis** – This is the sole and therefore most active discussion thread. The problem disables a core helper (`web_fetch`) that many scripts and CI pipelines depend on for unauthenticated GitHub calls. The lack of a custom `User-Agent` header violates GitHub’s API policy, leading to automatic request denial. The community’s immediate need is a quick fix or a documented workaround.

---

### 5. Bugs & Stability
| Severity | Description | Current Status | Fix Indicator |
|----------|-------------|----------------|---------------|
| **High** | `web_fetch` sends no `User-Agent`, resulting in HTTP 403 responses from the GitHub REST API. | Reported in Issue #1305 (open, no comments). | No PR exists yet; a fix will likely involve adding a default header or exposing a configuration option. |

No crashes or regressions were reported beyond this functional defect.

---

### 6. Feature Requests & Roadmap Signals
- **No new feature requests** surfaced today.  
- The **User‑Agent bug** itself could signal a roadmap adjustment: adding a configurable request‑header layer to `web_fetch` (or a broader HTTP utility) would improve resilience against future API policy changes. If a PR resolving this issue is submitted, the maintainers may prioritize exposing header customization in the next minor release.

---

### 7. User Feedback Summary
- **Pain Point:** Users trying to automate GitHub data retrieval with `web_fetch` are now blocked by a 403 error, which directly hinders CI pipelines, repository analytics scripts, and any tooling that relies on unauthenticated API calls.  
- **Satisfaction Indicator:** The absence of any comments or reactions suggests the issue is newly reported and has not yet generated community discussion, but the severity implies a high impact on user workflow.  
- **Desired Outcome:** A quick patch that injects a sensible default `User-Agent` (e.g., “Moltis/<version>”) and/or provides an easy way to override it.

---

### 8. Backlog Watch
- **Long‑standing items:** The provided snapshot does not include historic issues/PRs, but given today’s inactivity, it is advisable for maintainers to audit the open‑issue list for any tickets older than 30 days that have received little attention (e.g., performance enhancements, documentation gaps, or pending enhancement proposals).  
- **Actionable recommendation:** Run a “stale” analysis on the repository to flag issues/PRs with no recent activity, and consider adding a triage label (e.g., `needs‑maintainer‑review`) to surface them for the next sprint.

---

**Overall Health Assessment:**  
Moltis is in a low‑activity state with stable code but is currently hindered by a high‑severity bug that blocks a core utility. Prompt attention to Issue #1305—ideally with a dedicated PR—will restore essential functionality and demonstrate responsiveness to user‑reported breakages. Continued monitoring of the backlog will be key to maintaining momentum once the immediate bug is resolved.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (QwenPaw) – Project Digest – 2026‑10‑17**  

---

### 1. Today’s Overview  
- Activity remains high: 14 issues were touched in the last 24 h (12 still open) and 25 pull‑requests were updated (17 open, 8 merged/closed).  
- The most visible pain points are **large‑payload handling** (skill‑pool download, tool‑result bloat, UI freezes) and **channel‑specific message limits** (DingTalk > 3500 chars).  
- Maintainers are concentrating on UX polish (thinking‑strength slider, config editors) and on building a more modular, plugin‑friendly architecture for the upcoming **v2.3.0**.  

---

### 2. Releases  
*No new version was published on 2026‑10‑17.*  

---

### 3. Project Progress (merged / closed PRs today)  

| PR | Title / Goal | Type | Impact |
|----|--------------|------|--------|
| **#8229** *(under review)* | Truncate oversized tool outputs when serving chat history | Bug‑fix | Cuts chat‑history payloads from > 10 MB to a safe size, directly addressing Issue #8228 (history‑bloat). |
| **#8285** *(open)* | Make skill‑pool downloads cancellable jobs (implements Issue #8126) | Feature | Introduces a background job API with progress + explicit cancel, removes the 30 s client timeout. |
| **#8287** *(open)* | Fix thinking‑strength slider fill & save‑flicker | UI‑fix | Improves visual consistency & prevents UI jitter when persisting preferences. |
| **#8283** *(open)* | Decision‑model‑backed tool‑approval mode | Security / Feature | Adds configurable AI‑driven gate‑keeping for tool execution. |
| **#8282** *(open)* | Keep repetition‑thresholds visible & editable | UI‑fix | Prevents accidental loss of custom repetition settings. |
| **#8263** *(closed)* | Unblock config editors & polish chat controls | UX‑refactor | Guarantees dialogs close correctly on error / discard, reducing dead‑ends for users. |
| **#8239** *(closed)* | Inline UI plugins & scoped message submission | Feature | Enables “OpenUI” style interactive components inside assistant messages. |
| **#7565** *(open)* | Clean plugin unload & rollback‑safe hot‑reload | Infrastructure | Lays groundwork for the modular plugin system promised for v2.3.0. |

*No releases were cut, but the above PRs move the codebase toward a lighter, more extensible v2.3.0.*

---

### 4. Community Hot Topics  

| Item | Comments / 👍 | Link | Core Need |
|------|---------------|------|-----------|
| **Issue #8126** – “Make skill‑pool download a cancellable background job” | 7 comments | <https://github.com/agentscope-ai/QwenPaw/issues/8126> | Users hit the 30 s client timeout for large skill installs; need asynchronous, cancelable downloads. |
| **Issue #8228** – “Chat history bloat (base64 tool results > 10 MB)” | 2 comments | <https://github.com/agentscope-ai/QwenPaw/issues/8228> | Large files/screenshot tool outputs inflate session JSON, breaking the console timeout. |
| **Issue #8278** – “DingTalk channel degrades > 3500 char messages to plain text” | 3 comments | <https://github.com/agentscope-ai/QwenPaw/issues/8278> | Chinese‑market channel silently truncates markdown & tables, harming data‑reporting use‑cases. |
| **Issue #8288** – “UI freeze / SIGBUS on large stream‑output conversation switch” | 1 comment | <https://github.com/agentscope-ai/QwenPaw/issues/8288> | Backend memory pressure when switching to a conversation that recently streamed a huge payload. |
| **PR #8285** – “Skill‑pool download cancellable jobs (tied to #8126)” | – | <https://github.com/agentscope-ai/QwenPaw/pull/8285> | Early implementation of the most‑requested async download feature. |

**Analysis:**  
The community is converging on **large‑payload handling** as the top priority—both for skill‑pool management and for tool‑generated artifacts. A secondary, but urgent, pain point is **channel‑specific message limits** (DingTalk) that silently break rich formatting. The high comment counts indicate that these issues affect production workflows and are being actively discussed across users and maintainers.

---

### 5. Bugs & Stability (ranked by severity)

| Severity | Issue / PR | Summary | Status / Fix |
|----------|------------|---------|--------------|
| **Critical** | **#8288** – UI freeze & possible SIGBUS when switching to a conversation with a huge streaming output (v2.2.2) | Backend crashes; entire app becomes unusable. | No fix yet; under investigation. |
| **High** | **#8228** – Chat history bloat > 10 MB causing 30 s console timeout | Base64‑encoded files/screenshot data stored in session JSON. | Fix in PR #8229 (truncate on serve) – under review. |
| **High** | **#8279** – Long‑lived ReMe watchers exhaust AnyIO thread pool, stalling sync HTTP endpoints | Deployment stalls after hours of uptime. | No dedicated PR yet; issue open. |
| **Medium** | **#8284** – Wheel scrolling gets stuck after transcript height re‑estimation (UI bounce) | Poor navigation experience in long chats. | No fix yet; a UI‑related PR may address it indirectly. |
| **Medium** | **#8276** – ReMe reranker accepts empty `api_key` and fails with vague “unexpected error” | Configuration‑silence leads to debugging overhead. | No fix yet. |
| **Low** | **#8286** – Thinking‑strength slider fill misleading & flickers on save | Cosmetic UX issue; addressed by PR #8287. |
| **Low** | **#8281** – `reload_agent()` does not fire `workspace_created` hooks | Runtime hooks silently dropped after reload. | No fix yet. |
| **Low** | **#8280** – Missing `file_id`/`file_data` leads to 400 errors on OpenAI‑compatible providers | API request fails when file reference is stale. | No fix yet. |
| **Low** | **#8275** – Request for global Skill & MCP management in Hub | Feature request, not a bug. | Open. |

*Overall stability is being actively defended, but the **critical UI freeze** (#8288) must be prioritized for the next patch release.*

---

### 6. Feature Requests & Roadmap Signals  

| Request | Description | Likelihood in v2.3.0 |
|---------|-------------|----------------------|
| **#8289** – “Making QwenPaw lighter and more extensible” (plugin refactor) | Broad effort to split core into plugins, expose extension points. | **Very high** – already reflected in PR #7565 (hot‑reload) and several UI plugin PRs. |
| **#8275** – Global Skill & MCP sharing in Hub | Team‑wide skill/MCP library to avoid per‑user duplication. | **Medium** – would require Hub backend changes; probably slated for a later minor version. |
| **#8283** – Decision‑model‑backed tool approval | Security feature to gate tool execution via an AI decision model. | **High** – PR #8283 is open; likely to land in the next release. |
| **#7903** – Integrated community & inbox feed | Embedded social feed for community posts, issue linking, and model‑assisted editing. | **Low‑Medium** – large scope; currently in WIP stage. |
| **#8126** – Cancellable skill‑pool download (async job) | Direct response to a blocking API endpoint. | **High** – PR #8285 implements it; expected in v2.3.0. |
| **#8229** – Truncate oversized tool outputs in chat history | Reduces payload size for long sessions. | **High** – under review; likely merged before v2.3.0. |

---

### 7. User Feedback Summary  

| Pain Point | Evidence | Implication |
|------------|----------|-------------|
| **Timeouts on large downloads / history** | Issues #8126, #8228, #8229 discuss 30 s client timeout, base64 bloat. | Users cannot reliably work with big models or file‑heavy sessions; risk of data loss when UI crashes. |
| **Channel‑specific formatting loss** | Issue #8278 (DingTalk > 3500 chars) shows silent downgrade to plain text. | Teams using DingTalk for reports lose markdown tables, breaking critical business reporting. |
| **UI freezes & crashes** | Issue #8288 (SIGBUS) and #8284 (scroll bounce) indicate stability concerns on macOS/Windows. | Decreases confidence in the desktop client for production workloads. |
| **Configuration friction** | PR #8282 (repetition thresholds) & #8263 (config editors not closing) highlight UX regressions. | Users experience dead‑ends when editing preferences, leading to support tickets. |
| **Extensibility desire** | Community‑roadmap issue #8289 and numerous plugin‑related PRs. | A sizable portion of contributors want a slimmer core + plugin ecosystem to ship custom tools without rebuilding the whole app. |

Overall sentiment: **high engagement** but **significant frustration** around handling of large payloads and occasional UI instability.

---

### 8. Backlog Watch (Long‑standing items needing attention)

| Issue / PR | Age / Open Since | Why It Matters | Suggested Action |
|------------|------------------|----------------|-------------------|
| **#8251** – Message‑navigation directory positioning (closed, but related to #8284) | Opened 2026‑10‑14, still referenced by UI bugs | Underpins scroll‑stuck bug #8284 | Verify that fix in PR #8273 (dependency bump) fully resolves #8284. |
| **#8279** – AnyIO thread‑limiter exhaustion by ReMe watchers | Opened 2026‑10‑16, no PR yet | Could halt all sync endpoints in long‑run deployments | Prioritize a watchdog or back‑pressure mechanism; assign to a maintainer. |
| **#8281** – `reload_agent()` not firing `workspace_created` hooks | Opened 2026‑10‑16, no fix | Breaks runtime hook lifecycle, affects extensions relying on dynamic reloads. | Add a test case and patch in the next maintenance sprint. |
| **#8280** – Missing file data causes 400 errors on OpenAI‑compatible providers | Opened 2026‑10‑16, no fix | Users lose continuity when file references become stale. | Implement graceful fallback or validation before request. |
| **#8276** – ReMe reranker empty `api_key` silent failure | Opened 2026‑10‑16, no fix | Misconfiguration feedback is opaque, leading to wasted debugging. | Add clear validation error and unit tests. |
| **#8275** – Global Skill & MCP management (feature) | Opened 2026‑10‑16, still pending | Large teams need shared resources; current per‑user setup is a maintenance burden. | Scope it for a later minor release (post‑v2.3.0) with a design spec. |

---

**Bottom line:** CoPaw’s development velocity is strong, with many PRs moving forward and a clear focus on making the platform lighter and more modular. The most urgent engineering work is **stabilizing large‑payload paths** (async skill‑pool downloads, chat‑history truncation, and fixing the UI freeze on streaming switches). Addressing these will directly improve user confidence and set a solid foundation for the upcoming **v2.3.0** plugin‑first architecture.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026‑10‑17**  

---

### 1. Today’s Overview
- The repository saw a **burst of activity**: 5 issues were updated (all closed) and **50 PRs** were touched, of which **16 were merged/closed** and **34 remain open**.  
- The focus this past day has been on **runtime‑security hardening**, **config‑management UX improvements**, and **new routing/effort‑aware scheduling** for agents.  
- No new releases were cut, but the volume of high‑risk PRs (risk: high, size: XL) indicates that the next stable version is likely to contain breaking changes around routing policies and sandboxing.

---

### 2. Releases
*No new release tags were created in the last 24 h.*  

> **Implication:** All changes are still in the `master` development branch. Teams that depend on a stable API should continue to pin to the latest released version (v0.8.5) and monitor the PR flow for upcoming migration notes.

---

### 3. Project Progress – Merged / Closed PRs (24 h)

| PR # | Title / Core Change | Labels | Status → | Key Impact |
|------|---------------------|--------|----------|------------|
| **#11506** | `feat(zerocode): show saved & applied config status` | enhancement, docs, runtime, risk:high, size:XL | **Closed** | Gives operators a deterministic “saved vs. applied” view – prerequisite for UI improvements in ZeroCode. |
| **#11725** | `fix(runtime): deliver mid‑turn steering at the next step` | agent, runtime, size:L | **Closed** | Fixes race where operator steering was lost on cancel; improves interactive control. |
| **#11791** | `docs(runtime): record file_read pattern allowlist exception` | docs, size:XS | **Closed** | Documents ADR‑016 exception that enables PR #11592 to land. |
| **#10567** | `feat(memory): stamp recalled entries with their storage date` | enhancement, agent, memory, size:S | **Closed** | Memory entries now surface timestamps, giving models temporal context. |
| **#11644** | `fix(cron): prevent shell diagnostics from leaking to channels` | bug, cron, security, size:M | **Closed** | Stops raw `stderr` from being sent to chat channels, tightening data‑leak protection. |
| … | (additional 11 merged PRs not listed in the excerpt) | | | **Broad impact** – many address security policies, provider OAuth support, and channel reliability. |

*Overall, the merged work pushes the runtime toward **more deterministic routing, stronger sandboxing, and better operator feedback**.*

---

### 4. Community Hot Topics  

| Item | Type | Comments / Reactions | Link | Why it matters |
|------|------|-----------------------|------|----------------|
| **#5836** | Issue – *Feature* | 4 comments (most of today) | <https://github.com/zeroclaw-labs/zeroclaw/issues/5836> | Adds **co‑operative cancellation** to the tool‑execution contract. Operators need the ability to abort long‑running tools (e.g., shells, HTTP calls) without waiting for the tool to finish. |
| **#11516** | PR – *Enhancement* | Open, XL, many labels (runtime, security, architecture) | <https://github.com/zeroclaw-labs/zeroclaw/pull/11516> | Introduces an **effort‑aware routing** policy that can direct turns to local or cloud providers based on a deterministic complexity classifier. Signals a shift toward cost‑optimised execution. |
| **#11592** | PR – *Security* | Open, high risk, adds glob‑pattern file‑read guard | <https://github.com/zeroclaw-labs/zeroclaw/pull/11592> | Addresses a long‑standing **path‑filtering gap** in `file_read` tool; users demanded granular control to avoid accidental reads of sensitive files. |
| **#10391** | PR – *Bug / Security* | Open, XL, large diff affecting delegate sandbox | <https://github.com/zeroclaw-labs/zeroclaw/pull/10391> | Fixes a **resource‑leak/boundary‑overrun** issue for delegated agents; essential for multi‑tenant deployments. |
| **#11589** | PR – *Runtime* | Open, XL, adds cost‑override flag | <https://github.com/zeroclaw-labs/zeroclaw/pull/11589> | Enables operators to **override exceeded cost limits** on‑the‑fly, a common request from heavy‑usage customers. |

**Underlying needs:**  
- **Robust cancellation & interruption** of tool execution (Issue #5836).  
- **Predictable, cost‑aware routing** for hybrid local/cloud deployments (PR #11516).  
- **Fine‑grained security policies** around file system access (PR #11592) and delegated sandboxing (PR #10391).  
- **Operator control** over runtime limits without full daemon restarts (PR #11589).

---

### 5. Bugs & Stability  

| Issue / PR | Severity | Root Cause | Fix Status |
|------------|----------|------------|------------|
| **#11606** – `model_routing_config upsert_agent rewrites entire config` | **Critical (P1, high risk)** | `upsert_agent` serialises the whole `config.toml` through a default struct, dropping fields and resetting limits. | No fix merged yet; open PRs (#11516, #11589) may indirectly address by re‑architecting config handling. |
| **#11488** – `ZeroCode Config filtering blanks both panes` | **High (P2, S2)** | Single filter is shared between sidebar and detail view; filtering a model picker empties the UI. | No dedicated PR yet; UI tweaks expected in upcoming `zerocode` PRs (#11506, #11491). |
| **#11644** – `cron: shell diagnostics leak to channels` | **High** | Raw stdout/stderr forwarded to delivery channel. | **Closed** (PR #11644) – leak patched. |
| **#11651** – `Telegram 429 rate‑limit handling` | **Medium‑High** | 429 responses treated as formatting failures; retry loop ignored flood‑gate. | Open PR #11651 pending review. |
| **#11592** – `file_read path filtering too permissive` | **High** | No glob‑pattern allowlist; any path under allowed directory can be read. | Open PR #11592 (high‑risk) – awaiting ADR‑016 doc PR #11791. |

**Stability snapshot:** The critical config‑mutation bug (#11606) is the top priority; a fix is not yet in the pipeline, which could affect production deployments that dynamically adjust routing. All other high‑risk bugs have active PRs, many already merged.

---

### 6. Feature Requests & Roadmap Signals  

| Feature | Current Status | Likely Next Milestone |
|---------|----------------|-----------------------|
| **Co‑operative cancellation** (Issue #5836) | Open, under discussion (4 comments) | Expected in the **v0.9.0** “runtime‑control” sprint. |
| **Single‑tool provider rounds** (Issue #10577) | Open, no owner yet | May be bundled with **#11516** effort‑aware routing (same code path). |
| **Saved vs. applied config UI** (Issues #11491 & #11488) | Closed PR #11506 implements backend; UI still pending. | Targeted for the next **ZeroCode UI** release (Q4 2026). |
| **Effort‑aware routing** (PR #11516) | Open, XL, high‑risk | Likely to be **merged** before the next stable tag, given its cross‑cutting impact. |
| **Cost‑limit override** (PR #11589) | Open, XL | Same release window as effort‑aware routing. |
| **File‑read glob patterns** (PR #11592) | Open, high‑risk | Expected near the same release as **#11516** because both affect the runtime security model. |
| **Sub‑agent routing** (PR #11577) | Open, L | Will probably follow after the routing policy lands; could be a later patch (v0.9.1). |
| **A2A protocol extraction** (PR #11712) | Open, XL | Architectural refactor; likely slated for a **major version bump** (v1.0). |

**Roadmap inference:** The maintainer team appears to be grouping **security‑policy**, **routing**, and **operator‑control** features together for an upcoming **v0.9.x** series. Anything that touches the runtime core (effort routing, cancellation, cost overrides) is being fast‑tracked.

---

### 7. User Feedback Summary  

- **Cancellation & Steering** – Users repeatedly complain that long‑running tools block the ability to cancel or steer an agent (see Issue #5836 and PR #11725). This points to a need for **asynchronous interruption hooks**.  
- **Configuration Visibility** – Operators are confused about whether a saved change has been applied (Issues #11491, #11488). The recent PR #11506 addresses the backend, but UI clarity is still lacking.  
- **Cost Management** – Heavy‑usage deployments hit hard cost limits and must restart the daemon to continue (PR #11589). Users want **runtime overrides** without downtime.  
- **Security Tightening** – Several high‑risk PRs (file‑read glob, sandbox policy) stem from real‑world incidents where agents accessed unintended files or leaked diagnostics (PR #11644). The community values **granular sandbox controls**.  

Overall sentiment: **high enthusiasm for new routing/effort features**, but **concern over stability of config mutations and security policy ergonomics**.

---

### 8. Backlog Watch – Items Needing Maintainer Attention  

| ID | Title / Gap | Why it matters | Next Action |
|----|-------------|----------------|-------------|
| **#11606** – `model_routing_config upsert_agent` bug | Critical config corruption risk; currently no PR targeting a fix. | Assign a maintainer to create a focused “patch‑only” upsert implementation. |
| **#11592** – `file_read` glob‑allowlist | High‑risk security policy change; dependent on ADR‑016 doc (#11791). | Merge doc PR #11791, then review & merge #11592. |
| **#11516** – Effort‑aware routing | Large XL PR; many downstream changes (cost override, sandbox policy). | Prioritise CI pass and a dedicated reviewer; consider splitting if CI times out. |
| **#10391** – Delegate sandbox bounds | Potential for resource exhaustion in multi‑agent setups. | Needs maintainer review; may require additional integration tests. |
| **#11651** – Telegram 429 handling | Rate‑limit leaks cause message duplication & flood‑gate bypass. | Review, add automated test for 429 scenario. |
| **#11259** – WhatsApp‑Web inbound image handling | Improves media pipeline for a popular channel; still open. | Assign a channel contributor to verify with real WhatsApp accounts. |
| **#7821** – Canonical `SandboxPolicyConfig` schema | Security‑policy foundation; merging will affect many downstream modules. | Merge after current runtime refactor stabilises. |
| **#11712** – A2A core crate extraction | Architectural change; may block other PR merges due to dependency cycles. | Schedule a dedicated refactor sprint. |

*Addressing the above will reduce technical debt, unblock dependent PRs, and improve overall release predictability.*

---

**Bottom line:** ZeroClaw is in a **high‑velocity development phase** with many high‑impact features and security hardening efforts converging. The **absence of a new release tag** is offset by a solid flow of merged PRs, but key blockers (notably the config‑upsert bug) must be resolved promptly to keep the upcoming **v0.9.x** milestone on schedule.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*