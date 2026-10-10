# OpenClaw Ecosystem Digest 2026-10-10

> Issues: 166 | PRs: 500 | Projects covered: 12 | Generated: 2026-10-10 05:29 UTC

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

**OpenClaw Project Digest – 10 Oct 2026**  

---

### 1. Today’s Overview  
- The repository saw a surge of activity: **166 issues** and **500 pull‑requests** were touched in the last 24 h, with a clear bias toward *open* work (≈ 60 % of issues and ≈ 65 % of PRs remain open).  
- No new release tag was created today, so the current stable line is still **2026.9.6** (eb377ac).  
- The bulk of the chatter centers on **isolated‑cron execution, session‑state regressions, and cross‑channel messaging bugs**, indicating that operators are stressing the “headless” execution paths and multi‑channel integrations.  
- Several high‑impact bug reports (P0–P1) have no corresponding fix PR yet, pointing to a short‑term triage bottleneck.

---

### 2. Releases  
*No new version was published today; the latest released build remains **2026.9.6**.*  

---

### 3. Project Progress (Merged / Closed PRs)  
| PR | Scope | What landed | Impact |
|----|-------|-------------|--------|
| **#168052** *(memory‑wiki)* | CLI validation | Surface detailed validation errors instead of the generic “CLI failed” message. | Improves operator debugging on the new Memory‑Wiki extension. |
| **#168226** *(bundled‑plugin config churn)* | Update workflow | Stops `openclaw update` from rewriting unchanged bundled‑plugin config files. | Reduces noisy diffs and unnecessary restarts after upgrades. |
| **#168145** *(providers cache & affinity)* | Provider layer | Preserves prompt‑cache accounting, adds session‑affinity hints to native endpoints, and fixes cache‑hit loss on credential changes. | Enhances reliability of cached‑inference and improves observability for provider‑side debugging. |
| **#167739** *(SQLite admission reuse)* | Core performance | Reuses admission checks across worker pools and connection reopenings, cutting start‑up latency & CPU load. | Beneficial for large‑scale gateways with many concurrent workers. |
| **#167996** *(skill‑review undo UI)* | Web UI | Adds a one‑click “Undo” for learned skill reviews, turning a bulky chat bubble into a simple confirmation. | Improves ergonomics for operators editing skill data. |
| **#168218** *(doctor node‑hosting warning)* | CLI / Doctor | Suppresses spurious “expose network for local‑only gateway” warnings. | Reduces confusion for offline/loopback deployments. |

*All merged PRs today are **S–XL** in size and carry a **🐚‑platinum‑hermit** or **🦐‑gold‑shrimp** rating, indicating solid but low‑risk changes.*

---

### 4. Community Hot Topics  

| # | Title (link) | Comments / 👍 | Core Need |
|---|---------------|---------------|-----------|
| **#149538** – *Isolated cron agentTurn exec denied* (P0) <br> https://github.com/openclaw/openclaw/issues/149538 | 25 / 0 | Cron jobs that run scripts already on the exec‑allowlist are still blocked → need a reliable **allow‑list reconciliation** for isolated agents. |
| **#97616** – *Unreaped hook/tool child processes* (P1) <br> https://github.com/openclaw/openclaw/issues/97616 | 18 / 1 | Zombie accumulation → **process‑lifecycle hygiene** for hooks/tools. |
| **#146118** – *Superseded‑task compaction guard* (P1) <br> https://github.com/openclaw/openclaw/issues/146118 | 13 / 0 | Compaction guard not covering new Codex paths → **memory‑compaction consistency** across model versions. |
| **#142336** – */dashboard shadows Telegram Mini App* (P2) <br> https://github.com/openclaw/openclaw/issues/142336 | 11 / 0 | Command name collisions → **namespace / command‑resolution** improvements for channel‑specific extensions. |
| **#135272** – *macOS UI‑control intermittent COMPANION_APP_UNAVAILABLE* (P1) <br> https://github.com/openclaw/openclaw/issues/135272 | 6 / 0 | Reliability of the macOS companion app after a minor release → **cross‑platform bridge stability**. |

*These five issues account for **≈ 70 %** of today’s comment volume, signalling that operators are most distressed by execution‑allowlist bugs, zombie processes, and channel‑specific command collisions.*

---

### 5. Bugs & Stability (ranked by severity)

| Severity | Issue / PR | Summary | Status / Fix |
|----------|------------|---------|--------------|
| **P0** | **#149538** – Isolated cron exec denied (impact: crash‑loop) | Allow‑list miss persists for resolved‑path scripts in isolated cron jobs. | No fix PR yet. |
| **P0** | **#154021** – macOS app flips `gateway.mode` to remote & writes token (security) | Gateway on macOS rewrites config, unset remote token, and uninstalls LaunchAgent. | No fix PR yet. |
| **P1** | **#97616** – Hook/tool child‑process zombie leak (impact: message‑loss, crash‑loop) | Unreaped processes accumulate, exhausting host resources. | No fix PR yet. |
| **P1** | **#135272** – macOS companion UI‑control regression (COMPANION_APP_UNAVAILABLE) | Intermittent failure after upgrade to 2026.8.1. | No fix PR yet. |
| **P1** | **#148274** – Slack exec completion crosses apps / loses thread | Background exec completions get posted to the wrong Slack DM. | No fix PR yet. |
| **P1** | **#142783** – Memory‑plugin typed hooks stop dispatching after multi‑agent migration (regression) | before_prompt_build / agent_end never fire, breaking memo plugins. | No fix PR yet. |
| **P2** | **#142336** – Dashboard command collides with Telegram Mini App | Namespace clash leads to missing command in Telegram UI. | No fix PR yet. |
| **P2** – **#148088** – Heartbeat session silently falls back to wrong model after auth‑unknown error | Wrong model output is sent unfiltered. | No fix PR yet. |
| **P2** – **#119454** – Stuck‑session recovery self‑suppresses (idle embedded run) | Recovery loop logs repeatedly without acting. | No fix PR yet. |

*All high‑severity bugs are still open; none have an associated merged fix as of today, highlighting a critical triage backlog.*

---

### 6. Feature Requests & Roadmap Signals  

| Request (link) | Priority | What users want |
|----------------|----------|-----------------|
| **#125311** – Sessions tail should surface compact per‑event metrics (P2) <br> https://github.com/openclaw/openclaw/issues/125311 | High (observability) | Faster debugging of token burn & prompt bloat. |
| **#125310** – Fast‑mode deny policy (`fastModeAllowed`) across overrides (P2) <br> https://github.com/openclaw/openclaw/issues/125310 | High (policy control) | Granular safety guard for “fast” model shortcuts. |
| **#79166** – Doctor dry‑run / diff mode (P2) <br> https://github.com/openclaw/openclaw/issues/79166 | Medium | Preview `doctor --fix` changes before they are applied. |
| **#129327** – Proactive quota/usage alerts (P1) <br> https://github.com/openclaw/openclaw/issues/129327 | Medium‑High | Early warning before model‑usage exhaustion. |
| **#80841** – Twilio AMD support for outbound calls (P3) <br> https://github.com/openclaw/openclaw/issues/80841 | Medium | Detect human vs. machine answer to switch modes. |
| **#82735** – Stable error codes for runtime/spawn failures (P3) <br> https://github.com/openclaw/openclaw/issues/82735 | Low‑Medium | Better diagnostics for operators. |

*Trend:* Operators are pressing for **observability**, **policy granularity**, and **safer automation**. The next minor release (likely 2026.10.x) will probably prioritize **sessions‑tail metrics** and **doctor dry‑run** because they directly address the most‑commented bugs (cron execution & process leaks) and reduce the risk of accidental state changes.

---

### 7. User Feedback Summary  

- **Execution‑allowlist reliability** is the most painful pain point: isolated cron jobs that should be permitted are blocked, leading to repeated failures and “gateway ready but never serves” logs.  
- **Zombie processes** from hooks/tools are causing memory pressure and OOM crashes, especially on long‑running gateways.  
- **Cross‑channel command collisions** (e.g., `/dashboard` vs. Telegram Mini‑App) confuse users and break expected UI behaviour.  
- Operators appreciate **bug‑fix PRs that clean up noisy warnings** (e.g., Doctor node‑hosting warning, bundled‑plugin config churn), indicating that clarity in CLI output is highly valued.  
- The **lack of a dry‑run mode** for the powerful `doctor --fix` command is a recurring source of anxiety, as users fear unintended state mutation.

Overall sentiment: **high engagement but growing frustration** around stability of headless execution paths and the visibility of internal state changes.

---

### 8. Backlog Watch (Stale, High‑Interest Items)  

| Issue | Stale Since | Why it matters |
|-------|-------------|----------------|
| **#125311** – Sessions tail metrics (P2, 50+ comments) | Aug 2026 | Directly helps operators trace token usage & performance. |
| **#125310** – Fast‑mode deny policy (P2, 45+ comments) | Aug 2026 | Needed for security‑sensitive deployments that want to forbid “fast” shortcuts. |
| **#125313** – Control UI per‑session board.get & cron refetches (P2, 40+ comments) | Aug 2026 | Reduces load on large deployments; performance hotspot. |
| **#119454** – Stuck‑session recovery self‑suppresses (P1, 30+ comments) | Aug 2026 | Leads to indefinite lane wedges; operator cannot recover without restart. |
| **#148274** – Slack exec completion cross‑app (P1, 30+ comments) | Sep 2026 | Breaks conversation continuity and can leak sensitive data across workspaces. |
| **#148088** – Heartbeat fallback to wrong model (P1, 30+ comments) | Sep 2026 | Sends unfiltered output, a potential security and compliance issue. |
| **#135272** – macOS UI‑control intermittent failure (P1, 30+ comments) | Sep 2026 | Affects a large user base on macOS; reliability of the companion app is a core value proposition. |

*These items have accumulated the most community attention yet remain open and lack an associated merged fix. Prompt triage and assignment of maintainers could greatly improve perceived project health.*

---

**Bottom line:** OpenClaw’s ecosystem is vibrant, with a healthy volume of issue reporting and PR submissions. However, the **absence of fixes for several P0/P1 bugs** (cron allow‑list, zombie processes, cross‑channel routing) creates a risk of operator churn. Prioritizing those stability problems, while delivering the much‑requested observability/diagnostics features, will be key to maintaining confidence ahead of the next release cycle.

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison – Personal‑AI‑Assistant / Agent Ecosystem (as of 10 Oct 2026)**  

---  

### 1. Ecosystem Overview  
The open‑source landscape for AI‑driven personal assistants is maturing into a multi‑layered stack: a **core execution engine** (OpenClaw, ZeroClaw, Hermes‑Agent), **runtime wrappers** for specific deployment models (NanoBot, NanoClaw, PicoClaw), and **front‑end / tooling ecosystems** that add channels, plugins, and UI (CoPaw, LobsterAI, Moltis).  Most projects are now **CalVer‑driven** and converge on a common set of requirements—secure sandboxing, reliable multi‑channel messaging, and observability of token‑/cost‑usage.  The overall health is high, but several critical bugs (execution‑allow‑list, zombie‑process, and Windows sandbox leaks) remain open across the most widely‑used cores, creating a clear “stability‑first” priority for operators.

---  

### 2. Activity Comparison  

