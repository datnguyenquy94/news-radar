# AI CLI Tools Community Digest 2026-11-09

> Generated: 2026-11-09 05:51 UTC | Tools covered: 10

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Grok Build](https://github.com/xai-org/grok-build)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

**AI CLI Tools – Cross‑Tool Summary (2026‑11‑09)**  

---  

### 1. Ecosystem Overview  
The AI‑developer‑tools landscape is now a **multi‑vendor, fast‑moving market** in which each major cloud provider ships a full‑stack CLI (model orchestration, tool calling, UI/TUI) while a handful of open‑source projects (Gemini‑CLI, Pi, OpenCode, DeepSeek‑TUI, Qwen‑Code) experiment with novel agent architectures and extensibility hooks.  The dominant themes are **privacy‑first defaults, deterministic session management, and plug‑in‑driven workflows** that must run on Windows, macOS and Linux without exploding system resources.

---  

### 2. Activity Comparison (today)

| Tool | Issues referenced today* | PRs referenced today* | Release today? |
|------|--------------------------|-----------------------|----------------|
| **Claude Code** | 10 hot issues (privacy #107757, Windows process leak #94478, safety‑block #95539, etc.) | 0 | No |
| **OpenAI Codex** | 10 hot issues (CLI timeout #28969, Windows `get_window_state` #51524, remote pairing #48774, etc.) | 10 notable PRs merged (60342‑60320, 60286‑60270) | No |
| **Gemini CLI** | 10 hot issues (sub‑agent recovery #22323, generalist hangs #21409, Wayland bug #21983, etc.) | 10 notable PRs merged (30204, 16433‑29946) | No |
| **GitHub Copilot CLI** | 10 hot issues (Git Bash support #508, session wedged #5219, 120 s host‑ack timeout #5100, etc.) | 0 | No |
| **Kimi Code** | – (no activity) | – | – |
| **OpenCode** | 10 hot issues (session‑tree #41363, plugin git‑deps #49704, macOS hardened‑runtime #62699, etc.) | 10 notable PRs (62829‑62817) | No |
| **Pi (Mono)** | 10 hot issues (token‑usage inflation #10287, image‑batch stall #10162, extension send‑error #11238, etc.) | 10 notable PRs (11940‑11900, …) | No |
| **Qwen Code** | 5 hot issues (CI Managed‑Agent fail #16672, telemetry #16714, file‑watcher #16708, Java lane #16712, dashboard #15251) | 10 notable PRs (16642‑16716) | **sdk‑typescript v0.1.29** (back‑filled) |
| **DeepSeek TUI** | 1 new issue (Anthropic dot‑in‑tool‑name #7252) | 5 PRs merged (7254‑7251) | No |
| **Grok Build** | – (no activity) | – | – |

\*Only the issues/PRs explicitly highlighted in each daily digest are counted; the underlying repositories contain many additional tickets, but the tables capture **the visible community momentum for the last 24 h**.

---  

### 3. Shared Feature Directions  

| Direction | Tools that flagged it | Typical request (example) |
|-----------|-----------------------|----------------------------|
| **Privacy & security controls** | Claude Code, OpenAI Codex, Copilot CLI, Qwen Code | Make the `User‑Agent` email optional (Claude #107757); granular safety‑filter opt‑out (OpenAI #100212). |
| **Resource / stability management** | Claude Code (process‑spawn leaks), Gemini CLI (kernel‑pool leaks), OpenAI Codex (auto‑resolve timeout), Qwen Code (CI crash on abort), DeepSeek TUI (glob‑pattern explosion) | “Prevent runaway git processes on Windows” (Claude #94478) / “Add configurable timeout for long‑running tool calls” (OpenAI #28969). |
| **Cross‑platform UI/UX consistency** | OpenAI Codex (locale overrides), Copilot CLI (Git Bash support), Gemini CLI (Unicode rendering), OpenCode (focus‑steal bug), DeepSeek TUI (Mintty shortcut) | “Support Git Bash on Windows” (Copilot #508); “Preserve Unicode in session previews” (Gemini #29924). |
| **Session lifecycle & reproducibility** | OpenAI Codex (resume/auto‑resolve), Copilot CLI (create → close → resume), OpenCode (session‑tree/branching), Pi (session‑tree request), Qwen Code (diagnostics per‑invocation) | “Allow users to rollback/branch a conversation” (OpenCode #41363; Pi #41363). |
| **Extensibility / plug‑in ecosystem** | Gemini CLI (skill / sub‑agent discovery), OpenCode (plugin git deps), Pi (extension hooks), DeepSeek TUI (ModelHttpPolicy), Qwen Code (MCP tool persistence) | “Expose a hook for extensions to decide on auto‑retry” (Pi #11932). |
| **Multimodal / media handling** | Pi (media‑by‑reference, video/audio support), Qwen Code (vision tool wiring), DeepSeek TUI (file‑upload policies) | “Send audio/video to Gemini by reference” (Pi #11938). |
| **Scalable tool management** | Gemini CLI (400‑error >128 tools), OpenCode (plugin build failures), DeepSeek TUI (glob‑expansion limits) | “Gracefully cap the number of active tools” (Gemini #24246). |

---  

### 4. Differentiation Analysis  

| Aspect | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-------|-----------|--------------|-----------|------------|----------|----|-----------|--------------|
| **Primary focus** | Privacy‑first code generation & web‑search integration | General‑purpose coding assistant with “Computer Use” automation | **Sub‑agent orchestration** (generalist, browser, file agents) | Session‑centric code completion + enterprise security linking | **Session tree & plugin‑based builds** (branch‑able AI sessions) | Multimodal, model‑catalog, extensible TUI | CI‑centric managed‑agent reliability, telemetry | Minimalist TUI with transport‑policy extensibility |
| **Target user** | Individual developers concerned about data leakage | Broad developer base (incl. enterprise) needing automation | Power users building complex pipelines (multi‑agent) | Enterprise teams needing secure, resumable sessions | Teams that need reproducible AI‑driven CI/CD pipelines | Researchers & power‑users who need video/audio + model metadata | Teams that run heavy CI / need fine‑grained diagnostics | Developers who prefer a lightweight terminal UI |
| **Technical approach** | Mixed Rust/TS; MCP tool calls; web‑search turn; heavy Windows process handling | Rust core + Python bindings; 60‑s auto‑resolve loop; sandboxed “Computer Use” | Rust core; **MCP** with hierarchical agents; JSON schema for tools | Go/TS client; session service with MCP; “create/close/resume” API | Rust core; **session‑tree** persisted as a DAG; plugin system via NPM && Git | Rust TUI + OpenRouter catalog; incremental “thinking‑level” selector | Rust server + extensive CI test matrix; diagnostics per‑invocation; telemetry | Rust TUI; pluggable `ModelHttpPolicy`; custom provider adapters |
| **Unique selling points** | Explicit privacy audit (email‑leak bug) and built‑in web‑search | Built‑in “Computer Use” for desktop automation | **Dynamic sub‑agent lifecycle** and “maxTurns” config per agent | Tight integration with GitHub Enterprise (MCP, OIDC, trusted‑access) | **Branch‑able AI sessions** + plugin‑driven builds (Git‑deps) | Media‑by‑reference, model‑catalog with service‑tier metadata | Proven CI scalability; real‑time diagnostics & per‑model usage limits | Simple, portable UI with explicit host‑policy control |
| **Current pain points** | Windows resource leaks, privacy breach, safety over‑blocking | 60 s timeout, model‑capacity errors, UI width, sandbox blocks | Hangs, config overrides ignored, tooling limit (128 tools) | Session timeouts, extension start‑up order, enterprise auth | Session‑tree UI glitches, plugin build failures, macOS hardening | Token‑usage inflation after retry, image‑batch stalls, extension crash on send | CI failures (Java lane, MCP abort), missing file‑watcher events, telemetry gaps | Provider‑specific 400 on dot‑in‑tool name, limited issue volume |

---  

### 5. Community Momentum & Maturity  

| Tool | Community Activity (comments / 👍 per day) | Release Cadence | Maturity Indicator |
|------|--------------------------------------------|------------------|--------------------|
| **Claude Code** | 110 comments on privacy issue, > 700 👍 (single issue) → high engagement | No release in 24 h; releases are **infrequent** (last release > 1 mo) | Mature core, but **reactive** to serious bugs. |
| **OpenAI Codex** | 99 comments on timeout flag, 221 👍 → strong, **developer‑driven** dialogue | No daily releases; updates happen via internal roll‑outs | Very **active** community, stable base, **rapid PR turnover** (10 merged today). |
| **Gemini CLI** | 13 comments on sub‑agent recovery, 8 👍 on hangs → focused, high‑severity discussions | No releases; PR pipeline busy (10 merged) | **Rapid iteration** on core agent architecture; community still consolidating. |
| **Copilot CLI** | Low comment volume (max 7 👍) but **10 issues opened** – early‑stage signals | No releases; PR stagnation (none merged) | **Low momentum**; community mainly reporting bugs, awaiting fixes. |
| **OpenCode** | Issues 13 comments (session‑tree) + many PR merges (10) → **high‑velocity** | No releases; PRs merged daily | **Fast‑moving** open‑source project, strong contributor base. |
| **Pi** | 8 comments on token‑inflation, 2 👍 – moderate but **high‑impact** bugs | No new tag; many PRs (10) | **Mature** with a niche user base; focus on polishing. |
| **Qwen Code** | 11 comments on CI failure, 2 👍 – a **tight CI‑focused** community | One back‑filled SDK release (v0.1.29) | **Enterprise‑grade** with disciplined release engineering. |
| **DeepSeek TUI** | Single new issue, 0 👍 – **low activity** today | No release; 5 PRs merged | **Early‑stage**; community still small but actively fixing core bugs. |
| **Grok Build** | No activity → **dormant** (likely low adoption). |

**Takeaway:**  The most **vibrant ecosystems** today are **OpenAI Codex**, **Gemini CLI**, **OpenCode**, and **Claude Code** (driven by a single high‑visibility bug).  Tools with **steady PR flow** (Gemini, OpenCode, Qwen) are iterating faster than those with **release lag** (Claude, Copilot).

---  

### 6. Trend Signals (what the community is telling us)

1. **Privacy‑first expectations are no longer optional.**  Claude #107757 and multiple safety‑filter complaints (OpenAI #100212, Codex #100212) show developers demand **explicit opt‑in consent** and **removable identifying headers**.  

2. **Deterministic session control is a blocker for production pipelines.**  Requests for disabling the 60‑s auto‑resolve (Codex #28969), robust `create/close/resume` semantics (Copilot #5386), and a **branch‑able session tree** (OpenCode #41363, Pi #41363) indicate that AI‑assisted CI/CD must be **reproducible** and **recoverable**.  

3. **Resource exhaustion on Windows remains a pain point.**  Claude #94478, Gemini #21409, and OpenAI #51524 all report runaway process spawning or kernel‑pool leaks, suggesting tooling vendors need **native process pools** and **better OS‑level throttling**.  

4. **Multimodal media handling is moving from “nice‑to‑have” to “must‑have”.**  Pi’s “media‑by‑reference” PRs and Qwen’s vision integration reflect a broader **shift to video/audio+LLM** pipelines, especially for code review (e.g., screen recordings).  

5. **Fine‑grained extensibility & policy control are gaining traction.**  DeepSeek’s `ModelHttpPolicy`, Gemini’s `settings.json` per‑agent overrides, and OpenCode’s `cache.ttl` per‑model show developers want **programmable network and runtime policies** to satisfy corporate firewalls and cost‑governance.  

6. **Scalable tool‑set management is emerging as a limiting factor.**  Gemini’s 400‑error >128 tools and OpenCode’s plugin‑build failures highlight the need for **automatic tool capping, lazy loading, and safe registration** mechanisms as AI agents scale to monorepos and micro‑service ecosystems.  

7. **Safety‑filter granularity** – users are asking for **domain‑specific safety whitelists** (Naver block false‑positive, healthcare docs) and **danger‑level flags** (Gemini #22672).  This points to a market for **configurable guardrails** rather than a one‑size‑fits‑all blocklist.  

---  

**Implications for Decision‑Makers**  

- **If privacy and compliance are top priorities**, Claude Code (once the header leak is fixed) and Copilot CLI (trusted‑access linking) are the most transparent, but they currently lack rapid release cadence.  
- **For enterprises that need deterministic CI/CD**, OpenCode’s session‑tree, Qwen’s diagnostics, and OpenAI’s forthcoming timeout flag provide the most robust foundations.  
- **Teams building complex agent pipelines** (e.g., autonomous bots, tool‑chaining) will find the **sub‑agent architecture of Gemini CLI** and the **branch‑aware session model of OpenCode/Pi** most aligned with their roadmap.  
- **When multimodal or media‑heavy workflows are required**, Pi’s reference‑by‑URL support and Qwen’s vision tooling are the clear early adopters.  

Overall, the AI‑CLI ecosystem is **converging on three pillars**—privacy/security, deterministic session management, and extensible multimodal tooling—while each vendor differentiates through its agent model, UI depth, and release velocity.  Monitoring the **issue‑to‑PR conversion rate** (a proxy for engineering responsiveness) will be a reliable early indicator of which tool will stay ahead of the emerging developer demands.  

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills – Community Highlights (as of 2026‑11‑09)**  

---

## 1. Top Skills Ranking  
| Rank | PR | Skill (brief function) | Discussion highlights | Status |
|------|----|------------------------|-----------------------|--------|
| **1** | **#1742** – *fix(mcp-builder)* | Updates the MCP 2+ builder to import the renamed `streamable_http_client` module and expose custom HTTP headers via the new `create_mcp_http_client` API. | Contributors debated backward‑compatibility with older MCP versions, requested a deprecation notice, and suggested adding a test matrix for Windows/macOS CI. | **Open** |
| **2** | **#1298** – *fix(skill‑creator)* | Isolates trigger‑evaluation scripts, adds Windows‑specific subprocess handling, and improves resilience to runtime failures. | Heavy discussion on the impact of false‑negative trigger rates; several users posted minimal reproducible cases that drove the eventual fix. | **Open** |
| **3** | **#1245** – *Add notion‑spec‑to‑implementation* | Converts product/technical specifications stored in Notion into concrete, task‑oriented implementation plans for Claude Code. | Enthusiastic feedback from product teams; requests for deeper integration with the Notion API (e.g., pagination, rich‑text parsing) and for example templates. | **Open** |
| **4** | **#1980** – *webapp‑testing: avoid shell=True* | Rewrites `with_server.py` to launch server processes without `shell=True`, closing a CWE‑78 command‑injection surface. | Security‑focused reviewers highlighted the need for a sanitisation helper library; a few PRs were opened to add a “safe‑exec” wrapper. | **Open** |
| **5** | **#1792** – *fix(docx)* | Makes `accept_changes.py` treat LibreOffice time‑outs as errors and validates that the resulting DOCX contains no revision markup. | Users shared edge‑cases where large documents caused silent failures; the fix added a validation step that many praised. | **Open** |
| **6** | **#1771** – *proofcore‑contract‑auditor* | Static analysis for Solidity & Rust smart contracts, then anchors a cryptographic audit proof on the TON blockchain using ProofCore’s zero‑storage Merkle protocol. | Sparked a mini‑debate on on‑chain audit provenance vs. off‑chain reporting; several contributors offered alternative proof‑systems. | **Open** |
| **7** | **#1734** – *Detect orphaned docx comments* | Scans DOCX files for comment objects that are no longer attached to any document element, reporting them as “orphaned”. | Minor but active discussion about extending the check to other Microsoft Office formats (pptx, xlsx). | **Open** |
| **8** | **#1703** – *Add md2video‑audio* | One‑click conversion of Markdown into MP4 video with slide‑style rendering (Marp) and AI‑generated human‑like voice‑over. | Users posted sample videos and asked for multilingual TTS support; a small group began drafting a “batch‑render” wrapper. | **Open** |

*All links point to the official GitHub PR pages (e.g. `https://github.com/anthropics/skills/pull/1742`).*  

---

## 2. Community Demand Trends (derived from top‑commented Issues)

| Trend | Representative Issue(s) | What the community is asking for |
|-------|------------------------|---------------------------------|
| **Trust & security** | #492 – *Namespace impersonation risk* | Guard against community‑authored skills published under the `anthropic/` namespace; enforce provenance or signing. |
| **Organizational sharing** | #228 – *Org‑wide skill library* | Built‑in mechanisms for a team to publish, discover, and install shared skills without manual file exchange. |
| **Tooling reliability / evaluation** | #556, #1352 – *run_eval trigger‑rate bugs* | Fix flaky or zero‑trigger evaluations (especially with parallel workers) and improve diagnostics for skill activation. |
| **Resource consumption** | #1487 – *claude‑api token explosion* | Reduce default token injection sizes; add pagination or streaming options for large‑payload skills. |
| **New skill domains** | #1329 – *compact‑memory*; #412 – *agent‑governance*; #1385 – *reasoning quality‑gate pipeline* | Introduce memory‑compression helpers, governance / policy‑enforcement tools, and multi‑stage reasoning pipelines. |
| **Documentation & discoverability** | #189 – *duplicate skills in plugins*; #2108 – *snapshot status clarification* | Clean up overlapping skill sets, improve versioning, and make skill provenance transparent. |
| **User experience stability** | #62 – *disappearing user‑uploaded skills* | Provide robust local‑skill persistence and clearer error messages when files are renamed or moved. |

**Take‑away:** The community is pushing for safer, more collaborative, and higher‑quality skill workflows while expanding the functional scope into governance, memory management, and rich media generation.

---

## 3. High‑Potential Pending Skills (active PRs with visible discussion, not yet merged)

| PR | Skill | Core value proposition | Why it may land soon |
|----|-------|------------------------|----------------------|
| **#1245** – *notion‑spec‑to‑implementation* | Turns Notion spec pages into actionable implementation tasks. | Directly addresses a high‑interest use‑case (product & engineering hand‑off). |
| **#1703** – *md2video‑audio* | Auto‑generates narrated video from Markdown. | Already runs end‑to‑end; only needs minor TTS polishing. |
| **#525** – *pyxel* | Enables retro‑style game development, debugging, and frame inspection within Claude Code. | Small, self‑contained, and has a clear demo; fits the “creative‑coding” niche. |
| **#1615** – *scnet‑hpc* | Provides SSH + Slurm workflow for SCNet HPC clusters. | Growing demand from research groups; PR includes working examples. |
| **#514** – *document‑typography* | Detects orphan‑words, widows, and numbering mis‑alignments in generated docs. | Directly improves document quality; low complexity, high impact. |
| **#1734** – *orphaned docx comments* | Cleans stray comment objects that confuse downstream parsers. | Incremental improvement to an existing “docx” skill family. |

These PRs have attracted multiple reviewer comments, tests, and community suggestions, indicating they are moving through the merge pipeline.

---

## 4. Skills Ecosystem Insight  

**The community’s strongest, consolidated demand is for safe, shareable, and production‑grade automation – especially tools that reliably integrate external services (e.g., Notion, HPC clusters, blockchain audit) while preserving security and evaluation fidelity.**  

---  

*All references are to public GitHub resources in the `anthropics/skills` repository.*

---

**Claude Code – Community Digest (2026‑11‑09)**  
*Your daily snapshot of the most active conversations on the Claude Code repository.*

---

### 1. Today’s Highlights
- The most‑vocal discussion centers on a **privacy breach** where Claude Code leaks the user’s email address in the `User‑Agent` header during web searches (Issue #107757, 110 comments, 748 👍).  
- A wave of performance‑related bugs – from runaway **git‑process spawning** on Windows (Issue #94478) to kernel‑pool leaks tied to file‑system junctions (Issue #96870) – is dominating the bug triage queue.  

---

### 2. Releases
*No new releases were published in the last 24 h.*  

---

### 3. Hot Issues (selected from the top‑commented/most‑reacted tickets)

| # | Title & Link | Why It Matters | Community Reaction |
|---|--------------|----------------|--------------------|
| **107757** | **Privacy violation in `User‑Agent` header**  <br> <https://github.com/anthropics/claude-code/issues/107757> | Exposes users’ email addresses to arbitrary third‑parties during web‑search turns, breaking a core privacy promise of Claude Code. | 110 comments, **748 👍** – the highest‑engagement issue of the week. |
| **94478** | **Desktop app spawns ~17 git processes per second (Windows)**  <br> <https://github.com/anthropics/claude-code/issues/94478> | Leads to massive CPU/memory pressure and a ~6 GB/day kernel‑pool leak, destabilising Windows workstations. | 15 comments, 1 👍 – heavy technical discussion on mitigation. |
| **96870** | **MSIX Desktop kernel‑nonpaged‑pool leak via AppData junctions**  <br> <https://github.com/anthropics/claude-code/issues/96870> | Similar to #94478, this low‑level leak can exhaust system resources on Windows, affecting all users of the MSIX distribution. | 12 comments, 4 👍. |
| **95539** | **False‑positive safety block on `naver.com` domains**  <br> <https://github.com/anthropics/claude-code/issues/95539> | Naver is South Korea’s dominant portal; blocking it hampers a large user base and reveals gaps in the safety‑filter rule set. | 10 comments, **11 👍**. |
| **100212** | **Safety classifier withholds responses during legitimate healthcare documentation**  <br> <https://github.com/anthropics/claude-code/issues/100212> | Over‑zealous safety can impede real‑world professional workflows, raising concerns for regulated industries. | 11 comments, 1 👍. |
| **91248** | **Chat pane fixed narrow width leaves excess whitespace**  <br> <https://github.com/anthropics/claude-code/issues/91248> | UI layout bug reduces usable screen real‑estate on wide monitors, affecting productivity. | 3 comments, **5 👍**. |
| **108265** | **Model goes off‑topic and “forward‑thinks” unrequested work**  <br> <https://github.com/anthropics/claude-code/issues/108265> | Breaks deterministic task‑order workflows that many developers rely on for multi‑step code generation. | 2 comments, 0 👍 (but flagged as high‑severity). |
| **108516** | **`mcp__ccd_turn__update_plan` sometimes stalls for ~10 min**  <br> <https://github.com/anthropics/claude-code/issues/108516> | Stalling tool calls freeze the entire coding session, causing lost work and user frustration. | No comments yet, but opened today – rapidly gaining attention. |
| **108494** | **Greek lowercase ω rendered as uppercase Ω in the Code tab**  <br> <https://github.com/anthropics/claude-code/issues/108494> | A subtle localisation bug that corrupts code/comments in Greek‑language sessions. | 2 comments, 0 👍. |
| **108513** | **Nested sub‑agent background Bash leads to premature parent finish**  <br> <https://github.com/anthropics/claude-code/issues/108513> | Breaks complex agentic pipelines, a core use‑case for advanced developers. | No comments yet, but high impact for power‑users. |

---

### 4. Key PR Progress
*No pull requests were updated in the last 24 h.*  

---

### 5. Feature Request Trends
Analyzing all open issues (bugs, enhancements, and “has‑repro” tags) reveals three dominant directions developers are asking for:

1. **Privacy & Security Controls** – Requests to **remove or make optional the email‑leaking `User‑Agent` header**, clearer consent flows, and tighter sandbox permissions (e.g., #107757, #103567).  
2. **Stability & Performance Improvements** – Repeated reports of **process‑spawning explosions, kernel‑pool leaks, and tool‑call hangs** indicate a strong demand for more robust resource management on Windows and Linux (e.g., #94478, #96870, #108516).  
3. **User‑Interface & Localization Enhancements** – Developers want **adaptive UI layouts (chat pane width, notification handling)**, **language‑specific UI strings** (slash‑command menu, #102820), and **accurate Unicode rendering** (Greek omega, #108494).  

---

### 6. Developer Pain Points
- **Resource Exhaustion on Windows** – Uncontrolled git‑process spawning and kernel‑pool leaks are causing crashes and massive memory use, directly impacting daily workflows.  
- **Unexpected Safety Blocks** – Over‑aggressive safety classifiers are halting legitimate tasks (healthcare docs, Korean portals). Users request granular safety rules or opt‑out mechanisms.  
- **Privacy Leaks** – The `User‑Agent` email exposure is a critical breach of trust; developers are demanding a privacy‑first default.  
- **Tool & Model Inconsistencies** – Changes to MCP tool schemas don’t propagate (`ToolSearch` issue #83756), and newer Opus models exhibit off‑topic “forward‑thinking,” breaking deterministic pipelines.  
- **UI Friction** – Fixed‑width chat panes, missing notifications while the app is in focus, and incorrect Unicode rendering interrupt coding flow, especially for non‑English users.  

---

*Stay tuned for tomorrow’s update – we’ll track whether these high‑priority bugs move toward resolution and monitor any new release notes.*  

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex – Community Digest – 2026‑11‑09**  
*Compiled from the Codex GitHub activity (issues, PRs, releases).*

---

## 1. Today’s Highlights
- No new Codex releases landed in the last 24 h, but the repository saw a surge of discussion around **model‑capacity errors** and **cross‑platform stability** of the Desktop/CLI tools.  
- The most‑commented issue (#28969) opened a debate on a new CLI flag to **disable the 60‑second auto‑resolve timeout**, indicating strong community demand for finer control of the tool‑execution loop.  

---

## 2. Releases
*No new version was published in the past day.*

---

## 3. Hot Issues (top 10 by community activity)

| # | Title / Tag | Why It Matters | Community Reaction |
|---|--------------|----------------|---------------------|
| **28969** | *[bug, CLI, config, plan]* “Add setting to disable the auto‑resolve in 60 seconds for questions” | Directly impacts the reliability of long‑running tool calls; many users hit the timeout when debugging complex workflows. | 99 comments, 221 👍 – heated discussion on default behaviour vs. opt‑out. |
| **51524** | *[bug, windows‑os, app, computer‑use]* “Computer Use stops at `get_window_state` – cannot determine browser URL” | Breaks the core “Computer Use” feature on Chrome/Edge, halting automation scripts on Windows. | 78 comments, 9 👍 – Windows‑heavy users pushing for a fix. |
| **48774** | *[bug, windows‑os, auth, remote]* “Codex Remote pairing fails on Android” | Blocks the increasingly popular remote‑pairing workflow for mobile developers. | 59 comments, 28 👍 – many Android devs reporting the same failure. |
| **54989** | *[bug, windows‑os, app, browser]* “Browser reports disabled in Work settings while toggle is enabled” | Shows a UI‑state sync bug that forces a full app restart, degrading UX. | 31 comments, 1 👍 – repeated repro steps posted. |
| **18396** | *[enhancement, TUI]* “Add way to hide tool calls/output in TUI” | Users want a cleaner terminal UI for long sessions; ties into broader UI‑customisation demand. | 23 comments, 59 👍 – strong support for a “quiet mode”. |
| **58397** | *[bug, windows‑os, app, session]* “Projects are missing after latest update” | Project list loss is a show‑stopper for workflow continuity on Windows. | 22 comments, 3 👍 – many workarounds posted. |
| **19239** | *[bug, app]* “Desktop UI does not respect `localeOverride=zh‑CN`” | Internationalisation bug affecting non‑English users; highlights localisation gaps. | 21 comments, 0 👍 – issue opened by Chinese community. |
| **59855** | *[bug, windows‑os, app, session]* “AbsolutePathBuf error when resuming cloud‑managed chats” | Prevents seamless cloud‑chat hand‑off, a key value‑prop of the product. | 15 comments, 0 👍 – developers sharing stack traces. |
| **49439** | *[bug, sandbox, app]* “`/approve` unavailable after an Auto‑review denial” | Sandbox permission flow is broken; impacts code‑review automation pipelines. | 12 comments, 0 👍 – reproducible on macOS. |
| **36776** | *[bug, app, computer‑use]* “Computer Use locks an unlocked Mac after display sleep” | Unexpected lock‑outs undermine trust in the automation layer on macOS. | 9 comments, 0 👍 – macOS power‑management inquiry. |

*All issues are open and can be followed here: https://github.com/openai/codex/issues*  

---

## 4. Key PR Progress (10 notable PRs merged/closed on 2026‑11‑09)

| # | Title | Core Change | Impact |
|---|-------|-------------|--------|
| **60342** | “Treat goal objectives as untrusted context” | Goal objectives now passed via a dedicated `goal_objective` field, not embedded in continuation text. | Reduces prompt‑injection risk and improves model clarity. |
| **60335** | “Avoid duplicate assistant messages when resuming Cloud threads” | Tracks already‑rendered assistant items to suppress repeats. | Cleaner TUI replay of Cloud histories. |
| **60327** | “Suppress stale cloud stream disconnects after reopening a thread” | Introduces `AppServerEvent::ThreadDisconnect` handling to drop obsolete errors. | Prevents confusing “disconnected” flashes on thread reload. |
| **60320** | “Include older item‑less Cloud failures in full transcripts” | Adds a `FullTranscript` hydration scope that fetches missing error events. | Guarantees a complete audit log for debugging Cloud failures. |
| **60319** | “Improve side‑chat discovery and navigation in the TUI” | Shows preview snippets for side‑chat titles and caches chats during discovery. | Faster navigation, better context awareness. |
| **60309** | “Defer executor readiness when pre‑warming a selected project” | Sets `deferred_environment=true` for project‑specific pre‑warm requests. | Avoids premature executor spin‑up, saves resources. |
| **60286** | “Search task history from the command center” | Enables case‑insensitive, full‑history search of task names. | Powers developers to locate past tasks without manual pagination. |
| **60280** | “Fix MCP startup tracking when attaching to shared app servers” | Refines startup notification tracking to avoid UI hangs. | Improves reliability when multiple clients share an MCP server. |
| **60271** | “Keep the agents overview open when there is no chat to return to” | Adjusts ESC‑back behaviour; overview stays visible on empty state. | Smoother UX when switching between agents. |
| **60270** | “Warn when a CLI model is absent from the ChatGPT model list” | Emits a startup warning if the overridden CLI model isn’t listed on the account. | Helps users catch mis‑configurations early, avoiding “capacity” errors. |

*Full PR list: https://github.com/openai/codex/pulls*  

---

## 5. Feature Request Trends

1. **UI/UX Customisation** – Repeated calls for hiding tool‑call output (TUI), language localisation fixes, and better side‑chat navigation indicate a desire for a cleaner, more configurable developer interface.  
2. **Rate‑limit & Capacity Transparency** – Numerous reports of “Selected model is at capacity” across accounts and platforms suggest users want proactive warnings, fallback models, or quota‑visibility dashboards.  
3. **Cross‑Platform Stability** – Bugs on Windows (browser state, remote pairing, sandbox policy blocks) and macOS (ScreenCaptureKit leakage, unexpected lock) dominate the issue list, signalling a demand for parity and robust error handling across OSes.  
4. **Granular Control of Automation Timeouts** – The high‑profile request to disable the 60‑second auto‑resolve timeout reflects a broader need for configurable tool‑execution policies.  

---

## 6. Developer Pain Points (recurring frustrations)

| Pain Point | Typical Symptom | Frequency |
|-----------|----------------|-----------|
| **Model‑capacity errors** | “Selected model is at capacity” for any model, even on fresh accounts. | 10+ open issues in the last week. |
| **Windows remote‑pairing & sandbox blocks** | Pairing fails on Android/Windows; “Blocked by Policy” despite full access. | 5+ high‑comment bugs. |
| **Locale / UI language not applied** | UI stays English despite `localeOverride=zh‑CN` or other flags. | 1‑2 recurring bugs. |
| **Resource leakage after Computer Use** | ScreenCaptureKit stream stays active, high GPU/CPU usage. | Reported in #35659. |
| **Auto‑resolve timeout** | Long‑running tool calls are cut off after 60 s, interrupting debugging. | Highlighted in #28969 (most voted). |
| **Project/session persistence** | Missing projects after updates; chat resume errors (`AbsolutePathBuf`). | Seen in #58397 and #59855. |
| **Inconsistent model lists** | CLI model override not present in ChatGPT model list, leading to silent failures. | Fixed in PR #60270, but still a pain point. |

---

**Stay tuned** for tomorrow’s digest where we’ll track the progress on the “model‑capacity” saga and the upcoming CLI timeout flag.  

*All links point to the official OpenAI Codex GitHub repository.*  

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI – Community Digest – 2026‑11‑09**  

---

### 1. Today’s Highlights  
- A wave of high‑priority bugs around **sub‑agent recovery, hangs, and config overrides** dominated the issue tracker, signalling growing pains as the multi‑agent architecture scales.  
- The PR pipeline is busy polishing core usability (process‑kill handling, model discovery, Windows‑path fixes) and solidifying the new **agents‑in‑`settings.json`** feature introduced earlier this year.  

---

### 2. Releases  
*No new releases were published in the last 24 h.*

---

### 3. Hot Issues  

| # | Title (priority) | Why it matters | Community reaction |
|---|-----------------|----------------|---------------------|
| **22323** – *Subagent recovery after MAX_TURNS is reported as GOAL success* (P1) | Sub‑agents can falsely report a successful goal after hitting `maxTurns`, masking failures in code‑base investigations. | 13 comments, 2 👍 – heavy discussion on reproducing the bug and proposing a clearer termination status. |
| **21409** – *Generalist agent hangs* (P1) | The default “generalist” agent can stall indefinitely on simple operations (e.g., folder creation), killing productivity. | 8 comments, 8 👍 – many users confirming the hang; a quick workaround (“disable sub‑agents”) was shared. |
| **21968** – *Gemini does not use skills and sub‑agents enough* (P2) | Highlights a core UX issue: the model ignores registered skills unless explicitly prompted, reducing the value of custom agents. | 7 comments, 0 👍 – community is asking for smarter auto‑selection of skills. |
| **22267** – *Browser Agent ignores `settings.json` overrides (e.g., maxTurns)* (P2) | Configuration drift defeats the purpose of per‑project tuning, especially for long‑running browser sessions. | 5 comments, 0 👍 – calls for a regression test. |
| **21983** – *Browser sub‑agent fails on Wayland* (P1) | Limits Gemini’s usability on popular Linux desktop environments; many developers run headless Wayland containers. | 4 comments, 1 👍 – early reports from Linux users, request for platform‑specific fallback. |
| **24246** – *Gemini CLI encounters 400 error with > 128 tools* (P2) | Scaling to large toolsets (e.g., monorepos with many plugins) crashes the service, a blocker for enterprise adoption. | 3 comments, 0 👍 – users suggest automatic tool‑capping. |
| **23571** – *Model frequently creates tmp scripts in random spots* (P2) | Leaves noisy workspaces and complicates clean‑commit pipelines. | 3 comments, 0 👍 – discussion around “sandboxed” script generation. |
| **22186** – *`get‑shit‑done` output hook crashes* (P1) | The flagship “quick‑task” flow crashes at the final summary, breaking CI‑style automation. | 3 comments, 0 👍 – reproducible on Windows; a temporary fix is being tested. |
| **22672** – *Agent should discourage destructive behavior* (P2) | Prevents accidental `git reset --hard` or destructive DB commands, a safety concern for production‑grade usage. | 3 comments, 1 👍 – community proposes a “danger‑level” policy flag. |
| **21000** – *Experiment with native file tools for task tracker* (P3) | Early exploration of AST‑aware tools that could reduce token usage and turn count for file‑system tasks. | 4 comments, 0 👍 – interest from the “code‑investigator” team. |

*All links point to the GitHub issue tracker (e.g., `https://github.com/google-gemini/gemini-cli/issues/22323`).*  

---

### 4. Key PR Progress  

| # | PR (size / area) | Core change | Impact |
|---|------------------|------------|--------|
| **30204** – *kill child processes, record cancelled tools, preserve signal exit code* (L / non‑interactive) | Cleans up background shells on SIGTERM/SIGINT and records aborted tools. | Prevents zombie processes in CI jobs; improves reliability of headless runs. |
| **16433** – *Add support for agents in `settings.json`* (L / agent) | Enables per‑agent model and run config (e.g., `maxTurns`, temperature) via JSON. | Foundation for many of the configuration‑override bugs reported today. |
| **16541** – *Don’t throw errors for GeminiEventType Retry/InvalidStream* (S / core) | Silences spurious user‑visible errors that were flooding logs. | Reduces noise for end‑users and lowers false‑positive tickets. |
| **29766** – *Round before selecting units in `formatDuration`* (S / core) | Fixes off‑by‑one display of durations near thresholds. | Improves readability of CLI timing output. |
| **29828** – *Ensure all model turns with function calls receive thought signatures* (M / core) | Stops 400 Bad Request errors caused by missing `thought_signature` in multi‑turn tool calls. | Critical for robust function‑calling workflows (e.g., code‑investigator). |
| **29880** – *Add `models` command & `--list-models` flag* (L / non‑interactive) | Provides programmatic model discovery (JSON, table output). | Enables scripts to auto‑select compatible models; great for CI integration. |
| **29924** – *Preserve Unicode in session previews* (S / core) | Stops Unicode stripping that produced empty or misleading session descriptions. | Improves UX for international teams. |
| **29946** – *Isolate remote conversations by parent session and endpoint* (M / agent) | Prevents identifier collisions when invoking remote agents from the same process. | Enhances stability of distributed sub‑agent calls. |
| **29940** – *Run YAML lint without Unix pipelines* (M / platform) | Rewrites lint step to be Windows‑friendly, removing reliance on `grep`. | Broadens CI compatibility on Windows runners. |
| **29931** – *Expand Windows home‑relative paths* (M / core) | Resolves `~\path` correctly on Windows platforms. | Fixes broken policy and extension look‑ups for many Windows developers. |

*All PR links follow the pattern `https://github.com/google-gemini/gemini-cli/pull/<num>`.*

---

### 5. Feature Request Trends  

1. **AST‑aware tooling** – Multiple EPICs (e.g., #22745, #22746, #22747) explore AST‑based file reads, searches, and mapping to cut turn counts and token waste.  
2. **Sub‑agent visibility & control** – Requests for sharing sub‑agent trajectories (`/chat share` – #22598), backgrounding local agents (Ctrl+B – #22741), and richer bug‑reports that include sub‑agent context (#21763).  
3. **Safety & policy enforcement** – Features to automatically discourage destructive commands (#22672) and to make the CLI self‑aware of its own flags/hotkeys (#21432).  
4. **Scalable tool management** – Concerns about hitting tool limits (400‑tool error – #24246) and suggestions for automatic tool‑capping or smarter selection.  

---

### 6. Developer Pain Points  

| Pain point | Evidence from recent activity |
|------------|-------------------------------|
| **Unexpected hangs / deadlocks** | Generalist agent hangs (#21409) and browser agent freeze on Wayland (#21983). |
| **Configuration overrides ignored** | Browser agent ignoring `settings.json` (#22267) and broader desire for per‑agent JSON config (#16433). |
| **Tool‑limit crashes** | 400‑error with >128 tools (#24246) and missing thought signatures in multi‑turn calls (#29828). |
| **Noise from generated scripts** | Random temporary script locations (#23571) and credential exposure bugs (now fixed: #17311, #18840). |
| **Cross‑platform path & Unicode handling** | Windows path expansion (#29931), YAML lint on Windows (#29940), Unicode loss in previews (#29924). |
| **Destructive command safety** | Calls to `git reset --hard`, `--force` without warnings (#22672). |
| **Skill / sub‑agent under‑utilization** | Model rarely picks registered skills automatically (#21968). |

Addressing these recurring frustrations—especially around reliability, configurability, and safe automation—will be key to keeping Gemini CLI attractive for both individual developers and larger enterprise teams.  

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI – Community Digest**  
*Date: 2026‑11‑09*  

---  

### 1. Today’s Highlights  
- The repo saw **no new releases or pull‑requests** in the past 24 h, but the issue tracker remains very active, with ten new or updated tickets.  
- The most discussed topics are **session reliability (timeouts, resume bugs)**, **platform‑specific support (Git Bash, ARM64 Linux, OSC‑7501 terminals)**, and **model‑access restrictions for security‑sensitive workloads**.  

---  

### 2. Releases  
*No new versions were published in the last 24 h.*  

---  

### 3. Hot Issues  

| # | Title & Link | Why It Matters | Community Reaction |
|---|--------------|----------------|--------------------|
| **508** | [Support Git Bash](https://github.com/github/copilot-cli/issues/508) | Windows users want the CLI to run under Git Bash instead of PowerShell, expanding the tool’s accessibility for developers who already use a Unix‑style shell. | 7 👍, 4 comments – solid demand, clear use‑case examples. |
| **5219** | [Session wedged: task sub‑agent model fallback error](https://github.com/github/copilot-cli/issues/5219) | Long‑running interactive sessions can dead‑lock when a sub‑agent falls back to a 128 k context, causing “prompt budget” failures. Critical for large‑scale coding or analysis workflows. | 0 👍, 4 comments – technical deep‑dive, low visibility but high impact for power users. |
| **4322** | [Allow linkage to “Trusted Access for Cyber” program](https://github.com/github/copilot-cli/issues/4322) | Security‑focused teams are blocked by the CAPI 422 error when using Claude Opus 5. Linking to the Trusted Access program would unlock Copilot for security reviews. | 5 👍, 3 comments – strong support from security engineers. |
| **5100** | [Session event delivery permanently fails after 120 s host‑ack timeout](https://github.com/github/copilot-cli/issues/5100) | A timeout in the session host makes the whole interactive session unusable after the first delay, breaking the core “conversation” model. | 0 👍, 3 comments – growing frustration among long‑session users. |
| **4977** *(Closed)* | [Bundled ripgrep aborts on 16 KB‑page ARM64 kernels (Asahi Linux)](https://github.com/github/copilot-cli/issues/4977) | Compatibility issue for developers on Asahi Linux (Apple‑silicon). The bundled `rg` binary crashes due to jemalloc page‑size assumptions. | 1 👍, 3 comments – resolved, but highlights need for broader binary testing. |
| **5320** | [Support OSC 7501 agent‑status reporting for herdr‑app/herdr‑core](https://github.com/github/copilot-cli/issues/5320) | New terminal emulator (Herdr) wants native status‑protocol integration so users can see session health inside the UI. Extends Copilot’s visibility in modern dev‑tools. | 11 👍, 3 comments – highest community enthusiasm. |
| **4378** | [Cloud agent MCP registry policy fetch fails with 401/403 on GHEC data residency](https://github.com/github/copilot-cli/issues/4378) | Enterprise customers with data‑residency constraints lose access to custom MCP servers, limiting extensibility and compliance. | 0 👍, 2 comments – niche but critical for affected enterprises. |
| **5380** | [Extensions don’t start for sessions created with `create_session` until user switches to them](https://github.com/github/copilot-cli/issues/5380) | Breaks the “plug‑and‑play” expectation for extensions, forcing a manual switch before tools become available. | 0 👍, 1 comment – early‑stage bug, may affect extension ecosystem. |
| **5386** | [`create_session` → `close_session` → cannot `resume` after a switch](https://github.com/github/copilot-cli/issues/5386) | Session lifecycle inconsistency prevents developers from reliably pausing and resuming work, undermining productivity. | 0 👍, 0 comments – newly opened, likely to attract attention. |
| **5385** | [New issue (empty placeholder)](https://github.com/github/copilot-cli/issues/5385) | Placeholder with no description; may indicate a mis‑fired automated report or a testing artefact. | 1 👍, 0 comments – minimal impact. |

---  

### 4. Key PR Progress  

*No pull requests were updated or opened in the last 24 h, so there is no PR activity to report today.*  

---  

### 5. Feature Request Trends  

1. **Shell & Platform Flexibility** – Requests for native Git Bash support on Windows and better ARM64/Linux compatibility (e.g., ripgrep on Asahi Linux).  
2. **Session Reliability & Lifecycle** – Multiple bugs around timeouts, event delivery, and the `create_session`/`close_session`/`resume` workflow indicate a strong desire for a more robust session manager.  
3. **Extensibility & Visibility** – Developers want extensions to load automatically and to expose status via terminal protocols (OSC 7501) for richer UI integration.  
4. **Enterprise & Security Access** – Bridging to “Trusted Access for Cyber” and fixing MCP registry authentication for GHEC data residency are recurring themes among security‑focused teams.  

---  

### 6. Developer Pain Points  

| Pain Point | Evidence |
|------------|----------|
| **Unreliable long‑running sessions** – timeouts, event‑delivery failures, and resume bugs. | Issues #5219, #5100, #5380, #5386. |
| **Limited shell/OS support** – inability to run under preferred shells (Git Bash) or on niche hardware (ARM64 with non‑standard page sizes). | Issues #508, #4977. |
| **Extension onboarding friction** – extensions not loading until a manual switch. | Issue #5380. |
| **Enterprise security gating** – model access blocked for security‑sensitive work unless linked to Trusted Access. | Issue #4322, #4378. |
| **Visibility & monitoring** – lack of terminal‑level status reporting for sessions. | Issue #5320. |

---  

*Prepared by the AI Developer‑Tools Analyst*  

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026‑11‑09**  
*(Compiled from the latest activity on github.com/anomalyco/opencode)*  

---

## 1. Today’s Highlights  
- A wave of **high‑impact bug reports** is surfacing around the new 2.2.6 binary (macOS hardening, Windows stub, and TUI run‑directory handling).  
- The community is pushing the **session‑tree / branch‑history** concept forward (Issue #41363) while simultaneously demanding better stability for **plugin‑based builds** and **MCP‑server authentication**.  

---

## 2. Releases  
> **No new releases were published in the last 24 h.**  

---

## 3. Hot Issues *(10 most‑talked‑about, with community reaction)*  

| # | Title / Core Problem | Why It Matters | Community Pulse (comments / 👍) |
|---|----------------------|----------------|----------------------------------|
| **62797** | *Plan mode reminder persists after switching agents* | Breaks fluid workflow when the UI keeps prompting for a mode that is no longer active. | 13 comments – developers are sharing workarounds and asking for a UI flag to suppress the reminder. |
| **41363** | *Session tree: branch history, rollback‑and‑continue, branch navigation* | Enables “git‑style” navigation of conversation state, a long‑standing request for reproducible AI sessions. | 7 comments – high interest; many reference the Pi project as a model. |
| **49704** | *Plugin git deps with build/prepare scripts fail (binary can’t run its own npm‑cli.js)* | Blocks the most common pattern of pulling tooling from source; halts CI pipelines that rely on custom plugins. | 6 comments – reproducible steps posted; a quick “fix‑it” PR is already being prepared. |
| **60311** | *Go usage limits are shared across all models, not per‑model* | Misleading docs cause unexpected throttling, especially for multi‑model workloads. | 5 comments – developers posting logs; a docs‑update PR is open. |
| **57578** | *OpenCode steals foreground focus when testing/running apps* | Disrupts the developer’s editing window and can corrupt input in the terminal. | 4 comments, 1 👍 – a few have filed bug‑reports for OS‑level focus handling. |
| **62699** *(closed, still relevant)* | *macOS hardened‑runtime binary loses Local Network permission* | LAN‑access tools (e.g., Docker, local servers) stop working after the Nov 6 update. | 4 comments – users are awaiting a signed entitlement fix. |
| **62825** | *PowerShell tool allows silent recursive deletion of protected roots* | Highlights a dangerous security surface; may be abused in generated code. | 1 comment – community urging a safety‑guard in the runtime. |
| **62822** | *Document GitHub Actions OIDC token exchange for service accounts* | Needed for CI pipelines that run OpenCode in GitHub Actions; currently undocumented. | 1 comment – request for a concrete example. |
| **62818** | *When the agent is interrupted and the chatbox is empty, clicking Send should resume* | Improves ergonomics for “interruption‑resume” flows (e.g., CTRL‑C). | 1 comment – a quick UI tweak proposal. |
| **62811** | *Add LoongArch64 builds for the OpenCode CLI* | Extends OpenCode to emerging RISC‑V‑compatible hardware (Loongson), widening adoption in the Chinese market. | 1 comment – maintainers asked for build‑pipeline details. |

---

## 4. Key PR Progress *(10 PRs that move the needle)*  

| PR | Title / What It Does | Impact |
|----|----------------------|--------|
| **#62829** | *docs: document `cache.ttl` and per‑model `cache.warming`* | Clarifies new caching controls; reduces confusion for model‑specific warm‑up. |
| **#62810** | *fix(tui): clarify sub‑agent permission launches* | Improves safety UI by explicitly stating when a sub‑agent is auto‑launched. |
| **#62756** | *feat(core): keep MCP tools after a dropped connection and reconnect on demand* | Prevents tools disappearing after an MCP server crash – critical for long‑running sessions. |
| **#62801** | *refactor(core): give SharedCache one shared refresh timer per source* | Cuts duplicate network calls, lowers CPU/memory pressure under heavy caching. |
| **#62828** | *fix(app): link signed‑in free‑limit errors to the workspace Go page* | Streamlines error handling for free‑limit hit, reducing dead‑end “/connect” prompts. |
| **#54394** | *feat(acp): support `_session/steering`* | Enables mid‑turn steering of ACP agents; a long‑awaited capability for dynamic tool use. |
| **#62827** | *fix(core): refresh MCP OAuth tokens under the shared credential lock* | Solves token revocation bugs that caused intermittent auth failures on ElevenLabs and similar services. |
| **#62823** | *fix(core): stop retrying ChatGPT workspace usage limits* | Removes endless retries when a workspace hits its quota, lowering noise in logs. |
| **#62824** | *fix(session‑ui): prevent fatal error when a virtualized timeline row changes type* | Stops UI crashes during undo/redo or message compaction – improves stability of the TUI timeline. |
| **#62817** | *fix(util): hand pacote a real npm so git plugins with a build step install* | Directly resolves the **git‑dependency build failure** reported in Issue #49704. |

---

## 5. Feature Request Trends  

| Trend | Representative Issues / PRs |
|-------|-----------------------------|
| **Session state branching & history** | Issue #41363 (session‑tree), PR #54394 (ACP steering) |
| **Robustness of remote MCP servers** | PRs #62756, #62827, #60041, #60039 (TLS trust, OAuth refresh) |
| **Improved UI ergonomics** | Issues #62818 (resume on empty chat), #57578 (focus stealing), #62814 (run directory control) |
| **Platform & architecture coverage** | Issue #62811 (LoongArch64), ongoing Windows/macOS binary hardening concerns |
| **Safety & security guards** | Issue #62825 (dangerous PowerShell delete), PR #62817 (npm build handling) |
| **Documentation of hidden limits / OIDC flow** | Issues #60311 (Go limits), #62822 (GitHub Actions OIDC), PR #62829 (caching docs) |
| **Project‑level management tools** | Issue #62890 (project‑management feature) – early signal of demand for higher‑level admin UI. |

---

## 6. Developer Pain Points (Recurring Themes)  

1. **Plugin installation failures** – Git‑based dependencies with `build`/`prepare` scripts break (`#49704`). The community is pushing a fix (`#62817`).  
2. **Session‑state navigation** – Lack of branch/rollback capabilities hampers reproducibility (`#41363`).  
3. **Platform‑specific binary regressions** – macOS hardened runtime, Windows stub, and missing LoongArch64 builds cause churn (`#62699`, `#62696`, `#62811`).  
4. **Opaque usage limits** – Go provider limits are shared across models, contradicting docs (`#60311`).  
5. **UI focus & run‑directory quirks** – Background tool execution steals focus (`#57578`) and `opencode run` ignores the caller’s cwd (`#62814`).  
6. **Authentication/credential fragility** – MCP OAuth token revocation and TLS trust for private servers create intermittent auth errors (`#62827`, `#60041`).  
7. **Safety of generated commands** – PowerShell removal of protected paths (`#62825`) underscores the need for a “danger‑command” guard.  

---  

*Stay tuned for the next digest as the OpenCode team addresses these high‑priority items.*  



*All links open in a new tab.*  



---  

**Quick Links**  

- Issues: https://github.com/anomalyco/opencode/issues  
- Pull Requests: https://github.com/anomalyco/opencode/pulls  

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi‑Mono Community Digest – 2026‑11‑09**

---

### 1. Today’s Highlights
- The Pi 0.99.2 release continues to surface edge‑case bugs (e.g., massive token‑usage inflation after a network retry) and a flurry of usability fixes around the TUI, model catalog, and media handling.  
- Three PRs landed that expand OpenRouter integration (service‑tier exposure and media‑by‑reference for Gemini) and improve the Mintty terminal experience, signalling a push toward richer multimodal and IDE‑friendly workflows.  

---

### 2. Releases  
*No new tagged releases were published in the last 24 h.*

---

### 3. Hot Issues (10 most noteworthy)

| # | Title / Summary | Status | Why it matters | Community reaction |
|---|------------------|--------|----------------|--------------------|
| **10287** | `getContextUsage()` wildly over‑estimates token count after a retryable network error (42 k → 330 k tokens). | **Open** (bug) | Breaks quota‑tracking & cost‑estimation; can trigger premature session aborts. | 8 comments, 2 👍 – developers are reproducing the spike and asking for a fix before the upcoming 1.5 release. |
| **10162** | Too many input images cause the agent task to stall despite the auto‑compaction tool. | **Open** (bug) | Limits long‑running agents (e.g., PR triage, QA bots) that need to ingest many screenshots or diagrams. | 8 comments, no 👍 yet – strong demand for smarter image deduplication/compression. |
| **11238** | `sendUserMessage` from an extension fails in `-p` (print) mode – “turn_end could not resolve the persisted assistant entry ID”. | **Open** (bug) | Breaks scripted extensions that drive turns, a core extensibility pathway. | 3 comments, no 👍 – developers are filing work‑arounds and requesting a clear API contract. |
| **11926** | Transient HTTP 429 errors are logged as permanent failures, polluting session history. | **Closed** (bug) | Misleads users about stability; hampers debugging of rate‑limit back‑offs. | 2 comments, no 👍 – closure after fix landed in PR #11857. |
| **11923** | TUI backspace corrupts short paste markers, producing malformed markers like `[paste #1undefined]`. | **Closed** (bug) | Breaks copy‑paste workflows, especially in long‑running REPL sessions. | 2 comments, no 👍 – quick fix merged. |
| **11932** | Proposal: extension hook `auto_retry_decision` to let extensions override retry delay or abort. | **Open** (feature) | Gives agents finer control over back‑off policies—critical for rate‑limited APIs. | 1 comment, no 👍 – early discussion, likely to become a PR soon. |
| **11929** | UI request: let the model selector (`Ctrl+L`) also pick a thinking‑level for the chosen model. | **Closed** (feature) | Streamlines workflow for power users who switch model + level together. | 1 comment, no 👍 – merged as part of UI polish. |
| **11941** | OpenRouter models cannot expose their service‑tier information to clients. | **Closed** (bug) | Prevents UI/CLI from offering “fast”, “priority”, “ultrafast” options—reduces user control over latency vs. cost. | 1 comment, no 👍 – addressed in PR #11940. |
| **11928** | OpenRouter redaction (PII guardrail) fails silently; error message is “redaction_context_lost”. | **Closed** (bug) | Hinders compliance‑heavy workloads; developers cannot reliably detect redaction failures. | 1 comment, no 👍 – fixed in upcoming catalog update. |
| **11927** | Auto‑closing new bug reports as “not planned” is incorrect; bugs should never be marked “planned”. | **Closed** (process) | Impacts triage workflow and contributor experience. | 1 comment, no 👍 – process change enacted. |

*All links point to the GitHub issue page (e.g., https://github.com/earendil-works/pi/issues/10287).*

---

### 4. Key PR Progress (10 notable pull requests)

| # | Title / Summary | Status | Impact |
|---|------------------|--------|--------|
| **11940** | **feat(ai): publish OpenRouter’s service tiers on catalog models** – adds `Model.serviceTiers` metadata so clients can surface speed‑tier pickers. | **Closed** | Enables UI and CLI to let users choose “standard / priority / ultrafast” per model, aligning cost/latency expectations. |
| **11938** | **feat(ai, coding‑agent): send audio/video to Gemini by reference** – now uploads local media, waits for Google processing, and sends a reference instead of inlining bytes. | **Closed** | Opens the door to multimodal reasoning (video/audio) without exploding request payloads. |
| **11934** | **tui: decode mintty LF as Shift+Enter** – fixes the terminal shortcut where LF (LF) should mean “previous occurrence” in search. | **Closed** | Improves ergonomics for Windows‑based developers using Mintty/Cygwin. |
| **11900** | **docs: fix broken RFC link in CONTRIBUTING.md** | **Closed** | Minor but removes a source of confusion for new contributors. |
| **11857** | **feat: prompt‑cache warming in p2** – detects idle periods > 305 s and proactively refreshes the 5‑minute Anthropic cache, saving ~$1.4 k in the last month. | **Closed** | Direct cost reduction for heavy‑use users; demonstrates proactive performance tooling. |
| **11941** *(merged via #11940)* | Service‑tier exposure for OpenRouter models (see above). | **Closed** | Same impact as #11940, listed separately for traceability. |
| **11938** *(media reference)* | See above – also adds a new `FileContent` block type for lazy‑loaded media. | **Closed** | Enables extensions to reference large files without loading them into memory. |
| **11934** *(mintty fix)* | See above – resolves Shift+Enter search navigation bug. | **Closed** | Improves developer ergonomics on Windows. |
| **11927** *(process)* | Stops auto‑closing bugs as “not planned”. | **Closed** | Improves triage hygiene and contributor morale. |
| **11923** *(TUI paste bug)* | Fixes corrupted paste markers on backspace. | **Closed** | Stabilizes copy‑paste workflow in the REPL. |

*All PR links: https://github.com/earendil-works/pi/pull/<PR‑NUMBER>.*

---

### 5. Feature Request Trends
1. **Multimodal Media Support** – Repeated calls for native video/audio attachments (Issue #2809) and the recent PR #11938 show a strong demand for richer media handling, especially for Gemini and other multimodal models.  
2. **Fine‑grained Retry & Error Control** – Issues #10287, #11932, and #11926 highlight the need for better retry logic, back‑off visibility, and the ability for extensions to intervene.  
3. **UI/UX Enhancements in the TUI** – Shortcuts collisions (Issue #3329), search navigation fixes (PR #11934), and clear‑context commands (Issue #11925) indicate a push for a more polished terminal experience.  
4. **Model Catalog Enrichment** – Service‑tier exposure (PR #11940) and desire to select thinking levels per model (Issue #11929) reflect users wanting more metadata to make informed model choices.  
5. **Extension Hook Improvements** – Requests for custom auto‑retry hooks (Issue #11932) and richer UI‑custom events (Issue #11924) show developers wanting deeper extension APIs.

---

### 6. Developer Pain Points
- **Token‑usage Mis‑reporting** – The `getContextUsage()` spike after network errors breaks budgeting and session management, leading to urgency for a fix before the upcoming 1.5 release.  
- **Transient‑Error Handling** – Treating 429 rate‑limit responses as permanent errors clutters logs and forces manual intervention.  
- **Media Payload Bloat** – Inline audio/video uploads inflate request sizes; developers are eager for reference‑by‑URL or lazy‑load mechanisms.  
- **TUI Shortcut Overlap** – Conflicts among extensions and missing Shift+Enter handling in Mintty hinder productivity for terminal‑centric users.  
- **Extension Debugging Friction** – Errors like “turn_end could not resolve the persisted assistant entry ID” when calling `sendUserMessage` from extensions leave developers without clear diagnostics.  

*Overall, the community is converging on a more robust, multimodal, and developer‑friendly Pi experience, with a strong focus on improving reliability, observability, and extensibility.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

## Qwen Code – Community Digest  
**Date:** 2026‑11‑09  

---

### 1. Today’s Highlights  
- The TypeScript SDK was back‑filled to **v0.1.29** (bundling CLI 0.26.9) after a release‑branch push failure.  
- A wave of high‑priority bugs surfaced across CI, telemetry, and the file‑watcher subsystem, prompting several urgent PRs aimed at stabilising managed‑agent sessions and fixing the Java lane compilation breakage.  

---

### 2. Releases  
**sdk‑typescript v0.1.29** – *Backfilled release*  
- Fixes the previous workflow failure that prevented the npm publish step from being recorded (see #16490).  
- Bundles the same CLI source used for the SDK, version **0.26.9**.  

> 📦 Release notes: <https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.29>

---

### 3. Hot Issues (most active / impactful)  

| # | Title & Tag(s) | Why it matters | Community Reaction |
|---|----------------|----------------|--------------------|
| **16672** | *Main CI failed: Managed Agent gate – HostedExtensionsIT.publishedExtensionsSurviveHarnessReplacementCancellationAndCloseOnMySql*  <br>`status/needs-triage`, `type/bug` | Breaks the **Managed Agent** gate for a large test matrix (MySQL 8.4, Java 21). Affects every PR that runs the “fast” Java lane, halting downstream merges. | 11 comments, still open – developers are awaiting a root‑cause. |
| **16714** | *Output speed (TPS) leaves out time‑to‑first‑token*  <br>`priority/P2`, `category/telemetry`, `scope/metrics`, `scope/web-shell`, `scope/cli` | Current `/stats` and Web‑Shell UI under‑report latency, misleading performance tuning. | 2 comments, the issue sparked a quick PR to adjust the metric (see PR #16716). |
| **16708** | *FileChangedWatcher permanently misses a file written into a fresh subdirectory*  <br>`priority/P2`, `category/core`, `scope/file-operations`, `roadmap/hooks-events`, `status/ready-for-human` | Silent loss of file‑change events can corrupt tool‑driven workflows (e.g., code‑gen, lint fixes). | 2 comments, reproducible steps supplied; a fix is in PR #16708 (still open). |
| **16712** | *ci: main's Java lane fails to compile – duplicate case labels in SurfaceAdmissionAcceptanceTest*  <br>`priority/P1`, `category/development`, `scope/ci-cd`, `managed-agent-server` | Stops **all Java‑related CI runs**; no tests execute, causing a bottleneck for Java SDK contributors. | 2 comments, high urgency; a follow‑up PR is being prepared. |
| **15251** | *Fleet Shepherd Dashboard*  <br>`bot‑maintained` | Auto‑generated dashboard for fleet health; not a bug but a visibility tool. | No human comments – purely automated. |
| **(no further issues in the last 24 h)** | — | — | The recent burst of CI‑related bugs explains the unusually high comment volume. |

> All issue links: `https://github.com/QwenLM/qwen-code/issues/<number>`

---

### 4. Key PR Progress  

| # | Summary | Impact | Link |
|---|---------|--------|------|
| **16642** | *feat(managed‑agent): persist Session execution diagnostics* – adds per‑invocation tool outcomes, file‑ops logs, and skill‑instruction snapshots to session diagnostics. | Gives developers deep visibility into managed sessions, easing debugging of complex tool chains. | https://github.com/QwenLM/qwen-code/pull/16642 |
| **16661** | *fix(mcp): repair the MCP connection torn down by an aborted tool call* – restores transport after abort, preventing dead‑connections. | Stabilises long‑running sessions that cancel tool calls, a frequent failure mode. | https://github.com/QwenLM/qwen-code/pull/16661 |
| **16711** | *test(cli): derive the upload cleanup budget from the lane test timeout* – makes CI cleanup respect per‑test timeouts. | Reduces false‑positive timeouts on short‑lived upload tests. | https://github.com/QwenLM/qwen-code/pull/16711 |
| **16646** | *test(serve): pin the worktree ownership lock key derivations together* – guards against drift between restore and delete‑path locks. | Prevents rare but catastrophic workspace corruption in server restores. | https://github.com/QwenLM/qwen-code/pull/16646 |
| **16717** | *test(web‑shell): let a boot retry outlast a network‑change abort storm* – extends retry window to survive prolonged abort bursts. | Improves reliability of the Web‑Shell on flaky network environments. | https://github.com/QwenLM/qwen-code/pull/16717 |
| **16713** | *fix(ci): only delete label‑recovered registrations GitHub reports offline* – tighter cleanup of ephemeral runner registrations. | Avoids accidental deletion of still‑alive runners, reducing CI flakiness. | https://github.com/QwenLM/qwen-code/pull/16713 |
| **16695** | *fix(web‑shell): pause hidden recent sessions polling* – stops background polling when the tab is hidden. | Saves resources and eliminates stale UI updates. | https://github.com/QwenLM/qwen-code/pull/16695 |
| **16602** | *feat(channels): deliver bound‑PR comments to every session that did not post them* – propagates PR comments to all linked live sessions. | Keeps collaborative debugging in sync across parallel sessions. | https://github.com/QwenLM/qwen-code/pull/16602 |
| **16707** | *fix(cli): keep the virtualized transcript visible at a zero host height* – fallback rendering when host reports height 0. | Prevents blank transcript panes in headless or early‑init environments. | https://github.com/QwenLM/qwen-code/pull/16707 |
| **16716** | *fix(stats): include time‑to‑first‑token in output speed* – aligns TPS metric with full request latency. | Direct response to Issue #16714; gives a trustworthy performance indicator. | https://github.com/QwenLM/qwen-code/pull/16716 |

*(All PRs linked above are currently open; the community is actively reviewing them.)*

---

### 5. Feature Request Trends  

1. **Accurate telemetry & latency metrics** – multiple issues/PRs target inclusion of *time‑to‑first‑token* and more granular TPS reporting.  
2. **Robust file‑system watching** – repeated complaints about `FileChangedWatcher` missing events point to a demand for a more reliable chokidar integration or an alternative watcher.  
3. **Managed‑Agent diagnostics & self‑service** – feature PRs (e.g., session diagnostics, archive/MCP self‑service) indicate a strong desire for deeper introspection and easier deployment of managed agents.  
4. **CI stability across languages** – the Java lane compilation failure and MCP connection teardown bug reveal a trend toward stricter CI resilience for multi‑language SDKs.  

---

### 6. Developer Pain Points  

| Pain Point | Evidence |
|------------|----------|
| **CI breakage** – especially the Java lane and MCP abort handling. | Issues #16672, #16712; PRs #16661, #16713. |
| **Missing file‑change events** – silent loss leads to nondeterministic tool behaviour. | Issue #16708; upcoming fix in PR #16708. |
| **Performance metric ambiguity** – TPS numbers currently ignore TTFT, confusing benchmarking. | Issue #16714; PR #16716 addresses it. |
| **Session state synchronization** – comments not propagating across bound sessions. | PR #16602 adds the needed watch. |
| **Resource‑heavy background polling** – hidden tabs continue to poll, wasting compute. | PR #16695 implements pause‑on‑hide. |

---  

*Stay tuned for tomorrow’s digest as the team works through the CI hotlist and rolls out the new telemetry fixes.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek‑TUI Community Digest – 2026‑11‑09**  

---

### 1. Today’s Highlights
* The most visible activity comes from a cascade of bug‑fix PRs targeting the core engine, TUI composer handling, and glob‑pattern matcher.  
* A newly opened issue ( #7252 ) spotlights a breaking change when using the Anthropic provider with a dynamically added `web.run` tool – a problem that could halt macOS users in the middle of a session.

---

### 2. Releases
*No new releases were published in the last 24 h.*

---

### 3. Hot Issues  
| # | Title & Link | Why It Matters | Community Reaction |
|---|--------------|----------------|---------------------|
| **7252** | **Anthropic provider: 400 on `tools.N.custom.name` after `tool_search` adds `web.run` (name contains a dot)** – <https://github.com/codewhale-hq/Codewhale/issues/7252> | The error aborts an entire conversation when the model tries to call a newly discovered web tool whose name includes a period. Since the TUI auto‑retries after a failed send, users are left with an unrecoverable “400” response, effectively freezing the workflow. This hits macOS users (the only platform flagged) and anyone relying on Anthropic for tool‑augmented agents. | The issue is **open** with **0 comments** and **0 👍**s after one day, indicating it has just been reported and is awaiting triage. No duplicate has been found, but related discussion exists in issue #4729 (MCP tool naming). |

*At present, this is the only newly‑reported issue for the day. Earlier high‑priority bugs (e.g., provider timeout messaging, TUI state loss) remain open but are not part of the 24‑h window.*

---

### 4. Key PR Progress  
| # | Title & Link | Core Change | Impact |
|---|--------------|-------------|--------|
| **7254** | *fix(engine): bound nested brace expansion and repeated globstars* – <https://github.com/codewhale-hq/Codewhale/pull/7254> | Corrects the combinatorial explosion in `matches_glob` by properly capping nested brace groups and limiting repeated `**` patterns. | Prevents performance regressions and potential OOM crashes when users employ complex glob patterns in file‑search tools. |
| **7255** | *fix(tui): keep a typed draft when a failed send comes back* – <https://github.com/codewhale-hq/Codewhale/pull/7255> | Preserves the user’s draft text if the asynchronous send fails, rather than discarding it when the composer is cleared. | Improves UX for flaky network conditions; users no longer lose work when a request retries. |
| **7253** | *fix(engine): stop reporting provider timeouts as “after 0ns”* – <https://github.com/codewhale-hq/Codewhale/pull/7253> | Maps `reqwest` timeout errors to a proper elapsed duration instead of `0ns`. | Error messages become actionable, helping developers diagnose real timeout budgets. |
| **7251** | *feat(transport): allow an optional host policy on model HTTP clients* – <https://github.com/codewhale-hq/Codewhale/pull/7251> | Introduces `ModelHttpPolicy` to customise host‑level routing, proxying, and header injection for both primary and vision transports. | Gives embedders fine‑grained control over network policies—useful in corporate firewalls or edge‑deployed setups. |
| **(others)** | Although only four PRs were updated today, the repository has a backlog of ~30 open PRs covering UI theming, tool‑search caching, and cross‑provider auth flows. Several of those are in “review” status and could be merged within the next week. |

---

### 5. Feature Request Trends  
* **Robust Transport Controls** – The newly added `ModelHttpPolicy` (PR #7251) signals growing demand for configurable HTTP layers (proxy support, host whitelists, custom TLS).  
* **Improved Error Visibility** – The timeout‑message fix (PR #7253) and the Anthropic tool‑name bug (issue #7252) highlight a community push for clearer, actionable diagnostics.  
* **Resilient UI Draft Handling** – The TUI composer fix (PR #7255) reflects repeated calls for preserving user input across network failures.  
* **Pattern‑Matching Performance** – The glob‑expansion guard (PR #7254) points to a trend of developers using complex file‑selection tools and needing reliable, performant matching.

---

### 6. Developer Pain Points  
| Pain Point | Evidence |
|------------|----------|
| **Unclear provider errors** – “Request timed out after 0ns” messages mask real latency. | PR #7253 introduced a fix after multiple bug reports. |
| **Draft loss on send failures** – Users lose typed text when a background request fails. | PR #7255 created to address this UX regression. |
| **Tool‑name restrictions** – Dot (`.`) characters in tool names break Anthropic provider. | Issue #7252 opened on 2026‑11‑08, no duplicate found. |
| **Glob‑pattern blow‑up** – Nested brace expansion causing exponential combinatorics. | PR #7254 addresses a performance‑critical bug reported in review #7215. |
| **Network policy rigidity** – Lack of host‑level policies limits deployment in restricted environments. | PR #7251 adds optional `ModelHttpPolicy` to satisfy this need. |

*Overall, the community is prioritizing stability (error handling, draft preservation) and configurability (transport policies, glob matching) to make DeepSeek‑TUI reliable in production‑grade workflows.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*