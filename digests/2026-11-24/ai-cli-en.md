# AI CLI Tools Community Digest 2026-11-24

> Generated: 2026-11-24 09:33 UTC | Tools covered: 10

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

The AI CLI tool ecosystem on 2026-11-24 reflects a mature but fragmented landscape. While all major tools are actively developing, they have diverged significantly in focus: **Claude Code** and **OpenCode** dominate in raw activity and feature breadth, targeting power users and complex workflow automation. **OpenAI Codex** and **GitHub Copilot CLI** are tightly coupled to their respective platform ecosystems (ChatGPT and GitHub), prioritizing sandbox stability and permission management. **Gemini CLI** and **Qwen Code** show strong engineering focus on agent reliability and release pipeline integrity, respectively. A common thread across all tools is the intense focus on "state management"—specifically session continuity, permission persistence, and crash recovery—as the primary barrier to seamless daily driver adoption.

### 2. Activity Comparison

| Tool | Active Issues (Today) | Merged PRs (Today) | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 (Hot Issues) | 2 (Closed) | v2.1.331 released; critical privacy bug (#107757) under investigation. |
| **OpenAI Codex** | 10 (Hot Issues) | 20 (Closed) | v0.174.0-alpha.1 released (Thread links, Tab-completion); stable v0.172.0 active. |
| **Gemini CLI** | 10 (Hot Issues) | 10 (Closed) | v0.72.0-preview.0 released; v0.71.1 patch stabilizing A2A auth. |
| **GitHub Copilot CLI** | 10 (Hot Issues) | 1 (Closed) | v1.0.115-8 released; focus on subagent tracking and Assisted Permissions. |
| **OpenCode** | 10 (Hot Issues) | 20 (Closed) | v2.4.1 released (macOS 12 fix, config providers); high PR velocity. |
| **Qwen Code** | 10 (Hot Issues) | 10 (Closed) | Nightly builds `v0.28.3-nightly.20261124` failed (integration timeouts). |
| **DeepSeek TUI** | 10 (Hot Issues) | 10 (Closed) | v0.10.4 hotfix released (Windows Terminal paste bug). |

### 3. Shared Feature Directions

*   **Session Continuity & State Persistence**: A dominant theme across **Claude Code**, **OpenCode**, **Qwen Code**, and **DeepSeek TUI**. Users demand the ability to transfer sessions between devices (Claude Code #11455), recover from crashed contexts (OpenCode #66046), and retain workspace snapshots across restarts (Qwen Code #18009).
*   **Permission & Security Management**: Critical across **Claude Code** (User-Agent email leak #107757, macOS re-registration #49282), **OpenAI Codex** (sandbox "ghosting" #58677), and **GitHub Copilot CLI** (Windows elevation locks). The consensus is that tools must respect OS security sandboxes without forcing repetitive manual grants.
*   **Cross-Platform Stability**: **Windows** and **macOS** specific bugs are prevalent in **Codex**, **Copilot CLI**, and **OpenCode**. Issues range from clipboard corruption (DeepSeek TUI) to native binary crashes (Copilot CLI on Arch Linux) and differential update failures (OpenCode macOS blockmap).
*   **Agent Reliability & "Hang" Prevention**: **Gemini CLI** (#21409), **OpenCode** (#66045), and **Qwen Code** (#18209) all address the model getting stuck or failing to yield control, highlighting a need for robust timeout and abort mechanisms.

### 4. Differentiation Analysis

*   **Claude Code** targets the "Enterprise/Power User" niche with the deepest feature set (Code Mode across Bedrock/Google/Foundry) and greatest concern for privacy and identity management. It is the most platform-fragmented, supporting AWS, GCP, and Azure simultaneously.
*   **OpenAI Codex** and **GitHub Copilot CLI** are essentially front-ends for their parent platforms (ChatGPT and GitHub). Their value proposition is integration fidelity rather than standalone capability. Codex focuses on terminal workflow (Tab-completion), while Copilot CLI focuses on MCP server orchestration.
*   **OpenCode** distinguishes itself as a highly technical, open-source infrastructure tool. Its focus on "blockmaps," "differential updates," and "Go gateway" performance makes it the preferred choice for developers running LLMs in serverless or edge environments (Cloudflare Workers) rather than local desktop use.
*   **Gemini CLI** and **Qwen Code** are aggressively iterating on reliability. Gemini focuses on the A2A protocol and sub-agent orchestration, while Qwen Code prioritizes SDK stability and transcript security (permissions on `.jsonl` files).

### 5. Community Momentum & Maturity

*   **Most Active:** **OpenCode** and **Claude Code** lead in sheer volume of issues and PRs, indicating a healthy, engaged community driving rapid iteration.
*   **Rapidly Iterating:** **Qwen Code** shows high engineering velocity but currently struggles with release pipeline stability (three nightly failures in 11 days). **DeepSeek TUI** is in a focused hotfix phase (v0.10.4) addressing acute usability bugs, signaling a maturing project stabilizing its core.
*   **Maturation Phase:** **GitHub Copilot CLI** and **OpenAI Codex** are shifting from feature proliferation to stability and permission management. The conversation has moved from "what can it do?" to "can it reliably do it without breaking my OS?"

### 6. Trend Signals

*   **The "State Problem"**: The most significant industry trend is the realization that CLI tools are failing at basic state management (sessions, permissions, file paths). The volume of issues regarding "leaked" credentials, "hanging" agents, and "lost" contexts suggests that the industry is shifting from "adding features" to "fixing plumbing."
*   **Permission-AI Alignment**: There is growing friction between AI tooling and OS security models. The demand for "dynamic headers" (Copilot CLI #5524) and " OAuth discovery timeouts" (Gemini CLI) indicates users want AI tools that behave like standard secure CLI clients, not privileged background processes.
*   **MCP Protocol Saturation**: The Model Context Protocol (MCP) is becoming the universal integration layer. Tools like **Claude Code**, **Copilot CLI**, and **DeepSeek TUI** are all investing in MCP compatibility, but inconsistently. The industry trend is toward standardizing how "skills" and "tasks" are advertised and executed across different AI providers.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

### Claude Code Skills Community Highlights Report
**Data as of 2026-11-24 | Repository: anthropics/skills**

---

## 1. Top Skills Ranking

The following 5 Skills have generated the most community discussion (PR comments) and represent the current focal points of the Claude Code Skills ecosystem:

| # | PR | Author | Created | Status | Comments | 👍 | Summary |
|---|----|--------|---------|--------|----------|-----|---------|
| **1** | **[#1742](https://github.com/anthropics/skills/pull/1742)** | Kuldeeep18 | 2026-09-08 | **OPEN** | undefined | 0 | Fixes support for `mcp>=2.0.0`, where `streamablehttp_client` was renamed to `streamable_http_client`, and custom headers are now configured via `create_mcp_http_client`/`http_client` rather than as a direct kwarg. |
| **2** | **[#1298](https://github.com/anthropics/skills/pull/1298)** | MartinCajiao | 2026-06-10 | **OPEN** | undefined | 0 | Isolates trigger evaluations, handles Windows subprocess failures, and prevents runtime errors from incorrectly passing negative examples during skill optimization. |
| **3** | **[#1245](https://github.com/anthropics/skills/pull/1245)** | mrdesouzaphd-cmyk | 2026-06-02 | **OPEN** | undefined | 0 | Adds two new Skills: `notion-spec-to-implementation` (transforms product specs into concrete Notion tasks) and `quantitative-resume-auditor` (quality control for generated resumes). |
| **4** | **[#1980](https://github.com/anthropics/skills/pull/1980)** | Pcmhacker-piro | 2026-10-06 | **OPEN** | undefined | 0 | Avoids `shell=True` in `with_server.py` to mitigate command injection risks (CWE-78) when spawning server commands. |
| **5** | **[#1792](https://github.com/anthropics/skills/pull/1792)** | TINGyu123644 | 2026-09-19 | **OPEN** | undefined | 0 | Reports LibreOffice timeouts as errors in docx skills and verifies output DOCX no longer carries revision marks (`w:ins`/`w:del`) before claiming success. |

> **Note:** "Comments: undefined" indicates the GitHub API did not return comment counts for these open PRs at the time of analysis. All are currently open for merge.

---

## 2. Community Demand Trends

Analysis of the 13 most-commented Issues reveals the following emerging Skill directions:

| Trend | Representative Issue | Community Interest |
|-------|----------------------|-------------------|
| **Workflow Automation & Safety** | #1980 (avoid `shell=True`) | High priority on secure-by-default Skill construction; community actively avoiding dangerous patterns. |
| **Skill Reliability & Trigger Logic** | #1298 (isolate trigger evals), #1352 (parallel workers cross-match UUIDs) | Deep focus on fixing false-negative trigger rates and ensuring Skills reliably fire during `claude -p` evaluations. |
| **Cross-Platform & OS Support** | #1298 (Windows subprocess `select()` failures) | Growing demand for Skills that work reliably across macOS, Linux, and Windows environments. |
| **Integration & Interoperability** | #1742 (mcp>=2 streamable_http_client) | Strong need for Skills to integrate with the latest MCP (Model Context Protocol) server versions and custom headers. |
| **Document & Content Transformation** | #1245 (notion-spec-to-implementation, md2video-audio) | Creators want Skills that bridge AI output to external productivity tools (Notion, video, docs). |

---

## 3. High-Potential Pending Skills

These active-comment PRs are awaiting merge and may land in the repository soon. They represent "ready-to-merge" community contributions:

| PR | Author | Functionality | Why It’s High-Potential |
|----|--------|--------------|-------------------------|
| **[#1771](https://github.com/anthropics/skills/pull/1771)** | ProofCore-Protocol | Adds `proofcore-contract-auditor` for automated Solidity/Rust smart contract static analysis and blockchain anchoring. | Niche but high-value Web3 developer skill; adds blockchain integration capability to Claude Code. |
| **[#1734](https://github.com/anthropics/skills/pull/1734)** | rohitjain25 | Detects orphaned docx comments. | Lightweight utility Skill; addresses a common document hygiene pain point. |
| **[#1703](https://github.com/anthropics/skills/pull/1703)** | 70v-Yoyo | Adds `md2video-audio` skill (Markdown → MP4 with human-like voiceovers). | Media generation skill; expands Claude Code’s creative output capabilities. |
| **[#525](https://github.com/anthropics/skills/pull/525)** | kitao | Adds Pyxel skill for retro game development. | Game dev community demand; fills a specific niche for Python retro gaming. |

> All PRs listed are **OPEN** as of 2026-11-24. Community engagement (likes, issue cross-references) suggests these have a strong likelihood of merge in the near term.

---

## 4. Skills Ecosystem Insight

**The community’s most concentrated demand is for reliable, cross-platform workflow automation Skills that integrate with modern toolchains (MCP, Notion, HPC clusters) while avoiding security antipatterns like `shell=True`.** 

Developers are actively shaping Skills that bridge Claude Code to external productivity and infrastructure layers—not just raw code generation—but with an acute focus on stability, security, and multi-OS compatibility.

---

### Claude Code Community Digest: 2026-11-24

**Today's Highlights**
The Claude Code team released v2.1.331, introducing Code Mode support across Amazon Bedrock, Google Cloud's Agent Platform, Microsoft Foundry, and the Claude Platform on AWS. Critically, this update also added `oidc.groups_jsonpath` to the Claude apps gateway for improved identity management. However, the release was accompanied by significant community concern regarding a privacy violation in the User-Agent header, where Claude Code was divulging user emails to third parties during web searches.

**Releases**
*   **v2.1.331**: The latest release adds Code Mode support for major cloud platforms (Bedrock, Google Cloud, Microsoft Foundry, AWS) and introduces `oidc.groups_jsonpath` to the gateway configuration. [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.331)

**Hot Issues**
1.  **#107757 (Privacy violation in User-Agent header)**: 124 comments, 811 👍. This is the most discussed issue currently, highlighting a critical privacy bug where the tool leaks user emails in HTTP headers during web searches. The community is demanding the header be removed entirely rather than offering opt-out settings.
2.  **#87647 (Over 6k issues labeled "has repro" auto-closed since March 2026)**: 23 comments, 156 👍. Users are alarmed that legitimate bug reports are being auto-closed in bulk, preventing legitimate issues from being tracked and fixed.
3.  **#11455 (Session Handoff / Continuity Support)**: 46 comments, 27 👍. A long-standing feature request for allowing sessions to transfer between devices or users, improving workflow continuity for power users.
4.  **#49282 (claude binary re-registers as new app in macOS Privacy & Security)**: 22 comments, 48 👍. A recurring macOS installation frustration where the binary re-registers on every update, forcing users to repeatedly grant privacy permissions.
5.  **#61172 (/clear inherits previous session name)**: 18 comments, 35 👍. A usability bug where using `/clear` retains the old session name, leading to duplicate-named sessions in `/resume` and confusion in the UI.
6.  **#56978 (Graceful handling when hitting usage limits)**: 18 comments, 3 👍. Users report that hitting token limits mid-session hard-locks the UI with a 429 error, with no way to save or export context before the lock.
7.  **#90471 (VS Code: Unsupported content type: advisor_tool_result)**: 12 comments, 11 👍. A webview rendering issue in the VS Code extension where the `advisor_tool_result` block fails to render, though the tool functions correctly behind the scenes.
8.  **#77078 (Windows: hook processes left SUSPENDED)**: 8 comments, 1 👍. A stability issue on Windows where hook processes get stuck in a suspended state, causing 30-60 minute hangs before the next turn executes.
9.  **#94251 (Session transcript JSONL omits assistant text)**: 5 comments, 0 👍. A regression in v2.1.270 where most assistant text blocks appearing before tool calls are omitted from the JSONL transcript, though they display correctly in the terminal.
10. **#92051 (Desktop WSL sessions get no `ccd_session` host MCP)**: 5 comments, 3 👍. Users on Windows Subsystem for Linux report that chapter dividers and the floating table of contents are missing because the `mark_chapter` MCP is unavailable.

**Key PR Progress**
*   **#11713 (feat: Add developer-utilities plugin)**: Closed. This PR introduced a `developer-utilities` plugin with 5 commands addressing community-requested features. Notably, session management commands (`/list-sessions`, `/label-session`, `claude-resume`) and `/init-skills` were removed from this PR, as they are being handled by separate, dedicated initiatives.
*   **#45553 (resolve duplicate IPs)**: Closed. A cleanup PR focused on resolving duplicate IP entries within the system.

**Feature Request Trends**
The issue tracker reveals a strong demand for **session continuity and management**. The top-requested features include:
*   **Session Handoff/Continuity** (#11455): Allowing sessions to transfer between contexts.
*   **Folder/Session Persistence** (#96323, #79215): Ensuring sessions follow renamed or moved project folders.
*   **Organizational Policy Controls** (#100240): Admin-level control over Otel export content (prompts/responses) at the org level, rather than just device-level MDM keys.
*   **UI Customization** (#103436): Allowing users to color-code projects and sessions in the Code tab sidebar for better parallel session management.

**Developer Pain Points**
*   **Privacy & Security Erosion**: The #107757 User-Agent leak and the #49282 macOS re-registration issue represent significant friction points where the tool actively works against user privacy or forces repetitive, manual security grants.
*   **State Management Instability**: Bugs #61172 (session name inheritance), #94251 ( transcript omissions), and #87647 (bulk closure of repro labels) all point to a fragile state-management layer that loses or corrupts session history.
*   **Platform Fragmentation**: Windows-specific stability issues (#77078, #69234) and WSL integration gaps (#92051) indicate that the core CLI experience is inconsistent across different operating environments, particularly regarding clipboard handling and hook execution.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Generated:** 2026-11-24

## 1. Today's Highlights

The Codex ecosystem shows active development across three dimensions this week. The **0.174.0-alpha.1 release** introduces thread-linking and Tab-completion for slash commands, significantly improving terminal workflow. Concurrently, the community is divided on the upcoming **December shared allowance change** (Issue #58530), which will merge ChatGPT High and Codex/Work quotas—a decision impacting Plus subscribers. Meanwhile, the **macOS desktop 26.1027.51404 bug** (#58677) highlights persistent sandbox permission issues, where full access vanishes after chat creation, suggesting a broader stability concern across recent builds.

## 2. Releases

| Version | Type | Summary |
| :--- | :--- | :--- |
| **rust-v0.174.0-alpha.1** | Alpha | New features: Follow thread links from search results/transcripts to open saved conversations and nested agents; Press `Tab` to complete arguments for supported slash commands (e.g., `/mcp lo` → `/mcp login`). |
| **rust-v0.173.0-alpha.5** | Alpha | Incremental update, no major feature flags visible in this build. |
| **rust-v0.172.0** | Stable | New features from previous cycle: Follow thread links, Tab completion for slash commands, and jump between task groups. |

[View full release changelog](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.1)

## 3. Hot Issues (Top 10 by Community Impact)

1.  **[#58530](https://github.com/openai/codex/issues/58530)** ([38 comments](https://github.com/openai/codex/issues/58530#issuecomment-)): Confirmed December 2026 change to merge ChatGPT High and Codex/Work allowances on Plus. Community fears loss of independent control over usage tiers.
2.  **[#58677](https://github.com/openai/codex/issues/58677)** ([32 comments](https://github.com/openai/codex/issues/58677#issuecomment-)): macOS Desktop bug where "Full access control" disappears after chat creation, leaving sessions effectively restricted despite UI indications.
3.  **[#54564](https://github.com/openai/codex/issues/54564)** ([31 comments](https://github.com/openai/codex/issues/54564#issuecomment-)): Windows users report the Send button remains disabled in new Work threads, blocking all message output.
4.  **[#59546](https://github.com/openai/codex/issues/59546)** ([29 comments](https://github.com/openai/codex/issues/59546#issuecomment-)): Desktop automation restrictions block monitoring tasks in external web systems, conflicting with Scheduled Tasks documentation.
5.  **[#62918](https://github.com/openai/codex/issues/62918)** ([21 comments](https://github.com/openai/codex/issues/62918#issuecomment-)): Windows users cannot send the first message in new Work chats; error "Connection for host ID local not found" on relaunch.
6.  **[#62685](https://github.com/openai/codex/issues/62685)** ([14 comments](https://github.com/openai/codex/issues/62685#issuecomment-)): Composer Predictions stopped appearing after updating to 26.1117.3838.0 on Windows, breaking the predictive UX.
7.  **[#37531](https://github.com/openai/codex/issues/37531)** ([16 comments](https://github.com/openai/codex/issues/37531#issuecomment-)): Codex App displays raw `**` for assistant-generated bold text at CJK punctuation boundaries, causing rendering bugs.
8.  **[#63226](https://github.com/openai/codex/issues/63226)** ([3 comments](https://github.com/openai/codex/issues/63226#issuecomment-)): New "A temporary limit is preventing this chat from loading" error appearing since Nov 22, blocking all existing chats on Pro plans.
9.  **[#63093](https://github.com/openai/codex/issues/63093)** ([5 comments](https://github.com/openai/codex/issues/63093#issuecomment-)): macOS Work users report the local/cloud run selector missing when starting new chats in v26.1117.41037.
10. **[#63583](https://github.com/openai/codex/issues/63583)** ([2 comments](https://github.com/openai/codex/issues/63583#issuecomment-)): Codex CLI repeatedly stops local regression testing with `cyber_policy`, suspected false positive on gpt-6.2-sol.

## 4. Key PR Progress (Top 20 by Recency/Activity)

| PR # | Status | Summary |
| :--- | :--- | :--- |
| **#63563** | Closed | Release unchanged prompt image buffers when callers drop them—prevents memory leaks in the prompt cache. |
| **#63553** | Closed | Use the active thread's provider in the TUI model picker—resolves model provider mismatch in resumed threads. |
| **#63545** | Closed | Report workspace kind on TUI composer turns—enables app server derivation of project context. |
| **#63544** | Closed | Avoid keyring unlock prompts on headless Linux—silences graphical prompts when running without DISPLAY. |
| **#63540** | Closed | Deduplicate MCP text fallbacks in Code Mode output—prevents duplicate data printing when MCP tools return structured data. |
| **#63537** | Closed | Reap idle local code-mode hosts after five seconds—automated cleanup of stale processes. |
| **#63533** | Closed | Refresh the model catalog from Responses WebSocket handshakes—keeps model lists current when servers advertise new etags. |
| **#63528** | Closed | Verify eval plugin archives with scoped signing keys—fixes archive verification for keys returned in `eval_keys`. |
| **#63523** | Closed | Preserve accepted prompts when turn setup is interrupted—prevents prompt loss during Git root discovery or extension setup. |
| **#63515** | Closed | Honor configured and saved approvals in `codex exec`—ensures `never` policy doesn't override saved approvals on new threads. |
| **#63514** | Closed | Prewarm the Guardian v3 root reviewer for automatic approvals—reduces latency on first approval request. |
| **#63513** | Closed | Direct Guardian to read user instructions before its first verdict—provides necessary context for risk assessment. |
| **#63497** | Closed | Connect Codex Desktop MCP over Unix sockets—replaces SSH forward listeners to avoid stale keep-alive connections. |
| **#60456** | Closed | Backport legacy incremental tools to 0.167.0-alpha.3.2—opts Desktop into incremental tool declarations for Responses. |
| **#22866** | Open | Persist sandbox security events—adds thread, turn, and tool-call context to local SQLite audit trails. |
| **#63525** | Closed | Require thread stores to provide a session model ID store—ensures alias assignments persist across restarts. |
| **#63520** | Closed | Wait for foreground terminal ownership before resuming the TUI—prevents terminal setting conflicts after `bg`/`fg` operations. |
| **#63516** | Closed | Avoid panics when TUI recovery diagnostics fail to write—handles closed stderr gracefully. |
| **#63515** | Closed | Honor configured and saved approvals in `codex exec`—syncs `codex exec` behavior with thread-level settings. |

## 5. Feature Request Trends

Analysis of the 50 open issues reveals three dominant feature directions:

1.  **Sandbox & Permission Stability**: A recurring theme is the instability of computer-use permissions. Issues #58677, #62685, and #63308 collectively highlight that users frequently lose "Full access" controls, face disabled send buttons, or receive approval requests lacking context. There is a clear demand for persistent, predictable permission states across chat sessions.
2.  **Cross-Platform Consistency**: Bugs are heavily concentrated on Windows (#54564, #62918, #62685, #63297) and macOS (#58677, #63093, #62832). The community is requesting parity in feature availability and stability across operating systems, particularly regarding the "local/cloud run selector" and sandbox permissions.
3.  **Workflow Integration**: PRs like #63533 (model catalog refresh) and #22866 (sandbox event persistence) indicate a push toward better telemetry, audit trails, and model management. Users want Codex to integrate more seamlessly into existing CI/CD and development pipelines without breaking context.

## 6. Developer Pain Points

*   **Permission "Ghosting"**: The most prevalent frustration is the disappearance of Full access controls (Issue #58677) or the Send button becoming permanently disabled (Issue #54564). Users report that UI states do not match actual session capabilities, leading to silent failures.
*   **Windows Sandbox Instability**: A cluster of AppX deployment errors (0X80073D02) and `py.exe` detection failures (#61996, #62596) suggests the Windows sandbox environment is fragile, particularly after recent updates (26.1117.3838.0).
*   **Context Loss on Thread Resumption**: Issues surrounding the loss of model settings, approvals, and prompts when resuming threads or switching providers indicate a need for better state management in the TUI and thread stores.
*   **CJK Markdown Rendering**: A long-standing bug (#37531) regarding raw `**` appearing at CJK punctuation boundaries persists, affecting the quality of generated code documentation for non-Latin scripts.
*   **Allowance Anxiety**: The confirmed shared allowance model (Issue #58530) has generated significant discussion regarding billing predictability and the desire to maintain separate quotas for ChatGPT High vs. Codex/Work usage.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

### Gemini CLI Community Digest
**Generated on:** 2026-11-24

---

### 1. Today's Highlights
The Gemini CLI ecosystem is actively preparing for the v0.72.0 release while stabilizing the recent v0.71.1 patch. A critical security and reliability improvement was merged into the A2A server integration, enforcing bearer token authentication and request validation to prevent misuse. Simultaneously, the team is addressing infrastructure concerns like OAuth discovery timeouts and dependency management, reflecting a focus on both feature polish and platform stability ahead of the nightly cycle.

### 2. Releases
*   **v0.72.0-preview.0**: Released recently. This preview includes a fix for nested `.gitignore` pattern handling under `dir/**` patterns and various changelog updates from the v0.70.0 cycle.
*   **v0.71.1**: A patch release (cherry-pick) addressing specific issues from the v0.71.0 stable branch.
*   **v0.71.0**: The latest stable release, featuring updates to the A2A server authentication and nightly build metadata.

### 3. Hot Issues (Top 10)
These issues represent the community's current pain points and active development areas:

1.  **#22323: Subagent recovery after MAX_TURNS** ([Link](https://github.com/google-gemini/gemini-cli/issues/22323))
    *   **Why it matters:** A bug where subagents report "success" and "GOAL" termination even after hitting the maximum turn limit, potentially misleading users about task completion.
    *   **Reaction:** High priority for agent reliability; 14 comments indicating active debugging.
2.  **#19873: Leverage model's bash affinity via Zero-Dependency OS Sandboxing** ([Link](https://github.com/google-gemini/gemini-cli/issues/19873))
    *   **Why it matters:** Proposes utilizing native bash capabilities of Gemini 3 models for code exploration while maintaining security sandboxes.
    *   **Reaction:** 9 comments; highlights the community's interest in native tool usage.
3.  **#21409: Generalist agent hangs** ([Link](https://github.com/google-gemini/gemini-cli/issues/21409))
    *   **Why it matters:** Reports that the generalist agent hangs indefinitely on simple actions like folder creation, blocking all agent workflows.
    *   **Reaction:** 8 upvotes; users report resolving it by disabling sub-agent delegation.
4.  **#22745/22747: AST-aware file reads and search** ([Link](https://github.com/google-gemini/gemini-cli/issues/22745), [Link](https://github.com/google-gemini/gemini-cli/issues/22747))
    *   **Why it matters:** Tracks the integration of AST-aware tools (like glyph/tilth) to enable precise method-bound reads, reducing token noise and improving code navigation.
    *   **Reaction:** 2 comments; seen as a key efficiency improvement for large codebases.
5.  **#21968: Gemini does not use skills and sub-agents enough** ([Link](https://github.com/google-gemini/gemini-cli/issues/21968))
    *   **Why it matters:** An anecdotal but frequent complaint that the model ignores custom skills/sub-agents unless explicitly instructed.
    *   **Reaction:** 7 comments; reflects a desire for more autonomous agent orchestration.
6.  **#22267: Browser Agent ignores settings.json overrides** ([Link](https://github.com/google-gemini/gemini-cli/issues/22267))
    *   **Why it matters:** Configuration overrides (like `maxTurns`) are being ignored by the Browser Agent, breaking expected user constraints.
    *   **Reaction:** 5 comments; a reliability bug for browser-based workflows.
7.  **#21983: Browser subagent fails in Wayland** ([Link](https://github.com/google-gemini/gemini-cli/issues/21983))
    *   **Why it matters:** The browser subagent fails to operate correctly on Wayland display servers, a common Linux desktop environment.
    *   **Reaction:** 4 comments; highlights platform compatibility issues.
8.  **#24246: 400 error with > 128 tools** ([Link](https://github.com/google-gemini/gemini-cli/issues/24246))
    *   **Why it matters:** The CLI crashes with a 400 error when too many tools are enabled, indicating a need for better tool scoping logic.
    *   **Reaction:** 3 comments; relates to the "tool overflow" problem.
9.  **#23571: Model creates tmp scripts in random spots** ([Link](https://github.com/google-gemini/gemini-cli/issues/23571))
    *   **Why it matters:** Models generate temporary scripts in unexpected directories, creating workspace clutter and cleanup overhead.
    *   **Reaction:** 3 comments; a common "messy workspace" frustration.
10. **#20079: Agents not recognized as symlinks** ([Link](https://github.com/google-gemini/gemini-cli/issues/20079))
    *   **Why it matters:** Symlinks in the `~/.gemini/agents/` directory are not recognized, preventing custom agent discovery.
    *   **Reaction:** 4 comments; a quality-of-life issue for agent organization.

### 4. Key PR Progress (Top 10)
These PRs show the direction of recent code changes and bug fixes:

1.  **#30441: Cover all extension content in install/update consent** ([Link](https://github.com/google-gemini/gemini-cli/pull/30441))
    *   **Summary:** Updates the consent dialog to describe all extension content (not just manifest fields) and compares installed vs. new descriptions.
2.  **#30423: Bump npm-dependencies (69 updates)** ([Link](https://github.com/google-gemini/gemini-cli/pull/30423))
    *   **Summary:** A massive dependency update managed by Dependabot, updating packages like `simple-git` and `@octokit/rest`.
3.  **#30415: Add time limit to web search and stop retries on abort** ([Link](https://github.com/google-gemini/gemini-cli/pull/30415))
    *   **Summary:** Addresses the hang issue (#29594) by imposing a time limit on the `google_web_search` tool and stopping retries if the user aborts.
4.  **#30443: Add per-request timeout to MCP OAuth discovery fetches** ([Link](https://github.com/google-gemini/gemini-cli/pull/30443))
    *   **Summary:** Prevents OAuth discovery from hanging for up to 60s per URL by adding abort signals to fetch calls.
5.  **#30429: Cherry-pick aafdfdf to create v0.71.1** ([Link](https://github.com/google-gemini/gemini-cli/pull/30429))
    *   **Summary:** Automated cherry-pick to patch the v0.71.0 stable release, creating the v0.71.1 patch version.
6.  **#30428: Bump version to 0.73.0-nightly** ([Link](httpshttps://github.com/google-gemini/gemini-cli/pull/30428))
    *   **Summary:** Automated version bump to prepare for the next nightly release cycle.
7.  **#30426: Changelog for v0.71.0** ([Link](https://github.com/google-gemini/gemini-cli/pull/30426))
    *   **Summary:** Auto-generated changelog for the v0.71.0 stable release.
8.  **#30424: Changelog for v0.72.0-preview.0** ([Link](https://github.com/google-gemini/gemini-cli/pull/30424))
    *   **Summary:** Auto-generated changelog for the upcoming preview release.
9.  **#30433: Bump zod from 3.25.76 to 4.6.6** ([Link](https://github.com/google-gemini/gemini-cli/pull/30433))
    *   **Summary:** Security update for the Zod schema validation library, addressing six malicious commits.
10. **#30430: Bump @modelcontextprotocol/sdk from 1.23.0 to 1.32.0** ([Link](https://github.com/google-gemini/gemini-cli/pull/30430))
    *   **Summary:** Updates the Model Context Protocol SDK, likely bringing new features and bug fixes to the A2A server integration.

### 5. Feature Request Trends
Analysis of the issue queue reveals a strong push toward **agent autonomy and reliability**.
*   **Subagent Orchestration:** There is significant demand for the CLI to autonomously decide when and how to use sub-agents and skills (Issues #21968, #22323, #21409). Users want the model to use these tools "enough" without explicit prompting.
*   **AST-Native Integration:** A technical trend is the integration of AST-aware tools for file searching and reading (Issues #22745, #22747). The community is investing in "precise reads" to reduce token waste and improve code navigation quality.
*   **Browser & Environment Stability:** Fixes related to the browser agent and OS-specific failures (Wayland, tool limits) are high priority, indicating a need for the CLI to be a robust, cross-platform development partner.

### 6. Developer Pain Points
*   **Agent "Hang" Scenarios:** The most critical frustration is the generalist agent hanging indefinitely on simple tasks (#21409) or getting stuck at interactive prompts (#22465). This breaks the primary workflow of using the CLI for development.
*   **Tool Scoping & Context Limits:** Developers are hitting hard limits with tool output caps (Issue #24246 mentions >128 tools causing 400 errors) and context window overflow during greps, forcing manual intervention to manage scope.
*   **Configuration Persistence:** Issues like the Browser Agent ignoring `settings.json` (#22267) and symlinks not being recognized as agents (#20079) show that user configurations and environment setups are frequently overlooked or broken by updates.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

### GitHub Copilot CLI Community Digest
**Generated on:** 2026-11-24

---

#### 1. Today's Highlights
The community focused on two distinct areas today: polishing the core experience and stabilizing the MCP integration. The release of v1.0.115-8 refined subagent usage reporting and assisted permission logic, while a surge of platform-specific bugs—particularly on Linux and Windows—highlighted the challenges of maintaining a cross-platform developer tool.

#### 2. Releases
*   **v1.0.115-8**: This incremental update improves subagent tracking by grouping usage by configured name rather than invocation ID. It also enhances the Assisted Permissions flow, allowing the CLI to retry a review model if the initial attempt stalls, thereby reducing unnecessary approval prompts.

#### 3. Hot Issues (Top 10)
Here are the most significant issues updated in the last 24 hours:

1.  **#5559: TLS 1.3 broken on MacOS since 1.0.93-0** ([Open](https://github.com/github/copilot-cli/issues/5559))
    *   **Why it matters**: A week-old pre-release regression is breaking streamable HTTP connections to MCP servers (like Jenkins) on macOS, preventing users from connecting custom MCP endpoints.
    *   **Reaction**: 1 upvote; users are reporting session failures with standard MCP servers.

2.  **#5561: Linux x86_64 CLI aborts in bundled cli-native.node on Arch** ([Open](https://github.com/github/copilot-cli/issues/5561))
    *   **Why it matters**: A critical crash (SIGABRT) in the native binary on Arch Linux indicates a potential bundling or native module compatibility issue affecting a subset of Linux users.
    *   **Reaction**: 0 upvotes; reported today, marking a fresh stability blocker.

3.  **#5560: rg compaction corrupts filenames with multiple numeric suffixes** ([Open](https://github.com/github/copilot-cli/issues/5560))
    *   **Why it matters**: The built-in ripgrep compaction logic is truncating filenames and misplacing line numbers, corrupting output for users relying on regex-based tool searches.
    *   **Reaction**: 0 upvotes; a "silent" bug affecting daily workflows.

4.  **#5558: Remove or make optional the 100-word response limit** ([Open](https://github.com/github/copilot-cli/issues/5558))
    *   **Why it matters**: Users are frustrated that the CLI enforces a hard-coded 100-word limit, forcing the model to omit key details to comply, resulting in incomprehensible answers.
    *   **Reaction**: 0 upvotes; a quality-of-life / UX complaint.

5.  **#5557: Interactive mode fails on invalid MCP output schema** ([Open](https://github.com/github/copilot-cli/issues/5557))
    *   **Why it matters**: A local MCP tool with `outputSchema.anyOf: null` crashes the interactive session, blocking all turns. Non-interactive mode works, creating an inconsistent experience.
    *   **Reaction**: 0 upvotes; highlights schema validation fragility.

6.  **#5556: ACP mode no longer emits `agent_thought_chunk`** ([Open](https://github.com/github/copilot-cli/issues/5556))
    *   **Why it matters**: Since version 1.0.110, the ACP (Agent Copilot Program) mode stopped streaming reasoning summaries. This breaks the "live thinking" block for ACP clients, leaving users staring at a silent agent.
    *   **Reaction**: 0 upvotes; a regression from a recent stable version.

7.  **#5555: MCP client declares Tasks extension but rejects CreateTaskResult** ([Closed](https://github.com/github/copilot-cli/issues/5555))
    *   **Why it matters**: The CLI advertises MCP Tasks support but fails to handle `CreateTaskResult`, causing tool calls to fail silently. This breaks task-oriented workflows.
    *   **Reaction**: 0 upvotes; recently closed, suggesting a fix was merged.

8.  **#5550: Built-in GitHub MCP read tools unavailable to custom agents when `gh` is on PATH** ([Open](https://github.com/github/copilot-cli/issues/5550))
    *   **Why it matters**: A conflict between the `gh` CLI and the built-in GitHub MCP server prevents custom agents from reading issues, even when explicitly requested.
    *   **Reaction**: 0 upvotes; a path/env variable conflict.

9.  **#5540: Copilot CLI does not send MCP Tasks augmentation for task-required tools** ([Open](https://github.com/github/copilot-cli/issues/5540))
    *   **Why it matters**: The CLI claims MCP Tasks support during init but fails to send the necessary augmentation when tools require tasks, causing server rejections.
    *   **Reaction**: 1 upvote; confirms a feature gap between advertising and implementation.

10. **#5524: MCP: dynamic headers helper for remote MCP servers** ([Open](https://github.com/github/copilot-cli/issues/5524))
    *   **Why it matters**: Remote MCP servers currently only support static headers; `${VAR}` expansion happens at config load time, breaking short-lived credentials (e.g., OAuth tokens) that require runtime expansion.
    *   **Reaction**: 0 upvotes; a feature request for parity with Claude Code.

#### 4. Key PR Progress (Top 10)
Here are the most important pull requests updated or merged recently:

1.  **#5554: Add opt-in connection token generation to the CLI container** ([Closed](https://github.com/github/copilot-cli/pull/5554))
    *   **Summary**: Introduces an environment variable (`COPILOT_CONNECTION_TOKEN_GENERATE`) that prints a fresh random token at startup. This allows local SDK clients to connect to the headless CLI without pre-creating a secret on the host.
    *   **Impact**: Lowers the barrier to entry for developers testing the server locally.

2.  **#1446: [CLOSED] unknown option '--no-warnings' noise in terminal** ([Closed](https://github.com/github/copilot-cli/pull/1446))
    *   **Summary**: Fixes a bug where the `'--no-warnings'` flag was incorrectly treated as an unknown option, generating noisy error messages in the terminal, particularly on Windows.
    *   **Impact**: Improves the clarity of the CLI output for power users.

#### 5. Feature Request Trends
Analysis of the issue queue reveals three strong trend directions:

*   **MCP Stability & Parity**: There is a significant focus on bridging the gap between the Copilot CLI and remote MCP servers. Requests center on dynamic header expansion (#5524), reliable task augmentation (#5540), and preventing session drops during ID swaps (#4920). Users want the CLI to behave as a first-class MCP client comparable to Claude Code.
*   **Cross-Platform Consistency**: A disproportionate number of bugs affect Windows (#5255, #5525, #1446) and Linux (#5561, #5560). The community is actively reporting environment-specific crashes and permission failures, indicating a need for more rigorous cross-platform testing in the release pipeline.
*   **ACP & UX Refinements**: Users are pushing for more control over the agent's behavior, specifically requesting the removal of the 100-word limit (#5558) and the restoration of reasoning summaries for ACP clients (#5556), suggesting a desire for more transparent and flexible agent communication.

#### 6. Developer Pain Points
*   **Windows Elevation Locks**: A recurring theme is the failure of non-elevated sessions to start MCP servers when an elevated session exists first, due to lock file contention (`mcp-writer.lock`) in the user profile directory. This creates a significant blocker for admin-powered development workflows.
*   **Silent Output & Opaque Errors**: Developers are frustrated by "empty" results from agents (`task_complete` not written) and incomprehensible truncated responses forced by word limits. Additionally, cryptic native crashes (e.g., the Arch Linux SIGABRT) and `Access is denied` errors on plugin uninstallation add friction to the "just works" promise of the tool.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### Today's Highlights

The OpenCode v2.4.1 release brings targeted fixes for macOS 12 session stability and improved config-only provider visibility. A wave of critical bug fixes landed today, addressing Gemini 429 quota retry logic, Windows auto-update blockmap issues, and TUI session location persistence. Development activity is intense across the codebase, with significant work on cloud provider compatibility and desktop app reliability.

### Releases

**v2.4.1** (Released today)
*   **macOS 12 Session Fix**: Resolves an issue where OpenCode could not save assistant messages on the older SQLite version bundled with macOS 12 (#65771).
*   **Config-Only Provider Models**: Providers defined exclusively in configuration files (e.g., Ollama) now display their models within the UI, improving discoverability for self-hosted setups.

### Hot Issues (Top 10)

1.  **[#66045](https://github.com/anomalyco/opencode/issues/66045)** Gemini per-minute 429 treated as quota exhausted and never retried: A critical reliability bug where per-minute rate limits on Google's Gemini API cause the turn to end permanently instead of waiting out the `retryDelay` specified in the response body. This highlights a broader issue with how provider failures are classified and retried.
2.  **[#66052](https://github.com/anomalyco/opencode/issues/66052)** Anthropic-package Go models fail with "requires an API key" behind an openai-compatible provider: Models marked with `package: @opencode/ai/providers/anthropic` crash when routed through an OpenAI-compatible Go provider, failing client-side with a generic API key error before any request is sent.
3.  **[#66051](https://github.com/anomalyco/opencode/issues/66051)** Code Mode VM never pauses on Cloudflare Workers, preventing interruption: The Code Mode VM only yields control when `performance.now()` detects 1ms has passed, causing the Durable Object to hang and become unresponsive on serverless platforms.
4.  **[#65859](https://github.com/anomalyco/opencode/issues/65859)** Desktop auto-update falls back to full 275MB download due to missing `.blockmap` files: The auto-updater cannot perform differential updates because `.blockmap` artifacts are missing from the CDN, forcing users to download the entire 275MB installer for every update.
5.  **[#66046](https://github.com/anomalyco/opencode/issues/66046)** TUI: "Session location unavailable" stays after folder is back: When a session's folder temporarily disappears (e.g., network share), the TUI persists the error message and never re-checks, requiring a manual session reset.
6.  **[#66066](https://github.com/anomalyco/opencode/issues/65966)** `opencode-go`: TTFT grows with prompt length even with identical prefix: Time-to-first-token scales linearly with prompt length even when the prefix is byte-identical and the same session ID is reused, suggesting a performance regression in the Go gateway.
7.  **[#66053](https://github.com/anomalyco/opencode/issues/66053)** Shell redirected directory commands skip permission checks: Commands like `cd . > file` drop the directory operand during parsing, bypassing shell permission checks and potentially causing unexpected behavior or security issues.
8.  **[#66042](https://github.com/anomalyco/opencode/issues/66042)** Fix release: publish blockmaps for signed desktop installers: A direct fix for #65859, ensuring `.blockmap` files are published alongside Windows installers and macOS zips to enable proper differential updates.
9.  **[#66047](https://github.com/anomalyco/opencode/issues/66047)** Fix AI: retry Gemini per-minute quota 429s after the delay: The complementary PR to #66045 that implements the actual retry logic using the `retryDelay` from the Gemini API response body.
10. **[#63708](https://github.com/anomalyco/opencode/issues/63708)** Model discovery hides configured presets that share a model family: The `opencode.models` tool hides explicitly configured model presets when filtering by family, making it difficult to distinguish between aliases targeting the same base model with different settings.

### Key PR Progress (Top 20 Highlights)

1.  **[#66048](https://github.com/anomalyco/opencode/pull/66048)** Fix TUI: recover a missing session location when its folder is back: Implements the user-facing fix for #66046, ensuring the TUI re-checks session folder availability.
2.  **[#66047](https://github.com/anomalyco/opencode/pull/66047)** Fix AI: retry Gemini per-minute quota 429s after the delay: Implements the backend logic to respect Gemini's `retryDelay` for per-minute rate limits, closing #66045.
3.  **[#66055](https://github.com/anomalyco/opencode/pull/66055)** Fix core: keep sandbox paths POSIX on Windows hosts: Addresses cross-platform path consistency issues in the sandbox layer, ensuring API skill checks remain portable across OS boundaries.
4.  **[#66010](https://github.com/anomalyco/opencode/pull/66010)** Fix app: open a shell's call from its notice when the call is on an older page: Improves the shell navigation flow, allowing users to reveal a shell's output even if the initiating call scrolls off-screen.
5.  **[#66033](https://github.com/anomalyco/opencode/pull/66033)** Fix app: load older history before the reader reaches the top: Optimizes history loading thresholds to prevent the reader from stalling at the top of the transcript during fast scrolling.
6.  **[#66034](https://github.com/anomalyco/opencode/pull/66034)** Fix app: write the scroll position once for each batch of measured rows: Reduces layout thrashing by batching scroll position writes, improving performance during rapid history navigation.
7.  **[#65987](https://github.com/anomalyco/opencode/pull/65987)** Fix core: let plugins create automations during setup: Resolves a bug where plugin awaits on `ctx.experimental.automation.create` during setup, preventing subsequent plugins from loading and automation actions from returning.
8.  **[#66041](https://github.com/anomalyco/opencode/pull/66041)** Fix plugin: reject aborted Promise plugin calls with the signal's reason: Ensures plugin API calls honor AbortSignal semantics, rejecting with the appropriate error reason rather than hanging.
9.  **[#63709](https://github.com/anomalyco/opencode/pull/63709)** Fix models: preserve presets in family filtering: The code fix for #63708, ensuring configured presets remain visible and distinct from base models when filtering by family in the TUI and model tools.
10. **[#66043](https://github.com/anomalyco/opencode/pull/66043)** Fix AI: stop replaying stale Copilot response item ids: Prevents the replay of stale GitHub Copilot response item IDs, resolving issues with duplicated or outdated suggestions in the Copilot integration.
11. **[#66021](https://github.com/anomalyco/opencode/pull/66021)** Fix app: stop following when the reader scrolls up by any input: Prevents the timeline from forcibly scrolling back to the latest message when the user scrolls up via keyboard, middle-click, or pointer input.
12. **[#66050](https://github.com/anomalyco/opencode/pull/66050)** Fix app: place the quote action, questions and Find by what the timeline shows: Aligns the session header and timeline interaction elements (Find, Quote) to the correct viewport position.
13. **[#64156](https://github.com/anomalyco/opencode/pull/64156)** Fix latex: support the LaTeX control space in math: Resolves rendering issues with LaTeX control spaces within math environments, closing a long-standing compatibility gap.
14. **[#66049](https://github.com/anomalyco/opencode/pull/66049)** Docs: add @novadalabs/opencode-novada to ecosystem plugins: Documentation update registering the Novada MCP server (web search, page extraction) in the ecosystem plugins table.
15. **[#66044](https://github.com/anomalyco/opencode/pull/66044)** Test core: don't depend on the bundled snapshot's prices for day re-pricing: Removes a test that incorrectly expected bundled model prices to change at midnight, fixing test flakiness related to model pricing snapshots.
16. **[#65983](https://github.com/anomalyco/opencode/pull/65983)** Fix core: keep service tier prices free when text prices aren't per token: Fixes pricing logic where service tier models (e.g., `acme-1-flex`) were incorrectly priced based on tier overrides instead of per-token calculations.
17. **[#65989](https://github.com/anomalyco/opencode/pull/65989)** Fix core: keep a mode's ID on the service tier it asks for: Ensures model catalog entries retain the correct mode IDs associated with their service tiers, preventing ID migration errors in the bundled catalog.
18. **[#66017](https://github.com/anomalyco/opencode/pull/66017)** Fix app: add scrollPort (stacked with #66034): Introduces a `scrollPort` utility to help manage reader viewport positioning during late content renders.
19. **[#66030](https://github.com/anomalyco/opencode/pull/66030)** (Implicit from #66020 context) Fix app: stop following on non-wheel scroll inputs: Works to decouple the reader's auto-follow behavior from keyboard and pointer scroll events.
20. **[#66046](https://github.com/anomalyco/opencode/pull/66046)** (Closed) Fix TUI: recover a missing session location when its folder is back: Original PR addressing the "Session location unavailable" persistence issue.

### Feature Request Trends

The issue stream reveals a strong focus on **reliability and state management** across heterogeneous environments.
*   **Resumability & Interruption**: There is significant demand for robust interruption handling, evident in PRs #66041 (AbortSignal support) and #66051 (Cloudflare Worker VM yielding). Developers want guarantees that long-running generations can be cleanly canceled without leaking tokens or hanging the UI.
*   **Cross-Platform Consistency**: Fixes for Windows (#66055), WSL (#66046), and macOS (#65771) indicate a trend toward making OpenCode behave consistently regardless of the underlying OS or deployment target (desktop vs. serverless).
*   **API & Provider Intelligence**: Issues #66052 and #66045 highlight a need for smarter provider abstraction. Users are frustrated when model metadata (packages, compatibility) breaks down when providers are configured in non-standard ways (e.g., Anthropic models behind an OpenAI-compatible proxy).
*   **TUI Navigation & Recovery**: The volume of TUI-related PRs (#66010, #66033, #66034, #66046, #66048) suggests the community values a responsive, navigable interface that recovers gracefully from transient errors like missing folders or network latency.

### Developer Pain Points

1.  **Quota & Rate Limit Handling**: The Gemini 429 retry issue (#66045/#66047) and the OpenAI-compatible provider key errors (#66052) represent a core pain point: OpenCode's failure/retry logic does not always respect the specific error semantics of different AI providers, leading to permanent failures or unnecessary token expenditure.
2.  **Differential Updates & Storage**: The macOS 12 SQLite issue and the Windows `.blockmap` 404 errors (#65859/#66042) frustrate users who expect seamless, lightweight updates. Forcing full reinstallers (~275MB) erodes trust in the auto-update mechanism.
3.  **Transient State Persistence**: The "Session location unavailable" TUI bug (#66046) and the `cd . > file` permission bypass (#66053) show that the tool struggles to manage transient infrastructure states (network shares, mounting drives, permission prompts) without leaving the UI in a broken or insecure state.
4.  **VM Yielding on Edge Platforms**: The Cloudflare Worker VM pause logic (#66051) exposes a friction point for developers running OpenCode in serverless or edge environments, where the standard `performance.now()` yielding pattern does not align with the runtime's event loop, causing the UI to become unresponsive.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Generated on:** 2026-11-24
**Source:** [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

---

## 1. Today's Highlights
Two release workflow failures occurred today for nightly builds `v0.28.3-nightly.20261124`, blocking the latest candidate versions from being tagged. Meanwhile, active development continues on session management, sandbox execution, and web-shell enhancements, with 50 PRs updated in the last 24 hours.

**Links:** [#18244 Release Failed](https://github.com/QwenLM/qwen-code/issues/18244) | [#18241 Release Failed](https://github.com/QwenLM/qwen-code/issues/18241)

---

## 2. Releases
No new stable releases were published in the last 24 hours. Two nightly release attempts failed due to integration test timeouts (`integration_none`, `integration_docker`), preventing `v0.28.3-nightly.20261124` from being tagged.

---

## 3. Hot Issues (10 Notable)
| Issue | Why It Matters | Community Reaction |
| :--- | :--- | :--- |
| [#18244](https://github.com/QwenLM/qwen-code/issues/18244) | Release workflow failed for `v0.28.3-nightly.20261124.56c15cf502`; integration tests (`integration_none`, `integration_docker`) errored. | 0 👍 | Critical blocker for nightly candidates. |
| [#18241](https://github.com/QwenLM/qwen-code/issues/18241) | Same release failure for `v0.28.3-nightly.20261124.7862c3eef3`; integration pipeline stalling. | 0 👍 | Repeated failure pattern; needs pipeline debugging. |
| [#18240](https://github.com/QwenLM/qwen-code/issues/18240) | Ecosystem listing proposal for "Niro", an independent iPhone companion for Qwen Code. | 0 👍 | Opens discussion on third-party integration eligibility. |
| [#17201](https://github.com/QwenLM/qwen-code/issues/17201) | Release failed for `v0.27.2-nightly.20261113.6f754be654` on 2026-11-13; still open after 11 days. | 0 👍 | Long-standing release stability issue. |
| [#18228](https://github.com/QwenLM/qwen-code/issues/18228) | Fix CLI/core to preserve ACP transport error cause and replay cut tool calls after model reasoning. | 0 👍 | Improves reliability of ACP session recovery. |
| [#18219](https://github.com/QwenLM/qwen-code/issues/18219) | Session transcripts created with world-readable permissions (`0644`), exposing credentials. | 0 👍 | Security concern: tool output and potential secrets in `*.jsonl` files. |
| [#18209](https://github.com/QwenLM/qwen-code/issues/18209) | Fix core to prevent compression deadlocks from unsigned thoughts and clamped budgets. | 0 👍 | Addresses repeated chat compression failures in long sessions. |
| [#18112](https://github.com/QwenLM/qwen-code/issues/18112) | Feature: surface and control session scheduled tasks (cron/loop wakeups) in-session via Web Shell. | 0 👍 | Enhances session automation and task visibility. |
| [#18226](https://github.com/QwenLM/qwen-code/issues/18226) | Feature: tiered sandbox execution for PR reviews, inheriting trust-aware model from #18181. | 0 👍 | Extends sandbox security to code-execution review phases. |
| [#18245](https://github.com/QwenLM/qwen-code/issues/18245) | Fix SDK to preserve Generated UI revocation delivery to all observers, even on throw. | 0 👍 | Ensures UI state consistency and proper cleanup. |

---

## 4. Key PR Progress (10 Important)
| PR | Description |
| :--- | :--- |
| [#18228](https://github.com/QwenLM/qwen-code/pull/18228) | **fix(cli,core):** Preserve ACP transport error cause and replay cut tool calls after model reasoning, improving session recovery reliability. |
| [#18219](https://github.com/QwenLM/qwen-code/pull/18219) | **fix(core):** Session transcripts now created with owner-only permissions (`0o600`), preventing credential exposure via world-readable `*.jsonl` files. |
| [#18009](https://github.com/QwenLM/qwen-code/pull/18009) | **feat(cli):** Retain and restore worktree snapshots across workspaces, implementing count-based retention for held chats and owner-scoped reconstruction. |
| [#18209](https://github.com/QwenLM/qwen-code/pull/18209) | **fix(core):** Prevent compression deadlocks by stripping unsigned historical reasoning blocks during cold compression input preparation. |
| [#18226](https://github.com/QwenLM/qwen-code/pull/18226) | **feat(cli):** Add tiered sandbox execution for PR reviews, introducing trust classification and mandatory high-security sandboxes for code execution. |
| [#18175](https://github.com/QwenLM/qwen-code/pull/18175) | **feat(cli):** Add built-in display translation (`general.displayLanguage`): translates model replies and thoughts to Simplified Chinese or English in terminals. |
| [#18243](https://github.com/QwenLM/qwen-code/pull/18243) | **fix(web-shell):** Preserve approval button styling (colors, borders, padding) in embeds after scoped button resets. |
| [#18112](https://github.com/QwenLM/qwen-code/pull/18112) | **feat(web-shell):** Surface and control session scheduled tasks (cron jobs, self-paced loop wakeups) directly in the conversation view with pause/run-now/delete controls. |
| [#18224](https://github.com/QwenLM/qwen-code/pull/18224) | **feat(managed-agent):** Park a child Session's approval wait; cold recovery resumes it, matching root Session behavior. |
| [#18238](https://github.com/QwenLM/qwen-code/pull/18238) | **fix(ci):** Make the main failure reporter workflow PAT optional; falls back to workflow token when credential is absent. |

---

## 5. Feature Request Trends
- **Session Management & Persistence:** Workspace snapshot retention/restoration (#18009), scheduled task visibility in Web Shell (#18112), and parking child session approvals (#18224) are prominent, indicating a focus on long-running multi-workflow stability.
- **Sandbox & Security:** Tiered sandbox execution for PR reviews (#18226) and credential-safe transcript generation (#18219) reflect ongoing efforts to balance functionality with security.
- **Developer Experience:** Built-in display translation (#18175), approval button styling in embeds (#18243), and cross-workspace file link resolution (#18199) target usability across terminal, web, and embedded contexts.
- **Release Pipeline Stability:** Repeated nightly release failures (#18244, #18241, #17201) suggest a need for pipeline robustness debugging, though this is an infrastructure concern rather than a feature request.

---

## 6. Developer Pain Points
- **Release Pipeline Instability:** Three release workflow failures in 11 days (including two today) point to unreliable integration test pipelines, blocking nightly candidate promotion.
- **Credential Leakage in Transcripts:** Session transcripts (`*.jsonl`) were previously world-readable (`0644`), risking exposure of tool output and embedded credentials; fixed in #18219.
- **Compression Deadlocks:** Long reasoning sessions repeatedly fail compression when history approaches the context window limit, resolved by stripping unsigned reasoning blocks (#18209).
- **ACP Transport Recovery:** Tool call streams stalling mid-arguments cause retry loops; PR #18228 addresses replay of cut tool calls after model reasoning.
- **UI/Embedding Consistency:** Approval button styling lost in Web Shell embeds after late resets (#18243), and Generated UI revocation delivery broken when observers throw (#18245).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Generated:** 2026-11-24

## 1. Today's Highlights
The Codewhale project shipped **v0.10.4**, a hotfix addressing a critical Windows Terminal paste bug where Ctrl+V doubled text and API keys. Simultaneously, the team closed a massive batch of 11 audit verification issues (R1-R15), signaling a push toward code quality and stability ahead of the v0.10.5 release.

## 2. Releases
*   **v0.10.4 (Hotfix):** Focuses on stability for Windows Terminal users. The release fixes a regression where Ctrl+V would paste text twice and inadvertently duplicate API keys entered in the `/provider` config. It also resolves an issue where `codewhale update` would refuse release binaries due to an unrelated cargo metadata error. [Release v0.10.4](https://github.com/Hmbown/DeepSeek-TUI/releases/tag/v0.10.4)

## 3. Hot Issues (Top 10)
1.  **#7344: GNOME Terminal Theme Persistence** [OPEN] – Users report that exiting Codewhale leaves GNOME Terminal stuck on a Nord theme background (`#ECEFF4`), requiring manual profile restoration. This highlights a cross-terminal state management issue.
2.  **#6801: API Route Provider Integration** [OPEN] – A feature request to add built-in support for the API Route provider, allowing users to discover and configure OpenAI-compatible endpoints without manual configuration.
3.  **#7463: R7 Audit Defects (6 items)** [CLOSED] – A batch closure of verified defects in `app-server` and `app-server-protocol`, reflecting the project's rigorous code audit process for the upcoming v0.10.5.
4.  **#7457: R1 Engine Defects (3 items)** [CLOSED] – Closure of defects in the core engine, improving reliability for the foundation of the TUI interface.
5.  **#7466: R10 Fleet/Work Graph Defects (8 items)** [CLOSED] – Significant refactoring and bug squashing in the fleet management and work graph subsystems.
6.  **#7458: R2 Tools Subagent Defects (7 items)** [CLOSED] – Fixes related to the subagent tooling layer within the engine.
7.  **#7471: R15 Config Defects (6 items)** [CLOSED] – Resolution of configuration-related bugs, likely impacting how providers and settings are handled.
8.  **#7532: External Agent Truncation & Mail Sanitization (R4)** [OPEN] – A contributor fix addressing `push_bounded` overflow and zero-alloc sanitization in the engine's runtime threads.
9.  **#7526: Sandbox/Secrets/Plugin R6 Audit Defects** [OPEN] – External contributor work to resolve remaining R6 audit defects and add regression tests for sandbox and plugin subsystems.
10. **#7506: AtmoRouter Provider Descriptor** [OPEN] – Addition of AtmoRouter as a bundled compatible-host descriptor, expanding the list of supported OpenAI-compatible gateways.

## 4. Key PR Progress (Top 10)
1.  **#7531: Local Multi-Whale Runtime** [OPEN] by Hmbown – Introduces a Runtime API (`/v1/whales`) enabling local specialist whales, unblocking credit and blocking-call checks for the main runtime.
2.  **#7510: Feishu/WeCom Bridge Fix** [CLOSED] by Hmbown – Moves the turn event loop into `bridge-core`, eliminating duplicate loops for Feishu and WeCom integrations and improving event handling consistency.
3.  **#7519: Update Ownership Check** [CLOSED] by Hmbown – Implements a streamlined one-line update mechanism with an ownership check, allowing installers to defer to the binary and providing honest rollback capabilities.
4.  **#7500: Lifecycle Outbox Hardening** [CLOSED] by NieZhuZhu – Reworks the lifecycle outbox with cross-process seq locking and fsync, addressing torn-tail recovery and Windows byte-range lock errors.
5.  **#7529: Runtime Cloud-Facts & Dependencies** [OPEN] by NieZhuZhu – Resolves R16 audit defects and unifies the cloud-facts refresh mechanism within the runtime.
6.  **#7527: Responses Cache Miss Handling** [OPEN] by SamhandsomeLee – Fixes logic to keep cache-miss tokens "unknown" when providers don't report an input total, preventing inaccurate token usage tracking.
7.  **#7528: Responses SSE Conformance Fixtures** [OPEN] by SamhandsomeLee – Adds top-level cache precedence fixtures and audio count recording for the Responses API stream parser.
8.  **#7525: Onomeo Provider Descriptor** [CLOSED] – Bundles onomeo as a compatible-host descriptor, supporting Claude, GPT, Gemini, and DeepSeek models behind a single key.
9.  **#7522: Engine Item Index Optimization** [CLOSED] by gaord – Performance improvement to read only the `owner` field when indexing item records, reducing deserialization overhead.
10. **#7530: CLI/Release/Snapshot R19 Audit Defects** [OPEN] by NieZhuZhu – External contributor fix resolving remaining R19 audit defects across CLI, release, and skills subsystems.

## 5. Feature Request Trends
*   **Provider Ecosystem Expansion:** There is a strong demand for broadening compatible-host support. Recent PRs (#7506, #7525) and open issues (#6801, #7340) show the community actively adding descriptors for gateways like AtmoRouter, onomeo, and Synap.
*   **Cross-Platform Terminal Stability:** Issues like #7344 reveal a recurring pain point regarding terminal state persistence (specifically GNOME Terminal). Users expect the TUI to restore original palette/colors upon exit, indicating a need for robust "cleanup" hooks.
*   **Audit & Quality Assurance:** A significant portion of recent activity consists of closing verified defect batches (R1-R19). This trend suggests a maturing project prioritizing code reliability, stability, and regression testing over rapid feature shipping.
*   **Multi-Whale & Runtime Management:** The introduction of the local multi-whale runtime (#7531) indicates a shift towards managing multiple specialized AI instances (whales) locally, moving away from a single monolithic session.

## 6. Developer Pain Points
*   **Windows Terminal Clipboard Bug:** The v0.10.4 hotfix directly addresses the `#1` frustration: Ctrl+V pasting text twice and duplicating API keys. This is a critical usability bug for Windows power users.
*   **Terminal State Leakage:** The GNOME Terminal Nord theme persistence (#7344) is a subtle but annoying UX issue where the terminal profile is altered globally after using the tool, requiring manual intervention to reset.
*   **Complex Audit Workflow:** The high volume of "R# audit defects" issues and PRs indicates that developers frequently encounter strict linting, safety, or design review hurdles when contributing, which can be a friction point for external contributors.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*