| Project | Issues (last 24 h) | PRs (last 24 h) | Release today? | Health Score* |
|---------|-------------------|----------------|----------------|--------------|
| **OpenClaw** | 166 touched (≈ 60 % still open) | 500 touched (≈ 65 % still open) | No (latest 2026.9.6) | 5 / 10 |
| **NanoBot** | 9 touched (2 open) | 45 touched (25 open) | No (pre‑release, v0.3.6 in pipeline) | 7 / 10 |
| **Hermes Agent** | 11 touched (≈ 10 open) | 50 touched (33 open) | No (2026.x series) | 7 / 10 |
| **PicoClaw** | 5 touched (3 open) | 6 touched (1 open) | No (2026.9.x) | 8 / 10 |
| **NullClaw** | 0 (quiet) | 0 (quiet) | – | 3 / 10 (inactive) |
| **IronClaw** | 0 (quiet) | 0 (quiet) | – | 3 / 10 (inactive) |
| **LobsterAI** | 0 new (focus on PRs) | 12 touched (10 merged/closed) | No (pre‑release) | 8 / 10 |
| **Moltis** | 4 touched (all open) | 1 touched (open) | No | 6 / 10 |
| **CoPaw** | 17 touched (10 open) | 21 touched (10 open) | No (next bump pending) | 6 / 10 |
| **ZeroClaw** | 12 touched (11 open) | 50 touched (45 open) | No (0.8.x in‑flight) | 6 / 10 |
| **ZeptoClaw** | 0 (quiet) | 0 (quiet) | – | 3 / 10 (inactive) |
| **ZeroClaw‑Labs** (ZeroClaw) | see above | – | – | – |

\*Health Score (0 = dangerously unstable, 10 = steady with low‑risk backlog).  Scores weigh **open‑issue ratio**, **severity of open bugs (P0‑P2)**, **release cadence**, and **active maintenance**.  

---  

### 3. OpenClaw’s Position  

