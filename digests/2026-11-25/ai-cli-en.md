# AI CLI Tools Community Digest 2026-11-25

> Generated: 2026-11-25 08:03 UTC | Tools covered: 10

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

Here is the cross-tool comparison report for the AI CLI developer tools ecosystem.

### 1. Ecosystem Overview
The AI CLI developer tools landscape in late November 2026 is characterized by a transition from rapid feature expansion to stability hardening. While the overall market is fragmented, with tools targeting different LLM providers (Anthropic, OpenAI, Google, GitHub), there is a unified industry shift toward addressing "silent regressions," platform-specific stability (particularly macOS TCC and Windows UI), and modular integration via Model Context Protocols (MCP). The major players—Claude Code, OpenAI Codex, and Gemini CLI—dominate mindshare, but a long tail of specialized tools (DeepSeek-TUI, Kimi, OpenCode) focus on niche TUI experiences, cross-platform compatibility, and specific workflow optimizations.

### 2. Activity Comparison

The following table summarizes the raw activity metrics for each major tool as of 2026-11-25:

| Tool | New Issues (24h) | Open Issues | New PRs (24h) | Release Status |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 0 | 50 | 0 | v2.1.332 Released (MCP Skills, Hook) |
| **OpenAI Codex** | ~10 | Active | ~10 | Alpha series (v0.174.x) |
| **Gemini CLI** | Active | Active | 3 Merged | No new releases |
| **OpenCode** | 12 | Active | 24 Merged | No new releases |
| **DeepSeek-TUI** | Active | Active | 15+ Merged | v0.10.5 Released |
| **Qwen Code** | 9 | Active | Active | v1.0.0-preview.2 Released |
| **Copilot CLI** | Active | Active | 0 | v1.0.116-5 Released |
| **Pi** | 4 | Active | 4 Merged | No new releases |
| **Kimi Code** | 0 | N/A | 0 | No activity |
| **Grok Build** | 0 | N/A | 0 | No activity |

*Note: "Active" indicates issues/PRs were updated or posted, but exact counts vary by tool activity pattern.*

### 3. Shared Feature Directions
Several critical needs are recurring across multiple communities, indicating industry-wide priorities:

