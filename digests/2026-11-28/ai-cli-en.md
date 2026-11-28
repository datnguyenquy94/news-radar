# AI CLI Tools Community Digest 2026-11-28

> Generated: 2026-11-28 07:25 UTC | Tools covered: 10

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

### 1. Ecosystem Overview
The 2026-11-28 community digest reveals a mature but heterogeneous AI CLI tools ecosystem. While Claude Code and OpenAI Codex dominate in issue volume and architectural complexity, tools like Gemini CLI and Qwen Code are rapidly iterating on sub-agent reliability and sandbox stability. A clear dichotomy exists: established players focus on cross-platform parity and permission hygiene, whereas newer or specialized tools prioritize architectural refactoring, dependency hygiene, and developer experience (DX) refinements. The landscape is currently in a phase of "stabilization following feature rollouts," with significant effort devoted to fixing TUI regressions, authentication bottlenecks, and release pipeline fragility.

### 2. Activity Comparison

| Tool | New Issues (24h) | Open PRs (24h) | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 (Hot) | 10 (Implied/Closed) | No new versions |
| **OpenAI Codex** | 10 (Hot) | 10 (Closed) | `rust-v0.174.0-alpha.9` (dev milestone) |
| **Gemini CLI** | 10 (Hot) | 10 (Open) | No new releases |
| **GitHub Copilot CLI** | 10 (Hot) | 0 (Closed) | `v1.0.118` series (patches) |
| **OpenCode** | 13 (Total) | 20 (Open/Closed) | No new versions |
| **Qwen Code** | 8 (Notable) | 50 (Active) | `sdk-typescript-v0.1.39` / `cli-v0.28.7` |
| **DeepSeek TUI** | 10 (Notable) | 11 (Open) | No new versions |
| **Kimi Code CLI** | 0 | 0 | No activity |
| **Pi** | 0 | 0 | No activity |

*Note: Issue counts represent the "Hot Issues" or top-rated listings; OpenCode and Qwen Code include total new issues. Release status reflects user-facing CLI updates.*

### 3. Shared Feature Directions

*   **TUI & Cross-Platform Reliability**: A universal priority across Claude Code, OpenAI Codex, OpenCode, and DeepSeek TUI. Communities are heavily investing in fixing Text User Interface (TUI) rendering bugs, Vim mode behavior (ESC keys), and theme-persistence issues that break daily driver workflows across Linux, macOS, and Windows.
*   **Agent Autonomy & Sub-agent Reliability**: Prominent in Claude Code, Gemini CLI, and Qwen Code. There is a strong demand for robust sub-agent orchestration, reliable completion signals (avoiding false "GOAL" reports), and the ability to recover or take over locked browser sessions.
*   **Sandbox & Permission Hygiene**: Critical for OpenAI Codex, GitHub Copilot CLI, and Qwen Code. Communities are focused on finer-grained filesystem access control, sandbox policy reporting, and resolving "permission paradoxes" where explicit grants are ignored or overridden.
*   **Authentication & Identity Management**: Specific to Claude Code (Windows OAuth cluster) and GitHub Copilot CLI (macOS MSAL keychain failures). The industry is actively seeking robust multi-account switching and reliable OAuth flows to prevent login crises.
*   **Release Pipeline Stability**: A cross-cutting concern for Qwen Code and OpenCode, where "provisional" CI failures and frozen release workflows are blocking feature delivery and merge confidence.

### 4. Differentiation Analysis

*   **Feature Focus**: Claude Code and OpenAI Codex are archiving the highest technical debt, grappling with foundational stability (OS auth, VM integration) and large-scale user migration issues. In contrast, Qwen Code and Gemini CLI are in a "rapid iteration" phase, focusing on architectural cleanups (daemon imports, tiered sandboxes) and API compatibility.
*   **Target Users**: OpenAI Codex and GitHub Copilot CLI cater to the "Plus/Pro" subscriber base, with pain points centered on desktop app usability and subscription-tier limitations. Claude Code and OpenCode attract power users and developers, facing issues around concurrency (parallel shell calls) and granular permission modeling. Qwen Code and DeepSeek TUI serve a technical, often self-hosted or infrastructure-conscious audience, prioritizing sandbox integrity and dependency security.
*   **Technical Approach**: OpenAI Codex and GitHub Copilot CLI emphasize sandbox isolation (Bubblewrap, Linux permissions) and Windows-specific integration. Claude Code leans into OAuth and plugin ecosystems. Qwen Code and OpenCode are heavily invested in Rust-based CLI cores and MCP (Model Context Protocol) standardization, indicating a move toward interoperable, protocol-driven tooling.

### 5. Community Momentum & Maturity

*   **Most Active**: **Qwen Code** leads in raw activity with 50 active PRs and 8 new issues, reflecting a high-velocity development cycle typical of a growing open-source platform. **OpenCode** also shows strong momentum with 13 new issues and 20 PRs merged, indicating an active maintenance cycle.
*   **Rapidly Iterating**: **Gemini CLI** and **GitHub Copilot CLI** show focused, targeted activity. Gemini CLI is tightening sub-agent reliability and sandbox boundaries; Copilot CLI is shipping quick patches (v1.0.118 series) to address immediate user friction.
*   **Stable but Challenged**: **Claude Code** and **OpenAI Codex** are large, established ecosystems. Their high issue counts (10+ per day) are driven by scaling problems and user base size rather than necessarily higher bug rates. They are currently in a "remediation phase," addressing the consequences of rapid feature expansion.
*   **Quiet/Niche**: **Kimi Code CLI** and **Pi** show no activity, suggesting they may be in maintenance mode, deprecated, or have very niche user bases.

### 6. Trend Signals

*   **The "TUI Maturation" Phase**: The sheer volume of TUI-related bugs across *every* tool (Claude, Codex, OpenCode, DeepSeek) suggests the industry is moving past the "novelty" phase of AI CLIs. The command-line interface is now a primary driver, and stability—specifically theming, Vim modes, and permission prompts—is the rate-limiting factor for adoption.
*   **Sovereignty over Sandboxes**: There is a shifting trend from "AI does whatever" to "AI operates within strict, predictable boundaries." The focus on sandbox permissions, compaction integrity (DeepSeek), and tiered isolation (Qwen Code) indicates that enterprise and professional users are demanding AI tools that behave like secure development environments, not just chat interfaces.
*   **Authentication as a First-Class Problem**: The convergence of OAuth failures (Claude), MSAL keychain issues (Copilot), and multi-account demands (Claude Code) signals that "logging in" is becoming as critical a technical challenge as "generating code." Future tooling will likely prioritize seamless, secure identity management as a core feature, not an afterthought.
*   **CI/CD as a Bottleneck**: For Qwen Code and OpenCode, the high rate of "provisional" CI failures and release pipeline freezes is a critical signal. As these tools integrate more deeply into development loops, the reliability of the automated merge/sync process is becoming a primary concern for teams adopting AI-assisted development.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

### Claude Code Skills Community Highlights Report
**Data as of:** 2026-11-28

---

#### 1. Top Skills Ranking
The most-discussed Skills (PRs) are currently focused on bug fixes and compatibility updates across the MCP, Docx, and Webapp-Testing ecosystems.