| Dimension | OpenClaw | Peer Comparison |
|-----------|----------|-----------------|
| **Core philosophy** | “Headless‑first, multi‑channel, plug‑in‑driven” – isolates execution via **isolated‑cron**, **session‑affinity**, and a **provider‑cache** layer. | ZeroClaw follows a similar core but adds **effort‑aware routing**; Hermes Agent emphasises **MCP transport** and **desktop‑tool verification**. |
| **Bug‑severity backlog** | 2 P0, 5 P1 bugs still open (cron allow‑list, zombie processes, cross‑channel routing). | ZeroClaw has 4 P1‑level channel bugs; CoPaw has a **critical RCE** (MCP driver) and a handful of high‑impact UI crashes. |
| **Community size** | ~166 issues & 500 PRs per day → **largest daily interaction volume** (≈ 12 % of total ecosystem activity). | Next‑largest is ZeroClaw (≈ 62 issues/PRs) and Hermes (≈ 61). |
| **Release cadence** | Last tag **2026.9.6** (≈ monthly). No release today, but a minor bump is expected (10.x). | NanoBot & PicoClaw are on a *pre‑release* sprint; LobsterAI is preparing a bundled release after a wave of fixes. |
| **Unique advantage** | **Robust session‑affinity cache** and **bundled‑plugin config churn mitigation** (PR #168226) – reduces noisy restarts in large‑scale gateways. | Peers rely on external config reloads; OpenClaw’s cache‑preserve logic gives it an edge for high‑throughput, multi‑worker deployments. |

---  

### 4. Shared Technical Focus Areas  

| Focus Area | Projects Raising It | Specific Need |
|------------|--------------------|----------------|
| **Headless / Isolated Execution** | OpenClaw, ZeroClaw, Hermes Agent, NanoBot | Reliable sandboxed cron jobs, no stray processes, deterministic termination (e.g., zombie‑process fixes #97616, #84967). |
| **Cross‑Channel Consistency** | OpenClaw, CoPaw, ZeroClaw, NanoBot, Moltis | Uniform command‑resolution and namespace handling (`/dashboard` vs Telegram mini‑app, Discord DM classification). |
| **Observability & Token/Cost Metrics** | OpenClaw (#125311), ZeroClaw (effort‑aware routing), NanoClaw (sessions‑tail metrics), LobsterAI (heartbeat & model‑fallback visibility). |
| **Policy & Safety Controls** | OpenClaw (fast‑mode deny, #125310), ZeroClaw (effort routing), Hermes Agent (policy API), NanoClaw (fast‑mode). |
| **Desktop / UI Ergonomics** | CoPaw (HarmonyOS client, TUI fixes), LobsterAI (desktop companion cards), NanoBot (macOS companion stability). |
| **Multiplatform Deployment (Windows‑specific bugs)** | OpenClaw, Hermes Agent, ZeroClaw, PicoClaw, NanoClaw (Windows `NANOBOT_HOME`). |
| **Plug‑in / Plugin Hot‑Reload** | CoPaw (clean unload, hot‑reload), ZeroClaw (plugin catalog expansion), NanoBot (bundled‑plugin config). |

---  

### 5. Differentiation Analysis  

| Dimension | OpenClaw | ZeroClaw | Hermes Agent | NanoBot | CoPaw | LobsterAI |
|----------|----------|----------|--------------|---------|-------|-----------|
| **Target Users** | Enterprise‑grade gateways & headless bots (high concurrency). | Cost‑optimised routing for mixed local/cloud workloads. | Desktop‑oriented agents with rich browser‑tool integration. | Lightweight multi‑channel bots for hobbyists & early‑adopters. | Full‑stack UI + plugin ecosystem aimed at power‑users & Chinese market. | Chinese‑focused enterprise assistant (WeCom, Feishu) with heavy UI/desktop companion. |
| **Main Architecture** | Core engine + **provider‑cache + session‑affinity**; CLI‑centric update flow. | **Effort‑aware routing** + deterministic local/cloud split; CalVer release. | **MCP transport** + **plugin‑catalog** for remote browser tools; TUI & desktop hooks. | Separate channel adapters (Telegram, WhatsApp, Matrix) + **multi‑instance `NANOBOT_HOME`**. | **React‑based web UI + plugin hot‑reload**; high‑resolution media handling. | OpenClaw‑based runtime plus **Windows‑specific fixes** & **desktop companion** cards. |
| **Key Feature Focus** | Session metrics, provider caching, cron isolation. | Cost‑driven routing, effort classification. | Browser‑tool verification, remote MCP, cross‑platform plugins. | Media‑URL handling, custom Bot API endpoints, security hardening (DNS pinning). | Media‑album support, i18n, HarmonyOS client. | Windows firewall handling, clipboard permissions, UI translation cards. |
| **Language / Runtime** | Rust (core) + CLI (Go/TS); strong type safety. | Rust core, CalVer‑styled releases. | Rust core, heavy use of **MCP** and **C++‑backed** plugins. | Go (core) + TS/JS front‑ends. | TypeScript/React front‑end, Rust back‑end. | Rust core + TypeScript UI. |
| **Extensibility Model** | Bundled‑plugin config (JSON/YAML); CLI‑driven plugin install. | Plugin‑catalog (built‑in + external) via `plugin add`. | `hermes plugins` catalog, hot‑swap via MCP. | `--home` multi‑instance, plugin‑style adapters. | Dynamic plugin unload/rollback; “hot reload”. | Plugin‑style via OpenClaw extensions, config recovery patches. |

---  

### 6. Community Momentum & Maturity  

| Tier | Projects | Observation |
|------|----------|-------------|
| **Rapid‑Iteration** | NanoBot, LobsterAI, ZeroClaw | Daily PR merges (≥ 10 merged per day), frequent bug‑fix PRs, clear roadmap signals. |
| **Stabilizing / Mature Core** | OpenClaw, Hermes Agent, PicoClaw | Large back‑log of open issues but low release cadence; focus now on closing critical P0/P1 bugs before the next tag. |
| **Low‑Velocity / Niche** | NullClaw, IronClaw, ZeptoClaw, Moltis | Minimal activity; likely used in limited internal contexts or early‑stage forks. |
| **Feature‑Heavy, UI‑Focused** | CoPaw, LobsterAI | High PR count (≈ 20 merged in 24 h) but also critical security & RCE tickets; community is pushing UI and localisation forward. |

---  

### 7. Trend Signals (derived from community feedback)  

| Trend | Evidence | Implication for Developers |
|-------|----------|---------------------------|
| **Security‑first sandboxing** | Recurrent zombie‑process bugs (OpenClaw #97616, Hermes #84967), DNS‑pinning in NanoBot, Windows sandbox failures. | Future SDKs should expose **process‑lifecycle hooks** and **network sandbox policies** out‑of‑the‑box. |
| **Observability as a product differentiator** | Requests for session‑tail metrics (OpenClaw #125311), cost‑ledger accuracy (ZeroClaw #11613), token‑usage dashboards (NanoClaw). | Embed **structured telemetry** (Prometheus + OpenTelemetry) and a **standard cost‑reporting API** in the core. |
| **Multi‑modal media handling** | Telegram album support (NanoBot #6121), image EXIF preservation (CoPaw #8136), oversized‑image drop policies (ZeroClaw #9887). | Provide a **media‑normalisation layer** that normalizes size, orientation, MIME, and rate‑limits before payload reaches the model. |
| **Cross‑channel namespace hygiene** | Command collisions (/dashboard vs Telegram mini‑app, Discord DM classification, Slack thread routing). | Adopt a **global command registry** with per‑channel prefixes and conflict‑resolution rules. |
| **Fine‑grained routing / cost control** | Effort‑aware routing (ZeroClaw #11516), fast‑mode deny (OpenClaw #125310), policy‑API migration (Hermes #4052). | Design a **policy engine** that can be injected at the provider layer to decide local vs cloud execution, throttling, and safety guards. |
| **Internationalisation & UI localisation** | Spanish UI request (CoPaw #8160), Chinese UI cards (LobsterAI), i18n for tool‑guard cards (CoPaw #7809). | Offer **language‑agnostic UI components** and a **locale‑resource manifest** that plugins can hook into. |
| **Desktop‑native clients** | HarmonyOS client (CoPaw #8164), Windows clipboard fix (LobsterAI #2822), MacOS companion app stability (OpenClaw #135272). | Include a **cross‑platform UI shim** (WebView + native bridge) in the core distribution to simplify building desktop companions. |

**Bottom‑line for decision‑makers:** the ecosystem is converging on **secure sandboxed execution, unified observability, and flexible cost‑routing** while still wrestling with channel‑specific edge cases. Projects that already embed a **policy engine** (ZeroClaw, Hermes Agent) or a **robust provider cache** (OpenClaw) are best positioned to become the de‑facto runtime for enterprise‑scale assistants.  For developers targeting rapid prototyping or multilingual consumer bots, **NanoBot** and **CoPaw** provide the most polished UI and media stacks, albeit with a higher security‑review burden.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot – Project Digest (2026‑10‑10)**  
*GitHub: https://github.com/HKUDS/nanobot*  

---  

### 1. Today’s Overview  
- Activity is **high**: 9 issues and 45 pull‑requests were updated in the last 24 h, with a healthy split of 2 open issues and 25 open PRs.  
- The team closed **7 bugs** and merged **20 PRs**, indicating a strong focus on stability, security, and incremental feature work.  
- No new releases were cut today, but a wave of “bug‑fix‑and‑polish” PRs landed, positioning the codebase for an upcoming minor bump (likely v0.3.6).  

---  

### 2. Releases  
*No new version was published on 2026‑10‑10.*  

---  

### 3. Project Progress (merged / closed PRs)  

| PR # | Title & Main Impact | Type | Highlights |
|------|---------------------|------|------------|
| **#4919** | *Telegram: custom Bot API base URL & extra headers* | Feature | Enables self‑hosted Telegram gateways; already merged. |
| **#6069** | *Security: pin validated DNS for bytes hostnames* | Security fix | Prevents DNS‑spoofing when the HTTP stack receives a `bytes` hostname. |
| **#6126** | *Config: honor `NANOBOT_HOME` for defaults* | Bug/Config | Solves Windows multi‑instance conflict; updates docs. |
| **#6127** | *WhatsApp: normalize neonize timestamps* | Bug/Channel | Replay filter now works correctly, removing stale messages. |
| **#6128** | *CLI: `--home` instance selector* | Feature | Simplifies launching multiple independent Nanobot instances. |
| **#6129** | *Docs: refresh stale runtime comments* | Documentation | Aligns docstrings with the current runtime behavior. |
| **#6132** | *DeepSeek: map `minimal` reasoning effort to `low`* | Provider fix (closed) | Normalises DeepSeek’s thinking‑mode flags; resolves contradictory payloads. |
| **#6135** | *Tools: read SVG files as text* | Bug/Tool | Prevents SVGs from being sent as image blocks; now treated as text. |
| **#6136** | *Anthropic: preserve `redacted_thinking` blocks* | Provider bug | Keeps safety‑related thinking blocks for downstream tooling. |
| **#6137** | *Agent: build skills summary when workspace is a symlink* | Bug/Agent | Skills summary now works with symlinked workspaces. |
| **#6138** | *Matrix: keep HTML formatting on edited events* | Channel bug | Matrix edits retain `formatted_body` and `format`. |
| **#6110** | *Slack: replace compaction notices with `chat.update`* | Channel bug (open) | Improves UX by updating the original message instead of posting a new notice. |
| **#6091** | *Apps: managed computer‑use via Cua driver* | Feature (open) | Provides a “Computer Use” app to let Nanobot control a desktop environment. |
| **#5536** | *Exec: fail‑closed when restricted shell lacks sandbox* | Security/bug (open) | Hardens the sandbox enforcement for restricted exec. |

**What moved forward?**  
- **Security hardening** (DNS pinning, sandbox enforcement).  
- **Multi‑instance support** on Windows (`NANOBOT_HOME`).  
- **Channel robustness** (Telegram, WhatsApp, Matrix, Slack).  
- **User‑facing feature polish** (CLI `--home`, Telegram custom API).  

---  

### 4. Community Hot Topics  

| Item | Comments / Reactions | Core Need |
|------|---------------------|-----------|
| **Issue #6121** – “Telegram: send multiple outbound images as albums” | 0 comments (new) | Users want consolidated media albums instead of spamming separate photos. |
| **Issue #6123** – “Telegram: classify remote media URLs with query strings” | 0 comments (new) | Correct MIME detection for URLs with query strings; improves media handling. |
| **Issue #5898** – “gpt‑6 model series through GitHub Copilot” (closed) | 4 comments | Early adopters of OpenAI’s newest model hitting provider‑config errors. |
| **Issue #6085** – “DeepSeek websearch makes LLM calls unusable” (closed) | 0 comments | Critical failure when enabling DeepSeek web‑search; a blocker for users needing external data. |
| **PR #6138** – “Matrix: keep HTML formatting on edits” (open) | – | Matrix users need proper formatting preservation across streamed edits. |
| **PR #6091** – “Managed computer use (Cua Driver)” (open) | – | Growing demand for desktop‑automation integration; high interest from power‑users. |

**Analysis:**  
The community is concentrating on **channel media ergonomics** (Telegram), **latest LLM model support** (OpenAI gpt‑6, DeepSeek), and **desktop‑automation** capabilities. The open PRs around Telegram media handling and the Cua driver suggest upcoming releases will prioritize richer media UX and expanded app integrations.  

---  

### 5. Bugs & Stability (ranked by impact)  

| Severity | Issue/PR | Summary | Fix Status |
|----------|----------|---------|------------|
| **Critical** | **#6085** (DeepSeek websearch) – JSON deserialization error causing every LLM call to fail. | Fixed by PR #6132 (maps `minimal` to `low`). |
| **High** | **#6120** (WhatsApp replay filter timestamp mismatch) – Old messages never filtered, leading to duplicate processing. | Fixed by PR #6127 (millisecond → second conversion). |
| **High** | **#1739 / PR #1767** (Windows multi‑instance conflict via `NANOBOT_HOME`). | Resolved by PR #6126 (honor `NANOBOT_HOME`) and PR #1767 (explicit fix). |
| **Medium** | **#5898** (OpenAI gpt‑6 via Copilot) – Provider request fails. | Closed as bug; no merged fix yet; likely needs provider update. |
| **Medium** | **#6006** (QQ quoted messages lost) – Context missing for quoted replies. | Closed; no fix merged yet – still open for a future patch. |
| **Medium** | **#6122** (DeepSeek `reasoning_effort="minimal"` sends contradictory flags) – Confusing API payload. | Fixed by PR #6132 (normalise flags). |
| **Low** | **#6121** (Telegram album support) – UX annoyance, not a crash. | Still open; pending PR. |
| **Low** | **#6123** (Telegram MIME detection) – Mis‑classification of remote images. | Open; PR may be in pipeline. |

Overall, **all high‑severity bugs reported today already have a merged fix or an active PR**, indicating rapid triage.  

---  

### 6. Feature Requests & Roadmap Signals  

| Feature | Current Status | Likelihood for Next Release (v0.3.6) |
|---------|----------------|--------------------------------------|
| **Telegram custom Bot API base URL & extra headers** | Merged (PR #4919) | ✅ Already in code; will be part of next bump. |
| **CLI `--home` instance selector** | Merged (PR #6128) | ✅ Same as above. |
| **Managed Computer‑Use (Cua driver)** | Open PR #6091 | 🔶 High interest; may be targeted for v0.3.6 if review progresses. |
| **Telegram media album (`sendMediaGroup`)** | Open Issue #6121 (no PR yet) | 🔶 Medium – likely to be added after a small implementation PR. |
| **Telegram remote‑URL MIME classification** | Open Issue #6123 | 🔶 Medium – simple fix, probably in the next minor release. |
| **DeepSeek “minimal” reasoning mode mapping** | Fixed (PR #6132) | ✅ Already merged, will be reflected in the next release. |
| **Parallel Search preset user‑agent identification** | Merged (PR #5797) | ✅ Included in upcoming release. |
| **Sandbox‑aware restricted exec** | Open PR #5536 | 🔶 Low‑medium; security‑focused, may land after review. |

The **most concrete upcoming changes** are the Telegram custom API, the `--home` flag, and the DeepSeek reasoning fix – all slated for the forthcoming v0.3.6. The computer‑use app and media‑album enhancements are the next visible roadmap items.  

---  

### 7. User Feedback Summary  

- **Multi‑instance reliability** – Windows users repeatedly hit config clashes; the `NANOBOT_HOME` fix was a top request.  
- **Media handling** – Telegram power‑users want albums and accurate MIME detection; the current separate‑message behavior is considered noisy.  
- **Timestamp handling** – WhatsApp developers flagged a regression that caused replay loops, now corrected.  
- **Model compatibility** – Early adopters of OpenAI’s gpt‑6 and DeepSeek’s web‑search feature encountered provider‑level errors, highlighting the need for rapid provider SDK updates.  
- **Security & sandboxing** – Contributors are attentive to DNS pinning and sandbox enforcement, signalling growing maturity of the user base.  

Overall sentiment is **constructive**: users appreciate quick bug resolution but are eager for the missing media‑UX features and desktop‑automation capabilities.  

---  

### 8. Backlog Watch (items needing attention)  

| # | Title / Area | Days Open | Why It Matters |
|---|--------------|-----------|----------------|
| **#6121** (open) – Telegram album support | 1 day | Directly improves chat UX for media‑rich bots. |
| **#6123** (open) – Telegram remote‑URL MIME handling | 1 day | Prevents mis‑classification of images as documents. |
| **#6091** (open PR) – Managed computer use | 3 days | Adds a major new integration (desktop automation). |
| **#6110** (open PR) – Slack compaction notices replacement | 1 day | Refines Slack UX; may affect many workspace bots. |
| **#6134** (open PR) – Slack DM bot‑mention handling | 1 day | Fixes a communication blind‑spot for Slack bots. |
| **#6135** (open PR) – SVG file handling | 1 day | Prevents broken image blocks; small but widely applicable. |
| **#6136** (open PR) – Anthropic redacted thinking preservation | 1 day | Important for compliance‑sensitive deployments. |
| **#5536** (open PR) – Exec sandbox failure‑closed | 46 days | Security‑critical; should be merged before next release. |
| **#5797** (open PR) – Parallel Search user‑agent header | 23 days | Improves usage telemetry for a growing provider. |
| **#6138** (open PR) – Matrix HTML formatting on edits | 1 day | Enhances readability for Matrix‑based bots. |

These items represent **the most visible gaps** in the current release cycle. Prioritising the Telegram media fixes and the sandbox security PR will address the highest‑impact user pain points before the next version ships.  

---  

*Prepared by the NanoBot Open‑Source Analyst – 2026‑10‑10*  

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑10‑10)**  
*GitHub: https://github.com/NousResearch/hermes-agent*  

---

### 1. Today’s Overview  
- Development activity remains **very high**: 11 issues were touched (10 still open) and **50 pull‑requests** were updated, of which 33 are open and 17 have been merged or closed in the last 24 h.  
- No new release was published, but a sizeable batch of bug‑fixes, platform‑specific patches, and plugin‑catalog additions landed on *main* today.  
- The most visible pain points are service‑identity collisions across multiple `HERMES_HOME` roots, Docker‑terminal orphan processes, and Windows‑specific subprocess hangs—all flagged as **P2** priority.  

---

### 2. Releases  
*No new version was cut on 2026‑10‑10.*  The project continues to iterate on the current 0.21.x series; all merged PRs will be incorporated into the next point release.

---

### 3. Project Progress (Merged / Closed PRs)  
| PR # | Title / What landed | Category | Impact |
|------|----------------------|----------|--------|
| **#135984** | “enable Sol Ultrafast requests and pricing” | Feature / Model support | Opens the fast‑tier of the Sol 6.1 model for downstream users. |
| **#135983** | “honor Kanban subscription delivery modes” | Bug‑fix / TUI | Prevents unnecessary wake‑ups; reduces noise for Kanban‑driven workflows. |
| **#135979** | “survive undecodable `context_from` output files” | Bug‑fix / Cron | Stops cron jobs from aborting on non‑UTF‑8 artefacts (common on macOS restores). |
| **#135978** | “Long gateway replies no longer emit empty code‑block fences” | Bug‑fix / Gateway | Improves output fidelity for very long messages across Discord/Telegram adapters. |
| **#135976** | “authenticate stable/canary release resolution” | Bug‑fix / Update‑channel | Fixes 403 errors when many clients resolve releases behind a shared NAT. |
| **#135974** | “report descriptor‑only terminal failures instead of empty turns” | Bug‑fix / Desktop/TUI | Gives clear error signals when a terminal tool crashes early. |
| **#135953** | “resumed session model follows profile config, not stale cache” | Bug‑fix / CLI | Guarantees that a resumed session respects the *current* model setting. |
| **#128669** | “no busy ack for messages deferred by startup restore” | Bug‑fix / Gateway | Prevents duplicate ack loops during early‑startup restores. |
| **#135922** | “hold undeliverable Weixin/iLink replies until next peer message” | Bug‑fix / Platform (WeCom) | Adds reliable retry logic for the Weixin gateway. |
| **#135380** | “add Telegram Client (v1.2.12) to plugin catalog” | Feature / Plugin catalog | Makes the Telethon‑based desktop client discoverable via `hermes plugins`. |
| **#135955** | “add Jet Browser runtime verifier” | Feature / Plugin catalog | Supplies a deterministic browser‑tool test harness for community use. |
| **#135861** | “MCP transport for hosted browser‑tool gateways” | Feature / Browser tool | Enables remote MCP‑backed browser tooling beyond the default Camofox lane. |
| **#271** *(closed)* | “preserve full traceback on tool dispatch errors” | Bug‑fix / Registry | Improves debugging by logging complete stack traces. |

*All of the above PRs were merged or closed between 2026‑10‑09 and 2026‑10‑10, moving key stability and feature work forward.*

---

### 4. Community Hot Topics  

| Item (link) | Comments / Reactions | Core Concern |
|-------------|---------------------|--------------|
| **#93349** – *gateway service identity collides across HERMES_HOME roots* <br> <https://github.com/NousResearch/hermes-agent/issues/93349> | 7 comments (most active) | Service‑identity leakage when multiple `HERMES_HOME` roots share the same profile name (macOS launchd, systemd). |
| **#84967** – *Docker terminal timeout leaves in‑container process trees running* <br> <https://github.com/NousResearch/hermes-agent/issues/84967> | 5 comments | Docker‑exec processes are not fully cleaned up on timeout/interrupt, leading to zombie containers. |
| **#135977** – *`hermes acp` `session/new` hangs forever on Windows* <br> <https://github.com/NousResearch/hermes-agent/issues/135977> | 3 comments | Windows‑specific subprocess dead‑lock when a grandchild holds the stdout pipe. |
| **#135982** – *Feishu live process UI needs expandable tool details* <br> <https://github.com/NousResearch/hermes-agent/issues/135982> | 0 comments (opened today) | UI request for richer per‑turn diagnostics in the Feishu integration. |
| **#135981** – *Security plugins occasionally fail to load* <br> <https://github.com/NousResearch/hermes-agent/issues/135981> | 0 comments | Random “dictionary changed size during iteration” errors when loading plugins on Windows. |

**Analysis:**  
- The three most‑commented issues are **platform‑stability** bugs (gateway identity, Docker cleanup, Windows subprocess). The community is pushing for deterministic service names and robust container handling, indicating growing multi‑profile / multi‑host deployments.  
- UI/UX concerns (Feishu UI, translation placeholder) are emerging as the desktop/client layer matures, especially for non‑English locales.  
- Security‑plugin reliability is a thin‑spot for Windows users, likely tied to recent changes in the plugin loader (see PR #271).

---

### 5. Bugs & Stability (ranked by severity)  

| Severity | Issue # / PR # | Brief Description | Current Status / Fix |
|----------|----------------|-------------------|----------------------|
| **P1‑ish** (blocking) | **#93349** (gateway identity collision) | Identical launchd/systemd unit names across independent `HERMES_HOME` roots cause cross‑profile interference. | No fix yet; duplicated as #135973 (closed). |
| **P2** | **#84967** (Docker terminal orphan processes) | `docker exec` killed but child processes persist inside containers. | No PR merged yet; likely to be addressed in a forthcoming PR. |
| **P2** | **#135977** (ACP `session/new` hangs on Windows) | `subprocess.run(..., timeout=5)` never returns when stdout pipe is held by a grandchild. | No fix yet; under investigation. |
| **P2** | **#125920** (xAI grok‑4.7 compression no‑ops) | Auto‑compression skips encrypted reasoning, then structural back‑off blocks retries. | No PR; issue open. |
| **P3** | **#135968** (composer placeholder stays English) | UI placeholder uses fallback catalogue at boot, not respecting locale until reload. | No fix yet. |
| **P3** | **#135969** (curator prune builtins still refuses archived bundled skills) | Conflict between `prune_builtins=true` and built‑in skill pinning. | No fix yet. |

*Fix‑oriented PRs that directly address today’s bugs:*  
- **#128669** (gateway ack handling) mitigates a related startup‑restore symptom.  
- **#135974** (desktop/TUI empty‑turn reporting) improves visibility of terminal failures.  
- **#135953** (session model cache) resolves a stale‑config issue that can surface as unexpected model switches.

---

### 6. Feature Requests & Roadmap Signals  

| Feature / Request | Issue / PR | Reasoning & Likelihood for Next Release |
|-------------------|------------|------------------------------------------|
| **Feishu live‑process UI with expandable tool details** | #135982 (Feature) | Direct UI improvement; aligns with recent desktop/TUI focus. High chance of inclusion in the next 0.21.x point release. |
| **Auto‑remediate skills that hit the 100k write cap** | #135980 (Feature) | Addresses long‑standing “skill saturation” problem; likely to be prioritized after stability fixes. |
| **Plugin catalog expansion – Telegram client, Jet Browser verifier, long‑conversations plugin** | PRs #135380, #135955, #134683 | Catalog growth is an ongoing community‑driven goal; these PRs are already merged and will be shipped in the upcoming release. |
| **MCP transport for remote browser‑tool backends** | #135861 (Feature) | Enables hosted browser‑tool services; already merged, ready for next release. |
| **Sub‑agent tool hooks naming delegate tasks** | #135975 (Feature) | Provides better traceability for complex tool pipelines; merged, slated for 0.21.x. |
| **One gateway owns every local session (CLI, TUI, Desktop, ACP, bots, cron)** | #106742 (Feature) | A sweeping architectural change; still open but has strong backing – may land in a future major bump (e.g., 0.22). |

---

### 7. User Feedback Summary  

- **Service Identity & Multi‑Profile Deployments:** Users with multiple `HERMES_HOME` roots (especially on macOS and Linux) experience cross‑profile clashes, breaking isolation.  
- **Container Management:** Docker‑based terminals are leaving stray processes, which inflates host resource usage and can cause hidden state.  
- **Windows Compatibility:** The subprocess hanging bug and intermittent plugin‑load failures are the primary sources of dissatisfaction among Windows power‑users.  
- **Localization & UI Consistency:** The placeholder translation bug and limited Feishu UI details are cited as usability gaps for non‑English users.  
- **Skill Write‑Cap Saturation:** Teams report that once a skill reaches the write‑cap, maintenance silently stops, prompting the auto‑remediation request.  

Overall sentiment is **constructive**: users appreciate the rapid bug‑fix cadence but are eager for more robust multi‑profile isolation, better container lifecycle handling, and richer UI diagnostics.

---

### 8. Backlog Watch (Items Needing Maintainer Attention)  

| ID | Title / Area | Open Since | Why It Matters |
|----|--------------|------------|----------------|
| **#135969** – *curator prune builtins & pinned skills* | Tools / Config | 2026‑10‑10 | Prevents curated skill management in shared‑skill setups; blocks automation pipelines. |
| **#135968** – *composer placeholder translation bug* | i18n / Desktop | 2026‑10‑10 | Affects UI consistency for non‑English locales; low‑effort to fix. |
| **#135981** – *Security plugins occasionally fail to load* | Plugins / Windows | 2026‑10‑10 | Random runtime errors undermine trust in the plugin ecosystem. |
| **#135977** – *ACP session/new hangs on Windows* | ACP / Windows | 2026‑10‑10 | Blocks automated session creation; high‑severity for enterprise Windows deployments. |
| **#93349** – *gateway service identity collision* | Gateway / Install‑Update | 2026‑08‑24 (still open) | Core to multi‑profile isolation; a regression risk for any user running more than one profile. |
| **#106742** – *One gateway owns every local session* | Architecture / Sessions | 2026‑09‑09 | Large architectural proposal; requires design review and possibly breaking changes. |
| **#135922** – *Weixin undeliverable reply buffering* | Platform (WeCom) | 2026‑10‑10 | Although a PR exists, the underlying edge‑case handling needs further validation across WeChat variants. |

*Action items:* prioritize **#93349**, **#84967**, and **#135977** for the next sprint; consider triaging **#135969** and **#135968** as low‑hanging fruit; schedule a design review for **#106742** before committing to a breaking change.

---  

*Prepared by the Hermes Agent Open‑Source Analyst – 2026‑10‑10.*  

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw – Project Digest (2026‑10‑10)**  

*All links point to the official GitHub repository `sipeed/picoclaw`.*

---

## 1. Today’s Overview  
- Activity is modest but steady: 5 issues were touched (3 open, 2 closed) and 6 pull‑requests were updated (5 merged/closed, 1 still open).  
- No new releases were published, but a wave of dependency‑bump PRs was merged, keeping the Go stack up‑to‑date.  
- The most visible signals are a high‑priority roadmap request for **autonomous browser operations** and a critical Android‑DNS regression that is still open.  

Overall health: **maintained**, with routine maintenance happening, but a few blocker bugs and a strategic feature request that need focused attention.

---

## 2. Releases  
*No new version was tagged on 2026‑10‑10.*  

*Note:* the repository’s dependency updates (see PRs below) do not constitute a public release; however, they may affect downstream builds, especially for users who pin exact module versions.

---

## 3. Project Progress (PRs merged/closed today)

| PR # | Title & Scope | Type | Outcome |
|------|---------------|------|---------|
| **#3389** | `build(deps): bump golang.org/x/crypto from 0.53.0 → 0.57.0` | Dependency | Merged – security & crypto improvements. |
| **#3388** | `build(deps): bump github.com/modelcontextprotocol/go-sdk from 1.6.1 → 1.8.0` | Dependency | Merged – adds recent SDK features & bug fixes. |
| **#3387** | `build(deps): bump github.com/anthropics/anthropic-sdk-go from 1.55.1 → 1.74.0` | Dependency | Merged – updates to latest Anthropic API version. |
| **#3386** | `build(deps): bump maunium.net/go/mautrix from 0.27.0 → 0.31.0` | Dependency | Merged – modernises Matrix bridge support. |
| **#3385** | `build(deps): bump github.com/line/line-bot-sdk-go/v8 from 8.20.1 → 8.22.0` | Dependency | Merged – minor bug‑fixes and API compatibility. |
| **#3388‑#3385** (collectively) | *Dependency hygiene* | Maintenance | Keeps the Go toolchain and third‑party SDKs current, reducing exposure to known vulnerabilities. |

*Open PR*  
- **#3414** – *feat(agent): add wall‑clock turn time budget* (open, stale). This introduces an optional per‑turn time limit for agents, allowing the system to abort long‑running tool chains gracefully.

---

## 4. Community Hot Topics  

| Item | Why it’s hot | Key points / community sentiment |
|------|--------------|-----------------------------------|
| **Issue #293** – *Feature: Autonomous Browser Operations* (open, **high priority**) | 8 👍, 8 comments in the last 24 h. The proposal splits into two implementation paths (headless‑Chrome vs. external browser driver) and raises security sandbox concerns. | - Strong demand for web‑automation to “let the AI browse the internet”. <br>- Contributors debate between embedded Chromium (size & resource impact) and remote Selenium‑style driver (deployment complexity). |
| **Issue #3420** – *Android build: pure‑Go binaries fail DNS resolution* (open, **bug**) | 0 comments but labeled **critical**; the issue blocks Android deployments, a key platform for mobile users. | - DNS service defaults to `127.0.0.1:53` when CGO is disabled, causing “connection refused”. <br>- No fix yet; the community is awaiting a maintainer response. |
| **PR #3414** – *Add wall‑clock turn time budget* (open, stale) | Few comments yet, but the feature addresses a recurring complaint about agents “hanging” on long tool loops. | - If merged, it will give developers a safety‑net for runaway agents. |

**Underlying needs:**  
1. **Web interaction** – the community wants PicoClaw to act beyond pure text, tapping into the vast amount of information on the open web.  
2. **Mobile reliability** – Android is a primary user‑face; DNS failures break the “anywhere” promise.  
3. **Operational safety** – limiting agent runtime is a recurring request from power‑users who run complex toolchains.

---

## 5. Bugs & Stability  

| Severity | Issue | Summary | Fix status |
|----------|-------|---------|------------|
| **Critical** | #3420 (Android DNS) | Pure‑Go builds cannot resolve any external hostname (`dial udp 127.0.0.1:53: connection refused`). Blocks Android gateway connectivity to model APIs. | Open – no PR yet. |
| **High** | #3377 (TLS cert expired) – now **closed** | The project homepage (`https://picoclaw.io`) was unreachable for ~1 month. Promptly fixed by renewing the cert. | Resolved (closed). |
| **Medium** | #3391 (Multi‑line input splitting) – **closed** | Mobile TUI split pasted multi‑line text into separate messages, breaking code blocks. | Fixed (closed). |
| **Low** | #3415 (Reverse‑proxy support) – **open** | Not a bug, but a feature request that could expose a path for misconfiguration if not documented. | Awaiting implementation. |

*Only the Android DNS regression remains unaddressed and is likely to impact the next release cycle.*

---

## 6. Feature Requests & Roadmap Signals  

| Feature | Issue/PR | Priority / Community Interest | Likelihood for next release |
|---------|----------|-----------------------------|------------------------------|
| **Autonomous Browser Operations** | #293 (high‑priority roadmap) | Very high – 8 👍, active discussion on implementation strategy. | **High** – Expect a design RFC in the next 2‑3 weeks; a prototype may land in a future minor release. |
| **Reverse‑Proxy / Sub‑path deployment** | #3415 (feature) | Moderate – specific to self‑hosted deployments; ask for `--base-path` flag. | **Medium** – Could be bundled with the upcoming “wall‑clock budget” PR (#3414) as part of a broader configurability sweep. |
| **Wall‑clock turn time budget** | #3414 (PR) | Low‑medium – limited comments but aligns with stability goals. | **Medium‑High** – If the PR passes review, it may ship in the next release. |
| **Improved Android networking** | #3420 (bug) | Critical for mobile users; often cited in issues. | **High** – Likely a hot fix or patch before the next official version. |

---

## 7. User Feedback Summary  

- **Reliability concerns** – Android users reported complete loss of connectivity due to DNS, indicating that the “run‑anywhere” promise is currently broken on a major platform.  
- **Web access demand** – Multiple commenters on #293 stress that many real‑world use cases (e.g., data extraction, verification) are impossible without a browser automation layer.  
- **Deployment flexibility** – Developers running PicoClaw behind Nginx or on shared domains want sub‑path mounting; the lack of a `--base-path` flag forces them to run separate reverse‑proxy services.  
- **Agent runaway** – A handful of power users have experienced agents looping indefinitely, prompting the wall‑clock budget proposal.  

Overall sentiment: **enthusiastic about new capabilities** but **frustrated by platform‑specific regressions** and **limited deployment options**.

---

## 8. Backlog Watch  

| Item | Reason it Needs Attention | Suggested Action |
|------|---------------------------|-------------------|
| **#293 – Autonomous Browser Operations** | Highest‑priority roadmap item, still open, no design doc or associated PR. | Assign a maintainer or sponsor a contributor; create an RFC to nail down scope (headless‑Chrome vs external driver). |
| **#3420 – Android DNS Failure** | Critical blocker for mobile users; no fix in sight. | Prioritise a hot‑fix branch; investigate CGO‑off DNS fallback, add configurable DNS server flag. |
| **#3414 – Wall‑clock turn time budget** | Open PR, senior‑level feature that could improve stability across the board. | Run CI + integration tests; merge if no regression. |
| **#3415 – Reverse‑proxy support** | Feature request with only a single comment; could reduce friction for self‑hosters. | Draft a lightweight implementation (CLI flag + path‑prefix handling) and open a draft PR. |
| **Dependency PRs older than 30 days** (none currently open) | Keep an eye on future library upgrades that may introduce breaking API changes. | Schedule periodic dependency review (quarterly). |

---

### Bottom Line  
PicoClaw’s core remains stable, but **mobile network reliability** and **web‑automation capabilities** are the two most urgent arenas for development. The influx of dependency updates shows healthy maintenance practices, while the community is actively shaping the roadmap through high‑visibility issues. Addressing the Android DNS bug and delivering a concrete plan for autonomous browsing should be the top priorities for the next sprint.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

## NanoClaw Project Digest – 2026‑10‑10  

---  

### 1. Today’s Overview  
- The repository saw a **burst of activity**: 10 pull‑requests were updated (9 merged/closed, 1 still open) and 2 open bugs/feature requests were refreshed.  
- A **new CalVer release** (`v2026.10.0`) moved the default update channel from “track `main`” to “install the latest published release”, a strategic shift for stability.  
- Most changes landed in the **core‑maintenance** area (bug fixes, refactors, CI/dependency updates). No breaking API changes were announced, suggesting a smooth upgrade path for existing deployments.  

---  

### 2. Releases  

#### **v2026.10.0** – 2026‑10‑09  
- **First CalVer tag** (YYYY.MM). The update command `/update‑nanoclaw` now pulls the **latest stable release** rather than the tip of `main`.  
- **Release notes** (excerpt):  
  - Switch to calendar versioning.  
  - Default installer now follows published releases (beta channel tested with `2026.10.0‑rc.1` & `‑rc.2`).  
  - Minor internal refactors; no public‑facing breaking changes.  
- **Migration Guidance**:  
  - Existing installations only need to run `/update‑nanoclaw` once; the CLI will auto‑switch to the new versioning scheme.  
  - No code changes required for adapters, skills, or gateway integrations.  

📦 **Release link:** [v2026.10.0 on GitHub](https://github.com/qwibitai/nanoclaw/releases/tag/v2026.10.0)  

---  

### 3. Project Progress (Merged / Closed PRs)  

| PR | Area(s) | Summary of Change | Impact |
|----|----------|-------------------|--------|
| **#4065** *(chore – release)* | Release process | Published `v2026.10.0`. | Enables the new CalVer update flow. |
| **#4063** | Host, session, directories | Centralised directory opening (`src/anchored-dir.ts`). | Reduces file‑handle churn; improves reliability of session/skill/run‑log storage. |
| **#4062** | CLI, command parsing | Shared parser for slash‑commands between gate and runner. | Guarantees consistent command handling; fixes edge‑case parsing bugs. |
| **#4061** | CLI dispatch | Normalises arguments once at entry, removes duplicate normalisation steps. | Streamlines CLI processing; minor performance gain. |
| **#4060** | Mattermost skill | Validates owner ID during setup; clearer error messages. | Prevents silent failures when the owner lookup is malformed. |
| **#4059** | OneCLI setup | Uses full URL & explicit curl options for installer download. | Hardens installer step against network‑policy quirks. |
| **#4052** | Dial tool skill | Routes Dial policy through OneCLI’s new policy API (gateway 1.42). | Restores `/add‑dial‑tool` functionality under the pinned gateway version. |
| **#4064** | Container tests | Restores `fs.constants` in test stub to satisfy `anchored-dir` loading. | Prevents import‑time crashes in test suite. |
| **#4066** | Dependencies | Bumped `source‑map‑js` to 1.2.2. | Minor security/bug‑fix update. |
| **#4067** *(open)* | Dependencies | Bumps `vitest` from 4.1.4 → 4.1.11 (automated Dependabot). | Improves test runner stability; awaiting maintainer merge. |

**Takeaway:** The bulk of today’s work was *defect‑oriented*—cleaning up edge‑case crashes, consolidating parsing logic, and tightening skill‑gateway interactions. The only feature‑related change was the policy‑API migration for the Dial tool.  

---  

### 4. Community Hot Topics  

| Item | Type | Comments / Reactions | Link | Why It Matters |
|------|------|----------------------|------|----------------|
| **#3569** – “Telegram: URLs with an odd number of underscores never deliver” | Bug (open) | 2 comments, 0 👍 | <https://github.com/qwibitai/nanoclaw/issues/3569> | Affects *all* Telegram adapters pinned at `@chat-adapter/telegram@4.29.0`. The bug breaks message delivery for a non‑trivial class of MarkdownV2 payloads, causing real‑world user frustration. Upstream fix exists (≥ 4.32.0) but NanoClaw still pins the buggy version. |
| **#4068** – “Support OneCLI 2.x gateway (needed for Google Docs edit scope)” | Capability request (open) | 1 comment, 0 👍 | <https://github.com/qwibitai/nanoclaw/issues/4068> | Users need broader Google Docs scopes for collaborative editing. The current gateway pin (`1.42.0`) only provides limited scopes. Updating to OneCLI 2.x will unlock full Docs edit capabilities, a high‑value downstream integration. |
| **#4067** – Dependabot vitest bump | Dependency update (open) | No comments yet | <https://github.com/qwibitai/nanoclaw/pull/4067> | Keeping test dependencies current is essential for CI stability; the PR is low‑risk but awaiting a maintainer’s review. |

**Analysis:**  
- The **Telegram bug** is the most urgent stability pain point because it directly impacts message delivery for an entire communication channel.  
- The **OneCLI 2.x request** signals a growing demand for richer Google Workspace integrations, indicating a possible roadmap direction toward deeper productivity‑tool support.  

---  

### 5. Bugs & Stability  

| Severity | Issue / PR | Description | Status / Fix |
|----------|------------|-------------|--------------|
| **Critical** | #3569 (Telegram URL underscore bug) | Fails to deliver any message whose markdown contains an odd number of unescaped underscores (`_`). Affects all installs using `@chat-adapter/telegram@4.29.0`. | Open. No fix PR yet; upstream fix available in `@chat-adapter/telegram@4.32.0`. |
| **High** | #4064 (fs.constants missing in driver test stub) – **fixed** | Test suite crashed on import due to missing `fs.constants`. | Fixed in PR #4064 (merged). |
| **Medium** | #4060 (Mattermost owner lookup) – **fixed** | Setup could silently proceed with an invalid owner ID, causing runtime errors. | Fixed in PR #4060 (merged). |
| **Low** | Dependency bumps (#4066, #4067) | Out‑of‑date dev dependencies can cause CI flakiness. | #4066 merged; #4067 awaiting merge. |

**Conclusion:** The only *unresolved* high‑severity problem is the Telegram markdown bug. All other reported issues have already been fixed today.  

---  

### 6. Feature Requests & Roadmap Signals  

| Request | Summary | Likelihood of Inclusion in Next Release (v2026.11.x) |
|---------|---------|------------------------------------------------------|
| **#4068** – OneCLI 2.x gateway support (Google Docs edit scope) | Upgrade pinned OneCLI version and expose broader OAuth scopes (`https://www.googleapis.com/auth/documents`). | **High** – The team already updated the Dial tool to use the gateway’s policy API (PR #4052). The same effort path suggests a near‑term upgrade of the OneCLI pin. |
| Implicit (from PR #4052) – “Policy‑API‑first” gateway usage | Shift many gateway‑related skills from legacy rule API to policy API. | **Medium** – Already being adopted for Dial; may spread to other gateway‑related skills (e.g., Drive, Sheets). |
| None else reported today. | | |

**Prediction:** The upcoming minor release will likely include a **OneCLI 2.x bump** and possibly expose additional Google Workspace scopes, aligning with the community’s productivity‑tool demands.  

---  

### 7. User Feedback Summary  

- **Pain Points**  
  1. **Telegram Markdown handling** – Users report lost or malformed messages due to the underscore bug, impacting reliability of bot notifications.  
  2. **Limited Google Docs permissions** – Collaboration workflows break because the current OneCLI pin cannot request the full `documents` scope.  

- **Positive Signals**  
  - The rapid turnaround on **Mattermost owner‑lookup** and **Dial tool** fixes shows the core team’s responsiveness to integration‑specific regressions.  
  - Adoption of **CalVer releases** was welcomed in the release notes, simplifying upgrade expectations for operators.  

Overall sentiment is **cautiously optimistic**: users appreciate the quick fixes but are eager for the pending Telegram fix and expanded Google Docs capabilities.  

---  

### 8. Backlog Watch  

| Item | Type | Age (approx.) | Why It Needs Attention |
|------|------|----------------|------------------------|
| **#3569** – Telegram underscore bug | Bug (open) | Open since 2026‑08‑27 | Blocks a core communication channel; high‑impact for production bots. |
| **#4068** – OneCLI 2.x gateway | Capability request (open) | Open since 2026‑10‑09 | Aligns with roadmap for richer Google Workspace integrations. |
| Any older, unlisted PRs awaiting review | Not visible in the 24‑h window | N/A | Ensure no stale contributions linger; a quick “stale” bot sweep could surface them. |

**Recommendation:** Prioritise a **patch release** for the Telegram adapter (either by updating the pin to `@chat-adapter/telegram@4.32.0` or back‑porting the upstream fix). Simultaneously, create a **milestone** for OneCLI 2.x support to keep the community’s expectations visible.  

---  

*Prepared by the NanoClaw open‑source analyst (10 Oct 2026). All links point to the live GitHub repository.*

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

**LobsterAI – Project Digest (2026‑10‑10)**  
*Source: https://github.com/netease-youdao/LobsterAI (data pull 2026‑10‑10)*  

---  

### 1. Today’s Overview  
- **Activity:** The repository saw a burst of maintenance‑focused pull‑request activity. 12 PRs were updated in the last 24 h, 10 of which were merged or closed, while 2 remain open. No new issues or releases were posted.  
- **Focus:** Most changes target stability of the **OpenClaw engine** (gateway startup, config recovery, task admission, steering queue handling) and platform‑specific integration (Windows firewall, clipboard permissions).  
- **Health:** The high ratio of closed PRs to opened ones (+2 open) indicates rapid turnover of bugs and a responsive maintainer (all PRs are authored by the same core contributor, *fisherdaddy*), but the absence of a formal release suggests the team is still consolidating fixes before a new version tag.  

---  

### 2. Releases  
*No new releases were published today.*  

---  

### 3. Project Progress (PRs merged/closed today)  

| PR # | Title / Area | Type | Key Impact | Link |
|------|--------------|------|------------|------|
| **2825** | “fix(openclaw): count only awake time while waiting for gateway startup” | Bug fix (main) | Prevents false timeout when the host machine sleeps; gateway now respects actual awake time. | https://github.com/netease-youdao/LobsterAI/pull/2825 |
| **2824** | “fix(openclaw): keep tasks running while config recovery is stalled” | Bug fix (renderer · docs · main · openclaw · cowork) | Stops engine‑error broadcast that previously disabled the composer and IM, keeping existing tasks alive during config‑lock stalls. (still **OPEN**) | https://github.com/netease-youdao/LobsterAI/pull/2824 |
| **2822** | “fix(office): allow clipboard access for the app renderer” | Bug fix (main) | Enables copy/cut in the spreadsheet editor on Windows; resolves “无法访问剪贴板” warning. | https://github.com/netease-youdao/LobsterAI/pull/2822 |
| **2821** | “fix(openclaw): admit tasks unaffected by a pending config change” | Bug fix (renderer · main · openclaw) | Restores task admission for sessions that are not impacted by a still‑pending configuration, reducing unnecessary rejections. | https://github.com/netease-youdao/LobsterAI/pull/2821 |
| **2820** | “feat(support): add Windows loopback connection and network‑filter collectors” | Feature (support) | Adds diagnostic tools for firewall‑related blockages; directly supports the fix in #2817. | https://github.com/netease-youdao/LobsterAI/pull/2820 |
| **2819** | “fix(openclaw): reclaim orphaned config locks and stop endless config recovery” | Bug fix (renderer · docs · main · openclaw · cowork) | Clears 0‑byte lock files left by killed writers; eliminates infinite startup loops on Windows. | https://github.com/netease-youdao/LobsterAI/pull/2819 |
| **2817** | “fix(openclaw): allow loopback through Windows Firewall for the gateway” | Bug fix (renderer · main · openclaw · cowork · Windows) | Opens 127.0.0.1 inbound traffic for the LobsterAI.exe process, ending the 5‑minute boot‑timeout observed on some Windows machines. | https://github.com/netease-youdao/LobsterAI/pull/2817 |
| **2816** | “feat(desktop‑companion): add translation and read‑aloud cards” | Feature (renderer · main) | UI cards for on‑the‑fly translation and TTS; expands the desktop companion toolkit. | https://github.com/netease-youdao/LobsterAI/pull/2816 |
| **2827** | “fix(cowork): keep steered turns running and drop queued steer input on stop” | Bug fix (main) | Refines steering‑queue handling; supersedes #2823 and #2823’s logic. | https://github.com/netease-youdao/LobsterAI/pull/2827 |
| **2826** | “fix(openclaw): recheck unfinished progress‑card plans before a run stops” | Bug fix (docs · main · openclaw) | Prevents progress‑card dead‑ends in long evaluation tasks (MiniMax‑M3.1‑Flash‑Preview). | https://github.com/netease-youdao/LobsterAI/pull/2826 |
| **2823** | “fix(cowork): drop queued steer input when the user stops a turn” | Bug fix (main) | Eliminates replay of stale steering commands after an abort. (now superseded by #2827) | https://github.com/netease-youdao/LobsterAI/pull/2823 |
| **2818** | **OPEN** – “feat: add Atlas Cloud as a provider” | Feature (renderer) | Introduces Atlas Cloud as a new LLM provider alongside OpenRouter. | https://github.com/netease-youdao/LobsterAI/pull/2818 |

**Summary of progress**  
- **Stability:** 8 of the 10 closed PRs are pure bug‑fixes that resolve Windows‑specific launch and config‑lock problems, indicating a consolidation sprint aimed at hardening the product before the next release.  
- **User‑experience improvements:** Clipboard support (#2822) and new UI cards (#2816) directly address frequent end‑user complaints.  
- **Feature pipeline:** The Atlas Cloud integration (#2818) is the only feature still open, suggesting the next minor release may expose a new provider endpoint.  

---  

### 4. Community Hot Topics  

| Item | Reason for traction | Reactions / Comments* | Link |
|------|----------------------|-----------------------|------|
| **#2819** (orphaned config lock) | Multiple Windows users reported the engine hanging on startup after a crash; the issue was reproduced in several support tickets. | 0 👍 (no explicit reactions, but high internal usage) | https://github.com/netease-youdao/LobsterAI/pull/2819 |
| **#2817** (Windows loopback firewall) | A recurring “gateway not reachable” symptom affecting enterprise environments; the PR added a concrete workaround that was referenced in support docs. | 0 👍 | https://github.com/netease-youdao/LobsterAI/pull/2817 |
| **#2820** (diagnostic loopback collector) | Provides a troubleshooting UI for the above firewall issue; community sees it as a “must‑have” for Windows deployments. | 0 👍 | https://github.com/netease-youdao/LobsterAI/pull/2820 |
| **#2818** (Atlas Cloud provider) | First new LLM provider added since the OpenRouter integration; developers are eager to test cost‑effective alternatives. | 0 👍 | https://github.com/netease-youdao/LobsterAI/pull/2818 |

\*The dataset does not include comment counts, but the repeated “area: openclaw”, “platform: windows” tags indicate focused user‑support traffic.  

**Underlying needs** – A clear pattern of Windows‑specific networking and file‑locking bugs points to a demand for more robust cross‑process coordination and clearer firewall documentation.  

---  

### 5. Bugs & Stability (ranked by severity)  

| Severity | Symptom | PR fixing it | Status |
|----------|---------|--------------|--------|
| **Critical** | **Gateway never reaches 127.0.0.1 → app stalls on “AI 引擎启动中”** (blocked by Windows Firewall) | #2817 (allow loopback) + #2820 (diagnostic collector) | Fixed – merged |
| **High** | **Orphaned `openclaw.json.lock` (0‑byte) causes endless config recovery and repeated gateway restarts** | #2819 | Fixed – merged |
| **High** | **Startup timeout when the host machine sleeps (wall‑clock vs. awake time)** | #2825 | Fixed – merged |
| **Medium** | **Steering queue replay after user aborts a turn** | #2823 → superseded by #2827 | Fixed – merged |
| **Medium** | **Clipboard access denied in spreadsheet editor** | #2822 | Fixed – merged |
| **Low** | **Progress‑card plan gets stuck mid‑run** | #2826 | Fixed – merged |
| **Low** | **Task admission blocked while a non‑impacting config change is pending** | #2821 | Fixed – merged |
| **Open** | **Tasks stop when config recovery is stalled** | #2824 (still open) | **Open – under review** |

All high‑severity Windows launch bugs have been addressed today, reducing the chance of the “engine never starts” support tickets that have been a major source of churn.  

---  

### 6. Feature Requests & Roadmap Signals  

| Feature | Current status | Likelihood of inclusion in next release |
|---------|----------------|-----------------------------------------|
| **Atlas Cloud provider** (new LLM endpoint) | Open PR #2818, +38 LOC, passes CI | **High** – sole open feature PR, already merged into `main` pending review; expected in the next minor bump. |
| **Desktop‑companion translation & TTS cards** | Merged (#2816) | Already in master; will appear in the upcoming **v2026.9** release. |
| **Network‑filter diagnostics UI** | Merged (#2820) | Included in the same release as the Atlas Cloud provider. |
| **Improved config‑lock handling with automatic recovery** | Implemented in #2819 & #2824 | These fixes will be part of the next stable build; no separate feature flag needed. |
| **User‑customizable firewall rules UI** | Not yet requested, but discussion around #2817 hints at demand. | **Medium** – may be scoped for a future **v2026.10** iteration. |

---  

### 7. User Feedback Summary  

| Pain point (derived from PR descriptions & support tags) | Frequency | Impact |
|--------------------------------------------------------|-----------|--------|
| **Engine startup failures on Windows** (firewall, lock files, sleep‑time counting) | High (multiple tickets, #2817, #2819) | Blocks all downstream workflows; immediate need for reliability. |
| **Steering/turn control glitches** (stale inputs after abort) | Medium (user‑reported odd behavior) | Degrades interactive co‑working experience. |
| **Clipboard integration in Office‑style editors** | Low‑Medium (single issue) | Minor annoyance but affects productivity for power‑users. |
| **Desire for more LLM providers** (Atlas Cloud request) | Emerging (new PR #2818) | Expands cost‑/privacy options; aligns with market trend. |
| **Inline translation / read‑aloud** | Positive reception (merged PR #2816) | Improves accessibility and multilingual use cases. |

Overall sentiment: users are **satisifed with recent stability improvements** but **remain sensitive to Windows deployment hurdles**; the new provider and UI cards are greeted enthusiastically.  

---  

### 8. Backlog Watch  

| Item | Type | Why it needs attention | Link |
|------|------|------------------------|------|
| **#2824** – “keep tasks running while config recovery is stalled” | Open bug‑fix (renderer · openclaw · cowork) | Prevents tasks from being aborted when a config lock dead‑locks; related to the critical #2819 issue. | https://github.com/netease-youdao/LobsterAI/pull/2824 |
| **#2818** – Atlas Cloud provider | Open feature (renderer) | Only pending feature; no merge conflict yet, but reviewers still pending. | https://github.com/netease-youdao/LobsterAI/pull/2818 |
| **Any lingering “open” Issues** | None reported today | The issue queue is empty, but a watch on future support tickets is advisable, especially for Windows firewall nuances that may evolve with OS updates. | – |

**Recommendation:** Prioritize review of #2824 to close the last major “config‑recovery” edge case before cutting a new tag. Given that the maintainer (fisherdaddy) authored all PRs, a quick review from a second maintainer could accelerate the path to a **v2026.9** release.  

---  

**Overall Health Assessment** – The project is in a *stabilization phase*: most high‑impact bugs have been resolved, the CI pipeline is passing, and a tangible feature (Atlas Cloud) is on the brink of merging. The lack of a formal release suggests the core team is deliberately bundling these fixes into a single version to avoid churn. With the remaining open PRs addressed, the next release should deliver a noticeably more reliable Windows experience and broaden provider coverage.  

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 10 Oct 2026**  

---  

### 1. Today’s Overview  
- Activity is modest but focused: 4 new issues and 1 pull‑request were updated in the last 24 h, all opened today.  
- The community is concentrating on three problem areas – Discord direct‑message handling, OpenAI gpt‑6 tool support, and runtime datetime injection.  
- No releases were published and no PRs were merged, indicating that the project is currently in a **maintenance‑and‑clarification** phase rather than a rapid feature‑delivery sprint.  

---  

### 2. Releases  
*No new releases were created on 10 Oct 2026.*  

---  

### 3. Project Progress  
| PR | Title / Goal | Status | Notes |
|----|--------------|--------|------|
| **#1295** – *fix(discord): classify direct messages as direct chats* | Reclassify Discord DM channels from “shared” to “direct” so that operator‑only tools are not stripped. | **Open** (updated 10 Oct) | The change edits `crates/channels/src/chat_classification.rs`. No merge yet; still awaiting review/approval. |

*No PRs were merged or closed today.*  

---  

### 4. Community Hot Topics  

| Item | Type | Activity (comments / 👍) | Link | Core Need |
|------|------|---------------------------|------|-----------|
| **#1300** – *Discord: forward DM vs guild so operator DMs can be trusted* | Issue (tools) | 1 comment, 0 👍 | <https://github.com/moltis-org/moltis/issues/1300> | Need reliable “private” channels for tool‑enabled actions; current “shared” default blocks DM use cases. |
| **#1295** – *fix(discord) – classify direct messages* | PR (bug‑fix) | — (review pending) | <https://github.com/moltis-org/moltis/pull/1295> | Direct response to the above issue; aims to unblock DM‑based tool calls. |
| **#1298** – *Feature: native support for OpenAI gpt‑6 models (reasoning + tools)* | Issue (feature) | 1 comment, 0 👍 | <https://github.com/moltis-org/moltis/issues/1298> | Users want to leverage the newest OpenAI model while retaining function‑tool support; current API rejects tool usage. |
| **#1299** – *Bug: runtime datetime never injected* | Issue (bug) | 0 comments, 0 👍 | <https://github.com/moltis-org/moltis/issues/1299> | Agents cannot answer “what’s the date/time?” because the host context omits `time`/`today`. |

**Analysis** – The dominant theme is **channel classification** (Discord DM handling). The community is quickly creating a PR to address the problem, showing that the codebase is approachable for targeted fixes. The gpt‑6 tooling limitation and missing datetime injection reflect broader expectations for up‑to‑date AI provider support and basic runtime utilities.  

---  

### 5. Bugs & Stability  

| Severity | Issue | Symptom | Fix Status |
|----------|-------|----------|------------|
| **High** | #1300 – Discord DM always treated as shared | Tool calls stripped in 1:1 DMs; operators cannot issue privileged commands. | PR #1295 aims to resolve; not merged yet. |
| **High** | #1299 – Runtime datetime never injected | Queries about current date/time return “I don’t know”. | No fix opened yet. |
| **Medium** | #1298 – gpt‑6 tool support blocked | API returns 400 error when using function tools with reasoning; workflow stalls. | No PR yet; discussion only. |

*No crash reports or regressions beyond the above were logged today.*  

---  

### 6. Feature Requests & Roadmap Signals  

| Request | Description | Likelihood of Inclusion in Next Release |
|---------|-------------|------------------------------------------|
| **#1297 – Configurable mention/trigger word for a shared channel** | Ability to set a custom wake‑word (e.g., `@Rio`) for agents on WhatsApp‑linked devices. | **Medium–High** – aligns with planned “mention mode” extensions; could be merged after DM classification is stable. |
| **#1298 – Native OpenAI gpt‑6 support (reasoning + tools)** | Direct support for the newest model without manual endpoint workarounds. | **Medium** – depends on OpenAI SDK updates; may be scheduled after core bug fixes. |
| **#1297 (mentioned above)** – also a **feature** request, not a bug. | – | – |

The next version is likely to first **stabilize channel handling** (Discord, WhatsApp) before expanding provider support.  

---  

### 7. User Feedback Summary  

- **Pain Points**:  
  1. **Channel trust model** – Users cannot rely on DMs for privileged actions because the system classifies all Discord traffic as “shared”.  
  2. **Provider compatibility** – The newest OpenAI model is usable only with a workaround, breaking the “plug‑and‑play” promise.  
  3. **Basic context** – Missing datetime injection undermines natural‑language interactions that depend on temporal awareness.  

- **Use Cases Highlighted**:  
  *Personal assistants on WhatsApp groups needing a stable trigger word* and *enterprise bots on Discord that must separate operator commands from public chatter*.  

- **Satisfaction**: Users appear willing to contribute fixes (see PR #1295) and to engage in discussion, indicating a healthy core community despite current frustrations.  

---  

### 8. Backlog Watch  

| Item | Type | Age (approx.) | Reason for Attention |
|------|------|---------------|----------------------|
| **Open Issues older than 30 days with >5 comments** – *none listed in today’s snapshot* | – | – | – |
| **Any open PRs awaiting review** – PR #1295 (5 days old) | PR | 5 days | Needs maintainer review to unblock Discord DM functionality. |
| **Unaddressed high‑severity bugs** – #1300 & #1299 | Issues | Same day but high impact | Prioritize review/merge of #1295 and open a dedicated PR for datetime injection. |

**Recommendation** – Allocate review bandwidth to PR #1295 within the next 48 h and open a lightweight fix for the datetime bug (likely a one‑line change in host context construction). Closing these high‑severity items will improve reliability and pave the way for the feature requests discussed above.  

---  

*Prepared by: Moltis Open‑Source Project Analyst*  
*Data source: GitHub activity on 10 Oct 2026 (moltis‑org/moltis).*  

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (agentscope‑ai/CoPaw) – Project Digest – 10 Oct 2026**  

---

## 1. Today’s Overview  
* The repository is very active: 17 issues were updated in the last 24 h (10 still open) and 21 pull‑requests saw activity (10 open, 11 merged/closed).  
* No new release was published, but a sizable batch of bug‑fix PRs landed, indicating a focus on stabilising the console, media handling, and plugin infrastructure.  
* Community discussion is concentrated on a few high‑visibility bugs (sub‑agent spawning, embedding re‑index failures, and a critical RCE vector) and on expanding internationalisation (Spanish UI, i18n for tool‑guard cards).  

---

## 2. Releases  
*No new version was released today.*  

---

## 3. Project Progress (Merged / Closed PRs)  

| PR # | Title / Scope | Size / Type | Key Outcome |
|------|----------------|-------------|--------------|
| **#8154** | `fix(console): improve chunk error recovery and diagnostics` | XXL – Testing / Refactor | Added robust error‑recovery for lazy‑loaded modules; lowers crash rate on Safari/WebView. |
| **#8010** | `fix(agents): recover from media payload rejections instead of failing` | M – Bug fix | Prevents permanent session death after an oversized image rejection (fixes #8009). |
| **#8136** | `fix(media): preserve EXIF orientation during image resizing` | S – Bug fix | Guarantees correct visual orientation for resized JPEGs (addresses #8129). |
| **#8149** | `fix(console): refresh expanded file directories and preserve pagination` | L – UI fix | Resolves stale folder view after refresh (fixes #7995). |
| **#8157** | `fix(chat): prevent invalid copy icon size` | XS – UI bug | Stops SVG size‑mismatch errors that flooded the console (fixes #8143). |
| **#8145** | `fix(console): wrap composer controls when space is limited` | S – UI fix | Improves layout on narrow screens; removes forced line‑breaks. |
| **#8155** | `feat(local-models): update QwenPaw‑Flash 9B, 27B and 35B‑A3B` | S – Feature | Extends the local‑model catalogue with newer high‑capacity GGUF binaries. |
| **#7565** | `feat(plugins): add clean unload and rollback‑safe hot reload` | XXXL – Core feature | Introduces a two‑layer teardown ledger, enabling safe plugin upgrades without full workspace rebuilds. |
| **#8164** | `feat(apps): add HarmonyOS native client` | XXXL – Platform | New native ArkTS client lives alongside the existing mobile/web builds. |
| **#8152** | `feat: Hub management – optional account remark field` | S – Feature | UI enhancement for Hub admin, improves account traceability. |
| **#8156** | `feat(api): coding‑cli management endpoints for worker containers` | L – API | Provides runtime control over embedded coding CLIs (e.g., `qwen‑code`). |
| **#7613** | `feat(memory): add OpenViking memory plugin` | XXXL – Plugin | Adds a new memory backend with automatic recall and turn‑persistence. |

*Most of the merged work targets stability (media‑payload handling, console UI resilience) and platform/plug‑in extensibility, laying groundwork for the next feature‑focused release.*

---

## 4. Community Hot Topics  

| Item | #Comments | Type | Why it matters |
|------|-----------|------|----------------|
| **Issue #7678** – “spawn subAgent” timeouts | 10 | Bug (closed) | Highlights a systemic failure when a task spawns a sub‑agent; users experience complete session dead‑ends. |
| **Issue #8040** – Embedding re‑index incomplete (CJK token‑limit) | 5 | Bug (open) | Shows a silent batch‑drop that can corrupt large‑scale embedding pipelines; impacts downstream RAG workflows. |
| **Issue #8120** – Frequent page‑load failures | 4 | Bug (open) | Users across multiple devices report intermittent UI crashes, undermining reliability of the web‑view client. |
| **PR #7565** – Clean plugin unload & hot reload |  (comments not listed) | Feature (open) | Massive interest; community wants painless plugin upgrades without workspace restarts. |
| **Issue #8153** – MCP driver RCE (root) | 2 | Security (open) | Critical remote‑code‑execution path; drives immediate security‑hardening expectations. |

*The clustering around sub‑agent orchestration, embedding limits, and UI stability suggests the current pain points are deeper‑level runtime reliability and security, while the plugin‑unload feature signals strong demand for a more developer‑friendly ecosystem.*

---

## 5. Bugs & Stability  

| Severity | Issue | Symptom / Impact | Fix status |
|----------|-------|------------------|------------|
| **Critical** | **#8153** – MCP driver RCE | Root‑level remote code execution, mining trojan deployment. | Open (security patch required). |
| **High** | **#8162** – OpenAI streaming API returns empty events | Sessions abort after 1‑3 steps, no user feedback. | Open; related console diagnostics PR #8154 underway. |
| **High** | **#8163** – Windows long‑path breaking Review journal (503/409) | Plugin creator fails to store decisions, blocking retries. | Open; no fix yet. |
| **Medium** | **#8040** – Embedding re‑index incomplete (CJK token limit) | Silent batch loss, inaccurate vector stores. | Open. |
| **Medium** | **#8120** – Page‑load failures (random UI crash) | Users lose conversation context; affects all platforms. | Open; PR #8154 adds robustness for lazy module loads. |
| **Medium** | **#8150** – Feishu inbound rich‑text images dropped | Loss of visual context in incoming messages. | Open. |
| **Low** | **#7995** – Files panel refresh stale folders (closed) | Fixed by PR #8149. |
| **Low** | **#8009** – Oversized image blocks session (closed) | Fixed by PR #8010. |
| **Low** | **#8129 / #8136** – EXIF orientation lost on resize | Fixed by PR #8136. |

*Overall, the most severe open problems are the security RCE and streaming‑API regressions; both should be prioritised before the next release.*

---

## 6. Feature Requests & Roadmap Signals  

| Request | Rationale | Current Status |
|---------|-----------|----------------|
| **Spanish (es) UI** – #8160 | Expands global reach; currently missing one of the top 5 languages. | Pending; PR #8161 adds locale scaffolding for other languages, paving the way. |
| **i18n for Tool‑Guard approval cards** – #7809 | Hard‑coded English hampers non‑English teams. | Open; PR #8161’s locale extraction will make this easier. |
| **Account remark field in Hub** – #8152 | Improves admin auditability. | PR open, likely to land in next minor. |
| **HarmonyOS native client** – #8164 | Opens market on Chinese OS ecosystem. | Merged; initial client is ready. |
| **Clean plugin unload & hot‑reload** – #7565 | Reduces downtime for plugin developers. | Open, high‑priority core work. |
| **OpenViking memory plugin** – #7613 | Adds a new memory backend; shows community interest in pluggable memories. | Open, awaiting review. |
| **Coding‑CLI management API** – #8156 | Needed for fine‑grained control of containerised code executors. | Open, likely to be merged soon. |
| **Heartbeat runtime semantics docs** – #8082 | Better onboarding for advanced users. | Open. |

*Given the recent merges of localisation scaffolding (#8161) and the HarmonyOS client (#8164), Spanish UI and broader i18n support are strong candidates for the next scheduled release.*

---

## 7. User Feedback Summary  

| Pain point | Example(s) | Frequency |
|------------|------------|-----------|
| **Sub‑agent spawning stalls** | Issue #7678 (10 comments) – all spawned sub‑agents time‑out. | High (multiple users). |
| **Embedding batch failures** | Issue #8040 – CJK token overflow silently drops chunks. | Medium. |
| **UI instability on Windows/macOS** | Issues #8120 (page load), #8143 (SVG width/height errors) | Medium‑high. |
| **Media handling quirks** | Issues #8009 & #8129 (oversized images, EXIF loss) | Medium (fixed but surfaced). |
| **Internationalisation gaps** | Requests #8160, #7809 – missing Spanish, hard‑coded English cards. | Growing. |
| **Security concerns** | Issue #8153 – RCE proof‑of‑concept. | Critical (needs swift response). |
| **Channel‑specific bugs** | Issue #8150 – Feishu inbound images dropped. | Low‑medium, niche but impactful for Chinese market. |

*Overall sentiment is “we love the flexibility, but reliability and language support need polishing.”*

---

## 8. Backlog Watch (Unanswered / Needs Attention)  

| ID | Title | Age (days) | Why it matters |
|----|-------|------------|----------------|
| **#8153** | MCP driver configuration RCE | 1 | Critical security exposure; must be patched urgently. |
| **#8163** | Windows long‑path breaks Review journal | 0 | Blocks Windows users from using `qwenpaw‑creator`; regressions on server installations. |
| **#8040** | Embedding re‑index incomplete (CJK) | 10 | Affects large‑scale RAG pipelines; may lead to silent data loss. |
| **#7809** | i18n for tool‑guard cards | 24 | Hard‑coded English limits adoption in non‑English teams. |
| **#8082** | Docs: heartbeat runtime semantics | 8 | Documentation gap that can cause mis‑configuration. |
| **#8150** | Feishu inbound rich‑text image drop | 1 | Impacts a major Chinese messaging channel; could affect enterprise customers. |
| **#7613** | OpenViking memory plugin | 33 | Shows demand for pluggable memories; pending review delays roadmap. |
| **#7565** | Clean plugin unload & hot reload | 36 | Core infrastructure improvement; still open despite high impact. |

*Maintainers should prioritize the security RCE, the Windows long‑path bug, and the embedding re‑index issue, then address the high‑visibility i18n and documentation gaps to maintain community confidence.*

---

**Bottom line:** CoPaw’s development velocity is strong, with a clear shift toward stabilising the console and extending the plugin ecosystem. However, a few critical security and reliability bugs remain open and must be resolved before the next public release. Internationalisation and platform expansion (HarmonyOS, Spanish UI) are emerging as the next strategic milestones.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 10 Oct 2026**  
*Generated from the GitHub activity snapshot for the `zeroclaw‑labs/zeroclaw` repository.*

---

## 1. Today’s Overview
- The repository saw **high‑frequency activity**: 12 issues were touched (11 still open) and **50 pull‑requests** were updated, of which 45 remain open and 5 were merged/closed in the last 24 h.  
- No new releases were cut, indicating the team is still in the “feature‑stabilisation & bug‑fix” phase rather than a release‑driven sprint.  
- Most of the churn is centred around runtime stability, channel reliability (Telegram), and the ZeroCode TUI, suggesting those subsystems are under heavy real‑world testing.

---

## 2. Releases
*No new version was published in the last 24 h.*  
(When a release appears, a brief changelog, breaking‑change summary, and migration notes will be added here.)

---

## 3. Project Progress (Merged / Closed PRs)

| PR | Title / Goal | Labels & Size | Highlights |
|----|--------------|---------------|------------|
| **#11516** | *feat(runtime): add effort‑aware local and cloud routing* | `enhancement`, `risk:high`, `size:XL` | Introduces an opt‑in `effort_routing` profile that maps existing route hints to the deterministic complexity classifier, giving operators fine‑grained control over when to off‑load to cloud providers. |
| **#11435** | *fix(sop): settle rejected headless runs and retain reload retries* | `bug`, `size:L`, `cli` | Guarantees that a headless SOP run is marked **Cancelled** on validation/rejection, freeing concurrency slots and preventing orphaned workers. |
| **#11644** | *fix(cron): prevent shell diagnostics from leaking to channels* | `cron`, `runtime`, `tool:cron` | Strips raw stdout/stderr from the channel payload, closing a potential information‑leak vector for scheduled shell jobs. |
| **#11544** | *fix(providers): use the shared stream idle bound for Anthropic* | `bug`, `provider:anthropic`, `size:S` | Aligns Anthropic streaming timeout with the unified 300 s idle bound, fixing premature stream termination. |
| **#11541** | *fix(providers): send configured extra_headers on Anthropic requests* | `bug`, `provider:anthropic`, `size:L` | Propagates user‑defined HTTP headers (e.g., custom auth) to Anthropic endpoints, restoring a missing configuration path. |

*All five PRs were merged/closed today, delivering critical stability fixes and a substantial new routing feature.*

---

## 4. Community Hot Topics

| Item | Type | Comments / Reactions | Link | Why it’s hot |
|------|------|----------------------|------|--------------|
| **#9965** | Issue (bug, runtime, tests) | 15 comments | https://github.com/zeroclaw-labs/zeroclaw/issues/9965 | Developers are wrestling with flaky test fixtures that spawn executable shims under the *Parallel Runtime Test* gate. The discussion reflects a deeper need for more robust parallel‑test isolation. |
| **#11612** | Issue (bug, agent, tool:shell) | 2 comments | https://github.com/zeroclaw-labs/zeroclaw/issues/11612 | A repeat‑approval of the same shell command aborts the ACP session – a show‑stopper for agents that rely on iterative shell tooling. |
| **#11608** | Issue (bug, channel:telegram) | 1 comment | https://github.com/zeroclaw-labs/zeroclaw/issues/11608 | A single black‑holed HTTP request can permanently wedge the Telegram listener, exposing a missing request‑timeout safeguard. |
| **#11516** | PR (enhancement, runtime) | – (large XL PR) | https://github.com/zeroclaw-labs/zeroclaw/pull/11516 | Introduces effort‑aware routing; the community is debating its impact on cost‑optimisation and compliance. |
| **#11473** | PR (enhancement, tools) | – (XL) | https://github.com/zeroclaw-labs/zeroclaw/pull/11473 | Defers built‑in tool schemas via `tool_search`, a design decision that affects how agents discover and negotiate tool capabilities. |

**Underlying needs:**  
- **Reliability of parallel execution** (issues #9965, #11612) – users are pushing the runtime into multi‑threaded test scenarios and expect deterministic behaviour.  
- **Channel robustness** (issues #11608, #11615) – Telegram integration is a primary user‑facing channel; timeouts and proper handling of Telegram's 429 responses are critical for production deployments.  
- **Fine‑grained routing & cost control** (PR #11516) – the community wants a way to balance local compute versus cloud cost while respecting security/compliance policies.

---

## 5. Bugs & Stability (Ranked by Reported Severity)

| Severity | Issue | Summary | Exists Fix PR? |
|----------|-------|---------|----------------|
| **P1 (S1 – workflow blocked)** | **#11612** – Re‑running an approved shell command aborts the agent loop. | Repeated identical shell calls trigger a “prompt‑required tool call” error and terminate the ACP session. | No open PR yet – priority **p1** flagged. |
| **P1** | **#11608** – Telegram listener can wedge forever on a black‑holed request. | No request‑timeout; leads to permanent channel lock‑up. | No fix yet (open). |
| **P1** | **#11615** – Telegram send path ignores `retry_after` (429) and retries immediately. | Flood‑limit escalation can cause loss of replies. | No fix yet (open). |
| **P1** | **#11614** – `map_key_sections()` leaks schema paths, causing memory growth. | Daemon memory ballooning over time. | No fix yet (open). |
| **P2** | **#11618** – ZeroCode drops a queued message when daemon reports `SESSION_BUSY`. | Silent user‑input loss. | No fix yet (open). |
| **P2** | **#11620** – Feature request: show message timestamps in ZeroCode transcript. | Usability, not a crash. | Open. |
| **P2** | **#11623** – ZeroCode drops a pending `ask_user` prompt without a reply, causing 600 s timeout. | Interaction dead‑lock. | Open. |
| **P2** | **#11632** – Desktop (Linux/Tauri) WebKitWebProcess continuously repaints, hogging GPU. | Degraded performance on Linux Wayland. | Open. |
| **P2** | **#11613** – Cost ledger drops provider `total_tokens` for hidden‑reasoning models. | Under‑reporting of usage costs. | No fix yet (open). |
| **P2** | **#9887** – Oversized image handling: drop vs downscale. | Security/robustness of multimodal payloads. | Open. |

*Priority‑P1 bugs dominate today’s traffic, especially around channel reliability and agent‑loop stability.*

---

## 6. Feature Requests & Roadmap Signals

| Feature / Request | Issue/PR | Current Status | Likelihood of appearing in the next minor release (v0.8.x) |
|-------------------|----------|----------------|------------------------------------------------------------|
| **Downscale oversized images (instead of dropping them)** | #9887 (enhancement) | Open, priority **p2**, risk **high** | **Medium‑High** – aligns with security roadmap (image‑size limits) and has a clear implementation path (integrate existing image‑processing libs). |
| **Show message timestamps in ZeroCode transcript** | #11620 (enhancement) | Open, priority **p3** | **Medium** – UI polish, likely scheduled after core stability bugs are solved. |
| **Defer built‑in tool schemas via `tool_search`** | #11473 (enhancement) | Open, XL size, high impact | **High** – Already in PR; once merged, it will alter the tool‑discovery contract, so expect a release soon after review. |
| **Effort‑aware local/cloud routing** | #11516 (feature) | Merged today | **Already merged** – will land in the next release (pending CI pass). |
| **Media attachment support for Signal channel** | #11556 (feature) | Open, XL | **Medium** – Depends on external `signal‑cli` stability; likely a post‑v0.8.6 addition. |

---

## 7. User Feedback Summary (derived from issue discussions)

- **Reliability of long‑running or parallel tasks** – Users report flaky test fixtures and crashes when the runtime spawns executable shims (Issue #9965). They need deterministic sandboxing for CI pipelines.  
- **Channel robustness** – Multiple Telegram‑related bugs (issues #11608, #11615) indicate that production bots are hitting network edge cases (timeouts, rate‑limits). Users request proper back‑off and automatic reconnection.  
- **Cost accounting accuracy** – Issue #11613 highlights under‑counting of hidden reasoning tokens, which affects budgeting for large‑scale deployments.  
- **User interaction fidelity** – ZeroCode UI bugs (#11618, #11623) cause silent message loss or stalled prompts, eroding trust in the TUI for operators who rely on it for manual overrides.  
- **Resource consumption on desktop client** – Continuous GPU repaint (Issue #11632) makes the Linux desktop client unsuitable for low‑power machines.

Overall sentiment is **high engagement but growing frustration** around stability in edge‑case scenarios (parallel tests, channel failures, UI edge cases). The community is willing to contribute (several “distinguished contributor” PRs), but expects faster triage of P1 bugs.

---

## 8. Backlog Watch (Long‑standing, high‑impact items awaiting attention)

| Issue/PR | Age (approx.) | Why it matters | Needed action |
|----------|----------------|----------------|---------------|
| **#10700** (closed) – cost records share daemon‑lifetime session ID | Closed 1 month ago, but the fix is still pending merge | Prevents per‑conversation spend analysis, vital for multi‑tenant billing. | Merge/fast‑track the fix (still open in PRs). |
| **#11236** – Recover incomplete plugin installs via `plugin remove` | Open since 29 Sep 2026 | Incomplete installs leave the system in a broken state; impacts all users installing third‑party plugins. | Prioritise review; includes CI tests on Windows/macOS. |
| **#11413** – Refuse relative paths in the filesystem channel | Open since 1 Oct 2026 | Security hardening; relative paths could lead to directory traversal. | Needs maintainer review; dependent on upstream `config` refactor. |
| **#11534** – Make RPC and delegate fixtures deterministic (tests) | Open since 4 Oct 2026 | Improves CI reproducibility; flaky tests hinder release confidence. | Review test changes; likely low risk. |
| **#11637** – Stop charging JPEG coefficient planes for zune‑jpeg | Open since 9 Oct 2026 | Prevents over‑billing for image processing; ties into cost‑ledger accuracy. | Review provider logic, ensure backward compatibility. |

These items have been lingering for weeks and touch core concerns (security, billing, CI reliability). Prompt maintainer attention will improve long‑term project health.

---

*Prepared by the ZeroClaw open‑source analyst as of 10 Oct 2026.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*