*   **MCP Integration & Modularity:** Integration with Model Context Protocols is a primary focus. **Claude Code** introduced `PreSkillShellCommand` hooks and `server:skill` menu integration. **OpenAI Codex** and **Pi** are actively fixing "IPC not available" errors and stream parsing bottlenecks. **OpenCode** is working on provider env value parsing. The common need is reliable, incremental tool loading and account-level capability grants.
*   **Cross-Platform Stability:** "Silent" bugs that vary by OS are a major pain point. **Claude Code** deals with Linux session misclassification and macOS TCC permission loss. **OpenAI Codex** faces Windows border glitches and macOS voicePipeWire regressions. **OpenCode** struggles with WSL clipboard bugs and Windows CRLF handling. **DeepSeek-TUI** and **Qwen Code** focus on path spelling edge cases and TUI session persistence.
*   **Session & State Persistence:** Maintaining state across restarts is a shared challenge. **Claude Code** fights background daemon worker leaks (#87891). **OpenCode** deals with sessions stuck "running" after daemon restart (#66289). **Qwen Code** and **OpenCode** report `/rewind` failures due to path spelling inconsistencies. **Pi** reports `cacheWarming: "idle"` failing silently.
*   **Configuration & Permission Parity:** Users demand control over model settings and authentication. **GitHub Copilot CLI** requests the ability to disable agent checkpoints and expose `contextTier`. **OpenAI Codex** users request rate limit preservation. **OpenCode** sees friction from identical model names across providers causing double-charging.

### 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | OpenCode | DeepSeek-TUI |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Focus** | Desktop integration & MCP skills | Broad AI pair programming & Computer Use | Agent reliability & conversational features | Core TUI/CLI infrastructure & sandboxing | Specialized TUI for DeepSeek models |
| **Target User** | Claude Desktop users, MCP ecosystem | Power users, Enterprise, Mobile access | Developers building autonomous agents | Power users, local-first workflows | TUI enthusiasts, CLI purists |
| **Technical Approach** | Electron-based Desktop app, hooks-based skill injection | Cloud-first with local executors, rapid alpha iteration | Model-centric, focus on turn limits & web search | Open-source, Rust/TUI-first, sandbox-focused | Rust-native TUI, provider-agnostic |
| **Release Cadence** | Stable semver releases (v2.1.x) | Aggressive alpha/beta cycle (0.174.x) | Steady feature PRs, no major release today | Steady bugfix cycle, v2.4.1 focus | Rapid release cycle, finalizing 0.10.5 |

### 5. Community Momentum & Maturity
*   **Most Active:** **OpenCode** currently shows the highest velocity with 24 PRs merged in 24 hours, indicating a very active maintenance cycle focused on polishing the v2.4.1 release. **DeepSeek-TUI** and **Qwen Code** also show significant activity with focused bugfix waves.
*   **Most Mature/Stable:** **Claude Code** represents the most "production-ready" experience with a stable v2.1 release and a managed desktop ecosystem, though it faces significant backlog pressure (50 open issues). **Gemini CLI** is feature-mature but currently in a maintenance phase without new releases.
*   **Rapid Iterators:** **OpenAI Codex** and **Pi** exhibit the most aggressive iteration patterns, with Codex publishing multiple alpha versions daily and Pi merging 4 PRs while addressing critical stream parsing bugs. This reflects a "move fast and fix" philosophy typical of newer or cloud-dependent tools.

### 6. Trend Signals
*   **The "Silent Regression" Era:** The dominant narrative across almost all tools is the fight against bugs that break workflows without clear error messages (e.g., Claude Code's prompt suggestions stopping, OpenCode's hook firing cessation, Pi's cache warming failure). Developers are demanding better observability and "fail-safe" defaults.
*   **MCP as the Integration Nervous System:** Model Context Protocol integration is no longer a "nice-to-have" but a baseline expectation. The friction points are shifting from "can we connect?" to "how do we manage permissions, streaming, and incremental loading reliably across platforms?"
*   **TUI vs. GUI Convergence:** There is a clear dichotomy. Tools like **DeepSeek-TUI** and **OpenCode** are doubling down on Terminal User Interfaces for power users who value speed and scripting, while **Claude Code** and **OpenAI Codex** prioritize graphical desktop integration and mouse-driven workflows. The most successful tools will likely bridge this gap, offering robust TUI modes alongside polished GUIs.
*   **Platform Fragmentation as a Cost:** The sheer volume of OS-specific issues (Windows CRLF, macOS TCC, Linux session misclassification) suggests that "write once, run anywhere" for AI CLIs is currently unfeasible. Teams are investing heavily in platform-specific guards and configuration logic, increasing the operational overhead for self-hosted deployments.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-11-25**

---

## 1. Top Skills Ranking

The following Skills PRs have generated the most community discussion (by comments/attention), reflecting active development focus.

| # | PR Title & Author | Functionality | Highlights | Status |
|---|---|---|---|---|
| **1** | **[#1742](https://github.com/anthropics/skills/pull/1742)**<br>*fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers*<br>Kuldeeep18 | MCP Builder fix for `mcp>=2.0.0` compatibility; renames `streamablehttp_client` to `streamable_http_client` and configures custom headers via `create_mcp_http_client` / `http_client`. | **Discussion**: Fixes breakage in MCP v2.0+ integration; critical for users relying on custom HTTP headers in MCP connections. | **OPEN** |
| **2** | **[#1298](https://github.com/anthropics/skills/pull/1298)**<br>*fix(skill-creator): isolate trigger evals and handle Windows and runtime failures*<br>MartinCajiao | Isolates trigger evaluations to prevent false misses; handles `select()` subprocess pipe failures on Windows; skips unrelated tools during scans. | **Discussion**: Addresses core reliability issues in skill trigger evaluation; Windows compatibility and runtime failure handling are high-value fixes. | **OPEN** |
| **3** | **[#1980](https://github.com/anthropics/skills/pull/1980)**<br>*webapp-testing: avoid shell=True in with_server.py*<br>Pcmhacker-piro | Replaces `subprocess.Popen(..., shell=True)` with safer alternatives in `with_server.py` to eliminate command injection (CWE-78) risks. | **Discussion**: Security-critical change; moves webapp-testing skill toward production-safe command execution. | **OPEN** |
| **4** | **[#1771](https://github.com/anthropics/skills/pull/1771)**<br>*feat(skills): add proofcore-contract-auditor for smart contract notarization*<br>ProofCore-Protocol | New skill for Web3 developers: automated static analysis of Solidity/Rust smart contracts, anchoring audit proofs to TON Blockchain via ProofCore's Merkle protocol. | **Discussion**: First Web3-focused skill in the collection; expanding Claude Code's capabilities into blockchain development. | **OPEN** |
| **5** | **[#1977](https://github.com/anthropics/skills/pull/1977)**<br>*algorithmic-art: wrapAround() now wraps*<br>gerardrecinto | Fixes `wrapAround()` algorithm to correctly wrap negative values using modulo arithmetic, keeping results in `[0, max)` range. | **Discussion**: Small but important algorithmic fix; demonstrates ongoing refinement of existing skills. | **OPEN** |
| **6** | **[#525](https://github.com/anthropics/skills/pull/525)**<br>*Add pyxel skill for retro game development*<br>kitao | New skill for creating, debugging, and verifying retro games in Python; guides implementation, headless input-driven runs, and frame inspection. | **Discussion**: Niche but passionate community interest; adds game development tooling to the ecosystem. | **OPEN** |
| **7** | **[#1976](https://github.com/anthropics/skills/pull/1976)**<br>*webapp-testing: report textarea and select correctly in element_discovery.py*<br>gerardrecinto | Fixes element discovery to correctly report `textarea` and `select` tags (previously applied `text` fallback to all inputs). | **Discussion**: UI/UX testing improvement; fixes false negatives in element discovery. | **OPEN** |
| **8** | **[#1975](https://github.com/anthropics/skills/pull/1975)**<br>*pptx: reject --cols below 1 in thumbnail.py*<br>gerardrecinto | Adds early `argparse` validation to reject `--cols` ≤ 0 in PPTX thumbnail generation, failing fast instead of after LibreOffice render. | **Discussion**: User experience improvement; prevents confusing error messages downstream. | **OPEN** |

---

## 2. Community Demand Trends

From the open Issues, the community is converging on several high-demand directions:

| Trend | Representative Issues | Insight |
|-------|----------------------|---------|
| **Workflow Automation & Integration** | #1742 (MCP v2 compatibility), #1980 (shell=True removal), #1975 (CLI validation) | Community prioritizes robust, secure integration patterns—especially MCP networking, safe subprocess execution, and error handling that "fails fast." |
| **Skill Creator & Evaluation Reliability** | #1298 (trigger eval isolation), #1681 (package_skill.py execution), #1352 (parallel worker UUID cross-matching) | Heavy focus on fixing the skill-creator pipeline: reliable trigger detection, standalone script execution, and parallel evaluation correctness. |
| **Domain Expansion** | #1771 (proofcore-contract-auditor), #525 (pyxel retro games), #1703 (md2video-audio) | Broadening beyond traditional software tasks into creative (video, games), specialized (blockchain), and content transformation domains. |
| **Documentation & Usability** | #189 (duplicate skills install), #2064 (missing "when to use it" docs), #1143 (account email changes) | Users want clearer skill ownership, better onboarding docs, and platform-level governance features. |
| **Security & Trust** | #492 (namespace trust boundary abuse), #1980 (command injection) | Growing awareness of the trust boundary issue; security hardening (sanitizing inputs, avoiding `shell=True`) is a recurring theme. |

---

## 3. High-Potential Pending Skills

These active-comment PRs are closest to merging and may land soon:

| PR | Author | Why It’s High-Potential |
|----|--------|-------------------------|
| **[#1742](https://github.com/anthropics/skills/pull/1742)** | Kuldeeep18 | MCP v2 compatibility is foundational; once merged, enables newer MCP server features for all downstream skills. |
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | MartinCajiao | Fixes trigger evaluation reliability across platforms; directly impacts skill "activation" rates in real-world usage. |
| **[#1980](https://github.com/anthropics/skills/pull/1980)** | Pcmhacker-piro | Security fix that aligns webapp-testing with Claude Code's sandboxing best practices. |
| **[#1771](https://github.com/anthropics/skills/pull/1771)** | ProofCore-Protocol | Novel Web3 skill; if merged, would be the first blockchain-oriented skill in the official collection. |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for reliable, secure integration patterns that enable Claude Code to operate across diverse domains—from MCP networking and web automation to blockchain and game development—without breaking under platform upgrades or security scrutiny.**

In other words: **the ecosystem is shifting from "what can Claude do?" to "how reliably and safely can Claude integrate with our existing toolchains?"**

---

# Claude Code Community Digest
**Generated:** 2026-11-25

---

## 1. Today's Highlights

The Claude Code team released **v2.1.332**, introducing MCP server skills integration (now appearing as `server:skill` in the `/` menu) and a new `PreSkillShellCommand` hook event that can refuse inline shell commands as they load. On the issue front, two significant bugs were updated today: a Linux interactive session misclassification issue (#112133, posted today) and a VS Code prompt suggestions regression (#111668, updated today). The issue backlog remains active with 50 open items, spanning platform-specific regressions, MCP integration bugs, and feature gaps in the mod/plugin system.

---

## 2. Releases

**v2.1.332** (Released today)
- **MCP Skills Beta:** Skills from MCP servers now appear as `server:skill` in the `/` menu; legacy skills retain their original names.
- **`PreSkillShellCommand` Hook:** New event that can refuse a skill or command's inline shell commands at load time. Previously available only via settings file in v2.1.331 and older.

---

## 3. Hot Issues (Top 10 by Community Impact)

| Issue | Comments | Why It Matters |
|-------|----------|----------------|
| **[#26302](https://github.com/anthropics/claude-code/issues/26302)** – Windows UI lag & mouse stutter (58 comments, 49 👍) | Severe performance regression in Claude Desktop 1.1.3189. Users report CPU-bound lag and mouse stutter post-update, indicating a significant desktop usability regression. |
| **[#60082](https://github.com/anthropics/claude-code/issues/60082)** – Real-time multi-user collaboration (22 comments, 43 👍) | Feature request for Google Docs–style live collaboration on a single Claude Code session. Highlights demand for shared workspaces beyond read-only "Share" links. |
| **[#110676](https://github.com/anthropics/claude-code/issues/110676)** – Cowork file upload failures (15 comments) | Windows remote session `device_stage_files` fails for files ≥4 MB, then returns HTTP 503 even for 47 KB files. Critical for remote development workflows. |
| **[#50719](https://github.com/anthropics/claude-code/issues/50719)** – Computer Use clicks blocked by Dock (14 comments, 1 👍) | macOS regression where all clicks are blocked by a Dock layer-20 hit-test surface on macOS 26.4/26.4.1, rendering Computer Use inoperable. |
| **[#106708](https://github.com/anthropics/claude-code/issues/106708)** – MCP App tool "IPC not available" (7 comments, 1 👍) | MCP App tool calls fail with "IPC not available" in the Claude desktop Code tab, blocking modular tool integration. |
| **[#107892](https://github.com/anthropics/claude-code/issues/107892)** – PR attribution footer (5 comments, 6 👍) | Web app appends "Generated by Claude Code" footer to PR bodies despite `attribution.pr` being set to empty and `sessionUrl` to false. |
| **[#87891](https://github.com/anthropics/claude-code/issues/87891)** – Background daemon worker leak (8 comments, 6 👍) | Daemon never reaps stale workers or unclaimed spares; 64 leaked processes/~7.1 GB after six weeks of restarts. Memory leak impacting long-running sessions. |
| **[#94878](https://github.com/anthropics/claude-code/issues/94878)** – macOS TCC permissions lost on update (5 comments, 3 👍) | macOS TCC permissions lost on every auto-update due to versioned binary paths, requiring repeated user consent. |
| **[#111668](https://github.com/anthropics/claude-code/issues/111668)** – VS Code prompt suggestions stopped (1 comment, 2 👍) | Prompt suggestions (ghost-text, Tab to accept) silently stopped generating on 2026-11-22 across versions 2.1.327 and 2.1.330. No error logged; user-side changes unconfirmed. |
| **[#112133](https://github.com/anthropics/claude-code/issues/112133)** – Linux session misclassification (2 comments, 0 👍) | Interactive main session misclassified as background job; isolation guard blocks subagent and Write tool edits. Recurrence of macOS issue #64635. |
| **[#111977](https://github.com/anthropics/claude-code/issues/111977)** – Plugins never auto-update (2 comments, 1 👍) | Desktop app plugins never auto-update when `DISABLE_AUTOUPDATER=1` is set in the session environment; no user action to trigger updates. |

---

## 4. Key PR Progress

*No pull requests were merged or updated in the last 24 hours (total: 0 items).*

---

## 5. Feature Request Trends

Analysis of the 50 open issues reveals these high-demand directions:

- **Mod/Plugin UX:** Configurable toast placement, visible remaining time, icons on buttons/inputs, full-width input in mod panes, and keeping mod panes open across sessions are the most requested enhancements (multiple MrMirhan and rvanhorn requests).
- **Multi-User Collaboration:** Real-time session sharing (Issue #60082) and cross-session mod persistence are prominent, indicating a shift toward collaborative AI development workflows.
- **MCP Integration:** Skills from MCP servers, HTTP response streaming as they arrive, and account-level data/granted capabilities for mods suggest deeper third-party service integration is a priority.
- **Platform-Specific Stability:** macOS TCC permission leaks, Windows UI regressions, and Linux session misclassification indicate stability remains a cross-platform challenge.
- **Voice & Accessibility:** Custom vocabulary for voice input recognition (Issue #112134) and standard text-editing model features (selection, cut/copy/paste via OSC 52) are requested for power-user and accessibility workflows.

---

## 6. Developer Pain Points

- **Silent Regressions:** VS Code prompt suggestions stopping without errors (Issue #111668) and background daemon worker leaks (Issue #87891) frustrate developers relying on automated workflows.
- **Permission & Persistence Friction:** macOS TCC prompts after every update (Issue #94878) and mod panes closing on session switch (Issue #104903) disrupt long-running development sessions.
- **MCP & Tool Integration Gaps:** "IPC not available" errors (Issue #106708), instructions cut at 2,048 characters after compaction (Issue #112121), and inability to read HTTP responses incrementally (Issue #105560) hinder modular AI tooling.
- **Feature Parity Across Surfaces:** Web PR attribution footers ignoring settings (Issue #107892), Chrome tab group loss after restart (Issue #112135), and Linux vs. macOS bug recurrences (#64635 vs. #112133) show inconsistent UX across platforms.
- **Mod/Plugin Customization Limits:** Button/Input icon support, toast control, and full-width input constraints (Issues #104915, #101089, #104902) reflect a need for richer mod UI capabilities as the mod ecosystem grows.

---

*Data sourced from github.com/anthropics/claude-code. Digest generated automatically for 2026-11-25.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for 2026-11-25.

### **Today's Highlights**
A flurry of alpha releases and infrastructure PRs dominate today's activity, alongside critical stability bugs affecting cross-platform reliability. The release of `rust-v0.174.0-alpha.5` signals ongoing feature expansion, while issues like the Windows Computer Use border bug and the macOS voicePipeWire regression highlight persistent UX frustrations. Furthermore, a wave of TUI and CLI capability refactors indicates a push toward architectural stability.

### **Releases**
*   **rust-v0.174.0-alpha.5**: Latest alpha build released. This incremental update continues the rapid iteration cycle of the Codex CLI runtime.
*   **rust-v0.174.0-alpha.4 / alpha.3 / alpha.2**: Four alpha versions published in the last 24 hours, reflecting an aggressive development pace focused on stabilizing the 0.174 series.

### **Hot Issues** (Top 10)
1.  **[#57101](https://openai/codex/issues/57101)** – *Windows Computer Use border glitch*: The "capture access and gold/yellow display border" remains open after screenshots, causing UI clutter. High engagement (88 comments) indicates a widespread UI polish frustration.
2.  **[#57641](https://openai/codex/issues/57641)** – *Browser CLI failure*: "The browser access host is unavailable" error after desktop update, blocking browser automation on Windows Brave. 48 upvotes show high impact on power users.
3.  **[#58530](https://openai/codex/issues/58530)** – *Rate limit preservation*: Request to preserve ChatGPT High and Codex/Work access for Plus subscribers in December 2026. 69 upvotes reflect community anxiety over feature gating.
4.  **[#62393](https://openai/codex/issues/62393)** – *Windows Send button bug*: Send button intermittently disables despite non-empty input. A recent regression affecting workflow continuity.
5.  **[#56928](https://openai/codex/issues/56928)** – *Browser automation unavailable*: "The browser access host is unavailable" on macOS. Similar to #57641 but for the macOS app, highlighting a cross-platform backend instability.
6.  **[#63217](https://openai/codex/issues/63217)** – *macOS Send disabled*: "Peer closed MessagePort connection" error preventing chat initiation on Apple Silicon. Critical for macOS daily drivers.
7.  **[#62899](https://openai/codex/issues/62899)** – *iOS crash*: ChatGPT iOS crashes opening the Codex tab (SwiftUI metadata EXC_BAD_ACCESS). A sudden regression blocking mobile access.
8.  **[#60449](https://openai/codex/issues/60449)** – *Windows TCP connectivity*: Network enabled but local executor blocks TCP connect (10013). A sandbox/network configuration issue preventing remote execution.
9.  **[#63783](https://openai/codex/issues/63783)** – *Windows ARM64 startup crash*: "Missing scope instance" error on ChatGPT update. Affects the latest build (26.1120.6357.0).
10. **[#58704](https://openai/codex/issues/58704)** – *Linux PipeWire voice*: Master gain becomes zero while channel gains remain. A niche but disruptive audio bug on Linux desktop.

### **Key PR Progress** (Top 10)
1.  **[#63845](https://openai/codex/pull/63845)** – *Bidirectional text in transcripts*: Fixes mixed RTL/LTR display in full-screen transcripts, improving accessibility for Arabic/Hebrew users.
2.  **[#63844](https://openai/codex/pull/63844)** – *Bidirectional transcript text*: Ensures correct ordering for terminals without native ordering support.
3.  **[#63843](https://openai/codex/pull/63843)** – *Context limit increase*: Raises per-value additional context limit from 1,000 to 10,000 tokens, significantly increasing memory capacity for long-running tasks.
4.  **[#63838](https://openai/codex/pull/63838)** – *TUI rate limit scoping*: Fixes quota warnings/banners for resumed threads using different providers than the server default.
5.  **[#63834](https://openai/codex/pull/63834)** – *N-gram allocation reduction*: Optimizes dynamic skill selection by deduplicating n-grams, improving CPU efficiency.
6.  **[#63832](https://openai/codex/pull/63832)** – *Shadow skill selection*: Prevents skill ranking when no metrics client is installed, avoiding unnecessary resource usage.
7.  **[#63821](https://openai/codex/pull/63821)** – *Fixed MCP REPL directories*: Enables fixed launch directories for shared MCP REPL servers when connection sharing is active, stabilizing remote execution environments.
8.  **[#63811](https://openai/codex/pull/63811)** – *ripgrep update*: Upgrades packaged ripgrep to 16.0.0, improving search performance and compatibility.
9.  **[#63810](https://openai/codex/pull/63810)** – *Voice preference sync*: Uses ChatGPT account preferences for Codex voice chat, ensuring consistency between the web app and desktop CLI.
10. **[#63808](https://openai/codex/pull/63808)** – *Workload identity auth*: Fixes API workload identity authentication at startup and refresh, critical for enterprise CI/CD pipelines.

### **Feature Request Trends**
*   **Cross-Platform Stability**: A significant portion of high-comment issues (#57101, #57641, #56928, #63217) revolve around bugs that manifest differently across Windows, macOS, and Linux, suggesting a need for more rigorous cross-platform QA.
*   **Browser Automation Reliability**: Repeated failures of the "browser access host" (#57641, #56928) indicate that the unified computer-use plugin is a major pain point, with users requesting more stable selectors and fallback mechanisms.
*   **Voice & Audio Fidelity**: The Linux PipeWire issue (#58704) and the general "Computer Use" audio prompts suggest a trend toward demanding better native OS integration for voice playback and microphone access without UI breakage.
*   **TUI Performance & Config**: Several PRs (#63838, #63802, #63797) focus on centralizing terminal capabilities, indicating developers are frustrated with the TUI's sensitivity to terminal types (SSH/Mosh, Ghostty, Kitty) and want a more robust, unified configuration layer.

### **Developer Pain Points**
*   **Stale Configuration & Auto-Update Breakage**: Issue #26011 highlights a persistent problem where `config.toml` MCP paths become stale after auto-updates, breaking `node_repl` servers. This suggests a need for better migration scripts or version pinning logic.
*   **Safety Policy False Positives**: Issues #63583 and #53083 report that cybersecurity/false positive blocks are halting legitimate local regression testing and read-only review preparation, frustrating developers who feel the safety net is too aggressive.
*   **Session & Connectivity Instability**: Recurrent themes of disconnected sessions (#57650), blocked TCP ports (#60449), and resetting executors (#63805) point to a fragile runtime environment where network bindings and session persistence are unreliable, particularly in sandboxed or Work environments.
*   **UI/UX Regression**: The "Send button disabled" (#62393) and "Local/cloud selector missing" (#63093) issues indicate that recent app updates are removing or breaking basic workflow controls, leading to user friction and lost productivity.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for 2026-11-25.

### **Today's Highlights**
A flurry of activity is driving the project toward the next release cycle. Three significant Pull Requests were merged today (PRs #30467, #30468, and #30464) focusing on core stability and new conversational features like `/fork`. Concurrently, the issue queue remains active with critical bugs surrounding subagent turn limits and browser persistence, indicating a focus on refining agent reliability and tooling robustness.

### **Releases**
*No new releases were published in the last 24 hours.*

### **Hot Issues** (Top 10 by engagement)
1.  **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** – *Subagent recovery after MAX_TURNS is reported as GOAL success*. **Why it matters:** A critical bug where subagents incorrectly report success upon hitting turn limits, potentially hiding interruptions and leading to wasted compute. **Reaction:** 14 comments; community is actively discussing turn limit enforcement.
2.  **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** – *Leverage model's bash affinity via Zero-Dependency OS Sandboxing*. **Why it matters:** Proposes a security and UX enhancement to let models use native bash tools safely, reducing the need for custom skills. **Reaction:** 9 comments; high interest in balancing capability with security.
3.  **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** – *Generalist agent hangs*. **Why it matters:** Users report the agent hangs indefinitely on simple tasks like folder creation. **Reaction:** 8 likes; a top priority for stability as it blocks general workflow.
4.  **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** – *Assess the impact of AST-aware file reads, search, and mapping*. **Why it matters:** An EPIC to investigate AST-aware tools (like tilth/glyph) to reduce token noise and improve precision in code navigation. **Reaction:** 7 comments; represents a shift toward more efficient code ingestion.
5.  **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** – *Gemini does not use skills and sub-agents enough*. **Why it matters:** Users report the model ignores custom skills unless explicitly instructed. **Reaction:** 7 comments; a recurring pain point regarding agent autonomy.
6.  **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** – *[BUG] Browser Agent ignores settings.json overrides*. **Why it matters:** Configuration overrides (like `maxTurns`) are silently ignored, breaking expected agent behavior. **Reaction:** 5 comments; frustration with configuration persistence.
7.  **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** – *browser subagent fails in Wayland*. **Why it matters:** A platform-specific bug causing the browser subagent to fail on Wayland displays. **Reaction:** 4 comments; highlights cross-platform compatibility challenges.
8.  **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** – *Gemini CLI encounters 400 error with > 128 tools*. **Why it matters:** A hard limit on tool availability causes 400 errors, hindering projects with many available tools. **Reaction:** 3 comments; a scalability concern for power users.
9.  **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)** – *Model frequently creates tmp scripts in random spots*. **Why it matters:** Creates workspace clutter and overhead when cleaning up for commits. **Reaction:** 3 comments; a common "messy workspace" frustration.
10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)** – *Agent should stop/discourage destructive behavior*. **Why it matters:** Concerns over the model using `git reset --force` or similar destructive commands in complex operations. **Reaction:** 3 comments; a safety-first request.

### **Key PR Progress** (Top 10 by impact)
1.  **[#30467](https://github.com/google-gemini/gemini-cli/pull/30467)** – *fix(cli): preserve Markdown code fence boundaries*. **Change:** Fixes terminal rendering issues with fenced code blocks (info strings, tables). **Impact:** Improves code readability and UI fidelity.
2.  **[#30468](https://github.com/google-gemini/gemini-cli/pull/30468)** – *fix(core): match binary assets against all workspace directories*. **Change:** Fixes a regression where `read_many_files` skipped binary assets in added directories. **Impact:** Restores functionality for users working with media/assets across multiple directories.
3.  **[#30464](https://github.com/google-gemini/gemini-cli/pull/30464)** – *feat(cli): add /fork command and rewind fork option*. **Change:** Introduces non-destructive conversation branching via `/fork [name] [--stay]`. **Impact:** A major UX feature allowing users to branch discussions without losing context.
4.  **[#30415](https://github.com/google-gemini/gemini-cli/pull/30415)** – *fix(core): add a time limit to web search and stop retries on abort*. **Change:** Addresses the hang reported in #29594 by adding timeouts to the `google_web_search` tool. **Impact:** Critical fix for reliability when web search stalls.
5.  **[#30454](https://github.com/google-gemini/gemini-cli/pull/30454)** – *fix(core): enforce origin consistency and display endpoint origin in MCP OAuth flow*. **Change:** Hardens security by enforcing RFC 8414 issuer matching for OAuth. **Impact:** Essential security update for MCP integrations.
6.  **[#30339](https://github.com/google-gemini/gemini-cli/pull/30339)** – *fix(acp): surface BeforeAgent hook denial and stop reasons*. **Change:** Ensures hook denials are visible in ACP mode rather than dropped. **Impact:** Improves debugging and transparency for automated workflows.
7.  **[#30335](https://github.com/google-gemini/gemini-cli/pull/30335)** – *fix(core): stop overriding core.sshCommand with an empty string*. **Change:** Fixes SSH operations failing due to empty `core.sshCommand` config. **Impact:** Restores git/SSH functionality for sandboxed environments.
8.  **[#30331](https://github.com/google-gemini/gemini-cli/pull/30331)** – *fix(cli): preserve MCP env values containing = and empty values*. **Change:** Fixes parsing corruption for env vars like `TOKEN=abc=def==` or `EMPTY=`. **Impact:** Critical fix for MCP users relying on complex environment variables.
9.  **[#30332](https://github.com/google-gemini/gemini-cli/pull/30332)** – *fix(cli): support comma-separated MCP tool filters*. **Change:** Allows `--include-tools` and `--exclude-tools` to accept comma-separated lists. **Impact:** Improves usability and filtering precision for MCP tool management.
10. **[#30459](https://github.com/google-gemini/gemini-cli/pull/30459)** – *fix(extensions): allow unsafe config paths for extension git operations*. **Change:** Enables `gemini extensions install` for git-based extensions by permitting `allowUnsafeConfigPaths`. **Impact:** Restores extension update/install functionality for the community.

### **Feature Request Trends**
The community is heavily focused on **agent autonomy and precision**. A dominant trend is the request for the model to **leverage native bash and AST-aware tools** (Issues #19873, #22745) to reduce token overhead and improve code navigation efficiency. There is also a strong demand for **better subagent visibility and trajectory sharing** (#22598, #21968), with users wanting to review "how" the agent worked. Finally, **robust configuration persistence** is a recurring pain point, specifically regarding `settings.json` overrides being ignored by the Browser Agent (#22267) and symlink handling for agents (#20079).

### **Developer Pain Points**
*   **Subagent Turn Limits:** A critical frustration where subagents report `GOAL` success immediately upon hitting `MAX_TURNS` (#22323), hiding the fact that work was incomplete.
*   **Configuration Ignorance:** Users find that `settings.json` overrides (particularly `maxTurns` and approval modes) are frequently ignored by specific agents like the Browser Agent (#22267).
*   **Workspace Pollution:** The model frequently creates temporary scripts in random directories (#23571), requiring manual cleanup before commits.
*   **Hanging Workflows:** The Generalist agent hangs indefinitely on simple interactive prompts or folder creation, forcing users to cancel sessions (#21409).
*   **Tool Scalability:** Projects with large numbers of available tools trigger 400 errors, suggesting a need for smarter tool scoping (#24246).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

### GitHub Copilot CLI Community Digest

**Today's Highlights**
The v1.0.116 series concludes its rapid iteration cycle with v1.0.116-5, focusing on refining the Autopilot plan approval flow and tightening shell security permissions in ACP clients. Notably, the team addressed a regression where PowerShell commands with special parameter names now honor allow rules correctly. Concurrently, the Issues list reflects a maturing toolset, with attention shifting toward sandbox integrity, model configuration parity, and enterprise MCP compliance.

**Releases**
*   **v1.0.116-5**: Fixed `copilot help parallel-work` messaging regarding Autopilot offers; corrected shell approval prompts to show the authorized command rather than its description; resolved PowerShell allow rule enforcement for commands with digits/special characters (e.g., `-n1`, `-ExpectedSha256`).
*   **v1.0.116-4**: Added build-time JSON Schema for extension manifests; fixed PowerShell allow rules and folder trust prompt behavior.
*   **v1.0.116-3**: Added context size selection for ACP-compatible editors; enabled environment variable propagation for Copilot-started processes; added "Jump to latest" functionality in the timeline.
*   **v1.0.116-2**: Added warnings for conflicting plugin and standalone MCP server connections.
*   **v1.0.116-1**: (Duplicate of v1.0.116-2 additions/fixed).
*   **v1.0.116-0**: Improved startup flow to skip slow-connect warnings for organization-managed MCP servers and summarize MCP status.

**Hot Issues (Top 10)**
1.  **#1148 [CLOSED]** *(Platform Windows)*: Copilot-cli changes files to CRLF line endings. A regression causing line ending corruption in edited files; community actively discussing line-ending handling across platforms.
2.  **#4275 [CLOSED]**: ACP: expose `contextTier` as a session config option. Highlights the disparity between interactive CLI model picking and ACP server limitations; a requested parity feature for non-interactive workflows.
3.  **#2165 [OPEN]**: Ubuntu keychain support is broken. A persistent authentication hurdle on Linux; the linked documentation is identified as incorrect, blocking keychain access.
4.  **#5323 [OPEN]**: Feature request to disable agent checkpoint refs (`refs/agents/*`). Concerns over repository clutter from automatic checkpoint commits authored by the user's git identity.
5.  **#5040 [OPEN]**: MCP OAuth: Entra rejects `127.0.0.1` callback. A critical blocker for remote HTTP MCP servers protected by Microsoft Entra ID, causing authentication failures (`AADSTS50011`).
6.  **#4335 [OPEN]**: `[ACP] toolCall.title contains high-level summary instead of executable command`. A UX friction point where approval modals show natural language summaries, hiding the actual shell command from users.
7.  **#5559 [OPEN]**: [Regression] TLS 1.3 broken on MacOS since 1.0.93-0. A platform-specific networking regression affecting connections to external MCP endpoints like Jenkins.
8.  **#5175 [OPEN]**: Copilot app: no way to sign in again to an expired MCP server. Users are locked out of MCP servers with expired credentials due to the absence of a re-authentication flow in the web app.
9.  **#5569 [OPEN]**: ACP: Copilot emits a final answer twice when an attached shell is still running. A race condition where the final answer is emitted prematurely, then again upon shell exit, causing duplicate outputs.
10. **#5568 [OPEN]**: MCP registry requests omit User-Agent and fail AWS WAF validation. An enterprise compliance issue where missing headers trigger AWS WAF blocks on MCP registry requests.

**Key PR Progress**
*   **#4316 [CLOSED]**: Create devcontainer.json. Standard devcontainer setup PR.
*   **#4428 [CLOSED]**: Add initial devcontainer configuration. Finalized devcontainer base configuration.

**Feature Request Trends**
The issue queue reveals a strong push for **configuration parity and control**. Users are heavily requesting the ability to disable agent checkpoint refs to maintain cleaner git histories (`#5323`). There is a clear demand for **ACP parity**, specifically exposing `contextTier` and model picker settings to non-interactive sessions (`#4275`). Additionally, **MCP management** is a focal point, with requests for multiple external provider support (`#4976`), re-authentication flows for expired servers (`#5175`), and registry compliance (`#5568`).

**Developer Pain Points**
*   **Line Ending Corruption**: Windows users face automatic CRLF conversion during file edits, requiring manual intervention or config adjustments.
*   **Authentication Friction**: Linux (Ubuntu) keychain integration is broken or undocumented, and Entra ID MCP OAuth callback issues (`127.0.0.1`) prevent remote server usage.
*   **ACP UX Gaps**: Approval prompts often obscure the actual command being run (`toolCall.title` summaries), and session management lacks intuitive re-authentication paths in the web app.
*   **Sandbox Leaks**: Recent reports indicate that denied files in sandboxes are being read and copied into `COPILOT_HOME` before rejection, posing a potential data leakage risk.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest - 2026-11-25

---

## Today's Highlights

A busy day for OpenCode with 12 new issues and 24 PRs merged in the last 24 hours. The community is actively addressing cross-platform stability issues (WSL clipboard bugs, Windows CRLF handling, and service hang scenarios) while refining the core provider model. Multiple bug fixes target the patch tool, snapshot restoration, and TUI navigation, indicating a push toward v2.4.1 stability. [View full thread](https://github.com/anomalyco/opencode)

---

## Releases
No new versions released in the last 24 hours.

---

## Hot Issues (10 noteworthy)

1. **#66280** - *Unbounded SSE, Bus, Location and Session WebSocket buffers retain resources* (4 comments)  
   Long-lived service processes leak memory and sockets due to uncapped buffers. Four paths lack hard bounds or idle expiry. Critical for production stability.

2. **#66314** - *Patch: final empty line of added file is dropped* (1 comment)  
   The patch grammar discards trailing empty lines when adding files. Fix impacts file creation fidelity and is already addressed in PR #66315.

3. **#66316** - *Identically-named Zen/Go models cause double-charging* (1 comment)  
   `opencode` (Zen) and `opencode-go` expose models with identical display names (e.g., `deepseek-v4-flash`), routing Zen requests to workspace credits despite active Go subscriptions.

4. **#66313** - *Missing `unescape`/`escape` in execute sandbox* (1 comment)  
   Code Mode's sandbox lacks deprecated Annex B globals `unescape` and `escape`, causing `ReferenceError` for model-generated code relying on these.

5. **#66311** - *Undo writes LF over CRLF files on Windows* (1 comment)  
   With `core.autocrlf=true`, undo operations convert CRLF to LF, triggering `git status` modifications and breaking line-ending-sensitive files (`.bat`, `.cmd`).

6. **#66304** - *Message navigation forgets current message after tab switch* (1 comment)  
   TUI session tabs restore scroll position but reset the tracked "current message," requiring first `<leader>home/end` to resolve from the viewport top.

7. **#66303** - *Codex image generation loses model after deprecation* (1 comment)  
   `openai/gpt-image-2` marked deprecated removes it from the runtime model list, breaking ChatGPT Plus OAuth image generation workflows.

8. **#66299** - *Session prompt hook stops firing after plugin re-boot* (1 comment)  
   Plugins' `ctx.session.hook("prompt", ...)` cease invocation after background service reboot in long-lived processes, silently disabling prompt-transforming plugins.

9. **#66296** - *Automations not visible in desktop side panel* (1 comment)  
   User-created automations are inaccessible via the UI; only reachable via `automation.list` agent command, creating discoverability issues.

10. **#66289** - *Session stuck "running" forever after daemon restart* (1 comment)  
    Restarting the background service mid-run leaves sessions permanently in `running` state, blocking subsequent commands in the same directory.

---

## Key PR Progress (10 important)

1. **#66315** - *Keep final empty line in patch added files*  
   Fixes #66314. Ensures `+` lines preserve trailing newlines in newly created files.

2. **#66312** - *Keep CRLF bytes when restoring snapshots*  
   Snapshots hash and restore raw bytes with `autocrlf = false`, preventing line-ending corruption on Windows.

3. **#66310** - *Fix WSL TUI copy through Windows interop*  
   Resolves #65913 where TUI reported successful copy but Windows clipboard retained previous content.

4. **#66309** - *Recover daemon shell command with lost create reply*  
   When `create_pipe` reply is lost, daemon now searches its process list to track the running command.

5. **#66291** - *Bound Bus queues and close recovery gaps*  
   Part of #66280. Bounds Core Bus subscriber queues and closes resource recovery gaps from unbounded subscriptions.

6. **#66293** - *Close idle Session WebSockets*  
   Part of #66280. Idle Session WebSockets are now properly closed, preventing resource leaks.

7. **#66002** - *Show update pill during download*  
   Fixes #62238. The titlebar update pill now appears immediately when a download starts, not just when ready.

8. **#65937** - *Make Environments path tests portable to Windows*  
   Addresses test failures on Windows regarding `local:/` path resolution and `machines` flag behavior.

9. **#65223** - *Use junctions and guard file symlinks on Windows*  
   Fixes #64952. TUI plugin tests now work on unelevated Windows checkouts without Developer Mode.

10. **#66276** - *Cap Ollama output on agent steps/generate requests*  
    Fixes #66249. Built-in Ollama provider now enforces output limits, preventing looping models from running indefinitely.

---

## Feature Request Trends

- **Sandbox & Permission Controls**: #64073 (Restore Foreground Subagent Execution) and #48411 (Better execution permissions/sandboxing) reflect demand for finer-grained execution controls and permission modes.
- **Input Modalities**: #33300 (Voice/Speech Input Support) indicates ongoing interest in non-text input methods for the Desktop app.
- **Provider Model Clarity**: #59603 (Custom provider option disappeared) and #66316 (Identical model names across providers) highlight confusion around provider selection and credit routing when model names overlap.
- **Desktop UI Polish**: #66288 (Current tab visibility in light theme) and #66296 (Automations visibility) focus on making the desktop interface more intuitive and discoverable.
- **Long-running Session Stability**: #66289 (Session stuck after daemon restart) and #66299 (Plugin hook failure after reboot) show concern about state persistence in always-on services.

---

## Developer Pain Points

- **Windows CRLF Handling**: Recurring issue across #66311 (undo corrupts line endings), #66313 (missing `unescape`/`escape` globals), and #65223 (file symlink restrictions). The `core.autocrlf` setting consistently causes unexpected byte transformations during snapshot restore and undo operations.

- **Cross-Platform Clipboard Bugs**: #65913 (WSL "Copied to clipboard" but Ctrl+V fails) and #66310 (WSL interop fix) demonstrate that WSL2 clipboard synchronization remains fragile, with TUI state not syncing to the Windows clipboard.

- **Session State Persistence**: #66289 (session stuck "running" after daemon restart) and #66299 (prompt hooks silent after plugin reboot) indicate that long-lived daemon processes lose track of in-flight sessions and plugin state upon restart or re-boot.

- **Provider Model Ambiguity**: #66316 (identical model names charging wrong credits) and #59603 (missing custom provider option) point to a need for better model discriminators and clearer provider-state separation in the UI picker.

- **Buffer/resource Leaks in Long-Running Services**: #66280 (unbounded SSE/Bus/WebSocket buffers) and #66291 (bounding Bus queues) reveal that production deployments of the OpenCode service can accumulate memory and socket leaks over time without explicit cleanup.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

### Pi Community Digest - 2026-11-25

**Today's Highlights**
A flurry of activity marks the 25th, with four issues and four PRs closed/opened today alone. The most critical technical concern remains Issue #10956, where `cacheWarming: "idle"` silently stops functioning once an extension handles `turn_end`, causing sessions to flip to `Inactive (conversation context changed)` without user interaction. Meanwhile, the Windows Terminal escape sequence flood in Issue #12133 persists as a nuisance for PowerShell users exiting pi. On the positive side, significant progress was made on MCP stream handling and model compatibility, with multiple PRs merging to fix parsing and catalog issues.

**Releases**
No new versions were published in the last 24 hours.

**Hot Issues (Top 10)**

1.  **#10956**: `cacheWarming: "idle"` stops silently. **Why it matters**: Breaks the background warming mechanism, leading to session context drops. **Reaction**: 17 comments; users report `continuationProbability` stuck at 1.0, indicating the idle trigger never fires.
2.  **#12133**: Windows Terminal mouse/Kitty input reporting garbage after exit. **Why it matters**: Floods the PowerShell prompt with SGR escape sequences, requiring a terminal restart to clear. **Reaction**: 7 comments; a persistent UX annoyance on Windows.
3.  **#12407**: gemini-4-neon stops mid-stream. **Why it matters**: New model reliability issue; root cause identified as OpenRouter normalizing `MALFORMED_RESPONSE` into OpenAI format. **Reaction**: 4 comments; zooko confirms the diagnosis.
4.  **#12224**: MCP SSE concatenates and rescans incomplete large events. **Why it matters**: Performance bottleneck in stream processing; `buffered += text` causes V8 to copy the entire string on every chunk. **Reaction**: 4 comments; Petrroll merged a fix in PR #12451.
5.  **#12399**: Registering a tool restores disabled tools from `--tools`. **Why it matters**: Security/permissions bypass; an extension switching to `read` only can be overridden by registering another tool. **Reaction**: 3 comments; leak of intended restrictions.
6.  **#12428**: MCP OAuth failed token refresh retried on every tool call. **Why it matters**: Causes repeated failed auth attempts and potential rate limiting; pi keeps the expired token. **Reaction**: 2 comments; critical for MCP stability.
7.  **#12515**: Standalone Bun binary: `undici.install()` is a no-op. **Why it matters**: Degrades HTTP dispatcher and upload diagnostics in the Bun runtime. **Reaction**: 2 comments; runtime compatibility gap.
8.  **#12516**: Bash command logging can self-match output file and exhaust TMPDIR. **Why it matters**: Severe resource leak; log grew to 24.4 GiB on a 32 GiB tmpfs, crashing pi. **Reaction**: 1 comment; high-severity stability bug.
9.  **#12513**: Compaction token estimate counts `!!` output that never reaches the model. **Why it matters**: Tokens marked `excludeFromContext: true` are filtered out by `convertToLlm()`, but `estimateTokens()` still counts them. **Reaction**: 1 comment; compaction logic error.
10. **#12514**: Treat user/custom message as turn start only after completed assistant turn. **Why it matters**: Affects how compaction decides which messages to keep as-is versus summarize; impacts context availability for the prefix model. **Reaction**: 1 comment; design clarification for turn handling.

**Key PR Progress (Top 10)**

1.  **#12520**: Fix: detect image MIME from magic bytes. **Summary**: `processImage` now uses magic byte detection for PNG, JPEG, GIF, and WebP instead of trusting declared MIME types, preventing replay rejections.
2.  **#12519**: Fix: render codemode array item constraints. **Summary**: `schemaToType` now recursively renders item constraints with an `items.` prefix, fixing validation for nested arrays.
3.  **#12518**: Fix(coding-agent): name the interrupt key in the `!` command cancel hint. **Summary**: Updates the `!` command hint to explicitly mention the default cancel key (escape/ctrl+c) instead of generic `tui.select.cancel`.
4.  **#12505**: Fix(ai): replay GitHub Copilot `reasoning_opaque` in openai-completions. **Summary**: Ensures `reasoning_opaque` deltas are captured and replayed alongside `reasoning_text`, fixing degradation in later requests.
5.  **#12451**: Fix(mcp,ai,agent,coding-agent,tui): read large streamed lines and events in linear time. **Summary**: Resolves Issue #12224 by searching from a saved offset rather than re-scanning the entire growing buffer, preventing V8 string flattening overhead.
6.  **#12502**: Fix(ai,coding-agent): report HTTP error responses to onResponse. **Summary**: Ensures `onResponse` fires for 4xx/5xx responses on SDK-based adapters, rather than being swallowed by SDK exceptions.
7.  **#12489**: Fix(ai): take Claude thinking off support from Anthropic's models.dev entry. **Summary**: Correctly marks "off" as unsupported for Opus 5.5 and Sonnet 5.5 on the models.dev catalog, fixing 400 errors.
8.  **#12495**: Fix(ai,coding-agent): add Copilot gpt-6-luna-decisions and filter classifiers by account. **Summary**: Adds `gpt-6-luna-decisions` to the model catalog and implements account-level filtering for classifier models restricted to Business/Enterprise plans.
9.  **#12494**: Fix(coding-agent): find Git Bash of git on PATH on Windows. **Summary**: Probes the full PATH for `git bash` resolution, fixing the bug where Git for Windows installed outside `ProgramFiles` was falling through to the WSL launcher.
10. **#12486**: Docs(coding-agent): fold NVIDIA RTX recipes into llama.cpp guide. **Summary**: Integrates NVIDIA RTX setup instructions and presets into the existing llama.cpp guide for centralized local model setup documentation.

**Feature Request Trends**
The issue stream reveals a strong focus on **runtime stability and runtime compatibility**.
*   **Runtime Stability**: Crashes from resource exhaustion are frequent, specifically TMPDIR exhaustion (#12516) and memory overflow in stream parsing (#12224).
*   **Model Catalog Accuracy**: There is high demand for accurate model metadata and flag propagation. Issues #12316, #12395, and #12495 all center on ensuring models like Opus 5.5 have the correct `promptCache` flags and that classifier models are filtered by actual account subscription tiers.
*   **Session & Context Management**: Issues #10956 and #12307 highlight problems with session state persistence and context management during forks or compaction, specifically regarding how `sessionId` and storage IDs are handled.

**Developer Pain Points**
Developers are facing significant friction around **Windows environment integration and model streaming**.
*   **Windows Bash Resolution**: Persistent pain point where `getShellConfig()` only checks `%ProgramFiles%`, forcing users with Git for Windows in custom paths to deal with the WSL System32 launcher (#12408, #12494).
*   **Streaming Parsing Overhead**: The `buffered += text` pattern in MCP/SSE transport (#12224) causes performance degradation as strings grow, a classic anti-pattern in high-throughput Node.js applications.
*   **Silent Session Failures**: The `cacheWarming: "idle"` failure (#10956) and the provider 503 silent session termination (#12499) leave users unaware of why their sessions are degrading or stopping, leading to difficult debugging scenarios.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-11-25.

### **Today's Highlights**
The Qwen Code team released **v1.0.0-preview.2**, introducing **Qwen4-Max** with a 1M token context window and multimodal image/video support. The update also adds user experience improvements, including a credit reset countdown and a new `/upgrade` command. Concurrently, the community is actively debugging a wave of CI failures and editor bugs ahead of the v0.28.5 release.

### **Releases**
*   **v1.0.0-preview.2**: The latest preview release adds **Qwen4-Max** to the subscription catalog, featuring a 1M context window and support for image and video inputs. It introduces a credit reset countdown and the `/upgrade` command to manage subscription plans. [Release v1.0.0-preview.2](https://github.com/QwenLM/qwen-code/releases/tag/v1.0.0-preview.2)

### **Hot Issues (Updated in last 24h)**
1.  **[#18252] Main CI failed: E2E Tests** – A transient CI failure related to cron tool registration. With 28 comments, it reflects the stability challenges of the recent main branch advances.
2.  **[#18253] Main CI failed: Managed Agent gate** – A size ratchet test failure in the Java SDK, highlighting ongoing compatibility work between the SDK and the managed agent framework.
3.  **[#18339] feat(extensions): workspace-level installation** – A feature request to support physical workspace extension installation under `.qwen/extensions`, aligning with the existing skills directory structure.
4.  **[#18334] Rewind restores wrong version** – A bug where editing a file with two different path spellings causes `/rewind` to fail to restore the original content correctly.
5.  **[#18332] Edit joins lines incorrectly** – A deletion bug where deleting text at the end of a line joins it with the next line, causing unintended data loss.
6.  **[#18331] Release Failed for v0.28.5** – The integration pipeline failed for the v0.28.5 release, blocking the tagging of the latest stable version.
7.  **[#18330] Terminal voice dictation unusable** – Reports that silence auto-stop and ASR model issues make terminal dictation difficult for normal speech patterns.
8.  **[#18327] Team message delivery failure** – A bug where `send_message` to a team leader fails to deliver as a new turn, leaving the message marked as `read:false`.
9.  **[#18318] Release Failed for v0.28.5 (Quality)** – A secondary release failure, this time in the quality gate, further delaying the v0.28.5 rollout.
10. **[#18271] Qwen Code CI dies on signal** – A provisional TUI test failure where the process dies from a signal during the render window.

### **Key PR Progress (Top 20 by comment count)**
1.  **[#18338] Redesign archived conversations** – A major UI overhaul for the Web Shell settings panel, adding search, filtering, sorting, and pagination for archived talks.
2.  **[#18335] Track files by resolved path** – A fix ensuring files edited with different path spellings (e.g., `C:\proj\a.ts` vs `/tmp/proj/a.ts`) are keyed to one entry in history, preventing `/rewind` issues.
3.  **[#18333] Keep line break on edit** – A fix preventing the `edit` tool from removing line breaks when deleting text inside a line.
4.  **[#18336] Resolve provider env references** – A startup fix expanding environment references in raw settings texts before parsing, preventing configuration rejection due to unresolved API keys.
5.  **[#18329] Add Spring Boot starter** – A new module (`qwen-managed-agent-spring-boot-starter`) allowing Java developers to easily enable existing embedded Managed Agent services.
6.  **[#18309] Fetch sparse checkout blobs with retries** – A CI reliability patch pinning the release workflow checkout to a size-bounded blob filter to prevent fetch failures.
7.  **[#18303] Park Shell approvals on version-0** – Implementation of a specific extension design stage (S8a) managing approval waits for public Shell Sessions.
8.  **[#18297] Repair reproducible main branch failures** – A CI repair preventing storage overlap guards and keeping command identities within server limits.
9.  **[#18054] Pause task creation and overload strip** – A UI feature surfacing the daemon's load-admission pause in the Web Shell sidebar with a native warning indicator.
10. **[#17902] Correct usage token accounting** – A core fix moving token usage tracking to the per-request ledger, ensuring stats reflect actual request timing rather than session summaries.

### **Feature Request Trends**
The most prominent request this period is **workspace-level extension management**. Issue #18339 explicitly requests the ability to install extensions physically within `<workspace>/.qwen/extensions/<name>/`, mirroring the existing skills installation structure. This suggests a strong demand for better offline support and per-project isolation of extensions. Additionally, there is continued focus on **editor reliability**, specifically around the `/rewind` command and text editing edge cases (path spelling, line break preservation), indicating that stability is a higher priority than new features for the current user base.

### **Developer Pain Points**
*   **Editor Fragility**: A recurring theme is the `/rewind` command failing when files are edited with inconsistent path spellings or when deleting text at line endings. These "path edge cases" are causing data loss and restoring incorrect states.
*   **Release Pipeline Instability**: The v0.28.5 release has failed multiple times across different gates (integration, quality, docker), creating a bottleneck for stable releases and frustrating contributors waiting for tagged releases.
*   **CI Transience**: Several open issues (#18252, #18253, #18271) are marked as "Provisional" CI failures, likely caused by the main branch advancing ahead of report generation, indicating a need for better CI caching or locking mechanisms during peak development periods.
*   **Multimodal Adoption**: With the introduction of Qwen4-Max's video/image capabilities, users are likely facing the learning curve and token-length implications of processing multimodal inputs in a code-assistant context.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek-TUI Community Digest
**Generated:** 2026-11-25

---

## 1. Today's Highlights

The Codewhale/DeepSeek-TUI community pushed hard toward the 0.10.5 release today, shipping a critical bugfix that resolves the structured failure cause in provider receipts and 15 additional PRs hardening security, TUI polish, and sub-agent reliability. The release cycle is now in its final hardening phase with the `0.10.5` tag cut and merged.

## 2. Releases

| Release | Status | Summary |
|---------|--------|---------|
| **0.10.5** | **Released** (tagged 2026-11-24) | Consolidated changelog, security hardening batch, TUI simplifications, and provider failure cause fixes. [#7560](https://github.com/codewhale-hq/Codewhale/pull/7560) |

*No other releases in the last 24h.*

---

## 3. Hot Issues (Top 10)

| Issue | Area | Why It Matters | Reaction |
|-------|------|----------------|----------|
| [#7328](https://github.com/codewhale-hq/Codewhale/issues/7328) | tui/install/core/state | Provider failures drop typed code and lack structured diagnostics; prose survives only in session records, never reaching the log or receipt fields. | 3 comments; tracks root cause of opaque error cards. |
| [#7434](https://github.com/codewhale-hq/Codewhale/issues/7434) | tui/sandbox/tools/core/state | Sub-agent budget stop is final; partial results clipped silently, contradicting docs that promise resumption. | 1 comment; ongoing from #7044 predecessor. |
| [#7270](https://github.com/codewhale-hq/Codewhale/issues/7270) | tui/tools/core/state | Dead-code sweep identifies ~8 items needing maintainer decision: unfinished features or deletions. | 3 comments; cleanup backlog. |
| [#7044](https://github.com/codewhale-hq/Codewhale/issues/7044) | tui/core/state | Closed predecessor to sub-agent budget/resumption discussion; stale docs reference. | Context for #7434. |
| [#7546](https://github.com/codewhale-hq/Codewhale/issues/7546) | tui/core | Adds structured `ProviderFailureCause` (`code`, `category`, `transmission`, `http_status`, `timeout_ms`, `phase`) to engine and receipts. | 0 comments; completes #7328 fix. |
| [#7553](https://github.com/codewhale-hq/Codewhale/issues/7553) | localization/tui/core/tools | Consolidates trust sources, `/rlm` entry point, and login surface into single paths. | 0 comments; 0.10.5 simplification. |
| [#7542](https://github.com/codewhale-hq/Codewhale/issues/7542) | tui/sandbox/execpolicy | Guards `PermitLocalCommand` dynamic payloads and `record_screen_x` unsplit screen; fails closed on policy bypasses. | 0 comments; security hardening. |
| [#7541](https://github.com/codewhale-hq/Codewhale/issues/7541) | tui/core | Hardens damaged-thread rebuild against read errors and newer schemas (CW-8391). | 0 comments; data integrity. |
| [#7558](https://github.com/codewhale-hq/Codewhale/issues/7558) | enhancement | DSH 0.2.2 host services, per-plugin settings, telemetry honesty, and Wave 2 runtime for 0.10.5. | 0 comments; infrastructure. |
| [#7551](https://github.com/codewhale-hq/Codewhale/issues/7551) | tui/core/cleanup | Wave 3 simplifications: removes dead `App::shell_access_editable`, YOLO compatibility shim, and unused fields. | 0 comments; dead-code removal. |

---

## 4. Key PR Progress (Top 20)

| PR | Area | Summary |
|----|------|---------|
| [#7560](https://github.com/codewhale-hq/Codewhale/pull/7560) | cleanup/release | Cuts 0.10.5 from consolidated Unreleased notes; bumps every version reference. |
| [#7561](https://github.com/codewhale-hq/Codewhale/pull/7561) | bug/tools/core | Resolves remaining R5 durability gaps, grep timeout cancel, and bounded review read defects from #7461. |
| [#7559](https://github.com/codewhale-hq/Codewhale/pull/7559) | documentation/changelog | Consolidates and deduplicates 0.10.5 Unreleased notes (11 Fixed, 6 Added, 24 duplicated bullets). |
| [#7558](https://github.com/codewhale-hq/Codewhale/pull/7558) | enhancement | DSH 0.2.2 host services, per-plugin settings, telemetry honesty, Wave 2 runtime. |
| [#7557](https://github.com/codewhale-hq/Codewhale/pull/7557) | bug/tui | Uses engine catalog effort parser; adds Ollama Cloud effort ladder; fixes model picker duplication. |
| [#7555](https://github.com/codewhale-hq/Codewhale/pull/7555) | bug/security | Hardening batch: grants, secrets, runtime probes, execpolicy deny bypasses; fail closed on persist failures. |
| [#7556](https://github.com/codewhale-hq/Codewhale/pull/7556) | core/test | Matches strict `[skills]` contract in creator-skills test; `#[serde(deny_unknown_fields)]` now rejects `creator_skills = true`. |
| [#7554](https://github.com/codewhale-hq/Codewhale/pull/7554) | bug/tui | Guards background session persistence while `dispatch_in_flight`; covers with TUI regression tests. |
| [#7553](https://github.com/codewhale-hq/Codewhale/pull/7553) | localization/tui/core/tools | One trust source, one `/rlm` entry point, one login surface (removes repo self-trust markers). |
| [#7551](https://github.com/codewhale-hq/Codewhale/pull/7551) | tui/core/cleanup | Wave 3 simplifications: removes dead `App::shell_access_editable`, YOLO shim, and unused `mut` in `app/tests.rs`. |
| [#7549](https://github.com/codewhale-hq/Codewhale/pull/7549) | tui/vendor | Syncs `codewhale-design` 5.5.0 tokens from upstream (Obsidian/Porcelain). |
| [#7548](https://github.com/codewhale-hq/Codewhale/pull/7548) | tui/runtime-api/core | Uses invalid `approval_policy` in failed config_set test; `ask` now valid `config.toml` `approval_policy`. |
| [#7546](https://github.com/codewhale-hq/Codewhale/pull/7546) | bug/core/tui | Adds structured `ProviderFailureCause` to provider receipts and turns outcomes (completes #7328). |
| [#7542](https://github.com/codewhale-hq/Codewhale/pull/7542) | bug/tui/sandbox/execpolicy | Hardens `PermitLocalCommand` dynamic payloads and `record_screen_x`; regression cases in `shell_parse_policy.rs`. |
| [#7541](https://github.com/codewhale-hq/Codewhale/pull/7541) | bug/core | Hardens damaged-thread rebuild against read errors and newer schemas (CW-8391). |
| [#7540](https://github.com/codewhale-hq/Codewhale/pull/7540) | bug/tui/runtime-api | Resolves default config path and nested TOML paths for settings schema (CW-8386). |
| [#7539](https://github.com/codewhale-hq/Codewhale/pull/7539) | bug/core | Fixes thread reconstruction race from concurrent `list_threads` and `delete_thread`. |
| [#7538](https://github.com/codewhale-hq/Codewhale/pull/7538) | bug/core | Fixes `#[no_mangle]` symbol collision in `crates/engine/src/lib.rs`. |
| [#7537](https://github.com/codewhale-hq/Codewhale/pull/7537) | bug/core | Fixes `#[export_name]` symbol collision in `crates/engine/src/lib.rs`. |

---

## 5. Feature Request Trends

The dominant theme across open and recently closed issues is **release hardening and simplification** for 0.10.5:

- **Structured error diagnostics**: Issue #7328 exposes that provider failure causes exist only as English prose in session records, never reaching structured logs or receipt fields. PR #7546 addresses this, but the community is watching for completeness.

- **Sub-agent lifecycle & budget**: #7434 highlights that budget stops are final and partial results are silently clipped, contradicting documentation promising resumption. This remains an active discussion area.

- **Dead-code & TUI simplification**: Waves 2–3 of TUI cleanup (#7551, #7553) remove legacy fields (`shell_access_editable`, YOLO shim) and consolidate trust sources/entry points, reflecting a push to reduce surface area.

- **Provider & model catalog expansion**: Multiple PRs add new compatible-host descriptors (Onomeo, Synap, UberLLM) and standardize effort/catalog parsing, indicating steady growth in supported provider integrations.

- **Security & policy hardening**: Execpolicy guards, grant fail-closed, secrets URL redaction, and TLS enforcement for webhooks are recurring focuses in the 0.10.5 cycle.

---

## 6. Developer Pain Points

- **Provider failure diagnostics are opaque**: When a provider request dies after dispatch, the cause survives only as English prose in session records and receipts, never reaching the diagnostic log or a structured receipt field. This makes automated error handling and debugging significantly harder.

- **Sub-agent budget/resumption contradiction**: The sub-agent budget stop is final, but documentation promises resumption of partial results. This disconnect between code behavior and documented behavior creates confusion and potential data loss.

- **Dead-code accumulation**: The codebase carries several unfinished features or stale items (identified in #7270) that require maintainer decisions—whether to finish or delete them. This adds cognitive load and merge complexity.

- **Config schema path resolution**: Fresh profiles report `allow_shell` as false on new threads, caused by incorrect config path resolution (`CW-8386`). The fix resolves default config path and nested TOML paths for the settings schema.

- **TUI field/stem rot**: Repeated simplification waves remove dead fields and compatibility shims, indicating the TUI has accumulated technical debt that requires ongoing pruning to maintain a clean API surface.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*