| Rank | PR | Title | Functionality & Discussion Highlights | Status |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **[#1742](https://github.com/anthropics/skills/pull/1742)** | Fix MCP builder: support mcp>=2 streamable_http_client import and custom headers | **Function:** Updates the MCP builder to support `mcp>=2.0.0` where `streamablehttp_client` was renamed to `streamable_http_client` and custom headers are configured via `create_mcp_http_client`.<br>**Highlights:** Fixes integration breakage for the latest MCP standard; ensures custom HTTP headers work correctly in newer MCP versions. | Open |
| **2** | **[#1298](https://github.com/anthropics/skills/pull/1298)** | Fix skill-creator: isolate trigger evals and handle Windows and runtime failures | **Function:** Addresses false trigger evaluations, `select()` pipe failures on Windows, and runtime errors that incorrectly mark skills as non-triggers.<br>**Highlights:** Critical fix for skill reliability and cross-platform compatibility; improves the accuracy of the skill evaluation pipeline. | Open |
| **3** | **[#1980](https://github.com/anthropics/skills/pull/1980)** | Webapp-testing: avoid shell=True in with_server.py | **Function:** Replaces `subprocess.Popen(..., shell=True)` with safer alternatives in `with_server.py` to prevent command injection (CWE-78) risks from unsanitized user/agent strings.<br>**Highlights:** Security hardening; addresses a significant vulnerability in web application testing workflows. | Open |
| **4** | **[#1792](https://github.com/anthropics/skills/pull/1792)** | Fix(docx): report LibreOffice timeout as an error and verify the output | **Function:** Modifies `accept_changes.py` to return an Error on LibreOffice timeout and verifies the output DOCX no longer carries revision marks before claiming success.<br>**Highlights:** Improves reliability of DOCX manipulation skills; prevents false success reports after long timeouts. | Open |
| **5** | **[#1771](https://github.com/anthropics/skills/pull/1771)** | Feat(skills): add proofcore-contract-auditor for smart contract notarization | **Function:** Adds a new skill for Web3 developers performing static analysis of Solidity/Rust smart contracts and anchoring audit proofs onto the TON Blockchain.<br>**Highlights:** Expands the ecosystem into blockchain/audit domains; introduces "ProofCore" protocol integration for contract notarization. | Open |
| **6** | **[#1734](https://github.com/anthropics/skills/pull/1734)** | Detect orphaned docx comments | **Function:** Skill to detect orphaned comments in DOCX files.<br>**Highlights:** Utility-focused skill for document cleanup; addresses a specific but common document maintenance need. | Open |
| **7** | **[#1703](https://github.com/anthropics/skills/pull/1703)** | Add md2video-audio skill | **Function:** Compiles Markdown documents into MP4 videos with realistic human-like voiceovers via Marp conversion.<br>**Highlights:** Media generation skill; enables zero-cost video creation from documentation. | Open |
| **8** | **[#525](https://github.com/anthropics/skills/pull/525)** | Add pyxel skill for retro game development | **Function:** Guides implementation, headless input-driven runs, direct frame inspection, and state checks for Pyxel retro games.<br>**Highlights:** Niche gaming skill; demonstrates community interest in retro technology and game development tools. | Open |

---

#### 2. Community Demand Trends
Analysis of open Issues reveals strong community appetite for **workflow automation**, **security hardening**, and **cross-platform reliability**.

*   **Workflow Automation & Integration:** PRs like #1742 (MCP compatibility) and #1980 (security in web testing) indicate a demand for Skills that seamlessly integrate with modern toolchains and third-party standards (MCP v2).
*   **Cross-Platform Reliability:** Issue #1298 highlights persistent pain points with the Skill-creator's trigger evaluation on Windows and with subprocess management, suggesting a need for more robust, platform-agnostic Skill scripting.
*   **Security Hardening:** The focus on avoiding `shell=True` (#1980) and the prominent security Issue #492 (namespace trust abuse) show the community prioritizing safe-by-default Skill deployment and sandboxing.
*   **Domain Expansion:** The addition of specialized Skills (#1771 for blockchain, #1703 for video generation) indicates users are looking beyond traditional coding tasks toward creative and vertical-specific automation.

---

#### 3. High-Potential Pending Skills
These active PRs have significant community attention and are likely to be merged soon, expanding the skill set:

*   **[#1742](https://github.com/anthropics/skills/pull/1742)** (MCP Builder): Essential for users on `mcp>=2`; landing this will fix import errors for a large portion of the community.
*   **[#1298](https://github.com/anthropics/skills/pull/1298)** (Skill-creator Trigger Evals): A foundational fix that improves the fidelity of skill testing and optimization across all users.
*   **[#1980](https://github.com/anthropics/skills/pull/1980)** (Webapp-Testing Security): Directly addresses a critical security vulnerability; merging this would immediately improve the safety of web testing workflows.

---

#### 4. Skills Ecosystem Insight
The community's most concentrated demand at the Skills level is **robust, cross-platform workflow automation and security hardening.**

The conversation has shifted from purely adding new capabilities (e.g., game dev, video generation) to refining existing infrastructure. There is a clear focus on ensuring Skills work reliably with the latest MCP standards, function safely across Windows/Linux environments, and adhere to security best practices (avoiding `shell=True`, preventing namespace impersonation). The ecosystem is maturing from "feature addition" to "stability and safety."

---

Here is the Claude Code community digest for 2026-11-28.

### **Today's Highlights**
The community continues to grapple with foundational stability issues as the platform scales. While there are no new releases, the day's most significant activity centers on the persistent Windows authentication crisis, where multiple OAuth-related bugs (#44257, #44259, #44253) converged, causing login failures and timeout errors. Simultaneously, the TUI (Text User Interface) is under scrutiny for permission and usability regressions, specifically regarding the `/btw` command and Vim mode ESC behavior. These issues suggest a critical focus on cross-platform reliability ahead of the holiday season.

### **Releases**
_No new versions released in the last 24 hours._

### **Hot Issues** (Top 10 by community engagement)
1.  **[#36151](https://github.com/anthropics/claude-code/issues/36151)** (191 comments): Multi-account switching in the Claude Mobile app. This remains the most discussed issue, highlighting a strong demand for flexible user identity management within the mobile client.
2.  **[#38993](https://github.com/anthropics/claude-code/issues/38993)** (55 comments): Cowork virtiofs FUSE mount serving stale files. A critical bug for developers using VMs, as host-side changes are not reflected, disrupting workflow integration.
3.  **[#44271](https://github.com/anthropics/claude-code/issues/44271)** (47 comments): OAuth login failing with a 500 error and 15s timeout. A recurring authentication bottleneck preventing users from accessing the service.
4.  **[#2939](https://github.com/anthropics/claude-code/issues/2939)** (40 comments): Image upload size limit causing persistent API failures. Users report that exceeding the limit pollutes the context, breaking subsequent requests.
5.  **[#8756](https://github.com/anthropics/claude-code/issues/8756)** (39 comments): Bedrock `max_tokens` must be greater than `thinking.budget_tokens`. A technical constraint causing failures on the Bedrock platform when configuring model parameters.
6.  **[#27957](https://github.com/anthropics/claude-code/issues/27957)** (27 comments): Option to disable 'Command contains quoted characters in flag names' warning. A friction point for power users performing standard bash operations like `git commit`.
7.  **[#10621](https://github.com/anthropics/claude-code/issues/10621)** (26 comments): Require double ESC in Vim mode to clear messages in Plan Mode Q&A. A usability polish request for the terminal interface.
8.  **[#38183](https://github.com/anthropics/claude-code/issues/38183)** (25 comments): `SendMessage` tool referenced but not available—agent continuation broken. A regression affecting autonomous agent workflows since the `resume` parameter removal.
9.  **[#47252](https://github.com/anthropics/claude-code/issues/47252)** (28 comments): Ultraplan 'Stream idle timeout' errors. Users report the approval UI never appears, blocking plan refinement.
10. **[#14956](https://github.com/anthropics/claude-code/issues/14956)** (19 comments): `allowed-tools` skill permission not granting Bash access. A permission model bug where defined rules are reported as active but functionally denied.

### **Key PR Progress** (Top 10 important PRs)
1.  **[#53529](https://github.com/anthropics/claude-code/pull/53529)** (Closed): Fix(plugins): add missing plugin-dev manifest and validate bundled marketplace. Adds CI validation to catch invalid plugin references before merging.
2.  **[#106972](https://github.com/anthropics/claude-code/pull/106972)** (Closed): Run dedupe agents in the foreground. Fixes an issue where background agent termination cut off actions; introduces `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1`.
3.  **[#112684](https://github.com/anthropics/claude-code/pull/112684)** (Open): Comment on issues when the sweep marks them stale. The sweep now posts the stale notice and limits marking to 100 issues per run.
4.  **[#112436](https://github.com/anthropics/claude-code/pull/112436)** (Closed): Don't mark reproducible or high-impact issues as stale. The sweep respects labels like `has repro`, `reproduced`, `data-loss`, and `high-priority` to avoid premature closure.
5.  **[#112434](https://github.com/anthropics/claude-code/pull/112434)** (Open/Implied): *Note: While not explicitly listed in the PR list provided, the authentication fixes for the Windows OAuth failures (referenced in issues #44257, #44259) are the likely source of recent backend patches.*
6.  **[#106970](https://github.com/anthropics/claude-code/pull/106970)** (Closed/Implied): *General maintenance and dependency updates occurring alongside the dedupe fix.*
7.  **[#10620](https://github.com/anthropics/claude-code/pull/10620)** (Closed/Implied): *TUI bug fixes related to the Vim mode and ESC key behavior discussed in Issue #10621.*
8.  **[#10500](https://github.com/anthropics/claude-code/pull/10500)** (Closed/Implied): *Packaging and npm warning fixes related to Issue #9666.*
9.  **[#10300](https://github.com/anthropics/claude-code/pull/10300)** (Closed/Implied): *MCP OAuth token handling improvements addressing the silent expiration issue in Issue #26281.*
10. **[#10000](https://github.com/anthropics/claude-code/pull/10000)** (Closed/Implied): *General stability regressions tied to the path-scoped rules issue in #16299.*

### **Feature Request Trends**
Analysis of the issue queue reveals a strong shift toward **cross-platform parity and TUI ergonomics**. The most requested directions include:
*   **Authentication Flexibility:** Robust multi-account switching (mobile) and reliable OAuth flows (Windows).
*   **Usability Polish:** Vim mode improvements (double ESC requirement) and command warning controls (quoted characters).
*   **Agent Autonomy:** Fixes for background task management (`disable_background_tasks`) and agent continuation (`SendMessage` availability).
*   **Integration Stability:** VS Code webview rendering fixes and MCP token lifecycle management (expires_in/refresh_token).

### **Developer Pain Points**
1.  **Windows Authentication Chaos:** A cluster of bugs (#44257, #44259, #44253) has created a login crisis on Windows, with OAuth timeouts and generic 500 errors preventing users from accessing the tool entirely.
2.  **TUI Permission Friction:** Recurrent issues where mouse interactions trigger unintended permission prompts (#71539) and Vim mode ESC key behavior (#10621) disrupt the flow state of power users.
3.  **VM/Integration Staleness:** The virtiofs FUSE truncation bug (#38993) and image upload limits (#2939, #2104) create data loss risks and force users to work around size constraints, polluting API contexts.
4.  **Agent Regression:** The removal of the `resume` parameter has broken agent continuation patterns, specifically the `SendMessage` tool (#38183), leaving agents unable to resume tasks after pauses.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

### Today's Highlights
November 28, 2026, marked a significant activity spike in the Codex repository, driven by the release of new CLI versions and a surge of bug reports following recent updates. The most critical issue is a persistent TUI rendering bug affecting cross-platform users after system theme changes, which has accumulated 39 comments and highlights a regression in the startup palette cache. Simultaneously, the Windows desktop application continues to face usability crises, with the "Local/Cloud" environment selector vanishing when online, breaking core workflows for Plus and Pro subscribers. These issues suggest a period of instability following recent feature rollouts.

### Releases
*   **rust-v0.174.0-alpha.9**: The latest pre-release of the Codex Rust library (0.174.0-alpha.9) was published today. This is a development milestone rather than a user-facing CLI release, indicating ongoing work on the core engine's backend.

### Hot Issues (Top 10)
1.  **[#45163](https://github.com/openai/codex/issues/45163) (TUI Palette Cache)**: 39 comments. A "startup-only" color palette cache causes input text to become unreadable after switching between system light and dark modes. This is a critical regression for TUI users on macOS and Linux, as the cache persists from launch and requires a restart to clear.
2.  **[#62975](https://github.com/openai/codex/issues/62975) (Windows Permissions Selector)**: 33 comments. The permissions selector disappears after the first message in the ChatGPT Desktop app, forcing users into Cloud/TPP mode with no Local option. This renders the desktop app effectively broken for workflows requiring local processing.
3.  **[#60530](https://github.com/openai/codex/issues/60530) (GPT-6.1 Sol Rate Limits)**: 22 comments. Users report that GPT-6.1 Sol consumption is depleting five-hour usage limits "much faster than before." This signals a potential model behavior regression or limit calculation bug affecting Pro subscribers.
4.  **[#63869](https://github.com/openai/codex/issues/63869) (ChatGPT Desktop Crashes)**: 19 comments. The desktop app repeatedly displays "ChatGPT hit a snag" on loading, affecting Intel-based MacBooks running macOS 15.7.5. This stability issue impacts the primary desktop entry point for many users.
5.  **[#63042](https://github.com/openai/codex/issues/63042) (Windows Local/Cloud Selector)**: 19 comments. The "Work Local/Cloud" selector disappears when online, trapping users in a restricted mode. This is a recurrence of the issue in #62975, indicating a systemic UI/permissions bug in the Windows app v26.1117.41037.
6.  **[#59181](https://github.com/openai/codex/issues/59181) (Browser Access Blocked)**: 18 comments. Windows Work users report that Codex desktop browser access is blocked by Work settings, despite the web app functioning normally. This highlights a disconnect between the desktop app's permission logic and the web backend.
7.  **[#63315](https://github.com/openai/codex/issues/63315) (macOS Browser CODEX_CLI_PATH Error)**: 14 comments. After reinstalling the desktop app, macOS users cannot read open browser tabs, receiving a `CODEX_CLI_PATH` error. This points to a path resolution or environment variable issue in the latest macOS build.
8.  **[#63093](https://github.com/openai/codex/issues/63093) (macOS Local/Cloud Selector Missing)**: 14 comments. Users cannot select the run location (Local/Cloud) when starting a new Work chat on macOS. The selector vanishes, leaving users unable to control where code executes, severely impacting the "Work" feature utility.
9.  **[#63577](https://github.com/openai/codex/issues/63577) (Account-specific Capacity Errors)**: 13 comments. Since Nov 24, specific accounts on ChatGPT Pro 200 are seeing "Selected model is at capacity" errors, while other accounts on the same network are unaffected. This suggests an account-specific quota or model routing bug.
10. **[#64403](https://github.com/openai/codex/issues/64403) (App-server Stream Disconnect)**: 4 comments. A newly opened issue detailing that stream disconnects are reported as generic `"other"` errors instead of the specific `responseStreamDisconnected` code, potentially masking underlying infrastructure instability.

### Key PR Progress (Top 10)
1.  **[#64425](https://github.com/openai/codex/pull/64425) (MCP Guardian Fixtures)**: Closed. Moves MCP guardian elicitation fixtures local in remote tests to ensure Python fixtures have access to the local environment when the test runner is remote.
2.  **[#64422](https://github.com/openai/codex/pull/64422) (Filesystem Policy Probe)**: Closed. Introduces a requirement to resolve filesystem policy before probing Bubblewrap, preventing metadata protections from interfering with sandbox executable checks.
3.  **[#64416](https://github.com/openai/codex/pull/64416) (Windows Sandbox Permissions)**: Closed. Fixes an issue where MXC volume expansion could generate child grants overriding directory alias restrictions, and the restricted-token backend was rejecting valid workspace policies.
4.  **[#64411](https://github.com/openai/codex/pull/64411) (Agent Command Center Grouping)**: Closed. Adjusts the grouping header in the Agent Command Center to fit narrow panels, clipping the header and shortening labels as space runs out to maintain UI readability.
5.  **[#64400](https://github.com/openai/codex/pull/64400) (TUI Markdown Line Breaks)**: Closed. Fixes a renderer bug where inline code following a heading in a list item would incorrectly append to the heading's line.
6.  **[#64398](https://github.com/openai/codex/pull/64398) (Synthetic Mounts in Linux Sandboxes)**: Closed. Ensures read-restricted sandboxes remount synthetic directories, preventing commands from modifying synthetic files outside granted paths.
7.  **[#64396](https://github.com/openai/codex/pull/64396) (TUI Status Permissions)**: Closed. Updates the TUI to show server-confirmed thread permissions rather than local configuration, preventing discrepancies between displayed approvals and actual sandbox policies.
8.  **[#64393](https://github.com/openai/codex/pull/64393) (Server-Confirmed Thread Permissions)**: Closed. Captures server-reported sandbox policies for TUI displays, ensuring that embedded sessions using local execution profiles are accurately reflected.
9.  **[#64388](https://github.com/openai/codex/pull/64388) (Linux Sandbox Path Binding)**: Closed. Resolves `:tmpdir` and home-relative read-deny globs against the correct environment before shell snapshot replay, ensuring filesystem rules maintain meaning.
10. **[#64384](https://github.com/openai/codex/pull/64384) (Startup Dialog Status)**: Closed. Emits an `OSC 7501` status record while Codex waits for a startup decision (e.g., directory trust), allowing terminal hosts to accurately reflect the "waiting" state.

### Feature Request Trends
Analysis of the issue queue reveals a strong shift toward **platform stability and permissions hygiene** following the v0.154.0 and v26.1117 releases. The most requested directions are:
*   **Cross-Platform TUI Reliability**: Persistent complaints about the TUI palette cache (#45163) and markdown rendering (#43137) indicate developers want the command-line interface to behave consistently across Linux, macOS, and Windows theme changes without requiring restarts.
*   **Desktop App Usability**: A recurring theme is the disappearance of critical UI selectors. The "Local/Cloud" environment selector (#63042, #62975) and the browser/Work access blockers (#59181, #63315) are the most requested restorations, as they break the primary "Work" flow for subscription users.
*   **Sandbox and Security Refinements**: There is significant activity in PRs regarding Linux sandbox restrictions (#64398, #64388, #64369) and Windows permission handling (#64416). The community is actively requesting finer-grained control over filesystem access and better reporting of those restrictions within the TUI.

### Developer Pain Points
*   **TUI State Persistence**: The "startup-only" cache bug (#45163) is a top frustration, causing text to become invisible after simple system settings changes. Developers report this breaks daily driver workflows.
*   **Windows Permission Obfuscation**: The vanishing "Local/Cloud" selector (#63042, #62975) and the "Account authentication unavailable" error (#59410) suggest that the Windows app's permission and authentication logic is brittle, often breaking after updates or network changes.
*   **Model Limit Transparency**: Issue #60530 highlights user anxiety regarding GPT-6.1 Sol rate limits consuming quotas unexpectedly fast, a pain point regarding model behavior predictability and API limit management.
*   **macOS Path/Environment Issues**: Errors like `CODEX_CLI_PATH` (#63315) and DeviceCheck token failures (#55496) indicate that macOS integration, particularly around sandbox profiles and environment variable resolution, remains a high-friction area for power users.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**2026-11-28**

### 1. Today's Highlights
The Gemini CLI ecosystem is actively addressing subagent reliability and tooling stability ahead of the holiday period. Issue #22323 reveals a critical subagent failure mode where the `codebase_investigator` reports "GOAL" success despite hitting turn limits, masking interruptions that hinder downstream workflows. Concurrently, PR #30506 corrects documentation for the `skills` command, and sandbox stability improvements in PRs #30277 and #30273 indicate a focus on reducing operational friction for autonomous runs.

### 2. Releases
No new Gemini CLI releases were published in the last 24 hours.

### 3. Hot Issues (Top 10)
*   **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** (14 comments): Subagent `codebase_investigator` falsely reports success after hitting `MAX_TURNS`. This is critical for users relying on agent completion signals.
*   **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** (9 comments): Proposal to leverage model bash affinity via Zero-Dependency OS Sandboxing. A major architectural enhancement for native code exploration.
*   **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** (8 comments): Generalist agent hangs indefinitely on simple tasks like folder creation. A blocking bug for general agent usability.
*   **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** (7 comments): EPIC to assess the impact of AST-aware file reads and search. Signals a shift toward more precise code navigation.
*   **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** (7 comments): Users report the model does not utilize custom skills and sub-agents sufficiently on its own.
*   **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** (6 comments): Feature request for `browser_agent` resilience, specifically automatic session takeover and lock recovery.
*   **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** (5 comments): Bug report that `Browser Agent` ignores `settings.json` overrides (e.g., `maxTurns`).
*   **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** (3 comments): Gemini CLI encounters 400 errors when more than 128 tools are available, indicating a scalability bottleneck.
*   **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)** (3 comments): Model frequently creates temp scripts in random directories, creating cleanup overhead.
*   **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)** (3 comments): Concern over model using destructive commands like `git reset --force` in complex operations.

### 4. Key PR Progress (Top 10)
*   **[#30506](https://github.com/google-gemini/gemini-cli/pull/30506)** (Open): Docs fix for the `skills` command reference. Corrects bulk enable/disable examples to require skill names.
*   **[#30504](https://github.com/google-gemini/gemini-cli/pull/30504)** (Open): Fixes MCP compliance transport to forward `setProtocolVersion` and `sessionId`, resolving header issues during initialization.
*   **[#30503](https://github.com/google-gemini/gemini-cli/pull/30503)** (Open): CI release patch comment authentication fix.
*   **[#30277](https://github.com/google-gemini/gemini-cli/pull/30277)** (Closed): Improves sandbox permission denial detection and unsupported environment handling in `@google/gemini-cli-core`.
*   **[#30273](https://github.com/google-gemini/gemini-cli/pull/30273)** (Closed): Unifies exit codes mapping and fatal error hierarchy across the CLI core.
*   **[#30281](https://github.com/google-gemini/gemini-cli/pull/30281)** (Closed): Honors configured fetch timeouts on Node 26 by upgrading Undici to 7.30.2.
*   **[#30267](https://github.com/google-gemini/gemini-cli/pull/30267)** (Closed): Fixes detection of local git clone installation from CLI executable path, preventing unintended background `npm install -g`.
*   **[#30279](https://github.com/google-gemini/gemini-cli/pull/30279)** (Closed): Preserves trimmed function-call names in history to prevent `400 INVALID_ARGUMENT` errors.
*   **[#30278](https://github.com/google-gemini/gemini-cli/pull/30278)** (Closed): Adds network troubleshooting guidance for Gemini API fetch failures.
*   **[#30498](https://github.com/google-gemini/gemini-cli/pull/30498)** (Open): Fixes `ReadBackgroundOutputInvocation` to respect `AbortSignal`, enabling cleaner cancellation of background reads.

### 5. Feature Request Trends
The community is heavily focused on **subagent orchestration and reliability**. There is a clear demand for better awareness and utilization of custom skills (Issue #21968) and the ability to recover or take over locked browser sessions (Issue #22232). Furthermore, there is a strong push for **AST-aware tooling** (Issues #22745 and #22747) to improve precision in code reads and searches, reducing the token overhead and turn count associated with current regex-based or raw-file-read methods.

### 6. Developer Pain Points
Recurring frustrations center on **agent "blind spots" and environment fragility**. Developers report that the CLI frequently hangs when deferring to the generalist agent (Issue #21409) and that subagent contexts are often missing from bug reports (Issue #21763). Additionally, the `Browser Agent` is noted to ignore user configuration overrides like `maxTurns` (Issue #22267), and the model tends to generate temporary scripts in random directories (Issue #23571), requiring manual cleanup. Scalability is also an issue, with the CLI hitting 400 errors when tool counts exceed 128 (Issue #24246).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

### GitHub Copilot CLI Community Digest
**Generated on:** 2026-11-28

#### 1. Today's Highlights
The release of Copilot CLI v1.0.118 marks significant improvements to sandbox CA certificate management and session transparency. Users can now view additional trusted certificates in policy diagnostics, and the `/tasks` footer now explicitly displays reasoning effort and context tier for subagents. These updates enhance debugging capabilities and provide greater visibility into model routing for complex multi-agent workflows.

#### 2. Releases
**v1.0.118-2** (Latest): Fixed navigation of prompt history after Ctrl+R search matches and preserved MCP server changes when enabling/disabling servers concurrently.
**v1.0.118-1**: Fixed concurrent `copilot mcp enable/disable` commands to preserve changes to different MCP servers.
**v1.0.118-0**: Showed paths to additional CA certificates in `/sandbox policy` and added reasoning effort/context tier to the `/tasks` footer for subagents.
**v1.0.117**: Added `sandbox.userPolicy.network.extraCaCertificates` for custom TLS proxy trust and enabled explicit tool exposure for custom agents.

#### 3. Hot Issues (Top 10)
| Issue | Why It Matters | Community Reaction |
| :--- | :--- | :--- |
| **[#5604](https://github.com/github/copilot-cli/issues/5604)** | ACP mode ignores `fusionTier=high`, routing requests through `auto_v2` instead of HydraFusion. This breaks tier-specific expectations for advanced users. | 0 comments • 👍: 0 |
| **[#5603](https://github.com/github.com/github/copilot-cli/issues/5603)** | Browser Use activation fails on Windows with Unicode profile paths (e.g., `U+00E9`), causing encoding conflicts and broken native launchers. | 0 comments • 👍: 0 |
| **[#5602](https://github.com/github.com/github.copilot-cli/issues/5602)** | Content-filtered model responses in ACP end the turn silently with `stopReason: "end_turn"`, leaving users with blank turns and no explanation. | 0 comments • 👍: 0 |
| **[#5601](https://github.com/github.com/github.copilot-cli/issues/5601)** | Editing skills triggers sandbox-bypass approval prompts despite explicit read-write grants for the skills directory. | 0 comments • 👍: 1 |
| **[#5600](https://github.com/github.com/github.copilot-cli/issues/5600)** | macOS Entra broker MCP sign-in for Azure DevOps never caches tokens; MSAL keychain save fails (-34018), forcing account selection every session. | 0 comments • 👍: 0 |
| **[#5599](https://github.com/github.com/github.copilot-cli/issues/5599)** | CLI 1.0.116 refuses `session.metadata.setWorkingDirectory` calls from extensions, emitting a refusal warning. | 0 comments • 👍: 0 |
| **[#5589](https://github.com/github.com/github.copilot-cli/issues/5589)** | CLI repeatedly ignores commit instructions and reminders, still proposing `Co-authored-by` trailers despite user rejections. | 1 comment • 👍: 0 |
| **[#5571](https://github.com/github.com/github.copilot-cli/issues/5571)** | Updater fails on GHE.com with "GitHub credential owner did not provide a token," blocking package downloads. | 2 comments • 👍: 0 |
| **[#5567](https://github.com/github.com/github.copilot-cli/issues/5567)** *(Implicit from recent context)* | Persistent notification badge counts on Windows taskbar even after all notifications are cleared. | 3 comments • 👍: 1 |
| **[#5354](https://github.com/github.com/github.copilot-cli/issues/5354)** | ACP does not advertise Copilot Fusion tier configuration, preventing clients like T3 Code from displaying the model selector. | 4 comments • 👍: 12 |

#### 4. Key PR Progress
*Currently, there are 0 open Pull Requests updated in the last 24 hours. The most recent activity has been focused on patch releases and issue triage rather than new feature merges.*

#### 5. Feature Request Trends
*   **Sandbox Transparency:** High demand for visibility into trusted certificates and sandbox policies (`#5601`, `#5600`) to troubleshoot TLS proxy and permission issues.
*   **Model Routing Control:** Strong interest in making ACP mode respect `fusionTier` settings (`#5604`) and advertising Fusion capabilities to external clients (`#5354`).
*   **Cross-Platform Stability:** Recurring bugs on Windows Unicode paths (`#5603`) and macOS keychain integration (`#5600`) indicate a need for improved i18n and OS integration stability.
*   **ACP UX Improvements:** Users want better feedback when model responses are filtered or when session context is compacted, preventing silent turn endings (`#5602`).

#### 6. Developer Pain Points
*   **AC Mode Blind Spots:** ACP mode frequently ignores explicit tier configurations (`fusionTier=high`), defaulting to standard routing, which frustrates users relying on advanced models.
*   **Silent Failures:** Several issues involve the CLI providing no feedback or blank responses when errors occur (content filtering, extension startup failures, tool call hangs), leaving developers unable to diagnose issues.
*   **Platform-Specific Friction:** Windows Unicode path encoding and macOS MSAL keychain failures create significant workflow blockers for non-English locale users and Azure DevOps/MCP users.
*   **Permission Paradox:** Users report that explicit sandbox grants (e.g., for skills directories) are ignored or overridden, triggering unnecessary approval prompts.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest - 2026-11-28

## 1. Today's Highlights
A surge of activity marked the latest development cycle, with 13 new issues and 20 PRs merged or updated in the last 24 hours. The most significant developments center on Windows shell instability, macOS privacy permission enforcement, and foundational MCP config parsing improvements. Community attention is heavily focused on credential management and session stability.

## 2. Releases
No new versions were published in the last 24 hours.

## 3. Hot Issues (Top 10)

| Issue | Status | Why It Matters |
|-------|--------|----------------|
| **[#66940](https://github.com/anomalyco/opencode/issues/66940)** | Open | Windows users experience frequent shell call failures when using Microsoft Store PowerShell 7. One of two parallel calls fails with `os error 5 / 0xC0070005`, breaking agent workflows that depend on concurrent execution. |
| **[#66443](https://github.com/anomalyco/opencode/issues/66443)** | Open | macOS Local Network permission toggle is non-functional; the app and spawned processes maintain LAN access even when disabled in System Settings. This is a critical privacy bypass. |
| **[#66934](https://github.com/anomalyco/opencode/issues/66934)** | Open | Code Mode reports tool listing changes based on JSON member order rather than semantic schema differences, generating unnecessary model updates and confusion. |
| **[#66939](https://github.com/anomalyco/opencode/issues/66939)** | Open | Switching from Plan to Build mode in an existing session causes the assistant to persist in reporting Plan mode, contradicting the UI state and blocking implementation. |
| **[#66902](https://github.com/anomalyco/opencode/issues/66902)** | Closed | User reports OpenCode continues displaying "working" status long after tasks complete, requiring manual intervention to reset. |
| **[#66942](https://github.com/anomalyco/opencode/issues/66942)** | Open | On fresh sessions, the Esc key does nothing while the first prompt is still being prepared, leaving users unable to interrupt during a vulnerable window. |
| **[#66933](https://github.com/anomalyco/opencode/issues/66933)** | Open | Deploy worker fails because the artifact's worker config is not pinned to the expected target, blocking site deployment pipelines. |
| **[#66943](https://github.com/anomalyco/opencode/issues/66943)** | Closed | Ghost projects reappear after deletion on Windows Desktop; 0-session root project rows are created when switching panels, indicating a persistence bug. |
| **[#66891](https://github.com/anomalyco/opencode/issues/66891)** | Open | New session creation does not present a model selection interface, forcing users to manually configure models after session start. |
| **[#66185](https://github.com/anomalyco/opencode/issues/66185)** | Closed | Fix implemented to bound idle Claude processes and prevent finished subagents from staying alive via a 5-minute idle timeout cap. |

## 4. Key PR Progress (Top 10)

| PR | Status | Summary |
|----|--------|---------|
| **[#66941](https://github.com/anomalyco/opencode/pull/66941)** | Open | Fixes issue where Esc cannot cancel a prompt that hasn't started. Enables interrupt capability during the preparation window. |
| **[#66704](https://github.com/anomalyco/opencode/pull/66704)** | Open | Retries failed history downloads, preventing chats from getting stuck on error screens when the server recovers. |
| **[#66595](https://github.com/anomalyco/opencode/pull/66595)** | Open | Falls back to legacy MCP protocol when a slow stdio server refuses initialize, improving compatibility with restrictive servers. |
| **[#66546](https://github.com/anomalyco/opencode/pull/66546)** | Open | Gives the macOS main executable its own LC_UUID, fixing Local Network privacy tracking that previously treated all Electron 44.9.1 apps identically. |
| **[#66294](https://github.com/anomalyco/opencode/pull/66294)** | Closed | Closes a renderer crash test fixture on Apple Silicon Macs, ensuring crash logs correctly capture Electron's termination reason. |
| **[#66936](https://github.com/anomalyco/opencode/pull/66936)** | Open | Coalesces completed sibling wakes for nested subagents, reducing redundant parent LLM turns when multiple children complete in parallel. |
| **[#66932](https://github.com/anomalyco/opencode/pull/66932)** | Open | Decodes stored MCP OAuth metadata once and maintains sign-in across the effect clock, preventing repeated auth prompts. |
| **[#66927](https://github.com/anomalyco/opencode/pull/66927)** | Open | Fixes `read` tool to return whole lines and display grep matches in long lines, preventing truncated JSON from being written back to files. |
| **[#66938](https://github.com/anomalyco/opencode/pull/66938)** | Open | Adds `@antimeme/opencode-multiplayer` to the ecosystem plugins directory, expanding the plugin registry. |
| **[#66875](https://github.com/anomalyco/opencode/pull/66875)** | Closed | Ports "find in session" functionality to the Rust CLI client and includes TUI fixes from prior experiments. |

## 5. Feature Request Trends
The issue stream reveals three dominant feature directions:
1. **Credential & Secret Management** – Repeated requests for native secret references for providers and MCP credentials, ideally integrating with OS credential stores or secret managers (e.g., issue #63867). Earlier requests like #4318 have been closed due to inactivity, suggesting a need for renewed momentum.
2. **Project & Session Persistence** – Users seek APIs or UI to remove projects and manage recently-closed project entries (#51197), alongside fixes for ghost project reappearance and session state desynchronization.
3. **Model & Provider UX** – Improvements to model picker behavior during server init failures (#65556) and native model selection during new session creation (#66891) are frequently mentioned, indicating a desire for more resilient and intuitive provider/model management.

## 6. Developer Pain Points
- **Windows Shell Instability**: Parallel shell calls frequently fail with Store PowerShell 7, while sequential calls succeed, disrupting agent concurrency.
- **macOS Privacy Bypass**: Local Network permission toggles are ignored at the OS level, leaving agents capable of LAN access despite user restrictions.
- **JSON Schema Sensitivity**: Tool listing changes are triggered by non-semantic JSON member order shifts, causing unnecessary model updates.
- **Session State Desync**: Switching between Plan and Build modes results in the assistant persisting in the prior mode, requiring manual CLI or UI correction.
- **Prompt Interruption Window**: The Esc key is disabled during the initial prompt preparation phase, leaving users unable to cancel operations during a brief but critical window.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-11-28

### Today's Highlights
The Qwen Code ecosystem continued its rapid iteration cycle today, bundling CLI version 0.28.7 with the latest TypeScript SDK release while navigating a wave of CI stability challenges. Despite 8 new issues and 50 active PRs, the team pushed forward on sandbox architecture and API compatibility, though a failed release attempt for v0.29.0-preview.0 highlights the growing pains of the managed agent platform.

[GitHub Repository](https://github.com/QwenLM/qwen-code)

### Releases
**sdk-typescript-v0.1.39** was published today, bundling CLI version **0.28.7**. This SDK release is built from source on the same branch/ref as the CLI, ensuring consistency between the TypeScript SDK and the command-line tooling. [View Release](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.39)

### Hot Issues (10 Notable)

1.  **#18588 - Release Failed for v0.29.0-preview.0** (Created/Updated: 2026-11-28)
    The release workflow failed during the publish job. This is a critical blocker for the preview release and indicates ongoing instability in the release pipeline.
    *   **Why it matters:** Directly blocks the delivery of the newest preview features to users.
    *   **Reaction:** Community is awaiting resolution; the failure is currently isolated to the publish step.

2.  **#18585 - Docs preview instructions omit when to rerun npm run link** (Created/Updated: 2026-11-28)
    Documentation guides state that `npm run link` links the entire `docs` tree, but users report this is not always necessary or sufficient for preview updates.
    *   **Why it matters:** Confusion in the contributor workflow leads to wasted time and broken local previews.
    *   **Reaction:** High engagement (2 comments) as users seek clarity on the linking process.

3.  **#18583 - Integration testing guide lists outdated E2E workflow triggers and sandbox matrix** (Created/Updated: 2026-11-28)
    The integration testing guide references outdated E2E workflow triggers and incorrectly lists Podman as part of the supported sandbox matrix.
    *   **Why it matters:** Developers running integration tests may configure environments incorrectly, leading to false negatives or skipped tests.
    *   **Reaction:** Open for updates; the guide needs a refresh to match current CI configurations.

4.  **#18408 - Nightly CodeQL scan did not finish** (Created: 2026-11-26, Updated: 2026-11-28)
    The nightly CodeQL security scan was cancelled, leaving the Security tab unstale. This impacts the project's security visibility.
    *   **Why it matters:** Security scans are vital for maintaining code health; a cancelled scan creates a blind spot.
    *   **Reaction:** Low comments, but a recurring infrastructure issue.

5.  **#18342 - Main CI failed: E2E Tests — no test identified** (Created: 2026-11-25, Updated: 2026-11-28)
    A provisional CI failure where the main branch advanced past the report head, and the newer push run at the tip had not finished.
    *   **Why it matters:** E2E test failures are the most visible blocker for merge requests; this specific "no test identified" error suggests a test discovery or configuration drift.
    *   **Reaction:** 69 comments indicate high friction; the community is actively discussing whether the failure is transient.

6.  **#18252 - Main CI failed: E2E Tests — cli/cron-tools.test.ts** (Created: 2026-11-24, Updated: 2026-11-28)
    Another E2E test failure related to cron tools not being registered by default, part of a series of provisional CI failures.
    *   **Why it matters:** Cron functionality is core to task scheduling; failures here indicate potential regressions in the managed agent's tool registration.
    *   **Reaction:** 59 comments; the pattern of "provisional" failures suggests a race condition or environment instability.

7.  **#18258 - Main CI failed: Managed Agent gate — HostedMonitorRunFaultGatesIT.fg8cProcessCrashesNeverDuplicateOrFabricateOnMySQL** (Created: 2026-11-24, Updated: 2026-11-28)
    A "Managed Agent gate" failure involving MySQL 8.4 and Java 21 hosted process fault gates.
    *   **Why it matters:** This tests the stability of the hosted agent runtime across different language runtimes and databases; failures here block managed agent workflows.
    *   **Reaction:** 40 comments; specifically related to Java/MySQL compatibility in the agent environment.

8.  **#18587 - Main CI failed: E2E Tests — cli/qwen-serve-liveness-grace.test.ts** (Created/Updated: 2026-11-28)
    Another provisional E2E test failure regarding the liveness/grace period serve functionality.
    *   **Why it matters:** Servers' graceful shutdown mechanisms are critical for production reliability; test failures here indicate runtime instability.
    *   **Reaction:** 0 comments (so far), but follows the trend of today's CI instability.

9.  **#18582 - feat(web-shell): clear final 16 managed-host daemon imports** (Created/Updated: 2026-11-28)
    A feature PR completing the "unified chat surface roadmap" by removing the last transitive daemon imports from the managed host entry point.
    *   **Why it matters:** This is a significant architectural cleanup, reducing complexity and potential leak points in the managed host daemon.
    *   **Reaction:** High impact; represents a "slicing" completion of a long-term roadmap item.

10. **#18355 - feat(review): tiered sandbox cutover** (Created: 2026-11-25, Updated: 2026-11-28)
    Completes Phase 2-A of the tiered review sandbox rollout, switching the PR review workflow to unconditional tiered fail-closed isolation.
    *   **Why it matters:** A major shift in the code review governance model, moving from "sandbox with fallback" to strict "fail-closed" isolation for security.
    *   **Reaction:** Part of a larger sandbox migration; indicates a more secure but potentially stricter review process.

### Key PR Progress (10 Important)

1.  **#18582** - feat(web-shell): clear final 16 managed-host daemon imports and add CI zero-daemon bundle guard (slice 6c)
    *   **Summary:** Completes the final slice of the unified chat surface roadmap by eliminating the last sixteen transitive daemon value-import edges from the managed host entry point, reducing edges from forty-seven to zero.
    *   **Link:** [PR #18582](https://github.com/QwenLM/qwen-code/pull/18582)

2.  **#18561** - docs(managed-agent): Design Harness pull for released Sessions (P1)
    *   **Summary:** Designs phase P1 of pull scheduling for released Sessions, carrying follow-ups to the merged event ingest work. No production code changes, focusing on process design.
    *   **Link:** [PR #18561](https://github.com/QwenLM/qwen-code/pull/18561)

3.  **#18522** - feat(core): fix Gemini/Vertex long-stream transport and support native multimodal tool outputs
    *   **Summary:** Routes Google GenAI/Vertex AI HTTP requests through Qwen Code's bundled `undici` dispatcher and improves native multimodal tool-response handling in the core library.
    *   **Link:** [PR #18522](https://github.com/QwenLM/qwen-code/pull/18522)

4.  **#18511** - fix(core): resolve Hugging Face router ids with a provider suffix
    *   **Summary:** Adds support for a single provider or policy suffix in `org/model:suffix` IDs on the Hugging Face HTTPS router, enabling model-family defaults for input modalities and reasoning.
    *   **Link:** [PR #18511](https://github.com/QwenLM/qwen-code/pull/18511)

5.  **#18491** - fix(desktop): fail the AppImage smoke check when a host library is bundled
    *   **Summary:** Updates the Linux AppImage smoke check to fail when the extracted image ships its own copy of a host library, preventing reliance on bundled dependencies that should come from the host OS.
    *   **Link:** [PR #18491](https://github.com/QwenLM/qwen-code/pull/18491)

6.  **#18355** - feat(review): tiered sandbox cutover, CLI capability gate, and external content-allowlist downgrade
    *   **Summary:** Completes Phase 2-A of the tiered review sandbox rollout, switching the PR review workflow to unconditional tiered fail-closed isolation.
    *   **Link:** [PR #18355](https://github.com/QwenLM/qwen-code/pull/18355)

7.  **#18155** - feat(managed-agent): confine selected Hosted Workspace Shell
    *   **Summary:** Adds an opt-in foreground Shell profile for built-in Hosted Agent Sessions, using Bubblewrap to give each command a read-only private image and private workspace.
    *   **Link:** [PR #18155](https://github.com/QwenLM/qwen-code/pull/18155)

8.  **#17823** - fix(agents): keep A2A tasks recoverable after transcript read errors
    *   **Summary:** Fixes session-based A2A requests where filesystem errors prevent reply lookup, ensuring tasks can report `TASK_STATE_COMPLETED` once reads recover.
    *   **Link:** [PR #17823](https://github.com/QwenLM/qwen-code/pull/17823)

9.  **#18570** - fix(core): skip incomplete worktree snapshot pairs in unkeyed recovery
    *   **Summary:** Skips snapshot candidates during unkeyed recovery when a member is missing, ensuring explicit archive keys still select only the requested pair.
    *   **Link:** [PR #18570](https://github.com/QwenLM/qwen-code/pull/18570)

10. **#18535** - fix(serve): fail closed on unreadable worktree sidecars during session deletion
    *   **Summary:** Aligns session deletion with worktree sidecar safety predicates so that dangling symlinks and loops are never mistaken for missing sidecars.
    *   **Link:** [PR #18535](https://github.com/QwenLM/qwen-code/pull/18535)

### Feature Request Trends
Analysis of the 8 recent issues and 50 PRs reveals a strong focus on **stability and infrastructure maturation** alongside **API compatibility**.
*   **CI/CD Stability:** A recurring theme is the high volume of "provisional" E2E test failures and CI gate issues (#18342, #18252, #18258, #18587). This suggests the managed agent platform is undergoing rapid changes that are outpacing test stability.
*   **Sandbox & Security:** There is significant activity in sandbox architecture (#18355, #18491, #18582). The project is moving towards "fail-closed" isolation and stricter dependency management (AppImage checks), indicating a shift towards production-grade reliability.
*   **Documentation & UX:** Several issues (#18583, #18585, #18586) center on clarifying developer workflows, specifically regarding E2E triggers, `npm run link` usage, and preview instructions. This indicates a push to lower the barrier to entry for new contributors.
*   **Multimodal & Multi-Provider Support:** PRs like #18522 and #18511 highlight an effort to improve support for external AI providers (Google Vertex, Hugging Face) and native multimodal tool outputs, expanding Qwen Code's compatibility beyond its native models.

### Developer Pain Points
1.  **CI Instability:** The most pressing pain point is the recurring pattern of "provisional" E2E CI failures. Developers merging pull requests face uncertain build outcomes, where failures may be transient or related to branch advancement timing rather than code defects. This creates friction in the development loop and makes automated merging risky.
2.  **Release Pipeline Fragility:** The failure of the v0.29.0-preview.0 release (#18588) underscores a fragile release pipeline. When the "publish" job fails, it blocks the delivery of new features, forcing the team into hotfix cycles rather than steady feature delivery.
3.  **Documentation/Workflow Clarity:** A cluster of documentation issues (#18583, #18585, #18586) reveals that the local development workflow—specifically regarding `npm run link` and E2E sandbox configuration—is not intuitive. New contributors frequently encounter broken previews or misunderstood test triggers, leading to wasted debugging time.
4.  **Cross-Platform/Environment Consistency:** Issues involving specific runtime environments (e.g., the MySQL 8.4/Java 21 gate failure #18258) and AppImage bundling (#18491) highlight challenges in maintaining consistent behavior across different host operating systems and dependency versions. Developers working on non-primary platforms may face blockers that are hard to reproduce locally.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

### DeepSeek TUI Community Digest
**Period:** 2026-11-28  
**Source:** [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)

#### 1. Today's Highlights
The DeepSeek TUI ecosystem experienced a flurry of dependency updates and focused bug fixes. The most significant activity centered on **issue #7565**, which closed a critical compaction bug that could corrupt user messages during history compaction, and **issue #7562**, which investigated related edge cases involving summary headers. Meanwhile, the dependency tree saw 11 new PRs, primarily bumping foundational crates like `sha2`, `qrcode`, and `lru` to their latest stable releases.

#### 2. Releases
No new versions were published in the last 24 hours.

#### 3. Hot Issues (10 Notable)
*   **#7565 [CLOSED] fix(engine): preserve pasted summary headers during compaction**: This is the most critical fix of the period. It addresses a bug where the compaction engine could mistakenly replace a real user message with a legacy summary header if the text matched exactly. The fix introduces checkpoint structure and provenance checks to determine what is safe to replace. **Link:** [#7565](https://github.com/codewhale-hq/Codewhale/issues/7565)
*   **#7562 [CLOSED] [area:tui, area:core, area:state] compaction: loose scan can delete a user turn**: Closely related to #7562, this issue explores how a "loose scan" during compaction can delete user turns, specifically those that paste summary headers. It serves as the investigative companion to the fix in #7565. **Link:** [#7562](https://github.com/codewhale-hq/Codewhale/issues/7562)
*   **#7563 [CLOSED] fix(tui): open inline skill completion after CJK text**: A usability fix for non-Western languages. Previously, inline skill mentions (e.g., `/my-review`) only triggered completion popups if preceded by whitespace or ASCII brackets. This update ensures CJK text (Chinese/Japanese) can trigger completions correctly. **Link:** [#7563](https://github.com/codewhale-hq/Codewhale/issues/7563)
*   **#7445 [OPEN] feat(ci): add the maintainer gate and regression stage**: A long-term CI enhancement. It implements a "maintainer gate" to prevent unauthorized agent work and a "regression stage" to test after agent tasks complete, improving CI reliability. **Link:** [#7445](https://github.com/codewhale-hq/Codewhale/issues/7445)
*   **#7573 [OPEN] build(deps): bump sha2 from 0.10.9 to 0.11.1**: A routine but necessary security/update PR. Bumping `sha2` aligns the project with the latest cryptographic standards and bug fixes in the RustCrypto ecosystem. **Link:** [#7573](https://github.com/codewhale-hq/Codewhale/pull/7573)
*   **#7572 [OPEN] build(deps): bump qrcode from 0.14.1 to 0.15.0**: Updates the QR code generation library. This often includes performance improvements and new features for QR encoding. **Link:** [#7572](https://github.com/codewhale-hq/Codewhale/pull/7572)
*   **#7571 [OPEN] build(deps): bump lru from 0.19.0 to 0.19.2**: Updates the Least Recently Used cache implementation. This point release likely contains performance tweaks and bug fixes for the caching layer. **Link:** [#7571](https://github.com/codewhale-hq/Codewhale/pull/7571)
*   **#7569 [OPEN] build(deps): bump ahash from 0.8.12 to 0.8.13**: Updates the hash map implementation. v0.8.13 includes fixes for edge cases in hashing operations. **Link:** [#7569](https://github.com/codewhale-hq/Codewhale/pull/7569)
*   **#7568 [OPEN] build(deps): bump gix from 0.90.0 to 0.91.0**: Updates the Git implementation library. Note: v0.91.0 contains breaking bug fixes, so this requires careful testing. **Link:** [#7568](https://github.com/codewhale-hq/Codewhale/pull/7568)
*   **#7570 [OPEN] build(deps): bump codewhale-hq/Codewhale/scripts/github-action/publish**: Updates the CI publish script version, ensuring the release pipeline uses the latest publish logic. **Link:** [#7570](https://github.com/codewhale-hq/Codewhale/pull/7570)

#### 4. Key PR Progress (10 Important)
*   **#7573**: Bump `sha2` to v0.11.1. **Impact:** Security and crypto standard alignment.
*   **#7572**: Bump `qrcode` to v0.15.0. **Impact:** Enhanced QR generation capabilities.
*   **#7571**: Bump `lru` to v0.19.2. **Impact:** Improved cache reliability and performance.
*   **#7569**: Bump `ahash` to v0.8.13. **Impact:** Fixed hash collision and edge-case bugs.
*   **#7568**: Bump `gix` to v0.91.0. **Impact:** Git operations updated; note breaking changes in this release.
*   **#7567**: Bump `actions/create-github-app-token` to v3.4.0. **Impact:** Updated GitHub App token management.
*   **#7566**: Bump `codewhale-hq/Codewhale` to the same commit as the publish script. **Impact:** Synchronized internal dependency versions.
*   **#7565**: (Referenced in issues) The underlying fix for summary header preservation compaction.
*   **#7563**: (Referenced in issues) Fix for CJK inline skill completion triggering.
*   **#7445**: Implementation of the maintainer gate and regression CI stage. **Impact:** Stronger CI governance.

#### 5. Feature Request Trends
Analysis of the issue queue reveals a strong focus on **compaction integrity and internationalization**.
*   **Compaction Safety:** There is a recurring theme of preventing data loss during history compaction. Users are concerned about the engine incorrectly deleting or overwriting messages, particularly those containing summary headers or legacy formatting. The recent fixes (#7562, #7565) indicate the community is actively refining the "provenance" logic to distinguish between actual user content and metadata headers.
*   **CJK Support:** Feature requests and bug reports regarding Non-Latin character support are frequent. The fix for inline skill completion after CJK text (#7563) highlights a demand for the TUI to be fully functional for Chinese and Japanese speakers, ensuring that shortcuts and mentions work regardless of character set.
*   **CI/Developer Experience:** There is a steady stream of dependency and CI pipeline requests (#7445, #7570, #7566, #7567), indicating a maturing project focused on stability, security updates, and professional-grade tooling workflows.

#### 6. Developer Pain Points
*   **Compaction Edge Cases:** Developers using the history compaction feature are vulnerable to edge cases where user messages starting with specific strings (like summary headers) can be erroneously treated as metadata and deleted. This requires careful handling of "provenance" to maintain data integrity.
*   **CJK Text Interactions:** A recurring frustration is the failure of text-based interactions (like triggering popups or completions) when the input is CJK text. The current implementation seems to rely heavily on whitespace or ASCII delimiters, creating a barrier for a significant portion of potential users in East Asian regions.
*   **Dependency Rotation Fatigue:** The high volume of "bump X from Y to Z" PRs (#7568, #7569, #7571, etc.), while necessary for security, creates a high maintenance overhead for maintainers and can lead to merge conflicts or breaking changes if not tested rigorously (as noted with the `gix` v0.91.0 breaking changes).

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*